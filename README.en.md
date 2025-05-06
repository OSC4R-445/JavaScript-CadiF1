# 🎟️ Assignment 2 - Level 1: Random Ticket Purchase Generator

This project simulates a cinema ticket purchase using randomly generated values such as the day, age, gender, and student status of the buyer.

## 📁 Main File

- [`Desaf2-js1/js/main.js`](Desaf2-js1/js/main.js): Contains the full logic for generating the ticket details and applying conditional discounts.

## ✅ Features Implemented

1. **Random Data Generation**  
   - Day of the week (1–7)  
   - Age (between 4 and 100)  
   - Gender (true = male, false = female)  
   - Student status (true or false)  
   - Ticket number (1–31)

2. **User Input**  
   - If the day is Wednesday, a prompt asks if the movie is a pre-release.

3. **Discount Logic**  
   - Monday: 50% discount  
   - Tuesday: 50% discount for students  
   - Wednesday: 30% price increase for pre-release movies  
   - Thursday: 30% discount for women  
   - Friday to Sunday: 20% discount for children under 8  
   - Any day except Monday/Thursday: 40% discount for seniors (over 60)  
   - Ticket number 21: free entry

4. **Output**  
   - Summary shown in `console.table()`  
   - Alerts display the ticket cost and pre-release info if applicable

## ⚠️ Known Issues

- There are two **intentional logic errors** retained for evaluation purposes:
  - `if (preEstreno = true && dia === 3)` uses **assignment (`=`)** instead of **comparison (`===`)**.
  - `if (genero = false && dia === 4)` does the same.

These lines will not behave as expected and are commented accordingly in the source code.

## 📝 Notes

- All logic is executed when the script is loaded (no user interaction beyond the pre-release prompt).
- Comments in the JavaScript file are in English for clarity, but the logic retains original Spanish elements like variable names and labels.