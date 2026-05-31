// ═══════════════════════════════════════════════════════
// SECURITY.JS — XSS prevention helpers
// Load BEFORE any module that renders user content.
// ═══════════════════════════════════════════════════════

/**
 * Escape HTML special characters to prevent XSS.
 * Use when inserting user-provided strings into innerHTML.
 * @param {*} str - Value to escape (coerced to string)
 * @returns {string} Escaped string safe for HTML content
 */
function escapeHtml(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Escape for use in HTML attribute values (double-quoted).
 * @param {*} str - Value to escape
 * @returns {string} Escaped string safe for attribute values
 */
function escapeAttr(str) {
  return escapeHtml(str);
}

// Expose globally
window.escapeHtml = escapeHtml;
window.escapeAttr = escapeAttr;
