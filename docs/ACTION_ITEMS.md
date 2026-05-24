# ✅ Hanzi Genz — Master Action Items Checklist

> **Single source-of-truth** cho mọi việc còn dang dở. Mỗi session start, Claude check file này → nhắc user việc chưa tích.
> **Last updated:** 2026-05-24
> **Convention:** ☐ chưa làm · ☑ đã làm · ⏸ defer · ❌ huỷ · ⚠️ blocked
>
> **Cập nhật file này khi:** hoàn thành 1 việc / phát hiện việc mới / quyết định defer/huỷ.

---

## 🚨 CRITICAL — block deploy / launch

### Trước deploy lần kế

- ☑ **Comment out Token Shop section trong `pages/pricing.html`** — DONE 2026-05-24 (wrapped `<!-- DISABLED -->`, re-enable sau Wave A)
- ☑ Verify `priceOrig` toàn bộ plan honest (DONE 2026-05-23):
  - ☑ Lifetime → `priceOrig: null`
  - ☑ Yearly → `priceOrig: null` (chưa từng bán 900k)
  - ☑ Quarterly → `priceOrig: null` (chưa từng bán 225k)
  - ☑ Semi → `priceOrig: null` (chưa từng bán 450k)
- ☐ Test cookie banner hiện ra ở first visit (xoá localStorage `hsk_cookie_consent` rồi reload)
- ☐ Test 4 route mới: `/privacy`, `/terms`, `/contact`, `/free-vs-pro` render đẹp
- ☐ Test pricing.html mới (per-month + perDay messaging + Yearly card render)

### Trước launch chính thức (rộng rãi)

- ☑ **Supabase RLS audit** — DONE 2026-05-24: 9/9 bảng RLS=true, 0 disabled. user_token_balance/ledger SELECT-only + grant_tokens RPC (SECURITY DEFINER) = best practice ✅
- ☑ Nếu thiếu: chạy `sql/setup_rls_policies.sql` — KHÔNG CẦN, audit pass toàn bộ ✅
- ☐ Test exploitation F12 console (3 query test) — xem `SUPABASE_OPERATIONS.md` section 1.5
- ☐ Setup email `support@hanzigenz.com` (Cloudflare Email Routing free)
- ☐ Setup Telegram bot `@hanzigenzbot`
- ☐ Tham vấn luật sư VN 1 buổi (1-3tr) — verify số điều luật + voice biometric
- ☐ Verify số điều NĐ 38/2021 + NĐ 13/2023 + Luật BVQL TD 2023 trên thuvienphapluat.vn
- ☐ Test toàn flow: refund qua PayOS + delete account hard-delete

---

## 🎨 Asset generation (parallel với code work)

> File master: [`content/assets/PROMPTS.md`](../content/assets/PROMPTS.md)

### Wave A — Bé Rồng cơ bản

- ☐ Gen **ref sheet Bé Rồng** chuẩn → `content/assets/output/reference/be-rong-ref.png`
  - **BLOCKER:** ref sheet lock với `--cref` cho mọi prompt sau
- ☐ Outfit 1 — Học sĩ (50🪙)
- ☐ Outfit 2 — Cử nhân áo dài (100🪙)
- ☐ Outfit 3 — Võ sư (150🪙)
- ☐ Outfit 4 — Đầu bếp (150🪙)
- ☐ Outfit 5 — Du khách (200🪙)
- ☐ Outfit 6 — Nghệ sĩ thư pháp (200🪙)
- ☐ Outfit 7 — Tiến sĩ trạng nguyên (250🪙)
- ☐ Outfit 8 — Thám hiểm gia (300🪙)

### Hộp Ân Cần — 12 outfit limited

- ☐ Tháng 1 — Hồng Bao Đỏ 🧧
- ☐ Tháng 2 — Mùa Xuân 🌸
- ☐ Tháng 3 — Hiền Triết 📜
- ☐ Tháng 4 — Tảo Mộ 🌿
- ☐ Tháng 5 — Cử Nhân 🎓
- ☐ Tháng 6 — Hè Tây Hồ 🌊
- ☐ Tháng 7 — Du Khách 🎒
- ☐ Tháng 8 — Áo Hiếu 🪷
- ☐ Tháng 9 — Tể Tướng 🌕
- ☐ Tháng 10 — Trùng Cửu 🍂
- ☐ Tháng 11 — Tuyết Nhân ❄️
- ☐ Tháng 12 — Đại Lễ 🐲

