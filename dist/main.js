// Select DOM Items
const menuBtn = document.querySelector(".hamburger-btn");
const menu = document.querySelector(".menu");

// Set initial state of the menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("hamburger-btn--close");
    menu.classList.add("menu--show");

    // Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("hamburger-btn--close");
    menu.classList.remove("menu--show");

    // Set menu state
    showMenu = false;
  }
}
