import React from 'react'
import Layout from '../components/Layout/Layout'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import { headData } from '../head'
import * as styles from './projects.module.scss'

const projects = [
  {
    name: 'DK Roofing, Painting, & Gutters',
    description: 'Marketing website for a local roofing and painting business. Focused on performance and discoverability.',
    technologies: [{ name: 'Eleventy', url: 'https://github.com/SamgeeGamwise/DarleneKay' }, { name: 'Nunjucks' }, { name: 'Cloudflare' }],
    liveLink: 'https://darlenekay.com/',
  },
  {
    name: 'Solar Clean Colorado',
    description: 'Marketing website for a solar panel cleaning service, achieving a perfect Lighthouse score.',
    technologies: [{ name: 'Gatsby.js', url: 'https://github.com/Solarcleancolorado/solarcleancolorado.github.io' }],
    liveLink: 'https://samgee.gamwise.me/solarcleancolorado/',
  },
  {
    name: 'Red Rock 1 Management Interface',
    description: 'Custom internal tool for viewing and updating operational data, built on top of the AirTable API.',
    technologies: [{ name: 'Next.js' }, { name: 'AirTable API' }],
  },
  {
    name: 'Calendar App',
    description: 'Skylight-inspired household productivity dashboard for Raspberry Pi. Google Calendar integration, todo/chore lists, and routine tracking — all in one always-on display.',
    technologies: [
      { name: 'Next.js', url: 'https://github.com/SamgeeGamwise/ProductivityApp' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Google Calendar API' },
    ],
    liveLink: 'https://productivity-app-ten-rho.vercel.app/',
  },
  {
    name: 'LinkedIn Promoted Job Filter',
    description: 'Browser extension that hides promoted jobs from LinkedIn search results, including dynamically loaded listings.',
    technologies: [
      { name: 'JavaScript', url: 'https://github.com/SamgeeGamwise/LinkedInPromotionRemover' },
      { name: 'WebExtensions' }
    ],
  },
  {
    name: '30 Minute Pomodoro Timer',
    description: 'Cross-platform desktop application implementing the Pomodoro productivity technique.',
    technologies: [{ name: 'Electronjs', url: 'https://github.com/SamgeeGamwise/Pomodoro' }],
  },
  {
    name: 'HarperDB NPM Package',
    description: 'Published npm package providing a clean Node.js interface for interacting with HarperDB.',
    technologies: [{ name: 'Node.js' }],
    npmLink: 'https://www.npmjs.com/package/harperdb-node',
  },
  {
    name: 'Announcement Bot',
    description: 'Discord bot for managing and scheduling server announcements across channels.',
    technologies: [{ name: 'Node.js', url: 'https://github.com/bubbzDotDev/bot-dashboard-backend' }, { name: 'Discord.js' }],
  },
  {
    name: 'Advent of Code 2024',
    description: 'Solutions to Advent of Code 2024 puzzles, written as a way to learn Rust.',
    technologies: [{ name: 'Rust', url: 'https://github.com/SamgeeGamwise/advent-of-code-2024' }],
  },
  {
    name: 'Dragons D&D',
    description: 'A Dungeons & Dragons companion app for managing campaigns, characters, and encounters.',
    technologies: [
      { name: 'Vue', url: 'https://github.com/SamgeeGamwise/dragons_laravel' },
      { name: 'Laravel', url: 'https://github.com/SamgeeGamwise/dragons_backend' },
    ],
  },
  {
    name: 'Asteroids Arcade Game',
    description: 'Classic Asteroids arcade game rebuilt from scratch with physics-based movement.',
    technologies: [{ name: 'Python', url: 'https://github.com/SamgeeGamwise/asteroids' }],
  },
]

const Projects = () => {
  return (
    <Layout>
      <div className={styles.projectsPage}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Projects</h1>
          <p className={styles.pageSubtitle}>
            A selection of work spanning client sites, internal tools, open-source packages, and personal experiments.
          </p>
        </div>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Projects

export const Head = () => (
  <>
    <title>Projects — Samuel Krohn</title>
    {headData}
    <meta name="description" content="Projects by Samuel Krohn — web development, automation tools, desktop apps, and more." />
  </>
)
