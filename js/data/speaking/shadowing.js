var SHADOW_DATA = {
  meta: {
    version: '1.0',
    totalSets: 10,
    totalLines: 90
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
    }
  ]
};
