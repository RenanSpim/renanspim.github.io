const { style } = document.documentElement;
const alavancaContainer = document.querySelector(".alavanca-container");
const bola = alavancaContainer.querySelector(".bola");

let temaStr = localStorage.getItem("tema");

if (temaStr === null) {
    temaStr = "claro";
    localStorage.setItem("tema", "claro");
}

const temas = {
    claro() {
        style.setProperty("--bg-color", "var(--light-bg-color)");
        style.setProperty("--text-color", "var(--light-text-color)");
        bola.style.transform = "translateX(0%)";
    },
    escuro() {
        style.setProperty("--bg-color", "var(--dark-bg-color)");
        style.setProperty("--text-color", "var(--dark-text-color)");
        bola.style.transform = "translateX(100%)";
    }
};

temas[temaStr]();

alavancaContainer.addEventListener("click", e => {
    temaStr = (temaStr === "claro") ? "escuro" : "claro";
    temas[temaStr]();
    localStorage.setItem("tema", temaStr);
});