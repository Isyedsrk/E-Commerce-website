var modal = null

 function pop7() {

   if(modal === null) {
     document.getElementById("box7").style.display = "block";

     modal = true

   } else {

     document.getElementById("box7").style.display = "none";

     modal = null

   }

 }
