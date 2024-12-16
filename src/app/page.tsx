import Image from "next/image";
import styles from "./page.module.scss";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import About from "../components/About/About";
export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
    </div>
  );
}
