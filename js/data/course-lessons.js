// ═══════════════════════════════════════════════════════
// COURSE-LESSONS.JS — Dữ liệu Truyện Mai, Bài 1-3
// var (không const) vì dynamic-injected script
// Cấu trúc: COURSE_DATA[id] = { id, title, context, vocabPreview, steps, workbook }
// ═══════════════════════════════════════════════════════

var COURSE_DATA = {

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 1: Chào cô, em là Mai
  // ───────────────────────────────────────────────────────────────────────
  1: {
    id: 1,
    title: 'Chào cô, em là Mai',
    context: 'Buổi học tiếng Trung đầu tiên. Mai bước vào lớp, hồi hộp làm quen với thầy Lý và cô bạn ngồi cạnh tên Tiểu Mỹ.',
    vocabPreview: ['你好','老师','叫','是','学生'],
    steps: [
      // ── Cảnh 1: Thầy Lý gặp Mai ─────────────────────────
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Lớp học tiếng Trung · Buổi đầu tiên', bg: 'classroom',
        cast: ['laoli', 'mai'],
        text: 'Buổi học đầu tiên bắt đầu. Thầy Lý bước vào lớp.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['laoli', 'mai'],
        text: '你好！', pinyin: 'Nǐ hǎo!', meaning: 'Chào em!',
        expression: 'happy', vocab: ['你好']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['laoli', 'mai'],
        text: '老师好！', pinyin: 'Lǎoshī hǎo!', meaning: 'Em chào thầy ạ!',
        expression: 'curious', vocab: ['老师']
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['laoli', 'mai'],
        text: '你叫什么名字？', pinyin: 'Nǐ jiào shénme míngzi?', meaning: 'Em tên là gì?',
        expression: null, vocab: ['叫','什么','名字']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['laoli', 'mai'], bg: 'classroom',
        scene: '📍 Lớp học tiếng Trung · Buổi đầu tiên',
        expression: 'curious',
        q: 'Thầy Lý hỏi tên. Mai nên đáp thế nào?',
        options: [
          { text: '我叫 Mai。', pinyin: 'Wǒ jiào Mai.', meaning: 'Em tên Mai ạ.', correct: true,
            feedback: 'Đúng! 叫 + tên = cách giới thiệu tên chuẩn trong tiếng Trung.' },
          { text: '我是老师。', pinyin: 'Wǒ shì lǎoshī.', meaning: 'Tôi là giáo viên.', correct: false,
            feedback: 'Chưa đúng — câu này nghĩa "Tôi là giáo viên", không phải giới thiệu tên.' },
          { text: '谢谢你。', pinyin: 'Xièxie nǐ.', meaning: 'Cảm ơn bạn.', correct: false,
            feedback: 'Chưa đúng ngữ cảnh — đây là lời cảm ơn, không phải giới thiệu tên.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['laoli', 'mai'],
        text: '我叫 Mai。', pinyin: 'Wǒ jiào Mai.', meaning: 'Em tên Mai ạ.',
        expression: 'curious', vocab: ['我']
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['laoli', 'mai'],
        text: '你是学生吗？', pinyin: 'Nǐ shì xuésheng ma?', meaning: 'Em là sinh viên phải không?',
        expression: null, vocab: ['是','学生']
      },
      {
        type: 'choice', speaker: 'mai', cast: ['laoli', 'mai'], bg: 'classroom',
        scene: '📍 Lớp học tiếng Trung · Buổi đầu tiên',
        expression: 'happy',
        q: 'Thầy hỏi Mai có phải sinh viên không. Mai xác nhận thế nào?',
        options: [
          { text: '是，我是学生。', pinyin: 'Shì, wǒ shì xuésheng.', meaning: 'Vâng, em là sinh viên.', correct: true,
            feedback: 'Đúng! 是 ở đầu = xác nhận, rồi lặp lại câu đầy đủ — rất tự nhiên.' },
          { text: '不，我是老师。', pinyin: 'Bù, wǒ shì lǎoshī.', meaning: 'Không, tôi là giáo viên.', correct: false,
            feedback: 'Chưa đúng — Mai là học sinh, không phải giáo viên.' },
          { text: '我叫 Mai。', pinyin: 'Wǒ jiào Mai.', meaning: 'Em tên Mai.', correct: false,
            feedback: 'Chưa đúng ngữ cảnh — câu này giới thiệu tên, không xác nhận nghề nghiệp.' }
        ]
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['laoli', 'mai'],
        text: '是，我是学生。', pinyin: 'Shì, wǒ shì xuésheng.', meaning: 'Vâng, em là sinh viên.',
        expression: 'happy', vocab: []
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: 'Mai giới thiệu mình là gì?',
            options: ['老师', '学生', '中国人', '名字'],
            answer: 1
          },
          {
            q: 'Muốn hỏi "Em là sinh viên phải không?" thì điền gì: 你是学生___？',
            options: ['谁', '什么', '吗', '不'],
            answer: 2
          },
          {
            q: '"他是谁？" nghĩa là gì?',
            options: ['Anh ấy tên gì?', 'Anh ấy là ai?', 'Anh ấy là người Trung Quốc?', 'Anh ấy là học sinh?'],
            answer: 1
          }
        ]
      },
      // ── Cảnh 2: Tiểu Mỹ xuất hiện ───────────────────────
      {
        type: 'dialogue', speaker: 'narrator',
        scene: '📍 Lớp học · Một bạn mới đến', bg: 'classroom',
        cast: ['laoli', 'mai', 'xiaomei'],
        text: 'Một bạn nữ bước tới chỗ Mai.',
        pinyin: '', meaning: '', vocab: []
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['laoli', 'mai', 'xiaomei'],
        text: '你好！我也是学生，我叫小美。',
        pinyin: 'Nǐ hǎo! Wǒ yě shì xuésheng, wǒ jiào Xiǎoměi.',
        meaning: 'Chào cậu! Tớ cũng là sinh viên, tớ tên Tiểu Mỹ.',
        expression: 'happy', vocab: ['也','同学']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['laoli', 'mai', 'xiaomei'],
        text: '你好，小美！', pinyin: 'Nǐ hǎo, Xiǎoměi!', meaning: 'Chào Tiểu Mỹ!',
        expression: 'happy', vocab: []
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['laoli', 'mai', 'xiaomei'],
        text: '请问，他是谁？', pinyin: 'Qǐng wèn, tā shì shéi?', meaning: 'Xin hỏi, thầy ấy là ai?',
        expression: 'curious', vocab: ['请问','谁','他']
      },
      {
        type: 'dialogue', speaker: 'xiaomei', cast: ['laoli', 'mai', 'xiaomei'],
        text: '他是老师，他是中国人。', pinyin: 'Tā shì lǎoshī, tā shì Zhōngguó rén.',
        meaning: 'Thầy ấy là giáo viên, thầy là người Trung Quốc.',
        expression: null, vocab: ['中国人','中国']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['laoli', 'mai', 'xiaomei'],
        text: '老师是中国人吗？', pinyin: 'Lǎoshī shì Zhōngguó rén ma?',
        meaning: 'Thầy là người Trung Quốc ạ?',
        expression: 'surprise', vocab: []
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['laoli', 'mai', 'xiaomei'],
        text: '是的。你是越南人吗？', pinyin: 'Shì de. Nǐ shì Yuènán rén ma?',
        meaning: 'Đúng vậy. Em là người Việt Nam à?',
        expression: null, vocab: ['越南人']
      },
      {
        type: 'dialogue', speaker: 'mai', cast: ['laoli', 'mai', 'xiaomei'],
        text: '是，我是越南人。我很高兴！', pinyin: 'Shì, wǒ shì Yuènán rén. Wǒ hěn gāoxìng!',
        meaning: 'Vâng, em là người Việt. Em rất vui ạ!',
        expression: 'happy', vocab: ['很','高兴']
      },
      {
        type: 'dialogue', speaker: 'laoli', cast: ['laoli', 'mai', 'xiaomei'],
        text: '很好！我们上课吧。', pinyin: 'Hěn hǎo! Wǒmen shàngkè ba.',
        meaning: 'Tốt lắm! Chúng ta vào học nào.',
        expression: 'happy', vocab: ['我们']
      }
    ],
    vocab: [
      { h: '你好', p: 'nǐ hǎo', v: 'xin chào' },
      { h: '请问', p: 'qǐng wèn', v: 'xin hỏi' },
      { h: '谢谢', p: 'xièxie', v: 'cảm ơn' },
      { h: '再见', p: 'zàijiàn', v: 'tạm biệt' },
      { h: '对不起', p: 'duìbuqǐ', v: 'xin lỗi' },
      { h: '没关系', p: 'méi guānxi', v: 'không sao' },
      { h: '我', p: 'wǒ', v: 'tôi/em' },
      { h: '你', p: 'nǐ', v: 'bạn/em' },
      { h: '他', p: 'tā', v: 'anh ấy' },
      { h: '她', p: 'tā', v: 'cô ấy' },
      { h: '谁', p: 'shéi', v: 'ai' },
      { h: '什么', p: 'shénme', v: 'cái gì' },
      { h: '名字', p: 'míngzi', v: 'tên' },
      { h: '叫', p: 'jiào', v: 'gọi (tên là)' },
      { h: '是', p: 'shì', v: 'là' },
      { h: '不', p: 'bù', v: 'không' },
      { h: '老师', p: 'lǎoshī', v: 'giáo viên' },
      { h: '同学', p: 'tóngxué', v: 'bạn học' },
      { h: '学生', p: 'xuésheng', v: 'học sinh/sinh viên' },
      { h: '中国', p: 'Zhōngguó', v: 'Trung Quốc' },
      { h: '中国人', p: 'Zhōngguó rén', v: 'người Trung Quốc' },
      { h: '越南人', p: 'Yuènán rén', v: 'người Việt Nam' },
      { h: '很', p: 'hěn', v: 'rất' },
      { h: '高兴', p: 'gāoxìng', v: 'vui' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我___学生。', options: ['是','很','也'], answer: '是' },
        { type: 'fill', sentence: '你好！我___ Mai。', options: ['叫','是','不'], answer: '叫' },
        { type: 'fill', sentence: '老师是中国___。', options: ['人','什么','谁'], answer: '人' },
        { type: 'fill', sentence: '你是学生___？', options: ['吗','也','很'], answer: '吗' },
        { type: 'fill', sentence: '我___高兴。', options: ['是','很','叫'], answer: '很' }
      ],
      normal: [
        { type: 'fill', sentence: '___是谁？', options: ['他','吗','什么'], answer: '他' },
        { type: 'fill', sentence: '你叫___名字？', options: ['什么','的','很'], answer: '什么' },
        { type: 'fill', sentence: '我是越南人，他___是越南人。', options: ['也','很','不'], answer: '也' },
        { type: 'fill', sentence: '___，我不是老师。', options: ['对不起','谢谢','你好'], answer: '对不起' },
        { type: 'fill', sentence: '谢谢！— ___。', options: ['没关系','再见','你好'], answer: '没关系' },
        { type: 'order', words: ['学生','我','是'], answer: '我是学生' },
        { type: 'order', words: ['是','你','吗','老师'], answer: '你是老师吗？' },
        { type: 'order', words: ['什么','你','叫','名字'], answer: '你叫什么名字？' }
      ],
      hard: [
        { type: 'fill', sentence: '他___老师吗？', options: ['是','很','叫'], answer: '是' },
        { type: 'fill', sentence: '我___是学生，我是老师。', options: ['不','也','很'], answer: '不' },
        { type: 'fill', sentence: '你好！很___见到你。', options: ['高兴','名字','叫'], answer: '高兴' },
        { type: 'fill', sentence: '她是___？', options: ['谁','什么','吗'], answer: '谁' },
        { type: 'fill', sentence: '老师是___人。', options: ['中国','越南','学生'], answer: '中国' },
        { type: 'order', words: ['人','是','我','越南'], answer: '我是越南人' },
        { type: 'order', words: ['谁','是','她'], answer: '她是谁？' },
        { type: 'order', words: ['也','是','学生','我'], answer: '我也是学生' },
        { type: 'translate', prompt: 'Em chào thầy ạ!', answer: '老师好！' },
        { type: 'translate', prompt: 'Cô ấy là người Trung Quốc phải không?', answer: '她是中国人吗？' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 2: Gia đình của Mai
  // ───────────────────────────────────────────────────────────────────────
  2: {
    id: 2,
    title: 'Gia đình của Mai',
    context: 'Sau buổi học, Mai và Tiểu Mỹ ra quán cà phê. Tiểu Mỹ tò mò về gia đình Mai, thế là hai đứa xem ảnh cả nhà.',
    vocabPreview: ['家','爸爸','妈妈','有','的'],
    steps: [
      {
        type: 'dialogue',
        speaker: 'xiaomei',
        text: '这是你的手机吗？',
        pinyin: 'Zhè shì nǐ de shǒujī ma?',
        meaning: 'Đây là điện thoại của cậu à?',
        expression: null,
        vocab: ['这','的']
      },
      {
        type: 'dialogue',
        speaker: 'mai',
        text: '是，这是我的照片。',
        pinyin: 'Shì, zhè shì wǒ de zhàopiàn.',
        meaning: 'Ừ, đây là ảnh của tớ.',
        expression: 'happy',
        vocab: ['照片']
      },
      {
        type: 'dialogue',
        speaker: 'xiaomei',
        text: '哇，这是谁？',
        pinyin: 'Wā, zhè shì shéi?',
        meaning: 'Ồ, đây là ai vậy?',
        expression: 'curious',
        vocab: ['那']
      },
      {
        type: 'dialogue',
        speaker: 'mai',
        text: '这是我的家。这是我爸爸，那是我妈妈。',
        pinyin: 'Zhè shì wǒ de jiā. Zhè shì wǒ bàba, nà shì wǒ māma.',
        meaning: 'Đây là gia đình tớ. Đây là bố tớ, kia là mẹ tớ.',
        expression: null,
        vocab: ['家','爸爸','妈妈']
      },
      {
        type: 'dialogue',
        speaker: 'xiaomei',
        text: '你妈妈很漂亮！',
        pinyin: 'Nǐ māma hěn piàoliang!',
        meaning: 'Mẹ cậu xinh quá!',
        expression: 'happy',
        vocab: ['漂亮']
      },
      {
        type: 'dialogue',
        speaker: 'mai',
        text: '谢谢！这是我姐姐和哥哥。',
        pinyin: 'Xièxie! Zhè shì wǒ jiějie hé gēge.',
        meaning: 'Cảm ơn! Đây là chị gái và anh trai tớ.',
        expression: 'happy',
        vocab: ['姐姐','哥哥','谢谢']
      },
      {
        type: 'dialogue',
        speaker: 'xiaomei',
        text: '你有弟弟妹妹吗？',
        pinyin: 'Nǐ yǒu dìdi mèimei ma?',
        meaning: 'Cậu có em trai em gái không?',
        expression: null,
        vocab: ['有','弟弟','妹妹']
      },
      {
        type: 'choice', speaker: 'mai',
        q: 'Tiểu Mỹ hỏi Mai có em trai em gái không. Mai có một em gái, không có em trai. Mai nên nói gì?',
        options: [
          { text: '我有一个妹妹，没有弟弟。', pinyin: 'Wǒ yǒu yí ge mèimei, méiyǒu dìdi.', meaning: 'Tớ có một em gái, không có em trai.', correct: true,
            feedback: 'Đúng! 有 = "có", 没有 = "không có" — khớp đúng gia đình Mai.' },
          { text: '我有一个弟弟，没有妹妹。', pinyin: 'Wǒ yǒu yí ge dìdi, méiyǒu mèimei.', meaning: 'Tớ có một em trai, không có em gái.', correct: false,
            feedback: 'Ngược rồi — câu này nói có em TRAI, không có em GÁI; Mai thì ngược lại.' },
          { text: '我没有妹妹，有弟弟。', pinyin: 'Wǒ méiyǒu mèimei, yǒu dìdi.', meaning: 'Tớ không có em gái, có em trai.', correct: false,
            feedback: 'Sai thực tế — Mai CÓ em gái (有妹妹), KHÔNG có em trai (没有弟弟).' }
        ]
      },
      {
        type: 'dialogue',
        speaker: 'mai',
        text: '我有一个妹妹，没有弟弟。',
        pinyin: 'Wǒ yǒu yí ge mèimei, méiyǒu dìdi.',
        meaning: 'Tớ có một em gái, không có em trai.',
        expression: 'curious',
        vocab: ['个','没','没有']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: 'Mai có mấy em?',
            options: ['Một em trai', 'Một em gái', 'Một anh trai', 'Không có em'],
            answer: 1
          },
          {
            q: '"Tớ không có em trai" dịch là gì?',
            options: ['我不是弟弟', '我没有弟弟', '我有弟弟', '我不弟弟'],
            answer: 1
          },
          {
            q: '"ảnh của tớ" viết đúng là:',
            options: ['照片我的', '我照片的', '我的照片', '的我照片'],
            answer: 2
          }
        ]
      },
      {
        type: 'dialogue',
        speaker: 'xiaomei',
        text: '你家有几个孩子？',
        pinyin: 'Nǐ jiā yǒu jǐ ge háizi?',
        meaning: 'Nhà cậu có mấy người con?',
        expression: null,
        vocab: ['孩子','多']
      },
      {
        type: 'dialogue',
        speaker: 'mai',
        text: '我家有四个孩子，很多！',
        pinyin: 'Wǒ jiā yǒu sì ge háizi, hěn duō!',
        meaning: 'Nhà tớ có bốn người con, đông lắm!',
        expression: 'happy',
        vocab: []
      },
      {
        type: 'dialogue',
        speaker: 'xiaomei',
        text: '哇，你家人都很漂亮！',
        pinyin: 'Wā, nǐ jiārén dōu hěn piàoliang!',
        meaning: 'Ồ, người nhà cậu ai cũng xinh!',
        expression: 'surprise',
        vocab: ['都','我们']
      },
      {
        type: 'dialogue',
        speaker: 'mai',
        text: '那是你的家人吗？',
        pinyin: 'Nà shì nǐ de jiārén ma?',
        meaning: 'Kia là người nhà cậu à?',
        expression: 'curious',
        vocab: []
      },
      {
        type: 'dialogue',
        speaker: 'xiaomei',
        text: '不是，那不是我家，那是老师的照片！',
        pinyin: 'Bú shì, nà bú shì wǒ jiā, nà shì lǎoshī de zhàopiàn!',
        meaning: 'Không phải, kia không phải nhà tớ, kia là ảnh của thầy đấy!',
        expression: 'surprise',
        vocab: []
      }
    ],
    vocab: [
      { h: '爸爸', p: 'bàba', v: 'bố' },
      { h: '妈妈', p: 'māma', v: 'mẹ' },
      { h: '哥哥', p: 'gēge', v: 'anh trai' },
      { h: '姐姐', p: 'jiějie', v: 'chị gái' },
      { h: '弟弟', p: 'dìdi', v: 'em trai' },
      { h: '妹妹', p: 'mèimei', v: 'em gái' },
      { h: '儿子', p: 'érzi', v: 'con trai' },
      { h: '孩子', p: 'háizi', v: 'con/đứa trẻ' },
      { h: '家', p: 'jiā', v: 'nhà/gia đình' },
      { h: '我们', p: 'wǒmen', v: 'chúng tôi' },
      { h: '这', p: 'zhè', v: 'này' },
      { h: '那', p: 'nà', v: 'đó/kia' },
      { h: '个', p: 'gè', v: '(lượng từ) cái/người' },
      { h: '有', p: 'yǒu', v: 'có' },
      { h: '没', p: 'méi', v: 'không (phủ định 有)' },
      { h: '没有', p: 'méiyǒu', v: 'không có' },
      { h: '照片', p: 'zhàopiàn', v: 'ảnh' },
      { h: '多', p: 'duō', v: 'nhiều' },
      { h: '都', p: 'dōu', v: 'đều' },
      { h: '小', p: 'xiǎo', v: 'nhỏ' },
      { h: '大', p: 'dà', v: 'lớn' },
      { h: '漂亮', p: 'piàoliang', v: 'đẹp/xinh' },
      { h: '的', p: 'de', v: '(trợ từ sở hữu)' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我___一个妹妹。', options: ['有','是','都'], answer: '有' },
        { type: 'fill', sentence: '这是我___妈妈。', options: ['的','是','很'], answer: '的' },
        { type: 'fill', sentence: '我没___弟弟。', options: ['有','是','不'], answer: '有' },
        { type: 'fill', sentence: '___是我爸爸。', options: ['这','什么','谁'], answer: '这' },
        { type: 'fill', sentence: '我家人___很漂亮。', options: ['都','的','吗'], answer: '都' }
      ],
      normal: [
        { type: 'fill', sentence: '那___是我家。', options: ['不','没','也'], answer: '不' },
        { type: 'fill', sentence: '你有___个孩子？', options: ['几','什么','吗'], answer: '几' },
        { type: 'fill', sentence: '我家有四个孩子，很___。', options: ['多','小','都'], answer: '多' },
        { type: 'fill', sentence: '这个孩子很___。', options: ['小','有','的'], answer: '小' },
        { type: 'fill', sentence: '___是老师的照片。', options: ['那','谁','什么'], answer: '那' },
        { type: 'order', words: ['妹妹','一个','有','我'], answer: '我有一个妹妹' },
        { type: 'order', words: ['照片','这','我','是','的'], answer: '这是我的照片' },
        { type: 'order', words: ['弟弟','没有','我'], answer: '我没有弟弟' }
      ],
      hard: [
        { type: 'fill', sentence: '你___弟弟妹妹吗？', options: ['有','是','都'], answer: '有' },
        { type: 'fill', sentence: '那不___我妈妈。', options: ['是','有','的'], answer: '是' },
        { type: 'fill', sentence: '我家人___很漂亮。', options: ['都','的','吗'], answer: '都' },
        { type: 'fill', sentence: '这___孩子很大。', options: ['个','的','有'], answer: '个' },
        { type: 'fill', sentence: '这是我哥哥___照片。', options: ['的','有','是'], answer: '的' },
        { type: 'order', words: ['孩子','四个','有','家','我'], answer: '我家有四个孩子' },
        { type: 'order', words: ['漂亮','妈妈','很','你'], answer: '你妈妈很漂亮' },
        { type: 'order', words: ['我','那','家','不是'], answer: '那不是我家' },
        { type: 'translate', prompt: 'Đây là chị gái của tớ.', answer: '这是我姐姐。' },
        { type: 'translate', prompt: 'Nhà cậu có mấy người con?', answer: '你家有几个孩子？' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 3: Lớp học tiếng Trung
  // ───────────────────────────────────────────────────────────────────────
  3: {
    id: 3,
    title: 'Lớp học tiếng Trung',
    context: 'Tiết học thứ hai. Thầy Lý dạy đếm số, rồi hỏi lớp. Mai gọi nhầm "ba quyển sách" thành "ba cái sách" và bị Tiểu Mỹ trêu.',
    vocabPreview: ['一','书','本','多少','大学生'],
    steps: [
      {
        type: 'dialogue',
        speaker: 'laoli',
        text: '同学们好！今天我们学数字。',
        pinyin: 'Tóngxuémen hǎo! Jīntiān wǒmen xué shùzì.',
        meaning: 'Chào các em! Hôm nay chúng ta học số đếm.',
        expression: null,
        vocab: ['大学','大学生','班']
      },
      {
        type: 'dialogue',
        speaker: 'laoli',
        text: '一、二、三、四、五。请你们读。',
        pinyin: 'Yī, èr, sān, sì, wǔ. Qǐng nǐmen dú.',
        meaning: 'Một, hai, ba, bốn, năm. Mời các em đọc.',
        expression: null,
        vocab: ['一','二','三','四','五','你们']
      },
      {
        type: 'dialogue',
        speaker: 'class',
        text: '一、二、三、四、五！',
        pinyin: 'Yī, èr, sān, sì, wǔ!',
        meaning: 'Một, hai, ba, bốn, năm!',
        expression: 'focused',
        vocab: []
      },
      {
        type: 'dialogue',
        speaker: 'laoli',
        text: '很好！我们班有多少个学生？',
        pinyin: 'Hěn hǎo! Wǒmen bān yǒu duōshao ge xuésheng?',
        meaning: 'Tốt lắm! Lớp chúng ta có bao nhiêu sinh viên?',
        expression: null,
        vocab: ['多少']
      },
      {
        type: 'choice', speaker: 'mai',
        q: 'Thầy Lý hỏi lớp có bao nhiêu sinh viên. Lớp có mười sinh viên. Mai đáp thế nào?',
        options: [
          { text: '我们班有十个大学生。', pinyin: 'Wǒmen bān yǒu shí ge dàxuéshēng.', meaning: 'Lớp mình có mười sinh viên.', correct: true,
            feedback: 'Đúng! Đếm người dùng lượng từ 个: 十个大学生.' },
          { text: '我们班有十本大学生。', pinyin: 'Wǒmen bān yǒu shí běn dàxuéshēng.', meaning: 'Lớp mình có mười "quyển" sinh viên.', correct: false,
            feedback: 'Sai lượng từ — 本 dùng cho sách/vở; người dùng 个: 十个.' },
          { text: '我们班有十个大学。', pinyin: 'Wǒmen bān yǒu shí ge dàxué.', meaning: 'Lớp mình có mười trường đại học.', correct: false,
            feedback: 'Sai từ — người học là 大学生 (sinh viên), 大学 là "trường đại học".' }
        ]
      },
      {
        type: 'dialogue',
        speaker: 'mai',
        text: '我们班有十个大学生。',
        pinyin: 'Wǒmen bān yǒu shí ge dàxuéshēng.',
        meaning: 'Lớp mình có mười sinh viên ạ.',
        expression: 'happy',
        vocab: ['十','大学生']
      },
      {
        type: 'dialogue',
        speaker: 'laoli',
        text: '对！Mai，你有几本书？',
        pinyin: 'Duì! Mai, nǐ yǒu jǐ běn shū?',
        meaning: 'Đúng! Mai, em có mấy quyển sách?',
        expression: null,
        vocab: ['书','本']
      },
      {
        type: 'dialogue',
        speaker: 'mai',
        text: '我有三个书。',
        pinyin: 'Wǒ yǒu sān ge shū.',
        meaning: 'Em có ba cái sách.',
        expression: 'curious',
        vocab: ['三']
      },
      {
        type: 'checkpoint',
        questions: [
          {
            q: 'Mai nói sai chỗ nào?',
            options: ['Dùng 三 sai', 'Dùng lượng từ 个 thay vì 本', 'Dùng 书 sai', 'Dùng 有 sai'],
            answer: 1
          },
          {
            q: '"ba quyển sách" viết đúng là:',
            options: ['三个书', '三书', '三本书', '本三书'],
            answer: 2
          },
          {
            q: 'Hỏi "Lớp có bao nhiêu sinh viên?" dùng từ nào?',
            options: ['哪', '多少', '什么', '谁'],
            answer: 1
          }
        ]
      },
      {
        type: 'dialogue',
        speaker: 'xiaomei',
        text: '哈哈，不是"三个书"，是"三本书"！书用"本"。',
        pinyin: 'Hāhā, bú shì "sān ge shū", shì "sān běn shū"! Shū yòng "běn".',
        meaning: 'Haha, không phải "ba cái sách", là "ba quyển sách"! Sách dùng lượng từ 本.',
        expression: 'happy',
        vocab: []
      },
      {
        type: 'dialogue',
        speaker: 'mai',
        text: '啊，对不起！三本书。',
        pinyin: 'À, duìbuqǐ! Sān běn shū.',
        meaning: 'À, xin lỗi! Ba quyển sách.',
        expression: 'confused',
        vocab: []
      },
      {
        type: 'dialogue',
        speaker: 'laoli',
        text: '没关系！本子也用"本"。',
        pinyin: 'Méi guānxi! Běnzi yě yòng "běn".',
        meaning: 'Không sao! Quyển vở cũng dùng 本.',
        expression: null,
        vocab: ['本子']
      },
      {
        type: 'dialogue',
        speaker: 'mai',
        text: '那教室在哪？',
        pinyin: 'Nà jiàoshì zài nǎ?',
        meaning: 'Vậy phòng học ở đâu ạ?',
        expression: 'curious',
        vocab: ['教室','哪']
      },
      {
        type: 'dialogue',
        speaker: 'laoli',
        text: '我们的教室在第三教学楼。',
        pinyin: 'Wǒmen de jiàoshì zài dì sān jiàoxuélóu.',
        meaning: 'Phòng học của chúng ta ở tòa nhà học thứ ba.',
        expression: 'happy',
        vocab: ['教学楼','第','六','七','八','九']
      }
    ],
    vocab: [
      { h: '大学', p: 'dàxué', v: 'đại học' },
      { h: '大学生', p: 'dàxuéshēng', v: 'sinh viên đại học' },
      { h: '班', p: 'bān', v: 'lớp' },
      { h: '书', p: 'shū', v: 'sách' },
      { h: '本子', p: 'běnzi', v: 'quyển vở' },
      { h: '本', p: 'běn', v: '(lượng từ) quyển' },
      { h: '一', p: 'yī', v: 'một' },
      { h: '二', p: 'èr', v: 'hai' },
      { h: '三', p: 'sān', v: 'ba' },
      { h: '四', p: 'sì', v: 'bốn' },
      { h: '五', p: 'wǔ', v: 'năm' },
      { h: '六', p: 'liù', v: 'sáu' },
      { h: '七', p: 'qī', v: 'bảy' },
      { h: '八', p: 'bā', v: 'tám' },
      { h: '九', p: 'jiǔ', v: 'chín' },
      { h: '十', p: 'shí', v: 'mười' },
      { h: '第', p: 'dì', v: 'thứ (số thứ tự)' },
      { h: '多少', p: 'duōshao', v: 'bao nhiêu' },
      { h: '哪', p: 'nǎ', v: 'nào/đâu' },
      { h: '你们', p: 'nǐmen', v: 'các bạn' },
      { h: '他们', p: 'tāmen', v: 'họ' },
      { h: '教室', p: 'jiàoshì', v: 'phòng học' },
      { h: '教学楼', p: 'jiàoxuélóu', v: 'tòa nhà học' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我有三___书。', options: ['本','个','都'], answer: '本' },
        { type: 'fill', sentence: '我们班有十___学生。', options: ['个','本','的'], answer: '个' },
        { type: 'fill', sentence: '你有___本书？', options: ['几','什么','吗'], answer: '几' },
        { type: 'fill', sentence: '这是我们___教室。', options: ['的','有','也'], answer: '的' },
        { type: 'fill', sentence: '一、二、三、四、___。', options: ['五','六','十'], answer: '五' }
      ],
      normal: [
        { type: 'fill', sentence: '你们班有___个学生？', options: ['多少','哪','什么'], answer: '多少' },
        { type: 'fill', sentence: '___个是你的书？', options: ['哪','谁','多少'], answer: '哪' },
        { type: 'fill', sentence: '我有一___本子。', options: ['本','个','都'], answer: '本' },
        { type: 'fill', sentence: '我们的教室在___三教学楼。', options: ['第','个','本'], answer: '第' },
        { type: 'fill', sentence: '他们都是___。', options: ['大学生','老师','学生'], answer: '大学生' },
        { type: 'order', words: ['书','三','有','我','本'], answer: '我有三本书' },
        { type: 'order', words: ['学生','个','有','班','十','我们'], answer: '我们班有十个学生' },
        { type: 'order', words: ['教室','是','这','的','我们'], answer: '这是我们的教室' }
      ],
      hard: [
        { type: 'fill', sentence: '你有___本书？', options: ['几','多少','什么'], answer: '几' },
        { type: 'fill', sentence: '我们班有十___大学生。', options: ['个','本','都'], answer: '个' },
        { type: 'fill', sentence: '这是我们___教室。', options: ['的','有','也'], answer: '的' },
        { type: 'fill', sentence: '我们的教室在第三教学___。', options: ['楼','班','室'], answer: '楼' },
        { type: 'fill', sentence: '你们班有___学生？', options: ['多少','几','哪'], answer: '多少' },
        { type: 'order', words: ['本','书','五','有','我'], answer: '我有五本书' },
        { type: 'order', words: ['学生','多少','有','班','你们','个'], answer: '你们班有多少个学生？' },
        { type: 'order', words: ['教学楼','在','第三','教室','的','我们'], answer: '我们的教室在第三教学楼' },
        { type: 'translate', prompt: 'Em có bốn quyển vở.', answer: '我有四本本子。' },
        { type: 'translate', prompt: 'Lớp các bạn có bao nhiêu sinh viên?', answer: '你们班有多少个学生？' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 4: Mấy giờ học bài?
  // ───────────────────────────────────────────────────────────────────────
  4: {
    id: 4,
    title: 'Mấy giờ học bài?',
    context: 'Mai bắt đầu quen lớp mới, nhưng vẫn hay nhầm thứ tự thời gian trong câu. Thầy Lý dùng lịch học để giúp cả lớp nói về hôm nay, ngày mai và giờ học.',
    vocabPreview: ['今天','明天','星期','点','现在'],
    steps: [
      { type: 'dialogue', speaker: 'laoli', text: '今天是星期一。', pinyin: 'Jīntiān shì xīngqī yī.', meaning: 'Hôm nay là thứ Hai.', expression: null, vocab: ['今天','星期','一'] },
      { type: 'dialogue', speaker: 'mai', text: '老师，明天是星期二吗？', pinyin: 'Lǎoshī, míngtiān shì xīngqī èr ma?', meaning: 'Thầy ơi, ngày mai là thứ Ba ạ?', expression: 'curious', vocab: ['明天','二'] },
      { type: 'dialogue', speaker: 'laoli', text: '对。昨天是星期日。', pinyin: 'Duì. Zuótiān shì xīngqī rì.', meaning: 'Đúng. Hôm qua là Chủ nhật.', expression: null, vocab: ['对','昨天','星期日'] },
      { type: 'dialogue', speaker: 'xiaomei', text: '现在几点？', pinyin: 'Xiànzài jǐ diǎn?', meaning: 'Bây giờ mấy giờ?', expression: null, vocab: ['现在','几','点'] },
      { type: 'choice', speaker: 'mai',
        q: 'Tiểu Mỹ hỏi mấy giờ. Bây giờ 8 giờ, buổi sáng lớp học. Câu nào đúng?',
        options: [
          { text: '现在八点，我们上午上课。', pinyin: 'Xiànzài bā diǎn, wǒmen shàngwǔ shàngkè.', meaning: 'Bây giờ tám giờ, buổi sáng chúng ta học.', correct: true,
            feedback: 'Đúng! Thời gian (上午) đứng TRƯỚC động từ (上课).' },
          { text: '现在八点，我们上课上午。', pinyin: 'Xiànzài bā diǎn, wǒmen shàngkè shàngwǔ.', meaning: '(sai trật tự)', correct: false,
            feedback: 'Sai trật tự — từ chỉ thời gian 上午 phải đứng trước động từ 上课.' },
          { text: '现在八分，我们上午上课。', pinyin: 'Xiànzài bā fēn, wǒmen shàngwǔ shàngkè.', meaning: 'Bây giờ tám phút...', correct: false,
            feedback: 'Sai từ — 分 là "phút"; "tám giờ" dùng 点: 八点.' }
        ] },
      { type: 'dialogue', speaker: 'mai', text: '现在八点。我们上午上课。', pinyin: 'Xiànzài bā diǎn. Wǒmen shàngwǔ shàngkè.', meaning: 'Bây giờ tám giờ. Buổi sáng chúng ta học.', expression: 'focused', vocab: ['八','上午','上课'] },
      { type: 'checkpoint', questions: [
        { q: 'Mai nói bây giờ là mấy giờ?', options: ['七点', '八点', '九点', '十点'], answer: 1 },
        { q: '“明天” nghĩa là gì?', options: ['hôm qua', 'hôm nay', 'ngày mai', 'buổi sáng'], answer: 2 },
        { q: 'Thời gian trong câu tiếng Trung thường đặt ở đâu?', options: ['Trước chủ ngữ hoặc sau chủ ngữ, trước động từ', 'Luôn cuối câu', 'Luôn sau tân ngữ', 'Chỉ đặt sau 吗'], answer: 0 }
      ] },
      { type: 'dialogue', speaker: 'laoli', text: '下午三点我们读课文。', pinyin: 'Xiàwǔ sān diǎn wǒmen dú kèwén.', meaning: 'Ba giờ chiều chúng ta đọc bài khóa.', expression: null, vocab: ['下午','读','课文'] },
      { type: 'dialogue', speaker: 'mai', text: '中午十二点吃饭，对吗？', pinyin: 'Zhōngwǔ shí èr diǎn chīfàn, duì ma?', meaning: 'Mười hai giờ trưa ăn cơm, đúng không ạ?', expression: 'happy', vocab: ['中午','吃饭'] },
      { type: 'dialogue', speaker: 'xiaomei', text: '对！晚上我们休息。', pinyin: 'Duì! Wǎnshang wǒmen xiūxi.', meaning: 'Đúng! Buổi tối chúng ta nghỉ ngơi.', expression: null, vocab: ['晚上','休息'] },
      { type: 'dialogue', speaker: 'mai', text: '我明白了。时间在前边！', pinyin: 'Wǒ míngbai le. Shíjiān zài qiánbian!', meaning: 'Tớ hiểu rồi. Thời gian đứng phía trước!', expression: 'happy', vocab: ['明白','时间','前边'] },
      { type: 'dialogue', speaker: 'laoli', text: '很好！明年你们也要认真学习。', pinyin: 'Hěn hǎo! Míngnián nǐmen yě yào rènzhēn xuéxí.', meaning: 'Tốt lắm! Năm sau các em cũng phải học nghiêm túc.', expression: null, vocab: ['明年','要','认真','学习'] }
    ],
    vocab: [
      { h: '今天', p: 'jīntiān', v: 'hôm nay' }, { h: '明天', p: 'míngtiān', v: 'ngày mai' }, { h: '昨天', p: 'zuótiān', v: 'hôm qua' },
      { h: '年', p: 'nián', v: 'năm' }, { h: '明年', p: 'míngnián', v: 'năm sau' }, { h: '月', p: 'yuè', v: 'tháng' },
      { h: '日', p: 'rì', v: 'ngày' }, { h: '星期', p: 'xīngqī', v: 'tuần/thứ' }, { h: '星期日', p: 'xīngqīrì', v: 'Chủ nhật' },
      { h: '现在', p: 'xiànzài', v: 'bây giờ' }, { h: '点', p: 'diǎn', v: 'giờ/điểm' }, { h: '分', p: 'fēn', v: 'phút' },
      { h: '上午', p: 'shàngwǔ', v: 'buổi sáng' }, { h: '中午', p: 'zhōngwǔ', v: 'buổi trưa' }, { h: '下午', p: 'xiàwǔ', v: 'buổi chiều' },
      { h: '晚上', p: 'wǎnshang', v: 'buổi tối' }, { h: '时候', p: 'shíhou', v: 'lúc/khi' }, { h: '时间', p: 'shíjiān', v: 'thời gian' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '___是星期一。', options: ['今天','点','分'], answer: '今天' },
        { type: 'fill', sentence: '现在八___。', options: ['点','月','年'], answer: '点' },
        { type: 'fill', sentence: '___三点我们读课文。', options: ['下午','什么','谁'], answer: '下午' },
        { type: 'fill', sentence: '明天是星期___。', options: ['二','人','本'], answer: '二' },
        { type: 'fill', sentence: '晚上我们___。', options: ['休息','老师','名字'], answer: '休息' }
      ],
      normal: [
        { type: 'fill', sentence: '___几点？', options: ['现在','哪','谁'], answer: '现在' },
        { type: 'fill', sentence: '中午十二点___。', options: ['吃饭','上车','生病'], answer: '吃饭' },
        { type: 'fill', sentence: '昨天是星期___。', options: ['日','月','年'], answer: '日' },
        { type: 'fill', sentence: '我们上午___。', options: ['上课','睡觉','买'], answer: '上课' },
        { type: 'fill', sentence: '我___了。', options: ['明白','几点','星期'], answer: '明白' },
        { type: 'order', words: ['八点','现在'], answer: '现在八点' },
        { type: 'order', words: ['我们','下午','课文','读'], answer: '下午我们读课文' },
        { type: 'order', words: ['是','今天','星期一'], answer: '今天是星期一' }
      ],
      hard: [
        { type: 'fill', sentence: '时间在___边。', options: ['前','上','下'], answer: '前' },
        { type: 'fill', sentence: '明年你们也___认真学习。', options: ['要','有','叫'], answer: '要' },
        { type: 'fill', sentence: '下午三点我们___课文。', options: ['读','吃','喝'], answer: '读' },
        { type: 'fill', sentence: '今天是星期一，明天是星期___。', options: ['二','日','十'], answer: '二' },
        { type: 'fill', sentence: '中午十二___吃饭。', options: ['点','分','月'], answer: '点' },
        { type: 'order', words: ['明天','星期二','是'], answer: '明天是星期二' },
        { type: 'order', words: ['上课','我们','上午'], answer: '上午我们上课' },
        { type: 'order', words: ['认真','学习','要','你们'], answer: '你们要认真学习' },
        { type: 'translate', prompt: 'Bây giờ là tám giờ.', answer: '现在八点。' },
        { type: 'translate', prompt: 'Ba giờ chiều chúng ta đọc bài khóa.', answer: '下午三点我们读课文。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 5: Căn-tin buổi trưa
  // ───────────────────────────────────────────────────────────────────────
  5: {
    id: 5,
    title: 'Căn-tin buổi trưa',
    context: 'Sau tiết học, Mai đói bụng. Tiểu Mỹ dẫn Mai xuống căn-tin, nơi Mai học cách gọi món và nói mình đói, khát, thích ăn gì.',
    vocabPreview: ['吃','喝','水','米饭','好吃'],
    steps: [
      { type: 'dialogue', speaker: 'xiaomei', text: 'Mai，你饿吗？', pinyin: 'Mai, nǐ è ma?', meaning: 'Mai, cậu đói không?', expression: null, vocab: ['饿'] },
      { type: 'dialogue', speaker: 'mai', text: '我很饿，也很渴。', pinyin: 'Wǒ hěn è, yě hěn kě.', meaning: 'Tớ rất đói, cũng rất khát.', expression: 'sad', vocab: ['渴','也'] },
      { type: 'dialogue', speaker: 'xiaomei', text: '我们去饭店吃饭吧。', pinyin: 'Wǒmen qù fàndiàn chīfàn ba.', meaning: 'Chúng ta đến nhà ăn ăn cơm nhé.', expression: null, vocab: ['去','饭店','吃饭','吧'] },
      { type: 'choice', speaker: 'mai',
        q: 'Mai khát và muốn uống nước. Mai nên nói gì?',
        options: [
          { text: '我想喝水。', pinyin: 'Wǒ xiǎng hē shuǐ.', meaning: 'Tớ muốn uống nước.', correct: true,
            feedback: 'Đúng! Đồ uống (水) đi với động từ 喝 (uống).' },
          { text: '我想吃水。', pinyin: 'Wǒ xiǎng chī shuǐ.', meaning: 'Tớ muốn "ăn" nước.', correct: false,
            feedback: 'Sai cách dùng — 水 (nước) phải "uống" 喝, không "ăn" 吃.' },
          { text: '我想喝菜。', pinyin: 'Wǒ xiǎng hē cài.', meaning: 'Tớ muốn "uống" món ăn.', correct: false,
            feedback: 'Sai từ — 菜 là món ăn (dùng 吃); muốn uống thì 喝水.' }
        ] },
      { type: 'dialogue', speaker: 'mai', text: '我想喝水。', pinyin: 'Wǒ xiǎng hē shuǐ.', meaning: 'Tớ muốn uống nước.', expression: 'focused', vocab: ['想','喝','水'] },
      { type: 'dialogue', speaker: 'xiaomei', text: '这里有茶，也有牛奶。', pinyin: 'Zhèlǐ yǒu chá, yě yǒu niúnǎi.', meaning: 'Ở đây có trà, cũng có sữa bò.', expression: null, vocab: ['这里','茶','牛奶'] },
      { type: 'checkpoint', questions: [
        { q: 'Mai vừa đói vừa gì?', options: ['mệt', 'khát', 'vui', 'lạnh'], answer: 1 },
        { q: '“我想喝水” nghĩa là gì?', options: ['Tớ muốn uống nước', 'Tớ muốn ăn cơm', 'Tớ có trà', 'Tớ không đói'], answer: 0 },
        { q: '“也” dùng để diễn đạt ý nào?', options: ['không', 'cũng', 'ở đâu', 'bao nhiêu'], answer: 1 }
      ] },
      { type: 'dialogue', speaker: 'mai', text: '我吃米饭和菜。', pinyin: 'Wǒ chī mǐfàn hé cài.', meaning: 'Tớ ăn cơm trắng và món ăn/rau.', expression: 'happy', vocab: ['米饭','和','菜'] },
      { type: 'dialogue', speaker: 'xiaomei', text: '我吃面条和鸡蛋。', pinyin: 'Wǒ chī miàntiáo hé jīdàn.', meaning: 'Tớ ăn mì và trứng gà.', expression: null, vocab: ['面条','鸡蛋'] },
      { type: 'dialogue', speaker: 'mai', text: '这个包子很好吃！', pinyin: 'Zhè ge bāozi hěn hǎochī!', meaning: 'Cái bánh bao này ngon quá!', expression: 'surprise', vocab: ['包子','好吃'] },
      { type: 'dialogue', speaker: 'laoli', text: '你们的午饭不错。', pinyin: 'Nǐmen de wǔfàn búcuò.', meaning: 'Bữa trưa của các em không tệ.', expression: null, vocab: ['午饭','不错'] },
      { type: 'dialogue', speaker: 'mai', text: '老师，您也吃饭吗？', pinyin: 'Lǎoshī, nín yě chīfàn ma?', meaning: 'Thầy ơi, thầy cũng ăn cơm ạ?', expression: 'curious', vocab: ['您'] },
      { type: 'dialogue', speaker: 'laoli', text: '我晚上吃晚饭，现在喝茶。', pinyin: 'Wǒ wǎnshang chī wǎnfàn, xiànzài hē chá.', meaning: 'Buổi tối thầy ăn bữa tối, bây giờ uống trà.', expression: null, vocab: ['晚饭'] }
    ],
    vocab: [
      { h: '吃', p: 'chī', v: 'ăn' }, { h: '吃饭', p: 'chīfàn', v: 'ăn cơm/ăn bữa' }, { h: '喝', p: 'hē', v: 'uống' },
      { h: '水', p: 'shuǐ', v: 'nước' }, { h: '茶', p: 'chá', v: 'trà' }, { h: '牛奶', p: 'niúnǎi', v: 'sữa bò' },
      { h: '米饭', p: 'mǐfàn', v: 'cơm trắng' }, { h: '面条', p: 'miàntiáo', v: 'mì sợi' }, { h: '包子', p: 'bāozi', v: 'bánh bao' },
      { h: '菜', p: 'cài', v: 'món ăn/rau' }, { h: '鸡蛋', p: 'jīdàn', v: 'trứng gà' }, { h: '饭店', p: 'fàndiàn', v: 'nhà ăn/nhà hàng' },
      { h: '午饭', p: 'wǔfàn', v: 'bữa trưa' }, { h: '晚饭', p: 'wǎnfàn', v: 'bữa tối' }, { h: '饿', p: 'è', v: 'đói' },
      { h: '渴', p: 'kě', v: 'khát' }, { h: '好吃', p: 'hǎochī', v: 'ngon' }, { h: '想', p: 'xiǎng', v: 'muốn/nghĩ' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我很___。', options: ['饿','水','茶'], answer: '饿' },
        { type: 'fill', sentence: '我想喝___。', options: ['水','米饭','菜'], answer: '水' },
        { type: 'fill', sentence: '这里有茶，___有牛奶。', options: ['也','不','谁'], answer: '也' },
        { type: 'fill', sentence: '我吃米饭___菜。', options: ['和','吗','的'], answer: '和' },
        { type: 'fill', sentence: '这个包子很___。', options: ['好吃','渴','点'], answer: '好吃' }
      ],
      normal: [
        { type: 'fill', sentence: '你___吗？', options: ['饿','水','饭店'], answer: '饿' },
        { type: 'fill', sentence: '我们去饭店___。', options: ['吃饭','喝水','上课'], answer: '吃饭' },
        { type: 'fill', sentence: '我吃面条和___。', options: ['鸡蛋','牛奶','茶'], answer: '鸡蛋' },
        { type: 'fill', sentence: '老师___喝茶。', options: ['现在','多少','哪里'], answer: '现在' },
        { type: 'fill', sentence: '我晚上吃___。', options: ['晚饭','午饭','早饭'], answer: '晚饭' },
        { type: 'order', words: ['喝','水','想','我'], answer: '我想喝水' },
        { type: 'order', words: ['米饭','吃','我','和','菜'], answer: '我吃米饭和菜' },
        { type: 'order', words: ['有','茶','这里'], answer: '这里有茶' }
      ],
      hard: [
        { type: 'fill', sentence: '我很饿，也很___。', options: ['渴','菜','本'], answer: '渴' },
        { type: 'fill', sentence: '这个___很好吃。', options: ['包子','水','茶'], answer: '包子' },
        { type: 'fill', sentence: '您也___饭吗？', options: ['吃','喝','读'], answer: '吃' },
        { type: 'fill', sentence: '这里有茶，也___牛奶。', options: ['有','是','叫'], answer: '有' },
        { type: 'fill', sentence: '中午我们吃___。', options: ['午饭','晚饭','明年'], answer: '午饭' },
        { type: 'order', words: ['很','包子','这个','好吃'], answer: '这个包子很好吃' },
        { type: 'order', words: ['饭店','我们','吃饭','去'], answer: '我们去饭店吃饭' },
        { type: 'order', words: ['茶','喝','现在','老师'], answer: '老师现在喝茶' },
        { type: 'translate', prompt: 'Tớ rất đói và khát.', answer: '我很饿，也很渴。' },
        { type: 'translate', prompt: 'Ở đây có trà và sữa bò.', answer: '这里有茶，也有牛奶。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 6: Đi đâu vậy?
  // ───────────────────────────────────────────────────────────────────────
  6: {
    id: 6,
    title: 'Đi đâu vậy?',
    context: 'Cuối tuần, Mai muốn đi chơi nhưng không biết đường. Tiểu Mỹ chỉ Mai cách hỏi đường và nói về phương tiện đi lại.',
    vocabPreview: ['去','来','在','哪儿','怎么'],
    steps: [
      { type: 'dialogue', speaker: 'mai', text: '小美，你去哪儿？', pinyin: 'Xiǎoměi, nǐ qù nǎr?', meaning: 'Tiểu Mỹ, cậu đi đâu vậy?', expression: 'curious', vocab: ['去','哪儿'] },
      { type: 'dialogue', speaker: 'xiaomei', text: '我去商店买东西。', pinyin: 'Wǒ qù shāngdiàn mǎi dōngxi.', meaning: 'Tớ đi cửa hàng mua đồ.', expression: null, vocab: ['商店','买','东西'] },
      { type: 'dialogue', speaker: 'mai', text: '商店在哪儿？', pinyin: 'Shāngdiàn zài nǎr?', meaning: 'Cửa hàng ở đâu?', expression: 'curious', vocab: ['在'] },
      { type: 'dialogue', speaker: 'xiaomei', text: '在学校前边，很近。', pinyin: 'Zài xuéxiào qiánbian, hěn jìn.', meaning: 'Ở phía trước trường, rất gần.', expression: null, vocab: ['学校','近'] },
      { type: 'dialogue', speaker: 'mai', text: '怎么去？走路吗？', pinyin: 'Zěnme qù? Zǒulù ma?', meaning: 'Đi bằng cách nào? Đi bộ à?', expression: 'focused', vocab: ['怎么','走路'] },
      { type: 'checkpoint', questions: [
        { q: 'Tiểu Mỹ đi đâu?', options: ['学校', '商店', '饭店', '医院'], answer: 1 },
        { q: '"在哪儿" dùng để hỏi gì?', options: ['bao nhiêu', 'ở đâu', 'khi nào', 'ai'], answer: 1 },
        { q: '"怎么去" nghĩa là gì?', options: ['Đi đâu?', 'Đi bằng cách nào?', 'Đi với ai?', 'Đi khi nào?'], answer: 1 }
      ] },
      { type: 'dialogue', speaker: 'xiaomei', text: '可以走路，也可以坐车。', pinyin: 'Kěyǐ zǒulù, yě kěyǐ zuòchē.', meaning: 'Có thể đi bộ, cũng có thể đi xe.', expression: null, vocab: ['可以','坐','车'] },
      { type: 'choice', speaker: 'mai',
        q: 'Tiểu Mỹ nói có thể đi bộ hoặc đi xe. Mai muốn đi xe buýt. Mai nói sao?',
        options: [
          { text: '我想坐公共汽车。', pinyin: 'Wǒ xiǎng zuò gōnggòng qìchē.', meaning: 'Tớ muốn đi xe buýt.', correct: true,
            feedback: 'Đúng! "Đi xe buýt" = 坐 + 公共汽车.' },
          { text: '我想坐车站。', pinyin: 'Wǒ xiǎng zuò chēzhàn.', meaning: 'Tớ muốn "ngồi" bến xe.', correct: false,
            feedback: 'Sai — 车站 là BẾN xe (địa điểm), không "ngồi" được; phương tiện là 公共汽车.' },
          { text: '我想去商店。', pinyin: 'Wǒ xiǎng qù shāngdiàn.', meaning: 'Tớ muốn đi cửa hàng.', correct: false,
            feedback: 'Lạc câu hỏi — đang chọn ĐI BẰNG GÌ, không phải đi đâu.' }
        ] },
      { type: 'dialogue', speaker: 'mai', text: '我想坐公共汽车。', pinyin: 'Wǒ xiǎng zuò gōnggòng qìchē.', meaning: 'Tớ muốn đi xe buýt.', expression: 'happy', vocab: ['公共汽车'] },
      { type: 'dialogue', speaker: 'xiaomei', text: '车站在那边，我们一起去吧！', pinyin: 'Chēzhàn zài nàbian, wǒmen yìqǐ qù ba!', meaning: 'Bến xe ở đằng kia, chúng ta cùng đi nhé!', expression: null, vocab: ['车站','那边','一起'] },
      { type: 'dialogue', speaker: 'mai', text: '太好了！你来我家玩儿吧。', pinyin: 'Tài hǎo le! Nǐ lái wǒ jiā wánr ba.', meaning: 'Tuyệt quá! Cậu đến nhà tớ chơi nhé.', expression: 'happy', vocab: ['来','玩儿','太'] },
      { type: 'dialogue', speaker: 'xiaomei', text: '好！你家远不远？', pinyin: 'Hǎo! Nǐ jiā yuǎn bù yuǎn?', meaning: 'Được! Nhà cậu xa không?', expression: null, vocab: ['远'] }
    ],
    vocab: [
      { h: '去', p: 'qù', v: 'đi' }, { h: '来', p: 'lái', v: 'đến' }, { h: '在', p: 'zài', v: 'ở/đang' },
      { h: '哪儿', p: 'nǎr', v: 'ở đâu' }, { h: '这儿', p: 'zhèr', v: 'ở đây' }, { h: '那儿', p: 'nàr', v: 'ở đó' },
      { h: '怎么', p: 'zěnme', v: 'thế nào/sao' }, { h: '走', p: 'zǒu', v: 'đi/đi bộ' }, { h: '走路', p: 'zǒulù', v: 'đi bộ' },
      { h: '坐', p: 'zuò', v: 'ngồi/đi (xe)' }, { h: '车', p: 'chē', v: 'xe' }, { h: '公共汽车', p: 'gōnggòng qìchē', v: 'xe buýt' },
      { h: '车站', p: 'chēzhàn', v: 'bến xe/ga' }, { h: '商店', p: 'shāngdiàn', v: 'cửa hàng' }, { h: '学校', p: 'xuéxiào', v: 'trường học' },
      { h: '近', p: 'jìn', v: 'gần' }, { h: '远', p: 'yuǎn', v: 'xa' }, { h: '一起', p: 'yìqǐ', v: 'cùng nhau' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '你___哪儿？', options: ['去','在','有'], answer: '去' },
        { type: 'fill', sentence: '商店___学校前边。', options: ['在','去','来'], answer: '在' },
        { type: 'fill', sentence: '___去？走路吗？', options: ['怎么','什么','哪儿'], answer: '怎么' },
        { type: 'fill', sentence: '我想___公共汽车。', options: ['坐','吃','喝'], answer: '坐' },
        { type: 'fill', sentence: '我们___去吧！', options: ['一起','一个','一本'], answer: '一起' }
      ],
      normal: [
        { type: 'fill', sentence: '商店在___？', options: ['哪儿','什么','谁'], answer: '哪儿' },
        { type: 'fill', sentence: '可以走路，___可以坐车。', options: ['也','不','很'], answer: '也' },
        { type: 'fill', sentence: '车站在___边。', options: ['那','这','哪'], answer: '那' },
        { type: 'fill', sentence: '你___我家玩儿吧。', options: ['来','去','在'], answer: '来' },
        { type: 'fill', sentence: '你家___不远？', options: ['远','近','大'], answer: '远' },
        { type: 'order', words: ['哪儿','去','你'], answer: '你去哪儿？' },
        { type: 'order', words: ['在','商店','学校','前边'], answer: '商店在学校前边' },
        { type: 'order', words: ['公共汽车','想','我','坐'], answer: '我想坐公共汽车' }
      ],
      hard: [
        { type: 'fill', sentence: '我去商店___东西。', options: ['买','卖','看'], answer: '买' },
        { type: 'fill', sentence: '___好了！', options: ['太','很','也'], answer: '太' },
        { type: 'fill', sentence: '可以走路，也___坐车。', options: ['可以','可能','会'], answer: '可以' },
        { type: 'fill', sentence: '车站在那边，我们一起___吧！', options: ['去','来','在'], answer: '去' },
        { type: 'fill', sentence: '学校___边有商店。', options: ['前','上','下'], answer: '前' },
        { type: 'order', words: ['东西','买','商店','去','我'], answer: '我去商店买东西' },
        { type: 'order', words: ['玩儿','来','家','我','你','吧'], answer: '你来我家玩儿吧' },
        { type: 'order', words: ['远','不','你','家','远'], answer: '你家远不远？' },
        { type: 'translate', prompt: 'Cửa hàng ở đâu?', answer: '商店在哪儿？' },
        { type: 'translate', prompt: 'Tớ muốn đi xe buýt.', answer: '我想坐公共汽车。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 7: Thời tiết hôm nay
  // ───────────────────────────────────────────────────────────────────────
  7: {
    id: 7,
    title: 'Thời tiết hôm nay',
    context: 'Sáng thứ Hai, trời đổ mưa. Mai không mang ô, Tiểu Mỹ cho mượn. Hai đứa nói về thời tiết và quần áo.',
    vocabPreview: ['天气','冷','热','下雨','穿'],
    steps: [
      { type: 'dialogue', speaker: 'mai', text: '今天天气怎么样？', pinyin: 'Jīntiān tiānqì zěnmeyàng?', meaning: 'Hôm nay thời tiết thế nào?', expression: 'curious', vocab: ['天气','怎么样'] },
      { type: 'dialogue', speaker: 'xiaomei', text: '今天下雨，很冷。', pinyin: 'Jīntiān xiàyǔ, hěn lěng.', meaning: 'Hôm nay mưa, rất lạnh.', expression: null, vocab: ['下雨','冷'] },
      { type: 'choice', speaker: 'mai',
        q: 'Trời đang mưa mà Mai quên mang ô. Mai thốt lên thế nào?',
        options: [
          { text: '我没有雨伞！', pinyin: 'Wǒ méiyǒu yǔsǎn!', meaning: 'Tớ không có ô!', correct: true,
            feedback: 'Đúng! 没有 = "không có"; trời mưa cần 雨伞 (ô).' },
          { text: '我有雨伞！', pinyin: 'Wǒ yǒu yǔsǎn!', meaning: 'Tớ có ô!', correct: false,
            feedback: 'Ngược nghĩa — Mai KHÔNG có ô (没有) nên mới lo.' },
          { text: '我没有裙子！', pinyin: 'Wǒ méiyǒu qúnzi!', meaning: 'Tớ không có váy!', correct: false,
            feedback: 'Sai từ — trời mưa cần 雨伞 (ô), không liên quan 裙子 (váy).' }
        ] },
      { type: 'dialogue', speaker: 'mai', text: '我没有雨伞！', pinyin: 'Wǒ méiyǒu yǔsǎn!', meaning: 'Tớ không có ô!', expression: 'sad', vocab: ['雨伞'] },
      { type: 'dialogue', speaker: 'xiaomei', text: '没关系，我有两把。给你一把。', pinyin: 'Méi guānxi, wǒ yǒu liǎng bǎ. Gěi nǐ yì bǎ.', meaning: 'Không sao, tớ có hai cái. Cho cậu một cái.', expression: null, vocab: ['把','给'] },
      { type: 'dialogue', speaker: 'mai', text: '谢谢！你穿的衣服很好看。', pinyin: 'Xièxie! Nǐ chuān de yīfu hěn hǎokàn.', meaning: 'Cảm ơn! Quần áo cậu mặc đẹp quá.', expression: 'happy', vocab: ['穿','衣服','好看'] },
      { type: 'checkpoint', questions: [
        { q: 'Hôm nay thời tiết thế nào?', options: ['nóng', 'mưa và lạnh', 'nắng', 'gió'], answer: 1 },
        { q: '"下雨" nghĩa là gì?', options: ['trời nắng', 'trời mưa', 'trời lạnh', 'trời nóng'], answer: 1 },
        { q: '"把" trong "一把雨伞" là gì?', options: ['lượng từ cho ô/dao', 'động từ', 'tính từ', 'đại từ'], answer: 0 }
      ] },
      { type: 'dialogue', speaker: 'xiaomei', text: '昨天很热，我穿裙子。', pinyin: 'Zuótiān hěn rè, wǒ chuān qúnzi.', meaning: 'Hôm qua rất nóng, tớ mặc váy.', expression: null, vocab: ['热','裙子'] },
      { type: 'dialogue', speaker: 'mai', text: '明天天气好吗？', pinyin: 'Míngtiān tiānqì hǎo ma?', meaning: 'Ngày mai thời tiết tốt không?', expression: 'curious', vocab: [] },
      { type: 'dialogue', speaker: 'xiaomei', text: '明天不下雨，会很暖和。', pinyin: 'Míngtiān bù xiàyǔ, huì hěn nuǎnhuo.', meaning: 'Ngày mai không mưa, sẽ rất ấm áp.', expression: null, vocab: ['会','暖和'] },
      { type: 'dialogue', speaker: 'mai', text: '太好了！我可以穿新衣服。', pinyin: 'Tài hǎo le! Wǒ kěyǐ chuān xīn yīfu.', meaning: 'Tuyệt quá! Tớ có thể mặc quần áo mới.', expression: 'happy', vocab: ['新'] }
    ],
    vocab: [
      { h: '天气', p: 'tiānqì', v: 'thời tiết' }, { h: '怎么样', p: 'zěnmeyàng', v: 'thế nào' }, { h: '下雨', p: 'xiàyǔ', v: 'mưa' },
      { h: '冷', p: 'lěng', v: 'lạnh' }, { h: '热', p: 'rè', v: 'nóng' }, { h: '暖和', p: 'nuǎnhuo', v: 'ấm áp' },
      { h: '雨伞', p: 'yǔsǎn', v: 'ô/dù' }, { h: '把', p: 'bǎ', v: '(lượng từ) cái/chiếc' }, { h: '给', p: 'gěi', v: 'cho/tặng' },
      { h: '穿', p: 'chuān', v: 'mặc' }, { h: '衣服', p: 'yīfu', v: 'quần áo' }, { h: '裙子', p: 'qúnzi', v: 'váy' },
      { h: '好看', p: 'hǎokàn', v: 'đẹp/hay nhìn' }, { h: '新', p: 'xīn', v: 'mới' }, { h: '会', p: 'huì', v: 'sẽ/biết' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '今天___怎么样？', options: ['天气','时间','名字'], answer: '天气' },
        { type: 'fill', sentence: '今天下雨，很___。', options: ['冷','热','好'], answer: '冷' },
        { type: 'fill', sentence: '我没有___！', options: ['雨伞','米饭','牛奶'], answer: '雨伞' },
        { type: 'fill', sentence: '你___的衣服很好看。', options: ['穿','吃','喝'], answer: '穿' },
        { type: 'fill', sentence: '明天会很___。', options: ['暖和','下雨','冷'], answer: '暖和' }
      ],
      normal: [
        { type: 'fill', sentence: '今天天气___？', options: ['怎么样','什么','哪儿'], answer: '怎么样' },
        { type: 'fill', sentence: '我有两___雨伞。', options: ['把','个','本'], answer: '把' },
        { type: 'fill', sentence: '___你一把。', options: ['给','有','是'], answer: '给' },
        { type: 'fill', sentence: '昨天很___，我穿裙子。', options: ['热','冷','下雨'], answer: '热' },
        { type: 'fill', sentence: '我可以穿___衣服。', options: ['新','旧','大'], answer: '新' },
        { type: 'order', words: ['怎么样','天气','今天'], answer: '今天天气怎么样？' },
        { type: 'order', words: ['下雨','今天','很','冷'], answer: '今天下雨，很冷' },
        { type: 'order', words: ['衣服','好看','很','你','穿','的'], answer: '你穿的衣服很好看' }
      ],
      hard: [
        { type: 'fill', sentence: '明天不下雨，___很暖和。', options: ['会','有','在'], answer: '会' },
        { type: 'fill', sentence: '没关系，我有两把。___你一把。', options: ['给','有','是'], answer: '给' },
        { type: 'fill', sentence: '昨天很热，我穿___。', options: ['裙子','雨伞','书'], answer: '裙子' },
        { type: 'fill', sentence: '你穿___衣服很好看。', options: ['的','得','地'], answer: '的' },
        { type: 'fill', sentence: '太好了！我___穿新衣服。', options: ['可以','可能','会'], answer: '可以' },
        { type: 'order', words: ['雨伞','没有','我'], answer: '我没有雨伞' },
        { type: 'order', words: ['暖和','明天','会','很'], answer: '明天会很暖和' },
        { type: 'order', words: ['新','穿','可以','衣服','我'], answer: '我可以穿新衣服' },
        { type: 'translate', prompt: 'Hôm nay thời tiết thế nào?', answer: '今天天气怎么样？' },
        { type: 'translate', prompt: 'Ngày mai sẽ rất ấm áp.', answer: '明天会很暖和。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 8: Trong thư viện
  // ───────────────────────────────────────────────────────────────────────
  8: {
    id: 8,
    title: 'Trong thư viện',
    context: 'Mai và Tiểu Mỹ vào thư viện để chuẩn bị bài. Mai học cách nói vị trí đồ vật và mượn sách đúng chỗ.',
    vocabPreview: ['图书馆','里','上','下','旁边'],
    steps: [
      { type: 'dialogue', speaker: 'xiaomei', text: '我们去图书馆学习吧。', pinyin: 'Wǒmen qù túshūguǎn xuéxí ba.', meaning: 'Chúng ta đến thư viện học nhé.', expression: null, vocab: ['图书馆','学习'] },
      { type: 'dialogue', speaker: 'mai', text: '好。我的书包在哪儿？', pinyin: 'Hǎo. Wǒ de shūbāo zài nǎr?', meaning: 'Được. Cặp sách của tớ ở đâu?', expression: 'confused', vocab: ['书包'] },
      { type: 'dialogue', speaker: 'xiaomei', text: '你的书包在桌子上。', pinyin: 'Nǐ de shūbāo zài zhuōzi shàng.', meaning: 'Cặp của cậu ở trên bàn.', expression: null, vocab: ['桌子','上'] },
      { type: 'dialogue', speaker: 'mai', text: '我的本子在书包里。', pinyin: 'Wǒ de běnzi zài shūbāo lǐ.', meaning: 'Vở của tớ ở trong cặp.', expression: 'focused', vocab: ['里'] },
      { type: 'dialogue', speaker: 'laoli', text: '书店在图书馆旁边。', pinyin: 'Shūdiàn zài túshūguǎn pángbiān.', meaning: 'Hiệu sách ở bên cạnh thư viện.', expression: null, vocab: ['书店','旁边'] },
      { type: 'checkpoint', questions: [
        { q: 'Cặp sách của Mai ở đâu?', options: ['桌子上', '书店里', '学校前边', '车站旁边'], answer: 0 },
        { q: '"在...里" diễn tả gì?', options: ['ở bên trong', 'ở bên ngoài', 'đi đến', 'mua đồ'], answer: 0 },
        { q: 'Hiệu sách ở đâu?', options: ['trên bàn', 'trong cặp', 'bên cạnh thư viện', 'ở bệnh viện'], answer: 2 }
      ] },
      { type: 'choice', speaker: 'mai',
        q: 'Mai sắp xếp đồ: sách ở phía trên, vở ở phía dưới. Câu nào đúng?',
        options: [
          { text: '书在上边，本子在下边。', pinyin: 'Shū zài shàngbian, běnzi zài xiàbian.', meaning: 'Sách ở phía trên, vở ở phía dưới.', correct: true,
            feedback: 'Đúng! 上边 = phía trên, 下边 = phía dưới.' },
          { text: '书在下边，本子在上边。', pinyin: 'Shū zài xiàbian, běnzi zài shàngbian.', meaning: 'Sách ở dưới, vở ở trên.', correct: false,
            feedback: 'Ngược vị trí — sách ở TRÊN (上边), vở ở DƯỚI (下边).' },
          { text: '书在上边，本子在旁边。', pinyin: 'Shū zài shàngbian, běnzi zài pángbiān.', meaning: 'Sách ở trên, vở ở bên cạnh.', correct: false,
            feedback: 'Sai hướng — đang nói trên/dưới (上边/下边), không phải 旁边 (bên cạnh).' }
        ] },
      { type: 'dialogue', speaker: 'mai', text: '书在上边，本子在下边。', pinyin: 'Shū zài shàngbian, běnzi zài xiàbian.', meaning: 'Sách ở phía trên, vở ở phía dưới.', expression: 'happy', vocab: ['上边','下边'] },
      { type: 'dialogue', speaker: 'xiaomei', text: '你的手机在椅子下。', pinyin: 'Nǐ de shǒujī zài yǐzi xià.', meaning: 'Điện thoại của cậu ở dưới ghế.', expression: null, vocab: ['手机','椅子','下'] },
      { type: 'dialogue', speaker: 'mai', text: '啊，我找到了！谢谢。', pinyin: 'À, wǒ zhǎodào le! Xièxie.', meaning: 'À, tớ tìm thấy rồi! Cảm ơn.', expression: 'surprise', vocab: ['找到'] },
      { type: 'dialogue', speaker: 'laoli', text: '很好。学习的时候，东西要放好。', pinyin: 'Hěn hǎo. Xuéxí de shíhou, dōngxi yào fàng hǎo.', meaning: 'Tốt. Khi học, đồ đạc phải để gọn.', expression: null, vocab: ['放'] }
    ],
    vocab: [
      { h: '图书馆', p: 'túshūguǎn', v: 'thư viện' }, { h: '书店', p: 'shūdiàn', v: 'hiệu sách' }, { h: '书包', p: 'shūbāo', v: 'cặp sách' },
      { h: '桌子', p: 'zhuōzi', v: 'bàn' }, { h: '椅子', p: 'yǐzi', v: 'ghế' }, { h: '手机', p: 'shǒujī', v: 'điện thoại' },
      { h: '里', p: 'lǐ', v: 'trong' }, { h: '上', p: 'shàng', v: 'trên/lên' }, { h: '下', p: 'xià', v: 'dưới/xuống' },
      { h: '上边', p: 'shàngbian', v: 'phía trên' }, { h: '下边', p: 'xiàbian', v: 'phía dưới' }, { h: '旁边', p: 'pángbiān', v: 'bên cạnh' },
      { h: '找', p: 'zhǎo', v: 'tìm' }, { h: '找到', p: 'zhǎodào', v: 'tìm thấy' }, { h: '放', p: 'fàng', v: 'đặt/để' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我们去___学习。', options: ['图书馆','饭店','医院'], answer: '图书馆' },
        { type: 'fill', sentence: '书包在桌子___。', options: ['上','里','旁边'], answer: '上' },
        { type: 'fill', sentence: '本子在书包___。', options: ['里','去','来'], answer: '里' },
        { type: 'fill', sentence: '书店在图书馆___。', options: ['旁边','下雨','吃饭'], answer: '旁边' },
        { type: 'fill', sentence: '我___到了。', options: ['找','吃','喝'], answer: '找' }
      ],
      normal: [
        { type: 'fill', sentence: '你的书包在___上。', options: ['桌子','天气','米饭'], answer: '桌子' },
        { type: 'fill', sentence: '手机在椅子___。', options: ['下','上课','多少'], answer: '下' },
        { type: 'fill', sentence: '学习的时候，东西要___好。', options: ['放','跑','唱'], answer: '放' },
        { type: 'fill', sentence: '书在___边，本子在下边。', options: ['上','左','右'], answer: '上' },
        { type: 'fill', sentence: '我的___在书包里。', options: ['本子','车站','天气'], answer: '本子' },
        { type: 'order', words: ['书包','桌子','在','上'], answer: '书包在桌子上' },
        { type: 'order', words: ['本子','书包','在','里'], answer: '本子在书包里' },
        { type: 'order', words: ['书店','图书馆','在','旁边'], answer: '书店在图书馆旁边' }
      ],
      hard: [
        { type: 'fill', sentence: '你的手机在椅子___。', options: ['下','里','上边'], answer: '下' },
        { type: 'fill', sentence: '学习___时候，东西要放好。', options: ['的','得','地'], answer: '的' },
        { type: 'fill', sentence: '书在上边，本子在___边。', options: ['下','前','后'], answer: '下' },
        { type: 'fill', sentence: '我___到了，谢谢。', options: ['找','看','听'], answer: '找' },
        { type: 'fill', sentence: '我们去图书馆___。', options: ['学习','吃饭','看病'], answer: '学习' },
        { type: 'order', words: ['手机','椅子','下','在'], answer: '手机在椅子下' },
        { type: 'order', words: ['东西','放好','要'], answer: '东西要放好' },
        { type: 'order', words: ['去','学习','图书馆','我们'], answer: '我们去图书馆学习' },
        { type: 'translate', prompt: 'Cặp sách ở trên bàn.', answer: '书包在桌子上。' },
        { type: 'translate', prompt: 'Hiệu sách ở bên cạnh thư viện.', answer: '书店在图书馆旁边。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 9: Một ngày của Mai
  // ───────────────────────────────────────────────────────────────────────
  9: {
    id: 9,
    title: 'Một ngày của Mai',
    context: 'Thầy Lý yêu cầu mỗi người kể lịch sinh hoạt. Mai kể từ lúc thức dậy đến khi ngủ, rồi nhận ra mình thường quên ôn bài buổi tối.',
    vocabPreview: ['起床','睡觉','常常','有时候','忘记'],
    steps: [
      { type: 'dialogue', speaker: 'laoli', text: 'Mai，你早上几点起床？', pinyin: 'Mai, nǐ zǎoshang jǐ diǎn qǐchuáng?', meaning: 'Mai, buổi sáng em mấy giờ dậy?', expression: null, vocab: ['早上','起床'] },
      { type: 'choice', speaker: 'mai',
        q: 'Thầy hỏi buổi sáng Mai mấy giờ dậy. Mai dậy lúc 6 giờ sáng. Câu nào đúng?',
        options: [
          { text: '我早上六点起床。', pinyin: 'Wǒ zǎoshang liù diǎn qǐchuáng.', meaning: 'Em sáu giờ sáng dậy.', correct: true,
            feedback: 'Đúng! 起床 = thức dậy; thời gian 早上六点 đứng trước.' },
          { text: '我早上六点睡觉。', pinyin: 'Wǒ zǎoshang liù diǎn shuìjiào.', meaning: 'Em sáu giờ sáng đi ngủ.', correct: false,
            feedback: 'Ngược nghĩa — buổi sáng là 起床 (dậy), 睡觉 là đi ngủ.' },
          { text: '我晚上六点起床。', pinyin: 'Wǒ wǎnshang liù diǎn qǐchuáng.', meaning: 'Em sáu giờ tối dậy.', correct: false,
            feedback: 'Lạc ngữ cảnh — thầy hỏi BUỔI SÁNG (早上), không phải 晚上 (tối).' }
        ] },
      { type: 'dialogue', speaker: 'mai', text: '我早上六点起床。', pinyin: 'Wǒ zǎoshang liù diǎn qǐchuáng.', meaning: 'Em sáu giờ sáng dậy.', expression: 'focused', vocab: [] },
      { type: 'dialogue', speaker: 'laoli', text: '你几点上学？', pinyin: 'Nǐ jǐ diǎn shàngxué?', meaning: 'Em mấy giờ đi học?', expression: null, vocab: ['上学'] },
      { type: 'dialogue', speaker: 'mai', text: '我七点上学，下午五点放学。', pinyin: 'Wǒ qī diǎn shàngxué, xiàwǔ wǔ diǎn fàngxué.', meaning: 'Em bảy giờ đi học, năm giờ chiều tan học.', expression: 'happy', vocab: ['放学'] },
      { type: 'dialogue', speaker: 'xiaomei', text: '你晚上做什么？', pinyin: 'Nǐ wǎnshang zuò shénme?', meaning: 'Buổi tối cậu làm gì?', expression: null, vocab: ['做'] },
      { type: 'checkpoint', questions: [
        { q: 'Mai mấy giờ thức dậy?', options: ['五点', '六点', '七点', '八点'], answer: 1 },
        { q: '"放学" nghĩa là gì?', options: ['đi học', 'tan học', 'ngủ', 'ăn sáng'], answer: 1 },
        { q: '"常常" diễn tả tần suất nào?', options: ['không bao giờ', 'thường xuyên', 'hôm qua', 'ở đâu'], answer: 1 }
      ] },
      { type: 'dialogue', speaker: 'mai', text: '我常常读书，也写汉字。', pinyin: 'Wǒ chángcháng dúshū, yě xiě Hànzì.', meaning: 'Tớ thường đọc sách, cũng viết chữ Hán.', expression: 'focused', vocab: ['常常','读书','写','汉字'] },
      { type: 'dialogue', speaker: 'mai', text: '有时候我上网看电影。', pinyin: 'Yǒu shíhou wǒ shàngwǎng kàn diànyǐng.', meaning: 'Đôi khi tớ lên mạng xem phim.', expression: 'happy', vocab: ['有时候','上网','电影'] },
      { type: 'dialogue', speaker: 'xiaomei', text: '你别忘记复习！', pinyin: 'Nǐ bié wàngjì fùxí!', meaning: 'Cậu đừng quên ôn tập nhé!', expression: null, vocab: ['别','忘记','复习'] },
      { type: 'dialogue', speaker: 'mai', text: '对，我晚上十点睡觉。睡觉前复习。', pinyin: 'Duì, wǒ wǎnshang shí diǎn shuìjiào. Shuìjiào qián fùxí.', meaning: 'Đúng rồi, tớ mười giờ tối ngủ. Trước khi ngủ ôn bài.', expression: 'happy', vocab: ['睡觉','前'] }
    ],
    vocab: [
      { h: '起床', p: 'qǐchuáng', v: 'thức dậy' }, { h: '睡觉', p: 'shuìjiào', v: 'ngủ' }, { h: '上学', p: 'shàngxué', v: 'đi học' },
      { h: '放学', p: 'fàngxué', v: 'tan học' }, { h: '做', p: 'zuò', v: 'làm' }, { h: '读书', p: 'dúshū', v: 'đọc sách/học' },
      { h: '写', p: 'xiě', v: 'viết' }, { h: '汉字', p: 'Hànzì', v: 'chữ Hán' }, { h: '上网', p: 'shàngwǎng', v: 'lên mạng' },
      { h: '电影', p: 'diànyǐng', v: 'phim' }, { h: '常常', p: 'chángcháng', v: 'thường xuyên' }, { h: '有时候', p: 'yǒu shíhou', v: 'đôi khi' },
      { h: '别', p: 'bié', v: 'đừng' }, { h: '忘记', p: 'wàngjì', v: 'quên' }, { h: '复习', p: 'fùxí', v: 'ôn tập' }, { h: '前', p: 'qián', v: 'trước' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我早上六点___。', options: ['起床','睡觉','下雨'], answer: '起床' },
        { type: 'fill', sentence: '下午五点___。', options: ['放学','上网','喝茶'], answer: '放学' },
        { type: 'fill', sentence: '我常常___书。', options: ['读','吃','坐'], answer: '读' },
        { type: 'fill', sentence: '别___复习。', options: ['忘记','天气','书包'], answer: '忘记' },
        { type: 'fill', sentence: '晚上十点___。', options: ['睡觉','上学','放学'], answer: '睡觉' }
      ],
      normal: [
        { type: 'fill', sentence: '你晚上___什么？', options: ['做','哪儿','几'], answer: '做' },
        { type: 'fill', sentence: '我常常读书，___写汉字。', options: ['也','不','没'], answer: '也' },
        { type: 'fill', sentence: '___我上网看电影。', options: ['有时候','哪儿','多少'], answer: '有时候' },
        { type: 'fill', sentence: '睡觉___复习。', options: ['前','后','里'], answer: '前' },
        { type: 'fill', sentence: '我七点___。', options: ['上学','生病','看病'], answer: '上学' },
        { type: 'order', words: ['六点','起床','我'], answer: '我六点起床' },
        { type: 'order', words: ['常常','读书','我'], answer: '我常常读书' },
        { type: 'order', words: ['忘记','复习','别'], answer: '别忘记复习' }
      ],
      hard: [
        { type: 'fill', sentence: '我早上六点起床，七点___。', options: ['上学','睡觉','放学'], answer: '上学' },
        { type: 'fill', sentence: '下午五点放学，晚上十点___。', options: ['睡觉','起床','上车'], answer: '睡觉' },
        { type: 'fill', sentence: '我常常读书，也写___。', options: ['汉字','天气','汽车'], answer: '汉字' },
        { type: 'fill', sentence: '有时候我___看电影。', options: ['上网','上车','上课'], answer: '上网' },
        { type: 'fill', sentence: '睡觉前___。', options: ['复习','吃午饭','下车'], answer: '复习' },
        { type: 'order', words: ['下午','五点','放学','我'], answer: '我下午五点放学' },
        { type: 'order', words: ['上网','看','电影','我'], answer: '我上网看电影' },
        { type: 'order', words: ['睡觉','十点','晚上','我'], answer: '我晚上十点睡觉' },
        { type: 'translate', prompt: 'Tớ thường viết chữ Hán.', answer: '我常常写汉字。' },
        { type: 'translate', prompt: 'Đừng quên ôn tập.', answer: '别忘记复习。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 10: Mai bị ốm
  // ───────────────────────────────────────────────────────────────────────
  10: {
    id: 10,
    title: 'Mai bị ốm',
    context: 'Một ngày mưa lạnh, Mai thấy mệt và phải đến bệnh viện. Bài này giúp học cách nói về sức khỏe, cảm giác và hỏi thăm.',
    vocabPreview: ['身体','生病','医生','医院','觉得'],
    steps: [
      { type: 'dialogue', speaker: 'xiaomei', text: 'Mai，你今天不高兴吗？', pinyin: 'Mai, nǐ jīntiān bù gāoxìng ma?', meaning: 'Mai, hôm nay cậu không vui à?', expression: null, vocab: ['不高兴'] },
      { type: 'choice', speaker: 'mai',
        q: 'Tiểu Mỹ hỏi sao Mai không vui. Mai thấy rất mệt. Mai nói gì?',
        options: [
          { text: '我觉得很累。', pinyin: 'Wǒ juéde hěn lèi.', meaning: 'Tớ cảm thấy rất mệt.', correct: true,
            feedback: 'Đúng! 觉得 = "cảm thấy", diễn tả cảm giác cơ thể.' },
          { text: '我觉得很舒服。', pinyin: 'Wǒ juéde hěn shūfu.', meaning: 'Tớ thấy rất thoải mái.', correct: false,
            feedback: 'Lạc ngữ cảnh — Mai đang mệt/khó chịu; 舒服 nghĩa "khỏe/dễ chịu".' },
          { text: '我觉得很高兴。', pinyin: 'Wǒ juéde hěn gāoxìng.', meaning: 'Tớ thấy rất vui.', correct: false,
            feedback: 'Sai cảm xúc — Mai mệt, không phải vui (高兴).' }
        ] },
      { type: 'dialogue', speaker: 'mai', text: '我觉得很累。', pinyin: 'Wǒ juéde hěn lèi.', meaning: 'Tớ cảm thấy rất mệt.', expression: 'sad', vocab: ['觉得','累'] },
      { type: 'dialogue', speaker: 'xiaomei', text: '你的身体不舒服吗？', pinyin: 'Nǐ de shēntǐ bù shūfu ma?', meaning: 'Cơ thể cậu không khỏe à?', expression: null, vocab: ['身体','舒服'] },
      { type: 'dialogue', speaker: 'mai', text: '我可能生病了。', pinyin: 'Wǒ kěnéng shēngbìng le.', meaning: 'Có lẽ tớ bị ốm rồi.', expression: 'confused', vocab: ['可能','生病'] },
      { type: 'dialogue', speaker: 'laoli', text: '你去医院看病吧。', pinyin: 'Nǐ qù yīyuàn kànbìng ba.', meaning: 'Em đến bệnh viện khám bệnh đi.', expression: null, vocab: ['医院','看病'] },
      { type: 'checkpoint', questions: [
        { q: 'Mai cảm thấy thế nào?', options: ['rất đói', 'rất mệt', 'rất vui', 'rất nóng'], answer: 1 },
        { q: '"看病" nghĩa là gì?', options: ['xem phim', 'khám bệnh', 'đọc sách', 'đi học'], answer: 1 },
        { q: '"我觉得..." dùng để nói gì?', options: ['Tớ cảm thấy/nghĩ...', 'Tớ mua...', 'Tớ ở...', 'Tớ có...'], answer: 0 }
      ] },
      { type: 'dialogue', speaker: 'mai', text: '医生说我需要休息。', pinyin: 'Yīshēng shuō wǒ xūyào xiūxi.', meaning: 'Bác sĩ nói tớ cần nghỉ ngơi.', expression: 'focused', vocab: ['医生','需要','说'] },
      { type: 'dialogue', speaker: 'xiaomei', text: '你别上课了，先回家。', pinyin: 'Nǐ bié shàngkè le, xiān huíjiā.', meaning: 'Cậu đừng lên lớp nữa, về nhà trước đi.', expression: null, vocab: ['先','回家'] },
      { type: 'dialogue', speaker: 'mai', text: '好。我明天回来。', pinyin: 'Hǎo. Wǒ míngtiān huílái.', meaning: 'Được. Ngày mai tớ quay lại.', expression: 'happy', vocab: ['回来'] },
      { type: 'dialogue', speaker: 'laoli', text: '身体最重要。你好好休息。', pinyin: 'Shēntǐ zuì zhòngyào. Nǐ hǎohāo xiūxi.', meaning: 'Sức khỏe là quan trọng nhất. Em nghỉ ngơi cho tốt.', expression: null, vocab: ['最','重要'] }
    ],
    vocab: [
      { h: '身体', p: 'shēntǐ', v: 'cơ thể/sức khỏe' }, { h: '舒服', p: 'shūfu', v: 'dễ chịu/khỏe' }, { h: '生病', p: 'shēngbìng', v: 'bị ốm' },
      { h: '医生', p: 'yīshēng', v: 'bác sĩ' }, { h: '医院', p: 'yīyuàn', v: 'bệnh viện' }, { h: '看病', p: 'kànbìng', v: 'khám bệnh' },
      { h: '觉得', p: 'juéde', v: 'cảm thấy/cho rằng' }, { h: '累', p: 'lèi', v: 'mệt' }, { h: '可能', p: 'kěnéng', v: 'có thể/có lẽ' },
      { h: '需要', p: 'xūyào', v: 'cần' }, { h: '休息', p: 'xiūxi', v: 'nghỉ ngơi' }, { h: '先', p: 'xiān', v: 'trước tiên' },
      { h: '回家', p: 'huíjiā', v: 'về nhà' }, { h: '回来', p: 'huílái', v: 'quay lại' }, { h: '重要', p: 'zhòngyào', v: 'quan trọng' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我觉得很___。', options: ['累','书','茶'], answer: '累' },
        { type: 'fill', sentence: '我可能___了。', options: ['生病','上车','买'], answer: '生病' },
        { type: 'fill', sentence: '你去医院___吧。', options: ['看病','吃饭','读书'], answer: '看病' },
        { type: 'fill', sentence: '医生说我需要___。', options: ['休息','下雨','唱歌'], answer: '休息' },
        { type: 'fill', sentence: '身体最___。', options: ['重要','多少','哪儿'], answer: '重要' }
      ],
      normal: [
        { type: 'fill', sentence: '你的___不舒服吗？', options: ['身体','车票','面条'], answer: '身体' },
        { type: 'fill', sentence: '你别上课了，___回家。', options: ['先','后','都'], answer: '先' },
        { type: 'fill', sentence: '我明天___。', options: ['回来','出去','进去'], answer: '回来' },
        { type: 'fill', sentence: '医生___我需要休息。', options: ['说','看','听'], answer: '说' },
        { type: 'fill', sentence: '我___很累。', options: ['觉得','知道','买'], answer: '觉得' },
        { type: 'order', words: ['很','累','觉得','我'], answer: '我觉得很累' },
        { type: 'order', words: ['医院','看病','去','我'], answer: '我去医院看病' },
        { type: 'order', words: ['需要','休息','我'], answer: '我需要休息' }
      ],
      hard: [
        { type: 'fill', sentence: '我___生病了。', options: ['可能','可以','能'], answer: '可能' },
        { type: 'fill', sentence: '身体___重要。', options: ['最','都','也'], answer: '最' },
        { type: 'fill', sentence: '你___上课了，先回家。', options: ['别','不','没'], answer: '别' },
        { type: 'fill', sentence: '你好好___。', options: ['休息','下雨','考试'], answer: '休息' },
        { type: 'fill', sentence: '我明天回___。', options: ['来','去','到'], answer: '来' },
        { type: 'order', words: ['不','身体','舒服'], answer: '身体不舒服' },
        { type: 'order', words: ['重要','身体','最'], answer: '身体最重要' },
        { type: 'order', words: ['回家','先','你'], answer: '你先回家' },
        { type: 'translate', prompt: 'Tớ cảm thấy rất mệt.', answer: '我觉得很累。' },
        { type: 'translate', prompt: 'Bác sĩ nói tớ cần nghỉ ngơi.', answer: '医生说我需要休息。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 11: Sinh nhật của Tiểu Mỹ
  // ───────────────────────────────────────────────────────────────────────
  11: {
    id: 11,
    title: 'Sinh nhật của Tiểu Mỹ',
    context: 'Tiểu Mỹ mời cả lớp dự sinh nhật. Mai mua quà, hát bài chúc mừng và học cách nói sở thích.',
    vocabPreview: ['生日','喜欢','爱好','唱歌','送'],
    steps: [
      { type: 'dialogue', speaker: 'xiaomei', text: '今天是我的生日。', pinyin: 'Jīntiān shì wǒ de shēngrì.', meaning: 'Hôm nay là sinh nhật của tớ.', expression: null, vocab: ['生日'] },
      { type: 'choice', speaker: 'mai',
        q: 'Tiểu Mỹ nói hôm nay là sinh nhật. Mai chúc mừng và tặng một quyển sách. Câu nào đúng?',
        options: [
          { text: '生日快乐！我送你一本书。', pinyin: 'Shēngrì kuàilè! Wǒ sòng nǐ yì běn shū.', meaning: 'Chúc mừng sinh nhật! Tớ tặng cậu một quyển sách.', correct: true,
            feedback: 'Đúng! 生日快乐 = chúc mừng sinh nhật; sách dùng lượng từ 本.' },
          { text: '生日快乐！我送你一个书。', pinyin: 'Shēngrì kuàilè! Wǒ sòng nǐ yí ge shū.', meaning: 'Chúc mừng sinh nhật! Tớ tặng cậu một "cái" sách.', correct: false,
            feedback: 'Sai lượng từ — sách dùng 本, không dùng 个: 一本书.' },
          { text: '谢谢你！我送你一本书。', pinyin: 'Xièxie nǐ! Wǒ sòng nǐ yì běn shū.', meaning: 'Cảm ơn cậu! Tớ tặng cậu một quyển sách.', correct: false,
            feedback: 'Sai lời — dịp sinh nhật phải nói 生日快乐, không phải 谢谢.' }
        ] },
      { type: 'dialogue', speaker: 'mai', text: '生日快乐！我送你一本书。', pinyin: 'Shēngrì kuàilè! Wǒ sòng nǐ yì běn shū.', meaning: 'Chúc mừng sinh nhật! Tớ tặng cậu một quyển sách.', expression: 'happy', vocab: ['快乐','送'] },
      { type: 'dialogue', speaker: 'xiaomei', text: '谢谢！我很喜欢看书。', pinyin: 'Xièxie! Wǒ hěn xǐhuan kànshū.', meaning: 'Cảm ơn! Tớ rất thích đọc sách.', expression: null, vocab: ['喜欢','看书'] },
      { type: 'dialogue', speaker: 'mai', text: '你的爱好是什么？', pinyin: 'Nǐ de àihào shì shénme?', meaning: 'Sở thích của cậu là gì?', expression: 'curious', vocab: ['爱好'] },
      { type: 'dialogue', speaker: 'xiaomei', text: '我喜欢唱歌，也喜欢打球。', pinyin: 'Wǒ xǐhuan chànggē, yě xǐhuan dǎqiú.', meaning: 'Tớ thích hát, cũng thích chơi bóng.', expression: null, vocab: ['唱歌','打球'] },
      { type: 'checkpoint', questions: [
        { q: 'Mai tặng Tiểu Mỹ gì?', options: ['一本书', '一杯茶', '一张票', '一个包子'], answer: 0 },
        { q: '"爱好" nghĩa là gì?', options: ['sinh nhật', 'sở thích', 'thư viện', 'bác sĩ'], answer: 1 },
        { q: 'Tiểu Mỹ thích làm gì?', options: ['ngủ và uống trà', 'hát và chơi bóng', 'đi bệnh viện', 'mua vé xe'], answer: 1 }
      ] },
      { type: 'dialogue', speaker: 'laoli', text: '我们一起唱生日歌吧。', pinyin: 'Wǒmen yìqǐ chàng shēngrì gē ba.', meaning: 'Chúng ta cùng hát bài sinh nhật nhé.', expression: null, vocab: ['歌'] },
      { type: 'dialogue', speaker: 'class', text: '祝你生日快乐！', pinyin: 'Zhù nǐ shēngrì kuàilè!', meaning: 'Chúc bạn sinh nhật vui vẻ!', expression: 'happy', vocab: ['祝'] },
      { type: 'dialogue', speaker: 'mai', text: '这个蛋糕真好吃！', pinyin: 'Zhè ge dàngāo zhēn hǎochī!', meaning: 'Cái bánh kem này thật ngon!', expression: 'surprise', vocab: ['蛋糕','真'] },
      { type: 'dialogue', speaker: 'xiaomei', text: '今天我真的很高兴。', pinyin: 'Jīntiān wǒ zhēn de hěn gāoxìng.', meaning: 'Hôm nay tớ thật sự rất vui.', expression: null, vocab: ['真的'] }
    ],
    vocab: [
      { h: '生日', p: 'shēngrì', v: 'sinh nhật' }, { h: '快乐', p: 'kuàilè', v: 'vui vẻ' }, { h: '送', p: 'sòng', v: 'tặng/gửi' },
      { h: '喜欢', p: 'xǐhuan', v: 'thích' }, { h: '爱好', p: 'àihào', v: 'sở thích' }, { h: '看书', p: 'kànshū', v: 'đọc sách' },
      { h: '唱歌', p: 'chànggē', v: 'hát' }, { h: '打球', p: 'dǎqiú', v: 'chơi bóng' }, { h: '歌', p: 'gē', v: 'bài hát' },
      { h: '祝', p: 'zhù', v: 'chúc' }, { h: '蛋糕', p: 'dàngāo', v: 'bánh kem' }, { h: '真', p: 'zhēn', v: 'thật' },
      { h: '真的', p: 'zhēn de', v: 'thật sự' }, { h: '球', p: 'qiú', v: 'quả bóng' }, { h: '玩儿', p: 'wánr', v: 'chơi' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '今天是我的___。', options: ['生日','医院','天气'], answer: '生日' },
        { type: 'fill', sentence: '我___你一本书。', options: ['送','喝','坐'], answer: '送' },
        { type: 'fill', sentence: '我很___看书。', options: ['喜欢','觉得','生病'], answer: '喜欢' },
        { type: 'fill', sentence: '你的___是什么？', options: ['爱好','车票','点'], answer: '爱好' },
        { type: 'fill', sentence: '今天我真的很___。', options: ['高兴','冷','错'], answer: '高兴' }
      ],
      normal: [
        { type: 'fill', sentence: '生日___！', options: ['快乐','学习','天气'], answer: '快乐' },
        { type: 'fill', sentence: '我喜欢唱歌，___喜欢打球。', options: ['也','不','没'], answer: '也' },
        { type: 'fill', sentence: '我们一起___生日歌吧。', options: ['唱','看','写'], answer: '唱' },
        { type: 'fill', sentence: '___你生日快乐！', options: ['祝','给','找'], answer: '祝' },
        { type: 'fill', sentence: '这个蛋糕___好吃。', options: ['真','最','都'], answer: '真' },
        { type: 'order', words: ['生日','今天','我','的','是'], answer: '今天是我的生日' },
        { type: 'order', words: ['一本书','送','我','你'], answer: '我送你一本书' },
        { type: 'order', words: ['喜欢','唱歌','我'], answer: '我喜欢唱歌' }
      ],
      hard: [
        { type: 'fill', sentence: '我很喜欢___书。', options: ['看','读','写'], answer: '看' },
        { type: 'fill', sentence: '你的爱好___什么？', options: ['是','有','在'], answer: '是' },
        { type: 'fill', sentence: '我喜欢唱歌，也喜欢___球。', options: ['打','看','听'], answer: '打' },
        { type: 'fill', sentence: '祝你生日___。', options: ['快乐','高兴','好吃'], answer: '快乐' },
        { type: 'fill', sentence: '今天我___很高兴。', options: ['真的','真','最'], answer: '真的' },
        { type: 'order', words: ['爱好','什么','是','的','你'], answer: '你的爱好是什么？' },
        { type: 'order', words: ['生日歌','唱','一起','我们'], answer: '我们一起唱生日歌' },
        { type: 'order', words: ['蛋糕','好吃','真','这个'], answer: '这个蛋糕真好吃' },
        { type: 'translate', prompt: 'Chúc mừng sinh nhật!', answer: '生日快乐！' },
        { type: 'translate', prompt: 'Sở thích của cậu là gì?', answer: '你的爱好是什么？' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 12: Bài kiểm tra đầu tiên
  // ───────────────────────────────────────────────────────────────────────
  12: {
    id: 12,
    title: 'Bài kiểm tra đầu tiên',
    context: 'Sau nhiều tuần học, lớp của Mai có bài kiểm tra HSK 1 đầu tiên. Mai hồi hộp nhưng dùng toàn bộ những gì đã học để hoàn thành bài.',
    vocabPreview: ['考试','准备','知道','回答','最后'],
    steps: [
      { type: 'dialogue', speaker: 'laoli', text: '明天有考试，你们准备好了吗？', pinyin: 'Míngtiān yǒu kǎoshì, nǐmen zhǔnbèi hǎo le ma?', meaning: 'Ngày mai có bài kiểm tra, các em chuẩn bị xong chưa?', expression: null, vocab: ['考试','准备'] },
      { type: 'dialogue', speaker: 'mai', text: '老师，我有一点儿紧张。', pinyin: 'Lǎoshī, wǒ yǒu yìdiǎnr jǐnzhāng.', meaning: 'Thầy ơi, em hơi căng thẳng.', expression: 'confused', vocab: ['一点儿','紧张'] },
      { type: 'dialogue', speaker: 'laoli', text: '别紧张。你知道很多词。', pinyin: 'Bié jǐnzhāng. Nǐ zhīdào hěn duō cí.', meaning: 'Đừng căng thẳng. Em biết rất nhiều từ.', expression: null, vocab: ['知道','词'] },
      { type: 'dialogue', speaker: 'xiaomei', text: 'Mai，你可以回答问题！', pinyin: 'Mai, nǐ kěyǐ huídá wèntí!', meaning: 'Mai, cậu có thể trả lời câu hỏi mà!', expression: null, vocab: ['回答','问题'] },
      { type: 'dialogue', speaker: 'mai', text: '好，我要认真做题。', pinyin: 'Hǎo, wǒ yào rènzhēn zuò tí.', meaning: 'Được, tớ sẽ làm bài nghiêm túc.', expression: 'focused', vocab: ['做题'] },
      { type: 'checkpoint', questions: [
        { q: 'Ngày mai lớp Mai có gì?', options: ['生日', '考试', '看病', '下雨'], answer: 1 },
        { q: '"回答问题" nghĩa là gì?', options: ['trả lời câu hỏi', 'mua vé', 'ăn cơm', 'đi xe'], answer: 0 },
        { q: 'Thầy Lý khuyên Mai điều gì?', options: ['Đừng căng thẳng', 'Đừng học', 'Đừng đi học', 'Đừng ăn'], answer: 0 }
      ] },
      { type: 'dialogue', speaker: 'laoli', text: '第一题：你叫什么名字？', pinyin: 'Dì yī tí: nǐ jiào shénme míngzi?', meaning: 'Câu một: Em tên là gì?', expression: null, vocab: ['第一','题'] },
      { type: 'dialogue', speaker: 'mai', text: '我叫 Mai。我是越南人。', pinyin: 'Wǒ jiào Mai. Wǒ shì Yuènán rén.', meaning: 'Em tên Mai. Em là người Việt Nam.', expression: 'happy', vocab: [] },
      { type: 'dialogue', speaker: 'laoli', text: '第二题：今天星期几？', pinyin: 'Dì èr tí: jīntiān xīngqī jǐ?', meaning: 'Câu hai: Hôm nay thứ mấy?', expression: null, vocab: ['第二'] },
      { type: 'choice', speaker: 'mai',
        q: 'Thầy hỏi hôm nay thứ mấy. Hôm nay thứ Sáu. Mai đáp thế nào?',
        options: [
          { text: '今天星期五。', pinyin: 'Jīntiān xīngqī wǔ.', meaning: 'Hôm nay thứ Sáu.', correct: true,
            feedback: 'Đúng! Thứ trong tuần = 星期 + số: 星期五.' },
          { text: '今天五星期。', pinyin: 'Jīntiān wǔ xīngqī.', meaning: '(sai trật tự)', correct: false,
            feedback: 'Sai trật tự — phải là 星期 trước, số sau: 星期五.' },
          { text: '今天五月。', pinyin: 'Jīntiān wǔ yuè.', meaning: 'Hôm nay tháng Năm.', correct: false,
            feedback: 'Sai từ — 五月 là "tháng Năm"; thứ Sáu là 星期五.' }
        ] },
      { type: 'dialogue', speaker: 'mai', text: '今天星期五。', pinyin: 'Jīntiān xīngqī wǔ.', meaning: 'Hôm nay thứ Sáu.', expression: 'focused', vocab: [] },
      { type: 'dialogue', speaker: 'laoli', text: '最后一题：你喜欢学习汉语吗？', pinyin: 'Zuìhòu yì tí: nǐ xǐhuan xuéxí Hànyǔ ma?', meaning: 'Câu cuối: Em có thích học tiếng Trung không?', expression: null, vocab: ['最后','汉语'] },
      { type: 'dialogue', speaker: 'mai', text: '喜欢！我想继续学习。', pinyin: 'Xǐhuan! Wǒ xiǎng jìxù xuéxí.', meaning: 'Thích ạ! Em muốn tiếp tục học.', expression: 'happy', vocab: ['继续'] }
    ],
    vocab: [
      { h: '考试', p: 'kǎoshì', v: 'bài kiểm tra/thi' }, { h: '准备', p: 'zhǔnbèi', v: 'chuẩn bị' }, { h: '紧张', p: 'jǐnzhāng', v: 'căng thẳng' },
      { h: '一点儿', p: 'yìdiǎnr', v: 'một chút' }, { h: '知道', p: 'zhīdào', v: 'biết' }, { h: '词', p: 'cí', v: 'từ' },
      { h: '回答', p: 'huídá', v: 'trả lời' }, { h: '问题', p: 'wèntí', v: 'vấn đề/câu hỏi' }, { h: '做题', p: 'zuò tí', v: 'làm bài' },
      { h: '第一', p: 'dì yī', v: 'thứ nhất/câu 1' }, { h: '第二', p: 'dì èr', v: 'thứ hai/câu 2' }, { h: '最后', p: 'zuìhòu', v: 'cuối cùng' },
      { h: '汉语', p: 'Hànyǔ', v: 'tiếng Hán/tiếng Trung' }, { h: '继续', p: 'jìxù', v: 'tiếp tục' }, { h: '题', p: 'tí', v: 'câu hỏi/bài' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '明天有___。', options: ['考试','生日','雨伞'], answer: '考试' },
        { type: 'fill', sentence: '我有一点儿___。', options: ['紧张','好吃','水'], answer: '紧张' },
        { type: 'fill', sentence: '你___很多词。', options: ['知道','买','坐'], answer: '知道' },
        { type: 'fill', sentence: '回答___。', options: ['问题','天气','米饭'], answer: '问题' },
        { type: 'fill', sentence: '我想继续___。', options: ['学习','看病','下车'], answer: '学习' }
      ],
      normal: [
        { type: 'fill', sentence: '你们___好了吗？', options: ['准备','回答','忘记'], answer: '准备' },
        { type: 'fill', sentence: '别___。', options: ['紧张','喜欢','高兴'], answer: '紧张' },
        { type: 'fill', sentence: '我要认真___题。', options: ['做','吃','喝'], answer: '做' },
        { type: 'fill', sentence: '___题：你叫什么名字？', options: ['第一','一个','一点儿'], answer: '第一' },
        { type: 'fill', sentence: '___一题：你喜欢学习汉语吗？', options: ['最后','前边','后边'], answer: '最后' },
        { type: 'order', words: ['有','考试','明天'], answer: '明天有考试' },
        { type: 'order', words: ['很多','知道','词','你'], answer: '你知道很多词' },
        { type: 'order', words: ['问题','回答','可以','你'], answer: '你可以回答问题' }
      ],
      hard: [
        { type: 'fill', sentence: '我有___紧张。', options: ['一点儿','一些','一半'], answer: '一点儿' },
        { type: 'fill', sentence: '你___很多词。', options: ['知道','认识','看到'], answer: '知道' },
        { type: 'fill', sentence: '我要认真做___。', options: ['题','饭','车'], answer: '题' },
        { type: 'fill', sentence: '你喜欢学习___吗？', options: ['汉语','天气','医生'], answer: '汉语' },
        { type: 'fill', sentence: '喜欢！我想___学习。', options: ['继续','最后','第一'], answer: '继续' },
        { type: 'order', words: ['准备','你们','好','了','吗'], answer: '你们准备好了吗' },
        { type: 'order', words: ['一点儿','紧张','有','我'], answer: '我有一点儿紧张' },
        { type: 'order', words: ['学习','喜欢','汉语','我'], answer: '我喜欢学习汉语' },
        { type: 'translate', prompt: 'Ngày mai có bài kiểm tra.', answer: '明天有考试。' },
        { type: 'translate', prompt: 'Tớ muốn tiếp tục học tiếng Trung.', answer: '我想继续学习汉语。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 13: Mai làm gì mỗi ngày (1) — CORE · động từ hành động (18 từ)
  // ───────────────────────────────────────────────────────────────────────
  13: {
    id: 13,
    title: 'Mai làm gì mỗi ngày (1)',
    context: 'Sáng thứ Bảy, Tiểu Mỹ gọi điện rủ Mai ra ngoài. Trên đường tới lớp, Mai giúp bạn xách sách, rồi cùng cả lớp khởi động và đọc bài. Một loạt động từ hành động xuất hiện trong ngày của Mai.',
    vocabPreview: ['打电话','出去','帮忙','动作','告诉'],
    steps: [
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Ký túc xá · Sáng thứ Bảy', bg: 'dorm-room',
        cast: ['mai'],
        text: '一个星期六的早上，Mai 还在睡觉。', pinyin: 'Yí ge xīngqīliù de zǎoshang, Mai hái zài shuìjiào.', meaning: 'Một buổi sáng thứ Bảy, Mai vẫn đang ngủ.', expression: null, vocab: [] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '喂，Mai！我给你打电话。快出来吧！', pinyin: 'Wéi, Mai! Wǒ gěi nǐ dǎ diànhuà. Kuài chūlái ba!', meaning: 'A lô, Mai! Tớ gọi điện cho cậu đây. Mau ra đây nào!', expression: null, vocab: ['打电话','打','出来'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我爱睡觉…… 不过我马上出去。', pinyin: 'Wǒ ài shuìjiào…… búguò wǒ mǎshàng chūqù.', meaning: 'Tớ thích ngủ lắm… nhưng tớ ra ngoài ngay đây.', expression: 'happy', vocab: ['爱','出去'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我在楼下等你，快一点儿。', pinyin: 'Wǒ zài lóuxià děng nǐ, kuài yìdiǎnr.', meaning: 'Tớ đợi cậu ở dưới nhà, nhanh lên nhé.', expression: null, vocab: ['等'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好！我打开门就到。', pinyin: 'Hǎo! Wǒ dǎkāi mén jiù dào.', meaning: 'Được! Tớ mở cửa là tới ngay.', expression: 'focused', vocab: ['打开','到'] },
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Trước cổng ký túc xá', bg: 'campus',
        cast: ['mai', 'xiaomei'],
        text: 'Mai 打开门，走出房间。', pinyin: 'Mai dǎkāi mén, zǒu chū fángjiān.', meaning: 'Mai mở cửa, bước ra khỏi phòng.', expression: null, vocab: ['出'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你能帮我吗？我的书太多了。', pinyin: 'Nǐ néng bāng wǒ ma? Wǒ de shū tài duō le.', meaning: 'Cậu giúp tớ được không? Sách của tớ nhiều quá.', expression: null, vocab: ['帮'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], expression: 'happy',
        q: 'Tiểu Mỹ nhờ Mai giúp vì sách quá nhiều. Mai sẵn lòng giúp. Mai nói gì?',
        options: [
          { text: '好！我来帮忙。', pinyin: 'Hǎo! Wǒ lái bāngmáng.', meaning: 'Được! Để tớ giúp một tay.', correct: true,
            feedback: 'Đúng! 帮忙 = giúp một tay, hợp ngữ cảnh.' },
          { text: '好！我来打电话。', pinyin: 'Hǎo! Wǒ lái dǎ diànhuà.', meaning: 'Được! Để tớ gọi điện.', correct: false,
            feedback: 'Lạc ngữ cảnh — bạn nhờ KHIÊNG sách → đáp 帮忙, không phải 打电话 (gọi điện).' },
          { text: '好！我不帮忙。', pinyin: 'Hǎo! Wǒ bù bāngmáng.', meaning: 'Được! Tớ không giúp.', correct: false,
            feedback: 'Mâu thuẫn — vừa nói 好 (được) lại 不帮忙 (không giúp).' }
        ] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好！我来帮忙。', pinyin: 'Hǎo! Wǒ lái bāngmáng.', meaning: 'Được! Để tớ giúp một tay.', expression: 'happy', vocab: ['帮忙'] },
      { type: 'checkpoint', questions: [
        { q: 'Tiểu Mỹ liên lạc với Mai bằng cách nào?', options: ['打电话', '送花', '看病', '上网'], answer: 0 },
        { q: '"出去" nghĩa là gì?', options: ['đi ra ngoài', 'đi ngủ', 'mua đồ', 'về nhà'], answer: 0 },
        { q: 'Mai làm gì để giúp Tiểu Mỹ?', options: ['帮忙 xách sách', 'nấu cơm', 'gọi xe', 'làm bài'], answer: 0 }
      ] },
      { type: 'dialogue', speaker: 'laoli', cast: ['laoli', 'mai', 'xiaomei'],
        scene: '📍 Lớp học · Khởi động buổi sáng', bg: 'classroom',
        text: '同学们，上课前我们先动一动！', pinyin: 'Tóngxuémen, shàngkè qián wǒmen xiān dòng yi dòng!', meaning: 'Các em, trước giờ học chúng ta vận động một chút nào!', expression: null, vocab: ['动'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['laoli', 'mai', 'xiaomei'],
        text: '看我的动作 —— 这个动作像飞一样！', pinyin: 'Kàn wǒ de dòngzuò —— zhège dòngzuò xiàng fēi yíyàng!', meaning: 'Nhìn động tác của thầy này — động tác này giống như đang bay vậy!', expression: null, vocab: ['动作','飞'] },
      { type: 'dialogue', speaker: 'mai', cast: ['laoli', 'mai', 'xiaomei'],
        text: '哈哈，真好玩儿！我也会飞了！', pinyin: 'Hāhā, zhēn hǎowánr! Wǒ yě huì fēi le!', meaning: 'Haha, vui thật! Tớ cũng biết bay rồi!', expression: 'surprise', vocab: [] },
      { type: 'dialogue', speaker: 'laoli', cast: ['laoli', 'mai', 'xiaomei'],
        text: '好，现在我们读课文。', pinyin: 'Hǎo, xiànzài wǒmen dú kèwén.', meaning: 'Được, bây giờ chúng ta đọc bài khóa.', expression: null, vocab: ['读'] },
      { type: 'dialogue', speaker: 'mai', cast: ['laoli', 'mai', 'xiaomei'],
        text: '老师，您能告诉我们读哪一课吗？', pinyin: 'Lǎoshī, nín néng gàosu wǒmen dú nǎ yí kè ma?', meaning: 'Thầy ơi, thầy cho chúng em biết đọc bài nào ạ?', expression: 'curious', vocab: ['告诉','读'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['laoli', 'mai', 'xiaomei'],
        text: '第八课。认真读，你会得到很多。', pinyin: 'Dì bā kè. Rènzhēn dú, nǐ huì dédào hěn duō.', meaning: 'Bài tám. Đọc nghiêm túc, em sẽ nhận được nhiều điều.', expression: null, vocab: ['得到'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['laoli', 'mai', 'xiaomei'],
        text: 'Mai，今天下午你干什么？', pinyin: 'Mai, jīntiān xiàwǔ nǐ gàn shénme?', meaning: 'Mai, chiều nay cậu làm gì?', expression: null, vocab: ['干'] },
      { type: 'dialogue', speaker: 'mai', cast: ['laoli', 'mai', 'xiaomei'],
        text: '我爱学汉语，我要在家好好读书！', pinyin: 'Wǒ ài xué Hànyǔ, wǒ yào zài jiā hǎohǎo dú shū!', meaning: 'Tớ thích học tiếng Trung, tớ sẽ ở nhà chăm chỉ đọc sách!', expression: 'happy', vocab: ['爱'] }
    ],
    vocab: [
      { h: '爱', p: 'ài', v: 'yêu/thích' }, { h: '帮', p: 'bāng', v: 'giúp' }, { h: '帮忙', p: 'bāngmáng', v: 'giúp đỡ' },
      { h: '出', p: 'chū', v: 'ra' }, { h: '出来', p: 'chūlái', v: 'đi ra (về phía người nói)' }, { h: '出去', p: 'chūqù', v: 'đi ra ngoài' },
      { h: '打', p: 'dǎ', v: 'đánh/gọi' }, { h: '打电话', p: 'dǎ diànhuà', v: 'gọi điện thoại' }, { h: '打开', p: 'dǎkāi', v: 'mở ra' },
      { h: '到', p: 'dào', v: 'đến/tới' }, { h: '得到', p: 'dédào', v: 'nhận được/đạt được' }, { h: '等', p: 'děng', v: 'đợi' },
      { h: '动', p: 'dòng', v: 'động/cử động' }, { h: '动作', p: 'dòngzuò', v: 'động tác' }, { h: '读', p: 'dú', v: 'đọc' },
      { h: '飞', p: 'fēi', v: 'bay' }, { h: '干', p: 'gàn', v: 'làm' }, { h: '告诉', p: 'gàosu', v: 'nói cho biết' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '我给你___。', options: ['打电话','看病','上网'], answer: '打电话' },
        { type: 'fill', sentence: '快___吧！', options: ['出来','睡觉','下雨'], answer: '出来' },
        { type: 'fill', sentence: '我在楼下___你。', options: ['等','买','坐'], answer: '等' },
        { type: 'fill', sentence: '我来___。', options: ['帮忙','吃饭','起床'], answer: '帮忙' },
        { type: 'fill', sentence: '现在我们___课文。', options: ['读','飞','干'], answer: '读' }
      ],
      normal: [
        { type: 'fill', sentence: '不过我马上___。', options: ['出去','回家','睡觉'], answer: '出去' },
        { type: 'fill', sentence: '我___门就到。', options: ['打开','告诉','得到'], answer: '打开' },
        { type: 'fill', sentence: '你能___我吗？', options: ['帮','飞','等'], answer: '帮' },
        { type: 'fill', sentence: '看我的___！', options: ['动作','名字','天气'], answer: '动作' },
        { type: 'fill', sentence: '您能___我们读哪一课吗？', options: ['告诉','打开','帮忙'], answer: '告诉' },
        { type: 'order', words: ['给','你','打电话','我'], answer: '我给你打电话' },
        { type: 'order', words: ['等','楼下','你','在','我'], answer: '我在楼下等你' },
        { type: 'order', words: ['读','我们','课文'], answer: '我们读课文' }
      ],
      hard: [
        { type: 'fill', sentence: '我___睡觉，不过我马上出去。', options: ['爱','干','到'], answer: '爱' },
        { type: 'fill', sentence: '认真读，你会___很多。', options: ['得到','出来','打开'], answer: '得到' },
        { type: 'fill', sentence: '上课前我们先___一动。', options: ['动','飞','读'], answer: '动' },
        { type: 'fill', sentence: '这个动作像___一样！', options: ['飞','干','等'], answer: '飞' },
        { type: 'fill', sentence: '今天下午你___什么？', options: ['干','到','爱'], answer: '干' },
        { type: 'order', words: ['门','打开','走出','我','房间'], answer: '我打开门走出房间' },
        { type: 'order', words: ['帮','我','你','吗','能'], answer: '你能帮我吗' },
        { type: 'order', words: ['告诉','您','我们','读','哪一课','能','吗'], answer: '您能告诉我们读哪一课吗' },
        { type: 'translate', prompt: 'Tớ gọi điện cho cậu.', answer: '我给你打电话。' },
        { type: 'translate', prompt: 'Tớ thích học tiếng Trung.', answer: '我爱学汉语。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 14: Mai làm gì mỗi ngày (2) — CORE · động từ hành động (18 từ)
  // ───────────────────────────────────────────────────────────────────────
  14: {
    id: 14,
    title: 'Mai làm gì mỗi ngày (2)',
    context: 'Một buổi sáng ở lớp, thầy Lý dạy bài mới. Mai trông thấy bạn bè, thầy đóng cửa vào học, rồi cả lớp ghi nhớ chữ Hán. Tan học, Mai về phòng và rủ Tiểu Mỹ vào thư viện.',
    vocabPreview: ['来到','看见','关上','记住','进去'],
    steps: [
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Lớp học · Buổi sáng', bg: 'classroom',
        cast: ['laoli', 'mai', 'xiaomei'],
        text: '早上，Mai 来到教室。李老师正在教大家汉语。', pinyin: 'Zǎoshang, Mai láidào jiàoshì. Lǐ lǎoshī zhèngzài jiāo dàjiā Hànyǔ.', meaning: 'Buổi sáng, Mai đến lớp học. Thầy Lý đang dạy mọi người tiếng Trung.', expression: null, vocab: ['来到','教'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['laoli', 'mai', 'xiaomei'],
        text: '同学们，快进来，请进！', pinyin: 'Tóngxuémen, kuài jìnlái, qǐng jìn!', meaning: 'Các em, mau vào đi, mời vào!', expression: null, vocab: ['进来','进'] },
      { type: 'dialogue', speaker: 'mai', cast: ['laoli', 'mai', 'xiaomei'],
        text: '老师好！我看见小美也来了。', pinyin: 'Lǎoshī hǎo! Wǒ kànjiàn Xiǎoměi yě lái le.', meaning: 'Em chào thầy! Em trông thấy Tiểu Mỹ cũng đến rồi.', expression: 'curious', vocab: ['看见','看','见'] },
      { type: 'dialogue', speaker: 'narrator', cast: ['mai'],
        text: 'Mai 看到桌子上有她的书。', pinyin: 'Mai kàndào zhuōzi shang yǒu tā de shū.', meaning: 'Mai nhìn thấy trên bàn có sách của mình.', expression: null, vocab: ['看到'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['laoli', 'mai', 'xiaomei'],
        text: '人都到了，现在关上门。', pinyin: 'Rén dōu dào le, xiànzài guānshàng mén.', meaning: 'Mọi người đến đủ rồi, giờ đóng cửa lại.', expression: null, vocab: ['关上','关'] },
      { type: 'dialogue', speaker: 'narrator', cast: ['laoli', 'mai'],
        text: '这时有人来了，老师去开门。', pinyin: 'Zhè shí yǒu rén lái le, lǎoshī qù kāi mén.', meaning: 'Lúc này có người đến, thầy đi mở cửa.', expression: null, vocab: ['开'] },
      { type: 'checkpoint', questions: [
        { q: 'Mai 看见 ai cũng đến lớp?', options: ['小美', '妈妈', '医生', '哥哥'], answer: 0 },
        { q: '"关上门" nghĩa là gì?', options: ['đóng cửa lại', 'mở cửa ra', 'đi ra ngoài', 'gõ cửa'], answer: 0 },
        { q: 'Thầy Lý làm gì khi có người đến?', options: ['开门 (mở cửa)', '关门', '睡觉', '回家'], answer: 0 }
      ] },
      { type: 'dialogue', speaker: 'laoli', cast: ['laoli', 'mai', 'xiaomei'],
        text: '好，我们上课。记住，今天要学新汉字。', pinyin: 'Hǎo, wǒmen shàngkè. Jìzhù, jīntiān yào xué xīn Hànzì.', meaning: 'Được, chúng ta vào học. Nhớ kỹ nhé, hôm nay học chữ Hán mới.', expression: null, vocab: ['记住','记'] },
      { type: 'dialogue', speaker: 'mai', cast: ['laoli', 'mai', 'xiaomei'],
        text: '老师，这个字我记得！', pinyin: 'Lǎoshī, zhège zì wǒ jìde!', meaning: 'Thầy ơi, chữ này em nhớ ạ!', expression: 'happy', vocab: ['记得'] },
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Hành lang · Sau giờ học', bg: 'campus',
        cast: ['mai', 'xiaomei'],
        text: '下课了，Mai 要回去宿舍。', pinyin: 'Xiàkè le, Mai yào huíqù sùshè.', meaning: 'Tan học, Mai định về ký túc xá.', expression: null, vocab: ['回去','回'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我得回到房间写汉字。', pinyin: 'Wǒ děi huídào fángjiān xiě Hànzì.', meaning: 'Mình phải về phòng viết chữ Hán.', expression: 'focused', vocab: ['回到'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: 'Mai，先进去图书馆看书吧？', pinyin: 'Mai, xiān jìnqù túshūguǎn kàn shū ba?', meaning: 'Mai, vào thư viện đọc sách trước nhé?', expression: null, vocab: ['进去','进','看'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], expression: 'happy',
        q: 'Tiểu Mỹ rủ cùng VÀO thư viện đọc sách. Mai đồng ý. Câu nào đúng?',
        options: [
          { text: '好，我们一起进去！', pinyin: 'Hǎo, wǒmen yìqǐ jìnqù!', meaning: 'Được, chúng mình cùng vào!', correct: true,
            feedback: 'Đúng! Cùng ĐI VÀO (rời chỗ đang đứng) dùng 进去.' },
          { text: '好，我们一起进来！', pinyin: 'Hǎo, wǒmen yìqǐ jìnlái!', meaning: 'Được, cùng đi vào (phía tớ)!', correct: false,
            feedback: 'Sai hướng — đi vào nơi khác (rời chỗ hiện tại) là 进去; 进来 là đi vào phía người nói.' },
          { text: '好，我们一起出去！', pinyin: 'Hǎo, wǒmen yìqǐ chūqù!', meaning: 'Được, chúng mình cùng ra ngoài!', correct: false,
            feedback: 'Ngược nghĩa — rủ VÀO thư viện thì 进去, không phải 出去 (ra ngoài).' }
        ] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好，我们一起进去！明天见！', pinyin: 'Hǎo, wǒmen yìqǐ jìnqù! Míngtiān jiàn!', meaning: 'Được, chúng mình cùng vào! Hẹn mai gặp!', expression: 'happy', vocab: ['见'] }
    ],
    vocab: [
      { h: '关', p: 'guān', v: 'đóng' }, { h: '关上', p: 'guānshàng', v: 'đóng lại' }, { h: '回', p: 'huí', v: 'về' },
      { h: '回到', p: 'huídào', v: 'trở về đến' }, { h: '回去', p: 'huíqù', v: 'đi về' }, { h: '记', p: 'jì', v: 'ghi/nhớ' },
      { h: '记得', p: 'jìde', v: 'nhớ' }, { h: '记住', p: 'jìzhù', v: 'nhớ kỹ' }, { h: '见', p: 'jiàn', v: 'gặp/thấy' },
      { h: '教', p: 'jiāo', v: 'dạy' }, { h: '进', p: 'jìn', v: 'vào' }, { h: '进来', p: 'jìnlái', v: 'đi vào (lại đây)' },
      { h: '进去', p: 'jìnqù', v: 'đi vào (rời người nói)' }, { h: '开', p: 'kāi', v: 'mở' }, { h: '看', p: 'kàn', v: 'nhìn/xem' },
      { h: '看到', p: 'kàndào', v: 'nhìn thấy' }, { h: '看见', p: 'kànjiàn', v: 'trông thấy' }, { h: '来到', p: 'láidào', v: 'đến (nơi)' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '李老师正在___汉语。', options: ['教','回','开'], answer: '教' },
        { type: 'fill', sentence: '我___小美也来了。', options: ['看见','关上','进去'], answer: '看见' },
        { type: 'fill', sentence: '现在___门。', options: ['关上','看到','来到'], answer: '关上' },
        { type: 'fill', sentence: '老师去___门。', options: ['开','记','见'], answer: '开' },
        { type: 'fill', sentence: '明天___！', options: ['见','教','回'], answer: '见' }
      ],
      normal: [
        { type: 'fill', sentence: '快___，请进！', options: ['进来','回去','看见'], answer: '进来' },
        { type: 'fill', sentence: '___，今天要学新汉字。', options: ['记住','看到','开门'], answer: '记住' },
        { type: 'fill', sentence: '这个字我___！', options: ['记得','回到','进去'], answer: '记得' },
        { type: 'fill', sentence: 'Mai 要___宿舍。', options: ['回去','进来','关上'], answer: '回去' },
        { type: 'fill', sentence: '先___图书馆看书吧？', options: ['进去','开门','记住'], answer: '进去' },
        { type: 'order', words: ['来到','Mai','教室'], answer: 'Mai来到教室' },
        { type: 'order', words: ['看见','我','小美'], answer: '我看见小美' },
        { type: 'order', words: ['进去','一起','我们'], answer: '我们一起进去' }
      ],
      hard: [
        { type: 'fill', sentence: '我得___房间写汉字。', options: ['回到','进来','看见'], answer: '回到' },
        { type: 'fill', sentence: '李老师正在___大家汉语。', options: ['教','开','记'], answer: '教' },
        { type: 'fill', sentence: '人都到了，现在___门。', options: ['关上','回去','看到'], answer: '关上' },
        { type: 'fill', sentence: 'Mai ___桌子上有她的书。', options: ['看到','进去','关上'], answer: '看到' },
        { type: 'fill', sentence: '这时有人来了，老师去___门。', options: ['开','记','见'], answer: '开' },
        { type: 'order', words: ['关上','现在','门'], answer: '现在关上门' },
        { type: 'order', words: ['图书馆','进去','先','看书'], answer: '先进去图书馆看书' },
        { type: 'order', words: ['回到','我','房间','汉字','写'], answer: '我回到房间写汉字' },
        { type: 'translate', prompt: 'Em trông thấy Tiểu Mỹ.', answer: '我看见小美。' },
        { type: 'translate', prompt: 'Hẹn mai gặp!', answer: '明天见！' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 15: Động từ Mai cần thuộc (3) — CORE · động từ hành động (18 từ)
  // ───────────────────────────────────────────────────────────────────────
  15: {
    id: 15,
    title: 'Động từ Mai cần thuộc (3)',
    context: 'Buổi sáng của Mai: thức dậy, rửa mặt, cầm cặp tới trường, mua sữa. Trong lớp cô làm quen bạn mới, nghe chuông vào học, thử đọc bài và hỏi thầy khi quên cách dùng chữ.',
    vocabPreview: ['起来','洗','认识','听见','坐下'],
    steps: [
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Ký túc xá · Bảy giờ sáng', bg: 'dorm-room',
        cast: ['mai'],
        text: '早上七点，闹钟响了，Mai 起来了。', pinyin: 'Zǎoshang qī diǎn, nàozhōng xiǎng le, Mai qǐlái le.', meaning: 'Bảy giờ sáng, đồng hồ báo thức reo, Mai dậy rồi.', expression: null, vocab: ['起来','起'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '我不想睡了，先洗一洗。', pinyin: 'Wǒ bù xiǎng shuì le, xiān xǐ yi xǐ.', meaning: 'Mình không muốn ngủ nữa, rửa mặt cái đã.', expression: 'focused', vocab: ['睡','洗'] },
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Trên đường tới trường', bg: 'street',
        cast: ['mai'],
        text: 'Mai 拿起书包，去学校学汉语。路上，她买了一杯牛奶。', pinyin: 'Mai ná qǐ shūbāo, qù xuéxiào xué Hànyǔ. Lù shang, tā mǎi le yì bēi niúnǎi.', meaning: 'Mai cầm cặp sách, đến trường học tiếng Trung. Trên đường, cô mua một cốc sữa.', expression: null, vocab: ['拿','起','学','买'] },
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Lớp học', bg: 'classroom',
        cast: ['mai', 'xiaomei'],
        text: 'Mai 到学校时，小美在等她。', pinyin: 'Mai dào xuéxiào shí, Xiǎoměi zài děng tā.', meaning: 'Khi Mai đến trường, Tiểu Mỹ đang đợi cô.', expression: null, vocab: [] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '小美，你听见上课铃了吗？', pinyin: 'Xiǎoměi, nǐ tīngjiàn shàngkè líng le ma?', meaning: 'Tiểu Mỹ, cậu nghe thấy chuông vào lớp chưa?', expression: null, vocab: ['听见','听'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '听到了！快进教室坐下。', pinyin: 'Tīngdào le! Kuài jìn jiàoshì zuòxià.', meaning: 'Nghe thấy rồi! Mau vào lớp ngồi xuống.', expression: null, vocab: ['听到','坐下'] },
      { type: 'checkpoint', questions: [
        { q: 'Mai mấy giờ 起来?', options: ['七点', '八点', '九点', '十点'], answer: 0 },
        { q: '"洗一洗" nghĩa là gì?', options: ['rửa một chút', 'ngủ một chút', 'mua một chút', 'học một chút'], answer: 0 },
        { q: 'Tiểu Mỹ bảo Mai làm gì khi nghe chuông?', options: ['进教室坐下', '回家睡觉', '买牛奶', '洗手'], answer: 0 }
      ] },
      { type: 'dialogue', speaker: 'laoli', cast: ['laoli', 'mai', 'xiaomei'],
        text: '同学们坐下，我们开始学新课。', pinyin: 'Tóngxuémen zuòxià, wǒmen kāishǐ xué xīn kè.', meaning: 'Các em ngồi xuống, chúng ta bắt đầu học bài mới.', expression: null, vocab: ['坐下','学'] },
      { type: 'dialogue', speaker: 'mai', cast: ['laoli', 'mai', 'xiaomei'],
        text: '老师，我还不认识班里很多同学。', pinyin: 'Lǎoshī, wǒ hái bú rènshi bān lǐ hěn duō tóngxué.', meaning: 'Thầy ơi, em vẫn chưa quen nhiều bạn trong lớp.', expression: null, vocab: ['认识'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['laoli', 'mai', 'xiaomei'],
        text: '谁想读？想试一下的请说。', pinyin: 'Shéi xiǎng dú? Xiǎng shì yíxià de qǐng shuō.', meaning: 'Ai muốn đọc? Em nào muốn thử thì nói.', expression: null, vocab: ['试','说'] },
      { type: 'dialogue', speaker: 'mai', cast: ['laoli', 'mai', 'xiaomei'],
        text: '老师，我试！可是我忘了这个字怎么用。', pinyin: 'Lǎoshī, wǒ shì! Kěshì wǒ wàng le zhège zì zěnme yòng.', meaning: 'Thầy ơi, em thử! Nhưng em quên chữ này dùng thế nào rồi.', expression: 'confused', vocab: ['试','忘','用'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['laoli', 'mai', 'xiaomei'],
        text: '没关系，不会就问。', pinyin: 'Méi guānxi, bú huì jiù wèn.', meaning: 'Không sao, không biết thì hỏi.', expression: null, vocab: ['问'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: 'Mai，你住在哪儿？', pinyin: 'Mai, nǐ zhù zài nǎr?', meaning: 'Mai, cậu ở đâu?', expression: null, vocab: ['住'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], expression: 'happy',
        q: 'Tiểu Mỹ hỏi Mai ở đâu. Mai ở ký túc xá của trường. Mai đáp thế nào?',
        options: [
          { text: '我住学校的宿舍。', pinyin: 'Wǒ zhù xuéxiào de sùshè.', meaning: 'Tớ ở ký túc xá của trường.', correct: true,
            feedback: 'Đúng! 住 = ở/cư trú tại một nơi.' },
          { text: '我学学校的宿舍。', pinyin: 'Wǒ xué xuéxiào de sùshè.', meaning: 'Tớ "học" ký túc xá của trường.', correct: false,
            feedback: 'Sai động từ — "ở" dùng 住, còn 学 là "học".' },
          { text: '我住学校的教室。', pinyin: 'Wǒ zhù xuéxiào de jiàoshì.', meaning: 'Tớ ở phòng học của trường.', correct: false,
            feedback: 'Sai nơi — ở thì tại 宿舍 (ký túc xá), không phải 教室 (phòng học).' }
        ] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我住学校的宿舍。我会认真学，也会用心记。', pinyin: 'Wǒ zhù xuéxiào de sùshè. Wǒ huì rènzhēn xué, yě huì yòngxīn jì.', meaning: 'Mình ở ký túc xá của trường. Mình sẽ học nghiêm túc, cũng sẽ dùng tâm ghi nhớ.', expression: 'happy', vocab: ['住','学','用'] }
    ],
    vocab: [
      { h: '买', p: 'mǎi', v: 'mua' }, { h: '拿', p: 'ná', v: 'cầm/lấy' }, { h: '起', p: 'qǐ', v: 'dậy/nâng lên' },
      { h: '起来', p: 'qǐlái', v: 'đứng dậy/thức dậy' }, { h: '认识', p: 'rènshi', v: 'quen biết' }, { h: '试', p: 'shì', v: 'thử' },
      { h: '睡', p: 'shuì', v: 'ngủ' }, { h: '说', p: 'shuō', v: 'nói' }, { h: '听', p: 'tīng', v: 'nghe' },
      { h: '听到', p: 'tīngdào', v: 'nghe thấy' }, { h: '听见', p: 'tīngjiàn', v: 'nghe được' }, { h: '忘', p: 'wàng', v: 'quên' },
      { h: '问', p: 'wèn', v: 'hỏi' }, { h: '洗', p: 'xǐ', v: 'rửa/giặt' }, { h: '学', p: 'xué', v: 'học' },
      { h: '用', p: 'yòng', v: 'dùng' }, { h: '住', p: 'zhù', v: 'ở/sống' }, { h: '坐下', p: 'zuòxià', v: 'ngồi xuống' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '早上七点，Mai ___了。', options: ['起来','睡','洗'], answer: '起来' },
        { type: 'fill', sentence: '路上她___了一杯牛奶。', options: ['买','拿','学'], answer: '买' },
        { type: 'fill', sentence: '快进教室___。', options: ['坐下','起来','洗手'], answer: '坐下' },
        { type: 'fill', sentence: '不会就___。', options: ['问','睡','买'], answer: '问' },
        { type: 'fill', sentence: '我会认真___汉语。', options: ['学','拿','试'], answer: '学' }
      ],
      normal: [
        { type: 'fill', sentence: '我不想___了，先洗一洗。', options: ['睡','买','问'], answer: '睡' },
        { type: 'fill', sentence: 'Mai ___起书包去学校。', options: ['拿','坐','听'], answer: '拿' },
        { type: 'fill', sentence: '你___见上课铃了吗？', options: ['听','认识','洗'], answer: '听' },
        { type: 'fill', sentence: '想___一下的请说。', options: ['试','住','拿'], answer: '试' },
        { type: 'fill', sentence: '我还不___班里的同学。', options: ['认识','听到','坐下'], answer: '认识' },
        { type: 'order', words: ['坐下','同学们','吧'], answer: '同学们坐下吧' },
        { type: 'order', words: ['买','一杯牛奶','她'], answer: '她买一杯牛奶' },
        { type: 'order', words: ['听见','你','上课铃','了','吗'], answer: '你听见上课铃了吗' }
      ],
      hard: [
        { type: 'fill', sentence: '我___了这个字怎么用。', options: ['忘','试','住'], answer: '忘' },
        { type: 'fill', sentence: '这个字怎么___？', options: ['用','买','睡'], answer: '用' },
        { type: 'fill', sentence: '你___在哪儿？', options: ['住','洗','学'], answer: '住' },
        { type: 'fill', sentence: '___到了！快进教室。', options: ['听','买','起'], answer: '听' },
        { type: 'fill', sentence: '早上我先___脸。', options: ['洗','买','问'], answer: '洗' },
        { type: 'order', words: ['认识','我们','一下','吧'], answer: '我们认识一下吧' },
        { type: 'order', words: ['不会','问','就'], answer: '不会就问' },
        { type: 'order', words: ['住','宿舍','我','学校'], answer: '我住学校宿舍' },
        { type: 'translate', prompt: 'Mình không muốn ngủ nữa.', answer: '我不想睡了。' },
        { type: 'translate', prompt: 'Cậu ở đâu?', answer: '你住在哪儿？' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 16: Từ chức năng & liên từ (1) — CORE (17 từ)
  // ───────────────────────────────────────────────────────────────────────
  16: {
    id: 16,
    title: 'Từ chức năng & liên từ (1)',
    context: 'Sau giờ học, Mai và Tiểu Mỹ đi ăn rồi bàn kế hoạch buổi chiều. Qua câu chuyện chọn món, so sánh quán ăn và rủ nhau đi nhà sách, một loạt từ nối và từ chức năng xuất hiện.',
    vocabPreview: ['还是','比','非常','跟','从'],
    steps: [
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Căn-tin · Sau giờ học', bg: 'cafeteria',
        cast: ['mai', 'xiaomei'],
        text: '下课后，Mai 和小美一起去吃饭。', pinyin: 'Xiàkè hòu, Mai hé Xiǎoměi yìqǐ qù chī fàn.', meaning: 'Sau giờ học, Mai và Tiểu Mỹ cùng đi ăn cơm.', expression: null, vocab: ['和','后'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你想吃米饭还是面条？', pinyin: 'Nǐ xiǎng chī mǐfàn háishi miàntiáo?', meaning: 'Cậu muốn ăn cơm hay là mì?', expression: null, vocab: ['还是'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], expression: 'happy',
        q: 'Tiểu Mỹ hỏi: cậu muốn ăn cơm HAY mì? Mai chọn cơm. Câu trả lời nào đúng?',
        options: [
          { text: '我吃米饭吧。', pinyin: 'Wǒ chī mǐfàn ba.', meaning: 'Tớ ăn cơm vậy.', correct: true,
            feedback: 'Đúng! Câu 还是 cần CHỌN một món; Mai chọn 米饭.' },
          { text: '你吃米饭还是面条？', pinyin: 'Nǐ chī mǐfàn háishì miàntiáo?', meaning: 'Cậu ăn cơm hay mì?', correct: false,
            feedback: 'Đây là câu HỎI lặp lại, không phải trả lời — cần chọn một món.' },
          { text: '我不想吃饭。', pinyin: 'Wǒ bù xiǎng chīfàn.', meaning: 'Tớ không muốn ăn.', correct: false,
            feedback: 'Lạc ngữ cảnh — đang chọn cơm hay mì, không phải nói không ăn.' }
        ] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我吃米饭吧。面条我吃过很多次了。', pinyin: 'Wǒ chī mǐfàn ba. Miàntiáo wǒ chī guo hěn duō cì le.', meaning: 'Tớ ăn cơm vậy. Mì thì tớ ăn nhiều lần rồi.', expression: 'happy', vocab: ['吧','过','次'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这家的菜比那家好吃，我非常喜欢。', pinyin: 'Zhè jiā de cài bǐ nà jiā hǎochī, wǒ fēicháng xǐhuan.', meaning: 'Món quán này ngon hơn quán kia, tớ rất thích.', expression: null, vocab: ['比','非常'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '真的吗？那我们还有时间，多吃一点。', pinyin: 'Zhēn de ma? Nà wǒmen háiyǒu shíjiān, duō chī yìdiǎn.', meaning: 'Thật à? Vậy mình còn thời gian, ăn thêm chút.', expression: null, vocab: ['还有'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '下午你想做别的吗？跟我去书店好不好？', pinyin: 'Xiàwǔ nǐ xiǎng zuò biéde ma? Gēn wǒ qù shūdiàn hǎo bu hǎo?', meaning: 'Chiều cậu muốn làm việc khác không? Đi nhà sách với tớ nhé?', expression: null, vocab: ['别的','跟'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好吧！不过我们先回宿舍，再从宿舍走过去。', pinyin: 'Hǎo ba! Búguò wǒmen xiān huí sùshè, zài cóng sùshè zǒu guòqù.', meaning: 'Được! Nhưng mình về ký túc trước, rồi từ ký túc đi bộ qua.', expression: null, vocab: ['从','吧'] },
      { type: 'checkpoint', questions: [
        { q: 'Mai chọn ăn gì?', options: ['米饭', '面条', '包子', '鸡蛋'], answer: 0 },
        { q: '"比" dùng để làm gì?', options: ['so sánh', 'hỏi giờ', 'chào hỏi', 'cảm ơn'], answer: 0 },
        { q: 'Buổi chiều hai người định đi đâu?', options: ['书店', '医院', '车站', '家'], answer: 0 }
      ] },
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Nhà sách', bg: 'library',
        cast: ['mai', 'xiaomei'],
        text: '在书店，Mai 看了很多书。', pinyin: 'Zài shūdiàn, Mai kàn le hěn duō shū.', meaning: 'Ở nhà sách, Mai xem rất nhiều sách.', expression: null, vocab: [] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这本书不大，很好拿。', pinyin: 'Zhè běn shū bùdà, hěn hǎo ná.', meaning: 'Quyển sách này không to, dễ cầm.', expression: null, vocab: ['不大'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我要认真地学，这次不对的字下次写对。', pinyin: 'Wǒ yào rènzhēn de xué, zhè cì búduì de zì xià cì xiě duì.', meaning: 'Tớ phải học một cách nghiêm túc, chữ sai lần này lần sau viết đúng.', expression: 'focused', vocab: ['地','不对','次'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '不用，慢慢学就好。', pinyin: 'Búyòng, mànman xué jiù hǎo.', meaning: 'Không cần đâu, từ từ học là được.', expression: null, vocab: ['不用'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '谢谢你！跟你在一起，我还想学更多。', pinyin: 'Xièxie nǐ! Gēn nǐ zài yìqǐ, wǒ hái xiǎng xué gèng duō.', meaning: 'Cảm ơn cậu! Ở cùng cậu, tớ còn muốn học nhiều hơn.', expression: 'happy', vocab: ['还','跟'] }
    ],
    vocab: [
      { h: '吧', p: 'ba', v: '(trợ từ đề nghị)' }, { h: '比', p: 'bǐ', v: 'so với' }, { h: '别的', p: 'biéde', v: 'cái khác' },
      { h: '不大', p: 'bùdà', v: 'không lớn lắm' }, { h: '不对', p: 'búduì', v: 'không đúng' }, { h: '不用', p: 'búyòng', v: 'không cần' },
      { h: '次', p: 'cì', v: 'lần' }, { h: '从', p: 'cóng', v: 'từ' }, { h: '地', p: 'de', v: '(trợ từ trạng ngữ)' },
      { h: '非常', p: 'fēicháng', v: 'vô cùng' }, { h: '跟', p: 'gēn', v: 'với/cùng' }, { h: '过', p: 'guo', v: '(trợ từ đã từng)' },
      { h: '还', p: 'hái', v: 'còn/vẫn' }, { h: '还是', p: 'háishi', v: 'hay là' }, { h: '还有', p: 'háiyǒu', v: 'còn có' },
      { h: '和', p: 'hé', v: 'và' }, { h: '后', p: 'hòu', v: 'sau' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: 'Mai ___小美一起去吃饭。', options: ['和','比','次'], answer: '和' },
        { type: 'fill', sentence: '你想吃米饭___面条？', options: ['还是','非常','别的'], answer: '还是' },
        { type: 'fill', sentence: '我吃米饭___。', options: ['吧','从','后'], answer: '吧' },
        { type: 'fill', sentence: '这家的菜___那家好吃。', options: ['比','和','吧'], answer: '比' },
        { type: 'fill', sentence: '我们___有时间。', options: ['还','过','跟'], answer: '还' }
      ],
      normal: [
        { type: 'fill', sentence: '面条我吃___很多次了。', options: ['过','吧','和'], answer: '过' },
        { type: 'fill', sentence: '下午你想做___吗？', options: ['别的','非常','不大'], answer: '别的' },
        { type: 'fill', sentence: '___我去书店好不好？', options: ['跟','次','后'], answer: '跟' },
        { type: 'fill', sentence: '我们先回宿舍，再___宿舍走过去。', options: ['从','和','吧'], answer: '从' },
        { type: 'fill', sentence: '这家的菜，我___喜欢。', options: ['非常','别的','还是'], answer: '非常' },
        { type: 'order', words: ['和','一起','小美','Mai','吃饭'], answer: 'Mai和小美一起吃饭' },
        { type: 'order', words: ['比','好吃','这家的菜','那家'], answer: '这家的菜比那家好吃' },
        { type: 'order', words: ['还是','米饭','面条','你','吃'], answer: '你吃米饭还是面条' }
      ],
      hard: [
        { type: 'fill', sentence: '这本书___，很好拿。', options: ['不大','别的','还有'], answer: '不大' },
        { type: 'fill', sentence: '这个字我写得___。', options: ['不对','不用','非常'], answer: '不对' },
        { type: 'fill', sentence: '___，慢慢学就好。', options: ['不用','别的','还是'], answer: '不用' },
        { type: 'fill', sentence: '我要认真___学。', options: ['地','吧','后'], answer: '地' },
        { type: 'fill', sentence: '面条我吃过很多___了。', options: ['次','和','跟'], answer: '次' },
        { type: 'order', words: ['别的','想','做','你','吗'], answer: '你想做别的吗' },
        { type: 'order', words: ['从','走过去','宿舍'], answer: '从宿舍走过去' },
        { type: 'order', words: ['还有','我们','时间'], answer: '我们还有时间' },
        { type: 'translate', prompt: 'Cậu muốn ăn cơm hay là mì?', answer: '你想吃米饭还是面条？' },
        { type: 'translate', prompt: 'Đi nhà sách với tớ nhé?', answer: '跟我去书店好吗？' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 17: Từ chức năng & liên từ (2) — CORE (17 từ)
  // ───────────────────────────────────────────────────────────────────────
  17: {
    id: 17,
    title: 'Từ chức năng & liên từ (2)',
    context: 'Mai đặt vé xem phim trên mạng rồi cùng Tiểu Mỹ đến rạp. Câu chuyện mua vé, hỏi giá, tìm chỗ và hỏi thăm bạn giúp Mai làm quen thêm nhiều từ chức năng.',
    vocabPreview: ['网上','票','马上','是不是','外边'],
    steps: [
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Ký túc xá · Buổi tối', bg: 'home',
        cast: ['mai'],
        text: '晚上，Mai 在网上买电影票。', pinyin: 'Wǎnshang, Mai zài wǎngshàng mǎi diànyǐng piào.', meaning: 'Buổi tối, Mai mua vé xem phim trên mạng.', expression: null, vocab: ['网上','票'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '这部电影是不是很有名？票要多少块？', pinyin: 'Zhè bù diànyǐng shìbushì hěn yǒumíng? Piào yào duōshao kuài?', meaning: 'Bộ phim này có phải nổi tiếng lắm không? Vé bao nhiêu tiền?', expression: 'curious', vocab: ['是不是','要','块'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '一张票四十块，不太贵。', pinyin: 'Yì zhāng piào sìshí kuài, bú tài guì.', meaning: 'Một vé bốn mươi đồng, không đắt lắm.', expression: null, vocab: ['太','块'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], expression: 'happy',
        q: 'Vé phim 40 tệ một vé, không đắt. Mai muốn mua HAI vé. Câu nào đúng?',
        options: [
          { text: '太好了！我马上买两张。', pinyin: 'Tài hǎo le! Wǒ mǎshàng mǎi liǎng zhāng.', meaning: 'Tốt quá! Tớ mua hai vé ngay.', correct: true,
            feedback: 'Đúng! Vé dùng lượng từ 张: 两张票.' },
          { text: '太好了！我马上买两个。', pinyin: 'Tài hǎo le! Wǒ mǎshàng mǎi liǎng ge.', meaning: 'Tốt quá! Tớ mua hai "cái" ngay.', correct: false,
            feedback: 'Sai lượng từ — vé dùng 张, không dùng 个.' },
          { text: '太好了！我马上买两块。', pinyin: 'Tài hǎo le! Wǒ mǎshàng mǎi liǎng kuài.', meaning: 'Tốt quá! Tớ mua "hai đồng" ngay.', correct: false,
            feedback: 'Sai — 块 là đơn vị TIỀN; mua hai vé là 两张.' }
        ] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '太好了！我马上买两张。', pinyin: 'Tài hǎo le! Wǒ mǎshàng mǎi liǎng zhāng.', meaning: 'Tốt quá! Tớ mua hai vé ngay.', expression: 'happy', vocab: ['马上','太'] },
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Rạp chiếu phim · Hôm sau', bg: 'street',
        cast: ['mai', 'xiaomei'],
        text: '第二天，他们来到电影院前边。', pinyin: 'Dì èr tiān, tāmen láidào diànyǐngyuàn qiánbian.', meaning: 'Hôm sau, họ đến trước rạp chiếu phim.', expression: null, vocab: ['前边'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '里边人多吗？我们快进去。', pinyin: 'Lǐbian rén duō ma? Wǒmen kuài jìnqù.', meaning: 'Bên trong đông không? Mình vào nhanh thôi.', expression: null, vocab: ['里边'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '门口写着"男""女"，洗手间在外边。', pinyin: 'Ménkǒu xiě zhe "nán" "nǚ", xǐshǒujiān zài wàibian.', meaning: 'Cửa ghi "Nam" "Nữ", nhà vệ sinh ở bên ngoài.', expression: null, vocab: ['男','女','外边','外'] },
      { type: 'checkpoint', questions: [
        { q: 'Mai mua vé phim ở đâu?', options: ['网上', '商店', '车站', '学校'], answer: 0 },
        { q: 'Một vé giá bao nhiêu?', options: ['四十块', '十块', '一百块', '五块'], answer: 0 },
        { q: '"马上" nghĩa là gì?', options: ['ngay lập tức', 'ngày mai', 'buổi tối', 'bên ngoài'], answer: 0 }
      ] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '小美，是不是你有事？怎么了？', pinyin: 'Xiǎoměi, shìbushì nǐ yǒu shì? Zěnme le?', meaning: 'Tiểu Mỹ, có phải cậu có việc gì không? Sao thế?', expression: 'curious', vocab: ['是不是','事','了'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '没事儿，没什么，就是想喝水。', pinyin: 'Méishìr, méishénme, jiùshì xiǎng hē shuǐ.', meaning: 'Không sao, không có gì, chỉ là muốn uống nước.', expression: null, vocab: ['没事儿','没什么'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '那我去外边买水，马上回来。', pinyin: 'Nà wǒ qù wàibian mǎi shuǐ, mǎshàng huílai.', meaning: 'Vậy tớ ra ngoài mua nước, về ngay.', expression: null, vocab: ['外边','马上'] },
      { type: 'dialogue', speaker: 'narrator', cast: ['mai', 'xiaomei'],
        text: '电影开始了，里边很安静。', pinyin: 'Diànyǐng kāishǐ le, lǐbian hěn ānjìng.', meaning: 'Phim bắt đầu rồi, bên trong rất yên tĩnh.', expression: null, vocab: ['了','里边'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '前边最好，我们坐这儿吧。', pinyin: 'Qiánbian zuì hǎo, wǒmen zuò zhèr ba.', meaning: 'Phía trước là tốt nhất, mình ngồi đây nhé.', expression: 'happy', vocab: ['前边'] }
    ],
    vocab: [
      { h: '块', p: 'kuài', v: 'đồng (tiền)/cục' }, { h: '了', p: 'le', v: '(trợ từ hoàn thành)' }, { h: '里边', p: 'lǐbian', v: 'bên trong' },
      { h: '马上', p: 'mǎshàng', v: 'ngay lập tức' }, { h: '没什么', p: 'méishénme', v: 'không có gì' }, { h: '没事儿', p: 'méishìr', v: 'không sao' },
      { h: '男', p: 'nán', v: 'nam' }, { h: '女', p: 'nǚ', v: 'nữ' }, { h: '票', p: 'piào', v: 'vé' },
      { h: '前边', p: 'qiánbian', v: 'phía trước' }, { h: '事', p: 'shì', v: 'việc' }, { h: '是不是', p: 'shìbushì', v: 'có phải...không' },
      { h: '太', p: 'tài', v: 'quá' }, { h: '外', p: 'wài', v: 'ngoài' }, { h: '外边', p: 'wàibian', v: 'bên ngoài' },
      { h: '网上', p: 'wǎngshàng', v: 'trên mạng' }, { h: '要', p: 'yào', v: 'cần/muốn' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: 'Mai 在___买电影票。', options: ['网上','里边','前边'], answer: '网上' },
        { type: 'fill', sentence: '一张___四十块。', options: ['票','事','男'], answer: '票' },
        { type: 'fill', sentence: '我___买两张。', options: ['马上','太','外'], answer: '马上' },
        { type: 'fill', sentence: '洗手间在___。', options: ['外边','网上','票'], answer: '外边' },
        { type: 'fill', sentence: '电影开始___。', options: ['了','块','太'], answer: '了' }
      ],
      normal: [
        { type: 'fill', sentence: '这部电影___很有名？', options: ['是不是','没什么','里边'], answer: '是不是' },
        { type: 'fill', sentence: '票要多少___？', options: ['块','票','事'], answer: '块' },
        { type: 'fill', sentence: '一张票四十块，不___贵。', options: ['太','要','外'], answer: '太' },
        { type: 'fill', sentence: '___人多吗？', options: ['里边','马上','男'], answer: '里边' },
        { type: 'fill', sentence: '他们来到电影院___。', options: ['前边','网上','没事儿'], answer: '前边' },
        { type: 'order', words: ['网上','买','票','在','她'], answer: '她在网上买票' },
        { type: 'order', words: ['马上','买','我','两张'], answer: '我马上买两张' },
        { type: 'order', words: ['里边','吗','人','多'], answer: '里边人多吗' }
      ],
      hard: [
        { type: 'fill', sentence: '是不是你有___？', options: ['事','票','块'], answer: '事' },
        { type: 'fill', sentence: '没事儿，___。', options: ['没什么','是不是','前边'], answer: '没什么' },
        { type: 'fill', sentence: '___，没什么。', options: ['没事儿','马上','外边'], answer: '没事儿' },
        { type: 'fill', sentence: '门口写着"___""女"。', options: ['男','票','事'], answer: '男' },
        { type: 'fill', sentence: '我去___买水。', options: ['外边','里边','网上'], answer: '外边' },
        { type: 'order', words: ['是不是','有名','这部电影','很'], answer: '这部电影是不是很有名' },
        { type: 'order', words: ['票','多少','要','块'], answer: '票要多少块' },
        { type: 'order', words: ['外边','买水','去','我'], answer: '我去外边买水' },
        { type: 'translate', prompt: 'Tớ mua hai vé ngay.', answer: '我马上买两张票。' },
        { type: 'translate', prompt: 'Không sao, không có gì.', answer: '没事儿，没什么。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 18: Từ chức năng & liên từ (3) — CORE (16 từ)
  // ───────────────────────────────────────────────────────────────────────
  18: {
    id: 18,
    title: 'Từ chức năng & liên từ (3)',
    context: 'Trong lớp, thầy Lý chỉ chữ trên bảng trái–phải–giữa. Sau giờ học, Mai và Tiểu Mỹ vào thư viện tìm sách và chọn chỗ ngồi. Bài học đầy từ chỉ phương hướng và mức độ.',
    vocabPreview: ['中间','左边','右边','一块儿','最'],
    steps: [
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Lớp học', bg: 'classroom',
        cast: ['laoli', 'mai', 'xiaomei'],
        text: '上课了，同学们坐着听老师讲。', pinyin: 'Shàngkè le, tóngxuémen zuò zhe tīng lǎoshī jiǎng.', meaning: 'Vào học, các bạn ngồi nghe thầy giảng.', expression: null, vocab: ['着'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['laoli', 'mai', 'xiaomei'],
        text: '请看黑板中间的字，左边和右边也要看。', pinyin: 'Qǐng kàn hēibǎn zhōngjiān de zì, zuǒbian hé yòubian yě yào kàn.', meaning: 'Mời nhìn chữ ở giữa bảng, bên trái và bên phải cũng phải xem.', expression: null, vocab: ['中间','左边','右边','也'] },
      { type: 'dialogue', speaker: 'mai', cast: ['laoli', 'mai', 'xiaomei'],
        text: '老师，中间的字太小，能再写一下儿吗？', pinyin: 'Lǎoshī, zhōngjiān de zì tài xiǎo, néng zài xiě yíxiàr ma?', meaning: 'Thầy ơi, chữ ở giữa nhỏ quá, thầy viết lại một chút được không?', expression: 'confused', vocab: ['中间','中','再','一下儿'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['laoli', 'mai', 'xiaomei'],
        text: '好，我写大一些。右边的同学也看得到吗？', pinyin: 'Hǎo, wǒ xiě dà yìxiē. Yòubian de tóngxué yě kàn de dào ma?', meaning: 'Được, thầy viết to hơn một chút. Bạn bên phải cũng nhìn thấy chứ?', expression: null, vocab: ['一些','右边','右','也'] },
      { type: 'choice', speaker: 'mai', cast: ['laoli', 'mai', 'xiaomei'], expression: 'happy',
        q: 'Thầy viết to hơn rồi và hỏi Mai có nhìn thấy không. Mai thấy được. Mai đáp thế nào?',
        options: [
          { text: '看得到了！谢谢老师。', pinyin: 'Kàn de dào le! Xièxie lǎoshī.', meaning: 'Nhìn thấy rồi! Cảm ơn thầy.', correct: true,
            feedback: 'Đúng! 看得到 = "nhìn thấy được" (bổ ngữ khả năng 得).' },
          { text: '看不到，谢谢老师。', pinyin: 'Kàn bú dào, xièxie lǎoshī.', meaning: 'Không nhìn thấy, cảm ơn thầy.', correct: false,
            feedback: 'Mâu thuẫn — thầy viết to rồi, Mai NHÌN THẤY nên dùng 看得到.' },
          { text: '看到得了！谢谢老师。', pinyin: 'Kàn dào de le! Xièxie lǎoshī.', meaning: '(sai trật tự)', correct: false,
            feedback: 'Sai trật tự — bổ ngữ khả năng là 看得到, không phải 看到得.' }
        ] },
      { type: 'dialogue', speaker: 'mai', cast: ['laoli', 'mai', 'xiaomei'],
        text: '看得到了！谢谢老师。', pinyin: 'Kàn de dào le! Xièxie lǎoshī.', meaning: 'Nhìn thấy rồi! Cảm ơn thầy.', expression: 'happy', vocab: [] },
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Thư viện · Sau giờ học', bg: 'library',
        cast: ['mai', 'xiaomei'],
        text: '下课后，小美和 Mai 一块儿去图书馆。', pinyin: 'Xiàkè hòu, Xiǎoměi hé Mai yíkuàir qù túshūguǎn.', meaning: 'Sau giờ học, Tiểu Mỹ và Mai cùng nhau đi thư viện.', expression: null, vocab: ['一块儿'] },
      { type: 'checkpoint', questions: [
        { q: 'Thầy bảo nhìn chữ ở đâu trên bảng?', options: ['中间', '外边', '前边', '里边'], answer: 0 },
        { q: '"右边" nghĩa là gì?', options: ['bên phải', 'bên trái', 'ở giữa', 'phía trước'], answer: 0 },
        { q: 'Hai bạn cùng nhau đi đâu sau giờ học?', options: ['图书馆', '电影院', '医院', '商店'], answer: 0 }
      ] },
      { type: 'dialogue', speaker: 'narrator', cast: ['mai', 'xiaomei'],
        text: '图书馆里，有的书在左边，有些在右边。', pinyin: 'Túshūguǎn lǐ, yǒude shū zài zuǒbian, yǒuxiē zài yòubian.', meaning: 'Trong thư viện, có sách ở bên trái, một số ở bên phải.', expression: null, vocab: ['有的','有些','左边','右边','右'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你要的书在中间的桌子上，最上边。', pinyin: 'Nǐ yào de shū zài zhōngjiān de zhuōzi shang, zuì shàngbian.', meaning: 'Sách cậu cần ở cái bàn ở giữa, trên cùng.', expression: null, vocab: ['中间','中','最'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我一边找书，一边记书名。', pinyin: 'Wǒ yìbiān zhǎo shū, yìbiān jì shūmíng.', meaning: 'Tớ vừa tìm sách vừa ghi tên sách.', expression: null, vocab: ['一边'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '左边有位子，我们坐左边吧。', pinyin: 'Zuǒbian yǒu wèizi, wǒmen zuò zuǒbian ba.', meaning: 'Bên trái có chỗ, mình ngồi bên trái nhé.', expression: null, vocab: ['左','左边'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '好，看完书我们再一块儿回去。', pinyin: 'Hǎo, kàn wán shū wǒmen zài yíkuàir huíqù.', meaning: 'Được, đọc xong sách mình lại cùng về.', expression: null, vocab: ['再','一块儿'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这是我最喜欢的地方，我也想常常来。', pinyin: 'Zhè shì wǒ zuì xǐhuan de dìfang, wǒ yě xiǎng chángcháng lái.', meaning: 'Đây là nơi tớ thích nhất, tớ cũng muốn thường xuyên đến.', expression: 'happy', vocab: ['最','也'] }
    ],
    vocab: [
      { h: '也', p: 'yě', v: 'cũng' }, { h: '一边', p: 'yìbiān', v: 'một bên/vừa...vừa' }, { h: '一块儿', p: 'yíkuàir', v: 'cùng nhau' },
      { h: '一下儿', p: 'yíxiàr', v: 'một chút' }, { h: '一些', p: 'yìxiē', v: 'một vài' }, { h: '有的', p: 'yǒude', v: 'có cái' },
      { h: '有些', p: 'yǒuxiē', v: 'một số' }, { h: '右', p: 'yòu', v: 'phải' }, { h: '右边', p: 'yòubian', v: 'bên phải' },
      { h: '再', p: 'zài', v: 'lại/nữa' }, { h: '着', p: 'zhe', v: '(trợ từ đang)' }, { h: '中', p: 'zhōng', v: 'giữa/trong' },
      { h: '中间', p: 'zhōngjiān', v: 'ở giữa' }, { h: '最', p: 'zuì', v: 'nhất' }, { h: '左', p: 'zuǒ', v: 'trái' },
      { h: '左边', p: 'zuǒbian', v: 'bên trái' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '同学们坐___听老师讲。', options: ['着','也','再'], answer: '着' },
        { type: 'fill', sentence: '请看黑板___的字。', options: ['中间','右边','一些'], answer: '中间' },
        { type: 'fill', sentence: '左边和右边___要看。', options: ['也','最','着'], answer: '也' },
        { type: 'fill', sentence: '小美和 Mai ___去图书馆。', options: ['一块儿','一下儿','有的'], answer: '一块儿' },
        { type: 'fill', sentence: '这是我___喜欢的地方。', options: ['最','也','再'], answer: '最' }
      ],
      normal: [
        { type: 'fill', sentence: '能___写一下儿吗？', options: ['再','着','中'], answer: '再' },
        { type: 'fill', sentence: '能再写___吗？', options: ['一下儿','一块儿','有些'], answer: '一下儿' },
        { type: 'fill', sentence: '我写大___。', options: ['一些','一边','右边'], answer: '一些' },
        { type: 'fill', sentence: '___书在左边，有些在右边。', options: ['有的','一块儿','中间'], answer: '有的' },
        { type: 'fill', sentence: '你要的书在中间，___上边。', options: ['最','也','再'], answer: '最' },
        { type: 'order', words: ['一块儿','我们','去','图书馆'], answer: '我们一块儿去图书馆' },
        { type: 'order', words: ['中间','的字','看','请','黑板'], answer: '请看黑板中间的字' },
        { type: 'order', words: ['最','这是','喜欢','我','的地方'], answer: '这是我最喜欢的地方' }
      ],
      hard: [
        { type: 'fill', sentence: '我___找书，一边记书名。', options: ['一边','一些','有的'], answer: '一边' },
        { type: 'fill', sentence: '左边有位子，我们坐___吧。', options: ['左边','右边','中间'], answer: '左边' },
        { type: 'fill', sentence: '看完书我们___一块儿回去。', options: ['再','着','也'], answer: '再' },
        { type: 'fill', sentence: '有的在左边，___在右边。', options: ['有些','一边','着'], answer: '有些' },
        { type: 'fill', sentence: '右边的字在___间。', options: ['中','左','右'], answer: '中' },
        { type: 'order', words: ['一边','一边','找书','记书名'], answer: '一边找书一边记书名' },
        { type: 'order', words: ['右边','的同学','看得到','吗'], answer: '右边的同学看得到吗' },
        { type: 'order', words: ['左边','坐','我们','吧'], answer: '我们坐左边吧' },
        { type: 'translate', prompt: 'Đây là nơi tớ thích nhất.', answer: '这是我最喜欢的地方。' },
        { type: 'translate', prompt: 'Bên trái và bên phải cũng phải xem.', answer: '左边和右边也要看。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 19: Thời gian trong ngày của Mai — CORE · thời gian (23 từ)
  // ───────────────────────────────────────────────────────────────────────
  19: {
    id: 19,
    title: 'Thời gian trong ngày của Mai',
    context: 'Mai và Tiểu Mỹ trò chuyện về tuổi, năm mới, lịch sinh hoạt và kế hoạch cuối tuần. Bài học gom đủ các từ chỉ thời gian: hôm qua–hôm nay, năm ngoái–năm nay, sáng–tối, sớm–muộn.',
    vocabPreview: ['今年','岁','早上','后天','一会儿'],
    steps: [
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Ký túc xá · Buổi sáng', bg: 'dorm-room',
        cast: ['mai', 'xiaomei'],
        text: '今年，Mai 来中国学习。她常常想家。', pinyin: 'Jīnnián, Mai lái Zhōngguó xuéxí. Tā chángcháng xiǎng jiā.', meaning: 'Năm nay, Mai sang Trung Quốc học. Cô thường nhớ nhà.', expression: null, vocab: ['今年','常'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '去年这个时候我还在越南，今年就来了中国。', pinyin: 'Qùnián zhège shíhou wǒ hái zài Yuènán, jīnnián jiù lái le Zhōngguó.', meaning: 'Năm ngoái giờ này tớ còn ở Việt Nam, năm nay đã sang Trung Quốc.', expression: null, vocab: ['去年','今年'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: 'Mai，你今年多大岁数？', pinyin: 'Mai, nǐ jīnnián duō dà suìshu?', meaning: 'Mai, năm nay cậu bao nhiêu tuổi?', expression: null, vocab: ['岁'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], expression: 'happy',
        q: 'Tiểu Mỹ hỏi năm nay Mai bao nhiêu tuổi. Mai 19 tuổi. Câu nào đúng?',
        options: [
          { text: '我十九岁。', pinyin: 'Wǒ shíjiǔ suì.', meaning: 'Tớ mười chín tuổi.', correct: true,
            feedback: 'Đúng! Tuổi dùng 岁: 十九岁.' },
          { text: '我十九点。', pinyin: 'Wǒ shíjiǔ diǎn.', meaning: 'Tớ "mười chín giờ".', correct: false,
            feedback: 'Sai đơn vị — 点 là "giờ"; tuổi dùng 岁.' },
          { text: '我十九块。', pinyin: 'Wǒ shíjiǔ kuài.', meaning: 'Tớ "mười chín đồng".', correct: false,
            feedback: 'Sai đơn vị — 块 là tiền; tuổi dùng 岁.' }
        ] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我十九岁。下个月就是我的新年。', pinyin: 'Wǒ shíjiǔ suì. Xià ge yuè jiùshì wǒ de xīnnián.', meaning: 'Tớ mười chín tuổi. Tháng sau là năm mới của tớ rồi.', expression: 'happy', vocab: ['岁','新年'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '新年是几月几号？日期记得吗？', pinyin: 'Xīnnián shì jǐ yuè jǐ hào? Rìqī jìde ma?', meaning: 'Năm mới là ngày mấy tháng mấy? Cậu nhớ ngày không?', expression: null, vocab: ['号','日期','新年'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], expression: 'curious',
        q: 'Tiểu Mỹ hỏi năm mới của Mai là ngày mấy tháng mấy. Là mùng 1 tháng 1. Câu nào đúng?',
        options: [
          { text: '一月一号。', pinyin: 'Yī yuè yī hào.', meaning: 'Mùng một tháng Giêng.', correct: true,
            feedback: 'Đúng! Tiếng Trung nói tháng trước, ngày sau: 一月一号.' },
          { text: '一号一月。', pinyin: 'Yī hào yī yuè.', meaning: '(sai trật tự)', correct: false,
            feedback: 'Sai trật tự — phải là tháng (月) trước rồi ngày (号): 一月一号.' },
          { text: '一月一点。', pinyin: 'Yī yuè yī diǎn.', meaning: 'Tháng Giêng một "giờ".', correct: false,
            feedback: 'Sai đơn vị — 点 là "giờ"; ngày dùng 号: 一月一号.' }
        ] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '一月一号。前天我就开始准备了。', pinyin: 'Yī yuè yī hào. Qiántiān wǒ jiù kāishǐ zhǔnbèi le.', meaning: 'Mùng một tháng Giêng. Hôm kia tớ đã bắt đầu chuẩn bị.', expression: null, vocab: ['前天','号'] },
      { type: 'dialogue', speaker: 'narrator', cast: ['mai', 'xiaomei'],
        text: '说话的时候，正是早上，白天的太阳很好。', pinyin: 'Shuōhuà de shíhou, zhèng shì zǎoshang, báitiān de tàiyáng hěn hǎo.', meaning: 'Lúc nói chuyện, đúng là buổi sáng, nắng ban ngày rất đẹp.', expression: null, vocab: ['正','早上','白天'] },
      { type: 'checkpoint', questions: [
        { q: 'Mai sang Trung Quốc học vào năm nào?', options: ['今年', '去年', '前年', '明年'], answer: 0 },
        { q: 'Năm nay Mai bao nhiêu tuổi?', options: ['十九岁', '二十岁', '十八岁', '十六岁'], answer: 0 },
        { q: '"白天" nghĩa là gì?', options: ['ban ngày', 'ban đêm', 'năm mới', 'nửa năm'], answer: 0 }
      ] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '后天星期天，我们去玩儿吧。', pinyin: 'Hòutiān xīngqītiān, wǒmen qù wánr ba.', meaning: 'Ngày kia chủ nhật, mình đi chơi nhé.', expression: null, vocab: ['后天','星期天'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好啊！可是我早上要早起，先学两个小时。', pinyin: 'Hǎo a! Kěshì wǒ zǎoshang yào zǎo qǐ, xiān xué liǎng ge xiǎoshí.', meaning: 'Được thôi! Nhưng sáng tớ phải dậy sớm, học hai tiếng trước đã.', expression: null, vocab: ['早','小时','早上'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '学半天太累，学一会儿就好。', pinyin: 'Xué bàntiān tài lèi, xué yíhuìr jiù hǎo.', meaning: 'Học cả buổi mệt lắm, học một lát là được.', expression: null, vocab: ['半天','一会儿'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '有时我学得晚，半年来学了很多。', pinyin: 'Yǒushí wǒ xué de wǎn, bànnián lái xué le hěn duō.', meaning: 'Có lúc tớ học muộn, nửa năm nay học được nhiều.', expression: 'happy', vocab: ['有时','晚','半年'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '上次你考得好，下次一定更好。', pinyin: 'Shàng cì nǐ kǎo de hǎo, xià cì yídìng gèng hǎo.', meaning: 'Lần trước cậu thi tốt, lần sau chắc chắn còn tốt hơn.', expression: null, vocab: ['上次','下次'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '谢谢！今天是个好天，我们一会儿出去走走。', pinyin: 'Xièxie! Jīntiān shì ge hǎo tiān, wǒmen yíhuìr chūqù zǒuzou.', meaning: 'Cảm ơn! Hôm nay trời đẹp, lát nữa mình ra ngoài đi dạo.', expression: null, vocab: ['天','一会儿'] }
    ],
    vocab: [
      { h: '白天', p: 'báitiān', v: 'ban ngày' }, { h: '半年', p: 'bànnián', v: 'nửa năm' }, { h: '半天', p: 'bàntiān', v: 'nửa ngày/lâu' },
      { h: '常', p: 'cháng', v: 'thường' }, { h: '号', p: 'hào', v: 'ngày/số' }, { h: '后天', p: 'hòutiān', v: 'ngày kia' },
      { h: '今年', p: 'jīnnián', v: 'năm nay' }, { h: '前天', p: 'qiántiān', v: 'hôm kia' }, { h: '去年', p: 'qùnián', v: 'năm ngoái' },
      { h: '日期', p: 'rìqī', v: 'ngày tháng' }, { h: '上次', p: 'shàng cì', v: 'lần trước' }, { h: '岁', p: 'suì', v: 'tuổi' },
      { h: '天', p: 'tiān', v: 'ngày/trời' }, { h: '晚', p: 'wǎn', v: 'muộn/tối' }, { h: '下次', p: 'xià cì', v: 'lần sau' },
      { h: '小时', p: 'xiǎoshí', v: 'giờ (tiếng)' }, { h: '新年', p: 'xīnnián', v: 'năm mới' }, { h: '星期天', p: 'xīngqītiān', v: 'chủ nhật' },
      { h: '一会儿', p: 'yíhuìr', v: 'một lát' }, { h: '有时', p: 'yǒushí', v: 'có lúc' }, { h: '早', p: 'zǎo', v: 'sớm' },
      { h: '早上', p: 'zǎoshang', v: 'buổi sáng' }, { h: '正', p: 'zhèng', v: 'đang/đúng' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '___，Mai 来中国学习。', options: ['今年','去年','后天'], answer: '今年' },
        { type: 'fill', sentence: '我十九___。', options: ['岁','号','天'], answer: '岁' },
        { type: 'fill', sentence: '后天___，我们去玩儿。', options: ['星期天','早上','半年'], answer: '星期天' },
        { type: 'fill', sentence: '我早上要___起。', options: ['早','晚','正'], answer: '早' },
        { type: 'fill', sentence: '上次你考得好，___一定更好。', options: ['下次','前天','白天'], answer: '下次' }
      ],
      normal: [
        { type: 'fill', sentence: '___这个时候我还在越南。', options: ['去年','后天','上次'], answer: '去年' },
        { type: 'fill', sentence: '新年是几月几___？', options: ['号','岁','天'], answer: '号' },
        { type: 'fill', sentence: '先学两个___。', options: ['小时','日期','半年'], answer: '小时' },
        { type: 'fill', sentence: '学___太累。', options: ['半天','早上','下次'], answer: '半天' },
        { type: 'fill', sentence: '___我学得晚。', options: ['有时','正','号'], answer: '有时' },
        { type: 'order', words: ['今年','你','多大','岁数'], answer: '你今年多大岁数' },
        { type: 'order', words: ['星期天','后天','去玩儿','我们'], answer: '后天星期天我们去玩儿' },
        { type: 'order', words: ['小时','两个','学','先'], answer: '先学两个小时' }
      ],
      hard: [
        { type: 'fill', sentence: '说话的时候，___是早上。', options: ['正','常','晚'], answer: '正' },
        { type: 'fill', sentence: '___的太阳很好。', options: ['白天','半天','后天'], answer: '白天' },
        { type: 'fill', sentence: '___来进步很大。', options: ['半年','一会儿','上次'], answer: '半年' },
        { type: 'fill', sentence: '我们___出去走走。', options: ['一会儿','日期','去年'], answer: '一会儿' },
        { type: 'fill', sentence: '她___常想家。', options: ['常','正','晚'], answer: '常' },
        { type: 'order', words: ['日期','吗','记得'], answer: '日期记得吗' },
        { type: 'order', words: ['岁','十九','我'], answer: '我十九岁' },
        { type: 'order', words: ['后天','星期天','是'], answer: '后天是星期天' },
        { type: 'translate', prompt: 'Năm nay cậu bao nhiêu tuổi?', answer: '你今年多大？' },
        { type: 'translate', prompt: 'Lần sau chắc chắn tốt hơn.', answer: '下次一定更好。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 20: Đại từ & số đếm nâng cao — CORE · đại từ (19 từ)
  // ───────────────────────────────────────────────────────────────────────
  20: {
    id: 20,
    title: 'Đại từ & số đếm nâng cao',
    context: 'Chủ nhật, Mai và Tiểu Mỹ đi mua vở. Qua việc hỏi giá, so sánh hàng bên này bên kia và đếm tiền, Mai luyện các đại từ chỉ định và những con số lớn.',
    vocabPreview: ['您','这些','那边','两','一半'],
    steps: [
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Cửa hàng · Chủ nhật', bg: 'street',
        cast: ['mai', 'xiaomei'],
        text: '星期天，Mai 和小美来到商店。这里东西很多。', pinyin: 'Xīngqītiān, Mai hé Xiǎoměi láidào shāngdiàn. Zhèlǐ dōngxi hěn duō.', meaning: 'Chủ nhật, Mai và Tiểu Mỹ đến cửa hàng. Ở đây rất nhiều đồ.', expression: null, vocab: ['这里'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], expression: 'curious',
        q: 'Mai cầm mấy quyển vở (ở gần mình), muốn hỏi giá người bán. Câu nào đúng?',
        options: [
          { text: '您好！这些本子多少钱？', pinyin: 'Nín hǎo! Zhèxiē běnzi duōshao qián?', meaning: 'Chào ạ! Mấy quyển vở này bao nhiêu tiền?', correct: true,
            feedback: 'Đúng! Vật ở gần dùng 这些 (những...này); 您 lịch sự.' },
          { text: '您好！那些本子多少钱？', pinyin: 'Nín hǎo! Nàxiē běnzi duōshao qián?', meaning: 'Chào ạ! Mấy quyển vở KIA bao nhiêu tiền?', correct: false,
            feedback: 'Sai chỉ định — vở ở GẦN Mai → 这些 (này), không phải 那些 (kia).' },
          { text: '您好！这本子多少钱？', pinyin: 'Nín hǎo! Zhè běnzi duōshao qián?', meaning: 'Chào ạ! Quyển vở này bao nhiêu tiền?', correct: false,
            feedback: 'Hỏi NHIỀU quyển → 这些; 这 + danh từ chỉ một cái.' }
        ] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '您好！这些本子多少钱？', pinyin: 'Nín hǎo! Zhèxiē běnzi duōshao qián?', meaning: 'Chào ạ! Mấy quyển vở này bao nhiêu tiền?', expression: 'curious', vocab: ['这些','您'] },
      { type: 'dialogue', speaker: 'narrator', cast: ['mai', 'xiaomei'],
        text: '本子一百块钱十本，一本十块。', pinyin: 'Běnzi yìbǎi kuài qián shí běn, yì běn shí kuài.', meaning: 'Vở một trăm đồng mười quyển, một quyển mười đồng.', expression: null, vocab: ['百'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '有点贵！那些便宜一点吗？', pinyin: 'Yǒudiǎn guì! Nàxiē piányi yìdiǎn ma?', meaning: 'Hơi đắt! Mấy cái kia rẻ hơn chút không?', expression: null, vocab: ['那些'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '那边的更便宜，我们去那里看看。', pinyin: 'Nàbian de gèng piányi, wǒmen qù nàli kànkan.', meaning: 'Bên kia rẻ hơn, mình qua đó xem thử.', expression: null, vocab: ['那边','那里'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这边和那边，哪里的本子好？哪些是新的？', pinyin: 'Zhèbian hé nàbian, nǎlǐ de běnzi hǎo? Nǎxiē shì xīn de?', meaning: 'Bên này và bên kia, vở chỗ nào tốt? Những cái nào là mới?', expression: null, vocab: ['这边','哪里','哪些'] },
      { type: 'checkpoint', questions: [
        { q: 'Hai bạn đến đâu vào chủ nhật?', options: ['商店', '医院', '学校', '电影院'], answer: 0 },
        { q: '"您好" dùng khi nào?', options: ['chào lịch sự', 'tạm biệt', 'xin lỗi', 'cảm ơn'], answer: 0 },
        { q: '"那边" nghĩa là gì?', options: ['bên kia', 'bên này', 'ở đây', 'người khác'], answer: 0 }
      ] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], expression: 'focused',
        q: 'Mai muốn mua HAI quyển vở. Dùng số và lượng từ nào cho đúng?',
        options: [
          { text: '我买两本，给小美一本。', pinyin: 'Wǒ mǎi liǎng běn, gěi Xiǎoměi yì běn.', meaning: 'Tớ mua hai quyển, cho Tiểu Mỹ một quyển.', correct: true,
            feedback: 'Đúng! Trước lượng từ dùng 两 (không phải 二); sách/vở dùng 本.' },
          { text: '我买二本，给小美一本。', pinyin: 'Wǒ mǎi èr běn, gěi Xiǎoměi yì běn.', meaning: '(sai số)', correct: false,
            feedback: 'Sai — trước lượng từ dùng 两, không dùng 二: 两本.' },
          { text: '我买两个，给小美一本。', pinyin: 'Wǒ mǎi liǎng ge, gěi Xiǎoměi yì běn.', meaning: '(sai lượng từ)', correct: false,
            feedback: 'Sai lượng từ — vở/sách dùng 本, không dùng 个.' }
        ] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我买两本，给小美一本，一半给别人。', pinyin: 'Wǒ mǎi liǎng běn, gěi Xiǎoměi yì běn, yíbàn gěi biéren.', meaning: 'Tớ mua hai quyển, cho Tiểu Mỹ một quyển, một nửa cho người khác.', expression: null, vocab: ['两','一半','别人'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '她们也想要，你看那几个同学。', pinyin: 'Tāmen yě xiǎng yào, nǐ kàn nà jǐ ge tóngxué.', meaning: 'Các bạn ấy cũng muốn, cậu xem mấy bạn kia kìa.', expression: null, vocab: ['她们','几'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '同学们都来了！我们一起买吧。', pinyin: 'Tóngxuémen dōu lái le! Wǒmen yìqǐ mǎi ba.', meaning: 'Các bạn đều đến rồi! Mình cùng mua nào.', expression: null, vocab: ['们'] },
      { type: 'dialogue', speaker: 'narrator', cast: ['mai', 'xiaomei'],
        text: '钱不多了，Mai 看了看钱包：还有零钱。', pinyin: 'Qián bù duō le, Mai kàn le kàn qiánbāo: háiyǒu língqián.', meaning: 'Tiền không còn nhiều, Mai xem ví: vẫn còn tiền lẻ.', expression: null, vocab: ['零'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这里写着"〇"，就是零。', pinyin: 'Zhèlǐ xiě zhe "líng", jiùshì líng.', meaning: 'Ở đây ghi "〇", chính là số không.', expression: 'curious', vocab: ['〇','零'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '对，〇就是零。买半本不行，买一本吧。', pinyin: 'Duì, líng jiùshì líng. Mǎi bàn běn bù xíng, mǎi yì běn ba.', meaning: 'Đúng, "〇" chính là số không. Mua nửa quyển không được, mua một quyển đi.', expression: null, vocab: ['〇','半','零'] }
    ],
    vocab: [
      { h: '别人', p: 'biéren', v: 'người khác' }, { h: '们', p: 'men', v: '(số nhiều)' }, { h: '哪里', p: 'nǎlǐ', v: 'ở đâu' },
      { h: '哪些', p: 'nǎxiē', v: 'những...nào' }, { h: '那边', p: 'nàbian', v: 'bên kia' }, { h: '那里', p: 'nàli', v: 'ở đó' },
      { h: '那些', p: 'nàxiē', v: 'những...kia' }, { h: '您', p: 'nín', v: 'ngài/anh (lịch sự)' }, { h: '她们', p: 'tāmen', v: 'họ (nữ)' },
      { h: '这边', p: 'zhèbian', v: 'bên này' }, { h: '这里', p: 'zhèlǐ', v: 'ở đây' }, { h: '这些', p: 'zhèxiē', v: 'những...này' },
      { h: '百', p: 'bǎi', v: 'trăm' }, { h: '半', p: 'bàn', v: 'nửa' }, { h: '几', p: 'jǐ', v: 'mấy' },
      { h: '两', p: 'liǎng', v: 'hai' }, { h: '零', p: 'líng', v: 'không/lẻ' }, { h: '一半', p: 'yíbàn', v: 'một nửa' },
      { h: '〇', p: 'líng', v: 'số không' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '___好！这些本子多少钱？', options: ['您','们','几'], answer: '您' },
        { type: 'fill', sentence: '___本子多少钱？', options: ['这些','别人','一半'], answer: '这些' },
        { type: 'fill', sentence: '我买___本。', options: ['两','百','零'], answer: '两' },
        { type: 'fill', sentence: '我们去___看看。', options: ['那里','这些','别人'], answer: '那里' },
        { type: 'fill', sentence: '〇就是___。', options: ['零','半','百'], answer: '零' }
      ],
      normal: [
        { type: 'fill', sentence: '这边和那边，___的本子好？', options: ['哪里','那些','她们'], answer: '哪里' },
        { type: 'fill', sentence: '___是新的？', options: ['哪些','这边','别人'], answer: '哪些' },
        { type: 'fill', sentence: '一半给___。', options: ['别人','哪里','两'], answer: '别人' },
        { type: 'fill', sentence: '她___也想要。', options: ['们','百','几'], answer: '们' },
        { type: 'fill', sentence: '你看那___个同学。', options: ['几','半','零'], answer: '几' },
        { type: 'order', words: ['这些','多少钱','本子'], answer: '这些本子多少钱' },
        { type: 'order', words: ['那边','更','便宜','的'], answer: '那边的更便宜' },
        { type: 'order', words: ['两本','买','我'], answer: '我买两本' }
      ],
      hard: [
        { type: 'fill', sentence: '本子一___块钱十本。', options: ['百','两','零'], answer: '百' },
        { type: 'fill', sentence: '买___本不行。', options: ['半','们','几'], answer: '半' },
        { type: 'fill', sentence: '给小美一本，___给别人。', options: ['一半','哪些','那里'], answer: '一半' },
        { type: 'fill', sentence: '___便宜一点吗？', options: ['那些','她们','这里'], answer: '那些' },
        { type: 'fill', sentence: '钱不多了，还有___钱。', options: ['零','百','半'], answer: '零' },
        { type: 'order', words: ['她们','想要','也'], answer: '她们也想要' },
        { type: 'order', words: ['哪里','本子','的','好'], answer: '哪里的本子好' },
        { type: 'order', words: ['别人','给','一半'], answer: '一半给别人' },
        { type: 'translate', prompt: 'Mấy quyển vở này bao nhiêu tiền?', answer: '这些本子多少钱？' },
        { type: 'translate', prompt: 'Tớ mua hai quyển.', answer: '我买两本。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 21: Người thân, món ăn & lời chào — CORE · gia đình (22 từ)
  // ───────────────────────────────────────────────────────────────────────
  21: {
    id: 21,
    title: 'Người thân, món ăn & lời chào',
    context: 'Sáng chủ nhật, Tiểu Mỹ mời Mai về nhà ăn sáng và giới thiệu cả gia đình. Bài học gom đủ cách gọi người thân, các món ăn trên bàn và những lời chào lịch sự.',
    vocabPreview: ['请进','家人','爷爷','水果','不客气'],
    steps: [
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Nhà Tiểu Mỹ · Sáng chủ nhật', bg: 'home',
        cast: ['mai', 'xiaomei'],
        text: '星期天早上，小美请 Mai 来家里吃早饭。', pinyin: 'Xīngqītiān zǎoshang, Xiǎoměi qǐng Mai lái jiālǐ chī zǎofàn.', meaning: 'Sáng chủ nhật, Tiểu Mỹ mời Mai đến nhà ăn sáng.', expression: null, vocab: ['请','早饭'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: 'Mai，请进！请坐！', pinyin: 'Mai, qǐng jìn! Qǐng zuò!', meaning: 'Mai, mời vào! Mời ngồi!', expression: null, vocab: ['请进','请坐','请'] },
      { type: 'choice', speaker: 'mai', cast: ['mai', 'xiaomei'], expression: 'happy',
        q: 'Tiểu Mỹ mời "Mời vào! Mời ngồi!". Là khách, Mai đáp lịch sự thế nào?',
        options: [
          { text: '谢谢！你家人真多呀。', pinyin: 'Xièxie! Nǐ jiārén zhēn duō ya.', meaning: 'Cảm ơn! Nhà cậu đông người thật.', correct: true,
            feedback: 'Đúng! Khách được mời thì cảm ơn: 谢谢.' },
          { text: '不客气！你家人真多呀。', pinyin: 'Bú kèqi! Nǐ jiārén zhēn duō ya.', meaning: 'Không có gì! Nhà cậu đông người thật.', correct: false,
            feedback: 'Sai vai — 不客气 là lời ĐÁP LẠI cảm ơn; khách nên nói 谢谢.' },
          { text: '请坐！你家人真多呀。', pinyin: 'Qǐng zuò! Nǐ jiārén zhēn duō ya.', meaning: 'Mời ngồi! Nhà cậu đông người thật.', correct: false,
            feedback: 'Sai vai — 请坐 là lời CHỦ NHÀ mời khách; Mai là khách.' }
        ] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '谢谢！你家人真多呀。', pinyin: 'Xièxie! Nǐ jiārén zhēn duō ya.', meaning: 'Cảm ơn! Nhà cậu đông người thật.', expression: null, vocab: ['家人'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这是我爸、我妈，还有我哥和我姐。', pinyin: 'Zhè shì wǒ bà, wǒ mā, háiyǒu wǒ gē hé wǒ jiě.', meaning: 'Đây là bố tớ, mẹ tớ, còn có anh trai và chị gái tớ.', expression: null, vocab: ['爸','妈','哥','姐'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '那是我弟和我妹，他们是爸妈的儿子和女儿。', pinyin: 'Nà shì wǒ dì hé wǒ mèi, tāmen shì bà mā de érzi hé nǚ’ér.', meaning: 'Kia là em trai và em gái tớ, chúng là con trai và con gái của bố mẹ.', expression: null, vocab: ['弟','妹','子','女儿'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '你的爷爷奶奶也在吗？', pinyin: 'Nǐ de yéye nǎinai yě zài ma?', meaning: 'Ông bà nội cậu cũng ở đây à?', expression: 'curious', vocab: ['爷爷','奶奶'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '爷爷奶奶在那边坐着，一会儿一起吃饭。', pinyin: 'Yéye nǎinai zài nàbian zuò zhe, yíhuìr yìqǐ chī fàn.', meaning: 'Ông bà ở bên kia đang ngồi, lát nữa cùng ăn cơm.', expression: null, vocab: ['爷爷','奶奶','饭'] },
      { type: 'checkpoint', questions: [
        { q: 'Tiểu Mỹ mời Mai đến nhà làm gì?', options: ['吃早饭', '看电影', '学习', '买东西'], answer: 0 },
        { q: '"请坐" nghĩa là gì?', options: ['mời ngồi', 'mời vào', 'cảm ơn', 'tạm biệt'], answer: 0 },
        { q: 'Ai đang ngồi ở bên kia?', options: ['爷爷奶奶', '老师', '同学', '医生'], answer: 0 }
      ] },
      { type: 'dialogue', speaker: 'narrator', cast: ['mai', 'xiaomei'],
        text: '桌子上有面包、面条儿、肉和水果。', pinyin: 'Zhuōzi shang yǒu miànbāo, miàntiáor, ròu hé shuǐguǒ.', meaning: 'Trên bàn có bánh mì, mì sợi, thịt và hoa quả.', expression: null, vocab: ['面包','面条儿','肉','水果'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '还有牛奶！我最爱喝奶了。', pinyin: 'Háiyǒu niúnǎi! Wǒ zuì ài hē nǎi le.', meaning: 'Còn có sữa bò nữa! Tớ thích uống sữa nhất.', expression: 'happy', vocab: ['奶'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '多吃点儿肉和水果，别客气。', pinyin: 'Duō chī diǎnr ròu hé shuǐguǒ, bié kèqi.', meaning: 'Ăn thêm thịt và hoa quả đi, đừng khách sáo.', expression: null, vocab: ['肉','水果'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '谢谢你们！', pinyin: 'Xièxie nǐmen!', meaning: 'Cảm ơn mọi người!', expression: null, vocab: [] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '不客气！你是我的好朋友，就像家人一样。', pinyin: 'Búkèqi! Nǐ shì wǒ de hǎo péngyou, jiù xiàng jiārén yíyàng.', meaning: 'Không có gì! Cậu là bạn tốt của tớ, như người nhà vậy.', expression: null, vocab: ['不客气','家人'] }
    ],
    vocab: [
      { h: '爸', p: 'bà', v: 'bố' }, { h: '弟', p: 'dì', v: 'em trai' }, { h: '哥', p: 'gē', v: 'anh trai' },
      { h: '家人', p: 'jiārén', v: 'người nhà' }, { h: '姐', p: 'jiě', v: 'chị' }, { h: '妈', p: 'mā', v: 'mẹ' },
      { h: '妹', p: 'mèi', v: 'em gái' }, { h: '奶奶', p: 'nǎinai', v: 'bà nội' }, { h: '女儿', p: 'nǚ’ér', v: 'con gái' },
      { h: '爷爷', p: 'yéye', v: 'ông nội' }, { h: '子', p: 'zǐ', v: '(con/hậu tố)' }, { h: '饭', p: 'fàn', v: 'cơm' },
      { h: '面包', p: 'miànbāo', v: 'bánh mì' }, { h: '面条儿', p: 'miàntiáor', v: 'mì sợi' }, { h: '奶', p: 'nǎi', v: 'sữa' },
      { h: '肉', p: 'ròu', v: 'thịt' }, { h: '水果', p: 'shuǐguǒ', v: 'hoa quả' }, { h: '早饭', p: 'zǎofàn', v: 'bữa sáng' },
      { h: '不客气', p: 'búkèqi', v: 'không có gì' }, { h: '请', p: 'qǐng', v: 'mời' }, { h: '请进', p: 'qǐngjìn', v: 'mời vào' },
      { h: '请坐', p: 'qǐngzuò', v: 'mời ngồi' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '小美请 Mai 来家里吃___。', options: ['早饭','水果','面包'], answer: '早饭' },
        { type: 'fill', sentence: '请进！___！', options: ['请坐','不客气','家人'], answer: '请坐' },
        { type: 'fill', sentence: '这是我___、我妈。', options: ['爸','子','奶'], answer: '爸' },
        { type: 'fill', sentence: '桌子上有___和水果。', options: ['肉','请','姐'], answer: '肉' },
        { type: 'fill', sentence: '我最爱喝___了。', options: ['奶','妹','哥'], answer: '奶' }
      ],
      normal: [
        { type: 'fill', sentence: '你___真多呀。', options: ['家人','早饭','请进'], answer: '家人' },
        { type: 'fill', sentence: '那是我弟和我___。', options: ['妹','爸','奶'], answer: '妹' },
        { type: 'fill', sentence: '你的爷爷___也在吗？', options: ['奶奶','女儿','面包'], answer: '奶奶' },
        { type: 'fill', sentence: '多吃点儿肉和___。', options: ['水果','请坐','家人'], answer: '水果' },
        { type: 'fill', sentence: '___！你是我的好朋友。', options: ['不客气','请进','早饭'], answer: '不客气' },
        { type: 'order', words: ['请进','请坐'], answer: '请进请坐' },
        { type: 'order', words: ['家人','你','真多'], answer: '你家人真多' },
        { type: 'order', words: ['面包','有','桌子上','水果','和'], answer: '桌子上有面包和水果' }
      ],
      hard: [
        { type: 'fill', sentence: '他们是爸妈的儿子和___。', options: ['女儿','奶奶','面包'], answer: '女儿' },
        { type: 'fill', sentence: '桌子上有面包、___、肉和水果。', options: ['面条儿','早饭','家人'], answer: '面条儿' },
        { type: 'fill', sentence: '这是我爸、我___，还有我哥。', options: ['妈','子','请'], answer: '妈' },
        { type: 'fill', sentence: '爷爷奶奶一起吃___。', options: ['饭','奶','肉'], answer: '饭' },
        { type: 'fill', sentence: '你是我的好朋友，就像___一样。', options: ['家人','早饭','水果'], answer: '家人' },
        { type: 'order', words: ['爸','妈','这是','我','我'], answer: '这是我爸我妈' },
        { type: 'order', words: ['爷爷奶奶','吃饭','一起'], answer: '爷爷奶奶一起吃饭' },
        { type: 'order', words: ['不客气','你','好朋友','是','我的'], answer: '不客气你是我的好朋友' },
        { type: 'translate', prompt: 'Mời vào! Mời ngồi!', answer: '请进！请坐！' },
        { type: 'translate', prompt: 'Nhà cậu đông người thật.', answer: '你家人真多。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 22: Đọc thêm — Địa điểm & phương hướng (1) — ĐỌC THÊM (17 từ)
  // ───────────────────────────────────────────────────────────────────────
  22: {
    id: 22,
    title: 'Đọc thêm: Địa điểm & phương hướng (1)',
    context: 'Mai kể về thành phố Bắc Kinh nơi cô học và căn phòng nhỏ của mình. Một bài đọc nhẹ nhàng giúp ôn các từ chỉ nơi chốn và phương hướng.',
    vocabPreview: ['北京','地方','房间','国家','机场'],
    steps: [
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Khuôn viên trường · Bắc Kinh', bg: 'campus',
        cast: ['mai'],
        text: 'Mai 的学校在北京。北京是一个很大的地方。', pinyin: 'Mai de xuéxiào zài Běijīng. Běijīng shì yí ge hěn dà de dìfang.', meaning: 'Trường của Mai ở Bắc Kinh. Bắc Kinh là một nơi rất lớn.', expression: null, vocab: ['北京','地方'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '从国外来到北京，我觉得这个地方很美。', pinyin: 'Cóng guówài láidào Běijīng, wǒ juéde zhège dìfang hěn měi.', meaning: 'Từ nước ngoài đến Bắc Kinh, tớ thấy nơi này rất đẹp.', expression: 'happy', vocab: ['国外','北京','地方'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '学校北边有电影院，东边有商店。', pinyin: 'Xuéxiào běibian yǒu diànyǐngyuàn, dōngbian yǒu shāngdiàn.', meaning: 'Phía bắc trường có rạp phim, phía đông có cửa hàng.', expression: null, vocab: ['北边','北','电影院','东边','东'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我的房间在学校里。房子不大，可是很干净。', pinyin: 'Wǒ de fángjiān zài xuéxiào lǐ. Fángzi bùdà, kěshì hěn gānjìng.', meaning: 'Phòng tớ ở trong trường. Căn nhà không lớn nhưng rất sạch.', expression: null, vocab: ['房间','房子'] },
      { type: 'dialogue', speaker: 'narrator', cast: ['mai'],
        text: '房间里有一张床，地上放着书包。', pinyin: 'Fángjiān lǐ yǒu yì zhāng chuáng, dìshang fàng zhe shūbāo.', meaning: 'Trong phòng có một cái giường, trên sàn để cặp sách.', expression: null, vocab: ['地上','间'] },
      { type: 'checkpoint', questions: [
        { q: 'Trường của Mai ở thành phố nào?', options: ['北京', '上海', '越南', '机场'], answer: 0 },
        { q: '电影院 ở phía nào của trường?', options: ['北边', '东边', '里边', '外边'], answer: 0 },
        { q: '"房子" nghĩa là gì?', options: ['căn nhà', 'sân bay', 'quốc gia', 'phòng'], answer: 0 }
      ] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '明天我们去哪个地点见面？', pinyin: 'Míngtiān wǒmen qù nǎge dìdiǎn jiànmiàn?', meaning: 'Ngày mai mình gặp nhau ở địa điểm nào?', expression: null, vocab: ['地点'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '在机场吧，家里有人要来。', pinyin: 'Zài jīchǎng ba, jiālǐ yǒu rén yào lái.', meaning: 'Ở sân bay nhé, nhà tớ có người sắp đến.', expression: null, vocab: ['机场','家里'] },
      { type: 'dialogue', speaker: 'narrator', cast: ['mai'],
        text: '中国是 Mai 现在学习的国家，她爱这个国家。', pinyin: 'Zhōngguó shì Mai xiànzài xuéxí de guójiā, tā ài zhège guójiā.', meaning: 'Trung Quốc là quốc gia Mai đang học, cô yêu đất nước này.', expression: null, vocab: ['国家','国'] }
    ],
    vocab: [
      { h: '北', p: 'běi', v: 'bắc' }, { h: '北边', p: 'běibian', v: 'phía bắc' }, { h: '北京', p: 'Běijīng', v: 'Bắc Kinh' },
      { h: '地点', p: 'dìdiǎn', v: 'địa điểm' }, { h: '地方', p: 'dìfang', v: 'nơi/chỗ' }, { h: '地上', p: 'dìshang', v: 'trên mặt đất' },
      { h: '电影院', p: 'diànyǐngyuàn', v: 'rạp chiếu phim' }, { h: '东', p: 'dōng', v: 'đông' }, { h: '东边', p: 'dōngbian', v: 'phía đông' },
      { h: '房间', p: 'fángjiān', v: 'phòng' }, { h: '房子', p: 'fángzi', v: 'căn nhà' }, { h: '国', p: 'guó', v: 'nước' },
      { h: '国家', p: 'guójiā', v: 'quốc gia' }, { h: '国外', p: 'guówài', v: 'nước ngoài' }, { h: '机场', p: 'jīchǎng', v: 'sân bay' },
      { h: '家里', p: 'jiālǐ', v: 'trong nhà' }, { h: '间', p: 'jiān', v: 'gian/phòng' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: 'Mai 的学校在___。', options: ['北京','机场','国外'], answer: '北京' },
        { type: 'fill', sentence: '学校___有电影院。', options: ['北边','地上','房间'], answer: '北边' },
        { type: 'fill', sentence: '我的___在学校里。', options: ['房间','北京','国家'], answer: '房间' },
        { type: 'fill', sentence: '___不大，可是很干净。', options: ['房子','东边','地点'], answer: '房子' },
        { type: 'fill', sentence: '中国是一个___。', options: ['国家','机场','房间'], answer: '国家' }
      ],
      normal: [
        { type: 'fill', sentence: '北京是一个很大的___。', options: ['地方','东边','房子'], answer: '地方' },
        { type: 'fill', sentence: '从___来到北京。', options: ['国外','地上','房间'], answer: '国外' },
        { type: 'fill', sentence: '学校___有商店。', options: ['东边','房间','国家'], answer: '东边' },
        { type: 'fill', sentence: '我要去___接人。', options: ['机场','地上','北边'], answer: '机场' },
        { type: 'fill', sentence: '___有人要来。', options: ['家里','东边','地点'], answer: '家里' },
        { type: 'order', words: ['北京','在','学校'], answer: '学校在北京' },
        { type: 'order', words: ['有','电影院','北边'], answer: '北边有电影院' }
      ],
      hard: [
        { type: 'fill', sentence: '___放着书包。', options: ['地上','北边','房间'], answer: '地上' },
        { type: 'fill', sentence: '明天去哪个___见面？', options: ['地点','国外','东边'], answer: '地点' },
        { type: 'translate', prompt: 'Phòng tớ ở trong trường.', answer: '我的房间在学校里。' },
        { type: 'translate', prompt: 'Trung Quốc là một quốc gia.', answer: '中国是一个国家。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 23: Đọc thêm — Địa điểm & phương hướng (2) — ĐỌC THÊM (17 từ)
  // ───────────────────────────────────────────────────────────────────────
  23: {
    id: 23,
    title: 'Đọc thêm: Địa điểm & phương hướng (2)',
    context: 'Cuối tuần, Mai hẹn Tiểu Mỹ đi trung tâm thương mại. Câu chuyện chỉ đường nam–bắc–đông–tây, tầng trên tầng dưới giúp ôn thêm từ vựng nơi chốn.',
    vocabPreview: ['商场','马路','南边','楼上','洗手间'],
    steps: [
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Trên phố · Thứ Bảy', bg: 'street',
        cast: ['mai', 'xiaomei'],
        text: '周六，Mai 不在家，她要去商场。', pinyin: 'Zhōu liù, Mai bú zàijiā, tā yào qù shāngchǎng.', meaning: 'Thứ Bảy, Mai không ở nhà, cô muốn đi trung tâm thương mại.', expression: null, vocab: ['在家','商场'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '商场在马路南边，从路口往西走。', pinyin: 'Shāngchǎng zài mǎlù nánbian, cóng lùkǒu wǎng xī zǒu.', meaning: 'Trung tâm thương mại ở phía nam đường lớn, từ ngã tư đi về phía tây.', expression: null, vocab: ['马路','南边','南','路口','西'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '路上人很多，我站在门口等你。', pinyin: 'Lù shang rén hěn duō, wǒ zhàn zài ménkǒu děng nǐ.', meaning: 'Trên đường đông người, tớ đứng ở cửa đợi cậu.', expression: null, vocab: ['路上','路','站','门口'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '好，西边那个路口见。', pinyin: 'Hǎo, xībian nàge lùkǒu jiàn.', meaning: 'Được, gặp ở ngã tư phía tây nhé.', expression: null, vocab: ['西边','路口'] },
      { type: 'checkpoint', questions: [
        { q: 'Mai thứ Bảy đi đâu?', options: ['商场', '在家', '学校', '医院'], answer: 0 },
        { q: 'Trung tâm thương mại ở phía nào của đường?', options: ['南边', '北边', '东边', '里边'], answer: 0 },
        { q: '"门口" nghĩa là gì?', options: ['cửa ra vào', 'tầng trên', 'nước ngoài', 'ngã tư'], answer: 0 }
      ] },
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Trung tâm thương mại', bg: 'street',
        cast: ['mai', 'xiaomei'],
        text: '商场很大，楼上卖衣服，楼下有吃的。', pinyin: 'Shāngchǎng hěn dà, lóushàng mài yīfu, lóuxià yǒu chī de.', meaning: 'Trung tâm rất lớn, tầng trên bán quần áo, tầng dưới có đồ ăn.', expression: null, vocab: ['楼上','楼下','楼'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '洗手间在哪儿？', pinyin: 'Xǐshǒujiān zài nǎr?', meaning: 'Nhà vệ sinh ở đâu?', expression: null, vocab: ['洗手间'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '在楼上西边。这家商场有很多外国东西。', pinyin: 'Zài lóushàng xībian. Zhè jiā shāngchǎng yǒu hěn duō wàiguó dōngxi.', meaning: 'Ở tầng trên phía tây. Trung tâm này có nhiều đồ nước ngoài.', expression: null, vocab: ['西边','外国'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我从外国来，看到这些很开心。我们走路过马路吧。', pinyin: 'Wǒ cóng wàiguó lái, kàndào zhèxiē hěn kāixīn. Wǒmen zǒu lù guò mǎlù ba.', meaning: 'Tớ từ nước ngoài đến, thấy mấy thứ này rất vui. Mình đi bộ qua đường nhé.', expression: 'happy', vocab: ['外国','马路'] }
    ],
    vocab: [
      { h: '楼', p: 'lóu', v: 'tòa nhà/tầng' }, { h: '楼上', p: 'lóushàng', v: 'tầng trên' }, { h: '楼下', p: 'lóuxià', v: 'tầng dưới' },
      { h: '路', p: 'lù', v: 'đường' }, { h: '路口', p: 'lùkǒu', v: 'ngã tư/đầu đường' }, { h: '路上', p: 'lùshang', v: 'trên đường' },
      { h: '马路', p: 'mǎlù', v: 'đường lớn' }, { h: '门口', p: 'ménkǒu', v: 'cửa ra vào' }, { h: '南', p: 'nán', v: 'nam' },
      { h: '南边', p: 'nánbian', v: 'phía nam' }, { h: '商场', p: 'shāngchǎng', v: 'trung tâm thương mại' }, { h: '外国', p: 'wàiguó', v: 'nước ngoài' },
      { h: '洗手间', p: 'xǐshǒujiān', v: 'nhà vệ sinh' }, { h: '西', p: 'xī', v: 'tây' }, { h: '西边', p: 'xībian', v: 'phía tây' },
      { h: '在家', p: 'zàijiā', v: 'ở nhà' }, { h: '站', p: 'zhàn', v: 'đứng/ga' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '周六，Mai 不___。', options: ['在家','楼上','路口'], answer: '在家' },
        { type: 'fill', sentence: '她要去___。', options: ['商场','门口','外国'], answer: '商场' },
        { type: 'fill', sentence: '我站在___等你。', options: ['门口','楼下','西边'], answer: '门口' },
        { type: 'fill', sentence: '楼上卖衣服，___有吃的。', options: ['楼下','路上','南边'], answer: '楼下' },
        { type: 'fill', sentence: '___在哪儿？', options: ['洗手间','马路','商场'], answer: '洗手间' }
      ],
      normal: [
        { type: 'fill', sentence: '商场在马路___。', options: ['南边','楼上','路口'], answer: '南边' },
        { type: 'fill', sentence: '从___往西走。', options: ['路口','门口','在家'], answer: '路口' },
        { type: 'fill', sentence: '___人很多。', options: ['路上','楼下','外国'], answer: '路上' },
        { type: 'fill', sentence: '我___在门口等你。', options: ['站','楼','路'], answer: '站' },
        { type: 'fill', sentence: '这家商场有很多___东西。', options: ['外国','门口','南边'], answer: '外国' },
        { type: 'order', words: ['南边','商场','在','马路'], answer: '商场在马路南边' },
        { type: 'order', words: ['门口','站在','我','等你'], answer: '我站在门口等你' }
      ],
      hard: [
        { type: 'fill', sentence: '___卖衣服。', options: ['楼上','路上','在家'], answer: '楼上' },
        { type: 'fill', sentence: '在西边那个___见。', options: ['路口','洗手间','南边'], answer: '路口' },
        { type: 'translate', prompt: 'Nhà vệ sinh ở đâu?', answer: '洗手间在哪儿？' },
        { type: 'translate', prompt: 'Mình đi bộ qua đường nhé.', answer: '我们走路过马路吧。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 24: Đọc thêm — Mai miêu tả mọi thứ — ĐỌC THÊM · tính từ (23 từ)
  // ───────────────────────────────────────────────────────────────────────
  24: {
    id: 24,
    title: 'Đọc thêm: Mai miêu tả mọi thứ',
    context: 'Mai kể về một tuần học bận rộn, dùng đủ loại tính từ để miêu tả chữ viết, bài hát, sách vở và mọi thứ quanh mình.',
    vocabPreview: ['忙','难','干净','快','最好'],
    steps: [
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Ký túc xá', bg: 'dorm-room',
        cast: ['mai', 'xiaomei'],
        text: '这个星期 Mai 很忙，可是过得很好。', pinyin: 'Zhège xīngqī Mai hěn máng, kěshì guò de hěn hǎo.', meaning: 'Tuần này Mai rất bận, nhưng sống rất tốt.', expression: null, vocab: ['忙','好'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '汉语有点难，可是非常有用。', pinyin: 'Hànyǔ yǒudiǎn nán, kěshì fēicháng yǒuyòng.', meaning: 'Tiếng Trung hơi khó, nhưng rất hữu ích.', expression: null, vocab: ['难','有用'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你写的字很干净，也很认真。', pinyin: 'Nǐ xiě de zì hěn gānjìng, yě hěn rènzhēn.', meaning: 'Chữ cậu viết rất sạch sẽ, cũng rất nghiêm túc.', expression: null, vocab: ['干净','认真'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '真的吗？上次我写错了很多，这次对了。', pinyin: 'Zhēn de ma? Shàng cì wǒ xiě cuò le hěn duō, zhè cì duì le.', meaning: 'Thật à? Lần trước tớ viết sai nhiều, lần này đúng rồi.', expression: 'happy', vocab: ['错','对'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你进步很快！比上次好多了，差的地方少了。', pinyin: 'Nǐ jìnbù hěn kuài! Bǐ shàng cì hǎo duō le, chà de dìfang shǎo le.', meaning: 'Cậu tiến bộ nhanh lắm! Tốt hơn lần trước nhiều, chỗ kém ít đi rồi.', expression: null, vocab: ['快','差','少'] },
      { type: 'checkpoint', questions: [
        { q: 'Mai thấy tiếng Trung thế nào?', options: ['有点难但有用', 'rất dễ', 'vô dụng', 'rất chậm'], answer: 0 },
        { q: '"干净" nghĩa là gì?', options: ['sạch sẽ', 'bẩn', 'nhanh', 'nặng'], answer: 0 },
        { q: 'Lần này chữ Mai viết ra sao?', options: ['对了', '错了', '坏了', '慢了'], answer: 0 }
      ] },
      { type: 'dialogue', speaker: 'narrator', cast: ['mai', 'xiaomei'],
        text: '老师说，慢慢学最好，不用太快。', pinyin: 'Lǎoshī shuō, mànman xué zuìhǎo, búyòng tài kuài.', meaning: 'Thầy nói, học từ từ là tốt nhất, không cần quá nhanh.', expression: null, vocab: ['慢','最好'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '这首歌很好听，这个地方很好玩儿。', pinyin: 'Zhè shǒu gē hěn hǎotīng, zhège dìfang hěn hǎowánr.', meaning: 'Bài hát này rất hay, nơi này rất vui.', expression: null, vocab: ['好听','好玩儿'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我的旧书坏了，要买新的。新书有点贵。', pinyin: 'Wǒ de jiù shū huài le, yào mǎi xīn de. Xīn shū yǒudiǎn guì.', meaning: 'Sách cũ của tớ hỏng rồi, phải mua mới. Sách mới hơi đắt.', expression: null, vocab: ['坏','贵'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我的书包很重，里边的书又高又多。', pinyin: 'Wǒ de shūbāo hěn zhòng, lǐbian de shū yòu gāo yòu duō.', meaning: 'Cặp tớ rất nặng, sách bên trong vừa cao vừa nhiều.', expression: null, vocab: ['重','高'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '李老师很有名，他教得很好。', pinyin: 'Lǐ lǎoshī hěn yǒumíng, tā jiāo de hěn hǎo.', meaning: 'Thầy Lý rất nổi tiếng, thầy dạy rất tốt.', expression: null, vocab: ['有名'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我们想的一样！这样行不行？老书也有用，我爱老东西。', pinyin: 'Wǒmen xiǎng de yíyàng! Zhèyàng xíng bu xíng? Lǎo shū yě yǒuyòng, wǒ ài lǎo dōngxi.', meaning: 'Suy nghĩ của bọn mình giống nhau! Thế này được không? Sách cũ cũng hữu ích, tớ thích đồ cũ.', expression: 'happy', vocab: ['一样','行','老'] }
    ],
    vocab: [
      { h: '差', p: 'chà', v: 'kém' }, { h: '错', p: 'cuò', v: 'sai' }, { h: '对', p: 'duì', v: 'đúng' },
      { h: '干净', p: 'gānjìng', v: 'sạch sẽ' }, { h: '高', p: 'gāo', v: 'cao' }, { h: '贵', p: 'guì', v: 'đắt' },
      { h: '好', p: 'hǎo', v: 'tốt' }, { h: '好听', p: 'hǎotīng', v: 'dễ nghe/hay' }, { h: '好玩儿', p: 'hǎowánr', v: 'thú vị/vui' },
      { h: '坏', p: 'huài', v: 'hỏng/xấu' }, { h: '快', p: 'kuài', v: 'nhanh' }, { h: '老', p: 'lǎo', v: 'già/cũ' },
      { h: '慢', p: 'màn', v: 'chậm' }, { h: '忙', p: 'máng', v: 'bận' }, { h: '难', p: 'nán', v: 'khó' },
      { h: '认真', p: 'rènzhēn', v: 'nghiêm túc' }, { h: '少', p: 'shǎo', v: 'ít' }, { h: '行', p: 'xíng', v: 'được' },
      { h: '一样', p: 'yíyàng', v: 'giống nhau' }, { h: '有名', p: 'yǒumíng', v: 'nổi tiếng' }, { h: '有用', p: 'yǒuyòng', v: 'hữu ích' },
      { h: '重', p: 'zhòng', v: 'nặng' }, { h: '最好', p: 'zuìhǎo', v: 'tốt nhất' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '这个星期 Mai 很___。', options: ['忙','慢','坏'], answer: '忙' },
        { type: 'fill', sentence: '汉语有点___。', options: ['难','干净','有名'], answer: '难' },
        { type: 'fill', sentence: '你写的字很___。', options: ['干净','贵','重'], answer: '干净' },
        { type: 'fill', sentence: '上次我写___了很多。', options: ['错','对','快'], answer: '错' },
        { type: 'fill', sentence: '你进步很___！', options: ['快','慢','老'], answer: '快' }
      ],
      normal: [
        { type: 'fill', sentence: '汉语很___。', options: ['有用','坏','差'], answer: '有用' },
        { type: 'fill', sentence: '慢慢学___。', options: ['最好','一样','行'], answer: '最好' },
        { type: 'fill', sentence: '这首歌很___。', options: ['好听','干净','重'], answer: '好听' },
        { type: 'fill', sentence: '新书有点___。', options: ['贵','快','少'], answer: '贵' },
        { type: 'fill', sentence: '李老师很___。', options: ['有名','慢','坏'], answer: '有名' },
        { type: 'order', words: ['很','字','干净','你写的'], answer: '你写的字很干净' },
        { type: 'order', words: ['很快','进步','你'], answer: '你进步很快' }
      ],
      hard: [
        { type: 'fill', sentence: '我的书包很___。', options: ['重','少','对'], answer: '重' },
        { type: 'fill', sentence: '里边的书又___又多。', options: ['高','慢','坏'], answer: '高' },
        { type: 'fill', sentence: '我的旧书___了。', options: ['坏','对','快'], answer: '坏' },
        { type: 'fill', sentence: '我们想的___！', options: ['一样','有名','干净'], answer: '一样' },
        { type: 'fill', sentence: '这样___不行？', options: ['行','差','重'], answer: '行' },
        { type: 'fill', sentence: '差的地方___了。', options: ['少','高','贵'], answer: '少' },
        { type: 'order', words: ['好玩儿','这个','很','地方'], answer: '这个地方很好玩儿' },
        { type: 'translate', prompt: 'Tiếng Trung hơi khó nhưng rất hữu ích.', answer: '汉语有点难，可是很有用。' },
        { type: 'translate', prompt: 'Cậu tiến bộ rất nhanh.', answer: '你进步很快。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 25: Đọc thêm — Đồ vật xung quanh — ĐỌC THÊM · đồ vật (20 từ)
  // ───────────────────────────────────────────────────────────────────────
  25: {
    id: 25,
    title: 'Đọc thêm: Đồ vật xung quanh',
    context: 'Buổi tối, Mai dọn phòng và kiểm đồ đạc. Câu chuyện về cốc nước, túi sách, máy tính và ví tiền giúp ôn tên các vật dụng quen thuộc.',
    vocabPreview: ['正在','东西','电脑','钱包','地图'],
    steps: [
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Ký túc xá · Buổi tối', bg: 'dorm-room',
        cast: ['mai'],
        text: '晚上，Mai 正在房间里收东西。', pinyin: 'Wǎnshang, Mai zhèngzài fángjiān lǐ shōu dōngxi.', meaning: 'Buổi tối, Mai đang dọn đồ trong phòng.', expression: null, vocab: ['正在','东西'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '我的床上有一些书，桌子上有一个杯子。', pinyin: 'Wǒ de chuáng shang yǒuyìxiē shū, zhuōzi shang yǒu yí ge bēizi.', meaning: 'Trên giường tớ có một ít sách, trên bàn có một cái cốc.', expression: null, vocab: ['床','有一些','杯子'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '这个包里有钱包、手机和电脑。', pinyin: 'Zhège bāo lǐ yǒu qiánbāo, shǒujī hé diànnǎo.', meaning: 'Trong túi này có ví, điện thoại và máy tính.', expression: null, vocab: ['包','钱包','电脑'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你在干什么呢？能开门吗？', pinyin: 'Nǐ zài gàn shénme ne? Néng kāi mén ma?', meaning: 'Cậu đang làm gì thế? Mở cửa được không?', expression: null, vocab: ['干什么','能','门','吗'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '能！我就来开门。', pinyin: 'Néng! Wǒ jiù lái kāi mén.', meaning: 'Được! Tớ ra mở cửa ngay.', expression: null, vocab: ['能','就','门'] },
      { type: 'checkpoint', questions: [
        { q: 'Buổi tối Mai đang làm gì?', options: ['收东西', '睡觉', '看电影', '上课'], answer: 0 },
        { q: '"钱包" nghĩa là gì?', options: ['ví tiền', 'cái cốc', 'bản đồ', 'cái giường'], answer: 0 },
        { q: 'Trong túi của Mai có gì?', options: ['钱包、手机和电脑', '面包', '水果', '衣服'], answer: 0 }
      ] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我要喝水，给我一杯吧。', pinyin: 'Wǒ yào hē shuǐ, gěi wǒ yì bēi ba.', meaning: 'Tớ muốn uống nước, cho tớ một cốc nhé.', expression: null, vocab: ['杯'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好。你看这张地图，在书的第一页。', pinyin: 'Hǎo. Nǐ kàn zhè zhāng dìtú, zài shū de dì yī yè.', meaning: 'Được. Cậu xem tấm bản đồ này, ở trang đầu của sách.', expression: null, vocab: ['地图','页'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '这个电脑多少钱？两千元吗？', pinyin: 'Zhège diànnǎo duōshao qián? Liǎng qiān yuán ma?', meaning: 'Máy tính này bao nhiêu tiền? Hai nghìn đồng à?', expression: null, vocab: ['钱','元','吗'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '不用打电话问了，网上写着三千元。电不多了，手机快没电了。', pinyin: 'Búyòng dǎ diànhuà wèn le, wǎngshàng xiě zhe sān qiān yuán. Diàn bù duō le, shǒujī kuài méi diàn le.', meaning: 'Không cần gọi điện hỏi đâu, trên mạng ghi ba nghìn đồng. Hết điện rồi, điện thoại sắp hết pin.', expression: null, vocab: ['电话','元','电'] }
    ],
    vocab: [
      { h: '包', p: 'bāo', v: 'túi/gói' }, { h: '杯', p: 'bēi', v: 'cốc (lượng từ)' }, { h: '杯子', p: 'bēizi', v: 'cái cốc' },
      { h: '床', p: 'chuáng', v: 'giường' }, { h: '地图', p: 'dìtú', v: 'bản đồ' }, { h: '电', p: 'diàn', v: 'điện' },
      { h: '电话', p: 'diànhuà', v: 'điện thoại' }, { h: '电脑', p: 'diànnǎo', v: 'máy tính' }, { h: '东西', p: 'dōngxi', v: 'đồ vật' },
      { h: '干什么', p: 'gàn shénme', v: 'làm gì' }, { h: '就', p: 'jiù', v: 'liền/chính' }, { h: '吗', p: 'ma', v: '(trợ từ hỏi)' },
      { h: '门', p: 'mén', v: 'cửa' }, { h: '能', p: 'néng', v: 'có thể' }, { h: '钱', p: 'qián', v: 'tiền' },
      { h: '钱包', p: 'qiánbāo', v: 'ví tiền' }, { h: '页', p: 'yè', v: 'trang' }, { h: '有一些', p: 'yǒuyìxiē', v: 'có một ít' },
      { h: '元', p: 'yuán', v: 'đồng (tiền)' }, { h: '正在', p: 'zhèngzài', v: 'đang' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: 'Mai ___房间里收东西。', options: ['正在','就','能'], answer: '正在' },
        { type: 'fill', sentence: '桌子上有一个___。', options: ['杯子','地图','门'], answer: '杯子' },
        { type: 'fill', sentence: '这个包里有___。', options: ['钱包','床','元'], answer: '钱包' },
        { type: 'fill', sentence: '你在___呢？', options: ['干什么','正在','有一些'], answer: '干什么' },
        { type: 'fill', sentence: '我___来开门。', options: ['就','吗','页'], answer: '就' }
      ],
      normal: [
        { type: 'fill', sentence: 'Mai 正在房间里收___。', options: ['东西','地图','钱'], answer: '东西' },
        { type: 'fill', sentence: '我的___上有一些书。', options: ['床','门','电'], answer: '床' },
        { type: 'fill', sentence: '能开___吗？', options: ['门','钱','杯'], answer: '门' },
        { type: 'fill', sentence: '这个电脑多少___？', options: ['钱','门','页'], answer: '钱' },
        { type: 'fill', sentence: '两千___吗？', options: ['元','包','床'], answer: '元' },
        { type: 'order', words: ['一杯','给我','吧'], answer: '给我一杯吧' },
        { type: 'order', words: ['干什么','你','呢','在'], answer: '你在干什么呢' }
      ],
      hard: [
        { type: 'fill', sentence: '这张地图在书的第一___。', options: ['页','元','门'], answer: '页' },
        { type: 'fill', sentence: '床上___书。', options: ['有一些','正在','干什么'], answer: '有一些' },
        { type: 'fill', sentence: '不用打___问了。', options: ['电话','地图','钱包'], answer: '电话' },
        { type: 'fill', sentence: '___不多了，手机快没电了。', options: ['电','门','包'], answer: '电' },
        { type: 'fill', sentence: '能开门___？', options: ['吗','就','元'], answer: '吗' },
        { type: 'translate', prompt: 'Cậu đang làm gì thế?', answer: '你在干什么呢？' },
        { type: 'translate', prompt: 'Máy tính này bao nhiêu tiền?', answer: '这个电脑多少钱？' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 26: Đọc thêm — Chuyện trường lớp — ĐỌC THÊM · trường lớp (17 từ)
  // ───────────────────────────────────────────────────────────────────────
  26: {
    id: 26,
    title: 'Đọc thêm: Chuyện trường lớp',
    context: 'Một ngày học bình thường ở lớp thầy Lý: chính tả, đọc bài khóa, rồi chuyện thi cử và nghỉ lễ. Bài đọc ôn các từ về trường học và việc học.',
    vocabPreview: ['上课','课本','学习','请假','放假'],
    steps: [
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Lớp học', bg: 'classroom',
        cast: ['laoli', 'mai', 'xiaomei'],
        text: '今天上课，李老师给大家听写汉字。', pinyin: 'Jīntiān shàngkè, Lǐ lǎoshī gěi dàjiā tīngxiě Hànzì.', meaning: 'Hôm nay vào học, thầy Lý cho mọi người viết chính tả chữ Hán.', expression: null, vocab: ['上课','听写'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['laoli', 'mai', 'xiaomei'],
        text: '同学们，打开课本，读第八课的课文。', pinyin: 'Tóngxuémen, dǎkāi kèběn, dú dì bā kè de kèwén.', meaning: 'Các em, mở sách giáo khoa, đọc bài khóa của bài tám.', expression: null, vocab: ['课本','课','课文'] },
      { type: 'dialogue', speaker: 'mai', cast: ['laoli', 'mai', 'xiaomei'],
        text: '老师，这一课的课文有点难。', pinyin: 'Lǎoshī, zhè yí kè de kèwén yǒudiǎn nán.', meaning: 'Thầy ơi, bài khóa của bài này hơi khó.', expression: 'confused', vocab: ['课','课文'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['laoli', 'mai', 'xiaomei'],
        text: '认真学习就不难。男生女生都要读。', pinyin: 'Rènzhēn xuéxí jiù bù nán. Nánshēng nǚshēng dōu yào dú.', meaning: 'Học tập nghiêm túc thì không khó. Nam sinh nữ sinh đều phải đọc.', expression: null, vocab: ['学习','男生','女生'] },
      { type: 'checkpoint', questions: [
        { q: 'Hôm nay thầy Lý cho làm gì?', options: ['听写汉字', '考试', '放假', '看电影'], answer: 0 },
        { q: '"课本" nghĩa là gì?', options: ['sách giáo khoa', 'bài khóa', 'tan học', 'nghỉ lễ'], answer: 0 },
        { q: 'Ai phải đọc bài khóa?', options: ['男生女生都要', 'chỉ nam sinh', 'chỉ nữ sinh', 'thầy giáo'], answer: 0 }
      ] },
      { type: 'dialogue', speaker: 'narrator', cast: ['mai', 'xiaomei'],
        text: '下课后，小美说她明天要请假。', pinyin: 'Xiàkè hòu, Xiǎoměi shuō tā míngtiān yào qǐngjià.', meaning: 'Sau giờ học, Tiểu Mỹ nói ngày mai bạn ấy phải xin nghỉ.', expression: null, vocab: ['下课','请假'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我弟弟是小学生，妹妹是中学生。', pinyin: 'Wǒ dìdi shì xiǎoxuéshēng, mèimei shì zhōngxuéshēng.', meaning: 'Em trai tớ là học sinh tiểu học, em gái là học sinh trung học.', expression: null, vocab: ['小学生','中学生'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '他们在小学和中学学习，你在学院吗？', pinyin: 'Tāmen zài xiǎoxué hé zhōngxué xuéxí, nǐ zài xuéyuàn ma?', meaning: 'Chúng học ở tiểu học và trung học, còn cậu học ở học viện à?', expression: null, vocab: ['小学','中学','学院','学习'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '对！快考试了，考完就放假。我们一起准备考试吧。', pinyin: 'Duì! Kuài kǎoshì le, kǎo wán jiù fàngjià. Wǒmen yìqǐ zhǔnbèi kǎoshì ba.', meaning: 'Đúng! Sắp thi rồi, thi xong là nghỉ. Mình cùng ôn thi nhé.', expression: 'happy', vocab: ['考','放假'] }
    ],
    vocab: [
      { h: '放假', p: 'fàngjià', v: 'nghỉ (lễ/hè)' }, { h: '考', p: 'kǎo', v: 'thi' }, { h: '课', p: 'kè', v: 'tiết học/bài' },
      { h: '课本', p: 'kèběn', v: 'sách giáo khoa' }, { h: '课文', p: 'kèwén', v: 'bài khóa' }, { h: '男生', p: 'nánshēng', v: 'nam sinh' },
      { h: '女生', p: 'nǚshēng', v: 'nữ sinh' }, { h: '请假', p: 'qǐngjià', v: 'xin nghỉ' }, { h: '上课', p: 'shàngkè', v: 'vào học' },
      { h: '听写', p: 'tīngxiě', v: 'chính tả' }, { h: '下课', p: 'xiàkè', v: 'tan học' }, { h: '小学', p: 'xiǎoxué', v: 'tiểu học' },
      { h: '小学生', p: 'xiǎoxuéshēng', v: 'học sinh tiểu học' }, { h: '学习', p: 'xuéxí', v: 'học tập' }, { h: '学院', p: 'xuéyuàn', v: 'học viện' },
      { h: '中学', p: 'zhōngxué', v: 'trung học' }, { h: '中学生', p: 'zhōngxuéshēng', v: 'học sinh trung học' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '今天___，老师给大家听写。', options: ['上课','放假','请假'], answer: '上课' },
        { type: 'fill', sentence: '打开___，读课文。', options: ['课本','男生','学院'], answer: '课本' },
        { type: 'fill', sentence: '这一课的___有点难。', options: ['课文','听写','中学'], answer: '课文' },
        { type: 'fill', sentence: '男生___都要读。', options: ['女生','课本','放假'], answer: '女生' },
        { type: 'fill', sentence: '快___了，考完就放假。', options: ['考','课','学院'], answer: '考' }
      ],
      normal: [
        { type: 'fill', sentence: '老师给大家___汉字。', options: ['听写','请假','放假'], answer: '听写' },
        { type: 'fill', sentence: '小美明天要___。', options: ['请假','上课','学习'], answer: '请假' },
        { type: 'fill', sentence: '我弟弟是___。', options: ['小学生','中学','学院'], answer: '小学生' },
        { type: 'fill', sentence: '认真___就不难。', options: ['学习','听写','放假'], answer: '学习' },
        { type: 'fill', sentence: '考完就___。', options: ['放假','上课','请假'], answer: '放假' },
        { type: 'order', words: ['课文','读','课本','打开'], answer: '打开课本读课文' },
        { type: 'order', words: ['请假','要','明天','她'], answer: '她明天要请假' }
      ],
      hard: [
        { type: 'fill', sentence: '___后，小美说要请假。', options: ['下课','上课','考'], answer: '下课' },
        { type: 'fill', sentence: '妹妹是___。', options: ['中学生','小学','学院'], answer: '中学生' },
        { type: 'fill', sentence: '你在___吗？', options: ['学院','课文','听写'], answer: '学院' },
        { type: 'fill', sentence: '他们在小学和___学习。', options: ['中学','男生','放假'], answer: '中学' },
        { type: 'translate', prompt: 'Bài khóa của bài này hơi khó.', answer: '这一课的课文有点难。' },
        { type: 'translate', prompt: 'Mình cùng ôn thi nhé.', answer: '我们一起准备考试吧。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 27: Đọc thêm — Giao tiếp xã hội — ĐỌC THÊM · xã giao (17 từ)
  // ───────────────────────────────────────────────────────────────────────
  27: {
    id: 27,
    title: 'Đọc thêm: Giao tiếp xã hội',
    context: 'Tiểu Mỹ giới thiệu cho Mai nhiều người bạn mới ở khuôn viên trường. Bài đọc ôn cách gọi người: bạn bè, đàn ông phụ nữ, người già trẻ nhỏ và các kiểu xưng hô.',
    vocabPreview: ['介绍','朋友','先生','见面','开玩笑'],
    steps: [
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Khuôn viên trường', bg: 'campus',
        cast: ['mai', 'xiaomei'],
        text: '小美要给 Mai 介绍几个朋友。', pinyin: 'Xiǎoměi yào gěi Mai jièshào jǐ ge péngyou.', meaning: 'Tiểu Mỹ muốn giới thiệu cho Mai mấy người bạn.', expression: null, vocab: ['介绍','朋友'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '今天来了很多人，有男人、女人，还有老人和小孩儿。', pinyin: 'Jīntiān lái le hěn duō rén, yǒu nánrén, nǚrén, háiyǒu lǎorén hé xiǎoháir.', meaning: 'Hôm nay đến nhiều người, có đàn ông, phụ nữ, còn có người già và trẻ con.', expression: null, vocab: ['人','男人','女人','老人','小孩儿'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '那个男孩儿和女孩儿是谁？', pinyin: 'Nàge nánháir hé nǚháir shì shéi?', meaning: 'Bé trai và bé gái kia là ai?', expression: 'curious', vocab: ['男孩儿','女孩儿'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '他们是小朋友，那位是王先生，那位是李小姐。', pinyin: 'Tāmen shì xiǎopéngyou, nà wèi shì Wáng xiānsheng, nà wèi shì Lǐ xiǎojie.', meaning: 'Chúng là các bạn nhỏ, vị kia là ông Vương, vị kia là cô Lý.', expression: null, vocab: ['小朋友','先生','小姐'] },
      { type: 'checkpoint', questions: [
        { q: 'Tiểu Mỹ muốn làm gì cho Mai?', options: ['介绍朋友', '请假', '看病', '买东西'], answer: 0 },
        { q: '"老人" nghĩa là gì?', options: ['người già', 'trẻ con', 'bạn trai', 'đàn ông'], answer: 0 },
        { q: '"先生" dùng để gọi ai?', options: ['ông/quý ông', 'bé gái', 'người già', 'bạn nhỏ'], answer: 0 }
      ] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '我们第一次见面，很高兴。', pinyin: 'Wǒmen dì yī cì jiànmiàn, hěn gāoxìng.', meaning: 'Lần đầu gặp mặt, rất vui.', expression: 'happy', vocab: ['见面'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '你有男朋友吗？我有女朋友哦，开玩笑的！', pinyin: 'Nǐ yǒu nánpéngyou ma? Wǒ yǒu nǚpéngyou o, kāi wánxiào de!', meaning: 'Cậu có bạn trai chưa? Tớ có bạn gái đấy, đùa thôi!', expression: null, vocab: ['男朋友','女朋友','开玩笑'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '哈哈，你真爱开玩笑。我有个网友，也想见面。', pinyin: 'Hāhā, nǐ zhēn ài kāi wánxiào. Wǒ yǒu ge wǎngyǒu, yě xiǎng jiànmiàn.', meaning: 'Haha, cậu thích đùa thật. Tớ có một người bạn trên mạng, cũng muốn gặp mặt.', expression: 'happy', vocab: ['网友','开玩笑','见面'] },
      { type: 'dialogue', speaker: 'narrator', cast: ['mai', 'xiaomei'],
        text: 'Mai 认识了很多新朋友，大家都是好人。', pinyin: 'Mai rènshi le hěn duō xīn péngyou, dàjiā dōu shì hǎo rén.', meaning: 'Mai quen được nhiều bạn mới, mọi người đều là người tốt.', expression: null, vocab: ['朋友','人'] }
    ],
    vocab: [
      { h: '见面', p: 'jiànmiàn', v: 'gặp mặt' }, { h: '介绍', p: 'jièshào', v: 'giới thiệu' }, { h: '开玩笑', p: 'kāiwánxiào', v: 'đùa' },
      { h: '老人', p: 'lǎorén', v: 'người già' }, { h: '男孩儿', p: 'nánháir', v: 'bé trai' }, { h: '男朋友', p: 'nánpéngyou', v: 'bạn trai' },
      { h: '男人', p: 'nánrén', v: 'đàn ông' }, { h: '女孩儿', p: 'nǚháir', v: 'bé gái' }, { h: '女朋友', p: 'nǚpéngyou', v: 'bạn gái' },
      { h: '女人', p: 'nǚrén', v: 'phụ nữ' }, { h: '朋友', p: 'péngyou', v: 'bạn' }, { h: '人', p: 'rén', v: 'người' },
      { h: '网友', p: 'wǎngyǒu', v: 'bạn trên mạng' }, { h: '先生', p: 'xiānsheng', v: 'ngài/ông' }, { h: '小孩儿', p: 'xiǎoháir', v: 'trẻ con' },
      { h: '小姐', p: 'xiǎojie', v: 'cô' }, { h: '小朋友', p: 'xiǎopéngyou', v: 'bạn nhỏ' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: '小美要给 Mai ___朋友。', options: ['介绍','见面','开玩笑'], answer: '介绍' },
        { type: 'fill', sentence: '今天来了很多___。', options: ['人','网友','小姐'], answer: '人' },
        { type: 'fill', sentence: '那个___和女孩儿是谁？', options: ['男孩儿','老人','先生'], answer: '男孩儿' },
        { type: 'fill', sentence: '那位是王___。', options: ['先生','小孩儿','朋友'], answer: '先生' },
        { type: 'fill', sentence: '我们第一次___。', options: ['见面','介绍','开玩笑'], answer: '见面' }
      ],
      normal: [
        { type: 'fill', sentence: '有男人、女人，还有___和小孩儿。', options: ['老人','网友','男朋友'], answer: '老人' },
        { type: 'fill', sentence: '他们是___。', options: ['小朋友','女人','先生'], answer: '小朋友' },
        { type: 'fill', sentence: '你有___吗？', options: ['男朋友','老人','人'], answer: '男朋友' },
        { type: 'fill', sentence: '你真爱___。', options: ['开玩笑','见面','介绍'], answer: '开玩笑' },
        { type: 'fill', sentence: '我有个___，也想见面。', options: ['网友','小姐','男孩儿'], answer: '网友' },
        { type: 'order', words: ['介绍','朋友','给','Mai'], answer: '给Mai介绍朋友' },
        { type: 'order', words: ['见面','第一次','我们'], answer: '我们第一次见面' }
      ],
      hard: [
        { type: 'fill', sentence: '那位是李___。', options: ['小姐','老人','男孩儿'], answer: '小姐' },
        { type: 'fill', sentence: '有男人、___，还有老人。', options: ['女人','网友','先生'], answer: '女人' },
        { type: 'fill', sentence: '那个男孩儿和___是谁？', options: ['女孩儿','女人','小姐'], answer: '女孩儿' },
        { type: 'fill', sentence: '我有___哦，开玩笑的！', options: ['女朋友','老人','小孩儿'], answer: '女朋友' },
        { type: 'translate', prompt: 'Lần đầu gặp mặt, rất vui.', answer: '第一次见面，很高兴。' },
        { type: 'translate', prompt: 'Cậu thích đùa thật.', answer: '你真爱开玩笑。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 28: Đọc thêm — Đi lại, sức khỏe & thiên nhiên — ĐỌC THÊM (21 từ)
  // ───────────────────────────────────────────────────────────────────────
  28: {
    id: 28,
    title: 'Đọc thêm: Đi lại, sức khỏe & thiên nhiên',
    context: 'Nghỉ lễ, Mai bắt tàu về nhà. Trên đường cô gặp một bệnh nhân và về tới ngôi nhà có núi, có cây. Bài đọc ôn từ về phương tiện, sức khỏe và thiên nhiên.',
    vocabPreview: ['火车','车票','开车','飞机','汽车'],
    steps: [
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Ga tàu', bg: 'street',
        cast: ['mai', 'xiaomei'],
        text: '放假了，Mai 要坐火车回家。她先去火车站买车票。', pinyin: 'Fàngjià le, Mai yào zuò huǒchē huí jiā. Tā xiān qù huǒchēzhàn mǎi chēpiào.', meaning: 'Nghỉ lễ, Mai định đi tàu về nhà. Cô đến ga tàu mua vé trước.', expression: null, vocab: ['火车','火车站','车票'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '坐飞机太贵了，机票比火车票贵。', pinyin: 'Zuò fēijī tài guì le, jīpiào bǐ huǒchēpiào guì.', meaning: 'Đi máy bay đắt quá, vé máy bay đắt hơn vé tàu.', expression: null, vocab: ['飞机','机票'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '我开车送你吧，不用打车。', pinyin: 'Wǒ kāichē sòng nǐ ba, búyòng dǎchē.', meaning: 'Tớ lái xe đưa cậu nhé, không cần bắt xe.', expression: null, vocab: ['开车','打车'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '谢谢！上车前我买点东西。', pinyin: 'Xièxie! Shàng chē qián wǒ mǎi diǎn dōngxi.', meaning: 'Cảm ơn! Trước khi lên xe tớ mua chút đồ.', expression: 'happy', vocab: ['上车'] },
      { type: 'dialogue', speaker: 'narrator', cast: ['mai', 'xiaomei'],
        text: '汽车在路上走，Mai 坐在后边，看着车上的人。', pinyin: 'Qìchē zài lù shang zǒu, Mai zuò zài hòubian, kàn zhe chē shang de rén.', meaning: 'Ô tô chạy trên đường, Mai ngồi phía sau, nhìn người trên xe.', expression: null, vocab: ['汽车','后边','车上'] },
      { type: 'checkpoint', questions: [
        { q: 'Mai về nhà bằng gì?', options: ['火车', '飞机', '开车', '走路'], answer: 0 },
        { q: 'Vé nào đắt hơn?', options: ['机票', '车票', '都一样', '都不要钱'], answer: 0 },
        { q: '"打车" nghĩa là gì?', options: ['bắt xe', 'lái xe', 'xuống xe', 'lên xe'], answer: 0 }
      ] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '到站了，我要下车。', pinyin: 'Dào zhàn le, wǒ yào xiàchē.', meaning: 'Đến ga rồi, tớ phải xuống xe.', expression: null, vocab: ['下车'] },
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Trên đường về', bg: 'clinic',
        cast: ['mai'],
        text: '路上有个病人，手里拿着花。', pinyin: 'Lù shang yǒu ge bìngrén, shǒu lǐ ná zhe huā.', meaning: 'Trên đường có một bệnh nhân, trên tay cầm hoa.', expression: null, vocab: ['病人','手','花'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '他生病了，身上不太好。我们带他去医院吧。', pinyin: 'Tā shēngbìng le, shēnshang bú tài hǎo. Wǒmen dài tā qù yīyuàn ba.', meaning: 'Ông ấy bị bệnh, trong người không khỏe lắm. Mình đưa ông ấy đi viện nhé.', expression: null, vocab: ['病','身上'] },
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Về đến nhà', bg: 'home',
        cast: ['mai'],
        text: '回到家，门口有山有树，还有几毛钱掉在地上。', pinyin: 'Huídào jiā, ménkǒu yǒu shān yǒu shù, háiyǒu jǐ máo qián diào zài dìshang.', meaning: 'Về đến nhà, trước cửa có núi có cây, còn có mấy hào rơi trên đất.', expression: null, vocab: ['口','山','树','毛'] }
    ],
    vocab: [
      { h: '车票', p: 'chēpiào', v: 'vé xe' }, { h: '车上', p: 'chēshàng', v: 'trên xe' }, { h: '打车', p: 'dǎchē', v: 'bắt xe' },
      { h: '飞机', p: 'fēijī', v: 'máy bay' }, { h: '火车', p: 'huǒchē', v: 'tàu hỏa' }, { h: '火车站', p: 'huǒchēzhàn', v: 'ga tàu' },
      { h: '机票', p: 'jīpiào', v: 'vé máy bay' }, { h: '开车', p: 'kāichē', v: 'lái xe' }, { h: '汽车', p: 'qìchē', v: 'ô tô' },
      { h: '上车', p: 'shàngchē', v: 'lên xe' }, { h: '下车', p: 'xiàchē', v: 'xuống xe' }, { h: '病', p: 'bìng', v: 'bệnh' },
      { h: '病人', p: 'bìngrén', v: 'bệnh nhân' }, { h: '后边', p: 'hòubian', v: 'phía sau' }, { h: '口', p: 'kǒu', v: 'miệng/cửa' },
      { h: '毛', p: 'máo', v: 'hào (tiền)/lông' }, { h: '身上', p: 'shēnshang', v: 'trên người' }, { h: '手', p: 'shǒu', v: 'tay' },
      { h: '花', p: 'huā', v: 'hoa' }, { h: '山', p: 'shān', v: 'núi' }, { h: '树', p: 'shù', v: 'cây' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: 'Mai 要坐___回家。', options: ['火车','飞机','汽车'], answer: '火车' },
        { type: 'fill', sentence: '她先去___买车票。', options: ['火车站','机场','医院'], answer: '火车站' },
        { type: 'fill', sentence: '坐飞机太贵了，___比火车票贵。', options: ['机票','车票','打车'], answer: '机票' },
        { type: 'fill', sentence: '我___送你吧。', options: ['开车','下车','上车'], answer: '开车' },
        { type: 'fill', sentence: '到站了，我要___。', options: ['下车','上车','打车'], answer: '下车' }
      ],
      normal: [
        { type: 'fill', sentence: '她先去火车站买___。', options: ['车票','机票','花'], answer: '车票' },
        { type: 'fill', sentence: '不用___。', options: ['打车','开车','上车'], answer: '打车' },
        { type: 'fill', sentence: '___前我买点东西。', options: ['上车','下车','打车'], answer: '上车' },
        { type: 'fill', sentence: '路上有个___。', options: ['病人','汽车','火车'], answer: '病人' },
        { type: 'fill', sentence: '他___了，身上不太好。', options: ['生病','开车','上车'], answer: '生病' },
        { type: 'order', words: ['火车','坐','回家','要'], answer: '要坐火车回家' },
        { type: 'order', words: ['送你','开车','我'], answer: '我开车送你' }
      ],
      hard: [
        { type: 'fill', sentence: 'Mai 坐在___，看着车上的人。', options: ['后边','口','手'], answer: '后边' },
        { type: 'fill', sentence: '手里拿着___。', options: ['花','山','毛'], answer: '花' },
        { type: 'fill', sentence: '门口有___有树。', options: ['山','手','病'], answer: '山' },
        { type: 'fill', sentence: '几___钱掉在地上。', options: ['毛','口','花'], answer: '毛' },
        { type: 'fill', sentence: '他生病了，___不太好。', options: ['身上','车上','后边'], answer: '身上' },
        { type: 'translate', prompt: 'Đến ga rồi, tớ phải xuống xe.', answer: '到站了，我要下车。' },
        { type: 'translate', prompt: 'Tớ lái xe đưa cậu nhé.', answer: '我开车送你吧。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 29: Đọc thêm — Ngôn ngữ, học thuật & cảm xúc — ĐỌC THÊM (10 từ)
  // ───────────────────────────────────────────────────────────────────────
  29: {
    id: 29,
    title: 'Đọc thêm: Ngôn ngữ, học thuật & cảm xúc',
    context: 'Mai học tiếng Trung như một ngoại ngữ. Một giờ học vui với chút hiểu lầm nho nhỏ giúp ôn các từ về ngôn ngữ, kiến thức và cảm xúc.',
    vocabPreview: ['中文','外语','说话','明白','知识'],
    steps: [
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Lớp học', bg: 'classroom',
        cast: ['laoli', 'mai', 'xiaomei'],
        text: 'Mai 在学中文，这是一门外语。', pinyin: 'Mai zài xué Zhōngwén, zhè shì yì mén wàiyǔ.', meaning: 'Mai đang học tiếng Trung, đây là một ngoại ngữ.', expression: null, vocab: ['中文','外语'] },
      { type: 'dialogue', speaker: 'mai', cast: ['laoli', 'mai'],
        text: '老师，这个字我不明白，您说话能慢一点吗？', pinyin: 'Lǎoshī, zhège zì wǒ bù míngbai, nín shuōhuà néng màn yìdiǎn ma?', meaning: 'Thầy ơi, chữ này em không hiểu, thầy nói chậm một chút được không?', expression: 'confused', vocab: ['字','明白','说话','话'] },
      { type: 'dialogue', speaker: 'laoli', cast: ['laoli', 'mai'],
        text: '没问题。学语言要多说话，知识才记得住。', pinyin: 'Méi wèntí. Xué yǔyán yào duō shuōhuà, zhīshi cái jì de zhù.', meaning: 'Không vấn đề. Học ngôn ngữ phải nói nhiều, kiến thức mới nhớ được.', expression: null, vocab: ['说话','知识'] },
      { type: 'dialogue', speaker: 'mai', cast: ['laoli', 'mai'],
        text: '我明白了！谢谢老师。', pinyin: 'Wǒ míngbai le! Xièxie lǎoshī.', meaning: 'Em hiểu rồi! Cảm ơn thầy.', expression: 'happy', vocab: ['明白'] },
      { type: 'checkpoint', questions: [
        { q: 'Mai đang học gì?', options: ['中文', '英文', '日文', '法文'], answer: 0 },
        { q: '"明白" nghĩa là gì?', options: ['hiểu', 'tức giận', 'cười', 'nói'], answer: 0 },
        { q: 'Thầy nói học ngôn ngữ phải làm gì?', options: ['多说话', '少说话', '不说话', '睡觉'], answer: 0 }
      ] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: 'Mai，你笑什么呢？', pinyin: 'Mai, nǐ xiào shénme ne?', meaning: 'Mai, cậu cười gì thế?', expression: null, vocab: ['笑','呢'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '小美说错了一个字，可是别生气，这很好玩儿。', pinyin: 'Xiǎoměi shuō cuò le yí ge zì, kěshì bié shēngqì, zhè hěn hǎowánr.', meaning: 'Tiểu Mỹ nói sai một chữ, nhưng đừng giận, vui lắm.', expression: null, vocab: ['字','生气'] },
      { type: 'dialogue', speaker: 'narrator', cast: ['mai', 'xiaomei'],
        text: 'Mai 笑着说话，大家学到了很多知识。', pinyin: 'Mai xiào zhe shuōhuà, dàjiā xué dào le hěn duō zhīshi.', meaning: 'Mai vừa cười vừa nói chuyện, mọi người học được nhiều kiến thức.', expression: null, vocab: ['笑','说话','知识'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '学外语真好玩儿，你呢？', pinyin: 'Xué wàiyǔ zhēn hǎowánr, nǐ ne?', meaning: 'Học ngoại ngữ thật thú vị, còn cậu?', expression: null, vocab: ['外语','呢'] }
    ],
    vocab: [
      { h: '话', p: 'huà', v: 'lời nói' }, { h: '呢', p: 'ne', v: '(trợ từ nghi vấn)' }, { h: '说话', p: 'shuōhuà', v: 'nói chuyện' },
      { h: '外语', p: 'wàiyǔ', v: 'ngoại ngữ' }, { h: '中文', p: 'Zhōngwén', v: 'tiếng Trung' }, { h: '字', p: 'zì', v: 'chữ' },
      { h: '知识', p: 'zhīshi', v: 'kiến thức' }, { h: '明白', p: 'míngbai', v: 'hiểu' }, { h: '生气', p: 'shēngqì', v: 'tức giận' },
      { h: '笑', p: 'xiào', v: 'cười' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: 'Mai 在学___。', options: ['中文','外语','知识'], answer: '中文' },
        { type: 'fill', sentence: '这是一门___。', options: ['外语','中文','字'], answer: '外语' },
        { type: 'fill', sentence: '这个字我不___。', options: ['明白','生气','笑'], answer: '明白' },
        { type: 'fill', sentence: '你___什么呢？', options: ['笑','说','明白'], answer: '笑' },
        { type: 'fill', sentence: '学语言要多___。', options: ['说话','生气','明白'], answer: '说话' }
      ],
      normal: [
        { type: 'fill', sentence: '您___能慢一点吗？', options: ['说话','生气','笑'], answer: '说话' },
        { type: 'fill', sentence: '___才记得住。', options: ['知识','外语','字'], answer: '知识' },
        { type: 'fill', sentence: '别___，这很好玩儿。', options: ['生气','明白','说话'], answer: '生气' },
        { type: 'fill', sentence: '你笑什么___？', options: ['呢','话','字'], answer: '呢' },
        { type: 'fill', sentence: '小美说错了一个___。', options: ['字','话','呢'], answer: '字' },
        { type: 'order', words: ['中文','在','学','Mai'], answer: 'Mai在学中文' },
        { type: 'order', words: ['明白','我','了'], answer: '我明白了' }
      ],
      hard: [
        { type: 'fill', sentence: 'Mai ___着说话。', options: ['笑','明白','生气'], answer: '笑' },
        { type: 'fill', sentence: '您说___能慢一点吗？', options: ['话','字','呢'], answer: '话' },
        { type: 'translate', prompt: 'Em hiểu rồi!', answer: '我明白了！' },
        { type: 'translate', prompt: 'Học ngoại ngữ thật thú vị.', answer: '学外语真好玩儿。' }
      ]
    }
  },

  // ───────────────────────────────────────────────────────────────────────
  // BÀI 30: Đọc thêm — Công việc, giải trí, nghệ thuật & màu sắc — ĐỌC THÊM (13 từ)
  // ───────────────────────────────────────────────────────────────────────
  30: {
    id: 30,
    title: 'Đọc thêm: Công việc, giải trí, nghệ thuật & màu sắc',
    context: 'Mai kể về công việc của bố mẹ rồi một buổi tối mưa gió ở nhà xem tivi. Bài đọc cuối của HSK 1 ôn từ về nghề nghiệp, giải trí và thiên nhiên.',
    vocabPreview: ['工人','工作','上班','电视','下雨'],
    steps: [
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Nhà của Mai', bg: 'home',
        cast: ['mai', 'xiaomei'],
        text: 'Mai 的爸爸是工人，每天上班，很晚才下班。', pinyin: 'Mai de bàba shì gōngrén, měi tiān shàngbān, hěn wǎn cái xiàbān.', meaning: 'Bố Mai là công nhân, ngày nào cũng đi làm, rất muộn mới tan làm.', expression: null, vocab: ['工人','上班','下班'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '妈妈的工作也很忙，常常开会。', pinyin: 'Māma de gōngzuò yě hěn máng, chángcháng kāihuì.', meaning: 'Công việc của mẹ cũng rất bận, thường xuyên họp.', expression: null, vocab: ['工作','开会'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '今天下班后，我们看电视上的唱歌吧。', pinyin: 'Jīntiān xiàbān hòu, wǒmen kàn diànshì shang de chànggē ba.', meaning: 'Hôm nay tan làm, mình xem hát trên tivi nhé.', expression: null, vocab: ['下班','电视','唱'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '好！我家的电视机很大。', pinyin: 'Hǎo! Wǒ jiā de diànshìjī hěn dà.', meaning: 'Được! Tivi nhà tớ rất to.', expression: 'happy', vocab: ['电视机'] },
      { type: 'checkpoint', questions: [
        { q: 'Bố của Mai làm nghề gì?', options: ['工人', '医生', '老师', '学生'], answer: 0 },
        { q: '"开会" nghĩa là gì?', options: ['họp', 'tan làm', 'chạy', 'hát'], answer: 0 },
        { q: 'Hai bạn định xem gì trên tivi?', options: ['唱歌', '电影', '比赛', '新闻'], answer: 0 }
      ] },
      { type: 'dialogue', speaker: 'narrator',
        scene: '📍 Ngoài trời mưa', bg: 'street',
        cast: ['mai'],
        text: '外边下雨了，风也很大。', pinyin: 'Wàibian xià yǔ le, fēng yě hěn dà.', meaning: 'Bên ngoài mưa rồi, gió cũng to.', expression: null, vocab: ['雨','风'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai'],
        text: '我穿白衣服出去，在雨里跑回家。', pinyin: 'Wǒ chuān bái yīfu chūqù, zài yǔ lǐ pǎo huí jiā.', meaning: 'Tớ mặc áo trắng ra ngoài, chạy về nhà trong mưa.', expression: null, vocab: ['白','跑','雨'] },
      { type: 'dialogue', speaker: 'xiaomei', cast: ['mai', 'xiaomei'],
        text: '快进来！别在风里跑。看电影要门票，看电视不要。', pinyin: 'Kuài jìnlái! Bié zài fēng lǐ pǎo. Kàn diànyǐng yào ménpiào, kàn diànshì búyào.', meaning: 'Mau vào đi! Đừng chạy trong gió. Xem phim cần vé, xem tivi thì không.', expression: null, vocab: ['风','跑','电视','门票'] },
      { type: 'dialogue', speaker: 'mai', cast: ['mai', 'xiaomei'],
        text: '哈哈，我爱在家看电视，不用买门票！', pinyin: 'Hāhā, wǒ ài zài jiā kàn diànshì, búyòng mǎi ménpiào!', meaning: 'Haha, tớ thích ở nhà xem tivi, không cần mua vé!', expression: 'happy', vocab: ['电视','门票'] }
    ],
    vocab: [
      { h: '工人', p: 'gōngrén', v: 'công nhân' }, { h: '工作', p: 'gōngzuò', v: 'công việc/làm việc' }, { h: '开会', p: 'kāihuì', v: 'họp' },
      { h: '上班', p: 'shàngbān', v: 'đi làm' }, { h: '下班', p: 'xiàbān', v: 'tan làm' }, { h: '唱', p: 'chàng', v: 'hát' },
      { h: '门票', p: 'ménpiào', v: 'vé vào cửa' }, { h: '电视', p: 'diànshì', v: 'tivi' }, { h: '电视机', p: 'diànshìjī', v: 'máy tivi' },
      { h: '跑', p: 'pǎo', v: 'chạy' }, { h: '风', p: 'fēng', v: 'gió' }, { h: '雨', p: 'yǔ', v: 'mưa' },
      { h: '白', p: 'bái', v: 'trắng' }
    ],
    workbook: {
      easy: [
        { type: 'fill', sentence: 'Mai 的爸爸是___。', options: ['工人','医生','老师'], answer: '工人' },
        { type: 'fill', sentence: '他每天___。', options: ['上班','开会','下班'], answer: '上班' },
        { type: 'fill', sentence: '妈妈常常___。', options: ['开会','上班','唱'], answer: '开会' },
        { type: 'fill', sentence: '我家的___很大。', options: ['电视机','门票','工作'], answer: '电视机' },
        { type: 'fill', sentence: '外边___了。', options: ['下雨','上班','开会'], answer: '下雨' }
      ],
      normal: [
        { type: 'fill', sentence: '很晚才___。', options: ['下班','上班','开会'], answer: '下班' },
        { type: 'fill', sentence: '妈妈的___也很忙。', options: ['工作','工人','门票'], answer: '工作' },
        { type: 'fill', sentence: '我们看电视上的___吧。', options: ['唱歌','开会','上班'], answer: '唱歌' },
        { type: 'fill', sentence: '___也很大。', options: ['风','雨','白'], answer: '风' },
        { type: 'fill', sentence: '看电影要___。', options: ['门票','电视','工人'], answer: '门票' },
        { type: 'order', words: ['工人','是','爸爸','的','Mai'], answer: 'Mai的爸爸是工人' },
        { type: 'order', words: ['开会','常常','妈妈'], answer: '妈妈常常开会' }
      ],
      hard: [
        { type: 'fill', sentence: '我穿___衣服出去。', options: ['白','风','雨'], answer: '白' },
        { type: 'fill', sentence: '在雨里___回家。', options: ['跑','唱','上班'], answer: '跑' },
        { type: 'fill', sentence: '别在风里___。', options: ['跑','唱','开会'], answer: '跑' },
        { type: 'fill', sentence: '看电视不要___。', options: ['门票','工作','电视机'], answer: '门票' },
        { type: 'translate', prompt: 'Bố Mai là công nhân.', answer: 'Mai的爸爸是工人。' },
        { type: 'translate', prompt: 'Tớ thích ở nhà xem tivi.', answer: '我爱在家看电视。' }
      ]
    }
  }
};
