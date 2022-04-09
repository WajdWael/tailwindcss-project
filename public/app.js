// Navbar section
const icon = document.querySelector("#icon");
const ul = document.querySelector("#ul");
const iconContainer = document.querySelector("#icon-container");

function show(){
    ul.classList.toggle("active");
    icon.style.display = "none";
    iconContainer.innerHTML = `<i class="fa-solid cursor-pointer text-2xl fa-xmark" id="icon" onclick="hide()"></i>`;
}

function hide() {
    ul.classList.toggle("active");
    iconContainer.innerHTML = `<i class="fas fa-bars cursor-pointer text-2xl" id="icon" onclick="show()"></i>`;
}

// FAQ section
const questions = document.querySelectorAll(".question");
questions.forEach(function (ele) {
    const icons = ele.querySelector(".qusetion-btn");
    icons.addEventListener('click', function () {
        questions.forEach(function (i) {
            if (i !== ele) {
                i.classList.remove("show-text");
            }
        });
        ele.classList.toggle("show-text");
    });
})