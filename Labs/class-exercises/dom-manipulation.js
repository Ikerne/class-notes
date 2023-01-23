//* EJERCICIOS

// BLOCK 001

// 1º - Crea un <p></p> dentro de un tag de tipo <div id="insert-p"></div>

let newElement = document.createElement("p");
let newVar = document.querySelector("#insert-p").appendChild(newElement);
console.log(newElement);
newElement.id = "myP"


// 2º - Crea un <div id="nested"></div> desde código
let newDiv = document.createElement("div");
let newDivVar = document.querySelector("#section").appendChild(newDiv);
newDiv.id = "nested"
console.log(newDiv);

// 3º - Crea contenido de texto del elemento <p></p> creado para introducir el siguiente texto: "Programming is great"
newElement.innerText ="Programming is great"; // newElement is the name of the variable where i created the p so i reference it and add inner text to it with .innerText

newDiv.innerText = "nested div";



//4º - Crea una función que cambie el contenido del texto de un <p></p> en función a una variable string.

function changeText(text) {
    let newText = document.getElementById("myP");
    newText.innerHTML = text;
} 
changeText("This is the new text");

// Block 002

// 1º - Crea un elemento de color verde y un botón para cambiar el color de verde a rojo.



const addFunction = () => {
    const greenElement = document.getElementById("green");
    const redElement = document.getElementById("red");

    if (greenElement.style.display === "none") {
        greenElement.style.display = "block";
        redElement.style.display = "none";
    } else {
        greenElement.style.display = "none";
        redElement.style.display = "block";
    }
};




// 2º - Crea un elemento <div></div> y asignale una clase "green-box" que haga que sea una caja de 100px de alto y ancho de color verde.



let greenBox = document.createElement("div");
let newGreenBox = document.querySelector("#block2Q2").appendChild(greenBox);
greenBox.className = "green-box";
console.log(greenBox);
greenBox.innerHTML = "greenBox Block 2 Q 2"

// 3º - Crea una <div class="remove-class"></div> y elimínale la clase mediante js. La clase remove-class debe hacer que el elemento mida 100vw de ancho y 100px de alto y tener un background azul.

let removeClass =document.createElement("div");
let newRemoveClass= document.querySelector("#block2Q3").appendChild(removeClass);
removeClass.className = "removeClass";
//uncomment one of the following and see it change:
removeClass.classList.remove("removeClass");
// removeClass.classList.add("green-box")


removeClass.innerHTML = "removeClass Block 2 Q 3"
console.log(removeClass);

// 4º 1 - Crea un botón que, al ser pulsado, introduzca en el dom un <p>Texto insertado</p>

function addText() {
    let newParagraph = document.createElement("p");
    let text = document.createTextNode("Texto insertado");
    newParagraph.appendChild(text);
    document.querySelector("#block2Q4").appendChild(newParagraph);
  }


// 5º - Crea un botón que, al ser pulsado, introduzca una tabla de tres columnas y tres filas.

function addTable() {
    let table = document.createElement("table");
    for (let i = 0; i < 3; i++) {
      let row = document.createElement("tr");
      for (let j = 0; j < 3; j++) {
        let cell = document.createElement("td");
        let cellText = document.createTextNode("Cell " + (i+1) + "," + (j+1));
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
    document.querySelector("#block2Q5").appendChild(table);
  }