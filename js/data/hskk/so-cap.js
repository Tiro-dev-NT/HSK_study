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
    { id: 'r20', zh: '北京的冬天很冷。',       py: 'Běijīng de dōngtiān hěn lěng.',    vi: 'Mùa đông ở Bắc Kinh rất lạnh.' }
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
    { id: 's14', zh: '你家离这儿远吗？',       py: 'Nǐ jiā lí zhèr yuǎn ma?',         vi: 'Nhà bạn có xa đây không?' }
  ],

  // ── 第三部分 · 回答问题 (đọc đề, chuẩn bị rồi nói 1 đoạn ngắn) ────────
  part3: [
    { id: 'o01', zh: '请介绍一下你自己。',     py: 'Qǐng jièshào yíxià nǐ zìjǐ.',     vi: 'Hãy giới thiệu về bản thân bạn.',  hint: 'Tên · tuổi · công việc/học tập · sở thích' },
    { id: 'o02', zh: '说一说你的一天。',       py: 'Shuō yi shuō nǐ de yì tiān.',     vi: 'Hãy kể về một ngày của bạn.',      hint: 'Mấy giờ dậy · làm gì · buổi tối làm gì' },
    { id: 'o03', zh: '请介绍一下你的家。',     py: 'Qǐng jièshào yíxià nǐ de jiā.',   vi: 'Hãy giới thiệu về gia đình bạn.',  hint: 'Mấy người · ai · làm nghề gì' },
    { id: 'o04', zh: '你为什么学习汉语？',     py: 'Nǐ wèishénme xuéxí Hànyǔ?',       vi: 'Vì sao bạn học tiếng Trung?',      hint: 'Lý do · học bao lâu · cảm nhận' },
    { id: 'o05', zh: '说一说你最喜欢的人。',   py: 'Shuō yi shuō nǐ zuì xǐhuan de rén.', vi: 'Hãy nói về người bạn thích nhất.', hint: 'Là ai · vì sao thích' },
    { id: 'o06', zh: '介绍一下你住的地方。',   py: 'Jièshào yíxià nǐ zhù de dìfang.', vi: 'Hãy giới thiệu nơi bạn sống.',     hint: 'Thành phố nào · lớn/nhỏ · có gì' }
  ]
};

if (typeof window !== 'undefined') window.HSKK_SOCAP = HSKK_SOCAP;
