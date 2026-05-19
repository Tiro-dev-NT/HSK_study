# 🎯 Hanzi Genz — Product Tier Matrix

> Bảng tổng hợp tính năng × tier (Free/Pro) × token cost. Source-of-truth khi cần lock pricing decisions.
> **Last updated:** 2026-05-19
> **Liên quan:** [REVENUE_PROJECTION.md](REVENUE_PROJECTION.md) · [GAMIFICATION_PLAN.md](GAMIFICATION_PLAN.md) · [`js/data/plans.js`](../js/data/plans.js)

---

## 🧭 Triết lý

1. **Core học tập = FREE đầy đủ** — SRS, flashcard, HSK 2.0/3.0 đều free. Không gate kiến thức cơ bản.
2. **Pro = QUALITY + QUANTITY của AI/advanced**, không phải "tính năng cơ bản bị khóa".
3. **Token = byproduct của HỌC**, không phải currency mua trải nghiệm cơ bản.
4. **Free user vẫn dùng được app hàng ngày** mà không bực bội.
5. **Pro user feel premium** qua: 2-3x token earn, AI cost giảm 40-50%, quality cao hơn, exclusive content.

---

## 💎 Pro Tier Mechanics (mới)

| Tier | Giá | Monthly token grant | Token earn multiplier | AI cost discount |
|------|-----|---------------------|----------------------|-----------------|
| **Free** | 0 | 0 (chỉ earn) | 1x | 0% |
| Linh hoạt | 75k/1m | 150🪙 | 2x | -40% |
| Chăm chỉ | 199k/3m | 500🪙/3m | 2x | -40% |
| Bứt phá | 329k/6m | 1200🪙/6m | 2x | -40% |
| **Tiết kiệm** ⭐ | 499k/12m | 3000🪙/12m | 2.5x | -45% |
| Trọn đời | 999k/lifetime | 8000🪙 1 lần + 200🪙/m | 3x | -50% |

**Daily fair-use cap (chống abuse):**
- Free: max 50 AI requests/day (kể cả có token)
- Pro: max 200 AI requests/day (Trọn đời 500/day)
- Reset 0h00 ICT mỗi ngày

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
| Boss Battle, Racing, Sentence Builder | ✅ basic mode | ✅ + advanced mode + hint | Boss difficulty hint: 30🪙 |
| Daily Challenge | ✅ | ✅ + 2x XP | Double XP boost: 30🪙 |
| Survival Mode | 1 lần/ngày | Unlimited | Replay: 20🪙 |
| Mock Test (B5g) | 1 lần/tuần | Unlimited | Extra attempt: 50🪙 |

### 🤖 AI FEATURES (token-based — cost giảm cho Pro)

| Feature | Free | Pro | Free token cost | Pro token cost |
|---------|------|-----|----------------|---------------|
| AI giải thích từ vựng | ✅ (DeepSeek) | ✅ (Sonnet/Qwen) | 5🪙 | 3🪙 |
| AI sửa pinyin/tone | ✅ (DeepSeek) | ✅ (DeepSeek + chi tiết) | 5🪙 | 3🪙 |
| AI translate Vi↔Zh câu | ✅ (Gemini Flash) | ✅ (Sonnet) | 8🪙 | 5🪙 |
| AI Tutor chat 1-1 | ❌ | ✅ Unlimited fair-use | — | 10🪙/message |
| AI Story Generator (Phase P) | ❌ Read pre-gen | ✅ Generate custom | — | 50🪙/chapter |
| AI Mock HSKK Speaking feedback (Phase R) | ❌ | ✅ | — | 30🪙/lượt |
| AI Pronunciation analyze | ❌ | ✅ | — | 15🪙/từ phức tạp |
| AI Writing Tutor (Phase S) | ❌ | ✅ | — | 20🪙/essay |
| AI Image illustrate (vocab visual) | ❌ | ✅ | — | 50🪙/image |
| AI Conversation simulator | ❌ | ✅ | — | 40🪙/session |

**Daily AI cap (cứng để chống abuse):**
- Free: 50/day total (regardless of tokens)
- Pro Linh hoạt: 200/day
- Pro Trọn đời: 500/day

### 📚 CONTENT (Pro mở khóa cấp cao)

| Feature | Free | Pro | Token unlock 1 lần |
|---------|------|-----|-------------------|
| Vocab HSK 1-2 (2.0 + 3.0 L1-L2) | ✅ | ✅ | — |
| Vocab HSK 3-4 | ✅ | ✅ | — |
| Vocab HSK 5-6 | ✅ | ✅ | — |
| HSK 3.0 L7-L9 (advanced) | ✅ | ✅ | — |
| Grammar Patterns | HSK 1-2 | HSK 1-6 | HSK 3-6 unlock: 200🪙/cấp |
| Reading Passages | HSK 1-2 | HSK 1-6 | HSK 3-6 unlock: 200🪙/cấp |
| Listening Comprehension | HSK 1 | HSK 1-6 | HSK 2-6 unlock: 150🪙/cấp |
| Story "Hành Trình Mai" (Phase P) | Chapter 1-3 | All chapters | Unlock chapter: 100🪙 |
| Audio podcast lesson | ❌ | ✅ | — |
| Live class weekly | Replay sau 24h | ✅ Live + recording | — |

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
| Friend invite | ✅ (+ 500🪙 mỗi bên khi mời thành công) | ✅ | — |
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

### Earn Sources (chỉ qua HỌC, không qua time-grinding)

| Hoạt động | Free | Pro 2x | Pro 2.5x (Tiết kiệm) | Pro 3x (Trọn đời) |
|-----------|------|--------|----------------------|--------------------|
| Daily login | 10🪙 | 20🪙 | 25🪙 | 30🪙 |
| Flashcard đúng (cap 50/ngày) | 1🪙/card | 2🪙 | 2.5🪙 | 3🪙 |
| Quiz session ≥80% | 20🪙 | 40🪙 | 50🪙 | 60🪙 |
| Daily challenge complete | 30🪙 | 60🪙 | 75🪙 | 90🪙 |
| Streak +1 (scaling) | 5-50🪙 | 10-100🪙 | 12-125🪙 | 15-150🪙 |
| Học 20 từ mới (daily quest) | 30🪙 | 60🪙 | 75🪙 | 90🪙 |
| Mock test pass | 100🪙 | 200🪙 | 250🪙 | 300🪙 |
| Weekly mission complete | 200🪙 | 400🪙 | 500🪙 | 600🪙 |
| HSK level cert | 500🪙 | 1000🪙 | 1250🪙 | 1500🪙 |
| Friend invite joined | 500🪙 (cả 2) | 500🪙 (cả 2) | 500🪙 | 500🪙 |

**Earn ước lượng/tháng:**
- Free casual: ~3000-4500🪙/tháng
- Free power user: ~5000-7000🪙/tháng
- Pro Linh hoạt 2x: ~7000-9000🪙/tháng + grant 150 = ~9000🪙
- Pro Trọn đời 3x: ~12000-15000🪙/tháng + grant 200 = ~14000🪙

### Spend Sinks

**AI feature (consumable):** xem section "AI FEATURES" trên.

**Unlock 1 lần (perm):**
- Grammar/Reading/Listening cấp cao: 100-200🪙/cấp
- Story Mai chapter: 100🪙/chapter
- Bé Rồng outfit: 50-300🪙
- Theme: 150-200🪙
- Building skin: 200🪙

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
