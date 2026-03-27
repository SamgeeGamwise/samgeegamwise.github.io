import React from 'react'
import Layout from '../components/Layout/Layout'
import * as styles from './about.module.scss'
import { headData } from '../head'

const skillGroups = [
  {
    label: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'C#', 'Rust', 'Python'],
  },
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'Angular', 'Vue', 'Gatsby.js', 'Eleventy', 'SCSS', 'Tailwind'],
  },
  {
    label: 'Backend',
    skills: ['.NET / ASP.NET', 'NestJS', 'Express', 'Node.js', 'Laravel'],
  },
  {
    label: 'Databases',
    skills: ['PostgreSQL', 'MSSQL', 'MySQL', 'Firebase'],
  },
  {
    label: 'Infrastructure & Tools',
    skills: ['Docker', 'AWS S3', 'Git', 'CI/CD', 'REST APIs', 'Agile/Scrum'],
  },
  {
    label: 'AI & Productivity',
    skills: ['Claude', 'ChatGPT'],
  },
]

const experience = [
  {
    company: 'HireVue',
    role: 'Software Engineer',
    period: 'Apr 2022 — Present',
    bullets: [
      'Maintain and enhance client assessment platform, legacy website, and backend services using AngularJS, ASP.NET, and Microsoft SQL Server.',
      'Identified error-prone manual workflows and built internal automation tools in Next.js, eliminating recurring processing mistakes.',
      'Developed bulk file manipulation scripts to streamline client update deployments and remove unused assets across environments.',
      'Collaborate cross-functionally with product and QA to scope features, triage bugs, and ship reliable releases.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Software Engineer',
    period: 'Feb 2024 — Present',
    bullets: [
      'Designed and developed marketing websites for Solar Clean Colorado and Darlene Kay, LLC using Gatsby.js and Eleventy.',
      'Built a custom AirTable management interface using Next.js for Red Rock 1, improving operational data workflows.',
      'Managed full project lifecycle from client discovery and design through deployment and handoff.',
    ],
  },
  {
    company: 'RE/MAX, LLC',
    role: 'Software Engineer Intern',
    period: 'Feb 2020 — Nov 2020',
    bullets: [
      'Contributed to five production web properties (remax.net, profile.remax.net, admin.remax.net, joinremax.com) using Angular, Vue, Laravel, PostgreSQL, and Docker.',
      'Delivered features and fixes independently in a fully remote environment while maintaining a second role.',
    ],
  },
  {
    company: 'RE/MAX, LLC',
    role: 'Payroll Specialist / Membership Services Coordinator',
    period: 'Sep 2017 — Apr 2022',
    bullets: [
      'Processed semi-monthly payroll for 650+ employees through UKG, ensuring accuracy and compliance.',
      'Built and maintained Cognos BI reports to support payroll auditing and forecasting.',
      'Managed transaction data and membership records across 1,000+ offices worldwide.',
    ],
  },
]

const About = () => {
  return (
    <Layout>
      <div className={styles.aboutPage}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>About Me</h1>
          <p className={styles.pageSubtitle}>
            Software Engineer with a full-stack background, a focus on automation, and a prior career in
            payroll operations that gives me a grounded sense of what end users actually need.
          </p>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.timeline}>
            {experience.map((job, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <div className={styles.jobHeader}>
                    <div>
                      <h3 className={styles.jobRole}>{job.role}</h3>
                      <span className={styles.jobCompany}>{job.company}</span>
                    </div>
                    <span className={styles.jobPeriod}>{job.period}</span>
                  </div>
                  <ul className={styles.jobBullets}>
                    {job.bullets.map((b, j) => (
                      <li key={j} className={styles.jobBullet}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
          <div className={styles.skillGroups}>
            {skillGroups.map((group, i) => (
              <div key={i} className={styles.skillGroup}>
                <h3 className={styles.skillGroupLabel}>{group.label}</h3>
                <div className={styles.skillBadges}>
                  {group.skills.map((skill, j) => (
                    <span key={j} className={styles.skillBadge}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.educationGrid}>
            <div className={styles.eduCard}>
              <h3 className={styles.eduSchool}>Brigham Young University–Idaho</h3>
              <p className={styles.eduDegree}>Bachelor&apos;s Degree, Computer Science</p>
            </div>
            <div className={styles.eduCard}>
              <h3 className={styles.eduSchool}>University of Denver</h3>
              <p className={styles.eduDegree}>Full Stack Development Certificate</p>
              <p className={styles.eduNote}>Capstone: React, Express, Passport.js, MySQL, Firebase, AWS S3</p>
            </div>
          </div>
        </section>

        <div className={styles.resumeCta}>
          <a href="/Samuel Krohn Resume.docx" className={styles.resumeBtn} download>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default About

export const Head = () => (
  <>
    <title>About — Samuel Krohn</title>
    {headData}
    <meta name="description" content="About Samuel Krohn — software engineer, full-stack developer, and automation specialist." />
  </>
)