### Wave B — Ambient theme (8 scene)

- ☐ Thư phòng truyền thống TQ (FREE)
- ☐ Quán cà phê Sài Gòn (FREE)
- ☐ Núi tuyết Hoàng Sơn (200🪙)
- ☐ Vườn Tô Châu (200🪙)
- ☐ Tàu cao tốc đêm (250🪙)
- ☐ Quán trà Trùng Khánh đêm (250🪙)
- ☐ Bến cảng Thượng Hải 1930 (300🪙)
- ☐ Đỉnh Phú Sĩ bình minh (300🪙)

### Wave D — Pet companion (đợi sau)

- ⏸ 5 pet thường (Mèo, Hạc, Cá Chép, Panda, Thỏ Ngọc) × 5 state
- ⏸ 3 pet seasonal (Lân Tết, Thỏ Trung Thu, Cá Vàng Hè)

### Wave C — Vườn Hán Tự (đợi sau)

- ⏸ 8-10 cây skin (Tùng, Trúc, Mai, Đào, Anh đào, Bonsai, Sen, ...)
- ⏸ Decor vườn (đèn lồng, hồ koi, cầu gỗ, tảng đá)

### Wave E — Phố Cổ Trường An

- ⏸ Defer cho đến khi >10k user

---

## 💻 Phase 2 — Monetization code (worktree riêng)

> Recommend tạo branch `claude/monetization-v2-code` worktree riêng

### Refactor pricing flow

- ☑ `js/pricing.js` — refactor `openTokenPurchase` → `openHonorPurchase` + `openAICreditPurchase` — DONE 2026-05-24 (UI shell, payment disabled until backend SKU slice)
- ☑ `pages/pricing.html` — xoá section Token Shop, thêm section "💌 Ủng hộ" + grid AI Credit Pack — DONE 2026-05-24
- ☐ Add modal mua: checkbox consent + log version copy + `consent_at` timestamp DB

### Hộp Ân Cần

- ☑ `pages/honor-hall.html` — Sảnh Vinh Danh (NEW) — DONE 2026-05-24 (UI shell + 12-month grid)
- ☑ `js/honor.js` — logic mua + outfit tháng rotate (NEW) — DONE 2026-05-24 (Honor.init, spotlight, grid render)
- ☐ Outfit picker UI Settings
- ☐ Cap 12/năm enforce client-side (server cũng enforce qua RPC)

### Wave A consumable UI

- ☐ Streak Insurance modal khi mất streak (50🪙, max 2/tháng) — `js/gamification.js`
- ☐ Double XP toggle trước quiz (30🪙/session, max 3/ngày) — `js/quiz.js`, `js/session.js`
- ☐ Refresh quiz button (10🪙, max 5/session) — `js/quiz.js`
- ☐ Outfit Bé Rồng picker — `js/profile.js`

### AI Credit UI

- ☐ Badge quota header `🔮 1.234 cr`
- ☐ Modal AI Credit detail (đủ dùng ~X cuộc Tutor + Y essay)
- ☐ Cảnh báo 20% / 5% / 0% credit
- ☐ Settings → "Mua thêm Túi Linh Đan" link

### Settings — BVQL TD compliance

- ☐ "Huỷ Pro auto-renew" 1-click button (gọi RPC `cancel_subscription`)
- ☐ "Xoá tài khoản" hard-delete (gọi RPC `delete_account_cascade`)
- ☐ "Xuất dữ liệu của tôi" JSON/CSV
- ☐ "Lưu lịch sử Tutor dài hạn (90 ngày)" toggle opt-in
- ☐ "Quản lý consent cookie" link → trigger `CookieConsent.reset()`

### Sign-up flow — Trẻ em compliance

- ☐ Age confirmation checkbox: "Tôi từ 16 tuổi trở lên hoặc có sự đồng ý của cha mẹ"
- ☐ Lưu `age_confirmed_at` timestamp

---

## 🗄️ Supabase backend

