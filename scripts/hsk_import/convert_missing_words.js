// Final script to identify and convert missing HSK 2.0 words by level
const fs = require('fs');
const path = require('path');

// Load current app data
var HSK_DATA = { 1:[], 2:[], 3:[], 4:[], 5:[], 6:[] };
const dataDir = path.join(__dirname, 'js', 'data');
const hskFiles = fs.readdirSync(dataDir)
  .filter(f => f.match(/^hsk\d+.*\.js$/))
  .sort();

console.log('Loading current app data...');
hskFiles.forEach(file => {
  const filePath = path.join(dataDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  try {
    eval(content);
  } catch (e) {
    console.error(`Error loading ${file}:`, e.message);
  }
});

// Get all current words (across all levels)
const allCurrentWords = new Set();
for (let lv = 1; lv <= 6; lv++) {
  HSK_DATA[lv].forEach(w => allCurrentWords.add(w.h));
}

console.log('Current app total unique words:', allCurrentWords.size);

// Map part of speech to category
function mapToCategory(pos) {
  if (!pos || pos.length === 0) return 'general';
  const p = pos[0];
  const map = {
    'n': 'objects', 'nr': 'social', 'ns': 'places', 'nt': 'work',
    'v': 'actions', 'vn': 'actions', 'vd': 'actions', 'vg': 'actions',
    'a': 'adjectives', 'ad': 'adjectives', 'an': 'adjectives',
    'd': 'actions', 'p': 'language', 'q': 'numbers', 'r': 'pronouns',
    't': 'time', 'tg': 'time', 'c': 'language', 'e': 'emotions',
    'm': 'numbers', 'mg': 'numbers', 'f': 'places', 's': 'places'
  };
  return map[p] || 'general';
}

// Convert HSK 2.0 word to app format
function convertToAppFormat(word) {
  const form = word.f[0];
  const pinyin = form.i.y;
  const meanings = form.m;
  const english = meanings[0];
  const category = mapToCategory(word.p);

  return {
    h: word.s,
    p: pinyin,
    v: english, // Placeholder - needs Vietnamese translation
    e: english,
    t: category
    // Note: ex (example) field omitted - will be added manually later
  };
}

// Process each level
const missingByLevel = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };
let totalMissing = 0;

console.log('\nAnalyzing exclusive wordlists...\n');

for (let lv = 1; lv <= 6; lv++) {
  const exclusiveData = require(`./temp_hsk_data/hsk_exclusive_${lv}.json`);
  console.log(`HSK ${lv}: ${exclusiveData.length} words in HSK 2.0 exclusive`);

  exclusiveData.forEach(word => {
    if (!allCurrentWords.has(word.s)) {
      missingByLevel[lv].push(convertToAppFormat(word));
      totalMissing++;
    }
  });

  console.log(`  → ${missingByLevel[lv].length} missing from app`);
}

console.log(`\nTotal missing: ${totalMissing} words`);

// Save converted words by level
console.log('\nSaving converted words...');
for (let lv = 1; lv <= 6; lv++) {
  if (missingByLevel[lv].length > 0) {
    const filename = `temp_hsk_data/to_import_level_${lv}.json`;
    fs.writeFileSync(filename, JSON.stringify(missingByLevel[lv], null, 2), 'utf8');
    console.log(`✓ Level ${lv}: ${missingByLevel[lv].length} words → ${filename}`);
  }
}

// Show samples
console.log('\n📋 Sample missing words from each level:\n');
for (let lv = 1; lv <= 6; lv++) {
  if (missingByLevel[lv].length > 0) {
    console.log(`HSK ${lv} (first 3):`);
    missingByLevel[lv].slice(0, 3).forEach(w => {
      console.log(`  ${w.h} (${w.p}) - ${w.e}`);
    });
  }
}

console.log('\n⚠️  NEXT STEPS:');
console.log('1. Review temp_hsk_data/to_import_level_*.json files');
console.log('2. Vietnamese translations (v field) are placeholders');
console.log('3. Example sentences (ex field) are missing - add manually');
console.log('4. Run final import script to add to js/data/hsk*.js files');
