# 💰 Hanzi Genz — Revenue Projection

> Dự đoán doanh thu thuần (gross → net) qua 4 stage, áp dụng pricing v7 (Free + 5-duration Pro + Token Shop).
> **Last updated:** 2026-05-19 — đã apply chi phí infra sau optimization + token-for-everything model
> **Liên quan:** [PRODUCT_TIER_MATRIX.md](PRODUCT_TIER_MATRIX.md) · [COST_OPTIMIZATION.md](COST_OPTIMIZATION.md) · [SCALING_PLAN.md](SCALING_PLAN.md) · [GAMIFICATION_PLAN.md](GAMIFICATION_PLAN.md)

> 🔄 **Cập nhật 2026-05-19:** Đã chuyển sang model "Token-for-everything" (xem PRODUCT_TIER_MATRIX.md):
> - Pro = 2-3x token earn rate + AI cost giảm 40-50% (KHÔNG phải "unlimited AI")
> - Free dùng AI qua token earn được (50/day hard cap)
> - Daily AI cap cứng: Free 50, Pro 200, Trọn đời 500
> - ARPPU MRR tăng từ ~73k → ~78k (+7%) nhờ token shop uplift mạnh hơn ở Pro user heavy use

---

## ⚠️ Disclaimer

Tài liệu này **không phải tư vấn kế toán/thuế chuyên nghiệp**. Các con số là ước lượng dựa trên:
- Pricing thực tế từ [`js/data/plans.js`](../js/data/plans.js)
- Conversion rate benchmark ngành (1-3% MAU → paying user cho app học)
- Quy định thuế VN tham chiếu **Thông tư 40/2021/TT-BTC** (cá nhân kinh doanh online)
- Chi phí PayOS, infra theo giá list 2025-2026

Trước khi quyết định pháp lý/thuế → tham vấn kế toán hoặc luật sư VN.

---

## 1. Giả định đầu vào

### 1.1 Pricing (snapshot [`js/data/plans.js`](../js/data/plans.js))

**Subscription (chọn 1 trong 5):**
| Plan | Giá | Thời hạn | MRR (Monthly Recurring Revenue) | Token bonus |
|------|-----|---------|-------------------------------|-------------|
| Linh hoạt | 75.000đ | 1 tháng | 75.000 | 150 🪙 |
| Chăm chỉ | 199.000đ | 3 tháng | 66.333 | 500 🪙 |
| Bứt phá | 329.000đ | 6 tháng | 54.833 | 1.200 🪙 |
| **Tiết kiệm** ⭐ | 499.000đ | 12 tháng | 41.583 | 3.000 🪙 |
| Trọn đời | 999.000đ | vĩnh viễn | 27.750 (amortize 36 tháng) | 8.000 🪙 |

**Token Shop:**
| Pack | Giá | Tokens |
|------|-----|--------|
| 100 🪙 | 19.000đ | 100 |
| 500 + 50 | 79.000đ | 550 |
| 1.200 + 200 ⭐ | 159.000đ | 1.400 |
| 3.000 + 600 | 349.000đ | 3.600 |

### 1.2 Plan mix giả định (theo hành vi user VN — chuộng gói rẻ + FOMO "Phổ biến nhất")

| Plan | % chọn | Lý do |
|------|--------|-------|
| Linh hoạt 75k | 35% | Thử + sợ commit dài |
| Chăm chỉ 199k | 25% | Sweet spot tâm lý |
| Bứt phá 329k | 15% | User thực sự muốn học nghiêm túc |
| Tiết kiệm 499k ⭐ | 20% | Featured "Phổ biến nhất" → anchor mạnh |
| Trọn đời 999k | 5% | Power user / fan loyal |

**Blended ARPPU MRR:**
```
0.35 × 75.000  = 26.250
0.25 × 66.333  = 16.583
0.15 × 54.833  =  8.225
0.20 × 41.583  =  8.317
0.05 × 27.750  =  1.388
─────────────────────
Tổng           ≈ 60.760 đ/user/tháng
```

**Token Shop uplift (model mới):** 
- Free heavy AI user: ~10% mua 1 pack/tháng (avg ~60k) → contribute revenue dù không sub
- Pro user: 20% mua 1 pack/tháng (avg ~100k) → +20k/user/tháng từ Pro paying
- Tổng uplift Pro: +18k/user/tháng

**ARPPU MRR final: ~78.000đ/paying user/tháng** (subscription + token uplift).

**Free user revenue (mới):** ~3-5% free user mua token shop khi cần AI thêm → contribute 0.5-1k VND/MAU. Nhỏ nhưng có.

### 1.3 Conversion rate giả định (Free MAU → Paying user)

