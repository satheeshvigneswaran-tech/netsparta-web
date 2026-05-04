# NetSparta — web

Instructions for Claude and other AI assistants working in this repository.

## What this is

Public/marketing web presence for my IT NetSparta.com The repo is early-stage: active app code is expected under `src/` and shared media under `assets/`. A  legacy static site (HTML, CSS, jQuery) lives under `old-site/` for reference, screenshots, and migration source material.

## Layout

| Path | Purpose |
|------|---------|
| `src/` | New site or app source (currently empty — add the chosen stack here). |
| `assets/` | Shared static assets for the new site. |
| `old-site/site/` | Legacy NetSparta pages (`index.html`, `css/`, `images/`, `js/`). Treat as read-mostly unless explicitly modernizing in place. |
| `old-site/screenshots/` | Archived page/screenshot images. |

## Working conventions

- Prefer changes in `src/` and `assets/`** for new work. Do not replace or delete `old-site/` without an explicit request.
- Match the stack once it exists (framework, package manager, linter). If no `package.json` is present yet, propose minimal scaffolding only when the user asks.
- Accessibility and performance: prefer semantic HTML, meaningful alt text, and lean assets when building the new site.
- Scope: make the smallest change that satisfies the task; avoid drive-by refactors and unrelated file churn.

## When adding a modern stack

Update this file with: framework name, Node/package manager version, how to run dev server and tests, and any deployment target (e.g. static host, Vercel). Until then, legacy pages can be previewed by opening `old-site/site/index.html` in a browser (relative asset paths assume that folder as root).

## Product context

Legacy titles and branding reference NetSparta; preserve tone and factual claims when migrating copy. Verify any product or legal statements with the project owner before changing them.

# NETSPARTA — Claude.md
> This file is the single source of truth for the Netsparta website project.
> Load this at the start of every Cursor session to maintain full context.

---

## 1. BRAND IDENTITY

**Company name:** Netsparta
**Website:** netsparta.com
**Tagline:** Strategy. Speed. Substance.
**Tone:** Approachable and consultative — professional but never cold, confident but never arrogant
**Audience:** Startups, SMEs, Scale-ups, Enterprise & Corporate
**Sectors:** SportsTech · MedTech · FinTech · Enterprise & SME

### Brand Voice Principles
- Business first, technology second
- No jargon, no fluff
- Practitioners not theorists — we've sat in your seat
- Outcomes over outputs
- AI is a genuine accelerator, not a buzzword

### Colour Direction (for developer reference)
- Dark, authoritative palette
- Primary accent: deep red
- Secondary accent: gold
- Background: near-black / dark navy
- Body text: off-white / light grey
- Muted text: mid grey

---

## 2. FLAGSHIP SERVICE — CLARITYAUDIT

**Name:** ClarityAudit
**Strapline:** Find the waste. Fund the future.
**Type:** Signature / flagship diagnostic service
**Available as:** Standalone engagement or part of broader Netsparta partnership

### What it addresses
- Bloated software licensing & unused tools
- Poor processes & manual rework
- Projects running over time & budget
- Underused or duplicated systems
- Headcount doing work AI can now do

### Three pillars
1. **Find the hidden cost** — Surface what's draining budget
2. **Fix the broken processes** — Map, challenge, and redesign inefficient workflows
3. **Apply AI where it counts** — Targeted automation recommendations with measurable ROI

---

## 3. FULL SERVICE LIST (11 Services)

