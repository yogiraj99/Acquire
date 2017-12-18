const addCharToNum=function(listOfTiles,number){
  const chars=["A","B","C","D","E","F","G","H","I","J"];
  let charWithNums=chars.map(function(char){
    listOfTiles.push(number+char);
  });
  return listOfTiles;
};
module.exports=addCharToNum;
