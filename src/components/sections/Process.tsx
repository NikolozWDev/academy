import { ProcessIcon } from '@/components/icons/ProcessIcon'

export function Process() {
  return (
    <section className="process-section" id="process">
      <div className="section-container">
        <div className="section-header scroll-reveal">
          <div className="status-badge">
            <span>Process</span>
          </div>
          <h2 className="section-title">
            Custom talent solutions, <br />
            built for your <i className="serif">Business</i>
          </h2>
          <p className="section-sub">
            Begin your learning journey with structured, practical training
          </p>
        </div>
        <div className="process-grid">
          <div className="process-card scroll-reveal">
            <ProcessIcon index={1} />
            <h3>Assess & Recruit</h3>
            <p>
              We identify your companys skill gaps. Want to train existing staff? We build the
              curriculum. Need new talent? We source the best candidates from the market
            </p>
          </div>
          <div className="process-card scroll-reveal">
            <ProcessIcon index={2} />
            <h3>Train & Upskill</h3>
            <p>
              We run specialized training cohorts led by industry experts. Your future or current
              employees learn your specific tech stack through hands-on, project-based labs
            </p>
          </div>
          <div className="process-card scroll-reveal">
            <ProcessIcon index={3} />
            <h3>Deploy & Scale</h3>
            <p>
              Integrate high-performing, fully-trained tech professionals directly into your
              workforce, ready to make an immediate impact from day one
            </p>
          </div>
        </div>
        <div className="section-cta scroll-reveal">
          <a
            href="https://calendly.com/..."
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
