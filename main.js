//Elements
const cakesSelect = document.querySelector("#cakes")
const cakesContainer = document.querySelector(".display-container")

//Event listeners

cakesSelect.addEventListener("change", displayCake)

//Functions
getCakes()

function getCakes() {
  fetch("http://localhost:3000/cakes")
    .then((res) => res.json())
    .then((cakes) => {
      renderCakeOptions(cakes)
    })
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

// function to show the option
function displayCake(cakes) {
  const cardDiv = document.createElement("div")
  cardDiv.classList.add("card")

  const image = document.createElement("img")
  image.src = cakes.image

  const title = document.createElement("h3")
  title.textContent = cakes.name

  cardDiv.append(image, title)
  cakesContainer.append(cardDiv)
}
