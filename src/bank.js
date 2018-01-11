const Bank=function(bankName){
  this.bankName=bankName;
  this.money=250000;
}

Bank.prototype.giveInitialMoneyToPlayer = function (player) {
  player.reciveMoney(5000);
};

Bank.prototype.creditMoney = function (creditTo,amount) {
  creditTo.reciveMoney(amount);
};

module.exports = Bank;
