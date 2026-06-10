// ─── DECK MANAGEMENT SYSTEM ───────────────────────────
// Handles: state, CRUD, browser UI, popup, migration

const DECK_ICONS = ['📕','📗','📘','📙','⭐','📝','🌟','🔖','💡','🎯'];
const DECK_COLORS = ['#E74C3C','#27AE60','#2980B9','#E67E22','#8E44AD','#16A085'];
// HSK_META is now defined in data.js (alias of LEVEL_INFO)


function _decksKey() {
  return (typeof AppState !== 'undefined' && AppState.version === 3) ? 'hsk_decks_v3' : 'hsk_decks';
}

// ── State ──────────────────────────────────────────────
let decks = {}; // { deckId: { id, title, isSystem, level?, words[], icon, color, createdAt } }
let activeDeckId = null;
let deckViewMode = 'grid'; // 'grid' | 'list'
let deckTabActive = 'hsk'; // 'hsk' | 'mine'
let pendingAddWord = null; // word object waiting to be added to a deck via popup
let editingDeckId = null;
let currentLearnMode = 'flashcard'; // 'flashcard' | 'typing' | 'mcq' | 'listening'

// ── Init ───────────────────────────────────────────────
function setupDecks() {
  loadDecks();
  migrateVaultToDecks();
  renderDeckBrowser();
  wireDecksUI();
  wireVaultPage();
  wireAddToDeckPopup();
}

function loadDecks() {
  try {
    decks = JSON.parse(localStorage.getItem(_decksKey()) || 'null') || {};
  } catch(e) {
    decks = {};
  }
  // Always ensure system HSK decks exist (idempotent)
  var count = activeLevelCount();
  var levelInfo = activeLevelInfo();
  for (var lv = 1; lv <= count; lv++) {
    const id = `sys_hsk${lv}`;
    if (!decks[id]) {
      const m = levelInfo[lv] || { icon:'📕', color:'#E74C3C', count: 0 };
      decks[id] = {
        id, title: m.label || `HSK ${lv}`,
        isSystem: true, level: lv, words: [],
        icon: m.icon, color: m.color, createdAt: new Date().toISOString()
      };
    } else {
      decks[id].isSystem = true;
      decks[id].level = lv;
    }
  }
  saveDecks();
  // Debug: verify active data loaded
  const data = activeHSKData();
  const total = Object.values(data).reduce((s,a)=>s+a.length,0);
  if (total === 0) console.warn('[HSK] activeHSKData is empty! Check data files loaded correctly.');
  else console.log(`[HSK] v${AppState.version} Loaded: ${total} words across ${Object.keys(data).filter(k=>data[k].length>0).length} levels`);
}

function saveDecks() {
  localStorage.setItem(_decksKey(), JSON.stringify(decks));
}

function migrateVaultToDecks() {
  const old = JSON.parse(localStorage.getItem('hsk_vault') || '[]');
  if (!old.length) return;
  if (Object.keys(decks).some(id => id === 'migrated_vault')) return;
  decks['migrated_vault'] = {
    id: 'migrated_vault', title: 'Từ vựng đã lưu',
    isSystem: false, words: old,
    icon: '📚', color: '#16A085', createdAt: new Date().toISOString()
  };
  saveDecks();
  localStorage.removeItem('hsk_vault');
}

// ── Cloud sync bridge (called by sync.js) ─────────────
// `decks.js` là NGUỒN DUY NHẤT biết format/key deck. sync.js gọi 2 hàm này
// thay vì tự parse localStorage (trước đây dùng key `hsk_user_decks` không tồn
// tại → deck user không bao giờ sync). System HSK decks là dữ liệu suy ra, KHÔNG sync.
function getUserDecksForSync() {
  if (!Object.keys(decks).length && typeof loadDecks === 'function') loadDecks();
  return Object.values(decks)
    .filter(function(d) { return !d.isSystem; })
    .map(function(d) { return { name: d.title, words: (d.words || []) }; });
}

// Áp deck kéo từ cloud vào `decks` local.
// mode='merge' (mặc định an toàn): union words theo hanzi, KHÔNG xóa deck local chưa push.
// mode='overwrite': thay words của deck trùng tên. System decks luôn được giữ.
function applyUserDecksFromSync(pulledDecks, mode) {
  if (!Array.isArray(pulledDecks) || !pulledDecks.length) return;
  if (!Object.keys(decks).length && typeof loadDecks === 'function') loadDecks();
  // Làm giàu lại stub {h} từ data HSK để pinyin/nghĩa không mất sau round-trip cloud
  var wmap = null;
  function enrich(w) {
    if (w && w.p && w.v) return w;
    if (!wmap && typeof getAllWords === 'function') {
      wmap = {}; getAllWords().forEach(function(x) { wmap[x.h] = x; });
    }
    return (wmap && wmap[w.h]) ? wmap[w.h] : w;
  }
  var byTitle = {};
  Object.keys(decks).forEach(function(id) {
    if (!decks[id].isSystem) byTitle[decks[id].title] = decks[id];
  });
  pulledDecks.forEach(function(row) {
    var cloudWords = (row.words || []).map(enrich);
    var existing = byTitle[row.name];
    if (existing) {
      if (mode === 'overwrite') {
        existing.words = cloudWords;
      } else {
        var have = {};
        existing.words.forEach(function(w) { have[w.h] = true; });
        cloudWords.forEach(function(w) { if (!have[w.h]) existing.words.push(w); });
      }
    } else {
      var id = 'deck_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
      decks[id] = { id: id, title: row.name, isSystem: false, words: cloudWords,
        icon: '📥', color: '#16A085', createdAt: new Date().toISOString() };
      byTitle[row.name] = decks[id];
    }
  });
  saveDecks();
  if (typeof renderDeckBrowser === 'function') renderDeckBrowser();
}

