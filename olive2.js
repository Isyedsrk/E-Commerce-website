var modal = null

 function pop2() {

   if(modal === null) {

     document.getElementById("box2").style.display = "block";

     modal = true

   } else {

     document.getElementById("box2").style.display = "none";

     modal = null

   }

 }
