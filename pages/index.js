import React from "react";
// import { gsap } from "gsap";
import Header from "../components/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
