import React from 'react'
import Layout from '../components/Layout/Layout'
import BackToHome from '../components/BackToHome/BackToHome'
import * as styles from './about.module.scss'
import { headData } from '../head'

const skills = [
  'Angular',
  'React',
  'Next.js',
  'Vue',
  'SCSS',
  'Tailwind',
  'Bootstrap',
  'Node',
  'Express',
  'NestJS',
  'PostgreSQL',
  'MSSQL',
]

const About = () => {
  return (
    <>
      <Layout>
        <div className={styles.aboutPage}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.description}>
            I'm a <b>Software Engineer</b> with experience in{' '}
            <b>full-stack development, automation, and web performance optimization</b>. My expertise spans modern
            frameworks like <b>Angular, React, and Next.js</b>, as well as backend technologies including{' '}
            <b>.NET, NestJS, Express, and PostgreSQL</b>.
          </p>
          <section className={styles.section}>
            <h2>Experience</h2>
            <div className={styles.experience}>
              <div>
                <h3>HireVue</h3>
                <p>Software Engineer (Apr 2022 – Present)</p>
                <ul>
                  <li>
                    Maintained and improved client assessments, legacy websites, and backend projects using{' '}
                    <b>AngularJS, .NET, and Microsoft SQL Server</b>.
                  </li>
                  <li>
                    Developed automation tools in <b>Next.js</b> to streamline assessment processing, reducing manual
                    errors.
                  </li>
                </ul>
              </div>
              <div>
                <h3>RE/MAX, LLC</h3>
                <p>Full Stack Developer Intern (Feb 2020 – Nov 2020)</p>
                <ul>
                  <li>
                    Maintained multiple web platforms using <b>Angular, Vue, Laravel, PostgreSQL, and Docker</b>.
                  </li>
                  <li>
                    Worked independently in a fully remote environment while handling an additional role within the
                    company.
                  </li>
                </ul>
              </div>
              <div>
                <h3>Freelance</h3>
                <ul>
                  <li>
                    Developed{' '}
                    <a href="https://solarcleancolorado.com" target="_blank" rel="noopener noreferrer">
                      solarcleancolorado.com
                    </a>{' '}
                    using <b>Gatsby.js</b>, achieving a <b>100% Lighthouse score</b>.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Education</h2>
            <p>
              <strong>Brigham Young University-Idaho</strong> – Bachelor’s Degree, Computer Science
            </p>
            <p>
              <strong>University of Denver</strong> – Full Stack Development Certificate
            </p>
          </section>

          <section className={styles.section}>
            <h2>Skills</h2>
            <p>{[...skills]}</p>
          </section>

          <a href="/Samuel Krohn Resume.docx" className={styles.resumeLink} download>
            Download Resume
          </a>

          <BackToHome />
        </div>
      </Layout>
    </>
  )
}

export default About

export const Head = () => (
  <>
    <title>{`About | Samuel Krohn - Portfolio`}</title>
    {headData}
    <meta name="description" content="About Samuel Krohn and his career" />
  </>
)
