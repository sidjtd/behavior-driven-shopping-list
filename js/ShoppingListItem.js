'use strict';

//CLASS
function ShoppingListItem (name, description){
  //Property Names
  this.name = name;
  this.description = description;
  this.is_done = false;

  //Propery Methods
  this.check = function (){
    this.is_done = true;
  };

  this.uncheck = function (){
    this.is_done = false;
  };
      //Render returns URL
  this.render = function (){
    return `<li class="completed_${this.is_done}">
    <span>${this.name}</span>
    <span>${this.description}</span>
    </li><input type="checkbox" class="theCheckBox">`;
  };


}


//You dont need this either...
//module.exports = ShoppingListItem;
