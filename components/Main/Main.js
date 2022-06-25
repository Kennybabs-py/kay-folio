import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styles from "./Main.module.scss";
import useWindowSize from "../../utils/hooks/useWindowSize";

const projects = [
  { title: "Space tourism", live: "netlify/vercel" },
  { title: "Luxterior", live: "netlify/vercel" },
  { title: "Codepen Clone", live: "netlify/vercel" },
];

const Main = () => {
  const { width, height } = useWindowSize();

  // const handleMobileAnimation = () => {
  // }

  useEffect(() => {
    console.log(width);
  });
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { opacity: 0 },
    });
    tl.from("#line", {
      x: 50,
      duration1: 1,
      autoAlpha: 0,
      stagger: {
        each: 0.2,
        from: "center",
      },
    })
      .to("#line", {
        x: -50,
        duration: 2,
        autoAlpha: 0,
        stagger: {
          each: 0.2,
          from: "edges",
        },
      })
      .from(
        "#title",
        {
          y: 50,
          duration: 1,
          scale: 0,
          autoAlpha: 0,
          ease: "back",
        },
        "<"
      );
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { repeat: -1, repeatDelay: 10, yoyo: true, stagger: 1 },
    });
    tl.fromTo(
      "#text span",
      {
        scale: 1,
      },
      { scale: 1.1 }
    );
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.intro}>
        <div className={styles.line} id="line"></div>
        <div className={styles.line} id="line"></div>
        <div className={styles.line} id="line"></div>
        <div className={styles.line} id="line"></div>
        <div className={styles.line} id="line"></div>
        <div className={styles.intro_text} id="title">
          <span>frontend developer</span>
        </div>
      </div>

      {/* <hr className={styles.hr} /> */}

      <div className={styles.about} id="about">
        <div className={styles.about_text} id="text">
          Hi, I'm <span> Kehinde Babalola</span>. I'm a{" "}
          <span>Frontend Developer</span> using modern tools to build responsive
          and interactive web applications.
        </div>
        <button className={styles.button} id="button">
          Download Resume
        </button>
      </div>

      {/* <hr className={styles.hr} /> */}

      <div className={styles.skills}>
        <div className={styles.skills_header}>tools i'm euipped with</div>
        <div className={styles.skills_text}>
          <div>html5</div>

          <div>css3</div>

          <div>scss</div>

          <div>javascript</div>

          <div>typescript</div>

          <div>react-js</div>

          <div>Next-js</div>

          <div>gastby-js</div>
          <div>git</div>
          <div>gsap</div>
        </div>
      </div>

      {/* <hr className={styles.hr} /> */}

      <div className={styles.projects}>
        <div className={styles.projects_header}>projects</div>
        <div className={styles.projects_each}>
          {projects.map((project, index) => {
            return (
              <div key={index}>
                <span>{project.title}</span> <span>{project.live}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Main;
