// Seleccion de elementos del DOM
const inputRed = document.getElementById('red');
const inputGreen = document.getElementById('green');
const inputBlue = document.getElementById('blue');

const textRed = document.getElementById('range-rojo');
const textGreen = document.getElementById('range-verde');
const textBlue = document.getElementById('range-azul');

let rojo = inputRed.value;
let verde = inputGreen.value;
let azul = inputBlue.value;

textRed.innerText = rojo;
textGreen.innerText = verde;
textBlue.innerText = azul;



inputRed.addEventListener('change', (e) => {
  rojo = e.target.value;
  textRed.innerText = rojo;
  actualizarColor(rojo, verde, azul);
});

inputGreen.addEventListener('change', (e) => {
  verde = e.target.value;
  textGreen.innerText = verde;
  actualizarColor(rojo, verde, azul)
})

inputBlue.addEventListener('change', (e) => {
  azul = e.target.value
  textBlue.innerText = azul;
  actualizarColor(rojo, verde, azul)
})


// Actualizar el color
function actualizarColor (rojo, verde, azul) {
  const colorRGB = `rgb(${rojo},${verde},${azul})`;
  document.body.style.backgroundColor = colorRGB
}