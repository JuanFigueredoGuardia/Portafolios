// === VARIABLES GLOBALES ===
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.nav-menu');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');
const header = document.querySelector('.header');

// === MENÚ RESPONSIVO ===
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// === EFECTO SCROLL PARA ACTIVAR LINKS Y HEADER STICKY ===
window.onscroll = () => {
    const top = window.scrollY;

    // Sticky Header
    header.classList.toggle('sticky', top > 100);

    // Active Link Highlight
    sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-menu a[href*="${id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });

    // Cerrar menú al hacer scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// === ANIMACIÓN DE CARGA (OPCIONAL/SUTIL) ===
window.onload = () => {
    document.body.style.opacity = '1';
};

// === SMOOTH SCROLL PARA ANCLAS (NATIVO EN CSS, PERO REFORZADO AQUÍ) ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Ajuste por el header sticky
                behavior: 'smooth'
            });
        }
    });
});