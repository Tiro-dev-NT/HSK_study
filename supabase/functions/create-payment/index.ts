// ═══════════════════════════════════════════════════════════════════════
// create-payment/index.ts — Supabase Edge Function
// Creates a PayOS payment request and stores a pending order in Supabase.
//
// Expected request body:
//   { plan: 'basic'|'pro'|'max', userId: string, userEmail: string, userName?: string }
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

const PLAN_CONFIG: Record<string, { amount: number; label: string; durationDays: number }> = {
  basic: { amount: 49_000,  label: "Basic 1 tháng",  durationDays: 30  },
  pro:   { amount: 299_000, label: "Pro 1 tháng",    durationDays: 30  },
  max:   { amount: 799_000, label: "Max 1 năm",       durationDays: 365 },
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
  let body: { plan?: string; userId?: string; userEmail?: string; userName?: string };
  try {
    body = await req.json();
  } catch {
    return err(400, "Invalid JSON body");
  }

  const { plan, userId, userEmail, userName } = body;

  if (!plan || !userId || !userEmail) {
    return err(400, "Missing required fields: plan, userId, userEmail");
  }
  if (!["basic", "pro", "max"].includes(plan)) {
    return err(400, `Unknown plan '${plan}'. Must be basic, pro, or max.`);
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

  const planCfg = PLAN_CONFIG[plan];

  // ── Generate order code ───────────────────────────────────────────
  // PayOS requires a positive integer ≤ 9007199254740991 (JS max safe int).
  // We use unix timestamp in ms, which fits comfortably.
  const orderCode = Date.now();

  const returnUrl = `${BASE_URL}/?payment=success&plan=${plan}`;
  const cancelUrl = `${BASE_URL}/`;
  const description = `HanziGenz ${planCfg.label}`;

  // ── Build PayOS signature ─────────────────────────────────────────
  let signature: string;
  try {
    signature = await buildPayOSSignature(
      { amount: planCfg.amount, cancelUrl, description, orderCode, returnUrl },
      payosChecksumKey,
    );
  } catch (e) {
    console.error("[create-payment] Signature error:", e);
    return err(500, "Failed to generate payment signature");
  }

  // ── Build PayOS request payload ───────────────────────────────────
  const payosPayload = {
    orderCode,
    amount: planCfg.amount,
    description,
    buyerName:  userName  || "",
    buyerEmail: userEmail || "",
    buyerPhone: "",
    buyerAddress: "",
    items: [
      {
        name:     `HanziGenz ${planCfg.label}`,
        quantity: 1,
        price:    planCfg.amount,
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
    order_code:  orderCode,
    user_id:     userId,
    user_email:  userEmail,
    plan,
    amount:      planCfg.amount,
    status:      "pending",
    checkout_url: checkoutUrl,
  });

  if (dbError) {
    // Non-fatal: log and continue — the PayOS link is already created.
    // The webhook will still update the subscription when payment completes.
    console.error("[create-payment] DB insert error:", dbError.message);
  }

  // ── Return checkout URL to frontend ──────────────────────────────
  console.log(`[create-payment] Order ${orderCode} created for user ${userId}, plan=${plan}`);

  return new Response(
    JSON.stringify({ checkoutUrl, orderCode }),
    {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    },
  );
});
