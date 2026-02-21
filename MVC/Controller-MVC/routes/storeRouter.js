const express = require('express');
const storeRouter = express.Router();

const storeController = require('../controllers/storeController');

storeRouter.get('/', storeController.getIndex);
storeRouter.get('/store/home-list', storeController.getHomes);
storeRouter.get('/store/bookings', storeController.getBookings);
storeRouter.get('/store/favourite-list', storeController.getFavouriteList);

exports.storeRouter = storeRouter;