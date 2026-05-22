# 🎯 Hanzi Genz — Product Tier Matrix

> Bảng tổng hợp tính năng × tier (Free/Pro) × token cost. Source-of-truth khi cần lock pricing decisions.
> **Last updated:** 2026-05-21
> **Liên quan:** [REVENUE_PROJECTION.md](REVENUE_PROJECTION.md) · [GAMIFICATION_PLAN.md](GAMIFICATION_PLAN.md) · [`js/data/plans.js`](../js/data/plans.js)

---

## 🧭 Triết lý

1. **Core học tập = FREE đầy đủ** — SRS, flashcard, HSK 2.0/3.0 đều free. Không gate kiến thức cơ bản.
2. **Pro = QUALITY + QUANTITY của AI/advanced**, không phải "tính năng cơ bản bị khóa".
3. **Token = byproduct của HỌC**, không phải currency mua trải nghiệm cơ bản.
4. **Free user vẫn dùng được app hàng ngày** mà không bực bội.
5. **Pro user feel premium** qua: AI allowance rộng, nội dung/game không giới hạn, quality cao hơn, exclusive content.
6. **2 tiền tệ tách bạch:** Token (mềm — kiếm từ học, mua cosmetic) ≠ AI Credit (cứng — gắn chi phí API, từ allowance/mua tiền). KHÔNG quy đổi lẫn nhau.

---

## 💎 Pro Tier Mechanics (v2 — 2026-05-21)

| Tier | Giá | AI Credit allowance/tháng | Tặng kèm khi mua |
|------|-----|---------------------------|-------------------|
| **Free** | 0 | Nếm 3-5 lượt/tháng | — |
| Linh hoạt | 75k/1m | Rộng* | — |
| Chăm chỉ | 199k/3m | Rộng* | — |
| Bứt phá | 329k/6m | Rộng* | — |
| **Tiết kiệm** ⭐ | 499k/12m | Rộng* | gói AI Credit + bộ cosmetic Bé Rồng |
| Trọn đời | **1.490.000đ**/lifetime | = gói tháng (KHÔNG unlimited) | gói AI Credit lớn + cosmetic Bé Rồng cao cấp |

*Allowance "Rộng" = đủ cho ~95% user dùng đều đặn không chạm trần. Con số cụ thể chốt sau khi có data dùng thật (ra mắt rộng tay → siết nhẹ theo phân bố).

**Token tier-neutral:** Free và Pro kiếm token NHƯ NHAU (đều từ học). KHÔNG có earn multiplier, KHÔNG có token grant cho Pro. Token chỉ mua cosmetic → Pro không cần "vòi token". Bonus khi mua gói = AI Credit + cosmetic hữu hình, KHÔNG phải đống token chết.

**Mô hình AI 2 hạng (cốt lõi chống lỗ):**
- **AI tra cứu** (giải thích từ, dịch câu, sửa pinyin) — rẻ + cache được (C1+C2) → **không giới hạn thực tế** cho mọi tier. Chỉ giữ trần cứng/ngày để chống script.
- **AI hội thoại/chấm bài** (Tutor, HSKK, essay, story-gen) — đắt, không cache → metered: Free nếm vài lượt/tháng, Pro có allowance rộng, vượt → mua AI Credit Pack.

**Daily fair-use cap (chống abuse script, KHÔNG phải quota trải nghiệm):**
- Free: max 50 lượt tra cứu/day · Pro: 200/day · Trọn đời: 200/day
- Reset 0h00 ICT mỗi ngày

## 🎟️ Pro Trial Day-Pass

Vé dùng thử **toàn bộ Pro 7 ngày** — để free user cảm nhận trọn Pro (không chỉ nếm mảnh rời).
- Miễn phí, **1 lần/tài khoản**, cấp khi onboarding (hoặc sau khi học xong cấp đầu)
- **KHÔNG mua được bằng token** (token-mua-Pro = cannibalize)
- Hết hạn → về free + lời mời nâng cấp, **KHÔNG auto-charge**

---

