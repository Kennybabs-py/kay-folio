import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Head>
        <title>portfolio</title>
        <meta
          name="description"
          content="Portfolio of Kehinde Babalola - Frontend Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.header_nav}>
        <Link href="/">
          <span className={styles.logo_name}>Kehinde Babalola</span>
        </Link>

        <Link href="/contact">
          <span className={styles.contact_nav}>Contact me</span>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
