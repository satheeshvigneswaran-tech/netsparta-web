import Link from 'next/link'

export const metadata = { title: 'Thank You' }

export default function ThankYou() {
  return (
    <div
      style={{
        padding: '160px 0 100px',
        textAlign: 'center',
        minHeight: '100vh',
        background: 'var(--bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="container">
        <span className="section-label">Message Received</span>
        <h1
          className="section-title"
          style={{ marginTop: 16, marginBottom: 20, fontSize: 'clamp(32px, 4vw, 52px)' }}
        >
          Thanks — we&apos;ll be in touch shortly.
        </h1>
        <p
          className="section-sub"
          style={{ margin: '0 auto 40px', maxWidth: 520 }}
        >
          We&apos;ve received your enquiry and will respond within one business day.
          In the meantime, feel free to explore our services or connect with us on LinkedIn.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-primary">Back to Home</Link>
          <Link href="/services" className="btn btn-outline">Explore Services</Link>
        </div>
      </div>
    </div>
  )
}
