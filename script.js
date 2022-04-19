const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", function () {
  this.classList.toggle("hamburger-active");
  navbar.classList.toggle("nav-active");
});

// Navbar
const header = document.querySelector(".header");
const toTopBtn = document.querySelector("#to-top");

window.addEventListener("scroll", (e) => {
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTopBtn.classList.remove("invisible");
  } else {
    header.classList.remove("navbar-fixed");
    toTopBtn.classList.add("invisible");
  }
});

// Dark theme
const checkbox = document.querySelector("#toggle");
const html = document.querySelector("html");
const navLinks = document.querySelector(".nav-links-wrapper");
checkbox.addEventListener("click", () => {
  // const hamburgerDisplay = getComputedStyle(hamburger).display;

  // if (hamburgerDisplay != "none") {
  //   navLinks.classList.add("bg-slate-800");
  // }
  // if (html.classList.contains("dark")) {
  //   navLinks.classList.remove("bg-slate-800");
  // }

  html.classList.toggle("dark");
});
