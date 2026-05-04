// ─── STATE ───────────────────────────────────────────
let appLang = localStorage.getItem('hsk_lang') || 'vi';
let appTheme = localStorage.getItem('hsk_theme') || 'dark';
let hskVersion = parseInt(localStorage.getItem('hsk_version') || '2');
let progress = JSON.parse(localStorage.getItem('hsk_progress') || '{}');
let srsData = JSON.parse(localStorage.getItem('hsk_srs') || '{}'); // { hanzi: {interval,ease,dueDate,reps,lapses} }
let xpData = JSON.parse(localStorage.getItem('hsk_xp') || '{"total":0,"weeklyXP":0,"weekStart":"","lastActive":""}');
let currentWord = null;
let activeRadical = null;
let hanziWriter = null; // HanziWriter instance

// Flashcard/session state
let fcDeck = [], fcIndex = 0, fcSession = {correct:0, wrong:0};
// Quiz state
let qDeck = [], qIndex = 0, qScore = 0, qAnswered = false;
let searchMode = 'all';


// ─── INIT ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const initSteps = [
    ['applyTheme',        () => applyTheme(appTheme)],
    ['applyLang',         () => applyLang(appLang)],
    ['loadSRS',           () => { if (typeof loadSRS === 'function') loadSRS(); }],
    ['setupRouting',      setupRouting],
    ['setupDictionary',   setupDictionary],
    ['setupDecks',        setupDecks],
    ['setupSessionHandlers', setupSessionHandlers],
    ['setupQuiz',         setupQuiz],
    ['setupThemeToggles', setupThemeToggles],
    ['setupLangToggles',  setupLangToggles],
    ['setupHSKVersion',   setupHSKVersion],
    ['buildRadicalBrowser', buildRadicalBrowser],
    ['buildLevelGrid',    buildLevelGrid],
    ['updateStats',       updateStats],
    ['setupFeedback',     setupFeedback],
    ['loadSettings',      () => { if (typeof loadSettings === 'function') loadSettings(); }],
  ];
  initSteps.forEach(([name, fn]) => {
    try { fn(); } catch (e) { console.error(`[INIT] ${name} failed:`, e); }
  });
  console.log('[HSK] App initialized OK');
});

// ─── ROUTING ──────────────────────────────────────────
function setupRouting() {
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(link.dataset.page);
    });
  });
}

function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('[data-page]').forEach(l => l.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');
  document.querySelectorAll(`[data-page="${page}"]`).forEach(l => l.classList.add('active'));
}

// ─── THEME ────────────────────────────────────────────
function setupThemeToggles() {
  document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
  document.getElementById('themeToggleMobile')?.addEventListener('click', toggleTheme);
}

function toggleTheme() {
  appTheme = appTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('hsk_theme', appTheme);
  applyTheme(appTheme);
}

function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  const icon = t === 'dark' ? '☀️' : '🌙';
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = icon;
  const btnM = document.getElementById('themeToggleMobile');
  if (btnM) btnM.textContent = icon;
}

// ─── LANGUAGE ─────────────────────────────────────────
function setupLangToggles() {
  document.getElementById('langToggle')?.addEventListener('click', toggleLang);
  document.getElementById('langToggleMobile')?.addEventListener('click', toggleLang);
}

function toggleLang() {
  appLang = appLang === 'vi' ? 'en' : 'vi';
  localStorage.setItem('hsk_lang', appLang);
  applyLang(appLang);
}

function applyLang(lang) {
  const label = lang === 'vi' ? 'VI / EN' : 'EN / VI';
  const lt = document.getElementById('langToggle');
  if (lt) lt.textContent = label;
  const ltM = document.getElementById('langToggleMobile');
  if (ltM) ltM.textContent = lang.toUpperCase();
  // Update all data-vi/data-en elements
  document.querySelectorAll('[data-vi]').forEach(el => {
    el.textContent = lang === 'vi' ? el.dataset.vi : el.dataset.en;
  });
  // Update placeholders
  const ds = document.getElementById('dictSearch');
  if (ds) ds.placeholder = lang === 'vi' ? 'Tìm chữ Hán, pinyin hoặc nghĩa...' : 'Search hanzi, pinyin or meaning...';
}

// ─── HOME / LEVEL GRID ────────────────────────────────
function buildLevelGrid() {
  const grid = document.getElementById('levelGrid');
  if (!grid) return;
  grid.innerHTML = '';
  [1,2,3,4,5,6].forEach(lv => {
    const info = LEVEL_INFO[lv];
    const card = document.createElement('div');
    card.className = 'level-card';
    const learned = (progress[lv] || []).length;
    const realCount = (HSK_DATA[lv] || []).length;
    const displayCount = realCount || info.count;
    card.innerHTML = `
      <div class="level-badge">${info.label}</div>
      <div class="level-count">${displayCount} từ${!realCount ? ' (coming soon)' : ''}</div>
      <div class="level-count" style="margin-top:4px;color:var(--accent)">${learned}/${displayCount} học</div>
    `;
    card.addEventListener('click', () => {
      // Navigate to learn page and open that HSK deck
      navigateTo('learn');
      setTimeout(() => openDeckDetail(`sys_hsk${lv}`), 50);
    });
    grid.appendChild(card);
  });
}

