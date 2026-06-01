-- ═══════════════════════════════════════════════════════════════
-- v14_leaderboard.sql — Phase V1 Bảng Phong Vân
-- Chạy thủ công trên Supabase SQL Editor (production). Idempotent.
--
-- Thiết kế: leaderboard động lực học theo consistency, không dùng XP
-- localStorage. Client chỉ gọi RPC; server tự ghi current_date và cap
-- tối đa 1 active_day/user/ngày.
-- ═══════════════════════════════════════════════════════════════

-- ───────────────────────────────────────────────────────────────
-- PHẦN 1 — Profile opt-in công khai (không dùng email)
-- ───────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.user_leaderboard_profiles (
  user_id      UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  opted_in     BOOLEAN NOT NULL DEFAULT false,
  display_name TEXT,
  region       TEXT NOT NULL DEFAULT 'global',
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT leaderboard_display_name_valid CHECK (
    display_name IS NULL OR (
      char_length(btrim(display_name)) BETWEEN 2 AND 24
      AND display_name !~ '[[:cntrl:]<>"''&/\\]'
    )
  ),
  CONSTRAINT leaderboard_region_valid CHECK (region IN ('global', 'vn'))
);

CREATE INDEX IF NOT EXISTS idx_leaderboard_profiles_optin_region
  ON public.user_leaderboard_profiles(opted_in, region)
  WHERE opted_in = true;

ALTER TABLE public.user_leaderboard_profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "leaderboard_profiles_public_or_self_select" ON public.user_leaderboard_profiles;
CREATE POLICY "leaderboard_profiles_public_or_self_select" ON public.user_leaderboard_profiles
  FOR SELECT TO authenticated
  USING (opted_in = true OR auth.uid() = user_id);

DROP POLICY IF EXISTS "leaderboard_profiles_self_insert" ON public.user_leaderboard_profiles;
CREATE POLICY "leaderboard_profiles_self_insert" ON public.user_leaderboard_profiles
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "leaderboard_profiles_self_update" ON public.user_leaderboard_profiles;
CREATE POLICY "leaderboard_profiles_self_update" ON public.user_leaderboard_profiles
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "leaderboard_profiles_self_delete" ON public.user_leaderboard_profiles;
CREATE POLICY "leaderboard_profiles_self_delete" ON public.user_leaderboard_profiles
  FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

-- ───────────────────────────────────────────────────────────────
-- PHẦN 2 — Activity server-side append-only
-- ───────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.user_leaderboard_activity (
  id            BIGSERIAL PRIMARY KEY,
  user_id       UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  activity_date DATE NOT NULL DEFAULT CURRENT_DATE,
  activity_type TEXT NOT NULL DEFAULT 'active_day',
  points        INTEGER NOT NULL DEFAULT 10 CHECK (points BETWEEN 1 AND 10),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT leaderboard_activity_type_valid CHECK (activity_type IN ('active_day')),
  CONSTRAINT leaderboard_activity_unique_day UNIQUE (user_id, activity_date, activity_type)
);

CREATE INDEX IF NOT EXISTS idx_leaderboard_activity_date
  ON public.user_leaderboard_activity(activity_date DESC, activity_type);
CREATE INDEX IF NOT EXISTS idx_leaderboard_activity_user_date
  ON public.user_leaderboard_activity(user_id, activity_date DESC);

ALTER TABLE public.user_leaderboard_activity ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "leaderboard_activity_self_select" ON public.user_leaderboard_activity;
CREATE POLICY "leaderboard_activity_self_select" ON public.user_leaderboard_activity
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

-- 3 policy còn lại cố ý DENY direct client writes: chỉ RPC SECURITY DEFINER được ghi.
DROP POLICY IF EXISTS "leaderboard_activity_no_direct_insert" ON public.user_leaderboard_activity;
CREATE POLICY "leaderboard_activity_no_direct_insert" ON public.user_leaderboard_activity
  FOR INSERT TO authenticated
  WITH CHECK (false);

DROP POLICY IF EXISTS "leaderboard_activity_no_direct_update" ON public.user_leaderboard_activity;
CREATE POLICY "leaderboard_activity_no_direct_update" ON public.user_leaderboard_activity
  FOR UPDATE TO authenticated
  USING (false)
  WITH CHECK (false);

DROP POLICY IF EXISTS "leaderboard_activity_no_direct_delete" ON public.user_leaderboard_activity;
CREATE POLICY "leaderboard_activity_no_direct_delete" ON public.user_leaderboard_activity
  FOR DELETE TO authenticated
  USING (false);

-- ───────────────────────────────────────────────────────────────
-- PHẦN 3 — Views đọc aggregate opt-in theo tuần/tháng
-- ───────────────────────────────────────────────────────────────
CREATE OR REPLACE VIEW public.leaderboard_weekly
WITH (security_invoker = true)
AS
SELECT
  a.user_id,
  p.display_name,
  p.region,
  date_trunc('week', a.activity_date::timestamp)::date AS period_start,
  count(DISTINCT a.activity_date)::integer AS active_days,
  sum(a.points)::integer AS score_points,
  max(a.created_at) AS last_activity_at
