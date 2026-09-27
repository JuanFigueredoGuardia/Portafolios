// script.js - Lógica interactiva, animaciones y filtrado para Juan Figueredo Guardia

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar AOS (Animate On Scroll) con verificación segura
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 750,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
            once: true,
            offset: 50,
            delay: 50,
        });
    }

    // 2. Iniciar componentes
    initNavigation();
    initTypingEffect();
    initTechStackSection();
    initSmoothScroll();
});

// === 1. NAVEGACIÓN Y MENÚ RESPONSIVO ===
function initNavigation() {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');
    const allNavLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('section');

    let overlay = document.querySelector('.nav-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);
    }

    const toggleMenu = () => {
        const isActive = navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x');
        if (header) header.classList.toggle('menu-open', isActive);
        overlay.classList.toggle('active', isActive);
        document.body.style.overflow = isActive ? 'hidden' : '';
    };

    const closeMenu = () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
        if (header) header.classList.remove('menu-open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMenu);
    }

    overlay.addEventListener('click', closeMenu);

    // Cerrar al pulsar Escape
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navbar.classList.contains('active')) {
            closeMenu();
        }
    });

    // Cerrar al redimensionar a pantalla grande
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991 && navbar.classList.contains('active')) {
            closeMenu();
        }
    });

    // Scroll Spy & Sticky Header
    window.addEventListener('scroll', () => {
        const top = window.scrollY;

        if (header) {
            header.classList.toggle('sticky', top > 50);
        }

        sections.forEach(sec => {
            const offset = sec.offsetTop - 160;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                allNavLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-menu a[href*="${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }, { passive: true });

    allNavLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

// === 2. EFECTO TYPING TEXT MODERNO Y CONTINUO ===
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const phrases = [
        'Desarrollador Web Full-Stack',
        'Especialista en Automatización & IA',
        'Desarrollo de Hardware & IoT',
        'Creador de Soluciones Digitales'
    ];

    let phraseIndex = 0;
    let charIndex = phrases[0].length; // Inicia con la primera frase completa
    let isDeleting = true;
    let typingSpeed = 2200; // Pausa de 2.2s para leer la primera frase

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 40;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 85;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pausa con la frase completa en pantalla
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 350; // Breve pausa antes de escribir la siguiente frase
        }

        setTimeout(type, typingSpeed);
    }

    // Iniciar animación tras la lectura de la primera frase
    setTimeout(type, typingSpeed);
}

// === 3. SECCIÓN STACK TECNOLÓGICO: FILTRADO Y BÚSQUEDA ===
function initTechStackSection() {
    const techGrid = document.querySelector('#tech-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.querySelector('#tech-search-input');
    const cards = document.querySelectorAll('.tool-card');

    if (!techGrid || cards.length === 0) return;

    let currentCategory = 'all';
    let searchQuery = '';

    function filterCards() {
        let visibleCount = 0;

        cards.forEach(card => {
            const cardCat = card.getAttribute('data-category');
            const cardName = card.getAttribute('data-name') || '';
            const cardDesc = card.getAttribute('data-desc') || '';
            const cardBadge = card.getAttribute('data-badge') || '';

            const matchesCategory = currentCategory === 'all' || cardCat === currentCategory;
            const matchesSearch = searchQuery === '' || 
                cardName.includes(searchQuery) || 
                cardDesc.includes(searchQuery) || 
                cardBadge.includes(searchQuery);

            if (matchesCategory && matchesSearch) {
                card.style.display = 'flex';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                visibleCount++;
            } else {
                card.style.display = 'none';
                card.style.opacity = '0';
                card.style.transform = 'translateY(15px)';
            }
        });

        // Manejo de estado vacío
        let noResultsMsg = techGrid.querySelector('.no-tools-found');
        if (visibleCount === 0) {
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.className = 'no-tools-found';
                techGrid.appendChild(noResultsMsg);
            }
            noResultsMsg.innerHTML = `
                <i class='bx bx-search-alt'></i>
                <p>No se encontraron herramientas para "<strong>${escapeHtml(searchQuery)}</strong>".</p>
            `;
            noResultsMsg.style.display = 'block';
        } else if (noResultsMsg) {
            noResultsMsg.style.display = 'none';
        }

        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-category');
            filterCards();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim().toLowerCase();
            filterCards();
        });
    }
}

// === 4. SMOOTH SCROLL PARA ANCLAS ===
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function escapeHtml(string) {
    const entityMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    };
    return String(string).replace(/[&<>"']/g, s => entityMap[s]);
}
