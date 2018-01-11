const Player = require('../src/player.js');
const assert = require('chai').assert;

describe("Player",function () {
  describe("reciveMoney()",function () {
    it("should increase money by given amount",function () {
      let player=new Player("harryPotter");
      player.reciveMoney(4000);
      assert.equal(player.money,4000);
    })
  })
  describe("payMoneny()",function () {
    it("should decrease money by given amount",function () {
      let player=new Player("AlbusSeverusPotter");
      player.reciveMoney(4000);
      assert.equal(player.money,4000);
      player.payMoneny(2000)
      assert.equal(player.money,2000);
    })
  })
  describe("addShares()",function () {
    it("should add hotelName and then shares of hotel if didn't bought shares already",function () {
      let player=new Player("brandonStark");
      player.addShares("hotelTaj",3);
      assert.deepOwnInclude(player,{shares:{"hotelTaj":3}});
    })
    it("should only add shares if bought shares of hotel already",function () {
      let player=new Player("brandonStark");
      player.addShares("hotelTaj",3);
      player.addShares("hotelParadise",2);
      player.addShares("hotelTaj",1);
      assert.deepOwnInclude(player,{shares:{"hotelTaj":4,"hotelParadise":2}});
    })
  })
})
