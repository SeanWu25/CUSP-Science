import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Comparison() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.compare-animate', {
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
    <section ref={sectionRef} style={{ backgroundColor: '#f9f9f9', padding: '120px 0' }}>
      <div className="mx-auto px-6" style={{ maxWidth: 960 }}>
        <div className="mx-auto" style={{ maxWidth: 720 }}>
          <div
            className="compare-animate"
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
            Comparison
          </div>
          <h2
            className="compare-animate"
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
            How CUSP compares to existing benchmarks
          </h2>
          <p
            className="compare-animate"
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
            Existing benchmarks evaluate forecasting or scientific reasoning, but rarely both, and
            almost never with a strict knowledge cutoff. CUSP unifies these axes at scale.
          </p>
        </div>

        <figure
          className="compare-animate"
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 20,
            border: '1px solid rgba(0,0,0,0.07)',
            padding: '28px 24px 20px',
            boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(50,92,118,0.06)',
            marginTop: 48,
          }}
        >
          <img
            src="/images/cusp-comparison-table.png"
            alt="Comparison of CUSP to ten existing benchmarks across Scientific, Forecasting, Time, Cutoff, Multi-domain, Scale, and Key dimensions. CUSP is the only benchmark that satisfies all five capability axes."
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
            <span style={{ color: '#325c76', fontWeight: 600 }}>Table 1.</span> CUSP is the only
            benchmark that is simultaneously{' '}
            <strong style={{ color: '#1a1a1a', fontWeight: 600 }}>scientific</strong>,{' '}
            <strong style={{ color: '#1a1a1a', fontWeight: 600 }}>forecasting</strong>,{' '}
            <strong style={{ color: '#1a1a1a', fontWeight: 600 }}>temporally grounded</strong>,{' '}
            <strong style={{ color: '#1a1a1a', fontWeight: 600 }}>cutoff-conditioned</strong>, and{' '}
            <strong style={{ color: '#1a1a1a', fontWeight: 600 }}>multi-domain</strong> — at the
            scale of 4,760 milestones and 17K tasks.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
