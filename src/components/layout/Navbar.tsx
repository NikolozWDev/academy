'use client'

import { useState } from 'react'
import Link from 'next/link'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobileMenu = () => setMobileOpen(false)

  return (
    <>
      <nav className="nav" id="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <img
              src="https://framerusercontent.com/images/NBWxw5YWqAlQQD33mLzRhc3OOUg.png?width=471&height=117"
              alt="Edutech"
              width="81"
              height="20"
            />
          </Link>
          <div className="nav-links">
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <Link href="/#features" className="nav-link">
              Features
            </Link>
            <Link href="/#pricing" className="nav-link">
              Pricing
            </Link>
            <div className="nav-dropdown nav-link">
              <Link href="/legal">Pages</Link>
              <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
                <path d="m213.66 101.66-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 164.69l74.34-74.35a8 8 0 0 1 11.32 11.32Z" />
              </svg>
            </div>
          </div>
          <div className="nav-actions">
            <Link href="/tutorials" className="btn btn-pill btn-ghost">
              Tutorials
            </Link>
            <Link href="/book-call" className="btn btn-pill btn-primary">
              Book a call
            </Link>
          </div>
          <button
            className={`mobile-menu-btn ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <Link href="/about" onClick={closeMobileMenu}>
          About
        </Link>
        <Link href="/blog" onClick={closeMobileMenu}>
          Blog
        </Link>
        <Link href="/#features" onClick={closeMobileMenu}>
          Features
        </Link>
        <Link href="/#pricing" onClick={closeMobileMenu}>
          Pricing
        </Link>
        <Link href="/legal" onClick={closeMobileMenu}>
          Pages
        </Link>
        <Link href="/tutorials" onClick={closeMobileMenu}>
          Tutorials
        </Link>
        <Link
          href="/book-call"
          className="btn btn-pill btn-primary"
          style={{ display: 'inline-flex', marginTop: 8 }}
          onClick={closeMobileMenu}
        >
          Book a call
        </Link>
      </div>
    </>
  )
}
