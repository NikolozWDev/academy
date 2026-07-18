export function TutorialsCard() {
  return (
    <section className="tutorials-section" id="tutorials">
      <div className="section-container">
        <div className="tutorials-card scroll-reveal">
          <div className="tutorials-content">
            <h2 className="tutorials-title">
              <i className="serif">Limit</i>
              <i className="serif dim">less</i>{' '}
              <span style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}>
                Tutorials
              </span>
            </h2>
            <p className="tutorials-desc">
              Limitless comes with a complimentary 8-part video tutorial series to help you get set
              up and customise your template.
            </p>
            <div className="tutorials-btns">
              <a
                href="https://www.hxmzaehsan.com/templates/limitless"
                target="_blank"
                rel="noopener"
                className="btn btn-pill btn-primary asd"
              >
                Buy template
              </a>
              <a href="/tutorials" className="btn btn-pill btn-ghost asd">
                See tutorials
              </a>
            </div>
          </div>
          <video
            className="tutorials-video"
            src="https://limitless-framer-template.s3.us-east-005.backblazeb2.com/Limitless+Tutorial+Preview+(Square).mp4"
            loop
            preload="auto"
            muted
            playsInline
            autoPlay
          />
        </div>
      </div>
    </section>
  )
}
