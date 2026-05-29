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
