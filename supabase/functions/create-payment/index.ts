// ═══════════════════════════════════════════════════════════════════════
// create-payment/index.ts — Supabase Edge Function
// Creates a PayOS payment request and stores a pending order in Supabase.
// Supports two order types:
//   • subscription — Pro plan with 5 durations (monthly/quarterly/...)
//   • token        — Token Shop standalone pack purchase
//
// Expected request body:
//   {
//     type: 'subscription' | 'token',
//     sku:  'monthly'|'quarterly'|'semiannual'|'yearly'|'lifetime'
//           | 'pack100'|'pack500'|'pack1200'|'pack3000',
//     userId: string, userEmail: string, userName?: string
//   }
//
// Prices are server-side authoritative — DO NOT trust client.
// Must stay in sync with js/data/plans.js.
//
// Environment variables required:
//   PAYOS_CLIENT_ID       — PayOS merchant client ID
//   PAYOS_API_KEY         — PayOS API key (x-client-id / x-api-key header)
//   PAYOS_CHECKSUM_KEY    — PayOS checksum key for HMAC-SHA256 signature
//   SUPABASE_URL          — your Supabase project URL
//   SUPABASE_SERVICE_ROLE_KEY — service role key (bypasses RLS)
// ═══════════════════════════════════════════════════════════════════════

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// ── Constants ──────────────────────────────────────────────────────────

const PAYOS_API_URL = "https://api-merchant.payos.vn/v2/payment-requests";
const BASE_URL = "https://hanzigenz.com";

// Pro subscription catalog — durationDays=null means lifetime (perpetual).
const SUBSCRIPTION_CONFIG: Record<
  string,
  { amount: number; label: string; durationDays: number | null; tokenBonus: number }
> = {
  monthly:    { amount: 75_000,    label: "Pro Linh hoạt (1 tháng)",  durationDays: 30,   tokenBonus: 150  },
  quarterly:  { amount: 199_000,   label: "Pro Chăm chỉ (3 tháng)",   durationDays: 90,   tokenBonus: 500  },
  semiannual: { amount: 329_000,   label: "Pro Bứt phá (6 tháng)",    durationDays: 180,  tokenBonus: 1200 },
  yearly:     { amount: 499_000,   label: "Pro Tiết kiệm (1 năm)",    durationDays: 365,  tokenBonus: 3000 },
  lifetime:   { amount: 999_000,   label: "Pro Trọn đời (Lifetime)",  durationDays: null, tokenBonus: 8000 },
};

// Token Shop catalog
const TOKEN_PACK_CONFIG: Record<
  string,
  { amount: number; tokens: number; bonus: number; label: string }
> = {
  pack100:  { amount:  19_000, tokens:  100, bonus:   0, label: "Pack 100 token"  },
  pack500:  { amount:  79_000, tokens:  500, bonus:  50, label: "Pack 500 token (+50 bonus)"   },
  pack1200: { amount: 159_000, tokens: 1200, bonus: 200, label: "Pack 1.200 token (+200 bonus)" },
  pack3000: { amount: 349_000, tokens: 3000, bonus: 600, label: "Pack 3.000 token (+600 bonus)" },
};

// CORS — allow production origin + localhost dev
const ALLOWED_ORIGINS = new Set([BASE_URL, "http://localhost", "http://127.0.0.1"]);

