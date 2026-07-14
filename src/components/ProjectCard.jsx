import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project, index, featured = false }) {
  return (
    <article className={`project-card ${featured ? 'project-card--featured' : ''}`}>
      <Link to={`/projects/${project.slug}`} className="project-image-link" aria-label={`查看项目：${project.title}`}>
        <div className="project-image-wrap">
          <img src={project.image} alt={`${project.title}项目封面`} loading={index > 1 ? 'lazy' : 'eager'} />
          <div className="project-image-tint" />
          <span className="project-open" style={{ backgroundColor: project.accent }}>
            <ArrowUpRight size={22} />
          </span>
        </div>
      </Link>

      <Link to={`/projects/${project.slug}`} className="project-meta">
        <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
        <div>
          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>
        <div className="project-year">{project.year}</div>
      </Link>
    </article>
  )
}
