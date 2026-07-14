import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

const capabilities = ['影视剪辑与节奏设计', '专业色彩管理与调色', 'AIGC 视觉开发', '品牌影像后期', '数字化叙事与创意策划']

export default function About() {
  return (
    <div className="about-page" id="top">
      <section className="page-shell about-hero">
        <p className="kicker">02 / ABOUT XMIE</p>
        <Reveal><h1>让技术成为情感的放大器，<br /><span>而不是画面的噪音。</span></h1></Reveal>
      </section>

      <section className="about-portrait page-shell">
        <Reveal className="portrait-frame"><img src="/images/portrait.jpg" alt="XMIE 的个人头像" /></Reveal>
        <div className="portrait-caption"><span>XMIE / 麦曾毅</span><span>视觉传达设计师 · 数字影像创作者</span></div>
      </section>

      <section className="about-content page-shell">
        <div><p className="kicker">PROFILE</p></div>
        <div className="bio-copy">
          <Reveal>
            <p className="bio-lead">立足视觉传达设计背景，专注于影视视听语言与数字化创意表达。</p>
            <p>我深耕传统影视后期全流程，在专业级色彩管理、高级调色与剪辑美学领域拥有扎实的技术底蕴与交付能力。同时，作为人工智能视听变革的积极探索者，我致力于打破 AIGC 前沿流派与传统视听语言的边界。</p>
            <p>我热衷于用数字技术赋能中式情感故事与现代视觉符号的创新表达。无论是追求极致质感的传统影视后期，还是探索未来边界的 AIGC 创意实验，我都期待共同打破常规，重构影像叙事的无限可能。</p>
          </Reveal>
        </div>
      </section>

      <section className="capabilities page-shell">
        <p className="kicker">CAPABILITIES</p>
        <div>
          {capabilities.map((item, index) => (
            <Reveal key={item} delay={index * 45}><div className="capability-row"><span>0{index + 1}</span><p>{item}</p><ArrowUpRight /></div></Reveal>
          ))}
        </div>
      </section>

      <section className="about-cta page-shell">
        <p>有合适的项目？</p><Link to="/contact">让我们聊聊 <ArrowUpRight /></Link>
      </section>
    </div>
  )
}
