// Script to identify missing words by level using individual HSK level files
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

// Get current words by level
const currentWordsByLevel = {};
for (let lv = 1; lv <= 6; lv++) {
  currentWordsByLevel[lv] = new Set(HSK_DATA[lv].map(w => w.h));
}

console.log('\nCurrent app word counts:');
for (let lv = 1; lv <= 6; lv++) {
  console.log(`HSK ${lv}: ${currentWordsByLevel[lv].size} words`);
}

// Load HSK 2.0 data by level and find missing words
const missingByLevel = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };

console.log('\nAnalyzing HSK 2.0 data...');
for (let lv = 1; lv <= 6; lv++) {
  const hsk20Data = require(`./temp_hsk_data/hsk_level_${lv}.json`);
  console.log(`HSK ${lv}: ${hsk20Data.length} words in HSK 2.0`);

  // Find words in this level that are missing from app
  hsk20Data.forEach(word => {
    const hanzi = word.s;
    // Check if word exists in ANY level of current app
    let foundInApp = false;
    for (let checkLv = 1; checkLv <= 6; checkLv++) {
      if (currentWordsByLevel[checkLv].has(hanzi)) {
        foundInApp = true;
        break;
      }
    }

    if (!foundInApp) {
      missingByLevel[lv].push(word);
    }
  });
}

console.log('\nMissing words by level:');
let totalMissing = 0;
for (let lv = 1; lv <= 6; lv++) {
  console.log(`HSK ${lv}: ${missingByLevel[lv].length} missing`);
  totalMissing += missingByLevel[lv].length;
}
console.log(`Total missing: ${totalMissing}`);

// Save missing words by level
fs.writeFileSync(
  'temp_hsk_data/missing_by_level.json',
  JSON.stringify(missingByLevel, null, 2),
  'utf8'
);

console.log('\n✓ Saved to temp_hsk_data/missing_by_level.json');

// Show samples
console.log('\nSample missing words from each level:');
for (let lv = 1; lv <= 6; lv++) {
  if (missingByLevel[lv].length > 0) {
    console.log(`\nHSK ${lv} (showing first 5):`);
    missingByLevel[lv].slice(0, 5).forEach(word => {
      const form = word.f[0];
      const pinyin = form.i.y;
      const meaning = form.m[0];
      console.log(`  ${word.s} (${pinyin}) - ${meaning}`);
    });
  }
}
