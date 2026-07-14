import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'

export default function Contact() {
  return (
    <div className="contact-page" id="top">
      <section className="contact-hero page-shell">
        <p className="kicker kicker--light">03 / START A CONVERSATION</p>
        <Reveal><h1>有一个值得<br />发生的想法？</h1></Reveal>
        <div className="contact-intro"><ArrowDownRight /><p>无论是影像后期、AIGC 视觉实验，还是一支完整的品牌影片，都欢迎来信描述你的想法、时间与合作方式。</p></div>
      </section>

      <section className="contact-links page-shell">
        <a href="mailto:hello@xmieworks.studio" className="email-link">
          <span>EMAIL</span>
          <strong>hello@xmieworks.studio</strong>
          <ArrowUpRight />
        </a>
        <div className="contact-grid">
          <div><span>LOCATION</span><p>成都 · 中国<br />Available worldwide</p></div>
          <div><span>SOCIAL</span><p>小红书 / Bilibili / 微信<br /><small>请替换为你的社交账号</small></p></div>
          <div><span>RESPONSE</span><p>通常在 1—2 个工作日内回复</p></div>
        </div>
      </section>
    </div>
  )
}
