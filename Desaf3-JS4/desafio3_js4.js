// app.js (Unified JavaScript file for your application)

// Initial user data (load from LS or use default)
var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [
    { "id": 1, "password": "123456", "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz", "address": { "street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874", "geo": { "lat": "-37.3159", "lng": "81.1496" } }, "phone": "1-770-736-8031 x56442", "website": "hildegard.org", "company": { "name": "Romaguera-Crona", "catchPhrase": "Multi-layered client-server neural-net", "bs": "harness real-time e-markets" } },
    { "id": 2, "password": "123456", "name": "Ervin Howell", "username": "Antonette", "email": "Shanna@melissa.tv", "address": { "street": "Victor Plains", "suite": "Suite 879", "city": "Wisokyburgh", "zipcode": "90566-7771", "geo": { "lat": "-43.9509", "lng": "-34.4618" } }, "phone": "010-692-6593 x09125", "website": "anastasia.net", "company": { "name": "Deckow-Crist", "catchPhrase": "Proactive didactic contingency", "bs": "synergize scalable supply-chains" } },
    { "id": 3, "password": "123456", "name": "Clementine Bauch", "username": "Samantha", "email": "Nathan@yesenia.net", "address": { "street": "Douglas Extension", "suite": "Suite 847", "city": "McKenziehaven", "zipcode": "59590-4157", "geo": { "lat": "-68.6102", "lng": "-47.0653" } }, "phone": "1-463-123-4447", "website": "ramiro.info", "company": { "name": "Romaguera-Jacobson", "catchPhrase": "Face to face bifurcated interface", "bs": "e-enable strategic applications" } },
    { "id": 4, "password": "123456", "name": "Patricia Lebsack", "username": "Karianne", "email": "Julianne.OConner@kory.org", "address": { "street": "Hoeger Mall", "suite": "Apt. 692", "city": "South Elvis", "zipcode": "53919-4257", "geo": { "lat": "29.4572", "lng": "-164.2990" } }, "phone": "493-170-9623 x156", "website": "kale.biz", "company": { "name": "Robel-Corkery", "catchPhrase": "Multi-tiered zero tolerance productivity", "bs": "transition cutting-edge web services" } },
    { "id": 5, "password": "123456", "name": "Chelsey Dietrich", "username": "Kamren", "email": "Lucio_Hettinger@annie.ca", "address": { "street": "Skiles Walks", "suite": "Suite 351", "city": "Roscoeview", "zipcode": "33263", "geo": { "lat": "-31.8129", "lng": "62.5342" } }, "phone": "(254)954-1289", "website": "demarco.info", "company": { "name": "Keebler LLC", "catchPhrase": "User-centric fault-tolerant solution", "bs": "revolutionize end-to-end systems" } },
    { "id": 6, "password": "123456", "name": "Mrs. Dennis Schulist", "username": "Leopoldo_Corkery", "email": "Karley_Dach@jasper.info", "address": { "street": "Norberto Crossing", "suite": "Apt. 950", "city": "South Christy", "zipcode": "23505-1337", "geo": { "lat": "-71.4197", "lng": "71.7478" } }, "phone": "1-477-935-8478 x6430", "website": "ola.org", "company": { "name": "Considine-Lockman", "catchPhrase": "Synchronised bottom-line interface", "bs": "e-enable innovative applications" } },
    { "id": 7, "password": "123456", "name": "Kurtis Weissnat", "username": "Elwyn.Skiles", "email": "Telly.Hoeger@billy.biz", "address": { "street": "Rex Trail", "suite": "Suite 280", "city": "Howemouth", "zipcode": "58804-1099", "geo": { "lat": "24.8918", "lng": "21.8984" } }, "phone": "210.067.6132", "website": "elvis.io", "company": { "name": "Johns Group", "catchPhrase": "Configurable multimedia task-force", "bs": "generate enterprise e-tailers" } },
    { "id": 8, "password": "123456", "name": "Nicholas Runolfsdottir V", "username": "Maxime_Nienow", "email": "Sherwood@rosamond.me", "address": { "street": "Ellsworth Summit", "suite": "Suite 729", "city": "Aliyaview", "zipcode": "45169", "geo": { "lat": "-14.3990", "lng": "-120.7677" } }, "phone": "586.493.6943 x140", "website": "jacynthe.com", "company": { "name": "Abernathy Group", "catchPhrase": "Implemented secondary concept", "bs": "e-enable extensible e-tailers" } },
    { "id": 9, "password": "123456", "name": "Glenna Reichert", "username": "Delphine", "email": "Chaim_McDermott@dana.io", "address": { "street": "Dayna Park", "suite": "Suite 449", "city": "Bartholomebury", "zipcode": "76495-3109", "geo": { "lat": "24.6463", "lng": "-168.8889" } }, "phone": "(775)976-6794 x41206", "website": "conrad.com", "company": { "name": "Yost and Sons", "catchPhrase": "Switchable contextually-based project", "bs": "aggregate real-time technologies" } },
    { "id": 10, "password": "123456", "name": "Clementina DuBuque", "username": "Moriah.Stanton", "email": "Rey.Padberg@karina.biz", "address": { "street": "Kattie Turnpike", "suite": "Suite 198", "city": "Lebsackbury", "zipcode": "31428-2261", "geo": { "lat": "-38.2386", "lng": "57.2232" } }, "phone": "024-648-3804", "website": "ambrose.net", "company": { "name": "Hoeger LLC", "catchPhrase": "Centralized empowering task-force", "bs": "target end-to-end models" } }
];

