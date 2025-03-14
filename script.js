const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

// Check user preference in localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️ Light Mode";
}

// Toggle Dark Mode
toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }
});
