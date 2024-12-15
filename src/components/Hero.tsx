"use client";

import styles from "../app/page.module.scss";

export default function Hero() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroText}>
        <h2>Hi, my name is</h2>
        <h1 className={styles.gradientText}>Kien Dang</h1>
        <p className={styles.subtitle}>
          Wannabe <span className={styles.gradientText}>Front-end</span>{" "}
          Developer
        </p>
      </div>
      <div className={styles.braces}>
        <span className={styles.leftBrace}>{"{"}</span>
        <span className={styles.rightBrace}>{"}"}</span>
      </div>
    </div>
  );
}
