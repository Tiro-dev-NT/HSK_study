// ─── SRS ENGINE (SM-2 Algorithm) ─────────────────────────────────────
// Shared across Flashcard, Typing, MCQ modes
// Storage key: "hsk_srs" → { [hanzi]: { interval, ease, dueDate, reps, lapses, lastReview } }

const SRS_KEY = 'hsk_srs';
const SRS_DAILY_KEY = 'hsk_srs_daily_reviews';
const SRS_NEW_PER_DAY = 20; // configurable: max new cards per day per deck

// Quality values matching UI buttons:
// 0 = Again (Không nhớ), 1 = Hard (Khó), 2 = Good (Ổn), 3 = Easy (Dễ)
const QUALITY_LABELS = ['again', 'hard', 'good', 'easy'];

function loadSRS() {
  srsData = JSON.parse(localStorage.getItem(SRS_KEY) || '{}');
}

function saveSRS() {
  localStorage.setItem(SRS_KEY, JSON.stringify(srsData));
}

function getSRSCard(hanzi) {
  return srsData[hanzi] || null;
}

// Update SRS state after answering a card
// quality: 0-3 (again/hard/good/easy)
function updateSRSCard(hanzi, quality) {
  const today = new Date().toISOString().split('T')[0];
  let card = srsData[hanzi] || {
    interval: 0, ease: 2.5, dueDate: today,
    reps: 0, lapses: 0, lastReview: null
  };

  card.lastReview = today;

  if (quality === 0) {
    // Again: reset to relearning
    card.lapses += 1;
    card.interval = 1;
    card.ease = Math.max(1.3, card.ease - 0.2);
    card.reps = 0;
  } else {
    // SM-2 core
    card.reps += 1;
    if (card.reps === 1) {
      card.interval = quality === 3 ? 4 : 1;
    } else if (card.reps === 2) {
      card.interval = quality === 3 ? 6 : 3;
    } else {
      card.interval = Math.round(card.interval * card.ease);
    }
    // Ease factor adjustment
    if (quality === 1) card.ease = Math.max(1.3, card.ease - 0.15);
    if (quality === 3) card.ease = Math.min(3.0, card.ease + 0.1);
    // Hard/Good keep ease same, just clamp
    card.ease = Math.max(1.3, Math.min(3.0, card.ease));
  }

  // Set next due date
  const due = new Date();
  due.setDate(due.getDate() + card.interval);
  card.dueDate = due.toISOString().split('T')[0];

  srsData[hanzi] = card;
  saveSRS();
  if (typeof Quests !== 'undefined') Quests.incrementMetric('srs_reviewed');
  // Persist daily review count in localStorage
  var dailyData = JSON.parse(localStorage.getItem(SRS_DAILY_KEY) || '{}');
  if (dailyData.date !== today) { dailyData = { date: today, count: 0 }; }
  dailyData.count++;
  localStorage.setItem(SRS_DAILY_KEY, JSON.stringify(dailyData));
  return card;
}

// Categorize a list of words into New / Due / Relearning
function categorizeDeck(words) {
  const today = new Date().toISOString().split('T')[0];
  const newCards = [];
  const dueCards = [];
  const relearning = [];

  words.forEach(w => {
    const card = getSRSCard(w.h);
    if (!card || card.reps === 0) {
      newCards.push(w);
    } else if (card.lapses > 0 && card.dueDate <= today) {
      relearning.push(w);
    } else if (card.dueDate <= today) {
      dueCards.push(w);
    }
    // else: not due yet — scheduled for future
  });

  return { newCards, dueCards, relearning };
}

// Build today's study queue: relearning first → due → new (capped)
function buildStudyQueue(words, newLimit = SRS_NEW_PER_DAY) {
  const { newCards, dueCards, relearning } = categorizeDeck(words);
  const newToday = newCards.slice(0, newLimit);
  return {
    queue: [...relearning, ...dueCards, ...newToday],
    stats: {
      new: newCards.length,
      due: dueCards.length,
      relearn: relearning.length,
      newToday: newToday.length
    }
  };
}

// Get SRS badge HTML for a deck
function getSRSBadgeHTML(words) {
  const { newCards, dueCards, relearning } = categorizeDeck(words);
  if (!newCards.length && !dueCards.length && !relearning.length) {
    return '<span class="srs-badge srs-done">✓ Đã ôn hôm nay</span>';
  }
  let html = '';
  if (newCards.length) html += `<span class="srs-badge srs-new">🔵 ${Math.min(newCards.length, SRS_NEW_PER_DAY)} mới</span>`;
  if (dueCards.length) html += `<span class="srs-badge srs-due">🟠 ${dueCards.length} ôn</span>`;
  if (relearning.length) html += `<span class="srs-badge srs-relearn">🔴 ${relearning.length} học lại</span>`;
  return html;
}

// Minutes until next review (for flashcard interval display)
function getDailyReviewCount() {
  var today = new Date().toISOString().split('T')[0];
  var dailyData = JSON.parse(localStorage.getItem(SRS_DAILY_KEY) || '{}');
  if (dailyData.date !== today) return 0;
  return dailyData.count || 0;
}

function getIntervalLabel(quality) {
  const labels = {
    0: '1 phút',
    1: '6 phút',
    2: '10 phút',
    3: '4 ngày'
  };
  return labels[quality] || '?';
}
