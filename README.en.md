# 🔐 Assignment 3 - Level 4: JavaScript Authentication with SweetAlert2

### 📂 Main Files
- [`Desaf3-JS4/index.html`](Desaf3-JS4/index.html)
- [`Desaf3-JS4/desafio3_js4.js`](Desaf3-JS4/desafio3_js4.js)

---

### 📌 Description
This project implements a **simple authentication system** using vanilla JavaScript that allows:
- User registration.
- Login and logout.
- Session persistence via `localStorage`.
- Interactive dialogs with **SweetAlert2**.
- Inactivity timeout with auto-logout after 15 seconds.

---

### 🛠️ Features Implemented

1. **Login and Registration Modals**
   - Register with name, username, email, and password.
   - Login with username and password validation.
   - Prevents duplicate usernames or emails.

2. **User Management**
   - Initial user data is loaded if `localStorage` is empty.
   - New users are saved directly to `localStorage`.

3. **Session Persistence**
   - Keeps users logged in across page reloads.
   - Displays a personalized welcome message.

4. **Inactivity Timeout**
   - After 15 seconds of inactivity, a confirmation prompt is shown.
   - If the user does not respond in 10 seconds, session is closed automatically.
   - Any interaction resets the inactivity timer.

5. **Logout Functionality**
   - Manual via "Logout" button.
   - Automatic after inactivity or alert cancellation.

---

### 💡 Notes
- Uses `localStorage` as a mock persistent user database.
- SweetAlert2 provides a smooth and responsive user interaction experience.
