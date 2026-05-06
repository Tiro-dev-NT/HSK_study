// ═══════════════════════════════════════════════════════
// AUTH.JS — Authentication via Supabase
// • Google OAuth + Email magic link
// • Owns: Auth.init(), loginWithGoogle(), loginWithEmail(),
//         logout(), renderUI(), handleMigration()
// • Writes: AppState.user
// ═══════════════════════════════════════════════════════

var Auth = {
  user: null,

  // ── Init (call on app startup) ─────────────────────
  init: async function() {
    if (!SB) return;

    // Restore existing session
    var sessionRes = await SB.auth.getSession();
    if (sessionRes.data && sessionRes.data.session) {
      await Auth._onSignIn(sessionRes.data.session.user, false);
    }

    // Listen for future auth events (OAuth redirect, magic link)
    SB.auth.onAuthStateChange(async function(event, session) {
      if (event === 'SIGNED_IN' && session) {
        await Auth._onSignIn(session.user, true);
      } else if (event === 'SIGNED_OUT') {
        Auth._onSignOut();
      }
    });

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
    });
  },

  loginWithEmail: async function(email) {
    if (!SB) return;
    if (!email || !email.includes('@')) { showToast('Email không hợp lệ'); return; }
    var res = await SB.auth.signInWithOtp({
      email: email,
      options: { emailRedirectTo: window.location.origin }
    });
    if (res.error) {
      showToast('❌ ' + res.error.message);
    } else {
      showToast('📧 Đã gửi link đăng nhập tới ' + email);
      Auth.closeLoginModal();
    }
  },

  loginWithEmailInput: function() {
    var val = (document.getElementById('authEmailInput') || {}).value || '';
    Auth.loginWithEmail(val.trim());
  },

  logout: async function() {
    if (!SB) return;
    await SB.auth.signOut();
  },

  // ── Internal ───────────────────────────────────────
  _onSignIn: async function(user, isNew) {
    Auth.user = user;
    AppState.user = user;
    Auth.renderUI();
    Auth.closeLoginModal();
    if (isNew) {
      showToast('👋 Xin chào ' + (user.user_metadata && user.user_metadata.name ? user.user_metadata.name : user.email) + '!');
      await Auth._handleMigration(user.id);
    }
    if (typeof Sync !== 'undefined') Sync.autoSync();
  },

  _onSignOut: function() {
    Auth.user = null;
    AppState.user = null;
    Auth.renderUI();
    showToast('👋 Đã đăng xuất');
  },

  _handleMigration: async function(userId) {
    var local = Auth._localSummary();
    if (!local.hasData) return;

    // Check if cloud already has data
    var res = await SB.from('user_xp').select('total_xp').eq('user_id', userId).maybeSingle();
    var cloudEmpty = !res.data || (res.data.total_xp || 0) === 0;

    if (cloudEmpty) {
      // Auto upload — no conflict
      await Sync.pushAll();
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
    } else {
      loginBtn.style.display  = 'flex';
      userBlock.style.display = 'none';
    }
    if (syncBtn) syncBtn.style.display = user ? '' : 'none';
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

  // ── Setup modal event listeners ────────────────────
  setup: function() {
    document.getElementById('authLoginBtn')?.addEventListener('click', Auth.openLoginModal);
    document.getElementById('authLoginBtnMobile')?.addEventListener('click', Auth.openLoginModal);
    document.getElementById('authLogoutBtn')?.addEventListener('click', Auth.logout);
    document.getElementById('authMagicLinkBtn')?.addEventListener('click', Auth.loginWithEmailInput);
    document.getElementById('authGoogleBtn')?.addEventListener('click', Auth.loginWithGoogle);
    document.getElementById('authEmailInput')?.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') Auth.loginWithEmailInput();
    });
    // Migration buttons
    document.getElementById('migBtnUpload')?.addEventListener('click', async function() {
      showToast('📤 Đang upload...');
      await Sync.pushAll();
      showToast('✅ Đã upload local lên cloud!');
      Auth.closeMigrationModal();
    });
    document.getElementById('migBtnDownload')?.addEventListener('click', async function() {
      showToast('📥 Đang tải cloud...');
      await Sync.pullAll();
      showToast('✅ Đã lấy dữ liệu từ cloud!');
      Auth.closeMigrationModal();
    });
    document.getElementById('migBtnMerge')?.addEventListener('click', async function() {
      showToast('🔀 Đang gộp...');
      await Sync.mergeAll();
      showToast('✅ Đã gộp dữ liệu!');
      Auth.closeMigrationModal();
    });
    // Sync button
    document.getElementById('syncStatusBtn')?.addEventListener('click', function() {
      if (typeof Sync !== 'undefined') Sync.manualSync();
    });
  },
};
