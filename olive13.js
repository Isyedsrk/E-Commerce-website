var modal = null

 function pop13() {

   if(modal === null) {
     document.getElementById("box13").style.display = "block";

     modal = true

   } else {

     document.getElementById("box13").style.display = "none";

     modal = null

   }

 }
