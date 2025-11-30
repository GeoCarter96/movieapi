//https://www.omdbapi.com/?i=tt3896198&apikey=d69e1a3c&s=dark

async function main() {
    const movie = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=d69e1a3c&s=dark");
    const movies = await movie.();
    console.log(
    movies.map((film) => 
     `<div class="search-controls">
<button id="searchBtn">Search</button>
<select id="sortSelect" class="sort-select">
    <option value="" disabled="" selected="">Sort movies...</option>
    <option value="az">Title A → Z</option>
    <option value="za">Title Z → A</option>
    <option value="newest">Newest First</option>
    <option value="oldest">Oldest First</option>
</select>
</div>`)
    );
}

main();
