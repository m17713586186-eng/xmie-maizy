import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top page-shell">
        <p className="kicker kicker--light">AI FILM / AIGC DIRECTION / POST-PRODUCTION</p>
        <Link to="/contact" className="footer-cta">
          把一个想法，<br />变成一部作品。<ArrowUpRight />
        </Link>
      </div>
      <div className="footer-bottom page-shell">
        <p>© {new Date().getFullYear()} 麦曾毅. ALL RIGHTS RESERVED.</p>
        <div><Link to="/projects">作品</Link><Link to="/about">关于</Link><a href="mailto:2283254441@qq.com">邮件</a></div>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  )
}
