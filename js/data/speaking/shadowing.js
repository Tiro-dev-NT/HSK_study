var SHADOW_DATA = {
  meta: {
    version: '2.0',
    totalSets: 40,
    totalLines: 330
  },
  sets: [
    {
      id: 'tone-basics', title: 'Bốn thanh cơ bản', focus: 'Thanh điệu', level: 1,
      desc: 'Phân biệt thanh 1-2-3-4 và thanh nhẹ trong câu ngắn.',
      lines: [
        { h: '妈妈骑马。', p: 'māma qí mǎ', v: 'Mẹ cưỡi ngựa.', tip: 'Giữ mā cao-ngang, qí đi lên, mǎ hạ rồi nhấc nhẹ.' },
        { h: '我买米。', p: 'wǒ mǎi mǐ', v: 'Tôi mua gạo.', tip: 'Ba thanh 3 đi liền: đọc thanh đầu thấp-ngắn, không kéo quá dài.' },
        { h: '他去学校。', p: 'tā qù xuéxiào', v: 'Anh ấy đi học.', tip: 'qù rơi nhanh; xué đi lên rồi xiào rơi rõ.' },
        { h: '今天很好。', p: 'jīntiān hěn hǎo', v: 'Hôm nay rất tốt.', tip: 'jīn-tiān cao đều; hěn trước hǎo thường đọc gần thanh 2.' },
        { h: '你喝茶吗？', p: 'nǐ hē chá ma', v: 'Bạn uống trà không?', tip: 'ma là thanh nhẹ, ngắn và nhẹ hơn chá.' },
        { h: '这个菜很辣。', p: 'zhège cài hěn là', v: 'Món này rất cay.', tip: 'ge nhẹ; cài và là đều rơi, nhưng là ngắn hơn.' },
        { h: '我想学中文。', p: 'wǒ xiǎng xué Zhōngwén', v: 'Tôi muốn học tiếng Trung.', tip: 'xiǎng rõ âm -iang; Zhōng giữ thanh 1 chắc.' },
        { h: '请你慢一点。', p: 'qǐng nǐ màn yìdiǎn', v: 'Bạn nói chậm một chút nhé.', tip: 'màn rơi dứt; yì trước diǎn đọc nhẹ nhưng vẫn rơi.' },
        { h: '她不太忙。', p: 'tā bú tài máng', v: 'Cô ấy không bận lắm.', tip: '不 trước thanh 4 đổi thành bú; tài rơi nhanh.' }
      ]
    },
    {
      id: 'zh-ch-sh', title: 'zh ch sh vs z c s', focus: 'Phụ âm đầu', level: 2,
      desc: 'Tách âm uốn lưỡi và không uốn lưỡi — lỗi phổ biến với người Việt.',
      lines: [
        { h: '这是我的书。', p: 'zhè shì wǒ de shū', v: 'Đây là sách của tôi.', tip: 'zh/sh uốn lưỡi nhẹ; đừng đọc thành z/s.' },
        { h: '四十不是十四。', p: 'sìshí bú shì shísì', v: 'Bốn mươi không phải mười bốn.', tip: 'sì đầu lưỡi sát răng; shí uốn lưỡi.' },
        { h: '老师在车站等我。', p: 'lǎoshī zài chēzhàn děng wǒ', v: 'Thầy giáo đợi tôi ở bến xe.', tip: 'ch bật hơi rõ; zhàn uốn lưỡi, không thành zàn.' },
        { h: '早上吃什么？', p: 'zǎoshang chī shénme', v: 'Sáng ăn gì?', tip: 'zǎo không uốn lưỡi; chī và shén uốn lưỡi.' },
        { h: '这次考试很重要。', p: 'zhè cì kǎoshì hěn zhòngyào', v: 'Kỳ thi lần này rất quan trọng.', tip: 'cì bật hơi ở răng; zhòng uốn lưỡi và rơi.' },
        { h: '出租车在左边。', p: 'chūzūchē zài zuǒbian', v: 'Taxi ở bên trái.', tip: 'chū/chē bật hơi; zū/zuǒ không bật hơi mạnh.' },
        { h: '他说中文说得不错。', p: 'tā shuō Zhōngwén shuō de búcuò', v: 'Anh ấy nói tiếng Trung khá tốt.', tip: 'shuō có sh uốn lưỡi; cuò là c bật hơi.' },
        { h: '商店十点关门。', p: 'shāngdiàn shí diǎn guānmén', v: 'Cửa hàng đóng cửa lúc 10 giờ.', tip: 'shāng và shí đều uốn lưỡi, giữ hơi mềm.' },
        { h: '自行车比汽车便宜。', p: 'zìxíngchē bǐ qìchē piányi', v: 'Xe đạp rẻ hơn ô tô.', tip: 'zì không uốn; chē bật hơi; qì bật hơi trước i.' }
      ]
    },
    {
      id: 'j-q-x', title: 'j q x và ü', focus: 'Âm mặt trước', level: 2,
      desc: 'Luyện j/q/x với i và ü, tránh đọc thành ch/s hoặc u thường.',
      lines: [
        { h: '我去学校学习。', p: 'wǒ qù xuéxiào xuéxí', v: 'Tôi đi trường học bài.', tip: 'qù và xué dùng ü ẩn sau q/x; môi tròn nhẹ.' },
        { h: '姐姐喜欢喝汽水。', p: 'jiějie xǐhuan hē qìshuǐ', v: 'Chị thích uống nước ngọt.', tip: 'j/q/x đặt lưỡi cao, không uốn lưỡi.' },
        { h: '请给我一张票。', p: 'qǐng gěi wǒ yì zhāng piào', v: 'Vui lòng cho tôi một vé.', tip: 'qǐng bật hơi; piào môi bật rõ.' },
        { h: '今天下雨，路很远。', p: 'jīntiān xià yǔ, lù hěn yuǎn', v: 'Hôm nay mưa, đường rất xa.', tip: 'yǔ/yuǎn cần môi tròn; đừng đọc như i thường.' },
        { h: '医生建议我休息。', p: 'yīshēng jiànyì wǒ xiūxi', v: 'Bác sĩ khuyên tôi nghỉ ngơi.', tip: 'jiàn rơi; xiū lướt từ x sang iu mềm.' },
        { h: '这件裙子很漂亮。', p: 'zhè jiàn qúnzi hěn piàoliang', v: 'Chiếc váy này rất đẹp.', tip: 'qún là ü: môi tròn, lưỡi vẫn phía trước.' },
        { h: '我需要一些练习。', p: 'wǒ xūyào yìxiē liànxí', v: 'Tôi cần một ít luyện tập.', tip: 'xū là ü; xiē nhẹ, không thành sê.' },
        { h: '请先写句子。', p: 'qǐng xiān xiě jùzi', v: 'Hãy viết câu trước.', tip: 'xiān/xiě đều x; jù là ü ẩn sau j.' },
        { h: '旅行可以开阔视野。', p: 'lǚxíng kěyǐ kāikuò shìyě', v: 'Du lịch có thể mở rộng tầm nhìn.', tip: 'lǚ phải viết và đọc ü thật; khác với lù.' }
      ]
    },
    {
      id: 'n-l-ng', title: 'n l và -n -ng', focus: 'Âm mũi', level: 3,
      desc: 'Tách n/l đầu âm và đuôi mũi trước-sau trong câu thường ngày.',
      lines: [
        { h: '你能来南京吗？', p: 'nǐ néng lái Nánjīng ma', v: 'Bạn có thể đến Nam Kinh không?', tip: 'nǐ/néng/Nán dùng n đầu; lái là l, đặt lưỡi khác rõ.' },
        { h: '冷牛奶很好喝。', p: 'lěng niúnǎi hěn hǎo hē', v: 'Sữa bò lạnh rất ngon.', tip: 'lěng kết thúc -ng phía sau; niú/nǎi bắt đầu bằng n.' },
        { h: '门前有很多人。', p: 'mén qián yǒu hěn duō rén', v: 'Trước cửa có rất nhiều người.', tip: 'mén/rén kết thúc -n ngắn, không kéo thành -ng.' },
        { h: '房间里很安静。', p: 'fángjiān lǐ hěn ānjìng', v: 'Trong phòng rất yên tĩnh.', tip: 'fáng/jìng là -ng; jiān/ān là -n.' },
        { h: '我听见铃声了。', p: 'wǒ tīngjiàn língshēng le', v: 'Tôi nghe thấy tiếng chuông rồi.', tip: 'tīng/líng/shēng đều -ng; jiàn là -n.' },
        { h: '南方的冬天不冷。', p: 'nánfāng de dōngtiān bù lěng', v: 'Mùa đông miền Nam không lạnh.', tip: 'nán là -n; fāng/dōng/lěng là -ng phía sau.' },
        { h: '老人正在练发音。', p: 'lǎorén zhèngzài liàn fāyīn', v: 'Người già đang luyện phát âm.', tip: 'lǎo/liàn là l; rén/yīn kết thúc -n.' },
        { h: '请慢慢念这个句子。', p: 'qǐng mànmàn niàn zhège jùzi', v: 'Hãy đọc chậm câu này.', tip: 'màn/niàn kết thúc -n; qǐng kết thúc -ng.' },
        { h: '窗外的风很轻。', p: 'chuāngwài de fēng hěn qīng', v: 'Gió ngoài cửa sổ rất nhẹ.', tip: 'chuāng/fēng/qīng đều đóng âm -ng rõ.' }
      ]
    },
    {
      id: 'rhythm-short', title: 'Nhịp câu ngắn', focus: 'Ngắt nhịp', level: 3,
      desc: 'Đọc theo cụm nghĩa 2-4 âm tiết thay vì đọc từng chữ rời.',
      lines: [
        { h: '我想先喝一杯热茶。', p: 'wǒ xiǎng xiān hē yì bēi rè chá', v: 'Tôi muốn uống một tách trà nóng trước.', tip: 'Ngắt: 我想先 / 喝一杯 / 热茶.' },
        { h: '如果有时间，我们一起复习。', p: 'rúguǒ yǒu shíjiān, wǒmen yìqǐ fùxí', v: 'Nếu có thời gian, chúng ta cùng ôn tập.', tip: 'Dừng nhẹ sau 如果有时间.' },
        { h: '这家餐厅的服务很好。', p: 'zhè jiā cāntīng de fúwù hěn hǎo', v: 'Dịch vụ của nhà hàng này rất tốt.', tip: 'Đọc liền 这家餐厅的, rồi nhấn 服务.' },
        { h: '我每天晚上听中文。', p: 'wǒ měitiān wǎnshang tīng Zhōngwén', v: 'Mỗi tối tôi nghe tiếng Trung.', tip: 'Nhịp: 我 / 每天晚上 / 听中文.' },
        { h: '请把这句话再说一遍。', p: 'qǐng bǎ zhè jù huà zài shuō yí biàn', v: 'Xin nói lại câu này một lần nữa.', tip: '再说一遍 đọc thành một cụm mượt.' },
        { h: '因为下雨，所以路上很堵。', p: 'yīnwèi xià yǔ, suǒyǐ lùshang hěn dǔ', v: 'Vì trời mưa nên đường rất tắc.', tip: 'Dừng sau 下雨, rồi đổi nhịp ở 所以.' },
        { h: '我觉得这个方法很有用。', p: 'wǒ juéde zhège fāngfǎ hěn yǒuyòng', v: 'Tôi thấy phương pháp này rất hữu ích.', tip: 'juéde nhẹ; nhấn 方法 và 有用.' },
        { h: '她一边走路一边听歌。', p: 'tā yìbiān zǒulù yìbiān tīng gē', v: 'Cô ấy vừa đi đường vừa nghe nhạc.', tip: 'Hai cụm 一边...一边 cân nhịp ngang nhau.' },
        { h: '学语言需要每天练习。', p: 'xué yǔyán xūyào měitiān liànxí', v: 'Học ngôn ngữ cần luyện tập mỗi ngày.', tip: 'Ngắt: 学语言 / 需要 / 每天练习.' }
      ]
    },
    {
      id: 'daily-life', title: 'Đời sống hằng ngày', focus: 'Chủ đề', level: 2,
      desc: 'Câu giao tiếp cơ bản nhưng vẫn kiểm tra thanh điệu và nhịp tự nhiên.',
      lines: [
        { h: '你早饭吃了什么？', p: 'nǐ zǎofàn chī le shénme', v: 'Bữa sáng bạn ăn gì?', tip: 'shénme nhẹ ở cuối câu hỏi.' },
        { h: '我今天有点儿累。', p: 'wǒ jīntiān yǒudiǎnr lèi', v: 'Hôm nay tôi hơi mệt.', tip: '儿 hoá nhẹ ở yǒudiǎnr, đừng tách quá rõ.' },
        { h: '我们晚上去超市吧。', p: 'wǒmen wǎnshang qù chāoshì ba', v: 'Tối nay chúng ta đi siêu thị nhé.', tip: 'ba nhẹ, như lời rủ rê mềm.' },
        { h: '这个水果很新鲜。', p: 'zhège shuǐguǒ hěn xīnxiān', v: 'Trái cây này rất tươi.', tip: 'shuǐguǒ có hai thanh 3, âm đầu đọc thấp-ngắn.' },
        { h: '请问洗手间在哪儿？', p: 'qǐngwèn xǐshǒujiān zài nǎr', v: 'Xin hỏi nhà vệ sinh ở đâu?', tip: 'qǐngwèn là cụm lịch sự; nǎr ngắn ở cuối.' },
        { h: '我想换一件衣服。', p: 'wǒ xiǎng huàn yí jiàn yīfu', v: 'Tôi muốn đổi một bộ quần áo.', tip: '一 trước jiàn đọc yí; yīfu có fu nhẹ.' },
        { h: '现在几点了？', p: 'xiànzài jǐ diǎn le', v: 'Bây giờ mấy giờ rồi?', tip: 'xiànzài rơi-rơi, nhưng âm thứ hai nhẹ hơn.' },
        { h: '外面太热了。', p: 'wàimiàn tài rè le', v: 'Bên ngoài nóng quá.', tip: 'Ba thanh 4 liên tiếp: đọc rõ nhưng không gằn.' },
        { h: '我周末想在家休息。', p: 'wǒ zhōumò xiǎng zài jiā xiūxi', v: 'Cuối tuần tôi muốn nghỉ ở nhà.', tip: 'xiūxi âm thứ hai nhẹ, câu hạ giọng êm.' }
      ]
    },
    {
      id: 'travel-service', title: 'Đi lại & dịch vụ', focus: 'Chủ đề', level: 4,
      desc: 'Mẫu câu hỏi đường, đặt vé, gọi món — tăng độ dài và tốc độ vừa phải.',
      lines: [
        { h: '请问地铁站离这里远吗？', p: 'qǐngwèn dìtiězhàn lí zhèlǐ yuǎn ma', v: 'Ga tàu điện ngầm cách đây xa không?', tip: 'Ngắt: 请问 / 地铁站 / 离这里远吗.' },
        { h: '我想订一张明天去上海的票。', p: 'wǒ xiǎng dìng yì zhāng míngtiān qù Shànghǎi de piào', v: 'Tôi muốn đặt một vé đi Thượng Hải ngày mai.', tip: '订/去/上 là thanh 4, đọc rơi nhưng giữ mạch câu.' },
        { h: '服务员，请给我们菜单。', p: 'fúwùyuán, qǐng gěi wǒmen càidān', v: 'Phục vụ ơi, cho chúng tôi thực đơn.', tip: 'Dừng sau 服务员 để gọi người nghe.' },
        { h: '这个房间可以看到河。', p: 'zhège fángjiān kěyǐ kàndào hé', v: 'Phòng này có thể nhìn thấy sông.', tip: 'kàndào đọc liền, không ngắt giữa hai động từ.' },
        { h: '如果航班晚点，请通知我。', p: 'rúguǒ hángbān wǎndiǎn, qǐng tōngzhī wǒ', v: 'Nếu chuyến bay bị muộn, xin thông báo cho tôi.', tip: 'hángbān có -ng/-n khác nhau; tōngzhī giữ zh.' },
        { h: '我需要一份不太辣的菜。', p: 'wǒ xūyào yí fèn bú tài là de cài', v: 'Tôi cần một món không quá cay.', tip: '不 trước tài đổi bú; 一份 đọc yí fèn.' },
        { h: '这条路一直往前走。', p: 'zhè tiáo lù yìzhí wǎng qián zǒu', v: 'Con đường này cứ đi thẳng về phía trước.', tip: 'yìzhí là một cụm; wǎng qián zǒu nhịp 2-2-1.' },
        { h: '我可以用手机付款吗？', p: 'wǒ kěyǐ yòng shǒujī fùkuǎn ma', v: 'Tôi có thể thanh toán bằng điện thoại không?', tip: 'fùkuǎn: fù rơi, kuǎn thanh 3 mở rộng.' },
        { h: '麻烦你帮我叫一辆出租车。', p: 'máfan nǐ bāng wǒ jiào yí liàng chūzūchē', v: 'Phiền bạn gọi giúp tôi một chiếc taxi.', tip: '麻烦 lịch sự, đọc nhẹ; 一辆 đọc yí liàng.' }
      ]
    },
    {
      id: 'tone-sandhi', title: 'Biến điệu 一 不', focus: 'Biến điệu', level: 4,
      desc: 'Tập đọc 一 và 不 theo thanh phía sau để câu nghe tự nhiên hơn.',
      lines: [
        { h: '一杯水，一本书，一个人。', p: 'yì bēi shuǐ, yì běn shū, yí ge rén', v: 'Một cốc nước, một quyển sách, một người.', tip: '一 trước thanh 1/2/3 thường đọc yì; trước thanh 4 đọc yí.' },
        { h: '我一会儿给你打电话。', p: 'wǒ yíhuìr gěi nǐ dǎ diànhuà', v: 'Lát nữa tôi gọi điện cho bạn.', tip: '一会儿 đọc yíhuìr, liền thành một cụm.' },
        { h: '他不是不想去。', p: 'tā bú shì bù xiǎng qù', v: 'Không phải là anh ấy không muốn đi.', tip: '不 trước 是 đổi bú; trước xiǎng giữ bù.' },
        { h: '这件事一点儿也不难。', p: 'zhè jiàn shì yìdiǎnr yě bù nán', v: 'Việc này không khó chút nào.', tip: '一点儿 đọc yìdiǎnr; 不 trước nán giữ bù.' },
        { h: '我们一起看一看。', p: 'wǒmen yìqǐ kàn yi kàn', v: 'Chúng ta cùng xem thử.', tip: '看一看 ở giữa đọc yi nhẹ, không nhấn.' },
        { h: '今天不冷，但是有一点儿风。', p: 'jīntiān bù lěng, dànshì yǒu yìdiǎnr fēng', v: 'Hôm nay không lạnh, nhưng hơi có gió.', tip: 'Dừng sau 不冷; 一点儿 đọc nhanh nhẹ.' },
        { h: '我不认识这个字。', p: 'wǒ bú rènshi zhège zì', v: 'Tôi không biết chữ này.', tip: '不 trước rèn đổi bú; rènshi có shi nhẹ.' },
        { h: '请你再说一次。', p: 'qǐng nǐ zài shuō yí cì', v: 'Xin bạn nói lại một lần.', tip: '一 trước cì thanh 4 đọc yí.' },
        { h: '这个问题一点也不简单。', p: 'zhège wèntí yìdiǎn yě bù jiǎndān', v: 'Vấn đề này không đơn giản chút nào.', tip: 'wèntí rơi-lên; jiǎndān mở rõ thanh 3 rồi thanh 1.' }
      ]
    },
    {
      id: 'long-sentences', title: 'Câu dài HSK 5', focus: 'Nhịp dài', level: 5,
      desc: 'Đọc câu dài theo nhóm ý, giữ hơi ổn định và nhấn đúng từ khóa.',
      lines: [
        { h: '随着科技的发展，学习语言的方法越来越多。', p: 'suízhe kējì de fāzhǎn, xuéxí yǔyán de fāngfǎ yuèláiyuè duō', v: 'Cùng với sự phát triển của công nghệ, phương pháp học ngôn ngữ ngày càng nhiều.', tip: 'Dừng nhẹ sau 发展; nhấn 越来越多 ở cuối.' },
        { h: '只要每天坚持练习，发音一定会进步。', p: 'zhǐyào měitiān jiānchí liànxí, fāyīn yídìng huì jìnbù', v: 'Chỉ cần kiên trì luyện mỗi ngày, phát âm chắc chắn sẽ tiến bộ.', tip: '只要...一定... là khung câu, đọc cân hai vế.' },
        { h: '他虽然说得不快，但是每个音都很清楚。', p: 'tā suīrán shuō de bú kuài, dànshì měi ge yīn dōu hěn qīngchu', v: 'Tuy anh ấy nói không nhanh, nhưng mỗi âm đều rất rõ.', tip: 'Không cần nhanh; giữ 每个音都很清楚 rõ từng nhịp.' },
        { h: '为了提高听力，我每天跟着录音读十分钟。', p: 'wèile tígāo tīnglì, wǒ měitiān gēnzhe lùyīn dú shí fēnzhōng', v: 'Để nâng cao nghe hiểu, tôi đọc theo ghi âm 10 phút mỗi ngày.', tip: '跟着录音读 là cụm hành động chính.' },
        { h: '如果只看拼音，不开口练习，进步会很慢。', p: 'rúguǒ zhǐ kàn pīnyīn, bù kāikǒu liànxí, jìnbù huì hěn màn', v: 'Nếu chỉ nhìn pinyin mà không mở miệng luyện, tiến bộ sẽ rất chậm.', tip: 'Ba vế ngắn, mỗi dấu phẩy nghỉ rất nhẹ.' },
        { h: '我发现录下自己的声音很有帮助。', p: 'wǒ fāxiàn lù xià zìjǐ de shēngyīn hěn yǒu bāngzhù', v: 'Tôi phát hiện ghi lại giọng của mình rất hữu ích.', tip: '录下自己的声音 đọc liền, nhấn 声音.' },
        { h: '语调自然的时候，别人更容易听懂。', p: 'yǔdiào zìrán de shíhou, biérén gèng róngyì tīngdǒng', v: 'Khi ngữ điệu tự nhiên, người khác dễ nghe hiểu hơn.', tip: 'Dừng sau 时候; 更容易听懂 hạ giọng mềm.' },
        { h: '不要害怕犯错，因为错误会告诉你该练哪里。', p: 'búyào hàipà fàncuò, yīnwèi cuòwù huì gàosu nǐ gāi liàn nǎlǐ', v: 'Đừng sợ mắc lỗi, vì lỗi sai cho bạn biết nên luyện ở đâu.', tip: '犯错/cuòwù lặp âm cuò, đọc rõ nhưng không gằn.' },
        { h: '这个练习的目标不是速度，而是准确和稳定。', p: 'zhège liànxí de mùbiāo bú shì sùdù, ér shì zhǔnquè hé wěndìng', v: 'Mục tiêu của bài luyện này không phải tốc độ, mà là chính xác và ổn định.', tip: '不是...而是... nhấn đối lập: 速度 / 准确和稳定.' }
      ]
    },
    {
      id: 'advanced-opinion', title: 'Ý kiến & lập luận', focus: 'HSK 6+', level: 6,
      desc: 'Câu mang sắc thái lập luận, cần kiểm soát hơi và trọng âm logic.',
      lines: [
        { h: '在我看来，语言学习最重要的是长期积累。', p: 'zài wǒ kànlái, yǔyán xuéxí zuì zhòngyào de shì chángqī jīlěi', v: 'Theo tôi, điều quan trọng nhất trong học ngôn ngữ là tích lũy lâu dài.', tip: 'Dừng sau 在我看来; nhấn 最重要 và 长期积累.' },
        { h: '流利并不等于说得很快，而是表达清楚。', p: 'liúlì bìng bù děngyú shuō de hěn kuài, ér shì biǎodá qīngchu', v: 'Lưu loát không đồng nghĩa nói rất nhanh, mà là diễn đạt rõ ràng.', tip: '并不等于...而是... đọc như một lập luận đối lập.' },
        { h: '如果发音基础不稳，交流时就容易产生误解。', p: 'rúguǒ fāyīn jīchǔ bù wěn, jiāoliú shí jiù róngyì chǎnshēng wùjiě', v: 'Nếu nền phát âm không vững, khi giao tiếp dễ gây hiểu lầm.', tip: '基础不稳 là cụm cảnh báo; 产生误解 hạ rõ cuối câu.' },
        { h: '有效的反馈能帮助学习者发现自己听不出来的问题。', p: 'yǒuxiào de fǎnkuì néng bāngzhù xuéxízhě fāxiàn zìjǐ tīng bù chūlái de wèntí', v: 'Phản hồi hiệu quả giúp người học phát hiện vấn đề mà tự mình không nghe ra.', tip: 'Câu dài: 有效的反馈 / 能帮助学习者 / 发现问题.' },
        { h: '与其追求完美，不如先养成每天开口的习惯。', p: 'yǔqí zhuīqiú wánměi, bùrú xiān yǎngchéng měitiān kāikǒu de xíguàn', v: 'Thay vì theo đuổi hoàn hảo, tốt hơn là tạo thói quen mở miệng mỗi ngày.', tip: '与其...不如... đọc cân đối, nhấn 不如.' },
        { h: '语音训练看似简单，实际上非常考验耐心。', p: 'yǔyīn xùnliàn kànshì jiǎndān, shíjìshàng fēicháng kǎoyàn nàixīn', v: 'Luyện ngữ âm nhìn có vẻ đơn giản, thực ra rất thử thách sự kiên nhẫn.', tip: '看似...实际上... tạo chuyển ý, nghỉ sau 简单.' },
        { h: '当你能模仿节奏和停顿时，中文会听起来更自然。', p: 'dāng nǐ néng mófǎng jiézòu hé tíngdùn shí, Zhōngwén huì tīng qǐlái gèng zìrán', v: 'Khi bạn mô phỏng được nhịp và điểm dừng, tiếng Trung sẽ nghe tự nhiên hơn.', tip: '模仿节奏和停顿 là cụm trọng tâm.' },
        { h: '真正的进步往往来自反复修正细小的差别。', p: 'zhēnzhèng de jìnbù wǎngwǎng láizì fǎnfù xiūzhèng xìxiǎo de chābié', v: 'Tiến bộ thật sự thường đến từ việc lặp lại sửa những khác biệt nhỏ.', tip: '反复修正细小的差别 đọc chậm, rõ từng cụm.' },
        { h: '发音不是表演，而是让别人舒服地理解你。', p: 'fāyīn bú shì biǎoyǎn, ér shì ràng biérén shūfu de lǐjiě nǐ', v: 'Phát âm không phải biểu diễn, mà là giúp người khác hiểu bạn một cách dễ chịu.', tip: '不是...而是... nhấn 表演 và 理解你.' }
      ]
    },
    {
      id: 'third-tone-sandhi', title: 'Thanh ba liền nhau', focus: 'Thanh điệu', level: 2,
      desc: 'Hai hoặc ba thanh 3 đứng cạnh nhau: âm phía trước nâng gần thanh 2.',
      lines: [
        { h: '你好，老李！', p: 'nǐ hǎo, lǎo Lǐ', v: 'Chào anh Lý!', tip: '你好 hai thanh 3 → nǐ đọc gần ní.' },
        { h: '我也想去。', p: 'wǒ yě xiǎng qù', v: 'Tôi cũng muốn đi.', tip: '我也想 ba thanh 3, hai âm đầu nâng lên gần thanh 2.' },
        { h: '你可以等我。', p: 'nǐ kěyǐ děng wǒ', v: 'Bạn có thể đợi tôi.', tip: '可以 → kéyǐ; chỉ 我 cuối rơi-nhấc đầy đủ.' },
        { h: '老板很友好。', p: 'lǎobǎn hěn yǒuhǎo', v: 'Ông chủ rất thân thiện.', tip: 'Chuỗi thanh 3, giữ nhịp đều, đừng nhấc từng âm.' },
        { h: '请给我两碗米饭。', p: 'qǐng gěi wǒ liǎng wǎn mǐfàn', v: 'Cho tôi hai bát cơm.', tip: '给我两碗米 nhiều thanh 3, chỉ âm cuối nhấn rõ.' },
        { h: '我想买水果。', p: 'wǒ xiǎng mǎi shuǐguǒ', v: 'Tôi muốn mua trái cây.', tip: '想买水果 đọc nhanh liền, đừng kéo từng âm.' },
        { h: '五百五十五。', p: 'wǔ bǎi wǔ shí wǔ', v: 'Năm trăm năm mươi lăm.', tip: 'Chuỗi 五 liên tiếp, biến gần thanh 2.' },
        { h: '我有很多雨伞。', p: 'wǒ yǒu hěn duō yǔsǎn', v: 'Tôi có nhiều cây dù.', tip: '我有很 nâng đầu; 雨伞 hai thanh 3 cuối.' }
      ]
    },
    {
      id: 'bo-po-de-te', title: 'Bật hơi b/p và d/t', focus: 'Phụ âm đầu', level: 1,
      desc: 'Phân biệt âm không bật hơi (b, d) và bật hơi (p, t).',
      lines: [
        { h: '爸爸怕辣。', p: 'bàba pà là', v: 'Bố sợ cay.', tip: 'bà không bật hơi, pà bật hơi mạnh.' },
        { h: '这是一瓶啤酒。', p: 'zhè shì yì píng píjiǔ', v: 'Đây là một chai bia.', tip: 'píng/pí bật hơi rõ ở môi.' },
        { h: '弟弟踢球。', p: 'dìdi tī qiú', v: 'Em trai đá bóng.', tip: 'dì không bật hơi, tī bật hơi.' },
        { h: '他太胖了。', p: 'tā tài pàng le', v: 'Anh ấy mập quá.', tip: 'tā/tài và pàng đều bật hơi.' },
        { h: '不要怕，慢慢跑。', p: 'búyào pà, mànmàn pǎo', v: 'Đừng sợ, chạy chậm thôi.', tip: 'pà/pǎo bật hơi rõ.' },
        { h: '大家都同意。', p: 'dàjiā dōu tóngyì', v: 'Mọi người đều đồng ý.', tip: 'dà/dōu không bật hơi, tóng bật hơi.' },
        { h: '把笔给爸爸。', p: 'bǎ bǐ gěi bàba', v: 'Đưa bút cho bố.', tip: 'Cả ba âm b đều không bật hơi.' },
        { h: '妹妹特别漂亮。', p: 'mèimei tèbié piàoliang', v: 'Em gái đặc biệt xinh.', tip: 'tè/piào bật hơi; bié không bật.' }
      ]
    },
    {
      id: 'ge-ke-he', title: 'Âm cuống lưỡi g/k/h', focus: 'Phụ âm đầu', level: 2,
      desc: 'Đặt gốc lưỡi sát ngạc mềm cho g, k bật hơi, h cọ xát nhẹ.',
      lines: [
        { h: '哥哥喝咖啡。', p: 'gēge hē kāfēi', v: 'Anh trai uống cà phê.', tip: 'gē không bật, kā bật hơi, hē cọ xát.' },
        { h: '我口渴了。', p: 'wǒ kǒukě le', v: 'Tôi khát rồi.', tip: 'kǒu/kě bật hơi rõ.' },
        { h: '这个很好看。', p: 'zhège hěn hǎokàn', v: 'Cái này rất đẹp.', tip: 'ge nhẹ; hǎo/kàn phân biệt h và k.' },
        { h: '客人很客气。', p: 'kèrén hěn kèqi', v: 'Khách rất khách sáo.', tip: 'kè bật hơi mạnh; qi nhẹ cuối.' },
        { h: '公园里有很多花。', p: 'gōngyuán lǐ yǒu hěn duō huā', v: 'Trong công viên có nhiều hoa.', tip: 'gōng không bật, huā cọ xát.' },
        { h: '快点开门。', p: 'kuài diǎn kāi mén', v: 'Mau mở cửa.', tip: 'kuài/kāi bật hơi rõ.' },
        { h: '他很会唱歌。', p: 'tā hěn huì chànggē', v: 'Anh ấy hát rất hay.', tip: 'huì là h cọ xát, gē là g không bật.' },
        { h: '我们去看海。', p: 'wǒmen qù kàn hǎi', v: 'Chúng ta đi ngắm biển.', tip: 'kàn bật hơi, hǎi cọ xát nhẹ.' }
      ]
    },
    {
      id: 'fu-vs-hu', title: 'Âm f và h', focus: 'Phụ âm đầu', level: 1,
      desc: 'f dùng môi-răng, h cọ xát họng — người Việt hay lẫn.',
      lines: [
        { h: '飞机很快。', p: 'fēijī hěn kuài', v: 'Máy bay rất nhanh.', tip: 'fēi môi dưới chạm răng trên.' },
        { h: '喝水对身体好。', p: 'hē shuǐ duì shēntǐ hǎo', v: 'Uống nước tốt cho sức khỏe.', tip: 'hē bật từ họng, không thành fē.' },
        { h: '房间号是五号。', p: 'fángjiān hào shì wǔ hào', v: 'Số phòng là số 5.', tip: 'fáng dùng môi-răng; hào từ họng.' },
        { h: '火车很方便。', p: 'huǒchē hěn fāngbiàn', v: 'Tàu hỏa rất tiện.', tip: 'huǒ là h; fāng là f, tách rõ.' },
        { h: '放假了，真高兴。', p: 'fàngjià le, zhēn gāoxìng', v: 'Nghỉ lễ rồi, vui thật.', tip: 'fàng là f; gāo là g, không nhầm h.' },
        { h: '这附近有花店吗？', p: 'zhè fùjìn yǒu huādiàn ma', v: 'Gần đây có tiệm hoa không?', tip: 'fù là f; huā là h, đặt cạnh để so.' },
        { h: '服务员很客气。', p: 'fúwùyuán hěn kèqi', v: 'Phục vụ rất lịch sự.', tip: 'fú dùng môi-răng rõ ràng.' },
        { h: '风和日丽。', p: 'fēng hé rì lì', v: 'Trời quang gió mát.', tip: 'fēng là f; hé là h, so trực tiếp.' }
      ]
    },
    {
      id: 'r-er-sound', title: 'Âm r và nhi hóa 儿', focus: 'Nhi hóa', level: 3,
      desc: 'Âm r đầu uốn lưỡi nhẹ và đuôi 儿 cuốn lưỡi tự nhiên.',
      lines: [
        { h: '今天天气真热。', p: 'jīntiān tiānqì zhēn rè', v: 'Hôm nay trời nóng thật.', tip: 'rè uốn lưỡi nhẹ, không thành dè.' },
        { h: '我们在这儿等吧。', p: 'wǒmen zài zhèr děng ba', v: 'Chúng ta đợi ở đây nhé.', tip: '这儿 = zhèr, cuốn lưỡi ở cuối.' },
        { h: '他认识很多人。', p: 'tā rènshi hěn duō rén', v: 'Anh ấy quen nhiều người.', tip: 'rèn/rén đều uốn lưỡi đầu; shi nhẹ.' },
        { h: '小孩儿在玩儿。', p: 'xiǎoháir zài wánr', v: 'Đứa bé đang chơi.', tip: 'háir/wánr cuốn lưỡi tự nhiên cuối từ.' },
        { h: '然后我们回家。', p: 'ránhòu wǒmen huíjiā', v: 'Sau đó chúng ta về nhà.', tip: 'rán uốn lưỡi, hòu không.' },
        { h: '一点儿也不累。', p: 'yìdiǎnr yě bù lèi', v: 'Chẳng mệt chút nào.', tip: '点儿 nối liền thành diǎnr.' },
        { h: '太阳很热。', p: 'tàiyáng hěn rè', v: 'Mặt trời rất nóng.', tip: 'rè giữ uốn lưỡi đến cuối.' },
        { h: '你有空儿吗？', p: 'nǐ yǒu kòngr ma', v: 'Bạn có rảnh không?', tip: '空儿 = kòngr, cuốn lưỡi mềm.' }
      ]
    },
    {
      id: 'diphthongs', title: 'Nguyên âm đôi ai/ei/ao/ou', focus: 'Nguyên âm', level: 1,
      desc: 'Lướt mượt giữa hai nguyên âm, không tách rời.',
      lines: [
        { h: '我爱我的家。', p: 'wǒ ài wǒ de jiā', v: 'Tôi yêu gia đình mình.', tip: 'ài lướt từ a sang i liền.' },
        { h: '给我一杯水。', p: 'gěi wǒ yì bēi shuǐ', v: 'Cho tôi một cốc nước.', tip: 'bēi/shuǐ lướt ei/ui mượt.' },
        { h: '我要回家了。', p: 'wǒ yào huí jiā le', v: 'Tôi sắp về nhà.', tip: 'yào/huí giữ nguyên âm đôi rõ.' },
        { h: '早上好。', p: 'zǎoshang hǎo', v: 'Chào buổi sáng.', tip: 'zǎo/hǎo lướt ao đầy đủ.' },
        { h: '这条路很好走。', p: 'zhè tiáo lù hěn hǎo zǒu', v: 'Đường này dễ đi.', tip: 'hǎo/zǒu lướt ao và ou.' },
        { h: '老师教我们。', p: 'lǎoshī jiāo wǒmen', v: 'Thầy dạy chúng tôi.', tip: 'lǎo/jiāo mở nguyên âm đôi.' },
        { h: '妹妹很可爱。', p: 'mèimei hěn kě’ài', v: 'Em gái rất dễ thương.', tip: 'mèi là ei, ài là ai, tách rõ.' },
        { h: '我想要那个。', p: 'wǒ xiǎng yào nàge', v: 'Tôi muốn cái kia.', tip: 'yào lướt iao đầy đủ.' }
      ]
    },
    {
      id: 'e-vowel', title: 'Nguyên âm e', focus: 'Nguyên âm', level: 1,
      desc: 'Âm e đơn (ở he, le, de) khác hẳn ie/ei.',
      lines: [
        { h: '我们喝可乐。', p: 'wǒmen hē kělè', v: 'Chúng tôi uống cô-la.', tip: 'hē/lè dùng e đơn, miệng hé nhẹ.' },
        { h: '这个很特别。', p: 'zhège hěn tèbié', v: 'Cái này rất đặc biệt.', tip: '个/特 là e đơn; 别 là ie.' },
        { h: '哥哥饿了。', p: 'gēge è le', v: 'Anh trai đói rồi.', tip: 'è mở họng, không thành ê.' },
        { h: '渴了就喝水。', p: 'kě le jiù hē shuǐ', v: 'Khát thì uống nước.', tip: 'kě/hē giữ e đơn.' },
        { h: '这件事很麻烦。', p: 'zhè jiàn shì hěn máfan', v: 'Việc này phiền phức.', tip: '这/很 e đơn nhẹ; fan nhẹ cuối.' },
        { h: '我们一起合作。', p: 'wǒmen yìqǐ hézuò', v: 'Chúng ta cùng hợp tác.', tip: 'hé là e đơn rõ.' },
        { h: '客车开得很慢。', p: 'kèchē kāi de hěn màn', v: 'Xe khách chạy chậm.', tip: 'kè/chē/de đều e đơn.' },
        { h: '这盒饭不热。', p: 'zhè hé fàn bú rè', v: 'Hộp cơm này không nóng.', tip: 'hé/rè là e đơn, đừng đọc thành ơ.' }
      ]
    },
    {
      id: 'light-tone', title: 'Thanh nhẹ', focus: 'Thanh điệu', level: 2,
      desc: 'Âm tiết nhẹ đọc ngắn, thấp, không nhấn — thường ở từ lặp hoặc trợ từ.',
      lines: [
        { h: '谢谢你。', p: 'xièxie nǐ', v: 'Cảm ơn bạn.', tip: 'xie thứ hai nhẹ và ngắn.' },
        { h: '这是什么东西？', p: 'zhè shì shénme dōngxi', v: 'Đây là cái gì?', tip: 'me/xi đọc nhẹ.' },
        { h: '我的朋友来了。', p: 'wǒ de péngyou lái le', v: 'Bạn tôi đến rồi.', tip: 'de/you/le đều nhẹ.' },
        { h: '你认识他吗？', p: 'nǐ rènshi tā ma', v: 'Bạn quen anh ấy không?', tip: 'shi/ma nhẹ ở cuối.' },
        { h: '我们休息一下。', p: 'wǒmen xiūxi yíxià', v: 'Chúng ta nghỉ một chút.', tip: 'men/xi nhẹ, xià rơi rõ.' },
        { h: '桌子上有杯子。', p: 'zhuōzi shàng yǒu bēizi', v: 'Trên bàn có cái cốc.', tip: '子 đọc nhẹ ở cả hai chỗ.' },
        { h: '妈妈喜欢吃饺子。', p: 'māma xǐhuan chī jiǎozi', v: 'Mẹ thích ăn sủi cảo.', tip: 'ma/huan/zi đọc nhẹ.' },
        { h: '他们都来了吧？', p: 'tāmen dōu lái le ba', v: 'Họ đều đến rồi nhỉ?', tip: 'men/le/ba nhẹ cuối câu.' }
      ]
    },
    {
      id: 'u-vs-yu', title: 'u và ü', focus: 'Nguyên âm', level: 2,
      desc: 'ü tròn môi mà lưỡi trước; u tròn môi lưỡi sau — tránh lẫn lù/lǚ.',
      lines: [
        { h: '我喜欢旅行。', p: 'wǒ xǐhuan lǚxíng', v: 'Tôi thích du lịch.', tip: 'lǚ là ü: môi tròn, lưỡi phía trước.' },
        { h: '这条路很长。', p: 'zhè tiáo lù hěn cháng', v: 'Con đường này dài.', tip: 'lù là u: lưỡi lùi về sau.' },
        { h: '下雨别出门。', p: 'xià yǔ bié chūmén', v: 'Trời mưa đừng ra ngoài.', tip: 'yǔ là ü; chū là u.' },
        { h: '绿色很舒服。', p: 'lǜsè hěn shūfu', v: 'Màu xanh lá dễ chịu.', tip: 'lǜ là ü; shū là u, fu nhẹ.' },
        { h: '我们去图书馆。', p: 'wǒmen qù túshūguǎn', v: 'Chúng ta đến thư viện.', tip: 'qù là ü ẩn sau q; tú/shū là u.' },
        { h: '这本书是女儿的。', p: 'zhè běn shū shì nǚ’ér de', v: 'Quyển sách này của con gái.', tip: 'nǚ là ü; shū là u.' },
        { h: '鱼和肉都很新鲜。', p: 'yú hé ròu dōu hěn xīnxiān', v: 'Cá và thịt đều tươi.', tip: 'yú là ü, môi tròn lưỡi trước.' },
        { h: '公共汽车很挤。', p: 'gōnggòng qìchē hěn jǐ', v: 'Xe buýt rất chật.', tip: 'gōng/gòng là u sau; jǐ thanh 3 cuối.' }
      ]
    },
    {
      id: 'half-third-tone', title: 'Bán thượng thanh', focus: 'Thanh điệu', level: 3,
      desc: 'Thanh 3 trước thanh 1/2/4 chỉ đọc nửa đầu (thấp, không nhấc lên).',
      lines: [
        { h: '你说得对。', p: 'nǐ shuō de duì', v: 'Bạn nói đúng.', tip: '你 trước thanh 1 chỉ đọc nửa thấp.' },
        { h: '我来介绍一下。', p: 'wǒ lái jièshào yíxià', v: 'Để tôi giới thiệu.', tip: '我 trước thanh 2 đọc nửa thấp.' },
        { h: '请坐这里。', p: 'qǐng zuò zhèlǐ', v: 'Mời ngồi đây.', tip: '请 trước thanh 4 (zuò) là bán thượng.' },
        { h: '我想喝茶。', p: 'wǒ xiǎng hē chá', v: 'Tôi muốn uống trà.', tip: '想 trước thanh 1 chỉ giữ nửa thấp.' },
        { h: '老师来了。', p: 'lǎoshī lái le', v: 'Thầy đến rồi.', tip: '老 trước thanh 1 thấp, không nhấc.' },
        { h: '你忙不忙？', p: 'nǐ máng bù máng', v: 'Bạn có bận không?', tip: '你 đầu câu bán thượng trước thanh 2.' },
        { h: '我买面包。', p: 'wǒ mǎi miànbāo', v: 'Tôi mua bánh mì.', tip: '我 nửa thấp; 买 trước thanh 4 cũng bán thượng.' },
        { h: '请问怎么走？', p: 'qǐngwèn zěnme zǒu', v: 'Xin hỏi đi thế nào?', tip: '请 bán thượng; chỉ 走 cuối nhấc đủ.' }
      ]
    },
    {
      id: 'topic-family', title: 'Gia đình', focus: 'Chủ đề', level: 1,
      desc: 'Câu giới thiệu và trò chuyện về người thân trong nhà.',
      lines: [
        { h: '这是我的妈妈。', p: 'zhè shì wǒ de māma', v: 'Đây là mẹ tôi.', tip: '妈妈 thanh 1 + nhẹ, giữ đều.' },
        { h: '我有一个哥哥。', p: 'wǒ yǒu yí ge gēge', v: 'Tôi có một anh trai.', tip: '一 trước thanh 4 (个) đọc yí; 哥哥 nhẹ sau.' },
        { h: '爸爸在工作。', p: 'bàba zài gōngzuò', v: 'Bố đang làm việc.', tip: 'bà không bật hơi; zuò rơi rõ.' },
        { h: '我们一家四口。', p: 'wǒmen yì jiā sì kǒu', v: 'Nhà tôi bốn người.', tip: '四口 hai âm hạ, đọc dứt khoát.' },
        { h: '奶奶今年七十岁。', p: 'nǎinai jīnnián qīshí suì', v: 'Bà nội năm nay 70 tuổi.', tip: 'nǎinai hai thanh 3 → âm đầu nâng nhẹ.' },
        { h: '弟弟还在上学。', p: 'dìdi hái zài shàngxué', v: 'Em trai vẫn đang đi học.', tip: '还 thanh 2 đi lên; 上 thanh 4 rơi.' },
        { h: '周末我们一起吃饭。', p: 'zhōumò wǒmen yìqǐ chīfàn', v: 'Cuối tuần cả nhà ăn cơm chung.', tip: 'Ngắt: 周末 / 我们一起 / 吃饭.' },
        { h: '我很爱我的家人。', p: 'wǒ hěn ài wǒ de jiārén', v: 'Tôi rất yêu người thân.', tip: '我很 bán thượng; nhấn 家人.' }
      ]
    },
    {
      id: 'topic-shopping', title: 'Mua sắm', focus: 'Chủ đề', level: 2,
      desc: 'Hỏi giá, mặc cả, chọn món khi đi mua đồ.',
      lines: [
        { h: '这个多少钱？', p: 'zhège duōshao qián', v: 'Cái này bao nhiêu tiền?', tip: '多少 thanh 1 + nhẹ; 钱 đi lên cuối.' },
        { h: '太贵了，能便宜点吗？', p: 'tài guì le, néng piányi diǎn ma', v: 'Đắt quá, rẻ hơn được không?', tip: 'Dừng sau 太贵了; 便宜 = piányi, yi nhẹ.' },
        { h: '我要买这件衣服。', p: 'wǒ yào mǎi zhè jiàn yīfu', v: 'Tôi muốn mua chiếc áo này.', tip: '我要买 rõ ràng; 衣服 fu nhẹ.' },
        { h: '有没有别的颜色？', p: 'yǒu méiyǒu bié de yánsè', v: 'Có màu khác không?', tip: '有没有 lên-xuống-lên, đọc liền.' },
        { h: '这是我的零钱。', p: 'zhè shì wǒ de língqián', v: 'Đây là tiền lẻ của tôi.', tip: '零钱 đều thanh 2, đi lên mượt.' },
        { h: '可以刷卡吗？', p: 'kěyǐ shuākǎ ma', v: 'Quẹt thẻ được không?', tip: 'shuā/kǎ tách rõ; ma nhẹ.' },
        { h: '请给我一个袋子。', p: 'qǐng gěi wǒ yí ge dàizi', v: 'Cho tôi một cái túi.', tip: '一个 = yí ge; 袋子 zi nhẹ.' },
        { h: '我再看看别的。', p: 'wǒ zài kànkan bié de', v: 'Tôi xem thêm cái khác.', tip: '看看 âm sau nhẹ; 别的 de nhẹ.' }
      ]
    },
    {
      id: 'topic-food-order', title: 'Ăn uống & gọi món', focus: 'Chủ đề', level: 2,
      desc: 'Đặt món, hỏi vị, thanh toán ở nhà hàng.',
      lines: [
        { h: '服务员，点菜。', p: 'fúwùyuán, diǎn cài', v: 'Phục vụ ơi, gọi món.', tip: 'Gọi 服务员 rồi dừng nhẹ.' },
        { h: '我要一碗牛肉面。', p: 'wǒ yào yì wǎn niúròu miàn', v: 'Tôi muốn một bát mì bò.', tip: '一碗 = yì wǎn; 牛肉面 nhịp 1-2-1.' },
        { h: '这个菜辣不辣？', p: 'zhège cài là bu là', v: 'Món này có cay không?', tip: '辣不辣 giữa đọc bu nhẹ.' },
        { h: '请少放盐。', p: 'qǐng shǎo fàng yán', v: 'Cho ít muối thôi.', tip: '少放 thanh 3/4 dứt khoát; 盐 lên cuối.' },
        { h: '再来一瓶水。', p: 'zài lái yì píng shuǐ', v: 'Thêm một chai nước.', tip: '一瓶 = yì píng; píng bật hơi.' },
        { h: '这是免费的吗？', p: 'zhè shì miǎnfèi de ma', v: 'Cái này miễn phí à?', tip: '免费 thanh 3+4; de/ma nhẹ.' },
        { h: '我们要打包。', p: 'wǒmen yào dǎbāo', v: 'Chúng tôi muốn gói mang về.', tip: '打包 = dǎbāo, bāo thanh 1 cao.' },
        { h: '结账，谢谢。', p: 'jiézhàng, xièxie', v: 'Tính tiền, cảm ơn.', tip: '结账 đi lên-rơi; xièxie sau nhẹ.' }
      ]
    },
    {
      id: 'topic-work', title: 'Công việc & văn phòng', focus: 'Chủ đề', level: 4,
      desc: 'Trao đổi công việc, lịch họp, email trong môi trường công sở.',
      lines: [
        { h: '这个项目下周完成。', p: 'zhège xiàngmù xià zhōu wánchéng', v: 'Dự án này tuần sau xong.', tip: '项目 thanh 4+4; 完成 đi lên-rơi.' },
        { h: '我马上发邮件给你。', p: 'wǒ mǎshàng fā yóujiàn gěi nǐ', v: 'Tôi gửi email cho bạn ngay.', tip: '马上 = mǎshàng; Ngắt: 我马上 / 发邮件 / 给你.' },
        { h: '下午两点开会。', p: 'xiàwǔ liǎng diǎn kāihuì', v: 'Hai giờ chiều họp.', tip: '两点 hai thanh 3; 开会 thanh 1+4.' },
        { h: '请把报告交给经理。', p: 'qǐng bǎ bàogào jiāo gěi jīnglǐ', v: 'Nộp báo cáo cho quản lý nhé.', tip: 'Ngắt: 请把报告 / 交给 / 经理.' },
        { h: '我今天要加班。', p: 'wǒ jīntiān yào jiābān', v: 'Hôm nay tôi phải tăng ca.', tip: '加班 thanh 1, đọc đều cao.' },
        { h: '这件事需要再讨论。', p: 'zhè jiàn shì xūyào zài tǎolùn', v: 'Việc này cần bàn thêm.', tip: '需要 xū là ü; 讨论 thanh 3+4.' },
        { h: '谢谢你的配合。', p: 'xièxie nǐ de pèihé', v: 'Cảm ơn sự hợp tác của bạn.', tip: '配合 thanh 4+2; nhấn 配合.' },
        { h: '我们分工合作吧。', p: 'wǒmen fēngōng hézuò ba', v: 'Chúng ta chia việc cùng làm nhé.', tip: '分工 thanh 1; 合作 thanh 2+4; ba nhẹ.' }
      ]
    },
    {
      id: 'topic-health', title: 'Sức khỏe & khám bệnh', focus: 'Chủ đề', level: 3,
      desc: 'Mô tả triệu chứng, hỏi bác sĩ, mua thuốc.',
      lines: [
        { h: '我有点儿不舒服。', p: 'wǒ yǒudiǎnr bù shūfu', v: 'Tôi hơi khó chịu.', tip: '有点儿 = yǒudiǎnr cuốn lưỡi; 舒服 fu nhẹ.' },
        { h: '我头疼，还发烧。', p: 'wǒ tóuténg, hái fāshāo', v: 'Tôi đau đầu, lại còn sốt.', tip: 'Dừng sau 头疼; 发烧 thanh 1 cao đều.' },
        { h: '你应该多休息。', p: 'nǐ yīnggāi duō xiūxi', v: 'Bạn nên nghỉ nhiều hơn.', tip: '应该 thanh 1 đều; 休息 xi nhẹ.' },
        { h: '这种药一天吃三次。', p: 'zhè zhǒng yào yì tiān chī sān cì', v: 'Thuốc này ngày uống ba lần.', tip: '一天 = yì tiān; 三次 đếm rõ.' },
        { h: '我想挂号看医生。', p: 'wǒ xiǎng guàhào kàn yīshēng', v: 'Tôi muốn lấy số khám bác sĩ.', tip: 'Ngắt: 我想 / 挂号 / 看医生.' },
        { h: '多喝热水会好一点。', p: 'duō hē rè shuǐ huì hǎo yìdiǎn', v: 'Uống nhiều nước nóng sẽ đỡ hơn.', tip: '热水 rè uốn lưỡi; 一点 = yìdiǎn.' },
        { h: '我对花粉过敏。', p: 'wǒ duì huāfěn guòmǐn', v: 'Tôi dị ứng phấn hoa.', tip: '过敏 thanh 4+3, rơi rồi mở.' },
        { h: '注意身体，别太累。', p: 'zhùyì shēntǐ, bié tài lèi', v: 'Giữ sức khỏe, đừng mệt quá.', tip: 'Dừng sau 身体; 太累 hai thanh 4.' }
      ]
    },
    {
      id: 'topic-emotions', title: 'Cảm xúc', focus: 'Chủ đề', level: 3,
      desc: 'Diễn đạt vui buồn, lo lắng, hài lòng.',
      lines: [
        { h: '我今天很开心。', p: 'wǒ jīntiān hěn kāixīn', v: 'Hôm nay tôi rất vui.', tip: '开心 thanh 1 cao; 很 bán thượng.' },
        { h: '听到这个消息我很难过。', p: 'tīngdào zhège xiāoxi wǒ hěn nánguò', v: 'Nghe tin này tôi rất buồn.', tip: 'Ngắt sau 消息; 难过 thanh 2+4.' },
        { h: '别担心，会好起来的。', p: 'bié dānxīn, huì hǎo qǐlái de', v: 'Đừng lo, sẽ ổn thôi.', tip: '担心 thanh 1; 起来的 đuôi nhẹ dần.' },
        { h: '我有点紧张。', p: 'wǒ yǒudiǎn jǐnzhāng', v: 'Tôi hơi căng thẳng.', tip: '有点 = yǒudiǎn; 紧张 thanh 3+1.' },
        { h: '这让我很感动。', p: 'zhè ràng wǒ hěn gǎndòng', v: 'Điều này khiến tôi cảm động.', tip: '感动 thanh 3+4, mở rồi rơi.' },
        { h: '我对结果很满意。', p: 'wǒ duì jiéguǒ hěn mǎnyì', v: 'Tôi rất hài lòng với kết quả.', tip: '满意 thanh 3+4; nhấn 满意.' },
        { h: '他生气了，别说话。', p: 'tā shēngqì le, bié shuōhuà', v: 'Anh ấy giận rồi, đừng nói.', tip: 'Dừng sau 生气了; 说话 sh uốn lưỡi.' },
        { h: '希望明天会更好。', p: 'xīwàng míngtiān huì gèng hǎo', v: 'Mong ngày mai tốt hơn.', tip: '希望 thanh 1+4; nhấn 更好.' }
      ]
    },
    {
      id: 'topic-weather', title: 'Thời tiết & mùa', focus: 'Chủ đề', level: 2,
      desc: 'Nói về thời tiết hôm nay và các mùa trong năm.',
      lines: [
        { h: '今天天气怎么样？', p: 'jīntiān tiānqì zěnmeyàng', v: 'Hôm nay thời tiết thế nào?', tip: '怎么样 me nhẹ, 样 rơi cuối.' },
        { h: '外面在下雨。', p: 'wàimiàn zài xià yǔ', v: 'Bên ngoài đang mưa.', tip: '外面 hai thanh 4; 下雨 thanh 4+3.' },
        { h: '夏天很热，冬天很冷。', p: 'xiàtiān hěn rè, dōngtiān hěn lěng', v: 'Hè nóng, đông lạnh.', tip: 'Hai vế đối, dừng sau 很热.' },
        { h: '明天可能会刮风。', p: 'míngtiān kěnéng huì guāfēng', v: 'Ngày mai có thể có gió.', tip: '可能 thanh 3+2; 刮风 thanh 1.' },
        { h: '春天的花很漂亮。', p: 'chūntiān de huā hěn piàoliang', v: 'Hoa mùa xuân rất đẹp.', tip: '漂亮 = piàoliang, liang nhẹ.' },
        { h: '记得带伞。', p: 'jìde dài sǎn', v: 'Nhớ mang dù.', tip: '记得 de nhẹ; 带伞 thanh 4+3.' },
        { h: '秋天很凉快。', p: 'qiūtiān hěn liángkuai', v: 'Mùa thu mát mẻ.', tip: '凉快 = liángkuai, kuai nhẹ.' },
        { h: '今天阳光很好。', p: 'jīntiān yángguāng hěn hǎo', v: 'Hôm nay nắng đẹp.', tip: '阳光 thanh 2+1; 很好 bán thượng + nhấc.' }
      ]
    },
    {
      id: 'topic-study', title: 'Học tập & trường lớp', focus: 'Chủ đề', level: 2,
      desc: 'Trò chuyện về bài vở, lớp học, thi cử.',
      lines: [
        { h: '今天有几节课？', p: 'jīntiān yǒu jǐ jié kè', v: 'Hôm nay có mấy tiết học?', tip: '几节课 ba âm rõ; 课 rơi cuối.' },
        { h: '我在学习中文。', p: 'wǒ zài xuéxí Zhōngwén', v: 'Tôi đang học tiếng Trung.', tip: '学习 = xuéxí; 中文 zh uốn lưỡi.' },
        { h: '这道题我不会。', p: 'zhè dào tí wǒ bú huì', v: 'Bài này tôi không làm được.', tip: '不会 = bú huì, 不 đổi thanh 2.' },
        { h: '老师讲得很清楚。', p: 'lǎoshī jiǎng de hěn qīngchu', v: 'Thầy giảng rất rõ.', tip: '清楚 = qīngchu, chu nhẹ.' },
        { h: '下周要考试了。', p: 'xià zhōu yào kǎoshì le', v: 'Tuần sau thi rồi.', tip: '下周 thanh 4+1; 了 nhẹ cuối.' },
        { h: '我们一起复习吧。', p: 'wǒmen yìqǐ fùxí ba', v: 'Cùng ôn bài nhé.', tip: '一起 = yìqǐ; 吧 nhẹ rủ rê.' },
        { h: '别忘了写作业。', p: 'bié wàng le xiě zuòyè', v: 'Đừng quên làm bài tập.', tip: '忘了 le nhẹ; 作业 thanh 4.' },
        { h: '我想多练习口语。', p: 'wǒ xiǎng duō liànxí kǒuyǔ', v: 'Tôi muốn luyện nói nhiều hơn.', tip: 'Ngắt: 我想 / 多练习 / 口语.' }
      ]
    },
    {
      id: 'topic-phone-tech', title: 'Điện thoại & internet', focus: 'Chủ đề', level: 3,
      desc: 'Gọi điện, nhắn tin, dùng mạng và ứng dụng.',
      lines: [
        { h: '我的手机没电了。', p: 'wǒ de shǒujī méi diàn le', v: 'Điện thoại tôi hết pin.', tip: '手机 thanh 3+1; 没电 thanh 2+4.' },
        { h: '这里有没有无线网？', p: 'zhèlǐ yǒu méiyǒu wúxiànwǎng', v: 'Ở đây có wifi không?', tip: '有没有 liền mạch; 无线网 -ng cuối.' },
        { h: '我给你发个微信。', p: 'wǒ gěi nǐ fā ge Wēixìn', v: 'Tôi nhắn WeChat cho bạn.', tip: '发个 ge nhẹ; 微信 thanh 1+4.' },
        { h: '信号不太好。', p: 'xìnhào bú tài hǎo', v: 'Sóng không tốt lắm.', tip: '不太 = bú tài; 好 nhấc cuối.' },
        { h: '你能帮我充电吗？', p: 'nǐ néng bāng wǒ chōngdiàn ma', v: 'Bạn sạc giúp tôi được không?', tip: '充电 ch bật hơi, uốn lưỡi.' },
        { h: '我刚才没接到电话。', p: 'wǒ gāngcái méi jiēdào diànhuà', v: 'Vừa nãy tôi không nghe được điện thoại.', tip: 'Ngắt: 我刚才 / 没接到 / 电话.' },
        { h: '这个软件很好用。', p: 'zhège ruǎnjiàn hěn hǎoyòng', v: 'Ứng dụng này dễ dùng.', tip: '软件 = ruǎnjiàn, r uốn lưỡi.' },
        { h: '网速有点慢。', p: 'wǎngsù yǒudiǎn màn', v: 'Mạng hơi chậm.', tip: '网速 -ng + u; 有点 = yǒudiǎn.' }
      ]
    },
    {
      id: 'topic-appointment', title: 'Hẹn gặp & thời gian', focus: 'Chủ đề', level: 2,
      desc: 'Hẹn giờ, đổi lịch, hỏi thời gian.',
      lines: [
        { h: '我们几点见面？', p: 'wǒmen jǐ diǎn jiànmiàn', v: 'Mấy giờ chúng ta gặp?', tip: '几点 thanh 3+3, đầu nâng; 见面 thanh 4.' },
        { h: '明天上午方便吗？', p: 'míngtiān shàngwǔ fāngbiàn ma', v: 'Sáng mai tiện không?', tip: '上午 thanh 4+3; 方便 thanh 1+4.' },
        { h: '我可能会迟到几分钟。', p: 'wǒ kěnéng huì chídào jǐ fēnzhōng', v: 'Tôi có thể trễ vài phút.', tip: 'Ngắt: 我可能会 / 迟到 / 几分钟.' },
        { h: '在地铁站门口等你。', p: 'zài dìtiězhàn ménkǒu děng nǐ', v: 'Đợi bạn ở cửa ga tàu.', tip: '门口 thanh 2+3; 等你 hai thanh 3.' },
        { h: '改到周五行吗？', p: 'gǎi dào zhōuwǔ xíng ma', v: 'Đổi sang thứ Sáu được không?', tip: '周五 thanh 1+3; 行吗 nhẹ cuối.' },
        { h: '时间还早，不着急。', p: 'shíjiān hái zǎo, bù zháojí', v: 'Còn sớm, không vội.', tip: 'Dừng sau 还早; 着急 = zháojí.' },
        { h: '别迟到啊。', p: 'bié chídào a', v: 'Đừng đến muộn nhé.', tip: '迟到 thanh 2+4; 啊 nhẹ kéo.' },
        { h: '我们说好六点。', p: 'wǒmen shuōhǎo liù diǎn', v: 'Chúng ta hẹn sáu giờ.', tip: '说好 thanh 1+3; 六点 hai thanh hạ.' }
      ]
    },
    {
      id: 'topic-directions', title: 'Hỏi đường', focus: 'Chủ đề', level: 2,
      desc: 'Hỏi và chỉ đường, phương hướng.',
      lines: [
        { h: '请问银行怎么走？', p: 'qǐngwèn yínháng zěnme zǒu', v: 'Xin hỏi ngân hàng đi thế nào?', tip: '请问 lịch sự; 怎么走 me nhẹ.' },
        { h: '一直往前走。', p: 'yìzhí wǎng qián zǒu', v: 'Cứ đi thẳng.', tip: '一直 = yìzhí một cụm; 往前走 nhịp 2-2-1.' },
        { h: '到红绿灯往右拐。', p: 'dào hónglǜdēng wǎng yòu guǎi', v: 'Đến đèn giao thông rẽ phải.', tip: '红绿灯 thanh 2-4-1; 右拐 thanh 4+3.' },
        { h: '离这儿远不远？', p: 'lí zhèr yuǎn bu yuǎn', v: 'Cách đây có xa không?', tip: '这儿 = zhèr; 远不远 giữa bu nhẹ.' },
        { h: '就在那座楼旁边。', p: 'jiù zài nà zuò lóu pángbiān', v: 'Ngay cạnh tòa nhà kia.', tip: '旁边 = pángbiān, biān nhẹ cuối.' },
        { h: '走路大概十分钟。', p: 'zǒulù dàgài shí fēnzhōng', v: 'Đi bộ khoảng mười phút.', tip: '大概 thanh 4; 十分钟 đếm rõ.' },
        { h: '我迷路了。', p: 'wǒ mílù le', v: 'Tôi bị lạc đường.', tip: '迷路 thanh 2+4; 了 nhẹ.' },
        { h: '对面就是地铁站。', p: 'duìmiàn jiùshì dìtiězhàn', v: 'Đối diện là ga tàu điện.', tip: '对面 thanh 4; 地铁站 zhàn uốn lưỡi.' }
      ]
    },
    {
      id: 'topic-hobby', title: 'Sở thích & giải trí', focus: 'Chủ đề', level: 3,
      desc: 'Nói về sở thích, phim ảnh, âm nhạc, cuối tuần.',
      lines: [
        { h: '你周末喜欢做什么？', p: 'nǐ zhōumò xǐhuan zuò shénme', v: 'Cuối tuần bạn thích làm gì?', tip: '喜欢 = xǐhuan, huan nhẹ; 什么 me nhẹ.' },
        { h: '我喜欢看电影。', p: 'wǒ xǐhuan kàn diànyǐng', v: 'Tôi thích xem phim.', tip: '电影 thanh 4+3; nhấn 看电影.' },
        { h: '我每天都听音乐。', p: 'wǒ měitiān dōu tīng yīnyuè', v: 'Tôi nghe nhạc mỗi ngày.', tip: '每天 thanh 3+1; 音乐 = yīnyuè.' },
        { h: '他爱打篮球。', p: 'tā ài dǎ lánqiú', v: 'Anh ấy thích chơi bóng rổ.', tip: '打篮球 thanh 3-2-2, liền mạch.' },
        { h: '我们一起去唱歌吧。', p: 'wǒmen yìqǐ qù chànggē ba', v: 'Cùng đi hát nhé.', tip: '唱歌 ch bật hơi; 吧 nhẹ.' },
        { h: '我最近在学画画。', p: 'wǒ zuìjìn zài xué huàhuà', v: 'Dạo này tôi học vẽ.', tip: '画画 hai thanh 4, âm sau nhẹ hơn.' },
        { h: '这本小说很有意思。', p: 'zhè běn xiǎoshuō hěn yǒuyìsi', v: 'Cuốn tiểu thuyết này rất thú vị.', tip: '有意思 = yǒuyìsi, si nhẹ.' },
        { h: '拍照是我的爱好。', p: 'pāizhào shì wǒ de àihào', v: 'Chụp ảnh là sở thích của tôi.', tip: '拍照 p bật hơi; 爱好 thanh 4+3.' }
      ]
    },
    {
      id: 'topic-bank-post', title: 'Ngân hàng & bưu điện', focus: 'Chủ đề', level: 4,
      desc: 'Giao dịch ngân hàng, gửi bưu phẩm, đổi tiền.',
      lines: [
        { h: '我想开一个账户。', p: 'wǒ xiǎng kāi yí ge zhànghù', v: 'Tôi muốn mở một tài khoản.', tip: '一个 = yí ge; 账户 zh uốn lưỡi.' },
        { h: '请问怎么取钱？', p: 'qǐngwèn zěnme qǔ qián', v: 'Xin hỏi rút tiền thế nào?', tip: '取 qǔ là ü; 钱 đi lên cuối.' },
        { h: '我要把这个包裹寄到上海。', p: 'wǒ yào bǎ zhège bāoguǒ jì dào Shànghǎi', v: 'Tôi muốn gửi gói này đi Thượng Hải.', tip: 'Ngắt: 把这个包裹 / 寄到 / 上海.' },
        { h: '这里可以换外币吗？', p: 'zhèlǐ kěyǐ huàn wàibì ma', v: 'Ở đây đổi ngoại tệ được không?', tip: '换 h cọ xát; 外币 thanh 4.' },
        { h: '请填一下这张表。', p: 'qǐng tián yíxià zhè zhāng biǎo', v: 'Điền giúp tôi tờ phiếu này.', tip: '填 thanh 2 lên; 一下 = yíxià.' },
        { h: '邮费是多少？', p: 'yóufèi shì duōshao', v: 'Phí gửi là bao nhiêu?', tip: '邮费 thanh 2+4; 多少 少 nhẹ.' },
        { h: '我忘了密码。', p: 'wǒ wàng le mìmǎ', v: 'Tôi quên mật khẩu.', tip: '忘了 le nhẹ; 密码 thanh 4+3.' },
        { h: '请在这里签名。', p: 'qǐng zài zhèlǐ qiānmíng', v: 'Xin ký tên ở đây.', tip: '签名 thanh 1+2; 名 đi lên cuối.' }
      ]
    },
    {
      id: 'topic-renting', title: 'Thuê nhà & chỗ ở', focus: 'Chủ đề', level: 4,
      desc: 'Hỏi thuê phòng, tiện nghi, hợp đồng.',
      lines: [
        { h: '这个房子月租多少？', p: 'zhège fángzi yuèzū duōshao', v: 'Nhà này thuê bao nhiêu một tháng?', tip: '房子 zi nhẹ; 月租 thanh 4+1.' },
        { h: '房间里有空调吗？', p: 'fángjiān lǐ yǒu kōngtiáo ma', v: 'Trong phòng có điều hòa không?', tip: '空调 thanh 1+2; 吗 nhẹ.' },
        { h: '水电费包括在内吗？', p: 'shuǐdiànfèi bāokuò zàinèi ma', v: 'Tiền điện nước đã bao gồm chưa?', tip: 'Ngắt: 水电费 / 包括在内 / 吗.' },
        { h: '附近交通方便吗？', p: 'fùjìn jiāotōng fāngbiàn ma', v: 'Giao thông gần đây có tiện không?', tip: '附近 thanh 4; 方便 thanh 1+4.' },
        { h: '我想先看看房子。', p: 'wǒ xiǎng xiān kànkan fángzi', v: 'Tôi muốn xem nhà trước.', tip: '看看 sau nhẹ; 房子 zi nhẹ.' },
        { h: '合同签多长时间？', p: 'hétong qiān duō cháng shíjiān', v: 'Hợp đồng ký bao lâu?', tip: '合同 thanh 2 + nhẹ; 多长时间 đọc liền.' },
        { h: '押金可以退吗？', p: 'yājīn kěyǐ tuì ma', v: 'Tiền cọc có hoàn lại không?', tip: '押金 thanh 1; 退 t bật hơi.' },
        { h: '我下个月想搬家。', p: 'wǒ xià ge yuè xiǎng bānjiā', v: 'Tháng sau tôi muốn chuyển nhà.', tip: '下个月 thanh 4-nhẹ-4; 搬家 thanh 1.' }
      ]
    },
    {
      id: 'topic-travel-trip', title: 'Du lịch & tham quan', focus: 'Chủ đề', level: 4,
      desc: 'Lên kế hoạch, đặt phòng, tham quan khi đi du lịch.',
      lines: [
        { h: '我打算去云南旅游。', p: 'wǒ dǎsuàn qù Yúnnán lǚyóu', v: 'Tôi định đi du lịch Vân Nam.', tip: '旅游 = lǚyóu, lǚ là ü.' },
        { h: '这附近有什么景点？', p: 'zhè fùjìn yǒu shénme jǐngdiǎn', v: 'Gần đây có điểm tham quan nào?', tip: '景点 hai thanh 3, đầu nâng nhẹ.' },
        { h: '我想订一个标准间。', p: 'wǒ xiǎng dìng yí ge biāozhǔnjiān', v: 'Tôi muốn đặt một phòng tiêu chuẩn.', tip: '一个 = yí ge; 标准间 thanh 1-3-1.' },
        { h: '门票多少钱一张？', p: 'ménpiào duōshao qián yì zhāng', v: 'Vé vào cửa bao nhiêu một tấm?', tip: '门票 thanh 2+4; 一张 = yì zhāng.' },
        { h: '可以帮我拍张照吗？', p: 'kěyǐ bāng wǒ pāi zhāng zhào ma', v: 'Chụp giúp tôi tấm ảnh được không?', tip: '拍 p bật hơi, 照 zh uốn lưỡi.' },
        { h: '这里的风景真美。', p: 'zhèlǐ de fēngjǐng zhēn měi', v: 'Phong cảnh ở đây đẹp thật.', tip: '风景 -ng; 真美 thanh 1+3.' },
        { h: '我们坐几点的火车？', p: 'wǒmen zuò jǐ diǎn de huǒchē', v: 'Chúng ta đi tàu mấy giờ?', tip: '几点 hai thanh 3; 火车 thanh 3+1.' },
        { h: '别忘了带护照。', p: 'bié wàng le dài hùzhào', v: 'Đừng quên mang hộ chiếu.', tip: '护照 thanh 4; nhấn 护照.' }
      ]
    },
    {
      id: 'topic-festival', title: 'Lễ tết & văn hóa', focus: 'Chủ đề', level: 4,
      desc: 'Phong tục lễ tết và lời chúc thông dụng.',
      lines: [
        { h: '春节是最重要的节日。', p: 'Chūnjié shì zuì zhòngyào de jiérì', v: 'Tết là ngày lễ quan trọng nhất.', tip: '春节 ch bật hơi; nhấn 最重要.' },
        { h: '过年我们要吃饺子。', p: 'guònián wǒmen yào chī jiǎozi', v: 'Tết chúng tôi ăn sủi cảo.', tip: '过年 thanh 4+2; 饺子 zi nhẹ.' },
        { h: '祝你身体健康。', p: 'zhù nǐ shēntǐ jiànkāng', v: 'Chúc bạn sức khỏe dồi dào.', tip: '身体 thanh 1+3; 健康 thanh 4+1.' },
        { h: '中秋节要吃月饼。', p: 'Zhōngqiūjié yào chī yuèbǐng', v: 'Tết Trung thu ăn bánh trung thu.', tip: '中秋节 thanh 1-1-2; 月饼 thanh 4+3.' },
        { h: '孩子们喜欢收红包。', p: 'háizimen xǐhuan shōu hóngbāo', v: 'Trẻ con thích nhận lì xì.', tip: '喜欢 huan nhẹ; 红包 thanh 2+1.' },
        { h: '新年快乐，万事如意。', p: 'xīnnián kuàilè, wànshì rúyì', v: 'Chúc mừng năm mới, vạn sự như ý.', tip: 'Hai cụm chúc, dừng sau 快乐.' },
        { h: '我们一起放烟花。', p: 'wǒmen yìqǐ fàng yānhuā', v: 'Chúng ta cùng đốt pháo hoa.', tip: '一起 = yìqǐ; 烟花 thanh 1.' },
        { h: '这是中国的传统文化。', p: 'zhè shì Zhōngguó de chuántǒng wénhuà', v: 'Đây là văn hóa truyền thống Trung Quốc.', tip: '传统 ch bật hơi; 文化 thanh 2+4.' }
      ]
    },
    {
      id: 'topic-sports', title: 'Thể thao & rèn luyện', focus: 'Chủ đề', level: 3,
      desc: 'Tập luyện, chơi thể thao, giữ dáng.',
      lines: [
        { h: '我每天早上跑步。', p: 'wǒ měitiān zǎoshang pǎobù', v: 'Sáng nào tôi cũng chạy bộ.', tip: '跑步 p bật hơi, hai thanh 3.' },
        { h: '你喜欢什么运动？', p: 'nǐ xǐhuan shénme yùndòng', v: 'Bạn thích môn thể thao nào?', tip: '运动 thanh 4; 什么 me nhẹ.' },
        { h: '我们去游泳吧。', p: 'wǒmen qù yóuyǒng ba', v: 'Đi bơi nhé.', tip: '游泳 thanh 2+3; 吧 nhẹ.' },
        { h: '多运动对身体好。', p: 'duō yùndòng duì shēntǐ hǎo', v: 'Vận động nhiều tốt cho sức khỏe.', tip: 'Ngắt: 多运动 / 对身体好.' },
        { h: '我办了一张健身卡。', p: 'wǒ bàn le yì zhāng jiànshēn kǎ', v: 'Tôi làm một thẻ tập gym.', tip: '一张 = yì zhāng; 健身卡 đếm rõ.' },
        { h: '比赛几点开始？', p: 'bǐsài jǐ diǎn kāishǐ', v: 'Trận đấu mấy giờ bắt đầu?', tip: '比赛 thanh 3+4; 开始 thanh 1+3.' },
        { h: '运动前要热身。', p: 'yùndòng qián yào rèshēn', v: 'Trước khi tập phải khởi động.', tip: '热身 r uốn lưỡi; 前 đi lên.' },
        { h: '坚持锻炼很重要。', p: 'jiānchí duànliàn hěn zhòngyào', v: 'Kiên trì rèn luyện rất quan trọng.', tip: '坚持 thanh 1+2; nhấn 重要.' }
      ]
    },
    {
      id: 'topic-environment', title: 'Môi trường', focus: 'Chủ đề', level: 5,
      desc: 'Bảo vệ môi trường, tiết kiệm, phân loại rác.',
      lines: [
        { h: '我们应该保护环境。', p: 'wǒmen yīnggāi bǎohù huánjìng', v: 'Chúng ta nên bảo vệ môi trường.', tip: '保护 thanh 3+4; 环境 thanh 2+4.' },
        { h: '请把垃圾分类。', p: 'qǐng bǎ lājī fēnlèi', v: 'Hãy phân loại rác.', tip: '垃圾 thanh 1; 分类 thanh 1+4.' },
        { h: '节约用水很重要。', p: 'jiéyuē yòng shuǐ hěn zhòngyào', v: 'Tiết kiệm nước rất quan trọng.', tip: '节约 thanh 1+1; nhấn 重要.' },
        { h: '空气污染越来越严重。', p: 'kōngqì wūrǎn yuèláiyuè yánzhòng', v: 'Ô nhiễm không khí ngày càng nặng.', tip: '越来越 đọc liền; nhấn 严重.' },
        { h: '出门尽量坐公交车。', p: 'chūmén jǐnliàng zuò gōngjiāochē', v: 'Ra ngoài cố gắng đi xe buýt.', tip: '尽量 thanh 3+4; 公交车 ch bật hơi.' },
        { h: '少用一次性塑料。', p: 'shǎo yòng yícìxìng sùliào', v: 'Hạn chế dùng nhựa dùng một lần.', tip: '一次性 = yícìxìng; 塑料 thanh 4.' },
        { h: '多种树有好处。', p: 'duō zhòng shù yǒu hǎochù', v: 'Trồng nhiều cây có lợi.', tip: '种树 thanh 4+4; 好处 = hǎochù.' },
        { h: '保护地球是每个人的责任。', p: 'bǎohù dìqiú shì měi ge rén de zérèn', v: 'Bảo vệ Trái Đất là trách nhiệm của mỗi người.', tip: 'Ngắt: 保护地球 / 是每个人的 / 责任.' }
      ]
    },
    {
      id: 'topic-tech-society', title: 'Công nghệ & đời sống', focus: 'HSK 5+', level: 5,
      desc: 'Tác động của công nghệ tới cuộc sống hằng ngày.',
      lines: [
        { h: '智能手机改变了我们的生活。', p: 'zhìnéng shǒujī gǎibiàn le wǒmen de shēnghuó', v: 'Điện thoại thông minh đã thay đổi cuộc sống.', tip: 'Ngắt: 智能手机 / 改变了 / 我们的生活.' },
        { h: '网上购物又方便又快。', p: 'wǎngshàng gòuwù yòu fāngbiàn yòu kuài', v: 'Mua sắm online vừa tiện vừa nhanh.', tip: '又...又... cân hai vế.' },
        { h: '很多人习惯用手机支付。', p: 'hěn duō rén xíguàn yòng shǒujī zhīfù', v: 'Nhiều người quen thanh toán bằng điện thoại.', tip: '习惯 = xíguàn; 支付 zh uốn lưỡi.' },
        { h: '人工智能发展得很快。', p: 'réngōng zhìnéng fāzhǎn de hěn kuài', v: 'Trí tuệ nhân tạo phát triển rất nhanh.', tip: '人工 r uốn lưỡi; nhấn 很快.' },
        { h: '我们要注意保护个人信息。', p: 'wǒmen yào zhùyì bǎohù gèrén xìnxī', v: 'Cần chú ý bảo vệ thông tin cá nhân.', tip: 'Ngắt: 我们要注意 / 保护 / 个人信息.' },
        { h: '在家也能远程办公。', p: 'zài jiā yě néng yuǎnchéng bàngōng', v: 'Ở nhà cũng làm việc từ xa được.', tip: '远程 thanh 3+2; 办公 thanh 4+1.' },
        { h: '网络让学习更方便。', p: 'wǎngluò ràng xuéxí gèng fāngbiàn', v: 'Internet giúp việc học tiện hơn.', tip: '网络 -ng + l; nhấn 更方便.' },
        { h: '不过也别太依赖手机。', p: 'búguò yě bié tài yīlài shǒujī', v: 'Nhưng cũng đừng quá lệ thuộc điện thoại.', tip: '不过 = búguò; 依赖 thanh 1+4.' }
      ]
    },
    {
      id: 'topic-workplace-comm', title: 'Giao tiếp công sở nâng cao', focus: 'HSK 6', level: 6,
      desc: 'Diễn đạt lịch sự, đề xuất và phản hồi trong môi trường chuyên nghiệp.',
      lines: [
        { h: '关于这个方案，我有几点建议。', p: 'guānyú zhège fāng’àn, wǒ yǒu jǐ diǎn jiànyì', v: 'Về phương án này, tôi có vài đề xuất.', tip: 'Dừng sau 方案; nhấn 几点建议.' },
        { h: '如果时间允许，我们可以再讨论。', p: 'rúguǒ shíjiān yǔnxǔ, wǒmen kěyǐ zài tǎolùn', v: 'Nếu thời gian cho phép, ta có thể bàn thêm.', tip: '如果...允许 vế điều kiện, nghỉ rồi tiếp.' },
        { h: '这件事还需要进一步确认。', p: 'zhè jiàn shì hái xūyào jìnyíbù quèrèn', v: 'Việc này cần xác nhận thêm.', tip: '进一步 = jìnyíbù một cụm; 确认 q là ü.' },
        { h: '感谢大家提出的宝贵意见。', p: 'gǎnxiè dàjiā tíchū de bǎoguì yìjiàn', v: 'Cảm ơn ý kiến quý báu của mọi người.', tip: 'Ngắt: 感谢大家 / 提出的 / 宝贵意见.' },
        { h: '我们应该综合考虑各种因素。', p: 'wǒmen yīnggāi zōnghé kǎolǜ gèzhǒng yīnsù', v: 'Chúng ta nên cân nhắc tổng hợp các yếu tố.', tip: '综合 z + h; 考虑 = kǎolǜ, lǜ là ü.' },
        { h: '这个决定对公司影响很大。', p: 'zhège juédìng duì gōngsī yǐngxiǎng hěn dà', v: 'Quyết định này ảnh hưởng lớn đến công ty.', tip: 'Ngắt: 这个决定 / 对公司 / 影响很大.' },
        { h: '请允许我补充一点。', p: 'qǐng yǔnxǔ wǒ bǔchōng yìdiǎn', v: 'Cho phép tôi bổ sung một điểm.', tip: '允许 yǔnxǔ đều ü; 一点 = yìdiǎn.' },
        { h: '希望我们能达成一致。', p: 'xīwàng wǒmen néng dáchéng yízhì', v: 'Mong chúng ta đạt được đồng thuận.', tip: '达成 thanh 2; 一致 = yízhì.' }
      ]
    }
  ]
};
