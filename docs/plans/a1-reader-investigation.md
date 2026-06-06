# A1 — Graded Reader Việt-first · Báo cáo điều tra (READ-ONLY)

> Session 2026-06-07 · Phục vụ "Phương án A1" trong Strategy Council 2026-06-06.
> Đây là **báo cáo để duyệt** — KHÔNG code reader. Mọi số liệu trích từ file thật (đường dẫn:dòng).

---

## A. Hiện trạng (5 điểm)

### A.1 — Shape + quy mô data (`js/data/readings.js`)

**Cấu trúc object passage** (readings.js:7-15):
```js
{
  id: 'r1_01',                 // string, prefix r<level>_<nn>
  title_vi: 'Giới thiệu bản thân',
  title_en: 'Self Introduction',
  text: '你好！我叫小明。…',     // 1 chuỗi Hán liền, KHÔNG tách câu sẵn
  pinyin: 'Nǐ hǎo! Wǒ jiào…',  // 1 chuỗi pinyin cả bài (tách câu = runtime, regex)
  questions: [
    { q_vi, q_en, options:[4], answer: <idx 0-3> }   // MCQ, KHÔNG có giải thích
  ]
}
```

**Keyed theo cấp:** `READINGS_DATA = { 1:[…], 2:[…], …, 6:[…] }` (readings.js:5, 98, 190, 246, 293, 331) — số = cấp HSK **2.0** (1-6), chưa phải HSK 3.0 9 cấp.

**Đếm bài / cấp:**
| Cấp | IDs | Số bài |
|---|---|---|
| HSK 1 | r1_01–r1_10 | **10** |
| HSK 2 | r2_01–r2_10 | **10** |
| HSK 3 | r3_01–r3_06 | **6** |
| HSK 4 | r4_01–r4_05 | **5** |
| HSK 5 | r5_01–r5_04 | **4** |
| HSK 6 | r6_01–r6_03 | **3** |
| **Tổng** | | **38 bài** |

**Độ mỏng:** RẤT mỏng. Mỗi bài ~40-110 chữ Hán (đoạn đơn, 4-6 câu), chỉ **2 câu hỏi/bài**. Không có: phân đoạn (paragraph), gloss từ vựng, audio file, giải thích đáp án, tag chủ đề, độ khó trong cấp. Đây là "đoạn mẫu" hơn là "truyện đọc". Không đủ cho một Graded Reader thực thụ.

### A.2 — Reader UI (`js/reading.js` + `css/pages/reading.css`)

- **Render:** `view.innerHTML = …` chuỗi HTML (reading.js:247-264). Mỗi câu 1 `.read-sentence-row` + nút ▶ play câu (reading.js:192-197).
- **Toggle pinyin:** CÓ. Dùng `_makeRuby()` bọc mọi chữ thành `<ruby><rt>py</rt></ruby>`, CSS `.show-pinyin` bật/tắt `rt` (reading.js:99-108, 274-279). Toggle DOM-only, không re-render.
- **Audio:** CÓ nhưng chỉ **Web Speech API (TTS browser)** — `_playTTS` / `_playTTSWithHighlight` dùng `SpeechSynthesisUtterance` lang `zh-CN`, có chọn voice qua `Dictionary._pickZhVoice` (reading.js:371-418). **KHÔNG có audio file thu sẵn.** Có mode "🔊 Nghe" ẩn bài + speed 0.75/1/1.25x (reading.js:200-217).
- **Tap-to-gloss (chạm chữ → nghĩa):** **CHƯA hoạt động.** Có hàm `_makeClickable()` sinh `<span class="clickable-hanzi">` + `_openCharModal()` mở `Dictionary.openModal` (reading.js:427-447), và `_bindEvents` lắng nghe `.clickable-hanzi` (reading.js:89-94) — **NHƯNG** `_renderPassage` render text bằng `_makeRuby` chứ không phải `_makeClickable` (reading.js:195). ⇒ span `.clickable-hanzi` không bao giờ được sinh ra → **dead code, tap-gloss không có thật.**
- **Tham chiếu tốt hơn:** `js/speaking.js` đã có tap-lookup HOÀN CHỈNH: `_wrapHanzi` bọc `<span class="sp-hz">` (speaking.js:29-43) → `_resolveWord(ch, nextCh)` ưu tiên match từ ghép 2 chữ rồi 1 chữ qua `getAllWordsBothVersions()` (speaking.js:52-66) → `_showLookup` popup pinyin+nghĩa+TTS+"Lưu SRS", auto-position tránh tràn màn hình (speaking.js:68-120). **Đây là pattern nên tái dùng cho Reader**, không phải code reading.js hiện tại.

