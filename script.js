const toggleButton = document.querySelector(".toggle");
const toggleButtonIcon = document.querySelector(".toggle i");
const burgerMenu = document.querySelector(".burgerMenu");

toggleButton.onclick = function() {
    burgerMenu.classList.toggle("open")
    const isOpen = burgerMenu.classList.contains("open")
    toggleButtonIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars"
}