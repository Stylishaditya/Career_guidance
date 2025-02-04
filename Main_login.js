document.addEventListener("DOMContentLoaded", () => {
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("passwordInput");
  const loginForm = document.getElementById("loginForm");

  // Password visibility toggle
  togglePassword.addEventListener("click", function () {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    this.textContent = type === "password" ? "👁️" : "👁️‍🗨️";
  });

  // Form submission with redirect
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("emailInput").value;
    const password = passwordInput.value;

    console.log("Login attempt:", { email });

    // Simulating a successful login
    alert("Login successful! Redirecting...");
    
    // Redirect to index.html
    window.location.href = "Desktop.html";
  });
});
