/**
 * Tạo Google Form "Khảo sát cuối đợt Beta Test — Hanzi Genz"
 *
 * CÁCH DÙNG:
 * 1. Vào https://script.google.com  → New project
 * 2. Xoá code mẫu, dán toàn bộ file này vào
 * 3. Bấm Run (chọn hàm taoFormKhaoSat) → cấp quyền lần đầu
 * 4. Mở Executions / Logs (Ctrl+Enter) để lấy link form (Edit + Trả lời)
 */
function taoFormKhaoSat() {
  var form = FormApp.create('Khảo sát cuối đợt Beta Test — Hanzi Genz')
    .setDescription('Cảm ơn bạn đã đồng hành cùng Hanzi Genz trong 2 tuần qua! 🐉\n' +
      'Khảo sát này khoảng 10 phút. Mỗi góp ý của bạn đều giúp app tốt lên thật sự.')
    .setProgressBar(true)
    .setCollectEmail(false);

  var TINH_NANG = ['Học / Giáo trình', 'Flashcard', 'Quiz', 'Gia sư AI',
                   'Luyện nói HSKK', 'Chấm viết', 'Từ điển', 'Mock test'];

  // ---------- Phần A — Thông tin nhanh ----------
  form.addSectionHeaderItem().setTitle('Phần A — Thông tin nhanh');

  form.addTextItem().setTitle('1. Tên / nickname của bạn?');

  form.addMultipleChoiceItem()
    .setTitle('2. Bạn đang học HSK mấy?')
    .setChoiceValues(['HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5', 'HSK 6', 'Mất gốc']);

  form.addMultipleChoiceItem()
    .setTitle('3. Trong 2 tuần, bạn dùng app khoảng bao nhiêu?')
    .setChoiceValues(['Hầu như mỗi ngày', 'Vài lần một tuần', '1–2 lần', 'Gần như không']);

  form.addMultipleChoiceItem()
    .setTitle('4. Bạn dùng app chủ yếu trên thiết bị nào?')
    .setChoiceValues(['Điện thoại', 'Máy tính', 'Cả hai']);

  // ---------- Phần B — Trải nghiệm tổng thể ----------
  form.addPageBreakItem().setTitle('Phần B — Trải nghiệm tổng thể');

  form.addScaleItem()
    .setTitle('5. Mức độ hài lòng tổng thể của bạn với app?')
    .setBounds(1, 5).setLabels('Rất không hài lòng', 'Rất hài lòng')
    .setRequired(true);

  form.addScaleItem()
    .setTitle('6. Khả năng bạn giới thiệu app cho bạn bè? (0 = không bao giờ, 10 = chắc chắn)')
    .setBounds(0, 10).setLabels('Không giới thiệu', 'Chắc chắn giới thiệu')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('7. Một câu mô tả cảm nhận của bạn về app?');

  // ---------- Phần C — Tính năng ----------
  form.addPageBreakItem().setTitle('Phần C — Tính năng');

  form.addCheckboxItem()
    .setTitle('8. Tính năng bạn thích nhất / dùng nhiều nhất? (chọn nhiều)')
    .setChoiceValues(TINH_NANG)
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('9. Tính năng bạn thấy ít giá trị / không dùng? (chọn nhiều)')
    .setChoiceValues(TINH_NANG);

  form.addParagraphTextItem()
    .setTitle('10. Tính năng nào bạn mong có mà app chưa có?');

  // ---------- Phần D — Vấn đề & độ khó dùng ----------
  form.addPageBreakItem().setTitle('Phần D — Vấn đề & độ khó dùng');

  form.addParagraphTextItem()
    .setTitle('11. Bạn có gặp lỗi / bug nào không? Mô tả ngắn (kèm màn hình nếu nhớ).')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('12. Có chỗ nào khó hiểu, không biết bấm gì tiếp theo không?');

  form.addParagraphTextItem()
    .setTitle('13. Có chỗ nào chậm / lag không?');

  form.addParagraphTextItem()
    .setTitle('14. Nội dung (chữ Hán, pinyin, nghĩa tiếng Việt) có chỗ nào bị sai không?');

  // ---------- Phần E — Giá trị & định giá ----------
  form.addPageBreakItem().setTitle('Phần E — Giá trị & định giá');

  form.addMultipleChoiceItem()
    .setTitle('15. Nếu app không miễn phí, bạn có sẵn sàng trả cho gói Pro không?')
    .setChoiceValues(['Có', 'Cân nhắc', 'Không']);

  form.addTextItem()
    .setTitle('16. Mức giá bạn thấy hợp lý cho 1 năm Pro? (VND)');

  form.addParagraphTextItem()
    .setTitle('17. Lý do khiến bạn sẽ / sẽ không tiếp tục dùng app?');

  // ---------- Phần F — Cho phép dùng review ----------
  form.addPageBreakItem().setTitle('Phần F — Cho phép dùng review (tùy chọn)');

  form.addMultipleChoiceItem()
    .setTitle('18. Mình có được phép trích cảm nhận của bạn làm review không?')
    .setChoiceValues(['Được ghi tên', 'Được nhưng ẩn danh', 'Không']);

  // ---------- In link ----------
  Logger.log('✅ Đã tạo form!');
  Logger.log('📝 Link chỉnh sửa: ' + form.getEditUrl());
  Logger.log('📤 Link gửi tester:  ' + form.getPublishedUrl());
}
