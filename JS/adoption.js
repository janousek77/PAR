'use strict'

(function () {
  var form = document.getElementById ('login');

  addEvent(form, 'submit', function(e)  {
    e.preventDefault();
    var elements = this.elements;
    var fname = elements.fname.value;
    var lname = elements.lname.value;
    var address = elements.address.value;
    var email = elements.email.value;
    var phone = phone.value;
    var catid = catid.value;
    var contact = contact.value;

    var myJSON = JSON.stringify(info);
    localStorage.setItem('userInfo', myJSON);

  });
}());
