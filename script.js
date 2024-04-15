const fs = require('fs');

fs.readFile('text.txt', 'utf8', function(err, data) {

  if (err) throw err;

  const words = data.match(/\S+/g);

  console.log(words.length);

});
