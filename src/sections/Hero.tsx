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
  { name: 'Sean Wu', aff: '1,*', url: 'https://seannwu.github.io/' },
  { name: 'Pan Lu', aff: '2,*', url: 'https://lupantech.github.io/' },
  { name: 'Yupeng Chen', aff: '1', url: 'https://www.linkedin.com/in/yupeng-chen-107b732b1/' },
  { name: 'Jonathan Bragg', aff: '3', url: 'https://www.jonathanbragg.com/' },
  { name: 'Yutaro Yamada', aff: '4', url: 'https://yutaroyamada.com/' },
  { name: 'Peter Clark', aff: '3', url: 'https://pclark425.github.io/' },
  { name: 'David Clifton', aff: '1', url: 'https://eng.ox.ac.uk/chi/team' },
  { name: 'Philip Torr', aff: '1,†', url: 'https://torrvision.com/index.html' },
  { name: 'James Zou', aff: '2,†', url: 'https://www.james-zou.com/' },
  { name: 'Junchi Yu', aff: '1,†', url: 'https://samyu0304.github.io/' },
]

const AFFILIATIONS = [
  { id: '1', name: 'University of Oxford' },
  { id: '2', name: 'Stanford University' },
  { id: '3', name: 'Allen Institute for AI' },
  { id: '4', name: 'Sakana AI' },
]


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
              <a
                href={author.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 20,
                  fontWeight: 500,
                  color: '#3a3a3a',
                  letterSpacing: '-0.01em',
                  textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#325c76' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#3a3a3a' }}
              >
                {author.name}
              </a>
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
            fontSize: 14,
            fontWeight: 400,
            color: '#666666',
            textAlign: 'center',
            marginTop: 14,
            letterSpacing: '-0.01em',
            lineHeight: 1.6,
          }}
        >
          {AFFILIATIONS.map((a, i) => (
            <span key={a.id}>
              <sup
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: '#325c76',
                  marginRight: 2,
                }}
              >
                {a.id}
              </sup>
              {a.name}
              {i < AFFILIATIONS.length - 1 && (
                <span
                  style={{
                    margin: '0 10px',
                    color: '#c0c0c0',
                  }}
                >
                  ·
                </span>
              )}
            </span>
          ))}
        </p>

        <p
          className="hero-animate"
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 12,
            fontWeight: 400,
            color: '#999',
            textAlign: 'center',
            marginTop: 10,
            letterSpacing: '-0.01em',
            lineHeight: 1.7,
          }}
        >
          <sup style={{ color: '#325c76', fontWeight: 600 }}>*</sup> Core contributors
          <span style={{ margin: '0 10px', color: '#c0c0c0' }}>·</span>
          <sup style={{ color: '#325c76', fontWeight: 600 }}>†</sup> Correspondence to{' '}
          <a
            href="mailto:junchi.yu@eng.ox.ac.uk"
            style={{ color: '#666', textDecoration: 'underline' }}
          >
            junchi.yu@eng.ox.ac.uk
          </a>
          ,{' '}
          <a
            href="mailto:philip.torr@eng.ox.ac.uk"
            style={{ color: '#666', textDecoration: 'underline' }}
          >
            philip.torr@eng.ox.ac.uk
          </a>
          ,{' '}
          <a
            href="mailto:jamesz@stanford.edu"
            style={{ color: '#666', textDecoration: 'underline' }}
          >
            jamesz@stanford.edu
          </a>
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
              A
            </span>
            rtificial intelligence (AI) is increasingly embedded in scientific discovery, yet
            whether it can anticipate scientific progress remains unclear. Here, we introduce
            scientific foresight as a measurable capability and present CUSP
            (<strong style={{ fontWeight: 700 }}>C</strong>utoff-conditioned{' '}
            <strong style={{ fontWeight: 700 }}>U</strong>nseen{' '}
            <strong style={{ fontWeight: 700 }}>S</strong>cientific{' '}
            <strong style={{ fontWeight: 700 }}>P</strong>rogress), a multi-disciplinary and
            event-level benchmark that evaluates whether AI systems can predict scientific progress
            by jointly assessing feasibility, mechanistic reasoning, generative solution design, and
            temporal prediction. Across 4,760 scientific events, we find that current frontier
            models exhibit systematic and domain-dependent limitations. While models can identify
            plausible research directions from competing candidates, they fail to reliably predict
            whether scientific advances will be realized and systematically misestimate when they
            will occur. Model performance is highly heterogeneous across domains, with stronger
            results in artificial intelligence than in biology, chemistry, and physics. Performance
            is largely insensitive to whether events occur before or after the training cutoff,
            suggesting that these limitations cannot be explained solely by knowledge exposure in
            training data. Under controlled information access, providing additional pre-cutoff
            knowledge improves performance but does not close the gap to full-information settings,
            which becomes more pronounced for high-citation scientific advances. Moreover, models
            exhibit systematic overconfidence and strong response biases, indicating that their
            uncertainty estimation is unreliable in scientific foresight. Taken together, these
            findings reveal that current AI systems fall short as predictive tools for scientific
            progress, as access to prior knowledge does not translate into scientific foresight.
            Instead, they highly rely on hindsight analysis once outcomes are known.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3" style={{ marginTop: 32 }}>
            {[
              { label: 'Paper', primary: true, href: '#' },
              { label: 'Code', primary: false, href: 'https://github.com/SeanWu25/cusp-scientific-foresight' },
              { label: 'Dataset', primary: false, href: 'https://huggingface.co/datasets/SeanWu25/CUSP' },
              { label: 'Leaderboard', primary: false, href: '#' },
            ].map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                target={btn.href === '#' ? undefined : '_blank'}
                rel={btn.href === '#' ? undefined : 'noopener noreferrer'}
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
