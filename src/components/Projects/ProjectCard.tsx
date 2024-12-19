"use client";

import Image from "next/image";
import styles from "./ProjectCard.module.scss";
import Button from "../Button/Button";

interface ProjectCardProps {
  title: string;
  tags: string[];
  description: string;
  imageUrl: string;
  projectUrl: string;
  liveUrl: string;
  layout: "image-right" | "image-left";
}

export function ProjectCard({
  title,
  tags,
  description,
  imageUrl,
  projectUrl,
  liveUrl,
  layout,
}: ProjectCardProps) {
  return (
    <div
      className={`${styles.projectCard} ${
        layout === "image-left" ? styles.imageLeft : ""
      }`}
    >
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={tag}>
              {tag}
              {index < tags.length - 1 && (
                <span className={styles.separator}>•</span>
              )}
            </span>
          ))}
        </div>
        <p className={styles.description}>{description}</p>

        <div className={styles.buttons}>
          <Button href={projectUrl}></Button>
          <Button href={liveUrl}>Live Demo</Button>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src={imageUrl}
          alt={`Screenshot of ${title} project`}
          width={600}
          height={400}
          priority
        />
      </div>
    </div>
  );
}
