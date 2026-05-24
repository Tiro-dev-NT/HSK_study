// ═══════════════════════════════════════════════════════
// PROFILE.JS — "Tôi" tab (Wave 2)
// Reads from AppState, Gamification, getLevelStats()
// No external deps beyond existing globals
// ═══════════════════════════════════════════════════════

var Profile = (function() {

  // ── Badge definitions ─────────────────────────────────
  var BADGES = [
    { id:'streak7',  emoji:'🔥', name:'7 ngày liên tiếp',   cond:'streak >= 7',  check: function(s) { return s.streak >= 7;  } },
    { id:'streak30', emoji:'💪', name:'30 ngày bất bại',    cond:'streak >= 30', check: function(s) { return s.streak >= 30; } },
    { id:'words100', emoji:'📚', name:'100 từ đầu tiên',    cond:'learned >= 100',  check: function(s) { return s.learned >= 100;  } },
    { id:'words500', emoji:'🎓', name:'500 từ thành thạo',  cond:'learned >= 500',  check: function(s) { return s.learned >= 500;  } },
    { id:'words1k',  emoji:'🏆', name:'1.000 từ vựng!',     cond:'learned >= 1000', check: function(s) { return s.learned >= 1000; } },
    { id:'xp500',    emoji:'⭐', name:'500 XP tuần đầu',    cond:'weeklyXP >= 500',  check: function(s) { return s.weeklyXP >= 500;  } },
    { id:'hsk1done', emoji:'📕', name:'Hoàn thành HSK 1',   cond:'HSK 1 >= 80%',  check: function(s) { return (s.levelPct[1] || 0) >= 80; } },
    { id:'hsk3done', emoji:'📒', name:'Hoàn thành HSK 3',   cond:'HSK 3 >= 80%',  check: function(s) { return (s.levelPct[3] || 0) >= 80; } },
    { id:'pro',      emoji:'💎', name:'Thành viên Pro',      cond:'isPro',         check: function(s) { return s.isPro; } },
  ];

  // ── Outfit data ───────────────────────────────────────
  var WAVE_A_OUTFITS = [
    { id:'hoc-si',               name:'Học Sĩ',              cost:50,  file:'01-hoc-si.png' },
    { id:'cu-nhan-ao-dai',       name:'Cử Nhân Áo Dài',      cost:100, file:'02-cu-nhan-ao-dai.png' },
    { id:'vo-su',                name:'Võ Sư',                cost:150, file:'03-vo-su.png' },
    { id:'dau-bep',              name:'Đầu Bếp',              cost:150, file:'04-dau-bep.png' },
    { id:'du-khach',             name:'Du Khách',             cost:200, file:'05-du-khach.png' },
    { id:'nghe-si-thu-phap',     name:'Nghệ Sĩ Thư Pháp',    cost:200, file:'06-nghe-si-thu-phap.png' },
    { id:'tien-si-trang-nguyen', name:'Tiến Sĩ Trạng Nguyên',cost:250, file:'07-tien-si-trang-nguyen.png' },
    { id:'tham-hiem-gia',        name:'Thám Hiểm Gia',        cost:300, file:'08-tham-hiem-gia.png' },
  ];
  var HONOR_OUTFITS = [
    { id:'honor-01', month:1,  name:'Tháng 01 — Hồng Bao Đỏ', file:'01-thang-01-hong-bao-do.png' },
    { id:'honor-02', month:2,  name:'Tháng 02 — Mùa Xuân',    file:'02-thang-02-mua-xuan.png' },
    { id:'honor-03', month:3,  name:'Tháng 03 — Hiền Triết',  file:'03-thang-03-hien-triet.png' },
    { id:'honor-04', month:4,  name:'Tháng 04 — Tạo Mộ',      file:'04-thang-04-tao-mo.png' },
    { id:'honor-05', month:5,  name:'Tháng 05 — Cử Nhân',     file:'05-thang-05-cu-nhan.png' },
    { id:'honor-06', month:6,  name:'Tháng 06 — Hè Tây Hồ',  file:'06-thang-06-he-tay-ho.png' },
    { id:'honor-07', month:7,  name:'Tháng 07 — Du Khách',    file:'07-thang-07-du-khach.png' },
    { id:'honor-08', month:8,  name:'Tháng 08 — Ao Hiệu',     file:'08-thang-08-ao-hieu.png' },
    { id:'honor-09', month:9,  name:'Tháng 09 — Tể Tướng',    file:'09-thang-09-te-tuong.png' },
    { id:'honor-10', month:10, name:'Tháng 10 — Trung Cửu',   file:'10-thang-10-trung-cuu.png' },
    { id:'honor-11', month:11, name:'Tháng 11 — Tuyết Nhân',  file:'11-thang-11-tuyet-nhan.png' },
    { id:'honor-12', month:12, name:'Tháng 12 — Đại Lễ',      file:'12-thang-12-dai-le.png' },
  ];

  // ── Band config (v2.0 vs v3.0) ───────────────────────
  var BANDS_V2 = [
    { name:'Sơ cấp',   range:'1 – 2', levels:[1,2], tint:'rgba(16,185,129,.05)',  edge:'rgba(16,185,129,.18)',  dotColor:'#10B981' },
    { name:'Trung cấp',range:'3 – 4', levels:[3,4], tint:'rgba(99,102,241,.05)',  edge:'rgba(99,102,241,.18)',  dotColor:'#6366F1' },
    { name:'Cao cấp',  range:'5 – 6', levels:[5,6], tint:'rgba(220,38,38,.04)',   edge:'rgba(220,38,38,.18)',   dotColor:'#DC2626' },
  ];
  var BANDS_V3 = [
    { name:'Sơ cấp',   range:'1 – 3', levels:[1,2,3], tint:'rgba(16,185,129,.05)',  edge:'rgba(16,185,129,.18)',  dotColor:'#10B981' },
    { name:'Trung cấp',range:'4 – 6', levels:[4,5,6], tint:'rgba(99,102,241,.05)',  edge:'rgba(99,102,241,.18)',  dotColor:'#6366F1' },
    { name:'Cao cấp',  range:'7 – 9', levels:[7,8,9], tint:'rgba(220,38,38,.04)',   edge:'rgba(220,38,38,.18)',   dotColor:'#DC2626' },
  ];

  // ── Collect snapshot of user stats ───────────────────
  function _snapshot() {
    var streak  = (typeof Gamification !== 'undefined') ? Gamification.getStreak() : 0;
    var learned = (typeof AppState !== 'undefined')     ? AppState.totalLearned() : 0;
    var weeklyXP = (typeof xpData !== 'undefined' && xpData.weeklyXP) ? xpData.weeklyXP
                 : (typeof AppState !== 'undefined' ? (AppState.xpData.weeklyXP || 0) : 0);
    var totalXP  = (typeof AppState !== 'undefined') ? (AppState.xpData.total || AppState.xpData.weeklyXP || 0) : 0;
    var version  = (typeof AppState !== 'undefined') ? AppState.version : 2;
    var isPro    = (typeof Monetization !== 'undefined') ? Monetization.isProSync() : false;

    var levelInfo = (typeof activeLevelInfo === 'function') ? activeLevelInfo() : {};
    var levelPct = {};
    var bands = (version === 3) ? BANDS_V3 : BANDS_V2;
    bands.forEach(function(b) {
      b.levels.forEach(function(lv) {
        var info = levelInfo[lv] || {};
        var total = info.count || 0;
        if (!total) { levelPct[lv] = 0; return; }
        var stats = (typeof getLevelStats === 'function') ? getLevelStats(lv) : { mastered:0, total:total };
        levelPct[lv] = Math.round((stats.mastered / total) * 100);
      });
    });

    return { streak:streak, learned:learned, weeklyXP:weeklyXP, totalXP:totalXP,
             version:version, isPro:isPro, levelPct:levelPct };
  }

  // ── Render profile header ─────────────────────────────
  function _renderHeader(snap) {
    var user = (typeof AppState !== 'undefined') ? AppState.user : null;
    var name = (user && user.user_metadata && user.user_metadata.name)
               ? user.user_metadata.name
               : (user && user.email ? user.email.split('@')[0] : 'Bạn');
    var initial = (name || 'B').charAt(0).toUpperCase();

    var avatar = document.getElementById('profAvatar');
    var nameEl = document.getElementById('profName');
    var badge  = document.getElementById('profLevelBadge');
    var pro    = document.getElementById('profProBadge');
    var meta   = document.getElementById('profMeta');
    var upBtn  = document.getElementById('profUpgradeBtn');

    if (avatar) avatar.textContent = initial;
    if (nameEl) nameEl.textContent = name;

    // Find current HSK level (first level < 80% mastered)
    var levelInfo = (typeof activeLevelInfo === 'function') ? activeLevelInfo() : {};
    var maxLevel  = (snap.version === 3) ? 9 : 6;
    var currentLevel = maxLevel;
    for (var lv = 1; lv <= maxLevel; lv++) {
      if ((snap.levelPct[lv] || 0) < 80) { currentLevel = lv; break; }
    }
    var lvLabel = (snap.version === 3) ? 'HSK 3.0 L' + currentLevel : 'HSK ' + currentLevel;

    if (badge) badge.textContent = '● ' + lvLabel;
    if (pro)   { pro.style.display = snap.isPro ? 'inline-flex' : 'none'; }
    if (upBtn) { upBtn.classList.toggle('hidden', snap.isPro); }

    var email = (user && user.email) ? user.email : '';
    var joinInfo = email ? '· ' + email : '';
    if (meta) meta.textContent = 'Streak ' + snap.streak + ' ngày · ' + snap.learned + ' từ đã học ' + joinInfo;
  }

  // ── Render quick stats row ────────────────────────────
  function _renderStats(snap) {
    var s = document.getElementById('profStatStreak');
    var w = document.getElementById('profStatWords');
    var x = document.getElementById('profStatXP');
    var t = document.getElementById('profStatXPTotal');
    if (s) s.textContent = snap.streak;
    if (w) w.textContent = snap.learned;
    if (x) x.textContent = snap.weeklyXP;
    if (t) t.textContent = snap.totalXP;
  }

  // ── Render HSK bands ──────────────────────────────────
  function _renderBands(snap) {
    var bands     = (snap.version === 3) ? BANDS_V3 : BANDS_V2;
    var levelInfo = (typeof activeLevelInfo === 'function') ? activeLevelInfo() : {};
    var version   = snap.version;

    // Title + subtitle
    var titleEl = document.getElementById('profHskTitle');
    var subEl   = document.getElementById('profHskSub');
    if (titleEl) titleEl.textContent = 'Tiến độ HSK ' + (version === 3 ? '3.0 — 9 cấp' : '2.0 — 6 cấp');

    // Total learned / total possible
    var totalWords = 0, learnedWords = 0;
    bands.forEach(function(b) {
      b.levels.forEach(function(lv) {
        var info = levelInfo[lv] || {};
        totalWords += info.count || 0;
        var stats = (typeof getLevelStats === 'function') ? getLevelStats(lv) : { mastered:0 };
        learnedWords += stats.mastered || 0;
      });
    });
    if (subEl) subEl.textContent = learnedWords.toLocaleString() + ' / ' + totalWords.toLocaleString() + ' từ đã thành thạo';

    // Band legend
    var legendEl = document.getElementById('profBandLegend');
    if (legendEl) {
      legendEl.innerHTML = bands.map(function(b) {
        return '<div class="prof-band-legend-item">' +
               '<span class="prof-band-dot" style="background:' + b.dotColor + '"></span>' +
               b.name + ' (' + b.range + ')' +
               '</div>';
      }).join('');
    }

    // Bands grid
    var grid = document.getElementById('profBandsGrid');
    if (!grid) return;
    grid.innerHTML = bands.map(function(b) {
      var levelsHtml = b.levels.map(function(lv) {
        var info  = levelInfo[lv] || {};
        var pct   = snap.levelPct[lv] || 0;
        var label = (version === 3) ? 'L' + lv : 'HSK ' + lv;
        var isDone   = pct >= 100;
        var isActive = !isDone && pct > 0;
        var chipBg, chipColor, chipBorder;
        if (isDone) {
          chipBg = b.dotColor; chipColor = '#fff'; chipBorder = 'none';
        } else if (isActive) {
          chipBg = b.dotColor + '1A'; chipColor = b.dotColor; chipBorder = '1.5px solid ' + b.dotColor;
        } else {
          chipBg = 'var(--surface2)'; chipColor = 'var(--text2)'; chipBorder = 'none';
        }
        return '<div class="prof-level-row">' +
               '<div class="prof-level-chip" style="background:' + chipBg + ';color:' + chipColor + ';border:' + chipBorder + '">' +
               (isDone ? '✓' : lv) +
               '</div>' +
               '<div class="prof-level-detail">' +
               '<div class="prof-level-meta">' +
               '<span class="prof-level-name">' + label + '</span>' +
               '<span class="prof-level-pct" style="color:' + (pct === 0 ? 'var(--text2)' : b.dotColor) + '">' + pct + '%</span>' +
               '</div>' +
               '<div class="prof-level-bar"><div class="prof-level-fill" style="width:' + pct + '%;background:' + b.dotColor + '"></div></div>' +
               '</div>' +
               '</div>';
      }).join('');
      return '<div class="prof-band-group" style="background:' + b.tint + ';border:1px solid ' + b.edge + '">' +
             '<div class="prof-band-label"><span class="prof-band-name">' + b.name + '</span><span class="prof-band-range">HSK ' + b.range + '</span></div>' +
             levelsHtml +
             '</div>';
    }).join('');
  }

  // ── Render XP bar chart (7 days, today = rightmost) ──
  function _renderXpChart(snap) {
    var xpEl  = document.getElementById('profXpWeek');
    var bars  = document.getElementById('profXpBars');
    if (xpEl) xpEl.textContent = snap.weeklyXP + ' XP';
    if (!bars) return;

    // We only have weeklyXP total — distribute across 7 bars for visual, highlighting today
    // If no XP, show empty bars
    var totalXP = snap.weeklyXP;
    // Approximate distribution: ramping up, today gets ~30%
    var weights = [0.05, 0.08, 0.1, 0.12, 0.15, 0.2, 0.3];
    var values  = weights.map(function(w) { return Math.round(totalXP * w); });
    var maxVal  = Math.max.apply(null, values) || 1;

    bars.innerHTML = values.map(function(v, i) {
      var heightPct = Math.max(3, Math.round((v / maxVal) * 100));
      var cls = i === 6 ? 'today' : (v > 0 ? 'has-data' : '');
      return '<div class="prof-xp-bar-wrap">' +
             '<div class="prof-xp-bar ' + cls + '" style="height:' + heightPct + '%"></div>' +
             '</div>';
    }).join('');
  }

  // ── Render recent achievements (preview, 3 items) ─────
  function _renderAchvPreview(snap) {
    var list = document.getElementById('profAchvPreview');
    if (!list) return;
    var items = [];
    if (snap.streak >= 7)   items.push({ emoji:'🔥', name:'Chuỗi ' + snap.streak + ' ngày', date:'Đang duy trì', color:'#DC2626' });
    if (snap.learned >= 100) items.push({ emoji:'📚', name:'Đạt ' + snap.learned + ' từ', date:'Tổng cộng', color:'#F59E0B' });
    if ((snap.levelPct[1] || 0) >= 80) items.push({ emoji:'📕', name:'Hoàn thành HSK 1', date:'100%+', color:'#10B981' });
    if ((snap.levelPct[3] || 0) >= 80) items.push({ emoji:'📒', name:'Hoàn thành HSK 3', date:'100%+', color:'#10B981' });
    if (snap.isPro)          items.push({ emoji:'💎', name:'Thành viên Pro', date:'Đang hoạt động', color:'#F59E0B' });
    // Fallback items if nothing earned yet
    if (items.length === 0) {
      items.push({ emoji:'🌱', name:'Mới bắt đầu hành trình', date:'Học thêm để mở khóa!', color:'#6B7280' });
    }
    items = items.slice(0, 3);
    list.innerHTML = items.map(function(a) {
      return '<div class="prof-achv-row">' +
             '<div class="prof-achv-icon" style="background:' + a.color + '18">' + a.emoji + '</div>' +
             '<div class="prof-achv-text">' +
             '<div class="prof-achv-name">' + a.name + '</div>' +
             '<div class="prof-achv-date">' + a.date + '</div>' +
             '</div></div>';
    }).join('');
  }

  // ── Render full badge grid (Thành tích tab) ───────────
  function _renderBadgeGrid(snap) {
    var grid = document.getElementById('profBadgeGrid');
    if (!grid) return;
    grid.innerHTML = BADGES.map(function(b) {
      var earned = b.check(snap);
      return '<div class="prof-badge-item ' + (earned ? '' : 'locked') + '">' +
             '<div class="prof-badge-emoji">' + b.emoji + '</div>' +
             '<div class="prof-badge-name">' + b.name + '</div>' +
             '<div class="prof-badge-cond">' + b.cond + '</div>' +
             '</div>';
    }).join('');
  }

  // ── Settings tab extras ───────────────────────────────
  function _renderSettings(snap) {
    var emailEl   = document.getElementById('profSettingEmail');
    var versionEl = document.getElementById('profHskVersionDesc');
    var user = (typeof AppState !== 'undefined') ? AppState.user : null;
    if (emailEl) emailEl.textContent = (user && user.email) ? user.email : 'Chưa đăng nhập';
    if (versionEl) versionEl.textContent = snap.version === 3 ? 'HSK 3.0 (9 cấp)' : 'HSK 2.0 (6 cấp)';
  }

  // ── Outfit helpers ────────────────────────────────────
  function _profileToast(msg, type) {
    var old = document.getElementById('profToastMsg');
    if (old) old.remove();
    var el = document.createElement('div');
    el.id = 'profToastMsg';
    el.className = 'prof-toast prof-toast--' + (type || 'info');
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(function() { el.classList.add('visible'); }, 10);
    setTimeout(function() {
      el.classList.remove('visible');
      setTimeout(function() { if (el.parentNode) el.remove(); }, 320);
    }, 3000);
  }

  function _wearOutfit(id) {
    if (!id || id === 'null') {
      localStorage.removeItem('hsk_active_outfit');
    } else {
      localStorage.setItem('hsk_active_outfit', id);
    }
    _renderOutfitSection();
  }

  function _buyWaveAOutfit(id, cost) {
    if (typeof Quests === 'undefined') { _profileToast('Chưa sẵn sàng, thử lại sau', 'error'); return; }
    if (!Quests.spendToken(cost, 'outfit_' + id)) {
      _profileToast('Không đủ token! Cần ' + cost + ' 🪙', 'error');
      return;
    }
    var owned = JSON.parse(localStorage.getItem('hsk_user_outfits') || '[]');
    if (!owned.includes(id)) { owned.push(id); }
    localStorage.setItem('hsk_user_outfits', JSON.stringify(owned));
    _profileToast('Đã mở khóa trang phục! Nhấn "Mặc" để đeo ngay.', 'success');
    _renderOutfitSection();
  }

  function _syncHonorOutfits() {
    if (!window.SB || !window.Auth || !Auth.user) return;
    SB.from('user_honor_purchases')
      .select('month_year')
      .eq('user_id', Auth.user.id)
      .then(function(res) {
        if (res.error || !res.data || !res.data.length) return;
        var months = res.data.map(function(r) { return r.month_year; });
        localStorage.setItem('hsk_honor_months', JSON.stringify(months));
        _renderOutfitSection();
      });
  }

  function _renderOutfitSection() {
    var wrap = document.getElementById('profOutfitWrap');
    if (!wrap) return;

    var activeId     = localStorage.getItem('hsk_active_outfit') || null;
    var ownedWaveA   = JSON.parse(localStorage.getItem('hsk_user_outfits') || '[]');
    var honorMonths  = JSON.parse(localStorage.getItem('hsk_honor_months') || '[]');

    var previewSrc  = 'assets/icon-soft.webp';
    var previewName = 'Mặc định';
    if (activeId) {
      var fa = WAVE_A_OUTFITS.find(function(o) { return o.id === activeId; });
      var fh = HONOR_OUTFITS.find(function(o) { return o.id === activeId; });
      if (fa) { previewSrc = 'content/assets/output/outfits-basic/' + fa.file; previewName = fa.name; }
      if (fh) { previewSrc = 'content/assets/output/outfits-honor/' + fh.file; previewName = fh.name; }
    }

    function _outfitCard(o, srcBase, isHonor) {
      var isWearing = activeId === o.id;
      var isOwned;
      if (isHonor) {
        var key = new Date().getFullYear() + '-' + String(o.month).padStart(2, '0');
        isOwned = honorMonths.includes(key);
      } else {
        isOwned = ownedWaveA.includes(o.id);
      }
      var chip;
      if (isWearing) {
        chip = '<span class="prof-outfit-chip wearing">✅ Đang mặc</span>';
      } else if (isOwned) {
        chip = '<button class="prof-outfit-wear-btn" onclick="Profile.wearOutfit(\'' + o.id + '\')">Mặc</button>';
      } else if (isHonor) {
        chip = '<span class="prof-outfit-chip honor-lock">🔒 T' + o.month + '</span>';
      } else {
        chip = '<button class="prof-outfit-buy-btn" onclick="Profile.buyOutfit(\'' + o.id + '\',' + o.cost + ')">🔒 ' + o.cost + '🪙</button>';
      }
      return '<div class="prof-outfit-card' + (isWearing ? ' wearing' : '') + '">' +
             '<img class="prof-outfit-img" src="' + srcBase + o.file + '" alt="' + o.name + '" loading="lazy">' +
             '<div class="prof-outfit-name">' + o.name + '</div>' +
             chip + '</div>';
    }

    var waveAHtml = WAVE_A_OUTFITS.map(function(o) {
      return _outfitCard(o, 'content/assets/output/outfits-basic/', false);
    }).join('');
    var honorHtml = HONOR_OUTFITS.map(function(o) {
      return _outfitCard(o, 'content/assets/output/outfits-honor/', true);
    }).join('');

    wrap.innerHTML =
      '<div class="prof-outfit-header">' +
        '<h3 class="prof-card-title" style="margin:0">🐲 Trang phục Bé Rồng</h3>' +
      '</div>' +
      '<div class="prof-outfit-layout">' +
        '<div class="prof-outfit-preview-wrap">' +
          '<img class="prof-outfit-preview-img" src="' + previewSrc + '" alt="Bé Rồng">' +
          '<div class="prof-outfit-preview-label">Đang mặc: <strong>' + previewName + '</strong></div>' +
          '<button class="prof-outfit-reset-btn" onclick="Profile.wearOutfit(null)">Mặc định</button>' +
        '</div>' +
        '<div class="prof-outfit-grid-wrap">' +
          '<div class="prof-outfit-sublabel">Wave A — Mua bằng token</div>' +
          '<div class="prof-outfit-grid">' + waveAHtml + '</div>' +
          '<div class="prof-outfit-sublabel" style="margin-top:var(--s-4)">Hộp Ân Cần — Theo tháng</div>' +
          '<div class="prof-outfit-grid">' + honorHtml + '</div>' +
        '</div>' +
      '</div>';
  }

  // ── Account settings helpers ──────────────────────────
  function _renderAccountSettings() {
    var ageWrap = document.getElementById('profAgeGateWrap');
    if (ageWrap) {
      var confirmed = localStorage.getItem('hsk_age_confirmed');
      if (confirmed) {
        ageWrap.style.display = 'none';
      } else {
        ageWrap.style.display = '';
      }
    }
    var subBtn = document.getElementById('profCancelSubBtn');
    if (subBtn) {
      var isPro = (typeof Monetization !== 'undefined') ? Monetization.isProSync() : false;
      subBtn.disabled = !isPro;
      subBtn.title = isPro ? '' : 'Bạn chưa có gói Pro đang hoạt động';
    }
  }

  function _cancelSubscription() {
    var user = (typeof AppState !== 'undefined') ? AppState.user : null;
    if (!user) { _profileToast('Chưa đăng nhập', 'error'); return; }
    if (!confirm('Huỷ gia hạn tự động? Bạn vẫn dùng Pro đến hết kỳ đã thanh toán.')) return;
    if (!window.SB) { _profileToast('Không thể kết nối server', 'error'); return; }
    SB.rpc('cancel_subscription', { p_user_id: user.id })
      .then(function(res) {
        if (res.error) { _profileToast('Lỗi: ' + res.error.message, 'error'); return; }
        _profileToast('Đã huỷ gia hạn tự động. Pro còn hiệu lực đến hết kỳ.', 'success');
      });
  }

  function _deleteAccount() {
    var typed = prompt('Nhập "XOA" để xác nhận xoá tài khoản vĩnh viễn (không thể hoàn tác):');
    if (typed !== 'XOA') { if (typed !== null) _profileToast('Xác nhận không đúng, đã huỷ.', 'error'); return; }
    if (!window.SB) { _profileToast('Không thể kết nối server', 'error'); return; }
    _profileToast('Đang xoá tài khoản...', 'info');
    SB.rpc('delete_account_cascade').then(function(res) {
      if (res.error) { _profileToast('Lỗi: ' + res.error.message, 'error'); return; }
      // Clear all local data
      localStorage.clear();
      if (typeof Auth !== 'undefined') Auth._clearUserCache();
      if (window.SB) SB.auth.signOut().catch(function() {});
      _profileToast('Tài khoản đã bị xoá. Chuyển hướng...', 'success');
      setTimeout(function() { window.location.reload(); }, 1800);
    });
  }

  function _confirmAgeGate() {
    localStorage.setItem('hsk_age_confirmed', new Date().toISOString());
    var wrap = document.getElementById('profAgeGateWrap');
    if (wrap) wrap.style.display = 'none';
    _profileToast('Đã xác nhận độ tuổi.', 'success');
  }

  // ── Tab switching ─────────────────────────────────────
  function switchTab(tabId) {
    document.querySelectorAll('.prof-tab').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    document.querySelectorAll('.prof-panel').forEach(function(panel) {
      panel.classList.toggle('active', panel.id === 'profPanel-' + tabId);
    });
    if (tabId === 'upgrade') { Router.navigateTo('pricing'); }
  }

  // ── Public API ────────────────────────────────────────
  return {

    setup: function() {
      var snap = _snapshot();
      _renderHeader(snap);
      _renderStats(snap);
      _renderBands(snap);
      _renderXpChart(snap);
      _renderAchvPreview(snap);
      _renderBadgeGrid(snap);
      _renderSettings(snap);
      _renderOutfitSection();
      _renderAccountSettings();
      _syncHonorOutfits();

      // Wire tab clicks
      document.querySelectorAll('.prof-tab').forEach(function(btn) {
        btn.addEventListener('click', function() { Profile.switchTab(btn.dataset.tab); });
      });
    },

    switchTab: switchTab,

    goSettings: function() { Profile.switchTab('settings'); },

    wearOutfit:  function(id)        { _wearOutfit(id); },
    buyOutfit:   function(id, cost)  { _buyWaveAOutfit(id, cost); },
    cancelSub:   function()          { _cancelSubscription(); },
    deleteAcct:  function()          { _deleteAccount(); },
    confirmAge:  function()          { _confirmAgeGate(); },

    handleLogout: function() {
      if (!confirm('Đăng xuất?')) return;
      if (window.Auth && typeof Auth.signOut === 'function') {
        Auth.signOut();
      } else if (window.SB) {
        SB.auth.signOut().then(function() { location.reload(); });
      }
    }
  };

}());
