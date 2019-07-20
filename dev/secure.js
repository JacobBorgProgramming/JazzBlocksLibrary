var d = new Date();
var n = d.getDate();

function passWord() {
var testV = 1;
var pass1 = prompt('Please Enter Your JBP Pin',' ');
while (testV < 3) {
if (!pass1)
history.go(-1);
if (pass1.toLowerCase() == "0000") {
alert('You Got it Right!');
window.open('./devcenter.html');
break;
}
if (pass1.toLowerCase() == "1111") {
alert('You Got it Right!');
window.open('./devcenter.html');
break;
}
testV+=1;
var pass1 =
prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
}
if (pass1.toLowerCase()!="password" & testV ==3)
history.go(-1);
return " ";
}
