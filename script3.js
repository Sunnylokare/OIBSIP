document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'your_username' && password === 'your_password') {
            errorMessage.textContent = '';
            alert('Login successful! Welcome, ' + username + '!');
        } else {
            errorMessage.textContent = 'Invalid username or password. Please try again.';
        }
    });
});