> File master: [`docs/SUPABASE_OPERATIONS.md`](SUPABASE_OPERATIONS.md)

### Schema + RPC

- ☐ Backup manual Supabase Database
- ☐ Chạy `sql/audit_rls.sql` — verify RLS
- ☐ Chạy `sql/setup_rls_policies.sql` — setup RLS + 3 bảng + 2 RPC
- ☐ Verify lại bằng audit script
- ☐ Test exploitation F12 console

### Edge Function update

- ☐ `create-payment` xoá whitelist SKU `pack100/500/1200/3000`
- ☐ `create-payment` thêm `aipack_so/trung/cao` + `honor_pack`
- ☐ `create-payment` bump giá `lifetime` 1.49M → 2.49M
- ☐ `payos-webhook` handle SKU mới (grant AI credit + insert honor + grant token)
- ☐ Deploy: `supabase functions deploy create-payment payos-webhook`

### RPC còn thiếu (Phase 2)

- ☐ `grant_ai_credit(user_id, amount, reason)` — webhook nạp credit
- ☐ `grant_token(user_id, amount, reason)` — webhook nạp token
- ☐ `cancel_subscription()` — Settings huỷ Pro
- ☐ `check_honor_cap(user_id)` — verify 12/năm trước thanh toán
- ☐ `reset_monthly_allowance()` — cron daily reset

### Performance + Maintenance

- ☐ Indexes performance (xem SUPABASE_OPERATIONS section 5)
- ☐ Cron retention auto-cleanup (AI chat 1 năm, voice 24h, etc.)
- ☐ Backup retention 30 ngày (upgrade Pro tier khi >5000 user)

---

## 🛡️ Compliance + Legal

> File master: [`docs/COMPLIANCE_CHECKLIST.md`](COMPLIANCE_CHECKLIST.md)

### Pre-launch compliance

- ☐ Verify số điều luật trên thuvienphapluat.vn (NĐ 38/2021, NĐ 13/2023, Luật BVQL TD 2023)
- ☐ Tham vấn luật sư 1 buổi (1-3tr)
- ☐ Audit content 10 file remaining (hsk3_lvl1/2/3/6/9, TSV files) — chính trị/nhạy cảm
- ☐ XSS audit `innerHTML` toàn project
- ☐ Cài git-secrets pre-commit hook (`git secrets --add 'sk-[a-zA-Z0-9]+'`)

### Hành chính (offline)

- ☐ Track doanh thu monthly → warning khi gần 100tr/năm
- ☐ Đăng ký hộ kinh doanh khi sắp đạt ngưỡng
- ☐ Setup Viettel Invoice / Misa eInvoice API
- ☐ Update pricing display: "Đã bao gồm VAT 10%" footer (đã có ở pricing.html sau session)
- ☐ Backup transaction PayOS hàng tháng export CSV

### Phase Y voice biometric (pre-Phase Y code)

- ☐ Consent modal explicit design (xem HONOR_PACK_DESIGN.md pattern)
- ☐ Audio retention cron 24h auto-delete
- ☐ Settings → "Xoá hết voice ngay" button
- ☐ Privacy section 1.6 đã có — verify update khi gần launch
- ☐ Tham vấn luật sư về biometric (1 buổi riêng)

---

## 💰 Pricing marketing (Combo A — LOCKED 2026-05-23)

> Source-of-truth: [`docs/PRICING_STRATEGY.md`](PRICING_STRATEGY.md)

### Đã làm
- ☑ Bỏ `priceOrig` fake mọi tier (2026-05-23)
- ☑ Thêm `perDay` field cho marketing (`plans.js`)
- ☑ Thêm `compareNote` rõ ràng "so với Monthly"
- ☑ Save chip đổi "-X%" → "Rẻ hơn X%/tháng so Monthly"
- ☑ `pages/pricing.html` bỏ `pc-price-original`, bump Lifetime 2.49M
- ☑ Add Yearly card vào pricing.html compact options
- ☑ Hero pricing daily messaging "~1.400đ/ngày — rẻ hơn ly trà đá"

