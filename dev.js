var gib = "gib"
//document.getElementById("jsC1").innerHTML = "jacobborgprogramming";
if (navigator.cookieEnabled === false){
  console.log('Cookies are disabled')
  document.getElementById("jsC1").innerHTML = "Your cookies are disabled.";
  document.getElementById("jsC2").innerHTML = "You can change this in your browser's settings.";
}
if (navigator.cookieEnabled === true){
  document.getElementById("jsC1").innerHTML = "Your cookies are enabled.";
  document.getElementById("jsC2").innerHTML = "You can change this in your browser's settings.";
  console.log('Cookies are enabled')
}
console.log('JacobBorgProgramming 2019: Cookie Checker')
/*
var element = document.createElement('h1');
element.textContent = "Hello, World";
document.body.appendChild(element);
*/
