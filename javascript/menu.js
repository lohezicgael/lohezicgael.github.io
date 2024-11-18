
function showResponsiveMenu() {
  var menu = document.getElementById("topnav_responsive_menu");
  var infos = document.querySelectorAll(".info"); // Sélectionne tous les éléments .info
  var icon = document.getElementById("topnav_hamburger_icon");

  // Vérifie si le menu est déjà ouvert
  if (menu.classList.contains("open")) {
      menu.classList.remove("open"); // Ferme le menu
      menu.style.display = "none";
      icon.className = "open";

      // Supprime la classe hidden des éléments .info
      infos.forEach(function(info) {
          info.classList.remove("hidden");
      });
  } else {
      menu.classList.add("open"); // Ouvre le menu
      menu.style.display = "block";
      icon.className = "";


      // Ajoute la classe hidden aux éléments .info
      infos.forEach(function(info) {
          info.classList.add("hidden");
      });
  }
}

