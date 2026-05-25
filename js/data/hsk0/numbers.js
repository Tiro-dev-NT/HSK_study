// ═══════════════════════════════════════════════════════
// NUMBERS DATA — Numbers & Dates (数字/日期)
// Phase O0.5 — HSK 0 Nhập Môn
// IMPORTANT: Use `var` for data files (injected, not module)
// ═══════════════════════════════════════════════════════

// Color by tone: 1st=blue, 2nd=green, 3rd=orange, 4th=red, neutral=gray
var NUMBERS_BASE = [
  { num: 0,    char: '零', pinyin: 'líng',  tone: 2, vi: 'Không', color: '#6B7280' },
  { num: 1,    char: '一', pinyin: 'yī',    tone: 1, vi: 'Một',   color: '#2563EB' },
  { num: 2,    char: '二', pinyin: 'èr',    tone: 4, vi: 'Hai',   color: '#DC2626' },
  { num: 3,    char: '三', pinyin: 'sān',   tone: 1, vi: 'Ba',    color: '#2563EB' },
  { num: 4,    char: '四', pinyin: 'sì',    tone: 4, vi: 'Bốn',   color: '#DC2626' },
  { num: 5,    char: '五', pinyin: 'wǔ',    tone: 3, vi: 'Năm',   color: '#D97706' },
  { num: 6,    char: '六', pinyin: 'liù',   tone: 4, vi: 'Sáu',   color: '#DC2626' },
  { num: 7,    char: '七', pinyin: 'qī',    tone: 1, vi: 'Bảy',   color: '#2563EB' },
  { num: 8,    char: '八', pinyin: 'bā',    tone: 1, vi: 'Tám',   color: '#2563EB' },
  { num: 9,    char: '九', pinyin: 'jiǔ',   tone: 3, vi: 'Chín',  color: '#D97706' },
  { num: 10,   char: '十', pinyin: 'shí',   tone: 2, vi: 'Mười',  color: '#059669' },
  { num: 100,  char: '百', pinyin: 'bǎi',   tone: 3, vi: 'Trăm',  color: '#7C3AED' },
  { num: 1000, char: '千', pinyin: 'qiān',  tone: 1, vi: 'Nghìn', color: '#0891B2' }
];

// Compound number formation examples (for learning section)
var COMPOUND_EXAMPLES = [
  { val: 11,  char: '十一',   py: 'shí yī',    rule: '十 + 一' },
  { val: 15,  char: '十五',   py: 'shí wǔ',    rule: '十 + 五' },
  { val: 20,  char: '二十',   py: 'èr shí',    rule: '二 + 十' },
  { val: 23,  char: '二十三', py: 'èr shí sān', rule: '二十 + 三' },
  { val: 99,  char: '九十九', py: 'jiǔshíjiǔ', rule: '九十 + 九' },
  { val: 200, char: '两百',   py: 'liǎng bǎi', rule: '两 + 百 (!)' }
];

// Compound numbers for quiz generation
var QUIZ_COMPOUNDS = [
  { val: 11, char: '十一' },   { val: 14, char: '十四' },
  { val: 20, char: '二十' },   { val: 23, char: '二十三' },
  { val: 35, char: '三十五' }, { val: 48, char: '四十八' },
  { val: 67, char: '六十七' }, { val: 72, char: '七十二' },
  { val: 90, char: '九十' },   { val: 99, char: '九十九' }
];

var WEEKDAYS = [
  { num: 1, char: '星期一', pinyin: 'xīngqī yī',  vi: 'Thứ Hai',  alt: '周一' },
  { num: 2, char: '星期二', pinyin: 'xīngqī èr',  vi: 'Thứ Ba',   alt: '周二' },
  { num: 3, char: '星期三', pinyin: 'xīngqī sān', vi: 'Thứ Tư',   alt: '周三' },
  { num: 4, char: '星期四', pinyin: 'xīngqī sì',  vi: 'Thứ Năm',  alt: '周四' },
  { num: 5, char: '星期五', pinyin: 'xīngqī wǔ',  vi: 'Thứ Sáu',  alt: '周五' },
  { num: 6, char: '星期六', pinyin: 'xīngqī liù', vi: 'Thứ Bảy',  alt: '周六' },
  { num: 7, char: '星期日', pinyin: 'xīngqī rì',  vi: 'Chủ Nhật', alt: '周日' }
];

var DATE_PHRASES = [
  { zh: '今天',   py: 'jīntiān',    vi: 'Hôm nay',    ex: '今天星期几？(Hôm nay thứ mấy?)' },
  { zh: '明天',   py: 'míngtiān',   vi: 'Ngày mai',   ex: '明天是几号？(Ngày mai ngày mấy?)' },
  { zh: '昨天',   py: 'zuótiān',    vi: 'Hôm qua',    ex: '昨天是星期一。(Hôm qua là thứ Hai.)' },
  { zh: '几号',   py: 'jǐ hào',     vi: 'Ngày mấy',   ex: '今天几号？(Hôm nay ngày mấy?)' },
  { zh: '几月',   py: 'jǐ yuè',     vi: 'Tháng mấy',  ex: '现在几月？(Bây giờ tháng mấy?)' },
  { zh: '星期几', py: 'xīngqī jǐ',  vi: 'Thứ mấy',    ex: '今天星期几？(Hôm nay thứ mấy?)' }
];

// Month character lookup (index 0 = Tháng 1)
var MONTH_CHARS = ['一','二','三','四','五','六','七','八','九','十','十一','十二'];
