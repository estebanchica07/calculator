const hn = document.querySelector("h1");
const pr = document.querySelector("p");
const parraf = document.querySelector(".parrafito");
const pi = document.getElementById("pid");
const entrada = document.querySelector("input");

console.log(entrada.value);

console.log({
  hn,
  pr,
  parraf,
  pi,
  entrada,
});

hn.innerHTML = "Cambio <br> Otro cambio";
pr.innerText = "Cambio pero en el texto <br> incluso con br";
hn.setAttribute("class", "Pacilia");
hn.classList.add("Cosmos");
console.log(hn.getAttribute("class")); //Para imprimir el valor del atributo marca del elemento hn.
hn.classList.remove("Pacilia");
console.log(hn.getAttribute("class"));
hn.classList.toggle("Terracota");
console.log(hn.getAttribute("class"));
hn.classList.toggle("Terracota");
console.log(hn.getAttribute("class"));
console.log(hn.classList.contains("Jorvas"));
console.log(hn.getAttribute("class"));

entrada.value = 123;
document.createElement("span");

const imagenNueva = document.createElement("img");
imagenNueva.setAttribute(
  "src",
  "https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg"
);
pi.append(imagenNueva);
parraf.innerHTML = "";
parraf.appendChild(imagenNueva);
