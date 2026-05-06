// Typed.js
new Typed('#typed', {
    strings: ['Ingeniero en Sistemas Computacionales', 'Apasionado por la Criptografía', 'Backend Developer', 'Estudiante ESCOM'],
    typeSpeed: 55,
    backSpeed: 35,
    loop: true,
    cursorChar: '_'
});

// Rejilla de Cardano
let holes = [[1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 1]];
const gridEl = document.getElementById('cardanoGrid');

function renderGrid() {
    if (!gridEl) return;
    gridEl.innerHTML = '';
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell' + (holes[i][j] ? ' hole' : '');
            cell.addEventListener('click', (e) => {
                e.stopPropagation();
                holes[i][j] = holes[i][j] ? 0 : 1;
                renderGrid();
            });
            gridEl.appendChild(cell);
        }
    }
}

if (gridEl) {
    renderGrid();
    
    const rotarBtn = document.getElementById('rotarRejilla');
    if (rotarBtn) {
        rotarBtn.onclick = () => {
            const rotated = Array(4).fill().map(() => Array(4).fill(0));
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    rotated[j][3 - i] = holes[i][j];
                }
            }
            holes = rotated;
            renderGrid();
        };
    }
}

// Modales
function abrirModal(id) { 
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function cerrarModal(id) { 
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

function abrirFoto(src) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    if (lb && img) {
        img.src = src;
        lb.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function cerrarFoto() {
    const lb = document.getElementById('lightbox');
    if (lb) {
        lb.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

function mostrarLlave() {
    alert("Llave pública RSA disponible próximamente. Por ahora, puedes contactarme por correo.");
}

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { 
        if (entry.isIntersecting) entry.target.classList.add('visible'); 
    });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// Cerrar modales con click fuera
window.onclick = e => {
    if (e.target.classList && e.target.classList.contains('modal')) {
        e.target.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
};