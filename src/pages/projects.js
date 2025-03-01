import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout/Layout";
import * as styles from "./projects.module.scss";

const projects = [
  {
    name: "SolarCleanColorado",
    description: "A website for a solar panel cleaning service.",
    technologies: ["Gatsby.js"],
    liveLink: "https://www.solarcleancolorado.com/",
    repoLink: "https://github.com/Solarcleancolorado/solarcleancolorado.github.io",
  },
  {
    name: "30 Minute Pomodoro Timer",
    description: "A desktop application implementing the Pomodoro technique.",
    technologies: ["Electron"],
    repoLink: "https://github.com/SamgeeGamwise/Pomodoro",
  },
  {
    name: "Dinnerio",
    description: "A meal planning application.",
    technologies: ["Angular", "NestJS"],
    liveLink: "http://dinnerio.s3-website-us-west-2.amazonaws.com/",
    repoLink: "https://github.com/SamgeeGamwise/dinnerio-angular",
  },
  {
    name: "HarperDB NPM Package",
    description: "An NPM package for interacting with HarperDB.",
    technologies: ["Node"],
    liveLink: "https://www.npmjs.com/package/harperdb-node",
    repoLink: "https://github.com/SamgeeGamwise/harperdb-functions",
  },
  {
    name: "Announcement Bot",
    description: "A bot for managing announcements.",
    technologies: ["Node"],
    repoLink: "https://github.com/bubbzDotDev/bot-dashboard-backend",
  },
  {
    name: "Advent of Code 2024",
    description: "Solutions for Advent of Code 2024 challenges.",
    technologies: ["Rust"],
    repoLink: "https://github.com/SamgeeGamwise/advent-of-code-2024",
  },
  {
    name: "Dragons D&D",
    description: "A Dungeons & Dragons companion app.",
    technologies: ["Vue", "Laravel"],
    repoLink: "https://github.com/SamgeeGamwise/dragons_laravel",
  },
  {
    name: "Asteroids Arcade Game",
    description: "A classic arcade game implemented in Python.",
    technologies: ["Python"],
    repoLink: "https://github.com/SamgeeGamwise/asteroids",
  },
  {
    name: "Zombie Run!",
    description: "A browser-based game with Firebase integration.",
    technologies: ["Vanilla JS", "Firebase"],
    liveLink: "http://zombierun.s3-website-us-west-2.amazonaws.com/",
  },
];

const Projects = () => {
  return (
    <Layout>
      <div className={styles.projectsPage}>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <h2 className={styles.projectName}>{project.name}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
              <p className={styles.projectTechnologies}>
                {project.technologies.join(", ")}
              </p>
              <div className={styles.projectLinks}>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.liveLink}
                  >
                    Live Site
                  </a>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.repoLink}
                  >
                    GitHub Repo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    <div className={styles.backToHome}>
    <Link to="/">← Back to Home</Link>
    </div>
    </Layout>
  );
};

export default Projects;
