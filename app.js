const alavancaContainer = document.querySelector("#alavanca-container");

let temaStr = localStorage.getItem("tema");
const temas = {
    claro: () => {
        console.log("claro");
    },
    escuro: () => {
        console.log("escuro");
    }
};

temas[temaStr]();

alavancaContainer.addEventListener("click", e => {
    temaStr = (temaStr === "claro") ? "escuro" : "claro";
    temas[temaStr]();
    localStorage.setItem("tema", temaStr);
});
