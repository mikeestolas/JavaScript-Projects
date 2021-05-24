function f1() {
  var p1 = "I have";
  var p2 = "made this";
  var p3 = "into a complete";
  var p4 = "sentence.";
  var whole_sentence = p1.concat(p2, p3, p4);
  document.getElementById("m1").innerHTML=whole_sentence;
}

function f2() {
  var Sentence = "All work and no play makes Johnny a dull boy.";
  var Section = Sentence.slice(27,33);
  document.getElementById("m2").innerHTML= Section;
}

function f3() {
  var x = 182;

  document.getElementById("m3").innerHTML= x.toString();
}

function f4() {
  var x = 12938.3012987376112;

  document.getElementById("m4").innerHTML= x.toPrecision(10);
}
    


    



