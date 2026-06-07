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
    est_words: 24,
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
    est_words: 22,
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
    est_words: 26,
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
    est_words: 24,
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
  }
];
