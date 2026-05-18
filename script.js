// ===== script.js =====

// Typed.js Animation
new Typed('#typed', {
    strings: ['Ingeniero en Sistemas Computacionales', 'Never stop learning 🚀', 'Backend Architect', 'Cazador de bugs 👾', 'Amante del conocimiento 📚'],
    typeSpeed: 55,
    backSpeed: 35,
    loop: true,
    cursorChar: '_'
});

// ========== REJILLA DE CARDANO (interactiva) ==========
let holes = [[1,0,1,0],[0,1,0,1],[1,0,1,0],[0,1,0,1]];
const gridTech = document.getElementById('cardanoGridTech');

function renderGridTech() {
    if(!gridTech) return;
    gridTech.innerHTML = '';
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell-tech' + (holes[i][j] ? ' hole' : '');
            cell.addEventListener('click', (e) => {
                e.stopPropagation();
                holes[i][j] = holes[i][j] ? 0 : 1;
                renderGridTech();
            });
            gridTech.appendChild(cell);
        }
    }
}

if(gridTech) {
    renderGridTech();
    const rotarBtn = document.getElementById('rotarRejillaTech');
    if(rotarBtn) {
        rotarBtn.onclick = () => {
            const rotated = Array(4).fill().map(() => Array(4).fill(0));
            for(let i = 0; i < 4; i++) {
                for(let j = 0; j < 4; j++) {
                    rotated[j][3 - i] = holes[i][j];
                }
            }
            holes = rotated;
            renderGridTech();
        };
    }
}

// ========== GALERÍAS DE IMÁGENES (datos) ==========
const galerias = {
    fotoModal: [
        'Fotografias/Fotografía/Foto1.jpg',
        'Fotografias/Fotografía/foto2.jpg',
        'Fotografias/Fotografía/foto3.jpg',
        'Fotografias/Fotografía/foto4.jpg',
        'Fotografias/Fotografía/foto5.jpg',
        'Fotografias/Fotografía/foto6.jpg',
        'Fotografias/Fotografía/foto7.jpg',
        'Fotografias/Fotografía/foto8.jpg',
        'Fotografias/Fotografía/foto9.jpg',
        'Fotografias/Fotografía/foto10.jpeg',
        'Fotografias/Fotografía/foto11.jpeg',
        'Fotografias/Fotografía/foto12.jpeg',
        'Fotografias/Fotografía/imagen10.jpg',
        'Fotografias/Fotografía/imagen11.jpg',
        'Fotografias/Fotografía/imagen12.jpg'
    ],
    deportesModal: [
        'Fotografias/Deportes/Foto1.jpeg',
        'Fotografias/Deportes/foto2.jpeg',
        'Fotografias/Deportes/foto3.jpeg',
        'Fotografias/Deportes/foto4.jpeg',
        'Fotografias/Deportes/foto5.jpeg',
        'Fotografias/Deportes/foto6.jpeg',
        'Fotografias/Deportes/foto7.jpeg',
        'Fotografias/Deportes/foto8.jpeg',
        'Fotografias/Deportes/foto9.jpeg',
        'Fotografias/Deportes/foto10.jpeg',
        'Fotografias/Deportes/foto11.jpeg'
    ],
    librosModal: [
        'Fotografias/libros/foto1.jpeg',
        'Fotografias/libros/foto2.jpeg',
        'Fotografias/libros/foto3.jpeg',
        'Fotografias/libros/foto4.jpeg',
        'Fotografias/libros/foto5.jpeg',
        'Fotografias/libros/foto6.jpeg'
    ],
    rubikModal: [
        'Fotografias/Rompecabezas/foto1.jpg',
        'Fotografias/Rompecabezas/foto2.jpg',
        'Fotografias/Rompecabezas/foto3.jpg',
        'Fotografias/Rompecabezas/foto4.jpg',
        'Fotografias/Rompecabezas/foto5.jpg'
    ]
};

// Función para cargar imágenes en cada galería
function cargarGaleria(modalId, imagenes) {
    const contenedor = document.querySelector(`#${modalId} .gallery-grid`);
    if(!contenedor) return;
    contenedor.innerHTML = '';
    imagenes.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Gallery image';
        img.onclick = () => abrirLightbox(src);
        contenedor.appendChild(img);
    });
}

