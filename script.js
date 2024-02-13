const fs = require('fs');
const readline = require('readline');

const readableStream = fs.createReadStream('text.txt');

const lineReader = readline.createInterface({
  input: readableStream,
  crlfDelay: Infinity
});

let wordCount = 0;
lineReader.on('line', (line) => {
  const words = line.split(' ').filter(word => word !== '');
  wordCount += words.length;
});

lineReader.on('close', () => {
  console.log(`Кількість слів в тексті: ${wordCount}`);
});