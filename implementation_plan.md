# 📚 HSK Master — Implementation Plan v2.2

> **Cập nhật**: 2026-05-04 19:34 — Phần Phase A bắt đầu triển khai

---

## 📊 Tiến trình tổng thể

| Module | Trạng thái | Ghi chú |
|--------|-----------|---------|
| 🏠 Home page + Level Grid | ✅ Done | HSK 1-6 cards |
| 📖 Từ điển cơ bản | ✅ Done | Tìm hán tự/pinyin/nghĩa, bộ thủ |
| 🗂️ Deck Browser (grid/list) | ✅ Done | Tab HSK + Bộ thẻ của tôi |
| 🃏 Flashcard session | ✅ Done | Flip + SRS buttons |
| ⌨️ Typing session | ✅ Done | Điền pinyin/hán tự |
| 🎯 MCQ session | ✅ Done | Trắc nghiệm 4 đáp án |
| 📦 My Decks CRUD | ✅ Done | Tạo/sửa/xóa/import/export |
| ➕ Add-to-Deck popup | ✅ Done | Từ dictionary + nút |
| 🔍 Tìm pinyin không dấu | ✅ **Mới xong** | `nihao`→你好, `ni3hao3`→你好 |
| 🔊 Auto TTS + nút phát âm | ✅ **Mới xong** | Tự phát âm khi mở modal |
| ✏️ Stroke Order (HanziWriter) | ✅ **Mới xong** | CDN + Animate + Quiz mode |
| 🔥 XP System + Streak logic | ✅ **Mới xong** | +XP sau session, streak/ngày |
| 🔄 SRS thuật toán SM-2 (SM-2) | ✅ **Mới xong** | `srs.js` + SM-2 engine |
| 📂 Sub-deck theo chủ đề | ✅ **Mới xong** | Expand/collapse + từ theo topic |
| 🎧 Listening mode | ❌ Chưa | Nghe + điền |
| 📝 Adaptive Quiz | ❌ Chưa | Dựa trên SRS history |
| 💬 Góp ý / Feedback | ✅ **Mới xong** | Rating + category + history |
| 🏆 XP bar + Streak calendar | ✅ **Mới xong** | 7-day calendar + level system |
| 🎮 Game Center (8 games) | ❌ Chưa | Speed Quiz, Memory, Wordle... |
| ⌨️ Chinese IME gợi ý | 💡 Ý tưởng | Phase D |
| 🎮 Game Center (8 games) | ❌ Chưa | Speed Quiz, Memory, Wordle... |
| ⌨️ Chinese IME gợi ý | 💡 Ý tưởng | Phase D |

---

## 🆕 6 Yêu cầu mới — Chi tiết

### 📌 1. Flashcard + Điền từ chia sẻ chung bộ dữ liệu SRS

> [!IMPORTANT]
> Hiện tại 2 mode (Flashcard & Typing) hoạt động **độc lập**, không theo dõi tiến độ từng từ. Cần hợp nhất thành **1 hệ thống SRS duy nhất** như Anki.

**Thiết kế mới:**

```
Mỗi từ trong deck có thêm trạng thái SRS:
{
  h: "你", p: "nǐ", v: "Bạn",
  srs: {
    interval: 1,        // Ngày giữa các lần ôn
    ease: 2.5,           // Hệ số dễ (SM-2)
    dueDate: "2026-05-05", // Ngày cần ôn
    reps: 3,             // Số lần đã ôn
    lastReview: "2026-05-04",
    lapses: 0            // Số lần quên
  }
}
```

- **Mỗi lần học** (Flashcard hoặc Typing hoặc MCQ): cập nhật cùng 1 record SRS
- **Deck HSK cố định**: Không chọn số thẻ, **học lần lượt** theo thứ tự:
  - Từ mới (New): 20 từ/ngày (configurable)
  - Cần ôn (Due): Tất cả từ đã đến hạn
  - Học lại (Relearning): Từ bị quên
