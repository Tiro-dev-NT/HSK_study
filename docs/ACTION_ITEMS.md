# Action Items

## 🔒 Security — Escape user content TRƯỚC khi mở Phase V (Cộng đồng)

> **Lý do:** App render nhiều bằng `innerHTML` + nối chuỗi. Với nội dung biên tập sẵn
> (COURSE_DATA, vocab, grammar) thì an toàn vì ta kiểm soát. NHƯNG Phase V render nội
> dung do **user khác** nhập → nếu dùng `innerHTML` chuỗi thô → **stored XSS** →
> kẻ tấn công đọc `localStorage` lấy session token trong `hsk_user_cache` → chiếm tài khoản.

- ☐ **BLOCKER cho Phase V** — Trước khi build bất kỳ feature nào render nội dung user
  (V2 Sảnh Trà chat · V3 Lưu Ý Hay mnemonics · V4 Tủ Sách deck marketplace ·
  Q3.7 Trang Tri Ân feedback wall): viết helper `escapeHtml(str)` và dùng cho MỌI
  field do user nhập, hoặc render bằng `textContent` thay vì `innerHTML`.
- ☐ Audit nhanh các nơi đã nhận input user hiện tại (feedback form, deck name, tên hiển thị)
  xem có render lại bằng `innerHTML` ở đâu không.
- 📌 Note: localStorage tự thân không "bị hack" cho Pro/tiền (đã enforce server-side:
  `user_subscriptions`, PayOS webhook, `game_sessions`, AI credit RPC). Rủi ro DUY NHẤT
  đáng kể là XSS → trộm session. → escape user content là việc bắt buộc trước Phase V.

---

## 📖 Mai Curriculum — Giáo trình chính (Master Plan CHỐT 2026-05-29)

> Chi tiết đầy đủ: `docs/implementation_plan.md` → "Mai Curriculum — MASTER PLAN".
> Định vị: giáo trình CHÍNH, phủ 100% wordlist/cấp, visual-novel + audio per-voice.
> Baseline: HSK 1 mới phủ 187/510 từ (36.7%) → cần coverage-driven, không viết tự do.

**Mô hình phủ phân tầng:** ~15-18 bài core (visual-novel đầy đủ, từ tần suất cao) + ~8-12 đọc thêm (nhẹ, phủ nốt → 100%). Chia bằng frequency ranking.

