# HSK Vocabulary Game Center — AI Build Specification

## Tổng quan dự án

Web học từ vựng tiếng Trung theo chuẩn HSK (1–9), tích hợp khu vui chơi gồm **8 game** kết hợp học và giải trí. Mỗi game có cơ chế riêng, dùng chung một kho dữ liệu từ vựng HSK.

---

## Kiến trúc dữ liệu

### Cấu trúc 1 từ vựng (VocabWord)

```typescript
interface VocabWord {
  id: string;           // unique ID, ví dụ: "hsk1_001"
  zh: string;           // chữ Hán giản thể, ví dụ: "你好"
  traditional: string;  // phồn thể, ví dụ: "你好"
  pinyin: string;       // có dấu thanh, ví dụ: "nǐ hǎo"
  pinyin_raw: string;   // không dấu, ví dụ: "ni hao"
  meaning_vi: string;   // nghĩa tiếng Việt, ví dụ: "xin chào"
  meaning_en: string;   // nghĩa tiếng Anh
  level: number;        // cấp HSK: 1–9
  category: string;     // chủ đề: "greeting" | "food" | "family" | "work" | ...
  stroke_count: number; // số nét
  audio_url: string;    // đường dẫn file mp3 phát âm chuẩn
}
```

### Cấu trúc bài đọc ngắn (ReadingPassage)

```typescript
interface ReadingPassage {
  id: string;
  level: number;
  topic: string;           // chủ đề bài đọc
  content_zh: string;      // nội dung tiếng Trung
  content_vi: string;      // bản dịch tiếng Việt
  vocab_ids: string[];     // danh sách id từ vựng xuất hiện trong bài
  exercises: FillExercise[]; // bài tập điền từ liên quan
}

interface FillExercise {
  sentence_zh: string;   // câu hoàn chỉnh tiếng Trung
  sentence_vi: string;   // câu hoàn chỉnh tiếng Việt
  blank_word: string;    // từ cần điền (chữ Hán)
  choices: string[];     // 4 lựa chọn (chữ Hán), gồm 1 đúng + 3 sai
  answer: string;        // đáp án đúng
  explanation: string;   // giải thích ngữ pháp
}
```

### Cấu trúc tiến độ người dùng (UserProgress)

```typescript
interface UserProgress {
  user_id: string;
  xp: number;
  level: number;              // cấp độ người dùng 1–100
  streak_days: number;        // số ngày học liên tiếp
  words_learned: string[];    // danh sách vocab id đã học
  game_scores: {
    [gameId: string]: {
      best_score: number;
      play_count: number;
      last_played: Date;
    }
  };
  badges: string[];           // danh sách huy hiệu đã đạt
}
```

---

## Danh sách Game

---

### Game 1: Flashcard lật bài (Spaced Repetition)

**Mô tả:** Người dùng xem chữ Hán → đoán nghĩa trong đầu → lật kiểm tra → đánh giá mức độ nhớ. Hệ thống dùng thuật toán SRS (SM-2) để lên lịch ôn lại.

**Cơ chế SRS (SM-2 đơn giản):**
- Sau mỗi thẻ, người dùng chọn: `Khó (1)` | `Ổn (3)` | `Dễ (5)`
- Từ bị đánh "Khó" → xuất hiện lại sau 1 phút
- Từ bị đánh "Ổn" → xuất hiện lại sau 1 ngày
- Từ bị đánh "Dễ" → xuất hiện lại sau interval × ease_factor ngày

**UI:**
```
┌─────────────────────────────┐
│         [Chữ Hán to]        │  ← mặt trước
│      Nhấn để lật bài        │
└─────────────────────────────┘
         ↓ sau khi lật
┌─────────────────────────────┐
│       [pinyin có dấu]       │
│       [nghĩa tiếng Việt]    │  ← mặt sau
│   [Khó]   [Ổn]   [Dễ]      │
└─────────────────────────────┘
```

**Props/State:**
```typescript
state = {
  queue: VocabWord[];        // hàng đợi thẻ hôm nay
  current: VocabWord;        // thẻ đang hiện
  isFlipped: boolean;
  sessionStats: {
    done: number;
    hard: number;
    ok: number;
    easy: number;
    xp_earned: number;
  }
}
```

**XP:** Dễ +20 | Ổn +10 | Khó +5

---

### Game 2: Trắc nghiệm 4 đáp án (Speed Quiz)

