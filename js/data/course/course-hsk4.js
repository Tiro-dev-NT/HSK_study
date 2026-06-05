// ═══════════════════════════════════════════════════════
// COURSE-HSK4.JS — Truyện Mai HSK 4 (Bài 122-154, Pro-gated)
// Assign vào COURSE_DATA (khai báo ở course-data.js).
// Mỗi lesson level: 4 → Course.loadLesson() gate qua Monetization.isPro().
// Coverage: 621 từ HSK3_DATA[4] → 33 bài (map: content/curriculum/mai-hsk4-coverage-map.md)
// Cast TÁI DÙNG (không asset mới): mai · laoli (mentor chương trình) ·
//   xiaomei (đồng thực tập) · mama · fuwuyuan · yisheng · narrator · class
// Scene TÁI DÙNG: office · campus · street · home · dorm-room · cafeteria ·
//   library · restaurant · shop · clinic · classroom
// Story-arc: Mai bước vào kỳ thực tập tại trung tâm trao đổi văn hóa của thầy Lý.
// ═══════════════════════════════════════════════════════

// ───────────────────────────────────────────────────────
// BATCH 1 — Bài 122-125 (Kỳ thực tập bắt đầu)
// ───────────────────────────────────────────────────────
Object.assign(COURSE_DATA, {

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 122: Kỳ thực tập bắt đầu (1) — 20 từ
  // ─────────────────────────────────────────────────────────────────────────
  122: {
    id: 122,
    level: 4,
    title: 'Kỳ thực tập bắt đầu (1)',
    context: 'Ngày đầu Mai đến trung tâm trao đổi văn hóa để thực tập. Thầy Lý hướng dẫn em làm quen công việc, rồi em ăn trưa cùng Tiểu Mỹ.',
    vocabPreview: ['按时', '诚实', '材料', '答案', '表扬'],
    objectives: [
      "Nắm nhóm từ khóa: 按时 · 诚实 · 材料 · 答案 · 表扬",
      "Nghe hiểu và kể lại tình huống Kỳ thực tập bắt đầu (1) bằng câu HSK 4",
      "Phân biệt cách dùng 按时 · 诚实 · 材料",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "按时 — đúng giờ",
        explain: "Dùng 按时 trong ngữ cảnh Kỳ thực tập bắt đầu (1) để diễn đạt: đúng giờ.",
        examples: [
          { zh: "谢谢老师！我一定按时上班，做个诚实的人。", py: "Xièxie lǎoshī! Wǒ yídìng ànshí shàngbān, zuò ge chéngshí de rén.", vi: "Cảm ơn thầy! Em nhất định sẽ đi làm đúng giờ, làm một người trung thực." }
        ] },
      { point: "诚实 — trung thực",
        explain: "Dùng 诚实 trong ngữ cảnh Kỳ thực tập bắt đầu (1) để diễn đạt: trung thực.",
        examples: [
          { zh: "谢谢老师！我一定按时上班，做个诚实的人。", py: "Xièxie lǎoshī! Wǒ yídìng ànshí shàngbān, zuò ge chéngshí de rén.", vi: "Cảm ơn thầy! Em nhất định sẽ đi làm đúng giờ, làm một người trung thực." }
        ] },
      { point: "材料 — nguyên liệu",
        explain: "Dùng 材料 trong ngữ cảnh Kỳ thực tập bắt đầu (1) để diễn đạt: nguyên liệu.",
        examples: [
          { zh: "好。这些是今天的材料，字有点暗，你慢慢看。", py: "Hǎo. Zhèxiē shì jīntiān de cáiliào, zì yǒudiǎn àn, nǐ mànman kàn.", vi: "Tốt. Đây là tài liệu hôm nay, chữ hơi mờ, em cứ xem từ từ." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Trung tâm trao đổi · Buổi sáng', bg: 'office',
        cast: ['mai', 'laoli'],
        text: 'Hôm nay là ngày đầu Mai đến trung tâm trao đổi văn hóa để thực tập.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '老师，打扰一下，我是新来的实习生。',
        pinyin: 'Lǎoshī, dǎrǎo yíxià, wǒ shì xīn lái de shíxíshēng.',
        meaning: 'Thầy ơi, làm phiền chút ạ, em là thực tập sinh mới.',
        expression: 'curious', vocab: ['打扰'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '欢迎你！不管遇到什么问题，都可以来问我。',
        pinyin: 'Huānyíng nǐ! Bùguǎn yùdào shénme wèntí, dōu kěyǐ lái wèn wǒ.',
        meaning: 'Chào mừng em! Bất kể gặp vấn đề gì, đều có thể đến hỏi thầy.',
        expression: 'happy', vocab: ['不管'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '谢谢老师！我一定按时上班，做个诚实的人。',
        pinyin: 'Xièxie lǎoshī! Wǒ yídìng ànshí shàngbān, zuò ge chéngshí de rén.',
        meaning: 'Cảm ơn thầy! Em nhất định sẽ đi làm đúng giờ, làm một người trung thực.',
        expression: 'happy', vocab: ['按时', '诚实'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '好。这些是今天的材料，字有点暗，你慢慢看。',
        pinyin: 'Hǎo. Zhèxiē shì jīntiān de cáiliào, zì yǒudiǎn àn, nǐ mànman kàn.',
        meaning: 'Tốt. Đây là tài liệu hôm nay, chữ hơi mờ, em cứ xem từ từ.',
        expression: 'focused', vocab: ['材料', '暗'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '请问传真机在哪儿？我要发一份传真。',
        pinyin: 'Qǐngwèn chuánzhēnjī zài nǎr? Wǒ yào fā yí fèn chuánzhēn.',
        meaning: 'Cho em hỏi máy fax ở đâu ạ? Em cần gửi một bản fax.',
        expression: null, vocab: ['传真'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '在那边。对了，办公室里不能抽烟。',
        pinyin: 'Zài nàbiān. Duìle, bàngōngshì lǐ bùnéng chōuyān.',
        meaning: 'Ở đằng kia. À đúng rồi, trong văn phòng không được hút thuốc.',
        expression: null, vocab: ['抽烟'] },
      { type: 'choice', speaker: 'laoli', cast: ['mai', 'laoli'], bg: 'office',
        scene: '📍 Trung tâm trao đổi',
        expression: 'curious',
        q: 'Mai điền nhầm một ô trong biểu mẫu. Thầy Lý muốn nói "Đáp án này em đoán sai rồi, nhưng đừng lo". Câu nào đúng?',
        options: [
          { text: '这个答案你猜错了，不过别担心。', pinyin: 'Zhège dá\'àn nǐ cāi cuò le, búguò bié dānxīn.', meaning: 'Đáp án này em đoán sai rồi, nhưng đừng lo.', correct: true,
            feedback: 'Đúng! 答案 = đáp án; 猜 = đoán.' },
          { text: '这个答案你抱错了，不过别担心。', pinyin: 'Zhège dá\'àn nǐ bào cuò le, búguò bié dānxīn.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '抱 = ôm/bế, không dùng cho việc "đoán đáp án".' },
          { text: '这个答案你擦错了，不过别担心。', pinyin: 'Zhège dá\'àn nǐ cā cuò le, búguò bié dānxīn.', meaning: '(không tự nhiên)', correct: false,
            feedback: '擦 = lau/chùi, không phải "đoán".' }
        ], vocab: ['答案', '猜'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '抱歉，我太粗心了，下次一定认真检查。',
        pinyin: 'Bàoqiàn, wǒ tài cūxīn le, xiàcì yídìng rènzhēn jiǎnchá.',
        meaning: 'Xin lỗi, em quá bất cẩn, lần sau nhất định sẽ kiểm tra cẩn thận.',
        expression: 'sad', vocab: ['抱歉', '粗心'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '没关系，你不笨，只是第一天还不熟。擦干净重写就好。',
        pinyin: 'Méiguānxi, nǐ bù bèn, zhǐshì dì-yī tiān hái bù shú. Cā gānjìng chóng xiě jiù hǎo.',
        meaning: 'Không sao, em không ngốc, chỉ là ngày đầu chưa quen. Lau sạch viết lại là được.',
        expression: 'happy', vocab: ['笨', '擦'] },
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Căng tin · Buổi trưa', bg: 'cafeteria',
        cast: ['mai', 'xiaomei'],
        text: 'Buổi trưa, Mai ăn cơm cùng Tiểu Mỹ ở căng tin.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '老师今天表扬你了！毕业以后，这次实习也包括在成绩里呢。',
        pinyin: 'Lǎoshī jīntiān biǎoyáng nǐ le! Bìyè yǐhòu, zhè cì shíxí yě bāokuò zài chéngjì lǐ ne.',
        meaning: 'Hôm nay thầy khen cậu đấy! Sau khi tốt nghiệp, kỳ thực tập này cũng được tính vào điểm nữa.',
        expression: 'happy', vocab: ['表扬', '毕业', '包括'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '真的吗？太好了！下班我想去逛街，很多店在打折。',
        pinyin: 'Zhēn de ma? Tài hǎo le! Xiàbān wǒ xiǎng qù guàngjiē, hěn duō diàn zài dǎzhé.',
        meaning: 'Thật à? Tuyệt quá! Tan làm tớ muốn đi dạo phố, nhiều cửa hàng đang giảm giá.',
        expression: 'happy', vocab: ['打折'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我陪你去，正好买条新围巾代替旧的。',
        pinyin: 'Wǒ péi nǐ qù, zhènghǎo mǎi tiáo xīn wéijīn dàitì jiù de.',
        meaning: 'Tớ đi cùng cậu, tiện mua cái khăn mới thay cho cái cũ.',
        expression: null, vocab: ['代替'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '有你真好！来，抱一下！',
        pinyin: 'Yǒu nǐ zhēn hǎo! Lái, bào yíxià!',
        meaning: 'Có cậu thật tốt! Lại đây, ôm một cái nào!',
        expression: 'happy', vocab: ['抱'] },
      { type: 'checkpoint', questions: [
        { q: 'Thầy Lý mong Mai làm người thế nào khi thực tập?', options: ['诚实 (trung thực)', '笨 (ngốc)', '粗心 (bất cẩn)', '暗 (tối)'], answer: 0 },
        { q: '“按时上班” nghĩa là gì?', options: ['Đi làm đúng giờ', 'Nghỉ làm', 'Đi làm muộn', 'Tan làm sớm'], answer: 0 },
        { q: '“打折” chỉ điều gì?', options: ['Giảm giá', 'Tăng giá', 'Miễn phí', 'Trả góp'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '按时', p: 'àn shí', v: 'đúng giờ, đúng hạn', e: 'on time' },
      { h: '暗', p: 'àn', v: 'tối, mờ, ám', e: 'dark, dim, secret' },
      { h: '包括', p: 'bāo kuò', v: 'bao gồm', e: 'to comprise' },
      { h: '抱', p: 'bào', v: 'ôm, bế', e: 'to hold' },
      { h: '抱歉', p: 'bào qiàn', v: 'xin lỗi, áy náy', e: 'to be sorry' },
      { h: '笨', p: 'bèn', v: 'ngốc, vụng về', e: 'stupid' },
      { h: '毕业', p: 'bì yè', v: 'tốt nghiệp', e: 'graduation' },
      { h: '表扬', p: 'biǎo yáng', v: 'khen ngợi', e: 'to praise' },
      { h: '不管', p: 'bù guǎn', v: 'bất kể, dù', e: 'not to be concerned' },
      { h: '擦', p: 'cā', v: 'lau, chùi', e: 'to rub' },
      { h: '猜', p: 'cāi', v: 'đoán', e: 'to guess' },
      { h: '材料', p: 'cái liào', v: 'nguyên liệu, tài liệu', e: 'material' },
      { h: '诚实', p: 'chéng shí', v: 'trung thực', e: 'honest' },
      { h: '抽烟', p: 'chōu yān', v: 'hút thuốc', e: 'to smoke (a cigarette' },
      { h: '传真', p: 'chuán zhēn', v: 'máy fax, gửi fax', e: 'fax' },
      { h: '粗心', p: 'cū xīn', v: 'bất cẩn, sơ ý', e: 'careless' },
      { h: '答案', p: 'dá àn', v: 'đáp án', e: 'answer' },
      { h: '打扰', p: 'dǎ rǎo', v: 'làm phiền, quấy rầy', e: 'to disturb' },
      { h: '打折', p: 'dǎ zhé', v: 'giảm giá', e: 'to give a discount' },
      { h: '代替', p: 'dài tì', v: 'thay thế', e: 'to replace' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我一定___上班，不会迟到。', options: ['按时', '抽烟', '打折'], answer: '按时' },
        { type: 'fill', sentence: '办公室里不能___。', options: ['抽烟', '毕业', '包括'], answer: '抽烟' },
        { type: 'fill', sentence: '这个___你猜对了吗？', options: ['答案', '传真', '材料'], answer: '答案' },
        { type: 'fill', sentence: '做事要___，不能骗人。', options: ['诚实', '粗心', '暗'], answer: '诚实' },
        { type: 'fill', sentence: '很多商店在___。', options: ['打折', '毕业', '抱歉'], answer: '打折' }
      ],
      normal: [
        { type: 'fill', sentence: '老师___了我的作业，我很高兴。', options: ['表扬', '抽烟', '传真'], answer: '表扬' },
        { type: 'fill', sentence: '请把这份___发出去。', options: ['传真', '答案', '力气'], answer: '传真' },
        { type: 'fill', sentence: '我太___了，写错了字。', options: ['粗心', '诚实', '热闹'], answer: '粗心' },
        { type: 'fill', sentence: '___遇到什么问题，都可以问我。', options: ['不管', '抱歉', '打折'], answer: '不管' },
        { type: 'order', words: ['这些', '是', '今天', '的', '材料'], answer: '这些是今天的材料' },
        { type: 'order', words: ['这次', '实习', '也', '包括', '在', '成绩', '里'], answer: '这次实习也包括在成绩里' },
        { type: 'fill', sentence: '我不___，只是第一天还不熟。', options: ['笨', '暗', '软'], answer: '笨' }
      ],
      hard: [
        { type: 'fill', sentence: '字有点___，我看不清楚。', options: ['暗', '宽', '圆'], answer: '暗' },
        { type: 'fill', sentence: '你能用电脑___传真机吗？', options: ['代替', '抱歉', '毕业'], answer: '代替' },
        { type: 'translate', prompt: 'Xin lỗi, tôi đã quá bất cẩn.', answer: '抱歉，我太粗心了。' },
        { type: 'translate', prompt: 'Tôi nhất định sẽ đi làm đúng giờ.', answer: '我一定按时上班。' },
        { type: 'translate', prompt: 'Bất kể gặp vấn đề gì, đều có thể đến hỏi tôi.', answer: '不管遇到什么问题，都可以来问我。' },
        { type: 'fill', sentence: '老师___我做得好，我很开心。', options: ['表扬', '打扰', '抽烟'], answer: '表扬' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 123: Kỳ thực tập bắt đầu (2) — 20 từ
  // ─────────────────────────────────────────────────────────────────────────
  123: {
    id: 123,
    level: 4,
    title: 'Kỳ thực tập bắt đầu (2)',
    context: 'Thầy Lý giao cho Mai nhiệm vụ làm hướng dẫn cho một nhóm trẻ em đi tham quan. Mai hồi hộp nhưng được động viên, và buổi tham quan diễn ra suôn sẻ.',
    vocabPreview: ['导游', '儿童', '鼓励', '风景', '关键'],
    objectives: [
      "Nắm nhóm từ khóa: 导游 · 儿童 · 鼓励 · 风景 · 关键",
      "Nghe hiểu và kể lại tình huống Kỳ thực tập bắt đầu (2) bằng câu HSK 4",
      "Phân biệt cách dùng 导游 · 儿童 · 鼓励",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "导游 — hướng dẫn viên du lịch",
        explain: "Dùng 导游 trong ngữ cảnh Kỳ thực tập bắt đầu (2) để diễn đạt: hướng dẫn viên du lịch.",
        examples: [
          { zh: "这次活动的关键，是让儿童玩得开心。你来当导游，好吗？", py: "Zhè cì huódòng de guānjiàn, shì ràng értóng wán de kāixīn. Nǐ lái dāng dǎoyóu, hǎo ma?", vi: "Điều then chốt của hoạt động lần này là để các em nhỏ chơi vui. Em làm hướng dẫn viên nhé?" }
        ] },
      { point: "儿童 — trẻ em",
        explain: "Dùng 儿童 trong ngữ cảnh Kỳ thực tập bắt đầu (2) để diễn đạt: trẻ em.",
        examples: [
          { zh: "这次活动的关键，是让儿童玩得开心。你来当导游，好吗？", py: "Zhè cì huódòng de guānjiàn, shì ràng értóng wán de kāixīn. Nǐ lái dāng dǎoyóu, hǎo ma?", vi: "Điều then chốt của hoạt động lần này là để các em nhỏ chơi vui. Em làm hướng dẫn viên nhé?" }
        ] },
      { point: "鼓励 — khuyến khích",
        explain: "Dùng 鼓励 trong ngữ cảnh Kỳ thực tập bắt đầu (2) để diễn đạt: khuyến khích.",
        examples: [
          { zh: "别放弃！我鼓励你试一试，你的计划很符合要求。", py: "Bié fàngqì! Wǒ gǔlì nǐ shì yi shì, nǐ de jìhuà hěn fúhé yāoqiú.", vi: "Đừng bỏ cuộc! Thầy động viên em thử xem, kế hoạch của em rất hợp yêu cầu." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Văn phòng · Sáng', bg: 'office',
        cast: ['mai', 'laoli'],
        text: 'Thầy Lý giao cho Mai nhiệm vụ tổ chức một buổi tham quan cho nhóm trẻ em.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '这次活动的关键，是让儿童玩得开心。你来当导游，好吗？',
        pinyin: 'Zhè cì huódòng de guānjiàn, shì ràng értóng wán de kāixīn. Nǐ lái dāng dǎoyóu, hǎo ma?',
        meaning: 'Điều then chốt của hoạt động lần này là để các em nhỏ chơi vui. Em làm hướng dẫn viên nhé?',
        expression: 'focused', vocab: ['关键', '儿童', '导游'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '我有点紧张，估计自己做不好……',
        pinyin: 'Wǒ yǒudiǎn jǐnzhāng, gūjì zìjǐ zuò bù hǎo……',
        meaning: 'Em hơi căng thẳng, em ước chừng mình làm không tốt…',
        expression: 'sad', vocab: ['估计'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '别放弃！我鼓励你试一试，你的计划很符合要求。',
        pinyin: 'Bié fàngqì! Wǒ gǔlì nǐ shì yi shì, nǐ de jìhuà hěn fúhé yāoqiú.',
        meaning: 'Đừng bỏ cuộc! Thầy động viên em thử xem, kế hoạch của em rất hợp yêu cầu.',
        expression: 'happy', vocab: ['放弃', '鼓励', '符合'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '好，我不会放弃。请问集合的地址和电话号码是多少？',
        pinyin: 'Hǎo, wǒ bú huì fàngqì. Qǐngwèn jíhé de dìzhǐ hé diànhuà hàomǎ shì duōshǎo?',
        meaning: 'Vâng, em sẽ không bỏ cuộc. Cho em hỏi địa chỉ và số điện thoại tập trung là gì ạ?',
        expression: 'focused', vocab: ['地址', '号码'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '地址我发给你。记得带好名单，否则孩子丢了就麻烦了。',
        pinyin: 'Dìzhǐ wǒ fā gěi nǐ. Jìde dài hǎo míngdān, fǒuzé háizi diū le jiù máfan le.',
        meaning: 'Địa chỉ thầy gửi cho em. Nhớ mang theo danh sách, nếu không trẻ lạc thì phiền lắm.',
        expression: 'focused', vocab: ['否则', '丢'] },
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Trên đường tham quan · Trưa', bg: 'street',
        cast: ['mai'],
        text: 'Buổi chiều, Mai dẫn các em nhỏ đi tham quan.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '这里的风景真美，而孩子们更可爱，大家一边走一边逛。',
        pinyin: 'Zhèlǐ de fēngjǐng zhēn měi, ér háizimen gèng kě\'ài, dàjiā yìbiān zǒu yìbiān guàng.',
        meaning: 'Phong cảnh ở đây thật đẹp, mà bọn trẻ còn đáng yêu hơn, mọi người vừa đi vừa dạo.',
        expression: 'happy', vocab: ['风景', '而', '逛'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '有个孩子一个人，看起来很孤单，我就陪着他。',
        pinyin: 'Yǒu ge háizi yí ge rén, kàn qǐlái hěn gūdān, wǒ jiù péizhe tā.',
        meaning: 'Có một bé đi một mình, trông rất cô đơn, nên tớ đi cùng bé.',
        expression: 'curious', vocab: ['孤单'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '走了这么久，我出了一身汗，有小朋友说肚子饿了。',
        pinyin: 'Zǒu le zhème jiǔ, wǒ chū le yìshēn hàn, yǒu xiǎopéngyǒu shuō dùzi è le.',
        meaning: 'Đi lâu thế này, tớ ra cả mồ hôi, có bé nói bụng đói rồi.',
        expression: 'focused', vocab: ['汗', '肚子'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '表演的时候，有人弹钢琴，孩子们都鼓掌。',
        pinyin: 'Biǎoyǎn de shíhou, yǒu rén tán gāngqín, háizimen dōu gǔzhǎng.',
        meaning: 'Lúc biểu diễn, có người chơi đàn piano, bọn trẻ đều vỗ tay.',
        expression: 'happy', vocab: ['弹', '鼓掌'] },
      { type: 'choice', speaker: 'mai', cast: ['mai'], bg: 'street',
        scene: '📍 Trên đường tham quan',
        expression: 'sad',
        q: 'Một bé suýt lạc, phụ huynh không vui. Mai muốn xin lỗi đúng mực. Câu nào hợp?',
        options: [
          { text: '真对不起，是我没看好，我向您道歉。', pinyin: 'Zhēn duìbuqǐ, shì wǒ méi kàn hǎo, wǒ xiàng nín dàoqiàn.', meaning: 'Thật xin lỗi, là tôi không trông kỹ, tôi xin lỗi anh/chị.', correct: true,
            feedback: 'Đúng! 道歉 = xin lỗi (trang trọng).' },
          { text: '这不符合我的错。', pinyin: 'Zhè bù fúhé wǒ de cuò.', meaning: '(không tự nhiên)', correct: false,
            feedback: '符合 = phù hợp (tiêu chuẩn/yêu cầu), không dùng kiểu này.' },
          { text: '我丢了道歉。', pinyin: 'Wǒ diū le dàoqiàn.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '丢 = đánh mất, không ghép với 道歉.' }
        ], vocab: ['道歉'] },
      { type: 'checkpoint', questions: [
        { q: '“导游” làm công việc gì?', options: ['Hướng dẫn viên du lịch', 'Đầu bếp', 'Bác sĩ', 'Tài xế'], answer: 0 },
        { q: '“鼓励” nghĩa là gì?', options: ['Khuyến khích, động viên', 'Từ chối', 'Chê bai', 'Lừa dối'], answer: 0 },
        { q: 'Trẻ có thể bị “丢”, nghĩa là?', options: ['Bị lạc/mất', 'Vui vẻ', 'Đói bụng', 'Ra mồ hôi'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '弹', p: 'tán', v: 'gảy, chơi (đàn), bật', e: 'crossball' },
      { h: '导游', p: 'dǎo yóu', v: 'hướng dẫn viên du lịch', e: 'tour guide' },
      { h: '道歉', p: 'dào qiàn', v: 'xin lỗi', e: 'to apologize' },
      { h: '地址', p: 'dì zhǐ', v: 'địa chỉ', e: 'address' },
      { h: '丢', p: 'diū', v: 'mất, đánh mất, lạc', e: 'to lose' },
      { h: '肚子', p: 'dù zi', v: 'bụng', e: 'belly' },
      { h: '儿童', p: 'ér tóng', v: 'trẻ em, nhi đồng', e: 'child' },
      { h: '而', p: 'ér', v: 'mà, còn (liên từ)', e: 'and' },
      { h: '放弃', p: 'fàng qì', v: 'từ bỏ, bỏ cuộc', e: 'to renounce' },
      { h: '风景', p: 'fēng jǐng', v: 'phong cảnh', e: 'scenery' },
      { h: '否则', p: 'fǒu zé', v: 'nếu không, bằng không', e: 'otherwise' },
      { h: '符合', p: 'fú hé', v: 'phù hợp', e: 'in keeping with' },
      { h: '估计', p: 'gū jì', v: 'ước tính, ước chừng', e: 'to estimate' },
      { h: '孤单', p: 'gū dān', v: 'cô đơn', e: 'lone' },
      { h: '鼓励', p: 'gǔ lì', v: 'khuyến khích, cổ vũ', e: 'to encourage' },
      { h: '鼓掌', p: 'gǔ zhǎng', v: 'vỗ tay', e: 'to applaud' },
      { h: '关键', p: 'guān jiàn', v: 'then chốt, mấu chốt', e: 'crucial point' },
      { h: '逛', p: 'guàng', v: 'đi dạo, tản bộ', e: 'to stroll' },
      { h: '汗', p: 'hàn', v: 'mồ hôi', e: 'see 汗' },
      { h: '号码', p: 'hào mǎ', v: 'số (điện thoại...)', e: 'number' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '这次活动的___是让大家开心。', options: ['关键', '号码', '肚子'], answer: '关键' },
        { type: 'fill', sentence: '我来当___，带大家参观。', options: ['导游', '风景', '汗'], answer: '导游' },
        { type: 'fill', sentence: '请告诉我你的___和电话。', options: ['地址', '肚子', '汗'], answer: '地址' },
        { type: 'fill', sentence: '老师___我别紧张。', options: ['鼓励', '放弃', '道歉'], answer: '鼓励' },
        { type: 'fill', sentence: '这里的___真美。', options: ['风景', '号码', '肚子'], answer: '风景' }
      ],
      normal: [
        { type: 'fill', sentence: '别___，再试一次就成功了。', options: ['放弃', '鼓掌', '逛'], answer: '放弃' },
        { type: 'fill', sentence: '走了很久，我出了一身___。', options: ['汗', '梦', '材料'], answer: '汗' },
        { type: 'fill', sentence: '记得带名单，___孩子丢了就麻烦。', options: ['否则', '而', '关键'], answer: '否则' },
        { type: 'fill', sentence: '表演完了，大家都___。', options: ['鼓掌', '放弃', '估计'], answer: '鼓掌' },
        { type: 'order', words: ['你', '的', '计划', '很', '符合', '要求'], answer: '你的计划很符合要求' },
        { type: 'order', words: ['一边', '走', '一边', '逛'], answer: '一边走一边逛' },
        { type: 'fill', sentence: '一个人在外，他觉得很___。', options: ['孤单', '活泼', '诚实'], answer: '孤单' }
      ],
      hard: [
        { type: 'fill', sentence: '我___这次大约来五十个孩子。', options: ['估计', '道歉', '鼓掌'], answer: '估计' },
        { type: 'fill', sentence: '是我没看好，我向您___。', options: ['道歉', '符合', '逛'], answer: '道歉' },
        { type: 'translate', prompt: 'Phong cảnh ở đây thật đẹp.', answer: '这里的风景真美。' },
        { type: 'translate', prompt: 'Đừng bỏ cuộc, thầy động viên em thử xem.', answer: '别放弃，我鼓励你试一试。' },
        { type: 'translate', prompt: 'Cho tôi hỏi số điện thoại của bạn là gì?', answer: '请问你的电话号码是多少？' },
        { type: 'fill', sentence: '风景美，___孩子们更可爱。', options: ['而', '否则', '关键'], answer: '而' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 124: Làm quen công ty — 20 từ
  // ─────────────────────────────────────────────────────────────────────────
  124: {
    id: 124,
    level: 4,
    title: 'Làm quen công ty',
    context: 'Thầy Lý giới thiệu cho Mai nội quy và môi trường làm việc: tiền thưởng, cạnh tranh, những điều bị cấm. Tối về Mai viết nhật ký, ghi lại một ngày đầy xúc động.',
    vocabPreview: ['奖金', '获得', '竞争', '禁止', '骄傲'],
    objectives: [
      "Nắm nhóm từ khóa: 奖金 · 获得 · 竞争 · 禁止 · 骄傲",
      "Nghe hiểu và kể lại tình huống Làm quen công ty bằng câu HSK 4",
      "Phân biệt cách dùng 奖金 · 获得 · 竞争",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "奖金 — tiền thưởng",
        explain: "Dùng 奖金 trong ngữ cảnh Làm quen công ty để diễn đạt: tiền thưởng.",
        examples: [
          { zh: "公司每月有奖金，做得好就能获得奖励。", py: "Gōngsī měi yuè yǒu jiǎngjīn, zuò de hǎo jiù néng huòdé jiǎnglì.", vi: "Công ty mỗi tháng có tiền thưởng, làm tốt thì sẽ nhận được phần thưởng." }
        ] },
      { point: "获得 — đạt được",
        explain: "Dùng 获得 trong ngữ cảnh Làm quen công ty để diễn đạt: đạt được.",
        examples: [
          { zh: "公司每月有奖金，做得好就能获得奖励。", py: "Gōngsī měi yuè yǒu jiǎngjīn, zuò de hǎo jiù néng huòdé jiǎnglì.", vi: "Công ty mỗi tháng có tiền thưởng, làm tốt thì sẽ nhận được phần thưởng." }
        ] },
      { point: "竞争 — cạnh tranh",
        explain: "Dùng 竞争 trong ngữ cảnh Làm quen công ty để diễn đạt: cạnh tranh.",
        examples: [
          { zh: "同事们都很活泼，尽管竞争激烈，大家还是互相帮助。", py: "Tóngshìmen dōu hěn huópo, jǐnguǎn jìngzhēng jīliè, dàjiā háishì hùxiāng bāngzhù.", vi: "Các đồng nghiệp đều rất hoạt bát, mặc dù cạnh tranh gay gắt, mọi người vẫn giúp đỡ nhau." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Văn phòng · Buổi chiều', bg: 'office',
        cast: ['mai', 'laoli'],
        text: 'Thầy Lý giới thiệu cho Mai nội quy và môi trường làm việc.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '这是员工手册，很厚，里面写了哪些事被禁止。',
        pinyin: 'Zhè shì yuángōng shǒucè, hěn hòu, lǐmiàn xiě le nǎxiē shì bèi jìnzhǐ.',
        meaning: 'Đây là sổ tay nhân viên, rất dày, bên trong ghi những việc bị cấm.',
        expression: 'focused', vocab: ['厚', '禁止'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '我会仔细读。既然来实习，就要好好表现。',
        pinyin: 'Wǒ huì zǐxì dú. Jìrán lái shíxí, jiù yào hǎohǎo biǎoxiàn.',
        meaning: 'Em sẽ đọc kỹ. Đã đến thực tập thì phải thể hiện cho tốt.',
        expression: 'happy', vocab: ['既然'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '公司每月有奖金，做得好就能获得奖励。',
        pinyin: 'Gōngsī měi yuè yǒu jiǎngjīn, zuò de hǎo jiù néng huòdé jiǎnglì.',
        meaning: 'Công ty mỗi tháng có tiền thưởng, làm tốt thì sẽ nhận được phần thưởng.',
        expression: null, vocab: ['奖金', '获得'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '真的吗？我好激动！即使工作累，我也愿意努力。',
        pinyin: 'Zhēn de ma? Wǒ hǎo jīdòng! Jíshǐ gōngzuò lèi, wǒ yě yuànyì nǔlì.',
        meaning: 'Thật ạ? Em xúc động quá! Dù công việc có mệt, em cũng sẵn lòng cố gắng.',
        expression: 'happy', vocab: ['激动', '即使'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '同事们都很活泼，尽管竞争激烈，大家还是互相帮助。',
        pinyin: 'Tóngshìmen dōu hěn huópo, jǐnguǎn jìngzhēng jīliè, dàjiā háishì hùxiāng bāngzhù.',
        meaning: 'Các đồng nghiệp đều rất hoạt bát, mặc dù cạnh tranh gay gắt, mọi người vẫn giúp đỡ nhau.',
        expression: 'happy', vocab: ['活泼', '尽管', '竞争'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '早上九点在大厅集合开会。对了，这份文件要寄到哪里？',
        pinyin: 'Zǎoshang jiǔ diǎn zài dàtīng jíhé kāihuì. Duìle, zhè fèn wénjiàn yào jì dào nǎlǐ?',
        meaning: 'Chín giờ sáng tập trung ở sảnh họp. À, tài liệu này gửi đến đâu vậy?',
        expression: 'curious', vocab: ['集合', '寄'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '寄到总部。听说今年的目标是减少开支、降低成本。',
        pinyin: 'Jì dào zǒngbù. Tīngshuō jīnnián de mùbiāo shì jiǎnshǎo kāizhī, jiàngdī chéngběn.',
        meaning: 'Gửi đến trụ sở chính. Nghe nói mục tiêu năm nay là giảm chi tiêu, hạ thấp chi phí.',
        expression: null, vocab: ['减少', '降低'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '整天坐着，我得减肥了！',
        pinyin: 'Zhěng tiān zuòzhe, wǒ děi jiǎnféi le!',
        meaning: 'Ngồi cả ngày, tớ phải giảm cân thôi!',
        expression: 'happy', vocab: ['减肥'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'office',
        scene: '📍 Văn phòng',
        expression: 'surprise',
        q: 'Mai ngạc nhiên: một đồng nghiệp ít nói lại giành giải nhất. Diễn đạt "không ngờ anh ấy lại đạt giải" sao cho đúng?',
        options: [
          { text: '他竟然获得了第一名，太厉害了！', pinyin: 'Tā jìngrán huòdé le dì-yī míng, tài lìhai le!', meaning: 'Không ngờ anh ấy lại giành giải nhất, giỏi quá!', correct: true,
            feedback: 'Đúng! 竟然 = không ngờ (ngoài dự đoán).' },
          { text: '他究竟获得了第一名，太厉害了！', pinyin: 'Tā jiūjìng huòdé le dì-yī míng, tài lìhai le!', meaning: '(sai sắc thái)', correct: false,
            feedback: '究竟 = rốt cuộc (dùng để hỏi/truy vấn), không hợp câu cảm thán.' },
          { text: '他极其获得了第一名，太厉害了！', pinyin: 'Tā jíqí huòdé le dì-yī míng, tài lìhai le!', meaning: '(không hợp ngữ pháp)', correct: false,
            feedback: '极其 = vô cùng, chỉ bổ nghĩa tính từ, không dùng với động từ 获得.' }
        ], vocab: ['竟然', '究竟', '极其'] },
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Phòng trọ · Tối', bg: 'dorm-room',
        cast: ['mai'],
        text: 'Tối về, Mai viết nhật ký, hồi tưởng lại một ngày bận rộn.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '今天极其忙，但很充实。我要努力获得奖金，让妈妈为我骄傲。这段回忆我会一直记得。',
        pinyin: 'Jīntiān jíqí máng, dàn hěn chōngshí. Wǒ yào nǔlì huòdé jiǎngjīn, ràng māma wèi wǒ jiāo\'ào. Zhè duàn huíyì wǒ huì yìzhí jìde.',
        meaning: 'Hôm nay vô cùng bận, nhưng rất sung túc. Mình phải cố giành tiền thưởng, để mẹ tự hào về mình. Ký ức này mình sẽ luôn nhớ.',
        expression: 'happy', vocab: ['极其', '骄傲', '回忆'] },
      { type: 'checkpoint', questions: [
        { q: '“奖金” là gì?', options: ['Tiền thưởng', 'Tiền phạt', 'Học phí', 'Tiền thuê'], answer: 0 },
        { q: '“禁止” nghĩa là?', options: ['Cấm', 'Cho phép', 'Khuyến khích', 'Giảm giá'], answer: 0 },
        { q: '“既然来实习，就要好好表现” — “既然” biểu thị?', options: ['Đã (vậy thì)', 'Nếu không', 'Tuy nhiên', 'Dù cho'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '厚', p: 'hòu', v: 'dày', e: 'thick' },
      { h: '回忆', p: 'huí yì', v: 'hồi tưởng, ký ức', e: 'to recall' },
      { h: '活泼', p: 'huó po', v: 'hoạt bát, sôi nổi', e: 'lively' },
      { h: '获得', p: 'huò dé', v: 'đạt được, giành được', e: 'to obtain' },
      { h: '激动', p: 'jī dòng', v: 'xúc động, hồi hộp', e: 'to move emotionally' },
      { h: '即使', p: 'jí shǐ', v: 'dù cho, cho dù', e: 'even if' },
      { h: '极其', p: 'jí qí', v: 'vô cùng, cực kỳ', e: 'extremely' },
      { h: '集合', p: 'jí hé', v: 'tập hợp, tập trung', e: 'to gather' },
      { h: '既然', p: 'jì rán', v: 'đã (vậy thì)', e: 'since' },
      { h: '寄', p: 'jì', v: 'gửi (thư, bưu kiện)', e: 'to send' },
      { h: '减肥', p: 'jiǎn féi', v: 'giảm cân', e: 'to lose weight' },
      { h: '减少', p: 'jiǎn shǎo', v: 'giảm bớt', e: 'to lessen' },
      { h: '奖金', p: 'jiǎng jīn', v: 'tiền thưởng', e: 'premium' },
      { h: '降低', p: 'jiàng dī', v: 'hạ thấp, giảm', e: 'to reduce' },
      { h: '骄傲', p: 'jiāo ào', v: 'tự hào, kiêu ngạo', e: 'pride' },
      { h: '尽管', p: 'jǐn guǎn', v: 'mặc dù', e: 'despite' },
      { h: '禁止', p: 'jìn zhǐ', v: 'cấm, cấm chỉ', e: 'to prohibit' },
      { h: '竞争', p: 'jìng zhēng', v: 'cạnh tranh', e: 'to compete' },
      { h: '竟然', p: 'jìng rán', v: 'không ngờ, lại', e: 'unexpectedly' },
      { h: '究竟', p: 'jiū jìng', v: 'rốt cuộc, đến cùng', e: 'to go to the bottom of a matter' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '公司每月有___，做得好就有。', options: ['奖金', '回忆', '汗'], answer: '奖金' },
        { type: 'fill', sentence: '办公室里___抽烟。', options: ['禁止', '获得', '集合'], answer: '禁止' },
        { type: 'fill', sentence: '这本手册很___。', options: ['厚', '活泼', '激动'], answer: '厚' },
        { type: 'fill', sentence: '九点在大厅___开会。', options: ['集合', '减肥', '寄'], answer: '集合' },
        { type: 'fill', sentence: '我好___，终于成功了！', options: ['激动', '禁止', '降低'], answer: '激动' }
      ],
      normal: [
        { type: 'fill', sentence: '做得好就能___奖励。', options: ['获得', '减少', '寄'], answer: '获得' },
        { type: 'fill', sentence: '今年要___成本、降低开支。', options: ['减少', '获得', '集合'], answer: '减少' },
        { type: 'fill', sentence: '___工作很累，我也愿意努力。', options: ['即使', '既然', '究竟'], answer: '即使' },
        { type: 'fill', sentence: '___来实习，就要好好表现。', options: ['既然', '即使', '尽管'], answer: '既然' },
        { type: 'order', words: ['这', '份', '文件', '要', '寄', '到', '总部'], answer: '这份文件要寄到总部' },
        { type: 'order', words: ['尽管', '竞争', '激烈', '大家', '还是', '互相', '帮助'], answer: '尽管竞争激烈大家还是互相帮助' },
        { type: 'fill', sentence: '同事们都很___，工作很开心。', options: ['活泼', '骄傲', '厚'], answer: '活泼' }
      ],
      hard: [
        { type: 'fill', sentence: '他___获得了第一名，真没想到。', options: ['竟然', '即使', '尽管'], answer: '竟然' },
        { type: 'fill', sentence: '我要努力，让妈妈为我___。', options: ['骄傲', '禁止', '减肥'], answer: '骄傲' },
        { type: 'translate', prompt: 'Hôm nay vô cùng bận, nhưng rất sung túc.', answer: '今天极其忙，但很充实。' },
        { type: 'translate', prompt: 'Làm tốt thì sẽ nhận được tiền thưởng.', answer: '做得好就能获得奖金。' },
        { type: 'translate', prompt: 'Mặc dù cạnh tranh gay gắt, mọi người vẫn giúp đỡ nhau.', answer: '尽管竞争激烈，大家还是互相帮助。' },
        { type: 'fill', sentence: '这段___我会一直记得。', options: ['回忆', '奖金', '竞争'], answer: '回忆' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 125: Họp nhóm đầu tiên — 20 từ
  // ─────────────────────────────────────────────────────────────────────────
  125: {
    id: 125,
    level: 4,
    title: 'Họp nhóm đầu tiên',
    context: 'Cuộc họp nhóm đầu tiên bàn cách mở rộng dự án. Một kế hoạch hay bị từ chối vì thiếu kinh phí, nhưng thầy Lý động viên cả nhóm đừng nản lòng.',
    vocabPreview: ['扩大', '拒绝', '肯定', '厉害', '可惜'],
    objectives: [
      "Nắm nhóm từ khóa: 扩大 · 拒绝 · 肯定 · 厉害 · 可惜",
      "Nghe hiểu và kể lại tình huống Họp nhóm đầu tiên bằng câu HSK 4",
      "Phân biệt cách dùng 扩大 · 拒绝 · 肯定",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "扩大 — mở rộng",
        explain: "Dùng 扩大 trong ngữ cảnh Họp nhóm đầu tiên để diễn đạt: mở rộng.",
        examples: [
          { zh: "今天我们俩组开会，讨论怎么扩大这个项目。", py: "Jīntiān wǒmen liǎ zǔ kāihuì, tǎolùn zěnme kuòdà zhège xiàngmù.", vi: "Hôm nay hai nhóm chúng ta họp, bàn cách mở rộng dự án này." }
        ] },
      { point: "拒绝 — từ chối",
        explain: "Dùng 拒绝 trong ngữ cảnh Họp nhóm đầu tiên để diễn đạt: từ chối.",
        examples: [
          { zh: "那个被拒绝的同事好可怜，他差点流泪。", py: "Nàge bèi jùjué de tóngshì hǎo kělián, tā chàdiǎn liúlèi.", vi: "Đồng nghiệp bị từ chối ấy thật đáng thương, anh ấy suýt rơi nước mắt." }
        ] },
      { point: "肯定 — chắc chắn",
        explain: "Dùng 肯定 trong ngữ cảnh Họp nhóm đầu tiên để diễn đạt: chắc chắn.",
        examples: [
          { zh: "我肯定支持！不过时间很紧，怕来不及。", py: "Wǒ kěndìng zhīchí! Búguò shíjiān hěn jǐn, pà láibují.", vi: "Tớ chắc chắn ủng hộ! Nhưng thời gian gấp, sợ không kịp." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Phòng họp · Sáng', bg: 'office',
        cast: ['mai', 'laoli'],
        text: 'Cuộc họp nhóm đầu tiên bắt đầu, bàn cách mở rộng dự án.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '今天我们俩组开会，讨论怎么扩大这个项目。',
        pinyin: 'Jīntiān wǒmen liǎ zǔ kāihuì, tǎolùn zěnme kuòdà zhège xiàngmù.',
        meaning: 'Hôm nay hai nhóm chúng ta họp, bàn cách mở rộng dự án này.',
        expression: 'focused', vocab: ['俩', '扩大'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我肯定支持！不过时间很紧，怕来不及。',
        pinyin: 'Wǒ kěndìng zhīchí! Búguò shíjiān hěn jǐn, pà láibují.',
        meaning: 'Tớ chắc chắn ủng hộ! Nhưng thời gian gấp, sợ không kịp.',
        expression: 'curious', vocab: ['肯定', '来不及'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '现在开始还来得及，别马虎，也别偷懒。',
        pinyin: 'Xiànzài kāishǐ hái láidejí, bié mǎhu, yě bié tōulǎn.',
        meaning: 'Bây giờ bắt đầu vẫn kịp, đừng cẩu thả, cũng đừng lười.',
        expression: 'focused', vocab: ['来得及', '马虎', '懒'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '我有个想法，可以缩短和客户的距离。',
        pinyin: 'Wǒ yǒu ge xiǎngfǎ, kěyǐ suōduǎn hé kèhù de jùlí.',
        meaning: 'Em có một ý tưởng, có thể rút ngắn khoảng cách với khách hàng.',
        expression: 'happy', vocab: ['距离'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '这个主意真厉害！不过需要大家多花点力气。',
        pinyin: 'Zhège zhǔyi zhēn lìhai! Búguò xūyào dàjiā duō huā diǎn lìqi.',
        meaning: 'Ý tưởng này thật lợi hại! Nhưng cần mọi người bỏ thêm chút sức.',
        expression: 'happy', vocab: ['厉害', '力气'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '系统要密码才能登录，我去问一下。',
        pinyin: 'Xìtǒng yào mìmǎ cáinéng dēnglù, wǒ qù wèn yíxià.',
        meaning: 'Hệ thống cần mật khẩu mới đăng nhập được, em đi hỏi một chút.',
        expression: 'focused', vocab: ['密码'] },
      { type: 'choice', speaker: 'laoli', cast: ['mai', 'laoli'], bg: 'office',
        scene: '📍 Phòng họp',
        expression: 'sad',
        q: 'Một kế hoạch hay bị từ chối vì thiếu kinh phí. Diễn đạt "Thật đáng tiếc, kế hoạch bị từ chối" sao cho đúng?',
        options: [
          { text: '真可惜，这个计划被拒绝了。', pinyin: 'Zhēn kěxī, zhège jìhuà bèi jùjué le.', meaning: 'Thật đáng tiếc, kế hoạch này bị từ chối rồi.', correct: true,
            feedback: 'Đúng! 可惜 = đáng tiếc; 拒绝 = từ chối.' },
          { text: '真可怜，这个计划被拒绝了。', pinyin: 'Zhēn kělián, zhège jìhuà bèi jùjué le.', meaning: '(sai sắc thái)', correct: false,
            feedback: '可怜 = đáng thương (cho người/sinh vật), không hợp với "kế hoạch".' },
          { text: '真宽，这个计划被拒绝了。', pinyin: 'Zhēn kuān, zhège jìhuà bèi jùjué le.', meaning: '(không liên quan)', correct: false,
            feedback: '宽 = rộng, không hợp nghĩa ở đây.' }
        ], vocab: ['可惜', '拒绝'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '别灰心。这条路宽得很，机会还多。',
        pinyin: 'Bié huīxīn. Zhè tiáo lù kuān de hěn, jīhuì hái duō.',
        meaning: 'Đừng nản. Con đường này rộng lắm, cơ hội còn nhiều.',
        expression: 'happy', vocab: ['宽'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '老师说得对。我昨晚做了个梦，梦见我们成功了，真浪漫。',
        pinyin: 'Lǎoshī shuō de duì. Wǒ zuó wǎn zuò le ge mèng, mèngjiàn wǒmen chénggōng le, zhēn làngmàn.',
        meaning: 'Thầy nói đúng. Tối qua em mơ một giấc, mơ thấy chúng ta thành công, thật lãng mạn.',
        expression: 'happy', vocab: ['梦', '浪漫'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '那个被拒绝的同事好可怜，他差点流泪。',
        pinyin: 'Nàge bèi jùjué de tóngshì hǎo kělián, tā chàdiǎn liúlèi.',
        meaning: 'Đồng nghiệp bị từ chối ấy thật đáng thương, anh ấy suýt rơi nước mắt.',
        expression: 'sad', vocab: ['可怜', '流泪'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '我请了一位律师帮我们看合同。记得把废纸扔进垃圾桶。',
        pinyin: 'Wǒ qǐng le yí wèi lǜshī bāng wǒmen kàn hétong. Jìde bǎ fèizhǐ rēng jìn lājītǒng.',
        meaning: 'Thầy đã mời một luật sư giúp xem hợp đồng. Nhớ vứt giấy vụn vào thùng rác nhé.',
        expression: null, vocab: ['律师', '垃圾桶'] },
      { type: 'checkpoint', questions: [
        { q: '“来不及” nghĩa là?', options: ['Không kịp', 'Vừa kịp', 'Rảnh rỗi', 'Lười biếng'], answer: 0 },
        { q: '“拒绝” nghĩa là?', options: ['Từ chối', 'Đồng ý', 'Mở rộng', 'Khẳng định'], answer: 0 },
        { q: '“扩大项目” — “扩大” nghĩa là?', options: ['Mở rộng', 'Thu nhỏ', 'Hủy bỏ', 'Trì hoãn'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '拒绝', p: 'jù jué', v: 'từ chối', e: 'to refuse' },
      { h: '距离', p: 'jù lí', v: 'khoảng cách', e: 'distance' },
      { h: '可怜', p: 'kě lián', v: 'đáng thương', e: 'pitiful' },
      { h: '可惜', p: 'kě xī', v: 'tiếc, đáng tiếc', e: 'it is a pity' },
      { h: '肯定', p: 'kěn dìng', v: 'chắc chắn, khẳng định', e: 'to be certain' },
      { h: '宽', p: 'kuān', v: 'rộng', e: 'wide, broad, lenient' },
      { h: '扩大', p: 'kuò dà', v: 'mở rộng', e: 'to expand' },
      { h: '垃圾桶', p: 'lā jī tǒng', v: 'thùng rác', e: 'rubbish bin' },
      { h: '来不及', p: 'lái bu jí', v: 'không kịp', e: 'there\'s not enough time (to do sth)' },
      { h: '来得及', p: 'lái de jí', v: 'kịp, còn kịp', e: 'to have enough time' },
      { h: '懒', p: 'lǎn', v: 'lười biếng', e: 'lazy, idle' },
      { h: '浪漫', p: 'làng màn', v: 'lãng mạn', e: 'romantic' },
      { h: '力气', p: 'lì qi', v: 'sức lực', e: 'strength' },
      { h: '厉害', p: 'lì hai', v: 'ghê gớm, lợi hại, giỏi', e: 'awesome, impressive, formidable' },
      { h: '俩', p: 'liǎ', v: 'hai (người/cái)', e: 'two (colloquial equivalent of 两个)' },
      { h: '流泪', p: 'liú lèi', v: 'rơi nước mắt', e: 'to shed tears' },
      { h: '律师', p: 'lǜ shī', v: 'luật sư', e: 'lawyer' },
      { h: '马虎', p: 'mǎ hu', v: 'cẩu thả, qua loa', e: 'careless' },
      { h: '梦', p: 'mèng', v: 'giấc mơ', e: 'dream' },
      { h: '密码', p: 'mì mǎ', v: 'mật khẩu', e: 'cipher' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我们要___这个项目。', options: ['扩大', '拒绝', '流泪'], answer: '扩大' },
        { type: 'fill', sentence: '系统要___才能登录。', options: ['密码', '力气', '距离'], answer: '密码' },
        { type: 'fill', sentence: '这个主意真___！', options: ['厉害', '懒', '宽'], answer: '厉害' },
        { type: 'fill', sentence: '把废纸扔进___。', options: ['垃圾桶', '密码', '律师'], answer: '垃圾桶' },
        { type: 'fill', sentence: '我___支持你的想法。', options: ['肯定', '拒绝', '马虎'], answer: '肯定' }
      ],
      normal: [
        { type: 'fill', sentence: '时间很紧，怕___。', options: ['来不及', '来得及', '扩大'], answer: '来不及' },
        { type: 'fill', sentence: '现在开始还___。', options: ['来得及', '来不及', '拒绝'], answer: '来得及' },
        { type: 'fill', sentence: '做事别___，要认真。', options: ['马虎', '肯定', '浪漫'], answer: '马虎' },
        { type: 'fill', sentence: '这个计划被___了，真可惜。', options: ['拒绝', '扩大', '集合'], answer: '拒绝' },
        { type: 'order', words: ['这', '条', '路', '宽', '得', '很'], answer: '这条路宽得很' },
        { type: 'order', words: ['可以', '缩短', '和', '客户', '的', '距离'], answer: '可以缩短和客户的距离' },
        { type: 'fill', sentence: '他差点___，太难过了。', options: ['流泪', '减肥', '集合'], answer: '流泪' }
      ],
      hard: [
        { type: 'fill', sentence: '这个计划被拒绝了，真___。', options: ['可惜', '可怜', '厉害'], answer: '可惜' },
        { type: 'fill', sentence: '完成这件事需要不少___。', options: ['力气', '密码', '距离'], answer: '力气' },
        { type: 'translate', prompt: 'Tớ chắc chắn ủng hộ ý tưởng của cậu.', answer: '我肯定支持你的想法。' },
        { type: 'translate', prompt: 'Bây giờ bắt đầu vẫn còn kịp.', answer: '现在开始还来得及。' },
        { type: 'translate', prompt: 'Tôi đã mời một luật sư giúp xem hợp đồng.', answer: '我请了一位律师帮我们看合同。' },
        { type: 'fill', sentence: '我做了个___，梦见我们成功了。', options: ['梦', '懒', '俩'], answer: '梦' }
      ]
    }
  }

});

// ───────────────────────────────────────────────────────
// BATCH 2 — Bài 126-129 (Nhận nhiệm vụ · Giải quyết vấn đề · Giao tiếp)
// ───────────────────────────────────────────────────────
Object.assign(COURSE_DATA, {

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 126: Nhận nhiệm vụ — 20 từ
  // ─────────────────────────────────────────────────────────────────────────
  126: {
    id: 126,
    level: 4,
    title: 'Nhận nhiệm vụ',
    context: 'Mai nhận nhiệm vụ thật đầu tiên: giúp một học viên nước ngoài làm hồ sơ xin visa. Em gặp vài trục trặc, nhưng học cách giữ bình tĩnh và không nản.',
    vocabPreview: ['申请', '签证', '失望', '稍微', '师傅'],
    objectives: [
      "Nắm nhóm từ khóa: 申请 · 签证 · 失望 · 稍微 · 师傅",
      "Nghe hiểu và kể lại tình huống Nhận nhiệm vụ bằng câu HSK 4",
      "Phân biệt cách dùng 申请 · 签证 · 失望",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "申请 — nộp đơn",
        explain: "Dùng 申请 trong ngữ cảnh Nhận nhiệm vụ để diễn đạt: nộp đơn.",
        examples: [
          { zh: "有个学生要申请签证，你帮他准备材料，好吗？", py: "Yǒu ge xuésheng yào shēnqǐng qiānzhèng, nǐ bāng tā zhǔnbèi cáiliào, hǎo ma?", vi: "Có một học viên cần xin visa, em giúp bạn ấy chuẩn bị hồ sơ nhé?" }
        ] },
      { point: "签证 — thị thực",
        explain: "Dùng 签证 trong ngữ cảnh Nhận nhiệm vụ để diễn đạt: thị thực.",
        examples: [
          { zh: "有个学生要申请签证，你帮他准备材料，好吗？", py: "Yǒu ge xuésheng yào shēnqǐng qiānzhèng, nǐ bāng tā zhǔnbèi cáiliào, hǎo ma?", vi: "Có một học viên cần xin visa, em giúp bạn ấy chuẩn bị hồ sơ nhé?" }
        ] },
      { point: "失望 — thất vọng",
        explain: "Dùng 失望 trong ngữ cảnh Nhận nhiệm vụ để diễn đạt: thất vọng.",
        examples: [
          { zh: "别急。第一次难免会失败，别失望。", py: "Bié jí. Dì-yī cì nánmiǎn huì shībài, bié shīwàng.", vi: "Đừng vội. Lần đầu khó tránh thất bại, đừng thất vọng." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Văn phòng · Sáng', bg: 'office',
        cast: ['mai', 'laoli'],
        text: 'Thầy Lý giao cho Mai một nhiệm vụ thật: hỗ trợ một học viên làm hồ sơ visa.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '有个学生要申请签证，你帮他准备材料，好吗？',
        pinyin: 'Yǒu ge xuésheng yào shēnqǐng qiānzhèng, nǐ bāng tā zhǔnbèi cáiliào, hǎo ma?',
        meaning: 'Có một học viên cần xin visa, em giúp bạn ấy chuẩn bị hồ sơ nhé?',
        expression: 'focused', vocab: ['申请', '签证'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '没问题！需要把这些文件排列好吗？',
        pinyin: 'Méi wèntí! Xūyào bǎ zhèxiē wénjiàn páiliè hǎo ma?',
        meaning: 'Không vấn đề gì! Có cần sắp xếp các giấy tờ này lại không ạ?',
        expression: 'happy', vocab: ['排列'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '对。这项服务对学生是免费的。',
        pinyin: 'Duì. Zhè xiàng fúwù duì xuésheng shì miǎnfèi de.',
        meaning: 'Đúng. Dịch vụ này miễn phí cho học viên.',
        expression: null, vocab: ['免费'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '太好了。偶尔有学生迟到，我会去敲门叫他。',
        pinyin: 'Tài hǎo le. Ǒu\'ěr yǒu xuésheng chídào, wǒ huì qù qiāo mén jiào tā.',
        meaning: 'Tốt quá. Thỉnh thoảng có học viên đến muộn, em sẽ đi gõ cửa gọi bạn ấy.',
        expression: 'happy', vocab: ['偶尔', '敲'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '然而有的材料还没齐，剩下几份明天补。',
        pinyin: 'Rán\'ér yǒude cáiliào hái méi qí, shèngxià jǐ fèn míngtiān bǔ.',
        meaning: 'Tuy nhiên một số giấy tờ chưa đủ, còn lại vài bản mai bổ sung.',
        expression: 'focused', vocab: ['然而', '剩'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '别急。第一次难免会失败，别失望。',
        pinyin: 'Bié jí. Dì-yī cì nánmiǎn huì shībài, bié shīwàng.',
        meaning: 'Đừng vội. Lần đầu khó tránh thất bại, đừng thất vọng.',
        expression: 'happy', vocab: ['失败', '失望'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '有个人骗我，说材料齐了，其实没有，我有点生气。',
        pinyin: 'Yǒu ge rén piàn wǒ, shuō cáiliào qí le, qíshí méiyǒu, wǒ yǒudiǎn shēngqì.',
        meaning: 'Có người lừa tôi, nói hồ sơ đủ rồi, thật ra chưa, tôi hơi bực.',
        expression: 'sad', vocab: ['骗'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '别发脾气。他可能只是穷，怕花钱。',
        pinyin: 'Bié fā píqi. Tā kěnéng zhǐshì qióng, pà huā qián.',
        meaning: 'Đừng nổi nóng. Có thể bạn ấy chỉ nghèo, sợ tốn tiền.',
        expression: 'focused', vocab: ['脾气', '穷'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '我稍微冷静一下，甚至想帮他想办法。',
        pinyin: 'Wǒ shāowēi lěngjìng yíxià, shènzhì xiǎng bāng tā xiǎng bànfǎ.',
        meaning: 'Em bình tĩnh lại một chút, thậm chí còn muốn giúp bạn ấy nghĩ cách.',
        expression: 'curious', vocab: ['稍微', '甚至'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'laoli'], bg: 'office',
        scene: '📍 Văn phòng',
        expression: 'curious',
        q: 'Một cái ghế bị hỏng. Mai muốn nói "Nhờ bác thợ sửa giúp, đừng vứt đi". Câu nào đúng?',
        options: [
          { text: '请师傅修一下，别扔了。', pinyin: 'Qǐng shīfu xiū yíxià, bié rēng le.', meaning: 'Nhờ bác thợ sửa giúp, đừng vứt đi.', correct: true,
            feedback: 'Đúng! 师傅 = bác thợ/sư phụ; 扔 = vứt.' },
          { text: '请脾气修一下，别扔了。', pinyin: 'Qǐng píqi xiū yíxià, bié rēng le.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '脾气 = tính khí, không phải người thợ.' },
          { text: '请师傅修一下，别软了。', pinyin: 'Qǐng shīfu xiū yíxià, bié ruǎn le.', meaning: '(không thông)', correct: false,
            feedback: '软 = mềm, không phải "vứt bỏ".' }
        ], vocab: ['师傅', '扔', '软'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '沙发有点软，但还能用。下班我去逛逛热闹的夜市，把今天的事写进日记。',
        pinyin: 'Shāfā yǒudiǎn ruǎn, dàn hái néng yòng. Xiàbān wǒ qù guàngguàng rènao de yèshì, bǎ jīntiān de shì xiě jìn rìjì.',
        meaning: 'Ghế sô-pha hơi mềm nhưng vẫn dùng được. Tan làm tôi đi dạo chợ đêm nhộn nhịp, ghi chuyện hôm nay vào nhật ký.',
        expression: 'happy', vocab: ['软', '热闹', '日记'] },
      { type: 'checkpoint', questions: [
        { q: '“申请签证” nghĩa là?', options: ['Xin/nộp đơn visa', 'Hủy visa', 'Gia hạn hộ chiếu', 'Mua vé'], answer: 0 },
        { q: '“免费” nghĩa là?', options: ['Miễn phí', 'Đắt đỏ', 'Trả góp', 'Giảm giá'], answer: 0 },
        { q: '“别发脾气” — “脾气” chỉ điều gì?', options: ['Tính khí, sự nóng giận', 'Sức lực', 'Giấc mơ', 'Khoảng cách'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '免费', p: 'miǎn fèi', v: 'miễn phí', e: 'free (of charge)' },
      { h: '偶尔', p: 'ǒu ěr', v: 'thỉnh thoảng', e: 'occasionally' },
      { h: '排列', p: 'pái liè', v: 'sắp xếp', e: 'to arrange in order' },
      { h: '脾气', p: 'pí qi', v: 'tính khí, tính nết', e: 'character' },
      { h: '骗', p: 'piàn', v: 'lừa dối', e: 'to cheat' },
      { h: '签证', p: 'qiān zhèng', v: 'thị thực, visa', e: 'visa' },
      { h: '敲', p: 'qiāo', v: 'gõ, đánh', e: 'to hit' },
      { h: '穷', p: 'qióng', v: 'nghèo', e: 'poor' },
      { h: '然而', p: 'rán ér', v: 'tuy nhiên, nhưng', e: 'however' },
      { h: '热闹', p: 'rè nao', v: 'nhộn nhịp, náo nhiệt', e: 'bustling with noise and excitement' },
      { h: '扔', p: 'rēng', v: 'ném, vứt', e: 'to throw' },
      { h: '日记', p: 'rì jì', v: 'nhật ký', e: 'diary' },
      { h: '软', p: 'ruǎn', v: 'mềm', e: 'soft' },
      { h: '稍微', p: 'shāo wēi', v: 'hơi, đôi chút', e: 'a little bit' },
      { h: '申请', p: 'shēn qǐng', v: 'nộp đơn, đăng ký', e: 'to apply for sth' },
      { h: '甚至', p: 'shèn zhì', v: 'thậm chí', e: 'even' },
      { h: '剩', p: 'shèng', v: 'còn lại, thừa', e: 'to remain' },
      { h: '失败', p: 'shī bài', v: 'thất bại', e: 'to be defeated' },
      { h: '失望', p: 'shī wàng', v: 'thất vọng', e: 'disappointed' },
      { h: '师傅', p: 'shī fu', v: 'bác thợ, sư phụ', e: 'master' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '他要___签证去中国学习。', options: ['申请', '骗', '剩'], answer: '申请' },
        { type: 'fill', sentence: '这项服务是___的，不要钱。', options: ['免费', '热闹', '软'], answer: '免费' },
        { type: 'fill', sentence: '请把这些文件___好。', options: ['排列', '失望', '敲'], answer: '排列' },
        { type: 'fill', sentence: '有人来了，去___门。', options: ['敲', '扔', '剩'], answer: '敲' },
        { type: 'fill', sentence: '别发___，慢慢说。', options: ['脾气', '签证', '日记'], answer: '脾气' }
      ],
      normal: [
        { type: 'fill', sentence: '第一次难免会___，别灰心。', options: ['失败', '免费', '排列'], answer: '失败' },
        { type: 'fill', sentence: '材料没齐，___下几份明天补。', options: ['剩', '骗', '敲'], answer: '剩' },
        { type: 'fill', sentence: '有人___我，说材料齐了。', options: ['骗', '剩', '排列'], answer: '骗' },
        { type: 'fill', sentence: '___有学生迟到，我去叫他。', options: ['偶尔', '甚至', '然而'], answer: '偶尔' },
        { type: 'order', words: ['这', '项', '服务', '是', '免费', '的'], answer: '这项服务是免费的' },
        { type: 'order', words: ['请', '师傅', '修', '一下', '别', '扔', '了'], answer: '请师傅修一下别扔了' },
        { type: 'fill', sentence: '我___冷静一下再说。', options: ['稍微', '免费', '热闹'], answer: '稍微' }
      ],
      hard: [
        { type: 'fill', sentence: '他可能只是___，怕花钱。', options: ['穷', '软', '剩'], answer: '穷' },
        { type: 'fill', sentence: '我把今天的事写进___。', options: ['日记', '签证', '脾气'], answer: '日记' },
        { type: 'translate', prompt: 'Đừng nổi nóng, từ từ nói.', answer: '别发脾气，慢慢说。' },
        { type: 'translate', prompt: 'Lần đầu khó tránh thất bại, đừng thất vọng.', answer: '第一次难免会失败，别失望。' },
        { type: 'translate', prompt: 'Dịch vụ này miễn phí cho học viên.', answer: '这项服务对学生是免费的。' },
        { type: 'fill', sentence: '___有些材料还没齐。', options: ['然而', '免费', '稍微'], answer: '然而' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 127: Giải quyết vấn đề (1) — 20 từ
  // ─────────────────────────────────────────────────────────────────────────
  127: {
    id: 127,
    level: 4,
    title: 'Giải quyết vấn đề (1)',
    context: 'Mai ra ngoài mua đồ và xử lý vài việc vặt, rồi về văn phòng dọn dẹp. Em trò chuyện về ô nhiễm môi trường và học cách đồng cảm với đồng nghiệp.',
    vocabPreview: ['顺便', '收拾', '污染', '提供', '吸引'],
    objectives: [
      "Nắm nhóm từ khóa: 顺便 · 收拾 · 污染 · 提供 · 吸引",
      "Nghe hiểu và kể lại tình huống Giải quyết vấn đề (1) bằng câu HSK 4",
      "Phân biệt cách dùng 顺便 · 收拾 · 污染",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "顺便 — tiện thể",
        explain: "Dùng 顺便 trong ngữ cảnh Giải quyết vấn đề (1) để diễn đạt: tiện thể.",
        examples: [
          { zh: "我去超市一趟，顺便买点西红柿。", py: "Wǒ qù chāoshì yí tàng, shùnbiàn mǎi diǎn xīhóngshì.", vi: "Tôi đi siêu thị một chuyến, tiện thể mua ít cà chua." }
        ] },
      { point: "收拾 — dọn dẹp",
        explain: "Dùng 收拾 trong ngữ cảnh Giải quyết vấn đề (1) để diễn đạt: dọn dẹp.",
        examples: [
          { zh: "帮我收拾一下桌子，把箱子抬到那边。", py: "Bāng wǒ shōushi yíxià zhuōzi, bǎ xiāngzi tái dào nàbiān.", vi: "Giúp thầy dọn cái bàn một chút, khiêng cái thùng sang bên kia." }
        ] },
      { point: "污染 — ô nhiễm",
        explain: "Dùng 污染 trong ngữ cảnh Giải quyết vấn đề (1) để diễn đạt: ô nhiễm.",
        examples: [
          { zh: "我最讨厌污染。这条新闻很吸引人，正好讲减少污染。", py: "Wǒ zuì tǎoyàn wūrǎn. Zhè tiáo xīnwén hěn xīyǐn rén, zhènghǎo jiǎng jiǎnshǎo wūrǎn.", vi: "Em ghét nhất ô nhiễm. Bản tin này rất thu hút, vừa hay nói về giảm ô nhiễm." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Cửa hàng · Chiều', bg: 'shop',
        cast: ['mai', 'fuwuyuan'],
        text: 'Buổi chiều, Mai ra siêu thị mua đồ và xử lý vài việc.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '我去超市一趟，顺便买点西红柿。',
        pinyin: 'Wǒ qù chāoshì yí tàng, shùnbiàn mǎi diǎn xīhóngshì.',
        meaning: 'Tôi đi siêu thị một chuyến, tiện thể mua ít cà chua.',
        expression: 'happy', vocab: ['趟', '顺便', '西红柿'] },
      { type: 'dialogue', speaker: 'fuwuyuan', cast: ['mai', 'fuwuyuan'],
        text: '欢迎光临！本店提供免费包装。',
        pinyin: 'Huānyíng guānglín! Běn diàn tígōng miǎnfèi bāozhuāng.',
        meaning: 'Hoan nghênh quý khách! Cửa hàng có gói hàng miễn phí.',
        expression: 'happy', vocab: ['提供'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'fuwuyuan'],
        text: '这位售货员很熟悉商品，货架也按顺序排好了。',
        pinyin: 'Zhè wèi shòuhuòyuán hěn shúxī shāngpǐn, huòjià yě àn shùnxù pái hǎo le.',
        meaning: 'Nhân viên bán hàng này rất thông thạo hàng hóa, kệ hàng cũng được xếp theo thứ tự.',
        expression: 'curious', vocab: ['售货员', '熟悉', '顺序'] },
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Văn phòng · Chiều muộn', bg: 'office',
        cast: ['mai', 'laoli'],
        text: 'Về văn phòng, Mai giúp thầy Lý dọn dẹp.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '帮我收拾一下桌子，把箱子抬到那边。',
        pinyin: 'Bāng wǒ shōushi yíxià zhuōzi, bǎ xiāngzi tái dào nàbiān.',
        meaning: 'Giúp thầy dọn cái bàn một chút, khiêng cái thùng sang bên kia.',
        expression: 'focused', vocab: ['收拾', '抬'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '好。搬完我有点累，想躺一会儿。',
        pinyin: 'Hǎo. Bān wán wǒ yǒudiǎn lèi, xiǎng tǎng yíhuìr.',
        meaning: 'Vâng. Khiêng xong em hơi mệt, muốn nằm một lát.',
        expression: 'focused', vocab: ['躺'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '随着天气变热，空气有点湿润。记得提醒大家关窗。',
        pinyin: 'Suízhe tiānqì biàn rè, kōngqì yǒudiǎn shīrùn. Jìde tíxǐng dàjiā guān chuāng.',
        meaning: 'Theo thời tiết nóng lên, không khí hơi ẩm. Nhớ nhắc mọi người đóng cửa sổ.',
        expression: null, vocab: ['随着', '湿润', '提醒'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '我最讨厌污染。这条新闻很吸引人，正好讲减少污染。',
        pinyin: 'Wǒ zuì tǎoyàn wūrǎn. Zhè tiáo xīnwén hěn xīyǐn rén, zhènghǎo jiǎng jiǎnshǎo wūrǎn.',
        meaning: 'Em ghét nhất ô nhiễm. Bản tin này rất thu hút, vừa hay nói về giảm ô nhiễm.',
        expression: 'curious', vocab: ['讨厌', '污染', '吸引'] },
      { type: 'choice', speaker: 'laoli', cast: ['mai', 'laoli'], bg: 'office',
        scene: '📍 Văn phòng',
        expression: 'focused',
        q: 'Trời nóng, cuộc họp bị dời lại. Diễn đạt "Cuộc họp dời lại rồi, cậu cởi áo khoác ra đi" sao cho đúng?',
        options: [
          { text: '会议推迟了，你把外套脱了吧。', pinyin: 'Huìyì tuīchí le, nǐ bǎ wàitào tuō le ba.', meaning: 'Cuộc họp dời lại rồi, cậu cởi áo khoác ra đi.', correct: true,
            feedback: 'Đúng! 推迟 = dời lại; 脱 = cởi.' },
          { text: '会议无了，你把外套脱了吧。', pinyin: 'Huìyì wú le, nǐ bǎ wàitào tuō le ba.', meaning: '(không thông)', correct: false,
            feedback: '无 = không có; không nói "会议无了".' },
          { text: '会议推迟了，你把外套抬了吧。', pinyin: 'Huìyì tuīchí le, nǐ bǎ wàitào tái le ba.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '抬 = nâng/khiêng, không dùng cho "cởi áo".' }
        ], vocab: ['推迟', '脱', '无'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '一位同事生病了，我很同情他，天太热，我也有点无心工作。',
        pinyin: 'Yí wèi tóngshì shēngbìng le, wǒ hěn tóngqíng tā, tiān tài rè, wǒ yě yǒudiǎn wúxīn gōngzuò.',
        meaning: 'Một đồng nghiệp bị ốm, tôi rất thương anh ấy; trời nóng quá, tôi cũng hơi không có tâm trạng làm việc.',
        expression: 'sad', vocab: ['同情', '无'] },
      { type: 'checkpoint', questions: [
        { q: '“顺便买点东西” — “顺便” nghĩa là?', options: ['Tiện thể', 'Cố ý', 'Vội vàng', 'Miễn cưỡng'], answer: 0 },
        { q: '“污染” chỉ điều gì?', options: ['Ô nhiễm', 'Sạch sẽ', 'Ẩm ướt', 'Nóng bức'], answer: 0 },
        { q: '“会议推迟了” nghĩa là?', options: ['Cuộc họp bị dời lại', 'Cuộc họp bị hủy', 'Cuộc họp bắt đầu', 'Cuộc họp kết thúc'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '湿润', p: 'shī rùn', v: 'ẩm ướt', e: 'moist' },
      { h: '收拾', p: 'shōu shi', v: 'dọn dẹp, thu xếp', e: 'to put in order' },
      { h: '售货员', p: 'shòu huò yuán', v: 'nhân viên bán hàng', e: 'salesperson' },
      { h: '熟悉', p: 'shú xī', v: 'quen thuộc, thông thạo', e: 'to be familiar with' },
      { h: '顺便', p: 'shùn biàn', v: 'tiện thể, nhân tiện', e: 'conveniently' },
      { h: '顺序', p: 'shùn xù', v: 'thứ tự', e: 'sequence' },
      { h: '随着', p: 'suí zhe', v: 'cùng với, theo', e: 'along with' },
      { h: '抬', p: 'tái', v: 'nâng lên, khiêng', e: 'to lift' },
      { h: '躺', p: 'tǎng', v: 'nằm', e: 'to recline' },
      { h: '趟', p: 'tàng', v: 'lần, chuyến', e: 'trip, classifier for visits' },
      { h: '讨厌', p: 'tǎo yàn', v: 'ghét, khó chịu', e: 'to dislike' },
      { h: '提供', p: 'tí gōng', v: 'cung cấp', e: 'to offer' },
      { h: '提醒', p: 'tí xǐng', v: 'nhắc nhở', e: 'to remind' },
      { h: '同情', p: 'tóng qíng', v: 'đồng cảm, thương', e: 'to sympathize with' },
      { h: '推迟', p: 'tuī chí', v: 'trì hoãn, dời lại', e: 'to postpone' },
      { h: '脱', p: 'tuō', v: 'cởi, tháo', e: 'to shed' },
      { h: '污染', p: 'wū rǎn', v: 'ô nhiễm', e: 'to pollute' },
      { h: '无', p: 'wú', v: 'không, không có', e: 'not to have' },
      { h: '吸引', p: 'xī yǐn', v: 'thu hút', e: 'to attract' },
      { h: '西红柿', p: 'xī hóng shì', v: 'cà chua', e: 'tomato' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我去超市一___。', options: ['趟', '抬', '脱'], answer: '趟' },
        { type: 'fill', sentence: '帮我___一下桌子。', options: ['收拾', '污染', '吸引'], answer: '收拾' },
        { type: 'fill', sentence: '我最___污染。', options: ['讨厌', '熟悉', '提供'], answer: '讨厌' },
        { type: 'fill', sentence: '本店___免费包装。', options: ['提供', '推迟', '收拾'], answer: '提供' },
        { type: 'fill', sentence: '太累了，我想___一会儿。', options: ['躺', '抬', '敲'], answer: '躺' }
      ],
      normal: [
        { type: 'fill', sentence: '去超市，___买点西红柿。', options: ['顺便', '然而', '随着'], answer: '顺便' },
        { type: 'fill', sentence: '把箱子___到那边。', options: ['抬', '脱', '剩'], answer: '抬' },
        { type: 'fill', sentence: '货架按___排好了。', options: ['顺序', '污染', '同情'], answer: '顺序' },
        { type: 'fill', sentence: '这条新闻很___人。', options: ['吸引', '推迟', '熟悉'], answer: '吸引' },
        { type: 'order', words: ['会议', '推迟', '了', '你', '把', '外套', '脱', '了', '吧'], answer: '会议推迟了你把外套脱了吧' },
        { type: 'order', words: ['随着', '天气', '变热', '空气', '有点', '湿润'], answer: '随着天气变热空气有点湿润' },
        { type: 'fill', sentence: '他很___商品，介绍得很清楚。', options: ['熟悉', '讨厌', '湿润'], answer: '熟悉' }
      ],
      hard: [
        { type: 'fill', sentence: '同事生病了，我很___他。', options: ['同情', '吸引', '提供'], answer: '同情' },
        { type: 'fill', sentence: '记得___大家关窗。', options: ['提醒', '收拾', '推迟'], answer: '提醒' },
        { type: 'translate', prompt: 'Tôi đi siêu thị một chuyến, tiện thể mua ít cà chua.', answer: '我去超市一趟，顺便买点西红柿。' },
        { type: 'translate', prompt: 'Bản tin này rất thu hút người xem.', answer: '这条新闻很吸引人。' },
        { type: 'translate', prompt: 'Theo thời tiết nóng lên, không khí hơi ẩm.', answer: '随着天气变热，空气有点湿润。' },
        { type: 'fill', sentence: '天太热，我有点___心工作。', options: ['无', '抬', '趟'], answer: '无' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 128: Giải quyết vấn đề (2) — 20 từ
  // ─────────────────────────────────────────────────────────────────────────
  128: {
    id: 128,
    level: 4,
    title: 'Giải quyết vấn đề (2)',
    context: 'Mai được mời tham gia một sự kiện văn hóa châu Á. Điều kiện khá nghiêm khắc, nhưng em dũng cảm thử sức và nhận ra mọi người đều thân thiện.',
    vocabPreview: ['邀请', '亚洲', '严格', '勇敢', '优秀'],
    objectives: [
      "Nắm nhóm từ khóa: 邀请 · 亚洲 · 严格 · 勇敢 · 优秀",
      "Nghe hiểu và kể lại tình huống Giải quyết vấn đề (2) bằng câu HSK 4",
      "Phân biệt cách dùng 邀请 · 亚洲 · 严格",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "邀请 — mời",
        explain: "Dùng 邀请 trong ngữ cảnh Giải quyết vấn đề (2) để diễn đạt: mời.",
        examples: [
          { zh: "中心邀请你参加亚洲文化活动，内容很有趣。", py: "Zhōngxīn yāoqǐng nǐ cānjiā Yàzhōu wénhuà huódòng, nèiróng hěn yǒuqù.", vi: "Trung tâm mời em tham gia hoạt động văn hóa châu Á, nội dung rất thú vị." }
        ] },
      { point: "亚洲 — châu Á",
        explain: "Dùng 亚洲 trong ngữ cảnh Giải quyết vấn đề (2) để diễn đạt: châu Á.",
        examples: [
          { zh: "中心邀请你参加亚洲文化活动，内容很有趣。", py: "Zhōngxīn yāoqǐng nǐ cānjiā Yàzhōu wénhuà huódòng, nèiróng hěn yǒuqù.", vi: "Trung tâm mời em tham gia hoạt động văn hóa châu Á, nội dung rất thú vị." }
        ] },
      { point: "严格 — nghiêm khắc",
        explain: "Dùng 严格 trong ngữ cảnh Giải quyết vấn đề (2) để diễn đạt: nghiêm khắc.",
        examples: [
          { zh: "不过名额有限制，要求很严格。", py: "Búguò míng'é yǒu xiànzhì, yāoqiú hěn yángé.", vi: "Nhưng số lượng có hạn chế, yêu cầu rất nghiêm khắc." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Văn phòng · Sáng', bg: 'office',
        cast: ['mai', 'laoli'],
        text: 'Trung tâm mời Mai tham gia một sự kiện văn hóa châu Á.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '中心邀请你参加亚洲文化活动，内容很有趣。',
        pinyin: 'Zhōngxīn yāoqǐng nǐ cānjiā Yàzhōu wénhuà huódòng, nèiróng hěn yǒuqù.',
        meaning: 'Trung tâm mời em tham gia hoạt động văn hóa châu Á, nội dung rất thú vị.',
        expression: 'happy', vocab: ['邀请', '亚洲', '有趣'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '我好高兴！我尤其喜欢这种活动。',
        pinyin: 'Wǒ hǎo gāoxìng! Wǒ yóuqí xǐhuan zhè zhǒng huódòng.',
        meaning: 'Em vui quá! Em đặc biệt thích loại hoạt động này.',
        expression: 'happy', vocab: ['尤其'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '不过名额有限制，要求很严格。',
        pinyin: 'Búguò míng\'é yǒu xiànzhì, yāoqiú hěn yángé.',
        meaning: 'Nhưng số lượng có hạn chế, yêu cầu rất nghiêm khắc.',
        expression: 'focused', vocab: ['限制', '严格'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '我会养成早起的习惯，每天准时醒来。',
        pinyin: 'Wǒ huì yǎngchéng zǎoqǐ de xíguàn, měitiān zhǔnshí xǐnglái.',
        meaning: 'Em sẽ hình thành thói quen dậy sớm, mỗi ngày thức dậy đúng giờ.',
        expression: 'focused', vocab: ['养成', '醒'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '很好。优秀的实习生都很自律。请给我看你详细的安排。',
        pinyin: 'Hěn hǎo. Yōuxiù de shíxíshēng dōu hěn zìlǜ. Qǐng gěi wǒ kàn nǐ xiángxì de ānpái.',
        meaning: 'Tốt lắm. Thực tập sinh xuất sắc đều tự giác. Cho thầy xem lịch chi tiết của em.',
        expression: 'happy', vocab: ['优秀', '详细'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '好的，我以认真的态度准备。',
        pinyin: 'Hǎo de, wǒ yǐ rènzhēn de tàidu zhǔnbèi.',
        meaning: 'Vâng, em sẽ chuẩn bị bằng thái độ nghiêm túc.',
        expression: 'happy', vocab: ['以'] },
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Sự kiện văn hóa · Hôm sau', bg: 'campus',
        cast: ['mai'],
        text: 'Sự kiện diễn ra. Mai hồi hộp nhưng quyết tâm thử sức.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '活动很辛苦，但我很勇敢地上台介绍。',
        pinyin: 'Huódòng hěn xīnkǔ, dàn wǒ hěn yǒnggǎn de shàngtái jièshào.',
        meaning: 'Hoạt động khá vất vả, nhưng tôi dũng cảm lên sân khấu giới thiệu.',
        expression: 'focused', vocab: ['辛苦', '勇敢'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '和我想的相反，大家都很友好，还给我递饮料。',
        pinyin: 'Hé wǒ xiǎng de xiāngfǎn, dàjiā dōu hěn yǒuhǎo, hái gěi wǒ dì yǐnliào.',
        meaning: 'Ngược với những gì tôi nghĩ, mọi người đều thân thiện, còn đưa tôi đồ uống.',
        expression: 'surprise', vocab: ['相反', '饮料'] },
      { type: 'choice', speaker: 'mai', cast: ['mai'], bg: 'campus',
        scene: '📍 Sự kiện văn hóa',
        expression: 'sad',
        q: 'Mai làm rơi chìa khóa, lo sẽ rắc rối to. Diễn đạt "Việc nhỏ này có thể gây ra vấn đề nghiêm trọng" sao cho đúng?',
        options: [
          { text: '这件小事可能引起严重的问题。', pinyin: 'Zhè jiàn xiǎoshì kěnéng yǐnqǐ yánzhòng de wèntí.', meaning: 'Việc nhỏ này có thể gây ra vấn đề nghiêm trọng.', correct: true,
            feedback: 'Đúng! 引起 = gây ra; 严重 = nghiêm trọng.' },
          { text: '这件小事可能硬起严重的问题。', pinyin: 'Zhè jiàn xiǎoshì kěnéng yìng qǐ yánzhòng de wèntí.', meaning: '(không thông)', correct: false,
            feedback: '硬 = cứng, không phải "gây ra".' },
          { text: '这件小事可能引起羡慕的问题。', pinyin: 'Zhè jiàn xiǎoshì kěnéng yǐnqǐ xiànmù de wèntí.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '羡慕 = ngưỡng mộ/ghen tị, không hợp với "vấn đề".' }
        ], vocab: ['引起', '严重', '硬', '羡慕'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '我找了半天，终于找到钥匙，松了口气。',
        pinyin: 'Wǒ zhǎo le bàntiān, zhōngyú zhǎodào yàoshi, sōng le kǒuqì.',
        meaning: 'Tôi tìm cả buổi, cuối cùng cũng thấy chìa khóa, thở phào nhẹ nhõm.',
        expression: 'happy', vocab: ['钥匙'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我真羡慕你能参加！面包有点硬，但活动太棒了。',
        pinyin: 'Wǒ zhēn xiànmù nǐ néng cānjiā! Miànbāo yǒudiǎn yìng, dàn huódòng tài bàng le.',
        meaning: 'Tớ ngưỡng mộ cậu được tham gia ghê! Bánh mì hơi cứng, nhưng hoạt động tuyệt lắm.',
        expression: 'happy', vocab: ['羡慕', '硬'] },
      { type: 'checkpoint', questions: [
        { q: '“邀请” nghĩa là?', options: ['Mời', 'Từ chối', 'Hạn chế', 'Thức dậy'], answer: 0 },
        { q: '“要求很严格” — “严格” nghĩa là?', options: ['Nghiêm khắc', 'Dễ dãi', 'Thú vị', 'Vất vả'], answer: 0 },
        { q: '“养成习惯” nghĩa là?', options: ['Hình thành thói quen', 'Bỏ thói quen', 'Vất vả', 'Ngược lại'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '限制', p: 'xiàn zhì', v: 'hạn chế', e: 'to restrict' },
      { h: '羡慕', p: 'xiàn mù', v: 'ngưỡng mộ, ghen tị', e: 'to envy' },
      { h: '相反', p: 'xiāng fǎn', v: 'ngược lại, trái lại', e: 'opposite' },
      { h: '详细', p: 'xiáng xì', v: 'chi tiết, tỉ mỉ', e: 'detailed' },
      { h: '辛苦', p: 'xīn kǔ', v: 'vất vả, gian khổ', e: 'exhausting' },
      { h: '醒', p: 'xǐng', v: 'tỉnh dậy, thức', e: 'to wake up' },
      { h: '亚洲', p: 'yà zhōu', v: 'châu Á', e: 'Asia (abbr. for 亚细亚洲)' },
      { h: '严格', p: 'yán gé', v: 'nghiêm khắc', e: 'strict' },
      { h: '严重', p: 'yán zhòng', v: 'nghiêm trọng', e: 'grave' },
      { h: '养成', p: 'yǎng chéng', v: 'hình thành (thói quen)', e: 'to cultivate' },
      { h: '邀请', p: 'yāo qǐng', v: 'mời', e: 'to invite' },
      { h: '钥匙', p: 'yào shi', v: 'chìa khóa', e: 'key' },
      { h: '以', p: 'yǐ', v: 'lấy, bằng, dùng', e: 'to use, by means of, because of' },
      { h: '引起', p: 'yǐn qǐ', v: 'gây ra, dẫn đến', e: 'to give rise to' },
      { h: '饮料', p: 'yǐn liào', v: 'đồ uống', e: 'drink' },
      { h: '硬', p: 'yìng', v: 'cứng', e: 'hard' },
      { h: '勇敢', p: 'yǒng gǎn', v: 'dũng cảm', e: 'brave' },
      { h: '优秀', p: 'yōu xiù', v: 'xuất sắc, ưu tú', e: 'outstanding' },
      { h: '尤其', p: 'yóu qí', v: 'đặc biệt là', e: 'especially' },
      { h: '有趣', p: 'yǒu qù', v: 'thú vị', e: 'interesting' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '中心___我参加活动。', options: ['邀请', '限制', '醒'], answer: '邀请' },
        { type: 'fill', sentence: '这次活动很___。', options: ['有趣', '严重', '硬'], answer: '有趣' },
        { type: 'fill', sentence: '名额有___，人不能太多。', options: ['限制', '饮料', '钥匙'], answer: '限制' },
        { type: 'fill', sentence: '天气热，我想喝点___。', options: ['饮料', '钥匙', '亚洲'], answer: '饮料' },
        { type: 'fill', sentence: '门锁了，我找不到___。', options: ['钥匙', '饮料', '相反'], answer: '钥匙' }
      ],
      normal: [
        { type: 'fill', sentence: '要求很___，不容易达到。', options: ['严格', '有趣', '勇敢'], answer: '严格' },
        { type: 'fill', sentence: '我要___早起的习惯。', options: ['养成', '邀请', '限制'], answer: '养成' },
        { type: 'fill', sentence: '我很___地上台介绍。', options: ['勇敢', '辛苦', '详细'], answer: '勇敢' },
        { type: 'fill', sentence: '和我想的___，大家都很友好。', options: ['相反', '严重', '有趣'], answer: '相反' },
        { type: 'order', words: ['优秀', '的', '实习生', '都', '很', '自律'], answer: '优秀的实习生都很自律' },
        { type: 'order', words: ['中心', '邀请', '你', '参加', '亚洲', '文化', '活动'], answer: '中心邀请你参加亚洲文化活动' },
        { type: 'fill', sentence: '我___喜欢这种活动。', options: ['尤其', '严重', '相反'], answer: '尤其' }
      ],
      hard: [
        { type: 'fill', sentence: '这件小事可能___严重的问题。', options: ['引起', '养成', '邀请'], answer: '引起' },
        { type: 'fill', sentence: '请给我看你___的安排。', options: ['详细', '勇敢', '辛苦'], answer: '详细' },
        { type: 'translate', prompt: 'Mọi người đều thân thiện, còn đưa tôi đồ uống.', answer: '大家都很友好，还给我递饮料。' },
        { type: 'translate', prompt: 'Tôi sẽ hình thành thói quen dậy sớm.', answer: '我会养成早起的习惯。' },
        { type: 'translate', prompt: 'Hoạt động khá vất vả, nhưng tôi dũng cảm lên sân khấu.', answer: '活动很辛苦，但我很勇敢地上台。' },
        { type: 'fill', sentence: '面包有点___，但还能吃。', options: ['硬', '醒', '以'], answer: '硬' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 129: Giao tiếp nơi làm việc — 20 từ
  // ─────────────────────────────────────────────────────────────────────────
  129: {
    id: 129,
    level: 4,
    title: 'Giao tiếp nơi làm việc',
    context: 'Mai được phép tổ chức một buổi giao lưu cầu lông cho đồng nghiệp. Em học cách tôn trọng người khác và dần tự tin hơn trong giao tiếp nơi làm việc.',
    vocabPreview: ['组织', '尊重', '羽毛球', '愉快', '准时'],
    objectives: [
      "Nắm nhóm từ khóa: 组织 · 尊重 · 羽毛球 · 愉快 · 准时",
      "Nghe hiểu và kể lại tình huống Giao tiếp nơi làm việc bằng câu HSK 4",
      "Phân biệt cách dùng 组织 · 尊重 · 羽毛球",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "组织 — tổ chức",
        explain: "Dùng 组织 trong ngữ cảnh Giao tiếp nơi làm việc để diễn đạt: tổ chức.",
        examples: [
          { zh: "中心允许你组织一次活动，增进同事感情。", py: "Zhōngxīn yǔnxǔ nǐ zǔzhī yí cì huódòng, zēngjìn tóngshì gǎnqíng.", vi: "Trung tâm cho phép em tổ chức một hoạt động, gắn kết tình cảm đồng nghiệp." }
        ] },
      { point: "尊重 — tôn trọng",
        explain: "Dùng 尊重 trong ngữ cảnh Giao tiếp nơi làm việc để diễn đạt: tôn trọng.",
        examples: [
          { zh: "好主意。与同事相处要互相尊重。", py: "Hǎo zhǔyi. Yǔ tóngshì xiāngchǔ yào hùxiāng zūnzhòng.", vi: "Ý hay. Tiếp xúc với đồng nghiệp phải tôn trọng lẫn nhau." }
        ] },
      { point: "羽毛球 — cầu lông",
        explain: "Dùng 羽毛球 trong ngữ cảnh Giao tiếp nơi làm việc để diễn đạt: cầu lông.",
        examples: [
          { zh: "太好了！我想组织打羽毛球，大家会很愉快。", py: "Tài hǎo le! Wǒ xiǎng zǔzhī dǎ yǔmáoqiú, dàjiā huì hěn yúkuài.", vi: "Tuyệt quá! Em muốn tổ chức chơi cầu lông, mọi người sẽ rất vui." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Văn phòng · Sáng', bg: 'office',
        cast: ['mai', 'laoli'],
        text: 'Mai dần quen với việc giao tiếp nơi làm việc.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '中心允许你组织一次活动，增进同事感情。',
        pinyin: 'Zhōngxīn yǔnxǔ nǐ zǔzhī yí cì huódòng, zēngjìn tóngshì gǎnqíng.',
        meaning: 'Trung tâm cho phép em tổ chức một hoạt động, gắn kết tình cảm đồng nghiệp.',
        expression: 'happy', vocab: ['允许', '组织'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '太好了！我想组织打羽毛球，大家会很愉快。',
        pinyin: 'Tài hǎo le! Wǒ xiǎng zǔzhī dǎ yǔmáoqiú, dàjiā huì hěn yúkuài.',
        meaning: 'Tuyệt quá! Em muốn tổ chức chơi cầu lông, mọi người sẽ rất vui.',
        expression: 'happy', vocab: ['羽毛球', '愉快'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '好主意。与同事相处要互相尊重。',
        pinyin: 'Hǎo zhǔyi. Yǔ tóngshì xiāngchǔ yào hùxiāng zūnzhòng.',
        meaning: 'Ý hay. Tiếp xúc với đồng nghiệp phải tôn trọng lẫn nhau.',
        expression: 'focused', vocab: ['与', '尊重'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '我明白。我会仔细安排，保证活动质量。',
        pinyin: 'Wǒ míngbai. Wǒ huì zǐxì ānpái, bǎozhèng huódòng zhìliàng.',
        meaning: 'Em hiểu. Em sẽ sắp xếp kỹ lưỡng, đảm bảo chất lượng hoạt động.',
        expression: 'focused', vocab: ['仔细', '质量'] },
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Sân thể thao · Chiều', bg: 'campus',
        cast: ['mai', 'xiaomei'],
        text: 'Buổi giao lưu cầu lông diễn ra vui vẻ.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '场地有点窄，但大家玩得很开心。',
        pinyin: 'Chǎngdì yǒudiǎn zhǎi, dàn dàjiā wán de hěn kāixīn.',
        meaning: 'Sân hơi hẹp, nhưng mọi người chơi rất vui.',
        expression: 'happy', vocab: ['窄'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这位是著名的教练之一，他教我们打球。',
        pinyin: 'Zhè wèi shì zhùmíng de jiàoliàn zhī yī, tā jiāo wǒmen dǎ qiú.',
        meaning: 'Đây là một trong những huấn luyện viên nổi tiếng, anh ấy dạy chúng ta đánh cầu.',
        expression: 'curious', vocab: ['著名', '之'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我不小心撞到了球网，于是大家都笑了。',
        pinyin: 'Wǒ bù xiǎoxīn zhuàng dào le qiúwǎng, yúshì dàjiā dōu xiào le.',
        meaning: 'Tôi vô ý đâm vào lưới, thế là mọi người đều cười.',
        expression: 'surprise', vocab: ['撞', '于是'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'campus',
        scene: '📍 Sân thể thao',
        expression: 'sad',
        q: 'Mai đến muộn vì kẹt xe, xin đồng nghiệp thứ lỗi. Diễn đạt "Xin lỗi tớ không đúng giờ, mong cậu thứ lỗi" sao cho đúng?',
        options: [
          { text: '抱歉我没准时，请你原谅。', pinyin: 'Bàoqiàn wǒ méi zhǔnshí, qǐng nǐ yuánliàng.', meaning: 'Xin lỗi tớ không đúng giờ, mong cậu thứ lỗi.', correct: true,
            feedback: 'Đúng! 准时 = đúng giờ; 原谅 = thứ lỗi.' },
          { text: '抱歉我没准时，请你约会。', pinyin: 'Bàoqiàn wǒ méi zhǔnshí, qǐng nǐ yuēhuì.', meaning: '(không thông)', correct: false,
            feedback: '约会 = hẹn hò, không phải "thứ lỗi".' },
          { text: '抱歉我没准时，请你做生意。', pinyin: 'Bàoqiàn wǒ méi zhǔnshí, qǐng nǐ zuò shēngyi.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '做生意 = kinh doanh, không hợp.' }
        ], vocab: ['准时', '原谅', '约会', '做生意'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '没关系。对了，今晚我和男朋友有个约会。',
        pinyin: 'Méiguānxi. Duìle, jīnwǎn wǒ hé nánpéngyǒu yǒu ge yuēhuì.',
        meaning: 'Không sao. À, tối nay tớ có hẹn với bạn trai.',
        expression: 'happy', vocab: ['约会'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '真好！下班我想留下阅读，逐渐提高中文。这张圆桌很适合讨论。',
        pinyin: 'Zhēn hǎo! Xiàbān wǒ xiǎng liúxià yuèdú, zhújiàn tígāo Zhōngwén. Zhè zhāng yuán zhuō hěn shìhé tǎolùn.',
        meaning: 'Hay quá! Tan làm tớ muốn ở lại đọc sách, dần dần nâng cao tiếng Trung. Cái bàn tròn này rất hợp để thảo luận.',
        expression: 'happy', vocab: ['阅读', '逐渐', '圆'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '你进步很快。以后想自己做生意吗？',
        pinyin: 'Nǐ jìnbù hěn kuài. Yǐhòu xiǎng zìjǐ zuò shēngyi ma?',
        meaning: 'Em tiến bộ rất nhanh. Sau này có muốn tự kinh doanh không?',
        expression: 'curious', vocab: ['做生意'] },
      { type: 'checkpoint', questions: [
        { q: '“互相尊重” — “尊重” nghĩa là?', options: ['Tôn trọng', 'Xem thường', 'Cạnh tranh', 'Tổ chức'], answer: 0 },
        { q: '“准时” nghĩa là?', options: ['Đúng giờ', 'Trễ giờ', 'Sớm giờ', 'Cả ngày'], answer: 0 },
        { q: '“组织一次活动” — “组织” nghĩa là?', options: ['Tổ chức', 'Tham gia', 'Hủy bỏ', 'Xem'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '于是', p: 'yú shì', v: 'do đó, thế là', e: 'thereupon' },
      { h: '愉快', p: 'yú kuài', v: 'vui vẻ, phấn khởi', e: 'cheerful' },
      { h: '与', p: 'yǔ', v: 'với, và, cùng', e: 'with, and, together with' },
      { h: '羽毛球', p: 'yǔ máo qiú', v: 'cầu lông', e: 'shuttlecock' },
      { h: '原谅', p: 'yuán liàng', v: 'tha thứ, thứ lỗi', e: 'to excuse' },
      { h: '圆', p: 'yuán', v: 'tròn', e: 'circle' },
      { h: '约会', p: 'yuē huì', v: 'hẹn hò, cuộc hẹn', e: 'appointment' },
      { h: '阅读', p: 'yuè dú', v: 'đọc sách, đọc hiểu', e: 'to read' },
      { h: '允许', p: 'yǔn xǔ', v: 'cho phép', e: 'to permit' },
      { h: '窄', p: 'zhǎi', v: 'hẹp', e: 'narrow' },
      { h: '著名', p: 'zhù míng', v: 'nổi tiếng', e: 'famous' },
      { h: '之', p: 'zhī', v: 'của, (hư từ)', e: 'of, (classical possessive particle)' },
      { h: '质量', p: 'zhì liàng', v: 'chất lượng', e: 'quality' },
      { h: '逐渐', p: 'zhú jiàn', v: 'dần dần', e: 'gradually' },
      { h: '撞', p: 'zhuàng', v: 'đâm, va chạm', e: 'to knock against' },
      { h: '准时', p: 'zhǔn shí', v: 'đúng giờ', e: 'on time' },
      { h: '仔细', p: 'zǐ xì', v: 'cẩn thận, kỹ lưỡng', e: 'careful' },
      { h: '组织', p: 'zǔ zhī', v: 'tổ chức', e: 'to organize' },
      { h: '尊重', p: 'zūn zhòng', v: 'tôn trọng', e: 'to esteem' },
      { h: '做生意', p: 'zuò shēng yì', v: 'kinh doanh, buôn bán', e: 'to do business' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我想___一次羽毛球活动。', options: ['组织', '原谅', '撞'], answer: '组织' },
        { type: 'fill', sentence: '大家一起打___。', options: ['羽毛球', '约会', '质量'], answer: '羽毛球' },
        { type: 'fill', sentence: '同事之间要互相___。', options: ['尊重', '撞', '允许'], answer: '尊重' },
        { type: 'fill', sentence: '场地有点___，但够用。', options: ['窄', '圆', '愉快'], answer: '窄' },
        { type: 'fill', sentence: '今天大家玩得很___。', options: ['愉快', '著名', '逐渐'], answer: '愉快' }
      ],
      normal: [
        { type: 'fill', sentence: '中心___你组织活动。', options: ['允许', '撞', '阅读'], answer: '允许' },
        { type: 'fill', sentence: '抱歉我没___，请你原谅。', options: ['准时', '著名', '圆'], answer: '准时' },
        { type: 'fill', sentence: '我不小心___到了球网。', options: ['撞', '原谅', '组织'], answer: '撞' },
        { type: 'fill', sentence: '中文水平___提高了。', options: ['逐渐', '准时', '愉快'], answer: '逐渐' },
        { type: 'order', words: ['与', '同事', '相处', '要', '互相', '尊重'], answer: '与同事相处要互相尊重' },
        { type: 'order', words: ['我', '想', '留下', '阅读', '提高', '中文'], answer: '我想留下阅读提高中文' },
        { type: 'fill', sentence: '他是___的教练之一。', options: ['著名', '愉快', '窄'], answer: '著名' }
      ],
      hard: [
        { type: 'fill', sentence: '抱歉我迟到了，请你___。', options: ['原谅', '组织', '撞'], answer: '原谅' },
        { type: 'fill', sentence: '我会仔细安排，保证活动___。', options: ['质量', '约会', '圆'], answer: '质量' },
        { type: 'translate', prompt: 'Trung tâm cho phép em tổ chức một hoạt động.', answer: '中心允许你组织一次活动。' },
        { type: 'translate', prompt: 'Tiếp xúc với đồng nghiệp phải tôn trọng lẫn nhau.', answer: '与同事相处要互相尊重。' },
        { type: 'translate', prompt: 'Tôi vô ý đâm vào lưới, thế là mọi người đều cười.', answer: '我不小心撞到了球网，于是大家都笑了。' },
        { type: 'fill', sentence: '这张___桌很适合讨论。', options: ['圆', '窄', '著名'], answer: '圆' }
      ]
    }
  }

});

// ───────────────────────────────────────────────────────
// BATCH 3 — Bài 130-133 (Áp lực · Dự án chung · Thuyết trình)
// ───────────────────────────────────────────────────────
Object.assign(COURSE_DATA, {

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 130: Áp lực và động viên — 20 từ
  // ─────────────────────────────────────────────────────────────────────────
  130: {
    id: 130,
    level: 4,
    title: 'Áp lực và động viên',
    context: 'Trước kỳ đánh giá giữa kỳ, Mai cảm thấy áp lực và sợ thất bại. Thầy Lý động viên em coi trọng chữ tín hơn điểm số, và biết nghỉ ngơi để lấy lại sức.',
    vocabPreview: ['测试', '诚信', '充电', '不在乎', '被迫'],
    objectives: [
      "Nắm nhóm từ khóa: 测试 · 诚信 · 充电 · 不在乎 · 被迫",
      "Nghe hiểu và kể lại tình huống Áp lực và động viên bằng câu HSK 4",
      "Phân biệt cách dùng 测试 · 诚信 · 充电",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "测试 — kiểm tra",
        explain: "Dùng 测试 trong ngữ cảnh Áp lực và động viên để diễn đạt: kiểm tra.",
        examples: [
          { zh: "下周有个测试，我担心自己会败。", py: "Xià zhōu yǒu ge cèshì, wǒ dānxīn zìjǐ huì bài.", vi: "Tuần sau có bài kiểm tra, em lo mình sẽ thất bại." }
        ] },
      { point: "诚信 — chữ tín",
        explain: "Dùng 诚信 trong ngữ cảnh Áp lực và động viên để diễn đạt: chữ tín.",
        examples: [
          { zh: "我不想被迫放弃，我要靠诚信做事。", py: "Wǒ bù xiǎng bèipò fàngqì, wǒ yào kào chéngxìn zuòshì.", vi: "Em không muốn bị ép phải bỏ cuộc, em muốn dựa vào chữ tín mà làm việc." }
        ] },
      { point: "充电 — sạc pin",
        explain: "Dùng 充电 trong ngữ cảnh Áp lực và động viên để diễn đạt: sạc pin.",
        examples: [
          { zh: "对。累了就去充电休息，别抄写别人的答案。", py: "Duì. Lèi le jiù qù chōngdiàn xiūxi, bié chāoxiě biérén de dá'àn.", vi: "Đúng. Mệt thì đi \"sạc pin\" nghỉ ngơi, đừng chép bài người khác." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Văn phòng · Sáng', bg: 'office',
        cast: ['mai', 'laoli'],
        text: 'Trước kỳ đánh giá giữa kỳ, Mai cảm thấy áp lực.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '下周有个测试，我担心自己会败。',
        pinyin: 'Xià zhōu yǒu ge cèshì, wǒ dānxīn zìjǐ huì bài.',
        meaning: 'Tuần sau có bài kiểm tra, em lo mình sẽ thất bại.',
        expression: 'sad', vocab: ['测试', '败'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '失败也别太放在心上，要学会不在乎别人的眼光。你曾经克服过更难的事。',
        pinyin: 'Shībài yě bié tài fàng zài xīn shàng, yào xuéhuì búzàihu biérén de yǎnguāng. Nǐ céngjīng kèfú guo gèng nán de shì.',
        meaning: 'Thất bại cũng đừng để bụng quá, phải học cách không bận tâm ánh mắt người khác. Em từng vượt qua việc khó hơn mà.',
        expression: 'happy', vocab: ['不在乎', '曾'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '我不想被迫放弃，我要靠诚信做事。',
        pinyin: 'Wǒ bù xiǎng bèipò fàngqì, wǒ yào kào chéngxìn zuòshì.',
        meaning: 'Em không muốn bị ép phải bỏ cuộc, em muốn dựa vào chữ tín mà làm việc.',
        expression: 'focused', vocab: ['被迫', '诚信'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '对。累了就去充电休息，别抄写别人的答案。',
        pinyin: 'Duì. Lèi le jiù qù chōngdiàn xiūxi, bié chāoxiě biérén de dá\'àn.',
        meaning: 'Đúng. Mệt thì đi "sạc pin" nghỉ ngơi, đừng chép bài người khác.',
        expression: 'focused', vocab: ['充电', '抄写'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'laoli'], bg: 'office',
        scene: '📍 Văn phòng',
        expression: 'focused',
        q: 'Có người chép bài. Mai coi trọng chữ tín. Câu nào thể hiện đúng "làm người phải giữ chữ tín, không chép bài người khác"?',
        options: [
          { text: '做人要讲诚信，不能抄写别人的答案。', pinyin: 'Zuòrén yào jiǎng chéngxìn, bùnéng chāoxiě biérén de dá\'àn.', meaning: 'Làm người phải giữ chữ tín, không được chép bài người khác.', correct: true,
            feedback: 'Đúng! 诚信 = chữ tín/trung thực; 抄写 = chép lại.' },
          { text: '做人要讲被迫，不能抄写别人的答案。', pinyin: 'Zuòrén yào jiǎng bèipò, bùnéng chāoxiě biérén de dá\'àn.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '被迫 = bị ép buộc, không phải phẩm chất.' },
          { text: '做人要讲诚信，不能充电别人的答案。', pinyin: 'Zuòrén yào jiǎng chéngxìn, bùnéng chōngdiàn biérén de dá\'àn.', meaning: '(không thông)', correct: false,
            feedback: '充电 = sạc pin, không hợp với "đáp án".' }
        ], vocab: ['诚信', '抄写', '被迫', '充电'] },
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Trung tâm thương mại · Chiều', bg: 'shop',
        cast: ['mai', 'xiaomei'],
        text: 'Để thư giãn, Mai đi dạo và gặp một đợt giảm giá.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '商场在出售旧唱片，买满还能抽奖。我抽了一次，没中。',
        pinyin: 'Shāngchǎng zài chūshòu jiù chàngpiàn, mǎi mǎn hái néng chōujiǎng. Wǒ chōu le yí cì, méi zhòng.',
        meaning: 'Trung tâm đang bán đĩa nhạc cũ, mua đủ còn được bốc thăm. Tớ rút một lần, không trúng.',
        expression: 'happy', vocab: ['出售', '唱片', '抽奖', '抽'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这件成人的衣服尺寸太大，你个子不矮，可以试试别的。今天有点潮，要下雨了。',
        pinyin: 'Zhè jiàn chéngrén de yīfu chǐcùn tài dà, nǐ gèzi bù ǎi, kěyǐ shìshi biéde. Jīntiān yǒudiǎn cháo, yào xià yǔ le.',
        meaning: 'Cái áo người lớn này cỡ to quá, cậu đâu có thấp, thử cái khác đi. Hôm nay hơi ẩm, sắp mưa rồi.',
        expression: 'curious', vocab: ['成人', '尺寸', '矮', '潮'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这张老唱片是我的宝，我很喜欢。',
        pinyin: 'Zhè zhāng lǎo chàngpiàn shì wǒ de bǎo, wǒ hěn xǐhuan.',
        meaning: 'Cái đĩa nhạc cũ này là báu vật của tớ, tớ thích lắm.',
        expression: 'happy', vocab: ['宝'] },
      { type: 'checkpoint', questions: [
        { q: '“测试” nghĩa là?', options: ['Bài kiểm tra, test', 'Nghỉ ngơi', 'Bán ra', 'Sạc pin'], answer: 0 },
        { q: '“诚信” chỉ điều gì?', options: ['Chữ tín, trung thực', 'Áp lực', 'Thước đo', 'Người lớn'], answer: 0 },
        { q: '“累了去充电” — “充电” ở đây ví với?', options: ['Nghỉ ngơi lấy lại sức', 'Sạc điện thoại', 'Học bài', 'Mua sắm'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '矮', p: 'ǎi', v: 'thấp, lùn', e: 'short (of stature), low' },
      { h: '矮小', p: 'ǎi xiǎo', v: 'thấp bé, nhỏ con', e: 'short and small, low and small, undersized' },
      { h: '败', p: 'bài', v: 'thua, thất bại', e: 'defeat, fail, lose, counteract, be defeated, beat, spoil, decay, wither' },
      { h: '宝', p: 'bǎo', v: 'báu vật, quý giá', e: 'treasure' },
      { h: '被迫', p: 'bèi pò', v: 'bị ép buộc, miễn cưỡng', e: 'forced, be forced, be compelled/forced, be compelled' },
      { h: '不在乎', p: 'bù zài hu', v: 'không bận tâm, bất cần', e: 'not to care' },
      { h: '测', p: 'cè', v: 'đo lường, đánh giá', e: 'measure out, conjecture, measure, infer, survey, fathom' },
      { h: '测试', p: 'cè shì', v: 'kiểm tra, thử nghiệm', e: 'test' },
      { h: '曾', p: 'céng', v: 'đã từng, từng', e: 'once, ever, before' },
      { h: '唱片', p: 'chàng piàn', v: 'đĩa nhạc, đĩa hát', e: 'pressing, waxing, cut, disc, phonogram, phonograph record, record, disk, wax, phonorecord, platter, ' },
      { h: '抄写', p: 'chāo xiě', v: 'chép lại, sao chép', e: 'to copy, to transcribe' },
      { h: '潮', p: 'cháo', v: 'ẩm ướt, thủy triều', e: 'tide, current, damp, moist, humid' },
      { h: '成人', p: 'chéng rén', v: 'người lớn, người trưởng thành', e: 'grownup, adult, majority, manhood, grown-up' },
      { h: '诚信', p: 'chéng xìn', v: 'chữ tín, thành thật', e: 'genuine, honest, in good faith, honesty, integrity' },
      { h: '尺', p: 'chǐ', v: 'thước (đơn vị/dụng cụ đo)', e: 'm.[standard]' },
      { h: '尺寸', p: 'chǐ cùn', v: 'kích thước, số đo', e: 'measurement, dimension' },
      { h: '充电', p: 'chōng diàn', v: 'sạc pin, nạp năng lượng', e: 'charge, electricize, refresh' },
      { h: '抽', p: 'chōu', v: 'rút, kéo, bốc', e: 'lash, whip, thrash' },
      { h: '抽奖', p: 'chōu jiǎng', v: 'bốc thăm trúng thưởng', e: 'to draw a prize, a lottery, a raffle' },
      { h: '出售', p: 'chū shòu', v: 'bán ra, chào bán', e: 'offer for sale, sell' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '下周有个___，我要复习。', options: ['测试', '唱片', '尺寸'], answer: '测试' },
        { type: 'fill', sentence: '做人要讲___。', options: ['诚信', '被迫', '抽奖'], answer: '诚信' },
        { type: 'fill', sentence: '累了就去___休息一下。', options: ['充电', '出售', '抄写'], answer: '充电' },
        { type: 'fill', sentence: '商场在___旧唱片。', options: ['出售', '测试', '充电'], answer: '出售' },
        { type: 'fill', sentence: '买满商品还能___。', options: ['抽奖', '诚信', '成人'], answer: '抽奖' }
      ],
      normal: [
        { type: 'fill', sentence: '不要___别人的答案。', options: ['抄写', '出售', '抽奖'], answer: '抄写' },
        { type: 'fill', sentence: '这件衣服的___太大了。', options: ['尺寸', '诚信', '测试'], answer: '尺寸' },
        { type: 'fill', sentence: '我不想___放弃这次机会。', options: ['被迫', '充电', '出售'], answer: '被迫' },
        { type: 'fill', sentence: '我___经做过更难的事。', options: ['曾', '潮', '宝'], answer: '曾' },
        { type: 'order', words: ['做人', '要', '讲', '诚信'], answer: '做人要讲诚信' },
        { type: 'order', words: ['累', '了', '就', '去', '充电', '休息'], answer: '累了就去充电休息' },
        { type: 'fill', sentence: '要学会___别人的眼光。', options: ['不在乎', '出售', '抄写'], answer: '不在乎' }
      ],
      hard: [
        { type: 'fill', sentence: '这件___的衣服小孩穿太大。', options: ['成人', '潮', '宝'], answer: '成人' },
        { type: 'fill', sentence: '今天有点___，可能要下雨。', options: ['潮', '矮', '败'], answer: '潮' },
        { type: 'translate', prompt: 'Làm người phải giữ chữ tín.', answer: '做人要讲诚信。' },
        { type: 'translate', prompt: 'Mệt thì đi nghỉ ngơi lấy lại sức.', answer: '累了就去充电休息。' },
        { type: 'translate', prompt: 'Tôi lo mình sẽ thất bại trong bài kiểm tra.', answer: '我担心自己会在测试中失败。' },
        { type: 'fill', sentence: '这张老唱片是我的___。', options: ['宝', '尺', '测'], answer: '宝' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 131: Dự án chung (1) — 20 từ
  // ─────────────────────────────────────────────────────────────────────────
  131: {
    id: 131,
    level: 4,
    title: 'Dự án chung (1)',
    context: 'Nhóm của Mai bắt tay vào một dự án quy mô lớn, đang ở giai đoạn then chốt. Mọi người đến từ nhiều nơi, ý tưởng đa dạng; Mai dọn dẹp phòng họp và chuẩn bị cuộc họp.',
    vocabPreview: ['大规模', '处于', '多样', '独自', '打扫'],
    objectives: [
      "Nắm nhóm từ khóa: 大规模 · 处于 · 多样 · 独自 · 打扫",
      "Nghe hiểu và kể lại tình huống Dự án chung (1) bằng câu HSK 4",
      "Phân biệt cách dùng 大规模 · 处于 · 多样",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "大规模 — quy mô lớn",
        explain: "Dùng 大规模 trong ngữ cảnh Dự án chung (1) để diễn đạt: quy mô lớn.",
        examples: [
          { zh: "这次是大规模的项目，我们处于关键阶段。", py: "Zhè cì shì dà guīmó de xiàngmù, wǒmen chǔyú guānjiàn jiēduàn.", vi: "Lần này là dự án quy mô lớn, chúng ta đang ở giai đoạn then chốt." }
        ] },
      { point: "处于 — đang ở (trạng thái)",
        explain: "Dùng 处于 trong ngữ cảnh Dự án chung (1) để diễn đạt: đang ở (trạng thái).",
        examples: [
          { zh: "这次是大规模的项目，我们处于关键阶段。", py: "Zhè cì shì dà guīmó de xiàngmù, wǒmen chǔyú guānjiàn jiēduàn.", vi: "Lần này là dự án quy mô lớn, chúng ta đang ở giai đoạn then chốt." }
        ] },
      { point: "多样 — đa dạng",
        explain: "Dùng 多样 trong ngữ cảnh Dự án chung (1) để diễn đạt: đa dạng.",
        examples: [
          { zh: "我们要打败竞争对手，方案要多样。", py: "Wǒmen yào dǎbài jìngzhēng duìshǒu, fāng'àn yào duōyàng.", vi: "Chúng ta phải đánh bại đối thủ, phương án phải đa dạng." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Văn phòng · Sáng', bg: 'office',
        cast: ['mai', 'laoli'],
        text: 'Nhóm của Mai bắt đầu một dự án quy mô lớn.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '这次是大规模的项目，我们处于关键阶段。',
        pinyin: 'Zhè cì shì dà guīmó de xiàngmù, wǒmen chǔyú guānjiàn jiēduàn.',
        meaning: 'Lần này là dự án quy mô lớn, chúng ta đang ở giai đoạn then chốt.',
        expression: 'focused', vocab: ['大规模', '处于'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '我们要打败竞争对手，方案要多样。',
        pinyin: 'Wǒmen yào dǎbài jìngzhēng duìshǒu, fāng\'àn yào duōyàng.',
        meaning: 'Chúng ta phải đánh bại đối thủ, phương án phải đa dạng.',
        expression: 'focused', vocab: ['打败', '多样'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '大多同事来自大陆，想法多种多样。',
        pinyin: 'Dàduō tóngshì láizì dàlù, xiǎngfǎ duō zhǒng duō yàng.',
        meaning: 'Đa số đồng nghiệp đến từ đại lục, ý tưởng đủ loại đa dạng.',
        expression: 'curious', vocab: ['大多', '大陆', '多种'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '开会前先点名。坐电梯上来，别走楼梯。',
        pinyin: 'Kāihuì qián xiān diǎnmíng. Zuò diàntī shànglái, bié zǒu lóutī.',
        meaning: 'Trước khi họp điểm danh đã. Đi thang máy lên, đừng đi cầu thang bộ.',
        expression: null, vocab: ['点名', '电梯'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '路上堵车，我被堵了很久，有点烦。',
        pinyin: 'Lùshang dǔchē, wǒ bèi dǔ le hěn jiǔ, yǒudiǎn fán.',
        meaning: 'Trên đường kẹt xe, tôi bị tắc rất lâu, hơi bực.',
        expression: 'sad', vocab: ['堵', '烦'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '我独自打扫了会议室，摆好纯净水。',
        pinyin: 'Wǒ dúzì dǎsǎo le huìyìshì, bǎi hǎo chúnjìngshuǐ.',
        meaning: 'Tôi một mình dọn dẹp phòng họp, bày sẵn nước tinh khiết.',
        expression: 'focused', vocab: ['独自', '打扫', '纯净水'] },
      { type: 'choice', speaker: 'laoli', cast: ['mai', 'laoli'], bg: 'office',
        scene: '📍 Văn phòng',
        expression: 'focused',
        q: 'Diễn đạt "Dự án đang ở giai đoạn quan trọng" đúng nhất?',
        options: [
          { text: '项目处于关键阶段。', pinyin: 'Xiàngmù chǔyú guānjiàn jiēduàn.', meaning: 'Dự án đang ở giai đoạn quan trọng.', correct: true,
            feedback: 'Đúng! 处于 = đang ở (trạng thái nào đó).' },
          { text: '项目处关键阶段。', pinyin: 'Xiàngmù chù guānjiàn jiēduàn.', meaning: '(thiếu, không tự nhiên)', correct: false,
            feedback: '处 đứng một mình không đủ; cần 处于 cho nghĩa "đang ở trạng thái".' },
          { text: '项目此关键阶段。', pinyin: 'Xiàngmù cǐ guānjiàn jiēduàn.', meaning: '(không thông)', correct: false,
            feedback: '此 = này/đây (trang trọng), không thay được 处于.' }
        ], vocab: ['处于', '处', '此'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '这种材料很纯，但有点粗。我们试了多次。',
        pinyin: 'Zhè zhǒng cáiliào hěn chún, dàn yǒudiǎn cū. Wǒmen shì le duō cì.',
        meaning: 'Loại vật liệu này rất thuần, nhưng hơi thô. Chúng tôi đã thử nhiều lần.',
        expression: 'curious', vocab: ['纯', '粗', '多次'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '把此事记下来，每人填一张单。',
        pinyin: 'Bǎ cǐ shì jì xiàlái, měi rén tián yì zhāng dān.',
        meaning: 'Ghi việc này lại, mỗi người điền một tờ đơn.',
        expression: null, vocab: ['此', '单'] },
      { type: 'checkpoint', questions: [
        { q: '“大规模” nghĩa là?', options: ['Quy mô lớn', 'Quy mô nhỏ', 'Đơn giản', 'Nhanh chóng'], answer: 0 },
        { q: '“堵车” — “堵” nghĩa là?', options: ['Tắc nghẽn', 'Thông suốt', 'Sạch sẽ', 'Đa dạng'], answer: 0 },
        { q: '“独自打扫” — “独自” nghĩa là?', options: ['Một mình', 'Cùng nhau', 'Nhiều lần', 'Phiền phức'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '处于', p: 'chǔ yú', v: 'đang ở (trạng thái)', e: 'go, be in, be (in a certain condition)' },
      { h: '处', p: 'chù', v: 'nơi, chỗ; xử lý', e: 'm.[general]' },
      { h: '纯', p: 'chún', v: 'thuần khiết, nguyên chất', e: 'pure, simple' },
      { h: '纯净水', p: 'chún jìng shuǐ', v: 'nước tinh khiết', e: 'pure water' },
      { h: '此', p: 'cǐ', v: 'này, đây', e: 'this, det.: this, here' },
      { h: '粗', p: 'cū', v: 'thô, to (đường kính)', e: 'wide (in diameter), thick' },
      { h: '打败', p: 'dǎ bài', v: 'đánh bại, thắng', e: 'rout, outplay, whip, scupper, wallop, mop up, finish, suffer a defeat, overrule, overwhelm, flog, ra' },
      { h: '打扫', p: 'dǎ sǎo', v: 'quét dọn', e: 'to clean, to sweep' },
      { h: '大多', p: 'dà duō', v: 'đa số, phần lớn', e: 'for the most part, many, most, the greater part, mostly' },
      { h: '大规模', p: 'dà guī mó', v: 'quy mô lớn', e: 'large scale, extensive, wide scale, broad scale' },
      { h: '大陆', p: 'dà lù', v: 'đại lục, lục địa', e: 'Ch. mainland' },
      { h: '单', p: 'dān', v: 'đơn lẻ; tờ đơn', e: 'singly, alone' },
      { h: '点名', p: 'diǎn míng', v: 'điểm danh, gọi tên', e: 'roll call, to mention sb by name, (to call or praise or criticize sb) by name' },
      { h: '电梯', p: 'diàn tī', v: 'thang máy', e: 'lift, elevator' },
      { h: '独自', p: 'dú zì', v: 'một mình', e: 'unaccompanied, solely, by oneself, alone' },
      { h: '堵', p: 'dǔ', v: 'tắc nghẽn, bít kín', e: 'to stop up, (to feel) stifled or suffocated, wall, classifier for walls' },
      { h: '多次', p: 'duō cì', v: 'nhiều lần', e: 'many times, repeatedly' },
      { h: '多样', p: 'duō yàng', v: 'đa dạng', e: 'diverse, multiform, various' },
      { h: '多种', p: 'duō zhǒng', v: 'nhiều loại', e: 'many kinds of, multiple, diverse, multi-' },
      { h: '烦', p: 'fán', v: 'phiền, bực bội', e: 'to feel vexed, to bother, to trouble, superfluous and confusing, edgy' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '这是个___的项目，很重要。', options: ['大规模', '独自', '多次'], answer: '大规模' },
        { type: 'fill', sentence: '坐___上楼比走楼梯快。', options: ['电梯', '大陆', '单'], answer: '电梯' },
        { type: 'fill', sentence: '开会前先___。', options: ['点名', '打败', '堵'], answer: '点名' },
        { type: 'fill', sentence: '我___打扫了会议室。', options: ['独自', '大多', '多样'], answer: '独自' },
        { type: 'fill', sentence: '路上___车，我迟到了。', options: ['堵', '纯', '粗'], answer: '堵' }
      ],
      normal: [
        { type: 'fill', sentence: '我们要___竞争对手。', options: ['打败', '打扫', '点名'], answer: '打败' },
        { type: 'fill', sentence: '___同事来自大陆。', options: ['大多', '多次', '独自'], answer: '大多' },
        { type: 'fill', sentence: '想法多种___。', options: ['多样', '大陆', '电梯'], answer: '多样' },
        { type: 'fill', sentence: '等了很久，我有点___。', options: ['烦', '纯', '单'], answer: '烦' },
        { type: 'order', words: ['我们', '处于', '关键', '阶段'], answer: '我们处于关键阶段' },
        { type: 'order', words: ['我', '独自', '打扫', '了', '会议室'], answer: '我独自打扫了会议室' },
        { type: 'fill', sentence: '请喝___，桌上有。', options: ['纯净水', '电梯', '点名'], answer: '纯净水' }
      ],
      hard: [
        { type: 'fill', sentence: '项目___关键阶段，要小心。', options: ['处于', '此', '单'], answer: '处于' },
        { type: 'fill', sentence: '这种材料很___，但有点粗。', options: ['纯', '烦', '堵'], answer: '纯' },
        { type: 'translate', prompt: 'Đa số đồng nghiệp đến từ đại lục.', answer: '大多同事来自大陆。' },
        { type: 'translate', prompt: 'Chúng ta phải đánh bại đối thủ.', answer: '我们要打败竞争对手。' },
        { type: 'translate', prompt: 'Ghi việc này lại, mỗi người điền một tờ đơn.', answer: '把此事记下来，每人填一张单。' },
        { type: 'fill', sentence: '我们试了___，才成功。', options: ['多次', '多样', '大多'], answer: '多次' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 132: Dự án chung (2) — 20 từ
  // ─────────────────────────────────────────────────────────────────────────
  132: {
    id: 132,
    level: 4,
    title: 'Dự án chung (2)',
    context: 'Dự án của nhóm là về một loại nước uống. Mai phân tích dữ liệu, hàm lượng, nguồn cung, và đi tàu cao tốc tham quan nhà máy. Nếu phương án đoạt giải, vinh dự thuộc về cả nhóm.',
    vocabPreview: ['感兴趣', '根据', '含有', '供应', '获奖'],
    objectives: [
      "Nắm nhóm từ khóa: 感兴趣 · 根据 · 含有 · 供应 · 获奖",
      "Nghe hiểu và kể lại tình huống Dự án chung (2) bằng câu HSK 4",
      "Phân biệt cách dùng 感兴趣 · 根据 · 含有",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "感兴趣 — cảm thấy hứng thú",
        explain: "Dùng 感兴趣 trong ngữ cảnh Dự án chung (2) để diễn đạt: cảm thấy hứng thú.",
        examples: [
          { zh: "我对这个关于饮料的项目很感兴趣。", py: "Wǒ duì zhège guānyú yǐnliào de xiàngmù hěn gǎn xìngqù.", vi: "Em rất hứng thú với dự án về đồ uống này." }
        ] },
      { point: "根据 — dựa theo",
        explain: "Dùng 根据 trong ngữ cảnh Dự án chung (2) để diễn đạt: dựa theo.",
        examples: [
          { zh: "根据数据，这种饮料含有维生素，含量很高。", py: "Gēnjù shùjù, zhè zhǒng yǐnliào hányǒu wéishēngsù, hánliàng hěn gāo.", vi: "Dựa theo dữ liệu, loại đồ uống này chứa vitamin, hàm lượng rất cao." }
        ] },
      { point: "含有 — chứa có",
        explain: "Dùng 含有 trong ngữ cảnh Dự án chung (2) để diễn đạt: chứa có.",
        examples: [
          { zh: "根据数据，这种饮料含有维生素，含量很高。", py: "Gēnjù shùjù, zhè zhǒng yǐnliào hányǒu wéishēngsù, hánliàng hěn gāo.", vi: "Dựa theo dữ liệu, loại đồ uống này chứa vitamin, hàm lượng rất cao." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Văn phòng · Sáng', bg: 'office',
        cast: ['mai', 'laoli'],
        text: 'Dự án của nhóm xoay quanh một loại nước uống mới.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '我对这个关于饮料的项目很感兴趣。',
        pinyin: 'Wǒ duì zhège guānyú yǐnliào de xiàngmù hěn gǎn xìngqù.',
        meaning: 'Em rất hứng thú với dự án về đồ uống này.',
        expression: 'happy', vocab: ['关于', '感兴趣'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '根据数据，这种饮料含有维生素，含量很高。',
        pinyin: 'Gēnjù shùjù, zhè zhǒng yǐnliào hányǒu wéishēngsù, hánliàng hěn gāo.',
        meaning: 'Dựa theo dữ liệu, loại đồ uống này chứa vitamin, hàm lượng rất cao.',
        expression: 'focused', vocab: ['根据', '含有', '含量'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '每瓶五百毫升，工厂能稳定供应。',
        pinyin: 'Měi píng wǔbǎi háoshēng, gōngchǎng néng wěndìng gōngyìng.',
        meaning: 'Mỗi chai năm trăm ml, nhà máy cung ứng ổn định.',
        expression: null, vocab: ['毫升', '供应'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '客户回复了邮件，几乎都满意，反应极好。',
        pinyin: 'Kèhù huífù le yóujiàn, jīhū dōu mǎnyì, fǎnyìng jí hǎo.',
        meaning: 'Khách hàng đã trả lời email, hầu như đều hài lòng, phản hồi cực tốt.',
        expression: 'happy', vocab: ['回复', '几乎', '极'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '上周我坐高铁去参观工厂，路很远。',
        pinyin: 'Shàng zhōu wǒ zuò gāotiě qù cānguān gōngchǎng, lù hěn yuǎn.',
        meaning: 'Tuần trước tôi đi tàu cao tốc đến tham quan nhà máy, đường khá xa.',
        expression: 'curious', vocab: ['高铁'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '如果方案获奖，荣誉归于整个团队。我们终于获了第一名。',
        pinyin: 'Rúguǒ fāng\'àn huòjiǎng, róngyù guīyú zhěnggè tuánduì. Wǒmen zhōngyú huò le dì-yī míng.',
        meaning: 'Nếu phương án đoạt giải, vinh dự thuộc về cả nhóm. Chúng ta cuối cùng đã giành giải nhất.',
        expression: 'happy', vocab: ['获奖', '归', '获'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'laoli'], bg: 'office',
        scene: '📍 Văn phòng',
        expression: 'focused',
        q: 'Diễn đạt "Chúng ta cần lấy thêm dữ liệu" đúng nhất?',
        options: [
          { text: '我们需要获取更多数据。', pinyin: 'Wǒmen xūyào huòqǔ gèng duō shùjù.', meaning: 'Chúng ta cần lấy thêm nhiều dữ liệu.', correct: true,
            feedback: 'Đúng! 获取 = lấy được/thu được (dữ liệu, thông tin).' },
          { text: '我们需要含有更多数据。', pinyin: 'Wǒmen xūyào hányǒu gèng duō shùjù.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '含有 = chứa có, không dùng cho hành động "lấy dữ liệu".' },
          { text: '我们需要归更多数据。', pinyin: 'Wǒmen xūyào guī gèng duō shùjù.', meaning: '(không thông)', correct: false,
            feedback: '归 = trở về/thuộc về, không hợp.' }
        ], vocab: ['获取', '含有', '归'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '仓库又寒冷又黑暗，我几乎冻僵了。',
        pinyin: 'Cāngkù yòu hánlěng yòu hēi\'àn, wǒ jīhū dòngjiāng le.',
        meaning: 'Nhà kho vừa lạnh giá vừa tối tăm, tôi gần như cóng cả người.',
        expression: 'sad', vocab: ['寒冷', '黑暗'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '每户家庭都收到样品。这种瓜含糖，种的时候别用太多肥。',
        pinyin: 'Měi hù jiātíng dōu shōudào yàngpǐn. Zhè zhǒng guā hán táng, zhòng de shíhou bié yòng tài duō féi.',
        meaning: 'Mỗi hộ gia đình đều nhận được mẫu thử. Loại dưa này có đường, khi trồng đừng dùng quá nhiều phân.',
        expression: null, vocab: ['户', '瓜', '肥'] },
      { type: 'checkpoint', questions: [
        { q: '“感兴趣” nghĩa là?', options: ['Cảm thấy hứng thú', 'Chán nản', 'Mệt mỏi', 'Tức giận'], answer: 0 },
        { q: '“根据数据” — “根据” nghĩa là?', options: ['Dựa theo', 'Phản đối', 'Bỏ qua', 'Gửi đi'], answer: 0 },
        { q: '“含有维生素” — “含有” nghĩa là?', options: ['Chứa có', 'Thiếu', 'Bán ra', 'Trở về'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '肥', p: 'féi', v: 'béo, phì; phân bón', e: 'fat, fertile, loose-fitting or large, to fertilize, to become rich by illegal means, fertilizer, man' },
      { h: '感兴趣', p: 'gǎn xìng qù', v: 'cảm thấy hứng thú', e: 'be interested, be interested in' },
      { h: '高铁', p: 'gāo tiě', v: 'tàu cao tốc', e: 'high speed rail' },
      { h: '根据', p: 'gēn jù', v: 'dựa theo, căn cứ vào', e: 'on the basis of, according to' },
      { h: '供应', p: 'gōng yìng', v: 'cung cấp, cung ứng', e: 'supply' },
      { h: '瓜', p: 'guā', v: 'quả dưa, bầu bí', e: 'melon, gourd, squash' },
      { h: '关于', p: 'guān yú', v: 'về, liên quan đến', e: 'about, with regard to, concerning' },
      { h: '归', p: 'guī', v: 'trở về, thuộc về', e: 'return ... to, put in sb.\'s charge, take refuge, turn over to, return sth. to, come together, belong' },
      { h: '含量', p: 'hán liàng', v: 'hàm lượng', e: 'content, quantity contained' },
      { h: '含有', p: 'hán yǒu', v: 'chứa có, bao gồm', e: 'have, involve, infer, imply, tinge, include, number, carry, contain' },
      { h: '寒冷', p: 'hán lěng', v: 'lạnh giá', e: 'cold, frigid' },
      { h: '毫升', p: 'háo shēng', v: 'mililit (ml)', e: 'milliliter' },
      { h: '黑暗', p: 'hēi àn', v: 'tối tăm, bóng tối', e: 'dark' },
      { h: '户', p: 'hù', v: 'hộ, gia đình', e: 'm.[general]' },
      { h: '回复', p: 'huí fù', v: 'trả lời, hồi đáp', e: 'to reply, to recover, to return (to a previous condition), Re: in reply to (email)' },
      { h: '获', p: 'huò', v: 'thu được, giành được', e: 'harvest, capture, obtain, get, catch, poll, be able to, reap, gather in, win' },
      { h: '获奖', p: 'huò jiǎng', v: 'giành giải thưởng', e: 'to win an award' },
      { h: '获取', p: 'huò qǔ', v: 'lấy được, có được', e: 'to gain, to get, to acquire' },
      { h: '几乎', p: 'jī hū', v: 'hầu như, gần như', e: 'chiefly, anear, about, near, just_about, most, well-nigh, almost, closely, practically, intimately, ' },
      { h: '极', p: 'jí', v: 'cực kỳ', e: 'extraordinary, unusual, special, very, extremely, highly' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我对这个项目很___。', options: ['感兴趣', '回复', '黑暗'], answer: '感兴趣' },
        { type: 'fill', sentence: '___数据，这种饮料很健康。', options: ['根据', '供应', '获取'], answer: '根据' },
        { type: 'fill', sentence: '这种饮料___维生素。', options: ['含有', '回复', '几乎'], answer: '含有' },
        { type: 'fill', sentence: '我坐___去参观工厂。', options: ['高铁', '毫升', '瓜'], answer: '高铁' },
        { type: 'fill', sentence: '客户___了我的邮件。', options: ['回复', '含有', '供应'], answer: '回复' }
      ],
      normal: [
        { type: 'fill', sentence: '工厂能稳定___产品。', options: ['供应', '获取', '回复'], answer: '供应' },
        { type: 'fill', sentence: '客户___都满意。', options: ['几乎', '关于', '寒冷'], answer: '几乎' },
        { type: 'fill', sentence: '反应___好，大家很高兴。', options: ['极', '户', '瓜'], answer: '极' },
        { type: 'fill', sentence: '如果方案___，荣誉归于团队。', options: ['获奖', '回复', '含量'], answer: '获奖' },
        { type: 'order', words: ['荣誉', '归于', '整个', '团队'], answer: '荣誉归于整个团队' },
        { type: 'order', words: ['这', '种', '饮料', '含有', '维生素'], answer: '这种饮料含有维生素' },
        { type: 'fill', sentence: '维生素的___很高。', options: ['含量', '高铁', '黑暗'], answer: '含量' }
      ],
      hard: [
        { type: 'fill', sentence: '我们需要___更多数据。', options: ['获取', '含有', '归'], answer: '获取' },
        { type: 'fill', sentence: '仓库又___又黑暗。', options: ['寒冷', '感兴趣', '供应'], answer: '寒冷' },
        { type: 'translate', prompt: 'Mỗi chai năm trăm ml.', answer: '每瓶五百毫升。' },
        { type: 'translate', prompt: 'Dựa theo dữ liệu, hàm lượng vitamin rất cao.', answer: '根据数据，维生素含量很高。' },
        { type: 'translate', prompt: 'Nếu phương án đoạt giải, vinh dự thuộc về cả nhóm.', answer: '如果方案获奖，荣誉归于整个团队。' },
        { type: 'fill', sentence: '每___家庭都收到样品。', options: ['户', '瓜', '极'], answer: '户' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 133: Thuyết trình trước nhóm — 20 từ
  // ─────────────────────────────────────────────────────────────────────────
  133: {
    id: 133,
    level: 4,
    title: 'Thuyết trình trước nhóm',
    context: 'Đến lượt Mai lên thuyết trình. Em trình bày kế hoạch mở rộng thị trường, xúc động khi nói về quê nhà, và cả nhóm nhận ra thành công không thể tách rời nỗ lực của mọi người.',
    vocabPreview: ['扩展', '历史', '离不开', '加入', '聚'],
    objectives: [
      "Nắm nhóm từ khóa: 扩展 · 历史 · 离不开 · 加入 · 聚",
      "Nghe hiểu và kể lại tình huống Thuyết trình trước nhóm bằng câu HSK 4",
      "Phân biệt cách dùng 扩展 · 历史 · 离不开",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "扩展 — mở rộng",
        explain: "Dùng 扩展 trong ngữ cảnh Thuyết trình trước nhóm để diễn đạt: mở rộng.",
        examples: [
          { zh: "这个城市历史悠久，前景宽广，我们要扩展市场。", py: "Zhège chéngshì lìshǐ yōujiǔ, qiánjǐng kuānguǎng, wǒmen yào kuòzhǎn shìchǎng.", vi: "Thành phố này lịch sử lâu đời, triển vọng rộng mở, chúng ta cần mở rộng thị trường." }
        ] },
      { point: "历史 — lịch sử",
        explain: "Dùng 历史 trong ngữ cảnh Thuyết trình trước nhóm để diễn đạt: lịch sử.",
        examples: [
          { zh: "这个城市历史悠久，前景宽广，我们要扩展市场。", py: "Zhège chéngshì lìshǐ yōujiǔ, qiánjǐng kuānguǎng, wǒmen yào kuòzhǎn shìchǎng.", vi: "Thành phố này lịch sử lâu đời, triển vọng rộng mở, chúng ta cần mở rộng thị trường." }
        ] },
      { point: "加入 — tham gia",
        explain: "Dùng 加入 trong ngữ cảnh Thuyết trình trước nhóm để diễn đạt: tham gia.",
        examples: [
          { zh: "越来越多客户加入，产品要经过检测，质量不能降。", py: "Yuèláiyuè duō kèhù jiārù, chǎnpǐn yào jīngguò jiǎncè, zhìliàng bùnéng jiàng.", vi: "Ngày càng nhiều khách hàng tham gia, sản phẩm phải qua kiểm định, chất lượng không được giảm." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Phòng họp · Sáng', bg: 'office',
        cast: ['mai', 'laoli'],
        text: 'Đến lượt Mai lên thuyết trình trước cả nhóm.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '今天轮到你上台，大家都聚在会议室。',
        pinyin: 'Jīntiān lún dào nǐ shàngtái, dàjiā dōu jù zài huìyìshì.',
        meaning: 'Hôm nay đến lượt em lên thuyết trình, mọi người đều tụ họp ở phòng họp.',
        expression: 'focused', vocab: ['轮', '聚'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '我从口袋里拿出讲稿，走上楼梯到台上。',
        pinyin: 'Wǒ cóng kǒudai lǐ ná chū jiǎnggǎo, zǒu shàng lóutī dào tái shàng.',
        meaning: 'Tôi lấy bài nói từ trong túi áo ra, bước lên cầu thang đến sân khấu.',
        expression: 'focused', vocab: ['口袋', '楼梯'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '这个城市历史悠久，前景宽广，我们要扩展市场。',
        pinyin: 'Zhège chéngshì lìshǐ yōujiǔ, qiánjǐng kuānguǎng, wǒmen yào kuòzhǎn shìchǎng.',
        meaning: 'Thành phố này lịch sử lâu đời, triển vọng rộng mở, chúng ta cần mở rộng thị trường.',
        expression: 'happy', vocab: ['历史', '宽广', '扩展'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '很好。把这几点列入计划，列为重点，一项一项列出来。',
        pinyin: 'Hěn hǎo. Bǎ zhè jǐ diǎn lièrù jìhuà, lièwéi zhòngdiǎn, yí xiàng yí xiàng liè chūlái.',
        meaning: 'Tốt lắm. Đưa mấy điểm này vào kế hoạch, xếp làm trọng điểm, liệt kê ra từng mục một.',
        expression: 'happy', vocab: ['列入', '列为', '列'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '越来越多客户加入，产品要经过检测，质量不能降。',
        pinyin: 'Yuèláiyuè duō kèhù jiārù, chǎnpǐn yào jīngguò jiǎncè, zhìliàng bùnéng jiàng.',
        meaning: 'Ngày càng nhiều khách hàng tham gia, sản phẩm phải qua kiểm định, chất lượng không được giảm.',
        expression: 'curious', vocab: ['加入', '检测', '降'] },
      { type: 'choice', speaker: 'mai', cast: ['mai'], bg: 'office',
        scene: '📍 Phòng họp',
        expression: 'focused',
        q: 'Diễn đạt "Thành công của dự án không thể tách rời nỗ lực của mọi người" đúng nhất?',
        options: [
          { text: '项目的成功离不开大家的努力。', pinyin: 'Xiàngmù de chénggōng líbukāi dàjiā de nǔlì.', meaning: 'Thành công của dự án không thể tách rời nỗ lực của mọi người.', correct: true,
            feedback: 'Đúng! 离不开 = không thể thiếu/tách rời.' },
          { text: '项目的成功列大家的努力。', pinyin: 'Xiàngmù de chénggōng liè dàjiā de nǔlì.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '列 = liệt kê/xếp hàng, không hợp.' },
          { text: '项目的成功轮大家的努力。', pinyin: 'Xiàngmù de chénggōng lún dàjiā de nǔlì.', meaning: '(không thông)', correct: false,
            feedback: '轮 = lượt/vòng, không hợp.' }
        ], vocab: ['离不开', '列', '轮'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '说到老家，我流下泪水，眼里满是泪。',
        pinyin: 'Shuō dào lǎojiā, wǒ liú xià lèishuǐ, yǎn lǐ mǎn shì lèi.',
        meaning: 'Nói đến quê nhà, tôi rơi nước mắt, mắt đẫm lệ.',
        expression: 'sad', vocab: ['老家', '泪水', '泪'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '路两边都是垃圾，活动后记得清理。如果得奖，每人有份。',
        pinyin: 'Lù liǎngbiān dōu shì lājī, huódòng hòu jìde qīnglǐ. Rúguǒ déjiǎng, měi rén yǒu fèn.',
        meaning: 'Hai bên đường đầy rác, sau hoạt động nhớ dọn. Nếu được giải, mỗi người có phần.',
        expression: null, vocab: ['两边', '垃圾', '奖'] },
      { type: 'checkpoint', questions: [
        { q: '“轮到你上台” — “轮到” nghĩa là?', options: ['Đến lượt', 'Từ chối', 'Tụ tập', 'Liệt kê'], answer: 0 },
        { q: '“离不开大家的努力” nghĩa là?', options: ['Không thể thiếu', 'Rời khỏi', 'Phản đối', 'Giảm bớt'], answer: 0 },
        { q: '“历史悠久” — “历史” nghĩa là?', options: ['Lịch sử', 'Tương lai', 'Rác', 'Túi áo'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '加入', p: 'jiā rù', v: 'tham gia, gia nhập', e: 'join, accede to' },
      { h: '检测', p: 'jiǎn cè', v: 'kiểm định, kiểm tra', e: 'to detect, to test, detection, sensing' },
      { h: '奖', p: 'jiǎng', v: 'giải thưởng, khen thưởng', e: 'award, prize, reward' },
      { h: '降', p: 'jiàng', v: 'hạ xuống, giảm', e: 'fall, drop, lower' },
      { h: '聚', p: 'jù', v: 'tụ tập, tụ họp', e: 'get together, assemble, forgather, gather' },
      { h: '口袋', p: 'kǒu dai', v: 'túi áo, túi quần', e: 'pocket' },
      { h: '宽广', p: 'kuān guǎng', v: 'rộng rãi, bao la', e: 'wide, vast, extensive, broad' },
      { h: '扩展', p: 'kuò zhǎn', v: 'mở rộng, phát triển', e: 'expand, spread, extend' },
      { h: '垃圾', p: 'lā jī', v: 'rác', e: 'leavings, crap, sordes, trumpery, culch, garbage, filth, debris, cultch, sweeping, trashery, raffle,' },
      { h: '老家', p: 'lǎo jiā', v: 'quê nhà, nhà cũ', e: 'native place, old home, one\'s original home' },
      { h: '泪', p: 'lèi', v: 'nước mắt, lệ', e: 'tear, lachrymal, teardrop, brine, eyewater' },
      { h: '泪水', p: 'lèi shuǐ', v: 'nước mắt, giọt lệ', e: 'teardrop, tears' },
      { h: '离不开', p: 'lí bu kāi', v: 'không thể thiếu, gắn bó', e: 'inseparable, inevitably linked to' },
      { h: '历史', p: 'lì shǐ', v: 'lịch sử', e: 'past records, historical, history' },
      { h: '两边', p: 'liǎng biān', v: 'hai bên', e: 'either side, both sides' },
      { h: '列', p: 'liè', v: 'xếp hàng, liệt kê', e: 'arrange, line up, list, enter in a list' },
      { h: '列入', p: 'liè rù', v: 'đưa vào (danh sách)', e: 'be listed, be listed/placed, placed, be placed, rank' },
      { h: '列为', p: 'liè wéi', v: 'xếp vào loại, phân loại là', e: 'be classified as' },
      { h: '楼梯', p: 'lóu tī', v: 'cầu thang', e: 'stairs, staircase' },
      { h: '轮', p: 'lún', v: 'vòng, lượt; bánh xe', e: 'm.[event]' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '今天___到你上台。', options: ['轮', '聚', '降'], answer: '轮' },
        { type: 'fill', sentence: '大家都___在会议室。', options: ['聚', '列', '降'], answer: '聚' },
        { type: 'fill', sentence: '我从___里拿出讲稿。', options: ['口袋', '楼梯', '垃圾'], answer: '口袋' },
        { type: 'fill', sentence: '走上___到台上。', options: ['楼梯', '口袋', '老家'], answer: '楼梯' },
        { type: 'fill', sentence: '这个城市___悠久。', options: ['历史', '泪水', '垃圾'], answer: '历史' }
      ],
      normal: [
        { type: 'fill', sentence: '我们要___市场，前景宽广。', options: ['扩展', '检测', '加入'], answer: '扩展' },
        { type: 'fill', sentence: '越来越多客户___我们。', options: ['加入', '列入', '降'], answer: '加入' },
        { type: 'fill', sentence: '产品要经过___。', options: ['检测', '聚', '轮'], answer: '检测' },
        { type: 'fill', sentence: '把这几点___计划。', options: ['列入', '加入', '宽广'], answer: '列入' },
        { type: 'order', words: ['大家', '都', '聚', '在', '会议室'], answer: '大家都聚在会议室' },
        { type: 'order', words: ['路', '两边', '都', '是', '垃圾'], answer: '路两边都是垃圾' },
        { type: 'fill', sentence: '质量不能___，要保证。', options: ['降', '聚', '列'], answer: '降' }
      ],
      hard: [
        { type: 'fill', sentence: '项目的成功___大家的努力。', options: ['离不开', '列', '轮'], answer: '离不开' },
        { type: 'fill', sentence: '说到老家，我流下___。', options: ['泪水', '口袋', '垃圾'], answer: '泪水' },
        { type: 'translate', prompt: 'Đến lượt em lên thuyết trình.', answer: '轮到你上台。' },
        { type: 'translate', prompt: 'Thành phố này lịch sử lâu đời, triển vọng rộng mở.', answer: '这个城市历史悠久，前景宽广。' },
        { type: 'translate', prompt: 'Sau hoạt động nhớ dọn rác ở hai bên đường.', answer: '活动后记得清理路两边的垃圾。' },
        { type: 'fill', sentence: '把这几点___重点。', options: ['列为', '加入', '检测'], answer: '列为' }
      ]
    }
  }

});

// ───────────────────────────────────────────────────────
// BATCH 4 — Bài 134-138 (Phản hồi · Cân bằng · Quyết định · Trưởng thành · Nhìn lại)
// ───────────────────────────────────────────────────────
Object.assign(COURSE_DATA, {

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 134: Phản hồi và sửa sai — 20 từ
  // ─────────────────────────────────────────────────────────────────────────
  134: {
    id: 134,
    level: 4,
    title: 'Phản hồi và sửa sai',
    context: 'Kỳ giữa kỳ qua đi, kỳ cuối kỳ đến gần. Công ty có một cơ hội phỏng vấn nội bộ. Mai chuẩn bị, phỏng vấn, rồi cùng đồng nghiệp ăn mừng.',
    vocabPreview: ['面试', '期末', '内部', '描述', '没想到'],
    objectives: [
      "Nắm nhóm từ khóa: 面试 · 期末 · 内部 · 描述 · 没想到",
      "Nghe hiểu và kể lại tình huống Phản hồi và sửa sai bằng câu HSK 4",
      "Phân biệt cách dùng 面试 · 期末 · 内部",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "面试 — phỏng vấn (tuyển dụng)",
        explain: "Dùng 面试 trong ngữ cảnh Phản hồi và sửa sai để diễn đạt: phỏng vấn (tuyển dụng).",
        examples: [
          { zh: "期中过了，期末快到了。公司内部有个面试机会。", py: "Qīzhōng guò le, qīmò kuài dào le. Gōngsī nèibù yǒu ge miànshì jīhuì.", vi: "Giữa kỳ qua rồi, cuối kỳ sắp tới. Trong nội bộ công ty có một cơ hội phỏng vấn." }
        ] },
      { point: "期末 — cuối kỳ",
        explain: "Dùng 期末 trong ngữ cảnh Phản hồi và sửa sai để diễn đạt: cuối kỳ.",
        examples: [
          { zh: "期中过了，期末快到了。公司内部有个面试机会。", py: "Qīzhōng guò le, qīmò kuài dào le. Gōngsī nèibù yǒu ge miànshì jīhuì.", vi: "Giữa kỳ qua rồi, cuối kỳ sắp tới. Trong nội bộ công ty có một cơ hội phỏng vấn." }
        ] },
      { point: "内部 — nội bộ",
        explain: "Dùng 内部 trong ngữ cảnh Phản hồi và sửa sai để diễn đạt: nội bộ.",
        examples: [
          { zh: "期中过了，期末快到了。公司内部有个面试机会。", py: "Qīzhōng guò le, qīmò kuài dào le. Gōngsī nèibù yǒu ge miànshì jīhuì.", vi: "Giữa kỳ qua rồi, cuối kỳ sắp tới. Trong nội bộ công ty có một cơ hội phỏng vấn." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Văn phòng · Sáng', bg: 'office',
        cast: ['mai', 'laoli'],
        text: 'Kỳ giữa kỳ qua đi, kỳ cuối kỳ đến gần.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '期中过了，期末快到了。公司内部有个面试机会。',
        pinyin: 'Qīzhōng guò le, qīmò kuài dào le. Gōngsī nèibù yǒu ge miànshì jīhuì.',
        meaning: 'Giữa kỳ qua rồi, cuối kỳ sắp tới. Trong nội bộ công ty có một cơ hội phỏng vấn.',
        expression: 'focused', vocab: ['期中', '期末', '内部', '面试'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '没想到这么快！我要好好描述自己的经历。',
        pinyin: 'Méi xiǎngdào zhème kuài! Wǒ yào hǎohǎo miáoshù zìjǐ de jīnglì.',
        meaning: 'Không ngờ nhanh vậy! Em phải mô tả thật tốt kinh nghiệm của mình.',
        expression: 'surprise', vocab: ['没想到', '描述'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '面试时男女都一样，重点是能力，不必穿名牌儿。',
        pinyin: 'Miànshì shí nánnǚ dōu yíyàng, zhòngdiǎn shì nénglì, búbì chuān míngpáir.',
        meaning: 'Khi phỏng vấn nam nữ đều như nhau, quan trọng là năng lực, không cần mặc hàng hiệu.',
        expression: null, vocab: ['男女', '名牌儿'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '我明白。我不想像模特儿那样打扮，只要平稳发挥。',
        pinyin: 'Wǒ míngbai. Wǒ bù xiǎng xiàng mótèr nàyàng dǎban, zhǐyào píngwěn fāhuī.',
        meaning: 'Em hiểu. Em không muốn ăn diện như người mẫu, chỉ cần phát huy ổn định.',
        expression: 'focused', vocab: ['模特儿', '平稳'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '面试在一个宁静的房间，开着暖气，一位男士问我问题。',
        pinyin: 'Miànshì zài yí ge níngjìng de fángjiān, kāizhe nuǎnqì, yí wèi nánshì wèn wǒ wèntí.',
        meaning: 'Buổi phỏng vấn ở một căn phòng yên tĩnh, bật lò sưởi, một quý ông hỏi tôi các câu hỏi.',
        expression: 'curious', vocab: ['宁静', '暖气', '男士'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '月末公司发美金奖金，我梦见自己拿到了。这段时间日程很密，但很充实。',
        pinyin: 'Yuèmò gōngsī fā měijīn jiǎngjīn, wǒ mèngjiàn zìjǐ ná dào le. Zhè duàn shíjiān rìchéng hěn mì, dàn hěn chōngshí.',
        meaning: 'Cuối tháng công ty phát thưởng bằng đô la Mỹ, tôi mơ thấy mình nhận được. Dạo này lịch khá dày, nhưng rất sung túc.',
        expression: 'happy', vocab: ['末', '美金', '梦见', '密'] },
      { type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'office',
        scene: '📍 Văn phòng',
        expression: 'happy',
        q: 'Sau buổi phỏng vấn, mọi người ăn mừng ồn ào. Diễn đạt "Đừng làm ồn nữa, chúng ta chụp ảnh chung đi" sao cho đúng?',
        options: [
          { text: '别闹了，我们一起拍照吧。', pinyin: 'Bié nào le, wǒmen yìqǐ pāizhào ba.', meaning: 'Đừng làm ồn nữa, chúng ta chụp ảnh chung đi.', correct: true,
            feedback: 'Đúng! 闹 = làm ồn; 拍照 = chụp ảnh.' },
          { text: '别胖子了，我们一起拍照吧。', pinyin: 'Bié pàngzi le, wǒmen yìqǐ pāizhào ba.', meaning: '(sai từ loại)', correct: false,
            feedback: '胖子 = người béo (danh từ), không phải động từ "làm ồn".' },
          { text: '别闹了，我们一起描述吧。', pinyin: 'Bié nào le, wǒmen yìqǐ miáoshù ba.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '描述 = miêu tả, không phải "chụp ảnh".' }
        ], vocab: ['闹', '拍照', '胖子', '描述'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '同事开玩笑叫我"小胖子"，其实我不胖，哈哈。',
        pinyin: 'Tóngshì kāiwánxiào jiào wǒ "xiǎo pàngzi", qíshí wǒ bú pàng, hāhā.',
        meaning: 'Đồng nghiệp đùa gọi tôi là "bé mập", thật ra tôi đâu có mập, haha.',
        expression: 'happy', vocab: ['胖子'] },
      { type: 'checkpoint', questions: [
        { q: '“面试” nghĩa là?', options: ['Phỏng vấn (tuyển dụng)', 'Thi cuối kỳ', 'Chụp ảnh', 'Người mẫu'], answer: 0 },
        { q: '“期末” chỉ điều gì?', options: ['Cuối kỳ', 'Giữa kỳ', 'Đầu kỳ', 'Nghỉ hè'], answer: 0 },
        { q: '“别闹了” — “闹” nghĩa là?', options: ['Làm ồn, nghịch', 'Yên tĩnh', 'Chụp ảnh', 'Miêu tả'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '没想到', p: 'méi xiǎng dào', v: 'không ngờ, bất ngờ là', e: 'unexpectedly' },
      { h: '美金', p: 'měi jīn', v: 'đô la Mỹ (USD)', e: 'buck, dollar, U.S. dollar' },
      { h: '梦见', p: 'mèng jiàn', v: 'mơ thấy', e: 'to dream about (sth or sb), to see in a dream' },
      { h: '密', p: 'mì', v: 'dày, thân mật, bí mật', e: 'dense, thick, intimate, close' },
      { h: '面试', p: 'miàn shì', v: 'phỏng vấn (tuyển dụng)', e: 'to be interviewed (as a candidate), interview' },
      { h: '描述', p: 'miáo shù', v: 'miêu tả, mô tả', e: 'describe' },
      { h: '名牌儿', p: 'míng páir', v: 'hàng hiệu, thương hiệu nổi tiếng', e: 'Famous brand' },
      { h: '模特儿', p: 'mó tèr', v: 'người mẫu', e: 'poser, artist\'s model, model' },
      { h: '末', p: 'mò', v: 'cuối, đầu ngọn', e: 'tip, end' },
      { h: '男女', p: 'nán nǚ', v: 'nam nữ', e: 'men and women' },
      { h: '男士', p: 'nán shì', v: 'quý ông, nam giới', e: 'gent, man, men, menfolk' },
      { h: '闹', p: 'nào', v: 'ồn ào, làm náo loạn', e: 'give vent, be troubled by, give vent to anger, suffer from, make a noise, do, stir up trouble, make,' },
      { h: '内部', p: 'nèi bù', v: 'nội bộ, bên trong', e: 'entrails, bowel, interior, inner, within, bosom, inside, innards, internal, inward' },
      { h: '宁静', p: 'níng jìng', v: 'yên tĩnh, thanh bình', e: 'peaceful, tranquil, quiet' },
      { h: '暖气', p: 'nuǎn qì', v: 'lò sưởi, hơi ấm', e: 'central heating, heater, warm air' },
      { h: '拍照', p: 'pāi zhào', v: 'chụp ảnh', e: 'take a picture, take (picture), shoot (film), snap, film, take a photograph, take, photograph, shoot' },
      { h: '胖子', p: 'pàng zi', v: 'người béo', e: 'fat person, fatty' },
      { h: '平稳', p: 'píng wěn', v: 'ổn định, bình ổn', e: 'smooth, steady' },
      { h: '期末', p: 'qī mò', v: 'cuối kỳ', e: 'end of term' },
      { h: '期中', p: 'qī zhōng', v: 'giữa kỳ', e: 'interim, midterm' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '公司内部有个___机会。', options: ['面试', '期末', '暖气'], answer: '面试' },
        { type: 'fill', sentence: '___过了，期末快到了。', options: ['期中', '内部', '名牌儿'], answer: '期中' },
        { type: 'fill', sentence: '房间很___，适合面试。', options: ['宁静', '闹', '密'], answer: '宁静' },
        { type: 'fill', sentence: '冬天开___很暖和。', options: ['暖气', '美金', '胖子'], answer: '暖气' },
        { type: 'fill', sentence: '我们一起___留个纪念。', options: ['拍照', '描述', '面试'], answer: '拍照' }
      ],
      normal: [
        { type: 'fill', sentence: '我要好好___自己的经历。', options: ['描述', '拍照', '梦见'], answer: '描述' },
        { type: 'fill', sentence: '面试时___都一样，重点是能力。', options: ['男女', '名牌儿', '期末'], answer: '男女' },
        { type: 'fill', sentence: '只要___发挥就好。', options: ['平稳', '宁静', '内部'], answer: '平稳' },
        { type: 'fill', sentence: '别___了，安静一点。', options: ['闹', '描述', '拍照'], answer: '闹' },
        { type: 'order', words: ['公司', '内部', '有', '个', '面试', '机会'], answer: '公司内部有个面试机会' },
        { type: 'order', words: ['不必', '穿', '名牌儿'], answer: '不必穿名牌儿' },
        { type: 'fill', sentence: '___这么快就到面试了！', options: ['没想到', '内部', '平稳'], answer: '没想到' }
      ],
      hard: [
        { type: 'fill', sentence: '月___公司发美金奖金。', options: ['末', '密', '闹'], answer: '末' },
        { type: 'fill', sentence: '我不想像___那样打扮。', options: ['模特儿', '男士', '胖子'], answer: '模特儿' },
        { type: 'translate', prompt: 'Không ngờ nhanh vậy!', answer: '没想到这么快！' },
        { type: 'translate', prompt: 'Khi phỏng vấn nam nữ đều như nhau, quan trọng là năng lực.', answer: '面试时男女都一样，重点是能力。' },
        { type: 'translate', prompt: 'Dạo này lịch khá dày, nhưng rất sung túc.', answer: '这段时间日程很密，但很充实。' },
        { type: 'fill', sentence: '一位___问了我几个问题。', options: ['男士', '胖子', '暖气'], answer: '男士' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 135: Cân bằng học và làm — 20 từ
  // ─────────────────────────────────────────────────────────────────────────
  135: {
    id: 135,
    level: 4,
    title: 'Cân bằng học và làm',
    context: 'Mai học cách cân bằng giữa thực tập và học hành. Em đi đầu đăng ký một hoạt động tình nguyện giúp người nghèo, rồi đi kiểm tra sức khỏe theo lịch công ty.',
    vocabPreview: ['率先', '食堂', '穷人', '体检', '替代'],
    objectives: [
      "Nắm nhóm từ khóa: 率先 · 食堂 · 穷人 · 体检 · 替代",
      "Nghe hiểu và kể lại tình huống Cân bằng học và làm bằng câu HSK 4",
      "Phân biệt cách dùng 率先 · 食堂 · 穷人",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "率先 — đi đầu",
        explain: "Dùng 率先 trong ngữ cảnh Cân bằng học và làm để diễn đạt: đi đầu.",
        examples: [
          { zh: "实习和学习要平衡，我率先报名了志愿活动。", py: "Shíxí hé xuéxí yào pínghéng, wǒ shuàixiān bàomíng le zhìyuàn huódòng.", vi: "Thực tập và học hành phải cân bằng, tớ đi đầu đăng ký hoạt động tình nguyện." }
        ] },
      { point: "食堂 — nhà ăn",
        explain: "Dùng 食堂 trong ngữ cảnh Cân bằng học và làm để diễn đạt: nhà ăn.",
        examples: [
          { zh: "我们去食堂喝点汽水、酸奶，顺便聊聊。", py: "Wǒmen qù shítáng hē diǎn qìshuǐ, suānnǎi, shùnbiàn liáoliáo.", vi: "Tụi mình ra căng-tin uống chút nước ngọt, sữa chua, tiện thể nói chuyện." }
        ] },
      { point: "穷人 — người nghèo",
        explain: "Dùng 穷人 trong ngữ cảnh Cân bằng học và làm để diễn đạt: người nghèo.",
        examples: [
          { zh: "活动是帮助穷人，送他们日用品，别用太多塑料。", py: "Huódòng shì bāngzhù qióngrén, sòng tāmen rìyòngpǐn, bié yòng tài duō sùliào.", vi: "Hoạt động là giúp người nghèo, tặng họ đồ dùng, đừng dùng quá nhiều nhựa." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Sân trường · Trưa', bg: 'campus',
        cast: ['mai', 'xiaomei'],
        text: 'Mai cố cân bằng giữa thực tập và việc học.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '实习和学习要平衡，我率先报名了志愿活动。',
        pinyin: 'Shíxí hé xuéxí yào pínghéng, wǒ shuàixiān bàomíng le zhìyuàn huódòng.',
        meaning: 'Thực tập và học hành phải cân bằng, tớ đi đầu đăng ký hoạt động tình nguyện.',
        expression: 'happy', vocab: ['率先'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我们去食堂喝点汽水、酸奶，顺便聊聊。',
        pinyin: 'Wǒmen qù shítáng hē diǎn qìshuǐ, suānnǎi, shùnbiàn liáoliáo.',
        meaning: 'Tụi mình ra căng-tin uống chút nước ngọt, sữa chua, tiện thể nói chuyện.',
        expression: 'happy', vocab: ['食堂', '汽水', '酸奶'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '活动是帮助穷人，送他们日用品，别用太多塑料。',
        pinyin: 'Huódòng shì bāngzhù qióngrén, sòng tāmen rìyòngpǐn, bié yòng tài duō sùliào.',
        meaning: 'Hoạt động là giúp người nghèo, tặng họ đồ dùng, đừng dùng quá nhiều nhựa.',
        expression: 'focused', vocab: ['穷人', '塑料'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '你们的友谊很深厚、很亲密。上楼帮我搬东西好吗？',
        pinyin: 'Nǐmen de yǒuyì hěn shēnhòu, hěn qīnmì. Shàng lóu bāng wǒ bān dōngxi hǎo ma?',
        meaning: 'Tình bạn của các em rất sâu sắc, rất thân thiết. Lên gác giúp thầy khiêng đồ nhé?',
        expression: 'happy', vocab: ['深厚', '亲密', '上楼'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '好，我使劲抬。布置时我们挂了不少气球，活动后再一起扫地。',
        pinyin: 'Hǎo, wǒ shǐjìn tái. Bùzhì shí wǒmen guà le bùshǎo qìqiú, huódòng hòu zài yìqǐ sǎo dì.',
        meaning: 'Vâng, em ráng sức khiêng. Lúc trang trí tụi em treo nhiều bóng bay, sau hoạt động cùng quét dọn.',
        expression: 'focused', vocab: ['使劲', '气球', '扫'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '公司还安排了体检，护士量了我的身高。',
        pinyin: 'Gōngsī hái ānpái le tǐjiǎn, hùshi liáng le wǒ de shēngāo.',
        meaning: 'Công ty còn sắp xếp khám sức khỏe, y tá đo chiều cao của tôi.',
        expression: 'curious', vocab: ['体检', '身高'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'laoli'], bg: 'office',
        scene: '📍 Văn phòng',
        expression: 'focused',
        q: 'Một đồng nghiệp xin nghỉ. Diễn đạt "Tôi điền giúp anh ấy một cái biểu mẫu" sao cho đúng?',
        options: [
          { text: '我替他填一下表格。', pinyin: 'Wǒ tì tā tián yíxià biǎogé.', meaning: 'Tôi điền giúp (thay) anh ấy một cái biểu mẫu.', correct: true,
            feedback: 'Đúng! 替 = thay (ai); 填 = điền.' },
          { text: '我扫他填一下表格。', pinyin: 'Wǒ sǎo tā tián yíxià biǎogé.', meaning: '(không thông)', correct: false,
            feedback: '扫 = quét, không phải "thay".' },
          { text: '我赏他填一下表格。', pinyin: 'Wǒ shǎng tā tián yíxià biǎogé.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '赏 = thưởng/ngắm, không hợp.' }
        ], vocab: ['替', '填', '扫', '赏'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '机器坏了，用新的替代旧的。表现好，公司会赏你。台上的人在表演，大家鼓掌。',
        pinyin: 'Jīqì huài le, yòng xīn de tìdài jiù de. Biǎoxiàn hǎo, gōngsī huì shǎng nǐ. Tái shàng de rén zài biǎoyǎn, dàjiā gǔzhǎng.',
        meaning: 'Máy hỏng rồi, dùng cái mới thay cái cũ. Làm tốt, công ty sẽ thưởng cho em. Người trên sân khấu đang biểu diễn, mọi người vỗ tay.',
        expression: 'happy', vocab: ['替代', '赏', '台上'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '噪音太大会伤害听力，我们要小心。',
        pinyin: 'Zàoyīn tài dà huì shānghài tīnglì, wǒmen yào xiǎoxīn.',
        meaning: 'Tiếng ồn quá lớn sẽ làm hại thính giác, chúng ta phải cẩn thận.',
        expression: 'focused', vocab: ['伤害'] },
      { type: 'checkpoint', questions: [
        { q: '“体检” nghĩa là?', options: ['Kiểm tra sức khỏe', 'Thi cử', 'Tình nguyện', 'Dọn dẹp'], answer: 0 },
        { q: '“替他填表格” — “替” nghĩa là?', options: ['Thay (ai đó)', 'Quét', 'Thưởng', 'Làm hại'], answer: 0 },
        { q: '“友谊很深厚” — “深厚” nghĩa là?', options: ['Sâu sắc, thâm tình', 'Mỏng manh', 'Ồn ào', 'Nhanh chóng'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '气球', p: 'qì qiú', v: 'bóng bay', e: 'balloon' },
      { h: '汽水', p: 'qì shuǐ', v: 'nước ngọt có ga', e: 'soda, pop' },
      { h: '亲密', p: 'qīn mì', v: 'thân mật, gần gũi', e: 'chum, intimate, close' },
      { h: '穷人', p: 'qióng rén', v: 'người nghèo', e: 'pauper, poor people, prole, poor, poor man, the poor, beggar, have-not' },
      { h: '扫', p: 'sǎo', v: 'quét, quét dọn', e: 'to sweep, broom' },
      { h: '伤害', p: 'shāng hài', v: 'làm hại, gây thương tích', e: 'harm' },
      { h: '赏', p: 'shǎng', v: 'thưởng, ngắm (cảnh)', e: 'admire, enjoy' },
      { h: '上楼', p: 'shàng lóu', v: 'lên lầu, lên gác', e: 'to go upstairs' },
      { h: '身高', p: 'shēn gāo', v: 'chiều cao', e: 'height, stature, height (of person)' },
      { h: '深厚', p: 'shēn hòu', v: 'sâu sắc, thâm tình', e: 'deep, profound, solid, deep-seated' },
      { h: '食堂', p: 'shí táng', v: 'nhà ăn, căng-tin', e: 'mess_hall, eatery, hall, buttery, commissariat, (institutional) dining room, mess hall, mess, refect' },
      { h: '使劲', p: 'shǐ jìn', v: 'dùng sức, ráng sức', e: 'to exert all one\'s strength' },
      { h: '率先', p: 'shuài xiān', v: 'đi đầu, tiên phong', e: 'take lead/initiative' },
      { h: '塑料', p: 'sù liào', v: 'nhựa, chất dẻo', e: 'plastics, CL:種|种[zhong3]' },
      { h: '酸奶', p: 'suān nǎi', v: 'sữa chua', e: 'yogurt' },
      { h: '台上', p: 'tái shàng', v: 'trên sân khấu', e: 'on stage' },
      { h: '体检', p: 'tǐ jiǎn', v: 'kiểm tra sức khỏe', e: 'abbr. for 體格檢查|体格检查[ti3 ge2 jian3 cha2]' },
      { h: '替', p: 'tì', v: 'thay, thay cho', e: 'for, on behalf of' },
      { h: '替代', p: 'tì dài', v: 'thay thế, thế chỗ', e: 'replace, supervene upon, replacement, supersede, substitute for, alternate, substitute, supersession' },
      { h: '填', p: 'tián', v: 'điền vào, lấp đầy', e: 'writing, fill in, stuff, write, fill, close, charge, fill up' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我们去___喝点汽水。', options: ['食堂', '台上', '身高'], answer: '食堂' },
        { type: 'fill', sentence: '夏天喝___很解渴。', options: ['汽水', '塑料', '气球'], answer: '汽水' },
        { type: 'fill', sentence: '活动帮助___，送日用品。', options: ['穷人', '气球', '台上'], answer: '穷人' },
        { type: 'fill', sentence: '护士量了我的___。', options: ['身高', '塑料', '酸奶'], answer: '身高' },
        { type: 'fill', sentence: '请___一下这张表格。', options: ['填', '扫', '赏'], answer: '填' }
      ],
      normal: [
        { type: 'fill', sentence: '我___报名了志愿活动。', options: ['率先', '使劲', '替代'], answer: '率先' },
        { type: 'fill', sentence: '我___抬，箱子很重。', options: ['使劲', '率先', '亲密'], answer: '使劲' },
        { type: 'fill', sentence: '用新的___旧的机器。', options: ['替代', '伤害', '上楼'], answer: '替代' },
        { type: 'fill', sentence: '别用太多___，污染环境。', options: ['塑料', '气球', '酸奶'], answer: '塑料' },
        { type: 'order', words: ['我', '替', '他', '填', '一下', '表格'], answer: '我替他填一下表格' },
        { type: 'order', words: ['你们', '的', '友谊', '很', '深厚'], answer: '你们的友谊很深厚' },
        { type: 'fill', sentence: '公司安排了___，量身高体重。', options: ['体检', '台上', '气球'], answer: '体检' }
      ],
      hard: [
        { type: 'fill', sentence: '噪音太大会___听力。', options: ['伤害', '替代', '率先'], answer: '伤害' },
        { type: 'fill', sentence: '我们关系很___，无话不说。', options: ['亲密', '塑料', '台上'], answer: '亲密' },
        { type: 'translate', prompt: 'Thực tập và học hành phải cân bằng.', answer: '实习和学习要平衡。' },
        { type: 'translate', prompt: 'Tôi điền giúp thay anh ấy một cái biểu mẫu.', answer: '我替他填一下表格。' },
        { type: 'translate', prompt: 'Làm tốt, công ty sẽ thưởng cho em.', answer: '表现好，公司会赏你。' },
        { type: 'fill', sentence: '___的人在表演，大家鼓掌。', options: ['台上', '食堂', '身高'], answer: '台上' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 136: Quyết định quan trọng — 20 từ
  // ─────────────────────────────────────────────────────────────────────────
  136: {
    id: 136,
    level: 4,
    title: 'Quyết định quan trọng',
    context: 'Mai nhận một giấy thông báo quan trọng, buộc em phải đưa ra quyết định lớn về tương lai. Em nhớ về tuổi thơ, cân nhắc kỹ rồi quyết định.',
    vocabPreview: ['通知书', '无法', '投入', '童年', '挑选'],
    objectives: [
      "Nắm nhóm từ khóa: 通知书 · 无法 · 投入 · 童年 · 挑选",
      "Nghe hiểu và kể lại tình huống Quyết định quan trọng bằng câu HSK 4",
      "Phân biệt cách dùng 通知书 · 无法 · 投入",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "通知书 — giấy thông báo",
        explain: "Dùng 通知书 trong ngữ cảnh Quyết định quan trọng để diễn đạt: giấy thông báo.",
        examples: [
          { zh: "我收到一封通知书，让我做一个重要决定。", py: "Wǒ shōudào yì fēng tōngzhīshū, ràng wǒ zuò yí ge zhòngyào juédìng.", vi: "Tôi nhận được một giấy thông báo, khiến tôi phải đưa ra quyết định quan trọng." }
        ] },
      { point: "无法 — không thể",
        explain: "Dùng 无法 trong ngữ cảnh Quyết định quan trọng để diễn đạt: không thể.",
        examples: [
          { zh: "我投入了很多努力，无法马上放弃。", py: "Wǒ tóurù le hěn duō nǔlì, wúfǎ mǎshàng fàngqì.", vi: "Em đã đầu tư rất nhiều công sức, không thể từ bỏ ngay được." }
        ] },
      { point: "投入 — đầu tư vào",
        explain: "Dùng 投入 trong ngữ cảnh Quyết định quan trọng để diễn đạt: đầu tư vào.",
        examples: [
          { zh: "我投入了很多努力，无法马上放弃。", py: "Wǒ tóurù le hěn duō nǔlì, wúfǎ mǎshàng fàngqì.", vi: "Em đã đầu tư rất nhiều công sức, không thể từ bỏ ngay được." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Phòng trọ · Tối', bg: 'dorm-room',
        cast: ['mai'],
        text: 'Mai nhận được một giấy thông báo quan trọng.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '我收到一封通知书，让我做一个重要决定。',
        pinyin: 'Wǒ shōudào yì fēng tōngzhīshū, ràng wǒ zuò yí ge zhòngyào juédìng.',
        meaning: 'Tôi nhận được một giấy thông báo, khiến tôi phải đưa ra quyết định quan trọng.',
        expression: 'surprise', vocab: ['通知书'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '别急着投，先停下想清楚。这关系到你的未来，机会无限。',
        pinyin: 'Bié jízhe tóu, xiān tíngxià xiǎng qīngchu. Zhè guānxì dào nǐ de wèilái, jīhuì wúxiàn.',
        meaning: 'Đừng vội nộp, dừng lại nghĩ cho rõ. Việc này liên quan đến tương lai của em, cơ hội vô hạn.',
        expression: 'focused', vocab: ['投', '停下', '无限'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '我投入了很多努力，无法马上放弃。',
        pinyin: 'Wǒ tóurù le hěn duō nǔlì, wúfǎ mǎshàng fàngqì.',
        meaning: 'Em đã đầu tư rất nhiều công sức, không thể từ bỏ ngay được.',
        expression: 'sad', vocab: ['投入', '无法'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这让我想起童年，我们一起吃西瓜、挑选玩具的日子。',
        pinyin: 'Zhè ràng wǒ xiǎngqǐ tóngnián, wǒmen yìqǐ chī xīguā, tiāoxuǎn wánjù de rìzi.',
        meaning: 'Điều này khiến tớ nhớ tuổi thơ, những ngày cùng ăn dưa hấu, chọn đồ chơi.',
        expression: 'happy', vocab: ['童年', '西瓜', '挑选'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '是啊。新鲜的西瓜很甜，有西瓜味儿。',
        pinyin: 'Shì a. Xīnxiān de xīguā hěn tián, yǒu xīguā wèir.',
        meaning: 'Ừ. Dưa hấu tươi rất ngọt, có mùi vị dưa hấu.',
        expression: 'happy', vocab: ['鲜', '味儿'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '工作途中要看外汇行情，王经理会教你。把网址贴在电脑上。',
        pinyin: 'Gōngzuò túzhōng yào kàn wàihuì hángqíng, Wáng jīnglǐ huì jiāo nǐ. Bǎ wǎngzhǐ tiē zài diànnǎo shàng.',
        meaning: 'Trong quá trình làm việc cần xem tỷ giá ngoại hối, giám đốc Vương sẽ dạy em. Dán địa chỉ web lên máy tính.',
        expression: null, vocab: ['途中', '外汇', '王', '网址', '贴'] },
      { type: 'choice', speaker: 'laoli', cast: ['mai', 'laoli'], bg: 'office',
        scene: '📍 Văn phòng',
        expression: 'focused',
        q: 'Trong văn phòng. Diễn đạt "Đừng hút thuốc, sẽ làm chất lượng không khí giảm xuống" sao cho đúng?',
        options: [
          { text: '请别吸烟，会让空气质量下降。', pinyin: 'Qǐng bié xīyān, huì ràng kōngqì zhìliàng xiàjiàng.', meaning: 'Xin đừng hút thuốc, sẽ làm chất lượng không khí giảm xuống.', correct: true,
            feedback: 'Đúng! 吸烟 = hút thuốc; 下降 = giảm xuống.' },
          { text: '请别吸气，会让空气质量下降。', pinyin: 'Qǐng bié xīqì, huì ràng kōngqì zhìliàng xiàjiàng.', meaning: '(sai ý)', correct: false,
            feedback: '吸气 = hít vào (bình thường); ở đây phải là 吸烟.' },
          { text: '请别吸烟，会让空气质量下楼。', pinyin: 'Qǐng bié xīyān, huì ràng kōngqì zhìliàng xià lóu.', meaning: '(không thông)', correct: false,
            feedback: '下楼 = xuống lầu, không phải "giảm xuống".' }
        ], vocab: ['吸烟', '下降', '吸', '下楼'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '我深吸一口气，作出决定，然后下楼透气。',
        pinyin: 'Wǒ shēn xī yì kǒu qì, zuòchū juédìng, ránhòu xià lóu tòuqì.',
        meaning: 'Tôi hít sâu một hơi, đưa ra quyết định, rồi xuống gác hít thở.',
        expression: 'focused', vocab: ['吸', '下楼'] },
      { type: 'checkpoint', questions: [
        { q: '“通知书” là gì?', options: ['Giấy thông báo', 'Dưa hấu', 'Tuổi thơ', 'Ngoại tệ'], answer: 0 },
        { q: '“空气质量下降” — “下降” nghĩa là?', options: ['Giảm xuống', 'Tăng lên', 'Ổn định', 'Tươi mới'], answer: 0 },
        { q: '“无法马上放弃” — “无法” nghĩa là?', options: ['Không thể', 'Vô hạn', 'Trên đường', 'Ngoại hối'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '挑选', p: 'tiāo xuǎn', v: 'lựa chọn, chọn lọc', e: 'choose, select' },
      { h: '贴', p: 'tiē', v: 'dán, gắn vào', e: 'paste, glue, stick to' },
      { h: '停下', p: 'tíng xia', v: 'dừng lại, ngừng lại', e: 'to stop' },
      { h: '通知书', p: 'tōng zhī shū', v: 'giấy thông báo', e: 'Notice' },
      { h: '童年', p: 'tóng nián', v: 'tuổi thơ', e: 'childhood' },
      { h: '投', p: 'tóu', v: 'ném, nộp, đầu tư', e: 'heave, agree with, throw, drop, mail, join, toss, go to, cater to, lodge, send, put into, fit in wit' },
      { h: '投入', p: 'tóu rù', v: 'đầu tư vào, dồn sức', e: 'throw/put into' },
      { h: '途中', p: 'tú zhōng', v: 'trên đường, dọc đường', e: 'en route' },
      { h: '外汇', p: 'wài huì', v: 'ngoại hối, ngoại tệ', e: 'foreign exchange' },
      { h: '王', p: 'wáng', v: 'vương, vua; họ Vương', e: 'king, monarch, royal' },
      { h: '网址', p: 'wǎng zhǐ', v: 'địa chỉ website, URL', e: 'website, web address, URL' },
      { h: '味儿', p: 'wèir', v: 'mùi vị, hương vị', e: 'taste' },
      { h: '无法', p: 'wú fǎ', v: 'không thể, không có cách', e: 'nohow, unable to, unable, cannot' },
      { h: '无限', p: 'wú xiàn', v: 'vô hạn, không giới hạn', e: 'infinite, limitless' },
      { h: '西瓜', p: 'xī guā', v: 'dưa hấu', e: 'water melon, watermelon' },
      { h: '吸', p: 'xī', v: 'hít, hút vào', e: 'drop, absorption, absorb, draw to oneself, sip, breathe in, attraction, suck, suck up, sup, draw_in,' },
      { h: '吸烟', p: 'xī yān', v: 'hút thuốc lá', e: 'to smoke' },
      { h: '下降', p: 'xià jiàng', v: 'giảm xuống, hạ xuống', e: 'descend, go/come down, drop, fall, decline' },
      { h: '下楼', p: 'xià lóu', v: 'xuống lầu, xuống gác', e: 'Go downstairs' },
      { h: '鲜', p: 'xiān', v: 'tươi, tươi sống', e: 'fresh, delicious' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我收到一封___。', options: ['通知书', '外汇', '西瓜'], answer: '通知书' },
        { type: 'fill', sentence: '先___想清楚再决定。', options: ['停下', '投入', '挑选'], answer: '停下' },
        { type: 'fill', sentence: '夏天我爱吃___。', options: ['西瓜', '网址', '味儿'], answer: '西瓜' },
        { type: 'fill', sentence: '请把___贴在电脑上。', options: ['网址', '童年', '外汇'], answer: '网址' },
        { type: 'fill', sentence: '办公室里请别___。', options: ['吸烟', '挑选', '下楼'], answer: '吸烟' }
      ],
      normal: [
        { type: 'fill', sentence: '我___了很多努力，舍不得放弃。', options: ['投入', '停下', '挑选'], answer: '投入' },
        { type: 'fill', sentence: '这让我想起___的快乐时光。', options: ['童年', '外汇', '味儿'], answer: '童年' },
        { type: 'fill', sentence: '认真___合适的玩具。', options: ['挑选', '投', '贴'], answer: '挑选' },
        { type: 'fill', sentence: '这个机会___，前途光明。', options: ['无限', '无法', '途中'], answer: '无限' },
        { type: 'order', words: ['我', '无法', '马上', '放弃'], answer: '我无法马上放弃' },
        { type: 'order', words: ['请', '别', '吸烟', '空气', '质量', '会', '下降'], answer: '请别吸烟空气质量会下降' },
        { type: 'fill', sentence: '新鲜的西瓜有西瓜___。', options: ['味儿', '网址', '外汇'], answer: '味儿' }
      ],
      hard: [
        { type: 'fill', sentence: '工作___要看外汇行情。', options: ['途中', '无限', '下楼'], answer: '途中' },
        { type: 'fill', sentence: '吸烟会让空气质量___。', options: ['下降', '下楼', '无限'], answer: '下降' },
        { type: 'translate', prompt: 'Tôi nhận được một giấy thông báo quan trọng.', answer: '我收到一封重要的通知书。' },
        { type: 'translate', prompt: 'Tôi đã đầu tư rất nhiều công sức, không thể từ bỏ ngay.', answer: '我投入了很多努力，无法马上放弃。' },
        { type: 'translate', prompt: 'Tôi hít sâu một hơi, đưa ra quyết định.', answer: '我深吸一口气，作出决定。' },
        { type: 'fill', sentence: '新___的西瓜很甜。', options: ['鲜', '投', '贴'], answer: '鲜' }
      ]
    }
  }

});

// ───────────────────────────────────────────────────────
// BATCH 4 (tiếp) — Bài 137-138 (Trưởng thành · Nhìn lại)
// ───────────────────────────────────────────────────────
Object.assign(COURSE_DATA, {

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 137: Trưởng thành hơn — 20 từ
  // ─────────────────────────────────────────────────────────────────────────
  137: {
    id: 137,
    level: 4,
    title: 'Trưởng thành hơn',
    context: 'Kỳ thực tập gần khép lại. Mai dọn hành lý, ngắm những tấm ảnh cũ và nhận ra mình đã trưởng thành. Thầy Lý tặng em một món quà kỷ niệm.',
    vocabPreview: ['选择', '相片', '优良', '研制', '一般来说'],
    objectives: [
      "Nắm nhóm từ khóa: 选择 · 相片 · 优良 · 研制 · 一般来说",
      "Nghe hiểu và kể lại tình huống Trưởng thành hơn bằng câu HSK 4",
      "Phân biệt cách dùng 选择 · 相片 · 优良",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "选择 — lựa chọn",
        explain: "Dùng 选择 trong ngữ cảnh Trưởng thành hơn để diễn đạt: lựa chọn.",
        examples: [
          { zh: "你成长了不少。一般来说，年轻人要学会选择。", py: "Nǐ chéngzhǎng le bù shǎo. Yìbān láishuō, niánqīngrén yào xuéhuì xuǎnzé.", vi: "Em trưởng thành nhiều rồi. Nói chung, người trẻ phải học cách lựa chọn." }
        ] },
      { point: "相片 — ảnh",
        explain: "Dùng 相片 trong ngữ cảnh Trưởng thành hơn để diễn đạt: ảnh.",
        examples: [
          { zh: "我整理行李箱，看到一些旧相片，想起这段日子。", py: "Wǒ zhěnglǐ xínglǐ xiāng, kàndào yìxiē jiù xiàngpiàn, xiǎngqǐ zhè duàn rìzi.", vi: "Tôi sắp xếp vali, thấy mấy tấm ảnh cũ, nhớ lại quãng thời gian này." }
        ] },
      { point: "优良 — ưu tú",
        explain: "Dùng 优良 trong ngữ cảnh Trưởng thành hơn để diễn đạt: ưu tú.",
        examples: [
          { zh: "公司研制了新型产品，型号很多，质量优良。", py: "Gōngsī yánzhì le xīn xíng chǎnpǐn, xínghào hěn duō, zhìliàng yōuliáng.", vi: "Công ty đã nghiên cứu chế tạo sản phẩm kiểu mới, có nhiều model, chất lượng ưu việt." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Phòng trọ · Tối', bg: 'dorm-room',
        cast: ['mai'],
        text: 'Kỳ thực tập gần khép lại, Mai bắt đầu dọn hành lý.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '我整理行李箱，看到一些旧相片，想起这段日子。',
        pinyin: 'Wǒ zhěnglǐ xínglǐ xiāng, kàndào yìxiē jiù xiàngpiàn, xiǎngqǐ zhè duàn rìzi.',
        meaning: 'Tôi sắp xếp vali, thấy mấy tấm ảnh cũ, nhớ lại quãng thời gian này.',
        expression: 'curious', vocab: ['箱', '相片', '些'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '你成长了不少。一般来说，年轻人要学会选择。',
        pinyin: 'Nǐ chéngzhǎng le bù shǎo. Yìbān láishuō, niánqīngrén yào xuéhuì xuǎnzé.',
        meaning: 'Em trưởng thành nhiều rồi. Nói chung, người trẻ phải học cách lựa chọn.',
        expression: 'happy', vocab: ['一般来说', '选择'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '这次经历在我眼里很珍贵，让我流下眼泪。',
        pinyin: 'Zhè cì jīnglì zài wǒ yǎn lǐ hěn zhēnguì, ràng wǒ liú xià yǎnlèi.',
        meaning: 'Trải nghiệm này trong mắt em rất quý giá, khiến em rơi nước mắt.',
        expression: 'sad', vocab: ['眼里', '眼泪'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '公司研制了新型产品，型号很多，质量优良。',
        pinyin: 'Gōngsī yánzhì le xīn xíng chǎnpǐn, xínghào hěn duō, zhìliàng yōuliáng.',
        meaning: 'Công ty đã nghiên cứu chế tạo sản phẩm kiểu mới, có nhiều model, chất lượng ưu việt.',
        expression: 'happy', vocab: ['研制', '型', '型号', '优良'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我们引进了先进设备，资源虽然有限，但成果在预期以内。',
        pinyin: 'Wǒmen yǐnjìn le xiānjìn shèbèi, zīyuán suīrán yǒuxiàn, dàn chéngguǒ zài yùqī yǐnèi.',
        meaning: 'Chúng tôi nhập thiết bị tiên tiến, tuy nguồn lực có hạn, nhưng thành quả nằm trong dự kiến.',
        expression: 'focused', vocab: ['引进', '有限', '以内'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '这块玉送给你做纪念。遇到困难别怕，你浑身有劲儿。',
        pinyin: 'Zhè kuài yù sòng gěi nǐ zuò jìniàn. Yùdào kùnnán bié pà, nǐ húnshēn yǒujìnr.',
        meaning: 'Miếng ngọc này tặng em làm kỷ niệm. Gặp khó khăn đừng sợ, em tràn đầy sức lực.',
        expression: 'happy', vocab: ['玉', '遇', '有劲儿'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'laoli'], bg: 'office',
        scene: '📍 Văn phòng',
        expression: 'focused',
        q: 'Thầy Lý nghiêm khắc nhưng công bằng. Diễn đạt "Thầy rất nghiêm với chúng em, nhưng chúng em tôn trọng thầy" sao cho đúng?',
        options: [
          { text: '老师对我们很严，但我们尊重他。', pinyin: 'Lǎoshī duì wǒmen hěn yán, dàn wǒmen zūnzhòng tā.', meaning: 'Thầy rất nghiêm với chúng em, nhưng chúng em tôn trọng thầy.', correct: true,
            feedback: 'Đúng! 严 = nghiêm khắc.' },
          { text: '老师对我们很引，但我们尊重他。', pinyin: 'Lǎoshī duì wǒmen hěn yǐn, dàn wǒmen zūnzhòng tā.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '引 = dẫn dắt/trích dẫn, không phải tính từ "nghiêm".' },
          { text: '老师对我们很玉，但我们尊重他。', pinyin: 'Lǎoshī duì wǒmen hěn yù, dàn wǒmen zūnzhòng tā.', meaning: '(không thông)', correct: false,
            feedback: '玉 = ngọc, không phải tính từ "nghiêm".' }
        ], vocab: ['严', '引', '玉'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '我参加过亚运会的志愿活动，一直引以为荣。',
        pinyin: 'Wǒ cānjiā guo Yàyùnhuì de zhìyuàn huódòng, yìzhí yǐn yǐ wéi róng.',
        meaning: 'Tôi từng tham gia hoạt động tình nguyện ở ASIAD, luôn lấy đó làm tự hào.',
        expression: 'happy', vocab: ['亚运会', '引'] },
      { type: 'checkpoint', questions: [
        { q: '“选择” nghĩa là?', options: ['Lựa chọn', 'Từ bỏ', 'Gặp gỡ', 'Nghiêm khắc'], answer: 0 },
        { q: '“质量优良” — “优良” nghĩa là?', options: ['Ưu tú, xuất sắc', 'Kém cỏi', 'Có hạn', 'Tươi mới'], answer: 0 },
        { q: '“一般来说” nghĩa là?', options: ['Nói chung, thông thường', 'Đặc biệt là', 'Không thể', 'Vô hạn'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '箱', p: 'xiāng', v: 'hộp, thùng, vali', e: 'm.[container]' },
      { h: '相片', p: 'xiàng piàn', v: 'ảnh, tấm hình', e: 'exposure, print, semblance, likeness, photo, photograph, photographic print' },
      { h: '些', p: 'xiē', v: 'một vài, một số', e: 'm.[proximation]' },
      { h: '型', p: 'xíng', v: 'kiểu, loại, khuôn mẫu', e: 'mold, type, style, model' },
      { h: '型号', p: 'xíng hào', v: 'số kiểu, mã model', e: 'model number' },
      { h: '选择', p: 'xuǎn zé', v: 'lựa chọn', e: 'select, opt' },
      { h: '亚运会', p: 'yà yùn huì', v: 'Đại hội thể thao châu Á (ASIAD)', e: 'Asian Games' },
      { h: '严', p: 'yán', v: 'nghiêm khắc', e: 'strict, severe, rigorous' },
      { h: '研制', p: 'yán zhì', v: 'nghiên cứu chế tạo', e: 'to manufacture, to develop' },
      { h: '眼泪', p: 'yǎn lèi', v: 'nước mắt, lệ', e: 'tear, teardrop, tears, eyedrop, waterworks' },
      { h: '眼里', p: 'yǎn li', v: 'trong mắt', e: 'In the eyes' },
      { h: '以内', p: 'yǐ nèi', v: 'trong vòng, không quá', e: 'within, less than' },
      { h: '一般来说', p: 'yì bān lái shuō', v: 'nói chung, thông thường', e: 'generally speaking' },
      { h: '引', p: 'yǐn', v: 'dẫn dắt, trích dẫn', e: 'quote, cite' },
      { h: '引进', p: 'yǐn jìn', v: 'nhập khẩu, du nhập', e: 'recommend, introduce from elsewhere' },
      { h: '优良', p: 'yōu liáng', v: 'ưu tú, xuất sắc', e: 'fine, good' },
      { h: '有劲儿', p: 'yǒu jìnr', v: 'có sức, hứng khởi', e: 'Strength' },
      { h: '有限', p: 'yǒu xiàn', v: 'có hạn, giới hạn', e: 'limited, finite' },
      { h: '玉', p: 'yù', v: 'ngọc bích', e: 'jade' },
      { h: '遇', p: 'yù', v: 'gặp gỡ, gặp phải', e: 'meet, encounter, treat, receive' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我整理行李___。', options: ['箱', '些', '型'], answer: '箱' },
        { type: 'fill', sentence: '我看到一些旧___。', options: ['相片', '型号', '眼泪'], answer: '相片' },
        { type: 'fill', sentence: '年轻人要学会___。', options: ['选择', '引进', '研制'], answer: '选择' },
        { type: 'fill', sentence: '产品质量很___。', options: ['优良', '有限', '以内'], answer: '优良' },
        { type: 'fill', sentence: '太感动了，我流下___。', options: ['眼泪', '相片', '型号'], answer: '眼泪' }
      ],
      normal: [
        { type: 'fill', sentence: '公司___了新产品。', options: ['研制', '选择', '引'], answer: '研制' },
        { type: 'fill', sentence: '这款产品有很多___。', options: ['型号', '眼泪', '相片'], answer: '型号' },
        { type: 'fill', sentence: '我们___了先进设备。', options: ['引进', '研制', '有限'], answer: '引进' },
        { type: 'fill', sentence: '资源虽然___，但够用。', options: ['有限', '优良', '以内'], answer: '有限' },
        { type: 'order', words: ['年轻人', '要', '学会', '选择'], answer: '年轻人要学会选择' },
        { type: 'order', words: ['这', '次', '经历', '在', '我', '眼里', '很', '珍贵'], answer: '这次经历在我眼里很珍贵' },
        { type: 'fill', sentence: '___，年轻人要多尝试。', options: ['一般来说', '以内', '有劲儿'], answer: '一般来说' }
      ],
      hard: [
        { type: 'fill', sentence: '老师对我们很___，但公正。', options: ['严', '引', '玉'], answer: '严' },
        { type: 'fill', sentence: '这块___送给你做纪念。', options: ['玉', '箱', '些'], answer: '玉' },
        { type: 'translate', prompt: 'Trải nghiệm này trong mắt em rất quý giá.', answer: '这次经历在我眼里很珍贵。' },
        { type: 'translate', prompt: 'Nói chung, người trẻ phải học cách lựa chọn.', answer: '一般来说，年轻人要学会选择。' },
        { type: 'translate', prompt: 'Tuy nguồn lực có hạn, nhưng thành quả nằm trong dự kiến.', answer: '资源虽然有限，但成果在预期以内。' },
        { type: 'fill', sentence: '遇到困难别怕，你浑身___。', options: ['有劲儿', '有限', '以内'], answer: '有劲儿' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 138: Nhìn lại chặng đường — 15 từ
  // ─────────────────────────────────────────────────────────────────────────
  138: {
    id: 138,
    level: 4,
    title: 'Nhìn lại chặng đường',
    context: 'Kỳ thực tập khép lại. Mai cùng thầy Lý và Tiểu Mỹ nhìn lại chặng đường đã qua, những khó khăn đã vượt, và em tự đưa ra quyết định cho bước tiếp theo.',
    vocabPreview: ['战胜', '之前', '作出', '招呼', '遇到'],
    objectives: [
      "Nắm nhóm từ khóa: 战胜 · 之前 · 作出 · 招呼 · 遇到",
      "Nghe hiểu và kể lại tình huống Nhìn lại chặng đường bằng câu HSK 4",
      "Phân biệt cách dùng 战胜 · 之前 · 作出",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "战胜 — chiến thắng",
        explain: "Dùng 战胜 trong ngữ cảnh Nhìn lại chặng đường để diễn đạt: chiến thắng.",
        examples: [
          { zh: "实习快结束了。回想之前，你战胜了很多困难。", py: "Shíxí kuài jiéshù le. Huíxiǎng zhīqián, nǐ zhànshèng le hěn duō kùnnán.", vi: "Kỳ thực tập sắp kết thúc. Nhìn lại trước đó, em đã chiến thắng rất nhiều khó khăn." }
        ] },
      { point: "之前 — trước đó",
        explain: "Dùng 之前 trong ngữ cảnh Nhìn lại chặng đường để diễn đạt: trước đó.",
        examples: [
          { zh: "实习快结束了。回想之前，你战胜了很多困难。", py: "Shíxí kuài jiéshù le. Huíxiǎng zhīqián, nǐ zhànshèng le hěn duō kùnnán.", vi: "Kỳ thực tập sắp kết thúc. Nhìn lại trước đó, em đã chiến thắng rất nhiều khó khăn." }
        ] },
      { point: "作出 — đưa ra",
        explain: "Dùng 作出 trong ngữ cảnh Nhìn lại chặng đường để diễn đạt: đưa ra.",
        examples: [
          { zh: "这段日子让我成长，我自己作出了重要决定。晚上我做了个好梦，梦见未来的自己。明天，新的挑战在等我。", py: "Zhè duàn rìzi ràng wǒ chéngzhǎng, wǒ zìjǐ zuòchū le zhòngyào juédìng. Wǎnshang wǒ zuò le ge hǎo mèng, mèngjiàn wèilái de zìjǐ. Míngtiān, xīn de tiǎozhàn zài děng wǒ.", vi: "Quãng thời gian này giúp tôi trưởng thành, tự mình đưa ra quyết định quan trọng. Tối đó tôi mơ một giấc đẹp, mơ thấy chính mình trong tương lai. Ngày mai, thử thách mới đang đợi tôi." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Văn phòng · Chiều', bg: 'office',
        cast: ['mai', 'laoli'],
        text: 'Kỳ thực tập đã đến những ngày cuối.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '实习快结束了。回想之前，你战胜了很多困难。',
        pinyin: 'Shíxí kuài jiéshù le. Huíxiǎng zhīqián, nǐ zhànshèng le hěn duō kùnnán.',
        meaning: 'Kỳ thực tập sắp kết thúc. Nhìn lại trước đó, em đã chiến thắng rất nhiều khó khăn.',
        expression: 'happy', vocab: ['之前', '战胜'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '谢谢老师的赞赏。我像个小战士，遇到问题就解决。',
        pinyin: 'Xièxie lǎoshī de zànshǎng. Wǒ xiàng ge xiǎo zhànshì, yùdào wèntí jiù jiějué.',
        meaning: 'Cảm ơn lời khen của thầy. Em như một chiến sĩ nhỏ, gặp vấn đề là giải quyết.',
        expression: 'happy', vocab: ['赞赏', '战士', '遇到'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '还记得我们之间第一次打招呼吗？在路口转弯就遇见了。',
        pinyin: 'Hái jìde wǒmen zhījiān dì-yī cì dǎ zhāohu ma? Zài lùkǒu zhuǎnwān jiù yùjiàn le.',
        meaning: 'Còn nhớ lần đầu chào hỏi giữa hai đứa mình không? Rẽ cua ở ngã tư là gặp ngay.',
        expression: 'happy', vocab: ['之间', '招呼', '转弯', '遇见'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '记得！那天我还以为中奖了，运气真好。',
        pinyin: 'Jìde! Nà tiān wǒ hái yǐwéi zhòngjiǎng le, yùnqi zhēn hǎo.',
        meaning: 'Nhớ chứ! Hôm đó tớ còn tưởng trúng thưởng, may mắn thật.',
        expression: 'happy', vocab: ['中奖'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '有次实验装置差点着火，我们赶紧处理，幸好没事。',
        pinyin: 'Yǒu cì shíyàn zhuāngzhì chàdiǎn zháohuǒ, wǒmen gǎnjǐn chǔlǐ, xìnghǎo méishì.',
        meaning: 'Có lần thiết bị thí nghiệm suýt bốc cháy, chúng tôi xử lý ngay, may mà không sao.',
        expression: 'surprise', vocab: ['装置', '着火'] },
      { type: 'choice', speaker: 'mai', cast: ['mai'], bg: 'office',
        scene: '📍 Văn phòng',
        expression: 'focused',
        q: 'Mai chuẩn bị theo đuổi mục tiêu mới. Diễn đạt "Tôi sẽ chiến thắng chính mình, biến giấc mơ thành hiện thực" sao cho đúng?',
        options: [
          { text: '我要战胜自己，让梦想成真。', pinyin: 'Wǒ yào zhànshèng zìjǐ, ràng mèngxiǎng chéngzhēn.', meaning: 'Tôi sẽ chiến thắng chính mình, biến giấc mơ thành hiện thực.', correct: true,
            feedback: 'Đúng! 战胜 = chiến thắng, vượt qua.' },
          { text: '我要做梦自己，让梦想成真。', pinyin: 'Wǒ yào zuòmèng zìjǐ, ràng mèngxiǎng chéngzhēn.', meaning: '(không thông)', correct: false,
            feedback: '做梦 = nằm mơ, không dùng kiểu này.' },
          { text: '我要招呼自己，让梦想成真。', pinyin: 'Wǒ yào zhāohu zìjǐ, ràng mèngxiǎng chéngzhēn.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '招呼 = chào hỏi, không hợp.' }
        ], vocab: ['战胜', '做梦', '招呼'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '这段日子让我成长，我自己作出了重要决定。晚上我做了个好梦，梦见未来的自己。明天，新的挑战在等我。',
        pinyin: 'Zhè duàn rìzi ràng wǒ chéngzhǎng, wǒ zìjǐ zuòchū le zhòngyào juédìng. Wǎnshang wǒ zuò le ge hǎo mèng, mèngjiàn wèilái de zìjǐ. Míngtiān, xīn de tiǎozhàn zài děng wǒ.',
        meaning: 'Quãng thời gian này giúp tôi trưởng thành, tự mình đưa ra quyết định quan trọng. Tối đó tôi mơ một giấc đẹp, mơ thấy chính mình trong tương lai. Ngày mai, thử thách mới đang đợi tôi.',
        expression: 'happy', vocab: ['自', '作出', '做梦'] },
      { type: 'checkpoint', questions: [
        { q: '“战胜困难” — “战胜” nghĩa là?', options: ['Chiến thắng, vượt qua', 'Thua cuộc', 'Gặp gỡ', 'Chào hỏi'], answer: 0 },
        { q: '“打招呼” nghĩa là?', options: ['Chào hỏi', 'Rẽ cua', 'Trúng thưởng', 'Bốc cháy'], answer: 0 },
        { q: '“作出决定” — “作出” nghĩa là?', options: ['Đưa ra (quyết định)', 'Nằm mơ', 'Gặp lại', 'Tán dương'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '遇到', p: 'yù dào', v: 'gặp phải, gặp gỡ', e: 'come across, run_into, receive, meet with, encounter, run into, meet, befall' },
      { h: '遇见', p: 'yù jiàn', v: 'tình cờ gặp, bắt gặp', e: 'to meet' },
      { h: '赞赏', p: 'zàn shǎng', v: 'tán dương, khen ngợi', e: 'to admire, to praise, to appreciate' },
      { h: '战胜', p: 'zhàn shèng', v: 'chiến thắng, đánh thắng', e: 'to prevail over, to defeat, to surmount' },
      { h: '战士', p: 'zhàn shì', v: 'chiến sĩ, binh sĩ', e: 'fighter, soldier, warrior, CL:個|个[ge4]' },
      { h: '招呼', p: 'zhāo hu', v: 'chào hỏi, chào đón', e: 'take care lest, receive, yoo-hoo, notify, take care of, recognize, say hello to, greet, halloo, spea' },
      { h: '着火', p: 'zháo huǒ', v: 'bắt lửa, bốc cháy', e: 'to ignite, to burn' },
      { h: '之间', p: 'zhī jiān', v: 'giữa (hai bên)', e: 'among, between' },
      { h: '之前', p: 'zhī qián', v: 'trước đó, trước khi', e: 'before, prior to, ago' },
      { h: '中奖', p: 'zhòng jiǎng', v: 'trúng thưởng, trúng số', e: 'to win a prize, a successful gamble' },
      { h: '转弯', p: 'zhuǎn wān', v: 'rẽ cua, quẹo', e: 'to turn, to go around a corner' },
      { h: '装置', p: 'zhuāng zhì', v: 'thiết bị, lắp đặt', e: 'install, fit' },
      { h: '自', p: 'zì', v: 'từ, tự mình', e: 'from, since' },
      { h: '作出', p: 'zuò chū', v: 'đưa ra, làm ra', e: 'make (decision/etc.)' },
      { h: '做梦', p: 'zuò mèng', v: 'nằm mơ, mơ giấc', e: 'to dream, to have a dream, fig. illusion, fantasy, pipe dream' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '你___了很多困难，真棒。', options: ['战胜', '招呼', '中奖'], answer: '战胜' },
        { type: 'fill', sentence: '见面时互相打___。', options: ['招呼', '转弯', '装置'], answer: '招呼' },
        { type: 'fill', sentence: '在路口___就到了。', options: ['转弯', '中奖', '着火'], answer: '转弯' },
        { type: 'fill', sentence: '我以为自己___了，运气真好。', options: ['中奖', '战胜', '遇到'], answer: '中奖' },
        { type: 'fill', sentence: '回想___，我们经历了很多。', options: ['之前', '之间', '自'], answer: '之前' }
      ],
      normal: [
        { type: 'fill', sentence: '我像个小___，遇到问题就解决。', options: ['战士', '装置', '招呼'], answer: '战士' },
        { type: 'fill', sentence: '谢谢老师的___。', options: ['赞赏', '转弯', '着火'], answer: '赞赏' },
        { type: 'fill', sentence: '我们___第一次见面就成了朋友。', options: ['之间', '之前', '自'], answer: '之间' },
        { type: 'fill', sentence: '实验___差点着火。', options: ['装置', '战士', '招呼'], answer: '装置' },
        { type: 'order', words: ['你', '战胜', '了', '很多', '困难'], answer: '你战胜了很多困难' },
        { type: 'order', words: ['我', '自己', '作出', '了', '重要', '决定'], answer: '我自己作出了重要决定' },
        { type: 'fill', sentence: '我们在路口转弯就___了。', options: ['遇见', '中奖', '赞赏'], answer: '遇见' }
      ],
      hard: [
        { type: 'fill', sentence: '我要___自己，让梦想成真。', options: ['战胜', '做梦', '招呼'], answer: '战胜' },
        { type: 'fill', sentence: '这段日子让我成长，我___作出了决定。', options: ['自', '之间', '转弯'], answer: '自' },
        { type: 'translate', prompt: 'Nhìn lại trước đó, em đã chiến thắng rất nhiều khó khăn.', answer: '回想之前，你战胜了很多困难。' },
        { type: 'translate', prompt: 'Tôi tự mình đưa ra quyết định quan trọng.', answer: '我自己作出了重要决定。' },
        { type: 'translate', prompt: 'Thiết bị thí nghiệm suýt bốc cháy.', answer: '实验装置差点着火。' },
        { type: 'fill', sentence: '晚上我___，梦见未来的自己。', options: ['做梦', '中奖', '转弯'], answer: '做梦' }
      ]
    }
  }

});

// ───────────────────────────────────────────────────────
// BATCH 5 — Bài 139-143 (Đồ dùng · Cơ thể · Ẩm thực) — sau kỳ thực tập
// ───────────────────────────────────────────────────────
Object.assign(COURSE_DATA, {

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 139: Đồ dùng & thiết bị (1) — 20 từ
  // ─────────────────────────────────────────────────────────────────────────
  139: {
    id: 139,
    level: 4,
    title: 'Đồ dùng & thiết bị (1)',
    context: 'Kỳ thực tập kết thúc, Mai đặt vé máy bay về nhà. Tiểu Mỹ giúp em soạn hành lý, hai người trò chuyện về quãng thời gian đã qua.',
    vocabPreview: ['航班', '轻松', '聊天', '好友', '没错'],
    objectives: [
      "Nắm nhóm từ khóa: 航班 · 轻松 · 聊天 · 好友 · 没错",
      "Nghe hiểu và kể lại tình huống Đồ dùng & thiết bị (1) bằng câu HSK 4",
      "Phân biệt cách dùng 航班 · 轻松 · 聊天",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "航班 — chuyến bay",
        explain: "Dùng 航班 trong ngữ cảnh Đồ dùng & thiết bị (1) để diễn đạt: chuyến bay.",
        examples: [
          { zh: "实习结束了，我订了回家的航班，心情很轻松。", py: "Shíxí jiéshù le, wǒ dìng le huí jiā de hángbān, xīnqíng hěn qīngsōng.", vi: "Thực tập xong rồi, tớ đặt vé chuyến bay về nhà, tâm trạng rất thoải mái." }
        ] },
      { point: "轻松 — thoải mái",
        explain: "Dùng 轻松 trong ngữ cảnh Đồ dùng & thiết bị (1) để diễn đạt: thoải mái.",
        examples: [
          { zh: "实习结束了，我订了回家的航班，心情很轻松。", py: "Shíxí jiéshù le, wǒ dìng le huí jiā de hángbān, xīnqíng hěn qīngsōng.", vi: "Thực tập xong rồi, tớ đặt vé chuyến bay về nhà, tâm trạng rất thoải mái." }
        ] },
      { point: "聊天 — trò chuyện",
        explain: "Dùng 聊天 trong ngữ cảnh Đồ dùng & thiết bị (1) để diễn đạt: trò chuyện.",
        examples: [
          { zh: "无论多忙，我都想和好友聊天。", py: "Wúlùn duō máng, wǒ dōu xiǎng hé hǎoyǒu liáotiān.", vi: "Dù bận đến đâu, tớ cũng muốn trò chuyện với bạn thân." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Phòng trọ · Tối', bg: 'dorm-room',
        cast: ['mai', 'xiaomei'],
        text: 'Kỳ thực tập kết thúc, Mai chuẩn bị về nhà.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '实习结束了，我订了回家的航班，心情很轻松。',
        pinyin: 'Shíxí jiéshù le, wǒ dìng le huí jiā de hángbān, xīnqíng hěn qīngsōng.',
        meaning: 'Thực tập xong rồi, tớ đặt vé chuyến bay về nhà, tâm trạng rất thoải mái.',
        expression: 'happy', vocab: ['航班', '轻松'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我帮你收拾，毛衣、袜子放进袋子里。',
        pinyin: 'Wǒ bāng nǐ shōushi, máoyī, wàzi fàng jìn dàizi lǐ.',
        meaning: 'Tớ giúp cậu thu xếp, áo len với tất bỏ vào túi.',
        expression: 'happy', vocab: ['毛衣', '袜子', '袋'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '谢谢！毛巾、镜子放盒子里，别用太多塑料袋。',
        pinyin: 'Xièxie! Máojīn, jìngzi fàng hézi lǐ, bié yòng tài duō sùliàodài.',
        meaning: 'Cảm ơn! Khăn mặt, gương để vào hộp, đừng dùng nhiều túi ni lông.',
        expression: 'happy', vocab: ['毛巾', '镜子', '盒子', '塑料袋'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '无论多忙，我都想和好友聊天。',
        pinyin: 'Wúlùn duō máng, wǒ dōu xiǎng hé hǎoyǒu liáotiān.',
        meaning: 'Dù bận đến đâu, tớ cũng muốn trò chuyện với bạn thân.',
        expression: 'happy', vocab: ['无论', '好友', '聊天'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我们这伙人感情真好，你付出了很多。',
        pinyin: 'Wǒmen zhè huǒ rén gǎnqíng zhēn hǎo, nǐ fùchū le hěn duō.',
        meaning: 'Nhóm bọn mình tình cảm thật tốt, cậu đã bỏ ra rất nhiều.',
        expression: 'happy', vocab: ['伙', '付出'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '天冷我穿上毛衣，戴上帽子。走前我拉开窗帘，关了电灯。',
        pinyin: 'Tiān lěng wǒ chuānshang máoyī, dài shàng màozi. Zǒu qián wǒ lākāi chuānglián, guān le diàndēng.',
        meaning: 'Trời lạnh tôi mặc áo len, đội mũ. Trước khi đi tôi kéo rèm, tắt đèn điện.',
        expression: 'focused', vocab: ['穿上', '戴', '拉开', '电灯'] },
      { type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'dorm-room',
        scene: '📍 Phòng trọ',
        expression: 'happy',
        q: 'Tiểu Mỹ khen kế hoạch của Mai. Mai đồng tình "Đúng vậy, không sai chút nào". Câu nào đúng?',
        options: [
          { text: '没错，就是这样。', pinyin: 'Méi cuò, jiùshì zhèyàng.', meaning: 'Đúng rồi, chính là như vậy.', correct: true,
            feedback: 'Đúng! 没错 = đúng rồi / không sai.' },
          { text: '反映，就是这样。', pinyin: 'Fǎnyìng, jiùshì zhèyàng.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '反映 = phản ánh (tình hình), không phải "đúng vậy".' },
          { text: '无论，就是这样。', pinyin: 'Wúlùn, jiùshì zhèyàng.', meaning: '(không thông)', correct: false,
            feedback: '无论 = bất kể, không dùng đứng một mình thế này.' }
        ], vocab: ['没错', '反映', '无论'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '对了，老师让我写报告，反映实习的情况。',
        pinyin: 'Duìle, lǎoshī ràng wǒ xiě bàogào, fǎnyìng shíxí de qíngkuàng.',
        meaning: 'À đúng rồi, thầy bảo tớ viết báo cáo, phản ánh tình hình thực tập.',
        expression: null, vocab: ['反映'] },
      { type: 'checkpoint', questions: [
        { q: '“航班” nghĩa là?', options: ['Chuyến bay', 'Túi nhựa', 'Áo len', 'Gương'], answer: 0 },
        { q: '“没错” biểu thị?', options: ['Đúng rồi', 'Sai rồi', 'Có lẽ', 'Không biết'], answer: 0 },
        { q: '“无论多忙” — “无论” nghĩa là?', options: ['Bất kể, dù', 'Bởi vì', 'Tuy nhiên', 'Nếu'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '戴', p: 'dài', v: 'đeo, đội', e: 'to wear (hat/glasses/jewelry)' },
      { h: '反映', p: 'fǎn yìng', v: 'phản ánh', e: 'to mirror' },
      { h: '航班', p: 'háng bān', v: 'chuyến bay', e: 'flight' },
      { h: '盒子', p: 'hé zi', v: 'hộp', e: 'box' },
      { h: '镜子', p: 'jìng zi', v: 'gương', e: 'mirror' },
      { h: '聊天', p: 'liáo tiān', v: 'trò chuyện, tán gẫu', e: 'to chat' },
      { h: '毛巾', p: 'máo jīn', v: 'khăn mặt', e: 'towel' },
      { h: '轻松', p: 'qīng sōng', v: 'thoải mái, nhẹ nhàng', e: 'light' },
      { h: '塑料袋', p: 'sù liào dài', v: 'túi ni lông', e: 'plastic bag' },
      { h: '袜子', p: 'wà zi', v: 'tất, bít tất', e: 'socks' },
      { h: '无论', p: 'wú lùn', v: 'dù thế nào, bất kể', e: 'no matter what or how' },
      { h: '穿上', p: 'chuān shang', v: 'mặc vào, đi vào', e: 'assume, wear, put_on, slip, enclothe, put on' },
      { h: '袋', p: 'dài', v: 'túi, bao', e: 'pouch, bag, sack, pocket' },
      { h: '电灯', p: 'diàn dēng', v: 'đèn điện', e: 'electric light, CL:盞|盏[zhan3]' },
      { h: '付出', p: 'fù chū', v: 'bỏ ra, cống hiến', e: 'pay, expend' },
      { h: '好友', p: 'hǎo yǒu', v: 'bạn tốt, bạn thân', e: 'peer, chum, crony, great friend, good friend, brick' },
      { h: '伙', p: 'huǒ', v: 'nhóm, bọn', e: 'companion, partner, group, classifier for groups of people, to combine, together' },
      { h: '拉开', p: 'lā kāi', v: 'kéo ra, mở ra', e: 'to pull open, to pull apart, to space out, to increase' },
      { h: '毛衣', p: 'máo yī', v: 'áo len', e: '(wool) sweater, CL:件[jian4]' },
      { h: '没错', p: 'méi cuò', v: 'đúng rồi, không sai', e: 'that\'s right, sure!, rest assured!, that\'s good, can\'t go wrong' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我订了回家的___。', options: ['航班', '镜子', '毛巾'], answer: '航班' },
        { type: 'fill', sentence: '天冷要穿___。', options: ['毛衣', '盒子', '电灯'], answer: '毛衣' },
        { type: 'fill', sentence: '别用太多___，污染环境。', options: ['塑料袋', '好友', '航班'], answer: '塑料袋' },
        { type: 'fill', sentence: '我想和___聊天。', options: ['好友', '袜子', '镜子'], answer: '好友' },
        { type: 'fill', sentence: '走前关了___。', options: ['电灯', '毛衣', '盒子'], answer: '电灯' }
      ],
      normal: [
        { type: 'fill', sentence: '实习结束，心情很___。', options: ['轻松', '无论', '付出'], answer: '轻松' },
        { type: 'fill', sentence: '毛巾、镜子放___里。', options: ['盒子', '航班', '伙'], answer: '盒子' },
        { type: 'fill', sentence: '你为大家___了很多。', options: ['付出', '聊天', '拉开'], answer: '付出' },
        { type: 'fill', sentence: '我___窗帘，让阳光进来。', options: ['拉开', '穿上', '反映'], answer: '拉开' },
        { type: 'order', words: ['无论', '多', '忙', '我', '都', '想', '聊天'], answer: '无论多忙我都想聊天' },
        { type: 'order', words: ['我', '穿上', '毛衣', '戴上', '帽子'], answer: '我穿上毛衣戴上帽子' },
        { type: 'fill', sentence: '袜子放进___里。', options: ['袋', '镜子', '电灯'], answer: '袋' }
      ],
      hard: [
        { type: 'fill', sentence: '你说得对，___。', options: ['没错', '反映', '无论'], answer: '没错' },
        { type: 'fill', sentence: '写报告___实习的情况。', options: ['反映', '付出', '穿上'], answer: '反映' },
        { type: 'translate', prompt: 'Thực tập xong rồi, tâm trạng rất thoải mái.', answer: '实习结束了，心情很轻松。' },
        { type: 'translate', prompt: 'Dù bận đến đâu, tôi cũng muốn trò chuyện với bạn thân.', answer: '无论多忙，我都想和好友聊天。' },
        { type: 'translate', prompt: 'Trời lạnh tôi mặc áo len, đội mũ.', answer: '天冷我穿上毛衣，戴上帽子。' },
        { type: 'fill', sentence: '我们这___人感情真好。', options: ['伙', '袋', '盒子'], answer: '伙' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 140: Đồ dùng & thiết bị (2) — 19 từ
  // ─────────────────────────────────────────────────────────────────────────
  140: {
    id: 140,
    level: 4,
    title: 'Đồ dùng & thiết bị (2)',
    context: 'Buổi sáng trước chuyến bay, trời mưa. Mai dậy theo đồng hồ báo thức, chuẩn bị ô và áo khoác, nhắn tin cho bạn bè và nghe lời dặn của thầy Lý.',
    vocabPreview: ['闹钟', '伞', '在于', '微信', '稳'],
    objectives: [
      "Nắm nhóm từ khóa: 闹钟 · 伞 · 在于 · 微信 · 稳",
      "Nghe hiểu và kể lại tình huống Đồ dùng & thiết bị (2) bằng câu HSK 4",
      "Phân biệt cách dùng 闹钟 · 伞 · 在于",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "闹钟 — đồng hồ báo thức",
        explain: "Dùng 闹钟 trong ngữ cảnh Đồ dùng & thiết bị (2) để diễn đạt: đồng hồ báo thức.",
        examples: [
          { zh: "闹钟响了，我醒来，外面下雨，得带伞。", py: "Nàozhōng xiǎng le, wǒ xǐnglái, wàimiàn xià yǔ, děi dài sǎn.", vi: "Đồng hồ báo thức kêu, tôi tỉnh dậy, ngoài trời mưa, phải mang ô." }
        ] },
      { point: "伞 — ô",
        explain: "Dùng 伞 trong ngữ cảnh Đồ dùng & thiết bị (2) để diễn đạt: ô.",
        examples: [
          { zh: "闹钟响了，我醒来，外面下雨，得带伞。", py: "Nàozhōng xiǎng le, wǒ xǐnglái, wàimiàn xià yǔ, děi dài sǎn.", vi: "Đồng hồ báo thức kêu, tôi tỉnh dậy, ngoài trời mưa, phải mang ô." }
        ] },
      { point: "在于 — ở chỗ",
        explain: "Dùng 在于 trong ngữ cảnh Đồ dùng & thiết bị (2) để diễn đạt: ở chỗ.",
        examples: [
          { zh: "成功在于坚持，别轻易放弃。", py: "Chénggōng zàiyú jiānchí, bié qīngyì fàngqì.", vi: "Thành công nằm ở sự kiên trì, đừng dễ dàng bỏ cuộc." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Phòng trọ · Sáng sớm', bg: 'dorm-room',
        cast: ['mai'],
        text: 'Buổi sáng trước chuyến bay, trời mưa.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '闹钟响了，我醒来，外面下雨，得带伞。',
        pinyin: 'Nàozhōng xiǎng le, wǒ xǐnglái, wàimiàn xià yǔ, děi dài sǎn.',
        meaning: 'Đồng hồ báo thức kêu, tôi tỉnh dậy, ngoài trời mưa, phải mang ô.',
        expression: 'focused', vocab: ['闹钟', '伞'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我用微信告诉你，路上很湿，小心。',
        pinyin: 'Wǒ yòng wēixìn gàosu nǐ, lùshang hěn shī, xiǎoxīn.',
        meaning: 'Tớ nhắn WeChat cho cậu, đường rất ướt, cẩn thận nhé.',
        expression: 'curious', vocab: ['微信', '湿'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '谢谢。我穿上外套，戴好眼镜。',
        pinyin: 'Xièxie. Wǒ chuānshang wàitào, dài hǎo yǎnjìng.',
        meaning: 'Cảm ơn. Tôi mặc áo khoác, đeo kính cho ngay ngắn.',
        expression: null, vocab: ['外套', '眼镜'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '这家小型咖啡店的盘子很细，门口挂着牌子，用纸吸管。',
        pinyin: 'Zhè jiā xiǎoxíng kāfēidiàn de pánzi hěn xì, ménkǒu guàzhe páizi, yòng zhǐ xīguǎn.',
        meaning: 'Quán cà phê nhỏ này có những cái đĩa mỏng, ngoài cửa treo bảng, dùng ống hút giấy.',
        expression: 'curious', vocab: ['小型', '盘子', '细', '牌', '吸管'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '成功在于坚持，别轻易放弃。',
        pinyin: 'Chénggōng zàiyú jiānchí, bié qīngyì fàngqì.',
        meaning: 'Thành công nằm ở sự kiên trì, đừng dễ dàng bỏ cuộc.',
        expression: 'happy', vocab: ['在于', '轻易'] },
      { type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'dorm-room',
        scene: '📍 Phòng trọ',
        expression: 'focused',
        q: 'Tiểu Mỹ dặn Mai giữ lời hứa và đứng vững. Diễn đạt "Cậu phải giữ chữ tín, đứng cho vững" sao cho đúng?',
        options: [
          { text: '你要守信用，站稳一点。', pinyin: 'Nǐ yào shǒu xìnyòng, zhàn wěn yìdiǎn.', meaning: 'Cậu phải giữ chữ tín, đứng cho vững.', correct: true,
            feedback: 'Đúng! 守 = giữ; 稳 = vững.' },
          { text: '你要松信用，站稳一点。', pinyin: 'Nǐ yào sōng xìnyòng, zhàn wěn yìdiǎn.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '松 = lỏng/thư giãn, không hợp với "giữ chữ tín".' },
          { text: '你要守信用，站松一点。', pinyin: 'Nǐ yào shǒu xìnyòng, zhàn sōng yìdiǎn.', meaning: '(không tự nhiên)', correct: false,
            feedback: '"站松" không tự nhiên; nên dùng 站稳.' }
        ], vocab: ['守', '稳', '松'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '行李有点重，我没法儿一个人提，不过无所谓，慢慢来。鞋上有泥，用刷子刷干净。',
        pinyin: 'Xíngli yǒudiǎn zhòng, wǒ méifǎr yí ge rén tí, búguò wúsuǒwèi, mànman lái. Xié shàng yǒu ní, yòng shuāzi shuā gānjìng.',
        meaning: 'Hành lý hơi nặng, tôi không thể một mình xách, nhưng không sao, từ từ. Giày dính bùn, dùng bàn chải chải sạch.',
        expression: 'focused', vocab: ['没法儿', '无所谓', '刷子'] },
      { type: 'checkpoint', questions: [
        { q: '“闹钟” là gì?', options: ['Đồng hồ báo thức', 'Cái ô', 'Áo khoác', 'Cái đĩa'], answer: 0 },
        { q: '“成功在于坚持” — “在于” nghĩa là?', options: ['Ở chỗ, nằm ở', 'Không thể', 'Dễ dàng', 'Cỡ nhỏ'], answer: 0 },
        { q: '“站稳一点” — “稳” nghĩa là?', options: ['Vững', 'Lỏng lẻo', 'Ẩm ướt', 'Nhỏ'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '没法儿', p: 'méi fǎr', v: 'không có cách, đành chịu', e: 'Can\'t' },
      { h: '闹钟', p: 'nào zhōng', v: 'đồng hồ báo thức', e: 'alarm clock' },
      { h: '牌', p: 'pái', v: 'bảng, thẻ, bài', e: 'dominoes, plate, prosodic pattern for ^1 ci2 ^ or ^3 qu3, card, cards, cards, dominoes, etc., brand,' },
      { h: '盘子', p: 'pán zi', v: 'đĩa', e: 'plate, pan, salver, bowl, dish, tray' },
      { h: '轻易', p: 'qīng yì', v: 'dễ dàng, khinh suất', e: 'lightly, rashly' },
      { h: '伞', p: 'sǎn', v: 'ô, dù', e: 'fimbria, brolly, sth. shaped like an umbrella, umbrella, mush, gamp, bumbershoot' },
      { h: '湿', p: 'shī', v: 'ẩm ướt, bị ướt', e: 'humidify, moisten, humid, damp, dampen, wet' },
      { h: '守', p: 'shǒu', v: 'canh gác, giữ', e: 'guard, defend, keep watch' },
      { h: '刷子', p: 'shuā zi', v: 'bàn chải', e: 'brush, scrub, CL:把[ba3]' },
      { h: '松', p: 'sōng', v: 'thư giãn, lỏng', e: 'crisp, loose, light and flaky, slack, loosen, relax, unbend, soft, not hard up' },
      { h: '外套', p: 'wài tào', v: 'áo khoác ngoài', e: 'stragulum, overclothes, outerwear, pall, surcoat, overcoat, loose coat, greatcoat, manta, outer garm' },
      { h: '微信', p: 'wēi xìn', v: 'WeChat (ứng dụng nhắn tin)', e: 'Weixin or WeChat (mobile text and voice messaging service developed by Tencent 騰訊|腾讯[Teng2 xun4])' },
      { h: '稳', p: 'wěn', v: 'vững chắc, ổn định', e: 'firm, stable, steady, staid, sedate, sure, certain' },
      { h: '无所谓', p: 'wú suǒ wèi', v: 'không quan tâm, không sao', e: 'not deserve the name of, be indifferent, cannot be designated as, not matter, can\'t be considered as' },
      { h: '吸管', p: 'xī guǎn', v: 'ống hút', e: '(drinking) straw, pipette, eyedropper, snorkel, CL:支[zhi1]' },
      { h: '细', p: 'xì', v: 'mỏng, nhỏ, chi tiết', e: 'fine, exquisite, minute, in small particles, meticulous, thin and soft, thin, careful, light, trifli' },
      { h: '小型', p: 'xiǎo xíng', v: 'cỡ nhỏ, loại nhỏ', e: 'spyglass, miniature, small-sized, bar, small-scale, pettiness' },
      { h: '眼镜', p: 'yǎn jìng', v: 'kính mắt', e: 'cheater, lorgnon, spectacles, specs, glasses, spectacle, barnacles, eyeglasses, barnacle, eyeglass, ' },
      { h: '在于', p: 'zài yú', v: 'ở chỗ, nằm ở', e: 'be at, on, lie, in, depend on, lie_in, rest with, lie in, be determined by, consist_in, consist in' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '___响了，我该起床了。', options: ['闹钟', '盘子', '外套'], answer: '闹钟' },
        { type: 'fill', sentence: '下雨了，记得带___。', options: ['伞', '牌', '刷子'], answer: '伞' },
        { type: 'fill', sentence: '天冷穿上___。', options: ['外套', '吸管', '盘子'], answer: '外套' },
        { type: 'fill', sentence: '我用___给你发消息。', options: ['微信', '伞', '闹钟'], answer: '微信' },
        { type: 'fill', sentence: '我近视，要戴___。', options: ['眼镜', '盘子', '伞'], answer: '眼镜' }
      ],
      normal: [
        { type: 'fill', sentence: '成功___坚持。', options: ['在于', '小型', '无所谓'], answer: '在于' },
        { type: 'fill', sentence: '别___放弃，再坚持一下。', options: ['轻易', '湿', '细'], answer: '轻易' },
        { type: 'fill', sentence: '雨后路面很___。', options: ['湿', '稳', '松'], answer: '湿' },
        { type: 'fill', sentence: '这是一家___咖啡店。', options: ['小型', '无所谓', '轻易'], answer: '小型' },
        { type: 'order', words: ['你', '要', '守', '信用', '站稳', '一点'], answer: '你要守信用站稳一点' },
        { type: 'order', words: ['成功', '在于', '坚持'], answer: '成功在于坚持' },
        { type: 'fill', sentence: '鞋脏了，用___刷干净。', options: ['刷子', '盘子', '吸管'], answer: '刷子' }
      ],
      hard: [
        { type: 'fill', sentence: '行李太重，我___一个人提。', options: ['没法儿', '无所谓', '轻易'], answer: '没法儿' },
        { type: 'fill', sentence: '怎样都行，我___。', options: ['无所谓', '没法儿', '在于'], answer: '无所谓' },
        { type: 'translate', prompt: 'Đồng hồ báo thức kêu, tôi tỉnh dậy, ngoài trời mưa.', answer: '闹钟响了，我醒来，外面下雨。' },
        { type: 'translate', prompt: 'Thành công nằm ở sự kiên trì, đừng dễ dàng bỏ cuộc.', answer: '成功在于坚持，别轻易放弃。' },
        { type: 'translate', prompt: 'Cậu phải giữ chữ tín, đứng cho vững.', answer: '你要守信用，站稳一点。' },
        { type: 'fill', sentence: '用纸做的___比塑料环保。', options: ['吸管', '闹钟', '外套'], answer: '吸管' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 141: Cơ thể & cảm giác (1) — 20 từ
  // ─────────────────────────────────────────────────────────────────────────
  141: {
    id: 141,
    level: 4,
    title: 'Cơ thể & cảm giác (1)',
    context: 'Trước khi về, Mai đi mua sắm ở trung tâm bách hóa và lo vài việc vặt. Em chăm sóc bản thân, dạo phố cùng Tiểu Mỹ và giữ vững quyết định của mình.',
    vocabPreview: ['百货', '促销', '皮肤', '步行', '动摇'],
    objectives: [
      "Nắm nhóm từ khóa: 百货 · 促销 · 皮肤 · 步行 · 动摇",
      "Nghe hiểu và kể lại tình huống Cơ thể & cảm giác (1) bằng câu HSK 4",
      "Phân biệt cách dùng 百货 · 促销 · 皮肤",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "百货 — bách hóa",
        explain: "Dùng 百货 trong ngữ cảnh Cơ thể & cảm giác (1) để diễn đạt: bách hóa.",
        examples: [
          { zh: "回家前我去百货商店办事，正好有促销。", py: "Huí jiā qián wǒ qù bǎihuò shāngdiàn bànshì, zhènghǎo yǒu cùxiāo.", vi: "Trước khi về nhà tôi đến trung tâm bách hóa lo việc, vừa hay có khuyến mãi." }
        ] },
      { point: "促销 — khuyến mãi",
        explain: "Dùng 促销 trong ngữ cảnh Cơ thể & cảm giác (1) để diễn đạt: khuyến mãi.",
        examples: [
          { zh: "回家前我去百货商店办事，正好有促销。", py: "Huí jiā qián wǒ qù bǎihuò shāngdiàn bànshì, zhènghǎo yǒu cùxiāo.", vi: "Trước khi về nhà tôi đến trung tâm bách hóa lo việc, vừa hay có khuyến mãi." }
        ] },
      { point: "皮肤 — da (người)",
        explain: "Dùng 皮肤 trong ngữ cảnh Cơ thể & cảm giác (1) để diễn đạt: da (người).",
        examples: [
          { zh: "我买了牙膏，皮肤干，也买了护肤品。", py: "Wǒ mǎi le yágāo, pífū gān, yě mǎi le hùfūpǐn.", vi: "Tôi mua kem đánh răng, da khô nên mua cả mỹ phẩm dưỡng da." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Trung tâm bách hóa · Chiều', bg: 'shop',
        cast: ['mai', 'xiaomei'],
        text: 'Trước khi về, Mai đi trung tâm bách hóa mua sắm và lo việc.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '回家前我去百货商店办事，正好有促销。',
        pinyin: 'Huí jiā qián wǒ qù bǎihuò shāngdiàn bànshì, zhènghǎo yǒu cùxiāo.',
        meaning: 'Trước khi về nhà tôi đến trung tâm bách hóa lo việc, vừa hay có khuyến mãi.',
        expression: 'happy', vocab: ['百货', '办事', '促销'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这家店在地下一层，我们步行过去。',
        pinyin: 'Zhè jiā diàn zài dìxià yì céng, wǒmen bùxíng guòqù.',
        meaning: 'Cửa hàng này ở tầng hầm, mình đi bộ qua.',
        expression: null, vocab: ['地下', '步行'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我买了牙膏，皮肤干，也买了护肤品。',
        pinyin: 'Wǒ mǎi le yágāo, pífū gān, yě mǎi le hùfūpǐn.',
        meaning: 'Tôi mua kem đánh răng, da khô nên mua cả mỹ phẩm dưỡng da.',
        expression: 'curious', vocab: ['牙膏', '皮肤'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '那个店员真帅，戴着耳机。货架后头有二手书，价格便宜。',
        pinyin: 'Nàge diànyuán zhēn shuài, dàizhe ěrjī. Huòjià hòutou yǒu èrshǒu shū, jiàgé piányi.',
        meaning: 'Nhân viên kia đẹp trai ghê, đeo tai nghe. Sau kệ hàng có sách cũ, giá rẻ.',
        expression: 'happy', vocab: ['帅', '耳机', '货', '后头', '二手'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '停车场在地面，一辆车在倒车。公交上扶手摆动，门口有位保安像个兵，站得很直。',
        pinyin: 'Tíngchēchǎng zài dìmiàn, yí liàng chē zài dàochē. Gōngjiāo shàng fúshǒu bǎidòng, ménkǒu yǒu wèi bǎo\'ān xiàng ge bīng, zhàn de hěn zhí.',
        meaning: 'Bãi xe ở mặt đất, một chiếc xe đang lùi. Trên xe buýt tay vịn đung đưa; ở cửa có anh bảo vệ như người lính, đứng rất thẳng.',
        expression: 'curious', vocab: ['地面', '倒车', '摆动', '兵'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'shop',
        scene: '📍 Trung tâm bách hóa',
        expression: 'focused',
        q: 'Món đồ đắt khiến Mai lưỡng lự nhưng cô vẫn quyết. Diễn đạt "Tuy giá đắt, nhưng tôi không dao động" sao cho đúng?',
        options: [
          { text: '价格虽贵，我却没有动摇。', pinyin: 'Jiàgé suī guì, wǒ què méiyǒu dòngyáo.', meaning: 'Tuy giá đắt, nhưng tôi không dao động.', correct: true,
            feedback: 'Đúng! 却 = nhưng (chuyển ý); 动摇 = dao động.' },
          { text: '价格虽贵，我含没有动摇。', pinyin: 'Jiàgé suī guì, wǒ hán méiyǒu dòngyáo.', meaning: '(sai từ loại)', correct: false,
            feedback: '含 = chứa/ngậm, không phải liên từ.' },
          { text: '价格虽贵，我底没有动摇。', pinyin: 'Jiàgé suī guì, wǒ dǐ méiyǒu dòngyáo.', meaning: '(không thông)', correct: false,
            feedback: '底 = đáy, không hợp ở đây.' }
        ], vocab: ['却', '动摇', '含', '底'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '这瓶饮料含糖，我放回货架底层。',
        pinyin: 'Zhè píng yǐnliào hán táng, wǒ fàng huí huòjià dǐcéng.',
        meaning: 'Chai nước này có đường, tôi để lại tầng đáy của kệ.',
        expression: null, vocab: ['含', '底'] },
      { type: 'checkpoint', questions: [
        { q: '“步行” nghĩa là?', options: ['Đi bộ', 'Lái xe', 'Chạy', 'Bơi'], answer: 0 },
        { q: '“皮肤” chỉ điều gì?', options: ['Da (người)', 'Răng', 'Ngực', 'Tóc'], answer: 0 },
        { q: '“我却没有动摇” — “却” nghĩa là?', options: ['Nhưng (chuyển ý)', 'Vì vậy', 'Nếu', 'Bất kể'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '底', p: 'dǐ', v: 'đáy, phía dưới', e: 'bottom, base, background' },
      { h: '皮肤', p: 'pí fū', v: 'da (người)', e: 'skin' },
      { h: '却', p: 'què', v: 'nhưng, song', e: 'but, however, yet, to step back' },
      { h: '帅', p: 'shuài', v: 'đẹp trai, soái', e: 'handsome, smart-looking' },
      { h: '牙膏', p: 'yá gāo', v: 'kem đánh răng', e: 'toothpaste' },
      { h: '百货', p: 'bǎi huò', v: 'bách hóa', e: 'general merchandise' },
      { h: '摆动', p: 'bǎi dòng', v: 'lắc lư, đung đưa', e: 'to sway, to swing, to move back and forth, to oscillate' },
      { h: '办事', p: 'bàn shì', v: 'xử lý công việc, lo việc', e: 'dispose, handle affairs, work' },
      { h: '兵', p: 'bīng', v: 'lính, binh sĩ', e: 'fighter, troops, armed force, arms, dogface, pawn in Ch. chess, military, weapons, private, soldier,' },
      { h: '步行', p: 'bù xíng', v: 'đi bộ', e: 'hoof it, tread, ambulate, leg it, foot, pedestrianize, footslog, tramp, go on foot, hoof, step, loco' },
      { h: '促销', p: 'cù xiāo', v: 'khuyến mãi', e: 'merchandise, sell' },
      { h: '倒车', p: 'dào chē', v: 'lùi xe', e: 'to change buses, trains etc, to reverse (a vehicle), to drive backwards' },
      { h: '地面', p: 'dì miàn', v: 'mặt đất, sàn', e: '(earth\'s) surface, ground, floor, region' },
      { h: '地下', p: 'dì xià', v: 'dưới đất, tầng hầm', e: 'subterranean, underground, secretly, subsurface, secret, secret activity' },
      { h: '动摇', p: 'dòng yáo', v: 'lung lay, dao động', e: 'totter, unnerve, faze, fluctuate, jounce, falter, oscillate, enervate, seesaw, stagger, waver, depol' },
      { h: '耳机', p: 'ěr jī', v: 'tai nghe', e: 'headphones, earphones, telephone receiver' },
      { h: '二手', p: 'èr shǒu', v: 'đồ cũ, secondhand', e: 'indirectly acquired, second-hand (information, equipment etc), assistant' },
      { h: '含', p: 'hán', v: 'chứa, ngậm', e: 'keep in mouth, cherish' },
      { h: '后头', p: 'hòu tou', v: 'phía sau', e: 'behind, in the back, the rear side, later, in future' },
      { h: '货', p: 'huò', v: 'hàng hóa', e: 'commodity, idiot, money, blockhead, loading, goods' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我去___商店买东西。', options: ['百货', '耳机', '皮肤'], answer: '百货' },
        { type: 'fill', sentence: '今天有___，很多东西打折。', options: ['促销', '倒车', '摆动'], answer: '促销' },
        { type: 'fill', sentence: '不远，我们___过去吧。', options: ['步行', '倒车', '办事'], answer: '步行' },
        { type: 'fill', sentence: '天干，我的___很干。', options: ['皮肤', '货', '兵'], answer: '皮肤' },
        { type: 'fill', sentence: '他戴着___听音乐。', options: ['耳机', '皮肤', '百货'], answer: '耳机' }
      ],
      normal: [
        { type: 'fill', sentence: '我去商店___，顺便买东西。', options: ['办事', '摆动', '动摇'], answer: '办事' },
        { type: 'fill', sentence: '货架___有二手书。', options: ['后头', '地下', '地面'], answer: '后头' },
        { type: 'fill', sentence: '司机正在___，请小心。', options: ['倒车', '步行', '办事'], answer: '倒车' },
        { type: 'fill', sentence: '这本书是___的，很便宜。', options: ['二手', '促销', '皮肤'], answer: '二手' },
        { type: 'order', words: ['这', '家', '店', '在', '地下', '一层'], answer: '这家店在地下一层' },
        { type: 'order', words: ['价格', '虽', '贵', '我', '却', '没有', '动摇'], answer: '价格虽贵我却没有动摇' },
        { type: 'fill', sentence: '车上的扶手在___。', options: ['摆动', '办事', '促销'], answer: '摆动' }
      ],
      hard: [
        { type: 'fill', sentence: '价格虽贵，我___没有动摇。', options: ['却', '含', '底'], answer: '却' },
        { type: 'fill', sentence: '这瓶饮料___糖，我不买。', options: ['含', '却', '帅'], answer: '含' },
        { type: 'translate', prompt: 'Trước khi về nhà tôi đến trung tâm bách hóa lo việc.', answer: '回家前我去百货商店办事。' },
        { type: 'translate', prompt: 'Nhân viên kia đẹp trai, đeo tai nghe.', answer: '那个店员真帅，戴着耳机。' },
        { type: 'translate', prompt: 'Chai nước này có đường, tôi để lại tầng đáy của kệ.', answer: '这瓶饮料含糖，我放回货架底层。' },
        { type: 'fill', sentence: '门口的保安像个___，站得很直。', options: ['兵', '货', '底'], answer: '兵' }
      ]
    }
  }

});

// ───────────────────────────────────────────────────────
// BATCH 5 (tiếp) — Bài 142-143 (Cơ thể 2 · Ẩm thực)
// ───────────────────────────────────────────────────────
Object.assign(COURSE_DATA, {

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 142: Cơ thể & cảm giác (2) — 18 từ
  // ─────────────────────────────────────────────────────────────────────────
  142: {
    id: 142,
    level: 4,
    title: 'Cơ thể & cảm giác (2)',
    context: 'Mai nhận một bưu kiện, giúp một cụ già ngồi xe lăn, và chú ý chăm sóc cơ thể mỗi ngày. Em cũng học cách rút lại lời nói khi lỡ làm bạn buồn.',
    vocabPreview: ['快递', '轮椅', '刷牙', '收回', '种类'],
    objectives: [
      "Nắm nhóm từ khóa: 快递 · 轮椅 · 刷牙 · 收回 · 种类",
      "Nghe hiểu và kể lại tình huống Cơ thể & cảm giác (2) bằng câu HSK 4",
      "Phân biệt cách dùng 快递 · 轮椅 · 刷牙",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "快递 — chuyển phát nhanh",
        explain: "Dùng 快递 trong ngữ cảnh Cơ thể & cảm giác (2) để diễn đạt: chuyển phát nhanh.",
        examples: [
          { zh: "我收到一个快递，手里拿着箱子。", py: "Wǒ shōudào yí ge kuàidì, shǒu lǐ názhe xiāngzi.", vi: "Tôi nhận một bưu kiện, trên tay cầm cái thùng." }
        ] },
      { point: "轮椅 — xe lăn",
        explain: "Dùng 轮椅 trong ngữ cảnh Cơ thể & cảm giác (2) để diễn đạt: xe lăn.",
        examples: [
          { zh: "前头有位坐轮椅的老人，我们帮他吧。", py: "Qiántou yǒu wèi zuò lúnyǐ de lǎorén, wǒmen bāng tā ba.", vi: "Phía trước có một cụ già ngồi xe lăn, mình giúp cụ nhé." }
        ] },
      { point: "刷牙 — đánh răng",
        explain: "Dùng 刷牙 trong ngữ cảnh Cơ thể & cảm giác (2) để diễn đạt: đánh răng.",
        examples: [
          { zh: "早上我刷牙，用新牙刷，张开嘴巴。我牙有点不舒服，得看牙医。", py: "Zǎoshang wǒ shuā yá, yòng xīn yáshuā, zhāngkāi zuǐba. Wǒ yá yǒudiǎn bù shūfu, děi kàn yáyī.", vi: "Sáng tôi đánh răng, dùng bàn chải mới, há miệng ra. Răng tôi hơi khó chịu, phải đi khám nha." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Trước cửa nhà · Sáng', bg: 'home',
        cast: ['mai', 'xiaomei'],
        text: 'Mai nhận một bưu kiện và gặp một cụ già cần giúp đỡ.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我收到一个快递，手里拿着箱子。',
        pinyin: 'Wǒ shōudào yí ge kuàidì, shǒu lǐ názhe xiāngzi.',
        meaning: 'Tôi nhận một bưu kiện, trên tay cầm cái thùng.',
        expression: 'happy', vocab: ['快递', '手里', '箱子'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '前头有位坐轮椅的老人，我们帮他吧。',
        pinyin: 'Qiántou yǒu wèi zuò lúnyǐ de lǎorén, wǒmen bāng tā ba.',
        meaning: 'Phía trước có một cụ già ngồi xe lăn, mình giúp cụ nhé.',
        expression: 'curious', vocab: ['前头', '轮椅'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好。帮完之后，我们继续逛。',
        pinyin: 'Hǎo. Bāng wán zhīhòu, wǒmen jìxù guàng.',
        meaning: 'Được. Giúp xong rồi, mình tiếp tục đi dạo.',
        expression: 'happy', vocab: ['之后'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '早上我刷牙，用新牙刷，张开嘴巴。我牙有点不舒服，得看牙医。',
        pinyin: 'Zǎoshang wǒ shuā yá, yòng xīn yáshuā, zhāngkāi zuǐba. Wǒ yá yǒudiǎn bù shūfu, děi kàn yáyī.',
        meaning: 'Sáng tôi đánh răng, dùng bàn chải mới, há miệng ra. Răng tôi hơi khó chịu, phải đi khám nha.',
        expression: 'focused', vocab: ['刷牙', '牙刷', '嘴巴', '牙'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '我戴上帽子，挑了件衣服。运动让我的胸部和背更有力。',
        pinyin: 'Wǒ dài shàng màozi, tiāo le jiàn yīfu. Yùndòng ràng wǒ de xiōngbù hé bèi gèng yǒulì.',
        meaning: 'Tôi đội mũ, chọn một bộ đồ. Vận động khiến ngực và lưng tôi khỏe hơn.',
        expression: 'happy', vocab: ['帽子', '挑', '胸部'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '那位美女和帅哥在拍照，真好看。',
        pinyin: 'Nà wèi měinǚ hé shuàigē zài pāizhào, zhēn hǎokàn.',
        meaning: 'Cô gái đẹp và anh chàng đẹp trai kia đang chụp ảnh, đẹp ghê.',
        expression: 'happy', vocab: ['美女', '帅哥'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'street',
        scene: '📍 Trên phố',
        expression: 'sad',
        q: 'Mai lỡ nói lời làm bạn buồn rồi hối hận. Diễn đạt "Tôi muốn thu lại lời vừa nói" sao cho đúng?',
        options: [
          { text: '我想收回刚才说的话。', pinyin: 'Wǒ xiǎng shōuhuí gāngcái shuō de huà.', meaning: 'Tôi muốn thu lại lời vừa nói.', correct: true,
            feedback: 'Đúng! 收回 = thu lại, rút lại.' },
          { text: '我想转身刚才说的话。', pinyin: 'Wǒ xiǎng zhuǎnshēn gāngcái shuō de huà.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '转身 = quay người, không hợp với "lời nói".' },
          { text: '我想种类刚才说的话。', pinyin: 'Wǒ xiǎng zhǒnglèi gāngcái shuō de huà.', meaning: '(sai từ loại)', correct: false,
            feedback: '种类 = chủng loại (danh từ), không hợp.' }
        ], vocab: ['收回', '转身', '种类'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '商店里衣服种类很多，我转身又看了看。',
        pinyin: 'Shāngdiàn lǐ yīfu zhǒnglèi hěn duō, wǒ zhuǎnshēn yòu kàn le kàn.',
        meaning: 'Trong cửa hàng quần áo đủ loại, tôi quay người ngắm thêm.',
        expression: 'curious', vocab: ['种类', '转身'] },
      { type: 'checkpoint', questions: [
        { q: '“快递” nghĩa là?', options: ['Chuyển phát nhanh', 'Xe lăn', 'Cái mũ', 'Cái răng'], answer: 0 },
        { q: '“刷牙” dùng cái gì?', options: ['牙刷 (bàn chải)', '帽子', '箱子', '耳机'], answer: 0 },
        { q: '“收回刚才的话” — “收回” nghĩa là?', options: ['Thu lại, rút lại', 'Quay người', 'Chủng loại', 'Phía trước'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '快递', p: 'kuài dì', v: 'chuyển phát nhanh', e: 'express delivery' },
      { h: '轮椅', p: 'lún yǐ', v: 'xe lăn', e: 'wheelchair' },
      { h: '帽子', p: 'mào zi', v: 'mũ, nón', e: 'castor, lid, cap, brand, headgear, chapeau, titfer, hat, headpiece, label, amice, tag' },
      { h: '美女', p: 'měi nǚ', v: 'người đẹp, cô gái xinh', e: 'looker, bombshell, siren, cookie, peach, dish, sweetheart, peri, lulu, beautiful woman, charmer, sma' },
      { h: '前头', p: 'qián tou', v: 'phía trước', e: 'in front, at the head, ahead, above' },
      { h: '收回', p: 'shōu huí', v: 'thu lại, lấy lại', e: 'take back, call in, recall, withdraw, countermand' },
      { h: '手里', p: 'shǒu li', v: 'trên tay, trong tay', e: 'in hand, (a situation is) in sb\'s hands' },
      { h: '刷牙', p: 'shuā yá', v: 'đánh răng', e: 'to brush one\'s teeth' },
      { h: '帅哥', p: 'shuài gē', v: 'anh chàng đẹp trai', e: 'handsome guy, lady-killer, handsome (form of address)' },
      { h: '挑', p: 'tiāo', v: 'chọn, gánh', e: 'pluck, provoking, stir up, choose, incite, instigation, lance, shoulder, push sth. up, selection, ca' },
      { h: '箱子', p: 'xiāng zi', v: 'hộp lớn, thùng, vali', e: 'suitcase, chest, box, case, trunk, CL:隻|只[zhi1],個|个[ge4]' },
      { h: '胸部', p: 'xiōng bù', v: 'ngực, vùng ngực', e: 'chest, breast, thorax' },
      { h: '牙', p: 'yá', v: 'răng', e: 'ivory, cuspid, fang, broker, tooth-like thing, tusk, tooth' },
      { h: '牙刷', p: 'yá shuā', v: 'bàn chải đánh răng', e: 'toothbrush, CL:把[ba3]' },
      { h: '之后', p: 'zhī hòu', v: 'sau đó, sau khi', e: 'later, behind, at the back of, after' },
      { h: '种类', p: 'zhǒng lèi', v: 'chủng loại', e: 'kidney, description, race, form, nature, manner, variety, feather, ordering, ilk, style, class, orde' },
      { h: '转身', p: 'zhuǎn shēn', v: 'quay người, xoay người', e: 'turn round, go_about, face about, turn' },
      { h: '嘴巴', p: 'zuǐ ba', v: 'miệng, mồm', e: 'jaw, cheeks, kisser, mouth' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我收到一个___。', options: ['快递', '轮椅', '帽子'], answer: '快递' },
        { type: 'fill', sentence: '老人坐着___，我们帮他。', options: ['轮椅', '快递', '牙刷'], answer: '轮椅' },
        { type: 'fill', sentence: '早上要___，保持口腔干净。', options: ['刷牙', '挑', '转身'], answer: '刷牙' },
        { type: 'fill', sentence: '天冷出门戴___。', options: ['帽子', '箱子', '轮椅'], answer: '帽子' },
        { type: 'fill', sentence: '刷牙要用___。', options: ['牙刷', '帽子', '快递'], answer: '牙刷' }
      ],
      normal: [
        { type: 'fill', sentence: '___有位老人，我们去帮忙。', options: ['前头', '之后', '手里'], answer: '前头' },
        { type: 'fill', sentence: '帮完___，我们继续逛。', options: ['之后', '前头', '手里'], answer: '之后' },
        { type: 'fill', sentence: '商店里衣服___很多。', options: ['种类', '快递', '帽子'], answer: '种类' },
        { type: 'fill', sentence: '我___了一件喜欢的衣服。', options: ['挑', '收回', '刷牙'], answer: '挑' },
        { type: 'order', words: ['我', '手里', '拿着', '箱子'], answer: '我手里拿着箱子' },
        { type: 'order', words: ['我', '想', '收回', '刚才', '说', '的', '话'], answer: '我想收回刚才说的话' },
        { type: 'fill', sentence: '我___又看了看货架。', options: ['转身', '收回', '刷牙'], answer: '转身' }
      ],
      hard: [
        { type: 'fill', sentence: '运动让我的___更有力。', options: ['胸部', '帽子', '快递'], answer: '胸部' },
        { type: 'fill', sentence: '我牙疼，张开___让医生看。', options: ['嘴巴', '种类', '前头'], answer: '嘴巴' },
        { type: 'translate', prompt: 'Tôi nhận một bưu kiện, trên tay cầm cái thùng.', answer: '我收到一个快递，手里拿着箱子。' },
        { type: 'translate', prompt: 'Sáng tôi đánh răng, dùng bàn chải mới.', answer: '早上我刷牙，用新牙刷。' },
        { type: 'translate', prompt: 'Tôi muốn thu lại lời vừa nói.', answer: '我想收回刚才说的话。' },
        { type: 'fill', sentence: '那位___和帅哥在拍照。', options: ['美女', '轮椅', '箱子'], answer: '美女' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 143: Ẩm thực & mời khách — 23 từ
  // ─────────────────────────────────────────────────────────────────────────
  143: {
    id: 143,
    level: 4,
    title: 'Ẩm thực & mời khách',
    context: 'Về đến nhà, họ hàng của Mai tụ họp ăn cơm. Mọi người nếm các món với đủ vị, trò chuyện về sở thích nấu ăn, và Mai khoe những món quà mang về.',
    vocabPreview: ['尝', '套餐', '兴趣', '叔叔', '特价'],
    objectives: [
      "Nắm nhóm từ khóa: 尝 · 套餐 · 兴趣 · 叔叔 · 特价",
      "Nghe hiểu và kể lại tình huống Ẩm thực & mời khách bằng câu HSK 4",
      "Phân biệt cách dùng 尝 · 套餐 · 兴趣",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "尝 — nếm",
        explain: "Dùng 尝 trong ngữ cảnh Ẩm thực & mời khách để diễn đạt: nếm.",
        examples: [
          { zh: "妈妈烧了一桌菜，你尝尝。", py: "Māma shāo le yì zhuō cài, nǐ chángchang.", vi: "Mẹ nấu cả mâm cơm, con nếm thử đi." }
        ] },
      { point: "套餐 — suất ăn",
        explain: "Dùng 套餐 trong ngữ cảnh Ẩm thực & mời khách để diễn đạt: suất ăn.",
        examples: [
          { zh: "我们点了一个套餐，很划算。最近我胖了，要注意体重。", py: "Wǒmen diǎn le yí ge tàocān, hěn huásuàn. Zuìjìn wǒ pàng le, yào zhùyì tǐzhòng.", vi: "Bọn tớ gọi một suất combo, rất hời. Dạo này tớ mập lên, phải để ý cân nặng." }
        ] },
      { point: "兴趣 — hứng thú",
        explain: "Dùng 兴趣 trong ngữ cảnh Ẩm thực & mời khách để diễn đạt: hứng thú.",
        examples: [
          { zh: "我对做菜很有兴趣，还想学编中国结。", py: "Wǒ duì zuò cài hěn yǒu xìngqù, hái xiǎng xué biān Zhōngguó jié.", vi: "Con rất thích nấu ăn, còn muốn học thắt nút Trung Hoa." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Nhà Mai · Buổi tối', bg: 'home',
        cast: ['mai', 'mama'],
        text: 'Về đến nhà, họ hàng của Mai đến đông đủ.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '叔叔、大哥、大妈、大爷都来了，还有小宝宝。',
        pinyin: 'Shūshu, dàgē, dàmā, dàye dōu lái le, hái yǒu xiǎo bǎobao.',
        meaning: 'Chú, anh cả, bác gái, bác trai đều đến, còn có em bé nữa.',
        expression: 'happy', vocab: ['叔叔', '大哥', '大妈', '大爷', '宝宝'] },
      { type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '妈妈烧了一桌菜，你尝尝。',
        pinyin: 'Māma shāo le yì zhuō cài, nǐ chángchang.',
        meaning: 'Mẹ nấu cả mâm cơm, con nếm thử đi.',
        expression: 'happy', vocab: ['烧', '尝'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '这道菜有点辣，那道有点咸，可能加多了盐。',
        pinyin: 'Zhè dào cài yǒudiǎn là, nà dào yǒudiǎn xián, kěnéng jiā duō le yán.',
        meaning: 'Món này hơi cay, món kia hơi mặn, chắc cho nhiều muối quá.',
        expression: 'curious', vocab: ['辣', '咸', '盐'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '这个汤有点苦，那个有点酸，味道很丰富。叔叔说他在海边游泳，海水很咸。',
        pinyin: 'Zhège tāng yǒudiǎn kǔ, nàge yǒudiǎn suān, wèidào hěn fēngfù. Shūshu shuō tā zài hǎibiān yóuyǒng, hǎishuǐ hěn xián.',
        meaning: 'Canh này hơi đắng, món kia hơi chua, vị rất phong phú. Chú nói chú bơi ở biển, nước biển rất mặn.',
        expression: 'happy', vocab: ['苦', '酸', '海水'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '我对做菜很有兴趣，还想学编中国结。',
        pinyin: 'Wǒ duì zuò cài hěn yǒu xìngqù, hái xiǎng xué biān Zhōngguó jié.',
        meaning: 'Con rất thích nấu ăn, còn muốn học thắt nút Trung Hoa.',
        expression: 'happy', vocab: ['兴趣', '编'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '路上堵车，我晚点到，给你带了茶叶和饼干。',
        pinyin: 'Lùshang dǔchē, wǒ wǎndiǎn dào, gěi nǐ dài le cháyè hé bǐnggān.',
        meaning: 'Đường kẹt xe, tớ đến trễ, mang cho cậu lá trà và bánh quy.',
        expression: 'happy', vocab: ['堵车', '茶叶', '饼干'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'shop',
        scene: '📍 Chợ',
        expression: 'curious',
        q: 'Ở chợ, Mai thấy món đồ đang giảm. Diễn đạt "Món này đang giảm giá, là giá ưu đãi" sao cho đúng?',
        options: [
          { text: '这个在降价，是特价。', pinyin: 'Zhège zài jiàngjià, shì tèjià.', meaning: 'Món này đang giảm giá, là giá ưu đãi.', correct: true,
            feedback: 'Đúng! 降价 = giảm giá; 特价 = giá ưu đãi.' },
          { text: '这个在高价，是特价。', pinyin: 'Zhège zài gāojià, shì tèjià.', meaning: '(mâu thuẫn)', correct: false,
            feedback: '高价 = giá cao, mâu thuẫn với "ưu đãi".' },
          { text: '这个在降价，是高价。', pinyin: 'Zhège zài jiàngjià, shì gāojià.', meaning: '(mâu thuẫn)', correct: false,
            feedback: '高价 = giá cao, không phải "ưu đãi".' }
        ], vocab: ['降价', '特价', '高价'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我们点了一个套餐，很划算。最近我胖了，要注意体重。',
        pinyin: 'Wǒmen diǎn le yí ge tàocān, hěn huásuàn. Zuìjìn wǒ pàng le, yào zhùyì tǐzhòng.',
        meaning: 'Bọn tớ gọi một suất combo, rất hời. Dạo này tớ mập lên, phải để ý cân nặng.',
        expression: 'happy', vocab: ['套餐', '体重'] },
      { type: 'checkpoint', questions: [
        { q: '“尝一尝” nghĩa là?', options: ['Nếm thử', 'Nấu', 'Giảm giá', 'Tắc đường'], answer: 0 },
        { q: 'Cho nhiều muối, món ăn sẽ thành?', options: ['咸 (mặn)', '甜 (ngọt)', '苦 (đắng)', '酸 (chua)'], answer: 0 },
        { q: '“特价” chỉ điều gì?', options: ['Giá ưu đãi', 'Giá cao', 'Cân nặng', 'Sở thích'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '饼干', p: 'bǐng gān', v: 'bánh quy', e: 'biscuit' },
      { h: '尝', p: 'cháng', v: 'nếm, thử', e: 'to taste' },
      { h: '堵车', p: 'dǔ chē', v: 'tắc đường, kẹt xe', e: 'traffic jam' },
      { h: '苦', p: 'kǔ', v: 'đắng; khổ', e: 'bitter' },
      { h: '辣', p: 'là', v: 'cay', e: 'spicy, hot, pungent' },
      { h: '酸', p: 'suān', v: 'chua', e: 'sour' },
      { h: '咸', p: 'xián', v: 'mặn', e: 'salty' },
      { h: '盐', p: 'yán', v: 'muối', e: 'salt' },
      { h: '宝宝', p: 'bǎo bao', v: 'em bé, cục cưng', e: 'pet, sonny, darling baby, precious baby, baby, precious, poppet, sweetie, precious/darling baby' },
      { h: '编', p: 'biān', v: 'biên soạn, đan, thắt', e: 'group, arrangement, arrange, invent, entwine, weave, organize, edit, compilation, write, invention, ' },
      { h: '茶叶', p: 'chá yè', v: 'lá trà, trà', e: 'tea, tea leaf, tea leaves' },
      { h: '大哥', p: 'dà gē', v: 'anh cả', e: 'eldest brother, elder brother, gang leader' },
      { h: '大妈', p: 'dà mā', v: 'bác gái', e: 'father\'s elder brother\'s wife, aunt (affectionate term for an elderly woman)' },
      { h: '大爷', p: 'dà ye', v: 'bác trai, ông', e: 'arrogant idler, self-centered show-off, (coll.) father\'s older brother, uncle, term of respect for o' },
      { h: '高价', p: 'gāo jià', v: 'giá cao', e: 'high price' },
      { h: '海水', p: 'hǎi shuǐ', v: 'nước biển', e: 'waters, seawater, salt water, sea, the sea, brine' },
      { h: '降价', p: 'jiàng jià', v: 'giảm giá', e: 'lower prices' },
      { h: '烧', p: 'shāo', v: 'đốt, nướng, nấu', e: 'oven broil, roast, burn, broil, run a fever, baking, stew ... in soy sauce, cook, heat, bake, burnin' },
      { h: '叔叔', p: 'shū shu', v: 'chú', e: 'father\'s younger brother, uncle, uncle (child\'s address for young males)' },
      { h: '套餐', p: 'tào cān', v: 'suất ăn, combo', e: 'set meal, product or service package (e.g. for a cell phone subscription)' },
      { h: '特价', p: 'tè jià', v: 'giá ưu đãi', e: 'special price' },
      { h: '体重', p: 'tǐ zhòng', v: 'cân nặng', e: 'body weight, beef, (body) weight, avoirdupois, weight' },
      { h: '兴趣', p: 'xìng qù', v: 'hứng thú, sở thích', e: 'relish, appetite, zestfulness, dish, cup of tea, pastime, hobby, interest, gusto, bag, avocation, ze' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '妈妈做好了菜，你___一下。', options: ['尝', '烧', '编'], answer: '尝' },
        { type: 'fill', sentence: '加多了___，菜太咸了。', options: ['盐', '茶叶', '饼干'], answer: '盐' },
        { type: 'fill', sentence: '这道菜太___了，我受不了。', options: ['辣', '尝', '编'], answer: '辣' },
        { type: 'fill', sentence: '我对做菜很有___。', options: ['兴趣', '体重', '套餐'], answer: '兴趣' },
        { type: 'fill', sentence: '路上___，我迟到了。', options: ['堵车', '降价', '尝'], answer: '堵车' }
      ],
      normal: [
        { type: 'fill', sentence: '妈妈___了一桌菜。', options: ['烧', '尝', '编'], answer: '烧' },
        { type: 'fill', sentence: '柠檬味道很___。', options: ['酸', '咸', '苦'], answer: '酸' },
        { type: 'fill', sentence: '我们点了一个___，很划算。', options: ['套餐', '茶叶', '体重'], answer: '套餐' },
        { type: 'fill', sentence: '最近我胖了，要注意___。', options: ['体重', '兴趣', '套餐'], answer: '体重' },
        { type: 'order', words: ['妈妈', '烧', '了', '一', '桌', '菜'], answer: '妈妈烧了一桌菜' },
        { type: 'order', words: ['这个', '在', '降价', '是', '特价'], answer: '这个在降价是特价' },
        { type: 'fill', sentence: '她给我带了___和饼干。', options: ['茶叶', '盐', '海水'], answer: '茶叶' }
      ],
      hard: [
        { type: 'fill', sentence: '这个在___，比平时便宜。', options: ['降价', '高价', '体重'], answer: '降价' },
        { type: 'fill', sentence: '海边游泳，___很咸。', options: ['海水', '茶叶', '套餐'], answer: '海水' },
        { type: 'translate', prompt: 'Mẹ nấu cả mâm cơm, con nếm thử đi.', answer: '妈妈烧了一桌菜，你尝尝。' },
        { type: 'translate', prompt: 'Món này hơi cay, món kia hơi mặn.', answer: '这道菜有点辣，那道有点咸。' },
        { type: 'translate', prompt: 'Tôi rất thích nấu ăn.', answer: '我对做菜很有兴趣。' },
        { type: 'fill', sentence: '叔叔、___、大妈都来了。', options: ['大哥', '海水', '套餐'], answer: '大哥' }
      ]
    }
  }

});

// ───────────────────────────────────────────────────────
// BATCH 6 — Bài 144-148 (Thời gian · Cảm xúc · Học thuật · Gia đình · Công việc)
// ───────────────────────────────────────────────────────
Object.assign(COURSE_DATA, {

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 144: Thời gian & lịch trình — 21 từ
  // ─────────────────────────────────────────────────────────────────────────
  144: {
    id: 144,
    level: 4,
    title: 'Thời gian & lịch trình',
    context: 'Kỳ nghỉ hè đến, Mai lên kế hoạch cho thời gian sắp tới: tích lũy kinh nghiệm, học thêm và cân nhắc nghề phiên dịch trong tương lai.',
    vocabPreview: ['暑假', '积累', '季节', '翻译', '暂时'],
    objectives: [
      "Nắm nhóm từ khóa: 暑假 · 积累 · 季节 · 翻译 · 暂时",
      "Nghe hiểu và kể lại tình huống Thời gian & lịch trình bằng câu HSK 4",
      "Phân biệt cách dùng 暑假 · 积累 · 季节",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "暑假 — kỳ nghỉ hè",
        explain: "Dùng 暑假 trong ngữ cảnh Thời gian & lịch trình để diễn đạt: kỳ nghỉ hè.",
        examples: [
          { zh: "放暑假了！我想趁暑假积累经验。", py: "Fàng shǔjià le! Wǒ xiǎng chèn shǔjià jīlěi jīngyàn.", vi: "Nghỉ hè rồi! Con muốn nhân kỳ nghỉ hè tích lũy kinh nghiệm." }
        ] },
      { point: "积累 — tích lũy",
        explain: "Dùng 积累 trong ngữ cảnh Thời gian & lịch trình để diễn đạt: tích lũy.",
        examples: [
          { zh: "放暑假了！我想趁暑假积累经验。", py: "Fàng shǔjià le! Wǒ xiǎng chèn shǔjià jīlěi jīngyàn.", vi: "Nghỉ hè rồi! Con muốn nhân kỳ nghỉ hè tích lũy kinh nghiệm." }
        ] },
      { point: "季节 — mùa",
        explain: "Dùng 季节 trong ngữ cảnh Thời gian & lịch trình để diễn đạt: mùa.",
        examples: [
          { zh: "一年四个季节，我最喜欢春季和秋季。夏季太热，冬季太冷。", py: "Yì nián sì ge jìjié, wǒ zuì xǐhuan chūnjì hé qiūjì. Xiàjì tài rè, dōngjì tài lěng.", vi: "Một năm bốn mùa, tớ thích nhất mùa xuân và mùa thu. Mùa hè quá nóng, mùa đông quá lạnh." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Nhà Mai · Sáng', bg: 'home',
        cast: ['mai', 'mama'],
        text: 'Kỳ nghỉ hè đến, Mai lên kế hoạch cho thời gian sắp tới.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '放暑假了！我想趁暑假积累经验。',
        pinyin: 'Fàng shǔjià le! Wǒ xiǎng chèn shǔjià jīlěi jīngyàn.',
        meaning: 'Nghỉ hè rồi! Con muốn nhân kỳ nghỉ hè tích lũy kinh nghiệm.',
        expression: 'happy', vocab: ['放暑假', '暑假', '积累'] },
      { type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '寒假和暑假都别忘了回家。你下个月走还是上个月就定了？',
        pinyin: 'Hánjià hé shǔjià dōu bié wàng le huí jiā. Nǐ xià ge yuè zǒu háishì shàng ge yuè jiù dìng le?',
        meaning: 'Nghỉ đông và nghỉ hè đều đừng quên về nhà. Con đi tháng sau hay tháng trước đã định rồi?',
        expression: 'curious', vocab: ['寒假', '下个月', '上个月'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '上个月我刚结束实习，这个月底再决定，别迟到误了报名。',
        pinyin: 'Shàng ge yuè wǒ gāng jiéshù shíxí, zhège yuèdǐ zài juédìng, bié chídào wù le bàomíng.',
        meaning: 'Tháng trước con vừa xong thực tập, cuối tháng này quyết định, đừng trễ lỡ mất đăng ký.',
        expression: 'focused', vocab: ['月底', '迟到'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '一年四个季节，我最喜欢春季和秋季。夏季太热，冬季太冷。',
        pinyin: 'Yì nián sì ge jìjié, wǒ zuì xǐhuan chūnjì hé qiūjì. Xiàjì tài rè, dōngjì tài lěng.',
        meaning: 'Một năm bốn mùa, tớ thích nhất mùa xuân và mùa thu. Mùa hè quá nóng, mùa đông quá lạnh.',
        expression: 'happy', vocab: ['季节', '季', '春季', '秋季', '夏季', '冬季'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我学了多年中文，想做翻译，每周加几个学时。',
        pinyin: 'Wǒ xué le duō nián Zhōngwén, xiǎng zuò fānyì, měi zhōu jiā jǐ ge xuéshí.',
        meaning: 'Tớ học tiếng Trung nhiều năm rồi, muốn làm phiên dịch, mỗi tuần thêm vài tiết học.',
        expression: 'focused', vocab: ['多年', '翻译', '学时'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'home',
        scene: '📍 Nhà Mai',
        expression: 'curious',
        q: 'Bạn hỏi Mai đã quyết chưa. Diễn đạt "Tôi tạm thời chưa quyết định" sao cho đúng?',
        options: [
          { text: '我暂时还没决定。', pinyin: 'Wǒ zànshí hái méi juédìng.', meaning: 'Tôi tạm thời chưa quyết định.', correct: true,
            feedback: 'Đúng! 暂时 = tạm thời.' },
          { text: '我年龄还没决定。', pinyin: 'Wǒ niánlíng hái méi juédìng.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '年龄 = tuổi tác, không hợp.' },
          { text: '我呀还没决定。', pinyin: 'Wǒ ya hái méi juédìng.', meaning: '(thiếu nghĩa)', correct: false,
            feedback: '呀 = tiểu từ ngữ khí, không mang nghĩa "tạm thời".' }
        ], vocab: ['暂时', '年龄', '呀'] },
      { type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '不管你多大年龄，都是我的孩子。来，妈妈给你买了巧克力。哎呀，时间过得真快！',
        pinyin: 'Bùguǎn nǐ duō dà niánlíng, dōu shì wǒ de háizi. Lái, māma gěi nǐ mǎi le qiǎokèlì. Āiyā, shíjiān guò de zhēn kuài!',
        meaning: 'Bất kể con bao nhiêu tuổi, vẫn là con của mẹ. Lại đây, mẹ mua sô-cô-la cho con. Ôi chao, thời gian trôi nhanh thật!',
        expression: 'happy', vocab: ['年龄', '巧克力', '呀'] },
      { type: 'checkpoint', questions: [
        { q: '“暑假” nghĩa là?', options: ['Nghỉ hè', 'Nghỉ đông', 'Mùa xuân', 'Cuối tháng'], answer: 0 },
        { q: '“迟到” chỉ điều gì?', options: ['Đến muộn', 'Về sớm', 'Đúng giờ', 'Nghỉ học'], answer: 0 },
        { q: '“我暂时还没决定” — “暂时” nghĩa là?', options: ['Tạm thời', 'Vĩnh viễn', 'Lập tức', 'Nhiều năm'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '翻译', p: 'fān yì', v: 'phiên dịch, dịch thuật', e: 'to translate' },
      { h: '放暑假', p: 'fàng shǔ jià', v: 'nghỉ hè', e: 'to be on summer vacation' },
      { h: '寒假', p: 'hán jià', v: 'kỳ nghỉ đông', e: 'winter vacation' },
      { h: '积累', p: 'jī lěi', v: 'tích lũy', e: 'to accumulate' },
      { h: '年龄', p: 'nián líng', v: 'tuổi, độ tuổi', e: 'age' },
      { h: '巧克力', p: 'qiǎo kè lì', v: 'sô-cô-la', e: 'chocolate (loanword)' },
      { h: '呀', p: 'ya', v: 'à, ôi (tiểu từ ngữ khí)', e: '(softening particle, variant of 啊)' },
      { h: '暂时', p: 'zàn shí', v: 'tạm thời', e: 'temporary' },
      { h: '迟到', p: 'chí dào', v: 'đến muộn, trễ giờ', e: 'tardy, be late, arrive late, be/come/arrive late, come, late, come/arrive late, be' },
      { h: '春季', p: 'chūn jì', v: 'mùa xuân', e: 'springtime' },
      { h: '冬季', p: 'dōng jì', v: 'mùa đông', e: 'winter' },
      { h: '多年', p: 'duō nián', v: 'nhiều năm', e: 'for many years' },
      { h: '季', p: 'jì', v: 'mùa, quý', e: 'season, quarter (of year)' },
      { h: '季节', p: 'jì jié', v: 'mùa, mùa vụ', e: 'season' },
      { h: '秋季', p: 'qiū jì', v: 'mùa thu', e: 'autumn, fall' },
      { h: '上个月', p: 'shàng ge yuè', v: 'tháng trước', e: 'last month' },
      { h: '暑假', p: 'shǔ jià', v: 'kỳ nghỉ hè', e: 'summer vacation, CL:個|个[ge4]' },
      { h: '下个月', p: 'xià ge yuè', v: 'tháng sau', e: 'next month' },
      { h: '夏季', p: 'xià jì', v: 'mùa hè', e: 'summer' },
      { h: '学时', p: 'xué shí', v: 'tiết học, giờ học', e: 'class hour, period' },
      { h: '月底', p: 'yuè dǐ', v: 'cuối tháng', e: 'end of the month' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '___了，我们不用上课。', options: ['放暑假', '迟到', '翻译'], answer: '放暑假' },
        { type: 'fill', sentence: '我想趁假期___经验。', options: ['积累', '迟到', '翻译'], answer: '积累' },
        { type: 'fill', sentence: '我最喜欢的___是春天。', options: ['季节', '年龄', '学时'], answer: '季节' },
        { type: 'fill', sentence: '上课别___。', options: ['迟到', '积累', '翻译'], answer: '迟到' },
        { type: 'fill', sentence: '妈妈给我买了___。', options: ['巧克力', '暑假', '年龄'], answer: '巧克力' }
      ],
      normal: [
        { type: 'fill', sentence: '我想做___，把中文翻成越南语。', options: ['翻译', '积累', '迟到'], answer: '翻译' },
        { type: 'fill', sentence: '夏季太热，___太冷。', options: ['冬季', '春季', '秋季'], answer: '冬季' },
        { type: 'fill', sentence: '___我刚结束实习。', options: ['上个月', '下个月', '月底'], answer: '上个月' },
        { type: 'fill', sentence: '我学了___中文了。', options: ['多年', '暂时', '季节'], answer: '多年' },
        { type: 'order', words: ['我', '想', '趁', '暑假', '积累', '经验'], answer: '我想趁暑假积累经验' },
        { type: 'order', words: ['一', '年', '有', '四', '个', '季节'], answer: '一年有四个季节' },
        { type: 'fill', sentence: '这个___我再做决定。', options: ['月底', '学时', '巧克力'], answer: '月底' }
      ],
      hard: [
        { type: 'fill', sentence: '我___还没决定。', options: ['暂时', '年龄', '多年'], answer: '暂时' },
        { type: 'fill', sentence: '不管你多大___，都是我的孩子。', options: ['年龄', '季节', '学时'], answer: '年龄' },
        { type: 'translate', prompt: 'Nghỉ hè rồi, tôi muốn tích lũy kinh nghiệm.', answer: '放暑假了，我想积累经验。' },
        { type: 'translate', prompt: 'Tôi học tiếng Trung nhiều năm, muốn làm phiên dịch.', answer: '我学了多年中文，想做翻译。' },
        { type: 'translate', prompt: 'Một năm bốn mùa, tôi thích nhất mùa xuân và mùa thu.', answer: '一年四个季节，我最喜欢春季和秋季。' },
        { type: 'fill', sentence: '每周我加几个___学中文。', options: ['学时', '月底', '巧克力'], answer: '学时' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 145: Cảm xúc & suy nghĩ — 16 từ
  // ─────────────────────────────────────────────────────────────────────────
  145: {
    id: 145,
    level: 4,
    title: 'Cảm xúc & suy nghĩ',
    context: 'Mai chia sẻ cảm xúc ngổn ngang sau kỳ thực tập, và làm hòa với Tiểu Mỹ sau một hiểu lầm nhỏ. Mẹ khuyên em bình tĩnh suy nghĩ trước khi quyết định.',
    vocabPreview: ['兴奋', '冷静', '误会', '考虑', '担心'],
    objectives: [
      "Nắm nhóm từ khóa: 兴奋 · 冷静 · 误会 · 考虑 · 担心",
      "Nghe hiểu và kể lại tình huống Cảm xúc & suy nghĩ bằng câu HSK 4",
      "Phân biệt cách dùng 兴奋 · 冷静 · 误会",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "兴奋 — hứng khởi",
        explain: "Dùng 兴奋 trong ngữ cảnh Cảm xúc & suy nghĩ để diễn đạt: hứng khởi.",
        examples: [
          { zh: "实习结束我很兴奋，但也有点烦恼，不知道下一步怎么走。", py: "Shíxí jiéshù wǒ hěn xīngfèn, dàn yě yǒudiǎn fánnǎo, bù zhīdào xià yí bù zěnme zǒu.", vi: "Xong thực tập con rất phấn khích, nhưng cũng hơi phiền lòng, không biết bước tiếp theo thế nào." }
        ] },
      { point: "冷静 — bình tĩnh",
        explain: "Dùng 冷静 trong ngữ cảnh Cảm xúc & suy nghĩ để diễn đạt: bình tĩnh.",
        examples: [
          { zh: "别着急，也别担心，冷静考虑一下。", py: "Bié zháojí, yě bié dānxīn, lěngjìng kǎolǜ yíxià.", vi: "Đừng sốt ruột, cũng đừng lo, bình tĩnh suy nghĩ một chút." }
        ] },
      { point: "误会 — hiểu lầm",
        explain: "Dùng 误会 trong ngữ cảnh Cảm xúc & suy nghĩ để diễn đạt: hiểu lầm.",
        examples: [
          { zh: "我有点害羞，怕做不好。之前和小美有个误会，我很后悔。", py: "Wǒ yǒudiǎn hàixiū, pà zuò bù hǎo. Zhīqián hé Xiǎoměi yǒu ge wùhuì, wǒ hěn hòuhuǐ.", vi: "Con hơi ngại, sợ làm không tốt. Trước đó với Tiểu Mỹ có hiểu lầm, con rất hối hận." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Nhà Mai · Tối', bg: 'home',
        cast: ['mai', 'mama'],
        text: 'Sau kỳ thực tập, Mai có nhiều cảm xúc ngổn ngang.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '实习结束我很兴奋，但也有点烦恼，不知道下一步怎么走。',
        pinyin: 'Shíxí jiéshù wǒ hěn xīngfèn, dàn yě yǒudiǎn fánnǎo, bù zhīdào xià yí bù zěnme zǒu.',
        meaning: 'Xong thực tập con rất phấn khích, nhưng cũng hơi phiền lòng, không biết bước tiếp theo thế nào.',
        expression: 'curious', vocab: ['兴奋', '烦恼'] },
      { type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '别着急，也别担心，冷静考虑一下。',
        pinyin: 'Bié zháojí, yě bié dānxīn, lěngjìng kǎolǜ yíxià.',
        meaning: 'Đừng sốt ruột, cũng đừng lo, bình tĩnh suy nghĩ một chút.',
        expression: 'happy', vocab: ['着急', '担心', '冷静', '考虑'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '我有点害羞，怕做不好。之前和小美有个误会，我很后悔。',
        pinyin: 'Wǒ yǒudiǎn hàixiū, pà zuò bù hǎo. Zhīqián hé Xiǎoměi yǒu ge wùhuì, wǒ hěn hòuhuǐ.',
        meaning: 'Con hơi ngại, sợ làm không tốt. Trước đó với Tiểu Mỹ có hiểu lầm, con rất hối hận.',
        expression: 'sad', vocab: ['害羞', '误会', '后悔'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '别怀疑自己，我没生气，是我误会你了。',
        pinyin: 'Bié huáiyí zìjǐ, wǒ méi shēngqì, shì wǒ wùhuì nǐ le.',
        meaning: 'Đừng nghi ngờ bản thân, tớ không giận, là tớ hiểu lầm cậu.',
        expression: 'happy', vocab: ['怀疑'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '太好了，我心里安了。假期没事做有点无聊，我喜爱看书和画画。',
        pinyin: 'Tài hǎo le, wǒ xīnlǐ ān le. Jiàqī méishì zuò yǒudiǎn wúliáo, wǒ xǐ\'ài kàn shū hé huà huà.',
        meaning: 'Tốt quá, lòng tớ an rồi. Kỳ nghỉ rảnh rỗi hơi chán, tớ thích đọc sách và vẽ.',
        expression: 'happy', vocab: ['安', '无聊', '喜爱'] },
      { type: 'choice', speaker: 'mai', cast: ['mai'], bg: 'home',
        scene: '📍 Nhà Mai',
        expression: 'happy',
        q: 'Mai vừa đỗ một kỳ thi và rất tự hào. Diễn đạt "Tôi vừa đỗ kỳ thi, hơi đắc ý" sao cho đúng?',
        options: [
          { text: '我刚通过考试，有点得意。', pinyin: 'Wǒ gāng tōngguò kǎoshì, yǒudiǎn déyì.', meaning: 'Tôi vừa đỗ kỳ thi, hơi đắc ý.', correct: true,
            feedback: 'Đúng! 得意 = đắc ý, tự mãn (vui vì thành công).' },
          { text: '我刚通过考试，有点爱国。', pinyin: 'Wǒ gāng tōngguò kǎoshì, yǒudiǎn àiguó.', meaning: '(không hợp ngữ cảnh)', correct: false,
            feedback: '爱国 = yêu nước, không hợp ở đây.' },
          { text: '我刚通过考试，有点定。', pinyin: 'Wǒ gāng tōngguò kǎoshì, yǒudiǎn dìng.', meaning: '(không phải cảm xúc)', correct: false,
            feedback: '定 = quyết định/cố định, không phải cảm xúc.' }
        ], vocab: ['得意', '爱国', '定'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '昨天看了爱国电影，我很感动。我决定了，定下计划就去做。',
        pinyin: 'Zuótiān kàn le àiguó diànyǐng, wǒ hěn gǎndòng. Wǒ juédìng le, dìng xià jìhuà jiù qù zuò.',
        meaning: 'Hôm qua xem phim yêu nước, tôi rất xúc động. Tôi quyết rồi, lập kế hoạch xong là làm.',
        expression: 'focused', vocab: ['爱国', '定'] },
      { type: 'checkpoint', questions: [
        { q: '“着急” nghĩa là?', options: ['Sốt ruột, lo lắng', 'Bình tĩnh', 'Vui vẻ', 'Xấu hổ'], answer: 0 },
        { q: '“误会” chỉ điều gì?', options: ['Hiểu lầm', 'Tha thứ', 'Nghi ngờ', 'Hối hận'], answer: 0 },
        { q: '“冷静考虑一下” — “冷静” nghĩa là?', options: ['Bình tĩnh', 'Phấn khích', 'Chán nản', 'Đắc ý'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '得意', p: 'dé yì', v: 'đắc ý, tự hào', e: 'proud of oneself' },
      { h: '烦恼', p: 'fán nǎo', v: 'phiền não, lo lắng', e: 'to be worried' },
      { h: '害羞', p: 'hài xiū', v: 'xấu hổ, ngại ngùng', e: 'shy' },
      { h: '后悔', p: 'hòu huǐ', v: 'hối hận', e: 'to regret' },
      { h: '冷静', p: 'lěng jìng', v: 'bình tĩnh', e: 'calm' },
      { h: '无聊', p: 'wú liáo', v: 'buồn chán, vô vị', e: 'bored' },
      { h: '兴奋', p: 'xīng fèn', v: 'hứng khởi, phấn khích', e: 'excited' },
      { h: '爱国', p: 'ài guó', v: 'yêu nước', e: 'love one\'s country, patriotic' },
      { h: '安', p: 'ān', v: 'an, yên, bình an', e: 'peaceful, content, calm, to install' },
      { h: '担心', p: 'dān xīn', v: 'lo lắng', e: 'worry, feel anxious' },
      { h: '喜爱', p: 'xǐ ài', v: 'yêu thích, ưa thích', e: 'like, love, be fond of' },
      { h: '着急', p: 'zháo jí', v: 'sốt ruột, lo lắng', e: 'worry, feel anxious' },
      { h: '怀疑', p: 'huái yí', v: 'nghi ngờ', e: 'to doubt (sth)' },
      { h: '考虑', p: 'kǎo lǜ', v: 'suy nghĩ, cân nhắc', e: 'to think over' },
      { h: '误会', p: 'wù huì', v: 'hiểu lầm', e: 'to misunderstand' },
      { h: '定', p: 'dìng', v: 'quyết định, đặt, cố định', e: 'decide' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '比赛要开始了，我很___。', options: ['兴奋', '无聊', '后悔'], answer: '兴奋' },
        { type: 'fill', sentence: '别___，慢慢来。', options: ['着急', '喜爱', '考虑'], answer: '着急' },
        { type: 'fill', sentence: '妈妈很___我的健康。', options: ['担心', '得意', '害羞'], answer: '担心' },
        { type: 'fill', sentence: '假期没事，有点___。', options: ['无聊', '冷静', '兴奋'], answer: '无聊' },
        { type: 'fill', sentence: '我___看书和画画。', options: ['喜爱', '担心', '怀疑'], answer: '喜爱' }
      ],
      normal: [
        { type: 'fill', sentence: '遇事要___，别冲动。', options: ['冷静', '兴奋', '害羞'], answer: '冷静' },
        { type: 'fill', sentence: '做决定前要好好___。', options: ['考虑', '担心', '后悔'], answer: '考虑' },
        { type: 'fill', sentence: '我们之间有个___，现在解开了。', options: ['误会', '兴奋', '喜爱'], answer: '误会' },
        { type: 'fill', sentence: '说错话了，我很___。', options: ['后悔', '得意', '安'], answer: '后悔' },
        { type: 'order', words: ['别', '着急', '冷静', '考虑', '一下'], answer: '别着急冷静考虑一下' },
        { type: 'order', words: ['是', '我', '误会', '你', '了'], answer: '是我误会你了' },
        { type: 'fill', sentence: '在台上说话，我有点___。', options: ['害羞', '兴奋', '冷静'], answer: '害羞' }
      ],
      hard: [
        { type: 'fill', sentence: '我刚通过考试，有点___。', options: ['得意', '爱国', '定'], answer: '得意' },
        { type: 'fill', sentence: '别___自己的能力。', options: ['怀疑', '喜爱', '安'], answer: '怀疑' },
        { type: 'translate', prompt: 'Đừng sốt ruột, cũng đừng lo, bình tĩnh suy nghĩ một chút.', answer: '别着急，也别担心，冷静考虑一下。' },
        { type: 'translate', prompt: 'Trước đó với Tiểu Mỹ có hiểu lầm, tôi rất hối hận.', answer: '之前和小美有个误会，我很后悔。' },
        { type: 'translate', prompt: 'Tôi quyết rồi, lập kế hoạch xong là làm.', answer: '我决定了，定下计划就去做。' },
        { type: 'fill', sentence: '问题解决了，我心里___了。', options: ['安', '烦恼', '着急'], answer: '安' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 146: Học thuật & ngôn ngữ — 16 từ
  // ─────────────────────────────────────────────────────────────────────────
  146: {
    id: 146,
    level: 4,
    title: 'Học thuật & ngôn ngữ',
    context: 'Mai cân nhắc học lên cao học. Thầy Lý khen tiếng Trung của em tiến bộ, và khuyên em chăm nghiên cứu, tích lũy tín chỉ cho năm học mới.',
    vocabPreview: ['研究生', '硕士', '语法', '研究', '渐渐'],
    objectives: [
      "Nắm nhóm từ khóa: 研究生 · 硕士 · 语法 · 研究 · 渐渐",
      "Nghe hiểu và kể lại tình huống Học thuật & ngôn ngữ bằng câu HSK 4",
      "Phân biệt cách dùng 研究生 · 硕士 · 语法",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "研究生 — học viên cao học",
        explain: "Dùng 研究生 trong ngữ cảnh Học thuật & ngôn ngữ để diễn đạt: học viên cao học.",
        examples: [
          { zh: "一位教授说你适合读研究生，将来可以考硕士。", py: "Yí wèi jiàoshòu shuō nǐ shìhé dú yánjiūshēng, jiānglái kěyǐ kǎo shuòshì.", vi: "Một giáo sư nói em hợp học cao học, sau này có thể thi thạc sĩ." }
        ] },
      { point: "硕士 — thạc sĩ",
        explain: "Dùng 硕士 trong ngữ cảnh Học thuật & ngôn ngữ để diễn đạt: thạc sĩ.",
        examples: [
          { zh: "一位教授说你适合读研究生，将来可以考硕士。", py: "Yí wèi jiàoshòu shuō nǐ shìhé dú yánjiūshēng, jiānglái kěyǐ kǎo shuòshì.", vi: "Một giáo sư nói em hợp học cao học, sau này có thể thi thạc sĩ." }
        ] },
      { point: "语法 — ngữ pháp",
        explain: "Dùng 语法 trong ngữ cảnh Học thuật & ngôn ngữ để diễn đạt: ngữ pháp.",
        examples: [
          { zh: "作为毕业生，你的语法和口语都进步了。", py: "Zuòwéi bìyèshēng, nǐ de yǔfǎ hé kǒuyǔ dōu jìnbù le.", vi: "Là một sinh viên tốt nghiệp, ngữ pháp và khẩu ngữ của em đều tiến bộ." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Thư viện · Chiều', bg: 'library',
        cast: ['mai', 'laoli'],
        text: 'Mai cân nhắc việc học lên cao học.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '一位教授说你适合读研究生，将来可以考硕士。',
        pinyin: 'Yí wèi jiàoshòu shuō nǐ shìhé dú yánjiūshēng, jiānglái kěyǐ kǎo shuòshì.',
        meaning: 'Một giáo sư nói em hợp học cao học, sau này có thể thi thạc sĩ.',
        expression: 'happy', vocab: ['教授', '研究生', '硕士'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '作为毕业生，你的语法和口语都进步了。',
        pinyin: 'Zuòwéi bìyèshēng, nǐ de yǔfǎ hé kǒuyǔ dōu jìnbù le.',
        meaning: 'Là một sinh viên tốt nghiệp, ngữ pháp và khẩu ngữ của em đều tiến bộ.',
        expression: 'happy', vocab: ['毕业生', '语法', '口语'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '谢谢老师。我每天练语音，水平渐渐提高。',
        pinyin: 'Xièxie lǎoshī. Wǒ měitiān liàn yǔyīn, shuǐpíng jiànjiàn tígāo.',
        meaning: 'Cảm ơn thầy. Em luyện phát âm mỗi ngày, trình độ dần dần nâng lên.',
        expression: 'happy', vocab: ['语音', '渐渐'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '研究是个好方法，多读书，修满学分。这个学年你想多修几门课吗？',
        pinyin: 'Yánjiū shì ge hǎo fāngfǎ, duō dú shū, xiū mǎn xuéfēn. Zhège xuénián nǐ xiǎng duō xiū jǐ mén kè ma?',
        meaning: 'Nghiên cứu là một cách hay, đọc nhiều sách, tích đủ tín chỉ. Năm học này em muốn học thêm vài môn không?',
        expression: 'focused', vocab: ['研究', '法', '学分', '学年'] },
      { type: 'choice', speaker: 'mai', cast: ['mai'], bg: 'library',
        scene: '📍 Thư viện',
        expression: 'happy',
        q: 'Mai muốn nói "Bài viết của tôi được đăng lên báo". Câu nào đúng?',
        options: [
          { text: '我的文章登在报纸上了。', pinyin: 'Wǒ de wénzhāng dēng zài bàozhǐ shàng le.', meaning: 'Bài viết của tôi được đăng lên báo.', correct: true,
            feedback: 'Đúng! 登 = đăng (báo).' },
          { text: '我的文章刷在报纸上了。', pinyin: 'Wǒ de wénzhāng shuā zài bàozhǐ shàng le.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '刷 = chải/quét, không dùng cho "đăng báo".' },
          { text: '我的文章大众在报纸上了。', pinyin: 'Wǒ de wénzhāng dàzhòng zài bàozhǐ shàng le.', meaning: '(sai từ loại)', correct: false,
            feedback: '大众 = đại chúng (danh từ), không phải động từ.' }
        ], vocab: ['登', '刷', '大众'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '我刷了一遍课文。比赛的比分出来了，我们赢了，这是大众都关心的事。',
        pinyin: 'Wǒ shuā le yí biàn kèwén. Bǐsài de bǐfēn chūlái le, wǒmen yíng le, zhè shì dàzhòng dōu guānxīn de shì.',
        meaning: 'Tôi lướt lại bài khóa một lượt. Tỉ số trận đấu có rồi, chúng tôi thắng, đây là chuyện mà đại chúng đều quan tâm.',
        expression: 'happy', vocab: ['刷', '比分', '大众'] },
      { type: 'checkpoint', questions: [
        { q: '“研究生” chỉ ai?', options: ['Học viên sau đại học', 'Giáo sư', 'Sinh viên năm nhất', 'Học sinh cấp 3'], answer: 0 },
        { q: '“语法” nghĩa là?', options: ['Ngữ pháp', 'Phát âm', 'Từ vựng', 'Khẩu ngữ'], answer: 0 },
        { q: '“水平渐渐提高” — “渐渐” nghĩa là?', options: ['Dần dần', 'Đột ngột', 'Lập tức', 'Mãi mãi'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '教授', p: 'jiào shòu', v: 'giáo sư', e: 'professor' },
      { h: '硕士', p: 'shuò shì', v: 'thạc sĩ', e: 'master\'s degree' },
      { h: '研究生', p: 'yán jiū shēng', v: 'học viên cao học', e: 'graduate student' },
      { h: '比分', p: 'bǐ fēn', v: 'tỉ số (thể thao)', e: 'score' },
      { h: '毕业生', p: 'bì yè shēng', v: 'sinh viên tốt nghiệp', e: 'alumnus, postgraduate, grad, alum, alumna, graduating class, graduate' },
      { h: '大众', p: 'dà zhòng', v: 'đại chúng, quần chúng', e: 'the broad masses, roughscuff, the public, herd, concourse, commonality, riffraff, masses, commonness' },
      { h: '法', p: 'fǎ', v: 'luật pháp, phương pháp', e: 'law, method, way, mode, standard, model, legalists, Legalist School, Buddhist doctrine, dharma, magi' },
      { h: '渐渐', p: 'jiàn jiàn', v: 'dần dần, từ từ', e: 'gradually, by degrees, little by little' },
      { h: '刷', p: 'shuā', v: 'chải, quét, lướt', e: 'to brush, to paint, to daub, to paste up, to skip class (of students), to fire from a job, to select' },
      { h: '学分', p: 'xué fēn', v: 'tín chỉ', e: 'point, semester hour, course credit, credit' },
      { h: '学年', p: 'xué nián', v: 'năm học', e: 'school/academic year' },
      { h: '研究', p: 'yán jiū', v: 'nghiên cứu', e: 'study, research' },
      { h: '登', p: 'dēng', v: 'leo lên, đăng (báo)', e: 'to scale (a height), to ascend, to mount, to publish or record, to enter (e.g. in a register), to pr' },
      { h: '语法', p: 'yǔ fǎ', v: 'ngữ pháp', e: 'grammar' },
      { h: '口语', p: 'kǒu yǔ', v: 'khẩu ngữ, ngôn ngữ nói', e: 'colloquial speech, spoken language, vernacular language, slander, gossip, CL:門|门[men2]' },
      { h: '语音', p: 'yǔ yīn', v: 'ngữ âm, phát âm', e: 'spoken pronunciation of characters, pronunciation, spoken (vs. written) pronunciation of characters,' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '毕业后我想读___。', options: ['研究生', '比分', '语音'], answer: '研究生' },
        { type: 'fill', sentence: '一位___在课上讲课。', options: ['教授', '学分', '比分'], answer: '教授' },
        { type: 'fill', sentence: '我每天练___，改善发音。', options: ['语音', '学年', '比分'], answer: '语音' },
        { type: 'fill', sentence: '学好___才能写对句子。', options: ['语法', '比分', '大众'], answer: '语法' },
        { type: 'fill', sentence: '水平___提高了。', options: ['渐渐', '大众', '研究'], answer: '渐渐' }
      ],
      normal: [
        { type: 'fill', sentence: '考上___要努力学习。', options: ['硕士', '比分', '语音'], answer: '硕士' },
        { type: 'fill', sentence: '___是个好方法，要多读书。', options: ['研究', '比分', '大众'], answer: '研究' },
        { type: 'fill', sentence: '这个学期要修满___。', options: ['学分', '语音', '大众'], answer: '学分' },
        { type: 'fill', sentence: '你的___比以前流利了。', options: ['口语', '学分', '比分'], answer: '口语' },
        { type: 'order', words: ['你', '的', '语法', '和', '口语', '都', '进步', '了'], answer: '你的语法和口语都进步了' },
        { type: 'order', words: ['水平', '渐渐', '提高', '了'], answer: '水平渐渐提高了' },
        { type: 'fill', sentence: '这个___我想多修几门课。', options: ['学年', '比分', '语音'], answer: '学年' }
      ],
      hard: [
        { type: 'fill', sentence: '我的文章___在报纸上了。', options: ['登', '刷', '大众'], answer: '登' },
        { type: 'fill', sentence: '比赛的___出来了，我们赢了。', options: ['比分', '学分', '语音'], answer: '比分' },
        { type: 'translate', prompt: 'Em hợp học cao học, sau này có thể thi thạc sĩ.', answer: '你适合读研究生，将来可以考硕士。' },
        { type: 'translate', prompt: 'Em luyện phát âm mỗi ngày, trình độ dần dần nâng lên.', answer: '我每天练语音，水平渐渐提高。' },
        { type: 'translate', prompt: 'Nghiên cứu là một cách hay, đọc nhiều sách.', answer: '研究是个好方法，多读书。' },
        { type: 'fill', sentence: '这是___都关心的事。', options: ['大众', '学分', '语法'], answer: '大众' }
      ]
    }
  }

});

// ───────────────────────────────────────────────────────
// BATCH 6 (tiếp) — Bài 147-148 (Gia đình · Công việc)
// ───────────────────────────────────────────────────────
Object.assign(COURSE_DATA, {

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 147: Gia đình & người thân — 12 từ
  // ─────────────────────────────────────────────────────────────────────────
  147: {
    id: 147,
    level: 4,
    title: 'Gia đình & người thân',
    context: 'Họ hàng nhà Mai đến thăm. Mọi người quây quần, Mai gọi đúng cách xưng hô của từng người thân, và cảm nhận hơi ấm gia đình.',
    vocabPreview: ['亲戚', '阿姨', '夫妻', '丈夫', '上门'],
    objectives: [
      "Nắm nhóm từ khóa: 亲戚 · 阿姨 · 夫妻 · 丈夫 · 上门",
      "Nghe hiểu và kể lại tình huống Gia đình & người thân bằng câu HSK 4",
      "Phân biệt cách dùng 亲戚 · 阿姨 · 夫妻",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "亲戚 — họ hàng",
        explain: "Dùng 亲戚 trong ngữ cảnh Gia đình & người thân để diễn đạt: họ hàng.",
        examples: [
          { zh: "今天亲戚们上门，阿姨、大姐都来了。", py: "Jīntiān qīnqi men shàngmén, āyí, dàjiě dōu lái le.", vi: "Hôm nay họ hàng đến nhà, dì và chị cả đều đến." }
        ] },
      { point: "阿姨 — dì",
        explain: "Dùng 阿姨 trong ngữ cảnh Gia đình & người thân để diễn đạt: dì.",
        examples: [
          { zh: "今天亲戚们上门，阿姨、大姐都来了。", py: "Jīntiān qīnqi men shàngmén, āyí, dàjiě dōu lái le.", vi: "Hôm nay họ hàng đến nhà, dì và chị cả đều đến." }
        ] },
      { point: "夫妻 — vợ chồng",
        explain: "Dùng 夫妻 trong ngữ cảnh Gia đình & người thân để diễn đạt: vợ chồng.",
        examples: [
          { zh: "隔壁那对夫妻也来了吗？", py: "Gébì nà duì fūqī yě lái le ma?", vi: "Cặp vợ chồng nhà bên cũng đến à?" }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Nhà Mai · Buổi chiều', bg: 'home',
        cast: ['mai', 'mama'],
        text: 'Họ hàng nhà Mai đến thăm, nhà cửa rộn ràng.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '今天亲戚们上门，阿姨、大姐都来了。',
        pinyin: 'Jīntiān qīnqi men shàngmén, āyí, dàjiě dōu lái le.',
        meaning: 'Hôm nay họ hàng đến nhà, dì và chị cả đều đến.',
        expression: 'happy', vocab: ['亲戚', '上门', '阿姨', '大姐'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '隔壁那对夫妻也来了吗？',
        pinyin: 'Gébì nà duì fūqī yě lái le ma?',
        meaning: 'Cặp vợ chồng nhà bên cũng đến à?',
        expression: 'curious', vocab: ['夫妻'] },
      { type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '来了。那位是张奶奶的孙女，和我们像姐妹一样。',
        pinyin: 'Lái le. Nà wèi shì Zhāng nǎinai de sūnnǚ, hé wǒmen xiàng jiěmèi yíyàng.',
        meaning: 'Đến rồi. Người kia là cháu gái của bà Trương, với nhà mình thân như chị em.',
        expression: 'happy', vocab: ['孙女', '姐妹'] },
      { type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '你叔叔的妻子，也就是他老婆，做菜很好吃。',
        pinyin: 'Nǐ shūshu de qīzi, yě jiùshì tā lǎopo, zuò cài hěn hǎochī.',
        meaning: 'Vợ của chú con, cũng là bà xã của chú ấy, nấu ăn rất ngon.',
        expression: 'happy', vocab: ['妻子', '老婆'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '那阿姨的丈夫，她老公呢？',
        pinyin: 'Nà āyí de zhàngfu, tā lǎogōng ne?',
        meaning: 'Thế chồng của dì, ông xã dì ấy đâu ạ?',
        expression: 'curious', vocab: ['丈夫', '老公'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'mama'], bg: 'home',
        scene: '📍 Nhà Mai',
        expression: 'focused',
        q: 'Mai điền tờ khai thông tin gia đình. Diễn đạt "Viết tên người thân vào trong ngoặc" sao cho đúng?',
        options: [
          { text: '请把亲戚的名字写在括号里。', pinyin: 'Qǐng bǎ qīnqi de míngzi xiě zài kuòhào lǐ.', meaning: 'Hãy viết tên người thân vào trong ngoặc.', correct: true,
            feedback: 'Đúng! 括号 = dấu ngoặc.' },
          { text: '请把亲戚的名字写在姐妹里。', pinyin: 'Qǐng bǎ qīnqi de míngzi xiě zài jiěmèi lǐ.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '姐妹 = chị em, không phải "dấu ngoặc".' },
          { text: '请把亲戚的名字写在孙女里。', pinyin: 'Qǐng bǎ qīnqi de míngzi xiě zài sūnnǚ lǐ.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '孙女 = cháu gái, không hợp.' }
        ], vocab: ['括号', '姐妹', '孙女'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '一家人在一起最幸福，亲戚之间要多来往。',
        pinyin: 'Yì jiā rén zài yìqǐ zuì xìngfú, qīnqi zhī jiān yào duō láiwǎng.',
        meaning: 'Cả nhà bên nhau là hạnh phúc nhất, họ hàng nên qua lại nhiều.',
        expression: 'happy', vocab: ['亲戚'] },
      { type: 'checkpoint', questions: [
        { q: '“亲戚” chỉ ai?', options: ['Họ hàng', 'Hàng xóm', 'Đồng nghiệp', 'Bạn học'], answer: 0 },
        { q: '“夫妻” nghĩa là?', options: ['Vợ chồng', 'Chị em', 'Cha con', 'Ông cháu'], answer: 0 },
        { q: '“亲戚上门” — “上门” nghĩa là?', options: ['Đến nhà thăm', 'Ra ngoài', 'Đóng cửa', 'Dọn nhà'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '亲戚', p: 'qīn qi', v: 'họ hàng', e: 'a relative (i.e. family relation)' },
      { h: '阿姨', p: 'ā yí', v: 'dì, cô', e: 'aunt, child\'s address to woman of similar age as parents, girl, babysitter, aunty, elderly unattache' },
      { h: '大姐', p: 'dà jiě', v: 'chị cả', e: 'big sister, elder sister, older sister (also polite term of address for a girl or woman slightly old' },
      { h: '夫妻', p: 'fū qī', v: 'vợ chồng', e: 'couple, spouse, pair, man and wife, husband and wife' },
      { h: '姐妹', p: 'jiě mèi', v: 'chị em gái', e: 'sisters, siblings, sister (school, city etc)' },
      { h: '括号', p: 'kuò hào', v: 'dấu ngoặc', e: 'parentheses, brackets' },
      { h: '老公', p: 'lǎo gōng', v: 'chồng (thông tục)', e: 'old man, eunuch, married man, hubby, husband' },
      { h: '老婆', p: 'lǎo po', v: 'bà xã, vợ', e: 'old lady, broomstick, missis, missus, married woman, squaw, old_lady, wife' },
      { h: '妻子', p: 'qī zi', v: 'vợ', e: 'frow, feme, married woman, wifelike, wife, woman, femme, missis, squaw' },
      { h: '上门', p: 'shàng mén', v: 'đến nhà, thăm nhà', e: 'to drop in, to visit, to lock a door, (of a shop) to close, to go and live with one\'s wife\'s family,' },
      { h: '孙女', p: 'sūn nǚ', v: 'cháu gái (con của con trai)', e: 'son\'s daughter, granddaughter' },
      { h: '丈夫', p: 'zhàng fu', v: 'chồng', e: 'masterman, man, papa, manliness, mister, goodman, married man, husband, hub, hubby' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '今天___们来我家做客。', options: ['亲戚', '括号', '夫妻'], answer: '亲戚' },
        { type: 'fill', sentence: '妈妈的妹妹是我的___。', options: ['阿姨', '老公', '丈夫'], answer: '阿姨' },
        { type: 'fill', sentence: '他们是一对___。', options: ['夫妻', '括号', '上门'], answer: '夫妻' },
        { type: 'fill', sentence: '她的___在外面工作。', options: ['丈夫', '括号', '孙女'], answer: '丈夫' },
        { type: 'fill', sentence: '今天亲戚们___做客。', options: ['上门', '括号', '姐妹'], answer: '上门' }
      ],
      normal: [
        { type: 'fill', sentence: '我们像___一样亲。', options: ['姐妹', '括号', '上门'], answer: '姐妹' },
        { type: 'fill', sentence: '叔叔的___做菜很好吃。', options: ['妻子', '括号', '上门'], answer: '妻子' },
        { type: 'fill', sentence: '口语里常把丈夫叫___。', options: ['老公', '阿姨', '孙女'], answer: '老公' },
        { type: 'fill', sentence: '那是张奶奶的___。', options: ['孙女', '括号', '夫妻'], answer: '孙女' },
        { type: 'order', words: ['今天', '亲戚', '们', '上门', '做客'], answer: '今天亲戚们上门做客' },
        { type: 'order', words: ['我们', '像', '姐妹', '一样'], answer: '我们像姐妹一样' },
        { type: 'fill', sentence: '妻子又叫___。', options: ['老婆', '丈夫', '括号'], answer: '老婆' }
      ],
      hard: [
        { type: 'fill', sentence: '请把名字写在___里。', options: ['括号', '姐妹', '孙女'], answer: '括号' },
        { type: 'fill', sentence: '___之间要多来往。', options: ['亲戚', '括号', '老婆'], answer: '亲戚' },
        { type: 'translate', prompt: 'Hôm nay họ hàng đến nhà, dì và chị cả đều đến.', answer: '今天亲戚们上门，阿姨、大姐都来了。' },
        { type: 'translate', prompt: 'Cặp vợ chồng nhà bên cũng đến à?', answer: '隔壁那对夫妻也来了吗？' },
        { type: 'translate', prompt: 'Cả nhà bên nhau là hạnh phúc nhất.', answer: '一家人在一起最幸福。' },
        { type: 'fill', sentence: '她的___，也就是她老公。', options: ['丈夫', '孙女', '括号'], answer: '丈夫' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 148: Công việc & nơi chốn — 21 từ
  // ─────────────────────────────────────────────────────────────────────────
  148: {
    id: 148,
    level: 4,
    title: 'Công việc & nơi chốn',
    context: 'Mai tìm hiểu các lựa chọn nghề nghiệp tương lai và dạo quanh thành phố. Em xem tin tuyển dụng, cân nhắc công việc thương mại, rồi cùng Tiểu Mỹ đi mua sắm và tập gym.',
    vocabPreview: ['招聘', '加班', '市区', '街道', '解释'],
    objectives: [
      "Nắm nhóm từ khóa: 招聘 · 加班 · 市区 · 街道 · 解释",
      "Nghe hiểu và kể lại tình huống Công việc & nơi chốn bằng câu HSK 4",
      "Phân biệt cách dùng 招聘 · 加班 · 市区",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "招聘 — tuyển dụng",
        explain: "Dùng 招聘 trong ngữ cảnh Công việc & nơi chốn để diễn đạt: tuyển dụng.",
        examples: [
          { zh: "公司在招聘，我想申请，能赚点钱。", py: "Gōngsī zài zhāopìn, wǒ xiǎng shēnqǐng, néng zhuàn diǎn qián.", vi: "Công ty đang tuyển dụng, em muốn ứng tuyển, kiếm chút tiền." }
        ] },
      { point: "加班 — làm thêm giờ",
        explain: "Dùng 加班 trong ngữ cảnh Công việc & nơi chốn để diễn đạt: làm thêm giờ.",
        examples: [
          { zh: "商务工作常常加班，但能赢得经验。", py: "Shāngwù gōngzuò chángcháng jiābān, dàn néng yíngdé jīngyàn.", vi: "Công việc thương mại thường phải tăng ca, nhưng giành được kinh nghiệm." }
        ] },
      { point: "市区 — khu trung tâm",
        explain: "Dùng 市区 trong ngữ cảnh Công việc & nơi chốn để diễn đạt: khu trung tâm.",
        examples: [
          { zh: "市区那栋大楼晚上灯光很美，街道也热闹，居民很多。", py: "Shìqū nà dòng dàlóu wǎnshang dēngguāng hěn měi, jiēdào yě rènao, jūmín hěn duō.", vi: "Tòa cao ốc ở khu trung tâm buổi tối ánh đèn rất đẹp, đường phố cũng nhộn nhịp, cư dân đông." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Văn phòng · Sáng', bg: 'office',
        cast: ['mai', 'laoli'],
        text: 'Mai tìm hiểu các lựa chọn nghề nghiệp tương lai.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '公司在招聘，我想申请，能赚点钱。',
        pinyin: 'Gōngsī zài zhāopìn, wǒ xiǎng shēnqǐng, néng zhuàn diǎn qián.',
        meaning: 'Công ty đang tuyển dụng, em muốn ứng tuyển, kiếm chút tiền.',
        expression: 'happy', vocab: ['招聘', '赚'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '商务工作常常加班，但能赢得经验。',
        pinyin: 'Shāngwù gōngzuò chángcháng jiābān, dàn néng yíngdé jīngyàn.',
        meaning: 'Công việc thương mại thường phải tăng ca, nhưng giành được kinh nghiệm.',
        expression: 'focused', vocab: ['商务', '加班', '赢得'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我明白。周末我陪朋友去购物、健身。',
        pinyin: 'Wǒ míngbai. Zhōumò wǒ péi péngyǒu qù gòuwù, jiànshēn.',
        meaning: 'Em hiểu. Cuối tuần tôi đi cùng bạn mua sắm, tập gym.',
        expression: 'happy', vocab: ['陪', '购物', '健身'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '市区那栋大楼晚上灯光很美，街道也热闹，居民很多。',
        pinyin: 'Shìqū nà dòng dàlóu wǎnshang dēngguāng hěn měi, jiēdào yě rènao, jūmín hěn duō.',
        meaning: 'Tòa cao ốc ở khu trung tâm buổi tối ánh đèn rất đẹp, đường phố cũng nhộn nhịp, cư dân đông.',
        expression: 'happy', vocab: ['市区', '大楼', '灯光', '街道', '居民'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这里各种类型的店都有。我量了量到加油站的距离，不算远。',
        pinyin: 'Zhèlǐ gè zhǒng lèixíng de diàn dōu yǒu. Wǒ liáng le liáng dào jiāyóuzhàn de jùlí, bú suàn yuǎn.',
        meaning: 'Ở đây có đủ loại cửa hàng. Tôi ước lượng khoảng cách đến trạm xăng, không xa lắm.',
        expression: 'curious', vocab: ['类型', '量', '加油站'] },
      { type: 'choice', speaker: 'mai', cast: ['mai'], bg: 'classroom',
        scene: '📍 Lớp học',
        expression: 'focused',
        q: 'Cô giáo hướng dẫn bài. Diễn đạt "Cô giải thích cách làm bài điền vào chỗ trống" sao cho đúng?',
        options: [
          { text: '老师解释了填空题怎么做。', pinyin: 'Lǎoshī jiěshì le tiánkòng tí zěnme zuò.', meaning: 'Cô giải thích cách làm bài điền vào chỗ trống.', correct: true,
            feedback: 'Đúng! 解释 = giải thích; 填空 = điền vào chỗ trống.' },
          { text: '老师购买了填空题怎么做。', pinyin: 'Lǎoshī gòumǎi le tiánkòng tí zěnme zuò.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '购买 = mua, không hợp.' },
          { text: '老师共了填空题怎么做。', pinyin: 'Lǎoshī gòng le tiánkòng tí zěnme zuò.', meaning: '(không thông)', correct: false,
            feedback: '共 = tổng cộng/cùng, không dùng làm động từ ở đây.' }
        ], vocab: ['解释', '填空', '购买', '共'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我们一共购买了三本书。路过加油站，看到花园里开花了，真美。',
        pinyin: 'Wǒmen yígòng gòumǎi le sān běn shū. Lùguò jiāyóuzhàn, kàndào huāyuán lǐ kāihuā le, zhēn měi.',
        meaning: 'Bọn tớ mua tổng cộng ba cuốn sách. Đi ngang trạm xăng, thấy trong vườn hoa nở, đẹp thật.',
        expression: 'happy', vocab: ['共', '购买', '开花'] },
      { type: 'checkpoint', questions: [
        { q: '“招聘” nghĩa là?', options: ['Tuyển dụng', 'Sa thải', 'Nghỉ việc', 'Làm thêm'], answer: 0 },
        { q: '“加班” chỉ điều gì?', options: ['Làm thêm giờ', 'Nghỉ phép', 'Đi du lịch', 'Tan làm'], answer: 0 },
        { q: '“市区” chỉ nơi nào?', options: ['Khu trung tâm thành phố', 'Vùng quê', 'Ngoại ô', 'Trên núi'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '加班', p: 'jiā bān', v: 'làm thêm giờ, tăng ca', e: 'to work overtime' },
      { h: '陪', p: 'péi', v: 'đi cùng, bầu bạn', e: 'to accompany' },
      { h: '填空', p: 'tián kòng', v: 'điền vào chỗ trống', e: 'to fill a job vacancy' },
      { h: '招聘', p: 'zhāo pìn', v: 'tuyển dụng', e: 'to invite applications for a job' },
      { h: '赚', p: 'zhuàn', v: 'kiếm (tiền)', e: 'to earn' },
      { h: '共', p: 'gòng', v: 'cộng, tổng cộng, cùng', e: 'totally, together, in all, in company, altogether' },
      { h: '购买', p: 'gòu mǎi', v: 'mua, mua sắm', e: 'invest, take, buy, make purchases, go shopping, purchase' },
      { h: '健身', p: 'jiàn shēn', v: 'tập thể dục, rèn luyện', e: 'to exercise, to keep fit, to work out, physical exercise' },
      { h: '开花', p: 'kāi huā', v: 'nở hoa', e: 'burst forth, flower, bloom, split apart, explode, blossom, effloresce, unfold, feel elated, break ap' },
      { h: '商务', p: 'shāng wù', v: 'thương mại, công vụ', e: 'commercial affairs, commercial, commerce, business' },
      { h: '赢得', p: 'yíng dé', v: 'giành được, thắng được', e: 'nail down, rake_in, carry_off, nail, peg, conquer, try_for, gain, turn, win, garner, claim, earn, ca' },
      { h: '购物', p: 'gòu wù', v: 'mua sắm', e: 'shopping' },
      { h: '加油站', p: 'jiā yóu zhàn', v: 'trạm xăng', e: 'gas station' },
      { h: '解释', p: 'jiě shì', v: 'giải thích', e: 'explanation' },
      { h: '大楼', p: 'dà lóu', v: 'tòa nhà lớn, cao ốc', e: 'mansion, massif, hall, block, manse, edifice, building, multi-storied building, residence, mansion h' },
      { h: '灯光', p: 'dēng guāng', v: 'ánh đèn, ánh sáng', e: 'light, lighting, the light of a lamp, illuminance, glim, illumination, lamplight' },
      { h: '街道', p: 'jiē dào', v: 'đường phố', e: 'neighborhood, mews, gate, residential district, neighbourhood, street' },
      { h: '居民', p: 'jū mín', v: 'cư dân', e: 'municipality, population, citizen, denizen, townie, people, dweller, populace, residenter, resident,' },
      { h: '类型', p: 'lèi xíng', v: 'loại hình, kiểu loại', e: 'category, species, genre, portrait, nature, stamp, cast, type' },
      { h: '量', p: 'liáng', v: 'đo lường, ước lượng', e: 'to measure, capacity, quantity, amount, to estimate, abbr. for 量詞|量词[liang4 ci2], classifier (in Chi' },
      { h: '市区', p: 'shì qū', v: 'khu trung tâm, nội thành', e: 'urban area, city proper, row, urban district, downtown, urban_area' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '公司在___，我想申请。', options: ['招聘', '加班', '开花'], answer: '招聘' },
        { type: 'fill', sentence: '努力工作能___钱。', options: ['赚', '陪', '量'], answer: '赚' },
        { type: 'fill', sentence: '周末我去___，买衣服。', options: ['购物', '加班', '招聘'], answer: '购物' },
        { type: 'fill', sentence: '为了健康，我每天___。', options: ['健身', '招聘', '赚'], answer: '健身' },
        { type: 'fill', sentence: '春天，花园里___了。', options: ['开花', '加班', '购物'], answer: '开花' }
      ],
      normal: [
        { type: 'fill', sentence: '___工作常常加班。', options: ['商务', '居民', '街道'], answer: '商务' },
        { type: 'fill', sentence: '加班虽累，但能___经验。', options: ['赢得', '购买', '开花'], answer: '赢得' },
        { type: 'fill', sentence: '___那栋大楼很高。', options: ['市区', '加班', '健身'], answer: '市区' },
        { type: 'fill', sentence: '这里的___很多，很热闹。', options: ['居民', '商务', '类型'], answer: '居民' },
        { type: 'order', words: ['周末', '我', '陪', '朋友', '去', '购物'], answer: '周末我陪朋友去购物' },
        { type: 'order', words: ['这里', '各种', '类型', '的', '店', '都', '有'], answer: '这里各种类型的店都有' },
        { type: 'fill', sentence: '晚上大楼的___很美。', options: ['灯光', '街道', '招聘'], answer: '灯光' }
      ],
      hard: [
        { type: 'fill', sentence: '老师___了填空题怎么做。', options: ['解释', '购买', '共'], answer: '解释' },
        { type: 'fill', sentence: '我们一___买了三本书。', options: ['共', '陪', '量'], answer: '共' },
        { type: 'translate', prompt: 'Công ty đang tuyển dụng, tôi muốn ứng tuyển.', answer: '公司在招聘，我想申请。' },
        { type: 'translate', prompt: 'Công việc thương mại thường phải tăng ca, nhưng giành được kinh nghiệm.', answer: '商务工作常常加班，但能赢得经验。' },
        { type: 'translate', prompt: 'Tòa cao ốc ở khu trung tâm buổi tối ánh đèn rất đẹp.', answer: '市区那栋大楼晚上灯光很美。' },
        { type: 'fill', sentence: '我___了到加油站的距离。', options: ['量', '赚', '陪'], answer: '量' }
      ]
    }
  }

});

// ───────────────────────────────────────────────────────
// BATCH 7 — Bài 149-154 (Sức khỏe + ĐỌC THÊM: thiên nhiên · động vật · xã hội)
// ───────────────────────────────────────────────────────
Object.assign(COURSE_DATA, {

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 149: Sức khỏe & đi lại — 18 từ
  // ─────────────────────────────────────────────────────────────────────────
  149: {
    id: 149,
    level: 4,
    title: 'Sức khỏe & đi lại',
    context: 'Mai bị ho nhẹ nên đến phòng khám gần nhà. Bác sĩ dặn em kiên nhẫn dưỡng bệnh. Trên đường về, em nói chuyện về phương tiện đi lại và tin vui nhận được học bổng.',
    vocabPreview: ['打针', '护士', '耐心', '乘坐', '奖学金'],
    objectives: [
      "Nắm nhóm từ khóa: 打针 · 护士 · 耐心 · 乘坐 · 奖学金",
      "Nghe hiểu và kể lại tình huống Sức khỏe & đi lại bằng câu HSK 4",
      "Phân biệt cách dùng 打针 · 护士 · 耐心",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "打针 — tiêm (mũi tiêm)",
        explain: "Dùng 打针 trong ngữ cảnh Sức khỏe & đi lại để diễn đạt: tiêm (mũi tiêm).",
        examples: [
          { zh: "护士先给你打针，用一根针就好。别担心，这个病好治，要有耐心。", py: "Hùshi xiān gěi nǐ dǎzhēn, yòng yì gēn zhēn jiù hǎo. Bié dānxīn, zhège bìng hǎo zhì, yào yǒu nàixīn.", vi: "Y tá tiêm cho cháu trước, dùng một mũi kim là được. Đừng lo, bệnh này dễ chữa, phải kiên nhẫn." }
        ] },
      { point: "护士 — y tá",
        explain: "Dùng 护士 trong ngữ cảnh Sức khỏe & đi lại để diễn đạt: y tá.",
        examples: [
          { zh: "护士先给你打针，用一根针就好。别担心，这个病好治，要有耐心。", py: "Hùshi xiān gěi nǐ dǎzhēn, yòng yì gēn zhēn jiù hǎo. Bié dānxīn, zhège bìng hǎo zhì, yào yǒu nàixīn.", vi: "Y tá tiêm cho cháu trước, dùng một mũi kim là được. Đừng lo, bệnh này dễ chữa, phải kiên nhẫn." }
        ] },
      { point: "耐心 — nhẫn nại",
        explain: "Dùng 耐心 trong ngữ cảnh Sức khỏe & đi lại để diễn đạt: nhẫn nại.",
        examples: [
          { zh: "护士先给你打针，用一根针就好。别担心，这个病好治，要有耐心。", py: "Hùshi xiān gěi nǐ dǎzhēn, yòng yì gēn zhēn jiù hǎo. Bié dānxīn, zhège bìng hǎo zhì, yào yǒu nàixīn.", vi: "Y tá tiêm cho cháu trước, dùng một mũi kim là được. Đừng lo, bệnh này dễ chữa, phải kiên nhẫn." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Phòng khám · Sáng', bg: 'clinic',
        cast: ['mai', 'yisheng'],
        text: 'Mai bị ho nhẹ nên đến phòng khám gần nhà.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'yisheng'],
        text: '我有点咳嗽，来附近的医院看看。',
        pinyin: 'Wǒ yǒudiǎn késou, lái fùjìn de yīyuàn kànkan.',
        meaning: 'Tôi hơi ho, đến bệnh viện gần đây khám một chút.',
        expression: 'sad', vocab: ['咳嗽', '附近'] },
      { type: 'dialogue', speaker: 'yisheng', cast: ['mai', 'yisheng'],
        text: '护士先给你打针，用一根针就好。别担心，这个病好治，要有耐心。',
        pinyin: 'Hùshi xiān gěi nǐ dǎzhēn, yòng yì gēn zhēn jiù hǎo. Bié dānxīn, zhège bìng hǎo zhì, yào yǒu nàixīn.',
        meaning: 'Y tá tiêm cho cháu trước, dùng một mũi kim là được. Đừng lo, bệnh này dễ chữa, phải kiên nhẫn.',
        expression: 'focused', vocab: ['护士', '打针', '针', '治', '耐心'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'yisheng'],
        text: '谢谢医生。听说医学博士很难考，医疗工作也很辛苦。',
        pinyin: 'Xièxie yīshēng. Tīngshuō yīxué bóshì hěn nán kǎo, yīliáo gōngzuò yě hěn xīnkǔ.',
        meaning: 'Cảm ơn bác sĩ. Nghe nói tiến sĩ y học rất khó thi, công việc y tế cũng vất vả.',
        expression: 'curious', vocab: ['医学', '博士', '医疗'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我乘坐巴士回家，平时也常骑电动车。',
        pinyin: 'Wǒ chéngzuò bāshì huí jiā, píngshí yě cháng qí diàndòngchē.',
        meaning: 'Tôi đi xe buýt về nhà, bình thường cũng hay đi xe điện.',
        expression: null, vocab: ['乘坐', '巴士', '电动车'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我们的友谊像车轮子，一直向前转。',
        pinyin: 'Wǒmen de yǒuyì xiàng chē lúnzi, yìzhí xiàng qián zhuǎn.',
        meaning: 'Tình bạn của mình như bánh xe, cứ lăn về phía trước.',
        expression: 'happy', vocab: ['友谊', '轮子'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'street',
        scene: '📍 Trên đường',
        expression: 'happy',
        q: 'Mai vừa đỗ học bổng. Diễn đạt "Tôi giành được học bổng, có thể học tiếp" sao cho đúng?',
        options: [
          { text: '我拿到了奖学金，可以继续读书。', pinyin: 'Wǒ ná dào le jiǎngxuéjīn, kěyǐ jìxù dú shū.', meaning: 'Tôi giành được học bổng, có thể học tiếp.', correct: true,
            feedback: 'Đúng! 奖学金 = học bổng.' },
          { text: '我拿到了工程，可以继续读书。', pinyin: 'Wǒ ná dào le gōngchéng, kěyǐ jìxù dú shū.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '工程 = công trình, không hợp.' },
          { text: '我拿到了燃料，可以继续读书。', pinyin: 'Wǒ ná dào le ránliào, kěyǐ jìxù dú shū.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '燃料 = nhiên liệu, không hợp.' }
        ], vocab: ['奖学金', '工程', '燃料'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '这座大桥是个大工程，汽车要加燃料才能跑。',
        pinyin: 'Zhè zuò dàqiáo shì ge dà gōngchéng, qìchē yào jiā ránliào cáinéng pǎo.',
        meaning: 'Cây cầu lớn này là một công trình lớn, ô tô phải đổ nhiên liệu mới chạy được.',
        expression: 'curious', vocab: ['工程', '燃料'] },
      { type: 'checkpoint', questions: [
        { q: '“打针” nghĩa là?', options: ['Tiêm (mũi tiêm)', 'Uống thuốc', 'Khám mắt', 'Đo huyết áp'], answer: 0 },
        { q: '“护士” là ai?', options: ['Y tá', 'Bác sĩ', 'Tiến sĩ', 'Bệnh nhân'], answer: 0 },
        { q: '“乘坐巴士” — “乘坐” nghĩa là?', options: ['Đi (phương tiện)', 'Lái', 'Sửa', 'Mua'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '博士', p: 'bó shì', v: 'tiến sĩ', e: 'doctor' },
      { h: '打针', p: 'dǎ zhēn', v: 'tiêm (mũi tiêm)', e: 'to give or have an injection' },
      { h: '咳嗽', p: 'ké sou', v: 'ho', e: 'to cough' },
      { h: '护士', p: 'hù shi', v: 'y tá', e: 'nurse' },
      { h: '耐心', p: 'nài xīn', v: 'nhẫn nại, kiên nhẫn', e: 'to be patient' },
      { h: '医疗', p: 'yī liáo', v: 'y tế, chữa bệnh', e: 'treat, cure' },
      { h: '医学', p: 'yī xué', v: 'y học, y khoa', e: 'medicine, practice of medicine, medical science, leechcraft, physic, iatrology, medical' },
      { h: '针', p: 'zhēn', v: 'kim, mũi kim', e: 'needle, pin, stitch, injection, shot, acupuncture' },
      { h: '治', p: 'zhì', v: 'trị, chữa', e: 'study, research, cure, govern, treat, government, eliminate, harness, rule, manage, wipe out, manage' },
      { h: '乘坐', p: 'chéng zuò', v: 'đi (phương tiện)', e: 'to ride (in a vehicle)' },
      { h: '友谊', p: 'yǒu yì', v: 'tình bạn', e: 'companionship' },
      { h: '巴士', p: 'bā shì', v: 'xe buýt', e: 'bus' },
      { h: '电动车', p: 'diàn dòng chē', v: 'xe điện', e: 'Electric vehicle' },
      { h: '附近', p: 'fù jìn', v: 'gần đây, lân cận', e: 'neighborship, neighborhood, precinct, vicinity, neighbourhood' },
      { h: '工程', p: 'gōng chéng', v: 'công trình, dự án', e: 'process, construction, engineering, engineering project, project' },
      { h: '奖学金', p: 'jiǎng xué jīn', v: 'học bổng', e: 'burse, stipend, foundation, exhibition, studentship, scholarship' },
      { h: '轮子', p: 'lún zi', v: 'bánh xe', e: 'wheel, CL:個|个[ge4]' },
      { h: '燃料', p: 'rán liào', v: 'nhiên liệu', e: 'fuel' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我有点___，去看医生。', options: ['咳嗽', '医疗', '治'], answer: '咳嗽' },
        { type: 'fill', sentence: '___给病人打针。', options: ['护士', '燃料', '轮子'], answer: '护士' },
        { type: 'fill', sentence: '医院就在___，很方便。', options: ['附近', '工程', '友谊'], answer: '附近' },
        { type: 'fill', sentence: '我___巴士去学校。', options: ['乘坐', '治', '打针'], answer: '乘坐' },
        { type: 'fill', sentence: '我拿到了___，可以读书。', options: ['奖学金', '燃料', '工程'], answer: '奖学金' }
      ],
      normal: [
        { type: 'fill', sentence: '这个病好___，别担心。', options: ['治', '乘坐', '打针'], answer: '治' },
        { type: 'fill', sentence: '看病要有___，慢慢会好。', options: ['耐心', '友谊', '工程'], answer: '耐心' },
        { type: 'fill', sentence: '考___要学很多年。', options: ['博士', '巴士', '轮子'], answer: '博士' },
        { type: 'fill', sentence: '我常骑___上班。', options: ['电动车', '燃料', '针'], answer: '电动车' },
        { type: 'order', words: ['护士', '给', '你', '打针'], answer: '护士给你打针' },
        { type: 'order', words: ['我', '乘坐', '巴士', '回家'], answer: '我乘坐巴士回家' },
        { type: 'fill', sentence: '我们的___很深，是好朋友。', options: ['友谊', '工程', '燃料'], answer: '友谊' }
      ],
      hard: [
        { type: 'fill', sentence: '这座大桥是个大___。', options: ['工程', '友谊', '耐心'], answer: '工程' },
        { type: 'fill', sentence: '汽车要加___才能跑。', options: ['燃料', '轮子', '针'], answer: '燃料' },
        { type: 'translate', prompt: 'Tôi hơi ho, đến bệnh viện gần đây khám.', answer: '我有点咳嗽，来附近的医院看看。' },
        { type: 'translate', prompt: 'Đừng lo, bệnh này dễ chữa, phải kiên nhẫn.', answer: '别担心，这个病好治，要有耐心。' },
        { type: 'translate', prompt: 'Tôi giành được học bổng, có thể học tiếp.', answer: '我拿到了奖学金，可以继续读书。' },
        { type: 'fill', sentence: '车___一直向前转。', options: ['轮子', '燃料', '工程'], answer: '轮子' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 150: Đọc thêm: Thiên nhiên (1) — 17 từ
  // ─────────────────────────────────────────────────────────────────────────
  150: {
    id: 150,
    level: 4,
    title: 'Đọc thêm: Thiên nhiên (1)',
    context: 'Kỳ nghỉ, Mai đi công viên sinh thái và đọc về thiên nhiên: rừng cây, dòng sông, đại dương và muôn loài.',
    vocabPreview: ['森林', '植物', '海洋', '长江', '森林'],
    objectives: [
      "Nắm nhóm từ khóa: 森林 · 植物 · 海洋 · 长江 · 森林",
      "Nghe hiểu và kể lại tình huống Đọc thêm: Thiên nhiên (1) bằng câu HSK 4",
      "Phân biệt cách dùng 森林 · 植物 · 海洋",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "森林 — rừng",
        explain: "Dùng 森林 trong ngữ cảnh Đọc thêm: Thiên nhiên (1) để diễn đạt: rừng.",
        examples: [
          { zh: "公园里有一片森林，很多植物。", py: "Gōngyuán lǐ yǒu yí piàn sēnlín, hěn duō zhíwù.", vi: "Trong công viên có một khu rừng, rất nhiều cây cối." }
        ] },
      { point: "植物 — thực vật",
        explain: "Dùng 植物 trong ngữ cảnh Đọc thêm: Thiên nhiên (1) để diễn đạt: thực vật.",
        examples: [
          { zh: "公园里有一片森林，很多植物。", py: "Gōngyuán lǐ yǒu yí piàn sēnlín, hěn duō zhíwù.", vi: "Trong công viên có một khu rừng, rất nhiều cây cối." }
        ] },
      { point: "海洋 — đại dương",
        explain: "Dùng 海洋 trong ngữ cảnh Đọc thêm: Thiên nhiên (1) để diễn đạt: đại dương.",
        examples: [
          { zh: "长江是中国最长的江，最后流入海洋。", py: "Chángjiāng shì Zhōngguó zuì cháng de jiāng, zuìhòu liú rù hǎiyáng.", vi: "Trường Giang là con sông dài nhất Trung Quốc, cuối cùng đổ ra đại dương." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Công viên sinh thái · Sáng', bg: 'street',
        cast: ['mai', 'xiaomei'],
        text: 'Kỳ nghỉ, Mai cùng Tiểu Mỹ đi công viên sinh thái.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '公园里有一片森林，很多植物。',
        pinyin: 'Gōngyuán lǐ yǒu yí piàn sēnlín, hěn duō zhíwù.',
        meaning: 'Trong công viên có một khu rừng, rất nhiều cây cối.',
        expression: 'happy', vocab: ['森林', '植物'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '一棵大树的树叶很美，红叶子一朵朵像花。',
        pinyin: 'Yì kē dàshù de shùyè hěn měi, hóng yèzi yì duǒ duǒ xiàng huā.',
        meaning: 'Lá của một cây lớn rất đẹp, lá đỏ từng chùm như hoa.',
        expression: 'happy', vocab: ['棵', '树叶', '叶子', '朵'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '长江是中国最长的江，最后流入海洋。',
        pinyin: 'Chángjiāng shì Zhōngguó zuì cháng de jiāng, zuìhòu liú rù hǎiyáng.',
        meaning: 'Trường Giang là con sông dài nhất Trung Quốc, cuối cùng đổ ra đại dương.',
        expression: 'curious', vocab: ['长江', '江', '海洋'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '我吃惊地发现石头里有像宝石的东西。',
        pinyin: 'Wǒ chījīng de fāxiàn shítou lǐ yǒu xiàng bǎoshí de dōngxi.',
        meaning: 'Tôi ngạc nhiên phát hiện trong đá có thứ giống đá quý.',
        expression: 'surprise', vocab: ['吃惊', '宝石'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '张爷爷的孙子在树林里玩，远处动物园里有狮子，他累得睡着了。',
        pinyin: 'Zhāng yéye de sūnzi zài shùlín lǐ wán, yuǎnchù dòngwùyuán lǐ yǒu shīzi, tā lèi de shuìzháo le.',
        meaning: 'Cháu trai của ông Trương chơi trong rừng nhỏ, đằng xa sở thú có sư tử, cậu bé mệt đến ngủ thiếp đi.',
        expression: 'happy', vocab: ['孙子', '树林', '狮子', '睡着'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'street',
        scene: '📍 Công viên',
        expression: 'curious',
        q: 'Trời sắp mưa. Diễn đạt "Chúng ta tránh mưa dưới gốc cây đi" sao cho đúng?',
        options: [
          { text: '我们在树下避雨吧。', pinyin: 'Wǒmen zài shù xià bì yǔ ba.', meaning: 'Chúng ta tránh mưa dưới gốc cây đi.', correct: true,
            feedback: 'Đúng! 避 = tránh, né.' },
          { text: '我们在树下汇雨吧。', pinyin: 'Wǒmen zài shù xià huì yǔ ba.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '汇 = quy tụ/chuyển tiền, không phải "tránh".' },
          { text: '我们在树下朵雨吧。', pinyin: 'Wǒmen zài shù xià duǒ yǔ ba.', meaning: '(sai từ loại)', correct: false,
            feedback: '朵 = lượng từ (bông hoa), không hợp.' }
        ], vocab: ['避', '汇', '朵'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '小河汇入大江，景色真美。',
        pinyin: 'Xiǎo hé huì rù dà jiāng, jǐngsè zhēn měi.',
        meaning: 'Con suối nhỏ đổ vào sông lớn, cảnh sắc thật đẹp.',
        expression: 'happy', vocab: ['汇'] },
      { type: 'checkpoint', questions: [
        { q: '“森林” nghĩa là?', options: ['Rừng', 'Biển', 'Sông', 'Núi'], answer: 0 },
        { q: '“一棵大树” — “棵” là?', options: ['Lượng từ đếm cây', 'Đóa hoa', 'Chiếc lá', 'Con vật'], answer: 0 },
        { q: '“在树下避雨” — “避” nghĩa là?', options: ['Tránh, né', 'Quy tụ', 'Ngủ', 'Ngạc nhiên'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '吃惊', p: 'chī jīng', v: 'giật mình, ngạc nhiên', e: 'to be startled' },
      { h: '朵', p: 'duǒ', v: 'bông, đóa (lượng từ hoa)', e: 'flower' },
      { h: '海洋', p: 'hǎi yáng', v: 'đại dương', e: 'ocean' },
      { h: '棵', p: 'kē', v: 'cây (lượng từ)', e: 'classifier for trees' },
      { h: '森林', p: 'sēn lín', v: 'rừng', e: 'forest' },
      { h: '狮子', p: 'shī zi', v: 'sư tử', e: 'Leo (star sign)' },
      { h: '孙子', p: 'sūn zi', v: 'cháu trai (nội)', e: 'Sun Tzu' },
      { h: '叶子', p: 'yè zi', v: 'chiếc lá', e: 'leaf' },
      { h: '长江', p: 'cháng jiāng', v: 'sông Trường Giang', e: 'Yangtze River' },
      { h: '植物', p: 'zhí wù', v: 'thực vật', e: 'plant' },
      { h: '宝石', p: 'bǎo shí', v: 'đá quý', e: 'precious stone, gem' },
      { h: '避', p: 'bì', v: 'tránh, né tránh', e: 'avoid, preclude, evade, repel, prevent, forbid, ward off, shun, keep away, forestall, foreclose, sta' },
      { h: '汇', p: 'huì', v: 'quy tụ, hối (tiền)', e: 'to remit, to converge (of rivers), to exchange, variant of 匯|汇[hui4]' },
      { h: '江', p: 'jiāng', v: 'sông lớn', e: 'river' },
      { h: '树林', p: 'shù lín', v: 'rừng nhỏ, bụi cây', e: 'forest, motte, woods, wood, planting, grove, timberland, woodland, hurst, timber' },
      { h: '树叶', p: 'shù yè', v: 'lá cây', e: 'leaves, foliage, leafage, leaf, leave, leaves (of trees)' },
      { h: '睡着', p: 'shuì zháo', v: 'ngủ thiếp đi', e: 'asleep, fall_asleep, go_off, nod off, drift off, doze off, fall asleep, dope off, flake, drowse off,' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '公园里有一片___。', options: ['森林', '海洋', '宝石'], answer: '森林' },
        { type: 'fill', sentence: '秋天，___变黄了。', options: ['叶子', '海洋', '宝石'], answer: '叶子' },
        { type: 'fill', sentence: '一___大树长得很高。', options: ['棵', '朵', '只'], answer: '棵' },
        { type: 'fill', sentence: '大海又叫___。', options: ['海洋', '森林', '树林'], answer: '海洋' },
        { type: 'fill', sentence: '动物园里有___。', options: ['狮子', '宝石', '叶子'], answer: '狮子' }
      ],
      normal: [
        { type: 'fill', sentence: '森林里有各种___。', options: ['植物', '海洋', '宝石'], answer: '植物' },
        { type: 'fill', sentence: '一___花开得很美。', options: ['朵', '棵', '条'], answer: '朵' },
        { type: 'fill', sentence: '___是中国最长的江。', options: ['长江', '森林', '海洋'], answer: '长江' },
        { type: 'fill', sentence: '孩子太累，___了。', options: ['睡着', '吃惊', '汇'], answer: '睡着' },
        { type: 'order', words: ['长江', '最后', '流入', '海洋'], answer: '长江最后流入海洋' },
        { type: 'order', words: ['我们', '在', '树下', '避雨', '吧'], answer: '我们在树下避雨吧' },
        { type: 'fill', sentence: '我___地发现石头里有宝石。', options: ['吃惊', '睡着', '避'], answer: '吃惊' }
      ],
      hard: [
        { type: 'fill', sentence: '快下雨了，我们去___雨。', options: ['避', '汇', '朵'], answer: '避' },
        { type: 'fill', sentence: '小河___入大江。', options: ['汇', '避', '棵'], answer: '汇' },
        { type: 'translate', prompt: 'Trong công viên có một khu rừng, rất nhiều cây cối.', answer: '公园里有一片森林，很多植物。' },
        { type: 'translate', prompt: 'Trường Giang là con sông dài nhất Trung Quốc.', answer: '长江是中国最长的江。' },
        { type: 'translate', prompt: 'Tôi ngạc nhiên phát hiện trong đá có thứ giống đá quý.', answer: '我吃惊地发现石头里有像宝石的东西。' },
        { type: 'fill', sentence: '石头里有像___的东西。', options: ['宝石', '海洋', '森林'], answer: '宝石' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 151: Đọc thêm: Thiên nhiên & thời tiết — 16 từ
  // ─────────────────────────────────────────────────────────────────────────
  151: {
    id: 151,
    level: 4,
    title: 'Đọc thêm: Thiên nhiên & thời tiết',
    context: 'Mai trồng hoa bên cửa sổ, ngắm cảnh mùa đông và đi tàu đến một lớp đào tạo. Thời tiết và lịch tàu khiến chuyến đi có chút bất ngờ.',
    vocabPreview: ['鲜花', '种植', '干燥', '列车', '晚点'],
    objectives: [
      "Nắm nhóm từ khóa: 鲜花 · 种植 · 干燥 · 列车 · 晚点",
      "Nghe hiểu và kể lại tình huống Đọc thêm: Thiên nhiên & thời tiết bằng câu HSK 4",
      "Phân biệt cách dùng 鲜花 · 种植 · 干燥",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "鲜花 — hoa tươi",
        explain: "Dùng 鲜花 trong ngữ cảnh Đọc thêm: Thiên nhiên & thời tiết để diễn đạt: hoa tươi.",
        examples: [
          { zh: "窗台上摆着鲜花，我在窗子边种植小植物。", py: "Chuāngtái shàng bǎizhe xiānhuā, wǒ zài chuāngzi biān zhòngzhí xiǎo zhíwù.", vi: "Trên bệ cửa sổ bày hoa tươi, tôi trồng cây nhỏ bên cửa sổ." }
        ] },
      { point: "种植 — trồng trọt",
        explain: "Dùng 种植 trong ngữ cảnh Đọc thêm: Thiên nhiên & thời tiết để diễn đạt: trồng trọt.",
        examples: [
          { zh: "窗台上摆着鲜花，我在窗子边种植小植物。", py: "Chuāngtái shàng bǎizhe xiānhuā, wǒ zài chuāngzi biān zhòngzhí xiǎo zhíwù.", vi: "Trên bệ cửa sổ bày hoa tươi, tôi trồng cây nhỏ bên cửa sổ." }
        ] },
      { point: "干燥 — khô ráo",
        explain: "Dùng 干燥 trong ngữ cảnh Đọc thêm: Thiên nhiên & thời tiết để diễn đạt: khô ráo.",
        examples: [
          { zh: "冬天又冷又干燥，到处是冰和冰雪。", py: "Dōngtiān yòu lěng yòu gānzào, dàochù shì bīng hé bīngxuě.", vi: "Mùa đông vừa lạnh vừa khô, khắp nơi là băng và băng tuyết." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Nhà Mai · Sáng', bg: 'home',
        cast: ['mai'],
        text: 'Mai trồng hoa bên cửa sổ và ngắm cảnh.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '窗台上摆着鲜花，我在窗子边种植小植物。',
        pinyin: 'Chuāngtái shàng bǎizhe xiānhuā, wǒ zài chuāngzi biān zhòngzhí xiǎo zhíwù.',
        meaning: 'Trên bệ cửa sổ bày hoa tươi, tôi trồng cây nhỏ bên cửa sổ.',
        expression: 'happy', vocab: ['窗台', '鲜花', '窗子', '种植'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '窗户外面那棵松树落了雪。',
        pinyin: 'Chuānghu wàimiàn nà kē sōngshù luò le xuě.',
        meaning: 'Cây thông ngoài cửa sổ đã phủ tuyết.',
        expression: 'curious', vocab: ['窗户', '松树'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '冬天又冷又干燥，到处是冰和冰雪。',
        pinyin: 'Dōngtiān yòu lěng yòu gānzào, dàochù shì bīng hé bīngxuě.',
        meaning: 'Mùa đông vừa lạnh vừa khô, khắp nơi là băng và băng tuyết.',
        expression: null, vocab: ['干燥', '冰', '冰雪'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '突然打雷，天上闪电一闪一闪。',
        pinyin: 'Tūrán dǎléi, tiānshàng shǎndiàn yì shǎn yì shǎn.',
        meaning: 'Bỗng nhiên sấm vang, trên trời chớp lóe lên từng đợt.',
        expression: 'surprise', vocab: ['打雷', '闪'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '我坐列车去参加培训班，车晚点了半小时。',
        pinyin: 'Wǒ zuò lièchē qù cānjiā péixùnbān, chē wǎndiǎn le bàn xiǎoshí.',
        meaning: 'Tôi đi tàu đến tham gia lớp đào tạo, tàu trễ nửa tiếng.',
        expression: 'sad', vocab: ['列车', '培训班', '晚点'] },
      { type: 'choice', speaker: 'mai', cast: ['mai'], bg: 'street',
        scene: '📍 Nhà ga',
        expression: 'sad',
        q: 'Tàu trễ giờ, hành khách bực mình. Diễn đạt "Có người gọi điện khiếu nại vì tàu trễ" sao cho đúng?',
        options: [
          { text: '有人打电话投诉列车晚点。', pinyin: 'Yǒu rén dǎ diànhuà tóusù lièchē wǎndiǎn.', meaning: 'Có người gọi điện khiếu nại vì tàu trễ.', correct: true,
            feedback: 'Đúng! 投诉 = khiếu nại, phàn nàn.' },
          { text: '有人打电话减列车晚点。', pinyin: 'Yǒu rén dǎ diànhuà jiǎn lièchē wǎndiǎn.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '减 = giảm/trừ, không phải "khiếu nại".' },
          { text: '有人打电话闪列车晚点。', pinyin: 'Yǒu rén dǎ diànhuà shǎn lièchē wǎndiǎn.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '闪 = chớp/né, không hợp.' }
        ], vocab: ['投诉', '减', '闪'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '这期培训班的人数减了一半，但大家很认真。',
        pinyin: 'Zhè qī péixùnbān de rénshù jiǎn le yíbàn, dàn dàjiā hěn rènzhēn.',
        meaning: 'Khóa đào tạo lần này số người giảm một nửa, nhưng ai cũng nghiêm túc.',
        expression: 'focused', vocab: ['减'] },
      { type: 'checkpoint', questions: [
        { q: '“鲜花” nghĩa là?', options: ['Hoa tươi', 'Cỏ khô', 'Lá cây', 'Băng tuyết'], answer: 0 },
        { q: '“列车晚点” — “晚点” nghĩa là?', options: ['Trễ giờ', 'Đúng giờ', 'Dừng lại', 'Khởi hành'], answer: 0 },
        { q: '“打电话投诉” — “投诉” nghĩa là?', options: ['Khiếu nại', 'Khen ngợi', 'Cảm ơn', 'Đặt vé'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '松树', p: 'sōng shù', v: 'cây thông', e: 'pine, pine tree, CL:棵[ke1]' },
      { h: '投诉', p: 'tóu sù', v: 'khiếu nại, phàn nàn', e: 'complaint, to complain, to register a complaint (esp. as a customer)' },
      { h: '鲜花', p: 'xiān huā', v: 'hoa tươi', e: 'flower, fresh flowers, CL:朵[duo3]' },
      { h: '种植', p: 'zhòng zhí', v: 'trồng trọt', e: 'plant, grow' },
      { h: '窗户', p: 'chuāng hu', v: 'cửa sổ', e: 'window' },
      { h: '干燥', p: 'gān zào', v: 'khô ráo', e: 'to dry (of weather' },
      { h: '冰', p: 'bīng', v: 'băng, nước đá', e: 'ice' },
      { h: '冰雪', p: 'bīng xuě', v: 'băng tuyết', e: 'ice and snow' },
      { h: '窗台', p: 'chuāng tái', v: 'bệ cửa sổ', e: 'window sill, window ledge' },
      { h: '窗子', p: 'chuāng zi', v: 'cửa sổ', e: 'window' },
      { h: '打雷', p: 'dǎ léi', v: 'sấm, sét', e: 'to rumble with thunder, clap of thunder' },
      { h: '减', p: 'jiǎn', v: 'giảm, trừ', e: 'knock_down, derogate, cut, lessen, reduce, subtraction, diminish, reduction, decrease, dwindle, subt' },
      { h: '列车', p: 'liè chē', v: 'tàu hỏa', e: 'train' },
      { h: '培训班', p: 'péi xùn bān', v: 'lớp đào tạo', e: 'training class' },
      { h: '闪', p: 'shǎn', v: 'chớp sáng, né', e: 'sprain, get out of the way, wink, shine, leave behind, have mishap, twist, sparkle, dodge, flash' },
      { h: '晚点', p: 'wǎn diǎn', v: 'trễ giờ (tàu xe)', e: '(of trains etc) late, delayed, behind schedule, light dinner' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '窗台上摆着___。', options: ['鲜花', '冰雪', '列车'], answer: '鲜花' },
        { type: 'fill', sentence: '我在窗边___小植物。', options: ['种植', '投诉', '晚点'], answer: '种植' },
        { type: 'fill', sentence: '冬天空气很___。', options: ['干燥', '鲜花', '列车'], answer: '干燥' },
        { type: 'fill', sentence: '我坐___去外地。', options: ['列车', '鲜花', '窗台'], answer: '列车' },
        { type: 'fill', sentence: '车___了半小时。', options: ['晚点', '种植', '打雷'], answer: '晚点' }
      ],
      normal: [
        { type: 'fill', sentence: '窗外那棵___落了雪。', options: ['松树', '列车', '鲜花'], answer: '松树' },
        { type: 'fill', sentence: '到处是冰和___。', options: ['冰雪', '鲜花', '列车'], answer: '冰雪' },
        { type: 'fill', sentence: '天上___，要下雨了。', options: ['打雷', '种植', '投诉'], answer: '打雷' },
        { type: 'fill', sentence: '我去参加一个___学技术。', options: ['培训班', '松树', '冰雪'], answer: '培训班' },
        { type: 'order', words: ['列车', '晚点', '了', '半', '小时'], answer: '列车晚点了半小时' },
        { type: 'order', words: ['窗台', '上', '摆着', '鲜花'], answer: '窗台上摆着鲜花' },
        { type: 'fill', sentence: '闪电一___一闪。', options: ['闪', '减', '种植'], answer: '闪' }
      ],
      hard: [
        { type: 'fill', sentence: '有人打电话___列车晚点。', options: ['投诉', '减', '闪'], answer: '投诉' },
        { type: 'fill', sentence: '这期班的人数___了一半。', options: ['减', '投诉', '种植'], answer: '减' },
        { type: 'translate', prompt: 'Trên bệ cửa sổ bày hoa tươi.', answer: '窗台上摆着鲜花。' },
        { type: 'translate', prompt: 'Mùa đông vừa lạnh vừa khô.', answer: '冬天又冷又干燥。' },
        { type: 'translate', prompt: 'Tôi đi tàu đến tham gia lớp đào tạo.', answer: '我坐列车去参加培训班。' },
        { type: 'fill', sentence: '关上___，外面冷。', options: ['窗子', '列车', '鲜花'], answer: '窗子' }
      ]
    }
  }

});

// ───────────────────────────────────────────────────────
// BATCH 7 (tiếp) — Bài 152-154 (Động vật · Xã hội & sở thích) — kết HSK 4
// ───────────────────────────────────────────────────────
Object.assign(COURSE_DATA, {

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 152: Đọc thêm: Thế giới động vật (1) — 13 từ
  // ─────────────────────────────────────────────────────────────────────────
  152: {
    id: 152,
    level: 4,
    title: 'Đọc thêm: Thế giới động vật (1)',
    context: 'Mai đưa các em nhỏ đi sở thú, rồi về nhà chăm sóc em bị ốm. Một ngày vừa vui vừa đáng nhớ với muôn loài và những bài học chăm sóc sức khỏe.',
    vocabPreview: ['猴子', '老虎', '锻炼', '发烧', '祝贺'],
    objectives: [
      "Nắm nhóm từ khóa: 猴子 · 老虎 · 锻炼 · 发烧 · 祝贺",
      "Nghe hiểu và kể lại tình huống Đọc thêm: Thế giới động vật (1) bằng câu HSK 4",
      "Phân biệt cách dùng 猴子 · 老虎 · 锻炼",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "猴子 — con khỉ",
        explain: "Dùng 猴子 trong ngữ cảnh Đọc thêm: Thế giới động vật (1) để diễn đạt: con khỉ.",
        examples: [
          { zh: "动物园里有猴子和老虎，孩子们打扮得很可爱。", py: "Dòngwùyuán lǐ yǒu hóuzi hé lǎohǔ, háizimen dǎban de hěn kě'ài.", vi: "Sở thú có khỉ và hổ, bọn trẻ ăn mặc rất đáng yêu." }
        ] },
      { point: "老虎 — hổ",
        explain: "Dùng 老虎 trong ngữ cảnh Đọc thêm: Thế giới động vật (1) để diễn đạt: hổ.",
        examples: [
          { zh: "动物园里有猴子和老虎，孩子们打扮得很可爱。", py: "Dòngwùyuán lǐ yǒu hóuzi hé lǎohǔ, háizimen dǎban de hěn kě'ài.", vi: "Sở thú có khỉ và hổ, bọn trẻ ăn mặc rất đáng yêu." }
        ] },
      { point: "锻炼 — luyện tập",
        explain: "Dùng 锻炼 trong ngữ cảnh Đọc thêm: Thế giới động vật (1) để diễn đạt: luyện tập.",
        examples: [
          { zh: "弟弟发烧了，不是感冒，而是吃坏了肚子。表姐是法官，平时坚持锻炼。", py: "Dìdi fāshāo le, bú shì gǎnmào, érshì chī huài le dùzi. Biǎojiě shì fǎguān, píngshí jiānchí duànliàn.", vi: "Em trai bị sốt, không phải cảm, mà là ăn hỏng bụng. Chị họ là thẩm phán, bình thường luôn duy trì tập luyện." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Sở thú · Sáng', bg: 'street',
        cast: ['mai', 'xiaomei'],
        text: 'Mai đưa các em nhỏ đi sở thú chơi.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '动物园里有猴子和老虎，孩子们打扮得很可爱。',
        pinyin: 'Dòngwùyuán lǐ yǒu hóuzi hé lǎohǔ, háizimen dǎban de hěn kě\'ài.',
        meaning: 'Sở thú có khỉ và hổ, bọn trẻ ăn mặc rất đáng yêu.',
        expression: 'happy', vocab: ['猴子', '老虎', '打扮'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '老虎吼得太大声，我受不了。',
        pinyin: 'Lǎohǔ hǒu de tài dàshēng, wǒ shòu bù liǎo.',
        meaning: 'Hổ gầm to quá, tớ chịu không nổi.',
        expression: 'surprise', vocab: ['受不了'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '隔着玻璃看更安全，玻璃把我们和老虎隔开。',
        pinyin: 'Gézhe bōli kàn gèng ānquán, bōli bǎ wǒmen hé lǎohǔ gékāi.',
        meaning: 'Nhìn qua kính an toàn hơn, kính ngăn cách chúng ta với hổ.',
        expression: 'focused', vocab: ['隔'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '回家把水果放冰箱，发现一只虫子，箱子有点沉。',
        pinyin: 'Huí jiā bǎ shuǐguǒ fàng bīngxiāng, fāxiàn yì zhī chóngzi, xiāngzi yǒudiǎn chén.',
        meaning: 'Về nhà cho trái cây vào tủ lạnh, phát hiện một con sâu, cái thùng hơi nặng.',
        expression: 'curious', vocab: ['冰箱', '虫子', '沉'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '弟弟发烧了，不是感冒，而是吃坏了肚子。表姐是法官，平时坚持锻炼。',
        pinyin: 'Dìdi fāshāo le, bú shì gǎnmào, érshì chī huài le dùzi. Biǎojiě shì fǎguān, píngshí jiānchí duànliàn.',
        meaning: 'Em trai bị sốt, không phải cảm, mà là ăn hỏng bụng. Chị họ là thẩm phán, bình thường luôn duy trì tập luyện.',
        expression: 'sad', vocab: ['发烧', '而是', '法官', '锻炼'] },
      { type: 'choice', speaker: 'xiaomei', cast: ['mai', 'xiaomei'], bg: 'home',
        scene: '📍 Nhà Mai',
        expression: 'happy',
        q: 'Bạn vừa đoạt giải. Diễn đạt "Chúc mừng cậu đoạt giải" sao cho đúng?',
        options: [
          { text: '祝贺你得奖了！', pinyin: 'Zhùhè nǐ dé jiǎng le!', meaning: 'Chúc mừng cậu đoạt giải!', correct: true,
            feedback: 'Đúng! 祝贺 = chúc mừng.' },
          { text: '受不了你得奖了！', pinyin: 'Shòu bù liǎo nǐ dé jiǎng le!', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '受不了 = không chịu nổi, không hợp.' },
          { text: '沉你得奖了！', pinyin: 'Chén nǐ dé jiǎng le!', meaning: '(không thông)', correct: false,
            feedback: '沉 = chìm/nặng, không hợp.' }
        ], vocab: ['祝贺', '受不了', '沉'] },
      { type: 'checkpoint', questions: [
        { q: '“老虎” là con gì?', options: ['Con hổ', 'Con khỉ', 'Con sâu', 'Con cá'], answer: 0 },
        { q: '“祝贺你” nghĩa là?', options: ['Chúc mừng bạn', 'Xin lỗi bạn', 'Cảm ơn bạn', 'Tạm biệt bạn'], answer: 0 },
        { q: '“不是感冒，而是吃坏肚子” — “而是” nghĩa là?', options: ['Mà là', 'Bởi vì', 'Nếu', 'Tuy nhiên'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '打扮', p: 'dǎ ban', v: 'trang điểm, ăn mặc', e: 'to decorate' },
      { h: '猴子', p: 'hóu zi', v: 'con khỉ', e: 'monkey' },
      { h: '老虎', p: 'lǎo hǔ', v: 'hổ, cọp', e: 'tiger' },
      { h: '受不了', p: 'shòu bù liǎo', v: 'không chịu được', e: 'unbearable' },
      { h: '祝贺', p: 'zhù hè', v: 'chúc mừng', e: 'to congratulate' },
      { h: '冰箱', p: 'bīng xiāng', v: 'tủ lạnh', e: 'frig, electric refrigerator, fridge, freezer, refrigerator, deepfreeze, icebox, reefer, cooler, refr' },
      { h: '沉', p: 'chén', v: 'chìm, nặng', e: 'see 黑沉沉[hei1 chen1 chen1], to submerge, to immerse, to sink, to keep down, to lower, to drop, deep, ' },
      { h: '虫子', p: 'chóng zi', v: 'sâu bọ, côn trùng', e: 'insect, bug, worm, CL:條|条[tiao2],隻|只[zhi1]' },
      { h: '锻炼', p: 'duàn liàn', v: 'luyện tập, rèn luyện', e: 'to toughen, to temper, to engage in physical exercise, to work out, (fig.) to develop one\'s skills, ' },
      { h: '而是', p: 'ér shì', v: 'mà là', e: 'conj.: if not A, then B' },
      { h: '发烧', p: 'fā shāo', v: 'sốt (bệnh)', e: 'fever, kindle, feverish, temperature, run a temperature, run a fever, have a fever, have a temperatu' },
      { h: '法官', p: 'fǎ guān', v: 'thẩm phán, quan tòa', e: 'sentencer, Bench, judiciary, judgeship, bench, tippet, wig, justice, judicature, magistrate, court, ' },
      { h: '隔', p: 'gé', v: 'ngăn cách, cách nhau', e: 'separate, cut off, impede' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '动物园里有___和老虎。', options: ['猴子', '冰箱', '法官'], answer: '猴子' },
        { type: 'fill', sentence: '把水果放进___。', options: ['冰箱', '老虎', '虫子'], answer: '冰箱' },
        { type: 'fill', sentence: '弟弟___了，要看医生。', options: ['发烧', '打扮', '祝贺'], answer: '发烧' },
        { type: 'fill', sentence: '每天___身体才健康。', options: ['锻炼', '发烧', '隔'], answer: '锻炼' },
        { type: 'fill', sentence: '___你得奖了！', options: ['祝贺', '受不了', '沉'], answer: '祝贺' }
      ],
      normal: [
        { type: 'fill', sentence: '老虎吼得太大声，我___。', options: ['受不了', '祝贺', '打扮'], answer: '受不了' },
        { type: 'fill', sentence: '孩子们___得很可爱。', options: ['打扮', '发烧', '锻炼'], answer: '打扮' },
        { type: 'fill', sentence: '箱子里有东西，有点___。', options: ['沉', '隔', '打扮'], answer: '沉' },
        { type: 'fill', sentence: '我发现一只___。', options: ['虫子', '冰箱', '法官'], answer: '虫子' },
        { type: 'order', words: ['玻璃', '把', '我们', '和', '老虎', '隔开'], answer: '玻璃把我们和老虎隔开' },
        { type: 'order', words: ['每天', '坚持', '锻炼', '身体'], answer: '每天坚持锻炼身体' },
        { type: 'fill', sentence: '表姐是一位___。', options: ['法官', '虫子', '冰箱'], answer: '法官' }
      ],
      hard: [
        { type: 'fill', sentence: '不是感冒，___吃坏了肚子。', options: ['而是', '受不了', '沉'], answer: '而是' },
        { type: 'fill', sentence: '玻璃把我们和老虎___开。', options: ['隔', '沉', '打扮'], answer: '隔' },
        { type: 'translate', prompt: 'Sở thú có khỉ và hổ.', answer: '动物园里有猴子和老虎。' },
        { type: 'translate', prompt: 'Em trai bị sốt, không phải cảm, mà là ăn hỏng bụng.', answer: '弟弟发烧了，不是感冒，而是吃坏了肚子。' },
        { type: 'translate', prompt: 'Chúc mừng cậu đoạt giải!', answer: '祝贺你得奖了！' },
        { type: 'fill', sentence: '老虎吼声太大，我真___。', options: ['受不了', '祝贺', '隔'], answer: '受不了' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 153: Đọc thêm: Thế giới động vật (2) — 13 từ
  // ─────────────────────────────────────────────────────────────────────────
  153: {
    id: 153,
    level: 4,
    title: 'Đọc thêm: Thế giới động vật (2)',
    context: 'Trời trở lạnh, bà của Mai về quê dưỡng bệnh. Mai tìm hiểu phong tục các nơi, tập thể dục buổi sáng và hít thở không khí trong lành.',
    vocabPreview: ['降温', '疗养', '了解', '新鲜', '药物'],
    objectives: [
      "Nắm nhóm từ khóa: 降温 · 疗养 · 了解 · 新鲜 · 药物",
      "Nghe hiểu và kể lại tình huống Đọc thêm: Thế giới động vật (2) bằng câu HSK 4",
      "Phân biệt cách dùng 降温 · 疗养 · 了解",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "降温 — hạ nhiệt độ",
        explain: "Dùng 降温 trong ngữ cảnh Đọc thêm: Thế giới động vật (2) để diễn đạt: hạ nhiệt độ.",
        examples: [
          { zh: "天气降温了，奶奶去乡下疗养。", py: "Tiānqì jiàngwēn le, nǎinai qù xiāngxià liáoyǎng.", vi: "Thời tiết hạ nhiệt, bà về quê dưỡng bệnh." }
        ] },
      { point: "疗养 — dưỡng bệnh",
        explain: "Dùng 疗养 trong ngữ cảnh Đọc thêm: Thế giới động vật (2) để diễn đạt: dưỡng bệnh.",
        examples: [
          { zh: "天气降温了，奶奶去乡下疗养。", py: "Tiānqì jiàngwēn le, nǎinai qù xiāngxià liáoyǎng.", vi: "Thời tiết hạ nhiệt, bà về quê dưỡng bệnh." }
        ] },
      { point: "了解 — hiểu rõ",
        explain: "Dùng 了解 trong ngữ cảnh Đọc thêm: Thế giới động vật (2) để diễn đạt: hiểu rõ.",
        examples: [
          { zh: "我了解到各个地方的风俗都不同，很有意思。", py: "Wǒ liǎojiě dào gègè dìfang de fēngsú dōu bù tóng, hěn yǒuyìsi.", vi: "Tôi tìm hiểu được phong tục từng nơi đều khác nhau, rất thú vị." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Nhà Mai · Sáng', bg: 'home',
        cast: ['mai', 'mama'],
        text: 'Trời trở lạnh, bà của Mai về quê dưỡng bệnh.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '天气降温了，奶奶去乡下疗养。',
        pinyin: 'Tiānqì jiàngwēn le, nǎinai qù xiāngxià liáoyǎng.',
        meaning: 'Thời tiết hạ nhiệt, bà về quê dưỡng bệnh.',
        expression: 'curious', vocab: ['降温', '疗养'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '我了解到各个地方的风俗都不同，很有意思。',
        pinyin: 'Wǒ liǎojiě dào gègè dìfang de fēngsú dōu bù tóng, hěn yǒuyìsi.',
        meaning: 'Tôi tìm hiểu được phong tục từng nơi đều khác nhau, rất thú vị.',
        expression: 'happy', vocab: ['了解', '各个'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '房间在装修，把两个区域隔开了。',
        pinyin: 'Fángjiān zài zhuāngxiū, bǎ liǎng ge qūyù gékāi le.',
        meaning: 'Căn phòng đang sửa nội thất, ngăn cách hai khu vực ra.',
        expression: null, vocab: ['装修', '隔开'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '医生说这种药物既安全又有效。',
        pinyin: 'Yīshēng shuō zhè zhǒng yàowù jì ānquán yòu yǒuxiào.',
        meaning: 'Bác sĩ nói loại thuốc này vừa an toàn vừa hiệu quả.',
        expression: 'focused', vocab: ['药物', '既'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '早上做体操，呼吸新鲜空气，阳光透过窗户照进来。',
        pinyin: 'Zǎoshang zuò tǐcāo, hūxī xīnxiān kōngqì, yángguāng tòuguò chuānghu zhào jìnlái.',
        meaning: 'Buổi sáng tập thể dục, hít thở không khí trong lành, ánh nắng xuyên qua cửa sổ rọi vào.',
        expression: 'happy', vocab: ['体操', '新鲜', '透'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], bg: 'street',
        scene: '📍 Bên hồ',
        expression: 'happy',
        q: 'Cuối tuần đi chèo thuyền. Diễn đạt "Chúng tôi chèo thuyền trên hồ" sao cho đúng?',
        options: [
          { text: '我们在湖上划船。', pinyin: 'Wǒmen zài hú shàng huá chuán.', meaning: 'Chúng tôi chèo thuyền trên hồ.', correct: true,
            feedback: 'Đúng! 划 = chèo (thuyền).' },
          { text: '我们在湖上名人船。', pinyin: 'Wǒmen zài hú shàng míngrén chuán.', meaning: '(sai từ loại)', correct: false,
            feedback: '名人 = người nổi tiếng (danh từ), không hợp.' },
          { text: '我们在湖上透船。', pinyin: 'Wǒmen zài hú shàng tòu chuán.', meaning: '(không thông)', correct: false,
            feedback: '透 = xuyên qua, không hợp.' }
        ], vocab: ['划', '名人', '透'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '听说一位名人也来这里疗养，他很喜欢这里的安静。',
        pinyin: 'Tīngshuō yí wèi míngrén yě lái zhèlǐ liáoyǎng, tā hěn xǐhuan zhèlǐ de ānjìng.',
        meaning: 'Nghe nói một người nổi tiếng cũng đến đây dưỡng bệnh, ông ấy thích sự yên tĩnh ở đây.',
        expression: 'curious', vocab: ['名人'] },
      { type: 'checkpoint', questions: [
        { q: '“降温” nghĩa là?', options: ['Nhiệt độ giảm', 'Nhiệt độ tăng', 'Trời mưa', 'Trời nắng'], answer: 0 },
        { q: '“了解风俗” — “了解” nghĩa là?', options: ['Hiểu rõ', 'Quên', 'Nghi ngờ', 'Tránh'], answer: 0 },
        { q: '“在湖上划船” — “划” nghĩa là?', options: ['Chèo (thuyền)', 'Bơi', 'Lái xe', 'Leo'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '隔开', p: 'gé kāi', v: 'tách biệt, ngăn cách', e: 'to separate' },
      { h: '各个', p: 'gè gè', v: 'từng cái, các', e: 'every, various, separately, one by one' },
      { h: '划', p: 'huá', v: 'chèo (thuyền), vạch', e: 'to cut, to slash, to scratch (cut into the surface of sth), to strike (a match), to delimit, to tran' },
      { h: '既', p: 'jì', v: 'đã... lại, vừa... vừa', e: 'conj.: since...then' },
      { h: '降温', p: 'jiàng wēn', v: 'hạ nhiệt độ', e: 'to become cooler, to lower the temperature, cooling, (of interest, activity etc) to decline' },
      { h: '疗养', p: 'liáo yǎng', v: 'dưỡng bệnh, điều dưỡng', e: 'to get well, to heal, to recuperate, to convalesce, convalescence, to nurse' },
      { h: '了解', p: 'liǎo jiě', v: 'hiểu rõ, thấu hiểu', e: 'understand, comprehend, find out, acquaint oneself with' },
      { h: '名人', p: 'míng rén', v: 'người nổi tiếng, danh nhân', e: 'notability, luminary, celebrity, don, celeb, hotshot, lion, famous person, eminent peron, anybody, n' },
      { h: '体操', p: 'tǐ cāo', v: 'thể dục (môn)', e: 'jerk, physical exertion, workout, exercise, physical_exercise, gymnastic, calisthenics, exercising, ' },
      { h: '透', p: 'tòu', v: 'xuyên qua, thấu suốt', e: 'to penetrate, to pass through, thoroughly, completely, transparent, to appear, to show' },
      { h: '新鲜', p: 'xīn xiān', v: 'tươi mới', e: 'freshen, novel, fresh, new, strange' },
      { h: '药物', p: 'yào wù', v: 'thuốc, dược phẩm', e: 'healer, pharmic, medicine, druggery, curative, drug, pharmaceuticals, medicines, medicaments, medici' },
      { h: '装修', p: 'zhuāng xiū', v: 'sửa nội thất', e: 'repair, renovate (house/etc.), decorate, renovate (house, etc.), renovate, furnish, renovation, fit ' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '天气___了，要多穿衣服。', options: ['降温', '了解', '划'], answer: '降温' },
        { type: 'fill', sentence: '奶奶去乡下___身体。', options: ['疗养', '装修', '划'], answer: '疗养' },
        { type: 'fill', sentence: '我想___各地的风俗。', options: ['了解', '降温', '透'], answer: '了解' },
        { type: 'fill', sentence: '早上呼吸___空气。', options: ['新鲜', '名人', '既'], answer: '新鲜' },
        { type: 'fill', sentence: '这种___既安全又有效。', options: ['药物', '名人', '体操'], answer: '药物' }
      ],
      normal: [
        { type: 'fill', sentence: '房间在___，变得更漂亮。', options: ['装修', '降温', '划'], answer: '装修' },
        { type: 'fill', sentence: '墙把两个房间___了。', options: ['隔开', '了解', '透'], answer: '隔开' },
        { type: 'fill', sentence: '早上做___，身体更好。', options: ['体操', '名人', '药物'], answer: '体操' },
        { type: 'fill', sentence: '阳光___过窗户照进来。', options: ['透', '划', '既'], answer: '透' },
        { type: 'order', words: ['这', '种', '药物', '既', '安全', '又', '有效'], answer: '这种药物既安全又有效' },
        { type: 'order', words: ['我们', '在', '湖', '上', '划船'], answer: '我们在湖上划船' },
        { type: 'fill', sentence: '___地方的风俗都不同。', options: ['各个', '名人', '新鲜'], answer: '各个' }
      ],
      hard: [
        { type: 'fill', sentence: '我们在湖上___船。', options: ['划', '名人', '透'], answer: '划' },
        { type: 'fill', sentence: '一位___也来这里疗养。', options: ['名人', '药物', '体操'], answer: '名人' },
        { type: 'translate', prompt: 'Thời tiết hạ nhiệt, bà về quê dưỡng bệnh.', answer: '天气降温了，奶奶去乡下疗养。' },
        { type: 'translate', prompt: 'Tôi tìm hiểu được phong tục từng nơi đều khác nhau.', answer: '我了解到各个地方的风俗都不同。' },
        { type: 'translate', prompt: 'Buổi sáng tập thể dục, hít thở không khí trong lành.', answer: '早上做体操，呼吸新鲜空气。' },
        { type: 'fill', sentence: '这种药___安全又有效。', options: ['既', '透', '划'], answer: '既' }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BÀI 154: Đọc thêm: Con số, xã hội & sở thích — 23 từ
  // ─────────────────────────────────────────────────────────────────────────
  154: {
    id: 154,
    level: 4,
    title: 'Đọc thêm: Con số, xã hội & sở thích',
    context: 'Khép lại HSK 4, Mai tham gia hội thao của trường, gặp gỡ nhiều người thú vị và chia sẻ ước mơ trở thành nhà ngoại giao — sẵn sàng cho chặng đường HSK 5.',
    vocabPreview: ['运动会', '运动员', '外交官', '幽默', '预测'],
    objectives: [
      "Nắm nhóm từ khóa: 运动会 · 运动员 · 外交官 · 幽默 · 预测",
      "Nghe hiểu và kể lại tình huống Đọc thêm: Con số, xã hội & sở thích bằng câu HSK 4",
      "Phân biệt cách dùng 运动会 · 运动员 · 外交官",
      "Luyện vận dụng từ mới qua hội thoại, checkpoint và workbook của bài"
    ],
    grammarNotes: [
      { point: "运动会 — hội thao",
        explain: "Dùng 运动会 trong ngữ cảnh Đọc thêm: Con số, xã hội & sở thích để diễn đạt: hội thao.",
        examples: [
          { zh: "学校开运动会，运动员们打乒乓球、登山。", py: "Xuéxiào kāi yùndònghuì, yùndòngyuán men dǎ pīngpāngqiú, dēngshān.", vi: "Trường tổ chức hội thao, các vận động viên chơi bóng bàn, leo núi." }
        ] },
      { point: "运动员 — vận động viên",
        explain: "Dùng 运动员 trong ngữ cảnh Đọc thêm: Con số, xã hội & sở thích để diễn đạt: vận động viên.",
        examples: [
          { zh: "学校开运动会，运动员们打乒乓球、登山。", py: "Xuéxiào kāi yùndònghuì, yùndòngyuán men dǎ pīngpāngqiú, dēngshān.", vi: "Trường tổ chức hội thao, các vận động viên chơi bóng bàn, leo núi." }
        ] },
      { point: "外交官 — nhà ngoại giao",
        explain: "Dùng 外交官 trong ngữ cảnh Đọc thêm: Con số, xã hội & sở thích để diễn đạt: nhà ngoại giao.",
        examples: [
          { zh: "我梦想当外交官，懂法律，也了解各国文化。", py: "Wǒ mèngxiǎng dāng wàijiāoguān, dǒng fǎlǜ, yě liǎojiě gè guó wénhuà.", vi: "Em mơ ước làm nhà ngoại giao, hiểu pháp luật, cũng am hiểu văn hóa các nước." }
        ] }
    ],
    steps: [
      { type: 'dialogue', speaker: 'narrator', scene: '📍 Sân vận động · Sáng', bg: 'campus',
        cast: ['mai', 'xiaomei'],
        text: 'Trường tổ chức hội thao, khép lại một mùa hè đáng nhớ.',
        pinyin: '', meaning: '', vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '学校开运动会，运动员们打乒乓球、登山。',
        pinyin: 'Xuéxiào kāi yùndònghuì, yùndòngyuán men dǎ pīngpāngqiú, dēngshān.',
        meaning: 'Trường tổ chức hội thao, các vận động viên chơi bóng bàn, leo núi.',
        expression: 'happy', vocab: ['运动会', '运动员', '乒乓球', '登山'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '观众分为两组，人数是去年的两倍。',
        pinyin: 'Guānzhòng fēnwéi liǎng zǔ, rénshù shì qùnián de liǎng bèi.',
        meaning: 'Khán giả chia làm hai nhóm, số người gấp đôi năm ngoái.',
        expression: 'curious', vocab: ['分为', '倍'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '三分之一的人坐大巴来，场面五颜六色。',
        pinyin: 'Sān fēn zhī yī de rén zuò dàbā lái, chǎngmiàn wǔyán-liùsè.',
        meaning: 'Một phần ba số người đi xe khách đến, khung cảnh muôn màu muôn sắc.',
        expression: 'happy', vocab: ['分之', '大巴', '五颜六色'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这位诗人很幽默，对人也很有礼貌。',
        pinyin: 'Zhè wèi shīrén hěn yōumò, duì rén yě hěn yǒu lǐmào.',
        meaning: 'Nhà thơ này rất hài hước, đối với mọi người cũng rất lịch sự.',
        expression: 'happy', vocab: ['诗人', '幽默', '礼貌'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['mai', 'laoli'],
        text: '我下周要出差，去参加一个大会。',
        pinyin: 'Wǒ xià zhōu yào chūchāi, qù cānjiā yí ge dàhuì.',
        meaning: 'Tuần sau thầy phải đi công tác, dự một hội nghị lớn.',
        expression: null, vocab: ['出差', '大会'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'laoli'],
        text: '我梦想当外交官，懂法律，也了解各国文化。',
        pinyin: 'Wǒ mèngxiǎng dāng wàijiāoguān, dǒng fǎlǜ, yě liǎojiě gè guó wénhuà.',
        meaning: 'Em mơ ước làm nhà ngoại giao, hiểu pháp luật, cũng am hiểu văn hóa các nước.',
        expression: 'focused', vocab: ['外交官', '法律'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'laoli'], bg: 'campus',
        scene: '📍 Sân vận động',
        expression: 'focused',
        q: 'Nói về tương lai. Diễn đạt "Họ dự đoán công nghệ kiểu mới sẽ thay đổi cuộc sống" sao cho đúng?',
        options: [
          { text: '他们预测新型技术会改变生活。', pinyin: 'Tāmen yùcè xīnxíng jìshù huì gǎibiàn shēnghuó.', meaning: 'Họ dự đoán công nghệ kiểu mới sẽ thay đổi cuộc sống.', correct: true,
            feedback: 'Đúng! 预测 = dự đoán; 新型 = kiểu mới.' },
          { text: '他们移新型技术会改变生活。', pinyin: 'Tāmen yí xīnxíng jìshù huì gǎibiàn shēnghuó.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '移 = di chuyển, không hợp.' },
          { text: '他们反新型技术会改变生活。', pinyin: 'Tāmen fǎn xīnxíng jìshù huì gǎibiàn shēnghuó.', meaning: '(không hợp nghĩa)', correct: false,
            feedback: '反 = chống lại/ngược, không hợp.' }
        ], vocab: ['预测', '新型', '移', '反'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '这台机器构造复杂，把零件移一移就好。红色是我最爱的颜色之一，我反对浪费。HSK 4 结束了，下一站，HSK 5！',
        pinyin: 'Zhè tái jīqì gòuzào fùzá, bǎ língjiàn yí yi yí jiù hǎo. Hóngsè shì wǒ zuì ài de yánsè zhī yī, wǒ fǎnduì làngfèi. HSK 4 jiéshù le, xià yí zhàn, HSK 5!',
        meaning: 'Máy này cấu tạo phức tạp, dịch linh kiện một chút là được. Màu đỏ là một trong những màu tôi thích nhất, tôi phản đối lãng phí. HSK 4 kết thúc rồi, chặng tiếp theo, HSK 5!',
        expression: 'happy', vocab: ['构造', '移', '色', '之一', '反'] },
      { type: 'checkpoint', questions: [
        { q: '“运动员” là ai?', options: ['Vận động viên', 'Khán giả', 'Nhà thơ', 'Nhà ngoại giao'], answer: 0 },
        { q: '“五颜六色” nghĩa là?', options: ['Muôn màu muôn sắc', 'Đen trắng', 'Một màu', 'Nhạt nhòa'], answer: 0 },
        { q: '“他们预测未来” — “预测” nghĩa là?', options: ['Dự đoán', 'Phản đối', 'Di chuyển', 'Lịch sự'], answer: 0 }
      ] }
    ],
    vocab: [
      { h: '倍', p: 'bèi', v: 'lần, gấp', e: 'times, -fold (multiplier)' },
      { h: '分之', p: 'fēn zhī', v: '(phân số) phần', e: '(fraction marker, e.g. 三分之一 = one-third)' },
      { h: '分为', p: 'fēn wéi', v: 'chia thành, phân thành', e: 'divide ... into, fall_into, divide(into)' },
      { h: '构造', p: 'gòu zào', v: 'cấu tạo, kết cấu', e: 'constitution, configuration, make-up, build, anatomy, construction, structure, tectonic, fabric, com' },
      { h: '移', p: 'yí', v: 'di chuyển, dịch', e: 'removal, alteration, transform, shift, remove, movement, alter, change, move' },
      { h: '预测', p: 'yù cè', v: 'dự đoán, dự báo', e: 'calculate, forecast' },
      { h: '之一', p: 'zhī yī', v: 'một trong số', e: 'one of (sth), one out of a multitude, one (third, quarter, percent etc)' },
      { h: '出差', p: 'chū chāi', v: 'đi công tác', e: 'to go on an official or business trip' },
      { h: '法律', p: 'fǎ lǜ', v: 'pháp luật', e: 'law' },
      { h: '礼貌', p: 'lǐ mào', v: 'lịch sự', e: 'courtesy' },
      { h: '大会', p: 'dà huì', v: 'đại hội, hội nghị lớn', e: 'synod, moot, conference, plenary meeting, congress, rally, plenum, mass meeting, plenary session' },
      { h: '反', p: 'fǎn', v: 'chống lại, ngược lại', e: 'counter, revolt, rebel, oppose, combat' },
      { h: '外交官', p: 'wài jiāo guān', v: 'nhà ngoại giao', e: 'diplomat' },
      { h: '乒乓球', p: 'pīng pāng qiú', v: 'bóng bàn', e: 'table tennis' },
      { h: '大巴', p: 'dà bā', v: 'xe khách lớn', e: 'a big coach, tourist bus' },
      { h: '登山', p: 'dēng shān', v: 'leo núi', e: 'engage in mountain-climbing, sport' },
      { h: '运动会', p: 'yùn dòng huì', v: 'hội thao, đại hội thể thao', e: 'sports meeting, sport, gymkhana, athletic meeting, fixture, gate, game, sports meet, games, sports_m' },
      { h: '运动员', p: 'yùn dòng yuán', v: 'vận động viên', e: 'athlete, CL:名[ming2],個|个[ge4]' },
      { h: '色', p: 'sè', v: 'màu sắc', e: 'color, CL:種|种[zhong3], look, appearance, sex, color, dice' },
      { h: '五颜六色', p: 'wǔ yán liù sè', v: 'muôn màu muôn sắc', e: 'multi-colored, every color under the sun' },
      { h: '诗人', p: 'shī rén', v: 'nhà thơ, thi sĩ', e: 'muse, rhymist, swan, lark, Parnassus, Maker, minstrel, harmonist, metrist, maker, bulbul, songster, ' },
      { h: '新型', p: 'xīn xíng', v: 'loại mới, kiểu mới', e: 'pattern, novelty, of new type' },
      { h: '幽默', p: 'yōu mò', v: 'hài hước', e: 'humor' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '学校开___，大家很兴奋。', options: ['运动会', '外交官', '诗人'], answer: '运动会' },
        { type: 'fill', sentence: '___们在比赛。', options: ['运动员', '法律', '大会'], answer: '运动员' },
        { type: 'fill', sentence: '我们一起打___。', options: ['乒乓球', '法律', '构造'], answer: '乒乓球' },
        { type: 'fill', sentence: '周末我们去___。', options: ['登山', '出差', '预测'], answer: '登山' },
        { type: 'fill', sentence: '他很___，常逗大家笑。', options: ['幽默', '法律', '构造'], answer: '幽默' }
      ],
      normal: [
        { type: 'fill', sentence: '人数是去年的两___。', options: ['倍', '色', '反'], answer: '倍' },
        { type: 'fill', sentence: '观众___两组。', options: ['分为', '预测', '出差'], answer: '分为' },
        { type: 'fill', sentence: '对人要有___。', options: ['礼貌', '构造', '法律'], answer: '礼貌' },
        { type: 'fill', sentence: '老师下周要___，参加大会。', options: ['出差', '登山', '移'], answer: '出差' },
        { type: 'order', words: ['场面', '五颜六色', '非常', '热闹'], answer: '场面五颜六色非常热闹' },
        { type: 'order', words: ['我', '梦想', '当', '外交官'], answer: '我梦想当外交官' },
        { type: 'fill', sentence: '懂___才能保护自己。', options: ['法律', '色', '倍'], answer: '法律' }
      ],
      hard: [
        { type: 'fill', sentence: '他们___新型技术会改变生活。', options: ['预测', '移', '反'], answer: '预测' },
        { type: 'fill', sentence: '红色是我最爱的颜色___。', options: ['之一', '分之', '倍'], answer: '之一' },
        { type: 'translate', prompt: 'Trường tổ chức hội thao, các vận động viên chơi bóng bàn.', answer: '学校开运动会，运动员们打乒乓球。' },
        { type: 'translate', prompt: 'Em mơ ước làm nhà ngoại giao, hiểu pháp luật.', answer: '我梦想当外交官，懂法律。' },
        { type: 'translate', prompt: 'Khán giả chia làm hai nhóm, số người gấp đôi năm ngoái.', answer: '观众分为两组，人数是去年的两倍。' },
        { type: 'fill', sentence: '这台机器___复杂。', options: ['构造', '礼貌', '法律'], answer: '构造' }
      ]
    }
  }

});