**Trình tự PROTOTYPE-FIRST:**
- ☑ **B0 — Bài 1 prototype** DONE 2026-05-29: `course.js` v1.3 — visual-novel renderer (`_renderDialogueVN`): stage gradient + cast row (active/inactive/speaking pulse T1) + scene-tag + narrator-card + dlg box (speaker chip màu + pinyin toggle + hanzi 1.85rem + nghĩa). VN_CHARACTERS map (narrator/laoli/mai/xiaomei), `_vnTts` per-voice pitch/rate + fallback Web Speech. Data: `course-lessons.js` v1.1 Bài 1 — 2 narrator steps + `cast`/`scene` cho 14 dialogue steps. Fallback emoji onerror (laoli/xiaomei chưa có ảnh). CSS: `course.css` v1.1 — `.cs-vn-*` classes.
- ☑ **B1-design — Style guide art DONE 2026-05-29**: `content/curriculum/mai-art-style-guide.md` — 4 phần: style guide (anchor Mai ảnh), prompt 3 nhân vật × (character sheet + 6 expr), prompt classroom bg, output spec + pipeline (paths khớp VN_CHARACTERS). Chờ user gen ảnh qua Nano Banana Pro + process cwebp → `assets/mai/cast/` + `assets/mai/scenes/`.
- ☑ **B1-mapping — Mapping 510 từ HSK 1 DONE 2026-05-29**: `scripts/mai-hsk1-coverage.js` → `content/curriculum/mai-hsk1-coverage-map.md`. 12 bài cũ phủ 187/510 (giữ nguyên word assignment), 18 bài mới (Bài 13–30) phủ nốt 323 từ. Phân tầng: 21 CORE (12 truyện + 9 mới: động từ/từ chức năng/thời gian/đại từ-số/người thân) + 9 ĐỌC THÊM (địa điểm/tính từ/đồ vật/trường lớp/xã giao/giao thông+tail). Verify script: **510/510, mỗi từ đúng 1 lần, không thiếu**. Bảng [Bài|tầng|chủ đề|từ bắt buộc] là input cho B2 viết thoại.
- 🟡 **B2 — Sản xuất trọn HSK 1**: content-gen agent (Opus + **prompt caching**) viết thoại bám wordlist · asset Nano Banana Pro (sprite tách nền + bg, KHÔNG nướng chữ) qua `D:/asset-gen-agent/` · audio Edge TTS per-voice (skip-if-exists) · verify coverage 100%.
  - ☑ **B2-text — Viết trọn 30 bài thoại DONE 2026-05-30**: `js/data/course-lessons.js` v1.3 — thêm Bài 14–30 (17 bài: 14-21 CORE full visual-novel + checkpoint giữa bài + workbook 3 mức; 22-30 ĐỌC THÊM gọn ~8-9 step). Verify coverage script: **Bài 14-30 ALL PASS, 305 từ, mỗi từ phủ đủ thoại+tag+vocab**. Cùng dàn cast (narrator/mai/laoli/xiaomei), bg dùng 8 scene có sẵn, expression Mai hợp lệ. HSK 1 nay phủ **510/510 = 100%** (Bài 1-13 cũ + 14-30 mới). `index.html` bump `course-lessons.js?v=1.3`. ⚠️ Bài 1-12 (truyện cũ) chưa có mảng `vocab`/tag chuẩn → ngoài phạm vi checker strict (giữ nguyên theo yêu cầu).
  - ☐ **B2-asset** — sprite nhân vật + bg Nano Banana Pro (đã có Mai expressions + 8 scenes + cast laoli/xiaomei trong git staged).
  - ☑ **B2-audio DONE 2026-05-30**: `scripts/mai-tts-gen.py` — parse COURSE_DATA qua Node eval, gen 317 MP3 vào `assets/mai/audio/L{id}_{stepIdx}.mp3` (317 files, 5.9 MB). Voice map: mai→XiaoyiNeural · laoli→YunjianNeural(-8%) · xiaomei→XiaoxiaoNeural(+8%, XiaohanNeural đã bị remove khỏi Edge TTS service) · class→XiaoxiaoNeural · narrator→YunxiNeural. Skip 2 narrator VN-text (Bài 1 step 0/8). `js/course.js` v1.6: `_vnTts` dùng `new Audio(src).play()` → fallback Web Speech (non-narrator); narrator VN-text fallback silent. Auto-play narrator bật lại (bỏ `!isNarrator` guard). Verify: L1_9/L13_0/L13_1 → 200 OK, 0 console errors.
- ☐ **B3 — Ship HSK 1 flagship** → feedback. Audio/video scale → Cloudflare R2 / Supabase Storage.
- ☐ **B4 — Scale HSK 2+** bằng đúng pipeline.

