# 🎮 Hanzi Genz — Gamification Plan

> Tăng retention dài hạn qua gamification có giá trị học thực sự. KHÔNG toxic, KHÔNG xao nhãng focus.
> **Last updated:** 2026-05-19
> **Liên quan:** [PRODUCT_TIER_MATRIX.md](PRODUCT_TIER_MATRIX.md) · [implementation_plan.md](implementation_plan.md)

---

## 🧭 4 Nguyên tắc nền (anti-toxic)

> User priority: **"Khiến nghiện và có giá trị học thực sự, thực tế, tránh các vấn đề bị toxic — hạn chế càng nhiều càng tốt tránh ảnh hưởng uy tín app"**

### 1. Mọi gamification phải XUẤT PHÁT TỪ HỌC
- ✅ Cây mọc khi học từ — đúng
- ❌ Cây mọc khi mở app — sai
- ✅ Bé Rồng evolution khi pass HSK — đúng
- ❌ Bé Rồng đói khi quên cho ăn — sai

### 2. Reward chỉ POSITIVE, không NEGATIVE
- ✅ "Học liên tục → cây lớn nhanh hơn"
- ❌ "Bỏ học → cây chết / pet buồn / mất streak"
- ✅ "Quay lại sau nghỉ → welcome bonus"
- ❌ "Quay lại sau nghỉ → mất hết progress"

### 3. UI/UX peripheral, không spam dopamine
- ✅ Animation reward 200-500ms, subtle
- ❌ Confetti, fireworks, full-screen popup mỗi lần đúng
- ✅ Token count nhỏ ở header
- ❌ Token icon nhấp nháy, đếm số to giữa màn

### 4. Optional / Opt-out được
- Settings: "Minimal UI mode" → tắt mascot, theme, animation
- User cần deep focus vẫn dùng được
- Gamification thêm joy cho người muốn, không ép buộc

---

## 🎯 7 Ideas đánh giá

### Tier 1 — Recommend làm ngay

#### Idea 1: 📚 **Bộ Sưu Tập 214 Bộ Thủ (Pokedex)** ⭐⭐⭐

**Mô tả:** 214 bộ thủ Hán tự = 214 thẻ collectible, mỗi thẻ có etymology + 5 ví dụ chữ.

**Tại sao TỐT NHẤT:**
- 100% educational — bộ thủ giúp memorize Hán tự **gấp 2-3x** (proven)
- Collection mechanic tự nhiên
- Pattern recognition: user thấy 谢/说/话/语 đều có bộ 言 → "ờ là về lời nói"
- Differentiator — KHÔNG app HSK VN nào có

**Mechanics:**
- Card rarity: Common (人/木/水) → Uncommon (心/手/口) → Rare (玉/食/示) → Legendary (龠/鼎/龜)
- Unlock card khi học chữ chứa bộ thủ đó (lần đầu gặp 1 chữ chứa bộ)
- Pro perk: animation history (Giáp cốt 甲骨文 → Triện thư 篆書 → Khải thư 楷書)
- Display profile, share Facebook

**Effort:** 3 tuần (1 tuần content/illustration + 2 tuần dev)
**Cost:** 0 (asset chỉ cần SVG)
**Retention impact:** ⭐⭐⭐⭐⭐ (highest)

---

#### Idea 2: 🐉 **Bé Rồng Evolution + Cosmetic** ⭐⭐⭐

**Mô tả:** Mascot "Bé Rồng" (already in brand) tiến hóa theo learning progress.

**Stages (HSK-based):**
| Stage | Unlock | Visual |
|-------|--------|--------|
| 🥚 Trứng Rồng | New user | Trứng vàng |
| 🐲 Bé Rồng | HSK 1 hoàn thành | Baby cute, không sừng |
| 🐉 Thiếu Long | HSK 3 hoàn thành | Teen, 1 sừng nhỏ |
| 🐉✨ Thanh Long | HSK 5 hoàn thành | Adult, có vảy xanh |
| 🐲🔥 Hoàng Kim Long | HSK 6 hoàn thành | Vàng rực, có cánh |
| 👑 Long Đế | All HSK + 365-day streak | Legendary skin (cosmetic) |

