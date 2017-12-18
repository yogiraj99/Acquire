const Tiles = require('./tiles.js');
const Display = require('./display.js');
const Game = require('./game.js')

let acquireTiles=new Tiles();

const loadGame=function(){
  initialDisplay();
}

const addPlayer=function(playerName){
  game.addPlayer(playerName);
}

const initialDisplay = function () {
  acquireTiles.createTiles();
  display.initialTableDisplay(tilesInTableForm);
  return true;
};
