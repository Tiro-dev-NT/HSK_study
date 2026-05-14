-- ═══════════════════════════════════════════════════════════════════
-- supabase_sync_guard.sql — Server-side validation cho Sync Cutoff
-- ─────────────────────────────────────────────────────────────────
-- Mục đích: chặn mọi client cố tình push local→cloud sau 15/6/2026
-- Cách chạy: paste toàn bộ file này vào Supabase Dashboard > SQL Editor
-- ═══════════════════════════════════════════════════════════════════

-- ──────────────────────────────────────────────────────────────────
-- 1. Helper: kiểm tra sync window còn mở không
-- ──────────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION public.is_sync_window_open()
RETURNS boolean
LANGUAGE sql
STABLE
AS $$
  SELECT (now() AT TIME ZONE 'Asia/Ho_Chi_Minh') < TIMESTAMP '2026-06-15 23:59:59';
$$;


-- ──────────────────────────────────────────────────────────────────
-- 2. Trigger function: validate + cap XP trước khi INSERT/UPDATE user_xp
-- ──────────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION public.validate_xp_insert()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  -- Chặn nếu sync window đã đóng
  IF NOT public.is_sync_window_open() THEN
    RAISE EXCEPTION 'SYNC_WINDOW_CLOSED: Cửa sổ đồng bộ đã đóng sau 15/6/2026. local→cloud bị khoá.'
      USING ERRCODE = 'P0001';
  END IF;

  -- Anti-cheat: cap total_xp
  IF NEW.total_xp IS NOT NULL AND NEW.total_xp > 50000 THEN
    NEW.total_xp := 50000;
  END IF;

  -- Anti-cheat: cap streak_days (7 ngày cho lần migrate đầu)
  IF NEW.streak_days IS NOT NULL AND NEW.streak_days > 365 THEN
    NEW.streak_days := 365;
  END IF;

  -- Anti-cheat: cap weekly_xp (300 XP/ngày × 7 ngày = 2100)
  IF NEW.weekly_xp IS NOT NULL AND NEW.weekly_xp > 2100 THEN
    NEW.weekly_xp := 2100;
  END IF;

  RETURN NEW;
END;
$$;

-- Attach trigger to user_xp
DROP TRIGGER IF EXISTS trg_validate_xp ON public.user_xp;
CREATE TRIGGER trg_validate_xp
  BEFORE INSERT OR UPDATE ON public.user_xp
  FOR EACH ROW
  EXECUTE FUNCTION public.validate_xp_insert();


-- ──────────────────────────────────────────────────────────────────
-- 3. Trigger function: validate + cap progress trước khi INSERT/UPDATE
-- ──────────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION public.validate_progress_insert()
RETURNS trigger
LANGUAGE plpgsql
AS $$
DECLARE
  max_words integer;
BEGIN
  -- Chặn nếu sync window đã đóng
  IF NOT public.is_sync_window_open() THEN
    RAISE EXCEPTION 'SYNC_WINDOW_CLOSED: Cửa sổ đồng bộ đã đóng sau 15/6/2026.'
      USING ERRCODE = 'P0001';
  END IF;

  -- Cap learned_words per level (chống claim học hết từ điển)
  max_words := CASE NEW.level
    WHEN 1 THEN 150
    WHEN 2 THEN 150
    WHEN 3 THEN 300
    WHEN 4 THEN 600
    WHEN 5 THEN 1300
    WHEN 6 THEN 2500
    ELSE 3000
  END;

  IF array_length(NEW.learned_words, 1) IS NOT NULL
     AND array_length(NEW.learned_words, 1) > max_words THEN
    NEW.learned_words := NEW.learned_words[1:max_words];
  END IF;

  RETURN NEW;
END;
$$;

-- Attach trigger to user_progress
DROP TRIGGER IF EXISTS trg_validate_progress ON public.user_progress;
CREATE TRIGGER trg_validate_progress
  BEFORE INSERT OR UPDATE ON public.user_progress
  FOR EACH ROW
  EXECUTE FUNCTION public.validate_progress_insert();


-- ──────────────────────────────────────────────────────────────────
-- 4. Trigger function: validate user_srs (chặn sau cutoff)
-- ──────────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION public.validate_srs_insert()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  IF NOT public.is_sync_window_open() THEN
    RAISE EXCEPTION 'SYNC_WINDOW_CLOSED: Cửa sổ đồng bộ đã đóng sau 15/6/2026.'
      USING ERRCODE = 'P0001';
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_validate_srs ON public.user_srs;
CREATE TRIGGER trg_validate_srs
  BEFORE INSERT OR UPDATE ON public.user_srs
  FOR EACH ROW
  EXECUTE FUNCTION public.validate_srs_insert();


-- ──────────────────────────────────────────────────────────────────
-- 5. Test: verify function hoạt động
-- ──────────────────────────────────────────────────────────────────
-- Uncomment để test:
-- SELECT public.is_sync_window_open();
-- (Trả về true nếu trước 15/6/2026, false nếu sau)


-- ──────────────────────────────────────────────────────────────────
-- GHI CHÚ QUAN TRỌNG
-- ──────────────────────────────────────────────────────────────────
-- • Supabase → localStorage (pullAll/forcePull) KHÔNG bị ảnh hưởng
--   vì đó là SELECT, không phải INSERT/UPDATE
-- • Triggers chỉ chặn INSERT và UPDATE — không chặn SELECT/DELETE
-- • Sau 15/6/2026: client sẽ nhận exception 'SYNC_WINDOW_CLOSED'
--   và JS sẽ catch + log warn, không crash app
-- • Premium check: KHÔNG BAO GIỜ dùng localStorage — luôn query Supabase
-- • Leaderboard score: chỉ đọc từ game_sessions table, không từ localStorage
