import React from 'react'
import * as styles from './ProjectCard.module.scss'

const ProjectCard = ({ project, index }) => {
  const technologies = project.technologies ?? []

  return (
    <div key={index} className={styles.projectCard}>
      <h2 className={styles.projectName}>{project.name}</h2>
      <p className={styles.projectDescription}>{project.description}</p>
      {technologies.length > 0 && (
        <p>
          {technologies.map((technology, key) => (
            <React.Fragment key={key}>
              {key > 0 && <span>, </span>}
              <a href={technology.url} target="_blank" rel="noopener noreferrer" className={styles.projectTechnologies}>
                {technology.name}
              </a>
            </React.Fragment>
          ))}
        </p>
      )}
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
