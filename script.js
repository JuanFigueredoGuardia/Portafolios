// script.js - Lógica interactiva, animaciones y renderizado del Stack Tecnológico
import AOS from 'aos';
import 'aos/dist/aos.css';
import { techStackData } from './techStack.js';

// === INICIALIZACIÓN DE AOS ===
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 750,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        once: true,
        offset: 50,
        delay: 50,
    });

    initNavigation();
    initTypingEffect();
    initTechStackSection();
    initSmoothScroll();
});

// === 1. NAVEGACIÓN Y MENU RESPONSIVO ===
function initNavigation() {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav-menu a:not(.header-cta)');
    const sections = document.querySelectorAll('section');

    // Create backdrop overlay for mobile menu if not exists
    let overlay = document.querySelector('.nav-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);
    }

    const toggleMenu = () => {
        const isActive = navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x');
        overlay.classList.toggle('active', isActive);
        document.body.style.overflow = isActive ? 'hidden' : '';
    };

    const closeMenu = () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMenu);
    }

    overlay.addEventListener('click', closeMenu);

    // Scroll Spy & Sticky Header
    window.addEventListener('scroll', () => {
        const top = window.scrollY;

        // Sticky header
        if (header) {
            header.classList.toggle('sticky', top > 50);
        }

        // Active link detector
        sections.forEach(sec => {
            const offset = sec.offsetTop - 160;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-menu a[href*="${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }, { passive: true });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

// === 2. EFECTO TYPING TEXT MODERNO Y SUAVE ===
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const phrases = [
        'Desarrollador Web Full-Stack',
        'Especialista en Automatización & IA',
        'Ingeniería de Hardware & IoT',
        'Creador de Soluciones Digitales'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 90;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 45;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 95;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 1800; // Pausa al terminar de escribir la frase
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 400; // Breve pausa antes de escribir la siguiente
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

// === 3. SECCIÓN STACK TECNOLÓGICO Y HERRAMIENTAS ===
function initTechStackSection() {
    const techGrid = document.querySelector('#tech-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.querySelector('#tech-search-input');

    if (!techGrid) return;

    let currentCategory = 'all';
    let searchQuery = '';

    // Render cards function
    function renderTechCards() {
        const filtered = techStackData.filter(tool => {
            const matchesCat = currentCategory === 'all' || tool.category === currentCategory;
            const matchesSearch = searchQuery === '' || 
                tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tool.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tool.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tool.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCat && matchesSearch;
        });

        if (filtered.length === 0) {
            techGrid.innerHTML = `
                <div class="no-tools-found">
                    <i class='bx bx-search-alt'></i>
                    <p>No se encontraron herramientas para "<strong>${escapeHtml(searchQuery)}</strong>".</p>
                </div>
            `;
            return;
        }

        techGrid.innerHTML = filtered.map((tool, index) => {
            return `
                <div class="tool-card" 
                     data-aos="fade-up" 
                     data-aos-delay="${(index % 6) * 60}"
                     style="--card-brand-color: ${tool.color}; --tool-bg-glow: ${hexToRgba(tool.color, 0.08)};">
                    <div class="tool-card-header">
                        <div class="tool-logo-container" style="border: 1px solid ${hexToRgba(tool.color, 0.2)};">
                            ${tool.svg}
                        </div>
                        <div class="tool-title-group">
                            <h4>${escapeHtml(tool.name)}</h4>
                            <span class="tool-badge-meta">${escapeHtml(tool.badge)}</span>
                        </div>
                    </div>
                    <p class="tool-desc">${escapeHtml(tool.desc)}</p>
                    <div class="tool-category-footer">
                        <span class="tool-category-tag">${escapeHtml(tool.categoryLabel)}</span>
                        <i class='bx bx-check-shield' style="color: ${tool.color}; font-size: 1.6rem;"></i>
                    </div>
                </div>
            `;
        }).join('');

        // Refresh AOS so newly rendered cards animate smoothly
        AOS.refresh();
    }

    // Category filter events
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-category');
            renderTechCards();
        });
    });

    // Search input event
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            renderTechCards();
        });
    }

    // Initial render
    renderTechCards();
}

// === 4. SMOOTH SCROLL PARA ENLACES ANCLA ===
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

// === UTILIDADES AUXILIARES ===
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

function hexToRgba(hex, alpha) {
    hex = hex.replace('#', '');
    if (hex.length === 3) {
        hex = hex.split('').map(c => c + c).join('');
    }
    const r = parseInt(hex.substring(0, 2), 16) || 0;
    const g = parseInt(hex.substring(2, 4), 16) || 0;
    const b = parseInt(hex.substring(4, 6), 16) || 0;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
