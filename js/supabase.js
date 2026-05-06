// ═══════════════════════════════════════════════════════
// SUPABASE.JS — Supabase client initialization
// Exposes global `SB` (SupabaseClient instance)
// ═══════════════════════════════════════════════════════

var SB_URL  = 'https://fvxdakuxbmvaynqggdpe.supabase.co';
var SB_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2eGRha3V4Ym12YXlucWdnZHBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwMzUzNDEsImV4cCI6MjA5MzYxMTM0MX0.b9VeQLAqdX6c3oZ0gQK2cp49-N8CRZaQbe2e3sZW-Q0';

var SB = null;

(function initSupabase() {
  if (typeof window === 'undefined') return;
  // SDK loaded via CDN UMD build → window.supabase.createClient
  if (window.supabase && window.supabase.createClient) {
    SB = window.supabase.createClient(SB_URL, SB_ANON);
    console.log('[SUPABASE] Client initialized');
  } else {
    console.warn('[SUPABASE] SDK not found — auth/sync disabled');
  }
})();
