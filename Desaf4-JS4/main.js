document.addEventListener('DOMContentLoaded', () => {
    // --- Elementos del DOM ---
    const cards = document.querySelectorAll('.table td');
    const startGameBtn = document.getElementById('startGameBtn');
    const welcomeMessage = document.getElementById('welcome-message');
    const recordMessage = document.getElementById('record-message');
    const gameStats = document.querySelector('.game-stats');
    const tableElement = document.querySelector('.table');
    const timeDisplay = document.getElementById('timeDisplay');
    const matchesDisplay = document.getElementById('matchesDisplay');
    const gameMessage = document.getElementById('gameMessage');

    // --- Variables del Juego ---
    let cardsChosen = [];
    let cardsChosenId = [];
    let matchesFound = 0; // Contador de aciertos
    let gameTimer; // Para el intervalo del contador
    let secondsElapsed = 0; // Tiempo transcurrido en segundos
    let gameStarted = false; // Bandera para controlar el estado del juego

    // --- Configuración de Imágenes ---
    const imageNames = [
        'image1.png', 'image2.png', 'image3.png', 'image4.png',
        'image5.png', 'image6.png', 'image7.png', 'image8.png'
    ];
    let cardArray = []; // Se llenará al iniciar el juego

    // --- Constantes de Local Storage ---
    const USER_STORAGE_KEY = 'memoryGameUser';
    const DEFAULT_RECORD_TIME = 86400; // 24 horas en segundos

    // --- Objeto de Jugador ---
    let player = {
        timeRecord: DEFAULT_RECORD_TIME,
        lastPlayedTime: 0
    };

    // --- Funciones de Utilidad ---

    // Formatea segundos a MM:SS
    function formatTime(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    // Muestra un mensaje temporal en el área de juego
    function showGameMessage(message, type = '') { // 'success', 'error', 'win'
        gameMessage.textContent = message;
        gameMessage.className = `game-message mt-3 ${type}`; // Resetea clases y añade las nuevas
        gameMessage.classList.remove('d-none'); // Muestra el div
        // Si no es un mensaje de "ganar", lo ocultamos después de un tiempo
        if (type !== 'win') {
            setTimeout(() => {
                gameMessage.classList.add('d-none');
                gameMessage.textContent = ''; // Limpia el texto
            }, 1000); // Mensaje visible por 1 segundo
        }
    }

    // --- Funciones de Local Storage ---

    // Cargar datos del jugador desde Local Storage
    function loadPlayerStats() {
        const storedPlayer = localStorage.getItem(USER_STORAGE_KEY);
        if (storedPlayer) {
            player = JSON.parse(storedPlayer);
            console.log("Jugador cargado:", player);
        } else {
            // Si no hay jugador, se usa el default y se guarda
            savePlayerStats();
            console.log("Nuevo jugador creado:", player);
        }

        // Mostrar tiempo récord si no es el valor por defecto
        if (player.timeRecord !== DEFAULT_RECORD_TIME) {
            recordMessage.textContent = `Tu mejor tiempo: ${formatTime(player.timeRecord)}`;
            recordMessage.classList.remove('d-none');
        } else {
            recordMessage.classList.add('d-none'); // Asegúrate de que esté oculto si es el valor por defecto
        }
    }

    // Guardar datos del jugador en Local Storage
    function savePlayerStats() {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(player));
        console.log("Jugador guardado:", player);
    }

    // --- Lógica del Juego ---

    // Inicializa el tablero con cartas mezcladas
    function createBoard() {
        // Resetear clases de cartas por si se reinicia el juego
        cards.forEach(card => {
            card.classList.remove('card-revealed', 'card-matched');
            card.classList.add('card-hidden');
            card.removeEventListener('click', flipCard); // Quitar listeners para evitar duplicados
            card.addEventListener('click', flipCard); // Añadir listener
        });

        cardArray = [...imageNames, ...imageNames]; // Duplica el array de imágenes
        cardArray.sort(() => 0.5 - Math.random()); // Mezcla aleatoriamente

        cards.forEach((card, index) => {
            const imgElement = card.querySelector('img');
            card.setAttribute('data-id', index);
            imgElement.src = `assets/img/${cardArray[index]}`; // Ruta a tus imágenes
            imgElement.alt = `Imagen de ${cardArray[index].replace('.png', '')}`; // Texto alternativo
        });
        console.log("Tablero creado y cartas asignadas.");
    }

    // Inicia el contador de tiempo
    function startTimer() {
        secondsElapsed = 0;
        timeDisplay.textContent = formatTime(secondsElapsed);
        gameTimer = setInterval(() => {
            secondsElapsed++;
            timeDisplay.textContent = formatTime(secondsElapsed);
        }, 1000); // Cada segundo
        console.log("Contador de tiempo iniciado.");
    }

    // Detiene el contador de tiempo
    function stopTimer() {
        clearInterval(gameTimer);
        console.log("Contador de tiempo detenido.");
    }

    // Voltea una carta al hacer click
    function flipCard() {
        if (!gameStarted) return; // No permitir clics si el juego no ha iniciado

        let cardId = this.getAttribute('data-id');

        // Evitar voltear la misma carta dos veces o cartas ya emparejadas
        if (cardsChosenId.includes(cardId) || this.classList.contains('card-matched')) {
            console.log(`Clic en carta ${cardId} ignorado (ya seleccionada o emparejada).`);
            return;
        }

        cardsChosen.push(cardArray[cardId]); // Guarda el nombre de la imagen (ej: 'image1.png')
        cardsChosenId.push(cardId); // Guarda el ID de la carta (ej: '0')

        this.classList.remove('card-hidden');
        this.classList.add('card-revealed');
        console.log(`Carta ${cardId} volteada. Imagen: ${cardArray[cardId]}`);

        if (cardsChosen.length === 2) {
            // Deshabilitar clics temporalmente mientras se evalúa el par
            cards.forEach(card => card.removeEventListener('click', flipCard));
            console.log("Dos cartas seleccionadas. Comprobando coincidencia en 800ms...");
            setTimeout(checkForMatch, 800); // Pequeño retraso para que el usuario vea ambas cartas
        }
    }

    // Comprueba si las dos cartas volteadas coinciden
    // Comprueba si las dos cartas volteadas coinciden
    function checkForMatch() {
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        const cardOne = document.getElementById(`card-${optionOneId}`);
        const cardTwo = document.getElementById(`card-${optionTwoId}`);

        if (cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId) {
            // Coincidencia!
            console.log("¡Coincidencia encontrada!");
            showGameMessage("¡Acertaste! 🎉", 'success');
            matchesFound++;
            matchesDisplay.textContent = `${matchesFound} / 8`;

            cardOne.classList.remove('card-revealed');
            cardTwo.classList.remove('card-revealed');
            cardOne.classList.add('card-matched');
            cardTwo.classList.add('card-matched');

            // --- Lógica para re-habilitar clics (INMEDIATAMENTE DESPUÉS DE UN ACERTO) ---
            // Solo re-habilita si no se ha terminado el juego
            if (matchesFound < 8) { // Si no hemos llegado al final del juego
                 cards.forEach(card => {
                    if (!card.classList.contains('card-matched')) {
                        card.addEventListener('click', flipCard);
                    }
                });
                console.log("Event listeners re-habilitados para cartas no emparejadas después de acierto.");
            }
            // --------------------------------------------------------------------------

            // Comprobar si el juego ha terminado
            if (matchesFound === 8) {
                endGame();
            }

        } else {
            // No coinciden
            console.log("No coinciden. Ocultando cartas...");
            showGameMessage("¡Fallaste! 😢", 'error');

            // Pequeño retraso adicional para que el usuario lea el mensaje "Fallaste"
            setTimeout(() => {
                cardOne.classList.remove('card-revealed');
                cardTwo.classList.remove('card-revealed');
                cardOne.classList.add('card-hidden');
                cardTwo.classList.add('card-hidden');
                console.log("Cartas ocultadas de nuevo.");

                // Volver a habilitar clics en las cartas NO emparejadas (después de ocultarlas)
                cards.forEach(card => {
                    if (!card.classList.contains('card-matched')) {
                        card.addEventListener('click', flipCard);
                    }
                });
                console.log("Event listeners re-habilitados para cartas no emparejadas después de fallo.");
            }, 1000); // Mensaje "Fallaste" visible por 1 segundo, luego se ocultan las cartas
        }
        
        // Reiniciar selección de cartas
        cardsChosen = [];
        cardsChosenId = [];
        console.log("Reiniciando selección de cartas.");

    }


    // Finaliza el juego
    function endGame() {
        stopTimer();
        gameStarted = false;
        showGameMessage("¡Felicidades, encontraste todas las parejas! 🎉", 'win');
        tableElement.classList.add('d-none'); // Ocultar tabla
        gameStats.classList.add('d-none');   // Ocultar estadísticas
        startGameBtn.classList.remove('d-none'); // Mostrar botón de nuevo juego
        welcomeMessage.classList.add('d-none'); // Ocultar mensaje de bienvenida

        // Actualizar estadísticas del jugador
        player.lastPlayedTime = secondsElapsed;
        console.log(`Tiempo de juego final: ${secondsElapsed} segundos.`);

        if (player.lastPlayedTime < player.timeRecord) {
            player.timeRecord = player.lastPlayedTime;
            showGameMessage(`¡Nuevo Tiempo Récord: ${formatTime(player.timeRecord)} segundos! 🏆`, 'win');
            recordMessage.textContent = `Tu mejor tiempo: ${formatTime(player.timeRecord)}`;
            recordMessage.classList.remove('d-none'); // Asegúrate de que se muestre el nuevo récord
        } else {
            showGameMessage(`Juego completado en ${formatTime(player.lastPlayedTime)} segundos.`, 'win');
            // Muestra el récord anterior si existe y no se superó
             if (player.timeRecord !== DEFAULT_RECORD_TIME) {
                recordMessage.textContent = `Tu mejor tiempo: ${formatTime(player.timeRecord)}`;
                recordMessage.classList.remove('d-none');
            }
        }
        savePlayerStats();
        console.log("Juego finalizado y estadísticas guardadas.");
    }

    // Inicia un nuevo juego
    function initializeGame() {
        gameStarted = true;
        matchesFound = 0;
        matchesDisplay.textContent = `${matchesFound} / 8`;
        secondsElapsed = 0;
        timeDisplay.textContent = formatTime(secondsElapsed);

        welcomeMessage.classList.add('d-none'); // Ocultar mensaje bienvenida
        recordMessage.classList.add('d-none'); // Ocultar récord al iniciar
        startGameBtn.classList.add('d-none');   // Ocultar botón de inicio
        gameMessage.classList.add('d-none');    // Ocultar mensajes de juego
        gameMessage.textContent = '';           // Limpiar texto de mensaje
        
        tableElement.classList.remove('d-none'); // Mostrar tabla
        gameStats.classList.remove('d-none');   // Mostrar estadísticas

        createBoard(); // Crear y mezclar el tablero
        startTimer();  // Iniciar el contador de tiempo
        console.log("Juego iniciado.");
    }

    // --- Event Listeners ---
    startGameBtn.addEventListener('click', initializeGame);

    // --- Inicialización al cargar la página ---
    loadPlayerStats(); // Cargar/Crear jugador al inicio
    // El tablero no se crea hasta que se hace clic en "Iniciar Juego"
    console.log("Juego preparado. Esperando inicio.");
});