## 📊 Feature × Tier × Token Cost Matrix

### 🎓 CORE LEARNING (đều free đầy đủ)

| Feature | Free | Pro | Token cost |
|---------|------|-----|-----------|
| SRS Flashcard SM-2 | ✅ Đầy đủ | ✅ + advanced mode | — |
| Pinyin search (no diacritics) | ✅ | ✅ | — |
| Quiz Adaptive (B5a-g) | ✅ | ✅ + 2x XP | — |
| HSK 2.0 + 3.0 dual mode (L1-L9) | ✅ | ✅ | — |
| Sub-deck theo chủ đề | ✅ | ✅ | — |
| My Decks CRUD | ✅ (5 deck max) | ✅ Unlimited | Slot deck: 50🪙 |
| Stroke Order (HanziWriter) | ✅ | ✅ + animation slow-mo | — |
| Tone Trainer | ✅ | ✅ + AI feedback | — |
| Cloze Sentences | ✅ | ✅ | — |
| Word of the Day | ✅ | ✅ + audio premium | — |
| Progress Analytics | ✅ basic | ✅ + heatmap, prediction, weak point | — |
| Pinyin Search no-diacritics | ✅ | ✅ | — |
| Streak / XP / Calendar | ✅ | ✅ + insurance | — |

### 🎮 GAMES

| Feature | Free | Pro | Token cost |
|---------|------|-----|-----------|
| Speed Quiz, Memory, Wordle (C1-C4) | ✅ | ✅ | — |
| Boss Battle, Racing, Sentence, Cloze, Tone | **1 lượt/ngày** | ✅ Unlimited | — |
| Daily Challenge | ✅ | ✅ + 2x XP | Double XP boost: 30🪙 |
| Survival Mode | 1 lần/ngày | Unlimited | — |
| Mock Test (B5g) | 1 lần/tuần | Unlimited | — |

### 🤖 AI FEATURES (2 hạng theo chi phí)

**Hạng 1 — AI tra cứu (rẻ, cache được → không giới hạn thực tế):**

| Feature | Free | Pro |
|---------|------|-----|
| AI giải thích từ vựng | ✅ model rẻ — thoải mái (trần 50/ngày chống script) | ✅ — không giới hạn thực tế |
| AI sửa pinyin/tone | ✅ model rẻ | ✅ |
| AI translate Vi↔Zh câu | ✅ model rẻ | ✅ |

**Hạng 2 — AI hội thoại/chấm bài (đắt, không cache → metered):**

| Feature | Free | Pro | Vượt allowance |
|---------|------|-----|----------------|
| AI Tutor chat 1-1 | Nếm 3-5/tháng (gộp chung) | ✅ trong allowance | Mua AI Credit Pack |
| AI Mock HSKK Speaking feedback (Phase R) | ❌ | ✅ trong allowance | AI Credit Pack |
| AI Writing Tutor (Phase S) | ❌ | ✅ trong allowance | AI Credit Pack |
| AI Story Generator (Phase P) | ❌ Read pre-gen | ✅ trong allowance | AI Credit Pack |
| AI Pronunciation analyze | ❌ | ✅ trong allowance | AI Credit Pack |
| AI Conversation simulator | ❌ | ✅ trong allowance | AI Credit Pack |

**💳 AI Credit — tiền tệ riêng cho AI (tách hoàn toàn khỏi token):**
- **Là gì:** đơn vị tiêu cho AI hội thoại/chấm bài đắt tiền. 1 lượt AI đắt = trừ credit.
- **Có từ đâu — CHỈ 3 đường:** (1) Pro allowance hằng tháng, (2) free quota nhỏ cố định, (3) mua AI Credit Pack bằng VND. **KHÔNG cày free được. KHÔNG quy đổi từ token.**
- **Vì sao tách khỏi token:** token cày free được → nếu token mua AI thì free user tự in chi phí API. AI Credit không cày free → mọi lượt AI đắt luôn được trả bằng doanh thu → không bao giờ lỗ.
- **AI tra cứu (hạng 1) KHÔNG tốn credit** — miễn phí thực tế cho mọi tier.

