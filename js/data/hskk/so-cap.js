// ═══════════════════════════════════════════════════════════════════════
// HSKK SƠ CẤP — Ngân hàng đề thi nói (Phase Y)
// Phủ ~200 từ HSK 1-2. Theo đúng format kỳ thi HSKK 初级 (27 câu):
//   第一部分 听后重复  (repeat) — nghe & lặp lại câu          → đề thi rút 15
//   第二部分 听后说    (respond) — nghe câu hỏi & trả lời       → đề thi rút 10
//   第三部分 回答问题  (open)    — đọc đề & nói 1 đoạn ngắn      → đề thi rút 2
//
// var (KHÔNG ES module) — file nhúng qua <script> trong index.html.
// Mỗi item: { id, zh, py, vi }. Phần repeat dùng `zh` làm refText chấm phát âm;
// respond/open chấm độ trôi chảy + phát âm (không refText).
//
// ⚠️ Nội dung tự soạn, vocab HSK 1-2, KHÔNG yếu tố chính trị (HARD RULE app).
// ═══════════════════════════════════════════════════════════════════════

var HSKK_SOCAP = {
  meta: {
    level: 'so-cap',
    name: 'HSKK Sơ cấp',
    durationSec: 17 * 60,         // tổng thời gian thi
    // Số câu rút cho mỗi phần khi vào thi thật (đúng cấu trúc đề chính thức)
    plan: { repeat: 15, respond: 10, open: 2 }
  },

  // ── 第一部分 · 听后重复 (nghe & lặp lại nguyên câu) ──────────────────
  part1: [
    { id: 'r01', zh: '我很高兴认识你。',       py: 'Wǒ hěn gāoxìng rènshi nǐ.',        vi: 'Tôi rất vui được làm quen với bạn.' },
    { id: 'r02', zh: '今天天气很好。',         py: 'Jīntiān tiānqì hěn hǎo.',          vi: 'Hôm nay thời tiết rất đẹp.' },
    { id: 'r03', zh: '我想喝一杯茶。',         py: 'Wǒ xiǎng hē yì bēi chá.',          vi: 'Tôi muốn uống một tách trà.' },
    { id: 'r04', zh: '他是我的好朋友。',       py: 'Tā shì wǒ de hǎo péngyou.',        vi: 'Anh ấy là bạn tốt của tôi.' },
    { id: 'r05', zh: '这本书很有意思。',       py: 'Zhè běn shū hěn yǒu yìsi.',        vi: 'Quyển sách này rất thú vị.' },
    { id: 'r06', zh: '我家有四口人。',         py: 'Wǒ jiā yǒu sì kǒu rén.',           vi: 'Nhà tôi có bốn người.' },
    { id: 'r07', zh: '明天我要去学校。',       py: 'Míngtiān wǒ yào qù xuéxiào.',      vi: 'Ngày mai tôi phải đến trường.' },
    { id: 'r08', zh: '请问，现在几点了？',     py: 'Qǐngwèn, xiànzài jǐ diǎn le?',     vi: 'Xin hỏi, bây giờ là mấy giờ rồi?' },
    { id: 'r09', zh: '我喜欢吃中国菜。',       py: 'Wǒ xǐhuan chī Zhōngguó cài.',      vi: 'Tôi thích ăn món Trung Quốc.' },
    { id: 'r10', zh: '妈妈在家做饭。',         py: 'Māma zài jiā zuò fàn.',            vi: 'Mẹ đang nấu cơm ở nhà.' },
    { id: 'r11', zh: '这件衣服太贵了。',       py: 'Zhè jiàn yīfu tài guì le.',        vi: 'Bộ quần áo này đắt quá.' },
    { id: 'r12', zh: '我每天七点起床。',       py: 'Wǒ měi tiān qī diǎn qǐchuáng.',    vi: 'Tôi dậy lúc bảy giờ mỗi ngày.' },
    { id: 'r13', zh: '我们一起去看电影吧。',   py: 'Wǒmen yìqǐ qù kàn diànyǐng ba.',   vi: 'Chúng ta cùng đi xem phim nhé.' },
    { id: 'r14', zh: '他会说一点儿汉语。',     py: 'Tā huì shuō yìdiǎnr Hànyǔ.',       vi: 'Anh ấy biết nói một chút tiếng Trung.' },
    { id: 'r15', zh: '火车站离这儿很远。',     py: 'Huǒchēzhàn lí zhèr hěn yuǎn.',     vi: 'Ga tàu cách đây rất xa.' },
    { id: 'r16', zh: '我昨天买了一些水果。',   py: 'Wǒ zuótiān mǎi le yìxiē shuǐguǒ.', vi: 'Hôm qua tôi mua một ít hoa quả.' },
    { id: 'r17', zh: '你的电话号码是多少？',   py: 'Nǐ de diànhuà hàomǎ shì duōshao?', vi: 'Số điện thoại của bạn là bao nhiêu?' },
    { id: 'r18', zh: '老师让我们多说汉语。',   py: 'Lǎoshī ràng wǒmen duō shuō Hànyǔ.', vi: 'Cô giáo bảo chúng tôi nói tiếng Trung nhiều hơn.' },
    { id: 'r19', zh: '周末我常常去运动。',     py: 'Zhōumò wǒ chángcháng qù yùndòng.', vi: 'Cuối tuần tôi thường đi tập thể thao.' },
    { id: 'r20', zh: '北京的冬天很冷。',       py: 'Běijīng de dōngtiān hěn lěng.',    vi: 'Mùa đông ở Bắc Kinh rất lạnh.' },
    { id: 'r21', zh: '我的房间很干净。',       py: 'Wǒ de fángjiān hěn gānjìng.',      vi: 'Phòng của tôi rất sạch sẽ.' },
    { id: 'r22', zh: '弟弟今年六岁了。',       py: 'Dìdi jīnnián liù suì le.',         vi: 'Em trai năm nay sáu tuổi rồi.' },
    { id: 'r23', zh: '我想买一个新手机。',     py: 'Wǒ xiǎng mǎi yí ge xīn shǒujī.',   vi: 'Tôi muốn mua một chiếc điện thoại mới.' },
    { id: 'r24', zh: '请你说得慢一点儿。',     py: 'Qǐng nǐ shuō de màn yìdiǎnr.',     vi: 'Xin bạn nói chậm một chút.' },
    { id: 'r25', zh: '我们班有二十个学生。',   py: 'Wǒmen bān yǒu èrshí ge xuésheng.', vi: 'Lớp tôi có hai mươi học sinh.' },
    { id: 'r26', zh: '外面下雨了，别忘了带伞。', py: 'Wàimiàn xià yǔ le, bié wàng le dài sǎn.', vi: 'Bên ngoài mưa rồi, đừng quên mang ô.' },
    { id: 'r27', zh: '我每天晚上十点睡觉。',   py: 'Wǒ měi tiān wǎnshang shí diǎn shuìjiào.', vi: 'Mỗi tối tôi đi ngủ lúc mười giờ.' },
    { id: 'r28', zh: '这杯咖啡有点儿热。',     py: 'Zhè bēi kāfēi yǒudiǎnr rè.',       vi: 'Cốc cà phê này hơi nóng.' },
    { id: 'r29', zh: '爸爸开车去上班。',       py: 'Bàba kāichē qù shàngbān.',         vi: 'Bố lái xe đi làm.' },
    { id: 'r30', zh: '我的生日是五月十号。',   py: 'Wǒ de shēngrì shì wǔ yuè shí hào.', vi: 'Sinh nhật tôi là ngày mười tháng năm.' },
    { id: 'r31', zh: '桌子上有很多书。',       py: 'Zhuōzi shang yǒu hěn duō shū.',    vi: 'Trên bàn có rất nhiều sách.' },
    { id: 'r32', zh: '我会游泳，但是游得不快。', py: 'Wǒ huì yóuyǒng, dànshì yóu de bù kuài.', vi: 'Tôi biết bơi, nhưng bơi không nhanh.' },
    { id: 'r33', zh: '今天是星期五，明天休息。', py: 'Jīntiān shì xīngqīwǔ, míngtiān xiūxi.', vi: 'Hôm nay là thứ sáu, ngày mai nghỉ.' },
    { id: 'r34', zh: '妹妹喜欢小猫和小狗。',   py: 'Mèimei xǐhuan xiǎo māo hé xiǎo gǒu.', vi: 'Em gái thích mèo con và chó con.' },
    { id: 'r35', zh: '我想去商店买东西。',     py: 'Wǒ xiǎng qù shāngdiàn mǎi dōngxi.', vi: 'Tôi muốn đi cửa hàng mua đồ.' },
    { id: 'r36', zh: '这里的东西都不贵。',     py: 'Zhèlǐ de dōngxi dōu bú guì.',      vi: 'Đồ ở đây đều không đắt.' },
    { id: 'r37', zh: '老师的汉语说得很好。',   py: 'Lǎoshī de Hànyǔ shuō de hěn hǎo.', vi: 'Tiếng Trung của cô giáo nói rất hay.' },
    { id: 'r38', zh: '我家旁边有一个公园。',   py: 'Wǒ jiā pángbiān yǒu yí ge gōngyuán.', vi: 'Bên cạnh nhà tôi có một công viên.' },
    { id: 'r39', zh: '哥哥在医院工作。',       py: 'Gēge zài yīyuàn gōngzuò.',         vi: 'Anh trai làm việc ở bệnh viện.' },
    { id: 'r40', zh: '我想喝一杯热牛奶。',     py: 'Wǒ xiǎng hē yì bēi rè niúnǎi.',    vi: 'Tôi muốn uống một cốc sữa nóng.' },
    { id: 'r41', zh: '今天的作业不太多。',     py: 'Jīntiān de zuòyè bú tài duō.',     vi: 'Bài tập hôm nay không nhiều lắm.' },
    { id: 'r42', zh: '我想请你帮我一个忙。',   py: 'Wǒ xiǎng qǐng nǐ bāng wǒ yí ge máng.', vi: 'Tôi muốn nhờ bạn giúp tôi một việc.' },
    { id: 'r43', zh: '这个问题不难。',         py: 'Zhège wèntí bù nán.',              vi: 'Vấn đề này không khó.' },
    { id: 'r44', zh: '我每天坐公共汽车上学。', py: 'Wǒ měi tiān zuò gōnggòng qìchē shàngxué.', vi: 'Mỗi ngày tôi đi xe buýt đến trường.' },
    { id: 'r45', zh: '现在外面很冷，多穿点衣服。', py: 'Xiànzài wàimiàn hěn lěng, duō chuān diǎn yīfu.', vi: 'Bây giờ ngoài trời lạnh, mặc thêm áo nhé.' },
    { id: 'r46', zh: '晚上我喜欢看电视。',     py: 'Wǎnshang wǒ xǐhuan kàn diànshì.',  vi: 'Buổi tối tôi thích xem tivi.' },
    { id: 'r47', zh: '我们一起吃晚饭吧。',     py: 'Wǒmen yìqǐ chī wǎnfàn ba.',        vi: 'Chúng ta cùng ăn cơm tối nhé.' },
    { id: 'r48', zh: '他跑得比我快。',         py: 'Tā pǎo de bǐ wǒ kuài.',            vi: 'Anh ấy chạy nhanh hơn tôi.' },
    { id: 'r49', zh: '我的书包里有两本书。',   py: 'Wǒ de shūbāo lǐ yǒu liǎng běn shū.', vi: 'Trong cặp tôi có hai quyển sách.' },
    { id: 'r50', zh: '请问，洗手间在哪儿？',   py: 'Qǐngwèn, xǐshǒujiān zài nǎr?',     vi: 'Xin hỏi, nhà vệ sinh ở đâu?' }
  ],

  // ── 第二部分 · 听后说 (nghe câu hỏi rồi trả lời ngắn) ─────────────────
  part2: [
    { id: 's01', zh: '你今年多大了？',         py: 'Nǐ jīnnián duō dà le?',           vi: 'Năm nay bạn bao nhiêu tuổi?' },
    { id: 's02', zh: '你家有几口人？',         py: 'Nǐ jiā yǒu jǐ kǒu rén?',          vi: 'Nhà bạn có mấy người?' },
    { id: 's03', zh: '你喜欢什么运动？',       py: 'Nǐ xǐhuan shénme yùndòng?',       vi: 'Bạn thích môn thể thao nào?' },
    { id: 's04', zh: '你早上几点起床？',       py: 'Nǐ zǎoshang jǐ diǎn qǐchuáng?',   vi: 'Buổi sáng bạn dậy lúc mấy giờ?' },
    { id: 's05', zh: '你会做饭吗？',           py: 'Nǐ huì zuò fàn ma?',              vi: 'Bạn có biết nấu ăn không?' },
    { id: 's06', zh: '你最喜欢吃什么？',       py: 'Nǐ zuì xǐhuan chī shénme?',       vi: 'Bạn thích ăn gì nhất?' },
    { id: 's07', zh: '你的学校大不大？',       py: 'Nǐ de xuéxiào dà bu dà?',         vi: 'Trường của bạn có lớn không?' },
    { id: 's08', zh: '你今天怎么来的？',       py: 'Nǐ jīntiān zěnme lái de?',        vi: 'Hôm nay bạn đến bằng cách nào?' },
    { id: 's09', zh: '周末你常常做什么？',     py: 'Zhōumò nǐ chángcháng zuò shénme?', vi: 'Cuối tuần bạn thường làm gì?' },
    { id: 's10', zh: '你学汉语多长时间了？',   py: 'Nǐ xué Hànyǔ duō cháng shíjiān le?', vi: 'Bạn học tiếng Trung được bao lâu rồi?' },
    { id: 's11', zh: '你觉得汉语难吗？',       py: 'Nǐ juéde Hànyǔ nán ma?',          vi: 'Bạn thấy tiếng Trung có khó không?' },
    { id: 's12', zh: '你最好的朋友是谁？',     py: 'Nǐ zuì hǎo de péngyou shì shéi?', vi: 'Bạn thân nhất của bạn là ai?' },
    { id: 's13', zh: '你喜欢哪个季节？',       py: 'Nǐ xǐhuan nǎge jìjié?',           vi: 'Bạn thích mùa nào?' },
    { id: 's14', zh: '你家离这儿远吗？',       py: 'Nǐ jiā lí zhèr yuǎn ma?',         vi: 'Nhà bạn có xa đây không?' },
    { id: 's15', zh: '你叫什么名字？',         py: 'Nǐ jiào shénme míngzi?',          vi: 'Bạn tên là gì?' },
    { id: 's16', zh: '你是哪国人？',           py: 'Nǐ shì nǎ guó rén?',              vi: 'Bạn là người nước nào?' },
    { id: 's17', zh: '你有兄弟姐妹吗？',       py: 'Nǐ yǒu xiōngdì jiěmèi ma?',       vi: 'Bạn có anh chị em không?' },
    { id: 's18', zh: '你今天早上吃什么了？',   py: 'Nǐ jīntiān zǎoshang chī shénme le?', vi: 'Sáng nay bạn ăn gì?' },
    { id: 's19', zh: '你喜欢什么颜色？',       py: 'Nǐ xǐhuan shénme yánsè?',         vi: 'Bạn thích màu gì?' },
    { id: 's20', zh: '你会用筷子吗？',         py: 'Nǐ huì yòng kuàizi ma?',          vi: 'Bạn có biết dùng đũa không?' },
    { id: 's21', zh: '你的生日是几月几号？',   py: 'Nǐ de shēngrì shì jǐ yuè jǐ hào?', vi: 'Sinh nhật bạn là ngày mấy tháng mấy?' },
    { id: 's22', zh: '你每天几点睡觉？',       py: 'Nǐ měi tiān jǐ diǎn shuìjiào?',   vi: 'Mỗi ngày bạn đi ngủ lúc mấy giờ?' },
    { id: 's23', zh: '你喜欢喝茶还是喝咖啡？', py: 'Nǐ xǐhuan hē chá háishi hē kāfēi?', vi: 'Bạn thích uống trà hay cà phê?' },
    { id: 's24', zh: '你常常看电视吗？',       py: 'Nǐ chángcháng kàn diànshì ma?',   vi: 'Bạn có hay xem tivi không?' },
    { id: 's25', zh: '你今天穿的衣服是什么颜色的？', py: 'Nǐ jīntiān chuān de yīfu shì shénme yánsè de?', vi: 'Quần áo bạn mặc hôm nay màu gì?' },
    { id: 's26', zh: '你喜欢什么天气？',       py: 'Nǐ xǐhuan shénme tiānqì?',        vi: 'Bạn thích kiểu thời tiết nào?' },
    { id: 's27', zh: '你的房间大不大？',       py: 'Nǐ de fángjiān dà bu dà?',        vi: 'Phòng của bạn có lớn không?' },
    { id: 's28', zh: '你喜欢看书吗？',         py: 'Nǐ xǐhuan kàn shū ma?',           vi: 'Bạn có thích đọc sách không?' },
    { id: 's29', zh: '你想去什么地方旅游？',   py: 'Nǐ xiǎng qù shénme dìfang lǚyóu?', vi: 'Bạn muốn đi du lịch ở đâu?' },
    { id: 's30', zh: '你喜欢在家做饭还是去饭馆？', py: 'Nǐ xǐhuan zài jiā zuò fàn háishi qù fànguǎn?', vi: 'Bạn thích nấu ăn ở nhà hay đi quán ăn?' },
    { id: 's31', zh: '你今天累不累？',         py: 'Nǐ jīntiān lèi bu lèi?',          vi: 'Hôm nay bạn có mệt không?' },
    { id: 's32', zh: '你的工作忙吗？',         py: 'Nǐ de gōngzuò máng ma?',          vi: 'Công việc của bạn có bận không?' },
    { id: 's33', zh: '你喜欢什么水果？',       py: 'Nǐ xǐhuan shénme shuǐguǒ?',       vi: 'Bạn thích loại hoa quả nào?' },
    { id: 's34', zh: '你会开车吗？',           py: 'Nǐ huì kāichē ma?',               vi: 'Bạn có biết lái xe không?' },
    { id: 's35', zh: '你一般几点吃晚饭？',     py: 'Nǐ yìbān jǐ diǎn chī wǎnfàn?',    vi: 'Bạn thường ăn tối lúc mấy giờ?' },
    { id: 's36', zh: '你喜欢唱歌吗？',         py: 'Nǐ xǐhuan chànggē ma?',           vi: 'Bạn có thích hát không?' },
    { id: 's37', zh: '你周末喜欢去哪儿玩？',   py: 'Nǐ zhōumò xǐhuan qù nǎr wán?',    vi: 'Cuối tuần bạn thích đi chơi ở đâu?' },
    { id: 's38', zh: '你最近忙吗？',           py: 'Nǐ zuìjìn máng ma?',              vi: 'Dạo này bạn có bận không?' },
    { id: 's39', zh: '你有几个好朋友？',       py: 'Nǐ yǒu jǐ ge hǎo péngyou?',       vi: 'Bạn có mấy người bạn thân?' },
    { id: 's40', zh: '你喜欢吃米饭还是面条？', py: 'Nǐ xǐhuan chī mǐfàn háishi miàntiáo?', vi: 'Bạn thích ăn cơm hay mì?' }
  ],

  // ── 第三部分 · 回答问题 (đọc đề, chuẩn bị rồi nói 1 đoạn ngắn) ────────
  part3: [
    { id: 'o01', zh: '请介绍一下你自己。',     py: 'Qǐng jièshào yíxià nǐ zìjǐ.',     vi: 'Hãy giới thiệu về bản thân bạn.',  hint: 'Tên · tuổi · công việc/học tập · sở thích' },
    { id: 'o02', zh: '说一说你的一天。',       py: 'Shuō yi shuō nǐ de yì tiān.',     vi: 'Hãy kể về một ngày của bạn.',      hint: 'Mấy giờ dậy · làm gì · buổi tối làm gì' },
    { id: 'o03', zh: '请介绍一下你的家。',     py: 'Qǐng jièshào yíxià nǐ de jiā.',   vi: 'Hãy giới thiệu về gia đình bạn.',  hint: 'Mấy người · ai · làm nghề gì' },
    { id: 'o04', zh: '你为什么学习汉语？',     py: 'Nǐ wèishénme xuéxí Hànyǔ?',       vi: 'Vì sao bạn học tiếng Trung?',      hint: 'Lý do · học bao lâu · cảm nhận' },
    { id: 'o05', zh: '说一说你最喜欢的人。',   py: 'Shuō yi shuō nǐ zuì xǐhuan de rén.', vi: 'Hãy nói về người bạn thích nhất.', hint: 'Là ai · vì sao thích' },
    { id: 'o06', zh: '介绍一下你住的地方。',   py: 'Jièshào yíxià nǐ zhù de dìfang.', vi: 'Hãy giới thiệu nơi bạn sống.',     hint: 'Thành phố nào · lớn/nhỏ · có gì' },
    { id: 'o07', zh: '说一说你最喜欢吃的菜。', py: 'Shuō yi shuō nǐ zuì xǐhuan chī de cài.', vi: 'Hãy nói về món ăn bạn thích nhất.', hint: 'Món gì · vị thế nào · ăn ở đâu' },
    { id: 'o08', zh: '介绍一下你的好朋友。',   py: 'Jièshào yíxià nǐ de hǎo péngyou.', vi: 'Hãy giới thiệu về người bạn thân của bạn.', hint: 'Là ai · tính cách · thường cùng làm gì' },
    { id: 'o09', zh: '说一说你的周末。',       py: 'Shuō yi shuō nǐ de zhōumò.',      vi: 'Hãy kể về ngày cuối tuần của bạn.', hint: 'Làm gì · với ai · cảm thấy thế nào' },
    { id: 'o10', zh: '介绍一下你的学校或者公司。', py: 'Jièshào yíxià nǐ de xuéxiào huòzhě gōngsī.', vi: 'Hãy giới thiệu trường học hoặc công ty của bạn.', hint: 'Ở đâu · lớn/nhỏ · có gì' },
    { id: 'o11', zh: '说一说你喜欢的季节。',   py: 'Shuō yi shuō nǐ xǐhuan de jìjié.', vi: 'Hãy nói về mùa mà bạn thích.', hint: 'Mùa nào · thời tiết · thường làm gì' },
    { id: 'o12', zh: '你平时喜欢做什么？',     py: 'Nǐ píngshí xǐhuan zuò shénme?',   vi: 'Bình thường bạn thích làm gì?', hint: 'Sở thích · khi nào làm · vì sao thích' },
    { id: 'o13', zh: '介绍一下你喜欢的城市。', py: 'Jièshào yíxià nǐ xǐhuan de chéngshì.', vi: 'Hãy giới thiệu thành phố bạn thích.', hint: 'Thành phố nào · có gì · vì sao thích' },
    { id: 'o14', zh: '说一说你今天打算做什么。', py: 'Shuō yi shuō nǐ jīntiān dǎsuàn zuò shénme.', vi: 'Hãy kể hôm nay bạn định làm gì.', hint: 'Buổi sáng · buổi chiều · buổi tối' },
    { id: 'o15', zh: '说一说你怎么学习汉语。', py: 'Shuō yi shuō nǐ zěnme xuéxí Hànyǔ.', vi: 'Hãy nói về cách bạn học tiếng Trung.', hint: 'Học khi nào · cách học · luyện gì' }
  ]
};

if (typeof window !== 'undefined') window.HSKK_SOCAP = HSKK_SOCAP;
