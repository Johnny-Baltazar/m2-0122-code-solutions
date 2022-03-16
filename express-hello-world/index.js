const express = require('express');
const app = express();

app.use(function (req, res) {
  // console.log('Request Type:', req.method);
  res.send('This is a response string');
});

app.listen(3000, function () {
  // console.log('The server is listening.');
});
