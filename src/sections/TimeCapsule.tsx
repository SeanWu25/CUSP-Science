import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CAPSULES = [
  {
    resolve: '2026 · 10',
    category: 'AI capability',
    question:
      'Will an open-weight model exceed 65% on Humanity’s Last Exam by October 2026?',
  },
  {
    resolve: '2027 · 04',
    category: 'Scientific milestone',
    question:
      'Will a frontier system reach human-expert accuracy on GPQA Diamond across all subdomains?',
  },
  {
    resolve: '2027 · 10',
    category: 'Global indicator',
    question:
      'Will annual global CO₂ emissions decline year-over-year for the first time since 2020?',
  },
]

export default function TimeCapsule() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.capsule-animate', {
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
            className="capsule-animate"
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
            CUSP Time Capsule
          </div>
          <h2
            className="capsule-animate"
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
            Forecasting the future before it happens
          </h2>
          <p
            className="capsule-animate"
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
            CUSP Time Capsule extends the benchmark from retrospective evaluation to prospective
            forecasting. Sealed questions cover scientific milestones, institutional recognitions,
            future technological events, AI capability benchmarks, and global indicators — and
            become verifiable through authoritative sources as their resolution dates pass.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ marginTop: 48 }}>
          {CAPSULES.map((c, i) => (
            <div
              key={i}
              className="capsule-animate"
              style={{
                backgroundColor: '#1a1a1a',
                color: '#f9f9f9',
                borderRadius: 16,
                padding: 28,
                border: '1px solid rgba(255,255,255,0.08)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: 'rgba(244,244,244,0.5)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Sealed
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  color: '#7fa3b8',
                  letterSpacing: '0.04em',
                }}
              >
                {c.resolve}
              </div>
              <div
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(244,244,244,0.55)',
                  marginTop: 10,
                }}
              >
                {c.category}
              </div>
              <p
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  lineHeight: 1.55,
                  letterSpacing: '-0.01em',
                  color: '#f9f9f9',
                  marginTop: 14,
                }}
              >
                {c.question}
              </p>
            </div>
          ))}
        </div>

        <p
          className="capsule-animate"
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 13,
            fontWeight: 400,
            lineHeight: 1.6,
            color: '#888888',
            textAlign: 'center',
            marginTop: 24,
            letterSpacing: '-0.01em',
          }}
        >
          Time Capsule predictions will be resolved in future CUSP updates as outcomes become
          verifiable. Examples shown are illustrative.
        </p>
      </div>
    </section>
  )
}
