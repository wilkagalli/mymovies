import React, { useState } from "react";
import { useRef } from "react/cjs/react.development";
import HeartOutiline from "../icons/HeartOutiline";
import styles from "./Card.module.scss";

// import { Container } from './styles';

// let favorite = [];
function Card({
  image,
  title,
  rating,
  date,
  initialFavorite,
  customClass,
  type,
}) {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  function toggleFavorite() {
    const favoriteStateAtualizado = !isFavorite;
    setIsFavorite(favoriteStateAtualizado);
    let favoritesAtualizada = [];

    const favoritesStorage =
      JSON.parse(localStorage.getItem("favorites")) || [];

    if (favoriteStateAtualizado) {
      favoritesAtualizada = [
        ...favoritesStorage,
        { title, image, rating, date, initialFavorite, type },
      ];
    } else {
      favoritesStorage.splice(
        favoritesStorage.findIndex((item) => item.title === title),
        1
      );
      favoritesAtualizada = favoritesStorage;
    }
    localStorage.setItem("favorites", JSON.stringify(favoritesAtualizada));
  }

  const customStyless = [styles.cardContainer];
  if (customClass) {
    customStyless.push(customClass);
  }

  return (
    <div className={customStyless}>
      <img className={styles.imageFilme} src={image} />
      <div className={styles.cardContent}>
        <div className={styles.details}>
          <span>
            <img className={styles.imageRating} src="images/estrela.png" />
            <p className={styles.rating}>{rating}</p>
          </span>

          <span onClick={() => toggleFavorite()}>
            {isFavorite ? (
              <img className={styles.favorite} src="images/coracaodois.png" />
            ) : (
              <HeartOutiline className={styles.favorite} />
            )}
          </span>
        </div>

        <p className={styles.date}>{date}</p>

        <h2>{title}</h2>

        <button>ASSISTIR AGORA</button>

        <span className={styles.buttonTrailler}>
          <img src="images/botao-play.png" className={styles.botaoPlay} />
          <button src="images/botao-play.png">TRAILLER</button>
        </span>
      </div>
    </div>
  );
}

export default Card;
