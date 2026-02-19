const express = require('express');
const path = require('path');

const hostRouter = express.Router();
const rootDir = require('../utils/pathUtils');

hostRouter.post('/contact-us', (req, res, next) => {
  console.log("Response recieved", req.url, req.method, req.body);
  res.sendFile(path.join(rootDir, 'views', 'infoRecieved.html'));
});

module.exports = hostRouter;