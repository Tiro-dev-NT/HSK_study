# 🔌 Hướng dẫn cài & mua API AI — Hanzi Genz

> Hướng dẫn đăng ký, lấy API key, nạp tiền cho các AI dùng trong app.
> **Last updated:** 2026-05-22
> **Liên quan:** [PRODUCT_TIER_MATRIX.md](PRODUCT_TIER_MATRIX.md) (section "AI Model Selection & Cost Optimization")
> ⚠️ Quy trình đăng ký/thanh toán có thể đổi — verify lại trên trang chính chủ khi làm thật.

---

## 🎯 Khuyến nghị tổng: bắt đầu bằng aggregator

Thay vì mở 4-5 tài khoản riêng, **giai đoạn đầu nên dùng 1 aggregator** — một tài khoản, một API key, một lần nạp tiền, gọi được TẤT CẢ model (DeepSeek, Gemini, Qwen, Claude…).

**OpenRouter** ([openrouter.ai](https://openrouter.ai)) — khuyến nghị:
- 1 API key duy nhất → truy cập 300+ model.
- API tương thích chuẩn OpenAI → code 1 lần, đổi model chỉ bằng đổi tên chuỗi.
- Nạp tiền trước (prepaid) — thẻ quốc tế / crypto. Không lo thẻ VN không dùng được ở từng provider TQ.
- Fallback giữa model cực dễ (cùng 1 API).
- **Giá per-token: KHÔNG markup** — pass-through đúng giá provider gốc (đa số model). Vài model lẻ có markup → kiểm tra giá từng model trên openrouter.ai.
- **Nhược — phí nạp tiền:** 5.5% khi nạp bằng thẻ (tối thiểu $0.80) / 5% bằng crypto. Nạp $100 → nhận $94.50. Đây là phí trên mỗi LẦN NẠP, không phải mỗi lượt gọi.
- BYOK (dùng key riêng qua OpenRouter): 1M request/tháng đầu free, sau đó phí 5%.

→ **Quyết định (2026-05-22): tích hợp CẢ 2** — DeepSeek trực tiếp làm đường chính (rẻ), OpenRouter làm lưới dự phòng. Xem section dưới.

---

## ✅ Kiến trúc đã chốt — tích hợp cả 2 + backup chain

Edge Function có **lớp routing** (provider abstraction) thử provider theo thứ tự ưu tiên. Primary = trực tiếp (rẻ), backup = OpenRouter (chống sập + gỡ kẹt thanh toán). Đa số API theo chuẩn OpenAI-compatible → code không khác nhau nhiều.

**Hạng 1 — AI tra cứu (rẻ):**
| Vai trò | Model | Đường |
|---|---|---|
| Chính | DeepSeek V3 | Trực tiếp |
| Backup 1 | Gemini Flash-Lite / 2.5 Flash | Google trực tiếp (có free tier) |
| Backup 2 | Qwen (nhỏ) | OpenRouter |

**Hạng 2 — AI hội thoại/chấm bài (đắt, chất lượng cao):**
| Vai trò | Model | Đường |
|---|---|---|
| Chính | DeepSeek V4 | Trực tiếp |
| Backup 1 | DeepSeek V4 | OpenRouter (route khác → cùng model) |
| Backup 2 | Qwen3-Max / GLM-5 | OpenRouter |

**TTS — phát âm:**
| Vai trò | Nguồn |
|---|---|
| Chính | Edge TTS (free) |
| Backup 1 | **Audio cache R2** — pre-gen sẵn 7.000 từ HSK, API sập vẫn phát được |
| Backup 2 | Google Cloud TTS |

**4 quy tắc backup:** (1) cùng hạng giá — KHÔNG fallback rẻ→premium; (2) model giỏi tiếng Trung; (3) đa số backup qua OpenRouter → không mở thêm tài khoản; (4) 1 primary + 1-2 backup/hạng là đủ.

**2 key cần có:** DeepSeek (trực tiếp) + OpenRouter — đều để trong Edge Function secrets.

⚠️ Test thanh toán DeepSeek trực tiếp trước (platform.deepseek.com, nạp thử số nhỏ). Nếu thẻ VN không nạp được → OpenRouter thành đường chính, DeepSeek-qua-OpenRouter thay cho trực tiếp.

---

## 📋 Cách 1 — OpenRouter (gọn nhất)

1. Vào [openrouter.ai](https://openrouter.ai) → đăng ký (Google/email).
2. **Credits** → nạp tiền (thẻ Visa/Master quốc tế hoặc crypto). Nạp ít trước (vd $10).
3. **Keys** → tạo API key → copy.
4. Đặt **spend limit** cho key (chống cháy túi nếu bị lạm dụng).
5. Trong code Edge Function: gọi endpoint `https://openrouter.ai/api/v1/chat/completions`, header `Authorization: Bearer <key>`, body chọn `model` (vd `deepseek/deepseek-chat`, `google/gemini-flash-...`, `qwen/...`).

---

## 📋 Cách 2 — Đăng ký trực tiếp từng provider (rẻ hơn, nhiều việc hơn)

### DeepSeek (V3 hạng 1 · V4 hạng 2)
- Trang: [platform.deepseek.com](https://platform.deepseek.com)
- Đăng ký → **API keys** → tạo key.
- Nạp tiền: prepaid (top-up). ⚠️ Thanh toán platform TQ đôi khi kén thẻ VN — nếu thẻ không được, dùng DeepSeek **qua OpenRouter / SiliconFlow** thay thế.

### Google Gemini (Flash-Lite / 2.5 Flash — hạng 1)
- Trang: [aistudio.google.com](https://aistudio.google.com) → "Get API key".
- Có **free tier** rộng — đủ để dev/test miễn phí.
- Production: bật billing qua Google Cloud (thẻ quốc tế).

### Qwen (Alibaba — fallback, native zh tốt nhất)
- Trực tiếp: Alibaba Cloud **Model Studio / DashScope**.
- Đơn giản hơn: gọi Qwen **qua OpenRouter** hoặc **SiliconFlow** ([siliconflow.com](https://siliconflow.com)) — đỡ phải mở tài khoản Alibaba Cloud.

### Claude (Anthropic — chỉ khi cần chất lượng cao nhất)
- Trang: [console.anthropic.com](https://console.anthropic.com)
- Đăng ký → **API Keys** → tạo key. Nạp prepaid credits (thẻ quốc tế).

---

## 🔊 TTS (phát âm)

| Lựa chọn | Chi phí | Ghi chú |
|---|---|---|
| **Edge TTS** | Miễn phí | Thư viện `edge-tts` (không chính thức) — không cần key. Dùng cho free tier. Rủi ro: không chính thức, có thể đổi. |
| **Google Cloud TTS** | Trả phí theo ký tự | Cần Google Cloud project + billing. Giọng tự nhiên hơn. Dùng cho Pro. |
| **ElevenLabs** | Trả phí (đắt) | Giọng cao cấp/nhân vật. Cân nhắc kỹ chi phí. |

→ Chiến lược: **pre-gen audio 7.000 từ HSK lưu R2** (xem Cost Optimization) → phần lớn TTS không cần call API runtime.

---

## 💳 Thanh toán — lưu ý cho VN

- Đa số provider cần **thẻ Visa/Mastercard quốc tế** (thẻ ghi nợ quốc tế của ngân hàng VN thường dùng được).
- Platform TQ (DeepSeek trực tiếp) đôi khi kén thanh toán → **OpenRouter / SiliconFlow** là đường vòng an toàn.
- Hầu hết là **prepaid (nạp trước)** — đây là điểm TỐT: không thể tiêu vượt số đã nạp. Nạp ít một (vd $10-20) lúc đầu.

## 🔒 Bảo mật API key — BẮT BUỘC

- API key **CHỈ** đặt trong **Supabase Edge Function secrets** (biến môi trường).
- **TUYỆT ĐỐI KHÔNG** để key trong code client, file JS, hay commit lên repo (repo PUBLIC).
- App gọi AI: client → Edge Function (giữ key) → provider. Client không bao giờ thấy key.

## 📉 Kiểm soát chi phí — làm ngay khi tạo key

1. Đặt **spend limit / budget alert** trên mỗi tài khoản (OpenRouter, Google Cloud, Anthropic đều có).
2. Nạp prepaid ít một — đừng nạp nhiều.
3. **Circuit breaker** trong code: chi phí AI/giờ vượt ngưỡng → tạm dừng + cảnh báo admin (xem tab "API Monitor" trong plan admin).
4. Hard-pin model rẻ cho luồng free; fallback cùng hạng giá (không rơi sang model premium).

---

## ✅ Checklist khởi đầu nhanh

- [ ] Tạo tài khoản OpenRouter, nạp $10, tạo key + đặt spend limit
- [ ] Lấy Gemini free API key (aistudio.google.com) để test miễn phí
- [ ] Lưu mọi key vào Supabase Edge Function secrets
- [ ] Test gọi DeepSeek V3 (hạng 1) + DeepSeek V4 (hạng 2) qua OpenRouter
- [ ] Cấu hình budget alert
- [ ] Khi volume lớn → cân nhắc chuyển sang gọi trực tiếp provider rẻ nhất
