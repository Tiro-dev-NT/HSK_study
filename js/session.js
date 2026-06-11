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
    // BUG-04: Check for My Vocab "Học ngay" words
    var mvWords = sessionStorage.getItem('mv_learn_words');
    if (mvWords) {
      sessionStorage.removeItem('mv_learn_words');
      try {
        var hanzis = JSON.parse(mvWords);
        var allWords = typeof getAllWords === 'function' ? getAllWords() : [];
        var dataMap = {};
        allWords.forEach(function(w) { dataMap[w.h] = w; });
        var deck = [];
        hanzis.forEach(function(h) {
          var w = dataMap[h];
          if (!w) {
            var srs = AppState.srsData[h];
            if (srs) {
              w = { h: h, p: srs.p || '', v: srs.v || '', e: srs.e || '', level: srs.level || 0, ex: srs.ex || null };
            }
          }
          if (w) deck.push(w);
        });
        if (deck.length > 0) {
          AppState.fcDeck = deck;
          AppState.fcIndex = 0;
          AppState.fcSession = { correct: 0, wrong: 0, startTime: Date.now() };
          fcDeck = AppState.fcDeck;
          fcIndex = AppState.fcIndex;
          fcSession = AppState.fcSession;
          setTimeout(function() {
            var fa = document.getElementById('flashcardArea');
            if (fa) {
              // Hide hub + deck browser so the session shows cleanly
              var _hub = document.getElementById('learnHub');
              if (_hub) _hub.style.display = 'none';
              var _br = document.getElementById('deckBrowser');
              if (_br) _br.style.display = 'none';
              fa.style.display = 'block';
              Session.showFcCard();
              fa.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 100);
        }
      } catch(e) { console.error('[Session] mv_learn_words parse error:', e); }
    }

    // Flashcard
    const fc = document.getElementById('flashcard');
    if (fc) fc.addEventListener('click', Session.flipFcCard);
    document.getElementById('fcTts')?.addEventListener('click', function(e) {
      e.stopPropagation();
      const w = AppState.fcDeck[AppState.fcIndex];
      if (w) Dictionary.playTTS(w.h);
    });
    // Advanced mode (4 buttons)
    document.getElementById('btnAgain')?.addEventListener('click', function() { Session.nextFcCard(0); });
    document.getElementById('btnHard')?.addEventListener('click',  function() { Session.nextFcCard(1); });
    document.getElementById('btnGood')?.addEventListener('click',  function() { Session.nextFcCard(2); });
    document.getElementById('btnEasy')?.addEventListener('click',  function() { Session.nextFcCard(3); });
    // Simple mode (2 buttons)
    document.getElementById('btnForget')?.addEventListener('click',   function() { Session.nextFcCard(0); });
    document.getElementById('btnRemember')?.addEventListener('click', function() { Session.nextFcCard(2); });

    // Typing
    document.getElementById('tySubmit')?.addEventListener('click', Session.checkTypingAnswer);
    document.getElementById('tyInput')?.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        const ansBlock = document.getElementById('tyAnswerBlock');
        if (ansBlock && ansBlock.style.display !== 'none') { Session.nextTyCard(2); return; }
        const val = document.getElementById('tyInput').value.trim();
        if (val) Session.checkTypingAnswer();
      }
    });
    document.getElementById('tyBtnAgain')?.addEventListener('click', function() { Session.nextTyCard(0); });
    document.getElementById('tyBtnHard')?.addEventListener('click',  function() { Session.nextTyCard(1); });
    document.getElementById('tyBtnGood')?.addEventListener('click',  function() { Session.nextTyCard(2); });
    document.getElementById('tyBtnEasy')?.addEventListener('click',  function() { Session.nextTyCard(3); });
    document.getElementById('tyTts')?.addEventListener('click', function() {
      const w = AppState.fcDeck[AppState.fcIndex];
      if (w) Dictionary.playTTS(w.h);
    });

    // Listening
    document.getElementById('lsSubmit')?.addEventListener('click', Session.checkLsAnswer);
    document.getElementById('lsInput')?.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        const ansBlock = document.getElementById('lsAnswerBlock');
        if (ansBlock && ansBlock.style.display !== 'none') { Session.nextLsCard(2); return; }
        const val = document.getElementById('lsInput').value.trim();
        if (val) Session.checkLsAnswer();
      }
    });
    document.getElementById('lsTtsBtn')?.addEventListener('click', function() {
      const w = AppState.fcDeck[AppState.fcIndex];
      if (w) Session._lsPlayTTS(w.h);
    });
    document.getElementById('lsTtsAns')?.addEventListener('click', function() {
      const w = AppState.fcDeck[AppState.fcIndex];
      if (w) Dictionary.playTTS(w.h);
    });
    document.getElementById('lsBtnAgain')?.addEventListener('click', function() { Session.nextLsCard(0); });
    document.getElementById('lsBtnHard')?.addEventListener('click',  function() { Session.nextLsCard(1); });
    document.getElementById('lsBtnGood')?.addEventListener('click',  function() { Session.nextLsCard(2); });
    document.getElementById('lsBtnEasy')?.addEventListener('click',  function() { Session.nextLsCard(3); });

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
    // Thanh progress mảnh trong session header
    var pf = document.getElementById(prefix + 'ProgFill');
    if (pf) pf.style.width = (AppState.fcDeck.length ? Math.round((AppState.fcIndex + 1) / AppState.fcDeck.length * 100) : 0) + '%';
    // keep compat aliases in sync
    fcIndex   = AppState.fcIndex;
    fcSession = AppState.fcSession;
  },

  // ── End session ────────────────────────────────────
  endLearnSession: function() {
    document.getElementById('flashcardArea').style.display  = 'none';
    document.getElementById('typingArea').style.display     = 'none';
    document.getElementById('mcqArea').style.display        = 'none';
    document.getElementById('listeningArea').style.display  = 'none';
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
    // Quest hooks
    if (typeof Quests !== 'undefined') {
      Quests.incrementMetric('cards_studied', total);
      Quests.incrementMetric('correct_answers', AppState.fcSession.correct);
      Quests.incrementMetric('sessions_done', 1);
    }
    updateStats();
    buildLevelGrid();

    // ── Pro gate upsell after preview session ends ────────────────────
    if (AppState.fcIsPreview) {
      var _previewFullCnt = AppState.fcPreviewFullCnt || 0;
      AppState.fcIsPreview = false;
      AppState.fcPreviewLevel = null;
      AppState.fcPreviewFullCnt = null;
      setTimeout(function() {
        if (typeof Monetization !== 'undefined') {
          var isEN = typeof AppState !== 'undefined' && AppState.lang === 'en';
          var msg = isEN
            ? 'Unlock ' + _previewFullCnt + ' full words in this level'
            : 'Mở khoá ' + _previewFullCnt + ' từ đầy đủ của cấp này';
          Monetization.showGate(msg);
        }
      }, 1200); // brief delay so result screen shows first
    }
    // ─────────────────────────────────────────────────────────────────
    // E8: clear related words
    if (typeof RightSidebar !== 'undefined' && RightSidebar.clearRelated) RightSidebar.clearRelated();
    // ── Extended stats ─────────────────────────────
    // Elapsed time
    const elapsedMs = AppState.fcSession.startTime ? (Date.now() - AppState.fcSession.startTime) : 0;
    const mins = Math.floor(elapsedMs / 60000);
    const secs = Math.floor((elapsedMs % 60000) / 1000);
    document.getElementById('srTime').textContent = mins + ':' + String(secs).padStart(2, '0');
    // XP earned
    document.getElementById('srXP').textContent = '+' + earned + ' XP';
    // Streak
    const streak = typeof Gamification !== 'undefined' ? Gamification.getStreak() : parseInt(localStorage.getItem('hsk_streak') || '0');
    document.getElementById('srStreak').textContent = streak + ' 🔥';
    // Due tomorrow
    const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];
    const srs = AppState.srsData || {};
    const dueTomorrow = Object.values(srs).filter(function(c) { return c.dueDate === tomorrowStr; }).length;
    const dueEl = document.getElementById('srDueTomorrow');
    if (dueEl) dueEl.textContent = dueTomorrow > 0 ? ('Ngày mai cần ôn: ' + dueTomorrow + ' thẻ') : '';
  },

  // ── Flashcard ──────────────────────────────────────
  showFcCard: function() {
    const fc = document.getElementById('flashcard');
    fc.classList.remove('flipped');
    document.getElementById('fcButtons').style.display = 'none';
    Session.updateSessionScore('fc');
    const w = AppState.fcDeck[AppState.fcIndex];

    // Active Recall: 30% chance flip for mature cards (interval >= 7)
    const srsCard = typeof getSRSCard === 'function' ? getSRSCard(w.h) : null;
    const shouldFlip = srsCard && srsCard.interval >= 7 && Math.random() < 0.3;

    if (shouldFlip) {
      // Show VN meaning first, user recalls Hanzi
      document.getElementById('fcHanzi').textContent     = w.v;
      document.getElementById('fcPinyin').textContent    = '(nhớ lại chữ Trung)';
      document.getElementById('fcHanziBack').textContent = w.h;
      document.getElementById('fcPinyinBack').textContent = w.p;
      document.getElementById('fcMeaningVi').textContent = w.v;
      document.getElementById('fcMeaningEn').textContent = w.e;
    } else {
      // Normal: show Hanzi first
      document.getElementById('fcHanzi').textContent     = w.h;
      document.getElementById('fcPinyin').textContent    = w.p;
      document.getElementById('fcHanziBack').textContent = w.h;
      document.getElementById('fcPinyinBack').textContent = w.p;
      document.getElementById('fcMeaningVi').textContent = w.v;
      document.getElementById('fcMeaningEn').textContent = w.e;
    }

    // E8: show related words
    if (typeof RightSidebar !== 'undefined' && RightSidebar.renderRelated) RightSidebar.renderRelated(w);

    // Context Card: show source sentence if available
    const contextBox = document.getElementById('fcContextBlock');
    if (contextBox && srsCard && srsCard.source_sentence) {
      contextBox.style.display = 'block';
      contextBox.innerHTML = 'Bạn gặp từ này trong: 「' + srsCard.source_sentence + '」';
    } else if (contextBox) {
      contextBox.style.display = 'none';
    }

    const exBox = document.getElementById('fcExBlock');
    if (w.ex) {
      exBox.style.display = 'block';
      document.getElementById('fcExZh').textContent = w.ex.zh;
      document.getElementById('fcExPy').textContent = w.ex.py;
    } else {
      exBox.style.display = 'none';
    }

    // Active recall: ẩn pinyin mặt trước mặc định + nút "Xem pinyin" (reset mỗi card mới)
    const front = fc.querySelector('.fc-front');
    const pinToggle = document.getElementById('fcPinyinToggle');
    if (shouldFlip) {
      // recall mode: "(nhớ lại chữ Trung)" là gợi ý → hiện luôn, ẩn nút toggle
      if (front) front.classList.add('pinyin-shown');
      if (pinToggle) pinToggle.style.display = 'none';
    } else {
      if (front) front.classList.remove('pinyin-shown');
      if (pinToggle) pinToggle.style.display = '';
    }
  },

  flipFcCard: function() {
    const fc = document.getElementById('flashcard');
    if (!fc.classList.contains('flipped')) {
      fc.classList.add('flipped');
      const isSimple = (typeof appSettings === 'undefined' || appSettings.srsMode !== 'advanced');
      document.getElementById('fcBtnsSimple').style.display   = isSimple   ? 'flex' : 'none';
      document.getElementById('fcBtnsAdvanced').style.display = isSimple   ? 'none' : 'flex';
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
      // Re-add failed card back into session so it comes up again
      AppState.fcDeck.push(w);
    }
    fcSession = AppState.fcSession;
    if (typeof updateSRSCard === 'function') updateSRSCard(w.h, quality);
    AppState.fcIndex++;
    fcIndex = AppState.fcIndex;
    if (AppState.fcIndex >= AppState.fcDeck.length) Session.endLearnSession();
    else Session.showFcCard();
  },

  // ── Typing mode ────────────────────────────────────
  _tyRevealedCount: 0,

  showTyCard: function() {
    Session.updateSessionScore('ty');
    Session._tyRevealedCount = 0;
    const w    = AppState.fcDeck[AppState.fcIndex];
    const lang = AppState.lang;
    document.getElementById('tyMeaning').textContent = lang === 'vi' ? w.v : w.e;
    const exEl = document.getElementById('tyExample');
    if (w.ex) {
      exEl.style.display = 'block';
      exEl.textContent = w.ex.zh.replace(w.h, '___');
    } else {
      exEl.style.display = 'none';
    }
    document.getElementById('tyHint').textContent = Session._getHint(w.p);
    // E8: show related words
    if (typeof RightSidebar !== 'undefined' && RightSidebar.renderRelated) RightSidebar.renderRelated(w);

    // E1: char slots
    Session._renderCharSlots(w.h, 0);
    const countEl = document.getElementById('tyCharCount');
    if (countEl) countEl.textContent = w.h.length + ' chữ';

    const input = document.getElementById('tyInput');
    input.value = '';
    input.disabled = false;
    input.focus();
    document.getElementById('tySubmit').style.display      = 'block';
    document.getElementById('tyFeedback').style.display    = 'none';
    document.getElementById('tyAnswerBlock').style.display = 'none';
  },

  _renderCharSlots: function(hanzi, revealedCount) {
    const slotsEl = document.getElementById('tyCharSlots');
    if (!slotsEl) return;
    slotsEl.innerHTML = hanzi.split('').map(function(ch, i) {
      const revealed = i < revealedCount;
      return '<div class="ty-char-slot' + (revealed ? ' revealed' : '') + '">' +
        (revealed ? ch : '') + '</div>';
    }).join('');
  },

  revealOneChar: function() {
    const w = AppState.fcDeck[AppState.fcIndex];
    if (!w) return;
    if (Session._tyRevealedCount >= w.h.length) return;
    Session._tyRevealedCount++;
    Session._renderCharSlots(w.h, Session._tyRevealedCount);
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
    } else {
      AppState.fcSession.wrong++;
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
    document.getElementById('tyBtnsRating').style.display = 'flex';
    Dictionary.playTTS(w.h);
  },

  nextTyCard: function(quality) {
    quality = (quality === undefined) ? 2 : quality;
    const w = AppState.fcDeck[AppState.fcIndex];
    if (typeof updateSRSCard === 'function') updateSRSCard(w.h, quality);
    // Re-add card to session queue if user rated "Không nhớ"
    if (quality === 0) AppState.fcDeck.push(w);
    document.getElementById('tyBtnsRating').style.display = 'none';
    AppState.fcIndex++;
    fcIndex = AppState.fcIndex;
    if (AppState.fcIndex >= AppState.fcDeck.length) Session.endLearnSession();
    else Session.showTyCard();
  },

  // ── Hint generator (hintLevel: easy/medium/hard) ──
  _getHint: function(pinyin) {
    const level = (typeof appSettings !== 'undefined' ? appSettings.hintLevel : null) || 'medium';
    const syllables = pinyin.split(' ').filter(Boolean);
    if (level === 'hard') {
      return syllables.map(function() { return '___'; }).join(' ');
    }
    if (level === 'easy') {
      return syllables.map(function(s) { return s.charAt(0) + '_'; }).join(' ');
    }
    // medium: first char + 2 underscores per syllable
    return syllables.map(function(s) { return s.charAt(0) + '__'; }).join(' ');
  },

  // ── Listening mode ─────────────────────────────────
  _lsPlayTTS: function(hanzi) {
    const btn = document.getElementById('lsTtsBtn');
    if (btn) { btn.classList.add('playing'); setTimeout(function() { btn.classList.remove('playing'); }, 1800); }
    Dictionary.playTTS(hanzi);
  },

  showLsCard: function() {
    Session.updateSessionScore('ls');
    const w    = AppState.fcDeck[AppState.fcIndex];
    const lang = AppState.lang;
    document.getElementById('lsMeaning').textContent = lang === 'vi' ? w.v : w.e;
    const input = document.getElementById('lsInput');
    input.value = '';
    input.disabled = false;
    input.focus();
    document.getElementById('lsSubmit').style.display   = 'block';
    document.getElementById('lsFeedback').style.display = 'none';
    document.getElementById('lsAnswerBlock').style.display = 'none';
    document.getElementById('lsBtnsRating').style.display  = 'none';
    // E8: show related words
    if (typeof RightSidebar !== 'undefined' && RightSidebar.renderRelated) RightSidebar.renderRelated(w);
    // Auto-play TTS after short delay
    setTimeout(function() { Session._lsPlayTTS(w.h); }, 300);
  },

  checkLsAnswer: function() {
    const input = document.getElementById('lsInput');
    const val   = input.value.trim().toLowerCase();
    if (!val) return;
    const w         = AppState.fcDeck[AppState.fcIndex];
    const pyNoTones = w.p.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s/g, '').toLowerCase();
    const valClean  = val.replace(/\s/g, '').toLowerCase();
    const isCorrect = val === w.h || valClean === pyNoTones;
    input.disabled = true;
    document.getElementById('lsSubmit').style.display = 'none';
    const fb = document.getElementById('lsFeedback');
    fb.style.display = 'block';
    fb.className = 'ty-feedback ' + (isCorrect ? 'correct' : 'wrong');
    fb.textContent = isCorrect
      ? (AppState.lang === 'vi' ? 'Chính xác!' : 'Correct!')
      : (AppState.lang === 'vi' ? 'Chưa đúng!'  : 'Incorrect!');
    if (isCorrect) { AppState.fcSession.correct++; AppState.markLearned(w); }
    else            { AppState.fcSession.wrong++; }
    fcSession = AppState.fcSession;
    const ansBox = document.getElementById('lsAnswerBlock');
    ansBox.style.display = 'block';
    document.getElementById('lsAnsHanzi').textContent   = w.h;
    document.getElementById('lsAnsPinyin').textContent  = w.p;
    document.getElementById('lsAnsMeaning').textContent = AppState.lang === 'vi' ? w.v : w.e;
    const exEl = document.getElementById('lsAnsEx');
    if (w.ex) { exEl.style.display = 'block'; exEl.textContent = w.ex.zh; }
    else { exEl.style.display = 'none'; }
    document.getElementById('lsBtnsRating').style.display = 'flex';
  },

  nextLsCard: function(quality) {
    quality = (quality === undefined) ? 2 : quality;
    const w = AppState.fcDeck[AppState.fcIndex];
    if (typeof updateSRSCard === 'function') updateSRSCard(w.h, quality);
    if (quality === 0) AppState.fcDeck.push(w);
    document.getElementById('lsBtnsRating').style.display = 'none';
    AppState.fcIndex++;
    fcIndex = AppState.fcIndex;
    if (AppState.fcIndex >= AppState.fcDeck.length) Session.endLearnSession();
    else Session.showLsCard();
  },

  // ── MCQ mode ───────────────────────────────────────
  showMcqCard: function() {
    Session.updateSessionScore('mcq');
    const w    = AppState.fcDeck[AppState.fcIndex];
    const lang = AppState.lang;
    document.getElementById('mcqHanzi').textContent  = w.h;
    document.getElementById('mcqPinyin').textContent = w.p;
    document.getElementById('mcqPinyin').classList.add('mcq-pinyin-masked'); // ẩn lại mỗi câu mới
    // E8: show related words
    if (typeof RightSidebar !== 'undefined' && RightSidebar.renderRelated) RightSidebar.renderRelated(w);
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
function nextTyCard(q)           { Session.nextTyCard(q); }
function showMcqCard()           { Session.showMcqCard(); }
function answerMcq(btn, w)       { Session.answerMcq(btn, w); }
function showLsCard()            { Session.showLsCard(); }
function checkLsAnswer()         { Session.checkLsAnswer(); }
function nextLsCard(q)           { Session.nextLsCard(q); }

// saveProgress: kept as global for backward-compat (decks.js may call it)
function saveProgress(word) { AppState.markLearned(word); }
