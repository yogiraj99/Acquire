const swapElementsInList=function(list,index1,index2){
  let first=list[index1];
  let second=list[index2];
  let elementsTemp=[first,second];
  list[index1]=elementsTemp[1];
  list[index2]=elementsTemp[0];
};
module.exports=swapElementsInList;
