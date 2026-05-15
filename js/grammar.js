// ═══════════════════════════════════════════════════════
// GRAMMAR.JS — Grammar Lessons Module (Phase F.6 v2)
// ═══════════════════════════════════════════════════════

var Grammar = (function() {

  var _level = 1;
  var _searchTerm = '';
  var _quizState = {}; // { patternId: { answered: bool, selectedIdx: int } }

  var PROGRESS_KEY = 'grammar_progress_v1';

  // ── Progress helpers ──────────────────────────────────

  function _loadProgress() {
    try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}'); } catch(e) { return {}; }
  }

  function _saveProgress(id, done) {
    var p = _loadProgress();
    if (!p[_level]) p[_level] = {};
    p[_level][id] = done;
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
  }

  // ── Quiz generation ───────────────────────────────────

  function _makeQuiz(p, allPatterns) {
    var matches = p.pattern.match(/[一-鿿]+/g);
    if (!matches || matches.length === 0) return null;
    var keyWord = matches[0];

    // Find example that contains the key word
    var targetEx = null;
    for (var i = 0; i < p.examples.length; i++) {
      if (p.examples[i].zh.indexOf(keyWord) !== -1) { targetEx = p.examples[i]; break; }
    }
    if (!targetEx) return null;

    var blankSentence = targetEx.zh.replace(keyWord, '___');

    // Collect distractors: key words from other patterns
    var others = [];
    for (var j = 0; j < allPatterns.length; j++) {
      var ap = allPatterns[j];
      if (ap.id === p.id) continue;
      var m = ap.pattern.match(/[一-鿿]+/g);
      if (m && m[0] && m[0] !== keyWord && others.indexOf(m[0]) === -1) {
        others.push(m[0]);
      }
    }

    // Shuffle distractors and take 2
    others.sort(function() { return Math.random() - 0.5; });
    if (others.length < 2) return null;

    var opts = [keyWord, others[0], others[1]];
    opts.sort(function() { return Math.random() - 0.5; });
    var correctIdx = opts.indexOf(keyWord);

    return {
      sentence: blankSentence,
      py: targetEx.py,
      vi: targetEx.vi,
      options: opts,
      correct: correctIdx
    };
  }

  // ── Card rendering ────────────────────────────────────

  function _renderLessonCard(p, idx, isCompleted, quiz) {
    var lang = (typeof AppState !== 'undefined' && AppState.lang) || 'vi';
    var name = lang === 'vi' ? p.name_vi : p.name_en;
    var expl = lang === 'vi' ? p.explanation_vi : p.explanation_en;
    var hskLabel = 'HSK ' + _level;

    var quizHtml = '';
    if (quiz) {
      var qs = _quizState[p.id];
      var answered = qs && qs.answered;
      quizHtml = '<div class="gram-quiz-section">' +
        '<p class="gram-quiz-label">Luyện tập nhanh</p>' +
        '<p class="gram-quiz-blank">' + quiz.sentence + '</p>' +
        '<p class="gram-quiz-sub">' + quiz.py + ' · ' + quiz.vi + '</p>' +
        '<div class="gram-quiz-opts">' +
          quiz.options.map(function(opt, oi) {
            var cls = 'gram-quiz-opt';
            if (answered) {
              if (oi === quiz.correct) cls += ' correct';
              else if (qs.selectedIdx === oi) cls += ' wrong';
            }
            return '<button class="' + cls + '" data-id="' + p.id + '" data-oi="' + oi + '" data-correct="' + (oi === quiz.correct ? 'true' : 'false') + '"' +
              (answered ? ' disabled' : '') + '>' + opt + '</button>';
          }).join('') +
        '</div>' +
      '</div>';
    }

    var doneBadgeStyle = isCompleted ? '' : ' style="display:none"';
    var markBtnText = isCompleted ? '✓ Đã học' : '✓ Đánh dấu đã học';

    return '<div class="grammar-card' + (isCompleted ? ' gram-done' : '') + '" data-id="' + p.id + '">' +
      '<div class="gram-card-header">' +
        '<div class="gram-card-meta">' +
          '<span class="gram-lesson-num">Bài ' + (idx + 1) + '</span>' +
          '<span class="gram-hsk-badge">' + hskLabel + '</span>' +
          '<span class="gram-done-badge"' + doneBadgeStyle + '>✓ Đã học</span>' +
        '</div>' +
      '</div>' +
      '<span class="gram-pattern">' + p.pattern + '</span>' +
      '<span class="gram-name">' + name + '</span>' +
      '<p class="gram-explanation">' + expl + '</p>' +
      '<div class="gram-examples">' +
        p.examples.map(function(ex) {
          return '<div class="gram-example">' +
            '<p class="gram-zh">' + _makeClickable(ex.zh) + '</p>' +
            '<p class="gram-py">' + ex.py + '</p>' +
            '<p class="gram-meaning">' + (lang === 'vi' ? ex.vi : ex.en) + '</p>' +
          '</div>';
        }).join('') +
      '</div>' +
      quizHtml +
      '<button class="gram-mark-btn" data-id="' + p.id + '"' +
        (isCompleted ? ' disabled' : '') + '>' + markBtnText + '</button>' +
    '</div>';
  }

  // ── Header update (no full re-render) ─────────────────

  function _updateHeader() {
    var progress = _loadProgress();
    var allPatterns = (typeof GRAMMAR_DATA !== 'undefined' && GRAMMAR_DATA[_level]) || [];
    var done = progress[_level] || {};
    var count = 0;
    for (var k in done) { if (done[k]) count++; }
    var total = allPatterns.length;
    var pct = total > 0 ? Math.round(count * 100 / total) : 0;

    var textEl = document.querySelector('.gram-header-text');
    if (textEl) textEl.textContent = 'HSK ' + _level + ' — ' + count + '/' + total + ' bài đã học';
    var fillEl = document.querySelector('.gram-progress-fill');
    if (fillEl) fillEl.style.width = pct + '%';
  }

  // ── Main render ───────────────────────────────────────

  function _render() {
    var container = document.getElementById('grammarList');
    if (!container) return;

    _quizState = {};

    var allPatterns = (typeof GRAMMAR_DATA !== 'undefined' && GRAMMAR_DATA[_level]) || [];
    var lang = (typeof AppState !== 'undefined' && AppState.lang) || 'vi';
    var progress = _loadProgress();
    var done = progress[_level] || {};

    var patterns = allPatterns;
    if (_searchTerm) {
      patterns = patterns.filter(function(p) {
        var name = lang === 'vi' ? p.name_vi : p.name_en;
        var expl = lang === 'vi' ? p.explanation_vi : p.explanation_en;
        var s = _searchTerm;
        return name.toLowerCase().indexOf(s) !== -1 ||
               p.pattern.toLowerCase().indexOf(s) !== -1 ||
               expl.toLowerCase().indexOf(s) !== -1;
      });
    }

    if (patterns.length === 0) {
      container.innerHTML = '<div class="empty-state"><p>Không tìm thấy mẫu câu nào.</p></div>';
      return;
    }

    var count = 0;
    for (var k in done) { if (done[k]) count++; }
    var total = allPatterns.length;
    var pct = total > 0 ? Math.round(count * 100 / total) : 0;

    var headerHtml =
      '<div class="gram-lesson-header">' +
        '<p class="gram-header-text">HSK ' + _level + ' — ' + count + '/' + total + ' bài đã học</p>' +
        '<div class="gram-progress-bar"><div class="gram-progress-fill" style="width:' + pct + '%"></div></div>' +
      '</div>';

    var cardsHtml = patterns.map(function(p, idx) {
      var quiz = _makeQuiz(p, allPatterns);
      var isCompleted = !!(done[p.id]);
      return _renderLessonCard(p, allPatterns.indexOf(p), isCompleted, quiz);
    }).join('');

    container.innerHTML = headerHtml + cardsHtml;
  }

  // ── Events ────────────────────────────────────────────

  function _bindEvents() {
    document.querySelectorAll('.gram-level-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.gram-level-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        _level = parseInt(btn.dataset.level);
        _render();
      });
    });

    var searchInput = document.getElementById('grammarSearch');
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        _searchTerm = this.value.trim().toLowerCase();
        _render();
      });
    }

    var list = document.getElementById('grammarList');
    if (list) {
      list.addEventListener('click', function(e) {
        // Dictionary lookup
        if (e.target.classList.contains('clickable-hanzi')) {
          _openCharModal(e.target.dataset.char);
          return;
        }

        // Quiz option
        var quizOpt = e.target.closest('.gram-quiz-opt');
        if (quizOpt && !quizOpt.disabled) {
          var id = quizOpt.dataset.id;
          var oi = parseInt(quizOpt.dataset.oi);
          var isCorrect = quizOpt.dataset.correct === 'true';
          _quizState[id] = { answered: true, selectedIdx: oi };

          var card = quizOpt.closest('.grammar-card');
          card.querySelectorAll('.gram-quiz-opt').forEach(function(o) {
            o.disabled = true;
            var oIdx = parseInt(o.dataset.oi);
            var oCorrect = o.dataset.correct === 'true';
            if (oCorrect) o.classList.add('correct');
            else if (oIdx === oi && !isCorrect) o.classList.add('wrong');
          });
          return;
        }

        // Mark complete
        var markBtn = e.target.closest('.gram-mark-btn');
        if (markBtn && !markBtn.disabled) {
          var pid = markBtn.dataset.id;
          _saveProgress(pid, true);
          if (typeof Quests !== 'undefined') Quests.incrementMetric('grammar_done');

          var card = markBtn.closest('.grammar-card');
          card.classList.add('gram-done');
          var badge = card.querySelector('.gram-done-badge');
          if (badge) badge.style.display = '';
          markBtn.textContent = '✓ Đã học';
          markBtn.disabled = true;
          _updateHeader();
        }
      });
    }
  }

  // ── Utilities ─────────────────────────────────────────

  function _makeClickable(text) {
    return text.split('').map(function(ch) {
      if (/[一-鿿]/.test(ch)) {
        return '<span class="clickable-hanzi" data-char="' + ch + '">' + ch + '</span>';
      }
      return ch;
    }).join('');
  }

  function _openCharModal(ch) {
    if (typeof Dictionary === 'undefined' || !Dictionary.openModal || typeof getAllWords !== 'function') return;
    var words = getAllWords();
    var exact = words.filter(function(w) { return w.h === ch; });
    var contains = words.filter(function(w) { return w.h && w.h.length > 1 && w.h.indexOf(ch) !== -1; });
    contains.sort(function(a, b) { return a.h.length - b.h.length; });
    var word = exact[0] || contains[0] || null;
    if (word) Dictionary.openModal(word);
  }

  // ── Public ────────────────────────────────────────────

  function setup() {
    _level = 1;
    _searchTerm = '';
    _quizState = {};
    _bindEvents();
    _render();
  }

  return { setup: setup };
}());
