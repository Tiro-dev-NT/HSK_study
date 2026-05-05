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
      const list = JSON.parse(localStorage.getItem(Feedback.STORAGE_KEY) || '[]');
      list.unshift({
        id:       Date.now(),
        rating:   Feedback._rating,
        category: Feedback._category,
        message:  msg,
        date: new Date().toLocaleDateString('vi-VN'),
        time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      });
      localStorage.setItem(Feedback.STORAGE_KEY, JSON.stringify(list));
      document.getElementById('fbMessage').value = '';
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
            '<span class="fb-hist-cat">' + (catIcon[fb.category] || '📦') + ' ' + fb.category + '</span>' +
            '<span class="fb-hist-date">' + fb.date + ' ' + fb.time + '</span>' +
          '</div>' +
          '<div class="fb-hist-msg">' + fb.message + '</div>' +
        '</div>';
      }).join('');
  },
};

// ── Backward-compat global functions ──────────────────
function setupFeedback()        { Feedback.setup(); }
function renderFeedbackHistory(){ Feedback.renderHistory(); }
