const menuBtn = document.querySelector(".hamburgueMenu");
const menuLinks = document.querySelector(".menuLinks");

menuBtn.addEventListener("click", () => {
  menuLinks.style.display = 
    menuLinks.style.display === "block" ? "none" : "block";
});
