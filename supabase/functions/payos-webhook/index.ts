// ═══════════════════════════════════════════════════════════════════════
// payos-webhook/index.ts — Supabase Edge Function
// Receives PayOS payment webhook, verifies signature, activates subscription.
//
// PayOS delivers a POST with JSON body:
//   {
//     code: '00' | ...,
//     desc: string,
//     success: boolean,
//     data: {
//       orderCode: number,
//       amount: number,
//       description: string,
//       accountNumber: string,
//       reference: string,
//       transactionDateTime: string,
//       currency: string,
//       paymentLinkId: string,
//       code: string,
//       desc: string,
//       counterAccountBankId: string | null,
//       counterAccountBankName: string | null,
//       counterAccountName: string | null,
//       counterAccountNumber: string | null,
//       virtualAccountName: string | null,
//       virtualAccountNumber: string | null,
//     },
//     signature: string   ← HMAC-SHA256 of sorted data fields
//   }
//
// Environment variables required:
//   PAYOS_CHECKSUM_KEY        — same key used in create-payment
//   SUPABASE_URL
//   SUPABASE_SERVICE_ROLE_KEY
// ═══════════════════════════════════════════════════════════════════════

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// ── Subscription catalog (mirrors create-payment) ─────────────────────
// durationDays = null → lifetime (perpetual, expires_at NULL)

const SUBSCRIPTION_CONFIG: Record<
  string,
  { durationDays: number | null; tokenBonus: number }
> = {
  monthly:    { durationDays: 30,   tokenBonus: 150  },
  quarterly:  { durationDays: 90,   tokenBonus: 500  },
  semiannual: { durationDays: 180,  tokenBonus: 1200 },
  yearly:     { durationDays: 365,  tokenBonus: 3000 },
  lifetime:   { durationDays: null, tokenBonus: 8000 },
};

// Token Shop catalog — tokens credited on successful payment
const TOKEN_PACK_CONFIG: Record<string, { tokens: number; bonus: number }> = {
  pack100:  { tokens:  100, bonus:   0 },
  pack500:  { tokens:  500, bonus:  50 },
  pack1200: { tokens: 1200, bonus: 200 },
  pack3000: { tokens: 3000, bonus: 600 },
};

// Legacy plan name → new duration mapping (for orders created before v7)
const LEGACY_PLAN_TO_SKU: Record<string, string> = {
  basic: "monthly",
  pro:   "yearly",
  max:   "lifetime",
};

// ── Signature verification ─────────────────────────────────────────────

/**
 * PayOS webhook signature is HMAC-SHA256 over a sorted query string of
 * all fields inside `data` (same pattern as create-payment, but applied
 * to the full data object keys, alphabetically sorted).
 *
 * PayOS documentation states: concatenate all fields in `data` as
 *   key1=value1&key2=value2...  (keys sorted A-Z, null → empty string)
 * then HMAC-SHA256 with PAYOS_CHECKSUM_KEY.
 */
