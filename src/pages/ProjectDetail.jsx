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

      {project.video && (
        <Reveal className="detail-cover" data-video-type={project.videoType || 'local'}>
          <video controls playsInline preload="metadata" poster={project.image}>
            <source src={project.video} />
            当前浏览器不支持视频播放。
          </video>
        </Reveal>
      )}

      <section className="detail-story page-shell">
        <div><p className="kicker">PROJECT OVERVIEW</p><h2>{project.summary}</h2></div>
        <div className="detail-copy">
          {project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="service-list">
            {project.services.map((service, index) => <span key={service}>{String(index + 1).padStart(2, '0')} — {service}</span>)}
          </div>
        </div>
      </section>

      {project.stills?.length > 0 && (
        <section className="film-stills page-shell" aria-labelledby="film-stills-title">
          <Reveal className="film-stills-heading">
            <p className="kicker">FILM STILLS</p>
            <h2 id="film-stills-title">精选镜头</h2>
          </Reveal>
          <div className="film-stills-grid">
            {project.stills.map((still, index) => (
              <Reveal className="film-still" key={still}>
                <img
                  src={still}
                  alt={`${project.title}精选镜头 ${String(index + 1).padStart(2, '0')}`}
                  loading="lazy"
                  decoding="async"
                />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <Link to={`/projects/${nextProject.slug}`} className="next-project">
        <div className="page-shell"><p>NEXT PROJECT</p><h2>{nextProject.title}</h2><ArrowRight /></div>
      </Link>
    </article>
  )
}
