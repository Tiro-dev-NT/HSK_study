# Action Items

## 🟢 Session 2026-06-05 (b) — Dọn ví dụ rác từ điển + empty-state + 2 bug UI

- ☑ **Gỡ ~1.001 ví dụ `ex` rác** (vi===en / zh=`headword。`) khỏi HSK 3.0 (lvl1-6) — còn **10.455 ví dụ thật (91,3%)**, vi===en=0. `scripts/gen-dict-examples.js` thêm lệnh `purge` + siết `validItem` (chặn fabricate/gloss→vi → không tái diễn).
- ☑ **Modal từ điển empty-state** (Prompt 2): ô ví dụ luôn hiện; chưa có ex → "Ví dụ đang được bổ sung ✍️", `min-height` giữ modal không co nhỏ. `dictionary.js?v=3.4` · `word-detail.css?v=2.2`.
- ☑ **Bug icon người (topbar):** đã login → vào tab Tôi (`/profile`) thay vì mở lại đăng nhập (rõ nhất mobile). `index.html`.
- ☑ **Bug Pro không hiện ở tab Tôi:** `Profile.setup()` `resetCache()` + `await isPro()` trước render → đọc lại DB. `profile.js?v=1.4`. ⚠️ Nếu row `user_subscriptions` thiếu `status='active'`/`expires_at` thì là lỗi DATA, cần sửa đường cấp Pro của admin (xem BUG_REPORT).
- ☐ **CÒN LẠI (fix session):** regen câu THẬT cho ~1.001 từ vừa bị gỡ ex (chạy `node scripts/gen-dict-examples.js ai <lvl>` với validItem mới) · nâng grammarNotes HSK 4 thành ngữ pháp thật (xem BUG/prompt tổng hợp).
- 📌 **Admin token/AI credit:** ĐÃ xem được — token ở cột bảng user + chi tiết; AI Credit ở panel chi tiết (click ⋯). Muốn AI Credit thành cột riêng → thêm sau.

---

## 🟢 Session 2026-06-05 — SEO từ điển tĩnh (acquisition)

> Điểm mù = acquisition. Đòn bẩy: từ điển Hán-Việt intent search cao, đối thủ quốc tế yếu tiếng Việt. SPA → Google index kém → pre-render tĩnh.

**✅ Đã xong (commit `main` `30461fb`):**
- `scripts/gen-dict-pages.js` (force-add vì `scripts/` gitignored) → sinh **1.567 trang chữ đơn** `/tu-dien/<chữ>.html` + `/tu-dien/` index + `sitemap.xml` + `robots.txt`. HTML thật (verify local: Googlebot thấy nghĩa + JSON-LD; SPA `/` không đụng). Off-path, không nav tab.

**🔴 CẦN USER LÀM:**
- ☐ **Push `main` → Cloudflare deploy.** ⚠️ `main` đang ahead origin **5 commit** (gồm cả north-star của session khác: admin retention/marketing/hskk) — push = deploy luôn cả cụm đó. Review trước khi push.
- ☑ **Submit `https://hanzigenz.com/sitemap.xml`** lên Search Console DONE 2026-06-05 — Status **Success**, **1.569 discovered pages**. Index sẽ tăng dần (theo dõi Pages → Indexing).

**📌 Phase 2 (treo, có điều kiện) — mở rộng ~10k từ ghép:**
- ☐ Bỏ filter `Array.from(w.h).length===1` trong generator, NHƯNG chỉ khi: (a) lọc trang có `ex` (tránh thin-content/soft-404), (b) theo đợt cấp thấp trước (crawl budget), (c) chuyển **build-at-deploy** (gitignore `tu-dien/` + CF build command) vì +~80MB, (d) link tới chữ đơn cấu thành. → Đợi chữ đơn index ổn (vài tuần) rồi làm.

---

## 🟡 Session 2026-06-04 — AI Credit pricing + HSKK (TODO, chưa làm)

> Bối cảnh: rà giá vốn Speaking/HSKK vs credit trừ. Chi tiết giá: `docs/AI_API_SETUP.md`.

- ☑ **Recalibrate credit trừ DONE + DEPLOYED 2026-06-05** (user xác nhận deploy `speech-proxy`): giá **server-side 5cr/câu** live: `speech-proxy/index.ts:40` `TASKS.hskk_score={credit:5,cost:150}`, consume gọi `def.credit` (client chỉ gửi `task` string, KHÔNG gửi amount). `hskk.js` `CREDIT_PER_Q=5`. → "đang trừ 1cr" là **stale HOẶC bản live chưa deploy**. **USER VERIFY:** SQL `select amount from ai_credit_ledger where task_type='hskk_score' order by created_at desc limit 5;` → `-5` = live đúng; `-1` = cần `supabase functions deploy speech-proxy`. (Hoặc F12 Network `credit_used`.)
  - ☑ **Pro-gate SERVER-SIDE (anti-F12) DONE 2026-06-05:** trước đây speech-proxy chỉ check JWT → free user F12 đốt allowance/welcome-gift vào chấm speech. Nay query `user_subscriptions` (RLS row của user) trước consume; không Pro → `402 pro_required`. Client hskk.js/speaking.js bắt `pro_required`→`Monetization.showGate`. **KHÔNG cần SQL mới** (đọc qua RLS) — chỉ **`supabase functions deploy speech-proxy`**. `hskk.js?v=2.2`+`speaking.js?v=1.4`.
  - ☑ **Cap câu/ngày = KHÔNG cần code:** chốt 40 câu/ngày = đúng trần credit Pro 200 ÷ 5; `consume_ai_credit` (`daily_cap_exceeded`) đã enforce. Không thêm counter riêng.
  - ☑ **Welcome-gift điều tra 2026-06-05 — KHÔNG lỗ cục, giữ nguyên:** daily-cap áp **cả** purchased/gift (đếm tổng credit/ngày trước khi tách bucket) → 1000cr không drain 1 lượt (≥5 ngày). Worst-case 100%→speech: chi phí gift chỉ **1.2–4% doanh thu** mọi tier (Monthly 3k/4% … Lifetime 30k/1.2%). Đòn bẩy thật nếu siết = recurring allowance, KHÔNG phải gift.
  - ☐ **Còn lại:** ai-proxy (text task) chưa rà lại; cập nhật `AI_CREDIT_PRICING`/`PRODUCT_TIER_MATRIX` ghi rõ speech Pro-only + 5cr/câu.
- ☐ **UX cảnh báo trừ credit TRƯỚC khi chấm/thi:** hiện chỉ "Luyện từng phần Phần 1" có confirm. Cần: trước khi "ấn Kiểm tra/Nộp bài" ở **thi thật** → hiện rõ "Bài này chấm AI, sẽ tốn ~N credit" + confirm. (Vì chấm = trừ luôn, server-side.)
- ☐ **Mở rộng kho đề HSKK (random-draw đã có, thiếu BANK):** `_buildExam` đã rút ngẫu nhiên theo `plan`, nhưng pool mỏng → thi lại gặp lại đề.
  - Sơ cấp: part1 20 (rút 15) · part2 14 (rút 10) · part3 6 (rút 2) → **~1.3 đề thực, quá mỏng** → cần thêm.
  - Trung cấp: part1 16 (rút 10) mỏng · **part2 看图说话 25 đề (rút 2) = rất tốt** · part3 6 (rút 2) mỏng.
  - → Ưu tiên thêm câu: Sơ cấp cả 3 phần; Trung cấp part1 (repeat) + part3 (open).
- ☐ **Bật chấm tự do HSKK** (Phần 2/3 + 看图说话, hiện `grade:false`): điều kiện = (1) SpeechSuper account mở `speak.eval.pro.cn`; (2) lật `grade:true` trong `js/hskk.js`; (3) set credit ~25cr. Tới khi đủ 3 điều kiện → giữ practice-no-grade.
- ☑ **Nâng màn báo cáo HSKK (plan D) — DONE 2026-06-04:** pill Đạt/Chưa (mốc 60) + **heatmap per-âm** Phần 1 (đọc `score.raw.words`, chữ đỏ = <60) + chú thích màu · phần nói tự do hiện **đáp án mẫu/dàn ý/từ khóa/gợi ý** + nghe lại · card **"Điểm yếu cần luyện"** gom âm <60 → nút **Luyện Shadowing** (`Router.navigateTo('speaking')`). KHÔNG đổi luồng chấm/credit. `js/hskk.js?v=2.0` + `css/pages/hskk.css?v=2.4`. Verify Playwright light/dark/mobile 390px, 0 console error (hook QA `HSKK._previewResult`).
- ☑ **Lịch sử & tiến bộ + Hub 4-khối HSKK (plan E + A) — DONE 2026-06-05** (merged `main` @ `2da25a2`): mở rộng key sẵn có `hskk_history_v1` (giữ `ts/overall/pron/flu` + THÊM `perPart{repeat,respond,picture,open}`, lưu 8→40 bản) · màn **"Lịch sử & tiến bộ"**: biểu đồ điểm theo thời gian (**SVG thuần**, chấm màu theo mức + vạch đứt mốc 60 + lọc Tất cả/Sơ/Trung) + danh sách lần thi · **"Mức sẵn sàng" /cấp** = TB 3 lần gần nhất → nhãn Đạt(≥75)/Gần đạt(≥60)/Cần luyện thêm · màn **Định dạng đề** (bảng 3 cấp + mẹo) · **Hub 4-khối** (Thi thử/Luyện từng phần scroll · Lịch sử/Định dạng mở màn riêng). KHÔNG đổi luồng chấm/credit. `js/hskk.js` + `css/pages/hskk.css` (bump `?v`). Verify Playwright light/dark, 0 console error.

## 🟢 Session 2026-06-04 — Onboarding + đẩy luyện tập theo mốc + siết Pro-gate + Admin realtime

**✅ Đã xong (push main):**
- **AppGuide** (`js/app-guide.js` + `css/components/app-guide.css`): guide "Cách dùng app" + onboarding lần đầu (mở lại ở Tôi›Cài đặt). Key `hsk_guide_seen`. Commit `cb40eab`.
- **Nudge mốc output** lên "Hôm nay": `Course.pendingMilestones()` + learn-hub `_lhRenderMilestone` → ải chương/trùm cấp đã mở → click vào thẳng mini-mock; đạt là tắt. Commit `b9faa67`.
- **Fix 2 bug Pro-gate:** `Quests._isPremium` (so sánh Promise `===true` → luôn false; đổi `isProSync`); `grammar.js`+`reading.js` dùng async `isPro()` khi cache chưa warm → hết khóa nhầm Pro. Commit `ab47646`.
- **Siết free:** Tra từ điển 50 lượt/ngày (Pro 200) qua `Monetization.checkDailyQuota` ở `Dictionary.openModal`; Thi thử HSK free 1 lượt/ngày (MIỄN ải/trùm quick-mode). Keys `gate_quota_dict_lookup`, `gate_daily_mock_exam`. Commit `bbc6831`.
- **Đang online (realtime)** (`js/presence.js`): Supabase Realtime Presence đếm cả khách CHƯA đăng nhập → Admin KPI "Đang online" (tách đăng nhập/khách). Key `hsk_client_id`. Kill-switch `ENABLED` đầu file. Commit `399b812`.
- **"Truy cập cuối" thật** (last_active_at): `Auth._touchLastActive()` gọi RPC throttle 1h + đổi nhãn cột Admin. Key `hsk_last_active_touch`. Commit `36d2029`.

