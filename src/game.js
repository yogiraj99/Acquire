const Player = require('./player.js');
const ManageHotels = require('./manageHotels.js');
const Bank = require('./bank.js');

const Game = function (){
  this.players={};
  this.manageHotels=new ManageHotels();
  this.shares=new Shares();
  this.bank= new Bank("AcquireBank");
}

Game.prototype.startGame = function () {
  this.initialMoneyDistribution();
  this.addHotels();
};

Game.prototype.addPlayer = function (playerName) {
  this.players[playerName]=new Player(playerName);
};

Game.prototype.initialMoneyDistribution = function () {
  let listOfPlayers=Object.keys(this.players);
  listOfPlayers.forEach(bank.giveInitialMoneyToPlayer(player));
};

Game.prototype.addHotels = function () {
  this.ManageHotels.addHotel("HotelTaj");
  this.ManageHotels.addHotel("HotelAmbassador");
  this.ManageHotels.addHotel("HotelParadise");
};

module.exports = Game;