**AI Credit Pack ("Túi Linh Đan AI"):** bán thẳng VND, ai cũng mua được kể cả free.
- Gói lẻ nhiều cỡ nhỏ → lớn.
- **Gói "đủ 1 tháng dùng nặng"** — thay cho "unlimited AI" (unlimited flat KHÔNG định giá an toàn được). Giá ≥ (trần lượt/ngày × 30 × chi phí/lượt) ÷ (1−phí cổng) + biên. Số cụ thể chốt khi có giá API thật + trần/ngày.

**Bắt buộc để mô hình đứng vững:** C1 cache + C2 pre-gen (biến AI tra cứu thành gần-miễn-phí) · C3 route model theo độ khó task · mọi quota/credit enforce server-side (RPC SECURITY DEFINER).

### 🧠 AI Model Selection & API Pricing

> Giá tra cứu web 2026-05-22 — **biến động nhanh, verify lại khi tích hợp**. Trần lượt/ngày để định giá: **CHƯA chốt** (app chưa xong).
> **May mắn cho app học tiếng Trung:** model tiếng Trung tốt nhất (DeepSeek, Qwen) cũng thuộc nhóm RẺ nhất.

| Model | Giá in/out (/1M token) | Tiếng Trung | Dùng cho |
|---|---|---|---|
| Gemini Flash-Lite | ~$0.10 / $0.40 | Khá | Hạng 1 — fallback rẻ |
| Gemini 2.5 Flash | ~$0.15 / $0.60 | Khá | Hạng 1 — fallback |
| DeepSeek V3 | ~$0.27 / $1.10 | Tốt | **Hạng 1 — tra cứu chính** |
| Qwen (bản nhỏ) | rất rẻ (~$0.01 blended) | Tốt nhất native zh | Hạng 1 — fallback |
| DeepSeek V4 | ~$0.44 / $0.87 | **Top leaderboard zh (87)** | **Hạng 2 — hội thoại/chấm bài chính** |
| Qwen3-Max | trung bình | Top native zh-CN/zh-TW | Hạng 2 — fallback |
| Claude Sonnet | ~$3 / $15 | Tốt | Hạng 2 — chỉ khi cần chất lượng cao nhất |
| ⚠️ GPT-5.x Pro | ~$30 / $180 | — | **CẤM dùng làm fallback** (đắt gấp ~40-200×) |

**Đề xuất:**
- **Hạng 1 (tra cứu):** DeepSeek V3 chính → fallback Gemini Flash-Lite / Qwen nhỏ.
- **Hạng 2 (hội thoại/chấm bài):** DeepSeek V4 chính — top tiếng Trung mà giá chỉ ~1/7 Sonnet → fallback Qwen3-Max / GLM-5.
- **Fallback BẮT BUỘC cùng hạng giá** — outage model rẻ → model rẻ khác, KHÔNG rơi sang model premium.
- Model tốt cho ngôn ngữ/tiếng Trung: **Qwen** (Alibaba — native zh-CN/zh-TW tốt nhất), **DeepSeek V3/V4** (chất lượng cao + rẻ), GLM-5, Kimi K2.6.

### 💰 AI Cost Optimization (caching & pre-gen)

Nguyên tắc: nội dung **LẶP LẠI** thì gen 1 lần, lưu lại, KHÔNG call API nữa.

**C1 — Response cache (AI text):** câu hỏi/giải thích giống nhau → cache. "Giải thích từ 你好" giống hệt cho mọi user → gen 1 lần, lưu Supabase, lần sau trả từ cache, chi phí $0. Cache key = query chuẩn hoá.

**C2 — Pre-generation (nội dung tĩnh hữu hạn):** 7.000 từ HSK + ví dụ + giải thích là tập HỮU HẠN, biết trước → chạy batch gen sẵn TOÀN BỘ 1 lần (bằng model mạnh), duyệt chất lượng + lọc chính trị 1 lần → lưu thành data tĩnh. Runtime cost = $0.

