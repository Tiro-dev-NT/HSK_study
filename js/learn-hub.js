// ═══════════════════════════════════════════════════════
// LEARN-HUB.JS — Hub v2 for the Học tab (Phase Nav v2)
// • Called after setupDecks() via router initMap
// • Sections: Continue strip · Hôm nay · Timeline · Bổ trợ
// ═══════════════════════════════════════════════════════

function initLearnHub() {
  var hub     = document.getElementById('learnHub');
  var browser = document.getElementById('deckBrowser');
  if (!hub) return;

  // Hub is primary landing; deck browser is secondary
  if (browser) browser.style.display = 'none';
  hub.style.display = '';

  _lhRenderContinue();
  _lhRenderToday();
  _lhRenderTimeline();

  var btnAll = document.getElementById('lhBtnAllDecks');
  if (btnAll) {
    btnAll.onclick = function() {
      hub.style.display = 'none';
      if (browser) browser.style.display = '';
    };
  }
}

// ── Helper: open a deck directly from hub ────────────
function learnHubOpenDeck(deckId) {
  if (deckId) localStorage.setItem('hsk_last_deck_id', deckId);
  var hub = document.getElementById('learnHub');
  if (hub) hub.style.display = 'none';
  var browser = document.getElementById('deckBrowser');
  if (browser) browser.style.display = '';
  if (typeof openDeckDetail === 'function') openDeckDetail(deckId);
}

// ── Section 1: Continue strip ─────────────────────────
function _lhRenderContinue() {
  var nameEl = document.getElementById('lhContName');
  var metaEl = document.getElementById('lhContMeta');
  var barEl  = document.getElementById('lhContBar');
  var btn    = document.getElementById('lhContBtn');
  if (!nameEl) return;

  var lastId  = localStorage.getItem('hsk_last_deck_id') || 'sys_hsk1';
  var deck    = (typeof decks !== 'undefined') ? decks[lastId] : null;

  // Fallback: first system deck
  if (!deck && typeof decks !== 'undefined') {
    var ids = Object.keys(decks);
    for (var i = 0; i < ids.length; i++) {
      if (decks[ids[i]].isSystem) { deck = decks[ids[i]]; lastId = ids[i]; break; }
    }
  }

  if (!deck) {
    nameEl.textContent = 'HSK 1';
    if (metaEl) metaEl.textContent = 'Bắt đầu học ngay';
    if (btn) btn.onclick = function() { learnHubOpenDeck('sys_hsk1'); };
    return;
  }

  var prog = (typeof getDeckProgress === 'function')
    ? getDeckProgress(deck)
    : { learned: 0, total: 0, pct: 0 };

  nameEl.textContent = deck.title;
  if (metaEl) metaEl.textContent = prog.learned + ' / ' + prog.total + ' từ đã học · ' + prog.pct + '%';
  if (barEl)  barEl.style.width = prog.pct + '%';
  if (btn) {
    btn.onclick = function() { learnHubOpenDeck(lastId); };
  }
}

// ── Section 2: Hôm nay ────────────────────────────────
function _lhRenderToday() {
  var dueEl = document.getElementById('lhDueCount');
  var newEl = document.getElementById('lhNewCount');
  if (!dueEl && !newEl) return;

  var today   = new Date().toISOString().split('T')[0];
  var srs     = (typeof AppState !== 'undefined') ? AppState.srsData : {};
  var due     = 0;
  var entries = Object.values(srs);
  for (var i = 0; i < entries.length; i++) {
    if (entries[i].dueDate && entries[i].dueDate <= today) due++;
  }

  if (dueEl) dueEl.textContent = Math.min(due, 99) + (due > 99 ? '+' : '');

  if (newEl) {
    var reviewedToday = parseInt(localStorage.getItem('hsk_new_today') || '0');
    var cap = (typeof SRS_NEW_PER_DAY !== 'undefined') ? SRS_NEW_PER_DAY : 20;
    newEl.textContent = Math.max(0, cap - reviewedToday);
  }
}

// ── Section 3: Timeline ───────────────────────────────
function _lhRenderTimeline() {
  var container = document.getElementById('lhTimeline');
  if (!container) return;

  var count     = (typeof activeLevelCount === 'function') ? activeLevelCount() : 6;
  var levelInfo = (typeof activeLevelInfo  === 'function') ? activeLevelInfo()  : {};
  var hskData   = (typeof activeHSKData    === 'function') ? activeHSKData()    : {};
  var progress  = (typeof AppState !== 'undefined') ? AppState.progress : {};
  var lastId    = localStorage.getItem('hsk_last_deck_id') || 'sys_hsk1';
  var match     = lastId.match(/sys_hsk(\d+)/);
  var curLevel  = match ? parseInt(match[1]) : 1;

  var html = '';

  // HSK 0 node
  html += '<button class="lh-tl-node" onclick="Router.navigateTo(\'hsk0-pinyin-initials\')">';
  html += '<div class="lh-tl-icon">🔰</div>';
  html += '<div class="lh-tl-body"><div class="lh-tl-name">HSK 0 · Nhập Môn</div>';
  html += '<div class="lh-tl-sub">Pinyin · Nét · Số</div></div>';
  html += '</button><div class="lh-tl-connector"></div>';

  // Story Mai (coming soon)
  html += '<div class="lh-tl-node lh-tl-node--soon">';
  html += '<div class="lh-tl-icon">📖</div>';
  html += '<div class="lh-tl-body"><div class="lh-tl-name">Truyện Mai</div>';
  html += '<div class="lh-tl-sub lh-tl-badge-soon">Sắp ra mắt · Phase P</div></div>';
  html += '</div><div class="lh-tl-connector"></div>';

  // HSK 1-N
  for (var lv = 1; lv <= count; lv++) {
    var words   = hskData[lv] || [];
    var total   = words.length;
    var learned = (progress[lv] || []).length;
    var pct     = total > 0 ? Math.round(Math.min(learned, total) / total * 100) : 0;
    var info    = levelInfo[lv] || { icon: '📕', label: 'HSK ' + lv };
    var active  = (lv === curLevel);
    var done    = (pct >= 100);

    var cls = 'lh-tl-node';
    if (active) cls += ' lh-tl-node--active';
    else if (done) cls += ' lh-tl-node--done';

    var id = 'sys_hsk' + lv;
    html += '<button class="' + cls + '" onclick="learnHubOpenDeck(\'' + id + '\')">';
    html += '<div class="lh-tl-icon">' + (info.icon || '📕') + '</div>';
    html += '<div class="lh-tl-body">';
    html += '<div class="lh-tl-name">' + (info.label || ('HSK ' + lv)) + '</div>';
    html += '<div class="lh-tl-progress"><div class="lh-tl-bar" style="width:' + pct + '%"></div></div>';
    html += '<div class="lh-tl-sub">' + Math.min(learned, total) + ' / ' + total + ' từ';
    if (active) html += ' &nbsp;<span class="lh-here-chip">Bạn ở đây</span>';
    html += '</div></div>';
    if (active) html += '<div class="lh-tl-arrow-active">▶</div>';
    html += '</button>';
    if (lv < count) html += '<div class="lh-tl-connector"></div>';
  }

  html += '<button class="lh-tl-map-link" onclick="Router.navigateTo(\'ban-do-hsk\')">';
  html += '🗺️ Xem dạng Bản đồ HSK →</button>';

  container.innerHTML = html;
}
