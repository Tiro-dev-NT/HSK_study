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
  // Q2 — Easy mới (§6 QUEST_DESIGN.md)
  { id: 'reader_open',      icon: '📚', title: 'Mọt sách',        desc: 'Đọc 1 đoạn truyện (Đọc truyện)',                metric: 'reader_done',      target: 1, rewards: { token: 8,  xp: 15 } },
  { id: 'pinyin_e',         icon: '🔤', title: 'Chuẩn âm',         desc: 'Luyện 1 âm Pinyin (HSK 0)',                      metric: 'pinyin_drill',     target: 1, rewards: { token: 5,  xp: 10 } },
  { id: 'save_vocab',       icon: '📥', title: 'Nhặt từ',          desc: 'Lưu 1 từ vào Kho từ',                            metric: 'vocab_saved',      target: 1, rewards: { token: 5,  xp: 5  } },
  { id: 'shadow_warm',      icon: '🎤', title: 'Mở miệng',         desc: 'Luyện 1 câu Shadowing (không cần chấm)',          metric: 'shadow_practiced', target: 1, rewards: { token: 8,  xp: 15 } },
  { id: 'visit_community',  icon: '🤝', title: 'Ghé cộng đồng',   desc: 'Xem Bảng Phong Vân / Tri Ân',                    metric: 'community_visit',  target: 1, rewards: { token: 5,  xp: 5  } },
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
  // Q2 — Normal mới (§6)
  { id: 'reader_2',         icon: '📖', title: 'Đọc đều',          desc: 'Đọc 2 đoạn truyện hôm nay',                      metric: 'reader_done',      target: 2, rewards: { token: 12, xp: 20 } },
  { id: 'shadow_5',         icon: '🎙️',title: 'Luyện nói',        desc: 'Shadowing 5 câu (không cần chấm)',                metric: 'shadow_practiced', target: 5, rewards: { token: 12, xp: 20 } },
  { id: 'grammar_free',     icon: '📐', title: 'Nắm ngữ pháp',    desc: 'Học 1 điểm ngữ pháp',                             metric: 'grammar_done',     target: 1, rewards: { token: 10, xp: 20 } },
  { id: 'pinyin_5',         icon: '🔤', title: 'Vững phát âm',     desc: 'Luyện 5 âm Pinyin',                               metric: 'pinyin_drill',     target: 5, rewards: { token: 10, xp: 15 } },
  { id: 'handwrite_5',      icon: '✍️', title: 'Luyện bút',        desc: 'Viết tay 5 chữ',                                  metric: 'cards_studied',    target: 5, rewards: { token: 12, xp: 20 } },
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
  // Q2 — Hard mới (§6)
  { id: 'reader_mcq',       icon: '🧠', title: 'Đọc hiểu',         desc: 'Đọc 1 truyện + đúng hết MCQ',                    metric: 'reader_done',      target: 3, rewards: { token: 20, xp: 35 } },
  { id: 'polyglot',         icon: '🌐', title: 'Đa kỹ năng',       desc: 'Chạm 3 kỹ năng khác nhau hôm nay',         metric: 'skills_today',     target: 3, rewards: { token: 22, xp: 40 } },
  { id: 'shadow_10',        icon: '🎙️',title: 'Nói trôi chảy',    desc: 'Shadowing 10 câu',                                metric: 'shadow_practiced', target: 10, rewards: { token: 20, xp: 35 } },
];

