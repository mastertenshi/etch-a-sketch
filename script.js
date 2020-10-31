function createTable() {
    let tableDiv = document.getElementById("container");
    tableDiv.appendChild(document.createElement("table"));
    for (let i = 0; i < gridSize; i++) {
        
        let table = tableDiv.lastElementChild;

        table.appendChild(document.createElement("tr"));

        if(isColored){
            table.id = "table-colored";
            lightnessArray.push([]);
        } else {
            table.id = "table-black";
        }

        for(let k = 0; k < gridSize; k++) {
            // tr
            table.childNodes[i].appendChild(document.createElement("td"));

            // td
            table.childNodes[i].childNodes[k].style.padding = `${40 / gridSize}vmin`;
            
            if(isColored){
                lightnessArray[i].push(100);
            }
        }
    }
}

function resetTdBackground() {
    for (let i = 0; i < gridSize; i++) {
        for(let k = 0; k < gridSize; k++) {

            let table;

            if(isColored) {
                lightnessArray[i][k] = 100;
                table = document.getElementById("table-colored");
            } else {
                table = document.getElementById("table-black");
            }

            let td = table.childNodes[i].childNodes[k];

            td.style.backgroundColor = "hsl(0, 0%, 100%)";
        }
    }
}

function addTdMouseEnterListener() {
    for (let i = 0; i < gridSize; i++) {
        for(let k = 0; k < gridSize; k++) {

            let table;

            if (isColored) {
                table = document.getElementById("table-colored");
            } else {
                table = document.getElementById("table-black");
            } 

            let td = table.childNodes[i].childNodes[k];

            td.addEventListener("mouseenter", function() {
                if (isColored) {
                    if (lightnessArray[i][k] > 0)
                        lightnessArray[i][k] -= 10;

                    let hue = Math.floor(Math.random() * 360);
                    let saturation = Math.floor(Math.random() * (100 - 40)) + 40;

                    this.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightnessArray[i][k]}%)`;
                } else {
                    this.style.backgroundColor = "hsl(0, 0%, 0%)";
                }
            })
        }
    }
}

function switchBoard() {
    if(isColored) {
        document.getElementById("table-colored").remove();
        isColored = false;
        init();
    } else {
        document.getElementById("table-black").remove();
        isColored = true;
        init();
    }
}

function changeGridSize() {
    let input = document.getElementById("grid-size");
    let num = parseInt(input.value);
    if(Number.isInteger(num)){
        console.log("HERE");
        if (num >= 16 && num <= 100){
            input.style.borderColor = "lightgray";
            gridSize = num;
            if(isColored) {
                document.getElementById("table-colored").remove();
            } else {
                document.getElementById("table-black").remove();
            }
            init();
        } else {
            input.style.borderColor = "red";
        }
    } else {
        input.textContent = "";
    }
}

let lightnessArray = [];
let gridSize = 50;

let isColored = true;

function init() {
    createTable(isColored);
    addTdMouseEnterListener(isColored);
    resetTdBackground(isColored);
}

init();