- **Badge trên deck card**: Hiện `🔵 New: 20 | 🟠 Due: 12 | 🔴 Relearn: 3`

---

### 📌 2. Deck HSK phân cấp — Parent Deck + Sub-decks theo chủ đề

> [!IMPORTANT]
> Tham khảo ảnh 3 của Anki: Deck lớn chứa nhiều deck con. Click `+` để expand xem sub-decks.

**Kiến trúc mới:**

```
 HSK 1  (150 từ)           0 | 27 | 374
   + HSK 1 — Chào hỏi       0 |  5 |  30
   + HSK 1 — Đại từ          0 |  3 |  20
   + HSK 1 — Gia đình        0 |  4 |  15
   + HSK 1 — Số đếm          0 |  0 |  10
   + HSK 1 — Thời gian       0 |  2 |  12
   + HSK 1 — Hành động        0 |  8 |  45
   + HSK 1 — Thức ăn          0 |  1 |  10
   + HSK 1 — Tính từ          0 |  2 |  15
   + HSK 1 — Địa điểm        0 |  2 |  10
   ...
```

**UI Deck Browser (List mode):**
```
┌────────────────────────────────────────────────────────┐
│ ▼ 📕 HSK 1            69 từ  🔵20 🟠12 🔴3  [▶ Học]  │
│   ├─ 👋 Chào hỏi       5 từ               [▶ Học]    │
│   ├─ 👤 Đại từ          5 từ               [▶ Học]    │
│   ├─ 👨‍👩‍👧 Gia đình       4 từ               [▶ Học]    │
│   ├─ 🔢 Số đếm         10 từ               [▶ Học]    │
│   ├─ ⏰ Thời gian       6 từ               [▶ Học]    │
│   ├─ 🏃 Hành động      12 từ               [▶ Học]    │
│   ├─ 🍚 Thức ăn         4 từ               [▶ Học]    │
│   ├─ 📐 Tính từ         8 từ               [▶ Học]    │
│   └─ 📍 Địa điểm        5 từ               [▶ Học]    │
│                                                        │
│ ▶ 📙 HSK 2            46 từ  🔵20 🟠5  🔴0  [▶ Học]  │
│ ▶ 📒 HSK 3            20 từ  🔵20 🟠0  🔴0  [▶ Học]  │
│ ▶ 📗 HSK 4           600 từ  🔵20 🟠0  🔴0  [▶ Học]  │
│ ...                                                    │
└────────────────────────────────────────────────────────┘
```

**Cách hoạt động:**
- Click **Deck to** (HSK 1) → Học lần lượt TẤT CẢ chủ đề, theo SRS
- Click **Sub-deck** (Chào hỏi) → Chỉ học từ trong chủ đề đó
- Nút `▶` / `▼` toggle mở rộng sub-decks
- Dữ liệu sub-deck tự tính từ field `t` (topic) có sẵn trong `HSK_DATA`

**Data mapping (`t` → label + icon):**
```javascript
const TOPIC_META = {
  greetings:     { vi: "Chào hỏi",    en: "Greetings",    icon: "👋" },
  pronouns:      { vi: "Đại từ",      en: "Pronouns",     icon: "👤" },
  family:        { vi: "Gia đình",    en: "Family",       icon: "👨‍👩‍👧" },
  numbers:       { vi: "Số đếm",     en: "Numbers",      icon: "🔢" },
  time:          { vi: "Thời gian",   en: "Time",         icon: "⏰" },
  actions:       { vi: "Hành động",   en: "Actions",      icon: "🏃" },
  food:          { vi: "Thức ăn",     en: "Food",         icon: "🍚" },
  adjectives:    { vi: "Tính từ",     en: "Adjectives",   icon: "📐" },
  places:        { vi: "Địa điểm",   en: "Places",       icon: "📍" },
  objects:       { vi: "Đồ vật",     en: "Objects",      icon: "📱" },
  animals:       { vi: "Động vật",   en: "Animals",      icon: "🐱" },
  emotions:      { vi: "Cảm xúc",    en: "Emotions",     icon: "😊" },
  // ... thêm cho HSK 2, 3, ...
};
```

