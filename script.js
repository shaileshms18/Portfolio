const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    document.querySelectorAll(".nav a").forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

const themeButton = document.querySelector(".theme-toggle");
themeButton?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const light = document.body.classList.contains("light");
  themeButton.setAttribute("aria-pressed", String(light));
});

document.getElementById("year").textContent = new Date().getFullYear();

const sections = document.querySelectorAll("main section[id]");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".nav a").forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach((section) => observer.observe(section));
}
