// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example of adding a simple scroll animation (fade-in)
const sections = document.querySelectorAll('section');

function fadeIn(element) {
    element.classList.add('fade-in'); // You'll need to define .fade-in in your CSS
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            fadeIn(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Adjust as needed
});

sections.forEach(section => {
    section.classList.add('opacity-0'); // Initially hide the sections
    observer.observe(section);
});

// Hero Banner Slider
const slides = document.querySelectorAll('.hero-slide');
const prevBtn = document.getElementById('prev-slide');
const nextBtn = document.getElementById('next-slide');
let currentSlide = 0;
let sliderInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('hidden', i !== index);
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

nextBtn.addEventListener('click', () => {
    nextSlide();
    resetSliderInterval();
});
prevBtn.addEventListener('click', () => {
    prevSlide();
    resetSliderInterval();
});

function startSliderInterval() {
    sliderInterval = setInterval(nextSlide, 5000);
}
function resetSliderInterval() {
    clearInterval(sliderInterval);
    startSliderInterval();
}

showSlide(currentSlide);
startSliderInterval();

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Dropdown for desktop
const servicesDropdownBtn = document.getElementById('services-dropdown-btn');
const servicesDropdown = document.getElementById('services-dropdown');
if (servicesDropdownBtn && servicesDropdown) {
    servicesDropdownBtn.addEventListener('focus', () => {
        servicesDropdown.classList.remove('opacity-0', 'invisible');
        servicesDropdown.classList.add('opacity-100', 'visible');
    });
    servicesDropdownBtn.addEventListener('blur', () => {
        servicesDropdown.classList.add('opacity-0', 'invisible');
        servicesDropdown.classList.remove('opacity-100', 'visible');
    });
    servicesDropdownBtn.addEventListener('mouseenter', () => {
        servicesDropdown.classList.remove('opacity-0', 'invisible');
        servicesDropdown.classList.add('opacity-100', 'visible');
    });
    servicesDropdownBtn.addEventListener('mouseleave', () => {
        servicesDropdown.classList.add('opacity-0', 'invisible');
        servicesDropdown.classList.remove('opacity-100', 'visible');
    });
    servicesDropdown.addEventListener('mouseenter', () => {
        servicesDropdown.classList.remove('opacity-0', 'invisible');
        servicesDropdown.classList.add('opacity-100', 'visible');
    });
    servicesDropdown.addEventListener('mouseleave', () => {
        servicesDropdown.classList.add('opacity-0', 'invisible');
        servicesDropdown.classList.remove('opacity-100', 'visible');
    });
}

// Dropdown for mobile
const mobileServicesDropdownBtn = document.getElementById('mobile-services-dropdown-btn');
const mobileServicesDropdown = document.getElementById('mobile-services-dropdown');
if (mobileServicesDropdownBtn && mobileServicesDropdown) {
    mobileServicesDropdownBtn.addEventListener('click', () => {
        mobileServicesDropdown.classList.toggle('hidden');
    });
}