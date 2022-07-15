import React from "react";
import styles from "./card.module.css";

const Card = ({ item }) => {
  const { image, title, description } = item;

  return (
    <div className={styles.movie__content}>
      <article className={styles.movie__card}>
        <img src={image} />

        <div className={styles.movie__modal}>
          <div className={styles.movie__description__div}>
            <h3 className={styles.movie__title}>Title: {title}</h3>
            <h5 className={styles.movie__description}>Description: {description}</h5>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;
