import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LECTURER_DATA from "../helpers/lecturer.data";
import styles from "../styles/lecturers.module.scss";

const Lecturers = () => {
  const [lecturers, setLecturers] = useState([]);

  useEffect(() => {
    setLecturers(LECTURER_DATA);
  }, []);

  return (
    <div className={styles.main}>
      <h1>Lecturers</h1>
      {lecturers.map((lecturer, i) => {
        const { name, qualification, speciality } = lecturer;
        return (
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
                  <h2 className={styles.card_title}>{name}</h2>
                  <p className={styles.card_text}>{qualification}</p>
                  <p className={styles.card_text}>{speciality}</p>
                  <button className={styles.btn}>Read More</button>
                </div>
              </div>
            </li>
          </ul>
        );
      })}
      <div>
        <button className={styles.btn}>
          <Link to="/lecturers">See more...</Link>
        </button>
      </div>
    </div>
  );
};

export default Lecturers;
