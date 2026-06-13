// ═══════════════════════════════════════════════════════
// COMMUNITY.JS — Cộng đồng Hub V0 (Phase V)
// • Owns: Community.init() — render hero Bảng Phong Vân preview
//   (podium top-3 + dòng rank của tôi) trên trang /community.
// • Tái dùng RPC get_leaderboard (KHÔNG cần backend mới).
// • Mọi tên hiển thị qua escapeHtml() (UGC-safe).
// ═══════════════════════════════════════════════════════

var Community = {
  init: function() {
    var hero = document.getElementById('commHero');
    if (!hero) return;

    if (typeof Quests !== 'undefined' && Quests.incrementMetric) {
      Quests.incrementMetric('community_visit');
    }

    // Chưa đăng nhập / chưa có Supabase → fallback CTA.
    if (!window.SB || typeof Auth === 'undefined' || !Auth.user) {
      Community._renderFallback(hero, 'login');
      return;
    }

    Community._renderLoading(hero);

    SB.rpc('get_leaderboard', { p_period: 'week', p_limit: 3, p_region: 'global' })
      .then(function(res) {
        if (res.error || !res.data || res.data.ok === false) {
          Community._renderFallback(hero, 'error');
          return;
        }
        Community._renderHero(hero, res.data);
      })
      .catch(function() {
        Community._renderFallback(hero, 'error');
      });
  },

  _renderLoading: function(hero) {
    hero.innerHTML = '<div class="comm-hero-loading">Đang tải Bảng Phong Vân…</div>';
  },

  // Fallback dùng lại banner tĩnh cũ làm empty-state.
  _renderFallback: function(hero, reason) {
    var msg = reason === 'login'
      ? 'Đăng nhập để xem bảng xếp hạng tuần/tháng. Mặc định không công khai — bạn tự bật opt-in khi muốn tham gia.'
      : 'Thi đua nhẹ theo ngày học tuần/tháng. Mặc định không công khai — bạn tự bật opt-in khi muốn tham gia.';
    hero.innerHTML =
      '<div class="comm-hero-banner">' +
        '<span class="comm-hero-trophy">🏆</span>' +
        '<div class="comm-hero-banner-body">' +
          '<div class="comm-hero-banner-title">Bảng Phong Vân</div>' +
          '<div class="comm-hero-banner-sub">' + msg + '</div>' +
        '</div>' +
        '<button type="button" class="comm-hero-cta" onclick="Router.navigateTo(\'leaderboard\')">' +
          'Mở Bảng Phong Vân</button>' +
      '</div>';
  },

  _renderHero: function(hero, data) {
    var top = (data.top || []).slice(0, 3);
    var me = data.me;
    var profile = data.profile || { opted_in: false };

    // Chưa có ai trên bảng → fallback.
    if (!top.length) {
      Community._renderFallback(hero, 'empty');
      return;
    }

    // Sắp podium theo thứ tự hiển thị: hạng 2 (trái) · hạng 1 (giữa) · hạng 3 (phải).
    var byRank = {};
    top.forEach(function(r) { byRank[parseInt(r.rank, 10) || 0] = r; });
    var order = [2, 1, 3];
    var podium = order.map(function(rank) {
      var row = byRank[rank];
      if (!row) return '';
      var medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : '🥉';
      return '<div class="comm-podium-step comm-podium-step--' + rank + '">' +
          '<div class="comm-podium-medal">' + medal + '</div>' +
          '<div class="comm-podium-name">' + escapeHtml(row.display_name || 'Học viên') + '</div>' +
          '<div class="comm-podium-score">' + escapeHtml(row.score_points || 0) + ' điểm</div>' +
        '</div>';
    }).join('');

    // Dòng rank của tôi.
    var meLine;
    if (!profile.opted_in) {
      meLine = '<div class="comm-hero-me comm-hero-me--cta">' +
          '<span>Bật opt-in để xuất hiện trên bảng bằng tên hiển thị.</span>' +
          '<button type="button" class="comm-hero-link" onclick="Router.navigateTo(\'leaderboard\')">Tham gia →</button>' +
        '</div>';
    } else if (me && me.rank) {
      meLine = '<div class="comm-hero-me">' +
          '<span>Hạng của bạn: <strong>#' + escapeHtml(me.rank) + '</strong></span>' +
          '<span class="comm-hero-me-meta">' + escapeHtml(me.score_points || 0) + ' điểm · ' + escapeHtml(me.active_days || 0) + ' ngày học</span>' +
        '</div>';
    } else {
      meLine = '<div class="comm-hero-me"><span>Bạn chưa có hoạt động trong kỳ này — học một chút để lên bảng nhé!</span></div>';
    }

    hero.innerHTML =
      '<div class="comm-hero-head">' +
        '<div class="comm-hero-title">🏆 Bảng Phong Vân — Tuần này</div>' +
        '<button type="button" class="comm-hero-cta" onclick="Router.navigateTo(\'leaderboard\')">Xem bảng xếp hạng</button>' +
      '</div>' +
      '<div class="comm-podium">' + podium + '</div>' +
      meLine;
  }
};