| # | Service | One-liner |
|---|---|---|
| 01 | ClarityAudit ⭐ | Find the waste, fund the future — AI-powered operational and technology diagnostic |
| 02 | AI Adoption & Enablement ⭐ | Practical AI adoption for leadership and operations teams — the right tools, embedded the right way |
| 03 | CTO as a Service | Senior technology leadership, without the full-time hire |
| 04 | AI Automation Development | Intelligent workflows and automation, built and deployed rapidly |
| 05 | Software Governance & DevOps | The controls, standards, and processes your engineering needs |
| 06 | IT Audit & Cost Optimisation | Honest assessment of your technology — what works, what doesn't, what it's costing you |
| 07 | Monitoring & Observability | Know what's happening in your systems before it becomes a problem |
| 08 | AI-First BA & Project Management | Requirements to delivery, faster and smarter with AI-augmented methods |
| 09 | App & Platform Development | Custom applications built to purpose, built to last |
| 10 | Intelligent Dashboards & Data | The right data, presented clearly, so decisions are easier |
| 11 | Technology Outsourcing | Extend your team with trusted, managed technology capability |

---

## 4. WEBSITE STRUCTURE

```
netsparta.com
│
├── / (Home)
│ ├── Hero
│ ├── Trust / Credibility Bar
│ ├── What is Netsparta
│ ├── Dual Spotlight (ClarityAudit + AI Adoption & Enablement)
│ ├── Outcomes Strip (5 outcomes)
│ ├── Services Overview Grid (11 cards)
│ ├── Why Netsparta (3 differentiators)
│ ├── Industries
│ ├── Manifesto
│ ├── CTA Strip
│ └── Footer
│
├── /services (Services Overview)
│ └── Grid of all 11 services with links
│
├── /services/clarity-audit ⭐
├── /services/ai-adoption-enablement ⭐
├── /services/cto-as-a-service
├── /services/ai-automation
├── /services/software-governance
├── /services/it-audit
├── /services/monitoring
├── /services/ba-project-management
├── /services/app-development
├── /services/dashboards-data
├── /services/outsourcing
│
│ [Each service page contains:]
│ - Hero headline + subtext
│ - The Problem We Solve
│ - What We Do
│ - How We Work
│ - Who It's For
│ - CTA
│
├── /about
│ ├── Who we are
│ ├── The Netsparta philosophy
│ ├── Leadership / founder story
│ └── Industries we work in
│
├── /industries
│ ├── /industries/sportstech
│ ├── /industries/medtech
│ ├── /industries/fintech
│ └── /industries/enterprise-sme
│
├── /case-studies (build over time)
│ └── Problem → Approach → Outcome format
│
└── /contact
  ├── Enquiry form
  └── What happens next
```

---

## 5. HOMEPAGE CONTENT (Complete — Final Version)

### SECTION 1 — HERO

**Pre-headline tag**
Real Technology Leadership. Real Results.

**Headline**
Better Technology Decisions.
Faster Delivery.
Smarter Organisations.

**Subtext**
Netsparta partners with startups, scale-ups, and enterprises to close the gap between where their technology is and where their business needs it to be. From AI-powered automation to hands-on CTO leadership — we bring the expertise, the execution, and the results.

**Primary CTA:** Let's Talk
**Secondary CTA:** See What We Do
**Tagline beneath CTAs:** Strategy. Speed. Substance.

---

### SECTION 2 — TRUST / CREDIBILITY BAR

20+ Years IT Expertise · AI-Native Delivery · CTO-Level Thinking · SportsTech · MedTech · FinTech · Strategy to Execution

---

### SECTION 3 — WHAT IS NETSPARTA

**Section label:** Who We Are

**Headline**
We're the technology partner most businesses wish they'd found sooner.

**Body**
Most organisations don't have a technology problem. They have a clarity problem — unclear priorities, underused tools, projects that drift, and technology decisions made without the right expertise in the room.

Netsparta changes that. We work alongside your team as a trusted partner — bringing strategic leadership, AI-accelerated delivery, and practical advice that translates directly into better outcomes for your business.

Whether you need a CTO in your corner, a team to build and ship quickly, or an honest audit of what your technology is actually costing you — we show up, we engage, and we deliver.

*Strategy. Speed. Substance.*

---

### SECTION 4 — DUAL SPOTLIGHT (ClarityAudit + AI Adoption & Enablement)

**SPOTLIGHT A — ClarityAudit**
**Section label:** Signature Service

**Headline**
Most businesses are losing money they don't even know about.

