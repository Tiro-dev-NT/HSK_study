# 💰 Hanzi Genz — Pricing Marketing Strategy

> Lock chiến lược marketing PRICING không vi phạm Luật Quảng cáo 2012 + NĐ 38/2021. Combo A: per-month effective + real-world compare + launch promo + referral.
> **Last updated:** 2026-05-23
> **Liên quan:** [PRODUCT_TIER_MATRIX.md](PRODUCT_TIER_MATRIX.md) · [COMPLIANCE_CHECKLIST.md](COMPLIANCE_CHECKLIST.md) · `js/data/plans.js`

---

## 🎯 Triết lý

1. **KHÔNG fake anchor giá** — không `priceOrig` cao khống để giả vờ giảm giá. Vi phạm Luật QC 2012 + NĐ 38/2021.
2. **Anchor bằng FACT** — so per-month effective rate giữa các tier (đều bán thật).
3. **Real-world compare** — so với vật phẩm thực (ly trà đá, ổ bánh mì) để user cảm nhận giá.
4. **Time-limited promo CÓ THẬT** — khi giảm giá launch/lễ → có log + thật sự time-limited.
5. **Tăng giá theo thời gian + Grandfather** — tạo urgency THẬT lock giá cũ.
6. **Brand "tử tế"** — không pressure-selling, không dark pattern.

---

## 📊 Combo A — 4 layers marketing

### Layer 1 — Per-month effective rate (CƠ BẢN, dùng luôn)

So sánh anchor = Monthly tier (đang bán thật) thay vì `priceOrig` fake:

| Tier | Tổng giá | Per tháng effective | So với Monthly |
|---|---|---|---|
| Linh hoạt 1m | 75.000đ | 75.000đ | baseline |
| Chăm chỉ 3m | 199.000đ | ~66.000đ | **Rẻ hơn 12%/tháng** |
| Bứt phá 6m | 329.000đ | ~55.000đ | **Rẻ hơn 27%/tháng** |
| **Tiết kiệm 12m** ⭐ | 499.000đ | **~42.000đ** | **Rẻ hơn 44%/tháng** |
| Trọn đời | 2.490.000đ | Vĩnh viễn | Hoà vốn sau ~33 tháng |

**UI hiển thị:**
- Bỏ strikethrough `pc-price-original` (đã DONE 2026-05-23)
- Save chip: "Rẻ hơn X%/tháng so Monthly" thay "-X%"
- `pc-price-period`: "/N tháng · ~Yk/tháng · ~Zđ/ngày"

**Hợp pháp vì:** so sánh với Monthly tier thật, không phải giá ảo.

### Layer 2 — Real-world compare (TAGLINE marketing)

Per-day breakdown so với vật phẩm quen thuộc VN:

| Tier | Per ngày | Tagline |
|---|---|---|
| Monthly | ~2.500đ | "Rẻ hơn 1 ổ bánh mì" |
| Quarterly | ~2.200đ | "Bằng 1 tô bún cốc cà phê" |
| Semi | ~1.800đ | "1.800đ/ngày — rẻ hơn 1 ly trà sữa" |
| **Yearly** ⭐ | **~1.400đ** | **"~1.400đ/ngày — rẻ hơn 1 ly trà đá"** |
| Lifetime | — | "Bằng 1 chiếc tai nghe, dùng mãi mãi" |

**Dùng cho:**
- TikTok / Reels script
- Facebook ad copy
- Landing hero headline
- Email marketing

**Hợp pháp vì:** sự thật, không claim "giá gốc bao nhiêu". So sánh subjective không đụng Luật QC.

### Layer 3 — Launch promo CÓ THẬT (time-limited)

Khi public launch, chạy 30 ngày promo CÓ LOG đầy đủ:

```
🎉 KHAI TRƯƠNG — 30 ngày đầu (DD/MM → DD/MM/YYYY)
  Yearly:    499.000đ → 399.000đ (-20%)
  Lifetime:  2.490.000đ → 1.990.000đ (-20%)
  AI Credit Pack Cao:  199.000đ → 159.000đ (-20%)
  
⏰ Đến hết DD/MM/YYYY · Sau ngày này về giá gốc
🔒 User mua trong promo lock giá đã trả
```

