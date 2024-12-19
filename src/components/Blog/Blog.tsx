"use client";

import styles from "./Blog.module.scss";

export default function Blog() {
  return (
    <div className={styles.blogSection}>
      <div className={styles.container}>
        <header>
          <h2>My Blogposts</h2>
          <p>Under Maintenance</p>
        </header>
        <section>
          <article>
            <h3>R3F </h3>
            <p>Under Maintenance</p>
          </article>
          <article>
            <h3>3D Float/Glassy Effect </h3>
            <p>Under Maintenance</p>
          </article>
          <article>
            <h3>Blogpost </h3>
            <p>Under Maintenance</p>
          </article>
          <article>
            <h3>Blogpost </h3>
            <p>Under Maintenance</p>
          </article>
        </section>
      </div>
    </div>
  );
}
