// ═══════════════════════════════════════════════════════
// STROKES DATA — 8 Basic Chinese Strokes (基本笔画)
// Phase O0.4 — HSK 0 Nhập Môn
// IMPORTANT: Use `var` for data files (injected, not module)
// ═══════════════════════════════════════════════════════

var STROKES_8 = [
  {
    id: 1,
    char: '横', pinyin: 'héng', nameVN: 'Ngang',
    desc: 'Bút đi ngang từ trái sang phải, lực đều, cuối nhấc nhẹ',
    direction: '→',
    type: 'heng',
    color: '#DC2626',
    exChar: '一', exPinyin: 'yī', exMeaning: 'Một',
    moreEx: ['王', '三', '土'],
    // SVG path in 200×200 viewBox
    svgPath: 'M 22,100 L 178,100',
    // Canvas practice: expected angle (Math.atan2 degrees, 0°=right, 90°=down)
    practice: { type: 'simple', angleMin: -30, angleMax: 30 }
  },
  {
    id: 2,
    char: '竖', pinyin: 'shù', nameVN: 'Dọc',
    desc: 'Bút đi thẳng từ trên xuống dưới, không nghiêng',
    direction: '↓',
    type: 'shu',
    color: '#2563EB',
    exChar: '十', exPinyin: 'shí', exMeaning: 'Mười',
    moreEx: ['工', '日', '口'],
    svgPath: 'M 100,22 L 100,178',
    practice: { type: 'simple', angleMin: 60, angleMax: 120 }
  },
  {
    id: 3,
    char: '撇', pinyin: 'piě', nameVN: 'Phẩy',
    desc: 'Bút chéo từ trên-phải xuống dưới-trái, cuối "phẩy" nhẹ nhàng',
    direction: '↙',
    type: 'pie',
    color: '#7C3AED',
    exChar: '人', exPinyin: 'rén', exMeaning: 'Người',
    moreEx: ['大', '八', '月'],
    svgPath: 'M 155,25 L 35,165',
    practice: { type: 'simple', angleMin: 112, angleMax: 175 }
  },
  {
    id: 4,
    char: '捺', pinyin: 'nà', nameVN: 'Mác',
    desc: 'Bút chéo từ trên-trái xuống dưới-phải, cuối có "đuôi sóng" dày hơn',
    direction: '↘',
    type: 'na',
    color: '#D97706',
    exChar: '大', exPinyin: 'dà', exMeaning: 'Lớn',
    moreEx: ['太', '木', '火'],
    svgPath: 'M 35,25 L 175,165',
    practice: { type: 'simple', angleMin: 20, angleMax: 78 }
  },
  {
    id: 5,
    char: '点', pinyin: 'diǎn', nameVN: 'Chấm',
    desc: 'Nét ngắn như chấm nhỏ, bút chấm từ trên xuống dưới-phải',
    direction: '•',
    type: 'dian',
    color: '#059669',
    exChar: '六', exPinyin: 'liù', exMeaning: 'Sáu',
    moreEx: ['文', '主', '心'],
    svgPath: 'M 72,48 L 122,108',
    practice: { type: 'short', angleMin: 20, angleMax: 100, maxLen: 130 }
  },
  {
    id: 6,
    char: '折', pinyin: 'zhé', nameVN: 'Gấp',
    desc: 'Bút ngang rồi gấp xuống tạo góc (hình chữ L), đổi hướng tại điểm gấp',
    direction: '→↓',
    type: 'zhe',
    color: '#0891B2',
    exChar: '口', exPinyin: 'kǒu', exMeaning: 'Miệng',
    moreEx: ['日', '目', '山'],
    svgPath: 'M 22,68 L 162,68 L 162,172',
    practice: { type: 'compound', turn: 'right-down', split: 0.4 }
  },
  {
    id: 7,
    char: '钩', pinyin: 'gōu', nameVN: 'Móc',
    desc: 'Nét dọc xuống rồi có đuôi móc nhỏ hất sang trái ở cuối',
    direction: '↓↙',
    type: 'gou',
    color: '#C026D3',
    exChar: '子', exPinyin: 'zǐ', exMeaning: 'Con',
    moreEx: ['小', '水', '了'],
    svgPath: 'M 100,22 L 100,162 L 68,186',
    practice: { type: 'compound', turn: 'down-left', split: 0.65 }
  },
  {
    id: 8,
    char: '提', pinyin: 'tí', nameVN: 'Khởi',
    desc: 'Nét ngắn hất từ dưới-trái lên trên-phải, như nét "hất lên"',
    direction: '↗',
    type: 'ti',
    color: '#EA580C',
    exChar: '地', exPinyin: 'dì', exMeaning: 'Đất',
    moreEx: ['场', '坐', '打'],
    svgPath: 'M 32,158 L 168,72',
    practice: { type: 'simple', angleMin: -70, angleMax: -20 }
  }
];
