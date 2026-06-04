# Handoff — Rải A1 + A2 + A3 qua giáo trình HSK 3 (course-hsk3.js)

> Soạn 2026-06-04. Việc #1 ROI trong ACTION_ITEMS. Lặp pattern HSK 1/2 đã DONE.
> Trạng thái HSK 3 (verify 2026-06-04): 50 bài (id 72–121), `course-hsk3.js?v=1.0`,
> level:3 Pro-gated · objectives **0/50** · grammarNotes **0/50** · vocab lesson-level
> dạng `{h,p,v}` **thiếu field `e`** (HSK 1 đã có e). Script `scripts/fill_course_en.py` tồn tại.

## Bối cảnh
App Hanzi Genz (vanilla JS, không framework — đọc CLAUDE.md auto-load). Giáo trình
"Truyện Mai" là giáo trình chính. HSK 1 và HSK 2 đã đạt chuẩn (objectives +
grammarNotes + vocab EN). Nhiệm vụ: làm HSK 3 đạt cùng chuẩn đó.

File đích: `js/data/course/course-hsk3.js`. Renderer: `js/course.js` (KHÔNG sửa renderer
— chỉ thêm data; renderer đã hỗ trợ sẵn objectives/grammarNotes/vocab.e từ khi làm HSK 1).

## 3 việc cần làm cho CẢ 50 bài

### A1 — objectives: thêm field `objectives: []` vào mỗi lesson
- 2–4 mục, tiếng Việt, "học xong nói/làm được gì". Đặt ngay sau `vocabPreview`.

### A3 — grammarNotes: thêm field `grammarNotes: [...]`
- 1–3 điểm/bài. Ví dụ PHẢI lấy/biến từ chính thoại trong bài (không bịa ngoài).
- Shape CHÍNH XÁC như HSK 2:
```js
grammarNotes: [
  { point: '比如 / 比如说 — nêu ví dụ',
    explain: 'Giải thích ngắn bằng tiếng Việt.',
    examples: [
      { zh: '...', py: '...', vi: '...' },
      { zh: '...', py: '...', vi: '...' }
    ] }
]
```

### A2 — vocab EN: thêm field `e` cho mỗi từ trong lesson-level `vocab: [{h,p,v}]`
- Chạy `scripts/fill_course_en.py` (đã dùng cho HSK 1) — sửa trỏ vào course-hsk3.js,
  auto-map h→e từ HSK3_DATA (`js/data/v3/hsk3_lvl*.js`).
- Từ KHÔNG khớp HSK3_DATA → ĐỂ TRỐNG (KHÔNG bịa). Liệt kê từ bỏ trống trong report.

## ⚠️ QA BẮT BUỘC (bài học từ HSK 1/2)
Lesson tự sinh hay lẫn cặp liên từ (虽然…但是, 因为…所以, 不但…而且, 一边…一边, 即使…也).
Lỗi có thể ở THOẠI / CHECKPOINT / WORKBOOK chứ không chỉ grammarNotes → soi cả 3 nơi.

## Quy ước
- `var` cho data file — KHÔNG đổi. Giữ nguyên id/level/title/steps.
- KHÔNG refactor renderer, KHÔNG đổi schema step. Chỉ THÊM 3 field/lesson + field e/vocab.
- Cache-bust: bump `index.html` `course-hsk3.js?v=1.0` → `?v=1.1`.

## TEST / VERIFY (xong hết mới commit)
1. `node --check js/data/course/course-hsk3.js` → OK.
2. node load đếm: 50/50 objectives, 50/50 grammarNotes, số vocab có e / tổng + danh sách bỏ trống.
3. Browser (python -m http.server + Playwright): mở `/#/course?id=72` và 1 bài batch cuối (id=121):
   - Khối "🎯 Mục tiêu bài này" hiện ở intro.
   - Nút "📘 Ngữ pháp bài" → modal mở, ví dụ zh/py/vi đúng.
   - Vocab hiện dòng English (.cs-vc-en) khi có e.
   - Light + dark + mobile 390px. 0 lỗi console.
   - (HSK 3 Pro-gated: nếu gate chặn, test bằng tạm set Pro hoặc kiểm tra render qua
     console — KHÔNG commit thay đổi gate.)

## COMMIT (sau khi verify pass)
- Stage: `js/data/course/course-hsk3.js`, `index.html`, (`scripts/fill_course_en.py` nếu
  sửa → `git add -f`).
- Message conventional tiếng Việt:
  `feat(course): HSK 3 đạt chuẩn — objectives + grammarNotes + vocab EN (50 bài)`
  thân: số liệu 50/50 + vocab e X/Y + từ bỏ trống + QA cặp liên từ 3 nơi + verify.
  Kết thúc: `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`
- KHÔNG dùng here-string PowerShell (`@'...'@`) trong Bash tool — dùng `-F -` heredoc.
- `git push origin main` (production, Cloudflare auto-deploy).
- Cập nhật `docs/ACTION_ITEMS.md`: item "Rải A1+A2+A3 qua HSK 3" → ☑ DONE + ngày + hash.

## Môi trường
- Repo origin PUBLIC → KHÔNG commit secret. node có sẵn; cwebp KHÔNG (task không cần ảnh).
- docs/ + scripts/ + content/ .gitignore blanket (file MỚI cần add -f; ACTION_ITEMS.md đã tracked).
