// Script to analyze HSK vocabulary data
const fs = require('fs');
const path = require('path');

// HSK 2.0 standard word counts
const HSK_2_0_STANDARD = {
  1: 150,
  2: 300,
  3: 600,
  4: 1200,
  5: 2500,
  6: 5000
};

// Initialize HSK_DATA
var HSK_DATA = { 1:[], 2:[], 3:[], 4:[], 5:[], 6:[] };

// Load all HSK data files
const dataDir = path.join(__dirname, 'js', 'data');
const hskFiles = fs.readdirSync(dataDir)
  .filter(f => f.match(/^hsk\d+.*\.js$/))
  .sort();

console.log('Loading HSK data files...\n');
hskFiles.forEach(file => {
  const filePath = path.join(dataDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  try {
    eval(content);
    console.log(`✓ Loaded ${file}`);
  } catch (e) {
    console.error(`✗ Error loading ${file}:`, e.message);
  }
});

console.log('\n' + '='.repeat(80));
console.log('HSK DATA ANALYSIS REPORT');
console.log('='.repeat(80) + '\n');

// 1. Count words per level
console.log('1. WORD COUNT COMPARISON (HSK 2.0 Standard)\n');
console.log('Level | Actual | Standard | Difference | Status');
console.log('------|--------|----------|------------|--------');

let totalActual = 0;
let totalStandard = 0;

for (let level = 1; level <= 6; level++) {
  const actual = HSK_DATA[level].length;
  const standard = HSK_2_0_STANDARD[level];
  const diff = actual - standard;
  const status = diff === 0 ? '✓ OK' : diff > 0 ? `+${diff} thừa` : `${diff} thiếu`;

  console.log(`  ${level}   | ${actual.toString().padStart(6)} | ${standard.toString().padStart(8)} | ${diff.toString().padStart(10)} | ${status}`);

  totalActual += actual;
  totalStandard += standard;
}

console.log('------|--------|----------|------------|--------');
console.log(`Total | ${totalActual.toString().padStart(6)} | ${totalStandard.toString().padStart(8)} | ${(totalActual - totalStandard).toString().padStart(10)} | ${totalActual < totalStandard ? 'THIẾU' : 'THỪA'}`);

// 2. Check for duplicates within each level
console.log('\n\n2. DUPLICATES WITHIN EACH LEVEL\n');

let hasDuplicates = false;
for (let level = 1; level <= 6; level++) {
  const words = HSK_DATA[level];
  const seen = new Map();
  const duplicates = [];

  words.forEach((word, idx) => {
    if (seen.has(word.h)) {
      duplicates.push({ word: word.h, first: seen.get(word.h), second: idx });
    } else {
      seen.set(word.h, idx);
    }
  });

  if (duplicates.length > 0) {
    console.log(`HSK ${level}: Found ${duplicates.length} duplicate(s)`);
    duplicates.slice(0, 5).forEach(d => {
      console.log(`  - "${d.word}" appears at index ${d.first} and ${d.second}`);
    });
    if (duplicates.length > 5) {
      console.log(`  ... and ${duplicates.length - 5} more`);
    }
    hasDuplicates = true;
  }
}

if (!hasDuplicates) {
  console.log('✓ No duplicates found within any level');
}

// 3. Check for duplicates across levels
console.log('\n\n3. WORDS APPEARING IN MULTIPLE LEVELS\n');

const allWords = new Map(); // word -> [levels]
for (let level = 1; level <= 6; level++) {
  HSK_DATA[level].forEach(word => {
    if (!allWords.has(word.h)) {
      allWords.set(word.h, []);
    }
    allWords.get(word.h).push(level);
  });
}

const crossLevelDuplicates = [];
allWords.forEach((levels, word) => {
  if (levels.length > 1) {
    crossLevelDuplicates.push({ word, levels });
  }
});

if (crossLevelDuplicates.length > 0) {
  console.log(`Found ${crossLevelDuplicates.length} words appearing in multiple levels:\n`);
  crossLevelDuplicates.slice(0, 10).forEach(d => {
    console.log(`  - "${d.word}" in levels: ${d.levels.join(', ')}`);
  });
  if (crossLevelDuplicates.length > 10) {
    console.log(`  ... and ${crossLevelDuplicates.length - 10} more`);
  }
} else {
  console.log('✓ No words appear in multiple levels');
}

// 4. Check data integrity
console.log('\n\n4. DATA INTEGRITY CHECK\n');

const requiredFields = ['h', 'p', 'v', 'e'];
let hasIntegrityIssues = false;

for (let level = 1; level <= 6; level++) {
  const words = HSK_DATA[level];
  const issues = [];

  words.forEach((word, idx) => {
    const missing = requiredFields.filter(field => !word[field]);
    if (missing.length > 0) {
      issues.push({ idx, word: word.h || '(no hanzi)', missing });
    }
  });

  if (issues.length > 0) {
    console.log(`HSK ${level}: Found ${issues.length} word(s) with missing fields`);
    issues.slice(0, 3).forEach(issue => {
      console.log(`  - Index ${issue.idx} "${issue.word}": missing ${issue.missing.join(', ')}`);
    });
    if (issues.length > 3) {
      console.log(`  ... and ${issues.length - 3} more`);
    }
    hasIntegrityIssues = true;
  }
}

if (!hasIntegrityIssues) {
  console.log('✓ All words have required fields (h, p, v, e)');
}

// 5. Summary
console.log('\n\n' + '='.repeat(80));
console.log('SUMMARY');
console.log('='.repeat(80) + '\n');

console.log(`Total words in database: ${totalActual}`);
console.log(`HSK 2.0 standard total: ${totalStandard}`);
console.log(`Difference: ${totalActual - totalStandard} (${totalActual < totalStandard ? 'thiếu' : 'thừa'})`);
console.log(`\nWords appearing in multiple levels: ${crossLevelDuplicates.length}`);
console.log(`Data integrity issues: ${hasIntegrityIssues ? 'YES' : 'NO'}`);

// Calculate percentage completion
console.log('\n\nCOMPLETION BY LEVEL:\n');
for (let level = 1; level <= 6; level++) {
  const actual = HSK_DATA[level].length;
  const standard = HSK_2_0_STANDARD[level];
  const percentage = ((actual / standard) * 100).toFixed(1);
  const bar = '█'.repeat(Math.floor(percentage / 5)) + '░'.repeat(20 - Math.floor(percentage / 5));
  console.log(`HSK ${level}: ${bar} ${percentage}%`);
}

console.log('\n' + '='.repeat(80));
