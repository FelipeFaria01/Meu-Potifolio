const menuBtn = document.querySelector(".hamburgueMenu");
const menuLinks = document.querySelector(".menuLinks");

menuBtn.addEventListener("click", () => {
  if (window.innerWidth <= 800) {
    menuLinks.classList.toggle("active");
  }
});
