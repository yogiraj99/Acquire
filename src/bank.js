const Bank=function(bankName){
  this.bankName=bankName;
  this.money=250000;
}

Bank.prototype.giveInitialMoney = function (player) {
  player.reciveMoney(5000);
  return true;
};

Bank.prototype.creditMoney = function (creditTo,amount) {
  creditTo.reciveMoney(amount);
};

module.exports = Bank;
