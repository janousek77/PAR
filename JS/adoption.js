'use strict';

var elStoreForm = document.getElementById('login');
function submitButton(event) {
  event.preventDefault();
  var elements = this.elements;
  var user = {
    fname : elements.fname.value,
    lname : elements.lname.value,
    address : elements.address.value,
    email : elements.email.value
  };
  var myJSON = JSON.stringify(user);
  localStorage.setItem('userInfo', myJSON);
  location.replace('subform.html');
};

elStoreForm.addEventListener('submit',submitButton);
