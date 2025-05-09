let nombres = ["articulo1", "articulo2", "articulo3"];
let cantidades = [1, 5, 10];

function adicionaOSustrae(nombre, cantidad, accion) {
    let i = nombres.indexOf(nombre);

    if (i !== -1) {
        if (accion === "adicionar") {
            cantidades[i] += cantidad;
        } else if (accion === "sustraer") {
            cantidades[i] -= cantidad;
        }
    } else {
        console.log("Nombre no encontrado");
    }
}

function realizarAccion(controller) {
    let nombre = prompt("Ingrese el nombre del artículo:");
    if (!nombre || !nombres.includes(nombre)) {
        console.log("Nombre no válido, debe ser uno de los siguientes: " + nombres.join(", "));
        return;
    }

    let cantidad2 = parseInt(prompt("Ingrese la cantidad:"));
    if (isNaN(cantidad2) || cantidad2 <= 0) {
        console.log("Cantidad no válida, debe ser un número mayor a 0");
        return;
    }

    adicionaOSustrae(nombre, cantidad2, controller);
}

function mostrarInformacionArticulos(event) {
    if (event.target !== event.currentTarget) {
        return;
    }

    let info = "";
    for (let i = 0; i < nombres.length; i++) {
        info += `nombre: ${nombres[i]}; cantidad: ${cantidades[i]}\n`;
    }

    alert(info);
}