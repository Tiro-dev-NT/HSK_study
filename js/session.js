// ═══════════════════════════════════════════════════════
// SESSION.JS — Flashcard / Typing / MCQ learning session
// • Owns: setupSessionHandlers(), showFcCard(), flipFcCard(),
//         nextFcCard(), showTyCard(), checkTypingAnswer(),
//         nextTyCard(), showMcqCard(), answerMcq(),
//         endLearnSession(), updateSessionScore()
// • Reads: AppState.fcDeck, AppState.fcIndex, AppState.fcSession
// • Writes: AppState.progress (via AppState.markLearned),
//           AppState.srsData (via updateSRSCard)
// • Notifies: Gamification.addXP(), checkAndUpdateStreak() via global fns
// ═══════════════════════════════════════════════════════

var Session = {

  setup: function() {
    // Flashcard
    const fc = document.getElementById('flashcard');
    if (fc) fc.addEventListener('click', Session.flipFcCard);
    document.getElementById('fcTts')?.addEventListener('click', function(e) {
      e.stopPropagation();
      const w = AppState.fcDeck[AppState.fcIndex];
      if (w) Dictionary.playTTS(w.h);
    });
    document.getElementById('btnAgain')?.addEventListener('click', function() { Session.nextFcCard(0); });
    document.getElementById('btnHard')?.addEventListener('click',  function() { Session.nextFcCard(1); });
    document.getElementById('btnGood')?.addEventListener('click',  function() { Session.nextFcCard(2); });
    document.getElementById('btnEasy')?.addEventListener('click',  function() { Session.nextFcCard(3); });

    // Typing
    document.getElementById('tySubmit')?.addEventListener('click', Session.checkTypingAnswer);
    document.getElementById('tyInput')?.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        const ansBlock = document.getElementById('tyAnswerBlock');
        if (ansBlock && ansBlock.style.display !== 'none') { Session.nextTyCard(); return; }
        const val = document.getElementById('tyInput').value.trim();
        if (val) Session.checkTypingAnswer();
      }
    });
    document.getElementById('tyNext')?.addEventListener('click', Session.nextTyCard);
    document.getElementById('tyTts')?.addEventListener('click', function() {
      const w = AppState.fcDeck[AppState.fcIndex];
      if (w) Dictionary.playTTS(w.h);
    });

    // MCQ TTS
    document.getElementById('mcqTts')?.addEventListener('click', function() {
      const w = AppState.fcDeck[AppState.fcIndex];
      if (w) Dictionary.playTTS(w.h);
    });

    // Listen for openDeck event from Gamification.buildLevelGrid
    document.addEventListener('hsk:openDeck', function(e) {
      if (typeof openDeckDetail === 'function') openDeckDetail(e.detail.deckId);
    });
  },

  // ── Score header ───────────────────────────────────
  updateSessionScore: function(prefix) {
    document.getElementById(prefix + 'CorrectCount').textContent = AppState.fcSession.correct;
    document.getElementById(prefix + 'WrongCount').textContent   = AppState.fcSession.wrong;
    document.getElementById(prefix + 'Current').textContent      = AppState.fcIndex + 1;
    document.getElementById(prefix + 'Total').textContent        = AppState.fcDeck.length;
    // keep compat aliases in sync
    fcIndex   = AppState.fcIndex;
    fcSession = AppState.fcSession;
  },

  // ── End session ────────────────────────────────────
  endLearnSession: function() {
    document.getElementById('flashcardArea').style.display = 'none';
    document.getElementById('typingArea').style.display    = 'none';
    document.getElementById('mcqArea').style.display       = 'none';
    const total = AppState.fcSession.correct + AppState.fcSession.wrong;
    if (total === 0) return;
    document.getElementById('sessionResult').style.display = 'block';
    document.getElementById('srCorrect').textContent = AppState.fcSession.correct;
    document.getElementById('srWrong').textContent   = AppState.fcSession.wrong;
    const pct = Math.round((AppState.fcSession.correct / total) * 100);
    document.getElementById('srPct').textContent   = pct + '%';
    document.getElementById('srTitle').textContent = AppState.lang === 'vi' ? 'Hoàn thành phiên học!' : 'Session Complete!';
    document.getElementById('srEmoji').textContent = pct >= 80 ? '🌟' : pct >= 50 ? '👍' : '💪';
    // XP reward
    const earned = AppState.fcSession.correct * 10 + AppState.fcSession.wrong * 3;
    addXP(earned);
    checkAndUpdateStreak();
    updateStats();
    buildLevelGrid();
  },

  // ── Flashcard ──────────────────────────────────────
  showFcCard: function() {
    const fc = document.getElementById('flashcard');
    fc.classList.remove('flipped');
    document.getElementById('fcButtons').style.display = 'none';
    Session.updateSessionScore('fc');
    const w = AppState.fcDeck[AppState.fcIndex];
    document.getElementById('fcHanzi').textContent     = w.h;
    document.getElementById('fcPinyin').textContent    = w.p;
    document.getElementById('fcHanziBack').textContent = w.h;
    document.getElementById('fcPinyinBack').textContent = w.p;
    document.getElementById('fcMeaningVi').textContent = w.v;
    document.getElementById('fcMeaningEn').textContent = w.e;
    const exBox = document.getElementById('fcExBlock');
    if (w.ex) {
      exBox.style.display = 'block';
      document.getElementById('fcExZh').textContent = w.ex.zh;
      document.getElementById('fcExPy').textContent = w.ex.py;
    } else {
      exBox.style.display = 'none';
    }
  },

  flipFcCard: function() {
    const fc = document.getElementById('flashcard');
    if (!fc.classList.contains('flipped')) {
      fc.classList.add('flipped');
      document.getElementById('fcButtons').style.display = 'flex';
      Dictionary.playTTS(AppState.fcDeck[AppState.fcIndex].h);
    }
  },

  // quality: 0=again, 1=hard, 2=good, 3=easy
  nextFcCard: function(quality) {
    const w = AppState.fcDeck[AppState.fcIndex];
    if (quality >= 2) {
      AppState.fcSession.correct++;
      AppState.markLearned(w);
    } else {
      AppState.fcSession.wrong++;
    }
    fcSession = AppState.fcSession;
    if (typeof updateSRSCard === 'function') updateSRSCard(w.h, quality);
    AppState.fcIndex++;
    fcIndex = AppState.fcIndex;
    if (AppState.fcIndex >= AppState.fcDeck.length) Session.endLearnSession();
    else Session.showFcCard();
  },

  // ── Typing mode ────────────────────────────────────
  showTyCard: function() {
    Session.updateSessionScore('ty');
    const w   = AppState.fcDeck[AppState.fcIndex];
    const lang = AppState.lang;
    document.getElementById('tyMeaning').textContent = lang === 'vi' ? w.v : w.e;
    const exEl = document.getElementById('tyExample');
    if (w.ex) {
      exEl.style.display = 'block';
      exEl.textContent = w.ex.zh.replace(w.h, '___');
    } else {
      exEl.style.display = 'none';
    }
    const py = w.p;
    let hint = py.charAt(0);
    for (let i = 1; i < py.length - 1; i++) hint += (py.charAt(i) === ' ' ? ' ' : ' _');
    hint += (py.length > 1 ? ' ' + py.charAt(py.length - 1) : '');
    document.getElementById('tyHint').textContent = hint;
    const input = document.getElementById('tyInput');
    input.value = '';
    input.disabled = false;
    input.focus();
    document.getElementById('tySubmit').style.display     = 'block';
    document.getElementById('tyFeedback').style.display   = 'none';
    document.getElementById('tyAnswerBlock').style.display = 'none';
  },

  checkTypingAnswer: function() {
    const input = document.getElementById('tyInput');
    const val   = input.value.trim().toLowerCase();
    if (!val) return;
    const w        = AppState.fcDeck[AppState.fcIndex];
    const pyNoTones = w.p.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '').toLowerCase();
    const valClean  = val.replace(/\s/g, '').toLowerCase();
    const isCorrect = val === w.h || valClean === pyNoTones;
    input.disabled = true;
    document.getElementById('tySubmit').style.display = 'none';
    const fb = document.getElementById('tyFeedback');
    fb.style.display = 'block';
    fb.className = 'ty-feedback ' + (isCorrect ? 'correct' : 'wrong');
    fb.textContent = isCorrect
      ? (AppState.lang === 'vi' ? 'Chính xác!' : 'Correct!')
      : (AppState.lang === 'vi' ? 'Chưa đúng!'  : 'Incorrect!');
    if (isCorrect) {
      AppState.fcSession.correct++;
      AppState.markLearned(w);
      if (typeof updateSRSCard === 'function') updateSRSCard(w.h, 2);
    } else {
      AppState.fcSession.wrong++;
      if (typeof updateSRSCard === 'function') updateSRSCard(w.h, 0);
    }
    fcSession = AppState.fcSession;
    const ansBox = document.getElementById('tyAnswerBlock');
    ansBox.style.display = 'block';
    document.getElementById('tyAnsHanzi').textContent   = w.h;
    document.getElementById('tyAnsPinyin').textContent  = w.p;
    document.getElementById('tyAnsMeaning').textContent = AppState.lang === 'vi' ? w.v : w.e;
    const exEl = document.getElementById('tyAnsEx');
    if (w.ex) { exEl.style.display = 'block'; exEl.textContent = w.ex.zh; }
    else { exEl.style.display = 'none'; }
    Dictionary.playTTS(w.h);
  },

  nextTyCard: function() {
    AppState.fcIndex++;
    fcIndex = AppState.fcIndex;
    if (AppState.fcIndex >= AppState.fcDeck.length) Session.endLearnSession();
    else Session.showTyCard();
  },

  // ── MCQ mode ───────────────────────────────────────
  showMcqCard: function() {
    Session.updateSessionScore('mcq');
    const w    = AppState.fcDeck[AppState.fcIndex];
    const lang = AppState.lang;
    document.getElementById('mcqHanzi').textContent  = w.h;
    document.getElementById('mcqPinyin').textContent = w.p;
    const allWords = getAllWords();
    const wrong    = shuffle(allWords.filter(function(x) { return x.h !== w.h; })).slice(0, 3);
    const options  = shuffle([w].concat(wrong));
    const optEl    = document.getElementById('mcqOptions');
    optEl.innerHTML = options.map(function(o, i) {
      return '<button class="q-opt" data-idx="' + i + '" data-correct="' + (o.h === w.h) + '">' +
        (lang === 'vi' ? o.v : o.e) +
      '</button>';
    }).join('');
    optEl.querySelectorAll('.q-opt').forEach(function(btn) {
      btn.addEventListener('click', function() { Session.answerMcq(btn, w); });
    });
    Dictionary.playTTS(w.h);
  },

  answerMcq: function(btn, w) {
    if (btn.classList.contains('correct') || btn.classList.contains('wrong')) return;
    const isCorrect = btn.dataset.correct === 'true';
    if (isCorrect) {
      btn.classList.add('correct');
      AppState.fcSession.correct++;
      AppState.markLearned(w);
      if (typeof updateSRSCard === 'function') updateSRSCard(w.h, 2);
    } else {
      btn.classList.add('wrong');
      document.querySelectorAll('.q-opt[data-correct="true"]').forEach(function(b) { b.classList.add('correct'); });
      AppState.fcSession.wrong++;
      if (typeof updateSRSCard === 'function') updateSRSCard(w.h, 0);
    }
    fcSession = AppState.fcSession;
    setTimeout(function() {
      AppState.fcIndex++;
      fcIndex = AppState.fcIndex;
      if (AppState.fcIndex >= AppState.fcDeck.length) Session.endLearnSession();
      else Session.showMcqCard();
    }, 1000);
  },
};

// ── Backward-compat global functions ──────────────────
function setupSessionHandlers()  { Session.setup(); }
function updateSessionScore(pfx) { Session.updateSessionScore(pfx); }
function endLearnSession()       { Session.endLearnSession(); }
function showFcCard()            { Session.showFcCard(); }
function flipFcCard()            { Session.flipFcCard(); }
function nextFcCard(q)           { Session.nextFcCard(q); }
function showTyCard()            { Session.showTyCard(); }
function checkTypingAnswer()     { Session.checkTypingAnswer(); }
function nextTyCard()            { Session.nextTyCard(); }
function showMcqCard()           { Session.showMcqCard(); }
function answerMcq(btn, w)       { Session.answerMcq(btn, w); }

// saveProgress: kept as global for backward-compat (decks.js may call it)
function saveProgress(word) { AppState.markLearned(word); }
