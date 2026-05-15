import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    label: 'Base model',
    detail: 'No retrieval. Model relies on parametric knowledge only.',
    fill: 0.18,
  },
  {
    label: '+ Pre-cutoff search',
    detail: 'Web search restricted to information available before the event. Closes the knowledge gap.',
    fill: 0.42,
  },
  {
    label: '+ Full-information search',
    detail: 'Unrestricted retrieval including post-event evidence. Reveals the hindsight ceiling.',
    fill: 0.78,
  },
]

export default function KnowledgeVsForesight() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.foresight-animate', {
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

      const bars = sectionRef.current?.querySelectorAll('.foresight-bar-fill') || []
      bars.forEach((el) => {
        const target = parseFloat(el.getAttribute('data-fill') || '0')
        gsap.fromTo(
          el,
          { width: '0%' },
          {
            width: `${target * 100}%`,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
            },
          },
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#f4f4f4', padding: '120px 0' }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 960 }}>
        <div className="mx-auto" style={{ maxWidth: 720 }}>
          <div
            className="foresight-animate"
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
            Disentangling knowledge from foresight
          </div>
          <h2
            className="foresight-animate"
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
            The foresight gap
          </h2>
          <p
            className="foresight-animate"
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
            We compare three information settings: base model predictions, web search restricted to
            pre-cutoff information, and unrestricted full-information search. Pre-cutoff search
            measures whether models lacked access to relevant historical knowledge. Full-information
            search measures hindsight performance. The remaining difference reveals a foresight gap:
            models benefit from information, but still struggle to use prior knowledge to predict
            future discoveries.
          </p>
        </div>

        <div
          className="foresight-animate"
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 20,
            border: '1px solid rgba(0,0,0,0.07)',
            padding: '32px 28px',
            boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(50,92,118,0.06)',
            marginTop: 48,
          }}
        >
          {STEPS.map((step, i) => (
            <div key={i} style={{ marginTop: i === 0 ? 0 : 24 }}>
              <div
                className="flex items-baseline justify-between"
                style={{ marginBottom: 8 }}
              >
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: 15,
                    fontWeight: 500,
                    color: '#1a1a1a',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {step.label}
                </span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 12,
                    color: '#666666',
                  }}
                >
                  {Math.round(step.fill * 100)}%
                </span>
              </div>
              <div
                style={{
                  height: 10,
                  borderRadius: 6,
                  backgroundColor: '#eeeeee',
                  overflow: 'hidden',
                }}
              >
                <div
                  className="foresight-bar-fill"
                  data-fill={step.fill}
                  style={{
                    width: '0%',
                    height: '100%',
                    backgroundColor: '#325c76',
                    borderRadius: 6,
                  }}
                />
              </div>
              <p
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 13,
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: '#666666',
                  marginTop: 8,
                  letterSpacing: '-0.01em',
                }}
              >
                {step.detail}
              </p>
            </div>
          ))}
        </div>

        <div
          className="foresight-animate"
          style={{
            backgroundColor: '#efebe4',
            borderRadius: 16,
            padding: '20px 24px',
            marginTop: 32,
            borderLeft: '4px solid #325c76',
          }}
        >
          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 15,
              fontWeight: 500,
              lineHeight: 1.65,
              color: '#1a1a1a',
              letterSpacing: '-0.01em',
            }}
          >
            The foresight gap grows for high-citation discoveries — suggesting the most impactful
            advances are also the hardest for models to anticipate.
          </p>
        </div>
      </div>
    </section>
  )
}
