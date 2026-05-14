-- ═══════════════════════════════════════════════════════
-- Migration v6: Monetization — user_subscriptions table
-- Run in Supabase SQL Editor
-- ═══════════════════════════════════════════════════════

-- Subscription plan per user (one row per user)
CREATE TABLE IF NOT EXISTS user_subscriptions (
  id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id      UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  plan         VARCHAR(20) DEFAULT 'free'
               CHECK (plan IN ('free', 'basic', 'pro', 'max')),
  status       VARCHAR(20) DEFAULT 'active'
               CHECK (status IN ('active', 'expired', 'cancelled')),
  started_at   TIMESTAMPTZ DEFAULT NOW(),
  expires_at   TIMESTAMPTZ,
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE user_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select own subscription"
  ON user_subscriptions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "insert own subscription"
  ON user_subscriptions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "update own subscription"
  ON user_subscriptions FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
