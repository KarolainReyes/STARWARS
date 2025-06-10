document.addEventListener('DOMContentLoaded', () => {
    const scrollSection = document.getElementById('scroll-section');
    const scrollTiggerPoint = 100;

    function handleScroll() {
        const currentScrollPos = window.scrollY;

        if (currentScrollPos > scrollTiggerPoint) {
            scrollSection.classList.add('active', 'scrolled');
        } else {
            scrollSection.classList.remove('scrolled');

        }
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();
});