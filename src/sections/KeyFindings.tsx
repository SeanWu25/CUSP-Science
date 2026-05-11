import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FINDINGS = [
  {
    num: '01',
    title: 'AI systematically predicts science too late.',
    explanation:
      'Models consistently predict discoveries to occur months to years later than they actually did, revealing a shared temporal bias. LLaMA 3.3 showed the smallest median delay (+4.0 months) while GPT-4o showed the largest (+26.0 months).',
  },
  {
    num: '02',
    title: 'AI is uniquely predictable in time.',
    explanation:
      'AI progress follows a more regular and forecastable trajectory than other scientific domains, driven by scaling laws and benchmark-driven evaluation. Date prediction accuracy for AI: 46.1% vs. 18–28% for other domains.',
  },
  {
    num: '03',
    title: 'Knowledge access is not the bottleneck.',
    explanation:
      'Models retain predictive ability beyond their training cutoff. Augmenting with pre-cutoff web search does not improve performance, suggesting limitations lie in how knowledge is translated into forecasts, not in knowledge access itself.',
  },
  {
    num: '04',
    title: 'Forecasting without awareness.',
    explanation:
      'Models are systematically overconfident, with confidence–accuracy gaps up to +0.6. They rely on biased response priors rather than calibrated uncertainty, becoming more confident when reasoning about unseen developments.',
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
