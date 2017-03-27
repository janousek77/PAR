'use strict';

var animal = document.getElementsByName('animal')[0];
var age = document.getElementsByName('age')[0];
var form = document.getElementById('submitChoice');

function submitChoice(event){
  event.preventDefault();
  console.log(animal);
  console.log(age);
};
form.addEventListener('submit', submitChoice);
