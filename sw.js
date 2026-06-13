// ═══════════════════════════════════════════════════════════════════
// SW.JS — Service Worker (PWA bước 1) — Hanzi Genz
//
// MỤC TIÊU: mở app-shell offline + tăng tốc load lặp lại, KHÔNG bao giờ
// kẹt user ở bản cũ.
//
// CHIẾN LƯỢC (vì asset versioned ?v= là chìa khoá an toàn):
//   • Navigation / HTML  → NETWORK-FIRST (online luôn lấy markup mới →
//     tham chiếu ?v= mới; offline mới fallback shell cache). Đây là lý do
//     "hard-reload nhận bản mới" luôn đúng.
//   • Asset same-origin (js/css/png/webp/woff/json…) → CACHE-FIRST theo URL
//     ĐẦY ĐỦ (gồm ?v=). Bump ?v= = URL mới = cache-miss = fetch bản mới.
//     (Convention CLAUDE.md: sửa file PHẢI bump ?v= — SW dựa vào đó.)
//   • Cross-origin (Supabase API/auth, jsdelivr, cdn.hanzigenz.com) →
//     PASSTHROUGH network, KHÔNG cache (tránh stale auth/data).
//   • Non-GET → passthrough.
//
// AN TOÀN / KILL-SWITCH:
//   • skipWaiting (qua message) + clients.claim → bản mới lên ngay, dọn
//     cache cũ ở activate. Page tự reload 1 lần khi controller đổi (app.js).
//   • updateViaCache:'none' (đăng ký ở app.js) → sw.js luôn revalidate.
//   • KẸT CACHE? 2 cách gỡ:
//       1) Runtime: chạy window.__killSW() ở console (app.js).
//       2) Deploy diện rộng: thay TOÀN BỘ nội dung file này bằng đoạn "tự
//          sát" dưới đây rồi push — mọi client sẽ unregister + xoá cache:
//            self.addEventListener('install', () => self.skipWaiting());
//            self.addEventListener('activate', async () => {
//              await self.registration.unregister();
//              const ks = await caches.keys();
//              await Promise.all(ks.map(k => caches.delete(k)));
//              const cs = await self.clients.matchAll();
//              cs.forEach(c => c.navigate(c.url));
//            });
// ═══════════════════════════════════════════════════════════════════

// ⬆️ BUMP khi muốn ép dọn sạch cache cũ (đổi chiến lược / nghi ngờ nhiễm bẩn).
const CACHE = 'hanzigenz-v1';

// Shell tối thiểu để mở được offline. Best-effort: 1 file lỗi KHÔNG chặn install.
const SHELL = ['/', '/index.html', '/manifest.json', '/assets/icon.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      Promise.allSettled(SHELL.map((u) => cache.add(u)))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Cho phép page ép kích hoạt bản mới (skipWaiting có chủ đích).
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

function isHTMLRequest(req) {
  if (req.mode === 'navigate') return true;
  const accept = req.headers.get('accept') || '';
  return accept.includes('text/html');
}

// Asset tĩnh same-origin nên cache-first.
function isCacheableAsset(url) {
  return /\.(?:js|css|png|jpe?g|webp|svg|gif|ico|woff2?|ttf|json|mp3|wav)$/i
    .test(url.pathname);
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;                 // non-GET → mạng thuần

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;  // cross-origin → passthrough

  // KHÔNG cache chính sw.js (luôn lấy bản mới qua HTTP).
  if (url.pathname === '/sw.js') return;

  // ── HTML / navigation → network-first, offline fallback shell ──
  if (isHTMLRequest(req)) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          // Lưu bản mới của shell để lần offline tới mở được.
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('/index.html', copy)).catch(() => {});
          return res;
        })
        .catch(() =>
          caches.match(req).then((hit) => hit || caches.match('/index.html'))
        )
    );
    return;
  }

  // ── Asset versioned → cache-first (?v= bảo đảm tươi) ──
  if (isCacheableAsset(url)) {
    event.respondWith(
      caches.match(req).then((hit) => {
        if (hit) return hit;
        return fetch(req).then((res) => {
          if (res && res.ok && res.type === 'basic') {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          }
          return res;
        });
      })
    );
    return;
  }

  // Còn lại → mạng thuần (fallback cache nếu offline).
  event.respondWith(fetch(req).catch(() => caches.match(req)));
});
