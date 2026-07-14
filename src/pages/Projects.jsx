import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <div className="page-shell inner-page" id="top">
      <section className="page-hero">
        <p className="kicker">01 / ALL PROJECTS</p>
        <Reveal><h1>作品档案<span> / {String(projects.length).padStart(2, '0')}</span></h1></Reveal>
        <div className="page-hero-note">
          <p>影像叙事、AIGC 视觉与商业后期。每一个项目，都是对表达边界的一次重新测试。</p>
          <p>2024 — NOW</p>
        </div>
      </section>
      <div className="filter-row" aria-label="项目类型">
        <span className="active">全部</span><span>AIGC 影像</span><span>品牌影片</span><span>剪辑后期</span>
      </div>
      <section className="project-grid project-grid--archive">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 2) * 90}>
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </section>
    </div>
  )
}
