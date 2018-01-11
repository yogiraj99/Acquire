const Tile = function (tileId,xCoord,yCoord) {
  this.id=tileId;
  this.xCoord=xCoord;
  this.yCoord=yCoord;
  this.belongsTo=undefined;
}

Tile.prototype.getNeighbourCoords = function () {
  return [[this.xCoord,this.yCoord-1],[this.xCoord-1,this.yCoord],
        [this.xCoord,this.yCoord+1],[this.xCoord+1,this.yCoord]];
}

Tile.prototype.toHtml = function () {
  return `<td id='${this.id}' class=${this.belongsTo}>${this.id}</td>\n`;
}
module.exports = Tile;
