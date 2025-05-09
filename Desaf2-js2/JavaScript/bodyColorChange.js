// Arreglo con 15 colores
let c = [
    'red', 'blue', 'green', 'yellow', 'purple',
    'orange', 'pink', 'brown', 'black', 'white',
    'gray', 'cyan', 'magenta', 'lime', 'indigo'
];

// Función para obtener un color aleatorio del arreglo
function obtenerColorAleatorio() {
    const i = Math.floor(Math.random() * c.length);
    return c[i];
}

// Función para cambiar el fondo del body
function cambiarFondo() {
    const a = obtenerColorAleatorio();
    const b = obtenerColorAleatorio();
    const c = obtenerColorAleatorio();
    const d = obtenerColorAleatorio();
    const e = obtenerColorAleatorio();

    const gradiente = `linear-gradient(to right bottom, ${a}, ${b}, ${c}, ${d}, ${e})`;
    document.body.style.background = gradiente;
}

function cambioDeFondo(e) {
    e.stopPropagation();
    cambiarFondo();
}
// Asignar el evento click al body