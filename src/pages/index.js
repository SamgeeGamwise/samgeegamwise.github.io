import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import * as styles from './index.module.scss'
import { headData } from '../head'

const IndexPage = () => {
  return (
    <Layout>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.greeting}>Hi, I&apos;m</span>
          <h1 className={styles.name}>Samuel Krohn</h1>
          <h2 className={styles.role}>
            Software Engineer &amp; <span className={styles.accent}>Full-Stack Developer</span>
          </h2>
          <p className={styles.summary}>
            I build pragmatic, performant web applications and automation tools that eliminate complexity.
            Currently at <span className={styles.highlight}>HireVue</span>, working across the full stack
            with TypeScript, React, .NET, and more.
          </p>
          <div className={styles.ctas}>
            <Link to="/projects" className={styles.ctaPrimary}>View My Work</Link>
            <Link to="/about" className={styles.ctaSecondary}>About Me</Link>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <span className={`${styles.dot} ${styles.red}`} />
              <span className={`${styles.dot} ${styles.yellow}`} />
              <span className={`${styles.dot} ${styles.green}`} />
              <span className={styles.filename}>profile.ts</span>
            </div>
            <pre className={styles.terminalBody}><code>{`const engineer = {
  name: "Samuel Krohn",
  role: "Software Engineer",
  focus: [
    "Full-Stack Development",
    "Process Automation",
    "Web Performance",
  ],
  stack: {
    languages: ["TypeScript", "C#", "Rust"],
    frontend: ["React", "Next.js", "Angular"],
    backend: [".NET", "NestJS", "Express"],
    hosting: ["GitHub Pages", "Cloudflare"],
  },
  currentlyAt: "HireVue",
}`}</code></pre>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>Samuel Krohn — Software Engineer</title>
    {headData}
    <meta name="description" content="Samuel Krohn is a software engineer specializing in full-stack development, automation, and web performance." />
  </>
)
