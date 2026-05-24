# 💳 Hanzi Genz — AI Credit Pricing

> Source-of-truth cho hệ AI Credit Pack ("Túi Linh Đan AI"). Chốt giá, multiplier, allowance, fallback chain, beta policy.
> **Last updated:** 2026-05-23
> **Liên quan:** [PRODUCT_TIER_MATRIX.md](PRODUCT_TIER_MATRIX.md) · [TOKEN_SINK_ROADMAP.md](TOKEN_SINK_ROADMAP.md) · [HONOR_PACK_DESIGN.md](HONOR_PACK_DESIGN.md) · [`js/data/plans.js`](../js/data/plans.js)

---

## 🧭 Triết lý

1. **AI Credit = tiền tệ riêng cho AI**, tách hoàn toàn khỏi token. KHÔNG quy đổi.
2. **AI Credit có cost API thật** → chỉ trả bằng doanh thu. KHÔNG tặng qua streak/milestone/quest.
3. **3 đường vào duy nhất:** (1) Pro allowance, (2) Free quota nhỏ, (3) mua VND.
4. **KHÔNG bán "unlimited AI flat"** — chỉ allowance + pack có đáy.
5. **Multiplier theo task** — task nặng trừ nhiều credit hơn task nhẹ, phản ánh cost API thực.
6. **Beta 2-3 tháng** — số liệu chính thức chốt sau khi có data thật.

---

## 🤖 Tính năng nào tốn AI Credit

### ❌ KHÔNG tốn credit (Hạng 1 — rẻ, cache được)

| Tính năng | Lý do free |
|---|---|
| AI giải thích từ vựng | C1+C2 cache — pre-gen 7.000 từ HSK |
| AI sửa pinyin / tone | Model rẻ + cache |
| AI translate câu ngắn Vi↔Zh | Model rẻ |
| TTS phát âm từ HSK | Pre-gen lưu R2, runtime $0 |

Free + Pro **đều dùng thoải mái**, trần 50 lượt/ngày (Free) và 200 lượt/ngày (Pro) để chống script.

### ✅ TỐN credit (Hạng 2 — đắt, không cache, mỗi lượt độc nhất)

| Tính năng | Phase | Credit/lượt |
|---|---|---|
| AI Tutor chat 1-1 (1 turn) | Phase R | **1 credit** |
| Pronunciation analyze (1 từ chi tiết) | Phase R | **2 credit** |
| AI Mock HSKK feedback (1 câu) | Phase Y | **3 credit** |
| Conversation simulator (1 scene ~10 turn) | Phase R | **5 credit** |
| Essay rewrite suggestion | Phase S | **5 credit** |
| AI Writing chấm essay full | Phase S | **8 credit** |
| Story Mai gen 1 chapter tùy biến | Phase P | **10 credit** |

**Quy tắc multiplier:** 1 credit ≈ baseline cost Tutor (~30đ blended). Task đắt N× → trừ N credit.

---

## 💰 AI Credit Pack ("Túi Linh Đan AI") — gói beta

| Gói | Giá | Credit | Cost API max | Margin | Trạng thái |
|---|---|---|---|---|---|
| 🥉 **Linh Đan Sơ** | 29.000đ | 100 | ~8.000đ | 70% | 🧪 Beta |
| 🥈 **Linh Đan Trung** | 99.000đ | 500 | ~40.000đ | 57% | 🧪 Beta |
| 🥇 **Linh Đan Cao** ⭐ | 199.000đ | 1.500 | ~120.000đ | 37% | 🧪 Beta |
| 💎 Linh Đan Tiên | 499.000đ | 5.000 | ~400.000đ | 17% | ⏸ Đợi data thật |

**Công thức định giá:** `Giá ≈ credit × cost_blended × 2.5 / (1 - 2.5% phí cổng)`

**Cap mua pack/tháng:**
- Free: 2 pack
- Pro Monthly: 5 pack
- Pro Quarterly+: 8 pack
- Pro Yearly + Lifetime: 10 pack
- Vượt → email confirm + 24h cooldown
- Reset: 0h00 ngày 1 mỗi tháng

---

## 📊 Pro allowance AI/tháng (đã siết để tránh lỗ)

