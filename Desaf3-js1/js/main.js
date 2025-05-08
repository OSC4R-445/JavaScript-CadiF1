/**
 * Declaracion de variables
 */
let sueldoBase, montoVentas, bono, porcentajeComision, bonoAdultoMayor, ingreso, edad, genero, cantidadVendedores ;

/**
 * Texto de bienvenida
 */
    alert("Bienvenido este es el sistema para ingreso de vendedores");
    alert("A continuacion se le va a pedir que ingrese los datos de los vendedores");

/**
 * Entrada de datos
 */
// Ingreso de cantidad de vendedores
do {
    cantidadVendedores = parseInt(prompt("Ingrese la cantidad total de vendedores: "));
    if (isNaN(cantidadVendedores) || cantidadVendedores <= 0) {
        alert("Por favor, ingrese una cantidad de vendedores válida. Usted ingresó: " + cantidadVendedores);
    }
} while (isNaN(cantidadVendedores) || cantidadVendedores <= 0);

/**
 * Proceso de datos y salida 
 * con ciclo for, while y switch para que sea serio y asegurar la entrada de datos correcta 
 * ("ya no convulsiona ni crashea el programa, no se cuelga, no se queda en un bucle infinito y no se cierra inesperadamente, 
 * pero yo aun lo hacia si mientras lo comentaba... pues olvide que era cada cosa *suspira*")
 */
for (let i = 1; i <= cantidadVendedores; i++) {
    alert("Ingrese los datos del vendedor " + i);

    // Ingreso del sueldo base
    sueldoBase = parseFloat(prompt("Ingrese el sueldo base: "));
    while (isNaN(sueldoBase) || sueldoBase <= 0) {
        sueldoBase = parseFloat(prompt("Por favor, ingrese un sueldo base válido. "));
    }

    // Ingreso del monto de ventas
    montoVentas = parseFloat(prompt("Ingrese el monto de ventas del mes: "));
    while (isNaN(montoVentas) || montoVentas < 0) {
        montoVentas = parseFloat(prompt("Por favor, ingrese un monto de ventas válido: "));
    }

    // Ingreso de la edad
    edad = parseInt(prompt("Ingrese la edad: "));
    while (isNaN(edad) || edad <= 0) {
        edad = parseInt(prompt("Por favor, ingrese una edad válida: "));
    }

    // Ingreso del género
    genero = prompt("Ingrese el genero (M o H): ").toUpperCase();
    while (genero !== "M" && genero !== "H") {
        genero = prompt("Por favor, ingrese un género válido (M o H): ").toUpperCase();
    }

    /**
     * Ciclo con switch para calcular el porcentaje de comision
     */
    switch (true) {
        //5%, 7%, 8%, 10%, 6%
        case (montoVentas > 0 && montoVentas < 75000):
            porcentajeComision = 5; //5% 0-75001
            break;
        case (montoVentas >= 90000 && montoVentas < 200000):
            porcentajeComision = 7; //7% 90000-200001
            break;
        case (montoVentas >= 300000 && montoVentas < 1000000):
            porcentajeComision = 8; //8% 300000-1000001
            break;
        case (montoVentas >= 1500000):
            porcentajeComision = 10; //10% >=1500000
            break;
        default:
            porcentajeComision = 6; //6% cualquier otro monto fuera de rango
            break;
    }
    //fin del switch

    // Calculo del bono por adulto mayor
    if ((genero === "M" && edad >= 55) || (genero === "H" && edad >= 60)) {
        bonoAdultoMayor = 40000;
    } else {
        bonoAdultoMayor = 0;
    }

    // Calculo del ingreso, todos los datos ya estan parseados 
    ingreso = sueldoBase + (montoVentas * porcentajeComision / 100) + bonoAdultoMayor;

    // Salida de datos (yippy. Alfin codigo bonito y medianamente ordenado por mi parte)
    alert(`El ingreso del vendedor ${i}, esta basado en su:\nsueldo base: ${sueldoBase}, monto de sus ventas: ${montoVentas}, el porcentaje de comision por ventas: ${porcentajeComision}%, bono por adulto mayor: ${bonoAdultoMayor}\n y su ingreso total es: ${ingreso}`);
}
alert("ya se mostraron todos los vendedores");
alert("FIN DEL PROGRAMA");