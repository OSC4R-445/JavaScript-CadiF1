# 🎨 Assignment 2 - Level 2: Interactive Page with Random Backgrounds and Pop-Up Window

### 📂 Main Files
- [`Desaf2-js2/JavaScript/upPagButton.js`](Desaf2-js2/JavaScript/upPagButton.js)
- [`Desaf2-js2/JavaScript/bodyColorChange.js`](Desaf2-js2/JavaScript/bodyColorChange.js)
- [`Desaf2-js2/JavaScript/newQuarterWindow.js`](Desaf2-js2/JavaScript/newQuarterWindow.js)

This project implements interactive features on a webpage, including random background color changes, scroll-to-top functionality, and a pop-up window for login.

---

### Features Implemented
1. **Scroll to Top:**
   - Clicking the "Up" button triggers a confirmation prompt.
   - If confirmed, the page smoothly scrolls to the top.
   - Uses `window.scrollTo()` with smooth behavior.

2. **Random Background Color:**
   - An array of 15 colors is used to generate random gradients.
   - Clicking anywhere on the page changes the background to a linear gradient of 5 random colors.
   - Uses `Math.random()` to select colors.

3. **Login Pop-Up Window:**
   - Clicking "Iniciar Sesión" in the navigation bar opens a new window.
   - The window displays a login form with "Close" and "Redirect" buttons.
   - The pop-up window covers a quarter of the screen size, regardless of the device.

4. **Event Management:**
   - Uses `stopPropagation()` to prevent parent element click events from triggering when child elements are clicked.
   - Ensures only the intended event is fired.

---

### 📝 Additional Notes
- Ensures responsive design for the login pop-up by dynamically calculating the window size.
- The random background feature uses linear gradients to enhance visual appeal.
- Validates user interaction to avoid accidental actions.
