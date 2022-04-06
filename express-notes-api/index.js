const express = require('express');
const fs = require('fs');
const app = express();
const dataJson = require('./data.json');

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const prop in dataJson.notes) {
    notesArr.push(dataJson.notes[prop]);
  }
  res.json(notesArr);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id <= 0 || isNaN(id)) {
    res.status(400).send({ error: 'id must be a postive integer' });
  } else if (dataJson.notes[id]) {
    res.json(dataJson.notes[id]);
  } else {
    res.status(404).send({ error: 'cannot find note with id' + ' ' + id });
  }
});

app.post('/api/notes/', (req, res) => {
  var newNote = req.body;
  const id = dataJson.nextId;
  if (!newNote.content) {
    res.status(400).send({ error: 'content is a required field' });
  } else if (newNote.content) {
    dataJson.notes[id] = newNote;
    newNote.id = id;
    dataJson.nextId++;
    const stringifyNotes = JSON.stringify(dataJson, null, 2);
    fs.writeFile('data.json', stringifyNotes, (err, result) => {
      if (err) {
        console.error({ error: 'An unexpected error occurred.' });
        res.status(500).send({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).send(newNote);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id <= 0 || isNaN(id)) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (!dataJson.notes[id]) {
    res.status(404).send({ error: 'cannot find note with id' + ' ' + id });
  } else {
    delete dataJson.notes[id];
    const stringifyNotes = JSON.stringify(dataJson, null, 2);
    fs.writeFile('data.json', stringifyNotes, (err, result) => {
      if (err) {
        console.error({ error: 'An unexpected error occurred.' });
        res.status(500).send({ error: 'An unexpected error occurred.' });
      } else {
        res.sendStatus(204);
      }
    });
  }

});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const putNote = req.body;
  if (id <= 0 || isNaN(id)) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (!dataJson.notes[id] && putNote.content) {
    res.status(404).send({ error: 'cannot find note with id' + ' ' + id });
  } else if (dataJson.notes[id] && !putNote.content) {
    res.status(400).send({ error: 'content is a required field' });
  } else {
    dataJson.notes[id] = putNote;
    putNote.id = id;
    const stringifyNotes = JSON.stringify(dataJson, null, 2);
    fs.writeFile('data.json', stringifyNotes, (err, result) => {
      if (err) {
        console.error({ error: 'An unexpected error occurred.' });
        res.status(500).send({ error: 'An unexpected error occurred.' });
      } else {
        res.status(200).send(dataJson.notes[id]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('The server is listening');
});
