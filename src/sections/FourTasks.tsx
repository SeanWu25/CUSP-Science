import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TASKS = [
  {
    num: '01',
    title: 'Binary Feasibility Prediction',
    description:
      'Tests whether a model can predict if a concrete scientific claim will be achieved by a target date, distinguishing realized advances from plausible alternatives.',
  },
  {
    num: '02',
    title: 'Perturbed Binary Prediction',
    description:
      'Probes calibration and progress bias using plausible but unsupported variants of real scientific claims to expose response-side shortcuts.',
  },
  {
    num: '03',
    title: 'Mechanistic Reasoning',
    description:
      'Uses multiple-choice questions to test whether models can identify the technical approach that enabled a discovery from expert-plausible distractors.',
  },
  {
    num: '04',
    title: 'Generative Solution Design',
    description:
      'Free-response prompts test whether models can propose concrete solution strategies from pre-cutoff context, scored on alignment, specificity, novelty, and feasibility.',
  },
  {
    num: '05',
    title: 'Temporal Prediction',
    description:
      'Asks the model to forecast the month and year a scientific milestone will be realized, with exponential-decay scoring that rewards temporally proximate forecasts.',
  },
]

export default function FourTasks() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.task-animate', {
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
            className="task-animate"
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
            Tasks
          </div>
          <h2
            className="task-animate"
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
            Five task formats, four dimensions of foresight
          </h2>
          <p
            className="task-animate"
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
            CUSP operationalizes anticipation as a measurable capability across complementary
            evaluation formats.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          style={{ marginTop: 48 }}
        >
          {TASKS.map((task) => (
            <div
              key={task.num}
              className="task-animate"
              style={{
                backgroundColor: '#f9f9f9',
                borderRadius: 16,
                padding: 28,
                borderTop: '1px solid rgba(0,0,0,0.06)',
                borderRight: '1px solid rgba(0,0,0,0.06)',
                borderBottom: '1px solid rgba(0,0,0,0.06)',
                borderLeft: '4px solid #325c76',
                transition: 'transform 0.3s, border-left-width 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(4px)'
                e.currentTarget.style.borderLeftWidth = '6px'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)'
                e.currentTarget.style.borderLeftWidth = '4px'
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  color: '#325c76',
                  display: 'block',
                  marginBottom: 10,
                }}
              >
                {task.num}
              </span>
              <h3
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 19,
                  fontWeight: 500,
                  lineHeight: 1.3,
                  color: '#1a1a1a',
                }}
              >
                {task.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 15,
                  fontWeight: 400,
                  lineHeight: 1.65,
                  letterSpacing: '-0.01em',
                  color: '#666666',
                  marginTop: 10,
                }}
              >
                {task.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
