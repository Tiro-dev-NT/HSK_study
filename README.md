# 🌸 Hanzi Genz

> Web app học từ vựng tiếng Trung HSK cho người Việt — Vanilla JS, Supabase, Cloudflare Pages.
> Production: [hanzigenz.com](https://hanzigenz.com)

---

## ✨ Tính năng nổi bật

- **HSK 2.0 + HSK 3.0 dual mode** — chuyển đổi version, namespace data tách biệt
- **SRS SM-2** — Spaced repetition science-based, ease factor đầy đủ
- **Game Center** — 8 mini-games (Speed Quiz, Memory, Wordle, Boss Battle, Racing, Sentence Builder, Cloze, Handwriting)
- **Gamification** — XP, streak, leaderboard, quests, token system, badges
- **Cloud sync** — Supabase auth (Google OAuth + email/pass) + push/pull/merge
- **Premium tier** — PayOS payment integration. Free + 5 thời hạn Pro: Linh hoạt (75k/1m) / Chăm chỉ (199k/3m) / Bứt phá (329k/6m) / Tiết kiệm (499k/12m) / Trọn đời (999k) + Token Shop 4 packs (19k/79k/159k/349k)
- **Token-for-everything model** — Pro 2-3x earn rate + AI cost giảm 40-50% so với Free. Daily AI cap chống abuse (50/200/500)
- **Dark mode + Bilingual** (Vietnamese primary, English secondary)
- **PWA-ready** (Phase H — chưa làm)

## 🛠️ Stack

| Layer | Tech |
|------|------|
| Frontend | Vanilla JS (no framework), HTML, CSS, HanziWriter CDN |
| Backend | Supabase (PostgreSQL + Auth + Edge Functions) |
| Hosting | Cloudflare Pages (auto-deploy từ `main`) |
| Payment | PayOS (QR-based VN payment gateway) |
| Keep-alive | GitHub Actions cron /10 phút |

## 🗂️ Cấu trúc project

```
.
├── index.html              # SPA shell
├── pages/                  # Fragment HTML (router fetch)
├── js/                     # Modules — vanilla JS, no bundler
│   ├── data/               # Vocab data (hsk1-6, v3, grammar, ...)
│   └── games/              # Mini games
├── css/                    # base/layout/pages/components/features
├── sql/                    # Supabase migrations
├── supabase/functions/     # Edge Functions (PayOS create + webhook)
├── content/                # Raw content materials (story, radicals, ...)
├── docs/                   # Project documentation
│   ├── implementation_plan.md   # Full roadmap A→Z
│   ├── DEPLOY_GUIDE.md
│   └── ...
└── CLAUDE.md               # AI project map (auto-load Claude Code)
```

→ Chi tiết: xem [`docs/README.md`](./docs/README.md) (index documentation)

## 🚀 Setup

```bash
git clone <repo>
cd Web_study_HSK
# Static site — không cần build/install
# Mở index.html với local server bất kỳ:
python -m http.server 8000
# Hoặc dùng VS Code Live Server
```

**Supabase setup:** xem [`docs/DEPLOY_GUIDE.md`](./docs/DEPLOY_GUIDE.md)

## 📈 Roadmap

Xem chi tiết: [`docs/implementation_plan.md`](./docs/implementation_plan.md)

**Đã hoàn thành (Phase A-N + L + HSK 3.0 L1-L9):** Core learning, Gamification, Game Center, Auth + Cloud sync, UX v3, Monetization Phase K (v7 refactor 5-tier Pro + Token Shop), Quest & Token Phase L, HSK 3.0 toàn bộ 9 cấp (11.453 từ, 100% VI coverage L1-L6).

**Đang/sắp làm:**
- 🔴 P0 — Fix audit findings (sync silent errors, query limits, SKU validation)
- 🔴 P0 — Storage abstraction (`js/storage.js` cho future IndexedDB migrate)
- 🔴 Phase Q — Learning Method Hub
- 🔴 Phase P — Curriculum Story Mai
- 🔴 Phase O — Content Gaps (Radicals + Topic + Mock exam)
- 🟠 Phase X1-X5 — Gamification (Bé Rồng evolution, Bộ thủ Pokedex, Achievement, Tết 2027 event)
- 🟠 Phase H — PWA + IndexedDB migration
- 🟡 Phase R/S/T/U/V/W/Y — Speaking/Writing/Real-world/Power tools/Social/Immersive/HSKK

## 📚 Documentation

Xem `docs/` đầy đủ:

| File | Mô tả |
|------|-------|
| [implementation_plan.md](./docs/implementation_plan.md) | Roadmap Phase A→Z + X1-X5 |
| [PRODUCT_TIER_MATRIX.md](./docs/PRODUCT_TIER_MATRIX.md) ⭐ | Feature × Free/Pro × Token cost (source-of-truth) |
| [GAMIFICATION_PLAN.md](./docs/GAMIFICATION_PLAN.md) | 7 gamification ideas + anti-toxic principles |
| [CONTENT_GUIDELINES.md](./docs/CONTENT_GUIDELINES.md) 🚫 | **HARD RULE: app KHÔNG chính trị.** AI prompt template + scanner |
| [REVENUE_PROJECTION.md](./docs/REVENUE_PROJECTION.md) | Doanh thu Stage 0-4 + chi phí + break-even |
| [SCALING_PLAN.md](./docs/SCALING_PLAN.md) | Migration storage/DB/host + multi-platform scaling |
| [COST_OPTIMIZATION.md](./docs/COST_OPTIMIZATION.md) | Zero-UX-impact cost optimization |
| [SECURITY_PLAN.md](./docs/SECURITY_PLAN.md) | Bảo mật Web/PWA/Tauri/Extension |
| [DEPLOY_GUIDE.md](./docs/DEPLOY_GUIDE.md) | Deploy Cloudflare Pages |

## 📜 License

**Proprietary — All Rights Reserved.** Code và content thuộc sở hữu cá nhân của tác giả. Không được sao chép, phân phối, hoặc sử dụng cho mục đích thương mại mà không có sự cho phép bằng văn bản. Vocabulary HSK base list là public standard từ Hanban/CTI (không thuộc bản quyền của project).

## 👤 Author

**Tiro** — dev.tiro.06@gmail.com (dev contact)
**Support / Pháp lý:** genzstudy06@gmail.com (user support, refund, legal)