FROM public.user_leaderboard_activity a
JOIN public.user_leaderboard_profiles p ON p.user_id = a.user_id
WHERE p.opted_in = true
  AND a.activity_date >= date_trunc('week', CURRENT_DATE)::date
  AND a.activity_date < (date_trunc('week', CURRENT_DATE)::date + interval '7 days')
GROUP BY a.user_id, p.display_name, p.region, date_trunc('week', a.activity_date::timestamp)::date;

CREATE OR REPLACE VIEW public.leaderboard_monthly
WITH (security_invoker = true)
AS
SELECT
  a.user_id,
  p.display_name,
  p.region,
  date_trunc('month', a.activity_date::timestamp)::date AS period_start,
  count(DISTINCT a.activity_date)::integer AS active_days,
  sum(a.points)::integer AS score_points,
  max(a.created_at) AS last_activity_at
FROM public.user_leaderboard_activity a
JOIN public.user_leaderboard_profiles p ON p.user_id = a.user_id
WHERE p.opted_in = true
  AND a.activity_date >= date_trunc('month', CURRENT_DATE)::date
  AND a.activity_date < (date_trunc('month', CURRENT_DATE)::date + interval '1 month')
GROUP BY a.user_id, p.display_name, p.region, date_trunc('month', a.activity_date::timestamp)::date;

GRANT SELECT ON public.leaderboard_weekly TO authenticated;
GRANT SELECT ON public.leaderboard_monthly TO authenticated;

