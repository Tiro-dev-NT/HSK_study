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
