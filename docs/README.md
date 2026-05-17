# 📚 Hanzi Genz — Documentation Index

> Toàn bộ tài liệu dự án Hanzi Genz. File `CLAUDE.md` ở root (auto-load).

---

## 🎯 Documents chính (root của docs/)

| File | Mục đích | Khi nào đọc |
|------|---------|------------|
| [`implementation_plan.md`](./implementation_plan.md) | **Roadmap chính** — Phase A→Z, decision log, verification | Mỗi khi bắt đầu phase mới, plan task |
| [`DEPLOY_GUIDE.md`](./DEPLOY_GUIDE.md) | Hướng dẫn deploy Cloudflare Pages | Khi cần deploy hoặc setup môi trường |
| [`BUG_REPORT.md`](./BUG_REPORT.md) | Lịch sử bug + fix | Khi gặp bug tương tự cũ, hoặc audit |

---

## 📁 Sub-folders

### [`plans/`](./plans/) — Plans cũ + specs gốc

| File | Mô tả |
|------|-------|
| [`extension_plan.md`](./plans/extension_plan.md) | Chrome extension roadmap (Phase 2.x) |
| [`sync_fix_v2_plan.md`](./plans/sync_fix_v2_plan.md) | Plan fix sync v2 (đã done) |
| [`css-organization-plan.md`](./plans/css-organization-plan.md) | Plan tổ chức CSS (đã apply) |
| [`hsk_game_spec.md`](./plans/hsk_game_spec.md) | Specs gốc Game Center (Phase C) |

### [`reports/`](./reports/) — Reports + analytics

| File | Mô tả |
|------|-------|
| [`HSK_DATA_COMPLETION_REPORT.md`](./reports/HSK_DATA_COMPLETION_REPORT.md) | Báo cáo trạng thái data HSK 1-6 |

### [`marketing/`](./marketing/) — Marketing content

| File | Mô tả |
|------|-------|
| [`kichban_tiktok_HanziGenz.md`](./marketing/kichban_tiktok_HanziGenz.md) | Kịch bản TikTok cho Hanzi Genz |
| [`phuong_phap_soan_kichban_tiktok.md`](./marketing/phuong_phap_soan_kichban_tiktok.md) | Phương pháp soạn kịch bản TikTok |

### `archive/` — Deprecated docs (sẽ thêm khi cần)

Khi 1 doc đã quá cũ và không còn relevance, move vào đây thay vì xóa.

---

## 🔗 Files ngoài `docs/`

| Path | Mục đích |
|------|---------|
| [`../CLAUDE.md`](../CLAUDE.md) | **Project map cho AI** — auto-load mỗi session |
| [`../README.md`](../README.md) | GitHub README (nếu repo public) |
| [`../content/`](../content/) | Raw content materials (data, story, scripts) |
| [`../content/README.md`](../content/README.md) | Index của content folder |

---

## 📐 Nguyên tắc đặt file MD

| Loại | Đặt ở | Ví dụ |
|------|------|------|
| AI project map | `<root>/CLAUDE.md` | (auto-load Claude Code) |
| GitHub README | `<root>/README.md` | (display GitHub) |
| Tài liệu dự án (cho dev/founder) | `docs/` | implementation_plan, DEPLOY_GUIDE |
| Plans cũ + specs gốc | `docs/plans/` | extension_plan |
| Reports + analytics | `docs/reports/` | data_completion_report |
| Marketing/sales | `docs/marketing/` | kich_ban_tiktok |
| Deprecated docs | `docs/archive/` | (move ở đây khi cũ) |
| App content materials | `content/` | story dialogues, radicals data |

→ **Không bao giờ** để MD files rải rác ở root nữa.