**Hợp pháp NẾU:**
- ✅ Thật sự time-limited (countdown chuẩn)
- ✅ Log database `pricing_history` với timestamp đổi giá
- ✅ Sau khi kết thúc → KHÔNG dùng làm `priceOrig` mãi
- ✅ Disclose rõ ngày kết thúc trong UI

**Có thể repeat:**
- Tết Nguyên Đán (giảm 15-20%)
- Sinh nhật app (annual)
- Black Friday (Nov)
- Quốc khánh VN (2/9)

KHÔNG repeat quá 3-4 lần/năm — đừng để promo thành thường xuyên (mất ý nghĩa).

### Layer 4 — Referral (viral growth, không cần giảm giá)

```
👥 Mời bạn → Cả 2 được:
  - 500🪙 (khi bạn được mời học thật ≥7 ngày)
  - +20% bonus AI Credit khi mua pack đầu tiên

Anti-sybil: 1 IP / device max 3 referral/tháng
```

**Hợp pháp:** đã chốt trong PRODUCT_TIER_MATRIX 2026-05-21.

**Marketing message:**
- "Học cùng bạn, cả 2 cùng được thưởng"
- "1 IP max 3 ref/tháng → chống farm acc ảo"

### Layer 5 (tương lai) — Tăng giá + Grandfather

Sau 6-12 tháng có user base, áp dụng:

```
Năm 2026: Yearly 499k, Lifetime 2.49M
Năm 2027 (Q3): Yearly 599k, Lifetime 2.99M
Năm 2028 (Q3): Yearly 699k, Lifetime 3.49M

🔒 Early adopters (mua trước thời điểm tăng) GIỮ NGUYÊN giá cũ vĩnh viễn
```

**Marketing message:**
_"Đăng ký Pro trước 1/7/2027 — lock giá 499k. Sau ngày này: 599k."_

**Hợp pháp + tạo urgency THẬT:**
- ✅ Tăng giá thật sự xảy ra
- ✅ Log pricing_history
- ✅ Grandfather user cũ — model phổ biến (Netflix, Spotify, Notion)
- ✅ Lúc này dùng `priceOrig: 499000` HỢP PHÁP (đã có log bán giá đó)

**Khi nào áp dụng:**
- ≥ 5.000 paying user
- App đã add đủ giá trị mới (Phase R AI Tutor, Phase O+ Visual Vocab, ...)
- Trước thời điểm tăng 30 ngày: email marketing "Lock giá cũ"

---

## ❌ Anti-pattern (KHÔNG bao giờ)

| Anti-pattern | Vi phạm | Damage |
|---|---|---|
| `priceOrig` fake (giá gốc khống) | Luật QC 2012 Đ.8 + NĐ 38/2021 | Phạt 20-40tr + brand damage |
| Fake urgency "Còn 2 chỗ!" | Luật BVQL TD 2023 + Luật QC | Phạt + critique TikTok |
| Pre-checked subscribe | Luật BVQL TD 2023 (consent opt-in) | Phạt 20-40tr |
| "Tốt nhất VN" / "Số 1" không có giải | Luật QC superlative | Phạt 20-40tr |
| Cancel sub khó (10 click) | Luật BVQL TD 2023 | Phạt + chargeback |
| Flash sale 24h mỗi tuần | Khách quen với sale → giảm trust | Brand mất giá trị |
| Discount permanent không log | Khó defend khi audit | Phạt + admin headache |
| "Giảm 50% hôm nay" thường xuyên | Hết tác dụng + dark pattern | Brand damage |
| Email spam "Cuối tháng giảm giá!" | Luật BVQL TD 2023 marketing consent | Khiếu nại + opt-out cao |

---

## 📈 Conversion benchmark (industry SaaS)

| Strategy | Conversion lift vs no-discount baseline |
|---|---|
| Per-month effective (Layer 1) | +15-25% |
| Real-world compare (Layer 2) | +5-10% |
| Launch promo 30 ngày (Layer 3) | +30-50% |
| Referral 20% bonus (Layer 4) | +20-40% |
| Tăng giá grandfather (Layer 5) | +40-60% urgency lift |
| **Combo A (Layer 1+2+3+4)** | **+40-70% baseline lift** |

→ **Combo A** = realistic + sustainable, không over-promise.

---

## 📝 Marketing copy templates (Combo A)

### Landing hero

