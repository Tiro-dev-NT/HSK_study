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
  }
];