**B5 — Engagement / chống chán (CHỐT 2026-05-30)** — lộ trình tuyến tính KHÔNG phải nguyên nhân chán; chán đến từ *mỗi bài cùng khuôn + bấm "Tiếp" thụ động*. Nguyên tắc: làm đúng 2 đòn bẩy cốt lõi, KHÔNG nhồi đủ 4 cơ chế (over-engineer).
- ☑ **① Choice step (ƯU TIÊN)** — DONE 2026-05-30: renderer `choice` (`js/course.js` v1.8) + content nhân rộng. **Bài 1-21 CORE đều có choice** (22 choice: Bài 19+20 có 2, còn lại 1 mỗi bài); distractor đa dạng (sai từ/lượng từ/trật tự/ngữ cảnh/hướng/vai), feedback từng đáp án, từ trong wordlist của bài. CONVERGENT (1 mạch, không rẽ nhánh), coverage 510/510 vẫn PASS. Kèm fix audio keying: đổi tên file audio theo **content-hash slug** (`L{id}_{djb2(speaker|text)}.mp3`) thay vì index → chèn choice không phát nhầm tiếng (`Course._audioSlug` ⇄ `scripts/mai-tts-gen.py slug_for`, 317 file regen). Bài 22-30 ĐỌC THÊM: chưa thêm choice (tùy chọn).
- ☐ **③ "Hôm nay" trộn hoạt động (RẺ)** — `js/learn-hub.js` section "Hôm nay" = bài mới + ôn SRS due + 1 game/daily. Định tuyến lại sang tính năng có sẵn, không build mới. Lo phần **nhớ lâu** (SRS = cơ chế retention mạnh nhất).
- 🟢 **④ Cliffhanger + cột mốc** — LỒNG gần như miễn phí: Opus thêm hook cuối mỗi bài khi viết content; cột mốc tận dụng gamification có sẵn (XP/streak/outfit Bé Rồng). KHÔNG build riêng.
- ⏸ **② Đa dạng cấu trúc bài** — HOÃN/đo: phần lớn bị ① hấp thụ (có choice là bài đã tự khác nhau). Chỉ làm chọn lọc (vài bài đặc biệt) NẾU sau ship B3 vẫn thấy đơn điệu — không làm đại trà, không làm trước feedback.
- **Thứ tự:** ship ① + ③ → đo phản hồi thật → mới quyết ②. Model: Sonnet (renderer+wiring+③) · Opus (viết choice content nhân rộng). Prompt handoff đã soạn.

**B5 — Engagement / chống chán (CHỐT 2026-05-30)** — lộ trình tuyến tính KHÔNG phải nguyên nhân chán; chán đến từ *mỗi bài cùng khuôn + bấm "Tiếp" thụ động*. Nguyên tắc: làm đúng 2 đòn bẩy cốt lõi, không nhồi đủ 4 cơ chế (over-engineer).
- ☑ **① Choice step (ƯU TIÊN)** — DONE 2026-05-30: renderer `choice` (`js/course.js` v1.8) + content nhân rộng. **Bài 1-21 CORE đều có choice** (22 choice: Bài 19+20 có 2, còn lại 1 mỗi bài); distractor đa dạng (sai từ/lượng từ/trật tự/ngữ cảnh/hướng/vai), feedback từng đáp án, từ trong wordlist của bài. CONVERGENT (1 mạch, không rẽ nhánh), coverage 510/510 vẫn PASS. Kèm fix audio keying: đổi tên file audio theo **content-hash slug** (`L{id}_{djb2(speaker|text)}.mp3`) thay vì index → chèn choice không phát nhầm tiếng (`Course._audioSlug` ⇄ `scripts/mai-tts-gen.py slug_for`, 317 file regen). Bài 22-30 ĐỌC THÊM: chưa thêm choice (tùy chọn).
- ☐ **③ "Hôm nay" trộn hoạt động (RẺ)** — `js/learn-hub.js` section "Hôm nay" = bài mới + ôn SRS due + 1 game/daily. Định tuyến lại sang tính năng có sẵn, không build mới. Lo phần **nhớ lâu** (SRS = cơ chế retention mạnh nhất).
- 🟢 **④ Cliffhanger + cột mốc** — LỒNG gần như miễn phí: Opus thêm hook cuối mỗi bài khi viết content; cột mốc tận dụng gamification có sẵn (XP/streak/outfit Bé Rồng). KHÔNG build riêng.
- ⏸ **② Đa dạng cấu trúc bài** — HOÃN/đo: phần lớn bị ① hấp thụ (có choice là bài đã tự khác nhau). Chỉ làm chọn lọc (vài bài đặc biệt) NẾU sau ship B3 vẫn thấy đơn điệu — không làm đại trà, không làm trước feedback.
- **Thứ tự:** ship ① + ③ → đo phản hồi thật → mới quyết ②. Model: Sonnet (renderer+wiring+③) · Opus (viết choice content nhân rộng). Prompt handoff đã soạn.

