// ═══════════════════════════════════════════════════════
// READER DATA — HSK 3.0 cấp 2 (Graded Reader Việt-first, Phase A1)
// Schema chốt tại docs/plans/a1-reader-investigation.md §C
// Quy ước: var dynamic-injected (KHÔNG const) — theo CLAUDE.md.
// source:'ai-gen' = nội dung tự sinh, CHỜ chủ dự án duyệt (điền reviewed_*).
// ═══════════════════════════════════════════════════════

var READER_DATA = (typeof READER_DATA !== 'undefined') ? READER_DATA : {};

READER_DATA[2] = [
  {
    id: 'rd-2-001', level: 2, topic: 'hoc-tap',
    title: { vi: 'Góc học yên tĩnh', en: 'A Quiet Study Corner', zh: '安静的学习角' },
    summary_vi: 'Lan sắp xếp góc học nhỏ để ôn bài mỗi tối.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 46,
    paragraphs: [{
      sentences: [
        { zh: '兰的房间不大，但是很干净。', py: 'Lán de fángjiān bú dà, dànshì hěn gānjìng.', vi: 'Phòng của Lan không lớn, nhưng rất sạch sẽ.', audio: '',
          gloss: [ { w: '房间', py: 'fángjiān', vi: 'phòng' }, { w: '但是', py: 'dànshì', vi: 'nhưng' }, { w: '干净', py: 'gānjìng', vi: 'sạch sẽ' } ] },
        { zh: '桌子上有课本、词典和笔记本。', py: 'Zhuōzi shang yǒu kèběn, cídiǎn hé bǐjìběn.', vi: 'Trên bàn có sách giáo khoa, từ điển và vở ghi chép.', audio: '',
          gloss: [ { w: '课本', py: 'kèběn', vi: 'sách giáo khoa' }, { w: '词典', py: 'cídiǎn', vi: 'từ điển' }, { w: '笔记本', py: 'bǐjìběn', vi: 'vở ghi chép' } ] },
        { zh: '每天晚上，她先复习生词，再写作业。', py: 'Měitiān wǎnshang, tā xiān fùxí shēngcí, zài xiě zuòyè.', vi: 'Mỗi tối, bạn ấy ôn từ mới trước, rồi viết bài tập.', audio: '',
          gloss: [ { w: '每天晚上', py: 'měitiān wǎnshang', vi: 'mỗi tối' }, { w: '复习', py: 'fùxí', vi: 'ôn tập' }, { w: '写作业', py: 'xiě zuòyè', vi: 'làm bài tập' } ] },
        { zh: '她觉得这个方法不错。', py: 'Tā juéde zhège fāngfǎ búcuò.', vi: 'Bạn ấy cảm thấy cách này khá tốt.', audio: '',
          gloss: [ { w: '觉得', py: 'juéde', vi: 'cảm thấy/cho rằng' }, { w: '方法', py: 'fāngfǎ', vi: 'phương pháp' }, { w: '不错', py: 'búcuò', vi: 'khá tốt' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Trên bàn của Lan có gì?', en: "What is on Lan's desk?" }, options: ['Sách, từ điển và vở', 'Quần áo và giày', 'Hoa và trái cây', 'Điện thoại và bánh'], answer: 0, explain_vi: '桌子上有课本、词典和笔记本 = trên bàn có sách, từ điển và vở.' },
      { q: { vi: 'Lan học theo thứ tự nào mỗi tối?', en: 'What order does Lan study in every evening?' }, options: ['Xem phim rồi ngủ', 'Ôn từ mới rồi làm bài tập', 'Ăn cơm rồi chơi bóng', 'Đi mua sách rồi về nhà'], answer: 1, explain_vi: '先复习生词，再写作业 = ôn từ mới trước, rồi làm bài tập.' },
      { q: { vi: 'Lan nghĩ phương pháp này thế nào?', en: 'What does Lan think of this method?' }, options: ['Không tốt', 'Khá tốt', 'Quá khó', 'Rất đắt'], answer: 1, explain_vi: '她觉得这个方法不错 = bạn ấy thấy cách này khá tốt.' }
    ]
  },
  {
    id: 'rd-2-002', level: 2, topic: 'mua-sam',
    title: { vi: 'Ở siêu thị', en: 'At the Supermarket', zh: '在超市' },
    summary_vi: 'Hai chị em đi siêu thị mua rau quả và học cách xem giá.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 49,
    paragraphs: [{
      sentences: [
        { zh: '星期六下午，姐姐带弟弟去超市。', py: 'Xīngqīliù xiàwǔ, jiějie dài dìdi qù chāoshì.', vi: 'Chiều thứ Bảy, chị gái đưa em trai đi siêu thị.', audio: '',
          gloss: [ { w: '星期六下午', py: 'xīngqīliù xiàwǔ', vi: 'chiều thứ Bảy' }, { w: '带弟弟去', py: 'dài dìdi qù', vi: 'đưa em trai đi' }, { w: '超市', py: 'chāoshì', vi: 'siêu thị' } ] },
        { zh: '他们想买白菜、鸡蛋和苹果。', py: 'Tāmen xiǎng mǎi báicài, jīdàn hé píngguǒ.', vi: 'Họ muốn mua cải thảo, trứng gà và táo.', audio: '',
          gloss: [ { w: '想买', py: 'xiǎng mǎi', vi: 'muốn mua' }, { w: '白菜', py: 'báicài', vi: 'cải thảo' }, { w: '鸡蛋', py: 'jīdàn', vi: 'trứng gà' } ] },
        { zh: '弟弟看见红苹果，说：“这个便宜吗？”', py: 'Dìdi kànjiàn hóng píngguǒ, shuō: “Zhège piányí ma?”', vi: 'Em trai nhìn thấy táo đỏ và nói: “Cái này rẻ không?”', audio: '',
          gloss: [ { w: '看见', py: 'kànjiàn', vi: 'nhìn thấy' }, { w: '红苹果', py: 'hóng píngguǒ', vi: 'táo đỏ' }, { w: '便宜', py: 'piányí', vi: 'rẻ' } ] },
        { zh: '姐姐说：“不贵，我们买两公斤吧。”', py: 'Jiějie shuō: “Bú guì, wǒmen mǎi liǎng gōngjīn ba.”', vi: 'Chị gái nói: “Không đắt, chúng ta mua hai cân nhé.”', audio: '',
          gloss: [ { w: '不贵', py: 'bú guì', vi: 'không đắt' }, { w: '两公斤', py: 'liǎng gōngjīn', vi: 'hai ki-lô-gam' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Hai chị em đi đâu?', en: 'Where do the siblings go?' }, options: ['Siêu thị', 'Thư viện', 'Bệnh viện', 'Sân bay'], answer: 0, explain_vi: '姐姐带弟弟去超市 = chị gái đưa em trai đi siêu thị.' },
      { q: { vi: 'Họ muốn mua những gì?', en: 'What do they want to buy?' }, options: ['Sách và bút', 'Cải thảo, trứng và táo', 'Áo khoác và giày', 'Vé xe và bản đồ'], answer: 1, explain_vi: '想买白菜、鸡蛋和苹果 = muốn mua cải thảo, trứng và táo.' },
      { q: { vi: 'Chị gái mua bao nhiêu táo?', en: 'How many apples does the sister buy?' }, options: ['Một cân', 'Hai cân', 'Ba cân', 'Bốn cân'], answer: 1, explain_vi: '买两公斤 = mua hai ki-lô-gam.' }
    ]
  },
  {
    id: 'rd-2-003', level: 2, topic: 'thoi-tiet',
    title: { vi: 'Một ngày nhiều mây', en: 'A Cloudy Day', zh: '多云的一天' },
    summary_vi: 'Thời tiết thay đổi, Minh mang ô và vẫn đến lớp đúng giờ.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 44,
    paragraphs: [{
      sentences: [
        { zh: '早上天气多云，风也很大。', py: 'Zǎoshang tiānqì duōyún, fēng yě hěn dà.', vi: 'Buổi sáng trời nhiều mây, gió cũng rất lớn.', audio: '',
          gloss: [ { w: '天气多云', py: 'tiānqì duōyún', vi: 'trời nhiều mây' }, { w: '风很大', py: 'fēng hěn dà', vi: 'gió rất lớn' } ] },
        { zh: '小明看了手机，发现下午可能下雨。', py: 'Xiǎo Míng kàn le shǒujī, fāxiàn xiàwǔ kěnéng xià yǔ.', vi: 'Tiểu Minh xem điện thoại và phát hiện chiều có thể mưa.', audio: '',
          gloss: [ { w: '看了手机', py: 'kàn le shǒujī', vi: 'đã xem điện thoại' }, { w: '发现', py: 'fāxiàn', vi: 'phát hiện' }, { w: '可能下雨', py: 'kěnéng xià yǔ', vi: 'có thể mưa' } ] },
        { zh: '他把雨伞放进书包里。', py: 'Tā bǎ yǔsǎn fàng jìn shūbāo lǐ.', vi: 'Bạn ấy bỏ ô vào trong cặp sách.', audio: '',
          gloss: [ { w: '雨伞', py: 'yǔsǎn', vi: 'ô/dù' }, { w: '放进书包里', py: 'fàng jìn shūbāo lǐ', vi: 'bỏ vào cặp sách' } ] },
        { zh: '到学校的时候，雨还没有下。', py: 'Dào xuéxiào de shíhou, yǔ hái méiyǒu xià.', vi: 'Khi đến trường, mưa vẫn chưa rơi.', audio: '',
          gloss: [ { w: '到学校的时候', py: 'dào xuéxiào de shíhou', vi: 'khi đến trường' }, { w: '还没有下', py: 'hái méiyǒu xià', vi: 'vẫn chưa mưa' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Buổi sáng thời tiết thế nào?', en: 'How is the weather in the morning?' }, options: ['Nhiều mây và gió lớn', 'Có tuyết', 'Rất nóng và nắng', 'Không có gió'], answer: 0, explain_vi: '天气多云，风也很大 = trời nhiều mây, gió cũng lớn.' },
      { q: { vi: 'Tiểu Minh mang theo gì?', en: 'What does Xiao Ming bring?' }, options: ['Ô', 'Áo khoác đỏ', 'Một con mèo', 'Báo giấy'], answer: 0, explain_vi: '把雨伞放进书包里 = bỏ ô vào cặp.' },
      { q: { vi: 'Khi đến trường, trời đã mưa chưa?', en: 'Has it rained when he arrives at school?' }, options: ['Đã mưa rất to', 'Chưa mưa', 'Đang có tuyết', 'Không nói đến'], answer: 1, explain_vi: '雨还没有下 = mưa vẫn chưa rơi.' }
    ]
  },
  {
    id: 'rd-2-004', level: 2, topic: 'suc-khoe',
    title: { vi: 'Đi khám bệnh', en: 'Seeing a Doctor', zh: '去看病' },
    summary_vi: 'Hà bị cảm nhẹ, đi khám và nghe lời bác sĩ nghỉ ngơi.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 38,
    paragraphs: [{
      sentences: [
        { zh: '小河今天感到不舒服。', py: 'Xiǎo Hé jīntiān gǎndào bù shūfu.', vi: 'Hôm nay Tiểu Hà cảm thấy không khỏe.', audio: '',
          gloss: [ { w: '感到', py: 'gǎndào', vi: 'cảm thấy' }, { w: '不舒服', py: 'bù shūfu', vi: 'không khỏe/khó chịu' } ] },
        { zh: '她头疼，也不想吃饭。', py: 'Tā tóu téng, yě bù xiǎng chīfàn.', vi: 'Bạn ấy đau đầu, cũng không muốn ăn cơm.', audio: '',
          gloss: [ { w: '头疼', py: 'tóu téng', vi: 'đau đầu' }, { w: '不想吃饭', py: 'bù xiǎng chīfàn', vi: 'không muốn ăn' } ] },
        { zh: '妈妈带她去医院看病。', py: 'Māma dài tā qù yīyuàn kànbìng.', vi: 'Mẹ đưa bạn ấy đến bệnh viện khám bệnh.', audio: '',
          gloss: [ { w: '去医院', py: 'qù yīyuàn', vi: 'đến bệnh viện' }, { w: '看病', py: 'kànbìng', vi: 'khám bệnh' } ] },
        { zh: '医生说她感冒了，必须多喝水。', py: 'Yīshēng shuō tā gǎnmào le, bìxū duō hē shuǐ.', vi: 'Bác sĩ nói bạn ấy bị cảm, phải uống nhiều nước.', audio: '',
          gloss: [ { w: '医生', py: 'yīshēng', vi: 'bác sĩ' }, { w: '感冒了', py: 'gǎnmào le', vi: 'bị cảm rồi' }, { w: '必须', py: 'bìxū', vi: 'phải' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Tiểu Hà cảm thấy thế nào?', en: 'How does Xiao He feel?' }, options: ['Không khỏe', 'Rất đói', 'Rất vui', 'Buồn ngủ vì học'], answer: 0, explain_vi: '感到不舒服 = cảm thấy không khỏe.' },
      { q: { vi: 'Ai đưa Tiểu Hà đi bệnh viện?', en: 'Who takes Xiao He to the hospital?' }, options: ['Mẹ', 'Bố', 'Giáo viên', 'Bạn học'], answer: 0, explain_vi: '妈妈带她去医院 = mẹ đưa bạn ấy đến bệnh viện.' },
      { q: { vi: 'Bác sĩ bảo Tiểu Hà phải làm gì?', en: 'What does the doctor say Xiao He must do?' }, options: ['Uống nhiều nước', 'Đi mua sách', 'Chơi bóng', 'Đi siêu thị'], answer: 0, explain_vi: '必须多喝水 = phải uống nhiều nước.' }
    ]
  },
  {
    id: 'rd-2-005', level: 2, topic: 'du-lich',
    title: { vi: 'Tìm ga tàu điện ngầm', en: 'Finding the Subway Station', zh: '找地铁站' },
    summary_vi: 'Nam hỏi đường đến ga tàu điện ngầm và đến nơi sau mười phút.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 51,
    paragraphs: [{
      sentences: [
        { zh: '南第一次来到这个城市。', py: 'Nán dì yī cì láidào zhège chéngshì.', vi: 'Nam lần đầu đến thành phố này.', audio: '',
          gloss: [ { w: '第一次', py: 'dì yī cì', vi: 'lần đầu tiên' }, { w: '来到', py: 'láidào', vi: 'đến' }, { w: '城市', py: 'chéngshì', vi: 'thành phố' } ] },
        { zh: '他想坐地铁去学校，但是不知道方向。', py: 'Tā xiǎng zuò dìtiě qù xuéxiào, dànshì bù zhīdào fāngxiàng.', vi: 'Bạn ấy muốn đi tàu điện ngầm đến trường, nhưng không biết phương hướng.', audio: '',
          gloss: [ { w: '坐地铁', py: 'zuò dìtiě', vi: 'đi tàu điện ngầm' }, { w: '不知道方向', py: 'bù zhīdào fāngxiàng', vi: 'không biết hướng' } ] },
        { zh: '他问一位服务员：“地铁站在哪里？”', py: 'Tā wèn yí wèi fúwùyuán: “Dìtiězhàn zài nǎlǐ?”', vi: 'Bạn ấy hỏi một nhân viên phục vụ: “Ga tàu điện ngầm ở đâu?”', audio: '',
          gloss: [ { w: '服务员', py: 'fúwùyuán', vi: 'nhân viên phục vụ' }, { w: '地铁站', py: 'dìtiězhàn', vi: 'ga tàu điện ngầm' } ] },
        { zh: '服务员说：“在前面，走十分钟就到。”', py: 'Fúwùyuán shuō: “Zài qiánmiàn, zǒu shí fēnzhōng jiù dào.”', vi: 'Nhân viên nói: “Ở phía trước, đi bộ mười phút là đến.”', audio: '',
          gloss: [ { w: '前面', py: 'qiánmiàn', vi: 'phía trước' }, { w: '十分钟', py: 'shí fēnzhōng', vi: 'mười phút' }, { w: '就到', py: 'jiù dào', vi: 'là đến ngay' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Nam muốn đi đâu bằng tàu điện ngầm?', en: 'Where does Nam want to go by subway?' }, options: ['Trường học', 'Nhà hàng', 'Bệnh viện', 'Công viên'], answer: 0, explain_vi: '坐地铁去学校 = đi tàu điện ngầm đến trường.' },
      { q: { vi: 'Nam hỏi ai?', en: 'Whom does Nam ask?' }, options: ['Một nhân viên phục vụ', 'Một bác sĩ', 'Một học sinh', 'Một tài xế'], answer: 0, explain_vi: '问一位服务员 = hỏi một nhân viên phục vụ.' },
      { q: { vi: 'Ga tàu điện ngầm cách bao lâu đi bộ?', en: 'How long is the subway station on foot?' }, options: ['5 phút', '10 phút', '20 phút', '30 phút'], answer: 1, explain_vi: '走十分钟就到 = đi mười phút là đến.' }
    ]
  },
  {
    id: 'rd-2-006', level: 2, topic: 'cong-viec',
    title: { vi: 'Một ngày ở văn phòng', en: 'A Day at the Office', zh: '办公室的一天' },
    summary_vi: 'Bố làm việc ở văn phòng, in tài liệu và tan làm đúng giờ.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 40,
    paragraphs: [{
      sentences: [
        { zh: '爸爸在一家小公司工作。', py: 'Bàba zài yì jiā xiǎo gōngsī gōngzuò.', vi: 'Bố làm việc ở một công ty nhỏ.', audio: '',
          gloss: [ { w: '小公司', py: 'xiǎo gōngsī', vi: 'công ty nhỏ' }, { w: '工作', py: 'gōngzuò', vi: 'làm việc' } ] },
        { zh: '他的办公室在二层。', py: 'Tā de bàngōngshì zài èr céng.', vi: 'Văn phòng của bố ở tầng hai.', audio: '',
          gloss: [ { w: '办公室', py: 'bàngōngshì', vi: 'văn phòng' }, { w: '二层', py: 'èr céng', vi: 'tầng hai' } ] },
        { zh: '上午他开会，下午打印文件。', py: 'Shàngwǔ tā kāihuì, xiàwǔ dǎyìn wénjiàn.', vi: 'Buổi sáng bố họp, buổi chiều in tài liệu.', audio: '',
          gloss: [ { w: '上午', py: 'shàngwǔ', vi: 'buổi sáng' }, { w: '开会', py: 'kāihuì', vi: 'họp' }, { w: '打印文件', py: 'dǎyìn wénjiàn', vi: 'in tài liệu' } ] },
        { zh: '下班以后，他坐公交车回家。', py: 'Xiàbān yǐhòu, tā zuò gōngjiāochē huí jiā.', vi: 'Sau khi tan làm, bố đi xe buýt về nhà.', audio: '',
          gloss: [ { w: '下班以后', py: 'xiàbān yǐhòu', vi: 'sau khi tan làm' }, { w: '公交车', py: 'gōngjiāochē', vi: 'xe buýt' }, { w: '回家', py: 'huí jiā', vi: 'về nhà' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Văn phòng của bố ở đâu?', en: "Where is dad's office?" }, options: ['Tầng hai', 'Tầng một', 'Đối diện siêu thị', 'Trong thư viện'], answer: 0, explain_vi: '办公室在二层 = văn phòng ở tầng hai.' },
      { q: { vi: 'Buổi chiều bố làm gì?', en: 'What does dad do in the afternoon?' }, options: ['In tài liệu', 'Đi khám bệnh', 'Mua táo', 'Chơi bóng'], answer: 0, explain_vi: '下午打印文件 = buổi chiều in tài liệu.' },
      { q: { vi: 'Bố về nhà bằng gì?', en: 'How does dad go home?' }, options: ['Xe buýt', 'Máy bay', 'Tàu điện ngầm', 'Taxi'], answer: 0, explain_vi: '坐公交车回家 = đi xe buýt về nhà.' }
    ]
  },
  {
    id: 'rd-2-007', level: 2, topic: 'so-thich',
    title: { vi: 'Chạy bộ buổi sáng', en: 'Morning Running', zh: '早上跑步' },
    summary_vi: 'Bạn cùng lớp rủ nhau chạy bộ trong công viên để khỏe hơn.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 43,
    paragraphs: [{
      sentences: [
        { zh: '小雨从小喜欢运动。', py: 'Xiǎo Yǔ cóngxiǎo xǐhuan yùndòng.', vi: 'Tiểu Vũ từ nhỏ đã thích vận động.', audio: '',
          gloss: [ { w: '从小', py: 'cóngxiǎo', vi: 'từ nhỏ' }, { w: '喜欢运动', py: 'xǐhuan yùndòng', vi: 'thích vận động' } ] },
        { zh: '每天早上，她和同学在公园跑步。', py: 'Měitiān zǎoshang, tā hé tóngxué zài gōngyuán pǎobù.', vi: 'Mỗi sáng, bạn ấy và bạn học chạy bộ trong công viên.', audio: '',
          gloss: [ { w: '每天早上', py: 'měitiān zǎoshang', vi: 'mỗi sáng' }, { w: '公园', py: 'gōngyuán', vi: 'công viên' }, { w: '跑步', py: 'pǎobù', vi: 'chạy bộ' } ] },
        { zh: '公园里有很多花，空气也很好。', py: 'Gōngyuán lǐ yǒu hěn duō huā, kōngqì yě hěn hǎo.', vi: 'Trong công viên có nhiều hoa, không khí cũng rất tốt.', audio: '',
          gloss: [ { w: '很多花', py: 'hěn duō huā', vi: 'nhiều hoa' }, { w: '空气', py: 'kōngqì', vi: 'không khí' } ] },
        { zh: '跑完以后，她感觉很舒服。', py: 'Pǎo wán yǐhòu, tā gǎnjué hěn shūfu.', vi: 'Sau khi chạy xong, bạn ấy cảm thấy rất dễ chịu.', audio: '',
          gloss: [ { w: '跑完以后', py: 'pǎo wán yǐhòu', vi: 'sau khi chạy xong' }, { w: '感觉', py: 'gǎnjué', vi: 'cảm thấy' }, { w: '舒服', py: 'shūfu', vi: 'dễ chịu' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Tiểu Vũ thích gì từ nhỏ?', en: 'What has Xiao Yu liked since childhood?' }, options: ['Vận động', 'Mua sắm', 'In tài liệu', 'Ngủ muộn'], answer: 0, explain_vi: '从小喜欢运动 = từ nhỏ đã thích vận động.' },
      { q: { vi: 'Bạn ấy chạy bộ ở đâu?', en: 'Where does she run?' }, options: ['Công viên', 'Văn phòng', 'Siêu thị', 'Sân bay'], answer: 0, explain_vi: '在公园跑步 = chạy bộ trong công viên.' },
      { q: { vi: 'Sau khi chạy, bạn ấy cảm thấy thế nào?', en: 'How does she feel after running?' }, options: ['Dễ chịu', 'Đau đầu', 'Rất đói', 'Không vui'], answer: 0, explain_vi: '感觉很舒服 = cảm thấy rất dễ chịu.' }
    ]
  },
  {
    id: 'rd-2-008', level: 2, topic: 'ban-be',
    title: { vi: 'Tin nhắn của lớp trưởng', en: "The Class Monitor's Message", zh: '班长的短信' },
    summary_vi: 'Lớp trưởng gửi tin nhắn nhắc cả lớp mang sách và đến sớm.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 41,
    paragraphs: [{
      sentences: [
        { zh: '晚上八点，班长给大家发短信。', py: 'Wǎnshang bā diǎn, bānzhǎng gěi dàjiā fā duǎnxìn.', vi: 'Tám giờ tối, lớp trưởng gửi tin nhắn cho mọi người.', audio: '',
          gloss: [ { w: '班长', py: 'bānzhǎng', vi: 'lớp trưởng' }, { w: '大家', py: 'dàjiā', vi: 'mọi người' }, { w: '发短信', py: 'fā duǎnxìn', vi: 'gửi tin nhắn' } ] },
        { zh: '他说：“明天有汉语考试。”', py: 'Tā shuō: “Míngtiān yǒu Hànyǔ kǎoshì.”', vi: 'Bạn ấy nói: “Ngày mai có bài thi tiếng Hán.”', audio: '',
          gloss: [ { w: '明天', py: 'míngtiān', vi: 'ngày mai' }, { w: '汉语考试', py: 'Hànyǔ kǎoshì', vi: 'bài thi tiếng Hán' } ] },
        { zh: '请带课本和笔，别迟到。', py: 'Qǐng dài kèběn hé bǐ, bié chídào.', vi: 'Hãy mang sách giáo khoa và bút, đừng đến muộn.', audio: '',
          gloss: [ { w: '带课本和笔', py: 'dài kèběn hé bǐ', vi: 'mang sách và bút' }, { w: '别迟到', py: 'bié chídào', vi: 'đừng đến muộn' } ] },
        { zh: '同学们都回答：“知道了，谢谢！”', py: 'Tóngxuémen dōu huídá: “Zhīdào le, xièxie!”', vi: 'Các bạn học đều trả lời: “Biết rồi, cảm ơn!”', audio: '',
          gloss: [ { w: '同学们', py: 'tóngxuémen', vi: 'các bạn học' }, { w: '回答', py: 'huídá', vi: 'trả lời' }, { w: '知道了', py: 'zhīdào le', vi: 'biết rồi' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Ai gửi tin nhắn?', en: 'Who sends the message?' }, options: ['Lớp trưởng', 'Bác sĩ', 'Người phục vụ', 'Em trai'], answer: 0, explain_vi: '班长给大家发短信 = lớp trưởng gửi tin nhắn cho mọi người.' },
      { q: { vi: 'Ngày mai có gì?', en: 'What is happening tomorrow?' }, options: ['Thi tiếng Hán', 'Đi siêu thị', 'Sinh nhật', 'Chạy bộ'], answer: 0, explain_vi: '明天有汉语考试 = ngày mai có bài thi tiếng Hán.' },
      { q: { vi: 'Lớp trưởng nhắc mang gì?', en: 'What does the monitor remind them to bring?' }, options: ['Sách giáo khoa và bút', 'Ô và áo mưa', 'Táo và trứng', 'Máy tính và tivi'], answer: 0, explain_vi: '带课本和笔 = mang sách giáo khoa và bút.' }
    ]
  },
  {
    id: 'rd-2-009', level: 2, topic: 'gia-dinh',
    title: { vi: 'Cuối tuần ở nhà bà', en: "Weekend at Grandma's", zh: '周末去奶奶家' },
    summary_vi: 'Cả nhà đến thăm bà, ăn cơm và nghe bà kể chuyện cũ.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 51,
    paragraphs: [{
      sentences: [
        { zh: '周末，我们一家去奶奶家。', py: 'Zhōumò, wǒmen yì jiā qù nǎinai jiā.', vi: 'Cuối tuần, cả nhà tôi đến nhà bà.', audio: '',
          gloss: [ { w: '周末', py: 'zhōumò', vi: 'cuối tuần' }, { w: '一家', py: 'yì jiā', vi: 'cả nhà' }, { w: '奶奶家', py: 'nǎinai jiā', vi: 'nhà bà nội' } ] },
        { zh: '奶奶住在河边，房子很安静。', py: 'Nǎinai zhù zài hé biān, fángzi hěn ānjìng.', vi: 'Bà sống bên bờ sông, căn nhà rất yên tĩnh.', audio: '',
          gloss: [ { w: '住在河边', py: 'zhù zài hé biān', vi: 'sống bên bờ sông' }, { w: '安静', py: 'ānjìng', vi: 'yên tĩnh' } ] },
        { zh: '中午她做了面条，还做了一个好吃的菜。', py: 'Zhōngwǔ tā zuò le miàntiáo, hái zuò le yí ge hǎochī de cài.', vi: 'Buổi trưa bà nấu mì, còn làm một món rất ngon.', audio: '',
          gloss: [ { w: '中午', py: 'zhōngwǔ', vi: 'buổi trưa' }, { w: '面条', py: 'miàntiáo', vi: 'mì sợi' }, { w: '好吃的菜', py: 'hǎochī de cài', vi: 'món ăn ngon' } ] },
        { zh: '吃饭后，她给我们讲了一个小故事。', py: 'Chīfàn hòu, tā gěi wǒmen jiǎng le yí ge xiǎo gùshi.', vi: 'Sau bữa cơm, bà kể cho chúng tôi một câu chuyện nhỏ.', audio: '',
          gloss: [ { w: '吃饭后', py: 'chīfàn hòu', vi: 'sau bữa cơm' }, { w: '讲故事', py: 'jiǎng gùshi', vi: 'kể chuyện' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Nhà bà ở đâu?', en: "Where is grandma's house?" }, options: ['Bên bờ sông', 'Đối diện siêu thị', 'Trong bệnh viện', 'Ở sân bay'], answer: 0, explain_vi: '住在河边 = sống bên bờ sông.' },
      { q: { vi: 'Bà nấu gì vào buổi trưa?', en: 'What does grandma cook at noon?' }, options: ['Mì và một món ngon', 'Bánh bao và trà', 'Táo và trứng', 'Cà phê và cơm'], answer: 0, explain_vi: '做了面条，还做了一个好吃的菜 = nấu mì và một món ngon.' },
      { q: { vi: 'Sau bữa cơm bà làm gì?', en: 'What does grandma do after the meal?' }, options: ['Kể chuyện', 'Đi làm', 'Gửi tin nhắn', 'Đi tàu điện'], answer: 0, explain_vi: '给我们讲了一个小故事 = kể cho chúng tôi một câu chuyện nhỏ.' }
    ]
  },
  {
    id: 'rd-2-010', level: 2, topic: 'am-thuc',
    title: { vi: 'Bữa sáng ở trường', en: 'Breakfast at School', zh: '学校的早饭' },
    summary_vi: 'Một học sinh ăn sáng ở trường, chọn bánh bao và sữa vì vừa nhanh vừa tiện.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 42,
    paragraphs: [{
      sentences: [
        { zh: '小云每天很早到学校。', py: 'Xiǎo Yún měitiān hěn zǎo dào xuéxiào.', vi: 'Tiểu Vân mỗi ngày đến trường rất sớm.', audio: '',
          gloss: [ { w: '每天', py: 'měitiān', vi: 'mỗi ngày' }, { w: '很早', py: 'hěn zǎo', vi: 'rất sớm' }, { w: '到学校', py: 'dào xuéxiào', vi: 'đến trường' } ] },
        { zh: '她常常在学校吃早饭。', py: 'Tā chángcháng zài xuéxiào chī zǎofàn.', vi: 'Bạn ấy thường ăn sáng ở trường.', audio: '',
          gloss: [ { w: '常常', py: 'chángcháng', vi: 'thường xuyên' }, { w: '吃早饭', py: 'chī zǎofàn', vi: 'ăn sáng' } ] },
        { zh: '今天她买了一个包子和一杯牛奶。', py: 'Jīntiān tā mǎi le yí ge bāozi hé yì bēi niúnǎi.', vi: 'Hôm nay bạn ấy mua một cái bánh bao và một cốc sữa.', audio: '',
          gloss: [ { w: '包子', py: 'bāozi', vi: 'bánh bao' }, { w: '一杯牛奶', py: 'yì bēi niúnǎi', vi: 'một cốc sữa' } ] },
        { zh: '她觉得这样又快又方便。', py: 'Tā juéde zhèyàng yòu kuài yòu fāngbiàn.', vi: 'Bạn ấy thấy như vậy vừa nhanh vừa tiện.', audio: '',
          gloss: [ { w: '这样', py: 'zhèyàng', vi: 'như vậy' }, { w: '又快又方便', py: 'yòu kuài yòu fāngbiàn', vi: 'vừa nhanh vừa tiện' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Tiểu Vân thường ăn sáng ở đâu?', en: 'Where does Xiao Yun often eat breakfast?' }, options: ['Ở trường', 'Ở siêu thị', 'Ở bệnh viện', 'Ở ga tàu'], answer: 0, explain_vi: '在学校吃早饭 = ăn sáng ở trường.' },
      { q: { vi: 'Hôm nay bạn ấy mua gì?', en: 'What does she buy today?' }, options: ['Bánh bao và sữa', 'Cơm và rau', 'Táo và trà', 'Mì và trứng'], answer: 0, explain_vi: '买了一个包子和一杯牛奶 = mua bánh bao và một cốc sữa.' },
      { q: { vi: 'Bạn ấy nghĩ cách này thế nào?', en: 'What does she think of this way?' }, options: ['Vừa nhanh vừa tiện', 'Quá khó', 'Không sạch', 'Rất xa'], answer: 0, explain_vi: '又快又方便 = vừa nhanh vừa tiện.' }
    ]
  },
  {
    id: 'rd-2-011', level: 2, topic: 'so-thich',
    title: { vi: 'Học vẽ tranh', en: 'Learning to Paint', zh: '学画画' },
    summary_vi: 'Tiểu Hồng học vẽ mỗi thứ Bảy và được cô giáo khen.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 43,
    paragraphs: [{
      sentences: [
        { zh: '小红从小喜欢画画。', py: 'Xiǎo Hóng cóngxiǎo xǐhuān huàhuà.', vi: 'Tiểu Hồng từ nhỏ đã thích vẽ tranh.', audio: '',
          gloss: [ { w: '从小', py: 'cóngxiǎo', vi: 'từ nhỏ' }, { w: '画画', py: 'huàhuà', vi: 'vẽ tranh' } ] },
        { zh: '每个星期六，她去学画。', py: 'Měi ge xīngqīliù, tā qù xué huà.', vi: 'Mỗi thứ Bảy, bạn ấy đi học vẽ.', audio: '',
          gloss: [ { w: '每个星期六', py: 'měi ge xīngqīliù', vi: 'mỗi thứ Bảy' }, { w: '学画', py: 'xué huà', vi: 'học vẽ' } ] },
        { zh: '今天她画了一只小猫。', py: 'Jīntiān tā huà le yì zhī xiǎo māo.', vi: 'Hôm nay bạn ấy vẽ một con mèo nhỏ.', audio: '',
          gloss: [ { w: '画了', py: 'huà le', vi: 'đã vẽ' }, { w: '一只小猫', py: 'yì zhī xiǎo māo', vi: 'một con mèo nhỏ' } ] },
        { zh: '老师说她画得很好。', py: 'Lǎoshī shuō tā huà de hěn hǎo.', vi: 'Cô giáo nói bạn ấy vẽ rất đẹp.', audio: '',
          gloss: [ { w: '画得很好', py: 'huà de hěn hǎo', vi: 'vẽ rất đẹp' } ] },
        { zh: '她很高兴，想画更多的画。', py: 'Tā hěn gāoxìng, xiǎng huà gèng duō de huà.', vi: 'Bạn ấy rất vui, muốn vẽ thêm nhiều tranh.', audio: '',
          gloss: [ { w: '更多', py: 'gèng duō', vi: 'nhiều hơn' }, { w: '画', py: 'huà', vi: 'tranh/vẽ' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Tiểu Hồng thích làm gì từ nhỏ?', en: 'What has Xiao Hong liked since childhood?' }, options: ['Vẽ tranh', 'Bơi', 'Nấu ăn', 'Chạy bộ'], answer: 0, explain_vi: '从小喜欢画画 = từ nhỏ thích vẽ tranh.' },
      { q: { vi: 'Hôm nay bạn ấy vẽ gì?', en: 'What does she paint today?' }, options: ['Một con mèo nhỏ', 'Một bông hoa', 'Một con chó', 'Một ngôi nhà'], answer: 0, explain_vi: '画了一只小猫 = vẽ một con mèo nhỏ.' },
      { q: { vi: 'Cô giáo nói thế nào?', en: 'What does the teacher say?' }, options: ['Vẽ rất đẹp', 'Vẽ chưa tốt', 'Quá chậm', 'Quá nhỏ'], answer: 0, explain_vi: '画得很好 = vẽ rất đẹp.' }
    ]
  },
  {
    id: 'rd-2-012', level: 2, topic: 'du-lich',
    title: { vi: 'Một ngày ở sở thú', en: 'A Day at the Zoo', zh: '动物园的一天' },
    summary_vi: 'Bố đưa tôi đi sở thú xem nhiều con vật trong một buổi sáng vui.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 44,
    paragraphs: [{
      sentences: [
        { zh: '星期天，爸爸带我去动物园。', py: 'Xīngqītiān, bàba dài wǒ qù dòngwùyuán.', vi: 'Chủ nhật, bố đưa tôi đi sở thú.', audio: '',
          gloss: [ { w: '带我去', py: 'dài wǒ qù', vi: 'đưa tôi đi' }, { w: '动物园', py: 'dòngwùyuán', vi: 'sở thú' } ] },
        { zh: '动物园里有很多动物。', py: 'Dòngwùyuán lǐ yǒu hěn duō dòngwù.', vi: 'Trong sở thú có rất nhiều con vật.', audio: '',
          gloss: [ { w: '动物', py: 'dòngwù', vi: 'động vật/con vật' }, { w: '很多', py: 'hěn duō', vi: 'rất nhiều' } ] },
        { zh: '我看见了很多鱼，还有小鸟。', py: 'Wǒ kànjiàn le hěn duō yú, hái yǒu xiǎo niǎo.', vi: 'Tôi thấy rất nhiều cá, còn có những con chim nhỏ.', audio: '',
          gloss: [ { w: '看见', py: 'kànjiàn', vi: 'nhìn thấy' }, { w: '鱼', py: 'yú', vi: 'cá' }, { w: '小鸟', py: 'xiǎo niǎo', vi: 'chim nhỏ' } ] },
        { zh: '我们玩了一个上午。', py: 'Wǒmen wán le yí ge shàngwǔ.', vi: 'Chúng tôi chơi cả buổi sáng.', audio: '',
          gloss: [ { w: '上午', py: 'shàngwǔ', vi: 'buổi sáng' } ] },
        { zh: '我觉得这一天很有意思。', py: 'Wǒ juéde zhè yì tiān hěn yǒu yìsi.', vi: 'Tôi thấy ngày hôm đó rất thú vị.', audio: '',
          gloss: [ { w: '觉得', py: 'juéde', vi: 'cảm thấy' }, { w: '有意思', py: 'yǒu yìsi', vi: 'thú vị' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Ai đưa tôi đi sở thú?', en: 'Who takes me to the zoo?' }, options: ['Bố', 'Mẹ', 'Anh trai', 'Cô giáo'], answer: 0, explain_vi: '爸爸带我去动物园 = bố đưa tôi đi sở thú.' },
      { q: { vi: 'Trong sở thú có gì?', en: 'What is in the zoo?' }, options: ['Rất nhiều con vật', 'Rất nhiều sách', 'Rất nhiều xe', 'Rất nhiều hoa'], answer: 0, explain_vi: '有很多动物 = có rất nhiều con vật.' },
      { q: { vi: 'Tôi thấy ngày hôm đó thế nào?', en: 'How do I feel about the day?' }, options: ['Rất thú vị', 'Quá mệt', 'Không vui', 'Quá xa'], answer: 0, explain_vi: '很有意思 = rất thú vị.' }
    ]
  },
  {
    id: 'rd-2-013', level: 2, topic: 'mua-sam',
    title: { vi: 'Mua cặp sách mới', en: 'Buying a New Backpack', zh: '买新书包' },
    summary_vi: 'Cặp sách hỏng, hai mẹ con đi mua một chiếc cặp mới màu xanh.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 45,
    paragraphs: [{
      sentences: [
        { zh: '我的书包坏了。', py: 'Wǒ de shūbāo huài le.', vi: 'Cặp sách của tôi hỏng rồi.', audio: '',
          gloss: [ { w: '书包', py: 'shūbāo', vi: 'cặp sách' }, { w: '坏了', py: 'huài le', vi: 'hỏng rồi' } ] },
        { zh: '妈妈带我去商店买新的。', py: 'Māma dài wǒ qù shāngdiàn mǎi xīn de.', vi: 'Mẹ đưa tôi đi cửa hàng mua cái mới.', audio: '',
          gloss: [ { w: '商店', py: 'shāngdiàn', vi: 'cửa hàng' }, { w: '买新的', py: 'mǎi xīn de', vi: 'mua cái mới' } ] },
        { zh: '商店里的书包又多又好看。', py: 'Shāngdiàn lǐ de shūbāo yòu duō yòu hǎokàn.', vi: 'Cặp trong cửa hàng vừa nhiều vừa đẹp.', audio: '',
          gloss: [ { w: '又多又好看', py: 'yòu duō yòu hǎokàn', vi: 'vừa nhiều vừa đẹp' } ] },
        { zh: '我买了一个蓝色的书包。', py: 'Wǒ mǎi le yí ge lánsè de shūbāo.', vi: 'Tôi mua một chiếc cặp màu xanh.', audio: '',
          gloss: [ { w: '蓝色', py: 'lánsè', vi: 'màu xanh' } ] },
        { zh: '我很喜欢这个新书包。', py: 'Wǒ hěn xǐhuān zhège xīn shūbāo.', vi: 'Tôi rất thích chiếc cặp mới này.', audio: '',
          gloss: [ { w: '这个', py: 'zhège', vi: 'cái này' }, { w: '新书包', py: 'xīn shūbāo', vi: 'cặp mới' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Vì sao tôi mua cặp mới?', en: 'Why do I buy a new backpack?' }, options: ['Cặp cũ hỏng rồi', 'Mất cặp', 'Cặp quá nhỏ', 'Không thích màu'], answer: 0, explain_vi: '我的书包坏了 = cặp của tôi hỏng rồi.' },
      { q: { vi: 'Cặp trong cửa hàng thế nào?', en: 'How are the backpacks in the shop?' }, options: ['Vừa nhiều vừa đẹp', 'Rất đắt', 'Quá ít', 'Không đẹp'], answer: 0, explain_vi: '又多又好看 = vừa nhiều vừa đẹp.' },
      { q: { vi: 'Tôi mua cặp màu gì?', en: 'What color backpack do I buy?' }, options: ['Màu xanh', 'Màu đỏ', 'Màu trắng', 'Màu đen'], answer: 0, explain_vi: '蓝色的书包 = cặp màu xanh.' }
    ]
  },
  {
    id: 'rd-2-014', level: 2, topic: 'am-thuc',
    title: { vi: 'Cùng mẹ làm bánh mì', en: 'Making Bread with Mom', zh: '和妈妈做面包' },
    summary_vi: 'Buổi chiều tôi giúp mẹ làm bánh mì từ trứng và sữa.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 46,
    paragraphs: [{
      sentences: [
        { zh: '下午，我和妈妈一起做面包。', py: 'Xiàwǔ, wǒ hé māma yìqǐ zuò miànbāo.', vi: 'Buổi chiều, tôi cùng mẹ làm bánh mì.', audio: '',
          gloss: [ { w: '一起', py: 'yìqǐ', vi: 'cùng nhau' }, { w: '做面包', py: 'zuò miànbāo', vi: 'làm bánh mì' } ] },
        { zh: '妈妈先准备好鸡蛋和牛奶。', py: 'Māma xiān zhǔnbèi hǎo jīdàn hé niúnǎi.', vi: 'Mẹ chuẩn bị sẵn trứng và sữa trước.', audio: '',
          gloss: [ { w: '先', py: 'xiān', vi: 'trước/đầu tiên' }, { w: '准备好', py: 'zhǔnbèi hǎo', vi: 'chuẩn bị sẵn' }, { w: '鸡蛋', py: 'jīdàn', vi: 'trứng gà' } ] },
        { zh: '我帮她做，觉得很有意思。', py: 'Wǒ bāng tā zuò, juéde hěn yǒu yìsi.', vi: 'Tôi giúp mẹ làm, thấy rất thú vị.', audio: '',
          gloss: [ { w: '帮她做', py: 'bāng tā zuò', vi: 'giúp mẹ làm' }, { w: '有意思', py: 'yǒu yìsi', vi: 'thú vị' } ] },
        { zh: '半个小时以后，面包好了。', py: 'Bàn ge xiǎoshí yǐhòu, miànbāo hǎo le.', vi: 'Nửa tiếng sau, bánh mì xong.', audio: '',
          gloss: [ { w: '半个小时以后', py: 'bàn ge xiǎoshí yǐhòu', vi: 'nửa tiếng sau' } ] },
        { zh: '面包很好吃，我们都很高兴。', py: 'Miànbāo hěn hǎochī, wǒmen dōu hěn gāoxìng.', vi: 'Bánh mì rất ngon, chúng tôi đều rất vui.', audio: '',
          gloss: [ { w: '很好吃', py: 'hěn hǎochī', vi: 'rất ngon' }, { w: '都', py: 'dōu', vi: 'đều' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Tôi và mẹ làm gì?', en: 'What do mom and I make?' }, options: ['Làm bánh mì', 'Vẽ tranh', 'Đi sở thú', 'Dọn nhà'], answer: 0, explain_vi: '一起做面包 = cùng làm bánh mì.' },
      { q: { vi: 'Mẹ chuẩn bị gì?', en: 'What does mom prepare?' }, options: ['Trứng và sữa', 'Rau và thịt', 'Táo và trà', 'Sách và bút'], answer: 0, explain_vi: '准备好鸡蛋和牛奶 = chuẩn bị trứng và sữa.' },
      { q: { vi: 'Bánh mì thế nào?', en: 'How is the bread?' }, options: ['Rất ngon', 'Quá cay', 'Không ngon', 'Rất đắt'], answer: 0, explain_vi: '面包很好吃 = bánh mì rất ngon.' }
    ]
  },
  {
    id: 'rd-2-015', level: 2, topic: 'doi-song',
    title: { vi: 'Tìm điện thoại', en: 'Looking for the Phone', zh: '找手机' },
    summary_vi: 'Tiểu Minh tìm điện thoại khắp nơi và cuối cùng thấy nó trên giường.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 47,
    paragraphs: [{
      sentences: [
        { zh: '早上，小明找不到他的手机。', py: 'Zǎoshang, Xiǎo Míng zhǎo bu dào tā de shǒujī.', vi: 'Buổi sáng, Tiểu Minh không tìm thấy điện thoại.', audio: '',
          gloss: [ { w: '找不到', py: 'zhǎo bu dào', vi: 'không tìm thấy' }, { w: '手机', py: 'shǒujī', vi: 'điện thoại' } ] },
        { zh: '他在桌子上、椅子上都找了。', py: 'Tā zài zhuōzi shang, yǐzi shang dōu zhǎo le.', vi: 'Bạn ấy tìm trên bàn, trên ghế đều rồi.', audio: '',
          gloss: [ { w: '桌子上', py: 'zhuōzi shang', vi: 'trên bàn' }, { w: '椅子', py: 'yǐzi', vi: 'ghế' } ] },
        { zh: '妈妈说：“你打个电话试试。”', py: 'Māma shuō: “Nǐ dǎ ge diànhuà shìshi.”', vi: 'Mẹ nói: “Con gọi thử một cuộc xem.”', audio: '',
          gloss: [ { w: '打电话', py: 'dǎ diànhuà', vi: 'gọi điện' }, { w: '试试', py: 'shìshi', vi: 'thử xem' } ] },
        { zh: '后来，他在床上找到了手机。', py: 'Hòulái, tā zài chuáng shang zhǎodào le shǒujī.', vi: 'Sau đó, bạn ấy tìm thấy điện thoại trên giường.', audio: '',
          gloss: [ { w: '后来', py: 'hòulái', vi: 'sau đó' }, { w: '床上', py: 'chuáng shang', vi: 'trên giường' }, { w: '找到了', py: 'zhǎodào le', vi: 'đã tìm thấy' } ] },
        { zh: '小明很高兴，谢谢妈妈。', py: 'Xiǎo Míng hěn gāoxìng, xièxie māma.', vi: 'Tiểu Minh rất vui, cảm ơn mẹ.', audio: '',
          gloss: [ { w: '高兴', py: 'gāoxìng', vi: 'vui' }, { w: '谢谢', py: 'xièxie', vi: 'cảm ơn' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Tiểu Minh tìm gì?', en: 'What is Xiao Ming looking for?' }, options: ['Điện thoại', 'Sách', 'Chìa khóa', 'Cặp'], answer: 0, explain_vi: '找不到他的手机 = không tìm thấy điện thoại.' },
      { q: { vi: 'Cuối cùng điện thoại ở đâu?', en: 'Where is the phone in the end?' }, options: ['Trên giường', 'Trên bàn', 'Trên ghế', 'Trong cặp'], answer: 0, explain_vi: '在床上找到了手机 = tìm thấy điện thoại trên giường.' },
      { q: { vi: 'Ai giúp Tiểu Minh?', en: 'Who helps Xiao Ming?' }, options: ['Mẹ', 'Bố', 'Cô giáo', 'Bạn'], answer: 0, explain_vi: '妈妈说…打个电话试试 = mẹ bảo gọi thử.' }
    ]
  },
  {
    id: 'rd-2-016', level: 2, topic: 'ban-be',
    title: { vi: 'Viết thư cho bạn', en: 'Writing a Letter to a Friend', zh: '给朋友写信' },
    summary_vi: 'Tôi viết thư cho một người bạn ở xa và mong bạn ấy sớm hồi âm.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 48,
    paragraphs: [{
      sentences: [
        { zh: '我有一个好朋友，他住得很远。', py: 'Wǒ yǒu yí ge hǎo péngyǒu, tā zhù de hěn yuǎn.', vi: 'Tôi có một người bạn tốt, bạn ấy sống ở rất xa.', audio: '',
          gloss: [ { w: '好朋友', py: 'hǎo péngyǒu', vi: 'bạn tốt' }, { w: '住得很远', py: 'zhù de hěn yuǎn', vi: 'sống ở rất xa' } ] },
        { zh: '今天，我给他写信。', py: 'Jīntiān, wǒ gěi tā xiě xìn.', vi: 'Hôm nay, tôi viết thư cho bạn ấy.', audio: '',
          gloss: [ { w: '给他', py: 'gěi tā', vi: 'cho bạn ấy' }, { w: '写信', py: 'xiě xìn', vi: 'viết thư' } ] },
        { zh: '我在信里说了我的学校和朋友。', py: 'Wǒ zài xìn lǐ shuō le wǒ de xuéxiào hé péngyǒu.', vi: 'Trong thư tôi kể về trường và bạn bè của mình.', audio: '',
          gloss: [ { w: '信里', py: 'xìn lǐ', vi: 'trong thư' }, { w: '学校', py: 'xuéxiào', vi: 'trường học' } ] },
        { zh: '我还问他最近好不好。', py: 'Wǒ hái wèn tā zuìjìn hǎo bu hǎo.', vi: 'Tôi còn hỏi dạo này bạn ấy có khỏe không.', audio: '',
          gloss: [ { w: '还问', py: 'hái wèn', vi: 'còn hỏi' }, { w: '最近', py: 'zuìjìn', vi: 'dạo này/gần đây' } ] },
        { zh: '我想他快点回信。', py: 'Wǒ xiǎng tā kuài diǎn huí xìn.', vi: 'Tôi mong bạn ấy sớm hồi âm.', audio: '',
          gloss: [ { w: '快点', py: 'kuài diǎn', vi: 'nhanh lên/sớm' }, { w: '回信', py: 'huí xìn', vi: 'hồi âm/trả lời thư' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Bạn của tôi sống ở đâu?', en: 'Where does my friend live?' }, options: ['Ở rất xa', 'Gần nhà tôi', 'Trong trường', 'Bên bờ sông'], answer: 0, explain_vi: '他住得很远 = bạn ấy sống ở rất xa.' },
      { q: { vi: 'Tôi viết gì trong thư?', en: 'What do I write in the letter?' }, options: ['Về trường học và bạn bè', 'Về thời tiết', 'Về món ăn', 'Về con mèo'], answer: 0, explain_vi: '说了我的学校和朋友 = kể về trường và bạn bè.' },
      { q: { vi: 'Tôi mong điều gì?', en: 'What do I hope for?' }, options: ['Bạn sớm hồi âm', 'Bạn đến nhà', 'Bạn gọi điện', 'Bạn đi học'], answer: 0, explain_vi: '想他快点回信 = mong bạn ấy sớm hồi âm.' }
    ]
  },
  {
    id: 'rd-2-017', level: 2, topic: 'doi-song',
    title: { vi: 'Nuôi cá nhỏ', en: 'Keeping Little Fish', zh: '养小鱼' },
    summary_vi: 'Chị gái mua cho tôi hai con cá nhỏ, mỗi sáng tôi cho chúng ăn.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-13',
    est_words: 46,
    paragraphs: [{
      sentences: [
        { zh: '上个月，姐姐给我买了两条小鱼。', py: 'Shàng ge yuè, jiějie gěi wǒ mǎi le liǎng tiáo xiǎo yú.', vi: 'Tháng trước, chị gái mua cho tôi hai con cá nhỏ.', audio: '',
          gloss: [ { w: '上个月', py: 'shàng ge yuè', vi: 'tháng trước' }, { w: '两条小鱼', py: 'liǎng tiáo xiǎo yú', vi: 'hai con cá nhỏ' } ] },
        { zh: '两条鱼在一个大杯子里。', py: 'Liǎng tiáo yú zài yí ge dà bēizi lǐ.', vi: 'Hai con cá ở trong một cái cốc to.', audio: '',
          gloss: [ { w: '鱼', py: 'yú', vi: 'cá' }, { w: '大杯子里', py: 'dà bēizi lǐ', vi: 'trong cốc to' } ] },
        { zh: '每天早上，我给它们一点东西吃。', py: 'Měitiān zǎoshang, wǒ gěi tāmen yìdiǎn dōngxi chī.', vi: 'Mỗi sáng, tôi cho chúng ăn một chút.', audio: '',
          gloss: [ { w: '它们', py: 'tāmen', vi: 'chúng (vật)' }, { w: '一点东西', py: 'yìdiǎn dōngxi', vi: 'một chút đồ' } ] },
        { zh: '它们很小，也很好看。', py: 'Tāmen hěn xiǎo, yě hěn hǎokàn.', vi: 'Chúng rất nhỏ, cũng rất xinh.', audio: '',
          gloss: [ { w: '很小', py: 'hěn xiǎo', vi: 'rất nhỏ' }, { w: '好看', py: 'hǎokàn', vi: 'đẹp/xinh' } ] },
        { zh: '我很喜欢这两条小鱼。', py: 'Wǒ hěn xǐhuān zhè liǎng tiáo xiǎo yú.', vi: 'Tôi rất thích hai con cá nhỏ này.', audio: '',
          gloss: [ { w: '喜欢', py: 'xǐhuān', vi: 'thích' }, { w: '这两条', py: 'zhè liǎng tiáo', vi: 'hai con này' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Ai mua cá cho tôi?', en: 'Who buys me the fish?' }, options: ['Chị gái', 'Mẹ', 'Bố', 'Anh trai'], answer: 0, explain_vi: '姐姐给我买了两条小鱼 = chị gái mua cho tôi hai con cá.' },
      { q: { vi: 'Tôi nuôi mấy con cá?', en: 'How many fish do I keep?' }, options: ['Hai con', 'Một con', 'Ba con', 'Bốn con'], answer: 0, explain_vi: '两条小鱼 = hai con cá nhỏ.' },
      { q: { vi: 'Mỗi sáng tôi làm gì?', en: 'What do I do every morning?' }, options: ['Cho cá ăn', 'Rửa cốc', 'Tưới hoa', 'Đọc sách'], answer: 0, explain_vi: '给它们一点东西吃 = cho chúng ăn một chút.' }
    ]
  }
];
