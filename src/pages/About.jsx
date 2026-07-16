import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

const capabilities = ['AI 视频生成', '分镜设计', '视频剪辑', '后期调色', '声音设计']

export default function About() {
  return (
    <div className="about-page" id="top">
      <section className="page-shell about-hero">
        <p className="kicker">02 / ABOUT XMIE</p>
        <div className="about-hero-layout">
          <Reveal className="about-hero-copy">
            <h1>用 AI 拓展想象，<br /><span>用电影语言完成表达。</span></h1>
          </Reveal>
          <div className="about-portrait">
            <Reveal className="portrait-frame"><img src="/images/portrait.jpg" alt="AI 影视创作者 xmie（麦曾毅）的个人头像" /></Reveal>
            <div className="portrait-caption"><span>xmie / 麦曾毅</span><span>AI 影视创作者 · AIGC 短片导演 · 影视后期制作</span></div>
          </div>
        </div>
      </section>

      <section className="about-content page-shell">
        <div><p className="kicker">PROFILE</p></div>
        <div className="bio-copy">
          <Reveal>
            <p className="bio-lead">我是 xmie（麦曾毅），一名 AI 影视创作者、AIGC 短片导演与影视后期制作者。</p>
            <p>立足视觉传达设计背景，我专注于影视视听语言与数字化创意表达，能够独立完成从创意构思、编剧和分镜设计，到剪辑、调色、混音与包装制作的完整影像流程。</p>
            <p>我持续探索 AI 视频生成与传统电影语言的结合，曾全流程主导《千纸鹤》等多部 AIGC 数字短片。比起单纯展示技术，我更关注画面如何服务故事、节奏与情感，让 AI 真正成为可控而有温度的视觉生产力。</p>
            <p>无论是追求质感与完成度的影视后期，还是探索新叙事边界的 AIGC 短片，我都希望用清晰的视觉逻辑，把一个想法发展成完整、可信的视听作品。</p>
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
