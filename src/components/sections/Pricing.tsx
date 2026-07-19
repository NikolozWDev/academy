'use client'
import { useState } from 'react'
import { Marquee } from '@/components/shared/Marquee'
import { TRUST_ITEMS } from '@/constants/trustLogos'

export function Pricing() {
  const [autstaffing, setAutstaffing] = useState(false)

  return (
    <section className="pricing-section" id="pricing">
      <div className="section-container">
        <div className="section-header scroll-reveal">
          <div className="status-badge">
            <span>Pricing</span>
          </div>
          <h2 className="section-title">
            Enterprise solutions tailored <br />
            to your <i className="serif">Budget</i>
          </h2>
          <p className="section-sub">
            Invest in a sustainable talent pipeline instead of paying exorbitant recruitment fees
          </p>
        </div>
        <div className="pricing-card scroll-reveal">
          <video
            className="pricing-bg-video"
            src="/thirdone.mp4"
            loop
            preload="auto"
            muted
            playsInline
            autoPlay
          />
          <div className="pricing-header">
            <div className="status-badge">
              <span className="status-dot"></span>
              <span>Enterprise Partnership</span>
            </div>
          </div>
          <div className="pricing-btns">
            <a
              href="https://stripe.com"
              target="_blank"
              rel="noopener"
              className="btn btn-pill btn-primary btn-lg"
            >
              Subscribe
            </a>
            <a href="/book-call" className="btn btn-pill btn-ghost btn-lg">
              Book a call
            </a>
          </div>
          <div className="pricing-toggle">
            <div
              className={`toggle-switch ${autstaffing ? 'active' : ''}`}
              onClick={() => setAutstaffing(!autstaffing)}
            ></div>
            <span>Talent Autstaffing</span>
          </div>
          <div className="pricing-features">
            <div className="pricing-feature">
              <i className="spark-icon">✦</i> Dedicated Corporate Account Manager
            </div>
            <div className="pricing-feature">
              <i className="spark-icon">✦</i> Fully customized training syllabus
            </div>
            <div className="pricing-feature">
              <i className="spark-icon">✦</i> Trainee performance &amp; ROI reporting
            </div>
            <div className="pricing-feature">
              <i className="spark-icon">✦</i> Pre-screened talent acquisition
            </div>
            <div className="pricing-feature">
              <i className="spark-icon">✦</i> Flexible delivery (On-site or Live Online)
            </div>
            <div className="pricing-feature">
              <i className="spark-icon">✦</i> Unlimited usage of content
            </div>
            <div className="pricing-feature">
              <i className="spark-icon">✦</i> Practical mentoring
            </div>
          </div>
        </div>
        <div className="trusted-logos">
          <p className="logos-label">Designs trusted by companies like:</p>
          <Marquee id="trustMarquee" items={TRUST_ITEMS} />
        </div>
      </div>
    </section>
  )
}
