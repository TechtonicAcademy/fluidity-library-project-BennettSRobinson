let menu = document.querySelector(".menu");
let burg = document.querySelector(".navBar__burger");
console.log(burg);
if (burg) {
  console.log("clicked");
  burg.addEventListener("click", toggleMenu);
}

function toggleMenu() {
  if (menu.classList.contains("showMenu")) menu.classList.remove("showMenu");
  else menu.classList.add("showMenu");
}

let menuLinks = document.querySelectorAll(".menu__link");
menuLinks.forEach((links) => {
  links.addEventListener("click", toggleMenu);
});
