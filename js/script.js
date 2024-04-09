function Display(Volume){
  document.getElementById("Output").innerHTML = "Volume: " + Volume; 
}
function Calculate(){
  let radius = document.getElementById("radius").value;
  let volume = (4/3) * (Math.PI * radius ** 3);
  Display(volume)
}