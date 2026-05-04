import Link from 'next/link'
export const metadata = { title: 'FinTech' }
export default function FinTech() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingBottom: 80 }}>
      <div style={{ paddingTop: 140, paddingBottom: 72, borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span className="section-label">Industry — FinTech</span>
          <h1 className="section-title" style={{ maxWidth: 680, marginTop: 16 }}>📊 Secure, scalable platforms built for regulated environments.</h1>
          <p style={{ fontSize: 18, color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: 600, marginTop: 16 }}>We build and advise on financial technology where trust, resilience, and speed all matter — and where compliance is non-negotiable.</p>
          <div style={{ marginTop: 36, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary btn-lg">Talk to Us</Link>
            <Link href="/services" className="btn btn-outline btn-lg">Our Services</Link>
          </div>
        </div>
      </div>
      <div className="section"><div className="container" style={{ maxWidth: 760 }}>
        <span className="section-label">What We Do in FinTech</span>
        <h2 className="section-title" style={{ marginTop: 16 }}>Speed and security. Not a trade-off.</h2>
        <p style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.8, marginTop: 16 }}>We work with fintech businesses — from early-stage startups through to established players — on platform architecture, regulatory technology, payment systems, and data infrastructure. We understand FCA requirements, PSD2 obligations, and the operational resilience standards that financial services businesses must meet.</p>
      </div></div>
      <div style={{ textAlign: 'center', padding: '80px 0', background: '#08080d', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 16 }}>Working in FinTech?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 32 }}>Let's talk about your technology challenges.</p>
          <Link href="/contact" className="btn btn-primary btn-lg">Start the Conversation</Link>
        </div>
      </div>
    </div>
  )
}
