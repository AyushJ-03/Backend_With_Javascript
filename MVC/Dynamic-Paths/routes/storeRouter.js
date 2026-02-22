const express = require('express');
const storeRouter = express.Router();

const storeController = require('../controllers/storeController');

storeRouter.get('/', storeController.getIndex);
storeRouter.get('/store/home-list', storeController.getHomes);
storeRouter.get('/store/bookings', storeController.getBookings);
storeRouter.get('/store/favourite-list', storeController.getFavouriteList);
storeRouter.get('/store/home-list/:homeId', storeController.getHomeDetails);

storeRouter.post('/store/favourite-list', storeController.postAddToFavourite);

exports.storeRouter = storeRouter;