### Còn làm
- ☐ **Update `landing.html` headline** — daily messaging thay feature messaging
- ☐ **Email marketing copy** — tagline "Yearly ~1.400đ/ngày"
- ☐ **TikTok/Reels script templates** (xem PRICING_STRATEGY.md Layer 2)
- ☐ Setup table `pricing_history` Supabase (log mọi thay đổi giá có timestamp)
- ☐ Code launch promo banner (countdown + log) — khi public launch
- ☐ Code referral flow + bonus credit logic
- ☐ Settings → "Quản lý gói" + grandfather note (hiển thị giá đã trả)

### Defer (Layer 5 — tương lai)
- ⏸ Plan tăng giá Q3 2027 — cần ≥5.000 paying user trước
- ⏸ Email campaign "Lock giá cũ" 30 ngày trước tăng giá
- ⏸ A/B test landing hero (daily vs feature)

### Design redesign cần làm (Phase 2 design)

- ☐ **Pricing page Featured card mismatch:** `plans.js` lock Yearly = featured, NHƯNG `pricing.html` show **Semi 6m** làm featured card. Yearly bị giấu trong compact → underexposed.
  - **Fix proposal:** swap layout — Yearly thành Featured big card (với badge "⭐ Phổ biến nhất" + daily highlight ☕), Semi xuống compact hoặc giữ right column
  - Effort: 30-60 phút redesign HTML + có thể CSS tinh chỉnh
- ☐ **Thiếu section Hộp Ân Cần** trong pricing.html (Wave 2 monetization code)
- ☐ **Thiếu section AI Credit Pack** trong pricing.html (Wave 2)
- ☐ **Z-index map standardize** — thêm vào `variables.css`:
  ```
  --z-content: 1 · --z-sticky: 100 · --z-overlay: 1000
  --z-modal: 2000 · --z-toast: 8500 · --z-consent: 10000
  ```
- ☑ **Cookie banner edge case** — DONE 2026-05-24: thêm modal-open check trong `initBanner()`, defer thêm 3s nếu modal đang visible. Bump `cookie-consent.js?v=1.1`
- ☐ **CSS dead code cleanup** — `.pc-price-original` không còn dùng. Giữ làm BC nếu Layer 5 (tăng giá có log) cần. Hoặc xoá nếu chắc chắn không dùng.

### Design prompts (`docs/design/`) — Tier 10 NEW (2026-05-23)

> 9 design prompts mới (43-51) cho Monetization v2 + Legal. Đã có folder + prompt.md.
> Source-of-truth INDEX: [`docs/design/INDEX.md`](design/INDEX.md)

**Active prompts (làm sớm — Tuần 4-8):**
- ☐ **08-pricing-page** (REWRITTEN) — Pricing v3 Yearly featured + daily ☕ + AI Credit + Hộp Ân Cần section
- ☐ **43-honor-pack** — Hộp Ân Cần modal + Sảnh Vinh Danh page (tier Đồng/Bạc/Kim/Hoa Đăng)
- ☐ **44-ai-credit-pack** — 5 compositions (pricing section + modal mua + badge quota + chi tiết + cảnh báo 20%/5%/0%)
- ☐ **45-legal-pages** — 4 page legal (Privacy + Terms + Contact + Free-vs-Pro) — content đã có, cần polish design
- ☐ **46-cookie-consent** — Banner first-visit + customize modal (NĐ 13/2023 PDPL)
- ☐ **47-be-rong-outfit-picker** — Grid outfit + preview Bé Rồng + unlock state
- ☐ **48-wave-a-consumable-modals** — Streak Insurance + Double XP toggle + Refresh quiz + insufficient state
- ☐ **41-kho-bau-shop** (REWRITTEN) — anti-toxic alignment, KHÔNG loot box, sync Wave A-E

**Defer prompts (Wave B-E — chưa làm):**
- ⏸ **49-pomodoro-ambient** — Wave B (placeholder created)
- ⏸ **50-vuon-han-tu** — Wave C (placeholder created)
- ⏸ **51-pet-companion** — Wave D (placeholder created)

### TUYỆT ĐỐI KHÔNG
- ❌ Reintroduce `priceOrig` fake (đã chốt anti-pattern)
- ❌ Fake urgency "Còn 2 chỗ!"
- ❌ Pre-checked subscribe
- ❌ Flash sale 24h thường xuyên
- ❌ Email spam marketing

