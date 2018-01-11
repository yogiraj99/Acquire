const Shares = require('./shares.js');

const Hotel=function(hotelName){
  this.hotelName=hotelName;
  this.state="inactive";
  this.shares=new Shares();
}

Hotel.prototype.isActive = function () {
  return this.state=="active";
};

Hotel.prototype.makeActive = function () {
  this.state="active";
};

Hotel.prototype.makeInactive = function () {
  this.state="inactive";
}

Hotel.prototype.buyShares = function (shareHolder,noOfShares) {
  this.shares.buyShares(shareHolder,noOfShares);
}

module.exports = Hotel;
