// ═══════════════════════════════════════════════════════
// HSK 0 EXAM DATA — shared question banks
// Used by: hsk0-final.js + hsk0-placement.js
// IMPORTANT: Use `var` (dynamic-injected data file)
// ═══════════════════════════════════════════════════════

// 12 tone identification questions
var HSK0_TONE_BANK = [
  { q: 'Ký hiệu nào biểu thị <strong>Thanh 1</strong> (cao bằng)?',
    opts: ['ā', 'á', 'ǎ', 'à'], ans: 'ā' },
  { q: 'Ký hiệu nào biểu thị <strong>Thanh 2</strong> (lên)?',
    opts: ['ā', 'á', 'ǎ', 'à'], ans: 'á' },
  { q: 'Ký hiệu nào biểu thị <strong>Thanh 3</strong> (xuống rồi lên)?',
    opts: ['ā', 'á', 'ǎ', 'à'], ans: 'ǎ' },
  { q: 'Ký hiệu nào biểu thị <strong>Thanh 4</strong> (xuống mạnh)?',
    opts: ['ā', 'á', 'ǎ', 'à'], ans: 'à' },
  { q: 'Pinyin <strong>mā</strong> (妈 — mẹ) có thanh mấy?',
    opts: ['Thanh 1', 'Thanh 2', 'Thanh 3', 'Thanh 4'], ans: 'Thanh 1' },
  { q: 'Pinyin <strong>má</strong> (麻 — tê) có thanh mấy?',
    opts: ['Thanh 1', 'Thanh 2', 'Thanh 3', 'Thanh 4'], ans: 'Thanh 2' },
  { q: 'Pinyin <strong>mǎ</strong> (马 — ngựa) có thanh mấy?',
    opts: ['Thanh 1', 'Thanh 2', 'Thanh 3', 'Thanh 4'], ans: 'Thanh 3' },
  { q: 'Pinyin <strong>mà</strong> (骂 — mắng) có thanh mấy?',
    opts: ['Thanh 1', 'Thanh 2', 'Thanh 3', 'Thanh 4'], ans: 'Thanh 4' },
  { q: 'Pinyin <strong>nǐ</strong> (你 — bạn) có thanh mấy?',
    opts: ['Thanh 1', 'Thanh 2', 'Thanh 3', 'Thanh 4'], ans: 'Thanh 3' },
  { q: 'Pinyin <strong>shí</strong> (十 — mười) có thanh mấy?',
    opts: ['Thanh 1', 'Thanh 2', 'Thanh 3', 'Thanh 4'], ans: 'Thanh 2' },
  { q: 'Pinyin <strong>hǎo</strong> (好 — tốt) có thanh mấy?',
    opts: ['Thanh 1', 'Thanh 2', 'Thanh 3', 'Thanh 4'], ans: 'Thanh 3' },
  { q: 'Pinyin <strong>shì</strong> (是 — là) có thanh mấy?',
    opts: ['Thanh 1', 'Thanh 2', 'Thanh 3', 'Thanh 4'], ans: 'Thanh 4' }
];

