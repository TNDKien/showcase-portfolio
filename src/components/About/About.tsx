"use client";

import React from "react";
import styles from "./About.module.scss";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaFigma,
  //   FaAdobe,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiAdobeillustrator,
  //   SiPhotoshop,
} from "react-icons/si";
import { cards } from "../../app/data/cards";
import Card from "./Card";

const About = () => {
  return (
    <main className={styles.container}>
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
            Right now, I’m focused on mastering frontend development, building
            responsive designs, and making sure my websites are accessible for
            everyone.
          </p>
        </div>
        {/* Skills section */}
        <div className={styles.skills}>
          <FaHtml5 size={48} color="#E34F26" title="HTML5" />
          <FaCss3Alt size={48} color="#1572B6" title="CSS3" />
          <FaJs size={48} color="#F7DF1E" title="JavaScript" />
          <SiTailwindcss size={48} color="#06B6D4" title="Tailwind CSS" />
          <SiNextdotjs size={48} color="#000000" title="Next.js" />
          <FaFigma size={48} color="#F24E1E" title="Figma" />
          {/* <SiPhotoshop size={48} color="#31A8FF" title="Photoshop" /> */}
          <SiAdobeillustrator size={48} color="#FF9A00" title="Illustrator" />
          <FaBootstrap size={48} color="#7952B3" title="Bootstrap" />
        </div>
      </section>

      {/* Right Section */}
      <section className={styles.cards}>
        {cards.map((card, index) => (
          <Card key={index} {...card} index={index} />
        ))}
      </section>
    </main>
  );
};

export default About;
