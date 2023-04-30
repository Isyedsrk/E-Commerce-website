var modal = null

 function pop9() {

   if(modal === null) {
     document.getElementById("box9").style.display = "block";

     modal = true

   } else {

     document.getElementById("box9").style.display = "none";

     modal = null

   }

 }
