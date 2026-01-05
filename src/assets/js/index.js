document.addEventListener("DOMContentLoaded", () => {
  console.log("Baseline assets: JS is loaded");
  const pill = document.querySelector(".pill");
  if (pill) {
    pill.textContent = "Bundled JS is running";
  }
});
