# HSKK 中级 — Phần 2: 看图说话 (Kế hoạch đề + asset)

> **Mục đích:** Chuẩn bị kho đề ảnh + schema data cho HSKK 中级 Phần 2 "Xem tranh nói chuyện".
> Đây là **PREP ONLY** — KHÔNG wire vào engine hskk.js cho tới session build 中级.
> Related: `docs/plans/hskk-zhongji-kantu.md` · asset pipeline `content/assets/PROMPTS.md` · engine `js/hskk.js`

---

## 1. Bối cảnh chuẩn — HSKK 中级 Phần 2

| Hạng mục | Chi tiết |
|---|---|
| Tên phần | 看图说话 (kàn tú shuō huà) — Xem tranh, nói chuyện |
| Số câu mỗi đề | 2 câu (2 bộ ảnh độc lập) |
| Cấu trúc mỗi câu | 1 bộ gồm **2 tranh** liên tiếp kể 1 mạch nhỏ |
| Thời gian chuẩn bị | 2 phút/câu (xem ảnh, lên ý) |
| Thời gian nói | ~2 phút/câu |
| Độ dài đáp án mẫu | 5-8 câu, khoảng 100-150 chữ |
| Đề tài | Sinh hoạt đời thường trung tính — GIA ĐÌNH / CÔNG VIỆC / DU LỊCH / XÃ HỘI |
| Từ vựng mục tiêu | HSK 1–4 (không vượt band 中级) |
| Giám khảo đánh giá | Độ lưu loát, từ vựng, ngữ pháp, nội dung có logic |
| Kho đề mục tiêu app | 20+ bộ ảnh (40+ ảnh PNG → WebP), rotate ngẫu nhiên |

**Lưu ý kỹ thuật app:**
- Mỗi câu = 2 ảnh, thứ tự cố định (tranh A → tranh B).
- Thí sinh KHÔNG được ghi chú, chỉ xem tranh rồi nói trực tiếp.
- App sẽ hiển thị 2 ảnh cạnh nhau trên màn hình, đếm ngược 2 phút chuẩn bị, rồi bắt đầu ghi âm.

---

## 2. Prompt Template (gen ảnh hàng loạt)

### Style string cố định (áp dụng CHO MỌI ảnh 看图说话)

```
Flat illustration, warm pastel colors, Asian characters, cheerful friendly 
expressions, clean white background, no text or logos, simple readable 
scene, 4:3 ratio, suitable for language learning exam material
```

> **QUAN TRỌNG:** Dùng đúng style string này cho TẤT CẢ ảnh để đảm bảo tính nhất quán.
> Nếu dùng Midjourney: thêm `--style raw --v 6 --ar 4:3` vào cuối.
> Nếu dùng Gemini / Flux: thêm style string vào đầu prompt.

### Template tham số hoá

```
[STYLE_STRING]

Scene: {CHỦ_ĐỀ} — Image {A hoặc B} of 2.
{MÔ_TẢ_CẢNH_CỤ_THỂ}

Characters: 2-3 Asian people, clearly showing emotions and actions.
Story beat: {IMAGE_A: mở tình huống / IMAGE_B: diễn biến hoặc kết quả}.
No text, no brand logos, no political/religious symbols.
```

### Ví dụ đã điền — Chủ đề "Tặng quà sinh nhật"

**Tranh A:**
```
Flat illustration, warm pastel colors, Asian characters, cheerful friendly 
expressions, clean white background, no text or logos, simple readable 
scene, 4:3 ratio, suitable for language learning exam material.

Scene: Birthday gift surprise — Image A of 2.
A young woman sits at a table, looking surprised as her friend walks in 
holding a wrapped birthday gift and a small cake with candles. Both characters 
are smiling. The room has simple home decor (table, chairs). 
Story beat: Opening of situation — gift about to be given.
No text, no brand logos, no political/religious symbols.
--style raw --v 6 --ar 4:3
```

**Tranh B:**
```
Flat illustration, warm pastel colors, Asian characters, cheerful friendly 
expressions, clean white background, no text or logos, simple readable 
scene, 4:3 ratio, suitable for language learning exam material.

Scene: Birthday gift surprise — Image B of 2.
The young woman is now opening the wrapped gift happily, paper strewn on 
table. Her friend stands nearby watching with a warm smile. A cake with 
one slice cut is visible. Both look joyful and relaxed.
Story beat: Resolution — gift opened, both happy.
No text, no brand logos, no political/religious symbols.
--style raw --v 6 --ar 4:3
```

