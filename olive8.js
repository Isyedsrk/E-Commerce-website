var modal = null

 function pop8() {

   if(modal === null) {
     document.getElementById("box8").style.display = "block";

     modal = true

   } else {

     document.getElementById("box8").style.display = "none";

     modal = null

   }

 }
