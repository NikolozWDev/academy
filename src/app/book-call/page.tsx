'use client'

import { useState, FormEvent } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

export default function BookCallPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    try {
      const res = await fetch('/api/book-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="book-header">
        <div className="section-container">
          <h1>Book a <i className="serif">call.</i></h1>
          <p>Ready to take the next step? Let&apos;s schedule a call…</p>
          <Link href="/#pricing" className="btn btn-pill btn-primary">View Pricing</Link>
        </div>
      </section>

      <section className="book-form-section book-last-block">
        <div className="section-container">
          <form className="book-form" onSubmit={handleSubmit}>
            {/* … same inputs, but add the status feedback */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" placeholder="David" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder="Kapanadze" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="David@company.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="website">Website</label>
              <input type="url" id="website" name="website" placeholder="www.company.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Tell us about your business?</label>
              <textarea id="message" name="message" rows={4} placeholder="What are your goals…" required></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-pill btn-primary btn-lg form-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Book a call'}
            </button>
            {status === 'success' && <p className="text-green-500 mt-2">Message sent successfully!</p>}
            {status === 'error' && <p className="text-red-500 mt-2">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </section>
    </>
  )
}