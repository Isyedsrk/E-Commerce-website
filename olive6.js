var modal = null

 function pop6() {

   if(modal === null) {
     document.getElementById("box6").style.display = "block";

     modal = true

   } else {

     document.getElementById("box6").style.display = "none";

     modal = null

   }

 }
