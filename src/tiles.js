const addCharToNum = require('./addCharToNum.js');

const Tiles=function(){
  this.numbers=['01','02','03','04','05','06','07','08','09','10','11','12'];
}

Tiles.prototype.createTiles = function () {
  return numbers.reduce(addCharToNum,[]);
};

module.exports = Tiles;
