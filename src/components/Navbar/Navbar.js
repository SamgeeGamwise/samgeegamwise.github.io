import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import * as styles from "./Navbar.module.scss";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <header className={styles.navbar}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects/">Projects</Link>
        <Link to="/about/">About</Link>
      </nav>
      <button onClick={toggleTheme} className={styles.themeToggle}>
        {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
};

export default Navbar;
