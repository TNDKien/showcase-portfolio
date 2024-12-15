"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.scss";
import { FiExternalLink } from "react-icons/fi"; // External link icon

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.profile}>
        <Image
          src="/placeholder.svg"
          alt="Profile"
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className={styles.name}>
          Kien Dang
          <span className={styles.status}></span>
        </div>
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
