# 📚 Assignment 4 - Level 3: jQuery Dynamic Interactions

This assignment involves applying dynamic effects to an HTML template using jQuery. The implemented requirements are detailed below.

## 📁 Main File

- [`Desaf4-js3/assets/js/jQuery.js`](assets/js/jQuery.js): Contains all jQuery logic applied to the provided template.

## ✅ Implemented Requirements

1. **Top Categories**  
   When clicking on any item in this section, its thumbnail image (`.thumb`) is emptied using the `.empty()` method.

2. **Most Played**  
   When clicking on any item in this section, the element fades out using `.fadeOut()`.

3. **Trending Games**  
   - Clicking anywhere on the article (except the wallet button) slides the price (`.price`) up using `.slideUp()`.
   - Clicking the wallet button changes the article's background to green and slides it up using chained `.css()` and `.slideUp(3000)`.

4. **Top Features**  
   Clicking these elements triggers an animation using `.animate()` to adopt the following properties:
   - `width: 270px`
   - `height: 270px`
   - `top: -300px`
   - `left: 300px`
   - `position: relative` (added via `.css()` if not set properly by `.animate()`)

## 🛠️ Tools Used

- [jQuery](https://jquery.com/)
- HTML / CSS from the project template

## 📌 Notes

- All effects are wrapped inside `$(document).ready(...)` to ensure they execute after the DOM is fully loaded.
- Default link behaviors are prevented with `event.preventDefault()`.
- Method chaining is used to create combined effects.