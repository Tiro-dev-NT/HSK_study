-- ═══════════════════════════════════════════════════════════════════════
-- Migration v26: public_stats() — số liệu cộng đồng THẬT cho trang khách (C7 A2)
-- ─────────────────────────────────────────────────────────────────────────
-- Bối cảnh: Home cho KHÁCH (chưa login) + Pricing cần "social proof" số liệu.
-- COMPLIANCE-FIRST (docs/COMPLIANCE_CHECKLIST.md #1 Luật QC, mục 1.2/1.4):
--   • CHỈ trả con số TRUY ĐƯỢC NGUỒN THẬT, đếm server-side. KHÔNG bịa, KHÔNG
--     phóng đại, KHÔNG fake urgency.
--   • RPC SECURITY DEFINER chỉ trả AGGREGATE — KHÔNG PII (không email/user_id/tên).
--
-- ⚠️ LỆCH SO VỚI SPEC C7 (cố ý, lý do compliance):
--   Spec gốc đề xuất {users_count, words_learned_today, minutes_today}. NHƯNG
--   dữ liệu hiện có KHÔNG cho phép đếm 2 metric "hôm nay" một cách TRUNG THỰC:
--     • Không có mốc thời gian cấp-từ ("học từ X lúc nào") ở phạm vi toàn dân:
--       user_progress UNIQUE(user_id, level, hsk_version) — 1 dòng/cấp, learned_words
--       là JSONB array, không có timestamp per-word → không đếm được "từ học hôm nay".
--     • "minutes_today" KHÔNG được thu thập server-side ở đâu cả.
--     • user_leaderboard_activity có theo-ngày nhưng CHỈ user opt-in → THIÊN LỆCH,
--       không đại diện cộng đồng → không dùng làm social proof.
--   → Thay bằng 2 metric đếm được TRUNG THỰC:
--     • users_count = tổng tài khoản (auth.users).
--     • active_7d   = số user có hoạt động thật trong 7 ngày qua (user_activity.last_active_at,
--                     mốc v19 client touch khi mở web — ĐÃ disclosure ở privacy.html "ngày học").
--   Khi nào thu được event-stream theo-ngày chuẩn + ẩn danh → mới thêm metric "hôm nay".
--
-- Ngưỡng hiển thị: do CLIENT quyết (const PUBLIC_STATS_MIN_USERS trong community.js).
--   Dưới ngưỡng → client hiện copy chữ "Cộng đồng đang lớn dần mỗi ngày", KHÔNG hiện số nhỏ.
--
-- Idempotent: CREATE OR REPLACE. An toàn chạy lại.
-- Run: Supabase Dashboard → SQL Editor → Run. Ghi "DEPLOYED prod: <ngày>" sau khi chạy.
-- ═══════════════════════════════════════════════════════════════════════

CREATE OR REPLACE FUNCTION public.public_stats()
RETURNS TABLE (
  users_count BIGINT,
  active_7d   BIGINT
)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT
    (SELECT COUNT(*) FROM auth.users)::BIGINT AS users_count,
    (SELECT COUNT(*) FROM public.user_activity
       WHERE last_active_at >= now() - interval '7 days')::BIGINT AS active_7d;
$$;

-- Public (kể cả khách chưa đăng nhập) được gọi — chỉ trả 2 con số tổng, không PII.
REVOKE EXECUTE ON FUNCTION public.public_stats() FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.public_stats() TO anon, authenticated;

-- ═══════════════════════════════════════════════════════════════════════
-- DONE v26 — sau khi chạy:
--   • Home khách + Pricing đọc public_stats() → hiện "{N} học viên · {M} người
--     học trong 7 ngày qua" KHI users_count ≥ ngưỡng; dưới ngưỡng hiện copy chữ.
-- DEPLOYED prod: <điền ngày sau khi chạy>
-- ═══════════════════════════════════════════════════════════════════════
