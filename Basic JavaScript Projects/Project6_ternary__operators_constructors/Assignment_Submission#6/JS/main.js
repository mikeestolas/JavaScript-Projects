function family(first, last, age, eye) {   // Constructor function for family objects
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyecolor = eye;
}
var myfather = new family("Salvador", "Estolas", 64, "black"); //create a family objects
var mymother = new family("Elsa", "Payba", 67, "black");

function p1() {
document.getElementById("m1").innerHTML = "My Father is "   //display
+ myfather.age + ".My Mother is "+ mymother.age + ".";
}



    
    
    
    



