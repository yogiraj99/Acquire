const Hotel=function(hotelName){
  this.hotelName=hotelName;
  this.active=false;
  this.shareHolders={};
}

Hotel.prototype.isActive = function () {
  return this.active;
};

Hotel.prototype.makeActive = function () {
  this.active=true;
  return true;
};
