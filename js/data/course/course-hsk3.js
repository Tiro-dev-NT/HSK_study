// ═══════════════════════════════════════════════════════
// COURSE-HSK3.JS — Truyện Mai HSK 3 (Bài 72-121, Pro-gated)
// Assign vào COURSE_DATA (khai báo ở course-data.js).
// Mỗi lesson level: 3 → Course.loadLesson() gate qua Monetization.isPro().
// Coverage: 953 từ HSK3_DATA[3] → 50 bài (map: content/curriculum/mai-hsk3-coverage-map.md)
// Cast bổ sung: mama (妈妈) · fuwuyuan (服务员) · yisheng (医生)
// Scene bổ sung: restaurant · shop · station · park · office
// ═══════════════════════════════════════════════════════

// ───────────────────────────────────────────────────────
// BATCH 1 — Bài 72-76 (Cuộc sống tự lập + Đi lại + Chuyến đi)
// ───────────────────────────────────────────────────────
Object.assign(COURSE_DATA, {

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 72: Cuộc sống tự lập (1) — 20 từ
  // 安排,安装,按,按照,把,把握,搬,搬家,办理,保持,保存,保护,保留,保证,报,报到,报道,报告,比较,比赛
  // ─────────────────────────────────────────────────────────────────────────
  72: {
    id: 72,
    level: 3,
    title: 'Cuộc sống tự lập (1)',
    context: 'Mai chuyển đến căn hộ nhỏ gần trường cho kỳ trao đổi. Mẹ đến giúp em dọn dẹp, rồi Mai đến văn phòng chương trình để trình diện.',
    vocabPreview: ['搬家', '安排', '报到', '保证', '把握'],
    objectives: [
      "Nắm nhóm từ khóa: 搬家 · 安排 · 报到 · 保证 · 把握",
      "Kể/nghe hiểu tình huống Cuộc sống tự lập (1) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 搬家 · 安排 · 报到",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "搬家 — chuyển nhà",
        explain: "Dùng 搬家 trong ngữ cảnh Cuộc sống tự lập (1) để diễn đạt: chuyển nhà.",
        examples: [
          { zh: "妈妈帮你搬家，今天的东西真不少！", py: "Māma bāng nǐ bānjiā, jīntiān de dōngxi zhēn bù shǎo!", vi: "Mẹ giúp con chuyển nhà, hôm nay đồ đạc nhiều thật!" }
        ] },
      { point: "安排 — sắp xếp, bố trí",
        explain: "Dùng 安排 trong ngữ cảnh Cuộc sống tự lập (1) để diễn đạt: sắp xếp, bố trí.",
        examples: [
          { zh: "你按照计划安排房间，会比较整齐。", py: "Nǐ ànzhào jìhuà ānpái fángjiān, huì bǐjiào zhěngqí.", vi: "Con sắp xếp phòng theo kế hoạch sẽ gọn gàng hơn." }
        ] },
      { point: "报到 — trình diện, đăng ký",
        explain: "Dùng 报到 trong ngữ cảnh Cuộc sống tự lập (1) để diễn đạt: trình diện, đăng ký.",
        examples: [
          { zh: "你来报到了？先办理一下手续吧。", py: "Nǐ lái bàodào le? Xiān bànlǐ yíxià shǒuxù ba.", vi: "Em đến trình diện rồi à? Làm thủ tục trước nhé." }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Căn hộ mới · Buổi sáng', bg: 'home',
        cast: ['mai', 'mama'],
        text: 'Mai vừa chuyển đến căn hộ nhỏ gần trường. Mẹ đến giúp em dọn dẹp.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '妈妈帮你搬家，今天的东西真不少！',
        pinyin: 'Māma bāng nǐ bānjiā, jīntiān de dōngxi zhēn bù shǎo!',
        meaning: 'Mẹ giúp con chuyển nhà, hôm nay đồ đạc nhiều thật!',
        expression: 'happy', vocab: ['搬家']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '谢谢妈妈！我先把这些箱子搬进房间。',
        pinyin: 'Xièxie māma! Wǒ xiān bǎ zhèxiē xiāngzi bān jìn fángjiān.',
        meaning: 'Cảm ơn mẹ! Con đem mấy cái thùng này vào phòng trước.',
        expression: 'happy', vocab: ['把', '搬']
      },
      {
        type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '你按照计划安排房间，会比较整齐。',
        pinyin: 'Nǐ ànzhào jìhuà ānpái fángjiān, huì bǐjiào zhěngqí.',
        meaning: 'Con sắp xếp phòng theo kế hoạch sẽ gọn gàng hơn.',
        expression: null, vocab: ['按照', '安排', '比较']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '好。我还要安装网络，按一下这个开关就行。',
        pinyin: 'Hǎo. Wǒ hái yào ānzhuāng wǎngluò, àn yíxià zhège kāiguān jiù xíng.',
        meaning: 'Vâng. Con còn phải lắp mạng, ấn cái công tắc này là được.',
        expression: 'focused', vocab: ['安装', '按']
      },
      {
        type: 'choice', speaker: 'mama', cast: ['mai', 'mama'], bg: 'home',
        scene: '📍 Căn hộ mới',
        expression: 'curious',
        q: 'Mẹ dặn giữ phòng sạch. Mai muốn hứa "Con bảo đảm sẽ giữ phòng sạch sẽ". Cô ấy nên nói thế nào?',
        options: [
          { text: '我保证保持房间干净。', pinyin: 'Wǒ bǎozhèng bǎochí fángjiān gānjìng.', meaning: 'Con bảo đảm sẽ giữ phòng sạch sẽ.', correct: true,
            feedback: 'Đúng! 保证 = cam đoan/bảo đảm; 保持 = giữ gìn (một trạng thái).' },
          { text: '我保存房间干净。', pinyin: 'Wǒ bǎocún fángjiān gānjìng.', meaning: '(không tự nhiên)', correct: false,
            feedback: '保存 = lưu giữ (dữ liệu, đồ vật), không dùng cho "giữ trạng thái sạch".' },
          { text: '我保护房间干净。', pinyin: 'Wǒ bǎohù fángjiān gānjìng.', meaning: '(không tự nhiên)', correct: false,
            feedback: '保护 = bảo vệ (khỏi nguy hại), không hợp nghĩa "giữ sạch".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '对了，重要文件要保存好，旧照片也保留着。',
        pinyin: 'Duìle, zhòngyào wénjiàn yào bǎocún hǎo, jiù zhàopiàn yě bǎoliú zhe.',
        meaning: 'À đúng rồi, giấy tờ quan trọng phải lưu giữ cẩn thận, ảnh cũ cũng giữ lại nhé.',
        expression: 'focused', vocab: ['保存', '保留']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '我会保护好它们的。',
        pinyin: 'Wǒ huì bǎohù hǎo tāmen de.',
        meaning: 'Con sẽ bảo vệ chúng cẩn thận.',
        expression: 'happy', vocab: ['保护']
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Văn phòng chương trình · Sáng hôm sau', bg: 'office',
        cast: ['mai', 'laoli'],
        text: 'Hôm sau, Mai đến văn phòng chương trình trao đổi để trình diện.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '你来报到了？先办理一下手续吧。',
        pinyin: 'Nǐ lái bàodào le? Xiān bànlǐ yíxià shǒuxù ba.',
        meaning: 'Em đến trình diện rồi à? Làm thủ tục trước nhé.',
        expression: 'focused', vocab: ['报到', '办理']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '好的，老师。这是我的报告。',
        pinyin: 'Hǎo de, lǎoshī. Zhè shì wǒ de bàogào.',
        meaning: 'Vâng thầy. Đây là báo cáo của em.',
        expression: null, vocab: ['报告']
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '很好。最近有一个汉语比赛，新闻也报道了，你要报名吗？',
        pinyin: 'Hěn hǎo. Zuìjìn yǒu yí gè Hànyǔ bǐsài, xīnwén yě bàodào le, nǐ yào bàomíng ma?',
        meaning: 'Tốt lắm. Gần đây có một cuộc thi tiếng Hán, tin tức cũng đưa tin rồi, em muốn đăng ký không?',
        expression: 'happy', vocab: ['比赛', '报道']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '我想报！这个机会我一定要把握住。',
        pinyin: 'Wǒ xiǎng bào! Zhège jīhuì wǒ yídìng yào bǎwò zhù.',
        meaning: 'Em muốn đăng ký! Cơ hội này em nhất định phải nắm bắt.',
        expression: 'happy', vocab: ['报', '把握']
      },
      {
        type: 'checkpoint',
        questions: [
          { q: '"报到" có nghĩa là gì?', options: ['trình diện, đăng ký có mặt', 'chuyển nhà', 'lắp đặt', 'so sánh'], answer: 0 },
          { q: 'Từ nào nghĩa là "bảo đảm, cam đoan"?', options: ['保留', '保护', '保证', '保存'], answer: 2 },
          { q: '"把握" (机会) có nghĩa là gì?', options: ['từ bỏ', 'nắm bắt', 'sắp xếp', 'báo cáo'], answer: 1 }
        ]
      }
    ],
    vocab: [
      { h: '安排', p: 'ān pái', v: 'sắp xếp, bố trí', e: 'to arrange' },
      { h: '安装', p: 'ān zhuāng', v: 'lắp đặt, cài đặt', e: 'to install' },
      { h: '按', p: 'àn', v: 'ấn, nhấn', e: 'to press' },
      { h: '按照', p: 'àn zhào', v: 'theo, căn cứ vào', e: 'according to' },
      { h: '把', p: 'bǎ', v: 'cầm, nắm', e: 'to hold' },
      { h: '把握', p: 'bǎ wò', v: 'nắm bắt, nắm chắc', e: 'to grasp (also fig.)' },
      { h: '搬', p: 'bān', v: 'chuyển, dọn', e: 'to move (i.e. relocate oneself)' },
      { h: '搬家', p: 'bān jiā', v: 'chuyển nhà', e: 'to move house' },
      { h: '办理', p: 'bàn lǐ', v: 'giải quyết, tiến hành', e: 'to handle' },
      { h: '保持', p: 'bǎo chí', v: 'duy trì, giữ gìn', e: 'to keep' },
      { h: '保存', p: 'bǎo cún', v: 'bảo tồn, lưu giữ', e: 'to conserve' },
      { h: '保护', p: 'bǎo hù', v: 'bảo vệ', e: 'to protect' },
      { h: '保留', p: 'bǎo liú', v: 'giữ lại, bảo lưu', e: 'to keep' },
      { h: '保证', p: 'bǎo zhèng', v: 'bảo đảm, cam đoan', e: 'guarantee' },
      { h: '报', p: 'bào', v: 'báo cáo, thông báo', e: 'to announce' },
      { h: '报到', p: 'bào dào', v: 'trình diện, đăng ký', e: 'to report for duty' },
      { h: '报道', p: 'bào dào', v: 'đưa tin, tường thuật', e: 'to report (news)' },
      { h: '报告', p: 'bào gào', v: 'báo cáo', e: 'to inform' },
      { h: '比较', p: 'bǐ jiào', v: 'so sánh, tương đối', e: 'to compare' },
      { h: '比赛', p: 'bǐ sài', v: 'thi đấu, cuộc thi', e: 'competition (sports etc)' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '妈妈帮你搬家', options: ['妈妈帮你搬家','妈妈帮你做饭','妈妈在家休息'], answer: '妈妈帮你搬家', py: 'Māma bāng nǐ bānjiā', explain: '听 搬家 = chuyển nhà.' },
        { type: 'fill', sentence: '妈妈帮我___，东西太多了。', options: ['搬家', '比赛', '报告'], answer: '搬家' },
        { type: 'fill', sentence: '请___计划做事。', options: ['按照', '保护', '安装'], answer: '按照' },
        { type: 'fill', sentence: '我要___一下房间。', options: ['安排', '报到', '比较'], answer: '安排' },
        { type: 'fill', sentence: '老师让我去办公室___。', options: ['报到', '保存', '把握'], answer: '报到' },
        { type: 'fill', sentence: '这是我写的___。', options: ['报告', '搬', '按'], answer: '报告' }
      ],
      normal: [
        { type: 'listen', audio: '这是我的报告', options: ['这是我的报告','这是我的照片','这是我的房间'], answer: '这是我的报告', py: 'Zhè shì wǒ de bàogào', explain: '听 报告 = báo cáo.' },
        { type: 'dictation', audio: '你来报到了', answer: '你来报到了', hint: 'Em đến trình diện rồi.', py: 'Nǐ lái bàodào le', explain: '报到 = trình diện, đăng ký.' },
        { type: 'fill', sentence: '我___房间会很干净。', options: ['保持', '保存', '比赛'], answer: '保持' },
        { type: 'fill', sentence: '我___打扫干净。', options: ['保证', '保留', '安装'], answer: '保证' },
        { type: 'fill', sentence: '重要文件要___好。', options: ['保存', '搬家', '报道'], answer: '保存' },
        { type: 'fill', sentence: '学校有一个汉语___。', options: ['比赛', '报到', '安排'], answer: '比赛' },
        { type: 'fill', sentence: '新闻___了这件事。', options: ['报道', '办理', '保护'], answer: '报道' },
        { type: 'order', words: ['我', '把', '箱子', '搬进来'], answer: '我把箱子搬进来' },
        { type: 'order', words: ['要', '把握', '机会', '这个'], answer: '要把握这个机会' }
      ],
      hard: [
        { type: 'fill', sentence: '旧照片我想___着。', options: ['保留', '报到', '安排'], answer: '保留' },
        { type: 'fill', sentence: '请___一下网络。', options: ['安装', '搬家', '报告'], answer: '安装' },
        { type: 'fill', sentence: '我去___入学手续。', options: ['办理', '保护', '比较'], answer: '办理' },
        { type: 'fill', sentence: '我___了两个房间的大小。', options: ['比较', '保证', '搬'], answer: '比较' },
        { type: 'translate', prompt: 'Con đem mấy cái thùng này vào phòng.', answer: '我把这些箱子搬进房间。' },
        { type: 'translate', prompt: 'Cơ hội này em nhất định phải nắm bắt.', answer: '这个机会我一定要把握住。' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 73: Cuộc sống tự lập (2) — 20 từ
  // 变化,变为,表达,表明,表现,表演,播出,播放,补,补充,步,才能,采取,采用,产生,吵,吵架,称为,成就,成立
  // ─────────────────────────────────────────────────────────────────────────
  73: {
    id: 73,
    level: 3,
    title: 'Cuộc sống tự lập (2)',
    context: 'Mai và Tiểu Mỹ thành lập câu lạc bộ tiếng Hán, cùng chuẩn bị một tiết mục biểu diễn — dù có chút bất đồng nhỏ.',
    vocabPreview: ['成立', '表演', '表达', '变化', '采用'],
    objectives: [
      "Nắm nhóm từ khóa: 成立 · 表演 · 表达 · 变化 · 采用",
      "Kể/nghe hiểu tình huống Cuộc sống tự lập (2) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 成立 · 表演 · 表达",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "成立 — thành lập",
        explain: "Dùng 成立 trong ngữ cảnh Cuộc sống tự lập (2) để diễn đạt: thành lập.",
        examples: [
          { zh: "我们的汉语俱乐部正式成立了！这是一个好的开始。", py: "Wǒmen de Hànyǔ jùlèbù zhèngshì chénglì le! Zhè shì yí gè hǎo de kāishǐ.", vi: "Câu lạc bộ tiếng Hán của chúng ta chính thức thành lập rồi! Đây là khởi đầu tốt." }
        ] },
      { point: "表演 — biểu diễn",
        explain: "Dùng 表演 trong ngữ cảnh Cuộc sống tự lập (2) để diễn đạt: biểu diễn.",
        examples: [
          { zh: "我们采用什么方式好呢？要不要准备一个表演？", py: "Wǒmen cǎiyòng shénme fāngshì hǎo ne? Yào bu yào zhǔnbèi yí gè biǎoyǎn?", vi: "Chúng ta dùng cách nào nhỉ? Có nên chuẩn bị một tiết mục biểu diễn không?" },
          { zh: "你们的表演下周会在校园电视上播出。这是很大的成就，俱乐部以后会被称为\"明星社团\"！", py: "Nǐmen de biǎoyǎn xià zhōu huì zài xiàoyuán diànshì shàng bōchū. Zhè shì hěn dà de chéngjiù, jùlèbù yǐhòu huì bèi chēngwéi \"míngxīng shètuán\"!", vi: "Tiết mục của các em tuần sau sẽ phát sóng trên TV trường. Đây là thành tựu lớn, câu lạc bộ sau này sẽ được gọi là \"CLB ngôi sao\"!" }
        ] },
      { point: "表达 — biểu đạt, diễn đạt",
        explain: "Dùng 表达 trong ngữ cảnh Cuộc sống tự lập (2) để diễn đạt: biểu đạt, diễn đạt.",
        examples: [
          { zh: "对！第一步，我们要表达自己的想法，表明俱乐部的目标。", py: "Duì! Dì-yī bù, wǒmen yào biǎodá zìjǐ de xiǎngfǎ, biǎomíng jùlèbù de mùbiāo.", vi: "Đúng! Bước đầu tiên, chúng ta phải biểu đạt ý tưởng, nêu rõ mục tiêu câu lạc bộ." }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Sân trường · Buổi chiều', bg: 'campus',
        cast: ['mai', 'xiaomei'],
        text: 'Mai và Tiểu Mỹ quyết định lập một câu lạc bộ tiếng Hán ở trường.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我们的汉语俱乐部正式成立了！这是一个好的开始。',
        pinyin: 'Wǒmen de Hànyǔ jùlèbù zhèngshì chénglì le! Zhè shì yí gè hǎo de kāishǐ.',
        meaning: 'Câu lạc bộ tiếng Hán của chúng ta chính thức thành lập rồi! Đây là khởi đầu tốt.',
        expression: 'happy', vocab: ['成立']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '对！第一步，我们要表达自己的想法，表明俱乐部的目标。',
        pinyin: 'Duì! Dì-yī bù, wǒmen yào biǎodá zìjǐ de xiǎngfǎ, biǎomíng jùlèbù de mùbiāo.',
        meaning: 'Đúng! Bước đầu tiên, chúng ta phải biểu đạt ý tưởng, nêu rõ mục tiêu câu lạc bộ.',
        expression: 'focused', vocab: ['步', '表达', '表明']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我们采用什么方式好呢？要不要准备一个表演？',
        pinyin: 'Wǒmen cǎiyòng shénme fāngshì hǎo ne? Yào bu yào zhǔnbèi yí gè biǎoyǎn?',
        meaning: 'Chúng ta dùng cách nào nhỉ? Có nên chuẩn bị một tiết mục biểu diễn không?',
        expression: 'curious', vocab: ['采用', '表演']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好主意！我们采取小组的方式，每个人表现自己的才能。',
        pinyin: 'Hǎo zhǔyi! Wǒmen cǎiqǔ xiǎozǔ de fāngshì, měi gè rén biǎoxiàn zìjǐ de cáinéng.',
        meaning: 'Ý hay! Ta áp dụng cách chia nhóm, mỗi người thể hiện tài năng của mình.',
        expression: 'happy', vocab: ['采取', '表现', '才能']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我来播放音乐，你补充一些汉语台词，好吗？',
        pinyin: 'Wǒ lái bōfàng yīnyuè, nǐ bǔchōng yìxiē Hànyǔ táicí, hǎo ma?',
        meaning: 'Tớ phát nhạc, cậu bổ sung thêm một ít lời thoại tiếng Hán nhé?',
        expression: 'focused', vocab: ['播放', '补充']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'campus',
        scene: '📍 Sân trường',
        expression: 'curious',
        q: 'Hai bạn có chút bất đồng. Mai muốn nói "Đừng cãi nhau, chúng ta bàn lại đi". Cô ấy nên nói thế nào?',
        options: [
          { text: '别吵架，我们再商量一下。', pinyin: 'Bié chǎojià, wǒmen zài shāngliang yíxià.', meaning: 'Đừng cãi nhau, chúng ta bàn lại một chút.', correct: true,
            feedback: 'Đúng! 吵架 = cãi nhau (động từ ly hợp, không mang tân ngữ trực tiếp).' },
          { text: '别吵架我们，再商量。', pinyin: 'Bié chǎojià wǒmen, zài shāngliang.', meaning: '(sai trật tự)', correct: false,
            feedback: 'Sai — 吵架 không thể mang tân ngữ "我们" như vậy.' },
          { text: '别吵，我们变为商量。', pinyin: 'Bié chǎo, wǒmen biànwéi shāngliang.', meaning: '(không tự nhiên)', correct: false,
            feedback: '变为 = biến thành (A thành B), không hợp ngữ cảnh này.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '外面太吵了，我们进去说吧。声音太大会产生误会。',
        pinyin: 'Wàimiàn tài chǎo le, wǒmen jìnqù shuō ba. Shēngyīn tài dà huì chǎnshēng wùhuì.',
        meaning: 'Bên ngoài ồn quá, vào trong nói đi. To tiếng sẽ nảy sinh hiểu lầm.',
        expression: null, vocab: ['吵', '产生']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你说得对。我们的友谊不会有变化。',
        pinyin: 'Nǐ shuō de duì. Wǒmen de yǒuyì bú huì yǒu biànhuà.',
        meaning: 'Cậu nói đúng. Tình bạn của chúng ta sẽ không thay đổi.',
        expression: 'happy', vocab: ['变化']
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '你们的表演下周会在校园电视上播出。这是很大的成就，俱乐部以后会被称为"明星社团"！',
        pinyin: 'Nǐmen de biǎoyǎn xià zhōu huì zài xiàoyuán diànshì shàng bōchū. Zhè shì hěn dà de chéngjiù, jùlèbù yǐhòu huì bèi chēngwéi "míngxīng shètuán"!',
        meaning: 'Tiết mục của các em tuần sau sẽ phát sóng trên TV trường. Đây là thành tựu lớn, câu lạc bộ sau này sẽ được gọi là "CLB ngôi sao"!',
        expression: 'happy', vocab: ['播出', '成就', '称为']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '太好了！我得补一句：谢谢大家的努力！',
        pinyin: 'Tài hǎo le! Wǒ děi bǔ yí jù: xièxie dàjiā de nǔlì!',
        meaning: 'Tuyệt quá! Tớ phải nói thêm một câu: cảm ơn nỗ lực của mọi người!',
        expression: 'happy', vocab: ['补']
      },
      {
        type: 'checkpoint',
        questions: [
          { q: '"成立" có nghĩa là gì?', options: ['thành lập', 'giải tán', 'biểu diễn', 'phát sóng'], answer: 0 },
          { q: 'Từ nào nghĩa là "biểu đạt, diễn đạt"?', options: ['表现', '表达', '表明', '表演'], answer: 1 },
          { q: '"吵架" có nghĩa là gì?', options: ['bàn bạc', 'cãi nhau', 'biểu diễn', 'bổ sung'], answer: 1 }
        ]
      }
    ],
    vocab: [
      { h: '变化', p: 'biàn huà', v: 'biến đổi, thay đổi', e: 'to change' },
      { h: '变为', p: 'biàn wéi', v: 'biến thành', e: 'to change into' },
      { h: '表达', p: 'biǎo dá', v: 'biểu đạt, diễn đạt', e: 'to express' },
      { h: '表明', p: 'biǎo míng', v: 'cho thấy, chứng tỏ', e: 'to make clear' },
      { h: '表现', p: 'biǎo xiàn', v: 'biểu hiện, thể hiện', e: 'to show' },
      { h: '表演', p: 'biǎo yǎn', v: 'biểu diễn', e: 'play' },
      { h: '播出', p: 'bō chū', v: 'phát sóng', e: 'to broadcast' },
      { h: '播放', p: 'bō fàng', v: 'phát, chiếu', e: 'to broadcast' },
      { h: '补', p: 'bǔ', v: 'vá, bổ sung', e: 'to repair' },
      { h: '补充', p: 'bǔ chōng', v: 'bổ sung', e: 'to replenish' },
      { h: '步', p: 'bù', v: 'bước (chân)', e: 'step, pace, walk' },
      { h: '才能', p: 'cái néng', v: 'tài năng', e: 'talent' },
      { h: '采取', p: 'cǎi qǔ', v: 'áp dụng, tiến hành', e: 'to adopt or carry out (measures, policies, course of action)' },
      { h: '采用', p: 'cǎi yòng', v: 'áp dụng, sử dụng', e: 'to adopt' },
      { h: '产生', p: 'chǎn shēng', v: 'phát sinh, tạo ra', e: 'to arise' },
      { h: '吵', p: 'chǎo', v: 'ồn ào, cãi nhau', e: 'to quarrel' },
      { h: '吵架', p: 'chǎo jià', v: 'cãi nhau, tranh cãi', e: 'to quarrel' },
      { h: '称为', p: 'chēng wéi', v: 'gọi là, được gọi là', e: 'to be called' },
      { h: '成就', p: 'chéng jiù', v: 'thành tựu', e: 'accomplishment' },
      { h: '成立', p: 'chéng lì', v: 'thành lập', e: 'to establish' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '我们的友谊不会有变化', options: ['我们的友谊不会有变化','我们的关系发生了变化','我们的友谊结束了'], answer: '我们的友谊不会有变化', py: 'Wǒmen de yǒuyì bú huì yǒu biànhuà', explain: '听 变化 = thay đổi.' },
        { type: 'fill', sentence: '俱乐部正式___了。', options: ['成立', '吵架', '播放'], answer: '成立' },
        { type: 'fill', sentence: '每个人___自己的才能。', options: ['表现', '补充', '产生'], answer: '表现' },
        { type: 'fill', sentence: '我来___音乐。', options: ['播放', '成立', '表达'], answer: '播放' },
        { type: 'fill', sentence: '我们准备一个___。', options: ['表演', '变化', '才能'], answer: '表演' },
        { type: 'fill', sentence: '别___，好好说话。', options: ['吵架', '成就', '采用'], answer: '吵架' }
      ],
      normal: [
        { type: 'listen', audio: '我来播放音乐', options: ['我来播放音乐','我来表演节目','我来准备台词'], answer: '我来播放音乐', py: 'Wǒ lái bōfàng yīnyuè', explain: '听 播放 = phát (nhạc).' },
        { type: 'dictation', audio: '这是很大的成就', answer: '这是很大的成就', hint: 'Đây là thành tựu lớn.', py: 'Zhè shì hěn dà de chéngjiù', explain: '成就 = thành tựu.' },
        { type: 'fill', sentence: '我想___自己的想法。', options: ['表达', '播出', '补'], answer: '表达' },
        { type: 'fill', sentence: '我们___小组的方式。', options: ['采取', '产生', '称为'], answer: '采取' },
        { type: 'fill', sentence: '请你___几句话。', options: ['补充', '比赛', '成立'], answer: '补充' },
        { type: 'fill', sentence: '声音太大会___误会。', options: ['产生', '播放', '表演'], answer: '产生' },
        { type: 'fill', sentence: '节目下周在电视上___。', options: ['播出', '采用', '吵架'], answer: '播出' },
        { type: 'order', words: ['俱乐部', '成立', '了', '正式'], answer: '俱乐部正式成立了' },
        { type: 'order', words: ['第一步', '我们', '商量', '先'], answer: '第一步我们先商量' }
      ],
      hard: [
        { type: 'fill', sentence: '这个项目是很大的___。', options: ['成就', '表演', '步'], answer: '成就' },
        { type: 'fill', sentence: '大家___它"明星社团"。', options: ['称为', '采用', '补充'], answer: '称为' },
        { type: 'fill', sentence: '他很有音乐___。', options: ['才能', '变化', '产生'], answer: '才能' },
        { type: 'fill', sentence: '事实___了他的想法。', options: ['表明', '播放', '吵'], answer: '表明' },
        { type: 'translate', prompt: 'Câu lạc bộ của chúng ta chính thức thành lập rồi.', answer: '我们的俱乐部正式成立了。' },
        { type: 'translate', prompt: 'Mỗi người thể hiện tài năng của mình.', answer: '每个人表现自己的才能。' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 74: Việc nhà & thói quen — 20 từ
  // 成长,持续,充满,处理,传,传播,传来,传说,创新,创业,创造,创作,从事,存,存在,达到,打破,打听,代,代表
  // ─────────────────────────────────────────────────────────────────────────
  74: {
    id: 74,
    level: 3,
    title: 'Việc nhà & thói quen',
    context: 'Cuối tuần Mai gọi video về nhà cho mẹ, kể chuyện tự lo việc nhà, sự trưởng thành của mình và ước mơ khởi nghiệp.',
    vocabPreview: ['成长', '处理', '创业', '传说', '达到'],
    objectives: [
      "Nắm nhóm từ khóa: 成长 · 处理 · 创业 · 传说 · 达到",
      "Kể/nghe hiểu tình huống Việc nhà & thói quen bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 成长 · 处理 · 创业",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "成长 — trưởng thành, lớn lên",
        explain: "Dùng 成长 trong ngữ cảnh Việc nhà & thói quen để diễn đạt: trưởng thành, lớn lên.",
        examples: [
          { zh: "是的，妈妈。我成长了很多，每天都充满信心。", py: "Shì de, māma. Wǒ chéngzhǎng le hěn duō, měitiān dōu chōngmǎn xìnxīn.", vi: "Vâng mẹ. Con trưởng thành nhiều, mỗi ngày đều tràn đầy tự tin." }
        ] },
      { point: "处理 — xử lý",
        explain: "Dùng 处理 trong ngữ cảnh Việc nhà & thói quen để diễn đạt: xử lý.",
        examples: [
          { zh: "一个人住，家务都自己处理吗？", py: "Yí gè rén zhù, jiāwù dōu zìjǐ chǔlǐ ma?", vi: "Sống một mình, việc nhà tự xử lý hết à?" }
        ] },
      { point: "创业 — lập nghiệp, khởi nghiệp",
        explain: "Dùng 创业 trong ngữ cảnh Việc nhà & thói quen để diễn đạt: lập nghiệp, khởi nghiệp.",
        examples: [
          { zh: "对了，我最近从事一个小项目，想自己创业。", py: "Duìle, wǒ zuìjìn cóngshì yí gè xiǎo xiàngmù, xiǎng zìjǐ chuàngyè.", vi: "À, gần đây con tham gia một dự án nhỏ, muốn tự khởi nghiệp." },
          { zh: "创业不容易，要不断创新和创造。", py: "Chuàngyè bù róngyì, yào búduàn chuàngxīn hé chuàngzào.", vi: "Khởi nghiệp không dễ, phải không ngừng đổi mới và sáng tạo." }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Căn hộ của Mai · Cuối tuần', bg: 'home',
        cast: ['mai', 'mama'],
        text: 'Cuối tuần, Mai gọi video về nhà cho mẹ.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '一个人住，家务都自己处理吗？',
        pinyin: 'Yí gè rén zhù, jiāwù dōu zìjǐ chǔlǐ ma?',
        meaning: 'Sống một mình, việc nhà tự xử lý hết à?',
        expression: 'curious', vocab: ['处理']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '是的，妈妈。我成长了很多，每天都充满信心。',
        pinyin: 'Shì de, māma. Wǒ chéngzhǎng le hěn duō, měitiān dōu chōngmǎn xìnxīn.',
        meaning: 'Vâng mẹ. Con trưởng thành nhiều, mỗi ngày đều tràn đầy tự tin.',
        expression: 'happy', vocab: ['成长', '充满']
      },
      {
        type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '这种好习惯要持续下去。',
        pinyin: 'Zhè zhǒng hǎo xíguàn yào chíxù xiàqù.',
        meaning: 'Thói quen tốt này phải duy trì tiếp nhé.',
        expression: 'happy', vocab: ['持续']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '对了，我最近从事一个小项目，想自己创业。',
        pinyin: 'Duìle, wǒ zuìjìn cóngshì yí gè xiǎo xiàngmù, xiǎng zìjǐ chuàngyè.',
        meaning: 'À, gần đây con tham gia một dự án nhỏ, muốn tự khởi nghiệp.',
        expression: 'focused', vocab: ['从事', '创业']
      },
      {
        type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '创业不容易，要不断创新和创造。',
        pinyin: 'Chuàngyè bù róngyì, yào búduàn chuàngxīn hé chuàngzào.',
        meaning: 'Khởi nghiệp không dễ, phải không ngừng đổi mới và sáng tạo.',
        expression: 'surprise', vocab: ['创新', '创造']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '我知道。我在创作一个新的汉语学习方法，也想打破老办法。',
        pinyin: 'Wǒ zhīdào. Wǒ zài chuàngzuò yí gè xīn de Hànyǔ xuéxí fāngfǎ, yě xiǎng dǎpò lǎo bànfǎ.',
        meaning: 'Con biết. Con đang sáng tạo một phương pháp học tiếng Hán mới, cũng muốn phá bỏ cách cũ.',
        expression: 'focused', vocab: ['创作', '打破']
      },
      {
        type: 'choice', speaker: 'mama', cast: ['mai', 'mama'], bg: 'home',
        scene: '📍 Cuộc gọi video',
        expression: 'curious',
        q: 'Mẹ hỏi mục tiêu. Mai muốn nói "Con muốn đạt được mục tiêu này trong một năm". Cô ấy nên nói thế nào?',
        options: [
          { text: '我想一年内达到这个目标。', pinyin: 'Wǒ xiǎng yì nián nèi dádào zhège mùbiāo.', meaning: 'Con muốn đạt mục tiêu này trong một năm.', correct: true,
            feedback: 'Đúng! 达到 = đạt tới (mục tiêu, mức độ).' },
          { text: '我想一年内打破这个目标。', pinyin: 'Wǒ xiǎng yì nián nèi dǎpò zhège mùbiāo.', meaning: '(không hợp)', correct: false,
            feedback: '打破 = phá vỡ (kỷ lục, im lặng), không dùng cho "đạt mục tiêu".' },
          { text: '我想一年内存在这个目标。', pinyin: 'Wǒ xiǎng yì nián nèi cúnzài zhège mùbiāo.', meaning: '(không hợp)', correct: false,
            feedback: '存在 = tồn tại, không kết hợp được như vậy.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '好。机会一直存在，关键是行动。你先打听一下市场情况。',
        pinyin: 'Hǎo. Jīhuì yìzhí cúnzài, guānjiàn shì xíngdòng. Nǐ xiān dǎting yíxià shìchǎng qíngkuàng.',
        meaning: 'Tốt. Cơ hội luôn tồn tại, quan trọng là hành động. Con dò hỏi tình hình thị trường trước đã.',
        expression: 'focused', vocab: ['存在', '打听']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '好的。我会把一部分钱存起来做本金。',
        pinyin: 'Hǎo de. Wǒ huì bǎ yí bùfen qián cún qǐlái zuò běnjīn.',
        meaning: 'Vâng. Con sẽ để dành một phần tiền làm vốn.',
        expression: 'happy', vocab: ['存']
      },
      {
        type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '我们家有一个传说：努力的人，好运会传到他身边。这个故事会一代一代传播下去。',
        pinyin: 'Wǒmen jiā yǒu yí gè chuánshuō: nǔlì de rén, hǎoyùn huì chuán dào tā shēnbiān. Zhège gùshi huì yí dài yí dài chuánbō xiàqù.',
        meaning: 'Nhà ta có một truyền thuyết: người chăm chỉ, may mắn sẽ truyền đến bên họ. Câu chuyện này sẽ được truyền từ đời này sang đời khác.',
        expression: null, vocab: ['传说', '传', '代', '传播']
      },
      {
        type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '门外传来你弟弟的声音，他也想你了。',
        pinyin: 'Mén wài chuánlái nǐ dìdi de shēngyīn, tā yě xiǎng nǐ le.',
        meaning: 'Ngoài cửa vọng đến tiếng em trai con, nó cũng nhớ con đấy.',
        expression: 'happy', vocab: ['传来']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '替我谢谢大家！这份小礼物代表我的心意。',
        pinyin: 'Tì wǒ xièxie dàjiā! Zhè fèn xiǎo lǐwù dàibiǎo wǒ de xīnyì.',
        meaning: 'Thay con cảm ơn mọi người! Món quà nhỏ này đại diện cho tấm lòng của con.',
        expression: 'happy', vocab: ['代表']
      },
      {
        type: 'checkpoint',
        questions: [
          { q: '"成长" có nghĩa là gì?', options: ['trưởng thành', 'xử lý', 'tồn tại', 'phá vỡ'], answer: 0 },
          { q: 'Từ nào nghĩa là "khởi nghiệp, lập nghiệp"?', options: ['创新', '创业', '创作', '创造'], answer: 1 },
          { q: '"达到目标" có nghĩa là gì?', options: ['phá vỡ mục tiêu', 'đạt được mục tiêu', 'từ bỏ mục tiêu', 'dò hỏi mục tiêu'], answer: 1 }
        ]
      }
    ],
    vocab: [
      { h: '成长', p: 'chéng zhǎng', v: 'trưởng thành, lớn lên', e: 'to mature' },
      { h: '持续', p: 'chí xù', v: 'tiếp tục, duy trì', e: 'to continue' },
      { h: '充满', p: 'chōng mǎn', v: 'tràn đầy', e: 'full of' },
      { h: '处理', p: 'chǔ lǐ', v: 'xử lý', e: 'to handle' },
      { h: '传', p: 'chuán', v: 'truyền, chuyển', e: 'to pass on' },
      { h: '传播', p: 'chuán bō', v: 'truyền bá, phổ biến', e: 'to disseminate' },
      { h: '传来', p: 'chuán lái', v: 'truyền đến', e: 'to come through' },
      { h: '传说', p: 'chuán shuō', v: 'truyền thuyết', e: 'legend' },
      { h: '创新', p: 'chuàng xīn', v: 'sáng tạo, đổi mới', e: 'to bring forth new ideas' },
      { h: '创业', p: 'chuàng yè', v: 'lập nghiệp, khởi nghiệp', e: 'to begin an undertaking' },
      { h: '创造', p: 'chuàng zào', v: 'sáng tạo, tạo ra', e: 'to create' },
      { h: '创作', p: 'chuàng zuò', v: 'sáng tác', e: 'to create' },
      { h: '从事', p: 'cóng shì', v: 'từ sự, tham gia', e: 'to go for' },
      { h: '存', p: 'cún', v: 'tồn tại, lưu trữ', e: 'to exist' },
      { h: '存在', p: 'cún zài', v: 'tồn tại', e: 'to exist' },
      { h: '达到', p: 'dá dào', v: 'đạt được', e: 'to reach' },
      { h: '打破', p: 'dǎ pò', v: 'phá vỡ', e: 'to break' },
      { h: '打听', p: 'dǎ ting', v: 'hỏi thăm, dò hỏi', e: 'to ask about' },
      { h: '代', p: 'dài', v: 'thế hệ, thay thế', e: 'to substitute' },
      { h: '代表', p: 'dài biǎo', v: 'đại diện', e: 'representative' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '这种好习惯要持续下去', options: ['这种好习惯要持续下去','这个坏习惯要改掉','这种习惯不太好'], answer: '这种好习惯要持续下去', py: 'Zhè zhǒng hǎo xíguàn yào chíxù xiàqù', explain: '听 持续 = duy trì.' },
        { type: 'fill', sentence: '家务我自己___。', options: ['处理', '充满', '传播'], answer: '处理' },
        { type: 'fill', sentence: '我___了很多，更成熟了。', options: ['成长', '打破', '存'], answer: '成长' },
        { type: 'fill', sentence: '心里___了信心。', options: ['充满', '处理', '代表'], answer: '充满' },
        { type: 'fill', sentence: '好习惯要___下去。', options: ['持续', '打听', '存在'], answer: '持续' },
        { type: 'fill', sentence: '我想自己___。', options: ['创业', '传来', '充满'], answer: '创业' }
      ],
      normal: [
        { type: 'listen', audio: '我想自己创业', options: ['我想自己创业','我想出去旅游','我想找份工作'], answer: '我想自己创业', py: 'Wǒ xiǎng zìjǐ chuàngyè', explain: '听 创业 = khởi nghiệp.' },
        { type: 'dictation', audio: '我成长了很多', answer: '我成长了很多', hint: 'Con trưởng thành nhiều.', py: 'Wǒ chéngzhǎng le hěn duō', explain: '成长 = trưởng thành.' },
        { type: 'fill', sentence: '机会一直___。', options: ['存在', '处理', '传播'], answer: '存在' },
        { type: 'fill', sentence: '我们要不断___。', options: ['创新', '打听', '充满'], answer: '创新' },
        { type: 'fill', sentence: '请你帮我___一下消息。', options: ['打听', '成长', '持续'], answer: '打听' },
        { type: 'fill', sentence: '这个故事一代代___。', options: ['传播', '处理', '存'], answer: '传播' },
        { type: 'fill', sentence: '一年内我要___目标。', options: ['达到', '打破', '从事'], answer: '达到' },
        { type: 'order', words: ['我', '想', '创业', '自己'], answer: '我想自己创业' },
        { type: 'order', words: ['传说', '一个', '有', '我们家'], answer: '我们家有一个传说' }
      ],
      hard: [
        { type: 'fill', sentence: '他在___一首新歌。', options: ['创作', '充满', '打听'], answer: '创作' },
        { type: 'fill', sentence: '这份礼物___我的心意。', options: ['代表', '处理', '存在'], answer: '代表' },
        { type: 'fill', sentence: '他___教育工作。', options: ['从事', '传来', '充满'], answer: '从事' },
        { type: 'fill', sentence: '他想___世界纪录。', options: ['打破', '持续', '创业'], answer: '打破' },
        { type: 'translate', prompt: 'Cơ hội luôn tồn tại, quan trọng là hành động.', answer: '机会一直存在，关键是行动。' },
        { type: 'translate', prompt: 'Con để dành một phần tiền làm vốn.', answer: '我把一部分钱存起来做本金。' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 75: Đi lại trong thành phố — 20 từ
  // 带动,带领,到达,到底,得分,等待,调,调查,调整,订,断,对待,发表,发出,发动,发明,发生,发送,发言,发展
  // ─────────────────────────────────────────────────────────────────────────
  75: {
    id: 75,
    level: 3,
    title: 'Đi lại trong thành phố',
    context: 'Mai và Tiểu Mỹ bắt xe đến một hội chợ công nghệ ở trung tâm. Trên đường có chút trục trặc, hai bạn phải điều chỉnh lộ trình.',
    vocabPreview: ['到达', '等待', '调整', '发生', '发展'],
    objectives: [
      "Nắm nhóm từ khóa: 到达 · 等待 · 调整 · 发生 · 发展",
      "Kể/nghe hiểu tình huống Đi lại trong thành phố bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 到达 · 等待 · 调整",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "到达 — đến nơi, tới",
        explain: "Dùng 到达 trong ngữ cảnh Đi lại trong thành phố để diễn đạt: đến nơi, tới.",
        examples: [
          { zh: "我查一下地图。我们要调整路线，这班车不直接到达。", py: "Wǒ chá yíxià dìtú. Wǒmen yào tiáozhěng lùxiàn, zhè bān chē bù zhíjiē dàodá.", vi: "Để tớ xem bản đồ. Phải điều chỉnh lộ trình, xe này không đến thẳng nơi đó." },
          { zh: "我们打车的话，会更快到达。", py: "Wǒmen dǎchē dehuà, huì gèng kuài dàodá.", vi: "Nếu gọi taxi thì sẽ đến nhanh hơn." }
        ] },
      { point: "等待 — chờ đợi",
        explain: "Dùng 等待 trong ngữ cảnh Đi lại trong thành phố để diễn đạt: chờ đợi.",
        examples: [
          { zh: "那我们在这儿等待下一班，别着急。", py: "Nà wǒmen zài zhèr děngdài xià yì bān, bié zháojí.", vi: "Vậy mình đợi chuyến sau ở đây, đừng vội." }
        ] },
      { point: "调整 — điều chỉnh",
        explain: "Dùng 调整 trong ngữ cảnh Đi lại trong thành phố để diễn đạt: điều chỉnh.",
        examples: [
          { zh: "我查一下地图。我们要调整路线，这班车不直接到达。", py: "Wǒ chá yíxià dìtú. Wǒmen yào tiáozhěng lùxiàn, zhè bān chē bù zhíjiē dàodá.", vi: "Để tớ xem bản đồ. Phải điều chỉnh lộ trình, xe này không đến thẳng nơi đó." }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Trạm xe trong thành phố · Buổi sáng', bg: 'street',
        cast: ['mai', 'xiaomei'],
        text: 'Mai và Tiểu Mỹ bắt xe đến một hội chợ công nghệ ở trung tâm thành phố.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我们到底在哪个站下车？',
        pinyin: 'Wǒmen dàodǐ zài nǎge zhàn xià chē?',
        meaning: 'Rốt cuộc chúng ta xuống ở trạm nào?',
        expression: 'curious', vocab: ['到底']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我查一下地图。我们要调整路线，这班车不直接到达。',
        pinyin: 'Wǒ chá yíxià dìtú. Wǒmen yào tiáozhěng lùxiàn, zhè bān chē bù zhíjiē dàodá.',
        meaning: 'Để tớ xem bản đồ. Phải điều chỉnh lộ trình, xe này không đến thẳng nơi đó.',
        expression: 'focused', vocab: ['调整', '到达']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '那我们在这儿等待下一班，别着急。',
        pinyin: 'Nà wǒmen zài zhèr děngdài xià yì bān, bié zháojí.',
        meaning: 'Vậy mình đợi chuyến sau ở đây, đừng vội.',
        expression: null, vocab: ['等待']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好。我先给主办方发送一条消息。手机刚发出了提醒——活动发生了变化，开始时间提前了！',
        pinyin: 'Hǎo. Wǒ xiān gěi zhǔbànfāng fāsòng yì tiáo xiāoxi. Shǒujī gāng fāchū le tíxǐng—huódòng fāshēng le biànhuà, kāishǐ shíjiān tíqián le!',
        meaning: 'Được. Tớ gửi cho ban tổ chức một tin nhắn trước. Điện thoại vừa phát ra nhắc nhở — sự kiện có thay đổi, giờ bắt đầu sớm hơn!',
        expression: 'surprise', vocab: ['发送', '发出', '发生']
      },
      {
        type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'street',
        scene: '📍 Trạm xe',
        expression: 'surprise',
        q: 'Cần đến nơi nhanh. Tiểu Mỹ muốn nói "Nếu gọi taxi thì sẽ đến nơi nhanh hơn". Cô ấy nên nói thế nào?',
        options: [
          { text: '我们打车的话，会更快到达。', pinyin: 'Wǒmen dǎchē dehuà, huì gèng kuài dàodá.', meaning: 'Nếu gọi taxi thì sẽ đến nhanh hơn.', correct: true,
            feedback: 'Đúng! 到达 = đến nơi (tới đích).' },
          { text: '我们打车的话，会更快发动。', pinyin: 'Wǒmen dǎchē dehuà, huì gèng kuài fādòng.', meaning: '(không hợp)', correct: false,
            feedback: '发动 = phát động/khởi động (máy móc, phong trào), không dùng "đến nơi".' },
          { text: '我们打车的话，会更快得分。', pinyin: 'Wǒmen dǎchē dehuà, huì gèng kuài défēn.', meaning: '(không hợp)', correct: false,
            feedback: '得分 = ghi điểm (thể thao, trò chơi), sai ngữ cảnh.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好，我马上用手机订一辆车。',
        pinyin: 'Hǎo, wǒ mǎshàng yòng shǒujī dìng yí liàng chē.',
        meaning: 'Được, tớ đặt xe ngay bằng điện thoại.',
        expression: 'focused', vocab: ['订']
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Hội chợ công nghệ', bg: 'office',
        cast: ['mai', 'xiaomei', 'laoli'],
        text: 'Đến nơi, một diễn giả quen thuộc đang phát biểu trên sân khấu — chính là thầy Lý.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '科技的发展带动了城市的变化。今天我要发表一个新发明。',
        pinyin: 'Kējì de fāzhǎn dàidòng le chéngshì de biànhuà. Jīntiān wǒ yào fābiǎo yí gè xīn fāmíng.',
        meaning: 'Sự phát triển công nghệ thúc đẩy thành phố thay đổi. Hôm nay tôi sẽ công bố một phát minh mới.',
        expression: 'focused', vocab: ['发展', '带动', '发表', '发明']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '老师也来了！我们一起调查过这个项目。',
        pinyin: 'Lǎoshī yě lái le! Wǒmen yìqǐ diàochá guò zhège xiàngmù.',
        meaning: 'Thầy cũng đến! Chúng em từng cùng điều tra dự án này.',
        expression: 'surprise', vocab: ['调查']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'],
        text: '等下我想上台发言，你带领大家鼓掌好吗？网络刚才断了一下，现在又好了。',
        pinyin: 'Děng xià wǒ xiǎng shàng tái fāyán, nǐ dàilǐng dàjiā gǔzhǎng hǎo ma? Wǎngluò gāngcái duàn le yíxià, xiànzài yòu hǎo le.',
        meaning: 'Lát nữa tớ muốn lên phát biểu, cậu dẫn mọi người vỗ tay nhé? Mạng vừa nãy đứt một lúc, giờ lại ổn rồi.',
        expression: 'happy', vocab: ['发言', '带领', '断']
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '无论结果如何，都要认真对待每一次机会。需要时也可以调一些资料来看。',
        pinyin: 'Wúlùn jiéguǒ rúhé, dōu yào rènzhēn duìdài měi yí cì jīhuì. Xūyào shí yě kěyǐ diào yìxiē zīliào lái kàn.',
        meaning: 'Dù kết quả thế nào, đều phải nghiêm túc đối đãi mỗi cơ hội. Khi cần cũng có thể điều/lấy một số tài liệu ra xem.',
        expression: null, vocab: ['对待', '调']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '比赛环节我们队得分最高，这是大家共同发动的努力！',
        pinyin: 'Bǐsài huánjié wǒmen duì défēn zuìgāo, zhè shì dàjiā gòngtóng fādòng de nǔlì!',
        meaning: 'Phần thi đội mình ghi điểm cao nhất, đây là nỗ lực mà mọi người cùng phát động!',
        expression: 'happy', vocab: ['得分', '发动']
      },
      {
        type: 'checkpoint',
        questions: [
          { q: '"到达" có nghĩa là gì?', options: ['xuất phát', 'đến nơi', 'chờ đợi', 'điều chỉnh'], answer: 1 },
          { q: 'Từ nào nghĩa là "điều chỉnh"?', options: ['调查', '调整', '发言', '带动'], answer: 1 },
          { q: '"发生" có nghĩa là gì?', options: ['xảy ra', 'phát biểu', 'ghi điểm', 'đặt trước'], answer: 0 }
        ]
      }
    ],
    vocab: [
      { h: '带动', p: 'dài dòng', v: 'thúc đẩy, dẫn dắt', e: 'to spur' },
      { h: '带领', p: 'dài lǐng', v: 'dẫn dắt, lãnh đạo', e: 'to guide' },
      { h: '到达', p: 'dào dá', v: 'đến nơi, tới', e: 'to reach' },
      { h: '到底', p: 'dào dǐ', v: 'rốt cuộc, đến cùng', e: 'finally' },
      { h: '得分', p: 'dé fēn', v: 'ghi điểm', e: 'to score' },
      { h: '等待', p: 'děng dài', v: 'chờ đợi', e: 'to wait' },
      { h: '调', p: 'diào', v: 'điều chỉnh, điều phối', e: 'to transfer' },
      { h: '调查', p: 'diào chá', v: 'điều tra', e: 'investigation' },
      { h: '调整', p: 'tiáo zhěng', v: 'điều chỉnh', e: 'to adjust' },
      { h: '订', p: 'dìng', v: 'đặt trước, ký kết', e: 'to agree' },
      { h: '断', p: 'duàn', v: 'đứt, gãy, ngừng', e: 'to break' },
      { h: '对待', p: 'duì dài', v: 'đối xử, đối đãi', e: 'to treat' },
      { h: '发表', p: 'fā biǎo', v: 'phát biểu, công bố', e: 'to issue' },
      { h: '发出', p: 'fā chū', v: 'phát ra', e: 'to issue (an order, decree etc)' },
      { h: '发动', p: 'fā dòng', v: 'phát động, khởi động', e: 'to start' },
      { h: '发明', p: 'fā míng', v: 'phát minh', e: 'to invent' },
      { h: '发生', p: 'fā shēng', v: 'xảy ra, phát sinh', e: 'to happen' },
      { h: '发送', p: 'fā sòng', v: 'gửi, phát', e: 'to transmit' },
      { h: '发言', p: 'fā yán', v: 'phát biểu', e: 'to make a speech' },
      { h: '发展', p: 'fā zhǎn', v: 'phát triển', e: 'development' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '我们到底在哪个站下车', options: ['我们到底在哪个站下车','我们什么时候上车','这班车开往哪里'], answer: '我们到底在哪个站下车', py: 'Wǒmen dàodǐ zài nǎge zhàn xià chē', explain: '听 到底 = rốt cuộc; 下车 = xuống xe.' },
        { type: 'fill', sentence: '我们___在哪个站下车？', options: ['到底', '发明', '带动'], answer: '到底' },
        { type: 'fill', sentence: '请在这儿___下一班车。', options: ['等待', '发表', '调'], answer: '等待' },
        { type: 'fill', sentence: '这班车不直接___。', options: ['到达', '得分', '断'], answer: '到达' },
        { type: 'fill', sentence: '我给他___一条消息。', options: ['发送', '调查', '对待'], answer: '发送' },
        { type: 'fill', sentence: '我用手机___一辆车。', options: ['订', '发言', '带领'], answer: '订' }
      ],
      normal: [
        { type: 'listen', audio: '我马上用手机订一辆车', options: ['我马上用手机订一辆车','我现在去等公交车','我用手机查一下地图'], answer: '我马上用手机订一辆车', py: 'Wǒ mǎshàng yòng shǒujī dìng yí liàng chē', explain: '听 订 = đặt (xe).' },
        { type: 'dictation', audio: '活动发生了变化', answer: '活动发生了变化', hint: 'Sự kiện có thay đổi.', py: 'Huódòng fāshēng le biànhuà', explain: '发生 = xảy ra.' },
        { type: 'fill', sentence: '我们要___一下路线。', options: ['调整', '发动', '得分'], answer: '调整' },
        { type: 'fill', sentence: '活动___了变化。', options: ['发生', '到达', '订'], answer: '发生' },
        { type: 'fill', sentence: '科技的___很快。', options: ['发展', '等待', '调'], answer: '发展' },
        { type: 'fill', sentence: '我们一起___过这个项目。', options: ['调查', '发表', '带领'], answer: '调查' },
        { type: 'fill', sentence: '老师要上台___。', options: ['发言', '到达', '订'], answer: '发言' },
        { type: 'order', words: ['路线', '调整', '要', '我们'], answer: '我们要调整路线' },
        { type: 'order', words: ['变化', '发生', '了', '活动'], answer: '活动发生了变化' }
      ],
      hard: [
        { type: 'fill', sentence: '科技___了城市的变化。', options: ['带动', '等待', '订'], answer: '带动' },
        { type: 'fill', sentence: '他要___一个新发明。', options: ['发表', '到达', '断'], answer: '发表' },
        { type: 'fill', sentence: '要认真___每一次机会。', options: ['对待', '发送', '调查'], answer: '对待' },
        { type: 'fill', sentence: '请你___大家一起做。', options: ['带领', '得分', '发生'], answer: '带领' },
        { type: 'translate', prompt: 'Rốt cuộc chúng ta xuống ở trạm nào?', answer: '我们到底在哪个站下车？' },
        { type: 'translate', prompt: 'Đội mình ghi điểm cao nhất.', answer: '我们队得分最高。' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 76: Chuyến đi xa (1) — 20 từ
  // 反对,反复,反应,防,防止,访问,放到,飞行,费,分别,分配,分组,否定,否认,付,复印,改进,改造,赶,赶到
  // ─────────────────────────────────────────────────────────────────────────
  76: {
    id: 76,
    level: 3,
    title: 'Chuyến đi xa (1)',
    context: 'Ngày lên đường đã đến. Mẹ tiễn Mai ra sân bay; hai mẹ con làm thủ tục, trả phí và nói lời tạm biệt.',
    vocabPreview: ['飞行', '赶到', '分别', '付', '防止'],
    objectives: [
      "Nắm nhóm từ khóa: 飞行 · 赶到 · 分别 · 付 · 防止",
      "Kể/nghe hiểu tình huống Chuyến đi xa (1) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 飞行 · 赶到 · 分别",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "飞行 — bay, phi hành",
        explain: "Dùng 飞行 trong ngữ cảnh Chuyến đi xa (1) để diễn đạt: bay, phi hành.",
        examples: [
          { zh: "妈妈别担心。飞行时间不长，我到了马上联系您。", py: "Māma bié dānxīn. Fēixíng shíjiān bù cháng, wǒ dào le mǎshàng liánxì nín.", vi: "Mẹ đừng lo. Thời gian bay không dài, con đến nơi sẽ liên lạc ngay." }
        ] },
      { point: "赶到 — kịp đến",
        explain: "Dùng 赶到 trong ngữ cảnh Chuyến đi xa (1) để diễn đạt: kịp đến.",
        examples: [
          { zh: "我不否认有这个可能，但我会早点赶到。", py: "Wǒ bù fǒurèn yǒu zhège kěnéng, dàn wǒ huì zǎodiǎn gǎndào.", vi: "Con không phủ nhận khả năng đó, nhưng con sẽ đến sớm." }
        ] },
      { point: "分别 — chia tay, phân biệt",
        explain: "Dùng 分别 trong ngữ cảnh Chuyến đi xa (1) để diễn đạt: chia tay, phân biệt.",
        examples: [
          { zh: "这么早就要分别了，妈妈有点舍不得。", py: "Zhème zǎo jiù yào fēnbié le, māma yǒudiǎn shěbude.", vi: "Mới đó mà đã phải chia tay, mẹ hơi không nỡ." }
        ] }
    ],
    steps: [
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Sảnh chờ sân bay · Sáng sớm', bg: 'station',
        cast: ['mai', 'mama'],
        text: 'Ngày lên đường đã đến. Mẹ tiễn Mai ra sân bay.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '这么早就要分别了，妈妈有点舍不得。',
        pinyin: 'Zhème zǎo jiù yào fēnbié le, māma yǒudiǎn shěbude.',
        meaning: 'Mới đó mà đã phải chia tay, mẹ hơi không nỡ.',
        expression: 'sad', vocab: ['分别']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '妈妈别担心。飞行时间不长，我到了马上联系您。',
        pinyin: 'Māma bié dānxīn. Fēixíng shíjiān bù cháng, wǒ dào le mǎshàng liánxì nín.',
        meaning: 'Mẹ đừng lo. Thời gian bay không dài, con đến nơi sẽ liên lạc ngay.',
        expression: 'happy', vocab: ['飞行']
      },
      {
        type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '证件复印了吗？要防止丢失。',
        pinyin: 'Zhèngjiàn fùyìn le ma? Yào fángzhǐ diūshī.',
        meaning: 'Giấy tờ photo chưa? Phải đề phòng thất lạc.',
        expression: 'focused', vocab: ['复印', '防止']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '复印好了，我把它们放到包里。还要防一手——多带一份。',
        pinyin: 'Fùyìn hǎo le, wǒ bǎ tāmen fàngdào bāo lǐ. Hái yào fáng yìshǒu—duō dài yí fèn.',
        meaning: 'Photo xong rồi, con để chúng vào túi. Còn đề phòng thêm — mang dư một bản.',
        expression: 'focused', vocab: ['放到', '防']
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Quầy làm thủ tục', bg: 'station',
        cast: ['mai', 'fuwuyuan'],
        text: 'Ở quầy làm thủ tục, một nhân viên hướng dẫn Mai.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '请付一下行李费，然后我帮您分配座位。',
        pinyin: 'Qǐng fù yíxià xíngli fèi, ránhòu wǒ bāng nín fēnpèi zuòwèi.',
        meaning: 'Vui lòng trả phí hành lý, sau đó tôi sắp xếp chỗ ngồi cho bạn.',
        expression: 'focused', vocab: ['付', '费', '分配']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '好的。请问登机的人怎么分组？',
        pinyin: 'Hǎo de. Qǐngwèn dēngjī de rén zěnme fēnzǔ?',
        meaning: 'Vâng. Cho hỏi người lên máy bay chia nhóm thế nào ạ?',
        expression: 'curious', vocab: ['分组']
      },
      {
        type: 'choice', speaker: 'mama', cast: ['mai', 'mama'], bg: 'station',
        scene: '📍 Sảnh chờ sân bay',
        expression: 'curious',
        q: 'Mẹ nghe nói chuyến bay có thể đổi giờ. Mai muốn nói "Con không phủ nhận có khả năng đó, nhưng con sẽ đến sớm". Cô ấy nên nói thế nào?',
        options: [
          { text: '我不否认有这个可能，但我会早点赶到。', pinyin: 'Wǒ bù fǒurèn yǒu zhège kěnéng, dàn wǒ huì zǎodiǎn gǎndào.', meaning: 'Con không phủ nhận khả năng đó, nhưng con sẽ đến sớm.', correct: true,
            feedback: 'Đúng! 否认 = phủ nhận (sự việc); 赶到 = vội đến kịp.' },
          { text: '我不反对有这个可能，但我会早点赶到。', pinyin: 'Wǒ bù fǎnduì yǒu zhège kěnéng, dàn wǒ huì zǎodiǎn gǎndào.', meaning: 'Con không phản đối khả năng đó...', correct: false,
            feedback: '反对 = phản đối (ý kiến, đề xuất); ở đây nói về "thừa nhận khả năng" nên 否认 đúng hơn.' },
          { text: '我不否定有这个可能，但我会早点赶。', pinyin: 'Wǒ bù fǒudìng yǒu zhège kěnéng, dàn wǒ huì zǎodiǎn gǎn.', meaning: '(chưa trọn nghĩa)', correct: false,
            feedback: '否定 thiên về "phủ định (đánh giá, ý nghĩa)"; và 赶 thiếu "到" nên chưa rõ nghĩa "đến kịp".' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '我反复检查过行李，没问题。',
        pinyin: 'Wǒ fǎnfù jiǎnchá guò xíngli, méi wèntí.',
        meaning: 'Con kiểm tra hành lý nhiều lần rồi, không sao đâu.',
        expression: 'focused', vocab: ['反复']
      },
      {
        type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '你弟弟本来反对你走这么远，现在他也支持了，反应很快嘛。',
        pinyin: 'Nǐ dìdi běnlái fǎnduì nǐ zǒu zhème yuǎn, xiànzài tā yě zhīchí le, fǎnyìng hěn kuài ma.',
        meaning: 'Em con vốn phản đối con đi xa thế, giờ nó cũng ủng hộ rồi, phản ứng nhanh ghê.',
        expression: 'happy', vocab: ['反对', '反应']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '哈哈。这次我要去访问那边的大学，顺便改进我的项目。有需要就改造计划，别硬撑。',
        pinyin: 'Hāhā. Zhè cì wǒ yào qù fǎngwèn nàbiān de dàxué, shùnbiàn gǎijìn wǒ de xiàngmù. Yǒu xūyào jiù gǎizào jìhuà, bié yìngchēng.',
        meaning: 'Haha. Lần này con đến thăm trường bên đó, tiện cải tiến dự án của con. Cần thì cải tạo lại kế hoạch, không gồng đâu.',
        expression: 'happy', vocab: ['访问', '改进', '改造']
      },
      {
        type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '好。别否定自己的努力。广播在叫了，快去吧！',
        pinyin: 'Hǎo. Bié fǒudìng zìjǐ de nǔlì. Guǎngbò zài jiào le, kuài qù ba!',
        meaning: 'Được. Đừng phủ định nỗ lực của mình. Loa gọi rồi, mau đi đi!',
        expression: 'focused', vocab: ['否定']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '我得赶了！妈妈，我爱您，再见！',
        pinyin: 'Wǒ děi gǎn le! Māma, wǒ ài nín, zàijiàn!',
        meaning: 'Con phải vội đi đây! Mẹ ơi, con yêu mẹ, tạm biệt!',
        expression: 'happy', vocab: ['赶']
      },
      {
        type: 'checkpoint',
        questions: [
          { q: '"飞行" có nghĩa là gì?', options: ['bay', 'chia tay', 'trả tiền', 'phản đối'], answer: 0 },
          { q: 'Từ nào nghĩa là "phòng ngừa, ngăn chặn"?', options: ['防止', '否认', '分配', '复印'], answer: 0 },
          { q: '"赶到" có nghĩa là gì?', options: ['rời đi', 'đến kịp', 'phỏng vấn', 'phản ứng'], answer: 1 }
        ]
      }
    ],
    vocab: [
      { h: '反对', p: 'fǎn duì', v: 'phản đối', e: 'to oppose' },
      { h: '反复', p: 'fǎn fù', v: 'lặp đi lặp lại', e: 'repeatedly, over and over again' },
      { h: '反应', p: 'fǎn yìng', v: 'phản ứng', e: 'to react' },
      { h: '防', p: 'fáng', v: 'phòng ngừa, đề phòng', e: 'to protect' },
      { h: '防止', p: 'fáng zhǐ', v: 'phòng ngừa, ngăn chặn', e: 'to prevent' },
      { h: '访问', p: 'fǎng wèn', v: 'thăm hỏi, phỏng vấn', e: 'to visit' },
      { h: '放到', p: 'fàng dào', v: 'đặt vào', e: 'Put in' },
      { h: '飞行', p: 'fēi xíng', v: 'bay, phi hành', e: 'to fly' },
      { h: '费', p: 'fèi', v: 'phí, tốn', e: 'fee, cost, expense, to spend' },
      { h: '分别', p: 'fēn bié', v: 'chia tay, phân biệt', e: 'to part' },
      { h: '分配', p: 'fēn pèi', v: 'phân bổ, phân phối', e: 'to distribute' },
      { h: '分组', p: 'fēn zǔ', v: 'chia nhóm', e: 'to divide into groups' },
      { h: '否定', p: 'fǒu dìng', v: 'phủ định, phủ nhận', e: 'to negate' },
      { h: '否认', p: 'fǒu rèn', v: 'phủ nhận', e: 'to declare to be untrue' },
      { h: '付', p: 'fù', v: 'trả (tiền)', e: 'to pay, to hand over' },
      { h: '复印', p: 'fù yìn', v: 'photocopy, sao chép', e: 'to photocopy' },
      { h: '改进', p: 'gǎi jìn', v: 'cải tiến', e: 'to improve' },
      { h: '改造', p: 'gǎi zào', v: 'cải tạo', e: 'to transform' },
      { h: '赶', p: 'gǎn', v: 'đuổi kịp, vội vàng', e: 'to overtake' },
      { h: '赶到', p: 'gǎn dào', v: 'kịp đến', e: 'to hurry (to some place)' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '证件复印了吗', options: ['证件复印了吗','行李准备好了吗','机票买了吗'], answer: '证件复印了吗', py: 'Zhèngjiàn fùyìn le ma', explain: '听 复印 = photo, sao chép.' },
        { type: 'fill', sentence: '___时间不长，很快就到。', options: ['飞行', '分别', '复印'], answer: '飞行' },
        { type: 'fill', sentence: '证件要___一份。', options: ['复印', '反对', '分配'], answer: '复印' },
        { type: 'fill', sentence: '请___一下行李费。', options: ['付', '防', '赶'], answer: '付' },
        { type: 'fill', sentence: '我把文件___包里。', options: ['放到', '反应', '改进'], answer: '放到' },
        { type: 'fill', sentence: '这么早就要___了。', options: ['分别', '飞行', '防止'], answer: '分别' }
      ],
      normal: [
        { type: 'listen', audio: '我反复检查过行李', options: ['我反复检查过行李','我已经付了行李费','我把行李放进包里'], answer: '我反复检查过行李', py: 'Wǒ fǎnfù jiǎnchá guò xíngli', explain: '听 反复 = lặp đi lặp lại.' },
        { type: 'dictation', audio: '请付一下行李费', answer: '请付一下行李费', hint: 'Vui lòng trả phí hành lý.', py: 'Qǐng fù yíxià xíngli fèi', explain: '付 = trả (tiền); 费 = phí.' },
        { type: 'fill', sentence: '要___证件丢失。', options: ['防止', '反对', '付'], answer: '防止' },
        { type: 'fill', sentence: '我帮您___座位。', options: ['分配', '反复', '改造'], answer: '分配' },
        { type: 'fill', sentence: '登机的人要___。', options: ['分组', '访问', '赶'], answer: '分组' },
        { type: 'fill', sentence: '我___检查过行李。', options: ['反复', '分别', '复印'], answer: '反复' },
        { type: 'fill', sentence: '他___你去那么远。', options: ['反对', '放到', '防'], answer: '反对' },
        { type: 'order', words: ['行李费', '付', '请', '一下'], answer: '请付一下行李费' },
        { type: 'order', words: ['丢失', '防止', '要', '证件'], answer: '要防止证件丢失' }
      ],
      hard: [
        { type: 'fill', sentence: '我要去___那边的大学。', options: ['访问', '分配', '付'], answer: '访问' },
        { type: 'fill', sentence: '顺便___我的项目。', options: ['改进', '分别', '防止'], answer: '改进' },
        { type: 'fill', sentence: '别___自己的努力。', options: ['否定', '分组', '放到'], answer: '否定' },
        { type: 'fill', sentence: '广播在叫，我得___了。', options: ['赶', '反复', '复印'], answer: '赶' },
        { type: 'translate', prompt: 'Con kiểm tra hành lý nhiều lần rồi.', answer: '我反复检查过行李。' },
        { type: 'translate', prompt: 'Con không phủ nhận có khả năng đó.', answer: '我不否认有这个可能。' }
      ]
    }
  }

});

// ───────────────────────────────────────────────────────
// BATCH 2 — Bài 77-81 (Du học: đến nơi → cuối tuần → cửa hàng → nhà hàng → việc làm thêm)
// Tiếp nối HSK2 Bài 31: Mai & Tiểu Mỹ cùng đỗ chương trình trao đổi → cùng đi du học.
// ───────────────────────────────────────────────────────
Object.assign(COURSE_DATA, {

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 77: Chuyến đi xa (2) — 20 từ
  // 敢,感冒,感受,干吗,告别,公布,共有,挂,关系,关注,观察,观看,管,管理,广播,规定,害怕,合,合格,合作
  // ─────────────────────────────────────────────────────────────────────────
  77: {
    id: 77, level: 3,
    title: 'Chuyến đi xa (2)',
    context: 'Mai và Tiểu Mỹ đã đáp xuống thành phố mới. Sau khi báo bình an cho mẹ, hai bạn dự buổi định hướng của chương trình.',
    vocabPreview: ['感受', '观察', '规定', '合作', '关注'],
    objectives: [
      "Nắm nhóm từ khóa: 感受 · 观察 · 规定 · 合作 · 关注",
      "Kể/nghe hiểu tình huống Chuyến đi xa (2) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 感受 · 观察 · 规定",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "感受 — cảm nhận",
        explain: "Dùng 感受 trong ngữ cảnh Chuyến đi xa (2) để diễn đạt: cảm nhận.",
        examples: [
          { zh: "好的！和大家的关系越来越近，这次经历让我很有感受。", py: "Hǎo de! Hé dàjiā de guānxi yuèláiyuè jìn, zhè cì jīnglì ràng wǒ hěn yǒu gǎnshòu.", vi: "Vâng! Quan hệ với mọi người ngày càng gần, trải nghiệm này khiến em cảm nhận rất nhiều." }
        ] },
      { point: "观察 — quan sát",
        explain: "Dùng 观察 trong ngữ cảnh Chuyến đi xa (2) để diễn đạt: quan sát.",
        examples: [
          { zh: "好的，我会仔细观察，多多关注通知。", py: "Hǎo de, wǒ huì zǐxì guānchá, duōduō guānzhù tōngzhī.", vi: "Vâng, em sẽ quan sát kỹ, chú ý nhiều đến thông báo." }
        ] },
      { point: "规定 — quy định",
        explain: "Dùng 规定 trong ngữ cảnh Chuyến đi xa (2) để diễn đạt: quy định.",
        examples: [
          { zh: "请问这里的规定严不严？谁来管理我们的生活？", py: "Qǐngwèn zhèlǐ de guīdìng yán bu yán? Shéi lái guǎnlǐ wǒmen de shēnghuó?", vi: "Cho hỏi quy định ở đây có nghiêm không ạ? Ai quản lý sinh hoạt của tụi em?" }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Sân bay thành phố mới · Trưa', bg: 'station', cast: ['mai', 'xiaomei'],
        text: 'Sau chuyến bay dài, Mai và Tiểu Mỹ đã hạ cánh. Mai gọi điện báo mẹ.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '妈妈，我们到了！刚才在飞机上有点感冒，现在好多了。',
        pinyin: 'Māma, wǒmen dào le! Gāngcái zài fēijī shàng yǒudiǎn gǎnmào, xiànzài hǎo duō le.',
        meaning: 'Mẹ ơi, tụi con đến rồi! Lúc nãy trên máy bay hơi cảm, giờ đỡ nhiều rồi.', expression: 'happy', vocab: ['感冒'] },
      { type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '到了就好。妈妈先挂了，跟你告别啦，安顿好记得视频。',
        pinyin: 'Dào le jiù hǎo. Māma xiān guà le, gēn nǐ gàobié la, āndùn hǎo jìde shìpín.',
        meaning: 'Đến rồi là tốt. Mẹ gác máy trước nhé, tạm biệt con, ổn định xong nhớ gọi video.', expression: 'happy', vocab: ['挂', '告别'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '好！您放心，我什么都敢试，会照顾好自己的。',
        pinyin: 'Hǎo! Nín fàngxīn, wǒ shénme dōu gǎn shì, huì zhàogù hǎo zìjǐ de.',
        meaning: 'Vâng! Mẹ yên tâm, con cái gì cũng dám thử, sẽ tự lo cho mình tốt.', expression: 'happy', vocab: ['敢'] },
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Văn phòng chương trình · Chiều', bg: 'office', cast: ['mai', 'xiaomei', 'fuwuyuan'],
        text: 'Buổi định hướng bắt đầu. Một nhân viên tiếp đón các bạn.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'xiaomei', 'fuwuyuan'],
        text: '欢迎！这次项目共有五十名学生。请大家先观看一段介绍视频。',
        pinyin: 'Huānyíng! Zhè cì xiàngmù gòngyǒu wǔshí míng xuéshēng. Qǐng dàjiā xiān guānkàn yí duàn jièshào shìpín.',
        meaning: 'Chào mừng! Chương trình lần này có tổng cộng 50 sinh viên. Mời mọi người xem một đoạn video giới thiệu trước.', expression: 'focused', vocab: ['共有', '观看'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'fuwuyuan'],
        text: '请问这里的规定严不严？谁来管理我们的生活？',
        pinyin: 'Qǐngwèn zhèlǐ de guīdìng yán bu yán? Shéi lái guǎnlǐ wǒmen de shēnghuó?',
        meaning: 'Cho hỏi quy định ở đây có nghiêm không ạ? Ai quản lý sinh hoạt của tụi em?', expression: 'curious', vocab: ['规定', '管理'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'xiaomei', 'fuwuyuan'],
        text: '有专门的老师管你们。每天的安排会通过广播公布。',
        pinyin: 'Yǒu zhuānmén de lǎoshī guǎn nǐmen. Měitiān de ānpái huì tōngguò guǎngbō gōngbù.',
        meaning: 'Có giáo viên chuyên trách quản lý các em. Lịch mỗi ngày sẽ được công bố qua loa phát thanh.', expression: null, vocab: ['管', '广播', '公布'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'fuwuyuan'],
        text: '好的，我会仔细观察，多多关注通知。',
        pinyin: 'Hǎo de, wǒ huì zǐxì guānchá, duōduō guānzhù tōngzhī.',
        meaning: 'Vâng, em sẽ quan sát kỹ, chú ý nhiều đến thông báo.', expression: 'focused', vocab: ['观察', '关注'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'office', scene: '📍 Văn phòng chương trình', expression: 'happy',
        q: 'Mai gặp một bạn học mới, muốn nói "Mong được hợp tác vui vẻ với cậu". Cô ấy nên nói thế nào?',
        options: [
          { text: '希望和你合作愉快。', pinyin: 'Xīwàng hé nǐ hézuò yúkuài.', meaning: 'Mong được hợp tác vui vẻ với cậu.', correct: true, feedback: 'Đúng! 合作 = hợp tác.' },
          { text: '希望和你合格愉快。', pinyin: 'Xīwàng hé nǐ hégé yúkuài.', meaning: '(không hợp)', correct: false, feedback: '合格 = đạt tiêu chuẩn/đủ điều kiện, không dùng để nói "hợp tác".' },
          { text: '希望和你害怕愉快。', pinyin: 'Xīwàng hé nǐ hàipà yúkuài.', meaning: '(vô nghĩa)', correct: false, feedback: '害怕 = sợ hãi, hoàn toàn sai ngữ cảnh.' }
        ] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你看，我们一点都不害怕！考试合格后就能拿证书。',
        pinyin: 'Nǐ kàn, wǒmen yìdiǎn dōu bú hàipà! Kǎoshì hégé hòu jiù néng ná zhèngshū.',
        meaning: 'Cậu xem, tụi mình chẳng sợ gì cả! Thi đạt là lấy được chứng chỉ.', expression: 'happy', vocab: ['害怕', '合格'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'xiaomei', 'fuwuyuan'],
        text: '你们干吗还站着？快来登记，看看资料合不合要求。',
        pinyin: 'Nǐmen gànmá hái zhàn zhe? Kuài lái dēngjì, kànkan zīliào hé bu hé yāoqiú.',
        meaning: 'Các em làm gì mà còn đứng đó? Mau đến đăng ký, xem hồ sơ có hợp yêu cầu không.', expression: null, vocab: ['干吗', '合'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好的！和大家的关系越来越近，这次经历让我很有感受。',
        pinyin: 'Hǎo de! Hé dàjiā de guānxi yuèláiyuè jìn, zhè cì jīnglì ràng wǒ hěn yǒu gǎnshòu.',
        meaning: 'Vâng! Quan hệ với mọi người ngày càng gần, trải nghiệm này khiến em cảm nhận rất nhiều.', expression: 'happy', vocab: ['关系', '感受'] },
      { type: 'checkpoint', questions: [
        { q: '"感冒" có nghĩa là gì?', options: ['cảm cúm', 'hợp tác', 'quy định', 'quan sát'], answer: 0 },
        { q: 'Từ nào nghĩa là "hợp tác"?', options: ['合格', '合作', '告别', '管理'], answer: 1 },
        { q: '"观察" có nghĩa là gì?', options: ['phát thanh', 'quan sát', 'sợ hãi', 'quản lý'], answer: 1 }
      ] }
    ],
    vocab: [
      { h: '敢', p: 'gǎn', v: 'dám', e: 'to dare' },
      { h: '感冒', p: 'gǎn mào', v: 'cảm cúm, cảm lạnh', e: 'to catch cold' },
      { h: '感受', p: 'gǎn shòu', v: 'cảm nhận', e: 'to sense' },
      { h: '干吗', p: 'gàn má', v: 'làm gì vậy', e: 'see 干嘛' },
      { h: '告别', p: 'gào bié', v: 'từ biệt, chia tay', e: 'to leave' },
      { h: '公布', p: 'gōng bù', v: 'công bố, công khai', e: 'to announce' },
      { h: '共有', p: 'gòng yǒu', v: 'có cộng lại', e: 'to have altogether' },
      { h: '挂', p: 'guà', v: 'treo, móc; gác máy', e: 'to hang or suspend (from a hook etc)' },
      { h: '关系', p: 'guān xi', v: 'quan hệ', e: 'relation' },
      { h: '关注', p: 'guān zhù', v: 'quan tâm, chú ý', e: 'to pay attention to' },
      { h: '观察', p: 'guān chá', v: 'quan sát', e: 'to observe' },
      { h: '观看', p: 'guān kàn', v: 'xem, theo dõi', e: 'to watch' },
      { h: '管', p: 'guǎn', v: 'quản lý, ống', e: 'to manage, pipe, tube' },
      { h: '管理', p: 'guǎn lǐ', v: 'quản lý', e: 'to supervise' },
      { h: '广播', p: 'guǎng bō', v: 'phát thanh, phát sóng', e: 'broadcast' },
      { h: '规定', p: 'guī dìng', v: 'quy định', e: 'to stipulate' },
      { h: '害怕', p: 'hài pà', v: 'sợ hãi', e: 'to be afraid' },
      { h: '合', p: 'gě', v: 'hợp, phù hợp', e: '100 ml' },
      { h: '合格', p: 'hé gé', v: 'đạt tiêu chuẩn, đủ điều kiện', e: 'to meet the standard required' },
      { h: '合作', p: 'hé zuò', v: 'hợp tác', e: 'to cooperate' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '我们一点都不害怕', options: ['我们一点都不害怕','我们有一点紧张','我们都很高兴'], answer: '我们一点都不害怕', py: 'Wǒmen yìdiǎn dōu bú hàipà', explain: '听 害怕 = sợ; 不害怕 = không sợ.' },
        { type: 'fill', sentence: '我有点___，要多喝水。', options: ['感冒', '合作', '广播'], answer: '感冒' },
        { type: 'fill', sentence: '妈妈先___电话了。', options: ['挂', '敢', '管'], answer: '挂' },
        { type: 'fill', sentence: '这次项目___五十名学生。', options: ['共有', '害怕', '告别'], answer: '共有' },
        { type: 'fill', sentence: '请大家___介绍视频。', options: ['观看', '合格', '管理'], answer: '观看' },
        { type: 'fill', sentence: '这里的___很严格。', options: ['规定', '感受', '关系'], answer: '规定' }
      ],
      normal: [
        { type: 'listen', audio: '我会仔细观察', options: ['我会仔细观察','我会好好休息','我会努力学习'], answer: '我会仔细观察', py: 'Wǒ huì zǐxì guānchá', explain: '听 观察 = quan sát.' },
        { type: 'dictation', audio: '谁来管理我们', answer: '谁来管理我们', hint: 'Ai quản lý chúng em?', py: 'Shéi lái guǎnlǐ wǒmen', explain: '管理 = quản lý.' },
        { type: 'fill', sentence: '谁来___我们的生活？', options: ['管理', '观看', '告别'], answer: '管理' },
        { type: 'fill', sentence: '安排会通过广播___。', options: ['公布', '合作', '害怕'], answer: '公布' },
        { type: 'fill', sentence: '我会仔细___四周。', options: ['观察', '规定', '挂'], answer: '观察' },
        { type: 'fill', sentence: '希望和你___愉快。', options: ['合作', '合格', '感冒'], answer: '合作' },
        { type: 'fill', sentence: '我什么都___试。', options: ['敢', '管', '合'], answer: '敢' },
        { type: 'order', words: ['我', '会', '关注', '通知'], answer: '我会关注通知' },
        { type: 'order', words: ['一点', '不', '害怕', '我们', '都'], answer: '我们一点都不害怕' }
      ],
      hard: [
        { type: 'fill', sentence: '这次___让我很有感受。', options: ['经历', '广播', '规定'], answer: '经历' },
        { type: 'fill', sentence: '考试___后能拿证书。', options: ['合格', '合作', '观看'], answer: '合格' },
        { type: 'fill', sentence: '你们___还站着？', options: ['干吗', '告别', '共有'], answer: '干吗' },
        { type: 'fill', sentence: '和大家的___越来越近。', options: ['关系', '感冒', '管理'], answer: '关系' },
        { type: 'translate', prompt: 'Mẹ gác máy trước nhé, tạm biệt con.', answer: '妈妈先挂了，跟你告别啦。' },
        { type: 'translate', prompt: 'Em sẽ quan sát kỹ, chú ý đến thông báo.', answer: '我会仔细观察，关注通知。' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 78: Mua sắm thường ngày — 20 từ
  // 化,划船,环,计算,记录,纪录,纪念,继续,加工,加快,加强,架,坚持,建,建成,建立,建设,建议,交费,交流
  // ─────────────────────────────────────────────────────────────────────────
  78: {
    id: 78, level: 3,
    title: 'Mua sắm thường ngày',
    context: 'Cuối tuần, Mai và Tiểu Mỹ tham gia hoạt động tình nguyện ở công viên ven hồ, rồi ghé cửa hàng mua đồ lưu niệm.',
    vocabPreview: ['建设', '划船', '纪念', '建议', '交流'],
    objectives: [
      "Nắm nhóm từ khóa: 建设 · 划船 · 纪念 · 建议 · 交流",
      "Kể/nghe hiểu tình huống Mua sắm thường ngày bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 建设 · 划船 · 纪念",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "建设 — xây dựng",
        explain: "Dùng 建设 trong ngữ cảnh Mua sắm thường ngày để diễn đạt: xây dựng.",
        examples: [
          { zh: "我们建立了一个志愿小组。听说大家在建一个新公园，一起来建设吧！", py: "Wǒmen jiànlì le yí gè zhìyuàn xiǎozǔ. Tīngshuō dàjiā zài jiàn yí gè xīn gōngyuán, yìqǐ lái jiànshè ba!", vi: "Tụi mình đã lập một nhóm tình nguyện. Nghe nói mọi người đang xây một công viên mới, cùng góp sức xây dựng nào!" }
        ] },
      { point: "划船 — chèo thuyền",
        explain: "Dùng 划船 trong ngữ cảnh Mua sắm thường ngày để diễn đạt: chèo thuyền.",
        examples: [
          { zh: "好啊。我们先去划船，再帮忙美化这一片。", py: "Hǎo a. Wǒmen xiān qù huáchuán, zài bāngmáng měihuà zhè yí piàn.", vi: "Được đó. Mình đi chèo thuyền trước, rồi giúp làm đẹp khu này." }
        ] },
      { point: "纪念 — kỷ niệm, tưởng niệm",
        explain: "Dùng 纪念 trong ngữ cảnh Mua sắm thường ngày để diễn đạt: kỷ niệm, tưởng niệm.",
        examples: [
          { zh: "这家店可以帮你加工木头，做成纪念品。", py: "Zhè jiā diàn kěyǐ bāng nǐ jiāgōng mùtou, zuòchéng jìniànpǐn.", vi: "Cửa hàng này có thể gia công gỗ giúp bạn, làm thành đồ lưu niệm." },
          { zh: "我想买一个手环，留作纪念。我计算一下要多少钱。", py: "Wǒ xiǎng mǎi yí gè shǒuhuán, liú zuò jìniàn. Wǒ jìsuàn yíxià yào duōshao qián.", vi: "Tớ muốn mua một chiếc vòng tay làm kỷ niệm. Để tớ tính xem hết bao nhiêu tiền." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Công viên ven hồ · Sáng cuối tuần', bg: 'park', cast: ['mai', 'xiaomei'],
        text: 'Cuối tuần, Mai và Tiểu Mỹ tham gia hoạt động tình nguyện ở công viên ven hồ.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我们建立了一个志愿小组。听说大家在建一个新公园，一起来建设吧！',
        pinyin: 'Wǒmen jiànlì le yí gè zhìyuàn xiǎozǔ. Tīngshuō dàjiā zài jiàn yí gè xīn gōngyuán, yìqǐ lái jiànshè ba!',
        meaning: 'Tụi mình đã lập một nhóm tình nguyện. Nghe nói mọi người đang xây một công viên mới, cùng góp sức xây dựng nào!', expression: 'happy', vocab: ['建立', '建', '建设'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好啊。我们先去划船，再帮忙美化这一片。',
        pinyin: 'Hǎo a. Wǒmen xiān qù huáchuán, zài bāngmáng měihuà zhè yí piàn.',
        meaning: 'Được đó. Mình đi chèo thuyền trước, rồi giúp làm đẹp khu này.', expression: 'happy', vocab: ['划船', '化'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这个项目已经建成一半了，我们要加快进度，加强合作。',
        pinyin: 'Zhège xiàngmù yǐjīng jiànchéng yíbàn le, wǒmen yào jiākuài jìndù, jiāqiáng hézuò.',
        meaning: 'Dự án này đã hoàn thành một nửa rồi, mình phải đẩy nhanh tiến độ, tăng cường hợp tác.', expression: 'focused', vocab: ['建成', '加快', '加强'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我建议大家坚持下去，每天记录进展。',
        pinyin: 'Wǒ jiànyì dàjiā jiānchí xiàqù, měitiān jìlù jìnzhǎn.',
        meaning: 'Tớ đề xuất mọi người kiên trì tiếp tục, mỗi ngày ghi lại tiến độ.', expression: 'focused', vocab: ['建议', '坚持', '记录'] },
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Cửa hàng lưu niệm · Buổi chiều', bg: 'shop', cast: ['mai', 'fuwuyuan'],
        text: 'Buổi chiều, hai bạn ghé một cửa hàng lưu niệm.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '这家店可以帮你加工木头，做成纪念品。',
        pinyin: 'Zhè jiā diàn kěyǐ bāng nǐ jiāgōng mùtou, zuòchéng jìniànpǐn.',
        meaning: 'Cửa hàng này có thể gia công gỗ giúp bạn, làm thành đồ lưu niệm.', expression: 'focused', vocab: ['加工', '纪念'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '我想买一个手环，留作纪念。我计算一下要多少钱。',
        pinyin: 'Wǒ xiǎng mǎi yí gè shǒuhuán, liú zuò jìniàn. Wǒ jìsuàn yíxià yào duōshao qián.',
        meaning: 'Tớ muốn mua một chiếc vòng tay làm kỷ niệm. Để tớ tính xem hết bao nhiêu tiền.', expression: 'curious', vocab: ['环', '计算'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '好的。请到那边的架子上挑，然后过来交费。',
        pinyin: 'Hǎo de. Qǐng dào nàbiān de jiàzi shàng tiāo, ránhòu guòlái jiāofèi.',
        meaning: 'Được. Mời chọn ở cái giá đằng kia, rồi qua đây trả tiền.', expression: null, vocab: ['架', '交费'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'fuwuyuan'], bg: 'shop', scene: '📍 Cửa hàng lưu niệm', expression: 'curious',
        q: 'Trên tường có poster ghi một thành tích thể thao mới phá vỡ. Từ nào nghĩa là "kỷ lục (thể thao)"?',
        options: [
          { text: '纪录', pinyin: 'jìlù', meaning: 'kỷ lục (thể thao)', correct: true, feedback: 'Đúng! 纪录 = kỷ lục (thành tích thể thao).' },
          { text: '记录', pinyin: 'jìlù', meaning: 'ghi chép lại', correct: false, feedback: '记录 (đồng âm) = ghi chép/ghi lại — là động từ, không phải "kỷ lục thành tích".' },
          { text: '继续', pinyin: 'jìxù', meaning: 'tiếp tục', correct: false, feedback: '继续 = tiếp tục, sai nghĩa.' }
        ] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我们继续努力，也许能打破纪录！回去我还想和当地人多交流。',
        pinyin: 'Wǒmen jìxù nǔlì, yěxǔ néng dǎpò jìlù! Huíqù wǒ hái xiǎng hé dāngdì rén duō jiāoliú.',
        meaning: 'Mình tiếp tục cố gắng, biết đâu phá được kỷ lục! Về tớ còn muốn giao lưu nhiều với người bản xứ.', expression: 'happy', vocab: ['继续', '纪录', '交流'] },
      { type: 'checkpoint', questions: [
        { q: '"建设" có nghĩa là gì?', options: ['xây dựng', 'chèo thuyền', 'tính toán', 'tiếp tục'], answer: 0 },
        { q: 'Từ nào nghĩa là "đề xuất, kiến nghị"?', options: ['建议', '建成', '加工'], answer: 0 },
        { q: '"坚持" có nghĩa là gì?', options: ['kỷ niệm', 'kiên trì', 'trả phí', 'giao lưu'], answer: 1 }
      ] }
    ],
    vocab: [
      { h: '化', p: 'huà', v: 'biến đổi, hóa', e: 'to change, to transform, -ize' },
      { h: '划船', p: 'huá chuán', v: 'chèo thuyền', e: 'to row a boat' },
      { h: '环', p: 'huán', v: 'vòng, vành', e: 'ring, hoop, to surround, link' },
      { h: '计算', p: 'jì suàn', v: 'tính toán', e: 'to count' },
      { h: '记录', p: 'jì lù', v: 'ghi lại', e: 'to record' },
      { h: '纪录', p: 'jì lù', v: 'kỷ lục (thể thao)', e: 'record (achievement)' },
      { h: '纪念', p: 'jì niàn', v: 'kỷ niệm, tưởng niệm', e: 'to commemorate' },
      { h: '继续', p: 'jì xù', v: 'tiếp tục', e: 'to continue' },
      { h: '加工', p: 'jiā gōng', v: 'gia công, chế biến', e: 'to process' },
      { h: '加快', p: 'jiā kuài', v: 'tăng tốc, đẩy nhanh', e: 'to accelerate' },
      { h: '加强', p: 'jiā qiáng', v: 'tăng cường', e: 'to reinforce' },
      { h: '架', p: 'jià', v: 'khung, giá đỡ', e: 'to support' },
      { h: '坚持', p: 'jiān chí', v: 'kiên trì, bền bỉ', e: 'to persevere with' },
      { h: '建', p: 'jiàn', v: 'xây dựng, thiết lập', e: 'to establish' },
      { h: '建成', p: 'jiàn chéng', v: 'hoàn thành xây dựng', e: 'to establish' },
      { h: '建立', p: 'jiàn lì', v: 'thiết lập, thành lập', e: 'to establish' },
      { h: '建设', p: 'jiàn shè', v: 'xây dựng', e: 'to build' },
      { h: '建议', p: 'jiàn yì', v: 'đề xuất, kiến nghị', e: 'to propose' },
      { h: '交费', p: 'jiāo fèi', v: 'nộp tiền, trả phí', e: 'to pay a fee' },
      { h: '交流', p: 'jiāo liú', v: 'giao lưu, trao đổi', e: 'to exchange' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '我建议大家坚持下去', options: ['我建议大家坚持下去','我们今天先休息吧','大家不要再做了'], answer: '我建议大家坚持下去', py: 'Wǒ jiànyì dàjiā jiānchí xiàqù', explain: '听 建议 = đề xuất; 坚持 = kiên trì.' },
        { type: 'fill', sentence: '我们去湖上___。', options: ['划船', '计算', '建议'], answer: '划船' },
        { type: 'fill', sentence: '买个手环留作___。', options: ['纪念', '加工', '交费'], answer: '纪念' },
        { type: 'fill', sentence: '我___一下要多少钱。', options: ['计算', '继续', '建成'], answer: '计算' },
        { type: 'fill', sentence: '请到那边的___上挑。', options: ['架子', '环', '化'], answer: '架子' },
        { type: 'fill', sentence: '挑好了过来___。', options: ['交费', '建立', '加快'], answer: '交费' }
      ],
      normal: [
        { type: 'listen', audio: '我们先去划船', options: ['我们先去划船','我们先去吃饭','我们先回学校'], answer: '我们先去划船', py: 'Wǒmen xiān qù huáchuán', explain: '听 划船 = chèo thuyền.' },
        { type: 'dictation', audio: '我们要加快进度', answer: '我们要加快进度', hint: 'Mình phải đẩy nhanh tiến độ.', py: 'Wǒmen yào jiākuài jìndù', explain: '加快 = tăng tốc.' },
        { type: 'fill', sentence: '我们一起来___公园。', options: ['建设', '计算', '纪念'], answer: '建设' },
        { type: 'fill', sentence: '我___大家坚持下去。', options: ['建议', '加工', '划船'], answer: '建议' },
        { type: 'fill', sentence: '要___进度，早点完成。', options: ['加快', '交费', '记录'], answer: '加快' },
        { type: 'fill', sentence: '每天___下进展。', options: ['记录', '继续', '建立'], answer: '记录' },
        { type: 'fill', sentence: '回去和当地人多___。', options: ['交流', '加强', '建成'], answer: '交流' },
        { type: 'order', words: ['我们', '建立', '了', '小组', '一个'], answer: '我们建立了一个小组' },
        { type: 'order', words: ['继续', '我们', '努力', '要'], answer: '我们要继续努力' }
      ],
      hard: [
        { type: 'fill', sentence: '项目已经___一半了。', options: ['建成', '交费', '划船'], answer: '建成' },
        { type: 'fill', sentence: '我们要___合作。', options: ['加强', '计算', '纪念'], answer: '加强' },
        { type: 'fill', sentence: '这家店帮忙___木头。', options: ['加工', '建议', '继续'], answer: '加工' },
        { type: 'fill', sentence: '学习要长期___。', options: ['坚持', '交费', '划船'], answer: '坚持' },
        { type: 'translate', prompt: 'Tớ đề xuất mọi người kiên trì tiếp tục.', answer: '我建议大家坚持下去。' },
        { type: 'translate', prompt: 'Mình muốn giao lưu nhiều với người bản xứ.', answer: '我想和当地人多交流。' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 79: Ở cửa hàng & mặc cả — 20 từ
  // 交往,交易,接待,接近,节约,结合,结婚,结束,解决,解开,进展,经历,经验,经营,救,就是,就业,举办,具有,据说
  // ─────────────────────────────────────────────────────────────────────────
  79: {
    id: 79, level: 3,
    title: 'Ở cửa hàng & mặc cả',
    context: 'Mai ghé một cửa hàng nhỏ do hai vợ chồng kinh doanh đã lâu, nghe chủ tiệm kể chuyện làm ăn và lời khuyên cho người trẻ.',
    vocabPreview: ['经营', '经验', '接待', '解决', '就业'],
    objectives: [
      "Nắm nhóm từ khóa: 经营 · 经验 · 接待 · 解决 · 就业",
      "Kể/nghe hiểu tình huống Ở cửa hàng & mặc cả bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 经营 · 经验 · 接待",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "经营 — kinh doanh, quản lý",
        explain: "Dùng 经营 trong ngữ cảnh Ở cửa hàng & mặc cả để diễn đạt: kinh doanh, quản lý.",
        examples: [
          { zh: "欢迎！我和我爱人结婚后就一起经营这家店。", py: "Huānyíng! Wǒ hé wǒ àirén jiéhūn hòu jiù yìqǐ jīngyíng zhè jiā diàn.", vi: "Chào mừng! Tôi với nhà tôi sau khi kết hôn là cùng nhau kinh doanh tiệm này." }
        ] },
      { point: "经验 — kinh nghiệm",
        explain: "Dùng 经验 trong ngữ cảnh Ở cửa hàng & mặc cả để diễn đạt: kinh nghiệm.",
        examples: [
          { zh: "和顾客交往久了，是不是就有经验了？这些年的经历一定很丰富。", py: "Hé gùkè jiāowǎng jiǔ le, shì bu shì jiù yǒu jīngyàn le? Zhèxiē nián de jīnglì yídìng hěn fēngfù.", vi: "Qua lại với khách lâu rồi thì có kinh nghiệm phải không ạ? Bao năm trải nghiệm chắc phong phú lắm." },
          { zh: "您觉得现在年轻人就业难吗？我们这一代具有热情，但缺经验。", py: "Nín juéde xiànzài niánqīng rén jiùyè nán ma? Wǒmen zhè yí dài jùyǒu rèqíng, dàn quē jīngyàn.", vi: "Cô chú thấy giờ người trẻ xin việc khó không ạ? Thế hệ tụi cháu có nhiệt huyết, nhưng thiếu kinh nghiệm." }
        ] },
      { point: "接待 — tiếp đón, tiếp khách",
        explain: "Dùng 接待 trong ngữ cảnh Ở cửa hàng & mặc cả để diễn đạt: tiếp đón, tiếp khách.",
        examples: [
          { zh: "是的。做生意要会接待客人，每笔交易都要诚实。", py: "Shì de. Zuò shēngyi yào huì jiēdài kèrén, měi bǐ jiāoyì dōu yào chéngshí.", vi: "Đúng vậy. Buôn bán phải biết tiếp đón khách, mỗi giao dịch đều phải trung thực." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Cửa hàng nhỏ trong phố · Chiều', bg: 'shop', cast: ['mai', 'fuwuyuan'],
        text: 'Mai ghé một cửa hàng nhỏ do hai vợ chồng kinh doanh đã lâu.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '欢迎！我和我爱人结婚后就一起经营这家店。',
        pinyin: 'Huānyíng! Wǒ hé wǒ àirén jiéhūn hòu jiù yìqǐ jīngyíng zhè jiā diàn.',
        meaning: 'Chào mừng! Tôi với nhà tôi sau khi kết hôn là cùng nhau kinh doanh tiệm này.', expression: 'happy', vocab: ['结婚', '经营'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '据说您的店很有名。这次社区举办活动也请了您吧？',
        pinyin: 'Jùshuō nín de diàn hěn yǒumíng. Zhè cì shèqū jǔbàn huódòng yě qǐng le nín ba?',
        meaning: 'Nghe nói tiệm của cô chú nổi tiếng lắm. Lần này khu phố tổ chức sự kiện cũng mời cô chú phải không?', expression: 'curious', vocab: ['据说', '举办'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '是的。做生意要会接待客人，每笔交易都要诚实。',
        pinyin: 'Shì de. Zuò shēngyi yào huì jiēdài kèrén, měi bǐ jiāoyì dōu yào chéngshí.',
        meaning: 'Đúng vậy. Buôn bán phải biết tiếp đón khách, mỗi giao dịch đều phải trung thực.', expression: 'focused', vocab: ['接待', '交易'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '和顾客交往久了，是不是就有经验了？这些年的经历一定很丰富。',
        pinyin: 'Hé gùkè jiāowǎng jiǔ le, shì bu shì jiù yǒu jīngyàn le? Zhèxiē nián de jīnglì yídìng hěn fēngfù.',
        meaning: 'Qua lại với khách lâu rồi thì có kinh nghiệm phải không ạ? Bao năm trải nghiệm chắc phong phú lắm.', expression: 'curious', vocab: ['交往', '经验', '经历'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '对。遇到问题都能解决。社区的建设也有进展，我们很高兴。',
        pinyin: 'Duì. Yùdào wèntí dōu néng jiějué. Shèqū de jiànshè yě yǒu jìnzhǎn, wǒmen hěn gāoxìng.',
        meaning: 'Đúng. Gặp vấn đề đều giải quyết được. Việc xây dựng khu phố cũng có tiến triển, chúng tôi rất vui.', expression: null, vocab: ['解决', '进展'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'fuwuyuan'], bg: 'shop', scene: '📍 Cửa hàng nhỏ', expression: 'happy',
        q: 'Mai muốn khen "Cách làm của cô chú vừa tiết kiệm vừa hiệu quả". Từ nào nghĩa là "tiết kiệm"?',
        options: [
          { text: '节约', pinyin: 'jiéyuē', meaning: 'tiết kiệm', correct: true, feedback: 'Đúng! 节约 = tiết kiệm (thời gian, tiền bạc, tài nguyên).' },
          { text: '结合', pinyin: 'jiéhé', meaning: 'kết hợp', correct: false, feedback: '结合 = kết hợp, không phải "tiết kiệm".' },
          { text: '接近', pinyin: 'jiējìn', meaning: 'tiếp cận, gần', correct: false, feedback: '接近 = tiếp cận/gần gũi, sai nghĩa.' }
        ] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '谢谢。节约和用心结合起来，生意才长久。机会就是给有准备的人。',
        pinyin: 'Xièxie. Jiéyuē hé yòngxīn jiéhé qǐlái, shēngyi cái chángjiǔ. Jīhuì jiùshì gěi yǒu zhǔnbèi de rén.',
        meaning: 'Cảm ơn. Tiết kiệm kết hợp với tận tâm thì buôn bán mới bền. Cơ hội chính là dành cho người có chuẩn bị.', expression: 'focused', vocab: ['节约', '结合', '就是'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '您觉得现在年轻人就业难吗？我们这一代具有热情，但缺经验。',
        pinyin: 'Nín juéde xiànzài niánqīng rén jiùyè nán ma? Wǒmen zhè yí dài jùyǒu rèqíng, dàn quē jīngyàn.',
        meaning: 'Cô chú thấy giờ người trẻ xin việc khó không ạ? Thế hệ tụi cháu có nhiệt huyết, nhưng thiếu kinh nghiệm.', expression: 'curious', vocab: ['就业', '具有'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '天快黑了，活动也接近结束了。听说昨天有人在湖边救了一个孩子，绳子解开后大家都松了口气。',
        pinyin: 'Tiān kuài hēi le, huódòng yě jiējìn jiéshù le. Tīngshuō zuótiān yǒu rén zài húbiān jiù le yí gè háizi, shéngzi jiěkāi hòu dàjiā dōu sōng le kǒuqì.',
        meaning: 'Trời sắp tối, sự kiện cũng gần kết thúc rồi. Nghe nói hôm qua có người cứu một đứa trẻ ở bờ hồ, cởi được dây thừng ra ai nấy thở phào.', expression: null, vocab: ['接近', '结束', '救', '解开'] },
      { type: 'checkpoint', questions: [
        { q: '"经营" có nghĩa là gì?', options: ['kinh doanh, quản lý', 'kết hôn', 'tổ chức', 'tiết kiệm'], answer: 0 },
        { q: 'Từ nào nghĩa là "giải quyết"?', options: ['解开', '解决', '结束'], answer: 1 },
        { q: '"就业" có nghĩa là gì?', options: ['kết hôn', 'tìm việc làm', 'tổ chức', 'cứu'], answer: 1 }
      ] }
    ],
    vocab: [
      { h: '交往', p: 'jiāo wǎng', v: 'giao lưu, qua lại', e: 'to associate (with)' },
      { h: '交易', p: 'jiāo yì', v: 'giao dịch, buôn bán', e: 'to deal' },
      { h: '接待', p: 'jiē dài', v: 'tiếp đón, tiếp khách', e: 'to receive (a visitor)' },
      { h: '接近', p: 'jiē jìn', v: 'tiếp cận, gần gũi', e: 'to approach' },
      { h: '节约', p: 'jié yuē', v: 'tiết kiệm', e: 'to economize' },
      { h: '结合', p: 'jié hé', v: 'kết hợp', e: 'to combine' },
      { h: '结婚', p: 'jié hūn', v: 'kết hôn', e: 'to marry' },
      { h: '结束', p: 'jié shù', v: 'kết thúc', e: 'termination' },
      { h: '解决', p: 'jiě jué', v: 'giải quyết', e: 'to solve' },
      { h: '解开', p: 'jiě kāi', v: 'tháo ra, cởi ra', e: 'to untie' },
      { h: '进展', p: 'jìn zhǎn', v: 'tiến triển', e: 'to make headway' },
      { h: '经历', p: 'jīng lì', v: 'kinh nghiệm, trải nghiệm', e: 'experience' },
      { h: '经验', p: 'jīng yàn', v: 'kinh nghiệm', e: 'experience' },
      { h: '经营', p: 'jīng yíng', v: 'kinh doanh, quản lý', e: 'to engage in (business etc)' },
      { h: '救', p: 'jiù', v: 'cứu', e: 'to rescue, to save' },
      { h: '就是', p: 'jiù shì', v: 'chính là, đúng là', e: 'exactly' },
      { h: '就业', p: 'jiù yè', v: 'tìm việc làm, có việc làm', e: 'to get a job' },
      { h: '举办', p: 'jǔ bàn', v: 'tổ chức', e: 'to conduct' },
      { h: '具有', p: 'jù yǒu', v: 'có, sở hữu', e: 'to have' },
      { h: '据说', p: 'jù shuō', v: 'nghe nói, theo như', e: 'it is said that' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '每笔交易都要诚实', options: ['每笔交易都要诚实','每个客人都很热情','每天的生意都很好'], answer: '每笔交易都要诚实', py: 'Měi bǐ jiāoyì dōu yào chéngshí', explain: '听 交易 = giao dịch.' },
        { type: 'fill', sentence: '他们___后一起开店。', options: ['结婚', '举办', '救'], answer: '结婚' },
        { type: 'fill', sentence: '做生意要会___客人。', options: ['接待', '解开', '接近'], answer: '接待' },
        { type: 'fill', sentence: '每笔___都要诚实。', options: ['交易', '经历', '进展'], answer: '交易' },
        { type: 'fill', sentence: '社区___了一场活动。', options: ['举办', '结束', '具有'], answer: '举办' },
        { type: 'fill', sentence: '___您的店很有名。', options: ['据说', '就是', '节约'], answer: '据说' }
      ],
      normal: [
        { type: 'listen', audio: '遇到问题都能解决', options: ['遇到问题都能解决','遇到客人要接待','生意越来越好了'], answer: '遇到问题都能解决', py: 'Yùdào wèntí dōu néng jiějué', explain: '听 解决 = giải quyết.' },
        { type: 'dictation', audio: '社区举办活动', answer: '社区举办活动', hint: 'Khu phố tổ chức sự kiện.', py: 'Shèqū jǔbàn huódòng', explain: '举办 = tổ chức.' },
        { type: 'fill', sentence: '遇到问题都能___。', options: ['解决', '接待', '交往'], answer: '解决' },
        { type: 'fill', sentence: '和顾客___久了有经验。', options: ['交往', '举办', '结束'], answer: '交往' },
        { type: 'fill', sentence: '这些年的___很丰富。', options: ['经历', '交易', '进展'], answer: '经历' },
        { type: 'fill', sentence: '年轻人___难吗？', options: ['就业', '接近', '解开'], answer: '就业' },
        { type: 'fill', sentence: '活动___结束了。', options: ['接近', '具有', '经营'], answer: '接近' },
        { type: 'order', words: ['他', '经营', '一家', '店', '在'], answer: '他在经营一家店' },
        { type: 'order', words: ['问题', '解决', '能', '都'], answer: '问题都能解决' }
      ],
      hard: [
        { type: 'fill', sentence: '节约和用心___起来。', options: ['结合', '结束', '交往'], answer: '结合' },
        { type: 'fill', sentence: '机会___给有准备的人。', options: ['就是', '据说', '救'], answer: '就是' },
        { type: 'fill', sentence: '我们这一代___热情。', options: ['具有', '经营', '接待'], answer: '具有' },
        { type: 'fill', sentence: '有人在湖边___了孩子。', options: ['救', '解开', '举办'], answer: '救' },
        { type: 'translate', prompt: 'Buôn bán phải biết tiếp đón khách.', answer: '做生意要会接待客人。' },
        { type: 'translate', prompt: 'Gặp vấn đề đều giải quyết được.', answer: '遇到问题都能解决。' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 80: Tại nhà hàng — 20 từ
  // 决定,决赛,开发,开始,开业,开展,看起来,看上去,考验,克服,浪费,离婚,理发,理解,利用,连,联合,联系,领,领导
  // ─────────────────────────────────────────────────────────────────────────
  80: {
    id: 80, level: 3,
    title: 'Tại nhà hàng',
    context: 'Một nhà hàng mới khai trương gần trường. Mai và Tiểu Mỹ đến ăn mừng trước trận chung kết thi nói tiếng Hán.',
    vocabPreview: ['决定', '开业', '决赛', '克服', '理解'],
    objectives: [
      "Nắm nhóm từ khóa: 决定 · 开业 · 决赛 · 克服 · 理解",
      "Kể/nghe hiểu tình huống Tại nhà hàng bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 决定 · 开业 · 决赛",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "决定 — quyết định",
        explain: "Dùng 决定 trong ngữ cảnh Tại nhà hàng để diễn đạt: quyết định.",
        examples: [
          { zh: "我们决定来庆祝，因为下周就是汉语决赛了。", py: "Wǒmen juédìng lái qìngzhù, yīnwèi xià zhōu jiùshì Hànyǔ juésài le.", vi: "Tụi mình quyết định đến ăn mừng, vì tuần sau chính là trận chung kết tiếng Hán." }
        ] },
      { point: "开业 — khai trương",
        explain: "Dùng 开业 trong ngữ cảnh Tại nhà hàng để diễn đạt: khai trương.",
        examples: [
          { zh: "这家餐厅今天开业，看起来很热闹！", py: "Zhè jiā cāntīng jīntiān kāiyè, kàn qǐlái hěn rènao!", vi: "Nhà hàng này hôm nay khai trương, trông náo nhiệt ghê!" },
          { zh: "欢迎光临！开业第一天，本店饮料免费。我们的领导说，新店要重新开始，好好服务大家。", py: "Huānyíng guānglín! Kāiyè dì-yī tiān, běn diàn yǐnliào miǎnfèi. Wǒmen de lǐngdǎo shuō, xīn diàn yào chóngxīn kāishǐ, hǎohǎo fúwù dàjiā.", vi: "Hoan nghênh quý khách! Ngày khai trương đầu tiên, đồ uống miễn phí. Sếp của chúng tôi nói, tiệm mới phải bắt đầu lại, phục vụ mọi người thật tốt." }
        ] },
      { point: "决赛 — vòng chung kết",
        explain: "Dùng 决赛 trong ngữ cảnh Tại nhà hàng để diễn đạt: vòng chung kết.",
        examples: [
          { zh: "决赛是个考验，但我们一定能克服困难。", py: "Juésài shì gè kǎoyàn, dàn wǒmen yídìng néng kèfú kùnnan.", vi: "Chung kết là một thử thách, nhưng tụi mình nhất định khắc phục được khó khăn." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Nhà hàng mới · Buổi tối', bg: 'restaurant', cast: ['mai', 'xiaomei'],
        text: 'Một nhà hàng mới khai trương gần trường. Mai và Tiểu Mỹ đến ăn mừng.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这家餐厅今天开业，看起来很热闹！',
        pinyin: 'Zhè jiā cāntīng jīntiān kāiyè, kàn qǐlái hěn rènao!',
        meaning: 'Nhà hàng này hôm nay khai trương, trông náo nhiệt ghê!', expression: 'happy', vocab: ['开业', '看起来'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我们决定来庆祝，因为下周就是汉语决赛了。',
        pinyin: 'Wǒmen juédìng lái qìngzhù, yīnwèi xià zhōu jiùshì Hànyǔ juésài le.',
        meaning: 'Tụi mình quyết định đến ăn mừng, vì tuần sau chính là trận chung kết tiếng Hán.', expression: 'happy', vocab: ['决定', '决赛'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '决赛是个考验，但我们一定能克服困难。',
        pinyin: 'Juésài shì gè kǎoyàn, dàn wǒmen yídìng néng kèfú kùnnan.',
        meaning: 'Chung kết là một thử thách, nhưng tụi mình nhất định khắc phục được khó khăn.', expression: 'focused', vocab: ['考验', '克服'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '对。学校开始开展新的语言活动，我们要好好利用机会。',
        pinyin: 'Duì. Xuéxiào kāishǐ kāizhǎn xīn de yǔyán huódòng, wǒmen yào hǎohǎo lìyòng jīhuì.',
        meaning: 'Đúng. Trường bắt đầu triển khai hoạt động ngôn ngữ mới, mình phải tận dụng cơ hội.', expression: 'focused', vocab: ['开始', '开展', '利用'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'restaurant', scene: '📍 Nhà hàng mới', expression: 'happy',
        q: 'Tiểu Mỹ vừa đi cắt tóc. Mai muốn khen. Từ nào nghĩa là "cắt tóc"?',
        options: [
          { text: '理发', pinyin: 'lǐfà', meaning: 'cắt tóc', correct: true, feedback: 'Đúng! 理发 = cắt tóc.' },
          { text: '离婚', pinyin: 'líhūn', meaning: 'ly hôn', correct: false, feedback: '离婚 = ly hôn, hoàn toàn sai ngữ cảnh.' },
          { text: '理解', pinyin: 'lǐjiě', meaning: 'hiểu', correct: false, feedback: '理解 = hiểu/lĩnh hội, không phải "cắt tóc".' }
        ] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '哈哈，谢谢！你这么说我很理解你的好意。点这么多够了，别浪费。',
        pinyin: 'Hāhā, xièxie! Nǐ zhème shuō wǒ hěn lǐjiě nǐ de hǎoyì. Diǎn zhème duō gòu le, bié làngfèi.',
        meaning: 'Haha, cảm ơn! Cậu nói vậy tớ hiểu thiện ý của cậu. Gọi nhiều thế đủ rồi, đừng lãng phí.', expression: 'happy', vocab: ['理解', '浪费'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '听说学校要开发新课程，还会和别的大学联合。要多和老师联系。',
        pinyin: 'Tīngshuō xuéxiào yào kāifā xīn kèchéng, hái huì hé bié de dàxué liánhé. Yào duō hé lǎoshī liánxì.',
        meaning: 'Nghe nói trường sắp phát triển chương trình mới, còn liên kết với trường khác nữa. Phải liên hệ thầy cô nhiều.', expression: 'curious', vocab: ['开发', '联合', '联系'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这道菜看上去很特别，连隔壁桌都点了。等下我去前台领今天的优惠券。',
        pinyin: 'Zhè dào cài kàn shàngqù hěn tèbié, lián gébì zhuō dōu diǎn le. Děng xià wǒ qù qiántái lǐng jīntiān de yōuhuìquàn.',
        meaning: 'Món này trông đặc biệt ghê, đến cả bàn bên cũng gọi. Lát nữa tớ ra quầy lấy phiếu ưu đãi hôm nay.', expression: 'curious', vocab: ['看上去', '连', '领'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'xiaomei', 'fuwuyuan'],
        text: '欢迎光临！开业第一天，本店饮料免费。我们的领导说，新店要重新开始，好好服务大家。',
        pinyin: 'Huānyíng guānglín! Kāiyè dì-yī tiān, běn diàn yǐnliào miǎnfèi. Wǒmen de lǐngdǎo shuō, xīn diàn yào chóngxīn kāishǐ, hǎohǎo fúwù dàjiā.',
        meaning: 'Hoan nghênh quý khách! Ngày khai trương đầu tiên, đồ uống miễn phí. Sếp của chúng tôi nói, tiệm mới phải bắt đầu lại, phục vụ mọi người thật tốt.', expression: 'focused', vocab: ['领导'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'fuwuyuan'],
        text: '太好了！对了，听说老板上个月离婚后还坚持把店开了起来，真不容易。',
        pinyin: 'Tài hǎo le! Duìle, tīngshuō lǎobǎn shàng gè yuè líhūn hòu hái jiānchí bǎ diàn kāi le qǐlái, zhēn bù róngyì.',
        meaning: 'Tuyệt quá! À, nghe nói ông chủ tháng trước ly hôn xong vẫn kiên trì mở được tiệm, thật không dễ.', expression: 'surprise', vocab: ['离婚'] },
      { type: 'checkpoint', questions: [
        { q: '"开业" có nghĩa là gì?', options: ['khai trương', 'ly hôn', 'cắt tóc', 'lãng phí'], answer: 0 },
        { q: 'Từ nào nghĩa là "khắc phục"?', options: ['考验', '克服', '利用'], answer: 1 },
        { q: '"决定" có nghĩa là gì?', options: ['chung kết', 'quyết định', 'lãnh đạo', 'liên hệ'], answer: 1 }
      ] }
    ],
    vocab: [
      { h: '决定', p: 'jué dìng', v: 'quyết định', e: 'to decide (to do something)' },
      { h: '决赛', p: 'jué sài', v: 'vòng chung kết', e: 'finals (of a competition)' },
      { h: '开发', p: 'kāi fā', v: 'khai thác, phát triển', e: 'to exploit (a resource)' },
      { h: '开始', p: 'kāi shǐ', v: 'bắt đầu', e: 'to begin' },
      { h: '开业', p: 'kāi yè', v: 'khai trương', e: 'to open a business' },
      { h: '开展', p: 'kāi zhǎn', v: 'triển khai, mở rộng', e: 'to launch' },
      { h: '看起来', p: 'kàn qǐ lai', v: 'trông có vẻ', e: 'seemingly' },
      { h: '看上去', p: 'kàn shang qu', v: 'trông có vẻ', e: 'it would appear' },
      { h: '考验', p: 'kǎo yàn', v: 'thử thách, kiểm nghiệm', e: 'to test' },
      { h: '克服', p: 'kè fú', v: 'khắc phục', e: 'overcome (hardships etc)' },
      { h: '浪费', p: 'làng fèi', v: 'lãng phí', e: 'to waste' },
      { h: '离婚', p: 'lí hūn', v: 'ly hôn', e: 'to divorce' },
      { h: '理发', p: 'lǐ fà', v: 'cắt tóc', e: 'to get a haircut' },
      { h: '理解', p: 'lǐ jiě', v: 'hiểu, lĩnh hội', e: 'to comprehend' },
      { h: '利用', p: 'lì yòng', v: 'tận dụng, sử dụng', e: 'to exploit' },
      { h: '连', p: 'lián', v: 'liên, liền; ngay cả', e: 'even, to connect, continuously' },
      { h: '联合', p: 'lián hé', v: 'liên hợp, hợp nhất', e: 'to combine' },
      { h: '联系', p: 'lián xì', v: 'liên hệ, liên lạc', e: 'to contact, to get in touch, connection' },
      { h: '领', p: 'lǐng', v: 'lĩnh, nhận; dẫn dắt', e: 'neck' },
      { h: '领导', p: 'lǐng dǎo', v: 'lãnh đạo', e: 'lead' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '这家餐厅今天开业', options: ['这家餐厅今天开业','这家餐厅今天关门','这家商店明天开业'], answer: '这家餐厅今天开业', py: 'Zhè jiā cāntīng jīntiān kāiyè', explain: '听 开业 = khai trương.' },
        { type: 'fill', sentence: '这家店今天___。', options: ['开业', '离婚', '浪费'], answer: '开业' },
        { type: 'fill', sentence: '我们___来庆祝。', options: ['决定', '理解', '联合'], answer: '决定' },
        { type: 'fill', sentence: '下周就是汉语___。', options: ['决赛', '开发', '领导'], answer: '决赛' },
        { type: 'fill', sentence: '这道菜___很特别。', options: ['看起来', '克服', '利用'], answer: '看起来' },
        { type: 'fill', sentence: '点这么多，别___。', options: ['浪费', '联系', '开始'], answer: '浪费' }
      ],
      normal: [
        { type: 'listen', audio: '我们决定来庆祝', options: ['我们决定来庆祝','我们打算去旅游','我们一起去上课'], answer: '我们决定来庆祝', py: 'Wǒmen juédìng lái qìngzhù', explain: '听 决定 = quyết định.' },
        { type: 'dictation', audio: '别浪费', answer: '别浪费', hint: 'Đừng lãng phí.', py: 'Bié làngfèi', explain: '浪费 = lãng phí.' },
        { type: 'fill', sentence: '我们一定能___困难。', options: ['克服', '开业', '理发'], answer: '克服' },
        { type: 'fill', sentence: '学校___新的活动。', options: ['开展', '决定', '联合'], answer: '开展' },
        { type: 'fill', sentence: '要好好___机会。', options: ['利用', '浪费', '领'], answer: '利用' },
        { type: 'fill', sentence: '要多和老师___。', options: ['联系', '开始', '克服'], answer: '联系' },
        { type: 'fill', sentence: '我去前台___优惠券。', options: ['领', '连', '开发'], answer: '领' },
        { type: 'order', words: ['我们', '决定', '来', '庆祝'], answer: '我们决定来庆祝' },
        { type: 'order', words: ['困难', '克服', '能', '我们'], answer: '我们能克服困难' }
      ],
      hard: [
        { type: 'fill', sentence: '学校要___新课程。', options: ['开发', '理发', '浪费'], answer: '开发' },
        { type: 'fill', sentence: '会和别的大学___。', options: ['联合', '联系', '领导'], answer: '联合' },
        { type: 'fill', sentence: '___隔壁桌都点了。', options: ['连', '领', '开始'], answer: '连' },
        { type: 'fill', sentence: '我很___你的好意。', options: ['理解', '理发', '利用'], answer: '理解' },
        { type: 'translate', prompt: 'Chung kết là một thử thách.', answer: '决赛是个考验。' },
        { type: 'translate', prompt: 'Mình phải tận dụng cơ hội.', answer: '我们要利用机会。' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 81: Công việc bán thời gian — 20 từ
  // 领先,留学,录,录音,迷,面对,念,拍,排名,派,判断,跑步,配,配合,批评,批准,评价,破坏,普及,前进
  // ─────────────────────────────────────────────────────────────────────────
  81: {
    id: 81, level: 3,
    title: 'Công việc bán thời gian',
    context: 'Trong kỳ du học, Mai xin được một việc làm thêm ở phòng thu âm bài học của chương trình.',
    vocabPreview: ['留学', '录音', '配合', '面对', '评价'],
    objectives: [
      "Nắm nhóm từ khóa: 留学 · 录音 · 配合 · 面对 · 评价",
      "Kể/nghe hiểu tình huống Công việc bán thời gian bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 留学 · 录音 · 配合",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "留学 — du học",
        explain: "Dùng 留学 trong ngữ cảnh Công việc bán thời gian để diễn đạt: du học.",
        examples: [
          { zh: "我在留学期间找了一份兼职，帮忙录音。", py: "Wǒ zài liúxué qījiān zhǎo le yí fèn jiānzhí, bāngmáng lùyīn.", vi: "Trong thời gian du học, em tìm được một việc làm thêm, giúp thu âm." }
        ] },
      { point: "录音 — thu âm, ghi âm",
        explain: "Dùng 录音 trong ngữ cảnh Công việc bán thời gian để diễn đạt: thu âm, ghi âm.",
        examples: [
          { zh: "明白。需要的话我也可以配上背景音。想拍几张工作照做纪念，会破坏录音吗？", py: "Míngbai. Xūyào dehuà wǒ yě kěyǐ pèi shàng bèijǐng yīn. Xiǎng pāi jǐ zhāng gōngzuò zhào zuò jìniàn, huì pòhuài lùyīn ma?", vi: "Hiểu rồi. Cần thì em cũng có thể ghép thêm tiếng nền. Em muốn chụp vài tấm ảnh làm kỷ niệm, có làm hỏng việc thu không ạ?" }
        ] },
      { point: "配合 — phối hợp",
        explain: "Dùng 配合 trong ngữ cảnh Công việc bán thời gian để diễn đạt: phối hợp.",
        examples: [
          { zh: "录之前先判断一下哪句要重读，注意和音乐配合。", py: "Lù zhīqián xiān pànduàn yíxià nǎ jù yào zhòngdú, zhùyì hé yīnyuè pèihé.", vi: "Trước khi thu, đánh giá xem câu nào cần nhấn, chú ý phối hợp với nhạc." },
          { zh: "配合得好，我们的质量就能领先，排名也会上去。", py: "Pèihé de hǎo, wǒmen de zhìliàng jiù néng lǐngxiān, páimíng yě huì shàngqù.", vi: "Phối hợp tốt thì chất lượng sẽ dẫn đầu, thứ hạng cũng lên theo." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Phòng thu của chương trình · Sáng', bg: 'office', cast: ['mai', 'fuwuyuan'],
        text: 'Trong kỳ du học, Mai xin được một việc làm thêm ở phòng thu âm.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '我在留学期间找了一份兼职，帮忙录音。',
        pinyin: 'Wǒ zài liúxué qījiān zhǎo le yí fèn jiānzhí, bāngmáng lùyīn.',
        meaning: 'Trong thời gian du học, em tìm được một việc làm thêm, giúp thu âm.', expression: 'happy', vocab: ['留学', '录音'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '好。你负责把课文念出来，我们来录。',
        pinyin: 'Hǎo. Nǐ fùzé bǎ kèwén niàn chūlái, wǒmen lái lù.',
        meaning: 'Tốt. Em phụ trách đọc to bài khóa lên, chúng tôi thu lại.', expression: 'focused', vocab: ['念', '录'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '没问题。我从小就是个汉语迷，很爱朗读。',
        pinyin: 'Méi wèntí. Wǒ cóngxiǎo jiùshì gè Hànyǔ mí, hěn ài lǎngdú.',
        meaning: 'Không vấn đề. Em từ nhỏ đã là một fan tiếng Hán, rất thích đọc.', expression: 'happy', vocab: ['迷'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '录之前先判断一下哪句要重读，注意和音乐配合。',
        pinyin: 'Lù zhīqián xiān pànduàn yíxià nǎ jù yào zhòngdú, zhùyì hé yīnyuè pèihé.',
        meaning: 'Trước khi thu, đánh giá xem câu nào cần nhấn, chú ý phối hợp với nhạc.', expression: null, vocab: ['判断', '配合'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '明白。需要的话我也可以配上背景音。想拍几张工作照做纪念，会破坏录音吗？',
        pinyin: 'Míngbai. Xūyào dehuà wǒ yě kěyǐ pèi shàng bèijǐng yīn. Xiǎng pāi jǐ zhāng gōngzuò zhào zuò jìniàn, huì pòhuài lùyīn ma?',
        meaning: 'Hiểu rồi. Cần thì em cũng có thể ghép thêm tiếng nền. Em muốn chụp vài tấm ảnh làm kỷ niệm, có làm hỏng việc thu không ạ?', expression: 'curious', vocab: ['配', '拍', '破坏'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '不会。我已经批准你在休息时拍照了。',
        pinyin: 'Bú huì. Wǒ yǐjīng pīzhǔn nǐ zài xiūxi shí pāizhào le.',
        meaning: 'Không đâu. Tôi đã chấp thuận cho em chụp ảnh lúc nghỉ rồi.', expression: 'happy', vocab: ['批准'] },
      { type: 'choice', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'], bg: 'office', scene: '📍 Phòng thu', expression: 'focused',
        q: 'Sếp muốn nói "Phối hợp tốt thì chất lượng sẽ dẫn đầu". Từ nào nghĩa là "dẫn đầu"?',
        options: [
          { text: '领先', pinyin: 'lǐngxiān', meaning: 'dẫn đầu', correct: true, feedback: 'Đúng! 领先 = dẫn đầu (vượt lên trước).' },
          { text: '前进', pinyin: 'qiánjìn', meaning: 'tiến lên', correct: false, feedback: '前进 = tiến lên/tiến về phía trước, không phải "dẫn đầu".' },
          { text: '普及', pinyin: 'pǔjí', meaning: 'phổ cập', correct: false, feedback: '普及 = phổ cập, sai nghĩa.' }
        ] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '配合得好，我们的质量就能领先，排名也会上去。',
        pinyin: 'Pèihé de hǎo, wǒmen de zhìliàng jiù néng lǐngxiān, páimíng yě huì shàngqù.',
        meaning: 'Phối hợp tốt thì chất lượng sẽ dẫn đầu, thứ hạng cũng lên theo.', expression: 'happy', vocab: ['领先', '排名'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '上次有个小错误我批评过你，但你改得快，这次给你好评价。以后会派人去推广，让课程更普及。',
        pinyin: 'Shàng cì yǒu gè xiǎo cuòwù wǒ pīpíng guò nǐ, dàn nǐ gǎi de kuài, zhè cì gěi nǐ hǎo píngjià. Yǐhòu huì pài rén qù tuīguǎng, ràng kèchéng gèng pǔjí.',
        meaning: 'Lần trước có lỗi nhỏ tôi đã phê bình em, nhưng em sửa nhanh, lần này tôi đánh giá tốt. Sau này sẽ cử người đi quảng bá, cho khóa học phổ cập hơn.', expression: 'focused', vocab: ['批评', '评价', '派', '普及'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '谢谢老师！早上我还跑步锻炼，我会面对每一次考验，不断前进。',
        pinyin: 'Xièxie lǎoshī! Zǎoshang wǒ hái pǎobù duànliàn, wǒ huì miànduì měi yí cì kǎoyàn, búduàn qiánjìn.',
        meaning: 'Cảm ơn anh! Buổi sáng em còn chạy bộ rèn luyện, em sẽ đối mặt mỗi thử thách, không ngừng tiến lên.', expression: 'happy', vocab: ['跑步', '面对', '前进'] },
      { type: 'checkpoint', questions: [
        { q: '"录音" có nghĩa là gì?', options: ['thu âm', 'cắt tóc', 'chạy bộ', 'phê bình'], answer: 0 },
        { q: 'Từ nào nghĩa là "phối hợp"?', options: ['配合', '判断', '评价'], answer: 0 },
        { q: '"面对" có nghĩa là gì?', options: ['dẫn đầu', 'đối mặt', 'phổ cập', 'phá hủy'], answer: 1 }
      ] }
    ],
    vocab: [
      { h: '领先', p: 'lǐng xiān', v: 'dẫn đầu', e: 'to lead' },
      { h: '留学', p: 'liú xué', v: 'du học', e: 'to study abroad' },
      { h: '录', p: 'lù', v: 'ghi, thu âm', e: 'to carve wood' },
      { h: '录音', p: 'lù yīn', v: 'thu âm, ghi âm', e: 'to record (sound)' },
      { h: '迷', p: 'mí', v: 'mê, người hâm mộ', e: 'to bewilder' },
      { h: '面对', p: 'miàn duì', v: 'đối mặt', e: 'to face' },
      { h: '念', p: 'niàn', v: 'đọc to, nhớ đến', e: 'to read aloud, to miss, to think of' },
      { h: '拍', p: 'pāi', v: 'chụp (ảnh), vỗ', e: 'to pat' },
      { h: '排名', p: 'pái míng', v: 'xếp hạng', e: 'to rank (1st, 2nd etc)' },
      { h: '派', p: 'pài', v: 'phái, phân công', e: 'clique' },
      { h: '判断', p: 'pàn duàn', v: 'phán đoán, đánh giá', e: 'to judge' },
      { h: '跑步', p: 'pǎo bù', v: 'chạy bộ', e: 'to run' },
      { h: '配', p: 'pèi', v: 'kết hợp, phù hợp', e: 'to join' },
      { h: '配合', p: 'pèi hé', v: 'phối hợp', e: 'matching' },
      { h: '批评', p: 'pī píng', v: 'phê bình, chỉ trích', e: 'to criticize' },
      { h: '批准', p: 'pī zhǔn', v: 'phê chuẩn, chấp thuận', e: 'to approve' },
      { h: '评价', p: 'píng jià', v: 'đánh giá', e: 'to evaluate' },
      { h: '破坏', p: 'pò huài', v: 'phá hủy, phá hoại', e: 'destruction' },
      { h: '普及', p: 'pǔ jí', v: 'phổ cập', e: 'to spread extensively' },
      { h: '前进', p: 'qián jìn', v: 'tiến lên', e: 'to go forward' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '我找了一份兼职', options: ['我找了一份兼职','我报了一个班','我买了一本书'], answer: '我找了一份兼职', py: 'Wǒ zhǎo le yí fèn jiānzhí', explain: '听 兼职 = việc làm thêm.' },
        { type: 'fill', sentence: '我帮忙___课文。', options: ['录音', '跑步', '理发'], answer: '录音' },
        { type: 'fill', sentence: '请把课文___出来。', options: ['念', '配', '派'], answer: '念' },
        { type: 'fill', sentence: '我是个汉语___。', options: ['迷', '录', '拍'], answer: '迷' },
        { type: 'fill', sentence: '早上我去___锻炼。', options: ['跑步', '破坏', '评价'], answer: '跑步' },
        { type: 'fill', sentence: '我想___几张照片。', options: ['拍', '念', '派'], answer: '拍' }
      ],
      normal: [
        { type: 'listen', audio: '我很爱朗读', options: ['我很爱朗读','我很爱唱歌','我很爱画画'], answer: '我很爱朗读', py: 'Wǒ hěn ài lǎngdú', explain: '听 朗读 = đọc to.' },
        { type: 'dictation', audio: '帮忙录音', answer: '帮忙录音', hint: 'Giúp thu âm.', py: 'Bāngmáng lùyīn', explain: '录音 = thu âm.' },
        { type: 'fill', sentence: '注意和音乐___。', options: ['配合', '批评', '面对'], answer: '配合' },
        { type: 'fill', sentence: '先___哪句要重读。', options: ['判断', '普及', '录'], answer: '判断' },
        { type: 'fill', sentence: '质量好，___也会上去。', options: ['排名', '录音', '前进'], answer: '排名' },
        { type: 'fill', sentence: '我会___每一次考验。', options: ['面对', '配', '拍'], answer: '面对' },
        { type: 'fill', sentence: '我在___期间找了兼职。', options: ['留学', '录音', '跑步'], answer: '留学' },
        { type: 'order', words: ['我', '帮忙', '录音', '想'], answer: '我想帮忙录音' },
        { type: 'order', words: ['每一次', '面对', '考验', '我'], answer: '我面对每一次考验' }
      ],
      hard: [
        { type: 'fill', sentence: '老师___过我的错误。', options: ['批评', '配合', '跑步'], answer: '批评' },
        { type: 'fill', sentence: '这次给你好___。', options: ['评价', '判断', '前进'], answer: '评价' },
        { type: 'fill', sentence: '配合得好就能___。', options: ['领先', '破坏', '念'], answer: '领先' },
        { type: 'fill', sentence: '我已经___你拍照了。', options: ['批准', '排名', '面对'], answer: '批准' },
        { type: 'translate', prompt: 'Phối hợp tốt thì chất lượng sẽ dẫn đầu.', answer: '配合得好，质量就能领先。' },
        { type: 'translate', prompt: 'Em sẽ đối mặt mỗi thử thách, không ngừng tiến lên.', answer: '我会面对每一次考验，不断前进。' }
      ]
    }
  }

});

// ───────────────────────────────────────────────────────
// BATCH 3 — Bài 82-86 (Văn phòng · Học tập · Giao tiếp · Online · Sức khỏe)
// ───────────────────────────────────────────────────────
Object.assign(COURSE_DATA, {

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 82: Ở văn phòng — 20 từ
  // 前往,强调,请教,庆祝,区别,取消,去世,缺,缺少,确保,确定,热爱,认出,认得,认可,任,散步,伤,上来,上去
  // ─────────────────────────────────────────────────────────────────────────
  82: {
    id: 82, level: 3,
    title: 'Ở văn phòng',
    context: 'Mai đến văn phòng giáo vụ xin lời khuyên chọn môn học, gặp lại một người bạn cũ và nghe tin một giáo sư đáng kính.',
    vocabPreview: ['请教', '确定', '区别', '认出', '庆祝'],
    objectives: [
      "Nắm nhóm từ khóa: 请教 · 确定 · 区别 · 认出 · 庆祝",
      "Kể/nghe hiểu tình huống Ở văn phòng bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 请教 · 确定 · 区别",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "请教 — xin chỉ bảo, hỏi ý kiến",
        explain: "Dùng 请教 trong ngữ cảnh Ở văn phòng để diễn đạt: xin chỉ bảo, hỏi ý kiến.",
        examples: [
          { zh: "老师，我想请教您一个问题，可以上来您办公室吗？", py: "Lǎoshī, wǒ xiǎng qǐngjiào nín yí gè wèntí, kěyǐ shànglái nín bàngōngshì ma?", vi: "Thầy ơi, em muốn hỏi thầy một vấn đề, em lên văn phòng thầy được không?" }
        ] },
      { point: "确定 — xác định, chắc chắn",
        explain: "Dùng 确定 trong ngữ cảnh Ở văn phòng để diễn đạt: xác định, chắc chắn.",
        examples: [
          { zh: "当然，上来吧。原定的会议取消了，我正好有空。你前往教务处确定选课了吗？", py: "Dāngrán, shànglái ba. Yuándìng de huìyì qǔxiāo le, wǒ zhènghǎo yǒu kòng. Nǐ qiánwǎng jiàowùchù quèdìng xuǎnkè le ma?", vi: "Tất nhiên, lên đi. Cuộc họp dự kiến đã bị hủy, thầy đang rảnh. Em đã đến phòng giáo vụ xác định chọn môn chưa?" }
        ] },
      { point: "区别 — phân biệt, sự khác biệt",
        explain: "Dùng 区别 trong ngữ cảnh Ở văn phòng để diễn đạt: phân biệt, sự khác biệt.",
        examples: [
          { zh: "还没。我想弄清楚两门课的区别，确保不选错。", py: "Hái méi. Wǒ xiǎng nòng qīngchu liǎng mén kè de qūbié, quèbǎo bù xuǎn cuò.", vi: "Chưa ạ. Em muốn làm rõ sự khác biệt giữa hai môn, đảm bảo không chọn nhầm." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Văn phòng giáo vụ · Sáng', bg: 'office', cast: ['mai', 'fuwuyuan'],
        text: 'Mai đến văn phòng để xin lời khuyên về việc chọn môn.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '老师，我想请教您一个问题，可以上来您办公室吗？',
        pinyin: 'Lǎoshī, wǒ xiǎng qǐngjiào nín yí gè wèntí, kěyǐ shànglái nín bàngōngshì ma?',
        meaning: 'Thầy ơi, em muốn hỏi thầy một vấn đề, em lên văn phòng thầy được không?', expression: 'curious', vocab: ['请教', '上来'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '当然，上来吧。原定的会议取消了，我正好有空。你前往教务处确定选课了吗？',
        pinyin: 'Dāngrán, shànglái ba. Yuándìng de huìyì qǔxiāo le, wǒ zhènghǎo yǒu kòng. Nǐ qiánwǎng jiàowùchù quèdìng xuǎnkè le ma?',
        meaning: 'Tất nhiên, lên đi. Cuộc họp dự kiến đã bị hủy, thầy đang rảnh. Em đã đến phòng giáo vụ xác định chọn môn chưa?', expression: 'focused', vocab: ['取消', '前往', '确定'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '还没。我想弄清楚两门课的区别，确保不选错。',
        pinyin: 'Hái méi. Wǒ xiǎng nòng qīngchu liǎng mén kè de qūbié, quèbǎo bù xuǎn cuò.',
        meaning: 'Chưa ạ. Em muốn làm rõ sự khác biệt giữa hai môn, đảm bảo không chọn nhầm.', expression: 'curious', vocab: ['区别', '确保'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '好。我强调一点：别缺课。最近你好像缺少睡眠？',
        pinyin: 'Hǎo. Wǒ qiángdiào yìdiǎn: bié quē kè. Zuìjìn nǐ hǎoxiàng quēshǎo shuìmián?',
        meaning: 'Được. Thầy nhấn mạnh một điều: đừng nghỉ học. Gần đây em hình như thiếu ngủ?', expression: null, vocab: ['强调', '缺', '缺少'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'fuwuyuan'], bg: 'office', scene: '📍 Văn phòng giáo vụ', expression: 'surprise',
        q: 'Mai gặp lại một người bạn cũ ngoài hành lang. Muốn nói "Tớ nhận ra cậu rồi!". Dùng từ nào?',
        options: [
          { text: '我认出你了！', pinyin: 'Wǒ rènchū nǐ le!', meaning: 'Tớ nhận ra cậu rồi!', correct: true, feedback: 'Đúng! 认出 = nhận ra (sau khi nhìn kỹ).' },
          { text: '我认可你了！', pinyin: 'Wǒ rènkě nǐ le!', meaning: '(sai nghĩa)', correct: false, feedback: '认可 = công nhận/chấp thuận (năng lực), không phải "nhận ra mặt".' },
          { text: '我认得你了！', pinyin: 'Wǒ rènde nǐ le!', meaning: '(kém tự nhiên)', correct: false, feedback: '认得 nghiêng về "quen biết sẵn"; diễn tả "vừa nhận ra" thì 认出 tự nhiên hơn.' }
        ] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '我一眼就认得你！你的能力大家都认可。',
        pinyin: 'Wǒ yìyǎn jiù rènde nǐ! Nǐ de nénglì dàjiā dōu rènkě.',
        meaning: 'Tớ nhìn một cái là nhận ra cậu! Năng lực của cậu ai cũng công nhận.', expression: 'happy', vocab: ['认得', '认可'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '这次任务很重，但别有压力。听说一位老教授上周去世了，大家都很怀念他。',
        pinyin: 'Zhè cì rènwu hěn zhòng, dàn bié yǒu yālì. Tīngshuō yí wèi lǎo jiàoshòu shàng zhōu qùshì le, dàjiā dōu hěn huáiniàn tā.',
        meaning: 'Nhiệm vụ lần này nặng, nhưng đừng áp lực. Nghe nói một giáo sư già tuần trước đã qua đời, mọi người đều rất tưởng nhớ thầy.', expression: 'sad', vocab: ['任', '去世'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '我也很难过。我们办个小活动庆祝他的一生吧。下课后我去散步，也想上去天台静一静。',
        pinyin: 'Wǒ yě hěn nánguò. Wǒmen bàn gè xiǎo huódòng qìngzhù tā de yìshēng ba. Xiàkè hòu wǒ qù sànbù, yě xiǎng shàngqù tiāntái jìng yi jìng.',
        meaning: 'Em cũng buồn. Mình tổ chức hoạt động nhỏ tôn vinh cuộc đời thầy nhé. Tan học em đi dạo, cũng muốn lên sân thượng tĩnh tâm.', expression: 'sad', vocab: ['庆祝', '散步', '上去'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '好。对了，你手上怎么有伤？要热爱生活，也要照顾好自己。',
        pinyin: 'Hǎo. Duìle, nǐ shǒu shàng zěnme yǒu shāng? Yào rè\'ài shēnghuó, yě yào zhàogù hǎo zìjǐ.',
        meaning: 'Được. À, tay em sao bị thương vậy? Phải yêu cuộc sống, nhưng cũng phải chăm sóc bản thân.', expression: 'curious', vocab: ['伤', '热爱'] },
      { type: 'checkpoint', questions: [
        { q: '"请教" có nghĩa là gì?', options: ['xin chỉ bảo, hỏi ý kiến', 'hủy bỏ', 'đi dạo', 'qua đời'], answer: 0 },
        { q: 'Từ nào nghĩa là "nhận ra (sau khi nhìn)"?', options: ['认可', '认出', '认得'], answer: 1 },
        { q: '"区别" có nghĩa là gì?', options: ['sự khác biệt', 'nhấn mạnh', 'đảm bảo', 'chúc mừng'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '前往', p: 'qián wǎng', v: 'đi đến', e: 'to leave for' },
      { h: '强调', p: 'qiáng diào', v: 'nhấn mạnh', e: 'to emphasize (a statement)' },
      { h: '请教', p: 'qǐng jiào', v: 'xin chỉ bảo, hỏi ý kiến', e: 'to ask for guidance' },
      { h: '庆祝', p: 'qìng zhù', v: 'chúc mừng, kỷ niệm', e: 'to celebrate' },
      { h: '区别', p: 'qū bié', v: 'phân biệt, sự khác biệt', e: 'difference' },
      { h: '取消', p: 'qǔ xiāo', v: 'hủy bỏ', e: 'to cancel' },
      { h: '去世', p: 'qù shì', v: 'qua đời', e: 'to pass away' },
      { h: '缺', p: 'quē', v: 'thiếu, khuyết', e: 'deficiency' },
      { h: '缺少', p: 'quē shǎo', v: 'thiếu', e: 'lack' },
      { h: '确保', p: 'què bǎo', v: 'đảm bảo', e: 'to ensure' },
      { h: '确定', p: 'què dìng', v: 'xác định, chắc chắn', e: 'definite' },
      { h: '热爱', p: 'rè ài', v: 'yêu tha thiết', e: 'to love ardently' },
      { h: '认出', p: 'rèn chū', v: 'nhận ra', e: 'recognition' },
      { h: '认得', p: 'rèn de', v: 'nhận ra, quen biết', e: 'to recognize' },
      { h: '认可', p: 'rèn kě', v: 'chấp nhận, công nhận', e: 'to approve' },
      { h: '任', p: 'rén', v: 'nhiệm vụ, đảm nhận', e: 'to appoint, responsibility, to allow' },
      { h: '散步', p: 'sàn bù', v: 'đi dạo', e: 'to take a walk' },
      { h: '伤', p: 'shāng', v: 'thương, chấn thương', e: 'to injure' },
      { h: '上来', p: 'shàng lái', v: 'lên đây', e: 'to come up' },
      { h: '上去', p: 'shàng qù', v: 'đi lên', e: 'to go up' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '原定的会议取消了', options: ['原定的会议取消了','明天的会议开始了','今天的活动结束了'], answer: '原定的会议取消了', py: 'Yuándìng de huìyì qǔxiāo le', explain: '听 取消 = hủy bỏ.' },
        { type: 'fill', sentence: '我想___您一个问题。', options: ['请教', '取消', '散步'], answer: '请教' },
        { type: 'fill', sentence: '原定的会议___了。', options: ['取消', '确定', '热爱'], answer: '取消' },
        { type: 'fill', sentence: '我想弄清两门课的___。', options: ['区别', '伤', '任'], answer: '区别' },
        { type: 'fill', sentence: '下课后我去___。', options: ['散步', '认出', '强调'], answer: '散步' },
        { type: 'fill', sentence: '我们办活动___他。', options: ['庆祝', '缺少', '上来'], answer: '庆祝' }
      ],
      normal: [
        { type: 'listen', audio: '我想请教您一个问题', options: ['我想请教您一个问题','我想回答这个问题','我想请您喝杯茶'], answer: '我想请教您一个问题', py: 'Wǒ xiǎng qǐngjiào nín yí gè wèntí', explain: '听 请教 = xin chỉ giáo, hỏi.' },
        { type: 'dictation', audio: '别缺课', answer: '别缺课', hint: 'Đừng nghỉ học.', py: 'Bié quē kè', explain: '缺 = thiếu; 缺课 = nghỉ học.' },
        { type: 'fill', sentence: '我想___不选错。', options: ['确保', '请教', '散步'], answer: '确保' },
        { type: 'fill', sentence: '老师___别缺课。', options: ['强调', '认得', '上去'], answer: '强调' },
        { type: 'fill', sentence: '最近我___睡眠。', options: ['缺少', '取消', '庆祝'], answer: '缺少' },
        { type: 'fill', sentence: '我一眼就___你！', options: ['认出', '热爱', '前往'], answer: '认出' },
        { type: 'fill', sentence: '你的能力大家都___。', options: ['认可', '确定', '散步'], answer: '认可' },
        { type: 'order', words: ['我', '想', '请教', '您'], answer: '我想请教您' },
        { type: 'order', words: ['两门课', '有', '区别'], answer: '两门课有区别' }
      ],
      hard: [
        { type: 'fill', sentence: '你___教务处了吗？', options: ['前往', '认得', '取消'], answer: '前往' },
        { type: 'fill', sentence: '你手上怎么有___？', options: ['伤', '任', '区别'], answer: '伤' },
        { type: 'fill', sentence: '这次___很重。', options: ['任务', '散步', '请教'], answer: '任务' },
        { type: 'fill', sentence: '我要___生活。', options: ['热爱', '取消', '缺少'], answer: '热爱' },
        { type: 'translate', prompt: 'Em muốn hỏi thầy một vấn đề.', answer: '我想请教您一个问题。' },
        { type: 'translate', prompt: 'Đảm bảo không chọn nhầm.', answer: '确保不选错。' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 83: Học tập & thi cử — 20 từ
  // 上升,设计,设立,升,生产,生存,生长,声明,胜,失去,实行,实验,使,试验,适合,适应,收费,收看,收听,受
  // ─────────────────────────────────────────────────────────────────────────
  83: {
    id: 83, level: 3,
    title: 'Học tập & thi cử',
    context: 'Trong giờ học, lớp Mai làm một thí nghiệm ngôn ngữ; thầy Lý ở quê gọi video động viên trước kỳ thi.',
    vocabPreview: ['上升', '设计', '适应', '实验', '声明'],
    objectives: [
      "Nắm nhóm từ khóa: 上升 · 设计 · 适应 · 实验 · 声明",
      "Kể/nghe hiểu tình huống Học tập & thi cử bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 上升 · 设计 · 适应",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "上升 — tăng lên, thăng tiến",
        explain: "Dùng 上升 trong ngữ cảnh Học tập & thi cử để diễn đạt: tăng lên, thăng tiến.",
        examples: [
          { zh: "我们在实验室做了一个实验，这次试验的结果不错，分数明显上升了。", py: "Wǒmen zài shíyànshì zuò le yí gè shíyàn, zhè cì shìyàn de jiéguǒ búcuò, fēnshù míngxiǎn shàngshēng le.", vi: "Tụi mình làm một thí nghiệm trong phòng lab, kết quả thử nghiệm lần này khá tốt, điểm số tăng rõ rệt." }
        ] },
      { point: "设计 — thiết kế",
        explain: "Dùng 设计 trong ngữ cảnh Học tập & thi cử để diễn đạt: thiết kế.",
        examples: [
          { zh: "对！老师设计的方法很适合我们，我也慢慢适应了这里的学习。", py: "Duì! Lǎoshī shèjì de fāngfǎ hěn shìhé wǒmen, wǒ yě mànman shìyìng le zhèlǐ de xuéxí.", vi: "Đúng! Phương pháp thầy thiết kế rất hợp với tụi mình, tớ cũng dần thích nghi với việc học ở đây." }
        ] },
      { point: "适应 — thích nghi",
        explain: "Dùng 适应 trong ngữ cảnh Học tập & thi cử để diễn đạt: thích nghi.",
        examples: [
          { zh: "对！老师设计的方法很适合我们，我也慢慢适应了这里的学习。", py: "Duì! Lǎoshī shèjì de fāngfǎ hěn shìhé wǒmen, wǒ yě mànman shìyìng le zhèlǐ de xuéxí.", vi: "Đúng! Phương pháp thầy thiết kế rất hợp với tụi mình, tớ cũng dần thích nghi với việc học ở đây." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Phòng học · Buổi sáng', bg: 'classroom', cast: ['mai', 'xiaomei'],
        text: 'Trong giờ học, lớp của Mai làm một thí nghiệm ngôn ngữ nhỏ.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我们在实验室做了一个实验，这次试验的结果不错，分数明显上升了。',
        pinyin: 'Wǒmen zài shíyànshì zuò le yí gè shíyàn, zhè cì shìyàn de jiéguǒ búcuò, fēnshù míngxiǎn shàngshēng le.',
        meaning: 'Tụi mình làm một thí nghiệm trong phòng lab, kết quả thử nghiệm lần này khá tốt, điểm số tăng rõ rệt.', expression: 'happy', vocab: ['实验', '试验', '上升'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '对！老师设计的方法很适合我们，我也慢慢适应了这里的学习。',
        pinyin: 'Duì! Lǎoshī shèjì de fāngfǎ hěn shìhé wǒmen, wǒ yě mànman shìyìng le zhèlǐ de xuéxí.',
        meaning: 'Đúng! Phương pháp thầy thiết kế rất hợp với tụi mình, tớ cũng dần thích nghi với việc học ở đây.', expression: 'focused', vocab: ['设计', '适合', '适应'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '学校还设立了奖学金。我们要珍惜，别失去机会。',
        pinyin: 'Xuéxiào hái shèlì le jiǎngxuéjīn. Wǒmen yào zhēnxī, bié shīqù jīhuì.',
        meaning: 'Trường còn thành lập học bổng. Mình phải trân trọng, đừng đánh mất cơ hội.', expression: 'focused', vocab: ['设立', '失去'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '同学们，我在收看你们的直播。学习像植物生长，需要时间。学校实行新制度了吗？',
        pinyin: 'Tóngxuémen, wǒ zài shōukàn nǐmen de zhíbō. Xuéxí xiàng zhíwù shēngzhǎng, xūyào shíjiān. Xuéxiào shíxíng xīn zhìdù le ma?',
        meaning: 'Các em, thầy đang xem buổi phát trực tiếp của các em đây. Học như cây cối sinh trưởng, cần thời gian. Trường thực hiện chế độ mới chưa?', expression: 'happy', vocab: ['收看', '生长', '实行'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'laoli'],
        text: '实行了。还有人在研究怎么生产环保材料，关系到生存环境呢。',
        pinyin: 'Shíxíng le. Hái yǒu rén zài yánjiū zěnme shēngchǎn huánbǎo cáiliào, guānxì dào shēngcún huánjìng ne.',
        meaning: 'Thực hiện rồi. Còn có người nghiên cứu cách sản xuất vật liệu thân thiện môi trường, liên quan đến môi trường sinh tồn đấy.', expression: 'focused', vocab: ['生产', '生存'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'laoli'], bg: 'classroom', scene: '📍 Phòng học', expression: 'happy',
        q: 'Mai muốn nói "Phương pháp này khiến em tiến bộ". Dùng từ nào cho "khiến"?',
        options: [
          { text: '这个方法使我进步。', pinyin: 'Zhège fāngfǎ shǐ wǒ jìnbù.', meaning: 'Phương pháp này khiến em tiến bộ.', correct: true, feedback: 'Đúng! 使 = khiến, làm cho.' },
          { text: '这个方法升我进步。', pinyin: 'Zhège fāngfǎ shēng wǒ jìnbù.', meaning: '(sai)', correct: false, feedback: '升 = thăng/tăng lên, không dùng theo nghĩa "khiến".' },
          { text: '这个方法受我进步。', pinyin: 'Zhège fāngfǎ shòu wǒ jìnbù.', meaning: '(sai)', correct: false, feedback: '受 = nhận/chịu, sai ngữ pháp ở đây.' }
        ] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '很好。考试可能收费吗？记得提前确认。学校发了一份声明，更新了考试规则。',
        pinyin: 'Hěn hǎo. Kǎoshì kěnéng shōufèi ma? Jìde tíqián quèrèn. Xuéxiào fā le yí fèn shēngmíng, gēngxīn le kǎoshì guīzé.',
        meaning: 'Tốt lắm. Thi có thể thu phí không? Nhớ xác nhận sớm. Trường đã ra một tuyên bố, cập nhật quy chế thi.', expression: 'focused', vocab: ['收费', '声明'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '我查过，不收费。我们会收听广播了解安排。明天比赛，我们一定要胜，希望大家都受到鼓励。',
        pinyin: 'Wǒ chá guò, bù shōufèi. Wǒmen huì shōutīng guǎngbō liǎojiě ānpái. Míngtiān bǐsài, wǒmen yídìng yào shèng, xīwàng dàjiā dōu shòudào gǔlì.',
        meaning: 'Em tra rồi, không thu phí. Tụi em sẽ nghe loa để nắm lịch. Mai thi đấu, tụi em nhất định phải thắng, mong mọi người đều được động viên.', expression: 'happy', vocab: ['收听', '胜', '受'] },
      { type: 'checkpoint', questions: [
        { q: '"上升" có nghĩa là gì?', options: ['tăng lên', 'mất đi', 'thu phí', 'thiết kế'], answer: 0 },
        { q: 'Từ nào nghĩa là "thích nghi"?', options: ['适合', '适应', '实行'], answer: 1 },
        { q: '"失去" có nghĩa là gì?', options: ['giành được', 'mất đi', 'sản xuất', 'tuyên bố'], answer: 1 }
      ] }
    ],
    vocab: [
      { h: '上升', p: 'shàng shēng', v: 'tăng lên, thăng tiến', e: 'to rise' },
      { h: '设计', p: 'shè jì', v: 'thiết kế', e: 'to design' },
      { h: '设立', p: 'shè lì', v: 'thành lập, thiết lập', e: 'to set up' },
      { h: '升', p: 'shēng', v: 'thăng, tăng', e: 'to ascend' },
      { h: '生产', p: 'shēng chǎn', v: 'sản xuất', e: 'to produce' },
      { h: '生存', p: 'shēng cún', v: 'sinh tồn, tồn tại', e: 'to exist' },
      { h: '生长', p: 'shēng zhǎng', v: 'sinh trưởng, phát triển', e: 'to grow' },
      { h: '声明', p: 'shēng míng', v: 'tuyên bố, thanh minh', e: 'to state' },
      { h: '胜', p: 'shèng', v: 'thắng', e: 'victory' },
      { h: '失去', p: 'shī qù', v: 'mất đi', e: 'to lose' },
      { h: '实行', p: 'shí xíng', v: 'thực hiện', e: 'to implement' },
      { h: '实验', p: 'shí yàn', v: 'thực nghiệm, thí nghiệm', e: 'experiment' },
      { h: '使', p: 'shǐ', v: 'khiến, sử dụng', e: 'to make' },
      { h: '试验', p: 'shì yàn', v: 'thực nghiệm, thử nghiệm', e: 'experiment' },
      { h: '适合', p: 'shì hé', v: 'phù hợp, thích hợp', e: 'to fit' },
      { h: '适应', p: 'shì yìng', v: 'thích nghi', e: 'to adapt' },
      { h: '收费', p: 'shōu fèi', v: 'thu phí', e: 'to charge a fee' },
      { h: '收看', p: 'shōu kàn', v: 'xem (truyền hình), theo dõi', e: 'to watch (a TV program)' },
      { h: '收听', p: 'shōu tīng', v: 'nghe (đài)', e: 'to listen to (a radio broadcast)' },
      { h: '受', p: 'shòu', v: 'nhận, chịu', e: 'to receive' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '分数明显上升了', options: ['分数明显上升了','分数慢慢下降了','成绩没有变化'], answer: '分数明显上升了', py: 'Fēnshù míngxiǎn shàngshēng le', explain: '听 上升 = tăng lên.' },
        { type: 'fill', sentence: '这次试验的分数明显___了。', options: ['上升', '失去', '收费'], answer: '上升' },
        { type: 'fill', sentence: '老师___的方法很好。', options: ['设计', '收听', '生产'], answer: '设计' },
        { type: 'fill', sentence: '我慢慢___了这里。', options: ['适应', '实行', '受'], answer: '适应' },
        { type: 'fill', sentence: '我们在实验室做___。', options: ['实验', '声明', '上升'], answer: '实验' },
        { type: 'fill', sentence: '明天比赛我们要___。', options: ['胜', '升', '使'], answer: '胜' }
      ],
      normal: [
        { type: 'listen', audio: '我慢慢适应了这里的学习', options: ['我慢慢适应了这里的学习','我很喜欢这里的老师','我还没习惯这里的生活'], answer: '我慢慢适应了这里的学习', py: 'Wǒ mànman shìyìng le zhèlǐ de xuéxí', explain: '听 适应 = thích nghi.' },
        { type: 'dictation', audio: '我查过不收费', answer: '我查过不收费', hint: 'Em tra rồi, không thu phí.', py: 'Wǒ chá guò bù shōufèi', explain: '收费 = thu phí.' },
        { type: 'fill', sentence: '学校___了奖学金。', options: ['设立', '收看', '失去'], answer: '设立' },
        { type: 'fill', sentence: '别___机会。', options: ['失去', '收费', '生长'], answer: '失去' },
        { type: 'fill', sentence: '这个方法___我进步。', options: ['使', '升', '受'], answer: '使' },
        { type: 'fill', sentence: '考试___吗？', options: ['收费', '收听', '声明'], answer: '收费' },
        { type: 'fill', sentence: '学习像植物___。', options: ['生长', '生产', '上升'], answer: '生长' },
        { type: 'order', words: ['方法', '适合', '我们', '很'], answer: '方法很适合我们' },
        { type: 'order', words: ['我们', '要', '胜', '一定'], answer: '我们一定要胜' }
      ],
      hard: [
        { type: 'fill', sentence: '学校发了一份___。', options: ['声明', '设计', '收费'], answer: '声明' },
        { type: 'fill', sentence: '研究怎么___环保材料。', options: ['生产', '生存', '上升'], answer: '生产' },
        { type: 'fill', sentence: '关系到___环境。', options: ['生存', '设立', '收听'], answer: '生存' },
        { type: 'fill', sentence: '学校___了新制度。', options: ['实行', '适合', '失去'], answer: '实行' },
        { type: 'translate', prompt: 'Phương pháp này khiến em tiến bộ.', answer: '这个方法使我进步。' },
        { type: 'translate', prompt: 'Tớ dần thích nghi với việc học ở đây.', answer: '我慢慢适应了这里的学习。' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 84: Giao tiếp & hẹn gặp — 20 từ
  // 受伤,输,输入,属,属于,束,随,谈,谈话,谈判,提前,提问,体会,体现,体验,跳,跳高,跳远,跳舞,铁
  // ─────────────────────────────────────────────────────────────────────────
  84: {
    id: 84, level: 3,
    title: 'Giao tiếp & hẹn gặp',
    context: 'Trường tổ chức ngày hội thể thao. Mai và Tiểu Mỹ tham gia nhiều môn và rút ra nhiều bài học về tinh thần đồng đội.',
    vocabPreview: ['跳舞', '受伤', '属于', '体验', '谈话'],
    objectives: [
      "Nắm nhóm từ khóa: 跳舞 · 受伤 · 属于 · 体验 · 谈话",
      "Kể/nghe hiểu tình huống Giao tiếp & hẹn gặp bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 跳舞 · 受伤 · 属于",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "跳舞 — nhảy múa",
        explain: "Dùng 跳舞 trong ngữ cảnh Giao tiếp & hẹn gặp để diễn đạt: nhảy múa.",
        examples: [
          { zh: "今天有跳高、跳远，晚上还有跳舞！", py: "Jīntiān yǒu tiàogāo, tiàoyuǎn, wǎnshang hái yǒu tiàowǔ!", vi: "Hôm nay có nhảy cao, nhảy xa, tối còn có khiêu vũ nữa!" }
        ] },
      { point: "受伤 — bị thương",
        explain: "Dùng 受伤 trong ngữ cảnh Giao tiếp & hẹn gặp để diễn đạt: bị thương.",
        examples: [
          { zh: "小心别受伤。上次你输了比赛就是因为脚伤。这次你提前训练过，体验了很多技巧吧？", py: "Xiǎoxīn bié shòushāng. Shàng cì nǐ shū le bǐsài jiùshì yīnwèi jiǎo shāng. Zhè cì nǐ tíqián xùnliàn guò, tǐyàn le hěn duō jìqiǎo ba?", vi: "Cẩn thận đừng bị thương. Lần trước cậu thua vì chấn thương chân đấy. Lần này cậu tập luyện trước rồi, trải nghiệm nhiều kỹ thuật rồi nhỉ?" }
        ] },
      { point: "属于 — thuộc về",
        explain: "Dùng 属于 trong ngữ cảnh Giao tiếp & hẹn gặp để diễn đạt: thuộc về.",
        examples: [
          { zh: "这个队属于我们组。", py: "Zhège duì shǔyú wǒmen zǔ.", vi: "Đội này thuộc về nhóm chúng ta." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Sân vận động · Ngày hội thể thao', bg: 'park', cast: ['mai', 'xiaomei'],
        text: 'Trường tổ chức ngày hội thể thao. Mai và Tiểu Mỹ tham gia nhiều môn.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '今天有跳高、跳远，晚上还有跳舞！',
        pinyin: 'Jīntiān yǒu tiàogāo, tiàoyuǎn, wǎnshang hái yǒu tiàowǔ!',
        meaning: 'Hôm nay có nhảy cao, nhảy xa, tối còn có khiêu vũ nữa!', expression: 'happy', vocab: ['跳高', '跳远', '跳舞'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '太棒了！我先去跳，热身一下。',
        pinyin: 'Tài bàng le! Wǒ xiān qù tiào, rèshēn yíxià.',
        meaning: 'Tuyệt quá! Tớ đi nhảy trước, khởi động một chút.', expression: 'happy', vocab: ['跳'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '小心别受伤。上次你输了比赛就是因为脚伤。这次你提前训练过，体验了很多技巧吧？',
        pinyin: 'Xiǎoxīn bié shòushāng. Shàng cì nǐ shū le bǐsài jiùshì yīnwèi jiǎo shāng. Zhè cì nǐ tíqián xùnliàn guò, tǐyàn le hěn duō jìqiǎo ba?',
        meaning: 'Cẩn thận đừng bị thương. Lần trước cậu thua vì chấn thương chân đấy. Lần này cậu tập luyện trước rồi, trải nghiệm nhiều kỹ thuật rồi nhỉ?', expression: 'curious', vocab: ['受伤', '输', '提前', '体验'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'park', scene: '📍 Sân vận động', expression: 'focused',
        q: 'Mai muốn nói "Đội này thuộc về nhóm chúng ta". Dùng từ "thuộc về"?',
        options: [
          { text: '这个队属于我们组。', pinyin: 'Zhège duì shǔyú wǒmen zǔ.', meaning: 'Đội này thuộc về nhóm chúng ta.', correct: true, feedback: 'Đúng! 属于 = thuộc về.' },
          { text: '这个队输入我们组。', pinyin: 'Zhège duì shūrù wǒmen zǔ.', meaning: '(sai)', correct: false, feedback: '输入 = nhập vào (dữ liệu), sai nghĩa.' },
          { text: '这个队束我们组。', pinyin: 'Zhège duì shù wǒmen zǔ.', meaning: '(sai)', correct: false, feedback: '束 = bó/ràng buộc, không dùng "thuộc về".' }
        ] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '对，我们都属同一组。靠着那边的铁栏杆休息吧。',
        pinyin: 'Duì, wǒmen dōu shǔ tóng yì zǔ. Kào zhe nàbiān de tiě lángān xiūxi ba.',
        meaning: 'Đúng, tụi mình đều thuộc cùng một nhóm. Tựa vào lan can sắt đằng kia nghỉ đi.', expression: null, vocab: ['属', '铁'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好。比赛要把名字输入系统，随你选项目。我们先谈谈策略。',
        pinyin: 'Hǎo. Bǐsài yào bǎ míngzi shūrù xìtǒng, suí nǐ xuǎn xiàngmù. Wǒmen xiān tántan cèlüè.',
        meaning: 'Được. Thi đấu phải nhập tên vào hệ thống, môn nào tùy cậu chọn. Mình bàn chiến thuật trước đã.', expression: 'focused', vocab: ['输入', '随', '谈'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '等下和对手谈判一下出场顺序。冠军还能收到一束花呢！',
        pinyin: 'Děng xià hé duìshǒu tánpàn yíxià chūchǎng shùnxù. Guànjūn hái néng shōudào yí shù huā ne!',
        meaning: 'Lát nữa thương lượng với đối thủ về thứ tự ra sân. Quán quân còn được nhận một bó hoa nữa đấy!', expression: 'happy', vocab: ['谈判', '束'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '通过这次活动，我深深体会到团队精神，也体现了大家的努力。老师在台上提问，问谁想发言。赛后教练还会找我们谈话。',
        pinyin: 'Tōngguò zhè cì huódòng, wǒ shēnshēn tǐhuì dào tuánduì jīngshén, yě tǐxiàn le dàjiā de nǔlì. Lǎoshī zài tái shàng tíwèn, wèn shéi xiǎng fāyán. Sài hòu jiàoliàn hái huì zhǎo wǒmen tánhuà.',
        meaning: 'Qua hoạt động này, tớ thấm thía tinh thần đồng đội, cũng thể hiện được nỗ lực của mọi người. Thầy trên bục đặt câu hỏi, hỏi ai muốn phát biểu. Sau trận huấn luyện viên còn trò chuyện với tụi mình.', expression: 'happy', vocab: ['体会', '体现', '提问', '谈话'] },
      { type: 'checkpoint', questions: [
        { q: '"受伤" có nghĩa là gì?', options: ['bị thương', 'nhảy múa', 'đàm phán', 'nhập vào'], answer: 0 },
        { q: 'Từ nào nghĩa là "thuộc về"?', options: ['输入', '属于', '束'], answer: 1 },
        { q: '"谈判" có nghĩa là gì?', options: ['trò chuyện phiếm', 'đàm phán, thương lượng', 'đặt câu hỏi', 'trải nghiệm'], answer: 1 }
      ] }
    ],
    vocab: [
      { h: '受伤', p: 'shòu shāng', v: 'bị thương', e: 'to sustain injuries' },
      { h: '输', p: 'shū', v: 'thua, truyền', e: 'to lose' },
      { h: '输入', p: 'shū rù', v: 'nhập vào', e: 'to import' },
      { h: '属', p: 'shǔ', v: 'thuộc về', e: 'category' },
      { h: '属于', p: 'shǔ yú', v: 'thuộc về', e: 'to be classified as' },
      { h: '束', p: 'shù', v: 'bó, ràng buộc', e: 'bundle, to tie, to restrain' },
      { h: '随', p: 'suí', v: 'theo, tùy', e: 'to follow, as one wishes, casual' },
      { h: '谈', p: 'tán', v: 'nói chuyện, đàm', e: 'to talk, to discuss, conversation' },
      { h: '谈话', p: 'tán huà', v: 'trò chuyện', e: 'to talk (with sb)' },
      { h: '谈判', p: 'tán pàn', v: 'đàm phán', e: 'to negotiate' },
      { h: '提前', p: 'tí qián', v: 'sớm hơn, đẩy sớm', e: 'to shift to an earlier date' },
      { h: '提问', p: 'tí wèn', v: 'đặt câu hỏi', e: 'to question' },
      { h: '体会', p: 'tǐ huì', v: 'cảm nhận, thấm hiểu', e: 'to know from experience' },
      { h: '体现', p: 'tǐ xiàn', v: 'thể hiện, thể hiện rõ', e: 'to embody' },
      { h: '体验', p: 'tǐ yàn', v: 'trải nghiệm', e: 'to experience for oneself' },
      { h: '跳', p: 'tiào', v: 'nhảy', e: 'to jump' },
      { h: '跳高', p: 'tiào gāo', v: 'nhảy cao', e: 'high jump (athletics)' },
      { h: '跳舞', p: 'tiào wǔ', v: 'nhảy múa', e: 'to dance' },
      { h: '跳远', p: 'tiào yuǎn', v: 'nhảy xa', e: 'long jump (athletics)' },
      { h: '铁', p: 'tiě', v: 'sắt, thép', e: 'iron, steel' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '今天有跳高跳远', options: ['今天有跳高跳远','今天有唱歌跳舞','明天有游泳比赛'], answer: '今天有跳高跳远', py: 'Jīntiān yǒu tiàogāo tiàoyuǎn', explain: '听 跳高 = nhảy cao; 跳远 = nhảy xa.' },
        { type: 'fill', sentence: '今天有跳高和___。', options: ['跳远', '受伤', '谈判'], answer: '跳远' },
        { type: 'fill', sentence: '晚上还有___。', options: ['跳舞', '输入', '提问'], answer: '跳舞' },
        { type: 'fill', sentence: '小心别___。', options: ['受伤', '体会', '属'], answer: '受伤' },
        { type: 'fill', sentence: '我先去___热身。', options: ['跳', '随', '束'], answer: '跳' },
        { type: 'fill', sentence: '上次你___了比赛。', options: ['输', '谈', '属'], answer: '输' }
      ],
      normal: [
        { type: 'listen', audio: '我们都属同一组', options: ['我们都属同一组','我们不在一个队','我们是同一个班'], answer: '我们都属同一组', py: 'Wǒmen dōu shǔ tóng yì zǔ', explain: '听 属 = thuộc về.' },
        { type: 'dictation', audio: '小心别受伤', answer: '小心别受伤', hint: 'Cẩn thận đừng bị thương.', py: 'Xiǎoxīn bié shòushāng', explain: '受伤 = bị thương.' },
        { type: 'fill', sentence: '这个队___我们组。', options: ['属于', '输入', '受伤'], answer: '属于' },
        { type: 'fill', sentence: '把名字___系统。', options: ['输入', '体验', '谈判'], answer: '输入' },
        { type: 'fill', sentence: '我提前___过了。', options: ['训练', '跳舞', '提问'], answer: '训练' },
        { type: 'fill', sentence: '我们先___策略。', options: ['谈', '束', '随'], answer: '谈' },
        { type: 'fill', sentence: '和对手___出场顺序。', options: ['谈判', '体现', '受伤'], answer: '谈判' },
        { type: 'order', words: ['这个队', '属于', '我们组'], answer: '这个队属于我们组' },
        { type: 'order', words: ['别', '小心', '受伤'], answer: '小心别受伤' }
      ],
      hard: [
        { type: 'fill', sentence: '我深深___到团队精神。', options: ['体会', '输入', '提问'], answer: '体会' },
        { type: 'fill', sentence: '这___了大家的努力。', options: ['体现', '受伤', '随'], answer: '体现' },
        { type: 'fill', sentence: '冠军能收到一___花。', options: ['束', '铁', '属'], answer: '束' },
        { type: 'fill', sentence: '老师在台上___。', options: ['提问', '跳远', '谈判'], answer: '提问' },
        { type: 'translate', prompt: 'Tụi mình đều thuộc cùng một nhóm.', answer: '我们都属于同一组。' },
        { type: 'translate', prompt: 'Cẩn thận đừng bị thương.', answer: '小心别受伤。' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 85: Điện thoại & tin nhắn — 20 từ
  // 停止,通信,同意,图,推动,推广,推进,推开,退,退出,退休,危害,围,为了,握手,希望,系,下来,下去,显得
  // ─────────────────────────────────────────────────────────────────────────
  85: {
    id: 85, level: 3,
    title: 'Điện thoại & tin nhắn',
    context: 'Mai và Tiểu Mỹ họp trực tuyến để bàn cách quảng bá câu lạc bộ khi về nước, có sự góp mặt của một khách mời và thầy Lý.',
    vocabPreview: ['推广', '同意', '握手', '希望', '为了'],
    objectives: [
      "Nắm nhóm từ khóa: 推广 · 同意 · 握手 · 希望 · 为了",
      "Kể/nghe hiểu tình huống Điện thoại & tin nhắn bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 推广 · 同意 · 握手",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "推广 — quảng bá, phổ biến",
        explain: "Dùng 推广 trong ngữ cảnh Điện thoại & tin nhắn để diễn đạt: quảng bá, phổ biến.",
        examples: [
          { zh: "为了让更多人加入，我们要推广俱乐部。", py: "Wèile ràng gèng duō rén jiārù, wǒmen yào tuīguǎng jùlèbù.", vi: "Để nhiều người tham gia hơn, mình phải quảng bá câu lạc bộ." }
        ] },
      { point: "同意 — đồng ý",
        explain: "Dùng 同意 trong ngữ cảnh Điện thoại & tin nhắn để diễn đạt: đồng ý.",
        examples: [
          { zh: "我同意。报名后如果不合适也可以退，退出的人也欢迎随时回来。", py: "Wǒ tóngyì. Bàomíng hòu rúguǒ bù héshì yě kěyǐ tuì, tuìchū de rén yě huānyíng suíshí huílái.", vi: "Tớ đồng ý. Đăng ký xong nếu không hợp thì có thể rút, người rút lui cũng hoan nghênh quay lại bất cứ lúc nào." }
        ] },
      { point: "握手 — bắt tay",
        explain: "Dùng 握手 trong ngữ cảnh Điện thoại & tin nhắn để diễn đạt: bắt tay.",
        examples: [
          { zh: "嘉宾进来了！大家站起来握手吧。这位是刚退休的老教授，他推动了很多项目。", py: "Jiābīn jìnlái le! Dàjiā zhàn qǐlái wòshǒu ba. Zhè wèi shì gāng tuìxiū de lǎo jiàoshòu, tā tuīdòng le hěn duō xiàngmù.", vi: "Khách mời vào rồi! Mọi người đứng lên bắt tay nào. Đây là vị giáo sư già vừa nghỉ hưu, thầy đã thúc đẩy rất nhiều dự án." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Phòng họp · Online', bg: 'office', cast: ['mai', 'xiaomei'],
        text: 'Hai bạn họp trực tuyến để bàn cách quảng bá câu lạc bộ khi về nước.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '为了让更多人加入，我们要推广俱乐部。',
        pinyin: 'Wèile ràng gèng duō rén jiārù, wǒmen yào tuīguǎng jùlèbù.',
        meaning: 'Để nhiều người tham gia hơn, mình phải quảng bá câu lạc bộ.', expression: 'focused', vocab: ['为了', '推广'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我画了一张图，展示推进计划。',
        pinyin: 'Wǒ huà le yì zhāng tú, zhǎnshì tuījìn jìhuà.',
        meaning: 'Tớ vẽ một sơ đồ, trình bày kế hoạch thúc đẩy.', expression: 'happy', vocab: ['图', '推进'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好。我们用通信软件联系成员，别让热情停止。',
        pinyin: 'Hǎo. Wǒmen yòng tōngxìn ruǎnjiàn liánxì chéngyuán, bié ràng rèqíng tíngzhǐ.',
        meaning: 'Được. Mình dùng phần mềm liên lạc để kết nối thành viên, đừng để nhiệt huyết dừng lại.', expression: 'focused', vocab: ['通信', '停止'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我同意。报名后如果不合适也可以退，退出的人也欢迎随时回来。',
        pinyin: 'Wǒ tóngyì. Bàomíng hòu rúguǒ bù héshì yě kěyǐ tuì, tuìchū de rén yě huānyíng suíshí huílái.',
        meaning: 'Tớ đồng ý. Đăng ký xong nếu không hợp thì có thể rút, người rút lui cũng hoan nghênh quay lại bất cứ lúc nào.', expression: null, vocab: ['同意', '退', '退出'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'office', scene: '📍 Phòng họp', expression: 'surprise',
        q: 'Một khách mời mở cửa bước vào. Dùng từ nào cho "đẩy cửa ra"?',
        options: [
          { text: '他推开门走进来。', pinyin: 'Tā tuīkāi mén zǒu jìnlái.', meaning: 'Anh ấy đẩy cửa bước vào.', correct: true, feedback: 'Đúng! 推开 = đẩy ra (cửa).' },
          { text: '他推动门走进来。', pinyin: 'Tā tuīdòng mén zǒu jìnlái.', meaning: '(kém tự nhiên)', correct: false, feedback: '推动 = thúc đẩy (trừu tượng: dự án, phong trào), không dùng cho "đẩy cửa".' },
          { text: '他退门走进来。', pinyin: 'Tā tuì mén zǒu jìnlái.', meaning: '(sai)', correct: false, feedback: '退 = lùi/rút, sai nghĩa.' }
        ] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '嘉宾进来了！大家站起来握手吧。这位是刚退休的老教授，他推动了很多项目。',
        pinyin: 'Jiābīn jìnlái le! Dàjiā zhàn qǐlái wòshǒu ba. Zhè wèi shì gāng tuìxiū de lǎo jiàoshòu, tā tuīdòng le hěn duō xiàngmù.',
        meaning: 'Khách mời vào rồi! Mọi người đứng lên bắt tay nào. Đây là vị giáo sư già vừa nghỉ hưu, thầy đã thúc đẩy rất nhiều dự án.', expression: 'happy', vocab: ['握手', '退休', '推动'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'xiaomei', 'laoli'],
        text: '希望你们坚持下去。注意网络安全，避免危害。',
        pinyin: 'Xīwàng nǐmen jiānchí xiàqù. Zhùyì wǎngluò ānquán, bìmiǎn wēihài.',
        meaning: 'Mong các em kiên trì tiếp tục. Chú ý an toàn mạng, tránh nguy hại.', expression: 'focused', vocab: ['希望', '下去', '危害'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'laoli'],
        text: '好。人群围过来了，气氛显得很热闹。我先把资料发下来给大家，这件事系着俱乐部的未来。',
        pinyin: 'Hǎo. Rénqún wéi guòlái le, qìfēn xiǎnde hěn rènao. Wǒ xiān bǎ zīliào fā xiàlái gěi dàjiā, zhè jiàn shì xì zhe jùlèbù de wèilái.',
        meaning: 'Được. Đám đông vây lại, không khí trông rất náo nhiệt. Em gửi tài liệu xuống cho mọi người trước, việc này gắn với tương lai câu lạc bộ.', expression: 'happy', vocab: ['围', '显得', '下来', '系'] },
      { type: 'checkpoint', questions: [
        { q: '"推广" có nghĩa là gì?', options: ['quảng bá, phổ biến', 'dừng lại', 'về hưu', 'bắt tay'], answer: 0 },
        { q: 'Từ nào nghĩa là "đẩy ra (cửa)"?', options: ['推动', '推开', '推进'], answer: 1 },
        { q: '"退休" có nghĩa là gì?', options: ['rút khỏi', 'về hưu', 'thúc đẩy', 'đồng ý'], answer: 1 }
      ] }
    ],
    vocab: [
      { h: '停止', p: 'tíng zhǐ', v: 'dừng lại, ngừng', e: 'to stop' },
      { h: '通信', p: 'tōng xìn', v: 'thông tin liên lạc', e: 'to correspond (by letter etc)' },
      { h: '同意', p: 'tóng yì', v: 'đồng ý', e: 'to agree' },
      { h: '图', p: 'tú', v: 'hình, sơ đồ', e: 'diagram' },
      { h: '推动', p: 'tuī dòng', v: 'thúc đẩy', e: 'to push (e.g. for acceptance of a plan)' },
      { h: '推广', p: 'tuī guǎng', v: 'quảng bá, phổ biến', e: 'to extend' },
      { h: '推进', p: 'tuī jìn', v: 'thúc đẩy, tiến tới', e: 'to impel' },
      { h: '推开', p: 'tuī kāi', v: 'đẩy ra', e: 'to push open (a gate etc)' },
      { h: '退', p: 'tuì', v: 'rút lui, trả lại', e: 'to retreat' },
      { h: '退出', p: 'tuì chū', v: 'rút khỏi', e: 'to withdraw' },
      { h: '退休', p: 'tuì xiū', v: 'về hưu, nghỉ hưu', e: 'to retire (from the workforce)' },
      { h: '危害', p: 'wēi hài', v: 'gây hại, nguy hại', e: 'to jeopardize' },
      { h: '围', p: 'wéi', v: 'bao vây, vòng quanh', e: 'to surround, enclosure, around' },
      { h: '为了', p: 'wèi le', v: 'để (mục đích)', e: 'for' },
      { h: '握手', p: 'wò shǒu', v: 'bắt tay', e: 'to shake hands' },
      { h: '希望', p: 'xī wàng', v: 'hy vọng', e: 'to hope' },
      { h: '系', p: 'xì', v: 'hệ, liên kết', e: 'to connect' },
      { h: '下来', p: 'xià lai', v: 'xuống đây', e: 'to come down' },
      { h: '下去', p: 'xià qù', v: 'đi xuống', e: 'to go down' },
      { h: '显得', p: 'xiǎn de', v: 'trông có vẻ', e: 'to seem' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '我们要推广俱乐部', options: ['我们要推广俱乐部','我们要解散俱乐部','我们要参加俱乐部'], answer: '我们要推广俱乐部', py: 'Wǒmen yào tuīguǎng jùlèbù', explain: '听 推广 = quảng bá.' },
        { type: 'fill', sentence: '我们要___俱乐部。', options: ['推广', '退休', '握手'], answer: '推广' },
        { type: 'fill', sentence: '我画了一张___。', options: ['图', '系', '围'], answer: '图' },
        { type: 'fill', sentence: '我___你的想法。', options: ['同意', '停止', '危害'], answer: '同意' },
        { type: 'fill', sentence: '大家站起来___。', options: ['握手', '推开', '退出'], answer: '握手' },
        { type: 'fill', sentence: '___更多人加入。', options: ['为了', '下去', '显得'], answer: '为了' }
      ],
      normal: [
        { type: 'listen', audio: '大家站起来握手吧', options: ['大家站起来握手吧','大家坐下来休息吧','大家排好队进去吧'], answer: '大家站起来握手吧', py: 'Dàjiā zhàn qǐlái wòshǒu ba', explain: '听 握手 = bắt tay.' },
        { type: 'dictation', audio: '我同意', answer: '我同意', hint: 'Tôi đồng ý.', py: 'Wǒ tóngyì', explain: '同意 = đồng ý.' },
        { type: 'fill', sentence: '别让热情___。', options: ['停止', '推广', '握手'], answer: '停止' },
        { type: 'fill', sentence: '用___软件联系成员。', options: ['通信', '危害', '退休'], answer: '通信' },
        { type: 'fill', sentence: '他___门走进来。', options: ['推开', '推动', '退'], answer: '推开' },
        { type: 'fill', sentence: '不合适也可以___。', options: ['退', '围', '系'], answer: '退' },
        { type: 'fill', sentence: '他是刚___的教授。', options: ['退休', '推广', '同意'], answer: '退休' },
        { type: 'order', words: ['为了', '推广', '俱乐部'], answer: '为了推广俱乐部' },
        { type: 'order', words: ['大家', '握手', '站起来'], answer: '大家站起来握手' }
      ],
      hard: [
        { type: 'fill', sentence: '展示___计划。', options: ['推进', '推开', '退出'], answer: '推进' },
        { type: 'fill', sentence: '注意安全，避免___。', options: ['危害', '通信', '同意'], answer: '危害' },
        { type: 'fill', sentence: '人群___过来了。', options: ['围', '系', '退'], answer: '围' },
        { type: 'fill', sentence: '气氛___很热闹。', options: ['显得', '停止', '握手'], answer: '显得' },
        { type: 'translate', prompt: 'Mong các em kiên trì tiếp tục.', answer: '希望你们坚持下去。' },
        { type: 'translate', prompt: 'Anh ấy đẩy cửa bước vào.', answer: '他推开门走进来。' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 86: Sức khỏe & khám bệnh — 20 từ
  // 显示,现代化,相比,相当,相关,消费,消失,写作,信任,形成,修,修改,需要,宣布,宣传,训练,压,演,演唱,演出
  // ─────────────────────────────────────────────────────────────────────────
  86: {
    id: 86, level: 3,
    title: 'Sức khỏe & khám bệnh',
    context: 'Dạo này Mai căng thẳng và mệt, em đến phòng khám gặp bác sĩ, rồi chuẩn bị cho một buổi biểu diễn.',
    vocabPreview: ['显示', '相比', '消失', '信任', '演出'],
    objectives: [
      "Nắm nhóm từ khóa: 显示 · 相比 · 消失 · 信任 · 演出",
      "Kể/nghe hiểu tình huống Sức khỏe & khám bệnh bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 显示 · 相比 · 消失",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "显示 — hiển thị, cho thấy",
        explain: "Dùng 显示 trong ngữ cảnh Sức khỏe & khám bệnh để diễn đạt: hiển thị, cho thấy.",
        examples: [
          { zh: "别担心。现代化的设备会显示你的健康数据。", py: "Bié dānxīn. Xiàndàihuà de shèbèi huì xiǎnshì nǐ de jiànkāng shùjù.", vi: "Đừng lo. Thiết bị hiện đại hóa sẽ hiển thị dữ liệu sức khỏe của em." }
        ] },
      { point: "相比 — so sánh",
        explain: "Dùng 相比 trong ngữ cảnh Sức khỏe & khám bệnh để diễn đạt: so sánh.",
        examples: [
          { zh: "和上次相比，你的指标相当正常，没有相关的疾病。", py: "Hé shàng cì xiāngbǐ, nǐ de zhǐbiāo xiāngdāng zhèngcháng, méiyǒu xiāngguān de jíbìng.", vi: "So với lần trước, các chỉ số của em khá bình thường, không có bệnh liên quan." }
        ] },
      { point: "消失 — biến mất",
        explain: "Dùng 消失 trong ngữ cảnh Sức khỏe & khám bệnh để diễn đạt: biến mất.",
        examples: [
          { zh: "可能。减少咖啡，症状会慢慢消失。你需要多休息。", py: "Kěnéng. Jiǎnshǎo kāfēi, zhèngzhuàng huì mànman xiāoshī. Nǐ xūyào duō xiūxi.", vi: "Có thể. Giảm cà phê thì triệu chứng sẽ dần biến mất. Em cần nghỉ ngơi nhiều." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Phòng khám · Buổi chiều', bg: 'clinic', cast: ['mai', 'yisheng'],
        text: 'Dạo này Mai thấy mệt và căng thẳng, em đến phòng khám.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'yisheng'],
        text: '医生，我最近压力很大，睡不好。',
        pinyin: 'Yīshēng, wǒ zuìjìn yālì hěn dà, shuì bu hǎo.',
        meaning: 'Bác sĩ ơi, dạo này em áp lực lắm, ngủ không ngon.', expression: 'sad', vocab: ['压'] },
      { type: 'dialogue', speaker: 'yisheng', cast: ['mai', 'yisheng'],
        text: '别担心。现代化的设备会显示你的健康数据。',
        pinyin: 'Bié dānxīn. Xiàndàihuà de shèbèi huì xiǎnshì nǐ de jiànkāng shùjù.',
        meaning: 'Đừng lo. Thiết bị hiện đại hóa sẽ hiển thị dữ liệu sức khỏe của em.', expression: 'focused', vocab: ['现代化', '显示'] },
      { type: 'dialogue', speaker: 'yisheng', cast: ['mai', 'yisheng'],
        text: '和上次相比，你的指标相当正常，没有相关的疾病。',
        pinyin: 'Hé shàng cì xiāngbǐ, nǐ de zhǐbiāo xiāngdāng zhèngcháng, méiyǒu xiāngguān de jíbìng.',
        meaning: 'So với lần trước, các chỉ số của em khá bình thường, không có bệnh liên quan.', expression: null, vocab: ['相比', '相当', '相关'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'yisheng'],
        text: '太好了。是不是我消费太多咖啡了？',
        pinyin: 'Tài hǎo le. Shì bu shì wǒ xiāofèi tài duō kāfēi le?',
        meaning: 'May quá. Có phải em tiêu thụ quá nhiều cà phê không ạ?', expression: 'curious', vocab: ['消费'] },
      { type: 'dialogue', speaker: 'yisheng', cast: ['mai', 'yisheng'],
        text: '可能。减少咖啡，症状会慢慢消失。你需要多休息。',
        pinyin: 'Kěnéng. Jiǎnshǎo kāfēi, zhèngzhuàng huì mànman xiāoshī. Nǐ xūyào duō xiūxi.',
        meaning: 'Có thể. Giảm cà phê thì triệu chứng sẽ dần biến mất. Em cần nghỉ ngơi nhiều.', expression: 'focused', vocab: ['消失', '需要'] },
      { type: 'choice', speaker: 'yisheng', cast: ['mai', 'yisheng'], bg: 'clinic', scene: '📍 Phòng khám', expression: 'happy',
        q: 'Bác sĩ muốn nói "Tôi tin tưởng em sẽ khỏe lại". Dùng từ "tin tưởng"?',
        options: [
          { text: '我信任你会好起来。', pinyin: 'Wǒ xìnrèn nǐ huì hǎo qǐlái.', meaning: 'Tôi tin tưởng em sẽ khỏe lại.', correct: true, feedback: 'Đúng! 信任 = tin tưởng.' },
          { text: '我形成你会好起来。', pinyin: 'Wǒ xíngchéng nǐ huì hǎo qǐlái.', meaning: '(sai)', correct: false, feedback: '形成 = hình thành, sai ngữ pháp.' },
          { text: '我修改你会好起来。', pinyin: 'Wǒ xiūgǎi nǐ huì hǎo qǐlái.', meaning: '(sai)', correct: false, feedback: '修改 = sửa đổi, sai nghĩa.' }
        ] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'yisheng'],
        text: '谢谢医生。回去我要继续写作，修改我的小说。电脑坏了，已经修好了。',
        pinyin: 'Xièxie yīshēng. Huíqù wǒ yào jìxù xiězuò, xiūgǎi wǒ de xiǎoshuō. Diànnǎo huài le, yǐjīng xiū hǎo le.',
        meaning: 'Cảm ơn bác sĩ. Về em sẽ tiếp tục viết, sửa cuốn tiểu thuyết. Máy tính hỏng, em sửa xong rồi.', expression: 'happy', vocab: ['写作', '修改', '修'] },
      { type: 'dialogue', speaker: 'yisheng', cast: ['mai', 'yisheng'],
        text: '好习惯能形成健康的生活。听说你下周还有演出？',
        pinyin: 'Hǎo xíguàn néng xíngchéng jiànkāng de shēnghuó. Tīngshuō nǐ xià zhōu hái yǒu yǎnchū?',
        meaning: 'Thói quen tốt có thể hình thành cuộc sống lành mạnh. Nghe nói tuần sau em còn có buổi diễn?', expression: 'curious', vocab: ['形成', '演出'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'yisheng'],
        text: '是的，我要演唱，得多训练。学校在宣传这次活动，校长今天还宣布我可以上台演。',
        pinyin: 'Shì de, wǒ yào yǎnchàng, děi duō xùnliàn. Xuéxiào zài xuānchuán zhè cì huódòng, xiàozhǎng jīntiān hái xuānbù wǒ kěyǐ shàng tái yǎn.',
        meaning: 'Vâng, em sẽ hát, phải tập nhiều. Trường đang tuyên truyền sự kiện này, hiệu trưởng hôm nay còn tuyên bố em được lên sân khấu diễn.', expression: 'happy', vocab: ['演唱', '训练', '宣传', '宣布', '演'] },
      { type: 'checkpoint', questions: [
        { q: '"显示" có nghĩa là gì?', options: ['hiển thị, cho thấy', 'biến mất', 'tin tưởng', 'sửa đổi'], answer: 0 },
        { q: 'Từ nào nghĩa là "biến mất"?', options: ['消费', '消失', '形成'], answer: 1 },
        { q: '"信任" có nghĩa là gì?', options: ['tin tưởng', 'hình thành', 'tuyên bố', 'huấn luyện'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '显示', p: 'xiǎn shì', v: 'hiển thị, cho thấy', e: 'to show' },
      { h: '现代化', p: 'xiàn dài huà', v: 'hiện đại hóa', e: 'modernization' },
      { h: '相比', p: 'xiāng bǐ', v: 'so sánh', e: 'to compare' },
      { h: '相当', p: 'xiāng dāng', v: 'khá, tương đương', e: 'equivalent to' },
      { h: '相关', p: 'xiāng guān', v: 'liên quan', e: 'related' },
      { h: '消费', p: 'xiāo fèi', v: 'tiêu dùng', e: 'to consume' },
      { h: '消失', p: 'xiāo shī', v: 'biến mất', e: 'to disappear' },
      { h: '写作', p: 'xiě zuò', v: 'viết lách, sáng tác', e: 'to write' },
      { h: '信任', p: 'xìn rèn', v: 'tin tưởng', e: 'to trust' },
      { h: '形成', p: 'xíng chéng', v: 'hình thành', e: 'to form' },
      { h: '修', p: 'xiū', v: 'sửa, tu bổ', e: 'to repair, to fix, to cultivate' },
      { h: '修改', p: 'xiū gǎi', v: 'sửa đổi', e: 'to amend' },
      { h: '需要', p: 'xū yào', v: 'cần, nhu cầu', e: 'to need' },
      { h: '宣布', p: 'xuān bù', v: 'tuyên bố', e: 'to declare' },
      { h: '宣传', p: 'xuān chuán', v: 'tuyên truyền, quảng bá', e: 'to disseminate' },
      { h: '训练', p: 'xùn liàn', v: 'huấn luyện', e: 'to train' },
      { h: '压', p: 'yā', v: 'ép, áp lực', e: 'to press' },
      { h: '演', p: 'yǎn', v: 'diễn, biểu diễn', e: 'to develop' },
      { h: '演唱', p: 'yǎn chàng', v: 'ca hát, biểu diễn', e: 'sung performance' },
      { h: '演出', p: 'yǎn chū', v: 'biểu diễn', e: 'to act (in a play)' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '我最近压力很大', options: ['我最近压力很大','我最近心情很好','我最近身体很好'], answer: '我最近压力很大', py: 'Wǒ zuìjìn yālì hěn dà', explain: '听 压力 = áp lực.' },
        { type: 'fill', sentence: '我最近___很大。', options: ['压', '修', '演'], answer: '压' },
        { type: 'fill', sentence: '设备会___健康数据。', options: ['显示', '消失', '宣布'], answer: '显示' },
        { type: 'fill', sentence: '症状会慢慢___。', options: ['消失', '相当', '训练'], answer: '消失' },
        { type: 'fill', sentence: '你___多休息。', options: ['需要', '相关', '演唱'], answer: '需要' },
        { type: 'fill', sentence: '下周我有___。', options: ['演出', '相比', '修改'], answer: '演出' }
      ],
      normal: [
        { type: 'listen', audio: '减少咖啡症状会消失', options: ['减少咖啡症状会消失','多喝咖啡对身体好','喝咖啡可以提神'], answer: '减少咖啡症状会消失', py: 'Jiǎnshǎo kāfēi zhèngzhuàng huì xiāoshī', explain: '听 消失 = biến mất.' },
        { type: 'dictation', audio: '电脑已经修好了', answer: '电脑已经修好了', hint: 'Máy tính sửa xong rồi.', py: 'Diànnǎo yǐjīng xiū hǎo le', explain: '修 = sửa.' },
        { type: 'fill', sentence: '和上次___，指标正常。', options: ['相比', '消费', '形成'], answer: '相比' },
        { type: 'fill', sentence: '你的指标___正常。', options: ['相当', '显示', '宣传'], answer: '相当' },
        { type: 'fill', sentence: '没有___的疾病。', options: ['相关', '消失', '训练'], answer: '相关' },
        { type: 'fill', sentence: '我___太多咖啡了。', options: ['消费', '修改', '演唱'], answer: '消费' },
        { type: 'fill', sentence: '我要___我的小说。', options: ['修改', '显示', '宣布'], answer: '修改' },
        { type: 'order', words: ['症状', '会', '消失', '慢慢'], answer: '症状会慢慢消失' },
        { type: 'order', words: ['你', '需要', '休息', '多'], answer: '你需要多休息' }
      ],
      hard: [
        { type: 'fill', sentence: '好习惯能___健康生活。', options: ['形成', '消费', '显示'], answer: '形成' },
        { type: 'fill', sentence: '学校在___这次活动。', options: ['宣传', '相当', '修'], answer: '宣传' },
        { type: 'fill', sentence: '校长___我可以上台。', options: ['宣布', '消失', '相比'], answer: '宣布' },
        { type: 'fill', sentence: '我要___，得多练习。', options: ['演唱', '相关', '需要'], answer: '演唱' },
        { type: 'translate', prompt: 'Tôi tin tưởng em sẽ khỏe lại.', answer: '我信任你会好起来。' },
        { type: 'translate', prompt: 'So với lần trước, các chỉ số khá bình thường.', answer: '和上次相比，指标相当正常。' }
      ]
    }
  }

});

// ───────────────────────────────────────────────────────
// BATCH 4 — Bài 87-91 (Sở thích · Tương lai · Tổng kết arc · Từ chức năng 1-2)
// ───────────────────────────────────────────────────────
Object.assign(COURSE_DATA, {

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 87: Sở thích & giải trí — 20 từ
  // 要是,应当,应用,迎接,赢,由,游,游戏,游泳,预报,预防,预计,预习,运输,造,造成,增加,增长,展开,张
  // ─────────────────────────────────────────────────────────────────────────
  87: {
    id: 87, level: 3,
    title: 'Sở thích & giải trí',
    context: 'Cuối tuần rảnh, Mai và Tiểu Mỹ lên kế hoạch đi bơi và vui chơi, sau khi xem dự báo thời tiết.',
    vocabPreview: ['预报', '游泳', '要是', '赢', '增加'],
    objectives: [
      "Nắm nhóm từ khóa: 预报 · 游泳 · 要是 · 赢 · 增加",
      "Kể/nghe hiểu tình huống Sở thích & giải trí bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 预报 · 游泳 · 要是",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "预报 — dự báo",
        explain: "Dùng 预报 trong ngữ cảnh Sở thích & giải trí để diễn đạt: dự báo.",
        examples: [
          { zh: "天气预报说今天晴天，要是不下雨，我们去游泳吧！", py: "Tiānqì yùbào shuō jīntiān qíngtiān, yàoshi bú xiàyǔ, wǒmen qù yóuyǒng ba!", vi: "Dự báo thời tiết nói hôm nay nắng, nếu không mưa thì mình đi bơi nhé!" }
        ] },
      { point: "游泳 — bơi lội",
        explain: "Dùng 游泳 trong ngữ cảnh Sở thích & giải trí để diễn đạt: bơi lội.",
        examples: [
          { zh: "天气预报说今天晴天，要是不下雨，我们去游泳吧！", py: "Tiānqì yùbào shuō jīntiān qíngtiān, yàoshi bú xiàyǔ, wǒmen qù yóuyǒng ba!", vi: "Dự báo thời tiết nói hôm nay nắng, nếu không mưa thì mình đi bơi nhé!" }
        ] },
      { point: "要是 — nếu như",
        explain: "Dùng 要是 trong ngữ cảnh Sở thích & giải trí để diễn đạt: nếu như.",
        examples: [
          { zh: "天气预报说今天晴天，要是不下雨，我们去游泳吧！", py: "Tiānqì yùbào shuō jīntiān qíngtiān, yàoshi bú xiàyǔ, wǒmen qù yóuyǒng ba!", vi: "Dự báo thời tiết nói hôm nay nắng, nếu không mưa thì mình đi bơi nhé!" }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Công viên ven hồ · Cuối tuần', bg: 'park', cast: ['mai', 'xiaomei'],
        text: 'Cuối tuần rảnh, Mai và Tiểu Mỹ lên kế hoạch vui chơi.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '天气预报说今天晴天，要是不下雨，我们去游泳吧！',
        pinyin: 'Tiānqì yùbào shuō jīntiān qíngtiān, yàoshi bú xiàyǔ, wǒmen qù yóuyǒng ba!',
        meaning: 'Dự báo thời tiết nói hôm nay nắng, nếu không mưa thì mình đi bơi nhé!', expression: 'happy', vocab: ['预报', '要是', '游泳'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好！游完泳还可以玩游戏。不过先涂防晒，预防晒伤。',
        pinyin: 'Hǎo! Yóu wán yǒng hái kěyǐ wán yóuxì. Búguò xiān tú fángshài, yùfáng shàishāng.',
        meaning: 'Được! Bơi xong còn chơi game được. Nhưng bôi kem chống nắng trước, phòng ngừa cháy nắng.', expression: 'happy', vocab: ['游', '游戏', '预防'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '应当带够水。听说湖边新造了一个游乐场，预计人会很多。手机上有个应用可以查路线。',
        pinyin: 'Yīngdāng dài gòu shuǐ. Tīngshuō húbiān xīn zào le yí gè yóulèchǎng, yùjì rén huì hěn duō. Shǒujī shàng yǒu gè yìngyòng kěyǐ chá lùxiàn.',
        meaning: 'Nên mang đủ nước. Nghe nói ven hồ mới làm một khu vui chơi, dự tính sẽ đông người. Trên điện thoại có một ứng dụng tra được đường đi.', expression: 'focused', vocab: ['应当', '造', '预计', '应用'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'park', scene: '📍 Công viên', expression: 'happy',
        q: 'Đội của hai bạn vừa thắng trận hôm qua. Mai muốn nói "Tụi mình đã thắng rồi!". Dùng từ "thắng"?',
        options: [
          { text: '我们赢了！', pinyin: 'Wǒmen yíng le!', meaning: 'Tụi mình thắng rồi!', correct: true, feedback: 'Đúng! 赢 = thắng (trận đấu, cuộc thi).' },
          { text: '我们游了！', pinyin: 'Wǒmen yóu le!', meaning: '(sai)', correct: false, feedback: '游 = bơi/du ngoạn, sai nghĩa.' },
          { text: '我们造了！', pinyin: 'Wǒmen zào le!', meaning: '(sai)', correct: false, feedback: '造 = chế tạo/làm ra, sai nghĩa.' }
        ] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '对，我们赢了！这场胜利由大家共同努力得来。门口还有人在迎接游客呢。',
        pinyin: 'Duì, wǒmen yíng le! Zhè chǎng shènglì yóu dàjiā gòngtóng nǔlì délái. Ménkǒu hái yǒu rén zài yíngjiē yóukè ne.',
        meaning: 'Đúng, tụi mình thắng rồi! Chiến thắng này do mọi người cùng nỗ lực mà có. Ở cổng còn có người đón khách nữa.', expression: 'happy', vocab: ['赢', '由', '迎接'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '人多会增加排队时间，也可能造成拥挤。',
        pinyin: 'Rén duō huì zēngjiā páiduì shíjiān, yě kěnéng zàochéng yōngjǐ.',
        meaning: 'Đông người sẽ tăng thời gian xếp hàng, cũng có thể gây ra chen chúc.', expression: null, vocab: ['增加', '造成'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '没关系。最近来玩的人不断增长，说明这里很受欢迎。',
        pinyin: 'Méi guānxi. Zuìjìn lái wán de rén búduàn zēngzhǎng, shuōmíng zhèlǐ hěn shòu huānyíng.',
        meaning: 'Không sao. Gần đây lượng khách đến chơi tăng trưởng liên tục, chứng tỏ nơi này được ưa chuộng.', expression: 'happy', vocab: ['增长'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我们把地图展开看看。运输工具坐地铁最方便。我先预习一下路线，给我那张地图。',
        pinyin: 'Wǒmen bǎ dìtú zhǎnkāi kànkan. Yùnshū gōngjù zuò dìtiě zuì fāngbiàn. Wǒ xiān yùxí yíxià lùxiàn, gěi wǒ nà zhāng dìtú.',
        meaning: 'Mình mở bản đồ ra xem nào. Phương tiện vận chuyển thì đi tàu điện tiện nhất. Tớ xem trước lộ trình, đưa tớ tấm bản đồ đó.', expression: 'focused', vocab: ['展开', '运输', '预习', '张'] },
      { type: 'checkpoint', questions: [
        { q: '"预报" có nghĩa là gì?', options: ['dự báo', 'thắng', 'tăng thêm', 'đón chào'], answer: 0 },
        { q: 'Từ nào nghĩa là "phòng ngừa"?', options: ['预防', '预计', '预习'], answer: 0 },
        { q: '"造成" có nghĩa là gì?', options: ['gây ra, tạo nên', 'bơi lội', 'dự tính', 'tăng trưởng'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '要是', p: 'yào shi', v: 'nếu như', e: 'if' },
      { h: '应当', p: 'yīng dāng', v: 'nên, phải', e: 'should' },
      { h: '应用', p: 'yìng yòng', v: 'ứng dụng', e: 'to put to use' },
      { h: '迎接', p: 'yíng jiē', v: 'đón chào', e: 'to welcome' },
      { h: '赢', p: 'yíng', v: 'thắng', e: 'to beat' },
      { h: '由', p: 'yóu', v: 'do, vì', e: 'to follow' },
      { h: '游', p: 'yóu', v: 'bơi, du ngoạn', e: 'to swim, to tour, to roam' },
      { h: '游戏', p: 'yóu xì', v: 'trò chơi', e: 'game' },
      { h: '游泳', p: 'yóu yǒng', v: 'bơi lội', e: 'swimming' },
      { h: '预报', p: 'yù bào', v: 'dự báo', e: 'forecast' },
      { h: '预防', p: 'yù fáng', v: 'phòng ngừa', e: 'to prevent' },
      { h: '预计', p: 'yù jì', v: 'dự tính, dự kiến', e: 'to forecast' },
      { h: '预习', p: 'yù xí', v: 'chuẩn bị bài trước', e: 'to prepare a lesson' },
      { h: '运输', p: 'yùn shū', v: 'vận chuyển', e: 'to transport' },
      { h: '造', p: 'zào', v: 'làm, chế tạo', e: 'to make' },
      { h: '造成', p: 'zào chéng', v: 'gây ra, tạo nên', e: 'to bring about' },
      { h: '增加', p: 'zēng jiā', v: 'tăng thêm', e: 'to raise' },
      { h: '增长', p: 'zēng zhǎng', v: 'tăng trưởng', e: 'to grow' },
      { h: '展开', p: 'zhǎn kāi', v: 'triển khai, mở ra', e: 'to unfold' },
      { h: '张', p: 'zhāng', v: 'tờ (lượng từ); trải ra', e: 'to spread, classifier for flat objects' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '我们去游泳吧', options: ['我们去游泳吧','我们去爬山吧','我们去打球吧'], answer: '我们去游泳吧', py: 'Wǒmen qù yóuyǒng ba', explain: '听 游泳 = bơi lội.' },
        { type: 'fill', sentence: '天气___说今天晴天。', options: ['预报', '增加', '迎接'], answer: '预报' },
        { type: 'fill', sentence: '我们去___吧！', options: ['游泳', '运输', '展开'], answer: '游泳' },
        { type: 'fill', sentence: '___不下雨就去。', options: ['要是', '由', '造'], answer: '要是' },
        { type: 'fill', sentence: '游完泳玩___。', options: ['游戏', '预报', '增长'], answer: '游戏' },
        { type: 'fill', sentence: '我们___了比赛！', options: ['赢', '游', '造'], answer: '赢' }
      ],
      normal: [
        { type: 'listen', audio: '人多会增加排队时间', options: ['人多会增加排队时间','人少就不用排队了','今天人不算太多'], answer: '人多会增加排队时间', py: 'Rén duō huì zēngjiā páiduì shíjiān', explain: '听 增加 = tăng thêm.' },
        { type: 'dictation', audio: '应当带够水', answer: '应当带够水', hint: 'Nên mang đủ nước.', py: 'Yīngdāng dài gòu shuǐ', explain: '应当 = nên, phải.' },
        { type: 'fill', sentence: '先涂防晒，___晒伤。', options: ['预防', '迎接', '展开'], answer: '预防' },
        { type: 'fill', sentence: '人多会___排队时间。', options: ['增加', '应当', '由'], answer: '增加' },
        { type: 'fill', sentence: '可能___拥挤。', options: ['造成', '预计', '游'], answer: '造成' },
        { type: 'fill', sentence: '来玩的人不断___。', options: ['增长', '运输', '迎接'], answer: '增长' },
        { type: 'fill', sentence: '我们把地图___看看。', options: ['展开', '预防', '赢'], answer: '展开' },
        { type: 'order', words: ['我们', '去', '游泳', '吧'], answer: '我们去游泳吧' },
        { type: 'order', words: ['这场', '胜利', '由', '大家', '努力得来'], answer: '这场胜利由大家努力得来' }
      ],
      hard: [
        { type: 'fill', sentence: '___带够水。', options: ['应当', '由', '张'], answer: '应当' },
        { type: 'fill', sentence: '___人会很多。', options: ['预计', '增加', '造成'], answer: '预计' },
        { type: 'fill', sentence: '我先___一下路线。', options: ['预习', '迎接', '游'], answer: '预习' },
        { type: 'fill', sentence: '手机上有个___可以查路线。', options: ['应用', '运输', '预报'], answer: '应用' },
        { type: 'translate', prompt: 'Nếu không mưa thì mình đi bơi.', answer: '要是不下雨，我们去游泳。' },
        { type: 'translate', prompt: 'Đông người có thể gây ra chen chúc.', answer: '人多可能造成拥挤。' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 88: Kế hoạch tương lai — 20 từ
  // 照,争,争取,整理,证明,支,支持,支付,直播,直到,值得,只是,只有,指,指出,指导,志愿,制定,制造,制作
  // ─────────────────────────────────────────────────────────────────────────
  88: {
    id: 88, level: 3,
    title: 'Kế hoạch tương lai',
    context: 'Mai lập kế hoạch cho tương lai sau khi du học, được mẹ ủng hộ và thầy cô hướng dẫn.',
    vocabPreview: ['制定', '争取', '支持', '指导', '值得'],
    objectives: [
      "Nắm nhóm từ khóa: 制定 · 争取 · 支持 · 指导 · 值得",
      "Kể/nghe hiểu tình huống Kế hoạch tương lai bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 制定 · 争取 · 支持",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "制定 — lập ra, ban hành",
        explain: "Dùng 制定 trong ngữ cảnh Kế hoạch tương lai để diễn đạt: lập ra, ban hành.",
        examples: [
          { zh: "我整理了资料，制定了一个学习计划。", py: "Wǒ zhěnglǐ le zīliào, zhìdìng le yí gè xuéxí jìhuà.", vi: "Tớ đã sắp xếp tài liệu, lập một kế hoạch học tập." }
        ] },
      { point: "争取 — tranh thủ, phấn đấu",
        explain: "Dùng 争取 trong ngữ cảnh Kế hoạch tương lai để diễn đạt: tranh thủ, phấn đấu.",
        examples: [
          { zh: "好。你要争取奖学金吗？", py: "Hǎo. Nǐ yào zhēngqǔ jiǎngxuéjīn ma?", vi: "Hay đó. Cậu muốn phấn đấu giành học bổng không?" }
        ] },
      { point: "支持 — ủng hộ, hỗ trợ",
        explain: "Dùng 支持 trong ngữ cảnh Kế hoạch tương lai để diễn đạt: ủng hộ, hỗ trợ.",
        examples: [
          { zh: "妈妈支持你！钱的事别担心，学费我来支付。", py: "Māma zhīchí nǐ! Qián de shì bié dānxīn, xuéfèi wǒ lái zhīfù.", vi: "Mẹ ủng hộ con! Chuyện tiền đừng lo, học phí mẹ thanh toán." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Ký túc xá · Buổi tối', bg: 'dorm-room', cast: ['mai', 'xiaomei'],
        text: 'Mai bắt đầu lên kế hoạch cho tương lai sau khi du học.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我整理了资料，制定了一个学习计划。',
        pinyin: 'Wǒ zhěnglǐ le zīliào, zhìdìng le yí gè xuéxí jìhuà.',
        meaning: 'Tớ đã sắp xếp tài liệu, lập một kế hoạch học tập.', expression: 'focused', vocab: ['整理', '制定'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '好。你要争取奖学金吗？',
        pinyin: 'Hǎo. Nǐ yào zhēngqǔ jiǎngxuéjīn ma?',
        meaning: 'Hay đó. Cậu muốn phấn đấu giành học bổng không?', expression: 'curious', vocab: ['争取'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '对，我会争。只有努力才能成功。',
        pinyin: 'Duì, wǒ huì zhēng. Zhǐyǒu nǔlì cáinéng chénggōng.',
        meaning: 'Đúng, tớ sẽ phấn đấu. Chỉ có nỗ lực mới thành công.', expression: 'focused', vocab: ['争', '只有'] },
      { type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '妈妈支持你！钱的事别担心，学费我来支付。',
        pinyin: 'Māma zhīchí nǐ! Qián de shì bié dānxīn, xuéfèi wǒ lái zhīfù.',
        meaning: 'Mẹ ủng hộ con! Chuyện tiền đừng lo, học phí mẹ thanh toán.', expression: 'happy', vocab: ['支持', '支付'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '谢谢妈妈。这份努力值得，我只是有点紧张。',
        pinyin: 'Xièxie māma. Zhè fèn nǔlì zhíde, wǒ zhǐshì yǒudiǎn jǐnzhāng.',
        meaning: 'Cảm ơn mẹ. Nỗ lực này xứng đáng, con chỉ là hơi lo lắng thôi.', expression: 'happy', vocab: ['值得', '只是'] },
      { type: 'choice', speaker: 'mama', cast: ['mai', 'mama'], bg: 'dorm-room', scene: '📍 Cuộc gọi video', expression: 'happy',
        q: 'Mẹ muốn nói "Thành tích chứng minh nỗ lực của con". Dùng từ "chứng minh"?',
        options: [
          { text: '成绩证明了你的努力。', pinyin: 'Chéngjì zhèngmíng le nǐ de nǔlì.', meaning: 'Thành tích chứng minh nỗ lực của con.', correct: true, feedback: 'Đúng! 证明 = chứng minh.' },
          { text: '成绩指出了你的努力。', pinyin: 'Chéngjì zhǐchū le nǐ de nǔlì.', meaning: '(kém hợp)', correct: false, feedback: '指出 = chỉ ra (vấn đề, điểm cụ thể), không hợp "chứng minh nỗ lực".' },
          { text: '成绩制造了你的努力。', pinyin: 'Chéngjì zhìzào le nǐ de nǔlì.', meaning: '(sai)', correct: false, feedback: '制造 = chế tạo/sản xuất, sai nghĩa.' }
        ] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '老师也指出我的不足，给了我很多指导。',
        pinyin: 'Lǎoshī yě zhǐchū wǒ de bùzú, gěi le wǒ hěn duō zhǐdǎo.',
        meaning: 'Thầy cô cũng chỉ ra thiếu sót của tớ, cho tớ nhiều hướng dẫn.', expression: null, vocab: ['指出', '指导'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你报志愿服务了吗？老师常用手指着地图给我们讲。',
        pinyin: 'Nǐ bào zhìyuàn fúwù le ma? Lǎoshī cháng yòng shǒu zhǐ zhe dìtú gěi wǒmen jiǎng.',
        meaning: 'Cậu đăng ký hoạt động tình nguyện chưa? Thầy hay dùng tay chỉ vào bản đồ giảng cho tụi mình.', expression: 'curious', vocab: ['志愿', '指'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '报了。我想自己制作、制造一些小礼物义卖，还能开个直播，从晚上一直到深夜。',
        pinyin: 'Bào le. Wǒ xiǎng zìjǐ zhìzuò, zhìzào yìxiē xiǎo lǐwù yìmài, hái néng kāi gè zhíbō, cóng wǎnshang yìzhí dào shēnyè.',
        meaning: 'Đăng ký rồi. Tớ muốn tự làm, chế tác vài món quà nhỏ để bán gây quỹ, còn mở livestream, từ tối đến tận khuya.', expression: 'happy', vocab: ['制作', '制造', '直播', '直到'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我拍张照留念。义卖摊位我们用竹子支起来吧。',
        pinyin: 'Wǒ pāi zhāng zhào liúniàn. Yìmài tānwèi wǒmen yòng zhúzi zhī qǐlái ba.',
        meaning: 'Tớ chụp tấm ảnh làm kỷ niệm. Quầy bán mình lấy tre chống dựng lên nhé.', expression: 'happy', vocab: ['照', '支'] },
      { type: 'checkpoint', questions: [
        { q: '"制定" (kế hoạch) có nghĩa là gì?', options: ['lập ra, ban hành', 'thanh toán', 'chứng minh', 'sắp xếp'], answer: 0 },
        { q: 'Từ nào nghĩa là "ủng hộ, hỗ trợ"?', options: ['支付', '支持', '支'], answer: 1 },
        { q: '"值得" có nghĩa là gì?', options: ['đáng giá', 'chỉ là', 'tranh thủ', 'hướng dẫn'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '照', p: 'zhào', v: 'chiếu sáng, chụp', e: 'to shine, to photograph, according to' },
      { h: '争', p: 'zhēng', v: 'tranh giành, đấu tranh', e: 'to strive for' },
      { h: '争取', p: 'zhēng qǔ', v: 'tranh thủ, phấn đấu', e: 'to fight for' },
      { h: '整理', p: 'zhěng lǐ', v: 'sắp xếp, chỉnh lý', e: 'to arrange' },
      { h: '证明', p: 'zhèng míng', v: 'chứng minh', e: 'proof' },
      { h: '支', p: 'zhī', v: 'chống đỡ, nhánh', e: 'branch, to support, classifier for long objects' },
      { h: '支持', p: 'zhī chí', v: 'ủng hộ, hỗ trợ', e: 'to be in favor of' },
      { h: '支付', p: 'zhī fù', v: 'thanh toán', e: 'to pay (money)' },
      { h: '直播', p: 'zhí bō', v: 'phát sóng trực tiếp', e: 'to broadcast live' },
      { h: '直到', p: 'zhí dào', v: 'cho đến khi', e: 'until' },
      { h: '值得', p: 'zhí de', v: 'đáng giá', e: 'to be worth' },
      { h: '只是', p: 'zhǐ shì', v: 'chỉ là', e: 'merely' },
      { h: '只有', p: 'zhǐ yǒu', v: 'chỉ có', e: 'only have ...' },
      { h: '指', p: 'zhǐ', v: 'ngón tay, chỉ', e: 'finger' },
      { h: '指出', p: 'zhǐ chū', v: 'chỉ ra', e: 'to indicate' },
      { h: '指导', p: 'zhǐ dǎo', v: 'chỉ đạo, hướng dẫn', e: 'to guide' },
      { h: '志愿', p: 'zhì yuàn', v: 'nguyện vọng, tình nguyện', e: 'aspiration' },
      { h: '制定', p: 'zhì dìng', v: 'lập ra, ban hành', e: 'to draw up' },
      { h: '制造', p: 'zhì zào', v: 'chế tạo, sản xuất', e: 'to manufacture' },
      { h: '制作', p: 'zhì zuò', v: 'sản xuất, làm ra', e: 'to make' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '我制定了一个学习计划', options: ['我制定了一个学习计划','我完成了今天的作业','我准备了一些礼物'], answer: '我制定了一个学习计划', py: 'Wǒ zhìdìng le yí gè xuéxí jìhuà', explain: '听 制定 = lập (kế hoạch).' },
        { type: 'fill', sentence: '我___了一个学习计划。', options: ['制定', '支付', '证明'], answer: '制定' },
        { type: 'fill', sentence: '你要___奖学金吗？', options: ['争取', '整理', '指出'], answer: '争取' },
        { type: 'fill', sentence: '妈妈___你！', options: ['支持', '制造', '直播'], answer: '支持' },
        { type: 'fill', sentence: '学费我来___。', options: ['支付', '指导', '争'], answer: '支付' },
        { type: 'fill', sentence: '这份努力很___。', options: ['值得', '只是', '照'], answer: '值得' }
      ],
      normal: [
        { type: 'listen', audio: '学费我来支付', options: ['学费我来支付','学费你自己交','钱的事别担心'], answer: '学费我来支付', py: 'Xuéfèi wǒ lái zhīfù', explain: '听 支付 = thanh toán.' },
        { type: 'dictation', audio: '这份努力值得', answer: '这份努力值得', hint: 'Nỗ lực này xứng đáng.', py: 'Zhè fèn nǔlì zhíde', explain: '值得 = đáng giá.' },
        { type: 'fill', sentence: '___努力才能成功。', options: ['只有', '只是', '直到'], answer: '只有' },
        { type: 'fill', sentence: '老师___我的不足。', options: ['指出', '支付', '整理'], answer: '指出' },
        { type: 'fill', sentence: '老师给了我很多___。', options: ['指导', '制造', '争取'], answer: '指导' },
        { type: 'fill', sentence: '我报了___服务。', options: ['志愿', '直播', '证明'], answer: '志愿' },
        { type: 'fill', sentence: '我想自己___小礼物。', options: ['制作', '支持', '指'], answer: '制作' },
        { type: 'order', words: ['只有', '努力', '成功', '才能'], answer: '只有努力才能成功' },
        { type: 'order', words: ['妈妈', '支持', '你'], answer: '妈妈支持你' }
      ],
      hard: [
        { type: 'fill', sentence: '成绩___了你的努力。', options: ['证明', '制造', '整理'], answer: '证明' },
        { type: 'fill', sentence: '开个___义卖。', options: ['直播', '支付', '志愿'], answer: '直播' },
        { type: 'fill', sentence: '老师用手___地图。', options: ['指', '照', '争'], answer: '指' },
        { type: 'fill', sentence: '从晚上___深夜。', options: ['直到', '只是', '支'], answer: '直到' },
        { type: 'translate', prompt: 'Chỉ có nỗ lực mới thành công.', answer: '只有努力才能成功。' },
        { type: 'translate', prompt: 'Thành tích chứng minh nỗ lực của con.', answer: '成绩证明了你的努力。' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 89: Hành động tổng hợp — 17 từ
  // 种,主持,主张,注意,祝,抓,抓住,转,转变,追,自主,总结,总是,足够,组合,左右,做客
  // ─────────────────────────────────────────────────────────────────────────
  89: {
    id: 89, level: 3,
    title: 'Hành động tổng hợp',
    context: 'Sắp kết thúc kỳ trao đổi, nhóm tổ chức buổi liên hoan chia tay và cùng nhìn lại hành trình.',
    vocabPreview: ['主持', '总结', '转变', '抓住', '祝'],
    objectives: [
      "Nắm nhóm từ khóa: 主持 · 总结 · 转变 · 抓住 · 祝",
      "Kể/nghe hiểu tình huống Hành động tổng hợp bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 主持 · 总结 · 转变",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "主持 — chủ trì, dẫn chương trình",
        explain: "Dùng 主持 trong ngữ cảnh Hành động tổng hợp để diễn đạt: chủ trì, dẫn chương trình.",
        examples: [
          { zh: "今晚的晚会由你主持，好吗？", py: "Jīnwǎn de wǎnhuì yóu nǐ zhǔchí, hǎo ma?", vi: "Buổi tối nay do cậu dẫn chương trình, được không?" }
        ] },
      { point: "总结 — tổng kết",
        explain: "Dùng 总结 trong ngữ cảnh Hành động tổng hợp để diễn đạt: tổng kết.",
        examples: [
          { zh: "好。我主张大家轮流发言，总结这次经历。", py: "Hǎo. Wǒ zhǔzhāng dàjiā lúnliú fāyán, zǒngjié zhè cì jīnglì.", vi: "Được. Tớ đề xuất mọi người lần lượt phát biểu, tổng kết trải nghiệm lần này." }
        ] },
      { point: "转变 — chuyển biến, thay đổi",
        explain: "Dùng 转变 trong ngữ cảnh Hành động tổng hợp để diễn đạt: chuyển biến, thay đổi.",
        examples: [
          { zh: "这次旅程让我转变了很多，我变得更自主了。", py: "Zhè cì lǚchéng ràng wǒ zhuǎnbiàn le hěn duō, wǒ biàn de gèng zìzhǔ le.", vi: "Chuyến đi này khiến tớ thay đổi nhiều, tớ trở nên tự chủ hơn." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Nhà hàng · Tiệc chia tay', bg: 'restaurant', cast: ['mai', 'xiaomei'],
        text: 'Sắp kết thúc kỳ trao đổi, nhóm tổ chức một buổi liên hoan chia tay.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '今晚的晚会由你主持，好吗？',
        pinyin: 'Jīnwǎn de wǎnhuì yóu nǐ zhǔchí, hǎo ma?',
        meaning: 'Buổi tối nay do cậu dẫn chương trình, được không?', expression: 'curious', vocab: ['主持'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好。我主张大家轮流发言，总结这次经历。',
        pinyin: 'Hǎo. Wǒ zhǔzhāng dàjiā lúnliú fāyán, zǒngjié zhè cì jīnglì.',
        meaning: 'Được. Tớ đề xuất mọi người lần lượt phát biểu, tổng kết trải nghiệm lần này.', expression: 'focused', vocab: ['主张', '总结'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这次旅程让我转变了很多，我变得更自主了。',
        pinyin: 'Zhè cì lǚchéng ràng wǒ zhuǎnbiàn le hěn duō, wǒ biàn de gèng zìzhǔ le.',
        meaning: 'Chuyến đi này khiến tớ thay đổi nhiều, tớ trở nên tự chủ hơn.', expression: 'happy', vocab: ['转变', '自主'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '对。我们要抓住每一个学习机会，注意不要浪费时间。',
        pinyin: 'Duì. Wǒmen yào zhuāzhù měi yí gè xuéxí jīhuì, zhùyì búyào làngfèi shíjiān.',
        meaning: 'Đúng. Mình phải nắm bắt mỗi cơ hội học, chú ý đừng lãng phí thời gian.', expression: 'focused', vocab: ['抓住', '注意'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'restaurant', scene: '📍 Tiệc chia tay', expression: 'happy',
        q: 'Mai muốn chúc mọi người. "Chúc mọi người mọi việc thuận lợi!" dùng từ nào?',
        options: [
          { text: '祝大家一切顺利！', pinyin: 'Zhù dàjiā yíqiè shùnlì!', meaning: 'Chúc mọi người mọi việc thuận lợi!', correct: true, feedback: 'Đúng! 祝 = chúc.' },
          { text: '抓大家一切顺利！', pinyin: 'Zhuā dàjiā yíqiè shùnlì!', meaning: '(sai)', correct: false, feedback: '抓 = nắm/bắt, sai nghĩa.' },
          { text: '追大家一切顺利！', pinyin: 'Zhuī dàjiā yíqiè shùnlì!', meaning: '(sai)', correct: false, feedback: '追 = đuổi theo, sai nghĩa.' }
        ] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '谢谢！时间过得真快，一转眼就要回国了。这几个月我们总是在一起，感情足够深。',
        pinyin: 'Xièxie! Shíjiān guò de zhēn kuài, yì zhuǎnyǎn jiù yào huíguó le. Zhè jǐ gè yuè wǒmen zǒngshì zài yìqǐ, gǎnqíng zúgòu shēn.',
        meaning: 'Cảm ơn! Thời gian trôi nhanh thật, chớp mắt là sắp về nước. Mấy tháng nay tụi mình luôn bên nhau, tình cảm đủ sâu đậm.', expression: 'happy', vocab: ['转', '总是', '足够'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '下周我去当地朋友家做客，他们种了很多花。',
        pinyin: 'Xià zhōu wǒ qù dāngdì péngyou jiā zuòkè, tāmen zhòng le hěn duō huā.',
        meaning: 'Tuần sau tớ đến nhà bạn bản xứ làm khách, họ trồng rất nhiều hoa.', expression: 'happy', vocab: ['做客', '种'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '真好。我们把照片组合成一本相册吧，大概五十张左右。回国后我还要追我的梦想，抓紧时间提升自己。',
        pinyin: 'Zhēn hǎo. Wǒmen bǎ zhàopiàn zǔhé chéng yì běn xiàngcè ba, dàgài wǔshí zhāng zuǒyòu. Huíguó hòu wǒ hái yào zhuī wǒ de mèngxiǎng, zhuājǐn shíjiān tíshēng zìjǐ.',
        meaning: 'Hay đó. Mình ghép ảnh thành một cuốn album nhé, khoảng năm mươi tấm. Về nước tớ còn theo đuổi ước mơ, tranh thủ thời gian nâng cao bản thân.', expression: 'happy', vocab: ['组合', '左右', '追', '抓'] },
      { type: 'checkpoint', questions: [
        { q: '"主持" có nghĩa là gì?', options: ['chủ trì, dẫn chương trình', 'tổng kết', 'làm khách', 'chú ý'], answer: 0 },
        { q: 'Từ nào nghĩa là "nắm chặt, bắt được"?', options: ['抓住', '转变', '组合'], answer: 0 },
        { q: '"足够" có nghĩa là gì?', options: ['luôn luôn', 'đủ, thỏa đáng', 'khoảng chừng', 'tự chủ'], answer: 1 }
      ] }
    ],
    vocab: [
      { h: '种', p: 'zhǒng', v: 'giống, hạt giống; trồng', e: 'seed' },
      { h: '主持', p: 'zhǔ chí', v: 'chủ trì, dẫn chương trình', e: 'to take charge of' },
      { h: '主张', p: 'zhǔ zhāng', v: 'chủ trương, đề xuất', e: 'to advocate' },
      { h: '注意', p: 'zhù yì', v: 'chú ý', e: 'to take note of' },
      { h: '祝', p: 'zhù', v: 'chúc', e: 'to wish, to congratulate, to bless' },
      { h: '抓', p: 'zhuā', v: 'nắm, bắt', e: 'to grab' },
      { h: '抓住', p: 'zhuā zhù', v: 'nắm chặt, bắt được', e: 'to grab hold of' },
      { h: '转', p: 'zhuǎn', v: 'quay, chuyển', e: 'see 转文' },
      { h: '转变', p: 'zhuǎn biàn', v: 'chuyển biến, thay đổi', e: 'to change' },
      { h: '追', p: 'zhuī', v: 'đuổi theo, theo đuổi', e: 'to sculpt' },
      { h: '自主', p: 'zì zhǔ', v: 'tự chủ', e: 'independent' },
      { h: '总结', p: 'zǒng jié', v: 'tổng kết', e: 'to sum up' },
      { h: '总是', p: 'zǒng shì', v: 'luôn luôn', e: 'always' },
      { h: '足够', p: 'zú gòu', v: 'đủ, thỏa đáng', e: 'enough' },
      { h: '组合', p: 'zǔ hé', v: 'tổ hợp, kết hợp', e: 'to assemble' },
      { h: '左右', p: 'zuǒ yòu', v: 'khoảng, xấp xỉ', e: 'left and right' },
      { h: '做客', p: 'zuò kè', v: 'làm khách, đến thăm', e: 'to be a guest or visitor' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '今晚的晚会由你主持', options: ['今晚的晚会由你主持','今晚的晚会我来准备','今晚的活动取消了'], answer: '今晚的晚会由你主持', py: 'Jīnwǎn de wǎnhuì yóu nǐ zhǔchí', explain: '听 主持 = chủ trì, dẫn chương trình.' },
        { type: 'fill', sentence: '晚会由你___，好吗？', options: ['主持', '总结', '做客'], answer: '主持' },
        { type: 'fill', sentence: '我们___这次经历。', options: ['总结', '抓住', '种'], answer: '总结' },
        { type: 'fill', sentence: '___大家一切顺利！', options: ['祝', '抓', '追'], answer: '祝' },
        { type: 'fill', sentence: '我去朋友家___。', options: ['做客', '主张', '转'], answer: '做客' },
        { type: 'fill', sentence: '他们___了很多花。', options: ['种', '注意', '组合'], answer: '种' }
      ],
      normal: [
        { type: 'listen', audio: '我变得更自主了', options: ['我变得更自主了','我变得更紧张了','我没有什么变化'], answer: '我变得更自主了', py: 'Wǒ biàn de gèng zìzhǔ le', explain: '听 自主 = tự chủ.' },
        { type: 'dictation', audio: '别浪费时间', answer: '别浪费时间', hint: 'Đừng lãng phí thời gian.', py: 'Bié làngfèi shíjiān', explain: '浪费 = lãng phí.' },
        { type: 'fill', sentence: '要___每一个机会。', options: ['抓住', '主持', '左右'], answer: '抓住' },
        { type: 'fill', sentence: '这次旅程让我___了很多。', options: ['转变', '总结', '做客'], answer: '转变' },
        { type: 'fill', sentence: '我变得更___了。', options: ['自主', '足够', '祝'], answer: '自主' },
        { type: 'fill', sentence: '我们___在一起。', options: ['总是', '组合', '抓'], answer: '总是' },
        { type: 'fill', sentence: '___不要浪费时间。', options: ['注意', '主张', '追'], answer: '注意' },
        { type: 'order', words: ['祝', '大家', '顺利', '一切'], answer: '祝大家一切顺利' },
        { type: 'order', words: ['要', '抓住', '机会', '我们'], answer: '我们要抓住机会' }
      ],
      hard: [
        { type: 'fill', sentence: '我___大家轮流发言。', options: ['主张', '主持', '种'], answer: '主张' },
        { type: 'fill', sentence: '把照片___成相册。', options: ['组合', '转变', '注意'], answer: '组合' },
        { type: 'fill', sentence: '大概五十张___。', options: ['左右', '足够', '自主'], answer: '左右' },
        { type: 'fill', sentence: '回国后我要___梦想。', options: ['追', '祝', '种'], answer: '追' },
        { type: 'translate', prompt: 'Mình phải nắm bắt mỗi cơ hội học.', answer: '我们要抓住每一个学习机会。' },
        { type: 'translate', prompt: 'Chuyến đi này khiến tớ thay đổi nhiều.', answer: '这次旅程让我转变了很多。' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 90: Từ chức năng & liên từ (1) — 20 từ
  // 白菜,背后,被,被子,本领,标题,表格,并,并且,不必,不得不,不断,不光,不仅,部,部门,曾经,场合,场所,衬衫
  // ─────────────────────────────────────────────────────────────────────────
  90: {
    id: 90, level: 3,
    title: 'Từ chức năng & liên từ (1)',
    context: 'Mai dọn đồ chuẩn bị về nước, vừa thu xếp hành lý vừa điền nốt giấy tờ và ôn lại những gì đã học.',
    vocabPreview: ['衬衫', '表格', '不仅', '并且', '部门'],
    objectives: [
      "Nắm nhóm từ khóa: 衬衫 · 表格 · 不仅 · 并且 · 部门",
      "Kể/nghe hiểu tình huống Từ chức năng & liên từ (1) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 衬衫 · 表格 · 不仅",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "衬衫 — áo sơ mi",
        explain: "Dùng 衬衫 trong ngữ cảnh Từ chức năng & liên từ (1) để diễn đạt: áo sơ mi.",
        examples: [
          { zh: "我在整理行李。这件衬衫要带走，被子留下。", py: "Wǒ zài zhěnglǐ xíngli. Zhè jiàn chènshān yào dài zǒu, bèizi liú xià.", vi: "Tớ đang xếp hành lý. Cái áo sơ mi này mang đi, chăn để lại." }
        ] },
      { point: "表格 — biểu mẫu, bảng",
        explain: "Dùng 表格 trong ngữ cảnh Từ chức năng & liên từ (1) để diễn đạt: biểu mẫu, bảng.",
        examples: [
          { zh: "好。这张表格要填，标题写你的名字。", py: "Hǎo. Zhè zhāng biǎogé yào tián, biāotí xiě nǐ de míngzi.", vi: "Được. Tờ biểu mẫu này phải điền, tiêu đề ghi tên cậu." }
        ] },
      { point: "不仅 — không chỉ",
        explain: "Dùng 不仅 trong ngữ cảnh Từ chức năng & liên từ (1) để diễn đạt: không chỉ.",
        examples: [
          { zh: "我不仅学了汉语，还学了做饭。", py: "Wǒ bùjǐn xué le Hànyǔ, hái xué le zuòfàn.", vi: "Tớ không chỉ học tiếng Hán mà còn học nấu ăn." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Ký túc xá · Ngày dọn đồ', bg: 'dorm-room', cast: ['mai', 'xiaomei'],
        text: 'Mai dọn đồ chuẩn bị về nước, vừa thu xếp vừa điền nốt giấy tờ.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我在整理行李。这件衬衫要带走，被子留下。',
        pinyin: 'Wǒ zài zhěnglǐ xíngli. Zhè jiàn chènshān yào dài zǒu, bèizi liú xià.',
        meaning: 'Tớ đang xếp hành lý. Cái áo sơ mi này mang đi, chăn để lại.', expression: 'focused', vocab: ['衬衫', '被子'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '好。这张表格要填，标题写你的名字。',
        pinyin: 'Hǎo. Zhè zhāng biǎogé yào tián, biāotí xiě nǐ de míngzi.',
        meaning: 'Được. Tờ biểu mẫu này phải điền, tiêu đề ghi tên cậu.', expression: null, vocab: ['表格', '标题'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我曾经在这里买过菜，白菜特别新鲜。回国不必买太多，行李会超重。',
        pinyin: 'Wǒ céngjīng zài zhèlǐ mǎi guò cài, báicài tèbié xīnxiān. Huíguó búbì mǎi tài duō, xíngli huì chāozhòng.',
        meaning: 'Tớ từng mua rau ở đây, cải thảo tươi cực kỳ. Về nước không cần mua nhiều, hành lý sẽ quá cân.', expression: 'happy', vocab: ['曾经', '白菜', '不必'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'dorm-room', scene: '📍 Ký túc xá', expression: 'happy',
        q: 'Mai muốn nói "Tớ không chỉ học tiếng Hán mà còn học nấu ăn". Dùng từ "không chỉ"?',
        options: [
          { text: '我不仅学了汉语，还学了做饭。', pinyin: 'Wǒ bùjǐn xué le Hànyǔ, hái xué le zuòfàn.', meaning: 'Tớ không chỉ học tiếng Hán mà còn học nấu ăn.', correct: true, feedback: 'Đúng! 不仅...还... = không chỉ...mà còn...' },
          { text: '我被学了汉语，还学了做饭。', pinyin: 'Wǒ bèi xué le Hànyǔ...', meaning: '(sai)', correct: false, feedback: '被 = bị (câu bị động), sai ngữ pháp ở đây.' },
          { text: '我部学了汉语，还学了做饭。', pinyin: 'Wǒ bù xué le Hànyǔ...', meaning: '(sai)', correct: false, feedback: '部 = bộ phận, không phải liên từ.' }
        ] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你进步真大，不光会说，并且会写。这几个月你不断练习，并没有停下来。',
        pinyin: 'Nǐ jìnbù zhēn dà, bùguāng huì shuō, bìngqiě huì xiě. Zhè jǐ gè yuè nǐ búduàn liànxí, bìng méiyǒu tíng xiàlái.',
        meaning: 'Cậu tiến bộ ghê, không chỉ nói được mà còn viết được. Mấy tháng nay cậu luyện không ngừng, hề không dừng lại.', expression: 'happy', vocab: ['不光', '并且', '不断', '并'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '谢谢！其实这些成绩背后，是大家的帮助，我学会了很多本领。',
        pinyin: 'Xièxie! Qíshí zhèxiē chéngjì bèihòu, shì dàjiā de bāngzhù, wǒ xuéhuì le hěn duō běnlǐng.',
        meaning: 'Cảm ơn! Thật ra sau những thành tích này là sự giúp đỡ của mọi người, tớ học được nhiều kỹ năng.', expression: 'happy', vocab: ['背后', '本领'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '对了，有些正式场合要穿正装，这种场所有要求。证件我交给了学校的相关部门。',
        pinyin: 'Duìle, yǒuxiē zhèngshì chǎnghé yào chuān zhèngzhuāng, zhè zhǒng chǎngsuǒ yǒu yāoqiú. Zhèngjiàn wǒ jiāo gěi le xuéxiào de xiāngguān bùmén.',
        meaning: 'À, một số dịp trang trọng phải mặc lễ phục, loại địa điểm này có yêu cầu. Giấy tờ tớ nộp cho bộ phận liên quan của trường rồi.', expression: 'focused', vocab: ['场合', '场所', '部门'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '时间到了，我们不得不走了。钥匙被我放在桌上了，这部手机也带走。',
        pinyin: 'Shíjiān dào le, wǒmen bùdébù zǒu le. Yàoshi bèi wǒ fàng zài zhuō shàng le, zhè bù shǒujī yě dài zǒu.',
        meaning: 'Đến giờ rồi, tụi mình buộc phải đi. Chìa khóa bị tớ để trên bàn, cái điện thoại này cũng mang đi.', expression: null, vocab: ['不得不', '被', '部'] },
      { type: 'checkpoint', questions: [
        { q: '"衬衫" có nghĩa là gì?', options: ['áo sơ mi', 'chăn bông', 'cải thảo', 'biểu mẫu'], answer: 0 },
        { q: 'Từ nào nghĩa là "không chỉ"?', options: ['不必', '不仅', '不得不'], answer: 1 },
        { q: '"曾经" có nghĩa là gì?', options: ['đã từng', 'hơn nữa', 'phía sau', 'không ngừng'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '白菜', p: 'bái cài', v: 'cải thảo, bắp cải trắng', e: 'Chinese cabbage' },
      { h: '背后', p: 'bèi hòu', v: 'phía sau, đằng sau', e: 'behind' },
      { h: '被', p: 'bèi', v: 'bị (thụ động)', e: 'quilt' },
      { h: '被子', p: 'bèi zi', v: 'chăn bông', e: 'quilt' },
      { h: '本领', p: 'běn lǐng', v: 'kỹ năng, tài năng', e: 'skill' },
      { h: '标题', p: 'biāo tí', v: 'tiêu đề', e: 'title' },
      { h: '表格', p: 'biǎo gé', v: 'biểu mẫu, bảng', e: 'form' },
      { h: '并', p: 'bìng', v: 'và, đồng thời; hề (nhấn mạnh phủ định)', e: 'and' },
      { h: '并且', p: 'bìng qiě', v: 'hơn nữa, đồng thời', e: 'and' },
      { h: '不必', p: 'bù bì', v: 'không cần thiết', e: 'need not' },
      { h: '不得不', p: 'bù dé bù', v: 'không thể không, buộc phải', e: 'have no choice or option but to' },
      { h: '不断', p: 'bù duàn', v: 'không ngừng, liên tục', e: 'unceasing' },
      { h: '不光', p: 'bù guāng', v: 'không chỉ', e: 'not the only one' },
      { h: '不仅', p: 'bù jǐn', v: 'không chỉ', e: 'not just' },
      { h: '部', p: 'bù', v: 'bộ phận; bộ (lượng từ)', e: 'ministry' },
      { h: '部门', p: 'bù mén', v: 'bộ phận, phòng ban', e: 'department' },
      { h: '曾经', p: 'céng jīng', v: 'đã từng', e: 'once' },
      { h: '场合', p: 'chǎng hé', v: 'dịp, hoàn cảnh', e: 'situation' },
      { h: '场所', p: 'chǎng suǒ', v: 'nơi chốn, địa điểm', e: 'location' },
      { h: '衬衫', p: 'chèn shān', v: 'áo sơ mi', e: 'shirt' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '这件衬衫要带走', options: ['这件衬衫要带走','这件衬衫太旧了','这条裤子要带走'], answer: '这件衬衫要带走', py: 'Zhè jiàn chènshān yào dài zǒu', explain: '听 衬衫 = áo sơ mi.' },
        { type: 'fill', sentence: '这件___要带走。', options: ['衬衫', '表格', '部门'], answer: '衬衫' },
        { type: 'fill', sentence: '这张___要填。', options: ['表格', '被子', '场合'], answer: '表格' },
        { type: 'fill', sentence: '___写你的名字。', options: ['标题', '本领', '白菜'], answer: '标题' },
        { type: 'fill', sentence: '这里的___很新鲜。', options: ['白菜', '场所', '被子'], answer: '白菜' },
        { type: 'fill', sentence: '回国___买太多。', options: ['不必', '并且', '曾经'], answer: '不必' }
      ],
      normal: [
        { type: 'listen', audio: '这张表格要填', options: ['这张表格要填','这张照片要带走','这本书要还回去'], answer: '这张表格要填', py: 'Zhè zhāng biǎogé yào tián', explain: '听 表格 = biểu mẫu.' },
        { type: 'dictation', audio: '时间到了', answer: '时间到了', hint: 'Đến giờ rồi.', py: 'Shíjiān dào le', explain: '到 = đến (giờ).' },
        { type: 'fill', sentence: '我___学了汉语，还学了做饭。', options: ['不仅', '不必', '部'], answer: '不仅' },
        { type: 'fill', sentence: '___会说，并且会写。', options: ['不光', '被', '场合'], answer: '不光' },
        { type: 'fill', sentence: '这几个月你___练习。', options: ['不断', '不必', '背后'], answer: '不断' },
        { type: 'fill', sentence: '我___在这里买过菜。', options: ['曾经', '并且', '部门'], answer: '曾经' },
        { type: 'fill', sentence: '正式___要穿正装。', options: ['场合', '表格', '被子'], answer: '场合' },
        { type: 'order', words: ['不仅', '我', '会说', '会写', '还'], answer: '我不仅会说还会写' },
        { type: 'order', words: ['我们', '不得不', '走了'], answer: '我们不得不走了' }
      ],
      hard: [
        { type: 'fill', sentence: '成绩___是大家的帮助。', options: ['背后', '场所', '标题'], answer: '背后' },
        { type: 'fill', sentence: '我学会了很多___。', options: ['本领', '表格', '白菜'], answer: '本领' },
        { type: 'fill', sentence: '交给学校的相关___。', options: ['部门', '场合', '被子'], answer: '部门' },
        { type: 'fill', sentence: '钥匙___我放在桌上了。', options: ['被', '部', '并'], answer: '被' },
        { type: 'translate', prompt: 'Tớ không chỉ nói được mà còn viết được.', answer: '我不仅会说，还会写。' },
        { type: 'translate', prompt: 'Đến giờ rồi, tụi mình buộc phải đi.', answer: '时间到了，我们不得不走了。' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 91: Từ chức năng & liên từ (2) — 20 từ
  // 衬衣,成果,成员,初,除了,大概,大使馆,大约,代表团,单元,当地,当中,导演,地区,底下,电视剧,电台,电子邮件,动力,读者
  // ─────────────────────────────────────────────────────────────────────────
  91: {
    id: 91, level: 3,
    title: 'Từ chức năng & liên từ (2)',
    context: 'Trước khi về nước, nhóm ghé đại sứ quán làm thủ tục và tình cờ gặp một đoàn đại diện.',
    vocabPreview: ['大使馆', '代表团', '除了', '电子邮件', '成果'],
    objectives: [
      "Nắm nhóm từ khóa: 大使馆 · 代表团 · 除了 · 电子邮件 · 成果",
      "Kể/nghe hiểu tình huống Từ chức năng & liên từ (2) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 大使馆 · 代表团 · 除了",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "大使馆 — đại sứ quán",
        explain: "Dùng 大使馆 trong ngữ cảnh Từ chức năng & liên từ (2) để diễn đạt: đại sứ quán.",
        examples: [
          { zh: "欢迎来到大使馆。你们是代表团的成员吗？", py: "Huānyíng láidào dàshǐguǎn. Nǐmen shì dàibiǎotuán de chéngyuán ma?", vi: "Chào mừng đến đại sứ quán. Các bạn là thành viên của đoàn đại diện à?" }
        ] },
      { point: "代表团 — đoàn đại diện",
        explain: "Dùng 代表团 trong ngữ cảnh Từ chức năng & liên từ (2) để diễn đạt: đoàn đại diện.",
        examples: [
          { zh: "欢迎来到大使馆。你们是代表团的成员吗？", py: "Huānyíng láidào dàshǐguǎn. Nǐmen shì dàibiǎotuán de chéngyuán ma?", vi: "Chào mừng đến đại sứ quán. Các bạn là thành viên của đoàn đại diện à?" }
        ] },
      { point: "除了 — ngoài ra, ngoại trừ",
        explain: "Dùng 除了 trong ngữ cảnh Từ chức năng & liên từ (2) để diễn đạt: ngoài ra, ngoại trừ.",
        examples: [
          { zh: "是的。除了我们，当地还有别的留学生。", py: "Shì de. Chúle wǒmen, dāngdì hái yǒu bié de liúxuéshēng.", vi: "Vâng. Ngoài tụi em ra, ở địa phương còn có du học sinh khác." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Đại sứ quán · Buổi sáng', bg: 'office', cast: ['mai', 'xiaomei', 'fuwuyuan'],
        text: 'Trước khi về, nhóm ghé đại sứ quán làm thủ tục.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'xiaomei', 'fuwuyuan'],
        text: '欢迎来到大使馆。你们是代表团的成员吗？',
        pinyin: 'Huānyíng láidào dàshǐguǎn. Nǐmen shì dàibiǎotuán de chéngyuán ma?',
        meaning: 'Chào mừng đến đại sứ quán. Các bạn là thành viên của đoàn đại diện à?', expression: 'focused', vocab: ['大使馆', '代表团', '成员'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei', 'fuwuyuan'],
        text: '是的。除了我们，当地还有别的留学生。',
        pinyin: 'Shì de. Chúle wǒmen, dāngdì hái yǒu bié de liúxuéshēng.',
        meaning: 'Vâng. Ngoài tụi em ra, ở địa phương còn có du học sinh khác.', expression: 'curious', vocab: ['除了', '当地'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'xiaomei', 'fuwuyuan'],
        text: '好。表格在那个单元的柜子底下，大概在最下层。',
        pinyin: 'Hǎo. Biǎogé zài nàge dānyuán de guìzi dǐxia, dàgài zài zuì xiàcéng.',
        meaning: 'Được. Biểu mẫu ở dưới cái tủ của khu đó, khoảng ở tầng dưới cùng.', expression: null, vocab: ['单元', '底下', '大概'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei', 'fuwuyuan'],
        text: '谢谢。我们大约几点能办完？',
        pinyin: 'Xièxie. Wǒmen dàyuē jǐ diǎn néng bàn wán?',
        meaning: 'Cảm ơn. Khoảng mấy giờ tụi em làm xong ạ?', expression: 'curious', vocab: ['大约'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'fuwuyuan'], bg: 'office', scene: '📍 Đại sứ quán', expression: 'curious',
        q: 'Mai muốn hỏi gửi tài liệu qua đâu. "Em gửi qua email được không?" dùng từ "email"?',
        options: [
          { text: '我用电子邮件发可以吗？', pinyin: 'Wǒ yòng diànzǐ yóujiàn fā kěyǐ ma?', meaning: 'Em gửi qua email được không?', correct: true, feedback: 'Đúng! 电子邮件 = thư điện tử / email.' },
          { text: '我用电视剧发可以吗？', pinyin: 'Wǒ yòng diànshìjù fā kěyǐ ma?', meaning: '(sai)', correct: false, feedback: '电视剧 = phim truyền hình, sai nghĩa.' },
          { text: '我用电台发可以吗？', pinyin: 'Wǒ yòng diàntái fā kěyǐ ma?', meaning: '(sai)', correct: false, feedback: '电台 = đài phát thanh, sai nghĩa.' }
        ] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '可以。对了，这个地区最近在拍一部电视剧，导演还来过我们这儿。',
        pinyin: 'Kěyǐ. Duìle, zhège dìqū zuìjìn zài pāi yí bù diànshìjù, dǎoyǎn hái lái guò wǒmen zhèr.',
        meaning: 'Được. À, khu vực này gần đây đang quay một bộ phim truyền hình, đạo diễn còn đến chỗ chúng tôi nữa.', expression: 'happy', vocab: ['地区', '电视剧', '导演'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '真有意思！我喜欢看，也常听电台节目。',
        pinyin: 'Zhēn yǒuyìsi! Wǒ xǐhuan kàn, yě cháng tīng diàntái jiémù.',
        meaning: 'Thú vị thật! Em thích xem, cũng hay nghe chương trình đài phát thanh.', expression: 'happy', vocab: ['电台'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这次经历是我们最大的成果，也是继续学习的动力。',
        pinyin: 'Zhè cì jīnglì shì wǒmen zuì dà de chéngguǒ, yě shì jìxù xuéxí de dònglì.',
        meaning: 'Trải nghiệm lần này là thành quả lớn nhất của tụi mình, cũng là động lực để học tiếp.', expression: 'focused', vocab: ['成果', '动力'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我想把故事写下来，分享给更多读者。当中有很多难忘的瞬间。刚来时是夏初，我还穿着一件薄衬衣呢。',
        pinyin: 'Wǒ xiǎng bǎ gùshi xiě xiàlái, fēnxiǎng gěi gèng duō dúzhě. Dāngzhōng yǒu hěn duō nánwàng de shùnjiān. Gāng lái shí shì xià chū, wǒ hái chuān zhe yí jiàn báo chènyī ne.',
        meaning: 'Tớ muốn viết câu chuyện ra, chia sẻ cho nhiều độc giả hơn. Trong đó có nhiều khoảnh khắc khó quên. Mới đến là đầu hè, tớ còn mặc một chiếc áo sơ mi mỏng.', expression: 'happy', vocab: ['读者', '当中', '初', '衬衣'] },
      { type: 'checkpoint', questions: [
        { q: '"大使馆" có nghĩa là gì?', options: ['đại sứ quán', 'đoàn đại diện', 'khu vực', 'độc giả'], answer: 0 },
        { q: 'Từ nào nghĩa là "thư điện tử / email"?', options: ['电视剧', '电子邮件', '电台'], answer: 1 },
        { q: '"动力" có nghĩa là gì?', options: ['động lực', 'thành quả', 'đạo diễn', 'địa phương'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '衬衣', p: 'chèn yī', v: 'áo sơ mi', e: 'shirt' },
      { h: '成果', p: 'chéng guǒ', v: 'kết quả, thành tựu', e: 'result' },
      { h: '成员', p: 'chéng yuán', v: 'thành viên', e: 'member' },
      { h: '初', p: 'chū', v: 'ban đầu, sơ', e: 'at first' },
      { h: '除了', p: 'chú le', v: 'ngoài ra, ngoại trừ', e: 'besides' },
      { h: '大概', p: 'dà gài', v: 'đại khái, khoảng chừng', e: 'roughly' },
      { h: '大使馆', p: 'dà shǐ guǎn', v: 'đại sứ quán', e: 'embassy' },
      { h: '大约', p: 'dà yuē', v: 'khoảng, xấp xỉ', e: 'approximately' },
      { h: '代表团', p: 'dài biǎo tuán', v: 'đoàn đại diện', e: 'delegation' },
      { h: '单元', p: 'dān yuán', v: 'đơn vị, căn hộ', e: 'unit (forming an entity)' },
      { h: '当地', p: 'dāng dì', v: 'địa phương, tại chỗ', e: 'local' },
      { h: '当中', p: 'dāng zhōng', v: 'trong số, ở giữa', e: 'among' },
      { h: '导演', p: 'dǎo yǎn', v: 'đạo diễn', e: 'to direct' },
      { h: '地区', p: 'dì qū', v: 'khu vực, địa khu', e: 'local' },
      { h: '底下', p: 'dǐ xia', v: 'phía dưới, bên dưới', e: 'the location below sth' },
      { h: '电视剧', p: 'diàn shì jù', v: 'phim truyền hình', e: 'TV series' },
      { h: '电台', p: 'diàn tái', v: 'đài phát thanh', e: 'transmitter-receiver' },
      { h: '电子邮件', p: 'diàn zǐ yóu jiàn', v: 'thư điện tử, email', e: 'email' },
      { h: '动力', p: 'dòng lì', v: 'động lực', e: 'motive power' },
      { h: '读者', p: 'dú zhě', v: 'độc giả', e: 'reader' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '欢迎来到大使馆', options: ['欢迎来到大使馆','欢迎来到我们学校','欢迎来到我家'], answer: '欢迎来到大使馆', py: 'Huānyíng láidào dàshǐguǎn', explain: '听 大使馆 = đại sứ quán.' },
        { type: 'fill', sentence: '欢迎来到___。', options: ['大使馆', '代表团', '电台'], answer: '大使馆' },
        { type: 'fill', sentence: '你们是___的成员吗？', options: ['代表团', '电视剧', '单元'], answer: '代表团' },
        { type: 'fill', sentence: '___我们，还有别人。', options: ['除了', '大约', '初'], answer: '除了' },
        { type: 'fill', sentence: '我们___几点能办完？', options: ['大约', '当中', '底下'], answer: '大约' },
        { type: 'fill', sentence: '我常听___节目。', options: ['电台', '导演', '读者'], answer: '电台' }
      ],
      normal: [
        { type: 'listen', audio: '我常听电台节目', options: ['我常听电台节目','我很少看电视','我喜欢看电视剧'], answer: '我常听电台节目', py: 'Wǒ cháng tīng diàntái jiémù', explain: '听 电台 = đài phát thanh.' },
        { type: 'dictation', audio: '大约几点能办完', answer: '大约几点能办完', hint: 'Khoảng mấy giờ làm xong?', py: 'Dàyuē jǐ diǎn néng bàn wán', explain: '大约 = khoảng, xấp xỉ.' },
        { type: 'fill', sentence: '___还有别的留学生。', options: ['当地', '当中', '大概'], answer: '当地' },
        { type: 'fill', sentence: '表格在柜子___。', options: ['底下', '初', '动力'], answer: '底下' },
        { type: 'fill', sentence: '我用___发可以吗？', options: ['电子邮件', '电视剧', '电台'], answer: '电子邮件' },
        { type: 'fill', sentence: '这个___在拍电视剧。', options: ['地区', '单元', '成员'], answer: '地区' },
        { type: 'fill', sentence: '这是最大的___。', options: ['成果', '导演', '读者'], answer: '成果' },
        { type: 'order', words: ['除了', '我们', '还有', '别人'], answer: '除了我们还有别人' },
        { type: 'order', words: ['是', '继续学习', '的', '动力'], answer: '是继续学习的动力' }
      ],
      hard: [
        { type: 'fill', sentence: '表格在那个___的柜子里。', options: ['单元', '当中', '初'], answer: '单元' },
        { type: 'fill', sentence: '___还来过我们这儿。', options: ['导演', '读者', '电台'], answer: '导演' },
        { type: 'fill', sentence: '分享给更多___。', options: ['读者', '成员', '地区'], answer: '读者' },
        { type: 'fill', sentence: '刚来时是夏___。', options: ['初', '当中', '大约'], answer: '初' },
        { type: 'translate', prompt: 'Ngoài tụi em ra, còn có du học sinh khác.', answer: '除了我们，还有别的留学生。' },
        { type: 'translate', prompt: 'Đây là động lực để học tiếp.', answer: '这是继续学习的动力。' }
      ]
    }
  }

});

// ───────────────────────────────────────────────────────
// BATCH 5 — Bài 92-96 (Trả nhà & về nước · Hải quan & quê hương · CLB online · Du lịch trong nước · Phỏng vấn truyền thông)
// ───────────────────────────────────────────────────────
Object.assign(COURSE_DATA, {

  // BÀI 92: 短处,短裤,队员,对方,对手,对象,顿,反正,范围,方式,房东,房屋,房租,费用,风险,服务员,服装,赶紧,赶快,感情
  92: {
    id: 92, level: 3,
    title: 'Từ chức năng & liên từ (3)',
    context: 'Sắp về nước, Mai và Tiểu Mỹ thanh toán tiền nhà với chủ nhà, rồi tham gia trận bóng rổ chia tay và ăn mừng ở nhà hàng.',
    vocabPreview: ['房东', '房租', '对手', '方式', '感情'],
    objectives: [
      "Nắm nhóm từ khóa: 房东 · 房租 · 对手 · 方式 · 感情",
      "Kể/nghe hiểu tình huống Từ chức năng & liên từ (3) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 房东 · 房租 · 对手",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "房东 — chủ nhà",
        explain: "Dùng 房东 trong ngữ cảnh Từ chức năng & liên từ (3) để diễn đạt: chủ nhà.",
        examples: [
          { zh: "我们快回国了，得赶紧跟房东结清房租。", py: "Wǒmen kuài huíguó le, děi gǎnjǐn gēn fángdōng jiéqīng fángzū.", vi: "Tụi mình sắp về nước rồi, phải mau chóng thanh toán tiền thuê nhà với chủ nhà." },
          { zh: "房东人很好，我们感情也不错，退房没什么风险。", py: "Fángdōng rén hěn hǎo, wǒmen gǎnqíng yě búcuò, tuìfáng méi shénme fēngxiǎn.", vi: "Chủ nhà tốt lắm, tình cảm tụi mình cũng tốt, trả phòng chẳng có rủi ro gì." }
        ] },
      { point: "房租 — tiền thuê nhà",
        explain: "Dùng 房租 trong ngữ cảnh Từ chức năng & liên từ (3) để diễn đạt: tiền thuê nhà.",
        examples: [
          { zh: "我们快回国了，得赶紧跟房东结清房租。", py: "Wǒmen kuài huíguó le, děi gǎnjǐn gēn fángdōng jiéqīng fángzū.", vi: "Tụi mình sắp về nước rồi, phải mau chóng thanh toán tiền thuê nhà với chủ nhà." }
        ] },
      { point: "对手 — đối thủ",
        explain: "Dùng 对手 trong ngữ cảnh Từ chức năng & liên từ (3) để diễn đạt: đối thủ.",
        examples: [
          { zh: "对手虽然强，但对方也有短处，我们抓住机会就行。", py: "Duìshǒu suīrán qiáng, dàn duìfāng yě yǒu duǎnchù, wǒmen zhuāzhù jīhuì jiù xíng.", vi: "Đối thủ tuy mạnh, nhưng đối phương cũng có điểm yếu, mình chớp cơ hội là được." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Căn hộ · Buổi sáng', bg: 'home', cast: ['mai', 'xiaomei'],
        text: 'Mai và Tiểu Mỹ sắp về nước, hai bạn dọn dẹp và tính chuyện trả nhà.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我们快回国了，得赶紧跟房东结清房租。',
        pinyin: 'Wǒmen kuài huíguó le, děi gǎnjǐn gēn fángdōng jiéqīng fángzū.',
        meaning: 'Tụi mình sắp về nước rồi, phải mau chóng thanh toán tiền thuê nhà với chủ nhà.', expression: 'focused', vocab: ['赶紧', '房东', '房租'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '对，房屋的费用我们一人一半，反正都算清楚了。',
        pinyin: 'Duì, fángwū de fèiyòng wǒmen yì rén yíbàn, fǎnzhèng dōu suàn qīngchu le.',
        meaning: 'Ừ, chi phí nhà cửa mình chia đôi, dù sao cũng tính rõ ràng cả rồi.', expression: 'happy', vocab: ['房屋', '费用', '反正'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '房东人很好，我们感情也不错，退房没什么风险。',
        pinyin: 'Fángdōng rén hěn hǎo, wǒmen gǎnqíng yě búcuò, tuìfáng méi shénme fēngxiǎn.',
        meaning: 'Chủ nhà tốt lắm, tình cảm tụi mình cũng tốt, trả phòng chẳng có rủi ro gì.', expression: 'happy', vocab: ['感情', '风险'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '赶快收拾吧。这些服装、短裤都要打包。',
        pinyin: 'Gǎnkuài shōushi ba. Zhèxiē fúzhuāng, duǎnkù dōu yào dǎbāo.',
        meaning: 'Mau dọn đi. Mấy bộ quần áo, quần đùi này đều phải đóng gói.', expression: 'focused', vocab: ['赶快', '服装', '短裤'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'home', scene: '📍 Căn hộ', expression: 'curious',
        q: 'Mai muốn nói "Cách chia chi phí này rất công bằng". Nên dùng từ "phương thức/cách thức" nào?',
        options: [
          { text: '这种分费用的方式很公平。', pinyin: 'Zhè zhǒng fēn fèiyòng de fāngshì hěn gōngpíng.', meaning: 'Cách chia chi phí này rất công bằng.', correct: true, feedback: 'Đúng! 方式 = phương thức, cách làm.' },
          { text: '这种分费用的范围很公平。', pinyin: 'Zhè zhǒng fēn fèiyòng de fànwéi hěn gōngpíng.', meaning: '(sai)', correct: false, feedback: '范围 = phạm vi, không hợp nghĩa "cách chia".' },
          { text: '这种分费用的对象很公平。', pinyin: 'Zhè zhǒng fēn fèiyòng de duìxiàng hěn gōngpíng.', meaning: '(sai)', correct: false, feedback: '对象 = đối tượng, không hợp nghĩa "cách chia".' }
        ], vocab: ['方式', '范围', '对象'] },
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Sân bóng rổ · Buổi chiều', bg: 'park', cast: ['mai', 'xiaomei'],
        text: 'Buổi chiều là trận bóng rổ chia tay giữa các du học sinh.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '今天告别赛，我们队员要加油，对方很强！',
        pinyin: 'Jīntiān gàobié sài, wǒmen duìyuán yào jiāyóu, duìfāng hěn qiáng!',
        meaning: 'Hôm nay là trận chia tay, các thành viên đội mình cố lên nào, đối phương mạnh lắm!', expression: 'focused', vocab: ['队员', '对方'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '对手虽然强，但对方也有短处，我们抓住机会就行。',
        pinyin: 'Duìshǒu suīrán qiáng, dàn duìfāng yě yǒu duǎnchù, wǒmen zhuāzhù jīhuì jiù xíng.',
        meaning: 'Đối thủ tuy mạnh, nhưng đối phương cũng có điểm yếu, mình chớp cơ hội là được.', expression: 'happy', vocab: ['对手', '短处'] },
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Nhà hàng · Buổi tối', bg: 'restaurant', cast: ['mai', 'fuwuyuan'],
        text: 'Sau trận đấu, cả nhóm đến nhà hàng ăn mừng.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '我们打球累了，想好好吃一顿！',
        pinyin: 'Wǒmen dǎqiú lèi le, xiǎng hǎohǎo chī yí dùn!',
        meaning: 'Tụi em đá bóng mệt rồi, muốn ăn một bữa cho đã!', expression: 'happy', vocab: ['顿'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '欢迎！这家店的服务员都很热情，请坐。',
        pinyin: 'Huānyíng! Zhè jiā diàn de fúwùyuán dōu hěn rèqíng, qǐng zuò.',
        meaning: 'Hoan nghênh! Nhân viên phục vụ quán này đều nhiệt tình, mời ngồi.', expression: 'happy', vocab: ['服务员'] },
      { type: 'checkpoint', questions: [
        { q: '"房东" có nghĩa là gì?', options: ['chủ nhà', 'người thuê', 'hàng xóm', 'bồi bàn'], answer: 0 },
        { q: 'Từ nào nghĩa là "đối thủ"?', options: ['队员', '对手', '对方'], answer: 1 },
        { q: '"反正" có nghĩa là gì?', options: ['dù sao đi nữa', 'vội vàng', 'rủi ro'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '短处', p: 'duǎn chù', v: 'điểm yếu, nhược điểm', e: 'shortcoming' },
      { h: '短裤', p: 'duǎn kù', v: 'quần đùi, quần short', e: 'short pants' },
      { h: '队员', p: 'duì yuán', v: 'thành viên đội', e: 'team member' },
      { h: '对方', p: 'duì fāng', v: 'đối phương, phía bên kia', e: 'the other person' },
      { h: '对手', p: 'duì shǒu', v: 'đối thủ', e: 'opponent' },
      { h: '对象', p: 'duì xiàng', v: 'đối tượng', e: 'target' },
      { h: '顿', p: 'dùn', v: 'lần, bữa (lượng từ)', e: 'to stop' },
      { h: '反正', p: 'fǎn zhèng', v: 'dù sao, bất kể thế nào', e: 'anyway' },
      { h: '范围', p: 'fàn wéi', v: 'phạm vi', e: 'range' },
      { h: '方式', p: 'fāng shì', v: 'phương thức, cách thức', e: 'way' },
      { h: '房东', p: 'fáng dōng', v: 'chủ nhà', e: 'landlord' },
      { h: '房屋', p: 'fáng wū', v: 'nhà cửa', e: 'house' },
      { h: '房租', p: 'fáng zū', v: 'tiền thuê nhà', e: 'rent for a room or house' },
      { h: '费用', p: 'fèi yòng', v: 'chi phí, lệ phí', e: 'cost' },
      { h: '风险', p: 'fēng xiǎn', v: 'rủi ro', e: 'risk' },
      { h: '服务员', p: 'fú wù yuán', v: 'nhân viên phục vụ, bồi bàn', e: 'waiter' },
      { h: '服装', p: 'fú zhuāng', v: 'trang phục, quần áo', e: 'dress' },
      { h: '赶紧', p: 'gǎn jǐn', v: 'vội vàng, khẩn trương', e: 'hurriedly' },
      { h: '赶快', p: 'gǎn kuài', v: 'nhanh lên, mau lên', e: 'quickly' },
      { h: '感情', p: 'gǎn qíng', v: 'tình cảm, cảm xúc', e: 'emotion' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '这些服装短裤都要打包', options: ['这些服装短裤都要打包','这些书本都要带走','这些东西可以留下'], answer: '这些服装短裤都要打包', py: 'Zhèxiē fúzhuāng duǎnkù dōu yào dǎbāo', explain: '听 服装 = trang phục; 短裤 = quần đùi.' },
        { type: 'fill', sentence: '我们得跟___结清房租。', options: ['房东', '对手', '队员'], answer: '房东' },
        { type: 'fill', sentence: '每月的___不便宜。', options: ['房租', '短裤', '感情'], answer: '房租' },
        { type: 'fill', sentence: '___收拾行李吧！', options: ['赶快', '反正', '风险'], answer: '赶快' },
        { type: 'fill', sentence: '今天的___都到齐了。', options: ['队员', '房屋', '服装'], answer: '队员' },
        { type: 'fill', sentence: '我们想好好吃一___。', options: ['顿', '对方', '费用'], answer: '顿' }
      ],
      normal: [
        { type: 'listen', audio: '对手虽然强但也有短处', options: ['对手虽然强但也有短处','对手很弱我们能赢','我们队比对方强'], answer: '对手虽然强但也有短处', py: 'Duìshǒu suīrán qiáng dàn yě yǒu duǎnchù', explain: '听 对手 = đối thủ; 短处 = điểm yếu.' },
        { type: 'dictation', audio: '赶快收拾吧', answer: '赶快收拾吧', hint: 'Mau dọn đi.', py: 'Gǎnkuài shōushi ba', explain: '赶快 = nhanh lên.' },
        { type: 'fill', sentence: '___都算清楚了，别担心。', options: ['反正', '风险', '短处'], answer: '反正' },
        { type: 'fill', sentence: '这种分钱的___很公平。', options: ['方式', '范围', '对象'], answer: '方式' },
        { type: 'fill', sentence: '___虽然强，但有短处。', options: ['对手', '房东', '队员'], answer: '对手' },
        { type: 'fill', sentence: '我们俩的___很好。', options: ['感情', '费用', '服装'], answer: '感情' },
        { type: 'fill', sentence: '退房没什么___。', options: ['风险', '房屋', '短裤'], answer: '风险' },
        { type: 'order', words: ['我们', '得', '赶紧', '搬走'], answer: '我们得赶紧搬走' },
        { type: 'order', words: ['这家', '服务员', '很', '热情'], answer: '这家服务员很热情' }
      ],
      hard: [
        { type: 'fill', sentence: '房子的___我们一人一半。', options: ['费用', '对方', '感情'], answer: '费用' },
        { type: 'fill', sentence: '把这些___打包好。', options: ['服装', '房东', '范围'], answer: '服装' },
        { type: 'fill', sentence: '夏天我喜欢穿___。', options: ['短裤', '房屋', '对手'], answer: '短裤' },
        { type: 'fill', sentence: '对方也有自己的___。', options: ['短处', '费用', '队员'], answer: '短处' },
        { type: 'translate', prompt: 'Chủ nhà tốt, tình cảm tụi mình cũng tốt.', answer: '房东人很好，我们感情也不错。' },
        { type: 'translate', prompt: 'Tụi mình đá bóng mệt rồi, muốn ăn một bữa cho đã.', answer: '我们打球累了，想好好吃一顿。' }
      ]
    }
  },

  // BÀI 93: 歌迷,歌声,歌手,个人,个性,更加,工夫,工具,公民,公务员,功夫,功能,姑娘,故乡,观念,观众,国内,果然,哈哈,海关
  93: {
    id: 93, level: 3,
    title: 'Từ chức năng & liên từ (4)',
    context: 'Đêm hòa nhạc chia tay, rồi sáng hôm sau Mai làm thủ tục hải quan để về quê hương.',
    vocabPreview: ['歌手', '观众', '故乡', '海关', '公民'],
    objectives: [
      "Nắm nhóm từ khóa: 歌手 · 观众 · 故乡 · 海关 · 公民",
      "Kể/nghe hiểu tình huống Từ chức năng & liên từ (4) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 歌手 · 观众 · 故乡",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "歌手 — ca sĩ",
        explain: "Dùng 歌手 trong ngữ cảnh Từ chức năng & liên từ (4) để diễn đạt: ca sĩ.",
        examples: [
          { zh: "今晚的歌手是你的偶像，好多歌迷都来了！", py: "Jīnwǎn de gēshǒu shì nǐ de ǒuxiàng, hǎo duō gēmí dōu lái le!", vi: "Ca sĩ tối nay là thần tượng của cậu, bao nhiêu người hâm mộ đều đến!" },
          { zh: "她很有个性，每个歌手都有自己的个人风格。", py: "Tā hěn yǒu gèxìng, měi gè gēshǒu dōu yǒu zìjǐ de gèrén fēnggé.", vi: "Cô ấy rất cá tính, mỗi ca sĩ đều có phong cách cá nhân riêng." }
        ] },
      { point: "观众 — khán giả",
        explain: "Dùng 观众 trong ngữ cảnh Từ chức năng & liên từ (4) để diễn đạt: khán giả.",
        examples: [
          { zh: "是啊！她的歌声真美，观众都很激动。", py: "Shì a! Tā de gēshēng zhēn měi, guānzhòng dōu hěn jīdòng.", vi: "Đúng vậy! Giọng hát của cô ấy đẹp thật, khán giả đều phấn khích." }
        ] },
      { point: "故乡 — quê hương",
        explain: "Dùng 故乡 trong ngữ cảnh Từ chức năng & liên từ (4) để diễn đạt: quê hương.",
        examples: [
          { zh: "我们也花了不少工夫准备行李。明天就要回故乡了。", py: "Wǒmen yě huā le bù shǎo gōngfu zhǔnbèi xíngli. Míngtiān jiù yào huí gùxiāng le.", vi: "Tụi mình cũng tốn không ít công sức chuẩn bị hành lý. Mai là về quê hương rồi." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Hội trường · Buổi tối', bg: 'campus', cast: ['mai', 'xiaomei'],
        text: 'Đêm cuối ở nước ngoài, hai bạn đi xem buổi hòa nhạc chia tay.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '今晚的歌手是你的偶像，好多歌迷都来了！',
        pinyin: 'Jīnwǎn de gēshǒu shì nǐ de ǒuxiàng, hǎo duō gēmí dōu lái le!',
        meaning: 'Ca sĩ tối nay là thần tượng của cậu, bao nhiêu người hâm mộ đều đến!', expression: 'happy', vocab: ['歌手', '歌迷'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '是啊！她的歌声真美，观众都很激动。',
        pinyin: 'Shì a! Tā de gēshēng zhēn měi, guānzhòng dōu hěn jīdòng.',
        meaning: 'Đúng vậy! Giọng hát của cô ấy đẹp thật, khán giả đều phấn khích.', expression: 'surprise', vocab: ['歌声', '观众'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '她很有个性，每个歌手都有自己的个人风格。',
        pinyin: 'Tā hěn yǒu gèxìng, měi gè gēshǒu dōu yǒu zìjǐ de gèrén fēnggé.',
        meaning: 'Cô ấy rất cá tính, mỗi ca sĩ đều có phong cách cá nhân riêng.', expression: 'focused', vocab: ['个性', '个人'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这场演出比上次更加精彩。出国让我的观念开阔了不少。',
        pinyin: 'Zhè chǎng yǎnchū bǐ shàng cì gèngjiā jīngcǎi. Chūguó ràng wǒ de guānniàn kāikuò le bù shǎo.',
        meaning: 'Buổi diễn này còn hay hơn lần trước. Ra nước ngoài khiến quan niệm của mình mở rộng nhiều.', expression: 'happy', vocab: ['更加', '观念'] },
      { type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'campus', scene: '📍 Hội trường', expression: 'curious',
        q: 'Tiểu Mỹ khen app ghi âm: "Cái app này có nhiều ___ (chức năng) hữu ích". Chọn từ đúng?',
        options: [
          { text: '这个软件有很多有用的功能。', pinyin: 'Zhège ruǎnjiàn yǒu hěn duō yǒuyòng de gōngnéng.', meaning: 'App này có nhiều chức năng hữu ích.', correct: true, feedback: 'Đúng! 功能 = chức năng (của máy móc, phần mềm).' },
          { text: '这个软件有很多有用的工具。', pinyin: 'Zhège ruǎnjiàn yǒu hěn duō yǒuyòng de gōngjù.', meaning: '(lệch nghĩa)', correct: false, feedback: '工具 = công cụ, dụng cụ — không phải "chức năng".' },
          { text: '这个软件有很多有用的功夫。', pinyin: 'Zhège ruǎnjiàn yǒu hěn duō yǒuyòng de gōngfu.', meaning: '(sai)', correct: false, feedback: '功夫 = võ thuật / công phu, không hợp nghĩa.' }
        ], vocab: ['功能', '工具', '功夫'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我们也花了不少工夫准备行李。明天就要回故乡了。',
        pinyin: 'Wǒmen yě huā le bù shǎo gōngfu zhǔnbèi xíngli. Míngtiān jiù yào huí gùxiāng le.',
        meaning: 'Tụi mình cũng tốn không ít công sức chuẩn bị hành lý. Mai là về quê hương rồi.', expression: null, vocab: ['工夫', '故乡'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '国内的朋友都等着你呢！哈哈，你成网红啦。',
        pinyin: 'Guónèi de péngyou dōu děng zhe nǐ ne! Hāhā, nǐ chéng wǎnghóng la.',
        meaning: 'Bạn bè trong nước đều đợi cậu đó! Haha, cậu thành hot girl rồi.', expression: 'happy', vocab: ['国内', '哈哈'] },
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Sân bay · Sáng hôm sau', bg: 'station', cast: ['mai', 'fuwuyuan'],
        text: 'Sáng hôm sau, Mai ra sân bay làm thủ tục hải quan.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '过海关请带好证件。那位姑娘在帮大家填表。',
        pinyin: 'Guò hǎiguān qǐng dài hǎo zhèngjiàn. Nà wèi gūniang zài bāng dàjiā tián biǎo.',
        meaning: 'Qua hải quan xin mang theo giấy tờ. Cô gái kia đang giúp mọi người điền tờ khai.', expression: 'focused', vocab: ['海关', '姑娘'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '作为公民，出入境都要守规矩。我表哥是公务员，他说查得严。',
        pinyin: 'Zuòwéi gōngmín, chū-rùjìng dōu yào shǒu guīju. Wǒ biǎogē shì gōngwùyuán, tā shuō chá de yán.',
        meaning: 'Là công dân, xuất nhập cảnh đều phải tuân thủ quy định. Anh họ em là công chức, anh ấy bảo kiểm tra nghiêm.', expression: null, vocab: ['公民', '公务员'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '果然，队伍排得很长。不过没关系，我要回家了！',
        pinyin: 'Guǒrán, duìwǔ pái de hěn cháng. Búguò méi guānxi, wǒ yào huí jiā le!',
        meaning: 'Quả nhiên, hàng người xếp rất dài. Nhưng không sao, mình sắp về nhà rồi!', expression: 'happy', vocab: ['果然'] },
      { type: 'checkpoint', questions: [
        { q: '"歌迷" có nghĩa là gì?', options: ['người hâm mộ nhạc/ca sĩ', 'giọng hát', 'khán giả', 'ca sĩ'], answer: 0 },
        { q: 'Từ nào nghĩa là "công chức nhà nước"?', options: ['公民', '公务员', '姑娘'], answer: 1 },
        { q: '"果然" có nghĩa là gì?', options: ['quả nhiên, đúng như dự đoán', 'chức năng', 'hải quan'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '歌迷', p: 'gē mí', v: 'người hâm mộ nhạc', e: 'fan of a singer' },
      { h: '歌声', p: 'gē shēng', v: 'giọng hát, tiếng hát', e: 'singing voice' },
      { h: '歌手', p: 'gē shǒu', v: 'ca sĩ', e: 'singer' },
      { h: '个人', p: 'gè rén', v: 'cá nhân', e: 'individual' },
      { h: '个性', p: 'gè xìng', v: 'cá tính', e: 'individuality' },
      { h: '更加', p: 'gèng jiā', v: 'càng hơn, thêm', e: 'more (than sth else)' },
      { h: '工夫', p: 'gōng fū', v: 'công sức, thời gian', e: 'laborer' },
      { h: '工具', p: 'gōng jù', v: 'công cụ, dụng cụ', e: 'tool' },
      { h: '公民', p: 'gōng mín', v: 'công dân', e: 'citizen' },
      { h: '公务员', p: 'gōng wù yuán', v: 'công chức nhà nước', e: 'functionary' },
      { h: '功夫', p: 'gōng fu', v: 'công phu, võ thuật', e: 'skill' },
      { h: '功能', p: 'gōng néng', v: 'chức năng', e: 'function' },
      { h: '姑娘', p: 'gū niang', v: 'cô gái', e: 'girl' },
      { h: '故乡', p: 'gù xiāng', v: 'quê hương', e: 'home' },
      { h: '观念', p: 'guān niàn', v: 'quan niệm, khái niệm', e: 'notion' },
      { h: '观众', p: 'guān zhòng', v: 'khán giả', e: 'spectators' },
      { h: '国内', p: 'guó nèi', v: 'trong nước, nội địa', e: 'domestic' },
      { h: '果然', p: 'guǒ rán', v: 'quả nhiên, đúng như vậy', e: 'really' },
      { h: '哈哈', p: 'hā hā', v: 'haha (tiếng cười)', e: 'laughing out loud' },
      { h: '海关', p: 'hǎi guān', v: 'hải quan', e: 'customs (i.e. border crossing inspection)' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '她的歌声真美', options: ['她的歌声真美','她的舞跳得真好','他的故事真有趣'], answer: '她的歌声真美', py: 'Tā de gēshēng zhēn měi', explain: '听 歌声 = giọng hát.' },
        { type: 'fill', sentence: '今晚的___唱得真好。', options: ['歌手', '海关', '观念'], answer: '歌手' },
        { type: 'fill', sentence: '她的___很美。', options: ['歌声', '工具', '个性'], answer: '歌声' },
        { type: 'fill', sentence: '台下的___都很激动。', options: ['观众', '公民', '故乡'], answer: '观众' },
        { type: 'fill', sentence: '明天我要回___了。', options: ['故乡', '功能', '歌迷'], answer: '故乡' },
        { type: 'fill', sentence: '过___要带好证件。', options: ['海关', '观众', '工夫'], answer: '海关' }
      ],
      normal: [
        { type: 'listen', audio: '明天就要回故乡了', options: ['明天就要回故乡了','明天还要去上课','后天才能出发'], answer: '明天就要回故乡了', py: 'Míngtiān jiù yào huí gùxiāng le', explain: '听 故乡 = quê hương.' },
        { type: 'dictation', audio: '过海关请带好证件', answer: '过海关请带好证件', hint: 'Qua hải quan mang theo giấy tờ.', py: 'Guò hǎiguān qǐng dài hǎo zhèngjiàn', explain: '海关 = hải quan.' },
        { type: 'fill', sentence: '这场演出___精彩。', options: ['更加', '果然', '哈哈'], answer: '更加' },
        { type: 'fill', sentence: '每个人都有自己的___风格。', options: ['个人', '海关', '观众'], answer: '个人' },
        { type: 'fill', sentence: '出国开阔了我的___。', options: ['观念', '工具', '歌迷'], answer: '观念' },
        { type: 'fill', sentence: '作为___要守规矩。', options: ['公民', '歌声', '故乡'], answer: '公民' },
        { type: 'fill', sentence: '___，队伍排得很长。', options: ['果然', '更加', '个性'], answer: '果然' },
        { type: 'order', words: ['好多', '歌迷', '都', '来了'], answer: '好多歌迷都来了' },
        { type: 'order', words: ['国内', '的', '朋友', '等着你'], answer: '国内的朋友等着你' }
      ],
      hard: [
        { type: 'fill', sentence: '这个软件有很多___。', options: ['功能', '工夫', '观念'], answer: '功能' },
        { type: 'fill', sentence: '我们花了不少___准备。', options: ['工夫', '功能', '海关'], answer: '工夫' },
        { type: 'fill', sentence: '我表哥是___。', options: ['公务员', '歌手', '观众'], answer: '公务员' },
        { type: 'fill', sentence: '那位___在帮大家填表。', options: ['姑娘', '故乡', '个性'], answer: '姑娘' },
        { type: 'translate', prompt: 'Giọng hát của cô ấy đẹp thật, khán giả đều phấn khích.', answer: '她的歌声真美，观众都很激动。' },
        { type: 'translate', prompt: 'Ra nước ngoài khiến quan niệm của mình mở rộng nhiều.', answer: '出国让我的观念开阔了不少。' }
      ]
    }
  },

  // BÀI 94: 好好,后果,互联网,华人,话剧,会议,会员,积极性,基本上,基础,极了,集体,技术,家具,价值,简直,将近,较,教练,仅
  94: {
    id: 94, level: 3,
    title: 'Từ chức năng & liên từ (5)',
    context: 'Về nước, Mai họp online cùng Tiểu Mỹ qua internet để lập câu lạc bộ tiếng Hán cho cộng đồng người Hoa.',
    vocabPreview: ['互联网', '会议', '集体', '基础', '价值'],
    objectives: [
      "Nắm nhóm từ khóa: 互联网 · 会议 · 集体 · 基础 · 价值",
      "Kể/nghe hiểu tình huống Từ chức năng & liên từ (5) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 互联网 · 会议 · 集体",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "互联网 — mạng internet",
        explain: "Dùng 互联网 trong ngữ cảnh Từ chức năng & liên từ (5) để diễn đạt: mạng internet.",
        examples: [
          { zh: "我们用互联网开个会议吧，把华人留学生组织起来。", py: "Wǒmen yòng hùliánwǎng kāi gè huìyì ba, bǎ Huárén liúxuéshēng zǔzhī qǐlái.", vi: "Tụi mình dùng internet họp một buổi đi, tập hợp du học sinh người Hoa lại." }
        ] },
      { point: "会议 — hội nghị, cuộc họp",
        explain: "Dùng 会议 trong ngữ cảnh Từ chức năng & liên từ (5) để diễn đạt: hội nghị, cuộc họp.",
        examples: [
          { zh: "我们用互联网开个会议吧，把华人留学生组织起来。", py: "Wǒmen yòng hùliánwǎng kāi gè huìyì ba, bǎ Huárén liúxuéshēng zǔzhī qǐlái.", vi: "Tụi mình dùng internet họp một buổi đi, tập hợp du học sinh người Hoa lại." }
        ] },
      { point: "集体 — tập thể",
        explain: "Dùng 集体 trong ngữ cảnh Từ chức năng & liên từ (5) để diễn đạt: tập thể.",
        examples: [
          { zh: "我们还想排一出话剧，靠集体的力量一起做。", py: "Wǒmen hái xiǎng pái yì chū huàjù, kào jítǐ de lìliàng yìqǐ zuò.", vi: "Tụi mình còn muốn dựng một vở kịch nói, dựa vào sức mạnh tập thể cùng làm." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Phòng riêng · Buổi tối', bg: 'home', cast: ['mai', 'xiaomei'],
        text: 'Về nước, Mai mở máy tính họp online cùng Tiểu Mỹ.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '回国后我想好好整理一下学习资料。',
        pinyin: 'Huíguó hòu wǒ xiǎng hǎohǎo zhěnglǐ yíxià xuéxí zīliào.',
        meaning: 'Về nước rồi mình muốn sắp xếp lại tài liệu học cho tử tế.', expression: 'focused', vocab: ['好好'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我们用互联网开个会议吧，把华人留学生组织起来。',
        pinyin: 'Wǒmen yòng hùliánwǎng kāi gè huìyì ba, bǎ Huárén liúxuéshēng zǔzhī qǐlái.',
        meaning: 'Tụi mình dùng internet họp một buổi đi, tập hợp du học sinh người Hoa lại.', expression: 'happy', vocab: ['互联网', '会议', '华人'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好！想加入的都能当会员。大家积极性很高，基本上都想参加。',
        pinyin: 'Hǎo! Xiǎng jiārù de dōu néng dāng huìyuán. Dàjiā jījíxìng hěn gāo, jīběnshang dōu xiǎng cānjiā.',
        meaning: 'Được! Ai muốn vào đều làm hội viên. Mọi người rất nhiệt tình, về cơ bản đều muốn tham gia.', expression: 'happy', vocab: ['会员', '积极性', '基本上'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我们这一年打下了很好的基础，进步极了。',
        pinyin: 'Wǒmen zhè yì nián dǎxià le hěn hǎo de jīchǔ, jìnbù jí le.',
        meaning: 'Một năm qua tụi mình đã xây nền tảng rất tốt, tiến bộ cực kỳ.', expression: 'happy', vocab: ['基础', '极了'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'home', scene: '📍 Phòng riêng', expression: 'curious',
        q: 'Mai muốn nói "Kinh nghiệm này rất có giá trị". Chọn từ đúng?',
        options: [
          { text: '这段经验很有价值。', pinyin: 'Zhè duàn jīngyàn hěn yǒu jiàzhí.', meaning: 'Kinh nghiệm này rất có giá trị.', correct: true, feedback: 'Đúng! 价值 = giá trị.' },
          { text: '这段经验很有技术。', pinyin: 'Zhè duàn jīngyàn hěn yǒu jìshù.', meaning: '(lệch nghĩa)', correct: false, feedback: '技术 = kỹ thuật, không nói "có kỹ thuật" cho kinh nghiệm.' },
          { text: '这段经验很有家具。', pinyin: 'Zhè duàn jīngyàn hěn yǒu jiājù.', meaning: '(sai)', correct: false, feedback: '家具 = đồ nội thất, hoàn toàn sai nghĩa.' }
        ], vocab: ['价值', '技术', '家具'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我们还想排一出话剧，靠集体的力量一起做。',
        pinyin: 'Wǒmen hái xiǎng pái yì chū huàjù, kào jítǐ de lìliàng yìqǐ zuò.',
        meaning: 'Tụi mình còn muốn dựng một vở kịch nói, dựa vào sức mạnh tập thể cùng làm.', expression: 'focused', vocab: ['话剧', '集体'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这简直太棒了！将近二十人报名，比去年的水平较高。',
        pinyin: 'Zhè jiǎnzhí tài bàng le! Jiāngjìn èrshí rén bàomíng, bǐ qùnián de shuǐpíng jiào gāo.',
        meaning: 'Cái này đơn giản là tuyệt vời! Gần hai mươi người đăng ký, trình độ khá cao hơn năm ngoái.', expression: 'surprise', vocab: ['简直', '将近', '较'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '别担心后果，有教练指导，仅需多练习几次。',
        pinyin: 'Bié dānxīn hòuguǒ, yǒu jiàoliàn zhǐdǎo, jǐn xū duō liànxí jǐ cì.',
        meaning: 'Đừng lo hậu quả, có huấn luyện viên hướng dẫn, chỉ cần luyện thêm vài lần.', expression: 'happy', vocab: ['后果', '教练', '仅'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '太好了。我家里有空房间，家具也够，可以当排练场地。',
        pinyin: 'Tài hǎo le. Wǒ jiā li yǒu kòng fángjiān, jiājù yě gòu, kěyǐ dāng páiliàn chǎngdì.',
        meaning: 'Tuyệt quá. Nhà mình có phòng trống, đồ nội thất cũng đủ, có thể làm chỗ tập.', expression: 'happy', vocab: ['家具'] },
      { type: 'checkpoint', questions: [
        { q: '"互联网" có nghĩa là gì?', options: ['mạng internet', 'hội nghị', 'tập thể', 'kỹ thuật'], answer: 0 },
        { q: 'Từ nào nghĩa là "hậu quả"?', options: ['后果', '基础', '价值'], answer: 0 },
        { q: '"将近" có nghĩa là gì?', options: ['gần, sắp đến (số lượng)', 'cực kỳ', 'tập thể'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '好好', p: 'hǎo hǎo', v: 'tử tế, nghiêm túc', e: 'well' },
      { h: '后果', p: 'hòu guǒ', v: 'hậu quả', e: 'consequences' },
      { h: '互联网', p: 'hù lián wǎng', v: 'mạng internet', e: 'Internet' },
      { h: '华人', p: 'huá rén', v: 'người Hoa', e: 'ethnic Chinese person or people' },
      { h: '话剧', p: 'huà jù', v: 'kịch nói', e: 'stage play' },
      { h: '会议', p: 'huì yì', v: 'hội nghị, cuộc họp', e: 'meeting' },
      { h: '会员', p: 'huì yuán', v: 'hội viên, thành viên', e: 'member' },
      { h: '积极性', p: 'jī jí xìng', v: 'tính tích cực, nhiệt tình', e: 'zeal' },
      { h: '基本上', p: 'jī běn shang', v: 'về cơ bản', e: 'basically' },
      { h: '基础', p: 'jī chǔ', v: 'nền tảng, cơ sở', e: 'base' },
      { h: '极了', p: 'jí le', v: 'vô cùng, cực kỳ', e: 'extremely' },
      { h: '集体', p: 'jí tǐ', v: 'tập thể', e: 'collective (decision)' },
      { h: '技术', p: 'jì shù', v: 'kỹ thuật, công nghệ', e: 'technology' },
      { h: '家具', p: 'jiā jù', v: 'đồ nội thất, gia cụ', e: 'furniture' },
      { h: '价值', p: 'jià zhí', v: 'giá trị', e: 'value' },
      { h: '简直', p: 'jiǎn zhí', v: 'thật sự, đơn giản là', e: 'simply' },
      { h: '将近', p: 'jiāng jìn', v: 'gần, sắp đến', e: 'almost' },
      { h: '较', p: 'jiào', v: 'khá, tương đối', e: 'to compare' },
      { h: '教练', p: 'jiào liàn', v: 'huấn luyện viên', e: 'instructor' },
      { h: '仅', p: 'jǐn', v: 'chỉ, duy nhất', e: 'barely' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '我们用互联网开个会议吧', options: ['我们用互联网开个会议吧','我们去教室开会吧','我们打电话联系吧'], answer: '我们用互联网开个会议吧', py: 'Wǒmen yòng hùliánwǎng kāi gè huìyì ba', explain: '听 互联网 = mạng internet.' },
        { type: 'fill', sentence: '我们用___开会。', options: ['互联网', '话剧', '家具'], answer: '互联网' },
        { type: 'fill', sentence: '想加入的都能当___。', options: ['会员', '后果', '基础'], answer: '会员' },
        { type: 'fill', sentence: '我们排一出___。', options: ['话剧', '会议', '技术'], answer: '话剧' },
        { type: 'fill', sentence: '回家我要___整理资料。', options: ['好好', '将近', '较'], answer: '好好' },
        { type: 'fill', sentence: '有___指导我们。', options: ['教练', '会员', '集体'], answer: '教练' }
      ],
      normal: [
        { type: 'listen', audio: '我家里有空房间', options: ['我家里有空房间','我家里没有地方','我家离学校很近'], answer: '我家里有空房间', py: 'Wǒ jiā li yǒu kòng fángjiān', explain: '听 空房间 = phòng trống.' },
        { type: 'dictation', audio: '进步极了', answer: '进步极了', hint: 'Tiến bộ cực kỳ.', py: 'Jìnbù jí le', explain: '极了 = vô cùng, cực kỳ.' },
        { type: 'fill', sentence: '大家的___很高。', options: ['积极性', '后果', '互联网'], answer: '积极性' },
        { type: 'fill', sentence: '我们打下了好___。', options: ['基础', '会议', '话剧'], answer: '基础' },
        { type: 'fill', sentence: '靠___的力量一起做。', options: ['集体', '会员', '价值'], answer: '集体' },
        { type: 'fill', sentence: '这段经验很有___。', options: ['价值', '技术', '家具'], answer: '价值' },
        { type: 'fill', sentence: '___二十人报名了。', options: ['将近', '简直', '仅'], answer: '将近' },
        { type: 'order', words: ['我们', '用', '互联网', '开会议'], answer: '我们用互联网开会议' },
        { type: 'order', words: ['这', '简直', '太', '棒了'], answer: '这简直太棒了' }
      ],
      hard: [
        { type: 'fill', sentence: '别担心___，多练几次就好。', options: ['后果', '基础', '会员'], answer: '后果' },
        { type: 'fill', sentence: '比去年水平___高。', options: ['较', '极了', '好好'], answer: '较' },
        { type: 'fill', sentence: '___需多练习几次。', options: ['仅', '将近', '集体'], answer: '仅' },
        { type: 'fill', sentence: '把___留学生组织起来。', options: ['华人', '话剧', '技术'], answer: '华人' },
        { type: 'translate', prompt: 'Mọi người rất nhiệt tình, về cơ bản đều muốn tham gia.', answer: '大家积极性很高，基本上都想参加。' },
        { type: 'translate', prompt: 'Một năm qua tụi mình đã xây nền tảng rất tốt.', answer: '我们这一年打下了很好的基础。' }
      ]
    }
  },

  // BÀI 95: 仅仅,尽量,经济,精神,景色,空调,空儿,裤子,老百姓,老头儿,乐队,类,里面,力,力量,立刻,连忙,凉水,路线,旅行社
  95: {
    id: 95, level: 3,
    title: 'Từ chức năng & liên từ (6)',
    context: 'Mai đến công ty du lịch hỏi tuyến đường cho một chuyến đi trong nước, mẹ dặn dò đủ thứ.',
    vocabPreview: ['旅行社', '路线', '景色', '空调', '力量'],
    objectives: [
      "Nắm nhóm từ khóa: 旅行社 · 路线 · 景色 · 空调 · 力量",
      "Kể/nghe hiểu tình huống Từ chức năng & liên từ (6) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 旅行社 · 路线 · 景色",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "旅行社 — công ty du lịch",
        explain: "Dùng 旅行社 trong ngữ cảnh Từ chức năng & liên từ (6) để diễn đạt: công ty du lịch.",
        examples: [
          { zh: "我去旅行社问问路线。听说邻居老头儿也常出去玩。", py: "Wǒ qù lǚxíngshè wènwen lùxiàn. Tīngshuō línjū lǎotóur yě cháng chūqù wán.", vi: "Con đến công ty du lịch hỏi tuyến đường. Nghe nói ông cụ hàng xóm cũng hay đi chơi." }
        ] },
      { point: "路线 — lộ trình, tuyến đường",
        explain: "Dùng 路线 trong ngữ cảnh Từ chức năng & liên từ (6) để diễn đạt: lộ trình, tuyến đường.",
        examples: [
          { zh: "这条路线景色好，里面包含了山和湖，很受老百姓欢迎。", py: "Zhè tiáo lùxiàn jǐngsè hǎo, lǐmiàn bāohán le shān hé hú, hěn shòu lǎobǎixìng huānyíng.", vi: "Tuyến này cảnh đẹp, bên trong gồm cả núi và hồ, được dân thường rất ưa chuộng." }
        ] },
      { point: "景色 — cảnh sắc, phong cảnh",
        explain: "Dùng 景色 trong ngữ cảnh Từ chức năng & liên từ (6) để diễn đạt: cảnh sắc, phong cảnh.",
        examples: [
          { zh: "妈，我想尽量利用假期去旅行。国内经济发展快，景色也美。", py: "Mā, wǒ xiǎng jǐnliàng lìyòng jiàqī qù lǚxíng. Guónèi jīngjì fāzhǎn kuài, jǐngsè yě měi.", vi: "Mẹ ơi, con muốn cố tận dụng kỳ nghỉ đi du lịch. Kinh tế trong nước phát triển nhanh, cảnh sắc cũng đẹp." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Nhà Mai · Buổi sáng', bg: 'home', cast: ['mai', 'mama'],
        text: 'Nghỉ ở nhà ít hôm, Mai muốn đi du lịch trong nước.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '回来就好好休息，别仅仅顾着学习。',
        pinyin: 'Huílái jiù hǎohǎo xiūxi, bié jǐnjǐn gùzhe xuéxí.',
        meaning: 'Về rồi thì nghỉ ngơi cho tốt, đừng chỉ chăm chăm vào học.', expression: 'happy', vocab: ['仅仅'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '妈，我想尽量利用假期去旅行。国内经济发展快，景色也美。',
        pinyin: 'Mā, wǒ xiǎng jǐnliàng lìyòng jiàqī qù lǚxíng. Guónèi jīngjì fāzhǎn kuài, jǐngsè yě měi.',
        meaning: 'Mẹ ơi, con muốn cố tận dụng kỳ nghỉ đi du lịch. Kinh tế trong nước phát triển nhanh, cảnh sắc cũng đẹp.', expression: 'happy', vocab: ['尽量', '经济', '景色'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '我去旅行社问问路线。听说邻居老头儿也常出去玩。',
        pinyin: 'Wǒ qù lǚxíngshè wènwen lùxiàn. Tīngshuō línjū lǎotóur yě cháng chūqù wán.',
        meaning: 'Con đến công ty du lịch hỏi tuyến đường. Nghe nói ông cụ hàng xóm cũng hay đi chơi.', expression: null, vocab: ['旅行社', '路线', '老头儿'] },
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Công ty du lịch', bg: 'shop', cast: ['mai', 'fuwuyuan'],
        text: 'Mai đến công ty du lịch.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '这条路线景色好，里面包含了山和湖，很受老百姓欢迎。',
        pinyin: 'Zhè tiáo lùxiàn jǐngsè hǎo, lǐmiàn bāohán le shān hé hú, hěn shòu lǎobǎixìng huānyíng.',
        meaning: 'Tuyến này cảnh đẹp, bên trong gồm cả núi và hồ, được dân thường rất ưa chuộng.', expression: 'happy', vocab: ['里面', '老百姓'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '天热，车上有空调吗？我有空儿就想出发。',
        pinyin: 'Tiān rè, chē shàng yǒu kōngtiáo ma? Wǒ yǒu kòngr jiù xiǎng chūfā.',
        meaning: 'Trời nóng, trên xe có điều hòa không ạ? Hễ rảnh là em muốn lên đường.', expression: 'curious', vocab: ['空调', '空儿'] },
      { type: 'choice', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'], bg: 'shop', scene: '📍 Công ty du lịch', expression: 'focused',
        q: 'Trời nóng, nhân viên gợi ý đem theo gì? "Nên mang theo ___ (nước lạnh)". Chọn từ đúng?',
        options: [
          { text: '路上最好带点凉水。', pinyin: 'Lù shàng zuì hǎo dài diǎn liángshuǐ.', meaning: 'Trên đường tốt nhất mang theo chút nước lạnh.', correct: true, feedback: 'Đúng! 凉水 = nước lạnh/nước nguội.' },
          { text: '路上最好带点空调。', pinyin: 'Lù shàng zuì hǎo dài diǎn kōngtiáo.', meaning: '(sai)', correct: false, feedback: '空调 = điều hòa, không "mang theo" được.' },
          { text: '路上最好带点裤子。', pinyin: 'Lù shàng zuì hǎo dài diǎn kùzi.', meaning: '(lệch nghĩa)', correct: false, feedback: '裤子 = quần dài, không hợp ngữ cảnh giải khát.' }
        ], vocab: ['凉水', '空调', '裤子'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '好，我立刻订票，连忙告诉小美。再带条厚裤子防冷。',
        pinyin: 'Hǎo, wǒ lìkè dìng piào, liánmáng gàosu Xiǎoměi. Zài dài tiáo hòu kùzi fáng lěng.',
        meaning: 'Được, em đặt vé ngay, vội báo cho Tiểu Mỹ. Còn đem cái quần dày để chống lạnh.', expression: 'focused', vocab: ['立刻', '连忙', '裤子'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '这类旅行很适合学生。景区晚上还有乐队表演呢。',
        pinyin: 'Zhè lèi lǚxíng hěn shìhé xuéshēng. Jǐngqū wǎnshang hái yǒu yuèduì biǎoyǎn ne.',
        meaning: 'Loại du lịch này rất hợp với học sinh. Buổi tối khu du lịch còn có ban nhạc biểu diễn nữa.', expression: 'happy', vocab: ['类', '乐队'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '太好了！旅行能放松精神，给我新的力量和动力。',
        pinyin: 'Tài hǎo le! Lǚxíng néng fàngsōng jīngshén, gěi wǒ xīn de lìliàng hé dònglì.',
        meaning: 'Tuyệt quá! Du lịch giúp thư giãn tinh thần, cho em sức mạnh và động lực mới.', expression: 'happy', vocab: ['精神', '力量'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '是啊，年轻人就该多走走，靠自己的力去看世界。',
        pinyin: 'Shì a, niánqīng rén jiù gāi duō zǒuzou, kào zìjǐ de lì qù kàn shìjiè.',
        meaning: 'Đúng vậy, người trẻ nên đi nhiều, dựa vào sức mình để ngắm thế giới.', expression: 'happy', vocab: ['力'] },
      { type: 'checkpoint', questions: [
        { q: '"旅行社" có nghĩa là gì?', options: ['công ty du lịch', 'tuyến đường', 'ban nhạc', 'cảnh sắc'], answer: 0 },
        { q: 'Từ nào nghĩa là "ngay lập tức"?', options: ['立刻', '尽量', '仅仅'], answer: 0 },
        { q: '"景色" có nghĩa là gì?', options: ['cảnh sắc, phong cảnh', 'tinh thần', 'điều hòa'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '仅仅', p: 'jǐn jǐn', v: 'chỉ, chỉ vỏn vẹn', e: 'barely' },
      { h: '尽量', p: 'jǐn liàng', v: 'hết sức, cố gắng', e: 'as much as possible' },
      { h: '经济', p: 'jīng jì', v: 'kinh tế', e: 'economy' },
      { h: '精神', p: 'jīng shén', v: 'tinh thần', e: 'spirit' },
      { h: '景色', p: 'jǐng sè', v: 'cảnh sắc, phong cảnh', e: 'scenery' },
      { h: '空调', p: 'kōng tiáo', v: 'điều hòa không khí', e: 'air conditioning' },
      { h: '空儿', p: 'kòng r', v: 'thời gian rảnh rỗi', e: 'spare time' },
      { h: '裤子', p: 'kù zi', v: 'quần dài', e: 'trousers, pants' },
      { h: '老百姓', p: 'lǎo bǎi xìng', v: 'dân thường, người dân', e: 'ordinary people' },
      { h: '老头儿', p: 'lǎo tóu r', v: 'ông cụ, ông lão', e: 'see 老头子' },
      { h: '乐队', p: 'yuè duì', v: 'ban nhạc', e: 'band' },
      { h: '类', p: 'lèi', v: 'loại', e: 'kind' },
      { h: '里面', p: 'lǐ miàn', v: 'bên trong', e: 'inside' },
      { h: '力', p: 'lì', v: 'lực, sức', e: 'strength, force, power' },
      { h: '力量', p: 'lì liang', v: 'sức mạnh, lực lượng', e: 'power' },
      { h: '立刻', p: 'lì kè', v: 'ngay lập tức', e: 'forthwith' },
      { h: '连忙', p: 'lián máng', v: 'vội vàng, hấp tấp', e: 'promptly' },
      { h: '凉水', p: 'liáng shuǐ', v: 'nước lạnh, nước nguội', e: 'cool water' },
      { h: '路线', p: 'lù xiàn', v: 'lộ trình, tuyến đường', e: 'itinerary' },
      { h: '旅行社', p: 'lǚ xíng shè', v: 'công ty du lịch', e: 'travel agency' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '我想利用假期去旅行', options: ['我想利用假期去旅行','我想在家好好休息','我想找份兼职工作'], answer: '我想利用假期去旅行', py: 'Wǒ xiǎng lìyòng jiàqī qù lǚxíng', explain: '听 旅行 = du lịch.' },
        { type: 'fill', sentence: '我去___问路线。', options: ['旅行社', '景色', '乐队'], answer: '旅行社' },
        { type: 'fill', sentence: '这条___景色好。', options: ['路线', '空儿', '力'], answer: '路线' },
        { type: 'fill', sentence: '车上有___吗？', options: ['空调', '里面', '类'], answer: '空调' },
        { type: 'fill', sentence: '我___订票。', options: ['立刻', '仅仅', '经济'], answer: '立刻' },
        { type: 'fill', sentence: '晚上有___表演。', options: ['乐队', '路线', '裤子'], answer: '乐队' }
      ],
      normal: [
        { type: 'listen', audio: '我立刻订票', options: ['我立刻订票','我马上回家','我现在出发'], answer: '我立刻订票', py: 'Wǒ lìkè dìng piào', explain: '听 立刻 = ngay lập tức.' },
        { type: 'dictation', audio: '车上有空调吗', answer: '车上有空调吗', hint: 'Trên xe có điều hòa không?', py: 'Chē shàng yǒu kōngtiáo ma', explain: '空调 = điều hòa.' },
        { type: 'fill', sentence: '别___顾着学习。', options: ['仅仅', '尽量', '立刻'], answer: '仅仅' },
        { type: 'fill', sentence: '我想___利用假期。', options: ['尽量', '连忙', '里面'], answer: '尽量' },
        { type: 'fill', sentence: '国内___发展快。', options: ['经济', '精神', '力量'], answer: '经济' },
        { type: 'fill', sentence: '旅行能放松___。', options: ['精神', '空调', '路线'], answer: '精神' },
        { type: 'fill', sentence: '我有___就出发。', options: ['空儿', '景色', '老头儿'], answer: '空儿' },
        { type: 'order', words: ['我', '立刻', '订票', '了'], answer: '我立刻订票了' },
        { type: 'order', words: ['这', '类', '旅行', '适合学生'], answer: '这类旅行适合学生' }
      ],
      hard: [
        { type: 'fill', sentence: '路上最好带点___。', options: ['凉水', '空调', '裤子'], answer: '凉水' },
        { type: 'fill', sentence: '旅行给我新的___。', options: ['力量', '景色', '空儿'], answer: '力量' },
        { type: 'fill', sentence: '靠自己的___看世界。', options: ['力', '类', '里面'], answer: '力' },
        { type: 'fill', sentence: '很受___欢迎。', options: ['老百姓', '老头儿', '乐队'], answer: '老百姓' },
        { type: 'translate', prompt: 'Kinh tế trong nước phát triển nhanh, cảnh sắc cũng đẹp.', answer: '国内经济发展快，景色也美。' },
        { type: 'translate', prompt: 'Hễ rảnh là em muốn lên đường.', answer: '我有空儿就想出发。' }
      ]
    }
  },

  // BÀI 96: 慢慢,毛病,媒体,美食,美元,面积,民间,命运,木头,目标,男子,难道,内,内容,能力,农民,农业,女子,牌子,苹果
  96: {
    id: 96, level: 3,
    title: 'Từ chức năng & liên từ (7)',
    context: 'Một kênh truyền thông của trường phỏng vấn Mai về câu chuyện du học và mục tiêu của em.',
    vocabPreview: ['媒体', '目标', '能力', '内容', '命运'],
    objectives: [
      "Nắm nhóm từ khóa: 媒体 · 目标 · 能力 · 内容 · 命运",
      "Kể/nghe hiểu tình huống Từ chức năng & liên từ (7) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 媒体 · 目标 · 能力",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "媒体 — truyền thông",
        explain: "Dùng 媒体 trong ngữ cảnh Từ chức năng & liên từ (7) để diễn đạt: truyền thông.",
        examples: [
          { zh: "你好，我们是校园媒体，想采访你的留学故事。", py: "Nǐ hǎo, wǒmen shì xiàoyuán méitǐ, xiǎng cǎifǎng nǐ de liúxué gùshi.", vi: "Chào bạn, chúng tôi là kênh truyền thông của trường, muốn phỏng vấn câu chuyện du học của bạn." }
        ] },
      { point: "目标 — mục tiêu",
        explain: "Dùng 目标 trong ngữ cảnh Từ chức năng & liên từ (7) để diễn đạt: mục tiêu.",
        examples: [
          { zh: "留学这一年，你最大的目标是什么？", py: "Liúxué zhè yì nián, nǐ zuì dà de mùbiāo shì shénme?", vi: "Một năm du học, mục tiêu lớn nhất của bạn là gì?" },
          { zh: "我的目标是提高汉语能力，现在慢慢做到了。", py: "Wǒ de mùbiāo shì tígāo Hànyǔ nénglì, xiànzài mànman zuòdào le.", vi: "Mục tiêu của em là nâng cao năng lực tiếng Hán, giờ em từ từ làm được rồi." }
        ] },
      { point: "能力 — năng lực, khả năng",
        explain: "Dùng 能力 trong ngữ cảnh Từ chức năng & liên từ (7) để diễn đạt: năng lực, khả năng.",
        examples: [
          { zh: "我的目标是提高汉语能力，现在慢慢做到了。", py: "Wǒ de mùbiāo shì tígāo Hànyǔ nénglì, xiànzài mànman zuòdào le.", vi: "Mục tiêu của em là nâng cao năng lực tiếng Hán, giờ em từ từ làm được rồi." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Văn phòng · Buổi chiều', bg: 'office', cast: ['mai', 'fuwuyuan'],
        text: 'Một phóng viên của kênh truyền thông trường đến phỏng vấn Mai.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '你好，我们是校园媒体，想采访你的留学故事。',
        pinyin: 'Nǐ hǎo, wǒmen shì xiàoyuán méitǐ, xiǎng cǎifǎng nǐ de liúxué gùshi.',
        meaning: 'Chào bạn, chúng tôi là kênh truyền thông của trường, muốn phỏng vấn câu chuyện du học của bạn.', expression: 'happy', vocab: ['媒体'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '留学这一年，你最大的目标是什么？',
        pinyin: 'Liúxué zhè yì nián, nǐ zuì dà de mùbiāo shì shénme?',
        meaning: 'Một năm du học, mục tiêu lớn nhất của bạn là gì?', expression: 'curious', vocab: ['目标'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '我的目标是提高汉语能力，现在慢慢做到了。',
        pinyin: 'Wǒ de mùbiāo shì tígāo Hànyǔ nénglì, xiànzài mànman zuòdào le.',
        meaning: 'Mục tiêu của em là nâng cao năng lực tiếng Hán, giờ em từ từ làm được rồi.', expression: 'focused', vocab: ['能力', '慢慢'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '过程中遇到什么毛病或困难吗？',
        pinyin: 'Guòchéng zhōng yùdào shénme máobìng huò kùnnán ma?',
        meaning: 'Trong quá trình có gặp trục trặc hay khó khăn gì không?', expression: 'curious', vocab: ['毛病'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '一开始口语有毛病，难道就放弃吗？当然不。短时间内我进步很大。',
        pinyin: 'Yì kāishǐ kǒuyǔ yǒu máobìng, nándào jiù fàngqì ma? Dāngrán bù. Duǎn shíjiān nèi wǒ jìnbù hěn dà.',
        meaning: 'Lúc đầu khẩu ngữ có lỗi, chẳng lẽ lại bỏ cuộc sao? Tất nhiên không. Trong thời gian ngắn em tiến bộ rất nhiều.', expression: 'focused', vocab: ['难道', '内'] },
      { type: 'choice', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'], bg: 'office', scene: '📍 Văn phòng', expression: 'focused',
        q: 'Phóng viên khen bài viết của Mai: "Bài này ___ (nội dung) rất hay". Chọn từ đúng?',
        options: [
          { text: '这篇文章内容很好。', pinyin: 'Zhè piān wénzhāng nèiróng hěn hǎo.', meaning: 'Bài viết này nội dung rất hay.', correct: true, feedback: 'Đúng! 内容 = nội dung.' },
          { text: '这篇文章内很好。', pinyin: 'Zhè piān wénzhāng nèi hěn hǎo.', meaning: '(thiếu nghĩa)', correct: false, feedback: '内 = bên trong/trong vòng, không đứng một mình làm "nội dung".' },
          { text: '这篇文章面积很好。', pinyin: 'Zhè piān wénzhāng miànjī hěn hǎo.', meaning: '(sai)', correct: false, feedback: '面积 = diện tích, không hợp với bài viết.' }
        ], vocab: ['内容', '内', '面积'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '你体验了很多当地美食吧？还去过农村吗？',
        pinyin: 'Nǐ tǐyàn le hěn duō dāngdì měishí ba? Hái qùguo nóngcūn ma?',
        meaning: 'Bạn đã trải nghiệm nhiều món ngon địa phương chứ? Còn đi nông thôn chưa?', expression: 'happy', vocab: ['美食'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '对！民间小吃很棒，一个苹果才几毛钱，不到一美元。',
        pinyin: 'Duì! Mínjiān xiǎochī hěn bàng, yí gè píngguǒ cái jǐ máo qián, búdào yì Měiyuán.',
        meaning: 'Đúng! Quà vặt dân gian rất ngon, một quả táo chỉ vài hào, chưa tới một đô la Mỹ.', expression: 'happy', vocab: ['民间', '苹果', '美元'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '我看到农民种地，了解了农业，那里面积很大。我还买了个木头做的纪念品。',
        pinyin: 'Wǒ kàndào nóngmín zhòngdì, liǎojiě le nóngyè, nàli miànjī hěn dà. Wǒ hái mǎi le gè mùtou zuò de jìniànpǐn.',
        meaning: 'Em thấy nông dân trồng trọt, hiểu thêm về nông nghiệp, ở đó diện tích rất lớn. Em còn mua món lưu niệm làm bằng gỗ.', expression: null, vocab: ['农民', '农业', '面积', '木头'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '我觉得每个人的命运靠自己，无论男子女子都能成功。那个牌子的茶我也很喜欢。',
        pinyin: 'Wǒ juéde měi gè rén de mìngyùn kào zìjǐ, wúlùn nánzǐ nǚzǐ dōu néng chénggōng. Nàge páizi de chá wǒ yě hěn xǐhuan.',
        meaning: 'Em nghĩ số phận mỗi người là do chính mình, dù nam hay nữ đều có thể thành công. Loại trà của thương hiệu đó em cũng rất thích.', expression: 'happy', vocab: ['命运', '男子', '女子', '牌子'] },
      { type: 'checkpoint', questions: [
        { q: '"媒体" có nghĩa là gì?', options: ['truyền thông', 'mục tiêu', 'số phận', 'diện tích'], answer: 0 },
        { q: 'Từ nào nghĩa là "số phận, vận mệnh"?', options: ['命运', '能力', '内容'], answer: 0 },
        { q: '"难道" dùng để làm gì?', options: ['nhấn mạnh câu hỏi tu từ (chẳng lẽ)', 'chỉ thời gian', 'chỉ số lượng'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '慢慢', p: 'màn màn', v: 'từ từ, dần dần', e: 'slowly' },
      { h: '毛病', p: 'máo bìng', v: 'tật xấu, trục trặc, lỗi', e: 'fault' },
      { h: '媒体', p: 'méi tǐ', v: 'truyền thông', e: 'media, esp. news media' },
      { h: '美食', p: 'měi shí', v: 'ẩm thực, món ăn ngon', e: 'culinary delicacy' },
      { h: '美元', p: 'měi yuán', v: 'đô la Mỹ', e: 'American dollar' },
      { h: '面积', p: 'miàn jī', v: 'diện tích', e: 'area (of a floor, piece of land etc)' },
      { h: '民间', p: 'mín jiān', v: 'dân gian', e: 'among the people' },
      { h: '命运', p: 'mìng yùn', v: 'số phận, vận mệnh', e: 'fate' },
      { h: '木头', p: 'mù tou', v: 'gỗ', e: 'slow-witted' },
      { h: '目标', p: 'mù biāo', v: 'mục tiêu', e: 'target' },
      { h: '男子', p: 'nán zǐ', v: 'nam giới, đàn ông', e: 'a man' },
      { h: '难道', p: 'nán dào', v: 'chẳng lẽ, lẽ nào', e: 'don\\\'t tell me ...' },
      { h: '内', p: 'nèi', v: 'bên trong, trong vòng', e: 'inside' },
      { h: '内容', p: 'nèi róng', v: 'nội dung', e: 'content' },
      { h: '能力', p: 'néng lì', v: 'năng lực, khả năng', e: 'capability' },
      { h: '农民', p: 'nóng mín', v: 'nông dân', e: 'peasant' },
      { h: '农业', p: 'nóng yè', v: 'nông nghiệp', e: 'agriculture' },
      { h: '女子', p: 'nǚ zǐ', v: 'phụ nữ, nữ giới', e: 'woman' },
      { h: '牌子', p: 'pái zi', v: 'biển hiệu, nhãn hiệu', e: 'sign' },
      { h: '苹果', p: 'píng guǒ', v: 'táo (quả)', e: 'apple' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '我们想采访你的留学故事', options: ['我们想采访你的留学故事','我们想请你来表演','我们想跟你做朋友'], answer: '我们想采访你的留学故事', py: 'Wǒmen xiǎng cǎifǎng nǐ de liúxué gùshi', explain: '听 采访 = phỏng vấn.' },
        { type: 'fill', sentence: '我们是校园___。', options: ['媒体', '命运', '农业'], answer: '媒体' },
        { type: 'fill', sentence: '我最大的___是什么？', options: ['目标', '内容', '牌子'], answer: '目标' },
        { type: 'fill', sentence: '我提高了汉语___。', options: ['能力', '美元', '面积'], answer: '能力' },
        { type: 'fill', sentence: '一个___才几毛钱。', options: ['苹果', '木头', '男子'], answer: '苹果' },
        { type: 'fill', sentence: '我现在___做到了。', options: ['慢慢', '难道', '内'], answer: '慢慢' }
      ],
      normal: [
        { type: 'listen', audio: '我的目标是提高汉语能力', options: ['我的目标是提高汉语能力','我的爱好是看中国电影','我的计划是去中国旅游'], answer: '我的目标是提高汉语能力', py: 'Wǒ de mùbiāo shì tígāo Hànyǔ nénglì', explain: '听 目标 = mục tiêu; 能力 = năng lực.' },
        { type: 'dictation', audio: '难道就放弃吗', answer: '难道就放弃吗', hint: 'Chẳng lẽ lại bỏ cuộc?', py: 'Nándào jiù fàngqì ma', explain: '难道 = chẳng lẽ.' },
        { type: 'fill', sentence: '口语一开始有___。', options: ['毛病', '美食', '农民'], answer: '毛病' },
        { type: 'fill', sentence: '这篇文章___很好。', options: ['内容', '内', '面积'], answer: '内容' },
        { type: 'fill', sentence: '___就放弃吗？当然不。', options: ['难道', '慢慢', '民间'], answer: '难道' },
        { type: 'fill', sentence: '当地的___很棒。', options: ['美食', '能力', '木头'], answer: '美食' },
        { type: 'fill', sentence: '每个人的___靠自己。', options: ['命运', '内容', '美元'], answer: '命运' },
        { type: 'order', words: ['我', '的', '目标', '是提高能力'], answer: '我的目标是提高能力' },
        { type: 'order', words: ['一个', '苹果', '不到', '一美元'], answer: '一个苹果不到一美元' }
      ],
      hard: [
        { type: 'fill', sentence: '我看到___种地。', options: ['农民', '男子', '媒体'], answer: '农民' },
        { type: 'fill', sentence: '那里的___很大。', options: ['面积', '内容', '能力'], answer: '面积' },
        { type: 'fill', sentence: '无论___女子都能成功。', options: ['男子', '农业', '木头'], answer: '男子' },
        { type: 'fill', sentence: '那个___的茶很好喝。', options: ['牌子', '命运', '美元'], answer: '牌子' },
        { type: 'translate', prompt: 'Mục tiêu của em là nâng cao năng lực tiếng Hán.', answer: '我的目标是提高汉语能力。' },
        { type: 'translate', prompt: 'Số phận mỗi người là do chính mình.', answer: '每个人的命运靠自己。' }
      ]
    }
  }

});

// ───────────────────────────────────────────────────────
// BATCH 6 — Bài 97-101 (Đêm công diễn kịch · Thủ tục xin việc · Đoàn giao lưu văn hóa · Sự kiện sân khấu · Bài báo tạp chí)
// ───────────────────────────────────────────────────────
Object.assign(COURSE_DATA, {

  // BÀI 97: 其实,前后,桥,亲自,情感,情况,全场,全球,缺点,裙子,人才,人类,人民,人民币,人群,任务,仍,仍然,商品,商业
  97: {
    id: 97, level: 3,
    title: 'Từ chức năng & liên từ (8)',
    context: 'Ngày công diễn vở kịch của câu lạc bộ. Mai hồi hộp nhưng cả nhóm đã chuẩn bị kỹ; diễn xong em đi mua một chiếc váy tự thưởng.',
    vocabPreview: ['全场', '人群', '情感', '其实', '人民币'],
    objectives: [
      "Nắm nhóm từ khóa: 全场 · 人群 · 情感 · 其实 · 人民币",
      "Kể/nghe hiểu tình huống Từ chức năng & liên từ (8) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 全场 · 人群 · 情感",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "全场 — toàn trường, cả khán phòng",
        explain: "Dùng 全场 trong ngữ cảnh Từ chức năng & liên từ (8) để diễn đạt: toàn trường, cả khán phòng.",
        examples: [
          { zh: "全场坐满了人群，演出是为人民服务，也是我们的任务。", py: "Quánchǎng zuòmǎn le rénqún, yǎnchū shì wèi rénmín fúwù, yě shì wǒmen de rènwù.", vi: "Cả khán phòng kín người, biểu diễn là phục vụ nhân dân, cũng là nhiệm vụ của tụi mình." }
        ] },
      { point: "人群 — đám đông người",
        explain: "Dùng 人群 trong ngữ cảnh Từ chức năng & liên từ (8) để diễn đạt: đám đông người.",
        examples: [
          { zh: "全场坐满了人群，演出是为人民服务，也是我们的任务。", py: "Quánchǎng zuòmǎn le rénqún, yǎnchū shì wèi rénmín fúwù, yě shì wǒmen de rènwù.", vi: "Cả khán phòng kín người, biểu diễn là phục vụ nhân dân, cũng là nhiệm vụ của tụi mình." }
        ] },
      { point: "情感 — tình cảm, cảm xúc",
        explain: "Dùng 情感 trong ngữ cảnh Từ chức năng & liên từ (8) để diễn đạt: tình cảm, cảm xúc.",
        examples: [
          { zh: "这出戏讲人类的情感，很打动人。观众里有不少人才。", py: "Zhè chū xì jiǎng rénlèi de qínggǎn, hěn dǎdòng rén. Guānzhòng lǐ yǒu bù shǎo réncái.", vi: "Vở này nói về cảm xúc của loài người, rất lay động. Trong khán giả có nhiều nhân tài." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Sân khấu trường · Buổi tối', bg: 'campus', cast: ['mai', 'xiaomei'],
        text: 'Hôm nay là buổi công diễn đầu tiên vở kịch của câu lạc bộ.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '今天是话剧首演，我有点紧张。其实大家准备得很好。',
        pinyin: 'Jīntiān shì huàjù shǒuyǎn, wǒ yǒudiǎn jǐnzhāng. Qíshí dàjiā zhǔnbèi de hěn hǎo.',
        meaning: 'Hôm nay công diễn vở kịch, em hơi hồi hộp. Thực ra mọi người đã chuẩn bị rất tốt.', expression: 'sad', vocab: ['其实'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '别担心，台前后我们都演练过，情况都在掌握中。',
        pinyin: 'Bié dānxīn, tái qiánhòu wǒmen dōu yǎnliàn guo, qíngkuàng dōu zài zhǎngwò zhōng.',
        meaning: 'Đừng lo, trước sau sân khấu tụi mình đều tập rồi, tình hình đều trong tầm kiểm soát.', expression: 'focused', vocab: ['前后', '情况'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我亲自检查了道具，连那座小桥都做好了。',
        pinyin: 'Wǒ qīnzì jiǎnchá le dàojù, lián nà zuò xiǎo qiáo dōu zuò hǎo le.',
        meaning: 'Em đích thân kiểm tra đạo cụ, đến cây cầu nhỏ kia cũng làm xong rồi.', expression: 'focused', vocab: ['亲自', '桥'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这出戏讲人类的情感，很打动人。观众里有不少人才。',
        pinyin: 'Zhè chū xì jiǎng rénlèi de qínggǎn, hěn dǎdòng rén. Guānzhòng lǐ yǒu bù shǎo réncái.',
        meaning: 'Vở này nói về cảm xúc của loài người, rất lay động. Trong khán giả có nhiều nhân tài.', expression: 'happy', vocab: ['人类', '情感', '人才'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '全场坐满了人群，演出是为人民服务，也是我们的任务。',
        pinyin: 'Quánchǎng zuòmǎn le rénqún, yǎnchū shì wèi rénmín fúwù, yě shì wǒmen de rènwù.',
        meaning: 'Cả khán phòng kín người, biểu diễn là phục vụ nhân dân, cũng là nhiệm vụ của tụi mình.', expression: 'focused', vocab: ['全场', '人群', '人民', '任务'] },
      { type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'campus', scene: '📍 Sân khấu', expression: 'curious',
        q: 'Tiểu Mỹ động viên: "Dù có khuyết điểm nhỏ, vở kịch ___ rất hay". Chọn từ "vẫn"?',
        options: [
          { text: '这出戏仍然很好。', pinyin: 'Zhè chū xì réngrán hěn hǎo.', meaning: 'Vở kịch này vẫn rất hay.', correct: true, feedback: 'Đúng! 仍然 = vẫn, vẫn còn.' },
          { text: '这出戏全球很好。', pinyin: 'Zhè chū xì quánqiú hěn hǎo.', meaning: '(sai)', correct: false, feedback: '全球 = toàn cầu, không hợp ngữ pháp ở đây.' },
          { text: '这出戏商业很好。', pinyin: 'Zhè chū xì shāngyè hěn hǎo.', meaning: '(sai)', correct: false, feedback: '商业 = thương mại, sai nghĩa.' }
        ], vocab: ['仍然', '全球', '商业'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我们的戏其实有个小缺点，但观众仍很喜欢。演完我想去买条裙子奖励自己。',
        pinyin: 'Wǒmen de xì qíshí yǒu gè xiǎo quēdiǎn, dàn guānzhòng réng hěn xǐhuan. Yǎn wán wǒ xiǎng qù mǎi tiáo qúnzi jiǎnglì zìjǐ.',
        meaning: 'Vở của tụi mình thực ra có một khuyết điểm nhỏ, nhưng khán giả vẫn rất thích. Diễn xong em muốn mua chiếc váy tự thưởng.', expression: 'happy', vocab: ['缺点', '仍', '裙子'] },
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Cửa hàng · Sau buổi diễn', bg: 'shop', cast: ['mai', 'fuwuyuan'],
        text: 'Diễn xong, Mai ghé cửa hàng quần áo.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '这件商品是新款，用人民币付就行。',
        pinyin: 'Zhè jiàn shāngpǐn shì xīn kuǎn, yòng rénmínbì fù jiù xíng.',
        meaning: 'Món hàng này là mẫu mới, trả bằng Nhân dân tệ là được.', expression: 'happy', vocab: ['商品', '人民币'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '谢谢！如今商业这么发达，全球的好东西都能买到，真方便。',
        pinyin: 'Xièxie! Rújīn shāngyè zhème fādá, quánqiú de hǎo dōngxi dōu néng mǎidào, zhēn fāngbiàn.',
        meaning: 'Cảm ơn! Thời nay thương mại phát triển thế này, đồ tốt khắp toàn cầu đều mua được, thật tiện.', expression: 'happy', vocab: ['商业', '全球'] },
      { type: 'checkpoint', questions: [
        { q: '"全场" có nghĩa là gì?', options: ['cả khán phòng, toàn bộ', 'toàn cầu', 'đám đông', 'nhân tài'], answer: 0 },
        { q: 'Từ nào nghĩa là "đích thân"?', options: ['其实', '亲自', '仍然'], answer: 1 },
        { q: '"任务" có nghĩa là gì?', options: ['nhiệm vụ', 'tình cảm', 'nhân dân tệ'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '其实', p: 'qí shí', v: 'thực ra, thực chất', e: 'actually' },
      { h: '前后', p: 'qián hòu', v: 'trước sau, khoảng', e: 'around' },
      { h: '桥', p: 'qiáo', v: 'cầu', e: 'bridge' },
      { h: '亲自', p: 'qīn zì', v: 'đích thân', e: 'personally' },
      { h: '情感', p: 'qíng gǎn', v: 'tình cảm, cảm xúc', e: 'feeling' },
      { h: '情况', p: 'qíng kuàng', v: 'tình hình, hoàn cảnh', e: 'circumstances' },
      { h: '全场', p: 'quán chǎng', v: 'toàn trường, cả khán phòng', e: 'everyone present' },
      { h: '全球', p: 'quán qiú', v: 'toàn cầu', e: 'entire' },
      { h: '缺点', p: 'quē diǎn', v: 'điểm yếu, khuyết điểm', e: 'weak point' },
      { h: '裙子', p: 'qún zi', v: 'váy, chân váy', e: 'skirt' },
      { h: '人才', p: 'rén cái', v: 'nhân tài', e: 'talent' },
      { h: '人类', p: 'rén lèi', v: 'nhân loại, loài người', e: 'humanity' },
      { h: '人民', p: 'rén mín', v: 'nhân dân', e: 'the people' },
      { h: '人民币', p: 'rén mín bì', v: 'Nhân dân tệ', e: 'Renminbi (RMB)' },
      { h: '人群', p: 'rén qún', v: 'đám đông người', e: 'crowd' },
      { h: '任务', p: 'rèn wu', v: 'nhiệm vụ', e: 'mission' },
      { h: '仍', p: 'réng', v: 'vẫn, vẫn còn', e: 'still' },
      { h: '仍然', p: 'réng rán', v: 'vẫn, vẫn còn', e: 'still' },
      { h: '商品', p: 'shāng pǐn', v: 'hàng hóa, thương phẩm', e: 'commodity' },
      { h: '商业', p: 'shāng yè', v: 'thương mại', e: 'business' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '今天是话剧首演', options: ['今天是话剧首演','今天是开学第一天','明天有一场考试'], answer: '今天是话剧首演', py: 'Jīntiān shì huàjù shǒuyǎn', explain: '听 话剧 = kịch nói.' },
        { type: 'fill', sentence: '___大家准备得很好。', options: ['其实', '全球', '任务'], answer: '其实' },
        { type: 'fill', sentence: '我___检查了道具。', options: ['亲自', '仍然', '商业'], answer: '亲自' },
        { type: 'fill', sentence: '那座小___做好了。', options: ['桥', '裙子', '人群'], answer: '桥' },
        { type: 'fill', sentence: '___坐满了观众。', options: ['全场', '前后', '商品'], answer: '全场' },
        { type: 'fill', sentence: '我想买条___。', options: ['裙子', '缺点', '人才'], answer: '裙子' }
      ],
      normal: [
        { type: 'listen', audio: '我亲自检查了道具', options: ['我亲自检查了道具','我帮忙准备了服装','我已经背好了台词'], answer: '我亲自检查了道具', py: 'Wǒ qīnzì jiǎnchá le dàojù', explain: '听 亲自 = đích thân.' },
        { type: 'dictation', audio: '用人民币付就行', answer: '用人民币付就行', hint: 'Trả bằng Nhân dân tệ là được.', py: 'Yòng rénmínbì fù jiù xíng', explain: '人民币 = Nhân dân tệ.' },
        { type: 'fill', sentence: '这出戏讲人类的___。', options: ['情感', '情况', '商品'], answer: '情感' },
        { type: 'fill', sentence: '___都在掌握中。', options: ['情况', '人民', '全球'], answer: '情况' },
        { type: 'fill', sentence: '这是我们的___。', options: ['任务', '裙子', '桥'], answer: '任务' },
        { type: 'fill', sentence: '观众里有不少___。', options: ['人才', '人群', '缺点'], answer: '人才' },
        { type: 'fill', sentence: '用___付款就行。', options: ['人民币', '商业', '情感'], answer: '人民币' },
        { type: 'order', words: ['这出戏', '仍然', '很', '受欢迎'], answer: '这出戏仍然很受欢迎' },
        { type: 'order', words: ['演出', '是', '为', '人民服务'], answer: '演出是为人民服务' }
      ],
      hard: [
        { type: 'fill', sentence: '我们的戏有个小___。', options: ['缺点', '人才', '商品'], answer: '缺点' },
        { type: 'fill', sentence: '观众___很喜欢。', options: ['仍', '亲自', '全场'], answer: '仍' },
        { type: 'fill', sentence: '台___我们都演练过。', options: ['前后', '人群', '情感'], answer: '前后' },
        { type: 'fill', sentence: '如今___很发达。', options: ['商业', '任务', '桥'], answer: '商业' },
        { type: 'translate', prompt: 'Em đích thân kiểm tra đạo cụ.', answer: '我亲自检查了道具。' },
        { type: 'translate', prompt: 'Cả khán phòng kín người.', answer: '全场坐满了人群。' }
      ]
    }
  },

  // BÀI 98: 上面,上衣,身份证,生命,生意,时刻,实际上,实力,食品,始终,世界,事故,事件,事实,事实上,事业,室,手续,首先,书架
  98: {
    id: 98, level: 3,
    title: 'Từ chức năng & liên từ (9)',
    context: 'Mai đến một công ty thực phẩm làm thủ tục xin thực tập, suy nghĩ về sự nghiệp tương lai.',
    vocabPreview: ['手续', '身份证', '事业', '实力', '事实'],
    objectives: [
      "Nắm nhóm từ khóa: 手续 · 身份证 · 事业 · 实力 · 事实",
      "Kể/nghe hiểu tình huống Từ chức năng & liên từ (9) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 手续 · 身份证 · 事业",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "手续 — thủ tục",
        explain: "Dùng 手续 trong ngữ cảnh Từ chức năng & liên từ (9) để diễn đạt: thủ tục.",
        examples: [
          { zh: "办手续首先要出示身份证。", py: "Bàn shǒuxù shǒuxiān yào chūshì shēnfènzhèng.", vi: "Làm thủ tục trước hết phải xuất trình chứng minh nhân dân." }
        ] },
      { point: "身份证 — chứng minh nhân dân",
        explain: "Dùng 身份证 trong ngữ cảnh Từ chức năng & liên từ (9) để diễn đạt: chứng minh nhân dân.",
        examples: [
          { zh: "办手续首先要出示身份证。", py: "Bàn shǒuxù shǒuxiān yào chūshì shēnfènzhèng.", vi: "Làm thủ tục trước hết phải xuất trình chứng minh nhân dân." }
        ] },
      { point: "事业 — sự nghiệp",
        explain: "Dùng 事业 trong ngữ cảnh Từ chức năng & liên từ (9) để diễn đạt: sự nghiệp.",
        examples: [
          { zh: "我会把工作当成事业，始终认真。", py: "Wǒ huì bǎ gōngzuò dàngchéng shìyè, shǐzhōng rènzhēn.", vi: "Em sẽ coi công việc là sự nghiệp, luôn luôn nghiêm túc." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Văn phòng công ty · Buổi sáng', bg: 'office', cast: ['mai', 'fuwuyuan'],
        text: 'Mai đến công ty thực phẩm xin thực tập.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '办手续首先要出示身份证。',
        pinyin: 'Bàn shǒuxù shǒuxiān yào chūshì shēnfènzhèng.',
        meaning: 'Làm thủ tục trước hết phải xuất trình chứng minh nhân dân.', expression: 'focused', vocab: ['手续', '首先', '身份证'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '好的，证件在这儿。我想在贵公司实习，了解生意是怎么做的。',
        pinyin: 'Hǎo de, zhèngjiàn zài zhèr. Wǒ xiǎng zài guì gōngsī shíxí, liǎojiě shēngyi shì zěnme zuò de.',
        meaning: 'Vâng, giấy tờ đây ạ. Em muốn thực tập ở quý công ty, để hiểu việc kinh doanh làm thế nào.', expression: 'happy', vocab: ['生意'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '我们公司在食品行业，实际上规模不小，很有实力。',
        pinyin: 'Wǒmen gōngsī zài shípǐn hángyè, shíjìshàng guīmó bù xiǎo, hěn yǒu shílì.',
        meaning: 'Công ty chúng tôi trong ngành thực phẩm, thực tế quy mô không nhỏ, rất có thực lực.', expression: 'happy', vocab: ['食品', '实际上', '实力'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '我会把工作当成事业，始终认真。',
        pinyin: 'Wǒ huì bǎ gōngzuò dàngchéng shìyè, shǐzhōng rènzhēn.',
        meaning: 'Em sẽ coi công việc là sự nghiệp, luôn luôn nghiêm túc.', expression: 'focused', vocab: ['事业', '始终'] },
      { type: 'choice', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'], bg: 'office', scene: '📍 Văn phòng', expression: 'curious',
        q: 'Nhân viên nhấn mạnh: "Đây là ___ (sự thật), không phải tin đồn". Chọn từ đúng?',
        options: [
          { text: '这是事实，不是传言。', pinyin: 'Zhè shì shìshí, bú shì chuányán.', meaning: 'Đây là sự thật, không phải tin đồn.', correct: true, feedback: 'Đúng! 事实 = sự thật.' },
          { text: '这是事件，不是传言。', pinyin: 'Zhè shì shìjiàn, bú shì chuányán.', meaning: '(lệch nghĩa)', correct: false, feedback: '事件 = sự kiện (vụ việc), không phải "sự thật".' },
          { text: '这是事故，不是传言。', pinyin: 'Zhè shì shìgù, bú shì chuányán.', meaning: '(sai)', correct: false, feedback: '事故 = tai nạn, sai nghĩa.' }
        ], vocab: ['事实', '事件', '事故'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '事实上，安全第一，绝不能发生事故。公司每个时刻都重视员工的生命。',
        pinyin: 'Shìshíshàng, ānquán dìyī, jué bùnéng fāshēng shìgù. Gōngsī měi gè shíkè dōu zhòngshì yuángōng de shēngmìng.',
        meaning: 'Thực tế, an toàn là trên hết, tuyệt đối không được xảy ra tai nạn. Mỗi thời khắc công ty đều coi trọng sinh mệnh nhân viên.', expression: 'focused', vocab: ['事实上', '时刻', '生命'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '我明白。请问资料室在哪？我把文件放书架上面。',
        pinyin: 'Wǒ míngbai. Qǐngwèn zīliào shì zài nǎ? Wǒ bǎ wénjiàn fàng shūjià shàngmiàn.',
        meaning: 'Em hiểu rồi. Cho hỏi phòng tư liệu ở đâu ạ? Em để tài liệu lên trên kệ sách.', expression: 'curious', vocab: ['室', '书架', '上面'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '在那边。天冷加件上衣。最近有个安全事件，大家都在学习。',
        pinyin: 'Zài nàbiān. Tiān lěng jiā jiàn shàngyī. Zuìjìn yǒu gè ānquán shìjiàn, dàjiā dōu zài xuéxí.',
        meaning: 'Ở đằng kia. Trời lạnh khoác thêm áo. Gần đây có một sự kiện an toàn, mọi người đều đang học hỏi.', expression: null, vocab: ['上衣', '事件'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '谢谢！能在这样的公司工作，是了解世界的好机会。',
        pinyin: 'Xièxie! Néng zài zhèyàng de gōngsī gōngzuò, shì liǎojiě shìjiè de hǎo jīhuì.',
        meaning: 'Cảm ơn! Được làm ở công ty thế này là cơ hội tốt để hiểu thế giới.', expression: 'happy', vocab: ['世界'] },
      { type: 'checkpoint', questions: [
        { q: '"手续" có nghĩa là gì?', options: ['thủ tục', 'sự nghiệp', 'kệ sách', 'thực phẩm'], answer: 0 },
        { q: 'Từ nào nghĩa là "chứng minh nhân dân"?', options: ['身份证', '事实', '上衣'], answer: 0 },
        { q: '"始终" có nghĩa là gì?', options: ['từ đầu đến cuối, luôn luôn', 'thực tế là', 'phía trên'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '上面', p: 'shàng miàn', v: 'phía trên, bề mặt', e: 'on top of' },
      { h: '上衣', p: 'shàng yī', v: 'áo, áo khoác', e: 'jacket' },
      { h: '身份证', p: 'shēn fèn zhèng', v: 'chứng minh nhân dân', e: 'identity card' },
      { h: '生命', p: 'shēng mìng', v: 'sinh mệnh, mạng sống', e: 'life (as the characteristic of living beings)' },
      { h: '生意', p: 'shēng yì', v: 'kinh doanh, buôn bán', e: 'life force' },
      { h: '时刻', p: 'shí kè', v: 'thời khắc, lúc', e: 'time' },
      { h: '实际上', p: 'shí jì shàng', v: 'thực tế là', e: 'in fact' },
      { h: '实力', p: 'shí lì', v: 'thực lực', e: 'strength' },
      { h: '食品', p: 'shí pǐn', v: 'thực phẩm', e: 'foodstuff' },
      { h: '始终', p: 'shǐ zhōng', v: 'từ đầu đến cuối, luôn luôn', e: 'from beginning to end' },
      { h: '世界', p: 'shì jiè', v: 'thế giới', e: 'world' },
      { h: '事故', p: 'shì gù', v: 'tai nạn, sự cố', e: 'accident' },
      { h: '事件', p: 'shì jiàn', v: 'sự kiện, vụ việc', e: 'event' },
      { h: '事实', p: 'shì shí', v: 'sự thật', e: 'fact' },
      { h: '事实上', p: 'shì shí shàng', v: 'thực tế là', e: 'in fact' },
      { h: '事业', p: 'shì yè', v: 'sự nghiệp', e: 'undertaking' },
      { h: '室', p: 'shì', v: 'phòng, gian', e: 'room, chamber' },
      { h: '手续', p: 'shǒu xù', v: 'thủ tục', e: 'procedure' },
      { h: '首先', p: 'shǒu xiān', v: 'trước hết, đầu tiên', e: 'first (of all)' },
      { h: '书架', p: 'shū jià', v: 'kệ sách', e: 'bookshelf' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '办手续首先要出示身份证', options: ['办手续首先要出示身份证','买东西要先付钱','进门前要先敲门'], answer: '办手续首先要出示身份证', py: 'Bàn shǒuxù shǒuxiān yào chūshì shēnfènzhèng', explain: '听 首先 = trước hết; 身份证 = CMND.' },
        { type: 'fill', sentence: '办___要出示身份证。', options: ['手续', '事业', '世界'], answer: '手续' },
        { type: 'fill', sentence: '___要出示身份证。', options: ['首先', '始终', '上面'], answer: '首先' },
        { type: 'fill', sentence: '请出示___。', options: ['身份证', '书架', '上衣'], answer: '身份证' },
        { type: 'fill', sentence: '公司在___行业。', options: ['食品', '生命', '事故'], answer: '食品' },
        { type: 'fill', sentence: '我把文件放在书架___。', options: ['上面', '室', '实力'], answer: '上面' }
      ],
      normal: [
        { type: 'listen', audio: '安全第一', options: ['安全第一','质量第一','顾客第一'], answer: '安全第一', py: 'Ānquán dìyī', explain: '听 安全 = an toàn; 第一 = số một.' },
        { type: 'dictation', audio: '我想在贵公司实习', answer: '我想在贵公司实习', hint: 'Em muốn thực tập ở quý công ty.', py: 'Wǒ xiǎng zài guì gōngsī shíxí', explain: '实习 = thực tập.' },
        { type: 'fill', sentence: '我会把工作当成___。', options: ['事业', '事故', '上衣'], answer: '事业' },
        { type: 'fill', sentence: '公司很有___。', options: ['实力', '手续', '书架'], answer: '实力' },
        { type: 'fill', sentence: '___，规模不小。', options: ['实际上', '首先', '上面'], answer: '实际上' },
        { type: 'fill', sentence: '我想了解___怎么做。', options: ['生意', '事件', '室'], answer: '生意' },
        { type: 'fill', sentence: '我___认真工作。', options: ['始终', '上面', '世界'], answer: '始终' },
        { type: 'order', words: ['这', '是', '事实', '不是传言'], answer: '这是事实不是传言' },
        { type: 'order', words: ['绝', '不能', '发生', '事故'], answer: '绝不能发生事故' }
      ],
      hard: [
        { type: 'fill', sentence: '公司重视员工的___。', options: ['生命', '生意', '上衣'], answer: '生命' },
        { type: 'fill', sentence: '请问资料___在哪？', options: ['室', '事业', '首先'], answer: '室' },
        { type: 'fill', sentence: '天冷加件___。', options: ['上衣', '书架', '手续'], answer: '上衣' },
        { type: 'fill', sentence: '每个___都很重要。', options: ['时刻', '食品', '事实'], answer: '时刻' },
        { type: 'translate', prompt: 'Em sẽ coi công việc là sự nghiệp, luôn nghiêm túc.', answer: '我会把工作当成事业，始终认真。' },
        { type: 'translate', prompt: 'An toàn là trên hết, không được xảy ra tai nạn.', answer: '安全第一，不能发生事故。' }
      ]
    }
  },

  // BÀI 99: 熟人,数量,速度,所,特色,铁路,听力,听众,团,团体,外交,外面,玩具,卫生间,文化,文件,文章,文字,屋子,武器
  99: {
    id: 99, level: 3,
    title: 'Từ chức năng & liên từ (10)',
    context: 'Mai tham gia một đoàn thể giao lưu văn hóa Việt - Trung, cùng Tiểu Mỹ lên kế hoạch đi tàu và viết bài.',
    vocabPreview: ['团体', '文化', '特色', '铁路', '速度'],
    objectives: [
      "Nắm nhóm từ khóa: 团体 · 文化 · 特色 · 铁路 · 速度",
      "Kể/nghe hiểu tình huống Từ chức năng & liên từ (10) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 团体 · 文化 · 特色",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "团体 — đoàn thể, tập thể",
        explain: "Dùng 团体 trong ngữ cảnh Từ chức năng & liên từ (10) để diễn đạt: đoàn thể, tập thể.",
        examples: [
          { zh: "我们这个团体要做中越文化交流，你来当成员吧！", py: "Wǒmen zhège tuántǐ yào zuò Zhōng-Yuè wénhuà jiāoliú, nǐ lái dāng chéngyuán ba!", vi: "Đoàn thể của tụi mình làm giao lưu văn hóa Trung - Việt, cậu vào làm thành viên đi!" }
        ] },
      { point: "文化 — văn hóa",
        explain: "Dùng 文化 trong ngữ cảnh Từ chức năng & liên từ (10) để diễn đạt: văn hóa.",
        examples: [
          { zh: "太好了，群里有不少熟人，数量还在增加。这所学校文化氛围特别好。", py: "Tài hǎo le, qún lǐ yǒu bù shǎo shúrén, shùliàng hái zài zēngjiā. Zhè suǒ xuéxiào wénhuà fēnwéi tèbié hǎo.", vi: "Tuyệt quá, trong nhóm có nhiều người quen, số lượng còn tăng. Ngôi trường này không khí văn hóa đặc biệt tốt." },
          { zh: "对，国家搞外交也常用文化交流这种形式，文化不是武器，却能拉近人心。", py: "Duì, guójiā gǎo wàijiāo yě cháng yòng wénhuà jiāoliú zhè zhǒng xíngshì, wénhuà bú shì wǔqì, què néng lājìn rénxīn.", vi: "Đúng, nhà nước làm ngoại giao cũng hay dùng hình thức giao lưu văn hóa này, văn hóa không phải vũ khí nhưng lại kéo gần lòng người." }
        ] },
      { point: "特色 — đặc sắc, đặc trưng",
        explain: "Dùng 特色 trong ngữ cảnh Từ chức năng & liên từ (10) để diễn đạt: đặc sắc, đặc trưng.",
        examples: [
          { zh: "这次活动很有特色，听众多，我的听力也能练。我们坐铁路去，高铁速度很快。", py: "Zhè cì huódòng hěn yǒu tèsè, tīngzhòng duō, wǒ de tīnglì yě néng liàn. Wǒmen zuò tiělù qù, gāotiě sùdù hěn kuài.", vi: "Hoạt động lần này rất đặc sắc, thính giả đông, khả năng nghe của mình cũng luyện được. Tụi mình đi tàu, tàu cao tốc tốc độ rất nhanh." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Văn phòng câu lạc bộ · Buổi chiều', bg: 'office', cast: ['mai', 'xiaomei'],
        text: 'Mai và Tiểu Mỹ bàn về một đoàn thể giao lưu văn hóa.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我们这个团体要做中越文化交流，你来当成员吧！',
        pinyin: 'Wǒmen zhège tuántǐ yào zuò Zhōng-Yuè wénhuà jiāoliú, nǐ lái dāng chéngyuán ba!',
        meaning: 'Đoàn thể của tụi mình làm giao lưu văn hóa Trung - Việt, cậu vào làm thành viên đi!', expression: 'happy', vocab: ['团体', '文化'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好啊！我对文字和文章很感兴趣，可以写稿、整理文件。',
        pinyin: 'Hǎo a! Wǒ duì wénzì hé wénzhāng hěn gǎn xìngqù, kěyǐ xiě gǎo, zhěnglǐ wénjiàn.',
        meaning: 'Được! Mình rất hứng thú với chữ viết và bài văn, có thể viết bài, sắp xếp tài liệu.', expression: 'happy', vocab: ['文字', '文章', '文件'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '太好了，群里有不少熟人，数量还在增加。这所学校文化氛围特别好。',
        pinyin: 'Tài hǎo le, qún lǐ yǒu bù shǎo shúrén, shùliàng hái zài zēngjiā. Zhè suǒ xuéxiào wénhuà fēnwéi tèbié hǎo.',
        meaning: 'Tuyệt quá, trong nhóm có nhiều người quen, số lượng còn tăng. Ngôi trường này không khí văn hóa đặc biệt tốt.', expression: 'happy', vocab: ['熟人', '数量', '所'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这次活动很有特色，听众多，我的听力也能练。我们坐铁路去，高铁速度很快。',
        pinyin: 'Zhè cì huódòng hěn yǒu tèsè, tīngzhòng duō, wǒ de tīnglì yě néng liàn. Wǒmen zuò tiělù qù, gāotiě sùdù hěn kuài.',
        meaning: 'Hoạt động lần này rất đặc sắc, thính giả đông, khả năng nghe của mình cũng luyện được. Tụi mình đi tàu, tàu cao tốc tốc độ rất nhanh.', expression: 'focused', vocab: ['特色', '听众', '听力', '铁路', '速度'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '对，国家搞外交也常用文化交流这种形式，文化不是武器，却能拉近人心。',
        pinyin: 'Duì, guójiā gǎo wàijiāo yě cháng yòng wénhuà jiāoliú zhè zhǒng xíngshì, wénhuà bú shì wǔqì, què néng lājìn rénxīn.',
        meaning: 'Đúng, nhà nước làm ngoại giao cũng hay dùng hình thức giao lưu văn hóa này, văn hóa không phải vũ khí nhưng lại kéo gần lòng người.', expression: null, vocab: ['外交', '武器'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'office', scene: '📍 Văn phòng', expression: 'curious',
        q: 'Cuối buổi, Mai dặn: "Mọi người tập trung ở ___ (bên ngoài) nhà vệ sinh". Chọn từ đúng?',
        options: [
          { text: '大家在卫生间外面集合。', pinyin: 'Dàjiā zài wèishēngjiān wàimiàn jíhé.', meaning: 'Mọi người tập trung bên ngoài nhà vệ sinh.', correct: true, feedback: 'Đúng! 外面 = bên ngoài.' },
          { text: '大家在卫生间屋子集合。', pinyin: 'Dàjiā zài wèishēngjiān wūzi jíhé.', meaning: '(sai)', correct: false, feedback: '屋子 = căn phòng, không hợp ngữ pháp ở đây.' },
          { text: '大家在卫生间玩具集合。', pinyin: 'Dàjiā zài wèishēngjiān wánjù jíhé.', meaning: '(sai)', correct: false, feedback: '玩具 = đồ chơi, hoàn toàn sai.' }
        ], vocab: ['外面', '屋子', '玩具', '卫生间'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '整理一下，把玩具收进屋子里，活动结束这个团就解散。',
        pinyin: 'Zhěnglǐ yíxià, bǎ wánjù shōu jìn wūzi lǐ, huódòng jiéshù zhège tuán jiù jiěsàn.',
        meaning: 'Dọn dẹp chút, cất đồ chơi vào phòng, kết thúc hoạt động là nhóm này giải tán.', expression: 'happy', vocab: ['玩具', '屋子', '团'] },
      { type: 'checkpoint', questions: [
        { q: '"团体" có nghĩa là gì?', options: ['đoàn thể, tập thể', 'người quen', 'vũ khí', 'tốc độ'], answer: 0 },
        { q: 'Từ nào nghĩa là "đường sắt"?', options: ['铁路', '外交', '文化'], answer: 0 },
        { q: '"熟人" có nghĩa là gì?', options: ['người quen', 'thính giả', 'số lượng'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '熟人', p: 'shú rén', v: 'người quen', e: 'acquaintance' },
      { h: '数量', p: 'shù liàng', v: 'số lượng', e: 'amount' },
      { h: '速度', p: 'sù dù', v: 'tốc độ', e: 'speed' },
      { h: '所', p: 'suǒ', v: 'nơi, chỗ (lượng từ trường học)', e: 'actually' },
      { h: '特色', p: 'tè sè', v: 'đặc sắc, đặc trưng', e: 'characteristic' },
      { h: '铁路', p: 'tiě lù', v: 'đường sắt', e: 'railroad' },
      { h: '听力', p: 'tīng lì', v: 'khả năng nghe', e: 'hearing' },
      { h: '听众', p: 'tīng zhòng', v: 'thính giả', e: 'audience' },
      { h: '团', p: 'tuán', v: 'đoàn, nhóm', e: 'round' },
      { h: '团体', p: 'tuán tǐ', v: 'đoàn thể, tập thể', e: 'group' },
      { h: '外交', p: 'wài jiāo', v: 'ngoại giao', e: 'diplomacy' },
      { h: '外面', p: 'wài miàn', v: 'bên ngoài', e: 'outside (also pr. [wài mian] for this sense)' },
      { h: '玩具', p: 'wán jù', v: 'đồ chơi', e: 'plaything' },
      { h: '卫生间', p: 'wèi shēng jiān', v: 'nhà vệ sinh', e: 'bathroom' },
      { h: '文化', p: 'wén huà', v: 'văn hóa', e: 'culture' },
      { h: '文件', p: 'wén jiàn', v: 'văn bản, tài liệu', e: 'document' },
      { h: '文章', p: 'wén zhāng', v: 'bài viết, văn chương', e: 'article' },
      { h: '文字', p: 'wén zì', v: 'chữ viết', e: 'character' },
      { h: '屋子', p: 'wū zi', v: 'căn phòng', e: 'house' },
      { h: '武器', p: 'wǔ qì', v: 'vũ khí', e: 'weapon' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '我对文字和文章很感兴趣', options: ['我对文字和文章很感兴趣','我对音乐和舞蹈很感兴趣','我对体育运动很感兴趣'], answer: '我对文字和文章很感兴趣', py: 'Wǒ duì wénzì hé wénzhāng hěn gǎn xìngqù', explain: '听 文字 = chữ viết; 文章 = bài văn.' },
        { type: 'fill', sentence: '我们这个___做文化交流。', options: ['团体', '武器', '速度'], answer: '团体' },
        { type: 'fill', sentence: '中越___交流很有意义。', options: ['文化', '玩具', '铁路'], answer: '文化' },
        { type: 'fill', sentence: '我们坐___去。', options: ['铁路', '听众', '文件'], answer: '铁路' },
        { type: 'fill', sentence: '高铁___很快。', options: ['速度', '数量', '外交'], answer: '速度' },
        { type: 'fill', sentence: '我对___很感兴趣。', options: ['文字', '武器', '熟人'], answer: '文字' }
      ],
      normal: [
        { type: 'listen', audio: '高铁速度很快', options: ['高铁速度很快','火车速度很慢','汽车开得很慢'], answer: '高铁速度很快', py: 'Gāotiě sùdù hěn kuài', explain: '听 速度 = tốc độ.' },
        { type: 'dictation', audio: '把玩具收进屋子里', answer: '把玩具收进屋子里', hint: 'Cất đồ chơi vào phòng.', py: 'Bǎ wánjù shōu jìn wūzi lǐ', explain: '玩具 = đồ chơi; 屋子 = căn phòng.' },
        { type: 'fill', sentence: '群里有不少___。', options: ['熟人', '听众', '玩具'], answer: '熟人' },
        { type: 'fill', sentence: '成员的___还在增加。', options: ['数量', '文化', '外交'], answer: '数量' },
        { type: 'fill', sentence: '这次活动很有___。', options: ['特色', '速度', '屋子'], answer: '特色' },
        { type: 'fill', sentence: '我的___也能练。', options: ['听力', '文件', '团'], answer: '听力' },
        { type: 'fill', sentence: '国家搞___用文化交流。', options: ['外交', '武器', '数量'], answer: '外交' },
        { type: 'order', words: ['大家', '在', '外面', '集合'], answer: '大家在外面集合' },
        { type: 'order', words: ['把', '玩具', '收进', '屋子里'], answer: '把玩具收进屋子里' }
      ],
      hard: [
        { type: 'fill', sentence: '文化不是___。', options: ['武器', '团体', '速度'], answer: '武器' },
        { type: 'fill', sentence: '这___学校文化氛围好。', options: ['所', '团', '室'], answer: '所' },
        { type: 'fill', sentence: '台下的___很多。', options: ['听众', '熟人', '玩具'], answer: '听众' },
        { type: 'fill', sentence: '我可以整理___。', options: ['文件', '速度', '外交'], answer: '文件' },
        { type: 'translate', prompt: 'Tàu cao tốc tốc độ rất nhanh.', answer: '高铁速度很快。' },
        { type: 'translate', prompt: 'Văn hóa không phải vũ khí, nhưng kéo gần lòng người.', answer: '文化不是武器，却能拉近人心。' }
      ]
    }
  },

  // BÀI 100: 舞台,下面,现场,现金,香蕉,消息,效果,形式,形状,性别,需求,血,压力,烟,演员,已,以来,意义,因此,优点
  100: {
    id: 100, level: 3,
    title: 'Từ chức năng & liên từ (11)',
    context: 'Một sự kiện sân khấu trực tiếp, Mai và Tiểu Mỹ vừa diễn vừa trò chuyện về sức khỏe và ý nghĩa của hoạt động.',
    vocabPreview: ['舞台', '现场', '意义', '压力', '演员'],
    objectives: [
      "Nắm nhóm từ khóa: 舞台 · 现场 · 意义 · 压力 · 演员",
      "Kể/nghe hiểu tình huống Từ chức năng & liên từ (11) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 舞台 · 现场 · 意义",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "舞台 — sân khấu",
        explain: "Dùng 舞台 trong ngữ cảnh Từ chức năng & liên từ (11) để diễn đạt: sân khấu.",
        examples: [
          { zh: "站在舞台上，看下面全是观众，现场气氛真好！", py: "Zhàn zài wǔtái shàng, kàn xiàmiàn quán shì guānzhòng, xiànchǎng qìfēn zhēn hǎo!", vi: "Đứng trên sân khấu, nhìn phía dưới toàn khán giả, không khí hiện trường thật tuyệt!" }
        ] },
      { point: "现场 — hiện trường, tại chỗ",
        explain: "Dùng 现场 trong ngữ cảnh Từ chức năng & liên từ (11) để diễn đạt: hiện trường, tại chỗ.",
        examples: [
          { zh: "灯光效果不错。这种现场形式很受欢迎。", py: "Dēngguāng xiàoguǒ búcuò. Zhè zhǒng xiànchǎng xíngshì hěn shòu huānyíng.", vi: "Hiệu quả ánh sáng tốt đấy. Hình thức trực tiếp này rất được ưa chuộng." },
          { zh: "这些纪念品形状可爱，现场只收现金。", py: "Zhèxiē jìniànpǐn xíngzhuàng kě'ài, xiànchǎng zhǐ shōu xiànjīn.", vi: "Mấy món lưu niệm hình dáng dễ thương, tại chỗ chỉ nhận tiền mặt." }
        ] },
      { point: "意义 — ý nghĩa",
        explain: "Dùng 意义 trong ngữ cảnh Từ chức năng & liên từ (11) để diễn đạt: ý nghĩa.",
        examples: [
          { zh: "这次活动很有意义，因此大家都很投入。报名不分性别，男女都能当演员。", py: "Zhè cì huódòng hěn yǒu yìyì, yīncǐ dàjiā dōu hěn tóurù. Bàomíng bù fēn xìngbié, nánnǚ dōu néng dāng yǎnyuán.", vi: "Hoạt động lần này rất ý nghĩa, vì vậy ai cũng nhiệt tình. Đăng ký không phân giới tính, nam nữ đều làm diễn viên được." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Sân khấu sự kiện · Buổi tối', bg: 'campus', cast: ['mai', 'xiaomei'],
        text: 'Một sự kiện trực tiếp trên sân khấu của câu lạc bộ.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '站在舞台上，看下面全是观众，现场气氛真好！',
        pinyin: 'Zhàn zài wǔtái shàng, kàn xiàmiàn quán shì guānzhòng, xiànchǎng qìfēn zhēn hǎo!',
        meaning: 'Đứng trên sân khấu, nhìn phía dưới toàn khán giả, không khí hiện trường thật tuyệt!', expression: 'happy', vocab: ['舞台', '下面', '现场'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '灯光效果不错。这种现场形式很受欢迎。',
        pinyin: 'Dēngguāng xiàoguǒ búcuò. Zhè zhǒng xiànchǎng xíngshì hěn shòu huānyíng.',
        meaning: 'Hiệu quả ánh sáng tốt đấy. Hình thức trực tiếp này rất được ưa chuộng.', expression: 'focused', vocab: ['效果', '形式'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '自从来到这里以来，我成长了不少，压力也变成了动力。',
        pinyin: 'Zìcóng lái dào zhèlǐ yǐlái, wǒ chéngzhǎng le bù shǎo, yālì yě biànchéng le dònglì.',
        meaning: 'Kể từ khi đến đây, em trưởng thành nhiều, áp lực cũng biến thành động lực.', expression: 'focused', vocab: ['以来', '压力'] },
      { type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'campus', scene: '📍 Sân khấu', expression: 'curious',
        q: 'Tiểu Mỹ nói: "Mỗi người đều có ___ (ưu điểm) riêng". Chọn từ đúng?',
        options: [
          { text: '每个人都有自己的优点。', pinyin: 'Měi gè rén dōu yǒu zìjǐ de yōudiǎn.', meaning: 'Mỗi người đều có ưu điểm riêng.', correct: true, feedback: 'Đúng! 优点 = ưu điểm.' },
          { text: '每个人都有自己的形状。', pinyin: 'Měi gè rén dōu yǒu zìjǐ de xíngzhuàng.', meaning: '(sai)', correct: false, feedback: '形状 = hình dạng, không dùng cho người.' },
          { text: '每个人都有自己的性别。', pinyin: 'Měi gè rén dōu yǒu zìjǐ de xìngbié.', meaning: '(lệch nghĩa)', correct: false, feedback: '性别 = giới tính, không phải "ưu điểm".' }
        ], vocab: ['优点', '形状', '性别'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这次活动很有意义，因此大家都很投入。报名不分性别，男女都能当演员。',
        pinyin: 'Zhè cì huódòng hěn yǒu yìyì, yīncǐ dàjiā dōu hěn tóurù. Bàomíng bù fēn xìngbié, nánnǚ dōu néng dāng yǎnyuán.',
        meaning: 'Hoạt động lần này rất ý nghĩa, vì vậy ai cũng nhiệt tình. Đăng ký không phân giới tính, nam nữ đều làm diễn viên được.', expression: 'happy', vocab: ['意义', '因此', '性别', '演员'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '演出累了，吃根香蕉补充体力。别抽烟，对身体不好，会影响血液。',
        pinyin: 'Yǎnchū lèi le, chī gēn xiāngjiāo bǔchōng tǐlì. Bié chōu yān, duì shēntǐ bù hǎo, huì yǐngxiǎng xuèyè.',
        meaning: 'Diễn mệt rồi, ăn quả chuối bổ sung sức. Đừng hút thuốc, hại cho cơ thể, sẽ ảnh hưởng máu.', expression: null, vocab: ['香蕉', '烟', '血'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '对，健康最重要。好消息是观众的需求很高，票已经卖完了。',
        pinyin: 'Duì, jiànkāng zuì zhòngyào. Hǎo xiāoxi shì guānzhòng de xūqiú hěn gāo, piào yǐjīng màiwán le.',
        meaning: 'Đúng, sức khỏe quan trọng nhất. Tin vui là nhu cầu của khán giả rất cao, vé đã bán hết.', expression: 'happy', vocab: ['消息', '需求', '已'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这些纪念品形状可爱，现场只收现金。',
        pinyin: 'Zhèxiē jìniànpǐn xíngzhuàng kě\'ài, xiànchǎng zhǐ shōu xiànjīn.',
        meaning: 'Mấy món lưu niệm hình dáng dễ thương, tại chỗ chỉ nhận tiền mặt.', expression: 'happy', vocab: ['形状', '现金'] },
      { type: 'checkpoint', questions: [
        { q: '"舞台" có nghĩa là gì?', options: ['sân khấu', 'hiện trường', 'hình thức', 'tiền mặt'], answer: 0 },
        { q: 'Từ nào nghĩa là "vì vậy, do đó"?', options: ['以来', '因此', '已'], answer: 1 },
        { q: '"需求" có nghĩa là gì?', options: ['nhu cầu', 'ưu điểm', 'áp lực'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '舞台', p: 'wǔ tái', v: 'sân khấu', e: 'stage' },
      { h: '下面', p: 'xià miàn', v: 'phía dưới', e: 'below' },
      { h: '现场', p: 'xiàn chǎng', v: 'hiện trường, tại chỗ', e: 'the scene (of a crime, accident etc)' },
      { h: '现金', p: 'xiàn jīn', v: 'tiền mặt', e: 'cash' },
      { h: '香蕉', p: 'xiāng jiāo', v: 'chuối', e: 'banana' },
      { h: '消息', p: 'xiāo xi', v: 'tin tức', e: 'news' },
      { h: '效果', p: 'xiào guǒ', v: 'hiệu quả', e: 'result' },
      { h: '形式', p: 'xíng shì', v: 'hình thức', e: 'outer appearance' },
      { h: '形状', p: 'xíng zhuàng', v: 'hình dạng', e: 'form' },
      { h: '性别', p: 'xìng bié', v: 'giới tính', e: 'gender' },
      { h: '需求', p: 'xū qiú', v: 'nhu cầu', e: 'requirement' },
      { h: '血', p: 'xuè', v: 'máu', e: 'blood' },
      { h: '压力', p: 'yā lì', v: 'áp lực', e: 'pressure' },
      { h: '烟', p: 'yān', v: 'thuốc lá, khói', e: 'cigarette or pipe tobacco' },
      { h: '演员', p: 'yǎn yuán', v: 'diễn viên', e: 'actor or actress' },
      { h: '已', p: 'yǐ', v: 'đã', e: 'already' },
      { h: '以来', p: 'yǐ lái', v: 'kể từ', e: 'since (a previous event)' },
      { h: '意义', p: 'yì yì', v: 'ý nghĩa', e: 'sense' },
      { h: '因此', p: 'yīn cǐ', v: 'vì vậy, do đó', e: 'thus' },
      { h: '优点', p: 'yōu diǎn', v: 'ưu điểm', e: 'merit' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '现场气氛真好', options: ['现场气氛真好','今天天气真好','这里风景真美'], answer: '现场气氛真好', py: 'Xiànchǎng qìfēn zhēn hǎo', explain: '听 现场 = hiện trường.' },
        { type: 'fill', sentence: '站在___上很紧张。', options: ['舞台', '现金', '香蕉'], answer: '舞台' },
        { type: 'fill', sentence: '___气氛真好。', options: ['现场', '形状', '压力'], answer: '现场' },
        { type: 'fill', sentence: '灯光___不错。', options: ['效果', '需求', '消息'], answer: '效果' },
        { type: 'fill', sentence: '看___全是观众。', options: ['下面', '意义', '优点'], answer: '下面' },
        { type: 'fill', sentence: '吃根___补充体力。', options: ['香蕉', '烟', '血'], answer: '香蕉' }
      ],
      normal: [
        { type: 'listen', audio: '票已经卖完了', options: ['票已经卖完了','票还没开始卖','票还有很多张'], answer: '票已经卖完了', py: 'Piào yǐjīng màiwán le', explain: '听 卖完 = bán hết.' },
        { type: 'dictation', audio: '现场只收现金', answer: '现场只收现金', hint: 'Tại chỗ chỉ nhận tiền mặt.', py: 'Xiànchǎng zhǐ shōu xiànjīn', explain: '现金 = tiền mặt.' },
        { type: 'fill', sentence: '这次活动很有___。', options: ['意义', '形式', '现金'], answer: '意义' },
        { type: 'fill', sentence: '___大家都很投入。', options: ['因此', '以来', '已'], answer: '因此' },
        { type: 'fill', sentence: '___也变成了动力。', options: ['压力', '需求', '舞台'], answer: '压力' },
        { type: 'fill', sentence: '男女都能当___。', options: ['演员', '现场', '香蕉'], answer: '演员' },
        { type: 'fill', sentence: '观众的___很高。', options: ['需求', '效果', '优点'], answer: '需求' },
        { type: 'order', words: ['每个人', '都有', '自己的', '优点'], answer: '每个人都有自己的优点' },
        { type: 'order', words: ['票', '已经', '卖', '完了'], answer: '票已经卖完了' }
      ],
      hard: [
        { type: 'fill', sentence: '自从来这里___，我成长不少。', options: ['以来', '因此', '已'], answer: '以来' },
        { type: 'fill', sentence: '报名不分___。', options: ['性别', '形状', '需求'], answer: '性别' },
        { type: 'fill', sentence: '现场只收___。', options: ['现金', '香蕉', '舞台'], answer: '现金' },
        { type: 'fill', sentence: '抽___对身体不好。', options: ['烟', '血', '压力'], answer: '烟' },
        { type: 'translate', prompt: 'Áp lực cũng biến thành động lực.', answer: '压力也变成了动力。' },
        { type: 'translate', prompt: 'Hoạt động này rất ý nghĩa, vì vậy ai cũng nhiệt tình.', answer: '这次活动很有意义，因此大家都很投入。' }
      ]
    }
  },

  // BÀI 101: 优势,由于,邮件,有的是,员,愿望,杂志,早已,责任,长处,整体,整整,证,证件,证据,只好,至今,中部,终于,周围
  101: {
    id: 101, level: 3,
    title: 'Từ chức năng & liên từ (12)',
    context: 'Một tạp chí muốn đăng câu chuyện du học của Mai. Em chuẩn bị giấy tờ và mơ về chuyến đi miền Trung.',
    vocabPreview: ['愿望', '杂志', '优势', '证件', '终于'],
    objectives: [
      "Nắm nhóm từ khóa: 愿望 · 杂志 · 优势 · 证件 · 终于",
      "Kể/nghe hiểu tình huống Từ chức năng & liên từ (12) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 愿望 · 杂志 · 优势",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "愿望 — nguyện vọng, mong muốn",
        explain: "Dùng 愿望 trong ngữ cảnh Từ chức năng & liên từ (12) để diễn đạt: nguyện vọng, mong muốn.",
        examples: [
          { zh: "我的愿望终于要实现了！一家杂志想刊登我的故事。", py: "Wǒ de yuànwàng zhōngyú yào shíxiàn le! Yì jiā zázhì xiǎng kāndēng wǒ de gùshi.", vi: "Nguyện vọng của mình cuối cùng sắp thành hiện thực! Một tạp chí muốn đăng câu chuyện của mình." }
        ] },
      { point: "杂志 — tạp chí",
        explain: "Dùng 杂志 trong ngữ cảnh Từ chức năng & liên từ (12) để diễn đạt: tạp chí.",
        examples: [
          { zh: "我的愿望终于要实现了！一家杂志想刊登我的故事。", py: "Wǒ de yuànwàng zhōngyú yào shíxiàn le! Yì jiā zázhì xiǎng kāndēng wǒ de gùshi.", vi: "Nguyện vọng của mình cuối cùng sắp thành hiện thực! Một tạp chí muốn đăng câu chuyện của mình." }
        ] },
      { point: "优势 — ưu thế",
        explain: "Dùng 优势 trong ngữ cảnh Từ chức năng & liên từ (12) để diễn đạt: ưu thế.",
        examples: [
          { zh: "双语能力是你的一个优势。", py: "Shuāngyǔ nénglì shì nǐ de yí gè yōushì.", vi: "Khả năng song ngữ là một ưu thế của cậu." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Nhà Mai · Buổi tối', bg: 'home', cast: ['mai', 'xiaomei'],
        text: 'Một tạp chí muốn đăng câu chuyện du học của Mai.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我的愿望终于要实现了！一家杂志想刊登我的故事。',
        pinyin: 'Wǒ de yuànwàng zhōngyú yào shíxiàn le! Yì jiā zázhì xiǎng kāndēng wǒ de gùshi.',
        meaning: 'Nguyện vọng của mình cuối cùng sắp thành hiện thực! Một tạp chí muốn đăng câu chuyện của mình.', expression: 'happy', vocab: ['愿望', '终于', '杂志'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '太好了！由于你努力，这样的机会有的是。',
        pinyin: 'Tài hǎo le! Yóuyú nǐ nǔlì, zhèyàng de jīhuì yǒudeshì.',
        meaning: 'Tuyệt quá! Vì cậu cố gắng, cơ hội như vậy nhiều vô kể.', expression: 'happy', vocab: ['由于', '有的是'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '他们早已发了邮件给我，我整整等了一周。',
        pinyin: 'Tāmen zǎoyǐ fā le yóujiàn gěi wǒ, wǒ zhěngzhěng děng le yì zhōu.',
        meaning: 'Họ đã gửi email cho mình từ lâu, mình đợi tròn một tuần.', expression: null, vocab: ['早已', '邮件', '整整'] },
      { type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'home', scene: '📍 Nhà Mai', expression: 'curious',
        q: 'Tiểu Mỹ nói: "Khả năng song ngữ là một ___ (ưu thế) của cậu". Chọn từ đúng?',
        options: [
          { text: '双语能力是你的一个优势。', pinyin: 'Shuāngyǔ nénglì shì nǐ de yí gè yōushì.', meaning: 'Khả năng song ngữ là một ưu thế của cậu.', correct: true, feedback: 'Đúng! 优势 = ưu thế.' },
          { text: '双语能力是你的一个责任。', pinyin: 'Shuāngyǔ nénglì shì nǐ de yí gè zérèn.', meaning: '(lệch nghĩa)', correct: false, feedback: '责任 = trách nhiệm, không phải "ưu thế".' },
          { text: '双语能力是你的一个整体。', pinyin: 'Shuāngyǔ nénglì shì nǐ de yí gè zhěngtǐ.', meaning: '(sai)', correct: false, feedback: '整体 = tổng thể, sai nghĩa.' }
        ], vocab: ['优势', '责任', '整体'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这是我的长处，也是我的责任，要继续学好。整体来说，今年收获很大。',
        pinyin: 'Zhè shì wǒ de chángchù, yě shì wǒ de zérèn, yào jìxù xué hǎo. Zhěngtǐ lái shuō, jīnnián shōuhuò hěn dà.',
        meaning: 'Đây là điểm mạnh của mình, cũng là trách nhiệm, phải tiếp tục học tốt. Nhìn tổng thể, năm nay thu hoạch rất lớn.', expression: 'focused', vocab: ['长处', '责任', '整体'] },
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Văn phòng tòa soạn · Hôm sau', bg: 'office', cast: ['mai', 'fuwuyuan'],
        text: 'Hôm sau Mai đến tòa soạn nộp bài.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '投稿要交证件，证明身份。我得拿出证据：成绩单和证书。',
        pinyin: 'Tóugǎo yào jiāo zhèngjiàn, zhèngmíng shēnfèn. Wǒ děi náchū zhèngjù: chéngjìdān hé zhèngshū.',
        meaning: 'Gửi bài phải nộp giấy tờ, chứng minh thân phận. Mình phải đưa ra bằng chứng: bảng điểm và chứng chỉ.', expression: 'focused', vocab: ['证件', '证', '证据'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '资料不全，你只好补一份。至今系统里还缺一项。',
        pinyin: 'Zīliào bù quán, nǐ zhǐhǎo bǔ yí fèn. Zhìjīn xìtǒng lǐ hái quē yí xiàng.',
        meaning: 'Hồ sơ chưa đủ, bạn đành bổ sung một bản. Đến nay trong hệ thống vẫn thiếu một mục.', expression: null, vocab: ['只好', '至今'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '好的。等忙完我想去中部旅行，看看周围的风景。',
        pinyin: 'Hǎo de. Děng máng wán wǒ xiǎng qù zhōngbù lǚxíng, kànkan zhōuwéi de fēngjǐng.',
        meaning: 'Vâng. Xong việc em muốn đi du lịch miền Trung, ngắm phong cảnh xung quanh.', expression: 'happy', vocab: ['中部', '周围'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '你现在小有名气，将来一定能当个好编辑员！',
        pinyin: 'Nǐ xiànzài xiǎo yǒu míngqì, jiānglái yídìng néng dāng gè hǎo biānjí yuán!',
        meaning: 'Giờ bạn đã có chút tiếng tăm, tương lai nhất định làm được biên tập viên giỏi!', expression: 'happy', vocab: ['员'] },
      { type: 'checkpoint', questions: [
        { q: '"愿望" có nghĩa là gì?', options: ['nguyện vọng, mong muốn', 'tạp chí', 'tổng thể', 'bằng chứng'], answer: 0 },
        { q: 'Từ nào nghĩa là "đành phải"?', options: ['只好', '由于', '至今'], answer: 0 },
        { q: '"终于" có nghĩa là gì?', options: ['cuối cùng', 'từ lâu đã', 'xung quanh'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '优势', p: 'yōu shì', v: 'ưu thế', e: 'superiority' },
      { h: '由于', p: 'yóu yú', v: 'do, vì', e: 'due to' },
      { h: '邮件', p: 'yóu jiàn', v: 'thư từ, email', e: 'mail' },
      { h: '有的是', p: 'yǒu de shì', v: 'rất nhiều, không thiếu', e: 'have plenty of' },
      { h: '员', p: 'yuán', v: 'thành viên, nhân viên', e: 'person' },
      { h: '愿望', p: 'yuàn wàng', v: 'nguyện vọng, mong muốn', e: 'desire' },
      { h: '杂志', p: 'zá zhì', v: 'tạp chí', e: 'magazine' },
      { h: '早已', p: 'zǎo yǐ', v: 'từ lâu đã', e: 'for a long time' },
      { h: '责任', p: 'zé rèn', v: 'trách nhiệm', e: 'responsibility' },
      { h: '长处', p: 'cháng chù', v: 'ưu điểm, điểm mạnh', e: 'good aspects' },
      { h: '整体', p: 'zhěng tǐ', v: 'tổng thể', e: 'whole entity' },
      { h: '整整', p: 'zhěng zhěng', v: 'đúng, tròn (số lượng)', e: 'whole' },
      { h: '证', p: 'zhèng', v: 'chứng minh, chứng', e: 'to admonish' },
      { h: '证件', p: 'zhèng jiàn', v: 'giấy tờ, chứng từ', e: 'certificate' },
      { h: '证据', p: 'zhèng jù', v: 'bằng chứng', e: 'evidence' },
      { h: '只好', p: 'zhǐ hǎo', v: 'đành phải', e: 'to have no other option but to ...' },
      { h: '至今', p: 'zhì jīn', v: 'cho đến nay', e: 'so far' },
      { h: '中部', p: 'zhōng bù', v: 'miền Trung', e: 'middle part' },
      { h: '终于', p: 'zhōng yú', v: 'cuối cùng', e: 'at last' },
      { h: '周围', p: 'zhōu wéi', v: 'xung quanh', e: 'environs' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '一家杂志想刊登我的故事', options: ['一家杂志想刊登我的故事','一个朋友想听我的故事','一家公司想请我工作'], answer: '一家杂志想刊登我的故事', py: 'Yì jiā zázhì xiǎng kāndēng wǒ de gùshi', explain: '听 杂志 = tạp chí.' },
        { type: 'fill', sentence: '我的___终于实现了。', options: ['愿望', '邮件', '证件'], answer: '愿望' },
        { type: 'fill', sentence: '一家___想刊登我的故事。', options: ['杂志', '优势', '中部'], answer: '杂志' },
        { type: 'fill', sentence: '机会___要实现了。', options: ['终于', '至今', '早已'], answer: '终于' },
        { type: 'fill', sentence: '他们发了___给我。', options: ['邮件', '责任', '员'], answer: '邮件' },
        { type: 'fill', sentence: '投稿要交___。', options: ['证件', '周围', '愿望'], answer: '证件' }
      ],
      normal: [
        { type: 'listen', audio: '我整整等了一周', options: ['我整整等了一周','我只等了一会儿','我等了整整一天'], answer: '我整整等了一周', py: 'Wǒ zhěngzhěng děng le yì zhōu', explain: '听 整整 = tròn, đúng (số lượng).' },
        { type: 'dictation', audio: '资料不全', answer: '资料不全', hint: 'Hồ sơ chưa đủ.', py: 'Zīliào bù quán', explain: '全 = đầy đủ; 不全 = chưa đủ.' },
        { type: 'fill', sentence: '___你努力，机会有的是。', options: ['由于', '终于', '只好'], answer: '由于' },
        { type: 'fill', sentence: '这样的机会___。', options: ['有的是', '整整', '至今'], answer: '有的是' },
        { type: 'fill', sentence: '双语能力是你的___。', options: ['优势', '责任', '整体'], answer: '优势' },
        { type: 'fill', sentence: '这也是我的___。', options: ['责任', '邮件', '杂志'], answer: '责任' },
        { type: 'fill', sentence: '我___等了一周。', options: ['整整', '早已', '只好'], answer: '整整' },
        { type: 'order', words: ['我', '只好', '补', '一份'], answer: '我只好补一份' },
        { type: 'order', words: ['我', '想', '去', '中部旅行'], answer: '我想去中部旅行' }
      ],
      hard: [
        { type: 'fill', sentence: '我得拿出___。', options: ['证据', '愿望', '员'], answer: '证据' },
        { type: 'fill', sentence: '___系统里还缺一项。', options: ['至今', '由于', '终于'], answer: '至今' },
        { type: 'fill', sentence: '看看___的风景。', options: ['周围', '中部', '整体'], answer: '周围' },
        { type: 'fill', sentence: '将来能当个好编辑___。', options: ['员', '证', '优势'], answer: '员' },
        { type: 'translate', prompt: 'Nguyện vọng của mình cuối cùng sắp thành hiện thực.', answer: '我的愿望终于要实现了。' },
        { type: 'translate', prompt: 'Vì cậu cố gắng, cơ hội như vậy nhiều vô kể.', answer: '由于你努力，这样的机会有的是。' }
      ]
    }
  }

});

// ───────────────────────────────────────────────────────
// BATCH 7 — Bài 102-106 (Chọn chuyên ngành · Việc làm thêm · Đất nước phát triển · Lễ hội · Hướng tới tương lai)
// ───────────────────────────────────────────────────────
Object.assign(COURSE_DATA, {

  // BÀI 102: 猪,主任,主意,专家,专业,状况,状态,资格,资金,自从,子女
  102: {
    id: 102, level: 3,
    title: 'Từ chức năng & liên từ (13)',
    context: 'Mai gặp thầy chủ nhiệm khoa để xin lời khuyên về việc chọn chuyên ngành và định hướng sau khi về nước.',
    vocabPreview: ['主任', '专业', '专家', '资格', '主意'],
    objectives: [
      "Nắm nhóm từ khóa: 主任 · 专业 · 专家 · 资格 · 主意",
      "Kể/nghe hiểu tình huống Từ chức năng & liên từ (13) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 主任 · 专业 · 专家",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "主任 — chủ nhiệm, trưởng phòng",
        explain: "Dùng 主任 trong ngữ cảnh Từ chức năng & liên từ (13) để diễn đạt: chủ nhiệm, trưởng phòng.",
        examples: [
          { zh: "主任好！我想请专家给点建议。", py: "Zhǔrèn hǎo! Wǒ xiǎng qǐng zhuānjiā gěi diǎn jiànyì.", vi: "Chào thầy chủ nhiệm! Em muốn nhờ chuyên gia cho vài lời khuyên." }
        ] },
      { point: "专业 — chuyên ngành",
        explain: "Dùng 专业 trong ngữ cảnh Từ chức năng & liên từ (13) để diễn đạt: chuyên ngành.",
        examples: [
          { zh: "自从你回国，状态一直很好。想选什么专业？", py: "Zìcóng nǐ huíguó, zhuàngtài yìzhí hěn hǎo. Xiǎng xuǎn shénme zhuānyè?", vi: "Từ khi em về nước, trạng thái luôn rất tốt. Em muốn chọn chuyên ngành gì?" },
          { zh: "农业专业也不错，研究怎么养猪、种地都有前途。", py: "Nóngyè zhuānyè yě búcuò, yánjiū zěnme yǎng zhū, zhòngdì dōu yǒu qiántú.", vi: "Chuyên ngành nông nghiệp cũng tốt, nghiên cứu cách nuôi lợn, trồng trọt đều có tương lai." }
        ] },
      { point: "专家 — chuyên gia",
        explain: "Dùng 专家 trong ngữ cảnh Từ chức năng & liên từ (13) để diễn đạt: chuyên gia.",
        examples: [
          { zh: "主任好！我想请专家给点建议。", py: "Zhǔrèn hǎo! Wǒ xiǎng qǐng zhuānjiā gěi diǎn jiànyì.", vi: "Chào thầy chủ nhiệm! Em muốn nhờ chuyên gia cho vài lời khuyên." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Văn phòng khoa · Buổi sáng', bg: 'office', cast: ['mai', 'laoli'],
        text: 'Mai đến gặp thầy chủ nhiệm khoa để xin tư vấn.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '自从你回国，状态一直很好。想选什么专业？',
        pinyin: 'Zìcóng nǐ huíguó, zhuàngtài yìzhí hěn hǎo. Xiǎng xuǎn shénme zhuānyè?',
        meaning: 'Từ khi em về nước, trạng thái luôn rất tốt. Em muốn chọn chuyên ngành gì?', expression: 'focused', vocab: ['自从', '状态', '专业'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '主任好！我想请专家给点建议。',
        pinyin: 'Zhǔrèn hǎo! Wǒ xiǎng qǐng zhuānjiā gěi diǎn jiànyì.',
        meaning: 'Chào thầy chủ nhiệm! Em muốn nhờ chuyên gia cho vài lời khuyên.', expression: 'happy', vocab: ['主任', '专家'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '你的成绩有资格申请奖学金，但要先了解资金状况。',
        pinyin: 'Nǐ de chéngjì yǒu zīgé shēnqǐng jiǎngxuéjīn, dàn yào xiān liǎojiě zījīn zhuàngkuàng.',
        meaning: 'Thành tích của em đủ tư cách xin học bổng, nhưng phải tìm hiểu tình hình tài chính trước.', expression: null, vocab: ['资格', '资金', '状况'] },
      { type: 'choice', speaker: 'laoli', cast: ['mai', 'laoli'], bg: 'office', scene: '📍 Văn phòng khoa', expression: 'curious',
        q: 'Mai phân vân, thầy bảo: "Cho thầy một ___ (ý kiến/sáng kiến) của em xem". Chọn từ đúng?',
        options: [
          { text: '说说你的主意吧。', pinyin: 'Shuōshuo nǐ de zhǔyi ba.', meaning: 'Nói thử ý kiến của em xem.', correct: true, feedback: 'Đúng! 主意 = ý kiến, sáng kiến, kế sách.' },
          { text: '说说你的专业吧。', pinyin: 'Shuōshuo nǐ de zhuānyè ba.', meaning: '(lệch nghĩa)', correct: false, feedback: '专业 = chuyên ngành, không phải "ý kiến".' },
          { text: '说说你的资金吧。', pinyin: 'Shuōshuo nǐ de zījīn ba.', meaning: '(sai)', correct: false, feedback: '资金 = vốn/tài chính, sai nghĩa.' }
        ], vocab: ['主意', '专业', '资金'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '我父母希望子女有稳定的工作。',
        pinyin: 'Wǒ fùmǔ xīwàng zǐnǚ yǒu wěndìng de gōngzuò.',
        meaning: 'Bố mẹ em mong con cái có công việc ổn định.', expression: null, vocab: ['子女'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '农业专业也不错，研究怎么养猪、种地都有前途。',
        pinyin: 'Nóngyè zhuānyè yě búcuò, yánjiū zěnme yǎng zhū, zhòngdì dōu yǒu qiántú.',
        meaning: 'Chuyên ngành nông nghiệp cũng tốt, nghiên cứu cách nuôi lợn, trồng trọt đều có tương lai.', expression: 'happy', vocab: ['猪'] },
      { type: 'checkpoint', questions: [
        { q: '"主任" có nghĩa là gì?', options: ['chủ nhiệm, trưởng phòng', 'chuyên gia', 'con cái', 'vốn'], answer: 0 },
        { q: 'Từ nào nghĩa là "tư cách, đủ điều kiện"?', options: ['资金', '资格', '状态'], answer: 1 },
        { q: '"自从" có nghĩa là gì?', options: ['từ khi (mốc thời gian)', 'tất nhiên', 'tình trạng'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '猪', p: 'zhū', v: 'lợn, heo', e: 'hog' },
      { h: '主任', p: 'zhǔ rèn', v: 'chủ nhiệm, trưởng phòng', e: 'director' },
      { h: '主意', p: 'zhǔ yi', v: 'ý kiến, sáng kiến', e: 'plan' },
      { h: '专家', p: 'zhuān jiā', v: 'chuyên gia', e: 'expert' },
      { h: '专业', p: 'zhuān yè', v: 'chuyên ngành', e: 'specialty' },
      { h: '状况', p: 'zhuàng kuàng', v: 'tình trạng, tình hình', e: 'condition' },
      { h: '状态', p: 'zhuàng tài', v: 'trạng thái', e: 'condition' },
      { h: '资格', p: 'zī gé', v: 'tư cách, đủ điều kiện', e: 'qualifications' },
      { h: '资金', p: 'zī jīn', v: 'vốn, tài chính', e: 'funds' },
      { h: '自从', p: 'zì cóng', v: 'từ khi', e: 'since (a time)' },
      { h: '子女', p: 'zǐ nǚ', v: 'con cái', e: 'children' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '想选什么专业', options: ['想选什么专业','想去哪个国家','想做什么工作'], answer: '想选什么专业', py: 'Xiǎng xuǎn shénme zhuānyè', explain: '听 专业 = chuyên ngành.' },
        { type: 'fill', sentence: '___好，我想请教您。', options: ['主任', '专家', '资金'], answer: '主任' },
        { type: 'fill', sentence: '你想选什么___？', options: ['专业', '状态', '子女'], answer: '专业' },
        { type: 'fill', sentence: '我想请___给建议。', options: ['专家', '主意', '资格'], answer: '专家' },
        { type: 'fill', sentence: '研究怎么养___。', options: ['猪', '专业', '状况'], answer: '猪' },
        { type: 'fill', sentence: '___你回国，状态很好。', options: ['自从', '主意', '资金'], answer: '自从' }
      ],
      normal: [
        { type: 'listen', audio: '我父母希望子女有稳定的工作', options: ['我父母希望子女有稳定的工作','我父母希望我早点回家','我自己想去外国留学'], answer: '我父母希望子女有稳定的工作', py: 'Wǒ fùmǔ xīwàng zǐnǚ yǒu wěndìng de gōngzuò', explain: '听 子女 = con cái; 稳定 = ổn định.' },
        { type: 'dictation', audio: '我想请专家给点建议', answer: '我想请专家给点建议', hint: 'Em muốn nhờ chuyên gia cho lời khuyên.', py: 'Wǒ xiǎng qǐng zhuānjiā gěi diǎn jiànyì', explain: '专家 = chuyên gia.' },
        { type: 'fill', sentence: '你有___申请奖学金。', options: ['资格', '资金', '专家'], answer: '资格' },
        { type: 'fill', sentence: '要先了解___状况。', options: ['资金', '主任', '子女'], answer: '资金' },
        { type: 'fill', sentence: '你的___一直很好。', options: ['状态', '专业', '主意'], answer: '状态' },
        { type: 'fill', sentence: '父母希望___有稳定工作。', options: ['子女', '专家', '资格'], answer: '子女' },
        { type: 'fill', sentence: '说说你的___吧。', options: ['主意', '猪', '状态'], answer: '主意' },
        { type: 'order', words: ['你', '想', '选什么', '专业'], answer: '你想选什么专业' },
        { type: 'order', words: ['我', '想', '请', '专家给建议'], answer: '我想请专家给建议' }
      ],
      hard: [
        { type: 'fill', sentence: '要了解资金___。', options: ['状况', '状态', '资格'], answer: '状况' },
        { type: 'fill', sentence: '农业___也不错。', options: ['专业', '主任', '子女'], answer: '专业' },
        { type: 'fill', sentence: '你有___申请。', options: ['资格', '主意', '专家'], answer: '资格' },
        { type: 'fill', sentence: '种地、养___有前途。', options: ['猪', '专业', '状况'], answer: '猪' },
        { type: 'translate', prompt: 'Từ khi em về nước, trạng thái luôn rất tốt.', answer: '自从你回国，状态一直很好。' },
        { type: 'translate', prompt: 'Bố mẹ em mong con cái có công việc ổn định.', answer: '我父母希望子女有稳定的工作。' }
      ]
    }
  },

  // BÀI 103: 板,保,保安,保险,本来,必然,必要,标准,不安,布,彩色,超级,成功,成熟,初步,初级,错误,当然,定期,动人
  103: {
    id: 103, level: 3,
    title: 'Tính từ miêu tả (1)',
    context: 'Mai nhận một công việc bán thời gian. Người quản lý giới thiệu về chế độ và tiêu chuẩn của công ty.',
    vocabPreview: ['保险', '标准', '成功', '当然', '动人'],
    objectives: [
      "Nắm nhóm từ khóa: 保险 · 标准 · 成功 · 当然 · 动人",
      "Kể/nghe hiểu tình huống Tính từ miêu tả (1) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 保险 · 标准 · 成功",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "保险 — bảo hiểm",
        explain: "Dùng 保险 trong ngữ cảnh Tính từ miêu tả (1) để diễn đạt: bảo hiểm.",
        examples: [
          { zh: "当然！我们公司很正规，有保险、有保安，一定保你平安。", py: "Dāngrán! Wǒmen gōngsī hěn zhèngguī, yǒu bǎoxiǎn, yǒu bǎo'ān, yídìng bǎo nǐ píng'ān.", vi: "Tất nhiên! Công ty rất quy củ, có bảo hiểm, có bảo vệ, chắc chắn đảm bảo an toàn cho em." }
        ] },
      { point: "标准 — tiêu chuẩn",
        explain: "Dùng 标准 trong ngữ cảnh Tính từ miêu tả (1) để diễn đạt: tiêu chuẩn.",
        examples: [
          { zh: "工作有标准吗？我是初级员工，经验还不够成熟。", py: "Gōngzuò yǒu biāozhǔn ma? Wǒ shì chūjí yuángōng, jīngyàn hái búgòu chéngshú.", vi: "Công việc có tiêu chuẩn không ạ? Em là nhân viên sơ cấp, kinh nghiệm chưa đủ chín." }
        ] },
      { point: "成功 — thành công",
        explain: "Dùng 成功 trong ngữ cảnh Tính từ miêu tả (1) để diễn đạt: thành công.",
        examples: [
          { zh: "努力了，成功是必然的。", py: "Nǔlì le, chénggōng shì bìrán de.", vi: "Cố gắng rồi thì thành công là tất yếu." },
          { zh: "我会努力，争取成功！", py: "Wǒ huì nǔlì, zhēngqǔ chénggōng!", vi: "Em sẽ cố gắng, phấn đấu thành công!" }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Văn phòng công ty · Buổi sáng', bg: 'office', cast: ['mai', 'fuwuyuan'],
        text: 'Mai tìm được một công việc bán thời gian và đến gặp quản lý.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '我找到一份兼职，本来很担心，现在不那么不安了。',
        pinyin: 'Wǒ zhǎodào yí fèn jiānzhí, běnlái hěn dānxīn, xiànzài bú nàme bù\'ān le.',
        meaning: 'Em tìm được việc bán thời gian, ban đầu rất lo, giờ đỡ bất an hơn rồi.', expression: 'happy', vocab: ['本来', '不安'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '当然！我们公司很正规，有保险、有保安，一定保你平安。',
        pinyin: 'Dāngrán! Wǒmen gōngsī hěn zhèngguī, yǒu bǎoxiǎn, yǒu bǎo\'ān, yídìng bǎo nǐ píng\'ān.',
        meaning: 'Tất nhiên! Công ty rất quy củ, có bảo hiểm, có bảo vệ, chắc chắn đảm bảo an toàn cho em.', expression: 'happy', vocab: ['当然', '保险', '保安', '保'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '工作有标准吗？我是初级员工，经验还不够成熟。',
        pinyin: 'Gōngzuò yǒu biāozhǔn ma? Wǒ shì chūjí yuángōng, jīngyàn hái búgòu chéngshú.',
        meaning: 'Công việc có tiêu chuẩn không ạ? Em là nhân viên sơ cấp, kinh nghiệm chưa đủ chín.', expression: 'curious', vocab: ['标准', '初级', '成熟'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '没关系，先做初步培训，必要时我帮你。',
        pinyin: 'Méi guānxi, xiān zuò chūbù péixùn, bìyào shí wǒ bāng nǐ.',
        meaning: 'Không sao, làm đào tạo sơ bộ trước, khi cần thiết tôi giúp em.', expression: 'focused', vocab: ['初步', '必要'] },
      { type: 'choice', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'], bg: 'office', scene: '📍 Văn phòng', expression: 'focused',
        q: 'Quản lý động viên: "Chăm chỉ thì thành công là điều ___ (tất yếu)". Chọn từ đúng?',
        options: [
          { text: '努力了，成功是必然的。', pinyin: 'Nǔlì le, chénggōng shì bìrán de.', meaning: 'Cố gắng rồi thì thành công là tất yếu.', correct: true, feedback: 'Đúng! 必然 = tất yếu, chắc chắn xảy ra.' },
          { text: '努力了，成功是必要的。', pinyin: 'Nǔlì le, chénggōng shì bìyào de.', meaning: '(lệch nghĩa)', correct: false, feedback: '必要 = cần thiết, không phải "tất yếu".' },
          { text: '努力了，成功是初步的。', pinyin: 'Nǔlì le, chénggōng shì chūbù de.', meaning: '(sai)', correct: false, feedback: '初步 = sơ bộ, sai nghĩa.' }
        ], vocab: ['必然', '必要', '初步'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '我会努力，争取成功！',
        pinyin: 'Wǒ huì nǔlì, zhēngqǔ chénggōng!',
        meaning: 'Em sẽ cố gắng, phấn đấu thành công!', expression: 'happy', vocab: ['成功'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '我们定期开会，检查有没有错误。',
        pinyin: 'Wǒmen dìngqī kāihuì, jiǎnchá yǒu méiyǒu cuòwù.',
        meaning: 'Chúng tôi họp định kỳ, kiểm tra xem có sai sót không.', expression: null, vocab: ['定期', '错误'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '好的。这块布做的彩色招牌真好看，超级吸引人。',
        pinyin: 'Hǎo de. Zhè kuài bù zuò de cǎisè zhāopái zhēn hǎokàn, chāojí xīyǐn rén.',
        meaning: 'Vâng. Cái biển hiệu màu sắc làm bằng vải này đẹp thật, cực kỳ hút mắt.', expression: 'happy', vocab: ['布', '彩色', '超级'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '是啊，那位老员工的故事很动人，他在木板上刻字。',
        pinyin: 'Shì a, nà wèi lǎo yuángōng de gùshi hěn dòngrén, tā zài mùbǎn shàng kèzì.',
        meaning: 'Đúng vậy, câu chuyện của nhân viên cũ kia rất cảm động, ông ấy khắc chữ lên tấm ván gỗ.', expression: 'happy', vocab: ['动人', '板'] },
      { type: 'checkpoint', questions: [
        { q: '"保险" có nghĩa là gì?', options: ['bảo hiểm', 'bảo vệ (nhân viên)', 'tiêu chuẩn', 'sai lầm'], answer: 0 },
        { q: 'Từ nào nghĩa là "tất yếu, chắc chắn xảy ra"?', options: ['必要', '必然', '初步'], answer: 1 },
        { q: '"成熟" có nghĩa là gì?', options: ['trưởng thành, chín chắn', 'định kỳ', 'bất an'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '板', p: 'bǎn', v: 'tấm ván, bảng', e: 'board' },
      { h: '保', p: 'bǎo', v: 'bảo vệ, đảm bảo', e: 'Bulgaria' },
      { h: '保安', p: 'bǎo ān', v: 'bảo vệ (nhân viên)', e: 'to ensure public security' },
      { h: '保险', p: 'bǎo xiǎn', v: 'bảo hiểm', e: 'insurance' },
      { h: '本来', p: 'běn lái', v: 'vốn là, ban đầu', e: 'original' },
      { h: '必然', p: 'bì rán', v: 'tất yếu, chắc chắn', e: 'inevitable' },
      { h: '必要', p: 'bì yào', v: 'cần thiết', e: 'necessary' },
      { h: '标准', p: 'biāo zhǔn', v: 'tiêu chuẩn', e: 'standard' },
      { h: '不安', p: 'bù ān', v: 'bất an, lo lắng', e: 'unpeaceful' },
      { h: '布', p: 'bù', v: 'vải', e: 'cloth, fabric, to spread, to announce' },
      { h: '彩色', p: 'cǎi sè', v: 'màu sắc, có màu', e: 'color' },
      { h: '超级', p: 'chāo jí', v: 'siêu, cực kỳ', e: 'super-' },
      { h: '成功', p: 'chéng gōng', v: 'thành công', e: 'Chenggong or Chengkung town in Taitung County 台东县, southeast Taiwan' },
      { h: '成熟', p: 'chéng shú', v: 'trưởng thành, chín', e: 'mature' },
      { h: '初步', p: 'chū bù', v: 'sơ bộ, bước đầu', e: 'initial' },
      { h: '初级', p: 'chū jí', v: 'sơ cấp', e: 'junior' },
      { h: '错误', p: 'cuò wù', v: 'sai lầm, lỗi', e: 'mistaken' },
      { h: '当然', p: 'dāng rán', v: 'dĩ nhiên, tất nhiên', e: 'only natural' },
      { h: '定期', p: 'dìng qī', v: 'định kỳ', e: 'at set dates' },
      { h: '动人', p: 'dòng rén', v: 'cảm động, xúc động', e: 'touching' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '我是初级员工', options: ['我是初级员工','我是公司老板','我是新来的客人'], answer: '我是初级员工', py: 'Wǒ shì chūjí yuángōng', explain: '听 初级 = sơ cấp.' },
        { type: 'fill', sentence: '公司有___和保安。', options: ['保险', '标准', '错误'], answer: '保险' },
        { type: 'fill', sentence: '___！我们很正规。', options: ['当然', '本来', '初级'], answer: '当然' },
        { type: 'fill', sentence: '工作有___吗？', options: ['标准', '布', '保安'], answer: '标准' },
        { type: 'fill', sentence: '我会争取___。', options: ['成功', '彩色', '定期'], answer: '成功' },
        { type: 'fill', sentence: '这块___做的招牌。', options: ['布', '板', '保险'], answer: '布' }
      ],
      normal: [
        { type: 'listen', audio: '先做初步培训', options: ['先做初步培训','先去办公室报到','先填一张表格'], answer: '先做初步培训', py: 'Xiān zuò chūbù péixùn', explain: '听 初步 = sơ bộ.' },
        { type: 'dictation', audio: '争取成功', answer: '争取成功', hint: 'Phấn đấu thành công.', py: 'Zhēngqǔ chénggōng', explain: '成功 = thành công.' },
        { type: 'fill', sentence: '我___很担心。', options: ['本来', '当然', '超级'], answer: '本来' },
        { type: 'fill', sentence: '现在不那么___了。', options: ['不安', '成熟', '动人'], answer: '不安' },
        { type: 'fill', sentence: '我是___员工。', options: ['初级', '彩色', '标准'], answer: '初级' },
        { type: 'fill', sentence: '先做___培训。', options: ['初步', '必然', '保安'], answer: '初步' },
        { type: 'fill', sentence: '我们___开会检查。', options: ['定期', '本来', '布'], answer: '定期' },
        { type: 'order', words: ['成功', '是', '必然', '的'], answer: '成功是必然的' },
        { type: 'order', words: ['检查', '有没有', '错误'], answer: '检查有没有错误' }
      ],
      hard: [
        { type: 'fill', sentence: '经验还不够___。', options: ['成熟', '初步', '必要'], answer: '成熟' },
        { type: 'fill', sentence: '这招牌___吸引人。', options: ['超级', '当然', '保险'], answer: '超级' },
        { type: 'fill', sentence: '他的故事很___。', options: ['动人', '彩色', '不安'], answer: '动人' },
        { type: 'fill', sentence: '___时我帮你。', options: ['必要', '必然', '初级'], answer: '必要' },
        { type: 'translate', prompt: 'Ban đầu rất lo, giờ đỡ bất an hơn rồi.', answer: '本来很担心，现在不那么不安了。' },
        { type: 'translate', prompt: 'Cố gắng rồi thì thành công là tất yếu.', answer: '努力了，成功是必然的。' }
      ]
    }
  },

  // BÀI 104: 短期,发达,丰富,负责,复杂,富,高速,根本,公共,公开,共同,光,光明,广大,规范,好奇,合法,合理,和平,互相
  104: {
    id: 104, level: 3,
    title: 'Tính từ miêu tả (2)',
    context: 'Mai và Tiểu Mỹ cùng viết một bài tổng kết về trải nghiệm du học ở một đất nước phát triển.',
    vocabPreview: ['发达', '丰富', '共同', '光明', '合理'],
    objectives: [
      "Nắm nhóm từ khóa: 发达 · 丰富 · 共同 · 光明 · 合理",
      "Kể/nghe hiểu tình huống Tính từ miêu tả (2) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 发达 · 丰富 · 共同",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "发达 — phát triển, phát đạt",
        explain: "Dùng 发达 trong ngữ cảnh Tính từ miêu tả (2) để diễn đạt: phát triển, phát đạt.",
        examples: [
          { zh: "这一年我的经历很丰富，那个国家很发达。", py: "Zhè yì nián wǒ de jīnglì hěn fēngfù, nàge guójiā hěn fādá.", vi: "Năm nay trải nghiệm của mình rất phong phú, đất nước đó rất phát triển." }
        ] },
      { point: "丰富 — phong phú",
        explain: "Dùng 丰富 trong ngữ cảnh Tính từ miêu tả (2) để diễn đạt: phong phú.",
        examples: [
          { zh: "这一年我的经历很丰富，那个国家很发达。", py: "Zhè yì nián wǒ de jīnglì hěn fēngfù, nàge guójiā hěn fādá.", vi: "Năm nay trải nghiệm của mình rất phong phú, đất nước đó rất phát triển." }
        ] },
      { point: "共同 — chung, cùng nhau",
        explain: "Dùng 共同 trong ngữ cảnh Tính từ miêu tả (2) để diễn đạt: chung, cùng nhau.",
        examples: [
          { zh: "我们互相帮助，建立了共同的友谊。", py: "Wǒmen hùxiāng bāngzhù, jiànlì le gòngtóng de yǒuyì.", vi: "Tụi mình giúp đỡ lẫn nhau, xây dựng tình bạn chung." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Nhà Mai · Buổi tối', bg: 'home', cast: ['mai', 'xiaomei'],
        text: 'Mai và Tiểu Mỹ cùng viết bài tổng kết năm du học.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这一年我的经历很丰富，那个国家很发达。',
        pinyin: 'Zhè yì nián wǒ de jīnglì hěn fēngfù, nàge guójiā hěn fādá.',
        meaning: 'Năm nay trải nghiệm của mình rất phong phú, đất nước đó rất phát triển.', expression: 'happy', vocab: ['丰富', '发达'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '对，公共交通方便，高速公路也多。',
        pinyin: 'Duì, gōnggòng jiāotōng fāngbiàn, gāosù gōnglù yě duō.',
        meaning: 'Đúng, giao thông công cộng tiện lợi, đường cao tốc cũng nhiều.', expression: 'happy', vocab: ['公共', '高速'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我们互相帮助，建立了共同的友谊。',
        pinyin: 'Wǒmen hùxiāng bāngzhù, jiànlì le gòngtóng de yǒuyì.',
        meaning: 'Tụi mình giúp đỡ lẫn nhau, xây dựng tình bạn chung.', expression: 'happy', vocab: ['互相', '共同'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '留学手续本来复杂，但流程很规范、合理。',
        pinyin: 'Liúxué shǒuxù běnlái fùzá, dàn liúchéng hěn guīfàn, hélǐ.',
        meaning: 'Thủ tục du học vốn phức tạp, nhưng quy trình rất chuẩn mực, hợp lý.', expression: null, vocab: ['复杂', '规范', '合理'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'home', scene: '📍 Nhà Mai', expression: 'curious',
        q: 'Mai viết: "Mọi việc đều phải làm đúng ___ (hợp pháp)". Chọn từ đúng?',
        options: [
          { text: '凡事都要合法。', pinyin: 'Fánshì dōu yào héfǎ.', meaning: 'Mọi việc đều phải hợp pháp.', correct: true, feedback: 'Đúng! 合法 = hợp pháp.' },
          { text: '凡事都要公开。', pinyin: 'Fánshì dōu yào gōngkāi.', meaning: '(lệch nghĩa)', correct: false, feedback: '公开 = công khai, không phải "hợp pháp".' },
          { text: '凡事都要富。', pinyin: 'Fánshì dōu yào fù.', meaning: '(sai)', correct: false, feedback: '富 = giàu, sai nghĩa.' }
        ], vocab: ['合法', '公开', '富'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我对很多事都好奇，这种短期交流让我成长。',
        pinyin: 'Wǒ duì hěn duō shì dōu hàoqí, zhè zhǒng duǎnqī jiāoliú ràng wǒ chéngzhǎng.',
        meaning: 'Mình tò mò về nhiều thứ, kiểu giao lưu ngắn hạn này khiến mình trưởng thành.', expression: 'happy', vocab: ['好奇', '短期'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你根本不用担心，未来一片光明！',
        pinyin: 'Nǐ gēnběn búyòng dānxīn, wèilái yí piàn guāngmíng!',
        meaning: 'Cậu căn bản không cần lo, tương lai sáng lạn!', expression: 'happy', vocab: ['根本', '光明'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '阳光的光很温暖。世界需要和平，需要广大青年努力。',
        pinyin: 'Yángguāng de guāng hěn wēnnuǎn. Shìjiè xūyào hépíng, xūyào guǎngdà qīngnián nǔlì.',
        meaning: 'Ánh nắng ấm áp. Thế giới cần hòa bình, cần đông đảo thanh niên nỗ lực.', expression: 'focused', vocab: ['光', '和平', '广大'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我们要公开分享经验。富有知识比富有金钱更重要，我负责整理资料。',
        pinyin: 'Wǒmen yào gōngkāi fēnxiǎng jīngyàn. Fùyǒu zhīshi bǐ fùyǒu jīnqián gèng zhòngyào, wǒ fùzé zhěnglǐ zīliào.',
        meaning: 'Tụi mình nên công khai chia sẻ kinh nghiệm. Giàu kiến thức quan trọng hơn giàu tiền bạc, mình phụ trách sắp xếp tài liệu.', expression: 'happy', vocab: ['公开', '富', '负责'] },
      { type: 'checkpoint', questions: [
        { q: '"发达" có nghĩa là gì?', options: ['phát triển, phát đạt', 'phức tạp', 'hợp lý', 'hòa bình'], answer: 0 },
        { q: 'Từ nào nghĩa là "lẫn nhau"?', options: ['共同', '互相', '广大'], answer: 1 },
        { q: '"根本" (không cần lo) có nghĩa là gì?', options: ['căn bản, hoàn toàn', 'công khai', 'ngắn hạn'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '短期', p: 'duǎn qī', v: 'ngắn hạn', e: 'short term' },
      { h: '发达', p: 'fā dá', v: 'phát triển, phát đạt', e: 'well-developed' },
      { h: '丰富', p: 'fēng fù', v: 'phong phú', e: 'to enrich' },
      { h: '负责', p: 'fù zé', v: 'chịu trách nhiệm, phụ trách', e: 'to be in charge of' },
      { h: '复杂', p: 'fù zá', v: 'phức tạp', e: 'complicated' },
      { h: '富', p: 'fù', v: 'giàu, phú', e: 'rich, wealthy, abundant' },
      { h: '高速', p: 'gāo sù', v: 'tốc độ cao', e: 'high speed' },
      { h: '根本', p: 'gēn běn', v: 'căn bản, hoàn toàn', e: 'fundamental' },
      { h: '公共', p: 'gōng gòng', v: 'công cộng', e: 'public' },
      { h: '公开', p: 'gōng kāi', v: 'công khai', e: 'open' },
      { h: '共同', p: 'gòng tóng', v: 'chung, cùng nhau', e: 'common' },
      { h: '光', p: 'guāng', v: 'ánh sáng', e: 'light' },
      { h: '光明', p: 'guāng míng', v: 'sáng sủa, sáng lạn', e: 'light' },
      { h: '广大', p: 'guǎng dà', v: 'rộng lớn, đông đảo', e: 'vast or extensive' },
      { h: '规范', p: 'guī fàn', v: 'quy phạm, chuẩn mực', e: 'norm' },
      { h: '好奇', p: 'hào qí', v: 'tò mò', e: 'inquisitive' },
      { h: '合法', p: 'hé fǎ', v: 'hợp pháp', e: 'lawful' },
      { h: '合理', p: 'hé lǐ', v: 'hợp lý', e: 'rational' },
      { h: '和平', p: 'hé píng', v: 'hòa bình', e: 'Heping District of Shenyang city 沈阳市, Liaoning' },
      { h: '互相', p: 'hù xiāng', v: 'lẫn nhau', e: 'each other' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '那个国家很发达', options: ['那个国家很发达','那个地方很落后','这座城市很小'], answer: '那个国家很发达', py: 'Nàge guójiā hěn fādá', explain: '听 发达 = phát triển.' },
        { type: 'fill', sentence: '那个国家很___。', options: ['发达', '复杂', '好奇'], answer: '发达' },
        { type: 'fill', sentence: '我的经历很___。', options: ['丰富', '合法', '高速'], answer: '丰富' },
        { type: 'fill', sentence: '___交通很方便。', options: ['公共', '共同', '广大'], answer: '公共' },
        { type: 'fill', sentence: '我们___帮助。', options: ['互相', '公开', '根本'], answer: '互相' },
        { type: 'fill', sentence: '未来一片___。', options: ['光明', '复杂', '短期'], answer: '光明' }
      ],
      normal: [
        { type: 'listen', audio: '公共交通很方便', options: ['公共交通很方便','这里交通不方便','开车去比较快'], answer: '公共交通很方便', py: 'Gōnggòng jiāotōng hěn fāngbiàn', explain: '听 公共 = công cộng.' },
        { type: 'dictation', audio: '未来一片光明', answer: '未来一片光明', hint: 'Tương lai sáng lạn.', py: 'Wèilái yí piàn guāngmíng', explain: '光明 = sáng sủa.' },
        { type: 'fill', sentence: '手续本来很___。', options: ['复杂', '丰富', '和平'], answer: '复杂' },
        { type: 'fill', sentence: '流程很规范、___。', options: ['合理', '高速', '广大'], answer: '合理' },
        { type: 'fill', sentence: '建立了___的友谊。', options: ['共同', '公共', '富'], answer: '共同' },
        { type: 'fill', sentence: '我对很多事都___。', options: ['好奇', '合法', '发达'], answer: '好奇' },
        { type: 'fill', sentence: '世界需要___。', options: ['和平', '高速', '负责'], answer: '和平' },
        { type: 'order', words: ['凡事', '都', '要', '合法'], answer: '凡事都要合法' },
        { type: 'order', words: ['我们', '互相', '帮助'], answer: '我们互相帮助' }
      ],
      hard: [
        { type: 'fill', sentence: '这种___交流让我成长。', options: ['短期', '公共', '光明'], answer: '短期' },
        { type: 'fill', sentence: '你___不用担心。', options: ['根本', '互相', '公开'], answer: '根本' },
        { type: 'fill', sentence: '需要___青年努力。', options: ['广大', '丰富', '复杂'], answer: '广大' },
        { type: 'fill', sentence: '我___整理资料。', options: ['负责', '好奇', '合理'], answer: '负责' },
        { type: 'translate', prompt: 'Tụi mình giúp đỡ lẫn nhau, xây dựng tình bạn chung.', answer: '我们互相帮助，建立了共同的友谊。' },
        { type: 'translate', prompt: 'Giàu kiến thức quan trọng hơn giàu tiền bạc.', answer: '富有知识比富有金钱更重要。' }
      ]
    }
  },

  // BÀI 105: 欢乐,活,火,积极,基本,及时,集中,坚决,坚强,简单,结实,紧,紧急,紧张,进步,进一步,精彩,静,久,旧
  105: {
    id: 105, level: 3,
    title: 'Tính từ miêu tả (3)',
    context: 'Một lễ hội vui ở trường. Mai và Tiểu Mỹ nhìn lại sự tiến bộ và trưởng thành của bản thân sau một năm.',
    vocabPreview: ['欢乐', '精彩', '进步', '坚强', '紧张'],
    objectives: [
      "Nắm nhóm từ khóa: 欢乐 · 精彩 · 进步 · 坚强 · 紧张",
      "Kể/nghe hiểu tình huống Tính từ miêu tả (3) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 欢乐 · 精彩 · 进步",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "欢乐 — vui vẻ, hân hoan",
        explain: "Dùng 欢乐 trong ngữ cảnh Tính từ miêu tả (3) để diễn đạt: vui vẻ, hân hoan.",
        examples: [
          { zh: "今天的活动好欢乐！表演真精彩。", py: "Jīntiān de huódòng hǎo huānlè! Biǎoyǎn zhēn jīngcǎi.", vi: "Hoạt động hôm nay vui ghê! Biểu diễn thật xuất sắc." }
        ] },
      { point: "精彩 — tuyệt vời, xuất sắc",
        explain: "Dùng 精彩 trong ngữ cảnh Tính từ miêu tả (3) để diễn đạt: tuyệt vời, xuất sắc.",
        examples: [
          { zh: "今天的活动好欢乐！表演真精彩。", py: "Jīntiān de huódòng hǎo huānlè! Biǎoyǎn zhēn jīngcǎi.", vi: "Hoạt động hôm nay vui ghê! Biểu diễn thật xuất sắc." }
        ] },
      { point: "进步 — tiến bộ",
        explain: "Dùng 进步 trong ngữ cảnh Tính từ miêu tả (3) để diễn đạt: tiến bộ.",
        examples: [
          { zh: "这一年我进步很大，要进一步努力。", py: "Zhè yì nián wǒ jìnbù hěn dà, yào jìnyíbù nǔlì.", vi: "Năm nay mình tiến bộ nhiều, phải nỗ lực thêm một bước." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Sân trường · Lễ hội', bg: 'park', cast: ['mai', 'xiaomei'],
        text: 'Một lễ hội tưng bừng diễn ra ở sân trường.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '今天的活动好欢乐！表演真精彩。',
        pinyin: 'Jīntiān de huódòng hǎo huānlè! Biǎoyǎn zhēn jīngcǎi.',
        meaning: 'Hoạt động hôm nay vui ghê! Biểu diễn thật xuất sắc.', expression: 'happy', vocab: ['欢乐', '精彩'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '是啊，气氛很活跃，像火一样热闹。',
        pinyin: 'Shì a, qìfēn hěn huóyuè, xiàng huǒ yíyàng rènao.',
        meaning: 'Đúng vậy, không khí rất sôi nổi, náo nhiệt như lửa.', expression: 'happy', vocab: ['活', '火'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这一年我进步很大，要进一步努力。',
        pinyin: 'Zhè yì nián wǒ jìnbù hěn dà, yào jìnyíbù nǔlì.',
        meaning: 'Năm nay mình tiến bộ nhiều, phải nỗ lực thêm một bước.', expression: 'focused', vocab: ['进步', '进一步'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你变得更坚强了，遇事很坚决。',
        pinyin: 'Nǐ biàn de gèng jiānqiáng le, yùshì hěn jiānjué.',
        meaning: 'Cậu trở nên mạnh mẽ hơn, gặp việc rất kiên quyết.', expression: 'happy', vocab: ['坚强', '坚决'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'park', scene: '📍 Sân trường', expression: 'curious',
        q: 'Mai nhớ lại: "Trước khi thi mình rất ___ (căng thẳng)". Chọn từ đúng?',
        options: [
          { text: '考试前我很紧张。', pinyin: 'Kǎoshì qián wǒ hěn jǐnzhāng.', meaning: 'Trước khi thi mình rất căng thẳng.', correct: true, feedback: 'Đúng! 紧张 = căng thẳng (tâm lý).' },
          { text: '考试前我很紧急。', pinyin: 'Kǎoshì qián wǒ hěn jǐnjí.', meaning: '(sai)', correct: false, feedback: '紧急 = khẩn cấp (tình huống), không tả tâm lý người.' },
          { text: '考试前我很紧。', pinyin: 'Kǎoshì qián wǒ hěn jǐn.', meaning: '(thiếu nghĩa)', correct: false, feedback: '紧 = chặt, không dùng tả cảm giác lo lắng kiểu này.' }
        ], vocab: ['紧张', '紧急', '紧'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '基本上我能集中注意力了，心也静下来。',
        pinyin: 'Jīběnshang wǒ néng jízhōng zhùyìlì le, xīn yě jìng xiàlái.',
        meaning: 'Về cơ bản mình tập trung được rồi, lòng cũng tĩnh lại.', expression: 'focused', vocab: ['基本', '集中', '静'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '方法其实很简单，要积极、及时复习。有紧急情况要及时说。',
        pinyin: 'Fāngfǎ qíshí hěn jiǎndān, yào jījí, jíshí fùxí. Yǒu jǐnjí qíngkuàng yào jíshí shuō.',
        meaning: 'Phương pháp thực ra rất đơn giản, phải tích cực, ôn kịp thời. Có việc khẩn cấp phải nói kịp thời.', expression: 'focused', vocab: ['简单', '积极', '及时', '紧急'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这双鞋很结实，穿很久了还像新的，一点也不旧。',
        pinyin: 'Zhè shuāng xié hěn jiēshi, chuān hěn jiǔ le hái xiàng xīn de, yìdiǎn yě bú jiù.',
        meaning: 'Đôi giày này rất bền, đi lâu rồi mà vẫn như mới, chẳng cũ chút nào.', expression: 'happy', vocab: ['结实', '久', '旧'] },
      { type: 'checkpoint', questions: [
        { q: '"欢乐" có nghĩa là gì?', options: ['vui vẻ, hân hoan', 'căng thẳng', 'kiên cường', 'yên tĩnh'], answer: 0 },
        { q: 'Từ nào nghĩa là "kịp thời"?', options: ['及时', '坚决', '简单'], answer: 0 },
        { q: '"进一步" có nghĩa là gì?', options: ['tiến thêm một bước', 'tiến bộ', 'tập trung'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '欢乐', p: 'huān lè', v: 'vui vẻ, hân hoan', e: 'gaiety' },
      { h: '活', p: 'huó', v: 'sống, sôi nổi', e: 'to live' },
      { h: '火', p: 'huǒ', v: 'lửa', e: 'fire, flame' },
      { h: '积极', p: 'jī jí', v: 'tích cực', e: 'active' },
      { h: '基本', p: 'jī běn', v: 'cơ bản', e: 'basic' },
      { h: '及时', p: 'jí shí', v: 'kịp thời', e: 'timely' },
      { h: '集中', p: 'jí zhōng', v: 'tập trung', e: 'to concentrate' },
      { h: '坚决', p: 'jiān jué', v: 'kiên quyết', e: 'firm' },
      { h: '坚强', p: 'jiān qiáng', v: 'kiên cường, mạnh mẽ', e: 'staunch' },
      { h: '简单', p: 'jiǎn dān', v: 'đơn giản', e: 'simple' },
      { h: '结实', p: 'jiē shí', v: 'chắc chắn, bền', e: 'to bear fruit' },
      { h: '紧', p: 'jǐn', v: 'chặt, khẩn trương', e: 'tight' },
      { h: '紧急', p: 'jǐn jí', v: 'khẩn cấp', e: 'urgent' },
      { h: '紧张', p: 'jǐn zhāng', v: 'căng thẳng', e: 'nervous' },
      { h: '进步', p: 'jìn bù', v: 'tiến bộ', e: 'progress' },
      { h: '进一步', p: 'jìn yī bù', v: 'tiến thêm một bước', e: 'to go a step further' },
      { h: '精彩', p: 'jīng cǎi', v: 'tuyệt vời, xuất sắc', e: 'wonderful' },
      { h: '静', p: 'jìng', v: 'yên tĩnh, lặng', e: 'still' },
      { h: '久', p: 'jiǔ', v: 'lâu, lâu dài', e: 'time' },
      { h: '旧', p: 'jiù', v: 'cũ', e: 'old' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '今天的活动好欢乐', options: ['今天的活动好欢乐','今天的天气真好','今天的考试很难'], answer: '今天的活动好欢乐', py: 'Jīntiān de huódòng hǎo huānlè', explain: '听 欢乐 = vui vẻ.' },
        { type: 'fill', sentence: '今天的活动好___！', options: ['欢乐', '紧急', '旧'], answer: '欢乐' },
        { type: 'fill', sentence: '表演真___。', options: ['精彩', '简单', '久'], answer: '精彩' },
        { type: 'fill', sentence: '气氛像___一样热闹。', options: ['火', '静', '紧'], answer: '火' },
        { type: 'fill', sentence: '这一年我___很大。', options: ['进步', '集中', '结实'], answer: '进步' },
        { type: 'fill', sentence: '这双鞋很___。', options: ['结实', '欢乐', '积极'], answer: '结实' }
      ],
      normal: [
        { type: 'listen', audio: '这双鞋很结实', options: ['这双鞋很结实','这双鞋很漂亮','这件衣服很贵'], answer: '这双鞋很结实', py: 'Zhè shuāng xié hěn jiēshi', explain: '听 结实 = chắc, bền.' },
        { type: 'dictation', audio: '有紧急情况要及时说', answer: '有紧急情况要及时说', hint: 'Có việc khẩn cấp phải nói kịp thời.', py: 'Yǒu jǐnjí qíngkuàng yào jíshí shuō', explain: '紧急 = khẩn cấp; 及时 = kịp thời.' },
        { type: 'fill', sentence: '你变得更___了。', options: ['坚强', '简单', '紧张'], answer: '坚强' },
        { type: 'fill', sentence: '遇事很___。', options: ['坚决', '欢乐', '及时'], answer: '坚决' },
        { type: 'fill', sentence: '我能___注意力了。', options: ['集中', '进步', '旧'], answer: '集中' },
        { type: 'fill', sentence: '方法其实很___。', options: ['简单', '坚强', '紧急'], answer: '简单' },
        { type: 'fill', sentence: '要积极、___复习。', options: ['及时', '精彩', '久'], answer: '及时' },
        { type: 'order', words: ['考试前', '我', '很', '紧张'], answer: '考试前我很紧张' },
        { type: 'order', words: ['心', '也', '静', '下来'], answer: '心也静下来' }
      ],
      hard: [
        { type: 'fill', sentence: '要___一步努力。', options: ['进', '集中', '坚决'], answer: '进' },
        { type: 'fill', sentence: '有___情况要及时说。', options: ['紧急', '紧张', '欢乐'], answer: '紧急' },
        { type: 'fill', sentence: '穿很___了还像新的。', options: ['久', '紧', '活'], answer: '久' },
        { type: 'fill', sentence: '一点也不___。', options: ['旧', '静', '积极'], answer: '旧' },
        { type: 'translate', prompt: 'Cậu trở nên mạnh mẽ hơn, gặp việc rất kiên quyết.', answer: '你变得更坚强了，遇事很坚决。' },
        { type: 'translate', prompt: 'Về cơ bản mình tập trung được rồi, lòng cũng tĩnh lại.', answer: '基本上我能集中注意力了，心也静下来。' }
      ]
    }
  },

  // BÀI 106: 具体,绝对,开放,可靠,客观,空,快速,困,困难,乐,乐观,类似,连续,乱,落后,麻烦,马,满足,没用,美
  106: {
    id: 106, level: 3,
    title: 'Tính từ miêu tả (4)',
    context: 'Mai nhìn lại một năm với sự lạc quan, bàn với Tiểu Mỹ về cách vượt qua khó khăn và kế hoạch tương lai.',
    vocabPreview: ['乐观', '具体', '困难', '绝对', '满足'],
    objectives: [
      "Nắm nhóm từ khóa: 乐观 · 具体 · 困难 · 绝对 · 满足",
      "Kể/nghe hiểu tình huống Tính từ miêu tả (4) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 乐观 · 具体 · 困难",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "乐观 — lạc quan",
        explain: "Dùng 乐观 trong ngữ cảnh Tính từ miêu tả (4) để diễn đạt: lạc quan.",
        examples: [
          { zh: "回顾这一年，我很满足，对未来很乐观。", py: "Huígù zhè yì nián, wǒ hěn mǎnzú, duì wèilái hěn lèguān.", vi: "Nhìn lại năm nay, mình rất mãn nguyện, lạc quan về tương lai." }
        ] },
      { point: "具体 — cụ thể",
        explain: "Dùng 具体 trong ngữ cảnh Tính từ miêu tả (4) để diễn đạt: cụ thể.",
        examples: [
          { zh: "你的计划很具体，方法也可靠。", py: "Nǐ de jìhuà hěn jùtǐ, fāngfǎ yě kěkào.", vi: "Kế hoạch của cậu rất cụ thể, phương pháp cũng đáng tin cậy." }
        ] },
      { point: "困难 — khó khăn",
        explain: "Dùng 困难 trong ngữ cảnh Tính từ miêu tả (4) để diễn đạt: khó khăn.",
        examples: [
          { zh: "客观地说，过程有困难，但我没放弃。", py: "Kèguān de shuō, guòchéng yǒu kùnnán, dàn wǒ méi fàngqì.", vi: "Khách quan mà nói, quá trình có khó khăn, nhưng mình không bỏ cuộc." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Nhà Mai · Buổi tối', bg: 'home', cast: ['mai', 'xiaomei'],
        text: 'Mai nhìn lại một năm và lên kế hoạch cho tương lai.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '回顾这一年，我很满足，对未来很乐观。',
        pinyin: 'Huígù zhè yì nián, wǒ hěn mǎnzú, duì wèilái hěn lèguān.',
        meaning: 'Nhìn lại năm nay, mình rất mãn nguyện, lạc quan về tương lai.', expression: 'happy', vocab: ['满足', '乐观'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你的计划很具体，方法也可靠。',
        pinyin: 'Nǐ de jìhuà hěn jùtǐ, fāngfǎ yě kěkào.',
        meaning: 'Kế hoạch của cậu rất cụ thể, phương pháp cũng đáng tin cậy.', expression: 'focused', vocab: ['具体', '可靠'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '客观地说，过程有困难，但我没放弃。',
        pinyin: 'Kèguān de shuō, guòchéng yǒu kùnnán, dàn wǒ méi fàngqì.',
        meaning: 'Khách quan mà nói, quá trình có khó khăn, nhưng mình không bỏ cuộc.', expression: 'focused', vocab: ['客观', '困难'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '现在网络开放，信息快速，学习不再落后。',
        pinyin: 'Xiànzài wǎngluò kāifàng, xìnxī kuàisù, xuéxí búzài luòhòu.',
        meaning: 'Giờ mạng mở, thông tin nhanh, học hành không còn lạc hậu.', expression: 'happy', vocab: ['开放', '快速', '落后'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'home', scene: '📍 Nhà Mai', expression: 'curious',
        q: 'Mai động viên bạn: "Mình ___ (tuyệt đối) tin cậu làm được". Chọn từ đúng?',
        options: [
          { text: '我绝对相信你能做到。', pinyin: 'Wǒ juéduì xiāngxìn nǐ néng zuòdào.', meaning: 'Mình tuyệt đối tin cậu làm được.', correct: true, feedback: 'Đúng! 绝对 = tuyệt đối.' },
          { text: '我类似相信你能做到。', pinyin: 'Wǒ lèisì xiāngxìn nǐ néng zuòdào.', meaning: '(sai)', correct: false, feedback: '类似 = tương tự, không hợp ngữ pháp.' },
          { text: '我客观相信你能做到。', pinyin: 'Wǒ kèguān xiāngxìn nǐ néng zuòdào.', meaning: '(lệch nghĩa)', correct: false, feedback: '客观 = khách quan, không dùng kiểu này.' }
        ], vocab: ['绝对', '类似', '客观'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '遇到类似的麻烦，我不再觉得没用或困。',
        pinyin: 'Yùdào lèisì de máfan, wǒ búzài juéde méiyòng huò kùn.',
        meaning: 'Gặp rắc rối tương tự, mình không còn thấy vô dụng hay mệt mỏi nữa.', expression: 'focused', vocab: ['类似', '麻烦', '没用', '困'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '房间别太乱，桌上空着也好，看着舒服。',
        pinyin: 'Fángjiān bié tài luàn, zhuō shàng kōng zhe yě hǎo, kànzhe shūfu.',
        meaning: 'Phòng đừng quá lộn xộn, mặt bàn để trống cũng tốt, nhìn dễ chịu.', expression: 'happy', vocab: ['乱', '空'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '连续努力是快乐的源泉，骑马、运动我都爱。这里的风景真美。',
        pinyin: 'Liánxù nǔlì shì kuàilè de yuánquán, qí mǎ, yùndòng wǒ dōu ài. Zhèlǐ de fēngjǐng zhēn měi.',
        meaning: 'Nỗ lực liên tục là nguồn vui, cưỡi ngựa, vận động mình đều thích. Phong cảnh ở đây đẹp thật.', expression: 'happy', vocab: ['连续', '乐', '马', '美'] },
      { type: 'checkpoint', questions: [
        { q: '"乐观" có nghĩa là gì?', options: ['lạc quan', 'lộn xộn', 'lạc hậu', 'vô dụng'], answer: 0 },
        { q: 'Từ nào nghĩa là "đáng tin cậy"?', options: ['具体', '可靠', '客观'], answer: 1 },
        { q: '"满足" có nghĩa là gì?', options: ['thỏa mãn, mãn nguyện', 'khó khăn', 'liên tục'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '具体', p: 'jù tǐ', v: 'cụ thể', e: 'concrete' },
      { h: '绝对', p: 'jué duì', v: 'tuyệt đối', e: 'absolute' },
      { h: '开放', p: 'kāi fàng', v: 'mở cửa, khai phóng', e: 'to bloom' },
      { h: '可靠', p: 'kě kào', v: 'đáng tin cậy', e: 'reliable' },
      { h: '客观', p: 'kè guān', v: 'khách quan', e: 'objective' },
      { h: '空', p: 'kōng', v: 'rỗng, trống', e: 'empty' },
      { h: '快速', p: 'kuài sù', v: 'nhanh chóng', e: 'fast' },
      { h: '困', p: 'kùn', v: 'buồn ngủ, mệt mỏi', e: 'to trap' },
      { h: '困难', p: 'kùn nan', v: 'khó khăn', e: 'difficult' },
      { h: '乐', p: 'lè', v: 'vui vẻ', e: 'happy, joyful' },
      { h: '乐观', p: 'lè guān', v: 'lạc quan', e: 'optimistic' },
      { h: '类似', p: 'lèi sì', v: 'tương tự', e: 'similar' },
      { h: '连续', p: 'lián xù', v: 'liên tục', e: 'continuous' },
      { h: '乱', p: 'luàn', v: 'lộn xộn, hỗn loạn', e: 'in confusion or disorder' },
      { h: '落后', p: 'luò hòu', v: 'lạc hậu, tụt hậu', e: 'to fall behind' },
      { h: '麻烦', p: 'má fan', v: 'rắc rối, phiền phức', e: 'trouble' },
      { h: '马', p: 'mǎ', v: 'ngựa', e: 'horse' },
      { h: '满足', p: 'mǎn zú', v: 'thỏa mãn, mãn nguyện', e: 'to satisfy' },
      { h: '没用', p: 'méi yòng', v: 'vô dụng', e: 'useless' },
      { h: '美', p: 'měi', v: 'đẹp', e: 'the Americas (abbr. for 洲)' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '我对未来很乐观', options: ['我对未来很乐观','我对考试很担心','我对结果很失望'], answer: '我对未来很乐观', py: 'Wǒ duì wèilái hěn lèguān', explain: '听 乐观 = lạc quan.' },
        { type: 'fill', sentence: '我对未来很___。', options: ['乐观', '困难', '乱'], answer: '乐观' },
        { type: 'fill', sentence: '你的计划很___。', options: ['具体', '没用', '落后'], answer: '具体' },
        { type: 'fill', sentence: '方法也很___。', options: ['可靠', '困', '空'], answer: '可靠' },
        { type: 'fill', sentence: '这里的风景真___。', options: ['美', '乱', '麻烦'], answer: '美' },
        { type: 'fill', sentence: '我很___，没有遗憾。', options: ['满足', '类似', '快速'], answer: '满足' }
      ],
      normal: [
        { type: 'listen', audio: '你的计划很具体', options: ['你的计划很具体','你的想法很简单','你的方法不可靠'], answer: '你的计划很具体', py: 'Nǐ de jìhuà hěn jùtǐ', explain: '听 具体 = cụ thể.' },
        { type: 'dictation', audio: '房间别太乱', answer: '房间别太乱', hint: 'Phòng đừng quá lộn xộn.', py: 'Fángjiān bié tài luàn', explain: '乱 = lộn xộn.' },
        { type: 'fill', sentence: '___地说，过程有困难。', options: ['客观', '绝对', '连续'], answer: '客观' },
        { type: 'fill', sentence: '过程有___，但没放弃。', options: ['困难', '乐观', '空'], answer: '困难' },
        { type: 'fill', sentence: '现在网络___。', options: ['开放', '没用', '乱'], answer: '开放' },
        { type: 'fill', sentence: '信息___，学习不落后。', options: ['快速', '麻烦', '困'], answer: '快速' },
        { type: 'fill', sentence: '学习不再___。', options: ['落后', '满足', '可靠'], answer: '落后' },
        { type: 'order', words: ['我', '绝对', '相信', '你能做到'], answer: '我绝对相信你能做到' },
        { type: 'order', words: ['房间', '别', '太', '乱'], answer: '房间别太乱' }
      ],
      hard: [
        { type: 'fill', sentence: '遇到___的麻烦。', options: ['类似', '客观', '快速'], answer: '类似' },
        { type: 'fill', sentence: '我不再觉得___。', options: ['没用', '满足', '开放'], answer: '没用' },
        { type: 'fill', sentence: '___努力是快乐的源泉。', options: ['连续', '乱', '困'], answer: '连续' },
        { type: 'fill', sentence: '桌上___着也好。', options: ['空', '美', '乐'], answer: '空' },
        { type: 'translate', prompt: 'Khách quan mà nói, quá trình có khó khăn, nhưng mình không bỏ cuộc.', answer: '客观地说，过程有困难，但我没放弃。' },
        { type: 'translate', prompt: 'Mình tuyệt đối tin cậu làm được.', answer: '我绝对相信你能做到。' }
      ]
    }
  }

});

// ───────────────────────────────────────────────────────
// BATCH 8 — Bài 107-111 (Mùa xuân & người thân · Hồi ức ngọt-đắng · Xem phim & văn minh · Kế hoạch dài hạn · Quốc khánh & lịch sử)
// ───────────────────────────────────────────────────────
Object.assign(COURSE_DATA, {

  // BÀI 107: 美好,美丽,明确,明显,暖和,胖,皮,破,普遍,奇怪,强,强大,强烈,巧,亲,亲切,全面,确实,热烈,人工
  107: {
    id: 107, level: 3,
    title: 'Tính từ miêu tả (5)',
    context: 'Mùa xuân, Mai và Tiểu Mỹ dạo công viên, trò chuyện về cảnh đẹp, con người thân thiện và sự lớn mạnh của đất nước.',
    vocabPreview: ['美丽', '暖和', '亲切', '强大', '热烈'],
    objectives: [
      "Nắm nhóm từ khóa: 美丽 · 暖和 · 亲切 · 强大 · 热烈",
      "Kể/nghe hiểu tình huống Tính từ miêu tả (5) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 美丽 · 暖和 · 亲切",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "美丽 — xinh đẹp",
        explain: "Dùng 美丽 trong ngữ cảnh Tính từ miêu tả (5) để diễn đạt: xinh đẹp.",
        examples: [
          { zh: "春天来了，天气暖和，风景美丽。", py: "Chūntiān lái le, tiānqì nuǎnhuo, fēngjǐng měilì.", vi: "Mùa xuân đến rồi, thời tiết ấm áp, phong cảnh xinh đẹp." }
        ] },
      { point: "暖和 — ấm áp",
        explain: "Dùng 暖和 trong ngữ cảnh Tính từ miêu tả (5) để diễn đạt: ấm áp.",
        examples: [
          { zh: "春天来了，天气暖和，风景美丽。", py: "Chūntiān lái le, tiānqì nuǎnhuo, fēngjǐng měilì.", vi: "Mùa xuân đến rồi, thời tiết ấm áp, phong cảnh xinh đẹp." }
        ] },
      { point: "亲切 — thân thiết, chân thành",
        explain: "Dùng 亲切 trong ngữ cảnh Tính từ miêu tả (5) để diễn đạt: thân thiết, chân thành.",
        examples: [
          { zh: "这里的人很亲切。", py: "Zhèlǐ de rén hěn qīnqiè.", vi: "Người ở đây rất thân thiện." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Công viên · Mùa xuân', bg: 'park', cast: ['mai', 'xiaomei'],
        text: 'Mùa xuân, hai bạn dạo bước trong công viên.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '春天来了，天气暖和，风景美丽。',
        pinyin: 'Chūntiān lái le, tiānqì nuǎnhuo, fēngjǐng měilì.',
        meaning: 'Mùa xuân đến rồi, thời tiết ấm áp, phong cảnh xinh đẹp.', expression: 'happy', vocab: ['暖和', '美丽'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这一切真美好！我有种强烈的幸福感。',
        pinyin: 'Zhè yíqiè zhēn měihǎo! Wǒ yǒu zhǒng qiángliè de xìngfú gǎn.',
        meaning: 'Tất cả thật tốt đẹp! Mình có một cảm giác hạnh phúc mãnh liệt.', expression: 'happy', vocab: ['美好', '强烈'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '真巧，我们又见面了。你好像瘦了，我倒胖了点。',
        pinyin: 'Zhēn qiǎo, wǒmen yòu jiànmiàn le. Nǐ hǎoxiàng shòu le, wǒ dào pàng le diǎn.',
        meaning: 'Khéo thật, tụi mình lại gặp nhau. Cậu hình như gầy đi, mình thì béo lên chút.', expression: 'surprise', vocab: ['巧', '胖'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '哈哈，普遍大家都说我皮肤变好了。',
        pinyin: 'Hāhā, pǔbiàn dàjiā dōu shuō wǒ pífū biàn hǎo le.',
        meaning: 'Haha, ai nói chung cũng bảo da mình đẹp ra.', expression: 'happy', vocab: ['普遍', '皮'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'park', scene: '📍 Công viên', expression: 'curious',
        q: 'Mai nhận xét: "Người ở đây rất ___ (thân thiện)". Chọn từ đúng?',
        options: [
          { text: '这里的人很亲切。', pinyin: 'Zhèlǐ de rén hěn qīnqiè.', meaning: 'Người ở đây rất thân thiện.', correct: true, feedback: 'Đúng! 亲切 = thân thiết, chân thành.' },
          { text: '这里的人很奇怪。', pinyin: 'Zhèlǐ de rén hěn qíguài.', meaning: '(nghĩa xấu)', correct: false, feedback: '奇怪 = kỳ lạ, mang nghĩa tiêu cực.' },
          { text: '这里的人很破。', pinyin: 'Zhèlǐ de rén hěn pò.', meaning: '(sai)', correct: false, feedback: '破 = vỡ/rách, không tả người được.' }
        ], vocab: ['亲切', '奇怪', '破'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这里的人对亲人特别好。中国很强大，发展全面，目标也很明确。',
        pinyin: 'Zhèlǐ de rén duì qīnrén tèbié hǎo. Zhōngguó hěn qiángdà, fāzhǎn quánmiàn, mùbiāo yě hěn míngquè.',
        meaning: 'Người ở đây đối với người thân đặc biệt tốt. Trung Quốc rất hùng mạnh, phát triển toàn diện, mục tiêu cũng rõ ràng.', expression: 'focused', vocab: ['亲', '强大', '全面', '明确'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '确实，进步很明显。大家欢迎我们的态度很热烈。',
        pinyin: 'Quèshí, jìnbù hěn míngxiǎn. Dàjiā huānyíng wǒmen de tàidu hěn rèliè.',
        meaning: 'Quả thật, tiến bộ rất rõ ràng. Thái độ chào đón tụi mình rất nhiệt liệt.', expression: 'happy', vocab: ['确实', '明显', '热烈'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这个湖是人工挖的，但风景一点不奇怪。我的旧鞋破了，得买双新的，这国家真强。',
        pinyin: 'Zhège hú shì réngōng wā de, dàn fēngjǐng yìdiǎn bù qíguài. Wǒ de jiù xié pò le, děi mǎi shuāng xīn de, zhè guójiā zhēn qiáng.',
        meaning: 'Cái hồ này do nhân tạo đào, nhưng phong cảnh chẳng có gì kỳ lạ. Giày cũ của mình rách rồi, phải mua đôi mới, đất nước này mạnh thật.', expression: null, vocab: ['人工', '奇怪', '破', '强'] },
      { type: 'checkpoint', questions: [
        { q: '"暖和" có nghĩa là gì?', options: ['ấm áp', 'mãnh liệt', 'kỳ lạ', 'nhân tạo'], answer: 0 },
        { q: 'Từ nào nghĩa là "thân thiết, chân thành"?', options: ['奇怪', '亲切', '普遍'], answer: 1 },
        { q: '"明确" có nghĩa là gì?', options: ['rõ ràng, minh xác', 'xinh đẹp', 'nhiệt liệt'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '美好', p: 'měi hǎo', v: 'tốt đẹp', e: 'beautiful' },
      { h: '美丽', p: 'měi lì', v: 'xinh đẹp', e: 'beautiful' },
      { h: '明确', p: 'míng què', v: 'rõ ràng, minh xác', e: 'clear-cut' },
      { h: '明显', p: 'míng xiǎn', v: 'rõ ràng, hiển nhiên', e: 'clear' },
      { h: '暖和', p: 'nuǎn huo', v: 'ấm áp', e: 'warm' },
      { h: '胖', p: 'pàng', v: 'mập, béo', e: 'healthy' },
      { h: '皮', p: 'pí', v: 'da, bì', e: 'skin, leather, hide' },
      { h: '破', p: 'pò', v: 'vỡ, rách, hỏng', e: 'broken' },
      { h: '普遍', p: 'pǔ biàn', v: 'phổ biến', e: 'universal' },
      { h: '奇怪', p: 'qí guài', v: 'kỳ lạ', e: 'strange' },
      { h: '强', p: 'qiáng', v: 'mạnh', e: 'strong, powerful, better' },
      { h: '强大', p: 'qiáng dà', v: 'hùng mạnh, lớn mạnh', e: 'large' },
      { h: '强烈', p: 'qiáng liè', v: 'mãnh liệt, mạnh mẽ', e: 'strong' },
      { h: '巧', p: 'qiǎo', v: 'khéo, tình cờ', e: 'opportunely' },
      { h: '亲', p: 'qīn', v: 'thân, gần gũi', e: 'parent' },
      { h: '亲切', p: 'qīn qiè', v: 'thân thiết, chân thành', e: 'amiable' },
      { h: '全面', p: 'quán miàn', v: 'toàn diện', e: 'all-around' },
      { h: '确实', p: 'què shí', v: 'thực sự, quả thật', e: 'indeed' },
      { h: '热烈', p: 'rè liè', v: 'nhiệt liệt, sôi nổi', e: 'enthusiastic' },
      { h: '人工', p: 'rén gōng', v: 'nhân tạo, lao động tay', e: 'artificial' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '天气暖和风景美丽', options: ['天气暖和风景美丽','天气很冷风很大','今天下雨了'], answer: '天气暖和风景美丽', py: 'Tiānqì nuǎnhuo fēngjǐng měilì', explain: '听 暖和 = ấm áp; 美丽 = xinh đẹp.' },
        { type: 'fill', sentence: '天气___，风景美丽。', options: ['暖和', '奇怪', '破'], answer: '暖和' },
        { type: 'fill', sentence: '风景很___。', options: ['美丽', '强', '皮'], answer: '美丽' },
        { type: 'fill', sentence: '这一切真___！', options: ['美好', '人工', '胖'], answer: '美好' },
        { type: 'fill', sentence: '这里的人很___。', options: ['亲切', '奇怪', '破'], answer: '亲切' },
        { type: 'fill', sentence: '中国很___。', options: ['强大', '巧', '皮'], answer: '强大' }
      ],
      normal: [
        { type: 'listen', audio: '你好像瘦了', options: ['你好像瘦了','你好像胖了','你好像累了'], answer: '你好像瘦了', py: 'Nǐ hǎoxiàng shòu le', explain: '听 瘦 = gầy.' },
        { type: 'dictation', audio: '进步很明显', answer: '进步很明显', hint: 'Tiến bộ rất rõ.', py: 'Jìnbù hěn míngxiǎn', explain: '明显 = rõ ràng.' },
        { type: 'fill', sentence: '我有种___的幸福感。', options: ['强烈', '普遍', '美丽'], answer: '强烈' },
        { type: 'fill', sentence: '真___，我们又见面了。', options: ['巧', '亲', '破'], answer: '巧' },
        { type: 'fill', sentence: '发展___，目标明确。', options: ['全面', '热烈', '胖'], answer: '全面' },
        { type: 'fill', sentence: '目标也很___。', options: ['明确', '奇怪', '人工'], answer: '明确' },
        { type: 'fill', sentence: '进步很___。', options: ['明显', '亲切', '强'], answer: '明显' },
        { type: 'order', words: ['这里', '的人', '很', '亲切'], answer: '这里的人很亲切' },
        { type: 'order', words: ['天气', '暖和', '风景', '美丽'], answer: '天气暖和风景美丽' }
      ],
      hard: [
        { type: 'fill', sentence: '___大家都这么说。', options: ['普遍', '热烈', '巧'], answer: '普遍' },
        { type: 'fill', sentence: '欢迎的态度很___。', options: ['热烈', '美好', '皮'], answer: '热烈' },
        { type: 'fill', sentence: '这个湖是___挖的。', options: ['人工', '强大', '奇怪'], answer: '人工' },
        { type: 'fill', sentence: '___，进步很明显。', options: ['确实', '美丽', '胖'], answer: '确实' },
        { type: 'translate', prompt: 'Trung Quốc rất hùng mạnh, phát triển toàn diện.', answer: '中国很强大，发展全面。' },
        { type: 'translate', prompt: 'Mùa xuân đến, thời tiết ấm áp, phong cảnh xinh đẹp.', answer: '春天来了，天气暖和，风景美丽。' }
      ]
    }
  },

  // BÀI 108: 日常,容易,伤心,深,深刻,深入,生动,适用,死,台,甜,通常,痛,痛苦,突出,突然,土,团结,完美,完善
  108: {
    id: 108, level: 3,
    title: 'Tính từ miêu tả (6)',
    context: 'Mai và Tiểu Mỹ ôn lại những kỷ niệm ngọt ngào lẫn đau buồn của một năm, và sự đoàn kết đã giúp họ vượt qua.',
    vocabPreview: ['深刻', '痛苦', '团结', '突然', '完善'],
    objectives: [
      "Nắm nhóm từ khóa: 深刻 · 痛苦 · 团结 · 突然 · 完善",
      "Kể/nghe hiểu tình huống Tính từ miêu tả (6) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 深刻 · 痛苦 · 团结",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "深刻 — sâu sắc",
        explain: "Dùng 深刻 trong ngữ cảnh Tính từ miêu tả (6) để diễn đạt: sâu sắc.",
        examples: [
          { zh: "这一年的日常生活让我印象深刻。", py: "Zhè yì nián de rìcháng shēnghuó ràng wǒ yìnxiàng shēnkè.", vi: "Cuộc sống thường ngày năm nay để lại cho mình ấn tượng sâu sắc." }
        ] },
      { point: "痛苦 — đau khổ",
        explain: "Dùng 痛苦 trong ngữ cảnh Tính từ miêu tả (6) để diễn đạt: đau khổ.",
        examples: [
          { zh: "有些回忆很甜，也有伤心痛苦的时候。", py: "Yǒuxiē huíyì hěn tián, yě yǒu shāngxīn tòngkǔ de shíhou.", vi: "Có những ký ức rất ngọt, cũng có lúc đau lòng khổ sở." }
        ] },
      { point: "团结 — đoàn kết",
        explain: "Dùng 团结 trong ngữ cảnh Tính từ miêu tả (6) để diễn đạt: đoàn kết.",
        examples: [
          { zh: "通常困难不容易克服，但我们团结一心。", py: "Tōngcháng kùnnán bù róngyì kèfú, dàn wǒmen tuánjié yìxīn.", vi: "Thông thường khó khăn không dễ vượt qua, nhưng tụi mình đoàn kết một lòng." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Nhà Mai · Buổi tối', bg: 'home', cast: ['mai', 'xiaomei'],
        text: 'Hai bạn ngồi ôn lại kỷ niệm một năm qua.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这一年的日常生活让我印象深刻。',
        pinyin: 'Zhè yì nián de rìcháng shēnghuó ràng wǒ yìnxiàng shēnkè.',
        meaning: 'Cuộc sống thường ngày năm nay để lại cho mình ấn tượng sâu sắc.', expression: 'focused', vocab: ['日常', '深刻'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '有些回忆很甜，也有伤心痛苦的时候。',
        pinyin: 'Yǒuxiē huíyì hěn tián, yě yǒu shāngxīn tòngkǔ de shíhou.',
        meaning: 'Có những ký ức rất ngọt, cũng có lúc đau lòng khổ sở.', expression: 'sad', vocab: ['甜', '伤心', '痛苦'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '通常困难不容易克服，但我们团结一心。',
        pinyin: 'Tōngcháng kùnnán bù róngyì kèfú, dàn wǒmen tuánjié yìxīn.',
        meaning: 'Thông thường khó khăn không dễ vượt qua, nhưng tụi mình đoàn kết một lòng.', expression: 'focused', vocab: ['通常', '容易', '团结'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你的故事很生动，特别突出。',
        pinyin: 'Nǐ de gùshi hěn shēngdòng, tèbié túchū.',
        meaning: 'Câu chuyện của cậu rất sinh động, đặc biệt nổi bật.', expression: 'happy', vocab: ['生动', '突出'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'home', scene: '📍 Nhà Mai', expression: 'surprise',
        q: 'Mai kể: "Hôm đó trời ___ (đột nhiên) đổ mưa". Chọn từ đúng?',
        options: [
          { text: '那天突然下起雨来。', pinyin: 'Nà tiān tūrán xià qǐ yǔ lái.', meaning: 'Hôm đó trời đột nhiên đổ mưa.', correct: true, feedback: 'Đúng! 突然 = đột nhiên, bất ngờ.' },
          { text: '那天突出下起雨来。', pinyin: 'Nà tiān tūchū xià qǐ yǔ lái.', meaning: '(sai)', correct: false, feedback: '突出 = nổi bật, không chỉ sự bất ngờ về thời gian.' },
          { text: '那天痛下起雨来。', pinyin: 'Nà tiān tòng xià qǐ yǔ lái.', meaning: '(sai)', correct: false, feedback: '痛 = đau, hoàn toàn sai.' }
        ], vocab: ['突然', '突出', '痛'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '有一次我突然胃痛，疼得要死。',
        pinyin: 'Yǒu yí cì wǒ tūrán wèi tòng, téng de yào sǐ.',
        meaning: 'Có lần mình đột nhiên đau dạ dày, đau muốn chết.', expression: 'sad', vocab: ['痛', '死'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这些经验深入人心，对将来很适用。',
        pinyin: 'Zhèxiē jīngyàn shēnrù rénxīn, duì jiānglái hěn shìyòng.',
        meaning: 'Những kinh nghiệm này thấm sâu lòng người, rất áp dụng được cho tương lai.', expression: 'focused', vocab: ['深入', '适用'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '那条河很深，山上的土很肥。',
        pinyin: 'Nà tiáo hé hěn shēn, shān shàng de tǔ hěn féi.',
        meaning: 'Con sông đó rất sâu, đất trên núi rất màu mỡ.', expression: null, vocab: ['深', '土'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '一台电脑帮我完成作业，方法越来越完善，接近完美。',
        pinyin: 'Yì tái diànnǎo bāng wǒ wánchéng zuòyè, fāngfǎ yuèláiyuè wánshàn, jiējìn wánměi.',
        meaning: 'Một chiếc máy tính giúp mình làm bài, phương pháp ngày càng hoàn thiện, gần như hoàn hảo.', expression: 'happy', vocab: ['台', '完善', '完美'] },
      { type: 'checkpoint', questions: [
        { q: '"深刻" có nghĩa là gì?', options: ['sâu sắc', 'dễ dàng', 'ngọt', 'đột nhiên'], answer: 0 },
        { q: 'Từ nào nghĩa là "đoàn kết"?', options: ['团结', '痛苦', '适用'], answer: 0 },
        { q: '"通常" có nghĩa là gì?', options: ['thông thường', 'sinh động', 'hoàn hảo'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '日常', p: 'rì cháng', v: 'hàng ngày, thường ngày', e: 'day-to-day' },
      { h: '容易', p: 'róng yì', v: 'dễ dàng', e: 'easy' },
      { h: '伤心', p: 'shāng xīn', v: 'đau lòng, buồn', e: 'to grieve' },
      { h: '深', p: 'shēn', v: 'sâu', e: 'deep, dark (color)' },
      { h: '深刻', p: 'shēn kè', v: 'sâu sắc', e: 'profound' },
      { h: '深入', p: 'shēn rù', v: 'thấm sâu, đi sâu', e: 'to penetrate deeply' },
      { h: '生动', p: 'shēng dòng', v: 'sinh động', e: 'vivid' },
      { h: '适用', p: 'shì yòng', v: 'áp dụng được', e: 'to be applicable' },
      { h: '死', p: 'sǐ', v: 'chết', e: 'to die' },
      { h: '台', p: 'tái', v: 'chiếc (lượng từ máy), sân khấu', e: 'Taiwan (abbr.)' },
      { h: '甜', p: 'tián', v: 'ngọt', e: 'sweet' },
      { h: '通常', p: 'tōng cháng', v: 'thông thường', e: 'regular' },
      { h: '痛', p: 'tòng', v: 'đau', e: 'ache' },
      { h: '痛苦', p: 'tòng kǔ', v: 'đau khổ', e: 'pain' },
      { h: '突出', p: 'tū chū', v: 'nổi bật', e: 'prominent' },
      { h: '突然', p: 'tū rán', v: 'đột nhiên', e: 'sudden' },
      { h: '土', p: 'tǔ', v: 'đất', e: 'Tu (ethnic group)' },
      { h: '团结', p: 'tuán jié', v: 'đoàn kết', e: 'to unite' },
      { h: '完美', p: 'wán měi', v: 'hoàn hảo', e: 'perfect' },
      { h: '完善', p: 'wán shàn', v: 'hoàn thiện', e: 'comprehensive' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '让我印象深刻', options: ['让我印象深刻','让我很不高兴','让我有点失望'], answer: '让我印象深刻', py: 'Ràng wǒ yìnxiàng shēnkè', explain: '听 深刻 = sâu sắc.' },
        { type: 'fill', sentence: '___生活让我印象深刻。', options: ['日常', '突然', '痛'], answer: '日常' },
        { type: 'fill', sentence: '有些回忆很___。', options: ['甜', '深', '土'], answer: '甜' },
        { type: 'fill', sentence: '我们___一心。', options: ['团结', '容易', '适用'], answer: '团结' },
        { type: 'fill', sentence: '你的故事很___。', options: ['生动', '通常', '死'], answer: '生动' },
        { type: 'fill', sentence: '一___电脑帮我完成作业。', options: ['台', '土', '甜'], answer: '台' }
      ],
      normal: [
        { type: 'listen', audio: '你的故事很生动', options: ['你的故事很生动','你的故事太长了','你的故事很简单'], answer: '你的故事很生动', py: 'Nǐ de gùshi hěn shēngdòng', explain: '听 生动 = sinh động.' },
        { type: 'dictation', audio: '疼得要死', answer: '疼得要死', hint: 'Đau muốn chết.', py: 'Téng de yào sǐ', explain: '痛/疼 = đau; 死 = chết.' },
        { type: 'fill', sentence: '印象很___。', options: ['深刻', '容易', '甜'], answer: '深刻' },
        { type: 'fill', sentence: '也有伤心___的时候。', options: ['痛苦', '生动', '通常'], answer: '痛苦' },
        { type: 'fill', sentence: '困难不___克服。', options: ['容易', '深入', '突出'], answer: '容易' },
        { type: 'fill', sentence: '你的故事特别___。', options: ['突出', '伤心', '台'], answer: '突出' },
        { type: 'fill', sentence: '这些经验对将来很___。', options: ['适用', '深', '甜'], answer: '适用' },
        { type: 'order', words: ['那天', '突然', '下起', '雨来'], answer: '那天突然下起雨来' },
        { type: 'order', words: ['我们', '团结', '一心'], answer: '我们团结一心' }
      ],
      hard: [
        { type: 'fill', sentence: '经验___人心。', options: ['深入', '通常', '痛'], answer: '深入' },
        { type: 'fill', sentence: '我突然胃___。', options: ['痛', '深', '土'], answer: '痛' },
        { type: 'fill', sentence: '方法越来越___。', options: ['完善', '深刻', '容易'], answer: '完善' },
        { type: 'fill', sentence: '山上的___很肥。', options: ['土', '台', '甜'], answer: '土' },
        { type: 'translate', prompt: 'Có những ký ức rất ngọt, cũng có lúc đau lòng khổ sở.', answer: '有些回忆很甜，也有伤心痛苦的时候。' },
        { type: 'translate', prompt: 'Phương pháp ngày càng hoàn thiện, gần như hoàn hảo.', answer: '方法越来越完善，接近完美。' }
      ]
    }
  },

  // BÀI 109: 完整,危险,伟大,卫生,温暖,文明,先进,显然,现实,相互,相似,香,形象,幸运,意外,银,影视,有利,有效,约
  109: {
    id: 109, level: 3,
    title: 'Tính từ miêu tả (7)',
    context: 'Mai và Tiểu Mỹ cùng xem một bộ phim, bàn về văn minh, an toàn và sự may mắn của một năm bình an.',
    vocabPreview: ['影视', '温暖', '文明', '危险', '幸运'],
    objectives: [
      "Nắm nhóm từ khóa: 影视 · 温暖 · 文明 · 危险 · 幸运",
      "Kể/nghe hiểu tình huống Tính từ miêu tả (7) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 影视 · 温暖 · 文明",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "影视 — phim ảnh và truyền hình",
        explain: "Dùng 影视 trong ngữ cảnh Tính từ miêu tả (7) để diễn đạt: phim ảnh và truyền hình.",
        examples: [
          { zh: "我们约好一起看影视作品，讲一个伟大的故事。", py: "Wǒmen yuē hǎo yìqǐ kàn yǐngshì zuòpǐn, jiǎng yí gè wěidà de gùshi.", vi: "Tụi mình hẹn nhau xem tác phẩm điện ảnh, kể một câu chuyện vĩ đại." }
        ] },
      { point: "温暖 — ấm áp",
        explain: "Dùng 温暖 trong ngữ cảnh Tính từ miêu tả (7) để diễn đạt: ấm áp.",
        examples: [
          { zh: "那部电影画面温暖，人物形象很完整。", py: "Nà bù diànyǐng huàmiàn wēnnuǎn, rénwù xíngxiàng hěn wánzhěng.", vi: "Bộ phim đó hình ảnh ấm áp, hình tượng nhân vật rất hoàn chỉnh." }
        ] },
      { point: "文明 — văn minh",
        explain: "Dùng 文明 trong ngữ cảnh Tính từ miêu tả (7) để diễn đạt: văn minh.",
        examples: [
          { zh: "显然，文明社会需要相互尊重。", py: "Xiǎnrán, wénmíng shèhuì xūyào xiānghù zūnzhòng.", vi: "Rõ ràng, xã hội văn minh cần tôn trọng lẫn nhau." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Nhà Mai · Buổi tối', bg: 'home', cast: ['mai', 'xiaomei'],
        text: 'Hai bạn hẹn nhau xem phim ở nhà.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我们约好一起看影视作品，讲一个伟大的故事。',
        pinyin: 'Wǒmen yuē hǎo yìqǐ kàn yǐngshì zuòpǐn, jiǎng yí gè wěidà de gùshi.',
        meaning: 'Tụi mình hẹn nhau xem tác phẩm điện ảnh, kể một câu chuyện vĩ đại.', expression: 'happy', vocab: ['约', '影视', '伟大'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '那部电影画面温暖，人物形象很完整。',
        pinyin: 'Nà bù diànyǐng huàmiàn wēnnuǎn, rénwù xíngxiàng hěn wánzhěng.',
        meaning: 'Bộ phim đó hình ảnh ấm áp, hình tượng nhân vật rất hoàn chỉnh.', expression: 'happy', vocab: ['温暖', '形象', '完整'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '故事很现实，和我们的经历相似。',
        pinyin: 'Gùshi hěn xiànshí, hé wǒmen de jīnglì xiāngsì.',
        meaning: 'Câu chuyện rất thực tế, tương tự với trải nghiệm của tụi mình.', expression: 'focused', vocab: ['现实', '相似'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '显然，文明社会需要相互尊重。',
        pinyin: 'Xiǎnrán, wénmíng shèhuì xūyào xiānghù zūnzhòng.',
        meaning: 'Rõ ràng, xã hội văn minh cần tôn trọng lẫn nhau.', expression: 'focused', vocab: ['显然', '文明', '相互'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'home', scene: '📍 Nhà Mai', expression: 'curious',
        q: 'Mai nhắc: "Hút thuốc rất ___ (nguy hiểm) cho sức khỏe". Chọn từ đúng?',
        options: [
          { text: '抽烟对健康很危险。', pinyin: 'Chōu yān duì jiànkāng hěn wēixiǎn.', meaning: 'Hút thuốc rất nguy hiểm cho sức khỏe.', correct: true, feedback: 'Đúng! 危险 = nguy hiểm.' },
          { text: '抽烟对健康很有利。', pinyin: 'Chōu yān duì jiànkāng hěn yǒulì.', meaning: '(sai ngược nghĩa)', correct: false, feedback: '有利 = có lợi, ngược hẳn ý câu.' },
          { text: '抽烟对健康很卫生。', pinyin: 'Chōu yān duì jiànkāng hěn wèishēng.', meaning: '(sai)', correct: false, feedback: '卫生 = vệ sinh, không hợp nghĩa.' }
        ], vocab: ['危险', '有利', '卫生'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '注意卫生对健康有利，这方法很有效。',
        pinyin: 'Zhùyì wèishēng duì jiànkāng yǒulì, zhè fāngfǎ hěn yǒuxiào.',
        meaning: 'Chú ý vệ sinh có lợi cho sức khỏe, cách này rất hiệu quả.', expression: 'happy', vocab: ['卫生', '有利', '有效'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我们很幸运，这一年没出意外。',
        pinyin: 'Wǒmen hěn xìngyùn, zhè yì nián méi chū yìwài.',
        meaning: 'Tụi mình rất may mắn, năm nay không xảy ra sự cố nào.', expression: 'happy', vocab: ['幸运', '意外'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这道菜真香！银色的盘子也好看。现在技术先进，看电影很方便。',
        pinyin: 'Zhè dào cài zhēn xiāng! Yínsè de pánzi yě hǎokàn. Xiànzài jìshù xiānjìn, kàn diànyǐng hěn fāngbiàn.',
        meaning: 'Món này thơm thật! Cái đĩa màu bạc cũng đẹp. Giờ công nghệ tiên tiến, xem phim rất tiện.', expression: 'happy', vocab: ['香', '银', '先进'] },
      { type: 'checkpoint', questions: [
        { q: '"影视" có nghĩa là gì?', options: ['phim ảnh và truyền hình', 'hình tượng', 'vệ sinh', 'may mắn'], answer: 0 },
        { q: 'Từ nào nghĩa là "lẫn nhau"?', options: ['相似', '相互', '现实'], answer: 1 },
        { q: '"幸运" có nghĩa là gì?', options: ['may mắn', 'nguy hiểm', 'vĩ đại'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '完整', p: 'wán zhěng', v: 'hoàn chỉnh, đầy đủ', e: 'complete' },
      { h: '危险', p: 'wēi xiǎn', v: 'nguy hiểm', e: 'danger' },
      { h: '伟大', p: 'wěi dà', v: 'vĩ đại', e: 'huge' },
      { h: '卫生', p: 'wèi shēng', v: 'vệ sinh', e: 'health' },
      { h: '温暖', p: 'wēn nuǎn', v: 'ấm áp', e: 'warm' },
      { h: '文明', p: 'wén míng', v: 'văn minh', e: 'civilized' },
      { h: '先进', p: 'xiān jìn', v: 'tiên tiến', e: 'advanced (technology)' },
      { h: '显然', p: 'xiǎn rán', v: 'rõ ràng, hiển nhiên', e: 'clearly' },
      { h: '现实', p: 'xiàn shí', v: 'thực tế', e: 'reality' },
      { h: '相互', p: 'xiāng hù', v: 'lẫn nhau', e: 'each other' },
      { h: '相似', p: 'xiāng sì', v: 'tương tự', e: 'similar' },
      { h: '香', p: 'xiāng', v: 'thơm, hương', e: 'fragrant' },
      { h: '形象', p: 'xíng xiàng', v: 'hình tượng, hình ảnh', e: 'image' },
      { h: '幸运', p: 'xìng yùn', v: 'may mắn', e: 'fortunate' },
      { h: '意外', p: 'yì wài', v: 'bất ngờ, ngoài ý muốn', e: 'unexpected' },
      { h: '银', p: 'yín', v: 'bạc', e: 'silver' },
      { h: '影视', p: 'yǐng shì', v: 'phim ảnh và truyền hình', e: 'movies and television' },
      { h: '有利', p: 'yǒu lì', v: 'có lợi', e: 'advantageous' },
      { h: '有效', p: 'yǒu xiào', v: 'hiệu quả, có hiệu lực', e: 'effective' },
      { h: '约', p: 'yuē', v: 'ước hẹn, khoảng', e: 'to weigh in a balance or on a scale' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '故事很现实', options: ['故事很现实','故事很可怕','故事很无聊'], answer: '故事很现实', py: 'Gùshi hěn xiànshí', explain: '听 现实 = thực tế.' },
        { type: 'fill', sentence: '我们一起看___作品。', options: ['影视', '卫生', '银'], answer: '影视' },
        { type: 'fill', sentence: '画面很___。', options: ['温暖', '危险', '约'], answer: '温暖' },
        { type: 'fill', sentence: '讲一个___的故事。', options: ['伟大', '现实', '有效'], answer: '伟大' },
        { type: 'fill', sentence: '这道菜真___！', options: ['香', '银', '完整'], answer: '香' },
        { type: 'fill', sentence: '我们很___，没出意外。', options: ['幸运', '相似', '先进'], answer: '幸运' }
      ],
      normal: [
        { type: 'listen', audio: '我们很幸运', options: ['我们很幸运','我们很倒霉','我们很难过'], answer: '我们很幸运', py: 'Wǒmen hěn xìngyùn', explain: '听 幸运 = may mắn.' },
        { type: 'dictation', audio: '这道菜真香', answer: '这道菜真香', hint: 'Món này thơm thật.', py: 'Zhè dào cài zhēn xiāng', explain: '香 = thơm.' },
        { type: 'fill', sentence: '人物形象很___。', options: ['完整', '温暖', '有利'], answer: '完整' },
        { type: 'fill', sentence: '故事很___。', options: ['现实', '危险', '银'], answer: '现实' },
        { type: 'fill', sentence: '和我们的经历___。', options: ['相似', '相互', '香'], answer: '相似' },
        { type: 'fill', sentence: '文明社会需要___尊重。', options: ['相互', '相似', '幸运'], answer: '相互' },
        { type: 'fill', sentence: '这一年没出___。', options: ['意外', '影视', '卫生'], answer: '意外' },
        { type: 'order', words: ['抽烟', '对健康', '很', '危险'], answer: '抽烟对健康很危险' },
        { type: 'order', words: ['我们', '约好', '一起', '看电影'], answer: '我们约好一起看电影' }
      ],
      hard: [
        { type: 'fill', sentence: '注意卫生对健康___。', options: ['有利', '危险', '约'], answer: '有利' },
        { type: 'fill', sentence: '这方法很___。', options: ['有效', '完整', '香'], answer: '有效' },
        { type: 'fill', sentence: '___，文明社会需要尊重。', options: ['显然', '温暖', '银'], answer: '显然' },
        { type: 'fill', sentence: '现在技术很___。', options: ['先进', '现实', '意外'], answer: '先进' },
        { type: 'translate', prompt: 'Xã hội văn minh cần tôn trọng lẫn nhau.', answer: '文明社会需要相互尊重。' },
        { type: 'translate', prompt: 'Chú ý vệ sinh có lợi cho sức khỏe.', answer: '注意卫生对健康有利。' }
      ]
    }
  },

  // BÀI 110: 长期,真实,整,整个,整齐,正式,直,值,重大,主动,专门,准,自动,自觉,自然,总
  110: {
    id: 110, level: 3,
    title: 'Tính từ miêu tả (8)',
    context: 'Mai chính thức bắt đầu một kế hoạch dài hạn, sắp xếp mọi thứ ngăn nắp và quyết tâm đi con đường thẳng.',
    vocabPreview: ['长期', '正式', '主动', '真实', '整齐'],
    objectives: [
      "Nắm nhóm từ khóa: 长期 · 正式 · 主动 · 真实 · 整齐",
      "Kể/nghe hiểu tình huống Tính từ miêu tả (8) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 长期 · 正式 · 主动",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "长期 — dài hạn",
        explain: "Dùng 长期 trong ngữ cảnh Tính từ miêu tả (8) để diễn đạt: dài hạn.",
        examples: [
          { zh: "我做了一个长期计划，很正式。", py: "Wǒ zuò le yí gè chángqī jìhuà, hěn zhèngshì.", vi: "Mình lập một kế hoạch dài hạn, rất chính thức." }
        ] },
      { point: "正式 — chính thức",
        explain: "Dùng 正式 trong ngữ cảnh Tính từ miêu tả (8) để diễn đạt: chính thức.",
        examples: [
          { zh: "我做了一个长期计划，很正式。", py: "Wǒ zuò le yí gè chángqī jìhuà, hěn zhèngshì.", vi: "Mình lập một kế hoạch dài hạn, rất chính thức." }
        ] },
      { point: "主动 — chủ động",
        explain: "Dùng 主动 trong ngữ cảnh Tính từ miêu tả (8) để diễn đạt: chủ động.",
        examples: [
          { zh: "这是个重大决定。你总是很主动。", py: "Zhè shì gè zhòngdà juédìng. Nǐ zǒngshì hěn zhǔdòng.", vi: "Đây là quyết định trọng đại. Cậu luôn rất chủ động." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Bàn học · Buổi tối', bg: 'home', cast: ['mai', 'xiaomei'],
        text: 'Mai lập một kế hoạch dài hạn cho chặng đường sắp tới.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我做了一个长期计划，很正式。',
        pinyin: 'Wǒ zuò le yí gè chángqī jìhuà, hěn zhèngshì.',
        meaning: 'Mình lập một kế hoạch dài hạn, rất chính thức.', expression: 'focused', vocab: ['长期', '正式'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这是个重大决定。你总是很主动。',
        pinyin: 'Zhè shì gè zhòngdà juédìng. Nǐ zǒngshì hěn zhǔdòng.',
        meaning: 'Đây là quyết định trọng đại. Cậu luôn rất chủ động.', expression: 'happy', vocab: ['重大', '总', '主动'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我专门整理了一整套资料，房间也很整齐。',
        pinyin: 'Wǒ zhuānmén zhěnglǐ le yì zhěng tào zīliào, fángjiān yě hěn zhěngqí.',
        meaning: 'Mình chuyên sắp xếp một bộ tài liệu trọn vẹn, phòng cũng rất gọn gàng.', expression: 'happy', vocab: ['专门', '整', '整齐'] },
      { type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'home', scene: '📍 Bàn học', expression: 'curious',
        q: 'Tiểu Mỹ khen nhật ký của Mai: "Câu chuyện này rất ___ (chân thật)". Chọn từ đúng?',
        options: [
          { text: '这个故事很真实。', pinyin: 'Zhège gùshi hěn zhēnshí.', meaning: 'Câu chuyện này rất chân thật.', correct: true, feedback: 'Đúng! 真实 = thật, chân thật.' },
          { text: '这个故事很自动。', pinyin: 'Zhège gùshi hěn zìdòng.', meaning: '(sai)', correct: false, feedback: '自动 = tự động, không tả tính chân thật.' },
          { text: '这个故事很自觉。', pinyin: 'Zhège gùshi hěn zìjué.', meaning: '(sai)', correct: false, feedback: '自觉 = tự giác, sai nghĩa.' }
        ], vocab: ['真实', '自动', '自觉'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你的进步是真实的，态度很自觉，表现也很自然。',
        pinyin: 'Nǐ de jìnbù shì zhēnshí de, tàidu hěn zìjué, biǎoxiàn yě hěn zìrán.',
        meaning: 'Tiến bộ của cậu là thật, thái độ rất tự giác, biểu hiện cũng tự nhiên.', expression: 'happy', vocab: ['真实', '自觉', '自然'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '整个过程值得，我一直走直路，不走弯路。',
        pinyin: 'Zhěnggè guòchéng zhíde, wǒ yìzhí zǒu zhí lù, bù zǒu wān lù.',
        meaning: 'Cả quá trình đáng giá, mình luôn đi đường thẳng, không đi đường vòng.', expression: 'focused', vocab: ['整个', '值', '直'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '系统会自动保存，时间也很准。',
        pinyin: 'Xìtǒng huì zìdòng bǎocún, shíjiān yě hěn zhǔn.',
        meaning: 'Hệ thống sẽ tự động lưu, thời gian cũng rất chuẩn.', expression: 'happy', vocab: ['自动', '准'] },
      { type: 'checkpoint', questions: [
        { q: '"长期" có nghĩa là gì?', options: ['dài hạn', 'chính thức', 'gọn gàng', 'tự động'], answer: 0 },
        { q: 'Từ nào nghĩa là "chủ động"?', options: ['主动', '自觉', '自动'], answer: 0 },
        { q: '"真实" có nghĩa là gì?', options: ['thật, chân thật', 'trọng đại', 'tự nhiên'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '长期', p: 'cháng qī', v: 'dài hạn', e: 'long term' },
      { h: '真实', p: 'zhēn shí', v: 'thật, chân thật', e: 'true' },
      { h: '整', p: 'zhěng', v: 'toàn bộ, nguyên vẹn', e: 'exactly' },
      { h: '整个', p: 'zhěng gè', v: 'toàn bộ, cả', e: 'whole' },
      { h: '整齐', p: 'zhěng qí', v: 'gọn gàng, ngăn nắp', e: 'orderly' },
      { h: '正式', p: 'zhèng shì', v: 'chính thức', e: 'formal' },
      { h: '直', p: 'zhí', v: 'thẳng, trực tiếp', e: 'straight, direct, vertical' },
      { h: '值', p: 'zhí', v: 'giá trị, đáng', e: 'value' },
      { h: '重大', p: 'zhòng dà', v: 'trọng đại', e: 'great' },
      { h: '主动', p: 'zhǔ dòng', v: 'chủ động', e: 'to take the initiative' },
      { h: '专门', p: 'zhuān mén', v: 'chuyên, chuyên biệt', e: 'specialist' },
      { h: '准', p: 'zhǔn', v: 'chuẩn, chính xác', e: 'to allow' },
      { h: '自动', p: 'zì dòng', v: 'tự động', e: 'automatic' },
      { h: '自觉', p: 'zì jué', v: 'tự giác', e: 'conscious' },
      { h: '自然', p: 'zì rán', v: 'tự nhiên', e: 'nature' },
      { h: '总', p: 'zǒng', v: 'tổng, luôn luôn', e: 'general' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '我做了一个长期计划', options: ['我做了一个长期计划','我写完了今天的作业','我买了很多东西'], answer: '我做了一个长期计划', py: 'Wǒ zuò le yí gè chángqī jìhuà', explain: '听 长期 = dài hạn.' },
        { type: 'fill', sentence: '我做了一个___计划。', options: ['长期', '主动', '准'], answer: '长期' },
        { type: 'fill', sentence: '这个计划很___。', options: ['正式', '真实', '直'], answer: '正式' },
        { type: 'fill', sentence: '房间很___。', options: ['整齐', '重大', '总'], answer: '整齐' },
        { type: 'fill', sentence: '这是个___决定。', options: ['重大', '自动', '整'], answer: '重大' },
        { type: 'fill', sentence: '你总是很___。', options: ['主动', '真实', '直'], answer: '主动' }
      ],
      normal: [
        { type: 'listen', audio: '房间也很整齐', options: ['房间也很整齐','房间有点乱','桌子上很脏'], answer: '房间也很整齐', py: 'Fángjiān yě hěn zhěngqí', explain: '听 整齐 = gọn gàng.' },
        { type: 'dictation', audio: '系统会自动保存', answer: '系统会自动保存', hint: 'Hệ thống sẽ tự động lưu.', py: 'Xìtǒng huì zìdòng bǎocún', explain: '自动 = tự động.' },
        { type: 'fill', sentence: '我___整理了资料。', options: ['专门', '正式', '准'], answer: '专门' },
        { type: 'fill', sentence: '你的进步是___的。', options: ['真实', '长期', '整'], answer: '真实' },
        { type: 'fill', sentence: '态度很___。', options: ['自觉', '自动', '直'], answer: '自觉' },
        { type: 'fill', sentence: '表现也很___。', options: ['自然', '重大', '准'], answer: '自然' },
        { type: 'fill', sentence: '___过程值得。', options: ['整个', '正式', '长期'], answer: '整个' },
        { type: 'order', words: ['这个', '故事', '很', '真实'], answer: '这个故事很真实' },
        { type: 'order', words: ['我', '一直', '走', '直路'], answer: '我一直走直路' }
      ],
      hard: [
        { type: 'fill', sentence: '系统会___保存。', options: ['自动', '自觉', '主动'], answer: '自动' },
        { type: 'fill', sentence: '时间也很___。', options: ['准', '整', '直'], answer: '准' },
        { type: 'fill', sentence: '整个过程___得。', options: ['值', '直', '总'], answer: '值' },
        { type: 'fill', sentence: '我整理了一___套资料。', options: ['整', '准', '值'], answer: '整' },
        { type: 'translate', prompt: 'Đây là quyết định trọng đại. Cậu luôn rất chủ động.', answer: '这是个重大决定，你总是很主动。' },
        { type: 'translate', prompt: 'Cả quá trình đáng giá, mình luôn đi đường thẳng.', answer: '整个过程值得，我一直走直路。' }
      ]
    }
  },

  // BÀI 111: 朝,初一,从来,从前,当初,古,古代,国庆,后年,将来,金,近期,目前,年初
  111: {
    id: 111, level: 3,
    title: 'Thời gian & lịch trình (1)',
    context: 'Kỳ nghỉ Quốc khánh, Mai và Tiểu Mỹ dạo phố cổ, ôn lại chuyện xưa và bàn về dự định tương lai.',
    vocabPreview: ['国庆', '古代', '将来', '目前', '从前'],
    objectives: [
      "Nắm nhóm từ khóa: 国庆 · 古代 · 将来 · 目前 · 从前",
      "Kể/nghe hiểu tình huống Thời gian & lịch trình (1) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 国庆 · 古代 · 将来",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "国庆 — quốc khánh",
        explain: "Dùng 国庆 trong ngữ cảnh Thời gian & lịch trình (1) để diễn đạt: quốc khánh.",
        examples: [
          { zh: "今天是国庆节，街上真热闹！", py: "Jīntiān shì Guóqìng jié, jiē shàng zhēn rènao!", vi: "Hôm nay là Quốc khánh, phố xá náo nhiệt thật!" },
          { zh: "我从来没在国庆这么开心过。", py: "Wǒ cónglái méi zài Guóqìng zhème kāixīn guo.", vi: "Mình chưa bao giờ vui thế này vào dịp Quốc khánh." }
        ] },
      { point: "古代 — thời cổ đại",
        explain: "Dùng 古代 trong ngữ cảnh Thời gian & lịch trình (1) để diễn đạt: thời cổ đại.",
        examples: [
          { zh: "这座古庙是古代留下的，属于唐朝。", py: "Zhè zuò gǔ miào shì gǔdài liúxià de, shǔyú Táng cháo.", vi: "Ngôi chùa cổ này là di tích thời cổ đại để lại, thuộc triều Đường." }
        ] },
      { point: "将来 — tương lai",
        explain: "Dùng 将来 trong ngữ cảnh Thời gian & lịch trình (1) để diễn đạt: tương lai.",
        examples: [
          { zh: "将来我想读研，后年可能再出国。", py: "Jiānglái wǒ xiǎng dú yán, hòunián kěnéng zài chūguó.", vi: "Tương lai mình muốn học cao học, năm kia có thể lại ra nước ngoài." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Phố cổ · Quốc khánh', bg: 'street', cast: ['mai', 'xiaomei'],
        text: 'Kỳ nghỉ Quốc khánh, hai bạn dạo phố cổ.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '今天是国庆节，街上真热闹！',
        pinyin: 'Jīntiān shì Guóqìng jié, jiē shàng zhēn rènao!',
        meaning: 'Hôm nay là Quốc khánh, phố xá náo nhiệt thật!', expression: 'happy', vocab: ['国庆'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '是啊，从前我们在国外，今年终于能一起过节。',
        pinyin: 'Shì a, cóngqián wǒmen zài guówài, jīnnián zhōngyú néng yìqǐ guòjié.',
        meaning: 'Đúng vậy, trước đây tụi mình ở nước ngoài, năm nay cuối cùng được cùng đón lễ.', expression: 'happy', vocab: ['从前'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我从来没在国庆这么开心过。',
        pinyin: 'Wǒ cónglái méi zài Guóqìng zhème kāixīn guo.',
        meaning: 'Mình chưa bao giờ vui thế này vào dịp Quốc khánh.', expression: 'happy', vocab: ['从来'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这座古庙是古代留下的，属于唐朝。',
        pinyin: 'Zhè zuò gǔ miào shì gǔdài liúxià de, shǔyú Táng cháo.',
        meaning: 'Ngôi chùa cổ này là di tích thời cổ đại để lại, thuộc triều Đường.', expression: 'focused', vocab: ['古', '古代', '朝'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'street', scene: '📍 Phố cổ', expression: 'curious',
        q: 'Mai nói về việc học: "___ (hiện tại) mình đang ôn thi". Chọn từ đúng?',
        options: [
          { text: '目前我在准备考试。', pinyin: 'Mùqián wǒ zài zhǔnbèi kǎoshì.', meaning: 'Hiện tại mình đang chuẩn bị thi.', correct: true, feedback: 'Đúng! 目前 = hiện tại, lúc này.' },
          { text: '将来我在准备考试。', pinyin: 'Jiānglái wǒ zài zhǔnbèi kǎoshì.', meaning: '(sai thì)', correct: false, feedback: '将来 = tương lai, không hợp với "đang".' },
          { text: '后年我在准备考试。', pinyin: 'Hòunián wǒ zài zhǔnbèi kǎoshì.', meaning: '(sai thì)', correct: false, feedback: '后年 = năm kia (sau 2 năm), sai mốc thời gian.' }
        ], vocab: ['目前', '将来', '后年'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '当初我们刚出国时很紧张，现在成长了不少。',
        pinyin: 'Dāngchū wǒmen gāng chūguó shí hěn jǐnzhāng, xiànzài chéngzhǎng le bù shǎo.',
        meaning: 'Thuở ấy lúc mới ra nước ngoài tụi mình rất căng thẳng, giờ đã trưởng thành nhiều.', expression: null, vocab: ['当初'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '将来我想读研，后年可能再出国。',
        pinyin: 'Jiānglái wǒ xiǎng dú yán, hòunián kěnéng zài chūguó.',
        meaning: 'Tương lai mình muốn học cao học, năm kia có thể lại ra nước ngoài.', expression: 'happy', vocab: ['将来', '后年'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '近期我在准备考试，年初定的目标快实现了。初一我们去拜年，给长辈送金色的礼物。',
        pinyin: 'Jìnqī wǒ zài zhǔnbèi kǎoshì, niánchū dìng de mùbiāo kuài shíxiàn le. Chūyī wǒmen qù bàinián, gěi zhǎngbèi sòng jīnsè de lǐwù.',
        meaning: 'Gần đây mình đang ôn thi, mục tiêu đặt đầu năm sắp đạt được. Mồng một tụi mình đi chúc Tết, tặng người lớn món quà màu vàng.', expression: 'happy', vocab: ['近期', '年初', '初一', '金'] },
      { type: 'checkpoint', questions: [
        { q: '"国庆" có nghĩa là gì?', options: ['quốc khánh', 'cổ đại', 'tương lai', 'đầu năm'], answer: 0 },
        { q: 'Từ nào nghĩa là "chưa bao giờ / từ trước đến nay"?', options: ['从前', '从来', '当初'], answer: 1 },
        { q: '"目前" có nghĩa là gì?', options: ['hiện tại, lúc này', 'năm kia', 'thời cổ đại'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '朝', p: 'cháo', v: 'triều đại, hướng về', e: 'abbr. for 朝鲜 Korea' },
      { h: '初一', p: 'chū yī', v: 'mồng một âm lịch', e: 'first day of lunar month' },
      { h: '从来', p: 'cóng lái', v: 'từ trước đến nay, chưa bao giờ', e: 'always' },
      { h: '从前', p: 'cóng qián', v: 'trước đây, ngày xưa', e: 'previously' },
      { h: '当初', p: 'dāng chū', v: 'ban đầu, thuở ấy', e: 'at that time' },
      { h: '古', p: 'gǔ', v: 'cổ, xưa', e: 'ancient, old, classical' },
      { h: '古代', p: 'gǔ dài', v: 'thời cổ đại', e: 'ancient times' },
      { h: '国庆', p: 'guó qìng', v: 'quốc khánh', e: 'National Day' },
      { h: '后年', p: 'hòu nián', v: 'năm kia (sau 2 năm)', e: 'the year after next' },
      { h: '将来', p: 'jiāng lái', v: 'tương lai', e: 'in the future' },
      { h: '金', p: 'jīn', v: 'vàng', e: 'gold, golden, metal' },
      { h: '近期', p: 'jìn qī', v: 'gần đây', e: 'near in time' },
      { h: '目前', p: 'mù qián', v: 'hiện tại, lúc này', e: 'at the present time' },
      { h: '年初', p: 'nián chū', v: 'đầu năm', e: 'beginning of the year' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '今天是国庆节', options: ['今天是国庆节','今天是春节','今天是周末'], answer: '今天是国庆节', py: 'Jīntiān shì Guóqìng jié', explain: '听 国庆 = quốc khánh.' },
        { type: 'fill', sentence: '今天是___节。', options: ['国庆', '古代', '将来'], answer: '国庆' },
        { type: 'fill', sentence: '___我们在国外。', options: ['从前', '初一', '金'], answer: '从前' },
        { type: 'fill', sentence: '这座庙属于唐___。', options: ['朝', '古', '近期'], answer: '朝' },
        { type: 'fill', sentence: '___我想读研。', options: ['将来', '从来', '年初'], answer: '将来' },
        { type: 'fill', sentence: '给长辈送___色礼物。', options: ['金', '古', '朝'], answer: '金' }
      ],
      normal: [
        { type: 'listen', audio: '将来我想读研', options: ['将来我想读研','将来我想工作','将来我想出国'], answer: '将来我想读研', py: 'Jiānglái wǒ xiǎng dú yán', explain: '听 将来 = tương lai.' },
        { type: 'dictation', audio: '街上真热闹', answer: '街上真热闹', hint: 'Phố xá náo nhiệt thật.', py: 'Jiē shàng zhēn rènao', explain: '热闹 = náo nhiệt.' },
        { type: 'fill', sentence: '我___没这么开心过。', options: ['从来', '将来', '目前'], answer: '从来' },
        { type: 'fill', sentence: '这是___留下的。', options: ['古代', '初一', '后年'], answer: '古代' },
        { type: 'fill', sentence: '___我们刚出国时很紧张。', options: ['当初', '近期', '金'], answer: '当初' },
        { type: 'fill', sentence: '___可能再出国。', options: ['后年', '从前', '古'], answer: '后年' },
        { type: 'fill', sentence: '___我在准备考试。', options: ['目前', '将来', '初一'], answer: '目前' },
        { type: 'order', words: ['目前', '我', '在', '准备考试'], answer: '目前我在准备考试' },
        { type: 'order', words: ['我', '从来', '没', '这么开心过'], answer: '我从来没这么开心过' }
      ],
      hard: [
        { type: 'fill', sentence: '这座___庙很有名。', options: ['古', '金', '朝'], answer: '古' },
        { type: 'fill', sentence: '___我在准备考试。', options: ['近期', '从前', '后年'], answer: '近期' },
        { type: 'fill', sentence: '___定的目标快实现了。', options: ['年初', '将来', '初一'], answer: '年初' },
        { type: 'fill', sentence: '___我们去拜年。', options: ['初一', '当初', '目前'], answer: '初一' },
        { type: 'translate', prompt: 'Mình chưa bao giờ vui thế này vào dịp Quốc khánh.', answer: '我从来没在国庆这么开心过。' },
        { type: 'translate', prompt: 'Tương lai mình muốn học cao học.', answer: '将来我想读研。' }
      ]
    }
  }

});

// ───────────────────────────────────────────────────────
// BATCH 9 — Bài 112-116 (Cuối năm & thời đại · Quê hương & phóng viên · Du lịch thủ đô · Phát biểu CLB · Dạy kèm & học thuật)
// ───────────────────────────────────────────────────────
Object.assign(COURSE_DATA, {

  // BÀI 112: 年代,年底,年纪,期,齐,千万,时,时代,世纪,双方,往往,现代,眼前,整天
  112: {
    id: 112, level: 3,
    title: 'Thời gian & lịch trình (2)',
    context: 'Cuối năm, Mai và Tiểu Mỹ nhìn lại học kỳ và bàn về thời đại hiện đại mà họ đang sống.',
    vocabPreview: ['年底', '现代', '时代', '世纪', '眼前'],
    objectives: [
      "Nắm nhóm từ khóa: 年底 · 现代 · 时代 · 世纪 · 眼前",
      "Kể/nghe hiểu tình huống Thời gian & lịch trình (2) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 年底 · 现代 · 时代",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "年底 — cuối năm",
        explain: "Dùng 年底 trong ngữ cảnh Thời gian & lịch trình (2) để diễn đạt: cuối năm.",
        examples: [
          { zh: "快到年底了，这个学期我学到很多。", py: "Kuài dào niándǐ le, zhège xuéqī wǒ xuédào hěn duō.", vi: "Sắp đến cuối năm rồi, học kỳ này mình học được nhiều." }
        ] },
      { point: "现代 — hiện đại",
        explain: "Dùng 现代 trong ngữ cảnh Thời gian & lịch trình (2) để diễn đạt: hiện đại.",
        examples: [
          { zh: "是啊，现在是现代社会，二十一世纪科技发展快。", py: "Shì a, xiànzài shì xiàndài shèhuì, èrshíyī shìjì kējì fāzhǎn kuài.", vi: "Đúng vậy, giờ là xã hội hiện đại, thế kỷ 21 khoa học kỹ thuật phát triển nhanh." }
        ] },
      { point: "时代 — thời đại",
        explain: "Dùng 时代 trong ngữ cảnh Thời gian & lịch trình (2) để diễn đạt: thời đại.",
        examples: [
          { zh: "这个时代变化快，双方都要努力。资料都齐了吗？", py: "Zhège shídài biànhuà kuài, shuāngfāng dōu yào nǔlì. Zīliào dōu qí le ma?", vi: "Thời đại này thay đổi nhanh, đôi bên đều phải cố gắng. Tài liệu đủ cả chưa?" }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Nhà Mai · Cuối năm', bg: 'home', cast: ['mai', 'xiaomei'],
        text: 'Cuối năm, hai bạn ngồi tổng kết học kỳ.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '快到年底了，这个学期我学到很多。',
        pinyin: 'Kuài dào niándǐ le, zhège xuéqī wǒ xuédào hěn duō.',
        meaning: 'Sắp đến cuối năm rồi, học kỳ này mình học được nhiều.', expression: 'happy', vocab: ['年底', '期'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '是啊，现在是现代社会，二十一世纪科技发展快。',
        pinyin: 'Shì a, xiànzài shì xiàndài shèhuì, èrshíyī shìjì kējì fāzhǎn kuài.',
        meaning: 'Đúng vậy, giờ là xã hội hiện đại, thế kỷ 21 khoa học kỹ thuật phát triển nhanh.', expression: 'focused', vocab: ['现代', '世纪'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '比起上个年代，我们这一代很幸运。',
        pinyin: 'Bǐqǐ shàng gè niándài, wǒmen zhè yí dài hěn xìngyùn.',
        meaning: 'So với thập kỷ trước, thế hệ tụi mình rất may mắn.', expression: 'happy', vocab: ['年代'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你年纪轻轻就这么努力，往往能成功。',
        pinyin: 'Nǐ niánjì qīngqīng jiù zhème nǔlì, wǎngwǎng néng chénggōng.',
        meaning: 'Cậu tuổi còn trẻ mà chăm thế, thường thường sẽ thành công.', expression: 'happy', vocab: ['年纪', '往往'] },
      { type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'home', scene: '📍 Nhà Mai', expression: 'curious',
        q: 'Trời lạnh, Tiểu Mỹ dặn: "Cậu ___ phải mặc ấm vào nhé". Chọn từ đúng?',
        options: [
          { text: '你千万要穿暖和。', pinyin: 'Nǐ qiānwàn yào chuān nuǎnhuo.', meaning: 'Cậu nhất định phải mặc ấm.', correct: true, feedback: 'Đúng! 千万 = nhất định (dùng dặn dò khẩn thiết).' },
          { text: '你往往要穿暖和。', pinyin: 'Nǐ wǎngwǎng yào chuān nuǎnhuo.', meaning: '(sai)', correct: false, feedback: '往往 = thường thường, không dùng để dặn dò.' },
          { text: '你整天要穿暖和。', pinyin: 'Nǐ zhěngtiān yào chuān nuǎnhuo.', meaning: '(lệch nghĩa)', correct: false, feedback: '整天 = cả ngày, không hợp ý dặn dò.' }
        ], vocab: ['千万', '往往', '整天'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '谢谢提醒，我整天在家学习，少出门。',
        pinyin: 'Xièxie tíxǐng, wǒ zhěngtiān zài jiā xuéxí, shǎo chūmén.',
        meaning: 'Cảm ơn nhắc nhở, mình cả ngày ở nhà học, ít ra ngoài.', expression: 'happy', vocab: ['整天'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这个时代变化快，双方都要努力。资料都齐了吗？',
        pinyin: 'Zhège shídài biànhuà kuài, shuāngfāng dōu yào nǔlì. Zīliào dōu qí le ma?',
        meaning: 'Thời đại này thay đổi nhanh, đôi bên đều phải cố gắng. Tài liệu đủ cả chưa?', expression: 'focused', vocab: ['时代', '双方', '齐'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '齐了。眼前的目标是考好试，到时候一起庆祝。',
        pinyin: 'Qí le. Yǎnqián de mùbiāo shì kǎo hǎo shì, dào shíhou yìqǐ qìngzhù.',
        meaning: 'Đủ rồi. Mục tiêu trước mắt là thi tốt, đến lúc đó cùng ăn mừng.', expression: 'happy', vocab: ['眼前', '时'] },
      { type: 'checkpoint', questions: [
        { q: '"年底" có nghĩa là gì?', options: ['cuối năm', 'thời đại', 'thế kỷ', 'cả ngày'], answer: 0 },
        { q: 'Từ nào nghĩa là "nhất định" (dùng dặn dò)?', options: ['往往', '千万', '眼前'], answer: 1 },
        { q: '"现代" có nghĩa là gì?', options: ['hiện đại', 'thập kỷ', 'đôi bên'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '年代', p: 'nián dài', v: 'thập kỷ, năm tháng', e: 'a decade of a century (e.g. the Sixties)' },
      { h: '年底', p: 'nián dǐ', v: 'cuối năm', e: 'the end of the year' },
      { h: '年纪', p: 'nián jì', v: 'tuổi, niên kỷ', e: 'age' },
      { h: '期', p: 'qī', v: 'kỳ, giai đoạn', e: 'period, phase, issue (of publication)' },
      { h: '齐', p: 'qí', v: 'tề, đầy đủ, đồng đều', e: '(name of states and dynasties at several different periods)' },
      { h: '千万', p: 'qiān wàn', v: 'nhất định, triệu vạn', e: 'ten million' },
      { h: '时', p: 'shí', v: 'lúc, thời', e: 'time, hour, era' },
      { h: '时代', p: 'shí dài', v: 'thời đại', e: 'Time, US weekly news magazine' },
      { h: '世纪', p: 'shì jì', v: 'thế kỷ', e: 'century' },
      { h: '双方', p: 'shuāng fāng', v: 'đôi bên, hai bên', e: 'bilateral' },
      { h: '往往', p: 'wǎng wǎng', v: 'thường thường', e: 'usually' },
      { h: '现代', p: 'xiàn dài', v: 'hiện đại', e: 'Hyundai, South Korean company' },
      { h: '眼前', p: 'yǎn qián', v: 'trước mắt, trước mặt', e: 'before one\\\'s eyes' },
      { h: '整天', p: 'zhěng tiān', v: 'cả ngày', e: 'all day long' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '快到年底了', options: ['快到年底了','快到春天了','快放假了'], answer: '快到年底了', py: 'Kuài dào niándǐ le', explain: '听 年底 = cuối năm.' },
        { type: 'fill', sentence: '快到___了。', options: ['年底', '世纪', '双方'], answer: '年底' },
        { type: 'fill', sentence: '现在是___社会。', options: ['现代', '眼前', '齐'], answer: '现代' },
        { type: 'fill', sentence: '二十一___科技发达。', options: ['世纪', '年代', '时'], answer: '世纪' },
        { type: 'fill', sentence: '我___在家学习。', options: ['整天', '千万', '往往'], answer: '整天' },
        { type: 'fill', sentence: '你___轻轻就很努力。', options: ['年纪', '期', '时代'], answer: '年纪' }
      ],
      normal: [
        { type: 'listen', audio: '我们这一代很幸运', options: ['我们这一代很幸运','我们这一代很辛苦','上一代人很努力'], answer: '我们这一代很幸运', py: 'Wǒmen zhè yí dài hěn xìngyùn', explain: '听 代 = thế hệ.' },
        { type: 'dictation', audio: '资料都齐了吗', answer: '资料都齐了吗', hint: 'Tài liệu đủ cả chưa?', py: 'Zīliào dōu qí le ma', explain: '齐 = đầy đủ.' },
        { type: 'fill', sentence: '比起上个___，我们很幸运。', options: ['年代', '年底', '眼前'], answer: '年代' },
        { type: 'fill', sentence: '努力的人___能成功。', options: ['往往', '千万', '整天'], answer: '往往' },
        { type: 'fill', sentence: '这个___变化快。', options: ['时代', '世纪', '齐'], answer: '时代' },
        { type: 'fill', sentence: '___都要努力。', options: ['双方', '年纪', '时'], answer: '双方' },
        { type: 'fill', sentence: '___的目标是考好试。', options: ['眼前', '年代', '现代'], answer: '眼前' },
        { type: 'order', words: ['你', '千万', '要', '穿暖和'], answer: '你千万要穿暖和' },
        { type: 'order', words: ['资料', '都', '齐', '了吗'], answer: '资料都齐了吗' }
      ],
      hard: [
        { type: 'fill', sentence: '这个学___我学到很多。', options: ['期', '时', '齐'], answer: '期' },
        { type: 'fill', sentence: '资料都___了。', options: ['齐', '时', '期'], answer: '齐' },
        { type: 'fill', sentence: '到___候一起庆祝。', options: ['时', '期', '齐'], answer: '时' },
        { type: 'fill', sentence: '你___要穿暖和。', options: ['千万', '往往', '整天'], answer: '千万' },
        { type: 'translate', prompt: 'Thế kỷ 21 khoa học kỹ thuật phát triển nhanh.', answer: '二十一世纪科技发展快。' },
        { type: 'translate', prompt: 'Mục tiêu trước mắt là thi tốt.', answer: '眼前的目标是考好试。' }
      ]
    }
  },

  // BÀI 113: 北部,比例,城,城市,村,电视台,东部,工厂,记者,家乡,决心,联合国,刀,机器,能不能,沙发,设备,所长
  113: {
    id: 113, level: 3,
    title: 'Địa điểm & đồ vật (1)',
    context: 'Một phóng viên đài truyền hình phỏng vấn Mai về quê hương, các nhà máy hiện đại và quyết tâm cống hiến của em.',
    vocabPreview: ['电视台', '记者', '家乡', '工厂', '决心'],
    objectives: [
      "Nắm nhóm từ khóa: 电视台 · 记者 · 家乡 · 工厂 · 决心",
      "Kể/nghe hiểu tình huống Địa điểm & đồ vật (1) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 电视台 · 记者 · 家乡",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "电视台 — đài truyền hình",
        explain: "Dùng 电视台 trong ngữ cảnh Địa điểm & đồ vật (1) để diễn đạt: đài truyền hình.",
        examples: [
          { zh: "我是电视台的记者，想问问你的家乡。", py: "Wǒ shì diànshìtái de jìzhě, xiǎng wènwen nǐ de jiāxiāng.", vi: "Tôi là phóng viên đài truyền hình, muốn hỏi về quê hương của bạn." }
        ] },
      { point: "记者 — phóng viên, nhà báo",
        explain: "Dùng 记者 trong ngữ cảnh Địa điểm & đồ vật (1) để diễn đạt: phóng viên, nhà báo.",
        examples: [
          { zh: "我是电视台的记者，想问问你的家乡。", py: "Wǒ shì diànshìtái de jìzhě, xiǎng wènwen nǐ de jiāxiāng.", vi: "Tôi là phóng viên đài truyền hình, muốn hỏi về quê hương của bạn." }
        ] },
      { point: "家乡 — quê hương",
        explain: "Dùng 家乡 trong ngữ cảnh Địa điểm & đồ vật (1) để diễn đạt: quê hương.",
        examples: [
          { zh: "我家乡在北部的一个小城，旁边有个村子。", py: "Wǒ jiāxiāng zài běibù de yí gè xiǎo chéng, pángbiān yǒu gè cūnzi.", vi: "Quê em ở một thành nhỏ miền Bắc, bên cạnh có một ngôi làng." },
          { zh: "我下决心为家乡做贡献。", py: "Wǒ xià juéxīn wèi jiāxiāng zuò gòngxiàn.", vi: "Em hạ quyết tâm cống hiến cho quê hương." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Văn phòng · Buổi chiều', bg: 'office', cast: ['mai', 'fuwuyuan'],
        text: 'Một phóng viên đài truyền hình đến phỏng vấn Mai.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '我是电视台的记者，想问问你的家乡。',
        pinyin: 'Wǒ shì diànshìtái de jìzhě, xiǎng wènwen nǐ de jiāxiāng.',
        meaning: 'Tôi là phóng viên đài truyền hình, muốn hỏi về quê hương của bạn.', expression: 'happy', vocab: ['电视台', '记者', '家乡'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '我家乡在北部的一个小城，旁边有个村子。',
        pinyin: 'Wǒ jiāxiāng zài běibù de yí gè xiǎo chéng, pángbiān yǒu gè cūnzi.',
        meaning: 'Quê em ở một thành nhỏ miền Bắc, bên cạnh có một ngôi làng.', expression: 'happy', vocab: ['北部', '城', '村'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '城市发展快吗？',
        pinyin: 'Chéngshì fāzhǎn kuài ma?',
        meaning: 'Thành phố phát triển nhanh không?', expression: 'curious', vocab: ['城市'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '是的，东部建了工厂，机器和设备都很先进。',
        pinyin: 'Shì de, dōngbù jiàn le gōngchǎng, jīqì hé shèbèi dōu hěn xiānjìn.',
        meaning: 'Vâng, miền Đông xây nhà máy, máy móc và thiết bị đều rất tiên tiến.', expression: 'focused', vocab: ['东部', '工厂', '机器', '设备'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'fuwuyuan'], bg: 'office', scene: '📍 Văn phòng', expression: 'focused',
        q: 'Mai bày tỏ: "Em đã hạ ___ (quyết tâm) cống hiến cho quê hương". Chọn từ đúng?',
        options: [
          { text: '我下决心为家乡做贡献。', pinyin: 'Wǒ xià juéxīn wèi jiāxiāng zuò gòngxiàn.', meaning: 'Em hạ quyết tâm cống hiến cho quê hương.', correct: true, feedback: 'Đúng! 决心 = quyết tâm.' },
          { text: '我下比例为家乡做贡献。', pinyin: 'Wǒ xià bǐlì wèi jiāxiāng zuò gòngxiàn.', meaning: '(sai)', correct: false, feedback: '比例 = tỷ lệ, sai nghĩa.' },
          { text: '我下所长为家乡做贡献。', pinyin: 'Wǒ xià suǒcháng wèi jiāxiāng zuò gòngxiàn.', meaning: '(sai)', correct: false, feedback: '所长 = điểm mạnh/sở trường, không hợp.' }
        ], vocab: ['决心', '比例', '所长'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '我的所长是写作。城里游客比例不高，但很有文化。',
        pinyin: 'Wǒ de suǒcháng shì xiězuò. Chéng lǐ yóukè bǐlì bù gāo, dàn hěn yǒu wénhuà.',
        meaning: 'Sở trường của em là viết lách. Tỷ lệ du khách trong thành không cao, nhưng rất có văn hóa.', expression: 'happy', vocab: ['所长', '比例'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '能不能介绍一下当地特色？这沙发上的刀是装饰品吗？',
        pinyin: 'Néng bù néng jièshào yíxià dāngdì tèsè? Zhè shāfā shàng de dāo shì zhuāngshìpǐn ma?',
        meaning: 'Có thể giới thiệu chút đặc trưng địa phương không? Con dao trên ghế sofa này là đồ trang trí à?', expression: 'curious', vocab: ['能不能', '沙发', '刀'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '对。听说联合国也关注过我们的传统手工艺。',
        pinyin: 'Duì. Tīngshuō Liánhéguó yě guānzhù guo wǒmen de chuántǒng shǒugōngyì.',
        meaning: 'Đúng. Nghe nói Liên Hợp Quốc cũng từng quan tâm đến nghề thủ công truyền thống của tụi em.', expression: 'happy', vocab: ['联合国'] },
      { type: 'checkpoint', questions: [
        { q: '"记者" có nghĩa là gì?', options: ['phóng viên, nhà báo', 'nhà máy', 'thành phố', 'thiết bị'], answer: 0 },
        { q: 'Từ nào nghĩa là "quyết tâm"?', options: ['比例', '决心', '所长'], answer: 1 },
        { q: '"工厂" có nghĩa là gì?', options: ['nhà máy, xưởng', 'quê hương', 'đài truyền hình'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '北部', p: 'běi bù', v: 'miền Bắc, phía Bắc', e: 'northern part' },
      { h: '比例', p: 'bǐ lì', v: 'tỷ lệ', e: 'proportion' },
      { h: '城', p: 'chéng', v: 'thành, tường thành', e: 'city walls' },
      { h: '城市', p: 'chéng shì', v: 'thành phố', e: 'city' },
      { h: '村', p: 'cūn', v: 'làng, thôn', e: 'village' },
      { h: '电视台', p: 'diàn shì tái', v: 'đài truyền hình', e: 'television station' },
      { h: '东部', p: 'dōng bù', v: 'miền Đông, phía Đông', e: 'the east' },
      { h: '工厂', p: 'gōng chǎng', v: 'nhà máy, xưởng', e: 'factory' },
      { h: '记者', p: 'jì zhě', v: 'phóng viên, nhà báo', e: 'reporter' },
      { h: '家乡', p: 'jiā xiāng', v: 'quê hương', e: 'hometown' },
      { h: '决心', p: 'jué xīn', v: 'quyết tâm', e: 'determination' },
      { h: '联合国', p: 'lián hé guó', v: 'Liên Hợp Quốc', e: 'United Nations' },
      { h: '刀', p: 'dāo', v: 'dao', e: 'knife, blade' },
      { h: '机器', p: 'jī qì', v: 'máy móc', e: 'machine' },
      { h: '能不能', p: 'néng bù néng', v: 'có thể không', e: 'Can you' },
      { h: '沙发', p: 'shā fā', v: 'ghế sofa', e: 'sofa (loanword)' },
      { h: '设备', p: 'shè bèi', v: 'thiết bị', e: 'equipment' },
      { h: '所长', p: 'suǒ cháng', v: 'điểm mạnh, sở trường', e: 'what one is good at' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '城市发展快吗', options: ['城市发展快吗','城市人多吗','农村远吗'], answer: '城市发展快吗', py: 'Chéngshì fāzhǎn kuài ma', explain: '听 城市 = thành phố.' },
        { type: 'fill', sentence: '我是___的记者。', options: ['电视台', '工厂', '沙发'], answer: '电视台' },
        { type: 'fill', sentence: '想问问你的___。', options: ['家乡', '机器', '比例'], answer: '家乡' },
        { type: 'fill', sentence: '旁边有个___子。', options: ['村', '城', '刀'], answer: '村' },
        { type: 'fill', sentence: '东部建了___。', options: ['工厂', '记者', '设备'], answer: '工厂' },
        { type: 'fill', sentence: '这___上有把刀。', options: ['沙发', '城市', '家乡'], answer: '沙发' }
      ],
      normal: [
        { type: 'listen', audio: '东部建了工厂', options: ['东部建了工厂','西部有很多山','北部天气很冷'], answer: '东部建了工厂', py: 'Dōngbù jiàn le gōngchǎng', explain: '听 东部 = miền Đông; 工厂 = nhà máy.' },
        { type: 'dictation', audio: '我是电视台的记者', answer: '我是电视台的记者', hint: 'Tôi là phóng viên đài truyền hình.', py: 'Wǒ shì diànshìtái de jìzhě', explain: '记者 = phóng viên.' },
        { type: 'fill', sentence: '我家乡在___的小城。', options: ['北部', '东部', '城市'], answer: '北部' },
        { type: 'fill', sentence: '___发展快吗？', options: ['城市', '机器', '比例'], answer: '城市' },
        { type: 'fill', sentence: '机器和___都很先进。', options: ['设备', '记者', '决心'], answer: '设备' },
        { type: 'fill', sentence: '游客___不高。', options: ['比例', '城', '刀'], answer: '比例' },
        { type: 'fill', sentence: '我的___是写作。', options: ['所长', '工厂', '家乡'], answer: '所长' },
        { type: 'order', words: ['我', '下决心', '为家乡', '做贡献'], answer: '我下决心为家乡做贡献' },
        { type: 'order', words: ['能不能', '介绍', '一下', '特色'], answer: '能不能介绍一下特色' }
      ],
      hard: [
        { type: 'fill', sentence: '我下___为家乡做贡献。', options: ['决心', '比例', '所长'], answer: '决心' },
        { type: 'fill', sentence: '___介绍一下当地特色？', options: ['能不能', '电视台', '机器'], answer: '能不能' },
        { type: 'fill', sentence: '___也关注过我们。', options: ['联合国', '工厂', '城'], answer: '联合国' },
        { type: 'fill', sentence: '工厂里的___很先进。', options: ['机器', '记者', '村'], answer: '机器' },
        { type: 'translate', prompt: 'Miền Đông xây nhà máy, máy móc và thiết bị rất tiên tiến.', answer: '东部建了工厂，机器和设备很先进。' },
        { type: 'translate', prompt: 'Quê em ở một thành nhỏ miền Bắc.', answer: '我家乡在北部的一个小城。' }
      ]
    }
  },

  // BÀI 114: 旅馆,民族,南部,农村,区,市场,首都,西部,长城,至少,中华民族,线,信封,衣架,印象,邮票,邮箱,钟
  114: {
    id: 114, level: 3,
    title: 'Địa điểm & đồ vật (2)',
    context: 'Mai và Tiểu Mỹ đi du lịch thủ đô, leo Vạn Lý Trường Thành và gửi bưu thiếp về nhà.',
    vocabPreview: ['首都', '长城', '旅馆', '中华民族', '印象'],
    objectives: [
      "Nắm nhóm từ khóa: 首都 · 长城 · 旅馆 · 中华民族 · 印象",
      "Kể/nghe hiểu tình huống Địa điểm & đồ vật (2) bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 首都 · 长城 · 旅馆",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "首都 — thủ đô",
        explain: "Dùng 首都 trong ngữ cảnh Địa điểm & đồ vật (2) để diễn đạt: thủ đô.",
        examples: [
          { zh: "这次我们去首都北京，要爬长城！", py: "Zhè cì wǒmen qù shǒudū Běijīng, yào pá Chángchéng!", vi: "Lần này tụi mình đi thủ đô Bắc Kinh, sẽ leo Vạn Lý Trường Thành!" }
        ] },
      { point: "长城 — Vạn Lý Trường Thành",
        explain: "Dùng 长城 trong ngữ cảnh Địa điểm & đồ vật (2) để diễn đạt: Vạn Lý Trường Thành.",
        examples: [
          { zh: "太好了！长城一定会给我留下深刻印象。", py: "Tài hǎo le! Chángchéng yídìng huì gěi wǒ liúxià shēnkè yìnxiàng.", vi: "Tuyệt quá! Trường Thành chắc chắn để lại cho mình ấn tượng sâu sắc." },
          { zh: "爬长城至少要一天。", py: "Pá Chángchéng zhìshǎo yào yì tiān.", vi: "Leo Trường Thành ít nhất cần một ngày." }
        ] },
      { point: "旅馆 — khách sạn nhỏ",
        explain: "Dùng 旅馆 trong ngữ cảnh Địa điểm & đồ vật (2) để diễn đạt: khách sạn nhỏ.",
        examples: [
          { zh: "我们住在一家小旅馆，离市场很近。", py: "Wǒmen zhù zài yì jiā xiǎo lǚguǎn, lí shìchǎng hěn jìn.", vi: "Tụi mình ở một khách sạn nhỏ, gần chợ." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Nhà ga · Buổi sáng', bg: 'station', cast: ['mai', 'xiaomei'],
        text: 'Hai bạn lên đường đi du lịch thủ đô.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这次我们去首都北京，要爬长城！',
        pinyin: 'Zhè cì wǒmen qù shǒudū Běijīng, yào pá Chángchéng!',
        meaning: 'Lần này tụi mình đi thủ đô Bắc Kinh, sẽ leo Vạn Lý Trường Thành!', expression: 'happy', vocab: ['首都', '长城'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '太好了！长城一定会给我留下深刻印象。',
        pinyin: 'Tài hǎo le! Chángchéng yídìng huì gěi wǒ liúxià shēnkè yìnxiàng.',
        meaning: 'Tuyệt quá! Trường Thành chắc chắn để lại cho mình ấn tượng sâu sắc.', expression: 'happy', vocab: ['印象'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我们住在一家小旅馆，离市场很近。',
        pinyin: 'Wǒmen zhù zài yì jiā xiǎo lǚguǎn, lí shìchǎng hěn jìn.',
        meaning: 'Tụi mình ở một khách sạn nhỏ, gần chợ.', expression: 'happy', vocab: ['旅馆', '市场'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '中国有很多民族，中华民族很团结。',
        pinyin: 'Zhōngguó yǒu hěn duō mínzú, Zhōnghuá mínzú hěn tuánjié.',
        meaning: 'Trung Quốc có nhiều dân tộc, dân tộc Trung Hoa rất đoàn kết.', expression: 'focused', vocab: ['民族', '中华民族'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'station', scene: '📍 Nhà ga', expression: 'curious',
        q: 'Mai ước lượng: "Leo Trường Thành ___ cần một ngày". Chọn từ đúng?',
        options: [
          { text: '爬长城至少要一天。', pinyin: 'Pá Chángchéng zhìshǎo yào yì tiān.', meaning: 'Leo Trường Thành ít nhất cần một ngày.', correct: true, feedback: 'Đúng! 至少 = ít nhất.' },
          { text: '爬长城民族要一天。', pinyin: 'Pá Chángchéng mínzú yào yì tiān.', meaning: '(sai)', correct: false, feedback: '民族 = dân tộc, sai hoàn toàn.' },
          { text: '爬长城印象要一天。', pinyin: 'Pá Chángchéng yìnxiàng yào yì tiān.', meaning: '(sai)', correct: false, feedback: '印象 = ấn tượng, không hợp ngữ pháp.' }
        ], vocab: ['至少', '民族', '印象'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '从南部到西部，每个区都不同。农村和城市差别大。',
        pinyin: 'Cóng nánbù dào xībù, měi gè qū dōu bùtóng. Nóngcūn hé chéngshì chābié dà.',
        meaning: 'Từ miền Nam đến miền Tây, mỗi khu đều khác nhau. Nông thôn và thành phố khác biệt lớn.', expression: null, vocab: ['南部', '西部', '区', '农村'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '农村风景美，挂衣服要用衣架。我想寄明信片，买邮票、信封，放进邮箱。',
        pinyin: 'Nóngcūn fēngjǐng měi, guà yīfu yào yòng yījià. Wǒ xiǎng jì míngxìnpiàn, mǎi yóupiào, xìnfēng, fàng jìn yóuxiāng.',
        meaning: 'Nông thôn cảnh đẹp, treo quần áo phải dùng móc áo. Mình muốn gửi bưu thiếp, mua tem, phong bì, bỏ vào hộp thư.', expression: 'happy', vocab: ['衣架', '邮票', '信封', '邮箱'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '墙上的钟显示时间，沿着这条线走就到车站。',
        pinyin: 'Qiáng shàng de zhōng xiǎnshì shíjiān, yánzhe zhè tiáo xiàn zǒu jiù dào chēzhàn.',
        meaning: 'Đồng hồ trên tường hiển thị giờ, đi theo đường vạch này là tới bến xe.', expression: 'focused', vocab: ['钟', '线'] },
      { type: 'checkpoint', questions: [
        { q: '"首都" có nghĩa là gì?', options: ['thủ đô', 'khách sạn nhỏ', 'dân tộc', 'phong bì'], answer: 0 },
        { q: 'Từ nào nghĩa là "ít nhất"?', options: ['至少', '印象', '区'], answer: 0 },
        { q: '"邮票" có nghĩa là gì?', options: ['tem thư', 'hộp thư', 'móc áo'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '旅馆', p: 'lǚ guǎn', v: 'khách sạn nhỏ', e: 'hotel' },
      { h: '民族', p: 'mín zú', v: 'dân tộc', e: 'nationality' },
      { h: '南部', p: 'nán bù', v: 'miền Nam, phía Nam', e: 'southern part' },
      { h: '农村', p: 'nóng cūn', v: 'nông thôn', e: 'rural area' },
      { h: '区', p: 'qū', v: 'khu vực', e: 'area, district, region' },
      { h: '市场', p: 'shì chǎng', v: 'thị trường, chợ', e: 'marketplace' },
      { h: '首都', p: 'shǒu dū', v: 'thủ đô', e: 'capital (city)' },
      { h: '西部', p: 'xī bù', v: 'miền Tây, phía Tây', e: 'western part' },
      { h: '长城', p: 'cháng chéng', v: 'Vạn Lý Trường Thành', e: 'the Great Wall' },
      { h: '至少', p: 'zhì shǎo', v: 'ít nhất', e: 'at least' },
      { h: '中华民族', p: 'zhōng huá mín zú', v: 'dân tộc Trung Hoa', e: 'the Chinese nation' },
      { h: '线', p: 'xiàn', v: 'đường, sợi, dây', e: 'line, thread, wire' },
      { h: '信封', p: 'xìn fēng', v: 'phong bì', e: 'envelope' },
      { h: '衣架', p: 'yī jià', v: 'móc áo, giá treo áo', e: 'clothes hanger' },
      { h: '印象', p: 'yìn xiàng', v: 'ấn tượng', e: 'impression (sth that stays in one\\\'s mind)' },
      { h: '邮票', p: 'yóu piào', v: 'tem thư', e: 'stamp' },
      { h: '邮箱', p: 'yóu xiāng', v: 'hộp thư', e: 'mailbox' },
      { h: '钟', p: 'zhōng', v: 'đồng hồ, chuông', e: 'clock, bell' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '我们去首都北京', options: ['我们去首都北京','我们去南方旅游','我们回家乡看看'], answer: '我们去首都北京', py: 'Wǒmen qù shǒudū Běijīng', explain: '听 首都 = thủ đô.' },
        { type: 'fill', sentence: '我们去___北京。', options: ['首都', '农村', '区'], answer: '首都' },
        { type: 'fill', sentence: '要爬___。', options: ['长城', '旅馆', '钟'], answer: '长城' },
        { type: 'fill', sentence: '我们住在小___。', options: ['旅馆', '市场', '信封'], answer: '旅馆' },
        { type: 'fill', sentence: '离___很近。', options: ['市场', '邮票', '线'], answer: '市场' },
        { type: 'fill', sentence: '买___寄信。', options: ['邮票', '衣架', '区'], answer: '邮票' }
      ],
      normal: [
        { type: 'listen', audio: '我们住在一家小旅馆', options: ['我们住在一家小旅馆','我们住在朋友家里','我们住在学校宿舍'], answer: '我们住在一家小旅馆', py: 'Wǒmen zhù zài yì jiā xiǎo lǚguǎn', explain: '听 旅馆 = khách sạn nhỏ.' },
        { type: 'dictation', audio: '离市场很近', answer: '离市场很近', hint: 'Gần chợ.', py: 'Lí shìchǎng hěn jìn', explain: '市场 = chợ, thị trường.' },
        { type: 'fill', sentence: '中国有很多___。', options: ['民族', '旅馆', '钟'], answer: '民族' },
        { type: 'fill', sentence: '___很团结。', options: ['中华民族', '邮箱', '区'], answer: '中华民族' },
        { type: 'fill', sentence: '给我留下深刻___。', options: ['印象', '市场', '信封'], answer: '印象' },
        { type: 'fill', sentence: '从南部到___。', options: ['西部', '首都', '钟'], answer: '西部' },
        { type: 'fill', sentence: '___和城市差别大。', options: ['农村', '民族', '线'], answer: '农村' },
        { type: 'order', words: ['爬长城', '至少', '要', '一天'], answer: '爬长城至少要一天' },
        { type: 'order', words: ['挂衣服', '要', '用', '衣架'], answer: '挂衣服要用衣架' }
      ],
      hard: [
        { type: 'fill', sentence: '每个___都不同。', options: ['区', '城', '钟'], answer: '区' },
        { type: 'fill', sentence: '把信放进___。', options: ['邮箱', '邮票', '印象'], answer: '邮箱' },
        { type: 'fill', sentence: '墙上的___显示时间。', options: ['钟', '线', '区'], answer: '钟' },
        { type: 'fill', sentence: '沿着这条___走。', options: ['线', '钟', '衣架'], answer: '线' },
        { type: 'translate', prompt: 'Lần này tụi mình đi thủ đô Bắc Kinh, sẽ leo Trường Thành.', answer: '这次我们去首都北京，要爬长城。' },
        { type: 'translate', prompt: 'Trung Quốc có nhiều dân tộc, dân tộc Trung Hoa rất đoàn kết.', answer: '中国有很多民族，中华民族很团结。' }
      ]
    }
  },

  // BÀI 115: 各,各地,各位,各种,各自,另外,每,某,其次,任何,如何,一切,者,自身,群,双
  115: {
    id: 115, level: 3,
    title: 'Đại từ & số đếm',
    context: 'Mai có một bài phát biểu ngắn trước các thành viên câu lạc bộ đến từ khắp nơi, tổng kết một năm học tập.',
    vocabPreview: ['各位', '各地', '任何', '一切', '自身'],
    objectives: [
      "Nắm nhóm từ khóa: 各位 · 各地 · 任何 · 一切 · 自身",
      "Kể/nghe hiểu tình huống Đại từ & số đếm bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 各位 · 各地 · 任何",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "各位 — mọi người, quý vị",
        explain: "Dùng 各位 trong ngữ cảnh Đại từ & số đếm để diễn đạt: mọi người, quý vị.",
        examples: [
          { zh: "各位同学好！感谢各地的朋友来参加。", py: "Gèwèi tóngxué hǎo! Gǎnxiè gèdì de péngyou lái cānjiā.", vi: "Chào các bạn! Cảm ơn các bạn từ khắp nơi đã đến tham gia." }
        ] },
      { point: "各地 — khắp nơi",
        explain: "Dùng 各地 trong ngữ cảnh Đại từ & số đếm để diễn đạt: khắp nơi.",
        examples: [
          { zh: "各位同学好！感谢各地的朋友来参加。", py: "Gèwèi tóngxué hǎo! Gǎnxiè gèdì de péngyou lái cānjiā.", vi: "Chào các bạn! Cảm ơn các bạn từ khắp nơi đã đến tham gia." }
        ] },
      { point: "任何 — bất kỳ",
        explain: "Dùng 任何 trong ngữ cảnh Đại từ & số đếm để diễn đạt: bất kỳ.",
        examples: [
          { zh: "任何困难我们都不怕。", py: "Rènhé kùnnán wǒmen dōu bú pà.", vi: "Bất kỳ khó khăn nào ta cũng không sợ." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Hội trường CLB · Buổi chiều', bg: 'campus', cast: ['mai', 'xiaomei'],
        text: 'Mai đứng trước các thành viên câu lạc bộ để phát biểu.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '各位同学好！感谢各地的朋友来参加。',
        pinyin: 'Gèwèi tóngxué hǎo! Gǎnxiè gèdì de péngyou lái cānjiā.',
        meaning: 'Chào các bạn! Cảm ơn các bạn từ khắp nơi đã đến tham gia.', expression: 'happy', vocab: ['各位', '各地'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '今天来了一群人，每个人都很热情。',
        pinyin: 'Jīntiān lái le yì qún rén, měi gè rén dōu hěn rèqíng.',
        meaning: 'Hôm nay đến một nhóm người, ai cũng rất nhiệt tình.', expression: 'happy', vocab: ['群', '每'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我们讨论各种话题，各自分享经验。各有各的方法。',
        pinyin: 'Wǒmen tǎolùn gèzhǒng huàtí, gèzì fēnxiǎng jīngyàn. Gè yǒu gè de fāngfǎ.',
        meaning: 'Tụi mình thảo luận đủ loại chủ đề, mỗi người chia sẻ kinh nghiệm. Mỗi người có cách riêng.', expression: 'focused', vocab: ['各种', '各自', '各'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'campus', scene: '📍 Hội trường', expression: 'focused',
        q: 'Mai khích lệ: "___ (bất kỳ) khó khăn nào ta cũng vượt qua". Chọn từ đúng?',
        options: [
          { text: '任何困难我们都不怕。', pinyin: 'Rènhé kùnnán wǒmen dōu bú pà.', meaning: 'Bất kỳ khó khăn nào ta cũng không sợ.', correct: true, feedback: 'Đúng! 任何 = bất kỳ.' },
          { text: '某困难我们都不怕。', pinyin: 'Mǒu kùnnán wǒmen dōu bú pà.', meaning: '(sai)', correct: false, feedback: '某 = một (nào đó), không mang nghĩa "bất kỳ tất cả".' },
          { text: '其次困难我们都不怕。', pinyin: 'Qícì kùnnán wǒmen dōu bú pà.', meaning: '(sai)', correct: false, feedback: '其次 = thứ nữa, sai nghĩa.' }
        ], vocab: ['任何', '某', '其次'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '首先要努力，其次要坚持。学习者要相信自身的力量。',
        pinyin: 'Shǒuxiān yào nǔlì, qícì yào jiānchí. Xuéxí zhě yào xiāngxìn zìshēn de lìliàng.',
        meaning: 'Trước hết phải cố gắng, thứ đến phải kiên trì. Người học phải tin vào sức mạnh của bản thân.', expression: 'focused', vocab: ['其次', '者', '自身'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '另外，每个人如何安排时间也很重要。',
        pinyin: 'Lìngwài, měi gè rén rúhé ānpái shíjiān yě hěn zhòngyào.',
        meaning: 'Ngoài ra, mỗi người sắp xếp thời gian thế nào cũng rất quan trọng.', expression: 'focused', vocab: ['另外', '如何', '每'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这一切都靠大家。某个同学说得对：穿上一双运动鞋，一起去跑步吧！',
        pinyin: 'Zhè yíqiè dōu kào dàjiā. Mǒu gè tóngxué shuō de duì: chuān shàng yì shuāng yùndòng xié, yìqǐ qù pǎobù ba!',
        meaning: 'Tất cả đều nhờ mọi người. Có bạn nói đúng: mang đôi giày thể thao vào, cùng đi chạy bộ nào!', expression: 'happy', vocab: ['一切', '某', '双'] },
      { type: 'checkpoint', questions: [
        { q: '"各位" có nghĩa là gì?', options: ['mọi người, quý vị', 'khắp nơi', 'bản thân', 'tất cả'], answer: 0 },
        { q: 'Từ nào nghĩa là "bất kỳ"?', options: ['某', '任何', '其次'], answer: 1 },
        { q: '"自身" có nghĩa là gì?', options: ['bản thân', 'mỗi loại', 'ngoài ra'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '各', p: 'gè', v: 'mỗi, các', e: 'each' },
      { h: '各地', p: 'gè dì', v: 'khắp nơi', e: 'in all parts of (a country)' },
      { h: '各位', p: 'gè wèi', v: 'mọi người, quý vị', e: 'everybody' },
      { h: '各种', p: 'gè zhǒng', v: 'mỗi loại, đủ loại', e: 'every kind of' },
      { h: '各自', p: 'gè zì', v: 'mỗi người, riêng lẻ', e: 'each' },
      { h: '另外', p: 'lìng wài', v: 'ngoài ra, thêm vào', e: 'additional' },
      { h: '每', p: 'měi', v: 'mỗi', e: 'each' },
      { h: '某', p: 'mǒu', v: 'một (nào đó)', e: 'some' },
      { h: '其次', p: 'qí cì', v: 'thứ nữa, tiếp theo', e: 'next' },
      { h: '任何', p: 'rèn hé', v: 'bất kỳ', e: 'any' },
      { h: '如何', p: 'rú hé', v: 'như thế nào', e: 'how' },
      { h: '一切', p: 'yī qiè', v: 'tất cả', e: 'everything' },
      { h: '者', p: 'zhě', v: 'người (hậu tố)', e: 'one who (is) ...' },
      { h: '自身', p: 'zì shēn', v: 'bản thân', e: 'itself' },
      { h: '群', p: 'qún', v: 'đám đông, nhóm', e: 'group, crowd, flock' },
      { h: '双', p: 'shuāng', v: 'đôi, cặp', e: 'pair, double, both' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '今天来了一群人', options: ['今天来了一群人','今天没有人来','今天来了一位老师'], answer: '今天来了一群人', py: 'Jīntiān lái le yì qún rén', explain: '听 群 = nhóm, đám đông.' },
        { type: 'fill', sentence: '___同学好！', options: ['各位', '一切', '某'], answer: '各位' },
        { type: 'fill', sentence: '感谢___的朋友。', options: ['各地', '其次', '双'], answer: '各地' },
        { type: 'fill', sentence: '今天来了一___人。', options: ['群', '双', '者'], answer: '群' },
        { type: 'fill', sentence: '___个人都很热情。', options: ['每', '某', '如何'], answer: '每' },
        { type: 'fill', sentence: '穿上一___鞋。', options: ['双', '群', '各'], answer: '双' }
      ],
      normal: [
        { type: 'listen', audio: '每个人都很热情', options: ['每个人都很热情','每个人都很忙','大家都不认识'], answer: '每个人都很热情', py: 'Měi gè rén dōu hěn rèqíng', explain: '听 每 = mỗi.' },
        { type: 'dictation', audio: '各有各的方法', answer: '各有各的方法', hint: 'Mỗi người có cách riêng.', py: 'Gè yǒu gè de fāngfǎ', explain: '各 = mỗi, các.' },
        { type: 'fill', sentence: '讨论___话题。', options: ['各种', '各位', '一切'], answer: '各种' },
        { type: 'fill', sentence: '我们___分享经验。', options: ['各自', '某', '其次'], answer: '各自' },
        { type: 'fill', sentence: '首先努力，___坚持。', options: ['其次', '另外', '各地'], answer: '其次' },
        { type: 'fill', sentence: '学习___要努力。', options: ['者', '群', '双'], answer: '者' },
        { type: 'fill', sentence: '相信___的力量。', options: ['自身', '各种', '某'], answer: '自身' }
      ],
      hard: [
        { type: 'fill', sentence: '___困难都不怕。', options: ['任何', '某', '其次'], answer: '任何' },
        { type: 'fill', sentence: '___，时间安排也重要。', options: ['另外', '各自', '群'], answer: '另外' },
        { type: 'fill', sentence: '每个人___安排时间？', options: ['如何', '任何', '一切'], answer: '如何' },
        { type: 'fill', sentence: '这___都靠大家。', options: ['一切', '各地', '双'], answer: '一切' },
        { type: 'translate', prompt: 'Bất kỳ khó khăn nào ta cũng không sợ.', answer: '任何困难我们都不怕。' },
        { type: 'translate', prompt: 'Người học phải tin vào sức mạnh của bản thân.', answer: '学习者要相信自身的力量。' }
      ]
    }
  },

  // BÀI 116: 班级,程度,初中,功课,过程,话题,教材,课程,难度,试题,题目,学费,专题,科技,理论
  116: {
    id: 116, level: 3,
    title: 'Trường lớp & học thuật',
    context: 'Mai nhận dạy kèm cho học sinh trung học cơ sở, trò chuyện cùng Tiểu Mỹ về giáo trình, độ khó và phương pháp học.',
    vocabPreview: ['课程', '教材', '难度', '过程', '专题'],
    objectives: [
      "Nắm nhóm từ khóa: 课程 · 教材 · 难度 · 过程 · 专题",
      "Kể/nghe hiểu tình huống Trường lớp & học thuật bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 课程 · 教材 · 难度",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "课程 — chương trình học",
        explain: "Dùng 课程 trong ngữ cảnh Trường lớp & học thuật để diễn đạt: chương trình học.",
        examples: [
          { zh: "这套课程难度适中，学费也不贵。", py: "Zhè tào kèchéng nándù shìzhōng, xuéfèi yě bú guì.", vi: "Bộ chương trình này độ khó vừa phải, học phí cũng không đắt." }
        ] },
      { point: "教材 — tài liệu giảng dạy",
        explain: "Dùng 教材 trong ngữ cảnh Trường lớp & học thuật để diễn đạt: tài liệu giảng dạy.",
        examples: [
          { zh: "你们班级用什么教材？", py: "Nǐmen bānjí yòng shénme jiàocái?", vi: "Lớp các cậu dùng giáo trình gì?" }
        ] },
      { point: "难度 — độ khó",
        explain: "Dùng 难度 trong ngữ cảnh Trường lớp & học thuật để diễn đạt: độ khó.",
        examples: [
          { zh: "这套课程难度适中，学费也不贵。", py: "Zhè tào kèchéng nándù shìzhōng, xuéfèi yě bú guì.", vi: "Bộ chương trình này độ khó vừa phải, học phí cũng không đắt." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Thư viện · Buổi chiều', bg: 'library', cast: ['mai', 'xiaomei'],
        text: 'Mai nhận dạy kèm và chuẩn bị bài cùng Tiểu Mỹ.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我在帮初中生补习，这是我的新功课。',
        pinyin: 'Wǒ zài bāng chūzhōng shēng bǔxí, zhè shì wǒ de xīn gōngkè.',
        meaning: 'Mình đang phụ đạo cho học sinh cấp hai, đây là bài vở mới của mình.', expression: 'happy', vocab: ['初中', '功课'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你们班级用什么教材？',
        pinyin: 'Nǐmen bānjí yòng shénme jiàocái?',
        meaning: 'Lớp các cậu dùng giáo trình gì?', expression: 'curious', vocab: ['班级', '教材'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这套课程难度适中，学费也不贵。',
        pinyin: 'Zhè tào kèchéng nándù shìzhōng, xuéfèi yě bú guì.',
        meaning: 'Bộ chương trình này độ khó vừa phải, học phí cũng không đắt.', expression: 'happy', vocab: ['课程', '难度', '学费'] },
      { type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'library', scene: '📍 Thư viện', expression: 'curious',
        q: 'Tiểu Mỹ hỏi: "Trình độ tiếng Hán của cậu đến ___ này rồi à?" Chọn từ đúng?',
        options: [
          { text: '你的汉语到这个程度了？', pinyin: 'Nǐ de Hànyǔ dào zhège chéngdù le?', meaning: 'Tiếng Hán của cậu đến trình độ này rồi à?', correct: true, feedback: 'Đúng! 程度 = mức độ, trình độ.' },
          { text: '你的汉语到这个题目了？', pinyin: 'Nǐ de Hànyǔ dào zhège tímù le?', meaning: '(sai)', correct: false, feedback: '题目 = đề bài, không phải "trình độ".' },
          { text: '你的汉语到这个话题了？', pinyin: 'Nǐ de Hànyǔ dào zhège huàtí le?', meaning: '(sai)', correct: false, feedback: '话题 = chủ đề, sai nghĩa.' }
        ], vocab: ['程度', '题目', '话题'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '学习是一个过程，要打好理论基础。',
        pinyin: 'Xuéxí shì yí gè guòchéng, yào dǎ hǎo lǐlùn jīchǔ.',
        meaning: 'Học tập là một quá trình, phải xây nền lý luận vững.', expression: 'focused', vocab: ['过程', '理论'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这次的试题不难，题目很清楚。',
        pinyin: 'Zhè cì de shìtí bù nán, tímù hěn qīngchu.',
        meaning: 'Đề thi lần này không khó, câu hỏi rất rõ ràng.', expression: 'happy', vocab: ['试题', '题目'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我做了一个科技专题，讨论的话题很新。',
        pinyin: 'Wǒ zuò le yí gè kējì zhuāntí, tǎolùn de huàtí hěn xīn.',
        meaning: 'Mình làm một chuyên đề khoa học công nghệ, chủ đề thảo luận rất mới.', expression: 'happy', vocab: ['科技', '专题', '话题'] },
      { type: 'checkpoint', questions: [
        { q: '"教材" có nghĩa là gì?', options: ['tài liệu giảng dạy, giáo trình', 'lớp học', 'học phí', 'độ khó'], answer: 0 },
        { q: 'Từ nào nghĩa là "quá trình"?', options: ['过程', '课程', '专题'], answer: 0 },
        { q: '"难度" có nghĩa là gì?', options: ['độ khó', 'chủ đề', 'lý luận'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '班级', p: 'bān jí', v: 'lớp học', e: 'class (group of students)' },
      { h: '程度', p: 'chéng dù', v: 'mức độ, trình độ', e: 'degree' },
      { h: '初中', p: 'chū zhōng', v: 'trung học cơ sở', e: 'junior high school (abbr. for 初级中学)' },
      { h: '功课', p: 'gōng kè', v: 'bài tập, bài vở', e: 'homework' },
      { h: '过程', p: 'guò chéng', v: 'quá trình', e: 'course of events' },
      { h: '话题', p: 'huà tí', v: 'chủ đề, đề tài', e: 'subject (of a talk or conversation)' },
      { h: '教材', p: 'jiào cái', v: 'tài liệu giảng dạy', e: 'teaching material' },
      { h: '课程', p: 'kè chéng', v: 'chương trình học', e: 'course' },
      { h: '难度', p: 'nán dù', v: 'độ khó', e: 'degree of difficulty' },
      { h: '试题', p: 'shì tí', v: 'đề thi, câu hỏi thi', e: 'exam question' },
      { h: '题目', p: 'tí mù', v: 'tiêu đề, đề bài', e: 'subject' },
      { h: '学费', p: 'xué fèi', v: 'học phí', e: 'tuition fee' },
      { h: '专题', p: 'zhuān tí', v: 'chuyên đề', e: 'specific topic (addressed by a book, lecture, TV program etc)' },
      { h: '科技', p: 'kē jì', v: 'khoa học và kỹ thuật', e: 'science and technology' },
      { h: '理论', p: 'lǐ lùn', v: 'lý luận, lý thuyết', e: 'theory' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '你们班级用什么教材', options: ['你们班级用什么教材','你们学校在哪里','你们老师是谁'], answer: '你们班级用什么教材', py: 'Nǐmen bānjí yòng shénme jiàocái', explain: '听 班级 = lớp học; 教材 = giáo trình.' },
        { type: 'fill', sentence: '我帮___生补习。', options: ['初中', '过程', '试题'], answer: '初中' },
        { type: 'fill', sentence: '这是我的新___。', options: ['功课', '难度', '理论'], answer: '功课' },
        { type: 'fill', sentence: '你们___用什么教材？', options: ['班级', '话题', '学费'], answer: '班级' },
        { type: 'fill', sentence: '用什么___？', options: ['教材', '过程', '程度'], answer: '教材' },
        { type: 'fill', sentence: '___也不贵。', options: ['学费', '题目', '科技'], answer: '学费' }
      ],
      normal: [
        { type: 'listen', audio: '学费也不贵', options: ['学费也不贵','学费有点贵','课程很难'], answer: '学费也不贵', py: 'Xuéfèi yě bú guì', explain: '听 学费 = học phí.' },
        { type: 'dictation', audio: '题目很清楚', answer: '题目很清楚', hint: 'Câu hỏi rất rõ ràng.', py: 'Tímù hěn qīngchu', explain: '题目 = đề bài.' },
        { type: 'fill', sentence: '这套___难度适中。', options: ['课程', '功课', '试题'], answer: '课程' },
        { type: 'fill', sentence: '课程___适中。', options: ['难度', '程度', '话题'], answer: '难度' },
        { type: 'fill', sentence: '学习是一个___。', options: ['过程', '专题', '班级'], answer: '过程' },
        { type: 'fill', sentence: '要打好___基础。', options: ['理论', '题目', '学费'], answer: '理论' },
        { type: 'fill', sentence: '这次的___不难。', options: ['试题', '教材', '科技'], answer: '试题' },
        { type: 'order', words: ['你的', '汉语', '到这个', '程度了'], answer: '你的汉语到这个程度了' },
        { type: 'order', words: ['学习', '是', '一个', '过程'], answer: '学习是一个过程' }
      ],
      hard: [
        { type: 'fill', sentence: '你的汉语到这个___了？', options: ['程度', '题目', '话题'], answer: '程度' },
        { type: 'fill', sentence: '___很清楚。', options: ['题目', '过程', '学费'], answer: '题目' },
        { type: 'fill', sentence: '我做了一个科技___。', options: ['专题', '班级', '难度'], answer: '专题' },
        { type: 'fill', sentence: '讨论的___很新。', options: ['话题', '教材', '理论'], answer: '话题' },
        { type: 'translate', prompt: 'Bộ chương trình này độ khó vừa phải, học phí cũng không đắt.', answer: '这套课程难度适中，学费也不贵。' },
        { type: 'translate', prompt: 'Học tập là một quá trình, phải xây nền lý luận vững.', answer: '学习是一个过程，要打好理论基础。' }
      ]
    }
  }

});

// ───────────────────────────────────────────────────────
// BATCH 10 — Bài 117-121 (Quán nước & giá cả · Thiên nhiên & nội tâm · ĐỌC THÊM: nghệ thuật-nghề · gia đình-cảm xúc · thể thao-xã hội)
// ───────────────────────────────────────────────────────
Object.assign(COURSE_DATA, {

  // BÀI 117: 本事,果汁,价格,价钱,咖啡,奶茶,啤酒,票价,石油,汤,糖,营养
  117: {
    id: 117, level: 3,
    title: 'Ẩm thực & món ăn',
    context: 'Mai và Tiểu Mỹ vào một quán nước gọi đồ uống, trò chuyện về giá cả và dinh dưỡng.',
    vocabPreview: ['咖啡', '奶茶', '价格', '营养', '本事'],
    objectives: [
      "Nắm nhóm từ khóa: 咖啡 · 奶茶 · 价格 · 营养 · 本事",
      "Kể/nghe hiểu tình huống Ẩm thực & món ăn bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 咖啡 · 奶茶 · 价格",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "咖啡 — cà phê",
        explain: "Dùng 咖啡 trong ngữ cảnh Ẩm thực & món ăn để diễn đạt: cà phê.",
        examples: [
          { zh: "我要一杯咖啡，我朋友要奶茶和果汁。", py: "Wǒ yào yì bēi kāfēi, wǒ péngyou yào nǎichá hé guǒzhī.", vi: "Em lấy một ly cà phê, bạn em lấy trà sữa và nước ép." }
        ] },
      { point: "奶茶 — trà sữa",
        explain: "Dùng 奶茶 trong ngữ cảnh Ẩm thực & món ăn để diễn đạt: trà sữa.",
        examples: [
          { zh: "我要一杯咖啡，我朋友要奶茶和果汁。", py: "Wǒ yào yì bēi kāfēi, wǒ péngyou yào nǎichá hé guǒzhī.", vi: "Em lấy một ly cà phê, bạn em lấy trà sữa và nước ép." }
        ] },
      { point: "价格 — giá cả",
        explain: "Dùng 价格 trong ngữ cảnh Ẩm thực & món ăn để diễn đạt: giá cả.",
        examples: [
          { zh: "不加糖，谢谢。这些饮料的价格怎么样？", py: "Bù jiā táng, xièxie. Zhèxiē yǐnliào de jiàgé zěnmeyàng?", vi: "Không thêm đường, cảm ơn. Giá mấy món đồ uống này thế nào ạ?" }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Quán cà phê · Buổi chiều', bg: 'restaurant', cast: ['mai', 'fuwuyuan'],
        text: 'Mai và Tiểu Mỹ ghé một quán nước nhỏ.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '我要一杯咖啡，我朋友要奶茶和果汁。',
        pinyin: 'Wǒ yào yì bēi kāfēi, wǒ péngyou yào nǎichá hé guǒzhī.',
        meaning: 'Em lấy một ly cà phê, bạn em lấy trà sữa và nước ép.', expression: 'happy', vocab: ['咖啡', '奶茶', '果汁'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '好的。要不要加糖？我们还有汤和啤酒。',
        pinyin: 'Hǎo de. Yào bú yào jiā táng? Wǒmen hái yǒu tāng hé píjiǔ.',
        meaning: 'Vâng. Có thêm đường không ạ? Bên em còn có canh và bia.', expression: 'happy', vocab: ['糖', '汤', '啤酒'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '不加糖，谢谢。这些饮料的价格怎么样？',
        pinyin: 'Bù jiā táng, xièxie. Zhèxiē yǐnliào de jiàgé zěnmeyàng?',
        meaning: 'Không thêm đường, cảm ơn. Giá mấy món đồ uống này thế nào ạ?', expression: 'curious', vocab: ['价格'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '价钱很合理，营养也丰富。',
        pinyin: 'Jiàqian hěn hélǐ, yíngyǎng yě fēngfù.',
        meaning: 'Giá cả rất hợp lý, dinh dưỡng cũng phong phú.', expression: 'happy', vocab: ['价钱', '营养'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'fuwuyuan'], bg: 'restaurant', scene: '📍 Quán cà phê', expression: 'curious',
        q: 'Mai hỏi về vé xem phim: "___ (giá vé) phim bao nhiêu ạ?" Chọn từ đúng?',
        options: [
          { text: '电影的票价是多少？', pinyin: 'Diànyǐng de piàojià shì duōshao?', meaning: 'Giá vé phim là bao nhiêu?', correct: true, feedback: 'Đúng! 票价 = giá vé.' },
          { text: '电影的石油是多少？', pinyin: 'Diànyǐng de shíyóu shì duōshao?', meaning: '(sai)', correct: false, feedback: '石油 = dầu mỏ, hoàn toàn sai.' },
          { text: '电影的本事是多少？', pinyin: 'Diànyǐng de běnshì shì duōshao?', meaning: '(sai)', correct: false, feedback: '本事 = tài năng, sai nghĩa.' }
        ], vocab: ['票价', '石油', '本事'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '你真有本事，会做这么多东西。听说石油涨价，什么都贵了。',
        pinyin: 'Nǐ zhēn yǒu běnshì, huì zuò zhème duō dōngxi. Tīngshuō shíyóu zhǎngjià, shénme dōu guì le.',
        meaning: 'Anh tài thật, làm được nhiều món thế. Nghe nói dầu mỏ tăng giá, cái gì cũng đắt lên.', expression: 'happy', vocab: ['本事', '石油'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '哈哈，做饭是我的小本事。这碗汤很有营养，多喝点。',
        pinyin: 'Hāhā, zuòfàn shì wǒ de xiǎo běnshì. Zhè wǎn tāng hěn yǒu yíngyǎng, duō hē diǎn.',
        meaning: 'Haha, nấu ăn là chút tài vặt của tôi. Bát canh này bổ dưỡng lắm, uống nhiều chút.', expression: 'happy', vocab: ['本事', '汤', '营养'] },
      { type: 'checkpoint', questions: [
        { q: '"价格" có nghĩa là gì?', options: ['giá cả', 'dinh dưỡng', 'tài năng', 'dầu mỏ'], answer: 0 },
        { q: 'Từ nào nghĩa là "trà sữa"?', options: ['咖啡', '奶茶', '果汁'], answer: 1 },
        { q: '"营养" có nghĩa là gì?', options: ['dinh dưỡng', 'giá vé', 'đường'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '本事', p: 'běn shì', v: 'tài năng, năng lực', e: 'source material' },
      { h: '果汁', p: 'guǒ zhī', v: 'nước ép trái cây', e: 'fruit juice' },
      { h: '价格', p: 'jià gé', v: 'giá cả', e: 'price' },
      { h: '价钱', p: 'jià qian', v: 'giá cả, giá tiền', e: 'price' },
      { h: '咖啡', p: 'kā fēi', v: 'cà phê', e: 'coffee (loanword)' },
      { h: '奶茶', p: 'nǎi chá', v: 'trà sữa', e: 'milk tea' },
      { h: '啤酒', p: 'pí jiǔ', v: 'bia', e: 'beer (loanword)' },
      { h: '票价', p: 'piào jià', v: 'giá vé', e: 'ticket price' },
      { h: '石油', p: 'shí yóu', v: 'dầu mỏ', e: 'oil' },
      { h: '汤', p: 'tāng', v: 'canh, súp', e: 'soup, broth' },
      { h: '糖', p: 'táng', v: 'đường, kẹo', e: 'sugar' },
      { h: '营养', p: 'yíng yǎng', v: 'dinh dưỡng', e: 'nutrition' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '我要一杯咖啡', options: ['我要一杯咖啡','我要一杯奶茶','我要一杯果汁'], answer: '我要一杯咖啡', py: 'Wǒ yào yì bēi kāfēi', explain: '听 咖啡 = cà phê.' },
        { type: 'fill', sentence: '我要一杯___。', options: ['咖啡', '汤', '石油'], answer: '咖啡' },
        { type: 'fill', sentence: '她要___和果汁。', options: ['奶茶', '糖', '票价'], answer: '奶茶' },
        { type: 'fill', sentence: '要不要加___？', options: ['糖', '本事', '价格'], answer: '糖' },
        { type: 'fill', sentence: '这碗___很有营养。', options: ['汤', '咖啡', '价钱'], answer: '汤' },
        { type: 'fill', sentence: '我们还有___。', options: ['啤酒', '价格', '营养'], answer: '啤酒' }
      ],
      normal: [
        { type: 'listen', audio: '价钱很合理营养也丰富', options: ['价钱很合理营养也丰富','价格有点贵','这家店很远'], answer: '价钱很合理营养也丰富', py: 'Jiàqian hěn hélǐ yíngyǎng yě fēngfù', explain: '听 价钱 = giá cả; 营养 = dinh dưỡng.' },
        { type: 'dictation', audio: '要不要加糖', answer: '要不要加糖', hint: 'Có thêm đường không?', py: 'Yào bú yào jiā táng', explain: '糖 = đường.' },
        { type: 'fill', sentence: '这些饮料的___怎么样？', options: ['价格', '本事', '汤'], answer: '价格' },
        { type: 'fill', sentence: '___很合理。', options: ['价钱', '糖', '咖啡'], answer: '价钱' },
        { type: 'fill', sentence: '___也丰富。', options: ['营养', '票价', '啤酒'], answer: '营养' },
        { type: 'fill', sentence: '她要奶茶和___。', options: ['果汁', '汤', '糖'], answer: '果汁' },
        { type: 'fill', sentence: '你真有___。', options: ['本事', '价格', '石油'], answer: '本事' },
        { type: 'order', words: ['电影', '的', '票价', '是多少'], answer: '电影的票价是多少' },
        { type: 'order', words: ['这碗', '汤', '很', '有营养'], answer: '这碗汤很有营养' }
      ],
      hard: [
        { type: 'fill', sentence: '电影的___是多少？', options: ['票价', '价钱', '本事'], answer: '票价' },
        { type: 'fill', sentence: '听说___涨价了。', options: ['石油', '果汁', '汤'], answer: '石油' },
        { type: 'fill', sentence: '做饭是我的小___。', options: ['本事', '票价', '糖'], answer: '本事' },
        { type: 'fill', sentence: '不加___，谢谢。', options: ['糖', '汤', '营养'], answer: '糖' },
        { type: 'translate', prompt: 'Em lấy một ly cà phê, bạn em lấy trà sữa.', answer: '我要一杯咖啡，我朋友要奶茶。' },
        { type: 'translate', prompt: 'Giá cả rất hợp lý, dinh dưỡng cũng phong phú.', answer: '价钱很合理，营养也丰富。' }
      ]
    }
  },

  // BÀI 118: 表面,部长,后面,另一方面,内心,皮包,前面,手指,头脑,心,一方面,厂,环保,环境,人生,沙子,石头,天空,性,性格,种子
  118: {
    id: 118, level: 3,
    title: 'Cơ thể & thiên nhiên',
    context: 'Mai và Tiểu Mỹ dạo công viên xanh, bàn về môi trường và cách nhìn nhận con người từ nội tâm.',
    vocabPreview: ['环境', '环保', '天空', '内心', '性格'],
    objectives: [
      "Nắm nhóm từ khóa: 环境 · 环保 · 天空 · 内心 · 性格",
      "Kể/nghe hiểu tình huống Cơ thể & thiên nhiên bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 环境 · 环保 · 天空",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "环境 — môi trường",
        explain: "Dùng 环境 trong ngữ cảnh Cơ thể & thiên nhiên để diễn đạt: môi trường.",
        examples: [
          { zh: "看这片天空多蓝！这里的环境真好。", py: "Kàn zhè piàn tiānkōng duō lán! Zhèlǐ de huánjìng zhēn hǎo.", vi: "Nhìn bầu trời xanh kìa! Môi trường ở đây thật tốt." }
        ] },
      { point: "环保 — bảo vệ môi trường",
        explain: "Dùng 环保 trong ngữ cảnh Cơ thể & thiên nhiên để diễn đạt: bảo vệ môi trường.",
        examples: [
          { zh: "是啊，一方面空气清新，另一方面大家也注重环保。", py: "Shì a, yì fāngmiàn kōngqì qīngxīn, lìng yì fāngmiàn dàjiā yě zhùzhòng huánbǎo.", vi: "Đúng vậy, một mặt không khí trong lành, mặt khác mọi người cũng chú trọng bảo vệ môi trường." }
        ] },
      { point: "天空 — bầu trời",
        explain: "Dùng 天空 trong ngữ cảnh Cơ thể & thiên nhiên để diễn đạt: bầu trời.",
        examples: [
          { zh: "看这片天空多蓝！这里的环境真好。", py: "Kàn zhè piàn tiānkōng duō lán! Zhèlǐ de huánjìng zhēn hǎo.", vi: "Nhìn bầu trời xanh kìa! Môi trường ở đây thật tốt." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Công viên xanh · Buổi sáng', bg: 'park', cast: ['mai', 'xiaomei'],
        text: 'Hai bạn dạo trong một công viên xanh mát.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '看这片天空多蓝！这里的环境真好。',
        pinyin: 'Kàn zhè piàn tiānkōng duō lán! Zhèlǐ de huánjìng zhēn hǎo.',
        meaning: 'Nhìn bầu trời xanh kìa! Môi trường ở đây thật tốt.', expression: 'happy', vocab: ['天空', '环境'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '是啊，一方面空气清新，另一方面大家也注重环保。',
        pinyin: 'Shì a, yì fāngmiàn kōngqì qīngxīn, lìng yì fāngmiàn dàjiā yě zhùzhòng huánbǎo.',
        meaning: 'Đúng vậy, một mặt không khí trong lành, mặt khác mọi người cũng chú trọng bảo vệ môi trường.', expression: 'focused', vocab: ['一方面', '另一方面', '环保'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '以前这里有个厂，现在搬走了，沙子和石头铺成小路。',
        pinyin: 'Yǐqián zhèlǐ yǒu gè chǎng, xiànzài bānzǒu le, shāzi hé shítou pū chéng xiǎo lù.',
        meaning: 'Trước đây ở đây có một nhà xưởng, giờ dời đi rồi, cát và đá lát thành lối nhỏ.', expression: null, vocab: ['厂', '沙子', '石头'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你看前面有人在种种子，后面是一片树林。',
        pinyin: 'Nǐ kàn qiánmiàn yǒu rén zài zhòng zhǒngzi, hòumian shì yí piàn shùlín.',
        meaning: 'Cậu xem phía trước có người đang gieo hạt, phía sau là một khu rừng.', expression: 'happy', vocab: ['前面', '种子', '后面'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'park', scene: '📍 Công viên', expression: 'focused',
        q: 'Mai nhận xét về cách nhìn người: "Đừng chỉ nhìn ___ (bề ngoài) của người ta". Chọn từ đúng?',
        options: [
          { text: '看人不能只看表面。', pinyin: 'Kàn rén bùnéng zhǐ kàn biǎomiàn.', meaning: 'Nhìn người không thể chỉ nhìn bề ngoài.', correct: true, feedback: 'Đúng! 表面 = bề mặt, bề ngoài.' },
          { text: '看人不能只看内心。', pinyin: 'Kàn rén bùnéng zhǐ kàn nèixīn.', meaning: '(ngược ý)', correct: false, feedback: '内心 = nội tâm — ngược với ý "đừng chỉ nhìn vẻ ngoài".' },
          { text: '看人不能只看头脑。', pinyin: 'Kàn rén bùnéng zhǐ kàn tóunǎo.', meaning: '(sai)', correct: false, feedback: '头脑 = đầu óc, không hợp ý câu.' }
        ], vocab: ['表面', '内心', '头脑'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '要了解内心。她头脑聪明，性格也好。',
        pinyin: 'Yào liǎojiě nèixīn. Tā tóunǎo cōngmíng, xìnggé yě hǎo.',
        meaning: 'Phải hiểu nội tâm. Cô ấy đầu óc thông minh, tính cách cũng tốt.', expression: 'happy', vocab: ['内心', '头脑', '性格'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '用手指数一数，我们的友谊很珍贵，记在心里。',
        pinyin: 'Yòng shǒuzhǐ shǔ yi shǔ, wǒmen de yǒuyì hěn zhēnguì, jì zài xīn lǐ.',
        meaning: 'Dùng ngón tay đếm thử, tình bạn của tụi mình rất quý, khắc ghi trong lòng.', expression: 'happy', vocab: ['手指', '心'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这种植物有耐旱的特性。人生就像种子，慢慢成长。那位部长也来参观，带了个皮包。',
        pinyin: 'Zhè zhǒng zhíwù yǒu nàihàn de tèxìng. Rénshēng jiù xiàng zhǒngzi, mànman chéngzhǎng. Nà wèi bùzhǎng yě lái cānguān, dài le gè píbāo.',
        meaning: 'Loại cây này có đặc tính chịu hạn. Đời người như hạt giống, từ từ lớn lên. Vị bộ trưởng kia cũng đến tham quan, mang theo một chiếc cặp da.', expression: 'focused', vocab: ['性', '人生', '部长', '皮包'] },
      { type: 'checkpoint', questions: [
        { q: '"环保" có nghĩa là gì?', options: ['bảo vệ môi trường', 'bầu trời', 'nội tâm', 'cát'], answer: 0 },
        { q: 'Từ nào nghĩa là "tính cách"?', options: ['表面', '性格', '头脑'], answer: 1 },
        { q: '"人生" có nghĩa là gì?', options: ['cuộc đời, nhân sinh', 'phía trước', 'ngón tay'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '表面', p: 'biǎo miàn', v: 'bề mặt, bề ngoài', e: 'surface' },
      { h: '部长', p: 'bù zhǎng', v: 'bộ trưởng', e: 'head of a (government etc) department' },
      { h: '后面', p: 'hòu mian', v: 'phía sau', e: 'the back' },
      { h: '另一方面', p: 'lìng yī fāng miàn', v: 'mặt khác', e: 'on the other hand' },
      { h: '内心', p: 'nèi xīn', v: 'nội tâm', e: 'heart' },
      { h: '皮包', p: 'pí bāo', v: 'túi da, cặp da', e: 'handbag' },
      { h: '前面', p: 'qián miàn', v: 'phía trước', e: 'ahead' },
      { h: '手指', p: 'shǒu zhǐ', v: 'ngón tay', e: 'finger' },
      { h: '头脑', p: 'tóu nǎo', v: 'đầu óc, trí tuệ', e: 'brains' },
      { h: '心', p: 'xīn', v: 'tim, lòng', e: 'heart' },
      { h: '一方面', p: 'yī fāng miàn', v: 'một mặt', e: 'on the one hand' },
      { h: '厂', p: 'chǎng', v: 'xưởng, nhà máy', e: '"cliff" radical in Chinese characters (Kangxi radical 27), occurring in 原, 历, 压 etc' },
      { h: '环保', p: 'huán bǎo', v: 'bảo vệ môi trường', e: 'environmental protection' },
      { h: '环境', p: 'huán jìng', v: 'môi trường', e: 'environment' },
      { h: '人生', p: 'rén shēng', v: 'cuộc đời, nhân sinh', e: 'life (one\\\'s time on earth)' },
      { h: '沙子', p: 'shā zi', v: 'cát', e: 'sand' },
      { h: '石头', p: 'shí tou', v: 'đá', e: 'stone' },
      { h: '天空', p: 'tiān kōng', v: 'bầu trời', e: 'sky' },
      { h: '性', p: 'xìng', v: 'tính chất, giới tính', e: 'nature' },
      { h: '性格', p: 'xìng gé', v: 'tính cách', e: 'nature' },
      { h: '种子', p: 'zhǒng zi', v: 'hạt giống', e: 'seed' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '这里的环境真好', options: ['这里的环境真好','这里的天气很热','这里的东西很贵'], answer: '这里的环境真好', py: 'Zhèlǐ de huánjìng zhēn hǎo', explain: '听 环境 = môi trường.' },
        { type: 'fill', sentence: '这片___多蓝！', options: ['天空', '沙子', '皮包'], answer: '天空' },
        { type: 'fill', sentence: '这里的___真好。', options: ['环境', '手指', '部长'], answer: '环境' },
        { type: 'fill', sentence: '大家注重___。', options: ['环保', '内心', '前面'], answer: '环保' },
        { type: 'fill', sentence: '___有人在种种子。', options: ['前面', '心', '性'], answer: '前面' },
        { type: 'fill', sentence: '她___聪明。', options: ['头脑', '石头', '皮包'], answer: '头脑' }
      ],
      normal: [
        { type: 'listen', audio: '她头脑聪明性格也好', options: ['她头脑聪明性格也好','她长得很漂亮','他个子很高'], answer: '她头脑聪明性格也好', py: 'Tā tóunǎo cōngmíng xìnggé yě hǎo', explain: '听 头脑 = đầu óc; 性格 = tính cách.' },
        { type: 'dictation', audio: '看这片天空多蓝', answer: '看这片天空多蓝', hint: 'Nhìn bầu trời xanh kìa.', py: 'Kàn zhè piàn tiānkōng duō lán', explain: '天空 = bầu trời.' },
        { type: 'fill', sentence: '___空气清新。', options: ['一方面', '后面', '人生'], answer: '一方面' },
        { type: 'fill', sentence: '___大家注重环保。', options: ['另一方面', '前面', '内心'], answer: '另一方面' },
        { type: 'fill', sentence: '___是一片树林。', options: ['后面', '天空', '性格'], answer: '后面' },
        { type: 'fill', sentence: '她的___也好。', options: ['性格', '部长', '沙子'], answer: '性格' },
        { type: 'fill', sentence: '我们种了___。', options: ['种子', '皮包', '手指'], answer: '种子' }
      ],
      hard: [
        { type: 'fill', sentence: '看人不能只看___。', options: ['表面', '内心', '头脑'], answer: '表面' },
        { type: 'fill', sentence: '要了解___。', options: ['内心', '表面', '环境'], answer: '内心' },
        { type: 'fill', sentence: '___就像种子，慢慢成长。', options: ['人生', '天空', '皮包'], answer: '人生' },
        { type: 'fill', sentence: '用___数一数。', options: ['手指', '部长', '石头'], answer: '手指' },
        { type: 'translate', prompt: 'Một mặt không khí trong lành, mặt khác mọi người chú trọng bảo vệ môi trường.', answer: '一方面空气清新，另一方面大家注重环保。' },
        { type: 'translate', prompt: 'Nhìn người không thể chỉ nhìn bề ngoài, phải hiểu nội tâm.', answer: '看人不能只看表面，要了解内心。' }
      ]
    }
  },

  // BÀI 119: 京剧,剧场,连续剧,美术,图画,演唱会,艺术,作品,作者,工业,工资,老板,人员,员工,职工,职业,龙,牛,实验室,文学,现象,羊,制度
  119: {
    id: 119, level: 3,
    title: 'Đọc thêm: Nghệ thuật, công việc & động vật',
    context: 'Mai và Tiểu Mỹ tới rạp xem kinh kịch, rồi trò chuyện về nghề nghiệp và văn hóa.',
    vocabPreview: ['京剧', '艺术', '作品', '职业', '员工'],
    objectives: [
      "Nắm nhóm từ khóa: 京剧 · 艺术 · 作品 · 职业 · 员工",
      "Kể/nghe hiểu tình huống Đọc thêm: Nghệ thuật, công việc & động vật bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 京剧 · 艺术 · 作品",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "京剧 — kinh kịch (Bắc Kinh)",
        explain: "Dùng 京剧 trong ngữ cảnh Đọc thêm: Nghệ thuật, công việc & động vật để diễn đạt: kinh kịch (Bắc Kinh).",
        examples: [
          { zh: "我们去剧场看京剧，这是中国的传统艺术。", py: "Wǒmen qù jùchǎng kàn jīngjù, zhè shì Zhōngguó de chuántǒng yìshù.", vi: "Tụi mình đến rạp xem kinh kịch, đây là nghệ thuật truyền thống của Trung Quốc." }
        ] },
      { point: "艺术 — nghệ thuật",
        explain: "Dùng 艺术 trong ngữ cảnh Đọc thêm: Nghệ thuật, công việc & động vật để diễn đạt: nghệ thuật.",
        examples: [
          { zh: "我们去剧场看京剧，这是中国的传统艺术。", py: "Wǒmen qù jùchǎng kàn jīngjù, zhè shì Zhōngguó de chuántǒng yìshù.", vi: "Tụi mình đến rạp xem kinh kịch, đây là nghệ thuật truyền thống của Trung Quốc." }
        ] },
      { point: "作品 — tác phẩm",
        explain: "Dùng 作品 trong ngữ cảnh Đọc thêm: Nghệ thuật, công việc & động vật để diễn đạt: tác phẩm.",
        examples: [
          { zh: "这部作品的作者很有名，写过很多文学作品。周末还有演唱会呢！", py: "Zhè bù zuòpǐn de zuòzhě hěn yǒumíng, xiěguo hěn duō wénxué zuòpǐn. Zhōumò hái yǒu yǎnchànghuì ne!", vi: "Tác giả của tác phẩm này rất nổi tiếng, viết nhiều tác phẩm văn học. Cuối tuần còn có buổi hòa nhạc nữa!" }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Rạp hát · Buổi tối', bg: 'campus', cast: ['mai', 'xiaomei'],
        text: 'Hai bạn đến rạp xem một buổi kinh kịch.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我们去剧场看京剧，这是中国的传统艺术。',
        pinyin: 'Wǒmen qù jùchǎng kàn jīngjù, zhè shì Zhōngguó de chuántǒng yìshù.',
        meaning: 'Tụi mình đến rạp xem kinh kịch, đây là nghệ thuật truyền thống của Trung Quốc.', expression: 'happy', vocab: ['剧场', '京剧', '艺术'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我更爱看连续剧，也喜欢美术和图画。',
        pinyin: 'Wǒ gèng ài kàn liánxùjù, yě xǐhuan měishù hé túhuà.',
        meaning: 'Mình thích xem phim dài tập hơn, cũng thích mỹ thuật và tranh vẽ.', expression: 'happy', vocab: ['连续剧', '美术', '图画'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这部作品的作者很有名，写过很多文学作品。周末还有演唱会呢！',
        pinyin: 'Zhè bù zuòpǐn de zuòzhě hěn yǒumíng, xiěguo hěn duō wénxué zuòpǐn. Zhōumò hái yǒu yǎnchànghuì ne!',
        meaning: 'Tác giả của tác phẩm này rất nổi tiếng, viết nhiều tác phẩm văn học. Cuối tuần còn có buổi hòa nhạc nữa!', expression: 'happy', vocab: ['作品', '作者', '文学', '演唱会'] },
      { type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'campus', scene: '📍 Rạp hát', expression: 'curious',
        q: 'Tiểu Mỹ nói: "Bác sĩ là một ___ (nghề nghiệp) cao quý". Chọn từ đúng?',
        options: [
          { text: '医生是一个高尚的职业。', pinyin: 'Yīshēng shì yí gè gāoshàng de zhíyè.', meaning: 'Bác sĩ là một nghề nghiệp cao quý.', correct: true, feedback: 'Đúng! 职业 = nghề nghiệp.' },
          { text: '医生是一个高尚的员工。', pinyin: 'Yīshēng shì yí gè gāoshàng de yuángōng.', meaning: '(lệch nghĩa)', correct: false, feedback: '员工 = nhân viên, không phải "nghề nghiệp".' },
          { text: '医生是一个高尚的制度。', pinyin: 'Yīshēng shì yí gè gāoshàng de zhìdù.', meaning: '(sai)', correct: false, feedback: '制度 = chế độ, sai nghĩa.' }
        ], vocab: ['职业', '员工', '制度'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我爸在工业公司上班，老板对员工好，工资也高。',
        pinyin: 'Wǒ bà zài gōngyè gōngsī shàngbān, lǎobǎn duì yuángōng hǎo, gōngzī yě gāo.',
        meaning: 'Bố mình làm ở công ty công nghiệp, sếp đối với nhân viên tốt, lương cũng cao.', expression: 'happy', vocab: ['工业', '老板', '员工', '工资'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '那里的职工和人员都遵守制度。',
        pinyin: 'Nàlǐ de zhígōng hé rényuán dōu zūnshǒu zhìdù.',
        meaning: 'Công nhân viên và nhân sự ở đó đều tuân thủ quy chế.', expression: 'focused', vocab: ['职工', '人员', '制度'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我表姐在实验室工作，研究一种自然现象。',
        pinyin: 'Wǒ biǎojiě zài shíyànshì gōngzuò, yánjiū yì zhǒng zìrán xiànxiàng.',
        meaning: 'Chị họ mình làm ở phòng thí nghiệm, nghiên cứu một hiện tượng tự nhiên.', expression: 'focused', vocab: ['实验室', '现象'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '中国文化里，龙很重要，还有牛和羊也常见。',
        pinyin: 'Zhōngguó wénhuà lǐ, lóng hěn zhòngyào, hái yǒu niú hé yáng yě chángjiàn.',
        meaning: 'Trong văn hóa Trung Quốc, rồng rất quan trọng, còn có bò và cừu cũng thường thấy.', expression: 'happy', vocab: ['龙', '牛', '羊'] },
      { type: 'checkpoint', questions: [
        { q: '"京剧" có nghĩa là gì?', options: ['kinh kịch Bắc Kinh', 'mỹ thuật', 'nghề nghiệp', 'hiện tượng'], answer: 0 },
        { q: 'Từ nào nghĩa là "ông chủ, sếp"?', options: ['员工', '老板', '职工'], answer: 1 },
        { q: '"作者" có nghĩa là gì?', options: ['tác giả', 'tác phẩm', 'rạp hát'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '京剧', p: 'jīng jù', v: 'kinh kịch (Bắc Kinh)', e: 'Beijing opera' },
      { h: '剧场', p: 'jù chǎng', v: 'rạp hát', e: 'theater' },
      { h: '连续剧', p: 'lián xù jù', v: 'phim truyền hình dài tập', e: 'serialized drama' },
      { h: '美术', p: 'měi shù', v: 'mỹ thuật', e: 'art' },
      { h: '图画', p: 'tú huà', v: 'tranh vẽ', e: 'drawing' },
      { h: '演唱会', p: 'yǎn chàng huì', v: 'buổi hòa nhạc, concert', e: 'vocal recital or concert' },
      { h: '艺术', p: 'yì shù', v: 'nghệ thuật', e: 'art' },
      { h: '作品', p: 'zuò pǐn', v: 'tác phẩm', e: 'work (of art)' },
      { h: '作者', p: 'zuò zhě', v: 'tác giả', e: 'author' },
      { h: '工业', p: 'gōng yè', v: 'công nghiệp', e: 'industry' },
      { h: '工资', p: 'gōng zī', v: 'lương, tiền công', e: 'wages' },
      { h: '老板', p: 'lǎo bǎn', v: 'ông chủ, sếp', e: 'boss, owner, employer' },
      { h: '人员', p: 'rén yuán', v: 'nhân viên, nhân sự', e: 'staff' },
      { h: '员工', p: 'yuán gōng', v: 'nhân viên', e: 'staff' },
      { h: '职工', p: 'zhí gōng', v: 'công nhân viên', e: 'workers' },
      { h: '职业', p: 'zhí yè', v: 'nghề nghiệp', e: 'occupation' },
      { h: '龙', p: 'lóng', v: 'rồng', e: 'dragon' },
      { h: '牛', p: 'niú', v: 'bò, trâu', e: 'cow, ox, bull' },
      { h: '实验室', p: 'shí yàn shì', v: 'phòng thí nghiệm', e: 'laboratory' },
      { h: '文学', p: 'wén xué', v: 'văn học', e: 'literature' },
      { h: '现象', p: 'xiàn xiàng', v: 'hiện tượng', e: 'phenomenon' },
      { h: '羊', p: 'yáng', v: 'cừu, dê', e: 'sheep, goat' },
      { h: '制度', p: 'zhì dù', v: 'chế độ, quy chế', e: 'system (e.g. political, adminstrative etc)' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '我们去剧场看京剧', options: ['我们去剧场看京剧','我们去电影院看电影','我们去公园散步'], answer: '我们去剧场看京剧', py: 'Wǒmen qù jùchǎng kàn jīngjù', explain: '听 剧场 = rạp hát; 京剧 = kinh kịch.' },
        { type: 'fill', sentence: '我们去剧场看___。', options: ['京剧', '工资', '现象'], answer: '京剧' },
        { type: 'fill', sentence: '这是中国的传统___。', options: ['艺术', '老板', '羊'], answer: '艺术' },
        { type: 'fill', sentence: '我爱看___。', options: ['连续剧', '制度', '牛'], answer: '连续剧' },
        { type: 'fill', sentence: '周末有___。', options: ['演唱会', '工业', '人员'], answer: '演唱会' },
        { type: 'fill', sentence: '我爸的___很高。', options: ['工资', '图画', '龙'], answer: '工资' }
      ],
      normal: [
        { type: 'listen', audio: '老板对员工好工资也高', options: ['老板对员工好工资也高','工作很累工资很低','这家公司刚成立'], answer: '老板对员工好工资也高', py: 'Lǎobǎn duì yuángōng hǎo gōngzī yě gāo', explain: '听 工资 = lương; 员工 = nhân viên.' },
        { type: 'dictation', audio: '这是中国的传统艺术', answer: '这是中国的传统艺术', hint: 'Đây là nghệ thuật truyền thống của Trung Quốc.', py: 'Zhè shì Zhōngguó de chuántǒng yìshù', explain: '艺术 = nghệ thuật.' },
        { type: 'fill', sentence: '这部___的作者很有名。', options: ['作品', '剧场', '羊'], answer: '作品' },
        { type: 'fill', sentence: '写过很多___作品。', options: ['文学', '工业', '现象'], answer: '文学' },
        { type: 'fill', sentence: '___对员工好。', options: ['老板', '作者', '牛'], answer: '老板' },
        { type: 'fill', sentence: '我爸在___公司上班。', options: ['工业', '美术', '龙'], answer: '工业' },
        { type: 'fill', sentence: '大家遵守___。', options: ['制度', '图画', '羊'], answer: '制度' },
        { type: 'order', words: ['医生', '是', '高尚的', '职业'], answer: '医生是高尚的职业' },
        { type: 'order', words: ['我们', '去', '剧场', '看京剧'], answer: '我们去剧场看京剧' }
      ],
      hard: [
        { type: 'fill', sentence: '医生是高尚的___。', options: ['职业', '员工', '制度'], answer: '职业' },
        { type: 'fill', sentence: '我表姐在___工作。', options: ['实验室', '剧场', '工业'], answer: '实验室' },
        { type: 'fill', sentence: '研究一种自然___。', options: ['现象', '作品', '羊'], answer: '现象' },
        { type: 'fill', sentence: '文化里___很重要。', options: ['龙', '牛', '老板'], answer: '龙' },
        { type: 'translate', prompt: 'Sếp đối với nhân viên tốt, lương cũng cao.', answer: '老板对员工好，工资也高。' },
        { type: 'translate', prompt: 'Đây là nghệ thuật truyền thống của Trung Quốc.', answer: '这是中国的传统艺术。' }
      ]
    }
  },

  // BÀI 120: 可乐,胜利,世界杯,外文,幸福,阳光,父母,父亲,家属,母亲,亲人,爱心,不论,福,恐怕,高速公路,工程师,交警,行李
  120: {
    id: 120, level: 3,
    title: 'Đọc thêm: Ngôn ngữ, gia đình & cảm xúc',
    context: 'Mai về nhà đoàn tụ gia đình, cùng bố mẹ xem World Cup và chia sẻ niềm hạnh phúc sau một năm du học.',
    vocabPreview: ['幸福', '父母', '亲人', '世界杯', '行李'],
    objectives: [
      "Nắm nhóm từ khóa: 幸福 · 父母 · 亲人 · 世界杯 · 行李",
      "Kể/nghe hiểu tình huống Đọc thêm: Ngôn ngữ, gia đình & cảm xúc bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 幸福 · 父母 · 亲人",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "幸福 — hạnh phúc",
        explain: "Dùng 幸福 trong ngữ cảnh Đọc thêm: Ngôn ngữ, gia đình & cảm xúc để diễn đạt: hạnh phúc.",
        examples: [
          { zh: "全家团聚真幸福！父母为我准备了好多菜。", py: "Quánjiā tuánjù zhēn xìngfú! Fùmǔ wèi wǒ zhǔnbèi le hǎo duō cài.", vi: "Cả nhà sum họp hạnh phúc thật! Bố mẹ chuẩn bị cho con bao nhiêu món." }
        ] },
      { point: "父母 — cha mẹ",
        explain: "Dùng 父母 trong ngữ cảnh Đọc thêm: Ngôn ngữ, gia đình & cảm xúc để diễn đạt: cha mẹ.",
        examples: [
          { zh: "全家团聚真幸福！父母为我准备了好多菜。", py: "Quánjiā tuánjù zhēn xìngfú! Fùmǔ wèi wǒ zhǔnbèi le hǎo duō cài.", vi: "Cả nhà sum họp hạnh phúc thật! Bố mẹ chuẩn bị cho con bao nhiêu món." }
        ] },
      { point: "亲人 — người thân, họ hàng",
        explain: "Dùng 亲人 trong ngữ cảnh Đọc thêm: Ngôn ngữ, gia đình & cảm xúc để diễn đạt: người thân, họ hàng.",
        examples: [
          { zh: "谢谢爸妈。母亲，这是给亲人的礼物。", py: "Xièxie bà mā. Mǔqīn, zhè shì gěi qīnrén de lǐwù.", vi: "Cảm ơn bố mẹ. Mẹ ơi, đây là quà cho người thân." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Nhà Mai · Buổi tối', bg: 'home', cast: ['mai', 'mama'],
        text: 'Mai về nhà, cả gia đình đoàn tụ.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '全家团聚真幸福！父母为我准备了好多菜。',
        pinyin: 'Quánjiā tuánjù zhēn xìngfú! Fùmǔ wèi wǒ zhǔnbèi le hǎo duō cài.',
        meaning: 'Cả nhà sum họp hạnh phúc thật! Bố mẹ chuẩn bị cho con bao nhiêu món.', expression: 'happy', vocab: ['幸福', '父母'] },
      { type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '欢迎回家！你父亲是工程师，今天特意请假。',
        pinyin: 'Huānyíng huí jiā! Nǐ fùqīn shì gōngchéngshī, jīntiān tèyì qǐngjià.',
        meaning: 'Chào mừng về nhà! Bố con là kỹ sư, hôm nay cố ý xin nghỉ.', expression: 'happy', vocab: ['父亲', '工程师'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '谢谢爸妈。母亲，这是给亲人的礼物。',
        pinyin: 'Xièxie bà mā. Mǔqīn, zhè shì gěi qīnrén de lǐwù.',
        meaning: 'Cảm ơn bố mẹ. Mẹ ơi, đây là quà cho người thân.', expression: 'happy', vocab: ['母亲', '亲人'] },
      { type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '你真有爱心。不论走多远，家人最重要。',
        pinyin: 'Nǐ zhēn yǒu àixīn. Búlùn zǒu duō yuǎn, jiārén zuì zhòngyào.',
        meaning: 'Con thật giàu lòng nhân ái. Bất kể đi xa thế nào, người nhà là quan trọng nhất.', expression: 'happy', vocab: ['爱心', '不论'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'mama'], bg: 'home', scene: '📍 Nhà Mai', expression: 'curious',
        q: 'Nhìn trời, Mai nói: "Trời sắp mưa, ___ không kịp rồi". Chọn từ đúng?',
        options: [
          { text: '快下雨了，恐怕来不及了。', pinyin: 'Kuài xià yǔ le, kǒngpà láibují le.', meaning: 'Sắp mưa rồi, e là không kịp mất.', correct: true, feedback: 'Đúng! 恐怕 = e rằng, sợ rằng.' },
          { text: '快下雨了，福来不及了。', pinyin: 'Kuài xià yǔ le, fú láibují le.', meaning: '(sai)', correct: false, feedback: '福 = phúc, không hợp ngữ pháp.' },
          { text: '快下雨了，胜利来不及了。', pinyin: 'Kuài xià yǔ le, shènglì láibují le.', meaning: '(sai)', correct: false, feedback: '胜利 = thắng lợi, sai nghĩa.' }
        ], vocab: ['恐怕', '福', '胜利'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '路上交警指挥，高速公路很顺，行李也没丢。',
        pinyin: 'Lù shàng jiāojǐng zhǐhuī, gāosù gōnglù hěn shùn, xíngli yě méi diū.',
        meaning: 'Trên đường có cảnh sát giao thông điều khiển, đường cao tốc rất thuận, hành lý cũng không mất.', expression: 'happy', vocab: ['交警', '高速公路', '行李'] },
      { type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '太好了，真是福气。晚上一起看世界杯，喝可乐。',
        pinyin: 'Tài hǎo le, zhēn shì fúqi. Wǎnshang yìqǐ kàn Shìjièbēi, hē kělè.',
        meaning: 'Tốt quá, đúng là phúc. Tối nay cùng xem World Cup, uống cola.', expression: 'happy', vocab: ['福', '世界杯', '可乐'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '我支持的队赢了，取得了胜利！阳光下大家都笑了。妈，听说你想让我教外文？家属群里都为我高兴。',
        pinyin: 'Wǒ zhīchí de duì yíng le, qǔdé le shènglì! Yángguāng xià dàjiā dōu xiào le. Mā, tīngshuō nǐ xiǎng ràng wǒ jiāo wàiwén? Jiāshǔ qún lǐ dōu wèi wǒ gāoxìng.',
        meaning: 'Đội con ủng hộ thắng rồi, giành chiến thắng! Dưới nắng mọi người đều cười. Mẹ ơi, nghe nói mẹ muốn con dạy ngoại văn à? Nhóm người thân ai cũng mừng cho con.', expression: 'happy', vocab: ['胜利', '阳光', '外文', '家属'] },
      { type: 'checkpoint', questions: [
        { q: '"幸福" có nghĩa là gì?', options: ['hạnh phúc', 'thắng lợi', 'hành lý', 'kỹ sư'], answer: 0 },
        { q: 'Từ nào nghĩa là "e rằng, sợ rằng"?', options: ['不论', '恐怕', '福'], answer: 1 },
        { q: '"工程师" có nghĩa là gì?', options: ['kỹ sư', 'cảnh sát giao thông', 'người thân'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '可乐', p: 'kě lè', v: 'cola', e: 'amusing' },
      { h: '胜利', p: 'shèng lì', v: 'thắng lợi, chiến thắng', e: 'victory' },
      { h: '世界杯', p: 'shì jiè bēi', v: 'Cúp thế giới (World Cup)', e: 'World Cup' },
      { h: '外文', p: 'wài wén', v: 'tiếng nước ngoài (văn bản)', e: 'foreign language (written)' },
      { h: '幸福', p: 'xìng fú', v: 'hạnh phúc', e: 'happiness' },
      { h: '阳光', p: 'yáng guāng', v: 'ánh nắng mặt trời', e: 'sunshine' },
      { h: '父母', p: 'fù mǔ', v: 'cha mẹ', e: 'father and mother' },
      { h: '父亲', p: 'fù qīn', v: 'cha, bố', e: 'father' },
      { h: '家属', p: 'jiā shǔ', v: 'người thân, thân nhân', e: 'family member' },
      { h: '母亲', p: 'mǔ qīn', v: 'mẹ, mẫu thân', e: 'mother' },
      { h: '亲人', p: 'qīn rén', v: 'người thân, họ hàng', e: 'one\\\'s close relatives' },
      { h: '爱心', p: 'ài xīn', v: 'lòng nhân ái', e: 'compassion' },
      { h: '不论', p: 'bù lùn', v: 'bất kể', e: 'whatever' },
      { h: '福', p: 'fú', v: 'phúc, hạnh phúc', e: 'blessing, good fortune, happiness' },
      { h: '恐怕', p: 'kǒng pà', v: 'e rằng, sợ rằng', e: 'fear' },
      { h: '高速公路', p: 'gāo sù gōng lù', v: 'đường cao tốc', e: 'expressway' },
      { h: '工程师', p: 'gōng chéng shī', v: 'kỹ sư', e: 'engineer' },
      { h: '交警', p: 'jiāo jǐng', v: 'cảnh sát giao thông', e: 'traffic police (abbr. for 察)' },
      { h: '行李', p: 'xíng li', v: 'hành lý', e: 'luggage' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '全家团聚真幸福', options: ['全家团聚真幸福','一个人在外很孤单','工作太忙没时间'], answer: '全家团聚真幸福', py: 'Quánjiā tuánjù zhēn xìngfú', explain: '听 幸福 = hạnh phúc.' },
        { type: 'fill', sentence: '全家团聚真___！', options: ['幸福', '行李', '外文'], answer: '幸福' },
        { type: 'fill', sentence: '___为我准备了菜。', options: ['父母', '交警', '可乐'], answer: '父母' },
        { type: 'fill', sentence: '你___是工程师。', options: ['父亲', '阳光', '福'], answer: '父亲' },
        { type: 'fill', sentence: '这是给___的礼物。', options: ['亲人', '世界杯', '行李'], answer: '亲人' },
        { type: 'fill', sentence: '你真有___。', options: ['爱心', '胜利', '外文'], answer: '爱心' }
      ],
      normal: [
        { type: 'listen', audio: '你父亲是工程师', options: ['你父亲是工程师','你父亲是医生','你母亲是老师'], answer: '你父亲是工程师', py: 'Nǐ fùqīn shì gōngchéngshī', explain: '听 父亲 = bố; 工程师 = kỹ sư.' },
        { type: 'dictation', audio: '家人最重要', answer: '家人最重要', hint: 'Người nhà là quan trọng nhất.', py: 'Jiārén zuì zhòngyào', explain: '家人 = người nhà.' },
        { type: 'fill', sentence: '___走多远，家人最重要。', options: ['不论', '恐怕', '幸福'], answer: '不论' },
        { type: 'fill', sentence: '你父亲是___。', options: ['工程师', '交警', '亲人'], answer: '工程师' },
        { type: 'fill', sentence: '路上___指挥。', options: ['交警', '父母', '可乐'], answer: '交警' },
        { type: 'fill', sentence: '一起看___。', options: ['世界杯', '阳光', '外文'], answer: '世界杯' },
        { type: 'fill', sentence: '___下大家都笑了。', options: ['阳光', '行李', '福'], answer: '阳光' }
      ],
      hard: [
        { type: 'fill', sentence: '快下雨了，___来不及了。', options: ['恐怕', '福', '胜利'], answer: '恐怕' },
        { type: 'fill', sentence: '我的队取得了___。', options: ['胜利', '外文', '行李'], answer: '胜利' },
        { type: 'fill', sentence: '___也没丢。', options: ['行李', '父亲', '可乐'], answer: '行李' },
        { type: 'fill', sentence: '___群里都为我高兴。', options: ['家属', '父母', '交警'], answer: '家属' },
        { type: 'translate', prompt: 'Bất kể đi xa thế nào, người nhà là quan trọng nhất.', answer: '不论走多远，家人最重要。' },
        { type: 'translate', prompt: 'Tối nay cùng xem World Cup, uống cola.', answer: '晚上一起看世界杯，喝可乐。' }
      ]
    }
  },

  // BÀI 121: 红茶,红酒,绿茶,银牌,金牌,球迷,选手,足球,大夫,警察,武术,概念,理由,思想,老太太,社会,志愿者,气候,收音机
  121: {
    id: 121, level: 3,
    title: 'Đọc thêm: Màu sắc, thể thao & xã hội',
    context: 'Một ngày hội thể thao, Mai cổ vũ các vận động viên rồi quyết tâm làm tình nguyện viên đóng góp cho xã hội.',
    vocabPreview: ['足球', '选手', '金牌', '志愿者', '社会'],
    objectives: [
      "Nắm nhóm từ khóa: 足球 · 选手 · 金牌 · 志愿者 · 社会",
      "Kể/nghe hiểu tình huống Đọc thêm: Màu sắc, thể thao & xã hội bằng câu ngắn HSK 3",
      "Phân biệt cách dùng 足球 · 选手 · 金牌",
      "Luyện đặt câu từ hội thoại, lựa chọn và workbook của bài"
    ],
    grammarNotes: [
      { point: "足球 — bóng đá",
        explain: "Dùng 足球 trong ngữ cảnh Đọc thêm: Màu sắc, thể thao & xã hội để diễn đạt: bóng đá.",
        examples: [
          { zh: "今天有足球比赛，好多球迷来加油。", py: "Jīntiān yǒu zúqiú bǐsài, hǎo duō qiúmí lái jiāyóu.", vi: "Hôm nay có trận bóng đá, bao nhiêu cổ động viên đến cổ vũ." }
        ] },
      { point: "选手 — vận động viên, thí sinh",
        explain: "Dùng 选手 trong ngữ cảnh Đọc thêm: Màu sắc, thể thao & xã hội để diễn đạt: vận động viên, thí sinh.",
        examples: [
          { zh: "我们支持的选手很厉害，拿了金牌，对手拿银牌。", py: "Wǒmen zhīchí de xuǎnshǒu hěn lìhai, ná le jīnpái, duìshǒu ná yínpái.", vi: "Vận động viên tụi mình ủng hộ rất giỏi, giành huy chương vàng, đối thủ được huy chương bạc." }
        ] },
      { point: "金牌 — huy chương vàng",
        explain: "Dùng 金牌 trong ngữ cảnh Đọc thêm: Màu sắc, thể thao & xã hội để diễn đạt: huy chương vàng.",
        examples: [
          { zh: "我们支持的选手很厉害，拿了金牌，对手拿银牌。", py: "Wǒmen zhīchí de xuǎnshǒu hěn lìhai, ná le jīnpái, duìshǒu ná yínpái.", vi: "Vận động viên tụi mình ủng hộ rất giỏi, giành huy chương vàng, đối thủ được huy chương bạc." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Sân vận động · Ban ngày', bg: 'park', cast: ['mai', 'xiaomei'],
        text: 'Một ngày hội thể thao sôi động.', pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '今天有足球比赛，好多球迷来加油。',
        pinyin: 'Jīntiān yǒu zúqiú bǐsài, hǎo duō qiúmí lái jiāyóu.',
        meaning: 'Hôm nay có trận bóng đá, bao nhiêu cổ động viên đến cổ vũ.', expression: 'happy', vocab: ['足球', '球迷'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我们支持的选手很厉害，拿了金牌，对手拿银牌。',
        pinyin: 'Wǒmen zhīchí de xuǎnshǒu hěn lìhai, ná le jīnpái, duìshǒu ná yínpái.',
        meaning: 'Vận động viên tụi mình ủng hộ rất giỏi, giành huy chương vàng, đối thủ được huy chương bạc.', expression: 'happy', vocab: ['选手', '金牌', '银牌'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我还喜欢武术。比赛累了，喝杯绿茶或红茶解渴。',
        pinyin: 'Wǒ hái xǐhuan wǔshù. Bǐsài lèi le, hē bēi lǜchá huò hóngchá jiěkě.',
        meaning: 'Mình còn thích võ thuật. Xem thi mệt, uống ly trà xanh hoặc trà đen giải khát.', expression: 'happy', vocab: ['武术', '绿茶', '红茶'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '晚上爸妈喝点红酒庆祝。',
        pinyin: 'Wǎnshang bà mā hē diǎn hóngjiǔ qìngzhù.',
        meaning: 'Tối bố mẹ uống chút rượu vang đỏ ăn mừng.', expression: 'happy', vocab: ['红酒'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'park', scene: '📍 Sân vận động', expression: 'curious',
        q: 'Mai nói: "Cậu nghỉ học phải có ___ (lý do) chứ". Chọn từ đúng?',
        options: [
          { text: '你请假总得有个理由吧。', pinyin: 'Nǐ qǐngjià zǒng děi yǒu gè lǐyóu ba.', meaning: 'Cậu xin nghỉ thì cũng phải có lý do chứ.', correct: true, feedback: 'Đúng! 理由 = lý do.' },
          { text: '你请假总得有个概念吧。', pinyin: 'Nǐ qǐngjià zǒng děi yǒu gè gàiniàn ba.', meaning: '(sai)', correct: false, feedback: '概念 = khái niệm, không phải "lý do".' },
          { text: '你请假总得有个思想吧。', pinyin: 'Nǐ qǐngjià zǒng děi yǒu gè sīxiǎng ba.', meaning: '(sai)', correct: false, feedback: '思想 = tư tưởng, sai nghĩa.' }
        ], vocab: ['理由', '概念', '思想'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '现在我对"奉献"有了新的概念和思想，我想当志愿者，帮助社会。',
        pinyin: 'Xiànzài wǒ duì "fèngxiàn" yǒu le xīn de gàiniàn hé sīxiǎng, wǒ xiǎng dāng zhìyuànzhě, bāngzhù shèhuì.',
        meaning: 'Giờ mình có khái niệm và tư tưởng mới về "cống hiến", mình muốn làm tình nguyện viên, giúp xã hội.', expression: 'focused', vocab: ['概念', '思想', '志愿者', '社会'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '上次一位老太太晕倒，大夫和警察都来帮忙。',
        pinyin: 'Shàng cì yí wèi lǎotàitai yūndǎo, dàifu hé jǐngchá dōu lái bāngmáng.',
        meaning: 'Lần trước một bà cụ ngất xỉu, bác sĩ và cảnh sát đều đến giúp.', expression: 'focused', vocab: ['老太太', '大夫', '警察'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '真暖心。最近气候变化大，我常听收音机看天气。',
        pinyin: 'Zhēn nuǎnxīn. Zuìjìn qìhòu biànhuà dà, wǒ cháng tīng shōuyīnjī kàn tiānqì.',
        meaning: 'Thật ấm lòng. Gần đây khí hậu thay đổi nhiều, mình hay nghe radio xem thời tiết.', expression: 'happy', vocab: ['气候', '收音机'] },
      { type: 'checkpoint', questions: [
        { q: '"志愿者" có nghĩa là gì?', options: ['tình nguyện viên', 'cổ động viên', 'cảnh sát', 'bác sĩ'], answer: 0 },
        { q: 'Từ nào nghĩa là "huy chương vàng"?', options: ['银牌', '金牌', '足球'], answer: 1 },
        { q: '"气候" có nghĩa là gì?', options: ['khí hậu', 'lý do', 'xã hội'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '红茶', p: 'hóng chá', v: 'trà đen, hồng trà', e: 'black tea' },
      { h: '红酒', p: 'hóng jiǔ', v: 'rượu vang đỏ', e: 'red wine' },
      { h: '绿茶', p: 'lǜ chá', v: 'trà xanh', e: 'green tea' },
      { h: '银牌', p: 'yín pái', v: 'huy chương bạc', e: 'silver medal' },
      { h: '金牌', p: 'jīn pái', v: 'huy chương vàng', e: 'gold medal' },
      { h: '球迷', p: 'qiú mí', v: 'cổ động viên bóng', e: 'fan (ball sports)' },
      { h: '选手', p: 'xuǎn shǒu', v: 'vận động viên, thí sinh', e: 'athlete' },
      { h: '足球', p: 'zú qiú', v: 'bóng đá', e: 'soccer ball' },
      { h: '大夫', p: 'dà fū', v: 'bác sĩ', e: 'senior official (in imperial China)' },
      { h: '警察', p: 'jǐng chá', v: 'cảnh sát', e: 'police' },
      { h: '武术', p: 'wǔ shù', v: 'võ thuật', e: 'military skill or technique (in former times)' },
      { h: '概念', p: 'gài niàn', v: 'khái niệm', e: 'concept' },
      { h: '理由', p: 'lǐ yóu', v: 'lý do', e: 'reason' },
      { h: '思想', p: 'sī xiǎng', v: 'tư tưởng, suy nghĩ', e: 'thought' },
      { h: '老太太', p: 'lǎo tài tai', v: 'bà cụ', e: 'elderly lady (respectful)' },
      { h: '社会', p: 'shè huì', v: 'xã hội', e: 'society' },
      { h: '志愿者', p: 'zhì yuàn zhě', v: 'tình nguyện viên', e: 'volunteer' },
      { h: '气候', p: 'qì hòu', v: 'khí hậu', e: 'climate' },
      { h: '收音机', p: 'shōu yīn jī', v: 'radio, máy thu thanh', e: 'radio' }
    ],
    workbook: {
      easy: [
        { type: 'listen', audio: '今天有足球比赛', options: ['今天有足球比赛','今天有音乐会','明天有考试'], answer: '今天有足球比赛', py: 'Jīntiān yǒu zúqiú bǐsài', explain: '听 足球 = bóng đá.' },
        { type: 'fill', sentence: '今天有___比赛。', options: ['足球', '红茶', '社会'], answer: '足球' },
        { type: 'fill', sentence: '好多___来加油。', options: ['球迷', '大夫', '气候'], answer: '球迷' },
        { type: 'fill', sentence: '选手拿了___。', options: ['金牌', '理由', '武术'], answer: '金牌' },
        { type: 'fill', sentence: '喝杯___解渴。', options: ['绿茶', '警察', '社会'], answer: '绿茶' },
        { type: 'fill', sentence: '我想当___。', options: ['志愿者', '收音机', '银牌'], answer: '志愿者' }
      ],
      normal: [
        { type: 'listen', audio: '拿了金牌对手拿银牌', options: ['拿了金牌对手拿银牌','比赛输了很可惜','我们没有参加比赛'], answer: '拿了金牌对手拿银牌', py: 'Ná le jīnpái duìshǒu ná yínpái', explain: '听 金牌 = HCV; 银牌 = HCB.' },
        { type: 'dictation', audio: '我想当志愿者', answer: '我想当志愿者', hint: 'Mình muốn làm tình nguyện viên.', py: 'Wǒ xiǎng dāng zhìyuànzhě', explain: '志愿者 = tình nguyện viên.' },
        { type: 'fill', sentence: '我们支持的___很厉害。', options: ['选手', '球迷', '红酒'], answer: '选手' },
        { type: 'fill', sentence: '对手拿___。', options: ['银牌', '金牌', '社会'], answer: '银牌' },
        { type: 'fill', sentence: '我喜欢___。', options: ['武术', '理由', '气候'], answer: '武术' },
        { type: 'fill', sentence: '帮助___。', options: ['社会', '足球', '红茶'], answer: '社会' },
        { type: 'fill', sentence: '大夫和___都来帮忙。', options: ['警察', '球迷', '红酒'], answer: '警察' }
      ],
      hard: [
        { type: 'fill', sentence: '请假总得有个___。', options: ['理由', '概念', '思想'], answer: '理由' },
        { type: 'fill', sentence: '我有了新的___和思想。', options: ['概念', '理由', '社会'], answer: '概念' },
        { type: 'fill', sentence: '一位___晕倒了。', options: ['老太太', '选手', '球迷'], answer: '老太太' },
        { type: 'fill', sentence: '我常听___看天气。', options: ['收音机', '足球', '金牌'], answer: '收音机' },
        { type: 'translate', prompt: 'Mình muốn làm tình nguyện viên, giúp xã hội.', answer: '我想当志愿者，帮助社会。' },
        { type: 'translate', prompt: 'Gần đây khí hậu thay đổi nhiều.', answer: '最近气候变化大。' }
      ]
    }
  }

});
