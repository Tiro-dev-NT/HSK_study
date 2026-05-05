// HSK 6 Vocabulary — Batch 3 (academic & literary)
(function() {
  var b = [
  // Academic & Research
  {h:"阐述",p:"chǎnshù",v:"Trình bày rõ",e:"Elaborate/expound",t:"actions"},
  {h:"概括",p:"gàikuò",v:"Khái quát",e:"Summarize",t:"actions"},
  {h:"探讨",p:"tàntǎo",v:"Thảo luận/khám phá",e:"Explore/discuss",t:"actions"},
  {h:"验证",p:"yànzhèng",v:"Xác minh",e:"Verify",t:"actions"},
  {h:"论证",p:"lùnzhèng",v:"Lập luận",e:"Argue/demonstrate",t:"actions"},
  {h:"推断",p:"tuīduàn",v:"Suy luận",e:"Infer/deduce",t:"actions"},
  {h:"归因",p:"guīyīn",v:"Quy nhân",e:"Attribute to",t:"actions"},
  {h:"批判",p:"pīpàn",v:"Phê phán",e:"Criticize",t:"actions"},
  {h:"剖析",p:"pōuxī",v:"Mổ xẻ/phân tích",e:"Dissect/analyze",t:"actions"},
  {h:"权衡利弊",p:"quánhéng lìbì",v:"Cân nhắc lợi hại",e:"Weigh pros and cons",t:"mental"},
  // Literary Expressions
  {h:"淡泊名利",p:"dànbó mínglì",v:"Coi thường danh lợi",e:"Indifferent to fame/gain",t:"arts"},
  {h:"栩栩如生",p:"xǔxǔ rú shēng",v:"Sinh động như thật",e:"Lifelike/vivid",t:"arts"},
  {h:"叹为观止",p:"tàn wéi guān zhǐ",v:"Kinh ngạc khâm phục",e:"Breathtaking",t:"arts"},
  {h:"引人入胜",p:"yǐn rén rù shèng",v:"Hấp dẫn lôi cuốn",e:"Captivating",t:"arts"},
  {h:"娓娓道来",p:"wěiwěi dào lái",v:"Kể chuyện hấp dẫn",e:"Narrate engagingly",t:"arts"},
  {h:"意境",p:"yìjìng",v:"Ý cảnh",e:"Artistic conception",t:"arts"},
  {h:"意蕴",p:"yìyùn",v:"Ý nghĩa sâu xa",e:"Profound meaning",t:"arts"},
  {h:"行云流水",p:"xíng yún liú shuǐ",v:"Như mây như nước",e:"Flowing/natural",t:"arts"},
  {h:"出神入化",p:"chū shén rù huà",v:"Thần diệu vô song",e:"Superb/consummate",t:"arts"},
  // Political & Social
  {h:"霸权",p:"bàquán",v:"Bá quyền",e:"Hegemony",t:"politics"},
  {h:"裁军",p:"cáijūn",v:"Giải trừ quân bị",e:"Disarmament",t:"politics"},
  {h:"独裁",p:"dúcái",v:"Độc tài",e:"Dictatorship",t:"politics"},
  {h:"多党制",p:"duō dǎng zhì",v:"Chế độ đa đảng",e:"Multi-party system",t:"politics"},
  {h:"公民社会",p:"gōngmín shèhuì",v:"Xã hội công dân",e:"Civil society",t:"politics"},
  {h:"和平共处",p:"hépíng gòngchǔ",v:"Cùng tồn tại hoà bình",e:"Peaceful coexistence",t:"politics"},
  {h:"人权",p:"rénquán",v:"Nhân quyền",e:"Human rights",t:"politics"},
  {h:"外交",p:"wàijiāo",v:"Ngoại giao",e:"Diplomacy",t:"politics"},
  {h:"主权",p:"zhǔquán",v:"Chủ quyền",e:"Sovereignty",t:"politics"},
  // Philosophy
  {h:"辩证法",p:"biànzhèngfǎ",v:"Phép biện chứng",e:"Dialectics",t:"mental"},
  {h:"存在主义",p:"cúnzài zhǔyì",v:"Chủ nghĩa hiện sinh",e:"Existentialism",t:"mental"},
  {h:"道德观",p:"dàodéguān",v:"Quan điểm đạo đức",e:"Moral values",t:"mental"},
  {h:"反思",p:"fǎnsī",v:"Phản tư",e:"Reflect/introspect",t:"mental"},
  {h:"价值判断",p:"jiàzhí pànduàn",v:"Phán đoán giá trị",e:"Value judgment",t:"mental"},
  {h:"认识论",p:"rènshílùn",v:"Nhận thức luận",e:"Epistemology",t:"mental"},
  {h:"世界观",p:"shìjièguān",v:"Thế giới quan",e:"Worldview",t:"mental"},
  {h:"形而上学",p:"xíng ér shàngxué",v:"Siêu hình học",e:"Metaphysics",t:"mental"},
  // Economy (advanced)
  {h:"泡沫经济",p:"pàomò jīngjì",v:"Kinh tế bong bóng",e:"Bubble economy",t:"society"},
  {h:"贸易顺差",p:"màoyì shùnchā",v:"Thặng dư thương mại",e:"Trade surplus",t:"society"},
  {h:"贸易逆差",p:"màoyì nìchā",v:"Thâm hụt thương mại",e:"Trade deficit",t:"society"},
  {h:"垄断",p:"lǒngduàn",v:"Độc quyền",e:"Monopoly",t:"society"},
  {h:"供应链",p:"gōngyìng liàn",v:"Chuỗi cung ứng",e:"Supply chain",t:"work"},
  {h:"市值",p:"shìzhí",v:"Vốn hoá thị trường",e:"Market cap",t:"work"},
  // Sci & Tech advanced
  {h:"算法",p:"suànfǎ",v:"Thuật toán",e:"Algorithm",t:"objects"},
  {h:"机器学习",p:"jīqì xuéxí",v:"Học máy",e:"Machine learning",t:"objects"},
  {h:"神经网络",p:"shénjīng wǎngluò",v:"Mạng nơ-ron",e:"Neural network",t:"objects"},
  {h:"量子计算",p:"liàngzǐ jìsuàn",v:"Điện toán lượng tử",e:"Quantum computing",t:"objects"},
  {h:"基因编辑",p:"jīyīn biānjí",v:"Chỉnh sửa gen",e:"Gene editing",t:"objects"},
  // Advanced Adjectives
  {h:"不可或缺",p:"bù kě huòquē",v:"Không thể thiếu",e:"Indispensable",t:"adjectives"},
  {h:"触目惊心",p:"chù mù jīng xīn",v:"Đập vào mắt rùng mình",e:"Shocking to see",t:"adjectives"},
  {h:"错综复杂",p:"cuòzōng fùzá",v:"Rối rắm phức tạp",e:"Intricate/complex",t:"adjectives"},
  {h:"千变万化",p:"qiān biàn wàn huà",v:"Muôn hình vạn trạng",e:"Ever-changing",t:"adjectives"},
  {h:"显而易见",p:"xiǎn ér yì jiàn",v:"Rõ ràng dễ thấy",e:"Obvious/evident",t:"adjectives"},
  {h:"瞬息万变",p:"shùn xī wàn biàn",v:"Thay đổi chớp nhoáng",e:"Rapidly changing",t:"adjectives"},
  ];
  var ex = new Set(HSK_DATA[6].map(function(w){return w.h;}));
  b.forEach(function(w){if(!ex.has(w.h)){HSK_DATA[6].push(w);ex.add(w.h);}});
  console.log('[HSK6] batch3 total:',HSK_DATA[6].length);
})();
