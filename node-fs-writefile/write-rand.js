const fs = require('fs');
var data = Math.random().toString();

fs.writeFile('random.txt', data, err => {
  if (err) {
    throw (err);
  }
  return data;
});
