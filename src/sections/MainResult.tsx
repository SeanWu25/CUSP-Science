import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PANELS = [
  {
    label: 'Recognition works',
    stat: 'MCQ above chance',
    detail:
      'Frontier models reliably pick the technical approach behind a discovery from expert-plausible alternatives.',
  },
  {
    label: 'Prediction fails',
    stat: 'Binary near 0.50',
    detail:
      'Across models, feasibility prediction sits at chance — knowing the method does not mean forecasting the outcome.',
  },
  {
    label: 'Timing is biased',
    stat: 'Systematically late',
    detail:
      'Every evaluated model predicts discoveries to occur later than they actually did, with positive signed error.',
  },
]

export default function MainResult() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.main-result-animate', {
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#f9f9f9', padding: '120px 0' }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 960 }}>
        <div className="mx-auto" style={{ maxWidth: 720 }}>
          <div
            className="main-result-animate"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#325c76',
              textAlign: 'center',
            }}
          >
            Main result
          </div>
          <h2
            className="main-result-animate"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 32,
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
              color: '#1a1a1a',
              textAlign: 'center',
              marginTop: 8,
            }}
          >
            Knowledge is not foresight
          </h2>
          <p
            className="main-result-animate"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.7,
              letterSpacing: '-0.01em',
              color: '#666666',
              textAlign: 'center',
              marginTop: 16,
            }}
          >
            Current frontier models can often identify plausible scientific approaches, but they do
            not reliably forecast scientific progress. They perform near chance on feasibility
            prediction, systematically misestimate discovery timing, and remain overconfident under
            temporal uncertainty. Even with additional pre-cutoff knowledge, models do not close the
            gap to full-information hindsight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ marginTop: 48 }}>
          {PANELS.map((p, i) => (
            <div
              key={i}
              className="main-result-animate"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 16,
                padding: 28,
                border: '1px solid rgba(0,0,0,0.07)',
                boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(50,92,118,0.06)',
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  color: '#325c76',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {p.label}
              </div>
              <div
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 24,
                  fontWeight: 600,
                  lineHeight: 1.2,
                  color: '#1a1a1a',
                  marginTop: 10,
                  letterSpacing: '-0.01em',
                }}
              >
                {p.stat}
              </div>
              <p
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 1.65,
                  color: '#666666',
                  marginTop: 12,
                  letterSpacing: '-0.01em',
                }}
              >
                {p.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
