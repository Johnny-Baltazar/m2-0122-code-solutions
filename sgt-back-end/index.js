const pg = require('pg');
const express = require('express');
const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
  select "gradeId",
         "name",
         "course",
         "score",
         "createdAt"
    from "grades"
  `;

  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An expected error occurred' });
    });
});

app.post('/api/grades/', (req, res) => {
  const postGrade = req.body;
  const score = Number(postGrade.score);
  if (!postGrade.name) {
    res.status(400).json({ error: 'Must include a valid name' });
  } else if (!postGrade.course) {
    res.status(400).json({ error: 'Must include a valid course' });
  } else if (!score) {
    res.status(400).json({ error: 'Must include a valid score' });
  } else if (score < 0 || score > 100 || !Number.isInteger(score)) {
    res.status(400).json({ error: 'Score must be a positve integer between 0 & 100' });
  } else {
    const insertSql = `
    insert into "grades" ("name", "course", "score")
    values ('${postGrade.name}', '${postGrade.course}', '${score}')
    returning *
    `;

    db.query(insertSql)
      .then(result => {
        const grade = result.rows[0];
        res.status(201);
        res.json(grade);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error has occurred.' });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;

  if (gradeId <= 0 || isNaN(gradeId)) {
    res.status(400).send({ error: 'gradeId must be a postitve integer' });
  } else if (!name) {
    res.status(400).send({ error: 'must include a valid name' });
  } else if (!course) {
    res.status(400).send({ error: 'must include a valid course' });
  } else if (!score) {
    res.status(400).send({ error: 'must include a valid score' });
  } else if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).send({ error: 'score must be a positive integer between 0 and 100' });
  } else {
    var sql = `
    select "gradeId",
         "name",
         "course",
         "score",
         "createdAt"
      from "grades"
      where "gradeId" = ${gradeId}
  `;

    db.query(sql)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).send({ error: `cannot find gradeId ${gradeId}` });
        } else {
          const putSql = `
          update "grades"
            set "name"    = '${name}',
                "course"  = '${course}',
                "score"   = '${score}'
          where "gradeId" = ${gradeId}
          returning *
          `;

          db.query(putSql)
            .then(result => {
              res.status(200);
              res.json(result.rows[0]);
            });
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error has occurred.' });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (gradeId <= 0 || !Number.isInteger(gradeId)) {
    res.status(400).send({ error: 'gradeId must be a positive integer' });
  } else {
    var sql = `
    select "gradeId",
         "name",
         "course",
         "score",
         "createdAt"
      from "grade"
      where "gradeId" = ${gradeId}
  `;

    db.query(sql)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).send({ error: `cannot find gradeId ${gradeId}` });
        } else {
          sql = `
          delete from "grades"
            where "gradeId" = ${gradeId};
          `;
          db.query(sql);
          res.sendStatus(204);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An expected error occurred' });
      });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('The server is listening.');
});
