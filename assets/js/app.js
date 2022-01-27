const shareBtn = document.querySelector(".share-background");
const shareBtnAfter = document.querySelector(".share-background-socials ");
const divActive = document.querySelector(".active");

shareBtn.addEventListener("click", () => {
  if (window.innerWidth >= 1024) {
    if (divActive.classList.contains("translate")) {
      divActive.classList.remove("translate");
      divActive.style.zIndex = "-1";
      return;
    }
    divActive.classList.add("translate");
    divActive.style.zIndex = "1";

    shareBtnAfter.remove();
  } else {
    divActive.classList.add("translate");
  }
});

shareBtnAfter.addEventListener("click", () => {
  if (divActive.classList.contains("translate")) {
    divActive.classList.remove("translate");
  } else {
    divActive.classList.add("translate");
  }
});
