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
let inactivityTimer; // Timer for the 15-second inactivity check
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

// Function to handle logout
const performLogout = (message = 'Has cerrado tu sesión exitosamente.') => {
    localStorage.removeItem('usuarioLogueado');
    localStorage.removeItem('registeredUserOnSession'); // Clear this on logout as well
    updateUI();
    updateWelcomeMessage();
    clearTimeout(inactivityTimer); // Ensure no timers are left running
    Swal.close(); // Close any open SweetAlert
    Swal.fire('¡Sesión Cerrada!', message, 'info');
};

// Function to reset and (re)start the 15-second inactivity timer
const resetInactivityTimer = () => {
    // Only manage timer if a user is logged in AND no SweetAlert is currently prompting
    if (localStorage.getItem('usuarioLogueado') && !isSweetAlertOpen) {
        clearTimeout(inactivityTimer); // Clear any existing timer
        inactivityTimer = setTimeout(showInactivityPrompt, 15000); // 15 seconds
    }
};

// Function to show the SweetAlert for inactivity
const showInactivityPrompt = () => {
    // Do not show if not logged in or if SweetAlert is already open
    if (!localStorage.getItem('usuarioLogueado') || isSweetAlertOpen) {
        return;
    }

    isSweetAlertOpen = true; // Set flag to indicate SweetAlert is open

    let timerInterval; // Local interval for this specific SweetAlert countdown
    Swal.fire({
        title: '¿Continuar Sesión?',
        html: 'Tu sesión ha estado inactiva. Serás desconectado en <b id="countdown">10</b> segundos.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, continuar', // This button should now be visible
        cancelButtonText: 'No, cerrar sesión',
        allowOutsideClick: false, // Prevent closing by clicking outside
        allowEscapeKey: false,    // Prevent closing by pressing Escape
        timer: 10000, // Total time for the countdown
        timerProgressBar: true,
        didOpen: () => {
            const b = Swal.getHtmlContainer().querySelector('#countdown');
            timerInterval = setInterval(() => {
                const remainingTime = Math.ceil(Swal.getTimerLeft() / 1000);
                if (b) {
                    b.textContent = remainingTime;
                }
            }, 100); // Update frequently for smoother countdown
        },
        willClose: () => {
            clearInterval(timerInterval); // Clean up the interval
            isSweetAlertOpen = false; // Reset flag when SweetAlert closes
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('¡Sesión Continuada!', 'Tu sesión sigue activa.', 'success');
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
    // Only show if a user is logged in AND no SweetAlert is currently prompting
    if (!localStorage.getItem('usuarioLogueado') || isSweetAlertOpen) {
        return;
    }

    isSweetAlertOpen = true; // Set flag to indicate SweetAlert is open

    Swal.fire({
        title: '¿Continuar Sesión?',
        text: '¿Deseas seguir con tu sesión iniciada?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, continuar', // This button is crucial for making sure the user can stay logged in after the countdown starts
        cancelButtonText: 'No, cerrar sesión',
        allowOutsideClick: false,
        allowEscapeKey: false,
        willClose: () => {
            isSweetAlertOpen = false; // Reset flag when SweetAlert closes
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // User chose to continue after initial prompt (Req 2 positive)
            Swal.fire('¡Sesión Continuada!', 'Tu sesión sigue activa.', 'success');
            resetInactivityTimer(); // NOW, start the 15-second inactivity timer
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // User chose to close session
            performLogout('Has cerrado tu sesión.');
        }
    });
};


// --- Main DOM Content Loaded Listener ---
document.addEventListener('DOMContentLoaded', () => {

    // --- Initial UI Updates ---
    updateUI();
    updateWelcomeMessage();

    // --- Handle persistence for newly registered users ---
    const registeredUserInLS = localStorage.getItem('registeredUserOnSession');
    if (registeredUserInLS) {
        try {
            const user = JSON.parse(registeredUserInLS);
            if (!usuarios.some(u => u.id === user.id)) {
                usuarios.push(user);
                localStorage.setItem('usuarios', JSON.stringify(usuarios));
            }
            Swal.fire({
                title: '¡Registro Exitoso!',
                text: `¡Bienvenido, ${user.username}! Tu cuenta ha sido registrada.`,
                icon: 'success',
                timer: 3000,
                showConfirmButton: false
            });
            localStorage.removeItem('registeredUserOnSession');
        } catch (e) {
            console.error("Error parsing registered user from localStorage:", e);
            localStorage.removeItem('registeredUserOnSession');
        }
    }

    // --- Initial 10-second prompt for session continuation ---
    // This is the first prompt after the page loads.
    const currentUser = localStorage.getItem('usuarioLogueado');
    if (currentUser) {
        setTimeout(showInitialSessionPrompt, 10000); // Call the dedicated initial prompt function
    }


    // --- Event Listeners for User Activity ---
    // Listen for any click on the body to reset the inactivity timer
    document.body.addEventListener('click', resetInactivityTimer);
    document.body.addEventListener('mousemove', resetInactivityTimer); // Also reset on mouse movement
    document.body.addEventListener('keypress', resetInactivityTimer); // Also reset on keypress


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
                resetInactivityTimer(); // Start inactivity timer after successful login
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
        localStorage.setItem('registeredUserOnSession', JSON.stringify(newUser));

        registerMsg.textContent = '¡Registro exitoso!';
        registerMsg.style.color = 'green';
        setTimeout(() => {
            closeModal(registerModal);
            updateUI();
            updateWelcomeMessage();
            // The registration success SweetAlert is now handled by the initial DOMContentLoaded check
            resetInactivityTimer(); // Start inactivity timer after successful registration
        }, 500);
    });

    logoutBtn.addEventListener('click', () => {
        performLogout(); // Use the new reusable logout function
    });
});