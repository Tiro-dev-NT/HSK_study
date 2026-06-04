// ═══════════════════════════════════════════════════════════════════════
// HSKK TRUNG CẤP (中级) — Ngân hàng đề thi nói (Phase Y)
// Phủ ~900 từ HSK 1-4. Theo đúng format kỳ thi HSKK 中级:
//   第一部分 听后重复  (repeat)  — nghe & lặp lại câu DÀI    → đề thi rút 10
//   第二部分 看图说话  (picture) — xem 2 tranh rồi kể/miêu tả → đề thi rút 2
//   第三部分 回答问题  (open)    — đọc đề & nói nêu quan điểm  → đề thi rút 2
//
// var (KHÔNG ES module) — file nhúng qua <script> trong index.html.
// part1: { id, zh, py, vi } — `zh` làm refText chấm phát âm (grade thật).
// part2: { id, level, part, topic, topicVi, imgs:[a,b], keywords:[{h,py,vi}],
//          outline:[...], sampleAnswer } — practice-no-grade (account chưa có
//          spontaneous speech). CHỈ thêm đề có đủ 2 file WebP tồn tại.
// part3: { id, zh, py, vi, hint } — câu hỏi nêu ý kiến, practice-no-grade.
//
// ⚠️ Nội dung tự soạn, vocab HSK 1-4, KHÔNG yếu tố chính trị (HARD RULE app).
// ═══════════════════════════════════════════════════════════════════════

