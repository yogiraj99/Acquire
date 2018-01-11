const ManageHotels = require('../src/manageHotels.js');
const Hotel = require('../src/hotel.js');
const assert = require('chai').assert;

describe("ManageHotels",function () {
  describe("addHotel()",function () {
    it("should add hotel in own data",function () {
      let hotelName="hotelTaj";
      let manageHotels=new ManageHotels();
      manageHotels.addHotel(hotelName);
      assert.instanceOf(manageHotels.hotels[hotelName],Hotel);
    })
  })
})
