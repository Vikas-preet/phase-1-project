//Elements
const cakesSelect = document.querySelector("#cakes")

//Functions
getCakes()

//Event listeners

cakesSelect.addEventListener("change", selectaCake)

function getCakes() {
  fetch("http://localhost:3000/cakes")
    .then((res) => res.json())
    .then((cakes) => renderCakeOptions(cakes))
    .catch((error) => alert(error))
}

function renderCakeOptions(cakes) {
  cakes.forEach((cake) => {
    const option = document.createElement("option")
    option.value = cake.name
    option.textContent = cake.name
    cakesSelect.append(option)
  })
}
