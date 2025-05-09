# 💼 Assignment 1 - Level 2: Article Quantity Manipulation

### 📂 Main File
- [`Desaf1-js2/script.js`](Desaf1-js2/script.js)

This project manages the addition and subtraction of article quantities using parallel arrays and interactive HTML elements.

---

### Features Implemented
1. Initializes two parallel arrays: one for article names and one for their quantities.
   - `nombres = ["articulo1", "articulo2", "articulo3"]`
   - `cantidades = [1, 5, 10]`
2. Implements the function `adicionaOSustrae`:
   - Takes the article name, quantity, and action (add or subtract) as parameters.
   - Finds the correct index based on the name and performs the specified action.
3. Uses a click event to trigger the function `realizarAccion`:
   - Prompts the user for the article name and quantity.
   - Calls the `adicionaOSustrae` function to update the quantity.
4. Displays the list of articles and their quantities when clicking the parent div.
   - Prevents event bubbling from child divs using `stopPropagation()`.

---

### 📝 Additional Notes
- Uses event handling to differentiate between clicks on the parent and child divs.
- Ensures data validation when entering names and quantities.
- Uses `alert` to show the list of articles and their quantities.
