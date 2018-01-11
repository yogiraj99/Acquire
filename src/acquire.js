const Board = require('./tiles.js');
const Display = require('./display.js');
const Game = require('./game.js')

let numbers=[1,2,3,4,5,6,7,8,9,10,11,12];
let chars=["A","B","C","D","E","F","G","H","I","J"];

let acquireBoard=new Board(numbers,chars);

const loadGame=function(){
  acquireBoard.createBoard();
  initialDisplay();
}

const addPlayer=function(playerName){
  game.addPlayer(playerName);
}

const initialDisplay = function () {
  showInitialBoard(acquireBoard.toHtml());
};

window.onload=loadGame;
