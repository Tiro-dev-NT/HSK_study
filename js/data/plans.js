// ═══════════════════════════════════════════════════════
// PLANS.JS — Single source-of-truth for Pro subscription
// durations + standalone Token Shop packs.
// Loaded globally as window.PLAN_CATALOG.
// Edge Function `create-payment` mirrors these prices
// server-side — KEEP IN SYNC manually.
// ═══════════════════════════════════════════════════════

window.PLAN_CATALOG = (function () {

  // ── Pro subscription (5 durations, same Pro benefits) ─────────────────
  // Pricing: 1 month flat, longer durations → cheaper per-month.
  var SUBSCRIPTIONS = {
    monthly: {
      name:        'Linh hoạt',
      sub:         '1 tháng',
      priceOrig:   null,            // no anchor for monthly
      price:       75000,
      priceLabel:  '75.000đ',
      perMonth:    '75.000đ',
      saveLabel:   null,
      durationDays: 30,
      tokenBonus:  150,
      icon:        '🪙',
      colorClass:  'pc-icon-slate',
      featured:    false
    },
    quarterly: {
      name:        'Chăm chỉ',
      sub:         '3 tháng',
      priceOrig:   225000,
      price:       199000,
      priceLabel:  '199.000đ',
      perMonth:    '~66.000đ',
      saveLabel:   '-12%',
      durationDays: 90,
      tokenBonus:  500,
      icon:        '⚡',
      colorClass:  'pc-icon-green',
      featured:    false
    },
    semiannual: {
      name:        'Bứt phá',
      sub:         '6 tháng',
      priceOrig:   450000,
      price:       329000,
      priceLabel:  '329.000đ',
      perMonth:    '~55.000đ',
      saveLabel:   '-27%',
      durationDays: 180,
      tokenBonus:  1200,
      icon:        '🔥',
      colorClass:  'pc-icon-orange',
      featured:    false
    },
    yearly: {
      name:        'Tiết kiệm',
      sub:         '1 năm',
      priceOrig:   900000,
      price:       499000,
      priceLabel:  '499.000đ',
      perMonth:    '~42.000đ',
      saveLabel:   '-44%',
      durationDays: 365,
      tokenBonus:  3000,
      icon:        '⭐',
      colorClass:  'pc-icon-yellow',
      featured:    true,            // "Phổ biến nhất" anchor
      badge:       '⭐ Phổ biến nhất'
    },
    lifetime: {
      name:        'Trọn đời',
      sub:         '1 lần',
      priceOrig:   2990000,
      price:       1490000,
      priceLabel:  '1.490.000đ',
      perMonth:    'vĩnh viễn',
      saveLabel:   'Tốt nhất',
      durationDays: null,           // null = perpetual
      tokenBonus:  8000,
      icon:        '💎',
      colorClass:  'pc-icon-purple',
      featured:    false
      // AI: Lifetime KHÔNG unlimited — allowance AI = gói tháng (chốt 2026-05-21)
    }
  };

  // ── Token Shop (K.4) — standalone packs, paid in VND ──────────────────
  var TOKEN_PACKS = {
    pack100: {
      tokens:     100,
      bonus:      0,
      price:      19000,
      priceLabel: '19.000đ',
      perToken:   '190đ/🪙',
      icon:       '🪙'
    },
    pack500: {
      tokens:     500,
      bonus:      50,
      price:      79000,
      priceLabel: '79.000đ',
      perToken:   '158đ/🪙',
      icon:       '💰'
    },
    pack1200: {
      tokens:     1200,
      bonus:      200,
      price:      159000,
      priceLabel: '159.000đ',
      perToken:   '133đ/🪙',
      icon:       '👜',
      featured:   true
    },
    pack3000: {
      tokens:     3000,
      bonus:      600,
      price:      349000,
      priceLabel: '349.000đ',
      perToken:   '116đ/🪙',
      icon:       '🎁'
    }
  };

  // ── Helpers ───────────────────────────────────────────────────────────
  function fmtVND(n) {
    return n.toLocaleString('vi-VN') + 'đ';
  }

  function getSubscription(sku) { return SUBSCRIPTIONS[sku] || null; }
  function getTokenPack(sku)    { return TOKEN_PACKS[sku] || null; }

  // Map duration name → icon (used by sidebar plan badge if added later)
  function durationIcon(duration) {
    var s = SUBSCRIPTIONS[duration];
    return s ? s.icon : '🪙';
  }

  return {
    SUBSCRIPTIONS:  SUBSCRIPTIONS,
    TOKEN_PACKS:    TOKEN_PACKS,
    getSubscription: getSubscription,
    getTokenPack:    getTokenPack,
    durationIcon:    durationIcon,
    fmtVND:          fmtVND
  };
}());