**Voice map (per-character TTS):** `mai`→XiaoyiNeural · `laoli`→YunjianNeural · `xiaomei`→XiaohanNeural · `class`→XiaoxiaoNeural.

**Animation (CHỐT):** T1 ảnh tĩnh + CSS (breathing/bounce/speaking pulse) = chuẩn mọi bài · T2 video loop idle (Flow/Whisk) = polish nhân vật chính · ❌ T3 cartoon full lip-sync (bỏ). Thoại luôn TTS riêng, không dùng audio video.

**Công cụ:** Claude Code (Sonnet code / Opus content+prompt caching) · Nano Banana Pro (hình) · Flow/Whisk (video loop, Gemini Pro) · Edge TTS (audio, free) · cwebp + node (pipeline/verify).

---

## 🖼️ Asset Pipeline — Production Deploy Pattern

### Fix urgent (block deploy outfit picker)

- ☑ DONE 2026-05-26 — Process Wave A outfit PNGs to production WebP assets in `assets/outfits/basic/`.
- ☑ DONE 2026-05-26 — Process Hộp Ân Cần outfit PNGs to production WebP assets in `assets/outfits/honor/`.
- ☑ DONE 2026-05-26 — Update outfit picker data from `.png` to `.webp` in `js/profile.js`.
- ☑ DONE 2026-05-26 — Update Hộp Ân Cần image base path from gitignored `content/` source to committed `assets/outfits/honor/` in `js/honor.js`.

### Decision log

- 2026-05-26 — Outfit assets follow the locked production pipeline: `content/assets/output/{wave}/*.png` remains gitignored source input; committed Cloudflare-served output lives under `assets/outfits/{basic,honor}/*.webp` as 200×200 WebP q85.
- 2026-05-26 — `be-rong-clean-ref.png` remains reference-only and is not processed for the outfit picker.

---

## 🎨 Design Polish — Contrast Fixes + Learn Hub Redesign (2026-05-28)

> **Trigger:** User phát hiện nhiều phần mất màu / không đủ contrast khi switch light↔dark mode.
> Preview card và story card dùng màu hardcoded → vỡ ở light mode.
> Section "Tài nguyên bổ trợ" (Ngữ pháp / Đọc hiểu) không rõ mục đích, cần rebuild.

### Part 1 — Contrast / Theme Fixes (`css/pages/learn.css` + `pages/learn.html`)

- ☑ DONE 2026-05-29 — **1a. Preview card** (`.preview-card`, lines 244–276): hardcoded dark-only gradient + white text → đảo logic: light mode base dùng CSS variables, dark mode override `[data-theme="dark"]`
- ☑ DONE 2026-05-29 — **1b. Story card** (`.lh-story-card`, lines 466–484): hardcoded `#FEF3C7/#FFFBEB/#1F2937/#6B7280` → thay bằng `var(--warning-bg)`, `var(--text)`, `var(--text2)` + dark override
- ☑ DONE 2026-05-29 — **1c. btn-study-now** (line 328): hardcoded purple `#6366f1/#8b5cf6` → `var(--primary)/var(--primary-light)` (brand Châu hồng)
- ☑ DONE 2026-05-29 — **1d. fc-context-block** (`pages/learn.html` line 221): inline `background:#FEF3C7;color:#92400E` → tạo class `.fc-context-card` trong learn.css dùng CSS variables
- ☑ DONE 2026-05-29 — **1e. deckPreviewBanner** (`pages/learn.html` line 152): inline `color:#92400E` → class `.deck-preview-banner` dùng CSS variables

### Part 2 — "Tài nguyên bổ trợ" Redesign (`pages/learn.html` + `css/pages/learn.css`)

- ☑ DONE 2026-05-29 — **Rebuild 2-tier layout** thay 5 icon-button grid cũ:
  - Tier 1: 2 feature card lớn (`.lh-resource-card`) — Ngữ pháp HSK + Luyện đọc & nghe
  - Tier 2: 4 chip nhỏ (`.lh-util-chip`) — Cách học · Bản đồ HSK · Chủ đề · Tài liệu PDF
