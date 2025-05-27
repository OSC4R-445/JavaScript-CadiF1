# 🧠 Asignación 1 - Nivel 4: Programación Orientada a Objetos

### 📂 Archivo Principal
- [`lvl-4_assign-1/main.js`](lvl-4_assign-1/main.js)

---

### 📌 Descripción
Este desafío aplica conceptos de **Programación Orientada a Objetos (POO)** utilizando clases en JavaScript para simular un sistema de usuarios y juegos.

---

### 🛠️ Funcionalidad Implementada

1. **Clase `Usuario`**
   - Atributos: `nombre`, `correo`, `status`, `tipoDeUsuario`, `score`.
   - El constructor recibe todos los atributos excepto `score`.
   - Métodos:
     - `initScore(valor)`: inicializa el score.
     - `updScore(operación, valor)`: actualiza el score según la operación: `+`, `-`, `*`, `/`.
     - `getInfo()`: retorna un objeto con la información del usuario.

2. **Clase `Juego`**
   - Atributos: `tipoDeJuego`, `nombre`, `nroDeNiveles`, `nroDeJugadores`.
   - El constructor inicializa todos los atributos.
   - Método:
     - `getInfo()`: retorna un objeto con la información del juego.

---

### 💡 Ejemplo de uso

```js
let e = new User("frog", "@", "Activo", "admin")
e.getInfo()
// {name: 'frog', mail: '@', status: 'Activo', score: undefined, typeOfUser: 'admin'}

e.initScore(2)
e.getInfo()
// {name: 'frog', mail: '@', status: 'Activo', score: 2, typeOfUser: 'admin'}

e.updScore("+", 5)
// 7

let g = new Game("Frogger", "Arcade", 10, 1)
g.getInfo()
// {name: 'Frogger', gameType: 'Arcade', levelCount: 10, playerCount: 1}
