import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
import styles from "./Main.module.scss";
// import useWindowSize from "../../../utils/hooks/useWindowSize";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  { title: "Space tourism", live: "netlify/vercel", code: "link" },
  { title: "Luxterior", live: "netlify/vercel", code: "link" },
  { title: "Codepen Clone", live: "netlify/vercel", code: "link" },
];
const myInterests = [{ title: "food" }];

export default function Main() {
  const hr3 = useRef(null);

  return (
    <div className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.hero_text} id="intro_text">
          <div>KEHINDE&apos;S WORKSPACE</div>
          <div>frontend developer</div>
        </div>
      </div>

      {/* <hr className={styles.hr} id="hr" /> */}

      <div className={styles.about} id="about">
        <div className={styles.about_text} id="about-text">
          I&apos;m a Frontend Developer utilizing modern tools to build
          responsive and interactive web applications. Also into data science,
          machine learning and artificial intelligence.
        </div>
        <button className={styles.button} id="button">
          Download Resume
        </button>
      </div>

      {/* <hr className={styles.hr} id="hr" /> */}

      <div className={styles.skills} id="skills">
        <div className={styles.skills_header} id="skills_header">
          Skills
        </div>
        <div className={styles.skills_top}>
          <span id="skill">html5</span>
          <span id="skill">css3</span>
          <span id="skill">scss</span>
          <span id="skill">javascript</span>
          <span id="skill">git</span>
        </div>
        <div className={styles.skills_bottom}>
          <span id="skill">typescript</span>
          <span id="skill">react-js</span>
          <span id="skill">Next-js</span>
          <span id="skill">gastby-js</span>
          <span id="skill">gsap</span>
        </div>
      </div>

      {/* <hr className={styles.hr} id="hr" ref={hr3} /> */}

      <div className={styles.projects} id="projects">
        <div className={styles.projects_header} id="project_header">
          projects worked on
        </div>
        <div className={styles.projects_each}>
          {projects.map((project, index) => {
            const { title, live, code } = project;
            return (
              <div key={index} id="each_project">
                <span>{title}</span> <span>{live}</span>
                <span>{code}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.interests}></div>
    </div>
  );
}