**Body**
Bloated software licenses nobody uses. Manual processes AI could handle in seconds. Projects burning budget without delivering value. Systems duplicated across departments. People spending time on work that should be automated.

We've seen it everywhere — and with AI, there has never been a better moment to find it, fix it, and redirect that investment where it actually matters.

ClarityAudit is our signature diagnostic. We go deep into your operations and technology, identify every layer of waste, and hand you a clear, prioritised plan to recover cost, reduce friction, and fund your next stage of growth.

**3 Callouts:**
- 💸 Find the hidden cost — Surface every drain on your budget, from unused tools to over-resourced processes
- ⚙️ Fix the broken processes — Map, challenge, and redesign the workflows slowing you down
- 🤖 Apply AI where it counts — Targeted automation recommendations with measurable ROI

**CTA:** Discover ClarityAudit →
**Supporting line:** Available as a standalone engagement or as part of a broader Netsparta partnership.

---

**SPOTLIGHT B — AI Adoption & Enablement**
**Section label:** Featured Service

**Headline**
Every business is being told to adopt AI. Most don't know where to start.

**Body**
Leaders feel pressure to act but lack clarity on what's genuinely useful versus what's hype. Operations teams are handed tools without context, training, or a reason to change how they work. The result? AI investment that delivers nothing.

AI Adoption & Enablement is Netsparta's practical guide through the full AI journey. We work with your leadership to cut through the noise and build a clear roadmap — then get hands-on with your operations teams to embed the right tools in a way that actually sticks.

**3 Callouts:**
- 🧭 Cut through the noise — Thousands of AI tools exist. We identify what's genuinely relevant to your business and ignore the rest
- 👥 Bring your people with you — AI adoption fails when people aren't taken on the journey. We work with your teams, not just your tech stack
- 📈 Measure what matters — Every recommendation comes with clear success criteria so you know exactly what good looks like

**CTA:** Explore AI Adoption & Enablement →
**Supporting line:** Aimed at leadership and operations teams ready to make AI work in practice, not just in theory.

---

### SECTION 5 — OUTCOMES STRIP

**Headline:** What Our Clients Actually Get

- 🚀 Faster delivery — AI-assisted development and automation that compresses timelines without cutting corners
- 🧭 Clearer direction — Technology strategy and governance that gives your whole team confidence in the roadmap
- 💰 Lower cost, less waste — ClarityAudit finds the money you didn't know you were leaving on the table
- 🤖 Real AI adoption — The right tools embedded across leadership and operations — not shelfware
- 🤝 A partner, not a vendor — Senior expertise that integrates with your team and stays accountable to your goals

---

### SECTION 6 — SERVICES OVERVIEW

**Section label:** What We Do
**Headline:** Everything your business needs to lead with technology
**Intro:** From a single advisory engagement to a fully embedded technology function — Netsparta delivers across the full spectrum.

| # | Title | One-liner |
|---|---|---|
| 01 | ClarityAudit ⭐ | Find the waste, fund the future — our AI-powered operational and technology diagnostic |
| 02 | AI Adoption & Enablement ⭐ | Practical AI adoption for leadership and operations teams — the right tools, embedded the right way |
| 03 | CTO as a Service | Senior technology leadership, without the full-time hire |
| 04 | AI Automation Development | Intelligent workflows and automation, built and deployed rapidly |
| 05 | Software Governance & DevOps | The controls, standards, and processes your engineering needs |
| 06 | IT Audit & Cost Optimisation | Honest assessment of your technology — what works, what doesn't, what it's costing you |
| 07 | Monitoring & Observability | Know what's happening in your systems before it becomes a problem |
| 08 | AI-First BA & Project Management | Requirements to delivery, faster and smarter with AI-augmented methods |
| 09 | App & Platform Development | Custom applications built to purpose, built to last |
| 10 | Intelligent Dashboards & Data | The right data, presented clearly, so decisions are easier |
| 11 | Technology Outsourcing | Extend your team with trusted, managed technology capability |

