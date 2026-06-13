(function () {
  const SVG_ATTRS = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
  const paths = {
    play: '<polygon points="5 3 19 12 5 21 5 3"/>',
    'book-open': '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    repeat: '<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
    gamepad: '<rect x="2" y="6" width="20" height="12" rx="4"/><line x1="8" y1="12" x2="12" y2="12"/><line x1="10" y1="10" x2="10" y2="14"/><circle cx="16" cy="11" r="1" fill="currentColor"/><circle cx="18" cy="13" r="1" fill="currentColor"/>',
    pencil: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>',
    layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>',
    puzzle: '<path d="M19 13v5a2 2 0 0 1-2 2h-5v-3a2 2 0 1 0-4 0v3H3a2 2 0 0 1-2-2v-5h3a2 2 0 1 0 0-4H1V4a2 2 0 0 1 2-2h5v3a2 2 0 1 0 4 0V2h5a2 2 0 0 1 2 2v5h-3a2 2 0 1 0 0 4z"/>',
    'file-text': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>',
    brain: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M2 10a7 7 0 1 1 14 0c0 2.4-1.2 3.7-2.2 4.8-.7.8-1.3 1.5-1.3 3.2h-5c0-1.7-.6-2.4-1.3-3.2C5.2 13.7 4 12.4 4 10" transform="translate(2 0)"/>',
    zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>',
    x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 17c1.4 0 2.5-1.1 2.5-2.5 0-2.5-2.5-3-2.5-6.5-2.5 2-5 4.5-5 8a6 6 0 0 0 12 0c0-4-2-7-5-10 .5 3-1 5-2 6"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    trophy: '<path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v6a5 5 0 0 1-10 0z"/><path d="M5 5H3v3a4 4 0 0 0 4 4"/><path d="M19 5h2v3a4 4 0 0 1-4 4"/>',
    sword: '<path d="M14.5 4.5 19 2l-2.5 4.5L7 16l-3 1 1-3z"/><path d="m5 14 5 5"/><path d="m2 22 4-4"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>',
    headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
    'edit-3': '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    refresh: '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10"/><path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14"/>',
    'chevron-right': '<polyline points="9 18 15 12 9 6"/>',
    'chevron-left': '<polyline points="15 18 9 12 15 6"/>',
    'arrow-right': '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
    grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
    list: '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
    trash: '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
    key: '<path d="M21 2 11 12"/><path d="M15 2h6v6"/><circle cx="7" cy="17" r="5"/>',
    dictionary: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="9" y1="7" x2="16" y2="7"/><line x1="9" y1="11" x2="16" y2="11"/>',
    // ── C1 Lesson Practice — 6 icon loại bài tập (Feather-style) ──
    'pencil-fill': '<line x1="4" y1="20" x2="20" y2="20"/><path d="M14.5 4.5a2.12 2.12 0 0 1 3 3L8 17l-4 1 1-4z"/>',
    ear: '<path d="M18 8A6 6 0 1 0 6 8c0 1.7.5 2.6 1.5 3.8.8 1 1.5 1.8 1.5 3.2a2 2 0 0 0 4 0"/><path d="M9 8.5a3 3 0 0 1 6 0c0 1-.6 1.6-1.3 2.2"/>',
    'keyboard-dictation': '<rect x="2" y="7" width="20" height="11" rx="2"/><path d="M6 11h.01M10 11h.01M14 11h.01M18 11h.01"/><line x1="8" y1="14.5" x2="16" y2="14.5"/>',
    'shuffle-order': '<polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/>',
    translate: '<path d="M4 5h7"/><path d="M9 3v2c0 4-2.2 7-5 8.5"/><path d="M5 8.5c0 2.5 2.5 4.5 6 5.5"/><path d="M13 21l4-9 4 9"/><line x1="14.5" y1="18" x2="19.5" y2="18"/>',
    'layers-mix': '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    'more-h': '<circle cx="5" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.6" fill="currentColor" stroke="none"/>',
    'target-exam': '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/><line x1="22" y1="2" x2="17" y2="7"/><line x1="17" y1="2" x2="22" y2="7"/>',
    'calendar-exam': '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><circle cx="12" cy="16" r="2" fill="currentColor" stroke="none"/>',
    'gauge': '<path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/><path d="M12 2v2m10 8h-2M6.34 5.34l1.42 1.42M17.24 6.76l1.42-1.42"/>'
  };

  function attrs(opts) {
    const size = [16, 18, 20, 28].includes(opts.size) ? opts.size : 18;
    const cls = opts.cls ? ` class="${String(opts.cls).replace(/[^a-zA-Z0-9_\- ]/g, '')}"` : '';
    return `width="${size}" height="${size}"${cls}`;
  }

  window.Icons = {
    names: Object.keys(paths),
    get(name, opts) {
      if (!paths[name]) return '';
      return `<svg ${SVG_ATTRS} ${attrs(opts || {})}>${paths[name]}</svg>`;
    }
  };
})();
