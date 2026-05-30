// ═══════════════════════════════════════════════════════
// COURSE-HSK2.JS — Truyện Mai HSK 2 (Bài 31-71, đang viết)
// Assign vào COURSE_DATA (khai báo ở course-data.js).
// ═══════════════════════════════════════════════════════
Object.assign(COURSE_DATA, {
  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 31: Hành động hằng ngày (1) — 19 từ
  // 办, 帮助, 报名, 背, 比如, 比如说, 变, 变成, 不如, 参观, 参加, 查, 超过, 称, 成, 成为, 出发, 出国, 出口
  // ───────────────────────────────────────────────────────────────────────────
  31: {
    id: 31,
    level: 2,
    title: 'Hành động hằng ngày (1)',
    context: 'Mai và Tiểu Mỹ bàn chuyện đăng ký chương trình du học hè. Hai bạn tìm hiểu thông tin và chuẩn bị hồ sơ.',
    vocabPreview: ['报名', '参加', '出国', '帮助', '变成'],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Thư viện trường · Buổi chiều', bg: 'library',
        cast: ['mai', 'xiaomei'],
        text: 'Mai và Tiểu Mỹ đang ngồi trong thư viện, bàn chuyện du học hè.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: 'Mai，你听说了吗？学校有一个出国的机会！',
        pinyin: 'Mai, nǐ tīngshuō le ma? Xuéxiào yǒu yí gè chūguó de jīhuì!',
        meaning: 'Mai, cậu nghe nói chưa? Trường có một cơ hội đi nước ngoài!',
        expression: 'happy', vocab: ['出国']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '真的吗？我想参加！怎么报名？',
        pinyin: 'Zhēn de ma? Wǒ xiǎng cānjiā! Zěnme bàomíng?',
        meaning: 'Thật không? Tớ muốn tham gia! Đăng ký thế nào?',
        expression: 'surprise', vocab: ['参加', '报名']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我帮助你查一下。比如说，我们可以先去办公室问问。',
        pinyin: 'Wǒ bāngzhù nǐ chá yíxià. Bǐrúshuō, wǒmen kěyǐ xiān qù bàngōngshì wènwen.',
        meaning: 'Tớ giúp cậu tra xem. Ví dụ như, chúng ta có thể đến văn phòng hỏi trước.',
        expression: null, vocab: ['帮助', '查', '比如说']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好主意！比如，我们需要办什么手续？',
        pinyin: 'Hǎo zhǔyi! Bǐrú, wǒmen xūyào bàn shénme shǒuxù?',
        meaning: 'Ý hay! Ví dụ, chúng ta cần làm thủ tục gì?',
        expression: 'curious', vocab: ['比如', '办']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'library',
        scene: '📍 Thư viện trường · Buổi chiều',
        expression: 'focused',
        q: 'Tiểu Mỹ muốn nói "Tớ đã tra rồi". Cô ấy nên nói thế nào?',
        options: [
          { text: '我已经查了。', pinyin: 'Wǒ yǐjīng chá le.', meaning: 'Tớ đã tra rồi.', correct: true,
            feedback: 'Đúng! 查 = tra cứu, tìm kiếm thông tin. 已经...了 = đã...rồi.' },
          { text: '我已经办了。', pinyin: 'Wǒ yǐjīng bàn le.', meaning: 'Tớ đã làm (thủ tục) rồi.', correct: false,
            feedback: '办 = làm/xử lý (thủ tục), không phải tra cứu thông tin.' },
          { text: '我已经背了。', pinyin: 'Wǒ yǐjīng bèi le.', meaning: 'Tớ đã học thuộc rồi.', correct: false,
            feedback: '背 = học thuộc lòng, mang trên lưng — không hợp ngữ cảnh.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我已经查了。报名人数已经超过一百人了！',
        pinyin: 'Wǒ yǐjīng chá le. Bàomíng rénshù yǐjīng chāoguò yìbǎi rén le!',
        meaning: 'Tớ đã tra rồi. Số người đăng ký đã vượt quá một trăm người rồi!',
        expression: 'surprise', vocab: ['超过']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '哇，变成这么多人了！我们要快点报名。',
        pinyin: 'Wa, biànchéng zhème duō rén le! Wǒmen yào kuài diǎn bàomíng.',
        meaning: 'Oa, trở thành nhiều người thế rồi! Chúng ta phải đăng ký nhanh thôi.',
        expression: 'surprise', vocab: ['变成']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"报名" có nghĩa là gì?',
            options: ['đăng ký', 'tham quan', 'xuất phát', 'giúp đỡ'],
            answer: 0
          },
          {
            q: 'Muốn nói "vượt quá 100 người" thì dùng từ nào?',
            options: ['变成', '超过', '成为', '出发'],
            answer: 1
          },
          {
            q: '"帮助" trong câu "我帮助你" có nghĩa là gì?',
            options: ['giúp đỡ', 'tra cứu', 'đăng ký', 'tham gia'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Văn phòng trường · Ngày hôm sau', bg: 'classroom',
        cast: ['mai', 'xiaomei', 'laoli'],
        text: 'Hôm sau, hai bạn đến văn phòng gặp thầy Lý.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '你们想参加出国项目？很好！先要背一些资料。',
        pinyin: 'Nǐmen xiǎng cānjiā chūguó xiàngmù? Hěn hǎo! Xiān yào bèi yìxiē zīliào.',
        meaning: 'Các em muốn tham gia chương trình du học? Tốt lắm! Trước tiên phải học thuộc một số tài liệu.',
        expression: null, vocab: ['背']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '好的，老师。我们什么时候出发？',
        pinyin: 'Hǎo de, lǎoshī. Wǒmen shénme shíhou chūfā?',
        meaning: 'Vâng ạ, thầy. Chúng em khi nào xuất phát ạ?',
        expression: 'curious', vocab: ['出发']
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '下个月。你们会参观很多地方，这个经历会让你们变得更好。',
        pinyin: 'Xià gè yuè. Nǐmen huì cānguān hěn duō dìfang, zhège jīnglì huì ràng nǐmen biàn de gèng hǎo.',
        meaning: 'Tháng sau. Các em sẽ tham quan nhiều nơi, trải nghiệm này sẽ khiến các em trở nên tốt hơn.',
        expression: null, vocab: ['参观', '变']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'], bg: 'classroom',
        scene: '📍 Văn phòng trường',
        expression: 'happy',
        q: 'Mai muốn nói "Em muốn trở thành phiên dịch viên". Cô ấy nên nói thế nào?',
        options: [
          { text: '我想成为翻译。', pinyin: 'Wǒ xiǎng chéngwéi fānyì.', meaning: 'Em muốn trở thành phiên dịch viên.', correct: true,
            feedback: 'Đúng! 成为 = trở thành (nghề nghiệp, vai trò). 翻译 = phiên dịch viên.' },
          { text: '我想变成翻译。', pinyin: 'Wǒ xiǎng biànchéng fānyì.', meaning: 'Em muốn biến thành phiên dịch viên.', correct: false,
            feedback: '变成 thường dùng cho sự biến đổi vật lý/trạng thái, 成为 phù hợp hơn cho nghề nghiệp.' },
          { text: '我想成翻译。', pinyin: 'Wǒ xiǎng chéng fānyì.', meaning: '(Không tự nhiên)', correct: false,
            feedback: '成 một mình ít dùng theo nghĩa này, cần 成为 hoặc 变成.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '我想成为翻译！这次出国对我很重要。',
        pinyin: 'Wǒ xiǎng chéngwéi fānyì! Zhè cì chūguó duì wǒ hěn zhòngyào.',
        meaning: 'Em muốn trở thành phiên dịch viên! Lần đi nước ngoài này rất quan trọng với em.',
        expression: 'happy', vocab: ['成为', '成']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'],
        text: '我也是！不如我们一起准备吧。',
        pinyin: 'Wǒ yě shì! Bùrú wǒmen yìqǐ zhǔnbèi ba.',
        meaning: 'Tớ cũng vậy! Chi bằng chúng ta cùng chuẩn bị đi.',
        expression: 'happy', vocab: ['不如']
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '对了，机场的出口在哪里，你们知道吗？到时候有人接你们。',
        pinyin: 'Duìle, jīchǎng de chūkǒu zài nǎlǐ, nǐmen zhīdào ma? Dàoshíhou yǒu rén jiē nǐmen.',
        meaning: 'À đúng rồi, cửa ra sân bay ở đâu, các em biết không? Lúc đó sẽ có người đón các em.',
        expression: null, vocab: ['出口']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '好的！这个项目也可以称为"梦想之旅"吧！',
        pinyin: 'Hǎo de! Zhège xiàngmù yě kěyǐ chēngwéi "mèngxiǎng zhī lǚ" ba!',
        meaning: 'Vâng ạ! Chương trình này cũng có thể gọi là "Chuyến đi của ước mơ" nhỉ!',
        expression: 'happy', vocab: ['称']
      }
    ],
    vocab: [
      { h: '办', p: 'bàn', v: 'làm, xử lý (thủ tục)' },
      { h: '帮助', p: 'bāngzhù', v: 'giúp đỡ' },
      { h: '报名', p: 'bàomíng', v: 'đăng ký' },
      { h: '背', p: 'bèi', v: 'học thuộc lòng; mang trên lưng' },
      { h: '比如', p: 'bǐrú', v: 'ví dụ' },
      { h: '比如说', p: 'bǐrúshuō', v: 'ví dụ như' },
      { h: '变', p: 'biàn', v: 'thay đổi, biến đổi' },
      { h: '变成', p: 'biànchéng', v: 'biến thành, trở thành' },
      { h: '不如', p: 'bùrú', v: 'chi bằng, không bằng' },
      { h: '参观', p: 'cānguān', v: 'tham quan' },
      { h: '参加', p: 'cānjiā', v: 'tham gia' },
      { h: '查', p: 'chá', v: 'tra cứu, kiểm tra' },
      { h: '超过', p: 'chāoguò', v: 'vượt quá' },
      { h: '称', p: 'chēng', v: 'gọi là, xưng' },
      { h: '成', p: 'chéng', v: 'thành, trở thành' },
      { h: '成为', p: 'chéngwéi', v: 'trở thành' },
      { h: '出发', p: 'chūfā', v: 'xuất phát' },
      { h: '出国', p: 'chūguó', v: 'ra nước ngoài' },
      { h: '出口', p: 'chūkǒu', v: 'cửa ra, lối ra' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我想___这个活动。', options: ['参加', '出口', '变成'], answer: '参加' },
        { type: 'fill', sentence: '请___我找一下资料。', options: ['帮助', '报名', '出发'], answer: '帮助' },
        { type: 'fill', sentence: '我们明天___去北京。', options: ['出发', '参观', '查'], answer: '出发' },
        { type: 'fill', sentence: '___，我喜欢吃苹果。', options: ['比如', '不如', '成为'], answer: '比如' },
        { type: 'fill', sentence: '人数已经___一百了。', options: ['超过', '变成', '办'], answer: '超过' }
      ],
      normal: [
        { type: 'fill', sentence: '我想___翻译。', options: ['成为', '变成', '参加'], answer: '成为' },
        { type: 'fill', sentence: '天气___冷了。', options: ['变', '成', '办'], answer: '变' },
        { type: 'fill', sentence: '___我们一起去吧。', options: ['不如', '比如', '比如说'], answer: '不如' },
        { type: 'fill', sentence: '机场的___在那边。', options: ['出口', '出国', '出发'], answer: '出口' },
        { type: 'fill', sentence: '我要___这些生词。', options: ['背', '查', '办'], answer: '背' },
        { type: 'order', words: ['报名', '想', '我', '参加'], answer: '我想报名参加' },
        { type: 'order', words: ['帮助', '你', '我', '可以'], answer: '我可以帮助你' }
      ],
      hard: [
        { type: 'fill', sentence: '这个项目可以___"梦想之旅"。', options: ['称', '成', '变'], answer: '称' },
        { type: 'fill', sentence: '水___冰了。', options: ['变成', '成为', '超过'], answer: '变成' },
        { type: 'fill', sentence: '我需要___一些手续。', options: ['办', '查', '背'], answer: '办' },
        { type: 'fill', sentence: '我们去___博物馆吧。', options: ['参观', '参加', '报名'], answer: '参观' },
        { type: 'translate', prompt: 'Tớ muốn tham gia chương trình du học.', answer: '我想参加出国项目。' },
        { type: 'translate', prompt: 'Chi bằng chúng ta cùng chuẩn bị.', answer: '不如我们一起准备。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 32: Hành động hằng ngày (2) — 19 từ
  // 出门, 出生, 出现, 出院, 出租, 吹, 答应, 打工, 打算, 打印, 带, 带来, 当, 倒, 道, 得, 得出, 等到, 等于
  // ───────────────────────────────────────────────────────────────────────────
  32: {
    id: 32,
    level: 2,
    title: 'Hành động hằng ngày (2)',
    context: 'Mai kể về cuộc sống hằng ngày: ra ngoài, đi làm thêm, và những kế hoạch tương lai.',
    vocabPreview: ['出门', '打工', '打算', '带', '答应'],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Ký túc xá · Buổi sáng', bg: 'dorm-room',
        cast: ['mai', 'xiaomei'],
        text: 'Sáng sớm, Mai và Tiểu Mỹ chuẩn bị ra ngoài.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: 'Mai，你今天出门早啊！去哪儿？',
        pinyin: 'Mai, nǐ jīntiān chūmén zǎo a! Qù nǎr?',
        meaning: 'Mai, hôm nay cậu ra ngoài sớm thế! Đi đâu vậy?',
        expression: 'curious', vocab: ['出门']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我打算去打工。咖啡店需要人帮忙。',
        pinyin: 'Wǒ dǎsuàn qù dǎgōng. Kāfēidiàn xūyào rén bāngmáng.',
        meaning: 'Tớ định đi làm thêm. Quán cà phê cần người giúp.',
        expression: 'focused', vocab: ['打算', '打工']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '真的？你什么时候答应他们的？',
        pinyin: 'Zhēn de? Nǐ shénme shíhou dāying tāmen de?',
        meaning: 'Thật không? Cậu đồng ý với họ khi nào vậy?',
        expression: 'surprise', vocab: ['答应']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '昨天。老板说我可以带朋友来，你要不要一起？',
        pinyin: 'Zuótiān. Lǎobǎn shuō wǒ kěyǐ dài péngyou lái, nǐ yào bu yào yìqǐ?',
        meaning: 'Hôm qua. Ông chủ nói tớ có thể dẫn bạn đến, cậu có muốn đi cùng không?',
        expression: 'happy', vocab: ['带', '带来']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'dorm-room',
        scene: '📍 Ký túc xá · Buổi sáng',
        expression: 'curious',
        q: 'Tiểu Mỹ muốn hỏi "Cậu định làm bao lâu?". Cô ấy nên nói thế nào?',
        options: [
          { text: '你打算做多久？', pinyin: 'Nǐ dǎsuàn zuò duōjiǔ?', meaning: 'Cậu định làm bao lâu?', correct: true,
            feedback: 'Đúng! 打算 = dự định, kế hoạch. 多久 = bao lâu.' },
          { text: '你打工多久？', pinyin: 'Nǐ dǎgōng duōjiǔ?', meaning: 'Cậu làm thêm bao lâu?', correct: false,
            feedback: 'Câu này hỏi về thời gian đã làm, không phải kế hoạch tương lai.' },
          { text: '你出门多久？', pinyin: 'Nǐ chūmén duōjiǔ?', meaning: 'Cậu ra ngoài bao lâu?', correct: false,
            feedback: '出门 = ra ngoài, không liên quan đến thời gian làm việc.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '好啊！对了，你知道吗？我表姐刚出院。',
        pinyin: 'Hǎo a! Duìle, nǐ zhīdào ma? Wǒ biǎojiě gāng chūyuàn.',
        meaning: 'Được thôi! À đúng rồi, cậu biết không? Chị họ tớ vừa xuất viện.',
        expression: 'happy', vocab: ['出院']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '太好了！她是什么时候出生的？我想送她礼物。',
        pinyin: 'Tài hǎo le! Tā shì shénme shíhou chūshēng de? Wǒ xiǎng sòng tā lǐwù.',
        meaning: 'Tuyệt quá! Chị ấy sinh khi nào? Tớ muốn tặng quà cho chị ấy.',
        expression: 'happy', vocab: ['出生']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"打工" có nghĩa là gì?',
            options: ['làm thêm', 'ra ngoài', 'xuất viện', 'đồng ý'],
            answer: 0
          },
          {
            q: 'Muốn nói "Tớ định đi du lịch" thì dùng từ nào?',
            options: ['打算', '答应', '带', '出门'],
            answer: 0
          },
          {
            q: '"出院" trong câu "她刚出院" có nghĩa là gì?',
            options: ['xuất viện', 'nhập viện', 'ra ngoài', 'sinh ra'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Quán cà phê · Buổi trưa', bg: 'cafeteria',
        cast: ['mai', 'xiaomei', 'laoli'],
        text: 'Tại quán cà phê, thầy Lý bất ngờ xuất hiện.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '哎，你们怎么出现在这里？',
        pinyin: 'Āi, nǐmen zěnme chūxiàn zài zhèlǐ?',
        meaning: 'Ơ, sao các em lại xuất hiện ở đây?',
        expression: null, vocab: ['出现']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '老师好！我们在这里打工。您要喝什么？我来倒水。',
        pinyin: 'Lǎoshī hǎo! Wǒmen zài zhèlǐ dǎgōng. Nín yào hē shénme? Wǒ lái dào shuǐ.',
        meaning: 'Em chào thầy! Chúng em làm thêm ở đây. Thầy muốn uống gì ạ? Em rót nước.',
        expression: 'happy', vocab: ['倒']
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '谢谢！你们当服务员，得学很多东西吧？',
        pinyin: 'Xièxie! Nǐmen dāng fúwùyuán, děi xué hěn duō dōngxi ba?',
        meaning: 'Cảm ơn! Các em làm phục vụ, phải học nhiều thứ nhỉ?',
        expression: null, vocab: ['当', '得']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'],
        text: '是的！我们得出一个结论：工作不容易！',
        pinyin: 'Shì de! Wǒmen déchū yí gè jiélùn: gōngzuò bù róngyì!',
        meaning: 'Vâng ạ! Chúng em rút ra một kết luận: công việc không dễ!',
        expression: 'focused', vocab: ['得出']
      },
      {
        type: 'choice', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'], bg: 'cafeteria',
        scene: '📍 Quán cà phê',
        expression: null,
        q: 'Thầy Lý muốn nói "Đợi đến cuối tuần, tôi sẽ đến lại". Thầy nên nói thế nào?',
        options: [
          { text: '等到周末，我再来。', pinyin: 'Děngdào zhōumò, wǒ zài lái.', meaning: 'Đợi đến cuối tuần, tôi sẽ đến lại.', correct: true,
            feedback: 'Đúng! 等到 = đợi đến (thời điểm). 再 = lại, một lần nữa.' },
          { text: '等于周末，我再来。', pinyin: 'Děngyú zhōumò, wǒ zài lái.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '等于 = bằng với (toán học/so sánh), không dùng cho thời gian.' },
          { text: '得到周末，我再来。', pinyin: 'Dédào zhōumò, wǒ zài lái.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '得到 = nhận được, không dùng cho thời gian.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '等到周末，我再来。对了，外面有出租车吗？风很大，吹得我很冷。',
        pinyin: 'Děngdào zhōumò, wǒ zài lái. Duìle, wàimiàn yǒu chūzūchē ma? Fēng hěn dà, chuī de wǒ hěn lěng.',
        meaning: 'Đợi đến cuối tuần, tôi sẽ đến lại. À đúng rồi, ngoài kia có taxi không? Gió to quá, thổi tôi lạnh cóng.',
        expression: null, vocab: ['等到', '出租', '吹']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '有的！一加一等于二，两个人打车更便宜。我帮您叫车，还要打印收据吗？',
        pinyin: 'Yǒu de! Yī jiā yī děngyú èr, liǎng gè rén dǎchē gèng piányi. Wǒ bāng nín jiào chē, hái yào dǎyìn shōujù ma?',
        meaning: 'Có ạ! Một cộng một bằng hai, hai người đi taxi rẻ hơn. Em gọi xe giúp thầy, còn cần in hóa đơn không ạ?',
        expression: 'happy', vocab: ['等于', '打印']
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '不用了，谢谢！你们知道吗？这条路叫"学生道"。',
        pinyin: 'Búyòng le, xièxie! Nǐmen zhīdào ma? Zhè tiáo lù jiào "Xuésheng Dào".',
        meaning: 'Không cần đâu, cảm ơn! Các em biết không? Con đường này gọi là "Đường Sinh Viên".',
        expression: null, vocab: ['道']
      }
    ],
    vocab: [
      { h: '出门', p: 'chūmén', v: 'ra ngoài, ra khỏi nhà' },
      { h: '出生', p: 'chūshēng', v: 'sinh ra, ra đời' },
      { h: '出现', p: 'chūxiàn', v: 'xuất hiện' },
      { h: '出院', p: 'chūyuàn', v: 'xuất viện' },
      { h: '出租', p: 'chūzū', v: 'cho thuê; taxi' },
      { h: '吹', p: 'chuī', v: 'thổi' },
      { h: '答应', p: 'dāying', v: 'đồng ý, nhận lời' },
      { h: '打工', p: 'dǎgōng', v: 'làm thêm, đi làm' },
      { h: '打算', p: 'dǎsuàn', v: 'dự định, kế hoạch' },
      { h: '打印', p: 'dǎyìn', v: 'in ấn' },
      { h: '带', p: 'dài', v: 'mang theo, dẫn' },
      { h: '带来', p: 'dàilái', v: 'mang đến, đem lại' },
      { h: '当', p: 'dāng', v: 'làm, đảm nhiệm' },
      { h: '倒', p: 'dào', v: 'rót, đổ' },
      { h: '道', p: 'dào', v: 'đường, con đường' },
      { h: '得', p: 'děi', v: 'phải, cần' },
      { h: '得出', p: 'déchū', v: 'rút ra (kết luận)' },
      { h: '等到', p: 'děngdào', v: 'đợi đến' },
      { h: '等于', p: 'děngyú', v: 'bằng với' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我每天早上___去上班。', options: ['出门', '出院', '出现'], answer: '出门' },
        { type: 'fill', sentence: '我___去旅游。', options: ['打算', '打工', '打印'], answer: '打算' },
        { type: 'fill', sentence: '请___我一杯水。', options: ['倒', '带', '吹'], answer: '倒' },
        { type: 'fill', sentence: '他___了我的请求。', options: ['答应', '打算', '出现'], answer: '答应' },
        { type: 'fill', sentence: '风___得很大。', options: ['吹', '倒', '带'], answer: '吹' }
      ],
      normal: [
        { type: 'fill', sentence: '她是1990年___的。', options: ['出生', '出门', '出院'], answer: '出生' },
        { type: 'fill', sentence: '我___服务员。', options: ['当', '得', '道'], answer: '当' },
        { type: 'fill', sentence: '一加一___二。', options: ['等于', '等到', '得出'], answer: '等于' },
        { type: 'fill', sentence: '请帮我___这份文件。', options: ['打印', '打工', '打算'], answer: '打印' },
        { type: 'fill', sentence: '我们___一个结论。', options: ['得出', '得', '等到'], answer: '得出' },
        { type: 'order', words: ['出门', '早', '今天', '你'], answer: '你今天出门早' },
        { type: 'order', words: ['打工', '在', '我们', '这里'], answer: '我们在这里打工' }
      ],
      hard: [
        { type: 'fill', sentence: '___周末，我再来。', options: ['等到', '等于', '得出'], answer: '等到' },
        { type: 'fill', sentence: '外面有___车吗？', options: ['出租', '出门', '出现'], answer: '出租' },
        { type: 'fill', sentence: '你___朋友来吗？', options: ['带', '倒', '当'], answer: '带' },
        { type: 'fill', sentence: '这条路叫"学生___"。', options: ['道', '得', '倒'], answer: '道' },
        { type: 'translate', prompt: 'Tớ định đi làm thêm.', answer: '我打算去打工。' },
        { type: 'translate', prompt: 'Chị ấy vừa xuất viện.', answer: '她刚出院。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 33: Hành động hằng ngày (3) — 19 từ
  // 点头, 掉, 懂, 懂得, 度, 对话, 对面, 发, 发现, 放下, 放心, 分开, 封, 服务, 复习, 改, 改变, 感到, 感觉
  // ───────────────────────────────────────────────────────────────────────────
  33: {
    id: 33,
    level: 2,
    title: 'Hành động hằng ngày (3)',
    context: 'Mai và Tiểu Mỹ ôn bài trong thư viện, bàn về cách học hiệu quả và những thay đổi trong cuộc sống.',
    vocabPreview: ['复习', '懂', '发现', '改变', '感觉'],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Thư viện · Buổi tối', bg: 'library',
        cast: ['mai', 'xiaomei'],
        text: 'Mai và Tiểu Mỹ đang ôn bài cho kỳ thi sắp tới.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '小美，你复习得怎么样了？',
        pinyin: 'Xiǎoměi, nǐ fùxí de zěnmeyàng le?',
        meaning: 'Tiểu Mỹ, cậu ôn bài thế nào rồi?',
        expression: 'curious', vocab: ['复习']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '还行吧。有些地方我不太懂，你懂得这个语法吗？',
        pinyin: 'Hái xíng ba. Yǒuxiē dìfang wǒ bú tài dǒng, nǐ dǒngde zhège yǔfǎ ma?',
        meaning: 'Cũng được. Có chỗ tớ không hiểu lắm, cậu hiểu ngữ pháp này không?',
        expression: 'confused', vocab: ['懂', '懂得']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '让我看看... 我发现这个其实很简单！',
        pinyin: 'Ràng wǒ kànkan... Wǒ fāxiàn zhège qíshí hěn jiǎndān!',
        meaning: 'Để tớ xem... Tớ phát hiện cái này thực ra rất đơn giản!',
        expression: 'happy', vocab: ['发现']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '真的吗？我感觉很难。你能解释一下吗？',
        pinyin: 'Zhēn de ma? Wǒ gǎnjué hěn nán. Nǐ néng jiěshì yíxià ma?',
        meaning: 'Thật không? Tớ cảm thấy rất khó. Cậu giải thích được không?',
        expression: 'curious', vocab: ['感觉']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'library',
        scene: '📍 Thư viện · Buổi tối',
        expression: 'focused',
        q: 'Mai muốn nói "Tớ cảm thấy cậu sẽ hiểu". Cô ấy nên nói thế nào?',
        options: [
          { text: '我感到你会懂的。', pinyin: 'Wǒ gǎndào nǐ huì dǒng de.', meaning: 'Tớ cảm thấy cậu sẽ hiểu.', correct: true,
            feedback: 'Đúng! 感到 = cảm thấy (thường dùng với cảm xúc/nhận định). 会...的 = sẽ...thôi.' },
          { text: '我感觉你会懂的。', pinyin: 'Wǒ gǎnjué nǐ huì dǒng de.', meaning: 'Tớ cảm thấy cậu sẽ hiểu.', correct: false,
            feedback: '感觉 cũng đúng nghĩa, nhưng 感到 thường dùng hơn khi nói về nhận định/tin tưởng.' },
          { text: '我发现你会懂的。', pinyin: 'Wǒ fāxiàn nǐ huì dǒng de.', meaning: 'Tớ phát hiện cậu sẽ hiểu.', correct: false,
            feedback: '发现 = phát hiện (sự thật), không dùng cho dự đoán tương lai.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我感到你会懂的。放心吧！我们一起对话练习。',
        pinyin: 'Wǒ gǎndào nǐ huì dǒng de. Fàngxīn ba! Wǒmen yìqǐ duìhuà liànxí.',
        meaning: 'Tớ cảm thấy cậu sẽ hiểu. Yên tâm đi! Chúng ta cùng luyện hội thoại.',
        expression: 'happy', vocab: ['感到', '放心', '对话']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '好！对了，你看对面那个人，他一直点头。',
        pinyin: 'Hǎo! Duìle, nǐ kàn duìmiàn nàge rén, tā yìzhí diǎntóu.',
        meaning: 'Được! À đúng rồi, cậu nhìn người đối diện kia, anh ấy cứ gật đầu hoài.',
        expression: 'curious', vocab: ['对面', '点头']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"复习" có nghĩa là gì?',
            options: ['ôn tập', 'phát hiện', 'cảm thấy', 'thay đổi'],
            answer: 0
          },
          {
            q: 'Muốn nói "Tớ không hiểu" thì dùng từ nào?',
            options: ['懂', '感觉', '发现', '放心'],
            answer: 0
          },
          {
            q: '"对面" trong câu "对面那个人" có nghĩa là gì?',
            options: ['đối diện', 'bên cạnh', 'phía sau', 'phía trước'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Thư viện · Tiếp tục', bg: 'library',
        cast: ['mai', 'xiaomei'],
        text: 'Hai bạn tiếp tục trò chuyện về cuộc sống.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '小美，你觉得大学生活改变了你吗？',
        pinyin: 'Xiǎoměi, nǐ juéde dàxué shēnghuó gǎibiàn le nǐ ma?',
        meaning: 'Tiểu Mỹ, cậu thấy cuộc sống đại học thay đổi cậu không?',
        expression: 'curious', vocab: ['改变']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '当然！我改了很多坏习惯。比如，我学会了放下手机。',
        pinyin: 'Dāngrán! Wǒ gǎi le hěn duō huài xíguàn. Bǐrú, wǒ xuéhuì le fàngxià shǒujī.',
        meaning: 'Đương nhiên! Tớ sửa được nhiều thói quen xấu. Ví dụ, tớ học được cách đặt điện thoại xuống.',
        expression: 'happy', vocab: ['改', '放下']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '哈哈，我的笔掉了！等一下，我捡起来。',
        pinyin: 'Hāhā, wǒ de bǐ diào le! Děng yíxià, wǒ jiǎn qǐlái.',
        meaning: 'Haha, bút tớ rơi rồi! Đợi chút, tớ nhặt lên.',
        expression: 'surprise', vocab: ['掉']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '对了，今天气温是多少度？外面冷吗？',
        pinyin: 'Duìle, jīntiān qìwēn shì duōshao dù? Wàimiàn lěng ma?',
        meaning: 'À đúng rồi, hôm nay nhiệt độ bao nhiêu độ? Ngoài kia lạnh không?',
        expression: 'curious', vocab: ['度']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '大概十五度吧。我刚发了一封信给老师。',
        pinyin: 'Dàgài shíwǔ dù ba. Wǒ gāng fā le yì fēng xìn gěi lǎoshī.',
        meaning: 'Khoảng 15 độ. Tớ vừa gửi một bức thư cho thầy.',
        expression: null, vocab: ['发', '封']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'library',
        scene: '📍 Thư viện',
        expression: 'focused',
        q: 'Tiểu Mỹ muốn nói "Chúng ta phải chia tay rồi (tạm biệt)". Cô ấy nên nói thế nào?',
        options: [
          { text: '我们得分开了。', pinyin: 'Wǒmen děi fēnkāi le.', meaning: 'Chúng ta phải chia tay rồi.', correct: true,
            feedback: 'Đúng! 分开 = chia tay, tách ra. 得 = phải.' },
          { text: '我们得改变了。', pinyin: 'Wǒmen děi gǎibiàn le.', meaning: 'Chúng ta phải thay đổi rồi.', correct: false,
            feedback: '改变 = thay đổi, không phải chia tay.' },
          { text: '我们得放下了。', pinyin: 'Wǒmen děi fàngxià le.', meaning: 'Chúng ta phải đặt xuống rồi.', correct: false,
            feedback: '放下 = đặt xuống (vật), buông bỏ (tâm lý), không dùng cho chia tay.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '好晚了，我们得分开了。谢谢你的服务！',
        pinyin: 'Hǎo wǎn le, wǒmen děi fēnkāi le. Xièxie nǐ de fúwù!',
        meaning: 'Muộn rồi, chúng ta phải chia tay thôi. Cảm ơn sự giúp đỡ của cậu!',
        expression: 'happy', vocab: ['分开', '服务']
      }
    ],
    vocab: [
      { h: '点头', p: 'diǎntóu', v: 'gật đầu' },
      { h: '掉', p: 'diào', v: 'rơi, rớt' },
      { h: '懂', p: 'dǒng', v: 'hiểu' },
      { h: '懂得', p: 'dǒngde', v: 'hiểu được, biết' },
      { h: '度', p: 'dù', v: 'độ (nhiệt độ)' },
      { h: '对话', p: 'duìhuà', v: 'hội thoại, đối thoại' },
      { h: '对面', p: 'duìmiàn', v: 'đối diện' },
      { h: '发', p: 'fā', v: 'gửi, phát' },
      { h: '发现', p: 'fāxiàn', v: 'phát hiện' },
      { h: '放下', p: 'fàngxià', v: 'đặt xuống, buông bỏ' },
      { h: '放心', p: 'fàngxīn', v: 'yên tâm' },
      { h: '分开', p: 'fēnkāi', v: 'chia tay, tách ra' },
      { h: '封', p: 'fēng', v: 'bức (thư); phong bì' },
      { h: '服务', p: 'fúwù', v: 'phục vụ, dịch vụ' },
      { h: '复习', p: 'fùxí', v: 'ôn tập' },
      { h: '改', p: 'gǎi', v: 'sửa, thay đổi' },
      { h: '改变', p: 'gǎibiàn', v: 'thay đổi' },
      { h: '感到', p: 'gǎndào', v: 'cảm thấy' },
      { h: '感觉', p: 'gǎnjué', v: 'cảm giác, cảm thấy' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我需要___功课。', options: ['复习', '发现', '改变'], answer: '复习' },
        { type: 'fill', sentence: '我不___这个问题。', options: ['懂', '感觉', '放心'], answer: '懂' },
        { type: 'fill', sentence: '我___很累。', options: ['感觉', '发现', '懂得'], answer: '感觉' },
        { type: 'fill', sentence: '请___，没问题的。', options: ['放心', '放下', '分开'], answer: '放心' },
        { type: 'fill', sentence: '他一直___。', options: ['点头', '掉', '发'], answer: '点头' }
      ],
      normal: [
        { type: 'fill', sentence: '我___了一个秘密。', options: ['发现', '感到', '懂'], answer: '发现' },
        { type: 'fill', sentence: '大学生活___了我。', options: ['改变', '改', '服务'], answer: '改变' },
        { type: 'fill', sentence: '我的手机___了。', options: ['掉', '放下', '分开'], answer: '掉' },
        { type: 'fill', sentence: '今天气温是二十___。', options: ['度', '封', '发'], answer: '度' },
        { type: 'fill', sentence: '我们一起练习___。', options: ['对话', '对面', '服务'], answer: '对话' },
        { type: 'order', words: ['复习', '怎么样', '你', '了'], answer: '你复习得怎么样了' },
        { type: 'order', words: ['感觉', '我', '很难', '这个'], answer: '我感觉这个很难' }
      ],
      hard: [
        { type: 'fill', sentence: '我___了一___信。', options: ['发/封', '改/度', '懂/对'], answer: '发/封' },
        { type: 'fill', sentence: '请把手机___。', options: ['放下', '放心', '分开'], answer: '放下' },
        { type: 'fill', sentence: '我们得___了。', options: ['分开', '改变', '服务'], answer: '分开' },
        { type: 'fill', sentence: '___那个人是谁？', options: ['对面', '对话', '度'], answer: '对面' },
        { type: 'translate', prompt: 'Tớ phát hiện cái này rất đơn giản.', answer: '我发现这个很简单。' },
        { type: 'translate', prompt: 'Cuộc sống đại học thay đổi tớ rồi.', answer: '大学生活改变了我。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 34: Hành động hằng ngày (4) — 19 từ
  // 感谢, 干杯, 干活儿, 够, 关机, 关心, 过来, 过年, 喊, 好像, 画, 换, 欢迎, 回国, 活动, 计划, 加油, 检查, 见到
  // ───────────────────────────────────────────────────────────────────────────
  34: {
    id: 34,
    level: 2,
    title: 'Hành động hằng ngày (4)',
    context: 'Tết Nguyên Đán sắp đến, Mai và các bạn lên kế hoạch tổ chức tiệc và chuẩn bị về nước.',
    vocabPreview: ['过年', '计划', '欢迎', '感谢', '回国'],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Ký túc xá · Buổi tối', bg: 'dorm-room',
        cast: ['mai', 'xiaomei'],
        text: 'Tết Nguyên Đán sắp đến, Mai và Tiểu Mỹ đang bàn kế hoạch.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: 'Mai，你过年有什么计划？',
        pinyin: 'Mai, nǐ guònián yǒu shénme jìhuà?',
        meaning: 'Mai, cậu ăn Tết có kế hoạch gì?',
        expression: 'curious', vocab: ['过年', '计划']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我打算回国！我好像很久没见到家人了。',
        pinyin: 'Wǒ dǎsuàn huíguó! Wǒ hǎoxiàng hěn jiǔ méi jiàndào jiārén le.',
        meaning: 'Tớ định về nước! Tớ hình như lâu rồi chưa gặp gia đình.',
        expression: 'happy', vocab: ['回国', '好像', '见到']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '真好！我很关心你，路上小心啊。',
        pinyin: 'Zhēn hǎo! Wǒ hěn guānxīn nǐ, lùshang xiǎoxīn a.',
        meaning: 'Tuyệt quá! Tớ rất quan tâm cậu, đi đường cẩn thận nhé.',
        expression: 'happy', vocab: ['关心']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '感谢你！走之前，我们一起办个活动吧？',
        pinyin: 'Gǎnxiè nǐ! Zǒu zhīqián, wǒmen yìqǐ bàn gè huódòng ba?',
        meaning: 'Cảm ơn cậu! Trước khi đi, chúng ta cùng tổ chức hoạt động nhé?',
        expression: 'happy', vocab: ['感谢', '活动']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'dorm-room',
        scene: '📍 Ký túc xá · Buổi tối',
        expression: 'happy',
        q: 'Tiểu Mỹ muốn nói "Chào mừng mọi người đến!". Cô ấy nên nói thế nào?',
        options: [
          { text: '欢迎大家来！', pinyin: 'Huānyíng dàjiā lái!', meaning: 'Chào mừng mọi người đến!', correct: true,
            feedback: 'Đúng! 欢迎 = chào mừng, hoan nghênh. 大家 = mọi người.' },
          { text: '感谢大家来！', pinyin: 'Gǎnxiè dàjiā lái!', meaning: 'Cảm ơn mọi người đến!', correct: false,
            feedback: '感谢 = cảm ơn, không phải chào mừng. Dùng khi muốn bày tỏ lòng biết ơn.' },
          { text: '关心大家来！', pinyin: 'Guānxīn dàjiā lái!', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '关心 = quan tâm, không dùng để chào mừng.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '好主意！欢迎大家来我们宿舍！',
        pinyin: 'Hǎo zhǔyi! Huānyíng dàjiā lái wǒmen sùshè!',
        meaning: 'Ý hay! Chào mừng mọi người đến ký túc xá của chúng ta!',
        expression: 'happy', vocab: ['欢迎']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我来画一张海报，你帮我检查一下好吗？',
        pinyin: 'Wǒ lái huà yì zhāng hǎibào, nǐ bāng wǒ jiǎnchá yíxià hǎo ma?',
        meaning: 'Tớ vẽ một tấm poster, cậu giúp tớ kiểm tra được không?',
        expression: 'focused', vocab: ['画', '检查']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"过年" có nghĩa là gì?',
            options: ['ăn Tết', 'về nước', 'lên kế hoạch', 'cảm ơn'],
            answer: 0
          },
          {
            q: 'Muốn nói "Tớ rất quan tâm cậu" thì dùng từ nào?',
            options: ['关心', '感谢', '欢迎', '检查'],
            answer: 0
          },
          {
            q: '"见到" trong câu "我很久没见到家人" có nghĩa là gì?',
            options: ['gặp', 'nhìn thấy', 'quan tâm', 'chào mừng'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Ký túc xá · Ngày tiệc', bg: 'dorm-room',
        cast: ['mai', 'xiaomei', 'laoli'],
        text: 'Ngày tiệc đã đến, thầy Lý cũng được mời.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '哇，你们干活儿真快！准备得够多了！',
        pinyin: 'Wa, nǐmen gànhuór zhēn kuài! Zhǔnbèi de gòu duō le!',
        meaning: 'Oa, các em làm việc nhanh thật! Chuẩn bị đủ nhiều rồi!',
        expression: null, vocab: ['干活儿', '够']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'],
        text: '老师，过来坐！我们一起干杯！',
        pinyin: 'Lǎoshī, guòlái zuò! Wǒmen yìqǐ gānbēi!',
        meaning: 'Thầy ơi, lại đây ngồi! Chúng ta cùng nâng cốc!',
        expression: 'happy', vocab: ['过来', '干杯']
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '好！Mai，加油！祝你一路平安！',
        pinyin: 'Hǎo! Mai, jiāyóu! Zhù nǐ yílù píng\'ān!',
        meaning: 'Được! Mai, cố lên! Chúc em thượng lộ bình an!',
        expression: null, vocab: ['加油']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '谢谢老师！对了，我要换一下衣服，等我一下。',
        pinyin: 'Xièxie lǎoshī! Duìle, wǒ yào huàn yíxià yīfu, děng wǒ yíxià.',
        meaning: 'Cảm ơn thầy! À đúng rồi, em cần thay quần áo, đợi em chút.',
        expression: 'happy', vocab: ['换']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'], bg: 'dorm-room',
        scene: '📍 Ký túc xá · Ngày tiệc',
        expression: 'curious',
        q: 'Tiểu Mỹ muốn gọi Mai: "Mai, lại đây!". Cô ấy nên nói thế nào?',
        options: [
          { text: 'Mai，过来！', pinyin: 'Mai, guòlái!', meaning: 'Mai, lại đây!', correct: true,
            feedback: 'Đúng! 过来 = đi lại, đến đây. Dùng khi gọi ai đó đến chỗ mình.' },
          { text: 'Mai，回国！', pinyin: 'Mai, huíguó!', meaning: 'Mai, về nước!', correct: false,
            feedback: '回国 = về nước, không phải gọi ai đến.' },
          { text: 'Mai，加油！', pinyin: 'Mai, jiāyóu!', meaning: 'Mai, cố lên!', correct: false,
            feedback: '加油 = cố lên, động viên, không phải gọi ai đến.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'],
        text: 'Mai，过来！有人在喊你的名字！',
        pinyin: 'Mai, guòlái! Yǒu rén zài hǎn nǐ de míngzi!',
        meaning: 'Mai, lại đây! Có người đang gọi tên cậu!',
        expression: 'surprise', vocab: ['喊']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '好的！等一下，我先关机，手机没电了。',
        pinyin: 'Hǎo de! Děng yíxià, wǒ xiān guānjī, shǒujī méi diàn le.',
        meaning: 'Được! Đợi chút, em tắt máy trước, điện thoại hết pin rồi.',
        expression: null, vocab: ['关机']
      }
    ],
    vocab: [
      { h: '感谢', p: 'gǎnxiè', v: 'cảm ơn, cảm tạ' },
      { h: '干杯', p: 'gānbēi', v: 'nâng cốc, cạn ly' },
      { h: '干活儿', p: 'gànhuór', v: 'làm việc' },
      { h: '够', p: 'gòu', v: 'đủ' },
      { h: '关机', p: 'guānjī', v: 'tắt máy' },
      { h: '关心', p: 'guānxīn', v: 'quan tâm' },
      { h: '过来', p: 'guòlái', v: 'đi lại, đến đây' },
      { h: '过年', p: 'guònián', v: 'ăn Tết, đón năm mới' },
      { h: '喊', p: 'hǎn', v: 'gọi, hét' },
      { h: '好像', p: 'hǎoxiàng', v: 'hình như, dường như' },
      { h: '画', p: 'huà', v: 'vẽ' },
      { h: '换', p: 'huàn', v: 'đổi, thay' },
      { h: '欢迎', p: 'huānyíng', v: 'chào mừng, hoan nghênh' },
      { h: '回国', p: 'huíguó', v: 'về nước' },
      { h: '活动', p: 'huódòng', v: 'hoạt động' },
      { h: '计划', p: 'jìhuà', v: 'kế hoạch' },
      { h: '加油', p: 'jiāyóu', v: 'cố lên, thêm dầu' },
      { h: '检查', p: 'jiǎnchá', v: 'kiểm tra' },
      { h: '见到', p: 'jiàndào', v: 'gặp, nhìn thấy' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '你___有什么___？', options: ['过年/计划', '回国/活动', '关心/检查'], answer: '过年/计划' },
        { type: 'fill', sentence: '___你的帮助！', options: ['感谢', '欢迎', '关心'], answer: '感谢' },
        { type: 'fill', sentence: '我们一起___！', options: ['干杯', '干活儿', '关机'], answer: '干杯' },
        { type: 'fill', sentence: '___大家来！', options: ['欢迎', '感谢', '加油'], answer: '欢迎' },
        { type: 'fill', sentence: '我很___你。', options: ['关心', '关机', '过来'], answer: '关心' }
      ],
      normal: [
        { type: 'fill', sentence: '我打算___。', options: ['回国', '过年', '活动'], answer: '回国' },
        { type: 'fill', sentence: '我___很久没见到他了。', options: ['好像', '够', '喊'], answer: '好像' },
        { type: 'fill', sentence: '请帮我___一下。', options: ['检查', '计划', '画'], answer: '检查' },
        { type: 'fill', sentence: '我要___衣服。', options: ['换', '画', '喊'], answer: '换' },
        { type: 'fill', sentence: '准备得___多了。', options: ['够', '好像', '过来'], answer: '够' },
        { type: 'order', words: ['过年', '什么', '你', '计划', '有'], answer: '你过年有什么计划' },
        { type: 'order', words: ['关心', '我', '很', '你'], answer: '我很关心你' }
      ],
      hard: [
        { type: 'fill', sentence: '有人在___你的名字。', options: ['喊', '画', '换'], answer: '喊' },
        { type: 'fill', sentence: '我先___，手机没电了。', options: ['关机', '关心', '过来'], answer: '关机' },
        { type: 'fill', sentence: '你们___真快！', options: ['干活儿', '干杯', '够'], answer: '干活儿' },
        { type: 'fill', sentence: '我来___一张海报。', options: ['画', '换', '检查'], answer: '画' },
        { type: 'translate', prompt: 'Tớ hình như lâu rồi chưa gặp gia đình.', answer: '我好像很久没见到家人了。' },
        { type: 'translate', prompt: 'Cố lên! Chúc cậu thượng lộ bình an!', answer: '加油！祝你一路平安！' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 35: Hành động hằng ngày (5) — 19 từ
  // 讲, 讲话, 交, 交给, 交朋友, 叫作, 教学, 教育, 接, 接到, 接受, 接下来, 接着, 节, 借, 进入, 进行, 经过, 举
  // ───────────────────────────────────────────────────────────────────────────
  35: {
    id: 35,
    level: 2,
    title: 'Hành động hằng ngày (5)',
    context: 'Mai tham gia lớp học mới, làm quen với bạn bè và tìm hiểu về phương pháp giảng dạy.',
    vocabPreview: ['交朋友', '教学', '接受', '进行', '讲'],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Lớp học · Buổi sáng', bg: 'classroom',
        cast: ['mai', 'laoli'],
        text: 'Mai bước vào lớp học mới, thầy Lý đang chuẩn bị bài giảng.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '同学们好！今天我们进入新的一节课。',
        pinyin: 'Tóngxuémen hǎo! Jīntiān wǒmen jìnrù xīn de yí jié kè.',
        meaning: 'Chào các em! Hôm nay chúng ta bước vào một tiết học mới.',
        expression: null, vocab: ['进入', '节']
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '接下来，我要讲一个故事。请大家认真听讲话。',
        pinyin: 'Jiēxiàlái, wǒ yào jiǎng yí gè gùshi. Qǐng dàjiā rènzhēn tīng jiǎnghuà.',
        meaning: 'Tiếp theo, tôi sẽ kể một câu chuyện. Mời mọi người chăm chú nghe bài giảng.',
        expression: null, vocab: ['接下来', '讲', '讲话']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '老师，这个方法叫作什么？',
        pinyin: 'Lǎoshī, zhège fāngfǎ jiàozuò shénme?',
        meaning: 'Thầy ơi, phương pháp này gọi là gì ạ?',
        expression: 'curious', vocab: ['叫作']
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '这叫作"故事教学法"，是一种很好的教育方式。',
        pinyin: 'Zhè jiàozuò "gùshi jiàoxuéfǎ", shì yì zhǒng hěn hǎo de jiàoyù fāngshì.',
        meaning: 'Đây gọi là "phương pháp dạy học bằng truyện", là một cách giáo dục rất tốt.',
        expression: null, vocab: ['教学', '教育']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'laoli'], bg: 'classroom',
        scene: '📍 Lớp học · Buổi sáng',
        expression: 'focused',
        q: 'Mai muốn nói "Em chấp nhận phương pháp này". Cô ấy nên nói thế nào?',
        options: [
          { text: '我接受这个方法。', pinyin: 'Wǒ jiēshòu zhège fāngfǎ.', meaning: 'Em chấp nhận phương pháp này.', correct: true,
            feedback: 'Đúng! 接受 = chấp nhận, tiếp nhận. Dùng khi đồng ý với ý kiến/phương pháp.' },
          { text: '我接到这个方法。', pinyin: 'Wǒ jiēdào zhège fāngfǎ.', meaning: 'Em nhận được phương pháp này.', correct: false,
            feedback: '接到 = nhận được (vật/tin), không dùng cho việc chấp nhận ý kiến.' },
          { text: '我接着这个方法。', pinyin: 'Wǒ jiēzhe zhège fāngfǎ.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '接着 = tiếp theo, tiếp tục, không dùng với "phương pháp".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '我接受这个方法！老师讲得很好。',
        pinyin: 'Wǒ jiēshòu zhège fāngfǎ! Lǎoshī jiǎng de hěn hǎo.',
        meaning: 'Em chấp nhận phương pháp này! Thầy giảng rất hay.',
        expression: 'happy', vocab: ['接受']
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '谢谢！接着，我们进行一个小活动。请举手回答问题。',
        pinyin: 'Xièxie! Jiēzhe, wǒmen jìnxíng yí gè xiǎo huódòng. Qǐng jǔshǒu huídá wèntí.',
        meaning: 'Cảm ơn! Tiếp theo, chúng ta tiến hành một hoạt động nhỏ. Mời giơ tay trả lời câu hỏi.',
        expression: null, vocab: ['接着', '进行', '举']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"教学" có nghĩa là gì?',
            options: ['dạy học', 'giáo dục', 'kể chuyện', 'chấp nhận'],
            answer: 0
          },
          {
            q: 'Muốn nói "Tiếp theo" thì dùng từ nào?',
            options: ['接下来', '接受', '接到', '进入'],
            answer: 0
          },
          {
            q: '"进行" trong câu "我们进行一个活动" có nghĩa là gì?',
            options: ['tiến hành', 'bước vào', 'chấp nhận', 'tiếp tục'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Sân trường · Giờ nghỉ', bg: 'campus',
        cast: ['mai', 'xiaomei'],
        text: 'Giờ nghỉ, Mai gặp Tiểu Mỹ ở sân trường.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: 'Mai，你想交朋友吗？我介绍你认识几个同学。',
        pinyin: 'Mai, nǐ xiǎng jiāo péngyou ma? Wǒ jièshào nǐ rènshi jǐ gè tóngxué.',
        meaning: 'Mai, cậu muốn kết bạn không? Tớ giới thiệu cậu làm quen vài bạn.',
        expression: 'happy', vocab: ['交朋友']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好啊！对了，我刚接到一个电话，妈妈说她经过学校。',
        pinyin: 'Hǎo a! Duìle, wǒ gāng jiēdào yí gè diànhuà, māma shuō tā jīngguò xuéxiào.',
        meaning: 'Được thôi! À đúng rồi, tớ vừa nhận được một cuộc điện thoại, mẹ nói bà ấy đi ngang qua trường.',
        expression: 'surprise', vocab: ['接到', '经过']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '那你快去接她吧！我帮你交作业给老师。',
        pinyin: 'Nà nǐ kuài qù jiē tā ba! Wǒ bāng nǐ jiāo zuòyè gěi lǎoshī.',
        meaning: 'Vậy cậu nhanh đi đón bà ấy đi! Tớ giúp cậu nộp bài cho thầy.',
        expression: null, vocab: ['接', '交']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'campus',
        scene: '📍 Sân trường · Giờ nghỉ',
        expression: 'happy',
        q: 'Mai muốn nói "Cậu đưa bài cho thầy giúp tớ nhé". Cô ấy nên nói thế nào?',
        options: [
          { text: '你交给老师吧。', pinyin: 'Nǐ jiāogěi lǎoshī ba.', meaning: 'Cậu đưa cho thầy nhé.', correct: true,
            feedback: 'Đúng! 交给 = giao cho, đưa cho. Dùng khi chuyển giao vật cho ai.' },
          { text: '你交朋友老师吧。', pinyin: 'Nǐ jiāo péngyou lǎoshī ba.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '交朋友 = kết bạn, không dùng với "đưa bài".' },
          { text: '你接给老师吧。', pinyin: 'Nǐ jiēgěi lǎoshī ba.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '接 = đón, nhận, không có dạng "接给".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '谢谢你！你交给老师吧。对了，我能借你的笔吗？',
        pinyin: 'Xièxie nǐ! Nǐ jiāogěi lǎoshī ba. Duìle, wǒ néng jiè nǐ de bǐ ma?',
        meaning: 'Cảm ơn cậu! Cậu đưa cho thầy nhé. À đúng rồi, tớ mượn bút cậu được không?',
        expression: 'happy', vocab: ['交给', '借']
      }
    ],
    vocab: [
      { h: '讲', p: 'jiǎng', v: 'nói, kể, giảng' },
      { h: '讲话', p: 'jiǎnghuà', v: 'nói chuyện, bài giảng' },
      { h: '交', p: 'jiāo', v: 'nộp, giao' },
      { h: '交给', p: 'jiāogěi', v: 'giao cho, đưa cho' },
      { h: '交朋友', p: 'jiāo péngyou', v: 'kết bạn' },
      { h: '叫作', p: 'jiàozuò', v: 'gọi là' },
      { h: '教学', p: 'jiàoxué', v: 'dạy học, giảng dạy' },
      { h: '教育', p: 'jiàoyù', v: 'giáo dục' },
      { h: '接', p: 'jiē', v: 'đón, nhận' },
      { h: '接到', p: 'jiēdào', v: 'nhận được' },
      { h: '接受', p: 'jiēshòu', v: 'chấp nhận, tiếp nhận' },
      { h: '接下来', p: 'jiēxiàlái', v: 'tiếp theo' },
      { h: '接着', p: 'jiēzhe', v: 'tiếp theo, tiếp tục' },
      { h: '节', p: 'jié', v: 'tiết (học), đốt' },
      { h: '借', p: 'jiè', v: 'mượn, cho mượn' },
      { h: '进入', p: 'jìnrù', v: 'bước vào, tiến vào' },
      { h: '进行', p: 'jìnxíng', v: 'tiến hành' },
      { h: '经过', p: 'jīngguò', v: 'đi qua, trải qua' },
      { h: '举', p: 'jǔ', v: 'giơ, nâng' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '老师___得很好。', options: ['讲', '交', '接'], answer: '讲' },
        { type: 'fill', sentence: '我想___。', options: ['交朋友', '交给', '接到'], answer: '交朋友' },
        { type: 'fill', sentence: '___，我们做练习。', options: ['接下来', '接受', '进入'], answer: '接下来' },
        { type: 'fill', sentence: '我___这个意见。', options: ['接受', '接到', '接着'], answer: '接受' },
        { type: 'fill', sentence: '请___手回答。', options: ['举', '借', '交'], answer: '举' }
      ],
      normal: [
        { type: 'fill', sentence: '这个方法___"故事教学法"。', options: ['叫作', '教学', '教育'], answer: '叫作' },
        { type: 'fill', sentence: '我们___一个活动。', options: ['进行', '进入', '经过'], answer: '进行' },
        { type: 'fill', sentence: '我刚___一个电话。', options: ['接到', '接受', '接着'], answer: '接到' },
        { type: 'fill', sentence: '请把作业___老师。', options: ['交给', '交', '借'], answer: '交给' },
        { type: 'fill', sentence: '我能___你的书吗？', options: ['借', '交', '接'], answer: '借' },
        { type: 'order', words: ['进入', '我们', '新的', '一节课'], answer: '我们进入新的一节课' },
        { type: 'order', words: ['交朋友', '想', '你', '吗'], answer: '你想交朋友吗' }
      ],
      hard: [
        { type: 'fill', sentence: '她___学校去上班。', options: ['经过', '进入', '进行'], answer: '经过' },
        { type: 'fill', sentence: '这是一种很好的___方式。', options: ['教育', '教学', '讲话'], answer: '教育' },
        { type: 'fill', sentence: '今天是第三___课。', options: ['节', '借', '举'], answer: '节' },
        { type: 'fill', sentence: '___，我们休息一下。', options: ['接着', '接下来', '接受'], answer: '接着' },
        { type: 'translate', prompt: 'Tớ chấp nhận phương pháp này.', answer: '我接受这个方法。' },
        { type: 'translate', prompt: 'Cậu đưa bài cho thầy nhé.', answer: '你交给老师吧。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 36: Hành động hằng ngày (6) — 19 từ
  // 举手, 举行, 卡, 开机, 开学, 靠, 可能, 可是, 可以, 刻, 哭, 来自, 离, 离开, 例如, 练, 练习, 流, 流行
  // ───────────────────────────────────────────────────────────────────────────
  36: {
    id: 36,
    level: 2,
    title: 'Hành động hằng ngày (6)',
    context: 'Ngày khai giảng, Mai tham gia lễ khai mạc và làm quen với bạn mới từ nhiều nơi.',
    vocabPreview: ['开学', '举行', '来自', '可能', '练习'],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Sân trường · Lễ khai giảng', bg: 'campus',
        cast: ['mai', 'xiaomei', 'laoli'],
        text: 'Ngày khai giảng đã đến, trường tổ chức lễ khai mạc.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '同学们，今天开学了！学校举行欢迎仪式。',
        pinyin: 'Tóngxuémen, jīntiān kāixué le! Xuéxiào jǔxíng huānyíng yíshì.',
        meaning: 'Các em, hôm nay khai giảng rồi! Trường tổ chức lễ chào mừng.',
        expression: null, vocab: ['开学', '举行']
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '请大家举手，告诉我你们来自哪里。',
        pinyin: 'Qǐng dàjiā jǔshǒu, gàosu wǒ nǐmen láizì nǎlǐ.',
        meaning: 'Mời mọi người giơ tay, cho tôi biết các em đến từ đâu.',
        expression: null, vocab: ['举手', '来自']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '老师，我来自越南！',
        pinyin: 'Lǎoshī, wǒ láizì Yuènán!',
        meaning: 'Thầy ơi, em đến từ Việt Nam ạ!',
        expression: 'happy', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'],
        text: '我来自北京。Mai，你可能不知道，这里很流行学外语。',
        pinyin: 'Wǒ láizì Běijīng. Mai, nǐ kěnéng bù zhīdào, zhèlǐ hěn liúxíng xué wàiyǔ.',
        meaning: 'Tớ đến từ Bắc Kinh. Mai, cậu có thể không biết, ở đây rất thịnh hành học ngoại ngữ.',
        expression: null, vocab: ['可能', '流行']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'], bg: 'campus',
        scene: '📍 Sân trường · Lễ khai giảng',
        expression: 'curious',
        q: 'Mai muốn nói "Tớ cần luyện tập nhiều hơn". Cô ấy nên nói thế nào?',
        options: [
          { text: '我需要多练习。', pinyin: 'Wǒ xūyào duō liànxí.', meaning: 'Tớ cần luyện tập nhiều hơn.', correct: true,
            feedback: 'Đúng! 练习 = luyện tập. 多 + động từ = làm nhiều hơn.' },
          { text: '我需要多练。', pinyin: 'Wǒ xūyào duō liàn.', meaning: 'Tớ cần luyện nhiều hơn.', correct: false,
            feedback: '练 cũng đúng nhưng 练习 đầy đủ và tự nhiên hơn trong ngữ cảnh này.' },
          { text: '我需要多流行。', pinyin: 'Wǒ xūyào duō liúxíng.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '流行 = thịnh hành, phổ biến, không dùng với "cần".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '我需要多练习！可是我的发音不太好。',
        pinyin: 'Wǒ xūyào duō liànxí! Kěshì wǒ de fāyīn bú tài hǎo.',
        meaning: 'Tớ cần luyện tập nhiều hơn! Nhưng phát âm của tớ không tốt lắm.',
        expression: 'focused', vocab: ['练习', '练', '可是']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'],
        text: '没关系，你可以慢慢练。例如，每天读十五分钟。',
        pinyin: 'Méi guānxi, nǐ kěyǐ mànman liàn. Lìrú, měitiān dú shíwǔ fēnzhōng.',
        meaning: 'Không sao, cậu có thể từ từ luyện. Ví dụ, mỗi ngày đọc mười lăm phút.',
        expression: 'happy', vocab: ['可以', '例如']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"开学" có nghĩa là gì?',
            options: ['khai giảng', 'tổ chức', 'giơ tay', 'luyện tập'],
            answer: 0
          },
          {
            q: 'Muốn nói "Tớ đến từ Việt Nam" thì dùng từ nào?',
            options: ['来自', '离开', '可能', '流行'],
            answer: 0
          },
          {
            q: '"可是" trong câu "可是我的发音不太好" có nghĩa là gì?',
            options: ['nhưng', 'có thể', 'ví dụ', 'nếu'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Ký túc xá · Buổi tối', bg: 'dorm-room',
        cast: ['mai', 'xiaomei'],
        text: 'Buổi tối, Mai và Tiểu Mỹ trò chuyện trong phòng.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '小美，我的手机卡住了，不能开机。',
        pinyin: 'Xiǎoměi, wǒ de shǒujī kǎzhù le, bù néng kāijī.',
        meaning: 'Tiểu Mỹ, điện thoại tớ bị kẹt rồi, không bật được.',
        expression: 'confused', vocab: ['卡', '开机']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '让我看看... 你靠近一点，我帮你修。',
        pinyin: 'Ràng wǒ kànkan... Nǐ kàojìn yìdiǎn, wǒ bāng nǐ xiū.',
        meaning: 'Để tớ xem... Cậu lại gần một chút, tớ giúp cậu sửa.',
        expression: null, vocab: ['靠']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '谢谢！对了，你知道现在几点几刻吗？',
        pinyin: 'Xièxie! Duìle, nǐ zhīdào xiànzài jǐ diǎn jǐ kè ma?',
        meaning: 'Cảm ơn! À đúng rồi, cậu biết bây giờ mấy giờ mấy khắc không?',
        expression: 'curious', vocab: ['刻']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '九点一刻。你要离开吗？',
        pinyin: 'Jiǔ diǎn yí kè. Nǐ yào líkāi ma?',
        meaning: 'Chín giờ mười lăm. Cậu muốn đi không?',
        expression: null, vocab: ['离开']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'dorm-room',
        scene: '📍 Ký túc xá · Buổi tối',
        expression: 'sad',
        q: 'Mai muốn nói "Tớ không muốn rời xa cậu". Cô ấy nên nói thế nào?',
        options: [
          { text: '我不想离开你。', pinyin: 'Wǒ bù xiǎng líkāi nǐ.', meaning: 'Tớ không muốn rời xa cậu.', correct: true,
            feedback: 'Đúng! 离开 = rời khỏi, rời xa. 不想 = không muốn.' },
          { text: '我不想离你。', pinyin: 'Wǒ bù xiǎng lí nǐ.', meaning: 'Tớ không muốn cách xa cậu.', correct: false,
            feedback: '离 = cách (khoảng cách), cần 离开 để diễn đạt "rời khỏi".' },
          { text: '我不想来自你。', pinyin: 'Wǒ bù xiǎng láizì nǐ.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '来自 = đến từ (nguồn gốc), không dùng cho việc rời đi.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '不，我不想离开你。可是我想家了，有点想哭。学校离我家很远。',
        pinyin: 'Bù, wǒ bù xiǎng líkāi nǐ. Kěshì wǒ xiǎng jiā le, yǒudiǎn xiǎng kū. Xuéxiào lí wǒ jiā hěn yuǎn.',
        meaning: 'Không, tớ không muốn rời xa cậu. Nhưng tớ nhớ nhà rồi, hơi muốn khóc. Trường cách nhà tớ rất xa.',
        expression: 'sad', vocab: ['离', '哭']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '别哭！眼泪流下来了。我们一起加油！',
        pinyin: 'Bié kū! Yǎnlèi liú xiàlái le. Wǒmen yìqǐ jiāyóu!',
        meaning: 'Đừng khóc! Nước mắt chảy xuống rồi kìa. Chúng ta cùng cố lên!',
        expression: 'happy', vocab: ['流']
      }
    ],
    vocab: [
      { h: '举手', p: 'jǔshǒu', v: 'giơ tay' },
      { h: '举行', p: 'jǔxíng', v: 'tổ chức, cử hành' },
      { h: '卡', p: 'kǎ', v: 'kẹt, thẻ' },
      { h: '开机', p: 'kāijī', v: 'bật máy, khởi động' },
      { h: '开学', p: 'kāixué', v: 'khai giảng' },
      { h: '靠', p: 'kào', v: 'dựa vào, lại gần' },
      { h: '可能', p: 'kěnéng', v: 'có thể, có lẽ' },
      { h: '可是', p: 'kěshì', v: 'nhưng, nhưng mà' },
      { h: '可以', p: 'kěyǐ', v: 'có thể, được' },
      { h: '刻', p: 'kè', v: 'khắc (15 phút)' },
      { h: '哭', p: 'kū', v: 'khóc' },
      { h: '来自', p: 'láizì', v: 'đến từ' },
      { h: '离', p: 'lí', v: 'cách (khoảng cách)' },
      { h: '离开', p: 'líkāi', v: 'rời khỏi' },
      { h: '例如', p: 'lìrú', v: 'ví dụ' },
      { h: '练', p: 'liàn', v: 'luyện' },
      { h: '练习', p: 'liànxí', v: 'luyện tập' },
      { h: '流', p: 'liú', v: 'chảy' },
      { h: '流行', p: 'liúxíng', v: 'thịnh hành, phổ biến' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '今天___了！', options: ['开学', '举行', '离开'], answer: '开学' },
        { type: 'fill', sentence: '请___回答问题。', options: ['举手', '举行', '开机'], answer: '举手' },
        { type: 'fill', sentence: '我___越南。', options: ['来自', '离开', '离'], answer: '来自' },
        { type: 'fill', sentence: '我需要多___。', options: ['练习', '流行', '可能'], answer: '练习' },
        { type: 'fill', sentence: '___，每天读十分钟。', options: ['例如', '可是', '可以'], answer: '例如' }
      ],
      normal: [
        { type: 'fill', sentence: '学校___欢迎仪式。', options: ['举行', '举手', '开学'], answer: '举行' },
        { type: 'fill', sentence: '你___不知道这件事。', options: ['可能', '可是', '可以'], answer: '可能' },
        { type: 'fill', sentence: '我不想___你。', options: ['离开', '离', '来自'], answer: '离开' },
        { type: 'fill', sentence: '现在九点一___。', options: ['刻', '卡', '靠'], answer: '刻' },
        { type: 'fill', sentence: '眼泪___下来了。', options: ['流', '练', '离'], answer: '流' },
        { type: 'order', words: ['来自', '我', '越南'], answer: '我来自越南' },
        { type: 'order', words: ['练习', '需要', '我', '多'], answer: '我需要多练习' }
      ],
      hard: [
        { type: 'fill', sentence: '手机___住了，不能___。', options: ['卡/开机', '靠/开学', '刻/举行'], answer: '卡/开机' },
        { type: 'fill', sentence: '你___近一点。', options: ['靠', '离', '流'], answer: '靠' },
        { type: 'fill', sentence: '学校___我家很远。', options: ['离', '离开', '来自'], answer: '离' },
        { type: 'fill', sentence: '这里很___学外语。', options: ['流行', '流', '练习'], answer: '流行' },
        { type: 'translate', prompt: 'Tớ đến từ Việt Nam.', answer: '我来自越南。' },
        { type: 'translate', prompt: 'Tớ không muốn rời xa cậu.', answer: '我不想离开你。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 37: Hành động hằng ngày (7) — 19 từ
  // 留, 留下, 旅行, 旅游, 卖, 满意, 猫, 面, 拿出, 拿到, 能够, 弄, 爬, 爬山, 怕, 排, 排队, 碰, 碰到
  // ───────────────────────────────────────────────────────────────────────────
  37: {
    id: 37,
    level: 2,
    title: 'Hành động hằng ngày (7)',
    context: 'Mai và Tiểu Mỹ lên kế hoạch đi du lịch cuối tuần, bàn về địa điểm và hoạt động.',
    vocabPreview: ['旅游', '爬山', '满意', '能够', '排队'],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Căn-tin · Buổi trưa', bg: 'cafeteria',
        cast: ['mai', 'xiaomei'],
        text: 'Mai và Tiểu Mỹ đang ăn trưa và bàn kế hoạch cuối tuần.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: 'Mai，周末我们去旅游吧！我想去旅行很久了。',
        pinyin: 'Mai, zhōumò wǒmen qù lǚyóu ba! Wǒ xiǎng qù lǚxíng hěn jiǔ le.',
        meaning: 'Mai, cuối tuần chúng ta đi du lịch đi! Tớ muốn đi du lịch lâu rồi.',
        expression: 'happy', vocab: ['旅游', '旅行']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好啊！我们去爬山怎么样？我不怕累。',
        pinyin: 'Hǎo a! Wǒmen qù páshān zěnmeyàng? Wǒ bú pà lèi.',
        meaning: 'Được thôi! Chúng ta đi leo núi thế nào? Tớ không sợ mệt.',
        expression: 'happy', vocab: ['爬山', '爬', '怕']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我也不怕！可是周末人多，要排队买票。',
        pinyin: 'Wǒ yě bú pà! Kěshì zhōumò rén duō, yào páiduì mǎi piào.',
        meaning: 'Tớ cũng không sợ! Nhưng cuối tuần đông người, phải xếp hàng mua vé.',
        expression: null, vocab: ['排队', '排']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '没关系，我们能够早点出发。对了，你看那只猫！',
        pinyin: 'Méi guānxi, wǒmen nénggòu zǎodiǎn chūfā. Duìle, nǐ kàn nà zhī māo!',
        meaning: 'Không sao, chúng ta có thể xuất phát sớm. À đúng rồi, cậu nhìn con mèo kia!',
        expression: 'surprise', vocab: ['能够', '猫']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'cafeteria',
        scene: '📍 Căn-tin · Buổi trưa',
        expression: 'curious',
        q: 'Tiểu Mỹ muốn nói "Tớ vừa gặp nó hôm qua". Cô ấy nên nói thế nào?',
        options: [
          { text: '我昨天碰到它了。', pinyin: 'Wǒ zuótiān pèngdào tā le.', meaning: 'Tớ hôm qua gặp nó rồi.', correct: true,
            feedback: 'Đúng! 碰到 = gặp (tình cờ), chạm phải. Dùng khi gặp ai/cái gì bất ngờ.' },
          { text: '我昨天碰它了。', pinyin: 'Wǒ zuótiān pèng tā le.', meaning: 'Tớ hôm qua chạm nó rồi.', correct: false,
            feedback: '碰 = chạm, va chạm. Cần 碰到 để diễn đạt "gặp".' },
          { text: '我昨天排队它了。', pinyin: 'Wǒ zuótiān páiduì tā le.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '排队 = xếp hàng, không dùng với đối tượng như vậy.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '哈哈，我昨天碰到它了！它碰了我的脚。',
        pinyin: 'Hāhā, wǒ zuótiān pèngdào tā le! Tā pèng le wǒ de jiǎo.',
        meaning: 'Haha, tớ hôm qua gặp nó rồi! Nó chạm vào chân tớ.',
        expression: 'happy', vocab: ['碰到', '碰']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '真可爱！对了，我要去买点东西，那边有人卖水果。',
        pinyin: 'Zhēn kě\'ài! Duìle, wǒ yào qù mǎi diǎn dōngxi, nàbiān yǒu rén mài shuǐguǒ.',
        meaning: 'Dễ thương thật! À đúng rồi, tớ cần đi mua chút đồ, bên kia có người bán trái cây.',
        expression: 'happy', vocab: ['卖']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"旅游" có nghĩa là gì?',
            options: ['du lịch', 'leo núi', 'xếp hàng', 'sợ'],
            answer: 0
          },
          {
            q: 'Muốn nói "Tớ không sợ mệt" thì dùng từ nào?',
            options: ['怕', '爬', '排', '碰'],
            answer: 0
          },
          {
            q: '"碰到" trong câu "我碰到他了" có nghĩa là gì?',
            options: ['gặp', 'chạm', 'xếp hàng', 'leo'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Cửa hàng · Tiếp tục', bg: 'street',
        cast: ['mai', 'xiaomei'],
        text: 'Hai bạn đi đến cửa hàng gần đó.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我拿到钱包了！让我拿出一些钱。',
        pinyin: 'Wǒ nádào qiánbāo le! Ràng wǒ náchū yìxiē qián.',
        meaning: 'Tớ lấy được ví rồi! Để tớ lấy ra một ít tiền.',
        expression: 'happy', vocab: ['拿到', '拿出']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你对这个水果满意吗？看起来很新鲜。',
        pinyin: 'Nǐ duì zhège shuǐguǒ mǎnyì ma? Kàn qǐlái hěn xīnxiān.',
        meaning: 'Cậu hài lòng với trái cây này không? Trông rất tươi.',
        expression: 'curious', vocab: ['满意']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '很满意！对了，你弄好行李了吗？',
        pinyin: 'Hěn mǎnyì! Duìle, nǐ nònghǎo xíngli le ma?',
        meaning: 'Rất hài lòng! À đúng rồi, cậu chuẩn bị xong hành lý chưa?',
        expression: 'happy', vocab: ['弄']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'street',
        scene: '📍 Cửa hàng',
        expression: 'focused',
        q: 'Tiểu Mỹ muốn nói "Tớ sẽ ở lại đây". Cô ấy nên nói thế nào?',
        options: [
          { text: '我会留下来。', pinyin: 'Wǒ huì liúxiàlái.', meaning: 'Tớ sẽ ở lại.', correct: true,
            feedback: 'Đúng! 留下 = ở lại, để lại. 来 thêm vào để nhấn mạnh hướng về phía người nói.' },
          { text: '我会留来。', pinyin: 'Wǒ huì liú lái.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '留 cần 下 để diễn đạt "ở lại": 留下.' },
          { text: '我会旅游来。', pinyin: 'Wǒ huì lǚyóu lái.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '旅游 = du lịch, không phải ở lại.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '弄好了！我想留下一些东西在宿舍，不用全带。',
        pinyin: 'Nònghǎo le! Wǒ xiǎng liúxià yìxiē dōngxi zài sùshè, búyòng quán dài.',
        meaning: 'Chuẩn bị xong rồi! Tớ muốn để lại một số đồ ở ký túc xá, không cần mang hết.',
        expression: 'happy', vocab: ['留下', '留']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好主意！我们去看看那边的面馆，吃碗面再走。',
        pinyin: 'Hǎo zhǔyi! Wǒmen qù kànkan nàbiān de miànguǎn, chī wǎn miàn zài zǒu.',
        meaning: 'Ý hay! Chúng ta đi xem quán mì bên kia, ăn bát mì rồi đi.',
        expression: 'happy', vocab: ['面']
      }
    ],
    vocab: [
      { h: '留', p: 'liú', v: 'ở lại, giữ lại' },
      { h: '留下', p: 'liúxià', v: 'ở lại, để lại' },
      { h: '旅行', p: 'lǚxíng', v: 'du lịch, đi chơi' },
      { h: '旅游', p: 'lǚyóu', v: 'du lịch' },
      { h: '卖', p: 'mài', v: 'bán' },
      { h: '满意', p: 'mǎnyì', v: 'hài lòng' },
      { h: '猫', p: 'māo', v: 'mèo' },
      { h: '面', p: 'miàn', v: 'mì, mặt' },
      { h: '拿出', p: 'náchū', v: 'lấy ra' },
      { h: '拿到', p: 'nádào', v: 'lấy được, nhận được' },
      { h: '能够', p: 'nénggòu', v: 'có thể' },
      { h: '弄', p: 'nòng', v: 'làm, chuẩn bị' },
      { h: '爬', p: 'pá', v: 'leo, bò' },
      { h: '爬山', p: 'páshān', v: 'leo núi' },
      { h: '怕', p: 'pà', v: 'sợ' },
      { h: '排', p: 'pái', v: 'xếp, hàng' },
      { h: '排队', p: 'páiduì', v: 'xếp hàng' },
      { h: '碰', p: 'pèng', v: 'chạm, va' },
      { h: '碰到', p: 'pèngdào', v: 'gặp, chạm phải' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '周末我们去___吧！', options: ['旅游', '排队', '碰到'], answer: '旅游' },
        { type: 'fill', sentence: '我不___累。', options: ['怕', '爬', '排'], answer: '怕' },
        { type: 'fill', sentence: '我们去___怎么样？', options: ['爬山', '旅行', '卖'], answer: '爬山' },
        { type: 'fill', sentence: '要___买票。', options: ['排队', '排', '碰'], answer: '排队' },
        { type: 'fill', sentence: '你看那只___！', options: ['猫', '面', '弄'], answer: '猫' }
      ],
      normal: [
        { type: 'fill', sentence: '我昨天___他了。', options: ['碰到', '碰', '排队'], answer: '碰到' },
        { type: 'fill', sentence: '那边有人___水果。', options: ['卖', '买', '拿'], answer: '卖' },
        { type: 'fill', sentence: '我___钱包了。', options: ['拿到', '拿出', '弄'], answer: '拿到' },
        { type: 'fill', sentence: '你对这个___吗？', options: ['满意', '能够', '留下'], answer: '满意' },
        { type: 'fill', sentence: '我们___早点出发。', options: ['能够', '满意', '怕'], answer: '能够' },
        { type: 'order', words: ['旅游', '去', '我们', '周末'], answer: '周末我们去旅游' },
        { type: 'order', words: ['爬山', '不', '我', '怕'], answer: '我不怕爬山' }
      ],
      hard: [
        { type: 'fill', sentence: '让我___一些钱。', options: ['拿出', '拿到', '留下'], answer: '拿出' },
        { type: 'fill', sentence: '我想___一些东西在这里。', options: ['留下', '留', '弄'], answer: '留下' },
        { type: 'fill', sentence: '你___好行李了吗？', options: ['弄', '拿', '留'], answer: '弄' },
        { type: 'fill', sentence: '我们吃碗___再走。', options: ['面', '猫', '卖'], answer: '面' },
        { type: 'translate', prompt: 'Tớ hôm qua gặp nó rồi.', answer: '我昨天碰到它了。' },
        { type: 'translate', prompt: 'Chúng ta có thể xuất phát sớm.', answer: '我们能够早点出发。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 38: Hành động hằng ngày (8) — 19 từ
  // 碰见, 骑, 骑车, 起飞, 气, 晴, 请客, 请求, 求, 取, 取得, 让, 认为, 如果, 入口, 商量, 生活, 省, 实习
  // ───────────────────────────────────────────────────────────────────────────
  38: {
    id: 38,
    level: 2,
    title: 'Hành động hằng ngày (8)',
    context: 'Mai chuẩn bị đi thực tập, bàn bạc với Tiểu Mỹ về cuộc sống và công việc tương lai.',
    vocabPreview: ['实习', '生活', '认为', '如果', '商量'],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Sân trường · Buổi sáng', bg: 'campus',
        cast: ['mai', 'xiaomei'],
        text: 'Một ngày đẹp trời, Mai và Tiểu Mỹ gặp nhau ở sân trường.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '今天天气真晴！Mai，我刚碰见老师，他说你要去实习？',
        pinyin: 'Jīntiān tiānqì zhēn qíng! Mai, wǒ gāng pèngjiàn lǎoshī, tā shuō nǐ yào qù shíxí?',
        meaning: 'Hôm nay trời thật đẹp! Mai, tớ vừa gặp thầy, thầy nói cậu sắp đi thực tập?',
        expression: 'curious', vocab: ['晴', '碰见', '实习']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '是的！我认为这是一个好机会。如果顺利，我可以学到很多。',
        pinyin: 'Shì de! Wǒ rènwéi zhè shì yí gè hǎo jīhuì. Rúguǒ shùnlì, wǒ kěyǐ xuédào hěn duō.',
        meaning: 'Đúng vậy! Tớ cho rằng đây là một cơ hội tốt. Nếu thuận lợi, tớ có thể học được nhiều.',
        expression: 'happy', vocab: ['认为', '如果']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '太好了！你的生活会变得很忙吧？',
        pinyin: 'Tài hǎo le! Nǐ de shēnghuó huì biàn de hěn máng ba?',
        meaning: 'Tuyệt quá! Cuộc sống của cậu sẽ trở nên bận rộn nhỉ?',
        expression: 'happy', vocab: ['生活']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '可能吧。我想和你商量一下，你觉得我应该怎么准备？',
        pinyin: 'Kěnéng ba. Wǒ xiǎng hé nǐ shāngliang yíxià, nǐ juéde wǒ yīnggāi zěnme zhǔnbèi?',
        meaning: 'Có thể. Tớ muốn bàn bạc với cậu một chút, cậu nghĩ tớ nên chuẩn bị thế nào?',
        expression: 'curious', vocab: ['商量']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'campus',
        scene: '📍 Sân trường · Buổi sáng',
        expression: 'focused',
        q: 'Tiểu Mỹ muốn nói "Tớ cho rằng cậu nên chuẩn bị sớm". Cô ấy nên nói thế nào?',
        options: [
          { text: '我认为你应该早点准备。', pinyin: 'Wǒ rènwéi nǐ yīnggāi zǎodiǎn zhǔnbèi.', meaning: 'Tớ cho rằng cậu nên chuẩn bị sớm.', correct: true,
            feedback: 'Đúng! 认为 = cho rằng, nghĩ rằng. Dùng khi đưa ra ý kiến cá nhân.' },
          { text: '我请求你应该早点准备。', pinyin: 'Wǒ qǐngqiú nǐ yīnggāi zǎodiǎn zhǔnbèi.', meaning: 'Tớ yêu cầu cậu nên chuẩn bị sớm.', correct: false,
            feedback: '请求 = yêu cầu, xin, mang tính chính thức hơn, không phù hợp giữa bạn bè.' },
          { text: '我求你应该早点准备。', pinyin: 'Wǒ qiú nǐ yīnggāi zǎodiǎn zhǔnbèi.', meaning: 'Tớ cầu xin cậu nên chuẩn bị sớm.', correct: false,
            feedback: '求 = cầu xin, van xin, quá mạnh cho ngữ cảnh này.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我认为你应该早点准备。对了，公司入口在哪里？',
        pinyin: 'Wǒ rènwéi nǐ yīnggāi zǎodiǎn zhǔnbèi. Duìle, gōngsī rùkǒu zài nǎlǐ?',
        meaning: 'Tớ cho rằng cậu nên chuẩn bị sớm. À đúng rồi, lối vào công ty ở đâu?',
        expression: 'focused', vocab: ['入口']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '在大楼的东边。我骑车去，大概二十分钟。',
        pinyin: 'Zài dàlóu de dōngbiān. Wǒ qíchē qù, dàgài èrshí fēnzhōng.',
        meaning: 'Ở phía đông tòa nhà. Tớ đạp xe đi, khoảng hai mươi phút.',
        expression: null, vocab: ['骑车', '骑']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"实习" có nghĩa là gì?',
            options: ['thực tập', 'cuộc sống', 'bàn bạc', 'cho rằng'],
            answer: 0
          },
          {
            q: 'Muốn nói "Nếu thuận lợi" thì dùng từ nào?',
            options: ['如果', '认为', '商量', '请求'],
            answer: 0
          },
          {
            q: '"骑车" trong câu "我骑车去" có nghĩa là gì?',
            options: ['đạp xe', 'lái xe', 'đi bộ', 'chạy'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Sân bay · Ngày khác', bg: 'street',
        cast: ['mai', 'xiaomei'],
        text: 'Một ngày khác, Mai và Tiểu Mỹ đến sân bay tiễn bạn.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '飞机快要起飞了！我们快去取行李吧。',
        pinyin: 'Fēijī kuàiyào qǐfēi le! Wǒmen kuài qù qǔ xíngli ba.',
        meaning: 'Máy bay sắp cất cánh rồi! Chúng ta nhanh đi lấy hành lý đi.',
        expression: 'surprise', vocab: ['起飞', '取']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '好！对了，你取得签证了吗？',
        pinyin: 'Hǎo! Duìle, nǐ qǔdé qiānzhèng le ma?',
        meaning: 'Được! À đúng rồi, cậu lấy được visa chưa?',
        expression: 'curious', vocab: ['取得']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '取得了！别生气，我没忘。',
        pinyin: 'Qǔdé le! Bié shēngqì, wǒ méi wàng.',
        meaning: 'Lấy được rồi! Đừng giận, tớ không quên đâu.',
        expression: 'happy', vocab: ['气']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '哈哈，我没生气！回来后请客吃饭哦！',
        pinyin: 'Hāhā, wǒ méi shēngqì! Huílái hòu qǐngkè chīfàn o!',
        meaning: 'Haha, tớ không giận! Về rồi mời tớ ăn cơm nhé!',
        expression: 'happy', vocab: ['请客']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'street',
        scene: '📍 Sân bay',
        expression: 'happy',
        q: 'Mai muốn nói "Tớ xin cậu một việc". Cô ấy nên nói thế nào?',
        options: [
          { text: '我求你一件事。', pinyin: 'Wǒ qiú nǐ yí jiàn shì.', meaning: 'Tớ xin cậu một việc.', correct: true,
            feedback: 'Đúng! 求 = xin, cầu xin. Dùng khi nhờ vả ai đó một cách khẩn thiết.' },
          { text: '我请求你一件事。', pinyin: 'Wǒ qǐngqiú nǐ yí jiàn shì.', meaning: 'Tớ yêu cầu cậu một việc.', correct: false,
            feedback: '请求 = yêu cầu (chính thức), thường dùng trong văn bản hoặc ngữ cảnh trang trọng.' },
          { text: '我让你一件事。', pinyin: 'Wǒ ràng nǐ yí jiàn shì.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '让 = để, cho phép, bảo, không dùng theo cách này.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好！我求你一件事：帮我照顾我的猫。让它每天吃饱。',
        pinyin: 'Hǎo! Wǒ qiú nǐ yí jiàn shì: bāng wǒ zhàogù wǒ de māo. Ràng tā měitiān chībǎo.',
        meaning: 'Được! Tớ xin cậu một việc: giúp tớ chăm con mèo. Để nó mỗi ngày ăn no.',
        expression: 'happy', vocab: ['求', '请求', '让']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '没问题！这样可以省很多钱，不用送去宠物店。',
        pinyin: 'Méi wèntí! Zhèyàng kěyǐ shěng hěn duō qián, búyòng sòng qù chǒngwùdiàn.',
        meaning: 'Không vấn đề! Như vậy có thể tiết kiệm nhiều tiền, không cần gửi đến tiệm thú cưng.',
        expression: 'happy', vocab: ['省']
      }
    ],
    vocab: [
      { h: '碰见', p: 'pèngjiàn', v: 'gặp (tình cờ)' },
      { h: '骑', p: 'qí', v: 'cưỡi, đạp (xe)' },
      { h: '骑车', p: 'qíchē', v: 'đạp xe' },
      { h: '起飞', p: 'qǐfēi', v: 'cất cánh' },
      { h: '气', p: 'qì', v: 'giận, khí' },
      { h: '晴', p: 'qíng', v: 'nắng, trời đẹp' },
      { h: '请客', p: 'qǐngkè', v: 'mời khách, đãi' },
      { h: '请求', p: 'qǐngqiú', v: 'yêu cầu, đề nghị' },
      { h: '求', p: 'qiú', v: 'xin, cầu xin' },
      { h: '取', p: 'qǔ', v: 'lấy' },
      { h: '取得', p: 'qǔdé', v: 'đạt được, lấy được' },
      { h: '让', p: 'ràng', v: 'để, cho phép, bảo' },
      { h: '认为', p: 'rènwéi', v: 'cho rằng, nghĩ rằng' },
      { h: '如果', p: 'rúguǒ', v: 'nếu' },
      { h: '入口', p: 'rùkǒu', v: 'lối vào' },
      { h: '商量', p: 'shāngliang', v: 'bàn bạc' },
      { h: '生活', p: 'shēnghuó', v: 'cuộc sống' },
      { h: '省', p: 'shěng', v: 'tiết kiệm; tỉnh' },
      { h: '实习', p: 'shíxí', v: 'thực tập' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我要去___。', options: ['实习', '生活', '商量'], answer: '实习' },
        { type: 'fill', sentence: '我___这是一个好机会。', options: ['认为', '请求', '让'], answer: '认为' },
        { type: 'fill', sentence: '___顺利，我可以学到很多。', options: ['如果', '认为', '商量'], answer: '如果' },
        { type: 'fill', sentence: '今天天气真___！', options: ['晴', '气', '省'], answer: '晴' },
        { type: 'fill', sentence: '我想和你___一下。', options: ['商量', '请求', '认为'], answer: '商量' }
      ],
      normal: [
        { type: 'fill', sentence: '我刚___老师。', options: ['碰见', '碰到', '取得'], answer: '碰见' },
        { type: 'fill', sentence: '飞机快要___了。', options: ['起飞', '骑车', '取'], answer: '起飞' },
        { type: 'fill', sentence: '公司___在哪里？', options: ['入口', '出口', '省'], answer: '入口' },
        { type: 'fill', sentence: '你___签证了吗？', options: ['取得', '取', '求'], answer: '取得' },
        { type: 'fill', sentence: '回来后___吃饭哦！', options: ['请客', '请求', '求'], answer: '请客' },
        { type: 'order', words: ['认为', '我', '好机会', '这是', '一个'], answer: '我认为这是一个好机会' },
        { type: 'order', words: ['商量', '想', '我', '和你', '一下'], answer: '我想和你商量一下' }
      ],
      hard: [
        { type: 'fill', sentence: '我___去，大概二十分钟。', options: ['骑车', '骑', '起飞'], answer: '骑车' },
        { type: 'fill', sentence: '别生___，我没忘。', options: ['气', '晴', '省'], answer: '气' },
        { type: 'fill', sentence: '___它每天吃饱。', options: ['让', '求', '请求'], answer: '让' },
        { type: 'fill', sentence: '这样可以___很多钱。', options: ['省', '取', '求'], answer: '省' },
        { type: 'translate', prompt: 'Tớ cho rằng đây là một cơ hội tốt.', answer: '我认为这是一个好机会。' },
        { type: 'translate', prompt: 'Nếu thuận lợi, tớ có thể học được nhiều.', answer: '如果顺利，我可以学到很多。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 39: Hành động hằng ngày (9) — 19 từ
  // 实现, 使用, 收, 收到, 收入, 受到, 数, 说明, 送到, 送给, 算, 讨论, 套, 提, 提出, 提到, 提高, 题, 听讲
  // ───────────────────────────────────────────────────────────────────────────
  39: {
    id: 39,
    level: 2,
    title: 'Hành động hằng ngày (9)',
    context: 'Mai và Tiểu Mỹ thảo luận về bài tập nhóm, cách nâng cao kỹ năng và chia sẻ quà tặng.',
    vocabPreview: ['讨论', '提高', '收到', '送给', '使用'],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Thư viện · Buổi chiều', bg: 'library',
        cast: ['mai', 'xiaomei'],
        text: 'Mai và Tiểu Mỹ đang làm bài tập nhóm trong thư viện.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: 'Mai，我们来讨论一下这道题吧。',
        pinyin: 'Mai, wǒmen lái tǎolùn yíxià zhè dào tí ba.',
        meaning: 'Mai, chúng ta thảo luận câu hỏi này đi.',
        expression: 'focused', vocab: ['讨论', '题']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好！老师提到过这个问题，我们要认真听讲。',
        pinyin: 'Hǎo! Lǎoshī tídào guò zhège wèntí, wǒmen yào rènzhēn tīngjiǎng.',
        meaning: 'Được! Thầy đã đề cập vấn đề này, chúng ta phải chăm chú nghe giảng.',
        expression: 'focused', vocab: ['提到', '听讲']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '对！我想提出一个想法：我们可以使用这个方法。',
        pinyin: 'Duì! Wǒ xiǎng tíchū yí gè xiǎngfǎ: wǒmen kěyǐ shǐyòng zhège fāngfǎ.',
        meaning: 'Đúng! Tớ muốn đề xuất một ý tưởng: chúng ta có thể sử dụng phương pháp này.',
        expression: 'happy', vocab: ['提出', '使用']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好主意！这样可以提高我们的成绩。',
        pinyin: 'Hǎo zhǔyi! Zhèyàng kěyǐ tígāo wǒmen de chéngjì.',
        meaning: 'Ý hay! Như vậy có thể nâng cao thành tích của chúng ta.',
        expression: 'happy', vocab: ['提高']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'library',
        scene: '📍 Thư viện · Buổi chiều',
        expression: 'curious',
        q: 'Tiểu Mỹ muốn nói "Cậu có thể giải thích rõ hơn không?". Cô ấy nên nói thế nào?',
        options: [
          { text: '你能说明一下吗？', pinyin: 'Nǐ néng shuōmíng yíxià ma?', meaning: 'Cậu có thể giải thích rõ không?', correct: true,
            feedback: 'Đúng! 说明 = giải thích, làm rõ. Dùng khi muốn ai đó giải thích chi tiết hơn.' },
          { text: '你能提到一下吗？', pinyin: 'Nǐ néng tídào yíxià ma?', meaning: '(Không tự nhiên)', correct: false,
            feedback: '提到 = đề cập, nhắc đến, không dùng để yêu cầu giải thích.' },
          { text: '你能讨论一下吗？', pinyin: 'Nǐ néng tǎolùn yíxià ma?', meaning: 'Cậu có thể thảo luận không?', correct: false,
            feedback: '讨论 = thảo luận (cần nhiều người), không phải giải thích.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你能说明一下吗？我还不太懂。',
        pinyin: 'Nǐ néng shuōmíng yíxià ma? Wǒ hái bú tài dǒng.',
        meaning: 'Cậu có thể giải thích rõ không? Tớ vẫn chưa hiểu lắm.',
        expression: 'confused', vocab: ['说明']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '没问题！我来提一下重点。算一算，我们还有三天。',
        pinyin: 'Méi wèntí! Wǒ lái tí yíxià zhòngdiǎn. Suàn yi suàn, wǒmen hái yǒu sān tiān.',
        meaning: 'Không vấn đề! Để tớ nêu ra trọng điểm. Tính toán xem, chúng ta còn ba ngày.',
        expression: 'focused', vocab: ['提', '算']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"讨论" có nghĩa là gì?',
            options: ['thảo luận', 'giải thích', 'đề xuất', 'nâng cao'],
            answer: 0
          },
          {
            q: 'Muốn nói "nâng cao thành tích" thì dùng từ nào?',
            options: ['提高', '提出', '提到', '提'],
            answer: 0
          },
          {
            q: '"说明" trong câu "你能说明一下吗" có nghĩa là gì?',
            options: ['giải thích', 'thảo luận', 'đề cập', 'tính toán'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Ký túc xá · Buổi tối', bg: 'dorm-room',
        cast: ['mai', 'xiaomei'],
        text: 'Buổi tối, Mai nhận được một món quà.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '小美，我收到一个包裹了！是妈妈送给我的。',
        pinyin: 'Xiǎoměi, wǒ shōudào yí gè bāoguǒ le! Shì māma sònggěi wǒ de.',
        meaning: 'Tiểu Mỹ, tớ nhận được một bưu kiện rồi! Là mẹ gửi tặng tớ.',
        expression: 'happy', vocab: ['收到', '送给']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '太好了！快收起来看看是什么。',
        pinyin: 'Tài hǎo le! Kuài shōu qǐlái kànkan shì shénme.',
        meaning: 'Tuyệt quá! Nhanh cất đi xem là gì nào.',
        expression: 'happy', vocab: ['收']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '哇，是一套新衣服！妈妈真好。她的收入不高，但总是想着我。',
        pinyin: 'Wa, shì yí tào xīn yīfu! Māma zhēn hǎo. Tā de shōurù bù gāo, dàn zǒngshì xiǎngzhe wǒ.',
        meaning: 'Oa, là một bộ quần áo mới! Mẹ thật tốt. Thu nhập của bà ấy không cao, nhưng luôn nghĩ đến tớ.',
        expression: 'happy', vocab: ['套', '收入']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'dorm-room',
        scene: '📍 Ký túc xá · Buổi tối',
        expression: 'happy',
        q: 'Tiểu Mỹ muốn nói "Cậu được mọi người yêu quý". Cô ấy nên nói thế nào?',
        options: [
          { text: '你受到大家的喜爱。', pinyin: 'Nǐ shòudào dàjiā de xǐ\'ài.', meaning: 'Cậu được mọi người yêu quý.', correct: true,
            feedback: 'Đúng! 受到 = nhận được, chịu (thường dùng với cảm xúc/đánh giá từ người khác).' },
          { text: '你收到大家的喜爱。', pinyin: 'Nǐ shōudào dàjiā de xǐ\'ài.', meaning: '(Không tự nhiên)', correct: false,
            feedback: '收到 = nhận được (vật), không dùng với cảm xúc trừu tượng như "yêu quý".' },
          { text: '你送到大家的喜爱。', pinyin: 'Nǐ sòngdào dàjiā de xǐ\'ài.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '送到 = gửi đến, không dùng theo cách này.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你受到大家的喜爱！对了，包裹送到宿舍了吗？',
        pinyin: 'Nǐ shòudào dàjiā de xǐ\'ài! Duìle, bāoguǒ sòngdào sùshè le ma?',
        meaning: 'Cậu được mọi người yêu quý! À đúng rồi, bưu kiện gửi đến ký túc xá rồi à?',
        expression: 'happy', vocab: ['受到', '送到']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '是的！快递员数了数，一共三个包裹。我的梦想终于实现了！',
        pinyin: 'Shì de! Kuàidìyuán shǔ le shǔ, yígòng sān gè bāoguǒ. Wǒ de mèngxiǎng zhōngyú shíxiàn le!',
        meaning: 'Đúng vậy! Shipper đếm xem, tổng cộng ba bưu kiện. Ước mơ của tớ cuối cùng cũng thực hiện được rồi!',
        expression: 'happy', vocab: ['数', '实现']
      }
    ],
    vocab: [
      { h: '实现', p: 'shíxiàn', v: 'thực hiện' },
      { h: '使用', p: 'shǐyòng', v: 'sử dụng' },
      { h: '收', p: 'shōu', v: 'thu, cất' },
      { h: '收到', p: 'shōudào', v: 'nhận được' },
      { h: '收入', p: 'shōurù', v: 'thu nhập' },
      { h: '受到', p: 'shòudào', v: 'nhận được, chịu' },
      { h: '数', p: 'shǔ', v: 'đếm' },
      { h: '说明', p: 'shuōmíng', v: 'giải thích, làm rõ' },
      { h: '送到', p: 'sòngdào', v: 'gửi đến' },
      { h: '送给', p: 'sònggěi', v: 'tặng cho' },
      { h: '算', p: 'suàn', v: 'tính, tính toán' },
      { h: '讨论', p: 'tǎolùn', v: 'thảo luận' },
      { h: '套', p: 'tào', v: 'bộ (quần áo)' },
      { h: '提', p: 'tí', v: 'nêu, đề cập' },
      { h: '提出', p: 'tíchū', v: 'đề xuất' },
      { h: '提到', p: 'tídào', v: 'đề cập, nhắc đến' },
      { h: '提高', p: 'tígāo', v: 'nâng cao' },
      { h: '题', p: 'tí', v: 'câu hỏi, đề' },
      { h: '听讲', p: 'tīngjiǎng', v: 'nghe giảng' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我们来___一下这个问题。', options: ['讨论', '说明', '提高'], answer: '讨论' },
        { type: 'fill', sentence: '我___一个包裹了。', options: ['收到', '送到', '受到'], answer: '收到' },
        { type: 'fill', sentence: '这样可以___成绩。', options: ['提高', '提出', '提到'], answer: '提高' },
        { type: 'fill', sentence: '这是妈妈___我的。', options: ['送给', '送到', '收到'], answer: '送给' },
        { type: 'fill', sentence: '我们要认真___。', options: ['听讲', '讨论', '说明'], answer: '听讲' }
      ],
      normal: [
        { type: 'fill', sentence: '我想___一个想法。', options: ['提出', '提到', '提高'], answer: '提出' },
        { type: 'fill', sentence: '老师___过这个问题。', options: ['提到', '提出', '提'], answer: '提到' },
        { type: 'fill', sentence: '你能___一下吗？', options: ['说明', '讨论', '算'], answer: '说明' },
        { type: 'fill', sentence: '我们可以___这个方法。', options: ['使用', '实现', '收'], answer: '使用' },
        { type: 'fill', sentence: '你___大家的喜爱。', options: ['受到', '收到', '送到'], answer: '受到' },
        { type: 'order', words: ['讨论', '我们', '一下', '来', '这个问题'], answer: '我们来讨论一下这个问题' },
        { type: 'order', words: ['提高', '可以', '这样', '成绩', '我们的'], answer: '这样可以提高我们的成绩' }
      ],
      hard: [
        { type: 'fill', sentence: '她的___不高。', options: ['收入', '收到', '收'], answer: '收入' },
        { type: 'fill', sentence: '是一___新衣服。', options: ['套', '题', '数'], answer: '套' },
        { type: 'fill', sentence: '快递员___了___。', options: ['数/数', '算/算', '收/收'], answer: '数/数' },
        { type: 'fill', sentence: '我的梦想终于___了。', options: ['实现', '使用', '说明'], answer: '实现' },
        { type: 'translate', prompt: 'Chúng ta thảo luận câu hỏi này đi.', answer: '我们来讨论一下这道题吧。' },
        { type: 'translate', prompt: 'Như vậy có thể nâng cao thành tích.', answer: '这样可以提高成绩。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 40: Hành động hằng ngày (10) — 19 từ
  // 听说, 停, 停车, 挺, 通过, 通知, 推, 完, 完成, 晚安, 网, 往, 为, 喂, 闻, 问路, 午餐, 午睡, 习惯
  // ───────────────────────────────────────────────────────────────────────────
  40: {
    id: 40,
    level: 2,
    title: 'Hành động hằng ngày (10)',
    context: 'Mai và Tiểu Mỹ trải qua một ngày bình thường: ăn trưa, nghỉ ngơi và hoàn thành công việc.',
    vocabPreview: ['午餐', '完成', '习惯', '通过', '听说'],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Căn-tin · Buổi trưa', bg: 'cafeteria',
        cast: ['mai', 'xiaomei'],
        text: 'Giờ ăn trưa, Mai và Tiểu Mỹ gặp nhau ở căn-tin.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: 'Mai，午餐吃什么？我听说今天有新菜。',
        pinyin: 'Mai, wǔcān chī shénme? Wǒ tīngshuō jīntiān yǒu xīn cài.',
        meaning: 'Mai, bữa trưa ăn gì? Tớ nghe nói hôm nay có món mới.',
        expression: 'happy', vocab: ['午餐', '听说']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '真的吗？我闻到很香！让我看看菜单。',
        pinyin: 'Zhēn de ma? Wǒ wéndào hěn xiāng! Ràng wǒ kànkan càidān.',
        meaning: 'Thật không? Tớ ngửi thấy thơm lắm! Để tớ xem thực đơn.',
        expression: 'happy', vocab: ['闻']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '对了，你习惯这里的生活了吗？',
        pinyin: 'Duìle, nǐ xíguàn zhèlǐ de shēnghuó le ma?',
        meaning: 'À đúng rồi, cậu quen với cuộc sống ở đây chưa?',
        expression: 'curious', vocab: ['习惯']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '挺习惯的！我现在每天午睡半小时。',
        pinyin: 'Tǐng xíguàn de! Wǒ xiànzài měitiān wǔshuì bàn xiǎoshí.',
        meaning: 'Khá quen rồi! Tớ bây giờ mỗi ngày ngủ trưa nửa tiếng.',
        expression: 'happy', vocab: ['挺', '午睡']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'cafeteria',
        scene: '📍 Căn-tin · Buổi trưa',
        expression: 'curious',
        q: 'Tiểu Mỹ muốn nói "Tớ nghe nói cậu đã hoàn thành bài tập". Cô ấy nên nói thế nào?',
        options: [
          { text: '我听说你完成作业了。', pinyin: 'Wǒ tīngshuō nǐ wánchéng zuòyè le.', meaning: 'Tớ nghe nói cậu hoàn thành bài tập rồi.', correct: true,
            feedback: 'Đúng! 听说 = nghe nói. 完成 = hoàn thành.' },
          { text: '我听说你完作业了。', pinyin: 'Wǒ tīngshuō nǐ wán zuòyè le.', meaning: 'Tớ nghe nói cậu xong bài tập rồi.', correct: false,
            feedback: '完 = xong, kết thúc, nhưng 完成 tự nhiên hơn khi nói về hoàn thành công việc.' },
          { text: '我通过你完成作业了。', pinyin: 'Wǒ tōngguò nǐ wánchéng zuòyè le.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '通过 = thông qua, vượt qua, không dùng theo cách này.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我听说你完成作业了！你通过考试了吗？',
        pinyin: 'Wǒ tīngshuō nǐ wánchéng zuòyè le! Nǐ tōngguò kǎoshì le ma?',
        meaning: 'Tớ nghe nói cậu hoàn thành bài tập rồi! Cậu vượt qua kỳ thi chưa?',
        expression: 'happy', vocab: ['完成', '完', '通过']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '通过了！老师通知我下周有活动。',
        pinyin: 'Tōngguò le! Lǎoshī tōngzhī wǒ xià zhōu yǒu huódòng.',
        meaning: 'Vượt qua rồi! Thầy thông báo cho tớ tuần sau có hoạt động.',
        expression: 'happy', vocab: ['通知']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"午餐" có nghĩa là gì?',
            options: ['bữa trưa', 'bữa tối', 'bữa sáng', 'ăn vặt'],
            answer: 0
          },
          {
            q: 'Muốn nói "Tớ nghe nói" thì dùng từ nào?',
            options: ['听说', '闻', '通知', '习惯'],
            answer: 0
          },
          {
            q: '"完成" trong câu "完成作业" có nghĩa là gì?',
            options: ['hoàn thành', 'bắt đầu', 'tiếp tục', 'dừng lại'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Đường phố · Buổi chiều', bg: 'street',
        cast: ['mai', 'xiaomei'],
        text: 'Buổi chiều, hai bạn đi dạo trên phố.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '小美，我们往前走吧。我想问路去书店。',
        pinyin: 'Xiǎoměi, wǒmen wǎng qián zǒu ba. Wǒ xiǎng wènlù qù shūdiàn.',
        meaning: 'Tiểu Mỹ, chúng ta đi về phía trước đi. Tớ muốn hỏi đường đến hiệu sách.',
        expression: 'curious', vocab: ['往', '问路']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '好！看，那边有人在停车。我们可以问他。',
        pinyin: 'Hǎo! Kàn, nàbiān yǒu rén zài tíngchē. Wǒmen kěyǐ wèn tā.',
        meaning: 'Được! Nhìn kìa, bên kia có người đang đỗ xe. Chúng ta có thể hỏi anh ấy.',
        expression: null, vocab: ['停车', '停']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '喂，请问书店怎么走？',
        pinyin: 'Wèi, qǐngwèn shūdiàn zěnme zǒu?',
        meaning: 'Này, xin hỏi hiệu sách đi thế nào ạ?',
        expression: 'curious', vocab: ['喂']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '他说往前走，然后推开那扇门就到了。',
        pinyin: 'Tā shuō wǎng qián zǒu, ránhòu tuīkāi nà shàn mén jiù dào le.',
        meaning: 'Anh ấy nói đi về phía trước, rồi đẩy cánh cửa đó là đến.',
        expression: 'happy', vocab: ['推']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'street',
        scene: '📍 Đường phố · Buổi chiều',
        expression: 'happy',
        q: 'Mai muốn nói "Tớ làm việc này vì cậu". Cô ấy nên nói thế nào?',
        options: [
          { text: '我为你做这件事。', pinyin: 'Wǒ wèi nǐ zuò zhè jiàn shì.', meaning: 'Tớ làm việc này vì cậu.', correct: true,
            feedback: 'Đúng! 为 = vì, cho. Dùng để chỉ mục đích hoặc đối tượng hưởng lợi.' },
          { text: '我往你做这件事。', pinyin: 'Wǒ wǎng nǐ zuò zhè jiàn shì.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '往 = về phía (hướng), không dùng để chỉ mục đích.' },
          { text: '我网你做这件事。', pinyin: 'Wǒ wǎng nǐ zuò zhè jiàn shì.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '网 = mạng, lưới, không liên quan.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '谢谢你！我为你买了一本书。晚上我在网上找到的。',
        pinyin: 'Xièxie nǐ! Wǒ wèi nǐ mǎi le yì běn shū. Wǎnshang wǒ zài wǎngshàng zhǎodào de.',
        meaning: 'Cảm ơn cậu! Tớ mua cho cậu một cuốn sách. Tối tớ tìm thấy trên mạng.',
        expression: 'happy', vocab: ['为', '网']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '太好了！晚安，明天见！',
        pinyin: 'Tài hǎo le! Wǎn\'ān, míngtiān jiàn!',
        meaning: 'Tuyệt quá! Chúc ngủ ngon, mai gặp!',
        expression: 'happy', vocab: ['晚安']
      }
    ],
    vocab: [
      { h: '听说', p: 'tīngshuō', v: 'nghe nói' },
      { h: '停', p: 'tíng', v: 'dừng' },
      { h: '停车', p: 'tíngchē', v: 'đỗ xe' },
      { h: '挺', p: 'tǐng', v: 'khá, khá là' },
      { h: '通过', p: 'tōngguò', v: 'thông qua, vượt qua' },
      { h: '通知', p: 'tōngzhī', v: 'thông báo' },
      { h: '推', p: 'tuī', v: 'đẩy' },
      { h: '完', p: 'wán', v: 'xong, hết' },
      { h: '完成', p: 'wánchéng', v: 'hoàn thành' },
      { h: '晚安', p: 'wǎn\'ān', v: 'chúc ngủ ngon' },
      { h: '网', p: 'wǎng', v: 'mạng, lưới' },
      { h: '往', p: 'wǎng', v: 'về phía, hướng' },
      { h: '为', p: 'wèi', v: 'vì, cho' },
      { h: '喂', p: 'wèi', v: 'này, alo' },
      { h: '闻', p: 'wén', v: 'ngửi' },
      { h: '问路', p: 'wènlù', v: 'hỏi đường' },
      { h: '午餐', p: 'wǔcān', v: 'bữa trưa' },
      { h: '午睡', p: 'wǔshuì', v: 'ngủ trưa' },
      { h: '习惯', p: 'xíguàn', v: 'quen, thói quen' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '___吃什么？', options: ['午餐', '午睡', '晚安'], answer: '午餐' },
        { type: 'fill', sentence: '我___今天有新菜。', options: ['听说', '闻', '通知'], answer: '听说' },
        { type: 'fill', sentence: '你___这里的生活了吗？', options: ['习惯', '完成', '通过'], answer: '习惯' },
        { type: 'fill', sentence: '我每天___半小时。', options: ['午睡', '午餐', '晚安'], answer: '午睡' },
        { type: 'fill', sentence: '___，明天见！', options: ['晚安', '喂', '闻'], answer: '晚安' }
      ],
      normal: [
        { type: 'fill', sentence: '你___作业了吗？', options: ['完成', '完', '通过'], answer: '完成' },
        { type: 'fill', sentence: '你___考试了吗？', options: ['通过', '通知', '完成'], answer: '通过' },
        { type: 'fill', sentence: '老师___我下周有活动。', options: ['通知', '听说', '习惯'], answer: '通知' },
        { type: 'fill', sentence: '我们___前走吧。', options: ['往', '为', '网'], answer: '往' },
        { type: 'fill', sentence: '那边有人在___。', options: ['停车', '停', '推'], answer: '停车' },
        { type: 'order', words: ['听说', '我', '有', '今天', '新菜'], answer: '我听说今天有新菜' },
        { type: 'order', words: ['习惯', '你', '了', '这里的生活', '吗'], answer: '你习惯这里的生活了吗' }
      ],
      hard: [
        { type: 'fill', sentence: '我___到很香。', options: ['闻', '听', '看'], answer: '闻' },
        { type: 'fill', sentence: '我想___去书店。', options: ['问路', '往', '推'], answer: '问路' },
        { type: 'fill', sentence: '我___你做这件事。', options: ['为', '往', '网'], answer: '为' },
        { type: 'fill', sentence: '我在___上找到的。', options: ['网', '往', '为'], answer: '网' },
        { type: 'translate', prompt: 'Tớ nghe nói hôm nay có món mới.', answer: '我听说今天有新菜。' },
        { type: 'translate', prompt: 'Cậu quen với cuộc sống ở đây chưa?', answer: '你习惯这里的生活了吗？' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 41: Hành động hằng ngày (11) — 19 từ
  // 洗澡, 下雪, 相信, 想到, 想法, 想起, 向, 像, 信, 行动, 姓, 休假, 选, 养, 要求, 一路顺风, 以为, 意思, 应该
  // ───────────────────────────────────────────────────────────────────────────
  41: {
    id: 41,
    level: 2,
    title: 'Hành động hằng ngày (11)',
    context: 'Mai chuẩn bị về nước nghỉ phép, chia sẻ suy nghĩ và kế hoạch với Tiểu Mỹ.',
    vocabPreview: ['休假', '相信', '想法', '应该', '一路顺风'],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Ký túc xá · Buổi tối', bg: 'dorm-room',
        cast: ['mai', 'xiaomei'],
        text: 'Mai đang chuẩn bị hành lý để về nước nghỉ phép.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: 'Mai，你要休假了？我相信你会很开心！',
        pinyin: 'Mai, nǐ yào xiūjià le? Wǒ xiāngxìn nǐ huì hěn kāixīn!',
        meaning: 'Mai, cậu sắp nghỉ phép rồi à? Tớ tin cậu sẽ rất vui!',
        expression: 'happy', vocab: ['休假', '相信']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '是的！我想到家人就很激动。你有什么想法？',
        pinyin: 'Shì de! Wǒ xiǎngdào jiārén jiù hěn jīdòng. Nǐ yǒu shénme xiǎngfǎ?',
        meaning: 'Đúng vậy! Tớ nghĩ đến gia đình là rất xúc động. Cậu có suy nghĩ gì không?',
        expression: 'happy', vocab: ['想到', '想法']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我觉得你应该多休息。对了，你姓什么来着？我想起来了，你姓阮！',
        pinyin: 'Wǒ juéde nǐ yīnggāi duō xiūxi. Duìle, nǐ xìng shénme láizhe? Wǒ xiǎngqǐlái le, nǐ xìng Ruǎn!',
        meaning: 'Tớ nghĩ cậu nên nghỉ ngơi nhiều. À đúng rồi, cậu họ gì nhỉ? Tớ nhớ ra rồi, cậu họ Nguyễn!',
        expression: 'happy', vocab: ['应该', '姓', '想起']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '哈哈，对！我以为你忘了。',
        pinyin: 'Hāhā, duì! Wǒ yǐwéi nǐ wàng le.',
        meaning: 'Haha, đúng! Tớ tưởng cậu quên rồi.',
        expression: 'happy', vocab: ['以为']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'dorm-room',
        scene: '📍 Ký túc xá · Buổi tối',
        expression: 'curious',
        q: 'Tiểu Mỹ muốn nói "Cậu nên đi tắm trước khi ngủ". Cô ấy nên nói thế nào?',
        options: [
          { text: '你应该洗澡再睡觉。', pinyin: 'Nǐ yīnggāi xǐzǎo zài shuìjiào.', meaning: 'Cậu nên đi tắm rồi hãy ngủ.', correct: true,
            feedback: 'Đúng! 应该 = nên. 洗澡 = tắm. 再 = rồi mới.' },
          { text: '你相信洗澡再睡觉。', pinyin: 'Nǐ xiāngxìn xǐzǎo zài shuìjiào.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '相信 = tin tưởng, không dùng để đưa ra lời khuyên.' },
          { text: '你想到洗澡再睡觉。', pinyin: 'Nǐ xiǎngdào xǐzǎo zài shuìjiào.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '想到 = nghĩ đến, không dùng để đưa ra lời khuyên.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你应该洗澡再睡觉。对了，"休假"是什么意思？',
        pinyin: 'Nǐ yīnggāi xǐzǎo zài shuìjiào. Duìle, "xiūjià" shì shénme yìsi?',
        meaning: 'Cậu nên đi tắm rồi hãy ngủ. À đúng rồi, "nghỉ phép" nghĩa là gì?',
        expression: 'curious', vocab: ['洗澡', '意思']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '意思是放假回家。我选了下周的机票。',
        pinyin: 'Yìsi shì fàngjià huíjiā. Wǒ xuǎn le xià zhōu de jīpiào.',
        meaning: 'Nghĩa là nghỉ phép về nhà. Tớ chọn vé máy bay tuần sau.',
        expression: 'happy', vocab: ['选']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"休假" có nghĩa là gì?',
            options: ['nghỉ phép', 'đi tắm', 'tin tưởng', 'nhớ ra'],
            answer: 0
          },
          {
            q: 'Muốn nói "Tớ tin cậu" thì dùng từ nào?',
            options: ['相信', '想到', '想起', '以为'],
            answer: 0
          },
          {
            q: '"应该" trong câu "你应该多休息" có nghĩa là gì?',
            options: ['nên', 'phải', 'muốn', 'có thể'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Sân bay · Ngày khởi hành', bg: 'street',
        cast: ['mai', 'xiaomei'],
        text: 'Ngày khởi hành, Tiểu Mỹ tiễn Mai ở sân bay.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: 'Mai，外面下雪了！你要小心。',
        pinyin: 'Mai, wàimiàn xiàxuě le! Nǐ yào xiǎoxīn.',
        meaning: 'Mai, ngoài kia tuyết rơi rồi! Cậu phải cẩn thận.',
        expression: 'surprise', vocab: ['下雪']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好的！我向你保证会注意安全。',
        pinyin: 'Hǎo de! Wǒ xiàng nǐ bǎozhèng huì zhùyì ānquán.',
        meaning: 'Được! Tớ hứa với cậu sẽ chú ý an toàn.',
        expression: 'happy', vocab: ['向']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你像我姐姐一样！我要求你每天给我发信息。',
        pinyin: 'Nǐ xiàng wǒ jiějie yíyàng! Wǒ yāoqiú nǐ měitiān gěi wǒ fā xìnxī.',
        meaning: 'Cậu giống chị gái tớ vậy! Tớ yêu cầu cậu mỗi ngày gửi tin nhắn cho tớ.',
        expression: 'happy', vocab: ['像', '要求', '信']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'street',
        scene: '📍 Sân bay · Ngày khởi hành',
        expression: 'happy',
        q: 'Mai muốn nói "Tớ sẽ hành động ngay". Cô ấy nên nói thế nào?',
        options: [
          { text: '我会马上行动。', pinyin: 'Wǒ huì mǎshàng xíngdòng.', meaning: 'Tớ sẽ hành động ngay.', correct: true,
            feedback: 'Đúng! 行动 = hành động. 马上 = ngay lập tức.' },
          { text: '我会马上想法。', pinyin: 'Wǒ huì mǎshàng xiǎngfǎ.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '想法 = suy nghĩ (danh từ), không dùng như động từ.' },
          { text: '我会马上意思。', pinyin: 'Wǒ huì mǎshàng yìsi.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '意思 = ý nghĩa (danh từ), không dùng như động từ.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好的，我会马上行动！对了，你在家养什么宠物？',
        pinyin: 'Hǎo de, wǒ huì mǎshàng xíngdòng! Duìle, nǐ zài jiā yǎng shénme chǒngwù?',
        meaning: 'Được, tớ sẽ hành động ngay! À đúng rồi, cậu ở nhà nuôi thú cưng gì?',
        expression: 'happy', vocab: ['行动', '养']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我养了一只猫。好了，一路顺风！',
        pinyin: 'Wǒ yǎng le yì zhī māo. Hǎo le, yílùshùnfēng!',
        meaning: 'Tớ nuôi một con mèo. Thôi, thượng lộ bình an!',
        expression: 'happy', vocab: ['一路顺风']
      }
    ],
    vocab: [
      { h: '洗澡', p: 'xǐzǎo', v: 'tắm' },
      { h: '下雪', p: 'xiàxuě', v: 'tuyết rơi' },
      { h: '相信', p: 'xiāngxìn', v: 'tin tưởng' },
      { h: '想到', p: 'xiǎngdào', v: 'nghĩ đến' },
      { h: '想法', p: 'xiǎngfǎ', v: 'suy nghĩ, ý tưởng' },
      { h: '想起', p: 'xiǎngqǐ', v: 'nhớ ra' },
      { h: '向', p: 'xiàng', v: 'hướng về, với' },
      { h: '像', p: 'xiàng', v: 'giống như' },
      { h: '信', p: 'xìn', v: 'thư, tin nhắn' },
      { h: '行动', p: 'xíngdòng', v: 'hành động' },
      { h: '姓', p: 'xìng', v: 'họ' },
      { h: '休假', p: 'xiūjià', v: 'nghỉ phép' },
      { h: '选', p: 'xuǎn', v: 'chọn' },
      { h: '养', p: 'yǎng', v: 'nuôi' },
      { h: '要求', p: 'yāoqiú', v: 'yêu cầu' },
      { h: '一路顺风', p: 'yílùshùnfēng', v: 'thượng lộ bình an' },
      { h: '以为', p: 'yǐwéi', v: 'tưởng rằng' },
      { h: '意思', p: 'yìsi', v: 'ý nghĩa' },
      { h: '应该', p: 'yīnggāi', v: 'nên' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '你要___了？', options: ['休假', '洗澡', '下雪'], answer: '休假' },
        { type: 'fill', sentence: '我___你会成功。', options: ['相信', '想到', '以为'], answer: '相信' },
        { type: 'fill', sentence: '你___多休息。', options: ['应该', '要求', '想法'], answer: '应该' },
        { type: 'fill', sentence: '___！祝你旅途愉快！', options: ['一路顺风', '下雪', '行动'], answer: '一路顺风' },
        { type: 'fill', sentence: '我___了一只猫。', options: ['养', '选', '向'], answer: '养' }
      ],
      normal: [
        { type: 'fill', sentence: '我___家人就很激动。', options: ['想到', '想起', '想法'], answer: '想到' },
        { type: 'fill', sentence: '我___来了，你姓阮！', options: ['想起', '想到', '以为'], answer: '想起' },
        { type: 'fill', sentence: '你___我姐姐一样。', options: ['像', '向', '信'], answer: '像' },
        { type: 'fill', sentence: '我___你保证会注意安全。', options: ['向', '像', '信'], answer: '向' },
        { type: 'fill', sentence: '"休假"是什么___？', options: ['意思', '想法', '要求'], answer: '意思' },
        { type: 'order', words: ['相信', '我', '会', '你', '成功'], answer: '我相信你会成功' },
        { type: 'order', words: ['应该', '你', '多', '休息'], answer: '你应该多休息' }
      ],
      hard: [
        { type: 'fill', sentence: '外面___了！', options: ['下雪', '洗澡', '休假'], answer: '下雪' },
        { type: 'fill', sentence: '我___你忘了。', options: ['以为', '相信', '想到'], answer: '以为' },
        { type: 'fill', sentence: '我会马上___。', options: ['行动', '想法', '意思'], answer: '行动' },
        { type: 'fill', sentence: '我___你每天给我发___。', options: ['要求/信', '向/像', '选/养'], answer: '要求/信' },
        { type: 'translate', prompt: 'Tớ tin cậu sẽ rất vui.', answer: '我相信你会很开心。' },
        { type: 'translate', prompt: 'Cậu nên đi tắm rồi hãy ngủ.', answer: '你应该洗澡再睡觉。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 42: Hành động hằng ngày (12) — 23 từ
  // 影响, 愿意, 运动, 占, 站住, 长大, 照顾, 照相, 正是, 只能, 重视, 住院, 装, 走过, 走进, 走开, 租, 组, 组成, 作业, 作用, 做到, 做饭
  // ───────────────────────────────────────────────────────────────────────────
  42: {
    id: 42,
    level: 2,
    title: 'Hành động hằng ngày (12)',
    context: 'Mai và Tiểu Mỹ nói về cuộc sống hằng ngày, chăm sóc gia đình và những kỷ niệm thời thơ ấu.',
    vocabPreview: ['照顾', '长大', '运动', '做饭', '愿意'],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Công viên · Buổi sáng', bg: 'campus',
        cast: ['mai', 'xiaomei'],
        text: 'Mai và Tiểu Mỹ đi dạo trong công viên, nói chuyện về cuộc sống.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: 'Mai，你喜欢运动吗？我每天早上都跑步。',
        pinyin: 'Mai, nǐ xǐhuan yùndòng ma? Wǒ měitiān zǎoshang dōu pǎobù.',
        meaning: 'Mai, cậu thích vận động không? Tớ mỗi sáng đều chạy bộ.',
        expression: 'happy', vocab: ['运动']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我也愿意运动！运动对健康有很大的作用。',
        pinyin: 'Wǒ yě yuànyì yùndòng! Yùndòng duì jiànkāng yǒu hěn dà de zuòyòng.',
        meaning: 'Tớ cũng sẵn lòng vận động! Vận động có tác dụng rất lớn với sức khỏe.',
        expression: 'happy', vocab: ['愿意', '作用']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '对！你小时候长大的地方有公园吗？',
        pinyin: 'Duì! Nǐ xiǎoshíhou zhǎngdà de dìfang yǒu gōngyuán ma?',
        meaning: 'Đúng! Nơi cậu lớn lên hồi nhỏ có công viên không?',
        expression: 'curious', vocab: ['长大']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '有的！我经常在那里照相。对了，你会做饭吗？',
        pinyin: 'Yǒu de! Wǒ jīngcháng zài nàlǐ zhàoxiàng. Duìle, nǐ huì zuòfàn ma?',
        meaning: 'Có! Tớ thường chụp ảnh ở đó. À đúng rồi, cậu biết nấu cơm không?',
        expression: 'happy', vocab: ['照相', '做饭']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'campus',
        scene: '📍 Công viên · Buổi sáng',
        expression: 'focused',
        q: 'Tiểu Mỹ muốn nói "Tớ chỉ có thể nấu mì". Cô ấy nên nói thế nào?',
        options: [
          { text: '我只能做面。', pinyin: 'Wǒ zhǐnéng zuò miàn.', meaning: 'Tớ chỉ có thể nấu mì.', correct: true,
            feedback: 'Đúng! 只能 = chỉ có thể. Dùng khi muốn nói về giới hạn khả năng.' },
          { text: '我愿意做面。', pinyin: 'Wǒ yuànyì zuò miàn.', meaning: 'Tớ sẵn lòng nấu mì.', correct: false,
            feedback: '愿意 = sẵn lòng, muốn, không diễn đạt giới hạn khả năng.' },
          { text: '我作用做面。', pinyin: 'Wǒ zuòyòng zuò miàn.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '作用 = tác dụng (danh từ), không dùng như động từ.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我只能做面，哈哈！妈妈照顾我长大，她做饭很好吃。',
        pinyin: 'Wǒ zhǐnéng zuò miàn, hāhā! Māma zhàogu wǒ zhǎngdà, tā zuòfàn hěn hǎochī.',
        meaning: 'Tớ chỉ có thể nấu mì, haha! Mẹ chăm sóc tớ lớn lên, bà ấy nấu ăn rất ngon.',
        expression: 'happy', vocab: ['只能', '照顾']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '真好！我很重视家人。对了，你奶奶住院了吗？',
        pinyin: 'Zhēn hǎo! Wǒ hěn zhòngshì jiārén. Duìle, nǐ nǎinai zhùyuàn le ma?',
        meaning: 'Tuyệt quá! Tớ rất coi trọng gia đình. À đúng rồi, bà nội cậu nhập viện rồi à?',
        expression: 'curious', vocab: ['重视', '住院']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"运动" có nghĩa là gì?',
            options: ['vận động', 'nấu cơm', 'chụp ảnh', 'chăm sóc'],
            answer: 0
          },
          {
            q: 'Muốn nói "Tớ sẵn lòng giúp cậu" thì dùng từ nào?',
            options: ['愿意', '只能', '重视', '照顾'],
            answer: 0
          },
          {
            q: '"照顾" trong câu "妈妈照顾我" có nghĩa là gì?',
            options: ['chăm sóc', 'chụp ảnh', 'nấu cơm', 'vận động'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Công viên · Tiếp tục', bg: 'campus',
        cast: ['mai', 'xiaomei'],
        text: 'Hai bạn tiếp tục trò chuyện khi đi dạo.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '是的，她住院了。我走进病房看她，她很开心。',
        pinyin: 'Shì de, tā zhùyuàn le. Wǒ zǒujìn bìngfáng kàn tā, tā hěn kāixīn.',
        meaning: 'Đúng vậy, bà ấy nhập viện rồi. Tớ bước vào phòng bệnh thăm bà, bà rất vui.',
        expression: 'happy', vocab: ['走进']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '太好了！对了，你看那个人，站住！他走过我们了。',
        pinyin: 'Tài hǎo le! Duìle, nǐ kàn nàge rén, zhànzhù! Tā zǒuguò wǒmen le.',
        meaning: 'Tuyệt quá! À đúng rồi, cậu nhìn người kia, đứng lại! Anh ấy đi qua chúng ta rồi.',
        expression: 'surprise', vocab: ['站住', '走过']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '哈哈，他走开了。对了，这个公园占了很大的地方。',
        pinyin: 'Hāhā, tā zǒukāi le. Duìle, zhège gōngyuán zhàn le hěn dà de dìfang.',
        meaning: 'Haha, anh ấy đi mất rồi. À đúng rồi, công viên này chiếm diện tích rất lớn.',
        expression: 'happy', vocab: ['走开', '占']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '是的！这个公园是由很多部分组成的。',
        pinyin: 'Shì de! Zhège gōngyuán shì yóu hěn duō bùfen zǔchéng de.',
        meaning: 'Đúng vậy! Công viên này được tạo thành từ nhiều phần.',
        expression: 'focused', vocab: ['组成', '组']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'campus',
        scene: '📍 Công viên',
        expression: 'curious',
        q: 'Tiểu Mỹ muốn nói "Điều này ảnh hưởng đến tớ". Cô ấy nên nói thế nào?',
        options: [
          { text: '这件事影响了我。', pinyin: 'Zhè jiàn shì yǐngxiǎng le wǒ.', meaning: 'Điều này ảnh hưởng đến tớ.', correct: true,
            feedback: 'Đúng! 影响 = ảnh hưởng. Dùng khi nói về tác động của sự việc.' },
          { text: '这件事作用了我。', pinyin: 'Zhè jiàn shì zuòyòng le wǒ.', meaning: '(Không tự nhiên)', correct: false,
            feedback: '作用 thường dùng như danh từ, không dùng như động từ theo cách này.' },
          { text: '这件事重视了我。', pinyin: 'Zhè jiàn shì zhòngshì le wǒ.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '重视 = coi trọng, chủ ngữ phải là người, không phải sự việc.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这件事影响了我很多。对了，你做到作业了吗？',
        pinyin: 'Zhè jiàn shì yǐngxiǎng le wǒ hěn duō. Duìle, nǐ zuòdào zuòyè le ma?',
        meaning: 'Điều này ảnh hưởng đến tớ rất nhiều. À đúng rồi, cậu làm xong bài tập chưa?',
        expression: 'focused', vocab: ['影响', '做到', '作业']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '做到了！正是因为你帮我，我才能完成。',
        pinyin: 'Zuòdào le! Zhèngshì yīnwèi nǐ bāng wǒ, wǒ cái néng wánchéng.',
        meaning: 'Làm xong rồi! Chính là vì cậu giúp tớ, tớ mới có thể hoàn thành.',
        expression: 'happy', vocab: ['正是']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '太好了！对了，你租房子了吗？记得装好行李。',
        pinyin: 'Tài hǎo le! Duìle, nǐ zū fángzi le ma? Jìde zhuānghǎo xíngli.',
        meaning: 'Tuyệt quá! À đúng rồi, cậu thuê nhà chưa? Nhớ đóng gói hành lý nhé.',
        expression: 'happy', vocab: ['租', '装']
      }
    ],
    vocab: [
      { h: '影响', p: 'yǐngxiǎng', v: 'ảnh hưởng' },
      { h: '愿意', p: 'yuànyì', v: 'sẵn lòng, muốn' },
      { h: '运动', p: 'yùndòng', v: 'vận động, thể thao' },
      { h: '占', p: 'zhàn', v: 'chiếm' },
      { h: '站住', p: 'zhànzhù', v: 'đứng lại' },
      { h: '长大', p: 'zhǎngdà', v: 'lớn lên' },
      { h: '照顾', p: 'zhàogu', v: 'chăm sóc' },
      { h: '照相', p: 'zhàoxiàng', v: 'chụp ảnh' },
      { h: '正是', p: 'zhèngshì', v: 'chính là' },
      { h: '只能', p: 'zhǐnéng', v: 'chỉ có thể' },
      { h: '重视', p: 'zhòngshì', v: 'coi trọng' },
      { h: '住院', p: 'zhùyuàn', v: 'nhập viện' },
      { h: '装', p: 'zhuāng', v: 'đóng gói, lắp' },
      { h: '走过', p: 'zǒuguò', v: 'đi qua' },
      { h: '走进', p: 'zǒujìn', v: 'bước vào' },
      { h: '走开', p: 'zǒukāi', v: 'đi khỏi' },
      { h: '租', p: 'zū', v: 'thuê' },
      { h: '组', p: 'zǔ', v: 'nhóm, tổ' },
      { h: '组成', p: 'zǔchéng', v: 'tạo thành' },
      { h: '作业', p: 'zuòyè', v: 'bài tập' },
      { h: '作用', p: 'zuòyòng', v: 'tác dụng' },
      { h: '做到', p: 'zuòdào', v: 'làm được' },
      { h: '做饭', p: 'zuòfàn', v: 'nấu cơm' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '你喜欢___吗？', options: ['运动', '作业', '住院'], answer: '运动' },
        { type: 'fill', sentence: '我___帮助你。', options: ['愿意', '只能', '影响'], answer: '愿意' },
        { type: 'fill', sentence: '妈妈___我长大。', options: ['照顾', '照相', '做饭'], answer: '照顾' },
        { type: 'fill', sentence: '你会___吗？', options: ['做饭', '做到', '作业'], answer: '做饭' },
        { type: 'fill', sentence: '我在公园___。', options: ['照相', '照顾', '住院'], answer: '照相' }
      ],
      normal: [
        { type: 'fill', sentence: '我___做面。', options: ['只能', '愿意', '重视'], answer: '只能' },
        { type: 'fill', sentence: '我很___家人。', options: ['重视', '影响', '组成'], answer: '重视' },
        { type: 'fill', sentence: '奶奶___了。', options: ['住院', '走进', '站住'], answer: '住院' },
        { type: 'fill', sentence: '他___病房看她。', options: ['走进', '走过', '走开'], answer: '走进' },
        { type: 'fill', sentence: '这件事___了我。', options: ['影响', '作用', '重视'], answer: '影响' },
        { type: 'order', words: ['运动', '喜欢', '你', '吗'], answer: '你喜欢运动吗' },
        { type: 'order', words: ['照顾', '妈妈', '我', '长大'], answer: '妈妈照顾我长大' }
      ],
      hard: [
        { type: 'fill', sentence: '公园___了很大的地方。', options: ['占', '组', '装'], answer: '占' },
        { type: 'fill', sentence: '公园是由很多部分___的。', options: ['组成', '组', '作用'], answer: '组成' },
        { type: 'fill', sentence: '___因为你帮我，我才能完成。', options: ['正是', '只能', '愿意'], answer: '正是' },
        { type: 'fill', sentence: '你___房子了吗？记得___好行李。', options: ['租/装', '占/组', '走/站'], answer: '租/装' },
        { type: 'translate', prompt: 'Tớ sẵn lòng giúp cậu.', answer: '我愿意帮助你。' },
        { type: 'translate', prompt: 'Mẹ chăm sóc tớ lớn lên.', answer: '妈妈照顾我长大。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 43: Từ chức năng & liên từ (1) — 20 từ
  // 啊, 爱情, 班长, 办法, 办公室, 笔记, 必须, 边, 不但, 不过, 不太, 不要, 不一定, 不一会儿, 部分, 才, 草地, 层, 差不多, 场
  // ───────────────────────────────────────────────────────────────────────────
  43: {
    id: 43,
    level: 2,
    title: 'Từ chức năng & liên từ (1)',
    context: 'Mai và Tiểu Mỹ trò chuyện về cuộc sống học đường, lớp trưởng và những quy định trong trường.',
    vocabPreview: ['必须', '不但', '办法', '办公室', '班长'],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Lớp học · Buổi sáng', bg: 'classroom',
        cast: ['mai', 'xiaomei'],
        text: 'Mai và Tiểu Mỹ đang nói chuyện trước giờ học.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: 'Mai啊，你知道班长是谁吗？',
        pinyin: 'Mai a, nǐ zhīdào bānzhǎng shì shéi ma?',
        meaning: 'Mai này, cậu biết lớp trưởng là ai không?',
        expression: 'curious', vocab: ['啊', '班长']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '不太清楚。不过我听说他很负责任。',
        pinyin: 'Bú tài qīngchu. Búguò wǒ tīngshuō tā hěn fùzérèn.',
        meaning: 'Không rõ lắm. Nhưng mà tớ nghe nói anh ấy rất có trách nhiệm.',
        expression: null, vocab: ['不太', '不过']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '是的！他不但学习好，而且很热心帮助同学。',
        pinyin: 'Shì de! Tā búdàn xuéxí hǎo, érqiě hěn rèxīn bāngzhù tóngxué.',
        meaning: 'Đúng vậy! Anh ấy không những học giỏi, mà còn rất nhiệt tình giúp đỡ bạn bè.',
        expression: 'happy', vocab: ['不但']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '真好！对了，我们必须去办公室交作业。',
        pinyin: 'Zhēn hǎo! Duìle, wǒmen bìxū qù bàngōngshì jiāo zuòyè.',
        meaning: 'Tuyệt quá! À đúng rồi, chúng ta phải đến văn phòng nộp bài tập.',
        expression: 'focused', vocab: ['必须', '办公室']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'classroom',
        scene: '📍 Lớp học · Buổi sáng',
        expression: 'curious',
        q: 'Tiểu Mỹ muốn nói "Tớ không nhất định đi". Cô ấy nên nói thế nào?',
        options: [
          { text: '我不一定去。', pinyin: 'Wǒ bù yīdìng qù.', meaning: 'Tớ không nhất định đi.', correct: true,
            feedback: 'Đúng! 不一定 = không nhất định, chưa chắc. Dùng khi không chắc chắn về điều gì.' },
          { text: '我不要去。', pinyin: 'Wǒ bú yào qù.', meaning: 'Tớ không muốn đi.', correct: false,
            feedback: '不要 = không muốn, đừng. Nghĩa khác với "không nhất định".' },
          { text: '我必须去。', pinyin: 'Wǒ bìxū qù.', meaning: 'Tớ phải đi.', correct: false,
            feedback: '必须 = phải, bắt buộc. Nghĩa ngược lại.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我不一定去，因为我还没做完笔记。',
        pinyin: 'Wǒ bù yīdìng qù, yīnwèi wǒ hái méi zuòwán bǐjì.',
        meaning: 'Tớ không nhất định đi, vì tớ chưa làm xong ghi chú.',
        expression: 'confused', vocab: ['不一定', '笔记']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '不要担心！我有办法帮你。',
        pinyin: 'Bú yào dānxīn! Wǒ yǒu bànfǎ bāng nǐ.',
        meaning: 'Đừng lo! Tớ có cách giúp cậu.',
        expression: 'happy', vocab: ['不要', '办法']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"必须" có nghĩa là gì?',
            options: ['phải, bắt buộc', 'không nhất định', 'không muốn', 'có thể'],
            answer: 0
          },
          {
            q: 'Muốn nói "Anh ấy không những học giỏi" thì dùng từ nào?',
            options: ['不但', '不过', '不太', '不要'],
            answer: 0
          },
          {
            q: '"办公室" trong câu "去办公室" có nghĩa là gì?',
            options: ['văn phòng', 'lớp học', 'thư viện', 'căn-tin'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Sân trường · Giờ nghỉ', bg: 'campus',
        cast: ['mai', 'xiaomei'],
        text: 'Giờ nghỉ, hai bạn ra sân trường.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '你看，草地上有很多人！不一会儿就满了。',
        pinyin: 'Nǐ kàn, cǎodì shàng yǒu hěn duō rén! Bù yīhuǐr jiù mǎn le.',
        meaning: 'Cậu nhìn kìa, trên bãi cỏ có rất nhiều người! Một lát là đầy rồi.',
        expression: 'surprise', vocab: ['草地', '不一会儿']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '是啊！这个操场差不多有两个足球场那么大。',
        pinyin: 'Shì a! Zhège cāochǎng chàbuduō yǒu liǎng gè zúqiúchǎng nàme dà.',
        meaning: 'Ừ nhỉ! Sân vận động này gần bằng hai sân bóng đá.',
        expression: 'happy', vocab: ['差不多', '场']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '对！图书馆在第三层，我们去那边吧。',
        pinyin: 'Duì! Túshūguǎn zài dì sān céng, wǒmen qù nàbiān ba.',
        meaning: 'Đúng! Thư viện ở tầng ba, chúng ta đi bên đó đi.',
        expression: 'focused', vocab: ['层']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'campus',
        scene: '📍 Sân trường · Giờ nghỉ',
        expression: 'curious',
        q: 'Tiểu Mỹ muốn nói "Một phần bài tập đã xong". Cô ấy nên nói thế nào?',
        options: [
          { text: '一部分作业做完了。', pinyin: 'Yí bùfen zuòyè zuòwán le.', meaning: 'Một phần bài tập đã xong.', correct: true,
            feedback: 'Đúng! 部分 = phần, bộ phận. 一部分 = một phần.' },
          { text: '一边作业做完了。', pinyin: 'Yì biān zuòyè zuòwán le.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '边 = bên, cạnh, không dùng để chỉ "phần".' },
          { text: '一层作业做完了。', pinyin: 'Yì céng zuòyè zuòwán le.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '层 = tầng, lớp, không dùng để chỉ "phần bài tập".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '好！一部分作业做完了，我才能休息。',
        pinyin: 'Hǎo! Yí bùfen zuòyè zuòwán le, wǒ cái néng xiūxi.',
        meaning: 'Được! Một phần bài tập xong rồi, tớ mới có thể nghỉ ngơi.',
        expression: 'happy', vocab: ['部分', '才']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '对了，你喜欢看爱情电影吗？图书馆边有电影院。',
        pinyin: 'Duìle, nǐ xǐhuan kàn àiqíng diànyǐng ma? Túshūguǎn biān yǒu diànyǐngyuàn.',
        meaning: 'À đúng rồi, cậu thích xem phim tình cảm không? Bên cạnh thư viện có rạp chiếu phim.',
        expression: 'curious', vocab: ['爱情', '边']
      }
    ],
    vocab: [
      { h: '啊', p: 'a', v: 'à, này (ngữ khí từ)' },
      { h: '爱情', p: 'àiqíng', v: 'tình yêu' },
      { h: '班长', p: 'bānzhǎng', v: 'lớp trưởng' },
      { h: '办法', p: 'bànfǎ', v: 'cách, phương pháp' },
      { h: '办公室', p: 'bàngōngshì', v: 'văn phòng' },
      { h: '笔记', p: 'bǐjì', v: 'ghi chú' },
      { h: '必须', p: 'bìxū', v: 'phải, bắt buộc' },
      { h: '边', p: 'biān', v: 'bên, cạnh' },
      { h: '不但', p: 'búdàn', v: 'không những' },
      { h: '不过', p: 'búguò', v: 'nhưng mà, tuy nhiên' },
      { h: '不太', p: 'bú tài', v: 'không lắm' },
      { h: '不要', p: 'bú yào', v: 'đừng, không muốn' },
      { h: '不一定', p: 'bù yīdìng', v: 'không nhất định' },
      { h: '不一会儿', p: 'bù yīhuǐr', v: 'một lát, chốc lát' },
      { h: '部分', p: 'bùfen', v: 'phần, bộ phận' },
      { h: '才', p: 'cái', v: 'mới (chỉ sau khi...)' },
      { h: '草地', p: 'cǎodì', v: 'bãi cỏ' },
      { h: '层', p: 'céng', v: 'tầng, lớp' },
      { h: '差不多', p: 'chàbuduō', v: 'gần như, khoảng' },
      { h: '场', p: 'chǎng', v: 'sân, trường (lượng từ)' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我们___去办公室。', options: ['必须', '不一定', '不要'], answer: '必须' },
        { type: 'fill', sentence: '他___学习好，而且很热心。', options: ['不但', '不过', '不太'], answer: '不但' },
        { type: 'fill', sentence: '我有___帮你。', options: ['办法', '办公室', '班长'], answer: '办法' },
        { type: 'fill', sentence: '___担心！', options: ['不要', '必须', '不但'], answer: '不要' },
        { type: 'fill', sentence: '图书馆在第三___。', options: ['层', '边', '场'], answer: '层' }
      ],
      normal: [
        { type: 'fill', sentence: '我___清楚。', options: ['不太', '不要', '不但'], answer: '不太' },
        { type: 'fill', sentence: '我___去，因为还没做完。', options: ['不一定', '必须', '不要'], answer: '不一定' },
        { type: 'fill', sentence: '___就满了。', options: ['不一会儿', '差不多', '部分'], answer: '不一会儿' },
        { type: 'fill', sentence: '这个操场___有两个足球场那么大。', options: ['差不多', '不一会儿', '部分'], answer: '差不多' },
        { type: 'fill', sentence: '一___作业做完了。', options: ['部分', '层', '边'], answer: '部分' },
        { type: 'order', words: ['必须', '我们', '去', '办公室'], answer: '我们必须去办公室' },
        { type: 'order', words: ['不但', '他', '学习好', '而且', '很热心'], answer: '他不但学习好而且很热心' }
      ],
      hard: [
        { type: 'fill', sentence: '做完了，我___能休息。', options: ['才', '就', '都'], answer: '才' },
        { type: 'fill', sentence: '___上有很多人。', options: ['草地', '层', '场'], answer: '草地' },
        { type: 'fill', sentence: '你喜欢看___电影吗？', options: ['爱情', '办法', '笔记'], answer: '爱情' },
        { type: 'fill', sentence: '图书馆___有电影院。', options: ['边', '层', '场'], answer: '边' },
        { type: 'translate', prompt: 'Anh ấy không những học giỏi, mà còn rất nhiệt tình.', answer: '他不但学习好，而且很热心。' },
        { type: 'translate', prompt: 'Tớ không nhất định đi.', answer: '我不一定去。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 44: Từ chức năng & liên từ (2) — 20 từ
  // 成绩, 词典, 从小, 大部分, 大人, 大声, 大小, 大衣, 单位, 但, 但是, 到处, 道路, 地铁, 的话, 店, 动物, 动物园, 短信, 队
  // ───────────────────────────────────────────────────────────────────────────
  44: {
    id: 44,
    level: 2,
    title: 'Từ chức năng & liên từ (2)',
    context: 'Mai và Tiểu Mỹ đi chơi cuối tuần, thăm vườn thú và mua sắm.',
    vocabPreview: ['动物园', '但是', '到处', '地铁', '成绩'],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Ký túc xá · Buổi sáng', bg: 'dorm-room',
        cast: ['mai', 'xiaomei'],
        text: 'Cuối tuần, Mai và Tiểu Mỹ lên kế hoạch đi chơi.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: 'Mai，我们去动物园吧！我从小就喜欢动物。',
        pinyin: 'Mai, wǒmen qù dòngwùyuán ba! Wǒ cóngxiǎo jiù xǐhuan dòngwù.',
        meaning: 'Mai, chúng ta đi vườn thú đi! Tớ từ nhỏ đã thích động vật.',
        expression: 'happy', vocab: ['动物园', '从小', '动物']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好啊！但是我们怎么去？坐地铁吗？',
        pinyin: 'Hǎo a! Dànshì wǒmen zěnme qù? Zuò dìtiě ma?',
        meaning: 'Được thôi! Nhưng mà chúng ta đi thế nào? Đi tàu điện ngầm à?',
        expression: 'curious', vocab: ['但是', '地铁']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '对！地铁很方便。但，我们要先吃早餐。',
        pinyin: 'Duì! Dìtiě hěn fāngbiàn. Dàn, wǒmen yào xiān chī zǎocān.',
        meaning: 'Đúng! Tàu điện ngầm rất tiện. Nhưng, chúng ta phải ăn sáng trước.',
        expression: null, vocab: ['但']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好的！对了，你的成绩怎么样？',
        pinyin: 'Hǎo de! Duìle, nǐ de chéngjì zěnmeyàng?',
        meaning: 'Được! À đúng rồi, thành tích của cậu thế nào?',
        expression: 'curious', vocab: ['成绩']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'dorm-room',
        scene: '📍 Ký túc xá · Buổi sáng',
        expression: 'happy',
        q: 'Tiểu Mỹ muốn nói "Nếu cậu muốn đi thì nói với tớ". Cô ấy nên nói thế nào?',
        options: [
          { text: '你想去的话，告诉我。', pinyin: 'Nǐ xiǎng qù de huà, gàosu wǒ.', meaning: 'Nếu cậu muốn đi thì nói với tớ.', correct: true,
            feedback: 'Đúng! 的话 = nếu...thì. Dùng sau điều kiện để tạo câu điều kiện.' },
          { text: '你想去但是，告诉我。', pinyin: 'Nǐ xiǎng qù dànshì, gàosu wǒ.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '但是 = nhưng mà, không dùng để tạo câu điều kiện.' },
          { text: '你想去到处，告诉我。', pinyin: 'Nǐ xiǎng qù dàochù, gàosu wǒ.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '到处 = khắp nơi, không dùng để tạo câu điều kiện.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '成绩还不错！你想去的话，我们现在出发。',
        pinyin: 'Chéngjì hái búcuò! Nǐ xiǎng qù de huà, wǒmen xiànzài chūfā.',
        meaning: 'Thành tích còn khá! Nếu cậu muốn đi thì chúng ta xuất phát ngay.',
        expression: 'happy', vocab: ['的话']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好！我穿大衣，外面冷。',
        pinyin: 'Hǎo! Wǒ chuān dàyī, wàimiàn lěng.',
        meaning: 'Được! Tớ mặc áo khoác, ngoài kia lạnh.',
        expression: null, vocab: ['大衣']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"动物园" có nghĩa là gì?',
            options: ['vườn thú', 'công viên', 'thư viện', 'sân vận động'],
            answer: 0
          },
          {
            q: 'Muốn nói "Nhưng mà" thì dùng từ nào?',
            options: ['但是', '的话', '到处', '从小'],
            answer: 0
          },
          {
            q: '"地铁" trong câu "坐地铁" có nghĩa là gì?',
            options: ['tàu điện ngầm', 'xe buýt', 'taxi', 'xe đạp'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Vườn thú · Buổi trưa', bg: 'campus',
        cast: ['mai', 'xiaomei'],
        text: 'Hai bạn đến vườn thú, đi dạo khắp nơi.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '哇，到处都是人！大部分是大人带小孩来的。',
        pinyin: 'Wa, dàochù dōu shì rén! Dà bùfen shì dàrén dài xiǎohái lái de.',
        meaning: 'Oa, khắp nơi đều là người! Phần lớn là người lớn dẫn trẻ con đến.',
        expression: 'surprise', vocab: ['到处', '大部分', '大人']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '是啊！你看那个店，卖词典和书。',
        pinyin: 'Shì a! Nǐ kàn nàge diàn, mài cídiǎn hé shū.',
        meaning: 'Ừ nhỉ! Cậu nhìn cửa hàng kia, bán từ điển và sách.',
        expression: 'happy', vocab: ['店', '词典']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我想买一本！对了，这条道路很宽。',
        pinyin: 'Wǒ xiǎng mǎi yì běn! Duìle, zhè tiáo dàolù hěn kuān.',
        meaning: 'Tớ muốn mua một cuốn! À đúng rồi, con đường này rất rộng.',
        expression: 'happy', vocab: ['道路']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'campus',
        scene: '📍 Vườn thú · Buổi trưa',
        expression: 'curious',
        q: 'Tiểu Mỹ muốn nói "Cậu nói to lên một chút". Cô ấy nên nói thế nào?',
        options: [
          { text: '你大声一点。', pinyin: 'Nǐ dàshēng yìdiǎn.', meaning: 'Cậu nói to lên một chút.', correct: true,
            feedback: 'Đúng! 大声 = to tiếng, lớn tiếng. 一点 = một chút.' },
          { text: '你大小一点。', pinyin: 'Nǐ dàxiǎo yìdiǎn.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '大小 = kích cỡ, không dùng để chỉ âm lượng.' },
          { text: '你大衣一点。', pinyin: 'Nǐ dàyī yìdiǎn.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '大衣 = áo khoác, không liên quan.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你大声一点，我听不清！这件衣服大小合适吗？',
        pinyin: 'Nǐ dàshēng yìdiǎn, wǒ tīng bù qīng! Zhè jiàn yīfu dàxiǎo héshì ma?',
        meaning: 'Cậu nói to lên, tớ nghe không rõ! Cái áo này kích cỡ có vừa không?',
        expression: 'curious', vocab: ['大声', '大小']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '合适！对了，你在哪个单位工作？我给你发短信。',
        pinyin: 'Héshì! Duìle, nǐ zài nǎge dānwèi gōngzuò? Wǒ gěi nǐ fā duǎnxìn.',
        meaning: 'Vừa! À đúng rồi, cậu làm việc ở đơn vị nào? Tớ gửi tin nhắn cho cậu.',
        expression: 'happy', vocab: ['单位', '短信']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我在学校。看，那边有一队人在排队！',
        pinyin: 'Wǒ zài xuéxiào. Kàn, nàbiān yǒu yí duì rén zài páiduì!',
        meaning: 'Tớ ở trường. Nhìn kìa, bên kia có một đội người đang xếp hàng!',
        expression: 'surprise', vocab: ['队']
      }
    ],
    vocab: [
      { h: '成绩', p: 'chéngjì', v: 'thành tích, điểm số' },
      { h: '词典', p: 'cídiǎn', v: 'từ điển' },
      { h: '从小', p: 'cóngxiǎo', v: 'từ nhỏ' },
      { h: '大部分', p: 'dà bùfen', v: 'phần lớn' },
      { h: '大人', p: 'dàrén', v: 'người lớn' },
      { h: '大声', p: 'dàshēng', v: 'to tiếng' },
      { h: '大小', p: 'dàxiǎo', v: 'kích cỡ' },
      { h: '大衣', p: 'dàyī', v: 'áo khoác' },
      { h: '单位', p: 'dānwèi', v: 'đơn vị, cơ quan' },
      { h: '但', p: 'dàn', v: 'nhưng' },
      { h: '但是', p: 'dànshì', v: 'nhưng mà' },
      { h: '到处', p: 'dàochù', v: 'khắp nơi' },
      { h: '道路', p: 'dàolù', v: 'con đường' },
      { h: '地铁', p: 'dìtiě', v: 'tàu điện ngầm' },
      { h: '的话', p: 'de huà', v: 'nếu...thì' },
      { h: '店', p: 'diàn', v: 'cửa hàng' },
      { h: '动物', p: 'dòngwù', v: 'động vật' },
      { h: '动物园', p: 'dòngwùyuán', v: 'vườn thú' },
      { h: '短信', p: 'duǎnxìn', v: 'tin nhắn' },
      { h: '队', p: 'duì', v: 'đội, hàng' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我们去___吧！', options: ['动物园', '词典', '单位'], answer: '动物园' },
        { type: 'fill', sentence: '___我们怎么去？', options: ['但是', '的话', '到处'], answer: '但是' },
        { type: 'fill', sentence: '我___就喜欢动物。', options: ['从小', '大部分', '到处'], answer: '从小' },
        { type: 'fill', sentence: '坐___很方便。', options: ['地铁', '道路', '店'], answer: '地铁' },
        { type: 'fill', sentence: '你的___怎么样？', options: ['成绩', '大小', '短信'], answer: '成绩' }
      ],
      normal: [
        { type: 'fill', sentence: '你想去___，告诉我。', options: ['的话', '但是', '到处'], answer: '的话' },
        { type: 'fill', sentence: '___都是人！', options: ['到处', '大部分', '从小'], answer: '到处' },
        { type: 'fill', sentence: '___是大人带小孩来的。', options: ['大部分', '到处', '但是'], answer: '大部分' },
        { type: 'fill', sentence: '那个___卖词典。', options: ['店', '队', '单位'], answer: '店' },
        { type: 'fill', sentence: '我给你发___。', options: ['短信', '词典', '成绩'], answer: '短信' },
        { type: 'order', words: ['动物园', '去', '我们', '吧'], answer: '我们去动物园吧' },
        { type: 'order', words: ['但是', '怎么', '我们', '去'], answer: '但是我们怎么去' }
      ],
      hard: [
        { type: 'fill', sentence: '你___一点，我听不清。', options: ['大声', '大小', '大衣'], answer: '大声' },
        { type: 'fill', sentence: '这件衣服___合适吗？', options: ['大小', '大声', '大人'], answer: '大小' },
        { type: 'fill', sentence: '你在哪个___工作？', options: ['单位', '店', '队'], answer: '单位' },
        { type: 'fill', sentence: '那边有一___人在排队。', options: ['队', '店', '单位'], answer: '队' },
        { type: 'translate', prompt: 'Tớ từ nhỏ đã thích động vật.', answer: '我从小就喜欢动物。' },
        { type: 'translate', prompt: 'Nếu cậu muốn đi thì nói với tớ.', answer: '你想去的话，告诉我。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 45: Từ chức năng & liên từ (3) — 20 từ
  // 队长, 而且, 方法, 方向, 刚, 个子, 更, 公里, 故事, 顾客, 观点, 广场, 广告, 海边, 好处, 好人, 好事, 忽然, 画儿, 画家
  // ───────────────────────────────────────────────────────────────────────────
  45: {
    id: 45,
    level: 2,
    title: 'Từ chức năng & liên từ (3)',
    context: 'Mai và Tiểu Mỹ đi dạo ở quảng trường, nói về nghệ thuật và cuộc sống.',
    vocabPreview: ['而且', '更', '方法', '广场', '故事'],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Quảng trường · Buổi chiều', bg: 'street',
        cast: ['mai', 'xiaomei'],
        text: 'Mai và Tiểu Mỹ đi dạo ở quảng trường thành phố.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: 'Mai，这个广场真大！而且很漂亮。',
        pinyin: 'Mai, zhège guǎngchǎng zhēn dà! Érqiě hěn piàoliang.',
        meaning: 'Mai, quảng trường này thật lớn! Mà còn rất đẹp.',
        expression: 'happy', vocab: ['广场', '而且']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '是啊！我刚来的时候，不知道方向。',
        pinyin: 'Shì a! Wǒ gāng lái de shíhou, bù zhīdào fāngxiàng.',
        meaning: 'Ừ nhỉ! Lúc tớ mới đến, không biết phương hướng.',
        expression: 'curious', vocab: ['刚', '方向']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '哈哈，我有一个好方法：看广告牌！',
        pinyin: 'Hāhā, wǒ yǒu yí gè hǎo fāngfǎ: kàn guǎnggào pái!',
        meaning: 'Haha, tớ có một cách hay: nhìn biển quảng cáo!',
        expression: 'happy', vocab: ['方法', '广告']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好主意！对了，你看那个画家，他在画画儿。',
        pinyin: 'Hǎo zhǔyi! Duìle, nǐ kàn nàge huàjiā, tā zài huà huàr.',
        meaning: 'Ý hay! À đúng rồi, cậu nhìn họa sĩ kia, anh ấy đang vẽ tranh.',
        expression: 'surprise', vocab: ['画家', '画儿']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'street',
        scene: '📍 Quảng trường · Buổi chiều',
        expression: 'curious',
        q: 'Tiểu Mỹ muốn nói "Tranh này còn đẹp hơn". Cô ấy nên nói thế nào?',
        options: [
          { text: '这幅画儿更漂亮。', pinyin: 'Zhè fú huàr gèng piàoliang.', meaning: 'Tranh này còn đẹp hơn.', correct: true,
            feedback: 'Đúng! 更 = còn, hơn (so sánh). Dùng để nhấn mạnh mức độ cao hơn.' },
          { text: '这幅画儿而且漂亮。', pinyin: 'Zhè fú huàr érqiě piàoliang.', meaning: '(Không tự nhiên)', correct: false,
            feedback: '而且 = mà còn, hơn nữa, dùng để nối hai ý, không dùng để so sánh.' },
          { text: '这幅画儿刚漂亮。', pinyin: 'Zhè fú huàr gāng piàoliang.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '刚 = vừa mới, không dùng để so sánh.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这幅画儿更漂亮！画家的个子很高。',
        pinyin: 'Zhè fú huàr gèng piàoliang! Huàjiā de gèzi hěn gāo.',
        meaning: 'Tranh này còn đẹp hơn! Họa sĩ cao lắm.',
        expression: 'happy', vocab: ['更', '个子']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '是的！他给顾客讲故事，很有意思。',
        pinyin: 'Shì de! Tā gěi gùkè jiǎng gùshi, hěn yǒu yìsi.',
        meaning: 'Đúng vậy! Anh ấy kể chuyện cho khách hàng, rất thú vị.',
        expression: 'happy', vocab: ['顾客', '故事']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"而且" có nghĩa là gì?',
            options: ['mà còn, hơn nữa', 'vừa mới', 'còn hơn', 'phương hướng'],
            answer: 0
          },
          {
            q: 'Muốn nói "Tranh này còn đẹp hơn" thì dùng từ nào?',
            options: ['更', '而且', '刚', '方法'],
            answer: 0
          },
          {
            q: '"广场" trong câu "这个广场真大" có nghĩa là gì?',
            options: ['quảng trường', 'quảng cáo', 'phương hướng', 'cửa hàng'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Bờ biển · Tiếp tục', bg: 'campus',
        cast: ['mai', 'xiaomei'],
        text: 'Hai bạn đi đến bờ biển gần đó.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '哇，海边真美！从这里到那边大概有两公里。',
        pinyin: 'Wa, hǎibiān zhēn měi! Cóng zhèlǐ dào nàbiān dàgài yǒu liǎng gōnglǐ.',
        meaning: 'Oa, bờ biển đẹp thật! Từ đây đến bên kia khoảng hai cây số.',
        expression: 'happy', vocab: ['海边', '公里']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '是啊！忽然下雨了！我们快跑！',
        pinyin: 'Shì a! Hūrán xià yǔ le! Wǒmen kuài pǎo!',
        meaning: 'Ừ nhỉ! Đột nhiên mưa rồi! Chúng ta chạy nhanh!',
        expression: 'surprise', vocab: ['忽然']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好！运动有很多好处。对了，你认识那个队长吗？',
        pinyin: 'Hǎo! Yùndòng yǒu hěn duō hǎochu. Duìle, nǐ rènshi nàge duìzhǎng ma?',
        meaning: 'Được! Vận động có nhiều lợi ích. À đúng rồi, cậu biết đội trưởng kia không?',
        expression: 'curious', vocab: ['好处', '队长']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'campus',
        scene: '📍 Bờ biển',
        expression: 'happy',
        q: 'Tiểu Mỹ muốn nói "Anh ấy là người tốt". Cô ấy nên nói thế nào?',
        options: [
          { text: '他是好人。', pinyin: 'Tā shì hǎorén.', meaning: 'Anh ấy là người tốt.', correct: true,
            feedback: 'Đúng! 好人 = người tốt. Cấu trúc đơn giản: 是 + danh từ.' },
          { text: '他是好事。', pinyin: 'Tā shì hǎoshì.', meaning: 'Anh ấy là việc tốt.', correct: false,
            feedback: '好事 = việc tốt, không dùng để chỉ người.' },
          { text: '他是好处。', pinyin: 'Tā shì hǎochu.', meaning: 'Anh ấy là lợi ích.', correct: false,
            feedback: '好处 = lợi ích, không dùng để chỉ người.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '认识！他是好人，做了很多好事。',
        pinyin: 'Rènshi! Tā shì hǎorén, zuò le hěn duō hǎoshì.',
        meaning: 'Biết! Anh ấy là người tốt, làm nhiều việc tốt.',
        expression: 'happy', vocab: ['好人', '好事']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '真好！我的观点是：帮助别人是最重要的。',
        pinyin: 'Zhēn hǎo! Wǒ de guāndiǎn shì: bāngzhù biérén shì zuì zhòngyào de.',
        meaning: 'Tuyệt quá! Quan điểm của tớ là: giúp đỡ người khác là quan trọng nhất.',
        expression: 'happy', vocab: ['观点']
      }
    ],
    vocab: [
      { h: '队长', p: 'duìzhǎng', v: 'đội trưởng' },
      { h: '而且', p: 'érqiě', v: 'mà còn, hơn nữa' },
      { h: '方法', p: 'fāngfǎ', v: 'phương pháp, cách' },
      { h: '方向', p: 'fāngxiàng', v: 'phương hướng' },
      { h: '刚', p: 'gāng', v: 'vừa mới' },
      { h: '个子', p: 'gèzi', v: 'chiều cao, dáng người' },
      { h: '更', p: 'gèng', v: 'còn, hơn (so sánh)' },
      { h: '公里', p: 'gōnglǐ', v: 'cây số, km' },
      { h: '故事', p: 'gùshi', v: 'câu chuyện' },
      { h: '顾客', p: 'gùkè', v: 'khách hàng' },
      { h: '观点', p: 'guāndiǎn', v: 'quan điểm' },
      { h: '广场', p: 'guǎngchǎng', v: 'quảng trường' },
      { h: '广告', p: 'guǎnggào', v: 'quảng cáo' },
      { h: '海边', p: 'hǎibiān', v: 'bờ biển' },
      { h: '好处', p: 'hǎochu', v: 'lợi ích' },
      { h: '好人', p: 'hǎorén', v: 'người tốt' },
      { h: '好事', p: 'hǎoshì', v: 'việc tốt' },
      { h: '忽然', p: 'hūrán', v: 'đột nhiên' },
      { h: '画儿', p: 'huàr', v: 'tranh, bức vẽ' },
      { h: '画家', p: 'huàjiā', v: 'họa sĩ' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '这个广场真大，___很漂亮。', options: ['而且', '更', '刚'], answer: '而且' },
        { type: 'fill', sentence: '这幅画儿___漂亮。', options: ['更', '而且', '刚'], answer: '更' },
        { type: 'fill', sentence: '我___来的时候不知道方向。', options: ['刚', '更', '而且'], answer: '刚' },
        { type: 'fill', sentence: '我有一个好___。', options: ['方法', '方向', '广场'], answer: '方法' },
        { type: 'fill', sentence: '他给___讲故事。', options: ['顾客', '画家', '队长'], answer: '顾客' }
      ],
      normal: [
        { type: 'fill', sentence: '那个___在画画儿。', options: ['画家', '画儿', '顾客'], answer: '画家' },
        { type: 'fill', sentence: '从这里到那边有两___。', options: ['公里', '方向', '广场'], answer: '公里' },
        { type: 'fill', sentence: '___下雨了！', options: ['忽然', '刚', '更'], answer: '忽然' },
        { type: 'fill', sentence: '运动有很多___。', options: ['好处', '好人', '好事'], answer: '好处' },
        { type: 'fill', sentence: '他是___，做了很多好事。', options: ['好人', '好处', '好事'], answer: '好人' },
        { type: 'order', words: ['而且', '广场', '这个', '真大', '很漂亮'], answer: '这个广场真大而且很漂亮' },
        { type: 'order', words: ['更', '这幅', '画儿', '漂亮'], answer: '这幅画儿更漂亮' }
      ],
      hard: [
        { type: 'fill', sentence: '我的___是帮助别人最重要。', options: ['观点', '故事', '方法'], answer: '观点' },
        { type: 'fill', sentence: '画家的___很高。', options: ['个子', '公里', '广告'], answer: '个子' },
        { type: 'fill', sentence: '你认识那个___吗？', options: ['队长', '顾客', '画家'], answer: '队长' },
        { type: 'fill', sentence: '___真美！', options: ['海边', '广场', '广告'], answer: '海边' },
        { type: 'translate', prompt: 'Quảng trường này thật lớn, mà còn rất đẹp.', answer: '这个广场真大，而且很漂亮。' },
        { type: 'translate', prompt: 'Đột nhiên mưa rồi!', answer: '忽然下雨了！' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 46: Từ chức năng & liên từ (4) — 20 từ
  // 坏处, 坏人, 或, 或者, 鸡, 级, 见过, 交通, 角, 角度, 饺子, 节目, 节日, 就要, 看法, 科学家, 客人, 空气, 快餐, 快点儿
  // ───────────────────────────────────────────────────────────────────────────
  46: {
    id: 46,
    level: 2,
    title: 'Từ chức năng & liên từ (4)',
    context: 'Mai và Tiểu Mỹ chuẩn bị đón khách, nói về ẩm thực và các ngày lễ.',
    vocabPreview: ['或者', '节日', '客人', '快点儿', '看法'],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Ký túc xá · Buổi chiều', bg: 'dorm-room',
        cast: ['mai', 'xiaomei'],
        text: 'Mai và Tiểu Mỹ đang chuẩn bị đón khách đến chơi.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: 'Mai，客人就要来了！快点儿准备！',
        pinyin: 'Mai, kèrén jiùyào lái le! Kuàidiǎnr zhǔnbèi!',
        meaning: 'Mai, khách sắp đến rồi! Nhanh lên chuẩn bị!',
        expression: 'surprise', vocab: ['客人', '就要', '快点儿']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好的！我们做饺子或者买快餐？',
        pinyin: 'Hǎo de! Wǒmen zuò jiǎozi huòzhě mǎi kuàicān?',
        meaning: 'Được! Chúng ta làm sủi cảo hay mua đồ ăn nhanh?',
        expression: 'curious', vocab: ['饺子', '或者', '快餐']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '做饺子吧！或买点鸡肉也行。',
        pinyin: 'Zuò jiǎozi ba! Huò mǎi diǎn jīròu yě xíng.',
        meaning: 'Làm sủi cảo đi! Hoặc mua chút thịt gà cũng được.',
        expression: 'happy', vocab: ['或', '鸡']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好主意！对了，今天是什么节日？',
        pinyin: 'Hǎo zhǔyi! Duìle, jīntiān shì shénme jiérì?',
        meaning: 'Ý hay! À đúng rồi, hôm nay là ngày lễ gì?',
        expression: 'curious', vocab: ['节日']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'dorm-room',
        scene: '📍 Ký túc xá · Buổi chiều',
        expression: 'happy',
        q: 'Tiểu Mỹ muốn nói "Cậu có ý kiến gì không?". Cô ấy nên nói thế nào?',
        options: [
          { text: '你有什么看法？', pinyin: 'Nǐ yǒu shénme kànfǎ?', meaning: 'Cậu có ý kiến gì không?', correct: true,
            feedback: 'Đúng! 看法 = ý kiến, quan điểm. Dùng khi hỏi ý kiến của ai đó.' },
          { text: '你有什么角度？', pinyin: 'Nǐ yǒu shénme jiǎodù?', meaning: 'Cậu có góc độ gì?', correct: false,
            feedback: '角度 = góc độ, không dùng để hỏi ý kiến trực tiếp.' },
          { text: '你有什么节目？', pinyin: 'Nǐ yǒu shénme jiémù?', meaning: 'Cậu có chương trình gì?', correct: false,
            feedback: '节目 = chương trình (TV), không phải ý kiến.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '是中秋节！你有什么看法？我们看节目吧。',
        pinyin: 'Shì Zhōngqiūjié! Nǐ yǒu shénme kànfǎ? Wǒmen kàn jiémù ba.',
        meaning: 'Là Tết Trung Thu! Cậu có ý kiến gì? Chúng ta xem chương trình đi.',
        expression: 'happy', vocab: ['看法', '节目']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好啊！对了，你见过那个科学家吗？他是我们的客人。',
        pinyin: 'Hǎo a! Duìle, nǐ jiànguò nàge kēxuéjiā ma? Tā shì wǒmen de kèrén.',
        meaning: 'Được thôi! À đúng rồi, cậu gặp nhà khoa học kia chưa? Anh ấy là khách của chúng ta.',
        expression: 'curious', vocab: ['见过', '科学家']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"或者" có nghĩa là gì?',
            options: ['hoặc, hay', 'và', 'nhưng', 'vì'],
            answer: 0
          },
          {
            q: 'Muốn nói "Khách sắp đến rồi" thì dùng từ nào?',
            options: ['就要', '或者', '快点儿', '看法'],
            answer: 0
          },
          {
            q: '"节日" trong câu "今天是什么节日" có nghĩa là gì?',
            options: ['ngày lễ', 'chương trình', 'ý kiến', 'góc độ'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Phòng khách · Tiếp tục', bg: 'dorm-room',
        cast: ['mai', 'xiaomei'],
        text: 'Hai bạn tiếp tục chuẩn bị.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这里的空气真好！从这个角度看，风景很美。',
        pinyin: 'Zhèlǐ de kōngqì zhēn hǎo! Cóng zhège jiǎodù kàn, fēngjǐng hěn měi.',
        meaning: 'Không khí ở đây thật tốt! Từ góc độ này nhìn, phong cảnh rất đẹp.',
        expression: 'happy', vocab: ['空气', '角度']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '是啊！对了，吸烟有很多坏处，坏人才吸烟。',
        pinyin: 'Shì a! Duìle, xīyān yǒu hěn duō huàichu, huàirén cái xīyān.',
        meaning: 'Ừ nhỉ! À đúng rồi, hút thuốc có nhiều tác hại, người xấu mới hút thuốc.',
        expression: 'focused', vocab: ['坏处', '坏人']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '哈哈，说得对！对了，你学到几级了？',
        pinyin: 'Hāhā, shuō de duì! Duìle, nǐ xuédào jǐ jí le?',
        meaning: 'Haha, nói đúng! À đúng rồi, cậu học đến cấp mấy rồi?',
        expression: 'happy', vocab: ['级']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'dorm-room',
        scene: '📍 Phòng khách',
        expression: 'curious',
        q: 'Tiểu Mỹ muốn nói "Góc này rất đẹp". Cô ấy nên nói thế nào?',
        options: [
          { text: '这个角很漂亮。', pinyin: 'Zhège jiǎo hěn piàoliang.', meaning: 'Góc này rất đẹp.', correct: true,
            feedback: 'Đúng! 角 = góc (vật lý). Dùng khi nói về góc của vật thể.' },
          { text: '这个角度很漂亮。', pinyin: 'Zhège jiǎodù hěn piàoliang.', meaning: 'Góc độ này rất đẹp.', correct: false,
            feedback: '角度 = góc độ (trừu tượng), thường dùng cho quan điểm hoặc góc nhìn.' },
          { text: '这个级很漂亮。', pinyin: 'Zhège jí hěn piàoliang.', meaning: '(Không đúng ngữ pháp)', correct: false,
            feedback: '级 = cấp, bậc, không dùng để chỉ góc.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我学到二级了。这个角很漂亮，我们拍照吧！',
        pinyin: 'Wǒ xuédào èr jí le. Zhège jiǎo hěn piàoliang, wǒmen pāizhào ba!',
        meaning: 'Tớ học đến cấp hai rồi. Góc này rất đẹp, chúng ta chụp ảnh đi!',
        expression: 'happy', vocab: ['角']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好！对了，交通方便吗？客人怎么来？',
        pinyin: 'Hǎo! Duìle, jiāotōng fāngbiàn ma? Kèrén zěnme lái?',
        meaning: 'Được! À đúng rồi, giao thông có tiện không? Khách đến bằng gì?',
        expression: 'curious', vocab: ['交通']
      }
    ],
    vocab: [
      { h: '坏处', p: 'huàichu', v: 'tác hại, điểm xấu' },
      { h: '坏人', p: 'huàirén', v: 'người xấu' },
      { h: '或', p: 'huò', v: 'hoặc' },
      { h: '或者', p: 'huòzhě', v: 'hoặc, hay' },
      { h: '鸡', p: 'jī', v: 'gà' },
      { h: '级', p: 'jí', v: 'cấp, bậc' },
      { h: '见过', p: 'jiànguò', v: 'đã gặp' },
      { h: '交通', p: 'jiāotōng', v: 'giao thông' },
      { h: '角', p: 'jiǎo', v: 'góc' },
      { h: '角度', p: 'jiǎodù', v: 'góc độ' },
      { h: '饺子', p: 'jiǎozi', v: 'sủi cảo' },
      { h: '节目', p: 'jiémù', v: 'chương trình' },
      { h: '节日', p: 'jiérì', v: 'ngày lễ' },
      { h: '就要', p: 'jiùyào', v: 'sắp, sẽ' },
      { h: '看法', p: 'kànfǎ', v: 'ý kiến, quan điểm' },
      { h: '科学家', p: 'kēxuéjiā', v: 'nhà khoa học' },
      { h: '客人', p: 'kèrén', v: 'khách' },
      { h: '空气', p: 'kōngqì', v: 'không khí' },
      { h: '快餐', p: 'kuàicān', v: 'đồ ăn nhanh' },
      { h: '快点儿', p: 'kuàidiǎnr', v: 'nhanh lên' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '___就要来了！', options: ['客人', '科学家', '坏人'], answer: '客人' },
        { type: 'fill', sentence: '我们做饺子___买快餐？', options: ['或者', '或', '就要'], answer: '或者' },
        { type: 'fill', sentence: '今天是什么___？', options: ['节日', '节目', '级'], answer: '节日' },
        { type: 'fill', sentence: '___准备！', options: ['快点儿', '就要', '或者'], answer: '快点儿' },
        { type: 'fill', sentence: '你有什么___？', options: ['看法', '角度', '角'], answer: '看法' }
      ],
      normal: [
        { type: 'fill', sentence: '你___那个人吗？', options: ['见过', '看法', '交通'], answer: '见过' },
        { type: 'fill', sentence: '这里的___真好。', options: ['空气', '角度', '级'], answer: '空气' },
        { type: 'fill', sentence: '吸烟有很多___。', options: ['坏处', '坏人', '好处'], answer: '坏处' },
        { type: 'fill', sentence: '你学到几___了？', options: ['级', '角', '节'], answer: '级' },
        { type: 'fill', sentence: '我们看___吧。', options: ['节目', '节日', '看法'], answer: '节目' },
        { type: 'order', words: ['就要', '客人', '来了'], answer: '客人就要来了' },
        { type: 'order', words: ['或者', '做饺子', '我们', '买快餐'], answer: '我们做饺子或者买快餐' }
      ],
      hard: [
        { type: 'fill', sentence: '从这个___看，风景很美。', options: ['角度', '角', '级'], answer: '角度' },
        { type: 'fill', sentence: '这个___很漂亮。', options: ['角', '角度', '级'], answer: '角' },
        { type: 'fill', sentence: '___方便吗？', options: ['交通', '空气', '快餐'], answer: '交通' },
        { type: 'fill', sentence: '他是___。', options: ['科学家', '坏人', '客人'], answer: '科学家' },
        { type: 'translate', prompt: 'Khách sắp đến rồi!', answer: '客人就要来了！' },
        { type: 'translate', prompt: 'Cậu có ý kiến gì không?', answer: '你有什么看法？' }
      ]
    }
  }
});