// Helper function for document.getElementById
const $ = id => document.getElementById(id);

// --- DOM Element References ---
const loginBtn = $('loginButton');
const registerBtn = $('registerButton');
const logoutBtn = $('logoutButton');
const loginModal = $('loginModal');
const registerModal = $('registerModal');
const loginForm = $('loginForm');
const registerForm = $('registerForm');
const closeButtons = document.querySelectorAll('.close-button');
const loginMsg = $('loginMessage');
const registerMsg = $('registerMessage');
const welcomeMessageElement = $('welcomeMessage');

// --- Session Management Timers ---
let inactivityTimer; // Timer for the 15-second inactivity check (Req 4)
let isSweetAlertOpen = false; // Flag to prevent multiple SweetAlerts


// --- UI Update Functions ---

const updateUI = () => {
    const user = localStorage.getItem('usuarioLogueado');
    if (user) {
        loginBtn.classList.add('hidden');
        registerBtn.classList.add('hidden');
        logoutBtn.classList.remove('hidden');
    } else {
        loginBtn.classList.remove('hidden');
        registerBtn.classList.remove('hidden');
        logoutBtn.classList.add('hidden');
    }
};

const updateWelcomeMessage = () => {
    const loggedInUser = localStorage.getItem('usuarioLogueado');

    if (loggedInUser) {
        try {
            const user = JSON.parse(loggedInUser);
            welcomeMessageElement.textContent = `¡Bienvenido, ${user.username}!`;
        } catch (e) {
            console.error("Error al parsear el usuario logueado desde localStorage:", e);
            welcomeMessageElement.textContent = '¡Bienvenido! (Error al cargar usuario)';
            localStorage.removeItem('usuarioLogueado');
        }
    } else {
        welcomeMessageElement.textContent = 'Por favor, inicie sesión.';
    }
};

// --- Modal Handling Functions ---
const openModal = modal => { modal.style.display = 'block'; };
const closeModal = modal => {
    modal.style.display = 'none';
    if (modal === loginModal) {
        loginMsg.textContent = '';
        loginForm.reset();
    }
    if (modal === registerModal) {
        registerMsg.textContent = '';
        registerForm.reset();
    }
};

// --- Session Timeout Functions ---

// Function to handle logout (reusable for Req 3 & 5)
const performLogout = (message = 'Has cerrado tu sesión exitosamente.') => {
    console.log("Performing logout:", message);
    localStorage.removeItem('usuarioLogueado');
    localStorage.removeItem('registeredUserOnSession'); // Clear this on logout as well
    updateUI();
    updateWelcomeMessage();
    clearTimeout(inactivityTimer); // Ensure no timers are left running
    Swal.close(); // Close any open SweetAlert
    Swal.fire('¡Sesión Cerrada!', message, 'info');
};