function updateStats() {
  let total = 0;
  Object.values(progress).forEach(arr => total += arr.length);
  const lEl = document.getElementById('statLearned');
  const sEl = document.getElementById('statStreak');
  const dEl = document.getElementById('statDue');
  if (lEl) lEl.textContent = total;
  if (sEl) sEl.textContent = getStreak();
  // "Due today" = SRS words overdue
  if (dEl) {
    const today = new Date().toISOString().split('T')[0];
    const due = Object.values(srsData).filter(s => s.dueDate && s.dueDate <= today).length;
    dEl.textContent = due;
  }
  renderXPBar();
  renderStreakCalendar();
}

// ─── XP BAR ───────────────────────────────────────────
const XP_PER_LEVEL = 500; // XP needed per level
function renderXPBar() {
  const xpEl = document.getElementById('xpTotal');
  const fillEl = document.getElementById('xpBarFill');
  const levelEl = document.getElementById('xpLevelLabel');
  const weekEl = document.getElementById('xpThisWeek');
  if (!xpEl) return;
  const total = xpData.total || 0;
  const level = Math.floor(total / XP_PER_LEVEL) + 1;
  const xpInLevel = total % XP_PER_LEVEL;
  const pct = Math.min(100, Math.round(xpInLevel / XP_PER_LEVEL * 100));
  xpEl.textContent = total;
  if (fillEl) fillEl.style.width = pct + '%';
  if (levelEl) levelEl.textContent = `Cấp ${level} (${xpInLevel}/${XP_PER_LEVEL} XP)`;
  if (weekEl) weekEl.textContent = `+${xpData.weeklyXP || 0} XP tuần này`;
}

// ─── STREAK CALENDAR ──────────────────────────────────
function renderStreakCalendar() {
  const cal = document.getElementById('streakCalendar');
  if (!cal) return;
  const today = new Date();
  const days = ['CN','T2','T3','T4','T5','T6','T7'];
  const activeDays = JSON.parse(localStorage.getItem('hsk_active_days') || '[]');
  let html = '<div class="sc-title">🔥 7 ngày gần đây</div><div class="sc-days">';
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const isToday = i === 0;
    const isActive = activeDays.includes(dateStr);
    const dayName = days[d.getDay()];
    html += `<div class="sc-day ${isActive ? 'active' : ''} ${isToday ? 'today' : ''}">
      <span class="sc-dot">${isActive ? '🔥' : '○'}</span>
      <span class="sc-label">${dayName}</span>
    </div>`;
  }
  html += '</div>';
  cal.innerHTML = html;
}

// Track active days for calendar
function recordActiveDay() {
  const today = new Date().toISOString().split('T')[0];
  const days = JSON.parse(localStorage.getItem('hsk_active_days') || '[]');
  if (!days.includes(today)) {
    days.push(today);
    // Keep last 30 days only
    const recent = days.slice(-30);
    localStorage.setItem('hsk_active_days', JSON.stringify(recent));
  }
}

// ─── STREAK & XP ──────────────────────────────────────
function getStreak() {
  return parseInt(localStorage.getItem('hsk_streak') || '0');
}

function checkAndUpdateStreak() {
  const today = new Date().toISOString().split('T')[0];
  const lastActive = localStorage.getItem('hsk_last_active') || '';
  const streak = getStreak();
  if (lastActive === today) return; // already counted today
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  const newStreak = lastActive === yesterday ? streak + 1 : 1;
  localStorage.setItem('hsk_streak', newStreak);
  localStorage.setItem('hsk_last_active', today);
  recordActiveDay();
  // XP bonus for streak milestones
  if (newStreak === 7 || newStreak === 30) addXP(100);
  updateStats();
}

function addXP(amount) {
  const weekStart = getWeekStart();
  if (xpData.weekStart !== weekStart) {
    xpData.weeklyXP = 0;
    xpData.weekStart = weekStart;
  }
  xpData.total = (xpData.total || 0) + amount;
  xpData.weeklyXP = (xpData.weeklyXP || 0) + amount;
  localStorage.setItem('hsk_xp', JSON.stringify(xpData));
}

function getWeekStart() {
  const d = new Date();
  d.setDate(d.getDate() - d.getDay());
  return d.toISOString().split('T')[0];
}

