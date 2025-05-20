
// Funcionalidad para Registrar Cliente
const registrarClienteBtn = document.querySelectorAll('.btn-primary')[0];
const listaClientesUl = document.querySelector('#mostrarInformacion .text-primary + ul');

registrarClienteBtn.addEventListener('click', () => {
    const cedula = document.getElementById('cedula').value;
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;

    const infoCliente = `Cédula: ${cedula}, Nombre: ${nombre}, Teléfono: ${telefono}, Dirección: ${direccion}`;

    const nuevoClienteLi = document.createElement('li');
    nuevoClienteLi.textContent = infoCliente;
    listaClientesUl.appendChild(nuevoClienteLi);

    // Limpiar los campos del cliente
    document.getElementById('cedula').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('direccion').value = '';
});

// Funcionalidad para Registrar Venta de Producto
const registrarVentaBtn = document.querySelectorAll('.btn-success')[0];
const tablaProductosTbody = document.querySelector('#mostrarInformacion .table tbody');

registrarVentaBtn.addEventListener('click', () => {
    const codigo = document.getElementById('codig').value;
    const descripcion = document.getElementById('descripcion').value;
    const precio = document.getElementById('precio').value;
    const cantidad = document.getElementById('cantidad').value;

    // Crear el arreglo de datos de la venta
    const venta = {
        codigo: codigo,
        descripcion: descripcion,
        precio: precio,
        cantidad: cantidad
    };

    // Crear una nueva fila para la tabla
    const nuevaFilaTr = document.createElement('tr');
    nuevaFilaTr.innerHTML = `
        <td>${venta.codigo}</td>
        <td>${venta.descripcion}</td>
        <td>${venta.precio}</td>
        <td>${venta.cantidad}</td>
    `;
    tablaProductosTbody.appendChild(nuevaFilaTr);

    // Limpiar los campos del producto 
    document.getElementById('codigo').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('cantidad').value = '';

    // Mostrar el arreglo de venta en la consola (just checkin)
    console.log(venta);
});

// Funcionalidad para eliminar cliente con doble click
listaClientesUl.addEventListener('dblclick', (event) => {
    if (event.target.tagName === 'LI') {
        if (confirm('¿Seguro que desea eliminar este cliente?')) {
            event.target.remove();
        }
    }
});

// Funcionalidad para eliminar producto vendido con doble click
tablaProductosTbody.addEventListener('dblclick', (event) => {
    if (event.target.tagName === 'TD') {
        if (confirm('¿Seguro que desea eliminar este producto vendido?')) {
            event.target.parentElement.remove(); // Eliminar la fila completa
        }
    }
});