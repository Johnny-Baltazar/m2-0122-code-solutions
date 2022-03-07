const fs = require('fs');

for (var i = 0; i < process.argv.length; i++) {
  if (process.argv[i] === 'cunningham.txt') {
    fs.readFile('cunningham.txt', 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      console.log(data);
    });
  } else if (process.argv[i] === 'dijkstra.txt') {
    fs.readFile('dijkstra.txt', 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      console.log(data);
    });
  } else if (process.argv[i] === 'hopper.txt') {
    fs.readFile('hopper.txt', 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      console.log(data);
    });
  } else if (process.argv[i] === 'hipster-ipsum.txt') {
    fs.readFile('hipster-ipsum.txt', 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      console.log(data);
    });
  }
}
