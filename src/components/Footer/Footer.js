import React from "react";
import * as styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <span className={styles.footerContainer}>
      <footer className={styles.footer}>© {new Date().getFullYear()} Samuel Krohn</footer>
    </span>
  );
};

export default Footer;
