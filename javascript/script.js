const menuBtn = document.querySelector(".hamburgueMenu");
const menuLinks = document.querySelector(".menuLinks");

menuBtn.addEventListener("click", () => {
  menuLinks.classList.toggle("active");
});
