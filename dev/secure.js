var d = new Date();
var n = d.getDate();

var pinGen = Math.floor(Math.random() * 6);
var p1 = Math.floor(Math.random() * 9);
var p2 = Math.floor(Math.random() * 9);
var p3 = Math.floor(Math.random() * 9);
var p4 = Math.floor(Math.random() * 9);
var pin = p1+p2+p3+p4;
document.getElementById("pin").innerHTML = pin;
function pinShow(){
   document.getElementById("iframe").src = "./dev/pin"+pinGen+".png";
}


function passWord() {

var testV = 1;
var pass1 = prompt('Please Enter the pin that is on the new tab',' ');
while (testV < 3) {
if (!pass1)
history.go(-1);
if (pass1.toLowerCase() == '0074') {
alert('Verified:{0074}');
window.open('./devcenter.html');
break;
}
if (pass1.toLowerCase() == "1969") {
alert('Verified:{1969}');
window.open('./devcenter.html');
break;
}
if (pass1.toLowerCase() == "0924") {
alert('Verified:{0924}');
window.open('./devcenter.html');
break;
}
if (pass1.toLowerCase() == "9112") {
alert('Verified:{9112}');
window.open('./devcenter.html');
break;
}
if (pass1.toLowerCase() == "0537") {
alert('Verified:{0537}');
window.open('./devcenter.html');
break;
}
if (pass1.toLowerCase() == "4520") {
alert('Verified:{4520}');
window.open('./devcenter.html');
break;
}
testV+=1;
var pass1 =
prompt('Verification Failed -','Password');

window.open('./index.html');
}
if (pass1.toLowerCase()!="password" & testV ==3)
history.go(-1);
return " ";
}