// ── Helpers ────────────────────────────────────────────
function getDeckWords(deck) {
  if (deck.isSystem && deck.level) return getNewWordsForLevel(deck.level).map(w => ({...w, level: deck.level}));
  return deck.words || [];
}

function getDeckProgress(deck) {
  if (!deck.isSystem || !deck.level) return { learned: deck.words?.length || 0, total: deck.words?.length || 0, pct: deck.words?.length ? 100 : 0 };
  const total = getNewWordsForLevel(deck.level).length || activeLevelInfo()[deck.level]?.count || 0;
  const learned = (AppState.progress[deck.level] || []).length;
  return { learned: Math.min(learned, total), total, pct: total ? Math.round(Math.min(learned, total) / total * 100) : 0 };
}

function createDeck(title) {
  const id = 'deck_' + Date.now();
  const iconIdx = Math.floor(Math.random() * DECK_ICONS.length);
  decks[id] = { id, title, isSystem: false, words: [], icon: DECK_ICONS[iconIdx], color: DECK_COLORS[iconIdx % DECK_COLORS.length], createdAt: new Date().toISOString() };
  saveDecks();
  return id;
}

function deleteDeck(id) {
  if (decks[id]?.isSystem) return;
  delete decks[id];
  saveDecks();
}

function addWordToDeck(deckId, word) {
  if (!decks[deckId] || decks[deckId].isSystem) return;
  if (!decks[deckId].words.find(w => w.h === word.h)) {
    decks[deckId].words.push(word);
    saveDecks();
  }
}

function removeWordFromDeck(deckId, hanzi) {
  if (!decks[deckId] || decks[deckId].isSystem) return;
  decks[deckId].words = decks[deckId].words.filter(w => w.h !== hanzi);
  saveDecks();
}

// ── Render Deck Browser ────────────────────────────────
function renderDeckBrowser() {
  renderHSKDecks();
  renderMyDecks();
}

// Track which HSK levels are expanded in the list
let expandedLevels = {};

function renderHSKDecks() {
  const grid = document.getElementById('hskDeckGrid');
  if (!grid) { console.warn('[DECKS] hskDeckGrid not found!'); return; }
  const hskDecks = Object.values(decks).filter(d => d.isSystem).sort((a,b) => a.level - b.level);
  console.log('[DECKS] renderHSKDecks:', hskDecks.length, 'system decks, decks obj keys:', Object.keys(decks).length);

  if (deckViewMode === 'grid') {
    grid.className = 'deck-grid';
    grid.innerHTML = hskDecks.map(d => deckCardHTML(d)).join('');
    grid.querySelectorAll('.deck-card').forEach(card => {
      card.addEventListener('click', e => {
        if (e.target.closest('.deck-card-menu')) return;
        openDeckDetail(card.dataset.id);
      });
    });
  } else {
    // List view: show hierarchical sub-decks
    grid.className = 'deck-list-view';
    grid.innerHTML = hskDecks.map(d => hskListRowHTML(d)).join('');
    wireHSKListRows(grid);
  }
}

// Get topics grouped from active data for a given level
function getTopicGroups(level) {
  const words = (activeHSKData()[level] || []).map(w => ({...w, level}));
  const groups = {};
  words.forEach(w => {
    const t = w.t || 'general';
    if (!groups[t]) groups[t] = [];
    groups[t].push(w);
  });
  return groups;
}

