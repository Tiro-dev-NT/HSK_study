// ═══════════════════════════════════════════════════════
// READER DATA — HSK 3.0 cấp 3 (Graded Reader Việt-first, Phase A1)
// Schema chốt tại docs/plans/a1-reader-investigation.md §C
// Quy ước: var dynamic-injected (KHÔNG const) — theo CLAUDE.md.
// source:'ai-gen' = nội dung tự sinh, CHỜ chủ dự án duyệt (điền reviewed_*).
// ═══════════════════════════════════════════════════════

var READER_DATA = (typeof READER_DATA !== 'undefined') ? READER_DATA : {};

READER_DATA[3] = [
  {
    id: 'rd-3-001', level: 3, topic: 'hoc-tap',
    title: { vi: 'Kế hoạch ôn thi của lớp', en: "The Class Review Plan", zh: '班级的复习计划' },
    summary_vi: 'Lớp của Minh chia nhóm ôn thi, lớp trưởng sắp xếp thời gian và mọi người cùng tiến bộ.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 105,
    paragraphs: [{
      sentences: [
        { zh: '下周，明的班级有一次汉语考试。', py: 'Xià zhōu, Míng de bānjí yǒu yí cì Hànyǔ kǎoshì.', vi: 'Tuần sau, lớp của Minh có một kỳ thi tiếng Hán.', audio: '',
          gloss: [ { w: '下周', py: 'xià zhōu', vi: 'tuần sau' }, { w: '班级', py: 'bānjí', vi: 'lớp học' }, { w: '汉语考试', py: 'Hànyǔ kǎoshì', vi: 'kỳ thi tiếng Hán' } ] },
        { zh: '老师让大家按照计划复习，不要只看课本。', py: 'Lǎoshī ràng dàjiā ànzhào jìhuà fùxí, búyào zhǐ kàn kèběn.', vi: 'Giáo viên bảo mọi người ôn tập theo kế hoạch, đừng chỉ xem sách giáo khoa.', audio: '',
          gloss: [ { w: '按照计划', py: 'ànzhào jìhuà', vi: 'theo kế hoạch' }, { w: '复习', py: 'fùxí', vi: 'ôn tập' }, { w: '只看课本', py: 'zhǐ kàn kèběn', vi: 'chỉ xem sách giáo khoa' } ] },
        { zh: '班长把同学分成三组，每组负责一部分内容。', py: 'Bānzhǎng bǎ tóngxué fēn chéng sān zǔ, měi zǔ fùzé yí bùfen nèiróng.', vi: 'Lớp trưởng chia các bạn thành ba nhóm, mỗi nhóm phụ trách một phần nội dung.', audio: '',
          gloss: [ { w: '分成三组', py: 'fēn chéng sān zǔ', vi: 'chia thành ba nhóm' }, { w: '负责', py: 'fùzé', vi: 'phụ trách' }, { w: '一部分内容', py: 'yí bùfen nèiróng', vi: 'một phần nội dung' } ] },
        { zh: '明负责词语，他每天晚上整理笔记。', py: 'Míng fùzé cíyǔ, tā měitiān wǎnshang zhěnglǐ bǐjì.', vi: 'Minh phụ trách từ ngữ, mỗi tối bạn ấy sắp xếp ghi chép.', audio: '',
          gloss: [ { w: '负责词语', py: 'fùzé cíyǔ', vi: 'phụ trách từ ngữ' }, { w: '整理笔记', py: 'zhěnglǐ bǐjì', vi: 'sắp xếp ghi chép' } ] }
      ]
    }, {
      sentences: [
        { zh: '周末，他们在图书馆讨论问题。', py: 'Zhōumò, tāmen zài túshūguǎn tǎolùn wèntí.', vi: 'Cuối tuần, họ thảo luận vấn đề trong thư viện.', audio: '',
          gloss: [ { w: '周末', py: 'zhōumò', vi: 'cuối tuần' }, { w: '图书馆', py: 'túshūguǎn', vi: 'thư viện' }, { w: '讨论问题', py: 'tǎolùn wèntí', vi: 'thảo luận vấn đề' } ] },
        { zh: '虽然大家都有点累，但是学习效果很好。', py: 'Suīrán dàjiā dōu yǒudiǎn lèi, dànshì xuéxí xiàoguǒ hěn hǎo.', vi: 'Tuy mọi người đều hơi mệt, nhưng hiệu quả học tập rất tốt.', audio: '',
          gloss: [ { w: '虽然…但是', py: 'suīrán…dànshì', vi: 'tuy…nhưng' }, { w: '有点累', py: 'yǒudiǎn lèi', vi: 'hơi mệt' }, { w: '学习效果', py: 'xuéxí xiàoguǒ', vi: 'hiệu quả học tập' } ] },
        { zh: '考试那天，很多同学的成绩都有进步。', py: 'Kǎoshì nà tiān, hěn duō tóngxué de chéngjì dōu yǒu jìnbù.', vi: 'Ngày thi, điểm số của nhiều bạn đều có tiến bộ.', audio: '',
          gloss: [ { w: '考试那天', py: 'kǎoshì nà tiān', vi: 'ngày thi' }, { w: '成绩', py: 'chéngjì', vi: 'điểm số/thành tích' }, { w: '有进步', py: 'yǒu jìnbù', vi: 'có tiến bộ' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Giáo viên yêu cầu học sinh ôn tập thế nào?', en: 'How does the teacher ask students to review?' }, options: ['Theo kế hoạch', 'Chỉ xem phim', 'Không cần làm gì', 'Chỉ đọc báo'], answer: 0, explain_vi: '老师让大家按照计划复习 = giáo viên bảo mọi người ôn theo kế hoạch.' },
      { q: { vi: 'Minh phụ trách phần nào?', en: 'Which part is Ming responsible for?' }, options: ['Từ ngữ', 'Mua sắm', 'Thời tiết', 'Sắp xếp xe'], answer: 0, explain_vi: '明负责词语 = Minh phụ trách từ ngữ.' },
      { q: { vi: 'Kết quả cuối cùng ra sao?', en: 'What is the final result?' }, options: ['Nhiều bạn tiến bộ', 'Cả lớp bỏ thi', 'Không ai học', 'Lớp đi siêu thị'], answer: 0, explain_vi: '很多同学的成绩都有进步 = nhiều bạn có tiến bộ về điểm số.' }
    ]
  },
  {
    id: 'rd-3-002', level: 3, topic: 'du-lich',
    title: { vi: 'Một chuyến đi cuối tuần', en: 'A Weekend Trip', zh: '一次周末旅行' },
    summary_vi: 'Hai bạn lên kế hoạch đi biển, chuẩn bị đồ và học cách thay đổi lịch khi thời tiết xấu.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 102,
    paragraphs: [{
      sentences: [
        { zh: '丽和朋友打算周末去海边。', py: 'Lì hé péngyǒu dǎsuàn zhōumò qù hǎibiān.', vi: 'Lệ và bạn dự định cuối tuần đi bờ biển.', audio: '',
          gloss: [ { w: '打算', py: 'dǎsuàn', vi: 'dự định' }, { w: '周末', py: 'zhōumò', vi: 'cuối tuần' }, { w: '海边', py: 'hǎibiān', vi: 'bờ biển' } ] },
        { zh: '她们提前订了房间，也买好了车票。', py: 'Tāmen tíqián dìng le fángjiān, yě mǎi hǎo le chēpiào.', vi: 'Họ đặt phòng trước và cũng đã mua vé xe xong.', audio: '',
          gloss: [ { w: '提前', py: 'tíqián', vi: 'trước thời hạn' }, { w: '订了房间', py: 'dìng le fángjiān', vi: 'đã đặt phòng' }, { w: '车票', py: 'chēpiào', vi: 'vé xe' } ] },
        { zh: '出发前一天，天气预报说会下大雨。', py: 'Chūfā qián yì tiān, tiānqì yùbào shuō huì xià dàyǔ.', vi: 'Một ngày trước khi khởi hành, dự báo thời tiết nói sẽ mưa to.', audio: '',
          gloss: [ { w: '出发前一天', py: 'chūfā qián yì tiān', vi: 'một ngày trước khi khởi hành' }, { w: '天气预报', py: 'tiānqì yùbào', vi: 'dự báo thời tiết' }, { w: '下大雨', py: 'xià dàyǔ', vi: 'mưa to' } ] },
        { zh: '朋友有点担心，想改变计划。', py: 'Péngyǒu yǒudiǎn dānxīn, xiǎng gǎibiàn jìhuà.', vi: 'Bạn của Lệ hơi lo và muốn thay đổi kế hoạch.', audio: '',
          gloss: [ { w: '有点担心', py: 'yǒudiǎn dānxīn', vi: 'hơi lo lắng' }, { w: '改变计划', py: 'gǎibiàn jìhuà', vi: 'thay đổi kế hoạch' } ] }
      ]
    }, {
      sentences: [
        { zh: '丽查了地图，发现附近有一个安静的博物馆。', py: 'Lì chá le dìtú, fāxiàn fùjìn yǒu yí ge ānjìng de bówùguǎn.', vi: 'Lệ tra bản đồ và phát hiện gần đó có một bảo tàng yên tĩnh.', audio: '',
          gloss: [ { w: '查了地图', py: 'chá le dìtú', vi: 'đã tra bản đồ' }, { w: '附近', py: 'fùjìn', vi: 'gần đó' }, { w: '博物馆', py: 'bówùguǎn', vi: 'bảo tàng' } ] },
        { zh: '她说：“如果下雨，我们就去参观博物馆。”', py: 'Tā shuō: “Rúguǒ xià yǔ, wǒmen jiù qù cānguān bówùguǎn.”', vi: 'Bạn ấy nói: “Nếu trời mưa, chúng ta sẽ đi tham quan bảo tàng.”', audio: '',
          gloss: [ { w: '如果…就', py: 'rúguǒ…jiù', vi: 'nếu…thì' }, { w: '参观博物馆', py: 'cānguān bówùguǎn', vi: 'tham quan bảo tàng' } ] },
        { zh: '这样一来，不管天气怎么样，她们都能玩得开心。', py: 'Zhèyàng yì lái, bùguǎn tiānqì zěnmeyàng, tāmen dōu néng wán de kāixīn.', vi: 'Như vậy, bất kể thời tiết thế nào, họ đều có thể chơi vui.', audio: '',
          gloss: [ { w: '这样一来', py: 'zhèyàng yì lái', vi: 'như vậy thì' }, { w: '不管…都', py: 'bùguǎn…dōu', vi: 'bất kể…đều' }, { w: '玩得开心', py: 'wán de kāixīn', vi: 'chơi vui' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Lệ và bạn dự định đi đâu?', en: 'Where do Li and her friend plan to go?' }, options: ['Bờ biển', 'Văn phòng', 'Bệnh viện', 'Thư viện trường'], answer: 0, explain_vi: '打算周末去海边 = dự định cuối tuần đi biển/bờ biển.' },
      { q: { vi: 'Vì sao bạn của Lệ muốn đổi kế hoạch?', en: 'Why does Li’s friend want to change the plan?' }, options: ['Dự báo có mưa to', 'Không mua được sách', 'Không thích bảo tàng', 'Bị mất điện thoại'], answer: 0, explain_vi: '天气预报说会下大雨 nên bạn ấy hơi lo.' },
      { q: { vi: 'Nếu trời mưa, họ sẽ làm gì?', en: 'What will they do if it rains?' }, options: ['Tham quan bảo tàng', 'Về nhà ngay', 'Đi chạy bộ', 'Đi thi'], answer: 0, explain_vi: '如果下雨，我们就去参观博物馆 = nếu mưa thì đi tham quan bảo tàng.' }
    ]
  },
  {
    id: 'rd-3-003', level: 3, topic: 'cong-viec',
    title: { vi: 'Ngày đầu làm thêm', en: 'First Day at a Part-Time Job', zh: '第一天打工' },
    summary_vi: 'Một sinh viên làm thêm ở quán cà phê, học cách phục vụ khách và ghi chú công việc.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 101,
    paragraphs: [{
      sentences: [
        { zh: '小安是大学生，周末在一家咖啡店打工。', py: 'Xiǎo Ān shì dàxuéshēng, zhōumò zài yì jiā kāfēi diàn dǎgōng.', vi: 'Tiểu An là sinh viên, cuối tuần làm thêm ở một quán cà phê.', audio: '',
          gloss: [ { w: '大学生', py: 'dàxuéshēng', vi: 'sinh viên đại học' }, { w: '咖啡店', py: 'kāfēi diàn', vi: 'quán cà phê' }, { w: '打工', py: 'dǎgōng', vi: 'làm thêm' } ] },
        { zh: '第一天上班，他有点紧张。', py: 'Dì yī tiān shàngbān, tā yǒudiǎn jǐnzhāng.', vi: 'Ngày đầu đi làm, bạn ấy hơi căng thẳng.', audio: '',
          gloss: [ { w: '第一天上班', py: 'dì yī tiān shàngbān', vi: 'ngày đầu đi làm' }, { w: '有点紧张', py: 'yǒudiǎn jǐnzhāng', vi: 'hơi căng thẳng' } ] },
        { zh: '店长告诉他，服务顾客的时候要有礼貌。', py: 'Diànzhǎng gàosu tā, fúwù gùkè de shíhou yào yǒu lǐmào.', vi: 'Quản lý cửa hàng nói với bạn ấy rằng khi phục vụ khách phải lịch sự.', audio: '',
          gloss: [ { w: '店长', py: 'diànzhǎng', vi: 'quản lý cửa hàng' }, { w: '服务顾客', py: 'fúwù gùkè', vi: 'phục vụ khách hàng' }, { w: '有礼貌', py: 'yǒu lǐmào', vi: 'lịch sự' } ] },
        { zh: '小安把菜单放在桌上，请客人慢慢看。', py: 'Xiǎo Ān bǎ càidān fàng zài zhuō shang, qǐng kèrén mànmàn kàn.', vi: 'Tiểu An đặt thực đơn lên bàn, mời khách xem từ từ.', audio: '',
          gloss: [ { w: '菜单', py: 'càidān', vi: 'thực đơn' }, { w: '放在桌上', py: 'fàng zài zhuō shang', vi: 'đặt lên bàn' }, { w: '慢慢看', py: 'mànmàn kàn', vi: 'xem từ từ' } ] }
      ]
    }, {
      sentences: [
        { zh: '中午店里很忙，他不断地记下客人的要求。', py: 'Zhōngwǔ diàn lǐ hěn máng, tā búduàn de jì xià kèrén de yāoqiú.', vi: 'Buổi trưa quán rất bận, bạn ấy liên tục ghi lại yêu cầu của khách.', audio: '',
          gloss: [ { w: '店里很忙', py: 'diàn lǐ hěn máng', vi: 'trong quán rất bận' }, { w: '不断地', py: 'búduàn de', vi: 'liên tục' }, { w: '客人的要求', py: 'kèrén de yāoqiú', vi: 'yêu cầu của khách' } ] },
        { zh: '虽然很累，但是他学到了不少东西。', py: 'Suīrán hěn lèi, dànshì tā xué dào le bù shǎo dōngxi.', vi: 'Tuy rất mệt, nhưng bạn ấy học được khá nhiều điều.', audio: '',
          gloss: [ { w: '虽然…但是', py: 'suīrán…dànshì', vi: 'tuy…nhưng' }, { w: '学到了', py: 'xué dào le', vi: 'đã học được' }, { w: '不少东西', py: 'bù shǎo dōngxi', vi: 'khá nhiều điều' } ] },
        { zh: '下班后，他认真整理今天的笔记。', py: 'Xiàbān hòu, tā rènzhēn zhěnglǐ jīntiān de bǐjì.', vi: 'Sau khi tan làm, bạn ấy nghiêm túc sắp xếp ghi chú của hôm nay.', audio: '',
          gloss: [ { w: '下班后', py: 'xiàbān hòu', vi: 'sau khi tan làm' }, { w: '认真整理', py: 'rènzhēn zhěnglǐ', vi: 'nghiêm túc sắp xếp' }, { w: '笔记', py: 'bǐjì', vi: 'ghi chú' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Tiểu An làm thêm ở đâu?', en: 'Where does Xiao An work part-time?' }, options: ['Quán cà phê', 'Bệnh viện', 'Trường tiểu học', 'Ga tàu'], answer: 0, explain_vi: '在一家咖啡店打工 = làm thêm ở một quán cà phê.' },
      { q: { vi: 'Quản lý nhắc Tiểu An điều gì?', en: 'What does the manager remind Xiao An?' }, options: ['Phục vụ khách phải lịch sự', 'Không cần ghi chú', 'Phải đi học muộn', 'Không được xem thực đơn'], answer: 0, explain_vi: '服务顾客的时候要有礼貌 = khi phục vụ khách phải lịch sự.' },
      { q: { vi: 'Sau khi tan làm, Tiểu An làm gì?', en: 'What does Xiao An do after work?' }, options: ['Sắp xếp ghi chú', 'Đi mua vé xe', 'Đổi phòng', 'Xem dự báo thời tiết'], answer: 0, explain_vi: '认真整理今天的笔记 = nghiêm túc sắp xếp ghi chú hôm nay.' }
    ]
  },
  {
    id: 'rd-3-004', level: 3, topic: 'suc-khoe',
    title: { vi: 'Thay đổi thói quen ngủ', en: 'Changing Sleep Habits', zh: '改变睡觉习惯' },
    summary_vi: 'Một học sinh ngủ muộn vì xem điện thoại, sau đó điều chỉnh thói quen để khỏe hơn.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 118,
    paragraphs: [{
      sentences: [
        { zh: '小林过去常常半夜还在看手机。', py: 'Xiǎo Lín guòqù chángcháng bànyè hái zài kàn shǒujī.', vi: 'Trước đây Tiểu Lâm thường nửa đêm vẫn xem điện thoại.', audio: '',
          gloss: [ { w: '过去', py: 'guòqù', vi: 'trước đây/quá khứ' }, { w: '常常', py: 'chángcháng', vi: 'thường xuyên' }, { w: '半夜', py: 'bànyè', vi: 'nửa đêm' } ] },
        { zh: '第二天早上，他总是起不来，上课也没有精神。', py: 'Dì èr tiān zǎoshang, tā zǒngshì qǐ bu lái, shàngkè yě méiyǒu jīngshén.', vi: 'Sáng hôm sau, bạn ấy luôn không dậy nổi, lên lớp cũng không có tinh thần.', audio: '',
          gloss: [ { w: '第二天早上', py: 'dì èr tiān zǎoshang', vi: 'sáng hôm sau' }, { w: '起不来', py: 'qǐ bu lái', vi: 'không dậy nổi' }, { w: '没有精神', py: 'méiyǒu jīngshén', vi: 'không có tinh thần' } ] },
        { zh: '妈妈担心他的健康，建议他十点以前关机。', py: 'Māma dānxīn tā de jiànkāng, jiànyì tā shí diǎn yǐqián guānjī.', vi: 'Mẹ lo cho sức khỏe của bạn ấy, khuyên bạn ấy tắt máy trước mười giờ.', audio: '',
          gloss: [ { w: '担心健康', py: 'dānxīn jiànkāng', vi: 'lo cho sức khỏe' }, { w: '建议', py: 'jiànyì', vi: 'khuyên/đề nghị' }, { w: '关机', py: 'guānjī', vi: 'tắt máy' } ] },
        { zh: '小林觉得这个建议有道理，就开始改变。', py: 'Xiǎo Lín juéde zhège jiànyì yǒu dàolǐ, jiù kāishǐ gǎibiàn.', vi: 'Tiểu Lâm thấy lời khuyên này có lý, nên bắt đầu thay đổi.', audio: '',
          gloss: [ { w: '有道理', py: 'yǒu dàolǐ', vi: 'có lý' }, { w: '开始改变', py: 'kāishǐ gǎibiàn', vi: 'bắt đầu thay đổi' } ] }
      ]
    }, {
      sentences: [
        { zh: '现在他每天晚上先整理书包，再听一首轻松的歌。', py: 'Xiànzài tā měitiān wǎnshang xiān zhěnglǐ shūbāo, zài tīng yì shǒu qīngsōng de gē.', vi: 'Bây giờ mỗi tối bạn ấy sắp xếp cặp sách trước, rồi nghe một bài hát nhẹ nhàng.', audio: '',
          gloss: [ { w: '整理书包', py: 'zhěnglǐ shūbāo', vi: 'sắp xếp cặp sách' }, { w: '轻松的歌', py: 'qīngsōng de gē', vi: 'bài hát nhẹ nhàng' } ] },
        { zh: '一个星期以后，他白天不那么累了。', py: 'Yí ge xīngqī yǐhòu, tā báitiān bú nàme lèi le.', vi: 'Sau một tuần, ban ngày bạn ấy không còn mệt như vậy nữa.', audio: '',
          gloss: [ { w: '一个星期以后', py: 'yí ge xīngqī yǐhòu', vi: 'sau một tuần' }, { w: '白天', py: 'báitiān', vi: 'ban ngày' }, { w: '不那么累', py: 'bú nàme lèi', vi: 'không mệt như vậy' } ] },
        { zh: '他发现，好的睡觉习惯比多玩一会儿手机更重要。', py: 'Tā fāxiàn, hǎo de shuìjiào xíguàn bǐ duō wán yìhuǐr shǒujī gèng zhòngyào.', vi: 'Bạn ấy phát hiện thói quen ngủ tốt quan trọng hơn việc chơi điện thoại thêm một lúc.', audio: '',
          gloss: [ { w: '睡觉习惯', py: 'shuìjiào xíguàn', vi: 'thói quen ngủ' }, { w: '更重要', py: 'gèng zhòngyào', vi: 'quan trọng hơn' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Trước đây Tiểu Lâm thường làm gì lúc nửa đêm?', en: 'What did Xiao Lin often do at midnight before?' }, options: ['Xem điện thoại', 'Chạy bộ', 'Làm thêm', 'Đi siêu thị'], answer: 0, explain_vi: '半夜还在看手机 = nửa đêm vẫn xem điện thoại.' },
      { q: { vi: 'Mẹ khuyên Tiểu Lâm làm gì trước 10 giờ?', en: 'What does mom suggest Xiao Lin do before ten?' }, options: ['Tắt máy', 'Ăn mì', 'Gửi tin nhắn', 'Đi tàu'], answer: 0, explain_vi: '建议他十点以前关机 = khuyên tắt máy trước 10 giờ.' },
      { q: { vi: 'Sau khi thay đổi, Tiểu Lâm nhận ra điều gì?', en: 'What does Xiao Lin realize after changing?' }, options: ['Thói quen ngủ tốt quan trọng hơn', 'Điện thoại đắt hơn sách', 'Không cần đi học', 'Càng mệt càng tốt'], answer: 0, explain_vi: '好的睡觉习惯…更重要 = thói quen ngủ tốt quan trọng hơn.' }
    ]
  },
  {
    id: 'rd-3-005', level: 3, topic: 'am-thuc',
    title: { vi: 'Bữa cơm nhỏ trong ký túc xá', en: 'A Small Dorm Meal', zh: '宿舍里的小晚饭' },
    summary_vi: 'Ba bạn sinh viên cùng nấu bữa tối đơn giản, phân công việc và chia sẻ món ăn.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 111,
    paragraphs: [{
      sentences: [
        { zh: '周五晚上，宿舍里的三个学生不想去饭馆。', py: 'Zhōuwǔ wǎnshang, sùshè lǐ de sān ge xuésheng bù xiǎng qù fànguǎn.', vi: 'Tối thứ Sáu, ba sinh viên trong ký túc xá không muốn đi nhà hàng.', audio: '',
          gloss: [ { w: '周五晚上', py: 'zhōuwǔ wǎnshang', vi: 'tối thứ Sáu' }, { w: '宿舍', py: 'sùshè', vi: 'ký túc xá' }, { w: '饭馆', py: 'fànguǎn', vi: 'nhà hàng' } ] },
        { zh: '他们决定在宿舍做一顿简单的晚饭。', py: 'Tāmen juédìng zài sùshè zuò yí dùn jiǎndān de wǎnfàn.', vi: 'Họ quyết định nấu một bữa tối đơn giản trong ký túc xá.', audio: '',
          gloss: [ { w: '决定', py: 'juédìng', vi: 'quyết định' }, { w: '一顿晚饭', py: 'yí dùn wǎnfàn', vi: 'một bữa tối' }, { w: '简单', py: 'jiǎndān', vi: 'đơn giản' } ] },
        { zh: '小周负责买菜，小马负责洗白菜。', py: 'Xiǎo Zhōu fùzé mǎi cài, Xiǎo Mǎ fùzé xǐ báicài.', vi: 'Tiểu Chu phụ trách mua đồ ăn, Tiểu Mã phụ trách rửa cải thảo.', audio: '',
          gloss: [ { w: '负责', py: 'fùzé', vi: 'phụ trách' }, { w: '买菜', py: 'mǎi cài', vi: 'mua đồ ăn/rau' }, { w: '洗白菜', py: 'xǐ báicài', vi: 'rửa cải thảo' } ] },
        { zh: '小李会做面条，所以大家请他下厨。', py: 'Xiǎo Lǐ huì zuò miàntiáo, suǒyǐ dàjiā qǐng tā xiàchú.', vi: 'Tiểu Lý biết nấu mì, nên mọi người mời bạn ấy vào bếp.', audio: '',
          gloss: [ { w: '会做面条', py: 'huì zuò miàntiáo', vi: 'biết nấu mì' }, { w: '所以', py: 'suǒyǐ', vi: 'nên/vì vậy' }, { w: '下厨', py: 'xiàchú', vi: 'vào bếp/nấu ăn' } ] }
      ]
    }, {
      sentences: [
        { zh: '半个小时以后，热面条和白菜都好了。', py: 'Bàn ge xiǎoshí yǐhòu, rè miàntiáo hé báicài dōu hǎo le.', vi: 'Nửa tiếng sau, mì nóng và cải thảo đều xong.', audio: '',
          gloss: [ { w: '半个小时以后', py: 'bàn ge xiǎoshí yǐhòu', vi: 'nửa tiếng sau' }, { w: '热面条', py: 'rè miàntiáo', vi: 'mì nóng' } ] },
        { zh: '虽然菜不多，但是每个人都吃得很饱。', py: 'Suīrán cài bù duō, dànshì měi ge rén dōu chī de hěn bǎo.', vi: 'Tuy món ăn không nhiều, nhưng mỗi người đều ăn rất no.', audio: '',
          gloss: [ { w: '虽然…但是', py: 'suīrán…dànshì', vi: 'tuy…nhưng' }, { w: '吃得很饱', py: 'chī de hěn bǎo', vi: 'ăn rất no' } ] },
        { zh: '他们觉得，和朋友一起做饭比一个人吃方便面有意思。', py: 'Tāmen juéde, hé péngyǒu yìqǐ zuò fàn bǐ yí ge rén chī fāngbiànmiàn yǒu yìsi.', vi: 'Họ thấy nấu ăn cùng bạn bè thú vị hơn ăn mì ăn liền một mình.', audio: '',
          gloss: [ { w: '一起做饭', py: 'yìqǐ zuò fàn', vi: 'cùng nấu ăn' }, { w: '方便面', py: 'fāngbiànmiàn', vi: 'mì ăn liền' }, { w: '有意思', py: 'yǒu yìsi', vi: 'thú vị' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Ba sinh viên quyết định làm gì?', en: 'What do the three students decide to do?' }, options: ['Nấu bữa tối trong ký túc xá', 'Đi thi tiếng Hán', 'Đổi phòng', 'Đi biển'], answer: 0, explain_vi: '决定在宿舍做一顿简单的晚饭 = quyết định nấu bữa tối trong ký túc xá.' },
      { q: { vi: 'Ai phụ trách nấu mì?', en: 'Who is responsible for cooking noodles?' }, options: ['Tiểu Lý', 'Tiểu Chu', 'Tiểu Mã', 'Lớp trưởng'], answer: 0, explain_vi: '小李会做面条，所以大家请他下厨 = Tiểu Lý biết nấu mì nên vào bếp.' },
      { q: { vi: 'Họ thấy nấu ăn cùng bạn bè thế nào?', en: 'How do they feel about cooking with friends?' }, options: ['Thú vị hơn ăn mì một mình', 'Quá đắt', 'Không sạch', 'Không tiện chút nào'], answer: 0, explain_vi: '比一个人吃方便面有意思 = thú vị hơn ăn mì ăn liền một mình.' }
    ]
  },
  {
    id: 'rd-3-006', level: 3, topic: 'mua-sam',
    title: { vi: 'Chiếc áo sơ mi phù hợp', en: 'The Right Shirt', zh: '合适的衬衫' },
    summary_vi: 'Một bạn chọn áo sơ mi cho buổi biểu diễn của lớp, so sánh màu sắc, kích cỡ và giá.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 87,
    paragraphs: [{
      sentences: [
        { zh: '学校下周有一次小表演，小文需要买一件衬衫。', py: 'Xuéxiào xià zhōu yǒu yí cì xiǎo biǎoyǎn, Xiǎo Wén xūyào mǎi yí jiàn chènshān.', vi: 'Tuần sau trường có một buổi biểu diễn nhỏ, Tiểu Văn cần mua một chiếc áo sơ mi.', audio: '',
          gloss: [ { w: '下周', py: 'xià zhōu', vi: 'tuần sau' }, { w: '表演', py: 'biǎoyǎn', vi: 'biểu diễn' }, { w: '衬衫', py: 'chènshān', vi: 'áo sơ mi' } ] },
        { zh: '她和妈妈来到一家服装店。', py: 'Tā hé māma láidào yì jiā fúzhuāng diàn.', vi: 'Bạn ấy và mẹ đến một cửa hàng quần áo.', audio: '',
          gloss: [ { w: '来到', py: 'láidào', vi: 'đến' }, { w: '服装店', py: 'fúzhuāng diàn', vi: 'cửa hàng quần áo' } ] },
        { zh: '白色衬衫很好看，不过有点贵。', py: 'Báisè chènshān hěn hǎokàn, búguò yǒudiǎn guì.', vi: 'Áo sơ mi trắng rất đẹp, nhưng hơi đắt.', audio: '',
          gloss: [ { w: '白色衬衫', py: 'báisè chènshān', vi: 'áo sơ mi trắng' }, { w: '不过', py: 'búguò', vi: 'nhưng mà' }, { w: '有点贵', py: 'yǒudiǎn guì', vi: 'hơi đắt' } ] },
        { zh: '蓝色衬衫便宜一些，大小也合适。', py: 'Lánsè chènshān piányí yìxiē, dàxiǎo yě héshì.', vi: 'Áo sơ mi xanh rẻ hơn một chút, kích cỡ cũng phù hợp.', audio: '',
          gloss: [ { w: '便宜一些', py: 'piányí yìxiē', vi: 'rẻ hơn một chút' }, { w: '大小', py: 'dàxiǎo', vi: 'kích cỡ' }, { w: '合适', py: 'héshì', vi: 'phù hợp' } ] }
      ]
    }, {
      sentences: [
        { zh: '妈妈让她自己决定。', py: 'Māma ràng tā zìjǐ juédìng.', vi: 'Mẹ để bạn ấy tự quyết định.', audio: '',
          gloss: [ { w: '自己决定', py: 'zìjǐ juédìng', vi: 'tự quyết định' } ] },
        { zh: '小文想了想，买了蓝色的。', py: 'Xiǎo Wén xiǎng le xiǎng, mǎi le lánsè de.', vi: 'Tiểu Văn suy nghĩ một chút rồi mua chiếc màu xanh.', audio: '',
          gloss: [ { w: '想了想', py: 'xiǎng le xiǎng', vi: 'suy nghĩ một chút' }, { w: '蓝色的', py: 'lánsè de', vi: 'chiếc màu xanh' } ] },
        { zh: '她说：“我喜欢白色，但是蓝色更合适。”', py: 'Tā shuō: “Wǒ xǐhuan báisè, dànshì lánsè gèng héshì.”', vi: 'Bạn ấy nói: “Con thích màu trắng, nhưng màu xanh phù hợp hơn.”', audio: '',
          gloss: [ { w: '但是', py: 'dànshì', vi: 'nhưng' }, { w: '更合适', py: 'gèng héshì', vi: 'phù hợp hơn' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Tiểu Văn cần mua gì?', en: 'What does Xiao Wen need to buy?' }, options: ['Áo sơ mi', 'Vé xe', 'Từ điển', 'Bánh bao'], answer: 0, explain_vi: '需要买一件衬衫 = cần mua một chiếc áo sơ mi.' },
      { q: { vi: 'Chiếc áo màu trắng có vấn đề gì?', en: 'What is the issue with the white shirt?' }, options: ['Hơi đắt', 'Quá nhỏ', 'Không sạch', 'Không đẹp'], answer: 0, explain_vi: '白色衬衫很好看，不过有点贵 = đẹp nhưng hơi đắt.' },
      { q: { vi: 'Cuối cùng Tiểu Văn mua màu gì?', en: 'What color does Xiao Wen buy in the end?' }, options: ['Màu xanh', 'Màu trắng', 'Màu đỏ', 'Màu đen'], answer: 0, explain_vi: '买了蓝色的 = mua chiếc màu xanh.' }
    ]
  },
  {
    id: 'rd-3-007', level: 3, topic: 'ban-be',
    title: { vi: 'Một cuộc hẹn bị muộn', en: 'A Late Meetup', zh: '一次迟到的见面' },
    summary_vi: 'Hai người bạn hẹn gặp ở thư viện, một người đến muộn và biết cách xin lỗi, sắp xếp lại thời gian.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 109,
    paragraphs: [{
      sentences: [
        { zh: '小东和朋友约好下午三点在图书馆见面。', py: 'Xiǎo Dōng hé péngyǒu yuē hǎo xiàwǔ sān diǎn zài túshūguǎn jiànmiàn.', vi: 'Tiểu Đông và bạn hẹn nhau ba giờ chiều gặp ở thư viện.', audio: '',
          gloss: [ { w: '约好', py: 'yuē hǎo', vi: 'hẹn xong/thỏa thuận' }, { w: '下午三点', py: 'xiàwǔ sān diǎn', vi: 'ba giờ chiều' }, { w: '见面', py: 'jiànmiàn', vi: 'gặp mặt' } ] },
        { zh: '可是路上的车辆太多，他等公交车等了很久。', py: 'Kěshì lù shang de chēliàng tài duō, tā děng gōngjiāochē děng le hěn jiǔ.', vi: 'Nhưng xe cộ trên đường quá nhiều, bạn ấy đợi xe buýt rất lâu.', audio: '',
          gloss: [ { w: '可是', py: 'kěshì', vi: 'nhưng' }, { w: '车辆太多', py: 'chēliàng tài duō', vi: 'xe cộ quá nhiều' }, { w: '等了很久', py: 'děng le hěn jiǔ', vi: 'đợi rất lâu' } ] },
        { zh: '他赶到图书馆的时候，已经三点半了。', py: 'Tā gǎndào túshūguǎn de shíhou, yǐjīng sān diǎn bàn le.', vi: 'Khi bạn ấy vội đến thư viện, đã ba giờ rưỡi rồi.', audio: '',
          gloss: [ { w: '赶到', py: 'gǎndào', vi: 'vội đến/kịp đến' }, { w: '已经', py: 'yǐjīng', vi: 'đã' }, { w: '三点半', py: 'sān diǎn bàn', vi: 'ba giờ rưỡi' } ] },
        { zh: '朋友没有生气，只是问他：“路上还安全吗？”', py: 'Péngyǒu méiyǒu shēngqì, zhǐshì wèn tā: “Lù shang hái ānquán ma?”', vi: 'Bạn không giận, chỉ hỏi: “Trên đường vẫn an toàn chứ?”', audio: '',
          gloss: [ { w: '没有生气', py: 'méiyǒu shēngqì', vi: 'không giận' }, { w: '只是', py: 'zhǐshì', vi: 'chỉ là' }, { w: '安全', py: 'ānquán', vi: 'an toàn' } ] }
      ]
    }, {
      sentences: [
        { zh: '小东说：“对不起，我应该早点出门。”', py: 'Xiǎo Dōng shuō: “Duìbuqǐ, wǒ yīnggāi zǎo diǎn chūmén.”', vi: 'Tiểu Đông nói: “Xin lỗi, lẽ ra mình nên ra khỏi nhà sớm hơn.”', audio: '',
          gloss: [ { w: '对不起', py: 'duìbuqǐ', vi: 'xin lỗi' }, { w: '应该', py: 'yīnggāi', vi: 'nên' }, { w: '早点出门', py: 'zǎo diǎn chūmén', vi: 'ra ngoài sớm hơn' } ] },
        { zh: '他们把学习时间改到四点。', py: 'Tāmen bǎ xuéxí shíjiān gǎi dào sì diǎn.', vi: 'Họ đổi thời gian học sang bốn giờ.', audio: '',
          gloss: [ { w: '学习时间', py: 'xuéxí shíjiān', vi: 'thời gian học' }, { w: '改到四点', py: 'gǎi dào sì diǎn', vi: 'đổi sang bốn giờ' } ] },
        { zh: '因为朋友很理解他，所以这次见面还是很开心。', py: 'Yīnwèi péngyǒu hěn lǐjiě tā, suǒyǐ zhè cì jiànmiàn háishi hěn kāixīn.', vi: 'Vì bạn rất thông cảm cho bạn ấy, nên lần gặp này vẫn rất vui.', audio: '',
          gloss: [ { w: '因为…所以', py: 'yīnwèi…suǒyǐ', vi: 'vì…nên' }, { w: '理解', py: 'lǐjiě', vi: 'hiểu/thông cảm' }, { w: '还是很开心', py: 'háishi hěn kāixīn', vi: 'vẫn rất vui' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Hai người hẹn gặp ở đâu?', en: 'Where do the two people plan to meet?' }, options: ['Thư viện', 'Siêu thị', 'Bệnh viện', 'Bờ biển'], answer: 0, explain_vi: '在图书馆见面 = gặp ở thư viện.' },
      { q: { vi: 'Vì sao Tiểu Đông đến muộn?', en: 'Why is Xiao Dong late?' }, options: ['Đợi xe buýt rất lâu', 'Quên làm bài', 'Đi mua áo', 'Bị cảm'], answer: 0, explain_vi: '等公交车等了很久 = đợi xe buýt rất lâu.' },
      { q: { vi: 'Họ đổi thời gian học sang mấy giờ?', en: 'What time do they change the study time to?' }, options: ['4 giờ', '3 giờ', '5 giờ', '8 giờ'], answer: 0, explain_vi: '改到四点 = đổi sang bốn giờ.' }
    ]
  },
  {
    id: 'rd-3-008', level: 3, topic: 'doi-song',
    title: { vi: 'Dọn phòng vào Chủ nhật', en: 'Cleaning the Room on Sunday', zh: '星期天整理房间' },
    summary_vi: 'Một bạn dọn phòng, phân loại sách vở và phát hiện một tấm ảnh cũ của gia đình.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 122,
    paragraphs: [{
      sentences: [
        { zh: '星期天上午，小美决定整理自己的房间。', py: 'Xīngqītiān shàngwǔ, Xiǎo Měi juédìng zhěnglǐ zìjǐ de fángjiān.', vi: 'Sáng Chủ nhật, Tiểu Mỹ quyết định dọn dẹp phòng của mình.', audio: '',
          gloss: [ { w: '星期天上午', py: 'xīngqītiān shàngwǔ', vi: 'sáng Chủ nhật' }, { w: '决定', py: 'juédìng', vi: 'quyết định' }, { w: '整理房间', py: 'zhěnglǐ fángjiān', vi: 'dọn dẹp/sắp xếp phòng' } ] },
        { zh: '她先把课本放到书架上，再把旧本子放进箱子里。', py: 'Tā xiān bǎ kèběn fàng dào shūjià shang, zài bǎ jiù běnzi fàng jìn xiāngzi lǐ.', vi: 'Bạn ấy đặt sách giáo khoa lên giá sách trước, rồi bỏ vở cũ vào trong thùng.', audio: '',
          gloss: [ { w: '先…再', py: 'xiān…zài', vi: 'trước…rồi' }, { w: '书架', py: 'shūjià', vi: 'giá sách' }, { w: '旧本子', py: 'jiù běnzi', vi: 'vở cũ' } ] },
        { zh: '桌子底下有一个小包，她以前没有注意到。', py: 'Zhuōzi dǐxia yǒu yí ge xiǎo bāo, tā yǐqián méiyǒu zhùyì dào.', vi: 'Dưới bàn có một chiếc túi nhỏ mà trước đây bạn ấy không chú ý thấy.', audio: '',
          gloss: [ { w: '桌子底下', py: 'zhuōzi dǐxia', vi: 'dưới bàn' }, { w: '以前', py: 'yǐqián', vi: 'trước đây' }, { w: '注意到', py: 'zhùyì dào', vi: 'chú ý thấy' } ] },
        { zh: '包里有一张老照片，是她小时候和父母在公园拍的。', py: 'Bāo lǐ yǒu yì zhāng lǎo zhàopiàn, shì tā xiǎoshíhou hé fùmǔ zài gōngyuán pāi de.', vi: 'Trong túi có một tấm ảnh cũ, là ảnh bạn ấy chụp cùng bố mẹ trong công viên khi còn nhỏ.', audio: '',
          gloss: [ { w: '老照片', py: 'lǎo zhàopiàn', vi: 'ảnh cũ' }, { w: '小时候', py: 'xiǎoshíhou', vi: 'khi còn nhỏ' }, { w: '父母', py: 'fùmǔ', vi: 'cha mẹ' } ] }
      ]
    }, {
      sentences: [
        { zh: '照片里的她穿着红色衣服，笑得很甜。', py: 'Zhàopiàn lǐ de tā chuān zhe hóngsè yīfu, xiào de hěn tián.', vi: 'Trong ảnh, bạn ấy mặc quần áo màu đỏ và cười rất tươi.', audio: '',
          gloss: [ { w: '照片里', py: 'zhàopiàn lǐ', vi: 'trong ảnh' }, { w: '穿着', py: 'chuān zhe', vi: 'đang mặc' }, { w: '笑得很甜', py: 'xiào de hěn tián', vi: 'cười rất tươi' } ] },
        { zh: '她把照片放在桌子上，打算晚上给妈妈看。', py: 'Tā bǎ zhàopiàn fàng zài zhuōzi shang, dǎsuàn wǎnshang gěi māma kàn.', vi: 'Bạn ấy đặt ảnh lên bàn, dự định tối cho mẹ xem.', audio: '',
          gloss: [ { w: '放在桌子上', py: 'fàng zài zhuōzi shang', vi: 'đặt lên bàn' }, { w: '打算', py: 'dǎsuàn', vi: 'dự định' }, { w: '给妈妈看', py: 'gěi māma kàn', vi: 'cho mẹ xem' } ] },
        { zh: '整理房间以后，小美觉得家里更舒服了。', py: 'Zhěnglǐ fángjiān yǐhòu, Xiǎo Měi juéde jiā lǐ gèng shūfu le.', vi: 'Sau khi dọn phòng, Tiểu Mỹ thấy trong nhà dễ chịu hơn.', audio: '',
          gloss: [ { w: '整理房间以后', py: 'zhěnglǐ fángjiān yǐhòu', vi: 'sau khi dọn phòng' }, { w: '更舒服', py: 'gèng shūfu', vi: 'dễ chịu hơn' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Tiểu Mỹ tìm thấy gì trong chiếc túi nhỏ?', en: 'What does Xiao Mei find in the small bag?' }, options: ['Một tấm ảnh cũ', 'Một vé xe', 'Một cái áo mới', 'Một quyển thực đơn'], answer: 0, explain_vi: '包里有一张老照片 = trong túi có một tấm ảnh cũ.' },
      { q: { vi: 'Tấm ảnh được chụp ở đâu?', en: 'Where was the photo taken?' }, options: ['Công viên', 'Thư viện', 'Nhà hàng', 'Văn phòng'], answer: 0, explain_vi: '和父母在公园拍的 = chụp cùng bố mẹ ở công viên.' },
      { q: { vi: 'Tiểu Mỹ dự định tối làm gì?', en: 'What does Xiao Mei plan to do in the evening?' }, options: ['Cho mẹ xem ảnh', 'Đi mua sách', 'Học lái xe', 'Đổi phòng'], answer: 0, explain_vi: '打算晚上给妈妈看 = dự định tối cho mẹ xem.' }
    ]
  },
  {
    id: 'rd-3-009', level: 3, topic: 'doi-song',
    title: { vi: 'Chuyển nhà', en: 'Moving House', zh: '搬家' },
    summary_vi: 'Gia đình Tiểu Lâm chuyển đến nhà mới, mọi người chia việc và cùng ăn bữa cơm đầu tiên.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 104,
    paragraphs: [{
      sentences: [
        { zh: '这个周末，小林一家要搬到新房子。', py: 'Zhège zhōumò, Xiǎo Lín yì jiā yào bān dào xīn fángzi.', vi: 'Cuối tuần này, gia đình Tiểu Lâm chuyển đến nhà mới.', audio: '',
          gloss: [ { w: '一家', py: 'yì jiā', vi: 'cả nhà' }, { w: '搬到', py: 'bān dào', vi: 'chuyển đến' }, { w: '新房子', py: 'xīn fángzi', vi: 'nhà mới' } ] },
        { zh: '因为东西很多，所以大家都很忙。', py: 'Yīnwèi dōngxi hěn duō, suǒyǐ dàjiā dōu hěn máng.', vi: 'Vì đồ đạc rất nhiều, nên mọi người đều rất bận.', audio: '',
          gloss: [ { w: '因为…所以', py: 'yīnwèi…suǒyǐ', vi: 'vì…nên' }, { w: '东西', py: 'dōngxi', vi: 'đồ đạc' }, { w: '忙', py: 'máng', vi: 'bận' } ] },
        { zh: '爸爸把大箱子搬上车，妈妈整理小东西。', py: 'Bàba bǎ dà xiāngzi bān shàng chē, māma zhěnglǐ xiǎo dōngxi.', vi: 'Bố khiêng thùng lớn lên xe, mẹ sắp xếp đồ nhỏ.', audio: '',
          gloss: [ { w: '把', py: 'bǎ', vi: '(đem)' }, { w: '箱子', py: 'xiāngzi', vi: 'thùng/vali' }, { w: '整理', py: 'zhěnglǐ', vi: 'sắp xếp' } ] },
        { zh: '小林负责自己的书和衣服。', py: 'Xiǎo Lín fùzé zìjǐ de shū hé yīfu.', vi: 'Tiểu Lâm phụ trách sách và quần áo của mình.', audio: '',
          gloss: [ { w: '负责', py: 'fùzé', vi: 'phụ trách' }, { w: '自己', py: 'zìjǐ', vi: 'của mình' } ] }
      ]
    }, {
      sentences: [
        { zh: '新房子比以前的大一些，也更安静。', py: 'Xīn fángzi bǐ yǐqián de dà yìxiē, yě gèng ānjìng.', vi: 'Nhà mới to hơn nhà cũ một chút, cũng yên tĩnh hơn.', audio: '',
          gloss: [ { w: '比', py: 'bǐ', vi: 'hơn (so sánh)' }, { w: '大一些', py: 'dà yìxiē', vi: 'to hơn một chút' }, { w: '更安静', py: 'gèng ānjìng', vi: 'yên tĩnh hơn' } ] },
        { zh: '虽然搬家很累，但是大家都很开心。', py: 'Suīrán bānjiā hěn lèi, dànshì dàjiā dōu hěn kāixīn.', vi: 'Tuy chuyển nhà rất mệt, nhưng mọi người đều rất vui.', audio: '',
          gloss: [ { w: '虽然…但是', py: 'suīrán…dànshì', vi: 'tuy…nhưng' }, { w: '搬家', py: 'bānjiā', vi: 'chuyển nhà' } ] },
        { zh: '晚上，他们在新家吃了第一顿饭。', py: 'Wǎnshang, tāmen zài xīn jiā chī le dì yī dùn fàn.', vi: 'Buổi tối, họ ăn bữa cơm đầu tiên ở nhà mới.', audio: '',
          gloss: [ { w: '第一顿饭', py: 'dì yī dùn fàn', vi: 'bữa cơm đầu tiên' } ] },
        { zh: '小林觉得新家非常好。', py: 'Xiǎo Lín juéde xīn jiā fēicháng hǎo.', vi: 'Tiểu Lâm thấy nhà mới rất tốt.', audio: '',
          gloss: [ { w: '觉得', py: 'juéde', vi: 'cảm thấy' }, { w: '非常', py: 'fēicháng', vi: 'rất/vô cùng' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Vì sao mọi người đều bận?', en: 'Why is everyone busy?' }, options: ['Vì đồ đạc rất nhiều', 'Vì trời mưa', 'Vì có khách', 'Vì đi học'], answer: 0, explain_vi: '因为东西很多，所以大家都很忙 = vì đồ nhiều nên ai cũng bận.' },
      { q: { vi: 'Nhà mới thế nào so với nhà cũ?', en: 'How is the new house compared to the old one?' }, options: ['To hơn và yên tĩnh hơn', 'Nhỏ hơn', 'Xa hơn', 'Cũ hơn'], answer: 0, explain_vi: '比以前的大一些，也更安静 = to hơn và yên tĩnh hơn.' },
      { q: { vi: 'Buổi tối họ làm gì?', en: 'What do they do in the evening?' }, options: ['Ăn bữa cơm đầu tiên ở nhà mới', 'Đi mua đồ', 'Xem tivi', 'Dọn phòng'], answer: 0, explain_vi: '吃了第一顿饭 = ăn bữa cơm đầu tiên.' }
    ]
  },
  {
    id: 'rd-3-010', level: 3, topic: 'am-thuc',
    title: { vi: 'Học nấu món đầu tiên', en: 'Learning the First Dish', zh: '学做第一个菜' },
    summary_vi: 'Mẹ dạy Tiểu Mỹ nấu canh trứng; tuy lần đầu hơi khó nhưng món ăn rất ngon.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 106,
    paragraphs: [{
      sentences: [
        { zh: '小美一直想自己做一个菜。', py: 'Xiǎo Měi yìzhí xiǎng zìjǐ zuò yí ge cài.', vi: 'Tiểu Mỹ luôn muốn tự nấu một món ăn.', audio: '',
          gloss: [ { w: '一直', py: 'yìzhí', vi: 'luôn/mãi' }, { w: '自己', py: 'zìjǐ', vi: 'tự mình' }, { w: '做一个菜', py: 'zuò yí ge cài', vi: 'nấu một món' } ] },
        { zh: '周末，妈妈决定教她做鸡蛋汤。', py: 'Zhōumò, māma juédìng jiāo tā zuò jīdàn tāng.', vi: 'Cuối tuần, mẹ quyết định dạy bạn ấy nấu canh trứng.', audio: '',
          gloss: [ { w: '决定', py: 'juédìng', vi: 'quyết định' }, { w: '教', py: 'jiāo', vi: 'dạy' }, { w: '鸡蛋汤', py: 'jīdàn tāng', vi: 'canh trứng' } ] },
        { zh: '妈妈说：“如果你认真学，就一定能学会。”', py: 'Māma shuō: “Rúguǒ nǐ rènzhēn xué, jiù yídìng néng xuéhuì.”', vi: 'Mẹ nói: “Nếu con học nghiêm túc, thì nhất định sẽ học được.”', audio: '',
          gloss: [ { w: '如果…就', py: 'rúguǒ…jiù', vi: 'nếu…thì' }, { w: '认真', py: 'rènzhēn', vi: 'nghiêm túc' }, { w: '学会', py: 'xuéhuì', vi: 'học được/thành thạo' } ] },
        { zh: '小美一边听，一边记下每一步。', py: 'Xiǎo Měi yìbiān tīng, yìbiān jì xià měi yí bù.', vi: 'Tiểu Mỹ vừa nghe, vừa ghi lại từng bước.', audio: '',
          gloss: [ { w: '一边…一边', py: 'yìbiān…yìbiān', vi: 'vừa…vừa' }, { w: '记下', py: 'jì xià', vi: 'ghi lại' }, { w: '每一步', py: 'měi yí bù', vi: 'từng bước' } ] }
      ]
    }, {
      sentences: [
        { zh: '她先准备鸡蛋和水，再认真地做。', py: 'Tā xiān zhǔnbèi jīdàn hé shuǐ, zài rènzhēn de zuò.', vi: 'Bạn ấy chuẩn bị trứng và nước trước, rồi nghiêm túc làm.', audio: '',
          gloss: [ { w: '准备', py: 'zhǔnbèi', vi: 'chuẩn bị' }, { w: '先…再', py: 'xiān…zài', vi: 'trước…rồi' } ] },
        { zh: '虽然第一次有点难，但是汤做好了。', py: 'Suīrán dì yī cì yǒudiǎn nán, dànshì tāng zuò hǎo le.', vi: 'Tuy lần đầu hơi khó, nhưng canh đã nấu xong.', audio: '',
          gloss: [ { w: '虽然…但是', py: 'suīrán…dànshì', vi: 'tuy…nhưng' }, { w: '有点难', py: 'yǒudiǎn nán', vi: 'hơi khó' }, { w: '做好了', py: 'zuò hǎo le', vi: 'làm xong rồi' } ] },
        { zh: '爸爸吃了一口，说非常好喝。', py: 'Bàba chī le yì kǒu, shuō fēicháng hǎohē.', vi: 'Bố ăn một miếng, nói rất ngon.', audio: '',
          gloss: [ { w: '一口', py: 'yì kǒu', vi: 'một miếng/ngụm' }, { w: '非常', py: 'fēicháng', vi: 'rất' }, { w: '好喝', py: 'hǎohē', vi: 'ngon (đồ uống/canh)' } ] },
        { zh: '小美听了，心里非常高兴。', py: 'Xiǎo Měi tīng le, xīn lǐ fēicháng gāoxìng.', vi: 'Tiểu Mỹ nghe xong, trong lòng rất vui.', audio: '',
          gloss: [ { w: '心里', py: 'xīn lǐ', vi: 'trong lòng' }, { w: '高兴', py: 'gāoxìng', vi: 'vui' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Mẹ dạy Tiểu Mỹ nấu món gì?', en: 'What dish does mom teach Xiao Mei?' }, options: ['Canh trứng', 'Mì', 'Cơm', 'Bánh'], answer: 0, explain_vi: '教她做鸡蛋汤 = dạy nấu canh trứng.' },
      { q: { vi: 'Mẹ nói nếu học nghiêm túc thì sao?', en: 'What does mom say if she studies seriously?' }, options: ['Nhất định sẽ học được', 'Sẽ rất mệt', 'Không cần học', 'Phải đi học'], answer: 0, explain_vi: '如果你认真学，就一定能学会 = nếu nghiêm túc thì nhất định học được.' },
      { q: { vi: 'Bố ăn thử thấy thế nào?', en: 'How does dad find the soup?' }, options: ['Rất ngon', 'Quá mặn', 'Không ngon', 'Quá nóng'], answer: 0, explain_vi: '说非常好喝 = nói rất ngon.' }
    ]
  },
  {
    id: 'rd-3-011', level: 3, topic: 'du-lich',
    title: { vi: 'Đi xem biểu diễn', en: 'Watching a Performance', zh: '去看表演' },
    summary_vi: 'Tiểu Đông cùng bạn đi xem buổi biểu diễn âm nhạc của trường và rất thích.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 103,
    paragraphs: [{
      sentences: [
        { zh: '学校这个星期有一个音乐表演。', py: 'Xuéxiào zhège xīngqī yǒu yí ge yīnyuè biǎoyǎn.', vi: 'Tuần này trường có một buổi biểu diễn âm nhạc.', audio: '',
          gloss: [ { w: '音乐', py: 'yīnyuè', vi: 'âm nhạc' }, { w: '表演', py: 'biǎoyǎn', vi: 'biểu diễn' } ] },
        { zh: '小东和同学一起去看。', py: 'Xiǎo Dōng hé tóngxué yìqǐ qù kàn.', vi: 'Tiểu Đông cùng bạn học đi xem.', audio: '',
          gloss: [ { w: '同学', py: 'tóngxué', vi: 'bạn học' }, { w: '一起', py: 'yìqǐ', vi: 'cùng nhau' } ] },
        { zh: '因为来的人很多，所以他们到得很早。', py: 'Yīnwèi lái de rén hěn duō, suǒyǐ tāmen dào de hěn zǎo.', vi: 'Vì người đến rất đông, nên họ đến rất sớm.', audio: '',
          gloss: [ { w: '因为…所以', py: 'yīnwèi…suǒyǐ', vi: 'vì…nên' }, { w: '到得很早', py: 'dào de hěn zǎo', vi: 'đến rất sớm' } ] },
        { zh: '表演七点开始，大家都很安静。', py: 'Biǎoyǎn qī diǎn kāishǐ, dàjiā dōu hěn ānjìng.', vi: 'Buổi diễn bắt đầu lúc bảy giờ, mọi người đều rất yên tĩnh.', audio: '',
          gloss: [ { w: '开始', py: 'kāishǐ', vi: 'bắt đầu' }, { w: '安静', py: 'ānjìng', vi: 'yên tĩnh' } ] }
      ]
    }, {
      sentences: [
        { zh: '第一个节目是唱歌，非常好听。', py: 'Dì yī ge jiémù shì chànggē, fēicháng hǎotīng.', vi: 'Tiết mục đầu tiên là hát, rất hay.', audio: '',
          gloss: [ { w: '节目', py: 'jiémù', vi: 'tiết mục' }, { w: '唱歌', py: 'chànggē', vi: 'hát' }, { w: '好听', py: 'hǎotīng', vi: 'hay (âm thanh)' } ] },
        { zh: '小东最喜欢后面的音乐。', py: 'Xiǎo Dōng zuì xǐhuān hòumiàn de yīnyuè.', vi: 'Tiểu Đông thích nhất phần âm nhạc ở sau.', audio: '',
          gloss: [ { w: '最喜欢', py: 'zuì xǐhuān', vi: 'thích nhất' }, { w: '后面', py: 'hòumiàn', vi: 'phía sau' } ] },
        { zh: '虽然表演不长，但是大家都很开心。', py: 'Suīrán biǎoyǎn bù cháng, dànshì dàjiā dōu hěn kāixīn.', vi: 'Tuy buổi diễn không dài, nhưng mọi người đều rất vui.', audio: '',
          gloss: [ { w: '虽然…但是', py: 'suīrán…dànshì', vi: 'tuy…nhưng' }, { w: '不长', py: 'bù cháng', vi: 'không dài' } ] },
        { zh: '回家以后，他还在想那些好听的歌。', py: 'Huí jiā yǐhòu, tā hái zài xiǎng nàxiē hǎotīng de gē.', vi: 'Về nhà rồi, bạn ấy vẫn nghĩ về những bài hát hay đó.', audio: '',
          gloss: [ { w: '回家以后', py: 'huí jiā yǐhòu', vi: 'sau khi về nhà' }, { w: '那些', py: 'nàxiē', vi: 'những…đó' }, { w: '歌', py: 'gē', vi: 'bài hát' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Tuần này trường có hoạt động gì?', en: 'What event is at school this week?' }, options: ['Buổi biểu diễn âm nhạc', 'Kỳ thi', 'Trận bóng', 'Chuyến đi'], answer: 0, explain_vi: '有一个音乐表演 = có một buổi biểu diễn âm nhạc.' },
      { q: { vi: 'Vì sao họ đến sớm?', en: 'Why do they arrive early?' }, options: ['Vì người đến rất đông', 'Vì trời mưa', 'Vì quên giờ', 'Vì gần nhà'], answer: 0, explain_vi: '因为来的人很多 = vì người đến đông.' },
      { q: { vi: 'Tiết mục đầu tiên là gì?', en: 'What is the first program?' }, options: ['Hát', 'Vẽ', 'Nhảy', 'Đọc thơ'], answer: 0, explain_vi: '第一个节目是唱歌 = tiết mục đầu là hát.' }
    ]
  },
  {
    id: 'rd-3-012', level: 3, topic: 'cong-viec',
    title: { vi: 'Giúp việc ở cửa hàng của bố', en: "Helping at Dad's Shop", zh: '在爸爸的店里帮忙' },
    summary_vi: 'Tiểu Văn giúp bố bán trái cây; một lần đưa táo cho cụ già thiếu tiền và được bố khen.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 112,
    paragraphs: [{
      sentences: [
        { zh: '周末，小文常常去爸爸的小店帮忙。', py: 'Zhōumò, Xiǎo Wén chángcháng qù bàba de xiǎo diàn bāngmáng.', vi: 'Cuối tuần, Tiểu Văn thường đến cửa hàng nhỏ của bố giúp việc.', audio: '',
          gloss: [ { w: '常常', py: 'chángcháng', vi: 'thường xuyên' }, { w: '小店', py: 'xiǎo diàn', vi: 'cửa hàng nhỏ' }, { w: '帮忙', py: 'bāngmáng', vi: 'giúp việc' } ] },
        { zh: '爸爸的店卖很多水果。', py: 'Bàba de diàn mài hěn duō shuǐguǒ.', vi: 'Cửa hàng của bố bán rất nhiều trái cây.', audio: '',
          gloss: [ { w: '卖', py: 'mài', vi: 'bán' }, { w: '水果', py: 'shuǐguǒ', vi: 'trái cây' } ] },
        { zh: '小文负责把水果放好，还要看着价钱。', py: 'Xiǎo Wén fùzé bǎ shuǐguǒ fàng hǎo, hái yào kàn zhe jiàqián.', vi: 'Tiểu Văn phụ trách xếp trái cây cho gọn, còn phải để ý giá cả.', audio: '',
          gloss: [ { w: '负责', py: 'fùzé', vi: 'phụ trách' }, { w: '把…放好', py: 'bǎ…fàng hǎo', vi: 'xếp…cho gọn' }, { w: '价钱', py: 'jiàqián', vi: 'giá cả' } ] },
        { zh: '客人很多的时候，他也帮忙拿东西。', py: 'Kèrén hěn duō de shíhou, tā yě bāngmáng ná dōngxi.', vi: 'Khi khách đông, bạn ấy cũng giúp lấy đồ.', audio: '',
          gloss: [ { w: '客人', py: 'kèrén', vi: 'khách hàng' }, { w: '拿东西', py: 'ná dōngxi', vi: 'lấy đồ' } ] }
      ]
    }, {
      sentences: [
        { zh: '有一次，一位老人买苹果，钱带得不够。', py: 'Yǒu yí cì, yí wèi lǎorén mǎi píngguǒ, qián dài de bú gòu.', vi: 'Có lần, một cụ già mua táo nhưng mang không đủ tiền.', audio: '',
          gloss: [ { w: '有一次', py: 'yǒu yí cì', vi: 'có một lần' }, { w: '老人', py: 'lǎorén', vi: 'cụ già/người già' }, { w: '不够', py: 'bú gòu', vi: 'không đủ' } ] },
        { zh: '小文想了想，就先给了她一个。', py: 'Xiǎo Wén xiǎng le xiǎng, jiù xiān gěi le tā yí ge.', vi: 'Tiểu Văn nghĩ một chút, rồi đưa trước cho cụ một quả.', audio: '',
          gloss: [ { w: '想了想', py: 'xiǎng le xiǎng', vi: 'nghĩ một chút' }, { w: '先给', py: 'xiān gěi', vi: 'đưa trước' } ] },
        { zh: '爸爸知道以后，觉得他做得很对。', py: 'Bàba zhīdào yǐhòu, juéde tā zuò de hěn duì.', vi: 'Bố biết chuyện, thấy bạn ấy làm rất đúng.', audio: '',
          gloss: [ { w: '知道以后', py: 'zhīdào yǐhòu', vi: 'sau khi biết' }, { w: '做得很对', py: 'zuò de hěn duì', vi: 'làm rất đúng' } ] },
        { zh: '他说，帮助别人是一件好事。', py: 'Tā shuō, bāngzhù biérén shì yí jiàn hǎoshì.', vi: 'Bố nói, giúp đỡ người khác là một việc tốt.', audio: '',
          gloss: [ { w: '帮助', py: 'bāngzhù', vi: 'giúp đỡ' }, { w: '别人', py: 'biérén', vi: 'người khác' }, { w: '好事', py: 'hǎoshì', vi: 'việc tốt' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Cửa hàng của bố bán gì?', en: "What does dad's shop sell?" }, options: ['Trái cây', 'Quần áo', 'Sách', 'Đồ chơi'], answer: 0, explain_vi: '卖很多水果 = bán rất nhiều trái cây.' },
      { q: { vi: 'Tiểu Văn làm gì khi cụ già thiếu tiền?', en: 'What does Xiao Wen do when the old lady is short of money?' }, options: ['Đưa trước cho cụ một quả táo', 'Không bán', 'Gọi bố', 'Bảo cụ về'], answer: 0, explain_vi: '就先给了她一个 = đưa trước cho cụ một quả.' },
      { q: { vi: 'Bố nghĩ thế nào về việc đó?', en: 'How does dad feel about it?' }, options: ['Thấy bạn ấy làm đúng', 'Rất giận', 'Không quan tâm', 'Bảo trả tiền'], answer: 0, explain_vi: '觉得他做得很对 = thấy bạn ấy làm rất đúng.' }
    ]
  },
  {
    id: 'rd-3-013', level: 3, topic: 'suc-khoe',
    title: { vi: 'Bắt đầu vận động buổi sáng', en: 'Starting Morning Exercise', zh: '早上运动' },
    summary_vi: 'Tiểu An nghe lời bác sĩ, tập buổi sáng mỗi ngày và dần thấy khỏe hơn.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 114,
    paragraphs: [{
      sentences: [
        { zh: '小安发现自己最近身体不太好。', py: 'Xiǎo Ān fāxiàn zìjǐ zuìjìn shēntǐ bú tài hǎo.', vi: 'Tiểu An phát hiện dạo này sức khỏe không tốt lắm.', audio: '',
          gloss: [ { w: '发现', py: 'fāxiàn', vi: 'phát hiện' }, { w: '最近', py: 'zuìjìn', vi: 'dạo này' }, { w: '身体', py: 'shēntǐ', vi: 'sức khỏe/cơ thể' } ] },
        { zh: '医生说，他应该多运动。', py: 'Yīshēng shuō, tā yīnggāi duō yùndòng.', vi: 'Bác sĩ nói bạn ấy nên vận động nhiều.', audio: '',
          gloss: [ { w: '应该', py: 'yīnggāi', vi: 'nên' }, { w: '多运动', py: 'duō yùndòng', vi: 'vận động nhiều' } ] },
        { zh: '因为白天要上课，所以他决定早上运动。', py: 'Yīnwèi báitiān yào shàngkè, suǒyǐ tā juédìng zǎoshang yùndòng.', vi: 'Vì ban ngày phải đi học, nên bạn ấy quyết định tập vào buổi sáng.', audio: '',
          gloss: [ { w: '因为…所以', py: 'yīnwèi…suǒyǐ', vi: 'vì…nên' }, { w: '白天', py: 'báitiān', vi: 'ban ngày' }, { w: '决定', py: 'juédìng', vi: 'quyết định' } ] },
        { zh: '第一天，他六点就起床了。', py: 'Dì yī tiān, tā liù diǎn jiù qǐchuáng le.', vi: 'Ngày đầu, bạn ấy sáu giờ đã dậy.', audio: '',
          gloss: [ { w: '第一天', py: 'dì yī tiān', vi: 'ngày đầu tiên' }, { w: '起床', py: 'qǐchuáng', vi: 'thức dậy' } ] }
      ]
    }, {
      sentences: [
        { zh: '他每天在公园走路、跑步。', py: 'Tā měitiān zài gōngyuán zǒulù, pǎobù.', vi: 'Mỗi ngày bạn ấy đi bộ, chạy bộ trong công viên.', audio: '',
          gloss: [ { w: '公园', py: 'gōngyuán', vi: 'công viên' }, { w: '走路', py: 'zǒulù', vi: 'đi bộ' }, { w: '跑步', py: 'pǎobù', vi: 'chạy bộ' } ] },
        { zh: '虽然开始的时候很累，但是他还是每天去。', py: 'Suīrán kāishǐ de shíhou hěn lèi, dànshì tā háishi měitiān qù.', vi: 'Tuy lúc đầu rất mệt, nhưng bạn ấy vẫn đi mỗi ngày.', audio: '',
          gloss: [ { w: '虽然…但是', py: 'suīrán…dànshì', vi: 'tuy…nhưng' }, { w: '还是', py: 'háishi', vi: 'vẫn' } ] },
        { zh: '一个月以后，他觉得身体比以前好多了。', py: 'Yí ge yuè yǐhòu, tā juéde shēntǐ bǐ yǐqián hǎo duō le.', vi: 'Một tháng sau, bạn ấy thấy sức khỏe tốt hơn trước nhiều.', audio: '',
          gloss: [ { w: '一个月以后', py: 'yí ge yuè yǐhòu', vi: 'một tháng sau' }, { w: '比以前', py: 'bǐ yǐqián', vi: 'so với trước' }, { w: '好多了', py: 'hǎo duō le', vi: 'tốt hơn nhiều' } ] },
        { zh: '现在，运动已经成了他的习惯。', py: 'Xiànzài, yùndòng yǐjīng chéng le tā de xíguàn.', vi: 'Bây giờ, vận động đã trở thành thói quen của bạn ấy.', audio: '',
          gloss: [ { w: '已经', py: 'yǐjīng', vi: 'đã' }, { w: '成了', py: 'chéng le', vi: 'trở thành' }, { w: '习惯', py: 'xíguàn', vi: 'thói quen' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Bác sĩ khuyên Tiểu An điều gì?', en: 'What does the doctor advise Xiao An?' }, options: ['Nên vận động nhiều', 'Uống nhiều nước', 'Ngủ sớm', 'Ăn ít'], answer: 0, explain_vi: '应该多运动 = nên vận động nhiều.' },
      { q: { vi: 'Vì sao bạn ấy tập vào buổi sáng?', en: 'Why does he exercise in the morning?' }, options: ['Vì ban ngày phải đi học', 'Vì sáng mát', 'Vì thích dậy sớm', 'Vì có bạn'], answer: 0, explain_vi: '因为白天要上课 = vì ban ngày phải đi học.' },
      { q: { vi: 'Một tháng sau bạn ấy thấy thế nào?', en: 'How does he feel after a month?' }, options: ['Sức khỏe tốt hơn trước nhiều', 'Mệt hơn', 'Không đổi', 'Lười hơn'], answer: 0, explain_vi: '身体比以前好多了 = sức khỏe tốt hơn trước nhiều.' }
    ]
  },
  {
    id: 'rd-3-014', level: 3, topic: 'hoc-tap',
    title: { vi: 'Làm bài tập nhóm', en: 'Doing Group Homework', zh: '一起做小组作业' },
    summary_vi: 'Một nhóm ba bạn làm bài tập chung; máy tính hỏng nhưng họ vẫn hoàn thành nhờ cùng cố gắng.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 113,
    paragraphs: [{
      sentences: [
        { zh: '老师给大家一个任务，要三个人一起完成。', py: 'Lǎoshī gěi dàjiā yí ge rènwù, yào sān ge rén yìqǐ wánchéng.', vi: 'Cô giáo giao một nhiệm vụ, cần ba người cùng hoàn thành.', audio: '',
          gloss: [ { w: '任务', py: 'rènwù', vi: 'nhiệm vụ' }, { w: '完成', py: 'wánchéng', vi: 'hoàn thành' } ] },
        { zh: '小丽、小马和小东在一组。', py: 'Xiǎo Lì, Xiǎo Mǎ hé Xiǎo Dōng zài yì zǔ.', vi: 'Tiểu Lệ, Tiểu Mã và Tiểu Đông cùng một nhóm.', audio: '',
          gloss: [ { w: '在一组', py: 'zài yì zǔ', vi: 'cùng một nhóm' } ] },
        { zh: '他们决定周末在图书馆见面。', py: 'Tāmen juédìng zhōumò zài túshūguǎn jiànmiàn.', vi: 'Họ quyết định cuối tuần gặp nhau ở thư viện.', audio: '',
          gloss: [ { w: '决定', py: 'juédìng', vi: 'quyết định' }, { w: '图书馆', py: 'túshūguǎn', vi: 'thư viện' }, { w: '见面', py: 'jiànmiàn', vi: 'gặp mặt' } ] },
        { zh: '每个人负责一部分，再一起讨论。', py: 'Měi ge rén fùzé yí bùfen, zài yìqǐ tǎolùn.', vi: 'Mỗi người phụ trách một phần, rồi cùng thảo luận.', audio: '',
          gloss: [ { w: '负责', py: 'fùzé', vi: 'phụ trách' }, { w: '一部分', py: 'yí bùfen', vi: 'một phần' }, { w: '讨论', py: 'tǎolùn', vi: 'thảo luận' } ] }
      ]
    }, {
      sentences: [
        { zh: '小马的电脑突然坏了，大家有点担心。', py: 'Xiǎo Mǎ de diànnǎo tūrán huài le, dàjiā yǒudiǎn dānxīn.', vi: 'Máy tính của Tiểu Mã đột nhiên hỏng, mọi người hơi lo.', audio: '',
          gloss: [ { w: '电脑', py: 'diànnǎo', vi: 'máy tính' }, { w: '突然', py: 'tūrán', vi: 'đột nhiên' }, { w: '担心', py: 'dānxīn', vi: 'lo lắng' } ] },
        { zh: '小丽说：“不管有没有电脑，我们都能想办法。”', py: 'Xiǎo Lì shuō: “Bùguǎn yǒu méiyǒu diànnǎo, wǒmen dōu néng xiǎng bànfǎ.”', vi: 'Tiểu Lệ nói: “Bất kể có máy tính hay không, chúng ta đều có cách.”', audio: '',
          gloss: [ { w: '不管…都', py: 'bùguǎn…dōu', vi: 'bất kể…đều' }, { w: '想办法', py: 'xiǎng bànfǎ', vi: 'nghĩ cách' } ] },
        { zh: '他们用笔和纸完成了任务。', py: 'Tāmen yòng bǐ hé zhǐ wánchéng le rènwù.', vi: 'Họ dùng bút và giấy hoàn thành nhiệm vụ.', audio: '',
          gloss: [ { w: '用笔和纸', py: 'yòng bǐ hé zhǐ', vi: 'dùng bút và giấy' }, { w: '完成', py: 'wánchéng', vi: 'hoàn thành' } ] },
        { zh: '因为大家一起努力，所以作业做得很好。', py: 'Yīnwèi dàjiā yìqǐ nǔlì, suǒyǐ zuòyè zuò de hěn hǎo.', vi: 'Vì mọi người cùng cố gắng, nên bài tập làm rất tốt.', audio: '',
          gloss: [ { w: '因为…所以', py: 'yīnwèi…suǒyǐ', vi: 'vì…nên' }, { w: '努力', py: 'nǔlì', vi: 'cố gắng' }, { w: '作业', py: 'zuòyè', vi: 'bài tập' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Nhiệm vụ cô giáo giao cần mấy người?', en: 'How many people does the task need?' }, options: ['Ba người', 'Hai người', 'Bốn người', 'Một người'], answer: 0, explain_vi: '要三个人一起完成 = cần ba người cùng hoàn thành.' },
      { q: { vi: 'Khi máy tính hỏng, Tiểu Lệ nói gì?', en: 'What does Xiao Li say when the computer breaks?' }, options: ['Bất kể có máy tính hay không đều có cách', 'Phải về nhà', 'Hỏi cô giáo', 'Đợi sửa máy'], answer: 0, explain_vi: '不管有没有电脑，我们都能想办法 = bất kể có máy tính hay không đều có cách.' },
      { q: { vi: 'Vì sao bài tập làm tốt?', en: 'Why is the homework done well?' }, options: ['Vì mọi người cùng cố gắng', 'Vì có máy tính mới', 'Vì bài dễ', 'Vì cô giúp'], answer: 0, explain_vi: '因为大家一起努力 = vì mọi người cùng cố gắng.' }
    ]
  },
  {
    id: 'rd-3-015', level: 3, topic: 'thoi-tiet',
    title: { vi: 'Trời lạnh rồi', en: 'It Has Turned Cold', zh: '天冷了' },
    summary_vi: 'Trời chuyển lạnh, Tiểu An mặc thêm áo, mang theo nước nóng và nhắc bạn giữ ấm.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 108,
    paragraphs: [{
      sentences: [
        { zh: '这几天天气越来越冷。', py: 'Zhè jǐ tiān tiānqì yuè lái yuè lěng.', vi: 'Mấy ngày nay thời tiết ngày càng lạnh.', audio: '',
          gloss: [ { w: '这几天', py: 'zhè jǐ tiān', vi: 'mấy ngày nay' }, { w: '越来越', py: 'yuè lái yuè', vi: 'ngày càng' }, { w: '冷', py: 'lěng', vi: 'lạnh' } ] },
        { zh: '早上起床的时候，小安觉得房间里很冷。', py: 'Zǎoshang qǐchuáng de shíhou, Xiǎo Ān juéde fángjiān lǐ hěn lěng.', vi: 'Lúc dậy buổi sáng, Tiểu An thấy trong phòng rất lạnh.', audio: '',
          gloss: [ { w: '起床', py: 'qǐchuáng', vi: 'thức dậy' }, { w: '房间里', py: 'fángjiān lǐ', vi: 'trong phòng' }, { w: '冷', py: 'lěng', vi: 'lạnh' } ] },
        { zh: '他多穿了一件衣服，又喝了一杯热水。', py: 'Tā duō chuān le yí jiàn yīfu, yòu hē le yì bēi rè shuǐ.', vi: 'Bạn ấy mặc thêm một chiếc áo, lại uống một cốc nước nóng.', audio: '',
          gloss: [ { w: '多穿', py: 'duō chuān', vi: 'mặc thêm' }, { w: '一件衣服', py: 'yí jiàn yīfu', vi: 'một chiếc áo' }, { w: '热水', py: 'rè shuǐ', vi: 'nước nóng' } ] },
        { zh: '因为外面有风，所以妈妈让他穿得暖和一点。', py: 'Yīnwèi wàimiàn yǒu fēng, suǒyǐ māma ràng tā chuān de nuǎnhuo yìdiǎn.', vi: 'Vì bên ngoài có gió, nên mẹ bảo bạn ấy mặc cho ấm một chút.', audio: '',
          gloss: [ { w: '因为…所以', py: 'yīnwèi…suǒyǐ', vi: 'vì…nên' }, { w: '有风', py: 'yǒu fēng', vi: 'có gió' }, { w: '穿得暖和', py: 'chuān de nuǎnhuo', vi: 'mặc cho ấm' } ] }
      ]
    }, {
      sentences: [
        { zh: '到了学校，他看见同学穿得很少。', py: 'Dào le xuéxiào, tā kànjiàn tóngxué chuān de hěn shǎo.', vi: 'Đến trường, bạn ấy thấy bạn học mặc rất phong phanh.', audio: '',
          gloss: [ { w: '看见', py: 'kànjiàn', vi: 'nhìn thấy' }, { w: '穿得很少', py: 'chuān de hěn shǎo', vi: 'mặc rất ít/phong phanh' } ] },
        { zh: '小安说：“天气这么冷，你应该多穿一点。”', py: 'Xiǎo Ān shuō: “Tiānqì zhème lěng, nǐ yīnggāi duō chuān yìdiǎn.”', vi: 'Tiểu An nói: “Trời lạnh thế này, cậu nên mặc thêm một chút.”', audio: '',
          gloss: [ { w: '这么冷', py: 'zhème lěng', vi: 'lạnh thế này' }, { w: '应该', py: 'yīnggāi', vi: 'nên' }, { w: '多穿一点', py: 'duō chuān yìdiǎn', vi: 'mặc thêm một chút' } ] },
        { zh: '同学笑着说谢谢，第二天也穿得很暖和。', py: 'Tóngxué xiào zhe shuō xièxie, dì èr tiān yě chuān de hěn nuǎnhuo.', vi: 'Bạn học cười nói cảm ơn, ngày hôm sau cũng mặc thật ấm.', audio: '',
          gloss: [ { w: '笑着说', py: 'xiào zhe shuō', vi: 'cười nói' }, { w: '第二天', py: 'dì èr tiān', vi: 'ngày hôm sau' }, { w: '穿得很暖和', py: 'chuān de hěn nuǎnhuo', vi: 'mặc thật ấm' } ] },
        { zh: '虽然天气冷，但是他们都觉得心里很暖。', py: 'Suīrán tiānqì lěng, dànshì tāmen dōu juéde xīn lǐ hěn nuǎn.', vi: 'Tuy trời lạnh, nhưng cả hai đều thấy trong lòng rất ấm.', audio: '',
          gloss: [ { w: '虽然…但是', py: 'suīrán…dànshì', vi: 'tuy…nhưng' }, { w: '心里', py: 'xīn lǐ', vi: 'trong lòng' }, { w: '暖', py: 'nuǎn', vi: 'ấm' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Buổi sáng Tiểu An làm gì để giữ ấm?', en: 'What does Xiao An do to keep warm in the morning?' }, options: ['Mặc thêm áo và uống nước nóng', 'Đi chạy bộ', 'Mở cửa sổ', 'Ăn kem'], answer: 0, explain_vi: '多穿了一件衣服，又喝了一杯热水 = mặc thêm áo và uống nước nóng.' },
      { q: { vi: 'Vì sao mẹ bảo Tiểu An mặc cho ấm?', en: 'Why does mom ask Xiao An to dress warmly?' }, options: ['Vì bên ngoài có gió', 'Vì trời nắng', 'Vì đi xa', 'Vì sắp mưa'], answer: 0, explain_vi: '因为外面有风 = vì bên ngoài có gió.' },
      { q: { vi: 'Bạn học đã thay đổi thế nào vào hôm sau?', en: 'How does the classmate change the next day?' }, options: ['Mặc thật ấm', 'Nghỉ học', 'Mặc phong phanh hơn', 'Quên mang sách'], answer: 0, explain_vi: '第二天也穿得很暖和 = hôm sau cũng mặc thật ấm, vì nghe lời khuyên.' }
    ]
  },
  {
    id: 'rd-3-016', level: 3, topic: 'so-thich',
    title: { vi: 'Học bơi', en: 'Learning to Swim', zh: '学游泳' },
    summary_vi: 'Tiểu Lệ sợ nước nhưng kiên trì học bơi; nhờ luyện tập mỗi tuần, cuối cùng bạn ấy bơi được.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 110,
    paragraphs: [{
      sentences: [
        { zh: '丽以前不会游泳，也有点怕水。', py: 'Lì yǐqián bú huì yóuyǒng, yě yǒudiǎn pà shuǐ.', vi: 'Trước đây Lệ không biết bơi, lại hơi sợ nước.', audio: '',
          gloss: [ { w: '以前', py: 'yǐqián', vi: 'trước đây' }, { w: '游泳', py: 'yóuyǒng', vi: 'bơi lội' }, { w: '怕水', py: 'pà shuǐ', vi: 'sợ nước' } ] },
        { zh: '这个夏天，她决定学游泳。', py: 'Zhège xiàtiān, tā juédìng xué yóuyǒng.', vi: 'Mùa hè này, bạn ấy quyết định học bơi.', audio: '',
          gloss: [ { w: '夏天', py: 'xiàtiān', vi: 'mùa hè' }, { w: '决定', py: 'juédìng', vi: 'quyết định' } ] },
        { zh: '第一次下水的时候，她非常紧张。', py: 'Dì yī cì xià shuǐ de shíhou, tā fēicháng jǐnzhāng.', vi: 'Lần đầu xuống nước, bạn ấy rất căng thẳng.', audio: '',
          gloss: [ { w: '第一次', py: 'dì yī cì', vi: 'lần đầu' }, { w: '下水', py: 'xià shuǐ', vi: 'xuống nước' }, { w: '紧张', py: 'jǐnzhāng', vi: 'căng thẳng' } ] },
        { zh: '老师告诉她，不要着急，慢慢来。', py: 'Lǎoshī gàosu tā, búyào zháojí, mànmàn lái.', vi: 'Giáo viên bảo bạn ấy đừng vội, từ từ thôi.', audio: '',
          gloss: [ { w: '告诉', py: 'gàosu', vi: 'nói cho biết' }, { w: '着急', py: 'zháojí', vi: 'sốt ruột/vội' }, { w: '慢慢来', py: 'mànmàn lái', vi: 'từ từ thôi' } ] }
      ]
    }, {
      sentences: [
        { zh: '每个星期，她都去游泳两次。', py: 'Měi ge xīngqī, tā dōu qù yóuyǒng liǎng cì.', vi: 'Mỗi tuần, bạn ấy đều đi bơi hai lần.', audio: '',
          gloss: [ { w: '每个星期', py: 'měi ge xīngqī', vi: 'mỗi tuần' }, { w: '两次', py: 'liǎng cì', vi: 'hai lần' } ] },
        { zh: '虽然有时候很累，但是她一直坚持。', py: 'Suīrán yǒu shíhou hěn lèi, dànshì tā yìzhí jiānchí.', vi: 'Tuy đôi khi rất mệt, nhưng bạn ấy luôn kiên trì.', audio: '',
          gloss: [ { w: '虽然…但是', py: 'suīrán…dànshì', vi: 'tuy…nhưng' }, { w: '有时候', py: 'yǒu shíhou', vi: 'đôi khi' }, { w: '坚持', py: 'jiānchí', vi: 'kiên trì' } ] },
        { zh: '一个月以后，她已经会游了。', py: 'Yí ge yuè yǐhòu, tā yǐjīng huì yóu le.', vi: 'Một tháng sau, bạn ấy đã biết bơi.', audio: '',
          gloss: [ { w: '一个月以后', py: 'yí ge yuè yǐhòu', vi: 'một tháng sau' }, { w: '已经', py: 'yǐjīng', vi: 'đã' }, { w: '会游', py: 'huì yóu', vi: 'biết bơi' } ] },
        { zh: '她说：“如果你认真练习，就一定能成功。”', py: 'Tā shuō: “Rúguǒ nǐ rènzhēn liànxí, jiù yídìng néng chénggōng.”', vi: 'Bạn ấy nói: “Nếu bạn luyện tập nghiêm túc, thì nhất định sẽ thành công.”', audio: '',
          gloss: [ { w: '如果…就', py: 'rúguǒ…jiù', vi: 'nếu…thì' }, { w: '练习', py: 'liànxí', vi: 'luyện tập' }, { w: '成功', py: 'chénggōng', vi: 'thành công' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Trước đây Lệ cảm thấy thế nào về nước?', en: 'How did Li feel about water before?' }, options: ['Hơi sợ nước', 'Rất thích nước', 'Không quan tâm', 'Ghét mùa hè'], answer: 0, explain_vi: '不会游泳，也有点怕水 = không biết bơi và hơi sợ nước.' },
      { q: { vi: 'Giáo viên khuyên Lệ điều gì?', en: 'What does the teacher advise Li?' }, options: ['Đừng vội, từ từ thôi', 'Phải bơi thật nhanh', 'Đừng đến nữa', 'Học môn khác'], answer: 0, explain_vi: '不要着急，慢慢来 = đừng vội, từ từ thôi.' },
      { q: { vi: 'Vì sao cuối cùng Lệ bơi được?', en: 'Why can Li finally swim?' }, options: ['Vì kiên trì luyện tập mỗi tuần', 'Vì có thuyền', 'Vì nước nông', 'Vì bạn bơi giúp'], answer: 0, explain_vi: '每个星期都练习、一直坚持，nên 一个月以后已经会游了 = nhờ kiên trì nên biết bơi.' }
    ]
  },
  {
    id: 'rd-3-017', level: 3, topic: 'gia-dinh',
    title: { vi: 'Sinh nhật của bà', en: "Grandma's Birthday", zh: '奶奶的生日' },
    summary_vi: 'Cả nhà chuẩn bị tiệc sinh nhật cho bà; mỗi người một việc và bà rất cảm động.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 112,
    paragraphs: [{
      sentences: [
        { zh: '这个星期天是奶奶的生日。', py: 'Zhège xīngqītiān shì nǎinai de shēngrì.', vi: 'Chủ nhật này là sinh nhật của bà.', audio: '',
          gloss: [ { w: '星期天', py: 'xīngqītiān', vi: 'chủ nhật' }, { w: '奶奶', py: 'nǎinai', vi: 'bà nội' }, { w: '生日', py: 'shēngrì', vi: 'sinh nhật' } ] },
        { zh: '爸爸妈妈打算给她好好过一个生日。', py: 'Bàba māma dǎsuàn gěi tā hǎohāo guò yí ge shēngrì.', vi: 'Bố mẹ dự định tổ chức cho bà một sinh nhật thật vui.', audio: '',
          gloss: [ { w: '打算', py: 'dǎsuàn', vi: 'dự định' }, { w: '好好', py: 'hǎohāo', vi: 'thật tốt, cho ra trò' }, { w: '过生日', py: 'guò shēngrì', vi: 'đón/tổ chức sinh nhật' } ] },
        { zh: '妈妈负责做菜，爸爸负责买很多好吃的。', py: 'Māma fùzé zuò cài, bàba fùzé mǎi hěn duō hǎochī de.', vi: 'Mẹ phụ trách nấu ăn, bố phụ trách mua nhiều đồ ngon.', audio: '',
          gloss: [ { w: '负责', py: 'fùzé', vi: 'phụ trách' }, { w: '做菜', py: 'zuò cài', vi: 'nấu ăn' }, { w: '好吃的', py: 'hǎochī de', vi: 'đồ ăn ngon' } ] },
        { zh: '小明把房间整理得干干净净。', py: 'Xiǎo Míng bǎ fángjiān zhěnglǐ de gāngānjìngjìng.', vi: 'Tiểu Minh dọn căn phòng sạch sẽ tinh tươm.', audio: '',
          gloss: [ { w: '把', py: 'bǎ', vi: '(đem)' }, { w: '整理', py: 'zhěnglǐ', vi: 'dọn dẹp, sắp xếp' }, { w: '干干净净', py: 'gāngānjìngjìng', vi: 'sạch sẽ tinh tươm' } ] }
      ]
    }, {
      sentences: [
        { zh: '晚上，全家人坐在一起吃饭。', py: 'Wǎnshang, quán jiā rén zuò zài yìqǐ chīfàn.', vi: 'Buổi tối, cả nhà ngồi cùng nhau ăn cơm.', audio: '',
          gloss: [ { w: '全家人', py: 'quán jiā rén', vi: 'cả nhà' }, { w: '坐在一起', py: 'zuò zài yìqǐ', vi: 'ngồi cùng nhau' } ] },
        { zh: '小明对奶奶说：“祝您身体健康！”', py: 'Xiǎo Míng duì nǎinai shuō: “Zhù nín shēntǐ jiànkāng!”', vi: 'Tiểu Minh nói với bà: “Chúc bà sức khỏe!”', audio: '',
          gloss: [ { w: '祝', py: 'zhù', vi: 'chúc' }, { w: '您', py: 'nín', vi: 'ngài/bà (kính)' }, { w: '身体健康', py: 'shēntǐ jiànkāng', vi: 'sức khỏe dồi dào' } ] },
        { zh: '奶奶听了非常高兴，心里很温暖。', py: 'Nǎinai tīng le fēicháng gāoxìng, xīn lǐ hěn wēnnuǎn.', vi: 'Bà nghe xong rất vui, trong lòng thấy thật ấm áp.', audio: '',
          gloss: [ { w: '高兴', py: 'gāoxìng', vi: 'vui' }, { w: '心里', py: 'xīn lǐ', vi: 'trong lòng' }, { w: '温暖', py: 'wēnnuǎn', vi: 'ấm áp' } ] },
        { zh: '她说：“有你们在，我就很幸福。”', py: 'Tā shuō: “Yǒu nǐmen zài, wǒ jiù hěn xìngfú.”', vi: 'Bà nói: “Có các con ở đây, bà thấy thật hạnh phúc.”', audio: '',
          gloss: [ { w: '有你们在', py: 'yǒu nǐmen zài', vi: 'có các con ở đây' }, { w: '幸福', py: 'xìngfú', vi: 'hạnh phúc' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Cả nhà dự định làm gì cho bà?', en: 'What does the family plan for grandma?' }, options: ['Tổ chức một sinh nhật thật vui', 'Một chuyến đi xa', 'Một cái máy tính', 'Một bộ phim'], answer: 0, explain_vi: '打算给她好好过一个生日 = tổ chức cho bà một sinh nhật thật vui.' },
      { q: { vi: 'Tiểu Minh phụ trách việc gì?', en: 'What is Xiao Ming in charge of?' }, options: ['Dọn dẹp phòng', 'Mua đồ ngon', 'Nấu ăn', 'Mua hoa'], answer: 0, explain_vi: '把房间整理得干干净净 = Tiểu Minh dọn phòng sạch sẽ.' },
      { q: { vi: 'Vì sao bà cảm động?', en: 'Why is grandma moved?' }, options: ['Vì có cả nhà bên cạnh', 'Vì được nhiều tiền', 'Vì trời đẹp', 'Vì được nghỉ ngơi'], answer: 0, explain_vi: '有你们在，我就很幸福 = có các con ở đây bà thấy hạnh phúc.' }
    ]
  },
  {
    id: 'rd-3-018', level: 3, topic: 'di-chuyen',
    title: { vi: 'Lần đầu đi tàu một mình', en: 'First Train Ride Alone', zh: '第一次自己坐火车' },
    summary_vi: 'Tiểu Đông lần đầu đi tàu một mình về quê; bạn ấy cẩn thận xem vé, tìm chỗ ngồi và đến nơi an toàn.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 115,
    paragraphs: [{
      sentences: [
        { zh: '放假了，小东要自己坐火车去爷爷家。', py: 'Fàngjià le, Xiǎo Dōng yào zìjǐ zuò huǒchē qù yéye jiā.', vi: 'Được nghỉ rồi, Tiểu Đông phải tự đi tàu về nhà ông.', audio: '',
          gloss: [ { w: '放假', py: 'fàngjià', vi: 'nghỉ (lễ/hè)' }, { w: '坐火车', py: 'zuò huǒchē', vi: 'đi tàu hỏa' }, { w: '爷爷', py: 'yéye', vi: 'ông nội' } ] },
        { zh: '这是他第一次一个人出门。', py: 'Zhè shì tā dì yī cì yí ge rén chūmén.', vi: 'Đây là lần đầu tiên bạn ấy đi ra ngoài một mình.', audio: '',
          gloss: [ { w: '第一次', py: 'dì yī cì', vi: 'lần đầu tiên' }, { w: '一个人', py: 'yí ge rén', vi: 'một mình' }, { w: '出门', py: 'chūmén', vi: 'ra ngoài' } ] },
        { zh: '出发以前，妈妈帮他检查了车票和东西。', py: 'Chūfā yǐqián, māma bāng tā jiǎnchá le chēpiào hé dōngxi.', vi: 'Trước khi khởi hành, mẹ giúp bạn ấy kiểm tra vé và đồ đạc.', audio: '',
          gloss: [ { w: '出发以前', py: 'chūfā yǐqián', vi: 'trước khi khởi hành' }, { w: '检查', py: 'jiǎnchá', vi: 'kiểm tra' }, { w: '车票', py: 'chēpiào', vi: 'vé xe/tàu' } ] },
        { zh: '她说：“到了以后，记得给我打电话。”', py: 'Tā shuō: “Dào le yǐhòu, jìde gěi wǒ dǎ diànhuà.”', vi: 'Mẹ nói: “Đến nơi rồi nhớ gọi điện cho mẹ.”', audio: '',
          gloss: [ { w: '到了以后', py: 'dào le yǐhòu', vi: 'sau khi đến nơi' }, { w: '记得', py: 'jìde', vi: 'nhớ' }, { w: '打电话', py: 'dǎ diànhuà', vi: 'gọi điện' } ] }
      ]
    }, {
      sentences: [
        { zh: '上了火车，小东认真地找自己的座位。', py: 'Shàng le huǒchē, Xiǎo Dōng rènzhēn de zhǎo zìjǐ de zuòwèi.', vi: 'Lên tàu, Tiểu Đông cẩn thận tìm chỗ ngồi của mình.', audio: '',
          gloss: [ { w: '上了火车', py: 'shàng le huǒchē', vi: 'lên tàu' }, { w: '认真地', py: 'rènzhēn de', vi: 'một cách cẩn thận' }, { w: '座位', py: 'zuòwèi', vi: 'chỗ ngồi' } ] },
        { zh: '座位旁边坐着一位和气的客人。', py: 'Zuòwèi pángbiān zuò zhe yí wèi héqi de kèrén.', vi: 'Bên cạnh chỗ ngồi có một vị khách hiền hòa.', audio: '',
          gloss: [ { w: '旁边', py: 'pángbiān', vi: 'bên cạnh' }, { w: '和气', py: 'héqi', vi: 'hiền hòa, hòa nhã' }, { w: '客人', py: 'kèrén', vi: 'người khách' } ] },
        { zh: '不管有什么问题，他都可以问她。', py: 'Bùguǎn yǒu shénme wèntí, tā dōu kěyǐ wèn tā.', vi: 'Bất kể có vấn đề gì, bạn ấy đều có thể hỏi cô ấy.', audio: '',
          gloss: [ { w: '不管…都', py: 'bùguǎn…dōu', vi: 'bất kể…đều' }, { w: '有问题', py: 'yǒu wèntí', vi: 'có vấn đề' }, { w: '问', py: 'wèn', vi: 'hỏi' } ] },
        { zh: '三个小时以后，他平平安安地到了。', py: 'Sān ge xiǎoshí yǐhòu, tā píngpíng-ānān de dào le.', vi: 'Ba tiếng sau, bạn ấy đến nơi bình an.', audio: '',
          gloss: [ { w: '三个小时以后', py: 'sān ge xiǎoshí yǐhòu', vi: 'ba tiếng sau' }, { w: '平平安安', py: 'píngpíng-ānān', vi: 'bình an vô sự' }, { w: '到了', py: 'dào le', vi: 'đến nơi' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Tiểu Đông đi tàu về đâu?', en: 'Where does Xiao Dong take the train to?' }, options: ['Nhà ông nội', 'Trường học', 'Bệnh viện', 'Bờ biển'], answer: 0, explain_vi: '坐火车去爷爷家 = đi tàu về nhà ông nội.' },
      { q: { vi: 'Trước khi đi, mẹ làm gì giúp bạn ấy?', en: 'What does mom do to help before the trip?' }, options: ['Kiểm tra vé và đồ đạc', 'Mua tàu mới', 'Nấu cơm', 'Đi cùng'], answer: 0, explain_vi: '帮他检查了车票和东西 = kiểm tra vé và đồ đạc.' },
      { q: { vi: 'Vì sao chuyến đi diễn ra suôn sẻ?', en: 'Why does the trip go smoothly?' }, options: ['Bạn ấy cẩn thận và có người tốt giúp đỡ', 'Vì tàu rất nhanh', 'Vì không có ai trên tàu', 'Vì đường gần'], answer: 0, explain_vi: '认真找座位、có cô和气帮忙 nên 平平安安地到了 = cẩn thận và được giúp nên bình an đến nơi.' }
    ]
  },
  {
    id: 'rd-3-019', level: 3, topic: 'ban-be',
    title: { vi: 'Mượn sách của bạn', en: "Borrowing a Friend's Book", zh: '借同学的书' },
    summary_vi: 'Tiểu Lâm mượn sách của bạn, vô ý làm bẩn một trang và học cách thành thật xin lỗi.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 113,
    paragraphs: [{
      sentences: [
        { zh: '小林想看一本有意思的故事书。', py: 'Xiǎo Lín xiǎng kàn yì běn yǒu yìsi de gùshi shū.', vi: 'Tiểu Lâm muốn đọc một quyển truyện thú vị.', audio: '',
          gloss: [ { w: '有意思', py: 'yǒu yìsi', vi: 'thú vị' }, { w: '故事书', py: 'gùshi shū', vi: 'sách truyện' } ] },
        { zh: '同学小马有这本书，就借给了他。', py: 'Tóngxué Xiǎo Mǎ yǒu zhè běn shū, jiù jiè gěi le tā.', vi: 'Bạn học Tiểu Mã có quyển sách này, liền cho bạn ấy mượn.', audio: '',
          gloss: [ { w: '同学', py: 'tóngxué', vi: 'bạn học' }, { w: '借给', py: 'jiè gěi', vi: 'cho mượn' } ] },
        { zh: '小马说：“你慢慢看，不用着急还。”', py: 'Xiǎo Mǎ shuō: “Nǐ mànmàn kàn, búyòng zháojí huán.”', vi: 'Tiểu Mã nói: “Cậu đọc từ từ, không cần vội trả.”', audio: '',
          gloss: [ { w: '慢慢看', py: 'mànmàn kàn', vi: 'đọc từ từ' }, { w: '不用', py: 'búyòng', vi: 'không cần' }, { w: '还', py: 'huán', vi: 'trả lại' } ] },
        { zh: '可是有一天，小林不小心把一页弄脏了。', py: 'Kěshì yǒu yì tiān, Xiǎo Lín bù xiǎoxīn bǎ yí yè nòng zāng le.', vi: 'Nhưng một hôm, Tiểu Lâm vô ý làm bẩn một trang.', audio: '',
          gloss: [ { w: '不小心', py: 'bù xiǎoxīn', vi: 'vô ý/lỡ' }, { w: '一页', py: 'yí yè', vi: 'một trang' }, { w: '弄脏', py: 'nòng zāng', vi: 'làm bẩn' } ] }
      ]
    }, {
      sentences: [
        { zh: '他有点担心，怕同学会生气。', py: 'Tā yǒudiǎn dānxīn, pà tóngxué huì shēngqì.', vi: 'Bạn ấy hơi lo, sợ bạn học sẽ giận.', audio: '',
          gloss: [ { w: '担心', py: 'dānxīn', vi: 'lo lắng' }, { w: '怕', py: 'pà', vi: 'sợ' }, { w: '生气', py: 'shēngqì', vi: 'tức giận' } ] },
        { zh: '但是他还是决定告诉小马真话。', py: 'Dànshì tā háishi juédìng gàosu Xiǎo Mǎ zhēn huà.', vi: 'Nhưng bạn ấy vẫn quyết định nói thật với Tiểu Mã.', audio: '',
          gloss: [ { w: '还是', py: 'háishi', vi: 'vẫn' }, { w: '真话', py: 'zhēn huà', vi: 'lời thật' } ] },
        { zh: '小林说：“对不起，我把你的书弄脏了。”', py: 'Xiǎo Lín shuō: “Duìbuqǐ, wǒ bǎ nǐ de shū nòng zāng le.”', vi: 'Tiểu Lâm nói: “Xin lỗi, mình làm bẩn sách của cậu rồi.”', audio: '',
          gloss: [ { w: '对不起', py: 'duìbuqǐ', vi: 'xin lỗi' }, { w: '把', py: 'bǎ', vi: '(đem)' }, { w: '弄脏', py: 'nòng zāng', vi: 'làm bẩn' } ] },
        { zh: '小马笑着说：“没关系，你能告诉我，我很高兴。”', py: 'Xiǎo Mǎ xiào zhe shuō: “Méi guānxi, nǐ néng gàosu wǒ, wǒ hěn gāoxìng.”', vi: 'Tiểu Mã cười nói: “Không sao, cậu nói cho mình biết là mình vui rồi.”', audio: '',
          gloss: [ { w: '没关系', py: 'méi guānxi', vi: 'không sao' }, { w: '告诉', py: 'gàosu', vi: 'nói cho biết' }, { w: '高兴', py: 'gāoxìng', vi: 'vui' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Tiểu Lâm mượn gì của Tiểu Mã?', en: 'What does Xiao Lin borrow from Xiao Ma?' }, options: ['Một quyển truyện', 'Một cái áo', 'Một cái bút', 'Một chiếc xe'], answer: 0, explain_vi: '想看故事书，小马就借给了他 = mượn quyển truyện.' },
      { q: { vi: 'Chuyện gì xảy ra với quyển sách?', en: 'What happens to the book?' }, options: ['Một trang bị làm bẩn', 'Bị mất', 'Bị rách hết', 'Không sao cả'], answer: 0, explain_vi: '不小心把一页弄脏了 = vô ý làm bẩn một trang.' },
      { q: { vi: 'Vì sao Tiểu Mã không giận?', en: 'Why is Xiao Ma not angry?' }, options: ['Vì Tiểu Lâm thành thật nói ra', 'Vì sách cũ', 'Vì không thích sách', 'Vì có sách khác'], answer: 0, explain_vi: '你能告诉我，我很高兴 = vì Tiểu Lâm thành thật nói ra nên Tiểu Mã vui.' }
    ]
  },
  {
    id: 'rd-3-020', level: 3, topic: 'doi-song',
    title: { vi: 'Trồng hoa nhỏ', en: 'Growing Little Flowers', zh: '种花' },
    summary_vi: 'Tiểu Mỹ trồng vài bông hoa nhỏ, chăm sóc mỗi ngày và vui khi hoa nở.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 109,
    paragraphs: [{
      sentences: [
        { zh: '小美在书上看到很多漂亮的花。', py: 'Xiǎo Měi zài shū shang kàndào hěn duō piàoliang de huā.', vi: 'Tiểu Mỹ nhìn thấy nhiều bông hoa đẹp trong sách.', audio: '',
          gloss: [ { w: '看到', py: 'kàndào', vi: 'nhìn thấy' }, { w: '漂亮', py: 'piàoliang', vi: 'đẹp' }, { w: '花', py: 'huā', vi: 'hoa' } ] },
        { zh: '她也想自己种一些花。', py: 'Tā yě xiǎng zìjǐ zhòng yìxiē huā.', vi: 'Bạn ấy cũng muốn tự trồng vài bông hoa.', audio: '',
          gloss: [ { w: '自己', py: 'zìjǐ', vi: 'tự mình' }, { w: '种', py: 'zhòng', vi: 'trồng' }, { w: '一些', py: 'yìxiē', vi: 'vài/một ít' } ] },
        { zh: '妈妈给她买了一些花，放在房间里。', py: 'Māma gěi tā mǎi le yìxiē huā, fàng zài fángjiān lǐ.', vi: 'Mẹ mua cho bạn ấy vài bông hoa, đặt trong phòng.', audio: '',
          gloss: [ { w: '一些花', py: 'yìxiē huā', vi: 'vài bông hoa' }, { w: '放在', py: 'fàng zài', vi: 'đặt ở' }, { w: '房间里', py: 'fángjiān lǐ', vi: 'trong phòng' } ] },
        { zh: '因为每天都有太阳，所以花长得很快。', py: 'Yīnwèi měitiān dōu yǒu tàiyáng, suǒyǐ huā zhǎng de hěn kuài.', vi: 'Vì mỗi ngày đều có nắng, nên hoa lớn rất nhanh.', audio: '',
          gloss: [ { w: '因为…所以', py: 'yīnwèi…suǒyǐ', vi: 'vì…nên' }, { w: '太阳', py: 'tàiyáng', vi: 'mặt trời/nắng' }, { w: '长得很快', py: 'zhǎng de hěn kuài', vi: 'lớn rất nhanh' } ] }
      ]
    }, {
      sentences: [
        { zh: '小美每天早上都照顾这些花，给它们一些水。', py: 'Xiǎo Měi měitiān zǎoshang dōu zhàogù zhèxiē huā, gěi tāmen yìxiē shuǐ.', vi: 'Mỗi sáng Tiểu Mỹ đều chăm sóc những bông hoa, cho chúng một ít nước.', audio: '',
          gloss: [ { w: '每天早上', py: 'měitiān zǎoshang', vi: 'mỗi sáng' }, { w: '照顾', py: 'zhàogù', vi: 'chăm sóc' }, { w: '给…一些水', py: 'gěi…yìxiē shuǐ', vi: 'cho… một ít nước' } ] },
        { zh: '虽然事情很小，但是她做得很认真。', py: 'Suīrán shìqing hěn xiǎo, dànshì tā zuò de hěn rènzhēn.', vi: 'Tuy việc rất nhỏ, nhưng bạn ấy làm rất nghiêm túc.', audio: '',
          gloss: [ { w: '虽然…但是', py: 'suīrán…dànshì', vi: 'tuy…nhưng' }, { w: '事情', py: 'shìqing', vi: 'việc' }, { w: '认真', py: 'rènzhēn', vi: 'nghiêm túc' } ] },
        { zh: '半个月以后，花开了，又红又香。', py: 'Bàn ge yuè yǐhòu, huā kāi le, yòu hóng yòu xiāng.', vi: 'Nửa tháng sau, hoa nở, vừa đỏ vừa thơm.', audio: '',
          gloss: [ { w: '半个月以后', py: 'bàn ge yuè yǐhòu', vi: 'nửa tháng sau' }, { w: '花开了', py: 'huā kāi le', vi: 'hoa nở' }, { w: '又红又香', py: 'yòu hóng yòu xiāng', vi: 'vừa đỏ vừa thơm' } ] },
        { zh: '看着这些花，小美心里很开心。', py: 'Kàn zhe zhèxiē huā, Xiǎo Měi xīn lǐ hěn kāixīn.', vi: 'Nhìn những bông hoa này, lòng Tiểu Mỹ rất vui.', audio: '',
          gloss: [ { w: '看着', py: 'kàn zhe', vi: 'đang nhìn' }, { w: '这些', py: 'zhèxiē', vi: 'những…này' }, { w: '开心', py: 'kāixīn', vi: 'vui vẻ' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Mẹ mua gì cho Tiểu Mỹ?', en: 'What does mom buy for Xiao Mei?' }, options: ['Vài bông hoa', 'Một quyển sách', 'Một cái cặp', 'Một con mèo'], answer: 0, explain_vi: '买了一些花 = mua vài bông hoa.' },
      { q: { vi: 'Vì sao hoa lớn nhanh?', en: 'Why do the flowers grow fast?' }, options: ['Vì mỗi ngày đều có nắng', 'Vì có nhiều mưa', 'Vì chậu to', 'Vì bón nhiều'], answer: 0, explain_vi: '因为每天都有太阳 = vì mỗi ngày đều có nắng.' },
      { q: { vi: 'Nửa tháng sau điều gì xảy ra?', en: 'What happens after half a month?' }, options: ['Hoa nở, vừa đỏ vừa thơm', 'Hoa héo', 'Hoa bị mất', 'Không có gì đổi'], answer: 0, explain_vi: '花开了，又红又香 = hoa nở, vừa đỏ vừa thơm.' }
    ]
  }
];
