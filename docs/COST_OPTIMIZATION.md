# 💸 Hanzi Genz — Cost Optimization (Zero UX Impact)

> Các tối ưu chi phí KHÔNG ảnh hưởng (hoặc cải thiện) trải nghiệm user, + chiến lược multi-platform.
> **Last updated:** 2026-05-19
> **Liên quan:** [SCALING_PLAN.md](SCALING_PLAN.md) · [REVENUE_PROJECTION.md](REVENUE_PROJECTION.md) · [SECURITY_PLAN.md](SECURITY_PLAN.md)

---

## Triết lý

> **"Tiết kiệm tốt nhất là tiết kiệm user không nhận ra — và lý tưởng nhất là user thấy app NHANH HƠN."**

Mỗi đề xuất dưới đây đều phải pass test:
1. User KHÔNG cảm nhận degrade
2. Ideally: user cảm nhận POSITIVE (nhanh hơn / chính xác hơn)
3. Có rollback path nếu thất bại

---

## 1. Tier 1 — Làm ngay (effort thấp, impact cao)

### 1.1 Prompt caching Anthropic + DeepSeek
**File ảnh hưởng:** `js/ai-client.js` (chưa tạo) hoặc nơi gọi AI

```js
// Anthropic
{
  system: [
    { type: "text", text: SYSTEM_PROMPT_HSK, cache_control: { type: "ephemeral" } }
  ]
}
```

| Metric | Trước | Sau |
|--------|-------|-----|
| Input cost | $1/M token (Haiku) | $0.10/M (cache hit) |
| Latency | ~800ms | ~400ms (positive UX!) |
| Tiết kiệm | — | **-90% input cost** |

**Effort:** 2 giờ. **UX:** Nhanh hơn 30-50%.

### 1.2 Cache-Control header cho HSK data
**File:** `_headers` (Cloudflare Pages)

```
/js/hsk_data_*.js
  Cache-Control: public, max-age=2592000, immutable

/js/data/plans.js
  Cache-Control: public, max-age=3600
```

| Metric | Trước | Sau |
|--------|-------|-----|
| Lần load thứ 2+ | Re-download | 0 bytes (304 Not Modified) |
| Egress Cloudflare | Tính | Không tính |
| Tiết kiệm | — | **-70% egress** |

**Effort:** 30 phút. **UX:** Load lần 2 tức thì.

**⚠️ Lưu ý:** Khi update HSK data → bump query string (`hsk_data.js?v=2`) để bypass cache.

### 1.3 Browser `speechSynthesis` làm TTS default

**File:** `js/dictionary.js`, `js/srs.js`, `js/tone-trainer.js`

```js
function speakHanzi(text, lang = 'zh-CN') {
  if (window.speechSynthesis) {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang;
    speechSynthesis.speak(utter);
    return;
  }
  // Fallback to API (Pro tier)
}
```

| Metric | Trước (Google TTS API) | Sau (Browser) |
|--------|----------------------|---------------|
| Cost/từ | $0.000004 | $0 |
| Latency | 200-500ms (round-trip API) | 50ms (local) |
| Quality | Cao | Trung-cao (đủ học HSK 1-4) |

**Tier-up cho Pro:** ElevenLabs giọng đẹp + emotion. Free user không thấy khác biệt rõ.

**Effort:** 4 giờ. **UX:** Free user nhanh hơn. Pro tier upgrade vẫn xứng giá.

### 1.4 R2 cache cho audio Pro (sau khi gen 1 lần)

**Pattern:**
```
User Pro yêu cầu TTS từ "你好":
  1. Check R2 → có file `tts/zh-CN/你好-elevenlabs.mp3`? → Return URL
  2. Nếu chưa → Call ElevenLabs API → Save R2 → Return URL
  3. Lần sau user khác yêu cầu cùng từ → Hit R2, $0 API
```

| Metric | Trước (re-gen mỗi lần) | Sau (R2 cache) |
|--------|----------------------|----------------|
| Cost per word | $0.005 (ElevenLabs) | $0.0001 (R2 storage) |
| Latency | 1-3s | 50ms (R2 edge) |
| Tiết kiệm | — | **-95% TTS Pro cost** |

**R2 pricing:** $0.015/GB storage, **$0 egress** đến CDN.

