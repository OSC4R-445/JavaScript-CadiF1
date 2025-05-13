# 🎌 Asignación 4 - Nivel 2: Elementos HTML Dinámicos y Funcionalidad de Búsqueda

### 📂 Archivo Principal
- [`Desaf4-js2/desafio.js`](Desaf4-js2/desafio.js)

Este proyecto crea elementos HTML de forma dinámica y permite filtrar elementos según la entrada del usuario, usando datos de un arreglo predefinido con citas de anime.

---

### Funcionalidad Implementada
1. **Creación Dinámica de Elementos:**
   - Utiliza la función `crearElementos` para generar elementos HTML (título, personaje, cita) para cada objeto en el arreglo de datos.
   - Los elementos creados se añaden al contenedor principal.

2. **Función de Búsqueda de Citas:**
   - Emplea una función anónima para verificar si existe una cita en el arreglo de datos.
   - Si se encuentra la cita, el mensaje "No Encontrado" se oculta; de lo contrario, se muestra.

3. **Asociación de Eventos:**
   - Utiliza `addEventListener` para vincular eventos de clic a los botones correspondientes.

4. **Manejo de Errores:**
   - Evita el procesamiento de datos inválidos y muestra un mensaje de "No Encontrado" cuando es necesario.

---

### 📝 Problemas Conocidos
- **Problema en el Requerimiento 4:**  
  - El mensaje **"No Encontrado"** a veces se muestra aunque el dato esté presente.  
  - El problema surge porque el método `some()` devuelve `true` al primer elemento coincidente, pero el mensaje no siempre se actualiza correctamente.  

- **Problema en el Requerimiento 5:**  
  - La función `filter()` no siempre genera el arreglo correcto de elementos coincidentes.  
  - Esto puede deberse a problemas en la lógica de comparación o en el manejo del campo de búsqueda.  

---

### 📝 Notas Adicionales
- El proyecto implementa funciones flecha y funciones anónimas para mejorar la legibilidad y modularidad del código.
- Utiliza renderizado condicional para mostrar los resultados o un mensaje cuando no se encuentran coincidencias.
