const shuffleList = require('../src/shuffleList.js');
const assert = require('assert');
let test={}

test['shuffleList should change position of element without and should list have all elements']=function(){
  let list=[1,2,3,4,5];
  let duplicateList=[1,2,3,4,5];
  let shuffledList=shuffleList(list,10);
  assert.equal(list.length,5);
  assert.ok(duplicateList.every(function(element){
    return list.includes(element);
  }));
}

exports.test = test;
