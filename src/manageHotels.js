const Hotel = require('./hotel.js');
const ManageHotels=function(){
  this.hotels={};
}

ManageHotels.prototype.addHotel = function (hotelName) {
  this.hotels[hotelName]=new Hotel(hotelName);
  return true;
};

ManageHotels.prototype.buySharesOfHotel=function(hotelName,noOfShares,shareHolder){
  let hotel=this.hotels[hotelName];
  hotel.buyShares(shareHolder,noOfShares);
}

module.exports = ManageHotels;
