'use strict';

var elStoreForm = document.getElementById('login');
function submitButton(event) {
  event.preventDefault();
  var elements = this.elements;
  var user = {
    fname : elements.fname.value,
    lname : elements.lname.value,
    address : elements.address.value,
    email : elements.email.value,
    phone : elements.phone.value,
    catid : elements.catid.value,
    contact : elements.contact.value
  };
  var myJSON = JSON.stringify(user);
  localStorage.setItem('userinfo', myJSON);
  location.replace('subform.html');
};

elStoreForm.addEventListener('submit',submitButton);
