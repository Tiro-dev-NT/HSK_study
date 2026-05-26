// ═══════════════════════════════════════════════════════
// HONOR.JS — Hộp Ân Cần page logic (Phase 2 Monetization v2)
// Expose window.Honor = { init, getCurrentMonthOutfit }
// ═══════════════════════════════════════════════════════

var Honor = (function() {

  // 12 outfit mapping — slug must match production outfit filenames
  var OUTFITS_BY_MONTH = {
    1:  { slug: '01-thang-01-hong-bao-do',  name: 'Hồng Bao Đỏ',  emoji: '🧧', theme: 'Tết Nguyên Đán' },
    2:  { slug: '02-thang-02-mua-xuan',     name: 'Mùa Xuân',     emoji: '🌸', theme: 'Lễ hội mùa xuân' },
    3:  { slug: '03-thang-03-hien-triet',   name: 'Hiền Triết',   emoji: '📜', theme: 'Học giả uyên bác' },
    4:  { slug: '04-thang-04-tao-mo',       name: 'Tảo Mộ',       emoji: '🌿', theme: 'Tiết Thanh Minh' },
    5:  { slug: '05-thang-05-cu-nhan',      name: 'Cử Nhân',      emoji: '🎓', theme: 'Mùa tốt nghiệp' },
    6:  { slug: '06-thang-06-he-tay-ho',    name: 'Hè Tây Hồ',    emoji: '🌊', theme: 'Hè rực rỡ' },
    7:  { slug: '07-thang-07-du-khach',     name: 'Du Khách',     emoji: '🎒', theme: 'Phong cách hiện đại' },
    8:  { slug: '08-thang-08-ao-hieu',      name: 'Áo Hiếu',      emoji: '🪷', theme: 'Lễ Vu Lan' },
    9:  { slug: '09-thang-09-te-tuong',     name: 'Tể Tướng',     emoji: '🌕', theme: 'Tết Trung Thu' },
    10: { slug: '10-thang-10-trung-cuu',    name: 'Trùng Cửu',    emoji: '🍂', theme: 'Thu vàng' },
    11: { slug: '11-thang-11-tuyet-nhan',   name: 'Tuyết Nhân',   emoji: '❄️', theme: 'Đông giá' },
    12: { slug: '12-thang-12-dai-le',       name: 'Đại Lễ',       emoji: '🐲', theme: 'Tổng kết năm' }
  };

  var IMG_BASE = 'assets/outfits/honor/';

  function _imgSrc(outfit) {
    return IMG_BASE + outfit.slug + '.webp';
  }

  function getCurrentMonthOutfit() {
    return OUTFITS_BY_MONTH[new Date().getMonth() + 1];
  }

  function _renderSpotlight(month, outfit) {
    // Image
    var imgWrap = document.querySelector('.honor-spotlight-img-wrap');
    if (imgWrap) {
      var img = document.createElement('img');
      img.src = _imgSrc(outfit);
      img.alt = outfit.name;
      img.className = 'honor-spotlight-img';
      img.onerror = function() { this.style.display = 'none'; };
      imgWrap.innerHTML = '';
      imgWrap.appendChild(img);
    }
    // Name + theme
    var nameEl = document.getElementById('honorSpotlightName');
    if (nameEl) nameEl.textContent = outfit.emoji + ' ' + outfit.name;
    var themeEl = document.getElementById('honorSpotlightTheme');
    if (themeEl) themeEl.textContent = outfit.theme + ' — Tháng ' + month;
    // Price tag (read from Plans if available)
    var priceTag = document.getElementById('honorPriceTag');
    if (priceTag) {
      var honor = (typeof Plans !== 'undefined' && Plans.getHonorPack) ? Plans.getHonorPack() : null;
      priceTag.textContent = honor ? honor.priceLabel : '49.000đ';
    }
  }

  function _renderGrid(currentMonth) {
    var grid = document.getElementById('honorGrid');
    if (!grid) return;
    var html = '';
    for (var m = 1; m <= 12; m++) {
      var o = OUTFITS_BY_MONTH[m];
      var state = m < currentMonth ? 'past' : m === currentMonth ? 'current' : 'future';
      var stateLabel = m < currentMonth ? '✓ Đã qua' : m === currentMonth ? 'Tháng này' : '🔒';
      html +=
        '<div class="honor-grid-item honor-' + state + '">' +
        '  <div class="honor-grid-img-wrap">' +
        '    <img src="' + _imgSrc(o) + '" loading="lazy" alt="' + o.name + '" onerror="this.parentElement.innerHTML=\'<span class=honor-img-fallback>' + o.emoji + '</span>\'">' +
        (state === 'future' ? '<div class="honor-lock-overlay">🔒</div>' : '') +
        '  </div>' +
        '  <div class="honor-grid-label">' +
        '    <span class="honor-grid-month">T' + m + '</span>' +
        '    <span class="honor-grid-name">' + o.emoji + ' ' + o.name + '</span>' +
        '    <span class="honor-grid-state honor-state-' + state + '">' + stateLabel + '</span>' +
        '  </div>' +
        (state === 'current' ?
          '<button class="honor-grid-cta" onclick="Pricing.openHonorPurchase()">Mở hộp</button>' : '') +
        '</div>';
    }
    grid.innerHTML = html;
  }

  function init() {
    var month = new Date().getMonth() + 1;
    var outfit = OUTFITS_BY_MONTH[month];
    if (outfit) _renderSpotlight(month, outfit);
    _renderGrid(month);
  }

  return {
    OUTFITS_BY_MONTH: OUTFITS_BY_MONTH,
    getCurrentMonthOutfit: getCurrentMonthOutfit,
    init: init
  };

}());

if (typeof window !== 'undefined') window.Honor = Honor;
