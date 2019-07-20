
function query() {
var testV = 1;
var pass1 = prompt('Please enter a valid command:',' ');
while (testV < 3) {
if (!pass1)
history.go(-1);
if (pass1.toLowerCase() == "drs") {
alert('DRS: Digital Resposne System');
break;
}
if (pass1.toLowerCase() == "1 + 1") {
alert(1 + 1);
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
