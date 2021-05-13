function myfunction() {                             //Defining a function and naming itv
var sentence = "I am learning";                     //Deining a variable and gving it a
var str = "This text is Green!";
var result = str.fontcolor("green");                //using the fontcolor method on      
sentence += "a lot from this book!";
document.getElementById("concatenate").innerHTML = sentence + "<br>" + result;   //Putting the value
                                                               //of result into HTML element with "concatenate id
}                                                              