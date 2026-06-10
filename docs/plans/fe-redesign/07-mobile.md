# 07 — MOBILE POLISH: bottom nav, FAB sheet, header, touch

> Wave 3 — chốt hạ. File: `css/layout/sidebar.css` (chứa cả bottom-nav?—xác minh), `css/base/responsive.css`, `css/components/fab-sheet.css`, `index.html` (markup nav/header). ⚠️ Cấu trúc nav LOCKED — wave này CHỈ polish bề mặt + ergonomics, KHÔNG đổi tab/route/FAB content.

---

## A. Phạm vi & nguyên tắc

- Mobile = 375px chuẩn test, breakpoints theo `responsive.css` hiện hành (không thêm breakpoint mới).
- Mọi trang đã redesign W0-W2 phải được rà lại trên 375px trong wave này (regression sweep).
- iOS safe-area: mọi element fixed đáy phải có `env(safe-area-inset-bottom)`.

## B. Bottom nav (5 tab + FAB)

1. Cao 64px + safe-area. Icon 24px SVG (nếu còn emoji/icon lệch bộ → thay theo `js/icons.js`), label 10px 500.
2. Active state: icon + label `--primary` + dot/pill indicator 4px; KHÔNG nền block to.
3. FAB: 56px, nền `--primary`, icon plus trắng 24px, shadow `--shadow-red`, nhô 12px trên nav; active scale .95.
4. Tap target mỗi tab ≥48×48 vùng chạm (padding, không chỉ icon).
5. Nav ẩn khi đang session học (04 đã thêm `body.session-active` — thêm rule ẩn bottom-nav + thay bằng nút SRS fixed đáy). Kiểm tra không double-fixed chồng nhau.

## C. FAB sheet (`fab-sheet.css`)

1. Bottom-sheet chuẩn: radius trên `--r-6`, handle bar 36×4px `--border`, overlay `--overlay` + backdrop-blur 4px, slide-up `--d-slow` `--ease-out`.
2. Title "Bạn muốn đi đâu?" `--t-h3`; 5 card (Luyện tập/Công cụ/Trò chơi/Stories/Khám Phá — LOCKED, nội dung giữ nguyên kể cả regroup đã làm ở commit W3 gần đây): hub-card mini, icon tile SVG, grid 2 cột + 1 full.
3. Đóng: tap overlay / kéo xuống (nếu có sẵn JS gesture thì giữ; KHÔNG viết gesture mới) / nút đóng.

## D. Header mobile

1. Cao 56px: logo trái · chips phải (token/streak/AI credit — render bởi auth.js/gamification.js, giữ id).
2. Chips: gom kiểu pill nền `--surface2` cao 32px, icon 16px + số; nếu >3 chip gây tràn trên 375px → ưu tiên hiện streak + token, AI credit ẩn vào profile (CSS ẩn theo width, không đổi JS).
3. Sticky top + border-bottom 1px `--border`; KHÔNG shadow khi chưa cuộn, có shadow `--shadow-1` khi cuộn (class scrolled nếu đã có; chưa có thì bỏ qua — không thêm scroll listener mới).

## E. Touch ergonomics sweep (mọi trang đã redesign)

- [ ] Mọi nút/link ≥44×44 vùng chạm
- [ ] Nút hành động chính của màn nằm nửa dưới màn hình (thumb-reach): SRS buttons, Kiểm tra, Học ngay
- [ ] Input không bị bàn phím che (scroll-into-view hành vi mặc định đủ; test typing mode + dictionary)
- [ ] Font input ≥16px (tránh iOS zoom)
- [ ] Không hover-only affordance: mọi hover state có active/focus tương đương
- [ ] Scroll ngang (timeline, chips) có scroll-snap + không kéo cả trang

## F. Checklist nghiệm thu wave

- [ ] Đi đủ 5 tab + FAB sheet + 1 session học + 1 lần tra từ trên viewport 375×667 và 390×844: không tràn ngang, không element che nhau, không dead-zone tap
- [ ] Safe-area iPhone (DevTools iPhone 14 Pro): bottom nav + nút SRS không dính home indicator
- [ ] Dark mode mobile pass toàn bộ
- [ ] Lighthouse mobile (Performance + A11y) trang home: A11y ≥ 90, không regression Performance so với trước redesign (đo trước khi bắt đầu W0 để có baseline — **baseline 2026-06-10: Performance 51 · Accessibility 95**) <!-- Đo trên static server `python -m http.server` (chưa minify/nén → Perf chỉ để so tương đối, không phải số prod), Lighthouse 11 mobile preset headless, 1 lần chạy. Screenshot before-redesign ở docs/plans/fe-redesign/baseline/ (gitignored). -->
