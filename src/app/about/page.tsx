import type { Metadata } from 'next'
import { Marquee } from '@/components/shared/Marquee'
import { TRUST_ITEMS } from '@/constants/trustLogos'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn how Edutech helps you make a lasting impact online with custom digital solutions and professional training.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <img src="/goodimage.jpg" alt="About Edutech" />
        </div>
        <div className="about-hero-content">
          <h1>
            Helping you make a <i className="serif">lasting</i> impact online.
          </h1>
          <p>
            We&apos;re here to craft more than just a website—our mission is to help you build a
            digital experience that connects, engages, and drives real results for your business.
          </p>
        </div>
      </section>

      {/* Trusted Logos */}
      <section className="trusted-logos about-trust">
        <div className="section-container">
          <p className="logos-label">Our designs are featured on:</p>
          <Marquee id="trustMarquee" items={TRUST_ITEMS} />
        </div>
      </section>

      {/* Professional Note */}
      <section className="about-content-block">
        <div className="section-container about-content-grid">
          <div className="about-content-image">
            <img src="/goodimage2.png" alt="Professional" />
          </div>
          <div className="about-content-text">
            <h2>
              On a <i className="serif">professional</i> note
            </h2>
            <div className="about-content-item">
              <h3>We&apos;re passionate about digital excellence</h3>
              <p>
                Our team is driven by a shared mission to create visually stunning, high-performing
                websites. We stay ahead of trends and use cutting-edge techniques to help your brand
                stand out.
              </p>
            </div>
            <div className="about-content-item">
              <h3>Quality at the forefront</h3>
              <p>
                Every project is crafted with attention to detail and a commitment to deliver
                exceptional results that not only look great but also drive performance.
              </p>
            </div>
            <div className="about-content-item">
              <h3>Focus on measurable impact</h3>
              <p>
                We design strategies that prioritize growth. Our focus is on delivering tangible,
                measurable results that help your business thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="about-content-block about-content-block-alt about-last-block">
        <div className="section-container about-content-grid about-content-grid-reverse">
          <div className="about-content-image">
            <img src="/goodimage3.png" alt="Personal" />
          </div>
          <div className="about-content-text">
            <h2>
              On a <i className="serif">personal</i> note
            </h2>
            <div className="about-content-item">
              <h3>We work hard and have fun</h3>
              <p>
                Our workspace thrives on energy and laughter, whether we&apos;re brainstorming new
                ideas or just sharing stories. We find that staying lighthearted keeps our
                creativity flowing.
              </p>
            </div>
            <div className="about-content-item">
              <h3>We&apos;re a close-knit team</h3>
              <p>
                We&apos;re more than colleagues—we&apos;re a family. Whether we&apos;re tackling a
                big project or just supporting each other through the day, we always have each
                other&apos;s backs.
              </p>
            </div>
            <div className="about-content-item">
              <h3>Celebrating individuality</h3>
              <p>
                Everyone here brings something unique. Whether it&apos;s a quirky skill or an
                offbeat hobby, we embrace what makes each of us different—it&apos;s what keeps
                things fresh and exciting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
