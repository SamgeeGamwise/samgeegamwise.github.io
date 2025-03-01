import React from "react";
import * as styles from "./footer.module.scss";

const Footer = () => {
  return (
        <button onClick={toggleTheme} className={styles.themeToggle}>
            {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
  );
};

export default Footer;