**🔴 CẦN USER LÀM (Supabase, thủ công):**
- ☑ **Chạy `sql/v19_last_active.sql`** (DONE 2026-06-05, user xác nhận) → bảng `user_activity` + RLS + RPC `touch_last_active()` + `admin_list_users` đọc `COALESCE(last_active_at, last_sign_in_at)`. Cột "Truy cập cuối" Admin giờ = last_active thật.
- ☑ **Chạy `sql/v20_honor_purchases_grant_fix.sql`** (DONE 2026-06-04, user xác nhận) → fix 403 khi /profile query `user_honor_purchases` (UX_AUDIT P2-2). Root cause: policy RLS `honor_self_select` đã có nhưng bảng thiếu `GRANT SELECT TO authenticated` → PostgREST kiểm GRANT trước RLS → 403. Đã `GRANT SELECT` + revoke ghi từ client → outfit Honor sync đúng từ server.

**📌 Quyết định còn treo:**
- ☐ **#2 Course Truyện Mai HSK 3:** đang khóa Pro (`course.js` `level>=3`) trong khi vocab HSK 3 free + onboarding ghi "HSK 1–3 free" → LỆCH. Cần chốt: để Pro hay đổi `level>=4` (= `PRO_LEVEL_MIN`).

---

## 🟢 Session 2026-06-03 — Writing Tutor nâng cấp + Admin credit + dọn repo

**✅ VIỆC SUPABASE — ĐÃ LÀM HẾT (user xác nhận 2026-06-03):**
- ☑ **`supabase functions deploy ai-proxy`** DONE — task `essay_grade_pro` đã live (HSK 4-6/Ngẫu nhiên Pro 10cr; HSK 1-3 Flash 8cr; routeChain + V4 non-thinking + max_tokens 2048).
- ☑ **Run `sql/v17_admin_ai_credit.sql`** DONE — RPC `admin_grant_ai_credit` đã có (nút "Cấp AI Credit" ở Admin chạy được).
- ☑ **Run `sql/v18_admin_credit_uncap.sql`** DONE — admin miễn daily-cap lượt AI.
- 📌 `ANTHROPIC_API_KEY` + `DEEPSEEK_API_KEY` đã set (Chấm sâu = Claude thật, verified).
- → **Writing Tutor + Admin credit + Admin uncap: full operational.**

**✅ ĐÃ XONG (đã push main):**
- **Writing Tutor (Phase S) nâng cấp:** route model theo cấp (Flash 8cr / Pro 10cr / Claude 38cr) · nút "🔬 Chấm sâu" opt-in · đề tự ghi tùy ý · prompt siết (giữ số, không over-correct, rule 2b) · guard client lọc lỗi giả `X→X`. Verify thật Flash/Pro/Claude.
- **Admin cấp AI Credit:** form ở section Quest & Token + RPC `admin_grant_ai_credit` (token đã có sẵn).
- **Floating Dictionary Panel:** cherry-pick vào main (`js/lookup-panel.js`), hover tra chữ Hán desktop.
- **ai-proxy logging:** `routeChain` gom lỗi mọi provider — đã giúp tìm ra DeepSeek key http_401.
- **Dọn repo:** xóa ~27 worktree merged + 14 thư mục mồ côi + 33 nhánh merged. GIỮ `compassionate-elgamal-c3ffe2` (commit "474 từ vựng HSK 1-6" chưa merge).
- **Doc giá SpeechSuper** ghi vào `docs/AI_API_SETUP.md` (Sentence ~125đ, HSKK ~715đ).

**📌 Còn treo (chưa gấp):**
- ☑ **Review nhánh `compassionate-elgamal-c3ffe2` (474 từ HSK 1-6) DONE 2026-06-03 — KẾT LUẬN: KHÔNG merge.** Nhánh đổ 474 từ vào namespace **HSK 2.0** (`HSK_DATA`, `js/data/hsk{1..6}*.js`) + thêm 7 thẻ `<script>`. Nhưng app **HSK 3.0-only từ 2026-05-27**: `data.js` `activeHSKData()` hardcode trả `HSK3_DATA`, từ điển `getAllWordsBothVersions()` chỉ đọc HSK3_DATA. `HSK_DATA` chỉ còn dùng cho việc phụ (content-filter chính trị, admin count, learn-method fallback) — KHÔNG phải luồng học/từ điển. Spot-check: `投资`/`辩论` đã có trong HSK3_DATA, `能` xuất hiện 39 lần. → Merge chỉ thêm code chết + tải thừa, 0 giá trị user. **Hành động đề xuất:** đóng/xóa nhánh `claude/compassionate-elgamal-c3ffe2` (cả local + origin) — CHỜ user xác nhận vì origin PUBLIC.
- ☑ **Nhãn "Chấm bởi: `<model>`" ở ô kết quả Writing DONE 2026-06-03** — badge `#wtScoreModel` map id provider→tên (DeepSeek V4 Pro/Flash, Qwen3 Max, GLM-5, Kimi K2, Claude Sonnet). Hiện cả ở fallback raw. `writing.js?v=1.9` + `writing.css?v=1.3`.
- ☑ **Đẩy gợi ý "không sai" sang Tips + summary khớp errors DONE 2026-06-03** — lọc lỗi giả (`original==correction`) chuyển `explain` sang Tips (prefix 💡 "+ không sai, chỉ là gợi ý"); khi MỌI "lỗi" đều giả mà summary còn nhắc "lỗi/sai" → tự thêm chú thích làm rõ. Verify Playwright 2 nhánh: lỗi thật giữ + giả lọc→tips; all-fake→summary bổ sung. 0 lỗi console.

---

## ✅ Đợt "đạt chuẩn giáo trình HSK 1" — DONE + DEPLOYED 2026-06-03

> Push `5aef5b7..1b22057` → origin/main → Cloudflare. Đã verify gộp + `node --check`.
> Gồm: bài tập chấm thật + SRS + explain · vocab EN · objectives + grammarNotes (QA pass) · cross-link pinyin · HSKK luyện từng phần · prep ảnh+đề HSKK 中级.