// Function to reset and (re)start the 15-second inactivity timer (Req 4)
const resetInactivityTimer = () => {
    console.log("resetInactivityTimer called.");
    console.log("Current user logged in:", localStorage.getItem('usuarioLogueado') ? "Yes" : "No");
    console.log("Is SweetAlert open:", isSweetAlertOpen);

    // Only manage timer if a user is logged in AND no SweetAlert is currently prompting
    if (localStorage.getItem('usuarioLogueado') && !isSweetAlertOpen) {
        clearTimeout(inactivityTimer); // Clear any existing timer
        console.log("Cleared existing inactivity timer.");
        inactivityTimer = setTimeout(showInactivityPrompt, 15000); // 15 seconds
        console.log("New 15-second inactivity timer set. Timer ID:", inactivityTimer);
    } else {
        console.log("Did not set new 15-second inactivity timer due to conditions.");
    }
};

// Function to show the SweetAlert for inactivity (Req 4 & 5)
const showInactivityPrompt = () => {
    console.log("showInactivityPrompt called.");
    // Do not show if not logged in or if SweetAlert is already open
    if (!localStorage.getItem('usuarioLogueado') || isSweetAlertOpen) {
        console.log("showInactivityPrompt aborted: not logged in or alert already open.");
        return;
    }

    isSweetAlertOpen = true; // Set flag to indicate SweetAlert is open
    console.log("isSweetAlertOpen set to true by showInactivityPrompt.");

    let timerInterval; // Local interval for this specific SweetAlert countdown
    Swal.fire({
        title: '¿Continuar Sesión?',
        html: 'Tu sesión ha estado inactiva. Serás desconectado en <b id="countdown">10</b> segundos.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, continuar',
        cancelButtonText: 'No, cerrar sesión',
        allowOutsideClick: false, // Prevent closing by clicking outside
        allowEscapeKey: false,    // Prevent closing by pressing Escape
        timer: 10000, // Total time for the countdown (10 seconds)
        timerProgressBar: true,
        didOpen: () => {
            const b = Swal.getHtmlContainer().querySelector('#countdown');
            timerInterval = setInterval(() => {
                const remainingTime = Math.ceil(Swal.getTimerLeft() / 1000);
                if (b) {
                    b.textContent = remainingTime;
                }
            }, 100); // Update frequently for smoother countdown
            console.log("Inactivity prompt opened, countdown started.");
        },
        willClose: () => {
            clearInterval(timerInterval); // Clean up the interval
            isSweetAlertOpen = false; // Reset flag when SweetAlert closes
            console.log("Inactivity prompt closed, isSweetAlertOpen set to false.");
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('¡Sesión Continuada!', 'Tu sesión sigue activa.', 'success');
            console.log("User confirmed inactivity prompt. Resetting inactivity timer.");
            resetInactivityTimer(); // Restart the inactivity timer after user confirms
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            performLogout('Has decidido cerrar tu sesión.');
        } else if (result.dismiss === Swal.DismissReason.timer) {
            // User did not respond within the 10-second countdown
            performLogout('Sesión cerrada por inactividad.');
        }
    });
};

// Function to show the initial 10-second prompt (Req 2)
const showInitialSessionPrompt = () => {
    console.log("showInitialSessionPrompt called.");
    // Do not show if not logged in or if SweetAlert is already open
    if (!localStorage.getItem('usuarioLogueado') || isSweetAlertOpen) {
        console.log("showInitialSessionPrompt aborted: not logged in or alert already open.");
        return;
    }

    isSweetAlertOpen = true; // Set flag to indicate SweetAlert is open
    console.log("isSweetAlertOpen set to true by showInitialSessionPrompt.");

    Swal.fire({
        title: '¿Continuar Sesión?',
        text: '¿Deseas seguir con tu sesión iniciada?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, continuar',
        cancelButtonText: 'No, cerrar sesión',
        allowOutsideClick: false,
        allowEscapeKey: false,
        // No 'timer' property here for Req 2, as per requirement
        willClose: () => { // Keep willClose as it resets the flag
            isSweetAlertOpen = false; // Reset flag when SweetAlert closes
            console.log("Initial prompt closed, isSweetAlertOpen set to false.");
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // User chose to continue after initial prompt (Req 2 positive)
            Swal.fire('¡Sesión Continuada!', 'Tu sesión sigue activa.', 'success');
            console.log("User confirmed initial prompt. Starting 15-second inactivity timer.");
            // NOW, and only NOW, start the 15-second inactivity timer (Req 4)
            resetInactivityTimer();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // User chose to close session (Req 2 negative -> Req 3)
            performLogout('Has cerrado tu sesión.');
        }
    });
};


