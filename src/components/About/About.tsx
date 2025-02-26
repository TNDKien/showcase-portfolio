"use client";

import React from "react";
import styles from "./About.module.scss";
import { FaHtml5, FaCss3Alt, FaJs, FaFigma } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiAdobeillustrator,
  SiSass,
  SiStoryblok,
  SiAdobephotoshop,
  SiFlutter,
} from "react-icons/si";
import { cards } from "../../app/data/cards";
import Card from "./Card";

const About = () => {
  return (
    <section id="about" className={styles.container}>
      {/* Left Section */}
      <section className={styles.cardText}>
        <div className={styles.contentWrapper}>
          <p>
            I am currently studying ICT&Media Design, specializing in creating
            user-focused and visually engaging websites.
          </p>
          <p>
            I explore tools and methodologies such as Double Diamond, Scrum, and
            UX testing to build interactive and validated concepts.
          </p>
          <p>
            Right now, I'm focused on mastering frontend development, building
            responsive designs, and making sure my websites are accessible for
            everyone.
          </p>
        </div>
        {/* Skills section */}
        <h2 className={styles.alt}>With my skills in:</h2>
        <div className={styles.skills}>
          <FaHtml5 size={72} color="#E34F26" title="HTML5" />
          <FaCss3Alt size={72} color="#1B73BA" title="CSS3" />
          <FaJs size={72} color="#F0DB4F" title="JavaScript" />
          <FaFigma size={72} color="#ECECEC" title="Figma" />
          <SiAdobeillustrator size={72} color="#FF9A00" title="Illustrator" />
          <SiAdobephotoshop size={72} color="#31A8FF" title="Photoshop" />
          <SiNextdotjs size={72} color="#ECECEC" title="Next.js" />
          <SiTailwindcss size={72} color="#06B6D4" title="Tailwind CSS" />
          <SiStoryblok size={72} color="#03B4B0" title="Storyblok" />
          <SiSass size={72} color="#CC6699" title="Sass/SCSS" />
          <SiFlutter size={72} color="#02569B" title="Flutter" />
        </div>
      </section>

      {/* Right Section */}
      <section className={styles.cards}>
        {cards.map((card, index) => (
          <Card key={index} {...card} index={index} />
        ))}
      </section>
    </section>
  );
};

export default About;
