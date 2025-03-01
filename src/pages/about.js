import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout/Layout";
import * as styles from "./about.module.scss";

const About = () => {
  return (
    <Layout>
      <div className={styles.aboutPage}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.description}>
          I'm a <b>Software Engineer</b> with experience in <b>full-stack development, automation, and web performance optimization</b>. My expertise spans modern frameworks like <b>Angular, React, Next.js, and NestJS</b>, as well as backend technologies including <b>ASP.NET, Node.js, and PostgreSQL</b>.
        </p>
        <section className={styles.section}>
          <h2>Experience</h2>
          <div className={styles.experience}>
            <div>
              <h3>HireVue</h3>
              <p>Software Engineer (Apr 2022 – Present)</p>
              <ul>
                <li>Maintained and improved client assessments, legacy websites, and backend projects using <b>AngularJS, ASP.NET, and Microsoft SQL Server</b>.</li>
                <li>Developed automation tools in <b>Next.js</b> to streamline assessment processing, reducing manual errors.</li>
              </ul>
            </div>
            <div>
              <h3>RE/MAX, LLC</h3>
              <p>Full Stack Developer Intern (Feb 2020 – Nov 2020)</p>
              <ul>
                <li>Maintained multiple web platforms using <b>Angular, Vue, Laravel, PostgreSQL, and Docker</b>.</li>
                <li>Worked independently in a fully remote environment while handling an additional role within the company.</li>
              </ul>
            </div>
            <div>
              <h3>Freelance</h3>
              <ul>
                <li>Developed <a href="https://solarcleancolorado.com" target="_blank" rel="noopener noreferrer">solarcleancolorado.com</a> using <b>Gatsby.js</b>, achieving a <b>100% Lighthouse score</b>.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Education</h2>
          <p><strong>Brigham Young University-Idaho</strong> – Bachelor’s Degree, Applied Technology</p>
          <p><strong>University of Denver</strong> – Full Stack Development Certificate</p>
        </section>

        <section className={styles.section}>
          <h2>Skills</h2>
          <p>Angular, React, Next.js, Vue, SCSS, Tailwind, Bootstrap, Node, Express, NestJS, PostgreSQL, MSSQL.</p>
        </section>

        <a href="/Samuel Krohn Resume.pdf" className={styles.resumeLink} download>Download Resume</a>

        {/* Back to Home Link */}
        <div className={styles.backToHome}>
          <Link to="/">← Back to Home</Link>
        </div>
      </div>
    </Layout>
  );
};

export default About;
