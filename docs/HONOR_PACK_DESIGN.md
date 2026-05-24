# 📦 Hanzi Genz — Hộp Ân Cần (Honor Pack) Design

> Donation-framed support pack — thay thế Token Pack VND truyền thống. Mục đích: cho user heavy/collector "tip" app mà KHÔNG bị critique "bào tiền".
> **Last updated:** 2026-05-23
> **Liên quan:** [TOKEN_SINK_ROADMAP.md](TOKEN_SINK_ROADMAP.md) · [PRODUCT_TIER_MATRIX.md](PRODUCT_TIER_MATRIX.md)

---

## 🧭 Triết lý

1. **Donation framing, not purchase framing** — user mua vì altruism + collector, không phải vì "thiếu mới cần".
2. **KHÔNG nudge** — không popup, không banner "Pack ưu đãi", không quảng cáo trên dashboard.
3. **Reward HỮU HÌNH** — outfit limited cụ thể, badge, tên trong Sảnh Vinh Danh. Token chỉ là quà phụ.
4. **Hợp văn hoá VN** — phong cách "ủng hộ app indie Việt" (giống Patreon creator VN).
5. **An toàn pháp lý** — wording không hứa "miễn phí cho mọi người", chỉ "duy trì gói cơ bản miễn phí".

---

## 💰 SKU

| Field | Value |
|---|---|
| SKU | `honor_pack` |
| Tên | Hộp Ân Cần |
| Giá | **99.000đ/lần** |
| Cap | **12 lần/năm/user** (1 outfit/tháng rotate) |
| Refund | 30 ngày, nhưng outfit unlock vĩnh viễn không hoàn |
| Pricing position | KHÔNG đặt cùng grid với Pro sub. Riêng section "💌 Ủng hộ" cuối pricing page hoặc Settings |

---

## 🎁 Reward bundle mỗi lần mua

```
📦 Hộp Ân Cần — 99.000đ

🪙  1.000 token              (≈ 5 outfit nhỏ hoặc 3 outfit cao cấp)
👘  1 outfit "Người Ủng Hộ"  (limited, rotate theo tháng — KHÔNG bán bằng token)
🏅  Badge "Mạnh Thường Quân" (vĩnh viễn, hiển thị profile)
💌  Tên trong Sảnh Vinh Danh (tự nguyện toggle hiển thị)
```

**Pro user mua được:** **+200 token bonus** (tổng 1.200🪙) + **ưu tiên outfit limited** (Pro user xem outfit tháng trước khi Free user, sớm 24h).

---

## 👘 Outfit "Người Ủng Hộ" — 12 món rotate năm

| Tháng | Outfit | Theme |
|---|---|---|
| 1 (Tết) | "Hồng Bao Đỏ" 🧧 | Áo dài đỏ Tết, lì xì cầm tay |
| 2 | "Mùa Xuân" 🌸 | Trang phục xuân, hoa đào |
| 3 | "Hiền Triết" 📜 | Áo nho học sĩ, sách trên tay |
| 4 (Thanh Minh) | "Tảo Mộ" 🌿 | Trang phục truyền thống Thanh Minh |
| 5 | "Cử Nhân" 🎓 | Áo cử nhân, mũ tiến sĩ |
| 6 | "Hè Tây Hồ" 🌊 | Áo phai trắng, ô giấy |
| 7 | "Du Khách" 🎒 | Trang phục du lịch hiện đại |
| 8 (Vu Lan) | "Áo Hiếu" 🪷 | Trang phục Vu Lan, hoa sen |
| 9 (Trung Thu) | "Tể Tướng" 🌕 | Áo quan đỏ-vàng, bánh trung thu |
| 10 | "Trùng Cửu" 🍂 | Áo thu, lá phong |
| 11 | "Tuyết Nhân" ❄️ | Áo lông ấm, viền tuyết |
| 12 | "Đại Lễ" 🐲 | Trang phục đại lễ cuối năm, rồng vàng |

→ User mua đủ 12 tháng → có **full set 12 outfit limited** (không bán bằng token, không có cách nào khác lấy được). Collector psychology mạnh.

**Asset triển khai:**
- Mỗi outfit = 1 SVG layer ghép lên Bé Rồng base
- Total 12 outfit: ~$50-100 Midjourney + cleanup, hoặc 3-5tr thuê designer VN
- Lưu `assets/brand/mascot/outfits/honor/`

---

## 🏛️ Sảnh Vinh Danh (Hall of Honor)

### Page `/honor-hall` (mới)

Hiển thị:
- Tên + avatar tất cả user "Mạnh Thường Quân" (chỉ ai toggle hiển thị)
- Sort theo tổng số lần mua Hộp Ân Cần (cao → thấp)
- Badge tier hiển thị:
  - 🥉 **Đồng Lệ** — mua 1-3 hộp
  - 🥈 **Bạc Lệ** — mua 4-7 hộp
  - 🥇 **Kim Lệ** — mua 8-11 hộp
  - 💎 **Hoa Đăng** — mua đủ 12 (full set/năm) → in đậm + glow effect

### Privacy

- Hiển thị mặc định: **TẮT** (privacy-first)
- User chủ động toggle ON trong Settings → "Ủng hộ" → "Hiển thị tên ở Sảnh Vinh Danh"
- Có thể hiển thị tên thật / nickname / ẩn danh "Người Ẩn Danh #1234"

---

## 📝 Wording — Anti-legal-risk (Option 4 đã chốt)

### Modal mua

