document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validate email and password
    if (email === "admin@example.com" && password === "admin123") {
        window.location.href = "C:\Users\asus\OneDrive\Desktop\Software Project\food\admin_dashboard.html"; // Redirect to admin dashboard
    } else {
        alert("Invalid email or password. Please try again.");
    }
});

// Toggle password visibility
document.getElementById("toggle-password").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const icon = this.querySelector("i");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
});
