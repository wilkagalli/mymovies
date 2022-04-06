import React, { useState } from "react";
import { useMovies } from "../../contexts/MoviesContext";
import Card from "../../components/card/Card";
import List from "../../components/list/List";
import styles from "./Favorite.module.scss";

import { useSeries } from "../../contexts/SeriesContext";

// import { Container } from './styles';

function Favorite() {
  const [favorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  // const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  console.log(favorites);

  function renderList(list) {
    console.log(list);
    return (
      <List>
        {list.map((item) => (
          <Card
            key={item.title}
            initialFavorite={true}
            title={item.title}
            rating={item.rating}
            image={item.image}
            date={item.date}
          ></Card>
        ))}
      </List>
    );
  }
  return (
    <>
      {/* <Header></Header> */}
      <div className={styles.favoriteContainer}>
        <div className={styles.favoriteContent}>
          <h2 className={styles.namesTitleFavorite}>Filmes Favoritos</h2>
          {renderList(favorites.filter((item) => item.type === "movie"))}
          <h2 className={styles.namesTitleFavorite}>Series Favoritas</h2>
          {renderList(favorites.filter((item) => item.type === "serie"))}
        </div>
      </div>
    </>
  );
}

export default Favorite;
