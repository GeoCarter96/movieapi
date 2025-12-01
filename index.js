//https://www.omdbapi.com/?i=tt3896198&apikey=d69e1a3c&s=dark


const loadingSpinner = document.getElementById("loadingSpinner");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const movieResults = document.getElementById("movieResults");

let currentMovies = []; // Store fetched movies

searchBtn.addEventListener("click", searchMovies);

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") searchMovies();
});

sortSelect.addEventListener("change", () => {
  displayMovies(currentMovies); 
});