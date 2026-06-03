// ═══════════════════════════════════════════════════════
// AUTH.JS — Authentication via Supabase
// • Google OAuth + Email + Password
// • Owns: Auth.init(), loginWithGoogle(), submitForm(),
//         logout(), renderUI(), handleMigration()
// • Writes: AppState.user
// ═══════════════════════════════════════════════════════

var Auth = {
  user: null,
  _tab: 'login',  // 'login' | 'register'

  // ── Tab switch ─────────────────────────────────────
  switchTab: function(tab) {
    Auth._tab = tab;
    document.getElementById('tabLogin').classList.toggle('active', tab === 'login');
    document.getElementById('tabRegister').classList.toggle('active', tab === 'register');
    document.getElementById('authConfirmWrap').style.display = tab === 'register' ? 'flex' : 'none';
    document.getElementById('authForgotBtn').style.display   = tab === 'login'    ? 'block' : 'none';
    document.getElementById('authSubmitBtn').textContent     = tab === 'login' ? 'Đăng nhập' : 'Đăng ký';
    document.getElementById('authModalSub').textContent      = tab === 'login'
      ? 'Đăng nhập để đồng bộ tiến trình học của bạn.'
      : 'Tạo tài khoản miễn phí, không cần Gmail.';
    if (document.getElementById('authPasswordInput'))
      document.getElementById('authPasswordInput').autocomplete = tab === 'login' ? 'current-password' : 'new-password';
  },

  // ── Submit form (login or register) ────────────────
  submitForm: async function() {
    var email = (document.getElementById('authEmailInput').value || '').trim();
    var pass  = (document.getElementById('authPasswordInput').value || '');
    if (!email || !pass) { showToast('Vui lòng nhập đầy đủ email và mật khẩu'); return; }
    if (!email.includes('@')) { showToast('Email không hợp lệ'); return; }

    var btn = document.getElementById('authSubmitBtn');
    btn.disabled = true;
    btn.textContent = '⏳';

    if (Auth._tab === 'register') {
      var confirm = (document.getElementById('authConfirmInput').value || '');
      if (pass !== confirm) { showToast('Mật khẩu xác nhận không khớp'); btn.disabled = false; Auth.switchTab('register'); return; }
      if (pass.length < 6) { showToast('Mật khẩu tối thiểu 6 ký tự'); btn.disabled = false; Auth.switchTab('register'); return; }
      var res = await SB.auth.signUp({ email: email, password: pass });
      if (res.error) {
        showToast('❌ ' + res.error.message);
      } else {
        showToast('✅ Đăng ký thành công! Kiểm tra email để xác nhận tài khoản.');
        Auth.closeLoginModal();
      }
    } else {
      try {
        var res2 = await SB.auth.signInWithPassword({ email: email, password: pass });
        if (res2.error) {
          showToast('❌ ' + (res2.error.message === 'Invalid login credentials' ? 'Email hoặc mật khẩu không đúng' : res2.error.message));
        } else if (res2.data && res2.data.user) {
          // Close modal now; SIGNED_IN event fires _onSignIn(user, true) which handles
          // Auth.user, toast, migration, and renderUI. Do NOT pre-set Auth.user here —
          // that would make _onSignIn think it's a re-auth of the same user (reAuth=true)
          // and skip migration/toast when switching accounts.
          Auth.closeLoginModal();
        }
      } catch (err) {
        showToast('❌ Lỗi kết nối. Kiểm tra mạng và thử lại.');
        console.error('[AUTH] submitForm error:', err);
      }
    }
    btn.disabled = false;
    Auth.switchTab(Auth._tab);
  },

  // ── Forgot password ────────────────────────────────
  forgotPassword: async function() {
    var email = (document.getElementById('authEmailInput').value || '').trim();
    if (!email || !email.includes('@')) { showToast('Nhập email trước rồi nhấn Quên mật khẩu'); return; }
    var res = await SB.auth.resetPasswordForEmail(email, { redirectTo: window.location.origin });
    if (res.error) {
      showToast('❌ ' + res.error.message);
    } else {
      showToast('📧 Đã gửi link đặt lại mật khẩu tới ' + email);
    }
  },

  // ── Init (call on app startup) ─────────────────────
  init: function() {
    if (!SB) return;

    // Restore from cache immediately — no network call, no flash of "logged out".
    // Cache is cleared only on explicit logout, not on Supabase token refresh failure.
    var cached = Auth._loadUserCache();
    if (cached) {
      Auth.user = cached;
      AppState.user = cached;
    }

    SB.auth.onAuthStateChange(async function(event, session) {
      if (event === 'INITIAL_SESSION') {
        if (session) {
          // If URL has OAuth callback params this is a fresh login, not a page reload
          var fromOAuth = window.location.hash.includes('access_token=') ||
                          window.location.search.includes('code=');
          Auth._saveUserCache(session.user);
          if (!Auth.user || Auth.user.id !== session.user.id) {
            await Auth._onSignIn(session.user, fromOAuth);
          } else {
            // Cache already showed this user — just refresh the data object
            Auth.user = session.user;
            AppState.user = session.user;
            Auth.renderUI();
          }
        } else {
          // Supabase couldn't restore session (project sleeping / token expired).
          // If cache exists keep showing the user; they can still use the app.
          // Only prompt login if there is no cached user at all.
          if (!Auth.user) Auth._scheduleSoftPrompt();
          else console.warn('[AUTH] INITIAL_SESSION null but cached user present — keeping profile.');
        }
      } else if (event === 'TOKEN_REFRESHED' && session) {
        Auth._saveUserCache(session.user);
        Auth.user = session.user;
        AppState.user = session.user;
      } else if (event === 'SIGNED_IN' && session) {
        Auth._saveUserCache(session.user);
        await Auth._onSignIn(session.user, true);
      } else if (event === 'SIGNED_OUT') {
        // Ignore all SDK-fired SIGNED_OUT — explicit logout is handled directly
        // in Auth.logout() which clears cache and calls _onSignOut() immediately.
        // This prevents Supabase-initiated SIGNED_OUT (token refresh failure on
        // paused free-tier project) from unexpectedly logging the user out.
        console.warn('[AUTH] SIGNED_OUT event ignored — use Auth.logout() to sign out.');
      }
    });

    // Supabase JS v2 (latest CDN) no longer auto-processes #access_token= from
    // the URL hash even with flowType:'implicit'. Detect and call setSession()
    // manually so the SIGNED_IN event fires and the user is actually logged in.
    Auth._handleOAuthHash();

    Auth.renderUI();
  },

  // ── Login methods ──────────────────────────────────
  loginWithGoogle: function() {
    if (!SB) { showToast('❌ Supabase chưa kết nối'); return; }
    SB.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin }
    }).then(function(res) {
      if (res.error) showToast('❌ ' + res.error.message);
    }).catch(function(err) {
      showToast('❌ Lỗi kết nối Google. Thử lại sau.');
      console.error('[AUTH] Google OAuth error:', err);
    });
  },

  logout: async function() {
    if (!SB) return;
    // Local logout immediately — don't wait for Supabase (may be sleeping)
    Auth._clearUserCache();
    Auth._onSignOut();
    // Supabase signOut best-effort (5s timeout)
    try {
      await Promise.race([
        SB.auth.signOut(),
        new Promise(function(_, rej) { setTimeout(rej, 5000); })
      ]);
    } catch(e) { /* Supabase offline — local logout already done */ }
  },

  // ── Internal ───────────────────────────────────────
  _onSignIn: async function(user, isNew) {
    // Clean up OAuth callback params now that Supabase has processed them
    if (window.location.search.includes('code=') || window.location.hash.includes('access_token=')) {
      history.replaceState({ page: 'home' }, '', '/');
    }
    // reAuth = same user token expired then re-logged in (e.g. for payment)
    var reAuth = isNew && Auth.user && Auth.user.id === user.id;
    Auth._hidePrompt();
    Auth.user = user;
    AppState.user = user;
    Auth._saveUserCache(user);
    Auth.renderUI();
    Auth.closeLoginModal();
    if (isNew && !reAuth) {
      showToast('👋 Xin chào ' + (user.user_metadata && user.user_metadata.name ? user.user_metadata.name : user.email) + '!');
      await Auth._handleMigration(user.id);
    }
    if (typeof Sync !== 'undefined') Sync.autoSync();
    // Fetch AI credit balance (non-blocking)
    setTimeout(function() { if (typeof AICredit !== 'undefined') AICredit.fetch(); }, 800);
    // Resume pending payment flow (user clicked upgrade while not logged in)
    if (typeof Pricing !== 'undefined' && Pricing._pendingPlan) {
      var pendingPlan = Pricing._pendingPlan;
      Pricing._pendingPlan = null;
      setTimeout(function() { Pricing.openPayment(pendingPlan); }, 350);
    }
    // Warm up Pro cache → rebuild level grid so L4-L9 lock/unlock is correct
    // from the first render (isProSync() returns false until isPro() has run once)
    if (typeof Monetization !== 'undefined') {
      Monetization.isPro().then(function() {
        if (typeof Gamification !== 'undefined') Gamification.buildLevelGrid();
      });
    }
  },

  _onSignOut: function() {
    Auth.user = null;
    AppState.user = null;
    // Clear synced user data so account B doesn't inherit account A's progress
    AppState.progress = {};
    AppState.srsData  = {};
    AppState.xpData   = { total: 0, weeklyXP: 0, weekStart: '', lastActive: '' };
    localStorage.removeItem('hsk_progress');
    localStorage.removeItem('hsk_srs');
    localStorage.removeItem('hsk_xp');
    localStorage.removeItem('hsk_user_decks');
    localStorage.removeItem('hsk_progress_v3');
    localStorage.removeItem('hsk_srs_v3');
    localStorage.removeItem('hsk_decks_v3');
    localStorage.removeItem('hsk_user_decks_v3');
    if (typeof Monetization !== 'undefined') Monetization.resetCache();
    Auth.renderUI();
    showToast('👋 Đã đăng xuất');
  },

  _handleMigration: async function(userId) {
    // Đã migrate localStorage→cloud rồi → không hỏi lại modal migration.
    // (Cutoff đã bỏ — đây chỉ là cờ "đã migrate", không khoá sync.)
    if (typeof SyncWindow !== 'undefined' && SyncWindow.hasMigrated()) {
      console.log('[AUTH] Migration skipped — đã migrate trước đó.');
      return;
    }

    var local = Auth._localSummary();
    if (!local.hasData) return;

    // Check if cloud already has data
    var res = await SB.from('user_xp').select('total_xp').eq('user_id', userId).maybeSingle();
    var cloudEmpty = !res.data || (res.data.total_xp || 0) === 0;

    if (cloudEmpty) {
      // Auto upload — no conflict; sanitize trước khi push
      if (typeof SyncWindow !== 'undefined') SyncWindow.sanitizeMigrationData();
      await Sync.pushAll();
      if (typeof SyncWindow !== 'undefined') SyncWindow.markMigrated();
      showToast('✅ Đã tải ' + local.learned + ' từ đã học lên cloud!');
    } else {
      // Both local and cloud have data → ask user
      Auth._showMigrationModal(local);
    }
  },

  _localSummary: function() {
    var prog = AppState.progress || {};
    var srs  = AppState.srsData  || {};
    var xp   = AppState.xpData   || {};
    var learned = Object.values(prog).reduce(function(s, a) { return s + a.length; }, 0);
    return {
      hasData: learned > 0 || Object.keys(srs).length > 0,
      learned: learned,
      srsCards: Object.keys(srs).length,
      xp: xp.total || 0
    };
  },

  _showMigrationModal: function(summary) {
    var desc = document.getElementById('migrationDesc');
    if (desc) desc.textContent =
      'Local: ' + summary.learned + ' từ đã học, ' + summary.srsCards + ' thẻ SRS, ' + summary.xp + ' XP';
    var m = document.getElementById('migrationModal');
    if (m) m.style.display = 'flex';
  },

  closeMigrationModal: function() {
    var m = document.getElementById('migrationModal');
    if (m) m.style.display = 'none';
    if (typeof Sync !== 'undefined') Sync.manualSync();
  },

  // ── UI ─────────────────────────────────────────────
  renderUI: function() {
    var loginBtn  = document.getElementById('authLoginBtn');
    var userBlock = document.getElementById('authUserBlock');
    var emailEl   = document.getElementById('authUserEmail');
    var syncBtn   = document.getElementById('syncStatusBtn');

    if (!loginBtn) return;
    var user = Auth.user;
    if (user) {
      loginBtn.style.display  = 'none';
      userBlock.style.display = 'flex';
      var name = (user.user_metadata && user.user_metadata.name) || user.email || 'User';
      if (emailEl) emailEl.textContent = name;
      if (typeof AICredit !== 'undefined') AICredit.updateUI();
    } else {
      loginBtn.style.display  = 'flex';
      userBlock.style.display = 'none';
      if (typeof AICredit !== 'undefined') AICredit.updateUI(null);
    }
    if (syncBtn) syncBtn.style.display = user ? '' : 'none';
    var syncRecovery = document.getElementById('smSyncRecovery');
    if (syncRecovery) syncRecovery.style.display = user ? '' : 'none';

    // K.8: show admin nav link for admin email only
    var navAdmin = document.getElementById('navAdmin');
    if (navAdmin) {
      navAdmin.style.display = (user && user.email === 'dev.tiro.06@gmail.com') ? '' : 'none';
    }

    if (typeof Sync !== 'undefined') Sync.updateBadge();
  },

  openLoginModal: function() {
    var m = document.getElementById('loginModal');
    if (m) m.style.display = 'flex';
  },

  closeLoginModal: function() {
    var m = document.getElementById('loginModal');
    if (m) m.style.display = 'none';
  },

  // ── Soft prompt helpers ────────────────────────────
  _PROMPT_DISMISS_KEY: 'hsk_auth_prompt_dismissed',
  _PROMPT_COOLDOWN_HOURS: 24,

  _scheduleSoftPrompt: function() {
    if (Auth._isPromptDismissed()) return;
    // Delay so user sees app first, then gentle prompt
    setTimeout(function() {
      if (!Auth.user) Auth._showPrompt();
    }, 4000);
  },

  _isPromptDismissed: function() {
    try {
      var ts = parseInt(localStorage.getItem(Auth._PROMPT_DISMISS_KEY) || '0', 10);
      if (!ts) return false;
      var hoursAgo = (Date.now() - ts) / 3600000;
      return hoursAgo < Auth._PROMPT_COOLDOWN_HOURS;
    } catch(e) { return false; }
  },

  _dismissPrompt: function() {
    try { localStorage.setItem(Auth._PROMPT_DISMISS_KEY, Date.now()); } catch(e) {}
    Auth._hidePrompt();
  },

  _showPrompt: function() {
    var p = document.getElementById('authPrompt');
    if (!p) return;
    p.style.display = 'flex';
    requestAnimationFrame(function() { p.classList.add('auth-prompt-visible'); });
  },

  _hidePrompt: function() {
    var p = document.getElementById('authPrompt');
    if (!p) return;
    p.classList.remove('auth-prompt-visible');
    setTimeout(function() { p.style.display = 'none'; }, 250);
  },

  // ── Manual OAuth hash handler (Supabase v2 CDN no longer auto-processes) ──
  _handleOAuthHash: function() {
    var hash = window.location.hash;
    if (!hash.includes('access_token=')) return;
    var params = {};
    hash.slice(1).split('&').forEach(function(part) {
      var eq = part.indexOf('=');
      if (eq > -1) params[decodeURIComponent(part.slice(0, eq))] = decodeURIComponent(part.slice(eq + 1));
    });
    if (!params.access_token || !params.refresh_token) return;
    SB.auth.setSession({
      access_token:  params.access_token,
      refresh_token: params.refresh_token
    }).catch(function(e) {
      console.error('[AUTH] OAuth setSession failed:', e);
    });
  },

  // ── User cache (survives Supabase token refresh failure) ──
  _USER_CACHE_KEY: 'hsk_user_cache',

  _saveUserCache: function(user) {
    try {
      localStorage.setItem(Auth._USER_CACHE_KEY, JSON.stringify({
        id: user.id, email: user.email, user_metadata: user.user_metadata || {}
      }));
    } catch(e) {}
  },

  _loadUserCache: function() {
    try {
      var raw = localStorage.getItem(Auth._USER_CACHE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch(e) { return null; }
  },

  _clearUserCache: function() {
    try { localStorage.removeItem(Auth._USER_CACHE_KEY); } catch(e) {}
    localStorage.removeItem('hsk_ai_credit_balance');
  },

  // ── Setup modal event listeners ────────────────────
  setup: function() {
    document.getElementById('authPromptLogin')?.addEventListener('click', Auth.openLoginModal);
    document.getElementById('authPromptLater')?.addEventListener('click', Auth._dismissPrompt);
    document.getElementById('authPromptClose')?.addEventListener('click', Auth._dismissPrompt);
    document.getElementById('authLoginBtn')?.addEventListener('click', Auth.openLoginModal);
    document.getElementById('authLoginBtnMobile')?.addEventListener('click', Auth.openLoginModal);
    document.getElementById('authLogoutBtn')?.addEventListener('click', Auth.logout);
    document.getElementById('authGoogleBtn')?.addEventListener('click', Auth.loginWithGoogle);
    document.getElementById('authPasswordInput')?.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') Auth.submitForm();
    });
    document.getElementById('authConfirmInput')?.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') Auth.submitForm();
    });
    // Migration buttons
    document.getElementById('migBtnUpload')?.addEventListener('click', async function() {
      showToast('📤 Đang upload...');
      try {
        if (typeof SyncWindow !== 'undefined') SyncWindow.sanitizeMigrationData();
        await Sync.pushAll();
        if (typeof SyncWindow !== 'undefined') SyncWindow.markMigrated();
        showToast('✅ Đã upload local lên cloud!');
        Auth.closeMigrationModal();
      } catch(e) {
        console.error('[AUTH migBtnUpload]', e);
        showToast('❌ Upload lỗi: ' + (e.message || 'thử lại sau'));
      }
    });
    document.getElementById('migBtnDownload')?.addEventListener('click', async function() {
      showToast('📥 Đang tải cloud...');
      try {
        await Sync.pullAll();
        // Download = lấy cloud về, không cần markMigrated (không có local→cloud push)
        showToast('✅ Đã lấy dữ liệu từ cloud!');
        Auth.closeMigrationModal();
      } catch(e) {
        console.error('[AUTH migBtnDownload]', e);
        showToast('❌ Tải lỗi: ' + (e.message || 'thử lại sau'));
      }
    });
    document.getElementById('migBtnMerge')?.addEventListener('click', async function() {
      showToast('🔀 Đang gộp...');
      try {
        if (typeof SyncWindow !== 'undefined') SyncWindow.sanitizeMigrationData();
        await Sync.mergeAll();
        if (typeof SyncWindow !== 'undefined') SyncWindow.markMigrated();
        showToast('✅ Đã gộp dữ liệu!');
        Auth.closeMigrationModal();
      } catch(e) {
        console.error('[AUTH migBtnMerge]', e);
        showToast('❌ Gộp lỗi: ' + (e.message || 'thử lại sau'));
      }
    });
    // Sync button
    document.getElementById('syncStatusBtn')?.addEventListener('click', function() {
      if (typeof Sync !== 'undefined') Sync.manualSync();
    });
  },

  // ── Extension auth bridge ──────────────────────────
  // Called on page load when ?ext_id=... is in the URL
  checkExtensionBridge: async function() {
    var params = new URLSearchParams(window.location.search);
    var extId = params.get('ext_id');
    if (!extId) return false;

    if (typeof Router !== 'undefined') Router.navigateTo('extension-auth');

    if (!SB) {
      document.getElementById('extAuthErrorMsg').textContent = 'Lỗi kết nối Supabase.';
      document.getElementById('extAuthError').style.display = '';
      return true;
    }

    var sessionRes = await SB.auth.getSession();
    var session = sessionRes.data && sessionRes.data.session;

    if (!session) {
      document.getElementById('extAuthMsg').textContent = 'Vui lòng đăng nhập để kết nối extension.';
      document.getElementById('extAuthLogin').style.display = '';
      // After login, try again
      SB.auth.onAuthStateChange(function(event, sess) {
        if (event === 'SIGNED_IN' && sess) {
          Auth._sendTokenToExtension(extId, sess);
        }
      });
    } else {
      await Auth._sendTokenToExtension(extId, session);
    }
    return true;
  },

  signOut: async function() { await Auth.logout(); },

  _sendTokenToExtension: async function(extId, session) {
    document.getElementById('extAuthMsg').textContent = 'Đang kết nối với extension...';
    document.getElementById('extAuthLogin').style.display = 'none';
    try {
      var sent = await new Promise(function(resolve) {
        if (typeof chrome === 'undefined' || !chrome.runtime) { resolve(false); return; }
        chrome.runtime.sendMessage(extId, {
          type:          'HANZIGENZ_AUTH',
          token:         session.access_token,
          refresh_token: session.refresh_token,
          user:          session.user,
        }, function(response) {
          resolve(response && response.ok);
        });
      });
      if (sent) {
        document.getElementById('extAuthMsg').textContent = '';
        document.getElementById('extAuthSuccess').style.display = '';
      } else {
        throw new Error('Extension không phản hồi. Hãy đảm bảo extension đã được cài đặt.');
      }
    } catch (e) {
      document.getElementById('extAuthMsg').textContent = '';
      document.getElementById('extAuthErrorMsg').textContent = e.message;
      document.getElementById('extAuthError').style.display = '';
    }
  },
};

