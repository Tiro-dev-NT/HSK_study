// ═══════════════════════════════════════════════════════
// DATA/READINGS.JS — Reading passages HSK 1-2
// ═══════════════════════════════════════════════════════

var READINGS_DATA = {
  1: [
    {
      id: 'r1_01', title_vi: 'Giới thiệu bản thân', title_en: 'Self Introduction',
      text: '你好！我叫小明。我是中国人。我今年二十岁。我是学生。我在北京大学学习。我喜欢看书和听音乐。',
      pinyin: 'Nǐ hǎo! Wǒ jiào Xiǎo Míng. Wǒ shì Zhōngguó rén. Wǒ jīnnián èrshí suì. Wǒ shì xuéshēng. Wǒ zài Běijīng Dàxué xuéxí. Wǒ xǐhuān kàn shū hé tīng yīnyuè.',
      questions: [
        { q_vi: 'Tiểu Minh bao nhiêu tuổi?', q_en: 'How old is Xiao Ming?', options: ['18', '20', '22', '25'], answer: 1 },
        { q_vi: 'Tiểu Minh thích làm gì?', q_en: 'What does Xiao Ming like?', options: ['看电视', '看书和听音乐', '打球', '睡觉'], answer: 1 }
      ]
    },
    {
      id: 'r1_02', title_vi: 'Gia đình tôi', title_en: 'My Family',
      text: '我家有四口人：爸爸、妈妈、姐姐和我。爸爸是医生，妈妈是老师。姐姐在上海工作。我们都很好。',
      pinyin: 'Wǒ jiā yǒu sì kǒu rén: bàba, māma, jiějie hé wǒ. Bàba shì yīshēng, māma shì lǎoshī. Jiějie zài Shànghǎi gōngzuò. Wǒmen dōu hěn hǎo.',
      questions: [
        { q_vi: 'Gia đình có mấy người?', q_en: 'How many people in the family?', options: ['3', '4', '5', '6'], answer: 1 },
        { q_vi: 'Bố làm nghề gì?', q_en: "What is the father's job?", options: ['老师', '医生', '学生', '工人'], answer: 1 }
      ]
    },
    {
      id: 'r1_03', title_vi: 'Thời tiết hôm nay', title_en: "Today's Weather",
      text: '今天天气很好。不冷也不热。我和朋友去公园了。公园里有很多人。我们很高兴。',
      pinyin: 'Jīntiān tiānqì hěn hǎo. Bù lěng yě bú rè. Wǒ hé péngyǒu qù gōngyuán le. Gōngyuán lǐ yǒu hěn duō rén. Wǒmen hěn gāoxìng.',
      questions: [
        { q_vi: 'Thời tiết hôm nay thế nào?', q_en: "How's the weather today?", options: ['很冷', '很热', '很好', '下雨'], answer: 2 },
        { q_vi: 'Họ đi đâu?', q_en: 'Where did they go?', options: ['学校', '商店', '公园', '医院'], answer: 2 }
      ]
    },
    {
      id: 'r1_04', title_vi: 'Đi mua sắm', title_en: 'Going Shopping',
      text: '星期六我去商店买东西。我买了一些水果和一本书。水果很好吃。书很有意思。我花了五十块钱。',
      pinyin: 'Xīngqīliù wǒ qù shāngdiàn mǎi dōngxī. Wǒ mǎi le yìxiē shuǐguǒ hé yì běn shū. Shuǐguǒ hěn hǎochī. Shū hěn yǒu yìsi. Wǒ huā le wǔshí kuài qián.',
      questions: [
        { q_vi: 'Mua gì ở cửa hàng?', q_en: 'What was bought?', options: ['衣服', '水果和书', '电脑', '手机'], answer: 1 },
        { q_vi: 'Tiêu bao nhiêu tiền?', q_en: 'How much was spent?', options: ['30块', '40块', '50块', '60块'], answer: 2 }
      ]
    },
    {
      id: 'r1_05', title_vi: 'Một ngày của tôi', title_en: 'My Day',
      text: '我每天六点起床。七点吃早饭。八点去学校。下午四点回家。晚上看书，十点睡觉。',
      pinyin: 'Wǒ měitiān liù diǎn qǐchuáng. Qī diǎn chī zǎofàn. Bā diǎn qù xuéxiào. Xiàwǔ sì diǎn huí jiā. Wǎnshàng kàn shū, shí diǎn shuìjiào.',
      questions: [
        { q_vi: 'Mấy giờ dậy?', q_en: 'What time to wake up?', options: ['5点', '6点', '7点', '8点'], answer: 1 },
        { q_vi: 'Mấy giờ đi ngủ?', q_en: 'What time to sleep?', options: ['9点', '10点', '11点', '12点'], answer: 1 }
      ]
    },
    {
      id: 'r1_06', title_vi: 'Ở nhà hàng', title_en: 'At the Restaurant',
      text: '今天中午我和同学去饭馆吃饭。我点了米饭和一个菜。同学喝了茶。饭菜很好吃。我们吃得很高兴。',
      pinyin: 'Jīntiān zhōngwǔ wǒ hé tóngxué qù fànguǎn chīfàn. Wǒ diǎn le mǐfàn hé yí gè cài. Tóngxué hē le chá. Fàncài hěn hǎochī. Wǒmen chī de hěn gāoxìng.',
      questions: [
        { q_vi: 'Đi ăn với ai?', q_en: 'Who went to eat with?', options: ['朋友', '同学', '家人', '老师'], answer: 1 },
        { q_vi: 'Bạn học uống gì?', q_en: 'What did the classmate drink?', options: ['水', '茶', '咖啡', '果汁'], answer: 1 }
      ]
    },
    {
      id: 'r1_07', title_vi: 'Học tiếng Trung', title_en: 'Learning Chinese',
      text: '我学习中文一年了。中文很有意思，但是汉字很难。我每天写汉字。我的老师说我写得很好。我很高兴。',
      pinyin: 'Wǒ xuéxí Zhōngwén yì nián le. Zhōngwén hěn yǒu yìsi, dànshì hànzì hěn nán. Wǒ měitiān xiě hànzì. Wǒ de lǎoshī shuō wǒ xiě de hěn hǎo. Wǒ hěn gāoxìng.',
      questions: [
        { q_vi: 'Học tiếng Trung bao lâu?', q_en: 'How long studying Chinese?', options: ['半年', '一年', '两年', '三年'], answer: 1 },
        { q_vi: 'Cái gì khó?', q_en: 'What is difficult?', options: ['说话', '听', '汉字', '语法'], answer: 2 }
      ]
    },
    {
      id: 'r1_08', title_vi: 'Sở thích', title_en: 'Hobbies',
      text: '我有很多爱好。我喜欢打篮球、看电影和做饭。星期天我在家做饭。我做的菜很好吃。我的朋友都喜欢吃。',
      pinyin: 'Wǒ yǒu hěn duō àihào. Wǒ xǐhuān dǎ lánqiú, kàn diànyǐng hé zuòfàn. Xīngqītiān wǒ zài jiā zuòfàn. Wǒ zuò de cài hěn hǎochī. Wǒ de péngyǒu dōu xǐhuān chī.',
      questions: [
        { q_vi: 'Không phải sở thích?', q_en: 'Which is NOT a hobby?', options: ['打篮球', '看电影', '做饭', '唱歌'], answer: 3 },
        { q_vi: 'Khi nào nấu ăn ở nhà?', q_en: 'When cook at home?', options: ['星期六', '星期天', '每天', '星期五'], answer: 1 }
      ]
    },
    {
      id: 'r1_09', title_vi: 'Đi xe buýt', title_en: 'Taking the Bus',
      text: '我每天坐公共汽车去上班。从我家到公司要三十分钟。车上人很多。我喜欢听音乐。今天车来得很快。',
      pinyin: 'Wǒ měitiān zuò gōnggòng qìchē qù shàngbān. Cóng wǒ jiā dào gōngsī yào sānshí fēnzhōng. Chē shàng rén hěn duō. Wǒ xǐhuān tīng yīnyuè. Jīntiān chē lái de hěn kuài.',
      questions: [
        { q_vi: 'Đi làm mất bao lâu?', q_en: 'How long to get to work?', options: ['20分钟', '30分钟', '40分钟', '50分钟'], answer: 1 },
        { q_vi: 'Trên xe thích làm gì?', q_en: 'What to do on the bus?', options: ['看书', '睡觉', '听音乐', '说话'], answer: 2 }
      ]
    },
    {
      id: 'r1_10', title_vi: 'Gọi điện thoại', title_en: 'Phone Call',
      text: '昨天晚上妈妈给我打电话了。她问我吃饭了没有。我说吃了。她说下个星期来看我。我很高兴。我想妈妈了。',
      pinyin: 'Zuótiān wǎnshàng māma gěi wǒ dǎ diànhuà le. Tā wèn wǒ chīfàn le méiyǒu. Wǒ shuō chī le. Tā shuō xià ge xīngqī lái kàn wǒ. Wǒ hěn gāoxìng. Wǒ xiǎng māma le.',
      questions: [
        { q_vi: 'Ai gọi điện?', q_en: 'Who called?', options: ['爸爸', '妈妈', '姐姐', '朋友'], answer: 1 },
        { q_vi: 'Mẹ sẽ đến khi nào?', q_en: 'When will mom visit?', options: ['明天', '这个星期', '下个星期', '下个月'], answer: 2 }
      ]
    }
  ],
  2: [
    {
      id: 'r2_01', title_vi: 'Du lịch Bắc Kinh', title_en: 'Traveling to Beijing',
      text: '去年夏天我去北京旅游了。北京比我想的大多了。我去了长城，爬了三个小时。虽然很累，但是风景非常漂亮。我还吃了北京烤鸭，真好吃！',
      pinyin: 'Qùnián xiàtiān wǒ qù Běijīng lǚyóu le. Běijīng bǐ wǒ xiǎng de dà duō le. Wǒ qù le Chángchéng, pá le sān ge xiǎoshí. Suīrán hěn lèi, dànshì fēngjǐng fēicháng piàoliang. Wǒ hái chī le Běijīng kǎoyā, zhēn hǎochī!',
      questions: [
        { q_vi: 'Đi du lịch khi nào?', q_en: 'When was the trip?', options: ['今年春天', '去年夏天', '去年冬天', '今年秋天'], answer: 1 },
        { q_vi: 'Leo Vạn Lý Trường Thành mất bao lâu?', q_en: 'How long climbing the Great Wall?', options: ['1小时', '2小时', '3小时', '4小时'], answer: 2 }
      ]
    },
    {
      id: 'r2_02', title_vi: 'Tìm việc làm', title_en: 'Job Hunting',
      text: '我大学毕业以后，找了三个月的工作。因为没有经验，所以很难找到好工作。后来一个朋友介绍我去一家公司面试。面试的时候我很紧张，但是结果很好，我被录用了！',
      pinyin: 'Wǒ dàxué bìyè yǐhòu, zhǎo le sān ge yuè de gōngzuò. Yīnwèi méiyǒu jīngyàn, suǒyǐ hěn nán zhǎodào hǎo gōngzuò. Hòulái yí ge péngyǒu jièshào wǒ qù yì jiā gōngsī miànshì. Miànshì de shíhòu wǒ hěn jǐnzhāng, dànshì jiéguǒ hěn hǎo, wǒ bèi lùyòng le!',
      questions: [
        { q_vi: 'Tìm việc bao lâu?', q_en: 'How long job hunting?', options: ['1个月', '2个月', '3个月', '半年'], answer: 2 },
        { q_vi: 'Ai giới thiệu công việc?', q_en: 'Who introduced the job?', options: ['老师', '家人', '朋友', '同学'], answer: 2 }
      ]
    },
    {
      id: 'r2_03', title_vi: 'Tập thể dục', title_en: 'Exercise',
      text: '以前我不喜欢运动，越来越胖了。医生说我应该每天锻炼。现在我每天早上跑步半个小时。虽然一开始很难，但是现在我已经习惯了。我比以前瘦了五公斤。',
      pinyin: 'Yǐqián wǒ bù xǐhuān yùndòng, yuèláiyuè pàng le. Yīshēng shuō wǒ yīnggāi měitiān duànliàn. Xiànzài wǒ měitiān zǎoshàng pǎobù bàn ge xiǎoshí. Suīrán yì kāishǐ hěn nán, dànshì xiànzài wǒ yǐjīng xíguàn le. Wǒ bǐ yǐqián shòu le wǔ gōngjīn.',
      questions: [
        { q_vi: 'Ai khuyên tập thể dục?', q_en: 'Who advised to exercise?', options: ['朋友', '家人', '医生', '老师'], answer: 2 },
        { q_vi: 'Giảm bao nhiêu cân?', q_en: 'How much weight lost?', options: ['3公斤', '5公斤', '8公斤', '10公斤'], answer: 1 }
      ]
    },
    {
      id: 'r2_04', title_vi: 'Nuôi thú cưng', title_en: 'Keeping a Pet',
      text: '我养了一只小猫，它叫花花。花花已经两岁了。它非常可爱，每天都跟着我。如果我不在家，它就一直叫。我把它当作我的家人。',
      pinyin: 'Wǒ yǎng le yì zhī xiǎo māo, tā jiào Huāhua. Huāhua yǐjīng liǎng suì le. Tā fēicháng kě\'ài, měitiān dōu gēnzhe wǒ. Rúguǒ wǒ bú zài jiā, tā jiù yìzhí jiào. Wǒ bǎ tā dàngzuò wǒ de jiārén.',
      questions: [
        { q_vi: 'Con mèo tên gì?', q_en: "What's the cat's name?", options: ['小白', '花花', '小黑', '咪咪'], answer: 1 },
        { q_vi: 'Mèo mấy tuổi?', q_en: 'How old is the cat?', options: ['1岁', '2岁', '3岁', '4岁'], answer: 1 }
      ]
    },
    {
      id: 'r2_05', title_vi: 'Mùa đông', title_en: 'Winter',
      text: '北方的冬天比南方冷得多。外面的温度已经到了零下十度。虽然很冷，但是我觉得下雪的时候特别漂亮。孩子们都喜欢在雪地里玩。我给他们拍了很多照片。',
      pinyin: 'Běifāng de dōngtiān bǐ nánfāng lěng de duō. Wàimiàn de wēndù yǐjīng dào le líng xià shí dù. Suīrán hěn lěng, dànshì wǒ juéde xià xuě de shíhòu tèbié piàoliang. Háizimen dōu xǐhuān zài xuědì lǐ wán. Wǒ gěi tāmen pāi le hěn duō zhàopiàn.',
      questions: [
        { q_vi: 'Nhiệt độ bao nhiêu?', q_en: 'What is the temperature?', options: ['零下5度', '零下10度', '零下15度', '零下20度'], answer: 1 },
        { q_vi: 'Bọn trẻ thích làm gì?', q_en: 'What do children like to do?', options: ['看电视', '在雪地里玩', '睡觉', '吃东西'], answer: 1 }
      ]
    },
    {
      id: 'r2_06', title_vi: 'Học nấu ăn', title_en: 'Learning to Cook',
      text: '我决定学做中国菜。我在网上看了很多视频，然后自己试着做。第一次做的时候，把菜烧糊了。但是我没有放弃，越做越好了。现在我已经会做十几个菜了。',
      pinyin: 'Wǒ juédìng xué zuò Zhōngguó cài. Wǒ zài wǎngshàng kàn le hěn duō shìpín, ránhòu zìjǐ shìzhe zuò. Dì yī cì zuò de shíhòu, bǎ cài shāo hú le. Dànshì wǒ méiyǒu fàngqì, yuè zuò yuè hǎo le. Xiànzài wǒ yǐjīng huì zuò shí jǐ ge cài le.',
      questions: [
        { q_vi: 'Học nấu ăn ở đâu?', q_en: 'Where to learn cooking?', options: ['学校', '网上', '朋友家', '饭馆'], answer: 1 },
        { q_vi: 'Bây giờ nấu được mấy món?', q_en: 'How many dishes can cook now?', options: ['5个', '十几个', '20个', '30个'], answer: 1 }
      ]
    },
    {
      id: 'r2_07', title_vi: 'Chuyển nhà', title_en: 'Moving House',
      text: '因为工作的原因，我要搬到上海去。虽然我很舍不得离开朋友们，但是新工作的机会很好。我已经在上海找到了一个小房子。房租比北京便宜一点。希望我能快点适应新生活。',
      pinyin: 'Yīnwèi gōngzuò de yuányīn, wǒ yào bān dào Shànghǎi qù. Suīrán wǒ hěn shěbude líkāi péngyǒumen, dànshì xīn gōngzuò de jīhuì hěn hǎo. Wǒ yǐjīng zài Shànghǎi zhǎodào le yí ge xiǎo fángzi. Fángzū bǐ Běijīng piányi yìdiǎn. Xīwàng wǒ néng kuài diǎn shìyìng xīn shēnghuó.',
      questions: [
        { q_vi: 'Tại sao chuyển nhà?', q_en: 'Why moving?', options: ['上学', '工作', '家人', '天气'], answer: 1 },
        { q_vi: 'Tiền thuê nhà thế nào?', q_en: 'How is the rent?', options: ['比北京贵', '比北京便宜', '一样', '很贵'], answer: 1 }
      ]
    },
    {
      id: 'r2_08', title_vi: 'Sinh nhật bạn', title_en: "Friend's Birthday",
      text: '上个星期是我好朋友的生日。我给她买了一条围巾当礼物。她收到以后非常高兴。我们一起去了一家很好的餐厅吃饭。她说这是她过得最开心的生日。',
      pinyin: 'Shàng ge xīngqī shì wǒ hǎo péngyǒu de shēngrì. Wǒ gěi tā mǎi le yì tiáo wéijīn dāng lǐwù. Tā shōudào yǐhòu fēicháng gāoxìng. Wǒmen yìqǐ qù le yì jiā hěn hǎo de cāntīng chīfàn. Tā shuō zhè shì tā guò de zuì kāixīn de shēngrì.',
      questions: [
        { q_vi: 'Mua quà gì?', q_en: 'What gift was bought?', options: ['书', '围巾', '花', '蛋糕'], answer: 1 },
        { q_vi: 'Đi đâu ăn?', q_en: 'Where to eat?', options: ['家里', '学校', '餐厅', '公园'], answer: 2 }
      ]
    },
    {
      id: 'r2_09', title_vi: 'Đi khám bệnh', title_en: 'Seeing a Doctor',
      text: '昨天我感冒了，头疼得很厉害。我去医院看了医生。医生给我开了一些药，让我多喝水，多休息。他说如果明天还不好就再来。今天我吃了药，已经好多了。',
      pinyin: 'Zuótiān wǒ gǎnmào le, tóu téng de hěn lìhài. Wǒ qù yīyuàn kàn le yīshēng. Yīshēng gěi wǒ kāi le yìxiē yào, ràng wǒ duō hē shuǐ, duō xiūxi. Tā shuō rúguǒ míngtiān hái bù hǎo jiù zài lái. Jīntiān wǒ chī le yào, yǐjīng hǎo duō le.',
      questions: [
        { q_vi: 'Bị bệnh gì?', q_en: 'What illness?', options: ['发烧', '感冒', '肚子疼', '咳嗽'], answer: 1 },
        { q_vi: 'Bác sĩ dặn gì?', q_en: 'What did the doctor say?', options: ['多运动', '多喝水多休息', '不要吃药', '去别的医院'], answer: 1 }
      ]
    },
    {
      id: 'r2_10', title_vi: 'Mua sắm online', title_en: 'Online Shopping',
      text: '现在越来越多的人喜欢在网上买东西。因为网上的东西比商店便宜，而且不用出门。但是有时候买到的东西跟图片不一样。所以我觉得买衣服还是去商店比较好。',
      pinyin: 'Xiànzài yuèláiyuè duō de rén xǐhuān zài wǎngshàng mǎi dōngxī. Yīnwèi wǎngshàng de dōngxī bǐ shāngdiàn piányi, érqiě bú yòng chūmén. Dànshì yǒu shíhòu mǎi dào de dōngxī gēn túpiàn bù yíyàng. Suǒyǐ wǒ juéde mǎi yīfú háishì qù shāngdiàn bǐjiào hǎo.',
      questions: [
        { q_vi: 'Tại sao thích mua online?', q_en: 'Why like online shopping?', options: ['东西多', '便宜不用出门', '质量好', '送货快'], answer: 1 },
        { q_vi: 'Mua gì nên đi cửa hàng?', q_en: 'What should buy in store?', options: ['书', '水果', '衣服', '电子产品'], answer: 2 }
      ]
    }
  ]
};
