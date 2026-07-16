import { Clapperboard, House, Mail, UserRound } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  ['作品', '/projects'],
  ['关于', '/about'],
  ['联系', '/contact'],
]

const mobileLinks = [
  ['首页', '/', House],
  ['作品', '/projects', Clapperboard],
  ['关于', '/about', UserRound],
  ['联系', '/contact', Mail],
]

export default function Navbar() {
  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <Link to="/" className="brand" aria-label="xmie 麦曾毅个人作品集首页">
            <span className="brand-mark">xm</span>
            <span>xmie / 麦曾毅</span>
          </Link>

          <nav className="desktop-nav" aria-label="主导航">
            {links.map(([label, href]) => (
              <NavLink key={href} to={href} className={({ isActive }) => (isActive ? 'active' : '')}>
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-status"><span /> AVAILABLE FOR SELECTED PROJECTS</div>
        </div>
      </header>

      <nav className="mobile-bottom-nav" aria-label="移动端主导航">
        {mobileLinks.map(([label, href, Icon]) => (
          <NavLink
            key={href}
            to={href}
            end={href === '/'}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <Icon className="mobile-bottom-nav-icon" aria-hidden="true" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  )
}
