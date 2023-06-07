/*const toggleButton = document.querySelector(".toggle");

const toggleButton = document.querySelector(".toggle");
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
const images = document.querySelectorAll('.image');

images.forEach((image, index) => {
  image.addEventListener('click', function() {
    if (index === 0)
    
      window.location.href = "Seven wonders/seven-wonders.html";
    
   else if (index === 1) 
      window.location.href = "Seven wonders/seven-wonders.html";
    
    else 
      window.location.href = "Seven wonders/seven-wonders.html";
    
  });
});