| Scenario | Conversion | Ghi chú |
|----------|-----------|---------|
| 🟥 Pessimistic | 0.5% | Marketing yếu, retention thấp |
| 🟨 Base case | 1.5% | Realistic cho app học VN có brand mạnh |
| 🟩 Optimistic | 3% | Word-of-mouth tốt + ads hiệu quả |

**Benchmark:** Duolingo ~6.6% (cao bất thường do app store leverage), Memrise 3-5%, hầu hết app VN 1-2%.

### 1.4 Chi phí đầu vào

**PayOS fee:** 2.2% per transaction (có thể negotiate xuống 1.8% khi volume > 100M/tháng).

**Infra cost:** Lấy từ [SCALING_PLAN.md](SCALING_PLAN.md) section 6:
- Stage 0: 25k VND/tháng
- Stage 1: 25k → 1.9M VND/tháng (tùy AI enable)
- Stage 2: 5-10M VND/tháng
- Stage 3: 25-50M VND/tháng
- Stage 4: 40-130M VND/tháng

---

## 2. Thuế VN — 3 case pháp lý

### Case A: Cá nhân kinh doanh online (doanh thu ≤ 100 triệu/năm)

**Miễn thuế** GTGT + TNCN theo Thông tư 40/2021/TT-BTC (Khoản 1 Điều 4).

> "Cá nhân kinh doanh có doanh thu từ hoạt động sản xuất, kinh doanh trong năm dương lịch từ 100 triệu đồng trở xuống không phải nộp thuế GTGT, thuế TNCN."

→ **Lợi nhuận = Doanh thu thuần** (sau khi trừ PayOS + infra). Tốt cho Stage 0 và đầu Stage 1.

### Case B: Cá nhân kinh doanh online (doanh thu > 100 triệu/năm)

Theo Thông tư 40/2021/TT-BTC, hoạt động dịch vụ digital (không kèm hàng hóa):
- **Thuế GTGT: 5%** trên doanh thu
- **Thuế TNCN: 2%** trên doanh thu
- **Tổng: 7%** trên doanh thu

Lưu ý: **Tính trên DOANH THU**, không phải lợi nhuận. Không được trừ chi phí.

### Case C: Doanh nghiệp (Công ty TNHH/CP)

- **VAT 8-10%** (hiện 8% giảm thuế đến hết 2026, sau đó về 10%)
- **TNDN 20%** trên lợi nhuận (sau khi trừ chi phí hợp lệ có hóa đơn)
- Phải có kế toán, báo cáo thuế quý/năm
- Lệ phí môn bài 2-3M/năm
- Bảo hiểm cho NLĐ (nếu thuê) +21.5% lương

**Khi nào nên chuyển sang Case C:** Doanh thu > 500M/năm + có team + cần ký hợp đồng B2B.

---

## 3. Dự đoán theo Stage (Base case, conversion 1.5%)

### Stage 0 — Hiện tại (~500 MAU)

```
MAU:           500
Paying (1.5%): ~7 user
MRR:           7 × 73k = 511k VND
Annual:        ~6.1M VND
```

| Khoản | Tháng | Năm |
|-------|-------|-----|
| Doanh thu gross | 511k | 6.13M |
| PayOS fee (-2.2%) | -11k | -135k |
| Infra cost (-) | -25k | -300k |
| **Doanh thu thuần** | **475k** | **5.7M** |
| Thuế (Case A — miễn) | 0 | 0 |
| **🟢 Lợi nhuận** | **475k** | **5.7M** |

**Nhận xét:** Đủ trả tiền domain + cà phê. Tập trung user growth, chưa cần lo thuế.

---

### Stage 1a — Early traction (5.000 MAU)

```
MAU:           5.000
Paying (1.5%): 75 user
MRR:           75 × 73k = 5.475.000 VND
Annual:        65.7M VND  ← VẪN DƯỚI 100M, MIỄN THUẾ
```

| Khoản | Tháng | Năm |
|-------|-------|-----|
| Doanh thu gross | 5.475k | 65.7M |
| PayOS fee (-2.2%) | -120k | -1.45M |
| Infra cost (Supabase Free + Cloudflare) | -25k | -300k |
| **Doanh thu thuần** | **5.330k** | **63.95M** |
| Thuế (Case A — miễn) | 0 | 0 |
| **🟢 Lợi nhuận** | **5.330k** | **63.95M** |

**Margin:** 97% (tỷ suất cao vì chưa đụng thuế). Reinvest vào marketing.

---

### Stage 1b — Hit ngưỡng thuế (10.000 MAU)

```
MAU:           10.000
Paying (1.5%): 150 user
MRR:           150 × 73k = 10.950.000 VND
Annual:        131.4M VND  ← VƯỢT 100M, ÁP THUẾ 7%
```

