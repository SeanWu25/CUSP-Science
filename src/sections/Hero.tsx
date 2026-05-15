import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const INSTITUTION_LOGOS = [
  { name: 'University of Oxford', src: 'images/logo-oxford.png', height: 48 },
  { name: 'Stanford University', src: 'images/logo-stanford.png', height: 48 },
  { name: 'Allen Institute for AI', src: 'images/logo-ai2.png', height: 42 },
  { name: 'Sakana AI', src: 'images/logo-sakana.png', height: 34 },
]

const AUTHORS = [
  { name: 'Sean Wu', aff: '1' },
  { name: 'Pan Lu', aff: '2' },
  { name: 'Yupeng Chen', aff: '1' },
  { name: 'Jonathan Bragg', aff: '3' },
  { name: 'Yutaro Yamada', aff: '4' },
  { name: 'Peter Clark', aff: '3' },
  { name: 'David Clifton', aff: '1' },
  { name: 'Philip Torr', aff: '1' },
  { name: 'James Zou', aff: '2' },
  { name: 'Junchi Yu', aff: '1' },
]

const ABSTRACT = `Artificial intelligence is increasingly embedded in scientific discovery, but whether AI systems can anticipate scientific progress remains unclear. We introduce CUSP — Cutoff-conditioned Unseen Scientific Progress, a multi-disciplinary, event-level benchmark that evaluates scientific foresight across feasibility prediction, mechanistic reasoning, generative solution design, and temporal prediction. Across 4,760 scientific events and 17,429 forecasting tasks, current frontier models can often recognize plausible technical approaches, but fail to reliably predict whether scientific advances will be realized, when they will occur, or how they will be achieved. CUSP reveals a fundamental gap between knowledge access and scientific foresight.`

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-animate', {
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{ paddingTop: 180, paddingBottom: 100, backgroundColor: '#f9f9f9' }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 960 }}>
        <div className="mx-auto" style={{ maxWidth: 820 }}>
        {/* Title */}
        <h1
          className="hero-animate"
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 60,
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#1a1a1a',
            textAlign: 'center',
          }}
        >
          Forecasting Scientific Progress with Artificial Intelligence
        </h1>

        {/* Author Names */}
        <div
          className="hero-animate"
          style={{
            textAlign: 'center',
            marginTop: 28,
          }}
        >
          {AUTHORS.map((author, i) => (
            <span key={i}>
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 20,
                  fontWeight: 500,
                  color: '#3a3a3a',
                  letterSpacing: '-0.01em',
                }}
              >
                {author.name}
              </span>
              <sup
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#325c76',
                  marginLeft: 1,
                }}
              >
                {author.aff}
              </sup>
              {i < AUTHORS.length - 1 && (
                <span
                  style={{
                    margin: '0 7px',
                    color: '#c0c0c0',
                    fontSize: 12,
                    userSelect: 'none',
                  }}
                >
                  ·
                </span>
              )}
            </span>
          ))}
        </div>

        <p
          className="hero-animate"
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 12,
            fontWeight: 400,
            color: '#999',
            textAlign: 'center',
            marginTop: 6,
            letterSpacing: '-0.01em',
          }}
        >
          * Equal contribution
        </p>

        {/* Institution Logos Row */}
        <div
          className="hero-animate"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 44,
            marginTop: 32,
          }}
        >
          {INSTITUTION_LOGOS.map((inst, i) => (
            <img
              key={i}
              src={inst.src}
              alt={inst.name}
              style={{
                height: inst.height,
                objectFit: 'contain',
                opacity: 0.85,
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '1' }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.85' }}
            />
          ))}
        </div>

        {/* Abstract Card */}
        <div
          className="hero-animate"
          style={{
            backgroundColor: '#efebe4',
            borderRadius: 16,
            padding: 32,
            marginTop: 48,
          }}
        >
          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.7,
              letterSpacing: '-0.01em',
              color: '#1a1a1a',
            }}
          >
            <span
              style={{
                float: 'left',
                fontSize: 56,
                fontWeight: 700,
                lineHeight: 0.8,
                color: '#325c76',
                marginRight: 10,
                marginTop: 4,
              }}
            >
              {ABSTRACT.charAt(0)}
            </span>
            {ABSTRACT.slice(1)}
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3" style={{ marginTop: 32 }}>
            {[
              { label: 'Paper', primary: true, href: '#' },
              { label: 'Code', primary: false, href: '#' },
              { label: 'Dataset', primary: false, href: '#' },
              { label: 'Leaderboard', primary: false, href: '#' },
            ].map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                style={{
                  display: 'inline-block',
                  borderRadius: 100,
                  padding: '10px 24px',
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  backgroundColor: btn.primary ? '#1a1a1a' : 'transparent',
                  color: btn.primary ? '#f9f9f9' : '#1a1a1a',
                  border: btn.primary ? 'none' : '1px solid #1a1a1a',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (btn.primary) {
                    e.currentTarget.style.backgroundColor = '#222222'
                  } else {
                    e.currentTarget.style.backgroundColor = '#1a1a1a'
                    e.currentTarget.style.color = '#f9f9f9'
                  }
                }}
                onMouseLeave={(e) => {
                  if (btn.primary) {
                    e.currentTarget.style.backgroundColor = '#1a1a1a'
                  } else {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = '#1a1a1a'
                  }
                }}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
