import Image from "next/image";
import styles from "./page.module.scss";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import ProjectSection from "../components/Projects/ProjectSection";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <ProjectSection />
      <Blog />
      <Contact />
    </div>
  );
}
