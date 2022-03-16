const express = require('express');
const app = express();

app.use(function (req, res, next) {
  // console.log('Request Type:', req.method);
  res.send('This is a response string');
  next();
});

app.listen(3000, function () {
  // console.log('The server is listening.');
});