```
"Học tiếng Trung HSK với giá ~1.400đ/ngày — rẻ hơn 1 ly trà đá.
 Gói cơ bản miễn phí vĩnh viễn. Pro mở khoá HSK 3-6 + AI Tutor."
```

### TikTok script (30s)

```
Hook: "Học tiếng Trung 1.400đ/ngày — bằng 1 ly trà đá."

Body: "Hanzi Genz Pro Yearly = 499k cho 365 ngày.
       Mở khoá HSK 3-6, AI chấm phát âm, game premium unlimited.
       Mua xong, lock giá vĩnh viễn — sau này tăng giá vẫn của bạn."

CTA: "Free HSK 1-2 luôn. Link bio. (Không quảng cáo, không bán dữ liệu)"
```

### Email subject lines

- "Yearly Pro: ~1.400đ/ngày — rẻ hơn ly trà đá"
- "🎉 Khai trương 30 ngày: Pro Yearly -20%"
- "Mời bạn = cả 2 được 500🪙 + bonus credit"

### Facebook ad headline

```
Headline: "Học HSK 1-9 chỉ ~1.400đ/ngày"
Body: "Pro Yearly 499.000đ/12 tháng. Rẻ hơn 44%/tháng so Monthly.
       Free HSK 1-2 vĩnh viễn. Không quảng cáo, không bán dữ liệu."
CTA: "Dùng thử 7 ngày Pro"
```

### App store description (Google Play / iOS)

```
Hanzi Genz — Học HSK + HSKK
✅ HSK 1-9 vocabulary
✅ Gói cơ bản miễn phí vĩnh viễn
✅ Pro Yearly chỉ ~1.400đ/ngày
✅ Không quảng cáo, không bán dữ liệu
```

---

## 🛠️ Implementation status

### Đã làm (2026-05-23)

- ✅ `js/data/plans.js` — bỏ `priceOrig` fake mọi tier
- ✅ Thêm `perDay` field cho mỗi tier (marketing helper)
- ✅ Thêm `compareNote` rõ ràng "so với Monthly"
- ✅ `saveLabel` đổi từ "-X%" → "Rẻ hơn X%/tháng so Monthly"
- ✅ `pages/pricing.html` — bỏ `pc-price-original` strikethrough, sửa save-chip, bump Lifetime 2.49M, add Yearly card
- ✅ Hero pricing.html — daily messaging "~1.400đ/ngày — rẻ hơn ly trà đá"

### CẦN làm tiếp (Phase 2 monetization code)

- ☐ `landing.html` — thay headline về daily messaging
- ☐ Setup table `pricing_history` (track mọi thay đổi giá có timestamp)
- ☐ Code launch promo banner (countdown + log)
- ☐ Code referral flow + bonus credit logic
- ☐ Settings → "Quản lý gói" hiển thị giá đã trả + grandfather note

### Tương lai

- ☐ Plan tăng giá Q3 2027 (cần ≥5k paying user trước)
- ☐ Email marketing campaign "Lock giá cũ" trước tăng giá 30 ngày
- ☐ A/B test landing hero (daily messaging vs feature messaging)

---

## 📊 Pricing history (track sau khi launch promo)

> Bảng track mọi thay đổi giá để defense pháp lý khi cần.

| Date | Tier | Giá cũ | Giá mới | Lý do | Log Supabase |
|---|---|---|---|---|---|
| 2026-05-23 | Lifetime | 1.490.000đ | 2.490.000đ | Industry benchmark 5× yearly | TODO: add row vào DB |
| (TBD) | Yearly | 499.000đ | 399.000đ | Launch promo 30 ngày | TODO |
| (TBD) | Yearly | 399.000đ | 499.000đ | Promo kết thúc | TODO |

---

## 🔗 Decision log

| Date | Decision |
|---|---|
| 2026-05-23 | Bỏ `priceOrig` fake mọi tier — chống Luật QC 2012 |
| 2026-05-23 | Anchor = per-month effective rate (so Monthly tier thật) |
| 2026-05-23 | Tagline marketing = real-world compare (ly trà đá/ngày) |
| 2026-05-23 | Combo A: 4 layer (per-month + real-world + launch promo + referral) |
| 2026-05-23 | Layer 5 (tăng giá + grandfather) defer 6-12 tháng |
| 2026-05-23 | TUYỆT ĐỐI KHÔNG fake urgency, pre-check, hidden cost, cancel khó |
