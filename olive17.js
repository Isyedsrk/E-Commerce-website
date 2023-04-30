var modal = null

 function pop17() {

   if(modal === null) {
     document.getElementById("box17").style.display = "block";

     modal = true

   } else {

     document.getElementById("box17").style.display = "none";

     modal = null

   }

 }