// ─── FEEDBACK SYSTEM ──────────────────────────────────
function setupFeedback() {
  let fbRating = 5;
  let fbCategory = 'feature';
  const FEEDBACK_KEY = 'hsk_feedback';

  // Stars
  const stars = document.querySelectorAll('.fb-star');
  stars.forEach(star => {
    star.addEventListener('click', () => {
      fbRating = parseInt(star.dataset.v);
      stars.forEach(s => s.classList.toggle('active', parseInt(s.dataset.v) <= fbRating));
    });
    star.addEventListener('mouseenter', () => {
      stars.forEach(s => s.classList.toggle('hover', parseInt(s.dataset.v) <= parseInt(star.dataset.v)));
    });
    star.addEventListener('mouseleave', () => {
      stars.forEach(s => s.classList.remove('hover'));
    });
  });
  // Set default 5 stars
  stars.forEach(s => s.classList.add('active'));

  // Categories
  document.querySelectorAll('.fb-cat').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.fb-cat').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      fbCategory = btn.dataset.cat;
    });
  });

  // Submit
  document.getElementById('fbSubmit')?.addEventListener('click', () => {
    const msg = document.getElementById('fbMessage')?.value.trim();
    if (!msg) { alert('Vui lòng nhập nội dung góp ý!'); return; }
    const list = JSON.parse(localStorage.getItem(FEEDBACK_KEY) || '[]');
    list.unshift({
      id: Date.now(), rating: fbRating, category: fbCategory,
      message: msg, date: new Date().toLocaleDateString('vi-VN'),
      time: new Date().toLocaleTimeString('vi-VN', {hour:'2-digit', minute:'2-digit'})
    });
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(list));
    document.getElementById('fbMessage').value = '';
    document.getElementById('fbSuccess').style.display = 'block';
    setTimeout(() => document.getElementById('fbSuccess').style.display = 'none', 3000);
    renderFeedbackHistory();
    addXP(20); // reward for giving feedback
  });

  renderFeedbackHistory();
}

function renderFeedbackHistory() {
  const hist = document.getElementById('fbHistory');
  if (!hist) return;
  const list = JSON.parse(localStorage.getItem('hsk_feedback') || '[]');
  if (!list.length) { hist.innerHTML = '<p style="color:var(--text3);font-size:13px;margin-top:20px">Chưa có góp ý nào.</p>'; return; }
  const catIcon = {feature:'💡', bug:'🐛', content:'📚', ui:'🎨', other:'📦'};
  hist.innerHTML = `<div class="fb-hist-title">📋 Góp ý của bạn (${list.length})</div>` +
    list.slice(0, 10).map(fb => `
    <div class="fb-hist-item">
      <div class="fb-hist-header">
        <span>${'★'.repeat(fb.rating)}${'☆'.repeat(5-fb.rating)}</span>
        <span class="fb-hist-cat">${catIcon[fb.category] || '📦'} ${fb.category}</span>
        <span class="fb-hist-date">${fb.date} ${fb.time}</span>
      </div>
      <div class="fb-hist-msg">${fb.message}</div>
    </div>`).join('');
}

// ─── DICTIONARY ───────────────────────────────────────
function setupDictionary() {
  const input = document.getElementById('dictSearch');
  if (!input) return; // page might not have dictionary section
  input.addEventListener('input', () => searchDict(input.value.trim()));
  document.querySelectorAll('.stab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.stab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      searchMode = btn.dataset.mode;
      const radBrowser = document.getElementById('radicalBrowser');
      const searchBox = document.querySelector('.search-box');
      if (searchMode === 'radical') {
        if (radBrowser) radBrowser.style.display = 'block';
        if (searchBox) searchBox.style.display = 'none';
        const dr = document.getElementById('dictResults');
        if (dr) dr.innerHTML =
          `<p class="hint">${appLang==='vi'?'Chọn bộ thủ bên trên để lọc từ...':'Select a radical above to filter words...'}</p>`;
        activeRadical = null;
        document.querySelectorAll('.rad-chip').forEach(c => c.classList.remove('active'));
      } else {
        if (radBrowser) radBrowser.style.display = 'none';
        if (searchBox) searchBox.style.display = 'block';
        searchDict(input.value.trim());
      }
    });
  });

  // Modal close
  document.getElementById('modalClose')?.addEventListener('click', closeModal);
  document.getElementById('modalOverlay')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.getElementById('addToVault')?.addEventListener('click', () => {
    if (currentWord) openAddToDeckPopup(currentWord);
  });
  // Modal buttons — wired once here (NOT inside openModal)
  document.getElementById('btnAnimateStroke')?.addEventListener('click', () => hanziWriter?.animateCharacter());
  document.getElementById('btnPracticeStroke')?.addEventListener('click', () => hanziWriter?.quiz());
  document.getElementById('modalTtsBtn')?.addEventListener('click', () => { if (currentWord) playTTS(currentWord.h); });
  
  // Load default list on startup
  searchDict('');
}

// getAllWords() is defined in data.js and covers all HSK levels 1-6
// Using the data.js version — no local override needed

function renderWordList(words, container) {
  if (!words.length) {
    container.innerHTML = `<p class="hint">${appLang==='vi'?'Không tìm thấy kết quả':'No results found'}</p>`;
    return;
  }
  container.innerHTML = words.map(w => `
    <div class="dict-card" data-hanzi="${w.h}">
      <div class="dict-hanzi">${w.h}</div>
      <div class="dict-info">
        <div class="dict-pinyin">${w.p}</div>
        <div class="dict-meaning">${appLang==='vi' ? w.v : w.e}</div>
      </div>
      <div class="dict-hsk">HSK ${w.level}</div>
      <button class="quick-add" data-hidx="${w.h}"
        title="${appLang==='vi'?'Thêm vào bộ thẻ':'Add to deck'}">+</button>
    </div>
  `).join('');
  container.querySelectorAll('.dict-card').forEach((card, i) => {
    card.addEventListener('click', (e) => {
      if (!e.target.classList.contains('quick-add')) openModal(words[i]);
    });
  });
  container.querySelectorAll('.quick-add').forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openAddToDeckPopup(words[i]);
    });
  });
}

