import React, { useRef } from "react";
import styles from "./FilterGen.module.scss";

// import { Container } from './styles';

function FilterGen({ generos = [], onSelectGen }) {
  const valueSelect = useRef();

  function selectGen(e) {
    onSelectGen(e.target.value);
  }

  return (
    <select
      className={styles.select}
      ref={valueSelect}
      onChange={(e) => selectGen(e)}
      name="generos"
    >
      <option disabled>Gêneros</option>

      {generos.map((genero) => (
        <option value={genero.id}>{genero.name}</option>
      ))}
    </select>
  );
}

export default FilterGen;
