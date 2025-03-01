import React from 'react'
import * as styles from './ProjectCard.module.scss'

const ProjectCard = ({project, index}) => {
  return (
    <div key={index} className={styles.projectCard}>
      <h2 className={styles.projectName}>{project.name}</h2>
      <p className={styles.projectDescription}>{project.description}</p>
      <p className={styles.projectTechnologies}>{project.technologies.join(', ')}</p>
      <div className={styles.projectLinks}>
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
            Live Site
          </a>
        )}
        {project.repoLink && (
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className={styles.repoLink}>
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