**Mô tả:** Hiện chữ Hán + pinyin, chọn 1 trong 4 nghĩa đúng. Có đồng hồ đếm ngược 60 giây, streak bonus, leaderboard tuần.

**Luật chơi:**
- Mỗi câu đúng: +10 XP
- Streak ≥ 3: +5 XP bonus mỗi câu
- Trả lời sai: streak reset về 0
- Hết 60 giây: hiện kết quả

**Cơ chế tạo đáp án sai:**
- 3 đáp án sai lấy từ cùng cấp HSK và cùng category để tăng độ khó
- Không lặp đáp án trong 1 lượt chơi

**UI layout:**
```
[Điểm: 120]   [Streak 🔥 5]   [Thời gian: 42s]
[Thanh đếm ngược — thu dần]

        [Chữ Hán – 52px]
        [pinyin – mờ hơn]

  [đáp án A]    [đáp án B]
  [đáp án C]    [đáp án D]

[Phản hồi: "Streak x5! +15 XP"]
```

**State:**
```typescript
state = {
  timeLeft: number;          // 0–60
  score: number;
  streak: number;
  bestStreak: number;
  currentWord: VocabWord;
  options: string[];         // 4 nghĩa tiếng Việt
  locked: boolean;           // chặn click sau khi chọn
}
```

---

### Game 3: Trí nhớ ghép đôi (Memory Flip)

**Mô tả:** 8 thẻ úp ngược (4 cặp Hán ↔ nghĩa). Lật 2 thẻ, nếu khớp thì giữ nguyên, không khớp thì úp lại. Đếm số lượt lật.

**Cấp độ khó:**
- Dễ: 4 cặp (8 thẻ), cặp Hán ↔ nghĩa Việt
- Trung: 6 cặp (12 thẻ), cặp Hán ↔ pinyin
- Khó: 8 cặp (16 thẻ), cặp Hán ↔ nghĩa Việt lẫn pinyin xáo trộn

**Xếp hạng theo lượt lật:**
```
≤ 10 lượt → ⭐⭐⭐ Xuất sắc
≤ 16 lượt → ⭐⭐   Tốt
> 16 lượt → ⭐     Cần cải thiện
```

**State:**
```typescript
state = {
  cards: MemCard[];
  revealed: number[];        // index 2 thẻ đang lật
  matched: number[];         // index các thẻ đã ghép đúng
  flips: number;
  pairs_found: number;
  locked: boolean;
}

interface MemCard {
  id: number;                // pair id (2 thẻ cùng id = 1 cặp)
  face: string;              // nội dung hiển thị
  type: 'zh' | 'vn' | 'py'; // loại nội dung
  isRevealed: boolean;
  isMatched: boolean;
}
```

---

### Game 4: Xây câu (Sentence Builder)

**Mô tả:** Cho sẵn các từ đã bị xáo trộn, người dùng click theo thứ tự để tạo câu đúng ngữ pháp tiếng Trung.

**Cơ chế:**
- Mỗi bài có 1 câu tham chiếu bằng tiếng Việt
- Các từ được xáo trộn và hiện dưới dạng chip có thể click
- Nhấn từ → từ xuất hiện vào "vùng xây câu" theo thứ tự nhấn
- Có nút "Xóa hết" để làm lại
- Nhấn "Kiểm tra" → so sánh với đáp án

**Độ khó leo thang:**
- Câu 1–3: 3–4 từ (HSK 1)
- Câu 4–6: 5–6 từ (HSK 2)
- Câu 7–10: 6–8 từ (HSK 3+), có trợ từ như 了、吗、呢

**UI:**
```
Câu 3/10 | Đúng: 2

Tham chiếu: "Bạn thích ăn gì?"

┌─ Vùng xây câu ──────────────┐
│  你  喜欢  吃  ___ ?         │  ← drag/click vào đây
└──────────────────────────────┘

Từ chưa dùng:
[喜欢] [什么] [你] [吃] [？]

[Xóa hết]  [Kiểm tra ✓]
```

---

### Game 5: Điền vào câu trong bài đọc (Context Fill)

**Mô tả:** Cho bài đọc ngắn 4–6 câu → trích ra 3 câu có 1 từ bị che → chọn từ đúng điền vào.

**Cấu trúc 1 bài học:**
1. Bài đọc ngắn (tiếng Trung + dịch Việt)
2. Bảng từ vựng trọng tâm (Hán | pinyin | nghĩa)
3. 3 câu điền từ lấy từ bài đọc
4. Giải thích ngữ pháp sau mỗi câu

