import React from 'react'
import * as styles from './ProjectCard.module.scss'

const ProjectCard = ({ project, index }) => {
  return (
    <div key={index} className={styles.projectCard}>
      <h2 className={styles.projectName}>{project.name}</h2>
      <p className={styles.projectDescription}>{project.description}</p>
      <p>{project.technologies.map((technology, key) => 
        key === 0 && project.technologies.length > 1 ? 
          <><a key={key} href={technology.url} target="_blank" rel="noopener noreferrer" className={styles.projectTechnologies}>
            {technology.name}
          </a><span>, </span></> : 
          <a key={key} href={technology.url} target="_blank" rel="noopener noreferrer" className={styles.projectTechnologies}>
          {technology.name}
        </a>
        )}
      </p>
      <div className={styles.projectLinks}>
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
            Live Site
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
