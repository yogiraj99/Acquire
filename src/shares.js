const Shares = function (maxNumberOfShares) {
  this.maxNumberOfShares=maxNumberOfShares||25;
  this.shareHolders={};
}

Shares.prototype.addShareHolder = function (shareHolderName,noOfShares) {
  this.shareHolders[shareHolderName]=noOfShares;
  this.noOfSharesRemaining-=noOfShares;
};

Shares.prototype.addSharesOfShareHolder = function (shareHolderName,noOfShares){
  this.shareHolders[shareHolderName]+=noOfShares;
  this.noOfSharesRemaining-=noOfShares;
}

Shares.prototype.howManySharesRemaining = function () {
  let allShareHolders=Object.keys(this.shareHolders);
  let shares=this;
  let noOfSharesOwend=allShareHolders.reduce(function (noOfSharesEarlier,shareHolder) {
    return noOfSharesEarlier+=shares.shareHolders[shareHolder];
  },0);
  return this.maxNumberOfShares-noOfSharesOwend;
};

Shares.prototype.buyShares = function (shareHolder,noOfShares) {
  if(this.shareHolders[shareHolder]){
    this.addSharesOfShareHolder(shareHolder,noOfShares);
    return ;
  }
  this.addShareHolder(shareHolder,noOfShares);
};

module.exports = Shares;
