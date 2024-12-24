"use client";

import Image from "next/image";
import styles from "../../page.module.scss";

const browserImages = [
  { src: "/medias/marketingloom/desktop/hero.webp", alt: "Browser mockup 1" },
  {
    src: "/medias/marketingloom/desktop/articles.webp",
    alt: "Browser mockup 2",
  },
  { src: "/medias/marketingloom/desktop/events.webp", alt: "Browser mockup 3" },
  {
    src: "/medias/marketingloom/desktop/eventHero.webp",
    alt: "Browser mockup 4",
  },
];

const mobileImages = [
  {
    src: "/medias/marketingloom/mobile/hero.webp",
    alt: "Mobile mockup 1",
  },
  {
    src: "/medias/marketingloom/mobile/sidebar.webp",
    alt: "Mobile mockup 2",
  },
  {
    src: "/medias/marketingloom/mobile/footer.webp",
    alt: "Mobile mockup 3",
  },
  {
    src: "/medias/marketingloom/mobile/events.webp",
    alt: "Mobile mockup 4",
  },
  {
    src: "/medias/marketingloom/mobile/articles.webp",
    alt: "Mobile mockup 5",
  },
  {
    src: "/medias/marketingloom/mobile/articlepage.webp",
    alt: "Mobile mockup 6",
  },
];

const vector = ["/medias/marketingloom/Lines.svg"];

export default function ProjectPage() {
  return (
    <div className={styles.container}>
      <main className={styles.project}>
        <header className={styles.projectHeader}>
          <h1>Marketing Loom</h1>

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
            Develop a responsive and dynamic news platform with a headless CMS.
            Include features like newsletter integration, an interactive events
            calendar, and social sharing. About
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