function searchDict(query) {
  const res = document.getElementById('dictResults');
  if (!query) {
    const label = document.createElement('p');
    label.className = 'rad-results-label';
    label.textContent = appLang==='vi' ? 'Gợi ý từ vựng hôm nay' : 'Word of the day suggestions';
    res.innerHTML = '';
    res.appendChild(label);
    const wrapper = document.createElement('div');
    renderWordList(shuffle(getAllWords()).slice(0, 20), wrapper);
    res.appendChild(wrapper);
    return;
  }
  const q = query.toLowerCase();
  const qStripped = stripTones(q);       // normalize query
  const words = getAllWords().filter(w => {
    if (searchMode === 'hanzi') return w.h.includes(query);
    if (searchMode === 'pinyin') {
      // Match with or without tone marks / spaces
      return w.p.toLowerCase().includes(q) || stripTones(w.p).includes(qStripped);
    }
    if (searchMode === 'meaning') return w.v.toLowerCase().includes(q) || w.e.toLowerCase().includes(q);
    // 'all': match hanzi, pinyin (with/without tones), meaning
    return w.h.includes(query)
      || w.p.toLowerCase().includes(q)
      || stripTones(w.p).includes(qStripped)
      || w.v.toLowerCase().includes(q)
      || w.e.toLowerCase().includes(q);
  }).slice(0, 30);

  renderWordList(words, res);
}

// Remove tone marks + spaces for flexible pinyin search
// 'nihao' / 'ni hao' / 'ni3hao3' all match 'nǐ hǎo'
function stripTones(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove accent marks
    .replace(/[1-5]/g, '')            // remove tone numbers
    .replace(/\s+/g, '')              // remove spaces
    .toLowerCase();
}

function openModal(word) {
  currentWord = word;
  document.getElementById('modalHanzi').textContent = word.h;
  document.getElementById('modalPinyin').textContent = word.p;
  document.getElementById('modalLevel').innerHTML = `<span>HSK ${word.level} <span class="ver-chip">HSK ${hskVersion}.0</span></span>`;
  document.getElementById('modalVi').textContent = word.v;
  document.getElementById('modalEn').textContent = word.e;
  // Show example sentence if available
  const exBox = document.getElementById('modalExample');
  if (word.ex) {
    exBox.style.display = 'block';
    document.getElementById('exZh').textContent = word.ex.zh;
    document.getElementById('exPy').textContent = word.ex.py;
    document.getElementById('exVi').textContent = word.ex.vi;
    document.getElementById('exEn').textContent = word.ex.en;
  } else {
    exBox.style.display = 'none';
  }
  document.getElementById('addToVault').textContent = '➕ Thêm vào bộ thẻ';
  document.getElementById('modalOverlay').classList.add('open');

  // Auto-play TTS
  setTimeout(() => playTTS(word.h), 300);

  // HanziWriter stroke animation (only for single character)
  const strokeContainer = document.getElementById('modalStrokeContainer');
  if (strokeContainer && typeof HanziWriter !== 'undefined') {
    strokeContainer.style.display = 'block';
    strokeContainer.innerHTML = '<div id="hanziWriterTarget" style="margin:0 auto"></div>';
    try {
      hanziWriter = HanziWriter.create('hanziWriterTarget', word.h[0], {
        width: 120, height: 120, padding: 8,
        strokeColor: '#E8352A',
        outlineColor: 'rgba(255,255,255,0.15)',
        radicalColor: '#F5A623',
        delayBetweenStrokes: 200,
        strokeAnimationSpeed: 1.2,
      });
      hanziWriter.animateCharacter();
    } catch(e) { strokeContainer.style.display = 'none'; }
  } else if (strokeContainer) {
    strokeContainer.style.display = 'none';
  }

  // Stroke/TTS buttons are wired once in setupDictionary()
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  currentWord = null;
}

// ─── SESSION HANDLERS (wired once, used by decks.js) ──
// currentLearnMode is declared in decks.js (loaded after app.js)

function setupSessionHandlers() {
  // Flashcard handlers
  const fc = document.getElementById('flashcard');
  if (fc) fc.addEventListener('click', flipFcCard);
  const fcTts = document.getElementById('fcTts');
  if (fcTts) fcTts.addEventListener('click', e => { e.stopPropagation(); if (fcDeck[fcIndex]) playTTS(fcDeck[fcIndex].h); });
  // SRS quality buttons: Again=0, Hard=1, Good=2, Easy=3
  document.getElementById('btnAgain')?.addEventListener('click', () => nextFcCard(0));
  document.getElementById('btnHard')?.addEventListener('click', () => nextFcCard(1));
  document.getElementById('btnGood')?.addEventListener('click', () => nextFcCard(2));
  document.getElementById('btnEasy')?.addEventListener('click', () => nextFcCard(3));

  // Typing handlers
  document.getElementById('tySubmit')?.addEventListener('click', checkTypingAnswer);
  document.getElementById('tyInput')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      // If answer block already showing → advance to next
      const ansBlock = document.getElementById('tyAnswerBlock');
      if (ansBlock && ansBlock.style.display !== 'none') { nextTyCard(); return; }
      // Only check if input has value
      const val = document.getElementById('tyInput').value.trim();
      if (val) checkTypingAnswer();
    }
  });
  document.getElementById('tyNext')?.addEventListener('click', nextTyCard);
  document.getElementById('tyTts')?.addEventListener('click', () => { if (fcDeck[fcIndex]) playTTS(fcDeck[fcIndex].h); });

  // MCQ TTS
  document.getElementById('mcqTts')?.addEventListener('click', () => { if (fcDeck[fcIndex]) playTTS(fcDeck[fcIndex].h); });
}

