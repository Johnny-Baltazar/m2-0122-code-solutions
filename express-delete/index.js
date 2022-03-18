const express = require('express');
const app = express();

const grades =
{
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => {
  var gradesArr = [];
  for (var prop in grades) {
    gradesArr.push(grades[prop]);
  }
  res.json(gradesArr);
});

app.delete('/api/grades/:id', (req, res) => {
  for (var prop in grades) {
    if (req.params.id === prop) {
      delete grades[prop];
    }
  }
  res.sendStatus(204);
});

app.listen(3000, function () {
  // console.log('The server is listening on port 3000');
});
