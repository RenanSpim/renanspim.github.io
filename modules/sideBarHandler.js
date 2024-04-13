const menuContainer = document.querySelector(".menu-container");
const sideBar = document.querySelector(".side-bar");

sideBar.style.width = (window.innerWidth * 0.3 < 200)
    ? "calc(100vw - (var(--side-bar-padding) * 2))"
    : "calc(300px - (var(--side-bar-padding) * 2))";

window.addEventListener("resize", () => {
    sideBar.style.width = (window.innerWidth * 0.3 < 200)
    ? "calc(100vw - (var(--side-bar-padding) * 2))"
    : "calc(300px - (var(--side-bar-padding) * 2))";
});

menuContainer.addEventListener("click", () => {
    menuContainer.classList.toggle("show");
    sideBar.classList.toggle("show");
});
