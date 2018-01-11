const Tile = require('../src/tile.js');
const assert = require('chai').assert;

describe("Tile",function () {
  describe("#toHtml()",function () {
    it("should give html form of it's own",function () {
      let tileId="first_tile";
      let xCoord=5;
      let yCoord=2;
      let tile=new Tile(tileId,xCoord,yCoord);
      let tileAsHtml=tile.toHtml();
      let expectd="<td id='first_tile' class=undefined>first_tile</td>\n"
      assert.deepEqual(tileAsHtml,expectd)
    })
  })
  describe("#getNeighbourCoords()",function () {
    it("should give neighbourCoords based on own coords",function () {
      let tileId="first_tile";
      let xCoord=5;
      let yCoord=2;
      let tile=new Tile(tileId,xCoord,yCoord);
      let neighbourCoords=tile.getNeighbourCoords();
      assert.deepEqual(neighbourCoords,[[5,1],[4,2],[5,3],[6,2]]);
    })
  })
})
