# 🔐 Asignación 3 - Nivel 4: Autenticación con JavaScript y SweetAlert2

### 📂 Archivos Principales
- [`lvl-4_assign-3/index.html`](lvl-4_assign-3/index.html)
- [`lvl-4_assign-3/desafio3_js4.js`](lvl-4_assign-3/desafio3_js4.js)

---

### 📌 Descripción
Este proyecto implementa un sistema de **autenticación simple** con JavaScript que permite:
- Registro de usuarios.
- Inicio y cierre de sesión.
- Manejo de sesiones con almacenamiento local (`localStorage`).
- Alertas y confirmaciones interactivas con **SweetAlert2**.
- Control de inactividad y cierre automático tras 15 segundos sin interacción.

---

### 🛠️ Funcionalidad Implementada

1. **Modal de Registro e Inicio de Sesión**
   - Registro con nombre, usuario, correo y contraseña.
   - Inicio de sesión validando usuario y contraseña.
   - Validación contra datos existentes en `localStorage`.

2. **Gestión de Usuarios**
   - Datos iniciales precargados si no hay usuarios registrados.
   - Al registrarse, se guarda el nuevo usuario en `localStorage`.

3. **Persistencia de Sesión**
   - Si un usuario ya está logueado, se mantiene la sesión activa.
   - Mensaje de bienvenida personalizado.

4. **Control de Inactividad**
   - A los 10 segundos de inactividad, aparece una alerta de confirmación.
   - Si no hay respuesta en 10 segundos, se cierra la sesión automáticamente.
   - Cualquier interacción reinicia el temporizador.

5. **Cierre de Sesión**
   - Manual desde el botón "Cerrar sesión".
   - Automático por inactividad o cancelación de la alerta.

---

### 💡 Notas
- Se utiliza `localStorage` para simular una base de datos persistente en el navegador.
- SweetAlert2 mejora la experiencia del usuario en cada interacción.