### A.3 — Pro-gate (client-side, KHÔNG server enforce)

Gate hoàn toàn ở **client**:
- **Đọc hiểu:** HSK ≥3 = Pro. reading.js:74-82 — `if (lvl >= 3) … Monetization.isProSync()` → false thì `Monetization.isPro().then(...)` → `showGate('Đọc hiểu HSK '+lvl)`.
- **Nghe hiểu:** HSK ≥2 = Pro. reading.js:315-322 — cùng pattern, `showGate('Nghe hiểu HSK '+_level)`.
- `Monetization` chỉ expose `isPro/isProSync/showGate/checkDailyLimit/checkDailyQuota` (monetization.js:127-134). **Không có RPC SECURITY DEFINER** chặn reading — vì content tĩnh nằm trong JS bundle, F12 đọc thẳng `READINGS_DATA` được. Hiện chấp nhận (content không phải secret). ⇒ Nếu Reader bán Pro, **nội dung bài vẫn lộ trong bundle**; muốn enforce thật phải lazy-load qua API.

### A.4 — Tái dùng audio Mai (`js/course.js`)

- **Hạ tầng R2:** `MAI_AUDIO_BASE = 'https://cdn.hanzigenz.com/'` (course.js:14). Path file: `<base>mai/audio/L<lessonId>_<slug>.mp3` (course.js:1180-1181). Egress free, cache 1 năm immutable. Có fallback Web Speech khi 404 (course.js:1191-1199).
- **`_speakZh`** (course.js:980-993): ưu tiên `Dictionary.playTTS`, fallback Web Speech zh-CN rate 0.85 — đây là TTS runtime, KHÔNG phải file.
- **Bài listen/dictation** (course data, vd course-hsk3.js:180-190):
  ```js
  { type:'listen',    audio:'妈妈帮你搬家', options:[3 câu], answer:'妈妈帮你搬家', py, explain }
  { type:'dictation', audio:'你来报到了',   answer:'你来报到了', hint, py, explain }
  ```
  Render ở course.js:1407-1447, chấm ở course.js:1523-1524. **Audio = chuỗi Hán đọc bằng `_speakZh` (TTS), KHÔNG phải file thu** — nên dạng bài này KHÔNG phụ thuộc R2.
- **Đánh giá tái dùng:**
  - ✅ Tái dùng được NGAY: `_speakZh` (TTS), dạng exercise `listen`/`dictation` (copy schema + renderer), highlight câu, speed control.
  - ✅ Tái dùng được nếu thu file: pipeline R2 `<base>mai/audio/…` + lệnh `rclone` đã có sẵn — chỉ cần đặt convention path mới cho reader (vd `reader/audio/<id>_<sentIdx>.mp3`).
  - ➕ Cần thêm: (1) script gen TTS→mp3 cho reader (tương tự `scripts/mai-tts-gen.py` nhắc ở course.js:1176) nếu muốn giọng thật/đồng nhất; (2) per-sentence audio mapping trong schema bài đọc. Giai đoạn đầu **dùng Web Speech TTS là đủ** (reading.js đã chứng minh chạy), thu file R2 để sau khi cần chất lượng.

### A.5 — Nhân bản SEO (`scripts/gen-dict-pages.js` → `/doc-truyen`)

Script hiện sinh trang tĩnh từ vựng: load `HSK3_DATA` qua `vm` (gen-dict-pages.js:27-45) → lọc chữ đơn (48-58) → `pageHTML` mỗi chữ + `indexHTML` + `sitemapXML` + `robotsTXT` (215-239), CSS inline render tức thì, có JSON-LD `DefinedTerm` (76-86), canonical, OG tags, CTA "mở trong app".

