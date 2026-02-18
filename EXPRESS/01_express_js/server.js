const express = require('express');

const requestHandler = require('./user');

const app = express();

app.use('/',(req, res, next) => {
  console.log("Came in first middleware !", req.url, req.method);
  next();
});

app.use('/submit-details',(req, res, next) => {
  console.log("Came in second middleware !", req.url, req.method);
  res.send("<p>Welcome to Ayush's page");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`)
});

