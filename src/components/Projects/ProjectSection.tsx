"use client";

import { ProjectCard } from "./ProjectCard";
import styles from "./ProjectSection.module.scss";

const projects = [
  {
    title: "Upendo",
    tags: ["DESIGN", "DEVELOPMENT", "CMS"],
    description:
      "Created a responsive website for Upendo, a data services provider, to showcase their core offerings and engage SMEs and semi-governmental clients worldwide.",
    imageUrl: "/medias/upendo.webp",
    projectUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Marketing Loom",
    tags: ["DESIGN", "DEVELOPMENT", "CMS"],
    description:
      "Created a responsive website for Zemnmots. They have given us the assignment to make a marketing news website.",
    imageUrl: "/medias/marketingloom.webp",
    projectUrl: "#",
    liveUrl: "http://www.marketingloom.nl",
  },
];

export default function ProjectsSection() {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Projects</h2>
        <div className={styles.projectsWrapper}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              layout={index % 2 === 0 ? "image-right" : "image-left"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
