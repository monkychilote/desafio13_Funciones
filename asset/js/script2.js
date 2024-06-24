// Función para cambiar el color del div clickeado a negro
function changeColorToBlack(element) {
  element.style.backgroundColor = "black";
}

// Seleccionando los divs y agregando el evento click
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");

div1.addEventListener("click", function () {
  changeColorToBlack(this);
});
div2.addEventListener("click", function () {
  changeColorToBlack(this);
});
div3.addEventListener("click", function () {
  changeColorToBlack(this);
});
div4.addEventListener("click", function () {
  changeColorToBlack(this);
});

// Variable global para almacenar el color basado en la tecla presionada
let globalColor = "";

document.addEventListener("keydown", function (event) {
  const keyDiv = document.getElementById("key");
  if (event.key === "a") {
    globalColor = "pink";
    keyDiv.style.backgroundColor = globalColor;
  } else if (event.key === "s") {
    globalColor = "orange";
    keyDiv.style.backgroundColor = globalColor;
  } else if (event.key === "d") {
    globalColor = "lightblue";
    keyDiv.style.backgroundColor = globalColor;
  } else if (event.key === "q") {
    createColoredDiv("purple");
  } else if (event.key === "w") {
    createColoredDiv("gray");
  } else if (event.key === "e") {
    createColoredDiv("brown");
  }
});

// Función para crear un nuevo div con el color especificado
function createColoredDiv(color) {
  const newDiv = document.createElement("div");
  newDiv.className = "cuadrado";
  newDiv.style.backgroundColor = color;
  document.querySelector(".cajitas").appendChild(newDiv);
}
