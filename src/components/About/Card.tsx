"use client";

import React from "react";
import styles from "./Card.module.scss";

interface CardProps {
  title: string;
  text: string;
  index: number;
}

const Card = ({ title, text, index }: CardProps) => {
  return (
    <div
      className={styles.card}
      style={{
        top: `calc(5vh + ${index * 25}px)`,
      }}
    >
      <div className={styles.contentWrapper}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
