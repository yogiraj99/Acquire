const Hotel = require('./hotel.js');
const ManageHotels=function(){
  this.hotels={};
}

ManageHotels.prototype.addHotel = function (hotelName) {
  this.hotels[hotelName]=new Hotel(hotelName);
  return true;
};

ManageHotels.prototype.buyShares=function(sharesOf,noOfShares,shareHolder){

}
