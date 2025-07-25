document.addEventListener("DOMContentLoaded", () => {
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
});