---

### 📌 3. Kiểm tra kiến thức đã học (Adaptive Quiz)

> Dựa vào tiến độ SRS + từ đã học để đưa câu hỏi liên quan.

**Logic:**
1. Lấy tất cả từ đã học (srs.reps > 0) từ mọi deck
2. Ưu tiên: từ có `ease` thấp (khó) → ra nhiều hơn
3. Thêm ~20% từ "gần liên quan" (cùng topic hoặc cùng HSK level)
4. Mix dạng câu hỏi: Trắc nghiệm / Điền từ / Nghe chọn / Ghép cặp

**UI Quiz Setup (cập nhật):**
```
┌──────────────────────────────────────────┐
│  📝 Kiểm tra kiến thức                   │
│──────────────────────────────────────────│
│  Chế độ:                                 │
│  ● Ôn tập kiến thức đã học (Adaptive)    │
│  ○ Theo cấp HSK                          │
│  ○ Theo chủ đề                           │
│──────────────────────────────────────────│
│  Số câu: [10] [20] [50]                  │
│  Dạng: [Trắc nghiệm] [Điền từ] [Hỗn hợp]│
│                                           │
│  [🚀 Bắt đầu kiểm tra]                  │
└──────────────────────────────────────────┘
```

---

### 📌 4. Từ điển nâng cao — Phát âm + Stroke Animation + Cấu trúc

> Tham khảo ảnh 4 (viết mẫu) và ảnh 5 (bảng từ có phát âm, viết).

**Cập nhật Word Detail Modal:**
```
┌────────────────────────────────────────────┐
│                     ✕                       │
│         你                                  │
│       nǐ          🔊 (auto-play khi mở)    │
│     HSK 1                                   │
│──────────────────────────────────────────── │
│  🇻🇳 VI: Bạn                                │
│  🇬🇧 EN: You                                │
│──────────────────────────────────────────── │
│  ✏️ Cách viết:                              │
│  ┌──────────────────────┐                   │
│  │  [Animated Stroke]   │  ← HanziWriter    │
│  │   你                  │                   │
│  └──────────────────────┘                   │
│  [▶ Viết mẫu] [✍️ Luyện viết]              │
│──────────────────────────────────────────── │
│  📖 Ví dụ:                                  │
│  你好！很高兴认识你。                          │
│  Nǐ hǎo! Hěn gāoxìng rènshi nǐ.           │
│  🔊                                         │
│──────────────────────────────────────────── │
│  🔗 Cấu trúc liên quan:                    │
│  • 你 + 好 → 你好 (xin chào)               │
│  • 你 + 们 → 你们 (các bạn)                │
│──────────────────────────────────────────── │
│  [➕ Thêm vào bộ thẻ]                      │
└────────────────────────────────────────────┘
```

**Thư viện HanziWriter (CDN):**
```html
<script src="https://cdn.jsdelivr.net/npm/hanzi-writer@3.5/dist/hanzi-writer.min.js"></script>
```

**2 chế độ:**
1. **Viết mẫu** (`animateCharacter()`): Hiện hoạt hình từng nét
2. **Luyện viết** (`quiz()`): Người dùng vẽ theo, HanziWriter kiểm tra đúng sai

**Danh sách từ kiểu ảnh 5 (cập nhật hiển thị dict-card):**
```
┌────────────────────────────────────────────────────┐
│ 1  □ 🔊 ✍️   你     nǐ    🔊   bạn, anh, chị..   🔊 │
│ 2  □ 🔊 ✍️   您     nín   🔊   ngài, bà, ông...   🔊 │
│ 3  □ 🔊 ✍️   好     hǎo   🔊   khỏe, tốt          🔊 │
│ 4  □ 🔊 ✍️   再见   zàijiàn 🔊  tạm biệt           🔊 │
└────────────────────────────────────────────────────┘
```

