# 🧾 Assignment 1 - Level 4: Object-Oriented Programming in JavaScript

### 📂 Main File
- [`Desaf1-JS4/js/main.js`](Desaf1-JS4/js/main.js)

---

### 📌 Description
This assignment demonstrates **Object-Oriented Programming (OOP)** in JavaScript using classes to simulate a basic user and game system.

---

### 🛠️ Implemented Features

1. **`User` Class**
   - Properties: `name`, `mail`, `status`, `typeOfUser`, `score`.
   - Constructor initializes all properties except `score`.
   - Methods:
     - `initScore(value)`: initializes the score.
     - `updScore(operator, value)`: updates the score based on the operation (`+`, `-`, `*`, `/`).
     - `getInfo()`: returns an object with user information.

2. **`Game` Class**
   - Properties: `gameType`, `name`, `levelCount`, `playerCount`.
   - Constructor initializes all properties.
   - Method:
     - `getInfo()`: returns an object with game information.

---

### 💡 Usage Example

```js
let e = new User("frog", "@", "Active", "admin")
e.getInfo()
// {name: 'frog', mail: '@', status: 'Active', score: undefined, typeOfUser: 'admin'}

e.initScore(2)
e.getInfo()
// {name: 'frog', mail: '@', status: 'Active', score: 2, typeOfUser: 'admin'}

e.updScore("+", 5)
// 7

let g = new Game("Frogger", "Arcade", 10, 1)
g.getInfo()
// {name: 'Frogger', gameType: 'Arcade', levelCount: 10, playerCount: 1}
