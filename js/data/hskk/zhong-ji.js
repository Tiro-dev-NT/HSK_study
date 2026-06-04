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
