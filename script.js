
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const yearElement = document.getElementById("year");

// Mobile navigation
if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close the menu after clicking a navigation link
    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });
}

// Update the copyright year automatically
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
