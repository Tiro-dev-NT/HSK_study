// ═══════════════════════════════════════════════════════
// QUESTS.JS — Quest & Token System (Phase L)
// • Token earn/spend, daily/weekly quest rotation, progress tracking
// • Quest definitions: 4 tiers (⚡📚🔥💀) + Weekly + Special + Chains
// • All state via AppState.tokenData / AppState.questData
// ═══════════════════════════════════════════════════════

// ── Quest Definitions ──────────────────────────────────

var DAILY_TIER_EASY = [
  { id: 'streak_keep',  icon: '🌟', title: 'Ngọn lửa không tắt', desc: 'Học ≥1 thẻ để giữ chuỗi',       metric: 'cards_studied',  target: 1,  rewards: { token: 5,  xp: 10 } },
  { id: 'first_card',   icon: '🃏', title: 'Bước chân đầu tiên', desc: 'Học thẻ đầu tiên hôm nay',       metric: 'cards_studied',  target: 1,  rewards: { token: 5,  xp: 5  } },
  { id: 'quick_3',      icon: '⚡', title: 'Nhanh như chớp',     desc: 'Trả lời đúng 3 câu liên tiếp',   metric: 'correct_streak', target: 3,  rewards: { token: 8,  xp: 15 } },
  { id: 'open_dict',    icon: '📖', title: 'Tò mò mỗi ngày',     desc: 'Tra từ điển 1 từ bất kỳ',        metric: 'dict_opened',    target: 1,  rewards: { token: 5,  xp: 5  } },
  { id: 'play_any',     icon: '🎮', title: 'Khởi động',          desc: 'Vào chơi 1 game bất kỳ',          metric: 'games_played',   target: 1,  rewards: { token: 8,  xp: 10 } },
  { id: 'tts_5',        icon: '🔊', title: 'Lắng nghe',          desc: 'Nghe phát âm 5 từ (click TTS)',   metric: 'tts_clicked',    target: 5,  rewards: { token: 5,  xp: 5  } },
  { id: 'login_bonus',  icon: '☀️', title: 'Chào ngày mới',      desc: 'Đăng nhập và vào app hôm nay',    metric: 'app_opened',     target: 1,  rewards: { token: 3,  xp: 0  } },
  { id: 'mai_first',    icon: '📖', title: 'Bài học đầu tiên',  desc: 'Hoàn thành 1 bài Truyện Mai',      metric: 'mai_lessons',    target: 1,  rewards: { token: 8,  xp: 15 } },
  { id: 'topic_try',    icon: '🎯', title: 'Thử học chủ đề',     desc: 'Học theo 1 chủ đề bất kỳ',         metric: 'topics_tried',   target: 1,  rewards: { token: 8,  xp: 10 } },
  { id: 'analyze_text', icon: '🔍', title: 'Phân tích văn bản',  desc: 'Dùng Text Analyzer 1 lần',        metric: 'text_analyzed',  target: 1,  rewards: { token: 5,  xp: 10 } },
];

var DAILY_TIER_NORMAL = [
  { id: 'study_10',     icon: '📚', title: 'Học chăm chỉ',       desc: 'Học 10 thẻ hôm nay',              metric: 'cards_studied',  target: 10, rewards: { token: 10, xp: 20 } },
  { id: 'review_srs',   icon: '🔄', title: 'Ôn tập đều đặn',     desc: 'Ôn 5 thẻ SRS hôm nay',           metric: 'srs_reviewed',   target: 5,  rewards: { token: 10, xp: 15 } },
  { id: 'correct_10',   icon: '✅', title: 'Chính xác',           desc: 'Trả lời đúng 10 câu',             metric: 'correct_answers',target: 10, rewards: { token: 10, xp: 15 } },
  { id: 'earn_50xp',    icon: '⚡', title: 'Tích lũy nhanh',      desc: 'Kiếm 50 XP hôm nay',             metric: 'xp_earned_today',target: 50, rewards: { token: 8,  xp: 0  } },
  { id: 'srs_5_good',   icon: '🌿', title: 'SRS chất lượng',      desc: 'Ôn 5 thẻ SRS chất lượng tốt',   metric: 'srs_reviewed',   target: 5,  rewards: { token: 12, xp: 20 } },
  { id: 'combo_10',     icon: '🎯', title: 'Chuỗi chính xác',     desc: 'Combo đúng 10 câu liên tiếp',    metric: 'correct_streak', target: 10, rewards: { token: 15, xp: 20 } },
  { id: 'play_game',    icon: '🎮', title: 'Chiến binh cơ bản',   desc: 'Chơi 1 game đến kết thúc',       metric: 'games_played',   target: 1,  rewards: { token: 12, xp: 20 } },
  { id: 'study_diff',   icon: '🏔️', title: 'Thử thách từ khó',   desc: 'Học 5 từ HSK4+ hôm nay',         metric: 'hard_studied',   target: 5,  rewards: { token: 12, xp: 25 } },
  { id: 'review_new',   icon: '🆕', title: 'Từ mới mỗi ngày',    desc: 'Học ít nhất 3 từ chưa từng học', metric: 'new_cards',      target: 3,  rewards: { token: 10, xp: 20 } },
  { id: 'deck_session', icon: '📋', title: 'Tập trung',           desc: 'Hoàn thành 1 session bất kỳ',    metric: 'sessions_done',  target: 1,  rewards: { token: 10, xp: 15 } },
  { id: 'mai_3',        icon: '📚', title: 'Tiến bộ từng ngày',  desc: 'Hoàn thành 3 bài Truyện Mai',    metric: 'mai_lessons',    target: 3,  rewards: { token: 15, xp: 30 } },
  { id: 'mock_try',     icon: '📝', title: 'Thử sức thi thử',    desc: 'Hoàn thành 1 bài thi thử HSK',   metric: 'mock_passed',    target: 1,  rewards: { token: 12, xp: 25 } },
];

