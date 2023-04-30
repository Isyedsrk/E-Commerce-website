var modal = null

 function pop12() {

   if(modal === null) {
     document.getElementById("box12").style.display = "block";

     modal = true

   } else {

     document.getElementById("box12").style.display = "none";

     modal = null

   }

 }
