// Dark Mode
const darkBtn = document.getElementById("darkModeBtn");
darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Scroll Animation
const faders = document.querySelectorAll('.fade-in');

const appear = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

faders.forEach(el => appear.observe(el));
