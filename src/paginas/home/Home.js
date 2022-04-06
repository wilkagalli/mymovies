import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import List from "../../components/list/List";
import { getMoviesList } from "../../api/api";
import { useEffect } from "react";
import { useMovies } from "../../contexts/MoviesContext";
import { useSearch } from "../../contexts/SearchContext";
import Card from "../../components/card/Card";
import ListSlide from "../../components/list-slide/ListSlide";

function Home() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const { movies, setMovies } = useMovies();
  const { search } = useSearch();

  async function initializeMovies() {
    const moviesResponse = await getMoviesList();

    // const { search, setSearch } = useSearch;
    const movieList = moviesResponse.results.map((filmeApi) => {
      return {
        title: filmeApi.title,
        image: `https://image.tmdb.org/t/p/original${filmeApi.poster_path}`,
        rating: filmeApi.vote_average,
        date: filmeApi.release_date,
        isFavorite: favorites.includes(filmeApi.title),
      };
    });

    setMovies(movieList);
  }

  useEffect(() => {
    initializeMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toUpperCase().includes(search.toUpperCase())
  );

  return (
    <>
      <section className={styles.homeSection}>
        <div className={styles.homeContainer}>
          <div className={styles.favHome} to="/favorite">
            <h3>Favoritos dos Fãs</h3>
            <div>Filmes e séries com maior classificação...</div>
          </div>
        </div>
        <div className={styles.homeContent}>
          {filteredMovies.length > 7 ? (
            <ListSlide>
              {filteredMovies.map((filme) => (
                <Card
                  customClass={styles.cardHome}
                  key={filme.title}
                  initialFavorite={filme.isFavorite}
                  title={filme.title}
                  rating={filme.rating}
                  image={filme.image}
                  date={filme.date}
                ></Card>
              ))}
            </ListSlide>
          ) : (
            <h1>Não encontramos nenhum filme!</h1>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
