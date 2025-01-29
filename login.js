// Toggle password visibility

const togglePassword = document.getElementById("toggle-password");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    togglePassword.innerHTML = type === "password" ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
});





