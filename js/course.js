// ═══════════════════════════════════════════════════════
// COURSE.JS — Lesson Player (Phase P — Truyện Mai)
// Entry: Course.init() called by router after fragment inject
// Requires: COURSE_DATA, srsData, loadSRS, saveSRS,
//           Gamification.addXP, Router.navigateTo
// ═══════════════════════════════════════════════════════

// ── Audio host (Mai TTS) ────────────────────────────────
// Để rỗng '' = phục vụ audio local từ assets/mai/audio/ (mặc định, không vỡ gì).
// Để rỗng '' = phục vụ local từ assets/mai/audio/ (fallback dev offline).
// Production: trỏ R2 CDN (egress free). File trên R2 giữ cấu trúc:
//   <base>mai/audio/L<id>_<slug>.mp3
// Upload audio mới: rclone copy assets/mai/audio → r2:hanzigenz-assets/mai/audio
var MAI_AUDIO_BASE = 'https://cdn.hanzigenz.com/';

// ── Visual-novel cast registry ──────────────────────────
var VN_CHARACTERS = {
  narrator: { name: 'Người dẫn', role: '',           emoji: '📖', color: '#F59E0B', img: '',                              pitch: 1,    rate: 0.9  },
  laoli:    { name: '李老师',    role: 'Giáo viên',  emoji: '👨‍🏫', color: '#1F2937', img: 'assets/mai/cast/laoli.webp',    pitch: 0.7,  rate: 0.85 },
  mai:      { name: 'Mai',       role: 'Học sinh',   emoji: '👧',  color: '#DC2626', img: '',                              pitch: 1.25, rate: 0.95 },
  xiaomei:  { name: '小美',      role: 'Bạn học',    emoji: '👩',  color: '#10B981', img: 'assets/mai/cast/xiaomei.webp',  pitch: 1.4,  rate: 1.0  },
  // HSK 3 cast bổ sung (Phase P) — img có emoji fallback nếu ảnh chưa gen
  mama:     { name: '妈妈',      role: 'Mẹ Mai',     emoji: '👩‍🦰', color: '#B45309', img: 'assets/mai/cast/mama.webp',     pitch: 1.05, rate: 0.9  },
  fuwuyuan: { name: '服务员',    role: 'Phục vụ',    emoji: '🧑‍💼', color: '#0EA5E9', img: 'assets/mai/cast/fuwuyuan.webp', pitch: 1.1,  rate: 1.0  },
  yisheng:  { name: '医生',      role: 'Bác sĩ',     emoji: '🧑‍⚕️', color: '#0D9488', img: 'assets/mai/cast/yisheng.webp',  pitch: 0.85, rate: 0.9  },
  class:    { name: 'Cả lớp',    role: '',           emoji: '👥',  color: '#6B7280', img: '',                              pitch: 1,    rate: 1.0  }
};

// ── Level + chapter definitions (Truyện Mai path) ───────
// Mỗi cấp HSK = 1 tab. Bài thuộc cấp theo COURSE_DATA[id].level
// (bài HSK 1 cũ KHÔNG có field level → mặc định coi là cấp 1).
// `from`/`to` = khoảng ID bài trong cấp đó. Chỉ cosmetic (gom chương);
// node hiển thị tên bài thật nên ranh giới chương không cần khớp tuyệt đối.
var COURSE_LEVELS = [
  {
    level: 1, label: 'HSK 1',
    chapters: [
      { label: 'Câu chuyện chính', from: 1,  to: 12 },
      { label: 'Củng cố từ vựng',  from: 13, to: 21 },
      { label: 'Đọc thêm',         from: 22, to: 30 }
    ]
  },
  {
    level: 2, label: 'HSK 2',
    chapters: [
      { label: 'Hành động & đời sống', from: 31, to: 46 },
      { label: 'Mở rộng từ vựng',      from: 47, to: 65 },
      { label: 'Đọc thêm',             from: 66, to: 71 }
    ]
  },
  {
    level: 3, label: 'HSK 3', pro: true,
    chapters: [
      { label: 'Hành động & cuộc sống', from: 72, to: 89  },
      { label: 'Từ chức năng & tính từ', from: 90, to: 110 },
      { label: 'Chủ đề & đọc thêm',      from: 111, to: 121 }
    ]
  },
  {
    level: 4, label: 'HSK 4', pro: true,
    chapters: [
      { label: 'Kỳ thực tập',           from: 122, to: 133 },
      { label: 'Dự án & trưởng thành',  from: 134, to: 149 },
      { label: 'Chủ đề & đọc thêm',     from: 150, to: 154 }
    ]
  }
];