| Khoản | Tháng | Năm |
|-------|-------|-----|
| Doanh thu gross | 10.95M | 131.4M |
| PayOS fee (-2.2%) | -241k | -2.89M |
| Infra cost (chưa upgrade) | -25k | -300k |
| Doanh thu thuần trước thuế | 10.68M | 128.2M |
| **Thuế Case B (7% × gross)** | **-767k** | **-9.2M** |
| **🟢 Lợi nhuận sau thuế** | **9.92M** | **119M** |

**Lưu ý quan trọng:**
- Thuế 7% tính trên DOANH THU không phải lợi nhuận → khi sắp vượt 100M/năm cần plan trước
- Nên đăng ký hộ kinh doanh để có hóa đơn → giúp paying user B2B / khấu trừ thuế

---

### Stage 2 — Scaling (25.000 MAU)

```
MAU:           25.000
Paying (1.5%): 375 user
MRR:           375 × 73k = 27.375.000 VND
Annual:        328.5M VND
```

| Khoản | Tháng | Năm |
|-------|-------|-----|
| Doanh thu gross | 27.38M | 328.5M |
| PayOS fee (-2.2%) | -602k | -7.23M |
| Infra (Supabase Pro $25 + Compute $60) | -2.13M | -25.5M |
| Infra (AI Haiku, ~$50/tháng) | -1.25M | -15M |
| Doanh thu thuần trước thuế | 23.4M | 280.8M |
| **Thuế Case B (7% × gross)** | **-1.92M** | **-23M** |
| **🟢 Lợi nhuận sau thuế** | **21.5M** | **257.8M** |

**Nhận xét:** Đến đây có thể:
- Thuê 1 PT dev hoặc 1 content creator
- Bắt đầu cân nhắc chuyển sang Case C (công ty TNHH) để có thể khấu trừ chi phí

---

### Stage 3 — Mature (75.000 MAU, đã chuyển sang công ty)

```
MAU:           75.000
Paying (1.5%): 1.125 user
MRR:           1.125 × 73k = 82.125.000 VND
Annual:        985.5M VND
```

Giả định đã chuyển sang **Công ty TNHH** (Case C) vì cần ký hợp đồng + thuê team.

| Khoản | Tháng | Năm |
|-------|-------|-----|
| Doanh thu gross | 82.13M | 985.5M |
| PayOS fee (-1.8% — negotiated) | -1.48M | -17.74M |
| **Chi phí hợp lệ:** | | |
| ⤷ Infra (Supabase Pro + Compute medium + read replica + AI) | -25M | -300M |
| ⤷ Lương team (2 dev part-time + 1 content) | -30M | -360M |
| ⤷ Marketing | -10M | -120M |
| ⤷ Hành chính, kế toán, môn bài | -2M | -24M |
| **Tổng chi phí** | **-68.5M** | **-822M** |
| **Lợi nhuận trước thuế** | **13.6M** | **163.5M** |
| **VAT (10%, đã khấu trừ đầu vào)** | thay đổi | |
| **TNDN (20% × lợi nhuận)** | -2.72M | -32.7M |
| **🟢 Lợi nhuận sau thuế** | **~10.9M** | **~130.8M** |

**Cảnh báo:** Margin ở Stage 3 khi áp Case C **THẤP HƠN** Case B nếu chi phí thực < 30% doanh thu. Lý do: Case B chỉ 7% trên doanh thu (đơn giản), Case C 20% trên lợi nhuận (phức tạp). → **Chỉ chuyển Case C khi chi phí thật > 50% doanh thu** hoặc bắt buộc về pháp lý.

---

### Stage 4 — Lock-in mature (150.000 MAU)

```
MAU:           150.000
Paying (1.5%): 2.250 user
MRR:           2.250 × 73k = 164.250.000 VND
Annual:        1.971 tỷ VND
```

| Khoản | Tháng | Năm |
|-------|-------|-----|
| Doanh thu gross | 164.25M | 1.971 tỷ |
| PayOS fee (-1.8%) | -2.96M | -35.5M |
| Infra (xem SCALING Stage 4) | -80M | -960M |
| Lương team (4-5 người) | -80M | -960M |
| Marketing + ops | -20M | -240M |
| Lợi nhuận trước thuế | ~-18M | -224M ❌ |

**Wait — số âm?** Đúng vậy. Stage 4 conversion 1.5% **chưa đủ** cover team lớn. Cần:
- Tăng conversion lên 2.5%+ HOẶC
- Tăng ARPPU (add tier cao hơn, B2B/school plan) HOẶC
- Giảm team size

→ Đây là **kịch cảnh báo** quan trọng: **Scale MAU không tự động = scale lợi nhuận**.

---

## 4. Sensitivity analysis (Conversion rate)

Với MAU = 25.000 (Stage 2), thay đổi conversion:

