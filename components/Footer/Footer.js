import React, { useEffect } from "react";
import styles from "./Footer.module.scss";
import { gsap } from "gsap";
import Link from "next/link";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";

const Footer = () => {
  useEffect(() => {
    const tl = gsap.timeline({ opacity: 0 });
    tl.from(
      "#links",
      {
        y: -100,
        delay: 3,
        scale: 0,
        autoAlpha: 0,
        ease: "bounce",
      },
      6
    )
      .from("#message", {
        y: 100,
        delay: 1,
        scale: 0,
        autoAlpha: 0,
        ease: "bounce",
      })
      .to("#message", {
        delay: 3,
        scale: 1.2,
        ease: "bounce",
        yoyo: true,
        repeat: -1,
        repeatDelay: 10,
      })
      .to("#message", {
        rotate: 360,
        yoyo: true,
        repeat: -1,
        repeatDelay: 15,
        duration: 1,
      });
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.links} id="links">
        <a href="http://twitter.com/thisKehinde">
          <AiOutlineTwitter className={styles.icon} />
        </a>
        <a href="https://github.com/Kennybabs-py">
          <AiOutlineGithub className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/kehinde-babalola-691577148/">
          <AiOutlineLinkedin className={styles.icon} />
        </a>
      </div>

      <div className={styles.message} id="message">
        <Link href="/pages/Contact/Contact">
          <AiFillMessage className={styles.icon} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
