// Random variables
var dia;
var genero;
var edad;
var estudiante;
var numTicket;
var costoTicket;
var descuentoDia;
var descuentoEdad;
var descuentoWomen;
var descuentoMagico;
var descuentoMagico2;

// User input variables
var preEstreno;
var preEstrenoIn;

// Random assignments
edad = parseFloat((Math.random() * (100 - 4) + 4).toFixed(0)); // Age between 4 and 100
numTicket = parseFloat((Math.random() * (31 - 1) + 1).toFixed(0)); // Ticket number between 1 and 31
dia = parseFloat((Math.random() * (7 - 1) + 1).toFixed(0)); // Day of the week (1-7)
genero = Math.random() < 0.5; // true = male, false = female
estudiante = Math.random() < 0.5; // true = student, false = not student

// Default values
costoTicket = 10;
descuentoDia = 1;
descuentoEdad = 1;
descuentoMagico = false;
descuentoMagico2 = 1;
descuentoWomen = 1;

// Check for pre-release on Wednesday (3)
if (dia === 3) {
    preEstrenoIn = prompt("preestreno? s/n"); 
    if (preEstrenoIn === "s") {
        preEstreno = true;
    } else {
        preEstreno = false;
    }
} else {
    preEstreno = false;
}

// Discount logic

if (dia === 1) {
    // Monday: 50% discount
    descuentoDia = 0.5;
}

if (dia === 2 && estudiante) {
    // Tuesday: 50% discount for students
    descuentoDia = 0.5;
}
// IMPORTANTE -OSCAR: ERROR: se uso asignacion (=) en lugar de la comparacion (===)
// IMPORTANT -OSC4R: ERROR: used assignment (=) instead of comparison (===)
// This always assigns true to preEstreno and breaks the intended logic.
if (preEstreno = true && dia === 3) {
    descuentoDia = 1.3;
}
// IMPORTANTE -OSCAR: ERROR: otra vez, aqui se usa una asignacion, no comparacion.
// IMPORTANT -OSC4R:  ERROR: Again, this is an assignment, not a comparison.
// This will always set genero to false and apply the discount.
if (genero = false && dia === 4) {
    descuentoWomen = 0.7;
}

if (edad < 8 && dia > 4) {
    // Friday to Sunday: 20% discount for children under 8
    descuentoEdad = 0.8;
}

if (edad > 60 && dia !== 1 && dia !== 4) {
    // Discount for seniors (not valid on Monday or Thursday)
    descuentoEdad = 0.6;
}

if (numTicket === 21) {
    // Special ticket number: free entry
    descuentoMagico = true;
    descuentoMagico2 = 0;
}

// Final cost calculation
costoTicket *= descuentoDia * descuentoEdad * descuentoWomen * descuentoMagico2;

// Translate numeric day to string (Spanish names)
if (dia === 1) {
    dia = "lunes";
} else if (dia === 2) {
    dia = "martes";
} else if (dia === 3) {
    dia = "miercoles";
} else if (dia === 4) {
    dia = "jueves";
} else if (dia === 5) {
    dia = "viernes";
} else if (dia === 6) {
    dia = "sabado";
} else {
    dia = "domingo";
}

// Convert gender to readable format
if (genero) {
    genero = "H"
} else {
    genero = "M"
}
// couldn't have used at the moment: genero = genero ? "H" : "M";

// Convert student status
if (estudiante) {
    estudiante = "Es estudiante"
} else {
    estudiante = "No es estudiante"
}

// Round final ticket cost
costoTicket = parseFloat(costoTicket.toFixed(0));

// Output table in console
console.table({
    "numero de ticket": numTicket,
    "dia de la funcion": dia,
    "edad": edad,
    "genero": genero,
    "estudiante": estudiante,
    "peli pre estreno": preEstreno,
    "costo de entrada": costoTicket
});

// Show cost in alert dialogs
alert("el costo de la entrada");
alert(costoTicket);

if (preEstreno) {
    alert("miercoles de preestreno");
    alert(preEstrenoIn);
}

//Error Comments added on may 6 of 25 by the author