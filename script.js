// Smooth scrolling for nav links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if(targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Simple form handler (no backend, just alert)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out!');
    this.reset();
});