**Effort:** 1 ngày. **UX:** Audio Pro phát tức thì.

### 1.5 Switch sang DeepSeek V3 cho task tiếng Trung

**File:** `js/ai-client.js`

```js
const ROUTER = {
  'grammar.check':       'deepseek-chat',     // Tiếng Trung native
  'vocab.explain':       'deepseek-chat',
  'translation.vi.zh':   'gemini-flash',      // Cheaper for translation
  'story.generate':      'claude-sonnet-4-6', // Cần lý luận sâu
  'pronounce.feedback':  'deepseek-chat',     // Phonetic detail
  'reading.qna':         'claude-haiku-4-5',  // Reasoning + stable
};
```

| Task | Trước (Sonnet) | Sau (DeepSeek V3) | Quality |
|------|---------------|-------------------|---------|
| Grammar check tiếng Trung | $4.50/1k req | $0.26/1k req | **DeepSeek tốt hơn** (train trên Chinese) |
| Tiết kiệm | — | **-94%** | UX: cải thiện |

**Effort:** 1 ngày (gồm fallback chain). **UX:** Tốt hơn cho task tiếng Trung.

**⚠️ Privacy:** Không gửi PII (email, tên user) qua DeepSeek. Chỉ gửi text học.

### 1.6 `pinyin-pro` thay AI cho pinyin generation

**File:** `js/dictionary.js`

```js
import { pinyin } from 'pinyin-pro';
pinyin('你好'); // → 'nǐ hǎo' — không cần AI
```

| Metric | Trước (AI generate) | Sau (lib) |
|--------|-------------------|-----------|
| Cost | $0.0015/word | $0 |
| Latency | 500ms | 1ms |
| Accuracy | 95% | 99.9% |

**Effort:** 2 giờ. **UX:** Tức thì + chính xác hơn.

### 1.7 `opencc-js` cho Traditional ↔ Simplified

Tương tự — thư viện free, 0 AI cost, chính xác 100%.

---

## 2. Tier 2 — Làm song song với Phase H/I (PWA + Mobile)

### 2.1 Service Worker cache app shell
**Trigger:** Phase H bắt đầu.

- HTML/JS/CSS cache với `cache-first` strategy
- Bump cache key per deploy (`hanzigenz-v${GIT_SHA}`)

| Metric | Trước | Sau |
|--------|-------|-----|
| Request đến CDN lần 2+ | Tính bandwidth | 0 (SW serve local) |
| First-load offline | Crash | Hoạt động |
| Tiết kiệm | — | **-90% request** (UX: cực nhanh) |

### 2.2 Delta sync (chỉ pull row đã update)
**File:** `js/sync.js` refactor

```js
// Hiện tại (sai):
await SB.from('user_srs').select('*').eq('user_id', uid);  // pull ALL

// Sau:
const lastSync = localStorage.getItem('last_sync_at');
await SB.from('user_srs')
  .select('*')
  .eq('user_id', uid)
  .gt('updated_at', lastSync)
  .limit(500);
```

| Metric | Trước (full sync) | Sau (delta) |
|--------|-------------------|-------------|
| Egress/sync | ~500KB | ~5-50KB |
| Tiết kiệm | — | **-90% egress** |

**Effort:** 2 ngày (thêm cột `updated_at` cho mọi table + trigger).

### 2.3 Batch API Anthropic cho content generation

Phase P (Story Mai curriculum) cần sinh hàng nghìn bài đọc → dùng Batch API:
- Trả về sau 1-24h
- Giá **-50%** so với real-time

**Effort:** 1 ngày. **UX:** Không ảnh hưởng (content sinh ahead-of-time).

---

## 3. Multi-platform scaling — Web + PWA + Desktop + Mobile

### 3.1 Câu hỏi quan trọng nhất

> **"Khi có Desktop/Mobile, Supabase có lưu hết không?"**

**Trả lời ngắn:** Có, **không cần mở rộng** vì:
- Web/PWA/Desktop/Mobile đều gọi **CÙNG 1 Supabase backend**
- 1 user dùng 4 platform = **vẫn 1 MAU**
- Canonical data ở Supabase = 1 copy duy nhất

### 3.2 Kiến trúc storage multi-platform

