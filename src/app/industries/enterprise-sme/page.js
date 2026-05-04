import Link from 'next/link'
export const metadata = { title: 'Enterprise & SME' }
export default function EnterpriseSME() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingBottom: 80 }}>
      <div style={{ paddingTop: 140, paddingBottom: 72, borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span className="section-label">Industry — Enterprise & SME</span>
          <h1 className="section-title" style={{ maxWidth: 680, marginTop: 16 }}>🏢 Practical technology leadership for businesses at every stage.</h1>
          <p style={{ fontSize: 18, color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: 600, marginTop: 16 }}>Whether you're a growing SME or a large enterprise navigating transformation — we bring senior expertise, practical delivery, and honest advice tailored to your context.</p>
          <div style={{ marginTop: 36, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary btn-lg">Talk to Us</Link>
            <Link href="/services" className="btn btn-outline btn-lg">Our Services</Link>
          </div>
        </div>
      </div>
      <div className="section"><div className="container" style={{ maxWidth: 760 }}>
        <span className="section-label">What We Do for Enterprise & SME</span>
        <h2 className="section-title" style={{ marginTop: 16 }}>The right level of expertise for your stage of growth.</h2>
        <p style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.8, marginTop: 16 }}>We work with businesses across the full size spectrum — adapting our engagement model, pace, and approach to what makes sense for you. SMEs get the kind of senior technology leadership that was previously out of reach. Enterprises get a partner who can cut through bureaucracy and deliver real outcomes alongside large internal teams.</p>
      </div></div>
      <div style={{ textAlign: 'center', padding: '80px 0', background: '#08080d', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 16 }}>Ready to talk?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 32 }}>Let's have an honest conversation about your technology.</p>
          <Link href="/contact" className="btn btn-primary btn-lg">Start the Conversation</Link>
        </div>
      </div>
    </div>
  )
}
