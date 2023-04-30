var modal = null

 function pop15() {

   if(modal === null) {
     document.getElementById("box15").style.display = "block";

     modal = true

   } else {

     document.getElementById("box15").style.display = "none";

     modal = null

   }

 }