var HSKK_ZHONGJI = {
  meta: {
    level: 'zhong',
    name: 'HSKK Trung cấp',
    durationSec: 21 * 60,         // tổng thời gian thi (~21 phút)
    // Số câu rút mỗi phần khi vào thi thật (đúng cấu trúc đề chính thức 中级)
    plan: { repeat: 10, picture: 2, open: 2 }
  },

  // ── 第一部分 · 听后重复 (nghe & lặp lại nguyên câu — DÀI/khó hơn 初级) ──
  part1: [
    { id: 'zr01', zh: '这家餐厅的菜又便宜又好吃，我们经常来这里吃饭。',
      py: 'Zhè jiā cāntīng de cài yòu piányi yòu hǎochī, wǒmen jīngcháng lái zhèlǐ chīfàn.',
      vi: 'Món ăn nhà hàng này vừa rẻ vừa ngon, chúng tôi thường đến đây ăn cơm.' },
    { id: 'zr02', zh: '上个周末我和家人一起去公园散步，天气特别舒服。',
      py: 'Shàng ge zhōumò wǒ hé jiārén yìqǐ qù gōngyuán sànbù, tiānqì tèbié shūfu.',
      vi: 'Cuối tuần trước tôi cùng người nhà đi dạo công viên, thời tiết rất dễ chịu.' },
    { id: 'zr03', zh: '因为今天下大雨，所以我决定坐出租车去公司。',
      py: 'Yīnwèi jīntiān xià dàyǔ, suǒyǐ wǒ juédìng zuò chūzūchē qù gōngsī.',
      vi: 'Vì hôm nay mưa to, nên tôi quyết định đi taxi đến công ty.' },
    { id: 'zr04', zh: '学习汉语虽然有点儿难，但是我觉得非常有意思。',
      py: 'Xuéxí Hànyǔ suīrán yǒudiǎnr nán, dànshì wǒ juéde fēicháng yǒu yìsi.',
      vi: 'Học tiếng Trung tuy hơi khó, nhưng tôi thấy rất thú vị.' },
    { id: 'zr05', zh: '他每天早上都会先跑步，然后再吃早饭去上班。',
      py: 'Tā měi tiān zǎoshang dōu huì xiān pǎobù, ránhòu zài chī zǎofàn qù shàngbān.',
      vi: 'Mỗi sáng anh ấy đều chạy bộ trước, rồi mới ăn sáng đi làm.' },
    { id: 'zr06', zh: '这部电影我已经看过两遍了，故事真的很感人。',
      py: 'Zhè bù diànyǐng wǒ yǐjīng kàn guò liǎng biàn le, gùshi zhēn de hěn gǎnrén.',
      vi: 'Bộ phim này tôi đã xem hai lần rồi, câu chuyện thật sự rất cảm động.' },
    { id: 'zr07', zh: '如果明天不忙的话，我想约朋友一起去爬山。',
      py: 'Rúguǒ míngtiān bù máng de huà, wǒ xiǎng yuē péngyou yìqǐ qù páshān.',
      vi: 'Nếu ngày mai không bận, tôi muốn hẹn bạn cùng đi leo núi.' },
    { id: 'zr08', zh: '我打算下个月去中国旅游，顺便练习一下口语。',
      py: 'Wǒ dǎsuàn xià ge yuè qù Zhōngguó lǚyóu, shùnbiàn liànxí yíxià kǒuyǔ.',
      vi: 'Tôi dự định tháng sau đi du lịch Trung Quốc, tiện thể luyện khẩu ngữ.' },
    { id: 'zr09', zh: '医生告诉我要多喝水、多休息，身体才会好得快。',
      py: 'Yīshēng gàosu wǒ yào duō hē shuǐ, duō xiūxi, shēntǐ cái huì hǎo de kuài.',
      vi: 'Bác sĩ bảo tôi phải uống nhiều nước, nghỉ ngơi nhiều thì cơ thể mới mau khỏe.' },
    { id: 'zr10', zh: '这次考试我准备了很长时间，希望能取得好成绩。',
      py: 'Zhè cì kǎoshì wǒ zhǔnbèi le hěn cháng shíjiān, xīwàng néng qǔdé hǎo chéngjì.',
      vi: 'Kỳ thi lần này tôi đã chuẩn bị rất lâu, hy vọng đạt kết quả tốt.' },
    { id: 'zr11', zh: '我家附近新开了一家超市，买东西比以前方便多了。',
      py: 'Wǒ jiā fùjìn xīn kāi le yì jiā chāoshì, mǎi dōngxi bǐ yǐqián fāngbiàn duō le.',
      vi: 'Gần nhà tôi mới mở một siêu thị, mua đồ tiện hơn trước nhiều.' },
    { id: 'zr12', zh: '弟弟对画画很感兴趣，他的房间里挂满了自己的作品。',
      py: 'Dìdi duì huàhuà hěn gǎn xìngqù, tā de fángjiān lǐ guà mǎn le zìjǐ de zuòpǐn.',
      vi: 'Em trai rất thích vẽ, trong phòng treo đầy tác phẩm của mình.' },
    { id: 'zr13', zh: '虽然工作很忙，但她还是坚持每天看半个小时的书。',
      py: 'Suīrán gōngzuò hěn máng, dàn tā háishi jiānchí měi tiān kàn bàn ge xiǎoshí de shū.',
      vi: 'Tuy công việc bận rộn, nhưng cô ấy vẫn kiên trì đọc sách nửa tiếng mỗi ngày.' },
    { id: 'zr14', zh: '我们公司离地铁站很近，所以上班一点儿都不麻烦。',
      py: 'Wǒmen gōngsī lí dìtiězhàn hěn jìn, suǒyǐ shàngbān yìdiǎnr dōu bù máfan.',
      vi: 'Công ty chúng tôi gần ga tàu điện ngầm, nên đi làm chẳng phiền chút nào.' },
    { id: 'zr15', zh: '昨天的会议开得太长了，结束的时候已经晚上八点了。',
      py: 'Zuótiān de huìyì kāi de tài cháng le, jiéshù de shíhou yǐjīng wǎnshang bā diǎn le.',
      vi: 'Cuộc họp hôm qua kéo dài quá, lúc kết thúc đã là tám giờ tối.' },
    { id: 'zr16', zh: '多跟中国朋友聊天，是提高汉语水平最好的办法之一。',
      py: 'Duō gēn Zhōngguó péngyou liáotiān, shì tígāo Hànyǔ shuǐpíng zuì hǎo de bànfǎ zhī yī.',
      vi: 'Trò chuyện nhiều với bạn Trung Quốc là một trong những cách tốt nhất để nâng cao trình độ tiếng Trung.' }
  ],

  // ── 第二部分 · 看图说话 (xem 2 tranh rồi kể thành đoạn) ───────────────
  // CHỈ thêm đề có đủ 2 file WebP trong assets/hskk/zhongji/
  part2: [
    {
      id: 'zhongji_kt_01', level: 'zhong', part: 2,
      topic: '生日礼物', topicVi: 'Tặng quà sinh nhật',
      imgs: ['assets/hskk/zhongji/kt_01_a.webp', 'assets/hskk/zhongji/kt_01_b.webp'],
      keywords: [
        { h: '生日', py: 'shēngrì', vi: 'sinh nhật' },
        { h: '礼物', py: 'lǐwù', vi: 'quà tặng' },
        { h: '惊喜', py: 'jīngxǐ', vi: 'bất ngờ vui' },
        { h: '打开', py: 'dǎkāi', vi: 'mở ra' },
        { h: '高兴', py: 'gāoxìng', vi: 'vui mừng' }
      ],
      outline: [
        '介绍场景：两个朋友在家',
        '发生了什么：朋友送来礼物和蛋糕',
        '当时的感受：收到礼物很惊喜',
        '结果：打开礼物，两个人都很开心'
      ],
      sampleAnswer:
        '这两张图片讲的是一个生日惊喜的故事。' +
        '第一张图中，一位年轻女士坐在桌子旁边，她的好朋友拿着礼物和生日蛋糕走进来，她感到非常惊喜。' +
        '第二张图中，她正在高兴地打开礼物，包装纸散落在桌上。' +
        '她的朋友站在旁边，看着她开心地笑着。' +
        '她们都觉得这个生日非常难忘，友谊真的很重要。'
    },
    {
      id: 'zhongji_kt_02', level: 'zhong', part: 2,
      topic: '同学聚会', topicVi: 'Họp lớp gặp lại',
      imgs: ['assets/hskk/zhongji/kt_02_a.webp', 'assets/hskk/zhongji/kt_02_b.webp'],
      keywords: [
        { h: '聚会', py: 'jùhuì', vi: 'họp mặt' },
        { h: '同学', py: 'tóngxué', vi: 'bạn học' },
        { h: '拥抱', py: 'yōngbào', vi: 'ôm nhau' },
        { h: '聊天', py: 'liáotiān', vi: 'trò chuyện' },
        { h: '回忆', py: 'huíyì', vi: 'hồi ức' }
      ],
      outline: [
        '场景：几个老同学多年以后再次见面',
        '见面：他们高兴地握手、拥抱',
        '活动：坐在一起吃饭，聊以前的事',
        '感受：友谊一直没变，非常开心'
      ],
      sampleAnswer:
        '这两张图片讲的是一次同学聚会。' +
        '第一张图里，几位多年没见的老同学在饭店门口又见面了，他们高兴得又握手又拥抱。' +
        '第二张图里，大家坐在一起，一边吃饭一边聊天，回忆以前在学校发生的有趣的事情。' +
        '每个人脸上都带着笑容，气氛非常热闹。' +
        '我觉得不管过了多少年，老同学之间的友谊都很珍贵，能再见面真让人幸福。'
    },
    {
      id: 'zhongji_kt_03', level: 'zhong', part: 2,
      topic: '逛超市', topicVi: 'Đi siêu thị mua sắm',
      imgs: ['assets/hskk/zhongji/kt_03_a.webp', 'assets/hskk/zhongji/kt_03_b.webp'],
      keywords: [
        { h: '超市', py: 'chāoshì', vi: 'siêu thị' },
        { h: '购物车', py: 'gòuwùchē', vi: 'xe đẩy hàng' },
        { h: '挑选', py: 'tiāoxuǎn', vi: 'lựa chọn' },
        { h: '付钱', py: 'fùqián', vi: 'trả tiền' },
        { h: '方便', py: 'fāngbiàn', vi: 'tiện lợi' }
      ],
      outline: [
        '场景：周末去超市买东西',
        '挑选：推着购物车在货架前挑选商品',
        '结账：把东西放在收银台付钱',
        '感受：买齐了需要的东西，很方便'
      ],
      sampleAnswer:
        '这两张图片讲的是周末去超市购物的故事。' +
        '第一张图里，一位女士推着购物车，在货架前认真地挑选自己需要的东西。' +
        '第二张图里，她来到收银台，把买好的东西一件一件放上去，准备付钱。' +
        '现在超市里的东西很多，买起来又方便又省时间。' +
        '我觉得去超市以前先列好购物清单，可以买得更快，也不会忘记要买的东西。'
    },
    {
      id: 'zhongji_kt_04', level: 'zhong', part: 2,
      topic: '机场接人', topicVi: 'Đón người ở sân bay',
      imgs: ['assets/hskk/zhongji/kt_04_a.webp', 'assets/hskk/zhongji/kt_04_b.webp'],
      keywords: [
        { h: '机场', py: 'jīchǎng', vi: 'sân bay' },
        { h: '接', py: 'jiē', vi: 'đón' },
        { h: '行李', py: 'xíngli', vi: 'hành lý' },
        { h: '等', py: 'děng', vi: 'chờ' },
        { h: '拥抱', py: 'yōngbào', vi: 'ôm nhau' }
      ],
      outline: [
        '场景：在机场等着接朋友',
        '等待：站在出口看着到达的信息',
        '见面：朋友出来了，两人高兴地拥抱',
        '结果：帮朋友拿行李，一起离开'
      ],
      sampleAnswer:
        '这两张图片讲的是去机场接人的故事。' +
        '第一张图里，一个人站在机场的出口，一边看着到达的信息，一边等着朋友出来。' +
        '第二张图里，朋友终于走出来了，两个人高兴地拥抱在一起。' +
        '然后他帮朋友提着行李，一起走出机场。' +
        '我觉得去机场接朋友是一件很温暖的事，能让刚下飞机的人感到自己不孤单。'
    },
    {
      id: 'zhongji_kt_05', level: 'zhong', part: 2,
      topic: '看病', topicVi: 'Đi khám bệnh',
      imgs: ['assets/hskk/zhongji/kt_05_a.webp', 'assets/hskk/zhongji/kt_05_b.webp'],
      keywords: [
        { h: '看病', py: 'kànbìng', vi: 'khám bệnh' },
        { h: '医生', py: 'yīshēng', vi: 'bác sĩ' },
        { h: '难受', py: 'nánshòu', vi: 'khó chịu' },
        { h: '检查', py: 'jiǎnchá', vi: 'kiểm tra' },
        { h: '吃药', py: 'chīyào', vi: 'uống thuốc' }
      ],
      outline: [
        '场景：身体不舒服，去医院看病',
        '描述：病人告诉医生自己哪里难受',
        '检查：医生认真检查，然后开药',
        '结果：拿到药，医生提醒按时吃'
      ],
      sampleAnswer:
        '这两张图片讲的是去医院看病的故事。' +
        '第一张图里，一位女士坐在医生旁边，用手摸着喉咙，正在告诉医生自己哪里不舒服。' +
        '第二张图里，医生给她开好了药，把药递给她，还提醒她要按时吃药、多休息。' +
        '她听了以后觉得放心多了。' +
        '我觉得身体不舒服的时候，应该早点去看医生，不要一直拖着，这样才能好得快。'
    },
    {
      id: 'zhongji_kt_06', level: 'zhong', part: 2,
      topic: '面试', topicVi: 'Phỏng vấn xin việc',
      imgs: ['assets/hskk/zhongji/kt_06_a.webp', 'assets/hskk/zhongji/kt_06_b.webp'],
      keywords: [
        { h: '面试', py: 'miànshì', vi: 'phỏng vấn' },
        { h: '工作', py: 'gōngzuò', vi: 'công việc' },
        { h: '紧张', py: 'jǐnzhāng', vi: 'căng thẳng' },
        { h: '介绍', py: 'jièshào', vi: 'giới thiệu' },
        { h: '握手', py: 'wòshǒu', vi: 'bắt tay' }
      ],
      outline: [
        '场景：去公司参加工作面试',
        '开始：敲门进去，面试官请他坐下',
        '过程：回答问题，介绍自己的经历',
        '结果：面试很顺利，握手告别'
      ],
      sampleAnswer:
        '这两张图片讲的是参加工作面试的故事。' +
        '第一张图里，一位年轻人来到公司，轻轻敲了门，面试官微笑着请他进去坐下。' +
        '第二张图里，他认真地回答问题，向面试官介绍自己的经历，最后两个人高兴地握手。' +
        '虽然面试以前他有点紧张，但是后来表现得越来越好。' +
        '我觉得面试的时候要有信心，把话说清楚，这样才能给别人留下好印象。'
    },
    {
      id: 'zhongji_kt_07', level: 'zhong', part: 2,
      topic: '下雨忘带伞', topicVi: 'Trời mưa quên ô',
      imgs: ['assets/hskk/zhongji/kt_07_a.webp', 'assets/hskk/zhongji/kt_07_b.webp'],
      keywords: [
        { h: '下雨', py: 'xià yǔ', vi: 'trời mưa' },
        { h: '雨伞', py: 'yǔsǎn', vi: 'ô/dù' },
        { h: '忘', py: 'wàng', vi: 'quên' },
        { h: '帮助', py: 'bāngzhù', vi: 'giúp đỡ' },
        { h: '感谢', py: 'gǎnxiè', vi: 'cảm ơn' }
      ],
      outline: [
        '场景：突然下大雨，一个人没带伞',
        '问题：站在门口，被雨挡住，出不去',
        '转折：一位热心人走过来，一起打伞',
        '结果：两人一起往前走，互相感谢'
      ],
      sampleAnswer:
        '这两张图片讲的是一个互相帮助的小故事。' +
        '第一张图里，外面下起了大雨，一个背着书包的男生忘记带伞，只能站在门口，着急地等雨停。' +
        '第二张图里，一位女生走过来，主动和他一起打一把黄色的雨伞，两个人一起往前走。' +
        '男生非常感谢她的帮助，两人一边走一边开心地聊天。' +
        '我觉得在别人有困难的时候伸手帮一把，会让生活变得更温暖。'
    },
    {
      id: 'zhongji_kt_08', level: 'zhong', part: 2,
      topic: '看老照片', topicVi: 'Gia đình xem ảnh cũ',
      imgs: ['assets/hskk/zhongji/kt_08_a.webp', 'assets/hskk/zhongji/kt_08_b.webp'],
      keywords: [
        { h: '照片', py: 'zhàopiàn', vi: 'tấm ảnh' },
        { h: '全家', py: 'quánjiā', vi: 'cả nhà' },
        { h: '回忆', py: 'huíyì', vi: 'hồi ức' },
        { h: '故事', py: 'gùshi', vi: 'câu chuyện' },
        { h: '温暖', py: 'wēnnuǎn', vi: 'ấm áp' }
      ],
      outline: [
        '场景：一家人坐在客厅里一起看老照片',
        '内容：奶奶拿着相册，指着照片',
        '互动：奶奶给孩子们讲过去的故事',
        '感受：全家在一起，气氛温暖'
      ],
      sampleAnswer:
        '这两张图片讲的是一家人一起看老照片的故事。' +
        '第一张图里，全家人坐在客厅的沙发上，一起翻看一本旧相册，每个人都看得很认真。' +
        '第二张图里，奶奶指着其中一张照片，给孙子孙女讲以前发生的故事，孩子们听得很入神。' +
        '看着这些老照片，大家想起了很多温暖的回忆。' +
        '我觉得一家人能这样坐在一起聊天、分享过去，是一件非常幸福的事情。'
    },
    {
      id: 'zhongji_kt_09', level: 'zhong', part: 2,
      topic: '一起复习', topicVi: 'Học nhóm chuẩn bị thi',
      imgs: ['assets/hskk/zhongji/kt_09_a.webp', 'assets/hskk/zhongji/kt_09_b.webp'],
      keywords: [
        { h: '复习', py: 'fùxí', vi: 'ôn tập' },
        { h: '考试', py: 'kǎoshì', vi: 'kỳ thi' },
        { h: '一起', py: 'yìqǐ', vi: 'cùng nhau' },
        { h: '讨论', py: 'tǎolùn', vi: 'thảo luận' },
        { h: '讲解', py: 'jiǎngjiě', vi: 'giảng giải' }
      ],
      outline: [
        '场景：几个同学一起准备考试',
        '学习：大家坐在一起看书、做题',
        '讲解：一个同学在小黑板上给大家讲题',
        '感受：一起学习，进步更快'
      ],
      sampleAnswer:
        '这两张图片讲的是同学们一起复习功课的故事。' +
        '第一张图里，几个同学坐在桌子旁边，桌上放满了书和笔记，大家正在认真地看书、做题。' +
        '第二张图里，其中一个同学站起来，在小黑板上给大家讲解不懂的题目，别的同学一边听一边记。' +
        '遇到不会的问题，大家可以马上一起讨论。' +
        '我觉得和同学一起复习是很好的办法，不但学得快，而且更有意思。'
    },
    {
      id: 'zhongji_kt_10', level: 'zhong', part: 2,
      topic: '搬家', topicVi: 'Chuyển nhà',
      imgs: ['assets/hskk/zhongji/kt_10_a.webp', 'assets/hskk/zhongji/kt_10_b.webp'],
      keywords: [
        { h: '搬家', py: 'bānjiā', vi: 'chuyển nhà' },
        { h: '箱子', py: 'xiāngzi', vi: 'thùng/hộp' },
        { h: '帮忙', py: 'bāngmáng', vi: 'giúp đỡ' },
        { h: '整理', py: 'zhěnglǐ', vi: 'dọn dẹp' },
        { h: '累', py: 'lèi', vi: 'mệt' }
      ],
      outline: [
        '场景：这家人要搬到新家',
        '准备：把东西装进一个个箱子',
        '帮忙：朋友们来帮着搬箱子上车',
        '感受：虽然累，但有朋友帮忙很开心'
      ],
      sampleAnswer:
        '这两张图片讲的是搬家的故事。' +
        '第一张图里，房间里有点乱，一家人正忙着把东西一件一件装进箱子，准备搬到新家去。' +
        '第二张图里，几个朋友过来帮忙，大家一起把重重的箱子搬上车。' +
        '搬家虽然又忙又累，但是因为有朋友的帮助，大家都觉得很温暖。' +
        '我觉得朋友愿意在你需要的时候来帮忙，真的让人很感动，我们也应该这样互相帮助。'
    },
    {
      id: 'zhongji_kt_11', level: 'zhong', part: 2,
      topic: '一起做饭', topicVi: 'Cùng nhau nấu ăn',
      imgs: ['assets/hskk/zhongji/kt_11_a.webp', 'assets/hskk/zhongji/kt_11_b.webp'],
      keywords: [
        { h: '做饭', py: 'zuòfàn', vi: 'nấu ăn' },
        { h: '准备', py: 'zhǔnbèi', vi: 'chuẩn bị' },
        { h: '材料', py: 'cáiliào', vi: 'nguyên liệu' },
        { h: '一起', py: 'yìqǐ', vi: 'cùng nhau' },
        { h: '美味', py: 'měiwèi', vi: 'ngon lành' }
      ],
      outline: [
        '场景：两个人在厨房里一起准备做饭',
        '分工：一个人洗菜切菜，一个人炒菜',
        '完成：把做好的菜端上桌',
        '感受：自己做的饭又干净又好吃'
      ],
      sampleAnswer:
        '这两张图片讲的是两个人一起做饭的故事。' +
        '第一张图里，他们在厨房里忙着准备，一个人在洗菜、切菜，另一个人在旁边炒菜，配合得很好。' +
        '第二张图里，他们把做好的菜一盘一盘端上桌，然后开心地坐下来一起吃饭。' +
        '自己动手做的饭菜不但干净，而且特别香。' +
        '我觉得和家人或者朋友一起做饭、一起吃饭，是一件很温馨、很快乐的事情。'
    },
    {
      id: 'zhongji_kt_12', level: 'zhong', part: 2,
      topic: '看电影', topicVi: 'Đi xem phim',
      imgs: ['assets/hskk/zhongji/kt_12_a.webp', 'assets/hskk/zhongji/kt_12_b.webp'],
      keywords: [
        { h: '电影', py: 'diànyǐng', vi: 'phim' },
        { h: '电影院', py: 'diànyǐngyuàn', vi: 'rạp phim' },
        { h: '买票', py: 'mǎipiào', vi: 'mua vé' },
        { h: '排队', py: 'páiduì', vi: 'xếp hàng' },
        { h: '有意思', py: 'yǒu yìsi', vi: 'thú vị' }
      ],
      outline: [
        '场景：周末和朋友去看电影',
        '准备：在电影院门口排队买票和爆米花',
        '观看：坐在电影院里认真看电影',
        '感受：电影很好看，大家都很开心'
      ],
      sampleAnswer:
        '这两张图片讲的是去看电影的故事。' +
        '第一张图里，电影院门口排着长长的队，大家在买电影票和爆米花，准备进去看电影。' +
        '第二张图里，他们坐在电影院里，一边吃爆米花一边看电影，有的地方很好笑，有的地方很感动。' +
        '这部电影特别有意思，大家看得很认真。' +
        '我觉得周末和朋友一起去看一场电影，是一种很轻松、很快乐的休息方式。'
    },
    {
      id: 'zhongji_kt_13', level: 'zhong', part: 2,
      topic: '旅游拍照', topicVi: 'Du lịch chụp ảnh',
      imgs: ['assets/hskk/zhongji/kt_13_a.webp', 'assets/hskk/zhongji/kt_13_b.webp'],
      keywords: [
        { h: '旅游', py: 'lǚyóu', vi: 'du lịch' },
        { h: '拍照', py: 'pāizhào', vi: 'chụp ảnh' },
        { h: '风景', py: 'fēngjǐng', vi: 'phong cảnh' },
        { h: '漂亮', py: 'piàoliang', vi: 'đẹp' },
        { h: '高兴', py: 'gāoxìng', vi: 'vui' }
      ],
      outline: [
        '场景：和朋友一起出去旅游',
        '拍照：站在有名的地方拍照、自拍',
        '休息：坐下来一起看刚才拍的照片',
        '感受：风景很美，玩得很开心'
      ],
      sampleAnswer:
        '这两张图片讲的是外出旅游的故事。' +
        '第一张图里，两个朋友站在一个有名的地方，举着手机开心地自拍，后面的风景非常漂亮。' +
        '第二张图里，他们走累了，就坐下来休息，一起看刚才拍的照片，越看越高兴。' +
        '这次旅游不但看到了美丽的风景，还留下了很多美好的回忆。' +
        '我觉得旅游可以让人放松心情，也能让朋友之间的感情变得更好。'
    },
    {
      id: 'zhongji_kt_14', level: 'zhong', part: 2,
      topic: '早上锻炼', topicVi: 'Tập thể dục buổi sáng',
      imgs: ['assets/hskk/zhongji/kt_14_a.webp', 'assets/hskk/zhongji/kt_14_b.webp'],
      keywords: [
        { h: '锻炼', py: 'duànliàn', vi: 'rèn luyện' },
        { h: '运动', py: 'yùndòng', vi: 'vận động' },
        { h: '早上', py: 'zǎoshang', vi: 'buổi sáng' },
        { h: '公园', py: 'gōngyuán', vi: 'công viên' },
        { h: '健康', py: 'jiànkāng', vi: 'khỏe mạnh' }
      ],
      outline: [
        '场景：一个人早上去公园锻炼身体',
        '运动：在公园里跑步、做运动',
        '回家：运动以后回家吃早饭',
        '感受：身体舒服，一天都有精神'
      ],
      sampleAnswer:
        '这两张图片讲的是早上锻炼身体的故事。' +
        '第一张图里，天刚亮，一个人来到公园，一边呼吸新鲜空气，一边跑步、做运动。' +
        '第二张图里，他锻炼完回到家，舒舒服服地吃起了早饭，看起来很有精神。' +
        '每天坚持运动，身体会越来越健康。' +
        '我觉得早睡早起、坚持锻炼是很好的习惯，虽然有时候有点累，但是对身体特别有好处。'
    },
    {
      id: 'zhongji_kt_15', level: 'zhong', part: 2,
      topic: '在饭馆吃饭', topicVi: 'Ăn ở nhà hàng',
      imgs: ['assets/hskk/zhongji/kt_15_a.webp', 'assets/hskk/zhongji/kt_15_b.webp'],
      keywords: [
        { h: '饭馆', py: 'fànguǎn', vi: 'quán ăn' },
        { h: '点菜', py: 'diǎncài', vi: 'gọi món' },
        { h: '菜单', py: 'càidān', vi: 'thực đơn' },
        { h: '服务员', py: 'fúwùyuán', vi: 'nhân viên phục vụ' },
        { h: '好吃', py: 'hǎochī', vi: 'ngon' }
      ],
      outline: [
        '场景：一家人去饭馆吃饭',
        '点菜：看着菜单向服务员点菜',
        '上菜：菜一道一道端上来',
        '感受：菜很好吃，大家吃得很开心'
      ],
      sampleAnswer:
        '这两张图片讲的是去饭馆吃饭的故事。' +
        '第一张图里，一家人坐在饭馆里，看着菜单，正在向服务员点自己喜欢吃的菜。' +
        '第二张图里，服务员把做好的菜一盘一盘端上桌，大家拿起筷子，一边吃一边聊天。' +
        '这家饭馆的菜又好吃又干净，大家都很满意。' +
        '我觉得一家人有时间一起出去吃顿饭、说说话，是一件很幸福的事情。'
    },
    {
      id: 'zhongji_kt_16', level: 'zhong', part: 2,
      topic: '修东西', topicVi: 'Sửa đồ trong nhà',
      imgs: ['assets/hskk/zhongji/kt_16_a.webp', 'assets/hskk/zhongji/kt_16_b.webp'],
      keywords: [
        { h: '坏', py: 'huài', vi: 'hỏng' },
        { h: '修', py: 'xiū', vi: 'sửa' },
        { h: '师傅', py: 'shīfu', vi: 'thợ' },
        { h: '打电话', py: 'dǎ diànhuà', vi: 'gọi điện' },
        { h: '满意', py: 'mǎnyì', vi: 'hài lòng' }
      ],
      outline: [
        '场景：家里的水管坏了，一直流水',
        '求助：打电话请师傅来修',
        '修理：师傅来把坏的地方修好',
        '结果：修好了，主人很满意'
      ],
      sampleAnswer:
        '这两张图片讲的是请人修东西的故事。' +
        '第一张图里，厨房的水管突然坏了，水一直往下流，主人很着急，赶紧打电话请师傅来帮忙。' +
        '第二张图里，师傅很快就来了，认真地把坏了的地方修好，主人在旁边看着，非常满意。' +
        '多亏了师傅，问题很快就解决了。' +
        '我觉得遇到自己不会做的事情，找专业的人来帮忙，又快又安全。'
    },
    {
      id: 'zhongji_kt_17', level: 'zhong', part: 2,
      topic: '车站送别', topicVi: 'Tiễn nhau ở ga tàu',
      imgs: ['assets/hskk/zhongji/kt_17_a.webp', 'assets/hskk/zhongji/kt_17_b.webp'],
      keywords: [
        { h: '火车站', py: 'huǒchēzhàn', vi: 'ga tàu' },
        { h: '出发', py: 'chūfā', vi: 'lên đường' },
        { h: '再见', py: 'zàijiàn', vi: 'tạm biệt' },
        { h: '行李', py: 'xíngli', vi: 'hành lý' },
        { h: '接', py: 'jiē', vi: 'đón' }
      ],
      outline: [
        '场景：要坐火车去很远的地方',
        '送别：在火车站和家人说再见',
        '到达：到了以后，那边的人来接',
        '感受：分别有点舍不得，但很快又见面'
      ],
      sampleAnswer:
        '这两张图片讲的是出门远行的故事。' +
        '第一张图里，在火车站的站台上，一位女士拉着行李箱，正和来送她的家人挥手说再见。' +
        '第二张图里，火车到站以后，在那个城市的朋友早就在站台上等着，两个人高兴地拥抱在一起。' +
        '虽然和家人分别有点舍不得，但是想到很快能见到朋友，心里又很温暖。' +
        '我觉得不管走到哪里，有人送、有人接，都是一件很幸福的事。'
    },
    {
      id: 'zhongji_kt_18', level: 'zhong', part: 2,
      topic: '邻居帮忙', topicVi: 'Hàng xóm giúp nhau',
      imgs: ['assets/hskk/zhongji/kt_18_a.webp', 'assets/hskk/zhongji/kt_18_b.webp'],
      keywords: [
        { h: '邻居', py: 'línjū', vi: 'hàng xóm' },
        { h: '借', py: 'jiè', vi: 'mượn' },
        { h: '帮助', py: 'bāngzhù', vi: 'giúp đỡ' },
        { h: '还', py: 'huán', vi: 'trả lại' },
        { h: '谢谢', py: 'xièxie', vi: 'cảm ơn' }
      ],
      outline: [
        '场景：邻居有需要来敲门',
        '求助：向邻居借一样东西',
        '归还：过几天把东西还回来',
        '感受：还带了点小礼物表示感谢'
      ],
      sampleAnswer:
        '这两张图片讲的是邻居之间互相帮助的故事。' +
        '第一张图里，一位邻居来敲门，想借一样家里正好需要的东西，主人很热情地借给了他。' +
        '第二张图里，过了几天，这位邻居把东西还了回来，还带了一些水果表示感谢，两个人笑着聊了几句。' +
        '邻居之间这样互相帮助，让人觉得住在一起很方便、很安心。' +
        '我觉得邻里之间应该多关心、多帮助，这样大家才会住得越来越开心。'
    },
    {
      id: 'zhongji_kt_19', level: 'zhong', part: 2,
      topic: '拾金不昧', topicVi: 'Nhặt được đồ trả lại',
      imgs: ['assets/hskk/zhongji/kt_19_a.webp', 'assets/hskk/zhongji/kt_19_b.webp'],
      keywords: [
        { h: '钱包', py: 'qiánbāo', vi: 'ví tiền' },
        { h: '掉', py: 'diào', vi: 'rơi' },
        { h: '捡到', py: 'jiǎndào', vi: 'nhặt được' },
        { h: '还给', py: 'huángěi', vi: 'trả lại' },
        { h: '感谢', py: 'gǎnxiè', vi: 'cảm ơn' }
      ],
      outline: [
        '场景：一个人走路时不小心把钱包掉在了地上',
        '发现：后面的人看到了，捡了起来',
        '行动：他赶紧追上去，把钱包还给那个人',
        '结果：失主非常感谢，两个人都很高兴'
      ],
      sampleAnswer:
        '这两张图片讲的是一个拾金不昧的小故事。' +
        '第一张图里，一位男士在路上走的时候，不小心把钱包掉在了地上，自己却没有发现。' +
        '第二张图里，后面的一位年轻人看到了，马上把钱包捡起来，跑过去还给那位男士。' +
        '失主非常感动，连声向他表示感谢。' +
        '我觉得这位年轻人很诚实，捡到别人的东西能主动归还，这种好品质值得我们学习。'
    },
    {
      id: 'zhongji_kt_20', level: 'zhong', part: 2,
      topic: '考试成绩', topicVi: 'Nhận kết quả thi tốt',
      imgs: ['assets/hskk/zhongji/kt_20_a.webp', 'assets/hskk/zhongji/kt_20_b.webp'],
      keywords: [
        { h: '成绩', py: 'chéngjì', vi: 'kết quả, điểm số' },
        { h: '考试', py: 'kǎoshì', vi: 'kỳ thi' },
        { h: '通过', py: 'tōngguò', vi: 'vượt qua' },
        { h: '努力', py: 'nǔlì', vi: 'nỗ lực' },
        { h: '父母', py: 'fùmǔ', vi: 'bố mẹ' }
      ],
      outline: [
        '场景：学生用手机查看考试成绩',
        '紧张：看到成绩之前，表情有点担心',
        '高兴：成绩很好，马上跳起来欢呼',
        '分享：把好消息告诉父母，全家都很开心'
      ],
      sampleAnswer:
        '这两张图片讲的是一个学生查看考试成绩的故事。' +
        '第一张图里，一位女学生拿着手机，表情有些紧张，她在等待考试结果。' +
        '第二张图里，她看到成绩非常好，高兴地跳了起来，旁边的父母也一起为她鼓掌庆祝。' +
        '这说明她之前一定付出了很多努力，认真复习才能得到这么好的成绩。' +
        '我觉得努力学习非常重要，成功的时候和家人一起分享真的很幸福。'
    },
    {
      id: 'zhongji_kt_21', level: 'zhong', part: 2,
      topic: '理发', topicVi: 'Cắt tóc đổi kiểu',
      imgs: ['assets/hskk/zhongji/kt_21_a.webp', 'assets/hskk/zhongji/kt_21_b.webp'],
      keywords: [
        { h: '理发', py: 'lǐfà', vi: 'cắt tóc' },
        { h: '头发', py: 'tóufa', vi: 'tóc' },
        { h: '样子', py: 'yàngzi', vi: 'kiểu dáng' },
        { h: '镜子', py: 'jìngzi', vi: 'gương' },
        { h: '满意', py: 'mǎnyì', vi: 'hài lòng' }
      ],
      outline: [
        '场景：去理发店换个新发型',
        '要求：坐在椅子上，指着照片说想要的样子',
        '理发：理发师认真地剪头发',
        '结果：照镜子很满意，理发师也很高兴'
      ],
      sampleAnswer:
        '这两张图片讲的是去理发店剪头发的故事。' +
        '第一张图里，一个人坐在理发店的椅子上，拿着一张照片，告诉理发师自己想要的新发型。' +
        '第二张图里，头发剪好了，他对着镜子看了看，觉得新样子很好看，非常满意，理发师也在旁边开心地笑着。' +
        '换了新发型以后，他整个人看起来精神多了。' +
        '我觉得偶尔换换发型，可以让自己有个好心情，也是一种小小的改变。'
    },
    {
      id: 'zhongji_kt_22', level: 'zhong', part: 2,
      topic: '问路', topicVi: 'Lạc đường hỏi thăm',
      imgs: ['assets/hskk/zhongji/kt_22_a.webp', 'assets/hskk/zhongji/kt_22_b.webp'],
      keywords: [
        { h: '迷路', py: 'mílù', vi: 'lạc đường' },
        { h: '地图', py: 'dìtú', vi: 'bản đồ' },
        { h: '问路', py: 'wènlù', vi: 'hỏi đường' },
        { h: '告诉', py: 'gàosu', vi: 'nói cho biết' },
        { h: '帮助', py: 'bāngzhù', vi: 'giúp đỡ' }
      ],
      outline: [
        '场景：一个人在陌生的地方找不到路',
        '问题：拿着手机看地图，还是有点糊涂',
        '求助：向旁边的人问路',
        '结果：热心人耐心地告诉他怎么走'
      ],
      sampleAnswer:
        '这两张图片讲的是问路的故事。' +
        '第一张图里，一个人来到一个不熟悉的地方，拿着手机看地图，可是还是不知道该往哪边走，看起来有点着急。' +
        '第二张图里，他向旁边的一位当地人问路，那个人很热心，一边指方向，一边耐心地告诉他应该怎么走。' +
        '听完以后，他终于明白了，连声说谢谢。' +
        '我觉得在外面遇到困难的时候，大方地向别人问一问，常常能很快解决问题。'
    },
    {
      id: 'zhongji_kt_23', level: 'zhong', part: 2,
      topic: '收快递', topicVi: 'Nhận bưu kiện',
      imgs: ['assets/hskk/zhongji/kt_23_a.webp', 'assets/hskk/zhongji/kt_23_b.webp'],
      keywords: [
        { h: '快递', py: 'kuàidì', vi: 'chuyển phát nhanh' },
        { h: '包裹', py: 'bāoguǒ', vi: 'bưu kiện' },
        { h: '签收', py: 'qiānshōu', vi: 'ký nhận' },
        { h: '打开', py: 'dǎkāi', vi: 'mở ra' },
        { h: '高兴', py: 'gāoxìng', vi: 'vui' }
      ],
      outline: [
        '场景：网上买的东西到了',
        '送货：快递员上门送包裹',
        '签收：主人签字收下包裹',
        '结果：打开盒子，很满意自己买的东西'
      ],
      sampleAnswer:
        '这两张图片讲的是收快递的故事。' +
        '第一张图里，快递员拿着一个大包裹来敲门，原来是主人在网上买的东西到了。' +
        '第二张图里，主人高兴地签字收下包裹，然后迫不及待地打开盒子，看到里面正是自己想要的东西，非常满意。' +
        '现在网上购物很方便，在家就能收到各种各样的东西。' +
        '我觉得快递员的工作很辛苦，我们收快递的时候应该对他们说一声谢谢。'
    },
    {
      id: 'zhongji_kt_24', level: 'zhong', part: 2,
      topic: '准备聚会', topicVi: 'Chuẩn bị tiệc tại nhà',
      imgs: ['assets/hskk/zhongji/kt_24_a.webp', 'assets/hskk/zhongji/kt_24_b.webp'],
      keywords: [
        { h: '聚会', py: 'jùhuì', vi: 'tiệc/họp mặt' },
        { h: '布置', py: 'bùzhì', vi: 'bày biện' },
        { h: '气球', py: 'qìqiú', vi: 'bóng bay' },
        { h: '客人', py: 'kèrén', vi: 'khách' },
        { h: '热闹', py: 'rènao', vi: 'náo nhiệt' }
      ],
      outline: [
        '场景：在家里准备一个小聚会',
        '准备：打扫房间、挂气球、布置桌子',
        '聚会：客人来了，大家一起照相',
        '感受：气氛很热闹，大家都很开心'
      ],
      sampleAnswer:
        '这两张图片讲的是在家准备聚会的故事。' +
        '第一张图里，主人正忙着布置房间，挂气球、摆桌子，把家里打扫得干干净净，准备欢迎客人。' +
        '第二张图里，客人们都来了，大家站在一起开心地照相，房间里又热闹又温暖。' +
        '为了这次聚会，主人提前做了很多准备。' +
        '我觉得和好朋友聚在一起说说笑笑，是生活中很快乐的时候，这样的聚会让人觉得特别幸福。'
    },
    {
      id: 'zhongji_kt_25', level: 'zhong', part: 2,
      topic: '找座位', topicVi: 'Tìm chỗ ngồi trên tàu',
      imgs: ['assets/hskk/zhongji/kt_25_a.webp', 'assets/hskk/zhongji/kt_25_b.webp'],
      keywords: [
        { h: '座位', py: 'zuòwèi', vi: 'chỗ ngồi' },
        { h: '车票', py: 'chēpiào', vi: 'vé tàu' },
        { h: '号码', py: 'hàomǎ', vi: 'số' },
        { h: '行李', py: 'xíngli', vi: 'hành lý' },
        { h: '旅程', py: 'lǚchéng', vi: 'hành trình' }
      ],
      outline: [
        '场景：上了火车要找自己的座位',
        '寻找：拿着车票，提着行李找座位号',
        '坐下：找到座位，把行李放好坐下来',
        '感受：坐稳以后，准备开始一段旅程'
      ],
      sampleAnswer:
        '这两张图片讲的是在火车上找座位的故事。' +
        '第一张图里，一个人提着行李上了火车，正拿着车票，一边看座位号一边找自己的位子，样子有点忙。' +
        '第二张图里，他终于找到了座位，把行李放好，然后舒舒服服地坐了下来，准备开始一段长长的旅程。' +
        '坐稳以后，他拿出一本书，心情很放松。' +
        '我觉得坐火车出门的时候，提前看清楚自己的车厢和座位号，就能又快又顺利地找到位子。'
    }
  ],

  // ── 第三部分 · 回答问题 (đọc đề, chuẩn bị rồi nêu quan điểm) ──────────
  part3: [
    { id: 'zo01', zh: '你认为学习外语最重要的是什么？',
      py: 'Nǐ rènwéi xuéxí wàiyǔ zuì zhòngyào de shì shénme?',
      vi: 'Bạn cho rằng điều quan trọng nhất khi học ngoại ngữ là gì?',
      hint: 'Phương pháp · kiên trì · luyện tập nhiều' },
    { id: 'zo02', zh: '你觉得年轻人应该多出去和朋友见面，还是多待在家里？请说说你的看法。',
      py: 'Nǐ juéde niánqīngrén yīnggāi duō chūqù hé péngyou jiànmiàn, háishi duō dāi zài jiālǐ? Qǐng shuōshuo nǐ de kànfǎ.',
      vi: 'Bạn thấy người trẻ nên ra ngoài gặp bạn bè nhiều hơn hay ở nhà nhiều hơn? Hãy nêu quan điểm.',
      hint: 'Cân bằng · kết bạn · nghỉ ngơi' },
    { id: 'zo03', zh: '在你看来，住在大城市好还是住在小城市好？为什么？',
      py: 'Zài nǐ kànlái, zhù zài dà chéngshì hǎo háishi zhù zài xiǎo chéngshì hǎo? Wèishénme?',
      vi: 'Theo bạn, sống ở thành phố lớn hay thành phố nhỏ tốt hơn? Vì sao?',
      hint: 'Cơ hội việc làm · nhịp sống · môi trường' },
    { id: 'zo04', zh: '你认为坚持运动对身体健康有哪些好处？',
      py: 'Nǐ rènwéi jiānchí yùndòng duì shēntǐ jiànkāng yǒu nǎxiē hǎochù?',
      vi: 'Bạn cho rằng kiên trì vận động có những lợi ích gì cho sức khỏe?',
      hint: 'Cơ thể · tâm trạng · thói quen' },
    { id: 'zo05', zh: '有人喜欢一个人旅游，有人喜欢和朋友一起旅游，你更喜欢哪一种？',
      py: 'Yǒu rén xǐhuan yí ge rén lǚyóu, yǒu rén xǐhuan hé péngyou yìqǐ lǚyóu, nǐ gèng xǐhuan nǎ yì zhǒng?',
      vi: 'Có người thích du lịch một mình, có người thích đi cùng bạn bè, bạn thích kiểu nào hơn?',
      hint: 'Tự do · an toàn · chia sẻ' },
    { id: 'zo06', zh: '你觉得在网上购物有哪些好处和坏处？',
      py: 'Nǐ juéde zài wǎngshàng gòuwù yǒu nǎxiē hǎochù hé huàichù?',
      vi: 'Bạn thấy mua sắm trên mạng có những ưu điểm và nhược điểm gì?',
      hint: 'Tiện lợi · giá rẻ · chất lượng' }
  ]
};

if (typeof window !== 'undefined') window.HSKK_ZHONGJI = HSKK_ZHONGJI;
