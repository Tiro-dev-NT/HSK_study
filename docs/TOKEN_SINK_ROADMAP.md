# 🪙 Hanzi Genz — Token Sink Roadmap (Wave A-E)

> Token economy + sink rollout plan. Chỉ định "wave nào build cái gì" để token có giá trị thực dần dần thay vì all-at-once.
> **Last updated:** 2026-05-23
> **Liên quan:** [PRODUCT_TIER_MATRIX.md](PRODUCT_TIER_MATRIX.md) · [AI_CREDIT_PRICING.md](AI_CREDIT_PRICING.md) · [HONOR_PACK_DESIGN.md](HONOR_PACK_DESIGN.md)

---

## 🧭 Triết lý token (chốt 2026-05-23)

1. **Token KHÔNG bán bằng VND** — KHÔNG có "Token Pack" truyền thống. Token chỉ kiếm qua HỌC.
2. **Token chỉ tiêu cosmetic + consumable nhỏ** — KHÔNG mua AI, KHÔNG mua nội dung học/game.
3. **Token tier-neutral** — Free và Pro kiếm như nhau, KHÔNG có earn multiplier 2-3× cho Pro.
4. **Anti-toxic:** không gacha, không random, không variable reward, không "quay xổ số".
5. **Build từng bước** — launch 1 wave nhỏ → đo engagement (token spend ≥ 30% earn rate) → wave kế.
6. **Hộp Ân Cần** = lối duy nhất user "bỏ tiền" → vẫn nhận token + outfit limited. Framing donation, không phải purchase.

---

## 💰 Stream monetization sau decision 2026-05-23

```
┌─────────────────────────────────────────────────┐
│  STREAM 1 — Pro Subscription (recurring chính)   │
│  75k/m · 199k/3m · 329k/6m · 499k/y · 2.49M life │
├─────────────────────────────────────────────────┤
│  STREAM 2 — AI Credit Pack (consumable, beta)    │
│  29k/99k/199k — Túi Linh Đan AI                 │
├─────────────────────────────────────────────────┤
│  STREAM 3 — Hộp Ân Cần (donation-framed)        │
│  99k/lần — outfit limited "Người Ủng Hộ"        │
└─────────────────────────────────────────────────┘

❌ KHÔNG còn Token Pack VND truyền thống
✅ Token chỉ earn từ học · tiêu cosmetic + consumable
```

---

## 🪙 Token economy — balance sheet

### Earn (chỉ qua HỌC, tier-neutral)

| Hoạt động | Token |
|---|---|
| Daily login | 10🪙 |
| Flashcard đúng (cap 50/ngày) | 1🪙/card |
| Quiz session ≥80% | 20🪙 |
| Daily quest tier (Easy/Hard/Skull) | 5-50🪙/quest |
| Streak +1 daily | 5🪙 |
| Streak 7 ngày | 100🪙 (weekly mission) |
| Streak 30 ngày | **300🪙** + badge |
| Streak 60 ngày | **500🪙** + badge "Devoted" |
| Streak 100 ngày | **800🪙** + 1 outfit Bé Rồng free |
| Streak 365 ngày | **2.000🪙** + outfit limited + cert "1 năm kiên trì" |
| HSK level up | **500🪙** + cert PDF |
| 1.000 từ mastered | **400🪙** + Bé Rồng evolution stage |
| Mock test pass | 100🪙 |
| Weekly mission | 50-200🪙 |
| Friend invite (bạn học thật ≥7 ngày) | 500🪙 cả 2 (cap 3 ref/tháng/IP) |
| Bonus mua sub (1 lần) | 150-3000🪙 tuỳ tier |
| Hộp Ân Cần (mua 99k) | 1.000🪙/lần (cap 12 lần/năm) |

**Earn ước lượng/tháng:**
- Casual user (~30 phút/ngày): ~3.000-4.500🪙
- Power user (~1h/ngày, streak dài): ~5.000-7.000🪙

### Spend (cosmetic + consumable nhỏ)