function hskListRowHTML(deck) {
  const words = getDeckWords(deck);
  const prog = getDeckProgress(deck);
  const m = activeLevelInfo()[deck.level] || {};
  const isExpanded = expandedLevels[deck.level];
  const badge = typeof getSRSBadgeHTML === 'function' ? getSRSBadgeHTML(words) : '';
  const topicGroups = getTopicGroups(deck.level);
  const subRows = Object.entries(topicGroups).map(([topic, tw]) => {
    const meta = TOPIC_META[topic] || { vi: topic, icon: '📌' };
    const subBadge = typeof getSRSBadgeHTML === 'function' ? getSRSBadgeHTML(tw) : '';
    return `
    <div class="hsk-sub-row" data-deck="${deck.id}" data-topic="${topic}" style="display:${isExpanded ? 'flex' : 'none'}">
      <span class="hsk-sub-indent">└</span>
      <span class="hsk-sub-icon">${meta.icon}</span>
      <span class="hsk-sub-name">${meta.vi}</span>
      <span class="hsk-sub-count">${tw.length} từ</span>
      <div class="hsk-sub-badges">${subBadge}</div>
      <button class="btn-learn-sub" data-deck="${deck.id}" data-topic="${topic}">▶ Học</button>
    </div>`;
  }).join('');

  return `
  <div class="hsk-list-row" data-id="${deck.id}" data-level="${deck.level}">
    <button class="hsk-expand-btn" data-level="${deck.level}">${isExpanded ? '▼' : '▶'}</button>
    <span class="hsk-row-icon">${m.icon || '📚'}</span>
    <div class="hsk-row-info">
      <div class="hsk-row-title">${deck.title}</div>
      <div class="hsk-row-sub">${words.length} từ · ${prog.pct}% đã học</div>
    </div>
    <div class="hsk-row-badges">${badge}</div>
    <button class="btn-learn-deck" data-id="${deck.id}">▶ Học</button>
  </div>
  ${subRows}`;
}

function wireHSKListRows(grid) {
  // Expand/collapse
  grid.querySelectorAll('.hsk-expand-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const lv = parseInt(btn.dataset.level);
      expandedLevels[lv] = !expandedLevels[lv];
      renderHSKDecks();
    });
  });
  // Learn full deck
  grid.querySelectorAll('.btn-learn-deck').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openDeckDetail(btn.dataset.id);
    });
  });
  // Learn sub-deck (by topic)
  grid.querySelectorAll('.btn-learn-sub').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openSubDeckDetail(btn.dataset.deck, btn.dataset.topic);
    });
  });
}

function renderMyDecks() {
  const grid = document.getElementById('myDeckGrid');
  if (!grid) return;
  const mine = Object.values(decks).filter(d => !d.isSystem);
  grid.className = `deck-grid${deckViewMode === 'list' ? ' list-view' : ''}`;
  if (!mine.length) {
    grid.innerHTML = `<div class="deck-card deck-card-create" id="createDeckCard"><span class="plus">＋</span><span>Tạo bộ thẻ đầu tiên</span></div>`;
    grid.querySelector('#createDeckCard')?.addEventListener('click', promptCreateDeck);
    return;
  }
  grid.innerHTML = mine.map(d => deckCardHTML(d, true)).join('')
    + `<div class="deck-card deck-card-create" id="createDeckCard"><span class="plus">＋</span><span>Tạo bộ thẻ mới</span></div>`;
  grid.querySelectorAll('.deck-card[data-id]').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('.deck-card-menu')) return;
      openDeckDetail(card.dataset.id);
    });
  });
  grid.querySelector('#createDeckCard')?.addEventListener('click', promptCreateDeck);
  grid.querySelectorAll('.deck-card-menu').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); showDeckMenu(btn.dataset.id); });
  });
}

function deckCardHTML(deck, showMenu = false) {
  const prog = getDeckProgress(deck);
  const words = getDeckWords(deck);
  const total = prog.total || words.length;
  const badge = typeof getSRSBadgeHTML === 'function' ? getSRSBadgeHTML(words) : '';
  return `
  <div class="deck-card" data-id="${deck.id}">
    ${showMenu ? `<button class="deck-card-menu" data-id="${deck.id}">⋮</button>` : ''}
    <div class="deck-card-body">
      <div class="deck-card-icon">${deck.icon}</div>
      <div class="deck-card-title">${escapeHtml(deck.title)}</div>
      <div class="deck-card-count">${total} từ</div>
      ${deck.isSystem ? `<div class="deck-srs-badges">${badge}</div>` : ''}
      <div class="deck-progress-bar"><div class="deck-progress-fill" style="width:${prog.pct}%"></div></div>
      <div class="deck-progress-pct">${prog.pct}% đã học</div>
    </div>
    <div class="deck-card-actions">
      <button class="btn-primary">▶ Học</button>
    </div>
  </div>`;
}

// ── Deck Detail (Anki-style) ──────────────────────────
let previewWords = []; // words shown in the preview card
let previewIdx = 0;    // current preview index
let previewFlipped = false;

