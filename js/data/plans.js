// ═══════════════════════════════════════════════════════
// PLANS.JS — Single source-of-truth for monetization
// • Pro subscriptions (5 durations)
// • AI Credit Packs (3 beta SKUs)
// • Hộp Ân Cần (donation-framed support pack)
// • ❌ NO Token Pack VND (removed 2026-05-23, chống tiếng "bào tiền")
//
// Edge Function `create-payment` mirrors these prices
// server-side — KEEP IN SYNC manually.
//
// Decision sources:
//   - docs/PRODUCT_TIER_MATRIX.md
//   - docs/AI_CREDIT_PRICING.md
//   - docs/TOKEN_SINK_ROADMAP.md
//   - docs/HONOR_PACK_DESIGN.md
// ═══════════════════════════════════════════════════════

window.PLAN_CATALOG = (function () {

  // ── Pro subscription (5 durations, same Pro benefits) ─────────────────
  // Each plan: tokenBonus = 1-time gift on purchase
  //            aiCreditBonus = 1-time AI Credit WELCOME GIFT on purchase (ALL tiers — Model C)
  //            aiAllowancePerMonth = SMALL recurring AI Credit allowance (Hạng 2 only — Model C)
  //
  //   ⭐ Model C (LOCKED 2026-05-31): Pro = mở khóa nội dung/feature + recurring AI NHỎ
  //      + welcome gift 1 lần hào phóng. Xài nặng → mua AI Credit Pack. ĐÃ BỎ mô hình
  //      allowance lớn recurring cũ (800/700/650/600/500 cr/m) vì nó đẻ nợ API recurring
  //      và Lifetime nợ vô thời hạn. Cost AI/user ~$0.10-0.30/tháng worst-case.
  //      Khẩu vị: Comfortable. Recurring Monthly/Q 200 · Semi/Yearly 250 · Lifetime 200.
  var SUBSCRIPTIONS = {
    monthly: {
      name:        'Linh hoạt',
      sub:         '1 tháng',
      priceOrig:   null,
      price:       75000,
      priceLabel:  '75.000đ',
      perMonth:    '75.000đ',
      perDay:      '~2.500đ',         // marketing helper — daily breakdown
      saveLabel:   null,              // baseline tier — không so sánh
      compareNote: 'Linh hoạt — huỷ bất cứ lúc nào',
      durationDays: 30,
      tokenBonus:  150,
      aiCreditBonus: 100,           // welcome gift 1 lần (Model C)
      aiAllowancePerMonth: 200,     // recurring nhỏ/tháng (Model C)
      icon:        '🪙',
      colorClass:  'pc-icon-slate',
      featured:    false
    },
    quarterly: {
      name:        'Chăm chỉ',
      sub:         '3 tháng',
      priceOrig:   null,              // BỎ fake anchor 225k — chưa từng bán giá đó
      price:       199000,
      priceLabel:  '199.000đ',
      perMonth:    '~66.000đ',
      perDay:      '~2.200đ',
      saveLabel:   'Rẻ hơn 12%/tháng',   // anchor = Monthly tier thật
      compareNote: 'so với Monthly (75k → 66k/tháng)',
      durationDays: 90,
      tokenBonus:  500,
      aiCreditBonus: 250,           // welcome gift 1 lần (Model C)
      aiAllowancePerMonth: 200,     // recurring nhỏ/tháng (Model C)
      icon:        '⚡',
      colorClass:  'pc-icon-green',
      featured:    false
    },
    semiannual: {
      name:        'Bứt phá',
      sub:         '6 tháng',
      priceOrig:   null,              // BỎ fake anchor 450k
      price:       329000,
      priceLabel:  '329.000đ',
      perMonth:    '~55.000đ',
      perDay:      '~1.800đ',
      saveLabel:   'Rẻ hơn 27%/tháng',
      compareNote: 'so với Monthly (75k → 55k/tháng)',
      durationDays: 180,
      tokenBonus:  800,
      aiCreditBonus: 400,           // welcome gift 1 lần (Model C)
      aiAllowancePerMonth: 250,     // recurring nhỏ/tháng (Model C)
      icon:        '🔥',
      colorClass:  'pc-icon-orange',
      featured:    false
    },
    yearly: {
      name:        'Tiết kiệm',
      sub:         '1 năm',
      priceOrig:   null,              // BỎ fake anchor 900k
      price:       499000,
      priceLabel:  '499.000đ',
      perMonth:    '~42.000đ',
      perDay:      '~1.400đ',         // ⭐ KEY MARKETING — "1 ly trà đá/ngày"
      saveLabel:   'Rẻ hơn 44%/tháng',
      compareNote: 'so với Monthly · ~1.400đ/ngày — rẻ hơn 1 ly trà đá',
      durationDays: 365,
      tokenBonus:  1500,
      aiCreditBonus: 600,           // welcome gift 1 lần (Model C)
      aiAllowancePerMonth: 250,     // recurring nhỏ/tháng (Model C)
      icon:        '⭐',
      colorClass:  'pc-icon-yellow',
      featured:    true,
      badge:       '⭐ Phổ biến nhất'
    },
    lifetime: {
      name:        'Trọn đời',
      sub:         '1 lần',
      priceOrig:   null,
      price:       2490000,
      priceLabel:  '2.490.000đ',
      perMonth:    'vĩnh viễn',
      perDay:      null,                  // không tính daily cho lifetime
      saveLabel:   'Hoà vốn sau ~33 tháng',
      compareNote: 'so với Monthly 75k × 33 = 2.475k · sau đó MIỄN PHÍ vĩnh viễn',
      durationDays: null,
      tokenBonus:  3000,
      aiCreditBonus: 1000,          // welcome gift 1 lần (Model C)
      aiAllowancePerMonth: 200,     // recurring nhỏ vĩnh viễn (Model C)
      icon:        '💎',
      colorClass:  'pc-icon-purple',
      featured:    false
      // AI: Lifetime = recurring nhỏ 200cr/m + welcome gift 1.000cr 1 lần (Model C 2026-05-31).
      // KHÔNG unlimited, KHÔNG allowance lớn vĩnh viễn (mô hình cũ đã bỏ)
    }
  };

  // ── AI Credit Packs (BETA — 2026-05-23) ────────────────────────────────
  // "Túi Linh Đan AI" — bán VND, mọi tier mua được kể cả Free
  // 1 credit ≈ baseline cost 1 lượt Tutor (~30đ blended)
  // Pricing formula: credit × cost × 2.5 / (1 - 2.5% phí cổng)
  var AI_CREDIT_PACKS = {
    aipack_so: {
      sku:         'aipack_so',
      tier:        'Sơ',
      tierLabel:   'Linh Đan Sơ',
      credits:     100,
      price:       29000,
      priceLabel:  '29.000đ',
      perCredit:   '290đ/cr',
      marginPct:   70,
      icon:        '🥉',
      featured:    false,
      beta:        true
    },
    aipack_trung: {
      sku:         'aipack_trung',
      tier:        'Trung',
      tierLabel:   'Linh Đan Trung',
      credits:     500,
      price:       99000,
      priceLabel:  '99.000đ',
      perCredit:   '198đ/cr',
      marginPct:   57,
      icon:        '🥈',
      featured:    false,
      beta:        true
    },
    aipack_cao: {
      sku:         'aipack_cao',
      tier:        'Cao',
      tierLabel:   'Linh Đan Cao',
      credits:     1500,
      price:       199000,
      priceLabel:  '199.000đ',
      perCredit:   '133đ/cr',
      marginPct:   37,
      icon:        '🥇',
      featured:    true,
      beta:        true
    }
    // Note: aipack_tien (5000cr / 499k / margin 17%) đợi data thật → chưa launch beta
  };

  // ── Hộp Ân Cần (Honor Pack — donation-framed) ─────────────────────────
  // 1 SKU duy nhất 99k. Cap 12 lần/năm/user. Outfit rotate 1 món/tháng.
  // Xem docs/HONOR_PACK_DESIGN.md cho danh sách 12 outfit/năm.
  var HONOR_PACK = {
    sku:          'honor_pack',
    name:         'Hộp Ân Cần',
    price:        99000,
    priceLabel:   '99.000đ',
    tokensFree:   1000,
    tokensProBonus: 200,           // Pro user +200 token bonus (total 1200)
    rewards: {
      token:      1000,
      outfit:     'monthly_rotate', // determined by month_year at purchase time
      badge:      'mạnh_thường_quân',
      honorHall:  true              // optional display in /honor-hall
    },
    capPerYear:   12,               // 1 outfit/tháng × 12 = full set 12 outfit/năm
    proPerks: {
      earlyAccess: true,            // outfit available to Pro 24h sooner
      tokenBonus:  200
    },
    icon:         '📦',
    framing:      'donation'        // NEVER use "purchase" framing in UI
  };

  // ── Daily AI usage caps (per tier) ────────────────────────────────────
  var AI_DAILY_CAPS = {
    free:        50,
    monthly:     200,
    quarterly:   200,
    semiannual:  200,
    yearly:      200,
    lifetime:    200
  };

  // ── AI Credit Pack purchase caps (per month) ──────────────────────────
  var AI_PACK_PURCHASE_CAPS = {
    free:        2,
    monthly:     5,
    quarterly:   8,
    semiannual:  8,
    yearly:      10,
    lifetime:    10
  };

  // ── Helpers ───────────────────────────────────────────────────────────
  function fmtVND(n) {
    return n.toLocaleString('vi-VN') + 'đ';
  }

  function getSubscription(sku)   { return SUBSCRIPTIONS[sku] || null; }
  function getAICreditPack(sku)   { return AI_CREDIT_PACKS[sku] || null; }
  function getHonorPack()         { return HONOR_PACK; }
  function getAIDailyCap(tier)    { return AI_DAILY_CAPS[tier] || 50; }
  function getAIPackCap(tier)     { return AI_PACK_PURCHASE_CAPS[tier] || 2; }

  function getAIAllowance(tier) {
    var s = SUBSCRIPTIONS[tier];
    return s ? s.aiAllowancePerMonth : 50; // free default
  }

  // Map duration name → icon (used by sidebar plan badge if added later)
  function durationIcon(duration) {
    var s = SUBSCRIPTIONS[duration];
    return s ? s.icon : '🪙';
  }

  // ⚠️ DEPRECATED — backward compat for any old caller during transition.
  // TOKEN_PACKS removed 2026-05-23 (chống tiếng "bào tiền").
  // New code: use HONOR_PACK + AI_CREDIT_PACKS.
  function getTokenPack(sku) {
    console.warn('[PLAN_CATALOG] getTokenPack() is DEPRECATED. Token Pack VND removed 2026-05-23. Use HonorPack or AICreditPack.');
    return null;
  }

  return {
    SUBSCRIPTIONS:      SUBSCRIPTIONS,
    AI_CREDIT_PACKS:    AI_CREDIT_PACKS,
    HONOR_PACK:         HONOR_PACK,
    AI_DAILY_CAPS:      AI_DAILY_CAPS,
    AI_PACK_PURCHASE_CAPS: AI_PACK_PURCHASE_CAPS,
    getSubscription:    getSubscription,
    getAICreditPack:    getAICreditPack,
    getHonorPack:       getHonorPack,
    getAIDailyCap:      getAIDailyCap,
    getAIPackCap:       getAIPackCap,
    getAIAllowance:     getAIAllowance,
    durationIcon:       durationIcon,
    fmtVND:             fmtVND,
    // DEPRECATED — kept for transition safety
    getTokenPack:       getTokenPack,
    TOKEN_PACKS:        null  // explicit null instead of removed object
  };
}());
