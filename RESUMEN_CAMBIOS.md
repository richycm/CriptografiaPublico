# 🚀 Bitácora de Transformación y Mejoras del Portafolio
**Portafolio Profesional de Ricardo Carmona Martínez**  
*Ingeniería en Sistemas Computacionales • ESCOM - IPN*

---

## 📋 Resumen General
Este documento detalla todas las modificaciones, optimizaciones, adiciones criptográficas, rediseño estético y correcciones técnicas realizadas para transformar el portafolio en una experiencia interactiva de nivel internacional, inspirada en la arquitectura de interacción y diseño de Dennis Snellenberg.

---

## 🎨 1. Rediseño Visual & Experiencia de Usuario (UI/UX)
- **Estética Oscura de Alta Gama (Dark Mode Premium):**
  - Paleta de color curada con fondo profundo (`#0E1318`), acentos en oro criptográfico (`#E5A93C`), cian neón (`#00C6FF`) y degradados suaves.
  - Efecto de fondo punteado (*Dotted Grid Pattern*) sutil en el pie de página para darle textura estilo terminal/hacker.
- **Tipografía Editorial:**
  - Integración de fuentes especializadas (`Dennis Sans`, `Editorial New`, `Space Mono` para datos criptográficos y correos).
- **Imagen de Portada (Hero Section):**
  - Integración de la fotografía oficial de Ricardo Carmona con efecto *parallax* interactivo de desplazamiento suave y animación de entrada.
  - Ticker horizontal dinámico con tipografía de gran escala.

---

## 💻 2. Showcase de Proyectos Destacados
- **Lista de Proyectos Clásica y Limpia:**
  - Conservación del formato de lista editorial donde cada proyecto (`Calculadora DES`, `GridMasterPro`, `Calculadora IP VLSM`, `A_MateUWU`, `Creador De Sprites`, `PsicoFocus Mobile`) despliega su categoría, arquitectura y año.
- **Vistas Previas Flotantes (Hover Preview):**
  - Despliegue de capturas reales en formato panorámico (16:10) al pasar el cursor sobre cada elemento de la lista.
  - Eliminación de botones intrusivos sobre las imágenes para apreciar la interfaz completa de cada app.
- **Corrección de Contraste:**
  - Ajuste del título `"PROYECTOS DESTACADOS"` con color oscuro (`#1c1d20`) y tipografía definida para máxima legibilidad contra el fondo claro.

---

## 🔐 3. Criptografía & Esteganografía Interactiva
- **Rejilla Giratoria de Cardano (1550) & Fleissner:**
  - Matriz interactiva $4 \times 4$ que permite rotar 90° paso a paso la rejilla perforada para visualizar en tiempo real cómo se forma y se oculta el mensaje secreto mediante transposición geométrica.
  - Controles interactivos (*Girar 90°*, *Resetear Rejilla*, *Auto-Demo*).
- **Homenaje a Alan Turing & Máquina Enigma (1940):**
  - Creación de un bloque dedicado al descifrado de la máquina Enigma y el nacimiento de la computación moderna en Bletchley Park.
  - Generación de un retrato editorial de Alan Turing perfectamente integrado con la estética del sitio.

---

## 📸 4. Pasatiempos, Momentos & Galerías Fotográficas
- **Estructura Editorial en Grid:**
  - 5 tarjetas con métricas visuales e insignias:
    1. **Amigos & Escuela (ESCOM):** 17 fotografías de vida estudiantil, clases y exposiciones.
    2. **Galería de Fotografía:** 15 fotografías de perspectivas urbanas, arquitectura y noche.
    3. **Deportes & Aire Libre:** 11 fotografías de fútbol y entrenamientos.
    4. **Mis Lecturas:** 6 fotografías de libros de ciencia y literatura formativa.
    5. **Rompecabezas & Speedcubing:** 5 fotografías de cubos de Rubik y acertijos mecánicos.
- **Visor Lightbox Interactivo:**
  - Apertura modal a pantalla completa con zoom al hacer clic sobre cualquier imagen y soporte para cerrar con la tecla `Escape` o clic fuera del modal.

---

## 🔑 5. Llave Pública RSA (2048 bits) Real
- **Verificación Criptográfica:**
  - Extracción y análisis de la llave binaria oficial desde `Llave/mi_clave_publica.pem` (298 bytes con encabezado de longitud Java ASN.1 / X.509 DER).
  - Verificación matemática del módulo $n$ (2048 bits) y exponente público de Fermat $e = 65537$.
- **Integración en el Footer:**
  - Integración armónica y minimalista junto a los enlaces de redes sociales y descarga de CV con enlace directo de descarga para `Llave/mi_clave_publica.pem` e icono de llave cian.

---

## 🌐 6. Redes Sociales & Contacto
- **Píldoras de Correo Electrónico:**
  - Botones ovalados con tipografía monospace (`rcarmonam1900@alumno.ipn.mx` y `ricardocarmonamartinez1iv12@gmail.com`).
