const addCharToNum = require('./utils.js').addCharToNum;
const generateRandomNumber = require('./utils.js').generateRandomNumber;
const swapElementsInList = require('./utils.js').swapElementsInList;

const Board=function(numbers,chars){
  this.numbers=numbers
  this.chars=chars;
  this.distributionOrder=[];
  this.tiles={};
};

Board.prototype.createDistributionOrder = function () {
  let appendChars=addCharToNum.bind(null,this.chars);
  this.distributionOrder=this.numbers.reduce(appendChars,[]);
};

Board.prototype.shuffleDistributionOrder=function(){
  let limit=this.distributionOrder.length;
  for(let count=0;count<limit*1.5;count++){
    let firstPosition=generateRandomNumber(limit);
    let secondPosition=generateRandomNumber(limit);
    swapElementsInList(this.distributionOrder,firstPosition,secondPosition)
  }
};


module.exports = Board;
