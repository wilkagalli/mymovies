import React, { useRef } from "react";
import styles from "./ListSlide.module.scss";

// import { Container } from './styles';

function ListSlide({ children }) {
  const listRef = useRef();

  function moveScroll(pixels) {
    listRef.current.scroll({
      left: pixels + listRef.current.scrollLeft,
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div ref={listRef} className={styles.ListSlide}>
      <span
        onClick={() => moveScroll(-600)}
        className={`${styles.btn} ${styles.btnLeft}`}
      >
        <img src="images/back.png"></img>
      </span>

      {children}
      <span
        onClick={() => moveScroll(600)}
        className={`${styles.btn} ${styles.btnRight}`}
      >
        <img src="images/next.png"></img>
      </span>
    </div>
  );
}

export default ListSlide;
