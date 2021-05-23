function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").Value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";

}





    
    
    
    