```
┌─────────────────────────────────────────────────────────┐
│  CANONICAL DATA (single source of truth)                │
│  Supabase Postgres — ~500KB/user                        │
│  ↑ 1 user = 1 copy, không nhân với số platform          │
└─────────────────────────────────────────────────────────┘
         ▲                  ▲                  ▲
   ┌─────┴─────┐      ┌─────┴─────┐      ┌─────┴─────┐
   │ Web/PWA   │      │ Desktop   │      │ Mobile    │
   │ IndexedDB │      │ SQLite    │      │ SQLite    │
   │ 50MB local│      │ 100-500MB │      │ 50-200MB  │
   │ (cache)   │      │ (offline+) │      │ (cache)  │
   └───────────┘      └───────────┘      └───────────┘

   Local cache khác nhau ở mỗi device — KHÔNG sync lên cloud.
   Cloud chỉ chứa canonical data (progress, SRS, settings).
```

### 3.3 Cái THỰC SỰ thay đổi khi launch multi-platform

| Metric | Web only | Multi-platform | Tăng vì sao |
|--------|----------|---------------|-------------|
| MAU | 1 user = 1 | **1 user = vẫn 1** | Supabase đếm theo `user_id` |
| DB size | 500KB/user | **500KB/user** | Canonical không đổi |
| Egress | 5MB/user/tháng | **15-20MB/user/tháng** | Sync × 3 platform |
| Realtime connection | 1/user | **2-3/user concurrent** | Mỗi device 1 WS |
| Edge Function call | 1× | **1-3×** | Mỗi platform call auth, sync |
| File storage (Phase R audio) | 0 hoặc ít | **+30-100MB/user/tháng** | Mobile mic, Desktop record |

### 3.4 Limit Supabase Free tier — hit khi nào với multi-platform

| Cap Free | Web only hit | Multi-platform hit |
|----------|-------------|-------------------|
| MAU 50.000 | 50k user | 50k user (không đổi) |
| DB 500MB | ~1.000 user | ~1.000 user (không đổi) |
| Egress 5GB/tháng | ~1.000 user | **~333 user** (đạt sớm 3x) |
| Realtime conn 200 | 200 concurrent | **~67 user concurrent multi** |
| Edge invoc 500k | 500k req | **~167k user** (sớm 3x) |
| File storage 1GB | ~∞ (static) | **~10 Pro user/tháng audio** |
| Project pause | Không liên quan | Không liên quan |

**Trigger upgrade Supabase Pro ($25):**
- Web only: ~10k MAU
- Multi-platform: **~3-5k MAU** (realtime conn / egress hit trước)

→ Pro tier sớm hơn ~6 tháng khi launch mobile. Nhưng $25/tháng = 625k VND vẫn ổn.

### 3.5 R2 cho user-generated content (BẮT BUỘC khi có mobile)

**Vì sao Supabase Storage không đủ:**
- Free: 1GB, Pro: 100GB
- Audio shadowing user Pro: ~150MB/tháng/user
- 100 Pro user × 150MB = 15GB → đụng Pro cap trong 6 tháng

**Cloudflare R2 thay thế:**

| Provider | Storage | Egress | Cost 100GB |
|----------|--------|--------|------------|
| Supabase Storage Free | 1GB | 5GB | OK đến ~7 user |
| Supabase Storage Pro | 100GB | 200GB | $25 base + $0.021/GB |
| **Cloudflare R2** | unlimited | **$0** (đặc biệt) | **$1.5/tháng** |

**Pattern recommended:**
```
Mobile/Desktop record audio:
  1. Upload trực tiếp R2 với presigned URL (Supabase Edge Function generate)
  2. Save metadata vào Supabase (path R2, duration, timestamp)
  3. Khi user replay → fetch từ R2 (zero egress fee)
```

**Tiết kiệm:** R2 ~$2 vs Supabase Storage ~$50 ở 100GB → **96% rẻ hơn**.

### 3.6 Auth flow multi-platform

Mỗi platform có OAuth callback pattern khác:

| Platform | Callback URL | Cấu hình Supabase |
|----------|-------------|-------------------|
| Web | `https://hanzigenz.com/#access_token=...` | Default, đã có |
| PWA | Same as Web | Đã có |
| Mobile (Capacitor) | `com.hanzigenz.app://auth/callback` | Add deep-link scheme |
| Desktop (Tauri) | `http://127.0.0.1:randomport/callback` | Add localhost wildcard |