**CTA:** Explore All Services →

---

### SECTION 7 — WHY NETSPARTA

**Section label:** Why Us
**Headline:** We've sat in your seat. That's what makes us different.

**Body:**
Netsparta isn't a body shop or a generic consulting firm. Our team brings real-world experience across IT leadership, software delivery, business analysis, and AI implementation — across SportsTech, MedTech, FinTech, and beyond.

We speak business first, technology second. We don't hide behind jargon or sell solutions you don't need. We ask the right questions, tell you what we honestly see, and work with you to build something that lasts.

**3 Differentiators:**
- Practitioners, not theorists — Every advisor and delivery lead has done this before — in real organisations, with real constraints. We bring strategy with substance.
- AI built into everything we do — Not as a buzzword. As a genuine accelerator across strategy, delivery, and operations — including how we run ClarityAudit.
- Outcomes over outputs — We measure ourselves on the difference we make to your business — not the hours we bill or the documents we produce.

---

### SECTION 8 — INDUSTRIES

**Section label:** Where We Work
**Headline:** Deep expertise across the sectors that matter

- SportsTech — From fan engagement platforms to performance data infrastructure
- MedTech — Compliance-aware development and systems that support clinical outcomes
- FinTech — Secure, scalable platforms built for regulatory environments
- Enterprise & SME — Practical technology leadership for businesses at every stage

---

### SECTION 9 — MANIFESTO

"We believe every business deserves access to the kind of technology leadership that used to be reserved for the biggest players."

That's why Netsparta exists. To make senior expertise, intelligent delivery, and honest advice accessible — and to help ambitious organisations stop wasting what they have and start building what they need.

*Strategy. Speed. Substance.*

---

### SECTION 10 — CTA STRIP

**Headline:** Ready to see what's possible?

**Subtext:** Whether you want to start with a ClarityAudit, explore a specific service, or simply have an honest conversation about your technology — we're here.

**CTA:** Start the Conversation
**Supporting line:** No commitment. No jargon. Just a straightforward chat about your technology.

---

### SECTION 11 — FOOTER

**Logo:** NETSPARTA
**Tagline:** Strategy. Speed. Substance.

**Services column:**
ClarityAudit · AI Adoption & Enablement · CTO as a Service · AI Automation · Software Governance · IT Audit · Monitoring · BA & Project Management · App Development · Dashboards & Data · Outsourcing

**Company column:**
About · Industries · Case Studies · Contact

**Get In Touch column:**
Let's Talk · LinkedIn

**Legal:** © 2025 Netsparta Ltd. All rights reserved.

---

## 6. PAGES STATUS TRACKER

| Page | Status |
|---|---|
| Home | ✅ Complete |
| ClarityAudit service page | 🔲 To do |
| AI Adoption & Enablement page | 🔲 To do |
| CTO as a Service page | 🔲 To do |
| AI Automation page | 🔲 To do |
| Software Governance page | 🔲 To do |
| IT Audit page | 🔲 To do |
| Monitoring page | 🔲 To do |
| BA & PM page | 🔲 To do |
| App Development page | 🔲 To do |
| Dashboards & Data page | 🔲 To do |
| Outsourcing page | 🔲 To do |
| About | 🔲 To do |
| Industries (x4) | 🔲 To do |
| Case Studies | 🔲 To do |
| Contact | 🔲 To do |

---

## 7. CURSOR INSTRUCTIONS

When building pages for Netsparta:
- Always reference this file for brand tone, copy, and structure
- Tagline is always: **Strategy. Speed. Substance.**
- ClarityAudit is always the flagship — treat it as #01 in all service lists
- AI Adoption & Enablement is #02 — treat as co-flagship
- Tone: approachable and consultative — never cold, never overly corporate
- No jargon in UI copy — plain English always wins
- Every page should have a CTA that leads to /contact
- Mobile-first responsive design
- Dark theme as primary (see colour direction in Section 1)
- Build all pages as static exports (next export compatible) for Cloudflare Pages