**Khả năng nhân bản thành `/doc-truyen`:** CAO — pattern tách bạch, không phụ thuộc app runtime. Các bước cần đổi:
1. **Nguồn data:** thay `loadWords()` (đọc `js/data/v3/hsk3_lvl*.js`) bằng loader đọc file data bài đọc mới (vd `js/data/reader/*.js`) qua cùng cơ chế `vm.runInContext`.
2. **Template:** `pageHTML(passage)` mới — render tiêu đề + đoạn văn (mỗi câu Hán + pinyin + gloss Việt), JSON-LD đổi `@type` sang `Article`/`CreativeWork` (thay `DefinedTerm`), thêm `inLanguage:'zh'` + mô tả Việt cho SEO Việt-first.
3. **URL/slug:** `/doc-truyen/<slug>.html` — cần slug ổn định (không dùng chữ Hán như tu-dien; dùng id hoặc slug-tiếng-việt cho URL đẹp + Google Việt).
4. **Index + sitemap:** thêm `/doc-truyen/index.html` (group theo cấp/chủ đề) và **gộp URL vào `sitemap.xml` chung** (hiện script ghi đè sitemap.xml — phải sửa để merge cả tu-dien + doc-truyen, không overwrite).
5. **CF Pages serve:** giống tu-dien (file tĩnh thắng `/*` SPA fallback). Gitignore→force-add khi commit.
6. **Liên kết chéo:** link bài↔bài cùng cấp (như `related` ở dict) để tăng crawl depth.

---

## B. Phương án schema (so sánh)

### B1 — MỞ RỘNG `READINGS_DATA` cũ (in-place)
Thêm field vào object hiện có: `level` (đổi sang 9 cấp HSK 3.0), `paragraphs[]`, `sentences[{zh,py,vi,gloss[]}]`, `audio`, `topic`, giữ `questions` cũ.
- **Ưu:** không vỡ `reading.js` đang chạy; 38 bài cũ vẫn hiển thị; ít file mới.
- **Nhược:** `READINGS_DATA` keyed 1-6 (HSK 2.0) — lệch HSK 3.0 9 cấp của app; `text` là chuỗi liền, tách câu bằng regex runtime (reading.js:17-28) → fragile khi thêm gloss per-từ; trộn data "đoạn mẫu" cũ với "truyện graded" mới gây lẫn lộn UX. **Chi phí migration:** vừa — phải remap cấp + viết lại renderer để đọc field mới mà vẫn fallback bài cũ.

### B2 — THIẾT KẾ schema Reader MỚI (file riêng, tách hẳn) ⭐ ĐỀ XUẤT
Tạo `js/data/reader/reader-hsk1.js…` (var `READER_DATA`), schema giàu: sentences đã tách sẵn + gloss Hán-Việt per cụm + audio path + questions có giải thích. Reader UI mới (hoặc nâng cấp reading.js đọc nguồn mới), reuse tap-lookup của speaking.js.
- **Ưu:** sạch, khớp HSK 3.0 9 cấp, sentences tách sẵn (không regex runtime), chỗ cho gloss/audio/giải thích ngay từ bài #1; nhân bản SEO `/doc-truyen` dễ (data đã structured); không đụng 38 bài cũ.
- **Nhược:** thêm renderer mới; 38 bài cũ thành "legacy" (giữ ở reading.js hoặc migrate dần).
- **Chi phí migration:** thấp cho code mới (greenfield); nếu muốn cứu 38 bài cũ → viết script chuyển 1 lần (tách câu + thêm gloss thủ công/AI).

### B3 — LAI: schema mới + adapter đọc cả cũ
Reader mới đọc `READER_DATA`; viết `_adaptLegacy()` bọc `READINGS_DATA` cũ về shape mới on-the-fly (tách câu, gloss rỗng).
- **Ưu:** 1 renderer, không mất bài cũ, data mới sạch.
- **Nhược:** thêm lớp adapter + nhánh điều kiện; bài cũ thiếu gloss/audio hiển thị "nghèo" cạnh bài mới.
- **Chi phí:** thấp-vừa.

**Khuyến nghị:** **B2** (schema mới tách hẳn), tùy chọn thêm adapter B3 sau nếu muốn cứu 38 bài cũ. Lý do: A1 là tính năng chiến lược dài hạn → cần schema ổn định, giàu metadata ngay từ bài #1; ép vào schema cũ sẽ phải migrate lần 2.

---

## C. Đề xuất 1 SCHEMA ỔN ĐỊNH (chốt từ bài #1)

