// --- MODALES DE GALERÍAS ---
function abrirModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function cerrarModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
}

// --- LIGHTBOX PARA FOTOS EN GRANDE ---
function abrirFoto(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = src; 
    lightbox.classList.remove('hidden');
}

function cerrarFoto() {
    document.getElementById('lightbox').classList.add('hidden');
}

// Cerrar al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.add('hidden');
    }
    if (event.target.classList.contains('lightbox')) {
        event.target.classList.add('hidden');
    }
}