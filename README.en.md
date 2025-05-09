# ⏳ Assignment 3 - Level 2: Page Load Spinner and Welcome Message

### 📂 Main Files
- [`Desaf3-js2/spinner.js`](Desaf3-js2/spinner.js)
- [`Desaf3-js2/welcome.js`](Desaf3-js2/welcome.js)

This project displays a loading spinner while the page is loading and shows a welcome message when the user enters their name.

---

### Features Implemented
1. **Page Load Spinner:**
   - Uses the `DOMContentLoaded` event to call `addSpinner()`, displaying the loading spinner.
   - Once the page is fully loaded, the `window.onload` event calls `quitSpinner()` to hide the spinner.

2. **Spinner Control Functions:**
   - `addSpinner()`: Sets the spinner's display to `flex`.
   - `quitSpinner()`: Sets the spinner's display to `none`.

3. **User Welcome Message:**
   - Captures the user's name from the input field.
   - Validates that the input is not empty before displaying the message.
   - Uses a click event listener on the "Send" button to trigger the greeting.

---

### 📝 Additional Notes
- The spinner enhances user experience by indicating that the content is being loaded.
- The welcome message ensures that only non-empty inputs trigger a greeting.
- The use of `DOMContentLoaded` and `window.onload` ensures the proper timing for displaying and hiding the spinner.
