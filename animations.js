// Animation for section elements
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');

    function fadeInSection() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            if (sectionTop < viewportHeight) {
                section.classList.add('fade-in');
            }
        });
    }

    window.addEventListener('scroll', fadeInSection);
    fadeInSection(); // Initial check on page load
});
