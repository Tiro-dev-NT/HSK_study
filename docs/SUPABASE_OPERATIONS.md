# 🗄️ Hanzi Genz — Supabase Operations Checklist

> Tổng hợp mọi việc cần làm trên Supabase Dashboard: RLS audit, schema mới, RPC functions, Edge Function whitelist, indexes, retention. Track status từng việc.
> **Last updated:** 2026-05-23
> **Liên quan:** [COMPLIANCE_CHECKLIST.md](COMPLIANCE_CHECKLIST.md) · [AI_CREDIT_PRICING.md](AI_CREDIT_PRICING.md) · [HONOR_PACK_DESIGN.md](HONOR_PACK_DESIGN.md) · `sql/`
>
> ⚠️ **Mọi việc trong file này USER PHẢI TỰ LÀM** — Claude không truy cập được Supabase Dashboard của bạn. Mình cung cấp SQL/script, bạn copy-paste chạy.

---

## 🚦 Priority list (theo thứ tự)

| # | Việc | Risk nếu skip | Effort | Status |
|---|---|---|---|---|
| 1 | RLS audit (chạy `sql/audit_rls.sql`) | 🔴 Data leak | 5 phút | ⏳ |
| 2 | RLS setup nếu thiếu (chạy `sql/setup_rls_policies.sql`) | 🔴 | 5 phút | ⏳ |
| 3 | Verify lại bằng audit script | 🔴 | 2 phút | ⏳ |
| 4 | Test exploitation từ console F12 | 🔴 | 5 phút | ⏳ |
| 5 | Backup hiện tại (export SQL trước khi chạy migration) | 🟠 | 5 phút | ⏳ |
| 6 | Audit Edge Function whitelist SKU (cũ → mới) | 🔴 (post-launch) | 30 phút | ⏳ |
| 7 | Indexes performance | 🟠 | 15 phút | ⏳ |
| 8 | Data retention auto-cleanup | 🟡 | 30 phút | ⏳ |
| 9 | Backup retention 30 ngày | 🟡 | 5 phút | ⏳ |

---

## 1️⃣ RLS audit + setup (PRIORITY 1)

### Bước 1.1 — Backup trước khi chạy SQL migration

Supabase Dashboard → Database → Backups → "Create manual backup" (giữ ~30 ngày tự động).

### Bước 1.2 — Chạy audit script

1. Vào Supabase Dashboard → **SQL Editor** → New query
2. Mở file `sql/audit_rls.sql` → copy toàn bộ → paste
3. Click **Run** (Ctrl+Enter)
4. Đọc kết quả 5 phần (PART 1-5)

**Output mong đợi:**
- PART 4 (CRITICAL): **0 row** = không có table user_* nào tắt RLS
- PART 5 SUMMARY: `rls_disabled_CRITICAL = 0`

**Nếu PART 4 có row:**
- Lấy `fix_command` (ALTER TABLE...) → chạy ngay
- Hoặc dùng setup script ở bước 1.3

### Bước 1.3 — Chạy setup script

Nếu audit phát hiện thiếu RLS / thiếu policy:

1. SQL Editor → New query
2. Paste toàn bộ `sql/setup_rls_policies.sql`
3. Click **Run**

Script này **idempotent** — chạy lại an toàn (DROP IF EXISTS + CREATE).

**Script làm gì:**
- Bật RLS cho 8 bảng user_* + payment_orders
- Tạo 4 policy/bảng (SELECT/INSERT/UPDATE/DELETE với auth.uid())
- Tạo 3 bảng mới: `user_ai_credit_balance`, `ai_credit_ledger`, `user_honor_purchases`
- Tạo 2 RPC: `consume_ai_credit()`, `delete_account_cascade()`

### Bước 1.4 — Verify lại

Chạy `audit_rls.sql` lần 2 → check PART 5:
- `rls_enabled = total_user_tables`
- `rls_disabled_CRITICAL = 0`
- `total_policies ≥ total_user_tables × 4`

