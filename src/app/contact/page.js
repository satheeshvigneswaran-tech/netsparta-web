import styles from './contact.module.css'

export const metadata = { title: 'Contact' }

export default function Contact() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Get In Touch</span>
          <h1 className="section-title">Start the Conversation</h1>
          <p className="section-sub">
            No commitment. No jargon. Just a straightforward chat about your technology.
            We'll respond within one business day.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>What happens next</h3>
            <div className={styles.steps}>
              <div className={styles.step}>
                <span className={styles.stepNum}>01</span>
                <div>
                  <strong>We review your enquiry</strong>
                  <p>We read every message and route it to the right person.</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>02</span>
                <div>
                  <strong>We respond within one business day</strong>
                  <p>A real person, with relevant experience, will get back to you.</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>03</span>
                <div>
                  <strong>We have an honest conversation</strong>
                  <p>No sales pitch. Just an open discussion about what you need and whether we're the right fit.</p>
                </div>
              </div>
            </div>
          </div>

          <form
            className={styles.form}
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
            <input type="hidden" name="subject" value="New Enquiry — Netsparta" />
            <input type="hidden" name="redirect" value="https://netsparta.com/thank-you" />

            <div className={styles.row}>
              <div className={styles.group}>
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" placeholder="Jane Smith" required />
              </div>
              <div className={styles.group}>
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" placeholder="jane@company.com" required />
              </div>
            </div>

            <div className={styles.group}>
              <label htmlFor="company">Company Name</label>
              <input type="text" id="company" name="company" placeholder="Acme Ltd" />
            </div>

            <div className={styles.group}>
              <label htmlFor="service">Service You're Interested In</label>
              <select id="service" name="service">
                <option value="">Select a service…</option>
                <option>ClarityAudit</option>
                <option>AI Adoption & Enablement</option>
                <option>CTO as a Service</option>
                <option>AI Automation Development</option>
                <option>Software Governance & DevOps</option>
                <option>IT Audit & Cost Optimisation</option>
                <option>Monitoring & Observability</option>
                <option>BA & Project Management</option>
                <option>App & Platform Development</option>
                <option>Dashboards & Data</option>
                <option>Technology Outsourcing</option>
                <option>Not sure — I'd like to talk it through</option>
              </select>
            </div>

            <div className={styles.group}>
              <label htmlFor="message">Tell Us About Your Challenge *</label>
              <textarea id="message" name="message" rows={5} placeholder="Describe what you're working on, what's not working, or what you're trying to achieve…" required />
            </div>

            <button type="submit" className="btn btn-primary btn-full btn-lg">Send Enquiry</button>
            <p className={styles.note}>We'll respond within one business day.</p>
          </form>
        </div>
      </div>
    </div>
  )
}
