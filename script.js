/* Script for dropdown menu ==>>> */
const toggleButton = document.querySelector("#menu");
const toggleButtonIcon = document.querySelector("#menu i");
const dropDown = document.querySelector(".dropdown");
toggleButton.onclick = function () {
  dropDown.classList.toggle("open");
  const isOpen = dropDown.classList.contains("open");
  toggleButtonIcon.classList = isOpen ? "bx bx-x" : "bx bx-menu"
}