**Cosmetic mua bằng token:**
- Outfit Tết (red áo dài) — Tết only, limited
- Outfit Trung Thu — Trung Thu only
- Kính, mũ, khăn quàng — quanh năm
- Background scene: vườn, lớp học, công viên

**KHÔNG làm (toxic):**
- ❌ Bé Rồng "đói" → cho ăn → tốn time
- ❌ Bé Rồng "buồn" nếu user nghỉ
- ❌ Pet dies / regression

**Đúng:**
- ✅ Bé Rồng idle animation (ngáp, chớp mắt) khi không học
- ✅ Happy animation khi đúng
- ✅ Pure positive

**Effort:** 2 tuần (animation + integration)
**Cost:** 5-10M VND nếu thuê illustrator cho 6 stages × 5 outfit = 30 sprite
**Retention impact:** ⭐⭐⭐⭐

---

#### Idea 3: 🏆 **Achievement / Badge System** ⭐⭐

**Mô tả:** 100+ badges từ trivial đến epic, hiển thị profile.

**Categories:**
1. **Streak** (10): 3, 7, 14, 30, 60, 100, 180, 365, 730, 1000 ngày
2. **Milestone** (20): HSK 1-6 done, 100/500/1000/5000 từ mastered
3. **Skill** (15): Pinyin Master, Tone Perfect, Speed Demon, Memory King, etc.
4. **Game** (15): Boss Battle khó nhất pass, 50 wins, Streak Wordle 10
5. **Social** (10): Mời 1/5/10/50 bạn, Translation Challenge top 3, Buddy 100 days
6. **Seasonal** (limited, ~20): Tết 2027, Trung Thu 2026, Quốc Khánh, etc.
7. **Hidden** (10): Achievement bí mật — "Học 3h sáng", "Học giữa flight", "100% perfect mock test"

**Mechanics:**
- Auto unlock khi điều kiện đạt
- Notification subtle, badge popup 1 lần
- Profile gallery hiển thị
- Share Facebook button → viral

**Pro perks:**
- 30 Pro-exclusive badges
- Custom layout profile gallery
- Animated badges

**Effort:** 2 tuần (logic + 100 badge design)
**Retention impact:** ⭐⭐⭐

---

### Tier 2 — Nice to have

#### Idea 4: 🌳 **Vườn Hán Tự** (Forest-inspired, anti-toxic) ⭐⭐

**Mô tả:** Mỗi study session 25 phút → trồng 1 cây trong vườn cá nhân.

**Anti-toxic rewrite:**
- Cây **KHÔNG chết** nếu user nghỉ
- Cây "ngủ đông" khi user offline, "thức dậy" khi quay lại
- Reward POSITIVE: học liên tục → cây lớn nhanh hơn (không reward NEGATIVE)

**Loại cây giáo dục:**
| Cây | Unlock | Học gì |
|-----|--------|--------|
| 竹 Trúc | Streak 7 ngày | Từ về trúc, thư pháp |
| 梅 Mai | HSK 1 done + mùa Đông | Văn hóa mùa xuân |
| 莲 Liên | HSK 3 done | Từ về Phật giáo, thanh nhã |
| 松 Tùng | Streak 100 ngày | Symbol of resilience |
| 牡丹 Mẫu Đơn | Pass HSK 5 | Quốc hoa Trung Quốc |
| 银杏 Ngân Hạnh | HSK 6 done | Cố đô, lịch sử |

**Pro perks:**
- 20 species (vs Free 10)
- Skin/decoration: pavilion, lake, rock garden
- Time-of-day cycle (sáng/chiều/đêm)

**Effort:** 3-4 tuần (cần designer)
**Cost:** 15-30M VND cho asset
**Retention impact:** ⭐⭐⭐⭐ (nếu làm đẹp)

---

#### Idea 5: 🎵 **Study Cafe — Ambient Background** ⭐⭐

**Mô tả:** Background music + sound khi học, theme văn hóa Trung Quốc.

**Themes:**
- 北京胡同晨光 — Bắc Kinh hutong buổi sáng (chim, gánh hàng rong)
- 上海咖啡馆雨夜 — Cafe Thượng Hải đêm mưa
- 苏州园林春日 — Vườn Tô Châu mùa xuân (suối, gió)
- 西安钟楼黄昏 — Lầu Chuông Tây An hoàng hôn
- 雪山禅院 — Núi tuyết tu viện (chuông Phật)