Nguyên tắc: **sentences tách sẵn** (không regex runtime), gloss gắn theo cụm từ (token) để tap-to-gloss chính xác hơn match-by-char, audio path theo convention R2, mọi bài có metadata cấp + chủ đề + nguồn để filter/audit.

```js
// js/data/reader/reader-hsk1.js  (var, dynamic-injected — theo quy ước data file)
var READER_DATA = READER_DATA || {};
READER_DATA[1] = [   // key = cấp HSK 3.0 (1..9)
  {
    id: 'rd-1-001',                 // slug ổn định, KHÔNG đổi (dùng cho URL /doc-truyen + SRS + sync)
    level: 1,                       // cấp HSK 3.0
    topic: 'gia-dinh',              // tag chủ đề (filter, SEO cluster)
    title: { vi: 'Buổi sáng của Mai', en: "Mai's Morning", zh: '小美的早晨' },
    summary_vi: 'Mai kể về thói quen buổi sáng.',   // 1 câu — dùng cho card + meta description SEO
    source: 'ai-gen+duyet',         // 'ai-gen+duyet' | 'tu-viet' | 'ctv' — phục vụ audit/bản quyền
    reviewed_by: 'tiro', reviewed_at: '2026-06-10',  // dấu vết người duyệt (HARD RULE audit)
    est_words: 58,                  // số chữ Hán (tính read-time)
    paragraphs: [                   // tách đoạn → render + SEO <p>
      {
        sentences: [
          {
            zh: '我每天六点起床。',
            py: 'Wǒ měitiān liù diǎn qǐchuáng.',
            vi: 'Mỗi ngày tôi dậy lúc sáu giờ.',
            audio: 'reader/audio/rd-1-001_p0_s0.mp3',  // path R2 (rỗng '' = fallback Web Speech TTS)
            gloss: [                                    // tap-to-gloss theo cụm (ưu tiên hơn per-char)
              { w: '每天', py: 'měitiān', vi: 'mỗi ngày' },
              { w: '起床', py: 'qǐchuáng', vi: 'thức dậy' }
            ]
          }
          // …
        ]
      }
    ],
    questions: [
      {
        q: { vi: 'Mai dậy lúc mấy giờ?', en: 'What time does Mai wake up?' },
        options: ['5 giờ', '6 giờ', '7 giờ', '8 giờ'],
        answer: 1,
        explain_vi: 'Câu đầu: 六点起床 = dậy lúc 6 giờ.'   // MỚI so với readings.js cũ
      }
    ]
  }
];
```

Ghi chú thiết kế:
- **`gloss` để rỗng `[]`** vẫn hợp lệ → tap-lookup fallback sang `getAllWordsBothVersions()` (như speaking.js) → bài chưa gloss thủ công vẫn tra được.
- **`audio` rỗng `''`** → Reader dùng Web Speech TTS (chạy ngay, không chờ thu file). Thu file R2 sau, chỉ điền path.
- **`id` bất biến** (slug, không phải index) — an toàn cho URL SEO, đánh dấu đã-đọc (`reading_progress_v1` hiện key theo id — reading.js:34-40, tương thích), và sync.
- **`source` + `reviewed_*`** = bắt buộc cho pipeline audit (mục D).

---

## D. Pipeline content: AI-sinh → người duyệt → commit tĩnh

```
[1 BRIEF]            chủ đề + cấp + từ vựng mục tiêu (lấy từ HSK3_DATA cấp tương ứng)
   ↓
[2 AI SINH]          prompt sinh bài: chỉ dùng từ ≤ cấp N, độ dài chuẩn, kèm pinyin+gloss+câu hỏi
   ↓
[3 FILTER tự động]   (a) chính trị: blocklist từ/chủ đề nhạy cảm → reject (HARD RULE app KHÔNG chính trị)
                     (b) cấp độ: kiểm mọi chữ ∈ HSK3_DATA[≤N] (out-of-level → cảnh báo)
                     (c) bản quyền: bài PHẢI nguyên gốc (không trích sách/báo có bản quyền)
   ↓
[4 NGƯỜI DUYỆT]      Tiro đọc: nội dung đúng, pinyin/nghĩa chuẩn, đáp án đúng, không nhạy cảm
                     → điền source + reviewed_by + reviewed_at vào object
   ↓
[5 COMMIT TĨNH]      thêm vào js/data/reader/reader-hsk<N>.js (var, dynamic-injected)
   ↓
[6 SEO]              chạy scripts/gen-reader-pages.js → /doc-truyen/*.html + merge sitemap
```