// Cargar todas las galerías
for (const [id, arr] of Object.entries(galerias)) {
    cargarGaleria(id, arr);
}

// ========== FUNCIONES DE MODALES ==========
function abrirModal(id) {
    const modal = document.getElementById(id);
    if(modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function cerrarModal(id) {
    const modal = document.getElementById(id);
    if(modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// ========== LIGHTBOX ==========
function abrirLightbox(src) {
    const lb = document.getElementById('lightboxGlobal');
    const img = document.getElementById('lightboxImgGlobal');
    if(lb && img) {
        img.src = src;
        lb.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function cerrarLightbox() {
    const lb = document.getElementById('lightboxGlobal');
    if(lb) {
        lb.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// ========== LLAVE RSA ==========
function descargarLlave() { 
    const public_key = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAq/RD+YPjnbUueFupIlWQ
qE6Jb6IHBWA8nf9oFUDr75UftbEK0gOt/w5WKVU0ABcxOR8M0OCFWgEV9iqgyCnZ
kh0xPNrQfjYMMCzfvdqesLVbsYO7cRaWgplBpzgCUr8JVhLeUrihXH7SJd/N9SjZ
NViIkIa9uimr2xklnNbgVVExQoTO+Tf6y1y7UhjxCHcfy8IBYXvu8i15ymCRs3Fv
K9+xjW/fQbBtLImNkaZc1vO/Yy0NuUyp6S98xyQgs/JioGGj+9AnlVs2qKI7JmTZ
LcE5dMCLpf20O/cbwkukJIXMHzvmm8uBuRD5jjg9iZIiLZMHumU7omWtT9XsnxPG
mwIDAQAB
-----END PUBLIC KEY-----`;

    const blob = new Blob([public_key], { type: 'application/x-pem-file' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'public_key.pem';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}


// ========== SCROLL REVEAL (Intersection Observer) ==========
const reveals = document.querySelectorAll('.reveal-premium');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

reveals.forEach(el => observer.observe(el));

// ========== CERRAR MODAL CON CLICK FUERA ==========
window.onclick = (e) => {
    if(e.target.classList && e.target.classList.contains('modal-cinema')) {
        e.target.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
    if(e.target.classList && e.target.classList.contains('lightbox-premium')) {
        cerrarLightbox();
    }
};

// ========== PARTÍCULAS CANVAS (efecto futurista) ==========
const canvas = document.getElementById('particle-canvas');
let ctx = canvas ? canvas.getContext('2d') : null;
let particles = [];

function resizeCanvas() {
    if(canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.25;
        this.vy = (Math.random() - 0.5) * 0.15;
        this.size = Math.random() * 1.5 + 0.5;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        if(this.x < 0) this.x = canvas.width;
        if(this.x > canvas.width) this.x = 0;
        if(this.y < 0) this.y = canvas.height;
        if(this.y > canvas.height) this.y = 0;
    }
    draw() {
        if(!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 210, 255, ${this.size * 0.2})`;
        ctx.fill();
    }
}

// Inicializar partículas
for(let i = 0; i < 150; i++) {
    particles.push(new Particle());
}

function animateParticles() {
    if(!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}

if(canvas && ctx) {
    animateParticles();
}

// ========== GSAP ANIMACIONES ADICIONALES ==========
gsap.registerPlugin(ScrollTrigger);

// Animación de entrada para elementos
gsap.fromTo('.avatar-tech', 
    { scale: 0.9, opacity: 0 }, 
    { scale: 1, opacity: 1, duration: 1.2, delay: 0.3, ease: "back.out(0.5)" }
);

gsap.fromTo('.hero-content > div:first-child', 
    { x: -50, opacity: 0 }, 
    { x: 0, opacity: 1, duration: 1, delay: 0.2 }
);

// Parallax suave para elementos
gsap.utils.toArray('.glass-panel, .hobby-card-future, .key-hologram').forEach(el => {
    gsap.fromTo(el, 
        { y: 30, opacity: 0 }, 
        { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                end: 'top 60%',
                scrub: 0.5
            }
        }
    );
});

// ========== EXPOSICIÓN GLOBAL DE FUNCIONES ==========
window.abrirModal = abrirModal;
window.cerrarModal = cerrarModal;
window.abrirLightbox = abrirLightbox;
window.cerrarLightbox = cerrarLightbox;
window.descargarLlave = descargarLlave;