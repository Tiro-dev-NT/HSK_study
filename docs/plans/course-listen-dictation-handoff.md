# Handoff — B-P2: bài tập NGHE (listen + dictation) cho workbook giáo trình Mai

> Soạn 2026-06-04. Việc #2 ROI trong ACTION_ITEMS. KHÁC task HSK 3: đụng RENDERER
> (`js/course.js`) + data, không chỉ data.
> Trạng thái (verify 2026-06-04): workbook hiện CHỈ 3 dạng `fill` / `order` / `translate`
> (dispatch ở `Course._renderExercise`, ~dòng 1313). Không có dạng nghe nào.

## Bối cảnh
Giáo trình "Truyện Mai" mỗi bài có phần workbook. Giáo trình chuẩn HSK ~60% là kỹ năng
NGHE nhưng workbook chưa có dạng nghe → khoảng trống lớn nhất còn lại. Thêm 2 dạng mới
TẬN DỤNG TTS sẵn (không tốn AI credit):
- `listen`    : nghe TTS một câu/từ → chọn đáp án (MCQ recognition có audio).
- `dictation` : nghe TTS → GÕ lại chữ Hán (active recall, 听写).

## Phần 1 — RENDERER (js/course.js) — code production, cẩn thận

### 1a. TTS helper dùng chung
Pattern sẵn ở course.js (~dòng 955, 1099): ưu tiên `Dictionary.playTTS(text)`, fallback
`window.speechSynthesis` (utterance lang='zh-CN', rate ~0.85, giọng zh nếu có). Gom thành
`Course._speakZh(text)`, tái dùng (KHÔNG lặp 3 nơi).

### 1b. Thêm 2 nhánh vào `Course._renderExercise(ex, ei)` (~dòng 1313)
Theo ĐÚNG style nhánh fill/order/translate (class cs-exercise, cs-ex-num, explainHTML cuối).
- Luôn có nút "🔊 Nghe" gọi `Course._speakZh(ex.audio)`; nghe lại không giới hạn khi chưa đáp.
- KHÔNG hiện chữ Hán đáp án trước khi trả lời. Sau khi đáp mới lộ chữ + pinyin + nghĩa.

`listen` (giống fill, ẩn text):
```js
{ type:'listen', audio:'你好', options:['你好','谢谢','再见'], answer:'你好', py?:'nǐ hǎo', explain?:'...' }
```
- render nút nghe + option button (class cs-opt cs-opt-sm).
- commit qua `Course._answerWorkbook(ei, opt)` (đã có — dùng luôn).
- sau khi đáp: tô đúng/sai như fill, hiện ex.py + explain.

`dictation` (giống translate, gõ Hán):
```js
{ type:'dictation', audio:'我是学生', answer:'我是学生', hint?:'gợi ý VN/pinyin', py?:'...', explain?:'...' }
```
- render nút nghe + input + nút "Kiểm tra".
- commit qua hàm MỚI `Course._submitDictation(ei)` (mirror `_submitTranslate`: đọc input,
  lưu workbookAnswers[ei], gọi `_pushWrongToSRS` nếu sai, `_rerenderWorkbook`).
- chấm dùng `_normalizeZh` (đã bỏ dấu câu + space).
- sau khi đáp: ✓ Chính xác / ✗ Đáp án: <answer> + py + explain.

### 1c. `Course._isExCorrect(ex, ans)` (~dòng 1435)
- Thêm: `if (ex.type === 'listen') return ans === ex.answer;` (khớp tuyệt đối như fill).
- dictation rơi vào default (normalize compare) — ĐÃ đúng, không cần thêm.
- `_pushWrongToSRS` quét ex.answer tìm vocab bài → đẩy SRS; OK cho cả 2 dạng (đều có answer Hán).

### 1d. Không đổi schema step hội thoại, không refactor ngoài phạm vi. Bump
`index.html` `course.js?v=X.X`. CSS thêm vào `css/pages/course.css` (cs-listen/cs-dictation/
cs-ex-play nếu cần), KHÔNG hardcode màu — dùng `var(--token)`.

## Phần 2 — DATA
- MVP: thêm vào HSK 1 (`course-hsk1.js`) trước — mỗi bài (30) thêm 1–2 `listen` + 1
  `dictation` vào workbook.easy/medium, lấy câu/từ TỪ CHÍNH vocab + thoại của bài (đừng
  bịa từ ngoài cấp). Bump `course-hsk1.js?v`.
- Sau khi pattern ổn + user OK → nhân ra HSK 2/3/4.
- KHÔNG đổi ex fill/order/translate cũ.

## Design principles (ACTION_ITEMS mục B)
1. Audio-first (đạt qua TTS). 2. Active recall > recognition (ưu tiên dictation).
3. Spacing: sai → SRS (đảm bảo gọi `_pushWrongToSRS` cả 2 dạng). 4. Feedback giải thích (field explain).

## TEST / VERIFY (xong hết mới commit)
1. `node --check js/course.js && node --check js/data/course/course-hsk1.js` → OK.
2. Browser (http.server + Playwright), `/#/course?id=1` → phase workbook:
   - listen: 🔊 phát tiếng (speechSynthesis gọi, không lỗi); chọn SAI → đỏ + đáp án +
     explain + từ vào `hsk_srs_v3` (đọc localStorage); chọn ĐÚNG → xanh, KHÔNG đẩy SRS.
   - dictation: 🔊; gõ SAI → ✗ + đáp án + đẩy SRS; gõ ĐÚNG (kể cả thiếu dấu/space) → ✓.
   - Nộp bài: workbookScore phản ánh cả dạng mới.
   - Light + dark + mobile 390px. 0 lỗi console.
3. 3 dạng cũ (fill/order/translate) KHÔNG regression.

## COMMIT (sau verify pass)
- Stage: `js/course.js`, `js/data/course/course-hsk1.js`, `index.html`, `css/pages/course.css` (nếu sửa).
- Message: `feat(course): bài tập NGHE — listen + dictation (workbook, TTS, wrong→SRS)`
  thân: mô tả 2 dạng + renderer + data HSK1 + verify + design audio-first.
  Kết thúc: `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`
- KHÔNG here-string PowerShell trong Bash tool — dùng `-F -` heredoc.
- `git push origin main`. Cập nhật `docs/ACTION_ITEMS.md`: item "B-P2 Bài tập NGHE" → ☑
  DONE + ngày + hash + "MVP HSK 1; HSK 2/3/4 chờ nhân ra".

## Môi trường
- node có sẵn; cwebp KHÔNG. docs/scripts/content .gitignore blanket (file MỚI cần add -f).
