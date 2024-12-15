import Image from "next/image";
import styles from "./page.module.scss";
import Hero from "../components/Hero";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Hero />
    </div>
  );
}