// startLearnSession is now handled by decks.js wireDecksUI() → startLearn click

function updateSessionScore(prefix) {
  document.getElementById(prefix + 'CorrectCount').textContent = fcSession.correct;
  document.getElementById(prefix + 'WrongCount').textContent = fcSession.wrong;
  document.getElementById(prefix + 'Current').textContent = fcIndex + 1;
  document.getElementById(prefix + 'Total').textContent = fcDeck.length;
}

function endLearnSession() {
  document.getElementById('flashcardArea').style.display = 'none';
  document.getElementById('typingArea').style.display = 'none';
  document.getElementById('mcqArea').style.display = 'none';
  
  const total = fcSession.correct + fcSession.wrong;
  if (total === 0) return;
  
  document.getElementById('sessionResult').style.display = 'block';
  document.getElementById('srCorrect').textContent = fcSession.correct;
  document.getElementById('srWrong').textContent = fcSession.wrong;
  const pct = Math.round((fcSession.correct / total) * 100);
  document.getElementById('srPct').textContent = pct + '%';
  document.getElementById('srTitle').textContent = appLang==='vi' ? 'Hoàn thành phiên học!' : 'Session Complete!';
  document.getElementById('srEmoji').textContent = pct >= 80 ? '🌟' : pct >= 50 ? '👍' : '💪';

  // XP: 10 per correct, 3 per wrong
  const earned = fcSession.correct * 10 + fcSession.wrong * 3;
  addXP(earned);
  checkAndUpdateStreak();
  
  updateStats();
  buildLevelGrid();
}

function showFcCard() {
  const fc = document.getElementById('flashcard');
  fc.classList.remove('flipped');
  document.getElementById('fcButtons').style.display = 'none';
  updateSessionScore('fc');
  const w = fcDeck[fcIndex];
  document.getElementById('fcHanzi').textContent = w.h;
  document.getElementById('fcPinyin').textContent = w.p;
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
}

function flipFcCard() {
  const fc = document.getElementById('flashcard');
  if (!fc.classList.contains('flipped')) {
    fc.classList.add('flipped');
    document.getElementById('fcButtons').style.display = 'flex';
    playTTS(fcDeck[fcIndex].h);
  }
}

// quality: 0=again, 1=hard, 2=good, 3=easy
function nextFcCard(quality) {
  const w = fcDeck[fcIndex];
  if (quality >= 2) {
    fcSession.correct++;
    saveProgress(w);
  } else {
    fcSession.wrong++;
  }
  // Update SRS for this word
  if (typeof updateSRSCard === 'function') updateSRSCard(w.h, quality);
  fcIndex++;
  if (fcIndex >= fcDeck.length) endLearnSession();
  else showFcCard();
}

function showTyCard() {
  updateSessionScore('ty');
  const w = fcDeck[fcIndex];
  document.getElementById('tyMeaning').textContent = appLang==='vi' ? w.v : w.e;
  
  const exEl = document.getElementById('tyExample');
  if (w.ex) {
    exEl.style.display = 'block';
    exEl.textContent = w.ex.zh.replace(w.h, '___');
  } else {
    exEl.style.display = 'none';
  }
  
  const py = w.p;
  let hint = py.charAt(0);
  for (let i=1; i<py.length-1; i++) hint += (py.charAt(i)===' ' ? ' ' : ' _');
  hint += (py.length > 1 ? ' ' + py.charAt(py.length-1) : '');
  document.getElementById('tyHint').textContent = hint;
  
  const input = document.getElementById('tyInput');
  input.value = '';
  input.disabled = false;
  input.focus();
  
  document.getElementById('tySubmit').style.display = 'block';
  document.getElementById('tyFeedback').style.display = 'none';
  document.getElementById('tyAnswerBlock').style.display = 'none';
}