**Filter chính trị (HARD RULE — memory `product_principles`):** blocklist chủ đề (lãnh thổ, lãnh đạo, sự kiện lịch sử nhạy cảm, tôn giáo-chính trị, biên giới) + người duyệt xác nhận thủ công. Bài nào chạm → **loại bỏ**, không "sửa cho nhẹ". Ưu tiên chủ đề trung tính đời sống: gia đình, học tập, du lịch, ẩm thực, sở thích, công việc, sức khỏe, mua sắm (đúng tinh thần 38 bài cũ).

**Filter bản quyền:** bài AI-gen phải **nguyên gốc**; cấm copy đoạn từ giáo trình/sách/báo. Lưu `source` để truy vết. Nếu dùng CTV → cần cam kết bản quyền.

**Nguồn sinh ~50 bài HSK1-3 đầu (đề xuất):**
- **HSK 1-2 (~30 bài):** **AI-gen + duyệt** — vốn từ hẹp, AI kiểm soát cấp tốt, người duyệt nhanh. Rủi ro thấp.
- **HSK 3 (~20 bài):** **AI-gen + duyệt kỹ hơn** (câu dài, dễ lọt từ ngoài cấp) — tăng thời gian review, có thể nhờ CTV người Việt giỏi Trung soát pinyin/nghĩa.
- **Tự viết:** chỉ dùng cho vài bài "flagship" làm chuẩn chất lượng/giọng văn để AI học theo (few-shot).
- Nhịp đề xuất: batch 10 bài/đợt, duyệt rồi commit (giống cách giáo trình Mai + listen/dictation đã làm theo batch).

---

## E. Rủi ro + câu hỏi cần chủ dự án quyết trước khi code

**Rủi ro:**
1. **Cấp lệch:** `READINGS_DATA` cũ keyed HSK 2.0 (1-6); app default HSK 3.0 (9 cấp). Schema mới phải chốt theo HSK 3.0 — đừng kế thừa nhầm.
2. **Pro-gate client-only:** content trong bundle → F12 lộ. Nếu Reader là điểm bán Pro, cân nhắc lazy-load qua API (tốn hạ tầng) hay chấp nhận lộ như hiện tại.
3. **Audio:** Web Speech TTS giọng máy, không đồng nhất giữa máy/trình duyệt. Thu file R2 = chất lượng cao nhưng tốn công gen + dung lượng + bước review audio.
4. **Tap-gloss hiện là dead code** trong reading.js — đừng tưởng đã có; phải port pattern speaking.js.
5. **Gloss thủ công tốn công:** gloss per-cụm đẹp nhưng đắt nhân lực; fallback dictionary giảm tải nhưng kém chính xác từ ghép.
6. **SEO sitemap ghi đè:** `gen-dict-pages.js` overwrite `sitemap.xml` — script reader phải merge, không thì mất URL tu-dien.
7. **Bản quyền/chính trị:** nội dung AI có thể lọt chủ đề nhạy cảm hoặc vô tình giống nguồn có bản quyền — phụ thuộc chất lượng filter + duyệt.

**Câu hỏi cần quyết:**
- **Q1.** Schema: chốt **B2 (mới, tách hẳn)** hay B1 (mở rộng cũ)? (đề xuất B2)
- **Q2.** 38 bài cũ: migrate sang schema mới, giữ legacy song song, hay bỏ?
- **Q3.** Pro-gate Reader: cấp nào free / cấp nào Pro? Giữ client-gate hay đầu tư API enforce?
- **Q4.** Audio: TTS Web Speech trước (rẻ, nhanh) rồi thu R2 sau — hay thu R2 ngay từ đầu?
- **Q5.** Gloss: bắt buộc gloss thủ công mỗi bài, hay dựa dictionary fallback + gloss dần?
- **Q6.** Nguồn 50 bài đầu: AI-gen+duyệt (đề xuất) / thuê CTV / tự viết — và ai là người duyệt cuối?
- **Q7.** URL SEO `/doc-truyen/<slug>`: slug tiếng Việt (Google Việt tốt) hay id thuần?
- **Q8.** Reader UI: nâng cấp `reading.js` tại chỗ hay tạo module `reader.js` mới trong tab Học?