```
┌──────────────────────────────────────────┐
│  📦 Hộp Ân Cần — 99.000đ                  │
│                                            │
│  Hanzi Genz không có quảng cáo, không bán │
│  dữ liệu. Đóng góp của bạn giúp mình duy  │
│  trì gói cơ bản miễn phí + thêm content  │
│  mới cho người Việt học tiếng Trung.     │
│                                            │
│  ─────────────────────────────────         │
│  Bạn nhận làm cảm ơn:                     │
│    🪙 1.000 token                          │
│    👘 Outfit "Người Ủng Hộ" tháng này     │
│    🏅 Badge "Mạnh Thường Quân" vĩnh viễn  │
│    💌 Tên trong Sảnh Vinh Danh (tự chọn)  │
│                                            │
│  Pro user: +200 token + ưu tiên outfit    │
│  ─────────────────────────────────         │
│  Chi tiết Free vs Pro: [/free-vs-pro]     │
│  ToS + Refund: [/terms]                   │
│                                            │
│  [Mua qua PayOS]  [Để sau]                │
└──────────────────────────────────────────┘
```

**Vì sao wording này an toàn:**

| Câu | An toàn vì |
|---|---|
| "Không có quảng cáo, không bán dữ liệu" | Sự thật → không thể critique |
| "Duy trì gói cơ bản miễn phí" | Sự thật (HSK 1-2 + vocab HSK 3.0 L1-L3 free vĩnh viễn) |
| "Thêm content mới cho người Việt" | Aspiration, không cam kết cứng |
| "Cảm ơn" | Framing donation, nhưng quà rõ ràng → không phải lừa |
| "Chi tiết Free vs Pro" link | Minh bạch — user click thấy scope rõ |

### ❌ KHÔNG dùng

- "Miễn phí cho người Việt" (general — sai sự thật)
- "Mua để unlock toàn bộ app" (sai — không unlock Pro feature)
- "Donation" / "Quyên góp" (về pháp lý vẫn là purchase qua PayOS, đừng làm user nhầm)
- "Ủng hộ giáo dục Việt Nam" (over-claim — app là project cá nhân, không phải tổ chức giáo dục)

---

## ⚖️ Tuân thủ pháp luật VN

| Vấn đề | Mitigation |
|---|---|
| Luật BVQL Người tiêu dùng 2023 — refund 7-15 ngày online | ToS rõ: refund 30 ngày, **trừ phần đã consume** (token đã tiêu, outfit đã unlock không hoàn) |
| Luật Quảng cáo 2012 — cấm gây nhầm lẫn | Wording Option 4 không hứa "miễn phí toàn bộ". Có link `/free-vs-pro` |
| Nghị định 38/2021 — xử phạt vi phạm hành chính quảng cáo (số điều và mức phạt cụ thể CẦN verify thuvienphapluat.vn) | Wording defensible — chỉ nói sự thật |
| Nghị định 123/2020 — hoá đơn điện tử | Tích hợp Viettel/Misa eInvoice nếu user yêu cầu (optional v1) |
| Thuế TNCN/TNDN (doanh thu >100tr/năm) | Đăng ký **hộ kinh doanh** khi gần ngưỡng — action ngoài code |
| AML (Anti-Money-Laundering) | Cap 12 lần/năm/user. Vượt → email confirm |

→ Chi tiết: `memory/legal_compliance_vn.md`

---

## 🚫 TUYỆT ĐỐI KHÔNG

| Anti-pattern | Vì sao |
|---|---|
| Banner "Mua Hộp Ân Cần ngay" trên dashboard | Phá donation framing → thành purchase |
| Popup "Hộp Ân Cần giảm giá hôm nay" | Dark pattern — không có giảm giá, không bao giờ |
| Email nhắc mua | Spam, phá altruism |
| "Limited time 24h!" pressure | Pressure-selling, phá triết lý |
| Outfit tháng này không rotate | Phải rotate đúng tháng — collector mới có lý do mua đều |
| Bán outfit Người Ủng Hộ bằng token | Phá uniqueness — outfit Hộp Ân Cần KHÔNG có cách nào khác để lấy |

---

## 📋 Implementation checklist

- [ ] `js/data/plans.js` — thêm `HONOR_PACK` SKU
- [ ] `js/honor.js` (mới) — logic mua + check outfit tháng + display
- [ ] `pages/honor-hall.html` (mới) — Sảnh Vinh Danh page
- [ ] `pages/pricing.html` — thêm section "💌 Ủng hộ" riêng dưới Pro grid, KHÔNG đặt cùng
- [ ] `terms.html` — refund policy cụ thể cho Hộp Ân Cần
- [ ] Edge Function `create-payment` — whitelist SKU `honor_pack`
- [ ] Schema Supabase: `user_honor_purchases` (user_id, purchased_at, outfit_id, month_year)
- [ ] Schema: `user_settings.honor_hall_display` (bool, default false)
- [ ] Asset: 12 outfit SVG → `assets/brand/mascot/outfits/honor/`
- [ ] UI badge "Mạnh Thường Quân" tier hiển thị profile

---

## 🔗 Decision log

| Date | Decision |
|---|---|
| 2026-05-23 | Tạo Hộp Ân Cần thay Token Pack VND. 1 SKU duy nhất 99k. |
| 2026-05-23 | Cap 12 lần/năm/user (rotate 1 outfit/tháng) |
| 2026-05-23 | Wording Option 4: anti-ad framing + duy trì gói cơ bản free + aspiration content |
| 2026-05-23 | Sảnh Vinh Danh privacy-first (default OFF, user toggle ON) |
| 2026-05-23 | Pro user mua được +200 token + ưu tiên outfit 24h |
| 2026-05-23 | Outfit Người Ủng Hộ KHÔNG bán bằng token — uniqueness moat |
