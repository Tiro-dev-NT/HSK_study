# Content Folder — Raw materials cho Hanzi Genz

> Folder này chứa **raw content** (markdown, JSON, scripts) trước khi format thành data file (`js/data/...`).
> Mục đích: tách content khỏi code → AI gen + human edit dễ → format JSON sau cùng.

## Cấu trúc

```
content/
├── reference/              ← Tài liệu tham khảo (READ-ONLY cho AI)
│   ├── README.md           ← Hướng dẫn AI cách dùng folder này
│   ├── hsk_official_lists/ ← HSK 2.0 + 3.0 word lists
│   ├── grammar_patterns/   ← Grammar HSK 1-6
│   ├── hskk_syllabus/      ← Format đề thi HSKK 3 cấp
│   ├── coct_frequency/     ← Word frequency list
│   └── etymology/          ← Character origin data
│
├── curriculum/             ← Phase P content (Story Mai)
│   ├── characters/         ← Profile nhân vật (Mai, Linh, Wang...)
│   ├── story_outline_hsk1.md
│   ├── story_outline_hsk2.md  (chưa làm)
│   ├── lessons_raw/        ← Dialogue + exercises raw markdown
│   └── prompts/            ← AI prompt templates
│
├── method/                 ← Phase Q content (Learning Method)
│   ├── article_1_why_srs.md
│   ├── article_2_daily_routine.md
│   ├── tips_daily_30.md
│   └── onboarding_5_slides.md
│
├── radicals/               ← Phase O1 content (Bộ thủ)
│   ├── radicals_214_full.json
│   └── categories.md
│
├── topics/                 ← Phase O2 content
├── mock_exams/             ← Phase O3 content
├── stories/                ← Phase W1 content (Duolingo-style)
├── speaking/               ← Phase R + Y content
│   └── hskk_practice/      ← Phase Y HSKK content
├── writing/                ← Phase S content
├── real_world/             ← Phase T content
└── audio_scripts/          ← Phase W3 audio record scripts
```

## Quy ước

- **Markdown cho text content** (dễ AI gen + human edit)
- **JSON cho structured data** (final format trước khi convert sang `js/data/`)
- **Mỗi folder có README.md** giải thích nội dung + format expected
- **Filename convention:**
  - Snake_case: `hsk1_l01_dialogue.md`
  - Level prefix: `hsk1_`, `hsk2_`, ...
  - Numbered: `_l01`, `_l02`, ...

## Workflow content → data file

```
1. Plan trong content/curriculum/story_outline_hskX.md
2. AI gen draft → content/curriculum/lessons_raw/hskX_lYY.md
3. Human edit + verify (copyright check, accuracy)
4. Format JSON → js/data/course/hskX_lessons.js
5. Test trong dev app
6. Commit cả raw markdown + JSON data
```

## Cho AI: Khi cần gen content mới

1. Đọc `content/reference/README.md` để biết source materials
2. Đọc `content/curriculum/prompts/gen_*.md` để có prompt template
3. Tham khảo `content/reference/hsk_official_lists/` cho vocab scope
4. Output vào `content/curriculum/lessons_raw/` (chưa convert JSON)
5. Báo lại để human review trước khi convert

## TRÁNH

- ❌ Không commit copyrighted content (sách giáo trình PDF, etc.)
- ❌ Không upload media files >5MB vào git (dùng Cloudflare R2 sau)
- ❌ Không gen content thẳng vào `js/data/` — luôn qua content/ trước để human review
