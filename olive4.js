var modal = null

 function pop4() {

   if(modal === null) {

     document.getElementById("box4").style.display = "block";

     modal = true

   } else {

     document.getElementById("box4").style.display = "none";

     modal = null

   }

 }
