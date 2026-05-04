import Link from 'next/link'
export const metadata = { title: 'Case Studies' }
export default function CaseStudies() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 24px' }}>
      <span className="section-label">Case Studies</span>
      <h1 className="section-title" style={{ maxWidth: 560, marginTop: 16, marginBottom: 16 }}>Real outcomes. Coming soon.</h1>
      <p style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: 480, marginBottom: 40 }}>
        We're documenting our client work in the Problem → Approach → Outcome format. Check back soon — or get in touch to hear about our experience directly.
      </p>
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/contact" className="btn btn-primary">Talk to Us</Link>
        <Link href="/services" className="btn btn-outline">Explore Services</Link>
      </div>
    </div>
  )
}