**Effort:** 1 ngày config + test mỗi platform. **Cost:** $0.

---

## 4. Bảng tổng chi phí infra TRƯỚC vs SAU optimization

### Stage 2 — 25.000 MAU (web only)

| Khoản | Trước opt | Sau opt | Tiết kiệm |
|-------|-----------|---------|-----------|
| Supabase Pro | $25 | $25 | — |
| Supabase Compute add-on | $60 | $60 | — |
| AI (Anthropic Haiku) | $200 | — | |
| AI (DeepSeek + cache) | — | $25 | -$175 |
| TTS API | $30 | — | |
| Browser TTS (free) + R2 cache Pro | — | $3 | -$27 |
| Supabase Storage | $15 | — | |
| R2 storage | — | $2 | -$13 |
| **TỔNG** | **$330/tháng** | **$115/tháng** | **-65%** |

VND: 8.25M → **2.9M VND/tháng** (Stage 2 sau optimization).

### Stage 3 — 75.000 MAU (multi-platform)

| Khoản | Trước opt | Sau opt | Tiết kiệm |
|-------|-----------|---------|-----------|
| Supabase Pro + Compute medium | $135 | $135 | — |
| Supabase Read replica | $110 | $110 | — |
| AI cost | $1000 | $150 | -$850 |
| TTS + Audio | $200 | $20 | -$180 |
| R2 storage 200GB | — | $3 | +$3 |
| Email (Resend free→Pro) | $20 | $20 | — |
| **TỔNG infra** | **$1465/tháng** | **$438/tháng** | **-70%** |

VND: 36.6M → **11M VND/tháng** (Stage 3 infra after optimization).

---

## 5. Risk checklist mỗi optimization

| Optimization | Risk | Mitigation |
|--------------|------|------------|
| Prompt caching | Cache TTL hết → bill spike đột ngột | Monitor cache hit rate weekly |
| DeepSeek primary | Provider down → all AI feature crash | Fallback chain: DeepSeek → Haiku → Gemini |
| Browser TTS | Mobile Safari giọng kém | Pro tier vẫn dùng API; detect quality |
| R2 storage | Vendor lock-in | S3-compatible API — migrate ra AWS S3/Backblaze dễ |
| Service Worker cache | User stuck bản cũ | Version bump per deploy + force reload mechanism |
| Delta sync | Bug → mất sync | Hold full-sync button trong Settings như fallback |

---

## 6. Implementation order (priority)

| # | Optimization | Effort | Stage cần | Tiết kiệm/tháng (Stage 2) |
|---|-------------|--------|----------|--------------------------|
| 1 | `_headers` Cache-Control | 30 phút | Ngay | -2M VND egress |
| 2 | DeepSeek router | 1 ngày | Khi có AI feature | -4.4M VND |
| 3 | Prompt caching | 2 giờ | Khi có AI feature | -3M VND |
| 4 | Browser TTS default | 4 giờ | Ngay | -750k VND |
| 5 | `pinyin-pro` + `opencc-js` | 4 giờ | Ngay | (đã có?) |
| 6 | R2 audio cache | 1 ngày | Khi launch Pro TTS | -325k VND |
| 7 | Delta sync | 2 ngày | Trước Phase H | -? (egress) |
| 8 | SW cache | 3 ngày | Phase H | -? (request) |
| 9 | R2 user content | 1 ngày | Trước launch mobile | -1.2M VND |

**Tổng nếu làm hết:** **-10-15M VND/tháng** infra cost ở Stage 2-3.

---

## 7. Reference

- **Cloudflare R2 pricing:** https://developers.cloudflare.com/r2/pricing/
- **Anthropic prompt caching:** https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching
- **DeepSeek API pricing:** https://api-docs.deepseek.com/quick_start/pricing
- **pinyin-pro npm:** https://github.com/zh-lx/pinyin-pro
- **opencc-js:** https://github.com/nk2028/opencc-js
- **Supabase pricing:** https://supabase.com/pricing
- **Browser Speech Synthesis MDN:** https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
