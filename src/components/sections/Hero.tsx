export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="section-container hero-container">
        <div className="status-badge animate-in">
          <span className="status-dot"></span>
          <span className="hero-text">Hurry, your and our time is limited.</span>
        </div>
        <h1 className="hero-title animate-in-stagger">
          Your Custom Tech Talent{' '}
          <i className="serif">
            Pipe<span className="dim dima">line</span>
          </i>
        </h1>
        <p className="hero-sub animate-in-stagger">
          We upskill your teams and train top-tier market talent to fit your exact needs
        </p>
        <div className="hero-btns animate-in-stagger">
          <a
            href="https://cal.com"
            target="_blank"
            rel="noopener"
            className="btn btn-pill btn-primary btn-lg"
          >
            Partner With Us
          </a>
          <a href="#pricing" className="btn btn-pill btn-ghost btn-lg">
            Explore Corporate Solutions
          </a>
        </div>
      </div>
    </section>
  )
}
