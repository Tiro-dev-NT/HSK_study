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
  }
};
