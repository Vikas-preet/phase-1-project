//Elements
// create element using id and class to use in function
const cakesSelect = document.querySelector("#cakes")
const cakesContainer = document.querySelector(".display-container")

//Event listeners
// First event listener to select the option from drop down for cake choice
cakesSelect.addEventListener("change", displayCake)

//Functions
// getCakes will get all the cake option from json server
// getCakes function call
getCakes()

// getCakes defination
function getCakes() {
  fetch("http://localhost:3000/cakes")
    .then((res) => res.json())
    .then((cakes) => {
      renderCakeOptions(cakes)
    })
    .catch((error) => alert(error))
}

//renderCakeOptions to show the option. We have created an element option
function renderCakeOptions(cakes) {
  cakes.forEach((cake) => {
    const option = document.createElement("option")
    option.value = cake.name
    option.textContent = cake.name
    cakesSelect.append(option)
  })
}

function displayCake(e) {
  const value = e.target.value
  fetch`http://localhost:3000/cakes/{value}`
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })

  //create cardDiv and added class to it to hold the cake option
  //replacechildren funtion will clear the previous options
  cakesContainer.replaceChildren()
  const cardDiv = document.createElement("div")
  //class card will create border for the display option
  cardDiv.classList.add("card")

  const image = document.createElement("img")
  image.src = value.image

  const title = document.createElement("h3")
  title.textContent = value.name

  cardDiv.append(image, title)
  cakesContainer.append(cardDiv)
}
