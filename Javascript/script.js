//PAGINA DE NAVES

if (document.body.classList.contains("body-naves")) {
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
}

//PAGINA DE PELICULAS
if (document.body.classList.contains("body-movies")) {
    const defaultItemCount = 7;
    const itemWidth = 238;

    const wrapper = document.getElementById("InfiniteScrollWrapper");
    const content = document.getElementById("InfiniteScroll");

    const manageChildren = (childCount) => {
        while (content.children.length > defaultItemCount) {
            content.removeChild(content.lastChild);
        }

        for (let i = 0; i < childCount; i++) {
            for (let j = 0; j < defaultItemCount; j++) {
                const clone = content.children[j].cloneNode(true);
                content.appendChild(clone);
            }
        }

        content.style.width = `${itemWidth * defaultItemCount * (childCount + 1)}px`;
    };

    const core = (width) => {
        if (width <= 1920) {
            manageChildren(2);
        } else if (width <= 2560) {
            manageChildren(3);
        } else if (width <= 3840) {
            manageChildren(4);
        } else {
            manageChildren(8);
        }
    };

    const debounce = (func, delay) => {
        let timeout;
        return () => {
            clearTimeout(timeout);
            timeout = setTimeout(func, delay);
        };
    };

    const handleResize = debounce(() => core(window.innerWidth), 300);

    window.addEventListener("load", () => {
        core(window.innerWidth);
    });

    window.addEventListener("resize", handleResize);

}
document.addEventListener("DOMContentLoaded", () => {
    const botonVolver = document.getElementById("starwars");
    botonVolver.addEventListener("click", () => {
        window.open("../index.html", "_self");
    });
});