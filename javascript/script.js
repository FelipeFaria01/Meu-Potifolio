// --- MENU HAMBÚRGUER ---
const menuBtn = document.querySelector(".hamburgueMenu");
const menuLinks = document.querySelector(".menuLinks");
const navLinks = document.querySelectorAll(".menuLinks a, .navbar a"); // Seleciona links do mobile e desktop

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Evita que o clique feche o menu imediatamente
  menuLinks.classList.toggle("active");
});

// Fecha o menu se clicar fora dele
document.addEventListener("click", (e) => {
  if (!menuLinks.contains(e.target) && e.target !== menuBtn) {
    menuLinks.classList.remove("active");
  }
});

// Rolagem suave ao clicar nos links do menu
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");

    // Verifica se o link é interno (começa com #)
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

      // Fecha o menu mobile depois de clicar
      menuLinks.classList.remove("active");
    }
  });
});

// --- BOTÃO DE TEMA ---
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  themeBtn.textContent = document.body.classList.contains("light-theme") ? "☀️" : "🌙";
});

// --- HARD SKILLS ---
const skillIcons = document.querySelectorAll(".skillsIcons i");
const skillNameBox = document.getElementById("skillName");

skillIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    const skillName = icon.getAttribute("data-skill");
    skillNameBox.textContent = skillName;
    skillNameBox.classList.add("active");

    setTimeout(() => {
      skillNameBox.classList.remove("active");
    }, 2500);
  });
});