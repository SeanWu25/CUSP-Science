import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HEADLINE_STATS = [
  { value: '4,760', label: 'Scientific milestones' },
  { value: '17,429', label: 'Forecasting tasks' },
  { value: '9', label: 'Scientific domains' },
  { value: '27', label: 'Months of progress' },
]

export default function Benchmark() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.benchmark-animate', {
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

      const statEls = document.querySelectorAll('.stat-number')
      statEls.forEach((el) => {
        const target = el.getAttribute('data-value') || '0'
        const numericTarget = parseInt(target.replace(/,/g, ''))
        const obj = { val: 0 }
        gsap.to(obj, {
          val: numericTarget,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toLocaleString()
          },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="benchmark"
      ref={sectionRef}
      style={{ backgroundColor: '#f4f4f4', padding: '120px 0' }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 960 }}>
        <div className="mx-auto" style={{ maxWidth: 720 }}>
          <div
            className="benchmark-animate"
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
            The Benchmark
          </div>
          <h2
            className="benchmark-animate"
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
            A living dataset of scientific progress
          </h2>
          <p
            className="benchmark-animate"
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
            CUSP draws on 4,760 milestones from top-tier journals and curated AI sources, spanning
            nine scientific domains and continuously updated as new discoveries appear.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3" style={{ marginTop: 40 }}>
          {HEADLINE_STATS.map((stat, i) => (
            <div
              key={i}
              className="benchmark-animate"
              style={{
                backgroundColor: '#f9f9f9',
                borderRadius: 12,
                padding: '18px 16px',
                border: '1px solid rgba(0,0,0,0.07)',
                textAlign: 'center',
              }}
            >
              <div
                className="stat-number"
                data-value={stat.value}
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 28,
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  color: '#325c76',
                }}
              >
                0
              </div>
              <div
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 12,
                  fontWeight: 400,
                  lineHeight: 1.4,
                  color: '#666666',
                  marginTop: 6,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <figure
          className="benchmark-animate"
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
            src="/images/cusp-benchmark-stats.png"
            alt="CUSP benchmark composition: paper sources, question types per domain, dataset growth over time, and topic coverage."
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
            <span style={{ color: '#325c76', fontWeight: 600 }}>Figure 1.</span>{' '}
            <strong style={{ color: '#1a1a1a', fontWeight: 600 }}>(A)</strong> Paper sources across
            top-tier journals and curated AI lists.{' '}
            <strong style={{ color: '#1a1a1a', fontWeight: 600 }}>(B)</strong> Distribution of the
            five question formats across nine scientific domains.{' '}
            <strong style={{ color: '#1a1a1a', fontWeight: 600 }}>(C)</strong> Continuous coverage
            from January 2024 through 2026.{' '}
            <strong style={{ color: '#1a1a1a', fontWeight: 600 }}>(D)</strong> Hierarchical topic
            coverage, from broad domains down to fine-grained subfields.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
