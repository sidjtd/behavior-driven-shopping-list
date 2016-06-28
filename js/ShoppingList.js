//Help with ES6 script
'use strict';

//CLASS
function ShoppingList(){
  //Property Names
  this.items = [];

  //Property Methods
  this.freshCart = function (){
      this.items = [];
  };
  this.addItem = function(name){
      if(name instanceof ShoppingListItem){
        this.items.push(name);
      }else{
        throw new Error("What the fuck");
        console.log("What are you trying to pull, buddy?");
      }
  };

  this.removeItem = function(name){
      if(){

      }else{

      }
  };


  this.render = function () {
    var theString = '';
    for(var i = 0; i<this.items.length; i++){

    }

  };

}

//YOU DONT NEED THIS! (since its on index!)
//module.exports = ShoppingList;
