const navbar = document.querySelector(".navbar");
const homebg = document.querySelector(".home__background");
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-link");
const menu = document.querySelector(".navbar-collapse");
const config = {
  rootMargin: "0px",
  threshold: [0.6, 0.9],
};
links.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});

$(function () {
  $('body').scrollspy({ target: '#navbarNav', offset: 40 });
});


ScrollReveal().reveal(".navbar", { delay: 250 });
ScrollReveal().reveal(".home__profile", { delay: 350 });
ScrollReveal().reveal(".home__title--primary", { delay: 350 });
ScrollReveal().reveal(".home__title", { delay: 450 });
ScrollReveal().reveal(".home__title--secondary", { delay: 550 });
ScrollReveal().reveal(".section__title", { delay: 250 });
ScrollReveal().reveal(".section__subtitle", { delay: 350 });
ScrollReveal().reveal(".about__description", { delay: 350 });
ScrollReveal().reveal(".about__summary", { delay: 450 });
ScrollReveal().reveal(".button--cta", { delay: 550 });
ScrollReveal().reveal(".skill__title", { delay: 450 });
ScrollReveal().reveal(".skill__item", { delay: 450 });
ScrollReveal().reveal(".contact__item", { delay: 250 });
ScrollReveal().reveal(".footer", { delay: 250 });