| Conversion | Paying user | MRR | Doanh thu năm | Lợi nhuận sau thuế (Case B) |
|-----------|-------------|-----|---------------|----------------------------|
| 0.5% 🟥 | 125 | 9.1M | 109.5M | ~70M VND/năm |
| 1.0% | 250 | 18.3M | 219M | ~165M VND/năm |
| **1.5%** ⭐ | **375** | **27.4M** | **328.5M** | **~258M VND/năm** |
| 2.0% | 500 | 36.5M | 438M | ~350M VND/năm |
| 3.0% 🟩 | 750 | 54.8M | 657M | ~530M VND/năm |

**Insight:** Conversion 2x ≈ Lợi nhuận 2.1x (gần linear vì chi phí infra biến đổi nhỏ).

---

## 5. So sánh tỷ suất lợi nhuận từng stage (Base case 1.5%)

| Stage | MAU | Doanh thu/năm | Lợi nhuận/năm | Margin | Case |
|-------|-----|--------------|---------------|--------|------|
| 0 | 500 | 6.1M | 5.7M | **93%** | A miễn thuế |
| 1a | 5.000 | 65.7M | 64M | **97%** | A miễn thuế |
| 1b | 10.000 | 131M | 119M | **91%** | B 7% |
| 2 | 25.000 | 328M | 258M | **78%** | B 7% |
| 3 | 75.000 | 985M | 131M | **13%** | C công ty + team |
| 4 | 150.000 | 1.97 tỷ | (âm với 1.5%) | ❌ | C + cần optimize |

**Sweet spot:** Stage 1b-2 (10k-25k MAU) — margin còn cao, áp lực thấp.

---

## 6. Kịch bản optimistic (Conversion 3%)

Stage 2, 25.000 MAU, conversion 3%:

| Khoản | Năm |
|-------|-----|
| Doanh thu gross | 657M |
| PayOS fee | -14.5M |
| Infra | -40.5M |
| Doanh thu thuần | 602M |
| Thuế Case B (7%) | -46M |
| **🟢 Lợi nhuận sau thuế** | **~556M VND/năm** ≈ 46M/tháng |

**Nếu giữ Case A "cá nhân" (chưa đăng ký kinh doanh):** ❌ KHÔNG được — vượt 100M/năm bắt buộc khai thuế.

---

## 7. Chi phí chi tiết — gồm những khoản nào

Bóc tách MỌI khoản chi mà 1 SaaS như Hanzi Genz có thể phát sinh. Phân nhóm theo tính chất:

### 7.1 Chi phí cố định (fixed cost) — phải trả dù có user hay không

| Khoản | Stage 0-1a | Stage 1b-2 | Stage 3-4 |
|-------|-----------|-----------|-----------|
| Domain `.com` | 25k/tháng | 25k | 25k |
| GitHub Pro (private repo + Actions) | $0 (free đủ) | $4/tháng | $4 |
| Email transactional (Resend free→Pro) | $0 | $0-20 | $20-50 |
| Backup off-site (Supabase functions, sql) | $0 | $5-10 | $10-20 |
| Tools: Figma free, Notion free | $0 | $0 | $0-30 |
| Cloudflare Pages | $0 free | $0 free | $0-20 Pro |
| Domain Cloudflare Email Routing | $0 | $0 | $0 |
| Lệ phí môn bài (Hộ KD) | — | 300k-1M/năm | 2-3M/năm (TNHH) |
| Kế toán part-time | — | 2-5M/tháng | 5-15M/tháng |
| **Tổng cố định/tháng** | **~25k** | **2.6M-6M** | **8M-18M** |

### 7.2 Chi phí biến đổi theo MAU (variable cost)

| Khoản | Cost driver | Stage 2 (25k MAU) trước opt | Stage 2 sau opt |
|-------|------------|---------------------------|-----------------|
| **Supabase Pro** | MAU > 10k | $25 (625k) | $25 |
| **Supabase Compute add-on** | DB query load | $60 (1.5M) | $60 |
| **AI inference (Anthropic)** | request × tokens | $200 (5M VND) | — |
| **AI inference (DeepSeek + cache)** | sau opt | — | $25 (625k) |
| **TTS API (ElevenLabs Pro)** | từ × user Pro | $30 (750k) | $3 (75k, chỉ Pro premium) |
| **Cloudflare R2 storage** | audio cache size | — | $2 (50k) |
| **Egress** | bandwidth Supabase | included | included |
| **PayOS fee 2.2%** | per transaction | -2% gross | -2% gross |
| **Tổng biến đổi/tháng** | | **~$315 (~7.9M)** | **~$115 (~2.9M)** |

**Sau optimization tiết kiệm ~5M VND/tháng** ở Stage 2.

### 7.3 Chi phí biến đổi theo paying user (token-based)

