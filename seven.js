//Sameetah part where she is writing a code where when you click on name
const images = document.querySelectorAll('.image');

images.forEach((image, index) => {
    image.addEventListener('click', function () {
        if (index === 0)

            window.location.href = "planet.html";

        else if (index === 1)
            window.location.href = "Seven wonders/seven-wonders.html";

        else
            window.location.href = "galax.html";

    });
});