function checkTypingAnswer() {
  const input = document.getElementById('tyInput');
  const val = input.value.trim().toLowerCase();
  if (!val) return;
  const w = fcDeck[fcIndex];
  const pyNoTones = w.p.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "").toLowerCase();
  const valClean = val.replace(/\s/g, "").toLowerCase();
  const isCorrect = val === w.h || valClean === pyNoTones;
  
  input.disabled = true;
  document.getElementById('tySubmit').style.display = 'none';
  
  const fb = document.getElementById('tyFeedback');
  fb.style.display = 'block';
  fb.className = 'ty-feedback ' + (isCorrect ? 'correct' : 'wrong');
  fb.textContent = isCorrect ? (appLang==='vi'?'Chính xác!':'Correct!') : (appLang==='vi'?'Chưa đúng!':'Incorrect!');
  
  if (isCorrect) {
    fcSession.correct++;
    saveProgress(w);
    if (typeof updateSRSCard === 'function') updateSRSCard(w.h, 2); // Good quality for correct typing
  } else {
    fcSession.wrong++;
    if (typeof updateSRSCard === 'function') updateSRSCard(w.h, 0); // Again for wrong
  }
  
  const ansBox = document.getElementById('tyAnswerBlock');
  ansBox.style.display = 'block';
  document.getElementById('tyAnsHanzi').textContent = w.h;
  document.getElementById('tyAnsPinyin').textContent = w.p;
  document.getElementById('tyAnsMeaning').textContent = appLang==='vi' ? w.v : w.e;
  const exEl = document.getElementById('tyAnsEx');
  if (w.ex) {
    exEl.style.display = 'block';
    exEl.textContent = w.ex.zh;
  } else {
    exEl.style.display = 'none';
  }
  playTTS(w.h);
}

function nextTyCard() {
  fcIndex++;
  if (fcIndex >= fcDeck.length) endLearnSession();
  else showTyCard();
}

function showMcqCard() {
  updateSessionScore('mcq');
  const w = fcDeck[fcIndex];
  document.getElementById('mcqHanzi').textContent = w.h;
  document.getElementById('mcqPinyin').textContent = w.p;
  
  const allWords = getAllWords();
  const wrong = shuffle(allWords.filter(x => x.h !== w.h)).slice(0, 3);
  const options = shuffle([w, ...wrong]);
  const optEl = document.getElementById('mcqOptions');
  optEl.innerHTML = options.map((o, i) => `
    <button class="q-opt" data-idx="${i}" data-correct="${o.h === w.h}">
      ${appLang === 'vi' ? o.v : o.e}
    </button>
  `).join('');
  optEl.querySelectorAll('.q-opt').forEach(btn => {
    btn.addEventListener('click', () => answerMcq(btn, w));
  });
  playTTS(w.h);
}

function answerMcq(btn, w) {
  if (btn.classList.contains('correct') || btn.classList.contains('wrong')) return;
  const isCorrect = btn.dataset.correct === 'true';
  if (isCorrect) {
    btn.classList.add('correct');
    fcSession.correct++;
    saveProgress(w);
    if (typeof updateSRSCard === 'function') updateSRSCard(w.h, 2); // Good
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('.q-opt[data-correct="true"]').forEach(b => b.classList.add('correct'));
    fcSession.wrong++;
    if (typeof updateSRSCard === 'function') updateSRSCard(w.h, 0); // Again
  }
  setTimeout(() => {
    fcIndex++;
    if (fcIndex >= fcDeck.length) endLearnSession();
    else showMcqCard();
  }, 1000);
}

function saveProgress(word) {
  const lv = word.level;
  if (!progress[lv]) progress[lv] = [];
  if (!progress[lv].includes(word.h)) {
    progress[lv].push(word.h);
    localStorage.setItem('hsk_progress', JSON.stringify(progress));
  }
}

// ─── QUIZ ─────────────────────────────────────────────
function setupQuiz() {
  document.getElementById('startQuiz')?.addEventListener('click', startQuiz);
  document.getElementById('retryQuiz')?.addEventListener('click', () => {
    document.getElementById('quizResult').style.display = 'none';
    document.getElementById('quizSetup').style.display = 'flex';
    document.getElementById('quizArea').style.display = 'none';
  });
}

function startQuiz() {
  const lv = document.getElementById('quizLevel').value;
  const count = parseInt(document.getElementById('quizCount').value);
  let pool = [];
  if (lv === 'mix') {
    [1,2,3].forEach(l => pool.push(...(HSK_DATA[l]||[]).map(w=>({...w,level:l}))));
  } else {
    pool = (HSK_DATA[parseInt(lv)] || []).map(w => ({...w, level: parseInt(lv)}));
  }
  qDeck = shuffle(pool).slice(0, count);
  qIndex = 0; qScore = 0;
  document.getElementById('quizSetup').style.display = 'none';
  document.getElementById('quizArea').style.display = 'block';
  document.getElementById('quizResult').style.display = 'none';
  document.getElementById('qTotal').textContent = qDeck.length;
  showQuestion();
}

function showQuestion() {
  qAnswered = false;
  const w = qDeck[qIndex];
  document.getElementById('qCurrent').textContent = qIndex + 1;
  document.getElementById('qScore').textContent = qScore;
  document.getElementById('qQuestion').textContent = w.h;
  // Build 4 options: 1 correct + 3 random wrong
  const allWords = getAllWords();
  const wrong = shuffle(allWords.filter(x => x.h !== w.h)).slice(0, 3);
  const options = shuffle([w, ...wrong]);
  const optEl = document.getElementById('qOptions');
  optEl.innerHTML = options.map((o, i) => `
    <button class="q-opt" data-idx="${i}" data-correct="${o.h === w.h}">
      ${appLang === 'vi' ? o.v : o.e}
    </button>
  `).join('');
  optEl.querySelectorAll('.q-opt').forEach(btn => {
    btn.addEventListener('click', () => answerQuestion(btn));
  });
}

