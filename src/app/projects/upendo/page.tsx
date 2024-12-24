"use client";

import Image from "next/image";
import styles from "../../page.module.scss";

const browserImages = [
  { src: "/medias/upendo/desktop/upendoHero.webp", alt: "Browser mockup 1" },
  { src: "/medias/upendo/desktop/upendoMenu.webp", alt: "Browser mockup 2" },
  { src: "/medias/upendo/desktop/upendoService.webp", alt: "Browser mockup 3" },
  {
    src: "/medias/upendo/desktop/upendoTraining.webp",
    alt: "Browser mockup 4",
  },
  { src: "/medias/upendo/desktop/upendoBottom.webp", alt: "Browser mockup 5" },
];

const mobileImages = [
  { src: "/medias/upendo/mobile/upendoHero.webp", alt: "Mobile mockup 1" },
  { src: "/medias/upendo/mobile/upendoMenu.webp", alt: "Mobile mockup 2" },
  { src: "/medias/upendo/mobile/upendoService.webp", alt: "Mobile mockup 3" },
  { src: "/medias/upendo/mobile/upendoTraining.webp", alt: "Mobile mockup 4" },
  { src: "/medias/upendo/mobile/upendoBottom.webp", alt: "Mobile mockup 5" },
];

const vector = ["/medias/upendo/Vector.svg"];

export default function ProjectPage() {
  return (
    <div className={styles.container}>
      <main className={styles.project}>
        <header className={styles.projectHeader}>
          <h1>Upendo</h1>

          <div className={styles.tags}>
            <span>DESIGN</span>
            <span>DEVELOPMENT</span>
            <span>CMS</span>
          </div>
        </header>

        <section className={styles.section}>
          <div>
            <h2>Given</h2>
            <p>
              No branding provided. Freedom to create a unique name, logo, and
              visual identity.
            </p>
          </div>
          <div className={styles.vectors}>
            {vector.map((path, index) => (
              <object
                key={index}
                data={path}
                type="image/svg+xml"
                className={styles.vector}
                aria-label={`Vector illustration ${index + 1}`}
              ></object>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Requirements</h2>
          <p>
            Design a clean, modern website with a responsive layout and seamless
            CMS integration. Incorporate on-scroll animations and ensure a green
            PageSpeed score.
          </p>
        </section>

        <section className={styles.section}>
          <h2>About</h2>
          <p>
            Upendo is a data services label focused on simplifying complex data
            insights for businesses. It provides solutions in five core areas:
          </p>
          <ul className={styles.list}>
            <li>
              Configuration: Setting up tools like Google Analytics 4 and Looker
              Studio.
            </li>
            <li>Optimization: Identifying and fixing data issues.</li>
            <li>
              Visualization: Creating real-time dashboards from multiple
              channels.
            </li>
            <li>Analysis: Offering detailed reports with expert insights.</li>
            <li>
              Training: Equipping teams to handle their own data efficiently.
            </li>
          </ul>
        </section>

        <section className={styles.desktop}>
          {browserImages.map((image, index) => (
            <div className={styles.browser} key={index}>
              <div className={styles.browserHeader}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
              </div>
              <div className={styles.browserImage}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="responsive"
                  width={612}
                  height={344}
                />
              </div>
            </div>
          ))}
        </section>

        <section className={styles.mobile}>
          <h2>Optimized for mobile</h2>
          <div className={styles.devices}>
            {mobileImages.map((image, index) => (
              <div className={styles.deviceGroup} key={index}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={560}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
