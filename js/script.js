let navbarParent;
let navbar;
let navbarCollapse;
let allNavLinks;
let footerYear;

function main() {
  getElements();
  addListeners();
  handleScroll();
  setFooterYear();
}

function getElements() {
  navbarParent = document.querySelector(".navbar").parentElement;
  navbar = navbarParent.querySelector(".navbar");
  navbarCollapse = navbar.querySelector(".navbar-collapse");
  allNavLinks = navbar.querySelectorAll(".nav-link");
  footerYear = document.querySelector(".footer__year");
}

function addListeners() {
  window.addEventListener("scroll", handleScroll);
  allNavLinks.forEach((navLink) => navLink.addEventListener("click", () => navbarCollapse.classList.remove("show")));
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

function setFooterYear() {
  const fullYear = (new Date).getFullYear();
  footerYear.textContent = fullYear;
}

document.addEventListener("DOMContentLoaded", main);