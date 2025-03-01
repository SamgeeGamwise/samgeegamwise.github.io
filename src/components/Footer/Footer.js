import React from "react";
import * as styles from "./Footer.module.scss";

const Footer = () => {
  return (
      <footer className={styles.footer}>© {new Date().getFullYear()} Samuel Krohn</footer>
  );
};

export default Footer;
