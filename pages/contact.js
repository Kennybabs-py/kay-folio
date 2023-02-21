import React from "react";
// import { gsap } from "gsap";
import Header from "components/Header";
import Contact from "screens/ReachOut/Contact";
import Footer from "components/Footer";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}
