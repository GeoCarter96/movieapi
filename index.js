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



async function searchMovies() {
    try {
        const res = await fetch (`https://www.omdbapi.com/?i=tt3896198&apikey=d69e1a3c&s=dark`);
        const user = await res.json();
        console.log(user);
    } catch(error){
        console.log(error);
    }
loadingSpinner.classList.add("active");
movieResults.innerHTML = "";

loadingSpinner.classList.remove("active");


if (user.res === "True") {
    currentMovies = user.Search;
    displayMovies(currentMovies);
} else {
    movieResults.innerHTML = "No movies found."
}
}

function displayMovies(movies) {
    const sortBy = sortSelect.value;
    let sortedMovies = [...movies];

    if (sortBy === "az") {
        sortedMovies.sort((a,b) => a.Title.localeCompare(b.Title));
    } else if (sortBy === "za") {
        sortedMovies.sort ((a,b) => b.Title.localeCompare(a.Title));
    } else if (sortBy === "newest") {
        sortedMovies.sort ((a,b) => Number(b.Year) - Number(a.Year));
    } else if (sortBy === "oldest") {
        sortedMovies.sort ((a,b) => Number(a.Year) - Number(b.Year));
    }

    const firstSix = sortedMovies.slice(0, 6); 

  movieResults.innerHTML = firstSix
    .map(
      (movie) => `
    <div class="movie-card">
      <img 
        src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/300x450/1a1a1a/ffffff?text=🎬+No+Image'}"
        alt="${movie.Title}"
      >
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
    </div>
  `
    )
    .join("");
}
