export function VideoSection() {
  return (
    <section className="video-section" id="video">
      <div className="section-container">
        <div className="video-wrapper scroll-reveal">
          <video src="/firstone.mp4" loop preload="auto" muted playsInline autoPlay />
          <div className="video-overlay">
            <h2 className="video-title">
              <span className="sans">Tech</span> Bootcamps
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
