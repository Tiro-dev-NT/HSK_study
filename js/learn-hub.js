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

// ── Toggle accordion "Kho từ vựng theo cấp" ───────────
function lhToggleVocabGroup() {
  var g = document.getElementById('lhVocabGroup');
  if (g) g.classList.toggle('open');
}

// ── Section 1: Continue strip ─────────────────────────
function _lhRenderContinue() {
  var nameEl = document.getElementById('lhContName');
  var metaEl = document.getElementById('lhContMeta');
  var barEl  = document.getElementById('lhContBar');
  var btn    = document.getElementById('lhContBtn');
  if (!nameEl) return;

  // Priority: course lesson (in progress or next uncompleted)
  if (typeof COURSE_DATA !== 'undefined') {
    var courseProgress = JSON.parse(localStorage.getItem('hsk_course_progress') || '{}');
    var courseIds = Object.keys(COURSE_DATA).map(Number).sort(function(a, b) { return a - b; });
    var nextCourseId = null;
    var courseHasProgress = false;
    for (var ci = 0; ci < courseIds.length; ci++) {
      var cp = courseProgress[courseIds[ci]];
      if (!cp || !cp.completed) { nextCourseId = courseIds[ci]; courseHasProgress = !!cp; break; }
    }
    if (nextCourseId !== null) {
      var lesson = COURSE_DATA[nextCourseId];
      var doneCnt = courseIds.filter(function(id) { return courseProgress[id] && courseProgress[id].completed; }).length;
      nameEl.textContent = 'Bài ' + nextCourseId + ' — ' + (lesson ? lesson.title : '');
      if (metaEl) metaEl.textContent = (courseHasProgress ? '▶ Học tiếp · ' : '📍 Bài tiếp theo · ') + doneCnt + '/' + courseIds.length + ' bài';
      if (barEl)  barEl.style.width = Math.round(doneCnt / courseIds.length * 100) + '%';
      if (btn) btn.onclick = function() { Router.navigateTo('course'); };
      return;
    }
  }

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

// ── Section 2: Hôm nay (3 hoạt động trộn) ────────────
function _lhRenderToday() {
  var today = new Date().toISOString().split('T')[0];

  // ── Card 1: Bài mới (Truyện Mai) ──────────────────
  var lessonBtn  = document.getElementById('lhTodayLesson');
  var lessonDesc = document.getElementById('lhTodayLessonDesc');
  var lessonCheck = document.getElementById('lhTodayLessonCheck');
  if (lessonBtn && lessonDesc) {
    var progress = JSON.parse(localStorage.getItem('hsk_course_progress') || '{}');
    var nextId   = null;
    var ids = (typeof COURSE_DATA !== 'undefined')
      ? Object.keys(COURSE_DATA).map(Number).sort(function(a, b) { return a - b; })
      : [];
    for (var i = 0; i < ids.length; i++) {
      var p = progress[ids[i]];
      if (!p || !p.completed) { nextId = ids[i]; break; }
    }
    if (nextId) {
      var lesson = COURSE_DATA[nextId];
      lessonDesc.textContent = 'Bài ' + nextId + ': ' + (lesson ? lesson.title : '');
      lessonBtn.onclick = function() {
        if (typeof Course !== 'undefined') { Course._pendingId = nextId; }
        Router.navigateTo('course');
      };
    } else {
      lessonDesc.textContent = 'Đã hoàn thành tất cả bài!';
      lessonBtn.disabled = true;
    }
    // Check if done today
    var doneToday = JSON.parse(localStorage.getItem('hsk_today_done') || '{}');
    if (doneToday.date === today && doneToday.lesson) {
      if (lessonCheck) lessonCheck.textContent = '✓';
      lessonBtn.classList.add('lh-today-card--done');
    }
  }

  // ── Card 2: Ôn tập SRS ────────────────────────────
  var dueEl    = document.getElementById('lhDueCount');
  var reviewBtn = document.getElementById('lhTodayReview');
  var reviewCheck = document.getElementById('lhTodayReviewCheck');
  if (dueEl) {
    var srs     = (typeof AppState !== 'undefined') ? AppState.srsData : {};
    var due     = 0;
    var entries = Object.values(srs);
    for (var j = 0; j < entries.length; j++) {
      if (entries[j].dueDate && entries[j].dueDate <= today) due++;
    }
    dueEl.textContent = due > 0 ? (Math.min(due, 99) + (due > 99 ? '+' : '')) : '0';
    if (due === 0 && reviewBtn) {
      reviewBtn.querySelector && (reviewBtn.querySelector('.lh-today-desc') || {}).textContent;
      var descEl = reviewBtn.querySelector ? reviewBtn.querySelector('.lh-today-desc') : null;
      if (descEl) descEl.textContent = 'Không có từ đến hạn';
    }
    var doneToday2 = JSON.parse(localStorage.getItem('hsk_today_done') || '{}');
    if (doneToday2.date === today && doneToday2.review) {
      if (reviewCheck) reviewCheck.textContent = '✓';
      if (reviewBtn) reviewBtn.classList.add('lh-today-card--done');
    }
  }

  // ── Card 3: Đổi vị (game ngẫu nhiên hoặc Daily Challenge) ──
  var gameLbl  = document.getElementById('lhTodayGameLbl');
  var gameDesc = document.getElementById('lhTodayGameDesc');
  var gameCheck = document.getElementById('lhTodayGameCheck');
  var GAME_OPTIONS = [
    { lbl: 'Daily Challenge', desc: 'Thử thách hôm nay', route: 'quiz', mode: 'daily' },
    { lbl: 'Boss Battle',     desc: 'Chiến boss từ vựng', route: 'games', game: 'boss' },
    { lbl: 'Racing Quiz',     desc: 'Đua từ vựng tốc độ', route: 'games', game: 'racing' },
    { lbl: 'Sentence Builder',desc: 'Ghép câu tiếng Trung', route: 'games', game: 'sentence' }
  ];
  // Pick deterministically by day-of-year so it's stable within a day
  var dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  var pick = GAME_OPTIONS[dayOfYear % GAME_OPTIONS.length];
  if (gameLbl) gameLbl.textContent = pick.lbl;
  if (gameDesc) gameDesc.textContent = pick.desc;
  // Store pick for click handler
  window._lhTodayGamePick = pick;

  var doneToday3 = JSON.parse(localStorage.getItem('hsk_today_done') || '{}');
  if (doneToday3.date === today && doneToday3.game) {
    if (gameCheck) gameCheck.textContent = '✓';
    var gameBtn = document.getElementById('lhTodayGame');
    if (gameBtn) gameBtn.classList.add('lh-today-card--done');
  }
}

function lhTodayGameClick() {
  var pick = window._lhTodayGamePick;
  if (!pick) { Router.navigateTo('games'); return; }
  if (pick.mode === 'daily') {
    if (typeof Quiz !== 'undefined' && Quiz.startMode) Quiz.startMode('daily');
    Router.navigateTo('quiz');
  } else {
    if (pick.game && typeof Games !== 'undefined' && Games.launch) Games.launch(pick.game);
    Router.navigateTo('games');
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

  // HSK 0 node — expanded with 6 module mini-cards (Asset Batch 2)
  var HSK0_MODS = [
    { icon: '01-tones',    name: 'Thanh điệu', route: 'hsk0-pinyin-initials' },
    { icon: '02-initials', name: 'Phụ âm',     route: 'hsk0-pinyin-initials' },
    { icon: '03-finals',   name: 'Vần',         route: 'hsk0-pinyin-finals' },
    { icon: '04-strokes',  name: 'Nét viết',    route: 'hsk0-strokes' },
    { icon: '05-numbers',  name: 'Số đếm',      route: 'hsk0-numbers' },
    { icon: '06-typing',   name: 'Gõ Pinyin',   route: 'hsk0-typing' }
  ];
  html += '<div class="lh-tl-node lh-tl-node--hsk0">';
  html += '<div class="lh-tl-icon">🔰</div>';
  html += '<div class="lh-tl-body">';
  html += '<div class="lh-tl-name">HSK 0 · Nhập Môn</div>';
  html += '<div class="lh-tl-sub">Thanh điệu · Pinyin · Nét viết · Số đếm</div>';
  html += '<div class="lh-hsk0-modules">';
  for (var mi = 0; mi < HSK0_MODS.length; mi++) {
    var m = HSK0_MODS[mi];
    html += '<button class="lh-hsk0-mod" onclick="Router.navigateTo(\'' + m.route + '\')">';
    html += '<img src="assets/hsk0-icons/' + m.icon + '.webp" alt="' + m.name + '" loading="lazy">';
    html += '<span class="lh-hsk0-mod-name">' + m.name + '</span>';
    html += '</button>';
  }
  html += '</div>'; // .lh-hsk0-modules
  html += '</div>'; // .lh-tl-body
  html += '</div><div class="lh-tl-connector"></div>';

  // Truyện Mai (course lessons)
  if (typeof COURSE_DATA !== 'undefined') {
    var courseProgress = JSON.parse(localStorage.getItem('hsk_course_progress') || '{}');
    var courseIds = Object.keys(COURSE_DATA).map(Number).sort(function(a, b) { return a - b; });
    var courseDone = courseIds.filter(function(id) { return courseProgress[id] && courseProgress[id].completed; }).length;
    var courseTotal = courseIds.length;
    var coursePct = courseTotal > 0 ? Math.round(courseDone / courseTotal * 100) : 0;
    var courseActive = (courseDone > 0 && courseDone < courseTotal);
    var courseComplete = (courseDone >= courseTotal);

    // Truyện Mai = XƯƠNG SỐNG lộ trình (giáo trình tuần tự). Chưa xong = bước hiện tại.
    var courseCurrent = !courseComplete;
    var cls = 'lh-tl-node lh-tl-node--spine';
    if (courseCurrent) cls += ' lh-tl-node--active';
    else cls += ' lh-tl-node--done';

    html += '<button class="' + cls + '" onclick="Router.navigateTo(\'course\')">';
    html += '<div class="lh-tl-icon">📖</div>';
    html += '<div class="lh-tl-body">';
    html += '<div class="lh-tl-name">Truyện Mai <span class="lh-spine-tag">Giáo trình chính</span></div>';
    html += '<div class="lh-tl-progress"><div class="lh-tl-bar" style="width:' + coursePct + '%"></div></div>';
    html += '<div class="lh-tl-sub">' + courseDone + ' / ' + courseTotal + ' bài · học tuần tự';
    if (courseCurrent) html += ' &nbsp;<span class="lh-here-chip">Bạn ở đây</span>';
    html += '</div></div>';
    if (courseCurrent) html += '<div class="lh-tl-arrow-active">▶</div>';
    html += '</button><div class="lh-tl-connector"></div>';
  }

  // ── Kho từ vựng theo cấp — gom 1 khối off-path, mặc định thu gọn ──
  // (Từ vựng = material tra cứu/ôn, KHÔNG phải bước tuần tự → tách khỏi spine)
  var vTotal = 0, vLearned = 0;
  for (var lc = 1; lc <= count; lc++) {
    var wn = (hskData[lc] || []).length;
    vTotal += wn;
    vLearned += Math.min((progress[lc] || []).length, wn);
  }
  html += '<div class="lh-vocab-group" id="lhVocabGroup">';
  html += '<button class="lh-vocab-head" onclick="lhToggleVocabGroup()">';
  html += '<div class="lh-tl-icon">📚</div>';
  html += '<div class="lh-tl-body">';
  html += '<div class="lh-tl-name">Kho từ vựng theo cấp</div>';
  html += '<div class="lh-tl-sub">' + count + ' cấp · ' + vLearned + ' / ' + vTotal + ' từ · tra cứu & ôn</div>';
  html += '</div>';
  html += '<div class="lh-vocab-chevron">▾</div>';
  html += '</button>';
  html += '<div class="lh-vocab-list">';
  for (var lv = 1; lv <= count; lv++) {
    var words   = hskData[lv] || [];
    var total   = words.length;
    var learned = Math.min((progress[lv] || []).length, total);
    var pct     = total > 0 ? Math.round(learned / total * 100) : 0;
    var info    = levelInfo[lv] || { icon: '📕', label: 'HSK ' + lv };
    var isCur   = (lv === curLevel);
    var id      = 'sys_hsk' + lv;
    html += '<button class="lh-vocab-row' + (isCur ? ' lh-vocab-row--cur' : '') + '" onclick="learnHubOpenDeck(\'' + id + '\')">';
    html += '<span class="lh-vocab-ic">' + (info.icon || '📕') + '</span>';
    html += '<span class="lh-vocab-nm">' + (info.label || ('HSK ' + lv)) + '</span>';
    html += '<span class="lh-vocab-mini"><span class="lh-vocab-mini-bar" style="width:' + pct + '%"></span></span>';
    html += '<span class="lh-vocab-cnt">' + learned + '/' + total + (isCur ? ' · đang ôn' : '') + '</span>';
    html += '</button>';
  }
  html += '</div>'; // .lh-vocab-list
  html += '</div>'; // .lh-vocab-group

  html += '<button class="lh-tl-map-link" onclick="Router.navigateTo(\'ban-do-hsk\')">';
  html += '🗺️ Xem dạng Bản đồ HSK →</button>';

  container.innerHTML = html;
}
