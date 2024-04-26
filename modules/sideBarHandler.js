const menuContainer = document.querySelector(".menu-container");

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
    } else if (!filhoTem(e.target, sideBar) && !filhoTem(e.target, navbar)) {
        menuContainer.classList.remove("show");
        sideBar.classList.remove("show");
    }
});

