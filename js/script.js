let navbarParent;
let navbar;

function main() {
  getElements();
  addListeners();
}

function getElements() {
  navbarParent = document.querySelector(".navbar").parentElement;
  navbar = navbarParent.querySelector(".navbar");
}

function addListeners() {
  window.addEventListener("scroll", handleScroll);
}

function handleScroll() {
  if (window.scrollY >= 300) {
    navbarParent.classList.add("shadow-bg");
    navbar.classList.add("no-padding");
  } else {
    navbarParent.classList.remove("shadow-bg");
    navbar.classList.remove("no-padding");
  }
}

document.addEventListener("DOMContentLoaded", main);