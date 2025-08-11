// === VARIABLES GLOBALES ===
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-menu');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-menu a');
let header = document.querySelector('header');

let homeDetail = document.querySelector('.home-detail');
let homeImgBox = document.querySelector('.home-img .img-box');
let sobreMiSection = document.querySelector('.sobre-mi');
let sobreMiContent = document.querySelector('.sobre-mi-content');
let servicesContainer = document.querySelector('.services-container');
let contactSection = document.querySelector('.contact');
let headingElements = document.querySelectorAll('.heading');

// === MENÚ RESPONSIVO ===
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// === EFECTO SCROLL PARA ACTIVAR LINKS ===
window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector(`.nav-menu a[href*="${id}"]`).classList.add('active');
        }
    });

    // Cerrar menú al hacer scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// === ANIMACIÓN DE CARGA ===
window.onload = () => {
    // Animar header
    setTimeout(() => {
        if (header) {
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }
    }, 100);

    // Animar sección Home
    setTimeout(() => {
        if (homeDetail) {
            homeDetail.style.opacity = '1';
            homeDetail.style.transform = 'translateX(0)';
        }
        if (homeImgBox) {
            homeImgBox.style.opacity = '1';
            homeImgBox.style.transform = 'translateX(0)';
        }
    }, 300);

    // Aparición progresiva de títulos
    setTimeout(() => {
        headingElements.forEach((heading, index) => {
            setTimeout(() => {
                heading.style.opacity = '1';
                heading.style.transform = 'scale(1)';
            }, 200 + index * 150);
        });
    }, 500);

    // Animar sección Sobre Mí
    setTimeout(() => {
        if (sobreMiSection) {
            sobreMiSection.style.opacity = '1';
            sobreMiSection.style.transform = 'translateY(0)';
        }
        if (sobreMiContent) {
            sobreMiContent.style.opacity = '1';
            sobreMiContent.style.transform = 'translateY(0)';
        }
    }, 700);

    // Animar sección Servicios
    setTimeout(() => {
        if (servicesContainer) {
            servicesContainer.style.opacity = '1';
            servicesContainer.style.transform = 'scale(1)';
            const serviceBoxes = document.querySelectorAll('.services-container .services-box');
            serviceBoxes.forEach((box, index) => {
                setTimeout(() => {
                    box.style.opacity = '1';
                    box.style.transform = 'translateY(0)';
                }, 200 + index * 100);
            });
        }
    }, 900);

    // Animar sección Contacto
    setTimeout(() => {
        if (contactSection) {
            contactSection.style.opacity = '1';
            contactSection.style.transform = 'translateY(0)';
        }
    }, 1100);
};

// === EFECTO SCROLL-REVEAL ===
const revealElements = document.querySelectorAll('section');

function revealOnScroll() {
    let windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        let elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
