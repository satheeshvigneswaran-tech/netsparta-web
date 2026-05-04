'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './home.module.css'

export default function Home() {
  const revealRef = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { rootMargin: '0px 0px -60px 0px', threshold: 0.08 })
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroGrid} />
          <div className={styles.heroGlow} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={`${styles.heroTag} reveal`}>Real Technology Leadership. Real Results.</div>
          <h1 className={`${styles.heroTitle} reveal`}>
            Better Technology Decisions.<br />
            Faster Delivery.<br />
            <span className={styles.heroAccent}>Smarter Organisations.</span>
          </h1>
          <p className={`${styles.heroSub} reveal`}>
            Netsparta partners with startups, scale-ups, and enterprises to close the gap between where
            their technology is and where their business needs it to be. From AI-powered automation to
            hands-on CTO leadership — we bring the expertise, the execution, and the results.
          </p>
          <div className={`${styles.heroActions} reveal`}>
            <Link href="/contact" className="btn btn-primary btn-lg">Let's Talk</Link>
            <Link href="/services" className="btn btn-outline btn-lg">See What We Do</Link>
          </div>
          <p className={`${styles.heroTagline} reveal`}>Strategy. Speed. Substance.</p>
        </div>
        <div className={styles.heroScroll}>
          <span>Scroll</span>
          <div className={styles.heroScrollLine} />
        </div>
      </section>

      {/* ── TRUST TICKER ─────────────────────────────────── */}
      <div className="ticker">
        <div className="ticker__inner">
          {['20+ Years IT Expertise','AI-Native Delivery','CTO-Level Thinking','SportsTech','MedTech','FinTech','Strategy to Execution',
            '20+ Years IT Expertise','AI-Native Delivery','CTO-Level Thinking','SportsTech','MedTech','FinTech','Strategy to Execution'].map((t, i) => (
            <span key={i}>{t}<span className="ticker__dot" style={{ display: 'inline-block', width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.4)', margin: '0 14px', verticalAlign: 'middle' }} /></span>
          ))}
        </div>
      </div>

      {/* ── SECTION 3 — WHO WE ARE ───────────────────────── */}
      <section className={`section ${styles.whoWeAre}`}>
        <div className="container">
          <div className={styles.whoGrid}>
            <div className={styles.whoText}>
              <span className="section-label reveal">Who We Are</span>
              <h2 className="section-title reveal">We're the technology partner most businesses wish they'd found sooner.</h2>
              <p className={`${styles.whoBody} reveal`}>
                Most organisations don't have a technology problem. They have a clarity problem — unclear
                priorities, underused tools, projects that drift, and technology decisions made without
                the right expertise in the room.
              </p>
              <p className={`${styles.whoBody} reveal`}>
                Netsparta changes that. We work alongside your team as a trusted partner — bringing
                strategic leadership, AI-accelerated delivery, and practical advice that translates
                directly into better outcomes for your business.
              </p>
              <p className={`${styles.whoBody} reveal`}>
                Whether you need a CTO in your corner, a team to build and ship quickly, or an honest
                audit of what your technology is actually costing you — we show up, we engage, and we deliver.
              </p>
              <p className={`${styles.whoTagline} reveal`}>Strategy. Speed. Substance.</p>
            </div>
            <div className={`${styles.whoVisual} reveal`}>
              <div className={styles.whoCard}>
                <div className={styles.whoCardNum}>20+</div>
                <div className={styles.whoCardLabel}>Years IT Expertise</div>
              </div>
              <div className={`${styles.whoCard} ${styles.whoCardGold}`}>
                <div className={styles.whoCardNum}>11</div>
                <div className={styles.whoCardLabel}>Specialist Services</div>
              </div>
              <div className={styles.whoCard}>
                <div className={styles.whoCardNum}>4</div>
                <div className={styles.whoCardLabel}>Core Industries</div>
              </div>
              <div className={`${styles.whoCard} ${styles.whoCardRed}`}>
                <div className={styles.whoCardIcon}>AI</div>
                <div className={styles.whoCardLabel}>Native Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — DUAL SPOTLIGHT ───────────────────── */}
      <section className={`section ${styles.spotlight}`}>
        <div className="container">
          <div className={styles.spotlightGrid}>

            {/* ClarityAudit */}
            <div className={`${styles.spotCard} ${styles.spotCardRed} reveal`}>
              <span className="section-label">Signature Service</span>
              <h2 className={styles.spotTitle}>Most businesses are losing money they don't even know about.</h2>
              <p className={styles.spotBody}>
                Bloated software licenses nobody uses. Manual processes AI could handle in seconds. Projects
                burning budget without delivering value. Systems duplicated across departments. People spending
                time on work that should be automated.
              </p>
              <p className={styles.spotBody}>
                We've seen it everywhere — and with AI, there has never been a better moment to find it, fix
                it, and redirect that investment where it actually matters.
              </p>
              <p className={`${styles.spotBody} ${styles.spotBodyBold}`}>
                ClarityAudit is our signature diagnostic. We go deep into your operations and technology,
                identify every layer of waste, and hand you a clear, prioritised plan to recover cost, reduce
                friction, and fund your next stage of growth.
              </p>
              <div className={styles.spotCallouts}>
                <div className={styles.spotCallout}>
                  <span className={styles.spotCalloutIcon}>💸</span>
                  <div>
                    <strong>Find the hidden cost</strong>
                    <p>Surface every drain on your budget, from unused tools to over-resourced processes</p>
                  </div>
                </div>
                <div className={styles.spotCallout}>
                  <span className={styles.spotCalloutIcon}>⚙️</span>
                  <div>
                    <strong>Fix the broken processes</strong>
                    <p>Map, challenge, and redesign the workflows slowing you down</p>
                  </div>
                </div>
                <div className={styles.spotCallout}>
                  <span className={styles.spotCalloutIcon}>🤖</span>
                  <div>
                    <strong>Apply AI where it counts</strong>
                    <p>Targeted automation recommendations with measurable ROI</p>
                  </div>
                </div>
              </div>
              <Link href="/services/clarity-audit" className={`btn btn-primary ${styles.spotCta}`}>Discover ClarityAudit →</Link>
              <p className={styles.spotSupport}>Available as a standalone engagement or as part of a broader Netsparta partnership.</p>
            </div>

            {/* AI Adoption */}
            <div className={`${styles.spotCard} ${styles.spotCardGold} reveal`}>
              <span className="section-label section-label--gold">Featured Service</span>
              <h2 className={styles.spotTitle}>Every business is being told to adopt AI. Most don't know where to start.</h2>
              <p className={styles.spotBody}>
                Leaders feel pressure to act but lack clarity on what's genuinely useful versus what's hype.
                Operations teams are handed tools without context, training, or a reason to change how they
                work. The result? AI investment that delivers nothing.
              </p>
              <p className={`${styles.spotBody} ${styles.spotBodyBold}`}>
                AI Adoption & Enablement is Netsparta's practical guide through the full AI journey. We work
                with your leadership to cut through the noise and build a clear roadmap — then get hands-on
                with your operations teams to embed the right tools in a way that actually sticks.
              </p>
              <div className={styles.spotCallouts}>
                <div className={styles.spotCallout}>
                  <span className={styles.spotCalloutIcon}>🧭</span>
                  <div>
                    <strong>Cut through the noise</strong>
                    <p>Thousands of AI tools exist. We identify what's genuinely relevant to your business</p>
                  </div>
                </div>
                <div className={styles.spotCallout}>
                  <span className={styles.spotCalloutIcon}>👥</span>
                  <div>
                    <strong>Bring your people with you</strong>
                    <p>AI adoption fails when people aren't taken on the journey. We work with your teams</p>
                  </div>
                </div>
                <div className={styles.spotCallout}>
                  <span className={styles.spotCalloutIcon}>📈</span>
                  <div>
                    <strong>Measure what matters</strong>
                    <p>Every recommendation comes with clear success criteria so you know what good looks like</p>
                  </div>
                </div>
              </div>
              <Link href="/services/ai-adoption-enablement" className={`btn btn-gold ${styles.spotCta}`}>Explore AI Adoption & Enablement →</Link>
              <p className={styles.spotSupport}>Aimed at leadership and operations teams ready to make AI work in practice, not just in theory.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 5 — OUTCOMES STRIP ───────────────────── */}
      <section className={`section ${styles.outcomes}`}>
        <div className="container">
          <div className="section-header">
            <h2 className={`section-title reveal`}>What Our Clients Actually Get</h2>
          </div>
          <div className={styles.outcomesGrid}>
            {[
              { icon: '🚀', title: 'Faster delivery', body: 'AI-assisted development and automation that compresses timelines without cutting corners' },
              { icon: '🧭', title: 'Clearer direction', body: 'Technology strategy and governance that gives your whole team confidence in the roadmap' },
              { icon: '💰', title: 'Lower cost, less waste', body: "ClarityAudit finds the money you didn't know you were leaving on the table" },
              { icon: '🤖', title: 'Real AI adoption', body: 'The right tools embedded across leadership and operations — not shelfware' },
              { icon: '🤝', title: 'A partner, not a vendor', body: 'Senior expertise that integrates with your team and stays accountable to your goals' },
            ].map((o, i) => (
              <div key={i} className={`${styles.outcomeCard} reveal`}>
                <span className={styles.outcomeIcon}>{o.icon}</span>
                <h3 className={styles.outcomeTitle}>{o.title}</h3>
                <p className={styles.outcomeBody}>{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6 — SERVICES GRID ────────────────────── */}
      <section className={`section ${styles.services}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-label reveal">What We Do</span>
            <h2 className="section-title reveal">Everything your business needs to lead with technology</h2>
            <p className="section-sub reveal">From a single advisory engagement to a fully embedded technology function — Netsparta delivers across the full spectrum.</p>
          </div>
          <div className={styles.servicesGrid}>
            {[
              { n:'01', title:'ClarityAudit', star:true, body:'Find the waste, fund the future — our AI-powered operational and technology diagnostic', href:'/services/clarity-audit' },
              { n:'02', title:'AI Adoption & Enablement', star:true, body:'Practical AI adoption for leadership and operations teams — the right tools, embedded the right way', href:'/services/ai-adoption-enablement' },
              { n:'03', title:'CTO as a Service', body:'Senior technology leadership, without the full-time hire', href:'/services/cto-as-a-service' },
              { n:'04', title:'AI Automation Development', body:'Intelligent workflows and automation, built and deployed rapidly', href:'/services/ai-automation' },
              { n:'05', title:'Software Governance & DevOps', body:'The controls, standards, and processes your engineering needs', href:'/services/software-governance' },
              { n:'06', title:'IT Audit & Cost Optimisation', body:'Honest assessment of your technology — what works, what doesn\'t, what it\'s costing you', href:'/services/it-audit' },
              { n:'07', title:'Monitoring & Observability', body:'Know what\'s happening in your systems before it becomes a problem', href:'/services/monitoring' },
              { n:'08', title:'AI-First BA & Project Management', body:'Requirements to delivery, faster and smarter with AI-augmented methods', href:'/services/ba-project-management' },
              { n:'09', title:'App & Platform Development', body:'Custom applications built to purpose, built to last', href:'/services/app-development' },
              { n:'10', title:'Intelligent Dashboards & Data', body:'The right data, presented clearly, so decisions are easier', href:'/services/dashboards-data' },
              { n:'11', title:'Technology Outsourcing', body:'Extend your team with trusted, managed technology capability', href:'/services/outsourcing' },
            ].map((s, i) => (
              <Link key={i} href={s.href} className={`${styles.serviceCard}${s.star ? ' '+styles.serviceCardStar : ''} reveal`}>
                <div className={styles.serviceCardTop}>
                  <span className={styles.serviceNum}>{s.n}</span>
                  {s.star && <span className={styles.serviceStarBadge}>Flagship</span>}
                </div>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceBody}>{s.body}</p>
                <span className={styles.serviceArrow}>→</span>
              </Link>
            ))}
          </div>
          <div className={styles.servicesCta}>
            <Link href="/services" className="btn btn-outline">Explore All Services →</Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 — WHY NETSPARTA ────────────────────── */}
      <section className={`section ${styles.whyUs}`}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div>
              <span className="section-label reveal">Why Us</span>
              <h2 className="section-title reveal">We've sat in your seat.<br />That's what makes us different.</h2>
              <p className={`${styles.whyBody} reveal`}>
                Netsparta isn't a body shop or a generic consulting firm. Our team brings real-world experience
                across IT leadership, software delivery, business analysis, and AI implementation — across
                SportsTech, MedTech, FinTech, and beyond.
              </p>
              <p className={`${styles.whyBody} reveal`}>
                We speak business first, technology second. We don't hide behind jargon or sell solutions
                you don't need. We ask the right questions, tell you what we honestly see, and work with
                you to build something that lasts.
              </p>
            </div>
            <div className={styles.whyDiffs}>
              {[
                { n:'01', title:'Practitioners, not theorists', body:'Every advisor and delivery lead has done this before — in real organisations, with real constraints. We bring strategy with substance.' },
                { n:'02', title:'AI built into everything we do', body:'Not as a buzzword. As a genuine accelerator across strategy, delivery, and operations — including how we run ClarityAudit.' },
                { n:'03', title:'Outcomes over outputs', body:'We measure ourselves on the difference we make to your business — not the hours we bill or the documents we produce.' },
              ].map((d, i) => (
                <div key={i} className={`${styles.whyDiff} reveal`}>
                  <span className={styles.whyNum}>{d.n}</span>
                  <div>
                    <h4 className={styles.whyDiffTitle}>{d.title}</h4>
                    <p className={styles.whyDiffBody}>{d.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8 — INDUSTRIES ───────────────────────── */}
      <section className={`section ${styles.industries}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-label reveal">Where We Work</span>
            <h2 className="section-title reveal">Deep expertise across the sectors that matter</h2>
          </div>
          <div className={styles.industryGrid}>
            {[
              { label:'SportsTech', body:'From fan engagement platforms to performance data infrastructure', href:'/industries/sportstech', icon:'🏆' },
              { label:'MedTech', body:'Compliance-aware development and systems that support clinical outcomes', href:'/industries/medtech', icon:'🏥' },
              { label:'FinTech', body:'Secure, scalable platforms built for regulatory environments', href:'/industries/fintech', icon:'📊' },
              { label:'Enterprise & SME', body:'Practical technology leadership for businesses at every stage', href:'/industries/enterprise-sme', icon:'🏢' },
            ].map((ind, i) => (
              <Link key={i} href={ind.href} className={`${styles.industryCard} reveal`}>
                <span className={styles.industryIcon}>{ind.icon}</span>
                <h3 className={styles.industryLabel}>{ind.label}</h3>
                <p className={styles.industryBody}>{ind.body}</p>
                <span className={styles.industryArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9 — MANIFESTO ────────────────────────── */}
      <section className={styles.manifesto}>
        <div className="container">
          <div className={styles.manifestoInner}>
            <div className={`${styles.manifestoQuote} reveal`}>"</div>
            <blockquote className={`${styles.manifestoText} reveal`}>
              We believe every business deserves access to the kind of technology leadership
              that used to be reserved for the biggest players.
            </blockquote>
            <p className={`${styles.manifestoBody} reveal`}>
              That's why Netsparta exists. To make senior expertise, intelligent delivery, and honest advice
              accessible — and to help ambitious organisations stop wasting what they have and start building
              what they need.
            </p>
            <p className={`${styles.manifestoTagline} reveal`}>Strategy. Speed. Substance.</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 10 — CTA STRIP ───────────────────────── */}
      <section className={styles.ctaStrip}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={`${styles.ctaTitle} reveal`}>Ready to see what's possible?</h2>
            <p className={`${styles.ctaSub} reveal`}>
              Whether you want to start with a ClarityAudit, explore a specific service, or simply have
              an honest conversation about your technology — we're here.
            </p>
            <Link href="/contact" className={`btn btn-primary btn-lg reveal`}>Start the Conversation</Link>
            <p className={`${styles.ctaNote} reveal`}>No commitment. No jargon. Just a straightforward chat about your technology.</p>
          </div>
        </div>
      </section>
    </>
  )
}
