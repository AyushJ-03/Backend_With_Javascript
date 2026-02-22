const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtils');

const homeDataPath = path.join(rootDir, 'data', 'homes.json');

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    this.Id = (Math.floor(Math.random() * 10) + 1).toString();
    Home.fetchAll(registeredHomes => {
      registeredHomes.push(this);
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error => {
        console.log('File Writing Concluded', error);
      });
    })
  };

  static fetchAll(callback) {
    fs.readFile(homeDataPath, (error, data) => {
      if (!error) {
        callback(JSON.parse(data));
      }
      else callback([]);
    });
  };

  static findById(homeId, callback) {
    this.fetchAll(homes => {
      const homeFound = homes.find(home => home.Id === homeId);
      callback(homeFound); 
    })
  }
}