---

### 📌 5. Tìm kiếm pinyin không dấu

> `ni hao`, `nihao`, `ni3hao3` đều tìm ra 你好

**Thuật toán:**
```javascript
function stripTones(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")  // Xóa dấu Unicode
    .replace(/[1-5]/g, "")            // Xóa tone numbers
    .replace(/\s+/g, "")              // Xóa khoảng trắng
    .toLowerCase();
}

// Tìm kiếm: so sánh stripTones(query) với stripTones(word.p)
// "nihao" matches "nǐ hǎo"
// "ni hao" matches "nǐ hǎo"  
// "ni3hao3" matches "nǐ hǎo"
```

---

### 📌 6. Gợi ý gõ tiếng Trung trên web (Chinese IME)

> [!NOTE]
> Đây là tính năng phức tạp, đặt ở **Phase cuối**. Có 2 phương án:

**Phương án A — Dùng hệ thống IME có sẵn:**
- Hướng dẫn user bật bàn phím tiếng Trung trên Windows/Mac/Mobile
- Khi gõ vào ô input, hệ thống OS tự gợi ý chữ Hán

**Phương án B — Tự build mini IME (cho web):**
- Khi user gõ pinyin vào ô input → hiện dropdown gợi ý chữ Hán
- Dùng dictionary mapping: `ni` → `你, 呢, 泥, 尼...`
- Click chọn chữ → điền vào ô

**Đề xuất:** Bắt đầu với Phương án A (zero effort), xem xét B cho Phase 3.

---

### 📌 7. Góp ý / Feedback từ người dùng

**Mô tả:** Trang cho người dùng gửi góp ý chức năng, báo lỗi, đánh giá. Nhà phát triển xem được toàn bộ.

**UI:**
```
┌──────────────────────────────────────────┐
│  💬 Góp ý & Phản hồi                    │
│──────────────────────────────────────────│
│  Loại:  ● Góp ý  ○ Báo lỗi  ○ Đánh giá │
│  Đánh giá: ⭐⭐⭐⭐☆ (4/5)               │
│  Nội dung: [________________]            │
│            [________________]            │
│  Tên (tùy chọn): [__________]            │
│  [📤 Gửi góp ý]                         │
│──────────────────────────────────────────│
│  📋 Góp ý gần đây (public):             │
│  ⭐⭐⭐⭐⭐ "App rất hay!" — Minh, 2h ago │
│  ⭐⭐⭐⭐☆ "Thêm game nữa" — Lan, 1d ago │
└──────────────────────────────────────────┘
```

**Lưu trữ (Phase 1 — localStorage):**
```javascript
// Key: "hsk_feedback"
[{
  id: "fb_172xxx",
  type: "feature", // "feature" | "bug" | "review"
  rating: 4,
  content: "Thêm chế độ nghe",
  author: "Minh",
  createdAt: "2026-05-04T12:00:00Z"
}]
```

> [!NOTE]
> Phase 1: lưu localStorage. Phase 2 (có backend): lưu Firestore, nhà phát triển có dashboard riêng.

---

### 📌 8. Bảng xếp hạng + Streak + Nhóm học

**A. Streak (chuỗi ngày học):**
```
┌──────────────────────────────────┐
│  🔥 Chuỗi ngày: 12 ngày         │
│  Mo Tu We Th Fr Sa Su            │
│  🟢 🟢 🟢 🟢 🟢 🟢 🟢            │
│  🟢 🟢 🟢 🟢 🟢 ⚪ ⚪            │
│  Kỷ lục: 28 ngày                │
└──────────────────────────────────┘
```
- Học ≥ 1 session/ngày = giữ streak
- Streak 7 ngày: +100 XP bonus
- Streak 30 ngày: huy hiệu "Kiên trì" 🏅

