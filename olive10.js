var modal = null

 function pop10() {

   if(modal === null) {
     document.getElementById("box10").style.display = "block";

     modal = true

   } else {

     document.getElementById("box10").style.display = "none";

     modal = null

   }

 }
