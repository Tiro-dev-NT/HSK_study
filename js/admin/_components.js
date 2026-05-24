// ═══════════════════════════════════════════════════════
// ADMIN UI COMPONENTS — js/admin/_components.js
// Shared template literal helpers for all admin sections.
// No dependencies. Exposes window.AdminUI.
// ═══════════════════════════════════════════════════════

var AdminUI = (function () {

  // ── SVG Icons (lucide-style 17px) ──────────────────────────────────
  var Ic = {
    arrowUp:  '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>',
    arrowDn:  '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    check:    '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    clock:    '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    x:        '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    flame:    '<svg width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2s4 4.5 4 9c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-2 1-3 1-3s-3 1.5-3 5a6 6 0 0 0 12 0c0-5-6-11-6-11z"/></svg>',
    tag:      '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
  };

  // ── status badge ─────────────────────────────────────────────────────
  // kind: 'success' | 'warning' | 'danger' | 'neutral' | 'info'
  function badge(kind, text) {
    var icon = kind === 'success' ? Ic.check : kind === 'warning' ? Ic.clock : kind === 'danger' ? Ic.x : '';
    return '<span class="adm-badge-v2 b-' + kind + '">' + icon + text + '</span>';
  }

  // ── tier badge ──────────────────────────────────────────────────────
  // tier: 'free' | 'basic' | 'pro'
  function tierBadge(tier) {
    var label = tier === 'pro' ? '💎 Pro' : tier === 'basic' ? 'Basic' : 'Free';
    return '<span class="adm-tier adm-tier-' + tier + '">' + label + '</span>';
  }

  // ── avatar circle ────────────────────────────────────────────────────
  // size: '' (28px) | 'md' (32px) | 'lg' (56px)
  // colorClass: 'c1'..'c7' (optional, defaults c1)
  function avatar(initial, size, colorClass) {
    var sz = size ? ' adm-av-' + size : '';
    var cc = colorClass || 'c1';
    return '<div class="adm-av' + sz + ' ' + cc + '">' + (initial || '?') + '</div>';
  }

  // ── user cell (avatar + name + email) ────────────────────────────────
  function userCell(name, email, tier) {
    var initials = (name || '?').split(' ').map(function(w) { return w[0]; }).join('').slice(0, 2).toUpperCase();
    var colors = ['c1','c2','c3','c4','c5','c6','c7'];
    var cc = colors[(name || '').charCodeAt(0) % 7];
    var tierHtml = tier ? ' ' + tierBadge(tier) : '';
    return '<div class="adm-user-cell">'
      + avatar(initials, '', cc)
      + '<div class="ucell-info">'
      + '<div class="ucell-name">' + _esc(name) + tierHtml + '</div>'
      + '<div class="ucell-email">' + _esc(email) + '</div>'
      + '</div></div>';
  }

  // ── inline sparkline SVG ─────────────────────────────────────────────
  function sparkline(data, opts) {
    opts = opts || {};
    var W = opts.width || 88;
    var H = opts.height || 36;
    var stroke = opts.stroke || '#10B981';
    var fill = opts.fill !== false;
    if (!data || data.length < 2) return '';
    var max = Math.max.apply(null, data);
    var min = Math.min.apply(null, data);
    var range = Math.max(max - min, 0.0001);
    var pts = data.map(function(v, i) {
      var x = (i / (data.length - 1)) * (W - 2) + 1;
      var y = H - 2 - ((v - min) / range) * (H - 4);
      return [x.toFixed(2), y.toFixed(2)];
    });
    var d = pts.map(function(p, i) { return (i === 0 ? 'M' : 'L') + p[0] + ' ' + p[1]; }).join(' ');
    var last = pts[pts.length - 1];
    var gId = 'sp' + Math.random().toString(36).slice(2, 7);
    var fillPath = fill
      ? '<path d="' + d + ' L' + (W-1) + ' ' + (H-1) + ' L1 ' + (H-1) + ' Z" fill="url(#' + gId + ')"/>'
      : '';
    return '<svg class="adm-spark" width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '">'
      + '<defs><linearGradient id="' + gId + '" x1="0" y1="0" x2="0" y2="1">'
      + '<stop offset="0%" stop-color="' + stroke + '" stop-opacity="0.35"/>'
      + '<stop offset="100%" stop-color="' + stroke + '" stop-opacity="0"/>'
      + '</linearGradient></defs>'
      + fillPath
      + '<path d="' + d + '" fill="none" stroke="' + stroke + '" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>'
      + '<circle cx="' + last[0] + '" cy="' + last[1] + '" r="2.2" fill="' + stroke + '"/>'
      + '</svg>';
  }

  // ── KPI card V2 ──────────────────────────────────────────────────────
  // opts: { label, value, unit, delta: {dir:'up'|'down', text}, spark, sparkColor, progress, footnote }
  function kpiCard(opts) {
    var deltaHtml = '';
    if (opts.delta) {
      var icon = opts.delta.dir === 'up' ? Ic.arrowUp : Ic.arrowDn;
      var cls  = opts.delta.dir === 'up' ? 'adm-delta-up' : 'adm-delta-down';
      deltaHtml = '<div class="' + cls + '">' + icon + '<span>' + _esc(opts.delta.text) + '</span></div>';
    }
    var progressHtml = '';
    if (opts.progress != null) {
      var pct = Math.round(opts.progress * 100);
      progressHtml = '<div class="adm-pro-bar"><div class="adm-pro-bar-fill" style="width:' + pct + '%"></div></div>';
      if (opts.footnote) {
        progressHtml += '<div style="font-size:11px;color:var(--adm-text3);margin-top:4px">' + _esc(opts.footnote) + '</div>';
      }
    }
    var sparkHtml = opts.spark ? sparkline(opts.spark, { stroke: opts.sparkColor || '#10B981', fill: true }) : '';
    var unitHtml  = opts.unit ? '<span class="kv2-unit">' + _esc(opts.unit) + '</span>' : '';
    return '<div class="adm-kpi-v2">'
      + '<div class="kv2-label">' + _esc(opts.label) + '</div>'
      + '<div class="kv2-bottom">'
      + '<div class="kv2-left">'
      + '<div class="kv2-val adm-tabular">' + _esc(opts.value) + unitHtml + '</div>'
      + deltaHtml + progressHtml
      + '</div>'
      + sparkHtml
      + '</div>'
      + '</div>';
  }

  // ── health strip V2 (pulse dots) ────────────────────────────────────
  // items: [{state:'ok'|'warn'|'bad', label:'...'}]
  function healthStrip(items, ts) {
    var parts = items.map(function(h) {
      return '<span class="hv2-item h-' + h.state + '"><span class="hv2-pulse"></span>' + _esc(h.label) + '</span>';
    });
    var html = parts.join('<span class="hv2-sep"></span>');
    if (ts) html += '<span class="hv2-ts">Sync lần cuối · ' + _esc(ts) + '</span>';
    return '<div class="adm-health-v2">' + html + '</div>';
  }

  // ── empty state ──────────────────────────────────────────────────────
  function emptyState(icon, title, sub) {
    return '<div class="adm-fb-empty">'
      + '<span style="font-size:40px">' + (icon || '📭') + '</span>'
      + (title ? '<p style="font-weight:600;font-size:14px;margin:0">' + _esc(title) + '</p>' : '')
      + (sub   ? '<p style="font-size:12px;margin:4px 0 0;color:var(--adm-text3)">' + _esc(sub) + '</p>' : '')
      + '</div>';
  }

  // ── feedback item (80px height, left-panel list row) ─────────────────
  function fbItem(m, isSelected) {
    var dotColor = m.priority === 'urgent' ? '#DC2626' : m.priority === 'normal' ? '#F59E0B' : '#9CA3AF';
    var colors = ['c1','c2','c3','c4','c5','c6','c7'];
    var cc = colors[(m.name || '').charCodeAt(0) % 7];
    var initials = (m.name || '?').split(' ').slice(-1)[0][0] || '?';
    var unreadDot = (m.unread && !isSelected)
      ? '<span class="adm-fb-unread-dot"></span>' : '';
    return '<div class="adm-fb-item' + (isSelected ? ' active' : '') + '" data-fbid="' + (m.id || '') + '">'
      + unreadDot
      + avatar(initials, 'md', cc)
      + '<div class="adm-fb-body">'
      + '<div class="adm-fb-row1">'
      + '<span class="adm-fb-sender' + (m.unread ? ' unread' : '') + ' adm-truncate">' + _esc(m.name) + '</span>'
      + '<span class="adm-fb-ts">' + _esc(m.time_display || '') + '</span>'
      + '</div>'
      + '<div class="adm-fb-subject' + (m.unread ? ' unread' : '') + '">' + _esc(m.subject || '') + '</div>'
      + '<div class="adm-fb-row3">'
      + '<span class="adm-fb-snippet">' + _esc(m.snippet || '') + '</span>'
      + '<span class="adm-fb-pdot" style="background:' + dotColor + '" title="' + (m.priority || '') + '"></span>'
      + '</div>'
      + '</div>'
      + '</div>';
  }

  // ── feedback right user aside ─────────────────────────────────────────
  function fbUserAside(m) {
    if (!m) return '';
    var colors = ['c1','c2','c3','c4','c5','c6','c7'];
    var cc = colors[(m.name || '').charCodeAt(0) % 7];
    var initials = (m.name || '?').split(' ').slice(-1)[0][0] || '?';
    var tier = m.tier || 'free';
    return '<div class="adm-fb-ucard">'
      + avatar(initials, 'lg', cc)
      + '<div style="display:flex;flex-direction:column;align-items:center;gap:2px">'
      + '<span style="font-weight:700;font-size:14px">' + _esc(m.name) + '</span>'
      + '<span style="font-size:11px;color:var(--adm-text3)">' + _esc(m.email || '') + '</span>'
      + '<span style="margin-top:4px">' + tierBadge(tier) + '</span>'
      + '</div>'
      + '</div>'
      + _fbKv('Đăng ký', m.created_at ? Admin.absDate(m.created_at).split(' ')[0] : '—')
      + _fbKv('Tổng góp ý', m.total_feedback || '—')
      + _fbKv('Streak', m.streak_days ? Ic.flame + '<b>' + m.streak_days + ' ngày</b>' : '—')
      + _fbKv('Sentiment', m.sentiment === 'positive' ? badge('success', 'Tích cực') : m.sentiment === 'negative' ? badge('danger', 'Tiêu cực') : '—');
  }

  function _fbKv(k, v) {
    return '<div class="adm-fb-kv"><div class="fbkv-k">' + k + '</div><div class="fbkv-v">' + v + '</div></div>';
  }

  // ── table row helpers ─────────────────────────────────────────────────
  function tableHead(cols) {
    return '<thead><tr>' + cols.map(function(c) {
      return '<th' + (c.style ? ' style="' + c.style + '"' : '') + '>' + _esc(c.label) + '</th>';
    }).join('') + '</tr></thead>';
  }

  // ── internal escape ────────────────────────────────────────────────────
  function _esc(s) {
    if (s == null) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  return {
    badge:       badge,
    tierBadge:   tierBadge,
    avatar:      avatar,
    userCell:    userCell,
    sparkline:   sparkline,
    kpiCard:     kpiCard,
    healthStrip: healthStrip,
    emptyState:  emptyState,
    fbItem:      fbItem,
    fbUserAside: fbUserAside,
    tableHead:   tableHead,
    Ic:          Ic,
  };
}());

window.AdminUI = AdminUI;