**B. Bảng xếp hạng (XP tuần):**
```
┌──────────────────────────────────┐
│  🏆 Bảng xếp hạng tuần          │
│  1. 🥇 Minh        1,250 XP     │
│  2. 🥈 Lan           980 XP     │
│  3. 🥉 Hùng          870 XP     │
│  ...                             │
│  12. 😊 Bạn          320 XP     │
└──────────────────────────────────┘
```

> [!NOTE]
> Phase 1 (localStorage): Leaderboard cá nhân (self-compete, so sánh tuần trước vs tuần này).
> Phase 2 (có backend): Leaderboard cộng đồng thực sự.

**C. Nhóm học (Group Streak) — Phase 2+:**
- Tạo nhóm, mời bạn bè bằng link/mã
- Mọi người trong nhóm cùng giữ streak
- Nếu **1 người mất streak** → cả nhóm bị "cảnh báo"
- Leaderboard nhóm: xếp hạng giữa các nhóm
- **Peer pressure** tạo động lực học đều

```
┌──────────────────────────────────┐
│  👥 Nhóm: "HSK Warriors"  (4/5) │
│  🔥 Group streak: 8 ngày        │
│  ├─ Minh  ✅ hôm nay             │
│  ├─ Lan   ✅ hôm nay             │
│  ├─ Hùng  ⚠️ chưa học!           │
│  └─ Mai   ✅ hôm nay             │
│  [📤 Mời bạn]  [🏆 BXH nhóm]   │
└──────────────────────────────────┘
```

---

### 📌 9. Game Center — 8 mini-game giải trí kết hợp học

> Tham khảo từ `hsk_game_spec.md`, **đã điều chỉnh** cho phù hợp kiến trúc hiện tại (Vanilla JS, không React).

**Trang Game Center:**
```
┌────────────────────────────────────────────┐
│  🎮 Khu vui chơi                           │
│  Chọn game để vừa chơi vừa học!           │
├────────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────┐ ┌─────────┐      │
│ │🧠 Ghép  │ │⚔️ Đánh │ │🏎️ Đua  │      │
│ │   đôi   │ │  Boss   │ │   xe    │      │
│ │ Memory  │ │ Battle  │ │ Racing  │      │
│ └─────────┘ └─────────┘ └─────────┘      │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐      │
│ │📝 Xây  │ │📖 Điền  │ │🟩Wordle│      │
│ │  câu    │ │  bài đọc│ │ Pinyin  │      │
│ │Sentence │ │ Context │ │         │      │
│ └─────────┘ └─────────┘ └─────────┘      │
└────────────────────────────────────────────┘
```

**8 Game (ưu tiên từ dễ → khó build):**

| # | Game | Mô tả | Độ khó build | Phase |
|---|------|-------|-------------|-------|
| G1 | **Speed Quiz** | Trắc nghiệm 60s, streak bonus | 🟢 Easy | Sớm |
| G2 | **Memory Flip** | Lật 8-16 thẻ ghép cặp Hán↔Nghĩa | 🟢 Easy | Sớm |
| G3 | **Pinyin Wordle** | Đoán pinyin trong 5 lần, màu Wordle | 🟡 Medium | Sớm |
| G4 | **Sentence Builder** | Xếp từ thành câu đúng ngữ pháp | 🟡 Medium | Giữa |
| G5 | **Boss Battle** | RPG đánh boss bằng từ vựng, HP bar | 🟡 Medium | Giữa |
| G6 | **Racing Quiz** | Đua xe vs CPU, đúng=tiến, sai=đứng | 🟡 Medium | Giữa |
| G7 | **Context Fill** | Đọc bài + điền từ vào chỗ trống | 🔴 High | Sau |
| G8 | **Flashcard SRS** | Đã có sẵn (tích hợp SRS) | ✅ Done | — |

