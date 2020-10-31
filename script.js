function createTable() {
    tableDiv.appendChild(document.createElement("table"));
    for (let i = 0; i < 16; i++) {
        // table
        tableDiv.firstElementChild.appendChild(document.createElement("tr"));

        lightnessArray.push([]);
        for(let k = 0; k < 16; k++) {
            let tr = tableDiv.firstElementChild.childNodes[i];

            tr.appendChild(document.createElement("td"));

            lightnessArray[i].push(100);
        }
    }
}

function resetTdBackground() {
    for (let i = 0; i < 16; i++) {
        for(let k = 0; k < 16; k++) {

            let td = tableDiv.firstElementChild.childNodes[i].childNodes[k];

            td.style.backgroundColor = "hsl(0, 0%, 100%)";

            lightnessArray[i][k] = 100;
        }
    }
}

function addTdMouseEnterListener() {
    for (let i = 0; i < 16; i++) {
        for(let k = 0; k < 16; k++) {

            let td = tableDiv.firstElementChild.childNodes[i].childNodes[k];

            td.addEventListener("mouseenter", function() {
                console.log(this.style.backgroundColor);

                if(lightnessArray[i][k] > 0)
                    lightnessArray[i][k] -= 10;

                let hue = Math.floor(Math.random() * 360);
                let saturation = Math.floor(Math.random() * (100 - 40)) + 40;
                
                this.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightnessArray[i][k]}%)`;
            })
        }
    }
}

let tableDiv = document.getElementById("container");
let lightnessArray = [];

createTable();

addTdMouseEnterListener();
resetTdBackground();

console.log(lightnessArray);

document.getElementById("button").addEventListener("click", resetTdBackground);

