function f1() {
  var text = "";
var i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("m1").innerHTML = text;
}

function f2() {
  var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("m2").innerHTML = text;
}

function f3() {
  var cars = new Array("Saab", "Volvo", "BMW");
document.getElementById("m3").innerHTML = cars;
}

function f4() {
  var  x = 10;
// Here x is 10
{  
  let x = 2;
  // Here x is 2
}
// Here x is 10
document.getElementById("m4").innerHTML = x;
}


