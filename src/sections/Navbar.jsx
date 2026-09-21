import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Tech Stack', href: '#tech' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        const navHeight = document.getElementById('navbar')?.offsetHeight || 64
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 20
        window.scrollTo({ top, behavior: 'smooth' })
      }
      setMobileOpen(false)
    }
  }

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-[10px] bg-canvas-secondary/85 backdrop-blur-[20px] border-b border-border'
          : 'py-4 backdrop-blur-0'
      }`}
    >
      <div className="w-[94%] max-w-[1800px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-[10px] font-bold text-[1.25rem] tracking-[-0.02em]"
        >
          <img src={logo} alt="SyncWave Logo" className="w-8 h-8 rounded-lg" />
          <span>SyncWave</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative text-[0.9rem] font-medium text-text-secondary hover:text-text-primary transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={(e) => handleNavClick(e, '#download')}
            className="bg-primary text-primary-text px-5 py-2 rounded-xs text-[0.9rem] font-semibold transition-all duration-300 hover:bg-primary-hover active:opacity-75"
          >
            Download
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-btn"
        >
          <span className={`w-6 h-[2px] bg-text-primary rounded-sm transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`w-6 h-[2px] bg-text-primary rounded-sm transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-[2px] bg-text-primary rounded-sm transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`flex-col gap-4 px-6 py-5 w-[94%] max-w-[1800px] mx-auto md:hidden ${
          mobileOpen ? 'flex' : 'hidden'
        }`}
        id="mobile-nav"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="text-base font-medium text-text-secondary hover:text-text-primary py-2 transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#download"
          onClick={(e) => handleNavClick(e, '#download')}
          className="bg-primary text-primary-text px-5 py-2 rounded-xs text-base font-semibold text-center transition-all duration-300 hover:bg-primary-hover active:opacity-75"
        >
          Download
        </a>
      </div>
    </nav>
  )
}
