import Link from 'next/link'

export const metadata = { title: 'Services' }

const services = [
  { n:'01', title:'ClarityAudit', flagship:true, body:'Find the waste, fund the future — our AI-powered operational and technology diagnostic', href:'/services/clarity-audit' },
  { n:'02', title:'AI Adoption & Enablement', flagship:true, body:'Practical AI adoption for leadership and operations teams — the right tools, embedded the right way', href:'/services/ai-adoption-enablement' },
  { n:'03', title:'CTO as a Service', body:'Senior technology leadership, without the full-time hire', href:'/services/cto-as-a-service' },
  { n:'04', title:'AI Automation Development', body:'Intelligent workflows and automation, built and deployed rapidly', href:'/services/ai-automation' },
  { n:'05', title:'Software Governance & DevOps', body:'The controls, standards, and processes your engineering needs', href:'/services/software-governance' },
  { n:'06', title:'IT Audit & Cost Optimisation', body:"Honest assessment of your technology — what works, what doesn't, what it's costing you", href:'/services/it-audit' },
  { n:'07', title:'Monitoring & Observability', body:"Know what's happening in your systems before it becomes a problem", href:'/services/monitoring' },
  { n:'08', title:'AI-First BA & Project Management', body:'Requirements to delivery, faster and smarter with AI-augmented methods', href:'/services/ba-project-management' },
  { n:'09', title:'App & Platform Development', body:'Custom applications built to purpose, built to last', href:'/services/app-development' },
  { n:'10', title:'Intelligent Dashboards & Data', body:'The right data, presented clearly, so decisions are easier', href:'/services/dashboards-data' },
  { n:'11', title:'Technology Outsourcing', body:'Extend your team with trusted, managed technology capability', href:'/services/outsourcing' },
]

export default function ServicesPage() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingBottom: 80 }}>
      <div style={{ paddingTop: 140, paddingBottom: 72, borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span className="section-label">What We Do</span>
          <h1 className="section-title" style={{ maxWidth: 640, marginTop: 16 }}>Everything your business needs to lead with technology</h1>
          <p style={{ fontSize: 18, color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: 580, marginTop: 16 }}>
            From a single advisory engagement to a fully embedded technology function — Netsparta delivers across the full spectrum.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {services.map((s) => (
              <Link
                key={s.n}
                href={s.href}
                style={{
                  display: 'flex', flexDirection: 'column',
                  background: 'var(--bg-card)',
                  border: `1px solid ${s.flagship ? 'var(--border-red)' : 'var(--border)'}`,
                  borderRadius: 'var(--radius-lg)',
                  padding: '28px 24px',
                  transition: 'var(--trans)',
                  textDecoration: 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-dim)', letterSpacing: '.06em' }}>{s.n}</span>
                  {s.flagship && (
                    <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--red)', background: 'rgba(192,57,43,.12)', border: '1px solid var(--border-red)', padding: '2px 8px', borderRadius: 999 }}>Flagship</span>
                  )}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6, flex: 1, marginBottom: 16 }}>{s.body}</p>
                <span style={{ fontSize: 18, color: 'var(--text-dim)' }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: '80px 0', background: '#08080d', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 16 }}>Not sure where to start?</h2>
          <p style={{ fontSize: 17, color: 'var(--text-muted)', maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.75 }}>
            Tell us what you're trying to solve. We'll point you in the right direction — even if it's not us.
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg">Start the Conversation</Link>
        </div>
      </div>
    </div>
  )
}
