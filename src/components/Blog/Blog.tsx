"use client";

import { BlogCard } from "./BlogCard";
import styles from "./Blog.module.scss";

const blogPosts = [
  {
    title: "AI Dev Tools",
    tags: ["BLOG", "AI", "DEVELOPMENT"],
    description:
      "In this blogpost, I will be exploring the latest AI dev tools and how they can be used to improve development workflows.",
    imageUrl: "/medias/blog/AI-tools.png",
    buttonText: "Read Article",
    readMoreUrl: "https://blog.kiendang.nl/articles/ai-dev-tools",
  },
  {
    title: "First 3D App",
    tags: ["BLOG", "R3F", "3D"],
    description:
      "In this blogpost, I will be creating my first app using React Three Fiber.",
    imageUrl: "/medias/blog/firstapp.webm",
    buttonText: "Read Blogpost",
    readMoreUrl: "https://blog.kiendang.nl/blog/firstapp",
  },
  {
    title: "3D Float/Prism Effect",
    tags: ["BLOG", "R3F", "3D"],
    description:
      "In this blogpost, I will be creating a 3D float/prism effect using React Three Fiber.",
    imageUrl: "/medias/blog/Prism.webm",
    buttonText: "Read Blogpost",
    readMoreUrl: "https://blog.kiendang.nl/blog/blog2",
  },
];

export default function Blog() {
  return (
    <section id="blog" className={styles.blogSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Blog</h2>
        <div className={styles.blogWrapper}>
          {blogPosts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
