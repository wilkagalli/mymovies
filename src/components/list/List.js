import React from "react";
import styles from "./List.module.scss";

// import { Container } from './styles';

function List({ children }) {
  return <div className={styles.List}>{children}</div>;
}

export default List;
