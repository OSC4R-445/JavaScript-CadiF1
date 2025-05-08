# 📋 Assignment 4 - Level 1: Pharmacy Medicine Registration

### 📂 Main File
- [`Desaf4-js1/js/main.js`](Desaf4-js1/js/main.js)

This project manages the registration of medicines and their prices in a pharmacy using parallel arrays and interactive prompts.

---

### Features Implemented
1. Initializes two parallel arrays: one for medicine names and another for their prices.
2. Continuously prompts the user to enter the name and price of a medicine.
   - Uses a do...while loop to allow multiple entries.
   - Validates that the medicine name is not empty or a number.
3. Checks if the medicine already exists:
   - If so, shows the previously registered price and asks if the user wants to update it.
   - If not, registers the new medicine and price.
4. Allows the user to continue registering additional medicines or stop.
5. Displays the final list of all registered medicines and their prices using a for loop.

---

### 📝 Additional Notes
- The script ensures that the medicine name is a valid string and not a number.
- In case of repeated medicine names, it shows the existing price and allows updates.
- Uses console logging to display the final list of medicines and prices.
