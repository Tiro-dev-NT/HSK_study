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

// ── Subscription duration per plan ────────────────────────────────────

const PLAN_DURATION_DAYS: Record<string, number> = {
  basic: 30,
  pro:   30,
  max:   365,
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
    .select("id, user_id, plan, amount, status")
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

  const { user_id: userId, plan } = order;

  // ── Calculate subscription expiry ────────────────────────────────
  const durationDays = PLAN_DURATION_DAYS[plan] ?? 30;
  const expiresAt = new Date(Date.now() + durationDays * 24 * 60 * 60 * 1000).toISOString();

  // ── Upsert subscription ───────────────────────────────────────────
  // user_subscriptions has UNIQUE(user_id) so upsert on conflict.
  const { error: subErr } = await supabase
    .from("user_subscriptions")
    .upsert(
      {
        user_id:          userId,
        plan,
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

  // ── Mark order as paid ────────────────────────────────────────────
  const { error: updateErr } = await supabase
    .from("payment_orders")
    .update({ status: "paid", paid_at: new Date().toISOString() })
    .eq("order_code", orderCode);

  if (updateErr) {
    // Non-fatal: subscription is already activated
    console.error("[payos-webhook] Failed to mark order as paid:", updateErr.message);
  }

  console.log(
    `[payos-webhook] SUCCESS — user=${userId} plan=${plan} expires=${expiresAt} orderCode=${orderCode}`,
  );

  return ok("success");
});

// ── Utility ───────────────────────────────────────────────────────────

function ok(status: string): Response {
  return new Response(JSON.stringify({ received: true, status }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
