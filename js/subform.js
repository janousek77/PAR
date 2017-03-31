'use strice';

console.log('hola');
var info, obj;
info = localStorage.getItem('userinfo');
obj = JSON.parse(info);

document.getElementById('firstname').innerHTML = '  First Name: ' + obj.fname;
document.getElementById('lastname').innerHTML = '  Last Name: ' + obj.lname;
document.getElementById('address').innerHTML = '  Address: ' + obj.address;
document.getElementById('eemail').innerHTML = '  E-mail: ' + obj.email;
document.getElementById('phone').innerHTML = '  Phone: ' + obj.phone;
document.getElementById('catid').innerHTML = '  Animal ID/Name ' + obj.catid;
document.getElementById('contact').innerHTML = '  Best Contact By: ' + obj.contact;
