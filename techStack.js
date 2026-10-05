// techStack.js - Base de datos vectorial de herramientas y tecnologías para Juan Figueredo Guardia

export const techStackData = [
  // --- DESARROLLO Y LENGUAJES ---
  {
    id: 'html',
    name: 'HTML5',
    category: 'desarrollo',
    categoryLabel: 'Desarrollo',
    badge: 'Estructura Semántica',
    desc: 'Maquetación web accesible, SEO optimizado y buenas prácticas estándar.',
    color: '#E34F26',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <path d="M4.14 2L5.8 20.6L12 22.32L18.2 20.6L19.86 2H4.14Z" fill="#E34F26"/>
      <path d="M12 20.46L16.82 19.12L18.17 3.82H12V20.46Z" fill="#EF652A"/>
      <path d="M12 7.74H8.45L8.71 10.63H12V7.74ZM12 13.52H8.97L9.22 16.32L12 17.07V13.52Z" fill="#EBEBEB"/>
      <path d="M12 7.74V10.63H15.29L15.03 13.52H12V16.32L14.78 15.57L15.1 11.97H15.55L15.29 14.86H12V17.07L15.08 16.24L15.55 11H8.75L8.5 8.11H15.82L16.08 5.22H7.92L8.43 11H12V7.74Z" fill="white"/>
    </svg>`
  },
  {
    id: 'css',
    name: 'CSS3',
    category: 'desarrollo',
    categoryLabel: 'Desarrollo',
    badge: 'Estilos & Animación',
    desc: 'Diseño responsivo, Grid, Flexbox, micro-animaciones y variables modernas.',
    color: '#1572B6',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <path d="M4.14 2L5.8 20.6L12 22.32L18.2 20.6L19.86 2H4.14Z" fill="#1572B6"/>
      <path d="M12 20.46L16.82 19.12L18.17 3.82H12V20.46Z" fill="#33A9DC"/>
      <path d="M12 7.74H8.45L8.71 10.63H12V7.74ZM12 13.52H8.97L9.22 16.32L12 17.07V13.52Z" fill="#EBEBEB"/>
      <path d="M15.55 7.74H12V10.63H15.29L15.03 13.52H12V16.32L14.78 15.57L15.15 11.45H12V13.52H13.6L13.43 15.35L12 15.74V17.07L15.08 16.24L15.55 11H8.75L8.5 8.11H15.82L16.08 5.22H7.92L8.43 11H12V7.74Z" fill="white"/>
    </svg>`
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'desarrollo',
    categoryLabel: 'Desarrollo',
    badge: 'Backend & Lógica',
    desc: 'Desarrollo backend dinámico, procesamiento de formularios y conexión a DBs.',
    color: '#777BB4',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <path d="M12 3C5.7 3 0.6 6.6 0.6 11C0.6 15.4 5.7 19 12 19C18.3 19 23.4 15.4 23.4 11C23.4 6.6 18.3 3 12 3ZM7.8 14H6.2L7 9.8H9.3C10.5 9.8 11.2 10.4 11 11.4C10.8 12.5 9.9 14 7.8 14ZM14 14H12.4L13.2 9.8H14.8L14.1 14ZM19.4 11.4C19.2 12.5 18.3 14 16.2 14H14.6L15.4 9.8H17.7C18.9 9.8 19.6 10.4 19.4 11.4Z" fill="#777BB4"/>
      <path d="M7.7 11.2L7.3 12.8H8C8.7 12.8 9.1 12.4 9.2 11.9C9.3 11.4 9 11.2 8.5 11.2H7.7ZM16.1 11.2L15.7 12.8H16.4C17.1 12.8 17.5 12.4 17.6 11.9C17.7 11.4 17.4 11.2 16.9 11.2H16.1Z" fill="white"/>
    </svg>`
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'desarrollo',
    categoryLabel: 'Desarrollo',
    badge: 'Bases de Datos',
    desc: 'Modelado relacional, consultas eficientes, integridad y gestión de datos.',
    color: '#00758F',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <ellipse cx="12" cy="6" rx="8" ry="3" fill="#00758F"/>
      <path d="M4 6V11C4 12.66 7.58 14 12 14C16.42 14 20 12.66 20 11V6" stroke="#00758F" stroke-width="2" fill="none"/>
      <path d="M4 11V16C4 17.66 7.58 19 12 19C16.42 19 20 17.66 20 16V11" stroke="#00758F" stroke-width="2" fill="none"/>
      <circle cx="12" cy="11" r="1.5" fill="#5DE0E6"/>
      <circle cx="12" cy="16" r="1.5" fill="#5DE0E6"/>
    </svg>`
  },
  {
    id: 'java',
    name: 'Java',
    category: 'desarrollo',
    categoryLabel: 'Desarrollo',
    badge: 'POO & Algoritmos',
    desc: 'Programación orientada a objetos, lógica estructurada y fundamentos sólidos.',
    color: '#ED8B00',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <path d="M8.5 17.2C8.5 17.2 9.5 17.7 11.3 17.7C13.4 17.7 15.2 17 15.2 17C15.2 17 14.1 17.5 12.5 17.5C10.7 17.5 8.5 17.2 8.5 17.2Z" fill="#ED8B00"/>
      <path d="M7 19.5C7 19.5 8.6 20.3 11.5 20.3C14.7 20.3 17 19.4 17 19.4C17 19.4 15.6 20 12.8 20C9.6 20 7 19.5 7 19.5Z" fill="#ED8B00"/>
      <path d="M12.8 2C12.8 2 14.8 4 13.5 6.5C12.3 8.7 11.2 9.3 12.4 11.2C13.6 13 12.7 14.5 12.7 14.5C12.7 14.5 14.2 13 13.3 11.6C12.2 9.9 13.5 9 14.3 7.8C15.4 6.2 14.8 3.8 12.8 2Z" fill="#5382A1"/>
      <path d="M15.5 10.5C15.5 10.5 17.3 12 15.5 14.3C14.1 16 12 16.5 10.2 16.5C8.4 16.5 6.8 16 6.8 16C6.8 16 8 16.5 10.2 16.5C12.5 16.5 14.8 15.8 15.8 14.2C16.8 12.6 15.5 10.5 15.5 10.5Z" fill="#ED8B00"/>
    </svg>`
  },
  {
    id: 'react',
    name: 'React',
    category: 'desarrollo',
    categoryLabel: 'Desarrollo',
    badge: 'Frontend Moderno',
    desc: 'Arquitectura por componentes, hooks reactivos, SPAs dinámicas e interactivas.',
    color: '#61DAFB',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" stroke-width="1.5" transform="rotate(30 12 12)"/>
      <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" stroke-width="1.5" transform="rotate(90 12 12)"/>
      <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" stroke-width="1.5" transform="rotate(150 12 12)"/>
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB"/>
    </svg>`
  },
  {
    id: 'json',
    name: 'JSON',
    category: 'desarrollo',
    categoryLabel: 'Desarrollo',
    badge: 'Estructura de Datos',
    desc: 'Intercambio estructurado, integración REST APIs, config y payloads dinámicos.',
    color: '#004AAD',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <rect x="3" y="4" width="18" height="16" rx="4" fill="#004AAD" fill-opacity="0.1" stroke="#004AAD" stroke-width="1.8"/>
      <path d="M8.5 8C7.5 8 7 8.5 7 9.5V11C7 11.6 6.5 12 6 12C6.5 12 7 12.4 7 13V14.5C7 15.5 7.5 16 8.5 16" stroke="#004AAD" stroke-width="2" stroke-linecap="round"/>
      <path d="M15.5 8C16.5 8 17 8.5 17 9.5V11C17 11.6 17.5 12 18 12C17.5 12 17 12.4 17 13V14.5C17 15.5 16.5 16 15.5 16" stroke="#004AAD" stroke-width="2" stroke-linecap="round"/>
      <circle cx="10.5" cy="12" r="1" fill="#004AAD"/>
      <circle cx="13.5" cy="12" r="1" fill="#004AAD"/>
    </svg>`
  },
  {
    id: 'python',
    name: 'Python',
    category: 'desarrollo',
    categoryLabel: 'Desarrollo',
    badge: 'Automatización & Scripts',
    desc: 'Lógica backend, scripts de automatización, análisis de datos e integración de IA.',
    color: '#3776AB',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <path d="M11.87 2C6.88 2 7.19 4.16 7.19 4.16L7.2 6.4H12.2V7.15H5.17C5.17 7.15 2 6.79 2 11.84C2 16.89 4.78 16.66 4.78 16.66H6.44V14.33C6.44 14.33 6.35 11.53 9.18 11.53H14.19C14.19 11.53 16.89 11.62 16.89 8.97V4.08C16.89 4.08 17.25 2 11.87 2ZM9.56 3.51C10.14 3.51 10.6 3.98 10.6 4.56C10.6 5.14 10.14 5.6 9.56 5.6C8.98 5.6 8.52 5.14 8.52 4.56C8.52 3.98 8.98 3.51 9.56 3.51Z" fill="#3776AB"/>
      <path d="M12.13 22C17.12 22 16.81 19.84 16.81 19.84L16.8 17.6H11.8V16.85H18.83C18.83 16.85 22 17.21 22 12.16C22 7.11 19.22 7.34 19.22 7.34H17.56V9.67C17.56 9.67 17.65 12.47 14.82 12.47H9.81C9.81 12.47 7.11 12.38 7.11 15.03V19.92C7.11 19.92 6.75 22 12.13 22ZM14.44 20.49C13.86 20.49 13.4 20.02 13.4 19.44C13.4 18.86 13.86 18.4 14.44 18.4C15.02 18.4 15.48 18.86 15.48 19.44C15.48 20.02 15.02 20.49 14.44 20.49Z" fill="#FFD438"/>
    </svg>`
  },
  {
    id: 'flutter',
    name: 'Flutter',
    category: 'desarrollo',
    categoryLabel: 'Desarrollo',
    badge: 'Apps Multiplataforma',
    desc: 'Desarrollo de aplicaciones nativas y multiplataforma de alto rendimiento para Android, iOS y Web con una sola base de código.',
    color: '#02569B',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <path d="M14.31 2.5L5.5 11.31L8.35 14.16L19.98 2.5H14.31Z" fill="#42A5F5"/>
      <path d="M14.35 11.23L8.35 17.23L11.2 20.08L14.35 16.93L17.2 20.08L20.05 17.23L17.2 14.08L19.98 11.23H14.35Z" fill="#01579B"/>
      <path d="M11.2 20.08L14.35 16.93L17.2 20.08L14.35 22.93L11.2 20.08Z" fill="#29B6F6"/>
    </svg>`
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'desarrollo',
    categoryLabel: 'Desarrollo',
    badge: 'Runtime & APIs Backend',
    desc: 'Entorno de ejecución asíncrono para JavaScript del lado del servidor, creación de microservicios y APIs REST escalables.',
    color: '#339933',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <path d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" fill="#339933"/>
      <path d="M8.5 7.5V16.5M8.5 10.5L15.5 16.5M15.5 7.5V16.5" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },

  // --- ENTORNOS Y CONTROL DE VERSIONES ---
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    category: 'entornos',
    categoryLabel: 'Entornos & Deploy',
    badge: 'Editor Principal',
    desc: 'Entorno de desarrollo ágil con extensiones avanzadas, linting y debugging.',
    color: '#007ACC',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <path d="M17.5 2.5L7.5 9.8L3 6.5L1.5 7.8L5 12L1.5 16.2L3 17.5L7.5 14.2L17.5 21.5L22.5 19V5L17.5 2.5Z" fill="#007ACC"/>
      <path d="M17.5 7.2V16.8L10.2 12L17.5 7.2Z" fill="#1F9CF0"/>
      <path d="M17.5 2.5L22.5 5V7.5L17.5 7.2V2.5Z" fill="#0065A9"/>
      <path d="M17.5 21.5L22.5 19V16.5L17.5 16.8V21.5Z" fill="#0065A9"/>
    </svg>`
  },
  {
    id: 'arduino-ide',
    name: 'Arduino IDE',
    category: 'entornos',
    categoryLabel: 'Entornos & Deploy',
    badge: 'Hardware & C++',
    desc: 'Compilación y carga de firmware en placas ESP32, Nano, Uno y microchips.',
    color: '#00979D',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <path d="M8 7C5.24 7 3 9.24 3 12C3 14.76 5.24 17 8 17C10.15 17 11.96 15.65 12.65 13.76C12.35 13.25 12.15 12.65 12.15 12C12.15 11.35 12.35 10.75 12.65 10.24C11.96 8.35 10.15 7 8 7Z" fill="#00979D"/>
      <path d="M16 7C13.85 7 12.04 8.35 11.35 10.24C11.65 10.75 11.85 11.35 11.85 12C11.85 12.65 11.65 13.25 11.35 13.76C12.04 15.65 13.85 17 16 17C18.76 17 21 14.76 21 12C21 9.24 18.76 7 16 7Z" fill="#008184"/>
      <path d="M6 12H10" stroke="white" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M14 12H18M16 10V14" stroke="white" stroke-width="1.6" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'entornos',
    categoryLabel: 'Entornos & Deploy',
    badge: 'Control de Versiones',
    desc: 'Repositorios seguros, CI/CD, ramas de trabajo colaborativas y despliegue.',
    color: '#181717',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017C2 16.446 4.87 20.198 8.844 21.528C9.344 21.621 9.527 21.312 9.527 21.047C9.527 20.812 9.518 20.187 9.514 19.362C6.732 19.967 6.145 18.021 6.145 18.021C5.69 16.866 5.034 16.559 5.034 16.559C4.127 15.939 5.103 15.952 5.103 15.952C6.106 16.022 6.634 16.983 6.634 16.983C7.525 18.51 8.97 18.069 9.539 17.813C9.63 17.167 9.888 16.726 10.174 16.476C7.953 16.223 5.618 15.364 5.618 11.536C5.618 10.446 6.008 9.554 6.647 8.857C6.544 8.604 6.202 7.587 6.745 6.222C6.745 6.222 7.583 5.953 9.489 7.244C10.285 7.022 11.135 6.911 11.984 6.907C12.833 6.911 13.684 7.022 14.481 7.244C16.386 5.953 17.222 6.222 17.222 6.222C17.767 7.587 17.426 8.604 17.323 8.857C17.964 9.554 18.351 10.446 18.351 11.536C18.351 15.374 16.012 16.22 13.784 16.468C14.143 16.778 14.464 17.391 14.464 18.328C14.464 19.673 14.452 20.758 14.452 21.047C14.452 21.315 14.631 21.628 15.141 21.527C19.123 20.194 22 16.444 22 12.017C22 6.484 17.523 2 12 2Z" fill="#181717"/>
    </svg>`
  },
  {
    id: 'netlify',
    name: 'Netlify',
    category: 'entornos',
    categoryLabel: 'Entornos & Deploy',
    badge: 'Hosting & Edge',
    desc: 'Despliegues automáticos desde Git, SSL instantáneo y CDN global.',
    color: '#00C7B7',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <path d="M12 2.5L3.5 11L12 19.5L20.5 11L12 2.5Z" fill="#00C7B7" fill-opacity="0.15"/>
      <path d="M12 2.5L20.5 11L18 13.5L12 7.5L6 13.5L3.5 11L12 2.5Z" fill="#00C7B7"/>
      <path d="M12 21.5L3.5 13L6 10.5L12 16.5L18 10.5L20.5 13L12 21.5Z" fill="#058C80"/>
    </svg>`
  },
  {
    id: 'hostinger',
    name: 'Hostinger',
    category: 'entornos',
    categoryLabel: 'Entornos & Deploy',
    badge: 'Servidores & DNS',
    desc: 'Administración de hosting web, dominios, certificados y bases de datos.',
    color: '#673DE6',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <circle cx="12" cy="12" r="10" fill="#673DE6" fill-opacity="0.12"/>
      <path d="M8 6V18M16 6V18M8 12H16" stroke="#673DE6" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="8" cy="6" r="1.5" fill="#673DE6"/>
      <circle cx="16" cy="18" r="1.5" fill="#673DE6"/>
    </svg>`
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    category: 'entornos',
    categoryLabel: 'Entornos & Deploy',
    badge: 'CMS & E-commerce',
    desc: 'Construcción y personalización de sitios autogestionables y tiendas WooCommerce.',
    color: '#21759B',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <circle cx="12" cy="12" r="10" fill="#21759B"/>
      <path d="M3.2 12C3.2 15.65 5.4 18.78 8.54 20.08L4.65 9.42C3.73 10.2 3.2 11.05 3.2 12ZM17.15 11.53C17.15 10.3 16.71 9.45 16.34 8.81C15.85 8 15.38 7.34 15.38 6.55C15.38 5.66 16.05 4.86 17 4.86C17.14 4.86 17.27 4.88 17.4 4.9C15.93 3.72 14.05 3 12 3C9.72 3 7.64 3.89 6.13 5.34C6.46 5.36 6.88 5.38 7.33 5.38C8.36 5.38 9.94 5.25 9.94 5.25C10.47 5.22 10.53 5.97 10 6.03C10 6.03 9.47 6.09 8.94 6.12L12.18 15.75L14.13 9.9L12.75 6.12C12.22 6.09 11.71 6.03 11.71 6.03C11.18 5.97 11.24 5.22 11.77 5.25C11.77 5.25 13.38 5.38 14.38 5.38C15.38 5.38 16.97 5.25 16.97 5.25C17.5 5.22 17.56 5.97 17.03 6.03C17.03 6.03 16.5 6.09 15.97 6.12L19.18 15.68L20.06 12.7C20.47 11.28 20.8 9.9 20.8 8.81C20.8 8.44 20.76 8.08 20.7 7.74C21.39 8.98 21.8 10.45 21.8 12C21.8 14.88 20.36 17.43 18.17 18.98L13.56 6.17L17.15 11.53Z" fill="white"/>
    </svg>`
  },

  // --- INTELIGENCIA ARTIFICIAL Y MODELOS ---
  {
    id: 'gemini',
    name: 'Google Gemini',
    category: 'ia',
    categoryLabel: 'Inteligencia Artificial',
    badge: 'LLM Multimodal',
    desc: 'Integración de modelos avanzados de visión, código y procesamiento de lenguaje.',
    color: '#1A73E8',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <defs>
        <linearGradient id="geminiGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1A73E8"/>
          <stop offset="0.5" stop-color="#8E24AA"/>
          <stop offset="1" stop-color="#FF5252"/>
        </linearGradient>
      </defs>
      <path d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z" fill="url(#geminiGrad)"/>
    </svg>`
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'ia',
    categoryLabel: 'Inteligencia Artificial',
    badge: 'OpenAI Prompting',
    desc: 'Diseño avanzado de prompts, generación de lógica de negocio y automatización de contenido.',
    color: '#10A37F',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <circle cx="12" cy="12" r="10" fill="#10A37F" fill-opacity="0.15"/>
      <path d="M18.5 10.8C18.2 8.7 16.6 7.2 14.5 7.1C14.1 5.4 12.6 4.2 10.8 4.5C9.3 4.7 8.1 5.8 7.6 7.2C5.9 7.7 4.7 9.2 4.8 11C4.9 12.4 5.7 13.6 7 14.1C6.8 15.9 7.8 17.5 9.5 18C10.9 18.4 12.4 18 13.2 16.9C14.6 17.7 16.4 17.2 17.2 15.8C17.8 14.7 17.7 13.4 17 12.5C18 12.2 18.7 11.5 18.5 10.8Z" stroke="#10A37F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 9L14 15M14 9L10 15" stroke="#10A37F" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'claude',
    name: 'Claude',
    category: 'ia',
    categoryLabel: 'Inteligencia Artificial',
    badge: 'Anthropic AI',
    desc: 'Análisis de código profundo, razonamiento complejo y refinamiento arquitectónico.',
    color: '#D97706',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <rect x="3" y="3" width="18" height="18" rx="6" fill="#CC6B49" fill-opacity="0.12"/>
      <path d="M12 5V19M5 12H19M7.05 7.05L16.95 16.95M16.95 7.05L7.05 16.95" stroke="#CC6B49" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="12" cy="12" r="2.5" fill="#CC6B49"/>
    </svg>`
  },
  {
    id: 'google-aistudio',
    name: 'Google AI Studio',
    category: 'ia',
    categoryLabel: 'Inteligencia Artificial',
    badge: 'Prototipado de IA',
    desc: 'Desarrollo de prototipos rápidos con Gemini API, tuning y llamadas a funciones.',
    color: '#004AAD',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="#004AAD" fill-opacity="0.1"/>
      <path d="M12 6L14 10.5L18.5 12.5L14 14.5L12 19L10 14.5L5.5 12.5L10 10.5L12 6Z" fill="#004AAD"/>
      <circle cx="18" cy="6" r="1.5" fill="#5DE0E6"/>
    </svg>`
  },
  {
    id: 'notebooklm',
    name: 'NotebookLM',
    category: 'ia',
    categoryLabel: 'Inteligencia Artificial',
    badge: 'Investigación & Docs',
    desc: 'Síntesis de documentación y fuentes de consulta, resúmenes estructurados y preparación de proyectos.',
    color: '#4285F4',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <rect x="4" y="3" width="16" height="18" rx="3" fill="#4285F4" fill-opacity="0.12" stroke="#4285F4" stroke-width="1.8"/>
      <path d="M8 8H16M8 12H14M8 16H12" stroke="#4285F4" stroke-width="2" stroke-linecap="round"/>
      <circle cx="16" cy="16" r="2" fill="#34A853"/>
    </svg>`
  },
  {
    id: 'googleflow',
    name: 'Google Flow.ia',
    category: 'ia',
    categoryLabel: 'Inteligencia Artificial',
    badge: 'Pipelines Inteligentes',
    desc: 'Diseño de flujos de trabajo inteligentes y orquestación asistida por IA.',
    color: '#34A853',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <path d="M4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20" stroke="#34A853" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="12" cy="4" r="2" fill="#4285F4"/>
      <circle cx="20" cy="12" r="2" fill="#FBBC05"/>
      <circle cx="12" cy="20" r="2" fill="#EA4335"/>
      <path d="M9 12L11 14L15 10" stroke="#34A853" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    id: 'stitch',
    name: 'Stitch.ia',
    category: 'ia',
    categoryLabel: 'Inteligencia Artificial',
    badge: 'Integración UI/IA',
    desc: 'Unión y ensamblaje de componentes dinámicos generados por modelos generativos.',
    color: '#8B5CF6',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="#8B5CF6" fill-opacity="0.12"/>
      <path d="M6 18L18 6M6 6L18 18" stroke="#8B5CF6" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="6" cy="6" r="2.5" fill="#8B5CF6"/>
      <circle cx="18" cy="18" r="2.5" fill="#8B5CF6"/>
    </svg>`
  },
  {
    id: 'pomelli',
    name: 'Pomelli.ia',
    category: 'ia',
    categoryLabel: 'Inteligencia Artificial',
    badge: 'Generación Creativa',
    desc: 'Exploración de conceptos visuales y diseño conceptual impulsado por IA.',
    color: '#EC4899',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <circle cx="12" cy="12" r="9" fill="#EC4899" fill-opacity="0.15" stroke="#EC4899" stroke-width="1.8"/>
      <circle cx="9" cy="10" r="2" fill="#EC4899"/>
      <circle cx="15" cy="10" r="2" fill="#EC4899"/>
      <path d="M8 15C9.5 17 14.5 17 16 15" stroke="#EC4899" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'vento',
    name: 'Vento.ia',
    category: 'ia',
    categoryLabel: 'Inteligencia Artificial',
    badge: 'Automatización Ágil',
    desc: 'Aceleración de procesos y generación de scripts inteligentes en tiempo récord.',
    color: '#06B6D4',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <path d="M3 8H16C17.66 8 19 6.66 19 5C19 3.34 17.66 2 16 2" stroke="#06B6D4" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M3 13H19C20.66 13 22 14.34 22 16C22 17.66 20.66 19 19 19" stroke="#06B6D4" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M3 18H13C14.1 18 15 18.9 15 20C15 21.1 14.1 22 13 22" stroke="#06B6D4" stroke-width="2.2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'grok',
    name: 'Grok',
    category: 'ia',
    categoryLabel: 'Inteligencia Artificial',
    badge: 'Modelo LLM xAI',
    desc: 'Modelo de inteligencia artificial conversacional desarrollado por xAI con razonamiento rápido y acceso a datos en tiempo real.',
    color: '#1E293B',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <rect width="24" height="24" rx="5" fill="#0A0F1D"/>
      <path d="M6 18L18 6" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M6 13L13 6" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M11 18L18 11" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="17.5" cy="6.5" r="1.5" fill="#FFFFFF"/>
    </svg>`
  },
  {
    id: 'sora2',
    name: 'Sora 2',
    category: 'ia',
    categoryLabel: 'Inteligencia Artificial',
    badge: 'Generación de Video IA',
    desc: 'Generación y síntesis de video hiperrealista a partir de descripciones textuales con física avanzada y consistencia temporal.',
    color: '#7928CA',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <rect width="24" height="24" rx="5" fill="#110E24"/>
      <circle cx="12" cy="12" r="7.5" stroke="#7928CA" stroke-width="2"/>
      <circle cx="12" cy="12" r="4" stroke="#00DFD8" stroke-width="2"/>
      <path d="M12 4.5L14 12L20 12" stroke="#FF0080" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="12" cy="12" r="2" fill="#FFFFFF"/>
    </svg>`
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    category: 'ia',
    categoryLabel: 'Inteligencia Artificial',
    badge: 'Avatares & Video IA',
    desc: 'Producción de videos con avatares fotorrealistas con IA, clonación de voz de alta precisión y traducción sincronizada en múltiples idiomas.',
    color: '#6366F1',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <rect width="24" height="24" rx="5" fill="#1E1B4B"/>
      <path d="M7 6V18M17 6V18M7 12H17" stroke="#818CF8" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="12" cy="7.5" r="2.5" fill="#A855F7"/>
      <path d="M12 10.5C9.5 10.5 8 12.5 8 14" stroke="#A855F7" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'gamma',
    name: 'Gamma.ia',
    category: 'ia',
    categoryLabel: 'Inteligencia Artificial',
    badge: 'Docs & Slides con IA',
    desc: 'Creación interactiva de presentaciones profesionales, documentos ejecutivos y páginas web mediante asistencia conversacional con IA.',
    color: '#EC4899',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <rect width="24" height="24" rx="5" fill="#240D1D"/>
      <rect x="5" y="6" width="14" height="10" rx="2" stroke="#EC4899" stroke-width="1.8" fill="none"/>
      <path d="M8 10H14M8 13H11" stroke="#F472B6" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M9 16L7 20M15 16L17 20" stroke="#EC4899" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="15.5" cy="9.5" r="1.5" fill="#FBBF24"/>
    </svg>`
  },

  // --- AUTOMATIZACIÓN Y DATOS ---
  {
    id: 'n8n',
    name: 'n8n',
    category: 'automatizacion',
    categoryLabel: 'Automatización & Datos',
    badge: 'Workflows & APIs',
    desc: 'Automatización de procesos empresariales autoalojados conectando webhooks y APIs.',
    color: '#EA4B71',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <circle cx="7" cy="12" r="3.5" fill="#EA4B71"/>
      <circle cx="17" cy="7" r="3" fill="#EA4B71"/>
      <circle cx="17" cy="17" r="3" fill="#EA4B71"/>
      <path d="M10 10.5L14.5 8M10 13.5L14.5 16" stroke="#EA4B71" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'manychat',
    name: 'ManyChat',
    category: 'automatizacion',
    categoryLabel: 'Automatización & Datos',
    badge: 'Chatbots & Ventas',
    desc: 'Secuencias conversacionales automáticas para Instagram, WhatsApp y captación.',
    color: '#0084FF',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <path d="M12 3C6.5 3 2 7 2 12C2 14.5 3.2 16.7 5.1 18.3L4 22L8.2 20.3C9.4 20.8 10.7 21 12 21C17.5 21 22 17 22 12C22 7 17.5 3 12 3Z" fill="#0084FF"/>
      <circle cx="8.5" cy="12" r="1.5" fill="white"/>
      <circle cx="12" cy="12" r="1.5" fill="white"/>
      <circle cx="15.5" cy="12" r="1.5" fill="white"/>
    </svg>`
  },
  {
    id: 'maker',
    name: 'Maker (Make)',
    category: 'automatizacion',
    categoryLabel: 'Automatización & Datos',
    badge: 'No-Code Integrations',
    desc: 'Integración multi-plataforma de CRM, correos, hojas de cálculo y notificaciones.',
    color: '#6D28D9',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="#6D28D9" fill-opacity="0.12"/>
      <path d="M6 18V6L12 12L18 6V18" stroke="#6D28D9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    id: 'firebase',
    name: 'Firebase',
    category: 'automatizacion',
    categoryLabel: 'Automatización & Datos',
    badge: 'Backend as a Service',
    desc: 'Bases de datos Firestore en tiempo real, hosting seguro y autenticación.',
    color: '#FFCA28',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <path d="M4.5 17.5L7.5 3L11 9.5L4.5 17.5Z" fill="#FFA000"/>
      <path d="M19.5 17.5L16.5 7L11 17.5H19.5Z" fill="#F57C00"/>
      <path d="M4.5 17.5L11 21.5L19.5 17.5L12 9.5L4.5 17.5Z" fill="#FFCA28"/>
    </svg>`
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'automatizacion',
    categoryLabel: 'Automatización & Datos',
    badge: 'PostgreSQL Cloud',
    desc: 'Postgres escalable, Row-Level Security, almacenamiento de archivos y Webhooks.',
    color: '#3ECF8E',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <path d="M13.2 21.8C12.5 22.7 11 22.2 11 21V13.8H4.2C3.1 13.8 2.6 12.4 3.4 11.7L10.8 2.2C11.5 1.3 13 1.8 13 3V10.2H19.8C20.9 10.2 21.4 11.6 20.6 12.3L13.2 21.8Z" fill="#3ECF8E"/>
    </svg>`
  },
  {
    id: 'google-ads',
    name: 'Google Ads',
    category: 'automatizacion',
    categoryLabel: 'Automatización & Datos',
    badge: 'Tráfico & Conversión',
    desc: 'Estrategias de posicionamiento SEM, anuncios de búsqueda y optimización de ROI.',
    color: '#FABB05',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <ellipse cx="6" cy="14" rx="4" ry="7" transform="rotate(-30 6 14)" fill="#FABB05"/>
      <rect x="10" y="3" width="5" height="15" rx="2.5" transform="rotate(30 10 3)" fill="#4285F4"/>
      <circle cx="18" cy="18" r="3" fill="#34A853"/>
    </svg>`
  },
  {
    id: 'google-calendar',
    name: 'Google Calendario',
    category: 'automatizacion',
    categoryLabel: 'Automatización & Datos',
    badge: 'Gestión & Citas',
    desc: 'Sincronización automatizada de turnos, recordatorios y agendamiento de clientes.',
    color: '#4285F4',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <rect x="3" y="4" width="18" height="17" rx="3" fill="white" stroke="#4285F4" stroke-width="2"/>
      <path d="M3 9H21" stroke="#4285F4" stroke-width="2"/>
      <path d="M8 2V5M16 2V5" stroke="#EA4335" stroke-width="2" stroke-linecap="round"/>
      <text x="12" y="16.5" font-family="'Outfit', sans-serif" font-size="7.5" font-weight="700" fill="#4285F4" text-anchor="middle">31</text>
    </svg>`
  },
  {
    id: 'google-sheets',
    name: 'Google Sheets',
    category: 'automatizacion',
    categoryLabel: 'Automatización & Datos',
    badge: 'Gestión de Datos & Fórmulas',
    desc: 'Modelado de hojas de cálculo, automatización de balances, control de datos y dashboards dinámicos.',
    color: '#0F9D58',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <path d="M14.5 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V7.5L14.5 2Z" fill="#0F9D58"/>
      <path d="M14 2V8H20L14 2Z" fill="#87CEAC"/>
      <rect x="7" y="11" width="10" height="7.5" rx="1" fill="#0B8043"/>
      <path d="M7 13.5H17M7 16H17M11 11V18.5" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'google-appsheet',
    name: 'Google AppSheet',
    category: 'automatizacion',
    categoryLabel: 'Automatización & Datos',
    badge: 'Apps No-Code & Móvil',
    desc: 'Creación ágil de aplicaciones interactivas multiplataforma conectadas directamente a bases de datos y hojas de cálculo.',
    color: '#1A73E8',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <rect x="3" y="3" width="18" height="18" rx="4.5" fill="#1A73E8" fill-opacity="0.12" stroke="#1A73E8" stroke-width="1.8"/>
      <rect x="6" y="6.5" width="12" height="3" rx="1" fill="#1A73E8"/>
      <rect x="6" y="11.5" width="5" height="6" rx="1.2" fill="#34A853"/>
      <rect x="13" y="11.5" width="5" height="6" rx="1.2" fill="#FBBC04"/>
      <circle cx="8.5" cy="14.5" r="1.2" fill="white"/>
      <path d="M14.5 14.5L15.5 15.5L17 13.5" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    id: 'google-apps-script',
    name: 'Google Apps Script',
    category: 'automatizacion',
    categoryLabel: 'Automatización & Datos',
    badge: 'Automatización & Macros',
    desc: 'Programación de scripts en la nube, triggers automáticos, webhooks y conexión fluida entre herramientas de Google Workspace.',
    color: '#4285F4',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="#4285F4"/>
      <path d="M14 2V8H20L14 2Z" fill="#A1C2FA"/>
      <rect x="6.5" y="11" width="11" height="8" rx="1.5" fill="#1A73E8"/>
      <path d="M8.5 13.5L10.5 15L8.5 16.5" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 16.5H15" stroke="#FBBC04" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'google-resenas',
    name: 'Google Reseñas',
    category: 'automatizacion',
    categoryLabel: 'Automatización & Datos',
    badge: 'Reputación & SEO Local',
    desc: 'Gestión y automatización de opiniones en Google, fidelización de clientes, reputación digital y optimización de posicionamiento local.',
    color: '#FBBC05',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <rect width="24" height="24" rx="5" fill="#FFF9E6"/>
      <path d="M12 4L14.2 8.5L19 9.2L15.5 12.6L16.3 17.5L12 15.2L7.7 17.5L8.5 12.6L5 9.2L9.8 8.5L12 4Z" fill="#FBBC05"/>
      <path d="M12 7.5L13.3 10.2L16.2 10.6L14.1 12.7L14.6 15.6L12 14.2L9.4 15.6L9.9 12.7L7.8 10.6L10.7 10.2L12 7.5Z" fill="#EA4335" opacity="0.3"/>
      <circle cx="12" cy="12" r="1.5" fill="#4285F4"/>
    </svg>`
  },
  {
    id: 'google-page',
    name: 'Google Page',
    category: 'automatizacion',
    categoryLabel: 'Automatización & Datos',
    badge: 'Presencia Digital & Ficha',
    desc: 'Creación y sincronización de sitios web de Google y perfil de negocio comercial en Google Maps para captar prospectos en piloto automático.',
    color: '#4285F4',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <rect width="24" height="24" rx="5" fill="#E8F0FE"/>
      <path d="M4 8L12 4L20 8V10H4V8Z" fill="#4285F4"/>
      <path d="M5 10H8V17H5V10ZM10 10H14V17H10V10ZM16 10H19V17H16V10Z" fill="#34A853"/>
      <path d="M3 17H21V19H3V17Z" fill="#EA4335"/>
    </svg>`
  },
  {
    id: 'google-form',
    name: 'Google Forms',
    category: 'automatizacion',
    categoryLabel: 'Automatización & Datos',
    badge: 'Formularios & Datos',
    desc: 'Estructuración de encuestas inteligentes, captura automatizada de clientes y sincronización instantánea con bases de datos y Google Sheets.',
    color: '#7248B9',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <rect width="24" height="24" rx="5" fill="#F3E8FF"/>
      <rect x="5" y="4" width="14" height="16" rx="2" fill="#7248B9"/>
      <rect x="9" y="3" width="6" height="2.5" rx="1" fill="#9333EA"/>
      <rect x="8" y="8" width="8" height="1.8" rx="0.9" fill="white"/>
      <circle cx="8" cy="12" r="1" fill="white"/>
      <rect x="10.5" y="11.2" width="5.5" height="1.6" rx="0.8" fill="white"/>
      <circle cx="8" cy="15" r="1" fill="white"/>
      <rect x="10.5" y="14.2" width="5.5" height="1.6" rx="0.8" fill="white"/>
    </svg>`
  },
  {
    id: 'office',
    name: 'Microsoft Office (365)',
    category: 'automatizacion',
    categoryLabel: 'Automatización & Datos',
    badge: 'Productividad & Suite',
    desc: 'Automatización avanzada en Excel, macros, gestión documental con Word y presentaciones dinámicas corporativas integradas en la nube.',
    color: '#D83B01',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <rect width="24" height="24" rx="5" fill="#FDF3E7"/>
      <path d="M15 5.5L19 7.8V16.2L15 18.5V5.5Z" fill="#EB3C00"/>
      <path d="M15 5.5L9 3L5 4.8V19.2L9 21L15 18.5V5.5Z" fill="#FF8C00"/>
      <path d="M9 7L13 8.5V15.5L9 17V7Z" fill="#FFFFFF"/>
    </svg>`
  },
  {
    id: 'obsidian',
    name: 'Obsidian',
    category: 'automatizacion',
    categoryLabel: 'Automatización & Datos',
    badge: 'Gestión del Conocimiento',
    desc: 'Estructuración de base de conocimiento enlazada en Markdown, documentación de arquitecturas y gestión del pensamiento productivo.',
    color: '#7C3AED',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <rect width="24" height="24" rx="5" fill="#18132B"/>
      <path d="M12 3L18 8L16 19L12 21L8 19L6 8L12 3Z" stroke="#A78BFA" stroke-width="1.8" fill="#4C1D95"/>
      <path d="M12 3V21M12 3L8 14L12 21M12 3L16 14L12 21" stroke="#C4B5FD" stroke-width="1.2"/>
    </svg>`
  },

  // --- HARDWARE E IOT ---
  {
    id: 'esp32',
    name: 'ESP32',
    category: 'hardware',
    categoryLabel: 'Hardware & IoT',
    badge: 'Microcontrolador IoT',
    desc: 'Dispositivo con WiFi/Bluetooth para telemetría, lectura de sensores y alertas.',
    color: '#E7352C',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <rect x="4" y="4" width="16" height="16" rx="2" fill="#262626" stroke="#E7352C" stroke-width="1.8"/>
      <rect x="8" y="8" width="8" height="8" rx="1" fill="#404040"/>
      <path d="M9 2V4M12 2V4M15 2V4M9 20V22M12 20V22M15 20V22M2 9H4M2 12H4M2 15H4M20 9H22M20 12H22M20 15H22" stroke="#E7352C" stroke-width="1.5"/>
      <circle cx="10" cy="10" r="0.8" fill="#5DE0E6"/>
    </svg>`
  },
  {
    id: 'raspberry-pi',
    name: 'Raspberry Pi',
    category: 'hardware',
    categoryLabel: 'Hardware & IoT',
    badge: 'Servidor Local & SBC',
    desc: 'SBC para hubs domóticos, servidores locales, procesamiento perimetral y bots.',
    color: '#C51A4A',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <path d="M12 6C10 4 8 4 6 5C6 7 7 9 9 9.5" stroke="#467D25" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M12 6C14 4 16 4 18 5C18 7 17 9 15 9.5" stroke="#467D25" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="8" cy="12" r="2.5" fill="#C51A4A"/>
      <circle cx="16" cy="12" r="2.5" fill="#C51A4A"/>
      <circle cx="12" cy="13" r="2.8" fill="#C51A4A"/>
      <circle cx="9.5" cy="16.5" r="2.2" fill="#C51A4A"/>
      <circle cx="14.5" cy="16.5" r="2.2" fill="#C51A4A"/>
      <circle cx="12" cy="19" r="1.8" fill="#C51A4A"/>
    </svg>`
  },
  {
    id: 'arduino',
    name: 'Arduino',
    category: 'hardware',
    categoryLabel: 'Hardware & IoT',
    badge: 'Electrónica & Sensores',
    desc: 'Certificado UTN: Circuitos inteligentes, relés, alarmas y actuadores automáticos.',
    color: '#00979D',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <circle cx="7.5" cy="12" r="4.5" stroke="#00979D" stroke-width="2.2" fill="none"/>
      <circle cx="16.5" cy="12" r="4.5" stroke="#00979D" stroke-width="2.2" fill="none"/>
      <path d="M6 12H9M15 12H18M16.5 10.5V13.5" stroke="#00979D" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'impresion-3d',
    name: 'Impresión 3D',
    category: 'hardware',
    categoryLabel: 'Hardware & IoT',
    badge: 'Prototipado & Carcasas',
    desc: 'Diseño, modelado y manufactura aditiva de carcasas, piezas a medida y gabinetes para dispositivos y sensores IoT.',
    color: '#F97316',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <rect width="24" height="24" rx="5" fill="#241408"/>
      <path d="M12 3L14 7H10L12 3Z" fill="#F97316"/>
      <path d="M12 7V10" stroke="#F97316" stroke-width="2" stroke-linecap="round"/>
      <path d="M12 12L17.5 15V19.5L12 22.5L6.5 19.5V15L12 12Z" stroke="#FB923C" stroke-width="1.8" fill="none"/>
      <path d="M12 12V22.5M6.5 15L12 18M17.5 15L12 18" stroke="#FDBA74" stroke-width="1.2"/>
    </svg>`
  },

  // --- DISEÑO Y CREATIVIDAD ---
  {
    id: 'canva',
    name: 'Canva',
    category: 'diseno',
    categoryLabel: 'Diseño & Creatividad',
    badge: 'Identidad Visual',
    desc: 'Diseño publicitario de alto impacto, banners promocionales y branding social.',
    color: '#00C4CC',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <circle cx="12" cy="12" r="10" fill="#00C4CC"/>
      <path d="M14.5 8C13.5 7.2 12 7.2 10.8 7.8C9.2 8.6 8 10.4 8 12.8C8 15.2 9.5 16.8 11.5 16.8C13.2 16.8 14.5 15.6 15.2 14.2" stroke="white" stroke-width="2.2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'antigravity',
    name: 'Antigravity',
    category: 'diseno',
    categoryLabel: 'Diseño & Creatividad',
    badge: 'Diseño Generativo',
    desc: 'Creación de assets visuales disruptivos, composición moderna y estética vanguardista.',
    color: '#6366F1',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <rect x="3" y="3" width="18" height="18" rx="6" fill="#6366F1" fill-opacity="0.12"/>
      <path d="M12 4L19 18H5L12 4Z" stroke="#6366F1" stroke-width="2.2" stroke-linejoin="round"/>
      <circle cx="12" cy="13" r="2.5" fill="#6366F1"/>
      <path d="M8 20H16" stroke="#6366F1" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    category: 'diseno',
    categoryLabel: 'Diseño & Creatividad',
    badge: 'Curaduría & Moodboards',
    desc: 'Análisis de tendencias visuales, paletas cromáticas y benchmarks de UX/UI.',
    color: '#BD081C',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <circle cx="12" cy="12" r="10" fill="#BD081C"/>
      <path d="M12 4.5C7.86 4.5 4.5 7.86 4.5 12C4.5 15.17 6.47 17.89 9.27 19C9.21 18.4 9.16 17.48 9.3 16.89L10.23 12.94C10.23 12.94 9.99 12.46 9.99 11.75C9.99 10.64 10.63 9.81 11.43 9.81C12.11 9.81 12.44 10.32 12.44 10.93C12.44 11.62 12 12.65 11.78 13.58C11.59 14.38 12.18 15.03 12.97 15.03C14.4 15.03 15.5 13.52 15.5 11.36C15.5 9.45 14.13 8.11 12.16 8.11C9.88 8.11 8.55 9.82 8.55 11.72C8.55 12.41 8.81 13.15 9.14 13.55C9.21 13.63 9.22 13.7 9.2 13.79L8.85 15.22C8.79 15.46 8.65 15.52 8.41 15.41C6.82 14.67 5.84 12.38 5.84 10.55C5.84 7.64 7.95 5 12.28 5C15.77 5 18.48 7.49 18.48 10.82C18.48 14.28 16.3 17.09 13.27 17.09C12.26 17.09 11.31 16.56 10.98 15.93L10.43 18.03C10.23 18.8 9.69 19.76 9.3 20.38C10.15 20.64 11.06 20.78 12 20.78C16.84 20.78 20.78 16.84 20.78 12C20.78 7.16 16.84 4.5 12 4.5Z" fill="white"/>
    </svg>`
  },
  {
    id: 'capcut',
    name: 'CapCut',
    category: 'diseno',
    categoryLabel: 'Diseño & Creatividad',
    badge: 'Edición de Video & IA',
    desc: 'Edición audiovisual dinámica, subtitulado automático inteligente y producción de contenido vertical para redes.',
    color: '#00F0FF',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <rect width="24" height="24" rx="5" fill="#0E121A"/>
      <path d="M5.5 8.5C5.5 6.567 7.067 5 9 5L15 5C16.933 5 18.5 6.567 18.5 8.5C18.5 10.433 16.933 12 15 12L9 12C7.067 12 5.5 10.433 5.5 8.5Z" stroke="#00F0FF" stroke-width="1.8" fill="none"/>
      <path d="M5.5 15.5C5.5 13.567 7.067 12 9 12L15 12C16.933 12 18.5 13.567 18.5 15.5C18.5 17.433 16.933 19 15 19L9 19C7.067 19 5.5 17.433 5.5 15.5Z" stroke="#FF2E93" stroke-width="1.8" fill="none"/>
      <path d="M8 8.5L16 15.5M8 15.5L16 8.5" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  }
];
