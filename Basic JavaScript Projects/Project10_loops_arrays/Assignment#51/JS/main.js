var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var y;
function for_loop() {
  for (y = 0; y < instruments.length; y++); {
  content += instruments[y] + "<br>";
}
  document.getElementById("list_of_instruments").innerHTML = content;

}




