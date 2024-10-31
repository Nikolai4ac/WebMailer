const registerButton = document.getElementById('registerButton');
const loginButton = document.getElementById('loginButton');

registerButton.addEventListener('click', (ev) => {
    window.location.href = "/register";
})

loginButton.addEventListener('click', (ev) => {
    window.location.href = "/login";
})