function openDeckDetail(deckId, topicFilter = null) {
  activeDeckId = deckId;
  const deck = decks[deckId];
  if (!deck) return;
  // Track last opened deck for Learn Hub "Continue strip"
  localStorage.setItem('hsk_last_deck_id', deckId);
  let words = getDeckWords(deck);
  if (topicFilter) words = words.filter(w => (w.t || 'general') === topicFilter);

  // ── Pro gate: HSK 3.0 L4-L9 preview for free users ──────────────────
  var isV3       = typeof AppState !== 'undefined' && AppState.version === 3;
  var isGated    = isV3 && deck.level >= PRO_LEVEL_MIN;
  var isPro      = typeof Monetization !== 'undefined' ? Monetization.isProSync() : false;
  var isPreview  = isGated && !isPro;
  var fullCount  = words.length;
  if (isPreview) words = words.slice(0, PREVIEW_WORD_COUNT);
  // Store preview state for startLearn handler
  var dd = document.getElementById('deckDetail');
  if (dd) {
    dd.dataset.preview   = isPreview  ? '1' : '';
    dd.dataset.fullCount = isGated    ? fullCount : '';
  }
  // Show/hide preview banner
  var banner = document.getElementById('deckPreviewBanner');
  if (banner) {
    if (isPreview) {
      var isEN = typeof AppState !== 'undefined' && AppState.lang === 'en';
      banner.style.display = 'block';
      banner.innerHTML = isEN
        ? '🔒 Free preview: <strong>' + PREVIEW_WORD_COUNT + ' of ' + fullCount + ' words</strong> — <a href="#" onclick="Router.navigateTo(\'pricing\');return false;" style="color:var(--primary);font-weight:600;text-decoration:underline">Upgrade to Pro</a> for full access'
        : '🔒 Xem thử: <strong>' + PREVIEW_WORD_COUNT + '/' + fullCount + ' từ</strong> — <a href="#" onclick="Router.navigateTo(\'pricing\');return false;" style="color:var(--primary);font-weight:600;text-decoration:underline">Nâng lên Pro</a> để học đủ';
    } else {
      banner.style.display = 'none';
    }
  }
  // ─────────────────────────────────────────────────────────────────────

  const prog = getDeckProgress(deck);

  document.getElementById('deckBrowser').style.display = 'none';
  document.getElementById('deckDetail').style.display = 'block';

  // Title & meta
  const topicLabel = topicFilter ? (TOPIC_META[topicFilter]?.vi || topicFilter) : null;
  document.getElementById('deckDetailTitle').textContent = topicLabel ? `${deck.title} — ${topicLabel}` : deck.title;
  document.getElementById('deckDetailCount').textContent = `${words.length} từ`;
  document.getElementById('deckDetailProgress').textContent = `${prog.pct}% đã học`;

  // SRS stats
  const srsInfoEl = document.getElementById('deckDetailSRS');
  if (srsInfoEl && deck.isSystem && typeof buildStudyQueue === 'function') {
    const { stats } = buildStudyQueue(words);
    srsInfoEl.style.display = 'flex';
    srsInfoEl.innerHTML = `
      <span class="srs-stat srs-new">🔵 ${stats.newToday} mới</span>
      <span class="srs-stat srs-due">🟠 ${stats.due} ôn</span>
      <span class="srs-stat srs-relearn">🔴 ${stats.relearn} học lại</span>
    `;
  } else if (srsInfoEl) {
    srsInfoEl.style.display = 'none';
  }

  // Store topic filter for startLearn
  document.getElementById('deckDetail').dataset.topicFilter = topicFilter || '';

  // Setup preview card
  previewWords = words;
  previewIdx = 0;
  previewFlipped = false;
  renderPreviewCard();

  // Word count in list header
  const ddWC = document.getElementById('ddWordCount');
  if (ddWC) ddWC.textContent = `(${words.length})`;

  // Render word list
  renderDeckWordList(words);
}

function renderPreviewCard() {
  if (!previewWords.length) return;
  const w = previewWords[previewIdx];
  previewFlipped = false;
  document.getElementById('pcHanzi').textContent = w.h;
  document.getElementById('pcPinyin').textContent = w.p;
  const meaningEl = document.getElementById('pcMeaning');
  if (meaningEl) { meaningEl.textContent = w.v; meaningEl.style.display = 'none'; }
  const hint = document.querySelector('.pc-tap-hint');
  if (hint) hint.style.display = 'block';
  const card = document.getElementById('previewCard');
  if (card) card.classList.remove('flipped');
  document.getElementById('previewIdx').textContent = previewIdx + 1;
  document.getElementById('previewTotal').textContent = previewWords.length;
  if (typeof playTTS === 'function') setTimeout(() => playTTS(w.h), 200);
}

function flipPreviewCard() {
  if (!previewWords.length) return;
  previewFlipped = !previewFlipped;
  const meaningEl = document.getElementById('pcMeaning');
  const hint = document.querySelector('.pc-tap-hint');
  const card = document.getElementById('previewCard');
  if (meaningEl) meaningEl.style.display = previewFlipped ? 'block' : 'none';
  if (hint) hint.style.display = previewFlipped ? 'none' : 'block';
  if (card) card.classList.toggle('flipped', previewFlipped);
}

