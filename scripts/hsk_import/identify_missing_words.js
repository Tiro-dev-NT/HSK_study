// Script to identify missing HSK 2.0 words
const fs = require('fs');
const path = require('path');

// Load HSK 2.0 complete data
const hsk20Data = require('./temp_hsk_data/hsk_old_6.json');
console.log('Loaded HSK 2.0 data:', hsk20Data.length, 'words\n');

// Load current app data
var HSK_DATA = { 1:[], 2:[], 3:[], 4:[], 5:[], 6:[] };
const dataDir = path.join(__dirname, 'js', 'data');
const hskFiles = fs.readdirSync(dataDir)
  .filter(f => f.match(/^hsk\d+.*\.js$/))
  .sort();

hskFiles.forEach(file => {
  const filePath = path.join(dataDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  try {
    eval(content);
  } catch (e) {
    console.error(`Error loading ${file}:`, e.message);
  }
});

// Get all unique words from current app
const currentWords = new Set();
for (let lv = 1; lv <= 6; lv++) {
  HSK_DATA[lv].forEach(w => currentWords.add(w.h));
}

console.log('Current app has:', currentWords.size, 'unique words\n');

// Find missing words
const missingWords = [];
hsk20Data.forEach(word => {
  const hanzi = word.s; // simplified Chinese
  if (!currentWords.has(hanzi)) {
    missingWords.push(word);
  }
});

console.log('Missing words:', missingWords.length);
console.log('Expected missing:', 5000 - currentWords.size, '\n');

// Save missing words to file
fs.writeFileSync(
  'temp_hsk_data/missing_words.json',
  JSON.stringify(missingWords, null, 2),
  'utf8'
);

console.log('✓ Saved missing words to temp_hsk_data/missing_words.json');

// Show sample of missing words
console.log('\nSample of missing words (first 10):');
missingWords.slice(0, 10).forEach((word, idx) => {
  const form = word.f[0];
  const pinyin = form.i.y;
  const meaning = form.m[0];
  console.log(`${idx + 1}. ${word.s} (${pinyin}) - ${meaning}`);
});

// Statistics by frequency
const byFrequency = missingWords.sort((a, b) => a.q - b.q);
console.log('\nMost common missing words (by frequency):');
byFrequency.slice(0, 10).forEach((word, idx) => {
  const form = word.f[0];
  const pinyin = form.i.y;
  const meaning = form.m[0];
  console.log(`${idx + 1}. ${word.s} (${pinyin}) - ${meaning} [freq: ${word.q}]`);
});
