// ═══════════════════════════════════════════════════════
// GRAMMAR DATA — HSK 1-2 Grammar Patterns (~30 patterns)
// ═══════════════════════════════════════════════════════

var GRAMMAR_DATA = {
  1: [
    {
      id: 'g1_01', name_vi: 'Câu khẳng định với 是', name_en: 'Affirmative with 是',
      pattern: 'A + 是 + B',
      explanation_vi: 'Dùng 是 (shì) để nối chủ ngữ với danh từ, biểu thị "là".',
      explanation_en: 'Use 是 to link subject with noun predicate, meaning "to be".',
      examples: [
        { zh: '我是学生。', py: 'Wǒ shì xuésheng.', vi: 'Tôi là học sinh.', en: 'I am a student.' },
        { zh: '她是老师。', py: 'Tā shì lǎoshī.', vi: 'Cô ấy là giáo viên.', en: 'She is a teacher.' }
      ]
    },
    {
      id: 'g1_02', name_vi: 'Phủ định với 不', name_en: 'Negation with 不',
      pattern: '不 + Verb/Adj',
      explanation_vi: '不 (bù) đặt trước động từ hoặc tính từ để phủ định.',
      explanation_en: 'Place 不 before verb/adjective to negate.',
      examples: [
        { zh: '我不喝茶。', py: 'Wǒ bù hē chá.', vi: 'Tôi không uống trà.', en: 'I don\'t drink tea.' },
        { zh: '他不高兴。', py: 'Tā bù gāoxìng.', vi: 'Anh ấy không vui.', en: 'He is not happy.' }
      ]
    },
    {
      id: 'g1_03', name_vi: 'Câu hỏi với 吗', name_en: 'Question with 吗',
      pattern: 'Statement + 吗？',
      explanation_vi: 'Thêm 吗 (ma) cuối câu trần thuật để biến thành câu hỏi Yes/No.',
      explanation_en: 'Add 吗 at end of statement to form yes/no question.',
      examples: [
        { zh: '你是中国人吗？', py: 'Nǐ shì Zhōngguó rén ma?', vi: 'Bạn là người Trung Quốc à?', en: 'Are you Chinese?' },
        { zh: '你喜欢吃米饭吗？', py: 'Nǐ xǐhuan chī mǐfàn ma?', vi: 'Bạn thích ăn cơm không?', en: 'Do you like eating rice?' }
      ]
    },
    {
      id: 'g1_04', name_vi: 'Đại từ nghi vấn 什么', name_en: 'Question word 什么',
      pattern: '... 什么 ...？',
      explanation_vi: '什么 (shénme) = "cái gì", đặt tại vị trí cần hỏi.',
      explanation_en: '什么 means "what", placed where the answer would go.',
      examples: [
        { zh: '你叫什么名字？', py: 'Nǐ jiào shénme míngzi?', vi: 'Bạn tên gì?', en: 'What is your name?' },
        { zh: '这是什么？', py: 'Zhè shì shénme?', vi: 'Đây là cái gì?', en: 'What is this?' }
      ]
    },
    {
      id: 'g1_05', name_vi: 'Trợ từ 的 (sở hữu)', name_en: 'Possessive 的',
      pattern: 'Noun/Pronoun + 的 + Noun',
      explanation_vi: '的 (de) biểu thị sở hữu, tương đương "của" trong tiếng Việt.',
      explanation_en: '的 indicates possession, like "\'s" in English.',
      examples: [
        { zh: '我的书。', py: 'Wǒ de shū.', vi: 'Sách của tôi.', en: 'My book.' },
        { zh: '妈妈的手机。', py: 'Māma de shǒujī.', vi: 'Điện thoại của mẹ.', en: 'Mom\'s phone.' }
      ]
    },
    {
      id: 'g1_06', name_vi: 'Số đếm + Lượng từ', name_en: 'Number + Measure word',
      pattern: 'Number + 个/本/... + Noun',
      explanation_vi: 'Tiếng Trung bắt buộc dùng lượng từ giữa số và danh từ. 个 là lượng từ chung.',
      explanation_en: 'Chinese requires measure words between numbers and nouns. 个 is the general MW.',
      examples: [
        { zh: '三个人。', py: 'Sān gè rén.', vi: 'Ba người.', en: 'Three people.' },
        { zh: '两本书。', py: 'Liǎng běn shū.', vi: 'Hai quyển sách.', en: 'Two books.' }
      ]
    },
    {
      id: 'g1_07', name_vi: 'Muốn/Sẽ với 想', name_en: 'Want to with 想',
      pattern: 'Subject + 想 + Verb',
      explanation_vi: '想 (xiǎng) = "muốn", đặt trước động từ.',
      explanation_en: '想 means "want to", placed before verb.',
      examples: [
        { zh: '我想喝水。', py: 'Wǒ xiǎng hē shuǐ.', vi: 'Tôi muốn uống nước.', en: 'I want to drink water.' },
        { zh: '你想去哪儿？', py: 'Nǐ xiǎng qù nǎr?', vi: 'Bạn muốn đi đâu?', en: 'Where do you want to go?' }
      ]
    },
    {
      id: 'g1_08', name_vi: 'Ở đâu với 在', name_en: 'Location with 在',
      pattern: 'Subject + 在 + Place',
      explanation_vi: '在 (zài) biểu thị vị trí "ở tại".',
      explanation_en: '在 indicates location, meaning "at/in".',
      examples: [
        { zh: '他在学校。', py: 'Tā zài xuéxiào.', vi: 'Anh ấy ở trường.', en: 'He is at school.' },
        { zh: '书在桌子上。', py: 'Shū zài zhuōzi shàng.', vi: 'Sách ở trên bàn.', en: 'The book is on the table.' }
      ]
    },
    {
      id: 'g1_09', name_vi: 'Đã/Rồi với 了', name_en: 'Completed action with 了',
      pattern: 'Verb + 了',
      explanation_vi: '了 (le) sau động từ biểu thị hành động đã hoàn thành.',
      explanation_en: '了 after verb indicates completed action.',
      examples: [
        { zh: '我吃了饭。', py: 'Wǒ chī le fàn.', vi: 'Tôi đã ăn cơm.', en: 'I ate.' },
        { zh: '他去了北京。', py: 'Tā qù le Běijīng.', vi: 'Anh ấy đã đi Bắc Kinh.', en: 'He went to Beijing.' }
      ]
    },
    {
      id: 'g1_10', name_vi: 'Có với 有', name_en: 'Have/Exist with 有',
      pattern: 'Subject + 有 + Object',
      explanation_vi: '有 (yǒu) = "có". Phủ định dùng 没有 (không dùng 不有).',
      explanation_en: '有 means "have/exist". Negate with 没有 (never 不有).',
      examples: [
        { zh: '我有两个哥哥。', py: 'Wǒ yǒu liǎng gè gēge.', vi: 'Tôi có hai anh trai.', en: 'I have two older brothers.' },
        { zh: '我没有钱。', py: 'Wǒ méiyǒu qián.', vi: 'Tôi không có tiền.', en: 'I don\'t have money.' }
      ]
    },
    {
      id: 'g1_11', name_vi: 'Thời gian đặt trước/sau chủ ngữ', name_en: 'Time placement',
      pattern: 'Subject + Time + Verb / Time + Subject + Verb',
      explanation_vi: 'Thời gian đặt trước động từ, có thể đầu câu hoặc sau chủ ngữ.',
      explanation_en: 'Time words go before verb, either at start or after subject.',
      examples: [
        { zh: '我明天去。', py: 'Wǒ míngtiān qù.', vi: 'Tôi ngày mai đi.', en: 'I\'m going tomorrow.' },
        { zh: '昨天我很忙。', py: 'Zuótiān wǒ hěn máng.', vi: 'Hôm qua tôi rất bận.', en: 'Yesterday I was very busy.' }
      ]
    },
    {
      id: 'g1_12', name_vi: 'Rất với 很', name_en: 'Very with 很',
      pattern: 'Subject + 很 + Adj',
      explanation_vi: '很 (hěn) = "rất". Câu tính từ thường cần 很 dù không nhấn mạnh.',
      explanation_en: '很 means "very". Adjective predicates usually need 很 even without emphasis.',
      examples: [
        { zh: '天气很好。', py: 'Tiānqì hěn hǎo.', vi: 'Thời tiết rất tốt.', en: 'The weather is good.' },
        { zh: '中文很难。', py: 'Zhōngwén hěn nán.', vi: 'Tiếng Trung rất khó.', en: 'Chinese is difficult.' }
      ]
    },
    {
      id: 'g1_13', name_vi: 'Có thể với 能/可以', name_en: 'Can with 能/可以',
      pattern: 'Subject + 能/可以 + Verb',
      explanation_vi: '能 (néng) = khả năng; 可以 (kěyǐ) = được phép.',
      explanation_en: '能 = ability/can; 可以 = permission/may.',
      examples: [
        { zh: '你能帮我吗？', py: 'Nǐ néng bāng wǒ ma?', vi: 'Bạn có thể giúp tôi không?', en: 'Can you help me?' },
        { zh: '这里可以拍照。', py: 'Zhèlǐ kěyǐ pāizhào.', vi: 'Ở đây được chụp ảnh.', en: 'You can take photos here.' }
      ]
    },
    {
      id: 'g1_14', name_vi: 'Đang làm với 在...呢', name_en: 'Progressive with 在...呢',
      pattern: 'Subject + 在 + Verb + (呢)',
      explanation_vi: '在 trước động từ = đang làm (progressive). 呢 cuối câu tăng ngữ khí.',
      explanation_en: '在 before verb = doing now (progressive). 呢 adds emphasis.',
      examples: [
        { zh: '我在吃饭呢。', py: 'Wǒ zài chīfàn ne.', vi: 'Tôi đang ăn cơm.', en: 'I\'m eating.' },
        { zh: '他在看书。', py: 'Tā zài kàn shū.', vi: 'Anh ấy đang đọc sách.', en: 'He is reading.' }
      ]
    },
    {
      id: 'g1_15', name_vi: 'Đi đâu với 去 + Place', name_en: 'Go somewhere with 去',
      pattern: 'Subject + 去 + Place',
      explanation_vi: '去 (qù) = "đi". Nơi đến đặt ngay sau 去.',
      explanation_en: '去 means "go". Destination follows directly.',
      examples: [
        { zh: '我去学校。', py: 'Wǒ qù xuéxiào.', vi: 'Tôi đi trường.', en: 'I go to school.' },
        { zh: '我们去吃饭吧。', py: 'Wǒmen qù chīfàn ba.', vi: 'Chúng ta đi ăn đi.', en: 'Let\'s go eat.' }
      ]
    }
  ],
  2: [
    {
      id: 'g2_01', name_vi: 'So sánh với 比', name_en: 'Comparison with 比',
      pattern: 'A + 比 + B + Adj',
      explanation_vi: '比 (bǐ) dùng để so sánh hơn. A hơn B ở tính chất nào đó.',
      explanation_en: '比 is used for comparisons. A is more [adj] than B.',
      examples: [
        { zh: '他比我高。', py: 'Tā bǐ wǒ gāo.', vi: 'Anh ấy cao hơn tôi.', en: 'He is taller than me.' },
        { zh: '今天比昨天冷。', py: 'Jīntiān bǐ zuótiān lěng.', vi: 'Hôm nay lạnh hơn hôm qua.', en: 'Today is colder than yesterday.' }
      ]
    },
    {
      id: 'g2_02', name_vi: 'Đã từng với 过', name_en: 'Experience with 过',
      pattern: 'Verb + 过',
      explanation_vi: '过 (guò) sau động từ biểu thị kinh nghiệm đã từng làm.',
      explanation_en: '过 after verb indicates past experience.',
      examples: [
        { zh: '我去过中国。', py: 'Wǒ qù guò Zhōngguó.', vi: 'Tôi đã từng đi Trung Quốc.', en: 'I have been to China.' },
        { zh: '你吃过越南菜吗？', py: 'Nǐ chī guò Yuènán cài ma?', vi: 'Bạn đã ăn đồ Việt chưa?', en: 'Have you eaten Vietnamese food?' }
      ]
    },
    {
      id: 'g2_03', name_vi: 'Đang/Sẽ với 要', name_en: 'Going to with 要',
      pattern: 'Subject + 要 + Verb',
      explanation_vi: '要 (yào) = "sẽ/muốn/cần". Biểu thị ý định hoặc tương lai gần.',
      explanation_en: '要 means "will/want/need". Indicates intention or near future.',
      examples: [
        { zh: '我要去上班。', py: 'Wǒ yào qù shàngbān.', vi: 'Tôi sắp đi làm.', en: 'I\'m going to work.' },
        { zh: '明天要下雨。', py: 'Míngtiān yào xiàyǔ.', vi: 'Ngày mai sẽ mưa.', en: 'It will rain tomorrow.' }
      ]
    },
    {
      id: 'g2_04', name_vi: 'Bổ ngữ kết quả', name_en: 'Result complement',
      pattern: 'Verb + 完/好/到/见',
      explanation_vi: 'Bổ ngữ kết quả đặt sau động từ, cho biết kết quả hành động.',
      explanation_en: 'Result complement after verb indicates outcome of action.',
      examples: [
        { zh: '我吃完了。', py: 'Wǒ chī wán le.', vi: 'Tôi ăn xong rồi.', en: 'I finished eating.' },
        { zh: '你听到了吗？', py: 'Nǐ tīng dào le ma?', vi: 'Bạn nghe thấy chưa?', en: 'Did you hear it?' }
      ]
    },
    {
      id: 'g2_05', name_vi: 'Vừa...vừa... với 一边...一边...', name_en: 'Simultaneously with 一边...一边...',
      pattern: '一边 + V1 + 一边 + V2',
      explanation_vi: 'Biểu thị hai hành động xảy ra đồng thời.',
      explanation_en: 'Indicates two actions happening at the same time.',
      examples: [
        { zh: '他一边吃饭一边看电视。', py: 'Tā yìbiān chīfàn yìbiān kàn diànshì.', vi: 'Anh ấy vừa ăn vừa xem TV.', en: 'He eats while watching TV.' },
        { zh: '我一边走一边听音乐。', py: 'Wǒ yìbiān zǒu yìbiān tīng yīnyuè.', vi: 'Tôi vừa đi vừa nghe nhạc.', en: 'I walk while listening to music.' }
      ]
    },
    {
      id: 'g2_06', name_vi: 'Càng...càng... với 越来越', name_en: 'More and more with 越来越',
      pattern: '越来越 + Adj/Verb',
      explanation_vi: '越来越 (yuè lái yuè) = "ngày càng", biểu thị mức độ tăng dần.',
      explanation_en: '越来越 means "more and more", indicates increasing degree.',
      examples: [
        { zh: '天气越来越冷了。', py: 'Tiānqì yuè lái yuè lěng le.', vi: 'Thời tiết ngày càng lạnh.', en: 'The weather is getting colder.' },
        { zh: '他的中文越来越好。', py: 'Tā de Zhōngwén yuè lái yuè hǎo.', vi: 'Tiếng Trung của anh ấy ngày càng tốt.', en: 'His Chinese is getting better.' }
      ]
    },
    {
      id: 'g2_07', name_vi: 'Mặc dù...nhưng... với 虽然...但是...', name_en: 'Although...but... with 虽然...但是...',
      pattern: '虽然 + A，但是 + B',
      explanation_vi: '虽然...但是... biểu thị nhượng bộ (mặc dù...nhưng...).',
      explanation_en: '虽然...但是... expresses concession (although...but...).',
      examples: [
        { zh: '虽然很累，但是很开心。', py: 'Suīrán hěn lèi, dànshì hěn kāixīn.', vi: 'Mặc dù mệt nhưng rất vui.', en: 'Although tired, but very happy.' },
        { zh: '虽然他很忙，但是他还是来了。', py: 'Suīrán tā hěn máng, dànshì tā háishi lái le.', vi: 'Dù anh ấy bận nhưng vẫn đến.', en: 'Although he was busy, he still came.' }
      ]
    },
    {
      id: 'g2_08', name_vi: 'Vì...nên... với 因为...所以...', name_en: 'Because...so... with 因为...所以...',
      pattern: '因为 + Reason，所以 + Result',
      explanation_vi: '因为...所以... biểu thị nguyên nhân - kết quả.',
      explanation_en: '因为...所以... expresses cause and effect.',
      examples: [
        { zh: '因为下雨，所以我没去。', py: 'Yīnwèi xiàyǔ, suǒyǐ wǒ méi qù.', vi: 'Vì mưa nên tôi không đi.', en: 'Because it rained, I didn\'t go.' },
        { zh: '因为太贵了，所以我没买。', py: 'Yīnwèi tài guì le, suǒyǐ wǒ méi mǎi.', vi: 'Vì quá đắt nên tôi không mua.', en: 'Because it was too expensive, I didn\'t buy it.' }
      ]
    },
    {
      id: 'g2_09', name_vi: 'Câu chữ 把', name_en: 'The 把 construction',
      pattern: 'Subject + 把 + Object + Verb + Complement',
      explanation_vi: '把 (bǎ) đưa tân ngữ lên trước động từ, nhấn mạnh tác động lên đối tượng.',
      explanation_en: '把 moves object before verb, emphasizing action on the object.',
      examples: [
        { zh: '请把门关上。', py: 'Qǐng bǎ mén guān shàng.', vi: 'Xin hãy đóng cửa lại.', en: 'Please close the door.' },
        { zh: '我把作业做完了。', py: 'Wǒ bǎ zuòyè zuò wán le.', vi: 'Tôi đã làm xong bài tập.', en: 'I finished the homework.' }
      ]
    },
    {
      id: 'g2_10', name_vi: 'Câu bị động với 被', name_en: 'Passive with 被',
      pattern: 'Subject + 被 + (Agent) + Verb',
      explanation_vi: '被 (bèi) biểu thị bị động, thường mang nghĩa tiêu cực.',
      explanation_en: '被 indicates passive voice, often with negative connotation.',
      examples: [
        { zh: '我的手机被偷了。', py: 'Wǒ de shǒujī bèi tōu le.', vi: 'Điện thoại tôi bị trộm.', en: 'My phone was stolen.' },
        { zh: '蛋糕被他吃了。', py: 'Dàngāo bèi tā chī le.', vi: 'Bánh bị anh ấy ăn mất.', en: 'The cake was eaten by him.' }
      ]
    },
    {
      id: 'g2_11', name_vi: 'Nếu...thì... với 如果...就...', name_en: 'If...then... with 如果...就...',
      pattern: '如果 + Condition，就 + Result',
      explanation_vi: '如果...就... biểu thị điều kiện - kết quả (nếu...thì...).',
      explanation_en: '如果...就... expresses condition and result (if...then...).',
      examples: [
        { zh: '如果明天下雨，我就不去了。', py: 'Rúguǒ míngtiān xiàyǔ, wǒ jiù bú qù le.', vi: 'Nếu mai mưa thì tôi không đi.', en: 'If it rains tomorrow, I won\'t go.' },
        { zh: '如果你有时间，就来我家吧。', py: 'Rúguǒ nǐ yǒu shíjiān, jiù lái wǒ jiā ba.', vi: 'Nếu bạn rảnh thì đến nhà tôi nhé.', en: 'If you have time, come to my house.' }
      ]
    },
    {
      id: 'g2_12', name_vi: 'Bổ ngữ mức độ với 得', name_en: 'Degree complement with 得',
      pattern: 'Verb + 得 + Adj/Description',
      explanation_vi: '得 (de) nối động từ với bổ ngữ mô tả mức độ/cách thức.',
      explanation_en: '得 links verb with complement describing degree/manner.',
      examples: [
        { zh: '他跑得很快。', py: 'Tā pǎo de hěn kuài.', vi: 'Anh ấy chạy rất nhanh.', en: 'He runs very fast.' },
        { zh: '她说中文说得很好。', py: 'Tā shuō Zhōngwén shuō de hěn hǎo.', vi: 'Cô ấy nói tiếng Trung rất giỏi.', en: 'She speaks Chinese very well.' }
      ]
    },
    {
      id: 'g2_13', name_vi: 'Sắp...rồi với 快...了', name_en: 'About to with 快...了',
      pattern: '快 + Verb/Adj + 了',
      explanation_vi: '快...了 biểu thị sắp xảy ra, tương lai rất gần.',
      explanation_en: '快...了 indicates something is about to happen.',
      examples: [
        { zh: '快下雨了。', py: 'Kuài xiàyǔ le.', vi: 'Sắp mưa rồi.', en: 'It\'s about to rain.' },
        { zh: '电影快开始了。', py: 'Diànyǐng kuài kāishǐ le.', vi: 'Phim sắp bắt đầu rồi.', en: 'The movie is about to start.' }
      ]
    },
    {
      id: 'g2_14', name_vi: 'Đã...rồi với 已经...了', name_en: 'Already with 已经...了',
      pattern: '已经 + Verb + 了',
      explanation_vi: '已经 (yǐjīng) = "đã", nhấn mạnh hành động đã hoàn thành.',
      explanation_en: '已经 means "already", emphasizes completed action.',
      examples: [
        { zh: '我已经吃了。', py: 'Wǒ yǐjīng chī le.', vi: 'Tôi đã ăn rồi.', en: 'I already ate.' },
        { zh: '他已经走了。', py: 'Tā yǐjīng zǒu le.', vi: 'Anh ấy đã đi rồi.', en: 'He already left.' }
      ]
    },
    {
      id: 'g2_15', name_vi: 'Cho ai cái gì với 给', name_en: 'Give with 给',
      pattern: 'Subject + 给 + Person + Object / 给 + Person + Verb',
      explanation_vi: '给 (gěi) = "cho/đưa". Có thể dùng như động từ hoặc giới từ.',
      explanation_en: '给 means "give/to". Can be used as verb or preposition.',
      examples: [
        { zh: '他给我一本书。', py: 'Tā gěi wǒ yì běn shū.', vi: 'Anh ấy cho tôi một quyển sách.', en: 'He gave me a book.' },
        { zh: '我给你打电话。', py: 'Wǒ gěi nǐ dǎ diànhuà.', vi: 'Tôi gọi điện cho bạn.', en: 'I\'ll call you.' }
      ]
    }
  ]
};
