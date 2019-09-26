$(document).ready(function() {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
  $("#a").hover(function() {
    $("#one").slideToggle("slow");
  });
  $("#b").hover(function() {
    $("#two").slideToggle("slow");
  });
  $("#c").hover(function() {
    $("#three").slideToggle("slow");
  });
  $("#d").hover(function() {
    $("#four").slideToggle("slow");
  });
  $("#e").hover(function() {
    $("#five").slideToggle("slow");
  });
  $("#f").hover(function() {
    $("#six").slideToggle("slow");
  });
  // history of the banana button
  $("#grid").hide();
  $(".button").click(function() {
    $("#grid").toggle();
  });

});
