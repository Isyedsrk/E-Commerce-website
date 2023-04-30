var modal = null

 function pop19() {

   if(modal === null) {
     document.getElementById("box19").style.display = "block";

     modal = true

   } else {

     document.getElementById("box19").style.display = "none";

     modal = null

   }

 }
