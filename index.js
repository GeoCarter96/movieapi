//https://www.omdbapi.com/?i=tt3896198&apikey=d69e1a3c&s=dark
const API_KEY = "d69e1a3c&s=dark";

const loadingSpinner = document.getElementById("loadingSpinner");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const movieResults = document.getElementById("movieResults");

let currentMovies = []; 

searchBtn.addEventListener("click", searchMovies);

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") searchMovies();
});

sortSelect.addEventListener("change", () => {
  displayMovies(currentMovies); 
});



async function searchMovies() {
  const query = searchInput.value.trim();
  if (!query) return;

  loadingSpinner.classList.add("active");
  movieResults.innerHTML = "";

  const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
  const data = await response.json();

  loadingSpinner.classList.remove("active");

  if (data.Response === "True") {
    currentMovies = data.Search; 
    displayMovies(currentMovies);
  } else {
    movieResults.innerHTML = "No movies found. Try another search.";
  }
}

function displayMovies(movies) {
  const sortBy = sortSelect.value;
  let sortedMovies = [...movies]; 

  if (sortBy === "az") {
    sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
  } else if (sortBy === "za") {
    sortedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
  } else if (sortBy === "newest") {
    sortedMovies.sort((a, b) => Number(b.Year) - Number(a.Year));
  } else if (sortBy === "oldest") {
    sortedMovies.sort((a, b) => Number(a.Year) - Number(b.Year));
  }

  const firstFour = sortedMovies.slice(0, 4); 

  movieResults.innerHTML = firstFour
    .map(
      (movie) => `
    <div class="movie-card">
      <img 
        src="${movie.Poster}"
        alt="${movie.Title}"
      >
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
    </div>
  `
    )
    .join("");
}
