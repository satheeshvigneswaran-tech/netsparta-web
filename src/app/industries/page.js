import Link from 'next/link'
export const metadata = { title: 'Industries' }

const industries = [
  { icon:'🏆', label:'SportsTech', body:'From fan engagement platforms to performance data infrastructure — we understand the pace, the data complexity, and the commercial pressures of sport.', href:'/industries/sportstech' },
  { icon:'🏥', label:'MedTech', body:'Compliance-aware development and systems that support clinical outcomes — where getting it right isn\'t optional.', href:'/industries/medtech' },
  { icon:'📊', label:'FinTech', body:'Secure, scalable platforms built for regulatory environments — where trust, resilience, and speed all matter.', href:'/industries/fintech' },
  { icon:'🏢', label:'Enterprise & SME', body:'Practical technology leadership for businesses at every stage — from ambitious SMEs to large enterprises navigating change.', href:'/industries/enterprise-sme' },
]

export default function Industries() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingBottom: 80 }}>
      <div style={{ paddingTop: 140, paddingBottom: 72, borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span className="section-label">Where We Work</span>
          <h1 className="section-title" style={{ maxWidth: 600, marginTop: 16 }}>Deep expertise across the sectors that matter</h1>
          <p style={{ fontSize: 18, color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: 560, marginTop: 16 }}>
            We bring sector-specific knowledge to every engagement — understanding the commercial pressures, regulatory context, and technical challenges unique to your industry.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {industries.map((ind) => (
              <Link key={ind.href} href={ind.href} style={{ display: 'flex', flexDirection: 'column', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '40px 36px', transition: 'var(--trans)', textDecoration: 'none' }}>
                <span style={{ fontSize: 40, marginBottom: 20 }}>{ind.icon}</span>
                <h2 style={{ fontSize: 24, fontWeight: 800, color: 'var(--text)', marginBottom: 12 }}>{ind.label}</h2>
                <p style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.7, flex: 1, marginBottom: 20 }}>{ind.body}</p>
                <span style={{ fontSize: 18, color: 'var(--text-dim)' }}>Explore {ind.label} →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
