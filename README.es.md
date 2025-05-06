# 🎟️ Asignación 2 - Nivel 1: Generador Aleatorio de Compras de Boleto

Este proyecto simula la compra de una entrada de cine usando valores generados aleatoriamente como el día, edad, género y condición de estudiante del comprador.

## 📁 Archivo principal

- [`Desaf2-js1/js/main.js`](Desaf2-js1/js/main.js): Contiene toda la lógica para generar los datos del boleto y aplicar descuentos condicionales.

## ✅ Funcionalidad implementada

1. **Generación aleatoria de datos**  
   - Día de la semana (1–7)  
   - Edad (entre 4 y 100)  
   - Género (true = hombre, false = mujer)  
   - Estudiante (true o false)  
   - Número de ticket (1–31)

2. **Entrada del usuario**  
   - Si el día es miércoles, se pregunta si la película es un preestreno.

3. **Lógica de descuentos**  
   - Lunes: 50% de descuento  
   - Martes: 50% de descuento para estudiantes  
   - Miércoles: 30% de recargo si es preestreno  
   - Jueves: 30% de descuento para mujeres  
   - Viernes a domingo: 20% de descuento para menores de 8 años  
   - Cualquier día excepto lunes/jueves: 40% de descuento para mayores de 60  
   - Si el número del ticket es 21: entrada gratuita

4. **Salida**  
   - Resumen mostrado con `console.table()`  
   - Se muestran alertas con el costo final y estado de preestreno (si aplica)

## ⚠️ Errores conocidos

- Se han dejado **dos errores lógicos intencionales** por motivos de evaluación:
  - `if (preEstreno = true && dia === 3)` usa **asignación (`=`)** en lugar de **comparación (`===`)**.
  - `if (genero = false && dia === 4)` también realiza una asignación.

Estas líneas no se comportan como se espera. Los errores están comentados en el archivo JavaScript para su fácil identificación.

## 📝 Notas

- Toda la lógica se ejecuta al cargar el script (salvo el prompt para preestreno).
- El código conserva nombres de variables y etiquetas en español, pero los comentarios fueron añadidos en inglés para mayor claridad.