function renderDeckWordList(words) {
  const list = document.getElementById('ddWordList');
  if (!list) return;
  if (!words.length) {
    list.innerHTML = '<p style="color:var(--text3);padding:20px">Không có từ vựng nào.</p>';
    return;
  }
  list.innerHTML = words.map((w, i) => `
    <div class="ddwl-row" data-idx="${i}">
      <span class="ddwl-num">${i + 1}</span>
      <div class="ddwl-hanzi">${w.h}</div>
      <div class="ddwl-info">
        <div class="ddwl-pinyin">${w.p}</div>
        <div class="ddwl-meaning">${w.v}</div>
      </div>
      <button class="ddwl-tts" data-h="${w.h}" title="Phát âm">🔊</button>
    </div>
  `).join('');
  list.querySelectorAll('.ddwl-tts').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      if (typeof playTTS === 'function') playTTS(btn.dataset.h);
    });
  });
  list.querySelectorAll('.ddwl-row').forEach(row => {
    row.addEventListener('click', e => {
      if (e.target.classList.contains('ddwl-tts')) return;
      const idx = parseInt(row.dataset.idx);
      previewIdx = idx;
      renderPreviewCard();
      document.querySelector('.preview-card-wrap')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
}

function openSubDeckDetail(deckId, topic) {
  openDeckDetail(deckId, topic);
}

function closeDeckDetail() {
  document.getElementById('deckDetail').style.display = 'none';
  document.getElementById('deckBrowser').style.display = 'block';
}

// ── Wire UI ───────────────────────────────────────────
function wireDecksUI() {
  // Tab switch
  document.getElementById('tabHSK')?.addEventListener('click', () => {
    deckTabActive = 'hsk';
    document.getElementById('tabHSK').classList.add('active');
    document.getElementById('tabMine').classList.remove('active');
    document.getElementById('hskDecksPanel').style.display = 'block';
    document.getElementById('myDecksPanel').style.display = 'none';
  });
  document.getElementById('tabMine')?.addEventListener('click', () => {
    deckTabActive = 'mine';
    document.getElementById('tabMine').classList.add('active');
    document.getElementById('tabHSK').classList.remove('active');
    document.getElementById('hskDecksPanel').style.display = 'none';
    document.getElementById('myDecksPanel').style.display = 'block';
    renderMyDecks();
  });

  // View toggle
  document.getElementById('viewGrid')?.addEventListener('click', () => {
    deckViewMode = 'grid';
    document.getElementById('viewGrid').classList.add('active');
    document.getElementById('viewList').classList.remove('active');
    renderDeckBrowser();
  });
  document.getElementById('viewList')?.addEventListener('click', () => {
    deckViewMode = 'list';
    document.getElementById('viewList').classList.add('active');
    document.getElementById('viewGrid').classList.remove('active');
    renderDeckBrowser();
  });

  // Back button
  document.getElementById('backToBrowser')?.addEventListener('click', closeDeckDetail);

  // Create deck buttons
  document.getElementById('btnCreateDeck')?.addEventListener('click', promptCreateDeck);

  // Import
  document.getElementById('importDeckFile')?.addEventListener('change', handleImportDeck);

  // Mode chips (new selector)
  document.querySelectorAll('.mode-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('disabled')) return;
      document.querySelectorAll('.mode-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLearnMode = btn.dataset.mode;
    });
  });

  // Preview card navigation
  document.getElementById('previewPrev')?.addEventListener('click', () => {
    if (!previewWords.length) return;
    previewIdx = (previewIdx - 1 + previewWords.length) % previewWords.length;
    renderPreviewCard();
  });
  document.getElementById('previewNext')?.addEventListener('click', () => {
    if (!previewWords.length) return;
    previewIdx = (previewIdx + 1) % previewWords.length;
    renderPreviewCard();
  });
  document.getElementById('previewCard')?.addEventListener('click', flipPreviewCard);
  document.getElementById('pcTts')?.addEventListener('click', e => {
    e.stopPropagation();
    if (previewWords[previewIdx] && typeof playTTS === 'function') playTTS(previewWords[previewIdx].h);
  });

  // Keyboard shortcuts on deck detail screen
  document.addEventListener('keydown', e => {
    if (document.getElementById('deckDetail')?.style.display === 'none') return;
    if (['INPUT','TEXTAREA','SELECT'].includes(e.target.tagName)) return;
    if (e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); flipPreviewCard(); }
    if (e.key === 'ArrowLeft')  { previewIdx = (previewIdx - 1 + previewWords.length) % previewWords.length; renderPreviewCard(); }
    if (e.key === 'ArrowRight') { previewIdx = (previewIdx + 1) % previewWords.length; renderPreviewCard(); }
    if (e.key === 'Enter') document.getElementById('startLearn')?.click();
  });

  // Start learn button — SRS queue, no dropdowns
  document.getElementById('startLearn')?.addEventListener('click', async () => {
    if (!activeDeckId) return;
    const deck = decks[activeDeckId];
    const topicFilter = document.getElementById('deckDetail').dataset.topicFilter || '';
    let words = getDeckWords(deck);
    if (topicFilter) words = words.filter(w => (w.t || 'general') === topicFilter);

    // ── SRS Debt Cap: block new lessons if pending reviews > 50 ──────────
    if (typeof isDebtBlocked === 'function' && isDebtBlocked()) {
      const dueCount = typeof getDueCount === 'function' ? getDueCount() : 0;
      const isEN = typeof AppState !== 'undefined' && AppState.lang === 'en';
      const msg = isEN
        ? `You have ${dueCount} cards waiting for review — finish reviewing before learning new words! 💪`
        : `Bạn có ${dueCount} từ đang chờ ôn — ôn xong rồi học tiếp nhé! 💪`;
      if (confirm(msg + '\n\n' + (isEN ? '[Review now] or [Skip today]?' : '[Ôn ngay] hay [Bỏ qua hôm nay]?'))) {
        if (typeof Router !== 'undefined') Router.navigateTo('practice');
        return;
      }
    }
    // ─────────────────────────────────────────────────────────────────────

    // ── Pro gate: authoritative async check before starting session ──────
    var isV3      = typeof AppState !== 'undefined' && AppState.version === 3;
    var isGated   = isV3 && deck.level >= PRO_LEVEL_MIN;
    var pro       = isGated && typeof Monetization !== 'undefined'
                    ? await Monetization.isPro()
                    : true;
    var isPreview = isGated && !pro;
    if (isPreview) words = words.slice(0, PREVIEW_WORD_COUNT);
    AppState.fcIsPreview      = isPreview;
    AppState.fcPreviewLevel   = isPreview ? deck.level : null;
    AppState.fcPreviewFullCnt = isPreview ? getDeckWords(deck).length : null;
    // ─────────────────────────────────────────────────────────────────────

    // SRS queue for system decks; preview/user decks get a simple slice
    if (!isPreview && deck.isSystem && typeof buildStudyQueue === 'function') {
      const { queue } = buildStudyQueue(words, SRS_NEW_PER_DAY);
      AppState.fcDeck = queue.length ? queue : shuffle(words).slice(0, SRS_NEW_PER_DAY);
    } else if (isPreview) {
      AppState.fcDeck = words; // serve all 20 preview words without SRS
    } else {
      AppState.fcDeck = shuffle([...words]).slice(0, Math.min(words.length, 20));
    }

    AppState.fcIndex   = 0;
    AppState.fcSession = { correct: 0, wrong: 0, startTime: Date.now() };

    // Sync backward-compat aliases
    fcDeck    = AppState.fcDeck;
    fcIndex   = AppState.fcIndex;
    fcSession = AppState.fcSession;

    // Hide setup, show session
    document.getElementById('deckDetail').style.display = 'none';
    if (currentLearnMode === 'flashcard') {
      document.getElementById('flashcardArea').style.display  = 'block'; showFcCard();
    } else if (currentLearnMode === 'typing') {
      document.getElementById('typingArea').style.display     = 'block'; showTyCard();
    } else if (currentLearnMode === 'mcq') {
      document.getElementById('mcqArea').style.display        = 'block'; showMcqCard();
    } else if (currentLearnMode === 'listening') {
      document.getElementById('listeningArea').style.display  = 'block'; showLsCard();
    }
  });

  // Session exit → back to deck detail
  ['exitLearn','exitTyping','exitMcq','exitListening'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', () => {
      endLearnSession();
      setTimeout(() => {
        document.getElementById('sessionResult').style.display = 'none';
        openDeckDetail(activeDeckId);
      }, 100);
    });
  });

  // Session result: learn again
  document.getElementById('learnAgainBtn')?.addEventListener('click', () => {
    document.getElementById('sessionResult').style.display = 'none';
    openDeckDetail(activeDeckId);
  });
}

