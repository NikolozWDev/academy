'use client'

import { useState } from 'react'
import Link from 'next/link'

export function MobileMenuButton() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <>
      {/* Hamburger button */}
      <button
        className={`mobile-menu-btn ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobileMenu"
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile menu panel */}
      <div className={`mobile-menu ${open ? 'open' : ''}`} id="mobileMenu">
        <Link href="/about" onClick={close}>
          About
        </Link>
        <Link href="/blog" onClick={close}>
          Blog
        </Link>
        <Link href="/#benefits" onClick={close}>
          Features
        </Link>
        <Link href="/#pricing" onClick={close}>
          Pricing
        </Link>
        <Link href="/legal" onClick={close}>
          Pages
        </Link>
        <Link href="/tutorials" onClick={close}>
          Tutorials
        </Link>
        <Link
          href="/book-call"
          className="btn btn-pill btn-primary"
          style={{ display: 'inline-flex', marginTop: 8 }}
          onClick={close}
        >
          Book a call
        </Link>
      </div>
    </>
  )
}
