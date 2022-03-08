const fs = require('fs');

fs.readFile(process.argv.slice(2).toString(), 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
