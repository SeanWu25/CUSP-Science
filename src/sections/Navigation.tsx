import { useEffect, useRef, useState } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-[9999] flex items-center justify-between px-6 transition-all duration-300"
      style={{
        height: 48,
        backgroundColor: scrolled ? 'rgba(249,249,249,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.07)' : '1px solid transparent',
      }}
    >
      <img
        src="/images/cusp-logo.png"
        alt="CUSP"
        className="cursor-pointer"
        style={{ height: 28, width: 'auto', display: 'block' }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
      <div className="flex items-center gap-2">
        {[
          { label: 'Paper', id: 'hero' },
          { label: 'Code', id: 'footer' },
          { label: 'Dataset', id: 'benchmark' },
          { label: 'Leaderboard', id: 'results' },
        ].map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className="transition-all duration-250"
            style={{
              border: '1px solid #325c76',
              borderRadius: 100,
              padding: '4px 14px',
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 500,
              fontSize: 13,
              color: '#325c76',
              backgroundColor: 'transparent',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#325c76'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#325c76'
            }}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
