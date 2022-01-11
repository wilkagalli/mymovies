import React from "react";
import { types } from "sass";
import styles from "./Card.module.scss";

// import { Container } from './styles';

function Card({ image, title, rating }) {
  return (
    <div className={styles.cardContainer}>
      {/* <img className={styles.imageFilme} src={image} />
      <div className={styles.details}>
        <p>{rating}</p>
        <img className={styles.favorite} src="images/coracao.png"></img>
      </div>
      <h2>{title}</h2>

      <button>ASSISTIR AGORA</button>
      <button>TRAILLER</button> */}
    </div>
  );
}

export default Card;
