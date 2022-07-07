import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styles from "./Main.module.scss";
import useWindowSize from "../../../utils/hooks/useWindowSize";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  { title: "Space tourism", live: "netlify/vercel" },
  { title: "Luxterior", live: "netlify/vercel" },
  { title: "Codepen Clone", live: "netlify/vercel" },
];

const Main = () => {
  const { width, height } = useWindowSize();

  const hr3 = useRef(null);

  useEffect(() => {
    ScrollTrigger.saveStyles("#project_header");
    ScrollTrigger.matchMedia({
      "(max-width: 600px)": () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#project_header",
            start: "top 90%",
            end: "bottom 20px",
            toggleActions: "play none none none",
          },
        });
        const animate = tl.fromTo(
          "#project_header",
          {
            autoAlpha: 0,
            y: 70,
          },
          { autoAlpha: 1, y: 0 }
        );
      },
    });
  }, []);

  useEffect(() => {
    ScrollTrigger.saveStyles("#each_project");
    ScrollTrigger.matchMedia({
      "(max-width: 600px)": () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#each_project",
            start: "top 90%",
            end: "bottom 20px",
            toggleActions: "play none none none",
          },
        });
        const animate = tl.fromTo(
          "#each_project",
          {
            autoAlpha: 0,
            x: 70,
          },
          {
            autoAlpha: 1,
            x: 0,
            stagger: {
              each: 0.3,
              from: "start",
            },
          }
        );
      },
    });
  }, []);

  useEffect(() => {
    ScrollTrigger.saveStyles(hr3.current);
    ScrollTrigger.matchMedia({
      "(max-width: 600px)": () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: hr3.current,
            start: "top 95%",
            end: "bottom 20px",

            toggleActions: "play none none reverse",
          },
        });
        tl.fromTo(
          hr3.current,
          {
            autoAlpha: 0,
            x: 70,
          },
          {
            autoAlpha: 1,
            x: 0,
            ease: "bounce",
          }
        );
      },
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { opacity: 0 },
    });
    tl.from("#line", {
      x: 50,
      duration: 1,
      autoAlpha: 0,
      stagger: {
        each: 0.1,
        from: "center",
      },
    })
      .to("#line", {
        x: -50,
        duration: 1,
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
      )
      .from("#hr", {
        x: -50,
        duration: 1,
        scale: 0,
        autoAlpha: 0,
      })
      .from("#about", {
        y: 50,
        autoAlpha: 0,
        duration: 1,
        ease: "back",
      })
      .from("#skills", {
        scrollTrigger: {
          trigger: "#skills",
          toggleActions: "play none none none",
        },
        y: -50,
        duration: 1,
        autoAlpha: 0,
        ease: "back",
      })
      .from("#skill", {
        y: 50,
        duration: 1,
        autoAlpha: 0,
        ease: "back",
        stagger: {
          each: 0.1,
          from: "edges",
        },
      })
      .from("#project_header", {
        y: 50,
        duration: 1,
        autoAlpha: 0,
        ease: "back",
      })
      .from("#each_project", {
        y: 100,
        duration: 0.6,
        autoAlpha: 0,
        stagger: {
          each: 0.1,
          from: "start",
        },
      });
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
    ),
      3;
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

      <hr className={styles.hr} id="hr" />

      <div className={styles.about} id="about">
        <div className={styles.about_text} id="text">
          Hi, I&apos;m Kehinde Babalola. I&apos;m a Frontend Developer using
          modern tools to build responsive and interactive web applications.
        </div>
        <button className={styles.button} id="button">
          Download Resume
        </button>
      </div>

      <hr className={styles.hr} id="hr" />

      <div className={styles.skills} id="skills">
        <div className={styles.skills_header}>tools I&apos;m euipped with</div>
        <div className={styles.skills_text}>
          <div id="skill">html5</div>

          <div id="skill">css3</div>

          <div id="skill">scss</div>

          <div id="skill">javascript</div>

          <div id="skill">typescript</div>

          <div id="skill">react-js</div>

          <div id="skill">Next-js</div>

          <div id="skill">gastby-js</div>
          <div id="skill">git</div>
          <div id="skill">gsap</div>
        </div>
      </div>

      <hr className={styles.hr} id="hr" ref={hr3} />

      <div className={styles.projects} id="projects">
        <div className={styles.projects_header} id="project_header">
          projects
        </div>
        <div className={styles.projects_each}>
          {projects.map((project, index) => {
            return (
              <div key={index} id="each_project">
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
