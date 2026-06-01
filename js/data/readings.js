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
  ],
  3: [
    {
      id: 'r3_01', title_vi: 'Kế hoạch cuối tuần', title_en: 'Weekend Plan',
      text: '这个周末我打算去爬山。我已经跟两个朋友说好了。我们星期六早上八点出发。听说山上的风景特别美，还可以看到日出。虽然爬山有点累，但是对身体很好。我希望那天天气晴朗。',
      pinyin: 'Zhège zhōumò wǒ dǎsuàn qù páshān. Wǒ yǐjīng gēn liǎng ge péngyǒu shuōhǎo le. Wǒmen xīngqīliù zǎoshang bā diǎn chūfā. Tīngshuō shān shàng de fēngjǐng tèbié měi, hái kěyǐ kàndào rìchū. Suīrán páshān yǒudiǎn lèi, dànshì duì shēntǐ hěn hǎo. Wǒ xīwàng nà tiān tiānqì qínglǎng.',
      questions: [
        { q_vi: 'Cuối tuần định làm gì?', q_en: 'What is planned for the weekend?', options: ['看电影', '爬山', '买东西', '学习'], answer: 1 },
        { q_vi: 'Họ xuất phát lúc mấy giờ?', q_en: 'What time do they set off?', options: ['七点', '八点', '九点', '十点'], answer: 1 }
      ]
    },
    {
      id: 'r3_02', title_vi: 'Bạn cùng phòng', title_en: 'My Roommate',
      text: '我的同屋叫李明，他是个很有意思的人。他特别喜欢做饭，每天都给我们做好吃的菜。除了做饭以外，他还会弹吉他。我们住在一起一年了，从来没有吵过架。我觉得能有这样的同屋很幸运。',
      pinyin: 'Wǒ de tóngwū jiào Lǐ Míng, tā shì ge hěn yǒuyìsi de rén. Tā tèbié xǐhuan zuòfàn, měitiān dōu gěi wǒmen zuò hǎochī de cài. Chúle zuòfàn yǐwài, tā hái huì tán jítā. Wǒmen zhù zài yìqǐ yì nián le, cónglái méiyǒu chǎoguò jià. Wǒ juéde néng yǒu zhèyàng de tóngwū hěn xìngyùn.',
      questions: [
        { q_vi: 'Bạn cùng phòng có sở thích gì?', q_en: "What are the roommate's hobbies?", options: ['做饭和弹吉他', '画画', '跳舞', '打篮球'], answer: 0 },
        { q_vi: 'Họ ở cùng nhau bao lâu rồi?', q_en: 'How long have they lived together?', options: ['半年', '一年', '两年', '三年'], answer: 1 }
      ]
    },
    {
      id: 'r3_03', title_vi: 'Học lái xe', title_en: 'Learning to Drive',
      text: '上个月我开始学开车。一开始我很紧张，手一直出汗。教练很有耐心，他告诉我别着急，慢慢来。练习了几次以后，我越来越有信心了。昨天我第一次自己开车上路，虽然开得很慢，但是很安全。',
      pinyin: 'Shàng ge yuè wǒ kāishǐ xué kāichē. Yì kāishǐ wǒ hěn jǐnzhāng, shǒu yìzhí chūhàn. Jiàoliàn hěn yǒu nàixīn, tā gàosu wǒ bié zháojí, mànman lái. Liànxí le jǐ cì yǐhòu, wǒ yuèláiyuè yǒu xìnxīn le. Zuótiān wǒ dì-yī cì zìjǐ kāichē shànglù, suīrán kāi de hěn màn, dànshì hěn ānquán.',
      questions: [
        { q_vi: 'Lúc đầu học lái xe cảm thấy thế nào?', q_en: 'How did it feel at first?', options: ['很轻松', '很紧张', '很高兴', '很无聊'], answer: 1 },
        { q_vi: 'Huấn luyện viên là người thế nào?', q_en: 'What is the instructor like?', options: ['很严厉', '没耐心', '很有耐心', '很忙'], answer: 2 }
      ]
    },
    {
      id: 'r3_04', title_vi: 'Thói quen lành mạnh', title_en: 'Healthy Habits',
      text: '为了身体健康，我改变了很多习惯。以前我常常熬夜，现在我每天十一点以前就睡觉。我也开始注意饮食，少吃甜的东西，多吃水果和蔬菜。除此以外，我每周还去三次健身房。这样坚持了三个月，我觉得自己比以前精神多了。',
      pinyin: 'Wèile shēntǐ jiànkāng, wǒ gǎibiàn le hěn duō xíguàn. Yǐqián wǒ chángcháng áoyè, xiànzài wǒ měitiān shíyī diǎn yǐqián jiù shuìjiào. Wǒ yě kāishǐ zhùyì yǐnshí, shǎo chī tián de dōngxi, duō chī shuǐguǒ hé shūcài. Chúcǐ yǐwài, wǒ měi zhōu hái qù sān cì jiànshēnfáng. Zhèyàng jiānchí le sān ge yuè, wǒ juéde zìjǐ bǐ yǐqián jīngshén duō le.',
      questions: [
        { q_vi: 'Bây giờ anh ấy ngủ trước mấy giờ?', q_en: 'Before what time does he sleep now?', options: ['十点', '十一点', '十二点', '一点'], answer: 1 },
        { q_vi: 'Mỗi tuần đến phòng gym mấy lần?', q_en: 'How many times a week at the gym?', options: ['一次', '两次', '三次', '四次'], answer: 2 }
      ]
    },
    {
      id: 'r3_05', title_vi: 'Chuyến đi khó quên', title_en: 'A Memorable Trip',
      text: '去年寒假，我和家人去了云南旅游。那里的天气很舒服，不冷也不热。我们参观了很多有名的地方，还认识了一些当地的朋友。云南的米线特别好吃，我一连吃了好几碗。这次旅行让我们全家都很开心，到现在还常常想起。',
      pinyin: 'Qùnián hánjià, wǒ hé jiārén qù le Yúnnán lǚyóu. Nàlǐ de tiānqì hěn shūfu, bù lěng yě bú rè. Wǒmen cānguān le hěn duō yǒumíng de dìfang, hái rènshi le yìxiē dāngdì de péngyǒu. Yúnnán de mǐxiàn tèbié hǎochī, wǒ yìlián chī le hǎojǐ wǎn. Zhè cì lǚxíng ràng wǒmen quánjiā dōu hěn kāixīn, dào xiànzài hái chángcháng xiǎngqǐ.',
      questions: [
        { q_vi: 'Họ đi du lịch ở đâu?', q_en: 'Where did they travel?', options: ['北京', '云南', '上海', '广州'], answer: 1 },
        { q_vi: 'Món gì ở đó đặc biệt ngon?', q_en: 'What food there was especially tasty?', options: ['烤鸭', '米线', '饺子', '面包'], answer: 1 }
      ]
    },
    {
      id: 'r3_06', title_vi: 'Mượn sách ở thư viện', title_en: 'Borrowing Books',
      text: '我家附近有一个图书馆，我经常去那里看书。图书馆又安静又舒服，是学习的好地方。办了借书证以后，每次可以借五本书，最多借一个月。要是看不完，还可以在网上续借。我觉得多看书不但能学到知识，而且能让人更快乐。',
      pinyin: 'Wǒ jiā fùjìn yǒu yí ge túshūguǎn, wǒ jīngcháng qù nàlǐ kàn shū. Túshūguǎn yòu ānjìng yòu shūfu, shì xuéxí de hǎo dìfang. Bàn le jièshūzhèng yǐhòu, měi cì kěyǐ jiè wǔ běn shū, zuìduō jiè yí ge yuè. Yàoshi kàn bù wán, hái kěyǐ zài wǎngshàng xùjiè. Wǒ juéde duō kàn shū búdàn néng xuédào zhīshi, érqiě néng ràng rén gèng kuàilè.',
      questions: [
        { q_vi: 'Mỗi lần mượn được mấy quyển sách?', q_en: 'How many books can be borrowed each time?', options: ['三本', '五本', '十本', '八本'], answer: 1 },
        { q_vi: 'Đọc không hết thì làm thế nào?', q_en: "What if you can't finish reading?", options: ['再买一本', '在网上续借', '不还了', '找朋友'], answer: 1 }
      ]
    }
  ],
  4: [
    {
      id: 'r4_01', title_vi: 'Lựa chọn công việc', title_en: 'Choosing a Job',
      text: '大学毕业的时候，我同时收到了两家公司的录用通知。一家公司工资比较高，但是离家很远；另一家公司工资一般，可是工作内容更有意思。经过几天的考虑，我最后选择了后者。我觉得对年轻人来说，能不能学到东西比工资更重要。',
      pinyin: 'Dàxué bìyè de shíhou, wǒ tóngshí shōudào le liǎng jiā gōngsī de lùyòng tōngzhī. Yì jiā gōngsī gōngzī bǐjiào gāo, dànshì lí jiā hěn yuǎn; lìng yì jiā gōngsī gōngzī yìbān, kěshì gōngzuò nèiróng gèng yǒuyìsi. Jīngguò jǐ tiān de kǎolǜ, wǒ zuìhòu xuǎnzé le hòuzhě. Wǒ juéde duì niánqīngrén lái shuō, néng bu néng xuédào dōngxi bǐ gōngzī gèng zhòngyào.',
      questions: [
        { q_vi: 'Cuối cùng chọn công ty nào?', q_en: 'Which company was chosen?', options: ['工资高的', '工作有意思的', '离家近的', '大公司'], answer: 1 },
        { q_vi: 'Anh ấy cho rằng điều gì quan trọng nhất với người trẻ?', q_en: 'What matters most for young people?', options: ['工资', '能学到东西', '离家近', '公司大小'], answer: 1 }
      ]
    },
    {
      id: 'r4_02', title_vi: 'Sức mạnh của thói quen', title_en: 'The Power of Habit',
      text: '很多人认为成功需要天才，其实习惯的力量更大。无论做什么事，只要每天坚持一点，时间长了就会有惊人的效果。比如每天读十页书，一年就能读完十几本。相反，如果总是三天打鱼两天晒网，再聪明也很难取得成绩。',
      pinyin: 'Hěn duō rén rènwéi chénggōng xūyào tiāncái, qíshí xíguàn de lìliàng gèng dà. Wúlùn zuò shénme shì, zhǐyào měitiān jiānchí yìdiǎn, shíjiān cháng le jiù huì yǒu jīngrén de xiàoguǒ. Bǐrú měitiān dú shí yè shū, yì nián jiù néng dúwán shí jǐ běn. Xiāngfǎn, rúguǒ zǒngshì sān tiān dǎ yú liǎng tiān shài wǎng, zài cōngmíng yě hěn nán qǔdé chéngjì.',
      questions: [
        { q_vi: 'Tác giả cho rằng thành công cần gì hơn?', q_en: 'What does success need more?', options: ['天才', '运气', '习惯', '金钱'], answer: 2 },
        { q_vi: 'Mỗi ngày đọc 10 trang, một năm đọc được khoảng bao nhiêu quyển?', q_en: 'Reading 10 pages daily, how many books a year?', options: ['五本', '十几本', '五十本', '一百本'], answer: 1 }
      ]
    },
    {
      id: 'r4_03', title_vi: 'Giữa bạn bè với nhau', title_en: 'Between Friends',
      text: '朋友之间互相帮助是应该的，但是在借钱这件事上要特别小心。有时候因为一笔钱，多年的友谊就没有了。所以借钱的时候最好说清楚什么时候还，借出去的时候也要做好可能拿不回来的准备。真正的好朋友，不会因为钱的问题而影响感情。',
      pinyin: 'Péngyǒu zhījiān hùxiāng bāngzhù shì yīnggāi de, dànshì zài jièqián zhè jiàn shì shàng yào tèbié xiǎoxīn. Yǒu shíhou yīnwèi yì bǐ qián, duō nián de yǒuyì jiù méiyǒu le. Suǒyǐ jièqián de shíhou zuìhǎo shuō qīngchu shénme shíhou huán, jiè chūqù de shíhou yě yào zuòhǎo kěnéng ná bù huílái de zhǔnbèi. Zhēnzhèng de hǎo péngyǒu, búhuì yīnwèi qián de wèntí ér yǐngxiǎng gǎnqíng.',
      questions: [
        { q_vi: 'Khi cho mượn tiền nên làm gì?', q_en: 'What to do when lending money?', options: ['不用还', '说清楚什么时候还', '不告诉别人', '马上还'], answer: 1 },
        { q_vi: 'Đoạn này chủ yếu nói gì?', q_en: 'What is this mainly about?', options: ['怎么赚钱', '朋友借钱要小心', '怎么交朋友', '友谊的意义'], answer: 1 }
      ]
    },
    {
      id: 'r4_04', title_vi: 'Thành phố và nông thôn', title_en: 'City and Countryside',
      text: '现在越来越多的年轻人离开农村，到大城市去工作和生活。大城市机会多，生活也方便，但是压力大，房子也很贵。农村虽然安静，空气好，可是工作机会比较少。其实无论住在哪里，关键是找到适合自己的生活方式。',
      pinyin: 'Xiànzài yuèláiyuè duō de niánqīngrén líkāi nóngcūn, dào dà chéngshì qù gōngzuò hé shēnghuó. Dà chéngshì jīhuì duō, shēnghuó yě fāngbiàn, dànshì yālì dà, fángzi yě hěn guì. Nóngcūn suīrán ānjìng, kōngqì hǎo, kěshì gōngzuò jīhuì bǐjiào shǎo. Qíshí wúlùn zhù zài nǎlǐ, guānjiàn shì zhǎodào shìhé zìjǐ de shēnghuó fāngshì.',
      questions: [
        { q_vi: 'Thành phố lớn có nhược điểm gì?', q_en: 'What is the downside of big cities?', options: ['空气好', '压力大房子贵', '太安静', '机会少'], answer: 1 },
        { q_vi: 'Tác giả cho rằng điều then chốt là gì?', q_en: 'What is the key according to the author?', options: ['住大城市', '住农村', '找到适合自己的生活方式', '多赚钱'], answer: 2 }
      ]
    },
    {
      id: 'r4_05', title_vi: 'Thất bại và thành công', title_en: 'Failure and Success',
      text: '没有人喜欢失败，但是失败并不可怕。很多有名的人都经历过无数次失败，正是这些失败让他们变得更强。重要的不是有没有失败，而是失败以后能不能站起来。即使跌倒一百次，只要第一百零一次能站起来，就还有成功的希望。',
      pinyin: 'Méiyǒu rén xǐhuan shībài, dànshì shībài bìng bù kěpà. Hěn duō yǒumíng de rén dōu jīnglì guò wúshù cì shībài, zhèng shì zhèxiē shībài ràng tāmen biàn de gèng qiáng. Zhòngyào de bú shì yǒu méiyǒu shībài, ér shì shībài yǐhòu néng bu néng zhàn qǐlái. Jíshǐ diēdǎo yìbǎi cì, zhǐyào dì-yìbǎi líng yī cì néng zhàn qǐlái, jiù hái yǒu chénggōng de xīwàng.',
      questions: [
        { q_vi: 'Tác giả cho rằng điều quan trọng là gì?', q_en: 'What matters according to the author?', options: ['不失败', '失败后能站起来', '聪明', '运气好'], answer: 1 },
        { q_vi: 'Đoạn này muốn nói với ta điều gì?', q_en: 'What is the message?', options: ['失败很可怕', '不要努力', '失败后要坚持', '成功靠运气'], answer: 2 }
      ]
    }
  ],
  5: [
    {
      id: 'r5_01', title_vi: 'Quản lý thời gian', title_en: 'Time Management',
      text: '在快节奏的现代社会，时间管理变得越来越重要。很多人觉得自己每天都很忙，却不知道时间花在了哪里。其实，真正高效的人并不是做得更多，而是懂得分清轻重缓急，把有限的精力放在最重要的事情上。学会拒绝那些不必要的事，反而能让我们活得更充实。',
      pinyin: 'Zài kuài jiézòu de xiàndài shèhuì, shíjiān guǎnlǐ biàn de yuèláiyuè zhòngyào. Hěn duō rén juéde zìjǐ měitiān dōu hěn máng, què bù zhīdào shíjiān huā zài le nǎlǐ. Qíshí, zhēnzhèng gāoxiào de rén bìng bú shì zuò de gèng duō, ér shì dǒngde fēnqīng qīngzhòng huǎnjí, bǎ yǒuxiàn de jīnglì fàng zài zuì zhòngyào de shìqing shàng. Xuéhuì jùjué nàxiē bú bìyào de shì, fǎn\'ér néng ràng wǒmen huó de gèng chōngshí.',
      questions: [
        { q_vi: 'Người thật sự hiệu quả có đặc điểm gì?', q_en: 'What defines truly efficient people?', options: ['做得更多', '懂得分清轻重缓急', '工作时间长', '从不休息'], answer: 1 },
        { q_vi: 'Học cách từ chối việc không cần thiết sẽ ra sao?', q_en: 'What does learning to say no bring?', options: ['浪费时间', '活得更充实', '失去朋友', '变得更忙'], answer: 1 }
      ]
    },
    {
      id: 'r5_02', title_vi: 'Ý nghĩa của việc đọc sách', title_en: 'The Meaning of Reading',
      text: '有人问，在网络这么发达的今天，读书还有什么意义？我认为，网络上的信息虽然多，却往往是零散的、表面的。而读一本好书，能够带我们进行深入的思考，走进作者的内心世界。读书不仅是为了获得知识，更是一种与自己对话、让心灵安静下来的方式。',
      pinyin: 'Yǒurén wèn, zài wǎngluò zhème fādá de jīntiān, dúshū hái yǒu shénme yìyì? Wǒ rènwéi, wǎngluò shàng de xìnxī suīrán duō, què wǎngwǎng shì língsǎn de, biǎomiàn de. Ér dú yì běn hǎo shū, nénggòu dài wǒmen jìnxíng shēnrù de sīkǎo, zǒujìn zuòzhě de nèixīn shìjiè. Dúshū bùjǐn shì wèile huòdé zhīshi, gèng shì yì zhǒng yǔ zìjǐ duìhuà, ràng xīnlíng ānjìng xiàlái de fāngshì.',
      questions: [
        { q_vi: 'Tác giả cho rằng thông tin trên mạng có đặc điểm gì?', q_en: 'What is online information like?', options: ['深入的', '零散表面的', '非常准确', '很有意义'], answer: 1 },
        { q_vi: 'Tác giả cho rằng đọc sách còn là một cách gì?', q_en: 'Reading is also a way to do what?', options: ['获得知识', '与自己对话', '浪费时间', '娱乐'], answer: 1 }
      ]
    },
    {
      id: 'r5_03', title_vi: 'Áp lực', title_en: 'Stress',
      text: '适当的压力能够激发一个人的潜力，让他在困难面前发挥出更好的水平。然而，长期处于过大的压力之下，不但会影响工作效率，还可能损害身心健康。因此，学会调节自己的情绪、找到释放压力的方法，是每个现代人都应该掌握的能力。运动、音乐和与朋友聊天，都是不错的选择。',
      pinyin: 'Shìdàng de yālì nénggòu jīfā yí ge rén de qiánlì, ràng tā zài kùnnán miànqián fāhuī chū gèng hǎo de shuǐpíng. Rán\'ér, chángqī chǔyú guò dà de yālì zhīxià, búdàn huì yǐngxiǎng gōngzuò xiàolǜ, hái kěnéng sǔnhài shēnxīn jiànkāng. Yīncǐ, xuéhuì tiáojié zìjǐ de qíngxù, zhǎodào shìfàng yālì de fāngfǎ, shì měi ge xiàndài rén dōu yīnggāi zhǎngwò de nénglì. Yùndòng, yīnyuè hé yǔ péngyǒu liáotiān, dōu shì búcuò de xuǎnzé.',
      questions: [
        { q_vi: 'Áp lực vừa phải có lợi ích gì?', q_en: 'What is the benefit of moderate stress?', options: ['损害健康', '激发潜力', '降低效率', '让人生病'], answer: 1 },
        { q_vi: 'Đâu KHÔNG phải cách giải tỏa áp lực?', q_en: 'Which is NOT a way to relieve stress?', options: ['运动', '听音乐', '和朋友聊天', '长期加班'], answer: 3 }
      ]
    },
    {
      id: 'r5_04', title_vi: 'Tiết kiệm tài nguyên', title_en: 'Saving Resources',
      text: '随着生活水平的提高，浪费的现象也越来越严重。有些人觉得，自己花自己的钱，浪费一点没什么。然而，地球上的资源是有限的，今天的浪费很可能给子孙后代带来麻烦。其实，节约并不意味着降低生活质量，而是一种对自己、对社会都负责任的生活态度。',
      pinyin: 'Suízhe shēnghuó shuǐpíng de tígāo, làngfèi de xiànxiàng yě yuèláiyuè yánzhòng. Yǒuxiē rén juéde, zìjǐ huā zìjǐ de qián, làngfèi yìdiǎn méi shénme. Rán\'ér, dìqiú shàng de zīyuán shì yǒuxiàn de, jīntiān de làngfèi hěn kěnéng gěi zǐsūn hòudài dàilái máfan. Qíshí, jiéyuē bìng bú yìwèizhe jiàngdī shēnghuó zhìliàng, ér shì yì zhǒng duì zìjǐ, duì shèhuì dōu fù zérèn de shēnghuó tàidu.',
      questions: [
        { q_vi: 'Tác giả nhìn nhận việc lãng phí thế nào?', q_en: 'How does the author view waste?', options: ['没什么大不了', '会给后代带来麻烦', '是个人的事', '无法避免'], answer: 1 },
        { q_vi: 'Tác giả cho rằng tiết kiệm là gì?', q_en: 'What is saving according to the author?', options: ['降低生活质量', '负责任的生活态度', '一种痛苦', '没有必要'], answer: 1 }
      ]
    }
  ],
  6: [
    {
      id: 'r6_01', title_vi: 'Biết đủ thường vui', title_en: 'Contentment Brings Happiness',
      text: '古人说："知足者常乐。"这句话看似简单，却包含着深刻的人生智慧。在物质日益丰富的今天，人们的欲望也在不断膨胀，得到的越多，反而越不满足。其实，幸福并不取决于一个人拥有多少，而在于他是否懂得珍惜自己所拥有的。一味地追求更多，往往会让我们忽略眼前的美好。',
      pinyin: 'Gǔrén shuō: "Zhīzú zhě cháng lè." Zhè jù huà kànsì jiǎndān, què bāohán zhe shēnkè de rénshēng zhìhuì. Zài wùzhì rìyì fēngfù de jīntiān, rénmen de yùwàng yě zài búduàn péngzhàng, dédào de yuè duō, fǎn\'ér yuè bù mǎnzú. Qíshí, xìngfú bìng bù qǔjué yú yí ge rén yōngyǒu duōshǎo, ér zàiyú tā shìfǒu dǒngde zhēnxī zìjǐ suǒ yōngyǒu de. Yíwèi de zhuīqiú gèng duō, wǎngwǎng huì ràng wǒmen hūlüè yǎnqián de měihǎo.',
      questions: [
        { q_vi: '"Biết đủ thường vui" chủ yếu dạy ta điều gì?', q_en: 'What does the saying teach?', options: ['要追求更多', '懂得满足才能快乐', '物质很重要', '欲望是好事'], answer: 1 },
        { q_vi: 'Tác giả cho rằng hạnh phúc phụ thuộc vào điều gì?', q_en: 'What does happiness depend on?', options: ['拥有多少', '是否懂得珍惜', '金钱多少', '地位高低'], answer: 1 }
      ]
    },
    {
      id: 'r6_02', title_vi: 'Tinh thần đổi mới', title_en: 'The Spirit of Innovation',
      text: '一个民族要想立于世界之林，离不开创新精神。然而，创新从来不是一帆风顺的，它往往伴随着失败和质疑。历史上无数的发明，都是在一次次失败之后才得以实现的。倘若人们因为害怕失败而不敢尝试，社会就会停滞不前。因此，宽容失败、鼓励尝试，是一个充满活力的社会所必须具备的品质。',
      pinyin: 'Yí ge mínzú yào xiǎng lì yú shìjiè zhī lín, lí bù kāi chuàngxīn jīngshén. Rán\'ér, chuàngxīn cónglái bú shì yìfānfēngshùn de, tā wǎngwǎng bànsuí zhe shībài hé zhìyí. Lìshǐ shàng wúshù de fāmíng, dōu shì zài yí cì cì shībài zhīhòu cái déyǐ shíxiàn de. Tǎngruò rénmen yīnwèi hàipà shībài ér bù gǎn chángshì, shèhuì jiù huì tíngzhì bù qián. Yīncǐ, kuānróng shībài, gǔlì chángshì, shì yí ge chōngmǎn huólì de shèhuì suǒ bìxū jùbèi de pǐnzhì.',
      questions: [
        { q_vi: 'Tác giả cho rằng đổi mới có đặc điểm gì?', q_en: 'What is innovation like?', options: ['一帆风顺', '常伴随失败和质疑', '很容易', '不需要尝试'], answer: 1 },
        { q_vi: 'Xã hội tràn đầy sức sống nên đối xử với thất bại thế nào?', q_en: 'How should a vibrant society treat failure?', options: ['害怕失败', '宽容失败鼓励尝试', '禁止尝试', '忽略失败'], answer: 1 }
      ]
    },
    {
      id: 'r6_03', title_vi: 'Truyền thống và hiện đại', title_en: 'Tradition and Modernity',
      text: '在全球化的浪潮中，如何对待传统文化，成为许多国家共同面临的课题。有人主张全盘西化，认为传统是落后的象征；也有人固守传统，排斥一切外来事物。其实，这两种态度都过于极端。真正明智的做法，是在继承传统精华的同时，吸收外来文化的长处，使二者相互融合，从而创造出既有民族特色又适应时代的新文化。',
      pinyin: 'Zài quánqiúhuà de làngcháo zhōng, rúhé duìdài chuántǒng wénhuà, chéngwéi xǔduō guójiā gòngtóng miànlín de kètí. Yǒurén zhǔzhāng quánpán xīhuà, rènwéi chuántǒng shì luòhòu de xiàngzhēng; yě yǒurén gùshǒu chuántǒng, páichì yíqiè wàilái shìwù. Qíshí, zhè liǎng zhǒng tàidu dōu guòyú jíduān. Zhēnzhèng míngzhì de zuòfǎ, shì zài jìchéng chuántǒng jīnghuá de tóngshí, xīshōu wàilái wénhuà de chángchu, shǐ èrzhě xiānghù rónghé, cóng\'ér chuàngzào chū jì yǒu mínzú tèsè yòu shìyìng shídài de xīn wénhuà.',
      questions: [
        { q_vi: 'Tác giả cho rằng nên đối xử với văn hóa truyền thống thế nào?', q_en: 'How to treat traditional culture?', options: ['全盘西化', '固守传统', '继承精华同时吸收外来长处', '完全抛弃'], answer: 2 },
        { q_vi: 'Tác giả thấy hai thái độ "Tây hóa toàn bộ" và "cố thủ truyền thống" ra sao?', q_en: 'How does the author view those two attitudes?', options: ['都很好', '都过于极端', '西化更好', '固守更好'], answer: 1 }
      ]
    }
  ]
};
