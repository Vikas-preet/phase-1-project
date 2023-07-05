//Elements

const cakesSelect = document.querySelector("#cakes")
const cardDiv = document.createElement("div")

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

  fetch(`http://localhost:3000/cakes/${cakeInput}`)
    .then((res) => res.json())
    .then((data) => {
      displayCake(data)
    })
}

// displayCake function will display the selected option in the container

function displayCake(data) {
  //replacechildren funtion will clear the previous options
  cakesContainer.replaceChildren()

  const image = document.querySelector(".detail-image")
  const title = document.querySelector(".display-heading")
  const rating = document.getElementById("display-rating")
  const comment = document.getElementById("display-comment")

  title.textContent = data.name
  image.src = data.image
  rating.textContent = data.rating
  comment.textContent = data.comment
}

///////////////////////////////////////////////////////////////////////////
// New form to get the customer's suggestion
const newCakeOption = document.getElementById("new-cake-choice")
newCakeOption.addEventListener("submit", (event) => {
  event.preventDefault()
  const newName = document.getElementById("new-name").value
  const newImage = document.getElementById("new-image").value
  const newRating = document.getElementById("new-rating").value
  const newComment = document.getElementById("new-comment").value

  const newCake = {
    name: newName,
    image: newImage,
    rating: newRating,
    comment: newComment,
  }
  postCakeData(newCake)
  event.target.reset()
})

//post request function to add new cake
const postCakeData = (newCake) => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCake),
  }
  return fetch("http://localhost:3000/cakes", config).then((data) => {
    alert("Thanks for your valuable suggestion.")
    return data.json()
  })
}