function answerQuestion(btn) {
  if (qAnswered) return;
  qAnswered = true;
  const correct = btn.dataset.correct === 'true';
  if (correct) { qScore++; btn.classList.add('correct'); }
  else {
    btn.classList.add('wrong');
    document.querySelectorAll('.q-opt[data-correct="true"]').forEach(b => b.classList.add('correct'));
  }
  setTimeout(() => {
    qIndex++;
    if (qIndex >= qDeck.length) endQuiz();
    else showQuestion();
  }, 900);
}

function endQuiz() {
  document.getElementById('quizArea').style.display = 'none';
  document.getElementById('quizResult').style.display = 'block';
  const pct = Math.round(qScore / qDeck.length * 100);
  document.getElementById('resultScore').textContent = pct + '%';
  const msgs = {
    vi: pct >= 80 ? 'Xuất sắc! 🌟' : pct >= 60 ? 'Tốt lắm! 👍' : 'Cần luyện thêm 💪',
    en: pct >= 80 ? 'Excellent! 🌟' : pct >= 60 ? 'Good job! 👍' : 'Keep practicing 💪'
  };
  document.getElementById('resultMsg').textContent = msgs[appLang];
}



// ─── UTILS ────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function playTTS(text) {
  if (typeof appSettings !== 'undefined' && appSettings.autoTTS === false) return;
  if (!window.speechSynthesis) return;
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = 'zh-CN';
  msg.rate = 0.9;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(msg);
}

// ─── HSK VERSION TOGGLE ───────────────────────────────
function setupHSKVersion() {
  const v20 = document.getElementById('ver20');
  const v30 = document.getElementById('ver30');
  if (!v20 || !v30) return;
  // Apply saved state
  v20.classList.toggle('active', hskVersion === 2);
  v30.classList.toggle('active', hskVersion === 3);
  v20.addEventListener('click', () => switchVersion(2));
  v30.addEventListener('click', () => {
    // HSK 3.0 coming soon — show banner
    switchVersion(3);
  });
}

function switchVersion(ver) {
  hskVersion = ver;
  localStorage.setItem('hsk_version', ver);
  document.getElementById('ver20').classList.toggle('active', ver === 2);
  document.getElementById('ver30').classList.toggle('active', ver === 3);
  // If on dictionary, show banner for v3.0
  const res = document.getElementById('dictResults');
  if (ver === 3) {
    res.innerHTML = `
      <div class="coming-soon-banner">
        <div class="cs-icon">🚧</div>
        <h3>HSK 3.0 (2021) — Đang phát triển</h3>
        <p>Bộ từ vựng HSK 3.0 mới nhất đang được cập nhật.<br/>Hiện tại vui lòng dùng HSK 2.0.</p>
      </div>`;
    document.getElementById('dictSearch').disabled = true;
  } else {
    document.getElementById('dictSearch').disabled = false;
    res.innerHTML = `<p class="hint">${appLang==='vi'?'Nhập từ để tìm kiếm...':'Type to search...'}</p>`;
  }
}

// ─── RADICAL BROWSER ──────────────────────────────────
function buildRadicalBrowser() {
  if (typeof RADICALS === 'undefined') return;
  const grid = document.getElementById('radGrid');
  if (!grid) return;
  grid.innerHTML = RADICALS.map((rad, i) => `
    <div class="rad-chip" data-idx="${i}">
      <span class="rc-char">${rad.r}</span>
      <span class="rc-info">${appLang==='vi' ? rad.vi : rad.en}</span>
    </div>
  `).join('');
  grid.querySelectorAll('.rad-chip').forEach((chip, i) => {
    chip.addEventListener('click', () => {
      if (activeRadical === i) {
        activeRadical = null;
        chip.classList.remove('active');
        document.getElementById('dictResults').innerHTML =
          `<p class="hint">${appLang==='vi'?'Nhập từ để tìm kiếm...':'Type to search...'}</p>`;
      } else {
        document.querySelectorAll('.rad-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeRadical = i;
        filterByRadical(RADICALS[i]);
      }
    });
  });
}

function filterByRadical(rad) {
  const res = document.getElementById('dictResults');
  const allWords = getAllWords();
  // Filter: words whose hanzi contains any of the radical's associated chars,
  // OR words whose hanzi contains the radical character itself
  const matches = allWords.filter(w =>
    rad.chars.some(c => w.h.includes(c.charAt(0))) ||
    w.h.includes(rad.r)
  ).slice(0, 25);
  if (!matches.length) {
    res.innerHTML = `<p class="hint">${appLang==='vi'?'Không tìm thấy từ với bộ thủ này':'No words found for this radical'}</p>`;
    return;
  }
  const label = document.createElement('p');
  label.className = 'rad-results-label';
  label.textContent = (appLang==='vi' ? `Bộ thủ ${rad.r} (${rad.vi}) — ` : `Radical ${rad.r} (${rad.en}) — `) + `${matches.length} từ`;
  res.innerHTML = '';
  res.appendChild(label);
  const cardsHtml = matches.map(w => `
    <div class="dict-card" data-hanzi="${w.h}">
      <div class="dict-hanzi">${w.h}</div>
      <div class="dict-info">
        <div class="dict-pinyin">${w.p}</div>
        <div class="dict-meaning">${appLang==='vi' ? w.v : w.e}</div>
      </div>
      <div class="dict-hsk">HSK ${w.level}</div>
      <button class="quick-add" data-hidx="${w.h}">+</button>
    </div>`).join('');
  const wrapper = document.createElement('div');
  wrapper.innerHTML = cardsHtml;
  wrapper.querySelectorAll('.dict-card').forEach((card, i) => {
    card.addEventListener('click', (e) => { if (!e.target.classList.contains('quick-add')) openModal(matches[i]); });
  });
  wrapper.querySelectorAll('.quick-add').forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openAddToDeckPopup(matches[i]);
    });
  });
  res.appendChild(wrapper);
}