// ═══════════════════════════════════════════════════════
// AI CREDIT BADGE — fetch & display user's AI credit
// balance from user_ai_credit_balance Supabase table.
// Shown only if user has ever purchased or received credits.
// ═══════════════════════════════════════════════════════
var AICredit = {
  _CACHE_KEY: 'hsk_ai_credit_balance',
  _lastBalance: null,
  _status: null,   // {tier, balance, allowance, purchased, recurring, daily_used, daily_cap}

  // Fetch full status via RPC get_ai_credit_balance (lazy-reset allowance đầu
  // tháng server-side). Cập nhật badge + cảnh báo. Hiển thị badge cho Pro hoặc
  // ai từng có credit; ẩn với free chưa từng dùng.
  fetch: async function() {
    if (!window.SB || !window.Auth || !Auth.user) return;
    var res = await SB.rpc('get_ai_credit_balance');
    if (res.error) { console.warn('[AICredit] fetch error:', res.error.message); return; }
    var d = res.data;
    if (!d || d.ok === false) { AICredit.updateUI(null); return; }

    var prev = AICredit._lastBalance;
    var bal  = d.balance || 0;
    AICredit._status     = d;
    AICredit._lastBalance = bal;
    try { localStorage.setItem(AICredit._CACHE_KEY, String(bal)); } catch(e) {}

    var isPro = d.tier && d.tier !== 'free';
    // Free chưa từng mua + chưa dùng allowance → ẩn cho gọn. Pro luôn hiện.
    var show = isPro || (d.purchased || 0) > 0 || (d.daily_used || 0) > 0;
    AICredit.updateUI(show ? bal : null);
    if (prev !== null && bal < prev) AICredit._warnLow(d);
  },

  // Update badge UI. Pass null to hide (logged out / no credits).
  // Pass undefined to read from localStorage cache.
  updateUI: function(balance) {
    if (balance === undefined) {
      var cached = localStorage.getItem(AICredit._CACHE_KEY);
      balance = cached !== null ? parseInt(cached, 10) : null;
    }
    var badge = document.getElementById('topbarAICreditBadge');
    if (!badge) return;
    if (balance === null) { badge.style.display = 'none'; return; }
    badge.style.display = '';
    badge.textContent   = balance.toLocaleString() + ' cr';
    badge.style.cursor  = 'pointer';
    if (!badge._aiBound) {
      badge._aiBound = true;
      badge.addEventListener('click', function() { AICredit.openModal(); });
    }
  },

  // Cảnh báo theo NGƯỠNG % của allowance recurring (Model C). Chỉ bắn khi
  // vừa tụt qua mốc (so prev → tránh spam mỗi lần dùng).
  _warnLow: function(d) {
    if (typeof showToast !== 'function') return;
    var ref = d.recurring || 50;          // mốc tham chiếu = allowance/tháng
    var bal = d.balance || 0;
    var t20 = Math.round(ref * 0.20);
    var t5  = Math.round(ref * 0.05);
    if (bal <= 0) {
      showToast('🔮 Hết AI Credit hạng-2. Tính năng tra cứu vẫn miễn phí — nạp Túi Linh Đan để dùng tiếp.');
    } else if (bal <= t5) {
      showToast('🔮 AI Credit còn ' + bal + ' cr (≤5%). Cân nhắc nạp thêm hoặc đợi reset đầu tháng.');
    } else if (bal <= t20) {
      showToast('🔮 Còn ' + bal + ' cr cho tháng này — dùng thoải mái nhé.');
    }
  },

  // Modal chi tiết (UIStates pattern) — allowance vs purchased + lượt/ngày.
  openModal: function() {
    if (!window.UIStates || !UIStates.openModal) return;
    var d = AICredit._status || {};
    var allowance = d.allowance || 0, purchased = d.purchased || 0;
    var recurring = d.recurring || 50, balance = d.balance || 0;
    var dailyUsed = d.daily_used || 0, dailyCap = d.daily_cap || 50;
    var tierLabel = (d.tier && d.tier !== 'free') ? 'Pro' : 'Miễn phí';

    function row(label, value, sub) {
      return '<div style="display:flex;justify-content:space-between;align-items:baseline;padding:10px 0;border-bottom:1px solid var(--border,#eee)">' +
             '<span style="color:var(--text-soft,#666)">' + label + '</span>' +
             '<span style="font-weight:700">' + value +
             (sub ? ' <span style="font-weight:400;color:var(--text-soft,#999);font-size:.85em">' + sub + '</span>' : '') +
             '</span></div>';
    }

    var html =
      '<div class="ui-modal ui-modal--sm" role="document">' +
        '<button class="ui-modal__close" data-ui-close type="button" aria-label="Đóng">✕</button>' +
        '<div style="padding:8px 4px">' +
          '<h2 style="margin:0 0 4px;font-size:1.25rem">🔮 AI Credit của bạn</h2>' +
          '<p style="margin:0 0 14px;color:var(--text-soft,#777);font-size:.9rem">' +
            'Gói <b>' + tierLabel + '</b> · trần ' + dailyCap + ' lượt AI/ngày' +
          '</p>' +
          '<div style="font-size:2rem;font-weight:800;color:var(--mau-tim,#7c3aed);margin-bottom:10px">' +
            balance.toLocaleString() + ' <span style="font-size:1rem;font-weight:600">cr</span></div>' +
          row('🎁 Tặng kèm gói (tháng này)', allowance + ' cr', '/ ' + recurring + ' cr — reset đầu tháng') +
          row('💎 Đã mua / quà chào mừng', purchased + ' cr', 'không hết hạn') +
          row('📅 Đã dùng hôm nay', dailyUsed + ' lượt', '/ ' + dailyCap) +
          '<p style="margin:14px 0 0;font-size:.82rem;color:var(--text-soft,#888);line-height:1.5">' +
            'Tra cứu từ vựng, pinyin, dịch câu ngắn <b>luôn miễn phí</b>. Credit chỉ dùng cho ' +
            'tính năng AI nâng cao (Tutor, chấm bài…).</p>' +
          '<button class="ui-state__cta ui-state__cta--full" id="aiCreditTopupBtn" type="button" style="margin-top:16px">' +
            '<span>Nạp thêm Túi Linh Đan</span></button>' +
        '</div>' +
      '</div>';

    var handle = UIStates.openModal(html, {});
    var btn = handle.root.querySelector('#aiCreditTopupBtn');
    if (btn) btn.addEventListener('click', function() {
      handle.close();
      if (typeof Router !== 'undefined') Router.navigateTo('pricing');
    });
  }
};
