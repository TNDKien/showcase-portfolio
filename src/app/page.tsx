"use client";

import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import ProjectSection from "../components/Projects/ProjectSection";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <ProjectSection />
      </section>
      <section id="blog">
        <Blog />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
