// ═══════════════════════════════════════════════════════
// INITIALS DATA — 21 Pinyin Initials (声母)
// Phase O0.2 — HSK 0 Nhập Môn
// IMPORTANT: Use `var` for data files (injected, not module)
// ═══════════════════════════════════════════════════════

var INITIALS_21 = [
  // ── Nhóm 1: Môi (双唇/唇齿) ──
  {
    initial: 'b',
    group: 'lip',
    groupName: 'Môi (双唇)',
    ipa: '[p]',
    vnApprox: 'Giống "b" tiếng Việt nhưng KHÔNG bật hơi',
    position: 'Hai môi khép lại, không rung thanh quản, không thở ra mạnh',
    example: 'bā',
    exampleZh: '八',
    exampleVi: 'Số 8',
    words: [
      {h:'爸爸',p:'bàba',v:'Bố',e:'Dad',level:1},
      {h:'杯子',p:'bēizi',v:'Cốc',e:'Cup',level:1},
      {h:'北京',p:'Běijīng',v:'Bắc Kinh',e:'Beijing',level:1}
    ]
  },
  {
    initial: 'p',
    group: 'lip',
    groupName: 'Môi (双唇)',
    ipa: '[pʰ]',
    vnApprox: 'Giống "p" tiếng Anh "pen" — BẬT HƠI mạnh',
    position: 'Hai môi khép lại, thở ra mạnh khi mở môi (bật hơi)',
    example: 'pā',
    exampleZh: '趴',
    exampleVi: 'Nằm sấp',
    words: [
      {h:'朋友',p:'péngyou',v:'Bạn bè',e:'Friend',level:1},
      {h:'苹果',p:'píngguǒ',v:'Táo',e:'Apple',level:1},
      {h:'漂亮',p:'piàoliang',v:'Đẹp',e:'Beautiful',level:1}
    ]
  },
  {
    initial: 'm',
    group: 'lip',
    groupName: 'Môi (双唇)',
    ipa: '[m]',
    vnApprox: 'Giống "m" tiếng Việt — âm mũi',
    position: 'Hai môi khép lại, hơi thở qua mũi, rung thanh quản',
    example: 'mā',
    exampleZh: '妈',
    exampleVi: 'Mẹ',
    words: [
      {h:'妈妈',p:'māma',v:'Mẹ',e:'Mom',level:1},
      {h:'买',p:'mǎi',v:'Mua',e:'Buy',level:1},
      {h:'猫',p:'māo',v:'Mèo',e:'Cat',level:1}
    ]
  },
  {
    initial: 'f',
    group: 'lip',
    groupName: 'Môi (唇齿)',
    ipa: '[f]',
    vnApprox: 'Giống "f" tiếng Anh "fish"',
    position: 'Răng trên chạm môi dưới, thở ra nhẹ',
    example: 'fā',
    exampleZh: '发',
    exampleVi: 'Phát ra',
    words: [
      {h:'饭',p:'fàn',v:'Cơm',e:'Rice/Meal',level:1},
      {h:'飞机',p:'fēijī',v:'Máy bay',e:'Airplane',level:1},
      {h:'房间',p:'fángjiān',v:'Phòng',e:'Room',level:2}
    ]
  },

  // ── Nhóm 2: Đầu lưỡi (舌尖中) ──
  {
    initial: 'd',
    group: 'tongue-tip',
    groupName: 'Đầu lưỡi (舌尖中)',
    ipa: '[t]',
    vnApprox: 'Giống "đ" tiếng Việt nhưng KHÔNG bật hơi',
    position: 'Đầu lưỡi chạm lợi trên, không bật hơi',
    example: 'dā',
    exampleZh: '搭',
    exampleVi: 'Dựng lên',
    words: [
      {h:'大',p:'dà',v:'To/Lớn',e:'Big',level:1},
      {h:'的',p:'de',v:'(trợ từ)',e:'(particle)',level:1},
      {h:'都',p:'dōu',v:'Đều',e:'All',level:1}
    ]
  },
  {
    initial: 't',
    group: 'tongue-tip',
    groupName: 'Đầu lưỡi (舌尖中)',
    ipa: '[tʰ]',
    vnApprox: 'Giống "t" tiếng Anh "tea" — BẬT HƠI mạnh',
    position: 'Đầu lưỡi chạm lợi trên, thở ra mạnh khi rời (bật hơi)',
    example: 'tā',
    exampleZh: '他',
    exampleVi: 'Anh ấy',
    words: [
      {h:'他',p:'tā',v:'Anh ấy',e:'He',level:1},
      {h:'她',p:'tā',v:'Cô ấy',e:'She',level:1},
      {h:'太',p:'tài',v:'Quá',e:'Too',level:1}
    ]
  },
  {
    initial: 'n',
    group: 'tongue-tip',
    groupName: 'Đầu lưỡi (舌尖中)',
    ipa: '[n]',
    vnApprox: 'Giống "n" tiếng Việt — âm mũi',
    position: 'Đầu lưỡi chạm lợi trên, hơi thở qua mũi',
    example: 'nā',
    exampleZh: '拿',
    exampleVi: 'Cầm/Lấy',
    words: [
      {h:'你',p:'nǐ',v:'Bạn',e:'You',level:1},
      {h:'那',p:'nà',v:'Kia',e:'That',level:1},
      {h:'哪',p:'nǎ',v:'Nào',e:'Which',level:1}
    ]
  },
  {
    initial: 'l',
    group: 'tongue-tip',
    groupName: 'Đầu lưỡi (舌尖中)',
    ipa: '[l]',
    vnApprox: 'Giống "l" tiếng Việt',
    position: 'Đầu lưỡi chạm lợi trên, hơi thở qua hai bên lưỡi',
    example: 'lā',
    exampleZh: '拉',
    exampleVi: 'Kéo',
    words: [
      {h:'老师',p:'lǎoshī',v:'Giáo viên',e:'Teacher',level:1},
      {h:'来',p:'lái',v:'Đến',e:'Come',level:1},
      {h:'冷',p:'lěng',v:'Lạnh',e:'Cold',level:1}
    ]
  },

  // ── Nhóm 3: Cuống lưỡi (舌根) ──
  {
    initial: 'g',
    group: 'tongue-root',
    groupName: 'Cuống lưỡi (舌根)',
    ipa: '[k]',
    vnApprox: 'Giống "g" tiếng Việt "gà" nhưng KHÔNG bật hơi',
    position: 'Cuống lưỡi chạm vòm họng, không bật hơi',
    example: 'gā',
    exampleZh: '嘎',
    exampleVi: 'Tiếng kêu',
    words: [
      {h:'哥哥',p:'gēge',v:'Anh trai',e:'Older brother',level:1},
      {h:'高',p:'gāo',v:'Cao',e:'Tall',level:1},
      {h:'狗',p:'gǒu',v:'Chó',e:'Dog',level:1}
    ]
  },
  {
    initial: 'k',
    group: 'tongue-root',
    groupName: 'Cuống lưỡi (舌根)',
    ipa: '[kʰ]',
    vnApprox: 'Giống "k" tiếng Anh "key" — BẬT HƠI mạnh',
    position: 'Cuống lưỡi chạm vòm họng, thở ra mạnh khi rời (bật hơi)',
    example: 'kā',
    exampleZh: '咖',
    exampleVi: 'Cà phê (咖啡)',
    words: [
      {h:'看',p:'kàn',v:'Xem/Nhìn',e:'Look',level:1},
      {h:'可以',p:'kěyǐ',v:'Có thể',e:'Can',level:1},
      {h:'快',p:'kuài',v:'Nhanh',e:'Fast',level:1}
    ]
  },
  {
    initial: 'h',
    group: 'tongue-root',
    groupName: 'Cuống lưỡi (舌根)',
    ipa: '[x]',
    vnApprox: 'Giống "h" tiếng Anh "hello" — hơi thở ma sát',
    position: 'Cuống lưỡi gần vòm họng, hơi thở ma sát qua khe hở',
    example: 'hā',
    exampleZh: '哈',
    exampleVi: 'Ha ha',
    words: [
      {h:'好',p:'hǎo',v:'Tốt',e:'Good',level:1},
      {h:'喝',p:'hē',v:'Uống',e:'Drink',level:1},
      {h:'很',p:'hěn',v:'Rất',e:'Very',level:1}
    ]
  },

  // ── Nhóm 4: Mặt lưỡi (舌面) ──
  {
    initial: 'j',
    group: 'tongue-surface',
    groupName: 'Mặt lưỡi (舌面)',
    ipa: '[tɕ]',
    vnApprox: 'Giống "gi" tiếng Việt "giày" — KHÔNG có trong tiếng Anh',
    position: 'Mặt lưỡi áp sát vòm miệng cứng, không bật hơi',
    example: 'jī',
    exampleZh: '鸡',
    exampleVi: 'Gà',
    words: [
      {h:'家',p:'jiā',v:'Nhà',e:'Home',level:1},
      {h:'叫',p:'jiào',v:'Gọi',e:'Call',level:1},
      {h:'今天',p:'jīntiān',v:'Hôm nay',e:'Today',level:1}
    ]
  },
  {
    initial: 'q',
    group: 'tongue-surface',
    groupName: 'Mặt lưỡi (舌面)',
    ipa: '[tɕʰ]',
    vnApprox: 'Giống "q" trong "quý" nhưng BẬT HƠI mạnh hơn',
    position: 'Mặt lưỡi áp sát vòm miệng cứng, thở ra mạnh (bật hơi)',
    example: 'qī',
    exampleZh: '七',
    exampleVi: 'Số 7',
    words: [
      {h:'去',p:'qù',v:'Đi',e:'Go',level:1},
      {h:'前',p:'qián',v:'Trước',e:'Front',level:2},
      {h:'钱',p:'qián',v:'Tiền',e:'Money',level:1}
    ]
  },
  {
    initial: 'x',
    group: 'tongue-surface',
    groupName: 'Mặt lưỡi (舌面)',
    ipa: '[ɕ]',
    vnApprox: 'Giống "x" trong "xin" tiếng Việt — hơi thở ma sát',
    position: 'Mặt lưỡi gần vòm miệng cứng, hơi thở ma sát qua khe hở',
    example: 'xī',
    exampleZh: '西',
    exampleVi: 'Tây',
    words: [
      {h:'谢谢',p:'xièxie',v:'Cảm ơn',e:'Thank you',level:1},
      {h:'学',p:'xué',v:'Học',e:'Study',level:1},
      {h:'小',p:'xiǎo',v:'Nhỏ',e:'Small',level:1}
    ]
  },

  // ── Nhóm 5: Quặt lưỡi (舌尖后) — KHÓ ──
  {
    initial: 'zh',
    group: 'tongue-curl',
    groupName: 'Quặt lưỡi (舌尖后)',
    ipa: '[ʈʂ]',
    vnApprox: 'Giống "tr" tiếng Việt "trà" nhưng lưỡi CONG LÊN',
    position: 'Đầu lưỡi cong lên chạm vòm miệng, không bật hơi',
    example: 'zhā',
    exampleZh: '扎',
    exampleVi: 'Đâm/Cắm',
    words: [
      {h:'中国',p:'Zhōngguó',v:'Trung Quốc',e:'China',level:1},
      {h:'这',p:'zhè',v:'Này',e:'This',level:1},
      {h:'住',p:'zhù',v:'Ở/Sống',e:'Live',level:1}
    ]
  },
  {
    initial: 'ch',
    group: 'tongue-curl',
    groupName: 'Quặt lưỡi (舌尖后)',
    ipa: '[ʈʂʰ]',
    vnApprox: 'Giống "tr" tiếng Việt nhưng lưỡi CONG LÊN + BẬT HƠI',
    position: 'Đầu lưỡi cong lên chạm vòm miệng, thở ra mạnh (bật hơi)',
    example: 'chā',
    exampleZh: '叉',
    exampleVi: 'Cái nĩa',
    words: [
      {h:'吃',p:'chī',v:'Ăn',e:'Eat',level:1},
      {h:'出',p:'chū',v:'Ra',e:'Out',level:1},
      {h:'车',p:'chē',v:'Xe',e:'Vehicle',level:1}
    ]
  },
  {
    initial: 'sh',
    group: 'tongue-curl',
    groupName: 'Quặt lưỡi (舌尖后)',
    ipa: '[ʂ]',
    vnApprox: 'Giống "s" tiếng Anh "she" nhưng lưỡi CONG LÊN',
    position: 'Đầu lưỡi cong lên gần vòm miệng, hơi thở ma sát',
    example: 'shā',
    exampleZh: '沙',
    exampleVi: 'Cát',
    words: [
      {h:'是',p:'shì',v:'Là',e:'Is/Am/Are',level:1},
      {h:'谁',p:'shéi',v:'Ai',e:'Who',level:1},
      {h:'书',p:'shū',v:'Sách',e:'Book',level:1}
    ]
  },
  {
    initial: 'r',
    group: 'tongue-curl',
    groupName: 'Quặt lưỡi (舌尖后)',
    ipa: '[ʐ]',
    vnApprox: 'Giống "r" tiếng Anh "measure" — lưỡi CONG LÊN + rung',
    position: 'Đầu lưỡi cong lên gần vòm miệng, rung thanh quản',
    example: 'rā',
    exampleZh: '然',
    exampleVi: 'Nhiên',
    words: [
      {h:'人',p:'rén',v:'Người',e:'Person',level:1},
      {h:'热',p:'rè',v:'Nóng',e:'Hot',level:1},
      {h:'认识',p:'rènshi',v:'Quen biết',e:'Know',level:1}
    ]
  },

  // ── Nhóm 6: Đầu lưỡi trước (舌尖前) — KHÓ ──
  {
    initial: 'z',
    group: 'tongue-front',
    groupName: 'Đầu lưỡi trước (舌尖前)',
    ipa: '[ts]',
    vnApprox: 'Giống "d" tiếng Việt "da" nhưng lưỡi ở SAU RĂNG',
    position: 'Đầu lưỡi chạm sau răng trên, không bật hơi',
    example: 'zā',
    exampleZh: '扎',
    exampleVi: 'Buộc',
    words: [
      {h:'再见',p:'zàijiàn',v:'Tạm biệt',e:'Goodbye',level:1},
      {h:'在',p:'zài',v:'Ở/Tại',e:'At',level:1},
      {h:'昨天',p:'zuótiān',v:'Hôm qua',e:'Yesterday',level:1}
    ]
  },
  {
    initial: 'c',
    group: 'tongue-front',
    groupName: 'Đầu lưỡi trước (舌尖前)',
    ipa: '[tsʰ]',
    vnApprox: 'Giống "ts" tiếng Anh "cats" — BẬT HƠI mạnh',
    position: 'Đầu lưỡi chạm sau răng trên, thở ra mạnh (bật hơi)',
    example: 'cā',
    exampleZh: '擦',
    exampleVi: 'Lau',
    words: [
      {h:'菜',p:'cài',v:'Rau/Món ăn',e:'Dish',level:1},
      {h:'从',p:'cóng',v:'Từ',e:'From',level:2},
      {h:'错',p:'cuò',v:'Sai',e:'Wrong',level:2}
    ]
  },
  {
    initial: 's',
    group: 'tongue-front',
    groupName: 'Đầu lưỡi trước (舌尖前)',
    ipa: '[s]',
    vnApprox: 'Giống "x" tiếng Việt "xanh" — hơi thở ma sát',
    position: 'Đầu lưỡi gần sau răng trên, hơi thở ma sát qua khe hở',
    example: 'sā',
    exampleZh: '撒',
    exampleVi: 'Rải',
    words: [
      {h:'三',p:'sān',v:'Số 3',e:'Three',level:1},
      {h:'四',p:'sì',v:'Số 4',e:'Four',level:1},
      {h:'岁',p:'suì',v:'Tuổi',e:'Years old',level:1}
    ]
  }
];

// Group metadata for rendering
var INITIAL_GROUPS = [
  {id:'lip', name:'Môi (双唇/唇齿)', desc:'b p m f — Dùng môi và răng', color:'#EF4444', bg:'#FEF2F2'},
  {id:'tongue-tip', name:'Đầu lưỡi (舌尖中)', desc:'d t n l — Lưỡi chạm lợi trên', color:'#F59E0B', bg:'#FFFBEB'},
  {id:'tongue-root', name:'Cuống lưỡi (舌根)', desc:'g k h — Lưỡi chạm vòm họng', color:'#10B981', bg:'#F0FDF4'},
  {id:'tongue-surface', name:'Mặt lưỡi (舌面)', desc:'j q x — Không có trong tiếng Anh', color:'#3B82F6', bg:'#EFF6FF'},
  {id:'tongue-curl', name:'Quặt lưỡi (舌尖后)', desc:'zh ch sh r — KHÓ: lưỡi cong lên', color:'#8B5CF6', bg:'#EDE9FE'},
  {id:'tongue-front', name:'Đầu lưỡi trước (舌尖前)', desc:'z c s — KHÓ: phân biệt với zh/ch/sh', color:'#EC4899', bg:'#FCE7F3'}
];
