import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { getNextProject, projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  if (!project) return <Navigate to="/404" replace />

  const nextProject = getNextProject(slug)

  return (
    <article className="project-detail" id="top">
      <div className="page-shell">
        <Link to="/projects" className="back-link"><ArrowLeft size={16} /> 返回作品档案</Link>
        <header className="detail-header">
          <p className="kicker">{project.category} / {project.year}</p>
          <Reveal><h1>{project.title}</h1><p className="detail-english">{project.englishTitle}</p></Reveal>
          <div className="detail-meta">
            <div><span>角色</span><p>{project.role}</p></div>
            <div><span>合作方</span><p>{project.client}</p></div>
            <div><span>年份</span><p>{project.year}</p></div>
          </div>
        </header>
      </div>

      <Reveal className="detail-cover">
        <img src={project.image} alt={`${project.title}项目主视觉`} />
      </Reveal>

      <section className="detail-story page-shell">
        <div><p className="kicker">PROJECT OVERVIEW</p><h2>{project.summary}</h2></div>
        <div className="detail-copy">
          {project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="service-list">
            {project.services.map((service, index) => <span key={service}>{String(index + 1).padStart(2, '0')} — {service}</span>)}
          </div>
        </div>
      </section>

      <section className="detail-mosaic page-shell" style={{ '--project-accent': project.accent }}>
        <Reveal className="mosaic-image mosaic-image--large"><img src={project.image} alt="" /></Reveal>
        <Reveal className="mosaic-block"><p>IMAGE / MOTION / EMOTION</p><span>{project.englishTitle}</span></Reveal>
        <Reveal className="mosaic-image mosaic-image--crop"><img src={project.image} alt="" /></Reveal>
      </section>

      <Link to={`/projects/${nextProject.slug}`} className="next-project">
        <div className="page-shell"><p>NEXT PROJECT</p><h2>{nextProject.title}</h2><ArrowRight /></div>
      </Link>
    </article>
  )
}