var DAILY_TIER_SKULL = [
  { id: 'study_50',     icon: '💀', title: 'Siêu học giả',       desc: 'Học 50 thẻ hôm nay',              metric: 'cards_studied',  target: 50, rewards: { token: 50, xp: 100 } },
  { id: 'correct_30',   icon: '💀', title: 'Cỗ máy trả lời',     desc: 'Đúng 30 câu liên tiếp không sai', metric: 'correct_streak', target: 30, rewards: { token: 45, xp: 80  } },
  { id: 'earn_200xp',   icon: '💀', title: 'XP cuồng',           desc: 'Kiếm 200 XP hôm nay',             metric: 'xp_earned_today',target: 200,rewards: { token: 40, xp: 0   } },
  { id: 'daily_chall',  icon: '📅', title: 'Thử thách ngày',     desc: 'Hoàn thành Daily Challenge',      metric: 'daily_challenge_done', target: 1, rewards: { token: 35, xp: 60 } },
  { id: 'boss_3',       icon: '💀', title: 'Thảm sát boss',       desc: 'Thắng Boss Battle 3 lần hôm nay',metric: 'boss_won',       target: 3,  rewards: { token: 60, xp: 100 } },
  { id: 'perfect_day',  icon: '💥', title: 'Ngày hoàn hảo',      desc: 'Hoàn thành cả 2 quest kia + SRS', metric: 'perfect_day',    target: 1,  rewards: { token: 50, xp: 80  } },
  // Q2 — Skull mới (§6)
  { id: 'renaissance',      icon: '🏛️', title: 'Toàn tài',         desc: 'Chạm cả 4 kỹ năng 听说读写 trong 1 ngày',          metric: 'skills_today',     target: 4, rewards: { token: 50, xp: 90 } },
];

