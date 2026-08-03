//============================================
//Sticky navbar collapse menu - shared by all 4 pages
//Toggles the mobile dropdown open/closed when the hamburger button is clicked
//============================================

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.querySelector(".main-menu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", function () {
    menu.classList.toggle("is-open");
  });

  //Close the menu after a link is picked, so it doesn't stay open on page load
  var links = menu.querySelectorAll("a");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      menu.classList.remove("is-open");
    });
  }
});