| Khoản | Per paying user | Stage 2 (375 paying) |
|-------|----------------|---------------------|
| AI conversation (DeepSeek + cache) | ~$0.07/user/tháng | $26 (~650k) |
| TTS API Pro premium | ~$0.10/user/tháng | $37 (~925k) |
| **Tổng/tháng** | | **~63 (~1.6M)** |

### 7.4 Chi phí team (xuất hiện từ Stage 3)

| Vị trí | Lương VN/tháng | Khi cần |
|--------|---------------|---------|
| Founder (bạn) | — (lợi nhuận chia về) | Luôn |
| Dev part-time (1) | 8-15M | Stage 2-3 (10k+ MAU) |
| Dev full-time (1-2) | 18-35M | Stage 3+ |
| Content writer (HSK curriculum) | 10-20M part-time | Stage 2-3 |
| Customer support | 8-12M part-time | Stage 3+ |
| Designer freelance | 5-10M/dự án | Ad-hoc |
| Marketing | 12-20M | Stage 3+ |
| Kế toán | 2-5M | Từ Stage 1b |
| **Team Stage 3 tối thiểu** (1 founder + 1 dev + 1 content + 1 kế toán) | | **~30-50M/tháng** |
| **Team Stage 4** (5 người full-time) | | **~80-120M/tháng** |

### 7.5 Chi phí marketing (acquisition)

| Kênh | Cost | Hiệu quả VN |
|------|------|------------|
| Facebook/TikTok ads | 5-30M/tháng | Cần test, CPA $1-5/user |
| Google Ads | 5-20M/tháng | CPA cao hơn ($3-10) |
| Influencer (TikTok dạy tiếng Trung) | 2-20M/post | Hiệu quả cao cho niche |
| Referral program | 0 cost (trừ token bonus) | Best ROI |
| SEO content (blog HSK tips) | Time của founder | Long-term, ROI sau 6-12 tháng |
| Affiliate (giáo viên dạy HSK) | 20-30% commission | Conversion cao |

### 7.6 Chi phí pháp lý / compliance

| Khoản | Khi nào | Cost VN |
|-------|---------|---------|
| Đăng ký hộ KD | Stage 1b | 500k 1 lần |
| Đăng ký TNHH | Stage 3 | 2-5M 1 lần |
| Tư vấn luật ban đầu | Khi setup | 5-10M 1 lần |
| Privacy policy + ToS audit | Trước khi launch app store | 3-5M |
| Apple Developer Program | Khi launch iOS | $99/năm (~2.5M) |
| Google Play Developer | Khi launch Android | $25 1 lần |
| Code signing (Windows Authenticode) | Phase J Tauri | $200-400/năm |
| Apple Developer ID (macOS) | Phase J Tauri | $99/năm |
| Trademark "Hanzi Genz" VN | Khi có brand value | 5-10M |

### 7.7 Chi phí ẩn / contingency

| Khoản | Why | Buffer khuyến nghị |
|-------|-----|-------------------|
| Refund spike sau campaign | User đổi ý | 2-5% doanh thu |
| Chargeback PayOS | Fraud / dispute | 0.5-1% |
| Currency loss (USD/VND tăng) | Bill USD | 5-10% infra |
| Server downtime → SLA refund | Pro user yêu cầu | 1-2% Pro revenue |
| Tax audit ngược | Phạt + truy thu | 5% doanh thu (set aside) |
| **Tổng buffer khuyến nghị** | | **~10-15% doanh thu** |

---

## 8. Projection SAU optimization (đã áp dụng COST_OPTIMIZATION.md)

> Áp dụng: prompt caching, DeepSeek routing, Browser TTS default, R2 cache, Cache-Control headers, delta sync.

### Stage 1b — 10.000 MAU (Hộ KD)

| Khoản | Tháng | Năm |
|-------|-------|-----|
| Doanh thu gross | 10.95M | 131.4M |
| PayOS fee (-2.2%) | -241k | -2.89M |
| Infra (Supabase Pro $25 sớm — vì chuẩn bị mobile) | -625k | -7.5M |
| AI cost (DeepSeek cached) | -250k | -3M |
| Cố định (domain, email, kế toán) | -2.5M | -30M |
| Doanh thu thuần trước thuế | 7.33M | 88M |
| **Thuế Case B (7% × gross)** | -767k | -9.2M |
| **🟢 Lợi nhuận sau thuế** | **6.56M** | **78.8M** |

**So với trước opt (10M/tháng):** thấp hơn vì đã tính cả kế toán + chuẩn bị mobile. Realistic hơn.

### Stage 2 — 25.000 MAU (Hộ KD)

