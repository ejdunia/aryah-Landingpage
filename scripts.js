const btn = document.getElementById("menu-btn");
const navlinks = document.querySelector(".navLinks");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("active");
    btn.classList.toggle("open");
});
