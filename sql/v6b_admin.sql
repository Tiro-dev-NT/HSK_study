-- ═══════════════════════════════════════════════════════
-- Migration v6b: Admin Dashboard RPCs (K.8)
-- Run AFTER v6_monetization.sql
-- All RPCs are SECURITY DEFINER + check email = dev.tiro.06@gmail.com
-- ═══════════════════════════════════════════════════════

-- Helper: is current user the admin?
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN
LANGUAGE plpgsql STABLE SECURITY DEFINER
AS $$
BEGIN
  RETURN (SELECT email FROM auth.users WHERE id = auth.uid()) = 'dev.tiro.06@gmail.com';
END;
$$;

-- List all users + their subscription status
CREATE OR REPLACE FUNCTION admin_list_users()
RETURNS TABLE(
  id UUID,
  email TEXT,
  created_at TIMESTAMPTZ,
  plan TEXT,
  status TEXT,
  expires_at TIMESTAMPTZ,
  total_xp INT,
  streak_days INT
)
LANGUAGE plpgsql SECURITY DEFINER
AS $$
BEGIN
  IF NOT is_admin() THEN RAISE EXCEPTION 'Unauthorized'; END IF;
  RETURN QUERY
    SELECT
      u.id,
      u.email::TEXT,
      u.created_at,
      COALESCE(s.plan, 'free')::TEXT,
      COALESCE(s.status, 'active')::TEXT,
      s.expires_at,
      COALESCE(x.total_xp, 0),
      COALESCE(x.streak_days, 0)
    FROM auth.users u
    LEFT JOIN user_subscriptions s ON s.user_id = u.id
    LEFT JOIN user_xp x ON x.user_id = u.id
    ORDER BY u.created_at DESC;
END;
$$;

-- Grant/upgrade subscription manually
CREATE OR REPLACE FUNCTION admin_grant_subscription(
  target_email TEXT,
  target_plan TEXT,
  days INT
)
RETURNS TEXT
LANGUAGE plpgsql SECURITY DEFINER
AS $$
DECLARE target_id UUID;
BEGIN
  IF NOT is_admin() THEN RAISE EXCEPTION 'Unauthorized'; END IF;
  IF target_plan NOT IN ('free','basic','pro','max') THEN
    RAISE EXCEPTION 'Invalid plan: %', target_plan;
  END IF;

  SELECT id INTO target_id FROM auth.users WHERE email = target_email;
  IF target_id IS NULL THEN RAISE EXCEPTION 'User not found: %', target_email; END IF;

  INSERT INTO user_subscriptions (user_id, plan, status, started_at, expires_at)
  VALUES (target_id, target_plan, 'active', NOW(), NOW() + (days || ' days')::INTERVAL)
  ON CONFLICT (user_id) DO UPDATE SET
    plan = target_plan,
    status = 'active',
    started_at = NOW(),
    expires_at = NOW() + (days || ' days')::INTERVAL;

  RETURN 'OK: ' || target_email || ' → ' || target_plan || ' for ' || days || ' days';
END;
$$;

-- Revoke (set to free / cancelled)
CREATE OR REPLACE FUNCTION admin_revoke_subscription(target_email TEXT)
RETURNS TEXT
LANGUAGE plpgsql SECURITY DEFINER
AS $$
DECLARE target_id UUID;
BEGIN
  IF NOT is_admin() THEN RAISE EXCEPTION 'Unauthorized'; END IF;
  SELECT id INTO target_id FROM auth.users WHERE email = target_email;
  IF target_id IS NULL THEN RAISE EXCEPTION 'User not found'; END IF;

  UPDATE user_subscriptions
  SET plan = 'free', status = 'cancelled', expires_at = NOW()
  WHERE user_id = target_id;

  RETURN 'Revoked: ' || target_email;
END;
$$;

-- Aggregate stats
CREATE OR REPLACE FUNCTION admin_stats()
RETURNS TABLE(
  total_users INT,
  active_7d INT,
  pro_count INT,
  basic_count INT,
  total_xp BIGINT
)
LANGUAGE plpgsql SECURITY DEFINER
AS $$
BEGIN
  IF NOT is_admin() THEN RAISE EXCEPTION 'Unauthorized'; END IF;
  RETURN QUERY
    SELECT
      (SELECT COUNT(*)::INT FROM auth.users),
      (SELECT COUNT(*)::INT FROM user_xp WHERE last_active >= CURRENT_DATE - 7),
      (SELECT COUNT(*)::INT FROM user_subscriptions WHERE plan IN ('pro','max') AND status='active'),
      (SELECT COUNT(*)::INT FROM user_subscriptions WHERE plan='basic' AND status='active'),
      (SELECT COALESCE(SUM(total_xp),0)::BIGINT FROM user_xp);
END;
$$;