// 10 initial consonant questions
var HSK0_INITIAL_BANK = [
  { q: 'Nhóm âm đầu nào <strong>cuốn lưỡi</strong> (retroflex)?',
    opts: ['zh · ch · sh · r', 'z · c · s', 'j · q · x', 'b · p · m · f'], ans: 'zh · ch · sh · r' },
  { q: 'Sự khác nhau giữa <strong>zh</strong> và <strong>z</strong> là gì?',
    opts: ['zh cuốn lưỡi, z không', 'z cuốn lưỡi, zh không', 'Cả hai đều cuốn lưỡi', 'Không có sự khác biệt'],
    ans: 'zh cuốn lưỡi, z không' },
  { q: 'Sự khác nhau giữa <strong>sh</strong> và <strong>s</strong> là gì?',
    opts: ['sh cuốn lưỡi, s không', 's cuốn lưỡi, sh không', 'Phát âm hoàn toàn giống nhau', 's mạnh hơn sh'],
    ans: 'sh cuốn lưỡi, s không' },
  { q: 'Âm đầu <strong>j · q · x</strong> chỉ đi với vần nào?',
    opts: ['i / ü (và dẫn xuất)', 'a / o / e', 'Tất cả mọi vần', 'u / uo / ua'],
    ans: 'i / ü (và dẫn xuất)' },
  { q: 'Âm đầu của <strong>中</strong> (trung) là gì?',
    opts: ['zh', 'z', 'ch', 'j'], ans: 'zh' },
  { q: 'Âm đầu của <strong>七</strong> (bảy) là gì?',
    opts: ['q', 'x', 'j', 'ch'], ans: 'q' },
  { q: 'Âm đầu của <strong>小</strong> (nhỏ) là gì?',
    opts: ['x', 'sh', 'q', 's'], ans: 'x' },
  { q: 'Âm đầu nào phát âm bằng <strong>hai môi khép lại</strong>?',
    opts: ['b · p · m', 'f · v · w', 'j · q · x', 'zh · ch · sh'], ans: 'b · p · m' },
  { q: 'Âm <strong>r</strong> trong tiếng Trung gần giống âm nào tiếng Việt?',
    opts: ['Không có âm tương đương, cần luyện riêng', 'r như tiếng Anh "run"', 'Giống "g" tiếng Việt', 'Giống "rờ" hoàn toàn'],
    ans: 'Không có âm tương đương, cần luyện riêng' },
  { q: 'Âm đầu <strong>f</strong> trong tiếng Trung giống âm nào?',
    opts: ['f tiếng Việt (ph-)', 'v tiếng Anh', 'p bật hơi mạnh', 'Môi dưới chạm răng trên — khác f Việt'],
    ans: 'f tiếng Việt (ph-)' }
];

// 10 stroke questions (supplements STROKES_8 global)
var HSK0_STROKE_BANK = [
  { q: 'Có bao nhiêu nét viết cơ bản (基本笔画) trong tiếng Trung?',
    opts: ['8', '6', '10', '5'], ans: '8' },
  { q: 'Nét <strong>横 héng</strong> có hướng nào?',
    opts: ['Trái → Phải (→)', 'Trên → Dưới (↓)', 'Trên-phải → Dưới-trái (↙)', 'Trên-trái → Dưới-phải (↘)'],
    ans: 'Trái → Phải (→)' },
  { q: 'Nét <strong>竖 shù</strong> có hướng nào?',
    opts: ['Trên → Dưới (↓)', 'Trái → Phải (→)', 'Trên-phải → Dưới-trái (↙)', 'Trên-trái → Dưới-phải (↘)'],
    ans: 'Trên → Dưới (↓)' },
  { q: 'Nét <strong>撇 piě</strong> có hướng nào?',
    opts: ['Trên-phải → Dưới-trái (↙)', 'Trên-trái → Dưới-phải (↘)', 'Trái → Phải (→)', 'Trên → Dưới (↓)'],
    ans: 'Trên-phải → Dưới-trái (↙)' },
  { q: 'Nét <strong>捺 nà</strong> có hướng nào?',
    opts: ['Trên-trái → Dưới-phải (↘)', 'Trên-phải → Dưới-trái (↙)', 'Trái → Phải (→)', 'Trên → Dưới (↓)'],
    ans: 'Trên-trái → Dưới-phải (↘)' },
  { q: 'Nét nào <strong>đổi hướng (gập)</strong> giữa chừng?',
    opts: ['折 zhé', '横 héng', '竖 shù', '点 diǎn'], ans: '折 zhé' },
  { q: 'Nét nào kết thúc bằng <strong>móc ngược lên</strong>?',
    opts: ['钩 gōu', '提 tí', '折 zhé', '捺 nà'], ans: '钩 gōu' },
  { q: 'Nét <strong>点 diǎn</strong> trông như thế nào?',
    opts: ['Chấm ngắn hướng xuống', 'Gạch ngang', 'Gạch đứng', 'Gạch chéo lên'],
    ans: 'Chấm ngắn hướng xuống' },
  { q: 'Nét <strong>提 tí</strong> có hướng nào?',
    opts: ['Dưới-trái → Trên-phải (↗)', 'Trên-phải → Dưới-trái (↙)', 'Trái → Phải (→)', 'Trên → Dưới (↓)'],
    ans: 'Dưới-trái → Trên-phải (↗)' },
  { q: 'Chữ <strong>一</strong> (một) chứa nét cơ bản nào?',
    opts: ['横 héng (ngang)', '竖 shù (dọc)', '撇 piě (phẩy)', '点 diǎn (chấm)'],
    ans: '横 héng (ngang)' }
];
