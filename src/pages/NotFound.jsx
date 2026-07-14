import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="not-found page-shell" id="top">
      <p className="kicker">ERROR / 404</p>
      <h1>这一帧，<br />暂时不存在。</h1>
      <Link to="/"><ArrowLeft size={17} /> 回到首页</Link>
    </section>
  )
}
