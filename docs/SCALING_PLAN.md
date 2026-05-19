# 📈 Hanzi Genz — Scaling & Migration Plan

> Khi nào cần migrate từng lớp (storage / DB / hosting / compute), rủi ro gì, chi phí bao nhiêu.
> **Last updated:** 2026-05-19
> **Liên quan:** [COST_OPTIMIZATION.md](COST_OPTIMIZATION.md) · [REVENUE_PROJECTION.md](REVENUE_PROJECTION.md) · [SECURITY_PLAN.md](SECURITY_PLAN.md) · [DEPLOY_GUIDE.md](DEPLOY_GUIDE.md) · [implementation_plan.md](implementation_plan.md)

> 📘 **Đọc kèm:** Các con số chi phí dưới đây là **trước optimization**. Sau khi áp dụng các tối ưu zero-UX-impact trong [COST_OPTIMIZATION.md](COST_OPTIMIZATION.md) (prompt caching, DeepSeek, Browser TTS, R2 cache, Cache-Control), chi phí thực tế **giảm 60-70%**.

---

## Mục lục

1. [Kiến trúc 3 lớp + trigger migration](#1-kiến-trúc-3-lớp--trigger-migration)
2. [Lớp 1 — Client storage (localStorage → IndexedDB → SW Cache)](#2-lớp-1--client-storage)
3. [Lớp 2 — Database (Supabase Free → Pro → Team → Self-host)](#3-lớp-2--database-supabase)
4. [Lớp 3 — Hosting (Cloudflare Pages → Workers/R2)](#4-lớp-3--hosting-cloudflare)
5. [Lớp 4 — Edge Functions / Compute](#5-lớp-4--edge-functions--compute)
6. [Bảng tổng chi phí theo giai đoạn user](#6-bảng-tổng-chi-phí-theo-giai-đoạn-user)
7. [Quyết định không-migrate (đừng làm sớm)](#7-quyết-định-khôngmigrate-đừng-làm-sớm)

---

## 1. Kiến trúc 3 lớp + trigger migration

```
┌─ LỚP 3: HOSTING ────────────────────────────────────────┐
│  Cloudflare Pages (free, CDN, _headers + _redirects)    │
│  Trigger đổi: chỉ khi compliance/region-lock yêu cầu    │
└─────────────────────────────────────────────────────────┘
                          │
┌─ LỚP 1: CLIENT STORAGE ─▼───────────────────────────────┐
│  localStorage (5MB limit, sync API, string only)        │
│  Trigger đổi → IndexedDB: user SRS > 3000 cards        │
│  Trigger đổi → SW Cache + IDB: muốn offline đầy đủ      │
└─────────────────────────────────────────────────────────┘
                          │
┌─ LỚP 2: DATABASE ───────▼───────────────────────────────┐
│  Supabase Free (50k MAU, 500MB DB, 5GB egress)         │
│  Trigger đổi → Pro $25: ≥10k MAU hoặc DB > 400MB        │
│  Trigger đổi → Self-host: chi phí Supabase > $200/th    │
└─────────────────────────────────────────────────────────┘
                          │
┌─ LỚP 4: COMPUTE / EDGE FUNCTIONS ▼──────────────────────┐
│  Supabase Edge Functions (500k invocations/month free)  │
│  Trigger đổi → Workers/Deno Deploy: AI feature scale up │
└─────────────────────────────────────────────────────────┘
```

**Nguyên tắc:** Migrate từng lớp **độc lập**, không big-bang. Mỗi migration phải có rollback plan.

---

## 2. Lớp 1 — Client storage

### 2.1 Hiện tại: `localStorage`

**Đang dùng:** 150 chỗ trong 20 file ([js/state.js](../js/state.js):13-52, [js/sync.js](../js/sync.js):93-100, [js/auth.js](../js/auth.js):369-388, [js/srs.js](../js/srs.js), ...)

**Key chính:**
- `hsk_progress`, `hsk_srs`, `hsk_xp`, `hsk_tokens`, `hsk_quests`
- `hsk_user_cache` (cached Supabase user)
- `hsk_lang`, `hsk_theme`, `hsk_version`, preferences khác

**Giới hạn vật lý:**
- 5-10MB tổng (Chrome ~10MB, Safari ~5MB, Firefox 10MB)
- Sync API → block main thread khi `JSON.stringify` object lớn
- String only → mỗi lần đọc/ghi cần `JSON.parse` / `JSON.stringify`

### 2.2 Khi nào cần migrate sang IndexedDB

| Trigger | Lý do | Hành động |
|---------|-------|----------|
| User SRS > 3000 cards | `JSON.stringify` toàn bộ SRS chậm > 200ms mỗi lần save | Migrate `hsk_srs` sang IDB |
| Localstorage usage > 4MB | Sắp đụng quota, browser sẽ throw `QuotaExceededError` | Migrate luôn |
| Bắt đầu Phase H (PWA) | Service Worker cần IDB để cache structured data | Bắt buộc |
| Cần lưu audio TTS cache | Blob không thể lưu localStorage | Bắt buộc |

**Quick check ngay bây giờ:** Mở DevTools → Application → Storage → xem `Quota usage`. Nếu user power-user đã > 2MB, đã đến lúc.

### 2.3 Migration path: localStorage → IndexedDB

**Effort:** 1-2 ngày (refactor) + 1 tuần (test với user thật)

**Chiến lược:**

1. **Bước 1 (0.5 ngày):** Tạo `js/storage.js` abstraction
   ```js
   // window.Storage.get('hsk_srs') → Promise<obj>
   // window.Storage.set('hsk_srs', obj) → Promise<void>
   // window.Storage.del('hsk_srs') → Promise<void>
   ```
   Bên trong: hiện tại wrap localStorage; sau này swap sang IDB (Dexie.js wrapper ~25KB).

2. **Bước 2 (1 ngày):** Replace 150 chỗ `localStorage.getItem/setItem` → `Storage.get/set` (async). 
   - **Risk:** Code đang sync → giờ async → mọi caller phải `await`. Có thể vỡ vài flow nếu quên.
   - **Mitigation:** Giữ sync wrapper `Storage.getSync(key)` đọc từ in-memory cache (populate lúc init).

3. **Bước 3 (0.5 ngày):** Swap implementation localStorage → Dexie IDB. Migrate data 1 lần khi user load app:
   ```js
   if (!localStorage.getItem('idb_migrated_v1')) {
     await copyToIDB();
     localStorage.setItem('idb_migrated_v1', '1');
   }
   ```
   Giữ localStorage 1-2 tuần làm fallback, sau đó xóa.

**Rủi ro & xử lý:**

| Rủi ro | Tác động | Mitigation |
|--------|---------|-----------|
| IDB transaction abort giữa chừng | Data nửa vời | Dùng Dexie transaction wrapper, retry 1 lần |
| Safari Private Mode block IDB | App không hoạt động trên iOS Safari Private | Detect + fallback localStorage hoặc warning UI |
| Migration script chạy 2 lần | Data duplicate | Idempotent: check key trước, dùng cờ `idb_migrated_v1` |
| User clear browser data | Mất hết tiến độ local | Đã có Supabase sync — nếu user login thì restore được |
| Bug làm corrupt IDB | Cả DB của user hỏng | `try/catch` quanh mọi op + nút "Reset local data" trong Settings |

**Chi phí:** $0 (chỉ tốn thời gian). Dexie.js MIT license, không tracking.

### 2.4 Khi nào cần migrate sang Service Worker + Cache API

**Trigger:** Bắt đầu Phase H (PWA offline-first).

**Lý do:** IndexedDB lưu data (progress/SRS), nhưng **không lưu HTML/JS/CSS/asset**. Để app load được khi offline → cần SW cache.

**Effort:** 3-5 ngày (gồm test offline scenarios).

**Rủi ro lớn nhất:** SW cache phiên bản cũ → user stuck bug đã fix. **Mitigation bắt buộc:**
- Bump cache key mỗi deploy: `hanzigenz-v{git-sha}`
- `/version.json` poll mỗi 30 phút, force reload nếu version mismatch
- (Đã ghi chi tiết trong SECURITY_PLAN.md section 4.2)

**Chi phí:** $0.

---

## 3. Lớp 2 — Database (Supabase)

### 3.1 Hiện tại: Supabase Free Tier

**Giới hạn Free:**
- 50,000 MAU (Monthly Active Users) — đã đăng nhập trong 30 ngày
- 500MB Postgres database
- 5GB egress (data tải xuống) / tháng
- 500MB file storage
- 2GB bandwidth file storage
- 500k Edge Function invocations / tháng
- Pause sau 7 ngày không hoạt động (dự án free) — đã hit vấn đề này trong [js/auth.js](../js/auth.js):129

**Đang dùng (ước lượng):**
- ~? MAU (cần check Supabase dashboard)
- DB size: tăng theo `user_progress` + `user_srs` + `user_token_ledger` + `payment_orders`

**Cách tính DB size mỗi user:**
- `user_progress`: ~1KB / user (1 row, JSON nhỏ)
- `user_srs`: ~150 bytes × số card. User học 1 năm: ~3000 card → 450KB
- `user_token_ledger`: ~100 bytes × số transaction. User active: ~500 row/năm → 50KB
- **Tổng**: ~500KB/user power-user
- **500MB DB ≈ 1000 user power-user, hoặc 10,000 user casual**

### 3.2 Trigger migrate sang Supabase Pro ($25/tháng)

| Metric | Threshold Free | Hành động |
|--------|---------------|----------|
| MAU | > 40,000 | Pre-upgrade Pro để tránh hard cap |
| DB size | > 400MB | Pre-upgrade Pro (Pro = 8GB) |
| Egress | > 4GB/tháng | Pre-upgrade Pro (Pro = 250GB) |
| Edge invocations | > 400k/tháng | Pre-upgrade Pro (Pro = 2M) |
| Project pause issue | Bất kỳ lúc nào | Upgrade Pro = không bao giờ pause |

**Pro tier ($25/tháng ≈ 625k VND/tháng):**
- 100k MAU
- 8GB DB
- 250GB egress
- 100GB file storage
- 2M Edge invocations
- Daily backup 7 ngày
- Email support
- **Không pause project**

**Trigger thực tế:** Khi đạt ~5,000 MAU hoặc DB ~300MB → bắt đầu chuẩn bị migrate. Khi 10,000 MAU → bắt buộc Pro.

### 3.3 Trigger migrate sang Supabase Team ($599/tháng)

| Metric | Threshold | Hành động |
|--------|----------|----------|
| MAU | > 90,000 | Cân nhắc Team |
| DB > 6GB | Team có 8GB nhưng compute add-on cần thiết | |
| Compliance | SOC2 / HIPAA / SSO required | Bắt buộc |

**Team tier ($599/tháng ≈ 15M VND/tháng):**
- Read replicas
- SSO
- SOC2 compliance
- Priority support

**Thực tế Hanzi Genz:** Có khả năng KHÔNG bao giờ cần Team. Pro + compute add-on ($60-200/tháng) đủ cho 50k-100k user.

### 3.4 Trigger migrate sang self-host PostgreSQL

| Trigger | Lý do | Hành động |
|---------|-------|----------|
| Supabase bill > $200/tháng | Self-host VPS rẻ hơn | Cân nhắc |
| Yêu cầu data tại VN | Compliance/luật | Bắt buộc |
| Cần feature Supabase không có | (vd: TimescaleDB cho analytics) | Tùy |

**Option self-host:**

| Provider | Giá/tháng | Specs | Phù hợp |
|----------|----------|-------|---------|
| Hetzner CX22 | $4-5 (~125k VND) | 2vCPU, 4GB RAM, 40GB SSD | Tới 5k user, EU latency cao với VN |
| Hetzner CX42 | $20 (~500k VND) | 8vCPU, 16GB RAM | Tới 50k user |
| Vultr Tokyo | $12 (~300k VND) | 2vCPU, 4GB RAM | Latency VN tốt |
| VNG Cloud | 500k-2M VND | 2-4 vCPU, 4-8GB | Data tại VN (compliance) |
| AWS RDS Singapore | $30-100+ | db.t4g.micro+ | Đắt, không khuyên |

**KHÔNG khuyến nghị self-host vì:**
- Mất auth/RLS/Realtime built-in của Supabase → phải tự build lại (~2-4 tuần dev)
- Backup, monitoring, security patching → ops burden
- Pro $25/tháng quá rẻ so với 1 dev-day tự fix khi DB sập

**Chỉ self-host khi:** Bill Supabase > $300/tháng VÀ có người chuyên về DevOps.

### 3.5 Rủi ro migration Free → Pro

| Rủi ro | Tác động | Mitigation |
|--------|---------|-----------|
| Downtime khi upgrade | 1-2 phút disconnect | Upgrade vào 3-5h sáng, post notice trước |
| Cost tăng đột ngột (egress) | Bill quá cao | Set spend cap Supabase dashboard ($50 cap đầu tiên) |
| Compute add-on cần thêm | $60-200/tháng nếu CPU 100% | Monitor pg_stat_statements, add index trước |
| RLS policy break sau upgrade | Bug bảo mật | Smoke test sau upgrade — query mỗi table với user khác nhau |

---

## 4. Lớp 3 — Hosting (Cloudflare)

### 4.1 Hiện tại: Cloudflare Pages (Free)

**Giới hạn Free:**
- Unlimited bandwidth (đặc biệt!)
- Unlimited requests
- 500 builds/tháng
- 25MB/file
- 20,000 file/project
- 100 custom domain
- 5 preview deployment cùng lúc

**Lợi thế cực lớn của Cloudflare:** **Bandwidth không giới hạn ở free tier**. Vercel Free chỉ 100GB, Netlify Free 100GB. → **Hanzi Genz không bao giờ phải lo tiền hosting Static**.

### 4.2 Khi nào cần Cloudflare Pages Pro / Workers

| Trigger | Tier mới | Chi phí |
|---------|---------|---------|
| > 500 build/tháng | Pages Pro $20/tháng | ~500k VND |
| Cần A/B test, advanced analytics | Pages Pro | |
| Cần edge logic (geo-routing, auth middleware) | Workers $5/tháng | ~125k VND |
| Cần KV/Durable Objects | Workers + KV/DO | $5+ |
| Cần object storage (audio TTS, ảnh user) | R2 $0.015/GB/tháng | ~Rất rẻ |

**Thực tế:** 99% khả năng Hanzi Genz chỉ cần Free tier mãi mãi. Build 500/tháng = 16 deploy/ngày, không bao giờ chạm.

### 4.3 Khi nào MỚI nên đổi host khác

| Trigger | Lý do | Lựa chọn |
|---------|-------|---------|
| Compliance VN: data hosted tại VN | Luật yêu cầu | VNG Cloud, Viettel Cloud (~500k-2M/tháng) |
| Cloudflare bị block tại 1 vùng | Hiếm | Backup deploy lên Netlify/Vercel làm failover |
| Cần SSR full Next.js | Hiện tại không cần | Vercel ($20/tháng) |

**KHÔNG đổi host vì:**
- "Cloudflare lộ code" → mọi host đều lộ static JS, không tránh được
- "Cloudflare chậm" → Cloudflare có POP tại Singapore + HCM/HN, ping VN < 30ms
- "Free tier không đáng tin" → Cloudflare Pages SLA tốt hơn nhiều provider trả phí khác

### 4.4 Rủi ro & mitigation

| Rủi ro | Tác động | Mitigation |
|--------|---------|-----------|
| Cloudflare account bị suspend | Site down toàn bộ | Backup repo trên GitHub + có sẵn `netlify.toml` để deploy 5 phút |
| DNS provider lock-in | Khó đổi | Dùng Cloudflare DNS riêng + giữ access registrar gốc (Namecheap/Porkbun) |
| Build fail repeated | Deploy block | CI test trước khi merge main, không deploy bug |
| Cloudflare Pages thay đổi pricing | Bill tăng | Theo dõi blog Cloudflare, có alternative sẵn |

---

## 5. Lớp 4 — Edge Functions / Compute

### 5.1 Hiện tại

**Đang chạy:**
- `supabase/functions/create-payment/` — gọi PayOS tạo order
- `supabase/functions/payos-webhook/` — verify HMAC + grant subscription
- (Có thể) admin functions: `admin_stats`, `admin_list_users`

**Free tier:** 500k invocation/tháng, 100 hour execution.

### 5.2 Trigger scale up

| Trigger | Lý do | Hành động |
|---------|-------|----------|
| Add AI feature (chat, grammar check) | Mỗi request = 1 invocation, tốn nhiều CPU | Move sang Workers + Anthropic/OpenAI API |
| > 400k invocation/tháng | Sắp đụng cap | Upgrade Supabase Pro (2M invocation) |
| Cold start chậm > 2s | UX kém | Dùng Workers (cold start < 50ms) thay Edge Functions Deno |

### 5.3 Khi add AI features (Phase Q/R/...)

**Chi phí thay đổi tùy provider:**

| Provider | Model | Giá / 1M token input | Giá / 1M token output |
|----------|-------|--------------------|----------------------|
| Anthropic Claude Haiku 4.5 | claude-haiku-4-5 | $1 | $5 |
| Anthropic Claude Sonnet 4.6 | claude-sonnet-4-6 | $3 | $15 |
| OpenAI GPT-4o-mini | gpt-4o-mini | $0.15 | $0.60 |

**Ước lượng cho HSK app:**
- 1 conversation grammar check ≈ 500 token in + 200 token out
- Với Haiku: $0.0005 + $0.001 = $0.0015/conversation ≈ 37 VND
- User Pro học 30 conversation/ngày × 30 ngày = 900 conv × 37 = **~33k VND/tháng**
- Pro Plan 199k VND/tháng → còn 166k margin

**KEY: Prompt caching giảm 90% chi phí input.** Phải bật cho mọi system prompt. (Tham khảo: dùng skill `claude-api` khi implement.)

### 5.4 Rủi ro AI cost runaway

| Rủi ro | Tác động | Mitigation |
|--------|---------|-----------|
| User spam request | Bill tăng đột ngột | Rate limit 30 req/giờ/user ở Edge Function |
| Prompt injection lấy nhiều token | Bill + leak data | Max_tokens hard cap (vd 500) + system prompt sealed |
| Anthropic API down | Feature die | Fallback OpenAI hoặc disable feature gracefully |
| Token monthly budget vỡ | Lỗ | Spend alert ở Anthropic Console + auto-disable khi vượt |

---

## 6. Bảng tổng chi phí theo giai đoạn user

### Stage 0 — Hiện tại (< 1,000 MAU)

| Lớp | Tier | Chi phí/tháng |
|-----|------|--------------|
| Hosting | Cloudflare Pages Free | **$0** |
| Database | Supabase Free | **$0** |
| Domain | Namecheap `.com` | ~$12/năm ≈ $1/tháng (25k VND) |
| Edge Functions | Supabase Free | **$0** |
| AI | Chưa có | **$0** |
| **TỔNG** | | **~25k VND/tháng** |

**Doanh thu hòa vốn:** 1 user Pro Linh hoạt 75k/tháng → đã dư.

---

### Stage 1 — Early traction (1k-10k MAU)

| Lớp | Tier | Chi phí/tháng |
|-----|------|--------------|
| Hosting | Cloudflare Pages Free | $0 |
| Database | Supabase Free → upgrade Pro khi gần 10k MAU | $0 → $25 |
| Domain | | ~25k VND |
| Edge Functions | Free đủ | $0 |
| AI | Có thể bật cho Pro user | $20-50 (tùy usage) |
| **TỔNG** | | **~25k → 1.9M VND/tháng** |

**Doanh thu cần:** 10 user Pro Chăm chỉ 199k/tháng → 2M VND/tháng → đủ.

---

### Stage 2 — Scaling (10k-50k MAU)

| Lớp | Tier | Chi phí/tháng |
|-----|------|--------------|
| Hosting | Cloudflare Pages Free | $0 |
| Database | Supabase Pro + Compute small | $25 + $60 = $85 |
| Domain | | ~25k VND |
| Edge Functions | Pro tier đủ | $0 |
| AI | Mở rộng | $100-300 |
| Object storage R2 (audio cache) | | $5-15 |
| **TỔNG** | | **~5M-10M VND/tháng** |

**Doanh thu cần:** 50-100 user Pro/tháng → khả thi với 10k MAU (~0.5-1% conversion).

---

### Stage 3 — Mature (50k-100k MAU)

| Lớp | Tier | Chi phí/tháng |
|-----|------|--------------|
| Hosting | Cloudflare Pages Free hoặc Pro | $0-20 |
| Database | Supabase Pro + Compute medium + read replica | $25 + $200 + $110 = $335 |
| Domain + Cloudflare WAF Pro | | $20 |
| Edge Functions | Pro tier hoặc add-on | $25 |
| AI | High usage + caching | $500-1500 |
| Object storage R2 | | $30-50 |
| Email service (Resend/Postmark) | Transactional | $20 |
| **TỔNG** | | **~25M-50M VND/tháng** |

**Doanh thu cần:** 250-500 Pro/tháng → 0.3-0.5% conversion ở 100k MAU.

---

### Stage 4 — Lock-in mature (> 100k MAU)

Bắt đầu cân nhắc:
- Supabase Team ($599) HOẶC self-host Postgres trên Hetzner ($20-100)
- Cloudflare Enterprise (negotiable, $200+)
- Dedicated AI infra (caching layer riêng, fine-tune)

**Tổng:** $1500-5000/tháng (~40M-130M VND).
**Doanh thu cần:** 200-700 Pro/tháng (đã có).

---

## 7. Multi-platform scaling (Web + PWA + Desktop + Mobile)

> 📘 Chi tiết kỹ thuật + R2/auth flow: xem [COST_OPTIMIZATION.md](COST_OPTIMIZATION.md) section 3.

### 7.1 Insight quan trọng nhất

**Multi-platform KHÔNG cần "mở rộng Supabase".** Vì:
- Web/PWA/Desktop/Mobile gọi **cùng 1 Supabase backend**
- 1 user dùng 4 platform = **vẫn 1 MAU**
- Canonical data ở cloud = 1 copy duy nhất, local cache khác nhau ở mỗi device

### 7.2 Cap Supabase Free tier hit sớm hơn khi multi-platform

| Cap Free | Web only | Multi-platform | Sớm bao nhiêu |
|----------|----------|---------------|---------------|
| MAU 50.000 | ~10k MAU | ~10k MAU | Không đổi |
| DB 500MB | ~1k user | ~1k user | Không đổi |
| Egress 5GB/tháng | ~1k user | ~333 user | **3x sớm** |
| Realtime conn 200 | 200 concurrent | ~67 concurrent multi | **3x sớm** |
| Edge invoc 500k | ~167k user/tháng | ~56k user | **3x sớm** |
| File storage 1GB | static OK | ~10 Pro audio/tháng | **HIT CỰC SỚM** |

→ **Trigger Pro $25 sớm hơn:** từ ~10k MAU (web only) xuống ~3-5k MAU (multi-platform).

### 7.3 Cloudflare R2 cho user-generated content (BẮT BUỘC khi có mobile)

Mobile/Desktop tạo audio shadowing (Phase R) → Supabase Storage không kham nổi:
- 100 Pro user × 150MB audio/tháng = 15GB → vượt Pro cap 100GB sau 6 tháng

**R2 thay thế:** $0.015/GB + **$0 egress** = $2/tháng cho 100GB (vs Supabase Storage Pro $25 + egress fee).

**Tiết kiệm:** 96% chi phí storage.

### 7.4 Migration timeline khi launch multi-platform

```
Tháng 0 (web 5k MAU):  Free tier — $0 infra
Tháng 1 (+ Mobile launch):  Pro $25 + R2 $5 = $30/tháng (~750k VND)
Tháng 3 (+ Desktop):  ~$35/tháng (R2 tăng)
Tháng 12 (50k MAU multi): Pro $25 + Compute $60 + R2 $15 = $100/tháng (~2.5M VND)
```

### 7.5 Cấu hình cần làm trước khi launch mobile/desktop

| Việc | Effort | Cost |
|------|--------|------|
| Add 3 redirect URL Supabase Auth (Mobile deep-link, Desktop localhost, PWA) | 1 ngày | $0 |
| Setup R2 bucket + presigned URL Edge Function | 1 ngày | $0 |
| Implement delta sync (xem COST_OPT 2.2) | 2 ngày | $0 → -90% egress |
| SQLite local schema cho Tauri/Capacitor | 3-5 ngày | $0 |

---

## 8. Quyết định không-migrate (đừng làm sớm)

Các "anti-pattern" hay gặp ở startup vibe-coded — KHÔNG làm:

| Anti-pattern | Lý do KHÔNG làm | Khi nào MỚI làm |
|--------------|----------------|----------------|
| Microservices từ ngày 1 | Phức tạp, debug khó, không cần | > 5 dev cùng làm, > 100k MAU |
| Self-host DB sớm | Mất 2-4 tuần build lại auth/RLS | Bill Supabase > $300/tháng |
| Kubernetes | Overkill cho static site | Không bao giờ với app dạng này |
| Multi-region active-active | Chi phí 3x, không nhanh hơn rõ rệt | > 500k MAU phân bố toàn cầu |
| Đổi sang Next.js/SvelteKit | Tốn 2-3 tháng rewrite, không tăng giá trị | Khi vanilla JS thực sự không scale dev được |
| Tự build CDN | Cloudflare đã free và tốt nhất | Không bao giờ |
| Premature obfuscation toàn app | Tăng bundle 30-50%, chậm runtime | Chỉ obfuscate 1-2 file logic monetization (xem SECURITY_PLAN section 2 Tier 2) |
| Realtime cho mọi feature | Tốn connection, không cần | Phase G (leaderboard live), không sớm hơn |

**Triết lý:** Mỗi migration tốn 1-4 tuần. **Hoãn đến khi có tín hiệu rõ ràng** (metric vượt threshold, không phải "có thể sau này cần").

---

## 9. Quick decision matrix

> "Tôi có nên migrate X bây giờ không?" → Check bảng này.

| Câu hỏi | Trả lời |
|---------|--------|
| User đang complain app chậm? | Đo trước (Performance tab) → fix bottleneck cụ thể, không phải refactor toàn bộ |
| Free tier sắp hết? | Check usage hiện tại; nếu < 70% threshold → chưa cần |
| Có user power-user lớn (>5000 SRS)? | **Đến lúc**: migrate localStorage → IDB cho `hsk_srs` |
| Doanh thu > $100/tháng? | Đủ tiền upgrade Supabase Pro khi cần — KHÔNG cần lo cost |
| Cảm thấy "phải làm gì để app pro hơn"? | Không. Tập trung feature + bug. Migrate khi metric ép buộc |

---

## 10. Tham khảo

- [SECURITY_PLAN.md](SECURITY_PLAN.md) — bảo mật cho từng platform (Web/PWA/Tauri/Extension)
- [implementation_plan.md](implementation_plan.md) — Phase A→Z roadmap
- [DEPLOY_GUIDE.md](DEPLOY_GUIDE.md) — Cloudflare deploy step-by-step
- Supabase pricing: https://supabase.com/pricing
- Cloudflare Pages limits: https://developers.cloudflare.com/pages/platform/limits/
- Anthropic pricing: https://www.anthropic.com/pricing

**Lưu ý số liệu:** Chi phí trên là **giá list** Supabase/Cloudflare/Anthropic theo knowledge cutoff (2025). Tỉ giá ước lượng 25,000 VND = $1. Check lại trang chính thức trước khi quyết định.
