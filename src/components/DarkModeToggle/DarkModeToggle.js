import React, { useState, useEffect } from "react";
import * as styles from "./DarkModeToggle.module.scss";

const DarkModeToggle = () => {
    const [theme, setTheme] = useState("dark");
    const [isBlownOut, setIsBlownOut] = React.useState(false);

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
    <div className={`${styles.toggleWrapper} ${theme === "dark" ? styles.darkMode : ""}`} onClick={toggleTheme}>
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
    </div>
      //   <svg
  //   className={styles.toggle}
  //   width="50"
  //   height="50"
  //   viewBox="0 0 100 100"
  //   xmlns="http://www.w3.org/2000/svg"
  //   onClick={toggleTheme} // Click event
  // >
  //   {/* Sun (Visible in Light Mode) */}
  //   {theme == "light" && (
  //     <g className={styles.sun}>
  //       <circle cx="50" cy="50" r="20" fill="gold" />
  //       {/* Sun Rays */}
  //       {[...Array(8)].map((_, i) => (
  //         <line
  //           key={i}
  //           x1="50"
  //           y1="10"
  //           x2="50"
  //           y2="0"
  //           stroke="gold"
  //           strokeWidth="3"
  //           transform={`rotate(${i * 45} 50 50)`}
  //         />
  //       ))}
  //     </g>
  //   )}

  //   {/* Moon (Visible in Dark Mode) */}
  //   {theme == "dark" && (
  //     <g className={styles.moon}>
  //       <circle cx="55" cy="50" r="20" fill="silver" />
  //       {/* Crescent Effect */}
  //       <circle cx="65" cy="50" r="20" fill="black" />
  //     </g>
  //   )}
  // </svg>
  //   <svg
  //   className={styles.candle}
  //   width="50"
  //   height="80"
  //   viewBox="0 0 120 180"
  //   xmlns="http://www.w3.org/2000/svg"
  //   onClick={toggleTheme} // Click event handler
  // >
  //   {/* Flame - Only visible if not blown out */}
  //   {theme == "light" && (
  //     <>
  //       <g className={styles.flame}>
  //         <path
  //           d="M60,30 C50,55 45,75 60,100 C75,75 70,55 60,30 Z"
  //           fill="orange"
  //           stroke="gold"
  //           strokeWidth="2"
  //         />
  //       </g>

  //       {/* Glow */}
  //       <circle cx="60" cy="70" r="15" fill="gold" opacity="0.5" />
  //     </>
  //   )}

  //   {/* Smoke - Shows only if blown out */}
  //   {theme == "dark" && (
  //     <g className={styles.smoke}>
  //       {/* Multiple smoke puffs for more realism */}
  //       <circle cx="60" cy="40" r="6" fill="gray" opacity="0.5" className={styles.smoke1} />
  //       <circle cx="65" cy="35" r="4" fill="gray" opacity="0.4" className={styles.smoke2} />
  //       <circle cx="55" cy="30" r="5" fill="gray" opacity="0.3" className={styles.smoke3} />
  //     </g>
  //   )}

  //   {/* Candle Body */}
  //   <g>
  //     <rect x="45" y="100" width="30" height="60" fill="#8B5A2B" rx="5" />
  //     <path
  //       d="M50,100 Q55,90 58,100 T66,100 Q70,85 75,100"
  //       fill="beige"
  //       opacity="0.9"
  //     />
  //   </g>

  //   {/* Wick */}
  //   <rect x="58" y="95" width="4" height="10" fill="black" />
  // </svg>
        // <button onClick={toggleTheme} className={styles.themeToggle}>
        //     {theme === "dark" ? "Light Mode" : "Dark Mode"}
        // </button>
  );
};

export default DarkModeToggle;