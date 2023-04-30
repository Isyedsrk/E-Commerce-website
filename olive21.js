var modal = null

 function pop21() {

   if(modal === null) {
     document.getElementById("box21").style.display = "block";

     modal = true

   } else {

     document.getElementById("box21").style.display = "none";

     modal = null

   }

 }
