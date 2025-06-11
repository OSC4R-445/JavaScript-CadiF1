# 🔐 Asignación 3 - Nivel 4: Autenticación con JavaScript y SweetAlert2

### 📂 Archivos Principales
- [`Desaf3-JS4/index.html`](Desaf3-JS4/index.html)
- [`Desaf3-JS4/desafio3_js4.js`](Desaf3-JS4/desafio3_js4.js)

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
   - Para nuevo login/sinup:
      * El usuario inicia sesion / se registra.
      * 10 segundos después, un prompt (sin timer) aparece.
   - Para un usuario ya loggeado:
      * La pagína carga, el usuario es detectado como logged in.
      * 10 segundos después, un prompt (sin timer) aparece.

   - El usuario confirma, entonces el timer de 15 segundos de inactividad inicia.
   - Después de los 15 segundos de inactiviad, un prompt con timer se muestra.
   - Si el usuario no responde en 10 segundos, la sesión se cierra automaticamente.
   - Cualquier interacción reinicia el timer de 15 segundos pero no el de 10 segundos.

5. **Cierre de Sesión**
   - Manual desde el botón "Cerrar sesión".
   - Automático por inactividad o cancelación de la alerta.

---

### 💡 Notas
- Se utiliza `localStorage` para simular una base de datos persistente en el navegador.
- SweetAlert2 mejora la experiencia del usuario en cada interacción.
