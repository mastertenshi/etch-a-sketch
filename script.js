let div = document.getElementById("container");

function createGrid() {
    for (let i = 0; i < 16*16; i++) {
        div.appendChild(document.createElement("div"));
    }
}

createGrid();