var modal = null

 function pop20() {

   if(modal === null) {
     document.getElementById("box20").style.display = "block";

     modal = true

   } else {

     document.getElementById("box20").style.display = "none";

     modal = null

   }

 }
