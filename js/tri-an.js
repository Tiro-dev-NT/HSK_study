// ═══════════════════════════════════════════════════════
// TRI-AN.JS — Trang Tri Ân (Community Appreciation Wall)
// • Owns: TriAn.init() — render Monthly MVP spotlight + wall grid + filter.
// • Đọc qua RPC sanitized (community_appreciation_wall / _featured) — KHÔNG
//   bao giờ nhận email/user_id. Mọi field user render qua escapeHtml().
// ═══════════════════════════════════════════════════════

var TriAn = {
  _cat: '',
  _bound: false,
  CAT_LABEL: { feature: 'Tính năng', bug: 'Báo lỗi', content: 'Nội dung', ui: 'Giao diện', other: 'Khác' },

  init: function() {
    TriAn._cat = '';
    TriAn._bindFilters();
    TriAn._loadFeatured();
    TriAn._loadWall();
  },

  _bindFilters: function() {
    if (TriAn._bound) return;
    var bar = document.getElementById('taFilters');
    if (!bar) return;
    bar.addEventListener('click', function(e) {
      var btn = e.target.closest('.ta-pill');
      if (!btn) return;
      bar.querySelectorAll('.ta-pill').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      TriAn._cat = btn.dataset.cat || '';
      TriAn._loadWall();
    });
    TriAn._bound = true;
  },

  _loadFeatured: function() {
    var el = document.getElementById('taFeatured');
    if (!el || !window.SB) return;
    SB.rpc('community_appreciation_featured').then(function(res) {
      if (res.error || !res.data || !res.data.length) { el.innerHTML = ''; return; }
      var f = res.data[0];
      el.innerHTML =
        '<div class="ta-featured">' +
          '<div class="ta-featured-badge">🌟 Lời tri ân nổi bật</div>' +
          '<blockquote class="ta-featured-quote">“' + escapeHtml(f.message || '') + '”</blockquote>' +
          '<div class="ta-featured-meta">' +
            '<span class="ta-name">' + escapeHtml(f.display_name || 'Học viên') + '</span>' +
            (f.rating ? '<span class="ta-stars">' + TriAn._stars(f.rating) + '</span>' : '') +
          '</div>' +
        '</div>';
    }).catch(function() { el.innerHTML = ''; });
  },

  _loadWall: function() {
    var el = document.getElementById('taWall');
    if (!el) return;
    if (!window.SB) { TriAn._renderEmpty(el); return; }
    el.innerHTML = '<div class="ta-loading">Đang tải lời tri ân…</div>';

    SB.rpc('community_appreciation_wall', { p_limit: 30, p_category: TriAn._cat || null })
      .then(function(res) {
        if (res.error || !res.data) { TriAn._renderEmpty(el); return; }
        if (!res.data.length) { TriAn._renderEmpty(el); return; }
        el.innerHTML = res.data.map(TriAn._card).join('');
      })
      .catch(function() { TriAn._renderEmpty(el); });
  },

  _card: function(f) {
    var cat = TriAn.CAT_LABEL[f.category] || 'Góp ý';
    return '<div class="ta-card">' +
        (f.is_featured ? '<span class="ta-card-star" title="Nổi bật">🌟</span>' : '') +
        '<div class="ta-card-msg">“' + escapeHtml(f.message || '') + '”</div>' +
        '<div class="ta-card-foot">' +
          '<span class="ta-name">' + escapeHtml(f.display_name || 'Học viên') + '</span>' +
          '<span class="ta-card-tag">' + escapeHtml(cat) + '</span>' +
          (f.rating ? '<span class="ta-stars">' + TriAn._stars(f.rating) + '</span>' : '') +
        '</div>' +
      '</div>';
  },

  _stars: function(n) {
    n = parseInt(n, 10) || 0;
    if (n < 1) n = 0; if (n > 5) n = 5;
    return '★'.repeat(n) + '☆'.repeat(5 - n);
  },

  _renderEmpty: function(el) {
    el.innerHTML =
      '<div class="ta-empty">' +
        '<img src="assets/icon-soft.webp" alt="Bé Rồng" width="64" height="64" loading="lazy"/>' +
        '<div class="ta-empty-title">Chưa có lời tri ân nào</div>' +
        '<div class="ta-empty-desc">Hãy là người đầu tiên — góp ý của bạn (khi đồng ý công khai) sẽ xuất hiện ở đây sau khi được duyệt.</div>' +
        '<button type="button" class="ta-hero-cta" onclick="Router.navigateTo(\'feedback\')">Gửi góp ý</button>' +
      '</div>';
  }
};
