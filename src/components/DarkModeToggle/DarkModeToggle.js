import React, { useState, useEffect } from 'react'
import * as styles from './DarkModeToggle.module.scss'

const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme') || 'dark'
  }
  return 'dark'
}

const sunRays = Array.from({ length: 12 }, (_, i) => (
  <line
    key={i}
    x1="62.5"
    y1="20"
    x2="62.5"
    y2="0"
    stroke="gold"
    strokeWidth="6"
    strokeLinecap="round"
    transform={`rotate(${i * 30} 62.5 62.5)`}
    filter="url(#sunGlow)"
  />
))

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    if (typeof window === 'undefined') return
    document.documentElement.setAttribute('theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
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
          <circle cx="62.5" cy="62.5" r="35" fill="gold" stroke="orange" strokeWidth="3" />
          {sunRays}
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
