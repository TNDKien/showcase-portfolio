"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import styles from "./Header.module.scss";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`${styles.header} ${isVisible ? styles.show : styles.hide}`}
    >
      <Link href="/" className={styles.profile}>
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
      </Link>
      <nav className={styles.navLinks}>
        <Link href="/#about">About me</Link>
        <Link href="/#projects">Projects</Link>
        <Link href="/#contact">Contact</Link>
        <Link href="/#blog">
          Blog
          <FiExternalLink />
        </Link>
        {/* <a href="https://blog.kiendang.nl" className={styles.external}>
          Blog
          <FiExternalLink />
        </a> */}
      </nav>
    </header>
  );
}
