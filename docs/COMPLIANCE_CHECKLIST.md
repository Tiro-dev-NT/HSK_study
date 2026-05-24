# 🛡️ Hanzi Genz — Legal Compliance Checklist (VN)

> Audit toàn diện rủi ro vi phạm pháp luật VN + mitigation. Track status từng nhóm.
> **Last updated:** 2026-05-23
> **Liên quan:** memory `legal_compliance_vn.md` · [HONOR_PACK_DESIGN.md](HONOR_PACK_DESIGN.md) · [AI_CREDIT_PRICING.md](AI_CREDIT_PRICING.md)
>
> ⚠️ **DISCLAIMER:** File này tổng hợp HƯỚNG defensive strategy. Số điều cụ thể từng văn bản luật **CẦN VERIFY** trên [thuvienphapluat.vn](https://thuvienphapluat.vn) trước khi launch. Tham vấn luật sư VN có giấy phép cho các vấn đề nghi vấn.

---

## 🎯 Cấp rủi ro (Risk level)

| Mức | Xác suất | Damage | Action |
|---|---|---|---|
| 🔴 **CAO** | Likely → app phổ biến | Mất tiền/uy tín/takedown | FIX TRƯỚC LAUNCH |
| 🟠 **VỪA** | Possible | Phạt + sửa | Fix sớm, theo dõi |
| 🟡 **THẤP** | Edge case | Cảnh báo, ít phạt | Fix khi có thời gian |
| 🟢 **OK** | Đã handle | — | Maintain |

---

## 1️⃣ Quảng cáo & Marketing (🔴 CAO)

**Luật áp dụng:** Luật Quảng cáo 2012 (sửa 2018) · NĐ 38/2021/NĐ-CP (xử phạt) · Luật Cạnh tranh 2018

### Rủi ro cụ thể

| # | Hành vi rủi ro | Risk | Mitigation |
|---|---|---|---|
| 1.1 | Slogan "miễn phí cho người Việt" general | 🔴 | Đổi: "duy trì gói cơ bản miễn phí cho người mới học". Có trang `/free-vs-pro` |
| 1.2 | Số liệu fake: "Học HSK 3 trong 30 ngày" | 🔴 | KHÔNG hứa kết quả cụ thể. Dùng: "Hỗ trợ ôn HSK theo lộ trình SRS" |
| 1.3 | Giá gốc fake: "999k → 499k" (chưa bán giá gốc bao giờ) | 🔴 | Chỉ show `priceOrig` nếu thật sự đã từng bán. Hiện `plans.js` có `priceOrig: 900000` cho yearly → cần verify đã từng bán giá này chưa |
| 1.4 | Fake urgency: "Còn 2 chỗ!" "Flash sale 24h!" | 🔴 | TUYỆT ĐỐI KHÔNG |
| 1.5 | Testimonial bịa | 🔴 | Chỉ dùng review thật có consent. Lưu screenshot + ngày |
| 1.6 | Claim AI accuracy không chứng minh | 🟠 | Wording: "AI hỗ trợ" thay "AI chính xác 99%" |
| 1.7 | So sánh trực diện bash competitor (Baolingo, HiHSK) | 🟠 | Luật Cạnh tranh 2018: comparative ads phải có chứng cứ. Tránh bash, chỉ liệt kê fact của app mình |
| 1.8 | Sticker "App số 1 VN" / "Tốt nhất" | 🔴 | KHÔNG dùng superlative nếu không có giải thưởng/khảo sát hỗ trợ |
| 1.9 | Email/notification marketing không opt-in | 🟠 | Luật BVQL TD 2023: phải opt-in rõ. Settings → toggle marketing email |

### Status

- ✅ Slogan Hộp Ân Cần đã chốt Option 4 (an toàn)
- ✅ Trang `/free-vs-pro` đã tạo
- ⏳ Verify `priceOrig` 900k yearly đã từng bán chưa — nếu chưa, đổi `priceOrig: null` hoặc bỏ
- ⏳ Audit toàn bộ landing/marketing copy hiện có (tìm "miễn phí", "tốt nhất", "số 1", "đỗ HSK")

---

## 2️⃣ Bảo vệ người tiêu dùng (🔴 CAO)

**Luật áp dụng:** Luật BVQL Người tiêu dùng 2023 (số 19/2023/QH15, hiệu lực 1/7/2024)

### Rủi ro cụ thể

| # | Hành vi rủi ro | Risk | Mitigation |
|---|---|---|---|
| 2.1 | Refund policy không rõ ràng | 🔴 | ToS ghi rõ: 30 ngày refund Pro chưa consume; outfit/AI Credit consume không hoàn |
| 2.2 | Cancel sub khó (nhiều click, chôn menu) | 🔴 | Settings → 1-click "Huỷ Pro auto-renew". Pattern: cancel phải DỄ NHƯ mua |
| 2.3 | Auto-renew không thông báo 3-7 ngày trước | 🟠 | Email reminder 7 ngày trước hết hạn sub |
| 2.4 | Pre-checked subscribe checkbox | 🔴 | TUYỆT ĐỐI KHÔNG — checkbox phải mặc định UNCHECK |
| 2.5 | Hidden cost (phí ẩn không show) | 🔴 | Niêm yết giá đã include VAT 10% — Luật Giá 2012 |
| 2.6 | Lifetime refund sau N tháng | 🟠 | ToS: Lifetime refund 30 ngày, sau đó không hoàn nhưng disclose rõ |
| 2.7 | Dispute không có kênh khiếu nại | 🔴 | Page `/contact` + email support@hanzigenz.com + Telegram bot. Trả lời <72h |
| 2.8 | Force cross-sell (Pre-check Hộp Ân Cần) | 🔴 | TUYỆT ĐỐI KHÔNG. Hộp Ân Cần phải user click chủ động từ Settings/Pricing footer |

### Status

- ⏳ Tạo `pages/terms.html` v2 với refund policy chi tiết
- ⏳ Settings → "Huỷ Pro" 1-click button
- ⏳ Email reminder auto-renew (đợi có email backend)
- ⏳ Page `/contact` hoặc widget liên hệ

---

## 3️⃣ Dữ liệu cá nhân (🔴 CAO)

**Luật áp dụng:** NĐ 13/2023/NĐ-CP (PDPL — Personal Data Protection Law, hiệu lực 1/7/2023) · Luật An ninh mạng 2018

### Rủi ro cụ thể

| # | Hành vi rủi ro | Risk | Mitigation |
|---|---|---|---|
| 3.1 | Thu thập email/avatar Google OAuth không consent | 🟠 | Login screen disclose: "Đăng nhập đồng nghĩa đồng ý với Privacy Policy" + link |
| 3.2 | Lưu hành vi học (cards_studied, srs_data...) không disclose | 🟠 | Privacy ghi rõ: "Lưu progress để sync và hỗ trợ học. Không bán/share." |
| 3.3 | Share dữ liệu với bên 3 (Supabase USA, DeepSeek China, ElevenLabs USA) | 🔴 | Privacy disclose từng partner + mục đích. Cần SCC (Standard Contractual Clauses) nếu transfer cross-border |
| 3.4 | Cookie không có banner consent | 🟠 | ✅ DONE — Banner `js/cookie-consent.js` |
| 3.5 | Lưu dữ liệu trẻ em <16 không consent cha mẹ | 🔴 | Age gate hoặc minimum age 13/16 trong ToS. Nếu launch riêng cho trẻ em → cần parental consent flow |
| 3.6 | User xoá account → có hard-delete không? | 🟠 | RPC `delete_account_cascade()` đã viết. Cần wire Settings UI |
| 3.7 | Backup off-shore (R2 Cloudflare) | 🟡 | NĐ 13/2023 yêu cầu khai báo Cục An ninh mạng nếu transfer ra nước ngoài data "quan trọng" |
| 3.8 | Log IP user không disclose | 🟡 | Privacy ghi rõ: log IP cho fraud detection + compliance |
| 3.9 | Analytics third-party (GA, Mixpanel...) | 🟠 | ✅ DONE — Audit confirm KHÔNG có third-party tracking |
| **3.10** | **Voice biometric (Phase Y HSKK)** — lưu audio user | 🔴 (khi launch Phase Y) | **Retention 24h ONLY** (locked 2026-05-23). Explicit consent modal trước mỗi ghi âm. Result text vĩnh viễn (không phải voice). Auto-delete cron daily. Xem Privacy section 1.6 + 8 |
| **3.11** | **AI chat history retention** | 🟠 | **Default 7 ngày, opt-in 90 ngày** (locked 2026-05-23). Settings → "Lưu lịch sử Tutor dài hạn" toggle |
| **3.12** | **Essay submission retention** | 🟡 | **30 ngày** (locked 2026-05-23) |

### Status

- ⏳ Tạo `pages/privacy.html` v2 GDPR + PDPL style
- ⏳ Cookie consent banner
- ⏳ Settings → "Xoá tài khoản" hard-delete flow
- ⏳ Audit thư viện analytics nào đang chạy (`grep "gtag\|mixpanel\|amplitude"`)
- ⏳ Add age confirmation khi sign-up (≥13 tuổi)

---

## 4️⃣ Thuế (🟠 VỪA, sẽ thành 🔴 khi doanh thu vượt ngưỡng)

**Luật áp dụng:** Luật Thuế TNCN 2007 (sửa nhiều lần) · NĐ 123/2020/NĐ-CP (hoá đơn điện tử) · Luật Giá 2012

### Rủi ro cụ thể

| # | Hành vi rủi ro | Risk | Mitigation |
|---|---|---|---|
| 4.1 | Doanh thu >100tr/năm cá nhân không kê khai | 🔴 | Đăng ký hộ kinh doanh khi sắp đạt ngưỡng. Track doanh thu monthly |
| 4.2 | Không xuất hoá đơn khi user yêu cầu | 🟠 | Tích hợp Viettel Invoice / Misa eInvoice (optional v1, bắt buộc khi user yêu cầu) |
| 4.3 | Giá niêm yết không include VAT 10% | 🟠 | Niêm yết "Đã bao gồm VAT" hoặc tách VAT rõ |
| 4.4 | PayOS transaction record không đối chiếu thuế | 🟠 | Export monthly từ PayOS + đối chiếu với kê khai. Lưu CSV 5 năm |
| 4.5 | Không lưu hồ sơ giao dịch >5 năm | 🟠 | Backup Supabase `payment_orders` table off-site |

### Status

- ✅ Track doanh thu qua Supabase `payment_orders` table
- ⏳ Dashboard admin show doanh thu monthly + warning khi gần 100tr/năm
- ⏳ Nghiên cứu Viettel Invoice / Misa eInvoice API
- ⏳ Update pricing display: thêm "Giá đã bao gồm VAT" footer

---

## 5️⃣ Bản quyền (🟠 VỪA)

**Luật áp dụng:** Luật Sở hữu Trí tuệ 2005 (sửa nhiều lần)

### Rủi ro cụ thể

| # | Hành vi rủi ro | Risk | Mitigation |
|---|---|---|---|
| 5.1 | Câu ví dụ HSK trùng giáo trình HSK official (Hanban) | 🟠 | Self-gen AI + Việt hoá (đã chốt 2026-05-21). Avoid copy nguyên xi từ sách HSK |
| 5.2 | Hình ảnh Midjourney trùng tác phẩm nghệ sĩ | 🟡 | MJ ToS commercial use OK. Tránh prompt theo tên nghệ sĩ cụ thể |
| 5.3 | Audio TTS giọng nhái nghệ sĩ (ElevenLabs voice clone) | 🟡 | Chỉ dùng voice mặc định ElevenLabs hoặc Azure, KHÔNG clone giọng người thật |
| 5.4 | User-generated content (deck import) không kiểm duyệt | 🟠 | Anki import: chỉ private deck, không public share. Nếu public → cần moderation |
| 5.5 | Bài giảng Phase Q copy từ blog/youtube khác | 🟠 | Self-write all. Có thể inspire nhưng paraphrase + cite source |
| 5.6 | Story Mai sử dụng nhân vật/cốt truyện trùng truyện nổi tiếng | 🟡 | Original character + plot. Nếu inspire → public domain only |
| 5.7 | Stroke order data HanziWriter | 🟢 | HanziWriter MIT license — OK |

### Status

- ✅ Triết lý "self-gen AI Việt hoá" đã chốt
- ⏳ Audit data hiện có (`js/data/hsk1.js` ~ `hsk6.js`) có copy từ đâu không
- ⏳ Story Mai: viết character bible original (đã có `content/curriculum/`)

---

## 6️⃣ Nội dung nhạy cảm (🔴 CAO — hard rule app)

**Luật áp dụng:** Luật An ninh Mạng 2018 · Bộ luật Hình sự 2015 · NĐ 53/2022 (an ninh mạng)

### Rủi ro cụ thể

| # | Hành vi rủi ro | Risk | Mitigation |
|---|---|---|---|
| 6.1 | Câu ví dụ TQ nhắc Đài Loan độc lập / Tibet / Tân Cương | 🔴 | Memory `product_principles.md` HARD RULE: app KHÔNG chính trị. Filter pre-gen + duyệt thủ công |
| 6.2 | Bản đồ TQ thiếu Đài Loan / Hoàng Sa / Trường Sa | 🔴 | KHÔNG dùng bản đồ TQ official (có thể không có Hoàng Sa). Tự vẽ minimal |
| 6.3 | Mô tả lãnh đạo TQ/VN nhạy cảm | 🔴 | Tránh hoàn toàn — content học từ vựng, không cần nhắc |
| 6.4 | AI prompt injection → output bậy/nhạy cảm | 🟠 | Filter output AI Hạng 2 (Tutor, chấm bài) bằng moderation API trước khi return |
| 6.5 | User chat AI nhập nội dung nhạy cảm | 🟡 | AI Tutor refuse mềm. Log abuse → ban acc lặp lại |
| 6.6 | Game Boss Battle "bạo lực" | 🟢 | Boss = nhân vật phong cách wuxia, không máu me. OK |
| 6.7 | User-uploaded avatar nhạy cảm | 🟠 | Dùng Google avatar default. Nếu cho upload riêng → moderation |
| 6.8 | Hộp Ân Cần outfit có symbol nhạy cảm (cờ, biểu ngữ) | 🔴 | Design outfit pure cosmetic VN/TQ truyền thống (áo dài, áo nho, áo cử nhân...). KHÔNG cờ/quốc kỳ |

### Status

- ✅ Memory `product_principles.md` lock anti-politics
- ⏳ AI moderation filter (Phase R/S/Y khi code)
- ⏳ Audit 7000 từ HSK + ví dụ — không có nhạy cảm chính trị
- ⏳ Design outfit "Người Ủng Hộ" 12 món — review trước khi launch

---

## 7️⃣ Thanh toán (🟢 OK — PayOS licensed)

**Luật áp dụng:** Luật Các Tổ chức Tín dụng 2010 · NĐ 101/2012 (thanh toán không tiền mặt)

### Status

- ✅ PayOS = licensed PSP của Ngân hàng Nhà nước → OK
- ✅ KHÔNG accept crypto / USD trực tiếp
- ✅ Refund qua PayOS chuẩn

### Việc theo dõi

- ⏳ Khi launch quốc tế (Phase J/I) → cân nhắc Stripe/PayPal — cần licensed cross-border

---

## 8️⃣ Cạnh tranh không lành mạnh (🟠 VỪA)

**Luật áp dụng:** Luật Cạnh tranh 2018

### Rủi ro cụ thể

| # | Hành vi rủi ro | Risk | Mitigation |
|---|---|---|---|
| 8.1 | Bash competitor trực tiếp ("HiHSK kém, dùng Hanzi Genz") | 🔴 | KHÔNG bash. Liệt kê fact: "HSK Master có HSKK, đối thủ chưa có" |
| 8.2 | Copy UI Baolingo nguyên xi | 🟠 | Memory `implementation_plan.md` v4.8 đã chốt "3 lớp khác biệt" (Naming + Visual + Twist) |
| 8.3 | Scraping data HiHSK / Baolingo | 🔴 | TUYỆT ĐỐI KHÔNG. Self-gen all content |
| 8.4 | Phishing user của competitor (mass email từ leaked data) | 🔴 | TUYỆT ĐỐI KHÔNG. Vi phạm cả Luật BVQL TD + An ninh mạng |
| 8.5 | Comparative advertising không có chứng cứ | 🟠 | Nếu so sánh ("rẻ hơn 50%") → cần screenshot bằng chứng giá competitor |

### Status

- ✅ Memory anti-plagiarism strategy đã chốt
- ⏳ Audit content marketing có claim so sánh nào không

---

## 9️⃣ An toàn thông tin & An ninh mạng (🟠 VỪA)

**Luật áp dụng:** Luật An toàn TT Mạng 2018 · Luật An ninh mạng 2018 · NĐ 53/2022

### Rủi ro cụ thể

| # | Hành vi rủi ro | Risk | Mitigation |
|---|---|---|---|
| 9.1 | Dữ liệu user VN lưu off-shore (Supabase USA, R2 Cloudflare) | 🟠 | NĐ 53/2022: dữ liệu "quan trọng" phải lưu trong VN. App học từ vựng — chưa rõ thuộc loại "quan trọng" không. Verify với luật sư |
| 9.2 | Backup không đăng ký Cục An ninh mạng | 🟡 | Hiện app nhỏ, ít rủi ro thanh tra. Khi lớn → đăng ký |
| 9.3 | Login không 2FA — risk account takeover | 🟡 | Phase sau: add 2FA optional |
| 9.4 | Supabase RLS policy lỏng → data leak | 🟠 | Audit RLS mỗi table trước Phase H |
| 9.5 | API key/secret commit nhầm git | 🔴 | `.gitignore` + git-secrets pre-commit hook |
| 9.6 | XSS / CSRF trên app | 🟠 | Vanilla JS dùng `textContent` thay `innerHTML` khi inject user content |
| 9.7 | SQL injection via Supabase | 🟢 | Supabase JS client parameterized → OK |

### Status

- ⏳ Verify rule data sovereignty với luật sư khi launch lớn
- ⏳ Audit RLS policies Supabase
- ⏳ Add pre-commit hook git-secrets

---

## 🔟 Trẻ em (🟠 VỪA → 🔴 nếu target trẻ em)

**Luật áp dụng:** Luật Trẻ em 2016 · NĐ 13/2023 PDPL · NĐ 56/2017 (chi tiết Luật Trẻ em)

### Rủi ro cụ thể

| # | Hành vi rủi ro | Risk | Mitigation |
|---|---|---|---|
| 10.1 | User <16 sử dụng app không có parental consent | 🟠 | Sign-up flow: confirm "≥13 tuổi". <13 → parental consent flow hoặc reject |
| 10.2 | Marketing target trẻ em <13 | 🔴 | Brand mascot Bé Rồng cute → có thể attract trẻ em. Pricing page wording "người lớn học HSK" để target adult |
| 10.3 | Học sinh lớp 6-9 (12-15 tuổi) học HSK 1-2 | 🟡 | Chính là user segment! Cần parental consent cho <16. Hoặc set min age 16 trong ToS |
| 10.4 | Hộp Ân Cần — trẻ em mua bằng thẻ cha mẹ | 🟠 | Cap 12 lần/năm + 1 lần confirm OTP đầu tiên → hạn chế trẻ tự mua |
| 10.5 | AI Tutor chat với trẻ em không kiểm duyệt | 🟠 | Filter AI output kỹ + log chat |

### Status

- ⏳ Sign-up: add age confirmation checkbox "Tôi từ 16 tuổi trở lên hoặc có sự đồng ý của cha mẹ"
- ⏳ ToS section "Trẻ em" rõ ràng
- ⏳ Marketing copy target adult learner (HSK 4-6 + ôn thi)

---

## 1️⃣1️⃣ Khiếu nại & Dispute Resolution (🟠 VỪA)

**Luật áp dụng:** Luật BVQL TD 2023 Chương III (giải quyết tranh chấp)

### Rủi ro cụ thể

| # | Hành vi rủi ro | Risk | Mitigation |
|---|---|---|---|
| 11.1 | Không có kênh khiếu nại chính thức | 🔴 | Email support@hanzigenz.com + Telegram bot + form `/contact` |
| 11.2 | Không trả lời khiếu nại trong thời hạn luật (15 ngày) | 🟠 | SLA: respond <72h, resolve <15 ngày |
| 11.3 | Không có policy hoàn tiền cụ thể | 🔴 | ToS section refund rõ ràng (đã plan) |
| 11.4 | Chargeback nhiều → PayOS đình chỉ | 🟠 | Track chargeback rate <1%. Nếu cao → investigate fraud / improve UX |

### Status

- ⏳ Tạo `pages/contact.html` hoặc widget chat
- ⏳ Email support@hanzigenz.com setup
- ⏳ ToS section khiếu nại + timeline

---

## 1️⃣2️⃣ App Store / Google Play (🟢 chưa launch — review khi tới Phase I)

**Áp dụng:** Google Play Policy · App Store Review Guidelines

### Việc cần chuẩn bị (Phase I)

- ✅ App store description không claim "free toàn bộ"
- ✅ IAP label "Mua trong ứng dụng" — Apple/Google auto handle
- ⏳ Age rating phù hợp content (12+ hoặc 17+)
- ⏳ Privacy policy URL bắt buộc
- ⏳ Data Safety form (Google Play) khai báo data collection
- ⏳ App Tracking Transparency (Apple iOS)

---

## 📊 Risk Summary

| Nhóm | Risk hiện tại | Action priority |
|---|---|---|
| 1. Quảng cáo & Marketing | 🔴 CAO | **1** — fix trước launch |
| 2. BVQL Người tiêu dùng | 🔴 CAO | **2** — ToS + refund + cancel |
| 3. Dữ liệu cá nhân | 🔴 CAO | **3** — Privacy + cookie + age |
| 4. Thuế | 🟠 VỪA (sắp 🔴) | **4** — track doanh thu |
| 5. Bản quyền | 🟠 VỪA | 5 — audit content |
| 6. Nội dung nhạy cảm | 🔴 CAO (theo hard rule) | **6** — filter trước launch |
| 7. Thanh toán | 🟢 OK | — |
| 8. Cạnh tranh | 🟠 VỪA | 7 — review marketing |
| 9. An ninh mạng | 🟠 VỪA | 8 — RLS audit |
| 10. Trẻ em | 🟠 VỪA | 9 — age gate |
| 11. Dispute | 🟠 VỪA | 10 — contact channel |
| 12. App Store | 🟢 chưa launch | — |

---

## ✅ Action Plan trước khi launch chính thức

### Phase A — Doc + Static (tự làm được, không cần luật sư)
- [x] Memory `legal_compliance_vn.md` (DONE 2026-05-23)
- [x] `docs/COMPLIANCE_CHECKLIST.md` (file này)
- [x] `pages/free-vs-pro.html` (DONE 2026-05-23)
- [ ] `pages/privacy.html` v2 (DOING)
- [ ] `pages/terms.html` v2 SPA fragment (DOING)
- [ ] `pages/contact.html` — kênh khiếu nại
- [ ] Cookie consent banner snippet

### Phase B — Verify (cần thời gian + nguồn)
- [ ] Verify số điều NĐ 38/2021 trên thuvienphapluat.vn
- [ ] Verify NĐ 13/2023 PDPL — cross-border transfer requirements
- [ ] Audit `priceOrig` plans.js — có từng bán giá gốc thật không
- [ ] Audit toàn bộ marketing copy hiện có (`grep` các pattern rủi ro)

### Phase C — Tham vấn luật sư (~1-3tr buổi)
- [ ] Review ToS + Privacy + Refund policy
- [ ] Confirm data sovereignty Supabase USA / R2 Cloudflare có vi phạm NĐ 53/2022 không
- [ ] Confirm age requirement (13/16) phù hợp Luật Trẻ em
- [ ] Confirm wording Hộp Ân Cần không phạm "donation" pháp lý

### Phase D — Code change (Phase 2 monetization)
- [ ] Modal mua: checkbox consent + log version
- [ ] Settings → Huỷ Pro 1-click + Xoá account hard-delete
- [ ] Email reminder auto-renew (7 ngày trước)
- [ ] Age confirmation sign-up
- [ ] AI moderation filter (Phase R/S/Y)

### Phase E — Hành chính (offline)
- [ ] Đăng ký hộ kinh doanh khi doanh thu năm gần 100tr
- [ ] Tích hợp Viettel/Misa eInvoice
- [ ] Setup email support@hanzigenz.com
- [ ] Bảng kê khai thuế VAT 10% monthly

---

## 🔗 Quick links verify pháp luật

- [thuvienphapluat.vn](https://thuvienphapluat.vn) — search VBPL
- [vbpl.vn](https://vbpl.vn) — cổng VBPL chính phủ
- [vncert.vn](https://vncert.vn) — Cục An ninh mạng (khai báo data)
- [Tax.gov.vn](https://thuevietnam.gdt.gov.vn) — Tổng cục Thuế

---

## 📋 Decision log

| Date | Decision |
|---|---|
| 2026-05-23 | Tạo file checklist tổng để track 12 nhóm rủi ro |
| 2026-05-23 | Phase A (static doc) tự làm — Phase B/C cần luật sư verify |
| 2026-05-23 | Priority 1-3: Marketing, ToS/refund, Privacy/cookie. Block launch nếu chưa xong |
