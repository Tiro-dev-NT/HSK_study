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
- ☑ Test cookie banner hiện ra ở first visit — code verify OK (v=1.1 deployed có modal-open check). Cần user smoke-test browser
- ☑ Test 4 route mới: `/privacy`, `/terms`, `/contact`, `/free-vs-pro` — VERIFIED 2026-05-24: 4/4 routes 200 OK, content render đúng (title + h1 khớp). `/privacy.html` + `/terms.html` 301/308 → clean URL
- ☑ Test pricing.html — VERIFIED 2026-05-24: fragment 13.8KB load OK, PricingUI moved to global `js/pricing.js?v=2.3` (Bug #5 fix), Token Shop wrapped `<!-- DISABLED -->`

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

### Wave A — Bé Rồng cơ bản ✅ DONE 2026-05-24

- ☑ Gen **ref sheet Bé Rồng** → `content/assets/output/reference/be-rong-clean-ref.png` (790KB)
- ☑ Outfit 1 — Học sĩ (50🪙) — `outfits-basic/01-hoc-si.png`
- ☑ Outfit 2 — Cử nhân áo dài (100🪙) — `outfits-basic/02-cu-nhan-ao-dai.png`
- ☑ Outfit 3 — Võ sư (150🪙) — `outfits-basic/03-vo-su.png`
- ☑ Outfit 4 — Đầu bếp (150🪙) — `outfits-basic/04-dau-bep.png`
- ☑ Outfit 5 — Du khách (200🪙) — `outfits-basic/05-du-khach.png`
- ☑ Outfit 6 — Nghệ sĩ thư pháp (200🪙) — `outfits-basic/06-nghe-si-thu-phap.png`
- ☑ Outfit 7 — Tiến sĩ trạng nguyên (250🪙) — `outfits-basic/07-tien-si-trang-nguyen.png`
- ☑ Outfit 8 — Thám hiểm gia (300🪙) — `outfits-basic/08-tham-hiem-gia.png`

> Tool: AI Studio Nano Banana (Gemini 2.5 Flash Image), single-chat workflow with universal wrapper prompt.

### Hộp Ân Cần — 12 outfit limited ✅ DONE 2026-05-24

- ☑ Tháng 1 — Hồng Bao Đỏ 🧧 (Tết)
- ☑ Tháng 2 — Mùa Xuân 🌸
- ☑ Tháng 3 — Hiền Triết 📜
- ☑ Tháng 4 — Tảo Mộ 🌿 (Thanh Minh)
- ☑ Tháng 5 — Cử Nhân 🎓
- ☑ Tháng 6 — Hè Tây Hồ 🌊
- ☑ Tháng 7 — Du Khách 🎒
- ☑ Tháng 8 — Áo Hiếu 🪷 (Vu Lan)
- ☑ Tháng 9 — Tể Tướng 🌕 (Trung Thu)
- ☑ Tháng 10 — Trùng Cửu 🍂
- ☑ Tháng 11 — Tuyết Nhân ❄️
- ☑ Tháng 12 — Đại Lễ 🐲 (crown jewel, 1.1MB)

> Tổng 21 file PNG (1 ref + 8 Wave A + 12 Honor) trong `content/assets/output/`

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
- ☑ `js/pricing.js` — **bật thanh toán thật** aiCredit + honor, validSkus, return URL toast — DONE 2026-05-24 (Slice 2, v=2.5)
- ☐ Add modal mua: checkbox consent + log version copy + `consent_at` timestamp DB

### Hộp Ân Cần

- ☑ `pages/honor-hall.html` — Sảnh Vinh Danh (NEW) — DONE 2026-05-24 (UI shell + 12-month grid)
- ☑ `js/honor.js` — logic mua + outfit tháng rotate (NEW) — DONE 2026-05-24 (Honor.init, spotlight, grid render)
- ☑ Outfit picker UI Settings (dùng 21 PNG asset đã có) — DONE 2026-05-24 (Slice 3, branch worktree-wave-a-slice3)
- ☐ Cap 12/năm enforce client-side + hiển thị "Đã mua tháng này" state

### Wave A consumable UI

- ☑ Streak Insurance modal khi mất streak (50🪙, max 2/tháng) — DONE 2026-05-24 (gamification.js)
- ☑ Double XP toggle trước quiz (30🪙/session, max 3/ngày) — DONE 2026-05-24 (quiz.js)
- ☑ Refresh quiz button (10🪙, max 5/session) — DONE 2026-05-24 (quiz.js)
- ☑ Outfit Bé Rồng picker — DONE 2026-05-24 (profile.js)

### AI Credit UI

- ☑ Badge quota header `🔮 1.234 cr` — DONE 2026-05-24 (topbarAICreditBadge, AICredit.fetch() on login, localStorage cache)
- ☑ Cảnh báo low-balance (300/100/0 cr toast) — DONE 2026-05-24 (AICredit._warnLow)
- ☐ Modal AI Credit detail (đủ dùng ~X cuộc Tutor + Y essay)
- ☐ Settings → "Mua thêm Túi Linh Đan" link

### Settings — BVQL TD compliance

- ☑ "Huỷ Pro auto-renew" 1-click button (gọi RPC `cancel_subscription`) — DONE 2026-05-24 (profile.html + profile.js)
- ☑ "Xoá tài khoản" hard-delete — UI+confirm+RPC DONE 2026-05-24 (sql/v9_delete_account.sql + profile.js calls delete_account_cascade RPC)
- ☐ **Chạy sql/v9_delete_account.sql** trên Supabase Dashboard (🔴 chưa chạy)
- ☐ "Xuất dữ liệu của tôi" JSON/CSV
- ☐ "Lưu lịch sử Tutor dài hạn (90 ngày)" toggle opt-in
- ☐ "Quản lý consent cookie" link → trigger `CookieConsent.reset()`

### Sign-up flow — Trẻ em compliance

- ☑ Age confirmation checkbox: "Tôi từ 16 tuổi trở lên" — DONE 2026-05-24 (profile settings, hsk_age_confirmed localStorage)
- ☑ Lưu `age_confirmed_at` timestamp — DONE 2026-05-24 (hsk_age_confirmed = ISO timestamp)

---

## 🗄️ Supabase backend

> File master: [`docs/SUPABASE_OPERATIONS.md`](SUPABASE_OPERATIONS.md)

### Schema + RPC

- ☐ Backup manual Supabase Database
- ☐ Chạy `sql/audit_rls.sql` — verify RLS
- ☐ Chạy `sql/setup_rls_policies.sql` — setup RLS + 3 bảng + 2 RPC
- ☐ Verify lại bằng audit script
- ☐ Test exploitation F12 console

### Edge Function update ✅ DONE 2026-05-24 (Slice 2)

- ☑ `create-payment` — SKU whitelist server-side: 5 sub + aipack_so/trung/cao + honor_pack + price map (không tin client)
- ☑ `create-payment` bump giá `lifetime` → 2.49M (server-side price map)
- ☑ `payos-webhook` — HMAC verify + idempotency guard + dispatch: subscription → grant_subscription_server + token; aipack → grant_ai_credit; honor → grant_honor_outfit + 1000 token
- ☑ **Deploy Edge Functions** — DONE 2026-05-24: `supabase functions deploy create-payment payos-webhook`

### RPC — sql/v8_monetization_v2_slice2.sql ✅ DEPLOYED 2026-05-24

- ☑ `grant_ai_credit(user_id, amount, reason)` — upsert balance + ledger
- ☑ `grant_honor_outfit(user_id, month_year, outfit_id, order_id, amount_paid)` — insert + check cap 12/năm
- ☑ `grant_subscription_server(user_id, duration, order_code)` — webhook grant Pro (no admin JWT)
- ☑ `cancel_subscription()` — user self-cancel
- ☑ `reset_monthly_allowance()` — cron reset daily_used_today
- ☑ Bảng mới: `ai_credit_ledger` + `user_honor_purchases` (+ RLS)
- ☑ **SQL chạy xong** trên Supabase Dashboard — DONE 2026-05-24

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
- ☑ **Section Hộp Ân Cần** trong pricing.html — DONE 2026-05-24 (Slice 1)
- ☑ **Section AI Credit Pack** trong pricing.html — DONE 2026-05-24 (Slice 1)
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

- ☑ Page `/learn-method` — 3 section: SRS principles, daily tip (30 tips), weakness analysis — DONE 2026-05-24
- ☑ Nav link "Cách học" trong secondary nav sidebar — DONE 2026-05-24
- ☐ Asset: hình minh hoạ bài giảng (Midjourney + Phase O+ pre-gen)
- ☐ "Ôn ngay điểm yếu" → full quiz session với word override (cần Quiz nhận sessionStorage override)

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
| 2026-05-24 | Pre-deploy hotfix lên prod (commits ca7914b, 48b1ba0, 5713531, eedf943, f5483c4): legal pages, cookie consent, Wave 2 publish, `_redirects` SPA-only, terms.html root removed, PricingUI → global js/pricing.js v=2.3 |
| 2026-05-24 | Production verified clean — 4 legal routes 200, 11/11 file 500-prone giờ 200, PricingUI global confirmed |
| 2026-05-24 | Asset prompts split → `content/assets/output/{reference,outfits-basic,outfits-honor,ambient-themes}/*.md` (29 prompt + 9 README) — Banana Pro primary tool |
| 2026-05-24 | **Wave A + Hộp Ân Cần ✅ DONE** — 21/21 PNG file gen + saved (1 ref + 8 outfit Wave A + 12 outfit Honor) bằng AI Studio Nano Banana single-chat workflow |
| 2026-05-24 | **Phase 2 Monetization v2 Slice 1 ✅ MERGED + DEPLOYED** — 6 commits merged main `5cb56d3`, deployed Cloudflare: Honor Hall `/honor-hall` page + Hộp Ân Cần + AI Credit grid + pricing.css v=2.0 cache bust. |
| 2026-05-24 | **Phase 2 Monetization v2 Slice 2 ✅ FULLY DEPLOYED** — commits `4b403b4`+`b2d93fe`, SQL v8 chạy xong trên Supabase, Edge Functions deployed. Thanh toán Túi Linh Đan AI + Hộp Ân Cần live. |
| 2026-05-24 | **Monetization v2 Slice 3 + Phase Q MVP ✅ MERGED** — commits `21841df`+`bbc9741`+`14b6ed3`: AI Credit badge (🔮 topbar, low-balance toast), delete_account_cascade RPC (sql/v9 — chờ user chạy Dashboard), Phase Q /learn-method (SRS principles + daily tip + weakness analysis). Phase Q "Ôn ngay điểm yếu" + Quiz override còn dở. |
