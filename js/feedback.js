// ═══════════════════════════════════════════════════════
// FEEDBACK.JS — User feedback form & history
// • Owns: setupFeedback(), renderFeedbackHistory()
// • Reads: AppState.lang, localStorage (hsk_feedback)
// • Side effect: calls Gamification.addXP(20) on submit
//   (via addXP() global — no direct import needed)
// ═══════════════════════════════════════════════════════

var Feedback = {
  STORAGE_KEY: 'hsk_feedback',
  _rating:   5,
  _category: 'feature',

  setup: function() {
    const stars = document.querySelectorAll('.fb-star');
    // Default all stars active
    stars.forEach(function(s) { s.classList.add('active'); });

    stars.forEach(function(star) {
      star.addEventListener('click', function() {
        Feedback._rating = parseInt(star.dataset.v);
        stars.forEach(function(s) {
          s.classList.toggle('active', parseInt(s.dataset.v) <= Feedback._rating);
        });
      });
      star.addEventListener('mouseenter', function() {
        stars.forEach(function(s) {
          s.classList.toggle('hover', parseInt(s.dataset.v) <= parseInt(star.dataset.v));
        });
      });
      star.addEventListener('mouseleave', function() {
        stars.forEach(function(s) { s.classList.remove('hover'); });
      });
    });

    document.querySelectorAll('.fb-cat').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.fb-cat').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        Feedback._category = btn.dataset.cat;
      });
    });

    document.getElementById('fbSubmit')?.addEventListener('click', function() {
      const msg = document.getElementById('fbMessage')?.value.trim();
      if (!msg) { alert('Vui lòng nhập nội dung góp ý!'); return; }
      const consentEl = document.getElementById('fbPublicConsent');
      const list = JSON.parse(localStorage.getItem(Feedback.STORAGE_KEY) || '[]');
      list.unshift({
        id:       Date.now(),
        rating:   Feedback._rating,
        category: Feedback._category,
        message:  msg,
        public_consent: !!(consentEl && consentEl.checked),
        date: new Date().toLocaleDateString('vi-VN'),
        time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      });
      localStorage.setItem(Feedback.STORAGE_KEY, JSON.stringify(list));

      // Đồng bộ mọi góp ý chưa sync lên Supabase để admin đọc (best-effort).
      Feedback.syncPending();

      document.getElementById('fbMessage').value = '';
      if (consentEl) consentEl.checked = false;
      const ok = document.getElementById('fbSuccess');
      if (ok) {
        ok.style.display = 'block';
        setTimeout(function() { ok.style.display = 'none'; }, 3000);
      }
      Feedback.renderHistory();
      // Reward XP via global function (decoupled — no direct Gamification import)
      if (typeof addXP === 'function') addXP(20);
    });

    Feedback.renderHistory();
    // Mở trang góp ý → cố đồng bộ các góp ý local chưa đẩy lên (nếu đã đăng nhập).
    Feedback.syncPending();
  },

  // Đẩy MỌI góp ý local chưa sync lên bảng `feedback` Supabase (cho admin đọc).
  // Đánh dấu `synced=true` trên từng item để không gửi trùng. Best-effort, im lặng.
  // Gọi khi: submit mới · mở trang góp ý · sau khi đăng nhập (auth._onSignIn).
  _syncing: false,
  syncPending: function() {
    try {
      if (Feedback._syncing) return;
      if (!window.SB) return;
      var user = (window.Auth && Auth.user) || (window.AppState && AppState.user);
      if (!user || !user.id) return; // chưa đăng nhập → RLS chặn, để dành sync sau khi login

      var list = JSON.parse(localStorage.getItem(Feedback.STORAGE_KEY) || '[]');
      var pending = list.filter(function(fb) { return fb && !fb.synced; });
      if (!pending.length) return;

      var meta = user.user_metadata || {};
      var isPro = (window.Monetization && typeof Monetization.isProSync === 'function')
        ? Monetization.isProSync() : false;
      var catSubject = {
        feature: 'Đề xuất tính năng', bug: 'Báo lỗi', content: 'Góp ý nội dung',
        ui: 'Góp ý giao diện', other: 'Góp ý khác'
      };
      var rows = pending.map(function(fb) {
        return {
          user_id:      user.id,
          user_email:   user.email || null,
          display_name: meta.name || meta.full_name || null,
          subject:      catSubject[fb.category] || 'Góp ý',
          message:      fb.message || '',
          category:     fb.category || 'feature',
          priority:     fb.category === 'bug' ? 'high' : 'normal',
          rating:       fb.rating,
          is_pro:       !!isPro,
          public_consent: !!fb.public_consent,
          created_at:   fb.id ? new Date(fb.id).toISOString() : undefined
        };
      });

      Feedback._syncing = true;
      SB.from('feedback').insert(rows).then(function(res) {
        Feedback._syncing = false;
        if (res && res.error) { console.warn('[Feedback] sync failed:', res.error.message); return; }
        // Thành công → đánh dấu các item vừa gửi là synced rồi lưu lại.
        var cur = JSON.parse(localStorage.getItem(Feedback.STORAGE_KEY) || '[]');
        cur.forEach(function(fb) { if (fb && !fb.synced) fb.synced = true; });
        localStorage.setItem(Feedback.STORAGE_KEY, JSON.stringify(cur));
      }, function(err) {
        Feedback._syncing = false;
        console.warn('[Feedback] sync exception:', err);
      });
    } catch (e) {
      Feedback._syncing = false;
      console.warn('[Feedback] sync exception:', e);
    }
  },

  renderHistory: function() {
    const hist = document.getElementById('fbHistory');
    if (!hist) return;
    const list = JSON.parse(localStorage.getItem(Feedback.STORAGE_KEY) || '[]');
    if (!list.length) {
      hist.innerHTML = '<p style="color:var(--text3);font-size:13px;margin-top:20px">Chưa có góp ý nào.</p>';
      return;
    }
    const catIcon = { feature:'💡', bug:'🐛', content:'📚', ui:'🎨', other:'📦' };
    hist.innerHTML = '<div class="fb-hist-title">📋 Góp ý của bạn (' + list.length + ')</div>' +
      list.slice(0, 10).map(function(fb) {
        return '<div class="fb-hist-item">' +
          '<div class="fb-hist-header">' +
            '<span>' + '★'.repeat(fb.rating) + '☆'.repeat(5 - fb.rating) + '</span>' +
            '<span class="fb-hist-cat">' + (catIcon[fb.category] || '📦') + ' ' + escapeHtml(fb.category) + '</span>' +
            '<span class="fb-hist-date">' + escapeHtml(fb.date) + ' ' + escapeHtml(fb.time) + '</span>' +
          '</div>' +
          '<div class="fb-hist-msg">' + escapeHtml(fb.message) + '</div>' +
        '</div>';
      }).join('');
  },
};

// ── Backward-compat global functions ──────────────────
function setupFeedback()        { Feedback.setup(); }
function renderFeedbackHistory(){ Feedback.renderHistory(); }
