const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, ImageRun,
  AlignmentType, LevelFormat, HeadingLevel, BorderStyle, WidthType, ShadingType,
  PageBreak, ExternalHyperlink
} = require("docx");

const RED = "DC2626", GOLD = "B45309", INK = "1F2937", GREEN = "047857", GREY = "6B7280";
const A4_W = 11906, A4_H = 16838, MARGIN = 1440;
const CONTENT_W = A4_W - 2 * MARGIN; // 9026

const H1 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(t)] });
const H2 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(t)] });
const P  = (runs, opts = {}) => new Paragraph({ children: Array.isArray(runs) ? runs : [new TextRun(runs)], spacing: { after: 120 }, ...opts });
const bullet = (runs) => new Paragraph({ numbering: { reference: "b", level: 0 }, children: Array.isArray(runs) ? runs : [new TextRun(runs)], spacing: { after: 60 } });
const numItem = (ref, runs) => new Paragraph({ numbering: { reference: ref, level: 0 }, children: Array.isArray(runs) ? runs : [new TextRun(runs)], spacing: { after: 60 } });
const bold = (t, color) => new TextRun({ text: t, bold: true, color });
const txt = (t) => new TextRun(t);

// callout box (single-cell table)
function callout(children, fill = "FEF3C7", border = GOLD) {
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [CONTENT_W],
    rows: [new TableRow({ children: [new TableCell({
      width: { size: CONTENT_W, type: WidthType.DXA },
      shading: { fill, type: ShadingType.CLEAR },
      margins: { top: 140, bottom: 140, left: 200, right: 200 },
      borders: {
        top: { style: BorderStyle.SINGLE, size: 4, color: border },
        bottom: { style: BorderStyle.SINGLE, size: 4, color: border },
        left: { style: BorderStyle.SINGLE, size: 18, color: border },
        right: { style: BorderStyle.SINGLE, size: 4, color: border },
      },
      children,
    })] })],
  });
}

const banner = new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { after: 240 },
  children: [new ImageRun({
    type: "png",
    data: fs.readFileSync("fb-cover.png"),
    transformation: { width: 600, height: 228 },
    altText: { title: "Hanzi Genz", description: "Banner", name: "banner" },
  })],
});

