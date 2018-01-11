const Board = require('../src/board.js');
const assert = require('chai').assert;
const expect = require('chai').expect;


describe("Board",function(){
  it("#createDistributionOrder() should create distributionOrder of tiles made by given numbers and chars",function () {
    let numbers=[1,2,3];
    let chars=["A","B","C"];
    let board=new Board(numbers,chars);
    board.createDistributionOrder();
    assert.deepEqual(board.distributionOrder,["1A","1B","1C","2A","2B","2C","3A","3B","3C"]);
  })
  describe("shuffleDistributionOrder()",function () {
    let nums=[1,2,3];
    let chars=["A","B","C"];
    let board=new Board(nums,chars);
    board.createDistributionOrder();
    let anotherBoard=new Board(nums,chars);
    anotherBoard.createDistributionOrder();
    let originaldDistributionOrder=anotherBoard.distributionOrder;
    board.shuffleDistributionOrder();
    let distributionOrder=board.distributionOrder;
    it("should not change original length of distributionOrder",function () {
      expect(distributionOrder).to.have.lengthOf(9);
    })
    it("should not have exact distributionOrder as before shuffle",function () {
      assert.notSameOrderedMembers(distributionOrder,originaldDistributionOrder);
    })
    it("Board should have all elements",function () {
      assert.sameMembers(distributionOrder,originaldDistributionOrder);
    });
  })
})
