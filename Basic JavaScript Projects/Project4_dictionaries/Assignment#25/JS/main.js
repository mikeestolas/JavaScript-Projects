function my_dictionary() {
    var My_Pets = {
        dog1:"windy",
        dog2:"ewoks",
        dog3:"dorina",
        dog4:"boo",
        dog5:"eunju",
        dog6:"patch"
        
    };
    delete My_Pets.dog3
    document.getElementById("dictionary").innerHTML=My_Pets.dog3;
}