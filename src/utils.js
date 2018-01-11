const addCharToNum=function(chars,listOfTiles,number){
  let charWithNums=chars.map(function(char){
    listOfTiles.push(number+char);
  });
  return listOfTiles;
};

const generateRandomNumber=function(limit){
  return Math.floor(Math.random()*limit);
};

const swapElementsInList=function(list,index1,index2){
  let first=list[index1];
  let second=list[index2];
  let elementsTemp=[first,second];
  list[index1]=elementsTemp[1];
  list[index2]=elementsTemp[0];
};

exports.addCharToNum = addCharToNum;
exports.generateRandomNumber = generateRandomNumber;
exports.swapElementsInList = swapElementsInList;
