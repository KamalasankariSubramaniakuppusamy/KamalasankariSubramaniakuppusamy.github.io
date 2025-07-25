document.addEventListener("DOMContentLoaded", () => {
  // -------------------------
  // 1. THEME TOGGLE LOGIC
  // -------------------------
  const toggle = document.getElementById("theme-toggle");
  const emoji = toggle.querySelector(".emoji");

  const isDark = localStorage.getItem("theme") === "dark";
  document.body.classList.toggle("dark", isDark);
  emoji.textContent = isDark ? "☀️" : "🌙";

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const darkMode = document.body.classList.contains("dark");
    emoji.textContent = darkMode ? "☀️" : "🌙";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  });

  // -------------------------
  // 2. TIMELINE ANIMATION
  // -------------------------
  const timelineItems = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  timelineItems.forEach(item => observer.observe(item));
});
