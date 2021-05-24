


var time = new Date().getHours(); //Global Variable
function f1() {
  var a = document.getElementById("name").value;//local variable
    
    if (time < 10) {
      console.log(say = "Good morning");//console.log
    } else if (time < 20) {
      console.log(say = "Good day");//console.log
    } else {
      console.log(say = "Good evening");//console.log
    }
    document.getElementById("m1").innerHTML = say + " " 
    + a + " Its nice to see you!"; //display
  }
    



