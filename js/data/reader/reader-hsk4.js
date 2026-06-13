// ═══════════════════════════════════════════════════════
// READER DATA — HSK 3.0 cấp 4 (Graded Reader Việt-first, Phase A1)
// Schema chốt tại docs/plans/a1-reader-investigation.md §C
// Quy ước: var dynamic-injected (KHÔNG const) — theo CLAUDE.md.
// source:'ai-gen' = nội dung tự sinh, CHỜ chủ dự án duyệt (điền reviewed_*).
// ═══════════════════════════════════════════════════════

var READER_DATA = (typeof READER_DATA !== 'undefined') ? READER_DATA : {};

READER_DATA[4] = [
  {
    id: 'rd-4-001', level: 4, topic: 'ke-hoach-nghe-nghiep',
    title: { vi: 'Kế hoạch nghề nghiệp', en: 'A Career Plan', zh: '职业计划' },
    summary_vi: 'Tiểu Văn suy nghĩ về công việc tương lai, ngoài học giỏi còn rèn thêm kỹ năng giao tiếp và làm thêm.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 152,
    paragraphs: [{
      sentences: [
        { zh: '小文今年读大学三年级，开始考虑将来的工作。', py: 'Xiǎo Wén jīnnián dú dàxué sān niánjí, kāishǐ kǎolǜ jiānglái de gōngzuò.', vi: 'Tiểu Văn năm nay học đại học năm ba, bắt đầu suy nghĩ về công việc tương lai.', audio: '',
          gloss: [ { w: '三年级', py: 'sān niánjí', vi: 'năm thứ ba' }, { w: '考虑', py: 'kǎolǜ', vi: 'cân nhắc, suy nghĩ' }, { w: '将来', py: 'jiānglái', vi: 'tương lai' } ] },
        { zh: '她发现，除了学习成绩以外，能力也非常重要。', py: 'Tā fāxiàn, chúle xuéxí chéngjì yǐwài, nénglì yě fēicháng zhòngyào.', vi: 'Bạn ấy nhận ra, ngoài thành tích học tập, năng lực cũng rất quan trọng.', audio: '',
          gloss: [ { w: '除了…以外', py: 'chúle…yǐwài', vi: 'ngoài…ra' }, { w: '能力', py: 'nénglì', vi: 'năng lực' }, { w: '重要', py: 'zhòngyào', vi: 'quan trọng' } ] },
        { zh: '所以她不但认真上课，而且参加了很多活动。', py: 'Suǒyǐ tā búdàn rènzhēn shàngkè, érqiě cānjiā le hěn duō huódòng.', vi: 'Vì vậy bạn ấy không những chăm chỉ học, mà còn tham gia nhiều hoạt động.', audio: '',
          gloss: [ { w: '不但…而且', py: 'búdàn…érqiě', vi: 'không những…mà còn' }, { w: '参加', py: 'cānjiā', vi: 'tham gia' }, { w: '活动', py: 'huódòng', vi: 'hoạt động' } ] },
        { zh: '通过这些活动，她的交流能力提高了不少。', py: 'Tōngguò zhèxiē huódòng, tā de jiāoliú nénglì tígāo le bù shǎo.', vi: 'Thông qua những hoạt động này, khả năng giao tiếp của bạn ấy nâng cao đáng kể.', audio: '',
          gloss: [ { w: '通过', py: 'tōngguò', vi: 'thông qua' }, { w: '交流', py: 'jiāoliú', vi: 'giao tiếp, trao đổi' }, { w: '提高', py: 'tígāo', vi: 'nâng cao' } ] }
      ]
    }, {
      sentences: [
        { zh: '为了了解真实的工作，她还在一家公司实习。', py: 'Wèile liǎojiě zhēnshí de gōngzuò, tā hái zài yì jiā gōngsī shíxí.', vi: 'Để hiểu công việc thực tế, bạn ấy còn thực tập tại một công ty.', audio: '',
          gloss: [ { w: '为了', py: 'wèile', vi: 'để (mục đích)' }, { w: '了解', py: 'liǎojiě', vi: 'tìm hiểu' }, { w: '实习', py: 'shíxí', vi: 'thực tập' } ] },
        { zh: '刚开始的时候，她对很多事情都不熟悉。', py: 'Gāng kāishǐ de shíhou, tā duì hěn duō shìqing dōu bù shúxī.', vi: 'Lúc mới bắt đầu, bạn ấy chưa quen với nhiều việc.', audio: '',
          gloss: [ { w: '刚开始', py: 'gāng kāishǐ', vi: 'lúc mới bắt đầu' }, { w: '熟悉', py: 'shúxī', vi: 'quen thuộc' } ] },
        { zh: '但是她愿意学习，遇到问题就主动问别人。', py: 'Dànshì tā yuànyì xuéxí, yùdào wèntí jiù zhǔdòng wèn biérén.', vi: 'Nhưng bạn ấy sẵn lòng học hỏi, gặp vấn đề thì chủ động hỏi người khác.', audio: '',
          gloss: [ { w: '愿意', py: 'yuànyì', vi: 'sẵn lòng' }, { w: '主动', py: 'zhǔdòng', vi: 'chủ động' }, { w: '遇到', py: 'yùdào', vi: 'gặp phải' } ] },
        { zh: '她相信，只要努力准备，将来一定能找到合适的工作。', py: 'Tā xiāngxìn, zhǐyào nǔlì zhǔnbèi, jiānglái yídìng néng zhǎodào héshì de gōngzuò.', vi: 'Bạn ấy tin rằng, chỉ cần nỗ lực chuẩn bị, tương lai nhất định tìm được công việc phù hợp.', audio: '',
          gloss: [ { w: '相信', py: 'xiāngxìn', vi: 'tin tưởng' }, { w: '只要', py: 'zhǐyào', vi: 'chỉ cần' }, { w: '合适', py: 'héshì', vi: 'phù hợp' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Ngoài thành tích học tập, Tiểu Văn cho rằng điều gì cũng quan trọng?', en: 'Besides grades, what does Xiao Wen think is also important?' }, options: ['Năng lực', 'Tiền bạc', 'Quần áo đẹp', 'Nhà to'], answer: 0, explain_vi: '除了学习成绩以外，能力也非常重要 = ngoài thành tích, năng lực cũng quan trọng.' },
      { q: { vi: 'Vì sao bạn ấy đi thực tập?', en: 'Why does she do an internship?' }, options: ['Để hiểu công việc thực tế', 'Để kiếm thật nhiều tiền', 'Để nghỉ học', 'Để đi du lịch'], answer: 0, explain_vi: '为了了解真实的工作 = để hiểu công việc thực tế.' },
      { q: { vi: 'Từ câu chuyện, có thể thấy Tiểu Văn là người thế nào?', en: 'From the story, what kind of person is Xiao Wen?' }, options: ['Chủ động và biết chuẩn bị cho tương lai', 'Lười biếng', 'Chỉ thích chơi', 'Ngại giao tiếp'], answer: 0, explain_vi: 'Suy luận: bạn ấy tham gia hoạt động, thực tập, chủ động hỏi → chủ động và biết chuẩn bị.' }
    ]
  },
  {
    id: 'rd-4-002', level: 4, topic: 'quan-ly-thoi-gian',
    title: { vi: 'Quản lý thời gian', en: 'Managing Time', zh: '管理时间' },
    summary_vi: 'Tiểu Đông hay làm việc vào phút chót; sau khi lập danh sách việc cần làm, bạn ấy bớt căng thẳng và hiệu quả hơn.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 150,
    paragraphs: [{
      sentences: [
        { zh: '小东以前总是把事情留到最后一刻才做。', py: 'Xiǎo Dōng yǐqián zǒngshì bǎ shìqing liú dào zuìhòu yí kè cái zuò.', vi: 'Trước đây Tiểu Đông luôn để mọi việc đến phút chót mới làm.', audio: '',
          gloss: [ { w: '总是', py: 'zǒngshì', vi: 'luôn luôn' }, { w: '留到最后', py: 'liú dào zuìhòu', vi: 'để đến cuối cùng' }, { w: '才', py: 'cái', vi: 'mới' } ] },
        { zh: '结果他常常很着急，作业也做得不够好。', py: 'Jiéguǒ tā chángcháng hěn zháojí, zuòyè yě zuò de bú gòu hǎo.', vi: 'Kết quả là bạn ấy thường rất vội, bài tập cũng làm chưa đủ tốt.', audio: '',
          gloss: [ { w: '结果', py: 'jiéguǒ', vi: 'kết quả' }, { w: '着急', py: 'zháojí', vi: 'sốt ruột, vội' }, { w: '不够好', py: 'bú gòu hǎo', vi: 'chưa đủ tốt' } ] },
        { zh: '后来，老师建议他每天写一个计划表。', py: 'Hòulái, lǎoshī jiànyì tā měitiān xiě yí ge jìhuà biǎo.', vi: 'Về sau, thầy giáo khuyên bạn ấy mỗi ngày viết một bảng kế hoạch.', audio: '',
          gloss: [ { w: '后来', py: 'hòulái', vi: 'về sau' }, { w: '建议', py: 'jiànyì', vi: 'khuyên, đề nghị' }, { w: '计划表', py: 'jìhuà biǎo', vi: 'bảng kế hoạch' } ] }
      ]
    }, {
      sentences: [
        { zh: '他把重要的事情写在前面，先做完再休息。', py: 'Tā bǎ zhòngyào de shìqing xiě zài qiánmiàn, xiān zuò wán zài xiūxi.', vi: 'Bạn ấy viết việc quan trọng lên trước, làm xong rồi mới nghỉ.', audio: '',
          gloss: [ { w: '重要', py: 'zhòngyào', vi: 'quan trọng' }, { w: '先…再', py: 'xiān…zài', vi: 'trước…rồi' }, { w: '休息', py: 'xiūxi', vi: 'nghỉ ngơi' } ] },
        { zh: '通过这个方法，他的生活变得有条理了。', py: 'Tōngguò zhège fāngfǎ, tā de shēnghuó biàn de yǒu tiáolǐ le.', vi: 'Nhờ phương pháp này, cuộc sống của bạn ấy trở nên ngăn nắp.', audio: '',
          gloss: [ { w: '通过', py: 'tōngguò', vi: 'thông qua, nhờ' }, { w: '生活', py: 'shēnghuó', vi: 'cuộc sống' }, { w: '有条理', py: 'yǒu tiáolǐ', vi: 'có thứ tự, ngăn nắp' } ] },
        { zh: '现在他不但不再着急，而且有时间做自己喜欢的事。', py: 'Xiànzài tā búdàn bú zài zháojí, érqiě yǒu shíjiān zuò zìjǐ xǐhuan de shì.', vi: 'Bây giờ bạn ấy không những không còn vội, mà còn có thời gian làm việc mình thích.', audio: '',
          gloss: [ { w: '不但…而且', py: 'búdàn…érqiě', vi: 'không những…mà còn' }, { w: '不再', py: 'bú zài', vi: 'không còn' }, { w: '有时间', py: 'yǒu shíjiān', vi: 'có thời gian' } ] },
        { zh: '他说：“管理好时间，就是管理好自己的生活。”', py: 'Tā shuō: “Guǎnlǐ hǎo shíjiān, jiùshì guǎnlǐ hǎo zìjǐ de shēnghuó.”', vi: 'Bạn ấy nói: “Quản lý tốt thời gian chính là quản lý tốt cuộc sống của mình.”', audio: '',
          gloss: [ { w: '管理', py: 'guǎnlǐ', vi: 'quản lý' }, { w: '就是', py: 'jiùshì', vi: 'chính là' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Trước đây thói quen của Tiểu Đông là gì?', en: "What was Xiao Dong's habit before?" }, options: ['Để mọi việc đến phút chót', 'Làm bài rất sớm', 'Không bao giờ học', 'Luôn nghỉ ngơi'], answer: 0, explain_vi: '总是把事情留到最后一刻才做 = để mọi việc đến phút chót.' },
      { q: { vi: 'Thầy giáo khuyên bạn ấy làm gì?', en: 'What does the teacher advise him to do?' }, options: ['Viết bảng kế hoạch mỗi ngày', 'Ngủ nhiều hơn', 'Đổi trường', 'Bớt làm bài'], answer: 0, explain_vi: '建议他每天写一个计划表 = khuyên viết bảng kế hoạch mỗi ngày.' },
      { q: { vi: 'Có thể rút ra bài học gì từ câu chuyện?', en: 'What lesson can be drawn from the story?' }, options: ['Sắp xếp thời gian giúp sống tốt hơn', 'Nên làm việc vào phút chót', 'Nghỉ ngơi quan trọng hơn học', 'Không cần kế hoạch'], answer: 0, explain_vi: 'Suy luận: nhờ lập kế hoạch nên bớt vội và có thêm thời gian → sắp xếp thời gian giúp sống tốt hơn.' }
    ]
  },
  {
    id: 'rd-4-003', level: 4, topic: 'moi-truong',
    title: { vi: 'Tiết kiệm trong đời sống', en: 'Saving in Daily Life', zh: '生活中的节约' },
    summary_vi: 'Một gia đình tập thói quen tiết kiệm nước và điện, phân loại rác, dạy con bảo vệ môi trường.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 156,
    paragraphs: [{
      sentences: [
        { zh: '小明的家最近开始注意节约。', py: 'Xiǎo Míng de jiā zuìjìn kāishǐ zhùyì jiéyuē.', vi: 'Gần đây gia đình Tiểu Minh bắt đầu chú ý tiết kiệm.', audio: '',
          gloss: [ { w: '最近', py: 'zuìjìn', vi: 'gần đây' }, { w: '注意', py: 'zhùyì', vi: 'chú ý' }, { w: '节约', py: 'jiéyuē', vi: 'tiết kiệm' } ] },
        { zh: '妈妈说，无论用水还是用电，都不应该浪费。', py: 'Māma shuō, wúlùn yòng shuǐ háishi yòng diàn, dōu bù yīnggāi làngfèi.', vi: 'Mẹ nói, bất kể dùng nước hay dùng điện, đều không nên lãng phí.', audio: '',
          gloss: [ { w: '无论…都', py: 'wúlùn…dōu', vi: 'bất kể…đều' }, { w: '用电', py: 'yòng diàn', vi: 'dùng điện' }, { w: '浪费', py: 'làngfèi', vi: 'lãng phí' } ] },
        { zh: '所以离开房间的时候，他们总是把灯关掉。', py: 'Suǒyǐ líkāi fángjiān de shíhou, tāmen zǒngshì bǎ dēng guān diào.', vi: 'Nên khi rời khỏi phòng, họ luôn tắt đèn.', audio: '',
          gloss: [ { w: '离开', py: 'líkāi', vi: 'rời khỏi' }, { w: '把灯关掉', py: 'bǎ dēng guān diào', vi: 'tắt đèn' } ] }
      ]
    }, {
      sentences: [
        { zh: '他们还学会了把垃圾分类。', py: 'Tāmen hái xuéhuì le bǎ lājī fēnlèi.', vi: 'Họ còn học được cách phân loại rác.', audio: '',
          gloss: [ { w: '学会', py: 'xuéhuì', vi: 'học được' }, { w: '垃圾', py: 'lājī', vi: 'rác' }, { w: '分类', py: 'fēnlèi', vi: 'phân loại' } ] },
        { zh: '小明负责把能回收的东西放在一起。', py: 'Xiǎo Míng fùzé bǎ néng huíshōu de dōngxi fàng zài yìqǐ.', vi: 'Tiểu Minh phụ trách để chung những thứ có thể tái chế.', audio: '',
          gloss: [ { w: '回收', py: 'huíshōu', vi: 'tái chế, thu hồi' }, { w: '放在一起', py: 'fàng zài yìqǐ', vi: 'để chung với nhau' } ] },
        { zh: '虽然这些都是小事，但是对环境很有好处。', py: 'Suīrán zhèxiē dōu shì xiǎoshì, dànshì duì huánjìng hěn yǒu hǎochù.', vi: 'Tuy đây đều là việc nhỏ, nhưng rất có lợi cho môi trường.', audio: '',
          gloss: [ { w: '小事', py: 'xiǎoshì', vi: 'việc nhỏ' }, { w: '环境', py: 'huánjìng', vi: 'môi trường' }, { w: '好处', py: 'hǎochù', vi: 'lợi ích' } ] },
        { zh: '爸爸说：“保护环境，要从每个人做起。”', py: 'Bàba shuō: “Bǎohù huánjìng, yào cóng měi ge rén zuò qǐ.”', vi: 'Bố nói: “Bảo vệ môi trường phải bắt đầu từ mỗi người.”', audio: '',
          gloss: [ { w: '保护', py: 'bǎohù', vi: 'bảo vệ' }, { w: '从…做起', py: 'cóng…zuò qǐ', vi: 'bắt đầu từ…' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Mẹ Tiểu Minh nói thế nào về việc dùng nước và điện?', en: 'What does mom say about using water and electricity?' }, options: ['Đều không nên lãng phí', 'Dùng càng nhiều càng tốt', 'Chỉ tiết kiệm nước', 'Không cần quan tâm'], answer: 0, explain_vi: '无论用水还是用电，都不应该浪费 = bất kể nước hay điện đều không nên lãng phí.' },
      { q: { vi: 'Tiểu Minh phụ trách việc gì?', en: 'What is Xiao Ming responsible for?' }, options: ['Để chung đồ có thể tái chế', 'Nấu cơm', 'Mua đồ', 'Quét sân'], answer: 0, explain_vi: '负责把能回收的东西放在一起 = để chung đồ có thể tái chế.' },
      { q: { vi: 'Ý chính của câu chuyện là gì?', en: 'What is the main idea of the story?' }, options: ['Bảo vệ môi trường bắt đầu từ những việc nhỏ của mỗi người', 'Tiết kiệm chỉ là việc của người lớn', 'Việc nhỏ không có ích gì', 'Phân loại rác rất khó'], answer: 0, explain_vi: 'Suy luận: việc nhỏ nhưng có lợi cho môi trường, "从每个人做起" → bắt đầu từ việc nhỏ của mỗi người.' }
    ]
  },
  {
    id: 'rd-4-004', level: 4, topic: 'am-thuc',
    title: { vi: 'Món ăn quê hương', en: 'Hometown Food', zh: '家乡的味道' },
    summary_vi: 'Tiểu Lệ giới thiệu món ăn quê mình cho bạn nước ngoài; với bạn ấy, món ăn quê chứa đựng kỷ niệm tuổi thơ.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 154,
    paragraphs: [{
      sentences: [
        { zh: '丽的家乡在南方，那里的菜又香又特别。', py: 'Lì de jiāxiāng zài nánfāng, nàlǐ de cài yòu xiāng yòu tèbié.', vi: 'Quê Lệ ở phương Nam, món ăn ở đó vừa thơm vừa đặc biệt.', audio: '',
          gloss: [ { w: '家乡', py: 'jiāxiāng', vi: 'quê hương' }, { w: '南方', py: 'nánfāng', vi: 'phương Nam' }, { w: '特别', py: 'tèbié', vi: 'đặc biệt' } ] },
        { zh: '有一个外国朋友想了解中国的饮食文化。', py: 'Yǒu yí ge wàiguó péngyǒu xiǎng liǎojiě Zhōngguó de yǐnshí wénhuà.', vi: 'Có một người bạn nước ngoài muốn tìm hiểu văn hóa ẩm thực Trung Quốc.', audio: '',
          gloss: [ { w: '外国朋友', py: 'wàiguó péngyǒu', vi: 'bạn nước ngoài' }, { w: '饮食文化', py: 'yǐnshí wénhuà', vi: 'văn hóa ẩm thực' }, { w: '了解', py: 'liǎojiě', vi: 'tìm hiểu' } ] },
        { zh: '于是丽决定请他尝一尝家乡的味道。', py: 'Yúshì Lì juédìng qǐng tā cháng yi cháng jiāxiāng de wèidào.', vi: 'Thế là Lệ quyết định mời bạn ấy nếm thử hương vị quê hương.', audio: '',
          gloss: [ { w: '于是', py: 'yúshì', vi: 'thế là' }, { w: '尝一尝', py: 'cháng yi cháng', vi: 'nếm thử' }, { w: '味道', py: 'wèidào', vi: 'hương vị' } ] }
      ]
    }, {
      sentences: [
        { zh: '她做了一道很普通的家常菜。', py: 'Tā zuò le yí dào hěn pǔtōng de jiācháng cài.', vi: 'Bạn ấy nấu một món ăn nhà rất bình thường.', audio: '',
          gloss: [ { w: '一道菜', py: 'yí dào cài', vi: 'một món ăn' }, { w: '普通', py: 'pǔtōng', vi: 'bình thường' }, { w: '家常菜', py: 'jiācháng cài', vi: 'món ăn nhà' } ] },
        { zh: '对丽来说，这道菜让她想起小时候的家。', py: 'Duì Lì lái shuō, zhè dào cài ràng tā xiǎng qǐ xiǎoshíhou de jiā.', vi: 'Đối với Lệ, món ăn này khiến bạn ấy nhớ đến ngôi nhà thời thơ ấu.', audio: '',
          gloss: [ { w: '对…来说', py: 'duì…lái shuō', vi: 'đối với…mà nói' }, { w: '想起', py: 'xiǎng qǐ', vi: 'nhớ đến' }, { w: '小时候', py: 'xiǎoshíhou', vi: 'thời thơ ấu' } ] },
        { zh: '朋友尝了以后，觉得味道非常好。', py: 'Péngyǒu cháng le yǐhòu, juéde wèidào fēicháng hǎo.', vi: 'Người bạn nếm xong, thấy hương vị rất ngon.', audio: '',
          gloss: [ { w: '尝', py: 'cháng', vi: 'nếm' }, { w: '味道好', py: 'wèidào hǎo', vi: 'vị ngon' } ] },
        { zh: '丽笑着说：“每个地方的菜，都有自己的故事。”', py: 'Lì xiào zhe shuō: “Měi ge dìfang de cài, dōu yǒu zìjǐ de gùshi.”', vi: 'Lệ cười nói: “Món ăn của mỗi nơi đều có câu chuyện riêng.”', audio: '',
          gloss: [ { w: '每个地方', py: 'měi ge dìfang', vi: 'mỗi nơi' }, { w: '自己的故事', py: 'zìjǐ de gùshi', vi: 'câu chuyện riêng' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Quê của Lệ ở đâu?', en: "Where is Li's hometown?" }, options: ['Ở phương Nam', 'Ở phương Bắc', 'Ở nước ngoài', 'Ở thành phố lớn'], answer: 0, explain_vi: '丽的家乡在南方 = quê Lệ ở phương Nam.' },
      { q: { vi: 'Vì sao Lệ nấu món ăn quê?', en: 'Why does Li cook hometown food?' }, options: ['Để bạn nước ngoài hiểu văn hóa ẩm thực', 'Để bán hàng', 'Để dự thi nấu ăn', 'Vì không có món khác'], answer: 0, explain_vi: '朋友想了解饮食文化，于是丽请他尝家乡的味道 = để bạn hiểu văn hóa ẩm thực.' },
      { q: { vi: 'Với Lệ, món ăn quê có ý nghĩa gì?', en: 'What does hometown food mean to Li?' }, options: ['Gắn với kỷ niệm tuổi thơ', 'Chỉ là để no bụng', 'Để khoe với bạn', 'Không có ý nghĩa gì'], answer: 0, explain_vi: 'Suy luận: 这道菜让她想起小时候的家 → gắn với kỷ niệm tuổi thơ.' }
    ]
  },
  {
    id: 'rd-4-005', level: 4, topic: 'hoc-ngoai-ngu',
    title: { vi: 'Càng học càng thích', en: 'The More I Learn, the More I Like It', zh: '越学越喜欢' },
    summary_vi: 'Tiểu An học tiếng Trung, lúc đầu thấy khó nhưng nhờ luyện nói mỗi ngày, càng học càng thấy thú vị.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 151,
    paragraphs: [{
      sentences: [
        { zh: '小安开始学汉语的时候，觉得发音很难。', py: 'Xiǎo Ān kāishǐ xué Hànyǔ de shíhou, juéde fāyīn hěn nán.', vi: 'Khi mới học tiếng Hán, Tiểu An thấy phát âm rất khó.', audio: '',
          gloss: [ { w: '发音', py: 'fāyīn', vi: 'phát âm' }, { w: '难', py: 'nán', vi: 'khó' } ] },
        { zh: '有时候，一个句子他要练习很多次。', py: 'Yǒu shíhou, yí ge jùzi tā yào liànxí hěn duō cì.', vi: 'Đôi khi, một câu bạn ấy phải luyện rất nhiều lần.', audio: '',
          gloss: [ { w: '句子', py: 'jùzi', vi: 'câu' }, { w: '练习', py: 'liànxí', vi: 'luyện tập' }, { w: '很多次', py: 'hěn duō cì', vi: 'nhiều lần' } ] },
        { zh: '不过他没有放弃，每天都坚持开口说。', py: 'Búguò tā méiyǒu fàngqì, měitiān dōu jiānchí kāikǒu shuō.', vi: 'Nhưng bạn ấy không bỏ cuộc, mỗi ngày đều kiên trì mở miệng nói.', audio: '',
          gloss: [ { w: '放弃', py: 'fàngqì', vi: 'bỏ cuộc' }, { w: '坚持', py: 'jiānchí', vi: 'kiên trì' }, { w: '开口说', py: 'kāikǒu shuō', vi: 'mở miệng nói' } ] }
      ]
    }, {
      sentences: [
        { zh: '后来，他认识了一些中国朋友，常常和他们聊天。', py: 'Hòulái, tā rènshi le yìxiē Zhōngguó péngyǒu, chángcháng hé tāmen liáotiān.', vi: 'Về sau, bạn ấy quen vài người bạn Trung Quốc, thường trò chuyện với họ.', audio: '',
          gloss: [ { w: '认识', py: 'rènshi', vi: 'quen biết' }, { w: '聊天', py: 'liáotiān', vi: 'trò chuyện' } ] },
        { zh: '通过聊天，他学到了很多课本上没有的词语。', py: 'Tōngguò liáotiān, tā xué dào le hěn duō kèběn shang méiyǒu de cíyǔ.', vi: 'Nhờ trò chuyện, bạn ấy học được nhiều từ ngữ không có trong sách.', audio: '',
          gloss: [ { w: '通过', py: 'tōngguò', vi: 'nhờ, thông qua' }, { w: '课本', py: 'kèběn', vi: 'sách giáo khoa' }, { w: '词语', py: 'cíyǔ', vi: 'từ ngữ' } ] },
        { zh: '他发现，自己越学越喜欢这门语言。', py: 'Tā fāxiàn, zìjǐ yuè xué yuè xǐhuan zhè mén yǔyán.', vi: 'Bạn ấy nhận ra mình càng học càng thích ngôn ngữ này.', audio: '',
          gloss: [ { w: '越…越', py: 'yuè…yuè', vi: 'càng…càng' }, { w: '语言', py: 'yǔyán', vi: 'ngôn ngữ' } ] },
        { zh: '他说：“学外语就像交朋友，越熟悉越有意思。”', py: 'Tā shuō: “Xué wàiyǔ jiù xiàng jiāo péngyǒu, yuè shúxī yuè yǒu yìsi.”', vi: 'Bạn ấy nói: “Học ngoại ngữ giống như kết bạn, càng quen càng thú vị.”', audio: '',
          gloss: [ { w: '外语', py: 'wàiyǔ', vi: 'ngoại ngữ' }, { w: '就像', py: 'jiù xiàng', vi: 'giống như' }, { w: '熟悉', py: 'shúxī', vi: 'quen thuộc' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Lúc mới học, Tiểu An thấy điều gì khó?', en: 'What does Xiao An find hard at first?' }, options: ['Phát âm', 'Viết tên', 'Mua sách', 'Nghe nhạc'], answer: 0, explain_vi: '觉得发音很难 = thấy phát âm rất khó.' },
      { q: { vi: 'Điều gì giúp bạn ấy học thêm nhiều từ ngữ?', en: 'What helps him learn more words?' }, options: ['Trò chuyện với bạn Trung Quốc', 'Xem tivi cả ngày', 'Ngủ nhiều', 'Mua từ điển'], answer: 0, explain_vi: '通过聊天，他学到了很多…词语 = nhờ trò chuyện học được nhiều từ.' },
      { q: { vi: 'Câu nói cuối cho thấy thái độ gì của Tiểu An?', en: "What attitude does Xiao An's final words show?" }, options: ['Yêu thích và hứng thú với việc học', 'Chán nản', 'Coi thường tiếng Hán', 'Muốn bỏ học'], answer: 0, explain_vi: 'Suy luận: "越学越喜欢" và ví học ngoại ngữ như kết bạn → yêu thích, hứng thú.' }
    ]
  },
  {
    id: 'rd-4-006', level: 4, topic: 'tinh-ban',
    title: { vi: 'Hiểu lầm và làm lành', en: 'Misunderstanding and Making Up', zh: '误会和和好' },
    summary_vi: 'Hai bạn thân giận nhau vì hiểu lầm; sau khi nói chuyện thẳng thắn, họ nhận ra cần lắng nghe nhau.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 158,
    paragraphs: [{
      sentences: [
        { zh: '小丽和小马是好朋友，但有一次她们吵架了。', py: 'Xiǎo Lì hé Xiǎo Mǎ shì hǎo péngyǒu, dàn yǒu yí cì tāmen chǎojià le.', vi: 'Tiểu Lệ và Tiểu Mã là bạn thân, nhưng có lần họ cãi nhau.', audio: '',
          gloss: [ { w: '好朋友', py: 'hǎo péngyǒu', vi: 'bạn thân' }, { w: '吵架', py: 'chǎojià', vi: 'cãi nhau' } ] },
        { zh: '原因是一个小小的误会。', py: 'Yuányīn shì yí ge xiǎoxiǎo de wùhuì.', vi: 'Nguyên nhân là một hiểu lầm nhỏ.', audio: '',
          gloss: [ { w: '原因', py: 'yuányīn', vi: 'nguyên nhân' }, { w: '误会', py: 'wùhuì', vi: 'hiểu lầm' } ] },
        { zh: '小丽以为小马把她说过的话告诉了别人。', py: 'Xiǎo Lì yǐwéi Xiǎo Mǎ bǎ tā shuō guò de huà gàosu le biérén.', vi: 'Tiểu Lệ tưởng Tiểu Mã đem lời mình từng nói kể cho người khác.', audio: '',
          gloss: [ { w: '以为', py: 'yǐwéi', vi: 'tưởng (lầm)' }, { w: '说过的话', py: 'shuō guò de huà', vi: 'lời đã nói' }, { w: '告诉别人', py: 'gàosu biérén', vi: 'kể cho người khác' } ] },
        { zh: '其实，那件事是被另一个同学说出去的。', py: 'Qíshí, nà jiàn shì shì bèi lìng yí ge tóngxué shuō chūqù de.', vi: 'Thật ra, chuyện đó bị một bạn khác nói ra.', audio: '',
          gloss: [ { w: '其实', py: 'qíshí', vi: 'thật ra' }, { w: '被', py: 'bèi', vi: 'bị (bị động)' }, { w: '另一个', py: 'lìng yí ge', vi: 'một… khác' } ] }
      ]
    }, {
      sentences: [
        { zh: '几天以后，小马主动来找小丽聊一聊。', py: 'Jǐ tiān yǐhòu, Xiǎo Mǎ zhǔdòng lái zhǎo Xiǎo Lì liáo yi liáo.', vi: 'Mấy ngày sau, Tiểu Mã chủ động đến tìm Tiểu Lệ để nói chuyện.', audio: '',
          gloss: [ { w: '主动', py: 'zhǔdòng', vi: 'chủ động' }, { w: '聊一聊', py: 'liáo yi liáo', vi: 'nói chuyện một chút' } ] },
        { zh: '她说：“即使你误会我，我也不想失去这个朋友。”', py: 'Tā shuō: “Jíshǐ nǐ wùhuì wǒ, wǒ yě bù xiǎng shīqù zhège péngyǒu.”', vi: 'Bạn ấy nói: “Dù cậu hiểu lầm mình, mình cũng không muốn mất người bạn này.”', audio: '',
          gloss: [ { w: '即使…也', py: 'jíshǐ…yě', vi: 'dù…cũng' }, { w: '失去', py: 'shīqù', vi: 'mất đi' } ] },
        { zh: '小丽听了很感动，明白了自己错怪了她。', py: 'Xiǎo Lì tīng le hěn gǎndòng, míngbai le zìjǐ cuòguài le tā.', vi: 'Tiểu Lệ nghe xong rất cảm động, hiểu rằng mình đã trách lầm bạn.', audio: '',
          gloss: [ { w: '感动', py: 'gǎndòng', vi: 'cảm động' }, { w: '明白', py: 'míngbai', vi: 'hiểu rõ' }, { w: '错怪', py: 'cuòguài', vi: 'trách lầm' } ] },
        { zh: '从那以后，她们懂得了多听对方说话。', py: 'Cóng nà yǐhòu, tāmen dǒngde le duō tīng duìfāng shuōhuà.', vi: 'Từ đó, họ hiểu được nên lắng nghe nhau nhiều hơn.', audio: '',
          gloss: [ { w: '懂得', py: 'dǒngde', vi: 'hiểu được' }, { w: '对方', py: 'duìfāng', vi: 'đối phương, người kia' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Vì sao Tiểu Lệ giận Tiểu Mã?', en: 'Why is Xiao Li angry at Xiao Ma?' }, options: ['Tưởng Tiểu Mã kể lại lời riêng của mình', 'Tiểu Mã đến muộn', 'Tiểu Mã mượn tiền', 'Tiểu Mã không học bài'], answer: 0, explain_vi: '以为小马把她说过的话告诉了别人 = tưởng Tiểu Mã kể lại lời mình từng nói.' },
      { q: { vi: 'Sự thật về chuyện đó là gì?', en: 'What is the truth about it?' }, options: ['Một bạn khác nói ra', 'Tiểu Mã nói ra', 'Không ai biết', 'Tiểu Lệ tự nói'], answer: 0, explain_vi: '那件事是被另一个同学说出去的 = bị một bạn khác nói ra.' },
      { q: { vi: 'Bài học của câu chuyện là gì?', en: 'What is the lesson of the story?' }, options: ['Nên lắng nghe nhau để tránh hiểu lầm', 'Không nên có bạn thân', 'Hiểu lầm là chuyện thường, mặc kệ', 'Bí mật phải kể cho mọi người'], answer: 0, explain_vi: 'Suy luận: cuối truyện "懂得了多听对方说话" → nên lắng nghe nhau.' }
    ]
  },
  {
    id: 'rd-4-007', level: 4, topic: 'cong-nghe',
    title: { vi: 'Học tập với ứng dụng điện thoại', en: 'Studying with a Phone App', zh: '用手机软件学习' },
    summary_vi: 'Tiểu Đông dùng ứng dụng để học từ mới mỗi ngày; công nghệ giúp ích nhưng vẫn cần tự giác.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 153,
    paragraphs: [{
      sentences: [
        { zh: '现在，很多人用手机软件来学习。', py: 'Xiànzài, hěn duō rén yòng shǒujī ruǎnjiàn lái xuéxí.', vi: 'Bây giờ, nhiều người dùng ứng dụng điện thoại để học.', audio: '',
          gloss: [ { w: '手机软件', py: 'shǒujī ruǎnjiàn', vi: 'ứng dụng điện thoại' }, { w: '学习', py: 'xuéxí', vi: 'học tập' } ] },
        { zh: '小东也开始用一个学习词语的软件。', py: 'Xiǎo Dōng yě kāishǐ yòng yí ge xuéxí cíyǔ de ruǎnjiàn.', vi: 'Tiểu Đông cũng bắt đầu dùng một ứng dụng học từ ngữ.', audio: '',
          gloss: [ { w: '开始用', py: 'kāishǐ yòng', vi: 'bắt đầu dùng' }, { w: '词语', py: 'cíyǔ', vi: 'từ ngữ' } ] },
        { zh: '这个软件不但能复习生词，而且能检查发音。', py: 'Zhège ruǎnjiàn búdàn néng fùxí shēngcí, érqiě néng jiǎnchá fāyīn.', vi: 'Ứng dụng này không những ôn được từ mới, mà còn kiểm tra phát âm.', audio: '',
          gloss: [ { w: '不但…而且', py: 'búdàn…érqiě', vi: 'không những…mà còn' }, { w: '生词', py: 'shēngcí', vi: 'từ mới' }, { w: '检查发音', py: 'jiǎnchá fāyīn', vi: 'kiểm tra phát âm' } ] }
      ]
    }, {
      sentences: [
        { zh: '通过每天学习，他记住了很多新词。', py: 'Tōngguò měitiān xuéxí, tā jì zhù le hěn duō xīn cí.', vi: 'Nhờ học mỗi ngày, bạn ấy nhớ được nhiều từ mới.', audio: '',
          gloss: [ { w: '通过', py: 'tōngguò', vi: 'nhờ, thông qua' }, { w: '记住', py: 'jì zhù', vi: 'ghi nhớ' }, { w: '新词', py: 'xīn cí', vi: 'từ mới' } ] },
        { zh: '不过他也发现，手机里有很多别的东西。', py: 'Búguò tā yě fāxiàn, shǒujī lǐ yǒu hěn duō bié de dōngxi.', vi: 'Nhưng bạn ấy cũng nhận ra trong điện thoại có nhiều thứ khác.', audio: '',
          gloss: [ { w: '别的东西', py: 'bié de dōngxi', vi: 'những thứ khác' } ] },
        { zh: '如果不注意，时间很容易被游戏用掉。', py: 'Rúguǒ bú zhùyì, shíjiān hěn róngyì bèi yóuxì yòng diào.', vi: 'Nếu không chú ý, thời gian dễ bị trò chơi chiếm mất.', audio: '',
          gloss: [ { w: '如果', py: 'rúguǒ', vi: 'nếu' }, { w: '被…用掉', py: 'bèi…yòng diào', vi: 'bị… dùng/chiếm mất' }, { w: '游戏', py: 'yóuxì', vi: 'trò chơi' } ] },
        { zh: '所以他明白：工具很有用，但是关键还是靠自己。', py: 'Suǒyǐ tā míngbai: gōngjù hěn yǒuyòng, dànshì guānjiàn háishi kào zìjǐ.', vi: 'Nên bạn ấy hiểu: công cụ rất hữu ích, nhưng mấu chốt vẫn là dựa vào bản thân.', audio: '',
          gloss: [ { w: '工具', py: 'gōngjù', vi: 'công cụ' }, { w: '关键', py: 'guānjiàn', vi: 'mấu chốt' }, { w: '靠自己', py: 'kào zìjǐ', vi: 'dựa vào bản thân' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Ứng dụng của Tiểu Đông có thể làm gì?', en: 'What can Xiao Dong\'s app do?' }, options: ['Ôn từ mới và kiểm tra phát âm', 'Nấu ăn', 'Đặt vé xe', 'Gọi điện miễn phí'], answer: 0, explain_vi: '不但能复习生词，而且能检查发音 = ôn từ mới và kiểm tra phát âm.' },
      { q: { vi: 'Vấn đề mà Tiểu Đông nhận ra là gì?', en: 'What problem does Xiao Dong notice?' }, options: ['Thời gian dễ bị trò chơi chiếm mất', 'Ứng dụng quá đắt', 'Điện thoại hỏng', 'Không có mạng'], answer: 0, explain_vi: '时间很容易被游戏用掉 = thời gian dễ bị trò chơi chiếm mất.' },
      { q: { vi: 'Kết luận của Tiểu Đông cho thấy điều gì?', en: 'What does his conclusion show?' }, options: ['Công cụ hữu ích nhưng tự giác mới quyết định', 'Không nên dùng điện thoại', 'Ứng dụng vô dụng', 'Học bằng sách tốt hơn hẳn'], answer: 0, explain_vi: 'Suy luận: "工具很有用，但是关键还是靠自己" → tự giác mới quyết định.' }
    ]
  },
  {
    id: 'rd-4-008', level: 4, topic: 'du-lich',
    title: { vi: 'Chuyến đi đáng nhớ', en: 'A Memorable Trip', zh: '难忘的旅行' },
    summary_vi: 'Một nhóm bạn đi leo núi; tuy mệt nhưng cảnh đẹp và tình bạn khiến chuyến đi thật đáng nhớ.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 155,
    paragraphs: [{
      sentences: [
        { zh: '暑假的时候，小安和几个朋友去爬山。', py: 'Shǔjià de shíhou, Xiǎo Ān hé jǐ ge péngyǒu qù páshān.', vi: 'Vào kỳ nghỉ hè, Tiểu An cùng vài người bạn đi leo núi.', audio: '',
          gloss: [ { w: '暑假', py: 'shǔjià', vi: 'nghỉ hè' }, { w: '爬山', py: 'páshān', vi: 'leo núi' } ] },
        { zh: '除了带水和食物以外，他们还带了一些药。', py: 'Chúle dài shuǐ hé shíwù yǐwài, tāmen hái dài le yìxiē yào.', vi: 'Ngoài mang nước và thức ăn, họ còn mang theo một ít thuốc.', audio: '',
          gloss: [ { w: '除了…以外', py: 'chúle…yǐwài', vi: 'ngoài…ra' }, { w: '食物', py: 'shíwù', vi: 'thức ăn' }, { w: '药', py: 'yào', vi: 'thuốc' } ] },
        { zh: '山路又长又难走，大家爬得很累。', py: 'Shānlù yòu cháng yòu nán zǒu, dàjiā pá de hěn lèi.', vi: 'Đường núi vừa dài vừa khó đi, mọi người leo rất mệt.', audio: '',
          gloss: [ { w: '山路', py: 'shānlù', vi: 'đường núi' }, { w: '又…又', py: 'yòu…yòu', vi: 'vừa…vừa' }, { w: '难走', py: 'nán zǒu', vi: 'khó đi' } ] }
      ]
    }, {
      sentences: [
        { zh: '走到一半，有人想休息，有人想继续。', py: 'Zǒu dào yíbàn, yǒu rén xiǎng xiūxi, yǒu rén xiǎng jìxù.', vi: 'Đi được một nửa, có người muốn nghỉ, có người muốn đi tiếp.', audio: '',
          gloss: [ { w: '一半', py: 'yíbàn', vi: 'một nửa' }, { w: '休息', py: 'xiūxi', vi: 'nghỉ' }, { w: '继续', py: 'jìxù', vi: 'tiếp tục' } ] },
        { zh: '他们互相鼓励，最后一起爬到了山上。', py: 'Tāmen hùxiāng gǔlì, zuìhòu yìqǐ pá dào le shān shang.', vi: 'Họ động viên lẫn nhau, cuối cùng cùng nhau leo lên đến trên núi.', audio: '',
          gloss: [ { w: '互相', py: 'hùxiāng', vi: 'lẫn nhau' }, { w: '鼓励', py: 'gǔlì', vi: 'động viên' }, { w: '爬到山上', py: 'pá dào shān shang', vi: 'leo lên trên núi' } ] },
        { zh: '山上的风景非常美，大家都忘记了累。', py: 'Shān shang de fēngjǐng fēicháng měi, dàjiā dōu wàngjì le lèi.', vi: 'Phong cảnh trên núi rất đẹp, mọi người đều quên cả mệt.', audio: '',
          gloss: [ { w: '风景', py: 'fēngjǐng', vi: 'phong cảnh' }, { w: '美', py: 'měi', vi: 'đẹp' }, { w: '忘记', py: 'wàngjì', vi: 'quên' } ] },
        { zh: '小安觉得，这次旅行让他更懂得了友谊的意义。', py: 'Xiǎo Ān juéde, zhè cì lǚxíng ràng tā gèng dǒngde le yǒuyì de yìyì.', vi: 'Tiểu An thấy chuyến đi này giúp bạn ấy hiểu hơn ý nghĩa của tình bạn.', audio: '',
          gloss: [ { w: '旅行', py: 'lǚxíng', vi: 'chuyến đi' }, { w: '友谊', py: 'yǒuyì', vi: 'tình bạn' }, { w: '意义', py: 'yìyì', vi: 'ý nghĩa' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Họ chuẩn bị những gì cho chuyến đi?', en: 'What do they prepare for the trip?' }, options: ['Nước, thức ăn và một ít thuốc', 'Chỉ có điện thoại', 'Sách vở', 'Quần áo đẹp'], answer: 0, explain_vi: '除了带水和食物以外，他们还带了一些药 = nước, thức ăn và thuốc.' },
      { q: { vi: 'Khi đi được một nửa thì sao?', en: 'What happens halfway up?' }, options: ['Họ động viên nhau và leo tiếp lên núi', 'Họ quay về', 'Họ bị lạc', 'Họ cãi nhau bỏ về'], answer: 0, explain_vi: '他们互相鼓励，最后一起爬到了山上 = động viên nhau, leo lên núi.' },
      { q: { vi: 'Vì sao chuyến đi đáng nhớ với Tiểu An?', en: 'Why is the trip memorable for Xiao An?' }, options: ['Vì cảnh đẹp và bạn ấy hiểu hơn về tình bạn', 'Vì đường rất ngắn', 'Vì không phải đi bộ', 'Vì có nhiều đồ ăn ngon'], answer: 0, explain_vi: 'Suy luận: cảnh đẹp + "更懂得了友谊的意义" → cảnh đẹp và hiểu hơn về tình bạn.' }
    ]
  },
  {
    id: 'rd-4-009', level: 4, topic: 'doc-sach',
    title: { vi: 'Thói quen đọc sách', en: 'A Reading Habit', zh: '读书的习惯' },
    summary_vi: 'Tiểu Mỹ tập đọc mỗi tối trước khi ngủ; càng đọc bạn ấy càng mở rộng hiểu biết và thấy bình tĩnh hơn.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 150,
    paragraphs: [{
      sentences: [
        { zh: '小美给自己定了一个小目标：每天读半个小时书。', py: 'Xiǎo Měi gěi zìjǐ dìng le yí ge xiǎo mùbiāo: měitiān dú bàn ge xiǎoshí shū.', vi: 'Tiểu Mỹ đặt cho mình một mục tiêu nhỏ: mỗi ngày đọc nửa tiếng.', audio: '',
          gloss: [ { w: '定目标', py: 'dìng mùbiāo', vi: 'đặt mục tiêu' }, { w: '半个小时', py: 'bàn ge xiǎoshí', vi: 'nửa tiếng' } ] },
        { zh: '刚开始，她常常坐不住，看一会儿就想玩手机。', py: 'Gāng kāishǐ, tā chángcháng zuò bú zhù, kàn yíhuìr jiù xiǎng wán shǒujī.', vi: 'Lúc đầu, bạn ấy hay ngồi không yên, đọc một lúc lại muốn nghịch điện thoại.', audio: '',
          gloss: [ { w: '坐不住', py: 'zuò bú zhù', vi: 'ngồi không yên' }, { w: '一会儿', py: 'yíhuìr', vi: 'một lúc' } ] },
        { zh: '但是她坚持下来，慢慢地养成了习惯。', py: 'Dànshì tā jiānchí xiàlái, mànmàn de yǎngchéng le xíguàn.', vi: 'Nhưng bạn ấy kiên trì, dần dần hình thành thói quen.', audio: '',
          gloss: [ { w: '坚持下来', py: 'jiānchí xiàlái', vi: 'kiên trì duy trì' }, { w: '养成习惯', py: 'yǎngchéng xíguàn', vi: 'hình thành thói quen' } ] }
      ]
    }, {
      sentences: [
        { zh: '她发现，书读得越多，知道的事情就越多。', py: 'Tā fāxiàn, shū dú de yuè duō, zhīdào de shìqing jiù yuè duō.', vi: 'Bạn ấy nhận ra, đọc càng nhiều thì biết càng nhiều.', audio: '',
          gloss: [ { w: '越…越', py: 'yuè…yuè', vi: 'càng…càng' }, { w: '知道', py: 'zhīdào', vi: 'biết' } ] },
        { zh: '读书还让她的心变得更安静。', py: 'Dúshū hái ràng tā de xīn biàn de gèng ānjìng.', vi: 'Đọc sách còn khiến lòng bạn ấy trở nên bình tĩnh hơn.', audio: '',
          gloss: [ { w: '心', py: 'xīn', vi: 'lòng, tâm trí' }, { w: '变得', py: 'biàn de', vi: 'trở nên' }, { w: '安静', py: 'ānjìng', vi: 'yên tĩnh, bình tĩnh' } ] },
        { zh: '有时候，一本好书能让她想很久。', py: 'Yǒu shíhou, yì běn hǎo shū néng ràng tā xiǎng hěn jiǔ.', vi: 'Đôi khi, một quyển sách hay khiến bạn ấy suy nghĩ rất lâu.', audio: '',
          gloss: [ { w: '一本好书', py: 'yì běn hǎo shū', vi: 'một quyển sách hay' }, { w: '想很久', py: 'xiǎng hěn jiǔ', vi: 'nghĩ rất lâu' } ] },
        { zh: '她说：“读书是送给自己最好的礼物。”', py: 'Tā shuō: “Dúshū shì sòng gěi zìjǐ zuì hǎo de lǐwù.”', vi: 'Bạn ấy nói: “Đọc sách là món quà tốt nhất tặng cho bản thân.”', audio: '',
          gloss: [ { w: '送给', py: 'sòng gěi', vi: 'tặng cho' }, { w: '最好的礼物', py: 'zuì hǎo de lǐwù', vi: 'món quà tốt nhất' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Mục tiêu nhỏ của Tiểu Mỹ là gì?', en: "What is Xiao Mei's small goal?" }, options: ['Mỗi ngày đọc nửa tiếng', 'Mua thật nhiều sách', 'Viết một quyển sách', 'Đọc mỗi tuần một lần'], answer: 0, explain_vi: '每天读半个小时书 = mỗi ngày đọc nửa tiếng.' },
      { q: { vi: 'Lúc đầu bạn ấy gặp khó khăn gì?', en: 'What difficulty does she have at first?' }, options: ['Ngồi không yên, muốn nghịch điện thoại', 'Không có sách', 'Không biết chữ', 'Không có thời gian'], answer: 0, explain_vi: '常常坐不住，看一会儿就想玩手机 = ngồi không yên, muốn nghịch điện thoại.' },
      { q: { vi: 'Đọc sách mang lại điều gì cho Tiểu Mỹ?', en: 'What does reading bring Xiao Mei?' }, options: ['Hiểu biết rộng hơn và tâm trí bình tĩnh hơn', 'Nhiều tiền hơn', 'Bạn bè mới', 'Sức khỏe tốt hơn'], answer: 0, explain_vi: 'Suy luận: "知道的事情越多" và "心变得更安静" → hiểu biết rộng và bình tĩnh hơn.' }
    ]
  },
  {
    id: 'rd-4-010', level: 4, topic: 'suc-khoe',
    title: { vi: 'Giữ tâm trạng vui vẻ', en: 'Keeping a Good Mood', zh: '保持好心情' },
    summary_vi: 'Tiểu Lâm hay lo lắng trước kỳ thi; bạn ấy học cách thư giãn và chia sẻ, nhờ đó tâm trạng tốt hơn.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 152,
    paragraphs: [{
      sentences: [
        { zh: '考试以前，小林常常感到紧张和担心。', py: 'Kǎoshì yǐqián, Xiǎo Lín chángcháng gǎndào jǐnzhāng hé dānxīn.', vi: 'Trước kỳ thi, Tiểu Lâm thường cảm thấy căng thẳng và lo lắng.', audio: '',
          gloss: [ { w: '感到', py: 'gǎndào', vi: 'cảm thấy' }, { w: '紧张', py: 'jǐnzhāng', vi: 'căng thẳng' }, { w: '担心', py: 'dānxīn', vi: 'lo lắng' } ] },
        { zh: '他晚上睡不好，白天也没有精神。', py: 'Tā wǎnshang shuì bù hǎo, báitiān yě méiyǒu jīngshén.', vi: 'Ban đêm bạn ấy ngủ không ngon, ban ngày cũng không có tinh thần.', audio: '',
          gloss: [ { w: '睡不好', py: 'shuì bù hǎo', vi: 'ngủ không ngon' }, { w: '精神', py: 'jīngshén', vi: 'tinh thần' } ] },
        { zh: '无论怎么努力，他都觉得压力很大。', py: 'Wúlùn zěnme nǔlì, tā dōu juéde yālì hěn dà.', vi: 'Bất kể cố gắng thế nào, bạn ấy đều thấy áp lực rất lớn.', audio: '',
          gloss: [ { w: '无论…都', py: 'wúlùn…dōu', vi: 'bất kể…đều' }, { w: '压力', py: 'yālì', vi: 'áp lực' } ] }
      ]
    }, {
      sentences: [
        { zh: '后来，他把自己的感觉告诉了妈妈。', py: 'Hòulái, tā bǎ zìjǐ de gǎnjué gàosu le māma.', vi: 'Về sau, bạn ấy kể cảm giác của mình cho mẹ nghe.', audio: '',
          gloss: [ { w: '感觉', py: 'gǎnjué', vi: 'cảm giác' }, { w: '告诉', py: 'gàosu', vi: 'kể cho' } ] },
        { zh: '妈妈说：“适当休息和运动，对身体和心情都有好处。”', py: 'Māma shuō: “Shìdàng xiūxi hé yùndòng, duì shēntǐ hé xīnqíng dōu yǒu hǎochù.”', vi: 'Mẹ nói: “Nghỉ ngơi và vận động hợp lý đều có lợi cho cơ thể và tâm trạng.”', audio: '',
          gloss: [ { w: '适当', py: 'shìdàng', vi: 'hợp lý, vừa phải' }, { w: '运动', py: 'yùndòng', vi: 'vận động' }, { w: '心情', py: 'xīnqíng', vi: 'tâm trạng' } ] },
        { zh: '从那以后，他每天散步，也常常和朋友聊天。', py: 'Cóng nà yǐhòu, tā měitiān sànbù, yě chángcháng hé péngyǒu liáotiān.', vi: 'Từ đó, mỗi ngày bạn ấy đi dạo, cũng thường trò chuyện với bạn.', audio: '',
          gloss: [ { w: '散步', py: 'sànbù', vi: 'đi dạo' }, { w: '聊天', py: 'liáotiān', vi: 'trò chuyện' } ] },
        { zh: '慢慢地，他的心情好了起来，考试也考得不错。', py: 'Mànmàn de, tā de xīnqíng hǎo le qǐlái, kǎoshì yě kǎo de búcuò.', vi: 'Dần dần, tâm trạng bạn ấy tốt lên, kỳ thi cũng làm khá tốt.', audio: '',
          gloss: [ { w: '好了起来', py: 'hǎo le qǐlái', vi: 'tốt lên' }, { w: '不错', py: 'búcuò', vi: 'khá tốt' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Trước kỳ thi Tiểu Lâm cảm thấy thế nào?', en: 'How does Xiao Lin feel before exams?' }, options: ['Căng thẳng và lo lắng', 'Rất vui', 'Bình thường', 'Buồn ngủ'], answer: 0, explain_vi: '常常感到紧张和担心 = căng thẳng và lo lắng.' },
      { q: { vi: 'Mẹ khuyên bạn ấy điều gì?', en: 'What does mom advise?' }, options: ['Nghỉ ngơi và vận động hợp lý', 'Học suốt ngày', 'Bỏ thi', 'Uống thuốc'], answer: 0, explain_vi: '适当休息和运动…都有好处 = nghỉ ngơi và vận động hợp lý.' },
      { q: { vi: 'Điều gì giúp tâm trạng Tiểu Lâm tốt lên?', en: 'What helps improve his mood?' }, options: ['Chia sẻ, đi dạo và trò chuyện với bạn', 'Ở một mình nhiều hơn', 'Ngừng học hẳn', 'Chơi điện thoại cả ngày'], answer: 0, explain_vi: 'Suy luận: kể cho mẹ, đi dạo, trò chuyện với bạn → chia sẻ và vận động giúp tâm trạng tốt lên.' }
    ]
  },
  {
    id: 'rd-4-011', level: 4, topic: 'tinh-nguyen',
    title: { vi: 'Một ngày làm tình nguyện', en: 'A Day of Volunteering', zh: '当一天志愿者' },
    summary_vi: 'Các bạn trẻ tham gia dọn vệ sinh công viên; công việc tuy vất vả nhưng giúp họ thấy ý nghĩa khi giúp cộng đồng.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 156,
    paragraphs: [{
      sentences: [
        { zh: '周末，小东和同学参加了一个志愿活动。', py: 'Zhōumò, Xiǎo Dōng hé tóngxué cānjiā le yí ge zhìyuàn huódòng.', vi: 'Cuối tuần, Tiểu Đông và bạn học tham gia một hoạt động tình nguyện.', audio: '',
          gloss: [ { w: '志愿活动', py: 'zhìyuàn huódòng', vi: 'hoạt động tình nguyện' }, { w: '参加', py: 'cānjiā', vi: 'tham gia' } ] },
        { zh: '他们的任务是打扫公园，让环境更干净。', py: 'Tāmen de rènwù shì dǎsǎo gōngyuán, ràng huánjìng gèng gānjìng.', vi: 'Nhiệm vụ của họ là dọn dẹp công viên, làm môi trường sạch hơn.', audio: '',
          gloss: [ { w: '任务', py: 'rènwù', vi: 'nhiệm vụ' }, { w: '打扫', py: 'dǎsǎo', vi: 'quét dọn' }, { w: '环境', py: 'huánjìng', vi: 'môi trường' } ] },
        { zh: '不但要把垃圾收好，而且要分好类。', py: 'Búdàn yào bǎ lājī shōu hǎo, érqiě yào fēn hǎo lèi.', vi: 'Không những phải thu gom rác, mà còn phải phân loại.', audio: '',
          gloss: [ { w: '不但…而且', py: 'búdàn…érqiě', vi: 'không những…mà còn' }, { w: '把垃圾收好', py: 'bǎ lājī shōu hǎo', vi: 'thu gom rác' }, { w: '分类', py: 'fēn lèi', vi: 'phân loại' } ] }
      ]
    }, {
      sentences: [
        { zh: '太阳很大，大家干了一上午，都出了很多汗。', py: 'Tàiyáng hěn dà, dàjiā gàn le yí shàngwǔ, dōu chū le hěn duō hàn.', vi: 'Trời nắng to, mọi người làm cả buổi sáng, ai cũng đổ nhiều mồ hôi.', audio: '',
          gloss: [ { w: '太阳很大', py: 'tàiyáng hěn dà', vi: 'nắng to' }, { w: '干', py: 'gàn', vi: 'làm (việc)' }, { w: '出汗', py: 'chū hàn', vi: 'đổ mồ hôi' } ] },
        { zh: '虽然很辛苦，但是看到干净的公园，他们很开心。', py: 'Suīrán hěn xīnkǔ, dànshì kàndào gānjìng de gōngyuán, tāmen hěn kāixīn.', vi: 'Tuy vất vả, nhưng nhìn thấy công viên sạch sẽ, họ rất vui.', audio: '',
          gloss: [ { w: '辛苦', py: 'xīnkǔ', vi: 'vất vả' }, { w: '干净', py: 'gānjìng', vi: 'sạch sẽ' } ] },
        { zh: '一位老人走过来，对他们说谢谢。', py: 'Yí wèi lǎorén zǒu guòlái, duì tāmen shuō xièxie.', vi: 'Một cụ già đi tới, nói cảm ơn với họ.', audio: '',
          gloss: [ { w: '老人', py: 'lǎorén', vi: 'cụ già' }, { w: '走过来', py: 'zǒu guòlái', vi: 'đi tới' } ] },
        { zh: '小东觉得，帮助别人的同时，自己也很快乐。', py: 'Xiǎo Dōng juéde, bāngzhù biérén de tóngshí, zìjǐ yě hěn kuàilè.', vi: 'Tiểu Đông thấy, khi giúp người khác, bản thân cũng rất vui.', audio: '',
          gloss: [ { w: '帮助', py: 'bāngzhù', vi: 'giúp đỡ' }, { w: '同时', py: 'tóngshí', vi: 'đồng thời' }, { w: '快乐', py: 'kuàilè', vi: 'vui sướng' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Nhiệm vụ của họ là gì?', en: 'What is their task?' }, options: ['Dọn dẹp công viên và phân loại rác', 'Trồng cây trong trường', 'Dạy học', 'Bán hàng'], answer: 0, explain_vi: '打扫公园…把垃圾分好类 = dọn công viên và phân loại rác.' },
      { q: { vi: 'Vì sao họ vui dù vất vả?', en: 'Why are they happy despite the hard work?' }, options: ['Vì thấy công viên trở nên sạch sẽ', 'Vì được trả nhiều tiền', 'Vì được nghỉ học', 'Vì trời mát'], answer: 0, explain_vi: '看到干净的公园，他们很开心 = vui vì công viên sạch.' },
      { q: { vi: 'Tiểu Đông cảm nhận được điều gì?', en: 'What does Xiao Dong realize?' }, options: ['Giúp người khác cũng làm chính mình hạnh phúc', 'Tình nguyện chỉ phí thời gian', 'Việc này quá khó', 'Không nên giúp người lạ'], answer: 0, explain_vi: 'Suy luận: "帮助别人的同时，自己也很快乐" → giúp người cũng làm mình vui.' }
    ]
  },
  {
    id: 'rd-4-012', level: 4, topic: 'cong-viec',
    title: { vi: 'Buổi phỏng vấn đầu tiên', en: 'The First Interview', zh: '第一次面试' },
    summary_vi: 'Tiểu Lệ đi phỏng vấn việc làm thêm; tuy hồi hộp, nhờ chuẩn bị kỹ và thành thật, bạn ấy để lại ấn tượng tốt.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 154,
    paragraphs: [{
      sentences: [
        { zh: '丽想找一份周末的工作，于是去参加面试。', py: 'Lì xiǎng zhǎo yí fèn zhōumò de gōngzuò, yúshì qù cānjiā miànshì.', vi: 'Lệ muốn tìm một công việc cuối tuần, thế là đi phỏng vấn.', audio: '',
          gloss: [ { w: '一份工作', py: 'yí fèn gōngzuò', vi: 'một công việc' }, { w: '面试', py: 'miànshì', vi: 'phỏng vấn' } ] },
        { zh: '为了准备，她提前了解了这家公司的情况。', py: 'Wèile zhǔnbèi, tā tíqián liǎojiě le zhè jiā gōngsī de qíngkuàng.', vi: 'Để chuẩn bị, bạn ấy tìm hiểu trước về tình hình công ty.', audio: '',
          gloss: [ { w: '为了', py: 'wèile', vi: 'để' }, { w: '提前', py: 'tíqián', vi: 'trước, sớm hơn' }, { w: '情况', py: 'qíngkuàng', vi: 'tình hình' } ] },
        { zh: '面试那天，她穿得很整齐，也到得很早。', py: 'Miànshì nà tiān, tā chuān de hěn zhěngqí, yě dào de hěn zǎo.', vi: 'Hôm phỏng vấn, bạn ấy ăn mặc gọn gàng và đến rất sớm.', audio: '',
          gloss: [ { w: '整齐', py: 'zhěngqí', vi: 'gọn gàng' }, { w: '到得很早', py: 'dào de hěn zǎo', vi: 'đến rất sớm' } ] }
      ]
    }, {
      sentences: [
        { zh: '虽然她有点紧张，但是回答问题的时候很认真。', py: 'Suīrán tā yǒudiǎn jǐnzhāng, dànshì huídá wèntí de shíhou hěn rènzhēn.', vi: 'Tuy hơi hồi hộp, nhưng khi trả lời câu hỏi bạn ấy rất nghiêm túc.', audio: '',
          gloss: [ { w: '回答问题', py: 'huídá wèntí', vi: 'trả lời câu hỏi' }, { w: '认真', py: 'rènzhēn', vi: 'nghiêm túc' } ] },
        { zh: '有一个问题她不太会，就老实地说自己还要学习。', py: 'Yǒu yí ge wèntí tā bú tài huì, jiù lǎoshí de shuō zìjǐ hái yào xuéxí.', vi: 'Có một câu bạn ấy chưa rành, liền thành thật nói mình còn phải học thêm.', audio: '',
          gloss: [ { w: '不太会', py: 'bú tài huì', vi: 'chưa rành' }, { w: '老实', py: 'lǎoshí', vi: 'thành thật' }, { w: '还要学习', py: 'hái yào xuéxí', vi: 'còn phải học thêm' } ] },
        { zh: '经理觉得她很真诚，对她的印象不错。', py: 'Jīnglǐ juéde tā hěn zhēnchéng, duì tā de yìnxiàng búcuò.', vi: 'Quản lý thấy bạn ấy rất chân thành, ấn tượng về bạn ấy khá tốt.', audio: '',
          gloss: [ { w: '经理', py: 'jīnglǐ', vi: 'quản lý' }, { w: '真诚', py: 'zhēnchéng', vi: 'chân thành' }, { w: '印象', py: 'yìnxiàng', vi: 'ấn tượng' } ] },
        { zh: '几天以后，丽收到了通知，她得到了这份工作。', py: 'Jǐ tiān yǐhòu, Lì shōudào le tōngzhī, tā dédào le zhè fèn gōngzuò.', vi: 'Mấy ngày sau, Lệ nhận được thông báo, bạn ấy đã có được công việc này.', audio: '',
          gloss: [ { w: '收到通知', py: 'shōudào tōngzhī', vi: 'nhận được thông báo' }, { w: '得到', py: 'dédào', vi: 'có được, nhận được' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Lệ chuẩn bị thế nào trước buổi phỏng vấn?', en: 'How does Li prepare before the interview?' }, options: ['Tìm hiểu trước về công ty', 'Không chuẩn bị gì', 'Nhờ người đi thay', 'Đến thật muộn'], answer: 0, explain_vi: '提前了解了这家公司的情况 = tìm hiểu trước về công ty.' },
      { q: { vi: 'Với câu hỏi chưa rành, Lệ làm gì?', en: "What does Li do with a question she doesn't know?" }, options: ['Thành thật nói mình còn phải học thêm', 'Bịa ra câu trả lời', 'Im lặng bỏ đi', 'Hỏi người khác'], answer: 0, explain_vi: '老实地说自己还要学习 = thành thật nói còn phải học thêm.' },
      { q: { vi: 'Vì sao Lệ để lại ấn tượng tốt?', en: 'Why does Li leave a good impression?' }, options: ['Vì chuẩn bị kỹ và chân thành', 'Vì nói rất nhiều', 'Vì quen biết quản lý', 'Vì may mắn'], answer: 0, explain_vi: 'Suy luận: chuẩn bị kỹ + "很真诚" → ấn tượng tốt nhờ chuẩn bị và chân thành.' }
    ]
  }
];
