const { style } = document.documentElement;
const alavancaContainer = document.querySelector(".alavanca-container");
const bola = alavancaContainer.querySelector(".bola");
const sol = bola.querySelector("#sol");
const lua = bola.querySelector("#lua");

let temaStr = localStorage.getItem("tema");

if (temaStr === null) {
    temaStr = window.matchMedia("(prefers-color-scheme: dark)") ? "escuro" : "claro";
    localStorage.setItem("tema", temaStr);
}

const temas = {
    claro() {
        style.setProperty("--bg-color", "var(--light-bg-color)");
        style.setProperty("--text-color", "var(--light-text-color)");
        bola.style.transform = "translateX(0%)";
        sol.classList.add("svg-show");
        lua.classList.remove("svg-show");
    },
    escuro() {
        style.setProperty("--bg-color", "var(--dark-bg-color)");
        style.setProperty("--text-color", "var(--dark-text-color)");
        bola.style.transform = "translateX(100%)";
        lua.classList.add("svg-show");
        sol.classList.remove("svg-show");
    }
};

temas[temaStr]();

alavancaContainer.addEventListener("click", e => {
    temaStr = (temaStr === "claro") ? "escuro" : "claro";
    temas[temaStr]();
    localStorage.setItem("tema", temaStr);
});
