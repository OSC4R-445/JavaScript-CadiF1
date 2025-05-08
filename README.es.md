# 📚 Asignación 3 - Nivel 1: Calculadora de Ingresos de Vendedores

### 📂 Archivo Principal
- [`Desaf3-js1/js/main.js`](Desaf3-js1/js/main.js)

Este proyecto calcula el ingreso de los vendedores en función de su sueldo base, monto de ventas mensual y un bono de adulto mayor si corresponde.

---

### Funcionalidad Implementada
1. Calcula el número de vendedores a evaluar, según lo proporcione el usuario.
2. Valida los datos ingresados mediante ciclos para asegurar que:
   - Ningún valor numérico sea negativo o cero (excepto el monto de ventas que puede ser cero).
   - La edad sea mayor a cero.
   - El género sea "H" (Hombre) o "M" (Mujer).
3. Determina el porcentaje de comisión por ventas usando una declaración switch:
   - 5% para ventas > 0 y < 75,000.
   - 7% para ventas entre 90,000 y 199,999.
   - 8% para ventas entre 300,000 y 999,999.
   - 10% para ventas >= 1,500,000.
   - 6% para cualquier otro monto.
4. Añade un bono por adulto mayor (40,000 Bs) si:
   - Hombre, edad >= 60.
   - Mujer, edad >= 55.
5. Muestra el ingreso final usando concatenación.

---

### 📝 Notas Adicionales
- El script garantiza una entrada de datos confiable y utiliza ciclos y condiciones para validar correctamente.
- El resultado final muestra el sueldo base, monto de ventas, porcentaje de comisión, bono de adulto mayor y el ingreso total.