- ☑ DONE 2026-05-29 — **Ngữ pháp card**: title + desc "Mẫu câu HSK 1-9 · Giải thích TV · Quiz" + badge "9 cấp độ"
- ☑ DONE 2026-05-29 — **Đọc hiểu card**: đổi tên thành "Luyện đọc & nghe" + desc "Văn bản thực tế · Nghe TTS · Câu hỏi hiểu bài"
- ☑ DONE 2026-05-29 — **CSS mới**: `.lh-resource-grid`, `.lh-resource-card`, `.lh-rc-icon/body/title/desc/badge`, `.lh-util-row`, `.lh-util-chip`
- ☑ DONE 2026-05-29 — **Xóa CSS cũ**: `.lh-support-grid`, `.lh-support-item`, `.lh-support-icon`

### Part 3 — "Tài liệu tham khảo" Stub

- ☑ DONE 2026-05-29 — Tạo `pages/references.html` — coming-soon page với description tính năng
- ☑ DONE 2026-05-29 — Thêm route `'references'` vào `js/router.js` (entry trong `_routes` + `_initMap`)

### Files thay đổi

| File | Thay đổi |
|---|---|
| `css/pages/learn.css` | Fix preview-card, story-card, btn-study-now; thêm fc-context-card, deck-preview-banner; thay lh-support-* bằng lh-resource-*, lh-util-* |
| `pages/learn.html` | Fix 2 inline styles; replace section "Tài nguyên bổ trợ" lines 60–80 |
| `pages/references.html` | **TẠO MỚI** — coming-soon stub |
| `js/router.js` | Thêm route 'references' |

---

## 📚 Phase P9 — HSK 1 Truyện Mai Curriculum (2026-05-29)

- ☑ DONE 2026-05-29 — Complete Bài 4-12 in `js/data/course-lessons.js`, bringing Truyện Mai HSK 1 to 12 lessons.
- ☑ DONE 2026-05-29 — Confirm Mai expression assets are production-safe at `assets/mai/expressions/*.webp` and `js/course.js` uses that path.
- ☑ DONE 2026-05-29 — Validate `js/data/course-lessons.js` syntax with `node -c`.

---

## 🎬 Phase P — Mai Character: AI Video Loop (nâng cấp sau)

> Hiện tại Mai dùng CSS animations (breathing, bounce-in, speaking pulse — done 2026-05-28).
> Khi muốn nâng cấp thêm → dùng AI video để biến ảnh tĩnh thành loop sống động.

### Workflow

1. **Tool:** Kling AI (kling.kuaishou.com) — free 66 credit/ngày
2. **Input:** `assets/mai/expressions/{expression}.webp` × 6 files
3. **Prompt template:**
   ```
   2D flat cartoon girl, gentle idle breathing, blinks once, soft smile,
   loop animation, no background movement, same pose, 2-3 seconds
   ```
4. **Output:** MP4 ~500KB/expression × 6 = ~4MB total
5. **Lưu vào:** `assets/mai/loops/{expression}.mp4`
6. **Tích hợp:** Thay `<img class="cs-mai-scene">` bằng:
   ```html
   <video class="cs-mai-scene" autoplay loop muted playsinline>
     <source src="assets/mai/loops/happy.mp4" type="video/mp4">
     <img src="assets/mai/expressions/happy.webp" alt="Mai"> <!-- fallback -->
   </video>
   ```
7. **JS thay đổi:** `_maiImg()` → `_maiVideo()` trong `js/course.js`

### Backup tools nếu Kling không ổn

| Tool | Link | Free tier |
|---|---|---|
| Runway Gen-3 Alpha | runwayml.com | 125 credit |
| Pika Labs | pika.art | Free tier |
| Adobe Express Animate | adobe.com/express | CC plan |

### Ưu tiên expression làm trước

1. `happy` — dùng nhiều nhất (default, intro, complete)
2. `focused` — trong dialogue học bài
3. `curious` — khi gặp từ mới
4. `surprise`, `confused`, `sad` — làm sau

