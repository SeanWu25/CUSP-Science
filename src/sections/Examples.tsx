import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Tab = 'binary' | 'mcq' | 'frq' | 'date'

const TABS: { id: Tab; label: string }[] = [
  { id: 'binary', label: 'Binary + Perturbation' },
  { id: 'mcq', label: 'Technical MCQ' },
  { id: 'frq', label: 'Free Response' },
  { id: 'date', label: 'Date Prediction' },
]

export default function Examples() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<Tab>('binary')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.examples-animate', {
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
      style={{ backgroundColor: '#f4f4f4', padding: '120px 0' }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 960 }}>
        <div className="mx-auto" style={{ maxWidth: 720 }}>
          <div
            className="examples-animate"
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
            Examples
          </div>
          <h2
            className="examples-animate"
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
            What a CUSP task looks like
          </h2>
          <p
            className="examples-animate"
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
            Four representative items, one per task format. Each is grounded in a peer-reviewed
            scientific event and validated for faithfulness, verifiability, and leakage control.
          </p>
        </div>

        <div
          className="examples-animate flex flex-wrap justify-center gap-2"
          style={{ marginTop: 40 }}
        >
          {TABS.map((tab) => {
            const isActive = tab.id === active
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                  padding: '8px 16px',
                  borderRadius: 100,
                  border: '1px solid #325c76',
                  backgroundColor: isActive ? '#325c76' : 'transparent',
                  color: isActive ? '#ffffff' : '#325c76',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  letterSpacing: '-0.01em',
                }}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        <div
          className="examples-animate"
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 20,
            border: '1px solid rgba(0,0,0,0.07)',
            padding: '32px 32px',
            boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(50,92,118,0.06)',
            marginTop: 24,
          }}
        >
          {active === 'binary' && <BinaryExample />}
          {active === 'mcq' && <McqExample />}
          {active === 'frq' && <FrqExample />}
          {active === 'date' && <DateExample />}
        </div>
      </div>
    </section>
  )
}

/* ---------- Shared atoms ---------- */

const labelStyle: React.CSSProperties = {
  fontFamily: "'Manrope', sans-serif",
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#325c76',
}

const titleStyle: React.CSSProperties = {
  fontFamily: "'Manrope', sans-serif",
  fontSize: 19,
  fontWeight: 600,
  lineHeight: 1.35,
  letterSpacing: '-0.01em',
  color: '#1a1a1a',
  marginTop: 6,
}

const metaStyle: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 12,
  color: '#666666',
  marginTop: 10,
  lineHeight: 1.6,
}

const bodyStyle: React.CSSProperties = {
  fontFamily: "'Manrope', sans-serif",
  fontSize: 15,
  fontWeight: 400,
  lineHeight: 1.7,
  letterSpacing: '-0.01em',
  color: '#1a1a1a',
}

const dividerStyle: React.CSSProperties = {
  borderTop: '1px dashed rgba(0,0,0,0.12)',
  marginTop: 20,
  paddingTop: 20,
}

const fieldLabel: React.CSSProperties = {
  fontFamily: "'Manrope', sans-serif",
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#666666',
  marginBottom: 6,
}

function Pill({ kind, children }: { kind: 'yes' | 'no'; children: React.ReactNode }) {
  const colors =
    kind === 'yes'
      ? { bg: '#e3efe6', fg: '#1f6b3a', border: '#a8d3b6' }
      : { bg: '#fbe6e3', fg: '#9b2c20', border: '#e8b3ac' }
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '3px 12px',
        borderRadius: 100,
        backgroundColor: colors.bg,
        color: colors.fg,
        border: `1px solid ${colors.border}`,
        fontFamily: "'Manrope', sans-serif",
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: '-0.01em',
      }}
    >
      {children}
    </span>
  )
}

/* ---------- Binary example ---------- */

