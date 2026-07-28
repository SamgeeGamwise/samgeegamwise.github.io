import React from 'react'
import Layout from '../components/Layout/Layout'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import SEO from '../components/SEO/SEO'
import * as styles from './projects.module.scss'

const projects = [
  {
    name: 'DK Roofing, Painting, & Gutters',
    description: 'Client marketing website I designed and developed for a local roofing, painting, and gutter business, with a focus on performance and local discoverability.',
    technologies: [
      { name: 'Eleventy', url: 'https://www.11ty.dev/' },
      { name: 'Nunjucks', url: 'https://mozilla.github.io/nunjucks/' },
      { name: 'Cloudflare', url: 'https://www.cloudflare.com/' },
    ],
    github: 'https://github.com/SamgeeGamwise/DarleneKay',
    liveLink: 'https://darlenekay.com/',
  },
  {
    name: 'Solar Clean Colorado',
    description: 'Marketing website for a solar panel cleaning service, achieving a perfect Lighthouse score.',
    technologies: [{ name: 'Gatsby.js', url: 'https://www.gatsbyjs.com/' }, { name: 'React.js', url: 'https://react.dev/' }],
    github: 'https://github.com/Solarcleancolorado/solarcleancolorado.github.io',
    liveLink: 'https://samgee.gamwise.me/solarcleancolorado/',
  },
  {
    name: 'Red Rock 1 Management Interface',
    description: 'Custom internal tool for viewing and updating operational data, built on top of the AirTable API.',
    technologies: [
      { name: 'Next.js', url: 'https://nextjs.org/' },
      { name: 'AirTable API', url: 'https://airtable.com/developers/web/api/introduction' },
    ],
  },
  {
    name: 'Pong',
    description: 'Pong, using Rust and the Macroquad framework.',
    technologies: [
      { name: 'Rust', url: 'https://www.rust-lang.org/' },
      { name: 'Macroquad', url: 'https://macroquad.rs/' },
    ],
    github: 'https://github.com/SamgeeGamwise/PongRust',
    liveLink: '/pong/',
  },
  {
    name: 'Calendar App',
    description: 'Skylight-inspired household productivity dashboard for Raspberry Pi. Google Calendar integration, todo/chore lists, and routine tracking — all in one always-on display.',
    technologies: [
      { name: 'Next.js', url: 'https://nextjs.org/' },
      { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
      { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
      { name: 'Google Calendar API', url: 'https://developers.google.com/calendar' },
    ],
    github: 'https://github.com/SamgeeGamwise/ProductivityApp',
    liveLink: 'https://productivity-app-ten-rho.vercel.app/',
  },
  {
    name: 'Banking API',
    description:
      'Java Spring Boot banking API with customers, accounts, deposits, withdrawals, transfers, transaction history, validation, exception handling, and PostgreSQL persistence.',
    technologies: [
      { name: 'Java', url: 'https://www.java.com/' },
      { name: 'Spring Boot', url: 'https://spring.io/projects/spring-boot' },
      { name: 'Spring Data JPA', url: 'https://spring.io/projects/spring-data-jpa' },
      { name: 'Hibernate', url: 'https://hibernate.org/' },
      { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
    ],
    github: 'https://github.com/SamgeeGamwise/Altamira'
  },
  {
    name: 'LinkedIn Promoted Job Filter',
    description: 'Browser extension that hides promoted jobs from LinkedIn search results, including dynamically loaded listings.',
    technologies: [
      { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'WebExtensions', url: 'https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions' },
    ],
    github: 'https://github.com/SamgeeGamwise/LinkedInPromotionRemover',
  },
  {
    name: '30 Minute Pomodoro Timer',
    description: 'Cross-platform desktop application implementing the Pomodoro productivity technique.',
    technologies: [{ name: 'Electron.js', url: 'https://www.electronjs.org/' }],
    github: 'https://github.com/SamgeeGamwise/Pomodoro',
  },
  {
    name: 'HarperDB NPM Package',
    description: 'Published npm package providing a clean Node.js interface for interacting with HarperDB.',
    technologies: [{ name: 'Node.js', url: 'https://nodejs.org/' }],
    npmLink: 'https://www.npmjs.com/package/harperdb-node',
  },
  {
    name: 'Announcement Bot',
    description: 'Discord bot for managing and scheduling server announcements across channels.',
    technologies: [
      { name: 'Node.js', url: 'https://nodejs.org/' },
      { name: 'Discord.js', url: 'https://discord.js.org/' },
    ],
    github: 'https://github.com/bubbzDotDev/bot-dashboard-backend',
  },
  {
    name: 'Advent of Code 2024',
    description: 'Solutions to Advent of Code 2024 puzzles, written as a way to learn Rust.',
    technologies: [{ name: 'Rust', url: 'https://www.rust-lang.org/' }],
    github: 'https://github.com/SamgeeGamwise/advent-of-code-2024',
  },
  {
    name: 'Dragons D&D',
    description: 'A Dungeons & Dragons companion app for managing campaigns, characters, and encounters.',
    technologies: [
      { name: 'Vue', url: 'https://vuejs.org/' },
      { name: 'Laravel', url: 'https://laravel.com/' },
    ],
    github: 'https://github.com/SamgeeGamwise/dragons_laravel',
  },
  {
    name: 'Asteroids Arcade Game',
    description: 'Classic Asteroids arcade game rebuilt from scratch with physics-based movement.',
    technologies: [{ name: 'Python', url: 'https://www.python.org/' }],
    github: 'https://github.com/SamgeeGamwise/asteroids',
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

export const Head = ({ location }) => {
  const description = 'Explore client websites, full-stack applications, automation tools, open-source packages, and games designed and developed by Samuel Krohn.'
  const projectItems = projects.map((project, index) => {
    const url = project.liveLink?.startsWith('http')
      ? project.liveLink
      : project.github || project.npmLink || undefined

    return {
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: project.name,
        description: project.description,
        ...(url ? { url } : {}),
        creator: { '@id': 'https://samgee.gamwise.me/#person' },
      },
    }
  })

  return (
    <SEO
      title="Software Projects & Client Work | Samuel Krohn"
      description={description}
      pathname={location.pathname}
      schema={{
        '@type': 'CollectionPage',
        '@id': 'https://samgee.gamwise.me/projects/#collection',
        url: 'https://samgee.gamwise.me/projects/',
        name: 'Software Projects and Client Work by Samuel Krohn',
        description,
        isPartOf: { '@id': 'https://samgee.gamwise.me/#website' },
        author: { '@id': 'https://samgee.gamwise.me/#person' },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: projects.length,
          itemListElement: projectItems,
        },
      }}
    />
  )
}
