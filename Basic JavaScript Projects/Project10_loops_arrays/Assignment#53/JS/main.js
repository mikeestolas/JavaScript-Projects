function constant_function() {
  const musical_instrument = {type:"Guitar", brand:"Fender", color:"black"};
  musical_instrument.color = "blue";
  musical_instrument.price = "$900";
  document.getElementById("constant").innerHTML = " The cost of the " 
  + musical_instrument.type
  + " was " + musical_instrument.price;
}

