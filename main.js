//Elements

const cakesSelect = document.querySelector("#cakes")
const cardDiv = document.createElement("div")
const image = document.querySelector(".detail-image")
const title = document.querySelector(".display-heading")
const rating = document.getElementById("display-rating")
const comment = document.getElementById("display-comment")

//Event listeners
// First event listener to select the option from drop down for cake choice
cakesSelect.addEventListener("change", fetchCake)

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

//renderCakeOptions to show the option. We have created an element "option" and
//it will store the value for the users to select

function renderCakeOptions(cakes) {
  cakes.forEach((cake) => {
    const option = document.createElement("option")
    option.value = cake.id
    option.textContent = cake.name

    cakesSelect.append(option)
  })
}

//fetchCake function is to fetch the selected option from server
function fetchCake(e) {
  const cakeInput = e.target.value
  console.log(cakeInput)
  fetch(`http://localhost:3000/cakes/${cakeInput}`)
    .then((res) => res.json())
    .then((data) => {
      displayCake(data)
    })
}

// displayCake function will display the selected option in the container

function displayCake(data) {
  //replacechildren funtion will clear the previous options
  //cakesContainer.replaceChildren()

  title.textContent = data.name
  image.src = data.image
  rating.textContent = data.rating
  comment.textContent = data.comment
}

///////////////////////////////////////////////////////////////////////////
