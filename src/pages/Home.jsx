import { ArrowDown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'

export default function Home() {
  return (
    <>
      <section className="hero page-shell" id="top">
        <div className="hero-topline">
          <p>AI FILM CREATOR / AIGC DIRECTOR</p>
          <p>BASED IN CHENGDU · CHINA</p>
        </div>
        <Reveal className="hero-title-wrap">
          <h1>
            以 AI 为笔，<br />
            <span>重写影像。</span>
          </h1>
        </Reveal>
        <div className="hero-bottom">
          <p>我是麦曾毅，专注 AIGC 短片导演与影视后期制作。从分镜、剪辑到调色与声音设计，用完整的视听语言让生成影像真正成为故事。</p>
          <a href="#selected-work" className="scroll-cue"><ArrowDown size={17} /> SCROLL TO EXPLORE</a>
        </div>
      </section>

      <div className="discipline-strip" aria-label="专业领域">
        <div>
          <span>AI VIDEO GENERATION</span><i />
          <span>STORYBOARD DESIGN</span><i />
          <span>VIDEO EDITING</span><i />
          <span>COLOR GRADING</span><i />
          <span>SOUND DESIGN</span><i />
          <span>VISUAL STORYTELLING</span><i />
          <span>AIGC FILM DIRECTION</span>
        </div>
      </div>

      <section className="work-section page-shell" id="selected-work">
        <Reveal>
          <header className="section-heading">
            <div><p className="kicker">01 / SELECTED WORK</p><h2>精选作品</h2></div>
            <Link to="/projects" className="arrow-link">查看全部项目 <ArrowRight size={18} /></Link>
          </header>
        </Reveal>

        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal key={project.slug} className={index === 0 ? 'grid-span-2' : ''} delay={(index % 2) * 90}>
              <ProjectCard project={project} index={index} featured={index === 0} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="statement page-shell">
        <Reveal>
          <p className="kicker">02 / APPROACH</p>
          <p className="statement-copy">技术不是终点。<br /><span>真正重要的，是画面留下的感受。</span></p>
          <Link to="/about" className="round-link">了解我的方法 <ArrowRight size={18} /></Link>
        </Reveal>
      </section>
    </>
  )
}
