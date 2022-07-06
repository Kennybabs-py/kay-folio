import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
import Header from "../components/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const mainRef = useRef();
  const appRef = useRef();

  return (
    <div className={styles.home} ref={appRef}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
