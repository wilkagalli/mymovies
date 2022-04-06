import React, { useRef, useState } from "react";
import Card from "../../components/card/Card";
import List from "../../components/list/List";
import { getMovieGenres, getMoviesByGenre, getMoviesList } from "../../api/api";
import { useEffect } from "react";
import { useMovies } from "../../contexts/MoviesContext";
import { useSearch } from "../../contexts/SearchContext";
import FilterGen from "../../components/filterGen/FilterGen";
import Pagination from "../../components/pagination/Pagination";

// import { Container } from './styles';

function Movies() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const { movies, setMovies } = useMovies();
  const { search } = useSearch();
  const [generos, setGeneros] = useState([]);
  const currentPage = useRef(1);

  async function updateMovies(genreCode) {
    const moviesReponse = await getMoviesByGenre(genreCode);
    mapMovies(moviesReponse);
  }

  async function nextPage() {
    currentPage.current = currentPage.current + 1;
    const moviesReponse = await getMoviesList(currentPage.current);
    mapMovies(moviesReponse);
    console.log(currentPage.current);
  }

  function mapMovies(moviesResponse) {
    const movieList = moviesResponse.results.map((movieApi) => {
      return {
        title: movieApi.title,
        image: `https://image.tmdb.org/t/p/original${movieApi.poster_path}`,
        rating: movieApi.vote_average,
        date: movieApi.release_date,
        type: "movie",
        isFavorite:
          favorites.findIndex((item) => item.title === movieApi.title) >= 0,
      };
    });

    setMovies(movieList);
  }

  async function initializeMovies() {
    const moviesResponse = await getMoviesList();
    const genresResponse = await getMovieGenres();

    setGeneros(genresResponse.genres);

    mapMovies(moviesResponse);

    // const { search, setSearch } = useSearch;
  }

  useEffect(() => {
    initializeMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toUpperCase().includes(search.toUpperCase())
  );

  return (
    <>
      {/* <Header></Header> */}

      <FilterGen generos={generos} onSelectGen={updateMovies}></FilterGen>

      {filteredMovies.length > 0 ? (
        <List>
          {filteredMovies.map((movie) => (
            <Card
              key={movie.title}
              initialFavorite={movie.isFavorite}
              title={movie.title}
              rating={movie.rating}
              image={movie.image}
              date={movie.date}
              type={movie.type}
            ></Card>
          ))}
        </List>
      ) : (
        <h1>Não encontramos nenhum filme!</h1>
      )}
      <button>Página Anterior </button>
      <button onClick={nextPage}>Próxima Página {currentPage.current}</button>
      {/* <Pagination></Pagination> */}
    </>
  );
}

export default Movies;
