let scrollContainer = document.querySelector(".gallery");
let backBtn = document.querySelector("#backBtn");
let nextBtn = document.querySelector("#nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});

backBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft -= 900;

  scrollContainer.style.scrollBehavior = "smooth";
});

nextBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft += 900;

  scrollContainer.style.scrollBehavior = "smooth";
});