// --- Main DOM Content Loaded Listener ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded fired.");

    // --- Initial UI Updates ---
    updateUI();
    updateWelcomeMessage();

    // --- Schedule the initial 10-second prompt (Req 2) if user is already logged in on page load ---
    const currentUser = localStorage.getItem('usuarioLogueado');
    if (currentUser) {
        console.log("User is logged in on page load. Scheduling initial session prompt (Req 2) in 10 seconds.");
        setTimeout(showInitialSessionPrompt, 10000);
    } else {
        console.log("No user logged in. Initial prompt will not show until login/signup.");
    }

    // --- Event Listeners for User Activity (Req 4) ---
    // These listeners will only trigger resetInactivityTimer, which itself only starts
    // the 15-second timer IF a user is logged in AND the Req 2 prompt has been confirmed.
    document.body.addEventListener('click', resetInactivityTimer);
    document.body.addEventListener('mousemove', resetInactivityTimer);
    document.body.addEventListener('keypress', resetInactivityTimer);
    console.log("Activity event listeners added to body. These will manage Req 4 timer after Req 2 confirmation.");


    // --- Event Listeners for Modals & Forms ---

    loginBtn.addEventListener('click', () => { openModal(loginModal); });
    registerBtn.addEventListener('click', () => { openModal(registerModal); });

    closeButtons.forEach(btn => {
        btn.addEventListener('click', e => closeModal(e.target.closest('.modal')));
    });

    window.addEventListener('click', e => {
        if (e.target === loginModal) closeModal(loginModal);
        if (e.target === registerModal) closeModal(registerModal);
    });

    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        const username = $('loginUsername').value;
        const password = $('loginPassword').value;

        const userFound = usuarios.find(u => u.username === username);

        if (userFound && userFound.password === password) {
            localStorage.setItem('usuarioLogueado', JSON.stringify(userFound));
            loginMsg.textContent = '¡Inicio de sesión exitoso!';
            loginMsg.style.color = 'green';
            setTimeout(() => {
                closeModal(loginModal);
                updateUI();
                updateWelcomeMessage();
                Swal.fire('¡Éxito!', `¡Bienvenido de nuevo, ${userFound.username}!`, 'success');
                console.log("Successful login. Scheduling initial session prompt (Req 2) in 10 seconds.");
                // Immediately after successful login, schedule Req 2 prompt
                setTimeout(showInitialSessionPrompt, 10000);
            }, 500);
        } else {
            loginMsg.textContent = 'Nombre de usuario o contraseña inválidos.';
            loginMsg.style.color = 'red';
        }
    });

    registerForm.addEventListener('submit', e => {
        e.preventDefault();
        const name = $('registerName').value;
        const username = $('registerUsername').value;
        const email = $('registerEmail').value;
        const password = $('registerPassword').value;

        if (usuarios.some(u => u.username === username || u.email === email)) {
            registerMsg.textContent = 'El nombre de usuario o el correo electrónico ya existen.';
            registerMsg.style.color = 'red';
            return;
        }

        const newId = usuarios.length ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;
        const newUser = { id: newId, password, name, username, email };

        usuarios.push(newUser);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        localStorage.setItem('usuarioLogueado', JSON.stringify(newUser));

        registerMsg.textContent = '¡Registro exitoso!';
        registerMsg.style.color = 'green';
        setTimeout(() => {
            closeModal(registerModal);
            updateUI();
            updateWelcomeMessage();
            Swal.fire({
                title: '¡Registro Exitoso!',
                text: `¡Bienvenido, ${newUser.username}! Tu cuenta ha sido registrada.`,
                icon: 'success',
                timer: 3000,
                showConfirmButton: false
            });
            console.log("Successful registration. Scheduling initial session prompt (Req 2) in 10 seconds.");
            // Immediately after successful registration, schedule Req 2 prompt
            setTimeout(showInitialSessionPrompt, 10000);
        }, 500);
    });

    logoutBtn.addEventListener('click', () => {
        performLogout(); // Use the new reusable logout function
    });
});