var DAILY_TIER_HARD = [
  { id: 'study_20',     icon: '🔥', title: 'Học viên chăm chỉ',  desc: 'Học 20 thẻ hôm nay',              metric: 'cards_studied',  target: 20, rewards: { token: 20, xp: 40 } },
  { id: 'correct_15',   icon: '✅', title: 'Trả lời chính xác',  desc: 'Trả lời đúng 15 câu',             metric: 'correct_answers',target: 15, rewards: { token: 15, xp: 30 } },
  { id: 'earn_100xp',   icon: '💫', title: 'Tích lũy kinh nghiệm',desc: 'Kiếm 100 XP hôm nay',            metric: 'xp_earned_today',target: 100,rewards: { token: 18, xp: 0  } },
  { id: 'srs_10',       icon: '🔄', title: 'Ôn tập cật lực',     desc: 'Ôn 10 thẻ SRS hôm nay',          metric: 'srs_reviewed',   target: 10, rewards: { token: 18, xp: 30 } },
  { id: 'games_3',      icon: '🎮', title: 'Bá vương game',       desc: 'Chơi 3 game khác nhau hôm nay',  metric: 'games_played',   target: 3,  rewards: { token: 20, xp: 35 } },
  { id: 'typing_20',    icon: '⌨️', title: 'Đánh máy nhanh',     desc: 'Typing mode 20 câu',              metric: 'typing_answers', target: 20, rewards: { token: 20, xp: 40 } },
  { id: 'mcq_perfect',  icon: '🏆', title: 'Không sai phạm',     desc: 'MCQ 10 câu không lỗi nào',       metric: 'perfect_mcq',    target: 1,  rewards: { token: 22, xp: 40 } },
  { id: 'deck_master',  icon: '📖', title: 'Chinh phục deck',     desc: 'Hoàn thành toàn bộ thẻ 1 deck', metric: 'deck_completed', target: 1,  rewards: { token: 25, xp: 50 } },
  { id: 'win_boss',     icon: '⚔️', title: 'Thảo phạt yêu quái', desc: 'Thắng Boss Battle 1 lần',        metric: 'boss_won',       target: 1,  rewards: { token: 20, xp: 30 } },
  { id: 'study_hsk5',   icon: '🎓', title: 'HSK nâng cao',        desc: 'Học 10 từ HSK5/6 hôm nay',      metric: 'hard_studied',   target: 10, rewards: { token: 20, xp: 35 } },
  { id: 'mai_5',        icon: '🎓', title: 'Học viên tích cực',  desc: 'Hoàn thành 5 bài Truyện Mai',   metric: 'mai_lessons',    target: 5,  rewards: { token: 25, xp: 50 } },
];

var DAILY_TIER_SKULL = [
  { id: 'study_50',     icon: '💀', title: 'Siêu học giả',       desc: 'Học 50 thẻ hôm nay',              metric: 'cards_studied',  target: 50, rewards: { token: 50, xp: 100 } },
  { id: 'correct_30',   icon: '💀', title: 'Cỗ máy trả lời',     desc: 'Đúng 30 câu liên tiếp không sai', metric: 'correct_streak', target: 30, rewards: { token: 45, xp: 80  } },
  { id: 'earn_200xp',   icon: '💀', title: 'XP cuồng',           desc: 'Kiếm 200 XP hôm nay',             metric: 'xp_earned_today',target: 200,rewards: { token: 40, xp: 0   } },
  { id: 'daily_chall',  icon: '📅', title: 'Thử thách ngày',     desc: 'Hoàn thành Daily Challenge',      metric: 'daily_challenge_done', target: 1, rewards: { token: 35, xp: 60 } },
  { id: 'boss_3',       icon: '💀', title: 'Thảm sát boss',       desc: 'Thắng Boss Battle 3 lần hôm nay',metric: 'boss_won',       target: 3,  rewards: { token: 60, xp: 100 } },
  { id: 'perfect_day',  icon: '💀', title: 'Ngày hoàn hảo',      desc: 'Hoàn thành cả 2 quest kia + SRS', metric: 'perfect_day',    target: 1,  rewards: { token: 50, xp: 80  } },
];

