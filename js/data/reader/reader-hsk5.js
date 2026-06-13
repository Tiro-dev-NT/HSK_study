// ═══════════════════════════════════════════════════════
// READER DATA — HSK 3.0 cấp 5 (Graded Reader Việt-first, Phase A1)
// Schema chốt tại docs/plans/a1-reader-investigation.md §C
// Quy ước: var dynamic-injected (KHÔNG const) — theo CLAUDE.md.
// source:'ai-gen' = nội dung tự sinh, CHỜ chủ dự án duyệt (điền reviewed_*).
// ═══════════════════════════════════════════════════════

var READER_DATA = (typeof READER_DATA !== 'undefined') ? READER_DATA : {};

READER_DATA[5] = [
  {
    id: 'rd-5-001', level: 5, topic: 'quan-ly-thoi-gian',
    title: { vi: 'Sức mạnh của tự giác', en: 'The Power of Self-Discipline', zh: '自律的力量' },
    summary_vi: 'Tiểu Văn nhận ra thành công của người khác không đến từ may mắn mà từ thói quen tự giác mỗi ngày.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 198,
    paragraphs: [{
      sentences: [
        { zh: '小文一直羡慕同学小李，因为他成绩好，做事也很有计划。', py: 'Xiǎo Wén yìzhí xiànmù tóngxué Xiǎo Lǐ, yīnwèi tā chéngjì hǎo, zuòshì yě hěn yǒu jìhuà.', vi: 'Tiểu Văn luôn ngưỡng mộ bạn học Tiểu Lý, vì cậu ấy học giỏi và làm việc có kế hoạch.', audio: '',
          gloss: [ { w: '羡慕', py: 'xiànmù', vi: 'ngưỡng mộ' }, { w: '成绩', py: 'chéngjì', vi: 'thành tích' }, { w: '有计划', py: 'yǒu jìhuà', vi: 'có kế hoạch' } ] },
        { zh: '起初，她以为这只是因为他比较聪明。', py: 'Qǐchū, tā yǐwéi zhè zhǐshì yīnwèi tā bǐjiào cōngming.', vi: 'Ban đầu, bạn ấy tưởng chỉ vì cậu ấy thông minh hơn.', audio: '',
          gloss: [ { w: '起初', py: 'qǐchū', vi: 'ban đầu' }, { w: '以为', py: 'yǐwéi', vi: 'tưởng (lầm)' }, { w: '聪明', py: 'cōngming', vi: 'thông minh' } ] },
        { zh: '后来她发现，小李之所以那么优秀，是因为他非常自律。', py: 'Hòulái tā fāxiàn, Xiǎo Lǐ zhīsuǒyǐ nàme yōuxiù, shì yīnwèi tā fēicháng zìlǜ.', vi: 'Về sau bạn ấy phát hiện, sở dĩ Tiểu Lý xuất sắc như vậy là vì cậu ấy rất tự giác.', audio: '',
          gloss: [ { w: '之所以…是因为', py: 'zhīsuǒyǐ…shì yīnwèi', vi: 'sở dĩ…là vì' }, { w: '优秀', py: 'yōuxiù', vi: 'xuất sắc' }, { w: '自律', py: 'zìlǜ', vi: 'tự giác, kỷ luật bản thân' } ] }
      ]
    }, {
      sentences: [
        { zh: '小李每天按时起床，把当天的任务安排得清清楚楚。', py: 'Xiǎo Lǐ měitiān ànshí qǐchuáng, bǎ dàngtiān de rènwù ānpái de qīngqīng-chǔchǔ.', vi: 'Mỗi ngày Tiểu Lý dậy đúng giờ, sắp xếp nhiệm vụ trong ngày rõ ràng rành mạch.', audio: '',
          gloss: [ { w: '按时', py: 'ànshí', vi: 'đúng giờ' }, { w: '安排', py: 'ānpái', vi: 'sắp xếp' }, { w: '清清楚楚', py: 'qīngqīng-chǔchǔ', vi: 'rõ ràng rành mạch' } ] },
        { zh: '哪怕周末没有人管，他也会坚持学习一段时间。', py: 'Nǎpà zhōumò méiyǒu rén guǎn, tā yě huì jiānchí xuéxí yí duàn shíjiān.', vi: 'Dù cuối tuần không ai nhắc nhở quản lý, cậu ấy vẫn kiên trì học một khoảng thời gian.', audio: '',
          gloss: [ { w: '哪怕…也', py: 'nǎpà…yě', vi: 'dù cho…cũng' }, { w: '没有人管', py: 'méiyǒu rén guǎn', vi: 'không ai quản/nhắc' }, { w: '坚持', py: 'jiānchí', vi: 'kiên trì' } ] },
        { zh: '这些看起来很小的习惯，时间长了就变成了巨大的优势。', py: 'Zhèxiē kàn qǐlái hěn xiǎo de xíguàn, shíjiān cháng le jiù biàn chéng le jùdà de yōushì.', vi: 'Những thói quen tưởng nhỏ ấy, lâu dần trở thành lợi thế to lớn.', audio: '',
          gloss: [ { w: '习惯', py: 'xíguàn', vi: 'thói quen' }, { w: '巨大', py: 'jùdà', vi: 'to lớn' }, { w: '优势', py: 'yōushì', vi: 'lợi thế' } ] }
      ]
    }, {
      sentences: [
        { zh: '明白这一点以后，小文也开始改变自己。', py: 'Míngbai zhè yì diǎn yǐhòu, Xiǎo Wén yě kāishǐ gǎibiàn zìjǐ.', vi: 'Hiểu được điều này, Tiểu Văn cũng bắt đầu thay đổi bản thân.', audio: '',
          gloss: [ { w: '明白', py: 'míngbai', vi: 'hiểu rõ' }, { w: '改变', py: 'gǎibiàn', vi: 'thay đổi' } ] },
        { zh: '她不再羡慕别人，而是一步一步地培养自己的好习惯。', py: 'Tā bú zài xiànmù biérén, érshì yí bù yí bù de péiyǎng zìjǐ de hǎo xíguàn.', vi: 'Bạn ấy không còn ngưỡng mộ người khác, mà từng bước rèn luyện thói quen tốt cho mình.', audio: '',
          gloss: [ { w: '不再', py: 'bú zài', vi: 'không còn' }, { w: '培养', py: 'péiyǎng', vi: 'rèn luyện, bồi dưỡng' }, { w: '一步一步', py: 'yí bù yí bù', vi: 'từng bước' } ] },
        { zh: '她渐渐懂得：真正的力量，往往来自每天的坚持。', py: 'Tā jiànjiàn dǒngde: zhēnzhèng de lìliàng, wǎngwǎng láizì měitiān de jiānchí.', vi: 'Bạn ấy dần hiểu: sức mạnh thật sự thường đến từ sự kiên trì mỗi ngày.', audio: '',
          gloss: [ { w: '真正', py: 'zhēnzhèng', vi: 'thật sự' }, { w: '力量', py: 'lìliàng', vi: 'sức mạnh' }, { w: '往往', py: 'wǎngwǎng', vi: 'thường thường' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Ban đầu Tiểu Văn nghĩ Tiểu Lý giỏi là vì sao?', en: 'At first, why does Xiao Wen think Xiao Li excels?' }, options: ['Vì cậu ấy thông minh hơn', 'Vì cậu ấy may mắn', 'Vì cậu ấy giàu', 'Vì cậu ấy có thầy giỏi'], answer: 0, explain_vi: '她以为这只是因为他比较聪明 = tưởng chỉ vì thông minh hơn.' },
      { q: { vi: 'Theo bài, điều thực sự khiến Tiểu Lý xuất sắc là gì?', en: 'What truly makes Xiao Li excellent?' }, options: ['Sự tự giác', 'Trí thông minh bẩm sinh', 'Sự giúp đỡ của bạn bè', 'Đề thi dễ'], answer: 0, explain_vi: '之所以那么优秀，是因为他非常自律 = sở dĩ xuất sắc là vì tự giác.' },
      { q: { vi: 'Câu cuối cho thấy quan điểm gì của tác giả?', en: "What is the author's view in the last line?" }, options: ['Sức mạnh thật sự đến từ kiên trì mỗi ngày', 'Tài năng quyết định tất cả', 'May mắn quan trọng nhất', 'Không cần cố gắng'], answer: 0, explain_vi: 'Suy luận: "真正的力量，往往来自每天的坚持" → đề cao sự kiên trì hằng ngày.' }
    ]
  },
  {
    id: 'rd-5-002', level: 5, topic: 'moi-truong',
    title: { vi: 'Lối sống xanh', en: 'A Green Lifestyle', zh: '绿色生活' },
    summary_vi: 'Một bạn trẻ chọn lối sống thân thiện môi trường: đi xe đạp, dùng đồ tái sử dụng, và lan tỏa thói quen này.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 196,
    paragraphs: [{
      sentences: [
        { zh: '小安是一个很关注环境保护的年轻人。', py: 'Xiǎo Ān shì yí ge hěn guānzhù huánjìng bǎohù de niánqīng rén.', vi: 'Tiểu An là một người trẻ rất quan tâm đến bảo vệ môi trường.', audio: '',
          gloss: [ { w: '关注', py: 'guānzhù', vi: 'quan tâm' }, { w: '环境保护', py: 'huánjìng bǎohù', vi: 'bảo vệ môi trường' }, { w: '年轻人', py: 'niánqīng rén', vi: 'người trẻ' } ] },
        { zh: '他认为，保护环境不仅是国家的事，而且是每个人的责任。', py: 'Tā rènwéi, bǎohù huánjìng bùjǐn shì guójiā de shì, érqiě shì měi ge rén de zérèn.', vi: 'Cậu ấy cho rằng, bảo vệ môi trường không chỉ là việc của nhà nước, mà còn là trách nhiệm của mỗi người.', audio: '',
          gloss: [ { w: '不仅…而且', py: 'bùjǐn…érqiě', vi: 'không chỉ…mà còn' }, { w: '责任', py: 'zérèn', vi: 'trách nhiệm' }, { w: '认为', py: 'rènwéi', vi: 'cho rằng' } ] },
        { zh: '因此，他在生活中尽量减少浪费。', py: 'Yīncǐ, tā zài shēnghuó zhōng jǐnliàng jiǎnshǎo làngfèi.', vi: 'Vì vậy, trong cuộc sống cậu ấy cố gắng giảm bớt lãng phí.', audio: '',
          gloss: [ { w: '因此', py: 'yīncǐ', vi: 'vì vậy' }, { w: '尽量', py: 'jǐnliàng', vi: 'cố gắng hết mức' }, { w: '减少', py: 'jiǎnshǎo', vi: 'giảm bớt' } ] }
      ]
    }, {
      sentences: [
        { zh: '上班的时候，他常常骑自行车，既环保又能锻炼身体。', py: 'Shàngbān de shíhou, tā chángcháng qí zìxíngchē, jì huánbǎo yòu néng duànliàn shēntǐ.', vi: 'Khi đi làm, cậu ấy thường đạp xe, vừa bảo vệ môi trường vừa rèn luyện sức khỏe.', audio: '',
          gloss: [ { w: '骑自行车', py: 'qí zìxíngchē', vi: 'đạp xe đạp' }, { w: '既…又', py: 'jì…yòu', vi: 'vừa…vừa' }, { w: '锻炼', py: 'duànliàn', vi: 'rèn luyện' } ] },
        { zh: '买东西时，他会自己带购物袋，不用一次性的塑料袋。', py: 'Mǎi dōngxi shí, tā huì zìjǐ dài gòuwù dài, bú yòng yícìxìng de sùliào dài.', vi: 'Khi mua đồ, cậu ấy tự mang túi mua sắm, không dùng túi nhựa dùng một lần.', audio: '',
          gloss: [ { w: '购物袋', py: 'gòuwù dài', vi: 'túi mua sắm' }, { w: '一次性', py: 'yícìxìng', vi: 'dùng một lần' }, { w: '塑料袋', py: 'sùliào dài', vi: 'túi nhựa' } ] },
        { zh: '虽然这些事看起来很小，但是他一直坚持着。', py: 'Suīrán zhèxiē shì kàn qǐlái hěn xiǎo, dànshì tā yìzhí jiānchí zhe.', vi: 'Tuy những việc này trông rất nhỏ, nhưng cậu ấy luôn kiên trì.', audio: '',
          gloss: [ { w: '看起来', py: 'kàn qǐlái', vi: 'trông có vẻ' }, { w: '一直', py: 'yìzhí', vi: 'luôn' }, { w: '坚持', py: 'jiānchí', vi: 'kiên trì' } ] }
      ]
    }, {
      sentences: [
        { zh: '渐渐地，身边的朋友也受到了他的影响。', py: 'Jiànjiàn de, shēnbiān de péngyǒu yě shòudào le tā de yǐngxiǎng.', vi: 'Dần dần, bạn bè xung quanh cũng chịu ảnh hưởng từ cậu ấy.', audio: '',
          gloss: [ { w: '身边', py: 'shēnbiān', vi: 'xung quanh, bên cạnh' }, { w: '受到影响', py: 'shòudào yǐngxiǎng', vi: 'chịu ảnh hưởng' } ] },
        { zh: '有的人开始少开车，有的人学会了垃圾分类。', py: 'Yǒu de rén kāishǐ shǎo kāichē, yǒu de rén xuéhuì le lājī fēnlèi.', vi: 'Có người bắt đầu lái xe ít hơn, có người học được cách phân loại rác.', audio: '',
          gloss: [ { w: '少开车', py: 'shǎo kāichē', vi: 'lái xe ít hơn' }, { w: '垃圾分类', py: 'lājī fēnlèi', vi: 'phân loại rác' } ] },
        { zh: '小安相信，只要更多人行动起来，环境就会越来越好。', py: 'Xiǎo Ān xiāngxìn, zhǐyào gèng duō rén xíngdòng qǐlái, huánjìng jiù huì yuè lái yuè hǎo.', vi: 'Tiểu An tin rằng, chỉ cần nhiều người hành động, môi trường sẽ ngày càng tốt hơn.', audio: '',
          gloss: [ { w: '行动', py: 'xíngdòng', vi: 'hành động' }, { w: '越来越好', py: 'yuè lái yuè hǎo', vi: 'ngày càng tốt hơn' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Tiểu An cho rằng bảo vệ môi trường là gì?', en: 'What does Xiao An think about protecting the environment?' }, options: ['Trách nhiệm của mỗi người', 'Chỉ là việc của nhà nước', 'Không cần thiết', 'Việc của người giàu'], answer: 0, explain_vi: '不仅是国家的事，而且是每个人的责任 = trách nhiệm của mỗi người.' },
      { q: { vi: 'Vì sao cậu ấy thường đạp xe đi làm?', en: 'Why does he often bike to work?' }, options: ['Vừa bảo vệ môi trường vừa rèn sức khỏe', 'Vì không có xe khác', 'Vì nhà gần', 'Vì thích thể thao thi đấu'], answer: 0, explain_vi: '既环保又能锻炼身体 = vừa bảo vệ môi trường vừa rèn sức khỏe.' },
      { q: { vi: 'Hành động của Tiểu An có ảnh hưởng gì?', en: "What effect do Xiao An's actions have?" }, options: ['Bạn bè xung quanh cũng thay đổi theo', 'Không ai chú ý', 'Bị mọi người chê cười', 'Chỉ tốn thời gian'], answer: 0, explain_vi: '身边的朋友也受到了他的影响 = bạn bè cũng chịu ảnh hưởng.' },
      { q: { vi: 'Thái độ của tác giả với lối sống xanh là gì?', en: "What is the author's attitude toward a green lifestyle?" }, options: ['Ủng hộ và tin tưởng vào sức mạnh của hành động nhỏ', 'Hoài nghi', 'Phản đối', 'Thờ ơ'], answer: 0, explain_vi: 'Suy luận: bài kể tích cực + "只要更多人行动起来，环境就会越来越好" → ủng hộ, tin tưởng.' }
    ]
  },
  {
    id: 'rd-5-003', level: 5, topic: 'am-thuc',
    title: { vi: 'Hương vị của sự đoàn tụ', en: 'The Taste of Reunion', zh: '团聚的味道' },
    summary_vi: 'Với nhiều gia đình, bữa cơm đoàn tụ không chỉ là món ăn mà còn là dịp gắn kết tình thân.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 197,
    paragraphs: [{
      sentences: [
        { zh: '每到节日，丽的全家人都会从不同的城市赶回老家。', py: 'Měi dào jiérì, Lì de quán jiā rén dōu huì cóng bùtóng de chéngshì gǎn huí lǎojiā.', vi: 'Mỗi dịp lễ, cả nhà Lệ đều từ những thành phố khác nhau vội về quê.', audio: '',
          gloss: [ { w: '节日', py: 'jiérì', vi: 'ngày lễ' }, { w: '不同', py: 'bùtóng', vi: 'khác nhau' }, { w: '老家', py: 'lǎojiā', vi: 'quê nhà' } ] },
        { zh: '奶奶总是提前几天就开始准备各种菜。', py: 'Nǎinai zǒngshì tíqián jǐ tiān jiù kāishǐ zhǔnbèi gèzhǒng cài.', vi: 'Bà luôn chuẩn bị đủ loại món ăn từ vài ngày trước.', audio: '',
          gloss: [ { w: '提前', py: 'tíqián', vi: 'trước, sớm hơn' }, { w: '各种', py: 'gèzhǒng', vi: 'đủ loại' } ] },
        { zh: '这些菜既是家乡的味道，又包含着她对家人的爱。', py: 'Zhèxiē cài jì shì jiāxiāng de wèidào, yòu bāohán zhe tā duì jiārén de ài.', vi: 'Những món ăn này vừa là hương vị quê hương, vừa chứa đựng tình yêu của bà dành cho gia đình.', audio: '',
          gloss: [ { w: '既…又', py: 'jì…yòu', vi: 'vừa…vừa' }, { w: '包含', py: 'bāohán', vi: 'chứa đựng' }, { w: '味道', py: 'wèidào', vi: 'hương vị' } ] }
      ]
    }, {
      sentences: [
        { zh: '吃饭的时候，大家一边品尝美食，一边聊着过去一年的事。', py: 'Chīfàn de shíhou, dàjiā yìbiān pǐncháng měishí, yìbiān liáo zhe guòqù yì nián de shì.', vi: 'Khi ăn cơm, mọi người vừa thưởng thức món ngon, vừa trò chuyện về những chuyện một năm qua.', audio: '',
          gloss: [ { w: '品尝', py: 'pǐncháng', vi: 'thưởng thức, nếm' }, { w: '美食', py: 'měishí', vi: 'món ngon' }, { w: '一边…一边', py: 'yìbiān…yìbiān', vi: 'vừa…vừa' } ] },
        { zh: '尽管平时大家都很忙，但这一刻还是让人感到温暖。', py: 'Jǐnguǎn píngshí dàjiā dōu hěn máng, dàn zhè yí kè háishi ràng rén gǎndào wēnnuǎn.', vi: 'Mặc dù ngày thường ai cũng bận, nhưng khoảnh khắc này vẫn khiến người ta thấy ấm áp.', audio: '',
          gloss: [ { w: '尽管…还是', py: 'jǐnguǎn…háishi', vi: 'mặc dù…vẫn' }, { w: '平时', py: 'píngshí', vi: 'ngày thường' }, { w: '温暖', py: 'wēnnuǎn', vi: 'ấm áp' } ] },
        { zh: '丽觉得，比起食物本身，一家人在一起的时光更珍贵。', py: 'Lì juéde, bǐqǐ shíwù běnshēn, yì jiā rén zài yìqǐ de shíguāng gèng zhēnguì.', vi: 'Lệ thấy, so với bản thân món ăn, khoảng thời gian cả nhà bên nhau còn quý giá hơn.', audio: '',
          gloss: [ { w: '比起', py: 'bǐqǐ', vi: 'so với' }, { w: '时光', py: 'shíguāng', vi: 'khoảng thời gian' }, { w: '珍贵', py: 'zhēnguì', vi: 'quý giá' } ] }
      ]
    }, {
      sentences: [
        { zh: '后来，丽也学会了几道奶奶做的菜。', py: 'Hòulái, Lì yě xuéhuì le jǐ dào nǎinai zuò de cài.', vi: 'Về sau, Lệ cũng học được vài món mà bà hay nấu.', audio: '',
          gloss: [ { w: '学会', py: 'xuéhuì', vi: 'học được' }, { w: '几道菜', py: 'jǐ dào cài', vi: 'vài món ăn' } ] },
        { zh: '她希望有一天，能把这种味道传给下一代。', py: 'Tā xīwàng yǒu yì tiān, néng bǎ zhè zhǒng wèidào chuán gěi xià yí dài.', vi: 'Bạn ấy mong một ngày nào đó có thể truyền hương vị này cho thế hệ sau.', audio: '',
          gloss: [ { w: '希望', py: 'xīwàng', vi: 'hy vọng' }, { w: '传给', py: 'chuán gěi', vi: 'truyền cho' }, { w: '下一代', py: 'xià yí dài', vi: 'thế hệ sau' } ] },
        { zh: '在她看来，这不只是做菜，更是在延续一个家的温情。', py: 'Zài tā kàn lái, zhè bù zhǐshì zuò cài, gèng shì zài yánxù yí ge jiā de wēnqíng.', vi: 'Theo bạn ấy, đây không chỉ là nấu ăn, mà còn là tiếp nối tình ấm của một gia đình.', audio: '',
          gloss: [ { w: '在…看来', py: 'zài…kàn lái', vi: 'theo… thấy' }, { w: '延续', py: 'yánxù', vi: 'tiếp nối, duy trì' }, { w: '温情', py: 'wēnqíng', vi: 'tình cảm ấm áp' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Mỗi dịp lễ, gia đình Lệ làm gì?', en: "What does Li's family do on holidays?" }, options: ['Từ nhiều nơi về quê đoàn tụ', 'Đi du lịch nước ngoài', 'Ở yên thành phố', 'Đặt cơm tiệm'], answer: 0, explain_vi: '全家人都会从不同的城市赶回老家 = từ nhiều nơi về quê.' },
      { q: { vi: 'Với Lệ, điều gì quý giá hơn bản thân món ăn?', en: 'For Li, what is more precious than the food itself?' }, options: ['Thời gian cả nhà bên nhau', 'Món ăn đắt tiền', 'Quà tặng', 'Được nghỉ lễ'], answer: 0, explain_vi: '一家人在一起的时光更珍贵 = thời gian cả nhà bên nhau quý giá hơn.' },
      { q: { vi: 'Vì sao Lệ muốn học nấu các món của bà?', en: "Why does Li want to learn grandma's dishes?" }, options: ['Để truyền lại hương vị và tình thân cho đời sau', 'Để mở nhà hàng', 'Để thi nấu ăn', 'Để khỏi phải mua đồ ăn'], answer: 0, explain_vi: '希望…把这种味道传给下一代…延续一个家的温情 = truyền lại hương vị và tình thân.' },
      { q: { vi: 'Bữa cơm đoàn tụ trong bài mang ý nghĩa gì?', en: 'What does the reunion meal symbolize?' }, options: ['Sự gắn kết và tình cảm gia đình', 'Sự giàu có', 'Một nghĩa vụ bắt buộc', 'Dịp để khoe nấu ăn'], answer: 0, explain_vi: 'Suy luận: cả bài nhấn mạnh tình thân, "延续一个家的温情" → gắn kết tình cảm gia đình.' }
    ]
  },
  {
    id: 'rd-5-004', level: 5, topic: 'hoc-tap',
    title: { vi: 'Học cách học', en: 'Learning How to Learn', zh: '学会学习' },
    summary_vi: 'Thay vì học thuộc lòng một cách máy móc, Tiểu Đông tìm ra phương pháp hiểu bản chất và tự đặt câu hỏi.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 195,
    paragraphs: [{
      sentences: [
        { zh: '小东以前学习的时候，喜欢把课本上的内容全部背下来。', py: 'Xiǎo Dōng yǐqián xuéxí de shíhou, xǐhuan bǎ kèběn shang de nèiróng quánbù bèi xiàlái.', vi: 'Trước đây khi học, Tiểu Đông thích học thuộc toàn bộ nội dung trong sách.', audio: '',
          gloss: [ { w: '内容', py: 'nèiróng', vi: 'nội dung' }, { w: '全部', py: 'quánbù', vi: 'toàn bộ' }, { w: '背下来', py: 'bèi xiàlái', vi: 'học thuộc' } ] },
        { zh: '可是考试一结束，他很快就忘记了。', py: 'Kěshì kǎoshì yì jiéshù, tā hěn kuài jiù wàngjì le.', vi: 'Nhưng kỳ thi vừa kết thúc, bạn ấy nhanh chóng quên hết.', audio: '',
          gloss: [ { w: '结束', py: 'jiéshù', vi: 'kết thúc' }, { w: '忘记', py: 'wàngjì', vi: 'quên' } ] },
        { zh: '他渐渐意识到，与其死记硬背，不如真正理解。', py: 'Tā jiànjiàn yìshí dào, yǔqí sǐjì-yìngbèi, bùrú zhēnzhèng lǐjiě.', vi: 'Bạn ấy dần nhận ra, học vẹt một cách máy móc chẳng bằng thật sự hiểu.', audio: '',
          gloss: [ { w: '意识到', py: 'yìshí dào', vi: 'nhận ra, ý thức được' }, { w: '与其…不如', py: 'yǔqí…bùrú', vi: 'thay vì…chẳng bằng' }, { w: '理解', py: 'lǐjiě', vi: 'hiểu' } ] }
      ]
    }, {
      sentences: [
        { zh: '于是，他改变了学习的方法。', py: 'Yúshì, tā gǎibiàn le xuéxí de fāngfǎ.', vi: 'Thế là, bạn ấy thay đổi phương pháp học.', audio: '',
          gloss: [ { w: '于是', py: 'yúshì', vi: 'thế là' }, { w: '方法', py: 'fāngfǎ', vi: 'phương pháp' } ] },
        { zh: '遇到不懂的地方，他不仅查资料，而且会自己提问题。', py: 'Yùdào bù dǒng de dìfang, tā bùjǐn chá zīliào, érqiě huì zìjǐ tí wèntí.', vi: 'Gặp chỗ không hiểu, bạn ấy không chỉ tra tài liệu mà còn tự đặt câu hỏi.', audio: '',
          gloss: [ { w: '不仅…而且', py: 'bùjǐn…érqiě', vi: 'không chỉ…mà còn' }, { w: '查资料', py: 'chá zīliào', vi: 'tra tài liệu' }, { w: '提问题', py: 'tí wèntí', vi: 'đặt câu hỏi' } ] },
        { zh: '他还喜欢把学到的知识讲给同学听。', py: 'Tā hái xǐhuan bǎ xué dào de zhīshi jiǎng gěi tóngxué tīng.', vi: 'Bạn ấy còn thích giảng lại kiến thức đã học cho bạn nghe.', audio: '',
          gloss: [ { w: '知识', py: 'zhīshi', vi: 'kiến thức' }, { w: '讲给…听', py: 'jiǎng gěi…tīng', vi: 'giảng cho… nghe' } ] }
      ]
    }, {
      sentences: [
        { zh: '通过这种方式，他发现自己记得更清楚，也更有兴趣。', py: 'Tōngguò zhè zhǒng fāngshì, tā fāxiàn zìjǐ jì de gèng qīngchu, yě gèng yǒu xìngqù.', vi: 'Qua cách này, bạn ấy thấy mình nhớ rõ hơn và cũng hứng thú hơn.', audio: '',
          gloss: [ { w: '方式', py: 'fāngshì', vi: 'cách thức' }, { w: '记得清楚', py: 'jì de qīngchu', vi: 'nhớ rõ' }, { w: '兴趣', py: 'xìngqù', vi: 'hứng thú' } ] },
        { zh: '他明白了一个道理：学习的关键不是数量，而是方法。', py: 'Tā míngbai le yí ge dàolǐ: xuéxí de guānjiàn bú shì shùliàng, érshì fāngfǎ.', vi: 'Bạn ấy hiểu ra một điều: mấu chốt của việc học không phải số lượng, mà là phương pháp.', audio: '',
          gloss: [ { w: '道理', py: 'dàolǐ', vi: 'đạo lý, điều' }, { w: '关键', py: 'guānjiàn', vi: 'mấu chốt' }, { w: '数量', py: 'shùliàng', vi: 'số lượng' } ] },
        { zh: '从那以后，学习对他来说不再是负担，而是一种乐趣。', py: 'Cóng nà yǐhòu, xuéxí duì tā lái shuō bú zài shì fùdān, érshì yì zhǒng lèqù.', vi: 'Từ đó, việc học với bạn ấy không còn là gánh nặng, mà là một niềm vui.', audio: '',
          gloss: [ { w: '负担', py: 'fùdān', vi: 'gánh nặng' }, { w: '乐趣', py: 'lèqù', vi: 'niềm vui' }, { w: '对…来说', py: 'duì…lái shuō', vi: 'đối với… mà nói' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Cách học cũ của Tiểu Đông có vấn đề gì?', en: "What was wrong with Xiao Dong's old method?" }, options: ['Học thuộc nhưng nhanh quên', 'Học quá ít', 'Không có sách', 'Quá nhiều bạn'], answer: 0, explain_vi: '全部背下来…考试一结束就忘记了 = học thuộc nhưng nhanh quên.' },
      { q: { vi: 'Bạn ấy nhận ra điều gì?', en: 'What does he realize?' }, options: ['Thật sự hiểu tốt hơn học vẹt', 'Học vẹt là tốt nhất', 'Không cần thi', 'Nên bỏ học'], answer: 0, explain_vi: '与其死记硬背，不如真正理解 = thà hiểu thật còn hơn học vẹt.' },
      { q: { vi: 'Sau khi đổi cách học, kết quả ra sao?', en: 'What is the result after changing his method?' }, options: ['Nhớ rõ hơn và hứng thú hơn', 'Tệ hơn trước', 'Không thay đổi', 'Mất nhiều bạn'], answer: 0, explain_vi: '记得更清楚，也更有兴趣 = nhớ rõ hơn và hứng thú hơn.' },
      { q: { vi: 'Thông điệp chính của bài là gì?', en: 'What is the main message?' }, options: ['Phương pháp học quan trọng hơn số lượng', 'Học càng nhiều giờ càng tốt', 'Chỉ cần thông minh là đủ', 'Không nên đặt câu hỏi'], answer: 0, explain_vi: 'Suy luận: "学习的关键不是数量，而是方法" → phương pháp quan trọng hơn số lượng.' }
    ]
  },
  {
    id: 'rd-5-005', level: 5, topic: 'tinh-ban',
    title: { vi: 'Người bạn thật sự', en: 'A True Friend', zh: '真正的朋友' },
    summary_vi: 'Khi Tiểu Lâm gặp khó khăn, một người bạn cũ đã âm thầm giúp đỡ, cho bạn ấy hiểu thế nào là tình bạn chân thành.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 196,
    paragraphs: [{
      sentences: [
        { zh: '去年，小林的家里遇到了一些困难。', py: 'Qùnián, Xiǎo Lín de jiā lǐ yùdào le yìxiē kùnnan.', vi: 'Năm ngoái, gia đình Tiểu Lâm gặp một số khó khăn.', audio: '',
          gloss: [ { w: '去年', py: 'qùnián', vi: 'năm ngoái' }, { w: '困难', py: 'kùnnan', vi: 'khó khăn' } ] },
        { zh: '那段时间，他心情很差，常常一个人发呆。', py: 'Nà duàn shíjiān, tā xīnqíng hěn chà, chángcháng yí ge rén fādāi.', vi: 'Khoảng thời gian đó, tâm trạng bạn ấy rất tệ, thường ngồi thẫn thờ một mình.', audio: '',
          gloss: [ { w: '心情差', py: 'xīnqíng chà', vi: 'tâm trạng tệ' }, { w: '发呆', py: 'fādāi', vi: 'thẫn thờ, ngẩn người' } ] },
        { zh: '很多原来热闹的朋友慢慢都不再联系他了。', py: 'Hěn duō yuánlái rènao de péngyǒu mànmàn dōu bú zài liánxì tā le.', vi: 'Nhiều người bạn vốn náo nhiệt dần dần không còn liên lạc với bạn ấy nữa.', audio: '',
          gloss: [ { w: '原来', py: 'yuánlái', vi: 'vốn dĩ' }, { w: '热闹', py: 'rènao', vi: 'náo nhiệt' }, { w: '联系', py: 'liánxì', vi: 'liên lạc' } ] }
      ]
    }, {
      sentences: [
        { zh: '只有一个叫小马的老同学，一直默默地关心他。', py: 'Zhǐyǒu yí ge jiào Xiǎo Mǎ de lǎo tóngxué, yìzhí mòmò de guānxīn tā.', vi: 'Chỉ có một người bạn học cũ tên Tiểu Mã luôn âm thầm quan tâm bạn ấy.', audio: '',
          gloss: [ { w: '老同学', py: 'lǎo tóngxué', vi: 'bạn học cũ' }, { w: '默默地', py: 'mòmò de', vi: 'âm thầm' }, { w: '关心', py: 'guānxīn', vi: 'quan tâm' } ] },
        { zh: '尽管小马自己的钱也不多，但他还是经常陪小林聊天。', py: 'Jǐnguǎn Xiǎo Mǎ zìjǐ de qián yě bù duō, dàn tā háishi jīngcháng péi Xiǎo Lín liáotiān.', vi: 'Mặc dù Tiểu Mã cũng không có nhiều tiền, nhưng cậu ấy vẫn thường ở bên trò chuyện với Tiểu Lâm.', audio: '',
          gloss: [ { w: '尽管…还是', py: 'jǐnguǎn…háishi', vi: 'mặc dù…vẫn' }, { w: '钱不多', py: 'qián bù duō', vi: 'không có nhiều tiền' }, { w: '陪', py: 'péi', vi: 'ở bên, đi cùng' } ] },
        { zh: '他从不讲大道理，只是在小林需要的时候出现。', py: 'Tā cóng bù jiǎng dà dàolǐ, zhǐshì zài Xiǎo Lín xūyào de shíhou chūxiàn.', vi: 'Cậu ấy chưa từng giảng đạo lý lớn lao, chỉ xuất hiện khi Tiểu Lâm cần.', audio: '',
          gloss: [ { w: '从不', py: 'cóng bù', vi: 'chưa từng' }, { w: '大道理', py: 'dà dàolǐ', vi: 'đạo lý lớn lao' }, { w: '出现', py: 'chūxiàn', vi: 'xuất hiện' } ] }
      ]
    }, {
      sentences: [
        { zh: '后来，小林的情况慢慢好了起来。', py: 'Hòulái, Xiǎo Lín de qíngkuàng mànmàn hǎo le qǐlái.', vi: 'Về sau, hoàn cảnh của Tiểu Lâm dần dần khá lên.', audio: '',
          gloss: [ { w: '情况', py: 'qíngkuàng', vi: 'hoàn cảnh, tình hình' }, { w: '好了起来', py: 'hǎo le qǐlái', vi: 'khá lên' } ] },
        { zh: '他常对别人说，自己最感谢的就是小马。', py: 'Tā cháng duì biérén shuō, zìjǐ zuì gǎnxiè de jiùshì Xiǎo Mǎ.', vi: 'Bạn ấy thường nói với người khác, người mình biết ơn nhất chính là Tiểu Mã.', audio: '',
          gloss: [ { w: '感谢', py: 'gǎnxiè', vi: 'biết ơn' }, { w: '就是', py: 'jiùshì', vi: 'chính là' } ] },
        { zh: '他终于懂得，真正的朋友不是在你风光时来，而是在你难过时还在。', py: 'Tā zhōngyú dǒngde, zhēnzhèng de péngyǒu bú shì zài nǐ fēngguāng shí lái, érshì zài nǐ nánguò shí hái zài.', vi: 'Cuối cùng bạn ấy hiểu, bạn thật sự không phải người đến lúc bạn vinh quang, mà là người còn ở lại khi bạn buồn khổ.', audio: '',
          gloss: [ { w: '终于', py: 'zhōngyú', vi: 'cuối cùng' }, { w: '风光', py: 'fēngguāng', vi: 'vinh quang, rạng rỡ' }, { w: '难过', py: 'nánguò', vi: 'buồn khổ' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Khi gia đình gặp khó khăn, điều gì xảy ra với nhiều người bạn của Tiểu Lâm?', en: "What happens with many of Xiao Lin's friends?" }, options: ['Họ dần không còn liên lạc', 'Họ cho bạn ấy tiền', 'Họ tổ chức tiệc', 'Họ đến ở cùng'], answer: 0, explain_vi: '很多…朋友慢慢都不再联系他了 = dần không còn liên lạc.' },
      { q: { vi: 'Tiểu Mã đã làm gì cho Tiểu Lâm?', en: 'What does Xiao Ma do for Xiao Lin?' }, options: ['Âm thầm quan tâm và ở bên trò chuyện', 'Cho vay nhiều tiền', 'Giảng đạo lý dài dòng', 'Khoe khoang bản thân'], answer: 0, explain_vi: '默默地关心他…经常陪小林聊天 = âm thầm quan tâm và ở bên.' },
      { q: { vi: 'Cụm "尽管小马自己的钱也不多" cho thấy điều gì về Tiểu Mã?', en: 'What does that clause show about Xiao Ma?' }, options: ['Dù không dư dả, cậu ấy vẫn sẵn lòng ở bên bạn', 'Cậu ấy rất giàu', 'Cậu ấy keo kiệt', 'Cậu ấy không có thời gian'], answer: 0, explain_vi: '尽管…钱也不多，但他还是经常陪… = dù không dư dả vẫn ở bên bạn.' },
      { q: { vi: 'Bài muốn nói gì về tình bạn thật sự?', en: 'What does the passage say about true friendship?' }, options: ['Là người ở lại lúc khó khăn, không phải lúc vinh quang', 'Là người vui chơi cùng nhau', 'Là người giàu có', 'Là người quen lâu năm'], answer: 0, explain_vi: 'Suy luận: câu cuối "在你难过时还在" → bạn thật sự ở lại lúc khó khăn.' }
    ]
  },
  {
    id: 'rd-5-006', level: 5, topic: 'cong-nghe',
    title: { vi: 'Mạng xã hội và cuộc sống', en: 'Social Media and Life', zh: '社交软件与生活' },
    summary_vi: 'Mạng xã hội giúp kết nối nhưng cũng dễ khiến người ta so sánh và mất tập trung; điều quan trọng là dùng có chừng mực.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 199,
    paragraphs: [{
      sentences: [
        { zh: '如今，几乎每个人的手机里都有社交软件。', py: 'Rújīn, jīhū měi ge rén de shǒujī lǐ dōu yǒu shèjiāo ruǎnjiàn.', vi: 'Ngày nay, gần như điện thoại của ai cũng có ứng dụng mạng xã hội.', audio: '',
          gloss: [ { w: '如今', py: 'rújīn', vi: 'ngày nay' }, { w: '几乎', py: 'jīhū', vi: 'gần như' }, { w: '社交软件', py: 'shèjiāo ruǎnjiàn', vi: 'ứng dụng mạng xã hội' } ] },
        { zh: '它不仅让人们更容易联系，而且让信息传播得很快。', py: 'Tā bùjǐn ràng rénmen gèng róngyì liánxì, érqiě ràng xìnxī chuánbō de hěn kuài.', vi: 'Nó không chỉ giúp mọi người dễ liên lạc hơn, mà còn khiến thông tin lan truyền rất nhanh.', audio: '',
          gloss: [ { w: '不仅…而且', py: 'bùjǐn…érqiě', vi: 'không chỉ…mà còn' }, { w: '信息', py: 'xìnxī', vi: 'thông tin' }, { w: '传播', py: 'chuánbō', vi: 'lan truyền' } ] },
        { zh: '小安通过网上认识了很多有共同爱好的朋友。', py: 'Xiǎo Ān tōngguò wǎngshàng rènshi le hěn duō yǒu gòngtóng àihào de péngyǒu.', vi: 'Tiểu An nhờ mạng đã quen được nhiều người bạn có cùng sở thích.', audio: '',
          gloss: [ { w: '网上', py: 'wǎngshàng', vi: 'trên mạng' }, { w: '共同', py: 'gòngtóng', vi: 'chung, cùng' }, { w: '爱好', py: 'àihào', vi: 'sở thích' } ] }
      ]
    }, {
      sentences: [
        { zh: '不过，他也注意到了一些问题。', py: 'Búguò, tā yě zhùyì dào le yìxiē wèntí.', vi: 'Nhưng cậu ấy cũng nhận thấy một vài vấn đề.', audio: '',
          gloss: [ { w: '注意到', py: 'zhùyì dào', vi: 'nhận thấy' }, { w: '问题', py: 'wèntí', vi: 'vấn đề' } ] },
        { zh: '有些人看到别人的生活，就忍不住和自己比较。', py: 'Yǒuxiē rén kàndào biérén de shēnghuó, jiù rěnbuzhù hé zìjǐ bǐjiào.', vi: 'Có người nhìn thấy cuộc sống của người khác liền không nhịn được so sánh với bản thân.', audio: '',
          gloss: [ { w: '忍不住', py: 'rěnbuzhù', vi: 'không nhịn được' }, { w: '比较', py: 'bǐjiào', vi: 'so sánh' } ] },
        { zh: '哪怕只是几张照片，也可能让人产生压力。', py: 'Nǎpà zhǐshì jǐ zhāng zhàopiàn, yě kěnéng ràng rén chǎnshēng yālì.', vi: 'Dù chỉ là vài tấm ảnh, cũng có thể khiến người ta nảy sinh áp lực.', audio: '',
          gloss: [ { w: '哪怕…也', py: 'nǎpà…yě', vi: 'dù chỉ…cũng' }, { w: '产生', py: 'chǎnshēng', vi: 'nảy sinh' }, { w: '压力', py: 'yālì', vi: 'áp lực' } ] }
      ]
    }, {
      sentences: [
        { zh: '小安认为，上网本身没有错，关键在于怎么使用。', py: 'Xiǎo Ān rènwéi, shàngwǎng běnshēn méiyǒu cuò, guānjiàn zàiyú zěnme shǐyòng.', vi: 'Tiểu An cho rằng, việc lên mạng bản thân không có lỗi, mấu chốt là ở cách sử dụng.', audio: '',
          gloss: [ { w: '上网', py: 'shàngwǎng', vi: 'lên mạng' }, { w: '在于', py: 'zàiyú', vi: 'nằm ở, ở chỗ' }, { w: '使用', py: 'shǐyòng', vi: 'sử dụng' } ] },
        { zh: '他给自己定了规定：每天看手机的时间不超过两个小时。', py: 'Tā gěi zìjǐ dìng le guīdìng: měitiān kàn shǒujī de shíjiān bù chāoguò liǎng ge xiǎoshí.', vi: 'Cậu ấy đặt ra quy định cho mình: mỗi ngày xem điện thoại không quá hai tiếng.', audio: '',
          gloss: [ { w: '规定', py: 'guīdìng', vi: 'quy định' }, { w: '超过', py: 'chāoguò', vi: 'vượt quá' } ] },
        { zh: '这样，他既能享受上网的方便，又不会被它控制。', py: 'Zhèyàng, tā jì néng xiǎngshòu shàngwǎng de fāngbiàn, yòu bú huì bèi tā kòngzhì.', vi: 'Như vậy, cậu ấy vừa tận hưởng được sự tiện lợi của mạng, vừa không bị nó chi phối.', audio: '',
          gloss: [ { w: '既…又', py: 'jì…yòu', vi: 'vừa…vừa' }, { w: '享受', py: 'xiǎngshòu', vi: 'tận hưởng' }, { w: '控制', py: 'kòngzhì', vi: 'kiểm soát, chi phối' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Mạng xã hội mang lại lợi ích gì theo bài?', en: 'What benefits does social media bring?' }, options: ['Dễ liên lạc và lan truyền thông tin nhanh', 'Giúp ngủ ngon hơn', 'Làm bài tập hộ', 'Tăng thu nhập'], answer: 0, explain_vi: '不仅让人们更容易联系，而且让信息传播得很快 = dễ liên lạc và lan truyền nhanh.' },
      { q: { vi: 'Vấn đề mà Tiểu An nhận thấy là gì?', en: 'What problem does Xiao An notice?' }, options: ['Người ta hay so sánh và nảy sinh áp lực', 'Mạng quá chậm', 'Không ai dùng mạng', 'Điện thoại quá rẻ'], answer: 0, explain_vi: '忍不住和自己比较…让人产生压力 = so sánh và nảy sinh áp lực.' },
      { q: { vi: 'Tiểu An giải quyết bằng cách nào?', en: 'How does Xiao An deal with it?' }, options: ['Đặt giới hạn thời gian dùng điện thoại', 'Bỏ hẳn điện thoại', 'Xóa hết bạn bè', 'Mua điện thoại mới'], answer: 0, explain_vi: '每天看手机的时间不超过两个小时 = đặt giới hạn thời gian.' },
      { q: { vi: 'Quan điểm của tác giả về mạng xã hội là gì?', en: "What is the author's view on social media?" }, options: ['Bản thân nó trung tính, quan trọng là cách dùng', 'Hoàn toàn có hại', 'Hoàn toàn có lợi', 'Nên cấm tuyệt đối'], answer: 0, explain_vi: 'Suy luận: "上网本身没有错，关键在于怎么使用" → trung tính, quan trọng là cách dùng.' }
    ]
  },
  {
    id: 'rd-5-007', level: 5, topic: 'du-lich',
    title: { vi: 'Du lịch chậm', en: 'Slow Travel', zh: '慢慢地旅行' },
    summary_vi: 'Thay vì chạy theo nhiều điểm đến, Tiểu Mỹ chọn ở lại một nơi lâu hơn để thật sự cảm nhận cuộc sống địa phương.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 194,
    paragraphs: [{
      sentences: [
        { zh: '以前旅行的时候，小美总想去尽可能多的地方。', py: 'Yǐqián lǚxíng de shíhou, Xiǎo Měi zǒng xiǎng qù jǐnkěnéng duō de dìfang.', vi: 'Trước đây khi đi du lịch, Tiểu Mỹ luôn muốn đến càng nhiều nơi càng tốt.', audio: '',
          gloss: [ { w: '旅行', py: 'lǚxíng', vi: 'du lịch' }, { w: '尽可能', py: 'jǐnkěnéng', vi: 'càng… càng tốt, hết mức' }, { w: '地方', py: 'dìfang', vi: 'nơi chốn' } ] },
        { zh: '每天的行程排得满满的，几乎没有时间休息。', py: 'Měitiān de xíngchéng pái de mǎnmǎn de, jīhū méiyǒu shíjiān xiūxi.', vi: 'Lịch trình mỗi ngày kín mít, gần như không có thời gian nghỉ.', audio: '',
          gloss: [ { w: '行程', py: 'xíngchéng', vi: 'lịch trình' }, { w: '满满的', py: 'mǎnmǎn de', vi: 'kín mít, đầy ắp' }, { w: '休息', py: 'xiūxi', vi: 'nghỉ ngơi' } ] },
        { zh: '回来以后，她常常觉得比上班还累。', py: 'Huílái yǐhòu, tā chángcháng juéde bǐ shàngbān hái lèi.', vi: 'Sau khi về, bạn ấy thường thấy mệt hơn cả đi làm.', audio: '',
          gloss: [ { w: '回来', py: 'huílái', vi: 'trở về' }, { w: '上班', py: 'shàngbān', vi: 'đi làm' } ] }
      ]
    }, {
      sentences: [
        { zh: '后来她明白，与其匆匆忙忙地赶路，不如慢下来。', py: 'Hòulái tā míngbai, yǔqí cōngcōng-mángmáng de gǎnlù, bùrú màn xiàlái.', vi: 'Về sau bạn ấy hiểu, thay vì vội vàng chạy chặng này chặng kia, chẳng bằng chậm lại.', audio: '',
          gloss: [ { w: '与其…不如', py: 'yǔqí…bùrú', vi: 'thay vì…chẳng bằng' }, { w: '匆匆忙忙', py: 'cōngcōng-mángmáng', vi: 'vội vàng' }, { w: '赶路', py: 'gǎnlù', vi: 'chạy/đuổi theo lịch trình' } ] },
        { zh: '这次，她只选了一个小城市，住了整整一个星期。', py: 'Zhè cì, tā zhǐ xuǎn le yí ge xiǎo chéngshì, zhù le zhěngzhěng yí ge xīngqī.', vi: 'Lần này, bạn ấy chỉ chọn một thành phố nhỏ và ở trọn một tuần.', audio: '',
          gloss: [ { w: '选', py: 'xuǎn', vi: 'chọn' }, { w: '整整', py: 'zhěngzhěng', vi: 'trọn vẹn, đúng' }, { w: '城市', py: 'chéngshì', vi: 'thành phố' } ] },
        { zh: '她每天在小街上散步，和当地人聊天，尝当地的小吃。', py: 'Tā měitiān zài xiǎo jiē shang sànbù, hé dāngdì rén liáotiān, cháng dāngdì de xiǎochī.', vi: 'Mỗi ngày bạn ấy dạo trên con phố nhỏ, trò chuyện với người dân, nếm món ăn vặt địa phương.', audio: '',
          gloss: [ { w: '散步', py: 'sànbù', vi: 'dạo bộ' }, { w: '当地人', py: 'dāngdì rén', vi: 'người địa phương' }, { w: '小吃', py: 'xiǎochī', vi: 'món ăn vặt' } ] }
      ]
    }, {
      sentences: [
        { zh: '慢慢地，她感受到了这座城市真实的样子。', py: 'Mànmàn de, tā gǎnshòu dào le zhè zuò chéngshì zhēnshí de yàngzi.', vi: 'Dần dần, bạn ấy cảm nhận được dáng vẻ chân thực của thành phố này.', audio: '',
          gloss: [ { w: '感受到', py: 'gǎnshòu dào', vi: 'cảm nhận được' }, { w: '真实', py: 'zhēnshí', vi: 'chân thực' }, { w: '样子', py: 'yàngzi', vi: 'dáng vẻ' } ] },
        { zh: '这次旅行虽然去的地方不多，但留下的回忆却很深。', py: 'Zhè cì lǚxíng suīrán qù de dìfang bù duō, dàn liú xià de huíyì què hěn shēn.', vi: 'Chuyến đi này tuy đến ít nơi, nhưng kỷ niệm để lại lại rất sâu sắc.', audio: '',
          gloss: [ { w: '回忆', py: 'huíyì', vi: 'kỷ niệm, hồi ức' }, { w: '却', py: 'què', vi: 'lại (trái với mong đợi)' }, { w: '深', py: 'shēn', vi: 'sâu sắc' } ] },
        { zh: '她说：“旅行的意义，不在于走了多远，而在于看到了什么。”', py: 'Tā shuō: “Lǚxíng de yìyì, bú zàiyú zǒu le duō yuǎn, ér zàiyú kàndào le shénme.”', vi: 'Bạn ấy nói: “Ý nghĩa của du lịch không nằm ở đi được bao xa, mà ở chỗ nhìn thấy điều gì.”', audio: '',
          gloss: [ { w: '意义', py: 'yìyì', vi: 'ý nghĩa' }, { w: '在于', py: 'zàiyú', vi: 'nằm ở' }, { w: '多远', py: 'duō yuǎn', vi: 'bao xa' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Cách du lịch cũ khiến Tiểu Mỹ thế nào?', en: 'How did her old way of traveling make her feel?' }, options: ['Mệt hơn cả đi làm', 'Rất thoải mái', 'Tiết kiệm tiền', 'Học được nhiều'], answer: 0, explain_vi: '回来以后…觉得比上班还累 = mệt hơn cả đi làm.' },
      { q: { vi: 'Lần này Tiểu Mỹ chọn cách đi nào?', en: 'What approach does she choose this time?' }, options: ['Ở một thành phố nhỏ trọn một tuần', 'Đi mười nơi trong ba ngày', 'Không đi đâu cả', 'Chỉ ở khách sạn'], answer: 0, explain_vi: '只选了一个小城市，住了整整一个星期 = ở một nơi trọn tuần.' },
      { q: { vi: 'Kết quả của chuyến đi chậm là gì?', en: 'What is the result of slow travel?' }, options: ['Ít nơi nhưng kỷ niệm sâu sắc', 'Nhiều nơi nhưng quên hết', 'Không có gì đáng nhớ', 'Tốn rất nhiều tiền'], answer: 0, explain_vi: '去的地方不多，但留下的回忆却很深 = ít nơi nhưng kỷ niệm sâu.' },
      { q: { vi: 'Quan điểm của Tiểu Mỹ về ý nghĩa du lịch là gì?', en: 'What is her view on the meaning of travel?' }, options: ['Quan trọng là nhìn thấy gì, không phải đi bao xa', 'Đi càng xa càng tốt', 'Đi càng nhiều nơi càng giỏi', 'Du lịch không có ý nghĩa'], answer: 0, explain_vi: 'Suy luận: "不在于走了多远，而在于看到了什么" → quan trọng là nhìn thấy gì.' }
    ]
  },
  {
    id: 'rd-5-008', level: 5, topic: 'suc-khoe',
    title: { vi: 'Học cách đối mặt với thất bại', en: 'Learning to Face Failure', zh: '学会面对失败' },
    summary_vi: 'Sau khi thi trượt, Tiểu Đông học cách xem thất bại như một phần của trưởng thành và đứng dậy.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 195,
    paragraphs: [{
      sentences: [
        { zh: '小东准备了很久的一次比赛，结果没有得到好成绩。', py: 'Xiǎo Dōng zhǔnbèi le hěn jiǔ de yí cì bǐsài, jiéguǒ méiyǒu dédào hǎo chéngjì.', vi: 'Một cuộc thi mà Tiểu Đông chuẩn bị rất lâu, kết quả lại không đạt thành tích tốt.', audio: '',
          gloss: [ { w: '比赛', py: 'bǐsài', vi: 'cuộc thi' }, { w: '结果', py: 'jiéguǒ', vi: 'kết quả' }, { w: '成绩', py: 'chéngjì', vi: 'thành tích' } ] },
        { zh: '一开始，他非常失望，甚至想放弃这个爱好。', py: 'Yì kāishǐ, tā fēicháng shīwàng, shènzhì xiǎng fàngqì zhège àihào.', vi: 'Lúc đầu, bạn ấy rất thất vọng, thậm chí muốn từ bỏ sở thích này.', audio: '',
          gloss: [ { w: '失望', py: 'shīwàng', vi: 'thất vọng' }, { w: '甚至', py: 'shènzhì', vi: 'thậm chí' }, { w: '放弃', py: 'fàngqì', vi: 'từ bỏ' } ] },
        { zh: '那几天，他心情很低落，做什么都没有兴趣。', py: 'Nà jǐ tiān, tā xīnqíng hěn dīluò, zuò shénme dōu méiyǒu xìngqù.', vi: 'Mấy ngày đó, tâm trạng bạn ấy rất sa sút, làm gì cũng không hứng thú.', audio: '',
          gloss: [ { w: '低落', py: 'dīluò', vi: 'sa sút, xuống tinh thần' }, { w: '兴趣', py: 'xìngqù', vi: 'hứng thú' } ] }
      ]
    }, {
      sentences: [
        { zh: '爸爸看出了他的心事，和他认真地谈了一次。', py: 'Bàba kàn chū le tā de xīnshì, hé tā rènzhēn de tán le yí cì.', vi: 'Bố nhìn ra tâm sự của bạn ấy, đã nghiêm túc nói chuyện với bạn ấy một lần.', audio: '',
          gloss: [ { w: '看出', py: 'kàn chū', vi: 'nhìn ra' }, { w: '心事', py: 'xīnshì', vi: 'tâm sự, nỗi lòng' }, { w: '谈', py: 'tán', vi: 'nói chuyện, trò chuyện' } ] },
        { zh: '爸爸说：“哪怕这次失败了，你也学到了经验。”', py: 'Bàba shuō: “Nǎpà zhè cì shībài le, nǐ yě xué dào le jīngyàn.”', vi: 'Bố nói: “Dù lần này thất bại, con cũng đã học được kinh nghiệm.”', audio: '',
          gloss: [ { w: '哪怕…也', py: 'nǎpà…yě', vi: 'dù cho…cũng' }, { w: '失败', py: 'shībài', vi: 'thất bại' }, { w: '经验', py: 'jīngyàn', vi: 'kinh nghiệm' } ] },
        { zh: '他还告诉小东，每个成功的人，背后都有很多次失败。', py: 'Tā hái gàosu Xiǎo Dōng, měi ge chénggōng de rén, bèihòu dōu yǒu hěn duō cì shībài.', vi: 'Bố còn bảo Tiểu Đông, đằng sau mỗi người thành công đều có rất nhiều lần thất bại.', audio: '',
          gloss: [ { w: '成功', py: 'chénggōng', vi: 'thành công' }, { w: '背后', py: 'bèihòu', vi: 'đằng sau' } ] }
      ]
    }, {
      sentences: [
        { zh: '小东慢慢想通了，把这次失败当成一次学习的机会。', py: 'Xiǎo Dōng mànmàn xiǎng tōng le, bǎ zhè cì shībài dàng chéng yí cì xuéxí de jīhuì.', vi: 'Tiểu Đông dần nghĩ thông, xem lần thất bại này như một cơ hội học hỏi.', audio: '',
          gloss: [ { w: '想通', py: 'xiǎng tōng', vi: 'nghĩ thông, hiểu ra' }, { w: '当成', py: 'dàng chéng', vi: 'xem như' }, { w: '机会', py: 'jīhuì', vi: 'cơ hội' } ] },
        { zh: '他重新制定了计划，找出了自己的不足。', py: 'Tā chóngxīn zhìdìng le jìhuà, zhǎo chū le zìjǐ de bùzú.', vi: 'Bạn ấy lập lại kế hoạch, tìm ra điểm yếu của mình.', audio: '',
          gloss: [ { w: '重新', py: 'chóngxīn', vi: 'lại, làm lại' }, { w: '制定计划', py: 'zhìdìng jìhuà', vi: 'lập kế hoạch' }, { w: '不足', py: 'bùzú', vi: 'điểm yếu, chỗ chưa đủ' } ] },
        { zh: '他相信，只要不被失败打倒，就一定会越来越好。', py: 'Tā xiāngxìn, zhǐyào bú bèi shībài dǎdǎo, jiù yídìng huì yuè lái yuè hǎo.', vi: 'Bạn ấy tin rằng, chỉ cần không bị thất bại đánh gục, thì nhất định sẽ ngày càng tốt hơn.', audio: '',
          gloss: [ { w: '被…打倒', py: 'bèi…dǎdǎo', vi: 'bị… đánh gục' }, { w: '越来越好', py: 'yuè lái yuè hǎo', vi: 'ngày càng tốt hơn' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Vì sao lúc đầu Tiểu Đông thất vọng?', en: 'Why is Xiao Dong disappointed at first?' }, options: ['Cuộc thi không đạt thành tích tốt', 'Bị mất đồ', 'Cãi nhau với bạn', 'Bị ốm'], answer: 0, explain_vi: '没有得到好成绩…非常失望 = không đạt thành tích tốt.' },
      { q: { vi: 'Bố khuyên Tiểu Đông điều gì?', en: 'What does dad advise Xiao Dong?' }, options: ['Dù thất bại vẫn học được kinh nghiệm', 'Nên bỏ sở thích', 'Đừng thi nữa', 'Chuyển môn khác'], answer: 0, explain_vi: '哪怕这次失败了，你也学到了经验 = dù thất bại vẫn học được kinh nghiệm.' },
      { q: { vi: 'Cuối cùng Tiểu Đông làm gì?', en: 'What does Xiao Dong do in the end?' }, options: ['Lập lại kế hoạch và tìm ra điểm yếu', 'Bỏ cuộc hẳn', 'Đổ lỗi cho người khác', 'Không làm gì'], answer: 0, explain_vi: '重新制定了计划，找出了自己的不足 = lập lại kế hoạch, tìm điểm yếu.' },
      { q: { vi: 'Thông điệp của bài về thất bại là gì?', en: 'What is the message about failure?' }, options: ['Thất bại là một phần của trưởng thành nếu ta không gục ngã', 'Nên tránh mọi thất bại', 'Thất bại là dấu chấm hết', 'Chỉ người kém mới thất bại'], answer: 0, explain_vi: 'Suy luận: "把失败当成学习的机会" + "不被失败打倒" → thất bại là phần của trưởng thành.' }
    ]
  },
  {
    id: 'rd-5-009', level: 5, topic: 'doc-sach',
    title: { vi: 'Vì sao nên đọc sách cũ', en: 'Why Read Old Books', zh: '为什么要读老书' },
    summary_vi: 'Tiểu Lệ khám phá rằng những cuốn sách kinh điển vẫn còn giá trị vì chúng nói về những điều không bao giờ cũ.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 197,
    paragraphs: [{
      sentences: [
        { zh: '丽原来只喜欢看新出的书，觉得老书离自己太远。', py: 'Lì yuánlái zhǐ xǐhuan kàn xīn chū de shū, juéde lǎo shū lí zìjǐ tài yuǎn.', vi: 'Lệ vốn chỉ thích đọc sách mới ra, thấy sách cũ quá xa vời với mình.', audio: '',
          gloss: [ { w: '原来', py: 'yuánlái', vi: 'vốn dĩ' }, { w: '新出的书', py: 'xīn chū de shū', vi: 'sách mới ra' }, { w: '离…远', py: 'lí…yuǎn', vi: 'cách… xa' } ] },
        { zh: '有一次，老师推荐她读一本几十年前的小说。', py: 'Yǒu yí cì, lǎoshī tuījiàn tā dú yì běn jǐ shí nián qián de xiǎoshuō.', vi: 'Có lần, cô giáo giới thiệu bạn ấy đọc một cuốn tiểu thuyết của mấy chục năm trước.', audio: '',
          gloss: [ { w: '推荐', py: 'tuījiàn', vi: 'giới thiệu, đề cử' }, { w: '小说', py: 'xiǎoshuō', vi: 'tiểu thuyết' }, { w: '几十年前', py: 'jǐ shí nián qián', vi: 'mấy chục năm trước' } ] },
        { zh: '一开始她没什么兴趣，但读着读着就被故事吸引了。', py: 'Yì kāishǐ tā méi shénme xìngqù, dàn dú zhe dú zhe jiù bèi gùshi xīyǐn le.', vi: 'Lúc đầu bạn ấy không mấy hứng thú, nhưng đọc dần thì bị câu chuyện cuốn hút.', audio: '',
          gloss: [ { w: '兴趣', py: 'xìngqù', vi: 'hứng thú' }, { w: '被…吸引', py: 'bèi…xīyǐn', vi: 'bị… cuốn hút' }, { w: '故事', py: 'gùshi', vi: 'câu chuyện' } ] }
      ]
    }, {
      sentences: [
        { zh: '书里写的虽然是过去的生活，但人物的感情和现在很像。', py: 'Shū lǐ xiě de suīrán shì guòqù de shēnghuó, dàn rénwù de gǎnqíng hé xiànzài hěn xiàng.', vi: 'Tuy sách viết về cuộc sống quá khứ, nhưng tình cảm của nhân vật rất giống hiện tại.', audio: '',
          gloss: [ { w: '人物', py: 'rénwù', vi: 'nhân vật' }, { w: '感情', py: 'gǎnqíng', vi: 'tình cảm' }, { w: '很像', py: 'hěn xiàng', vi: 'rất giống' } ] },
        { zh: '丽发现，这本书之所以一直被人喜欢，是因为它写出了人心。', py: 'Lì fāxiàn, zhè běn shū zhīsuǒyǐ yìzhí bèi rén xǐhuan, shì yīnwèi tā xiě chū le rénxīn.', vi: 'Lệ phát hiện, sở dĩ cuốn sách này luôn được yêu thích là vì nó viết ra được lòng người.', audio: '',
          gloss: [ { w: '之所以…是因为', py: 'zhīsuǒyǐ…shì yīnwèi', vi: 'sở dĩ…là vì' }, { w: '一直', py: 'yìzhí', vi: 'luôn' }, { w: '人心', py: 'rénxīn', vi: 'lòng người' } ] },
        { zh: '一些道理无论过了多少年，都不会过时。', py: 'Yìxiē dàolǐ wúlùn guò le duōshǎo nián, dōu bú huì guòshí.', vi: 'Một số đạo lý dù trải qua bao nhiêu năm cũng không lỗi thời.', audio: '',
          gloss: [ { w: '道理', py: 'dàolǐ', vi: 'đạo lý' }, { w: '无论…都', py: 'wúlùn…dōu', vi: 'bất kể…đều' }, { w: '过时', py: 'guòshí', vi: 'lỗi thời' } ] }
      ]
    }, {
      sentences: [
        { zh: '从那以后，丽开始主动去读一些经典的作品。', py: 'Cóng nà yǐhòu, Lì kāishǐ zhǔdòng qù dú yìxiē jīngdiǎn de zuòpǐn.', vi: 'Từ đó, Lệ bắt đầu chủ động đọc một số tác phẩm kinh điển.', audio: '',
          gloss: [ { w: '主动', py: 'zhǔdòng', vi: 'chủ động' }, { w: '经典', py: 'jīngdiǎn', vi: 'kinh điển' }, { w: '作品', py: 'zuòpǐn', vi: 'tác phẩm' } ] },
        { zh: '她觉得，这些书就像和过去的人聊天一样。', py: 'Tā juéde, zhèxiē shū jiù xiàng hé guòqù de rén liáotiān yíyàng.', vi: 'Bạn ấy thấy, những cuốn sách này giống như trò chuyện với người xưa.', audio: '',
          gloss: [ { w: '就像…一样', py: 'jiù xiàng…yíyàng', vi: 'giống như…' }, { w: '过去的人', py: 'guòqù de rén', vi: 'người xưa' } ] },
        { zh: '在她看来，好书是不会因为时间而失去价值的。', py: 'Zài tā kàn lái, hǎo shū shì bú huì yīnwèi shíjiān ér shīqù jiàzhí de.', vi: 'Theo bạn ấy, sách hay sẽ không vì thời gian mà mất đi giá trị.', audio: '',
          gloss: [ { w: '在…看来', py: 'zài…kàn lái', vi: 'theo… thấy' }, { w: '失去', py: 'shīqù', vi: 'mất đi' }, { w: '价值', py: 'jiàzhí', vi: 'giá trị' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Ban đầu Lệ nghĩ gì về sách cũ?', en: 'What does Li think of old books at first?' }, options: ['Quá xa vời với mình', 'Rất hấp dẫn', 'Dễ đọc', 'Rẻ tiền'], answer: 0, explain_vi: '觉得老书离自己太远 = thấy sách cũ quá xa vời.' },
      { q: { vi: 'Vì sao cuốn tiểu thuyết cũ vẫn được yêu thích?', en: 'Why is the old novel still loved?' }, options: ['Vì nó viết ra được lòng người', 'Vì nó rất mới', 'Vì nó ngắn', 'Vì nó nổi tiếng'], answer: 0, explain_vi: '之所以一直被人喜欢，是因为它写出了人心 = vì viết ra lòng người.' },
      { q: { vi: 'Lệ ví việc đọc sách kinh điển với điều gì?', en: 'What does Li compare reading classics to?' }, options: ['Trò chuyện với người xưa', 'Xem một bộ phim', 'Đi du lịch', 'Làm bài tập'], answer: 0, explain_vi: '就像和过去的人聊天一样 = giống trò chuyện với người xưa.' },
      { q: { vi: 'Quan điểm cuối của bài là gì?', en: 'What is the final point?' }, options: ['Sách hay không mất giá trị theo thời gian', 'Chỉ nên đọc sách mới', 'Sách cũ luôn khó hiểu', 'Đọc sách là phí thời gian'], answer: 0, explain_vi: 'Suy luận: "好书…不会因为时间而失去价值" → sách hay không mất giá trị theo thời gian.' }
    ]
  },
  {
    id: 'rd-5-010', level: 5, topic: 'ke-hoach-nghe-nghiep',
    title: { vi: 'Chọn nghề theo đam mê', en: 'Choosing a Career by Passion', zh: '按兴趣选择职业' },
    summary_vi: 'Tiểu Văn phân vân giữa công việc ổn định và công việc mình yêu thích; bạn ấy học cách cân nhắc cả hai.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 198,
    paragraphs: [{
      sentences: [
        { zh: '快毕业了，小文要决定将来做什么工作。', py: 'Kuài bìyè le, Xiǎo Wén yào juédìng jiānglái zuò shénme gōngzuò.', vi: 'Sắp tốt nghiệp, Tiểu Văn phải quyết định tương lai làm công việc gì.', audio: '',
          gloss: [ { w: '毕业', py: 'bìyè', vi: 'tốt nghiệp' }, { w: '决定', py: 'juédìng', vi: 'quyết định' }, { w: '将来', py: 'jiānglái', vi: 'tương lai' } ] },
        { zh: '父母希望她找一份稳定的工作，比如在银行上班。', py: 'Fùmǔ xīwàng tā zhǎo yí fèn wěndìng de gōngzuò, bǐrú zài yínháng shàngbān.', vi: 'Bố mẹ mong bạn ấy tìm một công việc ổn định, ví dụ làm ở ngân hàng.', audio: '',
          gloss: [ { w: '稳定', py: 'wěndìng', vi: 'ổn định' }, { w: '比如', py: 'bǐrú', vi: 'ví dụ' }, { w: '银行', py: 'yínháng', vi: 'ngân hàng' } ] },
        { zh: '但小文真正喜欢的，是和艺术有关的工作。', py: 'Dàn Xiǎo Wén zhēnzhèng xǐhuan de, shì hé yìshù yǒuguān de gōngzuò.', vi: 'Nhưng điều Tiểu Văn thật sự thích là công việc liên quan đến nghệ thuật.', audio: '',
          gloss: [ { w: '真正', py: 'zhēnzhèng', vi: 'thật sự' }, { w: '艺术', py: 'yìshù', vi: 'nghệ thuật' }, { w: '有关', py: 'yǒuguān', vi: 'liên quan' } ] }
      ]
    }, {
      sentences: [
        { zh: '她既不想让父母失望，又不愿意放弃自己的兴趣。', py: 'Tā jì bù xiǎng ràng fùmǔ shīwàng, yòu bú yuànyì fàngqì zìjǐ de xìngqù.', vi: 'Bạn ấy vừa không muốn làm bố mẹ thất vọng, vừa không muốn từ bỏ sở thích của mình.', audio: '',
          gloss: [ { w: '既…又', py: 'jì…yòu', vi: 'vừa…vừa' }, { w: '失望', py: 'shīwàng', vi: 'thất vọng' }, { w: '放弃', py: 'fàngqì', vi: 'từ bỏ' } ] },
        { zh: '为了想清楚，她和几位已经工作的学长聊了聊。', py: 'Wèile xiǎng qīngchu, tā hé jǐ wèi yǐjīng gōngzuò de xuézhǎng liáo le liáo.', vi: 'Để nghĩ cho rõ, bạn ấy trò chuyện với vài anh chị khóa trên đã đi làm.', audio: '',
          gloss: [ { w: '想清楚', py: 'xiǎng qīngchu', vi: 'nghĩ cho rõ' }, { w: '学长', py: 'xuézhǎng', vi: 'anh/chị khóa trên' }, { w: '聊一聊', py: 'liáo yi liáo', vi: 'trò chuyện một chút' } ] },
        { zh: '他们告诉她，尽管现实有压力，但还是要听一听内心的声音。', py: 'Tāmen gàosu tā, jǐnguǎn xiànshí yǒu yālì, dàn háishi yào tīng yi tīng nèixīn de shēngyīn.', vi: 'Họ bảo bạn ấy, mặc dù thực tế có áp lực, nhưng vẫn nên lắng nghe tiếng nói bên trong.', audio: '',
          gloss: [ { w: '尽管…还是', py: 'jǐnguǎn…háishi', vi: 'mặc dù…vẫn' }, { w: '现实', py: 'xiànshí', vi: 'thực tế' }, { w: '内心', py: 'nèixīn', vi: 'nội tâm, bên trong' } ] }
      ]
    }, {
      sentences: [
        { zh: '最后，小文做了一个折中的选择。', py: 'Zuìhòu, Xiǎo Wén zuò le yí ge zhézhōng de xuǎnzé.', vi: 'Cuối cùng, Tiểu Văn đưa ra một lựa chọn dung hòa.', audio: '',
          gloss: [ { w: '折中', py: 'zhézhōng', vi: 'dung hòa, trung dung' }, { w: '选择', py: 'xuǎnzé', vi: 'lựa chọn' } ] },
        { zh: '她先找了一份比较稳定的工作，同时利用业余时间学艺术。', py: 'Tā xiān zhǎo le yí fèn bǐjiào wěndìng de gōngzuò, tóngshí lìyòng yèyú shíjiān xué yìshù.', vi: 'Bạn ấy tìm một công việc tương đối ổn định trước, đồng thời tận dụng thời gian rảnh để học nghệ thuật.', audio: '',
          gloss: [ { w: '同时', py: 'tóngshí', vi: 'đồng thời' }, { w: '利用', py: 'lìyòng', vi: 'tận dụng' }, { w: '业余时间', py: 'yèyú shíjiān', vi: 'thời gian rảnh' } ] },
        { zh: '她相信，只要不放弃，梦想总有一天会实现。', py: 'Tā xiāngxìn, zhǐyào bú fàngqì, mèngxiǎng zǒng yǒu yì tiān huì shíxiàn.', vi: 'Bạn ấy tin rằng, chỉ cần không từ bỏ, ước mơ rồi sẽ có ngày thực hiện được.', audio: '',
          gloss: [ { w: '梦想', py: 'mèngxiǎng', vi: 'ước mơ' }, { w: '实现', py: 'shíxiàn', vi: 'thực hiện' }, { w: '总有一天', py: 'zǒng yǒu yì tiān', vi: 'rồi sẽ có ngày' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Bố mẹ mong Tiểu Văn làm công việc thế nào?', en: 'What job do her parents hope for?' }, options: ['Một công việc ổn định', 'Một công việc nghệ thuật', 'Làm việc ở nước ngoài', 'Tự mở công ty'], answer: 0, explain_vi: '希望她找一份稳定的工作 = mong công việc ổn định.' },
      { q: { vi: 'Các anh chị khóa trên khuyên gì?', en: 'What do the seniors advise?' }, options: ['Dù có áp lực vẫn nên nghe tiếng nói bên trong', 'Chỉ nên nghe lời bố mẹ', 'Bỏ học đi làm ngay', 'Đừng theo nghệ thuật'], answer: 0, explain_vi: '尽管现实有压力，但还是要听一听内心的声音 = vẫn nên nghe tiếng lòng.' },
      { q: { vi: 'Lựa chọn cuối cùng của Tiểu Văn là gì?', en: "What is Xiao Wen's final choice?" }, options: ['Làm việc ổn định và học nghệ thuật lúc rảnh', 'Bỏ hẳn nghệ thuật', 'Bỏ việc theo nghệ thuật ngay', 'Không quyết định gì'], answer: 0, explain_vi: '找一份稳定的工作，同时利用业余时间学艺术 = dung hòa cả hai.' },
      { q: { vi: 'Thái độ của Tiểu Văn với ước mơ là gì?', en: "What is Xiao Wen's attitude toward her dream?" }, options: ['Kiên trì, tin rằng sẽ có ngày thực hiện được', 'Đã từ bỏ', 'Coi nhẹ ước mơ', 'Phó mặc cho may rủi'], answer: 0, explain_vi: 'Suy luận: "只要不放弃，梦想总有一天会实现" → kiên trì, tin sẽ thực hiện được.' }
    ]
  }
];