**Tech:**
- Loop 30 phút seamless
- Volume control độc lập với SFX
- Pro: hi-res audio + 10 theme (vs Free 3)

**Tại sao tốt:**
- KHÔNG xao nhãng (background)
- Tạo "vibes" học → user gắn app với mood positive
- Differentiator (HelloChinese không có)
- Có thể work với Pomodoro mode

**Effort:** 1-2 tuần + audio license/recording 5-10M VND
**Retention impact:** ⭐⭐⭐ (subtle nhưng powerful)

---

### Tier 3 — Skip hoặc làm cuối

#### Idea 6: 🏯 **Phố Cổ Trường An (City Builder)** ⭐⭐

**Mô tả:** Map phố cổ, mỗi HSK level mastered = unlock công trình.

| HSK | Công trình | Mini-game |
|-----|-----------|----------|
| HSK 1 | 茶馆 Trà Quán | Từ về trà, ẩm thực |
| HSK 2 | 客栈 Khách Sạn | Từ về du lịch |
| HSK 3 | 书院 Thư Viện | Từ về sách, học vấn |
| HSK 4 | 钟楼 Lầu Chuông | Từ về thời gian |
| HSK 5 | 城门 Cổng Thành | Từ về lịch sử |
| HSK 6 | 皇宫 Hoàng Cung | Từ về văn hóa cung đình |

**Cảnh báo:** Scope creep. Cần designer + content writer. Effort 4-6 tuần.

**Khi nào làm:** Sau khi Bé Rồng + Pokedex + Badge ổn định (~6 tháng).

---

#### Idea 7: 📅 **Seasonal Events** ⭐⭐⭐ (KHÔNG cần dev system, chỉ cần content)

**Mô tả:** Mỗi mùa có event đặc biệt với content theme + cosmetic limited.

**Calendar (VN context):**
| Sự kiện | Thời gian | Content |
|---------|----------|---------|
| Tết 2027 | 1-15/1 ÂL (đầu 2027) | 50 từ Tết, Bé Rồng áo Tết, badge "Tết Rồng 2027" |
| Lễ tình nhân | 14/2 | Từ vựng yêu đương + couple challenge |
| Thanh Minh | Tháng 4 | Từ vựng tâm linh |
| Quốc tế thiếu nhi | 1/6 | Theme trẻ con, easy quiz |
| Trung Thu | 8/8 ÂL | Từ về trăng + bánh, Bé Rồng đèn lồng |
| Quốc Khánh VN | 2/9 | Theme đỏ-vàng |
| Halloween TQ (中元节) | 15/7 ÂL | Từ vựng tâm linh (light) |
| Đông Chí | 22/12 | Từ về đông, ẩm thực |

**Mechanics:**
- Content event tồn tại 2 tuần
- Đặc biệt: badge limited (không bao giờ unlock lại)
- FOMO HỢP LÝ (1 năm 1 lần, không spam)

**Effort:** 1 tuần/event (content + cosmetic), reuse framework
**Retention impact:** ⭐⭐⭐⭐ (re-engagement đỉnh cao)

---

## 📋 Roadmap (gắn với implementation_plan.md)

### 2026 Q4 (Aug-Oct 2026) — Setup gamification foundation

**Phase X1 — Bé Rồng Evolution + Cosmetic** (2 tuần)
- Logic evolution stage
- 6 sprite chính + 10 outfit baseline
- Integration với SRS, HSK progress

**Phase X3 — Achievement System** (2 tuần, parallel)
- 100 badge core
- Badge gallery profile
- Share Facebook integration
- Auto-trigger logic

### 2027 Q1 (Nov 2026 - Jan 2027) — Major launches

**Phase X2 — Bộ Thủ Pokedex** (3 tuần)
- 214 card content (etymology, examples)
- Rarity system
- Auto-unlock từ học chữ
- Pro perk: animation history

**Phase X5 — Tết 2027 Event** (1 tuần dev + 1 tuần content)
- Theme Tết content
- Limited cosmetic
- "Tết Rồng 2027" badge
- Launch khoảng 25/1/2027

### 2027 Q2 (Feb-Apr) — Expansion

**Phase X4 — Vườn Hán Tự** (3-4 tuần, có designer)
- 10 species
- Idle animation
- Pro skin

