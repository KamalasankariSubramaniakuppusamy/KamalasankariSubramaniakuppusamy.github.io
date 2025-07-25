document.addEventListener("DOMContentLoaded", () => {
  const titleText = "My Resume";
  const descText = "A snapshot of my journey, experience, and expertise in technology and innovation.";

  const titleEl = document.getElementById("typewriter-title-text");
  const descEl = document.getElementById("typewriter-desc-text");
  const descPara = document.querySelector(".resume-description");
  const resumeFrame = document.querySelector(".resume-frame");
  const downloadWrapper = document.querySelector(".download-wrapper");

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
      descCursor.style.animation = "blink-round 0.8s infinite";
      fadeInResume();
    }
  }

  function fadeInResume() {
    resumeFrame.classList.add("visible");
    setTimeout(() => {
      downloadWrapper.classList.add("visible");
    }, 150);
  }

  typeTitle();
});
