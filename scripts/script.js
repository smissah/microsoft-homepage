const navCollapsed = document.querySelector(".collapsed");
const navOpen = document.querySelector(".open");
const menuOverlay = document.querySelector(".menu-overlay");
const searchBtn = document.querySelector(".fa-search");
const searchField = document.querySelector(".search-field");

//! checkbox dark theme settings
const checkbox = document.querySelector("input[name=darkModeCheck]");

checkbox.addEventListener("change", () => {
  console.log("tickbox");
  if (checkbox.checked) {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
  }
});

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};

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