var Course = {

  // ── State ──────────────────────────────────────────
  lessonId:          null,
  lesson:            null,
  step:              0,      // index into lesson.steps[]
  phase:             'intro', // intro|dialogue|checkpoint|vocab|workbook|complete
  difficulty:        'normal',
  checkpointAnswers: {},
  workbookAnswers:   {},
  workbookScore:     0,
  _srsAdded:         false,
  _pendingId:        null,   // set before Router.navigateTo('course') for in-app nav
  _proOK:            null,   // lessonId đã xác nhận Pro async (tránh gate loop)
  _selectedLevel:    null,   // tab cấp HSK đang xem ở renderList (null = auto)
  _showPinyin:       true,   // VN pinyin toggle (persists across steps)
  _showVi:           true,   // VN nghĩa-Việt toggle (persists across steps)

  // ── Entry point ─────────────────────────────────────
  init: function() {
    var urlId = new URLSearchParams(location.search).get('id');
    var id = Course._pendingId || (urlId ? parseInt(urlId, 10) : null);
    Course._pendingId = null;

    if (!id) {
      Course.renderList();
      return;
    }
    if (typeof isDebtBlocked === 'function' && isDebtBlocked()) {
      Course._renderDebtWarning(id);
      return;
    }
    Course.loadLesson(id);
  },

  // Cấp HSK của 1 bài (bài HSK 1 cũ không có field level → mặc định 1)
  _levelOf: function(id) {
    var l = (typeof COURSE_DATA !== 'undefined') ? COURSE_DATA[id] : null;
    return (l && l.level) ? l.level : 1;
  },

  // Đổi tab cấp HSK
  _selectLevel: function(lv) {
    Course._selectedLevel = lv;
    Course.renderList();
    var el = Course._getEl();
    if (el && el.scrollIntoView) try { el.scrollIntoView({ block: 'start' }); } catch (e) {}
  },

  // ── Lesson list view (tab cấp HSK + Duolingo-style path) ───
  renderList: function() {
    var progress = JSON.parse(localStorage.getItem('hsk_course_progress') || '{}');
    var allIds = (typeof COURSE_DATA !== 'undefined')
      ? Object.keys(COURSE_DATA).map(Number).sort(function(a, b) { return a - b; })
      : [];

    // Số bài có data theo từng cấp (để hiện trên tab + biết cấp nào "sắp ra mắt")
    var levelCounts = {};
    for (var a = 0; a < allIds.length; a++) {
      var lv0 = Course._levelOf(allIds[a]);
      levelCounts[lv0] = (levelCounts[lv0] || 0) + 1;
    }

    // Cấp được chọn (mặc định = cấp của bài dở đầu tiên, hoặc cấp 1)
    if (Course._selectedLevel == null) {
      var gNext = null;
      for (var g = 0; g < allIds.length; g++) {
        var gid = allIds[g];
        if (!(progress[gid] && progress[gid].completed)) { gNext = gid; break; }
      }
      Course._selectedLevel = gNext ? Course._levelOf(gNext) : 1;
    }
    var sel = Course._selectedLevel;
    var levelCfg = null;
    for (var c = 0; c < COURSE_LEVELS.length; c++) {
      if (COURSE_LEVELS[c].level === sel) { levelCfg = COURSE_LEVELS[c]; break; }
    }
    var levelLabel = levelCfg ? levelCfg.label : ('HSK ' + sel);

    // Bài thuộc cấp đang chọn
    var ids = allIds.filter(function(id) { return Course._levelOf(id) === sel; });
    var totalLessons = ids.length;
    var completedCount = 0;
    var levelNext = null;   // bài dở đầu tiên TRONG cấp này
    for (var i = 0; i < ids.length; i++) {
      if (progress[ids[i]] && progress[ids[i]].completed) completedCount++;
      else if (levelNext === null) levelNext = ids[i];
    }

    var html = '<div class="cs-header">' +
      '<button class="cs-back" onclick="Course._goBack()">← Quay lại</button>' +
      '<span class="cs-lesson-num">Truyện Mai — ' + escapeHtml(levelLabel) + '</span>' +
      '<span class="cs-path-progress">' + completedCount + '/' + totalLessons + ' bài</span>' +
    '</div>';

    html += '<div class="cs-path">';

    // ── Tabs cấp HSK ──────────────────────────────────────
    html += '<div class="cs-tabs">';
    for (var t = 0; t < COURSE_LEVELS.length; t++) {
      var lc = COURSE_LEVELS[t];
      var cnt = levelCounts[lc.level] || 0;
      var locked = lc.comingSoon || cnt === 0;
      var cls = 'cs-tab' + (lc.level === sel ? ' cs-tab--active' : '') + (locked ? ' cs-tab--locked' : '');
      var sub = locked ? 'sắp ra mắt' : (cnt + ' bài');
      html += '<button class="' + cls + '"' +
        (locked ? ' disabled' : ' onclick="Course._selectLevel(' + lc.level + ')"') + '>' +
        escapeHtml(lc.label) + ' <span class="cs-tab-count">' + sub + '</span>' +
      '</button>';
    }
    html += '</div>';

    // ── Hero: bước tiếp theo TRONG cấp đang chọn ──────────
    if (totalLessons === 0) {
      html += '<div class="cs-path-hero cs-path-hero--done">' +
        '<div class="cs-hero-label">🚧 Sắp ra mắt</div>' +
        '<div class="cs-hero-title">' + escapeHtml(levelLabel) + ' đang được biên soạn</div>' +
        '<div class="cs-hero-context">Hãy hoàn thành các cấp hiện có trước nhé!</div>' +
      '</div>';
    } else if (levelNext !== null) {
      var nextLesson = COURSE_DATA[levelNext];
      var isInProgress = progress[levelNext] && !progress[levelNext].completed && (progress[levelNext].step || 0) > 0;
      html += '<div class="cs-path-hero">' +
        '<div class="cs-hero-label">' + (isInProgress ? '▶ Đang học dở' : '📍 Bước tiếp theo') + '</div>' +
        '<div class="cs-hero-title">Bài ' + levelNext + ' — ' + escapeHtml(nextLesson.title) + '</div>' +
        '<div class="cs-hero-context">' + escapeHtml(nextLesson.context || '') + '</div>' +
        '<button class="cs-hero-btn" onclick="Course.loadLesson(' + levelNext + ')">' +
          (isInProgress ? '▶ Học tiếp' : '▶ Bắt đầu') +
        '</button>' +
      '</div>';
    } else {
      html += '<div class="cs-path-hero cs-path-hero--done">' +
        '<div class="cs-hero-label">🎉 Hoàn thành!</div>' +
        '<div class="cs-hero-title">Bạn đã học xong ' + escapeHtml(levelLabel) + '</div>' +
        '<div class="cs-hero-context">Tuyệt vời! Chuyển sang cấp kế hoặc ôn tập lại nhé.</div>' +
      '</div>';
    }

    // ── Chương + node (node hiện kèm tên bài) ─────────────
    var chapters = (levelCfg && levelCfg.chapters) ? levelCfg.chapters : [];
    var checkpoints = Course._checkpoints();
    var lessonSeq = 0;   // đếm bài xuyên chương → chèn "Ôn tổng hợp" mỗi ~5 bài (Lát 4)
    var lastOverallId = ids.length ? ids[ids.length - 1] : null;
    for (var ci = 0; ci < chapters.length; ci++) {
      var chapter = chapters[ci];
      var chapterIds = [];
      var chapterDone = 0;

      for (var j = 0; j < ids.length; j++) {
        var lid = ids[j];
        if (lid >= chapter.from && lid <= chapter.to) {
          chapterIds.push(lid);
          if (progress[lid] && progress[lid].completed) chapterDone++;
        }
      }
      if (chapterIds.length === 0) continue;

      var chapterTotal = chapterIds.length;
      var chapterPct = Math.round(chapterDone / chapterTotal * 100);

      html += '<div class="cs-chapter">' +
        '<div class="cs-chapter-header">' +
          '<span class="cs-chapter-label">Chương ' + (ci + 1) + '</span>' +
          '<span class="cs-chapter-title">' + escapeHtml(chapter.label) + '</span>' +
          '<span class="cs-chapter-count">' + chapterDone + '/' + chapterTotal + '</span>' +
        '</div>' +
        '<div class="cs-chapter-bar"><div class="cs-chapter-fill" style="width:' + chapterPct + '%"></div></div>' +
        '<div class="cs-nodes cs-nodes--list">';

      for (var k = 0; k < chapterIds.length; k++) {
        var nid = chapterIds[k];
        var lesson = COURSE_DATA[nid];
        var prog = progress[nid];
        var isDone = prog && prog.completed;
        var isCurrent = (nid === levelNext);
        var isLocked = !isDone && !isCurrent && levelNext !== null && nid > levelNext;

        var circleClass = 'cs-node';
        var rowClass = 'cs-node-row';
        var nodeIcon = nid;
        if (isDone)        { circleClass += ' cs-node--done';    rowClass += ' cs-node-row--done';   nodeIcon = '✓'; }
        else if (isCurrent){ circleClass += ' cs-node--current'; }
        else if (isLocked) { circleClass += ' cs-node--locked';  rowClass += ' cs-node-row--locked'; }

        html += '<button class="' + rowClass + '" ' +
          'onclick="Course._handleNodeClick(' + nid + ', ' + isLocked + ', ' + (levelNext || 0) + ')" ' +
          'title="Bài ' + nid + ': ' + escapeAttr(lesson.title) + '">' +
          '<span class="' + circleClass + '"><span class="cs-node-icon">' + nodeIcon + '</span></span>' +
          '<span class="cs-node-row-title">Bài ' + nid + ' — ' + escapeHtml(lesson.title) + '</span>' +
        '</button>';

        // ── Ôn tổng hợp xen kẽ (Lát 4): mỗi ~5 bài kéo từ bài CŨ về ──
        lessonSeq++;
        var isLastInChapter = (k === chapterIds.length - 1);
        if (lessonSeq % 5 === 0 && !isLastInChapter && nid !== lastOverallId) {
          html += Course._reviewNodeHTML(sel, nid, lessonSeq / 5, progress);
        }
      }

      html += '</div></div>'; // .cs-nodes, .cs-chapter
      html += Course._aiNodeHTML(sel, ci, chapterDone, chapterTotal, checkpoints);
    }

    // Trùm cuối cấp — chỉ hiện khi đã xong hết bài của cấp
    if (totalLessons > 0 && completedCount === totalLessons) {
      html += Course._bossNodeHTML(sel, checkpoints);
    }

    html += '</div>'; // .cs-path

    Course._getEl().innerHTML = html;
  },

  _handleNodeClick: function(id, isLocked, nextId) {
    if (isLocked && nextId) {
      var ok = confirm('Bài này đang khóa. Nên học Bài ' + nextId + ' trước.\n\nVẫn muốn mở?');
      if (!ok) return;
    }
    Course.loadLesson(id);
  },

  // ── Output checkpoint: ải chương + trùm cấp (Lát 2) ──────
  _checkpoints: function() {
    try { return JSON.parse(localStorage.getItem('hsk_course_checkpoints') || '{}'); }
    catch (e) { return {}; }
  },

  // Mở mini-mock (ải) / mock đầy đủ (trùm) qua handoff sessionStorage
  openCheckpoint: function(level, idx, isBoss) {
    var key = 'hsk' + level + (isBoss ? '_boss' : '_ch' + idx);
    var payload = {
      level: level,
      count: isBoss ? 16 : 10,
      key: key,
      isBoss: !!isBoss,
      title: isBoss ? ('Trùm cấp HSK ' + level) : ('Ải Chương ' + (idx + 1))
    };
    try { sessionStorage.setItem('hsk_course_checkpoint', JSON.stringify(payload)); } catch (e) {}
    if (typeof Router !== 'undefined') Router.navigateTo('mock-exam');
  },

  _aiNodeHTML: function(level, ci, done, total, cps) {
    var key    = 'hsk' + level + '_ch' + ci;
    var passed = !!(cps[key] && cps[key].passed);
    var ready  = total > 0 && done >= total;
    var cls = 'cs-node-row cs-node-row--checkpoint';
    var icon, sub, circle = '', click = '';
    if (passed) {
      cls += ' cs-node-row--done'; icon = '✓'; circle = ' cs-node--done';
      sub = 'Ải Chương ' + (ci + 1) + ' — đã đạt ✓';
      click = 'Course.openCheckpoint(' + level + ',' + ci + ',false)';
    } else if (ready) {
      icon = '📝'; circle = ' cs-node--current';
      sub = 'Ải Chương ' + (ci + 1) + ' — Thi thử Nghe + Đọc';
      click = 'Course.openCheckpoint(' + level + ',' + ci + ',false)';
    } else {
      cls += ' cs-node-row--locked'; icon = '🔒'; circle = ' cs-node--locked';
      sub = 'Ải Chương ' + (ci + 1) + ' — hoàn thành chương để mở';
    }
    return '<div class="cs-checkpoint-wrap"><button class="' + cls + '"' +
      (click ? ' onclick="' + click + '"' : ' disabled') + '>' +
      '<span class="cs-node' + circle + '"><span class="cs-node-icon">' + icon + '</span></span>' +
      '<span class="cs-node-row-title">' + sub + '</span>' +
    '</button></div>';
  },

  _bossNodeHTML: function(level, cps) {
    var key    = 'hsk' + level + '_boss';
    var passed = !!(cps[key] && cps[key].passed);
    var icon   = passed ? '✓' : '🏆';
    var circle = passed ? ' cs-node--done' : ' cs-node--current';
    var sub    = passed
      ? ('Trùm cấp HSK ' + level + ' — đã chinh phục ✓')
      : ('Trùm cấp HSK ' + level + ' — Mock đầy đủ');
    var band = level <= 2 ? 'Sơ cấp' : level <= 4 ? 'Trung cấp' : 'Cao cấp';
    return '<div class="cs-chapter cs-chapter--boss">' +
      '<div class="cs-chapter-header"><span class="cs-chapter-label">🏁 Trạm cuối cấp</span></div>' +
      '<div class="cs-nodes cs-nodes--list">' +
        '<button class="cs-node-row cs-node-row--checkpoint cs-node-row--boss' + (passed ? ' cs-node-row--done' : '') + '"' +
          ' onclick="Course.openCheckpoint(' + level + ',0,true)">' +
          '<span class="cs-node' + circle + '"><span class="cs-node-icon">' + icon + '</span></span>' +
          '<span class="cs-node-row-title">' + sub + '</span>' +
        '</button>' +
        '<button class="cs-node-row cs-node-row--checkpoint" onclick="Router.navigateTo(\'hskk\')">' +
          '<span class="cs-node"><span class="cs-node-icon">🎙️</span></span>' +
          '<span class="cs-node-row-title">Luyện thi nói HSKK ' + band + '</span>' +
        '</button>' +
      '</div></div>';
  },

  // ── Ôn tổng hợp xen kẽ (Lát 4) ───────────────────────────
  // Khác "ải chương" (kiểm bài hiện tại): node này gom vocab các BÀI ĐÃ HỌC
  // trước điểm chèn → trộn lại (interleaving + spaced retrieval), kéo bài cũ về.
  _reviewWords: function(level, uptoId) {
    var out = [], seen = {};
    if (typeof COURSE_DATA === 'undefined') return out;
    var progress = JSON.parse(localStorage.getItem('hsk_course_progress') || '{}');
    var ids = Object.keys(COURSE_DATA).map(Number).sort(function(a, b) { return a - b; });
    for (var i = 0; i < ids.length; i++) {
      var id = ids[i];
      if (id > uptoId || Course._levelOf(id) !== level) continue;
      if (!(progress[id] && progress[id].completed)) continue;
      var voc = (COURSE_DATA[id] && COURSE_DATA[id].vocab) || [];
      for (var j = 0; j < voc.length; j++) {
        var w = voc[j];
        if (w && w.h && !seen[w.h]) {
          seen[w.h] = 1;
          out.push({ h: w.h, p: w.p || '', v: w.v || w.e || '' });
        }
      }
    }
    return out;
  },

  // Mở quiz ôn trộn — tái dùng override Phase Q (như MistakeBook.review)
  openReview: function(level, uptoId) {
    var words = Course._reviewWords(level, uptoId);
    if (!words.length) return;
    if (typeof shuffle === 'function') words = shuffle(words);
    if (words.length > 20) words = words.slice(0, 20);   // giữ phiên ngắn, trộn ngẫu nhiên
    try { sessionStorage.setItem('hsk_quiz_override_words', JSON.stringify(words)); } catch (e) {}
    if (typeof Router !== 'undefined') Router.navigateTo('quiz');
  },

  _reviewNodeHTML: function(level, uptoId, seq, progress) {
    var ready = !!(progress[uptoId] && progress[uptoId].completed);
    var cls = 'cs-node-row cs-node-row--checkpoint cs-node-row--review';
    var icon, sub, circle, click = '';
    if (ready) {
      var n = Course._reviewWords(level, uptoId).length;
      if (n < 4) return '';   // chưa đủ từ để ôn có ý nghĩa — bỏ qua node
      icon = '🔄'; circle = ' cs-node--current';
      sub = 'Ôn tổng hợp #' + seq + ' — trộn ' + Math.min(n, 20) + ' từ các bài đã học';
      click = 'Course.openReview(' + level + ',' + uptoId + ')';
    } else {
      cls += ' cs-node-row--locked'; icon = '🔒'; circle = ' cs-node--locked';
      sub = 'Ôn tổng hợp #' + seq + ' — học các bài trước để mở';
    }
    return '<div class="cs-checkpoint-wrap"><button class="' + cls + '"' +
      (click ? ' onclick="' + click + '"' : ' disabled') + '>' +
      '<span class="cs-node' + circle + '"><span class="cs-node-icon">' + icon + '</span></span>' +
      '<span class="cs-node-row-title">' + sub + '</span>' +
    '</button></div>';
  },

  loadLesson: function(id) {
    // ── Pro-gate HSK 3+ (lesson.level >= 3) ──────────────
    // Server-side là nguồn sự thật: Monetization.isPro() resolve qua Supabase
    // (RPC), không tin localStorage. isProSync() chỉ là cache đã warm để tránh
    // nháy màn; nếu cache chưa chắc Pro → check async trước khi cho vào.
    var ld = (typeof COURSE_DATA !== 'undefined') ? COURSE_DATA[id] : null;
    if (ld && ld.level >= 3 && Course._proOK !== id && typeof Monetization !== 'undefined') {
      if (!Monetization.isProSync()) {
        Monetization.isPro().then(function(pro) {
          if (pro) { Course._proOK = id; Course.loadLesson(id); }
          else { Course._renderProGate(id); }
        });
        return;
      }
    }
    Course._proOK = null;

    Course.lessonId   = id;
    Course.step       = 0;
    Course.phase      = 'intro';
    Course.difficulty = 'normal';
    Course.checkpointAnswers = {};
    Course.workbookAnswers   = {};
    Course.workbookScore     = 0;
    Course._srsAdded  = false;
    Course.lesson     = (typeof COURSE_DATA !== 'undefined') ? COURSE_DATA[id] : null;

    if (!Course.lesson) {
      Course._renderComingSoon(id);
      return;
    }
    // Sync URL so refresh / bookmark / "Bài tiếp theo" resume the right lesson.
    // replaceState (not push) → no extra history entry, matches old in-place behavior.
    try { history.replaceState({ page: 'course', id: id }, '', '/course?id=' + id); } catch (e) {}
    Course._loadProgress();
    Course.render();
  },

  // ── Master render dispatcher ────────────────────────
  render: function() {
    var fns = {
      intro:       Course._renderIntro,
      dialogue:    Course._renderDialogue,
      choice:      Course._renderChoiceVN,
      checkpoint:  Course._renderCheckpoint,
      vocab:       Course._renderVocab,
      workbook:    Course._renderWorkbook,
      complete:    Course._renderComplete
    };
    if (fns[Course.phase]) fns[Course.phase]();
  },

  // ── Navigation ──────────────────────────────────────
  next: function() {
    if (Course.phase === 'intro') {
      Course.phase = 'dialogue';
      Course.step  = 0;
      Course._saveProgress();
      Course.render();
      return;
    }
    if (Course.phase === 'dialogue') {
      Course.step++;
      var steps = Course.lesson.steps;
      if (Course.step >= steps.length) {
        Course.phase = 'vocab';
      } else if (steps[Course.step].type === 'checkpoint') {
        Course.phase = 'checkpoint';
        Course.checkpointAnswers = {};
      } else if (steps[Course.step].type === 'choice') {
        Course.phase = 'choice';
      } else {
        Course.phase = 'dialogue';
      }
      Course._saveProgress();
      Course.render();
      return;
    }
    if (Course.phase === 'choice') {
      return;
    }
    if (Course.phase === 'checkpoint') {
      // only advance after all questions answered — handled in _answerCheckpoint
      return;
    }
    if (Course.phase === 'vocab') {
      Course.phase = 'workbook';
      Course._saveProgress();
      Course.render();
      return;
    }
  },

  prev: function() {
    if ((Course.phase === 'dialogue' || Course.phase === 'choice') && Course.step > 0) {
      Course.step--;
      // Skip back over checkpoints and choices
      var s = Course.lesson.steps[Course.step];
      if (s && (s.type === 'checkpoint' || s.type === 'choice')) Course.step--;
      if (Course.step < 0) Course.step = 0;
      Course.phase = 'dialogue';
      Course.render();
    }
  },

  // ── Speaker label ────────────────────────────────────
  _speakerLabel: function(speaker) {
    var map = { mai: 'Mai', laoli: '李老师 (Thầy Lý)', xiaomei: '小美 (Tiểu Mỹ)', class: 'Cả lớp' };
    return map[speaker] || speaker;
  },

  // ── Mai expression image ─────────────────────────────
  _maiImg: function(expression) {
    var valid = ['happy','sad','surprise','curious','focused','confused'];
    var expr  = (expression && valid.indexOf(expression) !== -1) ? expression : 'happy';
    return 'assets/mai/expressions/' + expr + '.webp';
  },

  // ── PHASE: intro ────────────────────────────────────
  _renderIntro: function() {
    var l = Course.lesson;
    var chips = (l.vocabPreview || []).map(function(w) {
      return '<span class="cs-vocab-chip">' + w + '</span>';
    }).join('');

    // Phase 1 (A5) — Card ôn pinyin, CHỈ ở bài đầu khoá HSK 1
    var pinyinCard = '';
    if (l.id === 1 && Course._levelOf(l.id) === 1) {
      pinyinCard =
        '<div class="cs-pinyin-link-card">' +
          '<div class="cs-plc-head">🔤 Chưa chắc pinyin? Ôn nhanh 5 phút</div>' +
          '<div class="cs-plc-btns">' +
            '<button class="cs-plc-btn" onclick="Router.navigateTo(\'hsk0-pinyin-initials\')">Thanh mẫu</button>' +
            '<button class="cs-plc-btn" onclick="Router.navigateTo(\'hsk0-pinyin-finals\')">Vận mẫu</button>' +
            '<button class="cs-plc-btn" onclick="Router.navigateTo(\'hsk0-strokes\')">Nét cơ bản</button>' +
          '</div>' +
        '</div>';
    }

    // Phase 2 (A1) — Mục tiêu bài học
    var objHTML = '';
    if (l.objectives && l.objectives.length) {
      objHTML =
        '<div class="cs-objectives">' +
          '<div class="cs-objectives-label">🎯 Mục tiêu bài này</div>' +
          '<ul class="cs-objectives-list">' +
            l.objectives.map(function(o) { return '<li>' + o + '</li>'; }).join('') +
          '</ul>' +
        '</div>';
    }

    // Phase 2 (A3) — Nút mở khối ngữ pháp
    var grammarBtn = (l.grammarNotes && l.grammarNotes.length)
      ? '<button class="cs-btn-secondary cs-grammar-btn" onclick="Course._showGrammar()">📘 Ngữ pháp bài</button>'
      : '';

    Course._getEl().innerHTML =
      '<div class="cs-header">' +
        '<button class="cs-back" onclick="Course._goBack()">← Quay lại</button>' +
        '<span class="cs-lesson-num">Bài ' + l.id + '</span>' +
      '</div>' +
      '<div class="cs-intro">' +
        '<div class="cs-intro-scene">' +
          '<img src="' + Course._maiImg('happy') + '" alt="Mai" class="cs-mai-img" onerror="this.src=\'assets/icon-soft.webp\'">' +
        '</div>' +
        '<h2 class="cs-intro-title">' + l.title + '</h2>' +
        '<p class="cs-intro-context">' + l.context + '</p>' +
        pinyinCard +
        objHTML +
        '<div class="cs-intro-vocab">' +
          '<div class="cs-intro-vocab-label">Từ vựng sẽ gặp</div>' +
          '<div class="cs-vocab-chips">' + chips + '</div>' +
        '</div>' +
        '<button class="cs-btn-primary cs-start-btn" onclick="Course.next()">▶ Bắt đầu học</button>' +
        grammarBtn +
        '<button class="cs-btn-secondary cs-handout-btn" onclick="Handout.open(' + l.id + ')">📔 Trang chép bài</button>' +
      '</div>';
  },

  // ── Grammar notes (A3) — block HTML dùng chung modal + complete ──
  _grammarNotesHTML: function() {
    var l = Course.lesson;
    if (!l || !l.grammarNotes || !l.grammarNotes.length) return '';
    var items = l.grammarNotes.map(function(g) {
      var ex = (g.examples || []).map(function(e) {
        return '<div class="cs-gn-ex">' +
          '<span class="cs-gn-ex-zh">' + (e.zh || '') + '</span>' +
          (e.py ? '<span class="cs-gn-ex-py">' + e.py + '</span>' : '') +
          (e.vi ? '<span class="cs-gn-ex-vi">' + e.vi + '</span>' : '') +
        '</div>';
      }).join('');
      return '<div class="cs-grammar-note">' +
        '<div class="cs-gn-point">' + g.point + '</div>' +
        '<div class="cs-gn-explain">' + g.explain + '</div>' +
        (ex ? '<div class="cs-gn-examples">' + ex + '</div>' : '') +
      '</div>';
    }).join('');
    return '<div class="cs-grammar-block">' +
      '<div class="cs-grammar-title">📘 Ngữ pháp bài này</div>' +
      items +
    '</div>';
  },

  _showGrammar: function() {
    var inner = Course._grammarNotesHTML();
    if (!inner) return;
    Course._closeGrammar();
    var ov = document.createElement('div');
    ov.className = 'cs-grammar-modal';
    ov.id = 'cs-grammar-modal';
    ov.onclick = function(e) { if (e.target === ov) Course._closeGrammar(); };
    ov.innerHTML =
      '<div class="cs-grammar-modal-box">' +
        '<button class="cs-grammar-modal-close" onclick="Course._closeGrammar()" aria-label="Đóng">✕</button>' +
        inner +
      '</div>';
    document.body.appendChild(ov);
  },

  _closeGrammar: function() {
    var ov = document.getElementById('cs-grammar-modal');
    if (ov && ov.parentNode) ov.parentNode.removeChild(ov);
  },

  // ── PHASE: dialogue ──────────────────────────────────
  _renderDialogue: function() {
    var l     = Course.lesson;
    var steps = l.steps;
    var s     = steps[Course.step];
    if (!s || s.type !== 'dialogue') { Course.phase = 'vocab'; Course.render(); return; }

    // Dispatch to visual-novel renderer when step has cast data
    if (s.cast && s.cast.length) {
      Course._renderDialogueVN();
      return;
    }

    // ── Legacy single-Mai renderer (steps without cast field) ──
    var dialogueSteps = steps.filter(function(x) { return x.type === 'dialogue'; }).length;
    var dialogueDone  = steps.slice(0, Course.step + 1).filter(function(x) { return x.type === 'dialogue'; }).length;
    var pct           = Math.round((dialogueDone / (dialogueSteps || 1)) * 50);

    var isMai    = (s.speaker === 'mai');
    var expr     = isMai ? s.expression : null;
    var sceneClass = isMai ? '' : (s.speaker === 'laoli' || s.speaker === 'xiaomei') ? ' cs-scene--teacher' : ' cs-scene--class';
    var dotsHTML = isMai
      ? '<div class="cs-speaking-dots"><span></span><span></span><span></span></div>'
      : '';

    Course._getEl().innerHTML =
      '<div class="cs-header">' +
        '<button class="cs-back" onclick="Course._goBack()">← Quay lại</button>' +
        '<span class="cs-lesson-num">Bài ' + l.id + ': ' + l.title + '</span>' +
        '<div class="cs-progress-wrap"><div class="cs-progress-bar" style="width:' + pct + '%"></div></div>' +
      '</div>' +
      '<div class="cs-scene' + sceneClass + '" id="cs-scene-wrap">' +
        '<img src="' + Course._maiImg(expr) + '" alt="Mai" class="cs-mai-scene" id="cs-mai-img" onerror="this.src=\'assets/icon-soft.webp\'">' +
        dotsHTML +
      '</div>' +
      '<div class="cs-dialogue-card" id="cs-dlg-card">' +
        '<div class="cs-speaker">' + Course._speakerLabel(s.speaker) + '</div>' +
        '<div class="cs-text-zh">' + s.text + '</div>' +
        '<div class="cs-text-py">' + s.pinyin + '</div>' +
        '<div class="cs-text-vn">' + s.meaning + '</div>' +
      '</div>' +
      '<div class="cs-controls">' +
        '<button class="cs-btn-icon" id="cs-tts-btn" onclick="Course._tts(\'' + s.text.replace(/'/g, "\\'") + '\')" title="Nghe">🔊</button>' +
        '<button class="cs-btn-secondary" onclick="Course.prev()" ' + (Course.step === 0 ? 'disabled' : '') + '>◄ Trước</button>' +
        '<button class="cs-btn-primary" onclick="Course.next()">Tiếp ►</button>' +
      '</div>';

    requestAnimationFrame(function() {
      var mai = document.getElementById('cs-mai-img');
      var dlg = document.getElementById('cs-dlg-card');
      if (mai) { mai.classList.add('cs-mai-enter'); }
      if (dlg) { dlg.classList.add('cs-enter'); }
    });
  },

  // ── PHASE: dialogue — Visual Novel renderer ───────────
  _renderDialogueVN: function() {
    Course._hideWordPopup();
    var l     = Course.lesson;
    var steps = l.steps;
    var s     = steps[Course.step];

    var dlgTotal = steps.filter(function(x) { return x.type === 'dialogue'; }).length;
    var dlgDone  = steps.slice(0, Course.step + 1).filter(function(x) { return x.type === 'dialogue'; }).length;
    var pct      = Math.round((dlgDone / (dlgTotal || 1)) * 50);

    var isNarrator = (s.speaker === 'narrator');
    var ch = Course._vnChar(s.speaker);

    // Nearest scene tag — look backward
    var sceneText = '📍 Lớp học tiếng Trung';
    var sceneStep = null;
    for (var si = Course.step; si >= 0; si--) {
      if (steps[si] && steps[si].scene) { sceneText = steps[si].scene; sceneStep = steps[si]; break; }
    }
    var bgUrl = Course._sceneBg(sceneStep, sceneText);

    // Cast row HTML
    var CAST_ORDER = ['laoli', 'mai', 'xiaomei'];
    var castHTML;
    if (isNarrator) {
      castHTML = '<div class="cs-vn-narrator-card">' + (s.text || '') + '</div>';
    } else {
      var castKeys = (s.cast || []).slice().sort(function(a, b) {
        return CAST_ORDER.indexOf(a) - CAST_ORDER.indexOf(b);
      });
      castHTML = castKeys.map(function(k) {
        var c      = Course._vnChar(k);
        var active = (k === s.speaker);
        var imgSrc = (k === 'mai') ? Course._maiImg(s.expression) : (c.img || '');
        return '<div class="cs-vn-char ' + (active ? 'active' : 'inactive') + '" style="--char-color:' + c.color + '">' +
          '<div class="cs-vn-avatar">' +
            (imgSrc
              ? '<img src="' + imgSrc + '" alt="" class="cs-vn-avatar-img" onerror="this.style.display=\'none\';var e=this.parentNode.querySelector(\'.cs-vn-avatar-emoji\');if(e)e.style.display=\'\'">' +
                '<span class="cs-vn-avatar-emoji" style="display:none">' + c.emoji + '</span>'
              : '<span class="cs-vn-avatar-emoji">' + c.emoji + '</span>') +
          '</div>' +
          '<div class="cs-vn-char-name">' + c.name.split(/[\s(]/)[0] + '</div>' +
          (c.role ? '<div class="cs-vn-char-role">' + c.role + '</div>' : '') +
        '</div>';
      }).join('');
    }

    // Dialogue box HTML (hidden for narrator steps)
    var dlgHTML = '';
    if (!isNarrator) {
      var pyHTML = (Course._showPinyin !== false && s.pinyin)
        ? '<div class="cs-vn-dlg-pinyin">' + s.pinyin + '</div>' : '';
      dlgHTML =
        '<div class="cs-vn-dlg" id="cs-vn-dlg">' +
          '<div class="cs-vn-dlg-header">' +
            '<div class="cs-vn-dlg-speaker" style="background:' + ch.color + '">' +
              ch.emoji + '&thinsp;' + ch.name +
            '</div>' +
            '<button class="cs-vn-speak-btn" id="cs-vn-speak-btn" onclick="Course._vnTts()" title="Nghe">🔊</button>' +
          '</div>' +
          pyHTML +
          '<div class="cs-vn-dlg-hanzi">' + Course._vnHanziHTML(s.text, s.vocab) + '</div>' +
          (Course._showVi !== false
            ? '<div class="cs-vn-dlg-vi">' + (s.meaning || '') + '</div>'
            : '') +
        '</div>';
    }

    Course._getEl().innerHTML =
      '<div class="cs-header">' +
        '<button class="cs-back" onclick="Course._goBack()">← Quay lại</button>' +
        '<span class="cs-lesson-num">Bài ' + l.id + ': ' + l.title + '</span>' +
        '<button class="cs-vn-py-toggle" onclick="Course._togglePinyin()" title="Bật/tắt pinyin">' +
          (Course._showPinyin !== false ? 'Py✓' : 'Py') +
        '</button>' +
        '<button class="cs-vn-py-toggle" onclick="Course._toggleVi()" title="Bật/tắt nghĩa">' +
          (Course._showVi !== false ? 'Vi✓' : 'Vi') +
        '</button>' +
        '<div class="cs-progress-wrap"><div class="cs-progress-bar" style="width:' + pct + '%"></div></div>' +
      '</div>' +
      '<div class="cs-vn-stage" style="background-image:url(\'' + bgUrl + '\')">' +
        '<div class="cs-vn-scene-tag">' + sceneText + '</div>' +
        '<div class="cs-vn-cast">' + castHTML + '</div>' +
      '</div>' +
      dlgHTML +
      '<div class="cs-controls">' +
        '<button class="cs-btn-secondary" onclick="Course.prev()" ' + (Course.step === 0 ? 'disabled' : '') + '>◄ Trước</button>' +
        '<button class="cs-btn-primary" onclick="Course.next()">Tiếp ►</button>' +
      '</div>';

    // Auto-play TTS after render (narrator included — pre-gen MP3 available)
    setTimeout(function() { Course._vnTts(); }, 150);
  },

  // ── VN: background image resolver ────────────────────
  _sceneBg: function(step, sceneText) {
    // Explicit bg field on step takes priority
    if (step && step.bg) return 'assets/mai/scenes/' + step.bg + '.webp';
    // Keyword fallback from scene text (Vietnamese, accent-insensitive)
    var t = (sceneText || '').toLowerCase()
      .replace(/[àáâãäå]/g,'a').replace(/[èéêë]/g,'e').replace(/[ìíîï]/g,'i')
      .replace(/[òóôõö]/g,'o').replace(/[ùúûü]/g,'u').replace(/[ýÿ]/g,'y')
      .replace(/[đ]/g,'d').replace(/[ă]/g,'a').replace(/[ơ]/g,'o').replace(/[ư]/g,'u');
    if (/ky tuc|phong ngu|ky tuc xa/.test(t))              return 'assets/mai/scenes/dorm-room.webp';
    if (/san truong|khuon vien|cong truong|truoc cong/.test(t)) return 'assets/mai/scenes/campus.webp';
    if (/cang tin|can tin|nha an|bua trua/.test(t))        return 'assets/mai/scenes/cafeteria.webp';
    if (/thu vien/.test(t))                                return 'assets/mai/scenes/library.webp';
    if (/pho|duong|tram xe|cua hang|sieu thi/.test(t))    return 'assets/mai/scenes/street.webp';
    if (/phong khach|nha|gia dinh|o nha/.test(t))         return 'assets/mai/scenes/home.webp';
    if (/kham|benh vien|y te|phong y/.test(t))            return 'assets/mai/scenes/clinic.webp';
    return 'assets/mai/scenes/classroom.webp'; // default
  },

  // ── VN: word-level tap lookup (xem pinyin + nghĩa từng từ) ──
  _vnLookup: null,
  _vnCurWord: null,
  _buildVnLookup: function() {
    if (Course._vnLookup) return Course._vnLookup;
    var m = {};
    if (typeof HSK3_DATA !== 'undefined') {
      for (var lv = 1; lv <= 9; lv++) {
        var arr = HSK3_DATA[lv] || [];
        for (var i = 0; i < arr.length; i++) {
          var w = arr[i];
          if (w && w.h && !m[w.h]) m[w.h] = { p: w.p, v: w.v, e: w.e, level: lv, _word: w };
        }
      }
    }
    Course._vnLookup = m;
    return m;
  },

  _esc: function(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function(c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  },

  // Tách câu Hán thành các từ chạm được; highlight từ trọng tâm (vocab) của bước
  _vnHanziHTML: function(text, focus) {
    if (!text) return '';
    var map = Course._buildVnLookup();
    var foc = {};
    (focus || []).forEach(function(w) { foc[w] = 1; });
    var out = '', i = 0, n = text.length;
    while (i < n) {
      var ch = text[i];
      if (!/[一-鿿]/.test(ch)) {
        out += '<span class="cs-vn-h-skip">' + Course._esc(ch) + '</span>';
        i++; continue;
      }
      var word = ch;
      for (var len = Math.min(4, n - i); len >= 1; len--) {
        if (map[text.substr(i, len)]) { word = text.substr(i, len); break; }
      }
      var cls = 'cs-vn-word' + (map[word] ? ' cs-vn-h-known' : '') + (foc[word] ? ' cs-vn-h-focus' : '');
      out += '<span class="' + cls + '" data-h="' + Course._esc(word) + '" onclick="Course._vnWordTap(this)">' + Course._esc(word) + '</span>';
      i += word.length;
    }
    return out;
  },

  _vnWordTap: function(el) {
    var h = el.getAttribute('data-h');
    var info = Course._buildVnLookup()[h];
    Course._vnCurWord = info ? info._word : { h: h };
    Course._hideWordPopup();

    var pop = document.createElement('div');
    pop.className = 'cs-vn-wordpop';
    pop.id = 'csVnWordpop';
    pop.innerHTML =
      '<div class="cs-vn-wp-head">' +
        '<span class="cs-vn-wp-h">' + Course._esc(h) + '</span>' +
        '<button class="cs-vn-wp-ic" onclick="Course._vnSpeakCur()" title="Nghe">🔊</button>' +
        '<button class="cs-vn-wp-ic" onclick="Course._hideWordPopup()" title="Đóng">✕</button>' +
      '</div>' +
      (info
        ? '<div class="cs-vn-wp-py">' + Course._esc(info.p) + '</div>' +
          '<div class="cs-vn-wp-vi">' + Course._esc(info.v || info.e) + '</div>' +
          '<div class="cs-vn-wp-foot">' +
            '<span class="cs-vn-wp-lv">HSK ' + info.level + '</span>' +
            '<button class="cs-vn-wp-add" onclick="Course._vnAddCur()">+ Kho</button>' +
          '</div>'
        : '<div class="cs-vn-wp-vi">Không có trong từ điển HSK</div>');
    document.body.appendChild(pop);

    var r = el.getBoundingClientRect();
    var W = 220;
    pop.style.left = Math.max(8, Math.min(r.left, window.innerWidth - W - 8)) + 'px';
    pop.style.top  = (window.scrollY + r.bottom + 6) + 'px';

    Course._vnSpeakCur();
    setTimeout(function() { document.addEventListener('click', Course._vnPopOutside, true); }, 0);
  },

  _vnPopOutside: function(e) {
    var pop = document.getElementById('csVnWordpop');
    if (pop && !pop.contains(e.target) && !(e.target.classList && e.target.classList.contains('cs-vn-word'))) {
      Course._hideWordPopup();
    }
  },

  _hideWordPopup: function() {
    var pop = document.getElementById('csVnWordpop');
    if (pop && pop.parentNode) pop.parentNode.removeChild(pop);
    document.removeEventListener('click', Course._vnPopOutside, true);
  },

  _vnSpeakCur: function() {
    var w = Course._vnCurWord;
    if (!w || !w.h) return;
    if (typeof Dictionary !== 'undefined' && Dictionary.playTTS) { Dictionary.playTTS(w.h); return; }
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(w.h);
      u.lang = 'zh-CN'; u.rate = 0.85;
      window.speechSynthesis.speak(u);
    }
  },

  _vnAddCur: function() {
    var w = Course._vnCurWord;
    if (w && w.h && typeof openAddToDeckPopup === 'function') openAddToDeckPopup(w);
    Course._hideWordPopup();
  },

  // ── VN: character lookup ──────────────────────────────
  _vnChar: function(key) {
    return VN_CHARACTERS[key] || { name: key, role: '', emoji: '👤', color: '#6B7280', img: '', pitch: 1, rate: 1 };
  },

  // ── PHASE: choice (active recall) ────────────────────
  _renderChoiceVN: function() {
    Course._hideWordPopup();
    var l     = Course.lesson;
    var steps = l.steps;
    var s     = steps[Course.step];
    if (!s || s.type !== 'choice') { Course.phase = 'dialogue'; Course.step++; Course.render(); return; }

    var dlgTotal = steps.filter(function(x) { return x.type === 'dialogue'; }).length;
    var dlgDone  = steps.slice(0, Course.step + 1).filter(function(x) { return x.type === 'dialogue'; }).length;
    var pct      = Math.round((dlgDone / (dlgTotal || 1)) * 50);

    var sceneText = '📍 Lớp học tiếng Trung';
    var sceneStep = null;
    for (var si = Course.step; si >= 0; si--) {
      if (steps[si] && steps[si].scene) { sceneText = steps[si].scene; sceneStep = steps[si]; break; }
    }
    var bgUrl = Course._sceneBg(sceneStep, sceneText);

    var CAST_ORDER = ['laoli', 'mai', 'xiaomei'];
    var castKeys = (s.cast || []).slice().sort(function(a, b) {
      return CAST_ORDER.indexOf(a) - CAST_ORDER.indexOf(b);
    });
    var castHTML = castKeys.map(function(k) {
      var c      = Course._vnChar(k);
      var active = (k === s.speaker);
      var imgSrc = (k === 'mai') ? Course._maiImg(s.expression) : (c.img || '');
      return '<div class="cs-vn-char ' + (active ? 'active' : 'inactive') + '" style="--char-color:' + c.color + '">' +
        '<div class="cs-vn-avatar">' +
          (imgSrc
            ? '<img src="' + imgSrc + '" alt="" class="cs-vn-avatar-img" onerror="this.style.display=\'none\';var e=this.parentNode.querySelector(\'.cs-vn-avatar-emoji\');if(e)e.style.display=\'\'">' +
              '<span class="cs-vn-avatar-emoji" style="display:none">' + c.emoji + '</span>'
            : '<span class="cs-vn-avatar-emoji">' + c.emoji + '</span>') +
        '</div>' +
        '<div class="cs-vn-char-name">' + c.name.split(/[\s(]/)[0] + '</div>' +
        (c.role ? '<div class="cs-vn-char-role">' + c.role + '</div>' : '') +
      '</div>';
    }).join('');

    // correctIdx: index of the correct option
    var correctIdx = -1;
    for (var i = 0; i < s.options.length; i++) {
      if (s.options[i].correct) { correctIdx = i; break; }
    }

    // State: wrongSet = set of wrong indices tried; solved = correct was chosen
    var stateKey  = 'choice_' + Course.step;
    var wrongSet  = Course.checkpointAnswers[stateKey + '_wrong'] || {};
    var solved    = Course.checkpointAnswers[stateKey + '_solved'] === true;
    var lastWrong = Course.checkpointAnswers[stateKey + '_lastWrong'];

    var optsHTML = s.options.map(function(opt, oi) {
      var state    = '';
      var disabled = '';
      if (solved) {
        // All locked after correct
        disabled = 'disabled';
        if (oi === correctIdx) state = ' is-correct';
        else if (wrongSet[oi]) state = ' is-wrong';
      } else {
        // Only lock wrong ones already tried
        if (wrongSet[oi]) { state = ' is-wrong'; disabled = 'disabled'; }
      }
      var pyHTML = (Course._showPinyin !== false && opt.pinyin)
        ? '<div class="cs-vn-choice-py">' + opt.pinyin + '</div>' : '';
      return '<button class="cs-vn-choice-opt' + state + '" ' + disabled + ' onclick="Course._answerChoice(' + oi + ')">' +
        '<div class="cs-vn-choice-hanzi">' + opt.text + '</div>' +
        pyHTML +
      '</button>';
    }).join('');

    // Show feedback for last wrong attempt or for solved state
    var feedbackHTML = '';
    if (solved) {
      feedbackHTML = '<div class="cs-vn-choice-feedback cs-vn-choice-feedback--ok">' + s.options[correctIdx].feedback + '</div>';
    } else if (lastWrong !== undefined) {
      feedbackHTML = '<div class="cs-vn-choice-feedback">' + s.options[lastWrong].feedback + '</div>';
    }

    Course._getEl().innerHTML =
      '<div class="cs-header">' +
        '<button class="cs-back" onclick="Course._goBack()">← Quay lại</button>' +
        '<span class="cs-lesson-num">Bài ' + l.id + ': ' + l.title + '</span>' +
        '<button class="cs-vn-py-toggle" onclick="Course._togglePinyin()" title="Bật/tắt pinyin">' +
          (Course._showPinyin !== false ? 'Py✓' : 'Py') +
        '</button>' +
        '<button class="cs-vn-py-toggle" onclick="Course._toggleVi()" title="Bật/tắt nghĩa">' +
          (Course._showVi !== false ? 'Vi✓' : 'Vi') +
        '</button>' +
        '<div class="cs-progress-wrap"><div class="cs-progress-bar" style="width:' + pct + '%"></div></div>' +
      '</div>' +
      '<div class="cs-vn-stage" style="background-image:url(\'' + bgUrl + '\')">' +
        '<div class="cs-vn-scene-tag">' + sceneText + '</div>' +
        '<div class="cs-vn-cast">' + castHTML + '</div>' +
      '</div>' +
      '<div class="cs-vn-choice-box">' +
        '<div class="cs-vn-choice-q">' + (s.q || '') + '</div>' +
        '<div class="cs-vn-choice-opts">' + optsHTML + '</div>' +
        feedbackHTML +
      '</div>' +
      '<div class="cs-controls">' +
        '<button class="cs-btn-secondary" onclick="Course.prev()" ' + (Course.step === 0 ? 'disabled' : '') + '>◄ Trước</button>' +
        (solved
          ? '<button class="cs-btn-primary" onclick="Course._continueAfterChoice()">Tiếp ►</button>'
          : '') +
      '</div>';
  },

  _answerChoice: function(idx) {
    var s = Course.lesson.steps[Course.step];
    if (!s || s.type !== 'choice') return;

    var correctIdx = -1;
    for (var i = 0; i < s.options.length; i++) {
      if (s.options[i].correct) { correctIdx = i; break; }
    }

    var stateKey = 'choice_' + Course.step;
    if (Course.checkpointAnswers[stateKey + '_solved']) return; // already done

    if (idx === correctIdx) {
      Course.checkpointAnswers[stateKey + '_solved'] = true;
      // Play TTS for correct answer
      var opt = s.options[idx];
      if (opt.text && window.speechSynthesis) {
        window.speechSynthesis.cancel();
        var u = new SpeechSynthesisUtterance(opt.text);
        u.lang = 'zh-CN'; u.rate = 0.85;
        window.speechSynthesis.speak(u);
      }
    } else {
      // Mark this option as wrong, allow retry on others
      if (!Course.checkpointAnswers[stateKey + '_wrong']) {
        Course.checkpointAnswers[stateKey + '_wrong'] = {};
      }
      Course.checkpointAnswers[stateKey + '_wrong'][idx] = true;
      Course.checkpointAnswers[stateKey + '_lastWrong'] = idx;
    }

    Course.render();
  },

  _continueAfterChoice: function() {
    Course.step++;
    var steps = Course.lesson.steps;
    if (Course.step >= steps.length) {
      Course.phase = 'vocab';
    } else {
      Course.phase = 'dialogue';
    }
    Course._saveProgress();
    Course.render();
  },

  // ── VN: TTS per-character voice ───────────────────────
  // Tries pre-gen MP3 cache first; falls back to Web Speech for non-narrator.
  // Narrator steps with Vietnamese text (no CJK) have no MP3 → silently no-op.
  // Content-stable audio slug — djb2 over UTF-8 of "speaker|text".
  // MUST match scripts/mai-tts-gen.py slug_for() exactly so pre-gen MP3
  // filenames line up. Keying by content (not step index) means inserting
  // choice/checkpoint steps never shifts which file a dialogue plays.
  _audioSlug: function(speaker, text) {
    var bytes = new TextEncoder().encode((speaker || 'narrator') + '|' + text);
    var h = 5381;
    for (var i = 0; i < bytes.length; i++) { h = (h * 33 + bytes[i]) >>> 0; }
    return ('00000000' + h.toString(16)).slice(-8);
  },

  _vnTts: function() {
    var lesson = Course.lesson;
    if (!lesson) return;
    var s = lesson.steps[Course.step];
    if (!s || s.type !== 'dialogue' || !s.text) return;

    var isNarr   = (s.speaker === 'narrator');
    // Narrator lines with Vietnamese-only text have no pre-gen MP3
    // (mirrors the skip rule in scripts/mai-tts-gen.py) — stay silent
    // instead of firing a guaranteed-404 fetch + Web Speech fallback.
    if (isNarr && !/[一-鿿]/.test(s.text)) return;
    var slug     = Course._audioSlug(s.speaker, s.text);
    var src      = (MAI_AUDIO_BASE ? MAI_AUDIO_BASE + 'mai/audio/' : 'assets/mai/audio/')
                 + 'L' + Course.lessonId + '_' + slug + '.mp3';
    var activeEl = document.querySelector('.cs-vn-char.active');
    var btn      = document.getElementById('cs-vn-speak-btn');

    var cleanup = function() {
      var el = document.querySelector('.cs-vn-char.cs-vn-speaking');
      if (el) el.classList.remove('cs-vn-speaking');
      if (btn) { btn.textContent = '🔊'; btn.style.opacity = ''; }
    };

    var usedFallback = false;
    var speechFallback = function() {
      if (usedFallback) return;
      usedFallback = true;
      // Narrator fallback is silent — avoid reading VN text with a ZH voice
      if (isNarr || !window.speechSynthesis) { cleanup(); return; }
      window.speechSynthesis.cancel();
      var ch = Course._vnChar(s.speaker);
      var u  = new SpeechSynthesisUtterance(s.text);
      u.lang  = 'zh-CN';
      u.pitch = ch.pitch || 1;
      u.rate  = ch.rate  || 0.9;
      var vs = window.speechSynthesis.getVoices().filter(function(v) {
        return /zh|cmn|Chinese|Mandarin/i.test(v.lang + v.name);
      });
      if (vs.length) u.voice = vs[0];
      u.onend = u.onerror = cleanup;
      window.speechSynthesis.speak(u);
    };

    if (activeEl) activeEl.classList.add('cs-vn-speaking');
    if (btn) { btn.textContent = '🔉'; btn.style.opacity = '0.7'; }

    var a = new Audio(src);
    a.onended = cleanup;
    a.onerror = speechFallback;
    a.play().catch(speechFallback);
  },

  // ── VN: pinyin toggle ─────────────────────────────────
  _togglePinyin: function() {
    Course._showPinyin = !Course._showPinyin;
    Course.render();
  },

  _toggleVi: function() {
    Course._showVi = !Course._showVi;
    Course.render();
  },

  // ── PHASE: checkpoint ────────────────────────────────
  _renderCheckpoint: function() {
    var s = Course.lesson.steps[Course.step];
    if (!s || s.type !== 'checkpoint') { Course.phase = 'dialogue'; Course.step++; Course.render(); return; }

    var qs = s.questions.map(function(q, qi) {
      var opts = q.options.map(function(opt, oi) {
        var state = '';
        if (Course.checkpointAnswers[qi] !== undefined) {
          if (oi === q.answer) state = ' cs-opt-correct';
          else if (Course.checkpointAnswers[qi] === oi) state = ' cs-opt-wrong';
        }
        var disabled = Course.checkpointAnswers[qi] !== undefined ? 'disabled' : '';
        return '<button class="cs-opt' + state + '" ' + disabled + ' onclick="Course._answerCheckpoint(' + qi + ',' + oi + ')">' + opt + '</button>';
      }).join('');
      return '<div class="cs-question"><div class="cs-q-text">' + (qi + 1) + '. ' + q.q + '</div><div class="cs-opts">' + opts + '</div></div>';
    }).join('');

    var allAnswered = s.questions.every(function(_, qi) { return Course.checkpointAnswers[qi] !== undefined; });

    Course._getEl().innerHTML =
      '<div class="cs-header">' +
        '<span class="cs-checkpoint-badge">📝 Kiểm tra nhanh</span>' +
      '</div>' +
      '<div class="cs-checkpoint">' +
        '<h3 class="cs-checkpoint-title">Ôn lại vừa học</h3>' +
        qs +
        (allAnswered ? '<button class="cs-btn-primary cs-checkpoint-next" onclick="Course._continueAfterCheckpoint()">Tiếp tục →</button>' : '') +
      '</div>';
  },

  _answerCheckpoint: function(qi, oi) {
    if (Course.checkpointAnswers[qi] !== undefined) return;
    Course.checkpointAnswers[qi] = oi;
    Course.render();
  },

  _continueAfterCheckpoint: function() {
    Course.step++;
    var steps = Course.lesson.steps;
    if (Course.step >= steps.length) {
      Course.phase = 'vocab';
    } else {
      Course.phase = 'dialogue';
    }
    Course._saveProgress();
    Course.render();
  },

  // ── PHASE: vocab review ──────────────────────────────
  _renderVocab: function() {
    var l     = Course.lesson;
    var vocab = l.vocab || [];

    var cards = vocab.map(function(w) {
      return '<div class="cs-vocab-card">' +
        '<div class="cs-vc-hanzi">' + w.h + '</div>' +
        '<div class="cs-vc-pinyin">' + w.p + '</div>' +
        '<div class="cs-vc-meaning">' + w.v + '</div>' +
        (w.e ? '<div class="cs-vc-en">' + w.e + '</div>' : '') +
      '</div>';
    }).join('');

    Course._getEl().innerHTML =
      '<div class="cs-header">' +
        '<button class="cs-back" onclick="Course._goBack()">← Quay lại</button>' +
        '<span class="cs-lesson-num">Từ vựng bài ' + l.id + '</span>' +
        '<div class="cs-progress-wrap"><div class="cs-progress-bar" style="width:65%"></div></div>' +
      '</div>' +
      '<div class="cs-vocab-review">' +
        '<h3 class="cs-section-title">📚 ' + vocab.length + ' từ mới trong bài</h3>' +
        '<div class="cs-vocab-grid">' + cards + '</div>' +
        '<button class="cs-btn-primary cs-vocab-next" onclick="Course.next()">Tiếp: Làm bài tập →</button>' +
      '</div>';
  },

  // ── PHASE: workbook ──────────────────────────────────
  _renderWorkbook: function() {
    var l  = Course.lesson;
    var wb = l.workbook[Course.difficulty] || [];

    var tabs = ['easy','normal','hard'].map(function(d) {
      var labels = { easy: 'Nhẹ', normal: 'Chuẩn', hard: 'Nặng' };
      var active = d === Course.difficulty ? ' cs-diff-active' : '';
      return '<button class="cs-diff-tab' + active + '" onclick="Course.setDifficulty(\'' + d + '\')">' + labels[d] + '</button>';
    }).join('');

    var exercises = wb.map(function(ex, ei) {
      return Course._renderExercise(ex, ei);
    }).join('');

    var doneCount = Object.keys(Course.workbookAnswers).length;
    var showCheck = doneCount === wb.length && wb.length > 0;

    Course._getEl().innerHTML =
      '<div class="cs-header">' +
        '<button class="cs-back" onclick="Course._goBack()">← Quay lại</button>' +
        '<span class="cs-lesson-num">Bài tập — Bài ' + l.id + '</span>' +
        '<div class="cs-progress-wrap"><div class="cs-progress-bar" style="width:80%"></div></div>' +
      '</div>' +
      '<div class="cs-workbook">' +
        '<div class="cs-diff-tabs">' + tabs + '</div>' +
        '<div class="cs-exercises" id="csExercises">' + exercises + '</div>' +
        (showCheck ? '<button class="cs-btn-primary cs-wb-submit" onclick="Course._submitWorkbook()">Nộp bài ✓</button>' : '') +
      '</div>';
  },

  _renderExercise: function(ex, ei) {
    var answered = Course.workbookAnswers[ei];
    var explainHTML = (answered !== undefined && ex.explain)
      ? '<div class="cs-ex-explain">💡 ' + ex.explain + '</div>' : '';

    if (ex.type === 'fill') {
      var opts = ex.options.map(function(opt) {
        var state = '';
        if (answered !== undefined) {
          if (opt === ex.answer) state = ' cs-opt-correct';
          else if (opt === answered) state = ' cs-opt-wrong';
        }
        var disabled = answered !== undefined ? 'disabled' : '';
        return '<button class="cs-opt cs-opt-sm' + state + '" ' + disabled + ' onclick="Course._answerWorkbook(' + ei + ',\'' + opt.replace(/'/g, "\\'") + '\')">' + opt + '</button>';
      }).join('');

      var parts = ex.sentence.split('___');
      var filled = answered ? '<span class="cs-blank-filled' + (answered === ex.answer ? ' cs-correct' : ' cs-wrong') + '">' + answered + '</span>' : '<span class="cs-blank">___</span>';
      var sentence = parts[0] + filled + (parts[1] || '');

      return '<div class="cs-exercise cs-fill">' +
        '<div class="cs-ex-num">' + (ei + 1) + '</div>' +
        '<div class="cs-ex-sentence">' + sentence + '</div>' +
        '<div class="cs-opts">' + opts + '</div>' +
        explainHTML +
      '</div>';
    }

    if (ex.type === 'order') {
      var shuffled = Course._shuffle(ex.words.slice(), ei);
      var wordBtns = shuffled.map(function(w) {
        return '<button class="cs-word-btn" onclick="Course._selectOrderWord(this, ' + ei + ')" data-word="' + w + '">' + w + '</button>';
      }).join('');
      var orderOk = answered !== undefined && Course._isExCorrect(ex, answered);
      var resultClass = answered !== undefined ? (orderOk ? ' cs-correct' : ' cs-wrong') : '';
      var orderAns = answered !== undefined
        ? (answered || '') + (orderOk ? '' : ' — Đáp án: ' + ex.answer)
        : '';
      return '<div class="cs-exercise cs-order" id="csOrder' + ei + '">' +
        '<div class="cs-ex-num">' + (ei + 1) + '</div>' +
        '<div class="cs-ex-label">Sắp xếp thành câu đúng:</div>' +
        '<div class="cs-word-btns">' + wordBtns + '</div>' +
        '<div class="cs-order-result' + resultClass + '" id="csOrderResult' + ei + '">' + orderAns + '</div>' +
        (answered === undefined ? '<button class="cs-btn-sm" onclick="Course._confirmOrder(' + ei + ')">Xác nhận</button>' : '') +
        explainHTML +
      '</div>';
    }

    if (ex.type === 'translate') {
      var checked = answered !== undefined;
      var transOk = checked && Course._isExCorrect(ex, answered);
      var resultLine = '';
      if (checked) {
        resultLine = transOk
          ? '<div class="cs-translate-ans cs-correct">✓ Chính xác</div>'
          : '<div class="cs-translate-ans cs-wrong">✗ Chưa đúng. Đáp án: <strong>' + ex.answer + '</strong></div>';
      }
      return '<div class="cs-exercise cs-translate">' +
        '<div class="cs-ex-num">' + (ei + 1) + '</div>' +
        '<div class="cs-ex-label">Dịch sang tiếng Trung:</div>' +
        '<div class="cs-ex-prompt">' + ex.prompt + '</div>' +
        '<input class="cs-translate-input" id="csTransInput' + ei + '" placeholder="Nhập câu tiếng Trung..." ' + (checked ? 'disabled value="' + (answered || '').replace(/"/g, '&quot;') + '"' : '') + '>' +
        (checked ? resultLine : '<button class="cs-btn-sm" onclick="Course._submitTranslate(' + ei + ')">Kiểm tra</button>') +
        explainHTML +
      '</div>';
    }

    return '';
  },

  _shuffle: function(arr, seed) {
    // deterministic shuffle by exercise index so it's consistent on re-render
    for (var i = arr.length - 1; i > 0; i--) {
      var j = (seed * 7 + i * 3) % (i + 1);
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  },

  _answerWorkbook: function(ei, val) {
    if (Course.workbookAnswers[ei] !== undefined) return;
    Course.workbookAnswers[ei] = val;
    var wb = Course.lesson.workbook[Course.difficulty] || [];
    if (wb[ei] && !Course._isExCorrect(wb[ei], val)) Course._pushWrongToSRS(wb[ei]);
    Course._rerenderWorkbook();
  },

  _selectOrderWord: function(btn, ei) {
    btn.classList.toggle('cs-word-selected');
  },

  _confirmOrder: function(ei) {
    var container = document.getElementById('csOrder' + ei);
    if (!container) return;
    var selected = Array.from(container.querySelectorAll('.cs-word-btn.cs-word-selected')).map(function(b) { return b.dataset.word; });
    // if none selected, take all in order
    if (!selected.length) {
      selected = Array.from(container.querySelectorAll('.cs-word-btn')).map(function(b) { return b.dataset.word; });
    }
    var joined = selected.join('');
    Course.workbookAnswers[ei] = joined;
    var wbO = Course.lesson.workbook[Course.difficulty] || [];
    if (wbO[ei] && !Course._isExCorrect(wbO[ei], joined)) Course._pushWrongToSRS(wbO[ei]);
    Course._rerenderWorkbook();
  },

  _submitTranslate: function(ei) {
    var input = document.getElementById('csTransInput' + ei);
    var val   = input ? input.value.trim() : '';
    var stored = val || '(bỏ trống)';
    Course.workbookAnswers[ei] = stored;
    var wbT = Course.lesson.workbook[Course.difficulty] || [];
    if (wbT[ei] && !Course._isExCorrect(wbT[ei], stored)) Course._pushWrongToSRS(wbT[ei]);
    Course._rerenderWorkbook();
  },

  // Normalize Chinese answer: strip whitespace + punctuation for comparison
  _normalizeZh: function(s) {
    return String(s == null ? '' : s).replace(/[\s。，？！、,.?!；：;:]/g, '');
  },

  // Unified correctness check used by render, submit, and SRS push
  _isExCorrect: function(ex, ans) {
    if (ans === undefined || ans === null || ans === '(bỏ trống)') return false;
    if (ex.type === 'fill') return ans === ex.answer;
    // order + translate: tolerant compare (ignore spaces/punctuation)
    return Course._normalizeZh(ans) === Course._normalizeZh(ex.answer);
  },

  // On a WRONG workbook answer, push the lesson-vocab words contained in the
  // correct answer back into SRS as "Again" (quality 0) so they get re-reviewed.
  _pushWrongToSRS: function(ex) {
    try {
      if (typeof updateSRSCard !== 'function') return;
      if (typeof loadSRS === 'function') loadSRS();
      var vocab = (Course.lesson && Course.lesson.vocab) || [];
      var ans   = ex && ex.answer ? String(ex.answer) : '';
      if (!ans) return;
      var lessonId = Course.lesson ? Course.lesson.id : null;
      var seen = {};
      vocab.forEach(function(w) {
        if (w && w.h && !seen[w.h] && ans.indexOf(w.h) !== -1) {
          seen[w.h] = true;
          updateSRSCard(w.h, 0, { source: 'course', source_lesson: lessonId });
          if (window.MistakeBook) MistakeBook.add(w, 'mai');
        }
      });
    } catch (e) { /* SRS push best-effort, never block workbook */ }
  },

  _rerenderWorkbook: function() {
    // Re-render workbook without losing scroll position
    var el = document.getElementById('csExercises');
    if (!el) { Course._renderWorkbook(); return; }
    var wb = Course.lesson.workbook[Course.difficulty] || [];
    el.innerHTML = wb.map(function(ex, ei) { return Course._renderExercise(ex, ei); }).join('');

    var doneCount = Object.keys(Course.workbookAnswers).length;
    if (doneCount === wb.length && wb.length > 0) {
      var existing = document.querySelector('.cs-wb-submit');
      if (!existing) {
        var btn = document.createElement('button');
        btn.className = 'cs-btn-primary cs-wb-submit';
        btn.textContent = 'Nộp bài ✓';
        btn.onclick = Course._submitWorkbook;
        el.parentNode.appendChild(btn);
      }
    }
  },

  _submitWorkbook: function() {
    var wb      = Course.lesson.workbook[Course.difficulty] || [];
    var correct = 0;
    wb.forEach(function(ex, ei) {
      var ans = Course.workbookAnswers[ei];
      if (Course._isExCorrect(ex, ans)) correct++;
    });
    Course.workbookScore = wb.length > 0 ? Math.round((correct / wb.length) * 100) : 0;

    if (Course.workbookScore < 70) {
      Course._showRetryOverlay(Course.workbookScore);
      return;
    }
    Course.phase = 'complete';
    Course._saveProgress();
    Course.render();
  },

  _showRetryOverlay: function(score) {
    var overlay = document.createElement('div');
    overlay.className = 'cs-overlay';
    overlay.innerHTML =
      '<div class="cs-overlay-box">' +
        '<div class="cs-overlay-icon">😅</div>' +
        '<div class="cs-overlay-title">Gần đúng rồi! ' + score + '%</div>' +
        '<div class="cs-overlay-msg">Cần đạt 70% để hoàn thành bài. Xem lại câu sai và thử lại nhé!</div>' +
        '<button class="cs-btn-primary" onclick="this.closest(\'.cs-overlay\').remove();Course.workbookAnswers={};Course._rerenderWorkbook()">Làm lại</button>' +
      '</div>';
    document.getElementById('csCoursePage').appendChild(overlay);
  },

  // ── PHASE: complete ──────────────────────────────────
  _renderComplete: function() {
    var l      = Course.lesson;
    var xpGain = 50 + (Course.workbookScore >= 90 ? 20 : 0);

    Course._addVocabToSRS();
    if (typeof Gamification !== 'undefined') Gamification.addXP(xpGain);

    // Track quest progress
    if (typeof Quests !== 'undefined') Quests.incrementMetric('mai_lessons', 1);

    var nextId = l.id + 1;
    var hasNext = typeof COURSE_DATA !== 'undefined' && !!COURSE_DATA[nextId];
    var spk = Math.min(Course._spokenLineCount(l), 8);

    Course._getEl().innerHTML =
      '<div class="cs-complete">' +
        '<div class="cs-confetti" aria-hidden="true">' + Course._confettiHTML() + '</div>' +
        '<img src="' + Course._maiImg('happy') + '" alt="Mai" class="cs-mai-complete" onerror="this.src=\'assets/icon-soft.webp\'">' +
        '<h2 class="cs-complete-title">Hoàn thành Bài ' + l.id + '! 🎉</h2>' +
        '<div class="cs-xp-badge">+' + xpGain + ' XP</div>' +
        '<p class="cs-complete-msg">Bạn đã học được ' + (l.vocab || []).length + ' từ mới. Từ đã được thêm vào SRS để ôn luyện.</p>' +
        '<p class="cs-complete-msg" style="margin-top:-4px">📔 Mở <b>Trang chép bài</b> để xem tóm tắt &amp; gợi ý chép vào vở.</p>' +
        Course._grammarNotesHTML() +
        '<div class="cs-complete-btns">' +
          (hasNext ? '<button class="cs-btn-primary" onclick="Course.loadLesson(' + nextId + ')">Bài tiếp theo →</button>' : '') +
          (spk > 0 ? '<button class="cs-btn-secondary cs-speak-btn" onclick="Course.openShadowing(' + l.id + ')">🎙️ Luyện nói ' + spk + ' câu trong bài</button>' : '') +
          '<button class="cs-btn-secondary" onclick="Handout.open(' + l.id + ')">📔 Trang chép bài</button>' +
          '<button class="cs-btn-secondary" onclick="Router.navigateTo(\'learn\')">← Về Học</button>' +
        '</div>' +
      '</div>';
  },

  // Số câu thoại tiếng Trung có thể luyện nói (bỏ dòng dẫn truyện)
  _spokenLineCount: function(l) {
    if (!l || !l.steps) return 0;
    var n = 0;
    for (var i = 0; i < l.steps.length; i++) {
      var s = l.steps[i];
      if (s.type === 'dialogue' && s.speaker !== 'narrator' && s.pinyin && s.text) n++;
    }
    return n;
  },

  // Mở Speaking luyện nói chính câu thoại của bài này (handoff qua sessionStorage)
  openShadowing: function(id) {
    try { sessionStorage.setItem('speaking_lesson_launch', String(id)); } catch (e) {}
    if (typeof Router !== 'undefined') Router.navigateTo('speaking');
  },

  _confettiHTML: function() {
    var colors = ['#DC2626','#F59E0B','#10B981','#3B82F6','#8B5CF6'];
    var pieces = '';
    for (var i = 0; i < 20; i++) {
      var c = colors[i % colors.length];
      var left = (i * 5) + '%';
      var delay = (i * 0.15) + 's';
      pieces += '<span style="background:' + c + ';left:' + left + ';animation-delay:' + delay + '"></span>';
    }
    return pieces;
  },

  // ── SRS integration ──────────────────────────────────
  _addVocabToSRS: function() {
    if (Course._srsAdded) return;
    Course._srsAdded = true;

    if (typeof srsData === 'undefined' || typeof saveSRS !== 'function') return;
    if (typeof loadSRS === 'function') loadSRS();

    var today    = new Date().toISOString().split('T')[0];
    var lessonId = Course.lessonId;
    var steps    = Course.lesson.steps || [];

    steps.forEach(function(s) {
      if (s.type !== 'dialogue' || !s.vocab || !s.vocab.length) return;
      s.vocab.forEach(function(hanzi) {
        if (!srsData[hanzi]) {
          srsData[hanzi] = {
            interval:        0,
            ease:            2.5,
            dueDate:         today,
            reps:            0,
            lapses:          0,
            lastReview:      null,
            source:          'story',
            source_lesson:   lessonId,
            source_sentence: s.text
          };
        }
      });
    });
    saveSRS();
  },

  // ── TTS ──────────────────────────────────────────────
  _tts: function(text) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    var utt  = new SpeechSynthesisUtterance(text);
    utt.lang = 'zh-CN';
    utt.rate = 0.85;

    // Speaking animation on Mai
    var mai = document.getElementById('cs-mai-img');
    var btn = document.getElementById('cs-tts-btn');
    if (mai) { mai.classList.add('cs-mai-speaking'); mai.classList.remove('cs-mai-enter'); }
    if (btn) { btn.textContent = '🔉'; btn.style.opacity = '0.7'; }

    utt.onend = utt.onerror = function() {
      if (mai) { mai.classList.remove('cs-mai-speaking'); }
      if (btn) { btn.textContent = '🔊'; btn.style.opacity = ''; }
    };

    window.speechSynthesis.speak(utt);
  },

  // ── Difficulty ───────────────────────────────────────
  setDifficulty: function(d) {
    Course.difficulty        = d;
    Course.workbookAnswers   = {};
    Course.workbookScore     = 0;
    Course._renderWorkbook();
  },

  // ── Special screens ──────────────────────────────────
  _renderDebtWarning: function(pendingId) {
    var dueN = (typeof getDueCount === 'function') ? getDueCount() : '?';
    Course._getEl().innerHTML =
      '<div class="cs-debt-warning">' +
        '<div class="cs-debt-icon">💪</div>' +
        '<h3>Bạn có ' + dueN + ' từ đang chờ ôn!</h3>' +
        '<p>Ôn xong rồi học bài mới để nhớ lâu hơn nhé.</p>' +
        '<div class="cs-debt-btns">' +
          '<button class="cs-btn-primary" onclick="Router.navigateTo(\'practice\')">Ôn ngay</button>' +
          '<button class="cs-btn-secondary" onclick="Course._pendingId=' + pendingId + ';Course.loadLesson(' + pendingId + ')">Vẫn học bài mới</button>' +
        '</div>' +
      '</div>';
  },

  _renderComingSoon: function(id) {
    Course._getEl().innerHTML =
      '<div class="cs-coming-soon">' +
        '<div class="cs-coming-icon">📝</div>' +
        '<h3>Bài ' + id + ' đang được biên soạn</h3>' +
        '<p>Sắp ra mắt! Hiện tại bạn có thể học Bài 1 → 12.</p>' +
        '<button class="cs-btn-primary" onclick="Router.navigateTo(\'learn\')">← Về Học</button>' +
      '</div>';
  },

  // Pro-gate HSK 3+ : màn mời nâng cấp khi user Free mở bài cấp ≥3
  _renderProGate: function(id) {
    var lv = Course._levelOf(id);
    Course._getEl().innerHTML =
      '<div class="cs-coming-soon">' +
        '<div class="cs-coming-icon">🔒</div>' +
        '<h3>Truyện Mai HSK ' + lv + ' — dành cho thành viên Pro</h3>' +
        '<p>HSK 1 và HSK 2 luôn miễn phí. Nâng cấp Pro để mở khóa toàn bộ ' +
        'truyện Mai HSK 3 (50 bài, 953 từ) cùng các tính năng nâng cao.</p>' +
        '<div class="cs-debt-btns">' +
          '<button class="cs-btn-primary" onclick="Router.navigateTo(\'pricing\')">Xem gói Pro</button>' +
          '<button class="cs-btn-secondary" onclick="Router.navigateTo(\'learn\')">← Về Học</button>' +
        '</div>' +
      '</div>';
  },

  // ── Progress persistence ─────────────────────────────
  _saveProgress: function() {
    var key = 'hsk_course_progress';
    var all = JSON.parse(localStorage.getItem(key) || '{}');
    all[Course.lessonId] = {
      step:       Course.step,
      phase:      Course.phase,
      difficulty: Course.difficulty,
      completed:  Course.phase === 'complete'
    };
    localStorage.setItem(key, JSON.stringify(all));
  },

  _loadProgress: function() {
    var key  = 'hsk_course_progress';
    var all  = JSON.parse(localStorage.getItem(key) || '{}');
    var prog = all[Course.lessonId];
    if (!prog) return;
    if (prog.completed) return; // restart on revisit
    Course.step       = prog.step       || 0;
    Course.phase      = prog.phase      || 'intro';
    Course.difficulty = prog.difficulty || 'normal';
  },

  // ── Helpers ──────────────────────────────────────────
  _getEl: function() {
    return document.getElementById('csCoursePage') || document.getElementById('content');
  },

  _goBack: function() {
    window.speechSynthesis && window.speechSynthesis.cancel();
    Router.navigateTo('learn');
  }
};
