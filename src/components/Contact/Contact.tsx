"use client";

import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <article className={styles.content}>
        <h1 className={styles.gradientText}>Contact</h1>
        <p>Get in touch with me via social media or send me an email</p>

        <a href="mailto:kien.tn.dang@gmail.com" className={styles.emailLink}>
          <span>kien.tn.dang@gmail.com</span>
        </a>

        <div className={styles.socialIcons}>
          <a
            href="https://www.instagram.com/tnd_kien"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={styles.iconWrapper}
          >
            <FaInstagram size={32} title="Instagram" className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/kien-dang-449887173"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.iconWrapper}
          >
            <FaLinkedinIn size={32} title="LinkedIn" className={styles.icon} />
          </a>
          <a
            href="https://github.com/TNDKien"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={styles.iconWrapper}
          >
            <FaGithub size={32} title="GitHub" className={styles.icon} />
          </a>
        </div>
      </article>
    </section>
  );
}
