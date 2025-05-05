$(document).ready(function() {
    // Ocultar miniaturas (thumbnails) en "Top Categories" al hacer clic
    $('.section.categories .item').on('click', function(event) {
        // Prevenir la navegación predeterminada del enlace
        event.preventDefault();

        // Encontrar el elemento '.thumb' dentro del '.item' clickeado y ocultarlo
        $(this).find('.thumb').hide();
    });


    // Ocultar todo el elemento '.item' en "Most Played" con fadeOut al hacer clic
    $('.section.most-played .item').on('click', function(event) {
        // Prevenir la navegación predeterminada del enlace
        event.preventDefault();

        // Seleccionar el elemento '.item' clickeado y ocultarlo con efecto fadeOut
        $(this).fadeOut();
    });


    // Deslizar hacia arriba el precio en "Trending Games" al hacer clic en el item
    // (excepto si se hace clic en el icono de la bolsa de compras)
    $('.section.trending .item').on('click', function(event) {
        const $target = $(event.target); // Elemento específico donde se hizo clic

        // Verificar si el clic NO fue sobre el icono de la bolsa de compras o su enlace contenedor
        if (!$target.is('i.fa-shopping-bag') && $target.closest('a').find('i.fa-shopping-bag').length === 0) {

            // Prevenir la navegación si se hizo clic en otro enlace dentro del item (como la imagen)
            if ($target.closest('a').length) {
                event.preventDefault();
            }

            // Encontrar el span del precio dentro del .thumb del item clickeado y deslizarlo hacia arriba
            $(this).find('.thumb .price').slideUp();
        }
        // Si se hizo clic en el icono/enlace de la bolsa, este manejador no hace nada.
    });


    // 2. Cambiar fondo a verde y deslizar hacia arriba si se hace clic en la BOLSA DE COMPRAS
    $('.section.trending .item a:has(i.fa-shopping-bag)').on('click', function(event) {
        // Prevenir la navegación predeterminada del enlace de la bolsa
        event.preventDefault();

        // Seleccionar el contenedor '.item' padre del enlace clickeado
        const $item = $(this).closest('.item');

        // Encadenamiento: Cambiar fondo y luego deslizar hacia arriba
        $item.css('background-color', 'green').slideUp(3000); // 3000 milisegundos = 3 segundos
    });


    // Animar los items de "Features" al hacer clic
    $('.features .item').on('click', function(event) {
        // Prevenir la navegación predeterminada del enlace contenedor
        event.preventDefault();

        // Seleccionar el item clickeado
        const $item = $(this);

        // Establecer posición relativa y luego animar
        // (La posición relativa es necesaria para que 'top' y 'left' funcionen)
        $item.css('position', 'relative').animate({
            width: '270px',
            height: '270px',
            top: '-300px', // Mover 300px hacia arriba
            left: '300px'  // Mover 300px hacia la derecha
        }, 1000); // Duración de la animación: 1000ms = 1 segundo (puedes ajustarla)
    });
});
