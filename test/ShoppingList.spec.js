//The 4 lines below are not necessary because its all done on your index.html

// var ShoppingListItem = require('./../ShoppingListItem.js');
// var ShoppingList = require('./../ShoppingList.js');
// var chai = require('chai');
// chai.should();

var expect = chai.expect;

describe('ShoppingListItem', function(){

  var item;

//beforeEach means...
  beforeEach( function() {
    item = new ShoppingListItem('');
  });

  it('ShoppingListItem should be a class', function(){
    expect(item).to.be.an.instanceOf(ShoppingListItem);
  });
//????

it('should have a property named name', function(){
  expect(item).to.have.a.property('name');
});

it('should have a property named description', function(){
  expect(item).to.have.a.property('description');
});

it('should have a property named is done', function(){
  expect(item).to.have.a.property('is_done');
  expect(item.is_done).to.equal(false);

});

it('should have a method named check', function(){
  expect(item).to.have.a.function('check');

});







// it('invoking the addItem method by passing in anything else', function(){
//   expect(aList.addItem.bind(aList, Number)).to.throw(Error)

//   aList.should.not.contain(addItem(String));
//   aList.should.not.contain(addItem(Boolean));
//   aList.should.not.contain(addItem(Array));
//   aList.should.not.contain(addItem(Function));
//   aList.addItem(ShoppingListItem);
// }

// })







// it('should have a property named items', function(){
//     expect(aList).to.have.a.property('items');
// });

//it('shoudl have a constructor method that initializes cart')
  //expect(ShoppingList.items)/to.be.empty;

//it('should have a method named addItem that accepts a')
  //expect(aList.addItem).to.be.a('function')


// });
//This closes Shopping List item


});