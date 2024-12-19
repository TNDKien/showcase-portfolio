"use client";

import { ArrowUpRight } from "lucide-react";
import styles from "./Button.module.scss";

interface ButtonProps {
  href?: string;
  children?: React.ReactNode;
}

export default function Button({
  href = "#",
  children = "View Project",
}: ButtonProps) {
  return (
    <a href={href} className={styles.button}>
      <span>
        {children}
        <ArrowUpRight className={styles.icon} />
      </span>
      <div>
        <div />
      </div>
      <div />
    </a>
  );
}
