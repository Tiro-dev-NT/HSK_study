// ═══════════════════════════════════════════════════════
// MY-VOCAB.JS — Kho từ vựng page (Phase 2.1)
// ═══════════════════════════════════════════════════════

var MyVocab = (function() {

  var _selected = {};       // { hanzi: true }
  var _activeFilter = 'all';
  var _activeTag = null;
  var _searchTerm = '';
  var _tagMode = 'add';     // 'add' or 'remove'

  // ── Get all vocab entries from srsData ──────────────
  function _getAllWords() {
    var srs = AppState.srsData || {};
    var words = [];
    var allData = (typeof getAllWords === 'function') ? getAllWords() : [];
    var dataMap = {};
    allData.forEach(function(w) { dataMap[w.h] = w; });

    Object.keys(srs).forEach(function(hanzi) {
      var card = srs[hanzi];
      var info = dataMap[hanzi] || {};
      words.push({
        h: hanzi,
        p: info.p || '',
        v: info.v || '',
        e: info.e || '',
        level: info.level || 0,
        tags: card.tags || [],
        interval: card.interval || 0,
        ease: card.ease || 2.5,
        dueDate: card.dueDate || '',
        reps: card.reps || 0
      });
    });
    return words;
  }

  // ── Filter words ────────────────────────────────────
  function _filterWords(words) {
    var result = words;

    // Filter by tab
    var maxLv = activeLevelCount();
    if (_activeFilter === 'hsk') {
      result = result.filter(function(w) { return w.level >= 1 && w.level <= maxLv; });
    } else if (_activeFilter === 'extension') {
      result = result.filter(function(w) { return w.tags.indexOf('extension') >= 0; });
    } else if (_activeFilter === 'manual') {
      result = result.filter(function(w) { return w.tags.indexOf('manual') >= 0; });
    } else if (_activeFilter === 'web') {
      result = result.filter(function(w) {
        return w.tags.indexOf('extension') < 0 && w.tags.indexOf('manual') < 0 && !(w.level >= 1 && w.level <= maxLv);
      });
    }

    // Filter by tag chip
    if (_activeTag) {
      result = result.filter(function(w) { return w.tags.indexOf(_activeTag) >= 0; });
    }

    // Search
    if (_searchTerm) {
      var term = _searchTerm.toLowerCase();
      result = result.filter(function(w) {
        return w.h.indexOf(term) >= 0 ||
               (w.p && w.p.toLowerCase().indexOf(term) >= 0) ||
               (w.v && w.v.toLowerCase().indexOf(term) >= 0) ||
               (w.e && w.e.toLowerCase().indexOf(term) >= 0);
      });
    }

    return result;
  }

  // ── Render tag chips ────────────────────────────────
  function _renderTagChips() {
    var container = document.getElementById('mvTagChips');
    if (!container) return;
    var tags = AppState.getAllTags ? AppState.getAllTags() : [];
    if (tags.length === 0) { container.innerHTML = ''; return; }

    var html = '<span style="color:var(--text2);font-size:12px;margin-right:4px">Tags:</span>';
    tags.forEach(function(tag) {
      var active = _activeTag === tag ? ' mv-chip-active' : '';
      html += '<button class="mv-chip' + active + '" data-tag="' + tag + '">' + tag + '</button>';
    });
    if (_activeTag) {
      html += '<button class="mv-chip mv-chip-clear" data-tag="">✕ Xóa filter</button>';
    }
    container.innerHTML = html;
  }

  // ── Render word grid ────────────────────────────────
  function _render() {
    var allWords = _getAllWords();
    var filtered = _filterWords(allWords);
    var grid = document.getElementById('mvGrid');
    var empty = document.getElementById('mvEmpty');
    var countEl = document.getElementById('mvWordCount');

    if (!grid) return;

    if (countEl) {
      countEl.textContent = filtered.length + ' / ' + allWords.length + ' từ';
    }

    if (filtered.length === 0) {
      grid.innerHTML = '';
      if (empty) empty.style.display = '';
      return;
    }
    if (empty) empty.style.display = 'none';

    var html = '';
    filtered.forEach(function(w) {
      var checked = _selected[w.h] ? ' checked' : '';
      var selectedClass = _selected[w.h] ? ' mv-card-selected' : '';
      var tagsHtml = '';
      if (w.tags && w.tags.length > 0) {
        w.tags.forEach(function(t) {
          tagsHtml += '<span class="mv-card-tag">' + t + '</span>';
        });
      }
      var levelBadge = w.level ? '<span class="mv-level-badge">HSK ' + w.level + '</span>' : '';

      html += '<div class="mv-card' + selectedClass + '" data-hanzi="' + w.h + '">' +
        '<label class="mv-card-check"><input type="checkbox" data-hanzi="' + w.h + '"' + checked + '/></label>' +
        '<div class="mv-card-hanzi">' + w.h + '</div>' +
        '<div class="mv-card-pinyin">' + (w.p || '') + '</div>' +
        '<div class="mv-card-meaning">' + (w.v || w.e || '') + '</div>' +
        '<div class="mv-card-tags">' + levelBadge + tagsHtml + '</div>' +
      '</div>';
    });
    grid.innerHTML = html;

    _updateBulkBar();
    _renderTagChips();
  }

  // ── Bulk bar ────────────────────────────────────────
  function _updateBulkBar() {
    var count = Object.keys(_selected).length;
    var bar = document.getElementById('mvBulkBar');
    var countEl = document.getElementById('mvSelectedCount');
    if (bar) bar.style.display = count > 0 ? '' : 'none';
    if (countEl) countEl.textContent = count + ' từ đã chọn';
  }

  // ── Tag modal ───────────────────────────────────────
  function _showTagModal(mode) {
    _tagMode = mode;
    var modal = document.getElementById('mvTagModal');
    var title = document.getElementById('mvTagModalTitle');
    var input = document.getElementById('mvTagInput');
    if (!modal) return;
    if (title) title.textContent = mode === 'add' ? 'Thêm tag' : 'Xóa tag';
    if (input) input.value = '';
    modal.style.display = '';
    if (input) input.focus();
    _renderTagSuggestions();
  }

  function _hideTagModal() {
    var modal = document.getElementById('mvTagModal');
    if (modal) modal.style.display = 'none';
  }

  function _renderTagSuggestions() {
    var container = document.getElementById('mvTagSuggestions');
    if (!container) return;
    var tags = AppState.getAllTags ? AppState.getAllTags() : [];
    var input = document.getElementById('mvTagInput');
    var val = input ? input.value.trim().toLowerCase() : '';

    var filtered = tags.filter(function(t) { return !val || t.toLowerCase().indexOf(val) >= 0; });
    if (filtered.length === 0) { container.innerHTML = ''; return; }

    var html = '';
    filtered.forEach(function(t) {
      html += '<button class="mv-suggest-btn" data-tag="' + t + '">' + t + '</button>';
    });
    container.innerHTML = html;
  }

  function _confirmTag() {
    var input = document.getElementById('mvTagInput');
    var tag = input ? input.value.trim() : '';
    if (!tag) return;

    var hanzis = Object.keys(_selected);
    if (hanzis.length === 0) return;

    hanzis.forEach(function(h) {
      if (_tagMode === 'add') {
        if (AppState.addTagToWord) AppState.addTagToWord(h, tag);
      } else {
        if (AppState.removeTagFromWord) AppState.removeTagFromWord(h, tag);
      }
    });

    _hideTagModal();
    _render();

    // Trigger sync if available
    if (typeof Sync !== 'undefined' && typeof Auth !== 'undefined' && Auth.user) {
      Sync.pushAll().catch(function(e) { console.error('[MyVocab] sync error:', e); });
    }
  }

  // ── Learn now ───────────────────────────────────────
  function _learnNow() {
    var hanzis = Object.keys(_selected);
    if (hanzis.length === 0) return;
    // Navigate to learn page — store selected words in sessionStorage
    sessionStorage.setItem('mv_learn_words', JSON.stringify(hanzis));
    Router.navigateTo('learn');
  }

  // ── Setup ───────────────────────────────────────────
  function setup() {
    _selected = {};
    _activeFilter = 'all';
    _activeTag = null;
    _searchTerm = '';

    _render();

    // Filter tabs
    var tabs = document.getElementById('mvFilterTabs');
    if (tabs) {
      tabs.addEventListener('click', function(e) {
        var btn = e.target.closest('[data-filter]');
        if (!btn) return;
        _activeFilter = btn.dataset.filter;
        _activeTag = null;
        tabs.querySelectorAll('.mv-tab').forEach(function(t) { t.classList.remove('active'); });
        btn.classList.add('active');
        _render();
      });
    }

    // Tag chips
    var chipContainer = document.getElementById('mvTagChips');
    if (chipContainer) {
      chipContainer.addEventListener('click', function(e) {
        var btn = e.target.closest('[data-tag]');
        if (!btn) return;
        var tag = btn.dataset.tag;
        _activeTag = tag || null;
        _render();
      });
    }

    // Search
    var searchInput = document.getElementById('mvSearch');
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        _searchTerm = searchInput.value.trim();
        _render();
      });
    }

    // Grid checkboxes (delegation)
    var grid = document.getElementById('mvGrid');
    if (grid) {
      grid.addEventListener('change', function(e) {
        var cb = e.target;
        if (cb.type !== 'checkbox') return;
        var hanzi = cb.dataset.hanzi;
        if (!hanzi) return;
        if (cb.checked) {
          _selected[hanzi] = true;
        } else {
          delete _selected[hanzi];
        }
        // Toggle card style
        var card = cb.closest('.mv-card');
        if (card) card.classList.toggle('mv-card-selected', cb.checked);
        _updateBulkBar();
      });
    }

    // Bulk actions
    var btnAddTag = document.getElementById('mvBulkAddTag');
    if (btnAddTag) btnAddTag.addEventListener('click', function() { _showTagModal('add'); });

    var btnRemoveTag = document.getElementById('mvBulkRemoveTag');
    if (btnRemoveTag) btnRemoveTag.addEventListener('click', function() { _showTagModal('remove'); });

    var btnLearn = document.getElementById('mvBulkLearn');
    if (btnLearn) btnLearn.addEventListener('click', _learnNow);

    var btnDeselect = document.getElementById('mvDeselectAll');
    if (btnDeselect) btnDeselect.addEventListener('click', function() {
      _selected = {};
      _render();
    });

    // Tag modal
    var btnConfirm = document.getElementById('mvTagConfirm');
    if (btnConfirm) btnConfirm.addEventListener('click', _confirmTag);

    var btnCancel = document.getElementById('mvTagCancel');
    if (btnCancel) btnCancel.addEventListener('click', _hideTagModal);

    var tagInput = document.getElementById('mvTagInput');
    if (tagInput) {
      tagInput.addEventListener('input', _renderTagSuggestions);
      tagInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') _confirmTag();
        if (e.key === 'Escape') _hideTagModal();
      });
    }

    // Tag suggestions delegation
    var sugContainer = document.getElementById('mvTagSuggestions');
    if (sugContainer) {
      sugContainer.addEventListener('click', function(e) {
        var btn = e.target.closest('[data-tag]');
        if (!btn) return;
        var input = document.getElementById('mvTagInput');
        if (input) input.value = btn.dataset.tag;
      });
    }

    // Modal overlay click to close
    var modalOverlay = document.getElementById('mvTagModal');
    if (modalOverlay) {
      modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) _hideTagModal();
      });
    }
  }

  return { setup: setup };
})();
