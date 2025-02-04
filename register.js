document.addEventListener("DOMContentLoaded", () => {
  const togglePassword = document.getElementById("togglePassword")
  const toggleConfirmPassword = document.getElementById("toggleConfirmPassword")
  const passwordInput = document.getElementById("passwordInput")
  const confirmPasswordInput = document.getElementById("confirmPasswordInput")
  const registerForm = document.getElementById("registerForm")
  const closeBtn = document.querySelector(".close-btn")

  // Password visibility toggle
  function togglePasswordVisibility(toggleBtn, inputField) {
    toggleBtn.addEventListener("click", function () {
      const type = inputField.getAttribute("type") === "password" ? "text" : "password"
      inputField.setAttribute("type", type)
      this.textContent = type === "password" ? "👁️" : "👁️‍🗨️"
    })
  }

  togglePasswordVisibility(togglePassword, passwordInput)
  togglePasswordVisibility(toggleConfirmPassword, confirmPasswordInput)

  // Mock function to simulate sending an email
  function mockSendEmail(data) {
    console.log(`Simulating email send to adityatelange758@gmail.com with data:`, data)
    return new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate network delay
  }

  // Form submission
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("emailInput").value;
    const password = passwordInput.value;

    console.log("register attempt:", { email });

    // Simulating a successful login
    alert("register successful! Redirecting...");
    
    // Redirect to index.html
    window.location.href = "index.html";
  });
});