// Pro-exclusive quests — shown as 4th daily slot for Pro subscribers
var DAILY_TIER_PREMIUM = [
  { id: 'racing_finish',  icon: '🏎️', title: 'Tay đua tốc độ',      desc: 'Hoàn thành Racing Quiz 1 lần',    metric: 'racing_done',   target: 1, rewards: { token: 20, xp: 30 }, requires: 'pro' },
  { id: 'sentence_build', icon: '📝', title: 'Xây câu hoàn hảo',    desc: 'Hoàn thành Sentence Builder',     metric: 'sentence_done', target: 1, rewards: { token: 20, xp: 30 }, requires: 'pro' },
  { id: 'listen_session', icon: '🎧', title: 'Luyện nghe chuyên sâu',desc: 'Dùng chế độ Nghe trong Reading', metric: 'listen_used',   target: 1, rewards: { token: 25, xp: 35 }, requires: 'pro' },
  { id: 'boss_premium',   icon: '👑', title: 'Chiến binh tinh nhuệ', desc: 'Thắng Boss Battle 2 lần hôm nay',metric: 'boss_won',      target: 2, rewards: { token: 30, xp: 40 }, requires: 'pro' },
  { id: 'grammar_lesson', icon: '📖', title: 'Học ngữ pháp',         desc: 'Hoàn thành 1 bài ngữ pháp',      metric: 'grammar_done',  target: 1, rewards: { token: 15, xp: 25 }, requires: 'pro' },
  { id: 'reading_passage',icon: '📰', title: 'Đọc hiểu nâng cao',   desc: 'Đọc 1 đoạn văn trong Reading',   metric: 'reading_done',  target: 1, rewards: { token: 15, xp: 20 }, requires: 'pro' },
  // Q2 — Premium/AI-credit mới (§6 — Pro-only)
  { id: 'hskk_one',         icon: '🗣️', title: 'Thử khẩu ngữ',    desc: 'Chấm 1 câu HSKK',                                 metric: 'hskk_graded',     target: 1, rewards: { token: 25, xp: 35 }, requires: 'pro' },
  { id: 'writing_one',      icon: '📝', title: 'Luyện bút luận',   desc: 'Chấm 1 bài Writing',                              metric: 'writing_graded',  target: 1, rewards: { token: 25, xp: 35 }, requires: 'pro' },
  { id: 'tutor_chat',       icon: '💬', title: 'Hỏi gia sư',       desc: 'Hỏi Gia sư AI 1 câu',                            metric: 'tutor_msg',       target: 1, rewards: { token: 20, xp: 30 }, requires: 'pro' },
  { id: 'shadow_graded_3',  icon: '🎯', title: 'Chuẩn từng âm',   desc: 'Chấm 3 câu Shadowing',                            metric: 'shadow_graded',   target: 3, rewards: { token: 25, xp: 35 }, requires: 'pro' },
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
  // Q2 — Weekly mới (§7)
  { id: 'w_reader_7',       icon: '📚', title: 'Tuần đọc sách',    desc: 'Đọc 7 đoạn truyện trong tuần',                    metric: 'weekly_reader',        target: 7,   rewards: { token: 60,  xp: 100 } },
  { id: 'w_shadow_5d',      icon: '🎤', title: 'Kiên trì luyện nói',desc: 'Shadowing ≥5 ngày trong tuần',                   metric: 'weekly_shadow_days',   target: 5,   rewards: { token: 65,  xp: 110 } },
  { id: 'w_all_skills',     icon: '🏛️', title: 'Ngũ kỹ toàn vẹn', desc: 'Chạm đủ 听说读写译 trong tuần',                    metric: 'weekly_skills',        target: 5,   rewards: { token: 100, xp: 200 } },
  { id: 'w_explore_hubs',   icon: '🧭', title: 'Khám phá',         desc: 'Ghé đủ 6 hub trong tuần',                         metric: 'weekly_hubs',          target: 6,   rewards: { token: 50,  xp: 80  } },
  { id: 'w_pinyin_30',      icon: '🔤', title: 'Sạch phát âm',     desc: 'Luyện 30 âm Pinyin trong tuần',                   metric: 'weekly_pinyin',        target: 30,  rewards: { token: 50,  xp: 80  } },
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
  },
  // Q2 chains mới (§8 QUEST_DESIGN.md)
  speaker: {
    title: 'Khẩu Ngữ', icon: '🗣️',
    proOnly: true,   // các bước chấm tốn credit
    steps: [
      { id: 'sp_shadow',     title: 'Bắt chước',          desc: 'Luyện 30 câu Shadowing',         metric: 'chain_shadow',      target: 30,  rewards: { token: 30, xp: 50 } },
      { id: 'sp_hskk_so',   title: 'Sơ cấp khẩu ngữ',   desc: 'Pass 3 đề HSKK Sơ cấp',         metric: 'chain_hskk_so',    target: 3,   rewards: { token: 40, xp: 60 } },
      { id: 'sp_hskk_zhong',title: 'Trung cấp khẩu ngữ', desc: 'Pass 3 đề HSKK Trung cấp',      metric: 'chain_hskk_zhong', target: 3,   rewards: { token: 50, xp: 80 } },
      { id: 'sp_master',    title: 'Diễn Giả',            desc: '100 câu khẩu ngữ tổng',          metric: 'chain_speak_total', target: 100, rewards: { token: 100, xp: 0, badge: 'Diễn Giả' } },
    ]
  },
  reader: {
    title: 'Mọt Sách', icon: '📚',
    steps: [
      { id: 'rd_10',    title: 'Tập đọc',     desc: 'Đọc 10 đoạn truyện',             metric: 'chain_reader',     target: 10,  rewards: { token: 25, xp: 40 } },
      { id: 'rd_30',    title: 'Ham đọc',     desc: 'Đọc 30 đoạn truyện',             metric: 'chain_reader',     target: 30,  rewards: { token: 40, xp: 60 } },
      { id: 'rd_hsk5',  title: 'Đọc nâng cao',desc: 'Đọc 5 truyện HSK5+',             metric: 'chain_reader_adv', target: 5,   rewards: { token: 50, xp: 80 } },
      { id: 'rd_master',title: 'Thư Sinh',    desc: 'Đọc 80 đoạn truyện',             metric: 'chain_reader',     target: 80,  rewards: { token: 100, xp: 0, badge: 'Thư Sinh' } },
    ]
  },
  toolsmith: {
    title: 'Bậc Thầy Công Cụ', icon: '🧰',
    steps: [
      { id: 'ts_dict',    title: 'Tra cứu',    desc: 'Dùng Từ điển',                   metric: 'dict_opened',   target: 1,  rewards: { token: 10, xp: 0 } },
      { id: 'ts_pinyin',  title: 'Phát âm',    desc: 'Dùng Pinyin Lab',                metric: 'pinyin_drill',  target: 1,  rewards: { token: 10, xp: 0 } },
      { id: 'ts_analyze', title: 'Phân tích',  desc: 'Dùng Text Analyzer',             metric: 'text_analyzed', target: 1,  rewards: { token: 10, xp: 0 } },
      { id: 'ts_write',   title: 'Viết tay',   desc: 'Dùng Luyện viết',                metric: 'cards_studied', target: 1,  rewards: { token: 10, xp: 0 } },
      { id: 'ts_all',     title: 'Thợ Cả',     desc: 'Dùng đủ 4 công cụ trên',         metric: 'ts_all_done',   target: 1,  rewards: { token: 50, xp: 0, badge: 'Toolsmith' } },
    ]
  },
  rookie: {
    title: 'Tân Binh', icon: '🐣',
    oneTime: true,    // không reset daily, lưu vĩnh viễn trong qd.chains.rookie
    steps: [
      { id: 'rk_card',   title: 'Bài đầu',              desc: 'Học 5 thẻ đầu tiên',              metric: 'cards_studied', target: 5,  rewards: { token: 10, xp: 0 } },
      { id: 'rk_mai',    title: 'Câu chuyện đầu',       desc: 'Hoàn thành 1 bài Truyện Mai',     metric: 'mai_lessons',   target: 1,  rewards: { token: 10, xp: 0 } },
      { id: 'rk_reader', title: 'Trang đầu',            desc: 'Đọc 1 đoạn truyện',               metric: 'reader_done',   target: 1,  rewards: { token: 10, xp: 0 } },
      { id: 'rk_quiz',   title: 'Thử sức',              desc: 'Hoàn thành 1 quiz',               metric: 'sessions_done', target: 1,  rewards: { token: 10, xp: 0 } },
      { id: 'rk_done',   title: 'Nhập Môn',             desc: 'Hoàn thành tour Tân Binh',        metric: 'rookie_done',   target: 1,  rewards: { token: 50, xp: 0, outfit: 'be_rong_rookie' } },
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
        mai_lessons: 0, topics_tried: 0, text_analyzed: 0, mock_passed: 0, hsk0_modules: 0,
        // Q1: metric mới (wire 2026-06-13)
        reader_done: 0, pinyin_drill: 0,
        shadow_practiced: 0, shadow_graded: 0,
        hskk_graded: 0, writing_graded: 0,
        tutor_msg: 0, vocab_saved: 0, community_visit: 0,
        skills_today: 0,
        skills_first: {}   // track first-of-day per skill group for skills_today
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
        mai_lessons: 0, topics_tried: 0, text_analyzed: 0, mock_passed: 0, hsk0_modules: 0,
        // Q1: metric mới (wire 2026-06-13)
        reader_done: 0, pinyin_drill: 0,
        shadow_practiced: 0, shadow_graded: 0,
        hskk_graded: 0, writing_graded: 0,
        tutor_msg: 0, vocab_saved: 0, community_visit: 0,
        skills_today: 0,
        skills_first: {}   // track first-of-day per skill group for skills_today
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

    var oldVal = qd.metrics[metric];
    if (typeof qd.metrics[metric] === 'boolean') {
      qd.metrics[metric] = true;
    } else if (typeof qd.metrics[metric] === 'number') {
      qd.metrics[metric] += amount;
    }

    // Propagate to weekly metrics
    if (qd.weekly) {
      var w = qd.weekly;
      var addWeekly = function(key, amt) {
        w[key] = (w[key] || 0) + (amt || 1);
      };

      if (metric === 'cards_studied') addWeekly('weekly_cards', amount);
      if (metric === 'games_played') addWeekly('weekly_games', amount);
      if (metric === 'correct_answers') addWeekly('weekly_correct', amount);
      if (metric === 'boss_won') addWeekly('weekly_boss', amount);
      if (metric === 'mai_lessons') addWeekly('weekly_mai', amount);
      if (metric === 'mock_passed') addWeekly('weekly_mock', amount);
      if (metric === 'reader_done') addWeekly('weekly_reader', amount);
      if (metric === 'pinyin_drill') addWeekly('weekly_pinyin', amount);

      if (metric === 'daily_challenge_done' && oldVal !== true) {
        addWeekly('weekly_daily_done', 1);
      }
      if (metric === 'srs_reviewed' && (oldVal || 0) === 0) {
        addWeekly('weekly_srs_days', 1);
      }
      if ((metric === 'shadow_practiced' || metric === 'shadow_graded') && 
          ((qd.metrics.shadow_practiced || 0) + (qd.metrics.shadow_graded || 0) === amount)) {
        addWeekly('weekly_shadow_days', 1);
      }

      // Track weekly skills done (up to 5: học-SRS, đọc-reader, nói-shadow, nghe-listen, viết-writing)
      if (!w.skills_done) w.skills_done = {};
      var skillGroup = null;
      if (metric === 'cards_studied' || metric === 'srs_reviewed') skillGroup = 'study';
      if (metric === 'reader_done' || metric === 'reading_done') skillGroup = 'read';
      if (metric === 'shadow_practiced' || metric === 'shadow_graded' || metric === 'hskk_graded') skillGroup = 'speak';
      if (metric === 'listen_used' || metric === 'tts_clicked') skillGroup = 'listen';
      if (metric === 'writing_graded') skillGroup = 'write';
      
      if (skillGroup && !w.skills_done[skillGroup]) {
        w.skills_done[skillGroup] = true;
        w.weekly_skills = Object.keys(w.skills_done).length;
      }

      // Track weekly hubs visited (at least community, tools, learn, practice, profile)
      if (!w.hubs_visited) w.hubs_visited = {};
      if (metric === 'community_visit') w.hubs_visited['community'] = true;
      if (metric === 'dict_opened') w.hubs_visited['tools'] = true;
      // Derived from core activities:
      if (metric === 'cards_studied' || metric === 'srs_reviewed' || metric === 'reader_done') w.hubs_visited['learn'] = true;
      if (metric === 'shadow_practiced' || metric === 'hskk_graded' || metric === 'writing_graded') w.hubs_visited['practice'] = true;
      
      w.weekly_hubs = Object.keys(w.hubs_visited).length;
    }

    // Propagate to lifetime chain metrics
    if (!qd.chains) qd.chains = {};
    if (!qd.chains.lifetime) qd.chains.lifetime = {};

    var chainMetrics = [];
    if (metric === 'shadow_practiced') {
      chainMetrics.push('chain_shadow');
      chainMetrics.push('chain_speak_total');
    }
    if (metric === 'shadow_graded') {
      chainMetrics.push('chain_speak_total');
    }
    if (metric === 'reader_done') {
      chainMetrics.push('chain_reader');
      chainMetrics.push('reader_done');
    }
    if (metric === 'pinyin_drill') {
      chainMetrics.push('pinyin_drill');
    }
    if (metric === 'text_analyzed') {
      chainMetrics.push('text_analyzed');
    }
    if (metric === 'dict_opened') {
      chainMetrics.push('dict_opened');
    }
    if (metric === 'mai_lessons') {
      chainMetrics.push('mai_lessons');
    }
    if (metric === 'sessions_done') {
      chainMetrics.push('sessions_done');
    }
    if (metric === 'cards_studied') {
      chainMetrics.push('cards_studied');
    }
    if (metric === 'cards_studied_handwriting') {
      chainMetrics.push('cards_studied_handwriting');
    }
    chainMetrics.push(metric);

    chainMetrics.forEach(function(cm) {
      qd.chains.lifetime[cm] = (qd.chains.lifetime[cm] || 0) + amount;
    });

    AppState.saveQuests();
    Quests._syncProgress();
    Quests._checkCompletion();
    Quests._updateQuestUI();
  },

  // ── Sync quest progress from current metrics ──────────
  _syncProgress: function() {
    var qd = AppState.questData;
    var metrics = qd.metrics || {};

    // Calculate skills_today derived
    var skillsCount = 0;
    if ((metrics.cards_studied || 0) > 0 || (metrics.srs_reviewed || 0) > 0) skillsCount++;
    if ((metrics.reader_done || 0) > 0 || (metrics.reading_done || 0) > 0) skillsCount++;
    if ((metrics.shadow_practiced || 0) > 0 || (metrics.shadow_graded || 0) > 0 || (metrics.hskk_graded || 0) > 0) skillsCount++;
    if ((metrics.listen_used || 0) > 0 || (metrics.tts_clicked || 0) > 0) skillsCount++;
    if ((metrics.writing_graded || 0) > 0) skillsCount++;
    metrics.skills_today = skillsCount;

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

    // Hide countdown if tab is chains
    var countdownRow = document.querySelector('.quest-countdown-row');
    if (countdownRow) {
      countdownRow.style.display = (tab === 'chains') ? 'none' : '';
    }

    if (tab === 'daily') {
      var daily  = qd.daily || {};
      var active = daily.active || [];
      html = Quests._renderQuestCards(active, daily.progress || {}, 'daily');
    } else if (tab === 'weekly') {
      var weekly = qd.weekly || {};
      var active = weekly.active || [];
      html = Quests._renderQuestCards(active, weekly.progress || {}, 'weekly');
    } else if (tab === 'chains') {
      html = Quests._renderQuestChains();
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

  _renderQuestChains: function() {
    var qd = AppState.questData;
    if (!qd.chains) qd.chains = {};
    if (!qd.chains.status) qd.chains.status = {};
    if (!qd.chains.lifetime) qd.chains.lifetime = {};

    var html = '';
    Object.keys(QUEST_CHAINS).forEach(function(chainId) {
      var chain = QUEST_CHAINS[chainId];
      var status = qd.chains.status[chainId] || { stepIndex: 0, claimed: false };
      qd.chains.status[chainId] = status; // init in place

      var stepIndex = status.stepIndex;
      var isAllCompleted = stepIndex >= chain.steps.length;

      html += '<div class="quest-chain-section' + (isAllCompleted ? ' chain-completed' : '') + '">';
      html += '  <div class="quest-chain-header">';
      html += '    <span class="quest-chain-icon">' + chain.icon + '</span>';
      html += '    <div class="quest-chain-header-info">';
      html += '      <div class="quest-chain-title">' + chain.title + '</div>';
      if (isAllCompleted) {
        html += '      <div class="quest-chain-subtitle text-success">🏆 Đã hoàn thành hành trình!</div>';
      } else {
        html += '      <div class="quest-chain-subtitle">Bước ' + (stepIndex + 1) + ' / ' + chain.steps.length + ': ' + chain.steps[stepIndex].title + '</div>';
      }
      html += '    </div>';
      html += '  </div>';

      // Only show steps if not all completed, or show all as completed
      html += '  <div class="quest-chain-steps">';
      chain.steps.forEach(function(step, idx) {
        var isUnlocked = idx === stepIndex;
        var isDoneBefore = idx < stepIndex;
        var isLocked = idx > stepIndex;

        // Progress for this step
        var metricVal = qd.chains.lifetime[step.metric] || 0;

        // Special derived checks
        if (step.id === 'ts_all' && stepIndex >= 4) {
          metricVal = 1;
        }
        if (step.id === 'rk_done' && stepIndex >= 4) {
          metricVal = 1;
        }

        var pct = isDoneBefore ? 100 : isLocked ? 0 : Math.min(100, Math.round(metricVal / step.target * 100));
        var stepCompleted = isDoneBefore || (isUnlocked && metricVal >= step.target);
        var statusClass = isDoneBefore ? 'step-completed' : isUnlocked ? 'step-active' : 'step-locked';

        html += '    <div class="quest-chain-step-card ' + statusClass + '">';
        html += '      <div class="quest-chain-step-top">';
        html += '        <div class="quest-chain-step-info">';
        html += '          <div class="quest-chain-step-title">' + step.title + '</div>';
        html += '          <div class="quest-chain-step-desc">' + step.desc + '</div>';
        html += '        </div>';

        if (isDoneBefore) {
          html += '        <div class="quest-chain-step-status claimed">✅ Đã nhận</div>';
        } else if (isUnlocked) {
          if (metricVal >= step.target) {
            html += '        <button class="quest-claim-btn" onclick="Quests.claimChainReward(\'' + chainId + '\')">Nhận thưởng</button>';
          } else {
            html += '        <div class="quest-chain-step-progress-label">' + metricVal + ' / ' + step.target + '</div>';
          }
        } else {
          html += '        <div class="quest-chain-step-status locked">🔒 Chưa mở</div>';
        }

        html += '      </div>';
        html += '      <div class="quest-progress-bar"><div class="quest-progress-fill" style="width:' + pct + '%"></div></div>';

        // Rewards footer
        html += '      <div class="quest-card-footer">';
        var rewardsText = [];
        if (step.rewards.token > 0) rewardsText.push('+' + step.rewards.token + TOKEN_IMG);
        if (step.rewards.xp > 0) rewardsText.push('+' + step.rewards.xp + 'XP');
        if (step.rewards.badge) rewardsText.push('🏅 Huy hiệu: ' + step.rewards.badge);
        if (step.rewards.outfit) rewardsText.push('👕 Trang phục: ' + step.rewards.outfit);
        html += '        <span class="quest-rewards">' + rewardsText.join(' · ') + '</span>';
        html += '      </div>';
        html += '    </div>';
      });

      html += '  </div>'; // steps list
      html += '</div>'; // chain section
    });
    return html;
  },

  claimChainReward: function(chainId) {
    var qd = AppState.questData;
    if (!qd.chains || !qd.chains.status) return;
    var status = qd.chains.status[chainId];
    if (!status) return;

    var chain = QUEST_CHAINS[chainId];
    if (!chain) return;

    var stepIndex = status.stepIndex;
    if (stepIndex >= chain.steps.length) return;

    var step = chain.steps[stepIndex];
    if (!step) return;

    // Verify progress
    var metricVal = qd.chains.lifetime[step.metric] || 0;

    // Special derived checks
    if (step.id === 'ts_all' && stepIndex >= 4) {
      metricVal = 1;
    }
    if (step.id === 'rk_done' && stepIndex >= 4) {
      metricVal = 1;
    }

    if (metricVal < step.target) return;

    // Grant rewards
    if (step.rewards.token > 0) {
      Quests.addToken(step.rewards.token, 'chain:' + step.id);
    }
    if (step.rewards.xp > 0 && typeof Gamification !== 'undefined') {
      Gamification.addXP(step.rewards.xp);
    }
    if (step.rewards.badge) {
      var badges = [];
      try { badges = JSON.parse(localStorage.getItem('hsk_user_badges') || '[]'); } catch (e) {}
      if (badges.indexOf(step.rewards.badge) === -1) {
        badges.push(step.rewards.badge);
        localStorage.setItem('hsk_user_badges', JSON.stringify(badges));
      }
    }
    if (step.rewards.outfit) {
      var owned = [];
      try { owned = JSON.parse(localStorage.getItem('hsk_user_outfits') || '[]'); } catch (e) {}
      if (owned.indexOf(step.rewards.outfit) === -1) {
        owned.push(step.rewards.outfit);
        localStorage.setItem('hsk_user_outfits', JSON.stringify(owned));
      }
    }

    // Advance to next step
    status.stepIndex++;
    AppState.saveQuests();

    Quests._showClaimToast(step);
    Quests._updateQuestUI();
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
