(() => {
    const refs = {
        openMenuBtn: document.querySelector("[data-menu-open]"),
        closeMenuBtn: document.querySelector("[data-menu-close]"),
        menu: document.querySelector("[data-menu]"),
    };

    refs.openMenuBtn.addEventListener("click", toggleModal);
    refs.closeMenuBtn.addEventListener("click", toggleModal);
    window.addEventListener("scroll", closeMenuOnScroll);

    function toggleModal() {
        refs.menu.classList.toggle("is-open");
    }

    function closeMenuOnScroll() {
        refs.menu.classList.remove("is-open");
    }
})();
