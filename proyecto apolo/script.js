// 1. Detectamos todos los botones que están dentro de las etiquetas de navegación (nav)
const botonesMisiones = document.querySelectorAll('nav button');
const cuerpoDePagina = document.body;

// 2. Recorremos cada botón para asignarle un detector de eventos "click"
botonesMisiones.forEach(boton => {
    boton.addEventListener('click', function(e) {
        // 3. Pausamos la redirección automática del enlace <a> para que dé tiempo de ver el efecto
        e.preventDefault();
        
        // 4. Conseguimos la dirección URL (href) del enlace que envuelve a este botón
        const destinoUrl = this.closest('a').getAttribute('href');
        
        // 5. Encendemos el glitch global inyectando la clase en el body
        cuerpoDePagina.classList.add('glitch-active');
        
        // 6. Sostenemos el fallo digital en pantalla por 350 milisegundos y luego viajamos a la subpágina
        setTimeout(() => {
            window.location.href = destinoUrl;
        }, 350);
    });
});
