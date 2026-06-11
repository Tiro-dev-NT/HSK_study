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
  _lhRenderMilestone();
  _lhRenderToday();
  _lhRenderTimeline();
  _lhRenderResources();

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

// ── Nudge: mốc output đã mở (ải chương / trùm cấp) ────
// Đẩy luyện tập theo mốc lên mặt tiền "Hôm nay" để người học không
// phải cuộn hết path /course mới thấy. Tắt khi đã đạt (done-state).
function _lhRenderMilestone() {
  var wrap = document.getElementById('lhMilestone');
  if (!wrap) return;
  var m = (typeof Course !== 'undefined' && Course.pendingMilestones)
    ? Course.pendingMilestones() : null;
  if (!m) { wrap.innerHTML = ''; return; }

  var icon = (typeof Icons !== 'undefined') ? Icons.get(m.isBoss ? 'trophy' : 'file-text', { size: 20 }) : '';
  wrap.innerHTML =
    '<button class="lh-milestone" onclick="lhMilestoneClick()">' +
      '<span class="lh-ms-icon">' + icon + '</span>' +
      '<span class="lh-ms-body">' +
        '<span class="lh-ms-title">' + m.label + ' đã mở khóa</span>' +
        '<span class="lh-ms-desc">' + m.desc + '</span>' +
      '</span>' +
      '<span class="lh-ms-cta">Làm ngay' + ((typeof Icons !== 'undefined') ? Icons.get('arrow-right', { size: 16 }) : '') + '</span>' +
    '</button>';
  window._lhMilestone = m;
}

function lhMilestoneClick() {
  var m = window._lhMilestone;
  if (!m || typeof Course === 'undefined' || !Course.openCheckpoint) {
    if (typeof Router !== 'undefined') Router.navigateTo('course');
    return;
  }
  Course.openCheckpoint(m.level, m.idx, m.isBoss);
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

  // ── Banner ôn lỗi (Sổ tay lỗi) — chỉ hiện khi có lỗi treo ──
  _lhRenderMistakeBanner();
}