| Loại | Giá | Wave |
|---|---|---|
| **Consumable nhỏ:** | | A |
| Streak Insurance day | 50🪙 (max 2/tháng) | A |
| Double XP 1 session | 30🪙 (max 3/ngày) | A |
| Refresh quiz | 10🪙 (max 5/session) | A |
| **Cosmetic Bé Rồng:** | | |
| Outfit cơ bản | 50-200🪙 | A |
| Outfit cao cấp | 200-300🪙 | A |
| Evolution skin | 200-500🪙 | A |
| **Focus tool:** | | |
| Ambient theme | 200-300🪙 | B |
| Music/playlist pack | 100-150🪙 | B |
| **Vườn + Forest:** | | |
| Cây skin / decor | 100-300🪙 | C |
| Hạt giống rare | 50-200🪙 | C |
| **Pet companion:** | | |
| Pet thường (5 loại) | 300-500🪙 | D |
| Pet seasonal (Lân, Thỏ Ngọc, Cá Vàng) | 800-1.500🪙 | D |
| **Phố Cổ Trường An:** | | |
| Building skin | 200-400🪙 | E |

---

## 🌊 Wave Roadmap — build từng bước

### Wave A — Token có giá trị NGAY (1-2 tuần)

**Mục tiêu:** token thoát limbo "số ảo" → có chỗ tiêu thực sự trong tuần này.

| Item | Cost | Time | File ảnh hưởng |
|---|---|---|---|
| Wire `spendToken()` UI | 0🪙 base | 0.5 ngày | `js/quests.js`, `js/state.js` |
| Streak Insurance modal | 50🪙 | 0.5 ngày | `js/gamification.js` |
| Double XP toggle quiz | 30🪙 | 0.5 ngày | `js/quiz.js`, `js/session.js` |
| Refresh quiz button | 10🪙 | 0.5 ngày | `js/quiz.js` |
| 5-8 outfit Bé Rồng cơ bản | 50-300🪙 | 1-2 tuần asset | `assets/brand/mascot/outfits/` + `js/profile.js` |

**Success metric:** Token spend rate ≥ 30% earn rate trong 2 tuần → Wave B.

**Anti-toxic guardrail:**
- KHÔNG có "Skip flashcard" (đã reject — pay-to-skip risk)
- Cap số lần dùng/ngày-tháng minh bạch
- Consumable luôn show modal confirm trước khi trừ token

---

### Wave B — Focus tool (2-4 tuần)

**Mục tiêu:** Pomodoro + ambient + chill music — utility user tự nguyện dùng.

| Item | Cost | Asset |
|---|---|---|
| Pomodoro timer 25/5, 50/10, 90/20, custom | 0🪙 (free utility) | Code only |
| 2 ambient theme free + 6 token | 200-300🪙/theme | Lottie + MP4 loop trên R2 |
| Music CC0 free + 2 playlist token | 100-150🪙/pack | Pixabay/Freesound CC0 |

**Theme list:**
1. Thư phòng truyền thống TQ (free)
2. Quán cà phê Sài Gòn (free)
3. Núi tuyết Hoàng Sơn (200🪙)
4. Vườn Tô Châu (200🪙)
5. Tàu cao tốc đêm TQ (250🪙)
6. Quán trà Trùng Khánh đêm (250🪙)
7. Bến cảng Thượng Hải 1930 (300🪙)
8. Đỉnh Phú Sĩ bình minh (300🪙)

**Success metric:** ≥ 20% DAU dùng Pomodoro hằng ngày → Wave C.

---

### Wave C — Vườn + Forest mode (1-2 tháng)

**Mục tiêu:** sink xương sống dài hạn — cây mọc theo từ học + Forest mode focus.

| Item | Cost | Note |
|---|---|---|
| Vườn passive: cây mọc theo từ học | 0🪙 base | Mỗi từ học = 1 cây nhỏ |
| Forest mode Pomodoro: trồng cây session | 0🪙 base | Học liền 25p = cây lớn. Thoát = cây HÉO (không CHẾT — anti-anxiety) |
| 8-10 cây skin (Tùng/Trúc/Mai/Đào/Sen/Bonsai) | 100-300🪙 | Asset SVG |
| Decor vườn (đèn lồng, hồ koi, cầu, đá) | 100-200🪙 | Asset SVG |
| Hạt giống rare (anh đào, bonsai cổ, sen) | 50-200🪙 | Consumable trồng 1 cây cao cấp |

**Anti-anxiety guardrail:** cây "héo" không "chết" — học bù tưới lại được. KHÔNG punish thô bạo như Forest gốc.

**Success metric:** ≥ 40% user có vườn với ≥3 cây skin token → Wave D.

---

### Wave D — Pet companion (validated rồi mới làm, ~3 tháng từ Wave A)

**Mục tiêu:** đa dạng cá nhân hoá — pet phụ bên cạnh Bé Rồng (mascot chính brand).

**Phân tầng giữ brand:**

