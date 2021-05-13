
document.write("Lisa to Bart, \"Knock it off, Bart! Or I'll tell dad!\"<br>\"Eat my shorts!\" Bart responded. ");    



document.write("\"Be who you are and say what you feel,"
+"because those who mind dont\'t matter and those who matter don\'t mind.\""
+"-Dr. Seuss ");

var B=("<br>\concatenated"+"String ");
document.write(B)



var Family = "The Arezzini", Dad = "Jeremiah", Mom = "Hermoine",
    Daughter = "Penny", Son = "Zorro";

document.write(Dad);


var blues = "I have the blues. ";
var blues = blues.fontcolor("blue");
document.write(blues);

document.write(3+3);

function My_First_Function() {                                   //Defining a function and naming it
    var str = "This text is Green!";                             //Deining a variable and gving it a
                                                                //string value
    var result = str.fontcolor("green");                        //using the fontcolor method on
                                                                //str variable
    document.getElementById("Green_Text").innerHTML = result;   //Putting the value
}                                                                //of result into HTML element with "Green_Text id
