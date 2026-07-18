// src/components/sections/Features.tsx
import { FeatureIcon } from '@/components/icons/FeatureIcon'

export function Features() {
  const features = [
    {
      iconIndex: 0,
      title: 'Hire-Train-Deploy',
      text: 'We recruit top talent, train them in your required technologies, and deliver job-ready professionals directly to your teams',
    },
    {
      iconIndex: 1,
      title: 'Custom Curriculum',
      text: 'No off-the-shelf courses. We tailor our training pathways to match your proprietary workflows and tech stack',
    },
    {
      iconIndex: 2,
      title: 'Rigorous Vetting',
      text: 'Save thousands of hours on interviews. We heavily screen our market recruits for aptitude, attitude, and technical baseline',
    },
    {
      iconIndex: 3,
      title: 'Real-World Business Labs',
      text: 'Training is grounded in reality. Employees work on projects simulating your actual business challenges',
    },
    {
      iconIndex: 4,
      title: 'Scalable Cohorts',
      text: 'Whether you need to upskill a specialized team of 5 or onboard 50 new developers, our training scales with your enterprise',
    },
    {
      iconIndex: 5,
      title: 'Expert Practitioners',
      text: 'Your teams are taught by active industry leaders, ensuring they learn modern best practices, not outdated theory',
    },
  ]

  return (
    <section className="features-section" id="features">
      <div className="section-container">
        <div className="section-header scroll-reveal">
          <div className="status-badge">
            <span>Features</span>
          </div>
          <h2 className="section-title">
            Reasons you will <i className="serif">Collaborate </i>us.
          </h2>
          <p className="section-sub">
            Once you try Edutech, you&apos;ll never go anywhere else for training. Seriously.
          </p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card scroll-reveal">
              <FeatureIcon index={f.iconIndex} />
              <h4>{f.title}</h4>
              <p className="features-text">{f.text}</p>
            </div>
          ))}
        </div>
        <div className="section-cta scroll-reveal">
          <a
            href="https://cal.com"
            target="_blank"
            rel="noopener"
            className="btn btn-pill btn-primary btn-lg"
          >
            Book a 15-min call
          </a>
        </div>
      </div>
    </section>
  )
}
