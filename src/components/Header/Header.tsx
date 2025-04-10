"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiMenu, FiX } from "react-icons/fi";
import styles from "./Header.module.scss";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isMenuOpen) {
        const currentScrollPos = window.scrollY;
        setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <svg width="0" height="0">
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#800E13" />
          <stop offset="10%" stopColor="#800E13" />
          <stop offset="70%" stopColor="#7678ED" />
          <stop offset="100%" stopColor="#7678ED" />
        </linearGradient>
      </svg>
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

        {/* Hamburger Menu Button */}
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Navigation Links */}
        <nav className={`${styles.navLinks} ${isMenuOpen ? styles.open : ""}`}>
          <Link href="/#about" onClick={closeMenu}>
            About me
          </Link>
          <Link href="/#projects" onClick={closeMenu}>
            Projects
          </Link>
          <Link href="/#contact" onClick={closeMenu}>
            Contact
          </Link>
          <Link href="https://blog.kiendang.nl" onClick={closeMenu}>
            Blog
            <FiExternalLink />
          </Link>
        </nav>
      </header>
    </>
  );
}
