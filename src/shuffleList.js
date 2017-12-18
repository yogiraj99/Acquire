const swapElementsInList = require('./swapElementsInList.js');
const generateRandomNumberBelow=function(limit){
  return Math.floor(Math.random()*limit);
};

const shuffleList=function(list,shuffleCount){
  let limit=list.length;
  for(let count=0;count<shuffleCount;count++){
    let firstPosition=generateRandomNumberBelow(limit);
    let secondPosition=generateRandomNumberBelow(limit);
    swapElementsInList(list,firstPosition,secondPosition)
  }
  return true;
};

module.exports = shuffleList;
