// ═══════════════════════════════════════════════════════════════════════════
// course-hsk5.js — Giáo trình Mai HSK 5 «Du học Bắc Kinh» (Phase P, Pro-gated)
// Bài 155–214 (60 bài, 1337 từ — nguồn HSK3_DATA[5]). Pro-gate tự động (level≥3).
// Coverage map: content/curriculum/mai-hsk5-coverage-map.md
//               + scripts/_hsk5_lessons.json (verify: scripts/mai-hsk5-verify.js)
// var-style Object.assign(COURSE_DATA, {...}); load tuần tự sau course-hsk4.js
// (bundle 'course' trong js/data-loader.js). Mỗi lesson level:5.
//
// SEED B0 (2026-06-13): mới Bài 155 = golden sample (verify node OK, 18/18 vocab).
// Batch B1–B5 append 156–214 theo golden sample (xem 05-hsk5.md §Build order).
// ═══════════════════════════════════════════════════════════════════════════
Object.assign(COURSE_DATA, {

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 155: Ngày lên đường (出发的那一天)
  // ───────────────────────────────────────────────────────────────────────
  155: {
    id: 155,
    level: 5,
    title: 'Ngày lên đường',
    context: 'Ngày Mai rời Việt Nam sang Bắc Kinh du học theo học bổng. Mẹ tiễn em ra sân bay, Tiểu Mỹ chờ sẵn ở đầu kia — và đêm đầu tiên nơi ký túc xá xa lạ.',
    vocabPreview: ['登机牌','舍不得','独立','期待','宿舍'],
    objectives: [
      'Diễn đạt cảm xúc chia xa: 舍不得 · 想念 · 寂寞',
      'Nói về khởi đầu tự lập: 独立 · 期待 · 勇气',
      'Dùng đúng cặp 不仅…而且… và 即使…也…',
      'Kể lại hành trình bay: 乘车 · 登机牌 · 降落'
    ],
    grammarNotes: [
      { point: '不仅 A，而且 B — "không những A mà còn B"',
        explain: 'Nâng cấp của 不但…而且 (HSK 3). Hai vế cùng chủ ngữ thì 不仅 đứng sau chủ ngữ; khác chủ ngữ thì đứng trước. ĐÃ mở 不仅 PHẢI có 而且/还 ở vế sau.',
        examples: [
          { zh: '你不仅要照顾好自己，而且要好好学习。', py: 'Nǐ bùjǐn yào zhàogù hǎo zìjǐ, érqiě yào hǎohǎo xuéxí.', vi: 'Con không những phải tự chăm sóc tốt, mà còn phải học hành chăm chỉ.' },
          { zh: '北京不仅很大，而且很漂亮。', py: 'Běijīng bùjǐn hěn dà, érqiě hěn piàoliang.', vi: 'Bắc Kinh không những rất rộng mà còn rất đẹp.' }
        ] },
      { point: '即使…也… — "cho dù… vẫn…"',
        explain: 'Giả định nhượng bộ: vế 即使 nêu tình huống (kể cả chưa xảy ra), vế sau dùng 也 khẳng định kết quả không đổi. Khác 虽然…但是 (sự việc CÓ thật).',
        examples: [
          { zh: '即使想念家人，我也不会放弃。', py: 'Jíshǐ xiǎngniàn jiārén, wǒ yě bú huì fàngqì.', vi: 'Cho dù nhớ người thân, tôi cũng sẽ không bỏ cuộc.' },
          { zh: '即使遇到困难，我们也要坚持。', py: 'Jíshǐ yùdào kùnnan, wǒmen yě yào jiānchí.', vi: 'Cho dù gặp khó khăn, chúng ta vẫn phải kiên trì.' }
        ] },
      { point: '对…来说 — "đối với… mà nói"',
        explain: 'Nêu góc nhìn/người đánh giá trước khi nhận xét. Đứng đầu câu hoặc sau chủ ngữ.',
        examples: [
          { zh: '对我来说，独立生活是一个新的开始。', py: 'Duì wǒ lái shuō, dúlì shēnghuó shì yí ge xīn de kāishǐ.', vi: 'Đối với em mà nói, sống tự lập là một khởi đầu mới.' },
          { zh: '对妈妈来说，女儿的健康最重要。', py: 'Duì māma lái shuō, nǚ’ér de jiànkāng zuì zhòngyào.', vi: 'Đối với mẹ, sức khỏe của con gái là quan trọng nhất.' }
        ] }
    ],
    steps: [
      // ── Cảnh 1: Sáng sớm ở nhà — chia tay mẹ ─────────────
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Nhà Mai · Sáng sớm ngày lên đường', bg: 'home',
        cast: ['mama', 'mai'],
        text: 'Hôm nay Mai lên đường sang Bắc Kinh du học. Mẹ giúp em soạn nốt hành lý.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'mama', cast: ['mama', 'mai'],
        text: '东西都准备好了吗？多带一点衣服，北京很冷。',
        pinyin: 'Dōngxi dōu zhǔnbèi hǎo le ma? Duō dài yìdiǎn yīfu, Běijīng hěn lěng.',
        meaning: 'Đồ đạc chuẩn bị xong cả chưa? Mang thêm chút quần áo, Bắc Kinh lạnh lắm.',
        expression: null, vocab: []
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mama', 'mai'],
        text: '都准备好了，妈妈，您别担心。',
        pinyin: 'Dōu zhǔnbèi hǎo le, māma, nín bié dānxīn.',
        meaning: 'Xong hết rồi mẹ ạ, mẹ đừng lo.',
        expression: 'happy', vocab: []
      },
      {
        type: 'dialogue', speaker: 'mama', cast: ['mama', 'mai'],
        text: '你第一次一个人去这么远的地方，妈妈真舍不得你。',
        pinyin: 'Nǐ dì yī cì yí ge rén qù zhème yuǎn de dìfang, māma zhēn shě bu de nǐ.',
        meaning: 'Lần đầu con đi xa một mình thế này, mẹ thật không nỡ xa con.',
        expression: null, vocab: ['舍不得']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mama', 'mai'],
        text: '妈妈，我也舍不得您。可是对我来说，独立生活是一个新的开始。',
        pinyin: 'Māma, wǒ yě shě bu de nín. Kěshì duì wǒ lái shuō, dúlì shēnghuó shì yí ge xīn de kāishǐ.',
        meaning: 'Mẹ ơi, con cũng không nỡ xa mẹ. Nhưng với con, sống tự lập là một khởi đầu mới.',
        expression: 'sad', vocab: ['独立']
      },
      {
        type: 'dialogue', speaker: 'mama', cast: ['mama', 'mai'],
        text: '说得对。你不仅要照顾好自己，而且要好好学习。',
        pinyin: 'Shuō de duì. Nǐ bùjǐn yào zhàogù hǎo zìjǐ, érqiě yào hǎohǎo xuéxí.',
        meaning: 'Con nói đúng. Con không những phải tự chăm sóc tốt, mà còn phải học hành chăm chỉ.',
        expression: null, vocab: []
      },
      {
        type: 'dialogue', speaker: 'mama', cast: ['mama', 'mai'],
        text: '来，让妈妈拥抱你一下。祝福你，我的女儿！',
        pinyin: 'Lái, ràng māma yōngbào nǐ yíxià. Zhùfú nǐ, wǒ de nǚ’ér!',
        meaning: 'Lại đây, để mẹ ôm con một cái. Chúc phúc cho con, con gái của mẹ!',
        expression: null, vocab: ['拥抱', '祝福']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mama', 'mai'],
        text: '谢谢妈妈！我会想念您的。',
        pinyin: 'Xièxie māma! Wǒ huì xiǎngniàn nín de.',
        meaning: 'Con cảm ơn mẹ! Con sẽ nhớ mẹ lắm.',
        expression: 'sad', vocab: ['想念']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mama', 'mai'], bg: 'home',
        scene: '📍 Nhà Mai · Sáng sớm ngày lên đường',
        expression: 'focused',
        q: 'Mai muốn nói với mẹ: "Cho dù nhớ người thân, con cũng sẽ không bỏ cuộc." Câu nào đúng?',
        options: [
          { text: '即使想念家人，我也不会放弃。', pinyin: 'Jíshǐ xiǎngniàn jiārén, wǒ yě bú huì fàngqì.',
            meaning: 'Cho dù nhớ người thân, con cũng sẽ không bỏ cuộc.', correct: true,
            feedback: 'Đúng! 即使…也… = "cho dù… vẫn…" — giả định nhượng bộ, vế sau bắt buộc có 也.' },
          { text: '因为想念家人，所以我不会放弃。', pinyin: 'Yīnwèi xiǎngniàn jiārén, suǒyǐ wǒ bú huì fàngqì.',
            meaning: '(Vì nhớ người thân nên không bỏ cuộc — sai logic)', correct: false,
            feedback: 'Chưa đúng — 因为…所以 chỉ nguyên nhân→kết quả thật; ý "cho dù… vẫn…" phải dùng 即使…也.' },
          { text: '虽然想念家人，我不会放弃。', pinyin: 'Suīrán xiǎngniàn jiārén, wǒ bú huì fàngqì.',
            meaning: '(thiếu vế sau)', correct: false,
            feedback: 'Chưa đúng — đã mở 虽然 thì vế sau phải có 但是/还是: 虽然…，但是我不会放弃。' }
        ]
      },
      // ── Cảnh 2: Ra sân bay ───────────────────────────────
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Trên xe ra sân bay', bg: 'street',
        cast: ['mai', 'xiaomei'],
        text: 'Hai mẹ con bắt xe ra sân bay. Trên đường đi, Tiểu Mỹ gọi video đến.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: 'Mai！你现在在哪儿？我在北京等你呢！',
        pinyin: 'Mai! Nǐ xiànzài zài nǎr? Wǒ zài Běijīng děng nǐ ne!',
        meaning: 'Mai! Cậu đang ở đâu rồi? Tớ đang đợi cậu ở Bắc Kinh đây!',
        expression: 'happy', vocab: []
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我们正在乘车去机场，是下午的飞机。',
        pinyin: 'Wǒmen zhèngzài chéng chē qù jīchǎng, shì xiàwǔ de fēijī.',
        meaning: 'Bọn tớ đang đi xe ra sân bay, chuyến bay buổi chiều.',
        expression: 'happy', vocab: ['乘车']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '太好了！明天我带你去看学校的宿舍。',
        pinyin: 'Tài hǎo le! Míngtiān wǒ dài nǐ qù kàn xuéxiào de sùshè.',
        meaning: 'Tuyệt quá! Mai tớ dẫn cậu đi xem ký túc xá của trường.',
        expression: null, vocab: ['宿舍']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好啊！我很期待我们的新生活！',
        pinyin: 'Hǎo a! Wǒ hěn qīdài wǒmen de xīn shēnghuó!',
        meaning: 'Được đó! Tớ rất mong đợi cuộc sống mới của bọn mình!',
        expression: 'happy', vocab: ['期待']
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Sân bay · Quầy làm thủ tục', bg: 'airport',
        cast: ['mama', 'mai'],
        text: 'Đến sân bay, Mai làm thủ tục và nhận thẻ lên máy bay. Giây phút chia tay đã đến.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mama', 'mai'],
        text: '登机牌拿到了。妈妈，我要进去了。',
        pinyin: 'Dēngjīpái ná dào le. Māma, wǒ yào jìnqù le.',
        meaning: 'Con lấy thẻ lên máy bay rồi. Mẹ ơi, con phải vào trong đây.',
        expression: 'sad', vocab: ['登机牌']
      },
      {
        type: 'dialogue', speaker: 'mama', cast: ['mama', 'mai'],
        text: '去吧，孩子。别难过，这不是遗憾，是新的开始！',
        pinyin: 'Qù ba, háizi. Bié nánguò, zhè bú shì yíhàn, shì xīn de kāishǐ!',
        meaning: 'Đi đi con. Đừng buồn, đây không phải điều tiếc nuối, mà là một khởi đầu mới!',
        expression: null, vocab: ['遗憾']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mama', 'mai'],
        text: '嗯！我不怕，我有勇气！再见，妈妈！',
        pinyin: 'Ǹg! Wǒ bú pà, wǒ yǒu yǒngqì! Zàijiàn, māma!',
        meaning: 'Vâng! Con không sợ, con có dũng khí mà! Tạm biệt mẹ!',
        expression: 'focused', vocab: ['勇气']
      },
      // ── Cảnh 3: Bắc Kinh — ký túc xá, đêm đầu tiên ──────
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Ký túc xá Bắc Kinh · Tối', bg: 'dorm-room',
        cast: ['xiaomei', 'mai'],
        text: 'Mấy tiếng sau, máy bay hạ cánh xuống Bắc Kinh. Tiểu Mỹ đón Mai về ký túc xá.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['xiaomei', 'mai'],
        text: '飞机降落的时候，你紧张吗？',
        pinyin: 'Fēijī jiàngluò de shíhou, nǐ jǐnzhāng ma?',
        meaning: 'Lúc máy bay hạ cánh, cậu có hồi hộp không?',
        expression: 'happy', vocab: ['降落']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['xiaomei', 'mai'],
        text: '有一点儿。这里的一切都很陌生，可是也很有意思。',
        pinyin: 'Yǒu yìdiǎnr. Zhèlǐ de yíqiè dōu hěn mòshēng, kěshì yě hěn yǒu yìsi.',
        meaning: 'Hơi hơi. Mọi thứ ở đây đều xa lạ, nhưng cũng thú vị lắm.',
        expression: 'curious', vocab: ['陌生']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['xiaomei', 'mai'],
        text: '这是你的宿舍。对了，和你住在一起的同学叫安娜。',
        pinyin: 'Zhè shì nǐ de sùshè. Duì le, hé nǐ zhù zài yìqǐ de tóngxué jiào Ānnà.',
        meaning: 'Đây là ký túc xá của cậu. À đúng rồi, bạn ở cùng phòng cậu tên là Anna.',
        expression: null, vocab: []
      },
      {
        type: 'dialogue', speaker: 'anna', cast: ['xiaomei', 'mai', 'anna'],
        text: '你好！我叫安娜。欢迎你！',
        pinyin: 'Nǐ hǎo! Wǒ jiào Ānnà. Huānyíng nǐ!',
        meaning: 'Chào cậu! Mình là Anna. Chào mừng cậu nhé!',
        expression: null, vocab: []
      },
      {
        type: 'choice', speaker: 'mai', cast: ['mai'], bg: 'dorm-room',
        scene: '📍 Ký túc xá · Đêm đầu tiên',
        expression: 'sad',
        q: 'Đêm đầu xa nhà, Mai muốn viết: "Đêm đầu tiên, mình thấy hơi cô đơn." Câu nào đúng?',
        options: [
          { text: '第一个晚上，我觉得有点儿寂寞。', pinyin: 'Dì yī ge wǎnshang, wǒ juéde yǒudiǎnr jìmò.',
            meaning: 'Đêm đầu tiên, mình thấy hơi cô đơn.', correct: true,
            feedback: 'Đúng! 有点儿 + tính từ (cảm xúc tiêu cực nhẹ) — 寂寞 = cô đơn.' },
          { text: '第一个晚上，我觉得很热闹。', pinyin: 'Dì yī ge wǎnshang, wǒ juéde hěn rènao.',
            meaning: '(náo nhiệt — ngược nghĩa)', correct: false,
            feedback: 'Chưa đúng — 热闹 = náo nhiệt đông vui, ngược với cảm giác cô đơn của Mai.' },
          { text: '第一个晚上，我寂寞得很想。', pinyin: 'Dì yī ge wǎnshang, wǒ jìmò de hěn xiǎng.',
            meaning: '(sai cấu trúc)', correct: false,
            feedback: 'Chưa đúng — 得 cần bổ ngữ hoàn chỉnh phía sau; nói đơn giản: 我觉得有点儿寂寞.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '晚上，我有点儿想家，觉得有点儿寂寞。',
        pinyin: 'Wǎnshang, wǒ yǒudiǎnr xiǎng jiā, juéde yǒudiǎnr jìmò.',
        meaning: 'Buổi tối, mình hơi nhớ nhà, thấy hơi cô đơn.',
        expression: 'sad', vocab: ['寂寞']
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Ký túc xá · Gọi video về nhà', bg: 'dorm-room',
        cast: ['mai', 'mama'],
        text: 'Mai gọi video về nhà. Màn hình hiện lên khuôn mặt quen thuộc của mẹ.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'mama', cast: ['mai', 'mama'],
        text: '怎么样？妈妈做的点心，你分享给新同学了吗？',
        pinyin: 'Zěnmeyàng? Māma zuò de diǎnxin, nǐ fēnxiǎng gěi xīn tóngxué le ma?',
        meaning: 'Thế nào rồi con? Bánh mẹ làm, con chia cho bạn mới chưa?',
        expression: null, vocab: ['分享']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai', 'mama'],
        text: '分享了！安娜说很好吃。妈妈，您放心，我一切都好。',
        pinyin: 'Fēnxiǎng le! Ānnà shuō hěn hǎochī. Māma, nín fàngxīn, wǒ yíqiè dōu hǎo.',
        meaning: 'Con chia rồi! Anna khen ngon lắm. Mẹ yên tâm, con ổn cả.',
        expression: 'happy', vocab: []
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['mai'],
        text: '（信息）Mai，到北京了吗？一切都好吗？',
        pinyin: '(Xìnxī) Mai, dào Běijīng le ma? Yíqiè dōu hǎo ma?',
        meaning: '(Tin nhắn) Mai, em đến Bắc Kinh chưa? Mọi thứ ổn cả chứ?',
        expression: null, vocab: []
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '我马上回信：敬爱的李老师，我到了！北京不仅很大，而且很漂亮！',
        pinyin: 'Wǒ mǎshàng huí xìn: jìng’ài de Lǐ lǎoshī, wǒ dào le! Běijīng bùjǐn hěn dà, érqiě hěn piàoliang!',
        meaning: 'Mình trả lời ngay: "Thầy Lý kính yêu, em đến nơi rồi! Bắc Kinh không những rộng mà còn rất đẹp!"',
        expression: 'happy', vocab: ['敬爱']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '妈妈的话最能安慰我。我为自己的决定感到自豪！',
        pinyin: 'Māma de huà zuì néng ānwèi wǒ. Wǒ wèi zìjǐ de juédìng gǎndào zìháo!',
        meaning: 'Lời mẹ luôn an ủi mình nhất. Mình tự hào về quyết định của bản thân!',
        expression: 'focused', vocab: ['安慰', '自豪']
      },
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Ký túc xá · Khuya', bg: 'dorm-room',
        cast: ['mai'],
        text: 'Mai viết dòng nhật ký đầu tiên ở Bắc Kinh: "Cuộc sống tự lập bắt đầu rồi!" — Ngày mai, em sẽ gặp giáo sư hướng dẫn, thầy Cao nổi tiếng nghiêm khắc…',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: 'Vì sao mẹ Mai buồn khi tiễn con?',
            options: ['Vì mẹ 舍不得 Mai', 'Vì Mai quên 登机牌', 'Vì máy bay 降落 muộn', 'Vì 宿舍 quá xa'],
            answer: 0
          },
          {
            q: 'Điền cặp đúng: 你___要照顾好自己，___要好好学习。',
            options: ['不仅 / 而且', '因为 / 所以', '虽然 / 但是', '即使 / 也'],
            answer: 0
          },
          {
            q: '"陌生" nghĩa là gì?',
            options: ['xa lạ, không quen', 'quen thuộc', 'cô đơn', 'tự hào'],
            answer: 0
          }
        ]
      }
    ],
    vocab: [
      { h: '登机牌', p: 'dēng jī pái', v: 'thẻ lên máy bay', e: 'boarding pass' },
      { h: '舍不得', p: 'shě bu de', v: 'không nỡ, tiếc không muốn', e: 'to hate to part with' },
      { h: '拥抱', p: 'yōng bào', v: 'ôm, ôm chặt', e: 'to embrace' },
      { h: '祝福', p: 'zhù fú', v: 'chúc phúc, chúc lành', e: 'blessings' },
      { h: '勇气', p: 'yǒng qì', v: 'lòng can đảm, dũng khí', e: 'courage' },
      { h: '期待', p: 'qī dài', v: 'mong đợi, kỳ vọng', e: 'to look forward to' },
      { h: '独立', p: 'dú lì', v: 'độc lập', e: 'independent' },
      { h: '安慰', p: 'ān wèi', v: 'an ủi', e: 'to comfort' },
      { h: '想念', p: 'xiǎng niàn', v: 'nhớ (ai đó)', e: 'to miss' },
      { h: '陌生', p: 'mò shēng', v: 'xa lạ, không quen', e: 'strange, unfamiliar' },
      { h: '宿舍', p: 'sù shè', v: 'ký túc xá, nhà ở tập thể', e: 'dormitory' },
      { h: '降落', p: 'jiàng luò', v: 'hạ cánh, đáp xuống', e: 'to land, to descend' },
      { h: '寂寞', p: 'jì mò', v: 'cô đơn, buồn tẻ', e: 'lonely' },
      { h: '自豪', p: 'zì háo', v: 'tự hào', e: 'proud' },
      { h: '分享', p: 'fēnxiǎng', v: 'chia sẻ, cùng hưởng', e: 'to share' },
      { h: '乘车', p: 'chéng chē', v: 'đi xe, lên xe', e: 'to ride (a vehicle)' },
      { h: '遗憾', p: 'yí hàn', v: 'tiếc nuối, đáng tiếc', e: 'regret, pity' },
      { h: '敬爱', p: 'jìng ài', v: 'kính yêu', e: 'to respect and love' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我拿到___了，要上飞机了。', options: ['登机牌','宿舍','勇气'], answer: '登机牌',
          explain: '登机牌 (dēngjīpái) = thẻ lên máy bay — nhận ở quầy thủ tục sân bay.' },
        { type: 'fill', sentence: '妈妈真___你离开家。', options: ['舍不得','想念','期待'], answer: '舍不得',
          explain: '舍不得 + động từ = không nỡ làm gì. 想念 là "nhớ" (sau khi đã xa).' },
        { type: 'fill', sentence: '我住在学校的___里。', options: ['宿舍','登机牌','勇气'], answer: '宿舍',
          explain: '宿舍 (sùshè) = ký túc xá — nơi ở trong trường.' },
        { type: 'fill', sentence: '飞机在北京___了。', options: ['降落','拥抱','分享'], answer: '降落',
          explain: '降落 (jiàngluò) = hạ cánh, dùng cho máy bay.' },
        { type: 'fill', sentence: '我很___新的生活。', options: ['期待','降落','陌生'], answer: '期待',
          explain: '期待 (qīdài) = mong đợi điều sắp tới (mang nghĩa tích cực).' },
        { type: 'listen', audio: '我很想念妈妈', options: ['我很想念妈妈','我很想念爸爸','我很想念老师'], answer: '我很想念妈妈',
          py: 'wǒ hěn xiǎngniàn māma', explain: 'Nghe đuôi câu: 妈妈 (māma) = mẹ. 想念 = nhớ (người).' }
      ],
      normal: [
        { type: 'fill', sentence: '对我___，独立生活是一个新的开始。', options: ['来说','而且','所以'], answer: '来说',
          explain: 'Cấu trúc 对…来说 = "đối với… mà nói" — nêu góc nhìn.' },
        { type: 'fill', sentence: '这里的一切都很___，可是很有意思。', options: ['陌生','自豪','寂寞'], answer: '陌生',
          explain: '陌生 (mòshēng) = xa lạ — tả nơi/người chưa quen.' },
        { type: 'fill', sentence: '你不仅要照顾好自己，___要好好学习。', options: ['而且','所以','但是'], answer: '而且',
          explain: 'Cặp 不仅…而且… — đã mở 不仅 thì vế sau phải có 而且/还.' },
        { type: 'fill', sentence: '第一个晚上，我觉得有点儿___。', options: ['寂寞','勇气','祝福'], answer: '寂寞',
          explain: '寂寞 (jìmò) = cô đơn. 有点儿 + tính từ tiêu cực nhẹ.' },
        { type: 'fill', sentence: '即使遇到困难，我们也要___。', options: ['坚持','放弃','降落'], answer: '坚持',
          explain: 'Ôn HSK 3: 坚持 = kiên trì — đi với 即使…也… ý chí không đổi. 放弃 = bỏ cuộc (trái nghĩa).' },
        { type: 'order', words: ['妈妈','拥抱了','我'], answer: '妈妈拥抱了我',
          explain: 'S + V了 + O: 拥抱了 = đã ôm.' },
        { type: 'order', words: ['我','很','期待','新生活'], answer: '我很期待新生活',
          explain: '期待 là động từ nhận tân ngữ trực tiếp: 期待 + điều mong chờ.' },
        { type: 'order', words: ['这里的','一切','都','很陌生'], answer: '这里的一切都很陌生',
          explain: '一切 + 都: "tất cả đều…" — 都 đứng sau chủ ngữ tổng quát.' },
        { type: 'listen', audio: '飞机降落了', options: ['飞机降落了','飞机很大','飞机来了'], answer: '飞机降落了',
          py: 'fēijī jiàngluò le', explain: '降落 (jiàngluò) = hạ cánh — nghe âm "jiàng-luò".' },
        { type: 'dictation', audio: '我很期待新的生活', answer: '我很期待新的生活',
          hint: 'Tôi rất mong đợi cuộc sống mới', py: 'wǒ hěn qīdài xīn de shēnghuó',
          explain: '期待 (qīdài) = mong đợi; 新的生活 = cuộc sống mới.' }
      ],
      hard: [
        { type: 'fill', sentence: '___想念家人，我___不会放弃。', options: ['即使 / 也','因为 / 所以','不仅 / 而且'], answer: '即使 / 也',
          explain: '即使…也… = "cho dù… vẫn…" — nhượng bộ giả định; 放弃 (ôn HSK 4) = bỏ cuộc.' },
        { type: 'fill', sentence: '妈妈的话最能___我。', options: ['安慰','拥抱','祝福'], answer: '安慰',
          explain: '安慰 (ānwèi) = an ủi — làm người khác bớt buồn bằng lời nói.' },
        { type: 'fill', sentence: '我为自己的决定感到___。', options: ['自豪','陌生','舍不得'], answer: '自豪',
          explain: 'Cấu trúc 为…感到 + cảm xúc: 自豪 = tự hào.' },
        { type: 'fill', sentence: '妈妈做的点心，我___给新同学了。', options: ['分享','期待','想念'], answer: '分享',
          explain: '分享 (fēnxiǎng) = chia sẻ (điều tốt) cho người khác: 分享给 + người.' },
        { type: 'order', words: ['他','舍不得','离开','家'], answer: '他舍不得离开家',
          explain: '舍不得 + cụm động từ: không nỡ làm gì.' },
        { type: 'order', words: ['北京','不仅','很大','而且','很漂亮'], answer: '北京不仅很大而且很漂亮',
          explain: 'Cùng chủ ngữ 北京 → 不仅 đứng sau chủ ngữ, 而且 nối vế sau.' },
        { type: 'order', words: ['妈妈','祝福','我的','新生活'], answer: '妈妈祝福我的新生活',
          explain: '祝福 + tân ngữ: chúc phúc cho điều gì/ai.' },
        { type: 'dictation', audio: '这里的一切都很陌生', answer: '这里的一切都很陌生',
          hint: 'Mọi thứ ở đây đều rất xa lạ', py: 'zhèlǐ de yíqiè dōu hěn mòshēng',
          explain: '一切…都 = tất cả đều; 陌生 = xa lạ.' },
        { type: 'translate', prompt: 'Tôi không nỡ rời xa mẹ.', answer: '我舍不得离开妈妈。',
          explain: '舍不得 + 离开 + người: không nỡ rời xa ai.' },
        { type: 'translate', prompt: 'Đối với tôi mà nói, sống tự lập là một khởi đầu mới.', answer: '对我来说，独立生活是一个新的开始。',
          explain: 'Khung 对…来说 mở câu; 独立生活 = cuộc sống tự lập.' }
      ]
    }
  }

});