**Điểm thưởng:**
- Đúng lần 1: +20 XP
- Đúng lần 2 (sau gợi ý): +10 XP
- Sai: 0 XP, hiện giải thích

**State:**
```typescript
state = {
  passage: ReadingPassage;
  currentEx: number;         // index bài tập hiện tại 0–2
  answers: (string|null)[];  // câu trả lời mỗi ô
  score: number;
  xp: number;
}
```

---

### Game 6: Đánh Boss (Boss Battle)

**Mô tả:** RPG đơn giản — người dùng đối mặt Boss từ vựng, mỗi câu đúng gây sát thương, câu sai Boss phản đòn (mất lượt). Đánh hết HP Boss = thắng.

**Luật chơi:**
- Boss có 100 HP
- Mỗi câu đúng: trừ HP boss (10–25 HP tùy độ khó từ)
- Mỗi câu sai: không gây damage + mất lượt
- Đánh hết boss trong tối đa 8 lượt = thắng
- Nếu chưa hết HP sau 8 lượt = thua

**Boss progression (theo cấp HSK):**
```
Boss 1: Quỷ chữ cái  (HSK 1) — HP 60,  6 câu
Boss 2: Tinh linh từ (HSK 2) — HP 80,  7 câu
Boss 3: Rồng ngữ pháp(HSK 3) — HP 100, 8 câu
Boss 4: Đại ma vương  (HSK 4) — HP 120, 9 câu
```

**UI:**
```
      [Boss face emoji – to]
      [Tên boss]
      [HP: ████████░░ 64/100]

Lượt: 3/8 | Điểm: 45

    "漂亮 có nghĩa là gì?"
         [piào liang]

  -25 HP!   (animation)

[thông minh] [xinh đẹp] ← đúng
[vui vẻ]    [tốt bụng]
```

**State:**
```typescript
state = {
  boss: { name: string; emoji: string; maxHp: number; currentHp: number };
  turn: number;
  maxTurns: number;
  score: number;
  questions: BossQuestion[];
  currentQ: number;
  locked: boolean;
  damageDisplay: string;
}
```

---

### Game 7: Đoán từ Wordle (Pinyin Wordle)

**Mô tả:** Đoán pinyin (không dấu) của một chữ Hán trong tối đa 5 lần. Sau mỗi lần đoán, ô chữ đổi màu theo quy tắc Wordle.

**Quy tắc màu:**
- 🟩 Xanh lá: ký tự đúng, đúng vị trí
- 🟨 Vàng: ký tự có trong pinyin nhưng sai vị trí
- ⬜ Xám: ký tự không có trong pinyin

**Dữ liệu từ phù hợp:** Ưu tiên từ đơn âm tiết có pinyin 3–5 ký tự (ví dụ: shu, shui, hao, ni, xue)

**Hiển thị:** Chữ Hán to + nghĩa tiếng Việt luôn hiện → người dùng đoán pinyin

**Bàn phím ảo:** a–z, hiển thị màu theo lịch sử đoán

```
Chữ: 水 (nước)

[s][h][u][i][ ]    ← lần đoán 1: shui ✓✓✓✓
[s][h][u][ ][ ]    ← lần đoán 2 (nếu sai)
[ ][ ][ ][ ][ ]    ← lần 3
[ ][ ][ ][ ][ ]    ← lần 4
[ ][ ][ ][ ][ ]    ← lần 5

[a][b][c][d][e][f][g]
[h][i][j][k][l][m][n]
[o][p][q][r][s][t][u]
[v][w][x][y][z]
```

---

### Game 8: Đua xe (Racing Quiz)

**Mô tả:** 2 xe đua trên đường thẳng, người dùng trả lời đúng thì xe tiến, sai thì đứng yên. Đua với bot (xe CPU tự di chuyển). Đích 100m.

**Cơ chế:**
- Xe người dùng: trả lời đúng → tiến 15m | sai → đứng yên
- Xe CPU: mỗi câu tự tiến 0–12m ngẫu nhiên (xác suất đúng ~70%)
- Câu hỏi: nhìn nghĩa tiếng Việt → chọn chữ Hán đúng trong 4 lựa chọn
- Thời gian trả lời mỗi câu: 8 giây (có thanh đếm ngược)

