const h1 = document.querySelector("h1");
const form = document.querySelector("#formulario");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btnCalcular = document.getElementById("botonCalcular");
const btnReiniciar = document.getElementById("botonLimpiar");
const pResult = document.getElementById("result");

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

function sumarInputs() {
  if (input1.value !== "" && input2.value !== "") {
    pResult.innerText = "";
    const suma = +input1.value + +input2.value;
    pResult.append(`= ${suma}`);
    pResult.style.color = "white";
    pResult.style.fontSize = "30px";
  } else {
    pResult.innerText = "Enter two numeric values";
    pResult.style.fontSize = "20px";
    pResult.style.color = "#274930";
  }
}

function botonReiniciar() {
  input1.value = "";
  input2.value = "";
  pResult.innerText = "Result";
  pResult.style.color = "#A2AABF";
  pResult.style.fontSize = "20px";
}
