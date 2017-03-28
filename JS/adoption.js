var adopform = []

(function () {
  var form = document.getElementById ('login');

  addEvent(form, 'submit', function(e)  {
    e.preventDefault();
    var elements = this.elements;
    var fname = elements.fname.value;
    var lname = elements.lname.value;
    var address = elements.address.value;
    var email = elements.email.value;
    var phone = elements.phone.value;
    var catid = elements.catid.value;
    var contact = elements.fname.value;
    var msg = fname + lname;
    document.getElementbyId('hola').textContent = msg;

    var myObj = 
    var myJSON = JSON.stringify(myObj);
    //window.location = "demo_json.php?x=" + myJSON;
  });
}());