// ── Vault Page (My Decks full manager) ────────────────
function wireVaultPage() {
  renderVaultDeckList();
  document.getElementById('btnCreateDeck2')?.addEventListener('click', () => {
    promptCreateDeck(() => renderVaultDeckList());
  });
  document.getElementById('importDeckFile2')?.addEventListener('change', e => {
    handleImportDeck(e, () => renderVaultDeckList());
  });
  document.getElementById('backToVaultList')?.addEventListener('click', () => {
    document.getElementById('vaultEditDeck').style.display = 'none';
    document.getElementById('vaultDeckList').style.display = 'block';
    renderVaultDeckList();
  });
  document.getElementById('editDeckSearch')?.addEventListener('input', e => {
    searchWordsForEditDeck(e.target.value.trim());
  });
  document.getElementById('saveDeckName')?.addEventListener('click', () => {
    if (!editingDeckId || decks[editingDeckId]?.isSystem) return;
    const name = document.getElementById('editDeckNameInput').value.trim();
    if (name) { decks[editingDeckId].title = name; saveDecks(); renderVaultDeckList(); }
  });
  document.getElementById('exportEditDeck')?.addEventListener('click', () => {
    if (!editingDeckId) return;
    exportDeck(editingDeckId);
  });
}

function renderVaultDeckList() {
  const container = document.getElementById('vaultDeckItems');
  if (!container) return;
  const mine = Object.values(decks).filter(d => !d.isSystem);
  if (!mine.length) {
    container.innerHTML = `<div style="text-align:center;padding:60px 0;color:var(--text3)"><p style="font-size:48px">📭</p><p>Chưa có bộ thẻ nào. Hãy tạo bộ thẻ đầu tiên!</p></div>`;
    return;
  }
  container.innerHTML = mine.map(d => `
    <div class="vault-deck-item">
      <div class="vdi-icon">${d.icon}</div>
      <div class="vdi-info">
        <div class="vdi-title">${escapeHtml(d.title)}</div>
        <div class="vdi-meta">${d.words.length} từ · Tạo: ${new Date(d.createdAt).toLocaleDateString('vi-VN')}</div>
      </div>
      <div class="vdi-actions">
        <button class="vdi-btn" data-action="edit" data-id="${d.id}">✏️ Sửa</button>
        <button class="vdi-btn" data-action="export" data-id="${d.id}">📤 Export</button>
        <button class="vdi-btn danger" data-action="delete" data-id="${d.id}">🗑️</button>
      </div>
    </div>
  `).join('');
  container.querySelectorAll('.vdi-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      if (btn.dataset.action === 'edit') openEditDeck(id);
      if (btn.dataset.action === 'export') exportDeck(id);
      if (btn.dataset.action === 'delete') {
        if (confirm(`Xóa bộ thẻ "${decks[id]?.title}"?`)) { deleteDeck(id); renderVaultDeckList(); renderMyDecks(); }
      }
    });
  });
}

