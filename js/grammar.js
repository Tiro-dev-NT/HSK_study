// ═══════════════════════════════════════════════════════
// GRAMMAR.JS — Grammar Patterns Module (Phase F.3)
// ═══════════════════════════════════════════════════════

var Grammar = (function() {

  var _level = 1;
  var _searchTerm = '';

  function setup() {
    _level = 1;
    _searchTerm = '';
    _bindEvents();
    _render();
  }

  function _bindEvents() {
    document.querySelectorAll('.gram-level-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.gram-level-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        _level = parseInt(btn.dataset.level);
        _render();
      });
    });

    var searchInput = document.getElementById('grammarSearch');
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        _searchTerm = this.value.trim().toLowerCase();
        _render();
      });
    }

    var list = document.getElementById('grammarList');
    if (list) {
      list.addEventListener('click', function(e) {
        if (e.target.classList.contains('clickable-hanzi')) {
          _openCharModal(e.target.dataset.char);
        }
      });
    }
  }

  function _render() {
    var container = document.getElementById('grammarList');
    if (!container) return;

    var patterns = (typeof GRAMMAR_DATA !== 'undefined' && GRAMMAR_DATA[_level]) || [];
    var lang = (typeof AppState !== 'undefined' && AppState.lang) || 'vi';

    if (_searchTerm) {
      patterns = patterns.filter(function(p) {
        var name = lang === 'vi' ? p.name_vi : p.name_en;
        var expl = lang === 'vi' ? p.explanation_vi : p.explanation_en;
        var s = _searchTerm;
        return name.toLowerCase().indexOf(s) !== -1 ||
               p.pattern.toLowerCase().indexOf(s) !== -1 ||
               expl.toLowerCase().indexOf(s) !== -1;
      });
    }

    if (patterns.length === 0) {
      container.innerHTML = '<div class="empty-state"><p>Không tìm thấy mẫu câu nào.</p></div>';
      return;
    }

    container.innerHTML = patterns.map(function(p) {
      var name = lang === 'vi' ? p.name_vi : p.name_en;
      var expl = lang === 'vi' ? p.explanation_vi : p.explanation_en;
      return '<div class="grammar-card" data-id="' + p.id + '">' +
        '<div class="gram-card-header">' +
          '<span class="gram-pattern">' + p.pattern + '</span>' +
          '<span class="gram-name">' + name + '</span>' +
        '</div>' +
        '<p class="gram-explanation">' + expl + '</p>' +
        '<div class="gram-examples">' +
          p.examples.map(function(ex) {
            return '<div class="gram-example">' +
              '<p class="gram-zh">' + _makeClickable(ex.zh) + '</p>' +
              '<p class="gram-py">' + ex.py + '</p>' +
              '<p class="gram-meaning">' + (lang === 'vi' ? ex.vi : ex.en) + '</p>' +
            '</div>';
          }).join('') +
        '</div>' +
      '</div>';
    }).join('');
  }

  function _makeClickable(text) {
    return text.split('').map(function(ch) {
      if (/[一-鿿]/.test(ch)) {
        return '<span class="clickable-hanzi" data-char="' + ch + '">' + ch + '</span>';
      }
      return ch;
    }).join('');
  }

  function _openCharModal(ch) {
    if (typeof Dictionary === 'undefined' || !Dictionary.openModal || typeof getAllWords !== 'function') return;

    var words = getAllWords();
    // Prefer exact single-char match, then shortest word containing the char
    var exact = words.filter(function(w) { return w.h === ch; });
    var contains = words.filter(function(w) { return w.h && w.h.length > 1 && w.h.indexOf(ch) !== -1; });
    contains.sort(function(a, b) { return a.h.length - b.h.length; });

    var word = exact[0] || contains[0] || null;
    if (word) Dictionary.openModal(word);
    // silent no-op when no match — no console error
  }

  return { setup: setup };
}());