| Khoản | Tháng | Năm |
|-------|-------|-----|
| Doanh thu gross | 27.38M | 328.5M |
| PayOS fee (-2.2%) | -602k | -7.23M |
| Infra (Supabase Pro + Compute) | -2.13M | -25.5M |
| AI cost (DeepSeek + cache, 375 paying) | -625k | -7.5M |
| Cố định + kế toán | -3M | -36M |
| Marketing tối thiểu | -5M | -60M |
| Doanh thu thuần trước thuế | 16M | 192.3M |
| **Thuế Case B (7%)** | -1.92M | -23M |
| **🟢 Lợi nhuận sau thuế** | **14.1M** | **169.3M** |

**So với trước opt (258M/năm):** thấp hơn vì đã add marketing 60M/năm thực tế. Tăng từ 22M → realistic ~14M/tháng.

### Stage 3 — 75.000 MAU (Công ty TNHH)

| Khoản | Tháng | Năm |
|-------|-------|-----|
| Doanh thu gross | 82.13M | 985.5M |
| PayOS fee (-1.8%) | -1.48M | -17.74M |
| Infra optimized (xem COST_OPT section 4) | -11M | -132M |
| Lương team (1 dev FT + 1 content PT + kế toán) | -30M | -360M |
| Marketing | -10M | -120M |
| Cố định | -3M | -36M |
| Lợi nhuận trước thuế | 26.65M | 319.7M |
| **TNDN 20%** | -5.33M | -63.9M |
| **🟢 Lợi nhuận sau thuế** | **21.3M** | **256M** |

**So với trước opt (131M/năm):** Tốt hơn 2x nhờ optimization. Bây giờ Stage 3 lãi đậm.

### Stage 4 — 150.000 MAU (TNHH + team đầy đủ)

| Khoản | Tháng | Năm |
|-------|-------|-----|
| Doanh thu gross | 164.25M | 1.971 tỷ |
| PayOS fee (-1.8%) | -2.96M | -35.5M |
| Infra optimized | -25M | -300M |
| Lương team (5 người FT) | -80M | -960M |
| Marketing | -20M | -240M |
| Cố định | -5M | -60M |
| Lợi nhuận trước thuế | 31.3M | 375.5M |
| **TNDN 20%** | -6.26M | -75.1M |
| **🟢 Lợi nhuận sau thuế** | **25M** | **300M** |

**So với trước opt (-224M/năm):** Từ LỖ chuyển sang **LÃI 300M/năm** nhờ optimization. ⭐

### Bảng tổng so sánh trước/sau optimization (Conversion 1.5%)

| Stage | MAU | LN sau thuế TRƯỚC opt | LN sau thuế SAU opt | Cải thiện |
|-------|-----|---------------------|---------------------|-----------|
| 0 | 500 | 5.7M/năm | 5.7M | 0 |
| 1a | 5k | 64M | 64M | 0 (chưa có AI) |
| 1b | 10k | 119M | 78.8M | ⚠️ -34% (do add kế toán + marketing thực tế) |
| 2 | 25k | 258M | 169M | ⚠️ -34% (add marketing) |
| 3 | 75k | 131M | **256M** | ✅ +95% (opt + tránh team quá lớn) |
| 4 | 150k | **(âm)** | **300M** | ✅ Cứu khỏi lỗ |

**Insight:** Optimization KHÔNG làm Stage 1-2 lãi hơn (vì chúng vốn đã có margin cao, ít chi phí). Optimization **cứu Stage 3-4** khỏi lỗ.

---

## 9. Break-even analysis — Khi nào LỖ?

### 9.1 Định nghĩa "lỗ"

App **lỗ tháng** khi: Doanh thu/tháng < Tổng chi phí/tháng (gross, chưa tính thuế).
App **lỗ tích lũy** khi: Cumulative loss > tiền tiết kiệm runway.

### 9.2 4 kịch bản LỖ phải canh chừng

#### Kịch bản 1: Stage 3-4 với team quá lớn + conversion thấp

```
Stage 3 (75k MAU, conversion 0.5% pessimistic):
  Paying = 75k × 0.5% = 375 user
  MRR    = 375 × 73k = 27.4M/tháng (chỉ bằng Stage 2)
  
  Nhưng chi phí Stage 3:
    Team (đã thuê): 30M
    Marketing:      10M
    Infra:          11M
    Cố định:        3M
    ────────────────────
    Total:          54M
    
  Lỗ/tháng:        -26.6M
  Lỗ/năm:          -320M ❌
```

**Mitigation:** **Không bao giờ thuê team trước khi conversion validated > 1.5% ở Stage 2.**

#### Kịch bản 2: AI cost runaway

```
1 user Pro abuse AI: 1000 req/ngày
1000 user × 30 ngày × 1000 = 30M req/tháng
  
Với Haiku: 30M × $0.0015 = $45,000/tháng = 1.13 tỷ VND ❌
Với DeepSeek cached: 30M × $0.0002 = $6,000 = 150M VND ❌ vẫn lỗ

→ Doanh thu Stage 2 chỉ 27M/tháng → LỖ 1 tỷ.
```