- **Barra Unificada de Redes, CV y Llave RSA:**
  - Fila horizontal centrada con **LinkedIn**, **GitHub**, **Facebook**, **Instagram**, **Descargar CV** y **Llave RSA (.pem)**, compartiendo estilos y microinteracciones de hover.
- **Copyright Centrado:**
  - `Ricardo Carmona Martínez © 2026` perfectamente alineado al centro del viewport.

---

## 🛠️ 7. Corrección de Errores & Optimización Técnica
- **Reparación de la Navegación (Locomotive Scroll + GSAP):**
  - Solución del conflicto donde el menú lateral congelaba el motor de scroll. Se conectó la función `scrollToSection` con `scroll.start()` y `scroll.scrollTo()`, permitiendo desplazamiento fluido entre todas las secciones (`#home`, `#about`, `#work`, `#crypto`, `#hobbies`, `#timeline`, `#contact`).
- **Escalado del Menú Lateral (Drawer):**
  - Reducción de la tipografía gigante a un tamaño refinado y equilibrado (`clamp(1.4rem, 2.5vw, 2.1rem)`).
- **Corrección de Dirección del Ticker Hero (Nombre Gigante):**
  - Se calibró la animación de GSAP ScrollTrigger en `js/index-new.js` y Locomotive Scroll en `index.html` (`data-scroll-speed="-4"`) para que el nombre ruede fluidamente hacia la **izquierda** al cargar la página y al hacer scroll hacia abajo, facilitando la lectura natural de izquierda a derecha.
- **Limpieza de Archivos para GitHub Pages:**
  - Eliminación de archivos temporales pesados (`media/`, videos de prueba, respaldos antiguos).
  - Organización modular en carpetas (`CV/`, `Fotografias/`, `Fotos/`, `Llave/`, `MisProyectos/`, `css/`, `fonts/`, `images/`, `js/`).
  - Conservación intacta de la carpeta `nice/` como respaldo.

---

## 📄 8. Actualización de Curriculum Vitae
- **Integración de `Curriculum VITAE.pdf`:**
  - Implementación del documento dentro de la carpeta modular dedicada `CV/Curriculum VITAE.pdf`.
  - Actualización de todos los enlaces de descarga en `index.html` (menú lateral `fixed-nav`, sección de formación `#timeline` y pie de página `#contact`) con ruta `CV/Curriculum%20VITAE.pdf`.
  - Eliminación de la copia duplicada en la raíz del repositorio para mantener la estructura limpia.

---

## 🧹 9. Depuración, Eliminación de Archivos Innecesarios & Optimización
- **Eliminación de la Carpeta de Respaldo `nice/`:**
  - Se eliminó el clon completo del sitio antiguo (`nice/`, 35.61 MB, 303 archivos), reduciendo el peso del repositorio en más del 50%. El historial completo permanece resguardado en Git.
- **Limpieza de Assets Duplicados y Huérfanos en `images/`:**
  - Eliminación de 13 archivos redundantes (~2.2 MB): duplicados de capturas de pantalla de proyectos (`project-amate.*`, `project-des.*`, `project-gridmaster.*`, `project-sprites.*`, `project-vlsm.*`), duplicados de la foto de perfil (`ricardo-avatar.jpeg`, `DSC07033.jpg`) y sobrantes de la plantilla original de Dennis Snellenberg (`meta-image-*.jpg`).
- **Limpieza de Fotografías Huérfanas:**
  - Eliminación de `Fotografias/Yo/Yo.jpg` por no estar enlazada en ninguna sección.
- **Normalización de Rutas para Servidores Web (GitHub Pages / Linux):**
  - Corrección de la carpeta `Fotografias/Fotografía/` a `Fotografias/Fotografia/` (sin tilde) y actualización de las 15 referencias en `index.html` para evitar errores de codificación HTTP (404 Not Found).
- **Limpieza de Llaves RSA y Archivos Huérfanos / Obsoletos:**
  - Eliminación de la llave pública anterior (`Llave/PublicaLlaveRicardo.pem`) y del archivo temporal en la raíz (`mi_clave_publica.pem`), estandarizando la nueva llave en `Llave/mi_clave_publica.pem`.
  - Eliminación del archivo comprimido redundante `MisProyectos/AMateUWU/Proyecto Final.zip` (3.7 MB).
  - Eliminación de archivos de metadatos de editores y notas de diseño (`prepros-6.config` y carpeta `_notes/` con archivos `.mno`).
  - Eliminación de estilos CSS y assets duplicados en subproyectos (`bootstrap.min666.css`, `banner-bgv.png`) y versión anterior del currículum (`CV/CVCMR.pdf`).
- **Validación de Integridad:**
  - Verificación del 100% de los recursos enlazados en `index.html` (scripts, estilos, fuentes, imágenes y descargas), confirmando cero enlaces rotos.

---
*Documento actualizado el 5 de Septiembre de 2026.*