function openEditDeck(deckId) {
  editingDeckId = deckId;
  const deck = decks[deckId];
  document.getElementById('vaultDeckList').style.display = 'none';
  document.getElementById('vaultEditDeck').style.display = 'block';
  document.getElementById('editDeckTitle').textContent = `✏️ ${deck.title}`;
  document.getElementById('editDeckNameInput').value = deck.title;
  renderEditWordsList();
}

function renderEditWordsList() {
  const deck = decks[editingDeckId];
  const list = document.getElementById('editWordsList');
  const count = document.getElementById('editWordCount');
  if (!deck || !list) return;
  count.textContent = deck.words.length;
  list.innerHTML = deck.words.map(w => `
    <div class="edit-word-chip">
      <span class="ewc-hanzi">${escapeHtml(w.h)}</span>
      <span class="ewc-meaning">${escapeHtml(w.v)}</span>
      <button class="ewc-del" data-h="${escapeAttr(w.h)}">✕</button>
    </div>
  `).join('') || '<span style="color:var(--text3);font-size:13px">Chưa có từ nào</span>';
  list.querySelectorAll('.ewc-del').forEach(btn => {
    btn.addEventListener('click', () => { removeWordFromDeck(editingDeckId, btn.dataset.h); renderEditWordsList(); });
  });
}

function searchWordsForEditDeck(q) {
  const res = document.getElementById('editSearchResults');
  if (!q) { res.innerHTML = ''; return; }
  const qL = q.toLowerCase();
  const words = getAllWords().filter(w =>
    w.h.includes(q) || w.p.toLowerCase().includes(qL) || w.v.toLowerCase().includes(qL)
  ).slice(0, 10);
  res.innerHTML = words.map(w => {
    const inDeck = decks[editingDeckId]?.words.find(x => x.h === w.h);
    return `<div class="edit-search-item">
      <span class="esi-hanzi">${escapeHtml(w.h)}</span>
      <div class="esi-info"><div class="esi-pinyin">${escapeHtml(w.p)}</div><div class="esi-meaning">${escapeHtml(w.v)}</div></div>
      <button class="esi-add ${inDeck ? 'added' : ''}" data-h="${escapeAttr(w.h)}">${inDeck ? '✓' : '+'}</button>
    </div>`;
  }).join('');
  res.querySelectorAll('.esi-add').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      addWordToDeck(editingDeckId, words[i]);
      btn.classList.add('added'); btn.textContent = '✓';
      renderEditWordsList();
    });
  });
}

// ── Add-to-Deck Popup ─────────────────────────────────
function wireAddToDeckPopup() {
  document.getElementById('adpClose')?.addEventListener('click', closeAddToDeckPopup);
  document.getElementById('addToDeckPopup')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeAddToDeckPopup();
  });
  document.getElementById('adpCreateNew')?.addEventListener('click', () => {
    closeAddToDeckPopup();
    promptCreateDeck(id => {
      if (pendingAddWord) { addWordToDeck(id, pendingAddWord); renderMyDecks(); }
    });
  });
}

function openAddToDeckPopup(word) {
  pendingAddWord = word;
  document.getElementById('adpWord').textContent = word.h;
  const mine = Object.values(decks).filter(d => !d.isSystem);
  const list = document.getElementById('adpDeckList');
  list.innerHTML = mine.length
    ? mine.map(d => {
        const has = d.words.find(w => w.h === word.h);
        return `<div class="adp-item ${has ? 'in-deck' : ''}" data-id="${d.id}">
          <span>${d.icon} ${escapeHtml(d.title)}</span>
          <span class="adp-check">${has ? '✓' : ''}</span>
        </div>`;
      }).join('')
    : `<p style="color:var(--text3);font-size:13px;padding:8px">Chưa có bộ thẻ nào</p>`;
  list.querySelectorAll('.adp-item').forEach(item => {
    item.addEventListener('click', () => {
      addWordToDeck(item.dataset.id, word);
      item.classList.add('in-deck');
      item.querySelector('.adp-check').textContent = '✓';
      renderMyDecks();
    });
  });
  document.getElementById('addToDeckPopup').style.display = 'flex';
}

