  function f1() {
    var a = document.getElementById("age").value;
    
  if ( a < 18 ) {
    say = "You are not yet allowed to vote";
    
  } else {
    say = "Please procedd to the voting precint..."
  }
  document.getElementById("m1").innerHTML = say;
}  
    