### 📌 Trạng thái cuối session 2026-06-04
> **Đã live/push:** giáo trình HSK1+2 (objectives/grammarNotes/EN/QA) · bài tập chấm-thật+SRS · HSKK Sơ cấp luyện-từng-phần · 6 icon UI · Shadowing toggle pinyin (#1) + **tap-lookup (#2)** · **Gia sư AI R.2** (`/tutor`).
> ☑ **HSKK 中级 DONE 2026-06-04** (push `e528f28`) — đủ 25/25 đề 看图说话, part2 6→25, engine/HTML đã wire sẵn. Practice-no-grade (chờ SpeechSuper spontaneous).
> ☑ **Gia sư AI R.2 FULL OPERATIONAL 2026-06-04** — ai-proxy đã deploy + frontend live → chat chạy thật.
> ☑ **Push gọn 2 fix tồn (2026-06-04):** tutor render **bold** (`25a516a`) + modal pro-gate-overlay (`5227e19`).
> **Handoff đã soạn (session sau làm):** HSK 3 giáo trình → `docs/plans/hsk3-course-handoff.md` · Bài tập nghe listen/dictation → `docs/plans/course-listen-dictation-handoff.md`.

### 🔜 Việc tiếp theo (xếp ROI) — chưa làm
1. **Rải A1+A2+A3 qua HSK 2/3/4** (`course-hsk2/3/4.js`): objectives + grammarNotes + vocab EN → toàn khóa đạt chuẩn.
   - ☑ **HSK 2 DONE 2026-06-03** (merge `89f5187`, `course-hsk2.js?v=1.2`): 754/754 vocab EN, 41/41 bài objectives + grammarNotes (137 ví dụ). QA fix Bài 48 `虽然…所以`→`虽然…但是` ở thoại+checkpoint+workbook (commit `e92aaf2`). node load 41 ✅.
   - ☑ **HSK 3 DONE 2026-06-04** (`course-hsk3.js?v=1.1`): 953/953 vocab EN (missing 0), 50/50 bài objectives + 50/50 grammarNotes. QA cặp liên từ soi 3 nơi (thoại/checkpoint/workbook) — không lỗi. Verify node load + browser (bài 72 & 121: 🎯 objectives + 📘 ngữ pháp modal ví dụ zh/py/vi + `.cs-vc-en`, console 0 error). ☑ **HSK 4 DONE 2026-06-05** (`course-hsk4.js?v=1.1`): 621/621 vocab EN, 33/33 bài objectives + grammarNotes. QA cặp liên từ soi 3 nơi (thoại/checkpoint/workbook) — không lỗi.
   - ☑ **HSK 4 grammarNotes NÂNG CHẤT 2026-06-05** (`course-hsk4.js?v=1.2`): grammarNotes cũ là **gloss từ vựng trá hình** ("Dùng X trong ngữ cảnh… để diễn đạt: …") → thay bằng **75 điểm NGỮ PHÁP HSK 4 thật** (avg 2.27/bài, range 1–3) sinh bằng `deepseek-v4-pro` + script `scripts/_gen_hsk4_grammar.js` (AI chỉ chọn pattern + index câu; py/vi LẤY TỪ data thoại để khỏi sai). Pattern phủ: 把/被 câu · 结果补语/可能补语/趋向补语 · 着/过/得 · 让/叫/使 khiến · 不管…都/虽然…但是/越来越/一边…一边/既…又 · 是…的 · 别/不要. Examples = câu thật từ thoại. Verify: `node --check` OK · load 33 bài (75 notes, 0 malformed, 0 gloss cũ sót) · QA cặp liên từ quét 1562 chuỗi Hán = PASS · browser bài 122 (📘 modal 3 note zh/py/vi, 0 lỗi console). **Vocab EN:** lesson-level `vocab[]` đã 621/621 có field `e` (object `{h,p,v,e}`); step-level `vocab` là mảng chuỗi Hán để highlight thoại → **N/A field `e` theo cấu trúc**, không ép.
   - 📌 Bài học QA: lesson tự sinh có thể chứa lỗi cặp liên từ (虽然…但是, 因为…所以, 不但…而且) lẫn lộn ở **thoại/checkpoint/workbook** chứ không chỉ grammarNotes → QA HSK 3/4 phải soi cả 3 nơi, không chỉ grammarNotes.
2. ☑ **B-P2 Bài tập NGHE DONE 2026-06-04** (push `54e1ee4`; `course.js?v=3.5`, `course-hsk1.js?v=1.2`, `course.css?v=2.4`) — 2 dạng mới `listen` (nghe TTS→chọn MCQ, ẩn chữ tới khi đáp) + `dictation` (nghe→gõ Hán, 听写, chấm `_normalizeZh` bỏ dấu câu/space). Renderer: `Course._speakZh()` helper dùng chung (Dictionary.playTTS→fallback Web Speech zh-CN 0.85), nhánh listen/dictation trong `_renderExercise`, `_submitDictation`, `_isExCorrect` thêm listen. Sai→`_pushWrongToSRS` (cả 2 dạng), feedback dùng `explain`. **MVP HSK 1: 60 listen + 30 dictation (mỗi bài 1 listen ở easy + 1 listen + 1 dictation ở normal), audio lấy từ vocab/thoại của bài.** ☑ **HSK 2 DONE 2026-06-06** (`5d9ccf5`, `course-hsk2.js?v=1.3`): 41 bài, mỗi bài +1 listen easy +1 listen/+1 dictation normal; verify node OK · đếm 41/41/41 · browser `/course?id=31` listen sai→SRS, dictation đúng→✓, fill/order/translate không regression, light/dark/mobile, 0 console error. **HSK 3/4 chờ nhân ra.** ⭐ handoff: `docs/plans/course-listen-dictation-handoff.md`.
3. ☑ **HSKK 中级 build DONE 2026-06-04** (push `e528f28`, `zhong-ji.js?v=1.1`) — đủ **25/25 đề** 看图说话 (50 WebP `kt_01..kt_25`), `HSKK_ZHONGJI.part2` mở rộng 6→25 (mỗi đề keywords/outline/sampleAnswer HSK1-4, trung tính). Engine+HTML đã wire sẵn từ trước (QTYPE `picture`, `hskkQImages`, card 中级 active, plan rút 2 đề/lần thi). Verify: node OK · 0 ảnh thiếu · browser part2=25, ảnh 200, 0 lỗi console. 📌 Chấm tự do vẫn practice-no-grade tới khi account có `speak.eval.pro.cn`.
4. **A4 roleplay/shadow + sửa UX `order`** (click-to-append). TB.
5. **A2 follow-up**: POS (CC-CEDICT/tay) + 6 cụm chưa có EN (中国人…). Thấp–TB.
- **Quyết định treo:** xoá nhánh/worktree `compassionate-elgamal-c3ffe2` (474 từ HSK 2.0, KHÔNG merge; origin PUBLIC → chờ user OK).

---

## 🎨 Design + 🛠️ Ops notes (session 2026-06-03) — để session sau không mất context

### Icon UI — ✅ DONE (commit `44606ad`)
- 6 icon WebP ở **`assets/icons/`** (`badge-xp`, `badge-streak`, `ai-credit-potion`, `honor-gift`, `quest-scroll`, `trophy`), 128px 3–5KB, convert từ `content/assets/output/icons-misc/*.png`.
- **Pattern topbar chip:** icon gắn bằng CSS `::before` theo id (`#topbarTokenBadge`/`#topbarStreakBadge`/`#topbarAICreditBadge` trong `home.css`) — JS chỉ set SỐ (không emoji). Thêm chip mới muốn có icon → theo pattern này (ĐỪNG nhét emoji vào `textContent` vì JS overwrite).
- Static `<img>`: leaderboard hero badge · quests `<h1>` · pricing card Hộp Ân Cần.
- Cả 6 icon đã dùng hết. Gen thêm icon set sau → cùng pipeline.

### Convert ảnh khi CHƯA cài cwebp
- `scripts/process-images.ps1` dùng `cwebp` (CHƯA cài trên máy này). **Thay thế nhanh = Pillow** (đã có): `im=Image.open(png).convert('RGBA'); im.thumbnail((W,W)); im.save(out,'WEBP',quality=90,method=6)` — giữ trong suốt, dùng cho icon/asset nhỏ. (Asset lớn/nhiều vẫn nên cài cwebp + dùng script.)

### Design principles cho BÀI TẬP (áp khi build B-P2/P3/P4, A4, HSK 3/4)
1. **Active recall > recognition** — ưu tiên gõ/nói ra, giảm chọn-3-đáp-án.
2. **Spacing** — từ làm SAI đẩy vào SRS (`hsk_srs_v3`) (P1 đã làm; giữ cho MỌI dạng mới).
3. **Audio-first** — mỗi bài tập nên nghe được (TTS sẵn có).
4. **Output** — ≥1 task nói/viết tự tạo mỗi bài (A4 roleplay/shadow).
5. **Feedback giải thích** (field `explain`), không chỉ đỏ/xanh.
6. **Interleaving** — chèn 1–2 câu ôn từ bài trước.

### Ops lessons (tránh lặp lỗi)
- **Cloudflare Pages kẹt ở bước `initialize` >20′** = sự cố hạ tầng CF, KHÔNG phải code. Fix: Dashboard → Deployments → **Cancel deployment → Retry** (gặp 2026-06-03, retry lên ngay, nhảy thẳng commit mới nhất).
- **Worktree:** session phụ PHẢI làm trong worktree RIÊNG, KHÔNG `git checkout` branch ngay trong repo chính (1 session QA đã trót làm → repo chính nhảy nhánh, phải `git checkout main` lại).
- **Orphan worktree folder** bị Playwright MCP / `http.server` giữ lock → `git worktree remove` báo Permission denied; git đã gỡ đăng ký (an toàn), folder vật lý xoá được sau khi process nhả lock.
- **`.gitignore` chặn blanket `docs/` + `scripts/` + `content/`** → file MỚI trong đó cần `git add -f` mới commit (file cũ đã tracked thì không ảnh hưởng). `content/` cố ý giữ local (business intel); plan doc + script reusable thì force-add.
- **Cache-bust:** sửa `js/data/course/course-hskN.js` → nhớ bump `?v` của CHÍNH file đó trong `index.html` (vd HSK2 `?v=1.2`); sửa renderer thì bump `course.js?v`.

---

## 🎤 Shadowing (R.1) cải tiến + 🆚 So sánh SuperChinese (review 2026-06-03)

> Khơi từ video TikTok competitor (app shadowing). **App ĐÃ CÓ lõi**: Speaking Shadowing (Phase R.1, `/speaking`, chấm `sent.eval.cn` per-syllable THẬT qua SpeechSuper) — mạnh hơn lời quảng cáo chung của video. Video lộ ra vài cải tiến + dịp đối chiếu SuperChinese.

### Cải tiến Shadowing (`js/speaking.js`) — chưa làm
- ☑ **Toggle bật/tắt pinyin DONE 2026-06-03** (merge `b1c06e0`, `speaking.js?v=1.1` · `speaking.css?v=1.1`): nút `#spPinyinToggle` ở `.sp-line-card`, state `_showPinyin` lưu localStorage `speaking_show_pinyin` (mặc định ON), ẩn `#spLinePinyin` khi off (chữ Hán + nghĩa vẫn còn). Verify: on/off + nhớ qua reload, 0 lỗi console.
- ☑ **Chạm từ → tra nghĩa (cả mobile/tablet) DONE 2026-06-04** (merge `3e1b27e`, `speaking.js?v=1.3`·`speaking.css?v=1.2`): popup RIÊNG trong `speaking.js` (`_wrapHanzi`/`_resolveWord`/`_showLookup`), KHÔNG đụng `lookup-panel.js`. Mỗi chữ Hán câu Shadowing bọc `.sp-hz` tappable (≥40px) → popup pinyin+nghĩa Việt+🔊 TTS+📚 lưu SRS; resolve ưu tiên cụm 2 chữ rồi 1 chữ qua `getAllWordsBothVersions()`; clamp viewport; chạy cả cảm ứng (KHÔNG gate desktop). Verify desktop+mobile 390px, SRS lưu localStorage, 0 lỗi.
- ☐ **(Tuỳ chọn) Nhân vật Mai biểu cảm** mỗi câu — ấm/immersive (sprite sẵn `assets/mai/expressions`).
- ☐ **(Sau) "AI phân tích từ"** — phân tích sâu 1 từ qua `ai-proxy` (tốn credit, để sau).

### 🆚 Hanzi Genz vs SuperChinese
> Nguồn SuperChinese: superchinese.com + review (apps.apple, alllanguageresources, talkpal) 2025. Giá tham chiếu: $12.99/th · $69.99/năm · $149.99 lifetime.

| Tiêu chí | SuperChinese | Hanzi Genz |
|---|---|---|
| Chấm phát âm | ✅ AI feedback | ✅ SpeechSuper per-syllable + **HSKK exam format** (sâu hơn) |
| SRS giãn cách | ✅ | ✅ SM-2 |
| Story / video | ✅ animated video | ⚠️ visual-novel Mai + TTS per-voice (KHÔNG video) |
| Hanzi stroke order | ✅ trong bài | ✅ module riêng (handwriting + HanziWriter) |
| **AI Teacher chat** | ✅ hỏi-đáp hội thoại | ❌ **CHƯA** (ai-proxy có, R.2 chưa build) |
| Chấm viết luận | ❌ không nhấn | ✅ **Writing Tutor** (USP) |
| Phủ HSK | HSK + test | ✅ HSK 3.0 full L1-9 + mock exam |
| Tiếng Việt bản ngữ | ❌ English-first | ✅ **USP — Việt-first + HSKK cho thị trường VN** |
| Gamification | ✅ | ✅ + games |

**Khoảng trống nên học từ SuperChinese (ứng viên roadmap):**
- ☑ **AI Teacher chat (Phase R.2) BUILD DONE 2026-06-04** (commit `39ed730`, chưa push) — "Gia sư AI" `/tutor`: chat hỏi-đáp tiếng Trung, giải thích tiếng Việt + Hán/pinyin. `js/tutor.js`+`pages/tutor.html`+`css/pages/tutor.css`, route `js/router.js`, card ở `tools.html` ("Hỗ trợ AI"). Server: task `tutor_chat` trong `ai-proxy` (multi-turn, cap 8 lượt, `TUTOR_SYS` chống injection, Lane2 DeepSeek **flash**, 1cr/tin nhắn). Client `ai-client.js v1.1` gửi `messages[]`. Pro-gate + handleBlock soft + escapeHtml XSS. Lịch sử local `tutor_chat_history_v1`.
  - ☑ **DEPLOY DONE 2026-06-04** — user đã `supabase functions deploy ai-proxy` (task `tutor_chat` live) + frontend đã push (`3cfb60a`). → **Gia sư AI R.2 FULL OPERATIONAL.** 📌 User nên chạy checklist verify (hỏi 二/两, multi-turn, lạc đề từ chối, Free→gate, XSS).
  - 📌 Verify sau deploy: hỏi "Phân biệt 二/两" → trả lời VN+Hán+pinyin, credit −1; multi-turn giữ ngữ cảnh; lạc đề/chính trị → từ chối; Free→gate; XSS-safe.
- ☐ Nội dung động/animated — chi phí cao, visual-novel Mai hiện đủ tốt → **không gấp**.

**App ĐANG VƯỢT** (giữ + dùng để marketing): Việt-first · HSKK exam · Writing Tutor · SpeechSuper thật · HSK 3.0 full · giá indie.

---

## 📚 Đối chiếu GIÁO TRÌNH CHUẨN + nâng cấp Bài tập & HSKK (review 2026-06-03)

> Nguồn đối chiếu: 《新HSK教程1》(FLTRP, 1/2026) + 《HSK1 学练手册》(demo PDF user gửi).
> Kết luận tổng: **app đạt & vượt giáo trình ở độ phủ + audio + story + luyện tập đa cấp**;
> thiếu vài thành phần "chuẩn giáo trình" và phần luyện kỹ năng nghe/nói trong bài tập.

### A. Khoảng trống so với giáo trình chuẩn (Phase P — Truyện Mai) — map 1-1 bảng đối chiếu
> 5 mục dưới đúng theo 5 dòng "Thiếu / Đạt-nhưng-tách-rời" của bảng so sánh app vs 《新HSK教程1》.

- ☑ **A1 · Mục tiêu bài (Objectives) DONE 2026-06-03** (merge `763bc3a`) — field `objectives:[]` (2–4 mục) cho cả 30/30 bài HSK 1; render khối "🎯 Mục tiêu bài này" trong `_renderIntro`.
- ☑ **A2 · Vocab nghĩa tiếng Anh DONE 2026-06-03** — auto-fill field `e` cho vocab `course-hsk1.js` từ `HSK3_DATA` (script `scripts/fill_course_en.py`, map h→e từ 9 file hsk3_lvl*). 532/538 khớp; 6 cụm để trống (KHÔNG bịa): 中国人/越南人/雨伞/看书/做题/第一. Render dòng `.cs-vc-en` khi có `.e`. **CÒN LẠI (chưa làm):** (1) **POS/từ loại** — `HSK3_DATA` KHÔNG có (field `t` = chủ đề), cần nguồn riêng (CC-CEDICT/nhập tay); (2) 6 từ trống bổ sung tay nếu muốn 100%; (3) chạy script tương tự cho `course-hsk2/3/4.js` khi cần.
- ☑ **A3 · Ngữ pháp tường minh trong bài (小语讲堂) DONE 2026-06-03** (merge `763bc3a`) — field `grammarNotes:[{point,explain,examples:[{zh,py,vi}]}]` (1–3 điểm/bài, ví dụ lấy/biến từ chính bài) cho cả 30/30 bài; `_grammarNotesHTML`/`_showGrammar`/`_closeGrammar` → nút "📘 Ngữ pháp bài" mở modal ở intro + khối ở `_renderComplete`. ☑ **QA DONE 2026-06-03** (commit `1b22057`, independent Opus review): data tự sinh chuẩn — chỉ 2 sửa nghĩa tiếng Việt (Bài 1 他=anh ấy; Bài 18 "nhìn thấy **được** rồi"), lượng từ/bổ ngữ/比/了/着 đều đúng → grammarNotes an toàn để dạy. `course-hsk1.js?v=1.1`.
- ☐ **A4 · Task sản sinh — đóng vai (角色扮演) + đọc to (跟读)** — giáo trình có roleplay + shadow cuối bài; app thay bằng MCQ `choice` (chỉ nhận biết). → thêm step `roleplay`/`shadow`, tận dụng TTS + ghi âm Speaking (`speech-proxy`) đã có.
- ☑ **A5 · Cross-link ngữ âm pinyin DONE 2026-06-03** (merge `763bc3a`) — card "🔤 Chưa chắc pinyin? Ôn nhanh" ở `_renderIntro` CHỈ Bài 1 → 3 nút link HSK 0 (`hsk0-pinyin-initials`/`finals`/`strokes`). Không build lại data.

### B. Nâng cấp BÀI TẬP course (`js/course.js` `_renderExercise`) — ưu tiên theo ROI
- ☑ **P1 (rẻ, ROI cao nhất) DONE 2026-06-03** (`course.js` v2.9 · `course.css` v2.0):
  - ☑ **Từ làm SAI → SRS** (`hsk_srs_v3`) — `_pushWrongToSRS(ex)` ở 3 commit point (`_answerWorkbook`/`_confirmOrder`/`_submitTranslate`): lấy token Hán trong `ex.answer` có trong `lesson.vocab` → `updateSRSCard(h, 0, {source:'course', source_lesson: id})`.
  - ☑ **`translate` chấm thật** — `_normalizeZh()` (bỏ dấu câu + space) + `_isExCorrect()` dùng chung. Đúng→xanh "✓ Chính xác"; sai→đỏ + đáp án. **Bonus:** sửa luôn 2 bug — `order` có `？` luôn báo sai + `_submitWorkbook` translate auto-pass.
  - ☑ **Field `explain`** optional → dòng `.cs-ex-explain` (💡 viền vàng) khi đã trả lời, áp cho fill/order/translate.
  - Verify Playwright `/course?id=1` HSK1 hard: sai→báo+đáp án+explain+SRS có 是/老师; đúng (kể cả thiếu ！+ space)→không đẩy SRS; light/dark/mobile, 0 lỗi console.
  - 📌 **Lưu ý kỹ thuật:** so-bằng-chuỗi (sau normalize) → nếu sau cần chấp nhận *nhiều biến thể đáp án* phải thêm `answers: []`. Chưa cần hiện tại.
- ☐ **P2:** thêm dạng `listen` (nghe TTS → chọn) + `dictation` (nghe → gõ Hán/pinyin) — dùng TTS sẵn có. Đây là dạng "chuẩn giáo trình" đang thiếu (听写 thanh/vận/điệu chiếm ~60% sách bài tập).
- ☐ **P3:** thêm `shadow` (đọc to → nối Speaking `speech-proxy`) + **sửa UX `order`** — `_confirmOrder` ([course.js:1117](../js/course.js)) gom từ theo thứ tự DOM, không theo thứ tự bấm → đổi sang click-to-append.
- ☐ **P4:** `image-choice` (nhìn ảnh chọn câu — giống 看图选对话). **Cần ảnh → xem mục D.**

> **Re-review 2026-06-03 vs 题型 ĐỀ THI HSK 3.0 thật** (không chỉ giáo trình 《新HSK教程1》): app mạnh đọc/viết/dịch/từ vựng/ngữ pháp, **phủ cả 5 kỹ năng 听说读写译** (译 = `translate`, đúng hướng 3.0) + 4 chiều nền 音节·汉字·词汇·语法. Nhưng 4 dạng 题型 dưới CHƯA có trong app/plan — bổ sung để "ngang chuẩn". Mật độ workbook HSK1 hiện: 439 `fill` · 145 `order` · 60 `translate` · 30 `checkpoint` · 24 `choice` (đếm thật `course-hsk1.js`).

- ☐ **P5 (gap lớn nhất về điểm thi): 听对话/短文 + câu hỏi MC (NGHE-HIỂU)** — khác P2 (P2 = 听写 dictation thanh/vận/điệu, mức âm tiết). Đây là nghe-hiểu **hội thoại/đoạn văn rồi chọn đáp án** (听对话选答案 · 听短文判断对错) — dạng chiếm phần lớn 听力 đề thật. Hiện mock "Nghe" chỉ nghe-1-từ→chọn-nghĩa (nhận diện từ vựng), KHÔNG phải comprehension. Tận dụng: audio hội thoại Truyện Mai sẵn (R2) + TTS. Dạng mới `listen-dialogue` / `listen-passage` trong `_renderExercise` + tích hợp vào mock-exam section 听力.
- ☐ **P6: 看图判断对错 + 看图选词** — bổ sung cho P4 (P4 mới có 看图选对话). 2 dạng tranh cốt lõi HSK 1–3: nhìn tranh phán đúng/sai 1 câu (`image-judge`) + nhìn tranh chọn từ/câu đúng (`image-word`). **Cần ảnh → mục D** (đời thường, trung tính). Gap nội-dung-type lớn nhất cho người mới.
- ☐ **P7: 完成对话 / 完成句子 + 看拼音写汉字** — (a) `complete-dialogue` điền lượt thoại còn trống trong 1 đoạn hội thoại (khác `fill` 1 câu rời); (b) `complete-sentence` hoàn thành câu theo ngữ cảnh; (c) `pinyin-to-hanzi` nhìn pinyin gõ/chọn chữ Hán — đan 汉字 vào cuối bài (hiện viết tay/笔顺 tách module riêng, chuẩn có 看拼音写汉字). Tái dùng chấm `_normalizeZh()` của P1.

### C. HSKK — cấu trúc CHUẨN (đã tra chính thức) + việc cần làm
> Nguồn: chinesetest.cn, đề thật H81312, SPbU testing center (xác nhận 2026-06-03).

| Cấp | Phần 1 | Phần 2 | Phần 3 |
|---|---|---|---|
| **初级 Sơ cấp** (app ĐANG CÓ ✅, đúng chuẩn) | 听后重复 15 câu/6′ | 听后回答 10 câu/4′ | 回答问题 2 câu/3′ |
| **中级 Trung cấp** (CHƯA có) | 听后重复 10 câu/3′ | **看图说话 (nhìn tranh nói) 2 câu/4′** | 回答问题 2 câu/4′ |
| **高级 Cao cấp** (CHƯA có) | 听后复述 | 朗读 (đọc đoạn văn) | 回答问题 |

- ☑ **HSKK Sơ cấp — chế độ "Luyện từng phần" DONE 2026-06-03** (merge `7ad285c`; `hskk.js` v1.6 · `hskk.css` v2.2): card Sơ cấp thêm 3 nút P1/P2/P3 + màn chọn số câu (5/10/Tất cả) `#hskkPracticeSetup`; `_startPractice`/`_doPractice` + state `_practiceMode` (Pro-gate + mic giống `_onStart`, `_exam`=toàn bộ pool, KHÔNG `_totalTimer`); header "Luyện · Câu i/N", nút "↺ Làm lại câu này" `#hskkRedoBtn`; P1 hiện credit-note + confirm trước khi vào; kết quả KHÔNG ghi lịch sử thi thật. Flow thi nguyên đề cũ giữ nguyên.
- ☐ **HSKK Trung cấp (中级)** — build mới. Điểm nhấn: **Phần 2 看图说话** = task nhìn tranh kể chuyện → **cần ảnh (xem mục D)**. Schema đề: `{ id, img|imgs[], topic, keywords[], outline, sampleAnswer }`. Chấm tự do cần SpeechSuper `speak.eval.pro.cn` (account hiện CHƯA có → để practice-no-grade như Phần 2/3 Sơ cấp).
  - ☑ **PREP DONE 2026-06-03** (chưa build UI/wire): (1) `docs/plans/hskk-zhongji-kantu.md` — bối cảnh chuẩn 中级 Phần 2 (2 câu × 2 tranh, ~2′/câu, vocab HSK1–4) + style string cố định + prompt template tham số hoá + 2 ví dụ điền + **25 chủ đề** trung tính + schema JS đầy đủ + 3 item ví dụ + quy trình 5 bước; (2) `content/assets/PROMPTS.md` append mục 看图说话 + bảng 5 đề MVP. ⚠️ Cả 2 file + script convert đều bị `.gitignore` (`docs/`,`scripts/`,`content/`) → **chỉ local, chưa share repo** (chờ user quyết force-add).

### D. ⭐ NGUYÊN TẮC: mọi phần cần ẢNH đều LÀM ĐƯỢC — chỉ cần viết PROMPT gen
> Chốt với user 2026-06-03. App đã có **asset pipeline** hoàn chỉnh (`content/assets/output/{wave}/` gen → process WebP → `assets/{category}/` → code đọc path `assets/`). Vì vậy bất kỳ feature cần hình (HSKK 看图说话, `image-choice` bài tập, visual vocab, story scene…) **không bị chặn bởi việc thiếu ảnh** — chỉ cần soạn prompt gen rồi chạy qua pipeline.
- ☐ Khi build feature cần ảnh: **viết prompt gen trước** (style nhất quán, đề tài đời thường, **trung tính — HARD RULE app KHÔNG chính trị**), gen → QA → cwebp → `assets/`, kèm metadata mỗi ảnh (không để ảnh trần).
- 📌 Ứng viên gần nhất cần kho ảnh: **HSKK 中级 看图说话** (cảnh sinh hoạt: họp lớp, gia đình, mua sắm, khám bệnh, du lịch…) + **`image-choice`** trong bài tập course.
- ☑ **Script convert DONE 2026-06-03** — `scripts/process-images.ps1` (PS 5.1 compatible): check `cwebp` trong PATH → thiếu thì in `winget install Google.WebP` + link manual; no-args in usage; loop PNG → `cwebp -q Q -resize W 0` → WebP, in KB trước/sau + % tiết kiệm. ⚠️ bị `.gitignore` (`scripts/`) → local-only tới khi force-add.
- 📌 Tham chiếu: `content/assets/PROMPTS.md` + `docs/plans/hskk-zhongji-kantu.md` + memory `[[asset-pipeline]]`.

---

## ☁️ Audio Mai → Cloudflare R2 (DONE 2026-06-01)

> Tách audio khỏi git để repo không phình (676 file ~17MB HSK1+2, sẽ lên 100MB+ khi HSK3-9). R2 egress free.

- ☑ **Bucket R2** `hanzigenz-assets` + custom domain public `cdn.hanzigenz.com` (Active). ⚠️ Lúc setup lỡ gán nhầm apex `hanzigenz.com` vào bucket → đã gỡ, chỉ giữ `cdn.`.
- ☑ **Upload** 676 file qua rclone (remote `r2`, token Object Read & Write) với `Cache-Control: public, max-age=31536000, immutable` → CDN cache, request lặp không tính Class B op.
- ☑ **Code** `js/course.js` v2.5: `MAI_AUDIO_BASE = 'https://cdn.hanzigenz.com/'` (đầu file, 1 chỗ). Để `''` = fallback local dev. `index.html` bump `?v=2.5`.
- ☑ **Script** `scripts/mai-tts-gen.py` header: ghi chú phải `rclone copy` lên R2 sau khi gen.
- ☑ **Gỡ audio khỏi git DONE 2026-06-01** (commit `f9d8162` "untrack local mp3") — `assets/mai/audio/` đã untrack (`git ls-files` = 0) + có trong `.gitignore` (dòng 73). R2 verified production: `cdn.hanzigenz.com/mai/audio/L10_1faa9424.mp3` → HTTP 200 `audio/mpeg`. *(History cũ vẫn còn file; muốn xoá hẳn cần `git filter-repo` — repo PUBLIC nên cân nhắc, hiện CHƯA làm.)*
- 📌 **Quy trình thêm audio sau này:** gen bằng `mai-tts-gen.py` (ghi ra `assets/mai/audio/` local) → **chạy lại** `rclone copy assets/mai/audio r2:hanzigenz-assets/mai/audio --header-upload "Cache-Control: public, max-age=31536000, immutable" --progress` (incremental, chỉ up file mới). KHÔNG commit MP3.
- 📌 **Mobile (Capacitor) sau này:** lấy audio từ R2 URL + cache vào Filesystem theo bài (tải-theo-nhu-cầu), KHÔNG bundle toàn bộ vào app.

---

## 🔒 Security — Escape user content TRƯỚC khi mở Phase V (Cộng đồng)

> **Lý do:** App render nhiều bằng `innerHTML` + nối chuỗi. Với nội dung biên tập sẵn
> (COURSE_DATA, vocab, grammar) thì an toàn vì ta kiểm soát. NHƯNG Phase V render nội
> dung do **user khác** nhập → nếu dùng `innerHTML` chuỗi thô → **stored XSS** →
> kẻ tấn công đọc `localStorage` lấy session token trong `hsk_user_cache` → chiếm tài khoản.

- ☑ **BLOCKER cho Phase V** DONE 2026-05-31 — Viết helper `escapeHtml(str)` + `escapeAttr(str)` trong `js/security.js`, load trước mọi module trong `index.html`. Dùng cho MỌI field do user nhập khi render bằng innerHTML.
- ☑ Audit nhanh các nơi đã nhận input user hiện tại DONE 2026-05-31 — Đã escape: feedback message/category/date (`js/feedback.js`), deck title (`js/decks.js` 6 điểm), tag names (`js/my-vocab.js` 3 điểm), vocab import preview (`js/vocab-import.js`), admin user display_name/email (`js/admin/users.js`).
- 📌 Note: localStorage tự thân không "bị hack" cho Pro/tiền (đã enforce server-side:
  `user_subscriptions`, PayOS webhook, `game_sessions`, AI credit RPC). Rủi ro DUY NHẤT
  đáng kể là XSS → trộm session. → escape user content là việc bắt buộc trước Phase V.

---

## 🔮 Hạ tầng AI Credit — Model C (2-bucket) DONE 2026-06-01

> Hạ tầng cho mọi feature AI hạng-2 (Phase R/S/Y). **Chưa build feature AI** — chỉ nền + 1 endpoint test (`ping`).

- ☑ **SQL `sql/v15_ai_credit.sql`** (CHẠY THỦ CÔNG Supabase, idempotent) — 2-bucket: `allowance_balance` (recurring tặng kèm Pro, lazy-reset đầu tháng theo `month_anchor`, use-it-or-lose-it) + `purchased_balance` (pack VND + welcome gift, KHÔNG hết hạn); `balance` = tổng (code cũ đọc cột này). RPC: `consume_ai_credit` ATOMIC tier-aware cap (Free 50/Pro 200, trừ allowance trước), `grant_ai_credit` (→purchased), `get_ai_credit_balance` (lazy-reset + status), `annotate_ai_ledger` (ghi model+cost). Ledger thêm `model_used`/`cost_actual`. RLS 4 policy auth.uid().
- ☑ **Edge Function `supabase/functions/ai-proxy/`** — JWT → consume atomic trước → route model whitelist hard-code 4-lane (Lane2 DeepSeek V4 xương sống → Qwen/GLM/Kimi; Lane3 Claude Sonnet CHỈ deepOnly + `deep=true`; fallback chỉ NGANG/XUỐNG, CẤM GPT). Model fail → hoàn credit. **API key chỉ ở đây (env)**.
- ☑ **`js/ai-client.js`** caller mỏng (KHÔNG key, KHÔNG logic trừ credit) + `handleBlock` soft (hết credit/quá cap không khóa app). `index.html` đã add `?v=1.0`.
- ☑ **UI**: badge `#topbarAICreditBadge` (đã có) + `AICredit` (`js/auth.js` v4.0) chuyển sang RPC `get_ai_credit_balance`, modal chi tiết (allowance vs purchased + lượt/ngày), cảnh báo 20%/5%/0%, click badge mở modal.
- ☑ **Welcome gift wired** vào `payos-webhook` — mua Pro tặng aiCreditBonus (100/250/400/600/1000) vào purchased bucket.
- ☑ **USER ops DONE 2026-06-01**: (1) đã chạy `sql/v15_ai_credit.sql` trên Supabase; (2) đã deploy `ai-proxy` + redeploy `payos-webhook`; (3) frontend đã push + deploy (Cloudflare).
- ☑ **DEEPSEEK_API_KEY đã set DONE 2026-06-02** — verify qua Phase S Writing Tutor: chấm bài thật trả JSON đúng, pipeline AIClient→ai-proxy→DeepSeek→annotate_ai_ledger chạy đầu-cuối. Các model key khác (Qwen/GLM/Kimi/Claude) set sau khi cần lane tương ứng.

---

## ✍️ Phase S — Writing Tutor DONE & verified 2026-06-02

> Feature AI hạng-2 ĐẦU TIÊN chạy thật trên hạ tầng AI Credit. `/writing` — viết đoạn văn tiếng Trung → DeepSeek V4 chấm.

- ☑ **Build** `/writing` (`pages/writing.html` + `js/writing.js` + `css/pages/writing.css`), route + `Writing.init()`. Task `essay_grade` 8cr Lane 2 DeepSeek qua `AIClient.call`. Lịch sử `writing_history_v1` (chỉ metadata).
- ☑ **Prompt kỷ luật chấm** — nhấn kiểm tra 量词 (bù điểm yếu DeepSeek) + chống over-correct (không bịa lỗi, giữ nguyên con số, improved nhất quán với errors). Mode HSK 1-6 + Ngẫu nhiên.
- ☑ **Verify bài thật (HSK 3)** DONE 2026-06-02 — bài test 2 lỗi 量词 trên nền câu đúng: AI bắt đúng `三个手机→三部手机` + `两个电脑→两台电脑`, **giữ nguyên số 三/两**, KHÔNG đụng `四个人` (个 cho người đúng) & câu đơn đúng, bản improved nhất quán. Score 82/100 hợp lý. JSON parse + render (score ring/errors/improved/tips) OK.
- 📌 Cụm AI Priority 1 còn lại: **Y (HSKK)** → **R (Speaking)**.

---

## 🎤 Phase Y — HSKK Speaking Exam · Sơ cấp practice-no-grade DONE 2026-06-03

> USP cao nhất cho thị trường VN. Mirror pattern Phase S: feature wired qua Edge Function server-only → user set key → chấm thật. Nguyên tắc "bài nào hoàn thiện bài đấy": chỉ làm trọn tier Sơ cấp, verify rồi mới scale Trung/Cao (2 card kia giữ "Sắp ra mắt").

- ☑ **Data** `js/data/hskk/so-cap.js` (var) — pool 20 听后重复 + 14 听后说 + 6 回答问题 (HSK 1-2, có pinyin+nghĩa), đề rút ngẫu nhiên đúng format thật **15/10/2**.
- ☑ **Edge `supabase/functions/speech-proxy/`** — JWT → `consume_ai_credit` ATOMIC TRƯỚC → SpeechSuper → refund (`grant_ai_credit`) nếu fail → `annotate_ai_ledger`. **API key CHỈ ở Deno env.** Chế độ **mock khi chưa set key** (vẫn trừ credit thật để nghiệm thu pipeline, model=`mock-no-key`). Task `hskk_score` = **1 credit/câu**.
- ☑ **`pages/hskk.html`** 3 màn: Giới thiệu (3 tier + mic check + cost note + lịch sử) · Thi (timer tổng + timer pha + waveform + nút) · Kết quả (tổng + breakdown 3 phần + per-câu nghe lại + gợi ý).
- ☑ **`js/hskk.js`** engine — flow nghe đề 1 lần → chuẩn bị → ghi âm MediaRecorder (webm/opus) → câu tiếp (không tua), waveform AnalyserNode, caller mỏng tới `speech-proxy` (KHÔNG key), lịch sử localStorage chỉ metadata (không lưu audio).
- ☑ **`css/pages/hskk.css`** viết lại — bỏ hardcode hex → token `var(--*)`, dark-safe, style 3 màn. **`js/router.js`** `hskk`→`HSKK.init()`. **`index.html`** +2 script + bump `hskk.css?v=2.0`. **`pages/practice.html`** card HSKK "Sắp ra mắt" → card Pro·AI vào `/hskk`.
- ☑ **Verify (Playwright, 0 lỗi console)** — render 3 tier/data 20-14-6/plan 15-10-2; chạy full bài rút gọn: ghi âm thật → `speech-proxy` đúng payload (repeat→`cn.sent.score`+refText; respond→`cn.pred.score` no ref) → kết quả (tổng 78, Phát âm 81/Trôi chảy 74, per-câu + nghe lại) → lịch sử chỉ metadata. Guard: chưa login→toast, login non-Pro→showGate. Bảo mật: escapeHtml mọi render, credit atomic server-side, key không client.
- ☑ **USER ops DONE 2026-06-03:** deploy `speech-proxy` + set `SPEECHSUPER_APP_KEY`/`SPEECHSUPER_SECRET_KEY` trên Supabase → **Phần 1 chấm THẬT chạy được trên production**.
- ☑ **Chuỗi fix go-live trên production (2026-06-03)** — toàn hạ tầng/wiring, không phải logic feature:
  1. **Nút "Bắt đầu thi" câm** → `router.js` sửa thêm `HSKK.init()` nhưng giữ `?v=4.4` → trình duyệt dùng router cache cũ. Fix: bump `router.js?v=4.5`.
  2. **`Permissions policy violation: microphone`** → `_headers` đặt `microphone=()` (chặn mọi origin). Fix: `microphone=(self)`.
  3. **POST 405** → `hskk.js` tính `SPEECH_FN` lúc module-load (trước `supabase.js`) → `SB_URL` undefined → URL tương đối về hanzigenz.com. Fix: `_speechFn()` resolve lúc gọi (`?v=1.1`).
  4. **503 `http_404`** → coreType `cn.sent.score`/`cn.pred.score` KHÔNG tồn tại. (+ phải redeploy speech-proxy whitelist.)
  5. **`ss_err_41002`** (audio format) → SpeechSuper nhận wav/mp3/opus/ogg/amr, **KHÔNG webm**. Fix: `_toWav16k()` decode→WAV PCM 16-bit/16kHz/mono client-side, gửi `audioType=wav` (`?v=1.3`).
  6. **`ss_err_51001` "core process start failed"** → coreType chưa khớp account. Lấy danh sách từ dashboard.
- ☑ **coreType ĐÚNG account (đã xác nhận từ dashboard 2026-06-03):** read-aloud TQ — `sent.eval.cn` (câu) · `para.eval.cn` (đoạn) · `word.eval.promax.cn` (từ). Host `api.speechsuper.com` + path `/{coreType}` + sig sha1 + multipart (text/audio) đã đúng theo mẫu chính thức. Phần 1 (听后重复) = đọc lại câu → `sent.eval.cn` + refText → **chấm thật OK**. (`hskk.js?v=1.4`)
- ☑ **Phần 2 & 3 practice-no-grade DONE 2026-06-03** — account hiện chỉ có read-aloud (cần refText), trong khi Phần 2/3 là **trả lời mở** (không có refText). Client `js/hskk.js?v=1.5` thêm `QTYPE.grade`: `repeat=true`, `respond/open=false` → Phần 2/3 **không gọi `speech-proxy`, không trừ AI Credit**, vẫn lưu blob/url trong phiên để nghe lại và kết quả hiển thị "Đã ghi âm · luyện tập (chưa chấm tự động)". **Bật lại sau:** khi SpeechSuper mở **Spontaneous Speech** (`speak.eval.pro.cn`), đổi `respond/open` sang `grade:true` + giữ `coreType:'speak.eval.pro.cn'`, verify full bài rồi mới tính credit cho 2 phần này.
- 🧪 **TEST helper còn trong `speech-proxy`:** secret `SPEECHSUPER_CORETYPE` (override coreType để thử nhanh) — **nhớ xóa** khi không test. `console.error` log full SpeechSuper response khi lỗi (giữ lại, hữu ích).
- 🚧 **Guardrail:** HSKK Pro-gate · KHÔNG thưởng AI credit qua quest · KHÔNG quest lặp cho feature AI hạng-2.
- 📌 **Storage key:** `hskk_history_v1` (metadata, không audio).
- **Next:** (1) verify production sau Cloudflare deploy bản practice-no-grade → (2) scale Trung/Cao; nếu SpeechSuper bật `speak.eval.pro.cn` thì bật lại chấm AI cho Phần 2/3 trước khi scale.

---

## 🎙️ Phase R — Speaking & Pronunciation · R.1 Shadowing DONE 2026-06-03

> Nguyên tắc "bài nào hoàn thiện bài đấy": đã ship trọn R.1 Shadowing trước, chưa đụng R.2 AI Chat.

- ☑ **Data** `js/data/speaking/shadowing.js` (var `SHADOW_DATA`) — 10 bộ / 90 câu HSK 1-6, phủ thanh điệu, zh/ch/sh vs z/c/s, j/q/x + ü, n/l/-n/-ng, biến điệu 一/不, nhịp câu ngắn/dài, đời sống, đi lại, lập luận.
- ☑ **UI** `/speaking` (`pages/speaking.html` + `css/pages/speaking.css`) — 2 màn: chọn bộ + luyện từng câu; Calm Study UI token-based, dark/light/mobile-safe, không cần asset ảnh.
- ☑ **Engine** `js/speaking.js` — TTS mẫu, MediaRecorder, waveform, nghe lại free, WAV 16kHz mono trước khi gửi SpeechSuper, caller mỏng tới `speech-proxy` (KHÔNG key client), Pro-gate khi chấm, lịch sử `speaking_history_v1` metadata-only (không lưu audio).
- ☑ **Wiring** — `router.js` `/speaking` → `Speaking.init()`; `index.html` thêm `speaking.css?v=1.0`, `shadowing.js?v=1.0`, `speaking.js?v=1.0`; `pages/practice.html` card Speaking chuyển sang "Mới · Pro · AI".
- ☑ **Verify local browser** — `/speaking` render 10 set; mở set → câu đầu + controls đúng; stub auth/pro/mic/fetch xác nhận payload `task:'hskk_score'`, `coreType:'sent.eval.cn'`, `refText:'妈妈骑马。'`, `audioType:'wav'`; render score 82 + per-syllable + replay; light/dark/mobile 390px OK; 0 console errors.
- ☑ **Re-verify độc lập DONE 2026-06-03** — chạy lại full luồng qua preview: 10 bộ/90 câu render; mở bộ → câu + Next/Prev OK; stub mic (oscillator stream thật) → `_toWav16k` ra audio header **RIFF/WAV** thật → payload đúng 5 trường → render điểm 82 + 3 mini (85/78/90) + per-âm-tiết tô màu (妈妈 good · 骑 mid · 马 low) + nhãn "SpeechSuper sent.eval.cn · 1 credit" + history metadata. **Guard verified:** chưa login → toast "Đăng nhập…"; login non-Pro → `Monetization.showGate`. 0 console error; card text đọc được cả light/dark (mọi text có màu token riêng).
- ⚠️ **Lưu ý history git:** file Phase R bị gộp nhầm vào commit `e291a46` ("HSK 4 Batch 5") do 2 session song song chung working dir. Work không mất (tracked + sạch); KHÔNG rewrite history (HSK4 đang build tiếp trên đó). Lần sau chạy song song nên dùng **worktree riêng** để tránh quét chéo `git add`.
- 🚧 **Guardrail:** Speaking Pro-gate khi chấm AI · KHÔNG thưởng AI credit qua quest · KHÔNG quest lặp cho feature AI hạng-2 · luyện không chấm miễn phí.
- 📌 **USER ops còn treo:** xóa secret test `SPEECHSUPER_CORETYPE` trong `speech-proxy` khi không cần test override nữa.
- 📌 **R.2 còn treo:** AI Chat cần thêm task chat trong `ai-proxy` (vd `tutor_chat`, Lane 2 DeepSeek) + redeploy; chấm nói tự do vẫn chờ SpeechSuper bật `speak.eval.pro.cn`.

---

## 🔥 CLB Chuỗi (Streak Club) — Bảng Phong Vân DONE 2026-06-01

> "Vinh danh bằng học" tách khỏi Sảnh Vinh Danh donor. Tự lên theo mốc 7/30/100/365 ngày liên tiếp (anti-toxic, không xếp hạng gắt).

- ☑ **SQL `sql/v16_streak_club.sql`** — RPC `get_streak_club()` tính chuỗi từ `user_leaderboard_activity` (gaps & islands), KHÔNG cần data mới, tái dùng opt-in của Bảng Phong Vân. **Đã chạy trên Supabase 2026-06-01.**
- ☑ **Client** `js/leaderboard.js` (v1.1) + `pages/leaderboard.html` + `css/pages/leaderboard.css` — section 🔥 CLB Chuỗi dưới bảng: chuỗi của bạn + mốc kế + thành viên từng mốc. Soft-fail nếu chưa có RPC.
- 📌 Sảnh Vinh Danh donor (Hộp Ân Cần) **giữ nguyên vai** — không trộn streak vào.

---

## 🗺️ Truyện Mai tabs cấp + Bản đồ HSK hành trình DONE 2026-06-01

- ☑ **Truyện Mai** (`js/course.js` v2.3): tabs HSK 1/2/3, gom path theo `lesson.level`. **Fix bug ẩn bài 47-71** (chapter range cũ tới 46). Node hiện kèm tên bài. Fix dark-mode tab active.
- ☑ **Bản đồ HSK** (`js/ban-do-hsk.js` v1.2): vẽ lại thành hành trình HSK 0 (Nền tảng) → 9 cấp. Cấp có Truyện Mai (1-2) = mode 📖 Truyện, % theo số bài; cấp khác = từ vựng. HSK 0 khuyến nghị nhưng không khóa HSK 1; khóa mềm theo tiến độ.

---

## 📖 Mai Curriculum — Giáo trình chính (Master Plan CHỐT 2026-05-29)

> Chi tiết đầy đủ: `docs/implementation_plan.md` → "Mai Curriculum — MASTER PLAN".
> Định vị: giáo trình CHÍNH, phủ 100% wordlist/cấp, visual-novel + audio per-voice.
> Baseline: HSK 1 mới phủ 187/510 từ (36.7%) → cần coverage-driven, không viết tự do.

**Mô hình phủ phân tầng:** ~15-18 bài core (visual-novel đầy đủ, từ tần suất cao) + ~8-12 đọc thêm (nhẹ, phủ nốt → 100%). Chia bằng frequency ranking.

**🧱 NGUYÊN TẮC XÂY DỰNG (CHỐT 2026-05-31): "bài nào hoàn thiện bài đấy" (dọc, không ngang).**
> Từ nay xây Truyện Mai theo chiều DỌC: mỗi bài làm TRỌN VẸN đủ thành phần rồi mới sang bài kế — không làm 1 thành phần trải hết mọi bài. Mục tiêu: bài đã ship là dùng được ngay 100%.
>
> **Definition of Done — 1 bài Mai hoàn thiện = đủ 8 mục:**
> 1. **Thoại** đầy đủ (`steps` dialogue + `cast`/`scene`/`bg` + tag `vocab` mỗi câu)
> 2. **Choice step** ≥1 (active recall, distractor hợp lý, convergent — không rẽ nhánh)
> 3. **Checkpoint** (quiz nhanh giữa/cuối bài)
> 4. **Vocab list** (`lesson.vocab` = {h,p,v})
> 5. **Workbook** 3 mức (`workbook.normal/hard/...`)
> 6. **Audio** TTS per-voice (`scripts/mai-tts-gen.py`, skip-if-exists, content-hash slug)
> 7. **Handout** ("Trang chép bài") — auto-derive đã đủ baseline cho MỌI bài; bài CORE nên enrich field `lesson.handout` (story_brief + vocab_highlight 🔥 + mascot_tips + copy_guide riêng)
> 8. **Cliffhanger hook** cuối bài (B5④, lồng khi viết) + **coverage** từ nằm trong wordlist cấp
>
> **Workflow thực tế (hybrid):** soạn nội dung mục 1-5+7-8 trọn 1 bài (Opus), rồi chạy batch mục 6 (audio) + verify coverage cho bài đó (rẻ, skip-if-exists). Done bài → commit bài → sang bài kế.

**Trình tự PROTOTYPE-FIRST:**
- ☑ **B0 — Bài 1 prototype** DONE 2026-05-29: `course.js` v1.3 — visual-novel renderer (`_renderDialogueVN`): stage gradient + cast row (active/inactive/speaking pulse T1) + scene-tag + narrator-card + dlg box (speaker chip màu + pinyin toggle + hanzi 1.85rem + nghĩa). VN_CHARACTERS map (narrator/laoli/mai/xiaomei), `_vnTts` per-voice pitch/rate + fallback Web Speech. Data: `course-lessons.js` v1.1 Bài 1 — 2 narrator steps + `cast`/`scene` cho 14 dialogue steps. Fallback emoji onerror (laoli/xiaomei chưa có ảnh). CSS: `course.css` v1.1 — `.cs-vn-*` classes.
- ☑ **B1-design — Style guide art DONE 2026-05-29**: `content/curriculum/mai-art-style-guide.md` — 4 phần: style guide (anchor Mai ảnh), prompt 3 nhân vật × (character sheet + 6 expr), prompt classroom bg, output spec + pipeline (paths khớp VN_CHARACTERS). Chờ user gen ảnh qua Nano Banana Pro + process cwebp → `assets/mai/cast/` + `assets/mai/scenes/`.
- ☑ **B1-mapping — Mapping 510 từ HSK 1 DONE 2026-05-29**: `scripts/mai-hsk1-coverage.js` → `content/curriculum/mai-hsk1-coverage-map.md`. 12 bài cũ phủ 187/510 (giữ nguyên word assignment), 18 bài mới (Bài 13–30) phủ nốt 323 từ. Phân tầng: 21 CORE (12 truyện + 9 mới: động từ/từ chức năng/thời gian/đại từ-số/người thân) + 9 ĐỌC THÊM (địa điểm/tính từ/đồ vật/trường lớp/xã giao/giao thông+tail). Verify script: **510/510, mỗi từ đúng 1 lần, không thiếu**. Bảng [Bài|tầng|chủ đề|từ bắt buộc] là input cho B2 viết thoại.
- 🟡 **B2 — Sản xuất trọn HSK 1**: content-gen agent (Opus + **prompt caching**) viết thoại bám wordlist · asset Nano Banana Pro (sprite tách nền + bg, KHÔNG nướng chữ) qua `D:/asset-gen-agent/` · audio Edge TTS per-voice (skip-if-exists) · verify coverage 100%.
  - ☑ **B2-text — Viết trọn 30 bài thoại DONE 2026-05-30**: `js/data/course-lessons.js` v1.3 — thêm Bài 14–30 (17 bài: 14-21 CORE full visual-novel + checkpoint giữa bài + workbook 3 mức; 22-30 ĐỌC THÊM gọn ~8-9 step). Verify coverage script: **Bài 14-30 ALL PASS, 305 từ, mỗi từ phủ đủ thoại+tag+vocab**. Cùng dàn cast (narrator/mai/laoli/xiaomei), bg dùng 8 scene có sẵn, expression Mai hợp lệ. HSK 1 nay phủ **510/510 = 100%** (Bài 1-13 cũ + 14-30 mới). `index.html` bump `course-lessons.js?v=1.3`. ⚠️ Bài 1-12 (truyện cũ) chưa có mảng `vocab`/tag chuẩn → ngoài phạm vi checker strict (giữ nguyên theo yêu cầu).
  - ☑ **B2-asset DONE 2026-05-30**: cast `assets/mai/cast/{laoli,xiaomei}.webp` + 8 scenes `assets/mai/scenes/*.webp` (classroom/dorm-room/campus/cafeteria/library/street/home/clinic) + 6 expressions `assets/mai/expressions/*.webp` (happy/sad/surprise/curious/focused/confused) — tất cả đã committed vào git. QA B3 xác nhận: tất cả assets HEAD→200, naturalWidth>0, render đúng (không fallback emoji/gradient). Bài 2-12 truyện cũ dùng legacy renderer (không cast), đúng thiết kế.
  - ☑ **B2-audio DONE 2026-05-30**: `scripts/mai-tts-gen.py` — parse COURSE_DATA qua Node eval, gen 317 MP3 vào `assets/mai/audio/L{id}_{stepIdx}.mp3` (317 files, 5.9 MB). Voice map: mai→XiaoyiNeural · laoli→YunjianNeural(-8%) · xiaomei→XiaoxiaoNeural(+8%, XiaohanNeural đã bị remove khỏi Edge TTS service) · class→XiaoxiaoNeural · narrator→YunxiNeural. Skip 2 narrator VN-text (Bài 1 step 0/8). `js/course.js` v1.6: `_vnTts` dùng `new Audio(src).play()` → fallback Web Speech (non-narrator); narrator VN-text fallback silent. Auto-play narrator bật lại (bỏ `!isNarrator` guard). Verify: L1_9/L13_0/L13_1 → 200 OK, 0 console errors.
- 🟡 **B3 — Ship HSK 1 flagship** → feedback. Audio/video scale → Cloudflare R2 / Supabase Storage.
  - ☑ **B3-verify Bài 1 end-to-end DONE 2026-05-30**: preview test — intro/dialogue VN/choice (sai→feedback+retry, đúng→Tiếp)/checkpoint/complete (+50 XP, 24 từ→SRS) đều OK; audio content-hash **16/16 resolve 200**; "Hôm nay" trộn 3 render đúng; console 0 lỗi. **Fix bug**: narrator step text thuần Việt (đã skip ở TTS gen) vẫn bị `_vnTts` fetch → 404 mỗi lần; thêm guard CJK mirror `mai-tts-gen.py` (narrator không có chữ Hán → im lặng, không fetch). `course.js` v1.9 (`index.html` bump). Verify spy `Audio`: narrator=0 call, dialogue có Hán=1 call file đúng.
  - ☑ **B3-ship-readiness QA DONE 2026-05-30**: preview QA toàn bộ — (1) 8/8 scene WebP HEAD→200; laoli/xiaomei cast + 6 expression files đều load naturalWidth>0; stage bg render đúng; (2) bg key audit: 34 refs × 8 valid scene names → 0 lệch; (3) expression audit: 123 refs → 6 valid names → 0 lệch; (4) 30 bài load + render 0 lỗi JS, 0 console error; (5) VN mode (Bài 1,13-30) render `.cs-vn-stage` + cast đúng; legacy mode (Bài 2-12) render `.cs-scene` đúng — đây là thiết kế đúng (Bài 2-12 không có `cast` field). **SHIP-READY** — không có fix code nào cần thiết. Chờ B2-asset polish sprite laoli/xiaomei (T2 video loop idle) để nâng lên production polish.
  - ☐ B3-ship: chờ B2-asset polish (T2 video loop idle sprite laoli/xiaomei) rồi gom feedback user thật.
- ☑ **B4 — Scale HSK 2 DONE 2026-05-31** — 41 bài (31–71), 754/754 từ, coverage-driven pipeline.
  - ☑ **B4-mapping DONE 2026-05-30**: `scripts/mai-hsk2-coverage.js` map **754 từ HSK 2** → **41 bài** (35 CORE + 6 ĐỌC THÊM, Bài 31–71). Output `content/curriculum/mai-hsk2-coverage-map.md`. Phân tầng theo topic tag + frequency.
  - ☑ **B4-text (41/41 bài) DONE 2026-05-31** — Bài 31–71 hoàn thành. Coverage **754/754 = 100%** (verify script PASS). Mỗi bài đủ DoD: thoại + choice + checkpoint + vocab + workbook 3 levels. Bài 31–46 (312 từ) + 47–65 CORE (360 từ) + 66–71 đọc thêm (82 từ).
  - ☑ **B4-audio DONE 2026-05-31** — commit `8783fff`: `scripts/mai-tts-gen.py` gen 359 MP3 cho Bài 31–71 (edge-tts, skip-if-exists). `assets/mai/audio/` ~17MB (676 file HSK1+2 — chạm ngưỡng 15MB, cân nhắc R2 trước khi thêm HSK3).
  - ☑ **B4-verify DONE 2026-05-31**: coverage 754/754 PASS + syntax OK + audio 676 files (L47-L71 có đủ) + sample lessons (47/65/71) render đúng DoD.
  - ☑ **Refactor tách file DONE 2026-05-31**: `course-lessons.js` (6126 dòng) → `js/data/course/course-data.js` (container `var COURSE_DATA = COURSE_DATA||{}`) + `course-hsk1.js` (Bài 1-30, Object.assign) + `course-hsk2.js` (Bài 31-46). Pattern khớp `hsk3_lvl{N}`. `index.html`: 1 thẻ → 3 (data trước). 2 loader (`mai-hsk1-coverage.js`, `mai-tts-gen.py`) đọc cả thư mục `js/data/course/*.js` (sort → container trước). Verify: node -c 3 file OK · coverage 510/510 PASS · TTS dry-run 504 bước (đọc đủ 46 bài) · preview 46 bài, console 0 lỗi. Cấp HSK mới sau này = thêm `course-hsk{N}.js` + 1 thẻ index.html.

**P12 — Trang chép bài (Lesson Handout)** — ☑ **DONE 2026-05-31** commit `e9f02de`: hiện thực màn "đọc trên app → tự chép vào vở" (design `42-lesson-handout`, bàn từ 2026-05-22). `js/handout.js` + `css/pages/handout.css` + `pages/handout.html` + route `/handout?id=N` + entry nút "📔 Trang chép bài" ở màn complete (`course.js`). **Auto-derive từ COURSE_DATA → chạy ngay cho cả 46 bài** (header + mục tiêu + tình huống + bảng từ + hội thoại + "Mở vở ra hôm nay chép gì?" 4 việc + toolbar Copy/In-PDF/Đã-chép-xong +15XP lưu `hsk_handout_completed`). Field tùy chọn `lesson.handout` (story_brief/vocab_highlight/mascot_tips/copy_guide) override khi enrich CORE sau. Verify Bài 14 + Bài 1 cũ render OK, console 0 lỗi.

**UI lộ trình + polish (2026-05-31):**
- ☑ **Lộ trình rõ hơn** commit `42bb819`: `_lhRenderTimeline` theo pattern app top (Duolingo/HelloChinese) — Truyện Mai = spine "Giáo trình chính" + 1 marker "Bạn ở đây" (đồng bộ hero); 9 deck HSK gom thành 1 accordion "Kho từ vựng theo cấp" (off-path, thu gọn). `learn-hub.js` v1.3, `learn.css` v1.2.
- ☑ **Bỏ emoji đè ảnh nhân vật** commit `1f0fb20`: `course.js` v2.1 — cast có ảnh thì ẩn emoji (chỉ hiện lại khi ảnh lỗi), cả dialogue + choice path.

**B5 — Engagement / chống chán (CHỐT 2026-05-30)** — lộ trình tuyến tính KHÔNG phải nguyên nhân chán; chán đến từ *mỗi bài cùng khuôn + bấm "Tiếp" thụ động*. Nguyên tắc: làm đúng 2 đòn bẩy cốt lõi, KHÔNG nhồi đủ 4 cơ chế (over-engineer).
- ☑ **① Choice step (ƯU TIÊN)** — DONE 2026-05-30: renderer `choice` (`js/course.js` v1.8) + content nhân rộng. **Bài 1-21 CORE đều có choice** (22 choice: Bài 19+20 có 2, còn lại 1 mỗi bài); distractor đa dạng (sai từ/lượng từ/trật tự/ngữ cảnh/hướng/vai), feedback từng đáp án, từ trong wordlist của bài. CONVERGENT (1 mạch, không rẽ nhánh), coverage 510/510 vẫn PASS. Kèm fix audio keying: đổi tên file audio theo **content-hash slug** (`L{id}_{djb2(speaker|text)}.mp3`) thay vì index → chèn choice không phát nhầm tiếng (`Course._audioSlug` ⇄ `scripts/mai-tts-gen.py slug_for`, 317 file regen). Bài 22-30 ĐỌC THÊM: chưa thêm choice (tùy chọn).
- ☑ **③ "Hôm nay" trộn hoạt động (RẺ)** — DONE 2026-05-30 (commit `8ed9aae`): `js/learn-hub.js` v1.1 `_lhRenderToday` + `learn.html` grid 3 card + `learn.css` `.lh-today-*`. Section "Hôm nay" = Bài mới (Truyện Mai, auto next bài chưa xong) + Ôn SRS due + Game/Daily, định tuyến sang tính năng có sẵn (không build mới). Verify B3: render đúng — Bài 1 / 19 từ SRS / Racing Quiz.
- 🟢 **④ Cliffhanger + cột mốc** — LỒNG gần như miễn phí: Opus thêm hook cuối mỗi bài khi viết content; cột mốc tận dụng gamification có sẵn (XP/streak/outfit Bé Rồng). KHÔNG build riêng.
- ⏸ **② Đa dạng cấu trúc bài** — HOÃN/đo: phần lớn bị ① hấp thụ (có choice là bài đã tự khác nhau). Chỉ làm chọn lọc (vài bài đặc biệt) NẾU sau ship B3 vẫn thấy đơn điệu — không làm đại trà, không làm trước feedback.
- **Thứ tự:** ship ① + ③ → đo phản hồi thật → mới quyết ②. Model: Sonnet (renderer+wiring+③) · Opus (viết choice content nhân rộng). Prompt handoff đã soạn.

**B5 — Engagement / chống chán (CHỐT 2026-05-30)** — lộ trình tuyến tính KHÔNG phải nguyên nhân chán; chán đến từ *mỗi bài cùng khuôn + bấm "Tiếp" thụ động*. Nguyên tắc: làm đúng 2 đòn bẩy cốt lõi, không nhồi đủ 4 cơ chế (over-engineer).
- ☑ **① Choice step (ƯU TIÊN)** — DONE 2026-05-30: renderer `choice` (`js/course.js` v1.8) + content nhân rộng. **Bài 1-21 CORE đều có choice** (22 choice: Bài 19+20 có 2, còn lại 1 mỗi bài); distractor đa dạng (sai từ/lượng từ/trật tự/ngữ cảnh/hướng/vai), feedback từng đáp án, từ trong wordlist của bài. CONVERGENT (1 mạch, không rẽ nhánh), coverage 510/510 vẫn PASS. Kèm fix audio keying: đổi tên file audio theo **content-hash slug** (`L{id}_{djb2(speaker|text)}.mp3`) thay vì index → chèn choice không phát nhầm tiếng (`Course._audioSlug` ⇄ `scripts/mai-tts-gen.py slug_for`, 317 file regen). Bài 22-30 ĐỌC THÊM: chưa thêm choice (tùy chọn).
- ☑ **③ "Hôm nay" trộn hoạt động (RẺ)** — DONE 2026-05-30 (commit `8ed9aae`): `js/learn-hub.js` v1.1 `_lhRenderToday` + `learn.html` grid 3 card + `learn.css` `.lh-today-*`. Section "Hôm nay" = Bài mới (Truyện Mai, auto next bài chưa xong) + Ôn SRS due + Game/Daily, định tuyến sang tính năng có sẵn (không build mới). Verify B3: render đúng — Bài 1 / 19 từ SRS / Racing Quiz.
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

## 📚 Tài nguyên bổ trợ — Mở rộng nội dung HSK 1-6 + Redesign card (2026-06-02)

> **Trigger:** Card "Ngữ pháp HSK" quảng cáo "HSK 1-9 · 9 cấp độ" nhưng data chỉ có HSK 1-2; card "Luyện đọc & nghe" ghi "HSK 1-6" nhưng cũng chỉ HSK 1-2. Nút cấp độ chỉ 2 (HSK 1,2); code Pro-gate HSK 3-6 dẫn tới danh sách rỗng → lệch quảng cáo, "không rõ mục đích" (tiếp nối ghi chú 2026-05-28 dòng 153). Nội dung HSK 1-2 đã đúng → GIỮ NGUYÊN.

### Part 1 — Mở rộng data (chính xác, biên soạn mới)

- ☑ DONE 2026-06-02 — **Ngữ pháp HSK 3-6** (`js/data/grammar.js`): +42 mẫu câu (HSK3: 12, HSK4: 12, HSK5: 10, HSK6: 8). Tổng 72 mẫu (1-6). Mỗi mẫu: pattern + giải thích VI/EN + 2 ví dụ zh/py/vi/en.
- ☑ DONE 2026-06-02 — **Đọc hiểu HSK 3-6** (`js/data/readings.js`): +18 bài (HSK3: 6, HSK4: 5, HSK5: 4, HSK6: 3, dài & trừu tượng dần). Tổng 38 bài (1-6). Mỗi bài: text + pinyin + 2 câu hỏi.
- ☑ DONE 2026-06-02 — Thêm nút cấp độ HSK 3-6 (kèm 🔒) vào `pages/grammar.html` + `pages/reading.html`; CSS `.lvl-lock` + `flex-wrap` cho thanh chọn cấp (`css/pages/reading.css`).

### Part 2 — Tác dụng + tiến độ + trung thực badge

- ☑ DONE 2026-06-02 — **Redesign 2 card** (`pages/learn.html` + `css/pages/learn.css`): thêm dòng **tác dụng** ("Hiểu cấu trúc câu để tự đặt câu đúng…" / "Ghép từ đã học thành câu thật…"), **thanh tiến độ thật** + đếm (x/72 mẫu, x/38 bài), badge sửa về **"HSK 1-6"** (bỏ "9 cấp độ"/"HSK 1-9" sai).
- ☑ DONE 2026-06-02 — `js/learn-hub.js` `_lhRenderResources()` tính tiến độ từ `grammar_progress_v1` + `reading_progress_v1`.
- ☑ DONE 2026-06-02 — **Theo dõi tiến độ đọc** (`js/reading.js`): storage key mới `reading_progress_v1`, đánh dấu bài đã đọc khi trả lời hết câu hỏi.
- ☑ DONE 2026-06-02 — Ẩn 🔒 cho user Pro (`body.is-pro`) trong `grammar.js`/`reading.js` setup.

### Verify (browser preview)
- Data parse OK: grammar {1:15,2:15,3:12,4:12,5:10,6:8}, readings {1:10,2:10,3:6,4:5,5:4,6:3}.
- Card render "72 mẫu câu"/"38 bài đọc"; HSK3 grammar 12 cards + quiz OK; reading HSK3 6 bài mở được; tiến độ đọc cập nhật 1/38 (3%). Light + dark + mobile (390px wrap 2 hàng) đạt.

### Files thay đổi
| File | Thay đổi |
|---|---|
| `js/data/grammar.js` | +GRAMMAR_DATA[3..6] (42 mẫu) |
| `js/data/readings.js` | +READINGS_DATA[3..6] (18 bài) |
| `pages/grammar.html` · `pages/reading.html` | +4 nút cấp độ HSK 3-6 (🔒) |
| `pages/learn.html` | Redesign 2 card: tác dụng + progress bar + badge "HSK 1-6" |
| `css/pages/learn.css` | `.lh-rc-purpose/-progbar/-progfill/-foot/-count` + hover lift |
| `css/pages/reading.css` | `.lvl-lock`, flex-wrap thanh chọn cấp |
| `js/learn-hub.js` | `_lhRenderResources()` |
| `js/reading.js` | `reading_progress_v1` + `_markRead()` + ẩn lock Pro |
| `js/grammar.js` | ẩn lock Pro |
| `index.html` | Bump `?v` cho 7 file CSS/JS |

> **Storage key mới:** `reading_progress_v1` = `{ passageId: true }` (đánh dấu khi trả lời hết câu hỏi).

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

## 🎯 Quest & Thành tựu — mở rộng theo bề mặt tính năng (DONE 2026-06-02)

> **Bối cảnh:** app ngày càng nhiều module/feature (AI Tutor, HSKK, chấm essay, Story gen tùy biến, Mock exam, Topics, Text Analyzer, Mai curriculum HSK1+2…). Hệ quest/thành tựu hiện chỉ phủ core cũ (học từ/quiz/streak/mock) → **chưa "đón" các feature mới** → user không được dẫn dắt khám phá, feature mới ít được dùng.

**✅ DONE 2026-06-02** — Mở rộng quest & badge system phủ features mới:
- ☑ **Quest mới** — Daily: `mai_first` (1 bài), `topic_try` (1 chủ đề), `analyze_text` (1 lần), `mai_3` (3 bài), `mock_try` (pass 1 thi thử); Hard: `mai_5` (5 bài); Weekly: `w_mai_10` (10 bài/tuần), `w_3_mock` (3 thi thử/tuần). Total 8 quests mới.
- ☑ **Metrics tracking** — `mai_lessons`, `topics_tried`, `text_analyzed`, `mock_passed` (4 metrics mới thêm vào quest engine).
- ☑ **Wiring** — `course.js` track khi complete bài Mai; `mock-exam.js` track khi pass (≥60%); `topics.js` track khi startSession; `text-analyzer.js` track khi analyze.
- ☑ **Badges mới** — `mai10` (10 bài), `mai30` (30 bài), `mockpass` (thi thử đầu), `explorer` (chủ đề đầu), `analyzer` (text analyzer đầu). Profile snapshot đọc từ `hsk_progress_course` + quest metrics.
- ☑ **Version bump** — `index.html` bump 6 file: `quests.js?v=1.4`, `topics.js?v=1.5`, `course.js?v=2.7`, `mock-exam.js?v=1.1`, `text-analyzer.js?v=1.1`, `profile.js?v=1.1`.

**🚧 GUARDRAIL tuân thủ:**
- ✅ KHÔNG thưởng AI Credit qua quest (chỉ token cosmetic + XP + badge).
- ✅ Quest feature miễn phí (Mai/Topics/Text/Mock) → thoải mái; AI hạng-2 (Writing/HSKK) → KHÔNG quest lặp.
- ✅ Quest = HỌC thật (không time-grinding "mở app N lần").

**Kết quả:** Mỗi feature mới giờ có ≥1 quest onboarding (khám phá) + badge cột mốc → dẫn user thử → tăng engagement.

---