// Pro-exclusive quests — shown as 4th daily slot for Pro subscribers
var DAILY_TIER_PREMIUM = [
  { id: 'racing_finish',  icon: '🏎️', title: 'Tay đua tốc độ',      desc: 'Hoàn thành Racing Quiz 1 lần',    metric: 'racing_done',   target: 1, rewards: { token: 20, xp: 30 }, requires: 'pro' },
  { id: 'sentence_build', icon: '📝', title: 'Xây câu hoàn hảo',    desc: 'Hoàn thành Sentence Builder',     metric: 'sentence_done', target: 1, rewards: { token: 20, xp: 30 }, requires: 'pro' },
  { id: 'listen_session', icon: '🎧', title: 'Luyện nghe chuyên sâu',desc: 'Dùng chế độ Nghe trong Reading', metric: 'listen_used',   target: 1, rewards: { token: 25, xp: 35 }, requires: 'pro' },
  { id: 'boss_premium',   icon: '👑', title: 'Chiến binh tinh nhuệ', desc: 'Thắng Boss Battle 2 lần hôm nay',metric: 'boss_won',      target: 2, rewards: { token: 30, xp: 40 }, requires: 'pro' },
  { id: 'grammar_lesson', icon: '📖', title: 'Học ngữ pháp',         desc: 'Hoàn thành 1 bài ngữ pháp',      metric: 'grammar_done',  target: 1, rewards: { token: 15, xp: 25 }, requires: 'pro' },
  { id: 'reading_passage',icon: '📰', title: 'Đọc hiểu nâng cao',   desc: 'Đọc 1 đoạn văn trong Reading',   metric: 'reading_done',  target: 1, rewards: { token: 15, xp: 20 }, requires: 'pro' },
];

var WEEKLY_QUESTS = [
  { id: 'w_100_cards',  icon: '📖', title: 'Học sinh tiêu biểu', desc: 'Học 100 thẻ trong tuần',          metric: 'weekly_cards',   target: 100,rewards: { token: 50,  xp: 100 } },
  { id: 'w_5_daily',    icon: '🏆', title: 'Tuần hoàn hảo',      desc: 'Daily Challenge 5 ngày',          metric: 'weekly_daily_done',target:5, rewards: { token: 80,  xp: 150 } },
  { id: 'w_500xp',      icon: '💫', title: 'Tích lũy kinh nghiệm',desc: 'Đạt 500 XP trong tuần',          metric: 'weekly_xp',      target: 500,rewards: { token: 60,  xp: 0   } },
  { id: 'w_10_games',   icon: '🎯', title: 'Chiến binh bất bại',  desc: 'Chơi 10 game trong tuần',        metric: 'weekly_games',   target: 10, rewards: { token: 50,  xp: 80  } },
  { id: 'w_streak7',    icon: '🔥', title: 'Thần lửa',            desc: 'Streak 7 ngày liên tiếp',        metric: 'streak_days',    target: 7,  rewards: { token: 100, xp: 200 } },
  { id: 'w_50_correct', icon: '🎯', title: 'Chuyên gia chính xác',desc: 'Đúng 50 câu trong tuần',        metric: 'weekly_correct', target: 50, rewards: { token: 55,  xp: 90  } },
  { id: 'w_3_boss',     icon: '⚔️', title: 'Chinh phục boss',     desc: 'Thắng boss 3 lần trong tuần',   metric: 'weekly_boss',    target: 3,  rewards: { token: 70,  xp: 120 } },
  { id: 'w_5_srs_days', icon: '🔄', title: 'Ôn tập kiên trì',    desc: 'Ôn SRS ít nhất 5 ngày trong tuần',metric:'weekly_srs_days',target: 5, rewards: { token: 45,  xp: 80  } },
  { id: 'w_200xp_day',  icon: '⚡', title: 'Ngày bùng nổ',       desc: 'Kiếm 200 XP trong 1 ngày duy nhất',metric:'weekly_big_day',target: 1, rewards: { token: 65,  xp: 0   } },
  { id: 'w_mai_10',     icon: '📖', title: 'Chinh phục giáo trình',desc:'Hoàn thành 10 bài Truyện Mai trong tuần',metric:'weekly_mai',target: 10, rewards: { token: 60,  xp: 100 } },
  { id: 'w_3_mock',     icon: '📝', title: 'Thi thử kiên trì',   desc: 'Pass 3 bài thi thử trong tuần', metric:'weekly_mock',   target: 3,  rewards: { token: 55,  xp: 90  } },
];

