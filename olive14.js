var modal = null

 function pop14() {

   if(modal === null) {
     document.getElementById("box14").style.display = "block";

     modal = true

   } else {

     document.getElementById("box14").style.display = "none";

     modal = null

   }

 }
