// ═══════════════════════════════════════════════════════
// QUIZ.JS — Standalone vocabulary quiz (4-option MCQ)
// • Owns: setupQuiz(), startQuiz(), showQuestion(),
//         answerQuestion(), endQuiz()
// • Reads: AppState.lang, HSK_DATA, getAllWords()
// • No dependency on decks.js or session.js
// ═══════════════════════════════════════════════════════

var Quiz = {

  setup: function() {
    document.getElementById('startQuiz')?.addEventListener('click', Quiz.start);
    document.getElementById('retryQuiz')?.addEventListener('click', function() {
      document.getElementById('quizResult').style.display  = 'none';
      document.getElementById('quizSetup').style.display   = 'flex';
      document.getElementById('quizArea').style.display    = 'none';
    });
  },

  start: function() {
    const lv    = document.getElementById('quizLevel').value;
    const count = parseInt(document.getElementById('quizCount').value);
    let pool    = [];
    if (lv === 'mix') {
      [1,2,3,4,5,6].forEach(function(l) {
        (HSK_DATA[l] || []).forEach(function(w) { pool.push(Object.assign({}, w, {level: l})); });
      });
    } else {
      (HSK_DATA[parseInt(lv)] || []).forEach(function(w) {
        pool.push(Object.assign({}, w, {level: parseInt(lv)}));
      });
    }
    AppState.qDeck    = shuffle(pool).slice(0, count);
    AppState.qIndex   = 0;
    AppState.qScore   = 0;
    AppState.qAnswered = false;
    // keep compat aliases in sync
    qDeck = AppState.qDeck; qIndex = AppState.qIndex;
    qScore = AppState.qScore; qAnswered = AppState.qAnswered;

    document.getElementById('quizSetup').style.display = 'none';
    document.getElementById('quizArea').style.display  = 'block';
    document.getElementById('quizResult').style.display = 'none';
    document.getElementById('qTotal').textContent = AppState.qDeck.length;
    Quiz._showQuestion();
  },

  _showQuestion: function() {
    AppState.qAnswered = false;
    qAnswered = false;
    const w    = AppState.qDeck[AppState.qIndex];
    const lang = AppState.lang;
    document.getElementById('qCurrent').textContent = AppState.qIndex + 1;
    document.getElementById('qScore').textContent   = AppState.qScore;
    document.getElementById('qQuestion').textContent = w.h;

    const allWords = getAllWords();
    const wrong    = shuffle(allWords.filter(function(x) { return x.h !== w.h; })).slice(0, 3);
    const options  = shuffle([w].concat(wrong));
    const optEl    = document.getElementById('qOptions');
    optEl.innerHTML = options.map(function(o, i) {
      return '<button class="q-opt" data-idx="' + i + '" data-correct="' + (o.h === w.h) + '">' +
        (lang === 'vi' ? o.v : o.e) +
      '</button>';
    }).join('');
    optEl.querySelectorAll('.q-opt').forEach(function(btn) {
      btn.addEventListener('click', function() { Quiz._answerQuestion(btn); });
    });
  },

  _answerQuestion: function(btn) {
    if (AppState.qAnswered) return;
    AppState.qAnswered = true;
    qAnswered = true;
    const correct = btn.dataset.correct === 'true';
    if (correct) {
      AppState.qScore++;
      qScore = AppState.qScore;
      btn.classList.add('correct');
    } else {
      btn.classList.add('wrong');
      document.querySelectorAll('.q-opt[data-correct="true"]').forEach(function(b) {
        b.classList.add('correct');
      });
    }
    setTimeout(function() {
      AppState.qIndex++;
      qIndex = AppState.qIndex;
      if (AppState.qIndex >= AppState.qDeck.length) Quiz._endQuiz();
      else Quiz._showQuestion();
    }, 900);
  },

  _endQuiz: function() {
    document.getElementById('quizArea').style.display   = 'none';
    document.getElementById('quizResult').style.display = 'block';
    const pct  = Math.round(AppState.qScore / AppState.qDeck.length * 100);
    document.getElementById('resultScore').textContent  = pct + '%';
    const lang = AppState.lang;
    const msgs = {
      vi: pct >= 80 ? 'Xuất sắc! 🌟' : pct >= 60 ? 'Tốt lắm! 👍' : 'Cần luyện thêm 💪',
      en: pct >= 80 ? 'Excellent! 🌟' : pct >= 60 ? 'Good job! 👍' : 'Keep practicing 💪',
    };
    document.getElementById('resultMsg').textContent = msgs[lang];
  },
};

// ── Backward-compat global functions ──────────────────
function setupQuiz()     { Quiz.setup(); }
function startQuiz()     { Quiz.start(); }
function showQuestion()  { Quiz._showQuestion(); }
function answerQuestion(btn) { Quiz._answerQuestion(btn); }
function endQuiz()       { Quiz._endQuiz(); }
