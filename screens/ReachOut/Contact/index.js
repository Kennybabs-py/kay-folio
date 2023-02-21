import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { gsap } from "gsap";

// import Header from "components/Header";
import styles from "./Contact.module.scss";

export default function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(formValues));
    setIsSubmit(true);
  };

  //useeffect for error handler

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  //validation of form

  const validateForm = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.name) {
      errors.name = "Enter your name!";
    }
    if (!values.email) {
      errors.email = "Enter your email!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.message) {
      errors.message = "Enter your message!";
    } else if (values.message && values.message.length < 20) {
      errors.message = "Message must be longer than 20 characters!";
    }

    return errors;
  };

  //useeffect for gsap
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { opacity: 0 },
    });
    tl.from("#sendme", {
      y: -50,
      autoAlpha: 0,
      stagger: {
        each: 0.2,
        from: "center",
      },
    })
      .from("#form", {
        y: 50,
        autoAlpha: 0,
      })
      .from("#links", {
        x: -50,
        autoAlpha: 0,
        ease: "back",
      })
      .from("#links a", {
        y: -50,
        autoAlpha: 0,
        ease: "back",
        stagger: {
          each: 0.2,
          from: "center",
        },
      })
      .from(
        "#homelink",
        {
          x: -500,
          autoAlpha: 0,
          ease: "back",
        },
        "+=3"
      );
  }, []);

  return (
    <div className={styles.contact}>
      <div className={styles.home_link} id="homelink">
        <Link href="/">
          <button> &larr; Back to home</button>
        </Link>
      </div>

      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <span className={styles.message_success}>Message sent</span>
      ) : (
        ""
      )}

      <div className={styles.contact_text} id="sendme">
        <span>Send me an Email</span>
      </div>

      <form
        action="mailto:babalolakehinde74@gmail.com"
        method="post"
        encType="text/plain"
        className={styles.contact_form}
        id="form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formValues.name}
          onChange={handleChange}
        />
        <p className={styles.error_message}>{formErrors.name}</p>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <p className={styles.error_message}>{formErrors.email}</p>
        <textarea
          cols="30"
          rows="10"
          placeholder="Message"
          name="message"
          value={formValues.message}
          onChange={handleChange}
        ></textarea>
        <p className={styles.error_message}>{formErrors.message}</p>

        <button type="submit" onClick={handleSubmit}>
          Send
        </button>
      </form>
      <div className={styles.links} id="links">
        <span>
          <MdOutlineAlternateEmail />
          <a
            href="mailto:babalolakehinde74@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            babalolakehinde74@gmail.com
          </a>
        </span>
        <div className={styles.icon}>
          <a
            href="https://twitter.com/thisKehinde"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="https://github.com/Kennybabs-py"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kehinde-babalola/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
