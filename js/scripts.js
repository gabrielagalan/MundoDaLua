// DOM

// 1 - SELECIONA

// 2 - EVENTO

// 3 - EXECUTA

// Seleção de elementos
const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

const desktopLinks = document.querySelectorAll("#navbar a");
const mobileLinks = document.querySelectorAll("#mobile-navbar a");
const allLinks = [...desktopLinks, ...mobileLinks];
debugger
const slides = document.querySelectorAll(".banner");
const pontos = document.querySelectorAll(".ponto");
let slideIndex = 0;


// Funções
function smoothScroll(e) {
    e.preventDefault();

    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth",
    });

    setTimeout(() => {
        if(menu.classList.contains("menu-active")) {
            menu.classList.remove("menu-active");
        }
    }, 500);
}

function showSlides() {
    for(let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("ativo");
        pontos[i].classList.remove("ativo");
    }

    slideIndex++

    if(slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].classList.add("ativo");
    pontos[slideIndex - 1].classList.add("ativo");

    setTimeout(showSlides, 3000);
}

// Eventos
[menuBtn, closeMenuBtn].forEach((btn) => {
    btn.addEventListener("click", (e) => {
        menu.classList.toggle("menu-active");
    });
});

allLinks.forEach((link) => {

    link.addEventListener("click", smoothScroll);
});

// Inicializacao

showSlides()