const Favourite = require('../models/favourite');
const Home = require('../models/home');

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render('store/index', {
      registeredHomes: registeredHomes,
      pageTitle: 'airbnb Home',
      currentPage: 'index'
    });
  });
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render('store/home-list', {
      registeredHomes: registeredHomes,
      pageTitle: 'Homes List',
      currentPage: 'home-list'
    });
  });
};

exports.getBookings = (req, res, next) => {
  res.render('store/bookings', {
    pageTitle: 'My Bookings',
    currentPage: 'bookings'
  });
};

exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavourites((favourites) => {
    Home.fetchAll((registeredHomes) => {
      const favouriteHomes = registeredHomes.filter(home => favourites.includes(home.Id));
      res.render('store/favourite-list', {
        favouriteHomes: favouriteHomes,
        pageTitle: 'My Favourites',
        currentPage: 'favourites',
      });
    });
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, home => {
    if (!home) {
      console.log('Home Not Found!')
      res.redirect('/store/home-list');
    } else {
      res.render('store/home-details', {
        home: home,
        pageTitle: 'Home Detail',
        currentPage: 'home-list'
      })
    }
  })
};

exports.postAddToFavourite = (req, res, next) => {
  Favourite.addToFavourite(req.body.id, error => {
    if (error) {
      console.log('Error while marking favourite', error);
    }
    res.redirect('/store/favourite-list');
  })
}