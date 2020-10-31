function createTable(isColored = false) {
    let tableDiv = document.getElementById("container");
    tableDiv.appendChild(document.createElement("table"));
    for (let i = 0; i < 16; i++) {
        
        let table = tableDiv.lastElementChild;

        table.appendChild(document.createElement("tr"));

        if(isColored){
            table.id = "table-colored";
            lightnessArray.push([]);
        } else {
            table.id = "table-black";
        }

        for(let k = 0; k < 16; k++) {
            // tr
            table.childNodes[i].appendChild(document.createElement("td"));
            
            if(isColored){
                lightnessArray[i].push(100);
            }
        }
    }
}

function resetTdBackground(isColored = false) {
    for (let i = 0; i < 16; i++) {
        for(let k = 0; k < 16; k++) {

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

function addTdMouseEnterListener(isColored = false) {
    for (let i = 0; i < 16; i++) {
        for(let k = 0; k < 16; k++) {

            let table;

            if (isColored) {
                table = document.getElementById("table-colored");
            } else {
                table = document.getElementById("table-black");
            } 

            td = table.childNodes[i].childNodes[k];

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

let lightnessArray = [];

createTable(true);
addTdMouseEnterListener(true);
resetTdBackground(true);

createTable();
addTdMouseEnterListener();
resetTdBackground();
