document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about-section");

    function revealOnScroll() {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) { 
            aboutSection.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger animation if already in view
});
