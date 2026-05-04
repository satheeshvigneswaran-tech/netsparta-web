import Link from 'next/link'
export const metadata = { title: 'SportsTech' }
export default function SportsTech() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingBottom: 80 }}>
      <div style={{ paddingTop: 140, paddingBottom: 72, borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span className="section-label">Industry — SportsTech</span>
          <h1 className="section-title" style={{ maxWidth: 680, marginTop: 16 }}>🏆 Technology that moves at the pace of sport.</h1>
          <p style={{ fontSize: 18, color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: 600, marginTop: 16 }}>From fan engagement platforms and performance data infrastructure to commercial systems and AI-powered analytics — we understand what it takes to build and run technology in the world of sport.</p>
          <div style={{ marginTop: 36, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary btn-lg">Talk to Us</Link>
            <Link href="/services" className="btn btn-outline btn-lg">Our Services</Link>
          </div>
        </div>
      </div>
      <div className="section"><div className="container" style={{ maxWidth: 760 }}>
        <span className="section-label">What We Do in SportsTech</span>
        <h2 className="section-title" style={{ marginTop: 16 }}>Sector experience that makes the difference.</h2>
        <p style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.8, marginTop: 16 }}>We've worked across the sports technology landscape — with clubs, governing bodies, sports data businesses, and fan experience platforms. We understand the data complexity, the commercial pressures, and the pace at which sport moves. Whether it's performance analytics, broadcast systems, ticketing infrastructure, or AI-powered fan engagement — we bring genuine sector knowledge alongside technical expertise.</p>
      </div></div>
      <div style={{ textAlign: 'center', padding: '80px 0', background: '#08080d', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 16 }}>Working in SportsTech?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 32 }}>Let's talk about your technology challenges.</p>
          <Link href="/contact" className="btn btn-primary btn-lg">Start the Conversation</Link>
        </div>
      </div>
    </div>
  )
}
