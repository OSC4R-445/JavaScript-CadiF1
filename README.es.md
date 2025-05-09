# 💼 Asignación 1 - Nivel 2: Manipulación de Cantidades de Artículos

### 📂 Archivo Principal
- [`Desaf1-js2/script.js`](Desaf1-js2/script.js)

Este proyecto gestiona la adición y sustracción de cantidades de artículos usando arreglos paralelos y elementos HTML interactivos.

---

### Funcionalidad Implementada
1. Inicializa dos arreglos paralelos: uno para los nombres de los artículos y otro para sus cantidades.
   - `nombres = ["articulo1", "articulo2", "articulo3"]`
   - `cantidades = [1, 5, 10]`
2. Implementa la función `adicionaOSustrae`:
   - Recibe el nombre del artículo, la cantidad y la acción (adicionar o sustraer) como parámetros.
   - Encuentra el índice correcto según el nombre y realiza la acción indicada.
3. Utiliza un evento de clic para activar la función `realizarAccion`:
   - Solicita el nombre del artículo y la cantidad.
   - Llama a la función `adicionaOSustrae` para actualizar la cantidad.
4. Muestra la lista de artículos y sus cantidades al hacer clic en el div padre.
   - Evita el burbujeo de eventos desde los divs hijos usando `stopPropagation()`.

---

### 📝 Notas Adicionales
- Utiliza manejo de eventos para diferenciar los clics entre el div padre y los hijos.
- Garantiza la validación de datos al ingresar nombres y cantidades.
- Utiliza `alert` para mostrar la lista de artículos y sus cantidades.
