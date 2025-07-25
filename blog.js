document.addEventListener("DOMContentLoaded", () => {
  // BLOG-SPECIFIC SCROLL ANIMATIONS (optional)
  const blogCards = document.querySelectorAll(".blog-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  blogCards.forEach(card => observer.observe(card));
});
