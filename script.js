const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const produkBtn = document.getElementById("produkBtn");
const produkMenu = document.querySelector(".dropdown");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});

produkBtn.addEventListener("click", function (event) {
    if (window.innerWidth <= 650 && !produkMenu.classList.contains("open")) {
        event.preventDefault();
        produkMenu.classList.add("open");
    }
});
