import React from 'react'
import { Link } from 'gatsby'
import * as styles from './Layout.module.scss'
import Footer from '../Footer/Footer'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.nav}>
        <div className={styles.navInner}>
          <Link to="/" className={styles.navLogo}>
            <span className={styles.logoMono}>{'<'}</span>SK<span className={styles.logoMono}>{' />'}</span>
          </Link>
          <nav className={styles.navLinks}>
            <Link to="/about" className={styles.navLink} activeClassName={styles.navLinkActive}>
              About
            </Link>
            <Link to="/projects" className={styles.navLink} activeClassName={styles.navLinkActive}>
              Projects
            </Link>
            <DarkModeToggle />
          </nav>
        </div>
      </header>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
