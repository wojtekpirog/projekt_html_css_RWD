let toggler = document.getElementsByClassName("navbar-toggler")[0];
let navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggler.addEventListener("click", () => {
  navbarLinks.classList.toggle("collapse");
})