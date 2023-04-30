var modal = null

 function pop5() {

   if(modal === null) {

     document.getElementById("box5").style.display = "block";

     modal = true

   } else {

     document.getElementById("box5").style.display = "none";

     modal = null

   }

 }
