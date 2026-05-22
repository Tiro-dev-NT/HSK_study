// ═══════════════════════════════════════════════════════
// HANDWRITING PRACTICE (F3) — Vẽ Hanzi qua HanziWriter quiz
// ═══════════════════════════════════════════════════════

var HandwritingGame = {
  wordPool: [],
  current: null,
  idx: 0,
  total: 10,
  results: [],
  writer: null,
  timers: [],

  start: function() {
    var canvas = document.getElementById('gameCanvas');
    canvas.style.display = '';
    document.getElementById('gamesHub').style.display = 'none';
    ['gameSpeedQuiz','gameMemory','gameWordle'].forEach(function(id) {
      var el = document.getElementById(id); if (el) el.style.display = 'none';
    });

    canvas.innerHTML = HandwritingGame._renderSetup();
    HandwritingGame._bindSetup();
  },

  _renderSetup: function() {
    return '<div class="hw-game">' +
      '<div class="boss-header">' +
        '<button class="btn-exit" id="hwExit">✕</button>' +
        '<h2 style="margin:0">✍️ Handwriting Practice</h2>' +
      '</div>' +
      '<div class="hw-setup">' +
        '<h3>Chọn cấp độ & số lượng</h3>' +
        '<div class="hw-level-row">' +
          '<label>HSK Level:</label>' +
          '<select id="hwLevel">' +
            '<option value="1">HSK 1</option><option value="2">HSK 2</option>' +
            '<option value="3" selected>HSK 3</option><option value="4">HSK 4</option>' +
            '<option value="5">HSK 5</option><option value="6">HSK 6</option>' +
          '</select>' +
        '</div>' +
        '<div class="hw-level-row">' +
          '<label>Số từ:</label>' +
          '<select id="hwCount"><option value="5">5</option><option value="10" selected>10</option><option value="20">20</option></select>' +
        '</div>' +
        '<button class="btn-primary" id="hwStartBtn">Bắt đầu</button>' +
      '</div>' +
    '</div>';
  },

  _bindSetup: function() {
    document.getElementById('hwExit').onclick = function() { HandwritingGame.cleanup(); Games._showHub(); };
    document.getElementById('hwStartBtn').onclick = function() {
      var lv = parseInt(document.getElementById('hwLevel').value);
      var count = parseInt(document.getElementById('hwCount').value);
      HandwritingGame._begin(lv, count);
    };
  },

  _begin: function(level, count) {
    HandwritingGame.total = count;
    HandwritingGame.idx = 0;
    HandwritingGame.results = [];
    HandwritingGame.wordPool = shuffle(Games._getWordPool([level])).slice(0, count);

    if (!HandwritingGame.wordPool.length) {
      alert('Không đủ từ vựng cho level này!');
      return;
    }

    var canvas = document.getElementById('gameCanvas');
    canvas.innerHTML = '<div class="hw-game">' +
      '<div class="boss-header">' +
        '<button class="btn-exit" id="hwExit2">✕</button>' +
        '<h2 style="margin:0">✍️ Handwriting</h2>' +
        '<div class="sent-progress" id="hwProgress">1/' + count + '</div>' +
      '</div>' +
      '<div class="hw-prompt" id="hwPrompt"></div>' +
      '<div class="hw-writer-wrap" id="hwWriterWrap"></div>' +
      '<div class="hw-feedback" id="hwFeedback"></div>' +
      '<div class="hw-result" id="hwResult" style="display:none">' +
        '<h3 id="hwResultTitle"></h3>' +
        '<div id="hwResultList"></div>' +
        '<div class="sq-btns">' +
          '<button class="btn-primary" id="hwPlayAgain">🔄 Chơi lại</button>' +
          '<button class="btn-secondary" id="hwBackHub">← Về menu</button>' +
        '</div>' +
      '</div>' +
    '</div>';

    document.getElementById('hwExit2').onclick = function() { HandwritingGame.cleanup(); Games._showHub(); };
    document.getElementById('hwPlayAgain').onclick = function() { HandwritingGame.cleanup(); HandwritingGame.start(); };
    document.getElementById('hwBackHub').onclick = function() { HandwritingGame.cleanup(); Games._showHub(); };

    HandwritingGame._nextWord();
  },

  _nextWord: function() {
    if (HandwritingGame.idx >= HandwritingGame.wordPool.length) {
      HandwritingGame._endGame();
      return;
    }

    var w = HandwritingGame.wordPool[HandwritingGame.idx];
    HandwritingGame.current = w;

    document.getElementById('hwProgress').textContent = (HandwritingGame.idx + 1) + '/' + HandwritingGame.total;
    var isEN = AppState.lang === 'en';
    document.getElementById('hwPrompt').innerHTML =
      '<div class="hw-meaning">' + (isEN ? w.e : w.v) + '</div>' +
      '<div class="hw-pinyin-hint">' + w.p + '</div>';
    document.getElementById('hwFeedback').textContent = '';

    var wrap = document.getElementById('hwWriterWrap');
    wrap.innerHTML = '';

    if (typeof HanziWriter === 'undefined') {
      wrap.innerHTML = '<p>HanziWriter chưa tải xong. Vui lòng thử lại.</p>';
      return;
    }

    var charToWrite = w.h.charAt(0);
    try {
      HandwritingGame.writer = HanziWriter.create(wrap, charToWrite, {
        width: 200, height: 200, padding: 10,
        showCharacter: false, showOutline: true,
        strokeColor: getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#DC2626',
        outlineColor: getComputedStyle(document.documentElement).getPropertyValue('--border').trim() || '#ddd',
        drawingColor: getComputedStyle(document.documentElement).getPropertyValue('--text').trim() || '#333',
        highlightColor: '#22C55E',
        showHintAfterMisses: 2,
        charDataLoader: function(char, onComplete) {
          fetch('https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0/' + encodeURIComponent(char) + '.json')
            .then(function(res) { return res.json(); })
            .then(onComplete);
        }
      });
      HandwritingGame.writer.quiz({
        onComplete: function(data) {
          var mistakes = data.totalMistakes || 0;
          var quality = mistakes === 0 ? 3 : mistakes <= 2 ? 2 : mistakes <= 4 ? 1 : 0;
          var xp = mistakes === 0 ? 15 : 5;

          HandwritingGame.results.push({ word: w, mistakes: mistakes, quality: quality });
          if (typeof updateSRSCard === 'function') updateSRSCard(w.h, quality);
          if (typeof addXP === 'function') addXP(xp);

          var fb = document.getElementById('hwFeedback');
          fb.textContent = mistakes === 0 ? '✅ Hoàn hảo! +15 XP' : '📝 ' + mistakes + ' lỗi — +5 XP';
          fb.className = 'hw-feedback ' + (mistakes === 0 ? 'sent-correct' : 'sent-wrong');

          HandwritingGame.idx++;
          var t = setTimeout(function() { HandwritingGame._nextWord(); }, 1500);
          HandwritingGame.timers.push(t);
        }
      });
    } catch(e) {
      wrap.innerHTML = '<p>Không thể tải chữ "' + charToWrite + '". Bỏ qua...</p>';
      HandwritingGame.idx++;
      var t = setTimeout(function() { HandwritingGame._nextWord(); }, 1000);
      HandwritingGame.timers.push(t);
    }
  },

  _endGame: function() {
    var totalXP = 0;
    HandwritingGame.results.forEach(function(r) {
      totalXP += r.mistakes === 0 ? 15 : 5;
    });
    var perfect = HandwritingGame.results.filter(function(r) { return r.mistakes === 0; }).length;

    document.getElementById('hwResultTitle').textContent = '✍️ Kết quả: ' + perfect + '/' + HandwritingGame.results.length + ' hoàn hảo';
    var listHTML = HandwritingGame.results.map(function(r) {
      return '<div class="hw-result-item">' +
        '<span class="weak-hanzi">' + r.word.h + '</span>' +
        '<span class="weak-pinyin">' + r.word.p + '</span>' +
        '<span class="weak-lapses">' + (r.mistakes === 0 ? '✅' : r.mistakes + ' lỗi') + '</span>' +
      '</div>';
    }).join('');
    document.getElementById('hwResultList').innerHTML = listHTML;
    document.getElementById('hwResult').style.display = '';
    document.getElementById('hwPrompt').style.display = 'none';
    document.getElementById('hwWriterWrap').style.display = 'none';
    document.getElementById('hwFeedback').style.display = 'none';
  },

  cleanup: function() {
    HandwritingGame.timers.forEach(function(t) { clearTimeout(t); });
    HandwritingGame.timers = [];
    if (HandwritingGame.writer && typeof HandwritingGame.writer.cancelQuiz === 'function') {
      try { HandwritingGame.writer.cancelQuiz(); } catch(e) {}
    }
    HandwritingGame.writer = null;
    var wrap = document.getElementById('hwWriterWrap');
    if (wrap) wrap.innerHTML = '';
    var canvas = document.getElementById('gameCanvas');
    if (canvas) canvas.innerHTML = '';
  }
};
