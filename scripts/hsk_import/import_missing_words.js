// Script to import missing HSK 2.0 words into app database
const fs = require('fs');
const path = require('path');

// Load missing words
const missingWords = require('./temp_hsk_data/missing_words.json');
console.log('Loaded', missingWords.length, 'missing words\n');

// Map HSK 2.0 levels to app levels
function getAppLevel(hsk20Levels) {
  // hsk20Levels is array like ["o1", "o2"] (old-1, old-2)
  // Extract highest level number
  const levels = hsk20Levels
    .filter(l => l.startsWith('o')) // only old HSK (2.0)
    .map(l => parseInt(l.substring(1)));

  return levels.length > 0 ? Math.max(...levels) : 6;
}

// Map part of speech from HSK 2.0 to app categories
function mapToCategory(pos) {
  if (!pos || pos.length === 0) return 'general';

  const p = pos[0]; // take first POS
  const categoryMap = {
    'n': 'objects', 'nr': 'social', 'ns': 'places', 'nt': 'work',
    'v': 'actions', 'vn': 'actions',
    'a': 'adjectives', 'ad': 'adjectives',
    'd': 'actions',
    'p': 'language',
    'q': 'numbers',
    'r': 'pronouns',
    't': 'time',
    'c': 'language',
    'e': 'emotions',
    'm': 'numbers'
  };

  return categoryMap[p] || 'general';
}

// Convert HSK 2.0 word to app format
function convertToAppFormat(word) {
  const form = word.f[0]; // take first form
  const pinyin = form.i.y; // pinyin with tones
  const meanings = form.m;
  const vietnamese = meanings[0]; // use first meaning as Vietnamese (will need manual review)
  const english = meanings[0];
  const category = mapToCategory(word.p);

  // Create example sentence (placeholder - needs manual addition later)
  const example = {
    zh: word.s + "。",
    py: pinyin + ".",
    vi: vietnamese + ".",
    en: english + "."
  };

  return {
    h: word.s,           // hanzi (simplified)
    p: pinyin,           // pinyin
    v: vietnamese,       // Vietnamese (placeholder, needs translation)
    e: english,          // English
    t: category,         // topic/category
    ex: example          // example sentence (placeholder)
  };
}

// Group words by level
const wordsByLevel = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };

missingWords.forEach(word => {
  const level = getAppLevel(word.l || []);
  const appWord = convertToAppFormat(word);
  wordsByLevel[level].push(appWord);
});

// Show statistics
console.log('Words distribution by level:');
for (let lv = 1; lv <= 6; lv++) {
  console.log(`HSK ${lv}: ${wordsByLevel[lv].length} words`);
}

// Save to separate files for manual review
console.log('\nSaving to temp files for review...');
for (let lv = 1; lv <= 6; lv++) {
  if (wordsByLevel[lv].length > 0) {
    const filename = `temp_hsk_data/import_level_${lv}.json`;
    fs.writeFileSync(
      filename,
      JSON.stringify(wordsByLevel[lv], null, 2),
      'utf8'
    );
    console.log(`✓ Saved ${wordsByLevel[lv].length} words to ${filename}`);
  }
}

console.log('\n⚠️  IMPORTANT NOTES:');
console.log('1. Vietnamese translations are placeholders (copied from English)');
console.log('2. Example sentences are placeholders');
console.log('3. Categories are auto-mapped and may need adjustment');
console.log('4. Review temp_hsk_data/import_level_*.json before importing');
console.log('\nNext step: Run import_to_database.js to add these words to HSK data files');
