var d = new Date();
var n = d.getDate();

var pinGen = Math.floor(Math.random() * 6);
var p1 = Math.floor(Math.random() * 9);
var p2 = Math.floor(Math.random() * 9);
var p3 = Math.floor(Math.random() * 9);
var p4 = Math.floor(Math.random() * 9);
var pin = p1+p2+p3+p4;
document.getElementById("pin").innerHTML = pin;
function patternShow(){
   document.getElementById("iframe").src = "./dev/pattern"+pinGen+".jpg";
}
function screenScan(){
  if (screen.availHeight() < 0)
  window.open('./devlogin2.html');
  break;
}

function passWord2() {
  var testV = 1;
  var pass1 = prompt('Please Enter the pin',' ');

while (testV < 3) {
if (!pass1)
history.go(-1);


if (pass1.toLowerCase() == "blue purple yellow") {
alert('Verified:{blue purple yellow}');
window.open('./devcenter.html');
break;
}
if (pass1.toLowerCase() == "yellow blue purple") {
alert('Verified:{yellow blue purple}');
window.open('./devcenter.html');
break;
}
if (pass1.toLowerCase() == "purple yellow blue") {
alert('Verified:{purple yellow blue}');
window.open('./devcenter.html');
break;
}
if (pass1.toLowerCase() == "triangle square triangle") {
alert('Verified:{triangle square triangle}');
window.open('./devcenter.html');
break;
}
if (pass1.toLowerCase() == "square circle triangle") {
alert('Verified:{square circle triangle}');
window.open('./devcenter.html');
break;
}
if (pass1.toLowerCase() == "circle triangle square") {
alert('Verified:{triangle square triangle}');
window.open('./devcenter.html');
break;
}
if (pass1.toLowerCase() == "blue purple green") {
alert('Verified:{blue purple green}');
window.open('./devcenter.html');
break;
}
if (pass1.toLowerCase() == "blue green purple") {
alert('Verified:{blue green purple}');
window.open('./devcenter.html');
break;
}
if (pass1.toLowerCase() == "purple blue green") {
alert('Verified:{purple blue green}');
window.open('./devcenter.html');
break;
}
if (pass1.toLowerCase() == "purple green blue") {
alert('Verified:{purple green blue}');
window.open('./devcenter.html');
break;
}
if (pass1.toLowerCase() == "green purple blue") {
alert('Verified:{green purple blue}');
window.open('./devcenter.html');
break;
}
if (pass1.toLowerCase() == "green blue purple") {
alert('Verified:{green blue purple}');
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
