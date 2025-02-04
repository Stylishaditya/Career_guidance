document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle")
  const mainNav = document.querySelector(".main-nav")
  const dropdown = document.querySelector(".dropdown")
  const dropdownToggle = document.querySelector(".dropdown-toggle")

  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active")
  })

  dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault()
    dropdown.classList.toggle("active")
  })

  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        mainNav.classList.remove("active")
      }
      if (!link.classList.contains("dropdown-toggle")) {
        dropdown.classList.remove("active")
      }
    })
  })

  // Close mobile menu and dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
      mainNav.classList.remove("active")
      dropdown.classList.remove("active")
    }
  })

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.classList.contains("dropdown-toggle")) return
      e.preventDefault()
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })
})

