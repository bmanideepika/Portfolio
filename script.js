// Lightbox
function openLightbox(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = src;
}
function closeLightbox() { document.getElementById("lightbox").style.display = "none"; }

// Dark/Light Mode Toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
  const btn = document.querySelector(".theme-toggle");
  btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}

// Scroll-triggered animation
const sections = document.querySelectorAll(".fade-slide");
window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const height = window.innerHeight / 1.3;
    if(top < height) { section.style.opacity = 1; section.style.transform = "translateY(0)"; }
  });
});
