# Reference Materials — READ-ONLY

> Folder này chứa **tài liệu tham khảo gốc** mà AI và developer dùng để gen/edit content.
> KHÔNG sửa file trong folder này trừ khi update từ nguồn chính thức.

## Tài liệu cần thu thập (priority)

| Priority | File | Source | Trạng thái |
|---|---|---|---|
| 🔴 Cao | `hsk_official_lists/hsk2_wordlist.json` | Đã có trong `js/data/hsk*.js` | ✅ Có |
| 🔴 Cao | `hsk_official_lists/hsk3_wordlist.json` | github.com/drkameleon/complete-hsk-vocabulary | ✅ Có (Phase N) |
| 🔴 Cao | `hskk_syllabus/hskk_overview.md` | chinatest.org.cn (CIEF) | ❌ Cần |
| 🔴 Cao | `grammar_patterns/hsk1to6_grammar.md` | github.com/AllJourney/Chinese-grammar hoặc tự tổng hợp | ❌ Cần |
| 🟡 Trung | `coct_frequency/coct_top_10000.json` | github.com/chuanqi305/chinese-frequency | ❌ Khi Phase U3 |
| 🟡 Trung | `etymology/basic_radicals.json` | wiktionary scrape hoặc Outlier ($99) | ❌ Khi Phase W2 |
| 🟢 Thấp | `cultural_notes/vn_vs_cn.md` | Tự viết từ blog du học sinh | ❌ Khi cần |

## Cách AI dùng folder này

### Khi gen lesson dialogue (Phase P)
```
1. Đọc content/curriculum/story_outline_hskX.md để biết bối cảnh
2. Đọc content/reference/hsk_official_lists/hskX_wordlist.json để biết vocab scope
3. Đọc content/reference/grammar_patterns/hskX.md để biết grammar
4. Gen dialogue với constraint: chỉ dùng vocab trong scope, grammar đã học
5. Output markdown vào content/curriculum/lessons_raw/
```

### Khi gen HSKK practice (Phase Y)
```
1. Đọc content/reference/hskk_syllabus/hskk_overview.md để biết format
2. Đọc content/reference/hsk_official_lists/ để biết vocab scope tương ứng
3. Gen sentences/questions theo format đề thi
4. Output JSON vào content/speaking/hskk_practice/
```

### Khi gen radicals data (Phase O1)
```
1. Tham khảo content/reference/etymology/ nếu có
2. Cross-check với js/data/hsk*.js để map radical → từ HSK liên quan
3. Output content/radicals/radicals_214_full.json
```

## TRÁNH

- ❌ Không sửa file reference khi chỉ muốn override 1 trường hợp riêng (override trong content/ thay vì)
- ❌ Không commit file lớn >10MB (raw audio, hình full HD) — dùng external storage
- ❌ Không lưu copyright PDF sách giáo trình ở đây — chỉ ghi note `source: <book> page <X>` nếu cần ref

## TODO collect (theo priority)

```
🔴 Tuần này (trước khi bắt đầu Phase Q content):
[ ] grammar_patterns/hsk1to6_grammar.md     ← Tự tổng hợp từ web hoặc AI gen
[ ] hskk_syllabus/hskk_overview.md           ← Scrape từ chinatest.org.cn

🟡 Trước Phase P content scaling:
[ ] cultural_notes/vn_vs_cn.md               ← Tự viết
[ ] cultural_notes/beijing_lifestyle.md      ← Tự viết / AI gen

🟢 Sau (khi tới Phase tương ứng):
[ ] coct_frequency/                          ← Phase U3
[ ] etymology/                               ← Phase W2
```