---

## 🚀 Roadmap mục tiêu xa

### Phase Q (Priority 1 sau Phase N) — Learning Method Hub

- ☐ Onboarding "Cách học hiệu quả"
- ☐ Tips daily / weekly
- ☐ Analytics weak point
- ☐ Asset: hình minh hoạ bài giảng (Midjourney + Phase O+ pre-gen)

### Phase O+ — Visual Vocab (NEW)

- ☐ 7000 ảnh minh hoạ HSK 1-6 (pre-gen Midjourney batch)
- ☐ 214 radical illustrations
- ☐ R2 storage + lazy load
- ☐ Cost ~$50-200 + 2-4 tuần

### Phase P — Story Mai

- ☐ Character ref sheet Mai (Midjourney `--cref`)
- ☐ 3 bài mẫu Option D (validate cost + time + comprehension)
- ☐ Pipeline: image + ElevenLabs + Azure Xiaoxiao + Remotion
- ☐ KHÔNG: AI talking-head + Sora full-video

### Phase R/S/Y — AI features

- ☐ `js/ai-client.js` router + fallback hard-code
- ☐ AI Tutor chat (Phase R)
- ☐ AI Pronunciation analyze (Phase R)
- ☐ AI Writing Tutor essay grading (Phase S)
- ☐ AI HSKK Speaking + voice 24h retention (Phase Y)

### Phase H — PWA + Vite migration

- ☐ Migrate vanilla → Vite (cuối 2026)
- ☐ Vite-PWA plugin
- ☐ Service Worker cache app shell
- ☐ IndexedDB offline mode

### Phase J — Tauri Desktop (sau PWA)

- ☐ Setup Tauri build pipeline (Vite as bundler)
- ☐ Auto-update mechanism
- ☐ Code signing (defer cost)

### Phase I — Capacitor Mobile (cuối cùng)

- ☐ Setup Capacitor + Vite
- ☐ Native plugins (mic for HSKK, camera optional)
- ☐ App Store + Google Play submission

---

## ⏸ DEFERRED (note, không làm sớm)

- ⏸ 2FA login Supabase — defer đến khi >10k user hoặc khiếu nại
- ⏸ Migrate VPS VN — KHÔNG cần ở scale hiện tại
- ⏸ Email service backend (Resend/SendGrid) cho auto-renew reminder — Phase 2
- ⏸ Phase W Immersive Learning
- ⏸ Phase V Social & Competitive

---

## ❌ HUỶ (decision log)

- ❌ Token Pack VND truyền thống (`pack100/500/1200/3000`) — bỏ 2026-05-23, thay Hộp Ân Cần
- ❌ AI talking-head (HeyGen/Synthesia) cho Phase P — miệng tiếng Trung sai tone
- ❌ Sora/Veo full-video cho Phase P — character consistency bể, cost cao
- ❌ Token mua AI — phá biên cost API (chốt 2026-05-21)
- ❌ Unlimited AI flat selling — phá margin (chốt 2026-05-21)
- ❌ Wave A consumable "Skip flashcard 3🪙" — pay-to-skip risk

---

## 🔄 Cách session SAU dùng file này

1. **Đầu mỗi session** Claude đọc `docs/ACTION_ITEMS.md` (đã ref trong CLAUDE.md)
2. Tìm item ☐ chưa tích → nhắc user "còn các item chưa làm: X, Y, Z"
3. User quyết định: làm gì tiếp / defer cái nào
4. Khi xong việc → update ☐ → ☑ + ngày hoàn thành
5. Phát hiện việc mới → thêm dòng ☐ mới ở section phù hợp

### Pattern update example

```diff
- ☐ Outfit 1 — Học sĩ (50🪙)
+ ☑ Outfit 1 — Học sĩ (50🪙) — DONE 2026-06-15
```

---

## 📝 Decision log

| Date | Decision |
|---|---|
| 2026-05-23 | Tạo `ACTION_ITEMS.md` làm single source-of-truth checklist |
| 2026-05-23 | CLAUDE.md ref file này để session sau auto-check |
| 2026-05-23 | Pattern checkbox ☐/☑/⏸/❌/⚠️ |
