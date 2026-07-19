'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Variants } from 'framer-motion'

const footerItems: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

export function Footer() {
  return (
    <footer className="footer-cta" id="footer">
      <div className="footer-bg-video">
        <video
          className="footer-vid"
          src="/secondone.mp4"
          loop
          preload="auto"
          muted
          playsInline
          autoPlay
        />
      </div>
      <motion.div
        className="footer-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="status-badge" custom={0} variants={footerItems}>
          <span className="status-dot pulse"></span>
          <span>Hurry, only 3 spots left.</span>
        </motion.div>
        <motion.div className="footer-logo" custom={1} variants={footerItems}>
          <h2 className="footer-heading">
            Are you <i className="serif">ready?</i>
          </h2>
        </motion.div>
        <motion.p className="footer-sub" custom={2} variants={footerItems}>
          This could be the start of something big.
        </motion.p>
        <motion.div className="footer-btns" custom={3} variants={footerItems}>
          <Link href="/book-call" className="btn btn-pill btn-primary btn-lg">
            Book a call
          </Link>
          <Link href="/#pricing" className="btn btn-pill btn-ghost btn-lg">
            See plans
          </Link>
        </motion.div>
        <motion.div className="footer-links" custom={4} variants={footerItems}>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/#features">Features</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/legal">Legal</Link>
        </motion.div>
      </motion.div>
      <div className="footer-gradient"></div>
    </footer>
  )
}
