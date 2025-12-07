// 1. Typing Effect for the Hero Section
const textElement = document.getElementById('typewriter');
const texts = ["Website Designer", "Meta Ads Manager", "Shopify Expert"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    textElement.textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Wait 2s before typing next word
    } else {
        setTimeout(type, 100); // Typing speed
    }
}());

// 2. Scroll Animation (Intersection Observer)
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.timeline-item');
hiddenElements.forEach((el) => observer.observe(el));

// 3. Smooth scrolling for internal links (Optional polyfill-like behavior)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});