---

## 3. Danh sách 25 chủ đề (điền vào template)

Tất cả chủ đề ĐỜI THƯỜNG TRUNG TÍNH — không chính trị, không tôn giáo.

| # | Chủ đề | Mô tả mạch A → B |
|---|---|---|
| 01 | Tặng quà sinh nhật | A: bạn bè đến tặng quà bất ngờ · B: mở quà, cả hai vui |
| 02 | Họp lớp lâu ngày gặp lại | A: bạn bè gặp nhau bắt tay/ôm mừng ở quán · B: cùng ngồi kể chuyện, cười nói vui vẻ |
| 03 | Đi siêu thị mua sắm | A: đẩy xe, chọn đồ trên kệ · B: đến quầy thanh toán, xếp đồ lên quầy |
| 04 | Đón người ở sân bay | A: người đứng chờ ở khu đến, nhìn bảng tên · B: gặp nhau ôm chào, mang hành lý ra |
| 05 | Khám bệnh | A: bệnh nhân ngồi mô tả triệu chứng với bác sĩ · B: bác sĩ kê đơn, bệnh nhân nhận thuốc |
| 06 | Phỏng vấn xin việc | A: ứng viên gõ cửa phòng, nhà tuyển dụng mời vào · B: ngồi đối mặt phỏng vấn, bắt tay kết thúc vui |
| 07 | Trời mưa quên ô | A: người bị ướt dưới mưa trước cửa · B: người qua đường che ô chung, cả hai chạy vào mái hiên |
| 08 | Gia đình xem ảnh cũ | A: cả nhà quây quần nhìn album ảnh · B: bà/ông chỉ ảnh kể chuyện, trẻ em lắng nghe |
| 09 | Học nhóm chuẩn bị thi | A: nhóm 3-4 người ngồi bàn, sách vở mở · B: một người giải thích trên bảng mini, cả nhóm ghi chép |
| 10 | Chuyển nhà | A: dọn đồ vào thùng carton, phòng lộn xộn · B: bạn bè giúp khiêng thùng lên xe/vào nhà mới |
| 11 | Nấu ăn cùng nhau | A: hai người chuẩn bị nguyên liệu, thái rau/thịt · B: bày bàn ăn, ngồi vào bàn cùng bữa |
| 12 | Đi xem phim | A: hàng dài mua vé/snack trước rạp · B: ngồi trong rạp cười/xúc động khi xem phim |
| 13 | Du lịch chụp ảnh | A: đứng trước địa danh, giơ điện thoại selfie · B: ngồi nghỉ xem lại ảnh chụp, tươi cười |
| 14 | Tập thể thao buổi sáng | A: sáng sớm khởi động trong công viên · B: về nhà tắm/ăn sáng, mặt tươi tỉnh |
| 15 | Ăn nhà hàng | A: xem thực đơn, gọi món với nhân viên · B: món ăn bày ra, cả bàn gắp đũa bắt đầu ăn |
| 16 | Sửa chữa đồ trong nhà | A: phát hiện vòi nước bị hỏng, gọi thợ · B: thợ đến sửa xong, chủ nhà hài lòng |
| 17 | Lên tàu/xe đi xa | A: chia tay người thân ở ga/bến · B: đến nơi, người thân ra đón |
| 18 | Hàng xóm giúp nhau | A: hàng xóm gõ cửa hỏi mượn đồ · B: trả lại kèm quà cảm ơn nhỏ |
| 19 | Nhặt được đồ đánh rơi | A: người đánh rơi ví/điện thoại không biết · B: người nhặt được, chạy theo trả lại, cả hai mừng |
| 20 | Nhận kết quả thi/học tốt | A: học sinh mở điện thoại xem điểm, mặt lo · B: thấy điểm cao, nhảy lên vui, khoe bố mẹ |
| 21 | Cắt tóc thay đổi kiểu | A: ngồi ghế thợ tóc, chỉ ảnh mẫu tóc mới · B: nhìn gương hài lòng, thợ tóc tươi cười |
| 22 | Lạc đường hỏi thăm | A: người lạ cầm điện thoại bản đồ, trông bối rối · B: người địa phương chỉ đường nhiệt tình |
| 23 | Ký nhận bưu kiện | A: shipper gõ cửa mang kiện hàng · B: chủ nhà ký nhận, mở hộp hào hứng |
| 24 | Chuẩn bị tiệc nhỏ tại nhà | A: trang trí phòng, thổi bong bóng · B: khách đến, chụp ảnh nhóm vui vẻ |
| 25 | Tìm chỗ ngồi trên tàu/máy bay | A: cầm vé tìm số ghế, hành lý lỉnh kỉnh · B: ngồi ổn định, mở sách/ngủ/nhìn cửa sổ |

