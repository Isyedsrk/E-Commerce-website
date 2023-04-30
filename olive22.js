var modal = null

 function pop22() {

   if(modal === null) {
     document.getElementById("box22").style.display = "block";

     modal = true

   } else {

     document.getElementById("box22").style.display = "none";

     modal = null

   }

 }
