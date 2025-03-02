import React, { useState, useEffect } from "react";
import * as styles from "./DarkModeToggle.module.scss";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark"; // Default to dark
    }
    return "dark";
  });

    useEffect(() => {
      const storedTheme = localStorage.getItem("theme") || "dark";
      setTheme(storedTheme);
      document.documentElement.setAttribute("theme", storedTheme);
    }, [theme]);
  
    const toggleTheme = () => {
      const newTheme = theme === "dark" ? "light" : "dark";
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute("theme", newTheme);
    };
  
  return (
    <button className={`${styles.toggleWrapper} ${theme === "dark" ? styles.darkMode : ""}`} onClick={toggleTheme} aria-label="Toggle theme">
      <div className={`${styles.toggleSlider} ${theme === "dark" ? styles.dark : ""}`}>
        {/* Sun (Light Mode) */}
        <svg
          className={`${styles.icon} ${theme === "dark" ? styles.hidden : ""}`}
          width="16"
          height="16"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="22" fill="gold" />
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="8"
              x2="50"
              y2="0"
              stroke="gold"
              strokeWidth="5"
              transform={`rotate(${i * 45} 50 50)`}
            />
          ))}
        </svg>

        {/* Moon (Dark Mode) */}
        <svg
          className={`${styles.icon} ${theme === "light" ? styles.hidden : ""}`}
          width="16"
          height="16"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="22" fill="silver" />
          <circle cx="62" cy="46" r="18" fill="black" />
        </svg>
      </div>
    </button>
  );
};

export default DarkModeToggle;