// ════════════════════════════════════════════════════════
// ⚙️  SETTINGS SYSTEM
// ════════════════════════════════════════════════════════

const SETTINGS_KEY = 'hsk_settings';

const SETTINGS_DEFAULT = {
  newPerDay:         20,
  maxReviews:        200,
  graduateInterval:  1,
  easyInterval:      4,
  newOrder:          'seq',
  autoTTS:           true,
  showPinyin:        true,
  showEnglish:       false,
  defaultMode:       'flashcard',
  hintDelay:         0,
  soundFx:           true,
};

let appSettings = { ...SETTINGS_DEFAULT };

function loadSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
    appSettings = { ...SETTINGS_DEFAULT, ...saved };
  } catch { appSettings = { ...SETTINGS_DEFAULT }; }
  applySettings();
}

function applySettings() {
  // Apply settings to the SRS constants if available
  if (typeof SRS_NEW_PER_DAY !== 'undefined') {
    window._srsNewPerDay = appSettings.newPerDay;
  }
  // Apply default mode chip
  const chip = document.querySelector(`.mode-chip[data-mode="${appSettings.defaultMode}"]`);
  if (chip) {
    document.querySelectorAll('.mode-chip').forEach(b => b.classList.remove('active'));
    chip.classList.add('active');
    if (typeof currentLearnMode !== 'undefined') currentLearnMode = appSettings.defaultMode;
  }
}

function openSettings() {
  // Populate form from current settings
  const s = appSettings;
  document.getElementById('setNewPerDay').value       = s.newPerDay;
  document.getElementById('setMaxReviews').value      = s.maxReviews;
  document.getElementById('setGraduateInterval').value= s.graduateInterval;
  document.getElementById('setEasyInterval').value    = s.easyInterval;
  document.getElementById('setNewOrder').value        = s.newOrder;
  document.getElementById('setAutoTTS').checked       = s.autoTTS;
  document.getElementById('setShowPinyin').checked    = s.showPinyin;
  document.getElementById('setShowEnglish').checked   = s.showEnglish;
  document.getElementById('setDefaultMode').value     = s.defaultMode;
  document.getElementById('setHintDelay').value       = String(s.hintDelay);
  document.getElementById('setSoundFx').checked       = s.soundFx;

  document.getElementById('settingsOverlay').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeSettings() {
  document.getElementById('settingsOverlay').style.display = 'none';
  document.body.style.overflow = '';
}

function saveSettings() {
  appSettings = {
    newPerDay:         parseInt(document.getElementById('setNewPerDay').value)        || 20,
    maxReviews:        parseInt(document.getElementById('setMaxReviews').value)       || 200,
    graduateInterval:  parseInt(document.getElementById('setGraduateInterval').value) || 1,
    easyInterval:      parseInt(document.getElementById('setEasyInterval').value)     || 4,
    newOrder:          document.getElementById('setNewOrder').value,
    autoTTS:           document.getElementById('setAutoTTS').checked,
    showPinyin:        document.getElementById('setShowPinyin').checked,
    showEnglish:       document.getElementById('setShowEnglish').checked,
    defaultMode:       document.getElementById('setDefaultMode').value,
    hintDelay:         parseInt(document.getElementById('setHintDelay').value)        || 0,
    soundFx:           document.getElementById('setSoundFx').checked,
  };
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(appSettings));
  applySettings();
  closeSettings();
  showToast('✅ Đã lưu cài đặt!');
}

function resetSettings() {
  if (!confirm('Đặt lại tất cả cài đặt về mặc định?')) return;
  appSettings = { ...SETTINGS_DEFAULT };
  localStorage.removeItem(SETTINGS_KEY);
  openSettings(); // re-populate form with defaults
  showToast('↺ Đã đặt lại mặc định');
}

function showToast(msg) {
  let t = document.getElementById('appToast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'appToast';
    t.style.cssText = `
      position:fixed;bottom:90px;left:50%;transform:translateX(-50%);
      background:var(--surface);color:var(--text);border:1px solid var(--border);
      border-radius:12px;padding:10px 20px;font-size:14px;font-weight:600;
      box-shadow:0 4px 20px rgba(0,0,0,.3);z-index:9999;
      transition:opacity .3s;pointer-events:none;
    `;
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.opacity = '0'; }, 2200);
}

// (playTTS settings integration handled directly in the function above)

// Close settings on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const overlay = document.getElementById('settingsOverlay');
    if (overlay && overlay.style.display !== 'none') closeSettings();
  }
});

// Settings loaded in DOMContentLoaded

