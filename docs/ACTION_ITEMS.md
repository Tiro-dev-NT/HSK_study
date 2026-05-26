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