### Bước 1.5 — Test exploitation từ console F12

1. Login app bằng acc test A
2. F12 → Console → paste:

```js
// Test 1: user_subscriptions phải chỉ trả row của mình
const { data: subs } = await window.SB.from('user_subscriptions').select('*');
console.log('Subscriptions visible:', subs?.length, '(should be 0 or 1, not all users)');

// Test 2: user_decks tương tự
const { data: decks } = await window.SB.from('user_decks').select('*');
console.log('Decks visible:', decks?.length);

// Test 3: payment_orders
const { data: orders } = await window.SB.from('payment_orders').select('*');
console.log('Orders visible:', orders?.length);

// Test 4: thử insert row với user_id khác → phải fail
const { error } = await window.SB
  .from('user_xp')
  .insert({ user_id: '00000000-0000-0000-0000-000000000000', xp: 9999 });
console.log('Insert fake user_id:', error ? '✅ BLOCKED' : '🔴 ALLOWED (BAD)');
```

→ Tất cả số phải **chỉ là của user A** hoặc 0. Test 4 phải BLOCKED.

---

## 2️⃣ Schema mới cho Phase 2 monetization (đã trong setup_rls)

Setup script đã tạo 3 bảng + 2 RPC. **Không cần làm gì thêm** ngoài chạy script.

### Bảng mới

| Bảng | Mục đích | Lưu gì |
|---|---|---|
| `user_ai_credit_balance` | Số dư AI Credit hiện tại | balance, allowance reset, daily counter |
| `ai_credit_ledger` | Audit trail mọi giao dịch AI Credit | +/- amount, task type, balance after |
| `user_honor_purchases` | Lịch sử Hộp Ân Cần | month_year, outfit_id, payment ref |

### RPC functions

| RPC | Gọi từ đâu | Trả về |
|---|---|---|
| `consume_ai_credit(amount, task_type, reason)` | Khi user dùng AI hạng 2 (Phase R/S/Y) | `{ ok, balance, error? }` |
| `delete_account_cascade()` | Khi user xoá tài khoản (Settings) | `{ ok, message }` |

→ Phase 2 code sẽ gọi 2 RPC này qua `supabase.rpc('consume_ai_credit', {...})`.

### RPC còn thiếu (CẦN viết trong tương lai)

| RPC | Mục đích | Khi nào cần |
|---|---|---|
| `grant_ai_credit(user_id, amount, reason)` | Webhook PayOS nạp credit khi user mua pack | Phase 2 — Edge Function |
| `reset_monthly_allowance()` | Cron daily reset allowance Pro user | Phase 2 |
| `cancel_subscription()` | User Settings → Huỷ Pro 1-click | Phase 2 |
| `purchase_honor_pack(month_year)` | Webhook PayOS tạo `user_honor_purchases` | Phase 2 |
| `check_honor_cap(user_id)` | Verify cap 12/năm trước thanh toán | Phase 2 |

→ Mình có thể viết khi user yêu cầu / khi Phase 2 bắt đầu.

---

## 3️⃣ Edge Function `create-payment` — update whitelist SKU

**File:** `supabase/functions/create-payment/index.ts`

**Cần làm:**
1. **XOÁ** SKU cũ: `pack100`, `pack500`, `pack1200`, `pack3000` (Token Pack VND deprecated)
2. **THÊM** SKU mới:
   - `aipack_so`, `aipack_trung`, `aipack_cao` (AI Credit Pack BETA)
   - `honor_pack` (Hộp Ân Cần)
3. **Update giá** Lifetime: 1.490.000đ → 2.490.000đ

**Code pattern:**

