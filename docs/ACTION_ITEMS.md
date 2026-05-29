# Action Items

## 🖼️ Asset Pipeline — Production Deploy Pattern

### Fix urgent (block deploy outfit picker)

- ☑ DONE 2026-05-26 — Process Wave A outfit PNGs to production WebP assets in `assets/outfits/basic/`.
- ☑ DONE 2026-05-26 — Process Hộp Ân Cần outfit PNGs to production WebP assets in `assets/outfits/honor/`.
- ☑ DONE 2026-05-26 — Update outfit picker data from `.png` to `.webp` in `js/profile.js`.
- ☑ DONE 2026-05-26 — Update Hộp Ân Cần image base path from gitignored `content/` source to committed `assets/outfits/honor/` in `js/honor.js`.

### Decision log

- 2026-05-26 — Outfit assets follow the locked production pipeline: `content/assets/output/{wave}/*.png` remains gitignored source input; committed Cloudflare-served output lives under `assets/outfits/{basic,honor}/*.webp` as 200×200 WebP q85.
- 2026-05-26 — `be-rong-clean-ref.png` remains reference-only and is not processed for the outfit picker.

---

## 🎬 Phase P — Mai Character: AI Video Loop (nâng cấp sau)

> Hiện tại Mai dùng CSS animations (breathing, bounce-in, speaking pulse — done 2026-05-28).
> Khi muốn nâng cấp thêm → dùng AI video để biến ảnh tĩnh thành loop sống động.

### Workflow

1. **Tool:** Kling AI (kling.kuaishou.com) — free 66 credit/ngày
2. **Input:** `assets/mai/expressions/{expression}.webp` × 6 files
3. **Prompt template:**
   ```
   2D flat cartoon girl, gentle idle breathing, blinks once, soft smile,
   loop animation, no background movement, same pose, 2-3 seconds
   ```
4. **Output:** MP4 ~500KB/expression × 6 = ~4MB total
5. **Lưu vào:** `assets/mai/loops/{expression}.mp4`
6. **Tích hợp:** Thay `<img class="cs-mai-scene">` bằng:
   ```html
   <video class="cs-mai-scene" autoplay loop muted playsinline>
     <source src="assets/mai/loops/happy.mp4" type="video/mp4">
     <img src="assets/mai/expressions/happy.webp" alt="Mai"> <!-- fallback -->
   </video>
   ```
7. **JS thay đổi:** `_maiImg()` → `_maiVideo()` trong `js/course.js`

### Backup tools nếu Kling không ổn

| Tool | Link | Free tier |
|---|---|---|
| Runway Gen-3 Alpha | runwayml.com | 125 credit |
| Pika Labs | pika.art | Free tier |
| Adobe Express Animate | adobe.com/express | CC plan |

### Ưu tiên expression làm trước

1. `happy` — dùng nhiều nhất (default, intro, complete)
2. `focused` — trong dialogue học bài
3. `curious` — khi gặp từ mới
4. `surprise`, `confused`, `sad` — làm sau

### Notes

- D-ID / HeyGen **không dùng được** — cần face-forward portrait, không nhận 2D illustration
- Khi apply video: thêm CSS `cs-mai-scene video { height: 178px; }` và xóa `cs-breathe` animation (video đã có)
- Dung lượng 4MB tổng là chấp nhận được (lazy-load từng file, chỉ load expression đang dùng)

---
