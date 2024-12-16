"use client";

import React from "react";
import styles from "./About.module.scss";
import { cards } from "../../app/data/cards";
import Card from "./Card";

const About = () => {
  return (
    <main className={styles.main}>
      {cards.map((card, index) => (
        <Card key={index} {...card} index={index} />
      ))}
    </main>
  );
};

export default About;