function closeAddToDeckPopup() {
  document.getElementById('addToDeckPopup').style.display = 'none';
  pendingAddWord = null;
}

function openAddToDeckForWord(word) { openAddToDeckPopup(word); }

// ── Prompt Create Deck ────────────────────────────────
function promptCreateDeck(callback) {
  const name = prompt('Tên bộ thẻ mới:');
  if (!name?.trim()) return;
  const id = createDeck(name.trim());
  renderMyDecks();
  renderVaultDeckList();
  if (callback) callback(id);
}

// ── Import / Export ───────────────────────────────────
function exportDeck(deckId) {
  const deck = decks[deckId];
  if (!deck) return;
  const data = deck.isSystem ? { ...deck, words: getDeckWords(deck) } : deck;
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `${deck.title.replace(/\s/g,'_')}.json`;
  a.click();
}

function handleImportDeck(e, callback) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      if (!data.title || !Array.isArray(data.words)) { alert('File không hợp lệ!'); return; }
      const id = 'deck_' + Date.now();
      decks[id] = { id, title: data.title, isSystem: false, words: data.words, icon: data.icon || '📥', color: data.color || '#16A085', createdAt: new Date().toISOString() };
      saveDecks();
      renderMyDecks();
      renderVaultDeckList();
      alert(`Đã import "${data.title}" (${data.words.length} từ)`);
      if (callback) callback(id);
    } catch { alert('Lỗi đọc file!'); }
  };
  reader.readAsText(file);
  e.target.value = '';
}

function showDeckMenu(deckId) {
  const deck = decks[deckId];
  if (!deck || deck.isSystem) return;
  const action = prompt(`Bộ thẻ: "${deck.title}"\n\n1. Sửa\n2. Export\n3. Xóa\n\nNhập số:`);
  if (action === '1') { navigateTo('vault'); setTimeout(() => openEditDeck(deckId), 100); }
  else if (action === '2') exportDeck(deckId);
  else if (action === '3') { if (confirm(`Xóa "${deck.title}"?`)) { deleteDeck(deckId); renderMyDecks(); } }
}

// ── Deck Hover Preview (Desktop Polish Wave 1) ────────
(function _initDeckHoverPreview() {
  var popup = null;
  var hideTimer = null;

  function _getPopup() {
    if (!popup) popup = document.getElementById('deckHoverPreview');
    return popup;
  }

  function _show(card) {
    var p = _getPopup();
    if (!p) return;
    var deckId = card.dataset.id;
    var deck = decks[deckId];
    if (!deck) return;

    var prog  = (typeof getDeckProgress === 'function') ? getDeckProgress(deck) : { pct: 0 };
    var words = getDeckWords(deck).slice(0, 6);

    var chipsHtml = words.map(function(w) {
      return '<div class="dhp-word-chip">' + w.h + '<small>' + (w.p || '') + '</small></div>';
    }).join('');
    var remaining = Math.max(0, getDeckWords(deck).length - 6);
    var footerHtml = remaining > 0
      ? '<div class="dhp-footer">+' + remaining + ' từ nữa…</div>'
      : '';

    p.innerHTML =
      '<div class="dhp-header">' +
        '<span class="dhp-icon">' + (deck.icon || '📕') + '</span>' +
        '<span class="dhp-title">' + deck.title + '</span>' +
        '<span class="dhp-pct">' + (prog.pct || 0) + '%</span>' +
      '</div>' +
      '<div class="dhp-bar-wrap"><div class="dhp-bar-fill" style="width:' + (prog.pct || 0) + '%"></div></div>' +
      '<div class="dhp-words">' + chipsHtml + '</div>' +
      footerHtml;

    // Position: to the right of card (or left if near edge)
    var rect = card.getBoundingClientRect();
    var pw = 288; // popup width + margin
    var leftPos = rect.right + 8;
    if (leftPos + pw > window.innerWidth - 16) {
      leftPos = rect.left - pw - 8;
    }
    var topPos = Math.max(8, Math.min(rect.top, window.innerHeight - 260));
    p.style.left = leftPos + 'px';
    p.style.top  = topPos  + 'px';
    p.style.display = '';
    requestAnimationFrame(function() { p.classList.add('dhp-visible'); });
  }

  function _hide() {
    var p = _getPopup();
    if (!p) return;
    p.classList.remove('dhp-visible');
    hideTimer = setTimeout(function() { if (p) p.style.display = 'none'; }, 160);
  }

  // Event delegation on document for cards rendered by renderDeckBrowser()
  document.addEventListener('mouseover', function(e) {
    // Only on desktop
    if (window.innerWidth < 1024) return;
    var card = e.target.closest('.deck-card[data-id]');
    if (!card) return;
    clearTimeout(hideTimer);
    _show(card);
  });

  document.addEventListener('mouseout', function(e) {
    var card = e.target.closest('.deck-card[data-id]');
    if (!card) return;
    // Don't hide if moving into the card's own children
    if (card.contains(e.relatedTarget)) return;
    _hide();
  });
}());

