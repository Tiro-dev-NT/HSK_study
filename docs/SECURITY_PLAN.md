# 🔐 Hanzi Genz — Security Audit & Roadmap

> Audit hiện trạng bảo mật + roadmap phòng thủ chiều sâu cho web + multi-platform app.
> **Last updated:** 2026-05-18

---

## Mục lục

1. [Hiện trạng bảo mật (snapshot 2026-05-18)](#1-hiện-trạng-bảo-mật-snapshot-2026-05-18)
2. [Câu hỏi 1 — Lộ code khi bật DevTools](#2-câu-hỏi-1--lộ-code-khi-bật-devtools)
3. [Câu hỏi 2 — Có cần đổi web host không?](#3-câu-hỏi-2--có-cần-đổi-web-host-không)
4. [Câu hỏi 3 — Bảo mật multi-platform (Web + PWA + Tauri + Extension)](#4-câu-hỏi-3--bảo-mật-multi-platform)
5. [Phased Roadmap](#5-phased-roadmap)
6. [Nguyên tắc nền](#6-nguyên-tắc-nền)

---

## 1. Hiện trạng bảo mật (snapshot 2026-05-18)

Audit kết quả: **nền tảng cơ bản đã an toàn**, không có lỗ hổng nghiêm trọng. Một số hạng mục defense-in-depth còn thiếu.

| Hạng mục | Trạng thái | Ghi chú |
|---|---|---|
| ANON_KEY exposure | ✅ An toàn | [`js/supabase.js`](../js/supabase.js):6-7 — đúng vai trò public, role=`anonRole` trong JWT |
| SERVICE_ROLE / PayOS secret | ✅ Server-side only | Edge Functions trong `supabase/` đã gitignore, không có file nào hardcode |
| Supabase RLS | ✅ Đầy đủ | `user_subscriptions`, `user_xp`, `user_progress`, `user_srs` — policy `auth.uid() = user_id` |
| Sync cutoff guard | ✅ Dual-layer | [`js/sync-window.js`](../js/sync-window.js) + [`sql/supabase_sync_guard.sql`](../sql/supabase_sync_guard.sql) — server vẫn reject kể cả khi client bị patch |
| Admin gate | ✅ Email + RPC `is_admin()` SECURITY DEFINER | [`js/admin.js`](../js/admin.js):9-14, `sql/v6b_admin.sql`:3-15 |
| Anti-cheat caps | ✅ Trigger XP ≤50k / streak ≤365 / weekly ≤2100 | `supabase_sync_guard.sql` |
| `.env` / hardcoded secret | ✅ Sạch | `.gitignore` cover `.env`, `supabase/`, `scripts/`, `content/` |
| Edge Function source backup | ⚠️ Local-only | Mất máy = mất source — chưa có backup off-machine |
| PayOS webhook signature verify | ⚠️ Cần xác minh | Source ngoài repo, chưa audit được liệu có verify HMAC `x-signature` không |
| CSP / security headers | ❌ Chưa có | Cloudflare Pages mặc định không set — cần `_headers` file |
| Rate limiting Edge Functions | ❌ Chưa có | `create-payment` có thể bị spam tạo order |
| Cloudflare WAF / Bot Fight | ❌ Chưa bật | Free tier có sẵn, chỉ cần toggle dashboard |

---

## 2. Câu hỏi 1 — Lộ code khi bật DevTools

### Trả lời thẳng

Web app **không thể giấu hoàn toàn** JS/HTML/CSS khỏi DevTools. Đây là giới hạn vật lý của trình duyệt: code phải được tải về máy user để chạy. Mọi "anti-devtools" chỉ là rào cản tâm lý — dev có kinh nghiệm bypass trong 5 phút.

### Triết lý đúng

> **"Đừng tin client."**

Mọi logic kinh doanh quan trọng (cấp token, set premium, validate XP, grant subscription) phải thực thi trên **server (Supabase Edge Function + RLS trigger)**. Client chỉ là UI shell — nếu user "hack" được client, họ không thể làm gì hại (server vẫn reject request không hợp lệ).

Hanzi Genz **đã làm đúng phần này**: token grant, sync guard, admin check đều ở server. Chỉ cần duy trì nguyên tắc này khi thêm tính năng mới.

### Roadmap (theo effort/value)

#### Tier 1 — Bắt buộc (effort thấp, value cao)

- **Minify + bundle JS** (esbuild hoặc Vite minify-only mode). Reduce file size 40-60%, làm reverse-engineer khó hơn 3-4 lần. Hiện vanilla JS raw → dễ đọc như source.
- **Strip source maps** khỏi production build (xóa comment `//# sourceMappingURL=`).
- **Remove `console.log` debug** khỏi production (esbuild `--drop:console`).
- **Audit lại định kỳ:** mỗi feature mới phải tự hỏi "nếu user fake request này từ DevTools/curl, server có reject không?".

#### Tier 2 — Tùy chọn (effort trung)

- **Obfuscation** ([javascript-obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator)) — tăng độ khó đọc, NHƯNG tăng bundle size 30-50% + chậm runtime 10-20%. **Chỉ áp dụng cho 1-2 file** chứa logic check premium fallback hoặc anti-debug helper, KHÔNG obfuscate toàn bộ.
- **Bundle thành 1 file `app.min.js`** — xóa tên file gốc trong Network tab (ví dụ `monetization.js`, `admin.js` không còn nhận diện được).
- **Compile-time env vars** — string nhạy cảm (API endpoint, prompt template) move vào build-time replace thay vì hardcode.

#### Tier 3 — KHÔNG nên làm (giả an toàn, phản UX)

- ❌ **Anti-devtools detection** (`debugger;` loop, `window.outerHeight - innerHeight` check). Bypass dễ + làm phiền user thật (vd: dev frontend khác mở DevTools để xem layout).
- ❌ **Disable right-click / F12**. Phản UX, không hiệu quả (Ctrl+Shift+I, view-source:, curl... vẫn xem được).
- ❌ **Encrypt JS rồi decrypt runtime**. Key decrypt vẫn nằm trong code → vô nghĩa, chỉ thêm phức tạp.

### Kết luận

Đầu tư **Tier 1 + củng cố server-side validation**. Bỏ Tier 3.

---

## 3. Câu hỏi 2 — Có cần đổi web host không?

### Phân biệt 2 khái niệm dễ lẫn

| Khái niệm | Nghĩa | Hanzi Genz đang dùng |
|---|---|---|
| **Source hosting** | Nơi chứa source code gốc | GitHub (repo private) |
| **Web hosting** | Nơi serve file production cho user | Cloudflare Pages (auto-deploy từ `main`) |

### Hiện trạng

- Repo GitHub **đã private** → source code **không lộ** với public.
- File JS/HTML lộ ra qua URL `hanzigenz.com` là **không tránh được ở bất kỳ host nào** — Vercel, Netlify, VPS riêng, Cloudflare đều giống nhau. Trình duyệt phải download file mới chạy được.

### Trả lời

**Không cần đổi host.** Cloudflare Pages thực ra **tốt hơn** nhiều lựa chọn:

- Free CDN toàn cầu (edge ở Việt Nam → tốc độ tốt)
- DDoS protection mặc định
- HTTPS auto-renew, HTTP/3
- Bật được WAF (Web Application Firewall) miễn phí tier
- Tách build/deploy khỏi repo (không lộ Git history qua web)

### Khi nào MỚI nên đổi host (không phải bây giờ)

- **Compliance region-locked**: Khi luật yêu cầu data Việt Nam phải lưu trong nước → chuyển sang VNG Cloud / Viettel Cloud / Bizfly. *Hiện chưa có yêu cầu này.*
- **Traffic vượt free tier**: Khi Cloudflare Pages bị throttle (500 builds/tháng, 100k requests/ngày) → chuyển sang Cloudflare Workers + R2 (cùng hệ, dễ migrate).

### Action cần làm THAY VÌ đổi host (hardening Cloudflare)

1. **Bật Cloudflare WAF Managed Rules** (free tier) — chặn pattern SQLi/XSS phổ biến.
2. **Bật Bot Fight Mode** (free tier) — chặn scraper / bot.
3. **Set Security Headers** qua file `_headers` ở root:
   ```
   /*
     Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://*.supabase.co https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://*.supabase.co https://api.payos.vn; frame-ancestors 'none';
     X-Frame-Options: DENY
     X-Content-Type-Options: nosniff
     Referrer-Policy: strict-origin-when-cross-origin
     Permissions-Policy: camera=(), microphone=(), geolocation=()
   ```
   *(Lưu ý: CSP cần test kỹ vì có thể block inline script đang dùng — nên ramp dần qua `Content-Security-Policy-Report-Only` trước.)*
4. **Cloudflare Access cho `pages/admin.html`** — bật lớp auth thứ 2 ngoài email check (vd: yêu cầu OTP Google trước khi load trang admin).

---

## 4. Câu hỏi 3 — Bảo mật multi-platform

### 4.1 Web (hiện tại) — Hardening còn thiếu

- **CSP header strict** — xem section 3 ở trên.
- **Audit Edge Function `payos-webhook`** — verify HMAC signature từ PayOS. PayOS gửi header `x-signature` (hoặc tương đương) là `HMAC-SHA256(rawBody, checksum_key)`. Nếu chưa verify → ai cũng có thể gọi webhook giả lập payment thành công.
- **Rate limit Edge Functions** — vd: `create-payment` giới hạn 5 req/phút/user. Tránh spam tạo order, spam SMS PayOS.
- **Backup Edge Function source** ra repo private riêng (hoặc cron script sync `supabase/` lên private GitHub Gist 1 lần/tuần). Hiện local-only = single point of failure.
- **Supabase Advisor** chạy định kỳ mỗi quý — bắt RLS misconfig, missing index, exposed function.

### 4.2 PWA (Phase H — chưa làm)

- **Service Worker risks:**
  - SW intercept mọi network request → review code SW kỹ, **không cache response chứa Authorization header / token**.
  - Cache versioning: bump cache key mỗi deploy (`hanzigenz-v{git-sha}`) — tránh user stuck bản cũ chứa bug bảo mật.
- **Storage:** `localStorage` / `IndexedDB` cleartext → KHÔNG tự lưu refresh token dài hạn ở đây. Supabase JS SDK đã handle đúng (lưu trong `sb-*` cookie/storage có expiry) — chỉ cần đừng tự duplicate.
- **Update mechanism:** implement "kill switch" — SW định kỳ fetch `/version.json` so sánh với version đang chạy, nếu khác → force reload. Cho phép push hotfix khẩn cấp khi có CVE.
- **Offline-mode trust:** khi offline, premium check phải **gracefully degrade** (allow basic feature, lock premium feature với message "cần online để xác thực"), KHÔNG "trust localStorage flag" (user clear flag rất dễ).

### 4.3 Tauri Desktop (Phase J — cuối cùng)

- **Tauri allowlist tối thiểu**: `tauri.conf.json` chỉ enable API thật sự cần — `fs` chỉ scope vào app data dir, `shell` disable hoàn toàn nếu không cần, `http` chỉ whitelist domain Supabase + PayOS.
- **CSP trong Tauri webview**: tương tự web, strict không inline script.
- **Code signing:** ký binary trước khi distribute.
  - Windows: Authenticode (mua cert ~$300/năm, tránh SmartScreen warning)
  - macOS: Apple Developer ID ($99/năm, bắt buộc để tránh Gatekeeper block)
- **Auto-update:** dùng [Tauri Updater](https://tauri.app/v1/guides/distribution/updater) với signature verification (Ed25519 keypair). **Private key giữ OFFLINE** trên máy build, không commit, không lưu CI secret nếu không bắt buộc.
- **Local data encryption:** nếu SQLite local chứa progress/SRS data nhạy cảm → encrypt bằng [SQLCipher](https://www.zetetic.net/sqlcipher/). Lý do: máy desktop có thể bị share/lost.
- **Network:** giữ nguyên Supabase backend. Không invent custom protocol — tăng attack surface vô nghĩa.

### 4.4 Chrome Extension (đã có spec [`docs/plans/extension_plan.md`](plans/extension_plan.md))

- **Manifest V3 bắt buộc** (MV2 deprecated 2024-2025, không publish được lên Web Store).
- **Permissions tối thiểu:** chỉ xin `activeTab` + `storage`, KHÔNG `<all_urls>` (review sẽ pass nhanh hơn + bảo vệ user).
- **CSP extension:** không `'unsafe-eval'`, không `'unsafe-inline'`. MV3 enforce điều này mặc định.
- **Message passing security:** validate `sender.origin` của mọi message giữa content script ↔ background ↔ popup. KHÔNG trust `postMessage` từ trang web đang inject.
- **OAuth flow:** dùng `chrome.identity.launchWebAuthFlow` thay vì redirect cũ. Đã có [`pages/extension-auth.html`](../pages/extension-auth.html) — cần audit lại:
  - CSRF state token random sinh ra trước, verify khi callback.
  - Validate `origin` của postMessage từ popup về content script.
- **Auto-publish:** review Chrome Web Store policy đặc biệt mục **"remote code execution"** — extension KHÔNG được fetch JS động rồi `eval()`. Tất cả logic phải ship trong package.

---

## 5. Phased Roadmap

### Phase S1 — Quick wins (1-2 ngày, làm TRƯỚC cutoff 15/6)

- [ ] Thêm file `_headers` ở root với CSP / X-Frame-Options / Referrer / Permissions-Policy. Test bằng `Content-Security-Policy-Report-Only` trước, ramp dần.
- [ ] Bật Cloudflare WAF Managed Rules + Bot Fight Mode (dashboard toggle, không cần code).
- [ ] Audit `supabase/functions/payos-webhook/index.ts` — confirm có verify HMAC `x-signature` không. Nếu chưa → thêm verify.
- [ ] Backup `supabase/functions/` ra private GitHub Gist (cron 1 lần/tuần hoặc manual trước mỗi major release).
- [ ] Cloudflare Access cho `/admin` route (optional nhưng nên).

### Phase S2 — Build pipeline (sau cutoff, trước Phase H)

- [ ] Setup esbuild minify-only mode. Giữ kiến trúc no-bundler ở dev (vanilla script tag), minify ở deploy.
  - Script `npm run build:prod` → minify tất cả `js/*.js` → `dist/js/*.min.js`.
  - Cloudflare Pages build command point tới script này.
- [ ] Strip `console.log` + sourcemap khỏi production output.
- [ ] Rate limit Edge Functions: implement Deno KV counter hoặc Upstash Redis cho `create-payment`.

### Phase S3 — PWA hardening (làm kèm Phase H)

- [ ] Service Worker review checklist (không cache auth response, cache version bump per deploy).
- [ ] Kill-switch endpoint `/version.json` + SW poll.
- [ ] Graceful offline premium fallback (lock UI, không trust localStorage).

### Phase S4 — Desktop/Extension (làm kèm Phase J + Chrome Extension)

- [ ] Tauri allowlist tối thiểu trong `tauri.conf.json`.
- [ ] Mua code signing cert (Windows Authenticode + macOS Developer ID).
- [ ] Tauri Updater + Ed25519 keypair (private key OFFLINE).
- [ ] Extension MV3 audit: permissions tối thiểu, CSP strict, message origin validate.
- [ ] (Optional) Pen-test pass — tự test hoặc thuê freelancer ($200-500 cho scope nhỏ).

### Phase S5 — Operations (ongoing)

- [ ] Setup Cloudflare Analytics → Security tab monitor weekly.
- [ ] Supabase Advisor chạy định kỳ mỗi quý.
- [ ] Tạo `docs/INCIDENT_RESPONSE.md` khi có incident đầu tiên (template gồm: phát hiện → containment → eradication → recovery → post-mortem).

---

## 6. Nguyên tắc nền

1. **Đừng tin client** — mọi logic quan trọng phải validate ở server.
2. **Defense in depth** — đừng phụ thuộc vào 1 lớp duy nhất (vd: sync cutoff đã có 2 lớp client + server).
3. **Least privilege** — Tauri allowlist, Extension permissions, Supabase RLS đều phải scope tối thiểu cần thiết.
4. **Assume breach** — nếu attacker xem được toàn bộ client code, họ có thể làm gì? Nếu câu trả lời là "không gì cả vì server reject" → kiến trúc OK.
5. **Update đều** — Supabase Advisor, dependency audit (`npm audit` khi có `package.json`), Cloudflare WAF rules.
6. **Không security theater** — đừng làm anti-devtools, đừng disable F12, đừng obfuscate vô tội vạ. Chúng tốn thời gian, phản UX, không an toàn thật.

---

**Liên quan:**
- [implementation_plan.md](implementation_plan.md) — roadmap tổng (Phase A→Z, gồm Phase H/J)
- [DEPLOY_GUIDE.md](DEPLOY_GUIDE.md) — deploy Cloudflare Pages
- [plans/extension_plan.md](plans/extension_plan.md) — Chrome Extension spec
