const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.getElementById("botonCalcular");
const pResult = document.getElementById("result");

function botonOnClick() {
  const suma = Number(input1.value) + Number(input2.value);
  pResult.append(`El resultado es ${suma}`);
  debugger;
  pResult.innerText = "Hola";
}
