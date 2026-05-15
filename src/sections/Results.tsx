import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const RESULTS = [
  { model: 'GPT-5.4', cutoff: 'Aug 2025', binary: '0.499', mcq: '0.819', date: '0.241', frq: '5.04', pass: '60.3', bestM: true, bestF: true },
  { model: 'Claude S4.5', cutoff: 'Jan 2025', binary: '0.513', mcq: '0.724', date: '0.239', frq: '3.99', pass: '14.0', bestB: true },
  { model: 'DeepSeek R1', cutoff: 'Jul 2024', binary: '0.481', mcq: '0.594', date: '0.288', frq: '4.18', pass: '20.0' },
  { model: 'GPT-4o', cutoff: 'Oct 2023', binary: '0.519', mcq: '0.530', date: '0.178', frq: '3.26', pass: '3.9' },
  { model: 'GPT-OSS 20B', cutoff: 'Jun 2024', binary: '0.518', mcq: '0.471', date: '0.300', frq: '3.86', pass: '11.9' },
  { model: 'LLaMA 3.3', cutoff: 'Dec 2023', binary: '0.453', mcq: '0.434', date: '0.500', frq: '3.49', pass: '2.5', bestD: true },
]

const HEADERS = ['Model', 'Cutoff', 'Binary', 'MCQ', 'Date Score', 'FRQ Score', 'FRQ Pass %']

export default function Results() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.results-animate', {
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

  const isBest = (row: typeof RESULTS[0], col: string) => {
    if (col === 'mcq' && row.bestM) return true
    if (col === 'binary' && row.bestB) return true
    if (col === 'date' && row.bestD) return true
    if (col === 'frq' && row.bestF) return true
    return false
  }

  return (
    <section id="results" ref={sectionRef} style={{ backgroundColor: '#f9f9f9', padding: '120px 0' }}>
      <div className="mx-auto px-6" style={{ maxWidth: 960 }}>
        <h2
          className="results-animate"
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 32,
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            color: '#1a1a1a',
            textAlign: 'center',
          }}
        >
          Overall model performance
        </h2>
        <p
          className="results-animate"
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.7,
            letterSpacing: '-0.01em',
            color: '#666666',
            textAlign: 'center',
            marginTop: 16,
            marginInline: 'auto',
            maxWidth: 720,
          }}
        >
          No model dominates across all task types. GPT-5.4 leads on mechanistic reasoning and
          free-response proposal quality, while LLaMA 3.3 achieves the strongest date score. Across
          models, binary feasibility remains near chance — recognizing plausible approaches is much
          easier than forecasting whether progress will actually occur.
        </p>

        <div className="results-animate" style={{ marginTop: 40, overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#222222' }}>
                {HEADERS.map((h, i) => (
                  <th
                    key={i}
                    style={{
                      padding: '12px 16px',
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: 14,
                      fontWeight: 500,
                      color: '#f9f9f9',
                      textAlign: 'left',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {RESULTS.map((row, i) => (
                <tr
                  key={i}
                  style={{
                    backgroundColor: i % 2 === 0 ? '#f9f9f9' : '#f4f4f4',
                    borderBottom: '1px solid rgba(0,0,0,0.07)',
                  }}
                >
                  <td
                    style={{
                      padding: '12px 16px',
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: 14,
                      fontWeight: 500,
                      color: '#1a1a1a',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {row.model}
                  </td>
                  <td
                    style={{
                      padding: '12px 16px',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 13,
                      color: '#666666',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {row.cutoff}
                  </td>
                  {[
                    { key: 'binary', val: row.binary },
                    { key: 'mcq', val: row.mcq },
                    { key: 'date', val: row.date },
                    { key: 'frq', val: row.frq },
                    { key: 'pass', val: row.pass },
                  ].map((col, ci) => (
                    <td
                      key={ci}
                      style={{
                        padding: '12px 16px',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 13,
                        color: isBest(row, col.key) ? '#325c76' : '#1a1a1a',
                        fontWeight: isBest(row, col.key) ? 700 : 400,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {col.val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p
          className="results-animate"
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 13,
            fontWeight: 400,
            lineHeight: 1.5,
            color: '#666666',
            marginTop: 16,
          }}
        >
          Binary: merged accuracy on original and negation-flipped variants (chance = 0.50). MCQ: 4-choice accuracy (chance = 0.25). Date: exponential-decay score e<sup>-0.1|&#916;t|</sup> (1.0 = exact month). FRQ score: LLM rubric score (0&ndash;10); FRQ pass %: fraction scoring &ge; 5. Bold: best per column.
        </p>
      </div>
    </section>
  )
}
