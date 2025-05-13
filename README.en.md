# 🎌 Assignment 4 - Level 2: Dynamic HTML Elements and Search Functionality

### 📂 Main File
- [`Desaf4-js2/desafio.js`](Desaf4-js2/desafio.js)

This project dynamically creates and filters HTML elements based on user input, using data from a predefined array of anime quotes.

---

### Features Implemented
1. **Dynamic Element Creation:**
   - Uses the `crearElementos` function to generate HTML elements (title, character, quote) for each object in the data array.
   - Appends the created elements to the parent container.

2. **Quote Search Functionality:**
   - Uses an anonymous function to check if a given quote exists in the data array.
   - If the quote is found, the message "Not Found" is hidden; otherwise, it is displayed.

3. **Event Binding:**
   - Uses `addEventListener` to bind click events to buttons.

4. **Error Handling:**
   - Prevents invalid data from being processed and displays a "Not Found" message when appropriate.

---

### 📝 Known Issues
- **Problem in Requirement 4:**  
  - The **"Not Found"** message sometimes appears even when the data is present.  
  - The issue arises because the `some()` method returns `true` as soon as it finds the first matching element, but the message does not always update correctly.  

- **Problem in Requirement 5:**  
  - The `filter()` function does not always generate the correct list of matching elements.  
  - This may be due to inconsistencies in the comparison logic or how the search input is handled.  

---

### 📝 Additional Notes
- The project implements arrow functions and anonymous functions to enhance code readability and modularity.
- Uses conditional rendering to display results or a message when no data is found.
