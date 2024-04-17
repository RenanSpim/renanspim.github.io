const navbar = document.querySelector(".nav");
const menuContainer = document.querySelector(".menu-container");
const sideBar = document.querySelector(".side-bar");

if (localStorage.getItem("sidebar") === "on") {
    menuContainer.classList.add("show");
    sideBar.classList.add("show");
}

function filhoTem(filho, elemento) {
    let curr = filho;

    while (curr !== null) {
        if (curr === elemento) return true;
        curr = curr.parentElement;
    }

    return false;
}

window.addEventListener("click", e => {
    if (filhoTem(e.target, menuContainer)) {
        menuContainer.classList.toggle("show");
        sideBar.classList.toggle("show");
        
        localStorage.getItem("sidebar") === "on"
            ? localStorage.setItem("sidebar", "off")
            : localStorage.setItem("sidebar", "on");
    } else if (!filhoTem(e.target, sideBar) && !filhoTem(e.target, navbar)) {
        menuContainer.classList.remove("show");
        sideBar.classList.remove("show");
        localStorage.setItem("sidebar", "off");
    }
});