**UI:**
```
[Câu hỏi: "bạn bè"]

  Bạn  🚗━━━━━━━━━━━━━━━━━━━━━━▶ [42m]
  CPU  🏎━━━━━━━━━━━━━━━━━━━━━━▶ [37m]
  
  [你好] [朋友] ← đúng
  [老师] [学生]
  
  ⏱ 6 giây còn lại
```

**State:**
```typescript
state = {
  playerPos: number;         // 0–100 mét
  cpuPos: number;
  question: VocabWord;
  options: string[];
  timeLeft: number;
  round: number;
  status: 'playing' | 'win' | 'lose' | 'draw';
}
```

---

## Hệ thống Gamification

### XP và Level

```
Level 1:  0 – 500 XP
Level 2:  500 – 1200 XP
Level 3:  1200 – 2500 XP
...
Level 10: 15000+ XP
```

### Streak hằng ngày

- Học ít nhất 1 game mỗi ngày = +1 streak
- Streak 7 ngày: +100 XP bonus
- Streak 30 ngày: huy hiệu đặc biệt
- Mất 1 ngày: streak reset

### Huy hiệu (Badge)

| ID | Tên | Điều kiện |
|----|-----|-----------|
| `first_word` | Từ đầu tiên | Học từ đầu tiên |
| `hsk1_complete` | Tốt nghiệp HSK 1 | Học đủ 500 từ HSK 1 |
| `streak_7` | Học đều 7 ngày | Streak 7 ngày |
| `streak_30` | Kiên trì | Streak 30 ngày |
| `boss_slayer` | Diệt boss | Thắng tất cả boss |
| `speed_demon` | Tốc chiến | Đạt 200 điểm Speed Quiz |
| `memory_master` | Trí nhớ siêu việt | Ghép đôi ≤10 lượt |
| `wordle_genius` | Thiên tài Wordle | Đoán đúng lần 1 |

### Bảng xếp hạng (Leaderboard)

- Tuần: reset mỗi thứ 2
- Xếp theo: XP tuần
- Hiển thị: Top 10 + vị trí của người dùng

---

## Yêu cầu kỹ thuật

### Frontend
- **Framework:** React + TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion (flip card, boss damage, xe đua)
- **Audio:** Web Audio API — phát âm từ khi lật thẻ hoặc hiện đáp án
- **State:** Zustand hoặc Redux Toolkit

### Backend API

```
GET  /api/vocab?level=1&limit=20         → danh sách từ theo cấp
GET  /api/vocab/random?level=1&count=10  → từ ngẫu nhiên
GET  /api/passages?level=2               → bài đọc theo cấp
POST /api/progress                       → lưu tiến độ
GET  /api/leaderboard?period=week        → bảng xếp hạng
POST /api/badges/check                   → kiểm tra badge mới
```

### Database schema (tóm tắt)

```sql
vocab_words (id, zh, traditional, pinyin, pinyin_raw, meaning_vi, meaning_en, level, category, stroke_count, audio_url)
reading_passages (id, level, topic, content_zh, content_vi)
fill_exercises (id, passage_id, sentence_zh, sentence_vi, blank_word, choices_json, answer, explanation)
users (id, username, xp, level, streak_days, last_active)
user_word_progress (user_id, word_id, ease_factor, interval, next_review, repetitions)
game_scores (user_id, game_id, score, played_at)
user_badges (user_id, badge_id, earned_at)
```

---

## Thứ tự ưu tiên build

| Pha | Game | Lý do |
|-----|------|-------|
| 1 | Flashcard + Trắc nghiệm | Cốt lõi, dễ build nhất |
| 2 | Điền vào câu + Xây câu | Hiệu quả học cao |
| 3 | Trí nhớ + Đánh Boss | Tăng tính giải trí |
| 4 | Wordle + Đua xe | Viral, giữ chân user |

---

## Ghi chú cho AI

- Mỗi game là 1 React component độc lập, nhận `words: VocabWord[]` làm prop
- Tất cả game dùng chung hook `useGameProgress()` để lưu XP và badge
- Audio phát âm: gọi `playAudio(word.audio_url)` sau mỗi lượt hiện từ
- Responsive: mobile-first, game grid co lại trên màn hình nhỏ
- Dark mode: dùng CSS variables, không hardcode màu
- Tất cả text tiếng Trung dùng font `Noto Sans SC` hoặc `Ma Shan Zheng`
