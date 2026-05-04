import Link from 'next/link'

/**
 * Shared layout component for all service detail pages.
 *
 * Props:
 *   label       – small pill label above the headline (e.g. "Signature Service — 01")
 *   headline    – main H1 text
 *   subtext     – hero paragraph
 *   problem     – "Problem We Solve" body text
 *   whatWeDo    – "What We Do" body text
 *   howWeWork   – "How We Work" body text
 *   whoItsFor   – "Who It's For" body text
 *   ctaHref     – optional override for the CTA button href (defaults to /contact)
 */
export default function ServicePage({
  label,
  headline,
  subtext,
  problem,
  whatWeDo,
  howWeWork,
  whoItsFor,
  ctaHref = '/contact',
}) {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        style={{
          padding: '140px 0 80px',
          background: 'var(--bg)',
          borderBottom: '1px solid var(--border)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* subtle background glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-80px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '400px',
            background: 'radial-gradient(ellipse at center, rgba(192,57,43,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div className="container">
          {label && <span className="section-label">{label}</span>}
          <h1
            className="section-title"
            style={{ maxWidth: 720, marginTop: label ? 16 : 0 }}
          >
            {headline}
          </h1>
          {subtext && (
            <p
              style={{
                fontSize: 18,
                color: 'var(--text-muted)',
                lineHeight: 1.75,
                maxWidth: 640,
                marginTop: 20,
              }}
            >
              {subtext}
            </p>
          )}
          <div style={{ marginTop: 40 }}>
            <Link href={ctaHref} className="btn btn-primary btn-lg">
              Start the Conversation
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROBLEM WE SOLVE ─────────────────────────────── */}
      {problem && (
        <section className="section">
          <div className="container">
            <div style={{ maxWidth: 720 }}>
              <span className="section-label">The Problem</span>
              <h2 className="section-title" style={{ marginTop: 16 }}>
                Problem We Solve
              </h2>
              <p style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.8, marginTop: 16 }}>
                {problem}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── WHAT WE DO ───────────────────────────────────── */}
      {whatWeDo && (
        <section
          className="section"
          style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
        >
          <div className="container">
            <div style={{ maxWidth: 720 }}>
              <span className="section-label">The Solution</span>
              <h2 className="section-title" style={{ marginTop: 16 }}>
                What We Do
              </h2>
              <p style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.8, marginTop: 16 }}>
                {whatWeDo}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── HOW WE WORK ──────────────────────────────────── */}
      {howWeWork && (
        <section className="section">
          <div className="container">
            <div style={{ maxWidth: 720 }}>
              <span className="section-label">The Approach</span>
              <h2 className="section-title" style={{ marginTop: 16 }}>
                How We Work
              </h2>
              <p style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.8, marginTop: 16 }}>
                {howWeWork}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── WHO IT'S FOR ─────────────────────────────────── */}
      {whoItsFor && (
        <section
          className="section"
          style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
        >
          <div className="container">
            <div style={{ maxWidth: 720 }}>
              <span className="section-label">Who It&apos;s For</span>
              <h2 className="section-title" style={{ marginTop: 16 }}>
                Is This Right for You?
              </h2>
              <p style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.8, marginTop: 16 }}>
                {whoItsFor}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA STRIP ────────────────────────────────────── */}
      <section
        style={{
          padding: '96px 0',
          background: 'linear-gradient(135deg, rgba(192,57,43,0.06) 0%, var(--bg) 60%)',
          borderTop: '1px solid var(--border)',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Ready to get started?
          </h2>
          <p
            style={{
              fontSize: 17,
              color: 'var(--text-muted)',
              lineHeight: 1.75,
              maxWidth: 520,
              margin: '0 auto 36px',
            }}
          >
            Let&apos;s talk about how this service can work for your organisation.
            No commitment, no jargon — just an honest conversation.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Start the Conversation
            </Link>
            <Link href="/services" className="btn btn-outline btn-lg">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
