import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'

const contactMethods = [
  { label: 'WECHAT', title: '微信', value: 'm2283254441' },
  { label: 'XIAOHONGSHU', title: '小红书', value: '@m228325444' },
  { label: 'QQ', title: 'QQ', value: '2283254441' },
  { label: 'PHONE', title: '电话', value: '177 1358 6186', href: 'tel:+8617713586186' },
]

export default function Contact() {
  return (
    <div className="contact-page" id="top">
      <section className="contact-hero page-shell">
        <p className="kicker kicker--light">03 / START A CONVERSATION</p>
        <Reveal><h1>有一个值得<br />发生的想法？</h1></Reveal>
        <div className="contact-intro"><ArrowDownRight /><p>无论是影像后期、AIGC 视觉实验，还是一支完整的品牌影片，都欢迎通过邮件或微信联系我。</p></div>
      </section>

      <section className="contact-links page-shell">
        <a href="mailto:2283254441@qq.com" className="email-link">
          <span>EMAIL / 邮箱</span>
          <strong>2283254441@qq.com</strong>
          <ArrowUpRight />
        </a>

        <div className="contact-directory">
          <div className="contact-methods">
            <div className="contact-section-label">
              <p className="kicker kicker--light">DIRECT CONTACT</p>
              <span>直接联系</span>
            </div>
            <div className="contact-method-list">
              {contactMethods.map((method, index) => {
                const content = (
                  <>
                    <span className="contact-method-index">0{index + 1}</span>
                    <span className="contact-method-label">{method.label}<small>{method.title}</small></span>
                    <strong>{method.value}</strong>
                    {method.href && <ArrowUpRight />}
                  </>
                )

                return method.href ? (
                  <a className="contact-method" href={method.href} key={method.label}>{content}</a>
                ) : (
                  <div className="contact-method" key={method.label}>{content}</div>
                )
              })}
            </div>
          </div>

          <Reveal className="wechat-card">
            <div className="wechat-card-head">
              <div><span>WECHAT</span><strong>扫码添加微信</strong></div>
              <span className="wechat-live"><i /> ONLINE</span>
            </div>
            <div className="wechat-qr-frame">
              <img src="/images/wechat-qr.jpg" alt="XMIE 的微信二维码，微信号 m2283254441" />
            </div>
            <div className="wechat-card-foot">
              <span>微信号</span><strong>m2283254441</strong>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