| Tier | Giá/effective | AI Credit allowance/tháng | Cost API max | Worst-case margin |
|---|---|---|---|---|
| Free | 0đ | 50 cr | ~4.000đ | (CAC) |
| Monthly 75k | 75k/m | **800 cr** | ~64.000đ | +9.125đ ✅ |
| Quarterly 199k/3m | ~66k/m | **700 cr** | ~56.000đ | +8.350đ ✅ |
| Semi 329k/6m | ~55k/m | **650 cr** | ~52.000đ | +1.500đ ⚠️ |
| Yearly 499k/12m | ~42k/m | **600 cr** | ~48.000đ | -7.050đ worst ⚠️ |
| Lifetime 2.490.000đ | 1 lần | **500 cr/m** vĩnh viễn | ~40.000đ/m | hòa vốn ~62 tháng |

**3 lớp bảo vệ margin:**
1. Allowance đã siết (bảng trên)
2. **Cap 200 lượt AI/ngày cứng** cho Pro (kể cả còn credit) — heavy user không "đốt" quota nhanh
3. Pareto: ~95% user không chạm trần → cost trung bình ~30-50% allowance → portfolio lãi ~40-60%

---

## 🎁 Bonus AI Credit khi mua sub (chỉ Yearly + Lifetime)

| Tier | tokenBonus | AI Credit bonus 1 lần khi mua |
|---|---|---|
| Monthly 75k | 150🪙 | ❌ KHÔNG tặng AI |
| Quarterly 199k | 500🪙 | ❌ KHÔNG tặng AI |
| Semi 329k | 800🪙 | ❌ KHÔNG tặng AI |
| **Yearly 499k** ⭐ | 1.500🪙 | ✅ **+100 AI Credit** (Túi Sơ) |
| **Lifetime 2.490.000đ** | 3.000🪙 | ✅ **+500 AI Credit** (Túi Trung) |

**Lý do chỉ Yearly + Lifetime:** doanh thu 1 lần đủ lớn để hấp thụ cost API. Quarterly/Semi margin mỏng — KHÔNG tặng.

---

## 🔄 Fallback chain (BẮT BUỘC cùng hạng giá, lệch ≤2-3×)

### Hạng 1 — tra cứu (KHÔNG tốn credit)

```
Primary:    DeepSeek V3      ($0.27 in / $1.10 out per 1M tok)
Fallback 1: Gemini Flash-Lite ($0.10 / $0.40)  — rẻ hơn, OK
Fallback 2: Qwen nhỏ          (~$0.01 blended) — rẻ nhất, OK
⛔ CẤM rơi sang: Gemini Pro, Claude Sonnet, GPT — đắt 10×+
```

### Hạng 2 — hội thoại/chấm bài (TỐN credit)

```
Primary:    DeepSeek V4      ($0.44 / $0.87)
Fallback 1: Qwen3-Max        (~$0.60 / $2.40)  — lệch ~2× OK
Fallback 2: GLM-5            (~$0.50 / $1.50)  — tương đương
Fallback 3: Kimi K2.6        (~$0.60 / $2.50)  — tương đương
⛔ CẤM rơi sang: Claude Sonnet ($3/$15 = 7-15×), GPT-5 (~40-200×)
```

**Enforce ở code:** router AI hard-code whitelist fallback, KHÔNG cho dynamic. Khi tích hợp Phase R/S/Y, ưu tiên check status primary → timeout/error → next fallback cùng tier theo thứ tự.

---

## 💸 Cost API thực (blended 90% primary + 10% fallback)

| Task | Token in/out | Cost primary | Cost fallback | Blended |
|---|---|---|---|---|
| Tutor 1 turn | 1.5k + 0.5k | $0.0011 = 27đ | $0.0021 = 53đ | **30đ** |
| Pronunciation analyze | 2k + 0.5k | $0.0013 = 33đ | $0.0024 = 60đ | **36đ** |
| HSKK chấm 1 câu | 3k + 1k | $0.0022 = 55đ | $0.0042 = 105đ | **60đ** |
| Story 1 đoạn | 2k + 3k | $0.0035 = 87đ | $0.0084 = 210đ | **99đ** |
| Essay chấm full | 5k + 2k | $0.0039 = 99đ | $0.0078 = 195đ | **109đ** |
| Conversation 1 scene | 5k + 3k | $0.0048 = 120đ | $0.0102 = 255đ | **134đ** |

Tỷ giá: 25.000đ/USD. **Verify lại tháng launch** — giá API biến động nhanh.

---

## 🧪 Beta period — 2-3 tháng đầu

### Cơ chế

```
🧪 Badge "BETA" trên pricing page + modal AI Credit
📋 Disclaimer:
   "Giá AI Credit Pack đang ở giai đoạn beta (~2-3 tháng).
    Giá và số credit có thể được điều chỉnh khi kết thúc beta."

🎁 Lời hứa beta-customer:
   - Giữ NGUYÊN giá đã mua (lock-in)
   - +20% credit bonus cấp tự động khi chốt giá chính thức
   - Credit beta KHÔNG hết hạn (sau beta áp expiry 6-12 tháng)
   - Refund 30 ngày nếu không hài lòng
```