---

## 4. Schema data đề (đặc tả — KHÔNG tạo file JS ở bước này)

Mỗi item trong mảng data 中级 看图说话:

```js
{
  id: 'zhongji_kt_01',          // string, unique
  level: 'zhong',               // 'chu' | 'zhong' | 'gao'
  part: 2,                      // phần trong đề thi (Phần 2 = 看图说话)
  topic: '生日礼物',             // chủ đề tiếng Trung (ngắn gọn)
  topicVi: 'Tặng quà sinh nhật', // chủ đề tiếng Việt
  imgs: [
    'assets/hskk/zhongji/kt_01_a.webp',  // tranh A — mở tình huống
    'assets/hskk/zhongji/kt_01_b.webp'   // tranh B — diễn biến/kết quả
  ],
  keywords: [                   // từ khoá gợi ý dùng khi trả lời
    { h: '生日', py: 'shēngrì', vi: 'sinh nhật' },
    { h: '礼物', py: 'lǐwù',   vi: 'quà tặng' },
    { h: '惊喜', py: 'jīngxǐ', vi: 'bất ngờ vui' },
    { h: '打开', py: 'dǎkāi',  vi: 'mở ra' },
    { h: '高兴', py: 'gāoxìng',vi: 'vui mừng' }
  ],
  outline: [                    // gợi ý dàn ý 3-4 ý, hỗ trợ thí sinh chuẩn bị
    '介绍场景：两个朋友在家',
    '发生了什么：朋友送来礼物和蛋糕',
    '当时的感受：收到礼物很惊喜',
    '结果：打开礼物，两个人都很开心'
  ],
  sampleAnswer:
    '这两张图片讲的是一个生日惊喜的故事。' +
    '第一张图中，一位年轻女士坐在桌子旁边，她的好朋友拿着礼物和生日蛋糕走进来，她感到非常惊喜。' +
    '第二张图中，她正在高兴地打开礼物，包装纸散落在桌上。' +
    '她的朋友站在旁边，看着她开心地笑着。' +
    '她们都觉得这个生日非常难忘，友谊真的很重要。'
  // sampleAnswer: vocab HSK 1-4, 5-8 câu, ~100-150 từ
}
```

### Ví dụ item 2 (điền đầy đủ)

```js
{
  id: 'zhongji_kt_07',
  level: 'zhong',
  part: 2,
  topic: '下雨忘带伞',
  topicVi: 'Trời mưa quên ô',
  imgs: [
    'assets/hskk/zhongji/kt_07_a.webp',
    'assets/hskk/zhongji/kt_07_b.webp'
  ],
  keywords: [
    { h: '下雨', py: 'xià yǔ',  vi: 'trời mưa' },
    { h: '雨伞', py: 'yǔsǎn',   vi: 'ô/dù' },
    { h: '忘了', py: 'wàngle',  vi: 'quên mất' },
    { h: '帮助', py: 'bāngzhù', vi: 'giúp đỡ' },
    { h: '感谢', py: 'gǎnxiè',  vi: 'cảm ơn' }
  ],
  outline: [
    '场景：突然下大雨，一个人没有带伞',
    '问题：站在门口，被雨淋湿了',
    '转折：旁边一位陌生人走过来，主动分享雨伞',
    '结果：两人一起跑到屋檐下避雨，互相感谢'
  ],
  sampleAnswer:
    '这两张图片讲的是一个互相帮助的小故事。' +
    '第一张图里，一个男人站在门口，外面正在下大雨，他忘记带伞，全身都被淋湿了，表情很着急。' +
    '第二张图里，一位热心的路人走过来，把自己的雨伞分给他，两个人一起跑到屋檐下躲雨。' +
    '那个男人非常感谢，两人微笑着聊了起来。' +
    '这件事让我觉得，生活中陌生人之间的善意非常温暖。'
}
```

### Ví dụ item 3 (điền đầy đủ)

