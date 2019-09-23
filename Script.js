$(document).ready(function(){
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
<<<<<<< HEAD

=======
>>>>>>> 01f8cf5c7382a18efa6fef51922114954690ff9d
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
<<<<<<< HEAD
   //  if (panel.style.display === "block") {
   //   panel.style.display = "none";
   // } else {
   //   panel.style.display = "block";
   // }
=======
>>>>>>> 01f8cf5c7382a18efa6fef51922114954690ff9d
  });
}
});
$("#a").hover(function(){
    $("#one").slideToggle("slow");
  });
