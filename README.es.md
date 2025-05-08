# 📋 Asignación 4 - Nivel 1: Registro de Medicamentos en Farmacia

### 📂 Archivo Principal
- [`Desaf4-js1/js/main.js`](Desaf4-js1/js/main.js)

Este proyecto gestiona el registro de medicamentos y sus precios en una farmacia utilizando arreglos paralelos y entradas interactivas.

---

### Funcionalidad Implementada
1. Inicializa dos arreglos paralelos: uno para los nombres de los medicamentos y otro para sus precios.
2. Solicita continuamente al usuario el nombre y precio de un medicamento.
   - Utiliza un bucle do...while para permitir múltiples registros.
   - Valida que el nombre del medicamento no esté vacío ni sea un número.
3. Verifica si el medicamento ya está registrado:
   - Si es así, muestra el precio previamente registrado y pregunta si desea actualizarlo.
   - Si no, registra el nuevo medicamento y su precio.
4. Permite al usuario continuar registrando más medicamentos o detenerse.
5. Muestra la lista final de todos los medicamentos registrados y sus precios utilizando un bucle for.

---

### 📝 Notas Adicionales
- El script garantiza que el nombre del medicamento sea una cadena válida y no un número.
- En caso de nombres repetidos, muestra el precio existente y permite la actualización.
- Utiliza la consola para mostrar la lista final de medicamentos y precios.