const children = [
  banner,
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 60 },
    children: [new TextRun({ text: "HƯỚNG DẪN BETA TEST", bold: true, size: 44, color: RED, font: "Arial" })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 240 },
    children: [new TextRun({ text: "Cảm ơn bạn đã trở thành một trong 10 người đồng hành đầu tiên của Hanzi Genz! 🐉", italics: true, color: GREY })] }),

  callout([
    P([bold("⏱️ Thời gian test:  ", INK), txt("2 tuần (……/…… → ……/……)")]),
    P([bold("🎁 Quyền lợi:  ", INK), txt("Gói Pro 1 năm (đã kích hoạt sẵn) + tên trong danh sách người đồng hành đầu tiên.")]),
    P([bold("🌐 Link app:  ", INK), new ExternalHyperlink({ children: [new TextRun({ text: "hanzigenz.com", style: "Hyperlink" })], link: "https://hanzigenz.com" })]),
    P([bold("📋 Form báo lỗi / khảo sát:  ", INK), txt("……………………………")]),
    new Paragraph({ children: [bold("💬 Liên hệ dev:  ", INK), txt("……………………………")] }),
  ]),
  P(" "),

  H1("1. Cài đặt & đăng nhập"),
  numItem("s1", "Mở hanzigenz.com — nên dùng cả điện thoại và máy tính nếu được."),
  numItem("s1", "Đăng nhập bằng Google (đúng email bạn đã gửi mình)."),
  numItem("s1", [txt("Vào mục "), bold("Tôi", INK), txt(" kiểm tra đã có nhãn "), bold("Pro", GREEN), txt(" chưa. Chưa thấy → nhắn mình kích hoạt lại.")]),

  H1("2. Việc cần làm (mỗi ngày vài phút là đủ)"),
  P("Mỗi ngày thử ít nhất 1 tính năng. Trong 2 tuần cố gắng đi qua hết:"),
  bullet([bold("Học", INK), txt(" — chọn HSK của bạn, học vài bài giáo trình")]),
  bullet([bold("Flashcard / Quiz", INK), txt(" — học từ vựng + làm quiz")]),
  bullet([bold("Gia sư AI", INK), txt(" — chat hỏi ngữ pháp / nhờ dịch câu")]),
  bullet([bold("Luyện nói (Speaking / HSKK)", INK), txt(" — đọc 1 câu cho app chấm điểm")]),
  bullet([bold("Luyện viết", INK), txt(" — viết 1 đoạn cho AI chấm")]),
  bullet([bold("Từ điển", INK), txt(" — tra vài từ")]),
  bullet([bold("Mock test", INK), txt(" — làm thử 1 đề")]),

  H1("3. Khi gặp lỗi / điểm khó chịu → báo ngay"),
  P("Với mỗi vấn đề, gửi mình 4 thứ:"),
  numItem("s3", [bold("Thiết bị + trình duyệt", INK), txt(" — vd: iPhone Safari / Laptop Chrome")]),
  numItem("s3", [bold("Đang ở màn hình nào", INK), txt(" — vd: trang Quiz HSK3")]),
  numItem("s3", [bold("Bạn làm gì → kỳ vọng gì → thực tế xảy ra gì", INK)]),
  numItem("s3", [bold("Ảnh chụp màn hình", RED), txt(" — quan trọng nhất!")]),
  callout([ new Paragraph({ children: [bold("💡 Mẹo báo nhanh: ", INK), txt("dùng nút Góp ý ngay trong app (mục Tôi → Góp ý), hoặc nhắn thẳng inbox mình.")] }) ], "ECFDF5", GREEN),
  P(" "),

  H1("4. Loại góp ý mình rất cần (không chỉ bug)"),
  bullet("Chỗ nào khó hiểu, không biết bấm gì tiếp theo?"),
  bullet("Chỗ nào chậm / lag?"),
  bullet("Chữ Hán, pinyin, nghĩa tiếng Việt có chỗ nào bị sai?"),
  bullet("Tính năng nào bạn thích nhất / thấy vô dụng nhất?"),
  bullet("Bạn có giới thiệu app cho bạn bè không? Vì sao có / vì sao không?"),

  H1("5. Cuối đợt"),
  bullet("Điền form khảo sát ngắn (mình gửi link ở đầu trang)."),
  bullet("Viết 1–2 câu cảm nhận tổng quan để mình có thể (xin phép) dùng làm review 🙏"),
  P(" "),
  callout([
    new Paragraph({ children: [bold("📌 Điều kiện giữ Pro: ", RED), txt("đăng nhập học tối thiểu 8/14 ngày + nộp form khảo sát cuối đợt. Cảm ơn bạn đã đồng hành nghiêm túc!")] }),
  ], "FEE2E2", RED),

  // ---------- PAGE 2: SURVEY ----------
  new Paragraph({ children: [new PageBreak()] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 60 },
    children: [new TextRun({ text: "CẤU TRÚC BÀI KHẢO SÁT CUỐI ĐỢT", bold: true, size: 36, color: RED, font: "Arial" })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 },
    children: [new TextRun({ text: "Dùng để tạo Google Form • giữ dưới ~10 phút • chỉ câu 5, 6, 8, 11 nên bắt buộc", italics: true, color: GREY })] }),

  H2("Phần A — Thông tin nhanh"),
  numItem("a", "Tên / nickname của bạn? (điền)"),
  numItem("a", "Bạn đang học HSK mấy? (chọn: HSK 1 → 6 / mất gốc)"),
  numItem("a", "Trong 2 tuần, bạn dùng app khoảng bao nhiêu? (Hầu như mỗi ngày / Vài lần một tuần / 1–2 lần / Gần như không)"),
  numItem("a", "Bạn dùng chủ yếu trên? (Điện thoại / Máy tính / Cả hai)"),

  H2("Phần B — Trải nghiệm tổng thể"),
  numItem("b2", [bold("Mức độ hài lòng tổng thể? ", INK), txt("(thang 1–5 sao) — bắt buộc")]),
  numItem("b2", [bold("Khả năng giới thiệu app cho bạn bè? ", INK), txt("(0–10, câu NPS) — bắt buộc")]),
  numItem("b2", "Một câu mô tả cảm nhận của bạn về app? (điền)"),

  H2("Phần C — Tính năng"),
  numItem("c", [bold("Tính năng thích nhất / dùng nhiều nhất? ", INK), txt("(chọn nhiều) — bắt buộc")]),
  numItem("c", "Tính năng thấy ít giá trị / không dùng? (chọn nhiều)"),
  numItem("c", "Tính năng nào bạn mong có mà app chưa có? (điền)"),
  P([txt("   → Lựa chọn cho câu 8–9: "), new TextRun({ text: "Học/Giáo trình · Flashcard · Quiz · Gia sư AI · Luyện nói HSKK · Chấm viết · Từ điển · Mock test", italics: true, color: GREY })]),

  H2("Phần D — Vấn đề & độ khó dùng"),
  numItem("d", [bold("Bạn có gặp lỗi / bug nào không? Mô tả ngắn. ", INK), txt("(điền) — bắt buộc")]),
  numItem("d", "Có chỗ nào khó hiểu, không biết bấm gì tiếp theo không? (điền)"),
  numItem("d", "Có chỗ nào chậm / lag không? (điền)"),
  numItem("d", "Nội dung (chữ Hán, pinyin, nghĩa tiếng Việt) có chỗ nào sai không? (điền)"),

  H2("Phần E — Giá trị & định giá"),
  numItem("e", "Nếu app không miễn phí, bạn có sẵn sàng trả cho gói Pro không? (Có / Cân nhắc / Không)"),
  numItem("e", "Mức giá bạn thấy hợp lý cho 1 năm Pro? (điền)"),
  numItem("e", "Lý do khiến bạn sẽ / sẽ không tiếp tục dùng app? (điền)"),

  H2("Phần F — Cho phép dùng review (tùy chọn)"),
  numItem("f", "Mình có được phép trích cảm nhận của bạn làm review không? (Được ghi tên / Được nhưng ẩn danh / Không)"),
  P(" "),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 200 },
    children: [new TextRun({ text: "Cảm ơn bạn rất nhiều — mỗi lỗi & góp ý đều giúp app tốt lên thật sự. 🥰🐉", bold: true, color: RED })] }),
];

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, color: RED, font: "Arial" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, color: INK, font: "Arial" },
        paragraph: { spacing: { before: 180, after: 100 }, outlineLevel: 1 } },
    ],
  },
  numbering: {
    config: [
      { reference: "b", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 280 } } } }] },
      ...["s1","s3","a","b2","c","d","e","f"].map((r) => ({ reference: r, levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 300 } } } }] })),
    ],
  },
  sections: [{
    properties: { page: { size: { width: A4_W, height: A4_H }, margin: { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN } } },
    children,
  }],
});

Packer.toBuffer(doc).then((buf) => { fs.writeFileSync("Huong-dan-Beta-Test-HanziGenz.docx", buf); console.log("OK docx written"); });