**Audio cache (TTS):** phát âm 1 từ luôn giống nhau → pre-gen audio toàn bộ 7.000 từ HSK → lưu R2 (app đã có "Audio cache R2"). Lợi ích: (1) load nhanh, (2) tiết kiệm request, (3) **API TTS sập vẫn phát được** — audio cache là bản dự phòng, (4) chi phí TTS cho từ HSK = $0. Live TTS chỉ cho chữ ngoài HSK.

**KHÔNG cache được (phải call live → metered AI Credit):** AI Tutor hội thoại, chấm essay, dịch câu tự do của user — mỗi lượt độc nhất.

**Cache invalidation:** nâng cấp nội dung → bump version key.

→ Pre-gen toàn bộ audio + giải thích 7.000 từ HSK là **việc launch-prep**: tốn 1 lần, sau đó phần lớn "tính năng AI" trở thành nội dung tĩnh $0.

### 📚 CONTENT (Pro mở khóa — token KHÔNG mua được nội dung học)

| Feature | Free | Pro |
|---------|------|-----|
| Vocab HSK 2.0 (cả 6 cấp) | ✅ | ✅ |
| Vocab HSK 3.0 L1-L3 | ✅ | ✅ |
| Vocab HSK 3.0 L4-L9 | Xem thử 20 từ/cấp | ✅ Full |
| Grammar Patterns | HSK 1-2 | HSK 1-6 |
| Reading Passages | HSK 1-2 | HSK 1-6 |
| Listening Comprehension | HSK 1 | HSK 1-6 |
| Story "Hành Trình Mai" (Phase P) | Chapter 1-3 | All chapters |
| Audio podcast lesson | ❌ | ✅ |
| Live class weekly | Replay sau 24h | ✅ Live + recording |

### 🎵 TTS / AUDIO

| Feature | Free | Pro | Token cost |
|---------|------|-----|-----------|
| TTS browser standard (zh-CN voice) | ✅ Unlimited | ✅ | — |
| TTS giọng cao cấp (ElevenLabs, voice characters) | ❌ | ✅ Unlimited fair-use | Try 10 từ: 20🪙 |
| Audio cache R2 (đã gen) | ✅ tức thì | ✅ tức thì | — |
| Slow-mo audio playback | ✅ | ✅ | — |

### 🌳 GAMIFICATION (chi tiết xem GAMIFICATION_PLAN.md)

| Feature | Free | Pro | Token cost |
|---------|------|-----|-----------|
| **Bé Rồng mascot** | ✅ Basic 5 stage | ✅ + 5 evolution skin | — |
| Bé Rồng outfit/accessory | ✅ 5 outfit miễn phí | ✅ 20 outfit | Outfit: 50-200🪙 |
| Bé Rồng seasonal (Tết, Trung Thu) | Limited-time miễn phí | + premium seasonal | Premium outfit: 300🪙 |
| **Bộ thủ Pokedex** (214 cards) | ✅ Full collection | ✅ + animation history (Giáp cốt → Khải thư) | — |
| Bộ thủ rarity (Common/Rare/Legendary) | ✅ | ✅ | — |
| **Achievement / Badge** (100 badges) | ✅ All | ✅ + 30 Pro-exclusive | — |
| Display badge profile | ✅ | ✅ + custom layout | — |
| **Vườn Hán Tự** (Phase X4) | ✅ 10 tree species | ✅ + 20 species | Tree skin: 100🪙 |
| **Phố Cổ Trường An** (Phase X4) | ✅ 6 building basic | ✅ + 20 building chi tiết | Building skin: 200🪙 |
| **Study Cafe ambient** (Phase X3) | 3 theme free | 10 theme premium | Theme unlock: 150🪙 |

### 👥 SOCIAL

