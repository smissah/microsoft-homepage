const navCollapsed = document.querySelector(".collapsed");
const navOpen = document.querySelector(".open");
const menuOverlay = document.querySelector(".menu-overlay");
const searchBtn = document.querySelector(".fa-search");
const searchField = document.querySelector(".search-field");
//!when the tacked menu is clicked
navCollapsed.addEventListener("click", () => {
  navCollapsed.classList.toggle("hidden");
  navOpen.classList.toggle("hidden");
  menuOverlay.classList.toggle("active");
  //   menuOverlay.classList.toggle("inactive");
});

//! when the x button is close
navOpen.addEventListener("click", () => {
  navCollapsed.classList.toggle("hidden");
  navOpen.classList.toggle("hidden");
  menuOverlay.classList.toggle("active");
  //   menuOverlay.classList.toggle("inactive");
});

//! when mouse leaves the open menu
menuOverlay.addEventListener("mouseleave", () => {
  //   alert("menu test out");

  //!use MOUSELEAVE NOT MOUSE OUT - out triggers even when i hover over text within the menu
  navCollapsed.classList.toggle("hidden");
  navOpen.classList.toggle("hidden");
  menuOverlay.classList.remove("active");
});

searchBtn.addEventListener("click", () => {
  searchField.classList.toggle("compressed");
});

searchField.addEventListener(
  "blur",
  (event) => {
    searchField.classList.toggle("compressed");
    event.stopPropagation();
  },
  true
);
