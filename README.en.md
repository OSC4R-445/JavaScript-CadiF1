# 💼 Assignment 3 - Level 1: Vendor Income Calculator

### 📂 Main File
- [`Desaf3-js1/js/main.js`](Desaf3-js1/js/main.js)

This project calculates the income of vendors based on their base salary, monthly sales amount, and a senior bonus if applicable.

---

### Features Implemented
1. Calculates the number of vendors to evaluate, as provided by the user.
2. Validates input data using loops to ensure:
   - No negative or zero values (except for sales amount, which can be zero).
   - Age must be greater than zero.
   - Gender must be "H" (Male) or "M" (Female).
3. Determines the sales commission percentage using a switch statement:
   - 5% for sales > 0 and < 75,000.
   - 7% for sales between 90,000 and 199,999.
   - 8% for sales between 300,000 and 999,999.
   - 10% for sales >= 1,500,000.
   - 6% for any other amount.
4. Adds a senior bonus (40,000 Bs) if:
   - Male, age >= 60.
   - Female, age >= 55.
5. Displays the final income using concatenation.

---

### 📝 Additional Notes
- The script ensures reliable data entry and uses a mix of loops and conditional statements for validation.
- The final result includes the base salary, sales amount, commission percentage, senior bonus, and total income.