### Việc beta đo

| Metric | Target |
|---|---|
| Số transaction | ~500-1000 trong 2-3 tháng |
| Distribution pack mua | % Sơ vs Trung vs Cao |
| Usage pattern Pro | % chạm trần allowance |
| Multiplier accuracy | Cost thực vs credit trừ |
| Cache hit rate Hạng 2 | (có thể cache lượt nào lặp lại) |

→ Sau 2-3 tháng có data → tune giá / multiplier / allowance → bỏ badge BETA.

---

## 🎯 UX guardrails — chống cảm giác "bị gating"

1. **Pricing page TRANSPARENT** — ghi rõ số credit/tháng, KHÔNG hứa "không giới hạn AI"
2. **Badge quota header** — `🔮 1.234 cr` luôn hiển thị cho Pro user
3. **Modal AI Credit chi tiết** — "đủ dùng ~X cuộc Tutor + Y essay + Z HSKK"
4. **Cảnh báo sớm**:
   - Còn 20% → toast nhẹ ("Còn ~300 cr cho cuối tháng, dùng thoải mái")
   - Còn 5% → modal ("Sắp hết — nâng cấp gói cao hơn hay nạp thêm?")
5. **Hết quota KHÔNG khóa app** — vẫn dùng AI Hạng 1 free. Hết Hạng 2 → "Credit hết. Đợi reset ngày X hoặc nạp Túi Linh Đan từ 29k"

---

## ⚠️ TUYỆT ĐỐI KHÔNG

| Anti-pattern | Vì sao |
|---|---|
| Tặng AI Credit qua streak/milestone/quest học | AI có cost API thật → tặng free = lỗ vĩnh viễn |
| Bán "unlimited AI" flat | Không định giá an toàn được — outlier user phá margin |
| Quy đổi Token → AI Credit | Token cày free → free user in chi phí API |
| Fallback sang model đắt hơn 5×+ primary | Outage = bill spike, có khi wipe margin tháng |
| Hard gate khi hết credit | Phá UX — phải soft (cảnh báo + AI Hạng 1 vẫn free) |
| Hide cap lượt/ngày khỏi pricing | Phải minh bạch — user phát hiện sau = critique |

---

## 📋 Implementation checklist (cho Phase R/S/Y khi code)

- [ ] Schema Supabase: `user_ai_credit_balance` + `ai_credit_ledger` + RPC `consume_ai_credit(amount, task_type)` SECURITY DEFINER
- [ ] Edge Function `create-payment` whitelist SKU: `aipack_so`, `aipack_trung`, `aipack_cao`
- [ ] `js/ai-client.js` (mới) — router model + fallback chain hard-code + log mọi call vào ledger
- [ ] `js/data/plans.js` — `aiCreditPacks` array + `aiAllowancePerMonth` mỗi sub plan
- [ ] UI badge quota header + modal chi tiết
- [ ] Cảnh báo 20% / 5% / 0%
- [ ] Cap 200 lượt/ngày enforce server-side (RPC check trước mỗi consume)
- [ ] Beta badge + disclaimer + lock-in promise

---

## 🔗 Decision log

| Date | Decision |
|---|---|
| 2026-05-21 | AI Credit tách khỏi token, không quy đổi (chốt gốc PRODUCT_TIER_MATRIX) |
| 2026-05-23 | Lock 3 gói beta 29k/99k/199k. Gói 499k đợi data thật |
| 2026-05-23 | Allowance Pro siết: Monthly 800, Quarterly 700, Semi 650, Yearly 600, Lifetime 500 cr/m |
| 2026-05-23 | Cap 200 lượt AI/ngày cứng cho Pro, 50 cho Free |
| 2026-05-23 | Multiplier credit theo task (1-10 cr tuỳ độ nặng) |
| 2026-05-23 | Fallback hard-code whitelist cùng hạng giá. Cấm rơi sang Sonnet/GPT |
| 2026-05-23 | Yearly tặng +100 cr · Lifetime tặng +500 cr · còn lại KHÔNG tặng AI |
| 2026-05-23 | Beta 2-3 tháng + lock-in giá + +20% bonus khi chốt |
| 2026-05-23 | TUYỆT ĐỐI KHÔNG tặng AI Credit qua streak/milestone/quest |
