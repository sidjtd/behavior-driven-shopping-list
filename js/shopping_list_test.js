'use strict';

function ShoppingListItem (name, description){
  this.name = name;
  this.description = description;
  this.is_done = false;

  this.check = function (){
    this.is_done = true;
  };
  this.uncheck = function (){
    this.is_done = false;
  };
  this.render = function (){
    return `<li class="completed_[is_done]">\
    <span>[name]</span> <span>[description]</span>\
    </li>`;
  };
}


function ShoppingList (items){
  this.items = [];

  this.freshCart = function (){
    this.items = [];
  };

  this.addItem = function(name){

  };
}