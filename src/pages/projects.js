import React from 'react'
import Layout from '../components/Layout/Layout'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import BackToHome from '../components/BackToHome/BackToHome'
import { headData } from '../head'
import * as styles from './projects.module.scss'

const projects = [
  {
    name: 'DK Roofing, Painting, & Gutters',
    description: 'Local roofing and painting business website.',
    technologies: [{ name: 'Eleventy + Nunjucks', url: 'https://github.com/SamgeeGamwise/DarleneKay' }],
    liveLink: 'https://darlenekay.com/',
  },
  {
    name: 'Solar Clean Colorado',
    description: 'Local solar cleaning business website.',
    technologies: [{ name: 'Gatsby.js', url: 'https://github.com/Solarcleancolorado/solarcleancolorado.github.io' }],
    liveLink: 'https://samgee.gamwise.me/solarcleancolorado/',
  },
  {
    name: '30 Minute Pomodoro Timer',
    description: 'A desktop application implementing the Pomodoro technique.',
    technologies: [{ name: 'Electron', url: 'https://github.com/SamgeeGamwise/Pomodoro' }],
  },
  {
    name: 'HarperDB NPM Package',
    description: 'An NPM package for interacting with HarperDB.',
    liveLink: 'https://www.npmjs.com/package/harperdb-node',
  },
  {
    name: 'Announcement Bot',
    description: 'A Discord bot for managing announcements.',
    technologies: [{ name: 'Node', url: 'https://github.com/bubbzDotDev/bot-dashboard-backend' }],
  },
  {
    name: 'Advent of Code 2024',
    description: 'Solutions for Advent of Code 2024 challenges.',
    technologies: [{ name: 'Rust', url: 'https://github.com/SamgeeGamwise/advent-of-code-2024' }],
  },
  {
    name: 'Dragons D&D',
    description: 'A Dungeons & Dragons companion app.',
    technologies: [
      { name: 'Vue', url: 'https://github.com/SamgeeGamwise/dragons_laravel' },
      { name: 'Laravel', url: 'https://github.com/SamgeeGamwise/dragons_backend' },
    ],
  },
  {
    name: 'Asteroids Arcade Game',
    description: 'A classic arcade game implemented in Python.',
    technologies: [{ name: 'Python', url: 'https://github.com/SamgeeGamwise/asteroids' }],
  },
]

const Projects = () => {
  return (
    <>
      <Layout>
        <div className={styles.projectsPage}>
          <h1 className={styles.title}>Projects</h1>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
        <BackToHome />
      </Layout>
    </>
  )
}

export default Projects

export const Head = () => (
  <>
    <title>{`Projects | Samuel Krohn - Portfolio`}</title>
    {headData}
    <meta name="description" content="Projects completed by Samuel Krohn for various reasons" />
  </>
)
