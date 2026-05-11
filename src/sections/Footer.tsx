export default function Footer() {
  return (
    <footer id="footer" style={{ backgroundColor: '#1a1a1a', padding: '80px 0' }}>
      <div className="mx-auto px-6" style={{ maxWidth: 960 }}>
        {/* Top */}
        <div
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 24,
            fontWeight: 700,
            color: '#f9f9f9',
          }}
        >
          CUSP
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-8" style={{ marginTop: 32 }}>
          {[
            { label: 'Paper', href: '#' },
            { label: 'Code', href: '#' },
            { label: 'Dataset', href: '#' },
            { label: 'Leaderboard', href: '#' },
            { label: 'Contact', href: '#' },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 16,
                fontWeight: 400,
                lineHeight: 1.7,
                color: 'rgba(244,244,244,0.6)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#f9f9f9' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(244,244,244,0.6)' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div
          className="flex items-center justify-between"
          style={{ marginTop: 64, borderTop: '1px solid rgba(244,244,244,0.08)', paddingTop: 24 }}
        >
          <span
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 13,
              fontWeight: 400,
              lineHeight: 1.5,
              color: 'rgba(244,244,244,0.4)',
            }}
          >
            CUSP: Cutoff-conditioned Unseen Scientific Progress
          </span>
          <span
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 13,
              fontWeight: 400,
              lineHeight: 1.5,
              color: 'rgba(244,244,244,0.4)',
            }}
          >
            &copy; 2026
          </span>
        </div>
      </div>
    </footer>
  )
}