async function verifyWebhookSignature(
  data: Record<string, unknown>,
  receivedSignature: string,
  checksumKey: string,
): Promise<boolean> {
  // Sort keys alphabetically, convert null/undefined → empty string
  const sortedKeys = Object.keys(data).sort();
  const queryString = sortedKeys
    .map((k) => {
      const v = data[k];
      return `${k}=${v == null ? "" : String(v)}`;
    })
    .join("&");

  const keyBytes = new TextEncoder().encode(checksumKey);
  const msgBytes = new TextEncoder().encode(queryString);

  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    keyBytes,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signatureBuffer = await crypto.subtle.sign("HMAC", cryptoKey, msgBytes);
  const computedSignature = Array.from(new Uint8Array(signatureBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return computedSignature === receivedSignature;
}

// ── Main handler ───────────────────────────────────────────────────────

Deno.serve(async (req: Request): Promise<Response> => {
  // PayOS always expects HTTP 200 — even on error — otherwise it will
  // retry the webhook. We return 200 in all paths and log internal errors.

  if (req.method !== "POST") {
    // Silently ack non-POST (e.g., PayOS health probes)
    return ok("ignored");
  }

  // ── Parse body ────────────────────────────────────────────────────
  let webhook: {
    code?: string;
    desc?: string;
    success?: boolean;
    data?: Record<string, unknown>;
    signature?: string;
  };

  try {
    webhook = await req.json();
  } catch (err) {
    console.error("[payos-webhook] Invalid JSON:", err);
    return ok("invalid_json");
  }

  const { code, data, signature } = webhook;

  console.log(`[payos-webhook] Received: code=${code}, orderCode=${data?.orderCode}`);

  // ── Env vars ──────────────────────────────────────────────────────
  const payosChecksumKey = Deno.env.get("PAYOS_CHECKSUM_KEY");
  const supabaseUrl      = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey   = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!payosChecksumKey || !supabaseUrl || !serviceRoleKey) {
    console.error("[payos-webhook] Missing environment variables — cannot process");
    return ok("config_error");
  }

  // ── Verify signature ──────────────────────────────────────────────
  if (!data || !signature) {
    console.error("[payos-webhook] Missing data or signature field");
    return ok("missing_fields");
  }

  let signatureValid: boolean;
  try {
    signatureValid = await verifyWebhookSignature(
      data as Record<string, unknown>,
      signature,
      payosChecksumKey,
    );
  } catch (err) {
    console.error("[payos-webhook] Signature verification threw:", err);
    return ok("sig_error");
  }

  if (!signatureValid) {
    console.error(
      `[payos-webhook] Signature mismatch for orderCode=${data.orderCode} — possible forgery`,
    );
    return ok("sig_mismatch");
  }

  // ── Only process successful payments ─────────────────────────────
  // PayOS uses code '00' for success at both the envelope and data level.
  if (code !== "00") {
    console.log(`[payos-webhook] Non-success code=${code} for orderCode=${data.orderCode}, skipping`);
    return ok("non_success");
  }

  const orderCode = data.orderCode as number;
  if (!orderCode) {
    console.error("[payos-webhook] Missing orderCode in data");
    return ok("missing_order_code");
  }

  // ── Supabase client (service role — bypasses RLS) ─────────────────
  const supabase = createClient(supabaseUrl, serviceRoleKey);

  // ── Look up pending order ─────────────────────────────────────────
  const { data: order, error: orderErr } = await supabase
    .from("payment_orders")
    .select("id, user_id, order_type, sku, plan, amount, status")
    .eq("order_code", orderCode)
    .maybeSingle();

  if (orderErr) {
    console.error("[payos-webhook] DB error looking up order:", orderErr.message);
    return ok("db_error");
  }

  if (!order) {
    console.error(`[payos-webhook] No order found for orderCode=${orderCode}`);
    return ok("order_not_found");
  }

  if (order.status === "paid") {
    // Idempotency: webhook already processed (PayOS may deliver more than once)
    console.log(`[payos-webhook] Order ${orderCode} already paid, skipping duplicate`);
    return ok("already_processed");
  }

  const userId = order.user_id as string;

  // Resolve order type + sku (with legacy fallback)
  const orderType = (order.order_type as string) || "subscription";
  let sku = (order.sku as string) || (order.plan as string);
  if (orderType === "subscription" && LEGACY_PLAN_TO_SKU[sku]) {
    sku = LEGACY_PLAN_TO_SKU[sku];
  }

  // ── Branch: subscription vs token ─────────────────────────────────
  if (orderType === "subscription") {
    const cfg = SUBSCRIPTION_CONFIG[sku];
    if (!cfg) {
      console.error(`[payos-webhook] Unknown subscription SKU '${sku}' for order ${orderCode}`);
      return ok("unknown_sku");
    }

    const expiresAt = cfg.durationDays === null
      ? null  // lifetime — perpetual
      : new Date(Date.now() + cfg.durationDays * 24 * 60 * 60 * 1000).toISOString();

    const { error: subErr } = await supabase
      .from("user_subscriptions")
      .upsert(
        {
          user_id:          userId,
          plan:             "pro",
          duration:         sku,
          status:           "active",
          started_at:       new Date().toISOString(),
          expires_at:       expiresAt,
          payos_order_code: orderCode,
        },
        { onConflict: "user_id" },
      );

    if (subErr) {
      console.error("[payos-webhook] Failed to upsert user_subscriptions:", subErr.message);
      return ok("sub_upsert_error");
    }

    // Grant one-time token bonus for this subscription tier
    if (cfg.tokenBonus > 0) {
      const { error: bonusErr } = await supabase.rpc("grant_tokens", {
        p_user_id: userId,
        p_delta:   cfg.tokenBonus,
        p_reason:  `subscription_bonus_${sku}`,
        p_ref:     String(orderCode),
      });
      if (bonusErr) {
        console.error("[payos-webhook] Token bonus grant failed:", bonusErr.message);
        // Non-fatal: subscription already active.
      }
    }

    console.log(
      `[payos-webhook] SUBSCRIPTION OK — user=${userId} duration=${sku} expires=${expiresAt} bonus=${cfg.tokenBonus} orderCode=${orderCode}`,
    );
  } else if (orderType === "token") {
    const cfg = TOKEN_PACK_CONFIG[sku];
    if (!cfg) {
      console.error(`[payos-webhook] Unknown token pack SKU '${sku}' for order ${orderCode}`);
      return ok("unknown_sku");
    }

    const totalTokens = cfg.tokens + cfg.bonus;
    const { error: grantErr } = await supabase.rpc("grant_tokens", {
      p_user_id: userId,
      p_delta:   totalTokens,
      p_reason:  `purchase_${sku}`,
      p_ref:     String(orderCode),
    });

    if (grantErr) {
      console.error("[payos-webhook] Token purchase grant failed:", grantErr.message);
      return ok("token_grant_error");
    }

    console.log(
      `[payos-webhook] TOKEN PURCHASE OK — user=${userId} sku=${sku} tokens=+${totalTokens} orderCode=${orderCode}`,
    );
  } else {
    console.error(`[payos-webhook] Unknown order_type '${orderType}' for order ${orderCode}`);
    return ok("unknown_order_type");
  }

  // ── Mark order as paid ────────────────────────────────────────────
  const { error: updateErr } = await supabase
    .from("payment_orders")
    .update({ status: "paid", paid_at: new Date().toISOString() })
    .eq("order_code", orderCode);

  if (updateErr) {
    // Non-fatal: subscription / tokens already granted.
    console.error("[payos-webhook] Failed to mark order as paid:", updateErr.message);
  }

  return ok("success");
});

// ── Utility ───────────────────────────────────────────────────────────

function ok(status: string): Response {
  return new Response(JSON.stringify({ received: true, status }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
