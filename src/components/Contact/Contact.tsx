"use client";

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.contactSection}>
      <article className={styles.content}>
        <h1 className={styles.gradientText}>Contact</h1>
        <p>Get in touch with me via social media or send me an email</p>
        <p className={styles.gradientText}>
          <span>kien.tn.dang@gmail.com</span>
        </p>
        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <a
            href="https://www.instagram.com/tnd_kien"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={48} color="#800020" title="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={48} color="#5D3FD3" title="LinkedIn" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={48} color="#5D3FD3" title="GitHub" />
          </a>
        </div>
      </article>
    </div>
  );
}