| Feature | Free | Pro | Token cost |
|---------|------|-----|-----------|
| Leaderboard tuần/tháng (top region) | ✅ | ✅ + custom group | — |
| Friend invite | ✅ (thưởng khi bạn được mời HỌC THẬT ≥ N ngày, không phải vừa đăng ký) | ✅ | — |
| Tặng quà bạn bè / lì xì | ✅ tặng **VẬT PHẨM cosmetic** (KHÔNG tặng token thô — chống farm acc ảo + RMT) | ✅ | — |
| Study Buddy matching | ❌ | ✅ | — |
| Translation Challenge weekly | Read only | Participate + vote | Vote 1 lần: free |
| Pronunciation Battle | View | Participate | — |
| Group/Family streak | ❌ | ✅ Family Plan | — |

### 🛠️ UTILITY / QUALITY-OF-LIFE

| Feature | Free | Pro | Token cost |
|---------|------|-----|-----------|
| Offline mode (PWA - Phase H) | ✅ Read + review | ✅ Full + sync queue | — |
| Streak Insurance (miễn 1 ngày quên) | ❌ | ✅ 1 free/tháng | Insurance day: 50🪙 |
| Certificate PDF (mock test pass) | ❌ | ✅ với watermark Pro | — |
| Weekly recap email | Opt-in basic | ✅ Auto với insights | — |
| Custom theme | 2 theme (Light/Dark) | 5+ premium theme | Theme: 200🪙 |
| Data export (CSV/JSON) | ✅ basic | ✅ + Anki export | — |
| Anki deck import | ✅ | ✅ | — |
| Multi-device sync (web/mobile/desktop) | ✅ với delta sync | ✅ Priority sync | — |
| Cloud backup | ✅ basic 30 ngày | ✅ unlimited | — |
| Hide ads (nếu sau này có) | ❌ Có ads subtle | ✅ Ad-free | — |

### 💎 EXCLUSIVE PRO-ONLY

| Feature | Note |
|---------|------|
| AI Tutor 1-1 chat | Conversation thực với AI tiếng Trung |
| Live class weekly (Pro = live + replay; Free = replay 24h sau) | CTV/giáo viên giảng livestream |
| Family Plan (4 acc share 199k/m) | Tiết kiệm 50% nếu cả gia đình học |
| Premium voice characters (ElevenLabs) | Nhiều giọng nam/nữ, emotion |
| Story Mai full chapters | RPG curriculum |
| AI HSKK Speaking feedback | Chuẩn bị thi nói HSKK |

---

## 🪙 Token Economy

### Earn Sources (chỉ qua HỌC, không time-grinding · tier-neutral)

| Hoạt động | Token (mọi tier NHƯ NHAU) |
|-----------|----------------------------|
| Daily login | 10🪙 |
| Flashcard đúng (cap 50/ngày) | 1🪙/card |
| Quiz session ≥80% | 20🪙 |
| Daily challenge complete | 30🪙 |
| Streak +1 (scaling) | 5-50🪙 |
| Học 20 từ mới (daily quest) | 30🪙 |
| Mock test pass | 100🪙 |
| Weekly mission complete | 200🪙 |
| HSK level cert | 500🪙 |
| Friend invite (bạn được mời học thật ≥ N ngày) | 500🪙 (cả 2) |

**Token earn gắn với HỌC MỚI** (từ mới, milestone) → tự thuôn lại khi user học hết → economy tự cân bằng.

**Earn ước lượng/tháng (Free = Pro, tier-neutral):** casual ~3000-4500🪙 · power user ~5000-7000🪙.

### Spend Sinks (token CHỈ mua cosmetic + perk — KHÔNG mua AI, KHÔNG mua nội dung học/game)

**Sink xương sống = "thế giới Bé Rồng" tiến hoá:** decoration gắn cột mốc học → phòng cúp / bản ghi tiến bộ, KHÔNG phải shop phẳng (shop phẳng mua hết → hết sink). Có nâng cấp nhiều bậc + đồ theo mùa (Tết, Trung Thu) → sink vô tận. **Build từng bước:** ra mắt 1 sink nhỏ (8-12 outfit Bé Rồng) → đo engagement → validated mới build hệ lớn (Vườn / Phố Cổ).

