const toppings = document.getElementsByClassName('topping')

function mostrarClick(e) {
  console.log(e.target.innerText)
}

for (const topping of toppings) {
  topping.addEventListener('click', mostrarClick)
}