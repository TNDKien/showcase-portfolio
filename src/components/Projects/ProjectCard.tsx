"use client";

import Image from "next/image";
import styles from "./ProjectCard.module.scss";
import Button from "../Button/Button";
import { useRef } from "react";

interface ProjectCardProps {
  title: string;
  tags: string[];
  description: string;
  imageUrl: string;
  layout: "image-right" | "image-left";
  projectUrl?: string;
  liveUrl?: string;
  buttonText?: string;
  readMoreUrl?: string;
  isBlogPost?: boolean;
}

export function ProjectCard({
  title,
  tags,
  description,
  imageUrl,
  projectUrl,
  liveUrl,
  layout,
  buttonText,
  readMoreUrl,
  isBlogPost,
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (
      videoRef.current &&
      (imageUrl.endsWith(".mov") || imageUrl.endsWith(".webm"))
    ) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (
      videoRef.current &&
      (imageUrl.endsWith(".mov") || imageUrl.endsWith(".webm"))
    ) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={`${styles.projectCard} ${
        layout === "image-left" ? styles.imageLeft : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
          {isBlogPost ? (
            <Button href={readMoreUrl}>{buttonText || "Read More"}</Button>
          ) : (
            <>
              <Button href={projectUrl}>View Project</Button>
              <Button href={liveUrl}>Live Demo</Button>
            </>
          )}
        </div>
      </div>
      <div
        className={styles.image}
        onClick={() =>
          (window.location.href = isBlogPost ? readMoreUrl! : projectUrl!)
        }
      >
        {imageUrl.endsWith(".mov") || imageUrl.endsWith(".webm") ? (
          <video
            ref={videoRef}
            src={imageUrl}
            muted
            playsInline
            loop
            width={600}
            height={400}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <Image
            src={imageUrl}
            alt={`${isBlogPost ? "Cover image for" : "Screenshot of"} ${title}`}
            width={600}
            height={400}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
    </div>
  );
}
