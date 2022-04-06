// https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US

const API_KEY = "ec9cee53facdb635a95aaf78f8fb1fb0";
// pegar minha lista de filmes
export async function getMoviesList(pageNumber = 1) {
  // requisição http
  const req = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`
  );
  return await req.json();
}

export async function getSeriesList() {
  // requisição http
  const req = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US`
  );
  return await req.json();
}

export async function getMovieGenres() {
  const req = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  return await req.json();
}

export async function getMoviesByGenre(genreCode) {
  const req = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreCode}`
  );
  return await req.json();
}