**Mitigation BẮT BUỘC trước khi launch AI:**
- Rate limit cứng: 30 req/giờ/user, 200/ngày/user
- Anthropic spend cap = $200/tháng max
- Alert khi đạt 50% cap
- Disable AI khi vượt 90% cap
- Track per-user usage, ban abuser

#### Kịch bản 3: Refund spike sau Trọn đời campaign

```
Campaign Trọn đời 999k: 100 user mua → 99.9M doanh thu
Sau 7 ngày, 30 user refund (chính sách 7 ngày) → -30M

Đã chi:
  Marketing (ads): 20M
  Token bonus (8000 × 100): cost ~5M
  ────────────────────
  Total chi:       25M
  
Doanh thu thực:   69.9M
Lợi nhuận:        44.9M ✅ vẫn lãi
  
Nếu refund 50%:
Doanh thu thực:   49.9M
Lợi nhuận:        24.9M (mỏng nhưng vẫn ổn)

Nếu refund 80%:
Doanh thu thực:   19.9M
Lợi nhuận:        -5M ❌ lỗ
```

**Mitigation:** 
- Onboarding Pro tốt → giảm refund rate
- A/B test refund policy: 7 ngày vs 3 ngày
- Trọn đời chỉ refund 50% sau 7 ngày, không refund sau 30 ngày

#### Kịch bản 4: Đụng thuế đột ngột

```
Tháng 11 năm thứ 2:
  Doanh thu YTD: 95M (chưa qua 100M)
  → Đang ở Case A miễn thuế

Tháng 12 (campaign cuối năm):
  Doanh thu tháng đó: 30M
  Doanh thu YTD: 125M (vượt 100M) ⚠️
  
→ Tự động áp thuế 7% cho TOÀN BỘ 125M:
  Thuế truy thu: 8.75M
  
Nếu chưa set aside: phải lấy từ runway → cash crunch.
```

**Mitigation:**
- Set aside 7% doanh thu vào tài khoản riêng từ tháng đầu, KHÔNG tiêu
- Khi YTD vượt 80M → đăng ký Hộ KD ngay để không bị truy thu

### 9.3 Bảng break-even conversion theo Stage

Conversion **tối thiểu** để hòa vốn (sau optimization):

| Stage | MAU | Chi phí cố định/tháng | ARPPU MRR | Conversion tối thiểu |
|-------|-----|---------------------|-----------|----------------------|
| 0 | 500 | 25k | 73k | **0.07%** (rất dễ) |
| 1a | 5k | 80k | 73k | **0.02%** (1 user mua = đủ) |
| 1b | 10k | 4M | 73k | **0.55%** |
| 2 | 25k | 11M | 73k | **0.60%** |
| 3 | 75k | 54M | 73k | **0.99%** ← critical |
| 4 | 150k | 130M | 73k | **1.19%** |

**Insight quan trọng:** Stage 3-4 break-even conversion **~1%**. Nếu conversion thực tế < 1% → LỖ.

→ **Phải validate conversion >= 1.5%** ở Stage 2 trước khi scale lên Stage 3.

### 9.4 Bảng "Khi nào nên dừng scale"

| Tín hiệu | Hành động |
|---------|----------|
| Conversion < 1% trong 3 tháng liền | Dừng growth marketing, tập trung product retention |
| AI cost > 30% doanh thu | Audit user usage, siết rate limit |
| Refund rate > 10% | Pause campaign, audit onboarding |
| Churn rate (Pro user) > 30%/tháng | Stop spending acquisition, fix retention |
| Cumulative cash < 3 tháng chi phí | EMERGENCY: cut team, freeze hire, raise prices |

### 9.5 Lỗ "tốt" vs "xấu"

**Lỗ tốt (chấp nhận được):**
- Stage 0-1a: Lỗ vì đầu tư product (chưa launch monetize đủ)
- Sau big launch campaign: Lỗ 1-2 tháng vì marketing burst
- Khi build mobile app: Dev cost upfront, ROI sau 6 tháng

**Lỗ xấu (cần stop ngay):**
- Lỗ kéo dài > 6 tháng mà conversion không cải thiện
- Lỗ vì team quá lớn so với revenue
- Lỗ vì AI runaway (không có cap)
- Lỗ vì refund spike + không học từ campaign

---

## 10. Rủi ro tài chính cần phòng

