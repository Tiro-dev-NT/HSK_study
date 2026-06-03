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
    objectives: [
      'Nêu ví dụ bằng 比如 / 比如说',
      'So sánh “A không bằng B” bằng 不如',
      'Diễn đạt “biến thành / trở thành” bằng 变成 · 成为',
      'Nói về đăng ký, tham gia một chương trình (报名 · 参加 · 出国)'
    ],
    grammarNotes: [
      { point: '比如 / 比如说 — nêu ví dụ',
        explain: 'Đặt 比如 hoặc 比如说 ở đầu phần ví dụ để minh hoạ cho ý vừa nói.',
        examples: [
          { zh: '比如说，我们可以先去办公室问问。', py: 'Bǐrúshuō, wǒmen kěyǐ xiān qù bàngōngshì wènwen.', vi: 'Ví dụ như, chúng ta có thể đến văn phòng hỏi trước.' },
          { zh: '比如，我们需要办什么手续？', py: 'Bǐrú, wǒmen xūyào bàn shénme shǒuxù?', vi: 'Ví dụ, chúng ta cần làm thủ tục gì?' }
        ] },
      { point: '不如 — A 不如 B (A không bằng B)',
        explain: 'Dùng 不如 để so sánh A kém hơn B, hoặc “chi bằng…” khi đề xuất phương án hay hơn.',
        examples: [
          { zh: '不如我们一起准备吧。', py: 'Bùrú wǒmen yìqǐ zhǔnbèi ba.', vi: 'Chi bằng chúng ta cùng chuẩn bị đi.' }
        ] },
      { point: '变成 / 成为 — biến thành, trở thành',
        explain: '变成 nhấn sự thay đổi sang trạng thái mới; 成为 + danh từ nhấn “trở thành (ai/cái gì)”.',
        examples: [
          { zh: '报名人数变成这么多了！', py: 'Bàomíng rénshù biànchéng zhème duō le!', vi: 'Số người đăng ký trở thành nhiều thế rồi!' },
          { zh: '我想成为翻译。', py: 'Wǒ xiǎng chéngwéi fānyì.', vi: 'Em muốn trở thành phiên dịch.' }
        ] }
    ],
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
      { h: '办', p: 'bàn', v: 'làm, xử lý (thủ tục)', e: 'to do' },
      { h: '帮助', p: 'bāngzhù', v: 'giúp đỡ', e: 'assistance' },
      { h: '报名', p: 'bàomíng', v: 'đăng ký', e: 'to sign up' },
      { h: '背', p: 'bèi', v: 'học thuộc lòng; mang trên lưng', e: 'to carry on the back, back (body)' },
      { h: '比如', p: 'bǐrú', v: 'ví dụ', e: 'for example' },
      { h: '比如说', p: 'bǐrúshuō', v: 'ví dụ như', e: 'for example' },
      { h: '变', p: 'biàn', v: 'thay đổi, biến đổi', e: 'to change' },
      { h: '变成', p: 'biànchéng', v: 'biến thành, trở thành', e: 'to change into' },
      { h: '不如', p: 'bùrú', v: 'chi bằng, không bằng', e: 'not equal to' },
      { h: '参观', p: 'cānguān', v: 'tham quan', e: 'to look around' },
      { h: '参加', p: 'cānjiā', v: 'tham gia', e: 'to participate' },
      { h: '查', p: 'chá', v: 'tra cứu, kiểm tra', e: 'to check, to investigate, to look up' },
      { h: '超过', p: 'chāoguò', v: 'vượt quá', e: 'to surpass' },
      { h: '称', p: 'chēng', v: 'gọi là, xưng', e: 'to fit' },
      { h: '成', p: 'chéng', v: 'thành, trở thành', e: 'to succeed, to become, accomplished' },
      { h: '成为', p: 'chéngwéi', v: 'trở thành', e: 'to become' },
      { h: '出发', p: 'chūfā', v: 'xuất phát', e: 'to set off' },
      { h: '出国', p: 'chūguó', v: 'ra nước ngoài', e: 'to go abroad' },
      { h: '出口', p: 'chūkǒu', v: 'cửa ra, lối ra', e: 'an exit' }
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
    objectives: [
      'Dùng 得 (děi) để nói “phải / cần” làm gì',
      'Dùng bổ ngữ trình độ V得… để miêu tả mức độ (吹得我很冷)',
      'Nói về phép tính đơn giản bằng 等于',
      'Kể về ra ngoài, đi làm thêm (出门 · 打工 · 打算)'
    ],
    grammarNotes: [
      { point: '得 (děi) — phải, cần',
        explain: '得 đọc “děi”, đặt trước động từ để diễn đạt sự cần thiết “phải/cần”. Khác với trợ từ 得 (de) của bổ ngữ.',
        examples: [
          { zh: '你们当服务员，得学很多东西吧？', py: 'Nǐmen dāng fúwùyuán, děi xué hěn duō dōngxi ba?', vi: 'Các em làm phục vụ, phải học nhiều thứ nhỉ?' }
        ] },
      { point: 'V + 得 + bổ ngữ trình độ',
        explain: 'Động từ + 得 + tính từ/cụm để nói động tác đạt mức độ nào hoặc gây ra kết quả gì.',
        examples: [
          { zh: '风吹得我很冷。', py: 'Fēng chuī de wǒ hěn lěng.', vi: 'Gió thổi làm tớ lạnh cóng.' }
        ] },
      { point: '等于 / 等到 — bằng với / đợi đến',
        explain: '等于 nối hai vế “bằng nhau”; 等到 + mốc thời gian nghĩa “đợi đến lúc…”.',
        examples: [
          { zh: '一加一等于二。', py: 'Yī jiā yī děngyú èr.', vi: 'Một cộng một bằng hai.' },
          { zh: '等到周末，我再来。', py: 'Děngdào zhōumò, wǒ zài lái.', vi: 'Đợi đến cuối tuần, tôi sẽ lại đến.' }
        ] }
    ],
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
      { h: '出门', p: 'chūmén', v: 'ra ngoài, ra khỏi nhà', e: 'to go out' },
      { h: '出生', p: 'chūshēng', v: 'sinh ra, ra đời', e: 'to be born' },
      { h: '出现', p: 'chūxiàn', v: 'xuất hiện', e: 'to appear' },
      { h: '出院', p: 'chūyuàn', v: 'xuất viện', e: 'to leave hospital' },
      { h: '出租', p: 'chūzū', v: 'cho thuê; taxi', e: 'to rent' },
      { h: '吹', p: 'chuī', v: 'thổi', e: 'to blow' },
      { h: '答应', p: 'dāying', v: 'đồng ý, nhận lời', e: 'to answer' },
      { h: '打工', p: 'dǎgōng', v: 'làm thêm, đi làm', e: 'to work a temporary or casual job' },
      { h: '打算', p: 'dǎsuàn', v: 'dự định, kế hoạch', e: 'to plan' },
      { h: '打印', p: 'dǎyìn', v: 'in ấn', e: 'to affix a seal' },
      { h: '带', p: 'dài', v: 'mang theo, dẫn', e: 'band' },
      { h: '带来', p: 'dàilái', v: 'mang đến, đem lại', e: 'to bring' },
      { h: '当', p: 'dāng', v: 'làm, đảm nhiệm', e: 'dong' },
      { h: '倒', p: 'dào', v: 'rót, đổ', e: 'to fall' },
      { h: '道', p: 'dào', v: 'đường, con đường', e: 'road' },
      { h: '得', p: 'děi', v: 'phải, cần', e: 'to obtain' },
      { h: '得出', p: 'déchū', v: 'rút ra (kết luận)', e: 'to obtain (a result)' },
      { h: '等到', p: 'děngdào', v: 'đợi đến', e: 'to wait until' },
      { h: '等于', p: 'děngyú', v: 'bằng với', e: 'to equal' }
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
    objectives: [
      'Hỏi/đáp mức độ làm việc bằng bổ ngữ trình độ V得 (复习得怎么样)',
      'Dùng bổ ngữ xu hướng 起来 · 下 (捡起来 · 放下)',
      'Diễn đạt “hiểu / phát hiện / cảm thấy” (懂 · 发现 · 感觉)',
      'Đếm thư từ bằng lượng từ 封'
    ],
    grammarNotes: [
      { point: 'V + 得 + 怎么样 — hỏi mức độ',
        explain: 'Dùng 得 sau động từ rồi thêm 怎么样 / tính từ để hỏi hoặc nhận xét động tác làm tốt/kém ra sao.',
        examples: [
          { zh: '你复习得怎么样了？', py: 'Nǐ fùxí de zěnmeyàng le?', vi: 'Cậu ôn bài thế nào rồi?' }
        ] },
      { point: 'Bổ ngữ xu hướng 起来 / 下 / 下来',
        explain: 'Thêm 起来, 下, 下来 sau động từ để chỉ hướng và kết quả của động tác (lên/xuống/buông).',
        examples: [
          { zh: '我的笔掉了，我捡起来。', py: 'Wǒ de bǐ diào le, wǒ jiǎn qǐlái.', vi: 'Bút tớ rơi rồi, tớ nhặt lên.' },
          { zh: '我学会了放下手机。', py: 'Wǒ xuéhuì le fàngxià shǒujī.', vi: 'Tớ học được cách đặt điện thoại xuống.' }
        ] },
      { point: '发现 / 感觉 / 感到 — phát hiện, cảm thấy',
        explain: 'Các động từ này thường đứng trước một mệnh đề làm tân ngữ (phát hiện/cảm thấy rằng…).',
        examples: [
          { zh: '我发现这个其实很简单。', py: 'Wǒ fāxiàn zhège qíshí hěn jiǎndān.', vi: 'Tớ phát hiện cái này thực ra rất đơn giản.' }
        ] }
    ],
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
      { h: '点头', p: 'diǎntóu', v: 'gật đầu', e: 'to nod' },
      { h: '掉', p: 'diào', v: 'rơi, rớt', e: 'to fall' },
      { h: '懂', p: 'dǒng', v: 'hiểu', e: 'to understand' },
      { h: '懂得', p: 'dǒngde', v: 'hiểu được, biết', e: 'to understand' },
      { h: '度', p: 'dù', v: 'độ (nhiệt độ)', e: 'to pass' },
      { h: '对话', p: 'duìhuà', v: 'hội thoại, đối thoại', e: 'to talk (with sb)' },
      { h: '对面', p: 'duìmiàn', v: 'đối diện', e: 'opposite' },
      { h: '发', p: 'fā', v: 'gửi, phát', e: 'to send out' },
      { h: '发现', p: 'fāxiàn', v: 'phát hiện', e: 'to notice' },
      { h: '放下', p: 'fàngxià', v: 'đặt xuống, buông bỏ', e: 'to lay down' },
      { h: '放心', p: 'fàngxīn', v: 'yên tâm', e: 'to feel relieved' },
      { h: '分开', p: 'fēnkāi', v: 'chia tay, tách ra', e: 'to separate' },
      { h: '封', p: 'fēng', v: 'bức (thư); phong bì', e: 'classifier for letters, to seal' },
      { h: '服务', p: 'fúwù', v: 'phục vụ, dịch vụ', e: 'to serve' },
      { h: '复习', p: 'fùxí', v: 'ôn tập', e: 'to review' },
      { h: '改', p: 'gǎi', v: 'sửa, thay đổi', e: 'to change' },
      { h: '改变', p: 'gǎibiàn', v: 'thay đổi', e: 'to change' },
      { h: '感到', p: 'gǎndào', v: 'cảm thấy', e: 'to feel' },
      { h: '感觉', p: 'gǎnjué', v: 'cảm giác, cảm thấy', e: 'feeling' }
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
    objectives: [
      'Phỏng đoán bằng 好像 (hình như, dường như)',
      'Dùng bổ ngữ xu hướng 过来 / 过去 (过来坐)',
      'Làm dịu hành động bằng V + 一下 (检查一下)',
      'Nói về dịp lễ Tết và lời chúc (过年 · 一路平安)'
    ],
    grammarNotes: [
      { point: '好像 — hình như, dường như',
        explain: '好像 đặt trước vị ngữ để diễn đạt phỏng đoán không chắc chắn.',
        examples: [
          { zh: '我好像很久没见到家人了。', py: 'Wǒ hǎoxiàng hěn jiǔ méi jiàndào jiārén le.', vi: 'Tớ hình như lâu rồi chưa gặp gia đình.' }
        ] },
      { point: '过来 / 过去 — bổ ngữ xu hướng',
        explain: '过来 chỉ hướng lại gần người nói; 过去 chỉ hướng ra xa.',
        examples: [
          { zh: '老师，过来坐！', py: 'Lǎoshī, guòlái zuò!', vi: 'Thầy ơi, lại đây ngồi!' }
        ] },
      { point: 'V + 一下 — làm nhẹ / thử một chút',
        explain: 'Thêm 一下 sau động từ để làm dịu ngữ khí, nghĩa “làm một chút / thử”.',
        examples: [
          { zh: '你帮我检查一下好吗？', py: 'Nǐ bāng wǒ jiǎnchá yíxià hǎo ma?', vi: 'Cậu giúp tớ kiểm tra một chút được không?' }
        ] }
    ],
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
      { h: '感谢', p: 'gǎnxiè', v: 'cảm ơn, cảm tạ', e: 'thanks' },
      { h: '干杯', p: 'gānbēi', v: 'nâng cốc, cạn ly', e: 'to drink a toast' },
      { h: '干活儿', p: 'gànhuór', v: 'làm việc', e: 'erhua variant of 干活' },
      { h: '够', p: 'gòu', v: 'đủ', e: 'enough (sufficient)' },
      { h: '关机', p: 'guānjī', v: 'tắt máy', e: 'to turn off (a machine or device)' },
      { h: '关心', p: 'guānxīn', v: 'quan tâm', e: 'to be concerned about' },
      { h: '过来', p: 'guòlái', v: 'đi lại, đến đây', e: 'to come over' },
      { h: '过年', p: 'guònián', v: 'ăn Tết, đón năm mới', e: 'to celebrate the Chinese New Year' },
      { h: '喊', p: 'hǎn', v: 'gọi, hét', e: 'to yell' },
      { h: '好像', p: 'hǎoxiàng', v: 'hình như, dường như', e: 'as if' },
      { h: '画', p: 'huà', v: 'vẽ', e: 'to draw' },
      { h: '换', p: 'huàn', v: 'đổi, thay', e: 'to exchange' },
      { h: '欢迎', p: 'huānyíng', v: 'chào mừng, hoan nghênh', e: 'to welcome' },
      { h: '回国', p: 'huíguó', v: 'về nước', e: 'to return to one\\\'s home country' },
      { h: '活动', p: 'huódòng', v: 'hoạt động', e: 'to exercise' },
      { h: '计划', p: 'jìhuà', v: 'kế hoạch', e: 'plan' },
      { h: '加油', p: 'jiāyóu', v: 'cố lên, thêm dầu', e: 'to add oil' },
      { h: '检查', p: 'jiǎnchá', v: 'kiểm tra', e: 'inspection' },
      { h: '见到', p: 'jiàndào', v: 'gặp, nhìn thấy', e: 'to see' }
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
    objectives: [
      'Nối ý theo trình tự bằng 接下来 / 接着',
      'Dùng 叫作 để giới thiệu tên gọi',
      'Diễn đạt “đưa / nộp cho ai” bằng V + 给 (交给老师)',
      'Nói về lên lớp, kết bạn (讲 · 交朋友 · 接受)'
    ],
    grammarNotes: [
      { point: '接下来 / 接着 — tiếp theo',
        explain: 'Dùng ở đầu câu để nối các bước/sự việc theo trình tự thời gian.',
        examples: [
          { zh: '接下来，我要讲一个故事。', py: 'Jiēxiàlái, wǒ yào jiǎng yí gè gùshi.', vi: 'Tiếp theo, tôi sẽ kể một câu chuyện.' }
        ] },
      { point: '叫作 — gọi là',
        explain: '叫作 + tên dùng để nêu cách gọi / tên của sự vật.',
        examples: [
          { zh: '这叫作“故事教学法”。', py: 'Zhè jiàozuò “gùshi jiàoxué fǎ”.', vi: 'Đây gọi là “phương pháp dạy học bằng truyện”.' }
        ] },
      { point: 'V + 给 + người — đưa / giao cho',
        explain: 'Sau một số động từ như 交, 送, 还 thêm 给 + đối tượng để chỉ người nhận.',
        examples: [
          { zh: '我帮你交作业给老师。', py: 'Wǒ bāng nǐ jiāo zuòyè gěi lǎoshī.', vi: 'Tớ giúp cậu nộp bài cho thầy.' }
        ] }
    ],
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
      { h: '讲', p: 'jiǎng', v: 'nói, kể, giảng', e: 'to speak' },
      { h: '讲话', p: 'jiǎnghuà', v: 'nói chuyện, bài giảng', e: 'a speech' },
      { h: '交', p: 'jiāo', v: 'nộp, giao', e: 'to hand over' },
      { h: '交给', p: 'jiāogěi', v: 'giao cho, đưa cho', e: 'to give' },
      { h: '交朋友', p: 'jiāo péngyou', v: 'kết bạn', e: 'to make friends' },
      { h: '叫作', p: 'jiàozuò', v: 'gọi là', e: 'to call' },
      { h: '教学', p: 'jiàoxué', v: 'dạy học, giảng dạy', e: 'to teach (as a professor)' },
      { h: '教育', p: 'jiàoyù', v: 'giáo dục', e: 'to educate' },
      { h: '接', p: 'jiē', v: 'đón, nhận', e: 'to receive' },
      { h: '接到', p: 'jiēdào', v: 'nhận được', e: 'to receive (letter etc)' },
      { h: '接受', p: 'jiēshòu', v: 'chấp nhận, tiếp nhận', e: 'to accept' },
      { h: '接下来', p: 'jiēxiàlái', v: 'tiếp theo', e: 'to accept' },
      { h: '接着', p: 'jiēzhe', v: 'tiếp theo, tiếp tục', e: 'to catch and hold on' },
      { h: '节', p: 'jié', v: 'tiết (học), đốt', e: 'see 节骨眼' },
      { h: '借', p: 'jiè', v: 'mượn, cho mượn', e: 'to lend' },
      { h: '进入', p: 'jìnrù', v: 'bước vào, tiến vào', e: 'to enter' },
      { h: '进行', p: 'jìnxíng', v: 'tiến hành', e: 'to advance' },
      { h: '经过', p: 'jīngguò', v: 'đi qua, trải qua', e: 'to pass' },
      { h: '举', p: 'jǔ', v: 'giơ, nâng', e: 'to lift, to raise, to cite as example' }
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
    objectives: [
      'Nói khoảng cách bằng A 离 B + 远/近 (学校离我家很远)',
      'Nói xuất xứ bằng 来自',
      'Chuyển ý bằng 可是',
      'Nêu ví dụ bằng 例如'
    ],
    grammarNotes: [
      { point: '离 — biểu thị khoảng cách',
        explain: 'Cấu trúc “A 离 B + 远/近 / số đo” cho biết A cách B bao xa.',
        examples: [
          { zh: '学校离我家很远。', py: 'Xuéxiào lí wǒ jiā hěn yuǎn.', vi: 'Trường cách nhà tớ rất xa.' }
        ] },
      { point: '来自 — đến từ',
        explain: '来自 + nơi chốn nghĩa “đến từ nơi nào”, trang trọng hơn 从…来.',
        examples: [
          { zh: '我来自越南。', py: 'Wǒ láizì Yuènán.', vi: 'Em đến từ Việt Nam.' }
        ] },
      { point: '可是 — nhưng',
        explain: '可是 nối hai vế đối lập, đặt đầu vế sau, tương tự 但是.',
        examples: [
          { zh: '可是我的发音不太好。', py: 'Kěshì wǒ de fāyīn bú tài hǎo.', vi: 'Nhưng phát âm của tớ không tốt lắm.' }
        ] }
    ],
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
      { h: '举手', p: 'jǔshǒu', v: 'giơ tay', e: 'to raise a hand' },
      { h: '举行', p: 'jǔxíng', v: 'tổ chức, cử hành', e: 'to hold (a meeting, ceremony etc)' },
      { h: '卡', p: 'kǎ', v: 'kẹt, thẻ', e: 'to stop' },
      { h: '开机', p: 'kāijī', v: 'bật máy, khởi động', e: 'to start an engine' },
      { h: '开学', p: 'kāixué', v: 'khai giảng', e: 'foundation of a University or College' },
      { h: '靠', p: 'kào', v: 'dựa vào, lại gần', e: 'to lean against or on' },
      { h: '可能', p: 'kěnéng', v: 'có thể, có lẽ', e: 'might (happen)' },
      { h: '可是', p: 'kěshì', v: 'nhưng, nhưng mà', e: 'but' },
      { h: '可以', p: 'kěyǐ', v: 'có thể, được', e: 'can' },
      { h: '刻', p: 'kè', v: 'khắc (15 phút)', e: 'quarter (hour)' },
      { h: '哭', p: 'kū', v: 'khóc', e: 'to cry' },
      { h: '来自', p: 'láizì', v: 'đến từ', e: 'to come from (a place)' },
      { h: '离', p: 'lí', v: 'cách (khoảng cách)', e: 'mythical beast (archaic)' },
      { h: '离开', p: 'líkāi', v: 'rời khỏi', e: 'to depart' },
      { h: '例如', p: 'lìrú', v: 'ví dụ', e: 'for example' },
      { h: '练', p: 'liàn', v: 'luyện', e: 'to practice' },
      { h: '练习', p: 'liànxí', v: 'luyện tập', e: 'to practice' },
      { h: '流', p: 'liú', v: 'chảy', e: 'to flow' },
      { h: '流行', p: 'liúxíng', v: 'thịnh hành, phổ biến', e: 'to spread' }
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
    objectives: [
      'Diễn đạt khả năng bằng 能够',
      'Dùng lượng từ 只 (con vật) và 碗 (bát)',
      'Dùng bổ ngữ kết quả 到 (碰到 · 拿到)',
      'Bàn kế hoạch du lịch, leo núi (旅游 · 爬山 · 排队)'
    ],
    grammarNotes: [
      { point: '能够 — có thể',
        explain: '能够 đặt trước động từ chỉ khả năng / điều kiện thực hiện, trang trọng hơn 能.',
        examples: [
          { zh: '我们能够早点出发。', py: 'Wǒmen nénggòu zǎodiǎn chūfā.', vi: 'Chúng ta có thể xuất phát sớm.' }
        ] },
      { point: 'Lượng từ 只 / 碗',
        explain: '只 đếm phần lớn động vật; 碗 đếm thứ đựng trong bát.',
        examples: [
          { zh: '你看那只猫！', py: 'Nǐ kàn nà zhī māo!', vi: 'Cậu nhìn con mèo kia!' },
          { zh: '吃碗面再走。', py: 'Chī wǎn miàn zài zǒu.', vi: 'Ăn bát mì rồi đi.' }
        ] },
      { point: 'Bổ ngữ kết quả 到',
        explain: 'Thêm 到 sau động từ để chỉ động tác đạt được kết quả (gặp được, lấy được).',
        examples: [
          { zh: '我昨天碰到它了。', py: 'Wǒ zuótiān pèngdào tā le.', vi: 'Tớ hôm qua gặp nó rồi.' },
          { zh: '我拿到钱包了。', py: 'Wǒ nádào qiánbāo le.', vi: 'Tớ lấy được ví rồi.' }
        ] }
    ],
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
      { h: '留', p: 'liú', v: 'ở lại, giữ lại', e: 'to stay, to remain, to keep' },
      { h: '留下', p: 'liúxià', v: 'ở lại, để lại', e: 'to leave behind' },
      { h: '旅行', p: 'lǚxíng', v: 'du lịch, đi chơi', e: 'to travel' },
      { h: '旅游', p: 'lǚyóu', v: 'du lịch', e: 'trip' },
      { h: '卖', p: 'mài', v: 'bán', e: 'to sell' },
      { h: '满意', p: 'mǎnyì', v: 'hài lòng', e: 'satisfied' },
      { h: '猫', p: 'māo', v: 'mèo', e: 'cat' },
      { h: '面', p: 'miàn', v: 'mì, mặt', e: 'face' },
      { h: '拿出', p: 'náchū', v: 'lấy ra', e: 'to take out' },
      { h: '拿到', p: 'nádào', v: 'lấy được, nhận được', e: 'to get' },
      { h: '能够', p: 'nénggòu', v: 'có thể', e: 'to be capable of' },
      { h: '弄', p: 'nòng', v: 'làm, chuẩn bị', e: 'lane' },
      { h: '爬', p: 'pá', v: 'leo, bò', e: 'to crawl' },
      { h: '爬山', p: 'páshān', v: 'leo núi', e: 'to climb a mountain' },
      { h: '怕', p: 'pà', v: 'sợ', e: 'to fear, to be afraid of' },
      { h: '排', p: 'pái', v: 'xếp, hàng', e: 'a row' },
      { h: '排队', p: 'páiduì', v: 'xếp hàng', e: 'to line up' },
      { h: '碰', p: 'pèng', v: 'chạm, va', e: 'to touch, to bump into, to meet by chance' },
      { h: '碰到', p: 'pèngdào', v: 'gặp, chạm phải', e: 'to come across' }
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
    objectives: [
      'Đặt câu điều kiện bằng 如果…(就)…',
      'Diễn đạt “sắp xảy ra” bằng 快要…了',
      'Dùng 让 để sai khiến (让它吃饱)',
      'Bàn về thực tập và lời khuyên (实习 · 应该 · 商量)'
    ],
    grammarNotes: [
      { point: '如果…(就)… — nếu…thì…',
        explain: 'Vế 如果 nêu điều kiện, vế sau thường có 就 nêu kết quả.',
        examples: [
          { zh: '如果顺利，我可以学到很多。', py: 'Rúguǒ shùnlì, wǒ kěyǐ xuédào hěn duō.', vi: 'Nếu thuận lợi, tớ có thể học được nhiều.' }
        ] },
      { point: '快要…了 — sắp (sửa)',
        explain: 'Khung “快要 + V + 了” diễn đạt việc sắp xảy ra.',
        examples: [
          { zh: '飞机快要起飞了！', py: 'Fēijī kuàiyào qǐfēi le!', vi: 'Máy bay sắp cất cánh rồi!' }
        ] },
      { point: '让 — bảo, khiến, để cho',
        explain: '让 + đối tượng + động từ: bảo / để cho ai làm gì (câu sai khiến).',
        examples: [
          { zh: '让它每天吃饱。', py: 'Ràng tā měi tiān chībǎo.', vi: 'Để nó mỗi ngày ăn no.' }
        ] }
    ],
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
      { h: '碰见', p: 'pèngjiàn', v: 'gặp (tình cờ)', e: 'to run into' },
      { h: '骑', p: 'qí', v: 'cưỡi, đạp (xe)', e: 'saddle horse' },
      { h: '骑车', p: 'qíchē', v: 'đạp xe', e: 'to ride a bike (motorbike or bicycle)' },
      { h: '起飞', p: 'qǐfēi', v: 'cất cánh', e: 'to take off' },
      { h: '气', p: 'qì', v: 'giận, khí', e: 'gas' },
      { h: '晴', p: 'qíng', v: 'nắng, trời đẹp', e: 'clear' },
      { h: '请客', p: 'qǐngkè', v: 'mời khách, đãi', e: 'to give a dinner party' },
      { h: '请求', p: 'qǐngqiú', v: 'yêu cầu, đề nghị', e: 'to request' },
      { h: '求', p: 'qiú', v: 'xin, cầu xin', e: 'to seek' },
      { h: '取', p: 'qǔ', v: 'lấy', e: 'to take' },
      { h: '取得', p: 'qǔdé', v: 'đạt được, lấy được', e: 'to acquire' },
      { h: '让', p: 'ràng', v: 'để, cho phép, bảo', e: 'to yield' },
      { h: '认为', p: 'rènwéi', v: 'cho rằng, nghĩ rằng', e: 'to believe' },
      { h: '如果', p: 'rúguǒ', v: 'nếu', e: 'if' },
      { h: '入口', p: 'rùkǒu', v: 'lối vào', e: 'entrance' },
      { h: '商量', p: 'shāngliang', v: 'bàn bạc', e: 'to consult' },
      { h: '生活', p: 'shēnghuó', v: 'cuộc sống', e: 'to live' },
      { h: '省', p: 'shěng', v: 'tiết kiệm; tỉnh', e: 'to save' },
      { h: '实习', p: 'shíxí', v: 'thực tập', e: 'to practice' }
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
    objectives: [
      'Phân biệt nhóm từ ghép với 提 (提出 · 提到 · 提高)',
      'Lặp động từ V一V / V了V để “làm thử / một chút” (算一算 · 数了数)',
      'Dùng bổ ngữ kết quả 到 (收到 · 送到)',
      'Thảo luận bài tập, đề xuất ý tưởng (讨论 · 使用)'
    ],
    grammarNotes: [
      { point: '提出 / 提到 / 提高',
        explain: '提出 = đề xuất (ý kiến); 提到 = nhắc đến; 提高 = nâng cao (trình độ, thành tích).',
        examples: [
          { zh: '我想提出一个想法。', py: 'Wǒ xiǎng tíchū yí gè xiǎngfǎ.', vi: 'Tớ muốn đề xuất một ý tưởng.' },
          { zh: '这样可以提高我们的成绩。', py: 'Zhèyàng kěyǐ tígāo wǒmen de chéngjì.', vi: 'Như vậy có thể nâng cao thành tích.' }
        ] },
      { point: 'Lặp động từ — làm thử / một chút',
        explain: 'Dạng V一V (算一算) hoặc V了V (数了数) làm dịu ngữ khí, nghĩa “làm qua / thử một chút”.',
        examples: [
          { zh: '算一算，我们还有三天。', py: 'Suàn yi suàn, wǒmen hái yǒu sān tiān.', vi: 'Tính xem, chúng ta còn ba ngày.' },
          { zh: '快递员数了数。', py: 'Kuàidìyuán shǔ le shǔ.', vi: 'Shipper đếm xem.' }
        ] },
      { point: 'Bổ ngữ kết quả 到',
        explain: '到 sau động từ chỉ động tác có kết quả (nhận được, gửi tới).',
        examples: [
          { zh: '我收到一个包裹了。', py: 'Wǒ shōudào yí gè bāoguǒ le.', vi: 'Tớ nhận được một bưu kiện rồi.' }
        ] }
    ],
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
      { h: '实现', p: 'shíxiàn', v: 'thực hiện', e: 'to achieve' },
      { h: '使用', p: 'shǐyòng', v: 'sử dụng', e: 'to use' },
      { h: '收', p: 'shōu', v: 'thu, cất', e: 'to receive' },
      { h: '收到', p: 'shōudào', v: 'nhận được', e: 'to receive' },
      { h: '收入', p: 'shōurù', v: 'thu nhập', e: 'to take in' },
      { h: '受到', p: 'shòudào', v: 'nhận được, chịu', e: 'to receive (praise, an education, punishment etc)' },
      { h: '数', p: 'shǔ', v: 'đếm', e: 'to count' },
      { h: '说明', p: 'shuōmíng', v: 'giải thích, làm rõ', e: 'to explain' },
      { h: '送到', p: 'sòngdào', v: 'gửi đến', e: 'Deliver' },
      { h: '送给', p: 'sònggěi', v: 'tặng cho', e: 'to send' },
      { h: '算', p: 'suàn', v: 'tính, tính toán', e: 'to regard as' },
      { h: '讨论', p: 'tǎolùn', v: 'thảo luận', e: 'to discuss' },
      { h: '套', p: 'tào', v: 'bộ (quần áo)', e: 'to cover' },
      { h: '提', p: 'tí', v: 'nêu, đề cập', e: 'used in 防 and 溜' },
      { h: '提出', p: 'tíchū', v: 'đề xuất', e: 'to raise (an issue)' },
      { h: '提到', p: 'tídào', v: 'đề cập, nhắc đến', e: 'to mention' },
      { h: '提高', p: 'tígāo', v: 'nâng cao', e: 'to raise' },
      { h: '题', p: 'tí', v: 'câu hỏi, đề', e: 'topic, problem, question, title' },
      { h: '听讲', p: 'tīngjiǎng', v: 'nghe giảng', e: 'to attend a lecture' }
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
    objectives: [
      'Chỉ hướng di chuyển bằng 往 + phương vị + V (往前走)',
      'Dẫn lời nghe được bằng 听说',
      'Nêu đối tượng phục vụ bằng 为 (我为你买)',
      'Nói về thói quen, hoàn thành việc (习惯 · 完成 · 通过)'
    ],
    grammarNotes: [
      { point: '往 + phương vị + động từ',
        explain: '往 chỉ phương hướng của động tác di chuyển: 往前 / 往左 走…',
        examples: [
          { zh: '我们往前走吧。', py: 'Wǒmen wǎng qián zǒu ba.', vi: 'Chúng ta đi về phía trước đi.' }
        ] },
      { point: '听说 — nghe nói',
        explain: '听说 đặt đầu câu để dẫn thông tin nghe được từ người khác.',
        examples: [
          { zh: '我听说今天有新菜。', py: 'Wǒ tīngshuō jīntiān yǒu xīn cài.', vi: 'Tớ nghe nói hôm nay có món mới.' }
        ] },
      { point: '为 — vì, cho',
        explain: '为 + đối tượng đặt trước động từ để nêu người / việc được hưởng lợi.',
        examples: [
          { zh: '我为你买了一本书。', py: 'Wǒ wèi nǐ mǎi le yì běn shū.', vi: 'Tớ mua cho cậu một cuốn sách.' }
        ] }
    ],
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
      { h: '听说', p: 'tīngshuō', v: 'nghe nói', e: 'to hear (sth said)' },
      { h: '停', p: 'tíng', v: 'dừng', e: 'to stop' },
      { h: '停车', p: 'tíngchē', v: 'đỗ xe', e: 'to pull up (stop one\\\'s vehicle)' },
      { h: '挺', p: 'tǐng', v: 'khá, khá là', e: 'straight' },
      { h: '通过', p: 'tōngguò', v: 'thông qua, vượt qua', e: 'to pass through' },
      { h: '通知', p: 'tōngzhī', v: 'thông báo', e: 'to notify' },
      { h: '推', p: 'tuī', v: 'đẩy', e: 'to push' },
      { h: '完', p: 'wán', v: 'xong, hết', e: 'to finish' },
      { h: '完成', p: 'wánchéng', v: 'hoàn thành', e: 'to complete' },
      { h: '晚安', p: 'wǎn\'ān', v: 'chúc ngủ ngon', e: 'Good night!' },
      { h: '网', p: 'wǎng', v: 'mạng, lưới', e: 'net' },
      { h: '往', p: 'wǎng', v: 'về phía, hướng', e: 'to go (in a direction)' },
      { h: '为', p: 'wèi', v: 'vì, cho', e: 'as (in the capacity of)' },
      { h: '喂', p: 'wèi', v: 'này, alo', e: 'hello (when answering the phone)' },
      { h: '闻', p: 'wén', v: 'ngửi', e: 'to smell, to hear, news' },
      { h: '问路', p: 'wènlù', v: 'hỏi đường', e: 'to ask for directions' },
      { h: '午餐', p: 'wǔcān', v: 'bữa trưa', e: 'lunch' },
      { h: '午睡', p: 'wǔshuì', v: 'ngủ trưa', e: 'to take a nap' },
      { h: '习惯', p: 'xíguàn', v: 'quen, thói quen', e: 'habit' }
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
    objectives: [
      'Diễn đạt nhận định sai bằng 以为 (我以为你忘了)',
      'So sánh tương đồng bằng 像…一样',
      'Phân biệt nhóm 想 (想到 · 想起 · 想法)',
      'Nói lời dặn dò, chúc đi đường (一路顺风 · 应该)'
    ],
    grammarNotes: [
      { point: '以为 — tưởng (rằng)',
        explain: '以为 diễn đạt một nhận định trước đó hoá ra sai so với thực tế.',
        examples: [
          { zh: '我以为你忘了。', py: 'Wǒ yǐwéi nǐ wàng le.', vi: 'Tớ tưởng cậu quên rồi.' }
        ] },
      { point: '像…一样 — giống như',
        explain: 'Khung “像 + đối tượng + 一样” so sánh hai sự vật giống nhau.',
        examples: [
          { zh: '你像我姐姐一样！', py: 'Nǐ xiàng wǒ jiějie yíyàng!', vi: 'Cậu giống chị gái tớ vậy!' }
        ] },
      { point: '想到 / 想起 / 想法',
        explain: '想到 = nghĩ đến (chợt nảy ra); 想起 = nhớ ra; 想法 = ý nghĩ, suy nghĩ (danh từ).',
        examples: [
          { zh: '我想起来了，你姓阮！', py: 'Wǒ xiǎng qǐlái le, nǐ xìng Ruǎn!', vi: 'Tớ nhớ ra rồi, cậu họ Nguyễn!' }
        ] }
    ],
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
      { h: '洗澡', p: 'xǐzǎo', v: 'tắm', e: 'to bathe' },
      { h: '下雪', p: 'xiàxuě', v: 'tuyết rơi', e: 'to snow' },
      { h: '相信', p: 'xiāngxìn', v: 'tin tưởng', e: 'to be convinced (that sth is true)' },
      { h: '想到', p: 'xiǎngdào', v: 'nghĩ đến', e: 'to think of' },
      { h: '想法', p: 'xiǎngfǎ', v: 'suy nghĩ, ý tưởng', e: 'way of thinking' },
      { h: '想起', p: 'xiǎngqǐ', v: 'nhớ ra', e: 'to recall' },
      { h: '向', p: 'xiàng', v: 'hướng về, với', e: 'toward, in the direction of, to face' },
      { h: '像', p: 'xiàng', v: 'giống như', e: 'to resemble' },
      { h: '信', p: 'xìn', v: 'thư, tin nhắn', e: 'letter' },
      { h: '行动', p: 'xíngdòng', v: 'hành động', e: 'operation' },
      { h: '姓', p: 'xìng', v: 'họ', e: 'family name' },
      { h: '休假', p: 'xiūjià', v: 'nghỉ phép', e: 'to go on vacation' },
      { h: '选', p: 'xuǎn', v: 'chọn', e: 'to choose' },
      { h: '养', p: 'yǎng', v: 'nuôi', e: 'to raise (animals)' },
      { h: '要求', p: 'yāoqiú', v: 'yêu cầu', e: 'to request' },
      { h: '一路顺风', p: 'yílùshùnfēng', v: 'thượng lộ bình an', e: 'to have a pleasant journey (idiom)' },
      { h: '以为', p: 'yǐwéi', v: 'tưởng rằng', e: 'to think (i.e. to take it to be true that ...) (Usually there is an implication that the notion is mistaken – except when expressing one\\\'s own current opinion.)' },
      { h: '意思', p: 'yìsi', v: 'ý nghĩa', e: 'idea' },
      { h: '应该', p: 'yīnggāi', v: 'nên', e: 'ought to' }
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
    objectives: [
      'Diễn đạt cấu tạo bằng 由…组成 (由很多部分组成)',
      'Nhấn điều kiện bằng 才 (…我才能完成)',
      'Dùng bổ ngữ xu hướng 进 · 过 · 开 (走进 · 走过 · 走开)',
      'Nói về gia đình, chăm sóc (照顾 · 长大 · 做饭)'
    ],
    grammarNotes: [
      { point: '由…组成 — được tạo thành từ',
        explain: 'Khung “由 + thành phần + 组成” cho biết một thứ gồm những phần nào.',
        examples: [
          { zh: '这个公园是由很多部分组成的。', py: 'Zhège gōngyuán shì yóu hěn duō bùfen zǔchéng de.', vi: 'Công viên này được tạo thành từ nhiều phần.' }
        ] },
      { point: '才 — mới (nhờ điều kiện)',
        explain: '才 đặt trước động từ, nhấn rằng nhờ có điều kiện trước đó mới thực hiện được.',
        examples: [
          { zh: '正是因为你帮我，我才能完成。', py: 'Zhèng shì yīnwèi nǐ bāng wǒ, wǒ cái néng wánchéng.', vi: 'Chính vì cậu giúp, tớ mới hoàn thành được.' }
        ] },
      { point: 'Bổ ngữ xu hướng 进 / 过 / 开',
        explain: 'Gắn sau 走 (và nhiều động từ) để chỉ hướng: vào trong (进), đi qua (过), rời khỏi (开).',
        examples: [
          { zh: '我走进病房看她。', py: 'Wǒ zǒujìn bìngfáng kàn tā.', vi: 'Tớ bước vào phòng bệnh thăm bà.' }
        ] }
    ],
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
      { h: '影响', p: 'yǐngxiǎng', v: 'ảnh hưởng', e: 'influence' },
      { h: '愿意', p: 'yuànyì', v: 'sẵn lòng, muốn', e: 'to wish' },
      { h: '运动', p: 'yùndòng', v: 'vận động, thể thao', e: 'to move' },
      { h: '占', p: 'zhàn', v: 'chiếm', e: 'to occupy, to take up, to seize' },
      { h: '站住', p: 'zhànzhù', v: 'đứng lại', e: 'to stand' },
      { h: '长大', p: 'zhǎngdà', v: 'lớn lên', e: 'to grow up' },
      { h: '照顾', p: 'zhàogu', v: 'chăm sóc', e: 'to take care of' },
      { h: '照相', p: 'zhàoxiàng', v: 'chụp ảnh', e: 'to take a photograph' },
      { h: '正是', p: 'zhèngshì', v: 'chính là', e: 'is precisely' },
      { h: '只能', p: 'zhǐnéng', v: 'chỉ có thể', e: 'can only' },
      { h: '重视', p: 'zhòngshì', v: 'coi trọng', e: 'to attach importance to sth' },
      { h: '住院', p: 'zhùyuàn', v: 'nhập viện', e: 'to be in hospital' },
      { h: '装', p: 'zhuāng', v: 'đóng gói, lắp', e: 'adornment' },
      { h: '走过', p: 'zǒuguò', v: 'đi qua', e: 'to walk past' },
      { h: '走进', p: 'zǒujìn', v: 'bước vào', e: 'to enter' },
      { h: '走开', p: 'zǒukāi', v: 'đi khỏi', e: 'to leave' },
      { h: '租', p: 'zū', v: 'thuê', e: 'to hire' },
      { h: '组', p: 'zǔ', v: 'nhóm, tổ', e: 'group, team, to organize' },
      { h: '组成', p: 'zǔchéng', v: 'tạo thành', e: 'to form' },
      { h: '作业', p: 'zuòyè', v: 'bài tập', e: 'school assignment' },
      { h: '作用', p: 'zuòyòng', v: 'tác dụng', e: 'to act on' },
      { h: '做到', p: 'zuòdào', v: 'làm được', e: 'to accomplish' },
      { h: '做饭', p: 'zuòfàn', v: 'nấu cơm', e: 'to prepare a meal' }
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
    objectives: [
      'Dùng cặp 不但…而且… để tăng tiến',
      'Chuyển ý nhẹ bằng 不过',
      'Dùng 必须 / 不要 để nói “phải / đừng”',
      'Nhấn điều kiện bằng 才 (做完…才能休息)'
    ],
    grammarNotes: [
      { point: '不但…而且… — không những…mà còn…',
        explain: 'Cặp liên từ nối hai ý cùng chiều, ý sau mạnh hơn ý trước.',
        examples: [
          { zh: '他不但学习好，而且很热心。', py: 'Tā búdàn xuéxí hǎo, érqiě hěn rèxīn.', vi: 'Anh ấy không những học giỏi, mà còn rất nhiệt tình.' }
        ] },
      { point: '不过 — nhưng mà',
        explain: '不过 chuyển ý nhẹ nhàng hơn 但是, đặt đầu vế sau.',
        examples: [
          { zh: '不过我听说他很负责任。', py: 'Búguò wǒ tīngshuō tā hěn fùzérèn.', vi: 'Nhưng mà tớ nghe nói anh ấy rất có trách nhiệm.' }
        ] },
      { point: '必须 / 不要 — phải / đừng',
        explain: '必须 + V nhấn sự bắt buộc; 不要 + V là lời khuyên ngăn “đừng”.',
        examples: [
          { zh: '我们必须去办公室交作业。', py: 'Wǒmen bìxū qù bàngōngshì jiāo zuòyè.', vi: 'Chúng ta phải đến văn phòng nộp bài.' },
          { zh: '不要担心！', py: 'Búyào dānxīn!', vi: 'Đừng lo!' }
        ] }
    ],
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
      { h: '啊', p: 'a', v: 'à, này (ngữ khí từ)', e: 'interjection of surprise' },
      { h: '爱情', p: 'àiqíng', v: 'tình yêu', e: 'romance' },
      { h: '班长', p: 'bānzhǎng', v: 'lớp trưởng', e: 'class monitor' },
      { h: '办法', p: 'bànfǎ', v: 'cách, phương pháp', e: 'means' },
      { h: '办公室', p: 'bàngōngshì', v: 'văn phòng', e: 'office' },
      { h: '笔记', p: 'bǐjì', v: 'ghi chú', e: 'to take down (in writing)' },
      { h: '必须', p: 'bìxū', v: 'phải, bắt buộc', e: 'to have to' },
      { h: '边', p: 'biān', v: 'bên, cạnh', e: 'side' },
      { h: '不但', p: 'búdàn', v: 'không những', e: 'not only (... but also ...)' },
      { h: '不过', p: 'búguò', v: 'nhưng mà, tuy nhiên', e: 'only' },
      { h: '不太', p: 'bú tài', v: 'không lắm', e: 'Not too' },
      { h: '不要', p: 'bú yào', v: 'đừng, không muốn', e: 'don\\\'t!' },
      { h: '不一定', p: 'bù yīdìng', v: 'không nhất định', e: 'not necessarily' },
      { h: '不一会儿', p: 'bù yīhuǐr', v: 'một lát, chốc lát', e: 'Take a short while' },
      { h: '部分', p: 'bùfen', v: 'phần, bộ phận', e: 'part' },
      { h: '才', p: 'cái', v: 'mới (chỉ sau khi...)', e: 'ability' },
      { h: '草地', p: 'cǎodì', v: 'bãi cỏ', e: 'lawn' },
      { h: '层', p: 'céng', v: 'tầng, lớp', e: 'to pile on top of one another' },
      { h: '差不多', p: 'chàbuduō', v: 'gần như, khoảng', e: 'almost' },
      { h: '场', p: 'chǎng', v: 'sân, trường (lượng từ)', e: 'threshing floor' }
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
    objectives: [
      'Đặt giả định bằng …的话 (你想去的话)',
      'Chuyển ý bằng 但是 / 但',
      'Diễn đạt “từ nhỏ đã…” bằng 从小',
      'Nói về đi chơi, phương tiện (动物园 · 地铁 · 到处)'
    ],
    grammarNotes: [
      { point: '…的话 — nếu…thì',
        explain: 'Đặt 的话 ở cuối vế điều kiện để nêu giả định, vế sau nêu kết quả.',
        examples: [
          { zh: '你想去的话，我们现在出发。', py: 'Nǐ xiǎng qù dehuà, wǒmen xiànzài chūfā.', vi: 'Nếu cậu muốn đi thì chúng ta xuất phát ngay.' }
        ] },
      { point: '但是 / 但 — nhưng',
        explain: '但是 (và dạng rút gọn 但) nối vế đối lập, đặt đầu vế sau.',
        examples: [
          { zh: '但是我们怎么去？', py: 'Dànshì wǒmen zěnme qù?', vi: 'Nhưng chúng ta đi thế nào?' }
        ] },
      { point: '从小 — từ nhỏ (đã)',
        explain: '从小 + (就) + động từ: việc đã diễn ra từ khi còn nhỏ.',
        examples: [
          { zh: '我从小就喜欢动物。', py: 'Wǒ cóngxiǎo jiù xǐhuan dòngwù.', vi: 'Tớ từ nhỏ đã thích động vật.' }
        ] }
    ],
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
      { h: '成绩', p: 'chéngjì', v: 'thành tích, điểm số', e: 'achievement' },
      { h: '词典', p: 'cídiǎn', v: 'từ điển', e: 'dictionary' },
      { h: '从小', p: 'cóngxiǎo', v: 'từ nhỏ', e: 'from childhood' },
      { h: '大部分', p: 'dà bùfen', v: 'phần lớn', e: 'in large part' },
      { h: '大人', p: 'dàrén', v: 'người lớn', e: 'adult' },
      { h: '大声', p: 'dàshēng', v: 'to tiếng', e: 'loud voice' },
      { h: '大小', p: 'dàxiǎo', v: 'kích cỡ', e: 'dimension' },
      { h: '大衣', p: 'dàyī', v: 'áo khoác', e: 'overcoat' },
      { h: '单位', p: 'dānwèi', v: 'đơn vị, cơ quan', e: 'unit (of measure)' },
      { h: '但', p: 'dàn', v: 'nhưng', e: 'but' },
      { h: '但是', p: 'dànshì', v: 'nhưng mà', e: 'but' },
      { h: '到处', p: 'dàochù', v: 'khắp nơi', e: 'everywhere' },
      { h: '道路', p: 'dàolù', v: 'con đường', e: 'road' },
      { h: '地铁', p: 'dìtiě', v: 'tàu điện ngầm', e: 'underground railway' },
      { h: '的话', p: 'de huà', v: 'nếu...thì', e: 'if (coming after a conditional clause)' },
      { h: '店', p: 'diàn', v: 'cửa hàng', e: 'inn' },
      { h: '动物', p: 'dòngwù', v: 'động vật', e: 'animal' },
      { h: '动物园', p: 'dòngwùyuán', v: 'vườn thú', e: 'zoo' },
      { h: '短信', p: 'duǎnxìn', v: 'tin nhắn', e: 'text message' },
      { h: '队', p: 'duì', v: 'đội, hàng', e: 'squadron' }
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
    objectives: [
      'So sánh tăng tiến bằng 更 (更漂亮)',
      'Bổ sung ý bằng 而且',
      'Diễn đạt sự việc bất ngờ bằng 忽然',
      'Nói về quảng trường, nghệ thuật (广场 · 画家 · 故事)'
    ],
    grammarNotes: [
      { point: '更 — hơn (so sánh)',
        explain: '更 + tính từ nhấn mức độ cao hơn so với mốc đã có.',
        examples: [
          { zh: '这幅画儿更漂亮！', py: 'Zhè fú huàr gèng piàoliang!', vi: 'Bức tranh này còn đẹp hơn!' }
        ] },
      { point: '而且 — hơn nữa, mà còn',
        explain: '而且 nối thêm một ý cùng chiều, làm rõ / tăng ý trước.',
        examples: [
          { zh: '这个广场真大，而且很漂亮。', py: 'Zhège guǎngchǎng zhēn dà, érqiě hěn piàoliang.', vi: 'Quảng trường này thật lớn, mà còn rất đẹp.' }
        ] },
      { point: '忽然 — đột nhiên',
        explain: '忽然 đặt trước động từ chỉ việc xảy ra bất ngờ.',
        examples: [
          { zh: '忽然下雨了！', py: 'Hūrán xià yǔ le!', vi: 'Đột nhiên mưa rồi!' }
        ] }
    ],
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
      { h: '队长', p: 'duìzhǎng', v: 'đội trưởng', e: 'captain' },
      { h: '而且', p: 'érqiě', v: 'mà còn, hơn nữa', e: 'but also' },
      { h: '方法', p: 'fāngfǎ', v: 'phương pháp, cách', e: 'method' },
      { h: '方向', p: 'fāngxiàng', v: 'phương hướng', e: 'direction' },
      { h: '刚', p: 'gāng', v: 'vừa mới', e: 'hard' },
      { h: '个子', p: 'gèzi', v: 'chiều cao, dáng người', e: 'height' },
      { h: '更', p: 'gèng', v: 'còn, hơn (so sánh)', e: 'to change or replace' },
      { h: '公里', p: 'gōnglǐ', v: 'cây số, km', e: 'kilometer' },
      { h: '故事', p: 'gùshi', v: 'câu chuyện', e: 'old practice' },
      { h: '顾客', p: 'gùkè', v: 'khách hàng', e: 'customer' },
      { h: '观点', p: 'guāndiǎn', v: 'quan điểm', e: 'point of view' },
      { h: '广场', p: 'guǎngchǎng', v: 'quảng trường', e: 'public square' },
      { h: '广告', p: 'guǎnggào', v: 'quảng cáo', e: 'to advertise' },
      { h: '海边', p: 'hǎibiān', v: 'bờ biển', e: 'coast' },
      { h: '好处', p: 'hǎochu', v: 'lợi ích', e: 'easy to get along with' },
      { h: '好人', p: 'hǎorén', v: 'người tốt', e: 'good person' },
      { h: '好事', p: 'hǎoshì', v: 'việc tốt', e: 'good action, deed, thing or work (also sarcastic, "a fine thing indeed")' },
      { h: '忽然', p: 'hūrán', v: 'đột nhiên', e: 'suddenly' },
      { h: '画儿', p: 'huàr', v: 'tranh, bức vẽ', e: 'picture' },
      { h: '画家', p: 'huàjiā', v: 'họa sĩ', e: 'painter' }
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
    objectives: [
      'Nêu lựa chọn trong câu trần thuật bằng 或者 / 或',
      'Diễn đạt “sắp” bằng 就要…了',
      'Diễn đạt kinh nghiệm bằng V过 (见过)',
      'Nói về ngày lễ, đãi khách (节日 · 客人 · 看法)'
    ],
    grammarNotes: [
      { point: '或者 / 或 — hoặc (câu trần thuật)',
        explain: '或者 nối lựa chọn trong câu kể; câu hỏi lựa chọn dùng 还是.',
        examples: [
          { zh: '我们做饺子或者买快餐？', py: 'Wǒmen zuò jiǎozi huòzhě mǎi kuàicān?', vi: 'Chúng ta làm sủi cảo hay mua đồ ăn nhanh?' }
        ] },
      { point: '就要…了 — sắp (sửa)',
        explain: 'Khung “就要 + V + 了” nhấn việc sắp xảy ra, thường rất gần.',
        examples: [
          { zh: '客人就要来了！', py: 'Kèrén jiùyào lái le!', vi: 'Khách sắp đến rồi!' }
        ] },
      { point: 'V过 — đã từng (kinh nghiệm)',
        explain: '过 sau động từ chỉ kinh nghiệm “đã từng làm / gặp”.',
        examples: [
          { zh: '你见过那个科学家吗？', py: 'Nǐ jiànguo nàge kēxuéjiā ma?', vi: 'Cậu đã gặp nhà khoa học kia chưa?' }
        ] }
    ],
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
      { h: '坏处', p: 'huàichu', v: 'tác hại, điểm xấu', e: 'harm' },
      { h: '坏人', p: 'huàirén', v: 'người xấu', e: 'bad person' },
      { h: '或', p: 'huò', v: 'hoặc', e: 'maybe' },
      { h: '或者', p: 'huòzhě', v: 'hoặc, hay', e: 'or' },
      { h: '鸡', p: 'jī', v: 'gà', e: 'fowl' },
      { h: '级', p: 'jí', v: 'cấp, bậc', e: 'level' },
      { h: '见过', p: 'jiànguò', v: 'đã gặp', e: 'seen' },
      { h: '交通', p: 'jiāotōng', v: 'giao thông', e: 'to be connected' },
      { h: '角', p: 'jiǎo', v: 'góc', e: 'corner, angle, jiao (0.1 yuan)' },
      { h: '角度', p: 'jiǎodù', v: 'góc độ', e: 'angle' },
      { h: '饺子', p: 'jiǎozi', v: 'sủi cảo', e: 'dumpling' },
      { h: '节目', p: 'jiémù', v: 'chương trình', e: 'program' },
      { h: '节日', p: 'jiérì', v: 'ngày lễ', e: 'holiday' },
      { h: '就要', p: 'jiùyào', v: 'sắp, sẽ', e: 'will' },
      { h: '看法', p: 'kànfǎ', v: 'ý kiến, quan điểm', e: 'way of looking at a thing' },
      { h: '科学家', p: 'kēxuéjiā', v: 'nhà khoa học', e: 'scientist' },
      { h: '客人', p: 'kèrén', v: 'khách', e: 'visitor' },
      { h: '空气', p: 'kōngqì', v: 'không khí', e: 'air' },
      { h: '快餐', p: 'kuàicān', v: 'đồ ăn nhanh', e: 'fast food' },
      { h: '快点儿', p: 'kuàidiǎnr', v: 'nhanh lên', e: 'erhua variant of 快点' }
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
  },
  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 47: Từ chức năng & liên từ (5) — 20 từ
  // 老朋友, 礼物, 里头, 例子, 路边, 旅客, 面前, 名称, 名单, 目的, 难题, 墙, 青年, 青少年, 球场, 全身, 全体, 人口, 人们, 人数
  // ───────────────────────────────────────────────────────────────────────────
  47: {
    id: 47,
    level: 2,
    title: 'Từ chức năng & liên từ (5)',
    context: 'Một người bạn cũ sắp từ nước ngoài trở về. Mai và Tiểu Mỹ lên kế hoạch tổ chức buổi gặp mặt chào đón.',
    vocabPreview: ['老朋友', '礼物', '名单', '目的', '球场'],
    objectives: [
      'Dùng 让 để nói “để cho mọi người…” (让大家见面)',
      'Dự đoán bằng câu chính phản 会不会 (会不会太多)',
      'Diễn đạt phương thức kèm theo bằng V着 (照着做)',
      'Nói về tổ chức gặp mặt (名单 · 目的 · 礼物)'
    ],
    grammarNotes: [
      { point: '让 — để, khiến',
        explain: '让 + đối tượng + động từ: để / cho / khiến ai làm gì.',
        examples: [
          { zh: '目的就是让大家见面。', py: 'Mùdì jiùshì ràng dàjiā jiànmiàn.', vi: 'Mục đích là để mọi người gặp nhau.' }
        ] },
      { point: '会不会 — có…không (dự đoán)',
        explain: 'Dạng chính phản “会不会 + V” hỏi / đoán khả năng xảy ra.',
        examples: [
          { zh: '人数会不会太多？', py: 'Rénshù huì bú huì tài duō?', vi: 'Số người có quá nhiều không?' }
        ] },
      { point: 'V着 — theo trạng thái / phương thức',
        explain: '着 sau động từ chỉ trạng thái duy trì hoặc cách thức kèm theo.',
        examples: [
          { zh: '看墙上的例子，照着做就行。', py: 'Kàn qiáng shàng de lìzi, zhàozhe zuò jiù xíng.', vi: 'Nhìn ví dụ trên tường, làm theo là được.' }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Sân trường · Buổi sáng', bg: 'campus',
        cast: ['mai', 'xiaomei'],
        text: 'Mai và Tiểu Mỹ đang lên kế hoạch đón một người bạn cũ trở về.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我们的老朋友下周回来！我们准备礼物吧。',
        pinyin: 'Wǒmen de lǎopéngyou xià zhōu huílái! Wǒmen zhǔnbèi lǐwù ba.',
        meaning: 'Bạn cũ của chúng ta tuần sau về! Chúng ta chuẩn bị quà đi.',
        expression: 'happy', vocab: ['老朋友', '礼物']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好主意！这次聚会的目的是什么？',
        pinyin: 'Hǎo zhǔyi! Zhè cì jùhuì de mùdì shì shénme?',
        meaning: 'Ý hay! Mục đích buổi gặp lần này là gì?',
        expression: 'curious', vocab: ['目的']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '目的就是让大家见面。我先做一份名单。',
        pinyin: 'Mùdì jiùshì ràng dàjiā jiànmiàn. Wǒ xiān zuò yí fèn míngdān.',
        meaning: 'Mục đích là để mọi người gặp nhau. Tớ làm một bản danh sách trước.',
        expression: 'focused', vocab: ['目的', '名单']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '名单里头有多少人？人数会不会太多？',
        pinyin: 'Míngdān lǐtou yǒu duōshǎo rén? Rénshù huì bu huì tài duō?',
        meaning: 'Trong danh sách có bao nhiêu người? Số người có quá nhiều không?',
        expression: 'curious', vocab: ['里头', '人数']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'campus',
        scene: '📍 Sân trường · Buổi sáng',
        expression: 'curious',
        q: 'Mai muốn hỏi "Tên gọi của buổi gặp mặt là gì?". Cô ấy nên nói thế nào?',
        options: [
          { text: '活动的名称叫什么？', pinyin: 'Huódòng de míngchēng jiào shénme?', meaning: 'Tên của hoạt động gọi là gì?', correct: true,
            feedback: 'Đúng! 名称 = tên gọi (của sự vật, hoạt động).' },
          { text: '活动的名单叫什么？', pinyin: 'Huódòng de míngdān jiào shénme?', meaning: 'Danh sách của hoạt động gọi là gì?', correct: false,
            feedback: '名单 = danh sách (tên người), không phải tên gọi của hoạt động.' },
          { text: '活动的人口叫什么？', pinyin: 'Huódòng de rénkǒu jiào shénme?', meaning: '(Không hợp lý)', correct: false,
            feedback: '人口 = dân số, không dùng để chỉ tên gọi.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这次活动的名称叫"老朋友重逢"。我们请一些青年来帮忙，青少年也可以。',
        pinyin: 'Zhè cì huódòng de míngchēng jiào "lǎopéngyou chóngféng". Wǒmen qǐng yìxiē qīngnián lái bāngmáng, qīngshàonián yě kěyǐ.',
        meaning: 'Tên hoạt động lần này gọi là "Bạn cũ hội ngộ". Chúng ta mời vài thanh niên đến giúp, thanh thiếu niên cũng được.',
        expression: 'happy', vocab: ['名称', '青年', '青少年']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"目的" có nghĩa là gì?',
            options: ['mục đích', 'danh sách', 'tên gọi', 'số người'],
            answer: 0
          },
          {
            q: 'Muốn nói "trong danh sách" thì dùng từ nào?',
            options: ['名单里头', '名单面前', '名单全身', '名单路边'],
            answer: 0
          },
          {
            q: '"青少年" có nghĩa là gì?',
            options: ['thanh thiếu niên', 'người già', 'khách du lịch', 'mọi người'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Trước cổng trường · Tiếp tục', bg: 'street',
        cast: ['mai', 'xiaomei', 'laoli'],
        text: 'Hai bạn ra ngoài để xem địa điểm tổ chức.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '路边有很多旅客，人们都很热情。',
        pinyin: 'Lùbiān yǒu hěn duō lǚkè, rénmen dōu hěn rèqíng.',
        meaning: 'Bên đường có rất nhiều khách, mọi người đều rất nhiệt tình.',
        expression: 'happy', vocab: ['路边', '旅客', '人们']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '是啊，这座城市人口很多。',
        pinyin: 'Shì a, zhè zuò chéngshì rénkǒu hěn duō.',
        meaning: 'Ừ, dân số thành phố này rất đông.',
        expression: 'happy', vocab: ['人口']
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '同学们，球场已经订好了，全体都能参加。',
        pinyin: 'Tóngxuémen, qiúchǎng yǐjīng dìng hǎo le, quántǐ dōu néng cānjiā.',
        meaning: 'Các em, sân bóng đã đặt xong rồi, toàn thể đều có thể tham gia.',
        expression: 'happy', vocab: ['球场', '全体']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'], bg: 'street',
        scene: '📍 Trước cổng trường',
        expression: 'curious',
        q: 'Tiểu Mỹ muốn nói "phát biểu trước mặt mọi người". Cô ấy nên nói thế nào?',
        options: [
          { text: '在大家面前讲话', pinyin: 'Zài dàjiā miànqián jiǎnghuà', meaning: 'Phát biểu trước mặt mọi người', correct: true,
            feedback: 'Đúng! 面前 = trước mặt (ai đó).' },
          { text: '在大家里头讲话', pinyin: 'Zài dàjiā lǐtou jiǎnghuà', meaning: '(Không hợp lý)', correct: false,
            feedback: '里头 = bên trong, không dùng cho "trước mặt người".' },
          { text: '在大家路边讲话', pinyin: 'Zài dàjiā lùbiān jiǎnghuà', meaning: '(Không hợp lý)', correct: false,
            feedback: '路边 = bên đường, không phải "trước mặt".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '在大家面前讲话是个难题，我全身都紧张。',
        pinyin: 'Zài dàjiā miànqián jiǎnghuà shì gè nántí, wǒ quánshēn dōu jǐnzhāng.',
        meaning: 'Phát biểu trước mặt mọi người là một bài toán khó, tớ căng thẳng toàn thân.',
        expression: 'sad', vocab: ['面前', '难题', '全身']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '别担心！看墙上的例子，照着做就行。',
        pinyin: 'Bié dānxīn! Kàn qiáng shàng de lìzi, zhàozhe zuò jiù xíng.',
        meaning: 'Đừng lo! Nhìn ví dụ trên tường, làm theo là được.',
        expression: 'happy', vocab: ['墙', '例子']
      }
    ],
    vocab: [
      { h: '老朋友', p: 'lǎopéngyou', v: 'bạn cũ, bạn lâu năm', e: 'old friend' },
      { h: '礼物', p: 'lǐwù', v: 'quà, món quà', e: 'gift' },
      { h: '里头', p: 'lǐtou', v: 'bên trong', e: 'inside' },
      { h: '例子', p: 'lìzi', v: 'ví dụ', e: 'case' },
      { h: '路边', p: 'lùbiān', v: 'bên đường, lề đường', e: 'curb' },
      { h: '旅客', p: 'lǚkè', v: 'lữ khách, hành khách', e: 'traveler' },
      { h: '面前', p: 'miànqián', v: 'trước mặt', e: 'in front of' },
      { h: '名称', p: 'míngchēng', v: 'tên gọi', e: 'name (of a thing)' },
      { h: '名单', p: 'míngdān', v: 'danh sách (tên người)', e: 'list of names' },
      { h: '目的', p: 'mùdì', v: 'mục đích', e: 'purpose' },
      { h: '难题', p: 'nántí', v: 'bài toán khó, vấn đề nan giải', e: 'difficult problem' },
      { h: '墙', p: 'qiáng', v: 'tường', e: 'wall' },
      { h: '青年', p: 'qīngnián', v: 'thanh niên', e: 'youth' },
      { h: '青少年', p: 'qīngshàonián', v: 'thanh thiếu niên', e: 'adolescent' },
      { h: '球场', p: 'qiúchǎng', v: 'sân bóng', e: 'stadium' },
      { h: '全身', p: 'quánshēn', v: 'toàn thân, cả người', e: 'the whole body' },
      { h: '全体', p: 'quántǐ', v: 'toàn thể', e: 'all' },
      { h: '人口', p: 'rénkǒu', v: 'dân số', e: 'population' },
      { h: '人们', p: 'rénmen', v: 'mọi người, người ta', e: 'people' },
      { h: '人数', p: 'rénshù', v: 'số người', e: 'number of people' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我们的___下周回来！', options: ['老朋友', '旅客', '青年'], answer: '老朋友' },
        { type: 'fill', sentence: '我们准备___吧。', options: ['礼物', '名单', '球场'], answer: '礼物' },
        { type: 'fill', sentence: '聚会的___是什么？', options: ['目的', '人口', '难题'], answer: '目的' },
        { type: 'fill', sentence: '我先做一份___。', options: ['名单', '名称', '例子'], answer: '名单' },
        { type: 'fill', sentence: '___都能参加。', options: ['全体', '全身', '里头'], answer: '全体' }
      ],
      normal: [
        { type: 'fill', sentence: '名单___有多少人？', options: ['里头', '面前', '路边'], answer: '里头' },
        { type: 'fill', sentence: '这座城市___很多。', options: ['人口', '人数', '人们'], answer: '人口' },
        { type: 'fill', sentence: '___已经订好了。', options: ['球场', '名单', '墙'], answer: '球场' },
        { type: 'fill', sentence: '我们请一些___来帮忙。', options: ['青年', '旅客', '礼物'], answer: '青年' },
        { type: 'fill', sentence: '___有很多旅客。', options: ['路边', '面前', '里头'], answer: '路边' },
        { type: 'order', words: ['礼物', '我们', '准备'], answer: '我们准备礼物' },
        { type: 'order', words: ['目的', '聚会的', '是什么'], answer: '聚会的目的是什么' }
      ],
      hard: [
        { type: 'fill', sentence: '在大家___讲话是个难题。', options: ['面前', '里头', '路边'], answer: '面前' },
        { type: 'fill', sentence: '我___都紧张。', options: ['全身', '全体', '人数'], answer: '全身' },
        { type: 'fill', sentence: '看墙上的___，照着做就行。', options: ['例子', '名称', '目的'], answer: '例子' },
        { type: 'fill', sentence: '活动的___叫"老朋友重逢"。', options: ['名称', '名单', '人数'], answer: '名称' },
        { type: 'translate', prompt: 'Mục đích buổi gặp lần này là gì?', answer: '这次聚会的目的是什么？' },
        { type: 'translate', prompt: 'Dân số thành phố này rất đông.', answer: '这座城市人口很多。' }
      ]
    }
  },
  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 48: Từ chức năng & liên từ (6) — 20 từ
  // 商人, 身边, 声音, 十分, 食物, 市长, 事情, 数字, 水平, 司机, 虽然, 随时, 所以, 太太, 态度, 特点, 体育场, 体育馆, 天上, 条件
  // ───────────────────────────────────────────────────────────────────────────
  48: {
    id: 48,
    level: 2,
    title: 'Từ chức năng & liên từ (6)',
    context: 'Buổi gặp mặt diễn ra ở sân vận động. Mai và Tiểu Mỹ gặp nhiều người và trò chuyện về công việc, thái độ và điều kiện tổ chức.',
    vocabPreview: ['虽然', '所以', '态度', '条件', '体育场'],
    objectives: [
      'Dùng cặp 虽然…但是… (tuy…nhưng)',
      'Dùng cặp 因为…所以… (vì…nên)',
      'Nhấn mức độ bằng 十分 (十分漂亮)',
      'Nói về sự kiện, con người (态度 · 条件 · 水平)'
    ],
    grammarNotes: [
      { point: '虽然…但是… — tuy…nhưng…',
        explain: '虽然 mở vế nhượng bộ, vế sau dùng 但是 / 可是 — KHÔNG dùng 所以. (所以 chỉ đi với 因为.)',
        examples: [
          { zh: '虽然体育馆小一点，但是更热闹。', py: 'Suīrán tǐyùguǎn xiǎo yìdiǎn, dànshì gèng rènao.', vi: 'Tuy nhà thi đấu nhỏ hơn, nhưng lại náo nhiệt hơn.' }
        ] },
      { point: '因为…所以… — vì…nên…',
        explain: '因为 nêu nguyên nhân, 所以 nêu kết quả; có thể lược bỏ một trong hai.',
        examples: [
          { zh: '因为人多，所以很热闹。', py: 'Yīnwèi rén duō, suǒyǐ hěn rènao.', vi: 'Vì đông người nên rất náo nhiệt.' }
        ] },
      { point: '十分 — rất, vô cùng',
        explain: '十分 là phó từ chỉ mức độ cao, đứng trước tính từ.',
        examples: [
          { zh: '天上的云十分漂亮。', py: 'Tiānshàng de yún shífēn piàoliang.', vi: 'Mây trên trời đẹp vô cùng.' }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Sân vận động · Buổi chiều', bg: 'campus',
        cast: ['mai', 'xiaomei'],
        text: 'Buổi gặp mặt được tổ chức ở sân vận động của trường.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '体育场太大了！我们在体育馆里面比较好。',
        pinyin: 'Tǐyùchǎng tài dà le! Wǒmen zài tǐyùguǎn lǐmiàn bǐjiào hǎo.',
        meaning: 'Sân vận động lớn quá! Chúng ta ở trong nhà thi đấu thì tốt hơn.',
        expression: 'curious', vocab: ['体育场', '体育馆']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '虽然体育馆小一点，但是更热闹，条件也不错。',
        pinyin: 'Suīrán tǐyùguǎn xiǎo yìdiǎn, dànshì gèng rènào, tiáojiàn yě búcuò.',
        meaning: 'Tuy nhà thi đấu nhỏ hơn một chút, nhưng lại náo nhiệt hơn, điều kiện cũng khá tốt.',
        expression: 'happy', vocab: ['虽然', '条件']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你身边那位是谁？声音很大。',
        pinyin: 'Nǐ shēnbiān nà wèi shì shéi? Shēngyīn hěn dà.',
        meaning: 'Người bên cạnh cậu là ai vậy? Giọng nói rất to.',
        expression: 'curious', vocab: ['身边', '声音']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '他是个商人，他太太是司机。他们准备了很多食物。',
        pinyin: 'Tā shì gè shāngrén, tā tàitai shì sījī. Tāmen zhǔnbèi le hěn duō shíwù.',
        meaning: 'Anh ấy là thương nhân, vợ anh ấy là tài xế. Họ đã chuẩn bị rất nhiều thức ăn.',
        expression: 'happy', vocab: ['商人', '太太', '司机', '食物']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'campus',
        scene: '📍 Nhà thi đấu',
        expression: 'curious',
        q: 'Tiểu Mỹ muốn khen "Thái độ của anh ấy rất tốt". Cô ấy nên nói thế nào?',
        options: [
          { text: '他的态度很好。', pinyin: 'Tā de tàidù hěn hǎo.', meaning: 'Thái độ của anh ấy rất tốt.', correct: true,
            feedback: 'Đúng! 态度 = thái độ.' },
          { text: '他的特点很好。', pinyin: 'Tā de tèdiǎn hěn hǎo.', meaning: 'Đặc điểm của anh ấy rất tốt.', correct: false,
            feedback: '特点 = đặc điểm, không phải thái độ.' },
          { text: '他的水平很好。', pinyin: 'Tā de shuǐpíng hěn hǎo.', meaning: 'Trình độ của anh ấy rất tốt.', correct: false,
            feedback: '水平 = trình độ, không phải thái độ ứng xử.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '对，他的态度很好，水平也高。这是他的特点。',
        pinyin: 'Duì, tā de tàidù hěn hǎo, shuǐpíng yě gāo. Zhè shì tā de tèdiǎn.',
        meaning: 'Đúng, thái độ của anh ấy rất tốt, trình độ cũng cao. Đây là đặc điểm của anh ấy.',
        expression: 'happy', vocab: ['态度', '水平', '特点']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"虽然...但是..." dùng để nối hai vế thể hiện quan hệ gì?',
            options: ['tuy... nhưng...', 'nếu... thì...', 'càng... càng...', 'vừa... vừa...'],
            answer: 0
          },
          {
            q: '"司机" có nghĩa là gì?',
            options: ['tài xế', 'thương nhân', 'thị trưởng', 'vợ'],
            answer: 0
          },
          {
            q: 'Muốn nói "người bên cạnh" thì dùng từ nào?',
            options: ['身边的人', '天上的人', '数字的人', '条件的人'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Nhà thi đấu · Tiếp tục', bg: 'campus',
        cast: ['mai', 'xiaomei', 'laoli'],
        text: 'Thầy Lý đến chào mọi người.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '今天市长也来了，这是件大事情！你们随时可以找我。',
        pinyin: 'Jīntiān shìzhǎng yě lái le, zhè shì jiàn dà shìqing! Nǐmen suíshí kěyǐ zhǎo wǒ.',
        meaning: 'Hôm nay thị trưởng cũng đến, đây là việc lớn! Các em bất cứ lúc nào cũng có thể tìm thầy.',
        expression: 'happy', vocab: ['市长', '事情', '随时']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '谢谢老师！您看，天上的云十分漂亮。',
        pinyin: 'Xièxie lǎoshī! Nín kàn, tiānshàng de yún shífēn piàoliang.',
        meaning: 'Cảm ơn thầy! Thầy xem kìa, mây trên trời đẹp vô cùng.',
        expression: 'happy', vocab: ['天上', '十分']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'], bg: 'campus',
        scene: '📍 Nhà thi đấu',
        expression: 'curious',
        q: 'Tiểu Mỹ muốn hỏi "Có bao nhiêu người? Cho con số đi". Cô ấy nên nói thế nào?',
        options: [
          { text: '一共多少人？给个数字吧。', pinyin: 'Yígòng duōshǎo rén? Gěi gè shùzì ba.', meaning: 'Tổng cộng bao nhiêu người? Cho một con số đi.', correct: true,
            feedback: 'Đúng! 数字 = con số.' },
          { text: '一共多少人？给个事情吧。', pinyin: 'Yígòng duōshǎo rén? Gěi gè shìqing ba.', meaning: '(Không hợp lý)', correct: false,
            feedback: '事情 = việc, sự việc, không phải con số.' },
          { text: '一共多少人？给个条件吧。', pinyin: 'Yígòng duōshǎo rén? Gěi gè tiáojiàn ba.', meaning: '(Không hợp lý)', correct: false,
            feedback: '条件 = điều kiện, không phải con số.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '数字我记下了，今天来的人很多。',
        pinyin: 'Shùzì wǒ jì xià le, jīntiān lái de rén hěn duō.',
        meaning: 'Con số thầy ghi lại rồi, hôm nay người đến rất đông.',
        expression: 'happy', vocab: ['数字']
      }
    ],
    vocab: [
      { h: '商人', p: 'shāngrén', v: 'thương nhân, người buôn bán', e: 'merchant' },
      { h: '身边', p: 'shēnbiān', v: 'bên cạnh, bên mình', e: 'at one\\\'s side' },
      { h: '声音', p: 'shēngyīn', v: 'âm thanh, giọng nói', e: 'voice' },
      { h: '十分', p: 'shífēn', v: 'rất, vô cùng', e: 'very' },
      { h: '食物', p: 'shíwù', v: 'thức ăn, thực phẩm', e: 'food' },
      { h: '市长', p: 'shìzhǎng', v: 'thị trưởng', e: 'mayor' },
      { h: '事情', p: 'shìqing', v: 'việc, sự việc', e: 'affair' },
      { h: '数字', p: 'shùzì', v: 'con số, chữ số', e: 'numeral' },
      { h: '水平', p: 'shuǐpíng', v: 'trình độ', e: 'level (of achievement etc)' },
      { h: '司机', p: 'sījī', v: 'tài xế', e: 'chauffeur' },
      { h: '虽然', p: 'suīrán', v: 'tuy nhiên, mặc dù', e: 'although' },
      { h: '随时', p: 'suíshí', v: 'bất cứ lúc nào', e: 'at any time' },
      { h: '所以', p: 'suǒyǐ', v: 'cho nên, vì vậy', e: 'therefore' },
      { h: '太太', p: 'tàitai', v: 'vợ, bà (xưng hô)', e: 'married woman' },
      { h: '态度', p: 'tàidù', v: 'thái độ', e: 'manner' },
      { h: '特点', p: 'tèdiǎn', v: 'đặc điểm', e: 'characteristic (feature)' },
      { h: '体育场', p: 'tǐyùchǎng', v: 'sân vận động', e: 'stadium' },
      { h: '体育馆', p: 'tǐyùguǎn', v: 'nhà thi đấu', e: 'gym' },
      { h: '天上', p: 'tiānshàng', v: 'trên trời', e: 'celestial' },
      { h: '条件', p: 'tiáojiàn', v: 'điều kiện', e: 'condition' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '他是个___。', options: ['商人', '司机', '市长'], answer: '商人' },
        { type: 'fill', sentence: '他太太是___。', options: ['司机', '商人', '太太'], answer: '司机' },
        { type: 'fill', sentence: '他们准备了很多___。', options: ['食物', '数字', '条件'], answer: '食物' },
        { type: 'fill', sentence: '今天___也来了。', options: ['市长', '司机', '商人'], answer: '市长' },
        { type: 'fill', sentence: '你___那位是谁？', options: ['身边', '天上', '面前'], answer: '身边' }
      ],
      normal: [
        { type: 'fill', sentence: '___体育馆小一点，___更热闹。', options: ['虽然…所以', '因为…所以', '虽然…但是'], answer: '虽然…但是' },
        { type: 'fill', sentence: '你们___可以找我。', options: ['随时', '十分', '所以'], answer: '随时' },
        { type: 'fill', sentence: '他的___很好，水平也高。', options: ['态度', '特点', '条件'], answer: '态度' },
        { type: 'fill', sentence: '这是件大___！', options: ['事情', '数字', '声音'], answer: '事情' },
        { type: 'fill', sentence: '___的云十分漂亮。', options: ['天上', '身边', '路边'], answer: '天上' },
        { type: 'order', words: ['态度', '他的', '很好'], answer: '他的态度很好' },
        { type: 'order', words: ['随时', '你们', '可以', '找我'], answer: '你们随时可以找我' }
      ],
      hard: [
        { type: 'fill', sentence: '___体育场太大，我们在体育馆比较好。', options: ['虽然', '所以', '十分'], answer: '虽然' },
        { type: 'fill', sentence: '给个___吧。', options: ['数字', '事情', '声音'], answer: '数字' },
        { type: 'fill', sentence: '这是他的___。', options: ['特点', '态度', '水平'], answer: '特点' },
        { type: 'fill', sentence: '天上的云___漂亮。', options: ['十分', '随时', '所以'], answer: '十分' },
        { type: 'translate', prompt: 'Thái độ của anh ấy rất tốt.', answer: '他的态度很好。' },
        { type: 'translate', prompt: 'Các em bất cứ lúc nào cũng có thể tìm thầy.', answer: '你们随时可以找我。' }
      ]
    }
  },
  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 49: Từ chức năng & liên từ (7) — 20 từ
  // 挺好, 同时, 图片, 外地, 网站, 问题, 小组, 校园, 笑话, 笑话儿, 心情, 心中, 新闻, 信号, 信息, 信心, 信用卡, 行人, 行为, 姓名
  // ───────────────────────────────────────────────────────────────────────────
  49: {
    id: 49,
    level: 2,
    title: 'Từ chức năng & liên từ (7)',
    context: 'Mai và Tiểu Mỹ lập một nhóm nhỏ làm trang web đăng ký cho buổi gặp mặt. Họ xử lý thông tin và họ tên của khách.',
    vocabPreview: ['网站', '信息', '小组', '心情', '姓名'],
    objectives: [
      'Khuyên ngăn bằng 别 + V (别担心)',
      'Diễn đạt sắc thái không như ý bằng 有点儿 + adj (有点担心)',
      'Nối hai việc song song bằng 同时',
      'Nói về làm trang web, thông tin (网站 · 信息 · 姓名)'
    ],
    grammarNotes: [
      { point: '别 + V — đừng (khuyên ngăn)',
        explain: '别 + động từ là cách nói ngắn của 不要, khuyên / cấm đừng làm gì.',
        examples: [
          { zh: '别担心，要有信心！', py: 'Bié dānxīn, yào yǒu xìnxīn!', vi: 'Đừng lo, phải có lòng tin!' }
        ] },
      { point: '有点儿 + tính từ — hơi (không như ý)',
        explain: '有点儿 + tính từ (thường mang nghĩa tiêu cực) diễn đạt mức độ nhẹ “hơi…”.',
        examples: [
          { zh: '这里信号不好，我有点担心。', py: 'Zhèlǐ xìnhào bù hǎo, wǒ yǒudiǎn dānxīn.', vi: 'Ở đây tín hiệu kém, tớ hơi lo.' }
        ] },
      { point: '同时 — đồng thời',
        explain: '同时 nối hai việc xảy ra / cần làm cùng lúc.',
        examples: [
          { zh: '同时也要填姓名。', py: 'Tóngshí yě yào tián xìngmíng.', vi: 'Đồng thời cũng phải điền họ tên.' }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Phòng học · Buổi tối', bg: 'classroom',
        cast: ['mai', 'xiaomei'],
        text: 'Nhóm nhỏ tập trung trong phòng học để làm trang web đăng ký.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我们小组要做一个网站，方便大家报名。',
        pinyin: 'Wǒmen xiǎozǔ yào zuò yí gè wǎngzhàn, fāngbiàn dàjiā bàomíng.',
        meaning: 'Nhóm chúng ta phải làm một trang web, để mọi người đăng ký cho tiện.',
        expression: 'focused', vocab: ['小组', '网站']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '挺好！网站上要放图片和信息。',
        pinyin: 'Tǐng hǎo! Wǎngzhàn shàng yào fàng túpiàn hé xìnxī.',
        meaning: 'Khá tốt! Trên trang web cần đặt hình ảnh và thông tin.',
        expression: 'happy', vocab: ['挺好', '图片', '信息']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '同时也要填姓名。有外地的朋友吗？',
        pinyin: 'Tóngshí yě yào tián xìngmíng. Yǒu wàidì de péngyou ma?',
        meaning: 'Đồng thời cũng phải điền họ tên. Có bạn ở nơi khác không?',
        expression: 'curious', vocab: ['同时', '姓名', '外地']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '有！但是这里信号不好，我有点担心。',
        pinyin: 'Yǒu! Dànshì zhèlǐ xìnhào bù hǎo, wǒ yǒudiǎn dānxīn.',
        meaning: 'Có! Nhưng ở đây tín hiệu không tốt, tớ hơi lo.',
        expression: 'sad', vocab: ['信号']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'classroom',
        scene: '📍 Phòng học',
        expression: 'happy',
        q: 'Tiểu Mỹ muốn động viên: "Đừng lo, phải có lòng tin". Cô ấy nên nói thế nào?',
        options: [
          { text: '别担心，要有信心！', pinyin: 'Bié dānxīn, yào yǒu xìnxīn!', meaning: 'Đừng lo, phải có lòng tin!', correct: true,
            feedback: 'Đúng! 信心 = lòng tin, sự tự tin.' },
          { text: '别担心，要有信号！', pinyin: 'Bié dānxīn, yào yǒu xìnhào!', meaning: '(Sai nghĩa)', correct: false,
            feedback: '信号 = tín hiệu (sóng), không phải lòng tin.' },
          { text: '别担心，要有信息！', pinyin: 'Bié dānxīn, yào yǒu xìnxī!', meaning: '(Sai nghĩa)', correct: false,
            feedback: '信息 = thông tin, không phải lòng tin.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '别担心，要有信心！你看这条新闻，心情就会变好。',
        pinyin: 'Bié dānxīn, yào yǒu xìnxīn! Nǐ kàn zhè tiáo xīnwén, xīnqíng jiù huì biàn hǎo.',
        meaning: 'Đừng lo, phải có lòng tin! Cậu xem tin này đi, tâm trạng sẽ tốt lên.',
        expression: 'happy', vocab: ['信心', '新闻', '心情']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"网站" có nghĩa là gì?',
            options: ['trang web', 'hình ảnh', 'tin tức', 'thông tin'],
            answer: 0
          },
          {
            q: 'Phân biệt: từ nào nghĩa là "lòng tin, sự tự tin"?',
            options: ['信心', '信号', '信息', '信用卡'],
            answer: 0
          },
          {
            q: '"心情" có nghĩa là gì?',
            options: ['tâm trạng', 'trong lòng', 'hành vi', 'họ tên'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Khuôn viên trường · Tiếp tục', bg: 'campus',
        cast: ['mai', 'xiaomei'],
        text: 'Hai bạn đi dạo quanh khuôn viên để thử tín hiệu.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '校园里行人不多，信号好多了。',
        pinyin: 'Xiàoyuán lǐ xíngrén bù duō, xìnhào hǎo duō le.',
        meaning: 'Trong khuôn viên người đi bộ không nhiều, tín hiệu tốt hơn nhiều rồi.',
        expression: 'happy', vocab: ['校园', '行人']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '哈哈，你刚才那个笑话儿真好笑！我心中很开心。',
        pinyin: 'Hāhā, nǐ gāngcái nàge xiàohuar zhēn hǎoxiào! Wǒ xīnzhōng hěn kāixīn.',
        meaning: 'Haha, câu chuyện cười vừa nãy của cậu thật buồn cười! Trong lòng tớ rất vui.',
        expression: 'happy', vocab: ['笑话儿', '心中']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'campus',
        scene: '📍 Khuôn viên trường',
        expression: 'curious',
        q: 'Mai muốn nhắc "Hành vi đó không tốt". Cô ấy nên nói thế nào?',
        options: [
          { text: '那个行为不好。', pinyin: 'Nàge xíngwéi bù hǎo.', meaning: 'Hành vi đó không tốt.', correct: true,
            feedback: 'Đúng! 行为 = hành vi.' },
          { text: '那个行人不好。', pinyin: 'Nàge xíngrén bù hǎo.', meaning: 'Người đi bộ đó không tốt.', correct: false,
            feedback: '行人 = người đi bộ, không phải hành vi.' },
          { text: '那个笑话不好。', pinyin: 'Nàge xiàohua bù hǎo.', meaning: 'Câu chuyện cười đó không hay.', correct: false,
            feedback: '笑话 = chuyện cười, không phải hành vi.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '那个行为确实不好，别学。对了，还有个问题：报名能用信用卡吗？别说笑话了。',
        pinyin: 'Nàge xíngwéi quèshí bù hǎo, bié xué. Duìle, hái yǒu gè wèntí: bàomíng néng yòng xìnyòngkǎ ma? Bié shuō xiàohua le.',
        meaning: 'Hành vi đó đúng là không tốt, đừng học theo. À, còn một vấn đề: đăng ký dùng thẻ tín dụng được không? Đừng nói đùa nữa.',
        expression: 'curious', vocab: ['行为', '问题', '信用卡', '笑话']
      }
    ],
    vocab: [
      { h: '挺好', p: 'tǐng hǎo', v: 'khá tốt, ổn đấy', e: 'very good' },
      { h: '同时', p: 'tóngshí', v: 'đồng thời, cùng lúc', e: 'at the same time' },
      { h: '图片', p: 'túpiàn', v: 'hình ảnh, tranh ảnh', e: 'picture' },
      { h: '外地', p: 'wàidì', v: 'nơi khác, ngoại tỉnh', e: 'parts of the country other than where one is' },
      { h: '网站', p: 'wǎngzhàn', v: 'trang web', e: 'website' },
      { h: '问题', p: 'wèntí', v: 'vấn đề, câu hỏi', e: 'question' },
      { h: '小组', p: 'xiǎozǔ', v: 'nhóm nhỏ', e: 'group' },
      { h: '校园', p: 'xiàoyuán', v: 'khuôn viên trường', e: 'campus' },
      { h: '笑话', p: 'xiàohua', v: 'chuyện cười, lời nói đùa', e: 'joke' },
      { h: '笑话儿', p: 'xiàohuar', v: 'chuyện cười (khẩu ngữ)', e: 'Joke' },
      { h: '心情', p: 'xīnqíng', v: 'tâm trạng', e: 'mood' },
      { h: '心中', p: 'xīnzhōng', v: 'trong lòng', e: 'central point' },
      { h: '新闻', p: 'xīnwén', v: 'tin tức', e: 'news' },
      { h: '信号', p: 'xìnhào', v: 'tín hiệu', e: 'signal' },
      { h: '信息', p: 'xìnxī', v: 'thông tin', e: 'information' },
      { h: '信心', p: 'xìnxīn', v: 'lòng tin, sự tự tin', e: 'confidence' },
      { h: '信用卡', p: 'xìnyòngkǎ', v: 'thẻ tín dụng', e: 'credit card' },
      { h: '行人', p: 'xíngrén', v: 'người đi bộ', e: 'pedestrian' },
      { h: '行为', p: 'xíngwéi', v: 'hành vi', e: 'action' },
      { h: '姓名', p: 'xìngmíng', v: 'họ tên', e: 'full name (surname and given name)' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我们小组要做一个___。', options: ['网站', '图片', '新闻'], answer: '网站' },
        { type: 'fill', sentence: '网站上要放___和信息。', options: ['图片', '信号', '姓名'], answer: '图片' },
        { type: 'fill', sentence: '也要填___。', options: ['姓名', '心情', '行人'], answer: '姓名' },
        { type: 'fill', sentence: '我们___要做网站。', options: ['小组', '校园', '新闻'], answer: '小组' },
        { type: 'fill', sentence: '___！这个主意不错。', options: ['挺好', '同时', '心中'], answer: '挺好' }
      ],
      normal: [
        { type: 'fill', sentence: '这里___不好，我有点担心。', options: ['信号', '信心', '信息'], answer: '信号' },
        { type: 'fill', sentence: '要有___！', options: ['信心', '信号', '信用卡'], answer: '信心' },
        { type: 'fill', sentence: '你看这条___。', options: ['新闻', '图片', '心情'], answer: '新闻' },
        { type: 'fill', sentence: '校园里___不多。', options: ['行人', '行为', '小组'], answer: '行人' },
        { type: 'fill', sentence: '我___很开心。', options: ['心中', '心情', '同时'], answer: '心中' },
        { type: 'order', words: ['网站', '做一个', '我们小组', '要'], answer: '我们小组要做一个网站' },
        { type: 'order', words: ['信心', '要', '有'], answer: '要有信心' }
      ],
      hard: [
        { type: 'fill', sentence: '那个___不好。', options: ['行为', '行人', '笑话'], answer: '行为' },
        { type: 'fill', sentence: '可以用___吗？', options: ['信用卡', '信号', '信息'], answer: '信用卡' },
        { type: 'fill', sentence: '___也要填姓名。', options: ['同时', '挺好', '外地'], answer: '同时' },
        { type: 'fill', sentence: '有___的朋友吗？', options: ['外地', '校园', '小组'], answer: '外地' },
        { type: 'translate', prompt: 'Đừng lo, phải có lòng tin!', answer: '别担心，要有信心！' },
        { type: 'translate', prompt: 'Trong khuôn viên người đi bộ không nhiều.', answer: '校园里行人不多。' }
      ]
    }
  },
  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 50: Từ chức năng & liên từ (8) — 20 từ
  // 学期, 样子, 也许, 一共, 一路平安, 一生, 一直, 已经, 以后, 以前, 以外, 因为, 音节, 影片, 游客, 有空儿, 有一点儿, 有意思, 又, 原因
  // ───────────────────────────────────────────────────────────────────────────
  50: {
    id: 50,
    level: 2,
    title: 'Từ chức năng & liên từ (8)',
    context: 'Cuối học kỳ, buổi gặp mặt kết thúc. Bạn cũ sắp lên đường về nước. Mọi người cùng nhau xem phim kỷ niệm và tạm biệt.',
    vocabPreview: ['学期', '已经', '一直', '一路平安', '原因'],
    objectives: [
      'Dùng khung 除了…以外，还… (ngoài…ra, còn…)',
      'Diễn đạt việc đã hoàn tất bằng 已经…了',
      'Dùng bổ ngữ khả năng 听得懂 (nghe hiểu được)',
      'Nói về kết thúc học kỳ, chia tay (学期 · 原因 · 一直)'
    ],
    grammarNotes: [
      { point: '除了…以外，还… — ngoài…ra, còn…',
        explain: 'Khung này bổ sung thêm đối tượng / việc ngoài cái đã nêu.',
        examples: [
          { zh: '除了学生以外，还有很多游客。', py: 'Chúle xuésheng yǐwài, hái yǒu hěn duō yóukè.', vi: 'Ngoài học sinh ra, còn có nhiều du khách.' }
        ] },
      { point: '已经…了 — đã…rồi',
        explain: 'Khung “已经 + … + 了” diễn đạt việc đã hoàn thành / đạt mức.',
        examples: [
          { zh: '这个学期已经快结束了。', py: 'Zhège xuéqī yǐjīng kuài jiéshù le.', vi: 'Học kỳ này đã sắp kết thúc rồi.' }
        ] },
      { point: '听得懂 — bổ ngữ khả năng',
        explain: 'V + 得 + kết quả = có thể…; phủ định V + 不 + kết quả (听不懂).',
        examples: [
          { zh: '每个音节我都听得懂了。', py: 'Měi gè yīnjié wǒ dōu tīng de dǒng le.', vi: 'Mỗi âm tiết tớ đều nghe hiểu được.' }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Phòng học · Cuối học kỳ', bg: 'classroom',
        cast: ['mai', 'xiaomei'],
        text: 'Học kỳ đã gần kết thúc, buổi gặp mặt cũng tới hồi tạm biệt.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这个学期已经快结束了，时间过得真快！',
        pinyin: 'Zhège xuéqī yǐjīng kuài jiéshù le, shíjiān guò de zhēn kuài!',
        meaning: 'Học kỳ này đã sắp kết thúc rồi, thời gian trôi thật nhanh!',
        expression: 'sad', vocab: ['学期', '已经']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '是啊，以前我们一直在一起，以后就少见了。',
        pinyin: 'Shì a, yǐqián wǒmen yìzhí zài yìqǐ, yǐhòu jiù shǎo jiàn le.',
        meaning: 'Ừ, trước đây chúng ta luôn ở bên nhau, sau này sẽ ít gặp hơn.',
        expression: 'sad', vocab: ['以前', '一直', '以后']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '别难过！也许放假以后我们又能见面。',
        pinyin: 'Bié nánguò! Yěxǔ fàngjià yǐhòu wǒmen yòu néng jiànmiàn.',
        meaning: 'Đừng buồn! Có lẽ sau kỳ nghỉ chúng ta lại có thể gặp nhau.',
        expression: 'happy', vocab: ['也许', '又']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '今天来的游客一共有多少人？',
        pinyin: 'Jīntiān lái de yóukè yígòng yǒu duōshǎo rén?',
        meaning: 'Du khách đến hôm nay tổng cộng có bao nhiêu người?',
        expression: 'curious', vocab: ['游客', '一共']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'classroom',
        scene: '📍 Phòng học',
        expression: 'curious',
        q: 'Tiểu Mỹ muốn hỏi "Vì sao nhiều người đến thế?". Cô ấy nên nói thế nào?',
        options: [
          { text: '因为什么来了这么多人？', pinyin: 'Yīnwèi shénme lái le zhème duō rén?', meaning: 'Vì sao mà đến nhiều người thế?', correct: true,
            feedback: 'Đúng! 因为 = vì, bởi vì (chỉ nguyên nhân).' },
          { text: '以外什么来了这么多人？', pinyin: 'Yǐwài shénme lái le zhème duō rén?', meaning: '(Sai nghĩa)', correct: false,
            feedback: '以外 = ngoài ra, không dùng để hỏi nguyên nhân.' },
          { text: '一共什么来了这么多人？', pinyin: 'Yígòng shénme lái le zhème duō rén?', meaning: '(Sai nghĩa)', correct: false,
            feedback: '一共 = tổng cộng, không phải nguyên nhân.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '原因很简单，因为这次活动很有意思！除了学生以外，还有很多游客。',
        pinyin: 'Yuányīn hěn jiǎndān, yīnwèi zhè cì huódòng hěn yǒuyìsi! Chúle xuésheng yǐwài, hái yǒu hěn duō yóukè.',
        meaning: 'Nguyên nhân rất đơn giản, vì hoạt động lần này rất thú vị! Ngoài học sinh ra, còn có rất nhiều du khách.',
        expression: 'happy', vocab: ['原因', '因为', '有意思', '以外']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"已经" có nghĩa là gì?',
            options: ['đã, đã rồi', 'sau này', 'trước đây', 'có lẽ'],
            answer: 0
          },
          {
            q: '"因为" và "原因" — từ nào là "nguyên nhân" (danh từ)?',
            options: ['原因', '因为', '以外', '一共'],
            answer: 0
          },
          {
            q: '"有意思" có nghĩa là gì?',
            options: ['thú vị', 'có lẽ', 'tổng cộng', 'luôn luôn'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Phòng học · Buổi chia tay', bg: 'classroom',
        cast: ['mai', 'xiaomei', 'laoli'],
        text: 'Cả lớp cùng nhau xem một bộ phim ngắn về một học kỳ đã qua.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '这部影片记录了大家学习的样子，很感人。',
        pinyin: 'Zhè bù yǐngpiàn jìlù le dàjiā xuéxí de yàngzi, hěn gǎnrén.',
        meaning: 'Bộ phim này ghi lại dáng vẻ học tập của mọi người, rất cảm động.',
        expression: 'happy', vocab: ['影片', '样子']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '老师，每个音节我都听得懂了！这一生我都不会忘记。',
        pinyin: 'Lǎoshī, měi gè yīnjié wǒ dōu tīng de dǒng le! Zhè yìshēng wǒ dōu bú huì wàngjì.',
        meaning: 'Thầy ơi, mỗi âm tiết em đều nghe hiểu được rồi! Cả đời này em sẽ không quên.',
        expression: 'happy', vocab: ['音节', '一生']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'], bg: 'classroom',
        scene: '📍 Phòng học',
        expression: 'happy',
        q: 'Bạn cũ sắp lên máy bay về nước. Tiểu Mỹ nên chúc thế nào?',
        options: [
          { text: '一路平安！', pinyin: 'Yílù píng’ān!', meaning: 'Thượng lộ bình an!', correct: true,
            feedback: 'Đúng! 一路平安 = thượng lộ bình an, chúc đi đường an toàn.' },
          { text: '一直平安！', pinyin: 'Yìzhí píng’ān!', meaning: '(Không phải lời chúc cố định)', correct: false,
            feedback: '一直 = luôn luôn, không phải lời chúc lên đường.' },
          { text: '一共平安！', pinyin: 'Yígòng píng’ān!', meaning: '(Không hợp lý)', correct: false,
            feedback: '一共 = tổng cộng, không dùng làm lời chúc.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '一路平安！你有空儿一定要回来。我有一点儿舍不得。',
        pinyin: 'Yílù píng’ān! Nǐ yǒu kòngr yídìng yào huílái. Wǒ yǒu yìdiǎnr shěbude.',
        meaning: 'Thượng lộ bình an! Khi nào rảnh nhất định phải về nhé. Tớ có chút lưu luyến.',
        expression: 'sad', vocab: ['一路平安', '有空儿', '有一点儿']
      }
    ],
    vocab: [
      { h: '学期', p: 'xuéqī', v: 'học kỳ', e: 'term' },
      { h: '样子', p: 'yàngzi', v: 'dáng vẻ, bộ dạng', e: 'appearance' },
      { h: '也许', p: 'yěxǔ', v: 'có lẽ, có thể', e: 'perhaps' },
      { h: '一共', p: 'yígòng', v: 'tổng cộng', e: 'altogether' },
      { h: '一路平安', p: 'yílù píng’ān', v: 'thượng lộ bình an', e: 'to have a pleasant journey' },
      { h: '一生', p: 'yìshēng', v: 'cả đời, cả cuộc đời', e: 'all one\\\'s life' },
      { h: '一直', p: 'yìzhí', v: 'luôn luôn, mãi', e: 'straight (in a straight line)' },
      { h: '已经', p: 'yǐjīng', v: 'đã, đã rồi', e: 'already' },
      { h: '以后', p: 'yǐhòu', v: 'sau này, về sau', e: 'after' },
      { h: '以前', p: 'yǐqián', v: 'trước đây, trước kia', e: 'before' },
      { h: '以外', p: 'yǐwài', v: 'ngoài ra, ngoài... ra', e: 'apart from' },
      { h: '因为', p: 'yīnwèi', v: 'vì, bởi vì', e: 'because' },
      { h: '音节', p: 'yīnjié', v: 'âm tiết', e: 'syllable' },
      { h: '影片', p: 'yǐngpiàn', v: 'bộ phim', e: 'a copy of a film' },
      { h: '游客', p: 'yóukè', v: 'du khách', e: 'traveler' },
      { h: '有空儿', p: 'yǒu kòngr', v: 'có thời gian rảnh', e: 'available' },
      { h: '有一点儿', p: 'yǒu yìdiǎnr', v: 'có một chút', e: 'a bit' },
      { h: '有意思', p: 'yǒuyìsi', v: 'thú vị, hay', e: 'interesting' },
      { h: '又', p: 'yòu', v: 'lại (lặp lại)', e: 'again' },
      { h: '原因', p: 'yuányīn', v: 'nguyên nhân, lý do', e: 'cause' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '这个___已经快结束了。', options: ['学期', '样子', '原因'], answer: '学期' },
        { type: 'fill', sentence: '时间___快结束了。', options: ['已经', '也许', '一共'], answer: '已经' },
        { type: 'fill', sentence: '我们___在一起。', options: ['一直', '已经', '又'], answer: '一直' },
        { type: 'fill', sentence: '游客___有多少人？', options: ['一共', '一直', '也许'], answer: '一共' },
        { type: 'fill', sentence: '这次活动很___！', options: ['有意思', '有空儿', '有一点儿'], answer: '有意思' }
      ],
      normal: [
        { type: 'fill', sentence: '___我们一直在一起，___就少见了。', options: ['以前…以后', '因为…所以', '虽然…但是'], answer: '以前…以后' },
        { type: 'fill', sentence: '___放假以后我们又能见面。', options: ['也许', '已经', '一共'], answer: '也许' },
        { type: 'fill', sentence: '___很简单。', options: ['原因', '因为', '以外'], answer: '原因' },
        { type: 'fill', sentence: '除了学生___，还有很多游客。', options: ['以外', '以后', '以前'], answer: '以外' },
        { type: 'fill', sentence: '这部___很感人。', options: ['影片', '样子', '音节'], answer: '影片' },
        { type: 'order', words: ['已经', '学期', '这个', '快结束了'], answer: '这个学期已经快结束了' },
        { type: 'order', words: ['又', '我们', '能见面'], answer: '我们又能见面' }
      ],
      hard: [
        { type: 'fill', sentence: '___这次活动很有意思！', options: ['因为', '原因', '以外'], answer: '因为' },
        { type: 'fill', sentence: '这部影片记录了大家学习的___。', options: ['样子', '原因', '音节'], answer: '样子' },
        { type: 'fill', sentence: '你___一定要回来。', options: ['有空儿', '有意思', '有一点儿'], answer: '有空儿' },
        { type: 'fill', sentence: '每个___我都听得懂了。', options: ['音节', '影片', '样子'], answer: '音节' },
        { type: 'translate', prompt: 'Thượng lộ bình an!', answer: '一路平安！' },
        { type: 'translate', prompt: 'Học kỳ này đã sắp kết thúc rồi.', answer: '这个学期已经快结束了。' }
      ]
    }
  },
  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 51: Từ chức năng & liên từ (9) — 18 từ
  // 越来越, 早餐, 早就, 找出, 照片, 正好, 只要, 中餐, 中心, 重新, 主人, 住房, 字典, 组长, 作文, 座位, 表示, 称(chēng)
  // ───────────────────────────────────────────────────────────────────────────
  51: {
    id: 51,
    level: 2,
    title: 'Từ chức năng & liên từ (9)',
    context: 'Sau kỳ nghỉ, Mai trở lại trung tâm học tập. Cô làm tổ trưởng, viết bài văn và sắp xếp lại chỗ ngồi cho nhóm.',
    vocabPreview: ['中心', '组长', '作文', '只要', '重新'],
    objectives: [
      'Dùng câu chữ 把 (把照片放进作文里)',
      'Dùng cặp 只要…就… (chỉ cần…là…)',
      'Diễn đạt biến đổi tăng dần bằng 越来越',
      'Nói về làm tổ trưởng, viết văn (组长 · 作文 · 重新)'
    ],
    grammarNotes: [
      { point: '把 — câu chữ 把',
        explain: 'Khung “把 + tân ngữ + động từ + thành phần khác” nhấn việc xử lý đối tượng và kết quả của nó.',
        examples: [
          { zh: '我把这张照片放进作文里。', py: 'Wǒ bǎ zhè zhāng zhàopiàn fàngjìn zuòwén lǐ.', vi: 'Tớ để bức ảnh này vào bài văn.' }
        ] },
      { point: '只要…就… — chỉ cần…là…',
        explain: '只要 nêu điều kiện đủ, vế sau dùng 就 nêu kết quả.',
        examples: [
          { zh: '只要努力就能做到！', py: 'Zhǐyào nǔlì jiù néng zuòdào!', vi: 'Chỉ cần cố gắng là làm được!' }
        ] },
      { point: '越来越 — càng ngày càng',
        explain: '越来越 + tính từ / động từ chỉ mức độ tăng dần theo thời gian.',
        examples: [
          { zh: '大家越来越听你的。', py: 'Dàjiā yuèláiyuè tīng nǐ de.', vi: 'Mọi người càng ngày càng nghe cậu.' }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Trung tâm học tập · Buổi sáng', bg: 'library',
        cast: ['mai', 'xiaomei'],
        text: 'Mai đến trung tâm học tập sớm, mang theo bữa sáng.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我早就到学习中心了，还买了早餐。',
        pinyin: 'Wǒ zǎojiù dào xuéxí zhōngxīn le, hái mǎi le zǎocān.',
        meaning: 'Tớ đã đến trung tâm học tập từ sớm rồi, còn mua cả bữa sáng.',
        expression: 'happy', vocab: ['早就', '中心', '早餐']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '正好！你现在是组长，大家越来越听你的。',
        pinyin: 'Zhènghǎo! Nǐ xiànzài shì zǔzhǎng, dàjiā yuèláiyuè tīng nǐ de.',
        meaning: 'Vừa hay! Cậu giờ là tổ trưởng, mọi người càng ngày càng nghe cậu.',
        expression: 'happy', vocab: ['正好', '组长', '越来越']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '今天要写作文。我先用字典找出几个生词。',
        pinyin: 'Jīntiān yào xiě zuòwén. Wǒ xiān yòng zìdiǎn zhǎochū jǐ gè shēngcí.',
        meaning: 'Hôm nay phải viết bài văn. Tớ dùng từ điển tra ra vài từ mới trước.',
        expression: 'focused', vocab: ['作文', '字典', '找出']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'library',
        scene: '📍 Trung tâm học tập',
        expression: 'curious',
        q: 'Tiểu Mỹ muốn nói "Chỉ cần cố gắng là làm được". Cô ấy nên nói thế nào?',
        options: [
          { text: '只要努力就能做到。', pinyin: 'Zhǐyào nǔlì jiù néng zuòdào.', meaning: 'Chỉ cần cố gắng là làm được.', correct: true,
            feedback: 'Đúng! 只要...就... = chỉ cần... thì...' },
          { text: '正好努力就能做到。', pinyin: 'Zhènghǎo nǔlì jiù néng zuòdào.', meaning: '(Sai cấu trúc)', correct: false,
            feedback: '正好 = vừa hay, vừa lúc; không dùng làm "chỉ cần".' },
          { text: '重新努力就能做到。', pinyin: 'Chóngxīn nǔlì jiù néng zuòdào.', meaning: 'Cố gắng lại từ đầu là làm được.', correct: false,
            feedback: '重新 = lại từ đầu, làm lại; nghĩa khác "chỉ cần".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '只要努力就能做到！写错了就重新写。',
        pinyin: 'Zhǐyào nǔlì jiù néng zuòdào! Xiě cuò le jiù chóngxīn xiě.',
        meaning: 'Chỉ cần cố gắng là làm được! Viết sai thì viết lại từ đầu.',
        expression: 'happy', vocab: ['只要', '重新']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"越来越" có nghĩa là gì?',
            options: ['càng ngày càng', 'vừa hay', 'chỉ cần', 'lại từ đầu'],
            answer: 0
          },
          {
            q: '"只要...就..." dùng để diễn đạt điều gì?',
            options: ['chỉ cần... thì...', 'tuy... nhưng...', 'vì... nên...', 'vừa... vừa...'],
            answer: 0
          },
          {
            q: '"组长" có nghĩa là gì?',
            options: ['tổ trưởng', 'chủ nhân', 'từ điển', 'bài văn'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Trung tâm học tập · Tiếp tục', bg: 'library',
        cast: ['mai', 'xiaomei'],
        text: 'Hai bạn sắp xếp lại chỗ ngồi cho cả nhóm.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这些座位不够，我们重新安排一下吧。',
        pinyin: 'Zhèxiē zuòwèi bú gòu, wǒmen chóngxīn ānpái yíxià ba.',
        meaning: 'Mấy chỗ ngồi này không đủ, chúng ta sắp xếp lại một chút đi.',
        expression: 'focused', vocab: ['座位']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '好。这间住房的主人是谁？我们要表示感谢。',
        pinyin: 'Hǎo. Zhè jiān zhùfáng de zhǔrén shì shéi? Wǒmen yào biǎoshì gǎnxiè.',
        meaning: 'Được. Chủ nhân của căn nhà này là ai? Chúng ta phải bày tỏ lòng cảm ơn.',
        expression: 'curious', vocab: ['住房', '主人', '表示']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'library',
        scene: '📍 Trung tâm học tập',
        expression: 'curious',
        q: 'Mai muốn nói "Mọi người gọi cô ấy là tổ trưởng". Cô ấy nên dùng từ nào cho "gọi là"?',
        options: [
          { text: '大家称她为组长。', pinyin: 'Dàjiā chēng tā wéi zǔzhǎng.', meaning: 'Mọi người gọi cô ấy là tổ trưởng.', correct: true,
            feedback: 'Đúng! 称 (chēng) = gọi là, xưng là.' },
          { text: '大家表示她为组长。', pinyin: 'Dàjiā biǎoshì tā wéi zǔzhǎng.', meaning: '(Sai nghĩa)', correct: false,
            feedback: '表示 = bày tỏ, biểu thị; không dùng cho "gọi là".' },
          { text: '大家正好她为组长。', pinyin: 'Dàjiā zhènghǎo tā wéi zǔzhǎng.', meaning: '(Không hợp lý)', correct: false,
            feedback: '正好 = vừa hay, không phải "gọi là".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '大家称她为组长。中午我们一起吃中餐吧！',
        pinyin: 'Dàjiā chēng tā wéi zǔzhǎng. Zhōngwǔ wǒmen yìqǐ chī zhōngcān ba!',
        meaning: 'Mọi người gọi cô ấy là tổ trưởng. Trưa nay chúng ta cùng ăn cơm trưa nhé!',
        expression: 'happy', vocab: ['称', '中餐']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '好！我把这张照片放进作文里，做个纪念。',
        pinyin: 'Hǎo! Wǒ bǎ zhè zhāng zhàopiàn fàng jìn zuòwén lǐ, zuò gè jìniàn.',
        meaning: 'Được! Tớ để bức ảnh này vào bài văn, làm kỷ niệm.',
        expression: 'happy', vocab: ['照片']
      }
    ],
    vocab: [
      { h: '越来越', p: 'yuèláiyuè', v: 'càng ngày càng', e: 'more and more' },
      { h: '早餐', p: 'zǎocān', v: 'bữa sáng', e: 'breakfast' },
      { h: '早就', p: 'zǎojiù', v: 'sớm đã, từ lâu đã', e: 'already at an earlier time' },
      { h: '找出', p: 'zhǎochū', v: 'tìm ra', e: 'to find' },
      { h: '照片', p: 'zhàopiàn', v: 'bức ảnh', e: 'photograph' },
      { h: '正好', p: 'zhènghǎo', v: 'vừa hay, vừa lúc', e: 'just (in time)' },
      { h: '只要', p: 'zhǐyào', v: 'chỉ cần', e: 'if only' },
      { h: '中餐', p: 'zhōngcān', v: 'cơm trưa, món Trung', e: 'lunch' },
      { h: '中心', p: 'zhōngxīn', v: 'trung tâm', e: 'center' },
      { h: '重新', p: 'chóngxīn', v: 'lại từ đầu, làm lại', e: 'again' },
      { h: '主人', p: 'zhǔrén', v: 'chủ nhân', e: 'master' },
      { h: '住房', p: 'zhùfáng', v: 'nhà ở, chỗ ở', e: 'housing' },
      { h: '字典', p: 'zìdiǎn', v: 'từ điển (chữ)', e: 'Chinese character dictionary (containing entries for single characters, contrasted with a 词典, which has entries for words of one or more characters)' },
      { h: '组长', p: 'zǔzhǎng', v: 'tổ trưởng', e: 'group leader' },
      { h: '作文', p: 'zuòwén', v: 'bài văn, bài tập làm văn', e: 'to write an essay' },
      { h: '座位', p: 'zuòwèi', v: 'chỗ ngồi', e: 'seat' },
      { h: '表示', p: 'biǎoshì', v: 'biểu thị, bày tỏ', e: 'to express, to indicate, to show' },
      { h: '称', p: 'chēng', v: 'gọi là, xưng là', e: 'to fit' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我早就到学习___了。', options: ['中心', '中餐', '字典'], answer: '中心' },
        { type: 'fill', sentence: '我还买了___。', options: ['早餐', '中餐', '作文'], answer: '早餐' },
        { type: 'fill', sentence: '你现在是___。', options: ['组长', '主人', '座位'], answer: '组长' },
        { type: 'fill', sentence: '今天要写___。', options: ['作文', '照片', '字典'], answer: '作文' },
        { type: 'fill', sentence: '___！你来得真巧。', options: ['正好', '只要', '重新'], answer: '正好' }
      ],
      normal: [
        { type: 'fill', sentence: '大家___听你的。', options: ['越来越', '早就', '正好'], answer: '越来越' },
        { type: 'fill', sentence: '___努力就能做到。', options: ['只要', '正好', '重新'], answer: '只要' },
        { type: 'fill', sentence: '写错了就___写。', options: ['重新', '只要', '早就'], answer: '重新' },
        { type: 'fill', sentence: '我先用___找出几个生词。', options: ['字典', '作文', '照片'], answer: '字典' },
        { type: 'fill', sentence: '这些___不够。', options: ['座位', '住房', '主人'], answer: '座位' },
        { type: 'order', words: ['组长', '你', '是', '现在'], answer: '你现在是组长' },
        { type: 'order', words: ['只要', '努力', '就能做到'], answer: '只要努力就能做到' }
      ],
      hard: [
        { type: 'fill', sentence: '这间___的主人是谁？', options: ['住房', '中心', '座位'], answer: '住房' },
        { type: 'fill', sentence: '我们要___感谢。', options: ['表示', '重新', '找出'], answer: '表示' },
        { type: 'fill', sentence: '大家___她为组长。', options: ['称', '表示', '正好'], answer: '称' },
        { type: 'fill', sentence: '我把这张___放进作文里。', options: ['照片', '字典', '座位'], answer: '照片' },
        { type: 'translate', prompt: 'Chỉ cần cố gắng là làm được!', answer: '只要努力就能做到！' },
        { type: 'translate', prompt: 'Mọi người gọi cô ấy là tổ trưởng.', answer: '大家称她为组长。' }
      ]
    }
  },
  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 52: Tính từ miêu tả (1) — 20 từ
  // 安静, 安全, 饱, 便宜, 遍, 不错, 不够, 不好意思, 不满, 不同, 不行, 常见, 常用, 大大, 低, 短, 多么, 方便, 感动, 高级
  // ───────────────────────────────────────────────────────────────────────────
  52: {
    id: 52,
    level: 2,
    title: 'Tính từ miêu tả (1)',
    context: 'Cả nhóm tìm một quán ăn mới gần trường để ăn mừng. Mai và Tiểu Mỹ miêu tả quán và món ăn.',
    vocabPreview: ['安静', '便宜', '不错', '方便', '感动'],
    objectives: [
      'Diễn đạt hai tính chất song song bằng 又…又…',
      'Cảm thán bằng 多么…啊',
      'Dùng bổ ngữ khả năng phủ định V不… (吃不饱)',
      'Miêu tả quán ăn, món ăn (安静 · 便宜 · 高级)'
    ],
    grammarNotes: [
      { point: '又…又… — vừa…vừa…',
        explain: 'Nối hai tính chất / động tác cùng tồn tại của một chủ thể.',
        examples: [
          { zh: '又方便又便宜。', py: 'Yòu fāngbiàn yòu piányi.', vi: 'Vừa tiện vừa rẻ.' }
        ] },
      { point: '多么…啊 — biết bao (cảm thán)',
        explain: 'Khung “多么 + tính từ + 啊” bộc lộ cảm xúc mạnh.',
        examples: [
          { zh: '老师多么好啊！', py: 'Lǎoshī duōme hǎo a!', vi: 'Thầy tốt biết bao!' }
        ] },
      { point: 'V不… — bổ ngữ khả năng phủ định',
        explain: 'V + 不 + kết quả nghĩa “không thể…”; dạng khẳng định là V得… (吃得饱).',
        examples: [
          { zh: '这样吃不饱。', py: 'Zhèyàng chībubǎo.', vi: 'Ăn vậy không no.' }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Quán ăn gần trường · Buổi trưa', bg: 'cafeteria',
        cast: ['mai', 'xiaomei'],
        text: 'Cả nhóm tìm thấy một quán ăn mới yên tĩnh ngay gần cổng trường.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这家店很安静，环境不错！',
        pinyin: 'Zhè jiā diàn hěn ānjìng, huánjìng búcuò!',
        meaning: 'Quán này rất yên tĩnh, không gian khá tốt!',
        expression: 'happy', vocab: ['安静', '不错']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '而且离学校很近，又方便又便宜。',
        pinyin: 'Érqiě lí xuéxiào hěn jìn, yòu fāngbiàn yòu piányi.',
        meaning: 'Hơn nữa cách trường rất gần, vừa tiện vừa rẻ.',
        expression: 'happy', vocab: ['方便', '便宜']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这里很安全，价格也低。这道菜很常见，我们点吧。',
        pinyin: 'Zhèlǐ hěn ānquán, jiàgé yě dī. Zhè dào cài hěn chángjiàn, wǒmen diǎn ba.',
        meaning: 'Ở đây rất an toàn, giá cũng thấp. Món này rất thường gặp, chúng ta gọi đi.',
        expression: 'happy', vocab: ['安全', '低', '常见']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'cafeteria',
        scene: '📍 Quán ăn',
        expression: 'curious',
        q: 'Mai thấy phần ăn ít. Cô ấy muốn nói "Như vậy không đủ no". Nên nói thế nào?',
        options: [
          { text: '这样吃不饱，分量不够。', pinyin: 'Zhèyàng chī bù bǎo, fènliàng bú gòu.', meaning: 'Ăn vậy không no, phần ăn không đủ.', correct: true,
            feedback: 'Đúng! 饱 = no; 不够 = không đủ.' },
          { text: '这样吃不行，分量不同。', pinyin: 'Zhèyàng chī bù xíng, fènliàng bù tóng.', meaning: 'Ăn vậy không được, phần ăn khác nhau.', correct: false,
            feedback: '不同 = khác nhau; không hợp với ý "không đủ no".' },
          { text: '这样吃不错，分量不满。', pinyin: 'Zhèyàng chī búcuò, fènliàng bùmǎn.', meaning: '(Mâu thuẫn)', correct: false,
            feedback: '不错 = khá tốt (khen), mâu thuẫn với "không đủ".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这样吃不饱，分量不够。再加一份吧，不然不行。',
        pinyin: 'Zhèyàng chī bù bǎo, fènliàng bú gòu. Zài jiā yí fèn ba, bùrán bùxíng.',
        meaning: 'Ăn vậy không no, phần ăn không đủ. Thêm một phần đi, không thì không được.',
        expression: 'curious', vocab: ['饱', '不够', '不行']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"便宜" có nghĩa là gì?',
            options: ['rẻ', 'yên tĩnh', 'an toàn', 'thấp'],
            answer: 0
          },
          {
            q: 'Phân biệt: từ nào nghĩa là "no" (đã ăn đủ)?',
            options: ['饱', '不够', '不满', '不行'],
            answer: 0
          },
          {
            q: '"不错" có nghĩa là gì?',
            options: ['khá tốt, không tệ', 'không đủ', 'không được', 'khác nhau'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Quán ăn · Tiếp tục', bg: 'cafeteria',
        cast: ['mai', 'xiaomei', 'laoli'],
        text: 'Thầy Lý đến và ngồi cùng cả nhóm.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '这家店是高级餐厅吗？菜单上的字很短，很常用。',
        pinyin: 'Zhè jiā diàn shì gāojí cāntīng ma? Càidān shàng de zì hěn duǎn, hěn chángyòng.',
        meaning: 'Quán này là nhà hàng cao cấp à? Chữ trên thực đơn rất ngắn, rất thông dụng.',
        expression: 'curious', vocab: ['高级', '短', '常用']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '不是高级餐厅，但每道菜都不同，很好吃！',
        pinyin: 'Bú shì gāojí cāntīng, dàn měi dào cài dōu bùtóng, hěn hǎochī!',
        meaning: 'Không phải nhà hàng cao cấp, nhưng mỗi món đều khác nhau, rất ngon!',
        expression: 'happy', vocab: ['不同']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'], bg: 'cafeteria',
        scene: '📍 Quán ăn',
        expression: 'happy',
        q: 'Thầy mời cả nhóm ăn. Tiểu Mỹ muốn cảm thán "Thầy tốt biết bao!". Nên nói thế nào?',
        options: [
          { text: '老师多么好啊！', pinyin: 'Lǎoshī duōme hǎo a!', meaning: 'Thầy tốt biết bao!', correct: true,
            feedback: 'Đúng! 多么 = biết bao, biết mấy (cảm thán).' },
          { text: '老师不满好啊！', pinyin: 'Lǎoshī bùmǎn hǎo a!', meaning: '(Sai nghĩa)', correct: false,
            feedback: '不满 = bất mãn, không hài lòng; trái nghĩa với khen.' },
          { text: '老师大大好啊！', pinyin: 'Lǎoshī dàdà hǎo a!', meaning: '(Sai cấu trúc)', correct: false,
            feedback: '大大 = rất lớn, to lớn; không dùng cảm thán "tốt biết bao".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'],
        text: '老师多么好啊！我们都很感动，没有人不满。',
        pinyin: 'Lǎoshī duōme hǎo a! Wǒmen dōu hěn gǎndòng, méiyǒu rén bùmǎn.',
        meaning: 'Thầy tốt biết bao! Chúng em đều rất cảm động, không ai bất mãn cả.',
        expression: 'happy', vocab: ['多么', '感动', '不满']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '这道菜我吃了好几遍都吃不腻，大大地满足了！不好意思，我又饿了。',
        pinyin: 'Zhè dào cài wǒ chī le hǎojǐ biàn dōu chī bú nì, dàdà de mǎnzú le! Bù hǎoyìsi, wǒ yòu è le.',
        meaning: 'Món này tớ ăn mấy lượt rồi mà không ngán, thỏa mãn ghê! Ngại quá, tớ lại đói rồi.',
        expression: 'happy', vocab: ['遍', '大大', '不好意思']
      }
    ],
    vocab: [
      { h: '安静', p: 'ānjìng', v: 'yên tĩnh', e: 'quiet' },
      { h: '安全', p: 'ānquán', v: 'an toàn', e: 'safe' },
      { h: '饱', p: 'bǎo', v: 'no (đã ăn đủ)', e: 'to eat till full' },
      { h: '便宜', p: 'piányi', v: 'rẻ', e: 'convenient' },
      { h: '遍', p: 'biàn', v: 'lượt, lần (làm trọn vẹn)', e: 'time(s), all over, everywhere' },
      { h: '不错', p: 'búcuò', v: 'khá tốt, không tệ', e: 'correct' },
      { h: '不够', p: 'búgòu', v: 'không đủ', e: 'not enough' },
      { h: '不好意思', p: 'bù hǎoyìsi', v: 'ngại, ngượng', e: 'to feel embarrassed' },
      { h: '不满', p: 'bùmǎn', v: 'bất mãn, không hài lòng', e: 'resentful' },
      { h: '不同', p: 'bùtóng', v: 'khác nhau', e: 'different' },
      { h: '不行', p: 'bùxíng', v: 'không được', e: 'won\\\'t do' },
      { h: '常见', p: 'chángjiàn', v: 'thường gặp', e: 'commonly seen' },
      { h: '常用', p: 'chángyòng', v: 'thường dùng, thông dụng', e: 'in common usage' },
      { h: '大大', p: 'dàdà', v: 'rất, to lớn, đáng kể', e: 'greatly' },
      { h: '低', p: 'dī', v: 'thấp', e: 'low' },
      { h: '短', p: 'duǎn', v: 'ngắn', e: 'short' },
      { h: '多么', p: 'duōme', v: 'biết bao, biết mấy', e: 'how (wonderful etc)' },
      { h: '方便', p: 'fāngbiàn', v: 'tiện lợi', e: 'convenient' },
      { h: '感动', p: 'gǎndòng', v: 'cảm động', e: 'to move (sb)' },
      { h: '高级', p: 'gāojí', v: 'cao cấp', e: 'high level' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '这家店很___。', options: ['安静', '便宜', '不错'], answer: '安静' },
        { type: 'fill', sentence: '又方便又___。', options: ['便宜', '安全', '高级'], answer: '便宜' },
        { type: 'fill', sentence: '环境___！', options: ['不错', '不够', '不行'], answer: '不错' },
        { type: 'fill', sentence: '离学校很近，很___。', options: ['方便', '安静', '低'], answer: '方便' },
        { type: 'fill', sentence: '这里很___。', options: ['安全', '常见', '短'], answer: '安全' }
      ],
      normal: [
        { type: 'fill', sentence: '这样吃不___，分量不够。', options: ['饱', '满', '行'], answer: '饱' },
        { type: 'fill', sentence: '分量___。', options: ['不够', '不错', '不同'], answer: '不够' },
        { type: 'fill', sentence: '这道菜很___。', options: ['常见', '常用', '高级'], answer: '常见' },
        { type: 'fill', sentence: '价格也___。', options: ['低', '短', '饱'], answer: '低' },
        { type: 'fill', sentence: '菜单上的字很___。', options: ['短', '低', '饱'], answer: '短' },
        { type: 'order', words: ['安静', '这家店', '很'], answer: '这家店很安静' },
        { type: 'order', words: ['方便', '又', '便宜', '又'], answer: '又方便又便宜' }
      ],
      hard: [
        { type: 'fill', sentence: '我们都很___。', options: ['感动', '不满', '不行'], answer: '感动' },
        { type: 'fill', sentence: '老师___好啊！', options: ['多么', '大大', '不满'], answer: '多么' },
        { type: 'fill', sentence: '这道菜我吃了好几___。', options: ['遍', '低', '短'], answer: '遍' },
        { type: 'fill', sentence: '这是___餐厅吗？', options: ['高级', '常用', '安全'], answer: '高级' },
        { type: 'translate', prompt: 'Quán này rất yên tĩnh, không gian khá tốt!', answer: '这家店很安静，环境不错！' },
        { type: 'translate', prompt: 'Thầy tốt biết bao!', answer: '老师多么好啊！' }
      ]
    }
  },
  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 53: Tính từ miêu tả (2) — 20 từ
  // 公平, 故意, 合适, 黑, 红, 湖, 黄, 急, 加, 假, 健康, 近, 经常, 开心, 科学, 可爱, 可怕, 克, 快乐, 拉
  // ───────────────────────────────────────────────────────────────────────────
  53: {
    id: 53,
    level: 2,
    title: 'Tính từ miêu tả (2)',
    context: 'Cuối tuần, cả nhóm đi dạo ở hồ gần trường. Họ ngắm cảnh, nói về sức khỏe và tâm trạng vui vẻ.',
    vocabPreview: ['健康', '开心', '可爱', '合适', '快乐'],
    objectives: [
      'Nêu đối tượng tác động bằng 对 (对健康好)',
      'Diễn đạt hai tính chất bằng 又…又…',
      'Khuyên ngăn bằng 别 (别急 · 别生气)',
      'Miêu tả sức khỏe, tâm trạng (健康 · 开心 · 合适)'
    ],
    grammarNotes: [
      { point: '对…好 / 对…有作用',
        explain: '对 + đối tượng đặt trước vị ngữ để nêu “đối với… thì…”.',
        examples: [
          { zh: '这样对健康好。', py: 'Zhèyàng duì jiànkāng hǎo.', vi: 'Như vậy tốt cho sức khỏe.' },
          { zh: '运动对健康有很大的作用。', py: 'Yùndòng duì jiànkāng yǒu hěn dà de zuòyòng.', vi: 'Vận động có tác dụng lớn với sức khỏe.' }
        ] },
      { point: '又…又… — vừa…vừa…',
        explain: 'Nối hai tính chất cùng có ở một đối tượng.',
        examples: [
          { zh: '那只猫又黑又可爱。', py: 'Nà zhī māo yòu hēi yòu kě\'ài.', vi: 'Con mèo kia vừa đen vừa đáng yêu.' }
        ] },
      { point: '别 + V — đừng',
        explain: '别 + động từ là lời khuyên ngăn “đừng làm gì”.',
        examples: [
          { zh: '别急，慢慢来。', py: 'Bié jí, mànman lái.', vi: 'Đừng vội, từ từ thôi.' }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Bên hồ gần trường · Cuối tuần', bg: 'street',
        cast: ['mai', 'xiaomei'],
        text: 'Cuối tuần, Mai và Tiểu Mỹ đi dạo bên hồ gần trường.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '周末去湖边走走吧，离这儿很近！',
        pinyin: 'Zhōumò qù húbiān zǒuzou ba, lí zhèr hěn jìn!',
        meaning: 'Cuối tuần ra bờ hồ đi dạo đi, cách đây rất gần!',
        expression: 'happy', vocab: ['湖', '近']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好啊！这样对健康好，我经常运动。',
        pinyin: 'Hǎo a! Zhèyàng duì jiànkāng hǎo, wǒ jīngcháng yùndòng.',
        meaning: 'Được! Như vậy tốt cho sức khỏe, tớ thường xuyên vận động.',
        expression: 'happy', vocab: ['健康', '经常']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你看那只猫，又黑又可爱！旁边还有红色和黄色的花。',
        pinyin: 'Nǐ kàn nà zhī māo, yòu hēi yòu kě’ài! Pángbiān hái yǒu hóngsè hé huángsè de huā.',
        meaning: 'Cậu xem con mèo kia, vừa đen vừa đáng yêu! Bên cạnh còn có hoa màu đỏ và màu vàng.',
        expression: 'happy', vocab: ['黑', '可爱', '红', '黄']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'street',
        scene: '📍 Bên hồ',
        expression: 'curious',
        q: 'Tiểu Mỹ đi quá nhanh. Mai muốn nói "Đừng vội, từ từ thôi". Nên nói thế nào?',
        options: [
          { text: '别急，慢慢来。', pinyin: 'Bié jí, mànman lái.', meaning: 'Đừng vội, từ từ thôi.', correct: true,
            feedback: 'Đúng! 急 = vội, gấp.' },
          { text: '别加，慢慢来。', pinyin: 'Bié jiā, mànman lái.', meaning: '(Sai nghĩa)', correct: false,
            feedback: '加 = thêm, cộng; không phải "vội".' },
          { text: '别假，慢慢来。', pinyin: 'Bié jiǎ, mànman lái.', meaning: '(Sai nghĩa)', correct: false,
            feedback: '假 = giả; không phải "vội".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '别急，慢慢来。今天我很开心，很快乐！',
        pinyin: 'Bié jí, mànman lái. Jīntiān wǒ hěn kāixīn, hěn kuàilè!',
        meaning: 'Đừng vội, từ từ thôi. Hôm nay tớ rất vui, rất hạnh phúc!',
        expression: 'happy', vocab: ['急', '开心', '快乐']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"健康" có nghĩa là gì?',
            options: ['sức khỏe, khỏe mạnh', 'vui vẻ', 'đáng yêu', 'gần'],
            answer: 0
          },
          {
            q: '"别急" có nghĩa là gì?',
            options: ['đừng vội', 'đừng thêm', 'đừng giả', 'đừng kéo'],
            answer: 0
          },
          {
            q: '"可爱" có nghĩa là gì?',
            options: ['đáng yêu', 'đáng sợ', 'khoa học', 'công bằng'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Bên hồ · Tiếp tục', bg: 'street',
        cast: ['mai', 'xiaomei', 'laoli'],
        text: 'Thầy Lý cũng ra hồ và trò chuyện cùng hai bạn.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '这个安排很合适，也很公平，大家都满意。',
        pinyin: 'Zhège ānpái hěn héshì, yě hěn gōngpíng, dàjiā dōu mǎnyì.',
        meaning: 'Sắp xếp này rất hợp lý, cũng rất công bằng, mọi người đều hài lòng.',
        expression: 'happy', vocab: ['合适', '公平']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '老师，他不是故意的，请别生气。',
        pinyin: 'Lǎoshī, tā bú shì gùyì de, qǐng bié shēngqì.',
        meaning: 'Thầy ơi, bạn ấy không cố ý đâu, xin đừng giận.',
        expression: 'focused', vocab: ['故意']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'], bg: 'street',
        scene: '📍 Bên hồ',
        expression: 'curious',
        q: 'Mai muốn nói "Bộ phim đó thật đáng sợ". Nên dùng từ nào?',
        options: [
          { text: '那个电影真可怕！', pinyin: 'Nàge diànyǐng zhēn kěpà!', meaning: 'Bộ phim đó thật đáng sợ!', correct: true,
            feedback: 'Đúng! 可怕 = đáng sợ.' },
          { text: '那个电影真可爱！', pinyin: 'Nàge diànyǐng zhēn kě’ài!', meaning: 'Bộ phim đó thật đáng yêu!', correct: false,
            feedback: '可爱 = đáng yêu, không phải "đáng sợ".' },
          { text: '那个电影真科学！', pinyin: 'Nàge diànyǐng zhēn kēxué!', meaning: '(Không hợp lý)', correct: false,
            feedback: '科学 = khoa học, không phải "đáng sợ".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '那个电影真可怕！但这是科学知识，不是假的。你帮我拉一下门，再加一克糖。',
        pinyin: 'Nàge diànyǐng zhēn kěpà! Dàn zhè shì kēxué zhīshi, bú shì jiǎ de. Nǐ bāng wǒ lā yíxià mén, zài jiā yí kè táng.',
        meaning: 'Bộ phim đó thật đáng sợ! Nhưng đây là kiến thức khoa học, không phải giả. Cậu kéo giúp tớ cánh cửa, thêm một gram đường nữa.',
        expression: 'curious', vocab: ['可怕', '科学', '假', '拉', '加', '克']
      }
    ],
    vocab: [
      { h: '公平', p: 'gōngpíng', v: 'công bằng', e: 'fair' },
      { h: '故意', p: 'gùyì', v: 'cố ý', e: 'deliberately' },
      { h: '合适', p: 'héshì', v: 'hợp, thích hợp', e: 'suitable' },
      { h: '黑', p: 'hēi', v: 'đen', e: 'abbr. for Heilongjiang province 黑龙江' },
      { h: '红', p: 'hóng', v: 'đỏ', e: 'red' },
      { h: '湖', p: 'hú', v: 'hồ', e: 'lake' },
      { h: '黄', p: 'huáng', v: 'vàng', e: 'yellow' },
      { h: '急', p: 'jí', v: 'vội, gấp', e: 'urgent' },
      { h: '加', p: 'jiā', v: 'thêm, cộng', e: 'Canada (abbr. for 大)' },
      { h: '假', p: 'jiǎ', v: 'giả', e: 'used in 掰' },
      { h: '健康', p: 'jiànkāng', v: 'sức khỏe, khỏe mạnh', e: 'health' },
      { h: '近', p: 'jìn', v: 'gần', e: 'near' },
      { h: '经常', p: 'jīngcháng', v: 'thường xuyên', e: 'frequently' },
      { h: '开心', p: 'kāixīn', v: 'vui, vui vẻ', e: 'to feel happy' },
      { h: '科学', p: 'kēxué', v: 'khoa học', e: 'science' },
      { h: '可爱', p: 'kě’ài', v: 'đáng yêu', e: 'adorable' },
      { h: '可怕', p: 'kěpà', v: 'đáng sợ', e: 'awful' },
      { h: '克', p: 'kè', v: 'gram', e: 'abbr. for 克罗地亚, Croatia' },
      { h: '快乐', p: 'kuàilè', v: 'vui vẻ, hạnh phúc', e: 'happy' },
      { h: '拉', p: 'lā', v: 'kéo', e: 'to pull' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '离这儿很___！', options: ['近', '黑', '急'], answer: '近' },
        { type: 'fill', sentence: '这样对___好。', options: ['健康', '科学', '公平'], answer: '健康' },
        { type: 'fill', sentence: '那只猫又黑又___。', options: ['可爱', '可怕', '合适'], answer: '可爱' },
        { type: 'fill', sentence: '今天我很___！', options: ['开心', '故意', '黄'], answer: '开心' },
        { type: 'fill', sentence: '我___运动。', options: ['经常', '可怕', '假'], answer: '经常' }
      ],
      normal: [
        { type: 'fill', sentence: '别___，慢慢来。', options: ['急', '加', '拉'], answer: '急' },
        { type: 'fill', sentence: '这个安排很___。', options: ['合适', '可怕', '开心'], answer: '合适' },
        { type: 'fill', sentence: '也很___，大家都满意。', options: ['公平', '健康', '故意'], answer: '公平' },
        { type: 'fill', sentence: '他不是___的。', options: ['故意', '科学', '快乐'], answer: '故意' },
        { type: 'fill', sentence: '旁边有___色的花。', options: ['红', '近', '急'], answer: '红' },
        { type: 'order', words: ['湖边', '去', '走走', '周末'], answer: '周末去湖边走走' },
        { type: 'order', words: ['很', '我', '开心', '今天'], answer: '今天我很开心' }
      ],
      hard: [
        { type: 'fill', sentence: '那个电影真___！', options: ['可怕', '可爱', '健康'], answer: '可怕' },
        { type: 'fill', sentence: '这是___知识，不是假的。', options: ['科学', '公平', '合适'], answer: '科学' },
        { type: 'fill', sentence: '你帮我___一下门。', options: ['拉', '加', '急'], answer: '拉' },
        { type: 'fill', sentence: '再___一克糖。', options: ['加', '拉', '近'], answer: '加' },
        { type: 'translate', prompt: 'Đừng vội, từ từ thôi.', answer: '别急，慢慢来。' },
        { type: 'translate', prompt: 'Như vậy tốt cho sức khỏe.', answer: '这样对健康好。' }
      ]
    }
  },
  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 54: Tính từ miêu tả (3) — 20 từ
  // 蓝, 理想, 凉, 凉快, 亮, 流利, 绿, 满, 难过, 难看, 难受, 难听, 年轻, 努力, 漂亮, 平, 平等, 普通, 轻, 清楚
  // ───────────────────────────────────────────────────────────────────────────
  54: {
    id: 54,
    level: 2,
    title: 'Tính từ miêu tả (3)',
    context: 'Buổi chiều bên hồ, cả nhóm ngắm cảnh trời xanh nước biếc và trò chuyện về việc học, về tâm trạng.',
    vocabPreview: ['漂亮', '流利', '清楚', '年轻', '努力'],
    objectives: [
      'Diễn đạt mức độ tăng dần bằng 越来越 (越来越流利)',
      'Hiểu nhóm tính từ 难 + V (难听 · 难看 · 难受)',
      'Nói “…hơn một chút” bằng adj + 一点(儿) (轻一点)',
      'Miêu tả cảnh vật, con người (漂亮 · 流利 · 年轻)'
    ],
    grammarNotes: [
      { point: '越来越 + tính từ',
        explain: 'Diễn đạt tính chất thay đổi tăng dần theo thời gian.',
        examples: [
          { zh: '你的中文越来越流利了！', py: 'Nǐ de Zhōngwén yuèláiyuè liúlì le!', vi: 'Tiếng Trung của cậu càng ngày càng lưu loát!' }
        ] },
      { point: '难 + V — khó (gây cảm giác khó chịu)',
        explain: '难 + động từ cảm nhận tạo tính từ: 难听 (khó nghe), 难看 (khó coi), 难受 (khó chịu).',
        examples: [
          { zh: '这首歌太难听了！', py: 'Zhè shǒu gē tài nántīng le!', vi: 'Bài hát này dở quá!' }
        ] },
      { point: 'Tính từ + 一点(儿) — …hơn một chút',
        explain: 'Thêm 一点儿 sau tính từ để đề nghị điều chỉnh mức độ.',
        examples: [
          { zh: '你声音轻一点。', py: 'Nǐ shēngyīn qīng yìdiǎn.', vi: 'Cậu nói nhỏ một chút.' }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Bên hồ · Buổi chiều', bg: 'street',
        cast: ['mai', 'xiaomei'],
        text: 'Buổi chiều, mặt hồ phẳng lặng, trời trong xanh.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '天很蓝，水很绿，真漂亮！',
        pinyin: 'Tiān hěn lán, shuǐ hěn lǜ, zhēn piàoliang!',
        meaning: 'Trời rất xanh, nước rất biếc, thật đẹp!',
        expression: 'happy', vocab: ['蓝', '绿', '漂亮']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '今天很凉快，风很凉。月亮很亮，湖面很平。',
        pinyin: 'Jīntiān hěn liángkuai, fēng hěn liáng. Yuèliang hěn liàng, húmiàn hěn píng.',
        meaning: 'Hôm nay rất mát mẻ, gió rất mát. Trăng rất sáng, mặt hồ rất phẳng.',
        expression: 'happy', vocab: ['凉快', '凉', '亮', '平']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你的中文越来越流利了！',
        pinyin: 'Nǐ de zhōngwén yuèláiyuè liúlì le!',
        meaning: 'Tiếng Trung của cậu càng ngày càng lưu loát!',
        expression: 'happy', vocab: ['流利']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'street',
        scene: '📍 Bên hồ',
        expression: 'curious',
        q: 'Mai nghe không rõ. Cô ấy muốn nói "Tớ nghe không rõ". Nên nói thế nào?',
        options: [
          { text: '我听不清楚。', pinyin: 'Wǒ tīng bu qīngchu.', meaning: 'Tớ nghe không rõ.', correct: true,
            feedback: 'Đúng! 清楚 = rõ, rõ ràng.' },
          { text: '我听不难听。', pinyin: 'Wǒ tīng bu nántīng.', meaning: '(Sai cấu trúc)', correct: false,
            feedback: '难听 = khó nghe (dở); không dùng được ở đây.' },
          { text: '我听不漂亮。', pinyin: 'Wǒ tīng bu piàoliang.', meaning: '(Sai nghĩa)', correct: false,
            feedback: '漂亮 = đẹp, không liên quan đến "nghe rõ".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我听不清楚，你声音轻一点我反而难受。',
        pinyin: 'Wǒ tīng bu qīngchu, nǐ shēngyīn qīng yìdiǎn wǒ fǎn’ér nánshòu.',
        meaning: 'Tớ nghe không rõ, cậu nói nhỏ một chút thì tớ lại khó chịu.',
        expression: 'sad', vocab: ['清楚', '轻', '难受']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"漂亮" có nghĩa là gì?',
            options: ['đẹp', 'mát mẻ', 'rõ ràng', 'phẳng'],
            answer: 0
          },
          {
            q: '"流利" thường dùng để tả điều gì?',
            options: ['nói (ngôn ngữ) lưu loát', 'trời xanh', 'mặt hồ phẳng', 'gió mát'],
            answer: 0
          },
          {
            q: '"清楚" có nghĩa là gì?',
            options: ['rõ, rõ ràng', 'khó nghe', 'khó chịu', 'nhẹ'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Bên hồ · Tiếp tục', bg: 'street',
        cast: ['mai', 'xiaomei', 'laoli'],
        text: 'Thầy Lý đến và động viên hai bạn học tập.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '你们都很年轻，要努力学习，这是理想。',
        pinyin: 'Nǐmen dōu hěn niánqīng, yào nǔlì xuéxí, zhè shì lǐxiǎng.',
        meaning: 'Các em đều còn trẻ, phải nỗ lực học tập, đó là lý tưởng.',
        expression: 'happy', vocab: ['年轻', '努力', '理想']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '老师说得对。人人平等，这很普通也很重要。',
        pinyin: 'Lǎoshī shuō de duì. Rénrén píngděng, zhè hěn pǔtōng yě hěn zhòngyào.',
        meaning: 'Thầy nói đúng. Mọi người bình đẳng, điều này rất bình thường mà cũng rất quan trọng.',
        expression: 'focused', vocab: ['平等', '普通']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'], bg: 'street',
        scene: '📍 Bên hồ',
        expression: 'curious',
        q: 'Mai muốn chê "Bài hát này khó nghe (dở)". Nên dùng từ nào?',
        options: [
          { text: '这首歌太难听了！', pinyin: 'Zhè shǒu gē tài nántīng le!', meaning: 'Bài hát này dở quá!', correct: true,
            feedback: 'Đúng! 难听 = khó nghe, dở (âm thanh).' },
          { text: '这首歌太难看了！', pinyin: 'Zhè shǒu gē tài nánkàn le!', meaning: '(Sai — 难看 cho hình ảnh)', correct: false,
            feedback: '难看 = khó coi, xấu (về hình ảnh), không dùng cho âm thanh.' },
          { text: '这首歌太难过了！', pinyin: 'Zhè shǒu gē tài nánguò le!', meaning: '(Sai nghĩa)', correct: false,
            feedback: '难过 = buồn (cảm xúc), không tả bài hát dở.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '这首歌太难听了！但别难过，也别说它难看。我心里很满足。',
        pinyin: 'Zhè shǒu gē tài nántīng le! Dàn bié nánguò, yě bié shuō tā nánkàn. Wǒ xīnlǐ hěn mǎnzú.',
        meaning: 'Bài hát này dở quá! Nhưng đừng buồn, cũng đừng nói nó xấu. Trong lòng tớ rất thỏa mãn.',
        expression: 'happy', vocab: ['难听', '难过', '难看', '满']
      }
    ],
    vocab: [
      { h: '蓝', p: 'lán', v: 'xanh (lam)', e: 'blue' },
      { h: '理想', p: 'lǐxiǎng', v: 'lý tưởng', e: 'an ideal' },
      { h: '凉', p: 'liáng', v: 'mát, lạnh', e: 'the five Liang of the Sixteen Kingdoms, namely: Former Liang 前凉 (314-376), Later Liang 后凉 (386-403), Northern Liang 北凉 (398-439), Southern Liang 南凉 (397-414), Western Liang 西凉 (400-421)' },
      { h: '凉快', p: 'liángkuai', v: 'mát mẻ', e: 'nice and cold' },
      { h: '亮', p: 'liàng', v: 'sáng', e: 'bright' },
      { h: '流利', p: 'liúlì', v: 'lưu loát, trôi chảy', e: 'fluent' },
      { h: '绿', p: 'lǜ', v: 'xanh (lục)', e: 'green' },
      { h: '满', p: 'mǎn', v: 'đầy, thỏa mãn', e: 'Manchu ethnic group' },
      { h: '难过', p: 'nánguò', v: 'buồn', e: 'to feel sad' },
      { h: '难看', p: 'nánkàn', v: 'khó coi, xấu', e: 'ugly' },
      { h: '难受', p: 'nánshòu', v: 'khó chịu', e: 'to feel unwell' },
      { h: '难听', p: 'nántīng', v: 'khó nghe, dở', e: 'unpleasant to hear' },
      { h: '年轻', p: 'niánqīng', v: 'trẻ, trẻ tuổi', e: 'young' },
      { h: '努力', p: 'nǔlì', v: 'nỗ lực, cố gắng', e: 'to make an effort' },
      { h: '漂亮', p: 'piàoliang', v: 'đẹp, xinh', e: 'pretty' },
      { h: '平', p: 'píng', v: 'phẳng, bằng', e: 'flat, level, equal, ordinary' },
      { h: '平等', p: 'píngděng', v: 'bình đẳng', e: 'equal' },
      { h: '普通', p: 'pǔtōng', v: 'phổ thông, bình thường', e: 'common' },
      { h: '轻', p: 'qīng', v: 'nhẹ, khẽ', e: 'light' },
      { h: '清楚', p: 'qīngchu', v: 'rõ, rõ ràng', e: 'clear' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '天很蓝，水很___。', options: ['绿', '平', '轻'], answer: '绿' },
        { type: 'fill', sentence: '真___！', options: ['漂亮', '难看', '难听'], answer: '漂亮' },
        { type: 'fill', sentence: '今天很___。', options: ['凉快', '难过', '满'], answer: '凉快' },
        { type: 'fill', sentence: '月亮很___。', options: ['亮', '平', '蓝'], answer: '亮' },
        { type: 'fill', sentence: '你的中文越来越___了！', options: ['流利', '普通', '难听'], answer: '流利' }
      ],
      normal: [
        { type: 'fill', sentence: '我听不___。', options: ['清楚', '漂亮', '平等'], answer: '清楚' },
        { type: 'fill', sentence: '你声音___一点。', options: ['轻', '亮', '满'], answer: '轻' },
        { type: 'fill', sentence: '你们都很___。', options: ['年轻', '普通', '难受'], answer: '年轻' },
        { type: 'fill', sentence: '要___学习。', options: ['努力', '难过', '清楚'], answer: '努力' },
        { type: 'fill', sentence: '人人___。', options: ['平等', '凉快', '漂亮'], answer: '平等' },
        { type: 'order', words: ['很', '天', '蓝'], answer: '天很蓝' },
        { type: 'order', words: ['努力', '要', '学习'], answer: '要努力学习' }
      ],
      hard: [
        { type: 'fill', sentence: '这首歌太___了！', options: ['难听', '难看', '难过'], answer: '难听' },
        { type: 'fill', sentence: '别___，这只是首歌。', options: ['难过', '难听', '难看'], answer: '难过' },
        { type: 'fill', sentence: '这很___也很重要。', options: ['普通', '漂亮', '流利'], answer: '普通' },
        { type: 'fill', sentence: '我心里很___足。', options: ['满', '轻', '平'], answer: '满' },
        { type: 'translate', prompt: 'Trời rất xanh, nước rất biếc, thật đẹp!', answer: '天很蓝，水很绿，真漂亮！' },
        { type: 'translate', prompt: 'Tớ nghe không rõ.', answer: '我听不清楚。' }
      ]
    }
  },
  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 55: Tính từ miêu tả (4) — 20 từ
  // 全, 热情, 生, 实际, 实在, 舒服, 熟, 顺利, 随便, 所有, 特别, 疼, 通, 同样, 完全, 相同, 响, 小声, 小心, 一般
  // ───────────────────────────────────────────────────────────────────────────
  55: {
    id: 55,
    level: 2,
    title: 'Tính từ miêu tả (4)',
    context: 'Mai bị mệt, đau đầu. Tiểu Mỹ và thầy Lý quan tâm chăm sóc, rồi cùng nói về việc học từ vựng.',
    vocabPreview: ['舒服', '热情', '特别', '小心', '完全'],
    objectives: [
      'Đặt câu hỏi lựa chọn bằng 还是 (生的还是熟的)',
      'Dùng khung 所有…都… (tất cả…đều)',
      'Nhấn mức độ bằng 实在 / 特别',
      'Miêu tả cảm giác cơ thể (舒服 · 累 · 疼)'
    ],
    grammarNotes: [
      { point: '还是 — hay (câu hỏi lựa chọn)',
        explain: '还是 nối hai lựa chọn trong câu hỏi (A 还是 B?). Câu trần thuật dùng 或者.',
        examples: [
          { zh: '这些菜是生的还是熟的？', py: 'Zhèxiē cài shì shēng de háishi shú de?', vi: 'Mấy món này là sống hay chín?' }
        ] },
      { point: '所有…都… — tất cả…đều',
        explain: '所有 + danh từ + 都 nhấn “toàn bộ không trừ ai / cái nào”.',
        examples: [
          { zh: '所有人都很热情。', py: 'Suǒyǒu rén dōu hěn rèqíng.', vi: 'Mọi người đều rất nhiệt tình.' }
        ] },
      { point: '实在 / 特别 — thực sự / đặc biệt',
        explain: 'Phó từ mức độ: 实在 nhấn “quả thực”, 特别 nhấn “đặc biệt, rất”.',
        examples: [
          { zh: '你实在太累了，特别需要休息。', py: 'Nǐ shízài tài lèi le, tèbié xūyào xiūxi.', vi: 'Cậu thực sự quá mệt, đặc biệt cần nghỉ.' }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Ký túc xá · Buổi tối', bg: 'dorm-room',
        cast: ['mai', 'xiaomei'],
        text: 'Buổi tối, Mai thấy đau đầu và mệt mỏi.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你头疼吗？要小心身体。',
        pinyin: 'Nǐ tóu téng ma? Yào xiǎoxīn shēntǐ.',
        meaning: 'Cậu đau đầu à? Phải cẩn thận sức khỏe.',
        expression: 'sad', vocab: ['疼', '小心']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '有一点，不太舒服，全身都累。',
        pinyin: 'Yǒu yìdiǎn, bú tài shūfu, quánshēn dōu lèi.',
        meaning: 'Có chút, không thoải mái lắm, cả người đều mệt.',
        expression: 'sad', vocab: ['舒服', '全']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '别担心，所有人都很热情，会照顾你。你实在太累了，特别需要休息。',
        pinyin: 'Bié dānxīn, suǒyǒu rén dōu hěn rèqíng, huì zhàogu nǐ. Nǐ shízài tài lèi le, tèbié xūyào xiūxi.',
        meaning: 'Đừng lo, mọi người đều rất nhiệt tình, sẽ chăm sóc cậu. Cậu thực sự quá mệt, đặc biệt cần nghỉ ngơi.',
        expression: 'happy', vocab: ['所有', '热情', '实在', '特别']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'dorm-room',
        scene: '📍 Ký túc xá',
        expression: 'focused',
        q: 'Tiểu Mỹ muốn nói "Cậu nói nhỏ một chút". Nên dùng từ nào?',
        options: [
          { text: '你小声一点。', pinyin: 'Nǐ xiǎoshēng yìdiǎn.', meaning: 'Cậu nói nhỏ một chút.', correct: true,
            feedback: 'Đúng! 小声 = nói nhỏ, khẽ giọng.' },
          { text: '你响一点。', pinyin: 'Nǐ xiǎng yìdiǎn.', meaning: 'Cậu to một chút.', correct: false,
            feedback: '响 = vang, to (âm thanh); ngược nghĩa "nói nhỏ".' },
          { text: '你熟一点。', pinyin: 'Nǐ shú yìdiǎn.', meaning: '(Sai nghĩa)', correct: false,
            feedback: '熟 = chín, quen thuộc; không phải "nói nhỏ".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你小声一点，别太响，好好休息。',
        pinyin: 'Nǐ xiǎoshēng yìdiǎn, bié tài xiǎng, hǎohāo xiūxi.',
        meaning: 'Cậu nói nhỏ một chút, đừng to quá, nghỉ ngơi cho khỏe.',
        expression: 'happy', vocab: ['小声', '响']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"舒服" có nghĩa là gì?',
            options: ['thoải mái, dễ chịu', 'đau', 'nhiệt tình', 'cẩn thận'],
            answer: 0
          },
          {
            q: '"小声" và "响" — từ nào nghĩa là "nói nhỏ, khẽ"?',
            options: ['小声', '响', '熟', '通'],
            answer: 0
          },
          {
            q: '"特别" có nghĩa là gì?',
            options: ['đặc biệt', 'tất cả', 'bình thường', 'giống nhau'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Ký túc xá · Hôm sau', bg: 'dorm-room',
        cast: ['mai', 'xiaomei', 'laoli'],
        text: 'Hôm sau Mai đỡ hơn, thầy Lý giảng bài về từ vựng.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '实际上，这两个词意思完全相同，用法同样。',
        pinyin: 'Shíjì shàng, zhè liǎng gè cí yìsi wánquán xiāngtóng, yòngfǎ tóngyàng.',
        meaning: 'Thực tế, hai từ này nghĩa hoàn toàn giống nhau, cách dùng cũng như nhau.',
        expression: 'focused', vocab: ['实际', '完全', '相同', '同样']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '老师讲得很通，我现在熟了。',
        pinyin: 'Lǎoshī jiǎng de hěn tōng, wǒ xiànzài shú le.',
        meaning: 'Thầy giảng rất thông suốt, giờ em đã thành thạo rồi.',
        expression: 'happy', vocab: ['通', '熟']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'], bg: 'dorm-room',
        scene: '📍 Ký túc xá',
        expression: 'happy',
        q: 'Tiểu Mỹ muốn nói "Chọn cái nào cũng được, tùy thôi". Nên dùng từ nào?',
        options: [
          { text: '随便选哪个都行。', pinyin: 'Suíbiàn xuǎn nǎge dōu xíng.', meaning: 'Chọn cái nào cũng được, tùy thôi.', correct: true,
            feedback: 'Đúng! 随便 = tùy ý, tùy tiện.' },
          { text: '一般选哪个都行。', pinyin: 'Yìbān xuǎn nǎge dōu xíng.', meaning: '(Không tự nhiên)', correct: false,
            feedback: '一般 = bình thường, nói chung; không mang ý "tùy ý chọn".' },
          { text: '顺利选哪个都行。', pinyin: 'Shùnlì xuǎn nǎge dōu xíng.', meaning: '(Sai nghĩa)', correct: false,
            feedback: '顺利 = thuận lợi; không phải "tùy ý".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'],
        text: '随便选哪个都行，很一般。这些菜是生的还是熟的？事情很顺利。',
        pinyin: 'Suíbiàn xuǎn nǎge dōu xíng, hěn yìbān. Zhèxiē cài shì shēng de háishì shú de? Shìqing hěn shùnlì.',
        meaning: 'Chọn cái nào cũng được, bình thường thôi. Mấy món này là sống hay chín? Mọi việc rất thuận lợi.',
        expression: 'happy', vocab: ['随便', '一般', '生', '顺利']
      }
    ],
    vocab: [
      { h: '全', p: 'quán', v: 'toàn bộ, cả', e: 'whole, complete, all, entirely' },
      { h: '热情', p: 'rèqíng', v: 'nhiệt tình', e: 'cordial' },
      { h: '生', p: 'shēng', v: 'sống (chưa chín)', e: 'to be born' },
      { h: '实际', p: 'shíjì', v: 'thực tế', e: 'reality' },
      { h: '实在', p: 'shízài', v: 'thực sự, quả thực', e: 'really' },
      { h: '舒服', p: 'shūfu', v: 'thoải mái, dễ chịu', e: 'comfortable' },
      { h: '熟', p: 'shú', v: 'chín; quen, thành thạo', e: 'ripe' },
      { h: '顺利', p: 'shùnlì', v: 'thuận lợi', e: 'smoothly' },
      { h: '随便', p: 'suíbiàn', v: 'tùy ý, tùy tiện', e: 'as one wishes' },
      { h: '所有', p: 'suǒyǒu', v: 'tất cả, mọi', e: 'all' },
      { h: '特别', p: 'tèbié', v: 'đặc biệt', e: 'unusual' },
      { h: '疼', p: 'téng', v: 'đau', e: 'hurts' },
      { h: '通', p: 'tōng', v: 'thông, thông suốt', e: 'to go through' },
      { h: '同样', p: 'tóngyàng', v: 'như nhau, giống nhau', e: 'same' },
      { h: '完全', p: 'wánquán', v: 'hoàn toàn', e: 'complete' },
      { h: '相同', p: 'xiāngtóng', v: 'giống nhau', e: 'identical' },
      { h: '响', p: 'xiǎng', v: 'vang, to (âm thanh)', e: 'echo' },
      { h: '小声', p: 'xiǎoshēng', v: 'nói nhỏ, khẽ', e: 'in a low voice' },
      { h: '小心', p: 'xiǎoxīn', v: 'cẩn thận', e: 'to be careful' },
      { h: '一般', p: 'yìbān', v: 'bình thường, nói chung', e: 'same' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '你头___吗？', options: ['疼', '通', '响'], answer: '疼' },
        { type: 'fill', sentence: '要___身体。', options: ['小心', '随便', '一般'], answer: '小心' },
        { type: 'fill', sentence: '不太___。', options: ['舒服', '热情', '相同'], answer: '舒服' },
        { type: 'fill', sentence: '___人都很热情。', options: ['所有', '完全', '同样'], answer: '所有' },
        { type: 'fill', sentence: '大家都很___。', options: ['热情', '生', '响'], answer: '热情' }
      ],
      normal: [
        { type: 'fill', sentence: '你___一点，别太响。', options: ['小声', '响', '熟'], answer: '小声' },
        { type: 'fill', sentence: '你___太累了。', options: ['实在', '实际', '一般'], answer: '实在' },
        { type: 'fill', sentence: '___需要休息。', options: ['特别', '完全', '随便'], answer: '特别' },
        { type: 'fill', sentence: '___身都累。', options: ['全', '通', '生'], answer: '全' },
        { type: 'fill', sentence: '事情很___。', options: ['顺利', '舒服', '小心'], answer: '顺利' },
        { type: 'order', words: ['小心', '要', '身体'], answer: '要小心身体' },
        { type: 'order', words: ['热情', '都', '所有人', '很'], answer: '所有人都很热情' }
      ],
      hard: [
        { type: 'fill', sentence: '这两个词意思___相同。', options: ['完全', '一般', '随便'], answer: '完全' },
        { type: 'fill', sentence: '用法___。', options: ['同样', '所有', '特别'], answer: '同样' },
        { type: 'fill', sentence: '___选哪个都行。', options: ['随便', '顺利', '相同'], answer: '随便' },
        { type: 'fill', sentence: '这些菜是___的还是熟的？', options: ['生', '通', '响'], answer: '生' },
        { type: 'translate', prompt: 'Cậu đau đầu à? Phải cẩn thận sức khỏe.', answer: '你头疼吗？要小心身体。' },
        { type: 'translate', prompt: 'Chọn cái nào cũng được, tùy thôi.', answer: '随便选哪个都行。' }
      ]
    }
  },
  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 56: Tính từ miêu tả (5) — 18 từ
  // 一定, 阴, 永远, 友好, 原来, 越, 云, 脏, 长, 真正, 正常, 正确, 直接, 中级, 重复, 主要, 准确, 自由
  // ───────────────────────────────────────────────────────────────────────────
  56: {
    id: 56,
    level: 2,
    title: 'Tính từ miêu tả (5)',
    context: 'Trời âm u, cả nhóm trú trong lớp. Họ nói về tình bạn, về sự đúng đắn của bài học và ước mơ tự do.',
    vocabPreview: ['正常', '正确', '永远', '友好', '自由'],
    objectives: [
      'Diễn đạt phát hiện sự thật bằng 原来',
      'Nhấn chắc chắn / yêu cầu bằng 一定',
      'Nhấn “thật sự” bằng 真正(的)',
      'Miêu tả thời tiết, sự đúng đắn (正常 · 正确 · 自由)'
    ],
    grammarNotes: [
      { point: '原来 — thì ra',
        explain: '原来 đặt đầu câu diễn đạt sự phát hiện điều trước đó chưa biết.',
        examples: [
          { zh: '原来你早就知道了！', py: 'Yuánlái nǐ zǎo jiù zhīdào le!', vi: 'Thì ra cậu biết từ sớm rồi!' }
        ] },
      { point: '一定 — nhất định',
        explain: '一定 + V chỉ sự chắc chắn hoặc yêu cầu mạnh.',
        examples: [
          { zh: '我们一定要带伞。', py: 'Wǒmen yídìng yào dài sǎn.', vi: 'Chúng ta nhất định phải mang ô.' }
        ] },
      { point: '真正(的) — thật sự, đích thực',
        explain: '真正 nhấn bản chất “đúng nghĩa”, thường + 的 + danh từ.',
        examples: [
          { zh: '你们是真正的朋友。', py: 'Nǐmen shì zhēnzhèng de péngyou.', vi: 'Các em là bạn thật sự.' }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Sân trường · Trời âm u', bg: 'campus',
        cast: ['mai', 'xiaomei'],
        text: 'Trời âm u, mây kéo đến, hai bạn vội vào lớp.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '今天天阴，云很多，要下雨。',
        pinyin: 'Jīntiān tiān yīn, yún hěn duō, yào xiàyǔ.',
        meaning: 'Hôm nay trời âm u, mây nhiều, sắp mưa.',
        expression: 'curious', vocab: ['阴', '云']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这很正常。我们一定要带伞。',
        pinyin: 'Zhè hěn zhèngcháng. Wǒmen yídìng yào dài sǎn.',
        meaning: 'Điều này rất bình thường. Chúng ta nhất định phải mang ô.',
        expression: 'focused', vocab: ['正常', '一定']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '原来你早就知道了！越来越冷了。你这件衣服有点脏，也太长。',
        pinyin: 'Yuánlái nǐ zǎojiù zhīdào le! Yuèláiyuè lěng le. Nǐ zhè jiàn yīfu yǒudiǎn zāng, yě tài cháng.',
        meaning: 'Thì ra cậu biết từ sớm rồi! Càng lúc càng lạnh. Cái áo này của cậu hơi bẩn, lại dài quá.',
        expression: 'happy', vocab: ['原来', '越', '脏', '长']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'campus',
        scene: '📍 Lớp học',
        expression: 'curious',
        q: 'Mai muốn nói "Đáp án này chính xác". Nên dùng từ nào?',
        options: [
          { text: '这个答案正确。', pinyin: 'Zhège dá’àn zhèngquè.', meaning: 'Đáp án này chính xác.', correct: true,
            feedback: 'Đúng! 正确 = chính xác, đúng đắn (đáp án, quan điểm).' },
          { text: '这个答案正常。', pinyin: 'Zhège dá’àn zhèngcháng.', meaning: 'Đáp án này bình thường.', correct: false,
            feedback: '正常 = bình thường (trạng thái), không phải "đúng/chính xác".' },
          { text: '这个答案自由。', pinyin: 'Zhège dá’àn zìyóu.', meaning: '(Không hợp lý)', correct: false,
            feedback: '自由 = tự do, không liên quan.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这个答案正确，数字也很准确。',
        pinyin: 'Zhège dá’àn zhèngquè, shùzì yě hěn zhǔnquè.',
        meaning: 'Đáp án này chính xác, con số cũng rất chuẩn xác.',
        expression: 'happy', vocab: ['正确', '准确']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"正常" có nghĩa là gì?',
            options: ['bình thường', 'chính xác', 'tự do', 'âm u'],
            answer: 0
          },
          {
            q: '"正确" và "正常" — từ nào nghĩa là "đúng, chính xác"?',
            options: ['正确', '正常', '永远', '直接'],
            answer: 0
          },
          {
            q: '"原来" trong "原来你早就知道了" có nghĩa là gì?',
            options: ['thì ra, hóa ra', 'nhất định', 'mãi mãi', 'trực tiếp'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Lớp học · Tiếp tục', bg: 'classroom',
        cast: ['mai', 'xiaomei', 'laoli'],
        text: 'Thầy Lý vào lớp và trò chuyện cùng cả nhóm.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '你们是真正的朋友，要永远友好。',
        pinyin: 'Nǐmen shì zhēnzhèng de péngyou, yào yǒngyuǎn yǒuhǎo.',
        meaning: 'Các em là bạn thật sự, hãy mãi mãi thân thiện với nhau.',
        expression: 'happy', vocab: ['真正', '永远', '友好']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '老师，我直接说主要的问题。',
        pinyin: 'Lǎoshī, wǒ zhíjiē shuō zhǔyào de wèntí.',
        meaning: 'Thầy ơi, em nói thẳng vấn đề chính ạ.',
        expression: 'focused', vocab: ['直接', '主要']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'], bg: 'classroom',
        scene: '📍 Lớp học',
        expression: 'happy',
        q: 'Mai cứ nói đi nói lại. Tiểu Mỹ muốn nói "Đừng lặp lại nữa". Nên dùng từ nào?',
        options: [
          { text: '别重复了，我懂了。', pinyin: 'Bié chóngfù le, wǒ dǒng le.', meaning: 'Đừng lặp lại nữa, tớ hiểu rồi.', correct: true,
            feedback: 'Đúng! 重复 (chóngfù) = lặp lại.' },
          { text: '别自由了，我懂了。', pinyin: 'Bié zìyóu le, wǒ dǒng le.', meaning: '(Không hợp lý)', correct: false,
            feedback: '自由 = tự do, không phải "lặp lại".' },
          { text: '别中级了，我懂了。', pinyin: 'Bié zhōngjí le, wǒ dǒng le.', meaning: '(Không hợp lý)', correct: false,
            feedback: '中级 = trung cấp (trình độ), không phải "lặp lại".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'],
        text: '别重复了，我懂了。我喜欢自由，也想考中级。',
        pinyin: 'Bié chóngfù le, wǒ dǒng le. Wǒ xǐhuan zìyóu, yě xiǎng kǎo zhōngjí.',
        meaning: 'Đừng lặp lại nữa, tớ hiểu rồi. Tớ thích tự do, cũng muốn thi trung cấp.',
        expression: 'happy', vocab: ['重复', '自由', '中级']
      }
    ],
    vocab: [
      { h: '一定', p: 'yídìng', v: 'nhất định', e: 'surely' },
      { h: '阴', p: 'yīn', v: 'âm u, râm', e: 'overcast, cloudy, yin (negative)' },
      { h: '永远', p: 'yǒngyuǎn', v: 'mãi mãi', e: 'forever' },
      { h: '友好', p: 'yǒuhǎo', v: 'thân thiện, hữu hảo', e: 'Youhao district of Yichun city 市, Heilongjiang' },
      { h: '原来', p: 'yuánlái', v: 'thì ra, vốn dĩ', e: 'original' },
      { h: '越', p: 'yuè', v: 'càng', e: 'generic word for peoples or states of south China or south Asia at different historical periods' },
      { h: '云', p: 'yún', v: 'mây', e: 'to say' },
      { h: '脏', p: 'zāng', v: 'bẩn', e: 'viscera' },
      { h: '长', p: 'cháng', v: 'dài', e: 'length' },
      { h: '真正', p: 'zhēnzhèng', v: 'thật sự, đích thực', e: 'genuine' },
      { h: '正常', p: 'zhèngcháng', v: 'bình thường', e: 'regular' },
      { h: '正确', p: 'zhèngquè', v: 'chính xác, đúng đắn', e: 'correct' },
      { h: '直接', p: 'zhíjiē', v: 'trực tiếp, thẳng', e: 'direct (opposite: indirect 间接)' },
      { h: '中级', p: 'zhōngjí', v: 'trung cấp', e: 'middle level (in a hierarchy)' },
      { h: '重复', p: 'chóngfù', v: 'lặp lại', e: 'to repeat' },
      { h: '主要', p: 'zhǔyào', v: 'chủ yếu, chính', e: 'main' },
      { h: '准确', p: 'zhǔnquè', v: 'chuẩn xác', e: 'accurate' },
      { h: '自由', p: 'zìyóu', v: 'tự do', e: 'freedom' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '今天天___，云很多。', options: ['阴', '脏', '长'], answer: '阴' },
        { type: 'fill', sentence: '天上___很多。', options: ['云', '阴', '越'], answer: '云' },
        { type: 'fill', sentence: '这很___。', options: ['正常', '正确', '自由'], answer: '正常' },
        { type: 'fill', sentence: '我们___要带伞。', options: ['一定', '永远', '直接'], answer: '一定' },
        { type: 'fill', sentence: '这件衣服有点___。', options: ['脏', '阴', '长'], answer: '脏' }
      ],
      normal: [
        { type: 'fill', sentence: '这个答案___。', options: ['正确', '正常', '友好'], answer: '正确' },
        { type: 'fill', sentence: '数字也很___。', options: ['准确', '正常', '重复'], answer: '准确' },
        { type: 'fill', sentence: '___你早就知道了！', options: ['原来', '一定', '直接'], answer: '原来' },
        { type: 'fill', sentence: '你们是___的朋友。', options: ['真正', '正常', '主要'], answer: '真正' },
        { type: 'fill', sentence: '要___友好。', options: ['永远', '直接', '一定'], answer: '永远' },
        { type: 'order', words: ['带伞', '要', '一定', '我们'], answer: '我们一定要带伞' },
        { type: 'order', words: ['正确', '答案', '这个'], answer: '这个答案正确' }
      ],
      hard: [
        { type: 'fill', sentence: '我___说主要的问题。', options: ['直接', '正确', '永远'], answer: '直接' },
        { type: 'fill', sentence: '别___了，我懂了。', options: ['重复', '自由', '中级'], answer: '重复' },
        { type: 'fill', sentence: '我喜欢___。', options: ['自由', '正常', '重复'], answer: '自由' },
        { type: 'fill', sentence: '也想考___。', options: ['中级', '正确', '主要'], answer: '中级' },
        { type: 'translate', prompt: 'Điều này rất bình thường.', answer: '这很正常。' },
        { type: 'translate', prompt: 'Đáp án này chính xác.', answer: '这个答案正确。' }
      ]
    }
  },
  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 57: Thời gian & lịch trình (1) — 20 từ
  // 半夜, 不久, 春节, 春天, 当时, 冬天, 分钟, 刚才, 刚刚, 过去, 后来, 假期, 今后, 快要, 老年, 老是, 平常, 平时, 千, 前年
  // ───────────────────────────────────────────────────────────────────────────
  57: {
    id: 57,
    level: 2,
    title: 'Thời gian & lịch trình (1)',
    context: 'Sắp nghỉ lễ. Mai và Tiểu Mỹ bàn kế hoạch về quê ăn Tết, nhớ lại chuyện học hành ngày trước.',
    vocabPreview: ['春节', '假期', '快要', '平时', '刚刚'],
    objectives: [
      'Phân biệt 刚才 (thời điểm) và 刚刚 / 刚 (vừa mới)',
      'Diễn đạt “sắp” bằng 快要…了',
      'Nhấn “muộn hơn dự kiến” bằng 才 (春天才来)',
      'Nói về kỳ nghỉ, mùa (春节 · 假期 · 平时)'
    ],
    grammarNotes: [
      { point: '刚才 vs 刚 / 刚刚',
        explain: '刚才 là danh từ chỉ thời điểm “vừa nãy”; 刚 / 刚刚 là phó từ “vừa mới” đứng trước động từ.',
        examples: [
          { zh: '刚才老师查过了。', py: 'Gāngcái lǎoshī chá guo le.', vi: 'Vừa nãy thầy đã tra rồi.' },
          { zh: '我刚刚到。', py: 'Wǒ gānggāng dào.', vi: 'Tớ vừa mới đến.' }
        ] },
      { point: '快要…了 — sắp (sửa)',
        explain: 'Khung “快要 + V + 了” diễn đạt việc sắp xảy ra.',
        examples: [
          { zh: '快要放假了！', py: 'Kuàiyào fàngjià le!', vi: 'Sắp được nghỉ rồi!' }
        ] },
      { point: '才 — mới (muộn hơn dự kiến)',
        explain: '才 đặt trước động từ nhấn việc xảy ra muộn / chậm hơn mong đợi.',
        examples: [
          { zh: '今年春天才来这儿。', py: 'Jīnnián chūntiān cái lái zhèr.', vi: 'Mùa xuân năm nay mới đến đây.' }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Phòng học · Cuối kỳ', bg: 'classroom',
        cast: ['mai', 'xiaomei'],
        text: 'Sắp đến kỳ nghỉ, hai bạn bàn kế hoạch về quê.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '快要放假了！春节你回家吗？',
        pinyin: 'Kuàiyào fàngjià le! Chūnjié nǐ huí jiā ma?',
        meaning: 'Sắp được nghỉ rồi! Tết cậu về nhà không?',
        expression: 'happy', vocab: ['快要', '春节']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '回！前年冬天我也回了，今年春天才来这儿。',
        pinyin: 'Huí! Qiánnián dōngtiān wǒ yě huí le, jīnnián chūntiān cái lái zhèr.',
        meaning: 'Về chứ! Mùa đông năm kia tớ cũng về, mùa xuân năm nay mới đến đây.',
        expression: 'happy', vocab: ['前年', '冬天', '春天']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '假期有多长？',
        pinyin: 'Jiàqī yǒu duō cháng?',
        meaning: 'Kỳ nghỉ dài bao lâu?',
        expression: 'curious', vocab: ['假期']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '不久，几天而已。等我几分钟，刚才老师查过了。',
        pinyin: 'Bùjiǔ, jǐ tiān éryǐ. Děng wǒ jǐ fēnzhōng, gāngcái lǎoshī chá guò le.',
        meaning: 'Không lâu, chỉ vài ngày thôi. Đợi tớ vài phút, vừa nãy thầy đã tra rồi.',
        expression: 'focused', vocab: ['不久', '分钟', '刚才']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'classroom',
        scene: '📍 Phòng học',
        expression: 'curious',
        q: 'Mai muốn nói "Tớ vừa mới đến". Nên dùng từ nào?',
        options: [
          { text: '我刚刚到。', pinyin: 'Wǒ gānggang dào.', meaning: 'Tớ vừa mới đến.', correct: true,
            feedback: 'Đúng! 刚刚 = vừa mới (ngay trước đó).' },
          { text: '我今后到。', pinyin: 'Wǒ jīnhòu dào.', meaning: 'Sau này tớ đến.', correct: false,
            feedback: '今后 = sau này, từ nay về sau; ngược với "vừa mới".' },
          { text: '我前年到。', pinyin: 'Wǒ qiánnián dào.', meaning: 'Năm kia tớ đến.', correct: false,
            feedback: '前年 = năm kia; không phải "vừa mới".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我刚刚到，过去的事就别提了，后来我们再聊。',
        pinyin: 'Wǒ gānggang dào, guòqù de shì jiù bié tí le, hòulái wǒmen zài liáo.',
        meaning: 'Tớ vừa mới đến, chuyện quá khứ đừng nhắc nữa, lát nữa mình nói tiếp.',
        expression: 'happy', vocab: ['刚刚', '过去', '后来']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"快要...了" diễn đạt điều gì?',
            options: ['sắp... rồi', 'đã... rồi', 'từng...', 'mãi mãi...'],
            answer: 0
          },
          {
            q: '"刚刚" và "今后" — từ nào nghĩa là "vừa mới"?',
            options: ['刚刚', '今后', '前年', '不久'],
            answer: 0
          },
          {
            q: '"假期" có nghĩa là gì?',
            options: ['kỳ nghỉ', 'mùa xuân', 'nửa đêm', 'phút'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Phòng học · Tiếp tục', bg: 'classroom',
        cast: ['mai', 'xiaomei', 'laoli'],
        text: 'Thầy Lý kể chuyện học hành thời trẻ.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '平时要多练习，平常的努力很重要。',
        pinyin: 'Píngshí yào duō liànxí, píngcháng de nǔlì hěn zhòngyào.',
        meaning: 'Ngày thường phải luyện tập nhiều, sự nỗ lực hằng ngày rất quan trọng.',
        expression: 'focused', vocab: ['平时', '平常']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '老师，您当时怎么学的？',
        pinyin: 'Lǎoshī, nín dāngshí zěnme xué de?',
        meaning: 'Thầy ơi, hồi đó thầy học thế nào ạ?',
        expression: 'curious', vocab: ['当时']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'], bg: 'classroom',
        scene: '📍 Phòng học',
        expression: 'happy',
        q: 'Tiểu Mỹ muốn nói "Tớ hay thức học đến nửa đêm". Nên dùng từ nào cho "nửa đêm"?',
        options: [
          { text: '我老是半夜还在学。', pinyin: 'Wǒ lǎoshi bànyè hái zài xué.', meaning: 'Tớ hay thức học đến nửa đêm.', correct: true,
            feedback: 'Đúng! 半夜 = nửa đêm; 老是 = cứ, hay (lặp đi lặp lại).' },
          { text: '我老是冬天还在学。', pinyin: 'Wǒ lǎoshi dōngtiān hái zài xué.', meaning: '(Sai ngữ cảnh)', correct: false,
            feedback: '冬天 = mùa đông, không phải "nửa đêm".' },
          { text: '我老是假期还在学。', pinyin: 'Wǒ lǎoshi jiàqī hái zài xué.', meaning: '(Sai nghĩa)', correct: false,
            feedback: '假期 = kỳ nghỉ, không phải "nửa đêm".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'],
        text: '我老是半夜还在学，今后想存一千块去旅行。老年人也能学！',
        pinyin: 'Wǒ lǎoshi bànyè hái zài xué, jīnhòu xiǎng cún yìqiān kuài qù lǚxíng. Lǎonián rén yě néng xué!',
        meaning: 'Tớ hay thức học đến nửa đêm, sau này muốn để dành một nghìn tệ đi du lịch. Người già cũng học được mà!',
        expression: 'happy', vocab: ['老是', '半夜', '今后', '千', '老年']
      }
    ],
    vocab: [
      { h: '半夜', p: 'bànyè', v: 'nửa đêm', e: 'midnight' },
      { h: '不久', p: 'bùjiǔ', v: 'không lâu, chẳng bao lâu', e: 'not long (after)' },
      { h: '春节', p: 'chūnjié', v: 'Tết (Xuân tiết)', e: 'Spring Festival (Chinese New Year)' },
      { h: '春天', p: 'chūntiān', v: 'mùa xuân', e: 'spring (season)' },
      { h: '当时', p: 'dāngshí', v: 'lúc đó, hồi đó', e: 'then' },
      { h: '冬天', p: 'dōngtiān', v: 'mùa đông', e: 'winter' },
      { h: '分钟', p: 'fēnzhōng', v: 'phút', e: 'minute' },
      { h: '刚才', p: 'gāngcái', v: 'vừa nãy', e: 'just now' },
      { h: '刚刚', p: 'gānggang', v: 'vừa mới', e: 'just recently' },
      { h: '过去', p: 'guòqù', v: 'quá khứ; đi qua', e: 'past' },
      { h: '后来', p: 'hòulái', v: 'về sau, sau đó', e: 'afterwards' },
      { h: '假期', p: 'jiàqī', v: 'kỳ nghỉ', e: 'vacation' },
      { h: '今后', p: 'jīnhòu', v: 'từ nay về sau', e: 'hereafter' },
      { h: '快要', p: 'kuàiyào', v: 'sắp (sửa)', e: 'nearly at the point of (doing sth)' },
      { h: '老年', p: 'lǎonián', v: 'tuổi già, người già', e: 'elderly' },
      { h: '老是', p: 'lǎoshi', v: 'cứ, hay (lặp lại)', e: 'always' },
      { h: '平常', p: 'píngcháng', v: 'thường ngày, bình thường', e: 'ordinary' },
      { h: '平时', p: 'píngshí', v: 'ngày thường', e: 'ordinarily' },
      { h: '千', p: 'qiān', v: 'nghìn', e: 'thousand' },
      { h: '前年', p: 'qiánnián', v: 'năm kia', e: 'the year before last' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '___放假了！', options: ['快要', '不久', '当时'], answer: '快要' },
        { type: 'fill', sentence: '___你回家吗？', options: ['春节', '冬天', '半夜'], answer: '春节' },
        { type: 'fill', sentence: '___有多长？', options: ['假期', '分钟', '千'], answer: '假期' },
        { type: 'fill', sentence: '前年___我也回了。', options: ['冬天', '春节', '平时'], answer: '冬天' },
        { type: 'fill', sentence: '等我几___。', options: ['分钟', '千', '前年'], answer: '分钟' }
      ],
      normal: [
        { type: 'fill', sentence: '我___到。', options: ['刚刚', '今后', '前年'], answer: '刚刚' },
        { type: 'fill', sentence: '___的事就别提了。', options: ['过去', '后来', '当时'], answer: '过去' },
        { type: 'fill', sentence: '___我们再聊。', options: ['后来', '刚才', '不久'], answer: '后来' },
        { type: 'fill', sentence: '___要多练习。', options: ['平时', '半夜', '春天'], answer: '平时' },
        { type: 'fill', sentence: '您___怎么学的？', options: ['当时', '今后', '不久'], answer: '当时' },
        { type: 'order', words: ['放假', '快要', '了'], answer: '快要放假了' },
        { type: 'order', words: ['到', '我', '刚刚'], answer: '我刚刚到' }
      ],
      hard: [
        { type: 'fill', sentence: '我老是___还在学。', options: ['半夜', '冬天', '假期'], answer: '半夜' },
        { type: 'fill', sentence: '___想存一千块去旅行。', options: ['今后', '刚刚', '前年'], answer: '今后' },
        { type: 'fill', sentence: '想存一___块。', options: ['千', '分钟', '不久'], answer: '千' },
        { type: 'fill', sentence: '___人也能学！', options: ['老年', '平常', '当时'], answer: '老年' },
        { type: 'translate', prompt: 'Sắp được nghỉ rồi!', answer: '快要放假了！' },
        { type: 'translate', prompt: 'Tớ vừa mới đến.', answer: '我刚刚到。' }
      ]
    }
  },
  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 58: Thời gian & lịch trình (2) — 20 từ
  // 秋天, 全年, 日子, 上周, 少年, 晚会, 万, 下周, 夏天, 小时候, 夜, 夜里, 一点点, 月份, 早晨, 这时候, 中年, 周, 周末, 最近
  // ───────────────────────────────────────────────────────────────────────────
  58: {
    id: 58,
    level: 2,
    title: 'Thời gian & lịch trình (2)',
    context: 'Một buổi sáng đầu thu, cả nhóm bàn về buổi dạ hội cuối tuần và nhớ lại những ngày thơ ấu.',
    vocabPreview: ['最近', '周末', '早晨', '小时候', '月份'],
    objectives: [
      'Dùng từ chỉ thời gian 上周 / 下周 / 最近 / 早晨',
      'Diễn đạt tần suất bằng 常常',
      'Dùng cụm 这时候 / 那时候 (lúc này / lúc đó)',
      'Nói về dạo này, tuổi thơ (周末 · 小时候 · 月份)'
    ],
    grammarNotes: [
      { point: 'Từ chỉ thời gian: 上周 / 下周 / 最近',
        explain: '上周 = tuần trước, 下周 = tuần sau, 最近 = dạo này; đặt trước động từ hoặc đầu câu.',
        examples: [
          { zh: '上周我太忙，下周才有空。', py: 'Shàng zhōu wǒ tài máng, xià zhōu cái yǒu kòng.', vi: 'Tuần trước tớ bận quá, tuần sau mới rảnh.' }
        ] },
      { point: '常常 — thường (tần suất)',
        explain: '常常 đặt trước động từ chỉ việc xảy ra nhiều lần.',
        examples: [
          { zh: '我夜里常常学到很晚。', py: 'Wǒ yèlǐ chángcháng xuédào hěn wǎn.', vi: 'Tớ ban đêm thường học đến rất khuya.' }
        ] },
      { point: '这时候 / 那时候 — lúc này / lúc đó',
        explain: 'Cụm chỉ thời điểm; 这时候 cho hiện tại / lúc đang nói, 那时候 cho quá khứ.',
        examples: [
          { zh: '那时候日子很简单。', py: 'Nà shíhou rìzi hěn jiǎndān.', vi: 'Lúc đó ngày tháng rất đơn giản.' }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Sân trường · Sáng sớm', bg: 'campus',
        cast: ['mai', 'xiaomei'],
        text: 'Một buổi sáng sớm đầu thu, hai bạn gặp nhau ở sân trường.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '最近怎么样？这个周末有晚会！',
        pinyin: 'Zuìjìn zěnmeyàng? Zhège zhōumò yǒu wǎnhuì!',
        meaning: 'Dạo này thế nào? Cuối tuần này có dạ hội đấy!',
        expression: 'happy', vocab: ['最近', '周末', '晚会']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '太好了！上周我太忙，下周才有空。',
        pinyin: 'Tài hǎo le! Shàngzhōu wǒ tài máng, xiàzhōu cái yǒu kòng.',
        meaning: 'Tuyệt quá! Tuần trước tớ bận quá, tuần sau mới rảnh.',
        expression: 'happy', vocab: ['上周', '下周']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '早晨的空气真好。夏天快过去，秋天到了。',
        pinyin: 'Zǎochén de kōngqì zhēn hǎo. Xiàtiān kuài guòqù, qiūtiān dào le.',
        meaning: 'Không khí buổi sáng thật trong lành. Mùa hè sắp qua, mùa thu đến rồi.',
        expression: 'happy', vocab: ['早晨', '夏天', '秋天']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '是啊，全年我最喜欢这个月份。',
        pinyin: 'Shì a, quánnián wǒ zuì xǐhuan zhège yuèfèn.',
        meaning: 'Ừ, cả năm tớ thích nhất tháng này.',
        expression: 'happy', vocab: ['全年', '月份']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'campus',
        scene: '📍 Sân trường',
        expression: 'curious',
        q: 'Mai muốn nói "Hồi nhỏ tớ rất thích chơi". Nên dùng từ nào cho "hồi nhỏ"?',
        options: [
          { text: '我小时候很爱玩。', pinyin: 'Wǒ xiǎoshíhou hěn ài wán.', meaning: 'Hồi nhỏ tớ rất thích chơi.', correct: true,
            feedback: 'Đúng! 小时候 = hồi nhỏ, thuở bé.' },
          { text: '我这时候很爱玩。', pinyin: 'Wǒ zhèshíhou hěn ài wán.', meaning: 'Lúc này tớ rất thích chơi.', correct: false,
            feedback: '这时候 = lúc này, lúc đó; không phải "hồi nhỏ".' },
          { text: '我中年很爱玩。', pinyin: 'Wǒ zhōngnián hěn ài wán.', meaning: 'Thời trung niên tớ rất thích chơi.', correct: false,
            feedback: '中年 = tuổi trung niên; không phải "hồi nhỏ".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我小时候是个快乐的少年，那时候日子很简单。',
        pinyin: 'Wǒ xiǎoshíhou shì gè kuàilè de shàonián, nà shíhou rìzi hěn jiǎndān.',
        meaning: 'Hồi nhỏ tớ là một thiếu niên vui vẻ, ngày tháng khi đó rất đơn giản.',
        expression: 'happy', vocab: ['小时候', '少年', '日子']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"最近" có nghĩa là gì?',
            options: ['dạo này, gần đây', 'cuối tuần', 'buổi sáng', 'mùa thu'],
            answer: 0
          },
          {
            q: '"上周" và "下周" lần lượt là?',
            options: ['tuần trước / tuần sau', 'tuần sau / tuần trước', 'sáng / tối', 'hè / thu'],
            answer: 0
          },
          {
            q: '"小时候" có nghĩa là gì?',
            options: ['hồi nhỏ, thuở bé', 'lúc này', 'tuổi trung niên', 'nửa đêm'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Sân trường · Tiếp tục', bg: 'campus',
        cast: ['mai', 'xiaomei', 'laoli'],
        text: 'Thầy Lý đến và góp chuyện về thời gian biểu.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '一周有七天，一年有很多周。这些日子过得真快。',
        pinyin: 'Yì zhōu yǒu qī tiān, yì nián yǒu hěn duō zhōu. Zhèxiē rìzi guò de zhēn kuài.',
        meaning: 'Một tuần có bảy ngày, một năm có rất nhiều tuần. Những ngày tháng này trôi thật nhanh.',
        expression: 'happy', vocab: ['周']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '老师晚上几点睡？我夜里常常学到很晚。',
        pinyin: 'Lǎoshī wǎnshang jǐ diǎn shuì? Wǒ yèlǐ chángcháng xué dào hěn wǎn.',
        meaning: 'Buổi tối thầy ngủ lúc mấy giờ ạ? Em ban đêm thường học đến rất khuya.',
        expression: 'curious', vocab: ['夜里']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'], bg: 'campus',
        scene: '📍 Sân trường',
        expression: 'happy',
        q: 'Tiểu Mỹ muốn nói "Chỉ học một chút thôi". Nên dùng từ nào?',
        options: [
          { text: '只学一点点。', pinyin: 'Zhǐ xué yìdiǎndiǎn.', meaning: 'Chỉ học một chút xíu thôi.', correct: true,
            feedback: 'Đúng! 一点点 = một chút xíu.' },
          { text: '只学全年。', pinyin: 'Zhǐ xué quánnián.', meaning: '(Sai nghĩa)', correct: false,
            feedback: '全年 = cả năm; không phải "một chút".' },
          { text: '只学月份。', pinyin: 'Zhǐ xué yuèfèn.', meaning: '(Không hợp lý)', correct: false,
            feedback: '月份 = tháng; không phải "một chút".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'],
        text: '只学一点点，到深夜。这时候校园很安静。这位中年老师存了一万块。',
        pinyin: 'Zhǐ xué yìdiǎndiǎn, dào shēnyè. Zhèshíhou xiàoyuán hěn ānjìng. Zhè wèi zhōngnián lǎoshī cún le yíwàn kuài.',
        meaning: 'Chỉ học một chút xíu, đến tận đêm khuya. Lúc này khuôn viên rất yên tĩnh. Vị thầy trung niên này để dành được mười nghìn tệ.',
        expression: 'happy', vocab: ['一点点', '夜', '这时候', '中年', '万']
      }
    ],
    vocab: [
      { h: '秋天', p: 'qiūtiān', v: 'mùa thu', e: 'autumn' },
      { h: '全年', p: 'quánnián', v: 'cả năm, suốt năm', e: 'the whole year' },
      { h: '日子', p: 'rìzi', v: 'ngày tháng, đời sống', e: 'day' },
      { h: '上周', p: 'shàngzhōu', v: 'tuần trước', e: 'last week' },
      { h: '少年', p: 'shàonián', v: 'thiếu niên', e: 'early youth' },
      { h: '晚会', p: 'wǎnhuì', v: 'dạ hội, buổi liên hoan', e: 'evening party' },
      { h: '万', p: 'wàn', v: 'vạn, mười nghìn', e: 'used in 俟' },
      { h: '下周', p: 'xiàzhōu', v: 'tuần sau', e: 'next week' },
      { h: '夏天', p: 'xiàtiān', v: 'mùa hè', e: 'summer' },
      { h: '小时候', p: 'xiǎoshíhou', v: 'hồi nhỏ, thuở bé', e: 'in one\\\'s childhood' },
      { h: '夜', p: 'yè', v: 'đêm', e: 'night, nighttime' },
      { h: '夜里', p: 'yèlǐ', v: 'ban đêm, trong đêm', e: 'during the night' },
      { h: '一点点', p: 'yìdiǎndiǎn', v: 'một chút xíu', e: 'a little bit' },
      { h: '月份', p: 'yuèfèn', v: 'tháng (trong năm)', e: 'month' },
      { h: '早晨', p: 'zǎochén', v: 'buổi sáng sớm', e: 'early morning' },
      { h: '这时候', p: 'zhèshíhou', v: 'lúc này, lúc đó', e: 'At this moment' },
      { h: '中年', p: 'zhōngnián', v: 'tuổi trung niên', e: 'middle age' },
      { h: '周', p: 'zhōu', v: 'tuần', e: 'week, all around, circuit' },
      { h: '周末', p: 'zhōumò', v: 'cuối tuần', e: 'weekend' },
      { h: '最近', p: 'zuìjìn', v: 'dạo này, gần đây', e: 'recently' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '___怎么样？', options: ['最近', '周末', '全年'], answer: '最近' },
        { type: 'fill', sentence: '这个___有晚会！', options: ['周末', '月份', '夜里'], answer: '周末' },
        { type: 'fill', sentence: '___的空气真好。', options: ['早晨', '夜', '中年'], answer: '早晨' },
        { type: 'fill', sentence: '___快过去，秋天到了。', options: ['夏天', '春天', '上周'], answer: '夏天' },
        { type: 'fill', sentence: '秋天___了。', options: ['到', '万', '周'], answer: '到' }
      ],
      normal: [
        { type: 'fill', sentence: '___我太忙。', options: ['上周', '下周', '全年'], answer: '上周' },
        { type: 'fill', sentence: '___才有空。', options: ['下周', '上周', '最近'], answer: '下周' },
        { type: 'fill', sentence: '全年我最喜欢这个___。', options: ['月份', '周末', '日子'], answer: '月份' },
        { type: 'fill', sentence: '这个___有晚会。', options: ['周末', '夜里', '少年'], answer: '周末' },
        { type: 'fill', sentence: '我夜里常学到很晚，只睡___。', options: ['一点点', '全年', '月份'], answer: '一点点' },
        { type: 'order', words: ['有', '这个周末', '晚会'], answer: '这个周末有晚会' },
        { type: 'order', words: ['秋天', '夏天', '过去', '快', '到了'], answer: '夏天快过去秋天到了' }
      ],
      hard: [
        { type: 'fill', sentence: '我___是个快乐的少年。', options: ['小时候', '这时候', '中年'], answer: '小时候' },
        { type: 'fill', sentence: '那时候___很简单。', options: ['日子', '月份', '晚会'], answer: '日子' },
        { type: 'fill', sentence: '我___常常学到很晚。', options: ['夜里', '早晨', '周末'], answer: '夜里' },
        { type: 'fill', sentence: '这位___老师存了一万块。', options: ['中年', '少年', '老年'], answer: '中年' },
        { type: 'translate', prompt: 'Dạo này thế nào?', answer: '最近怎么样？' },
        { type: 'translate', prompt: 'Hồi nhỏ tớ rất thích chơi.', answer: '我小时候很爱玩。' }
      ]
    }
  },
  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 59: Số đếm & đại từ (1) — 22 từ
  // 不少, 大多数, 大量, 段, 多数, 份, 公斤, 好多, 好久, 件, 斤, 句, 辆, 零下, 大家, 多久, 该, 那会儿, 那么, 那时, 那样, 其他
  // ───────────────────────────────────────────────────────────────────────────
  59: {
    id: 59,
    level: 2,
    title: 'Số đếm & đại từ (1)',
    context: 'Cả nhóm đi siêu thị mua đồ chuẩn bị cho buổi dạ hội. Họ tính toán số lượng và nhớ lại chuyện ngày xưa.',
    vocabPreview: ['大家', '不少', '公斤', '多久', '其他'],
    objectives: [
      'Dùng đúng lượng từ: 斤 / 公斤 / 份 / 件 / 辆 / 段 / 句',
      'Diễn đạt “nên / đến lúc” bằng 该 (该走了)',
      'Dùng đại từ chỉ định 那么 / 那样 / 那会儿',
      'Nói về mua sắm, số lượng (不少 · 大量 · 多久)'
    ],
    grammarNotes: [
      { point: 'Lượng từ thường gặp',
        explain: '斤 (≈500g), 公斤 (kg) đo trọng lượng; 份 đếm suất / phần; 件 đếm áo, việc; 辆 đếm xe; 段 đếm đoạn; 句 đếm câu nói.',
        examples: [
          { zh: '买两份礼物，再买几件衣服。', py: 'Mǎi liǎng fèn lǐwù, zài mǎi jǐ jiàn yīfu.', vi: 'Mua hai phần quà, mua thêm vài bộ quần áo.' },
          { zh: '开一辆车去吧。', py: 'Kāi yí liàng chē qù ba.', vi: 'Lái một chiếc xe đi đi.' }
        ] },
      { point: '该 — nên, đến lúc',
        explain: '该 + V diễn đạt “đến lúc nên làm gì”.',
        examples: [
          { zh: '我们该走了。', py: 'Wǒmen gāi zǒu le.', vi: 'Chúng ta nên đi thôi.' }
        ] },
      { point: '那么 / 那样 — đến thế / như vậy',
        explain: '那么 + tính từ nhấn mức độ; 那样 chỉ cách thức “như vậy”.',
        examples: [
          { zh: '别像那样浪费。', py: 'Bié xiàng nàyàng làngfèi.', vi: 'Đừng lãng phí như vậy.' }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Siêu thị · Buổi chiều', bg: 'street',
        cast: ['mai', 'xiaomei'],
        text: 'Cả nhóm đến siêu thị mua đồ cho buổi dạ hội.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '大家好久不见！我们要买不少东西。',
        pinyin: 'Dàjiā hǎojiǔ bú jiàn! Wǒmen yào mǎi bù shǎo dōngxi.',
        meaning: 'Mọi người lâu rồi không gặp! Chúng ta phải mua không ít đồ.',
        expression: 'happy', vocab: ['大家', '好久', '不少']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '是啊，大多数同学都来了，多数人想买水果。',
        pinyin: 'Shì a, dàduōshù tóngxué dōu lái le, duōshù rén xiǎng mǎi shuǐguǒ.',
        meaning: 'Ừ, đa số các bạn đều đến, phần lớn muốn mua trái cây.',
        expression: 'happy', vocab: ['大多数', '多数']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '买几斤苹果？还是几公斤？',
        pinyin: 'Mǎi jǐ jīn píngguǒ? Háishì jǐ gōngjīn?',
        meaning: 'Mua mấy cân táo? Hay mấy ký?',
        expression: 'curious', vocab: ['斤', '公斤']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '买两份礼物，再买几件衣服，还有好多零食。',
        pinyin: 'Mǎi liǎng fèn lǐwù, zài mǎi jǐ jiàn yīfu, hái yǒu hǎoduō língshí.',
        meaning: 'Mua hai phần quà, mua thêm vài bộ quần áo, còn nhiều đồ ăn vặt nữa.',
        expression: 'happy', vocab: ['份', '件', '好多']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'street',
        scene: '📍 Siêu thị',
        expression: 'curious',
        q: 'Mai muốn hỏi "Còn bao lâu nữa?". Nên dùng từ nào?',
        options: [
          { text: '还要多久？', pinyin: 'Hái yào duōjiǔ?', meaning: 'Còn bao lâu nữa?', correct: true,
            feedback: 'Đúng! 多久 = bao lâu (hỏi thời lượng).' },
          { text: '还要那么？', pinyin: 'Hái yào nàme?', meaning: '(Sai cấu trúc)', correct: false,
            feedback: '那么 = như thế, đến thế; không hỏi thời lượng được.' },
          { text: '还要该？', pinyin: 'Hái yào gāi?', meaning: '(Sai nghĩa)', correct: false,
            feedback: '该 = nên, đáng; không phải "bao lâu".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '还要多久？我们该走了。外面零下，开一辆车去吧。',
        pinyin: 'Hái yào duōjiǔ? Wǒmen gāi zǒu le. Wàimiàn língxià, kāi yí liàng chē qù ba.',
        meaning: 'Còn bao lâu nữa? Chúng ta nên đi thôi. Bên ngoài dưới 0 độ, lái một chiếc xe đi đi.',
        expression: 'focused', vocab: ['多久', '该', '零下', '辆']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"不少" có nghĩa là gì?',
            options: ['không ít, khá nhiều', 'rất ít', 'một chút', 'tất cả'],
            answer: 0
          },
          {
            q: '"斤" và "公斤" — đơn vị nào là "ký (kilogram)"?',
            options: ['公斤', '斤', '份', '件'],
            answer: 0
          },
          {
            q: '"该走了" có nghĩa là gì?',
            options: ['nên đi rồi', 'đừng đi', 'đã đi rồi', 'sắp đến'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Siêu thị · Tiếp tục', bg: 'street',
        cast: ['mai', 'xiaomei', 'laoli'],
        text: 'Thầy Lý kể chuyện đi chợ thời xưa.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '那时大家买东西不那么方便，那会儿东西很少。',
        pinyin: 'Nàshí dàjiā mǎi dōngxi bú nàme fāngbiàn, nàhuìr dōngxi hěn shǎo.',
        meaning: 'Hồi đó mọi người mua đồ không tiện như thế, dạo ấy hàng hóa rất ít.',
        expression: 'focused', vocab: ['那时', '那么', '那会儿']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '老师那段话很有用！别像那样浪费。',
        pinyin: 'Lǎoshī nà duàn huà hěn yǒuyòng! Bié xiàng nàyàng làngfèi.',
        meaning: 'Đoạn lời đó của thầy rất hữu ích! Đừng lãng phí như vậy.',
        expression: 'happy', vocab: ['段', '那样']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'], bg: 'street',
        scene: '📍 Siêu thị',
        expression: 'happy',
        q: 'Tiểu Mỹ muốn nói "Những thứ khác cũng mua đi". Nên dùng từ nào cho "những thứ khác"?',
        options: [
          { text: '其他东西也买吧。', pinyin: 'Qítā dōngxi yě mǎi ba.', meaning: 'Những thứ khác cũng mua đi.', correct: true,
            feedback: 'Đúng! 其他 = (những cái) khác.' },
          { text: '那样东西也买吧。', pinyin: 'Nàyàng dōngxi yě mǎi ba.', meaning: '(Sai nghĩa)', correct: false,
            feedback: '那样 = như vậy, kiểu đó; không phải "những cái khác".' },
          { text: '多数东西也买吧。', pinyin: 'Duōshù dōngxi yě mǎi ba.', meaning: '(Lệch nghĩa)', correct: false,
            feedback: '多数 = đa số; không bằng "những cái khác".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'],
        text: '其他东西也买大量吧，每句话我都记下了。',
        pinyin: 'Qítā dōngxi yě mǎi dàliàng ba, měi jù huà wǒ dōu jì xià le.',
        meaning: 'Những thứ khác cũng mua nhiều vào, mỗi câu nói tớ đều ghi lại rồi.',
        expression: 'happy', vocab: ['其他', '大量', '句']
      }
    ],
    vocab: [
      { h: '不少', p: 'bùshǎo', v: 'không ít, khá nhiều', e: 'many' },
      { h: '大多数', p: 'dàduōshù', v: 'đại đa số', e: 'majority' },
      { h: '大量', p: 'dàliàng', v: 'số lượng lớn', e: 'great amount' },
      { h: '段', p: 'duàn', v: 'đoạn (lượng từ)', e: 'section, paragraph, period' },
      { h: '多数', p: 'duōshù', v: 'đa số, phần lớn', e: 'majority' },
      { h: '份', p: 'fèn', v: 'phần (lượng từ)', e: 'classifier for gifts, newspaper, magazine, papers, reports, contracts etc' },
      { h: '公斤', p: 'gōngjīn', v: 'kilogram, ký', e: 'kilogram (kg)' },
      { h: '好多', p: 'hǎoduō', v: 'rất nhiều', e: 'many' },
      { h: '好久', p: 'hǎojiǔ', v: 'lâu, hồi lâu', e: 'quite a while' },
      { h: '件', p: 'jiàn', v: 'cái, bộ (lượng từ)', e: 'item' },
      { h: '斤', p: 'jīn', v: 'cân (500g)', e: 'catty' },
      { h: '句', p: 'jù', v: 'câu (lượng từ)', e: 'sentence, clause' },
      { h: '辆', p: 'liàng', v: 'chiếc (lượng từ xe)', e: 'classifier for vehicles' },
      { h: '零下', p: 'língxià', v: 'dưới 0 độ', e: 'below zero' },
      { h: '大家', p: 'dàjiā', v: 'mọi người', e: 'everyone' },
      { h: '多久', p: 'duōjiǔ', v: 'bao lâu', e: 'how long?' },
      { h: '该', p: 'gāi', v: 'nên, đáng', e: 'should' },
      { h: '那会儿', p: 'nàhuìr', v: 'dạo ấy, lúc đó', e: 'at that time (in the past or the future)' },
      { h: '那么', p: 'nàme', v: 'như thế, đến thế', e: 'like that' },
      { h: '那时', p: 'nàshí', v: 'hồi đó, khi đó', e: 'then' },
      { h: '那样', p: 'nàyàng', v: 'như vậy, kiểu đó', e: 'that kind' },
      { h: '其他', p: 'qítā', v: '(những cái) khác', e: 'other' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '___好久不见！', options: ['大家', '其他', '多数'], answer: '大家' },
        { type: 'fill', sentence: '我们要买___东西。', options: ['不少', '该', '那么'], answer: '不少' },
        { type: 'fill', sentence: '买几___苹果？', options: ['斤', '辆', '句'], answer: '斤' },
        { type: 'fill', sentence: '还是几___？', options: ['公斤', '段', '份'], answer: '公斤' },
        { type: 'fill', sentence: '买两___礼物。', options: ['份', '辆', '斤'], answer: '份' }
      ],
      normal: [
        { type: 'fill', sentence: '还要___？', options: ['多久', '那么', '该'], answer: '多久' },
        { type: 'fill', sentence: '我们___走了。', options: ['该', '那样', '好多'], answer: '该' },
        { type: 'fill', sentence: '外面___，很冷。', options: ['零下', '大量', '好久'], answer: '零下' },
        { type: 'fill', sentence: '开一___车去吧。', options: ['辆', '件', '句'], answer: '辆' },
        { type: 'fill', sentence: '___同学都来了。', options: ['大多数', '其他', '那时'], answer: '大多数' },
        { type: 'order', words: ['不少', '买', '东西', '要', '我们'], answer: '我们要买不少东西' },
        { type: 'order', words: ['走了', '该', '我们'], answer: '我们该走了' }
      ],
      hard: [
        { type: 'fill', sentence: '那时买东西不___方便。', options: ['那么', '那样', '那会儿'], answer: '那么' },
        { type: 'fill', sentence: '别像___浪费。', options: ['那样', '那么', '那时'], answer: '那样' },
        { type: 'fill', sentence: '___东西也买吧。', options: ['其他', '多数', '大量'], answer: '其他' },
        { type: 'fill', sentence: '每___话我都记下了。', options: ['句', '段', '件'], answer: '句' },
        { type: 'translate', prompt: 'Còn bao lâu nữa?', answer: '还要多久？' },
        { type: 'translate', prompt: 'Mọi người lâu rồi không gặp!', answer: '大家好久不见！' }
      ]
    }
  },
  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 60: Số đếm & đại từ (2) — 22 từ
  // 名, 篇, 片, 千克, 全部, 少数, 条, 位, 许多, 一部分, 亿, 只, 周年, 座, 其中, 什么样, 它, 它们, 为什么, 有人, 咱, 咱们
  // ───────────────────────────────────────────────────────────────────────────
  60: {
    id: 60,
    level: 2,
    title: 'Số đếm & đại từ (2)',
    context: 'Nhân dịp kỷ niệm thành lập trường, cả nhóm cùng làm một bài viết và chọn ảnh cho triển lãm.',
    vocabPreview: ['咱们', '许多', '全部', '为什么', '它们'],
    objectives: [
      'Dùng đúng lượng từ: 篇 / 片 / 位 / 名 / 座 / 只',
      'Phân biệt 咱们 (gồm người nghe) và 我们',
      'Dùng đại từ 它 / 它们 cho vật và con vật',
      'Nói về làm bài viết, chọn ảnh (文章 · 照片 · 全部)'
    ],
    grammarNotes: [
      { point: 'Lượng từ: 篇 / 片 / 位 / 名 / 座 / 只',
        explain: '篇 đếm bài văn; 片 đếm tấm / miếng; 位 đếm người (lịch sự); 名 đếm người (chính thức); 座 đếm tòa / ngọn; 只 đếm con vật.',
        examples: [
          { zh: '这座楼里有十位老师，三名学生。', py: 'Zhè zuò lóu lǐ yǒu shí wèi lǎoshī, sān míng xuésheng.', vi: 'Tòa nhà này có mười giáo viên, ba học sinh.' }
        ] },
      { point: '咱们 vs 我们',
        explain: '咱们 nhất định bao gồm cả người nghe; 我们 có thể bao gồm hoặc không.',
        examples: [
          { zh: '咱们一起做吧！', py: 'Zánmen yìqǐ zuò ba!', vi: 'Chúng mình cùng làm nhé!' }
        ] },
      { point: '它 / 它们 — nó / chúng (vật, con vật)',
        explain: '它 thay cho vật hoặc con vật số ít; 它们 cho số nhiều.',
        examples: [
          { zh: '它们真可爱！', py: 'Tāmen zhēn kě\'ài!', vi: 'Chúng thật đáng yêu!' }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Phòng học · Buổi tối', bg: 'classroom',
        cast: ['mai', 'xiaomei'],
        text: 'Hai bạn chuẩn bị bài viết cho lễ kỷ niệm của trường.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '咱们写一篇文章吧！咱也选几片照片。',
        pinyin: 'Zánmen xiě yì piān wénzhāng ba! Zán yě xuǎn jǐ piàn zhàopiàn.',
        meaning: 'Chúng mình viết một bài văn đi! Mình cũng chọn vài tấm ảnh.',
        expression: 'happy', vocab: ['咱们', '篇', '咱', '片']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好！今年是学校五周年。有许多照片，全部都很美。',
        pinyin: 'Hǎo! Jīnnián shì xuéxiào wǔ zhōunián. Yǒu xǔduō zhàopiàn, quánbù dōu hěn měi.',
        meaning: 'Được! Năm nay là kỷ niệm 5 năm của trường. Có rất nhiều ảnh, tất cả đều đẹp.',
        expression: 'happy', vocab: ['周年', '许多', '全部']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '其中一部分是动物的。你看那只猫和它的朋友。',
        pinyin: 'Qízhōng yíbùfèn shì dòngwù de. Nǐ kàn nà zhī māo hé tā de péngyou.',
        meaning: 'Trong đó một phần là về động vật. Cậu xem con mèo kia và bạn của nó.',
        expression: 'curious', vocab: ['其中', '一部分', '只', '它']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '它们真可爱！为什么有人不喜欢动物呢？',
        pinyin: 'Tāmen zhēn kě’ài! Wèishénme yǒurén bù xǐhuan dòngwù ne?',
        meaning: 'Chúng thật đáng yêu! Vì sao lại có người không thích động vật nhỉ?',
        expression: 'curious', vocab: ['它们', '为什么', '有人']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'classroom',
        scene: '📍 Phòng học',
        expression: 'curious',
        q: 'Mai muốn hỏi "Cậu muốn loại ảnh như thế nào?". Nên dùng từ nào?',
        options: [
          { text: '你想要什么样的照片？', pinyin: 'Nǐ xiǎng yào shénmeyàng de zhàopiàn?', meaning: 'Cậu muốn loại ảnh như thế nào?', correct: true,
            feedback: 'Đúng! 什么样 = như thế nào, kiểu gì.' },
          { text: '你想要为什么的照片？', pinyin: 'Nǐ xiǎng yào wèishénme de zhàopiàn?', meaning: '(Sai nghĩa)', correct: false,
            feedback: '为什么 = vì sao; dùng để hỏi lý do, không hỏi "loại nào".' },
          { text: '你想要其中的照片？', pinyin: 'Nǐ xiǎng yào qízhōng de zhàopiàn?', meaning: '(Lệch nghĩa)', correct: false,
            feedback: '其中 = trong đó; không phải "loại nào".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '你想要什么样的照片？少数人喜欢黑白的。',
        pinyin: 'Nǐ xiǎng yào shénmeyàng de zhàopiàn? Shǎoshù rén xǐhuan hēibái de.',
        meaning: 'Cậu muốn loại ảnh như thế nào? Số ít người thích ảnh đen trắng.',
        expression: 'curious', vocab: ['什么样', '少数']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"咱们" có nghĩa là gì?',
            options: ['chúng mình (gồm cả người nghe)', 'họ', 'các bạn', 'nó'],
            answer: 0
          },
          {
            q: '"它" và "它们" dùng để chỉ gì?',
            options: ['nó / chúng nó (vật, con vật)', 'tôi / chúng tôi', 'bạn / các bạn', 'ai đó'],
            answer: 0
          },
          {
            q: '"全部" có nghĩa là gì?',
            options: ['toàn bộ, tất cả', 'một phần', 'số ít', 'đa số'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Phòng học · Tiếp tục', bg: 'classroom',
        cast: ['mai', 'xiaomei', 'laoli'],
        text: 'Thầy Lý đến xem công việc của hai bạn.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '这座楼里有十位老师，三名学生帮忙。',
        pinyin: 'Zhè zuò lóu lǐ yǒu shí wèi lǎoshī, sān míng xuésheng bāngmáng.',
        meaning: 'Tòa nhà này có mười vị giáo viên, ba học sinh giúp việc.',
        expression: 'happy', vocab: ['座', '位', '名']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '这条信息说我们买了三千克水果，还存了一亿……开玩笑的！',
        pinyin: 'Zhè tiáo xìnxī shuō wǒmen mǎi le sān qiānkè shuǐguǒ, hái cún le yí yì…… kāiwánxiào de!',
        meaning: 'Tin nhắn này nói chúng ta mua ba ký trái cây, còn để dành một trăm triệu… đùa thôi!',
        expression: 'happy', vocab: ['条', '千克', '亿']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'], bg: 'classroom',
        scene: '📍 Phòng học',
        expression: 'happy',
        q: 'Tiểu Mỹ muốn rủ "Chúng mình cùng làm nhé". Nên dùng từ nào?',
        options: [
          { text: '咱们一起做吧！', pinyin: 'Zánmen yìqǐ zuò ba!', meaning: 'Chúng mình cùng làm nhé!', correct: true,
            feedback: 'Đúng! 咱们 = chúng mình (gồm cả người nghe).' },
          { text: '它们一起做吧！', pinyin: 'Tāmen yìqǐ zuò ba!', meaning: '(Sai nghĩa)', correct: false,
            feedback: '它们 = chúng nó (vật/con vật), không chỉ người.' },
          { text: '有人一起做吧！', pinyin: 'Yǒurén yìqǐ zuò ba!', meaning: '(Sai nghĩa)', correct: false,
            feedback: '有人 = có người; không phải "chúng mình".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'],
        text: '咱们一起做吧！全部照片中，这几片最好。',
        pinyin: 'Zánmen yìqǐ zuò ba! Quánbù zhàopiàn zhōng, zhè jǐ piàn zuì hǎo.',
        meaning: 'Chúng mình cùng làm nhé! Trong tất cả ảnh, mấy tấm này đẹp nhất.',
        expression: 'happy', vocab: ['咱们']
      }
    ],
    vocab: [
      { h: '名', p: 'míng', v: 'người (lượng từ)', e: 'name' },
      { h: '篇', p: 'piān', v: 'bài (lượng từ văn bản)', e: 'sheet' },
      { h: '片', p: 'piàn', v: 'tấm, miếng (lượng từ)', e: 'disk' },
      { h: '千克', p: 'qiānkè', v: 'kilogram', e: 'kilogram' },
      { h: '全部', p: 'quánbù', v: 'toàn bộ, tất cả', e: 'whole' },
      { h: '少数', p: 'shǎoshù', v: 'số ít, thiểu số', e: 'small number' },
      { h: '条', p: 'tiáo', v: 'cái, sợi (lượng từ)', e: 'strip' },
      { h: '位', p: 'wèi', v: 'vị (lượng từ người, lịch sự)', e: 'position' },
      { h: '许多', p: 'xǔduō', v: 'rất nhiều', e: 'many' },
      { h: '一部分', p: 'yíbùfèn', v: 'một phần', e: 'portion' },
      { h: '亿', p: 'yì', v: 'trăm triệu', e: '100 million' },
      { h: '只', p: 'zhī', v: 'con (lượng từ động vật)', e: 'only' },
      { h: '周年', p: 'zhōunián', v: 'năm tròn (kỷ niệm)', e: 'anniversary' },
      { h: '座', p: 'zuò', v: 'tòa, ngọn (lượng từ)', e: 'seat' },
      { h: '其中', p: 'qízhōng', v: 'trong đó', e: 'among' },
      { h: '什么样', p: 'shénmeyàng', v: 'như thế nào, kiểu gì', e: 'what kind?' },
      { h: '它', p: 'tā', v: 'nó (vật, con vật)', e: 'it' },
      { h: '它们', p: 'tāmen', v: 'chúng nó (vật, con vật)', e: 'they (for inanimate objects)' },
      { h: '为什么', p: 'wèishénme', v: 'vì sao, tại sao', e: 'why?' },
      { h: '有人', p: 'yǒurén', v: 'có người, có ai đó', e: 'someone' },
      { h: '咱', p: 'zán', v: 'mình, tôi (khẩu ngữ)', e: 'we, us (including listener)' },
      { h: '咱们', p: 'zánmen', v: 'chúng mình (gồm người nghe)', e: 'we or us (including both the speaker and the person(s) spoken to)' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '___写一篇文章吧！', options: ['咱们', '它们', '有人'], answer: '咱们' },
        { type: 'fill', sentence: '写一___文章。', options: ['篇', '片', '条'], answer: '篇' },
        { type: 'fill', sentence: '有___照片。', options: ['许多', '少数', '其中'], answer: '许多' },
        { type: 'fill', sentence: '___都很美。', options: ['全部', '一部分', '为什么'], answer: '全部' },
        { type: 'fill', sentence: '选几___照片。', options: ['片', '名', '座'], answer: '片' }
      ],
      normal: [
        { type: 'fill', sentence: '___一部分是动物的。', options: ['其中', '全部', '什么样'], answer: '其中' },
        { type: 'fill', sentence: '那只猫和___的朋友。', options: ['它', '它们', '咱'], answer: '它' },
        { type: 'fill', sentence: '___真可爱！', options: ['它们', '有人', '咱们'], answer: '它们' },
        { type: 'fill', sentence: '___有人不喜欢动物？', options: ['为什么', '什么样', '其中'], answer: '为什么' },
        { type: 'fill', sentence: '___人喜欢黑白的。', options: ['少数', '许多', '全部'], answer: '少数' },
        { type: 'order', words: ['一起', '做吧', '咱们'], answer: '咱们一起做吧' },
        { type: 'order', words: ['文章', '一篇', '写', '咱们'], answer: '咱们写一篇文章' }
      ],
      hard: [
        { type: 'fill', sentence: '这座楼里有十___老师。', options: ['位', '名', '条'], answer: '位' },
        { type: 'fill', sentence: '三___学生帮忙。', options: ['名', '位', '片'], answer: '名' },
        { type: 'fill', sentence: '这___信息说……', options: ['条', '篇', '座'], answer: '条' },
        { type: 'fill', sentence: '你想要___的照片？', options: ['什么样', '为什么', '其中'], answer: '什么样' },
        { type: 'translate', prompt: 'Chúng mình cùng làm nhé!', answer: '咱们一起做吧！' },
        { type: 'translate', prompt: 'Vì sao có người không thích động vật?', answer: '为什么有人不喜欢动物？' }
      ]
    }
  },
  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 61: Đại từ nâng cao — 7 từ
  // 怎么办, 怎么样, 怎样, 这么, 这时, 这样, 自己
  // ───────────────────────────────────────────────────────────────────────────
  61: {
    id: 61,
    level: 2,
    title: 'Đại từ nâng cao',
    context: 'Mai quên mang sách, không biết xoay xở thế nào. Tiểu Mỹ giúp cô tìm cách giải quyết.',
    vocabPreview: ['怎么办', '怎么样', '这样', '自己', '这么'],
    objectives: [
      'Cầu cứu phương án bằng 怎么办',
      'Hỏi ý kiến / tình trạng bằng 怎么样 / 怎样',
      'Tự xử lý bằng 自己 (自己想办法)',
      'Ôn lại câu chữ 把 (把书忘了)'
    ],
    grammarNotes: [
      { point: '怎么办 — làm sao đây',
        explain: '怎么办 hỏi nên xử lý thế nào khi gặp khó, thường đứng cuối câu.',
        examples: [
          { zh: '我把书忘了，怎么办？', py: 'Wǒ bǎ shū wàng le, zěnme bàn?', vi: 'Tớ quên sách rồi, làm sao đây?' }
        ] },
      { point: '怎么样 / 怎样 — thế nào',
        explain: 'Hỏi ý kiến hoặc tình trạng; 怎样 là dạng trang trọng của 怎么样.',
        examples: [
          { zh: '你觉得这个办法怎么样？', py: 'Nǐ juéde zhège bànfǎ zěnmeyàng?', vi: 'Cậu thấy cách này thế nào?' }
        ] },
      { point: '自己 — tự mình, bản thân',
        explain: '自己 nhấn chính chủ thể tự làm, có thể đứng sau chủ ngữ.',
        examples: [
          { zh: '自己先想想办法。', py: 'Zìjǐ xiān xiǎngxiang bànfǎ.', vi: 'Tự mình nghĩ cách trước đã.' }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Ký túc xá · Buổi tối', bg: 'dorm-room',
        cast: ['mai', 'xiaomei'],
        text: 'Mai phát hiện mình quên mang sách về ôn bài.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '糟糕！我把书忘了，怎么办？',
        pinyin: 'Zāogāo! Wǒ bǎ shū wàng le, zěnmebàn?',
        meaning: 'Hỏng rồi! Tớ quên sách rồi, làm sao đây?',
        expression: 'sad', vocab: ['怎么办']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '别急，自己先想想办法。',
        pinyin: 'Bié jí, zìjǐ xiān xiǎngxiang bànfǎ.',
        meaning: 'Đừng vội, tự mình nghĩ cách trước đã.',
        expression: 'focused', vocab: ['自己']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这么晚了，怎么样才能拿到书？',
        pinyin: 'Zhème wǎn le, zěnmeyàng cái néng ná dào shū?',
        meaning: 'Muộn thế này rồi, làm thế nào mới lấy được sách?',
        expression: 'sad', vocab: ['这么', '怎么样']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'dorm-room',
        scene: '📍 Ký túc xá',
        expression: 'happy',
        q: 'Tiểu Mỹ muốn đề xuất "Thế này nhé, tớ cho cậu mượn". Nên dùng từ nào?',
        options: [
          { text: '这样吧，我借你。', pinyin: 'Zhèyàng ba, wǒ jiè nǐ.', meaning: 'Thế này nhé, tớ cho cậu mượn.', correct: true,
            feedback: 'Đúng! 这样 = thế này, như vậy.' },
          { text: '怎样吧，我借你。', pinyin: 'Zěnyàng ba, wǒ jiè nǐ.', meaning: '(Sai cấu trúc)', correct: false,
            feedback: '怎样 = thế nào (dùng để hỏi), không dùng đề xuất kiểu này.' },
          { text: '这时吧，我借你。', pinyin: 'Zhèshí ba, wǒ jiè nǐ.', meaning: '(Sai cấu trúc)', correct: false,
            feedback: '这时 = lúc này (thời gian); không phải "thế này".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这样吧，我借你。这时图书馆还开着。',
        pinyin: 'Zhèyàng ba, wǒ jiè nǐ. Zhèshí túshūguǎn hái kāizhe.',
        meaning: 'Thế này nhé, tớ cho cậu mượn. Lúc này thư viện vẫn còn mở.',
        expression: 'happy', vocab: ['这样', '这时']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"怎么办" có nghĩa là gì?',
            options: ['làm sao đây, phải làm thế nào', 'thế nào rồi', 'tự mình', 'lúc này'],
            answer: 0
          },
          {
            q: '"自己" có nghĩa là gì?',
            options: ['tự mình, bản thân', 'như vậy', 'thế nào', 'lúc này'],
            answer: 0
          },
          {
            q: 'Câu đề xuất "这样吧" có nghĩa gần với?',
            options: ['Thế này nhé / Vậy thì thế này', 'Khi nào?', 'Tại sao?', 'Bao nhiêu?'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '谢谢！你觉得这个办法怎样？',
        pinyin: 'Xièxie! Nǐ juéde zhège bànfǎ zěnyàng?',
        meaning: 'Cảm ơn! Cậu thấy cách này thế nào?',
        expression: 'happy', vocab: ['怎样']
      }
    ],
    vocab: [
      { h: '怎么办', p: 'zěnmebàn', v: 'làm sao đây, làm thế nào', e: 'what\\\'s to be done' },
      { h: '怎么样', p: 'zěnmeyàng', v: 'thế nào, ra sao', e: 'how?' },
      { h: '怎样', p: 'zěnyàng', v: 'thế nào (như 怎么样)', e: 'how' },
      { h: '这么', p: 'zhème', v: 'thế này, đến mức này', e: 'so much' },
      { h: '这时', p: 'zhèshí', v: 'lúc này, lúc đó', e: 'at this time' },
      { h: '这样', p: 'zhèyàng', v: 'thế này, như vậy', e: 'this kind of' },
      { h: '自己', p: 'zìjǐ', v: 'tự mình, bản thân', e: 'oneself' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我把书忘了，___？', options: ['怎么办', '这样', '这么'], answer: '怎么办' },
        { type: 'fill', sentence: '___先想想办法。', options: ['自己', '这时', '怎样'], answer: '自己' },
        { type: 'fill', sentence: '___晚了。', options: ['这么', '这样', '怎样'], answer: '这么' },
        { type: 'fill', sentence: '___吧，我借你。', options: ['这样', '这时', '怎么办'], answer: '这样' },
        { type: 'fill', sentence: '你觉得这个办法___？', options: ['怎样', '这么', '自己'], answer: '怎样' }
      ],
      normal: [
        { type: 'fill', sentence: '___才能拿到书？', options: ['怎么样', '这样', '这么'], answer: '怎么样' },
        { type: 'fill', sentence: '___图书馆还开着。', options: ['这时', '这样', '怎样'], answer: '这时' },
        { type: 'fill', sentence: '要___想办法。', options: ['自己', '这么', '这时'], answer: '自己' },
        { type: 'fill', sentence: '你最近___？', options: ['怎么样', '怎么办', '这样'], answer: '怎么样' },
        { type: 'order', words: ['办', '怎么', '我'], answer: '我怎么办' },
        { type: 'order', words: ['你', '我', '这样吧', '借'], answer: '这样吧我借你' }
      ],
      hard: [
        { type: 'fill', sentence: '___晚了，怎么样才能拿到？', options: ['这么', '这样', '这时'], answer: '这么' },
        { type: 'fill', sentence: '自己先想想___。', options: ['办法', '怎样', '这时'], answer: '办法' },
        { type: 'fill', sentence: '这个办法___？', options: ['怎样', '这么', '自己'], answer: '怎样' },
        { type: 'translate', prompt: 'Tớ quên sách rồi, làm sao đây?', answer: '我把书忘了，怎么办？' },
        { type: 'translate', prompt: 'Tự mình nghĩ cách trước đã.', answer: '自己先想想办法。' }
      ]
    }
  },
  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 62: Địa điểm & đồ vật (1) — 21 từ
  // 北方, 笔记本, 超市, 东北, 东方, 东南, 公园, 国际, 花园, 机会, 南方, 报纸, 笔, 灯, 黑板, 计算机, 筷子, 那时候, 瓶, 瓶子, 球鞋
  // ───────────────────────────────────────────────────────────────────────────
  62: {
    id: 62,
    level: 2,
    title: 'Địa điểm & đồ vật (1)',
    context: 'Mai và Tiểu Mỹ đi siêu thị gần công viên, nói về phương hướng và mua văn phòng phẩm.',
    vocabPreview: ['超市', '公园', '机会', '笔记本', '国际'],
    objectives: [
      'Dùng phương vị từ: 东边 / 东方 / 东北 / 东南',
      'Nói khoảng cách bằng 离 (离花园很近)',
      'Dùng đúng lượng từ 瓶 / 双 / 台 (一瓶水)',
      'Nói về siêu thị, văn phòng phẩm (超市 · 笔记本 · 国际)'
    ],
    grammarNotes: [
      { point: 'Phương vị từ',
        explain: '东边 / 南方 chỉ phía; 东北 (Đông Bắc), 东南 (Đông Nam) ghép hai hướng; 东方 chỉ phương Đông.',
        examples: [
          { zh: '超市在公园东边。', py: 'Chāoshì zài gōngyuán dōngbian.', vi: 'Siêu thị ở phía đông công viên.' }
        ] },
      { point: '离 — cách (khoảng cách)',
        explain: '“A 离 B + 远 / 近” cho biết A cách B gần hay xa.',
        examples: [
          { zh: '离花园很近。', py: 'Lí huāyuán hěn jìn.', vi: 'Cách vườn hoa rất gần.' }
        ] },
      { point: 'Lượng từ 瓶 / 双 / 台',
        explain: '瓶 đếm chai; 双 đếm đôi (giày, đũa); 台 đếm máy móc.',
        examples: [
          { zh: '桌上有一瓶水。', py: 'Zhuō shàng yǒu yì píng shuǐ.', vi: 'Trên bàn có một chai nước.' },
          { zh: '那双球鞋也是我的。', py: 'Nà shuāng qiúxié yě shì wǒ de.', vi: 'Đôi giày thể thao kia cũng của tớ.' }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Trên phố · Buổi sáng', bg: 'street',
        cast: ['mai', 'xiaomei'],
        text: 'Hai bạn đi bộ đến siêu thị gần công viên.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '超市在公园东边，离花园很近。',
        pinyin: 'Chāoshì zài gōngyuán dōngbiān, lí huāyuán hěn jìn.',
        meaning: 'Siêu thị ở phía đông công viên, cách vườn hoa rất gần.',
        expression: 'happy', vocab: ['超市', '公园', '花园']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我来自南方，她来自北方。',
        pinyin: 'Wǒ láizì nánfāng, tā láizì běifāng.',
        meaning: 'Tớ đến từ phương Nam, cô ấy đến từ phương Bắc.',
        expression: 'happy', vocab: ['南方', '北方']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '东北和东南都很远，这是个国际城市。太阳从东方升起。这是难得的机会。',
        pinyin: 'Dōngběi hé dōngnán dōu hěn yuǎn, zhè shì gè guójì chéngshì. Tàiyáng cóng dōngfāng shēngqǐ. Zhè shì nándé de jīhuì.',
        meaning: 'Đông Bắc và Đông Nam đều rất xa, đây là một thành phố quốc tế. Mặt trời mọc từ phương Đông. Đây là cơ hội hiếm có.',
        expression: 'happy', vocab: ['东北', '东南', '国际', '东方', '机会']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'street',
        scene: '📍 Siêu thị',
        expression: 'curious',
        q: 'Mai cần mua quyển vở để ghi chép. Nên dùng từ nào?',
        options: [
          { text: '我要买一个笔记本。', pinyin: 'Wǒ yào mǎi yí gè bǐjìběn.', meaning: 'Tớ muốn mua một quyển vở.', correct: true,
            feedback: 'Đúng! 笔记本 = quyển vở, sổ ghi chép (cũng là laptop).' },
          { text: '我要买一个报纸。', pinyin: 'Wǒ yào mǎi yí gè bàozhǐ.', meaning: '(Sai — báo không ghi chép)', correct: false,
            feedback: '报纸 = báo (tin tức), không dùng để ghi chép.' },
          { text: '我要买一个黑板。', pinyin: 'Wǒ yào mǎi yí gè hēibǎn.', meaning: '(Không hợp lý)', correct: false,
            feedback: '黑板 = bảng đen, không phải vở.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我要买笔记本、笔和一份报纸。',
        pinyin: 'Wǒ yào mǎi bǐjìběn, bǐ hé yí fèn bàozhǐ.',
        meaning: 'Tớ muốn mua vở, bút và một tờ báo.',
        expression: 'happy', vocab: ['笔记本', '笔', '报纸']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"超市" có nghĩa là gì?',
            options: ['siêu thị', 'công viên', 'vườn hoa', 'phương bắc'],
            answer: 0
          },
          {
            q: '"东方" có nghĩa là gì?',
            options: ['phương Đông', 'phương Tây', 'phương Nam', 'phương Bắc'],
            answer: 0
          },
          {
            q: '"笔记本" có nghĩa là gì?',
            options: ['quyển vở / sổ ghi chép', 'tờ báo', 'bảng đen', 'cây bút'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Lớp học · Tiếp tục', bg: 'classroom',
        cast: ['mai', 'xiaomei', 'laoli'],
        text: 'Về đến lớp, thầy Lý đang sửa đèn và bảng.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '教室的灯坏了，黑板前有一台计算机。',
        pinyin: 'Jiàoshì de dēng huài le, hēibǎn qián yǒu yì tái jìsuànjī.',
        meaning: 'Đèn lớp học hỏng rồi, trước bảng đen có một chiếc máy tính.',
        expression: 'focused', vocab: ['灯', '黑板', '计算机']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '那时候我们用筷子吃饭，桌上有一瓶水。',
        pinyin: 'Nà shíhou wǒmen yòng kuàizi chīfàn, zhuō shàng yǒu yì píng shuǐ.',
        meaning: 'Hồi đó chúng em dùng đũa ăn cơm, trên bàn có một chai nước.',
        expression: 'happy', vocab: ['那时候', '筷子', '瓶']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'], bg: 'classroom',
        scene: '📍 Lớp học',
        expression: 'happy',
        q: 'Tiểu Mỹ chỉ vào cái chai rỗng. Cô ấy muốn nói "Cái chai này là của tớ". Nên dùng từ nào?',
        options: [
          { text: '这个瓶子是我的。', pinyin: 'Zhège píngzi shì wǒ de.', meaning: 'Cái chai này là của tớ.', correct: true,
            feedback: 'Đúng! 瓶子 = cái chai (danh từ vật thể).' },
          { text: '这个瓶是我的。', pinyin: 'Zhège píng shì wǒ de.', meaning: '(Thiếu tự nhiên)', correct: false,
            feedback: '瓶 chủ yếu là lượng từ ("một chai"); chỉ vật thể nên dùng 瓶子.' },
          { text: '这个球鞋是我的。', pinyin: 'Zhège qiúxié shì wǒ de.', meaning: '(Sai vật)', correct: false,
            feedback: '球鞋 = giày thể thao, không phải cái chai.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'],
        text: '这个瓶子是我的，那双球鞋也是。',
        pinyin: 'Zhège píngzi shì wǒ de, nà shuāng qiúxié yě shì.',
        meaning: 'Cái chai này là của tớ, đôi giày thể thao kia cũng vậy.',
        expression: 'happy', vocab: ['瓶子', '球鞋']
      }
    ],
    vocab: [
      { h: '北方', p: 'běifāng', v: 'phương Bắc, miền Bắc', e: 'north' },
      { h: '笔记本', p: 'bǐjìběn', v: 'quyển vở; máy tính xách tay', e: 'notebook (stationery)' },
      { h: '超市', p: 'chāoshì', v: 'siêu thị', e: 'supermarket (abbr. for 超级市场)' },
      { h: '东北', p: 'dōngběi', v: 'Đông Bắc', e: 'Northeast China' },
      { h: '东方', p: 'dōngfāng', v: 'phương Đông', e: 'the East' },
      { h: '东南', p: 'dōngnán', v: 'Đông Nam', e: 'southeast' },
      { h: '公园', p: 'gōngyuán', v: 'công viên', e: 'park (for public recreation)' },
      { h: '国际', p: 'guójì', v: 'quốc tế', e: 'international' },
      { h: '花园', p: 'huāyuán', v: 'vườn hoa', e: 'garden' },
      { h: '机会', p: 'jīhuì', v: 'cơ hội', e: 'opportunity' },
      { h: '南方', p: 'nánfāng', v: 'phương Nam, miền Nam', e: 'south' },
      { h: '报纸', p: 'bàozhǐ', v: 'báo, tờ báo', e: 'newspaper' },
      { h: '笔', p: 'bǐ', v: 'bút', e: 'pen' },
      { h: '灯', p: 'dēng', v: 'đèn', e: 'lamp' },
      { h: '黑板', p: 'hēibǎn', v: 'bảng đen', e: 'blackboard' },
      { h: '计算机', p: 'jìsuànjī', v: 'máy tính', e: 'computer' },
      { h: '筷子', p: 'kuàizi', v: 'đũa', e: 'chopsticks' },
      { h: '那时候', p: 'nàshíhou', v: 'hồi đó, lúc đó', e: 'at that time' },
      { h: '瓶', p: 'píng', v: 'chai (lượng từ)', e: 'bottle' },
      { h: '瓶子', p: 'píngzi', v: 'cái chai', e: 'bottle' },
      { h: '球鞋', p: 'qiúxié', v: 'giày thể thao', e: 'athletic shoes' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '___在公园东边。', options: ['超市', '花园', '机会'], answer: '超市' },
        { type: 'fill', sentence: '离___很近。', options: ['花园', '北方', '报纸'], answer: '花园' },
        { type: 'fill', sentence: '我来自___。', options: ['南方', '东方', '国际'], answer: '南方' },
        { type: 'fill', sentence: '她来自___。', options: ['北方', '南方', '东南'], answer: '北方' },
        { type: 'fill', sentence: '这是个___城市。', options: ['国际', '公园', '超市'], answer: '国际' }
      ],
      normal: [
        { type: 'fill', sentence: '太阳从___升起。', options: ['东方', '北方', '南方'], answer: '东方' },
        { type: 'fill', sentence: '这是难得的___。', options: ['机会', '国际', '黑板'], answer: '机会' },
        { type: 'fill', sentence: '我要买一个___。', options: ['笔记本', '报纸', '黑板'], answer: '笔记本' },
        { type: 'fill', sentence: '买笔记本、___和报纸。', options: ['笔', '灯', '瓶'], answer: '笔' },
        { type: 'fill', sentence: '教室的___坏了。', options: ['灯', '笔', '瓶子'], answer: '灯' },
        { type: 'order', words: ['公园', '在', '东边', '超市'], answer: '超市在公园东边' },
        { type: 'order', words: ['北方', '她', '来自'], answer: '她来自北方' }
      ],
      hard: [
        { type: 'fill', sentence: '___前有一台计算机。', options: ['黑板', '花园', '公园'], answer: '黑板' },
        { type: 'fill', sentence: '我们用___吃饭。', options: ['筷子', '笔', '灯'], answer: '筷子' },
        { type: 'fill', sentence: '这个___是我的。', options: ['瓶子', '瓶', '球鞋'], answer: '瓶子' },
        { type: 'fill', sentence: '那双___也是我的。', options: ['球鞋', '瓶子', '笔'], answer: '球鞋' },
        { type: 'translate', prompt: 'Siêu thị ở phía đông công viên.', answer: '超市在公园东边。' },
        { type: 'translate', prompt: 'Tớ muốn mua một quyển vở.', answer: '我要买一个笔记本。' }
      ]
    }
  },
  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 63: Địa điểm & đồ vật (2) — 20 từ
  // 全国, 市, 停车场, 西北, 西餐, 西方, 西南, 药水, 银行, 银行卡, 日报, 晚报, 碗, 洗衣机, 相机, 鞋, 以上, 以下, 有点儿, 纸
  // ───────────────────────────────────────────────────────────────────────────
  63: {
    id: 63,
    level: 2,
    title: 'Địa điểm & đồ vật (2)',
    context: 'Mai và Tiểu Mỹ đi ngân hàng rồi sắm vài món đồ dùng. Họ nói về phương hướng và báo chí.',
    vocabPreview: ['银行', '停车场', '相机', '以上', '有点儿'],
    objectives: [
      'Dùng 以上 / 以下 nêu mốc số lượng (八十分以上)',
      'Dùng phương vị 西北 / 西南 / 西方',
      'Diễn đạt mức độ nhẹ bằng 有点儿 (有点儿累)',
      'Nói về ngân hàng, đồ dùng (银行 · 相机 · 停车场)'
    ],
    grammarNotes: [
      { point: '以上 / 以下 — trở lên / trở xuống',
        explain: 'Đặt sau con số / mốc để chỉ phạm vi từ đó trở lên hay trở xuống.',
        examples: [
          { zh: '八十分以上算好，六十分以下要努力。', py: 'Bāshí fēn yǐshàng suàn hǎo, liùshí fēn yǐxià yào nǔlì.', vi: 'Trên 80 điểm là tốt, dưới 60 thì phải cố.' }
        ] },
      { point: 'Phương vị ghép 西北 / 西南',
        explain: '西北 (Tây Bắc), 西南 (Tây Nam) ghép hướng chính; 西方 chỉ phương Tây.',
        examples: [
          { zh: '这座城市在全国西北。', py: 'Zhè zuò chéngshì zài quánguó xīběi.', vi: 'Thành phố này ở phía Tây Bắc cả nước.' }
        ] },
      { point: '有点儿 — hơi (một chút)',
        explain: '有点儿 + tính từ diễn đạt mức độ nhẹ, thường nghĩa không như ý.',
        examples: [
          { zh: '我有点儿累。', py: 'Wǒ yǒudiǎnr lèi.', vi: 'Tớ hơi mệt.' }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Trên phố · Buổi sáng', bg: 'street',
        cast: ['mai', 'xiaomei'],
        text: 'Hai bạn đến ngân hàng để rút tiền.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '银行在停车场旁边，你带银行卡了吗？',
        pinyin: 'Yínháng zài tíngchēchǎng pángbiān, nǐ dài yínhángkǎ le ma?',
        meaning: 'Ngân hàng ở cạnh bãi đỗ xe, cậu mang thẻ ngân hàng chưa?',
        expression: 'curious', vocab: ['银行', '停车场', '银行卡']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '带了。这家西餐厅来自西方，很有名。',
        pinyin: 'Dài le. Zhè jiā xīcāntīng láizì xīfāng, hěn yǒumíng.',
        meaning: 'Mang rồi. Nhà hàng món Tây này đến từ phương Tây, rất nổi tiếng.',
        expression: 'happy', vocab: ['西餐', '西方']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这座城市在全国西北，靠近西南。',
        pinyin: 'Zhè zuò chéngshì zài quánguó xīběi, kàojìn xīnán.',
        meaning: 'Thành phố này ở phía Tây Bắc của cả nước, gần Tây Nam.',
        expression: 'happy', vocab: ['全国', '市', '西北', '西南']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我有点儿累。想买碗、洗衣机和相机。',
        pinyin: 'Wǒ yǒudiǎnr lèi. Xiǎng mǎi wǎn, xǐyījī hé xiàngjī.',
        meaning: 'Tớ hơi mệt. Muốn mua bát, máy giặt và máy ảnh.',
        expression: 'sad', vocab: ['有点儿', '碗', '洗衣机', '相机']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'street',
        scene: '📍 Trên phố',
        expression: 'curious',
        q: 'Mai muốn nói "Tớ đọc báo hằng ngày (báo ngày)". Nên dùng từ nào?',
        options: [
          { text: '我每天看日报。', pinyin: 'Wǒ měitiān kàn rìbào.', meaning: 'Tớ đọc báo ngày mỗi ngày.', correct: true,
            feedback: 'Đúng! 日报 = nhật báo (báo ra hằng ngày).' },
          { text: '我每天看晚报。', pinyin: 'Wǒ měitiān kàn wǎnbào.', meaning: 'Tớ đọc báo chiều mỗi ngày.', correct: false,
            feedback: '晚报 = báo buổi chiều/tối; ở đây ý là "báo ngày".' },
          { text: '我每天看银行。', pinyin: 'Wǒ měitiān kàn yínháng.', meaning: '(Không hợp lý)', correct: false,
            feedback: '银行 = ngân hàng, không phải báo.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我每天看日报，晚上看晚报。',
        pinyin: 'Wǒ měitiān kàn rìbào, wǎnshang kàn wǎnbào.',
        meaning: 'Tớ đọc báo ngày mỗi ngày, buổi tối đọc báo chiều.',
        expression: 'happy', vocab: ['日报', '晚报']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"银行卡" có nghĩa là gì?',
            options: ['thẻ ngân hàng', 'bãi đỗ xe', 'máy ảnh', 'máy giặt'],
            answer: 0
          },
          {
            q: '"西方" có nghĩa là gì?',
            options: ['phương Tây', 'phương Đông', 'Tây Bắc', 'Tây Nam'],
            answer: 0
          },
          {
            q: '"有点儿累" có nghĩa là gì?',
            options: ['hơi mệt một chút', 'rất mệt', 'không mệt', 'mệt nhất'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Lớp học · Tiếp tục', bg: 'classroom',
        cast: ['mai', 'xiaomei', 'laoli'],
        text: 'Thầy Lý thông báo kết quả bài kiểm tra.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '成绩在八十分以上算好，六十分以下要努力。',
        pinyin: 'Chéngjì zài bāshí fēn yǐshàng suàn hǎo, liùshí fēn yǐxià yào nǔlì.',
        meaning: 'Điểm từ 80 trở lên là tốt, dưới 60 thì phải cố gắng.',
        expression: 'focused', vocab: ['以上', '以下']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'], bg: 'classroom',
        scene: '📍 Lớp học',
        expression: 'curious',
        q: 'Mai được 85 điểm. Cô ấy muốn nói "trên 80 điểm". Nên dùng từ nào?',
        options: [
          { text: '八十分以上', pinyin: 'bāshí fēn yǐshàng', meaning: 'trên 80 điểm', correct: true,
            feedback: 'Đúng! 以上 = trở lên, trên (mức nào đó).' },
          { text: '八十分以下', pinyin: 'bāshí fēn yǐxià', meaning: 'dưới 80 điểm', correct: false,
            feedback: '以下 = trở xuống, dưới; ngược nghĩa.' },
          { text: '八十分有点儿', pinyin: 'bāshí fēn yǒudiǎnr', meaning: '(Sai cấu trúc)', correct: false,
            feedback: '有点儿 = hơi, một chút; không dùng cho "trên/dưới mức".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '我八十分以上，有点儿开心！还买了双鞋，有纸和药水。',
        pinyin: 'Wǒ bāshí fēn yǐshàng, yǒudiǎnr kāixīn! Hái mǎi le shuāng xié, yǒu zhǐ hé yàoshuǐ.',
        meaning: 'Em trên 80 điểm, hơi vui một chút! Còn mua đôi giày, có giấy và thuốc nước.',
        expression: 'happy', vocab: ['鞋', '纸', '药水']
      }
    ],
    vocab: [
      { h: '全国', p: 'quánguó', v: 'cả nước, toàn quốc', e: 'whole nation' },
      { h: '市', p: 'shì', v: 'thành phố, thị', e: 'market' },
      { h: '停车场', p: 'tíngchēchǎng', v: 'bãi đỗ xe', e: 'parking lot' },
      { h: '西北', p: 'xīběi', v: 'Tây Bắc', e: 'Northwest China (Shaanxi, Gansu, Qinghai, Ningxia, Xinjiang)' },
      { h: '西餐', p: 'xīcān', v: 'món Tây, cơm Tây', e: 'Western-style food' },
      { h: '西方', p: 'xīfāng', v: 'phương Tây', e: 'the West' },
      { h: '西南', p: 'xīnán', v: 'Tây Nam', e: 'southwest' },
      { h: '药水', p: 'yàoshuǐ', v: 'thuốc nước', e: 'Yaksu in North Korea, near the border with Liaoning and Jiling province' },
      { h: '银行', p: 'yínháng', v: 'ngân hàng', e: 'bank' },
      { h: '银行卡', p: 'yínhángkǎ', v: 'thẻ ngân hàng', e: 'bank card' },
      { h: '日报', p: 'rìbào', v: 'nhật báo', e: 'daily newspaper' },
      { h: '晚报', p: 'wǎnbào', v: 'báo buổi chiều/tối', e: 'evening newspaper' },
      { h: '碗', p: 'wǎn', v: 'bát, chén', e: 'bowl' },
      { h: '洗衣机', p: 'xǐyījī', v: 'máy giặt', e: 'washing machine' },
      { h: '相机', p: 'xiàngjī', v: 'máy ảnh', e: 'camera (abbr. for 照相机)' },
      { h: '鞋', p: 'xié', v: 'giày', e: 'shoe' },
      { h: '以上', p: 'yǐshàng', v: 'trở lên, trên', e: 'that level or higher' },
      { h: '以下', p: 'yǐxià', v: 'trở xuống, dưới', e: 'that level or lower' },
      { h: '有点儿', p: 'yǒudiǎnr', v: 'hơi, một chút', e: 'slightly' },
      { h: '纸', p: 'zhǐ', v: 'giấy', e: 'paper' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '___在停车场旁边。', options: ['银行', '相机', '碗'], answer: '银行' },
        { type: 'fill', sentence: '你带___了吗？', options: ['银行卡', '洗衣机', '药水'], answer: '银行卡' },
        { type: 'fill', sentence: '这家___厅很有名。', options: ['西餐', '西方', '西北'], answer: '西餐' },
        { type: 'fill', sentence: '来自___。', options: ['西方', '全国', '银行'], answer: '西方' },
        { type: 'fill', sentence: '我___累。', options: ['有点儿', '以上', '以下'], answer: '有点儿' }
      ],
      normal: [
        { type: 'fill', sentence: '这座城市在全国___。', options: ['西北', '西餐', '日报'], answer: '西北' },
        { type: 'fill', sentence: '想买___、洗衣机和相机。', options: ['碗', '鞋', '纸'], answer: '碗' },
        { type: 'fill', sentence: '我每天看___。', options: ['日报', '晚报', '银行'], answer: '日报' },
        { type: 'fill', sentence: '晚上看___。', options: ['晚报', '日报', '相机'], answer: '晚报' },
        { type: 'fill', sentence: '银行在___旁边。', options: ['停车场', '银行卡', '全国'], answer: '停车场' },
        { type: 'order', words: ['停车场', '在', '银行', '旁边'], answer: '银行在停车场旁边' },
        { type: 'order', words: ['有点儿', '我', '累'], answer: '我有点儿累' }
      ],
      hard: [
        { type: 'fill', sentence: '成绩在八十分___算好。', options: ['以上', '以下', '有点儿'], answer: '以上' },
        { type: 'fill', sentence: '六十分___要努力。', options: ['以下', '以上', '全国'], answer: '以下' },
        { type: 'fill', sentence: '买了双___。', options: ['鞋', '碗', '纸'], answer: '鞋' },
        { type: 'fill', sentence: '有纸和___。', options: ['药水', '相机', '银行卡'], answer: '药水' },
        { type: 'translate', prompt: 'Cậu mang thẻ ngân hàng chưa?', answer: '你带银行卡了吗？' },
        { type: 'translate', prompt: 'Điểm từ 80 trở lên là tốt.', answer: '八十分以上算好。' }
      ]
    }
  },
  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 64: Cơ thể & thiên nhiên (1) — 16 từ
  // 表, 家长, 脚, 脸, 球队, 手表, 头, 头发, 腿, 草, 大海, 大门, 大自然, 地球, 海, 河
  // ───────────────────────────────────────────────────────────────────────────
  64: {
    id: 64,
    level: 2,
    title: 'Cơ thể & thiên nhiên (1)',
    context: 'Cả nhóm đi dã ngoại ra biển. Họ đi bộ nhiều, nói về cơ thể mệt mỏi và vẻ đẹp thiên nhiên.',
    vocabPreview: ['大海', '脚', '手表', '大自然', '地球'],
    objectives: [
      'Dùng lượng từ 块 cho đồng hồ, vật dẹt (这块表)',
      'Diễn đạt “đều…rồi” bằng …都…了 (脚和腿都累了)',
      'Dùng bổ ngữ xu hướng 出去 / 下 (出去 · 低下头)',
      'Nói về cơ thể, thiên nhiên (大海 · 脚 · 地球)'
    ],
    grammarNotes: [
      { point: 'Lượng từ 块',
        explain: '块 đếm vật dẹt / cục như đồng hồ (表), bánh xà phòng, đất; cũng đếm tiền (khẩu ngữ).',
        examples: [
          { zh: '这块表很准。', py: 'Zhè kuài biǎo hěn zhǔn.', vi: 'Cái đồng hồ này rất chuẩn.' }
        ] },
      { point: '…都…了 — đều…rồi',
        explain: '都 nhấn “tất cả”, kết hợp 了 chỉ trạng thái mới đã diễn ra.',
        examples: [
          { zh: '我的脚和腿都累了。', py: 'Wǒ de jiǎo hé tuǐ dōu lèi le.', vi: 'Chân và cẳng chân tớ đều mỏi rồi.' }
        ] },
      { point: 'Bổ ngữ xu hướng 出去 / 下',
        explain: '出去 chỉ hướng ra ngoài; 下 chỉ hướng xuống.',
        examples: [
          { zh: '从大门出去就能看到大海。', py: 'Cóng dàmén chūqù jiù néng kàndào dàhǎi.', vi: 'Ra khỏi cổng lớn là thấy biển.' }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Trên phố ra biển · Cuối tuần', bg: 'street',
        cast: ['mai', 'xiaomei'],
        text: 'Cuối tuần, cả nhóm đi dã ngoại ra biển.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我们去看大海吧！海边有河，还有绿草。',
        pinyin: 'Wǒmen qù kàn dàhǎi ba! Hǎibiān yǒu hé, hái yǒu lǜ cǎo.',
        meaning: 'Chúng ta đi ngắm biển đi! Bờ biển có sông, còn có cỏ xanh.',
        expression: 'happy', vocab: ['大海', '海', '河', '草']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '走了好久，我的脚和腿都累了。',
        pinyin: 'Zǒu le hǎojiǔ, wǒ de jiǎo hé tuǐ dōu lèi le.',
        meaning: 'Đi lâu rồi, chân và cẳng chân tớ đều mỏi.',
        expression: 'sad', vocab: ['脚', '腿']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你脸红了，头发也乱了，先低下头休息吧。',
        pinyin: 'Nǐ liǎn hóng le, tóufa yě luàn le, xiān dīxià tóu xiūxi ba.',
        meaning: 'Mặt cậu đỏ rồi, tóc cũng rối, cúi đầu nghỉ một chút đi.',
        expression: 'curious', vocab: ['脸', '头发', '头']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'street',
        scene: '📍 Bờ biển',
        expression: 'curious',
        q: 'Mai muốn xem giờ trên đồng hồ đeo tay. Nên dùng từ nào?',
        options: [
          { text: '看我的手表，几点了？', pinyin: 'Kàn wǒ de shǒubiǎo, jǐ diǎn le?', meaning: 'Xem đồng hồ của tớ, mấy giờ rồi?', correct: true,
            feedback: 'Đúng! 手表 = đồng hồ đeo tay.' },
          { text: '看我的头发，几点了？', pinyin: 'Kàn wǒ de tóufa, jǐ diǎn le?', meaning: '(Không hợp lý)', correct: false,
            feedback: '头发 = tóc, không xem giờ được.' },
          { text: '看我的大海，几点了？', pinyin: 'Kàn wǒ de dàhǎi, jǐ diǎn le?', meaning: '(Không hợp lý)', correct: false,
            feedback: '大海 = biển lớn, không liên quan giờ giấc.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '看我的手表，几点了？这块表很准。',
        pinyin: 'Kàn wǒ de shǒubiǎo, jǐ diǎn le? Zhè kuài biǎo hěn zhǔn.',
        meaning: 'Xem đồng hồ của tớ, mấy giờ rồi? Cái đồng hồ này rất chuẩn.',
        expression: 'happy', vocab: ['手表', '表']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"大海" có nghĩa là gì?',
            options: ['biển lớn', 'sông', 'cỏ', 'cổng lớn'],
            answer: 0
          },
          {
            q: '"脚" và "腿" lần lượt là?',
            options: ['bàn chân / chân (cẳng chân)', 'tay / chân', 'đầu / tóc', 'mặt / đầu'],
            answer: 0
          },
          {
            q: '"手表" có nghĩa là gì?',
            options: ['đồng hồ đeo tay', 'tóc', 'mặt', 'biển'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Bờ biển · Tiếp tục', bg: 'street',
        cast: ['mai', 'xiaomei', 'laoli'],
        text: 'Thầy Lý nói về việc bảo vệ thiên nhiên.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '大自然很美，地球是我们的家，要爱护。',
        pinyin: 'Dàzìrán hěn měi, dìqiú shì wǒmen de jiā, yào àihù.',
        meaning: 'Thiên nhiên rất đẹp, Trái Đất là nhà của chúng ta, phải bảo vệ.',
        expression: 'happy', vocab: ['大自然', '地球']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'], bg: 'street',
        scene: '📍 Bờ biển',
        expression: 'curious',
        q: 'Mai muốn nói "Phụ huynh đồng ý cho tham gia đội bóng". Nên dùng từ nào cho "phụ huynh"?',
        options: [
          { text: '家长同意我们参加球队。', pinyin: 'Jiāzhǎng tóngyì wǒmen cānjiā qiúduì.', meaning: 'Phụ huynh đồng ý cho chúng em tham gia đội bóng.', correct: true,
            feedback: 'Đúng! 家长 = phụ huynh; 球队 = đội bóng.' },
          { text: '地球同意我们参加球队。', pinyin: 'Dìqiú tóngyì wǒmen cānjiā qiúduì.', meaning: '(Không hợp lý)', correct: false,
            feedback: '地球 = Trái Đất, không phải "phụ huynh".' },
          { text: '大门同意我们参加球队。', pinyin: 'Dàmén tóngyì wǒmen cānjiā qiúduì.', meaning: '(Không hợp lý)', correct: false,
            feedback: '大门 = cổng lớn, không phải "phụ huynh".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '家长同意我们参加球队的活动。从大门出去就能看到大海。',
        pinyin: 'Jiāzhǎng tóngyì wǒmen cānjiā qiúduì de huódòng. Cóng dàmén chūqù jiù néng kàndào dàhǎi.',
        meaning: 'Phụ huynh đồng ý cho chúng em tham gia hoạt động của đội bóng. Ra khỏi cổng lớn là thấy biển.',
        expression: 'happy', vocab: ['家长', '球队', '大门']
      }
    ],
    vocab: [
      { h: '表', p: 'biǎo', v: 'đồng hồ; bảng biểu', e: 'exterior surface' },
      { h: '家长', p: 'jiāzhǎng', v: 'phụ huynh', e: 'head of a household' },
      { h: '脚', p: 'jiǎo', v: 'bàn chân', e: 'foot' },
      { h: '脸', p: 'liǎn', v: 'mặt', e: 'face' },
      { h: '球队', p: 'qiúduì', v: 'đội bóng', e: 'sports team (basketball, soccer, football etc)' },
      { h: '手表', p: 'shǒubiǎo', v: 'đồng hồ đeo tay', e: 'wristwatch' },
      { h: '头', p: 'tóu', v: 'đầu', e: 'head' },
      { h: '头发', p: 'tóufa', v: 'tóc', e: 'hair (on the head)' },
      { h: '腿', p: 'tuǐ', v: 'chân, cẳng chân', e: 'leg' },
      { h: '草', p: 'cǎo', v: 'cỏ', e: 'grass, straw, careless' },
      { h: '大海', p: 'dàhǎi', v: 'biển lớn', e: 'sea' },
      { h: '大门', p: 'dàmén', v: 'cổng lớn', e: 'the Doors, US rock band' },
      { h: '大自然', p: 'dàzìrán', v: 'thiên nhiên', e: 'nature (the natural world)' },
      { h: '地球', p: 'dìqiú', v: 'Trái Đất', e: 'the earth' },
      { h: '海', p: 'hǎi', v: 'biển', e: 'sea, ocean' },
      { h: '河', p: 'hé', v: 'sông', e: 'river' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我们去看___吧！', options: ['大海', '大门', '草'], answer: '大海' },
        { type: 'fill', sentence: '海边有___。', options: ['河', '头', '脸'], answer: '河' },
        { type: 'fill', sentence: '还有绿___。', options: ['草', '海', '腿'], answer: '草' },
        { type: 'fill', sentence: '我的___和腿都累了。', options: ['脚', '头', '表'], answer: '脚' },
        { type: 'fill', sentence: '你___红了。', options: ['脸', '草', '河'], answer: '脸' }
      ],
      normal: [
        { type: 'fill', sentence: '___也乱了。', options: ['头发', '手表', '球队'], answer: '头发' },
        { type: 'fill', sentence: '先低下___休息。', options: ['头', '脚', '腿'], answer: '头' },
        { type: 'fill', sentence: '看我的___，几点了？', options: ['手表', '头发', '大海'], answer: '手表' },
        { type: 'fill', sentence: '这块___很准。', options: ['表', '草', '河'], answer: '表' },
        { type: 'fill', sentence: '走了好久，___都累了。', options: ['腿', '海', '门'], answer: '腿' },
        { type: 'order', words: ['看', '大海', '去', '我们'], answer: '我们去看大海' },
        { type: 'order', words: ['累了', '我的脚', '都', '和腿'], answer: '我的脚和腿都累了' }
      ],
      hard: [
        { type: 'fill', sentence: '___很美，地球是我们的家。', options: ['大自然', '大海', '大门'], answer: '大自然' },
        { type: 'fill', sentence: '___是我们的家。', options: ['地球', '大海', '球队'], answer: '地球' },
        { type: 'fill', sentence: '___同意我们参加球队。', options: ['家长', '地球', '大门'], answer: '家长' },
        { type: 'fill', sentence: '从___出去就能看到大海。', options: ['大门', '球队', '大自然'], answer: '大门' },
        { type: 'translate', prompt: 'Chúng ta đi ngắm biển đi!', answer: '我们去看大海吧！' },
        { type: 'translate', prompt: 'Trái Đất là nhà của chúng ta.', answer: '地球是我们的家。' }
      ]
    }
  },
  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 65: Cơ thể & thiên nhiên (2) — 16 từ
  // 外卖, 心里, 眼, 眼睛, 椅子, 院长, 嘴, 做法, 面, 街, 明星, 晴天, 太阳, 星星, 药, 月亮
  // ───────────────────────────────────────────────────────────────────────────
  65: {
    id: 65,
    level: 2,
    title: 'Cơ thể & thiên nhiên (2)',
    context: 'Một buổi tối trời quang, cả nhóm ngắm trăng sao, gọi đồ ăn và trò chuyện về một vị viện trưởng nổi tiếng.',
    vocabPreview: ['太阳', '月亮', '眼睛', '外卖', '心里'],
    objectives: [
      'Dùng bổ ngữ kết quả 到 (看到月亮)',
      'Diễn đạt vị trí động tác bằng V + 在 (坐在椅子上)',
      'Đối lập 心里 / 嘴上 (trong lòng / ngoài miệng)',
      'Nói về bầu trời, đồ ăn ngoài (太阳 · 月亮 · 外卖)'
    ],
    grammarNotes: [
      { point: 'Bổ ngữ kết quả 到 (nhìn / nghe thấy)',
        explain: '看到, 听到 nghĩa “thấy / nghe được” — động tác có kết quả.',
        examples: [
          { zh: '晚上能看到月亮和星星。', py: 'Wǎnshang néng kàndào yuèliang hé xīngxing.', vi: 'Buổi tối có thể thấy trăng và sao.' }
        ] },
      { point: 'V + 在 + nơi chốn',
        explain: 'Động từ + 在 + địa điểm chỉ vị trí diễn ra / kết thúc động tác.',
        examples: [
          { zh: '我们坐在椅子上。', py: 'Wǒmen zuò zài yǐzi shàng.', vi: 'Mình ngồi trên ghế.' }
        ] },
      { point: '心里 / 嘴上 — trong lòng / ngoài miệng',
        explain: 'Cặp đối lập nêu cảm xúc bên trong và biểu hiện bên ngoài.',
        examples: [
          { zh: '我心里很高兴，嘴上不说。', py: 'Wǒ xīnlǐ hěn gāoxìng, zuǐ shàng bù shuō.', vi: 'Trong lòng tớ rất vui, ngoài miệng không nói.' }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Ký túc xá · Buổi tối', bg: 'dorm-room',
        cast: ['mai', 'xiaomei'],
        text: 'Một buổi tối trời quang, hai bạn ngồi bên cửa sổ.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '今天是晴天，太阳很大。',
        pinyin: 'Jīntiān shì qíngtiān, tàiyáng hěn dà.',
        meaning: 'Hôm nay trời quang, nắng rất to.',
        expression: 'happy', vocab: ['晴天', '太阳']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '晚上能看到月亮和星星。',
        pinyin: 'Wǎnshang néng kàndào yuèliang hé xīngxing.',
        meaning: 'Buổi tối có thể thấy trăng và các vì sao.',
        expression: 'happy', vocab: ['月亮', '星星']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我眼睛累了，闭上眼休息一下。',
        pinyin: 'Wǒ yǎnjing lèi le, bì shàng yǎn xiūxi yíxià.',
        meaning: 'Mắt tớ mỏi rồi, nhắm mắt nghỉ một chút.',
        expression: 'sad', vocab: ['眼睛', '眼']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我们坐在椅子上，点个外卖吧。',
        pinyin: 'Wǒmen zuò zài yǐzi shàng, diǎn gè wàimài ba.',
        meaning: 'Mình ngồi trên ghế, gọi đồ ăn ngoài đi.',
        expression: 'happy', vocab: ['椅子', '外卖']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'dorm-room',
        scene: '📍 Ký túc xá',
        expression: 'happy',
        q: 'Mai muốn nói "Trong lòng tớ rất vui, nhưng miệng không nói". Nên dùng từ nào cho "trong lòng"?',
        options: [
          { text: '我心里很高兴，嘴上不说。', pinyin: 'Wǒ xīnlǐ hěn gāoxìng, zuǐ shàng bù shuō.', meaning: 'Trong lòng tớ rất vui, ngoài miệng không nói.', correct: true,
            feedback: 'Đúng! 心里 = trong lòng; 嘴 = miệng.' },
          { text: '我眼里很高兴，嘴上不说。', pinyin: 'Wǒ yǎn lǐ hěn gāoxìng, zuǐ shàng bù shuō.', meaning: '(Thiếu tự nhiên)', correct: false,
            feedback: 'Nói "vui trong lòng" dùng 心里, không dùng 眼里.' },
          { text: '我街里很高兴，嘴上不说。', pinyin: 'Wǒ jiē lǐ hěn gāoxìng, zuǐ shàng bù shuō.', meaning: '(Sai nghĩa)', correct: false,
            feedback: '街 = phố, không phải "trong lòng".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我心里很高兴，嘴上不说。',
        pinyin: 'Wǒ xīnlǐ hěn gāoxìng, zuǐ shàng bù shuō.',
        meaning: 'Trong lòng tớ rất vui, ngoài miệng không nói.',
        expression: 'happy', vocab: ['心里', '嘴']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"晴天" có nghĩa là gì?',
            options: ['trời quang, trời nắng', 'trời mưa', 'ban đêm', 'mặt trăng'],
            answer: 0
          },
          {
            q: '"月亮" và "太阳" lần lượt là?',
            options: ['mặt trăng / mặt trời', 'mặt trời / mặt trăng', 'sao / trăng', 'mây / nắng'],
            answer: 0
          },
          {
            q: '"心里" có nghĩa là gì?',
            options: ['trong lòng', 'trong miệng', 'trên phố', 'trên ghế'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Trên phố · Hôm sau', bg: 'street',
        cast: ['mai', 'xiaomei', 'laoli'],
        text: 'Hôm sau, thầy Lý kể về một vị viện trưởng nổi tiếng.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '这位院长是个明星，他的做法很特别。',
        pinyin: 'Zhè wèi yuànzhǎng shì gè míngxīng, tā de zuòfǎ hěn tèbié.',
        meaning: 'Vị viện trưởng này là một ngôi sao, cách làm của ông ấy rất đặc biệt.',
        expression: 'happy', vocab: ['院长', '明星', '做法']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'], bg: 'street',
        scene: '📍 Trên phố',
        expression: 'curious',
        q: 'Mai chỉ vào quán bán mì trên phố. Cô ấy muốn nói "Trên phố có quán bán mì". Nên dùng từ nào cho "mì"?',
        options: [
          { text: '街上有家店卖面。', pinyin: 'Jiē shàng yǒu jiā diàn mài miàn.', meaning: 'Trên phố có quán bán mì.', correct: true,
            feedback: 'Đúng! 面 = mì (cũng nghĩa "mặt"); 街 = phố.' },
          { text: '街上有家店卖药。', pinyin: 'Jiē shàng yǒu jiā diàn mài yào.', meaning: 'Trên phố có quán bán thuốc.', correct: false,
            feedback: '药 = thuốc, không phải "mì".' },
          { text: '街上有家店卖嘴。', pinyin: 'Jiē shàng yǒu jiā diàn mài zuǐ.', meaning: '(Không hợp lý)', correct: false,
            feedback: '嘴 = miệng, không bán được.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '街上有家店卖面，旁边还有药店。',
        pinyin: 'Jiē shàng yǒu jiā diàn mài miàn, pángbiān hái yǒu yàodiàn.',
        meaning: 'Trên phố có quán bán mì, bên cạnh còn có hiệu thuốc.',
        expression: 'happy', vocab: ['街', '面', '药']
      }
    ],
    vocab: [
      { h: '外卖', p: 'wàimài', v: 'đồ ăn mang đi, đặt ship', e: 'to provide a takeout or home delivery meal' },
      { h: '心里', p: 'xīnlǐ', v: 'trong lòng', e: 'chest' },
      { h: '眼', p: 'yǎn', v: 'mắt', e: 'eye' },
      { h: '眼睛', p: 'yǎnjing', v: 'mắt (đôi mắt)', e: 'eye' },
      { h: '椅子', p: 'yǐzi', v: 'cái ghế', e: 'chair' },
      { h: '院长', p: 'yuànzhǎng', v: 'viện trưởng', e: 'the head of an institution whose name ends in 院' },
      { h: '嘴', p: 'zuǐ', v: 'miệng', e: 'mouth' },
      { h: '做法', p: 'zuòfǎ', v: 'cách làm', e: 'way of handling sth' },
      { h: '面', p: 'miàn', v: 'mì; mặt', e: 'face' },
      { h: '街', p: 'jiē', v: 'phố, đường phố', e: 'street' },
      { h: '明星', p: 'míngxīng', v: 'ngôi sao, người nổi tiếng', e: 'star' },
      { h: '晴天', p: 'qíngtiān', v: 'trời quang, trời nắng', e: 'clear sky' },
      { h: '太阳', p: 'tàiyáng', v: 'mặt trời', e: 'sun' },
      { h: '星星', p: 'xīngxing', v: 'ngôi sao (trên trời)', e: 'a star' },
      { h: '药', p: 'yào', v: 'thuốc', e: 'leaf of the iris' },
      { h: '月亮', p: 'yuèliang', v: 'mặt trăng', e: 'the moon' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '今天是___。', options: ['晴天', '外卖', '街'], answer: '晴天' },
        { type: 'fill', sentence: '___很大。', options: ['太阳', '椅子', '嘴'], answer: '太阳' },
        { type: 'fill', sentence: '晚上能看到___和星星。', options: ['月亮', '太阳', '面'], answer: '月亮' },
        { type: 'fill', sentence: '我___累了。', options: ['眼睛', '椅子', '街'], answer: '眼睛' },
        { type: 'fill', sentence: '点个___吧。', options: ['外卖', '明星', '药'], answer: '外卖' }
      ],
      normal: [
        { type: 'fill', sentence: '我们坐在___上。', options: ['椅子', '心里', '太阳'], answer: '椅子' },
        { type: 'fill', sentence: '我___很高兴。', options: ['心里', '嘴', '街'], answer: '心里' },
        { type: 'fill', sentence: '___上不说。', options: ['嘴', '眼', '面'], answer: '嘴' },
        { type: 'fill', sentence: '闭上___休息。', options: ['眼', '嘴', '街'], answer: '眼' },
        { type: 'fill', sentence: '能看到月亮和___。', options: ['星星', '太阳', '外卖'], answer: '星星' },
        { type: 'order', words: ['晴天', '今天', '是'], answer: '今天是晴天' },
        { type: 'order', words: ['外卖', '个', '点', '吧'], answer: '点个外卖吧' }
      ],
      hard: [
        { type: 'fill', sentence: '这位___是个明星。', options: ['院长', '家长', '明星'], answer: '院长' },
        { type: 'fill', sentence: '他的___很特别。', options: ['做法', '心里', '外卖'], answer: '做法' },
        { type: 'fill', sentence: '街上有家店卖___。', options: ['面', '药', '嘴'], answer: '面' },
        { type: 'fill', sentence: '旁边还有___店。', options: ['药', '面', '街'], answer: '药' },
        { type: 'translate', prompt: 'Trong lòng tớ rất vui, ngoài miệng không nói.', answer: '我心里很高兴，嘴上不说。' },
        { type: 'translate', prompt: 'Buổi tối có thể thấy trăng và sao.', answer: '晚上能看到月亮和星星。' }
      ]
    }
  },
  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 66: Đọc thêm — Ăn uống & trường học — 22 từ
  // 菜单, 蛋, 饭馆, 方便面, 酒, 酒店, 米, 晚餐, 味道, 油, 面, 分数, 高中, 教师, 教室, 考生, 科, 课堂, 留学生, 年级, 生词, 中小学
  // ───────────────────────────────────────────────────────────────────────────
  66: {
    id: 66,
    level: 2,
    title: 'Đọc thêm: Ăn uống & trường học',
    context: 'Cả nhóm ăn tối ở một quán ăn, rồi trò chuyện về chuyện trường lớp, môn học và điểm số.',
    vocabPreview: ['饭馆', '菜单', '教室', '年级', '留学生'],
    objectives: [
      'Dùng 多 / 少 + V để bớt / thêm (少放油)',
      'Đặt điều kiện rút gọn bằng 没…就… (没时间就吃方便面)',
      'Dùng lượng từ 碗 / 个 / 套 (一碗面)',
      'Nói về ăn uống, trường lớp (饭馆 · 教室 · 年级)'
    ],
    grammarNotes: [
      { point: '多 / 少 + động từ',
        explain: '多 / 少 đặt trước động từ để yêu cầu làm nhiều hơn / ít hơn.',
        examples: [
          { zh: '我要一碗面，少放油。', py: 'Wǒ yào yì wǎn miàn, shǎo fàng yóu.', vi: 'Tớ muốn một bát mì, cho ít dầu thôi.' }
        ] },
      { point: '没…就… — không…thì…',
        explain: 'Vế trước nêu điều kiện thiếu, vế sau dùng 就 nêu cách xử lý.',
        examples: [
          { zh: '没时间就吃方便面。', py: 'Méi shíjiān jiù chī fāngbiànmiàn.', vi: 'Không có thời gian thì ăn mì gói.' }
        ] },
      { point: 'Lượng từ 碗 / 个 / 套',
        explain: '碗 đếm thứ đựng trong bát; 个 lượng từ phổ thông; 套 đếm bộ.',
        examples: [
          { zh: '一碗面、一个蛋。', py: 'Yì wǎn miàn, yí gè dàn.', vi: 'Một bát mì, một quả trứng.' }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Quán ăn · Buổi tối', bg: 'cafeteria',
        cast: ['mai', 'xiaomei'],
        text: 'Buổi tối, hai bạn vào một quán ăn gần trường.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这家饭馆的菜单很长，味道也好。',
        pinyin: 'Zhè jiā fànguǎn de càidān hěn cháng, wèidao yě hǎo.',
        meaning: 'Thực đơn của quán này rất dài, mùi vị cũng ngon.',
        expression: 'happy', vocab: ['饭馆', '菜单', '味道']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我要一碗面、一个蛋，少放油。',
        pinyin: 'Wǒ yào yì wǎn miàn, yí gè dàn, shǎo fàng yóu.',
        meaning: 'Tớ muốn một bát mì, một quả trứng, ít dầu thôi.',
        expression: 'happy', vocab: ['面', '蛋', '油']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我点米饭和晚餐套餐。没时间就吃方便面。',
        pinyin: 'Wǒ diǎn mǐfàn hé wǎncān tàocān. Méi shíjiān jiù chī fāngbiànmiàn.',
        meaning: 'Tớ gọi cơm và suất ăn tối. Không có thời gian thì ăn mì gói.',
        expression: 'happy', vocab: ['米', '晚餐', '方便面']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'cafeteria',
        scene: '📍 Quán ăn',
        expression: 'curious',
        q: 'Mai muốn nói "Phòng học của chúng ta rất rộng". Nên dùng từ nào cho "phòng học"?',
        options: [
          { text: '我们的教室很大。', pinyin: 'Wǒmen de jiàoshì hěn dà.', meaning: 'Phòng học của chúng ta rất rộng.', correct: true,
            feedback: 'Đúng! 教室 = phòng học.' },
          { text: '我们的课堂很大。', pinyin: 'Wǒmen de kètáng hěn dà.', meaning: '(Lệch nghĩa)', correct: false,
            feedback: '课堂 = lớp học (về buổi học/giờ học), không chỉ căn phòng vật lý.' },
          { text: '我们的年级很大。', pinyin: 'Wǒmen de niánjí hěn dà.', meaning: '(Sai nghĩa)', correct: false,
            feedback: '年级 = khối lớp, niên khóa; không phải "phòng học".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我们的教室很大，课堂上老师讲生词。',
        pinyin: 'Wǒmen de jiàoshì hěn dà, kètáng shàng lǎoshī jiǎng shēngcí.',
        meaning: 'Phòng học của chúng ta rất rộng, trên lớp thầy giảng từ mới.',
        expression: 'happy', vocab: ['教室', '课堂', '生词']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"菜单" có nghĩa là gì?',
            options: ['thực đơn', 'mùi vị', 'cơm', 'trứng'],
            answer: 0
          },
          {
            q: '"教室" có nghĩa là gì?',
            options: ['phòng học', 'khối lớp', 'giáo viên', 'điểm số'],
            answer: 0
          },
          {
            q: '"方便面" có nghĩa là gì?',
            options: ['mì ăn liền (mì gói)', 'cơm', 'trứng', 'rượu'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Lớp học · Hôm sau', bg: 'classroom',
        cast: ['mai', 'xiaomei', 'laoli'],
        text: 'Thầy Lý kể về công việc dạy học của mình.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '我是教师，教高中和中小学。这家酒店还卖酒。',
        pinyin: 'Wǒ shì jiàoshī, jiāo gāozhōng hé zhōngxiǎoxué. Zhè jiā jiǔdiàn hái mài jiǔ.',
        meaning: 'Tôi là giáo viên, dạy cấp ba và trường phổ thông. Khách sạn này còn bán rượu nữa.',
        expression: 'happy', vocab: ['教师', '高中', '中小学', '酒店', '酒']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '我在三年级，理科是我的科目。',
        pinyin: 'Wǒ zài sān niánjí, lǐkē shì wǒ de kēmù.',
        meaning: 'Em học lớp ba, khoa học tự nhiên là môn của em.',
        expression: 'happy', vocab: ['年级', '科']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'], bg: 'classroom',
        scene: '📍 Lớp học',
        expression: 'curious',
        q: 'Tiểu Mỹ muốn nói "Mỗi thí sinh đều muốn điểm cao". Nên dùng từ nào cho "thí sinh"?',
        options: [
          { text: '每个考生都想要好分数。', pinyin: 'Měi gè kǎoshēng dōu xiǎng yào hǎo fēnshù.', meaning: 'Mỗi thí sinh đều muốn điểm cao.', correct: true,
            feedback: 'Đúng! 考生 = thí sinh; 分数 = điểm số.' },
          { text: '每个教师都想要好分数。', pinyin: 'Měi gè jiàoshī dōu xiǎng yào hǎo fēnshù.', meaning: '(Sai chủ thể)', correct: false,
            feedback: '教师 = giáo viên, không phải "thí sinh".' },
          { text: '每个留学生都想要好课堂。', pinyin: 'Měi gè liúxuéshēng dōu xiǎng yào hǎo kètáng.', meaning: '(Lệch ý)', correct: false,
            feedback: '留学生 = du học sinh; câu này không nói về điểm số.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'],
        text: '每个考生都想要好分数。这里有很多留学生。',
        pinyin: 'Měi gè kǎoshēng dōu xiǎng yào hǎo fēnshù. Zhèlǐ yǒu hěn duō liúxuéshēng.',
        meaning: 'Mỗi thí sinh đều muốn điểm cao. Ở đây có rất nhiều du học sinh.',
        expression: 'happy', vocab: ['考生', '分数', '留学生']
      }
    ],
    vocab: [
      { h: '菜单', p: 'càidān', v: 'thực đơn', e: 'menu' },
      { h: '蛋', p: 'dàn', v: 'trứng', e: 'egg' },
      { h: '饭馆', p: 'fànguǎn', v: 'quán ăn, nhà hàng', e: 'restaurant' },
      { h: '方便面', p: 'fāngbiànmiàn', v: 'mì ăn liền', e: 'instant noodles' },
      { h: '酒', p: 'jiǔ', v: 'rượu', e: 'wine (esp. rice wine)' },
      { h: '酒店', p: 'jiǔdiàn', v: 'khách sạn', e: 'wine shop' },
      { h: '米', p: 'mǐ', v: 'gạo; mét', e: 'rice, meter' },
      { h: '晚餐', p: 'wǎncān', v: 'bữa tối', e: 'evening meal' },
      { h: '味道', p: 'wèidao', v: 'mùi vị', e: 'flavor' },
      { h: '油', p: 'yóu', v: 'dầu, mỡ', e: 'oil' },
      { h: '面', p: 'miàn', v: 'mì; mặt', e: 'face' },
      { h: '分数', p: 'fēnshù', v: 'điểm số', e: 'grade' },
      { h: '高中', p: 'gāozhōng', v: 'trung học phổ thông (cấp ba)', e: 'senior high school' },
      { h: '教师', p: 'jiàoshī', v: 'giáo viên', e: 'teacher' },
      { h: '教室', p: 'jiàoshì', v: 'phòng học', e: 'classroom' },
      { h: '考生', p: 'kǎoshēng', v: 'thí sinh', e: 'exam candidate' },
      { h: '科', p: 'kē', v: 'môn, khoa', e: 'branch of study' },
      { h: '课堂', p: 'kètáng', v: 'lớp học (giờ học)', e: 'classroom' },
      { h: '留学生', p: 'liúxuéshēng', v: 'du học sinh', e: 'student studying abroad' },
      { h: '年级', p: 'niánjí', v: 'khối lớp, niên khóa', e: 'grade' },
      { h: '生词', p: 'shēngcí', v: 'từ mới', e: 'new word (in textbook)' },
      { h: '中小学', p: 'zhōngxiǎoxué', v: 'trường phổ thông (tiểu học và trung học)', e: 'middle and elementary school' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '这家___的菜单很长。', options: ['饭馆', '酒店', '教室'], answer: '饭馆' },
        { type: 'fill', sentence: '___很长，味道也好。', options: ['菜单', '生词', '分数'], answer: '菜单' },
        { type: 'fill', sentence: '我要一碗面、一个___。', options: ['蛋', '米', '油'], answer: '蛋' },
        { type: 'fill', sentence: '少放___。', options: ['油', '蛋', '酒'], answer: '油' },
        { type: 'fill', sentence: '没时间就吃___。', options: ['方便面', '晚餐', '米'], answer: '方便面' }
      ],
      normal: [
        { type: 'fill', sentence: '我们的___很大。', options: ['教室', '课堂', '年级'], answer: '教室' },
        { type: 'fill', sentence: '___上老师讲生词。', options: ['课堂', '教室', '科'], answer: '课堂' },
        { type: 'fill', sentence: '老师讲___。', options: ['生词', '分数', '味道'], answer: '生词' },
        { type: 'fill', sentence: '我是___，教高中。', options: ['教师', '考生', '留学生'], answer: '教师' },
        { type: 'fill', sentence: '我在三___。', options: ['年级', '科', '课堂'], answer: '年级' },
        { type: 'order', words: ['菜单', '很长', '这家饭馆的'], answer: '这家饭馆的菜单很长' },
        { type: 'order', words: ['一碗面', '我', '要'], answer: '我要一碗面' }
      ],
      hard: [
        { type: 'fill', sentence: '教高中和___。', options: ['中小学', '留学生', '考生'], answer: '中小学' },
        { type: 'fill', sentence: '每个___都想要好分数。', options: ['考生', '教师', '年级'], answer: '考生' },
        { type: 'fill', sentence: '每个考生都想要好___。', options: ['分数', '味道', '科'], answer: '分数' },
        { type: 'fill', sentence: '这里有很多___。', options: ['留学生', '考生', '教师'], answer: '留学生' },
        { type: 'translate', prompt: 'Phòng học của chúng ta rất rộng.', answer: '我们的教室很大。' },
        { type: 'translate', prompt: 'Mỗi thí sinh đều muốn điểm cao.', answer: '每个考生都想要好分数。' }
      ]
    }
  },
  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 67: Đọc thêm — Ngôn ngữ & giao tiếp — 10 từ
  // 词, 词语, 读音, 句子, 平安, 普通话, 英文, 英语, 语言, 方面
  // ───────────────────────────────────────────────────────────────────────────
  67: {
    id: 67,
    level: 2,
    title: 'Đọc thêm: Ngôn ngữ & giao tiếp',
    context: 'Mai và Tiểu Mỹ bàn về việc học ngoại ngữ: phát âm, từ ngữ và cách đặt câu.',
    vocabPreview: ['语言', '普通话', '英语', '句子', '读音'],
    objectives: [
      'Dùng 让 để nói “bảo ai làm gì” (老师让我写句子)',
      'Khoanh vùng bằng 在…方面 (在发音方面)',
      'Dùng A 和 B 都… (A và B đều…)',
      'Nói về học ngôn ngữ (语言 · 句子 · 读音)'
    ],
    grammarNotes: [
      { point: '让 — bảo, sai khiến',
        explain: '让 + người + động từ: yêu cầu / bảo ai làm gì.',
        examples: [
          { zh: '老师让我写一个句子。', py: 'Lǎoshī ràng wǒ xiě yí gè jùzi.', vi: 'Cô bảo tớ viết một câu.' }
        ] },
      { point: '在…方面 — về mặt, phương diện',
        explain: 'Khoanh vùng phạm vi nói tới: “về mặt / phương diện…”.',
        examples: [
          { zh: '在发音方面要注意。', py: 'Zài fāyīn fāngmiàn yào zhùyì.', vi: 'Về mặt phát âm phải chú ý.' }
        ] },
      { point: 'A 和 B 都… — A và B đều…',
        explain: '都 đặt sau chủ ngữ kép để nhấn “cả hai đều”.',
        examples: [
          { zh: '普通话和英语都重要。', py: 'Pǔtōnghuà hé Yīngyǔ dōu zhòngyào.', vi: 'Tiếng phổ thông và tiếng Anh đều quan trọng.' }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Lớp học · Buổi chiều', bg: 'classroom',
        cast: ['mai', 'xiaomei'],
        text: 'Hai bạn ngồi lại ôn ngoại ngữ sau giờ học.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '学语言要多练，普通话和英语都重要。',
        pinyin: 'Xué yǔyán yào duō liàn, pǔtōnghuà hé yīngyǔ dōu zhòngyào.',
        meaning: 'Học ngôn ngữ phải luyện nhiều, tiếng phổ thông và tiếng Anh đều quan trọng.',
        expression: 'focused', vocab: ['语言', '普通话', '英语']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这个词的读音我不会，这个词语也难。',
        pinyin: 'Zhège cí de dúyīn wǒ bú huì, zhège cíyǔ yě nán.',
        meaning: 'Cách đọc của từ này tớ không biết, từ ngữ này cũng khó.',
        expression: 'sad', vocab: ['词', '读音', '词语']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'classroom',
        scene: '📍 Lớp học',
        expression: 'curious',
        q: 'Cô giáo bảo Mai "viết một câu". Mai nên dùng từ nào cho "câu"?',
        options: [
          { text: '老师让我写一个句子。', pinyin: 'Lǎoshī ràng wǒ xiě yí gè jùzi.', meaning: 'Cô bảo tớ viết một câu.', correct: true,
            feedback: 'Đúng! 句子 = câu (văn).' },
          { text: '老师让我写一个读音。', pinyin: 'Lǎoshī ràng wǒ xiě yí gè dúyīn.', meaning: '(Sai nghĩa)', correct: false,
            feedback: '读音 = cách đọc (âm), không phải "câu".' },
          { text: '老师让我写一个语言。', pinyin: 'Lǎoshī ràng wǒ xiě yí gè yǔyán.', meaning: '(Sai cấu trúc)', correct: false,
            feedback: '语言 = ngôn ngữ (khái niệm lớn), không "viết một ngôn ngữ".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '老师让我写一个句子，还要写英文。',
        pinyin: 'Lǎoshī ràng wǒ xiě yí gè jùzi, hái yào xiě yīngwén.',
        meaning: 'Cô bảo tớ viết một câu, còn phải viết tiếng Anh nữa.',
        expression: 'focused', vocab: ['句子', '英文']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"普通话" có nghĩa là gì?',
            options: ['tiếng phổ thông (tiếng Trung chuẩn)', 'tiếng Anh', 'từ ngữ', 'cách đọc'],
            answer: 0
          },
          {
            q: '"英语" và "英文" cùng chỉ điều gì?',
            options: ['tiếng Anh', 'tiếng phổ thông', 'ngôn ngữ nói chung', 'câu'],
            answer: 0
          },
          {
            q: '"句子" có nghĩa là gì?',
            options: ['câu (văn)', 'từ', 'cách đọc', 'phương diện'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '在发音方面要注意。下课了，祝你一路平安！',
        pinyin: 'Zài fāyīn fāngmiàn yào zhùyì. Xiàkè le, zhù nǐ yílù píng’ān!',
        meaning: 'Về mặt phát âm phải chú ý. Tan học rồi, chúc em thượng lộ bình an!',
        expression: 'happy', vocab: ['方面', '平安']
      }
    ],
    vocab: [
      { h: '词', p: 'cí', v: 'từ', e: 'word, phrase, part of speech' },
      { h: '词语', p: 'cíyǔ', v: 'từ ngữ', e: 'word (general term including monosyllables through to short phrases)' },
      { h: '读音', p: 'dúyīn', v: 'cách đọc, âm đọc', e: 'pronunciation' },
      { h: '句子', p: 'jùzi', v: 'câu', e: 'sentence' },
      { h: '平安', p: 'píng’ān', v: 'bình an', e: 'safe and sound' },
      { h: '普通话', p: 'pǔtōnghuà', v: 'tiếng phổ thông', e: 'Mandarin (common language)' },
      { h: '英文', p: 'yīngwén', v: 'tiếng Anh (chữ viết)', e: 'English (language)' },
      { h: '英语', p: 'yīngyǔ', v: 'tiếng Anh', e: 'English (language)' },
      { h: '语言', p: 'yǔyán', v: 'ngôn ngữ', e: 'language' },
      { h: '方面', p: 'fāngmiàn', v: 'phương diện, mặt', e: 'respect' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '学___要多练。', options: ['语言', '句子', '读音'], answer: '语言' },
        { type: 'fill', sentence: '___和英语都重要。', options: ['普通话', '英文', '词语'], answer: '普通话' },
        { type: 'fill', sentence: '这个___的读音我不会。', options: ['词', '句子', '方面'], answer: '词' },
        { type: 'fill', sentence: '这个___也难。', options: ['词语', '平安', '英文'], answer: '词语' },
        { type: 'fill', sentence: '这个词的___我不会。', options: ['读音', '词语', '句子'], answer: '读音' }
      ],
      normal: [
        { type: 'fill', sentence: '老师让我写一个___。', options: ['句子', '读音', '语言'], answer: '句子' },
        { type: 'fill', sentence: '还要写___。', options: ['英文', '英语', '词'], answer: '英文' },
        { type: 'fill', sentence: '普通话和___都重要。', options: ['英语', '英文', '方面'], answer: '英语' },
        { type: 'fill', sentence: '在发音___要注意。', options: ['方面', '句子', '词'], answer: '方面' },
        { type: 'order', words: ['多练', '学语言', '要'], answer: '学语言要多练' },
        { type: 'order', words: ['一个句子', '写', '让我', '老师'], answer: '老师让我写一个句子' }
      ],
      hard: [
        { type: 'fill', sentence: '祝你一路___！', options: ['平安', '方面', '语言'], answer: '平安' },
        { type: 'fill', sentence: '在发音___要注意。', options: ['方面', '读音', '词语'], answer: '方面' },
        { type: 'fill', sentence: '___和英文都要学。', options: ['英语', '普通话', '句子'], answer: '英语' },
        { type: 'translate', prompt: 'Học ngôn ngữ phải luyện nhiều.', answer: '学语言要多练。' },
        { type: 'translate', prompt: 'Cô bảo tớ viết một câu.', answer: '老师让我写一个句子。' }
      ]
    }
  },
  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 68: Đọc thêm — Màu sắc & động vật — 14 từ
  // 白色, 黑色, 红色, 黄色, 蓝色, 绿色, 颜色, 狗, 结果, 鸟, 气温, 然后, 温度, 鱼
  // ───────────────────────────────────────────────────────────────────────────
  68: {
    id: 68,
    level: 2,
    title: 'Đọc thêm: Màu sắc & động vật',
    context: 'Cả nhóm ra công viên, nói về màu sắc yêu thích, các con vật và thời tiết.',
    vocabPreview: ['颜色', '红色', '气温', '然后', '结果'],
    objectives: [
      'Nối trình tự bằng 先…然后… (trước…rồi sau đó)',
      'Dùng bổ ngữ trình độ V得 (找得多)',
      'Hỏi bằng 什么 (喜欢什么颜色)',
      'Nói về màu sắc, động vật (颜色 · 结果 · 气温)'
    ],
    grammarNotes: [
      { point: '先…然后… — trước…rồi sau đó…',
        explain: 'Cặp từ nối hai hành động theo thứ tự thời gian.',
        examples: [
          { zh: '先看动物，然后看结果。', py: 'Xiān kàn dòngwù, ránhòu kàn jiéguǒ.', vi: 'Xem động vật trước, sau đó xem kết quả.' }
        ] },
      { point: 'V + 得 + tính từ — bổ ngữ trình độ',
        explain: 'Động từ + 得 + tính từ nhận xét mức độ của động tác.',
        examples: [
          { zh: '看结果谁找得多。', py: 'Kàn jiéguǒ shéi zhǎo de duō.', vi: 'Xem kết quả ai tìm được nhiều.' }
        ] },
      { point: '什么 — gì (nghi vấn)',
        explain: '什么 đặt trước danh từ để hỏi “… gì”.',
        examples: [
          { zh: '你喜欢什么颜色？', py: 'Nǐ xǐhuan shénme yánsè?', vi: 'Cậu thích màu gì?' }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Công viên · Buổi sáng', bg: 'street',
        cast: ['mai', 'xiaomei'],
        text: 'Cả nhóm dạo chơi trong công viên.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你喜欢什么颜色？我喜欢红色和蓝色。',
        pinyin: 'Nǐ xǐhuan shénme yánsè? Wǒ xǐhuan hóngsè hé lánsè.',
        meaning: 'Cậu thích màu gì? Tớ thích màu đỏ và màu xanh lam.',
        expression: 'happy', vocab: ['颜色', '红色', '蓝色']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我喜欢白色、黑色，还有绿色和黄色。',
        pinyin: 'Wǒ xǐhuan báisè, hēisè, hái yǒu lǜsè hé huángsè.',
        meaning: 'Tớ thích màu trắng, màu đen, còn có màu xanh lục và màu vàng.',
        expression: 'happy', vocab: ['白色', '黑色', '绿色', '黄色']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '公园里有狗、鸟和鱼。',
        pinyin: 'Gōngyuán lǐ yǒu gǒu, niǎo hé yú.',
        meaning: 'Trong công viên có chó, chim và cá.',
        expression: 'happy', vocab: ['狗', '鸟', '鱼']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'street',
        scene: '📍 Công viên',
        expression: 'curious',
        q: 'Mai muốn nói "Nhiệt độ không khí hôm nay rất thấp". Nên dùng từ nào cho "nhiệt độ không khí"?',
        options: [
          { text: '今天气温很低。', pinyin: 'Jīntiān qìwēn hěn dī.', meaning: 'Nhiệt độ (không khí) hôm nay rất thấp.', correct: true,
            feedback: 'Đúng! 气温 = nhiệt độ không khí (thời tiết).' },
          { text: '今天颜色很低。', pinyin: 'Jīntiān yánsè hěn dī.', meaning: '(Không hợp lý)', correct: false,
            feedback: '颜色 = màu sắc, không liên quan nhiệt độ.' },
          { text: '今天结果很低。', pinyin: 'Jīntiān jiéguǒ hěn dī.', meaning: '(Sai nghĩa)', correct: false,
            feedback: '结果 = kết quả, không phải nhiệt độ.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '今天气温很低，温度只有五度。',
        pinyin: 'Jīntiān qìwēn hěn dī, wēndù zhǐ yǒu wǔ dù.',
        meaning: 'Nhiệt độ hôm nay rất thấp, chỉ có năm độ.',
        expression: 'curious', vocab: ['气温', '温度']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"颜色" có nghĩa là gì?',
            options: ['màu sắc', 'nhiệt độ', 'con chim', 'kết quả'],
            answer: 0
          },
          {
            q: '"气温" và "温度" liên quan đến điều gì?',
            options: ['nhiệt độ', 'màu sắc', 'động vật', 'ngôn ngữ'],
            answer: 0
          },
          {
            q: '"狗"、"鸟"、"鱼" thuộc nhóm nào?',
            options: ['động vật', 'màu sắc', 'thời tiết', 'thức ăn'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我们先看动物，然后看结果谁找得多。',
        pinyin: 'Wǒmen xiān kàn dòngwù, ránhòu kàn jiéguǒ shéi zhǎo de duō.',
        meaning: 'Mình xem động vật trước, sau đó xem kết quả ai tìm được nhiều.',
        expression: 'happy', vocab: ['然后', '结果']
      }
    ],
    vocab: [
      { h: '白色', p: 'báisè', v: 'màu trắng', e: 'white' },
      { h: '黑色', p: 'hēisè', v: 'màu đen', e: 'black' },
      { h: '红色', p: 'hóngsè', v: 'màu đỏ', e: 'red (color)' },
      { h: '黄色', p: 'huángsè', v: 'màu vàng', e: 'yellow (color)' },
      { h: '蓝色', p: 'lánsè', v: 'màu xanh lam', e: 'blue (color)' },
      { h: '绿色', p: 'lǜsè', v: 'màu xanh lục', e: 'green' },
      { h: '颜色', p: 'yánsè', v: 'màu sắc', e: 'color' },
      { h: '狗', p: 'gǒu', v: 'chó', e: 'dog' },
      { h: '结果', p: 'jiéguǒ', v: 'kết quả', e: 'to bear fruit' },
      { h: '鸟', p: 'niǎo', v: 'chim', e: 'bird' },
      { h: '气温', p: 'qìwēn', v: 'nhiệt độ không khí', e: 'air temperature' },
      { h: '然后', p: 'ránhòu', v: 'sau đó, rồi thì', e: 'then' },
      { h: '温度', p: 'wēndù', v: 'nhiệt độ', e: 'temperature' },
      { h: '鱼', p: 'yú', v: 'cá', e: 'fish' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '你喜欢什么___？', options: ['颜色', '气温', '结果'], answer: '颜色' },
        { type: 'fill', sentence: '我喜欢___和蓝色。', options: ['红色', '温度', '然后'], answer: '红色' },
        { type: 'fill', sentence: '我喜欢___和黑色。', options: ['白色', '气温', '鸟'], answer: '白色' },
        { type: 'fill', sentence: '公园里有___、鸟和鱼。', options: ['狗', '颜色', '结果'], answer: '狗' },
        { type: 'fill', sentence: '有狗、鸟和___。', options: ['鱼', '温度', '红色'], answer: '鱼' }
      ],
      normal: [
        { type: 'fill', sentence: '今天___很低。', options: ['气温', '颜色', '结果'], answer: '气温' },
        { type: 'fill', sentence: '___只有五度。', options: ['温度', '气温', '然后'], answer: '温度' },
        { type: 'fill', sentence: '还有绿色和___。', options: ['黄色', '红色', '蓝色'], answer: '黄色' },
        { type: 'fill', sentence: '我喜欢红色和___。', options: ['蓝色', '黑色', '白色'], answer: '蓝色' },
        { type: 'order', words: ['什么', '喜欢', '你', '颜色'], answer: '你喜欢什么颜色' },
        { type: 'order', words: ['狗', '有', '公园里', '和鱼', '鸟'], answer: '公园里有狗鸟和鱼' }
      ],
      hard: [
        { type: 'fill', sentence: '我们先看动物，___看结果。', options: ['然后', '结果', '温度'], answer: '然后' },
        { type: 'fill', sentence: '看___谁找得多。', options: ['结果', '然后', '颜色'], answer: '结果' },
        { type: 'fill', sentence: '公园里有狗、___和鱼。', options: ['鸟', '气温', '温度'], answer: '鸟' },
        { type: 'translate', prompt: 'Cậu thích màu gì?', answer: '你喜欢什么颜色？' },
        { type: 'translate', prompt: 'Nhiệt độ hôm nay rất thấp.', answer: '今天气温很低。' }
      ]
    }
  },
  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 69: Đọc thêm — Giao thông & thể thao — 14 từ
  // 车辆, 出租车, 船, 地铁站, 公共汽车, 公路, 自行车, 公交车, 护照, 篮球, 排球, 体育, 同事, 网球
  // ───────────────────────────────────────────────────────────────────────────
  69: {
    id: 69,
    level: 2,
    title: 'Đọc thêm: Giao thông & thể thao',
    context: 'Cả nhóm bàn cách đi đến nhà thi đấu và nói về các môn thể thao yêu thích.',
    vocabPreview: ['公交车', '自行车', '地铁站', '护照', '体育'],
    objectives: [
      'Diễn đạt đi bằng phương tiện: 坐 / 骑 + xe (坐公交车)',
      'Nêu lựa chọn bằng 或者',
      'Dùng 要 để nói “phải / cần” (要带护照)',
      'Nói về giao thông, thể thao (公交车 · 自行车 · 体育)'
    ],
    grammarNotes: [
      { point: '坐 / 骑 + phương tiện',
        explain: '坐 dùng cho xe / tàu / thuyền (ngồi); 骑 dùng cho xe đạp, xe máy, ngựa (cưỡi).',
        examples: [
          { zh: '去体育馆可以坐公交车。', py: 'Qù tǐyùguǎn kěyǐ zuò gōngjiāochē.', vi: 'Đến nhà thi đấu có thể đi xe buýt.' },
          { zh: '也可以骑自行车。', py: 'Yě kěyǐ qí zìxíngchē.', vi: 'Cũng có thể đạp xe đạp.' }
        ] },
      { point: '或者 — hoặc',
        explain: '或者 nối lựa chọn trong câu trần thuật.',
        examples: [
          { zh: '骑自行车，或者坐出租车。', py: 'Qí zìxíngchē, huòzhě zuò chūzūchē.', vi: 'Đạp xe đạp, hoặc đi taxi.' }
        ] },
      { point: '要 — phải, cần',
        explain: '要 + động từ chỉ sự cần thiết phải làm gì.',
        examples: [
          { zh: '出国坐船要带护照。', py: 'Chūguó zuò chuán yào dài hùzhào.', vi: 'Đi nước ngoài bằng tàu phải mang hộ chiếu.' }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Trên phố · Buổi sáng', bg: 'street',
        cast: ['mai', 'xiaomei'],
        text: 'Hai bạn bàn cách đi đến nhà thi đấu thể thao.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '去体育馆可以坐公交车或公共汽车。',
        pinyin: 'Qù tǐyùguǎn kěyǐ zuò gōngjiāochē huò gōnggòng qìchē.',
        meaning: 'Đến nhà thi đấu có thể đi xe buýt hoặc xe khách công cộng.',
        expression: 'happy', vocab: ['体育', '公交车', '公共汽车']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '也可以骑自行车，或者坐出租车。',
        pinyin: 'Yě kěyǐ qí zìxíngchē, huòzhě zuò chūzūchē.',
        meaning: 'Cũng có thể đạp xe đạp, hoặc đi taxi.',
        expression: 'happy', vocab: ['自行车', '出租车']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '地铁站就在公路旁边，路上车辆很多。',
        pinyin: 'Dìtiězhàn jiù zài gōnglù pángbiān, lù shàng chēliàng hěn duō.',
        meaning: 'Ga tàu điện ngầm ngay cạnh đường lớn, trên đường xe cộ rất đông.',
        expression: 'curious', vocab: ['地铁站', '公路', '车辆']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'street',
        scene: '📍 Trên phố',
        expression: 'curious',
        q: 'Mai nói về việc đi nước ngoài bằng tàu thủy. Cô ấy cần mang gì?',
        options: [
          { text: '出国坐船要带护照。', pinyin: 'Chūguó zuò chuán yào dài hùzhào.', meaning: 'Đi nước ngoài bằng tàu thủy phải mang hộ chiếu.', correct: true,
            feedback: 'Đúng! 船 = tàu thủy; 护照 = hộ chiếu.' },
          { text: '出国坐船要带篮球。', pinyin: 'Chūguó zuò chuán yào dài lánqiú.', meaning: '(Không hợp lý)', correct: false,
            feedback: '篮球 = bóng rổ, không cần khi xuất cảnh.' },
          { text: '出国坐船要带公路。', pinyin: 'Chūguó zuò chuán yào dài gōnglù.', meaning: '(Sai nghĩa)', correct: false,
            feedback: '公路 = đường lớn, không mang theo được.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '出国坐船要带护照。',
        pinyin: 'Chūguó zuò chuán yào dài hùzhào.',
        meaning: 'Đi nước ngoài bằng tàu thủy phải mang hộ chiếu.',
        expression: 'focused', vocab: ['船', '护照']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"公交车" có nghĩa là gì?',
            options: ['xe buýt', 'xe đạp', 'taxi', 'tàu thủy'],
            answer: 0
          },
          {
            q: '"自行车" và "出租车" lần lượt là?',
            options: ['xe đạp / taxi', 'taxi / xe đạp', 'xe buýt / tàu', 'tàu / xe đạp'],
            answer: 0
          },
          {
            q: '"护照" dùng khi nào?',
            options: ['khi đi nước ngoài (xuất nhập cảnh)', 'khi chơi bóng', 'khi đạp xe', 'khi học bài'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '我同事喜欢打篮球、排球和网球，都是体育运动。',
        pinyin: 'Wǒ tóngshì xǐhuan dǎ lánqiú, páiqiú hé wǎngqiú, dōu shì tǐyù yùndòng.',
        meaning: 'Đồng nghiệp của tôi thích chơi bóng rổ, bóng chuyền và tennis, đều là môn thể thao.',
        expression: 'happy', vocab: ['同事', '篮球', '排球', '网球']
      }
    ],
    vocab: [
      { h: '车辆', p: 'chēliàng', v: 'xe cộ (nói chung)', e: 'vehicle' },
      { h: '出租车', p: 'chūzūchē', v: 'taxi', e: 'taxi' },
      { h: '船', p: 'chuán', v: 'thuyền, tàu thủy', e: 'boat, ship, vessel' },
      { h: '地铁站', p: 'dìtiězhàn', v: 'ga tàu điện ngầm', e: 'subway station' },
      { h: '公共汽车', p: 'gōnggòng qìchē', v: 'xe khách công cộng', e: 'bus' },
      { h: '公路', p: 'gōnglù', v: 'đường lớn, quốc lộ', e: 'highway' },
      { h: '自行车', p: 'zìxíngchē', v: 'xe đạp', e: 'bicycle' },
      { h: '公交车', p: 'gōngjiāochē', v: 'xe buýt', e: 'public transport vehicle' },
      { h: '护照', p: 'hùzhào', v: 'hộ chiếu', e: 'passport' },
      { h: '篮球', p: 'lánqiú', v: 'bóng rổ', e: 'basketball' },
      { h: '排球', p: 'páiqiú', v: 'bóng chuyền', e: 'volleyball' },
      { h: '体育', p: 'tǐyù', v: 'thể dục, thể thao', e: 'sports' },
      { h: '同事', p: 'tóngshì', v: 'đồng nghiệp', e: 'colleague' },
      { h: '网球', p: 'wǎngqiú', v: 'quần vợt (tennis)', e: 'tennis' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '可以坐___或公共汽车。', options: ['公交车', '护照', '体育'], answer: '公交车' },
        { type: 'fill', sentence: '可以坐公交车或___。', options: ['公共汽车', '网球', '同事'], answer: '公共汽车' },
        { type: 'fill', sentence: '也可以骑___。', options: ['自行车', '出租车', '船'], answer: '自行车' },
        { type: 'fill', sentence: '或者坐___。', options: ['出租车', '自行车', '篮球'], answer: '出租车' },
        { type: 'fill', sentence: '去___馆可以坐车。', options: ['体育', '公路', '护照'], answer: '体育' }
      ],
      normal: [
        { type: 'fill', sentence: '___就在公路旁边。', options: ['地铁站', '出租车', '同事'], answer: '地铁站' },
        { type: 'fill', sentence: '地铁站就在___旁边。', options: ['公路', '体育', '护照'], answer: '公路' },
        { type: 'fill', sentence: '路上___很多。', options: ['车辆', '网球', '排球'], answer: '车辆' },
        { type: 'fill', sentence: '出国坐船要带___。', options: ['护照', '篮球', '公路'], answer: '护照' },
        { type: 'order', words: ['自行车', '骑', '可以', '也'], answer: '也可以骑自行车' },
        { type: 'order', words: ['船', '坐', '出国', '要带护照'], answer: '出国坐船要带护照' }
      ],
      hard: [
        { type: 'fill', sentence: '出国坐___要带护照。', options: ['船', '车辆', '公路'], answer: '船' },
        { type: 'fill', sentence: '我同事喜欢打___。', options: ['篮球', '护照', '公路'], answer: '篮球' },
        { type: 'fill', sentence: '打篮球、___和网球。', options: ['排球', '体育', '同事'], answer: '排球' },
        { type: 'fill', sentence: '我___喜欢打球。', options: ['同事', '车辆', '公路'], answer: '同事' },
        { type: 'translate', prompt: 'Đi nước ngoài bằng tàu thủy phải mang hộ chiếu.', answer: '出国坐船要带护照。' },
        { type: 'translate', prompt: 'Cũng có thể đạp xe đạp.', answer: '也可以骑自行车。' }
      ]
    }
  },
  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 70: Đọc thêm — Nghệ thuật, gia đình & thời tiết — 17 từ
  // 小说, 音乐, 音乐会, 作家, 校长, 院, 院子, 重点, 爱人, 家庭, 全家, 多云, 雪, 阴天, 西医, 药店, 药片
  // ───────────────────────────────────────────────────────────────────────────
  70: {
    id: 70,
    level: 2,
    title: 'Đọc thêm: Nghệ thuật, gia đình & thời tiết',
    context: 'Một ngày nhiều mây, cả nhóm nói về tiểu thuyết, âm nhạc, gia đình và chuyện sức khỏe.',
    vocabPreview: ['小说', '音乐', '家庭', '多云', '药店'],
    objectives: [
      'Dùng lượng từ 位 / 座 / 棵 (这位作家 · 一棵树)',
      'Phỏng đoán bằng 可能 (可能下雪)',
      'Dùng 让 để nói “bảo ai làm gì” (西医让我买药片)',
      'Nói về nghệ thuật, gia đình, thời tiết (小说 · 家庭 · 多云)'
    ],
    grammarNotes: [
      { point: 'Lượng từ 位 / 座 / 棵',
        explain: '位 đếm người (lịch sự); 座 đếm công trình / núi; 棵 đếm cây.',
        examples: [
          { zh: '这位作家是我们校长的爱人。', py: 'Zhè wèi zuòjiā shì wǒmen xiàozhǎng de àiren.', vi: 'Nhà văn này là vợ / chồng của hiệu trưởng.' }
        ] },
      { point: '可能 — có thể, có lẽ',
        explain: '可能 đặt trước vị ngữ để phỏng đoán khả năng xảy ra.',
        examples: [
          { zh: '明天阴天，可能下雪。', py: 'Míngtiān yīntiān, kěnéng xià xuě.', vi: 'Mai trời âm u, có thể có tuyết.' }
        ] },
      { point: '让 — bảo, sai khiến',
        explain: '让 + người + động từ: bảo / khiến ai làm gì.',
        examples: [
          { zh: '西医让我去药店买药片。', py: 'Xīyī ràng wǒ qù yàodiàn mǎi yàopiàn.', vi: 'Bác sĩ Tây y bảo tôi ra hiệu thuốc mua viên thuốc.' }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Ký túc xá · Buổi chiều', bg: 'dorm-room',
        cast: ['mai', 'xiaomei'],
        text: 'Một buổi chiều nhiều mây, hai bạn trò chuyện trong phòng.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我喜欢看小说，也喜欢音乐和音乐会。',
        pinyin: 'Wǒ xǐhuan kàn xiǎoshuō, yě xǐhuan yīnyuè hé yīnyuèhuì.',
        meaning: 'Tớ thích đọc tiểu thuyết, cũng thích âm nhạc và buổi hòa nhạc.',
        expression: 'happy', vocab: ['小说', '音乐', '音乐会']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这位作家是我们校长的爱人。',
        pinyin: 'Zhè wèi zuòjiā shì wǒmen xiàozhǎng de àirén.',
        meaning: 'Nhà văn này là vợ/chồng của hiệu trưởng chúng ta.',
        expression: 'curious', vocab: ['作家', '校长', '爱人']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '他们家庭很幸福，全家都爱艺术。学校的院子里有棵树，那座院很安静。',
        pinyin: 'Tāmen jiātíng hěn xìngfú, quánjiā dōu ài yìshù. Xuéxiào de yuànzi lǐ yǒu kē shù, nà zuò yuàn hěn ānjìng.',
        meaning: 'Gia đình họ rất hạnh phúc, cả nhà đều yêu nghệ thuật. Trong sân trường có một cái cây, khu viện đó rất yên tĩnh.',
        expression: 'happy', vocab: ['家庭', '全家', '院子', '院']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'dorm-room',
        scene: '📍 Ký túc xá',
        expression: 'curious',
        q: 'Mai nhìn ra ngoài trời. Cô ấy muốn nói "Hôm nay trời nhiều mây". Nên dùng từ nào?',
        options: [
          { text: '今天多云。', pinyin: 'Jīntiān duōyún.', meaning: 'Hôm nay nhiều mây.', correct: true,
            feedback: 'Đúng! 多云 = nhiều mây.' },
          { text: '今天阴天。', pinyin: 'Jīntiān yīntiān.', meaning: 'Hôm nay trời âm u.', correct: false,
            feedback: '阴天 = trời âm u (u ám hẳn); ý ở đây là "nhiều mây".' },
          { text: '今天小说。', pinyin: 'Jīntiān xiǎoshuō.', meaning: '(Không hợp lý)', correct: false,
            feedback: '小说 = tiểu thuyết, không tả thời tiết.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '今天多云，明天阴天，可能下雪。',
        pinyin: 'Jīntiān duōyún, míngtiān yīntiān, kěnéng xià xuě.',
        meaning: 'Hôm nay nhiều mây, mai trời âm u, có thể có tuyết.',
        expression: 'curious', vocab: ['多云', '阴天', '雪']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"小说" có nghĩa là gì?',
            options: ['tiểu thuyết', 'âm nhạc', 'gia đình', 'tuyết'],
            answer: 0
          },
          {
            q: '"家庭" và "全家" liên quan đến điều gì?',
            options: ['gia đình', 'thời tiết', 'nghệ thuật', 'thuốc'],
            answer: 0
          },
          {
            q: '"多云" và "阴天" mô tả điều gì?',
            options: ['thời tiết', 'màu sắc', 'âm nhạc', 'gia đình'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '重点是健康。西医让我去药店买药片。',
        pinyin: 'Zhòngdiǎn shì jiànkāng. Xīyī ràng wǒ qù yàodiàn mǎi yàopiàn.',
        meaning: 'Điều quan trọng là sức khỏe. Bác sĩ Tây y bảo tôi ra hiệu thuốc mua viên thuốc.',
        expression: 'focused', vocab: ['重点', '西医', '药店', '药片']
      }
    ],
    vocab: [
      { h: '小说', p: 'xiǎoshuō', v: 'tiểu thuyết', e: 'novel' },
      { h: '音乐', p: 'yīnyuè', v: 'âm nhạc', e: 'music' },
      { h: '音乐会', p: 'yīnyuèhuì', v: 'buổi hòa nhạc', e: 'concert' },
      { h: '作家', p: 'zuòjiā', v: 'nhà văn', e: 'author' },
      { h: '校长', p: 'xiàozhǎng', v: 'hiệu trưởng', e: 'president' },
      { h: '院', p: 'yuàn', v: 'viện, khu nhà', e: 'courtyard' },
      { h: '院子', p: 'yuànzi', v: 'sân (nhà)', e: 'courtyard' },
      { h: '重点', p: 'zhòngdiǎn', v: 'trọng điểm, điều quan trọng', e: 'to recount (e.g. results of election)' },
      { h: '爱人', p: 'àirén', v: 'vợ/chồng', e: 'spouse (PRC)' },
      { h: '家庭', p: 'jiātíng', v: 'gia đình', e: 'family' },
      { h: '全家', p: 'quánjiā', v: 'cả nhà', e: 'whole family' },
      { h: '多云', p: 'duōyún', v: 'nhiều mây', e: 'cloudy (meteorology)' },
      { h: '雪', p: 'xuě', v: 'tuyết', e: 'snow' },
      { h: '阴天', p: 'yīntiān', v: 'trời âm u', e: 'cloudy day' },
      { h: '西医', p: 'xīyī', v: 'Tây y; bác sĩ Tây y', e: 'Western medicine' },
      { h: '药店', p: 'yàodiàn', v: 'hiệu thuốc', e: 'pharmacy' },
      { h: '药片', p: 'yàopiàn', v: 'viên thuốc', e: 'a (medicine) pill or tablet' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我喜欢看___。', options: ['小说', '音乐', '雪'], answer: '小说' },
        { type: 'fill', sentence: '也喜欢音乐和___。', options: ['音乐会', '小说', '院子'], answer: '音乐会' },
        { type: 'fill', sentence: '我也喜欢___。', options: ['音乐', '阴天', '药店'], answer: '音乐' },
        { type: 'fill', sentence: '这位___是校长的爱人。', options: ['作家', '院长', '同事'], answer: '作家' },
        { type: 'fill', sentence: '是我们___的爱人。', options: ['校长', '作家', '全家'], answer: '校长' }
      ],
      normal: [
        { type: 'fill', sentence: '他们___很幸福。', options: ['家庭', '院子', '音乐'], answer: '家庭' },
        { type: 'fill', sentence: '___都爱艺术。', options: ['全家', '家庭', '校长'], answer: '全家' },
        { type: 'fill', sentence: '学校的___里有棵树。', options: ['院子', '院', '家庭'], answer: '院子' },
        { type: 'fill', sentence: '今天___。', options: ['多云', '小说', '音乐'], answer: '多云' },
        { type: 'fill', sentence: '明天阴天，可能下___。', options: ['雪', '云', '药'], answer: '雪' },
        { type: 'order', words: ['看小说', '我', '喜欢'], answer: '我喜欢看小说' },
        { type: 'order', words: ['很幸福', '他们', '家庭'], answer: '他们家庭很幸福' }
      ],
      hard: [
        { type: 'fill', sentence: '明天___，可能下雪。', options: ['阴天', '多云', '院子'], answer: '阴天' },
        { type: 'fill', sentence: '___是健康。', options: ['重点', '院子', '音乐'], answer: '重点' },
        { type: 'fill', sentence: '___让我去药店买药片。', options: ['西医', '作家', '校长'], answer: '西医' },
        { type: 'fill', sentence: '去___买药片。', options: ['药店', '院子', '音乐会'], answer: '药店' },
        { type: 'translate', prompt: 'Hôm nay nhiều mây.', answer: '今天多云。' },
        { type: 'translate', prompt: 'Điều quan trọng là sức khỏe.', answer: '重点是健康。' }
      ]
    }
  },
  // ───────────────────────────────────────────────────────────────────────────
  // BÀI 71: Đọc thêm — Công việc & học thuật — 5 từ
  // 道理, 意见, 公司, 经理, 中医
  // ───────────────────────────────────────────────────────────────────────────
  71: {
    id: 71,
    level: 2,
    title: 'Đọc thêm: Công việc & học thuật',
    context: 'Mai và Tiểu Mỹ nói về công việc ở công ty và một quan điểm về y học cổ truyền.',
    vocabPreview: ['公司', '经理', '道理', '意见', '中医'],
    objectives: [
      'Nhận xét bằng bổ ngữ trình độ V得 (说得有道理)',
      'Diễn đạt “làm việc ở đâu” bằng 在 + nơi + 上班',
      'Bày tỏ tán thành bằng 同意…的意见',
      'Nói về công việc, quan điểm (公司 · 经理 · 意见)'
    ],
    grammarNotes: [
      { point: 'V + 得 + nhận xét',
        explain: 'Động từ + 得 + cụm để đánh giá động tác (nói có lý, làm tốt…).',
        examples: [
          { zh: '你说得有道理。', py: 'Nǐ shuō de yǒu dàolǐ.', vi: 'Cậu nói có lý.' }
        ] },
      { point: '在 + nơi chốn + V',
        explain: '在 + địa điểm đặt trước động từ để nêu nơi diễn ra hành động.',
        examples: [
          { zh: '我表哥在一家公司上班。', py: 'Wǒ biǎogē zài yì jiā gōngsī shàngbān.', vi: 'Anh họ tớ làm việc ở một công ty.' }
        ] },
      { point: '同意 — đồng ý (với)',
        explain: '同意 + ý kiến / người để bày tỏ tán thành.',
        examples: [
          { zh: '我同意你的意见。', py: 'Wǒ tóngyì nǐ de yìjiàn.', vi: 'Tớ đồng ý với ý kiến của cậu.' }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Trên phố · Buổi chiều', bg: 'street',
        cast: ['mai', 'xiaomei'],
        text: 'Hai bạn nói chuyện về công việc tương lai.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我表哥在一家公司上班，他是经理。',
        pinyin: 'Wǒ biǎogē zài yì jiā gōngsī shàngbān, tā shì jīnglǐ.',
        meaning: 'Anh họ tớ làm việc ở một công ty, anh ấy là quản lý.',
        expression: 'happy', vocab: ['公司', '经理']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '你说得有道理。你有什么意见？',
        pinyin: 'Nǐ shuō de yǒu dàoli. Nǐ yǒu shénme yìjiàn?',
        meaning: 'Cậu nói có lý. Cậu có ý kiến gì không?',
        expression: 'curious', vocab: ['道理', '意见']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'street',
        scene: '📍 Trên phố',
        expression: 'curious',
        q: 'Mai muốn nói "Tớ tin vào Đông y". Nên dùng từ nào cho "Đông y"?',
        options: [
          { text: '我相信中医。', pinyin: 'Wǒ xiāngxìn zhōngyī.', meaning: 'Tớ tin vào Đông y.', correct: true,
            feedback: 'Đúng! 中医 = Đông y, y học cổ truyền Trung Hoa.' },
          { text: '我相信经理。', pinyin: 'Wǒ xiāngxìn jīnglǐ.', meaning: 'Tớ tin vào quản lý.', correct: false,
            feedback: '经理 = quản lý (chức vụ), không phải "Đông y".' },
          { text: '我相信公司。', pinyin: 'Wǒ xiāngxìn gōngsī.', meaning: 'Tớ tin vào công ty.', correct: false,
            feedback: '公司 = công ty, không phải "Đông y".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我相信中医，他的话很有道理。',
        pinyin: 'Wǒ xiāngxìn zhōngyī, tā de huà hěn yǒu dàoli.',
        meaning: 'Tớ tin vào Đông y, lời ông ấy rất có lý.',
        expression: 'happy', vocab: ['中医', '道理']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: '"公司" và "经理" liên quan đến điều gì?',
            options: ['công việc, công ty', 'y học', 'thời tiết', 'thể thao'],
            answer: 0
          },
          {
            q: '"有道理" có nghĩa là gì?',
            options: ['có lý, hợp lý', 'có ý kiến', 'có công ty', 'có thuốc'],
            answer: 0
          },
          {
            q: '"中医" có nghĩa là gì?',
            options: ['Đông y (y học cổ truyền)', 'Tây y', 'quản lý', 'công ty'],
            answer: 0
          }
        ]
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我同意你的意见。这家公司也请了中医。',
        pinyin: 'Wǒ tóngyì nǐ de yìjiàn. Zhè jiā gōngsī yě qǐng le zhōngyī.',
        meaning: 'Tớ đồng ý với ý kiến của cậu. Công ty này cũng mời cả thầy Đông y.',
        expression: 'happy', vocab: ['意见', '公司', '中医']
      }
    ],
    vocab: [
      { h: '道理', p: 'dàoli', v: 'lý lẽ, đạo lý', e: 'reason' },
      { h: '意见', p: 'yìjiàn', v: 'ý kiến', e: 'idea' },
      { h: '公司', p: 'gōngsī', v: 'công ty', e: 'company' },
      { h: '经理', p: 'jīnglǐ', v: 'quản lý, giám đốc', e: 'manager' },
      { h: '中医', p: 'zhōngyī', v: 'Đông y, y học cổ truyền', e: 'traditional Chinese medical science' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我表哥在一家___上班。', options: ['公司', '中医', '意见'], answer: '公司' },
        { type: 'fill', sentence: '他是___。', options: ['经理', '道理', '意见'], answer: '经理' },
        { type: 'fill', sentence: '你说得有___。', options: ['道理', '公司', '经理'], answer: '道理' },
        { type: 'fill', sentence: '你有什么___？', options: ['意见', '道理', '中医'], answer: '意见' },
        { type: 'fill', sentence: '我相信___。', options: ['中医', '公司', '经理'], answer: '中医' }
      ],
      normal: [
        { type: 'fill', sentence: '他是公司的___。', options: ['经理', '中医', '道理'], answer: '经理' },
        { type: 'fill', sentence: '我同意你的___。', options: ['意见', '道理', '公司'], answer: '意见' },
        { type: 'fill', sentence: '他的话很有___。', options: ['道理', '意见', '经理'], answer: '道理' },
        { type: 'fill', sentence: '这家公司请了___。', options: ['中医', '经理', '意见'], answer: '中医' },
        { type: 'order', words: ['公司', '一家', '上班', '在'], answer: '在一家公司上班' },
        { type: 'order', words: ['道理', '有', '你说得'], answer: '你说得有道理' }
      ],
      hard: [
        { type: 'fill', sentence: '我相信___，他的话有道理。', options: ['中医', '公司', '意见'], answer: '中医' },
        { type: 'fill', sentence: '我同意你的意见，这家___请了中医。', options: ['公司', '经理', '道理'], answer: '公司' },
        { type: 'fill', sentence: '你有什么___？', options: ['意见', '道理', '中医'], answer: '意见' },
        { type: 'translate', prompt: 'Cậu nói có lý.', answer: '你说得有道理。' },
        { type: 'translate', prompt: 'Tớ tin vào Đông y.', answer: '我相信中医。' }
      ]
    }
  }
});