// ═══════════════════════════════════════════════════════
// TESTIMONIALS — component tái dùng (C7 A2 + B6): render 2-3 lời tri ân THẬT.
// • Đọc qua RPC sanitized community_appreciation_wall (granted anon) — KHÔNG PII.
// • Compliance: chỉ testimonial user ĐỒNG Ý công khai + admin đã duyệt (SQL v24).
//   KHÔNG bịa, KHÔNG avatar giả. Rỗng → ẩn hẳn block (không hiện placeholder giả).
// ═══════════════════════════════════════════════════════
var Testimonials = {
  // elId: id container. limit: số card (mặc định 3). headed: kèm tiêu đề nhỏ.
  render: function(elId, opts) {
    var el = document.getElementById(elId);
    if (!el) return;
    opts = opts || {};
    var limit = opts.limit || 3;
    var esc = (typeof escapeHtml === 'function') ? escapeHtml : function(s){ return String(s == null ? '' : s); };
    // Không có Supabase → ẩn hẳn (không render gì để tránh khoảng trống).
    if (!window.SB) { el.innerHTML = ''; el.style.display = 'none'; return; }
    SB.rpc('community_appreciation_wall', { p_limit: limit, p_category: null })
      .then(function(res) {
        if (res.error || !res.data || !res.data.length) { el.innerHTML = ''; el.style.display = 'none'; return; }
        var cards = res.data.slice(0, limit).map(function(f) {
          var stars = '';
          if (f.rating) {
            var n = parseInt(f.rating, 10) || 0; if (n < 0) n = 0; if (n > 5) n = 5;
            stars = '<span class="tst-stars" aria-label="' + n + '/5">' + '★'.repeat(n) + '☆'.repeat(5 - n) + '</span>';
          }
          return '<figure class="tst-card">' +
              (f.is_featured ? '<span class="tst-star" title="Nổi bật">🌟</span>' : '') +
              '<blockquote class="tst-msg">“' + esc(f.message || '') + '”</blockquote>' +
              '<figcaption class="tst-foot">' +
                '<span class="tst-name">' + esc(f.display_name || 'Học viên') + '</span>' +
                stars +
              '</figcaption>' +
            '</figure>';
        }).join('');
        el.style.display = '';
        el.innerHTML =
          (opts.heading ? '<div class="tst-heading">' + esc(opts.heading) + '</div>' : '') +
          '<div class="tst-grid">' + cards + '</div>' +
          '<a class="tst-more" href="#" onclick="Router.navigateTo(\'tri-an\');return false;">Xem tất cả lời tri ân →</a>';
      })
      .catch(function() { el.innerHTML = ''; el.style.display = 'none'; });
  }
};

// ═══════════════════════════════════════════════════════
// PUBLIC STATS — số liệu cộng đồng THẬT (C7 A2). RPC public_stats() (SQL v26).
// • Dưới ngưỡng tự tin → copy chữ, KHÔNG hiện số nhỏ (compliance: không phóng đại).
// • Chỉ aggregate, không PII.
// ═══════════════════════════════════════════════════════
var PublicStats = {
  MIN_USERS: 100,   // ngưỡng hiển thị số (dưới ngưỡng → copy chữ)

  render: function(elId) {
    var el = document.getElementById(elId);
    if (!el) return;
    // Fallback copy mặc định (dùng khi chưa có số hoặc dưới ngưỡng).
    var soft = '<span class="pst-soft">🌱 Cộng đồng đang lớn dần mỗi ngày — học cùng nhau vui hơn.</span>';
    if (!window.SB) { el.innerHTML = soft; return; }
    el.innerHTML = soft;
    SB.rpc('public_stats')
      .then(function(res) {
        if (res.error || !res.data || !res.data.length) { el.innerHTML = soft; return; }
        var s = res.data[0] || {};
        var users = parseInt(s.users_count, 10) || 0;
        var act   = parseInt(s.active_7d, 10) || 0;
        if (users < PublicStats.MIN_USERS) { el.innerHTML = soft; return; }
        var fmt = function(n) { return n.toLocaleString('vi-VN'); };
        var parts = ['<strong>' + fmt(users) + '</strong> học viên'];
        if (act > 0) parts.push('<strong>' + fmt(act) + '</strong> người học trong 7 ngày qua');
        el.innerHTML = '<span class="pst-nums">👥 ' + parts.join(' · ') + '</span>';
      })
      .catch(function() { el.innerHTML = soft; });
  }
};
