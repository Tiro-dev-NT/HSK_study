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
      var res2 = await SB.auth.signInWithPassword({ email: email, password: pass });
      if (res2.error) {
        showToast('❌ ' + (res2.error.message === 'Invalid login credentials' ? 'Email hoặc mật khẩu không đúng' : res2.error.message));
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
    var syncRecovery = document.getElementById('smSyncRecovery');
    if (syncRecovery) syncRecovery.style.display = user ? '' : 'none';
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
