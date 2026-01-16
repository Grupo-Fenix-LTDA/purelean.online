// Menu Mobile Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('fa-times');
    hamburger.classList.toggle('fa-bars');
});

// Fechar menu ao clicar em link
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('fa-times');
        hamburger.classList.add('fa-bars');
    });
});

// Scroll Animation (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach((el) => observer.observe(el));