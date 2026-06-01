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
      { h: '安排', p: 'ān pái', v: 'sắp xếp, bố trí' },
      { h: '安装', p: 'ān zhuāng', v: 'lắp đặt, cài đặt' },
      { h: '按', p: 'àn', v: 'ấn, nhấn' },
      { h: '按照', p: 'àn zhào', v: 'theo, căn cứ vào' },
      { h: '把', p: 'bǎ', v: 'cầm, nắm' },
      { h: '把握', p: 'bǎ wò', v: 'nắm bắt, nắm chắc' },
      { h: '搬', p: 'bān', v: 'chuyển, dọn' },
      { h: '搬家', p: 'bān jiā', v: 'chuyển nhà' },
      { h: '办理', p: 'bàn lǐ', v: 'giải quyết, tiến hành' },
      { h: '保持', p: 'bǎo chí', v: 'duy trì, giữ gìn' },
      { h: '保存', p: 'bǎo cún', v: 'bảo tồn, lưu giữ' },
      { h: '保护', p: 'bǎo hù', v: 'bảo vệ' },
      { h: '保留', p: 'bǎo liú', v: 'giữ lại, bảo lưu' },
      { h: '保证', p: 'bǎo zhèng', v: 'bảo đảm, cam đoan' },
      { h: '报', p: 'bào', v: 'báo cáo, thông báo' },
      { h: '报到', p: 'bào dào', v: 'trình diện, đăng ký' },
      { h: '报道', p: 'bào dào', v: 'đưa tin, tường thuật' },
      { h: '报告', p: 'bào gào', v: 'báo cáo' },
      { h: '比较', p: 'bǐ jiào', v: 'so sánh, tương đối' },
      { h: '比赛', p: 'bǐ sài', v: 'thi đấu, cuộc thi' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '妈妈帮我___，东西太多了。', options: ['搬家', '比赛', '报告'], answer: '搬家' },
        { type: 'fill', sentence: '请___计划做事。', options: ['按照', '保护', '安装'], answer: '按照' },
        { type: 'fill', sentence: '我要___一下房间。', options: ['安排', '报到', '比较'], answer: '安排' },
        { type: 'fill', sentence: '老师让我去办公室___。', options: ['报到', '保存', '把握'], answer: '报到' },
        { type: 'fill', sentence: '这是我写的___。', options: ['报告', '搬', '按'], answer: '报告' }
      ],
      normal: [
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
      { h: '变化', p: 'biàn huà', v: 'biến đổi, thay đổi' },
      { h: '变为', p: 'biàn wéi', v: 'biến thành' },
      { h: '表达', p: 'biǎo dá', v: 'biểu đạt, diễn đạt' },
      { h: '表明', p: 'biǎo míng', v: 'cho thấy, chứng tỏ' },
      { h: '表现', p: 'biǎo xiàn', v: 'biểu hiện, thể hiện' },
      { h: '表演', p: 'biǎo yǎn', v: 'biểu diễn' },
      { h: '播出', p: 'bō chū', v: 'phát sóng' },
      { h: '播放', p: 'bō fàng', v: 'phát, chiếu' },
      { h: '补', p: 'bǔ', v: 'vá, bổ sung' },
      { h: '补充', p: 'bǔ chōng', v: 'bổ sung' },
      { h: '步', p: 'bù', v: 'bước (chân)' },
      { h: '才能', p: 'cái néng', v: 'tài năng' },
      { h: '采取', p: 'cǎi qǔ', v: 'áp dụng, tiến hành' },
      { h: '采用', p: 'cǎi yòng', v: 'áp dụng, sử dụng' },
      { h: '产生', p: 'chǎn shēng', v: 'phát sinh, tạo ra' },
      { h: '吵', p: 'chǎo', v: 'ồn ào, cãi nhau' },
      { h: '吵架', p: 'chǎo jià', v: 'cãi nhau, tranh cãi' },
      { h: '称为', p: 'chēng wéi', v: 'gọi là, được gọi là' },
      { h: '成就', p: 'chéng jiù', v: 'thành tựu' },
      { h: '成立', p: 'chéng lì', v: 'thành lập' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '俱乐部正式___了。', options: ['成立', '吵架', '播放'], answer: '成立' },
        { type: 'fill', sentence: '每个人___自己的才能。', options: ['表现', '补充', '产生'], answer: '表现' },
        { type: 'fill', sentence: '我来___音乐。', options: ['播放', '成立', '表达'], answer: '播放' },
        { type: 'fill', sentence: '我们准备一个___。', options: ['表演', '变化', '才能'], answer: '表演' },
        { type: 'fill', sentence: '别___，好好说话。', options: ['吵架', '成就', '采用'], answer: '吵架' }
      ],
      normal: [
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
      { h: '成长', p: 'chéng zhǎng', v: 'trưởng thành, lớn lên' },
      { h: '持续', p: 'chí xù', v: 'tiếp tục, duy trì' },
      { h: '充满', p: 'chōng mǎn', v: 'tràn đầy' },
      { h: '处理', p: 'chǔ lǐ', v: 'xử lý' },
      { h: '传', p: 'chuán', v: 'truyền, chuyển' },
      { h: '传播', p: 'chuán bō', v: 'truyền bá, phổ biến' },
      { h: '传来', p: 'chuán lái', v: 'truyền đến' },
      { h: '传说', p: 'chuán shuō', v: 'truyền thuyết' },
      { h: '创新', p: 'chuàng xīn', v: 'sáng tạo, đổi mới' },
      { h: '创业', p: 'chuàng yè', v: 'lập nghiệp, khởi nghiệp' },
      { h: '创造', p: 'chuàng zào', v: 'sáng tạo, tạo ra' },
      { h: '创作', p: 'chuàng zuò', v: 'sáng tác' },
      { h: '从事', p: 'cóng shì', v: 'từ sự, tham gia' },
      { h: '存', p: 'cún', v: 'tồn tại, lưu trữ' },
      { h: '存在', p: 'cún zài', v: 'tồn tại' },
      { h: '达到', p: 'dá dào', v: 'đạt được' },
      { h: '打破', p: 'dǎ pò', v: 'phá vỡ' },
      { h: '打听', p: 'dǎ ting', v: 'hỏi thăm, dò hỏi' },
      { h: '代', p: 'dài', v: 'thế hệ, thay thế' },
      { h: '代表', p: 'dài biǎo', v: 'đại diện' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '家务我自己___。', options: ['处理', '充满', '传播'], answer: '处理' },
        { type: 'fill', sentence: '我___了很多，更成熟了。', options: ['成长', '打破', '存'], answer: '成长' },
        { type: 'fill', sentence: '心里___了信心。', options: ['充满', '处理', '代表'], answer: '充满' },
        { type: 'fill', sentence: '好习惯要___下去。', options: ['持续', '打听', '存在'], answer: '持续' },
        { type: 'fill', sentence: '我想自己___。', options: ['创业', '传来', '充满'], answer: '创业' }
      ],
      normal: [
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
      { h: '带动', p: 'dài dòng', v: 'thúc đẩy, dẫn dắt' },
      { h: '带领', p: 'dài lǐng', v: 'dẫn dắt, lãnh đạo' },
      { h: '到达', p: 'dào dá', v: 'đến nơi, tới' },
      { h: '到底', p: 'dào dǐ', v: 'rốt cuộc, đến cùng' },
      { h: '得分', p: 'dé fēn', v: 'ghi điểm' },
      { h: '等待', p: 'děng dài', v: 'chờ đợi' },
      { h: '调', p: 'diào', v: 'điều chỉnh, điều phối' },
      { h: '调查', p: 'diào chá', v: 'điều tra' },
      { h: '调整', p: 'tiáo zhěng', v: 'điều chỉnh' },
      { h: '订', p: 'dìng', v: 'đặt trước, ký kết' },
      { h: '断', p: 'duàn', v: 'đứt, gãy, ngừng' },
      { h: '对待', p: 'duì dài', v: 'đối xử, đối đãi' },
      { h: '发表', p: 'fā biǎo', v: 'phát biểu, công bố' },
      { h: '发出', p: 'fā chū', v: 'phát ra' },
      { h: '发动', p: 'fā dòng', v: 'phát động, khởi động' },
      { h: '发明', p: 'fā míng', v: 'phát minh' },
      { h: '发生', p: 'fā shēng', v: 'xảy ra, phát sinh' },
      { h: '发送', p: 'fā sòng', v: 'gửi, phát' },
      { h: '发言', p: 'fā yán', v: 'phát biểu' },
      { h: '发展', p: 'fā zhǎn', v: 'phát triển' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我们___在哪个站下车？', options: ['到底', '发明', '带动'], answer: '到底' },
        { type: 'fill', sentence: '请在这儿___下一班车。', options: ['等待', '发表', '调'], answer: '等待' },
        { type: 'fill', sentence: '这班车不直接___。', options: ['到达', '得分', '断'], answer: '到达' },
        { type: 'fill', sentence: '我给他___一条消息。', options: ['发送', '调查', '对待'], answer: '发送' },
        { type: 'fill', sentence: '我用手机___一辆车。', options: ['订', '发言', '带领'], answer: '订' }
      ],
      normal: [
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
      { h: '反对', p: 'fǎn duì', v: 'phản đối' },
      { h: '反复', p: 'fǎn fù', v: 'lặp đi lặp lại' },
      { h: '反应', p: 'fǎn yìng', v: 'phản ứng' },
      { h: '防', p: 'fáng', v: 'phòng ngừa, đề phòng' },
      { h: '防止', p: 'fáng zhǐ', v: 'phòng ngừa, ngăn chặn' },
      { h: '访问', p: 'fǎng wèn', v: 'thăm hỏi, phỏng vấn' },
      { h: '放到', p: 'fàng dào', v: 'đặt vào' },
      { h: '飞行', p: 'fēi xíng', v: 'bay, phi hành' },
      { h: '费', p: 'fèi', v: 'phí, tốn' },
      { h: '分别', p: 'fēn bié', v: 'chia tay, phân biệt' },
      { h: '分配', p: 'fēn pèi', v: 'phân bổ, phân phối' },
      { h: '分组', p: 'fēn zǔ', v: 'chia nhóm' },
      { h: '否定', p: 'fǒu dìng', v: 'phủ định, phủ nhận' },
      { h: '否认', p: 'fǒu rèn', v: 'phủ nhận' },
      { h: '付', p: 'fù', v: 'trả (tiền)' },
      { h: '复印', p: 'fù yìn', v: 'photocopy, sao chép' },
      { h: '改进', p: 'gǎi jìn', v: 'cải tiến' },
      { h: '改造', p: 'gǎi zào', v: 'cải tạo' },
      { h: '赶', p: 'gǎn', v: 'đuổi kịp, vội vàng' },
      { h: '赶到', p: 'gǎn dào', v: 'kịp đến' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '___时间不长，很快就到。', options: ['飞行', '分别', '复印'], answer: '飞行' },
        { type: 'fill', sentence: '证件要___一份。', options: ['复印', '反对', '分配'], answer: '复印' },
        { type: 'fill', sentence: '请___一下行李费。', options: ['付', '防', '赶'], answer: '付' },
        { type: 'fill', sentence: '我把文件___包里。', options: ['放到', '反应', '改进'], answer: '放到' },
        { type: 'fill', sentence: '这么早就要___了。', options: ['分别', '飞行', '防止'], answer: '分别' }
      ],
      normal: [
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
