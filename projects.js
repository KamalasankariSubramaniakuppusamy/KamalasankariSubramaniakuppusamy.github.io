document.addEventListener("DOMContentLoaded", () => {
  const titleText = "Notable Projects";
  const descText = "A curated showcase of my hands-on projects, blending technical depth with real-world impact.";

  const titleEl = document.getElementById("typewriter-title-text");
  const descEl = document.getElementById("typewriter-desc-text");
  const descPara = document.querySelector(".projects-description");
  const cards = document.querySelectorAll(".project-card");

  let titleIdx = 0;
  let descIdx = 0;

  function typeTitle() {
    if (titleIdx < titleText.length) {
      titleEl.textContent += titleText.charAt(titleIdx);
      titleIdx++;
      setTimeout(typeTitle, 100);
    } else {
      document.querySelector(".cursor.round").style.display = "none";
      descPara.style.visibility = "visible";
      setTimeout(() => {
        typeDesc();
      }, 300);
    }
  }

  function typeDesc() {
    const descCursor = document.querySelector(".desc-cursor");
    if (descIdx < descText.length) {
      descEl.textContent += descText.charAt(descIdx);
      descIdx++;
      setTimeout(typeDesc, 35);
    } else {
      fadeInCardsSequentially();
    }
  }

  function fadeInCardsSequentially(index = 0) {
    if (index >= cards.length) return;
    cards[index].classList.add("visible");
    setTimeout(() => fadeInCardsSequentially(index + 1), 150);
  }

  typeTitle();
});
