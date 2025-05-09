function mostrarBienvenida() {
    const nombreUsuario = document.getElementById('nombre').value;

    if (nombreUsuario.trim() !== '') {
        const mensajeBienvenida = `Bienvenido: ${nombreUsuario.trim()}`;

        alert(mensajeBienvenida);
    }
}

document.querySelector('.btn-success').addEventListener('click', mostrarBienvenida);