**Cải tiến so với spec gốc:**
- **Không dùng React** — tất cả viết Vanilla JS, mỗi game 1 file `js/games/game_xxx.js`
- **Không cần backend** — XP, scores lưu localStorage
- **Tích hợp HSK_DATA** — dùng chung kho từ có sẵn thay vì API riêng
- **Boss Battle**: thêm animation CSS thay Framer Motion
- **Speed Quiz**: đã có MCQ mode, cần thêm timer + streak counter
- **Wordle**: Giới hạn từ đơn âm tiết (3-5 ký tự pinyin) để dễ chơi

**XP System (tích hợp vào streak):**
```javascript
// Key: "hsk_xp"
{ total: 1250, weeklyXP: 320, lastActive: "2026-05-04" }
```

---

### 📌 10. Đánh giá khả năng hoàn thiện với Sonnet

> [!IMPORTANT]
> **Kết luận: Sonnet có thể hoàn thiện ~70-80% chức năng cơ bản.**

| Nhóm | Chức năng | Sonnet? | Ghi chú |
|------|-----------|---------|--------|
| **Core (đã xong)** | Deck Browser, Flashcard, Typing, MCQ, Dictionary, CRUD | ✅ Đã làm | Hoạt động tốt |
| **Cải tiến** | SRS SM-2, Sub-deck, Pinyin search, Auto TTS | ✅ Làm được | Logic thuần JS |
| **Nâng cao** | HanziWriter stroke, Adaptive Quiz, Feedback | ✅ Làm được | Cần integrate CDN |
| **Game đơn giản** | Speed Quiz, Memory Flip, Wordle | ✅ Làm được | Vanilla JS games |
| **Game phức tạp** | Boss Battle, Racing, Sentence Builder | ⚠️ Cần hỗ trợ | Nhiều animation/state |
| **Cần backend** | Leaderboard cộng đồng, Group Streak, Sharing | ❌ Không | Cần Firebase/server |
| **Cần backend** | Sync tiến độ cross-device | ❌ Không | Cần cloud database |

**Sonnet có thể hoàn thiện đến bước nào?**

```
✅ Bước 1: Core Learning (XONG)
   Deck browser, 3 modes học, từ điển, CRUD

✅ Bước 2: Enhanced Learning 
   SRS, sub-deck, pinyin search, HanziWriter, auto TTS
   → Ước tính: 2-3 sessions với Sonnet

✅ Bước 3: Gamification
   Streak tracker, XP system, feedback form
   Các game đơn giản: Speed Quiz, Memory, Wordle
   → Ước tính: 2-3 sessions

⚠️ Bước 4: Advanced Games
   Boss Battle, Racing, Sentence Builder
   → Sonnet làm được nhưng cần review kỹ, dễ bug animation

❌ Bước 5: Social Features (CẦN BACKEND)
   Leaderboard thực, Group Streak, Share deck online
   → Cần Firebase hoặc server riêng
```

> [!TIP]
> **Đề xuất workflow:** Dùng Sonnet cho Bước 2-3 (nhanh, tiết kiệm), chuyển sang Opus cho Bước 4 nếu cần debug phức tạp. Backend (Bước 5) cần setup Firebase riêng.

---

## 📋 Kế hoạch triển khai theo Phase (CẬP NHẬT)

### 🔴 Phase A — Enhanced Learning

| # | Task | Trạng thái | Files | Phức tạp |
|---|------|----------|-------|----------|
| A1 | Sub-deck theo topic | ❌ Chưa | `decks.js`, `index.html`, `style.css` | 🟡 |
| A2 | SRS algorithm SM-2 | ❌ Chưa | `js/srs.js` (new), `decks.js` | 🔴 |
| A3 | Tìm pinyin không dấu | ✅ **Xong** | `app.js` | 🟢 |
| A4 | HanziWriter stroke | ✅ **Xong** | `index.html`, `app.js`, `style.css` | 🟡 |
| A5 | Auto TTS + modal TTS btn | ✅ **Xong** | `app.js`, `index.html` | 🟢 |

### 🟠 Phase B — Gamification + Feedback

