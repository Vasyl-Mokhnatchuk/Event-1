const fs = require('fs');

const readStream = fs.createReadStream('./text.txt', { highWaterMark: 10 });

let wordCount = 0;
let word = '';

readStream.on('data', (chunk) => {
  for (const char of chunk.toString()) {
    if (/\b[\w'-]+\b/.test(char)) {
      word += char;
    } else if (word) {
      wordCount++;
      word = '';
    }
  }
});

readStream.on('end', () => {
  if (word) { wordCount++; }

  console.log('Кількість слів:', wordCount);
});
readStream.on('error', (err) => {
  console.error('Під час читання файлу сталася помилка:', err);
});