var QUEST_CHAINS = {
  hsk_path: {
    title: 'HSK Path', icon: '📜',
    steps: [
      { id: 'cp_hsk1', title: 'Chinh phục HSK 1', desc: 'Học 50 thẻ HSK 1',      metric: 'chain_hsk1', target: 50,  rewards: { token: 30, xp: 50  } },
      { id: 'cp_hsk2', title: 'Chinh phục HSK 2', desc: 'Học 50 thẻ HSK 2',      metric: 'chain_hsk2', target: 50,  rewards: { token: 30, xp: 50  } },
      { id: 'cp_hsk3', title: 'Chinh phục HSK 3', desc: 'Học 50 thẻ HSK 3',      metric: 'chain_hsk3', target: 50,  rewards: { token: 30, xp: 50  } },
      { id: 'cp_hsk4', title: 'Chinh phục HSK 4+',desc: 'Học 100 thẻ HSK 4-6',   metric: 'chain_hsk4', target: 100, rewards: { token: 50, xp: 80  } },
      { id: 'cp_srs',  title: 'SRS Master',        desc: 'Master 20 thẻ SRS',    metric: 'chain_srs',  target: 20,  rewards: { token: 80, xp: 0, badge: 'HSK Scholar' } },
    ]
  },
  game_warrior: {
    title: 'Game Warrior', icon: '⚔️',
    steps: [
      { id: 'gw_speed', title: 'Speed Demon',   desc: 'Chơi Speed Quiz 5 lần',   metric: 'chain_speed',  target: 5,  rewards: { token: 20, xp: 30 } },
      { id: 'gw_mem',   title: 'Memory King',   desc: 'Chơi Memory Flip 5 lần',  metric: 'chain_memory', target: 5,  rewards: { token: 20, xp: 30 } },
      { id: 'gw_boss',  title: 'Boss Slayer',   desc: 'Thắng Boss Battle 3 lần', metric: 'chain_boss',   target: 3,  rewards: { token: 30, xp: 50 } },
      { id: 'gw_all',   title: 'All-Rounder',   desc: 'Chơi 20 game các loại',   metric: 'chain_games',  target: 20, rewards: { token: 40, xp: 60 } },
      { id: 'gw_top',   title: 'Game Master',   desc: 'Chơi 50 game tổng',       metric: 'chain_games',  target: 50, rewards: { token: 100, xp: 0, badge: 'Game Master' } },
    ]
  },
  scholar: {
    title: 'Scholar', icon: '🎓',
    steps: [
      { id: 'sc_srs7',  title: 'SRS Kỷ luật',  desc: 'Ôn SRS 7 ngày liên tiếp', metric: 'chain_srs_days',target: 7,  rewards: { token: 25, xp: 40 } },
      { id: 'sc_typ',   title: 'Typing Pro',    desc: 'Đúng 100 câu typing',     metric: 'chain_typing', target: 100,rewards: { token: 35, xp: 50 } },
      { id: 'sc_dc3',   title: 'Daily Champ',   desc: 'Daily Challenge 3 lần',   metric: 'chain_dc',     target: 3,  rewards: { token: 40, xp: 60 } },
      // ─── Streak milestones (chốt 2026-05-23, xem TOKEN_SINK_ROADMAP.md) ───
      // Token cho streak được DIRECT-GRANT từ gamification.js checkAndUpdateStreak.
      // Chain quest ở đây CHỈ badge + outfit + cert (avoid double-grant).
      { id: 'sc_str30',  title: 'Streak 30',    desc: 'Giữ streak 30 ngày',      metric: 'streak_days',  target: 30,  rewards: { token: 0, xp: 100, badge: 'Streak 30' } },
      { id: 'sc_str60',  title: 'Devoted',      desc: 'Giữ streak 60 ngày',      metric: 'streak_days',  target: 60,  rewards: { token: 0, xp: 0,   badge: 'Devoted Scholar' } },
      { id: 'sc_str100', title: 'Centurion',    desc: 'Giữ streak 100 ngày',     metric: 'streak_days',  target: 100, rewards: { token: 0, xp: 0,   badge: 'Centurion', outfit: 'be_rong_centurion' } },
      { id: 'sc_str365', title: 'Năm Kiên Trì', desc: 'Giữ streak 365 ngày',     metric: 'streak_days',  target: 365, rewards: { token: 0, xp: 0,  badge: 'Year of Persistence', outfit: 'be_rong_year_limited', cert: 'one_year_persistence' } },
    ]
  }
};

// ── All daily quests flat (for lookup by id) ───────────
var ALL_DAILY_QUESTS = DAILY_TIER_EASY.concat(DAILY_TIER_NORMAL, DAILY_TIER_HARD, DAILY_TIER_SKULL, DAILY_TIER_PREMIUM);

var TOKEN_IMG = '<img src="token_2.png" class="token-img" width="14" height="14" alt="" style="vertical-align:middle;margin:0 2px">';

// ── Quests Engine ──────────────────────────────────────

