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
//---------------------------------------------------------------------------



/*
if (window.location.pathname === '/like.html') { 
  // Obtener la lista de géneros original
const genresList = document.querySelector('.genres-list genres-list--original');

// Crear una copia de la lista original para simular el movimiento infinito
const genresListCloned = genresList.cloneNode(true);
genresListCloned.classList.add('genres-list genres-list--cloned');
genresListContainer.appendChild(genresListCloned);

// Iniciar el desplazamiento cada cierto tiempo
let scrollInterval = setInterval(scrollGenres, 20);

// Detener el desplazamiento al pasar el mouse sobre el contenedor
genresListContainer.addEventListener('mouseenter', () => {
  clearInterval(scrollInterval);
});

// Reanudar el desplazamiento al quitar el mouse del contenedor
genresListContainer.addEventListener('mouseleave', () => {
  scrollInterval = setInterval(scrollGenres, 20);
});

function scrollGenres() {
  // Obtener el ancho total de la lista original
  const genresListWidth = genresList.offsetWidth;
  
  // Obtener el ancho total de la lista clonada
  const genresListClonedWidth = genresListCloned.offsetWidth;

  // Mover la lista clonada hacia la izquierda
  genresListCloned.style.transform = `translateX(-${genresListClonedWidth}px)`;

  // Volver a empezar el desplazamiento cuando la lista clonada se haya movido completamente hacia la izquierda
  if (Math.abs(genresListClonedWidth) >= genresListWidth) {
    genresListCloned.style.transform = 'translateX(0)';
  }
}

}  **/
 
//*
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
ScrollReveal().reveal(".movie__item", { delay: 250 });
ScrollReveal().reveal(".list-music", { delay: 150 });
ScrollReveal().reveal(".footer", { delay: 250 });
