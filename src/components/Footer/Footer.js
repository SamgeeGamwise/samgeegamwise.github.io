import React from "react";
import * as styles from "./Footer.module.scss";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const Footer = () => {
  return (
    <span className={styles.footerContainer}>
      <footer className={styles.footer}>© {new Date().getFullYear()} Samuel Krohn</footer>
    </span>
  );
};

export default Footer;
