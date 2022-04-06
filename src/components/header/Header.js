import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../../contexts/SearchContext";
import { useUser } from "../../contexts/UserContext";

import styles from "./Header.module.scss";

// import Login from "./Login.js";

// import { Container } from './styles';

function Header() {
  const { userIsLogged, setUserIsLogged } = useUser();
  const { setSearch } = useSearch();

  function submit() {
    sessionStorage.removeItem("dados");
    setUserIsLogged(false);
  }

  return (
    <nav className={styles.nav}>
      <img src="images/rolo-filme.svg"></img>
      <div className={styles.search}>
        <img src="images/lupa.png"></img>
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          type="text"
        ></input>
      </div>

      <ul className={styles.menu}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/movie">Filmes</Link>
        </li>
        <li>
          <Link to="/serie">Series</Link>
        </li>
        <li>
          <Link to="/favorite">Favoritos</Link>
        </li>
        {/* condicao ? retornoverdadeiro : retornofalso */}
        {userIsLogged ? (
          <li>
            <Link onClick={submit} to="/login">
              SAIR
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Header;
