import React, { useState, useEffect } from 'react'
import * as styles from './DarkModeToggle.module.scss'

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark' // Default to dark
    }
    return 'dark'
  })

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || theme
    setTheme(prev => (prev === storedTheme ? prev : storedTheme))
    document.documentElement.setAttribute('theme', storedTheme)
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('theme', newTheme)
  }

  return (
    <button
      className={`${styles.toggleWrapper} ${theme === 'dark' ? styles.darkMode : ''}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div className={`${styles.toggleSlider} ${theme === 'dark' ? styles.dark : ''}`}>
        {/* Sun (Light Mode) */}
        <svg
          className={`${styles.icon} ${theme === 'dark' ? styles.hidden : ''}`}
          width="20"
          height="20"
          viewBox="0 0 125 125"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="62.5" cy="62.5" r="35" fill="gold" stroke="orange" strokeWidth="3" filter="url(#sunGlow)" />

          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="62.5"
              y1="20" // Starts further inside the sun
              x2="62.5"
              y2="0" // Extends out further from the sun
              stroke="gold"
              strokeWidth="6"
              strokeLinecap="round"
              transform={`rotate(${i * 30} 62.5 62.5)`}
              filter="url(#sunGlow)"
            />
          ))}
        </svg>

        {/* Moon (Dark Mode) */}
        <svg
          className={`${styles.icon} ${theme === 'light' ? styles.hidden : ''}`}
          width="20"
          height="20"
          viewBox="0 0 125 125"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="62.5" cy="62.5" r="50" fill="silver" stroke="white" strokeWidth="3" filter="url(#moonGlow)" />
          <circle cx="85" cy="57.5" r="40" fill="white" />
          <defs>
            <filter id="moonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>
    </button>
  )
}

export default DarkModeToggle
