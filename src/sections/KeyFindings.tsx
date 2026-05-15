import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FINDINGS = [
  {
    num: '01',
    title: 'Models recognize plausible methods but fail at prediction.',
    explanation:
      'Models perform strongly on MCQ mechanistic reasoning — GPT-5.4 reaches 0.819 — but binary feasibility remains near chance across every model evaluated.',
  },
  {
    num: '02',
    title: 'Discoveries are predicted systematically too late.',
    explanation:
      'All evaluated models show positive signed error in date prediction. LLaMA 3.3 has the smallest median delay at +4.0 months, while GPT-4o has the largest at +26.0 months.',
  },
  {
    num: '03',
    title: 'Foresight is not explained by training exposure.',
    explanation:
      'Performance is largely insensitive to whether events occur before or after the model training cutoff, suggesting that memorization or direct exposure is not the primary explanation.',
  },
  {
    num: '04',
    title: 'Knowledge access helps, but does not solve foresight.',
    explanation:
      'Controlled web-search experiments show that pre-cutoff information improves performance, but a large foresight gap remains relative to full-information hindsight — especially for high-citation advances.',
  },
  {
    num: '05',
    title: 'Models are overconfident and biased.',
    explanation:
      'Models exhibit systematic overconfidence and strong yes/no response biases in feasibility prediction, making their uncertainty estimates unreliable under scientific uncertainty.',
  },
  {
    num: '06',
    title: 'Time Capsule extends CUSP into prospective forecasting.',
    explanation:
      'CUSP Time Capsule contains future-facing scientific and AI capability questions whose outcomes are not yet known, enabling prospective study of model predictions, calibration, and agreement.',
  },
]

export default function KeyFindings() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.finding-animate', {
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
      style={{ backgroundColor: '#1a1a1a', padding: '140px 0' }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 960 }}>
        <div className="mx-auto" style={{ maxWidth: 720 }}>
          <div
            className="finding-animate"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#7fa3b8',
              textAlign: 'center',
            }}
          >
            Findings
          </div>
          <h2
            className="finding-animate"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 32,
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
              color: '#f9f9f9',
              textAlign: 'center',
              marginTop: 8,
            }}
          >
            What we learned
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ marginTop: 56 }}>
          {FINDINGS.map((finding) => (
            <div
              key={finding.num}
              className="finding-animate"
              style={{
                backgroundColor: '#222222',
                borderRadius: 16,
                padding: 28,
                borderLeft: '3px solid #325c76',
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  color: '#7fa3b8',
                  display: 'block',
                  marginBottom: 10,
                }}
              >
                {finding.num}
              </span>
              <h3
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 19,
                  fontWeight: 500,
                  lineHeight: 1.3,
                  color: '#f9f9f9',
                }}
              >
                {finding.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 15,
                  fontWeight: 400,
                  lineHeight: 1.7,
                  letterSpacing: '-0.01em',
                  color: 'rgba(244,244,244,0.7)',
                  marginTop: 12,
                }}
              >
                {finding.explanation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
