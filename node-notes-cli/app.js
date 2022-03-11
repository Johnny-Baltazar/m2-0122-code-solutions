const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
  data = JSON.parse(data);
  var entries = Object.entries(data.notes);

  if (err) {
    throw err;
  }
  if (process.argv[2] === 'read') {
    for (const [keys, note] of entries) {
      console.log(`${keys}: ${note}`);
    }
  } else if (process.argv[2] === 'create') {
    data.notes[JSON.stringify(data.nextId)] = process.argv[3];
    data.nextId++;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err, result) => {
      if (err) {
        return err;
      }
    });
  } else if (process.argv[2] === 'update') {
    for (const [key] of entries) {
      if (key === process.argv[3]) {
        data.notes[key] = process.argv[4];
        fs.writeFile('data.json', JSON.stringify(data, null, 2), (err, result) => {
          if (err) {
            return err;
          }
        });
      }
    }
  } else if (process.argv[2] === 'delete') {
    Object.keys(data.notes).forEach(function (key) {
      if (key === process.argv[3]) {
        delete data.notes[key];
        fs.writeFile('data.json', JSON.stringify(data, null, 2), (err, result) => {
          if (err) {
            return err;
          }
        });
      }
    });
  }
});
