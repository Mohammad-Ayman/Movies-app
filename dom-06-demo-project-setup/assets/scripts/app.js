// Global variables

const newMovieButton = document.querySelector("header button");
const addModalElement = document.getElementById("add-modal");
const backdropElement = document.getElementById("backdrop");
const modalAddButton = document.querySelector(".btn--success");
const modalCancelButton = document.querySelector(".btn--passive");
const movieListElement = document.getElementById("movie-list");

let title = document.getElementById("title");
let imageUrl = document.getElementById("image-url");
let rating = document.getElementById("rating");

const movieData = [];
// Global functions
const toggleAddModal = () => {
  addModalElement.classList.toggle("visible");
};
const toggleBackdrop = () => {
  backdropElement.classList.toggle("visible");
};
const clearMovieInput = () => {
  title.value = "";
  imageUrl.value = "";
  rating.value = "";
};
function modalCancelButtonHandler() {
  toggleAddModal();
  toggleBackdrop();
  clearMovieInput();
}

//New movie form
newMovieButton.addEventListener("click", newMovieButtonHandler);

function newMovieButtonHandler() {
  toggleAddModal();
  toggleBackdrop();
}

// New movie entry
modalAddButton.addEventListener("click", modalAddButtonHandler);
function ab() {
  movieListElement.innerHTML = `<ul id='movie-list'>
  <li class = 'movie-element '>${movieData[movieData.length - 1].Title}</li>
    <li class = 'movie-element movie-element__image'><img src="${
      movieData[movieData.length - 1].imageUrl
    }" alt="JS"></li>
    <li class = 'movie-element movie-element__info'>${
      movieData[movieData.length - 1].rating
    }</li>
    </ul>`;
}

function modalAddButtonHandler() {
  title = document.getElementById("title").value.trim();
  imageUrl = document.getElementById("image-url").value.trim();
  rating = document.getElementById("rating").value.trim();

  let lastEntry = {
    Title: title,
    Image: imageUrl,
    Rate: rating,
  };
  movieData.push(lastEntry);
  console.log(movieData);
  ab();
  toggleAddModal();
  toggleBackdrop();
  clearMovieInput();
}

modalCancelButton.addEventListener("click", modalCancelButtonHandler);
backdropElement.addEventListener("click", modalCancelButtonHandler);
