const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.getElementById("botonCalcular");
const pResult = document.getElementById("result");

function botonOnClick() {
  const suma = +input1.value + +input2.value;
  pResult.append(`El resultado es ${suma}`);
}

function botonReiniciar() {
  input1.value = "";
  input2.value = "";
  pResult.innerText = "";
}