| Rủi ro | Tác động | Mitigation |
|--------|---------|-----------|
| PayOS thay đổi fee | Margin giảm | Add backup gateway (VNPay, MoMo) |
| AI cost runaway (Anthropic bill) | Lỗ nặng nếu user abuse | Rate limit 30 req/giờ/user + spend cap ở Anthropic Console |
| Thuế audit ngược | Phạt + truy thu | Lưu đầy đủ invoice PayOS + tự khai thuế đúng hạn (mỗi quý) |
| Đột ngột chuyển case A → B | Bị truy thu khi vượt 100M | Monitor doanh thu theo quý, đăng ký hộ KD trước khi vượt |
| Refund / chargeback spike | Mất tiền + phạt | Policy refund rõ ràng, không refund Trọn đời sau 7 ngày |
| Lifetime user nhiều hơn dự kiến | LTV thực < amortize 36 tháng | Giới hạn slot Trọn đời/tháng hoặc tăng giá định kỳ |
| Currency volatility (USD bill) | Infra bill tăng khi USD/VND tăng | Lock 1 năm Pro plan Supabase (annual billing -20%) |

---

## 11. Khuyến nghị hành động theo timeline

### Khi đang ở Stage 0-1a (< 5.000 MAU)
- ✅ Chưa cần đăng ký kinh doanh
- ✅ Lưu lại invoice PayOS hằng tháng
- ✅ Focus 100% vào product + user growth

### Khi đạt 5.000 MAU (sắp Stage 1b)
- ⚠️ Theo dõi doanh thu tích lũy năm: nếu đang trend > 80M → chuẩn bị đăng ký
- 📋 Đăng ký **hộ kinh doanh cá thể** (chi phí ~500k, 1-2 tuần xử lý)
- 📋 Mở tài khoản ngân hàng doanh nghiệp tách biệt với cá nhân
- 📋 Đăng ký mã số thuế hộ KD

### Khi đạt 10.000 MAU (Stage 1b)
- 📋 Thuê kế toán part-time (~2-5M/tháng) để khai thuế đúng hạn
- 📋 Setup hệ thống ghi nhận doanh thu auto từ PayOS webhook
- 📋 Bắt đầu set aside 7% doanh thu vào tài khoản riêng để nộp thuế

### Khi đạt 25.000 MAU (Stage 2)
- 📋 Cân nhắc chuyển sang Công ty TNHH 1 thành viên
- 📋 Audit ARPPU + plan mix — tối ưu featured plan
- 📋 Setup spend cap Anthropic + Supabase
- 📋 Mua bảo hiểm trách nhiệm sản phẩm (nếu có)

### Khi đạt 50.000+ MAU
- 📋 Bắt buộc Công ty TNHH/CP để ký B2B
- 📋 Hire CFO/Finance partner
- 📋 Audit thuế quý đầu tiên

---

## 12. Tham khảo pháp lý

- **Thông tư 40/2021/TT-BTC** — Hướng dẫn thuế GTGT, TNCN cho hộ + cá nhân kinh doanh: https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Thong-tu-40-2021-TT-BTC-huong-dan-thue-thu-nhap-ca-nhan-doi-voi-ho-ca-nhan-kinh-doanh-477908.aspx
- **Nghị định 91/2022/NĐ-CP** — Quản lý thuế đối với hoạt động kinh doanh trên nền tảng số
- **PayOS pricing:** https://payos.vn/bang-gia (rate có thể negotiate khi volume lớn)
- **Anthropic pricing:** https://www.anthropic.com/pricing
- **Supabase pricing:** https://supabase.com/pricing

---

## 13. Bottom line (sau optimization, gợi nhớ nhanh)

> **Stage 0 (<1k MAU):** Lợi nhuận ~500k/tháng. Đừng lo thuế, lo product.
>
> **Stage 1b (10k MAU):** ~6.5M VND lợi nhuận/tháng. Đăng ký Hộ KD.
>
> **Stage 2 (25k MAU):** ~14M VND/tháng. Margin ~50% (đã trừ marketing thực tế).
>
> **Stage 3 (75k MAU):** ~21M VND/tháng. Optimization cứu khỏi margin tụt — tốt hơn 2x so với trước.
>
> **Stage 4 (150k MAU):** ~25M VND/tháng. Optimization cứu khỏi LỖ.
>
> **Break-even conversion:** Stage 3 cần ≥1%, Stage 4 cần ≥1.2%. **Validate 1.5% ở Stage 2 trước khi scale tiếp.**
>
> **3 việc bắt buộc trước khi launch AI:** spend cap Anthropic + rate limit per-user + DeepSeek làm primary.
>
> **Key takeaway:** Optimization KHÔNG cần thiết ở Stage 1-2 (đã lãi đậm), nhưng **CỨU Stage 3-4 khỏi lỗ**. Bắt đầu apply optimization khi launch AI feature đầu tiên.

---

**Số liệu được anchor vào:** [`js/data/plans.js`](../js/data/plans.js), Thông tư 40/2021/TT-BTC, PayOS published rate 2025, Supabase/Cloudflare/Anthropic giá list 2025. Tỉ giá ước lượng 25.000 VND = $1. Verify lại trước khi quyết định.
