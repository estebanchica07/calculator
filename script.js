const h1 = document.querySelector("h1");
const form = document.querySelector("#formulario");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btnCalcular = document.getElementById("botonCalcular");
const btnReiniciar = document.getElementById("botonLimpiar");
const pResult = document.getElementById("result");

function activarBoton() {
  if (input1.value !== "" && input2.value !== "") {
    btnCalcular.style.color = "white";
    btnCalcular.style.backgroundColor = "red";
  }
}

btnCalcular.addEventListener("click", sumarInputs);

btnReiniciar.addEventListener("click", botonReiniciar);

input1.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    btnCalcular.click();
  }
});

input2.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    btnCalcular.click();
  }
});

input2.addEventListener("input", activarBoton);
input1.addEventListener("input", activarBoton);

function sumarInputs() {
  if (input1.value !== "" && input2.value !== "") {
    pResult.innerText = "";
    const suma = +input1.value + +input2.value;
    pResult.append(`= ${suma}`);
    pResult.style.color = "white";
    pResult.style.fontSize = "30px";
    pResult.style.border = "3px solid white";
    btnCalcular.style.backgroundColor = "rgb(74, 140, 91)";
    btnCalcular.style.color = "black";
    btnReiniciar.style.color = "white";
    btnReiniciar.style.backgroundColor = "red";
  } else {
    pResult.innerText = "Enter two numeric values";
    pResult.style.fontSize = "20px";
    pResult.style.color = "#B14545";
    pResult.style.border = "3px solid red";
  }
}

function botonReiniciar() {
  input1.value = "";
  input2.value = "";
  pResult.innerText = "Result";
  pResult.style.color = "#A2AABF";
  pResult.style.fontSize = "20px";
  pResult.style.border = "3px solid white";
  btnCalcular.style.backgroundColor = "rgb(74, 140, 91)";
  btnCalcular.style.color = "black";
  btnReiniciar.style.color = "black";
  btnReiniciar.style.backgroundColor = "rgb(74, 140, 91)";
}
