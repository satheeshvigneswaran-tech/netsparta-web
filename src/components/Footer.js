import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__brand-logo">
              <Image src="/logo-full.gif" alt="Netsparta" width={110} height={24} style={{ height: 24, width: 'auto' }} unoptimized />
            </div>
            <p className="footer__tagline">Strategy. Speed. Substance.</p>
            <p>Technology leadership for startups, scale-ups, and enterprises ready to move faster.</p>
          </div>

          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services/clarity-audit">ClarityAudit ⭐</Link></li>
              <li><Link href="/services/ai-adoption-enablement">AI Adoption & Enablement ⭐</Link></li>
              <li><Link href="/services/cto-as-a-service">CTO as a Service</Link></li>
              <li><Link href="/services/ai-automation">AI Automation</Link></li>
              <li><Link href="/services/software-governance">Software Governance</Link></li>
              <li><Link href="/services/it-audit">IT Audit</Link></li>
              <li><Link href="/services/monitoring">Monitoring</Link></li>
              <li><Link href="/services/ba-project-management">BA & Project Mgmt</Link></li>
              <li><Link href="/services/app-development">App Development</Link></li>
              <li><Link href="/services/dashboards-data">Dashboards & Data</Link></li>
              <li><Link href="/services/outsourcing">Outsourcing</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/industries">Industries</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Get In Touch</h4>
            <ul>
              <li><a href="mailto:hello@netsparta.com">hello@netsparta.com</a></li>
              <li><a href="tel:+447730012379">+44 7730 012379</a></li>
              <li><Link href="/contact">Let's Talk</Link></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} Netsparta Ltd. All rights reserved.</p>
          <Link href="/contact">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
