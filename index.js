//https://www.omdbapi.com/?i=tt3896198&apikey=d69e1a3c&s=dark

async function main() {
    const movie = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=d69e1a3c&s=dark");
    const movies = await movie.json();
    const movieList = document.querySelector(".search-group");
    movieList.innerHTML = movies.map((movie) => userHtml(user)).join("");
}

main();

function showMovies(type) {
    localStorage.setItem("type",type);
    window.location.href = `${window.location.origin}/title.html`
}

function movieHtml(movie) {
    return `<div class="search-controls">
        <button id="searchBtn">Search</button>
        <select id="sortSelect" class="sort-select">
          <option value="" disabled="" selected="">Sort movies...</option>
          <option value="az">${movie.title} A → Z</option>
          <option value="za">${movie.title} Z → A</option>
          <option value="newest">${movie.newest}</option>
          <option value="oldest">${movie.oldest}</option>
        </select>
        </div>`
}