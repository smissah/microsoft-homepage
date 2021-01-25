const navCollapsed = document.querySelector(".collapsed");
const navOpen = document.querySelector(".open");

const menuOverlay = document.querySelector(".menu-overlay");

navCollapsed.addEventListener("click", () => {
  navCollapsed.classList.toggle("hidden");
  navOpen.classList.toggle("hidden");
  menuOverlay.classList.toggle("active");
  //   menuOverlay.classList.toggle("inactive");
});
navOpen.addEventListener("click", () => {
  navCollapsed.classList.toggle("hidden");
  navOpen.classList.toggle("hidden");
  menuOverlay.classList.toggle("active");
  //   menuOverlay.classList.toggle("inactive");
});