**Unlock 1 lần (perm) — CHỈ cosmetic:**
- Bé Rồng outfit / skin tiến hoá: 50-300🪙
- Theme / ambient Study Cafe: 150-200🪙
- Vườn Hán Tự — cây, vật phẩm trang trí: 100-300🪙 *(sink xương sống)*
- Phố Cổ Trường An — công trình, building skin: 200-400🪙 *(sink xương sống)*
- Thẻ sưu tập văn hoá (mua ĐÚNG thẻ, KHÔNG random/gacha): 50-150🪙

**Consumable perks:**
- Double XP 1 session: 30🪙
- Refresh quiz: 10🪙
- Skip flashcard khó: 3🪙
- Streak insurance day: 50🪙
- Premium TTS thử 10 từ: 20🪙
- Mock test extra attempt: 50🪙

### Token Shop (mua trực tiếp khi cần thêm)

| Pack | Giá | Token | Bonus | Per token |
|------|-----|-------|-------|-----------|
| pack100 | 19k | 100 | 0 | 190đ/🪙 |
| pack500 | 79k | 550 | 50 | 144đ/🪙 |
| **pack1200** ⭐ | 159k | 1400 | 200 | 114đ/🪙 |
| pack3000 | 349k | 3600 | 600 | 97đ/🪙 |

> **Lưu ý:** Token Pack bán TOKEN (tiền tệ cosmetic). **AI Credit Pack** là sản phẩm RIÊNG bán AI Credit (xem section AI Features). Hai cái khác nhau, KHÔNG lẫn, KHÔNG quy đổi.

---

## 🎯 Daily/Weekly/Monthly Quest System

> **Nguyên tắc tuyệt đối:** Quest = học bình thường, KHÔNG time-grinding.

### Daily Quests (refresh 0h00 ICT)

5 quest mỗi ngày, complete tự nhiên qua học:

| Quest | Reward |
|-------|--------|
| Học 20 từ mới hôm nay | 30🪙 |
| Hoàn thành 1 quiz | 20🪙 |
| Streak +1 ngày (yêu cầu HỌC, không chỉ login) | 10-50🪙 |
| Sử dụng AI 3 lần (intro AI feature) | 15🪙 |
| Game session 1 lần (Speed Quiz/Memory/Wordle) | 15🪙 |

**Tổng tối đa/ngày:** ~120🪙. Cộng XP earn → ~150🪙/ngày.

### Weekly Missions (refresh thứ 2)

3-5 mission tuần, lớn hơn daily:

| Mission | Reward |
|---------|--------|
| Streak 7 ngày | 100🪙 |
| Học 100 từ mới | 200🪙 |
| Pass mock test HSK X | 300🪙 |
| 5 quiz perfect (100%) | 200🪙 |
| Hoàn thành 1 Story Mai chapter | 100🪙 |
| Friend invite 1 người (joined) | 500🪙 (both) |

### Monthly Achievement

Sự kiện lớn, hiếm:

| Achievement | Reward |
|-------------|--------|
| Streak 30 ngày liên tục | 1000🪙 + badge |
| HSK level up (1→2, 2→3, etc.) | 2000🪙 + cert PDF |
| 1000 từ mastered | 1500🪙 + Bé Rồng evolution |
| Pass HSKK mock test | 1500🪙 + badge |

---

## 🚫 Quest TUYỆT ĐỐI KHÔNG làm (anti-toxic)

| Anti-pattern | Vì sao toxic |
|--------------|------------|
| "Mở app 10 lần/ngày" | Tạo habit mở app vô nghĩa |
| "Xem ad → token" | Hạ giá brand |
| "Quay wheel daily" | Gambling, addiction |
| "Login streak (chỉ login, không học)" | Reward time, không learning |
| "Daily spin lucky draw" | Variable reward = casino psychology |
| "Watch video → token" | Quảng cáo trá hình |
| "Survey trong app → token" | Off-topic, không phù hợp |
| Notification "Bạn có 500🪙, dùng đi!" | Spam, anxiety |

