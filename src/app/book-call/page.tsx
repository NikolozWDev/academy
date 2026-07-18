import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Book a Call',
  description:
    'Schedule a call with Edutech to discuss how we can help your business grow with custom training solutions.',
}

export default function BookCallPage() {
  return (
    <>
      {/* Header */}
      <section className="book-header">
        <div className="section-container">
          <h1>
            Book a <i className="serif">call.</i>
          </h1>
          <p>
            Ready to take the next step? Let&apos;s schedule a call to discuss how we can help your
            business grow and succeed online.
          </p>
          <Link href="/#pricing" className="btn btn-pill btn-primary">
            View Pricing
          </Link>
        </div>
      </section>

      {/* Form */}
      <section className="book-form-section book-last-block">
        <div className="section-container">
          <form className="book-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" placeholder="David" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" placeholder="Kapanadze" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="David@company.com" />
            </div>
            <div className="form-group">
              <label htmlFor="website">Website</label>
              <input type="url" id="website" placeholder="www.company.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Tell us about your business?</label>
              <textarea
                id="message"
                rows={4}
                placeholder="What are your goals, how can we help?"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-pill btn-primary btn-lg form-submit">
              Book a call
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
