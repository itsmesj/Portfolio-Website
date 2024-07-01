// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50, // Adjusted for navbar height
                behavior: 'smooth'
            });
        }
    });
});

// Dark Mode Toggle
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        modeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        modeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    if (savedTheme === 'dark') {
        modeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
        modeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
    }
}

document.getElementById("resume-btn").addEventListener("click", function() {
    var a = document.createElement('a');
    a.href = 'resume.pdf';
    a.download = 'Sahil_Sharmas_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});