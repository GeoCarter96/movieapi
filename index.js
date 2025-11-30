//https://www.omdbapi.com/?i=tt3896198&apikey=d69e1a3c&s=dark

async function main() {
    const movie = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=d69e1a3c");
    const movies = await movie.json();
    const movieList = document.querySelector('.search-controls');
    
    movieList.innerHTML = movies.Search.map((film) => 
     `<div class="movie-card">
      <img src="${film.poster}" alt="">
      <h3>${film.title}</h3>
      <p>${film.year}</p>
    </div>
    <div class="movie-card">
      <img src="${film.poster}" alt="">
      <h3>${film.title}</h3>
      <p>${film.year}</p>
    </div>
    <div class="movie-card">
      <img src="${film.poster}" alt="">
      <h3>${film.title}</h3>
      <p>${film.year}</p>
    </div>
    <div class="movie-card">
      <img src="${film.poster}" alt="">
      <h3>${film.title}</h3>
      <p>${film.year}</p>
    </div>
    <div class="movie-card">
      <img src="${film.poster}" alt="">
      <h3>${film.title}</h3>
      <p>${film.year}</p>
    </div>
    <div class="movie-card">
      <img src="${film.poster}" alt="">
      <h3>${film.title}</h3>
      <p>${film.year}</p>
    </div>`).join("");
    
}

main();