```typescript
// supabase/functions/create-payment/index.ts
const VALID_SKUS = {
  subscription: {
    monthly:     { price: 75000 },
    quarterly:   { price: 199000 },
    semiannual:  { price: 329000 },
    yearly:      { price: 499000 },
    lifetime:    { price: 2490000 },   // ← bump
  },
  // Token Pack VND đã XOÁ 2026-05-23
  aiCredit: {
    aipack_so:    { price: 29000,  credits: 100  },
    aipack_trung: { price: 99000,  credits: 500  },
    aipack_cao:   { price: 199000, credits: 1500 },
  },
  honor: {
    honor_pack: { price: 99000, tokens: 1000, proBonus: 200 },
  },
};
```

**Cách deploy:**
```bash
supabase functions deploy create-payment
```

**KHÔNG mình tự làm được — bạn deploy.**

---

## 4️⃣ Edge Function `payos-webhook` — handle SKU mới

**File:** `supabase/functions/payos-webhook/index.ts`

**Logic cần thêm:**

```typescript
// Khi nhận webhook PayOS "đã thanh toán":
switch (order.sku) {
  case 'aipack_so':
  case 'aipack_trung':
  case 'aipack_cao':
    // Cộng AI Credit vào user_ai_credit_balance
    await adminClient.rpc('grant_ai_credit', {
      p_user_id: order.user_id,
      p_amount: SKU_INFO[order.sku].credits,
      p_reason: 'purchase_' + order.sku
    });
    break;

  case 'honor_pack':
    // Check cap 12 lần/năm
    const { data: count } = await adminClient
      .from('user_honor_purchases')
      .select('id', { count: 'exact', head: true })
      .eq('user_id', order.user_id)
      .gte('purchased_at', startOfYear);
    if (count >= 12) { /* refuse + refund */ break; }

    // Insert honor purchase + grant token
    await adminClient.from('user_honor_purchases').insert({
      user_id: order.user_id,
      month_year: getCurrentMonthYear(),
      outfit_id: getOutfitForMonth(getCurrentMonthYear()),
      payment_order_id: order.id,
      amount_paid: 99000
    });
    // Grant token (1000 + 200 nếu Pro)
    const isPro = await checkUserIsPro(order.user_id);
    await adminClient.rpc('grant_token', {
      p_user_id: order.user_id,
      p_amount: 1000 + (isPro ? 200 : 0),
      p_reason: 'honor_pack'
    });
    break;

  case 'yearly':
  case 'lifetime':
    // Existing sub logic + bonus AI Credit
    const bonusCredits = order.sku === 'yearly' ? 100 : 500;
    await adminClient.rpc('grant_ai_credit', {
      p_user_id: order.user_id,
      p_amount: bonusCredits,
      p_reason: 'sub_bonus_' + order.sku
    });
    break;
}
```

→ Phase 2 code — bạn deploy sau.

---

## 5️⃣ Indexes performance

Chạy 1 lần khi bảng có >10k row:

```sql
-- AI Credit ledger sort by time per user
CREATE INDEX IF NOT EXISTS idx_ai_credit_ledger_user_time
  ON public.ai_credit_ledger(user_id, created_at DESC);

-- Honor purchases cap check (year query)
CREATE INDEX IF NOT EXISTS idx_honor_user_time
  ON public.user_honor_purchases(user_id, purchased_at DESC);

-- SRS due date query (đã có cho HSK 2.0, verify cho 3.0)
CREATE INDEX IF NOT EXISTS idx_user_srs_due
  ON public.user_srs(user_id, due_date)
  WHERE due_date IS NOT NULL;

-- Sync delta query (cần cột updated_at + index)
CREATE INDEX IF NOT EXISTS idx_user_progress_updated
  ON public.user_progress(user_id, updated_at DESC);

-- Payment lookup theo user
CREATE INDEX IF NOT EXISTS idx_payment_orders_user_time
  ON public.payment_orders(user_id, created_at DESC);
```

Setup script đã tạo `idx_ai_credit_ledger_user_time` và `idx_honor_user_time`. Còn lại tự chạy khi cần.

---

## 6️⃣ Data retention auto-cleanup

Cron Supabase chạy hàng tuần xoá data cũ (theo Privacy Policy):

