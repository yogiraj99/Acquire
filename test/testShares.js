const Shares = require('../src/shares.js');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe("Shares",function () {
  describe("buyShares()",function () {
    it("should addShareHolder and then shares of shareHolder if not a shareHolder already",function () {
      let shares=new Shares();
      shares.buyShares("brandonStark",3);
      assert.deepOwnInclude(shares,{shareHolders:{"brandonStark":3}});
    })
    it("should only add shares if shareHolder already",function () {
      let shares=new Shares();
      shares.buyShares("brandonStark",3);
      shares.buyShares("brandonStark",3)
      assert.deepOwnInclude(shares,{shareHolders:{"brandonStark":6}});
    })
  })
  describe("#howManySharesRemaining",function () {
    it("should be 25 at initial",function () {
      let shares=new Shares();
      let sharesRemaining=shares.howManySharesRemaining();
      assert.equal(sharesRemaining,25);
    })
    it("should be decrease by same number,no of shares shareHolder buoght ",function () {
      let shares=new Shares();
      shares.buyShares("harryPotter",3);
      let sharesRemaining=shares.howManySharesRemaining();
      assert.equal(sharesRemaining,22);
      shares.buyShares("harryPotter",3);
      shares.buyShares("harryPotter",3);
      sharesRemaining=shares.howManySharesRemaining();
      assert.equal(16,sharesRemaining);
    })
  })
})
