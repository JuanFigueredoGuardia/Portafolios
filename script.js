let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('nav');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('header');
let homeDetail = document.querySelector('.home-detail');
let homeImgBox = document.querySelector('.home-img .img-box');
let sobreMiSection = document.querySelector('.sobre-mi');
let sobreMiImg = document.querySelector('.sobre-mi-img');
let sobreMiContent = document.querySelector('.sobre-mi-content');
let servicesContainer = document.querySelector('.services-container');
let contactSection = document.querySelector('.contact');
let headingElements = document.querySelectorAll('.heading');
let homeDetailBtnSci = document.querySelector('.home-detail .btn-sci');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Animación de carga (rompecabezas) con JavaScript
window.onload = () => {
    // Animar el header
    setTimeout(() => {
        if (header) {
            header.style.top = '0';
            header.style.opacity = '1';
        }
    }, 100);

    // Animar la sección Home
    setTimeout(() => {
        if (sections[0]) {
            sections[0].style.opacity = '1';
            sections[0].style.transform = 'translateY(0) scale(1)';
        }
        if (homeDetail) {
            homeDetail.style.opacity = '1';
            homeDetail.style.transform = 'translateX(0)';
        }
        if (homeImgBox) {
            homeImgBox.style.opacity = '1';
            homeImgBox.style.transform = 'translateX(0)';
        }
    }, 300);

    setTimeout(() => {
        headingElements.forEach((heading, index) => {
            setTimeout(() => {
                heading.style.opacity = '1';
                heading.style.transform = 'scale(1)';
            }, 200 + index * 150);
        });
        if (homeDetailBtnSci) {
            homeDetailBtnSci.style.opacity = '1';
            homeDetailBtnSci.style.transform = 'translateY(0)';
        }
    }, 500);

    // Animar la sección Sobre Mí
    setTimeout(() => {
        if (sobreMiSection) {
            sobreMiSection.style.opacity = '1';
            sobreMiSection.style.transform = 'translateY(0) scale(1)';
        }
        if (sobreMiImg) {
            sobreMiImg.style.opacity = '1';
            sobreMiImg.style.transform = 'scale(1)';
        }
        if (sobreMiContent) {
            sobreMiContent.style.opacity = '1';
            sobreMiContent.style.transform = 'translateX(0)';
        }
    }, 700);

    // Animar la sección Services
    setTimeout(() => {
        if (sections[2]) { // Ahora 'services' es la tercera sección
            sections[2].style.opacity = '1';
            sections[2].style.transform = 'translateY(0) scale(1)';
        }
        if (servicesContainer) {
            servicesContainer.style.opacity = '1';
            servicesContainer.style.transform = 'scale(1)';
            const serviceBoxes = document.querySelectorAll('.services-container .services-box');
            serviceBoxes.forEach((box, index) => {
                setTimeout(() => {
                    box.style.opacity = '1';
                    box.style.transform = 'translateY(0)';
                }, 200 + index * 100); // Ajusté el retraso para que sea más rápido
            });
        }
    }, 900);

    // Animar la sección Contact
    setTimeout(() => {
        if (sections[3] && contactSection) { // Ahora 'contact' es la cuarta sección
            sections[3].style.opacity = '1';
            sections[3].style.transform = 'translateY(0) scale(1)';
            contactSection.style.opacity = '1';
            contactSection.style.transform = 'translateY(0) scale(1)';
        }
    }, 1100);
};