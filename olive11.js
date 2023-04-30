var modal = null

 function pop11() {

   if(modal === null) {
     document.getElementById("box11").style.display = "block";

     modal = true

   } else {

     document.getElementById("box11").style.display = "none";

     modal = null

   }

 }