function getCorsHeaders(origin: string | null): Record<string, string> {
  // Allow any localhost port (e.g. :4173, :5173, :8080) and the production domain
  const allowed =
    origin && (ALLOWED_ORIGINS.has(origin) || /^https?:\/\/localhost(:\d+)?$/.test(origin) || /^https?:\/\/127\.0\.0\.1(:\d+)?$/.test(origin))
      ? origin
      : BASE_URL;
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

// ── Signature helper ───────────────────────────────────────────────────

/**
 * Builds the PayOS HMAC-SHA256 signature.
 *
 * PayOS specifies: HMAC-SHA256 of the canonically sorted query string
 *   amount=X&cancelUrl=X&description=X&orderCode=X&returnUrl=X
 * using PAYOS_CHECKSUM_KEY as the secret.
 */
async function buildPayOSSignature(
  params: { amount: number; cancelUrl: string; description: string; orderCode: number; returnUrl: string },
  checksumKey: string,
): Promise<string> {
  // Keys must be sorted alphabetically — PayOS requirement
  const sorted = [
    `amount=${params.amount}`,
    `cancelUrl=${params.cancelUrl}`,
    `description=${params.description}`,
    `orderCode=${params.orderCode}`,
    `returnUrl=${params.returnUrl}`,
  ].join("&");

  const keyBytes = new TextEncoder().encode(checksumKey);
  const msgBytes = new TextEncoder().encode(sorted);

  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    keyBytes,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signatureBuffer = await crypto.subtle.sign("HMAC", cryptoKey, msgBytes);
  return Array.from(new Uint8Array(signatureBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// ── Main handler ───────────────────────────────────────────────────────

Deno.serve(async (req: Request): Promise<Response> => {
  const corsHeaders = getCorsHeaders(req.headers.get("origin"));

  // Preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // ── Shorthand for JSON errors with correct CORS headers ──────────
  const err = (status: number, message: string) =>
    new Response(JSON.stringify({ error: message }), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  // ── Parse body ────────────────────────────────────────────────────
  let body: {
    type?: string;
    sku?: string;
    plan?: string;        // legacy
    userId?: string;
    userEmail?: string;
    userName?: string;
  };
  try {
    body = await req.json();
  } catch {
    return err(400, "Invalid JSON body");
  }

  // Backward-compat: old clients sent `plan` only.
  const orderType = body.type || "subscription";
  const sku       = body.sku || body.plan;
  const { userId, userEmail, userName } = body;

  if (!sku || !userId || !userEmail) {
    return err(400, "Missing required fields: sku, userId, userEmail");
  }
  if (!["subscription", "token"].includes(orderType)) {
    return err(400, `Unknown order type '${orderType}'. Must be subscription or token.`);
  }

  // Resolve catalog entry server-side (do not trust client price)
  let amount: number;
  let label: string;
  if (orderType === "subscription") {
    const cfg = SUBSCRIPTION_CONFIG[sku];
    if (!cfg) return err(400, `Unknown subscription SKU '${sku}'.`);
    amount = cfg.amount;
    label  = cfg.label;
  } else {
    const cfg = TOKEN_PACK_CONFIG[sku];
    if (!cfg) return err(400, `Unknown token pack SKU '${sku}'.`);
    amount = cfg.amount;
    label  = cfg.label;
  }

  // ── Env vars ──────────────────────────────────────────────────────
  const payosClientId   = Deno.env.get("PAYOS_CLIENT_ID");
  const payosApiKey     = Deno.env.get("PAYOS_API_KEY");
  const payosChecksumKey = Deno.env.get("PAYOS_CHECKSUM_KEY");
  const supabaseUrl     = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey  = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!payosClientId || !payosApiKey || !payosChecksumKey || !supabaseUrl || !serviceRoleKey) {
    console.error("[create-payment] Missing environment variables");
    return err(500, "Server configuration error");
  }

  // ── Generate order code ───────────────────────────────────────────
  // PayOS requires a positive integer ≤ 9007199254740991 (JS max safe int).
  // We use unix timestamp in ms, which fits comfortably.
  const orderCode = Date.now();

  const returnUrl = `${BASE_URL}/?payment=success&type=${orderType}&sku=${sku}`;
  const cancelUrl = `${BASE_URL}/`;
  const description = `HanziGenz ${label}`;

  // ── Build PayOS signature ─────────────────────────────────────────
  let signature: string;
  try {
    signature = await buildPayOSSignature(
      { amount, cancelUrl, description, orderCode, returnUrl },
      payosChecksumKey,
    );
  } catch (e) {
    console.error("[create-payment] Signature error:", e);
    return err(500, "Failed to generate payment signature");
  }

  // ── Build PayOS request payload ───────────────────────────────────
  const payosPayload = {
    orderCode,
    amount,
    description,
    buyerName:  userName  || "",
    buyerEmail: userEmail || "",
    buyerPhone: "",
    buyerAddress: "",
    items: [
      {
        name:     `HanziGenz ${label}`,
        quantity: 1,
        price:    amount,
      },
    ],
    cancelUrl,
    returnUrl,
    signature,
    expiredAt: Math.floor(Date.now() / 1000) + 15 * 60, // 15-minute window
  };

  // ── Call PayOS API ────────────────────────────────────────────────
  let checkoutUrl: string;
  try {
    const payosRes = await fetch(PAYOS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-client-id": payosClientId,
        "x-api-key":   payosApiKey,
      },
      body: JSON.stringify(payosPayload),
    });

    const payosData = await payosRes.json();
    console.log("[create-payment] PayOS response:", JSON.stringify(payosData));

    if (!payosRes.ok || payosData.code !== "00") {
      const msg = payosData.desc || payosData.message || "PayOS API error";
      console.error("[create-payment] PayOS rejected:", msg);
      return err(502, `Payment gateway error: ${msg}`);
    }

    checkoutUrl = payosData.data?.checkoutUrl;
    if (!checkoutUrl) {
      console.error("[create-payment] No checkoutUrl in PayOS response");
      return err(502, "Payment gateway did not return a checkout URL");
    }
  } catch (e) {
    console.error("[create-payment] Fetch to PayOS failed:", e);
    return err(502, "Could not reach payment gateway");
  }

  // ── Store pending order in Supabase ───────────────────────────────
  const supabase = createClient(supabaseUrl, serviceRoleKey);

  const { error: dbError } = await supabase.from("payment_orders").insert({
    order_code:   orderCode,
    user_id:      userId,
    user_email:   userEmail,
    order_type:   orderType,
    sku,
    // Legacy `plan` column kept populated for back-compat with old reports.
    plan:         orderType === "subscription" ? sku : "token",
    amount,
    status:       "pending",
    checkout_url: checkoutUrl,
  });

  if (dbError) {
    // Non-fatal: log and continue — the PayOS link is already created.
    // The webhook will still update the subscription when payment completes.
    console.error("[create-payment] DB insert error:", dbError.message);
  }

  // ── Return checkout URL to frontend ──────────────────────────────
  console.log(`[create-payment] Order ${orderCode} created — user=${userId} type=${orderType} sku=${sku}`);

  return new Response(
    JSON.stringify({ checkoutUrl, orderCode }),
    {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    },
  );
});
