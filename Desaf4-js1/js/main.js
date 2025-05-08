/**
 * Declaracion de arreglos para medicamentos y precios
 */
let medicamentos = []
let precios =[]

let anotherOne = false
alert("en breve se le va a pedir ingresar el nombre del/los medicamento(s)");
let medcount = 0
do {
    let medplace = 0
    let breaker = false
    let medrepeat = false
    let medpricechange = true
    let medpricechangerep = false

    let medicamento = prompt("Ingresa el nombre del medicamento a registrar\nlleva en la lista: " + medcount) // prompt principal
    while (medicamento == null || !isNaN(medicamento) || medicamento == "" ) {
        breaker = confirm("porfavor ingrese el nombre del medicamento correctamente, \nNo puede estar vacio ni ser un numero\n\nSeguro que quieres continuar registrando medicamentos?"); // para error y break

        if (!breaker) { // loop breaker
            anotherOne = false // rompe el do while
            break
        }

        medicamento = prompt("Ingresa un nombre valido para el medicamento a registrar \n previamente colocaste: " + medicamento)
    }

    if (medicamento != null && isNaN(medicamento) && medicamento != "") {

        //ciclo para encontrar si el medicamento ya existe
        for (let i = 0; i < medicamentos.length; i++) {
            if (medicamento == medicamentos[i]) {
                medpricechangerep = confirm("El medicamento ya existe, esta registrado\ncon el precio de: " + precios[i] + "\nDesea cambiar el precio?") // alert de medicamento ya registrado y confirm para cambio de precio
                medrepeat = true
                medplace = i
            }
        }

        /**
         * Push de medicamento luego de validacion y confirm de ser unico
         */
        if (!medrepeat) {
            medicamentos.push(medicamento)
            medcount++
        }

        if (medpricechange) {
            let precio = prompt("Ingresa el precio del medicamento a registrar")
            while (precio == null || isNaN(precio) || precio == "") {
                alert("porfavor ingrese el precio del medicamento correctamente, \nDebe ser un numero");
    
                precio = prompt("Ingresa un precio valido para el medicamento a registrar \n previamente colocaste: " + precio)
            }

            if (precio != null && !isNaN(precio) && precio != "" && !medpricechangerep) {
                precios.push(precio) // push de precio
            }

            if (precio != null && !isNaN(precio) && precio != "" && medpricechangerep) {
                precios[medplace] = precio // cambio de precio
            }
            
        }

        anotherOne = confirm("Desea registrar otro medicamento?") // confirm para otro medicamento
    }


} while (anotherOne);

for (let i = 0; i < medicamentos.length; i++) {
    console.log(`Nombre medicamento: ${medicamentos[i]}, precio: ${precios[i]}$;`);
}