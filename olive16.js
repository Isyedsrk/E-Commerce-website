var modal = null

 function pop16() {

   if(modal === null) {
     document.getElementById("box16").style.display = "block";

     modal = true

   } else {

     document.getElementById("box16").style.display = "none";

     modal = null

   }

 }