**Seasonal Trung Thu + Quốc Khánh** (1 tuần × 2)

### 2027 Q3+ — Optional

**Phase X6 — Study Cafe Ambient** (2 tuần + audio recording)
**Phase X7 — Phố Cổ Trường An** (4-6 tuần, scope tùy designer)

---

## ❌ Toxic patterns TUYỆT ĐỐI tránh

| Pattern | App điển hình | Vì sao toxic |
|---------|--------------|------------|
| Hearts/Energy block học khi sai | Duolingo | Punish wrong answer, ngăn experiment |
| Pet/Plant chết khi nghỉ | Forest, Tamagotchi | Guilt-trip, anxiety |
| Loot box / Gacha quay wheel | Genshin, mobile games | Gambling, addiction, legal risk |
| Watch ad for reward | Free mobile games | Hạ brand, kém chuyên nghiệp |
| Spin wheel daily | Casino apps | Variable reward = casino psychology |
| Variable reward schedule | Slot machines | Đẩy nghiện compulsive |
| Loss aversion notification "Bạn sắp mất streak!" | Duolingo notification | Anxiety, push obsessive |
| Pay-to-win competition | Mobile P2W | Unfair, kill organic community |
| Notification spam | Most apps | Annoy, uninstall |
| FOMO timer "BUY NOW 5 phút!" | Gacha shops | Manipulation |

---

## ✅ Healthy patterns recommended

| Pattern | Vì sao tốt |
|---------|-----------|
| Positive-only reinforcement | Tạo joy thuần |
| Optional gamification | Respect user autonomy |
| Long-term progression (HSK level → cosmetic) | Aligned với học |
| Subtle UI | Không xao nhãng |
| Collection of educational items | Pokedex, badge có giá trị thực |
| Seasonal events (rare, theme-based) | Re-engagement không annoy |
| Social bonus (mời bạn, family plan) | Viral organic |
| Achievement badge (auto-trigger) | Reward milestone thật |
| Streak insurance (tha thứ 1 lần) | Reduce anxiety |

---

## 📊 Success metrics

**Đo retention boost mỗi feature sau 30 ngày launch:**

| Metric | Baseline | Target sau gamification |
|--------|---------|------------------------|
| D1 retention | 40% | 50%+ |
| D7 retention | 20% | 30%+ |
| D30 retention | 8% | 15%+ |
| Streak average | 5 ngày | 12 ngày+ |
| Session length | 8 phút | 15 phút+ |
| Daily active / monthly active | 25% | 35%+ |

(Số baseline ước lượng, cần đo thực tế.)

---

## 🔗 Integration với code

**Files cần tạo (TODO):**
- `js/gamification/becompet.js` — Bé Rồng state + evolution logic
- `js/gamification/pokedex.js` — Bộ thủ collection
- `js/gamification/achievements.js` — Badge engine
- `js/gamification/events.js` — Seasonal event framework
- `js/data/radicals.js` — 214 bộ thủ data
- `js/data/badges.js` — 100 badge definitions
- `js/data/dragon-evolution.js` — Sprite + outfit catalog

**Supabase schema cần thêm:**
- `user_pokedex` (user_id, radical_code, unlocked_at)
- `user_badges` (user_id, badge_code, unlocked_at)
- `user_dragon` (user_id, stage, equipped_outfit_id, level)
- `user_dragon_outfits` (user_id, outfit_code, owned_at)
- `events` (code, start_at, end_at, content_json)
- `user_event_participation` (user_id, event_code, completed_at)

**RLS:** standard `auth.uid() = user_id` policy.

---

## 🎯 Decision Log

| Date | Decision |
|------|---------|
| 2026-05-19 | Lock 3 ý tưởng Tier 1 ưu tiên: Bộ thủ Pokedex + Bé Rồng evolution + Achievement |
| 2026-05-19 | KHÔNG dùng "pet dies" / "tree dies" pattern — pure positive |
| 2026-05-19 | KHÔNG xây custom forum — dùng Telegram/Facebook group thay thế |
| 2026-05-19 | Seasonal event start với Tết 2027 (Q1 2027) |
| 2026-05-19 | Token reward chỉ qua HỌC, không qua time-grinding (login streak, watch ad) |
