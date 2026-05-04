import Link from 'next/link'
export const metadata = { title: 'MedTech' }
export default function MedTech() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingBottom: 80 }}>
      <div style={{ paddingTop: 140, paddingBottom: 72, borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span className="section-label">Industry — MedTech</span>
          <h1 className="section-title" style={{ maxWidth: 680, marginTop: 16 }}>🏥 Technology where getting it right isn't optional.</h1>
          <p style={{ fontSize: 18, color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: 600, marginTop: 16 }}>Compliance-aware development and systems that support clinical outcomes — built with the rigour, transparency, and accountability that the sector demands.</p>
          <div style={{ marginTop: 36, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary btn-lg">Talk to Us</Link>
            <Link href="/services" className="btn btn-outline btn-lg">Our Services</Link>
          </div>
        </div>
      </div>
      <div className="section"><div className="container" style={{ maxWidth: 760 }}>
        <span className="section-label">What We Do in MedTech</span>
        <h2 className="section-title" style={{ marginTop: 16 }}>Regulatory confidence. Clinical credibility.</h2>
        <p style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.8, marginTop: 16 }}>We bring experience across medical technology — from diagnostic platforms and clinical data systems to regulatory submission tooling and patient-facing applications. We understand the compliance landscape, the validation requirements, and the responsibility that comes with building technology that impacts clinical outcomes.</p>
      </div></div>
      <div style={{ textAlign: 'center', padding: '80px 0', background: '#08080d', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 16 }}>Working in MedTech?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 32 }}>Let's talk about your technology challenges.</p>
          <Link href="/contact" className="btn btn-primary btn-lg">Start the Conversation</Link>
        </div>
      </div>
    </div>
  )
}
