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
      {
        type: 'dialogue',
        speaker: 'laoli',
        text: '你好！',
        pinyin: 'Nǐ hǎo!',
        meaning: 'Chào em!',
        expression: 'happy',
        vocab: ['你好']
      },
      {
        type: 'dialogue',
        speaker: 'mai',
        text: '老师好！',
        pinyin: 'Lǎoshī hǎo!',
        meaning: 'Em chào thầy ạ!',
        expression: 'curious',
        vocab: ['老师']
      },
      {
        type: 'dialogue',
        speaker: 'laoli',
        text: '你叫什么名字？',
        pinyin: 'Nǐ jiào shénme míngzi?',
        meaning: 'Em tên là gì?',
        expression: null,
        vocab: ['叫','什么','名字']
      },
      {
        type: 'dialogue',
        speaker: 'mai',
        text: '我叫 Mai。',
        pinyin: 'Wǒ jiào Mai.',
        meaning: 'Em tên Mai ạ.',
        expression: 'curious',
        vocab: ['我']
      },
      {
        type: 'dialogue',
        speaker: 'laoli',
        text: '你是学生吗？',
        pinyin: 'Nǐ shì xuésheng ma?',
        meaning: 'Em là sinh viên phải không?',
        expression: null,
        vocab: ['是','学生']
      },
      {
        type: 'dialogue',
        speaker: 'mai',
        text: '是，我是学生。',
        pinyin: 'Shì, wǒ shì xuésheng.',
        meaning: 'Vâng, em là sinh viên.',
        expression: 'happy',
        vocab: []
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
      {
        type: 'dialogue',
        speaker: 'xiaomei',
        text: '你好！我也是学生，我叫小美。',
        pinyin: 'Nǐ hǎo! Wǒ yě shì xuésheng, wǒ jiào Xiǎoměi.',
        meaning: 'Chào cậu! Tớ cũng là sinh viên, tớ tên Tiểu Mỹ.',
        expression: 'happy',
        vocab: ['也','同学']
      },
      {
        type: 'dialogue',
        speaker: 'mai',
        text: '你好，小美！',
        pinyin: 'Nǐ hǎo, Xiǎoměi!',
        meaning: 'Chào Tiểu Mỹ!',
        expression: 'happy',
        vocab: []
      },
      {
        type: 'dialogue',
        speaker: 'mai',
        text: '请问，他是谁？',
        pinyin: 'Qǐng wèn, tā shì shéi?',
        meaning: 'Xin hỏi, thầy ấy là ai?',
        expression: 'curious',
        vocab: ['请问','谁','他']
      },
      {
        type: 'dialogue',
        speaker: 'xiaomei',
        text: '他是老师，他是中国人。',
        pinyin: 'Tā shì lǎoshī, tā shì Zhōngguó rén.',
        meaning: 'Thầy ấy là giáo viên, thầy là người Trung Quốc.',
        expression: null,
        vocab: ['中国人','中国']
      },
      {
        type: 'dialogue',
        speaker: 'mai',
        text: '老师是中国人吗？',
        pinyin: 'Lǎoshī shì Zhōngguó rén ma?',
        meaning: 'Thầy là người Trung Quốc ạ?',
        expression: 'surprise',
        vocab: []
      },
      {
        type: 'dialogue',
        speaker: 'laoli',
        text: '是的。你是越南人吗？',
        pinyin: 'Shì de. Nǐ shì Yuènán rén ma?',
        meaning: 'Đúng vậy. Em là người Việt Nam à?',
        expression: null,
        vocab: ['越南人']
      },
      {
        type: 'dialogue',
        speaker: 'mai',
        text: '是，我是越南人。我很高兴！',
        pinyin: 'Shì, wǒ shì Yuènán rén. Wǒ hěn gāoxìng!',
        meaning: 'Vâng, em là người Việt. Em rất vui ạ!',
        expression: 'happy',
        vocab: ['很','高兴']
      },
      {
        type: 'dialogue',
        speaker: 'laoli',
        text: '很好！我们上课吧。',
        pinyin: 'Hěn hǎo! Wǒmen shàngkè ba.',
        meaning: 'Tốt lắm! Chúng ta vào học nào.',
        expression: 'happy',
        vocab: ['我们']
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
  }
};
