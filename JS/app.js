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
  if(animalChoice.value === 'any' && ageChoice.value === 'any'){
    window.location.href = 'all_pets.html';
  }
  else if(animalChoice.value === 'dog' && ageChoice.value === 'any'){
    window.location.href = 'dog.html';
  }
  else if(animalChoice.value === 'dog' && ageChoice.value === 'young'){
    window.location.href = 'puppy.html';
  }
  else if(animalChoice.value === 'dog' && ageChoice.value === 'adult'){
    window.location.href = 'adult_dog.html';
  }
  else if(animalChoice.value === 'dog' && ageChoice.value === 'old'){
    window.location.href = 'elderly_dog.html';
  }
};
form.addEventListener('submit', submitChoice);
