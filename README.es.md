# 📚 Asignación 4 - Nivel 3: jQuery Interacciones Dinámicas

Esta asignación consiste en aplicar efectos dinámicos a una plantilla HTML utilizando jQuery. A continuación se detallan los requisitos implementados.

## 📁 Archivo principal

- [`Desaf4-js3/assets/js/jQuery.js`](Desaf4-js3/assets/js/jQuery.js): Contiene toda la lógica jQuery aplicada sobre la plantilla proporcionada.

## ✅ Requisitos implementados

1. **Top Categories**  
   Al hacer clic en cualquier elemento de esta sección, su imagen miniatura (`.thumb`) es vaciada utilizando el método `.empty()`.

2. **Most Played**  
   Al hacer clic sobre un juego de esta sección, el elemento desaparece con un efecto de desvanecimiento mediante `.fadeOut()`.

3. **Trending Games**  
   - Al hacer clic en cualquier parte del artículo (excepto el botón de la cartera), el precio (`.price`) se desliza hacia arriba con `.slideUp()`.
   - Al hacer clic en el botón de la cartera, el artículo cambia su fondo a color verde y se desliza hacia arriba encadenando `.css()` y `.slideUp(3000)`.

4. **Características Superiores (Features)**  
   Al hacer clic en estos elementos, se animan con `.animate()` para adoptar las siguientes propiedades:
   - `width: 270px`
   - `height: 270px`
   - `top: -300px`
   - `left: 300px`
   - `position: relative` (añadido con `.css()` para permitir la animación)

## 🛠️ Herramientas utilizadas

- [jQuery](https://jquery.com/)
- HTML / CSS proporcionado por la plantilla del proyecto

## 📌 Notas

- Todos los efectos están encapsulados dentro de `$(document).ready(...)` para asegurar su ejecución tras la carga del DOM.
- Se previenen los comportamientos predeterminados de enlaces (`event.preventDefault()`).
- Se usó `encadenamiento de métodos` para lograr efectos combinados.
