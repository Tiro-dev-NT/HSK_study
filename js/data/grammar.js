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
  ],
  3: [
    {
      id: 'g3_01', name_vi: 'Nhấn mạnh với 是……的', name_en: 'Emphasis with 是……的',
      pattern: '是 + (thời gian/nơi/cách) + Verb + 的',
      explanation_vi: '是……的 nhấn mạnh thời gian, địa điểm hoặc cách thức của một hành động đã xảy ra.',
      explanation_en: '是……的 emphasizes the time, place, or manner of a completed action.',
      examples: [
        { zh: '我是昨天来的。', py: 'Wǒ shì zuótiān lái de.', vi: 'Tôi đến vào hôm qua.', en: 'It was yesterday that I came.' },
        { zh: '他是坐飞机去的。', py: 'Tā shì zuò fēijī qù de.', vi: 'Anh ấy đi bằng máy bay.', en: 'He went by plane.' }
      ]
    },
    {
      id: 'g3_02', name_vi: 'Vừa……vừa…… với 又……又……', name_en: 'Both……and…… with 又……又……',
      pattern: '又 + Adj1 + 又 + Adj2',
      explanation_vi: '又……又…… nối hai tính chất cùng tồn tại của một đối tượng.',
      explanation_en: '又……又…… links two qualities that coexist.',
      examples: [
        { zh: '这个菜又好吃又便宜。', py: 'Zhège cài yòu hǎochī yòu piányi.', vi: 'Món này vừa ngon vừa rẻ.', en: 'This dish is both tasty and cheap.' },
        { zh: '她又会唱歌又会跳舞。', py: 'Tā yòu huì chànggē yòu huì tiàowǔ.', vi: 'Cô ấy vừa biết hát vừa biết múa.', en: 'She can both sing and dance.' }
      ]
    },
    {
      id: 'g3_03', name_vi: 'Vừa……là…… với 一……就……', name_en: 'As soon as with 一……就……',
      pattern: '一 + V1 + 就 + V2',
      explanation_vi: '一……就…… biểu thị hành động sau xảy ra ngay khi hành động trước hoàn thành.',
      explanation_en: '一……就…… means the second action happens right after the first.',
      examples: [
        { zh: '我一到家就给你打电话。', py: 'Wǒ yí dào jiā jiù gěi nǐ dǎ diànhuà.', vi: 'Tôi vừa về đến nhà là gọi cho bạn.', en: 'I\'ll call you as soon as I get home.' },
        { zh: '他一喝酒就脸红。', py: 'Tā yì hē jiǔ jiù liǎn hóng.', vi: 'Anh ấy cứ uống rượu là đỏ mặt.', en: 'He blushes as soon as he drinks.' }
      ]
    },
    {
      id: 'g3_04', name_vi: 'Càng……càng…… với 越……越……', name_en: 'The more……the more with 越……越……',
      pattern: '越 + V1/Adj + 越 + Adj',
      explanation_vi: '越……越…… biểu thị mức độ thay đổi song song (càng…càng…).',
      explanation_en: '越……越…… shows two things changing in parallel (the more…the more).',
      examples: [
        { zh: '雨越下越大。', py: 'Yǔ yuè xià yuè dà.', vi: 'Mưa càng lúc càng to.', en: 'The rain is getting heavier.' },
        { zh: '我越想越生气。', py: 'Wǒ yuè xiǎng yuè shēngqì.', vi: 'Tôi càng nghĩ càng tức.', en: 'The more I think about it, the angrier I get.' }
      ]
    },
    {
      id: 'g3_05', name_vi: 'Ngoài……ra với 除了……以外', name_en: 'Besides with 除了……以外',
      pattern: '除了 + A + 以外，还/都……',
      explanation_vi: '除了……以外 biểu thị "ngoài… ra", có thể loại trừ (都) hoặc bổ sung (还).',
      explanation_en: '除了……以外 means "besides/except", can exclude (都) or add (还).',
      examples: [
        { zh: '除了小王以外，大家都来了。', py: 'Chúle Xiǎo Wáng yǐwài, dàjiā dōu lái le.', vi: 'Ngoài Tiểu Vương ra, mọi người đều đến.', en: 'Everyone came except Xiao Wang.' },
        { zh: '除了汉语，他还会说英语。', py: 'Chúle Hànyǔ, tā hái huì shuō Yīngyǔ.', vi: 'Ngoài tiếng Hán, anh ấy còn nói được tiếng Anh.', en: 'Besides Chinese, he also speaks English.' }
      ]
    },
    {
      id: 'g3_06', name_vi: 'Giống như với 跟……一样', name_en: 'Same as with 跟……一样',
      pattern: 'A + 跟 + B + 一样 + (Adj)',
      explanation_vi: '跟……一样 biểu thị A và B giống nhau, có thể thêm tính từ để so sánh ngang bằng.',
      explanation_en: '跟……一样 expresses that A and B are the same; add an adjective for equal comparison.',
      examples: [
        { zh: '我的手机跟你的一样。', py: 'Wǒ de shǒujī gēn nǐ de yíyàng.', vi: 'Điện thoại của tôi giống của bạn.', en: 'My phone is the same as yours.' },
        { zh: '他跟他哥哥一样高。', py: 'Tā gēn tā gēge yíyàng gāo.', vi: 'Anh ấy cao bằng anh trai.', en: 'He is as tall as his older brother.' }
      ]
    },
    {
      id: 'g3_07', name_vi: 'Bổ ngữ xu hướng 出来/进去', name_en: 'Directional complement 出来/进去',
      pattern: 'Verb + 出来/进去/上来/下去',
      explanation_vi: 'Bổ ngữ xu hướng đặt sau động từ, cho biết phương hướng di chuyển so với người nói.',
      explanation_en: 'Directional complements after a verb show movement direction relative to the speaker.',
      examples: [
        { zh: '他从房间里走出来。', py: 'Tā cóng fángjiān lǐ zǒu chūlái.', vi: 'Anh ấy đi ra từ trong phòng.', en: 'He walked out of the room.' },
        { zh: '请进来吧。', py: 'Qǐng jìnlái ba.', vi: 'Mời vào đi.', en: 'Please come in.' }
      ]
    },
    {
      id: 'g3_08', name_vi: 'Không những……mà còn…… với 不但……而且……', name_en: 'Not only……but also with 不但……而且……',
      pattern: '不但 + A，而且 + B',
      explanation_vi: '不但……而且…… biểu thị tăng tiến (không những… mà còn…).',
      explanation_en: '不但……而且…… expresses progression (not only…but also…).',
      examples: [
        { zh: '他不但会说汉语，而且说得很好。', py: 'Tā búdàn huì shuō Hànyǔ, érqiě shuō de hěn hǎo.', vi: 'Anh ấy không những nói được tiếng Hán mà còn nói rất giỏi.', en: 'He not only speaks Chinese but speaks it well.' },
        { zh: '这件衣服不但好看，而且便宜。', py: 'Zhè jiàn yīfu búdàn hǎokàn, érqiě piányi.', vi: 'Cái áo này không những đẹp mà còn rẻ.', en: 'This outfit is not only nice but also cheap.' }
      ]
    },
    {
      id: 'g3_09', name_vi: 'Để mà với 为了', name_en: 'In order to with 为了',
      pattern: '为了 + Mục đích，(主语) + ……',
      explanation_vi: '为了 biểu thị mục đích, thường đặt đầu câu.',
      explanation_en: '为了 indicates purpose, usually placed at the start of the sentence.',
      examples: [
        { zh: '为了学好汉语，他每天听录音。', py: 'Wèile xuéhǎo Hànyǔ, tā měitiān tīng lùyīn.', vi: 'Để học tốt tiếng Hán, anh ấy nghe ghi âm mỗi ngày.', en: 'To learn Chinese well, he listens to recordings daily.' },
        { zh: '为了健康，我开始锻炼。', py: 'Wèile jiànkāng, wǒ kāishǐ duànliàn.', vi: 'Vì sức khỏe, tôi bắt đầu tập luyện.', en: 'For my health, I started exercising.' }
      ]
    },
    {
      id: 'g3_10', name_vi: 'Lặp động từ (làm thử/chút)', name_en: 'Verb reduplication',
      pattern: 'Verb + Verb / Verb + 一下',
      explanation_vi: 'Lặp lại động từ làm nhẹ ngữ khí, mang nghĩa "làm một chút / thử".',
      explanation_en: 'Reduplicating a verb softens the tone, meaning "do a bit / try".',
      examples: [
        { zh: '你看看这本书。', py: 'Nǐ kànkan zhè běn shū.', vi: 'Bạn xem qua quyển sách này đi.', en: 'Take a look at this book.' },
        { zh: '我想试试这件衣服。', py: 'Wǒ xiǎng shìshi zhè jiàn yīfu.', vi: 'Tôi muốn thử cái áo này.', en: 'I want to try on this outfit.' }
      ]
    },
    {
      id: 'g3_11', name_vi: 'Trạng thái tiếp diễn với 着', name_en: 'Ongoing state with 着',
      pattern: 'Verb + 着',
      explanation_vi: '着 (zhe) sau động từ biểu thị trạng thái đang duy trì hoặc cách thức kèm theo.',
      explanation_en: '着 after a verb shows a continuing state or an accompanying manner.',
      examples: [
        { zh: '门开着。', py: 'Mén kāizhe.', vi: 'Cửa đang mở.', en: 'The door is open.' },
        { zh: '他笑着说。', py: 'Tā xiàozhe shuō.', vi: 'Anh ấy vừa cười vừa nói.', en: 'He said with a smile.' }
      ]
    },
    {
      id: 'g3_12', name_vi: 'Trước……sau đó…… với 先……然后……', name_en: 'First……then with 先……然后……',
      pattern: '先 + V1，然后 + V2',
      explanation_vi: '先……然后…… biểu thị trình tự các hành động (trước… rồi…).',
      explanation_en: '先……然后…… expresses a sequence of actions (first…then…).',
      examples: [
        { zh: '我们先吃饭，然后看电影。', py: 'Wǒmen xiān chīfàn, ránhòu kàn diànyǐng.', vi: 'Chúng ta ăn cơm trước, rồi xem phim.', en: 'Let\'s eat first, then watch a movie.' },
        { zh: '你先休息一下，然后再工作。', py: 'Nǐ xiān xiūxi yíxià, ránhòu zài gōngzuò.', vi: 'Bạn nghỉ chút đã, rồi hãy làm việc.', en: 'Rest a bit first, then work.' }
      ]
    }
  ],
  4: [
    {
      id: 'g4_01', name_vi: 'Không chỉ……mà còn…… với 不仅……而且……', name_en: 'Not only……but also with 不仅……而且……',
      pattern: '不仅 + A，而且 + B',
      explanation_vi: '不仅……而且…… giống 不但……而且…… nhưng trang trọng hơn.',
      explanation_en: '不仅……而且…… is like 不但……而且…… but more formal.',
      examples: [
        { zh: '他不仅聪明，而且很努力。', py: 'Tā bùjǐn cōngmíng, érqiě hěn nǔlì.', vi: 'Anh ấy không chỉ thông minh mà còn rất chăm chỉ.', en: 'He is not only smart but also hardworking.' },
        { zh: '这样做不仅浪费时间，而且没有效果。', py: 'Zhèyàng zuò bùjǐn làngfèi shíjiān, érqiě méiyǒu xiàoguǒ.', vi: 'Làm vậy không chỉ phí thời gian mà còn không hiệu quả.', en: 'Doing this not only wastes time but is also ineffective.' }
      ]
    },
    {
      id: 'g4_02', name_vi: 'Dù……cũng…… với 无论……都……', name_en: 'No matter……with 无论……都……',
      pattern: '无论 + (câu hỏi)，都……',
      explanation_vi: '无论……都…… biểu thị kết quả không đổi dù điều kiện thế nào (đi với từ nghi vấn).',
      explanation_en: '无论……都…… means the result stays the same regardless of conditions (pairs with a question word).',
      examples: [
        { zh: '无论多忙，他都会回家吃晚饭。', py: 'Wúlùn duō máng, tā dōu huì huíjiā chī wǎnfàn.', vi: 'Dù bận đến mấy anh ấy cũng về nhà ăn tối.', en: 'No matter how busy, he comes home for dinner.' },
        { zh: '无论你去哪儿，我都跟着你。', py: 'Wúlùn nǐ qù nǎr, wǒ dōu gēnzhe nǐ.', vi: 'Dù bạn đi đâu tôi cũng theo bạn.', en: 'No matter where you go, I\'ll follow you.' }
      ]
    },
    {
      id: 'g4_03', name_vi: 'Chỉ cần……là…… với 只要……就……', name_en: 'As long as with 只要……就……',
      pattern: '只要 + Điều kiện，就 + Kết quả',
      explanation_vi: '只要……就…… biểu thị điều kiện đủ (chỉ cần… là…).',
      explanation_en: '只要……就…… expresses a sufficient condition (as long as…then…).',
      examples: [
        { zh: '只要努力，就一定能成功。', py: 'Zhǐyào nǔlì, jiù yídìng néng chénggōng.', vi: 'Chỉ cần cố gắng là nhất định thành công.', en: 'As long as you work hard, you\'ll succeed.' },
        { zh: '只要你愿意，我随时可以帮你。', py: 'Zhǐyào nǐ yuànyì, wǒ suíshí kěyǐ bāng nǐ.', vi: 'Chỉ cần bạn muốn, tôi giúp bất cứ lúc nào.', en: 'As long as you\'re willing, I can help anytime.' }
      ]
    },
    {
      id: 'g4_04', name_vi: 'Chỉ có……mới…… với 只有……才……', name_en: 'Only if with 只有……才……',
      pattern: '只有 + Điều kiện，才 + Kết quả',
      explanation_vi: '只有……才…… biểu thị điều kiện cần duy nhất (chỉ có… mới…).',
      explanation_en: '只有……才…… expresses the only necessary condition (only if…then…).',
      examples: [
        { zh: '只有多练习，才能学好。', py: 'Zhǐyǒu duō liànxí, cái néng xuéhǎo.', vi: 'Chỉ có luyện nhiều mới học giỏi được.', en: 'Only by practicing a lot can you master it.' },
        { zh: '只有努力工作，才会有好的结果。', py: 'Zhǐyǒu nǔlì gōngzuò, cái huì yǒu hǎo de jiéguǒ.', vi: 'Chỉ có làm việc chăm chỉ mới có kết quả tốt.', en: 'Only by working hard will there be good results.' }
      ]
    },
    {
      id: 'g4_05', name_vi: 'Cho dù……cũng…… với 即使……也……', name_en: 'Even if with 即使……也……',
      pattern: '即使 + Giả định，也……',
      explanation_vi: '即使……也…… biểu thị nhượng bộ giả định (cho dù… cũng…).',
      explanation_en: '即使……也…… expresses a hypothetical concession (even if…still…).',
      examples: [
        { zh: '即使下雨，我也要去。', py: 'Jíshǐ xiàyǔ, wǒ yě yào qù.', vi: 'Cho dù trời mưa tôi cũng đi.', en: 'Even if it rains, I\'ll still go.' },
        { zh: '即使很难，他也不放弃。', py: 'Jíshǐ hěn nán, tā yě bú fàngqì.', vi: 'Dù rất khó anh ấy cũng không bỏ cuộc.', en: 'Even if it\'s hard, he won\'t give up.' }
      ]
    },
    {
      id: 'g4_06', name_vi: 'Ngay cả……cũng…… với 连……都/也……', name_en: 'Even with 连……都/也……',
      pattern: '连 + Đối tượng + 都/也……',
      explanation_vi: '连……都/也…… nhấn mạnh trường hợp cực đoan (ngay cả… cũng…).',
      explanation_en: '连……都/也…… emphasizes an extreme case (even…).',
      examples: [
        { zh: '这件事连小孩都知道。', py: 'Zhè jiàn shì lián xiǎohái dōu zhīdào.', vi: 'Chuyện này đến trẻ con cũng biết.', en: 'Even children know about this.' },
        { zh: '他忙得连饭都没吃。', py: 'Tā máng de lián fàn dōu méi chī.', vi: 'Anh ấy bận đến nỗi cơm cũng không ăn.', en: 'He was so busy he didn\'t even eat.' }
      ]
    },
    {
      id: 'g4_07', name_vi: 'Bổ ngữ 起来 (bắt đầu/đánh giá)', name_en: 'Complement 起来 (begin/assess)',
      pattern: 'Verb/Adj + 起来',
      explanation_vi: '起来 sau động từ chỉ sự bắt đầu, hoặc sau "nghe/nhìn" để đưa ra đánh giá.',
      explanation_en: '起来 after a verb marks the start of an action, or follows "sound/look" to give an assessment.',
      examples: [
        { zh: '天气暖和起来了。', py: 'Tiānqì nuǎnhuo qǐlái le.', vi: 'Thời tiết ấm dần lên.', en: 'The weather is warming up.' },
        { zh: '这个办法听起来不错。', py: 'Zhège bànfǎ tīng qǐlái búcuò.', vi: 'Cách này nghe có vẻ ổn.', en: 'This method sounds good.' }
      ]
    },
    {
      id: 'g4_08', name_vi: 'Bổ ngữ 下去 (tiếp tục)', name_en: 'Complement 下去 (continue)',
      pattern: 'Verb + 下去',
      explanation_vi: '下去 sau động từ biểu thị tiếp tục một hành động đang diễn ra.',
      explanation_en: '下去 after a verb means to continue an ongoing action.',
      examples: [
        { zh: '请你说下去。', py: 'Qǐng nǐ shuō xiàqù.', vi: 'Bạn nói tiếp đi.', en: 'Please go on.' },
        { zh: '这样的生活我不能再过下去了。', py: 'Zhèyàng de shēnghuó wǒ bùnéng zài guò xiàqù le.', vi: 'Cuộc sống thế này tôi không thể tiếp tục được nữa.', en: 'I can\'t go on living like this.' }
      ]
    },
    {
      id: 'g4_09', name_vi: 'Không phải……mà là…… với 不是……而是……', name_en: 'Not……but rather with 不是……而是……',
      pattern: '不是 + A，而是 + B',
      explanation_vi: '不是……而是…… phủ định A và khẳng định B thay thế.',
      explanation_en: '不是……而是…… negates A and affirms B instead.',
      examples: [
        { zh: '这不是钱的问题，而是态度的问题。', py: 'Zhè búshì qián de wèntí, érshì tàidu de wèntí.', vi: 'Đây không phải vấn đề tiền mà là vấn đề thái độ.', en: 'This isn\'t about money but about attitude.' },
        { zh: '他来不是为了帮忙，而是为了看热闹。', py: 'Tā lái búshì wèile bāngmáng, érshì wèile kàn rènao.', vi: 'Anh ấy đến không phải để giúp mà để xem náo nhiệt.', en: 'He came not to help but to watch the fun.' }
      ]
    },
    {
      id: 'g4_10', name_vi: 'Đối với……mà nói với 对……来说', name_en: 'For/To with 对……来说',
      pattern: '对 + (người/việc) + 来说，……',
      explanation_vi: '对……来说 nêu góc nhìn của ai đó (đối với… mà nói).',
      explanation_en: '对……来说 introduces someone\'s perspective (for…).',
      examples: [
        { zh: '对我来说，健康最重要。', py: 'Duì wǒ lái shuō, jiànkāng zuì zhòngyào.', vi: 'Đối với tôi, sức khỏe quan trọng nhất.', en: 'For me, health matters most.' },
        { zh: '对学生来说，学习是第一位的。', py: 'Duì xuésheng lái shuō, xuéxí shì dì-yī wèi de.', vi: 'Đối với học sinh, học tập là số một.', en: 'For students, studying comes first.' }
      ]
    },
    {
      id: 'g4_11', name_vi: 'Cùng với với 随着', name_en: 'Along with 随着',
      pattern: '随着 + Sự thay đổi，……',
      explanation_vi: '随着 biểu thị một việc thay đổi kéo theo việc khác.',
      explanation_en: '随着 shows one change accompanying another.',
      examples: [
        { zh: '随着年龄的增长，他越来越成熟。', py: 'Suízhe niánlíng de zēngzhǎng, tā yuèláiyuè chéngshú.', vi: 'Cùng với tuổi tác tăng lên, anh ấy ngày càng chín chắn.', en: 'As he ages, he becomes more mature.' },
        { zh: '随着科技的发展，生活更方便了。', py: 'Suízhe kējì de fāzhǎn, shēnghuó gèng fāngbiàn le.', vi: 'Cùng với sự phát triển công nghệ, cuộc sống tiện hơn.', en: 'As technology advances, life becomes more convenient.' }
      ]
    },
    {
      id: 'g4_12', name_vi: 'Vừa……vừa…… với 既……又……', name_en: 'Both……and with 既……又……',
      pattern: '既 + A + 又 + B',
      explanation_vi: '既……又…… nối hai tính chất hay vai trò song song, trang trọng hơn 又……又…….',
      explanation_en: '既……又…… links two parallel qualities/roles, more formal than 又……又…….',
      examples: [
        { zh: '这个办法既简单又有效。', py: 'Zhège bànfǎ jì jiǎndān yòu yǒuxiào.', vi: 'Cách này vừa đơn giản vừa hiệu quả.', en: 'This method is both simple and effective.' },
        { zh: '她既是老师又是作家。', py: 'Tā jì shì lǎoshī yòu shì zuòjiā.', vi: 'Cô ấy vừa là giáo viên vừa là nhà văn.', en: 'She is both a teacher and a writer.' }
      ]
    }
  ],
  5: [
    {
      id: 'g5_01', name_vi: 'Một khi……thì…… với 一旦……就……', name_en: 'Once with 一旦……就……',
      pattern: '一旦 + Điều kiện，就……',
      explanation_vi: '一旦……就…… biểu thị một khi điều gì xảy ra thì kéo theo kết quả.',
      explanation_en: '一旦……就…… means once something happens, a result follows.',
      examples: [
        { zh: '一旦决定了，就不要后悔。', py: 'Yídàn juédìng le, jiù búyào hòuhuǐ.', vi: 'Một khi đã quyết thì đừng hối hận.', en: 'Once you\'ve decided, don\'t regret it.' },
        { zh: '机会一旦失去，就很难再有。', py: 'Jīhuì yídàn shīqù, jiù hěn nán zài yǒu.', vi: 'Cơ hội một khi mất đi thì khó có lại.', en: 'Once an opportunity is lost, it rarely returns.' }
      ]
    },
    {
      id: 'g5_02', name_vi: 'Cho dù……cũng…… với 哪怕……也……', name_en: 'Even if with 哪怕……也……',
      pattern: '哪怕 + Giả định cực đoan，也……',
      explanation_vi: '哪怕……也…… nhấn mạnh nhượng bộ giả định, khẩu ngữ hơn 即使.',
      explanation_en: '哪怕……也…… emphasizes a hypothetical concession, more colloquial than 即使.',
      examples: [
        { zh: '哪怕只有一点希望，我也不会放弃。', py: 'Nǎpà zhǐyǒu yìdiǎn xīwàng, wǒ yě búhuì fàngqì.', vi: 'Dù chỉ một chút hy vọng tôi cũng không bỏ cuộc.', en: 'Even with a sliver of hope, I won\'t give up.' },
        { zh: '哪怕再累，他也要把工作做完。', py: 'Nǎpà zài lèi, tā yě yào bǎ gōngzuò zuòwán.', vi: 'Dù mệt đến mấy anh ấy cũng làm xong việc.', en: 'No matter how tired, he\'ll finish the work.' }
      ]
    },
    {
      id: 'g5_03', name_vi: 'Nhất định phải với 非……不可', name_en: 'Must with 非……不可',
      pattern: '非 + Verb + 不可',
      explanation_vi: '非……不可 nhấn mạnh sự bắt buộc (nhất định phải… mới được).',
      explanation_en: '非……不可 stresses necessity (must…, no other way).',
      examples: [
        { zh: '这件事非他做不可。', py: 'Zhè jiàn shì fēi tā zuò bùkě.', vi: 'Việc này phải do anh ấy làm mới được.', en: 'This must be done by him.' },
        { zh: '想成功非努力不可。', py: 'Xiǎng chénggōng fēi nǔlì bùkě.', vi: 'Muốn thành công thì nhất định phải cố gắng.', en: 'To succeed, you simply must work hard.' }
      ]
    },
    {
      id: 'g5_04', name_vi: 'Ngược lại với 反而', name_en: 'On the contrary with 反而',
      pattern: '……，反而 + Kết quả trái mong đợi',
      explanation_vi: '反而 biểu thị kết quả ngược với điều người ta tưởng.',
      explanation_en: '反而 introduces a result contrary to expectation.',
      examples: [
        { zh: '吃了药，病反而更严重了。', py: 'Chī le yào, bìng fǎn\'ér gèng yánzhòng le.', vi: 'Uống thuốc rồi bệnh lại càng nặng hơn.', en: 'After taking medicine, the illness got worse instead.' },
        { zh: '我帮了他，他反而怪我。', py: 'Wǒ bāng le tā, tā fǎn\'ér guài wǒ.', vi: 'Tôi giúp anh ấy, anh ấy lại trách tôi.', en: 'I helped him, yet he blamed me instead.' }
      ]
    },
    {
      id: 'g5_05', name_vi: 'Không ngờ với 居然/竟然', name_en: 'Unexpectedly with 居然/竟然',
      pattern: '主语 + 居然/竟然 + Verb',
      explanation_vi: '居然/竟然 biểu thị sự ngạc nhiên trước điều ngoài dự đoán.',
      explanation_en: '居然/竟然 express surprise at something unexpected.',
      examples: [
        { zh: '他居然忘了我的名字。', py: 'Tā jūrán wàng le wǒ de míngzi.', vi: 'Anh ấy lại quên cả tên tôi.', en: 'He actually forgot my name.' },
        { zh: '这么难的事，他竟然做到了。', py: 'Zhème nán de shì, tā jìngrán zuòdào le.', vi: 'Việc khó vậy mà anh ấy lại làm được.', en: 'Such a hard task, yet he actually did it.' }
      ]
    },
    {
      id: 'g5_06', name_vi: 'Câu hỏi tu từ với 难道……吗', name_en: 'Rhetorical with 难道……吗',
      pattern: '难道 + Câu + 吗？',
      explanation_vi: '难道……吗 đặt câu hỏi tu từ để nhấn mạnh điều ngược lại.',
      explanation_en: '难道……吗 forms a rhetorical question stressing the opposite.',
      examples: [
        { zh: '难道你不知道吗？', py: 'Nándào nǐ bù zhīdào ma?', vi: 'Chẳng lẽ bạn không biết sao?', en: 'Don\'t tell me you don\'t know?' },
        { zh: '难道这都是我的错？', py: 'Nándào zhè dōu shì wǒ de cuò?', vi: 'Chẳng lẽ đây đều là lỗi của tôi?', en: 'Is all of this really my fault?' }
      ]
    },
    {
      id: 'g5_07', name_vi: 'Lỡ như với 万一', name_en: 'In case with 万一',
      pattern: '万一 + Tình huống xấu，(就)……',
      explanation_vi: '万一 biểu thị giả định khả năng xấu, ít xảy ra nhưng cần đề phòng.',
      explanation_en: '万一 supposes an unlikely but worrying possibility.',
      examples: [
        { zh: '万一下雨怎么办？', py: 'Wànyī xiàyǔ zěnme bàn?', vi: 'Lỡ trời mưa thì sao?', en: 'What if it rains?' },
        { zh: '带上伞吧，万一下雨呢。', py: 'Dài shàng sǎn ba, wànyī xiàyǔ ne.', vi: 'Mang ô đi, lỡ mưa thì sao.', en: 'Bring an umbrella, just in case it rains.' }
      ]
    },
    {
      id: 'g5_08', name_vi: 'Chưa chắc với 不见得', name_en: 'Not necessarily with 不见得',
      pattern: '……不见得 + Adj/Verb',
      explanation_vi: '不见得 biểu thị "chưa chắc", phủ định nhẹ một phán đoán.',
      explanation_en: '不见得 means "not necessarily", a mild negation of a judgement.',
      examples: [
        { zh: '贵的东西不见得好。', py: 'Guì de dōngxi bújiàndé hǎo.', vi: 'Đồ đắt chưa chắc đã tốt.', en: 'Expensive things aren\'t necessarily good.' },
        { zh: '他说的不见得对。', py: 'Tā shuō de bújiàndé duì.', vi: 'Điều anh ấy nói chưa chắc đúng.', en: 'What he says isn\'t necessarily right.' }
      ]
    },
    {
      id: 'g5_09', name_vi: 'Để tiện cho với 以便', name_en: 'So as to with 以便',
      pattern: '……，以便 + Mục đích',
      explanation_vi: '以便 nối vế sau nêu mục đích thuận lợi của hành động trước.',
      explanation_en: '以便 introduces the convenient purpose of the preceding action.',
      examples: [
        { zh: '请留下电话，以便我们联系。', py: 'Qǐng liúxià diànhuà, yǐbiàn wǒmen liánxì.', vi: 'Hãy để lại số điện thoại để chúng tôi tiện liên hệ.', en: 'Please leave a number so we can contact you.' },
        { zh: '早点出发，以便准时到达。', py: 'Zǎo diǎn chūfā, yǐbiàn zhǔnshí dàodá.', vi: 'Xuất phát sớm để đến đúng giờ.', en: 'Set off early so as to arrive on time.' }
      ]
    },
    {
      id: 'g5_10', name_vi: 'Chi bằng với 与其……不如……', name_en: 'Rather than with 与其……不如……',
      pattern: '与其 + A，不如 + B',
      explanation_vi: '与其……不如…… so sánh hai lựa chọn, nghiêng về B (thay vì… chi bằng…).',
      explanation_en: '与其……不如…… compares two options, favoring B (rather than…better to…).',
      examples: [
        { zh: '与其等别人帮你，不如自己想办法。', py: 'Yǔqí děng biérén bāng nǐ, bùrú zìjǐ xiǎng bànfǎ.', vi: 'Thay vì đợi người khác giúp, chi bằng tự nghĩ cách.', en: 'Rather than wait for help, better to figure it out yourself.' },
        { zh: '与其后悔，不如现在就行动。', py: 'Yǔqí hòuhuǐ, bùrú xiànzài jiù xíngdòng.', vi: 'Thay vì hối hận, chi bằng hành động ngay.', en: 'Rather than regret, better to act now.' }
      ]
    }
  ],
  6: [
    {
      id: 'g6_01', name_vi: 'Đến mức với 以至于', name_en: 'To the extent that with 以至于',
      pattern: '……，以至于 + Kết quả',
      explanation_vi: '以至于 dẫn ra kết quả (thường ngoài ý muốn) do mức độ ở vế trước gây nên.',
      explanation_en: '以至于 introduces a (often unintended) result caused by the degree stated before.',
      examples: [
        { zh: '他工作太投入，以至于忘了吃饭。', py: 'Tā gōngzuò tài tóurù, yǐzhìyú wàng le chīfàn.', vi: 'Anh ấy làm việc quá tập trung đến nỗi quên ăn.', en: 'He was so absorbed in work that he forgot to eat.' },
        { zh: '雨下得很大，以至于无法出门。', py: 'Yǔ xià de hěn dà, yǐzhìyú wúfǎ chūmén.', vi: 'Mưa quá to đến mức không thể ra ngoài.', en: 'It rained so hard that going out was impossible.' }
      ]
    },
    {
      id: 'g6_02', name_vi: 'Tuy……nhưng…… với 固然……但……', name_en: 'Admittedly……but with 固然……但……',
      pattern: '固然 + A，但 + B',
      explanation_vi: '固然……但…… thừa nhận A đúng nhưng nhấn mạnh B (tuy… nhưng…).',
      explanation_en: '固然……但…… concedes A but emphasizes B (admittedly…but…).',
      examples: [
        { zh: '这个办法固然好，但是费用太高。', py: 'Zhège bànfǎ gùrán hǎo, dànshì fèiyong tài gāo.', vi: 'Cách này tuy hay nhưng chi phí quá cao.', en: 'This method is good indeed, but it costs too much.' },
        { zh: '努力固然重要，但方法也很关键。', py: 'Nǔlì gùrán zhòngyào, dàn fāngfǎ yě hěn guānjiàn.', vi: 'Cố gắng tuy quan trọng nhưng phương pháp cũng then chốt.', en: 'Effort matters, true, but method is also key.' }
      ]
    },
    {
      id: 'g6_03', name_vi: 'Huống chi với 何况/更何况', name_en: 'Let alone with 何况/更何况',
      pattern: '……，何况/更何况 + Trường hợp mạnh hơn',
      explanation_vi: '何况 đưa ra trường hợp còn rõ ràng hơn để củng cố lập luận (huống chi).',
      explanation_en: '何况 raises an even stronger case to reinforce the argument (let alone).',
      examples: [
        { zh: '这件事大人都做不好，何况孩子。', py: 'Zhè jiàn shì dàrén dōu zuò bù hǎo, hékuàng háizi.', vi: 'Việc này người lớn còn làm không tốt, huống chi trẻ con.', en: 'Even adults can\'t do this well, let alone children.' },
        { zh: '平时都很忙，更何况现在。', py: 'Píngshí dōu hěn máng, gèng hékuàng xiànzài.', vi: 'Bình thường đã bận, huống chi bây giờ.', en: 'I\'m busy even normally, much less now.' }
      ]
    },
    {
      id: 'g6_04', name_vi: 'Một là……hai là…… với 一来……二来……', name_en: 'Firstly……secondly with 一来……二来……',
      pattern: '一来……，二来……',
      explanation_vi: '一来……二来…… liệt kê hai lý do song song.',
      explanation_en: '一来……二来…… lists two parallel reasons.',
      examples: [
        { zh: '我不去，一来没时间，二来没兴趣。', py: 'Wǒ bú qù, yīlái méi shíjiān, èrlái méi xìngqù.', vi: 'Tôi không đi, một là không có thời gian, hai là không hứng thú.', en: 'I\'m not going: first, no time; second, no interest.' },
        { zh: '走路上班，一来锻炼身体，二来节约钱。', py: 'Zǒulù shàngbān, yīlái duànliàn shēntǐ, èrlái jiéyuē qián.', vi: 'Đi bộ đi làm, một là rèn sức khỏe, hai là tiết kiệm tiền.', en: 'Walking to work: first, it\'s exercise; second, it saves money.' }
      ]
    },
    {
      id: 'g6_05', name_vi: 'Tóm lại với 总而言之', name_en: 'In short with 总而言之',
      pattern: '总而言之，……',
      explanation_vi: '总而言之 dùng để tổng kết, khái quát lại điều đã nói (tóm lại).',
      explanation_en: '总而言之 sums up what was said (in short).',
      examples: [
        { zh: '总而言之，这是一次成功的合作。', py: 'Zǒng\'éryánzhī, zhè shì yí cì chénggōng de hézuò.', vi: 'Tóm lại, đây là một lần hợp tác thành công.', en: 'In short, this was a successful collaboration.' },
        { zh: '总而言之，我们必须团结起来。', py: 'Zǒng\'éryánzhī, wǒmen bìxū tuánjié qǐlái.', vi: 'Tóm lại, chúng ta phải đoàn kết lại.', en: 'In a word, we must unite.' }
      ]
    },
    {
      id: 'g6_06', name_vi: 'Không chỉ với 不止', name_en: 'More than with 不止',
      pattern: '不止 + Số lượng/Phạm vi',
      explanation_vi: '不止 biểu thị vượt quá một con số hay phạm vi (không chỉ, hơn).',
      explanation_en: '不止 means exceeding a number or scope (more than, not just).',
      examples: [
        { zh: '这种情况不止一次发生了。', py: 'Zhè zhǒng qíngkuàng bùzhǐ yí cì fāshēng le.', vi: 'Tình huống này đã xảy ra không chỉ một lần.', en: 'This has happened more than once.' },
        { zh: '来的人不止一百个。', py: 'Lái de rén bùzhǐ yìbǎi gè.', vi: 'Người đến không chỉ một trăm.', en: 'More than a hundred people came.' }
      ]
    },
    {
      id: 'g6_07', name_vi: 'Xét về với 鉴于', name_en: 'In view of with 鉴于',
      pattern: '鉴于 + Tình hình，……',
      explanation_vi: '鉴于 nêu căn cứ, lý do để đi đến kết luận (xét/căn cứ vào). Văn phong trang trọng.',
      explanation_en: '鉴于 states the basis for a conclusion (in view of). Formal register.',
      examples: [
        { zh: '鉴于天气原因，比赛推迟了。', py: 'Jiànyú tiānqì yuányīn, bǐsài tuīchí le.', vi: 'Do nguyên nhân thời tiết, trận đấu hoãn lại.', en: 'In view of the weather, the match was postponed.' },
        { zh: '鉴于他的出色表现，公司决定提升他。', py: 'Jiànyú tā de chūsè biǎoxiàn, gōngsī juédìng tíshēng tā.', vi: 'Xét biểu hiện xuất sắc của anh ấy, công ty quyết định thăng chức.', en: 'In view of his outstanding performance, the company promoted him.' }
      ]
    },
    {
      id: 'g6_08', name_vi: 'Nói là……chi bằng…… với 与其说……不如说……', name_en: 'Rather than saying with 与其说……不如说……',
      pattern: '与其说 + A，不如说 + B',
      explanation_vi: '与其说……不如说…… điều chỉnh cách diễn đạt, cho rằng B chính xác hơn A.',
      explanation_en: '与其说……不如说…… reframes a statement, suggesting B describes it better than A.',
      examples: [
        { zh: '与其说他聪明，不如说他努力。', py: 'Yǔqí shuō tā cōngmíng, bùrú shuō tā nǔlì.', vi: 'Nói anh ấy thông minh chi bằng nói anh ấy chăm chỉ.', en: 'Rather than calling him smart, call him hardworking.' },
        { zh: '这与其说是失败，不如说是经验。', py: 'Zhè yǔqí shuō shì shībài, bùrú shuō shì jīngyàn.', vi: 'Cái này nói là thất bại chi bằng nói là kinh nghiệm.', en: 'Rather than a failure, call this experience.' }
      ]
    }
  ]
};
