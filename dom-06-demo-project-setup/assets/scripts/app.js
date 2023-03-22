// Global variables
const newMovieButton = document.querySelector("header button");
const addModalElement = document.getElementById("add-modal");
const backdropElement = document.getElementById("backdrop");
const modalAddButton = document.querySelector(".btn--success");
const modalCancelButton = document.querySelector(".btn--passive");
const movieListElement = document.getElementById("movie-list");
const deleteModalElement = document.getElementById("delete-modal");

let titleInput = document.getElementById("title");
let imageUrlInput = document.getElementById("image-url");
let ratingInput = document.getElementById("rating");

const movieData = [];
// Global functions
const toggleAddModal = () => {
  addModalElement.classList.toggle("visible");
};
const toggleBackdrop = () => {
  backdropElement.classList.toggle("visible");
};
const toggleDeleteModal = () => {
  deleteModalElement.classList.toggle("visible");
};
const clearMovieInput = () => {
  title.value = "";
  imageUrlInput.value = "";
  rating.value = "";
};

// Getting user input
const getUserInput = () => {
  titleInput = document.getElementById("title").value.trim();
  imageUrlInput = document.getElementById("image-url").value.trim();
  ratingInput = document.getElementById("rating").value.trim();

  if (titleInput === "" || imageUrlInput === "" || ratingInput === "") {
    alert("Invalid input");
    return;
  }
  let lastEntry = {
    Title: titleInput,
    Image: imageUrlInput,
    Rate: ratingInput,
  };
  movieData.push(lastEntry);
  console.log(movieData);
};

// Creating new li and appending it to lu
const createNewLi = () => {
  getUserInput();
  movieListElement.innerHTML = "";
  movieData.forEach((movie) => {
    const newLi = document.createElement("li");
    newLi.classList.add("movie-element");
    newLi.innerHTML = ` <div class="movie-element__image">
    <img src="${movie.Image}" alt="${movie.Title}">
    </div>
    <div class="movie-element__info">
    <h2>${movie.Title}</h2>
    <p>${movie.Rate}/5 stars</p>
    </div>
    `;
    movieListElement.appendChild(newLi);
  });
};

function modalCancelButtonHandler() {
  toggleAddModal();
  toggleBackdrop();
  clearMovieInput();
}

//New movie form
function newMovieButtonHandler() {
  toggleAddModal();
  toggleBackdrop();
}

// New movie entry
function modalAddButtonHandler() {
  createNewLi();
  toggleAddModal();
  toggleBackdrop();
  clearMovieInput();
}

newMovieButton.addEventListener("click", newMovieButtonHandler);
modalAddButton.addEventListener("click", modalAddButtonHandler);
modalCancelButton.addEventListener("click", modalCancelButtonHandler);
backdropElement.addEventListener("click", modalCancelButtonHandler);
movieListElement.addEventListener("click", toggleDeleteModal);

// // Global variables
// const newMovieButton = document.querySelector("header button");
// const addModalElement = document.getElementById("add-modal");
// const backdropElement = document.getElementById("backdrop");
// const modalAddButton = document.querySelector(".btn--success");
// const modalCancelButton = document.querySelector(".btn--passive");
// const movieListElement = document.getElementById("movie-list");

// const titleInput = document.getElementById("title");
// const imageUrlInputInput = document.getElementById("image-url");
// const ratingInput = document.getElementById("rating");

// let movieData = [];

// // Global functions
// const toggleAddModal = () => {
//   addModalElement.classList.toggle("visible");
//   backdropElement.classList.toggle("visible");
// };

// const clearMovieInput = () => {
//   titleInput.value = "";
//   imageUrlInputInput.value = "";
//   ratingInput.value = "";
// };

// const renderMovieList = () => {
//   movieListElement.innerHTML = "";
//   movieData.forEach((movie) => {
//     const movieEl = document.createElement("li");
//     movieEl.classList.add("movie-element");
//     movieEl.innerHTML = `
//       <div class="movie-element__image">
//         <img src="${movie.image}" alt="${movie.title}">
//       </div>
//       <div class="movie-element__info">
//         <h2>${movie.title}</h2>
//         <p>${movie.rating}/5 stars</p>
//       </div>
//     `;
//     movieListElement.appendChild(movieEl);
//   });
// };

// const closeModal = () => {
//   toggleAddModal();
//   clearMovieInput();
// };

// // Event listeners
// newMovieButton.addEventListener("click", toggleAddModal);
// modalCancelButton.addEventListener("click", closeModal);
// backdropElement.addEventListener("click", closeModal);
// modalAddButton.addEventListener("click", () => {
//   const titleValue = titleInput.value.trim();
//   const imageUrlInputValue = imageUrlInputInput.value.trim();
//   const ratingValue = ratingInput.value.trim();

//   if (titleValue === "" || imageUrlInputValue === "" || ratingValue === "") {
//     alert("Please enter valid values in all fields.");
//     return;
//   }

//   const newMovie = {
//     title: titleValue,
//     image: imageUrlInputValue,
//     rating: ratingValue,
//   };
//   movieData.push(newMovie);
//   renderMovieList();
//   closeModal();
// });
