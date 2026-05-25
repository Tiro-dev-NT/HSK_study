// ═══════════════════════════════════════════════════════
// TYPING DATA — Pinyin Input Practice (拼音输入法)
// Phase O0.6 — HSK 0 Nhập Môn
// IMPORTANT: Use `var` for data files (injected, not module)
// ═══════════════════════════════════════════════════════

// cands = characters the phone suggests when you type that pinyin
var TYPING_POOL = [
  // Numbers (from O0.5)
  { char: '零', pinyin: 'líng',  base: 'ling',  vi: 'không',     cands: ['零','令','领','另','龄'] },
  { char: '一', pinyin: 'yī',    base: 'yi',    vi: 'một',       cands: ['一','衣','已','以','意'] },
  { char: '二', pinyin: 'èr',    base: 'er',    vi: 'hai',       cands: ['二','耳','而','儿','尔'] },
  { char: '三', pinyin: 'sān',   base: 'san',   vi: 'ba',        cands: ['三','山','散','杉','伞'] },
  { char: '四', pinyin: 'sì',    base: 'si',    vi: 'bốn',       cands: ['四','死','思','丝','寺'] },
  { char: '五', pinyin: 'wǔ',    base: 'wu',    vi: 'năm',       cands: ['五','午','吴','物','舞'] },
  { char: '六', pinyin: 'liù',   base: 'liu',   vi: 'sáu',       cands: ['六','留','流','刘','陆'] },
  { char: '七', pinyin: 'qī',    base: 'qi',    vi: 'bảy',       cands: ['七','期','气','起','其'] },
  { char: '八', pinyin: 'bā',    base: 'ba',    vi: 'tám',       cands: ['八','爸','把','吧','巴'] },
  { char: '九', pinyin: 'jiǔ',   base: 'jiu',   vi: 'chín',      cands: ['九','久','就','旧','酒'] },
  { char: '十', pinyin: 'shí',   base: 'shi',   vi: 'mười',      cands: ['十','时','是','市','石'] },
  { char: '百', pinyin: 'bǎi',   base: 'bai',   vi: 'trăm',      cands: ['百','白','败','拜','柏'] },
  { char: '千', pinyin: 'qiān',  base: 'qian',  vi: 'nghìn',     cands: ['千','钱','前','欠','签'] },
  // Common vocabulary
  { char: '妈', pinyin: 'mā',    base: 'ma',    vi: 'mẹ',        cands: ['妈','马','吗','麻','骂'] },
  { char: '爸', pinyin: 'bà',    base: 'ba',    vi: 'bố',        cands: ['爸','八','把','吧','巴'] },
  { char: '你', pinyin: 'nǐ',    base: 'ni',    vi: 'bạn',       cands: ['你','泥','逆','尼','拟'] },
  { char: '我', pinyin: 'wǒ',    base: 'wo',    vi: 'tôi',       cands: ['我','窝','卧','握','蜗'] },
  { char: '他', pinyin: 'tā',    base: 'ta',    vi: 'anh ấy',    cands: ['他','她','它','塔','踏'] },
  { char: '好', pinyin: 'hǎo',   base: 'hao',   vi: 'tốt',       cands: ['好','号','毫','豪','浩'] },
  { char: '是', pinyin: 'shì',   base: 'shi',   vi: 'là',        cands: ['是','时','市','试','室'] },
  { char: '不', pinyin: 'bù',    base: 'bu',    vi: 'không',     cands: ['不','步','部','布','补'] },
  { char: '大', pinyin: 'dà',    base: 'da',    vi: 'lớn',       cands: ['大','打','搭','达','答'] },
  { char: '小', pinyin: 'xiǎo',  base: 'xiao',  vi: 'nhỏ',       cands: ['小','笑','孝','校','晓'] },
  { char: '吃', pinyin: 'chī',   base: 'chi',   vi: 'ăn',        cands: ['吃','迟','痴','齿','尺'] },
  { char: '来', pinyin: 'lái',   base: 'lai',   vi: 'đến',       cands: ['来','莱','赖','籁','徕'] },
  { char: '去', pinyin: 'qù',    base: 'qu',    vi: 'đi',        cands: ['去','取','趣','区','曲'] },
  { char: '学', pinyin: 'xué',   base: 'xue',   vi: 'học',       cands: ['学','雪','穴','薛','削'] },
  { char: '中', pinyin: 'zhōng', base: 'zhong', vi: 'trung',     cands: ['中','种','重','众','钟'] },
  { char: '人', pinyin: 'rén',   base: 'ren',   vi: 'người',     cands: ['人','仁','任','忍','刃'] },
  { char: '天', pinyin: 'tiān',  base: 'tian',  vi: 'trời/ngày', cands: ['天','田','填','添','甜'] },
  { char: '月', pinyin: 'yuè',   base: 'yue',   vi: 'tháng',     cands: ['月','越','约','跃','乐'] },
  { char: '年', pinyin: 'nián',  base: 'nian',  vi: 'năm',       cands: ['年','念','廿','鲶','粘'] },
  { char: '今', pinyin: 'jīn',   base: 'jin',   vi: 'nay',       cands: ['今','金','进','近','紧'] },
  { char: '星', pinyin: 'xīng',  base: 'xing',  vi: 'thứ/sao',   cands: ['星','行','形','型','性'] },
  { char: '水', pinyin: 'shuǐ',  base: 'shui',  vi: 'nước',      cands: ['水','谁','睡','税','顺'] },
  { char: '语', pinyin: 'yǔ',    base: 'yu',    vi: 'ngôn ngữ',  cands: ['语','雨','与','鱼','欲'] }
];

// Step-by-step setup guide for 3 platforms
var TYPING_PLATFORMS = [
  {
    name: 'iOS (iPhone/iPad)',
    icon: '🍎',
    color: '#1D1D1F',
    bg: '#F5F5F7',
    steps: [
      'Vào Cài đặt → Cài đặt chung → Bàn phím',
      'Nhấn "Bàn phím mới" → chọn "Tiếng Trung Giản thể"',
      'Bật "Pinyin" (KHÔNG chọn Cangjie hay Wubihua)',
      'Gõ pinyin không dấu → chọn chữ đúng từ thanh gợi ý'
    ]
  },
  {
    name: 'Android / Gboard',
    icon: '🔵',
    color: '#1A73E8',
    bg: '#EFF5FF',
    steps: [
      'Tải Gboard từ Google Play (nếu chưa có)',
      'Vào Cài đặt Gboard → Ngôn ngữ → Thêm bàn phím',
      'Chọn "Tiếng Trung Giản thể" → "Pinyin"',
      'Nhấn biểu tượng 🌐 để chuyển sang bàn phím Trung'
    ]
  },
  {
    name: 'Windows 10 / 11',
    icon: '🪟',
    color: '#0078D4',
    bg: '#EFF6FF',
    steps: [
      'Cài đặt → Thời gian & ngôn ngữ → Ngôn ngữ & khu vực',
      'Thêm ngôn ngữ → tìm "Chinese (Simplified, China)"',
      'Tải bộ tính năng → chọn "Microsoft Pinyin"',
      'Chuyển bàn phím: Win+Space hoặc nhấn IME trên thanh tác vụ'
    ]
  }
];
