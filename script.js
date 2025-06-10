document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY; // Almacena la última posición de scroll

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY; // Posición de scroll actual

        // Determinar la dirección del scroll
        if (currentScrollY > lastScrollY && currentScrollY > 80) { // Scrolleando hacia abajo y ha pasado un umbral inicial
            navbar.classList.add('hidden'); // Ocultar la navbar
        } else if (currentScrollY < lastScrollY || currentScrollY <= 80) { // Scrolleando hacia arriba o cerca del inicio
            navbar.classList.remove('hidden'); // Mostrar la navbar
        }

        lastScrollY = currentScrollY; // Actualizar la última posición de scroll
    });
});