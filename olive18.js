var modal = null

 function pop18() {

   if(modal === null) {
     document.getElementById("box18").style.display = "block";

     modal = true

   } else {

     document.getElementById("box18").style.display = "none";

     modal = null

   }

 }
