var i = 0;
var j = 0;
var k = 0;
var txt = "Benvenuto!";
var txt2 = "A cosa";
var txt3 = "vuoi giocare?";

var h2 = document.getElementById("h2");
var h31 = document.getElementsByTagName("span")[0];
var h32 = document.getElementsByTagName("span")[1];

function typeWriter() {
  if (i < txt.length) {
    h2.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  } else if (i == txt.length) {
    i++;
    setTimeout(typeWriter, 1000);
  } else if (i > txt.length && j < txt2.length) {
    h31.innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWriter, 100);
  } else if (j >= txt2.length && k < txt3.length) {
    h32.innerHTML += txt3.charAt(k);
    k++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();
