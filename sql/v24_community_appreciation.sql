-- ═══════════════════════════════════════════════════════════════════════
-- Migration v24: Trang Tri Ân (Community Appreciation Wall)
-- ─────────────────────────────────────────────────────────────────────────
-- Mở Trang Tri Ân công khai TÁI DÙNG bảng `feedback` (v10) thay vì bảng mới.
-- Privacy 2 cổng: user phải ĐỒNG Ý công khai (public_consent) + admin phải
-- DUYỆT (is_approved). Wall đọc qua RPC SECURITY DEFINER trả SANITIZED
-- (chỉ display_name + message + category + rating + created_at — KHÔNG email,
-- KHÔNG user_id). RLS feedback (chỉ đọc của mình) GIỮ NGUYÊN — không nới cho client.
--
-- Run in Supabase Dashboard → SQL Editor → Run. Requires v10 (feedback table + _is_admin).
-- Idempotent: ADD COLUMN IF NOT EXISTS + CREATE OR REPLACE / DROP+CREATE.
-- ═══════════════════════════════════════════════════════════════════════

-- ── 1. 3 cột mới trên feedback ────────────────────────────────────────
ALTER TABLE public.feedback ADD COLUMN IF NOT EXISTS public_consent BOOLEAN DEFAULT false;
ALTER TABLE public.feedback ADD COLUMN IF NOT EXISTS is_approved    BOOLEAN DEFAULT false;
ALTER TABLE public.feedback ADD COLUMN IF NOT EXISTS is_featured    BOOLEAN DEFAULT false;
CREATE INDEX IF NOT EXISTS idx_feedback_wall
  ON public.feedback(is_approved, public_consent, created_at DESC);

-- ── 2. RPC public: wall (sanitized) ───────────────────────────────────
-- Trả về CHỈ các góp ý user đã đồng ý công khai + admin đã duyệt. Không lộ email/user_id.
CREATE OR REPLACE FUNCTION public.community_appreciation_wall(
  p_limit    INT  DEFAULT 30,
  p_category TEXT DEFAULT NULL
)
RETURNS TABLE (
  id BIGINT, display_name TEXT, message TEXT,
  category TEXT, rating INT, is_featured BOOLEAN, created_at TIMESTAMPTZ
)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT f.id,
         COALESCE(NULLIF(TRIM(f.display_name), ''), 'Học viên') AS display_name,
         f.message, f.category, f.rating, f.is_featured, f.created_at
  FROM public.feedback f
  WHERE f.is_approved = true
    AND f.public_consent = true
    AND (p_category IS NULL OR f.category = p_category)
  ORDER BY f.is_featured DESC, f.created_at DESC
  LIMIT GREATEST(1, LEAST(p_limit, 100));
$$;
REVOKE EXECUTE ON FUNCTION public.community_appreciation_wall(INT, TEXT) FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.community_appreciation_wall(INT, TEXT) TO anon, authenticated;

-- ── 3. RPC public: featured (Monthly MVP spotlight) ───────────────────
CREATE OR REPLACE FUNCTION public.community_appreciation_featured()
RETURNS TABLE (
  id BIGINT, display_name TEXT, message TEXT,
  category TEXT, rating INT, created_at TIMESTAMPTZ
)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT f.id,
         COALESCE(NULLIF(TRIM(f.display_name), ''), 'Học viên') AS display_name,
         f.message, f.category, f.rating, f.created_at
  FROM public.feedback f
  WHERE f.is_approved = true AND f.public_consent = true AND f.is_featured = true
  ORDER BY f.created_at DESC
  LIMIT 1;
$$;
REVOKE EXECUTE ON FUNCTION public.community_appreciation_featured() FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.community_appreciation_featured() TO anon, authenticated;

-- ── 4. Admin RPC: duyệt công khai ─────────────────────────────────────
CREATE OR REPLACE FUNCTION public.admin_set_feedback_approved(p_id BIGINT, p_val BOOLEAN)
RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NOT _is_admin() THEN RAISE EXCEPTION 'unauthorized'; END IF;
  UPDATE public.feedback
     SET is_approved = p_val,
         is_featured = CASE WHEN p_val = false THEN false ELSE is_featured END,  -- bỏ duyệt thì cũng bỏ featured
         updated_at  = now()
   WHERE id = p_id;
  IF NOT FOUND THEN RETURN jsonb_build_object('ok', false, 'error', 'not_found'); END IF;
  RETURN jsonb_build_object('ok', true, 'is_approved', p_val);
