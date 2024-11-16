document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeMenu = document.getElementById("close-menu");

    if (hamburger && mobileMenu && closeMenu) {
        hamburger.addEventListener("click", () => {
            mobileMenu.classList.remove("translate-x-full");
        });

        closeMenu.addEventListener("click", () => {
            mobileMenu.classList.add("translate-x-full");
        });
    }
});
