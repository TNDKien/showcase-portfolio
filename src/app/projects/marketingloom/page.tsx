"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.scss";

export default function ProjectPage() {
  return (
    <div className={styles.container}>
      <main className={styles.project}>
        <h1>Marketing Loom</h1>

        <div className={styles.tags}>
          <span>DESIGN</span>
          <span>DEVELOPMENT</span>
          <span>CMS</span>
        </div>

        <section className={styles.section}>
          <h2>Given</h2>
          <p>
            No branding provided. Freedom to create a unique name, logo, and
            visual identity.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Requirements</h2>
          <p>
            Develop a responsive and dynamic news platform with a headless CMS.
            Include features like newsletter integration, an interactive events
            calendar, and social sharing.
          </p>
        </section>

        <section className={styles.section}>
          <h2>About</h2>
          <p>
            The Marketing News Website is a hub for professionals to stay
            up-to-date on the latest trends, insights, and strategies in the
            marketing world. With daily articles, expert interviews, and
            interactive webinars, the platform serves the growing marketing
            professional community in the Netherlands.
          </p>
          <p>
            It's designed for clarity and speed, ensuring a smooth user
            experience while providing valuable interaction and real-time news,
            social sharing, and community engagement features.
          </p>
        </section>

        <div className={styles.browser}>
          <div className={styles.browserHeader}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
          <Image
            src="/placeholder.svg?height=600&width=1000"
            alt="Browser mockup"
            width={1000}
            height={600}
          />
        </div>

        <section className={styles.mobile}>
          <h2>Optimized for mobile</h2>
          <div className={styles.devices}>
            <div className={styles.deviceGroup}>
              <Image
                src="/placeholder.svg?height=400&width=200"
                alt="Mobile mockup 1"
                width={200}
                height={400}
              />
              <Image
                src="/placeholder.svg?height=400&width=200"
                alt="Mobile mockup 2"
                width={200}
                height={400}
              />
            </div>
            <div className={styles.deviceGroup}>
              <Image
                src="/placeholder.svg?height=400&width=200"
                alt="Mobile mockup 3"
                width={200}
                height={400}
              />
              <Image
                src="/placeholder.svg?height=400&width=200"
                alt="Mobile mockup 4"
                width={200}
                height={400}
              />
            </div>
          </div>
        </section>
      </main>

      <svg
        className={styles.decorativeLine}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,50 Q25,0 50,50 T100,50"
          fill="none"
          stroke="white"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
}
