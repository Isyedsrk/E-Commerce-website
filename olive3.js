var modal = null

 function pop3() {

   if(modal === null) {

     document.getElementById("box3").style.display = "block";

     modal = true

   } else {

     document.getElementById("box3").style.display = "none";

     modal = null

   }

 }
