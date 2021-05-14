function my_dictionary() {              //Declares a function my_dictionary
    var My_Pets = {                     //Declares a variable My_Pets
        dog1:"windy",                   //variable value
        dog2:"ewoks",                   //variable value
        dog3:"dorina",                  //variable value
        dog4:"boo",                     //variable value
        dog5:"eunju",                   //variable value
        dog6:"patch"                    //variable value
    };
    delete My_Pets.dog3                 //Delete statement
    document.getElementById("dictionary").innerHTML=My_Pets.dog3; 
}