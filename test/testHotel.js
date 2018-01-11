const Hotel = require('../src/hotel.js');
const assert = require('chai').assert;

describe("Hotel",function () {
  describe("isActive()",function () {
    it("should give false initially",function () {
      let hotel=new Hotel("HotelTaj");
      assert.isFalse(hotel.isActive());
    })
    it("should give true after making Active",function () {
      let hotel=new Hotel("HotelParadise");
      hotel.makeActive();
      assert.isTrue(hotel.isActive());
    })
    it("should give false after making inActive again",function () {
      let hotel=new Hotel("HotelParadise");
      hotel.makeActive();
      assert.isTrue(hotel.isActive());
      hotel.makeInactive();
      assert.isFalse(hotel.isActive());
    })
  })
})
