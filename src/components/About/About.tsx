"use client";

import React from "react";
import styles from "./About.module.scss";
import { FaHtml5, FaCss3Alt, FaJs, FaFigma, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiAdobeillustrator,
  SiSass,
  SiStoryblok,
  SiAdobephotoshop,
  SiFlutter,
  SiSupabase,
  SiFirebase,
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
            I am currently studying ICT&Smart Mobile, combining technical
            expertise with creative design skills from my background in media
            design.
          </p>
          <p>
            My studies focus on mobile application development, IoT
            technologies, and creating seamless user experiences across
            different platforms.
          </p>
          <p>
            With two semesters of media design experience, I bring a strong
            foundation in visual communication and user-centered design to my
            technical projects.
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
          <FaGitAlt size={72} color="#F05032" title="Git" />
          <SiSupabase size={72} color="#3ECF8E" title="Supabase" />
          <SiFirebase size={72} color="#FFCA28" title="Firebase" />
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