---

## 8. HOSTING & DEPLOYMENT SETUP

### GitHub Repository
- **Username:** satheeshvigneswaran-tech
- **Repository:** netsparta-web
- **Repository URL:** https://github.com/satheeshvigneswaran-tech/netsparta-web
- **Branch:** main
- **Email:** satheesh.vigneswaran@gmail.com

### Stack
| Component | Solution | Cost |
|---|---|---|
| Domain | Hostinger | Already paid |
| Email | Hostinger | Already paid |
| Hosting | Cloudflare Pages | Free |
| Deployment | GitHub → Cloudflare Pages auto-deploy | Free |
| Contact form | Web3Forms | Free |

### How Deployment Works
```
Write/edit code in Cursor
       ↓
Push to GitHub — satheeshvigneswaran-tech/netsparta-web
       ↓
Cloudflare Pages detects the push automatically
       ↓
Builds and deploys in ~60 seconds
       ↓
netsparta.com is live and updated
```

### Git Setup Commands (run once in Cursor terminal)
```bash
git config --global user.email "satheesh.vigneswaran@gmail.com"
git config --global user.name "satheeshvigneswaran-tech"
git remote add origin https://github.com/satheeshvigneswaran-tech/netsparta-web.git
git push -u origin main
```

### One-Time Cloudflare Pages Setup (do once, never again)
1. Create free account at cloudflare.com
2. Go to Pages → Connect to Git → Connect to GitHub
3. Select repository: `satheeshvigneswaran-tech/netsparta-web`
4. Set framework: Next.js (static export)
5. Set build command: `next build`
6. Set output directory: `out`
7. Go to Hostinger DNS → update A record to Cloudflare IP
8. Add custom domain `netsparta.com` in Cloudflare Pages dashboard
9. Done — all future pushes to `main` auto-deploy

### next.config.js Required Setting
```js
// Add this to next.config.js so Cloudflare Pages works correctly
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true }
}
module.exports = nextConfig
```

---

## 9. CONTACT PAGE SETUP

### Form Solution: Web3Forms (Free, no submission limits)
Website: web3forms.com

### What the Contact Page Collects
- Full name (required)
- Email address (required)
- Company name (optional)
- Service they're interested in (dropdown — see list below)
- Message / enquiry (required)
- Submit button → email delivered to Hostinger inbox

### Service Dropdown Options
- ClarityAudit
- AI Adoption & Enablement
- CTO as a Service
- AI Automation Development
- Software Governance & DevOps
- IT Audit & Cost Optimisation
- Monitoring & Observability
- BA & Project Management
- App & Platform Development
- Dashboards & Data
- Technology Outsourcing
- Not sure — I'd like to talk it through

### Web3Forms Integration (give to Cursor)
```html
<!-- 1. Sign up free at web3forms.com and get your Access Key -->
<!-- 2. Use this form structure in the Contact page component -->

<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
  <input type="hidden" name="subject" value="New Enquiry — Netsparta" />
  <input type="hidden" name="redirect" value="https://netsparta.com/thank-you" />

  <input type="text" name="name" placeholder="Full Name" required />
  <input type="email" name="email" placeholder="Email Address" required />
  <input type="text" name="company" placeholder="Company Name" />
  <select name="service">
    <option>ClarityAudit</option>
    <option>AI Adoption & Enablement</option>
    <option>CTO as a Service</option>
    <!-- add remaining services -->
    <option>Not sure — I'd like to talk it through</option>
  </select>
  <textarea name="message" placeholder="Tell us about your challenge" required></textarea>
  <button type="submit">Send Enquiry</button>
</form>
```

### After Submission
- User is redirected to /thank-you page
- Email lands directly in Hostinger inbox
- No backend, no server, no cost

### Thank You Page Content
**Headline:** Thanks — we'll be in touch shortly.
**Body:** We've received your enquiry and will respond within one business day. In the meantime, feel free to explore our services or connect with us on LinkedIn.
**CTA:** Back to Home

