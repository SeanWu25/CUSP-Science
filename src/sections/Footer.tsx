const BIBTEX = `@article{wu2026forecasting,
  title={Forecasting Scientific Progress with Artificial Intelligence},
  author={Wu, Sean and Lu, Pan and Chen, Yupeng and Bragg, Jonathan and
          Yamada, Yutaro and Clark, Peter and Clifton, David and
          Torr, Philip and Zou, James and Yu, Junchi},
  year={2026}
}`

export default function Footer() {
  const copyBibtex = () => {
    navigator.clipboard?.writeText(BIBTEX).catch(() => {})
  }

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
            { label: 'arXiv', href: '#' },
            { label: 'Code', href: 'https://github.com/SeanWu25/cusp-scientific-foresight' },
            { label: 'Hugging Face', href: 'https://huggingface.co/datasets/SeanWu25/CUSP' },
            { label: 'Leaderboard', href: '#' },
            { label: 'Contact', href: '#' },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href === '#' ? undefined : '_blank'}
              rel={link.href === '#' ? undefined : 'noopener noreferrer'}
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

        {/* Citation */}
        <div style={{ marginTop: 48 }}>
          <div
            className="flex items-center justify-between"
            style={{ marginBottom: 12 }}
          >
            <span
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#7fa3b8',
              }}
            >
              Cite
            </span>
            <button
              onClick={copyBibtex}
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 12,
                fontWeight: 500,
                color: 'rgba(244,244,244,0.7)',
                background: 'transparent',
                border: '1px solid rgba(244,244,244,0.2)',
                borderRadius: 100,
                padding: '4px 12px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#f9f9f9'
                e.currentTarget.style.borderColor = 'rgba(244,244,244,0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(244,244,244,0.7)'
                e.currentTarget.style.borderColor = 'rgba(244,244,244,0.2)'
              }}
            >
              Copy BibTeX
            </button>
          </div>
          <pre
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              lineHeight: 1.6,
              color: 'rgba(244,244,244,0.75)',
              backgroundColor: '#0f0f0f',
              border: '1px solid rgba(244,244,244,0.08)',
              borderRadius: 12,
              padding: 20,
              overflowX: 'auto',
              margin: 0,
              whiteSpace: 'pre',
            }}
          >
            {BIBTEX}
          </pre>
        </div>

        {/* Bottom */}
        <div
          className="flex items-center justify-between"
          style={{ marginTop: 48, borderTop: '1px solid rgba(244,244,244,0.08)', paddingTop: 24 }}
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
