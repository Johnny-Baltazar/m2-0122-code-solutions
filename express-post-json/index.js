const express = require('express');
const app = express();

var nextId = 1;
var grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const prop in grades) {
    gradesArr.push(grades[prop]);
  }
  res.json(gradesArr);
});

app.post('/api/grades/', (req, res) => {
  const postedGrade = req.body;
  const id = nextId;
  postedGrade.id = id;
  grades[id] = postedGrade;
  nextId++;
  res.status(201).json(postedGrade);
});

app.listen(3000, () => {
  // console.log('The server is listening');
});
