const Player=function (playerName) {
  this.playerName=playerName;
  this.money=0;
  this.shares={};
}

Player.prototype.reciveMoney = function (money) {
  this.money+=money;
  return true;
};

Player.prototype.addShares = function (HotelName,shares) {
  this.shares[hotelName]+=shares;
};



module.exports = Player;
