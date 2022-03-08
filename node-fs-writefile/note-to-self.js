const fs = require('fs');
var data = process.argv.slice(2).toString();

fs.writeFile('note.txt', data, err => {
  if (err) {
    throw err;
  }
  return data;
});
