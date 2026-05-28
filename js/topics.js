var Topics = {
  TOPIC_MAP: {
    '🍜 Ẩm thực': ['food'],
    '👨‍👩‍👧‍👦 Gia đình & Giao tiếp': ['family', 'social', 'greetings', 'pronouns'],
    '🏫 Học tập & Công việc': ['academics', 'school', 'work', 'language'],
    '🎨 Giải trí & Nghệ thuật': ['entertainment', 'arts', 'sports'],
    '🏥 Sức khỏe & Cơ thể': ['health', 'body', 'mental'],
    '🌍 Địa điểm & Di chuyển': ['places', 'transport'],
    '🌿 Thiên nhiên & Động vật': ['nature', 'animals', 'weather'],
    '⏰ Thời gian & Số đếm': ['time', 'numbers'],
    '🎭 Mô tả & Cảm xúc': ['adjectives', 'emotions', 'colors'],
    '🔧 Hành động & Đồ vật': ['actions', 'activities', 'objects']
  },

  currentTopic: null,
  currentWords: [],
  maxLevel: 9,

  init: function() {
    const levelFilter = document.getElementById('topicLevelFilter');
    if (levelFilter) {
      levelFilter.value = '9';
      levelFilter.addEventListener('change', function() {
        Topics.maxLevel = parseInt(this.value);
        Topics.renderGrid();
      });
    }
    this.renderGrid();
  },

  getWordsForTopic: function(topicName, maxLevel) {
    const tags = this.TOPIC_MAP[topicName];
    if (!tags) return [];

    const words = [];
    for (let level = 1; level <= maxLevel; level++) {
      if (window.HSK3_DATA && window.HSK3_DATA[level]) {
        const levelWords = window.HSK3_DATA[level].filter(function(word) {
          return word.t && tags.indexOf(word.t) !== -1;
        });
        words.push.apply(words, levelWords);
      }
    }
    return words;
  },

  renderGrid: function() {
    const grid = document.getElementById('topicCardsGrid');
    if (!grid) return;

    grid.innerHTML = '';
    const topicNames = Object.keys(this.TOPIC_MAP);

    topicNames.forEach(function(topicName) {
      const words = Topics.getWordsForTopic(topicName, Topics.maxLevel);
      const card = document.createElement('div');
      card.className = 'topic-card';
      card.onclick = function() { Topics.openTopic(topicName); };

      const emoji = topicName.split(' ')[0];
      const name = topicName.substring(topicName.indexOf(' ') + 1);

      card.innerHTML =
        '<div class="topic-emoji">' + emoji + '</div>' +
        '<div class="topic-name">' + name + '</div>' +
        '<div class="topic-count">' + words.length + ' từ</div>';

      grid.appendChild(card);
    });
  },

  openTopic: function(topicName) {
    this.currentTopic = topicName;
    this.currentWords = this.getWordsForTopic(topicName, this.maxLevel);

    document.getElementById('topicGrid').style.display = 'none';
    document.getElementById('topicDetail').style.display = 'block';

    const emoji = topicName.split(' ')[0];
    const name = topicName.substring(topicName.indexOf(' ') + 1);

    document.getElementById('topicDetailTitle').textContent = emoji + ' ' + name;
    document.getElementById('topicDetailCount').textContent = this.currentWords.length + ' từ';

    this.renderVocabGrid();
    this.updateActionButtons();
  },

  renderVocabGrid: function() {
    const grid = document.getElementById('topicVocabGrid');
    if (!grid) return;

    grid.innerHTML = '';
    this.currentWords.forEach(function(word) {
      const card = document.createElement('div');
      card.className = 'topic-vocab-card';
      card.innerHTML =
        '<div class="word-hanzi">' + word.h + '</div>' +
        '<div class="word-pinyin">' + word.p + '</div>' +
        '<div class="word-meaning">' + word.v + '</div>';
      grid.appendChild(card);
    });
  },

  updateActionButtons: function() {
    const srsData = AppState.srsData || {};
    const newWords = this.currentWords.filter(function(word) {
      return !srsData[word.h];
    });
    const reviewWords = this.currentWords.filter(function(word) {
      return srsData[word.h];
    });

    const learnBtn = document.getElementById('topicLearnNew');
    const reviewBtn = document.getElementById('topicReview');

    if (learnBtn) {
      learnBtn.textContent = 'Học từ mới (' + newWords.length + ')';
      learnBtn.disabled = newWords.length === 0;
    }

    if (reviewBtn) {
      reviewBtn.textContent = 'Ôn từ đã biết (' + reviewWords.length + ')';
      reviewBtn.disabled = reviewWords.length === 0;
    }
  },

  startSession: function(mode) {
    const srsData = AppState.srsData || {};
    let words;

    if (mode === 'new') {
      words = this.currentWords.filter(function(word) {
        return !srsData[word.h];
      });
    } else {
      words = this.currentWords.filter(function(word) {
        return srsData[word.h];
      });
    }

    if (words.length === 0) {
      alert(mode === 'new' ? 'Không có từ mới để học!' : 'Không có từ đã biết để ôn!');
      return;
    }

    sessionStorage.setItem('mv_learn_words', JSON.stringify(words.map(function(word) { return word.h; })));
    Router.navigateTo('learn');
  },

  backToGrid: function() {
    document.getElementById('topicDetail').style.display = 'none';
    document.getElementById('topicGrid').style.display = 'block';
    this.renderGrid();
  }
};
