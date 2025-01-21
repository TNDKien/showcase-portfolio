"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./BlogCard.module.scss";
import { useRef } from "react";

interface BlogCardProps {
  title: string;
  tags: string[];
  description: string;
  imageUrl: string;
  buttonText: string;
  readMoreUrl: string;
}

export function BlogCard({
  title,
  tags,
  description,
  imageUrl,
  buttonText,
  readMoreUrl,
}: BlogCardProps) {
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
    <Link href={readMoreUrl} className={styles.blogCard}>
      <div
        className={styles.imageWrapper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {imageUrl.endsWith(".mov") || imageUrl.endsWith(".webm") ? (
          <video
            ref={videoRef}
            src={imageUrl}
            muted
            playsInline
            loop
            className={styles.image}
          />
        ) : (
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={300}
            className={styles.image}
          />
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <span className={styles.buttonText}>{buttonText}</span>
      </div>
    </Link>
  );
}