END;
$$;
REVOKE EXECUTE ON FUNCTION public.admin_set_feedback_approved(BIGINT, BOOLEAN) FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.admin_set_feedback_approved(BIGINT, BOOLEAN) TO authenticated;

-- ── 5. Admin RPC: featured (chỉ 1 MVP — set true sẽ bỏ featured cũ) ────
CREATE OR REPLACE FUNCTION public.admin_set_feedback_featured(p_id BIGINT, p_val BOOLEAN)
RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE v_ok BOOLEAN; v_consent BOOLEAN;
BEGIN
  IF NOT _is_admin() THEN RAISE EXCEPTION 'unauthorized'; END IF;
  IF p_val = true THEN
    SELECT is_approved, public_consent INTO v_ok, v_consent FROM public.feedback WHERE id = p_id;
    IF v_ok IS NULL THEN RETURN jsonb_build_object('ok', false, 'error', 'not_found'); END IF;
    IF NOT (v_ok AND v_consent) THEN
      RETURN jsonb_build_object('ok', false, 'error', 'need_approved_and_consent');
    END IF;
    UPDATE public.feedback SET is_featured = false WHERE is_featured = true;  -- chỉ 1 featured
  END IF;
  UPDATE public.feedback SET is_featured = p_val, updated_at = now() WHERE id = p_id;
  RETURN jsonb_build_object('ok', true, 'is_featured', p_val);
END;
$$;
REVOKE EXECUTE ON FUNCTION public.admin_set_feedback_featured(BIGINT, BOOLEAN) FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.admin_set_feedback_featured(BIGINT, BOOLEAN) TO authenticated;

-- ── 6. admin_list_feedback (extended — thêm 3 cột wall) ────────────────
-- DROP+CREATE vì RETURNS TABLE đổi signature (thêm public_consent/is_approved/is_featured).
DROP FUNCTION IF EXISTS public.admin_list_feedback(INT);
CREATE FUNCTION public.admin_list_feedback(p_limit INT DEFAULT 100)
RETURNS TABLE (
  id BIGINT, user_id UUID, user_email TEXT, display_name TEXT,
  subject TEXT, message TEXT, category TEXT, priority TEXT,
  status TEXT, reply_text TEXT, rating INT, is_pro BOOLEAN,
  public_consent BOOLEAN, is_approved BOOLEAN, is_featured BOOLEAN,
  created_at TIMESTAMPTZ, replied_at TIMESTAMPTZ
)
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NOT _is_admin() THEN RAISE EXCEPTION 'unauthorized'; END IF;
  RETURN QUERY
  SELECT f.id, f.user_id, f.user_email, f.display_name,
    f.subject, f.message, f.category, f.priority,
    f.status, f.reply_text, f.rating, f.is_pro,
    f.public_consent, f.is_approved, f.is_featured,
    f.created_at, f.replied_at
  FROM public.feedback f
  ORDER BY
    CASE f.status WHEN 'unread' THEN 0 WHEN 'read' THEN 1 ELSE 2 END,
    f.created_at DESC
  LIMIT p_limit;
END;
$$;
REVOKE EXECUTE ON FUNCTION public.admin_list_feedback(INT) FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.admin_list_feedback(INT) TO authenticated;

-- ═══════════════════════════════════════════════════════════════════════
-- DONE v24. Sau khi chạy:
--  • User tick "đăng công khai" khi gửi góp ý → feedback.public_consent=true.
--  • Admin duyệt (admin_set_feedback_approved) + chọn MVP (admin_set_feedback_featured).
--  • Trang /tri-an đọc community_appreciation_wall + community_appreciation_featured (sanitized).
-- DEPLOYED prod: 2026-06-13
-- ═══════════════════════════════════════════════════════════════════════
