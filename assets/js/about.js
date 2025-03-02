document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about-section");

    if (aboutSection) {
        function checkScroll() {
            const sectionPosition = aboutSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (sectionPosition < screenPosition) {
                aboutSection.classList.add("show");
            }
        }

        window.addEventListener("scroll", checkScroll);
        checkScroll(); // Run on page load to check if section is already in view
    }
});