```sql
-- Tạo cron extension (1 lần)
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Cron 1: Xoá AI chat history >1 năm (per Privacy section 8)
SELECT cron.schedule(
  'cleanup-old-ai-chat',
  '0 3 * * 0',  -- 3am mỗi Chủ nhật
  $$ DELETE FROM ai_credit_ledger WHERE created_at < now() - interval '1 year'; $$
);

-- Cron 2: Xoá error log >90 ngày
-- (Áp dụng khi có table error_logs — chưa tạo)

-- Cron 3: Anonymize user inactive >2 năm (gửi email warning trước)
-- (Logic phức tạp, viết sau khi có email service)
```

→ Chạy 1 lần để setup. Mỗi tuần Supabase tự dọn.

---

## 7️⃣ Backup retention 30 ngày

Supabase Dashboard → Database → Backups:
- Free tier: 7 ngày backup tự động
- Pro tier ($25/m): 30 ngày
- Recommend upgrade Pro khi >5000 user

Manual backup hàng tháng (export SQL → lưu S3/R2):
```bash
supabase db dump --linked > backups/$(date +%Y%m%d).sql
```

---

## 8️⃣ Audit security định kỳ

Setup recurring tasks:

| Task | Frequency | How |
|---|---|---|
| Chạy `audit_rls.sql` | Mỗi sau khi thêm bảng mới | Supabase SQL Editor |
| Verify Edge Function logs | Hàng tuần | Dashboard → Functions → logs |
| Check chargeback PayOS | Hàng tuần | PayOS Dashboard |
| Review API key rotation | Mỗi 6 tháng | Dashboard → Settings → API |
| Update Supabase client version | Quý 1 lần | npm install hoặc CDN bump |

---

## 9️⃣ Checklist trước launch lớn

- [ ] RLS audit pass (PART 4 = 0 row)
- [ ] Test exploitation từ F12 → tất cả query chỉ trả row của user A
- [ ] Backup manual snapshot
- [ ] Edge Function deploy version mới (SKU whitelist)
- [ ] Indexes performance đã tạo
- [ ] Cron data retention setup
- [ ] Privacy policy section 8 retention khớp với cron
- [ ] Test refund flow end-to-end (mua → refund qua PayOS)
- [ ] Test delete account → data cascade xoá
- [ ] Monitor 1 tuần đầu: error rate, chargeback rate, RLS denial logs

---

## 🔗 Files SQL trong repo

| File | Mục đích | Chạy khi |
|---|---|---|
| `sql/audit_rls.sql` | Audit RLS hiện tại | Đầu tiên + sau mỗi thay đổi schema |
| `sql/setup_rls_policies.sql` | Setup RLS + schema mới + RPC | Sau audit nếu thiếu |
| `sql/v6_monetization.sql` | (Đã chạy) Schema sub + payment | DONE |
| `sql/v6b_admin.sql` | (Đã chạy) Admin tables | DONE |
| `sql/v7_hsk30.sql` | (Đã chạy) HSK 3.0 schema | DONE |
| `sql/supabase_sync_guard.sql` | Sync cutoff 15/6/2026 trigger | DONE |
| `sql/supabase_migration_v5.sql` | Migration v5 | DONE |

---

## 📝 Decision log

| Date | Decision |
|---|---|
| 2026-05-23 | Tạo file checklist tổng cho Supabase ops |
| 2026-05-23 | Tạo `sql/audit_rls.sql` + `sql/setup_rls_policies.sql` (idempotent) |
| 2026-05-23 | Lock 3 bảng mới Phase 2: user_ai_credit_balance, ai_credit_ledger, user_honor_purchases |
| 2026-05-23 | Lock 2 RPC SECURITY DEFINER: consume_ai_credit(), delete_account_cascade() |
| 2026-05-23 | Edge Function update SKU whitelist (xoá pack100-3000, thêm aipack_so/trung/cao + honor_pack) — Phase 2 |
