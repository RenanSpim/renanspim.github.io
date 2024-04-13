const menuContainer = document.querySelector(".menu-container");
const sideBar = document.querySelector(".side-bar");

function toggleSideBar() {
    sideBar.classList.toggle("show");
}

menuContainer.addEventListener("click", toggleSideBar);