```js
{
  id: 'zhongji_kt_20',
  level: 'zhong',
  part: 2,
  topic: '考试成绩',
  topicVi: 'Nhận kết quả thi tốt',
  imgs: [
    'assets/hskk/zhongji/kt_20_a.webp',
    'assets/hskk/zhongji/kt_20_b.webp'
  ],
  keywords: [
    { h: '成绩', py: 'chéngjì', vi: 'kết quả, điểm số' },
    { h: '考试', py: 'kǎoshì',  vi: 'kỳ thi' },
    { h: '通过', py: 'tōngguò', vi: 'vượt qua' },
    { h: '努力', py: 'nǔlì',    vi: 'nỗ lực' },
    { h: '父母', py: 'fùmǔ',    vi: 'bố mẹ' }
  ],
  outline: [
    '场景：学生用手机查看考试成绩',
    '紧张：看到成绩之前，表情有点担心',
    '高兴：成绩很好，马上跳起来欢呼',
    '分享：把好消息告诉父母，全家都很开心'
  ],
  sampleAnswer:
    '这两张图片讲的是一个学生查看考试成绩的故事。' +
    '第一张图里，一位女学生拿着手机，表情有些紧张，她在等待考试结果。' +
    '第二张图里，她看到成绩非常好，高兴地跳了起来，旁边的父母也一起为她鼓掌庆祝。' +
    '这说明她之前一定付出了很多努力，认真复习才能得到这么好的成绩。' +
    '我觉得努力学习是非常重要的，成功的时候和家人一起分享真的很幸福。'
}
```

---

## 5. Quy trình áp dụng (pipeline đầy đủ)

```
BƯỚC 1 — Gen ảnh
  Gen theo prompt template ở mục 2 (mỗi chủ đề = 2 prompt A + B)
  → Lưu vào: content/assets/output/hskk-zhongji/
    Đặt tên: kt_{id}_a.png · kt_{id}_b.png  (vd: kt_01_a.png, kt_01_b.png)

BƯỚC 2 — QA thủ công
  ☑ 2 tranh cùng style (so sánh bộ đôi bên nhau)
  ☑ Không có chữ trong ảnh
  ☑ Biểu cảm nhân vật rõ
  ☑ Mạch A → B có logic (ai nhìn cũng hiểu)
  ☑ Không yếu tố chính trị/tôn giáo

BƯỚC 3 — Convert sang WebP
  .\scripts\process-images.ps1 `
    -In  content/assets/output/hskk-zhongji `
    -Out assets/hskk/zhongji `
    -Width 800

BƯỚC 4 — Điền schema data
  Copy template item ở mục 4 → điền imgs path, keywords, outline, sampleAnswer
  Lưu data vào: js/data/hskk/zhong-ji.js  (tạo khi session build 中级)

BƯỚC 5 — Wire vào engine (SESSION SAU — khi build HSKK 中级)
  - Tạo js/data/hskk/zhong-ji.js với mảng HSKK_ZHONGJI_KT
  - Update js/hskk.js để load Phần 2 data từ file này
  - Test: hiển thị 2 ảnh cạnh nhau + timer 2 phút + ghi âm
```

---

## 6. Folder naming convention

```
assets/hskk/
  zhongji/                   ← ảnh 看图说话 (WebP 800px wide, 4:3)
    kt_01_a.webp
    kt_01_b.webp
    kt_02_a.webp
    kt_02_b.webp
    ... (50 files cho 25 đề)
  shuayin/                   ← ảnh Phần 3 (nếu có — sau Phase Y Phần 3)
```

---

## 7. Ưu tiên gen

Thứ tự ưu tiên gen đề (theo độ phổ biến + khả năng đoán được của thí sinh VN):

| Ưu tiên | # | Chủ đề | Lý do |
|---|---|---|---|
| 🔴 Cao | 01 | Tặng quà sinh nhật | Đề gốc phổ biến nhất |
| 🔴 Cao | 07 | Trời mưa quên ô | Tình huống dễ nói, từ vựng cơ bản |
| 🔴 Cao | 05 | Khám bệnh | Vocab cần thiết, thường ra thi |
| 🔴 Cao | 08 | Gia đình xem ảnh | Gia đình = chủ đề ổn định |
| 🟡 TB | 02 | Họp lớp gặp lại | Cảm xúc rõ, dễ gen ảnh |
| 🟡 TB | 11 | Nấu ăn cùng nhau | Vocab bếp núc thiết thực |
| 🟡 TB | 19 | Nhặt được đồ đánh rơi | Câu chuyện đạo đức nhẹ |
| 🟡 TB | 20 | Nhận kết quả thi tốt | Khuyến khích học tập |
| 🟢 Bình thường | 03-06 | Siêu thị / Sân bay / Phỏng vấn... | Gen sau khi đã có 5-8 đề đầu |
