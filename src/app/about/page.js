import Link from 'next/link'

export const metadata = { title: 'About' }

const industries = [
  {
    label: 'SportsTech',
    body: 'From fan engagement platforms to performance data infrastructure — we understand the speed and scale sport demands.',
    href: '/industries/sportstech',
    icon: '🏆',
  },
  {
    label: 'MedTech',
    body: 'Compliance-aware development and systems that support clinical outcomes and regulatory confidence.',
    href: '/industries/medtech',
    icon: '🏥',
  },
  {
    label: 'FinTech',
    body: 'Secure, scalable platforms built for regulatory environments and demanding performance requirements.',
    href: '/industries/fintech',
    icon: '📊',
  },
  {
    label: 'Enterprise & SME',
    body: 'Practical technology leadership for businesses at every stage — from scale-up to global enterprise.',
    href: '/industries/enterprise-sme',
    icon: '🏢',
  },
]

export default function About() {
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
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-80px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '400px',
            background: 'radial-gradient(ellipse at center, rgba(192,57,43,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div className="container">
          <span className="section-label">About Netsparta</span>
          <h1
            className="section-title"
            style={{ maxWidth: 720, marginTop: 16, fontSize: 'clamp(32px, 4vw, 52px)' }}
          >
            The technology partner most businesses wish they&apos;d found sooner.
          </h1>
          <p
            style={{
              fontSize: 18,
              color: 'var(--text-muted)',
              lineHeight: 1.75,
              maxWidth: 620,
              marginTop: 20,
            }}
          >
            Netsparta combines senior technology leadership, AI-accelerated delivery, and
            hard-earned industry experience to help ambitious organisations move faster,
            waste less, and build better.
          </p>
        </div>
      </section>

      {/* ── WHO WE ARE ───────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 64,
              alignItems: 'start',
            }}
          >
            <div>
              <span className="section-label">Who We Are</span>
              <h2 className="section-title" style={{ marginTop: 16 }}>
                We&apos;re practitioners, not theorists.
              </h2>
              <p style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.8, marginTop: 16 }}>
                Every advisor and delivery lead at Netsparta has done this before — in real organisations,
                under real constraints, with real stakes. We bring strategy that comes with substance,
                and advice that has been earned in the field.
              </p>
              <p style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.8, marginTop: 16 }}>
                We work across IT leadership, software delivery, business analysis, and AI implementation.
                We speak business first, technology second — and we never hide behind jargon or sell solutions
                you don&apos;t need.
              </p>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 16,
              }}
            >
              {[
                { num: '20+', label: 'Years IT Expertise' },
                { num: '11', label: 'Specialist Services' },
                { num: '4', label: 'Core Industries' },
                { num: 'AI', label: 'Native Delivery' },
              ].map((stat) => (
                <div
                  key={stat.num}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '32px 24px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: 40,
                      fontWeight: 800,
                      color: 'var(--red)',
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                      marginBottom: 8,
                    }}
                  >
                    {stat.num}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 600 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE NETSPARTA PHILOSOPHY ──────────────────────── */}
      <section
        className="section"
        style={{
          background: 'var(--bg-card)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label section-label--gold">Our Philosophy</span>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              The Netsparta Philosophy
            </h2>
            <p style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.8, marginTop: 20 }}>
              We believe every business deserves access to the kind of technology leadership
              that used to be reserved for the biggest players. That means honest advice,
              senior expertise, and delivery that actually moves the needle.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 24,
              marginTop: 56,
            }}
          >
            {[
              {
                title: 'Outcomes over outputs',
                body: 'We measure ourselves on the difference we make to your business — not hours billed or documents produced.',
              },
              {
                title: 'AI built into everything',
                body: 'Not as a buzzword — as a genuine accelerator across strategy, delivery, and operations.',
              },
              {
                title: 'Honest, direct advice',
                body: 'We tell you what we honestly see, even when it\'s not what you\'d hoped to hear. That\'s what a real partner does.',
              },
            ].map((p) => (
              <div
                key={p.title}
                style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '32px 28px',
                }}
              >
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>{p.title}</h3>
                <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.75 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP / FOUNDER ──────────────────────────── */}
      <section className="section">
        <div className="container">
          <span className="section-label">Leadership</span>
          <h2 className="section-title" style={{ marginTop: 16, marginBottom: 40 }}>
            Founder Story
          </h2>
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '48px',
              maxWidth: 720,
            }}
          >
            <p style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.8 }}>
              Netsparta was founded on a simple observation: most businesses have the ambition but not
              always the right technology leadership to match it. With over 20 years of experience
              across IT strategy, software delivery, and AI implementation, our founder set out to
              build the kind of partner they always wished existed — one that combines the rigour of
              enterprise consulting with the pace and pragmatism of a great startup.
            </p>
            <p style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.8, marginTop: 20 }}>
              That vision is what drives every engagement: practical, honest, and genuinely focused
              on making a difference.
            </p>
            <p
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: 'var(--red)',
                marginTop: 28,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Strategy. Speed. Substance.
            </p>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────── */}
      <section
        className="section"
        style={{
          background: 'var(--bg-card)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="container">
          <div className="section-header">
            <span className="section-label">Where We Work</span>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              Industries We Work In
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 24,
              marginTop: 40,
            }}
          >
            {industries.map((ind) => (
              <Link
                key={ind.href}
                href={ind.href}
                style={{
                  display: 'block',
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '32px 28px',
                  transition: 'var(--trans)',
                  textDecoration: 'none',
                }}
              >
                <span style={{ fontSize: 36, display: 'block', marginBottom: 16 }}>{ind.icon}</span>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{ind.label}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7 }}>{ind.body}</p>
                <span style={{ display: 'block', marginTop: 20, color: 'var(--red)', fontWeight: 700 }}>
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section style={{ padding: '96px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Work with us
          </h2>
          <p
            style={{
              fontSize: 17,
              color: 'var(--text-muted)',
              maxWidth: 500,
              margin: '0 auto 36px',
              lineHeight: 1.75,
            }}
          >
            Whether you need strategic technology leadership, a hands-on delivery team,
            or an honest audit of where your money is going — we&apos;re here.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Get in Touch
            </Link>
            <Link href="/services" className="btn btn-outline btn-lg">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
