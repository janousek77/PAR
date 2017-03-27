'use strict';

var animal = document.getElementsByName('animal')[0];
var age = document.getElementsByName('age')[0];
var form = document.getElementById('submitChoice');

function submitChoice(event){
  event.preventDefault();
  var animalChoice = animal.options[animal.selectedIndex];
  console.log(animalChoice.value);
  var ageChoice = age.options[age.selectedIndex];
  console.log(ageChoice.value);
  if(animalChoice.value === dog && ageChoice.value === any){
    console.log('true');
    window.location.href = 'dog.html';
  }
};
form.addEventListener('submit', submitChoice);
