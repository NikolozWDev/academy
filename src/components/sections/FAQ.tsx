'use client'
import { useState } from 'react'

const faqs = [
  {
    q: "Why wouldn't I just hire a full-time designer?",
    a: "Good question. For starters, the annual cost of a full-time senior-level designer is around $100,000 plus benefits. (And trying to find one available is a hassle in itself.) Aside from that, you may not always have enough work to keep them busy all the time, so you're stuck paying for time you aren't able to utilize. With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them.",
  },
  {
    q: 'Is there a limit to how many requests I can have?',
    a: "Nope! When we say unlimited, we mean unlimited. Once you've susbcribed, you can add as many design requests to your queue as you'd like and they'll be delivered one by one.",
  },
  {
    q: 'How fast will I receive my designs?',
    a: 'On average, most requests are completed in 2-3 days. However, more complex requests can take longer.',
  },
  {
    q: 'Who are the designers?',
    a: "You'll be working directly with me, Hamza Ehsan, founder of Limitless. However, special requests such as animations or custom illustrations are provided by partner designers.",
  },
  {
    q: "What if I don't like the design?",
    a: "No worries! We'll continue to revise the design until you're 100% satisfied.",
  },
  {
    q: "Are there any refunds if I don't like the service?",
    a: 'Due to the high-quality nature of the work, there will be no refunds issued.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="faq-section" id="faq">
      <div className="section-container">
        <div className="faq-list scroll-reveal">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.q}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 0v12M0 6h12" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