| Tầng | Vai | Cách triển khai |
|---|---|---|
| Mascot chính | **Bé Rồng** (không đổi) | Mọi user có, evolution theo HSK level |
| Companion phụ | User chọn 1 trong 5: Mèo Tam Thể, Hạc, Cá Chép, Panda, Thỏ Ngọc | Token 300-500🪙 unlock |
| Pet seasonal | Lân Tết, Thỏ Ngọc Trung Thu, Cá Vàng Hè | Token 800-1.500🪙, limited-time |

Mỗi pet: 5 state (idle/happy/sleep/study/eat) × SVG/Lottie. Asset cost: ~$50-100 cleanup Midjourney hoặc 3-5tr thuê designer VN cho cả 5 pet thường.

**Success metric:** ≥ 30% user có pet → Wave E.

---

### Wave E — Phố Cổ Trường An (rất sau — sink cuối)

**Mục tiêu:** city-builder cosmetic dài hạn cho user power.

| Item | Cost |
|---|---|
| 6 building basic free (unlock HSK level) | 0🪙 |
| 20 building skin chi tiết (Pro free + token unlock) | 200-400🪙 |
| Themed district (Đường, Tống, Minh, Thanh) | 500-1.000🪙 set |

**Khi nào làm:** user base đã ≥10k MAU, validated Wave A-D → Wave E là moat dài hạn cho whale.

---

## 🎯 Anti-toxic checklist (mọi wave)

| Anti-pattern | Trạng thái |
|---|---|
| Gacha / random loot box | ❌ KHÔNG bao giờ |
| Variable reward (slot machine) | ❌ |
| Daily spin lucky draw | ❌ |
| Pay-to-skip (skip flashcard, refresh quiz vô tận) | ❌ — có cap cứng |
| Pay-to-progress (mua HSK level/nội dung học) | ❌ |
| Notification "Bạn có 500🪙, dùng đi!" | ❌ spam anxiety |
| Token → tiền thật quy đổi | ❌ KHÔNG bao giờ (chống e-money) |
| Token gift bạn bè | ❌ chỉ tặng vật phẩm cosmetic, không token thô |
| Free farm AI Credit | ❌ AI Credit tách hoàn toàn |

---

## 📊 Token earn vs spend dài hạn (kịch bản 1 năm)

```
Casual user 1 năm:
  Earn:  ~4.000🪙/tháng × 12 = 48.000🪙
       + bonus mua sub Yearly: 1.500🪙
       + Hộp Ân Cần × 2/năm:    2.000🪙
       ─────────────────────────────────
       TỔNG earn:              ~51.500🪙

  Spend (Wave A-D launched):
       Consumable nhỏ ~500🪙/m × 12: 6.000🪙
       8 outfit Bé Rồng:             1.500🪙
       6 ambient theme:              1.500🪙
       Music pack × 3:                 400🪙
       Vườn skin + decor × 10:       2.000🪙
       Pet companion + seasonal × 3: 2.500🪙
       ─────────────────────────────────
       TỔNG spend:                  ~13.900🪙

  → User tích ~37.000🪙 thừa cuối năm
  → Sink cần thêm: Wave E (Phố Cổ) sẽ hấp thụ ~10.000-20.000🪙
```

→ Token economy **cân bằng tốt** dài hạn — không lạm phát chết, không thiếu sink.

---

## 🔗 Decision log

| Date | Decision |
|---|---|
| 2026-05-21 | Token tier-neutral. Sink = "thế giới Bé Rồng" tiến hoá, build từng bước |
| 2026-05-23 | BỎ Token Pack VND truyền thống (chống tiếng "bào tiền") |
| 2026-05-23 | Thay Token Pack bằng Hộp Ân Cần (donation-framed) — xem HONOR_PACK_DESIGN.md |
| 2026-05-23 | Streak milestone reward giảm để chống inflation: 30d 1000→300, level up 2000→500, mastered 1500→400 |
| 2026-05-23 | Thêm Streak 100 (800🪙+outfit) và Streak 365 (2000🪙+limited outfit+cert) |
| 2026-05-23 | Sub bonus token: Semi 1200→800, Yearly 3000→1500, Lifetime 8000→3000 |
| 2026-05-23 | Wave A consumable: BỎ "Skip flashcard" (pay-to-skip risk). Giữ Streak Insurance + Double XP + Refresh quiz |
| 2026-05-23 | Lock Wave A-E rollout order — không build hết một lần, mỗi wave có success metric |
