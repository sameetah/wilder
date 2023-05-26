/*const toggleButton = document.querySelector(".toggle");
const toggleButtonIcon = document.querySelector(".toggle i");
const burgerMenu = document.querySelector(".burgerMenu");

toggleButton.onclick = function(){
    burgerMenu.classList.toggle("open")
    const isOpen = burgerMenu.classList.contains("open")
    toggleButtonIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars"
}
*/





//Sameetah part where she is writing a code where when you click on name
const game = document.getElementById("game");
const wilder=document.getElementById("wilder")
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
game.addEventListener('click', function() {
    section1.classList.add('hidden');
    section2.classList.remove('hidden');
  });

  wilder.addEventListener('click', function() {
    section2.classList.add('hidden');
    section1.classList.remove('hidden');
  });