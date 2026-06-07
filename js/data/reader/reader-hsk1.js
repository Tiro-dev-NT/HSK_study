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
    source: 'seed-handcraft', reviewed_by: '', reviewed_at: '',
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
    source: 'seed-handcraft', reviewed_by: '', reviewed_at: '',
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
    source: 'seed-handcraft', reviewed_by: '', reviewed_at: '',
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
    source: 'seed-handcraft', reviewed_by: '', reviewed_at: '',
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
    source: 'ai-gen', reviewed_by: '', reviewed_at: '',
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
    source: 'ai-gen', reviewed_by: '', reviewed_at: '',
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
    source: 'ai-gen', reviewed_by: '', reviewed_at: '',
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
    source: 'ai-gen', reviewed_by: '', reviewed_at: '',
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
    source: 'ai-gen', reviewed_by: '', reviewed_at: '',
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
    source: 'ai-gen', reviewed_by: '', reviewed_at: '',
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
    source: 'ai-gen', reviewed_by: '', reviewed_at: '',
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
    source: 'ai-gen', reviewed_by: '', reviewed_at: '',
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
  }
];
