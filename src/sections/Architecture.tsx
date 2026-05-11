import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Architecture() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.arch-animate', {
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
    <section ref={sectionRef} style={{ backgroundColor: '#f4f4f4', padding: '120px 0' }}>
      <div className="mx-auto px-6" style={{ maxWidth: 960 }}>
        <div className="mx-auto" style={{ maxWidth: 720 }}>
          <div
            className="arch-animate"
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
            Pipeline
          </div>
          <h2
            className="arch-animate"
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
            From breakthroughs to forecasting tasks
          </h2>
          <p
            className="arch-animate"
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
            A multi-agent pipeline filters scientific findings, extracts the underlying core
            concepts, and generates four task formats — Binary, MCQ, Open-Ended, and Date Prediction
            — that probe distinct aspects of scientific foresight.
          </p>
        </div>

        <figure
          className="arch-animate"
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 20,
            border: '1px solid rgba(0,0,0,0.07)',
            padding: '28px 24px 20px',
            boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(50,92,118,0.06)',
            marginTop: 56,
          }}
        >
          <img
            src="images/cusp-architecture.jpg"
            alt="CUSP architecture: top-tier journals and community input feed a Filtering Agent, then a Concept Extractor, then a Generation Agent that produces four CUSP question formats."
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              borderRadius: 8,
            }}
          />
          <figcaption
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 13,
              fontWeight: 400,
              lineHeight: 1.6,
              color: '#666666',
              textAlign: 'center',
              marginTop: 18,
              paddingInline: 12,
            }}
          >
            <span style={{ color: '#325c76', fontWeight: 600 }}>Figure 2.</span> The CUSP pipeline.
            A <strong style={{ color: '#1a1a1a', fontWeight: 600 }}>Filtering Agent</strong>{' '}
            verifies findings from top-tier journals; a{' '}
            <strong style={{ color: '#1a1a1a', fontWeight: 600 }}>Concept Extractor</strong>{' '}
            distills the key finding, technical approach, problem statement, and date; a{' '}
            <strong style={{ color: '#1a1a1a', fontWeight: 600 }}>Generation Agent</strong>{' '}
            converts each into Binary, MCQ, Open-Ended, and Date Prediction tasks. The dataset
            updates automatically as new discoveries are published.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
