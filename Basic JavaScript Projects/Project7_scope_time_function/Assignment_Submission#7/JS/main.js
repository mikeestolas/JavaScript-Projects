


var time = new Date().getHours(); //Global Variable
function f1() {
  var a = document.getElementById("name").value;//local variable
    
    if (time < 10) {
      console.log(say = "Good morning");
    } else if (time < 20) {
      console.log(say = "Good day");
    } else {
      console.log(say = "Good evening");
    }
    document.getElementById("m1").innerHTML = say + " " + a + " Its nice to see you!";
  }
    