function _lhRenderMistakeBanner() {
  var grid = document.getElementById('lhTodayGrid');
  if (!grid) return;
  var old = document.getElementById('lhMistakeBanner');
  if (old) old.remove();
  var n = (window.MistakeBook) ? MistakeBook.count() : 0;
  if (n <= 0) return;
  var b = document.createElement('button');
  b.id = 'lhMistakeBanner';
  b.className = 'lh-mistake-banner';
  b.onclick = function () { MistakeBook.review(); };
  b.innerHTML = '<span class="lh-mb-icon">' + ((typeof Icons !== 'undefined') ? Icons.get('file-text', { size: 20 }) : '') + '</span>' +
    '<span class="lh-mb-text">Bạn có <b>' + n + '</b> lỗi cần ôn lại</span>' +
    '<span class="lh-mb-cta">Ôn ngay' + ((typeof Icons !== 'undefined') ? Icons.get('arrow-right', { size: 16 }) : '') + '</span>';
  grid.insertAdjacentElement('afterend', b);
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

// ══════════════════════════════════════════════════════
// "Ôn tất cả" — gom card due + relearning TOÀN BỘ cấp/deck
// SRS lưu chung kho (hsk_srs_v3) nên chỉ cần quét srsData 1 lần.
// Chỉ gom card ĐẾN HẠN (đã học) → KHÔNG kéo từ MỚI → không đụng
// gate Pro (gate chỉ chặn học từ mới ở HSK 4+).
// ══════════════════════════════════════════════════════

// Trả về mảng hanzi đến hạn, sắp xếp: học lại trước → ôn (theo dueDate cũ nhất)
function getAllDueHanzi() {
  var srs   = (typeof AppState !== 'undefined' && AppState.srsData) ? AppState.srsData : {};
  var today = new Date().toISOString().split('T')[0];
  var relearn = [];
  var due     = [];
  Object.keys(srs).forEach(function(h) {
    var c = srs[h];
    if (!c || !c.dueDate || c.dueDate > today) return;   // chưa đến hạn / chưa học
    if ((c.lapses || 0) > 0) relearn.push({ h: h, d: c.dueDate });
    else                     due.push({ h: h, d: c.dueDate });
  });
  // dueDate cũ nhất trước (quá hạn lâu nhất ưu tiên)
  relearn.sort(function(a, b) { return a.d < b.d ? -1 : a.d > b.d ? 1 : 0; });
  due.sort(function(a, b)     { return a.d < b.d ? -1 : a.d > b.d ? 1 : 0; });
  return relearn.concat(due).map(function(x) { return x.h; });
}

// Bắt đầu phiên ôn tất cả: nạp hanzi list → reuse Session player qua learn page
function startReviewAllDue() {
  var hanzis = getAllDueHanzi();
  if (!hanzis.length) {
    var msg = (typeof AppState !== 'undefined' && AppState.lang === 'en')
      ? 'No cards due for review — great job! 🎉'
      : 'Không có từ nào đến hạn ôn — tuyệt vời! 🎉';
    if (typeof showToast === 'function') showToast(msg);
    else alert(msg);
    return;
  }
  try {
    sessionStorage.setItem('mv_learn_words', JSON.stringify(hanzis));
  } catch (e) {}
  if (typeof Router !== 'undefined') Router.navigateTo('learn');
}

// Cập nhật badge "Ôn tất cả" trên trang Luyện tập (ẩn card nếu 0 due)
function lhRefreshDueBadges() {
  var n      = getAllDueHanzi().length;
  var descEl = document.getElementById('practiceReviewDesc');
  // W5: status xuống dòng sub (desc, tone xám trung tính) thay vì dính title amber
  if (descEl) descEl.textContent = n > 0
    ? (n + ' thẻ đến hạn · gom mọi cấp vào 1 phiên')
    : 'Bạn đã ôn hết — quay lại sau nhé';
}

// ── Section 4: Supporting resources progress ──────────
// Hiển thị tiến độ thật cho 2 card Ngữ pháp + Đọc hiểu (HSK 1-6)
function _lhRenderResources() {
  // Grammar — đếm mẫu đã đánh dấu học / tổng mẫu mọi cấp
  var gBar = document.getElementById('lhGramBar');
  var gCnt = document.getElementById('lhGramCount');
  if (gBar && typeof GRAMMAR_DATA !== 'undefined') {
    var gTotal = 0;
    Object.keys(GRAMMAR_DATA).forEach(function(lv) { gTotal += (GRAMMAR_DATA[lv] || []).length; });
    var gProg = {};
    try { gProg = JSON.parse(localStorage.getItem('grammar_progress_v1') || '{}'); } catch (e) {}
    var gDone = 0;
    Object.keys(gProg).forEach(function(lv) {
      var lvObj = gProg[lv] || {};
      Object.keys(lvObj).forEach(function(id) { if (lvObj[id]) gDone++; });
    });
    var gPct = gTotal > 0 ? Math.round(gDone / gTotal * 100) : 0;
    gBar.style.width = gPct + '%';
    if (gCnt) gCnt.textContent = gDone > 0 ? (gDone + '/' + gTotal + ' mẫu câu') : (gTotal + ' mẫu câu');
  }

  // Reading — đếm bài đã hoàn thành câu hỏi / tổng bài mọi cấp
  var rBar = document.getElementById('lhReadBar');
  var rCnt = document.getElementById('lhReadCount');
  var rData = (typeof READINGS_DATA !== 'undefined') ? READINGS_DATA
            : (typeof READING_DATA !== 'undefined') ? READING_DATA : null;
  if (rBar && rData) {
    var rTotal = 0;
    Object.keys(rData).forEach(function(lv) { rTotal += (rData[lv] || []).length; });
    var rProg = {};
    try { rProg = JSON.parse(localStorage.getItem('reading_progress_v1') || '{}'); } catch (e) {}
    var rDone = Object.keys(rProg).filter(function(id) { return rProg[id]; }).length;
    var rPct = rTotal > 0 ? Math.round(rDone / rTotal * 100) : 0;
    rBar.style.width = rPct + '%';
    if (rCnt) rCnt.textContent = rDone > 0 ? (rDone + '/' + rTotal + ' bài đọc') : (rTotal + ' bài đọc');
  }

  // Sổ tay lỗi (Lát 5) — chỉ hiện card khi có lỗi treo
  var mCard = document.getElementById('lhMistakeCard');
  if (mCard) {
    var mN = (window.MistakeBook) ? MistakeBook.count() : 0;
    mCard.style.display = mN > 0 ? '' : 'none';
    var mCnt = document.getElementById('lhMistakeCount');
    if (mCnt) mCnt.textContent = mN + ' lỗi';
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
  // Collapse HSK 0 mặc định — chỉ expand cho người mới đặt placement=hsk0 chưa
  // qua (W4: 2 tín hiệu "bắt đầu" cạnh tranh — HSK0 6 chip vs Truyện Mai "Bạn ở đây").
  var _hsk0Passed = localStorage.getItem('hsk0_passed') === '1';
  var _placement  = localStorage.getItem('hsk_placement_level');
  var _maiProg = {};
  try { _maiProg = JSON.parse(localStorage.getItem('hsk_course_progress') || '{}'); } catch (e) {}
  var _hasMai = Object.keys(_maiProg).some(function(k) { return _maiProg[k] && _maiProg[k].completed; });
  var _hsk0Expand = (_placement === 'hsk0') && !_hsk0Passed && !_hasMai;

  var _ic = function(name, size) { return (typeof Icons !== 'undefined') ? Icons.get(name, { size: size || 18 }) : ''; };
  html += '<div class="lh-tl-node lh-tl-node--hsk0' + (_hsk0Expand ? '' : ' lh-tl-node--hsk0-collapsed') + '">';
  html += '<div class="lh-tl-icon">' + _ic('star', 20) + '</div>';
  html += '<div class="lh-tl-body">';
  html += '<div class="lh-tl-name">HSK 0 · Nhập Môn</div>';
  html += '<div class="lh-tl-sub">Thanh điệu · Pinyin · Nét viết · Số đếm</div>';
  if (!_hsk0Expand) {
    html += '<button class="lh-hsk0-toggle" onclick="this.closest(\'.lh-tl-node--hsk0\').classList.toggle(\'lh-tl-node--hsk0-collapsed\')">Xem 6 mục nhập môn <span class="lh-hsk0-tog-chev">' + _ic('chevron-right', 14) + '</span></button>';
  }
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
    html += '<div class="lh-tl-icon">' + _ic('book-open', 20) + '</div>';
    html += '<div class="lh-tl-body">';
    html += '<div class="lh-tl-name">Truyện Mai <span class="lh-spine-tag">Giáo trình chính</span></div>';
    html += '<div class="lh-tl-progress"><div class="lh-tl-bar" style="width:' + coursePct + '%"></div></div>';
    html += '<div class="lh-tl-sub">' + courseDone + ' / ' + courseTotal + ' bài · học tuần tự';
    if (courseCurrent) html += ' &nbsp;<span class="lh-here-chip">Bạn ở đây</span>';
    html += '</div></div>';
    if (courseCurrent) html += '<div class="lh-tl-arrow-active">' + _ic('play', 16) + '</div>';
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
  html += '<div class="lh-tl-icon">' + _ic('layers', 20) + '</div>';
  html += '<div class="lh-tl-body">';
  html += '<div class="lh-tl-name">Kho từ vựng theo cấp</div>';
  html += '<div class="lh-tl-sub">' + count + ' cấp · ' + vLearned + ' / ' + vTotal + ' từ · tra cứu & ôn</div>';
  html += '</div>';
  html += '<div class="lh-vocab-chevron">' + _ic('chevron-right', 16) + '</div>';
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
    html += '<span class="lh-vocab-dot" style="background:var(--hsk-' + lv + ')">' + lv + '</span>';
    html += '<span class="lh-vocab-nm">' + (info.label || ('HSK ' + lv)) + '</span>';
    html += '<span class="lh-vocab-mini"><span class="lh-vocab-mini-bar" style="width:' + pct + '%"></span></span>';
    html += '<span class="lh-vocab-cnt">' + learned + '/' + total + (isCur ? ' · đang ôn' : '') + '</span>';
    html += '</button>';
  }
  html += '</div>'; // .lh-vocab-list
  html += '</div>'; // .lh-vocab-group

  html += '<button class="lh-tl-map-link" onclick="Router.navigateTo(\'ban-do-hsk\')">';
  html += _ic('map', 16) + ' Xem dạng Bản đồ HSK' + _ic('arrow-right', 14) + '</button>';

  container.innerHTML = html;
}
