// ═══════════════════════════════════════════════════════
// READER DATA — HSK 3.0 cấp 1 (Graded Reader Việt-first, Phase A1)
// Schema chốt tại docs/plans/a1-reader-investigation.md §C
//   READER_DATA[level] = [ passage, … ]
//   passage = { id, level, topic, title{vi,en,zh}, summary_vi, source,
//               reviewed_by, reviewed_at, est_words,
//               paragraphs:[ { sentences:[ {zh,py,vi,audio,gloss[]} ] } ],
//               questions:[ {q{vi,en}, options[], answer, explain_vi} ] }
// Quy ước: var dynamic-injected (KHÔNG const) — theo CLAUDE.md.
// gloss theo CỤM TỪ (vd 起床=thức dậy), audio:'' → Reader dùng Web Speech TTS.
// source:'seed-handcraft' = bài mồi viết tay, CHỜ chủ dự án duyệt (điền reviewed_*).
// ═══════════════════════════════════════════════════════

var READER_DATA = (typeof READER_DATA !== 'undefined') ? READER_DATA : {};

READER_DATA[1] = [
  {
    id: 'rd-1-001', level: 1, topic: 'doi-song',
    title: { vi: 'Buổi sáng của tôi', en: 'My Morning', zh: '我的早晨' },
    summary_vi: 'Một buổi sáng bình thường: thức dậy, ăn sáng và đi học.',
    source: 'seed-handcraft', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 26,
    paragraphs: [{
      sentences: [
        { zh: '我每天六点起床。', py: 'Wǒ měitiān liù diǎn qǐchuáng.', vi: 'Mỗi ngày tôi dậy lúc sáu giờ.', audio: '',
          gloss: [ { w: '每天', py: 'měitiān', vi: 'mỗi ngày' }, { w: '六点', py: 'liù diǎn', vi: 'sáu giờ' }, { w: '起床', py: 'qǐchuáng', vi: 'thức dậy' } ] },
        { zh: '我吃早饭，喝牛奶。', py: 'Wǒ chī zǎofàn, hē niúnǎi.', vi: 'Tôi ăn sáng, uống sữa.', audio: '',
          gloss: [ { w: '早饭', py: 'zǎofàn', vi: 'bữa sáng' }, { w: '喝', py: 'hē', vi: 'uống' }, { w: '牛奶', py: 'niúnǎi', vi: 'sữa bò' } ] },
        { zh: '七点我去学校。', py: 'Qī diǎn wǒ qù xuéxiào.', vi: 'Bảy giờ tôi đi học.', audio: '',
          gloss: [ { w: '七点', py: 'qī diǎn', vi: 'bảy giờ' }, { w: '去', py: 'qù', vi: 'đi' }, { w: '学校', py: 'xuéxiào', vi: 'trường học' } ] },
        { zh: '我很喜欢学习。', py: 'Wǒ hěn xǐhuān xuéxí.', vi: 'Tôi rất thích học.', audio: '',
          gloss: [ { w: '喜欢', py: 'xǐhuān', vi: 'thích' }, { w: '学习', py: 'xuéxí', vi: 'học tập' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Tôi dậy lúc mấy giờ?', en: 'What time do I wake up?' }, options: ['5 giờ', '6 giờ', '7 giờ', '8 giờ'], answer: 1, explain_vi: '六点起床 = dậy lúc 6 giờ.' },
      { q: { vi: 'Buổi sáng tôi uống gì?', en: 'What do I drink in the morning?' }, options: ['Sữa', 'Trà', 'Nước', 'Cà phê'], answer: 0, explain_vi: '喝牛奶 = uống sữa.' }
    ]
  },
  {
    id: 'rd-1-002', level: 1, topic: 'gia-dinh',
    title: { vi: 'Gia đình tôi', en: 'My Family', zh: '我的家' },
    summary_vi: 'Giới thiệu các thành viên trong gia đình.',
    source: 'seed-handcraft', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 24,
    paragraphs: [{
      sentences: [
        { zh: '我家有四个人。', py: 'Wǒ jiā yǒu sì ge rén.', vi: 'Nhà tôi có bốn người.', audio: '',
          gloss: [ { w: '家', py: 'jiā', vi: 'nhà, gia đình' }, { w: '四个人', py: 'sì ge rén', vi: 'bốn người' } ] },
        { zh: '爸爸、妈妈、哥哥和我。', py: 'Bàba, māma, gēge hé wǒ.', vi: 'Bố, mẹ, anh trai và tôi.', audio: '',
          gloss: [ { w: '爸爸', py: 'bàba', vi: 'bố' }, { w: '妈妈', py: 'māma', vi: 'mẹ' }, { w: '哥哥', py: 'gēge', vi: 'anh trai' }, { w: '和', py: 'hé', vi: 'và' } ] },
        { zh: '爸爸是老师。', py: 'Bàba shì lǎoshī.', vi: 'Bố là giáo viên.', audio: '',
          gloss: [ { w: '是', py: 'shì', vi: 'là' }, { w: '老师', py: 'lǎoshī', vi: 'giáo viên' } ] },
        { zh: '我们都很好。', py: 'Wǒmen dōu hěn hǎo.', vi: 'Chúng tôi đều rất khỏe.', audio: '',
          gloss: [ { w: '我们', py: 'wǒmen', vi: 'chúng tôi' }, { w: '都', py: 'dōu', vi: 'đều' }, { w: '很好', py: 'hěn hǎo', vi: 'rất tốt/khỏe' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Nhà tôi có mấy người?', en: 'How many people in my family?' }, options: ['3', '4', '5', '6'], answer: 1, explain_vi: '四个人 = bốn người.' },
      { q: { vi: 'Bố làm nghề gì?', en: "What is dad's job?" }, options: ['Giáo viên', 'Bác sĩ', 'Học sinh', 'Công nhân'], answer: 0, explain_vi: '爸爸是老师 = bố là giáo viên.' }
    ]
  },
  {
    id: 'rd-1-003', level: 1, topic: 'hoc-tap',
    title: { vi: 'Một ngày ở trường', en: 'A Day at School', zh: '在学校的一天' },
    summary_vi: 'Đi học cùng bạn, học tiếng Hán và ăn trưa.',
    source: 'seed-handcraft', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 28,
    paragraphs: [{
      sentences: [
        { zh: '今天天气很好。', py: 'Jīntiān tiānqì hěn hǎo.', vi: 'Hôm nay thời tiết rất đẹp.', audio: '',
          gloss: [ { w: '今天', py: 'jīntiān', vi: 'hôm nay' }, { w: '天气', py: 'tiānqì', vi: 'thời tiết' }, { w: '很好', py: 'hěn hǎo', vi: 'rất tốt/đẹp' } ] },
        { zh: '我和朋友去学校。', py: 'Wǒ hé péngyǒu qù xuéxiào.', vi: 'Tôi và bạn đi học.', audio: '',
          gloss: [ { w: '朋友', py: 'péngyǒu', vi: 'bạn bè' }, { w: '去', py: 'qù', vi: 'đi' } ] },
        { zh: '老师教我们汉语。', py: 'Lǎoshī jiāo wǒmen Hànyǔ.', vi: 'Cô giáo dạy chúng tôi tiếng Hán.', audio: '',
          gloss: [ { w: '教', py: 'jiāo', vi: 'dạy' }, { w: '汉语', py: 'Hànyǔ', vi: 'tiếng Hán' } ] },
        { zh: '中午我们一起吃饭。', py: 'Zhōngwǔ wǒmen yìqǐ chīfàn.', vi: 'Buổi trưa chúng tôi cùng ăn cơm.', audio: '',
          gloss: [ { w: '中午', py: 'zhōngwǔ', vi: 'buổi trưa' }, { w: '一起', py: 'yìqǐ', vi: 'cùng nhau' }, { w: '吃饭', py: 'chīfàn', vi: 'ăn cơm' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Hôm nay thời tiết thế nào?', en: "How's the weather today?" }, options: ['Rất đẹp', 'Mưa', 'Lạnh', 'Nóng'], answer: 0, explain_vi: '天气很好 = thời tiết đẹp.' },
      { q: { vi: 'Cô giáo dạy gì?', en: 'What does the teacher teach?' }, options: ['Tiếng Hán', 'Tiếng Anh', 'Toán', 'Âm nhạc'], answer: 0, explain_vi: '教我们汉语 = dạy tiếng Hán.' }
    ]
  },
  {
    id: 'rd-1-004', level: 1, topic: 'so-thich',
    title: { vi: 'Tôi thích đọc sách', en: 'I Like Reading', zh: '我喜欢看书' },
    summary_vi: 'Cuối tuần đi nhà sách và mua sách thú vị.',
    source: 'seed-handcraft', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 26,
    paragraphs: [{
      sentences: [
        { zh: '我很喜欢看书。', py: 'Wǒ hěn xǐhuān kàn shū.', vi: 'Tôi rất thích đọc sách.', audio: '',
          gloss: [ { w: '喜欢', py: 'xǐhuān', vi: 'thích' }, { w: '看书', py: 'kàn shū', vi: 'đọc sách' } ] },
        { zh: '星期天我去书店。', py: 'Xīngqītiān wǒ qù shūdiàn.', vi: 'Chủ nhật tôi đi nhà sách.', audio: '',
          gloss: [ { w: '星期天', py: 'xīngqītiān', vi: 'chủ nhật' }, { w: '书店', py: 'shūdiàn', vi: 'hiệu sách' } ] },
        { zh: '我买了三本书。', py: 'Wǒ mǎi le sān běn shū.', vi: 'Tôi mua ba quyển sách.', audio: '',
          gloss: [ { w: '买', py: 'mǎi', vi: 'mua' }, { w: '三本书', py: 'sān běn shū', vi: 'ba quyển sách' } ] },
        { zh: '这些书很有意思。', py: 'Zhèxiē shū hěn yǒu yìsi.', vi: 'Những quyển sách này rất thú vị.', audio: '',
          gloss: [ { w: '这些', py: 'zhèxiē', vi: 'những… này' }, { w: '有意思', py: 'yǒu yìsi', vi: 'thú vị' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Chủ nhật tôi đi đâu?', en: 'Where do I go on Sunday?' }, options: ['Hiệu sách', 'Trường học', 'Công viên', 'Bệnh viện'], answer: 0, explain_vi: '去书店 = đi hiệu sách.' },
      { q: { vi: 'Tôi mua mấy quyển sách?', en: 'How many books did I buy?' }, options: ['2 quyển', '3 quyển', '4 quyển', '5 quyển'], answer: 1, explain_vi: '买了三本书 = mua 3 quyển.' }
    ]
  },
  {
    id: 'rd-1-005', level: 1, topic: 'doi-song',
    title: { vi: 'Con mèo nhỏ', en: 'The Little Cat', zh: '小猫' },
    summary_vi: 'Một con mèo nhỏ trong nhà, thích uống nước và ngủ trong phòng.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 27,
    paragraphs: [{
      sentences: [
        { zh: '我家有一只小猫。', py: 'Wǒ jiā yǒu yì zhī xiǎo māo.', vi: 'Nhà tôi có một con mèo nhỏ.', audio: '',
          gloss: [ { w: '我家', py: 'wǒ jiā', vi: 'nhà tôi' }, { w: '一只小猫', py: 'yì zhī xiǎo māo', vi: 'một con mèo nhỏ' } ] },
        { zh: '它叫小白。', py: 'Tā jiào Xiǎo Bái.', vi: 'Nó tên là Tiểu Bạch.', audio: '',
          gloss: [ { w: '叫', py: 'jiào', vi: 'tên là, gọi là' }, { w: '小白', py: 'Xiǎo Bái', vi: 'Tiểu Bạch' } ] },
        { zh: '小白喜欢喝水。', py: 'Xiǎo Bái xǐhuān hē shuǐ.', vi: 'Tiểu Bạch thích uống nước.', audio: '',
          gloss: [ { w: '喜欢', py: 'xǐhuān', vi: 'thích' }, { w: '喝水', py: 'hē shuǐ', vi: 'uống nước' } ] },
        { zh: '晚上它在我房间里睡觉。', py: 'Wǎnshang tā zài wǒ fángjiān lǐ shuìjiào.', vi: 'Buổi tối nó ngủ trong phòng tôi.', audio: '',
          gloss: [ { w: '晚上', py: 'wǎnshang', vi: 'buổi tối' }, { w: '房间里', py: 'fángjiān lǐ', vi: 'trong phòng' }, { w: '睡觉', py: 'shuìjiào', vi: 'ngủ' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Nhà tôi có con vật gì?', en: 'What animal does my family have?' }, options: ['Một con chó', 'Một con mèo nhỏ', 'Một con chim', 'Một con cá'], answer: 1, explain_vi: '我家有一只小猫 = nhà tôi có một con mèo nhỏ.' },
      { q: { vi: 'Tiểu Bạch thích làm gì?', en: 'What does Xiao Bai like to do?' }, options: ['Uống nước', 'Ăn cơm', 'Xem tivi', 'Đi học'], answer: 0, explain_vi: '小白喜欢喝水 = Tiểu Bạch thích uống nước.' }
    ]
  },
  {
    id: 'rd-1-006', level: 1, topic: 'hoc-tap',
    title: { vi: 'Học chữ Hán', en: 'Learning Hanzi', zh: '学汉字' },
    summary_vi: 'Một ngày học chữ Hán và chơi bóng cùng bạn sau giờ học.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 27,
    paragraphs: [{
      sentences: [
        { zh: '今天天气很好。', py: 'Jīntiān tiānqì hěn hǎo.', vi: 'Hôm nay thời tiết rất đẹp.', audio: '',
          gloss: [ { w: '今天', py: 'jīntiān', vi: 'hôm nay' }, { w: '天气', py: 'tiānqì', vi: 'thời tiết' }, { w: '很好', py: 'hěn hǎo', vi: 'rất tốt/đẹp' } ] },
        { zh: '我们去学校。', py: 'Wǒmen qù xuéxiào.', vi: 'Chúng tôi đi học.', audio: '',
          gloss: [ { w: '我们', py: 'wǒmen', vi: 'chúng tôi' }, { w: '去学校', py: 'qù xuéxiào', vi: 'đi học/đến trường' } ] },
        { zh: '老师教我们写汉字。', py: 'Lǎoshī jiāo wǒmen xiě Hànzì.', vi: 'Cô giáo dạy chúng tôi viết chữ Hán.', audio: '',
          gloss: [ { w: '老师', py: 'lǎoshī', vi: 'giáo viên' }, { w: '写汉字', py: 'xiě Hànzì', vi: 'viết chữ Hán' } ] },
        { zh: '下午我和同学打球。', py: 'Xiàwǔ wǒ hé tóngxué dǎ qiú.', vi: 'Buổi chiều tôi và bạn học chơi bóng.', audio: '',
          gloss: [ { w: '下午', py: 'xiàwǔ', vi: 'buổi chiều' }, { w: '同学', py: 'tóngxué', vi: 'bạn học' }, { w: '打球', py: 'dǎ qiú', vi: 'chơi bóng' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Cô giáo dạy chúng tôi viết gì?', en: 'What does the teacher teach us to write?' }, options: ['Chữ Hán', 'Tên người', 'Số điện thoại', 'Bản đồ'], answer: 0, explain_vi: '老师教我们写汉字 = cô giáo dạy chúng tôi viết chữ Hán.' },
      { q: { vi: 'Buổi chiều tôi làm gì với bạn học?', en: 'What do I do with classmates in the afternoon?' }, options: ['Đọc sách', 'Chơi bóng', 'Uống trà', 'Xem phim'], answer: 1, explain_vi: '下午我和同学打球 = buổi chiều tôi và bạn học chơi bóng.' }
    ]
  },
  {
    id: 'rd-1-007', level: 1, topic: 'mua-sam',
    title: { vi: 'Mua táo', en: 'Buying Apples', zh: '买苹果' },
    summary_vi: 'Đi cửa hàng cùng mẹ, mua táo đỏ và mang về nhà.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 31,
    paragraphs: [{
      sentences: [
        { zh: '妈妈带我去商店。', py: 'Māma dài wǒ qù shāngdiàn.', vi: 'Mẹ đưa tôi đi cửa hàng.', audio: '',
          gloss: [ { w: '妈妈', py: 'māma', vi: 'mẹ' }, { w: '带我去', py: 'dài wǒ qù', vi: 'đưa tôi đi' }, { w: '商店', py: 'shāngdiàn', vi: 'cửa hàng' } ] },
        { zh: '苹果很红，也很甜。', py: 'Píngguǒ hěn hóng, yě hěn tián.', vi: 'Táo rất đỏ, cũng rất ngọt.', audio: '',
          gloss: [ { w: '苹果', py: 'píngguǒ', vi: 'quả táo' }, { w: '很红', py: 'hěn hóng', vi: 'rất đỏ' }, { w: '很甜', py: 'hěn tián', vi: 'rất ngọt' } ] },
        { zh: '我们买了两个苹果。', py: 'Wǒmen mǎi le liǎng ge píngguǒ.', vi: 'Chúng tôi mua hai quả táo.', audio: '',
          gloss: [ { w: '买了', py: 'mǎi le', vi: 'đã mua' }, { w: '两个苹果', py: 'liǎng ge píngguǒ', vi: 'hai quả táo' } ] },
        { zh: '回家后，我给爸爸一个。', py: 'Huí jiā hòu, wǒ gěi bàba yí ge.', vi: 'Sau khi về nhà, tôi cho bố một quả.', audio: '',
          gloss: [ { w: '回家后', py: 'huí jiā hòu', vi: 'sau khi về nhà' }, { w: '给爸爸', py: 'gěi bàba', vi: 'cho bố' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Tôi đi đâu cùng mẹ?', en: 'Where do I go with mom?' }, options: ['Cửa hàng', 'Trường học', 'Bệnh viện', 'Rạp phim'], answer: 0, explain_vi: '妈妈带我去商店 = mẹ đưa tôi đi cửa hàng.' },
      { q: { vi: 'Chúng tôi mua mấy quả táo?', en: 'How many apples do we buy?' }, options: ['Một quả', 'Hai quả', 'Ba quả', 'Bốn quả'], answer: 1, explain_vi: '买了两个苹果 = mua hai quả táo.' }
    ]
  },
  {
    id: 'rd-1-008', level: 1, topic: 'ban-be',
    title: { vi: 'Gọi điện cho bạn', en: 'Calling a Friend', zh: '给朋友打电话' },
    summary_vi: 'Gọi điện rủ bạn đến nhà uống trà.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 30,
    paragraphs: [{
      sentences: [
        { zh: '今天我给朋友打电话。', py: 'Jīntiān wǒ gěi péngyǒu dǎ diànhuà.', vi: 'Hôm nay tôi gọi điện cho bạn.', audio: '',
          gloss: [ { w: '今天', py: 'jīntiān', vi: 'hôm nay' }, { w: '给朋友', py: 'gěi péngyǒu', vi: 'cho bạn' }, { w: '打电话', py: 'dǎ diànhuà', vi: 'gọi điện thoại' } ] },
        { zh: '她在家看电视。', py: 'Tā zài jiā kàn diànshì.', vi: 'Bạn ấy đang ở nhà xem tivi.', audio: '',
          gloss: [ { w: '在家', py: 'zài jiā', vi: 'ở nhà' }, { w: '看电视', py: 'kàn diànshì', vi: 'xem tivi' } ] },
        { zh: '我问她：“你想喝茶吗？”', py: 'Wǒ wèn tā: “Nǐ xiǎng hē chá ma?”', vi: 'Tôi hỏi bạn ấy: “Bạn muốn uống trà không?”', audio: '',
          gloss: [ { w: '问她', py: 'wèn tā', vi: 'hỏi bạn ấy' }, { w: '想喝茶', py: 'xiǎng hē chá', vi: 'muốn uống trà' } ] },
        { zh: '她说：“想，我马上来。”', py: 'Tā shuō: “Xiǎng, wǒ mǎshàng lái.”', vi: 'Bạn ấy nói: “Muốn, tôi đến ngay.”', audio: '',
          gloss: [ { w: '她说', py: 'tā shuō', vi: 'bạn ấy nói' }, { w: '马上来', py: 'mǎshàng lái', vi: 'đến ngay' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Bạn tôi đang làm gì?', en: 'What is my friend doing?' }, options: ['Xem tivi', 'Đi học', 'Ngủ', 'Mua sách'], answer: 0, explain_vi: '她在家看电视 = bạn ấy ở nhà xem tivi.' },
      { q: { vi: 'Tôi rủ bạn uống gì?', en: 'What do I invite my friend to drink?' }, options: ['Nước', 'Trà', 'Sữa', 'Cà phê'], answer: 1, explain_vi: '你想喝茶吗 = bạn muốn uống trà không?' }
    ]
  },
  {
    id: 'rd-1-009', level: 1, topic: 'gia-dinh',
    title: { vi: 'Sinh nhật vui', en: 'A Happy Birthday', zh: '快乐的生日' },
    summary_vi: 'Một sinh nhật đơn giản ở nhà với mì, trái cây và gia đình.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 25,
    paragraphs: [{
      sentences: [
        { zh: '今天是我的生日。', py: 'Jīntiān shì wǒ de shēngrì.', vi: 'Hôm nay là sinh nhật của tôi.', audio: '',
          gloss: [ { w: '今天', py: 'jīntiān', vi: 'hôm nay' }, { w: '我的生日', py: 'wǒ de shēngrì', vi: 'sinh nhật của tôi' } ] },
        { zh: '妈妈做了面条。', py: 'Māma zuò le miàntiáo.', vi: 'Mẹ làm mì.', audio: '',
          gloss: [ { w: '做了', py: 'zuò le', vi: 'đã làm/nấu' }, { w: '面条', py: 'miàntiáo', vi: 'mì sợi' } ] },
        { zh: '爸爸买了水果。', py: 'Bàba mǎi le shuǐguǒ.', vi: 'Bố mua trái cây.', audio: '',
          gloss: [ { w: '买了', py: 'mǎi le', vi: 'đã mua' }, { w: '水果', py: 'shuǐguǒ', vi: 'trái cây' } ] },
        { zh: '我们都很高兴。', py: 'Wǒmen dōu hěn gāoxìng.', vi: 'Chúng tôi đều rất vui.', audio: '',
          gloss: [ { w: '我们都', py: 'wǒmen dōu', vi: 'chúng tôi đều' }, { w: '很高兴', py: 'hěn gāoxìng', vi: 'rất vui' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Hôm nay là ngày gì của tôi?', en: 'What day is it for me today?' }, options: ['Sinh nhật', 'Ngày thi', 'Ngày đi học', 'Ngày đi chơi'], answer: 0, explain_vi: '今天是我的生日 = hôm nay là sinh nhật của tôi.' },
      { q: { vi: 'Mẹ làm món gì?', en: 'What does mom make?' }, options: ['Cơm', 'Mì', 'Bánh bao', 'Trà'], answer: 1, explain_vi: '妈妈做了面条 = mẹ làm mì.' }
    ]
  },
  {
    id: 'rd-1-010', level: 1, topic: 'am-thuc',
    title: { vi: 'Ăn trưa ở quán', en: 'Lunch at a Restaurant', zh: '在饭店吃午饭' },
    summary_vi: 'Cả nhà đi ăn trưa, gọi cơm và món không quá cay.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 30,
    paragraphs: [{
      sentences: [
        { zh: '今天中午，我们去饭店。', py: 'Jīntiān zhōngwǔ, wǒmen qù fàndiàn.', vi: 'Trưa nay chúng tôi đi nhà hàng.', audio: '',
          gloss: [ { w: '今天中午', py: 'jīntiān zhōngwǔ', vi: 'trưa nay' }, { w: '去饭店', py: 'qù fàndiàn', vi: 'đi nhà hàng' } ] },
        { zh: '爸爸点了米饭和菜。', py: 'Bàba diǎn le mǐfàn hé cài.', vi: 'Bố gọi cơm và món ăn.', audio: '',
          gloss: [ { w: '点了', py: 'diǎn le', vi: 'đã gọi món' }, { w: '米饭和菜', py: 'mǐfàn hé cài', vi: 'cơm và món ăn' } ] },
        { zh: '这个菜不太辣。', py: 'Zhège cài bú tài là.', vi: 'Món này không cay lắm.', audio: '',
          gloss: [ { w: '这个菜', py: 'zhège cài', vi: 'món này' }, { w: '不太辣', py: 'bú tài là', vi: 'không cay lắm' } ] },
        { zh: '弟弟吃得很高兴。', py: 'Dìdi chī de hěn gāoxìng.', vi: 'Em trai ăn rất vui vẻ.', audio: '',
          gloss: [ { w: '弟弟', py: 'dìdi', vi: 'em trai' }, { w: '吃得很高兴', py: 'chī de hěn gāoxìng', vi: 'ăn rất vui vẻ' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Chúng tôi đi đâu ăn trưa?', en: 'Where do we go for lunch?' }, options: ['Nhà hàng', 'Trường học', 'Cửa hàng', 'Công viên'], answer: 0, explain_vi: '我们去饭店 = chúng tôi đi nhà hàng.' },
      { q: { vi: 'Món ăn thế nào?', en: 'How is the dish?' }, options: ['Rất cay', 'Không cay lắm', 'Rất lạnh', 'Không ngon'], answer: 1, explain_vi: '这个菜不太辣 = món này không cay lắm.' }
    ]
  },
  {
    id: 'rd-1-011', level: 1, topic: 'hoc-tap',
    title: { vi: 'Lớp học mới', en: 'A New Class', zh: '新班' },
    summary_vi: 'Vào một lớp mới, gặp cô Vương và học nói tiếng Hán.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 26,
    paragraphs: [{
      sentences: [
        { zh: '我来到一个新班。', py: 'Wǒ láidào yí ge xīn bān.', vi: 'Tôi đến một lớp mới.', audio: '',
          gloss: [ { w: '来到', py: 'láidào', vi: 'đến' }, { w: '一个新班', py: 'yí ge xīn bān', vi: 'một lớp mới' } ] },
        { zh: '班里有二十个学生。', py: 'Bān lǐ yǒu èrshí ge xuésheng.', vi: 'Trong lớp có hai mươi học sinh.', audio: '',
          gloss: [ { w: '班里', py: 'bān lǐ', vi: 'trong lớp' }, { w: '二十个学生', py: 'èrshí ge xuésheng', vi: 'hai mươi học sinh' } ] },
        { zh: '老师姓王。', py: 'Lǎoshī xìng Wáng.', vi: 'Cô giáo họ Vương.', audio: '',
          gloss: [ { w: '老师', py: 'lǎoshī', vi: 'giáo viên' }, { w: '姓王', py: 'xìng Wáng', vi: 'họ Vương' } ] },
        { zh: '她教我们说汉语。', py: 'Tā jiāo wǒmen shuō Hànyǔ.', vi: 'Cô ấy dạy chúng tôi nói tiếng Hán.', audio: '',
          gloss: [ { w: '教我们', py: 'jiāo wǒmen', vi: 'dạy chúng tôi' }, { w: '说汉语', py: 'shuō Hànyǔ', vi: 'nói tiếng Hán' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Trong lớp có bao nhiêu học sinh?', en: 'How many students are in the class?' }, options: ['10', '20', '30', '40'], answer: 1, explain_vi: '二十个学生 = hai mươi học sinh.' },
      { q: { vi: 'Cô giáo dạy chúng tôi nói gì?', en: 'What does the teacher teach us to speak?' }, options: ['Tiếng Hán', 'Tiếng Anh', 'Tiếng Việt', 'Tiếng Nhật'], answer: 0, explain_vi: '她教我们说汉语 = cô ấy dạy chúng tôi nói tiếng Hán.' }
    ]
  },
  {
    id: 'rd-1-012', level: 1, topic: 'di-chuyen',
    title: { vi: 'Trên xe buýt', en: 'On the Bus', zh: '在车上' },
    summary_vi: 'Buổi sáng đi xe đến trường cùng mẹ.',
    source: 'ai-gen', reviewed_by: 'opus-qa', reviewed_at: '2026-06-07',
    est_words: 27,
    paragraphs: [{
      sentences: [
        { zh: '早上我坐车去学校。', py: 'Zǎoshang wǒ zuò chē qù xuéxiào.', vi: 'Buổi sáng tôi đi xe đến trường.', audio: '',
          gloss: [ { w: '早上', py: 'zǎoshang', vi: 'buổi sáng' }, { w: '坐车', py: 'zuò chē', vi: 'đi xe' }, { w: '去学校', py: 'qù xuéxiào', vi: 'đến trường' } ] },
        { zh: '车上人很多。', py: 'Chē shàng rén hěn duō.', vi: 'Trên xe có rất nhiều người.', audio: '',
          gloss: [ { w: '车上', py: 'chē shàng', vi: 'trên xe' }, { w: '很多', py: 'hěn duō', vi: 'rất nhiều' } ] },
        { zh: '妈妈坐在我旁边。', py: 'Māma zuò zài wǒ pángbiān.', vi: 'Mẹ ngồi bên cạnh tôi.', audio: '',
          gloss: [ { w: '坐在', py: 'zuò zài', vi: 'ngồi ở' }, { w: '我旁边', py: 'wǒ pángbiān', vi: 'bên cạnh tôi' } ] },
        { zh: '我们八点到学校。', py: 'Wǒmen bā diǎn dào xuéxiào.', vi: 'Chúng tôi đến trường lúc tám giờ.', audio: '',
          gloss: [ { w: '八点', py: 'bā diǎn', vi: 'tám giờ' }, { w: '到学校', py: 'dào xuéxiào', vi: 'đến trường' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Tôi đi đâu bằng xe?', en: 'Where do I go by bus/car?' }, options: ['Đến trường', 'Đến nhà hàng', 'Đến bệnh viện', 'Đến hiệu sách'], answer: 0, explain_vi: '坐车去学校 = đi xe đến trường.' },
      { q: { vi: 'Mẹ ngồi ở đâu?', en: 'Where does mom sit?' }, options: ['Bên cạnh tôi', 'Phía sau tôi', 'Ở nhà', 'Ở trường'], answer: 0, explain_vi: '妈妈坐在我旁边 = mẹ ngồi bên cạnh tôi.' }
    ]
  },
  {
    id: 'rd-1-013', level: 1, topic: 'doi-song',
    title: { vi: 'Những bông hoa nhỏ', en: 'Little Flowers', zh: '小花' },
    summary_vi: 'Mỗi sáng tôi chăm những bông hoa đỏ trong nhà.',
    source: 'ai-gen', reviewed_by: '', reviewed_at: '',
    est_words: 27,
    paragraphs: [{
      sentences: [
        { zh: '我家有很多花。', py: 'Wǒ jiā yǒu hěn duō huā.', vi: 'Nhà tôi có rất nhiều hoa.', audio: '',
          gloss: [ { w: '我家', py: 'wǒ jiā', vi: 'nhà tôi' }, { w: '很多', py: 'hěn duō', vi: 'rất nhiều' }, { w: '花', py: 'huā', vi: 'hoa' } ] },
        { zh: '花是红的，很好看。', py: 'Huā shì hóng de, hěn hǎokàn.', vi: 'Hoa màu đỏ, rất đẹp.', audio: '',
          gloss: [ { w: '红的', py: 'hóng de', vi: 'màu đỏ' }, { w: '好看', py: 'hǎokàn', vi: 'đẹp mắt' } ] },
        { zh: '每天早上，我给花一点水。', py: 'Měitiān zǎoshang, wǒ gěi huā yìdiǎn shuǐ.', vi: 'Mỗi sáng, tôi cho hoa một chút nước.', audio: '',
          gloss: [ { w: '每天早上', py: 'měitiān zǎoshang', vi: 'mỗi sáng' }, { w: '给', py: 'gěi', vi: 'cho' }, { w: '一点水', py: 'yìdiǎn shuǐ', vi: 'một chút nước' } ] },
        { zh: '妈妈说我做得很好。', py: 'Māma shuō wǒ zuò de hěn hǎo.', vi: 'Mẹ nói tôi làm rất tốt.', audio: '',
          gloss: [ { w: '说', py: 'shuō', vi: 'nói' }, { w: '做得很好', py: 'zuò de hěn hǎo', vi: 'làm rất tốt' } ] },
        { zh: '我很喜欢这些花。', py: 'Wǒ hěn xǐhuān zhèxiē huā.', vi: 'Tôi rất thích những bông hoa này.', audio: '',
          gloss: [ { w: '喜欢', py: 'xǐhuān', vi: 'thích' }, { w: '这些', py: 'zhèxiē', vi: 'những…này' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Hoa màu gì?', en: 'What color are the flowers?' }, options: ['Màu đỏ', 'Màu trắng', 'Màu đen', 'Màu xanh'], answer: 0, explain_vi: '花是红的 = hoa màu đỏ.' },
      { q: { vi: 'Mỗi sáng tôi làm gì cho hoa?', en: 'What do I do for the flowers each morning?' }, options: ['Cho hoa một chút nước', 'Hát cho hoa', 'Mua thêm hoa', 'Đọc sách'], answer: 0, explain_vi: '给花一点水 = cho hoa một chút nước.' }
    ]
  },
  {
    id: 'rd-1-014', level: 1, topic: 'so-thich',
    title: { vi: 'Tôi thích hát', en: 'I Like Singing', zh: '我喜欢唱歌' },
    summary_vi: 'Mỗi tối tôi hát ở nhà, anh trai cũng thích hát.',
    source: 'ai-gen', reviewed_by: '', reviewed_at: '',
    est_words: 28,
    paragraphs: [{
      sentences: [
        { zh: '我很喜欢唱歌。', py: 'Wǒ hěn xǐhuān chànggē.', vi: 'Tôi rất thích hát.', audio: '',
          gloss: [ { w: '喜欢', py: 'xǐhuān', vi: 'thích' }, { w: '唱歌', py: 'chànggē', vi: 'hát' } ] },
        { zh: '每天晚上，我在家里唱歌。', py: 'Měitiān wǎnshang, wǒ zài jiā lǐ chànggē.', vi: 'Mỗi tối, tôi hát ở nhà.', audio: '',
          gloss: [ { w: '每天晚上', py: 'měitiān wǎnshang', vi: 'mỗi tối' }, { w: '在家里', py: 'zài jiā lǐ', vi: 'ở nhà' } ] },
        { zh: '妈妈说我唱得很好。', py: 'Māma shuō wǒ chàng de hěn hǎo.', vi: 'Mẹ nói tôi hát rất hay.', audio: '',
          gloss: [ { w: '唱得很好', py: 'chàng de hěn hǎo', vi: 'hát rất hay' } ] },
        { zh: '哥哥也很喜欢唱歌。', py: 'Gēge yě hěn xǐhuān chànggē.', vi: 'Anh trai cũng rất thích hát.', audio: '',
          gloss: [ { w: '哥哥', py: 'gēge', vi: 'anh trai' }, { w: '唱歌', py: 'chànggē', vi: 'hát' } ] },
        { zh: '我们一起唱歌，很高兴。', py: 'Wǒmen yìqǐ chànggē, hěn gāoxìng.', vi: 'Chúng tôi cùng hát, rất vui.', audio: '',
          gloss: [ { w: '一起', py: 'yìqǐ', vi: 'cùng nhau' }, { w: '高兴', py: 'gāoxìng', vi: 'vui' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Tôi thích làm gì?', en: 'What do I like to do?' }, options: ['Hát', 'Vẽ', 'Chạy', 'Nấu ăn'], answer: 0, explain_vi: '我很喜欢唱歌 = tôi rất thích hát.' },
      { q: { vi: 'Mẹ nói tôi hát thế nào?', en: 'How does mom say I sing?' }, options: ['Rất hay', 'Không hay', 'Quá to', 'Quá nhỏ'], answer: 0, explain_vi: '唱得很好 = hát rất hay.' }
    ]
  },
  {
    id: 'rd-1-015', level: 1, topic: 'doi-song',
    title: { vi: 'Ngày mưa ở nhà', en: 'A Rainy Day at Home', zh: '下雨天在家' },
    summary_vi: 'Trời mưa, cả nhà ở nhà đọc sách, xem tivi và uống trà.',
    source: 'ai-gen', reviewed_by: '', reviewed_at: '',
    est_words: 29,
    paragraphs: [{
      sentences: [
        { zh: '今天下雨了，我不出去。', py: 'Jīntiān xià yǔ le, wǒ bù chūqù.', vi: 'Hôm nay trời mưa, tôi không ra ngoài.', audio: '',
          gloss: [ { w: '下雨了', py: 'xià yǔ le', vi: 'trời mưa rồi' }, { w: '不出去', py: 'bù chūqù', vi: 'không ra ngoài' } ] },
        { zh: '我在家看书，也看电视。', py: 'Wǒ zài jiā kàn shū, yě kàn diànshì.', vi: 'Tôi ở nhà đọc sách, cũng xem tivi.', audio: '',
          gloss: [ { w: '看书', py: 'kàn shū', vi: 'đọc sách' }, { w: '看电视', py: 'kàn diànshì', vi: 'xem tivi' } ] },
        { zh: '妈妈做了热茶。', py: 'Māma zuò le rè chá.', vi: 'Mẹ pha trà nóng.', audio: '',
          gloss: [ { w: '做了', py: 'zuò le', vi: 'đã làm/pha' }, { w: '热茶', py: 'rè chá', vi: 'trà nóng' } ] },
        { zh: '我们一起喝茶，说话。', py: 'Wǒmen yìqǐ hē chá, shuōhuà.', vi: 'Chúng tôi cùng uống trà, trò chuyện.', audio: '',
          gloss: [ { w: '喝茶', py: 'hē chá', vi: 'uống trà' }, { w: '说话', py: 'shuōhuà', vi: 'nói chuyện' } ] },
        { zh: '下雨天在家也很好。', py: 'Xià yǔ tiān zài jiā yě hěn hǎo.', vi: 'Ngày mưa ở nhà cũng rất tốt.', audio: '',
          gloss: [ { w: '下雨天', py: 'xià yǔ tiān', vi: 'ngày mưa' }, { w: '在家', py: 'zài jiā', vi: 'ở nhà' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Hôm nay thời tiết thế nào?', en: "How's the weather today?" }, options: ['Trời mưa', 'Trời nắng', 'Có tuyết', 'Gió lớn'], answer: 0, explain_vi: '今天下雨了 = hôm nay trời mưa.' },
      { q: { vi: 'Ở nhà tôi làm gì?', en: 'What do I do at home?' }, options: ['Đọc sách và xem tivi', 'Đi học', 'Chạy bộ', 'Đi mua sắm'], answer: 0, explain_vi: '看书，也看电视 = đọc sách và xem tivi.' }
    ]
  },
  {
    id: 'rd-1-016', level: 1, topic: 'mua-sam',
    title: { vi: 'Áo mới', en: 'A New Shirt', zh: '新衣服' },
    summary_vi: 'Mẹ mua cho tôi một chiếc áo màu đỏ ở cửa hàng.',
    source: 'ai-gen', reviewed_by: '', reviewed_at: '',
    est_words: 29,
    paragraphs: [{
      sentences: [
        { zh: '今天妈妈给我买衣服。', py: 'Jīntiān māma gěi wǒ mǎi yīfu.', vi: 'Hôm nay mẹ mua quần áo cho tôi.', audio: '',
          gloss: [ { w: '给我买', py: 'gěi wǒ mǎi', vi: 'mua cho tôi' }, { w: '衣服', py: 'yīfu', vi: 'quần áo' } ] },
        { zh: '商店里的衣服很多。', py: 'Shāngdiàn lǐ de yīfu hěn duō.', vi: 'Quần áo trong cửa hàng rất nhiều.', audio: '',
          gloss: [ { w: '商店', py: 'shāngdiàn', vi: 'cửa hàng' }, { w: '很多', py: 'hěn duō', vi: 'rất nhiều' } ] },
        { zh: '我喜欢那个红的衣服。', py: 'Wǒ xǐhuān nàge hóng de yīfu.', vi: 'Tôi thích chiếc áo màu đỏ kia.', audio: '',
          gloss: [ { w: '那个', py: 'nàge', vi: 'cái…kia' }, { w: '红的', py: 'hóng de', vi: 'màu đỏ' } ] },
        { zh: '我穿上，很好看。', py: 'Wǒ chuān shàng, hěn hǎokàn.', vi: 'Tôi mặc vào, rất đẹp.', audio: '',
          gloss: [ { w: '穿上', py: 'chuān shàng', vi: 'mặc vào' }, { w: '好看', py: 'hǎokàn', vi: 'đẹp' } ] },
        { zh: '妈妈说这个很好。', py: 'Māma shuō zhège hěn hǎo.', vi: 'Mẹ nói chiếc này rất đẹp.', audio: '',
          gloss: [ { w: '这个', py: 'zhège', vi: 'cái này' }, { w: '很好', py: 'hěn hǎo', vi: 'rất tốt/đẹp' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Mẹ mua gì cho tôi?', en: 'What does mom buy for me?' }, options: ['Quần áo', 'Sách', 'Táo', 'Hoa'], answer: 0, explain_vi: '给我买衣服 = mua quần áo cho tôi.' },
      { q: { vi: 'Tôi thích chiếc áo màu gì?', en: 'Which color shirt do I like?' }, options: ['Màu đỏ', 'Màu trắng', 'Màu đen', 'Màu xanh'], answer: 0, explain_vi: '红的衣服 = áo màu đỏ.' }
    ]
  },
  {
    id: 'rd-1-017', level: 1, topic: 'gia-dinh',
    title: { vi: 'Buổi tối của gia đình', en: 'A Family Evening', zh: '晚上的家' },
    summary_vi: 'Một buổi tối ở nhà, mỗi người một việc, tôi uống trà với ông.',
    source: 'ai-gen', reviewed_by: '', reviewed_at: '',
    est_words: 30,
    paragraphs: [{
      sentences: [
        { zh: '晚上，我们一家在家里。', py: 'Wǎnshang, wǒmen yì jiā zài jiā lǐ.', vi: 'Buổi tối, cả nhà tôi ở nhà.', audio: '',
          gloss: [ { w: '晚上', py: 'wǎnshang', vi: 'buổi tối' }, { w: '一家', py: 'yì jiā', vi: 'cả nhà' } ] },
        { zh: '爸爸看书，妈妈看电视。', py: 'Bàba kàn shū, māma kàn diànshì.', vi: 'Bố đọc sách, mẹ xem tivi.', audio: '',
          gloss: [ { w: '看书', py: 'kàn shū', vi: 'đọc sách' }, { w: '看电视', py: 'kàn diànshì', vi: 'xem tivi' } ] },
        { zh: '我和爷爷一起喝茶、说话。', py: 'Wǒ hé yéye yìqǐ hē chá, shuōhuà.', vi: 'Tôi và ông cùng uống trà, trò chuyện.', audio: '',
          gloss: [ { w: '爷爷', py: 'yéye', vi: 'ông nội' }, { w: '喝茶', py: 'hē chá', vi: 'uống trà' }, { w: '说话', py: 'shuōhuà', vi: 'nói chuyện' } ] },
        { zh: '爷爷问我今天的学习。', py: 'Yéye wèn wǒ jīntiān de xuéxí.', vi: 'Ông hỏi tôi về việc học hôm nay.', audio: '',
          gloss: [ { w: '问', py: 'wèn', vi: 'hỏi' }, { w: '学习', py: 'xuéxí', vi: 'việc học' } ] },
        { zh: '晚上在家，我觉得很高兴。', py: 'Wǎnshang zài jiā, wǒ juéde hěn gāoxìng.', vi: 'Buổi tối ở nhà, tôi thấy rất vui.', audio: '',
          gloss: [ { w: '觉得', py: 'juéde', vi: 'cảm thấy' }, { w: '高兴', py: 'gāoxìng', vi: 'vui' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Buổi tối mẹ làm gì?', en: 'What does mom do in the evening?' }, options: ['Xem tivi', 'Đọc sách', 'Nấu cơm', 'Đi ngủ'], answer: 0, explain_vi: '妈妈看电视 = mẹ xem tivi.' },
      { q: { vi: 'Tôi và ông cùng làm gì?', en: 'What do grandpa and I do together?' }, options: ['Uống trà và trò chuyện', 'Xem tivi', 'Chơi bóng', 'Đọc sách'], answer: 0, explain_vi: '和爷爷一起喝茶、说话 = uống trà và nói chuyện với ông.' }
    ]
  },
  {
    id: 'rd-1-018', level: 1, topic: 'hoc-tap',
    title: { vi: 'Đến thư viện', en: 'Going to the Library', zh: '去图书馆' },
    summary_vi: 'Buổi chiều tôi đến thư viện đọc một quyển sách tiếng Trung.',
    source: 'ai-gen', reviewed_by: '', reviewed_at: '',
    est_words: 28,
    paragraphs: [{
      sentences: [
        { zh: '下午我去图书馆。', py: 'Xiàwǔ wǒ qù túshūguǎn.', vi: 'Buổi chiều tôi đi thư viện.', audio: '',
          gloss: [ { w: '下午', py: 'xiàwǔ', vi: 'buổi chiều' }, { w: '图书馆', py: 'túshūguǎn', vi: 'thư viện' } ] },
        { zh: '图书馆里有很多书。', py: 'Túshūguǎn lǐ yǒu hěn duō shū.', vi: 'Trong thư viện có rất nhiều sách.', audio: '',
          gloss: [ { w: '图书馆里', py: 'túshūguǎn lǐ', vi: 'trong thư viện' }, { w: '很多书', py: 'hěn duō shū', vi: 'rất nhiều sách' } ] },
        { zh: '我看了一本中文书。', py: 'Wǒ kàn le yì běn zhōngwén shū.', vi: 'Tôi đọc một quyển sách tiếng Trung.', audio: '',
          gloss: [ { w: '一本书', py: 'yì běn shū', vi: 'một quyển sách' }, { w: '中文', py: 'zhōngwén', vi: 'tiếng Trung' } ] },
        { zh: '图书馆里人不多。', py: 'Túshūguǎn lǐ rén bù duō.', vi: 'Trong thư viện không đông người.', audio: '',
          gloss: [ { w: '人不多', py: 'rén bù duō', vi: 'không đông người' } ] },
        { zh: '我喜欢在图书馆看书。', py: 'Wǒ xǐhuān zài túshūguǎn kàn shū.', vi: 'Tôi thích đọc sách ở thư viện.', audio: '',
          gloss: [ { w: '喜欢', py: 'xǐhuān', vi: 'thích' }, { w: '看书', py: 'kàn shū', vi: 'đọc sách' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Buổi chiều tôi đi đâu?', en: 'Where do I go in the afternoon?' }, options: ['Thư viện', 'Cửa hàng', 'Bệnh viện', 'Công viên'], answer: 0, explain_vi: '下午我去图书馆 = buổi chiều tôi đi thư viện.' },
      { q: { vi: 'Trong thư viện có gì?', en: 'What is in the library?' }, options: ['Rất nhiều sách', 'Rất nhiều hoa', 'Rất nhiều người', 'Tivi'], answer: 0, explain_vi: '有很多书 = có rất nhiều sách.' }
    ]
  },
  {
    id: 'rd-1-019', level: 1, topic: 'doi-song',
    title: { vi: 'Giúp mẹ', en: 'Helping Mom', zh: '帮妈妈' },
    summary_vi: 'Chủ nhật tôi ở nhà giúp mẹ rửa cốc, rửa rau và cùng ăn cơm.',
    source: 'ai-gen', reviewed_by: '', reviewed_at: '',
    est_words: 30,
    paragraphs: [{
      sentences: [
        { zh: '今天是星期天，我在家。', py: 'Jīntiān shì xīngqītiān, wǒ zài jiā.', vi: 'Hôm nay là chủ nhật, tôi ở nhà.', audio: '',
          gloss: [ { w: '星期天', py: 'xīngqītiān', vi: 'chủ nhật' }, { w: '在家', py: 'zài jiā', vi: 'ở nhà' } ] },
        { zh: '妈妈做饭，我帮她。', py: 'Māma zuò fàn, wǒ bāng tā.', vi: 'Mẹ nấu cơm, tôi giúp mẹ.', audio: '',
          gloss: [ { w: '做饭', py: 'zuò fàn', vi: 'nấu cơm' }, { w: '帮她', py: 'bāng tā', vi: 'giúp mẹ' } ] },
        { zh: '我洗杯子，也洗菜。', py: 'Wǒ xǐ bēizi, yě xǐ cài.', vi: 'Tôi rửa cốc, cũng rửa rau.', audio: '',
          gloss: [ { w: '洗杯子', py: 'xǐ bēizi', vi: 'rửa cốc' }, { w: '洗菜', py: 'xǐ cài', vi: 'rửa rau' } ] },
        { zh: '爸爸说我是好孩子。', py: 'Bàba shuō wǒ shì hǎo háizi.', vi: 'Bố nói tôi là đứa con ngoan.', audio: '',
          gloss: [ { w: '好孩子', py: 'hǎo háizi', vi: 'đứa trẻ ngoan' } ] },
        { zh: '我们一起吃饭，很高兴。', py: 'Wǒmen yìqǐ chīfàn, hěn gāoxìng.', vi: 'Chúng tôi cùng ăn cơm, rất vui.', audio: '',
          gloss: [ { w: '一起', py: 'yìqǐ', vi: 'cùng nhau' }, { w: '吃饭', py: 'chīfàn', vi: 'ăn cơm' } ] }
      ]
    }],
    questions: [
      { q: { vi: 'Hôm nay là thứ mấy?', en: 'What day is it today?' }, options: ['Chủ nhật', 'Thứ Hai', 'Thứ Bảy', 'Thứ Sáu'], answer: 0, explain_vi: '今天是星期天 = hôm nay là chủ nhật.' },
      { q: { vi: 'Tôi giúp mẹ làm gì?', en: 'What do I help mom with?' }, options: ['Rửa cốc và rửa rau', 'Mua sách', 'Tưới hoa', 'Hát'], answer: 0, explain_vi: '洗杯子，也洗菜 = rửa cốc và rửa rau.' }
    ]
  }
];