| # | Task | Trạng thái | Files | Phức tạp |
|---|------|----------|-------|----------|
| B1 | XP system + Streak logic | ✅ **Xong** | `app.js` | 🟡 |
| B2 | Streak UI (calendar, hiển thị BXH) | ❌ Chưa | `index.html`, `style.css` | 🟢 |
| B3 | Feedback form | ❌ Chưa | `index.html`, `js/feedback.js` | 🟢 |
| B4 | Leaderboard (self-compare) | ❌ Chưa | `js/gamification.js` | 🟡 |
| B5 | Adaptive Quiz | ❌ Chưa | `app.js` | 🔴 |

### 🟣 Phase C — Game Center

| # | Task | Trạng thái | Files | Phức tạp |
|---|------|----------|-------|----------|
| C1 | Game page + nav | ❌ Chưa | `index.html`, `style.css` | 🟢 |
| C2 | Speed Quiz (timer) | ❌ Chưa | `js/games/speed_quiz.js` | 🟢 |
| C3 | Memory Flip | ❌ Chưa | `js/games/memory.js` | 🟡 |
| C4 | Pinyin Wordle | ❌ Chưa | `js/games/wordle.js` | 🟡 |
| C5 | Boss Battle | ❌ Chưa | `js/games/boss.js` | 🟡 |
| C6 | Racing Quiz | ❌ Chưa | `js/games/racing.js` | 🟡 |
| C7 | Sentence Builder | ❌ Chưa | `js/games/sentence.js` | 🔴 |

### 🔵 Phase D — Social (cần Backend)

| # | Task | Cần |
|---|------|-----|
| D1 | Firebase Auth | Firebase |
| D2 | Leaderboard cộng đồng | Firestore |
| D3 | Group Streak | Firestore |
| D4 | Share Deck online | Firestore |

---

## 📐 Thay đổi cấu trúc dữ liệu

### Hiện tại (`data.js`)
```javascript
// Mỗi từ có field `t` (topic) — đã sẵn sàng cho sub-deck
{h:"你好", p:"nǐ hǎo", v:"Xin chào", e:"Hello", t:"greetings", ex:{...}}
```

### Cần thêm: `TOPIC_META` (mapping topic → label/icon)
```javascript
// Thêm vào data.js
const TOPIC_META = {
  greetings:     { vi: "Chào hỏi",    en: "Greetings",     icon: "👋" },
  pronouns:      { vi: "Đại từ",      en: "Pronouns",      icon: "👤" },
  family:        { vi: "Gia đình",    en: "Family",        icon: "👨‍👩‍👧" },
  numbers:       { vi: "Số đếm",     en: "Numbers",       icon: "🔢" },
  time:          { vi: "Thời gian",   en: "Time",          icon: "⏰" },
  actions:       { vi: "Hành động",   en: "Actions",       icon: "🏃" },
  food:          { vi: "Thức ăn",     en: "Food & Drink",  icon: "🍚" },
  adjectives:    { vi: "Tính từ",     en: "Adjectives",    icon: "📐" },
  emotions:      { vi: "Cảm xúc",    en: "Emotions",      icon: "😊" },
  places:        { vi: "Địa điểm",   en: "Places",        icon: "📍" },
  objects:       { vi: "Đồ vật",     en: "Objects",       icon: "📱" },
  animals:       { vi: "Động vật",   en: "Animals",       icon: "🐱" },
  school:        { vi: "Trường học",  en: "School",        icon: "🏫" },
  work:          { vi: "Công việc",   en: "Work",          icon: "💼" },
  social:        { vi: "Xã hội",     en: "Social",        icon: "🤝" },
  language:      { vi: "Ngôn ngữ",   en: "Language",      icon: "🗣️" },
  // HSK 2 topics
  health:        { vi: "Sức khỏe",   en: "Health",        icon: "🏥" },
  body:          { vi: "Cơ thể",     en: "Body",          icon: "🦵" },
  colors:        { vi: "Màu sắc",    en: "Colors",        icon: "🎨" },
  weather:       { vi: "Thời tiết",  en: "Weather",       icon: "⛅" },
  sports:        { vi: "Thể thao",   en: "Sports",        icon: "⚽" },
  mental:        { vi: "Tư duy",     en: "Mental",        icon: "🧠" },
  transport:     { vi: "Giao thông", en: "Transport",     icon: "🚌" },
  activities:    { vi: "Hoạt động",  en: "Activities",    icon: "🎯" },
  arts:          { vi: "Nghệ thuật", en: "Arts",          icon: "🎵" },
  entertainment: { vi: "Giải trí",   en: "Entertainment", icon: "🎬" },
  // HSK 3 topics
  society:       { vi: "Xã hội",     en: "Society",       icon: "🏛️" },
  academics:     { vi: "Học thuật",   en: "Academics",     icon: "📚" },
  nature:        { vi: "Thiên nhiên", en: "Nature",        icon: "🌿" },
  politics:      { vi: "Chính trị",  en: "Politics",      icon: "⚖️" },
  life:          { vi: "Cuộc sống",  en: "Life",          icon: "🌟" },
  general:       { vi: "Chung",      en: "General",       icon: "📋" },
};
```

