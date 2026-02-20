const express = require('express');

const hostRouter = express.Router();

hostRouter.get('/add-home', (req, res, next) => {
  res.render('addHome', {pageTitle : 'Add Home To airbnb'});
});

const registeredHomes = [];

hostRouter.post('/add-home', (req, res, next) => {
  console.log(req.body);
  registeredHomes.push({houseName: req.body.houseName});
  res.render('homeAdded', {pageTitle : 'Home Added Successfully'});
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;