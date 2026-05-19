// ═══════════════════════════════════════════════════════
// STORAGE.JS — Unified storage abstraction
// Current backend: localStorage.
// Future: swap _backend to IndexedDB (Phase H) without
// touching any caller code.
// ═══════════════════════════════════════════════════════

var Storage = (function () {

  // ── Backend: localStorage (Phase H: replace with IDB) ─
  var _backend = {
    get: function (key) {
      try {
        var raw = localStorage.getItem(key);
        if (raw === null) return null;
        return JSON.parse(raw);
      } catch (e) {
        console.warn('[Storage] get failed for key=' + key, e);
        return null;
      }
    },
    set: function (key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (e) {
        // QuotaExceededError — storage full
        console.error('[Storage] set failed for key=' + key, e);
        return false;
      }
    },
    remove: function (key) {
      try { localStorage.removeItem(key); } catch (e) { /* ignore */ }
    },
    clear: function (prefix) {
      // Remove only keys matching prefix (safe partial-clear)
      var toRemove = [];
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (!prefix || k.indexOf(prefix) === 0) toRemove.push(k);
      }
      toRemove.forEach(function (k) { localStorage.removeItem(k); });
    },
    keys: function (prefix) {
      var result = [];
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (!prefix || k.indexOf(prefix) === 0) result.push(k);
      }
      return result;
    }
  };

  // ── Public API ─────────────────────────────────────────

  return {
    // Synchronous get — returns parsed value or null
    get: function (key) {
      return _backend.get(key);
    },

    // Synchronous set — returns true on success
    set: function (key, value) {
      return _backend.set(key, value);
    },

    // Remove a single key
    remove: function (key) {
      _backend.remove(key);
    },

    // Remove all keys starting with prefix (or everything if prefix omitted)
    clear: function (prefix) {
      _backend.clear(prefix);
    },

    // List all keys matching optional prefix
    keys: function (prefix) {
      return _backend.keys(prefix);
    },

    // Convenience: get with default value
    getOr: function (key, defaultVal) {
      var v = _backend.get(key);
      return v !== null ? v : defaultVal;
    },

    // Convenience: atomic read-modify-write
    update: function (key, fn, defaultVal) {
      var current = _backend.get(key);
      if (current === null) current = defaultVal !== undefined ? defaultVal : null;
      var next = fn(current);
      return _backend.set(key, next);
    }
  };
})();
