const express = require('express');
const path = require('path');

const userRouter = express.Router();
const rootDir = require('../utils/pathUtils');

userRouter.get('/', (req, res, next) => {
  console.log("On the first handler", req.url, req.method);
  res.sendFile(path.join(rootDir, 'views', 'homePage.html'));
});

userRouter.get('/host/contact-us', (req, res, next) => {
  console.log("On the second handler", req.url, req.method);
  res.sendFile(path.join(rootDir, 'views', 'contactForm.html'));
});

module.exports = userRouter;