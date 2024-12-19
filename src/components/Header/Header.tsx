"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";
import { FiExternalLink } from "react-icons/fi";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10); // Show when scrolling up or near the top
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`${styles.header} ${isVisible ? styles.show : styles.hide}`}
    >
      <div className={styles.profile}>
        <div className={styles.imageContainer}>
          <Image
            src="/medias/KienDang.webp"
            alt="Profile"
            width={96}
            height={96}
            quality={100}
          />
          <span className={styles.status}></span>
        </div>

        <div className={styles.name}>Kien Dang</div>
      </div>
      <nav className={styles.navLinks}>
        <Link href="#about">About me</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#socials">Socials</Link>
        <Link href="https://blog.kiendang.nl" className={styles.external}>
          Blog
          <FiExternalLink />
        </Link>
      </nav>
    </header>
  );
}
