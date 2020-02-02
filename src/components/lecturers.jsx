import React from "react";
import styles from "../styles/lecturers.module.scss";

const Lecturers = () => {
  return (
    <div className={styles.main}>
      <h1>Lecturers</h1>
      <ul className={styles.cards}>
        <li className={styles.cards_item}>
          <div className={styles.card}>
            <div className={styles.card_image}>
              <img
                alt="lecturer"
                src="https://picsum.photos/500/300/?image=10"
              />
            </div>
            <div className={styles.card_content}>
              <h2 className={styles.card_title}>Card Grid Layout</h2>
              <p className={styles.card_text}>
                Demo of pixel perfect pure CSS simple responsive card grid
                layout
              </p>
              <button className={styles.btn && styles.card_btn}>
                Read More
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Lecturers;