### Cần thêm: SRS per-card data (`localStorage`)
```javascript
// Key: "hsk_srs"
// Structure: { "你": { interval, ease, dueDate, reps, lapses, lastReview }, ... }
// Shared across all modes (flashcard, typing, mcq)
```

---

## 📁 Files cần thay đổi (tổng hợp)

| File | Thay đổi |
|------|----------|
| `js/data.js` | Thêm `TOPIC_META` |
| `js/srs.js` [NEW] | SM-2 algorithm, SRS state management |
| `js/gamification.js` [NEW] | XP, streak, leaderboard logic |
| `js/feedback.js` [NEW] | Feedback form CRUD |
| `js/games/*.js` [NEW] | 6 game files mới |
| `js/decks.js` | Sub-deck expand, SRS badges, sequential learn |
| `js/app.js` | stripTones search, HanziWriter, auto TTS, SRS hooks |
| `index.html` | Game page, Feedback page, HanziWriter CDN, modal upgrades |
| `css/style.css` | Sub-deck tree, game styles, streak calendar, feedback form |

---

## 🔎 Open Questions

> [!IMPORTANT]
> **Q1:** Deck HSK cố định — khi click "Học" trên deck HSK to (ví dụ HSK 1), có muốn hiện trang Deck Detail chọn mode (Flashcard/Typing) hay bắt đầu ngay?
> 
> **Đề xuất:** Vẫn hiện Deck Detail nhưng bỏ "Số thẻ" và "Thứ tự" — SRS tự quyết.

> [!IMPORTANT]  
> **Q2:** Sub-deck theo chủ đề — khi click vào sub-deck "Chào hỏi" bên trong HSK 1, có muốn hiện Deck Detail riêng (chọn mode) hay học ngay?
>
> **Đề xuất:** Hiện Deck Detail riêng, cho chọn mode.

> [!NOTE]
> **Q3:** SRS — Số từ mới mỗi ngày nên mặc định bao nhiêu? Anki default = 20.
> 
> **Đề xuất:** 20 từ mới/ngày, có thể chỉnh trong settings sau.

---

## ✅ Verification Plan

### Automated Tests
- Console: không có JS errors
- SRS: test `calculateInterval()` với các input quality 1-4
- Search: test `stripTones("ni3hao3")` === `stripTones("nǐ hǎo")`

### Browser Tests
- Deck Browser: expand HSK 1 → thấy sub-decks theo topic
- Click sub-deck → Deck Detail → Học → SRS tracking
- Dictionary: gõ "nihao" → hiện 你好
- Modal: mở → auto TTS + HanziWriter animation
- Modal: click "Luyện viết" → interactive quiz mode
