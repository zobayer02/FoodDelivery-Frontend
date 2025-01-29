// Show/Hide Password
document.getElementById('toggle-password').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
});

// Check if Passwords Match
document.getElementById('confirm-password').addEventListener('input', function () {
    const password = document.getElementById('password').value;
    const confirmPassword = this.value;
    const passwordCheck = document.getElementById('password-check');

    if (confirmPassword === password) {
        passwordCheck.textContent = '✔';
        passwordCheck.classList.add('valid');
    } else {
        passwordCheck.textContent = '✖ Passwords do not match';
        passwordCheck.classList.remove('valid');
    }
});

// Form Submission
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Check Password Match
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Simulate successful account creation
    alert('Your profile has been  updated!');

    // Redirect to login page
    window.location.href = "main_dashboard.html"; 
});
