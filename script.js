/* Script for dropdown menu ==>>> */
const toggleButton = document.querySelector("#menu");
const toggleButtonIcon = document.querySelector("#menu i");
const dropDown = document.querySelector(".dropdown");
const gridWrapper2 = document.querySelector("#grid-wrapper2")
const startBtn = document.querySelector("#start")
const doneBtn = document.querySelector("#done")
const finishBtn = document.querySelector("#close")

toggleButton.onclick = function () {
    dropDown.classList.toggle("open")
    const isOpen = dropDown.classList.contains("open")
    toggleButtonIcon.classList = isOpen ? "bx bx-x" : "bx bx-menu"
}



startBtn.onclick = function () {
    gridWrapper2.classList.remove("hide")
    startBtn.classList.add("hide")
    doneBtn.classList.remove("hide")
    finishBtn.classList.remove("hide")
}

finishBtn.onclick = function () {
    gridWrapper2.classList.add("hide")
    startBtn.classList.remove("hide")
    doneBtn.classList.add("hide")
    finishBtn.classList.add("hide")
}



function result() {

    var score = 0;
    if (document.getElementById('correct1').checked) {
        score++;
    }
    if (document.getElementById('correct2').checked) {
        score++;
    }
    if (document.getElementById('correct3').checked) {
        score++;
    }
    if (document.getElementById('correct4').checked) {
        score++;
    }
    alert("Your score is:" + score);
}

toggleButton.onclick = function () {
    dropDown.classList.toggle("open");
    const isOpen = dropDown.classList.contains("open");
    toggleButtonIcon.classList = isOpen ? "bx bx-x" : "bx bx-menu"
}
