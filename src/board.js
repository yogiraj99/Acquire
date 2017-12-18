const Board=function(columns,rows){
  this.columns=columns;
  this.rows=rows;
  this.elements=[];
};
Board.prototype={
  createBoard:function(){
    this.elements.length=this.rows*this.columns;
    this.elements.fill('-');
  },
  upadateBoard:function(updateWith){
    this.elements=updateWith;
    return updateWith;
  }
}
module.exports=Board;
