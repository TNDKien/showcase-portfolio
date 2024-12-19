"use client";

import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  href?: string;
  children?: React.ReactNode;
}

export default function Button({
  href = "#",
  children = "Live site",
}: ButtonProps) {
  return (
    <a href={href} className="button">
      <span>
        {children}
        <ArrowUpRight className="icon" />
      </span>
      <div>
        <div />
      </div>
      <div />
    </a>
  );
}