function BinaryExample() {
  return (
    <div>
      <div style={labelStyle}>Binary Forecasting + Perturbation</div>
      <div style={titleStyle}>
        Electromagnetic interference shielding using metal and MXene thin films
      </div>
      <div style={metaStyle}>
        Nature · Oct 2025 · Materials Science ·{' '}
        <a
          href="https://doi.org/10.1038/s41586-025-09699-0"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#325c76', textDecoration: 'underline' }}
        >
          doi:10.1038/s41586-025-09699-0
        </a>
      </div>

      <div style={dividerStyle}>
        <div style={fieldLabel}>Binary question (valid)</div>
        <p style={bodyStyle}>
          By October 2025, will a method achieve electromagnetic interference shielding of about 70
          decibels at a thickness of 1 μm and about 80 decibels at a thickness of 1.9 μm,
          demonstrating compatibility with portable USB 3.0 flash drives and flexible Schottky
          diodes?
        </p>
        <div style={{ marginTop: 10 }}>
          <span style={{ ...fieldLabel, display: 'inline-block', marginRight: 8 }}>Answer:</span>
          <Pill kind="yes">Yes</Pill>
        </div>
      </div>

      <div style={dividerStyle}>
        <div style={fieldLabel}>Binary question (perturbed)</div>
        <p style={bodyStyle}>
          By October 2025, will a method achieve electromagnetic interference shielding of 75 dB at
          1 μm and 85 dB at 1.9 μm?
        </p>
        <div style={{ marginTop: 10 }}>
          <span style={{ ...fieldLabel, display: 'inline-block', marginRight: 8 }}>Answer:</span>
          <Pill kind="no">No</Pill>
        </div>
      </div>

      <div
        style={{
          backgroundColor: '#efebe4',
          borderRadius: 12,
          padding: '14px 18px',
          marginTop: 24,
          borderLeft: '3px solid #325c76',
        }}
      >
        <div style={{ ...fieldLabel, marginBottom: 6 }}>Perturbation rationale</div>
        <p
          style={{
            ...bodyStyle,
            fontSize: 14,
            color: '#3a3a3a',
            lineHeight: 1.65,
          }}
        >
          Added a definitive unmet constraint requiring 75 dB at 1 μm and 85 dB at 1.9 μm,
          rendering the claim invalid under CUSP verification.
        </p>
      </div>
    </div>
  )
}

/* ---------- MCQ example ---------- */

