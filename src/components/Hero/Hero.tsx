"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Hero.module.scss";

const titles = ["Student @ Fontys ICT", "Front-end Developer"];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.heroSection}>
      <div className={styles.content}>
        <span className={styles.leftBrace}>{"{"}</span>
        <div className={styles.heroText}>
          <h2>Hi, my name is</h2>
          <h1 className={styles.gradientText}>Kien Dang</h1>
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={styles.subtitle}
            >
              <span className={styles.gradientText}>
                {titles[currentIndex]}
              </span>
            </motion.p>
          </AnimatePresence>
        </div>
        <span className={styles.rightBrace}>{"}"}</span>
      </div>
    </div>
  );
}
