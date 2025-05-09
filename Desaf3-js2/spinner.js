function addSpinner() {
    const spin = document.getElementById('spin');
    spin.style.display = 'flex';
}

function quitSpinner() {
    const spin = document.getElementById('spin');
    spin.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', addSpinner);
window.onload = quitSpinner;