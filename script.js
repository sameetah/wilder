{
  //! Deprecated: migrate to version below!
  const toggleButton = document.querySelector(".toggle");
  const toggleButtonIcon = document.querySelector(".toggle i");
  const burgerMenu = document.querySelector(".burgerMenu");

  if (toggleButton != null) {
    toggleButton.onclick = function () {
      burgerMenu.classList.toggle("open");
      const isOpen = burgerMenu.classList.contains("open");
      toggleButtonIcon.classList = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";
    };
  }
}

{
  //! New version for menu
  /* Script for dropdown menu ==>>> */
  const toggleButton = document.querySelector("#menu");
  const toggleButtonIcon = document.querySelector("#menu i");
  const dropDown = document.querySelector(".dropdown");

  if (toggleButton != null) {
    toggleButton.onclick = function () {
      dropDown.classList.toggle("open");
      const isOpen = dropDown.classList.contains("open");
      toggleButtonIcon.classList = isOpen ? "bx bx-x" : "bx bx-menu";
    };
  }
}

//Sameetah part where she is writing a code where when you click on name
const game = document.getElementById("game");
const wilder = document.getElementById("wilder");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
game.addEventListener("click", function () {
  section1.classList.add("hidden");
  section2.classList.remove("hidden");
});

wilder.addEventListener("click", function () {
  section2.classList.add("hidden");
  section1.classList.remove("hidden");
});
