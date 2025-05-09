# 🎨 Asignación 2 - Nivel 2: Página Interactiva con Fondos Aleatorios y Ventana Emergente

### 📂 Archivos Principales
- [`Desaf2-js2/JavaScript/upPagButton.js`](Desaf2-js2/JavaScript/upPagButton.js)
- [`Desaf2-js2/JavaScript/bodyColorChange.js`](Desaf2-js2/JavaScript/bodyColorChange.js)
- [`Desaf2-js2/JavaScript/newQuarterWindow.js`](Desaf2-js2/JavaScript/newQuarterWindow.js)

Este proyecto implementa características interactivas en una página web, incluyendo cambios aleatorios de fondo, desplazamiento hacia arriba y una ventana emergente para iniciar sesión.

---

### Funcionalidad Implementada
1. **Desplazamiento hacia Arriba:**
   - Al hacer clic en el botón "Subir", se muestra una confirmación.
   - Si se acepta, la página se desplaza suavemente hacia el inicio.
   - Utiliza `window.scrollTo()` con desplazamiento suave.

2. **Color de Fondo Aleatorio:**
   - Utiliza un arreglo de 15 colores para generar gradientes aleatorios.
   - Al hacer clic en cualquier parte de la página, el fondo cambia a un gradiente lineal de 5 colores aleatorios.
   - Utiliza `Math.random()` para seleccionar colores.

3. **Ventana Emergente de Inicio de Sesión:**
   - Al hacer clic en "Iniciar Sesión" en la barra de navegación, se abre una nueva ventana.
   - La ventana muestra un formulario de inicio de sesión con botones para "Cerrar" y "Redireccionar".
   - La ventana emergente ocupa una cuarta parte de la pantalla, independientemente del dispositivo.

4. **Gestión de Eventos:**
   - Utiliza `stopPropagation()` para evitar que los clics en elementos hijos activen eventos en elementos padres.
   - Garantiza que solo se dispare el evento esperado.

---

### 📝 Notas Adicionales
- La ventana emergente de inicio de sesión se ajusta automáticamente al tamaño de la pantalla.
- El fondo aleatorio mejora la experiencia visual mediante gradientes lineales.
- La interacción del usuario está validada para evitar acciones no deseadas.