var Quests = {

  // ── Init ─────────────────────────────────────────────
  init: function() {
    var today     = new Date().toISOString().split('T')[0];
    var weekStart = Quests._getWeekStart();
    var qd        = AppState.questData;

    // Reset daily if new day
    if (!qd.daily || qd.daily.date !== today) {
      var picked   = Quests._pickDaily(today);
      var progress = {};
      picked.forEach(function(id) { progress[id] = { current: 0, claimed: false }; });
      qd.daily = { date: today, active: picked, progress: progress };
      // Reset daily metrics
      qd.metrics = {
        date: today, cards_studied: 0, srs_reviewed: 0,
        correct_answers: 0, correct_streak: 0, games_played: 0,
        daily_challenge_done: false, boss_won: 0, xp_earned_today: 0,
        dict_opened: 0, tts_clicked: 0, sessions_done: 0, new_cards: 0,
        hard_studied: 0, typing_answers: 0, perfect_mcq: 0,
        deck_completed: 0, app_opened: 1, perfect_day: 0,
        racing_done: 0, sentence_done: 0, listen_used: 0,
        grammar_done: 0, reading_done: 0,
        mai_lessons: 0, topics_tried: 0, text_analyzed: 0, mock_passed: 0, hsk0_modules: 0
      };
    } else if (!qd.metrics || qd.metrics.date !== today) {
      qd.metrics = {
        date: today, cards_studied: 0, srs_reviewed: 0,
        correct_answers: 0, correct_streak: 0, games_played: 0,
        daily_challenge_done: false, boss_won: 0, xp_earned_today: 0,
        dict_opened: 0, tts_clicked: 0, sessions_done: 0, new_cards: 0,
        hard_studied: 0, typing_answers: 0, perfect_mcq: 0,
        deck_completed: 0, app_opened: 1, perfect_day: 0,
        racing_done: 0, sentence_done: 0, listen_used: 0,
        grammar_done: 0, reading_done: 0,
        mai_lessons: 0, topics_tried: 0, text_analyzed: 0, mock_passed: 0
      };
    } else {
      // Mark app opened for login_bonus quest
      qd.metrics.app_opened = 1;
    }

    // Reset weekly if new week
    if (!qd.weekly || qd.weekly.weekStart !== weekStart) {
      var wpicked   = Quests._pickWeekly(weekStart);
      var wprogress = {};
      wpicked.forEach(function(id) { wprogress[id] = { current: 0, claimed: false }; });
      qd.weekly = { weekStart: weekStart, active: wpicked, progress: wprogress };
    }

    // Init chains if not present
    if (!qd.chains) qd.chains = {};

    AppState.saveQuests();
    Quests._updateTokenUI();
    Quests._checkCompletion();

    // Sync any pending server-side token credits (purchases / subscription
    // bonuses delivered via PayOS webhook). Best-effort, non-blocking.
    if (window.Auth && Auth.user) {
      setTimeout(function() {
        if (Quests.syncFromServer) Quests.syncFromServer();
      }, 1500);
    }
  },

  // ── Token ops ─────────────────────────────────────────
  addToken: function(amount, reason) {
    var today = new Date().toISOString().split('T')[0];
    AppState.tokenData.balance         = (AppState.tokenData.balance || 0) + amount;
    AppState.tokenData.lifetime_earned = (AppState.tokenData.lifetime_earned || 0) + amount;
    if (!AppState.tokenData.history) AppState.tokenData.history = [];
    AppState.tokenData.history.unshift({ amount: amount, reason: reason, date: today });
    if (AppState.tokenData.history.length > 50) AppState.tokenData.history.pop();
    AppState.saveTokens();
    Quests._updateTokenUI();
  },

  spendToken: function(amount, reason) {
    if ((AppState.tokenData.balance || 0) < amount) return false;
    var today = new Date().toISOString().split('T')[0];
    AppState.tokenData.balance -= amount;
    if (!AppState.tokenData.history) AppState.tokenData.history = [];
    AppState.tokenData.history.unshift({ amount: -amount, reason: reason, date: today });
    if (AppState.tokenData.history.length > 50) AppState.tokenData.history.pop();
    AppState.saveTokens();
    Quests._updateTokenUI();
    return true;
  },

  getBalance: function() {
    return AppState.tokenData.balance || 0;
  },

  // ── Pull token bonuses from server (purchases + subscription rewards) ──
  // Webhook credits tokens to user_token_balance after PayOS payment. We
  // mirror the unsynced delta into AppState so the UI reflects it.
  // Tracks last_synced_at in tokenData so we only add new rows from the
  // ledger (no double-counting).
  syncFromServer: async function() {
    if (!window.SB || !window.Auth || !Auth.user) return 0;

    var since = AppState.tokenData.last_synced_at || '1970-01-01T00:00:00Z';
    var res = await SB.from('user_token_ledger')
      .select('delta, reason, created_at, ref_id')
      .eq('user_id', Auth.user.id)
      .gt('created_at', since)
      .order('created_at', { ascending: true })
      .limit(500);

    if (res.error) {
      console.warn('[Quests] syncFromServer failed:', res.error.message);
      return 0;
    }

    var rows = res.data || [];
    if (!rows.length) return 0;

    var totalDelta = 0;
    var today = new Date().toISOString().split('T')[0];
    if (!AppState.tokenData.history) AppState.tokenData.history = [];

    rows.forEach(function(r) {
      totalDelta += r.delta;
      AppState.tokenData.history.unshift({
        amount: r.delta,
        reason: r.reason,
        date:   (r.created_at || '').split('T')[0] || today,
        ref:    r.ref_id || null
      });
    });
    if (AppState.tokenData.history.length > 50) AppState.tokenData.history.length = 50;

    AppState.tokenData.balance = (AppState.tokenData.balance || 0) + totalDelta;
    if (totalDelta > 0) {
      AppState.tokenData.lifetime_earned = (AppState.tokenData.lifetime_earned || 0) + totalDelta;
    }
    AppState.tokenData.last_synced_at = rows[rows.length - 1].created_at;

    AppState.saveTokens();
    Quests._updateTokenUI();
    console.log('[Quests] Synced', rows.length, 'ledger rows, delta=' + totalDelta);
    return totalDelta;
  },

  // ── Daily pick (1 ⚡ + 1 📚 + 1 {🔥|💀} + 1 👑 for Pro) ──
  _pickDaily: function(dateStr) {
    var seed  = Quests._seedFromStr(dateStr);
    var easy  = Quests._seededPick(DAILY_TIER_EASY,   seed,      1);
    var norm  = Quests._seededPick(DAILY_TIER_NORMAL,  seed + 1, 1);
    var pool  = (seed % 3 === 0) ? DAILY_TIER_SKULL : DAILY_TIER_HARD;
    var hard  = Quests._seededPick(pool,               seed + 2, 1);
    var ids   = [easy[0].id, norm[0].id, hard[0].id];
    if (Quests._isPremium()) {
      var prem = Quests._seededPick(DAILY_TIER_PREMIUM, seed + 3, 1);
      ids.push(prem[0].id);
    }
    return ids;
  },

  _isPremium: function() {
    try {
      // isPro() là async (trả Promise) → so sánh === true luôn sai.
      // Dùng isProSync() (cache đã warm ở app init) cho hot path render quest.
      if (typeof Monetization !== 'undefined' && typeof Monetization.isProSync === 'function') {
        return Monetization.isProSync() === true;
      }
    } catch(e) {}
    return false;
  },

  // ── Weekly pick (2 from pool) ──────────────────────────
  _pickWeekly: function(weekStart) {
    var seed = Quests._seedFromStr(weekStart);
    var picked = Quests._seededPick(WEEKLY_QUESTS, seed, 2);
    return picked.map(function(q) { return q.id; });
  },

  // ── Seeded Fisher-Yates shuffle, return n items ────────
  _seededPick: function(arr, seed, n) {
    var copy = arr.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      seed = (seed * 1664525 + 1013904223) & 0xffffffff;
      var j = Math.abs(seed) % (i + 1);
      var tmp = copy[i]; copy[i] = copy[j]; copy[j] = tmp;
    }
    return copy.slice(0, n);
  },

  _seedFromStr: function(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash = hash & hash;
    }
    return Math.abs(hash);
  },

  _getWeekStart: function() {
    var d = new Date();
    d.setDate(d.getDate() - d.getDay() + 1); // Monday
    return d.toISOString().split('T')[0];
  },

  // ── Increment a metric → auto-sync progress ───────────
  incrementMetric: function(metric, amount) {
    amount = amount || 1;
    var qd = AppState.questData;
    if (!qd.metrics) return;
    if (typeof qd.metrics[metric] === 'boolean') {
      qd.metrics[metric] = true;
    } else if (typeof qd.metrics[metric] === 'number') {
      qd.metrics[metric] += amount;
    }
    AppState.saveQuests();
    Quests._syncProgress();
    Quests._checkCompletion();
    Quests._updateQuestUI();
  },

  // ── Sync quest progress from current metrics ──────────
  _syncProgress: function() {
    var qd = AppState.questData;
    var metrics = qd.metrics || {};

    // Daily quests
    (qd.daily.active || []).forEach(function(id) {
      var def = Quests._getDef(id);
      if (!def) return;
      if (!qd.daily.progress[id]) qd.daily.progress[id] = { current: 0, claimed: false };
      var raw = metrics[def.metric];
      var val = (raw === true) ? 1 : (raw || 0);
      qd.daily.progress[id].current = Math.min(val, def.target);
    });

    // Weekly quests
    (qd.weekly.active || []).forEach(function(id) {
      var def = Quests._getWeeklyDef(id);
      if (!def) return;
      if (!qd.weekly.progress[id]) qd.weekly.progress[id] = { current: 0, claimed: false };
      qd.weekly.progress[id].current = Math.min(
        Quests._getWeeklyMetric(def.metric), def.target
      );
    });
  },

  _getWeeklyMetric: function(metric) {
    if (metric === 'weekly_xp')    return (AppState.xpData && AppState.xpData.weeklyXP) || 0;
    if (metric === 'streak_days')  return typeof Gamification !== 'undefined' ? Gamification.getStreak() : 0;
    var qd = AppState.questData;
    return (qd.weekly && qd.weekly[metric]) || 0;
  },

  // ── Check quest completion, show toast ────────────────
  _checkCompletion: function() {
    var qd = AppState.questData;

    (qd.daily.active || []).forEach(function(id) {
      var def  = Quests._getDef(id);
      var prog = qd.daily.progress && qd.daily.progress[id];
      if (!def || !prog || prog.claimed) return;
      if (prog.current >= def.target && !prog._notified) {
        prog._notified = true;
        Quests._showReadyToast(def);
      }
    });
  },

  // ── Claim a quest reward ───────────────────────────────
  claimQuest: function(questId, type) {
    var qd   = AppState.questData;
    var pool = type === 'weekly' ? qd.weekly : qd.daily;
    var prog = pool && pool.progress && pool.progress[questId];
    if (!prog || prog.claimed) return;

    var def = type === 'weekly' ? Quests._getWeeklyDef(questId) : Quests._getDef(questId);
    if (!def) return;
    if (prog.current < def.target) return;
    if (def.requires && !Quests._isPremium()) return;

    prog.claimed = true;
    AppState.saveQuests();

    Quests.addToken(def.rewards.token, 'quest:' + questId);
    if (def.rewards.xp > 0 && typeof Gamification !== 'undefined') {
      Gamification.addXP(def.rewards.xp);
    }
    Quests._showClaimToast(def);
    Quests._updateQuestUI();
  },

  // ── Quest definition lookups ──────────────────────────
  _getDef: function(id) {
    return ALL_DAILY_QUESTS.find(function(q) { return q.id === id; }) || null;
  },

  _getWeeklyDef: function(id) {
    return WEEKLY_QUESTS.find(function(q) { return q.id === id; }) || null;
  },

  // ── UI: token badge + sidebar balance ─────────────────
  _updateTokenUI: function() {
    var bal = Quests.getBalance();
    var badge  = document.getElementById('token-count');
    var rs     = document.getElementById('rs-token-balance');
    var topbar = document.getElementById('topbarTokenBadge');
    if (badge)  badge.textContent  = bal;
    if (rs)     rs.textContent     = bal;
    if (topbar) topbar.textContent = String(bal);
  },

  // ── UI: re-render quest list wherever visible ─────────
  _updateQuestUI: function() {
    if (document.getElementById('home-quest-widget')) Quests.renderHomeWidget();
    if (document.getElementById('quest-page-container')) Quests.renderQuestPage();
  },

  // ── Toasts ────────────────────────────────────────────
  _showReadyToast: function(def) {
    Quests._toast('⚔️ Nhiệm vụ hoàn thành! ' + def.icon + ' ' + def.title + ' — Nhận thưởng ngay!', 'quest-ready');
  },

  _showClaimToast: function(def) {
    Quests._toast('🎉 +' + def.rewards.token + ' token' + (def.rewards.xp ? ' +' + def.rewards.xp + 'XP' : '') + ' — ' + def.title, 'quest-claim');
  },

  _toast: function(msg, cls) {
    var el = document.createElement('div');
    el.className = 'quest-toast ' + (cls || '');
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(function() { el.classList.add('quest-toast-show'); }, 10);
    setTimeout(function() {
      el.classList.remove('quest-toast-show');
      setTimeout(function() { el.remove(); }, 400);
    }, 3500);
  },

  // ── Home widget render ────────────────────────────────
  renderHomeWidget: function() {
    var container = document.getElementById('quest-widget-list');
    var countEl   = document.getElementById('quest-widget-count');
    if (!container) return;

    var qd    = AppState.questData;
    var daily = qd.daily || {};
    var active = daily.active || [];
    var done  = active.filter(function(id) {
      var p = daily.progress && daily.progress[id];
      var d = Quests._getDef(id);
      return p && d && p.current >= d.target;
    }).length;

    if (countEl) countEl.textContent = done + '/' + active.length;

    var html = '';
    active.forEach(function(id) {
      var def  = Quests._getDef(id);
      var prog = (daily.progress && daily.progress[id]) || { current: 0, claimed: false };
      if (!def) return;
      var pct     = Math.min(100, Math.round(prog.current / def.target * 100));
      var isDone  = prog.current >= def.target;
      var claimed = prog.claimed;
      html += '<div class="quest-mini-item' + (claimed ? ' claimed' : '') + '">' +
        '<div class="quest-mini-top">' +
          '<span class="quest-mini-icon">' + def.icon + '</span>' +
          '<span class="quest-mini-title">' + def.title + '</span>' +
          (claimed
            ? '<span class="quest-mini-status claimed">✅</span>'
            : isDone
              ? '<button class="quest-mini-claim" onclick="Quests.claimQuest(\'' + id + '\',\'daily\')">Nhận ' + TOKEN_IMG + def.rewards.token + '</button>'
              : '<span class="quest-mini-progress-txt">' + prog.current + '/' + def.target + '</span>'
          ) +
        '</div>' +
        '<div class="quest-mini-bar"><div class="quest-mini-fill" style="width:' + pct + '%"></div></div>' +
      '</div>';
    });
    container.innerHTML = html;
  },

  // ── Quest Hub page ────────────────────────────────────
  setupPage: function() {
    Quests._updateTokenUI();
    Quests._renderQuestHeader();
    Quests.renderQuestPage('daily');
    Quests._startCountdown();
  },

  _renderQuestHeader: function() {
    var el = document.getElementById('quest-page-balance');
    if (el) el.textContent = Quests.getBalance();
  },

  renderQuestPage: function(tab) {
    tab = tab || (document.querySelector('.quest-tab.active') || {}).dataset.tab || 'daily';
    var container = document.getElementById('quest-page-container');
    if (!container) return;

    var qd = AppState.questData;
    var html = '';

    if (tab === 'daily') {
      var daily  = qd.daily || {};
      var active = daily.active || [];
      html = Quests._renderQuestCards(active, daily.progress || {}, 'daily');
    } else {
      var weekly = qd.weekly || {};
      var active = weekly.active || [];
      html = Quests._renderQuestCards(active, weekly.progress || {}, 'weekly');
    }

    container.innerHTML = html || '<div class="quest-empty">Không có nhiệm vụ nào.</div>';
    if (document.getElementById('quest-page-balance')) {
      document.getElementById('quest-page-balance').textContent = Quests.getBalance();
    }
  },

  _renderQuestCards: function(active, progress, type) {
    var html = '';
    active.forEach(function(id) {
      var def  = type === 'weekly' ? Quests._getWeeklyDef(id) : Quests._getDef(id);
      var prog = progress[id] || { current: 0, claimed: false };
      if (!def) return;
      var pct    = Math.min(100, Math.round(prog.current / def.target * 100));
      var isDone = prog.current >= def.target;
      var premBadge = def.requires ? '<span class="quest-premium-badge">⭐ Basic+</span>' : '';
      html += '<div class="quest-card' + (prog.claimed ? ' quest-card-done' : '') + (def.requires ? ' quest-card-premium' : '') + '">' +
        '<div class="quest-card-top">' +
          '<span class="quest-card-icon">' + def.icon + '</span>' +
          '<div class="quest-card-info">' +
            '<div class="quest-card-title">' + def.title + premBadge + '</div>' +
            '<div class="quest-card-desc">' + def.desc + '</div>' +
          '</div>' +
          (prog.claimed
            ? '<div class="quest-card-claimed">✅ Đã nhận</div>'
            : isDone
              ? '<button class="quest-claim-btn" onclick="Quests.claimQuest(\'' + id + '\',\'' + type + '\')">Nhận thưởng</button>'
              : ''
          ) +
        '</div>' +
        '<div class="quest-progress-bar"><div class="quest-progress-fill" style="width:' + pct + '%"></div></div>' +
        '<div class="quest-card-footer">' +
          '<span class="quest-progress-label">' + prog.current + ' / ' + def.target + '</span>' +
          '<span class="quest-rewards">+' + def.rewards.token + TOKEN_IMG + (def.rewards.xp ? ' +' + def.rewards.xp + 'XP' : '') + '</span>' +
        '</div>' +
      '</div>';
    });
    return html;
  },

  switchTab: function(tab) {
    document.querySelectorAll('.quest-tab').forEach(function(t) { t.classList.remove('active'); });
    var activeTab = document.querySelector('.quest-tab[data-tab="' + tab + '"]');
    if (activeTab) activeTab.classList.add('active');
    Quests.renderQuestPage(tab);
  },

  // ── Countdown to next daily reset ────────────────────
  _startCountdown: function() {
    var el = document.getElementById('quest-countdown');
    if (!el) return;
    function update() {
      var now  = new Date();
      var midnight = new Date(now);
      midnight.setHours(24, 0, 0, 0);
      var diff = Math.floor((midnight - now) / 1000);
      var h = Math.floor(diff / 3600);
      var m = Math.floor((diff % 3600) / 60);
      var s = diff % 60;
      el.textContent = 'Reset trong ' +
        String(h).padStart(2,'0') + ':' +
        String(m).padStart(2,'0') + ':' +
        String(s).padStart(2,'0');
    }
    update();
    if (Quests._countdownTimer) clearInterval(Quests._countdownTimer);
    Quests._countdownTimer = setInterval(update, 1000);
  },
  _countdownTimer: null,
};

// Backward-compat shim
function addToken(amount, reason) { Quests.addToken(amount, reason); }