-- ───────────────────────────────────────────────────────────────
-- PHẦN 4 — RPC opt-in / activity / fetch leaderboard
-- ───────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION public.set_leaderboard_profile(
  p_display_name TEXT,
  p_region TEXT DEFAULT 'global',
  p_opted_in BOOLEAN DEFAULT true
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_name TEXT := btrim(coalesce(p_display_name, ''));
  v_region TEXT := coalesce(nullif(p_region, ''), 'global');
BEGIN
  IF v_user_id IS NULL THEN
    RETURN jsonb_build_object('ok', false, 'error', 'unauthorized');
  END IF;

  IF p_opted_in THEN
    IF char_length(v_name) < 2 OR char_length(v_name) > 24 OR v_name ~ '[[:cntrl:]<>"''&/\\]' THEN
      RETURN jsonb_build_object('ok', false, 'error', 'invalid_display_name');
    END IF;
  ELSE
    v_name := NULL;
  END IF;

  IF v_region NOT IN ('global', 'vn') THEN
    v_region := 'global';
  END IF;

  INSERT INTO public.user_leaderboard_profiles (user_id, opted_in, display_name, region, updated_at)
  VALUES (v_user_id, p_opted_in, v_name, v_region, now())
  ON CONFLICT (user_id) DO UPDATE
     SET opted_in = excluded.opted_in,
         display_name = excluded.display_name,
         region = excluded.region,
         updated_at = now();

  RETURN jsonb_build_object('ok', true, 'opted_in', p_opted_in, 'display_name', v_name, 'region', v_region);
END;
$$;

CREATE OR REPLACE FUNCTION public.record_leaderboard_activity(
  p_activity_type TEXT DEFAULT 'active_day'
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_opted_in BOOLEAN;
  v_inserted BOOLEAN := false;
BEGIN
  IF v_user_id IS NULL THEN
    RETURN jsonb_build_object('ok', false, 'error', 'unauthorized');
  END IF;

  IF coalesce(p_activity_type, 'active_day') <> 'active_day' THEN
    RETURN jsonb_build_object('ok', false, 'error', 'invalid_activity_type');
  END IF;

  SELECT opted_in INTO v_opted_in
  FROM public.user_leaderboard_profiles
  WHERE user_id = v_user_id;

  IF coalesce(v_opted_in, false) = false THEN
    RETURN jsonb_build_object('ok', false, 'error', 'not_opted_in');
  END IF;

  INSERT INTO public.user_leaderboard_activity (user_id, activity_date, activity_type, points)
  VALUES (v_user_id, CURRENT_DATE, 'active_day', 10)
  ON CONFLICT (user_id, activity_date, activity_type) DO NOTHING
  RETURNING true INTO v_inserted;

  RETURN jsonb_build_object('ok', true, 'inserted', coalesce(v_inserted, false), 'activity_date', CURRENT_DATE);
END;
$$;

CREATE OR REPLACE FUNCTION public.get_leaderboard(
  p_period TEXT DEFAULT 'week',
  p_limit INTEGER DEFAULT 50,
  p_region TEXT DEFAULT 'global'
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_period TEXT := CASE WHEN p_period = 'month' THEN 'month' ELSE 'week' END;
  v_limit INTEGER := least(greatest(coalesce(p_limit, 50), 1), 100);
  v_region TEXT := coalesce(nullif(p_region, ''), 'global');
  v_period_start DATE;
  v_period_end DATE;
  v_top JSONB;
  v_me JSONB;
  v_profile JSONB;
BEGIN
  IF v_user_id IS NULL THEN
    RETURN jsonb_build_object('ok', false, 'error', 'unauthorized');
  END IF;

  IF v_region NOT IN ('global', 'vn') THEN
    v_region := 'global';
  END IF;

  IF v_period = 'month' THEN
    v_period_start := date_trunc('month', CURRENT_DATE)::date;
    v_period_end := (v_period_start + interval '1 month')::date;
  ELSE
    v_period_start := date_trunc('week', CURRENT_DATE)::date;
    v_period_end := (v_period_start + interval '7 days')::date;
  END IF;

  WITH scores AS (
    SELECT
      p.user_id,
      p.display_name,
      p.region,
      count(DISTINCT a.activity_date)::integer AS active_days,
      coalesce(sum(a.points), 0)::integer AS score_points,
      max(a.created_at) AS last_activity_at
    FROM public.user_leaderboard_profiles p
    LEFT JOIN public.user_leaderboard_activity a
      ON a.user_id = p.user_id
     AND a.activity_date >= v_period_start
     AND a.activity_date < v_period_end
    WHERE p.opted_in = true
      AND (v_region = 'global' OR p.region = v_region)
    GROUP BY p.user_id, p.display_name, p.region
  ), ranked AS (
    SELECT *, rank() OVER (ORDER BY active_days DESC, score_points DESC, last_activity_at ASC NULLS LAST, user_id ASC) AS rank
    FROM scores
    WHERE active_days > 0
  )
  SELECT coalesce(jsonb_agg(jsonb_build_object(
      'rank', rank,
      'user_id', user_id,
      'display_name', display_name,
      'region', region,
      'active_days', active_days,
      'score_points', score_points
    ) ORDER BY rank), '[]'::jsonb)
  INTO v_top
  FROM (SELECT * FROM ranked ORDER BY rank LIMIT v_limit) t;

  WITH scores AS (
    SELECT
      p.user_id,
      p.display_name,
      p.region,
      count(DISTINCT a.activity_date)::integer AS active_days,
      coalesce(sum(a.points), 0)::integer AS score_points,
      max(a.created_at) AS last_activity_at
    FROM public.user_leaderboard_profiles p
    LEFT JOIN public.user_leaderboard_activity a
      ON a.user_id = p.user_id
     AND a.activity_date >= v_period_start
     AND a.activity_date < v_period_end
    WHERE p.opted_in = true
      AND (v_region = 'global' OR p.region = v_region)
    GROUP BY p.user_id, p.display_name, p.region
  ), ranked AS (
    SELECT *, rank() OVER (ORDER BY active_days DESC, score_points DESC, last_activity_at ASC NULLS LAST, user_id ASC) AS rank
    FROM scores
    WHERE active_days > 0
  )
  SELECT jsonb_build_object(
      'rank', rank,
      'user_id', user_id,
      'display_name', display_name,
      'region', region,
      'active_days', active_days,
      'score_points', score_points
    )
  INTO v_me
  FROM ranked
  WHERE user_id = v_user_id;

  SELECT jsonb_build_object(
      'opted_in', coalesce(opted_in, false),
      'display_name', display_name,
      'region', region
    )
  INTO v_profile
  FROM public.user_leaderboard_profiles
  WHERE user_id = v_user_id;

  RETURN jsonb_build_object(
    'ok', true,
    'period', v_period,
    'period_start', v_period_start,
    'period_end', v_period_end,
    'region', v_region,
    'profile', coalesce(v_profile, jsonb_build_object('opted_in', false)),
    'top', v_top,
    'me', v_me
  );
END;
$$;

REVOKE EXECUTE ON FUNCTION public.set_leaderboard_profile(TEXT, TEXT, BOOLEAN) FROM anon;
REVOKE EXECUTE ON FUNCTION public.record_leaderboard_activity(TEXT) FROM anon;
REVOKE EXECUTE ON FUNCTION public.get_leaderboard(TEXT, INTEGER, TEXT) FROM anon;
GRANT EXECUTE ON FUNCTION public.set_leaderboard_profile(TEXT, TEXT, BOOLEAN) TO authenticated;
GRANT EXECUTE ON FUNCTION public.record_leaderboard_activity(TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_leaderboard(TEXT, INTEGER, TEXT) TO authenticated;

-- ───────────────────────────────────────────────────────────────
-- PHẦN 5 — Verify sau khi chạy
-- ───────────────────────────────────────────────────────────────
-- SELECT public.get_leaderboard('week', 20, 'global');
-- Chạy `sql/audit_rls.sql` lại: user_leaderboard_profiles phải có 4 policy.
-- Activity không có direct write policy là cố ý: chống client tự insert điểm.