### Notes

- D-ID / HeyGen **không dùng được** — cần face-forward portrait, không nhận 2D illustration
- Khi apply video: thêm CSS `cs-mai-scene video { height: 178px; }` và xóa `cs-breathe` animation (video đã có)
- Dung lượng 4MB tổng là chấp nhận được (lazy-load từng file, chỉ load expression đang dùng)

---

## 🛠️ Design Agent + Stitch Workflow (2026-05-29)

> **Design Agent:** `D:/design-agent/agent.py` — đọc `prompt.md` → Claude API → lưu `output/project/index.html`
> **Stitch:** Google AI design tool — gen UI mockup từ design system

### Design Agent — trạng thái

- ☑ DONE 2026-05-29 — `agent.py` rewrite: dùng `anthropic` SDK trực tiếp (model `claude-sonnet-4-6`, max_tokens 8000, retry 3× backoff 2/4/8s); bỏ Playwright/Stitch automation
- ☑ DONE 2026-05-29 — `requirements.txt` fix: `playwright` → `anthropic>=0.40.0`
- ☑ DONE 2026-05-29 — `docs/design/DESIGN.md` line 3 fix: "mobile-first" → "primary target desktop 1440×900 with left sidebar 240px"
- ☑ DONE 2026-05-29 — **Prompt caching**: `agent.py` gọi Anthropic SDK thật (bỏ hẳn browser_helper/Playwright), system = DESIGN.md block + `cache_control` ephemeral → call thứ 2+ trong `--all` đọc cache (0.1×). Usage thật + report cache_read. **Design Agent COMPLETE.**
- ☐ **TODO (user, manual):** Điền API key thật vào `D:/design-agent/.env` rồi `python agent.py --folder 03` để gen — chỉ là bước vận hành, code đã xong.

### Stitch — upload để fix layout lệch

1. `docs/design/DESIGN.md` (đã fix) → paste vào Design System editor
2. `colors_and_type.css` → upload CSS tokens
3. Font **Inter** + **Noto Sans SC** → Google Fonts download → Upload fonts (fix "Missing brand fonts")
4. `preview/*.html` → kéo vào "Design Files" làm reference

### Chạy design agent

```bash
cd D:/design-agent
python agent.py --list                    # xem status
python agent.py --folder 03-onboarding   # test 1 folder (~$0.03)
python agent.py --all                    # gen toàn bộ (~$1.2)
```

---

## 📝 Phase O5 — Phân Tích Văn Bản (2026-05-29)

- ☑ DONE 2026-05-29 — Tạo `js/text-analyzer.js`: build HSK3_DATA map, greedy longest-match (4 chars), render token DOM (XSS-safe textContent), popup pinyin+nghĩa+TTS+thêm kho, stats (coverage, breakdown/level).
- ☑ DONE 2026-05-29 — Tạo `css/pages/text-analyzer.css`: HSK level tint + underline, popup fixed-position, stats cards + breakdown bar, light/dark vars.
- ☑ DONE 2026-05-29 — Cập nhật `pages/text-analyzer.html`: thay stub bằng full UI (textarea, highlight area, popup, backdrop, stats).
- ☑ DONE 2026-05-29 — Cập nhật `js/router.js` _initMap: `'text-analyzer'` gọi `TextAnalyzer.init()`.
- ☑ DONE 2026-05-29 — Cập nhật `index.html`: thêm `<script src="js/text-analyzer.js?v=1.0">` và `<link css/pages/text-analyzer.css?v=1.0>`.
- ☑ DONE 2026-05-29 — Verified: paste câu test → 20 từ HSK nhận ra / 36 ký tự / 89% coverage / HSK 3 max. Popup 我→wǒ/tôi/HSK1 ✅. Breakdown HSK1=17, HSK2=2, HSK3=1 ✅.

**Phase O hoàn tất (O1 Radicals ✅ · O2 Topics ✅ · O3 Mock Exam ✅ · O4 Pinyin chart (skip) · O5 Text Analyzer ✅)**

---
