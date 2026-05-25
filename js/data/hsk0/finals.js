// ═══════════════════════════════════════════════════════
// FINALS DATA — 36 Pinyin Finals (韵母)
// Phase O0.3 — HSK 0 Nhập Môn
// IMPORTANT: Use `var` for data files (injected, not module)
// ═══════════════════════════════════════════════════════

var FINALS_36 = [
  // ── Nhóm 1: Đơn âm (单韵母) ──
  {
    final: 'a',
    group: 'simple',
    groupName: 'Đơn âm (单韵母)',
    ipa: '[a]',
    vnApprox: 'A mở rộng giống tiếng Việt',
    position: 'Miệng mở rộng, lưỡi hạ thấp. Âm thoát ra rõ và thẳng, không tròn môi.',
    samplePinyin: 'mā',
    sampleZh: '妈',
    sampleVi: 'Mẹ',
    note: 'Vần nền tảng nhất; nhiều vần đôi và vần mũi bắt đầu từ a.',
    words: [
      {h:'爸爸',p:'bàba',v:'Bố',e:'Dad',level:1},
      {h:'妈妈',p:'māma',v:'Mẹ',e:'Mom',level:1},
      {h:'八',p:'bā',v:'Số 8',e:'Eight',level:1}
    ]
  },
  {
    final: 'o',
    group: 'simple',
    groupName: 'Đơn âm (单韵母)',
    ipa: '[o]',
    vnApprox: 'Ô tròn môi, gần âm ô tiếng Việt nhưng ngắn hơn',
    position: 'Môi tròn nhẹ, lưỡi lùi về sau. Không kéo dài thành ou.',
    samplePinyin: 'bō',
    sampleZh: '波',
    sampleVi: 'Sóng',
    note: 'Thường gặp sau b, p, m, f hoặc trong tổ hợp uo khi viết thành wo, duo, guo.',
    words: [
      {h:'我',p:'wǒ',v:'Tôi',e:'I',level:1},
      {h:'多',p:'duō',v:'Nhiều',e:'Many',level:1},
      {h:'坐',p:'zuò',v:'Ngồi',e:'Sit',level:1}
    ]
  },
  {
    final: 'e',
    group: 'simple',
    groupName: 'Đơn âm (单韵母)',
    ipa: '[ɤ]',
    vnApprox: 'Gần âm ơ nhưng lưỡi lùi sâu hơn',
    position: 'Miệng mở vừa, môi không tròn. Cuống lưỡi hơi nâng lên, âm phát từ phía sau miệng.',
    samplePinyin: 'hē',
    sampleZh: '喝',
    sampleVi: 'Uống',
    note: 'Không đọc thành ê tiếng Việt; đây là âm phía sau hơn.',
    words: [
      {h:'的',p:'de',v:'Trợ từ',e:'Particle',level:1},
      {h:'喝',p:'hē',v:'Uống',e:'Drink',level:1},
      {h:'车',p:'chē',v:'Xe',e:'Vehicle',level:1}
    ]
  },
  {
    final: 'i',
    group: 'simple',
    groupName: 'Đơn âm (单韵母)',
    ipa: '[i]',
    vnApprox: 'I giống tiếng Việt',
    position: 'Môi kéo ngang nhẹ, mặt lưỡi nâng cao gần vòm miệng cứng.',
    samplePinyin: 'yī',
    sampleZh: '一',
    sampleVi: 'Số 1',
    note: 'Sau z, c, s, zh, ch, sh, r âm i biến thành âm giữ lưỡi, không đọc như y dài.',
    words: [
      {h:'你',p:'nǐ',v:'Bạn',e:'You',level:1},
      {h:'一',p:'yī',v:'Số 1',e:'One',level:1},
      {h:'鸡',p:'jī',v:'Gà',e:'Chicken',level:1}
    ]
  },
  {
    final: 'u',
    group: 'simple',
    groupName: 'Đơn âm (单韵母)',
    ipa: '[u]',
    vnApprox: 'U giống tiếng Việt, môi tròn',
    position: 'Môi tròn và đưa nhẹ ra trước, lưỡi lùi về sau và nâng cao.',
    samplePinyin: 'shū',
    sampleZh: '书',
    sampleVi: 'Sách',
    note: 'Giữ môi tròn ổn định, đừng chuyển thành âm ư.',
    words: [
      {h:'书',p:'shū',v:'Sách',e:'Book',level:1},
      {h:'五',p:'wǔ',v:'Số 5',e:'Five',level:1},
      {h:'不',p:'bù',v:'Không',e:'No/Not',level:1}
    ]
  },
  {
    final: 'ü',
    group: 'simple',
    groupName: 'Đơn âm (单韵母)',
    ipa: '[y]',
    vnApprox: 'I nhưng tròn môi như u',
    position: 'Đặt lưỡi như đọc i, sau đó tròn môi như đọc u. Đây là âm khó vì tiếng Việt không có trực tiếp.',
    samplePinyin: 'jū',
    sampleZh: '居',
    sampleVi: 'Ở/Cư trú',
    note: 'Sau j, q, x, y dấu hai chấm thường bị bỏ khi viết: ju, qu, xu, yu vẫn đọc là ü.',
    words: [
      {h:'女',p:'nǚ',v:'Nữ',e:'Female',level:1},
      {h:'雨',p:'yǔ',v:'Mưa',e:'Rain',level:1},
      {h:'去',p:'qù',v:'Đi',e:'Go',level:1}
    ]
  },

  // ── Nhóm 2: Đôi âm (复韵母) ──
  {
    final: 'ai',
    group: 'diphthong',
    groupName: 'Đôi âm (复韵母)',
    ipa: '[ai]',
    vnApprox: 'Ai như tiếng Việt',
    position: 'Bắt đầu bằng a mở rộng rồi lướt nhanh sang i. Âm chính là a.',
    samplePinyin: 'kāi',
    sampleZh: '开',
    sampleVi: 'Mở',
    note: 'Đừng tách thành hai âm rời; đọc liền một nhịp.',
    words: [
      {h:'白',p:'bái',v:'Trắng',e:'White',level:1},
      {h:'买',p:'mǎi',v:'Mua',e:'Buy',level:1},
      {h:'菜',p:'cài',v:'Món ăn',e:'Dish',level:1}
    ]
  },
  {
    final: 'ei',
    group: 'diphthong',
    groupName: 'Đôi âm (复韵母)',
    ipa: '[ei]',
    vnApprox: 'Êi, gần âm ây nhưng sáng hơn',
    position: 'Miệng mở vừa ở e rồi lướt sang i. Không đọc thành ê đơn.',
    samplePinyin: 'bēi',
    sampleZh: '杯',
    sampleVi: 'Cốc',
    note: 'Âm kết thúc nhẹ ở i, không kéo dài thành hai tiếng.',
    words: [
      {h:'杯子',p:'bēizi',v:'Cốc',e:'Cup',level:1},
      {h:'北京',p:'Běijīng',v:'Bắc Kinh',e:'Beijing',level:1},
      {h:'给',p:'gěi',v:'Cho',e:'Give',level:1}
    ]
  },
  {
    final: 'ao',
    group: 'diphthong',
    groupName: 'Đôi âm (复韵母)',
    ipa: '[au]',
    vnApprox: 'Ao như tiếng Việt',
    position: 'Bắt đầu bằng a mở, kết thúc bằng o/u tròn môi. Âm chính nằm ở a.',
    samplePinyin: 'gāo',
    sampleZh: '高',
    sampleVi: 'Cao',
    note: 'Không đọc thành o đơn; cần lướt từ a sang tròn môi.',
    words: [
      {h:'好',p:'hǎo',v:'Tốt',e:'Good',level:1},
      {h:'猫',p:'māo',v:'Mèo',e:'Cat',level:1},
      {h:'高',p:'gāo',v:'Cao',e:'Tall',level:1}
    ]
  },
  {
    final: 'ou',
    group: 'diphthong',
    groupName: 'Đôi âm (复韵母)',
    ipa: '[ou]',
    vnApprox: 'Âu/âu nhưng gọn hơn',
    position: 'Môi bắt đầu hơi tròn rồi tròn hơn ở cuối. Lưỡi lùi nhẹ về sau.',
    samplePinyin: 'dōu',
    sampleZh: '都',
    sampleVi: 'Đều',
    note: 'Giữ âm ngắn và tròn, đừng đọc thành au.',
    words: [
      {h:'有',p:'yǒu',v:'Có',e:'Have',level:1},
      {h:'走',p:'zǒu',v:'Đi bộ',e:'Walk',level:1},
      {h:'狗',p:'gǒu',v:'Chó',e:'Dog',level:1}
    ]
  },
  {
    final: 'ia',
    group: 'diphthong',
    groupName: 'Đôi âm (复韵母)',
    ipa: '[ia]',
    vnApprox: 'Ia, lướt từ i sang a',
    position: 'Bắt đầu ở vị trí i rồi mở miệng nhanh sang a. Âm a rõ hơn ở cuối.',
    samplePinyin: 'jiā',
    sampleZh: '家',
    sampleVi: 'Nhà',
    note: 'Khi không có initial, ia thường viết là ya.',
    words: [
      {h:'家',p:'jiā',v:'Nhà',e:'Home',level:1},
      {h:'下',p:'xià',v:'Dưới',e:'Below',level:1},
      {h:'牙',p:'yá',v:'Răng',e:'Tooth',level:1}
    ]
  },
  {
    final: 'ie',
    group: 'diphthong',
    groupName: 'Đôi âm (复韵母)',
    ipa: '[iɛ]',
    vnApprox: 'Iê, gần iê tiếng Việt nhưng ngắn hơn',
    position: 'Bắt đầu như i rồi mở nhẹ sang e/ê. Không đọc thành i + e tách rời.',
    samplePinyin: 'xiē',
    sampleZh: '些',
    sampleVi: 'Một vài',
    note: 'Khi không có initial, ie thường viết là ye.',
    words: [
      {h:'谢谢',p:'xièxie',v:'Cảm ơn',e:'Thank you',level:1},
      {h:'写',p:'xiě',v:'Viết',e:'Write',level:1},
      {h:'也',p:'yě',v:'Cũng',e:'Also',level:1}
    ]
  },
  {
    final: 'ua',
    group: 'diphthong',
    groupName: 'Đôi âm (复韵母)',
    ipa: '[ua]',
    vnApprox: 'Oa/ua, lướt từ u sang a',
    position: 'Bắt đầu tròn môi như u rồi mở nhanh sang a. Âm a là phần chính.',
    samplePinyin: 'huā',
    sampleZh: '花',
    sampleVi: 'Hoa',
    note: 'Khi không có initial, ua thường viết là wa.',
    words: [
      {h:'花',p:'huā',v:'Hoa',e:'Flower',level:1},
      {h:'话',p:'huà',v:'Lời nói',e:'Speech',level:1},
      {h:'瓜',p:'guā',v:'Dưa',e:'Melon',level:1}
    ]
  },
  {
    final: 'uo',
    group: 'diphthong',
    groupName: 'Đôi âm (复韵母)',
    ipa: '[uo]',
    vnApprox: 'Ua/uô, tròn môi rồi giữ o',
    position: 'Môi tròn từ đầu, lưỡi lùi sau. Lướt từ u sang o thật gọn.',
    samplePinyin: 'duō',
    sampleZh: '多',
    sampleVi: 'Nhiều',
    note: 'Khi không có initial, uo thường viết là wo.',
    words: [
      {h:'我',p:'wǒ',v:'Tôi',e:'I',level:1},
      {h:'多',p:'duō',v:'Nhiều',e:'Many',level:1},
      {h:'国',p:'guó',v:'Nước',e:'Country',level:1}
    ]
  },
  {
    final: 'üe',
    group: 'diphthong',
    groupName: 'Đôi âm (复韵母)',
    ipa: '[yɛ]',
    vnApprox: 'Üê, vừa tròn môi vừa mở sang e',
    position: 'Bắt đầu ở ü: lưỡi như i, môi tròn như u; sau đó mở nhẹ sang e.',
    samplePinyin: 'yuē',
    sampleZh: '约',
    sampleVi: 'Hẹn',
    note: 'Sau j, q, x, y thường viết là ue/yue nhưng vẫn đọc là üe.',
    words: [
      {h:'学',p:'xué',v:'Học',e:'Study',level:1},
      {h:'月',p:'yuè',v:'Tháng/Mặt trăng',e:'Month/Moon',level:1},
      {h:'雪',p:'xuě',v:'Tuyết',e:'Snow',level:1}
    ]
  },

  // ── Nhóm 3: Tam âm (三合复韵母) ──
  {
    final: 'iao',
    group: 'triphthong',
    groupName: 'Tam âm (三合复韵母)',
    ipa: '[iau]',
    vnApprox: 'Iao, lướt i → a → o',
    position: 'Bắt đầu ở i, mở rộng sang a rồi tròn môi nhẹ ở cuối. Âm chính là a.',
    samplePinyin: 'jiāo',
    sampleZh: '教',
    sampleVi: 'Dạy',
    note: 'Dễ nhầm với iou/iu; iao mở miệng rõ ở giữa.',
    words: [
      {h:'小',p:'xiǎo',v:'Nhỏ',e:'Small',level:1},
      {h:'叫',p:'jiào',v:'Gọi',e:'Call',level:1},
      {h:'笑',p:'xiào',v:'Cười',e:'Smile',level:1}
    ]
  },
  {
    final: 'iou',
    group: 'triphthong',
    groupName: 'Tam âm (三合复韵母)',
    ipa: '[iou]',
    vnApprox: 'Iu, lướt i → ou',
    position: 'Bắt đầu ở i rồi tròn môi dần sang ou. Không mở miệng rộng như iao.',
    samplePinyin: 'xiū',
    sampleZh: '休',
    sampleVi: 'Nghỉ',
    note: 'Sau initial, iou được viết rút gọn thành iu: qiú, liù, jiǔ.',
    words: [
      {h:'六',p:'liù',v:'Số 6',e:'Six',level:1},
      {h:'九',p:'jiǔ',v:'Số 9',e:'Nine',level:1},
      {h:'球',p:'qiú',v:'Quả bóng',e:'Ball',level:1}
    ]
  },
  {
    final: 'uai',
    group: 'triphthong',
    groupName: 'Tam âm (三合复韵母)',
    ipa: '[uai]',
    vnApprox: 'Oai/uai',
    position: 'Bắt đầu tròn môi như u, mở sang a rồi lướt sang i. Âm a là phần nổi bật.',
    samplePinyin: 'guāi',
    sampleZh: '乖',
    sampleVi: 'Ngoan',
    note: 'Khi không có initial, uai thường viết là wai.',
    words: [
      {h:'快',p:'kuài',v:'Nhanh',e:'Fast',level:1},
      {h:'外',p:'wài',v:'Ngoài',e:'Outside',level:1},
      {h:'块',p:'kuài',v:'Miếng/đồng',e:'Piece/Yuan',level:1}
    ]
  },
  {
    final: 'uei',
    group: 'triphthong',
    groupName: 'Tam âm (三合复韵母)',
    ipa: '[uei]',
    vnApprox: 'Uây/ui, tròn môi rồi lướt sang i',
    position: 'Bắt đầu ở u, qua e rất nhanh rồi kết thúc ở i. Âm giữa thường rất nhẹ.',
    samplePinyin: 'guī',
    sampleZh: '归',
    sampleVi: 'Trở về',
    note: 'Sau initial, uei được viết rút gọn thành ui: guì, shuǐ, duì.',
    words: [
      {h:'水',p:'shuǐ',v:'Nước',e:'Water',level:1},
      {h:'对',p:'duì',v:'Đúng/Đối với',e:'Correct/To',level:1},
      {h:'会',p:'huì',v:'Biết/biết làm',e:'Can/Meeting',level:1}
    ]
  },

  // ── Nhóm 4: Mũi -n trước (前鼻音韵母) ──
  {
    final: 'an',
    group: 'nasal-n',
    groupName: 'Mũi -n trước (前鼻音)',
    ipa: '[an]',
    vnApprox: 'An gần tiếng Việt',
    position: 'Mở miệng ở a rồi khép đầu lưỡi lên lợi trên để kết thúc bằng n.',
    samplePinyin: 'sān',
    sampleZh: '三',
    sampleVi: 'Số 3',
    note: 'Kết thúc bằng đầu lưỡi, không đưa âm về cuống lưỡi như ang.',
    words: [
      {h:'看',p:'kàn',v:'Xem/Nhìn',e:'Look',level:1},
      {h:'三',p:'sān',v:'Số 3',e:'Three',level:1},
      {h:'饭',p:'fàn',v:'Cơm/Bữa ăn',e:'Meal',level:1}
    ]
  },
  {
    final: 'en',
    group: 'nasal-n',
    groupName: 'Mũi -n trước (前鼻音)',
    ipa: '[ən]',
    vnApprox: 'Ân/ơn ngắn',
    position: 'Âm e/ơ ngắn rồi khép đầu lưỡi ở lợi trên để kết thúc bằng n.',
    samplePinyin: 'gēn',
    sampleZh: '跟',
    sampleVi: 'Với/Theo',
    note: 'Dễ nhầm với eng; en kết thúc phía trước miệng.',
    words: [
      {h:'人',p:'rén',v:'Người',e:'Person',level:1},
      {h:'门',p:'mén',v:'Cửa',e:'Door',level:1},
      {h:'很',p:'hěn',v:'Rất',e:'Very',level:1}
    ]
  },
  {
    final: 'in',
    group: 'nasal-n',
    groupName: 'Mũi -n trước (前鼻音)',
    ipa: '[in]',
    vnApprox: 'In như tiếng Việt nhưng gọn hơn',
    position: 'Lưỡi ở vị trí i, sau đó đầu lưỡi chạm lợi trên để đóng bằng n.',
    samplePinyin: 'xīn',
    sampleZh: '新',
    sampleVi: 'Mới',
    note: 'Dễ nhầm với ing; in ngắn và đóng bằng đầu lưỡi.',
    words: [
      {h:'新',p:'xīn',v:'Mới',e:'New',level:1},
      {h:'今天',p:'jīntiān',v:'Hôm nay',e:'Today',level:1},
      {h:'心',p:'xīn',v:'Tim/Lòng',e:'Heart',level:1}
    ]
  },
  {
    final: 'ün',
    group: 'nasal-n',
    groupName: 'Mũi -n trước (前鼻音)',
    ipa: '[yn]',
    vnApprox: 'Ün, i tròn môi rồi đóng n',
    position: 'Bắt đầu ở ü: lưỡi như i, môi tròn như u; kết thúc bằng đầu lưỡi chạm lợi trên.',
    samplePinyin: 'jūn',
    sampleZh: '军',
    sampleVi: 'Quân đội',
    note: 'Sau j, q, x, y thường viết là un/yun nhưng vẫn đọc là ün: jūn, qún, xún, yún.',
    words: [
      {h:'云',p:'yún',v:'Mây',e:'Cloud',level:1},
      {h:'群',p:'qún',v:'Nhóm',e:'Group',level:1},
      {h:'军',p:'jūn',v:'Quân đội',e:'Army',level:1}
    ]
  },
  {
    final: 'ian',
    group: 'nasal-n',
    groupName: 'Mũi -n trước (前鼻音)',
    ipa: '[iɛn]',
    vnApprox: 'Iên/iên nhưng mở hơn',
    position: 'Bắt đầu ở i, mở sang e/a nhẹ rồi kết thúc bằng n phía trước.',
    samplePinyin: 'tiān',
    sampleZh: '天',
    sampleVi: 'Trời/Ngày',
    note: 'Không đọc thành i + an tách rời; phần giữa giống ê mở.',
    words: [
      {h:'今天',p:'jīntiān',v:'Hôm nay',e:'Today',level:1},
      {h:'年',p:'nián',v:'Năm',e:'Year',level:1},
      {h:'见',p:'jiàn',v:'Gặp',e:'Meet',level:1}
    ]
  },
  {
    final: 'uan',
    group: 'nasal-n',
    groupName: 'Mũi -n trước (前鼻音)',
    ipa: '[uan]',
    vnApprox: 'Oan/uan',
    position: 'Bắt đầu tròn môi ở u, mở sang a rồi đóng bằng n đầu lưỡi.',
    samplePinyin: 'guān',
    sampleZh: '关',
    sampleVi: 'Đóng/Liên quan',
    note: 'Khi không có initial, uan thường viết là wan.',
    words: [
      {h:'玩',p:'wán',v:'Chơi',e:'Play',level:1},
      {h:'关',p:'guān',v:'Đóng/Liên quan',e:'Close/Concern',level:1},
      {h:'晚',p:'wǎn',v:'Muộn/Tối',e:'Late/Evening',level:1}
    ]
  },
  {
    final: 'üan',
    group: 'nasal-n',
    groupName: 'Mũi -n trước (前鼻音)',
    ipa: '[yɛn]',
    vnApprox: 'Üen/yên tròn môi',
    position: 'Bắt đầu bằng ü tròn môi, mở sang e/a nhẹ rồi kết thúc bằng n đầu lưỡi.',
    samplePinyin: 'juān',
    sampleZh: '捐',
    sampleVi: 'Quyên góp',
    note: 'Chỉ đi với j, q, x, y; khi viết bỏ dấu hai chấm: juan, quan, xuan, yuan.',
    words: [
      {h:'全',p:'quán',v:'Toàn bộ',e:'Whole',level:1},
      {h:'元',p:'yuán',v:'Nhân dân tệ',e:'Yuan',level:1},
      {h:'远',p:'yuǎn',v:'Xa',e:'Far',level:1}
    ]
  },
  {
    final: 'uen',
    group: 'nasal-n',
    groupName: 'Mũi -n trước (前鼻音)',
    ipa: '[uən]',
    vnApprox: 'Uân/uơn ngắn',
    position: 'Bắt đầu tròn môi ở u, qua e/ơ rất nhanh rồi đóng bằng n đầu lưỡi.',
    samplePinyin: 'chūn',
    sampleZh: '春',
    sampleVi: 'Mùa xuân',
    note: 'Sau initial thường viết rút gọn thành un: chūn, lùn; không có initial viết là wen.',
    words: [
      {h:'问',p:'wèn',v:'Hỏi',e:'Ask',level:1},
      {h:'文',p:'wén',v:'Văn',e:'Writing',level:1},
      {h:'春',p:'chūn',v:'Mùa xuân',e:'Spring',level:1}
    ]
  },

  // ── Nhóm 5: Mũi -ng sau (后鼻音韵母) ──
  {
    final: 'ang',
    group: 'nasal-ng',
    groupName: 'Mũi -ng sau (后鼻音)',
    ipa: '[aŋ]',
    vnApprox: 'Ang như tiếng Việt nhưng vang hơn',
    position: 'Mở miệng ở a rồi đóng âm ở cuống lưỡi, hơi vang qua mũi.',
    samplePinyin: 'fāng',
    sampleZh: '方',
    sampleVi: 'Phương/Hướng',
    note: 'Khác an ở chỗ kết thúc phía sau miệng, không chạm đầu lưỡi.',
    words: [
      {h:'上',p:'shàng',v:'Trên/Lên',e:'Up/On',level:1},
      {h:'忙',p:'máng',v:'Bận',e:'Busy',level:1},
      {h:'王',p:'wáng',v:'Vua/Họ Vương',e:'King/Wang',level:1}
    ]
  },
  {
    final: 'eng',
    group: 'nasal-ng',
    groupName: 'Mũi -ng sau (后鼻音)',
    ipa: '[əŋ]',
    vnApprox: 'Âng/ơng',
    position: 'Âm e/ơ ngắn rồi đóng ở cuống lưỡi. Âm vang qua mũi rõ hơn en.',
    samplePinyin: 'fēng',
    sampleZh: '风',
    sampleVi: 'Gió',
    note: 'Dễ nhầm với en; eng kéo âm về phía sau miệng.',
    words: [
      {h:'冷',p:'lěng',v:'Lạnh',e:'Cold',level:1},
      {h:'能',p:'néng',v:'Có thể',e:'Can',level:1},
      {h:'风',p:'fēng',v:'Gió',e:'Wind',level:1}
    ]
  },
  {
    final: 'ing',
    group: 'nasal-ng',
    groupName: 'Mũi -ng sau (后鼻音)',
    ipa: '[iŋ]',
    vnApprox: 'Ing/inh nhưng đóng sau',
    position: 'Bắt đầu ở i, sau đó cuống lưỡi nâng lên để kết thúc bằng ng.',
    samplePinyin: 'tīng',
    sampleZh: '听',
    sampleVi: 'Nghe',
    note: 'Dễ nhầm với in; ing dài và vang hơn, không chạm đầu lưỡi.',
    words: [
      {h:'听',p:'tīng',v:'Nghe',e:'Listen',level:1},
      {h:'北京',p:'Běijīng',v:'Bắc Kinh',e:'Beijing',level:1},
      {h:'名字',p:'míngzi',v:'Tên',e:'Name',level:1}
    ]
  },
  {
    final: 'ong',
    group: 'nasal-ng',
    groupName: 'Mũi -ng sau (后鼻音)',
    ipa: '[uŋ]',
    vnApprox: 'Ung/ông tròn môi',
    position: 'Môi tròn, lưỡi lùi sau và đóng bằng ng ở cuống lưỡi.',
    samplePinyin: 'zhōng',
    sampleZh: '中',
    sampleVi: 'Trung/Giữa',
    note: 'Không đọc thành on; âm cuối là ng sau.',
    words: [
      {h:'中国',p:'Zhōngguó',v:'Trung Quốc',e:'China',level:1},
      {h:'红',p:'hóng',v:'Màu đỏ',e:'Red',level:1},
      {h:'同学',p:'tóngxué',v:'Bạn học',e:'Classmate',level:1}
    ]
  },
  {
    final: 'iang',
    group: 'nasal-ng',
    groupName: 'Mũi -ng sau (后鼻音)',
    ipa: '[iaŋ]',
    vnApprox: 'Iang, lướt i → a → ng',
    position: 'Bắt đầu ở i, mở sang a rồi đóng ở cuống lưỡi bằng ng.',
    samplePinyin: 'xiāng',
    sampleZh: '香',
    sampleVi: 'Thơm',
    note: 'Khác ian ở âm cuối ng phía sau.',
    words: [
      {h:'想',p:'xiǎng',v:'Muốn/Nghĩ',e:'Want/Think',level:1},
      {h:'两',p:'liǎng',v:'Hai',e:'Two',level:1},
      {h:'讲',p:'jiǎng',v:'Nói/Giảng',e:'Speak',level:1}
    ]
  },
  {
    final: 'iong',
    group: 'nasal-ng',
    groupName: 'Mũi -ng sau (后鼻音)',
    ipa: '[yŋ]',
    vnApprox: 'Iong/yong, i tròn môi rồi ng',
    position: 'Bắt đầu ở i/ü tròn môi nhẹ, sau đó đóng bằng ng ở cuống lưỡi.',
    samplePinyin: 'xiōng',
    sampleZh: '兄',
    sampleVi: 'Anh trai',
    note: 'Thường viết trong các âm xiong, qiong, yong; âm cuối vẫn là ng sau.',
    words: [
      {h:'熊猫',p:'xióngmāo',v:'Gấu trúc',e:'Panda',level:1},
      {h:'用',p:'yòng',v:'Dùng',e:'Use',level:1},
      {h:'永远',p:'yǒngyuǎn',v:'Mãi mãi',e:'Forever',level:1}
    ]
  },
  {
    final: 'uang',
    group: 'nasal-ng',
    groupName: 'Mũi -ng sau (后鼻音)',
    ipa: '[uaŋ]',
    vnApprox: 'Oang/uang',
    position: 'Bắt đầu tròn môi ở u, mở sang a rồi đóng bằng ng phía sau.',
    samplePinyin: 'guāng',
    sampleZh: '光',
    sampleVi: 'Ánh sáng',
    note: 'Dễ nhầm với uan; uang có âm cuối ng vang và sâu hơn.',
    words: [
      {h:'王',p:'wáng',v:'Vua/Họ Vương',e:'King/Wang',level:1},
      {h:'光',p:'guāng',v:'Ánh sáng',e:'Light',level:1},
      {h:'黄',p:'huáng',v:'Màu vàng',e:'Yellow',level:1}
    ]
  },
  {
    final: 'ueng',
    group: 'nasal-ng',
    groupName: 'Mũi -ng sau (后鼻音)',
    ipa: '[uəŋ]',
    vnApprox: 'Uơng/ueng hiếm gặp',
    position: 'Bắt đầu tròn môi ở u, qua e/ơ rất nhanh rồi đóng bằng ng phía sau.',
    samplePinyin: 'wēng',
    sampleZh: '翁',
    sampleVi: 'Ông lão',
    note: 'Rất hiếm; thường gặp ở dạng weng, như wēng hoặc wēng wēng.',
    words: [
      {h:'翁',p:'wēng',v:'Ông lão',e:'Old man',level:1},
      {h:'嗡',p:'wēng',v:'Tiếng vo ve',e:'Buzz',level:1},
      {h:'瓮',p:'wèng',v:'Vại',e:'Jar',level:1}
    ]
  },

  // ── Nhóm 6: Đặc biệt (特殊韵母) ──
  {
    final: 'er',
    group: 'special',
    groupName: 'Đặc biệt (特殊韵母)',
    ipa: '[ɚ]',
    vnApprox: 'Ơ quặt lưỡi, giống âm r-colored trong tiếng Anh',
    position: 'Đọc e/ơ rồi cong đầu lưỡi lên phía sau. Đây là vần độc lập, không ghép với initial.',
    samplePinyin: 'ér',
    sampleZh: '儿',
    sampleVi: 'Trẻ/con',
    note: 'er là vần đặc biệt; trong khẩu ngữ Bắc Kinh còn có hiện tượng thêm r sau âm khác.',
    words: [
      {h:'二',p:'èr',v:'Số 2',e:'Two',level:1},
      {h:'儿子',p:'érzi',v:'Con trai',e:'Son',level:1},
      {h:'耳朵',p:'ěrduo',v:'Tai',e:'Ear',level:1}
    ]
  }
];

var FINAL_GROUPS = [
  {id:'simple', name:'Đơn âm (单韵母)', desc:'a o e i u ü — 6 âm nền tảng', color:'#EF4444', bg:'#FEF2F2'},
  {id:'diphthong', name:'Đôi âm (复韵母)', desc:'ai ei ao ou · ia ie ua uo üe — lướt 2 âm', color:'#F59E0B', bg:'#FFFBEB'},
  {id:'triphthong', name:'Tam âm (三合复韵母)', desc:'iao iou uai uei — lướt 3 âm, có quy tắc viết tắt', color:'#10B981', bg:'#F0FDF4'},
  {id:'nasal-n', name:'Mũi -n trước (前鼻音)', desc:'an en in ün · ian uan üan uen — đóng bằng đầu lưỡi', color:'#3B82F6', bg:'#EFF6FF'},
  {id:'nasal-ng', name:'Mũi -ng sau (后鼻音)', desc:'ang eng ing ong · iang iong uang ueng — đóng bằng cuống lưỡi', color:'#8B5CF6', bg:'#EDE9FE'},
  {id:'special', name:'Đặc biệt (特殊韵母)', desc:'er — quặt lưỡi, không ghép initial', color:'#EC4899', bg:'#FCE7F3'}
];
