# ⏳ Asignación 3 - Nivel 2: Spinner de Carga y Mensaje de Bienvenida

### 📂 Archivos Principales
- [`Desaf3-js2/spinner.js`](Desaf3-js2/spinner.js)
- [`Desaf3-js2/welcome.js`](Desaf3-js2/welcome.js)

Este proyecto muestra un spinner de carga mientras la página se está cargando y muestra un mensaje de bienvenida al ingresar el nombre del usuario.

---

### Funcionalidad Implementada
1. **Spinner de Carga:**
   - Utiliza el evento `DOMContentLoaded` para llamar a `addSpinner()` y mostrar el spinner.
   - Una vez que la página está completamente cargada, el evento `window.onload` llama a `quitSpinner()` para ocultarlo.

2. **Funciones de Control del Spinner:**
   - `addSpinner()`: Cambia el estilo del spinner a `flex`.
   - `quitSpinner()`: Cambia el estilo del spinner a `none`.

3. **Mensaje de Bienvenida al Usuario:**
   - Captura el nombre del usuario desde el campo de entrada.
   - Valida que el campo no esté vacío antes de mostrar el mensaje.
   - Utiliza un listener en el botón "Enviar" para mostrar el saludo.

---

### 📝 Notas Adicionales
- El spinner mejora la experiencia del usuario indicando que la página está cargando.
- El mensaje de bienvenida solo se muestra si el campo contiene texto, evitando mensajes innecesarios.
- El uso combinado de `DOMContentLoaded` y `window.onload` garantiza el momento adecuado para mostrar y ocultar el spinner.