---

## 📋 Update Phase plan

Khi launch tính năng mới (Phase H, P, Q, R, S, T, U, V, W, X1-X5), **cập nhật matrix này** với:
1. Feature mới ở section nào
2. Free vs Pro split
3. Token cost (nếu có)
4. Quest mới có thể add

---

## 🔗 Sync với code

**Source-of-truth file:**
- [`js/data/plans.js`](../js/data/plans.js) — Pricing
- `js/data/tokens.js` (chưa tạo — TODO) — Token earn/spend rates
- `js/data/quests.js` (chưa tạo — TODO) — Quest definitions

**Khi update matrix này:**
1. Update `tokens.js` / `quests.js` tương ứng
2. Edge Function `create-payment` whitelist SKU nếu thêm tier
3. Update [REVENUE_PROJECTION.md](REVENUE_PROJECTION.md) ARPPU
4. Update Admin dashboard hiển thị token analytics

---

## ⚠️ Decision Log

| Date | Decision |
|------|---------|
| 2026-05-19 | Lock "Pro = 2-3x token earn + AI cost -40-50%" thay vì "Pro = unlimited AI" |
| 2026-05-19 | Bỏ "free 5 AI/day cứng" — thay bằng "free dùng token earn được" (50/day hard cap) |
| 2026-05-19 | Daily AI cap cứng: Free 50/day, Pro 200/day, Trọn đời 500/day (chống abuse) |
| 2026-05-19 | Core học tập (SRS/Flashcard/HSK data) GIỮ FREE hoàn toàn, không gate |
| 2026-05-19 | Pricing v7 (5 duration Pro + Token Shop) GIỮ NGUYÊN |
| 2026-05-21 | **AI 2 hạng:** tra cứu (rẻ, cache) không giới hạn thực tế; hội thoại/chấm bài (đắt) metered theo allowance + AI Credit Pack overflow. Bỏ "Pro = AI cost -40-50%" |
| 2026-05-21 | **Hướng A token:** token chỉ consumable (AI overflow) + cosmetic. Token KHÔNG mở khoá nội dung học/game (bỏ unlock grammar/reading/listening 100-200🪙/cấp) |
| 2026-05-21 | HSK 3.0 L4-L9 gate Pro (xem thử 20 từ/cấp). HSK 2.0 + HSK 3.0 L1-L3 free |
| 2026-05-21 | Handwriting (+PDF) free hoàn toàn · SRS 4 nút free · streak/XP/badge không gate — ưu tiên UX core loop |
| 2026-05-21 | Game premium (Boss/Racing/Sentence/Cloze/Tone): free 1 lượt/ngày thay hard gate |
| 2026-05-21 | Lifetime 999k → 1.490.000đ; bỏ AI unlimited khỏi Lifetime (allowance = gói tháng); bỏ diamondPerks |
| 2026-05-21 | Thêm Pro Trial Day-Pass 7 ngày (free 1 lần/acc, không mua bằng token) |
| 2026-05-21 | Tặng quà bạn bè = tặng vật phẩm cosmetic, KHÔNG tặng token thô (chống sybil + RMT) |
| 2026-05-21 | Sink token xương sống = hệ trang trí Vườn Hán Tự / Phố Cổ / Bé Rồng (vô tận) |
| 2026-05-21 | **B cải tiến token:** token tier-neutral (Free=Pro earn) — bỏ multiplier 2-3x + token grant Pro. Bonus mua gói → AI Credit + cosmetic hữu hình. Sink = "thế giới Bé Rồng" tiến hoá, build từng bước |
| 2026-05-21 | **AI Credit** = tiền tệ riêng cho AI, tách khỏi token, KHÔNG quy đổi. Chỉ từ Pro allowance / free-quota / mua VND. Token KHÔNG mua AI |
| 2026-05-21 | KHÔNG bán "unlimited AI" flat. Thay bằng Gói AI Credit "đủ 1 tháng dùng nặng" (có đáy → định giá an toàn) |