function McqExample() {
  const options = [
    {
      letter: 'A',
      text: 'Diffusion-based architecture modeling joint structures with iterative refinement and probabilistic sampling across biomolecular complexes.',
      correct: true,
    },
    {
      letter: 'B',
      text: 'Graph neural networks integrating spatial and chemical features with hierarchical attention for interaction prediction.',
    },
    {
      letter: 'C',
      text: 'Energy-based models optimizing binding affinity using simulated annealing across diverse biomolecular interaction types.',
    },
    {
      letter: 'D',
      text: 'Transformer-based architecture leveraging sequence and structural embeddings for unified biomolecular interaction predictions.',
    },
  ]

  return (
    <div>
      <div style={labelStyle}>Technical MCQ · Unified biomolecular modeling</div>
      <div style={titleStyle}>Ground truth discovery: AlphaFold 3</div>
      <div style={metaStyle}>
        Target date: May 2024 ·{' '}
        <a
          href="https://doi.org/10.1038/s41586-024-07487-w"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#325c76', textDecoration: 'underline' }}
        >
          doi:10.1038/s41586-024-07487-w
        </a>
      </div>

      <div style={dividerStyle}>
        <div style={fieldLabel}>Question</div>
        <p style={bodyStyle}>
          Given the challenge of fragmented biomolecular interaction modeling across diverse
          complexes, which approach is most likely to achieve far greater accuracy for
          protein-ligand, protein-nucleic acid, and antibody-antigen predictions by May 2024?
        </p>
      </div>

      <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {options.map((opt) => (
          <div
            key={opt.letter}
            style={{
              display: 'flex',
              gap: 14,
              padding: '14px 16px',
              borderRadius: 12,
              border: opt.correct ? '1px solid #a8d3b6' : '1px solid rgba(0,0,0,0.08)',
              backgroundColor: opt.correct ? '#e3efe6' : '#f9f9f9',
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                fontWeight: 700,
                color: opt.correct ? '#1f6b3a' : '#325c76',
                minWidth: 18,
              }}
            >
              {opt.letter}
            </div>
            <div
              style={{
                ...bodyStyle,
                fontSize: 14,
                fontWeight: opt.correct ? 600 : 400,
                color: opt.correct ? '#1a3d24' : '#3a3a3a',
              }}
            >
              {opt.text}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          backgroundColor: '#efebe4',
          borderRadius: 12,
          padding: '14px 18px',
          marginTop: 24,
          borderLeft: '3px solid #325c76',
        }}
      >
        <div style={{ ...fieldLabel, marginBottom: 6 }}>Correct answer · A</div>
        <p
          style={{
            ...bodyStyle,
            fontSize: 14,
            color: '#3a3a3a',
            lineHeight: 1.65,
          }}
        >
          Diffusion-based joint structure modeling — as realised in AlphaFold 3 — is the only
          approach that directly addresses unified biomolecular complex prediction at the scale and
          accuracy described.
        </p>
      </div>
    </div>
  )
}

/* ---------- FRQ example ---------- */

function FrqExample() {
  return (
    <div>
      <div style={labelStyle}>Free Response · Virtual Lab</div>
      <div style={titleStyle}>Nanobody design for SARS-CoV-2 variants</div>
      <div style={metaStyle}>
        Nature · Jul 2025 · Biology ·{' '}
        <a
          href="https://doi.org/10.1038/s41586-025-09442-9"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#325c76', textDecoration: 'underline' }}
        >
          doi:10.1038/s41586-025-09442-9
        </a>
      </div>

      <div style={dividerStyle}>
        <div style={fieldLabel}>Problem context</div>
        <p style={bodyStyle}>
          Designing nanobody binders for emerging SARS-CoV-2 variants is challenging due to rapid
          viral evolution and the need to maintain binding across diverse spike protein structures.
        </p>
      </div>

      <div style={dividerStyle}>
        <div style={fieldLabel}>Free-response prompt</div>
        <p style={bodyStyle}>
          Given the challenge of designing nanobody binders for emerging SARS-CoV-2 variants due to
          rapid virus evolution and limitations in existing methods, propose a concrete method that
          could solve this problem by July 2025. Provide:
        </p>
        <ol
          style={{
            ...bodyStyle,
            paddingLeft: 22,
            marginTop: 8,
            lineHeight: 1.85,
          }}
        >
          <li>a high-level method description,</li>
          <li>a technical implementation plan.</li>
        </ol>
      </div>

      <div
        style={{
          backgroundColor: '#efebe4',
          borderRadius: 12,
          padding: '14px 18px',
          marginTop: 24,
          borderLeft: '3px solid #325c76',
        }}
      >
        <div style={{ ...fieldLabel, marginBottom: 6 }}>Rubric</div>
        <p
          style={{
            ...bodyStyle,
            fontSize: 14,
            color: '#3a3a3a',
            lineHeight: 1.65,
          }}
        >
          Free-response answers are judged on four axes — alignment, specificity, novelty, and
          feasibility — with explicit leakage detection for post-cutoff entity mentions.
        </p>
      </div>
    </div>
  )
}

/* ---------- Date example ---------- */

function DateExample() {
  return (
    <div>
      <div style={labelStyle}>Date Prediction · Humanity's Last Exam</div>
      <div style={titleStyle}>When will an AI system reach 21.60% on HLE (no tools)?</div>
      <div style={metaStyle}>Target metric: 21.60% accuracy · No tools</div>

      <div style={dividerStyle}>
        <div style={fieldLabel}>Prompt</div>
        <p style={bodyStyle}>
          Humanity's Last Exam (HLE) is a challenging multi-modal benchmark designed to assess
          expert-level knowledge across diverse subjects, developed globally by subject-matter
          experts. By which date in the future do you think an AI system will reach 21.60% on
          Humanity's Last Exam (no tools)? Return in{' '}
          <code
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13,
              backgroundColor: '#f4f4f4',
              padding: '1px 6px',
              borderRadius: 4,
            }}
          >
            YYYY-MM
          </code>{' '}
          format.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ marginTop: 24 }}>
        <div
          style={{
            backgroundColor: '#e3efe6',
            border: '1px solid #a8d3b6',
            borderRadius: 12,
            padding: '14px 18px',
          }}
        >
          <div style={{ ...fieldLabel, color: '#1f6b3a', marginBottom: 6 }}>Ground truth</div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 22,
              fontWeight: 700,
              color: '#1f6b3a',
              letterSpacing: '-0.01em',
            }}
          >
            2025-06
          </div>
        </div>
        <div
          style={{
            backgroundColor: '#f9f9f9',
            border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: 12,
            padding: '14px 18px',
          }}
        >
          <div style={{ ...fieldLabel, marginBottom: 6 }}>Source</div>
          <a
            href="https://blog.google/products-and-platforms/products/gemini/gemini-2-5-pro-latest-preview/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 14,
              fontWeight: 500,
              color: '#325c76',
              textDecoration: 'underline',
              lineHeight: 1.5,
              letterSpacing: '-0.01em',
            }}
          >
            Gemini 2.5 Pro preview · Google, 2025
          </a>
        </div>
      </div>

      <div
        style={{
          backgroundColor: '#efebe4',
          borderRadius: 12,
          padding: '14px 18px',
          marginTop: 24,
          borderLeft: '3px solid #325c76',
        }}
      >
        <div style={{ ...fieldLabel, marginBottom: 6 }}>Scoring</div>
        <p
          style={{
            ...bodyStyle,
            fontSize: 14,
            color: '#3a3a3a',
            lineHeight: 1.65,
          }}
        >
          Predictions are scored with an exponential-decay function e<sup>−0.1|Δt|</sup>, where Δt
          is the offset in months from the ground truth. Exact month: 1.0.
        </p>
      </div>
    </div>
  )
}
