"use client";

import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.content}>
        <span className={styles.leftBrace}>{"{"}</span>
        <div className={styles.heroText}>
          <h2>Hi, my name is</h2>
          <h1 className={styles.gradientText}>Kien Dang</h1>
          <div className={styles.animatedText}>
            <p>
              Wannabe <span className={styles.gradientText}>Front-end</span>{" "}
              Developer
            </p>
            <p>
              Student @ <span className={styles.gradientText}>Fontys ICT</span>
            </p>
          </div>
        </div>
        <span className={styles.rightBrace}>{"}"}</span>
      </div>
    </div>
  );
}
