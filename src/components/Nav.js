'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav__inner">
        <Link href="/" className="nav__logo" onClick={() => setOpen(false)}>
          <Image src="/logo-full.gif" alt="Netsparta" width={120} height={28} style={{ height: 28, width: 'auto' }} unoptimized />
        </Link>

        <ul className={`nav__links${open ? ' open' : ''}`}>
          <li><Link href="/" className="nav__link" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link href="/services" className="nav__link" onClick={() => setOpen(false)}>Services</Link></li>
          <li><Link href="/about" className="nav__link" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link href="/industries" className="nav__link" onClick={() => setOpen(false)}>Industries</Link></li>
          <li><Link href="/case-studies" className="nav__link" onClick={() => setOpen(false)}>Case Studies</Link></li>
        </ul>

        <Link href="/contact" className="nav__cta">Let's Talk</Link>

        <button
          className={`nav__burger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
