import React from "react";
import styles from "./Header.module.scss";

// import { Container } from './styles';

function Header() {
  return (
    <nav className={styles.nav}>
      <img src="images/rolo-filme.svg"></img>
      <div className={styles.search}>
        <img src="images/lupa.png"></img>
        <input placeholder="Search" type="text"></input>
      </div>

      <ul className={styles.menu}>
        <li>HOME</li>

        <li>FILMES</li>

        <li>SERIES</li>

        <li>FAVORITOS</li>

        <li>
          <span>SAIR</span>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
