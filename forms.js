const slidePage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".nextBtn");

firstNextBtn.addEventListener("click", function() {
    slidePage.style.left = "-25%";
});