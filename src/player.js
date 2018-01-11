const Player=function (playerName) {
  this.playerName=playerName;
  this.money=0;
  this.shares={};
}

Player.prototype.reciveMoney = function (amount) {
  this.money+=amount;
};

Player.prototype.payMoneny = function (amount) {
  this.money-=amount;
}

Player.prototype.addShares = function (hotelName,shares) {
  if (this.shares[hotelName]) {
    this.shares[hotelName]+=shares;
    return ;
  }
  this.shares[hotelName]=shares;
};



module.exports = Player;
