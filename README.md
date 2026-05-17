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
- **Premium tier** — PayOS payment integration, 4 tier (Free/Basic/Pro/Lifetime)
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

**Đã hoàn thành (Phase A-N MVP):** Core learning, Gamification, Game Center, Auth + Cloud sync, UX v3, Monetization Phase K, Quest & Token Phase L, HSK 3.0 Dual Mode MVP.

**Đang/sắp làm:**
- 🔴 Phase Q — Learning Method Hub (dạy user cách dùng app)
- 🔴 Phase P — Curriculum Story Mai (giáo trình HSK 1-6 tự sáng tác)
- 🔴 Phase O — Content Gaps (Radicals + Topic + Mock exam đầy đủ)
- 🟡 Phase R/S/T/U/V/W/Y — Speaking/Writing/Real-world/Power tools/Social/Immersive/HSKK

## 📜 License

Personal project. Code không public license. Content (vocab data, stories) — see specific data files.

## 👤 Author

**Tiro** — dev.tiro.06@gmail.com
