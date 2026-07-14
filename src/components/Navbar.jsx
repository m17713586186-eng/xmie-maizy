import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  ['作品', '/projects'],
  ['关于', '/about'],
  ['联系', '/contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link to="/" className="brand" aria-label="麦曾毅个人作品集首页">
          <span className="brand-mark">麦</span>
          <span>麦曾毅 / AI 影视创作者</span>
        </Link>

        <nav className="desktop-nav" aria-label="主导航">
          {links.map(([label, href]) => (
            <NavLink key={href} to={href} className={({ isActive }) => (isActive ? 'active' : '')}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-status"><span /> AVAILABLE FOR SELECTED PROJECTS</div>

        <button
          type="button"
          className="menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? '关闭导航' : '打开导航'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <nav className={`mobile-nav ${open ? 'open' : ''}`} aria-label="移动端导航">
        {links.map(([label, href], index) => (
          <NavLink key={href} to={href}>
            <span>0{index + 1}</span>{label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
