import { Marquee } from '@/components/shared/Marquee'
import { LOGO_ITEMS } from '@/constants/logos'

export function Partners() {
  return (
    <section className="logos-section" id="logos">
      <div className="section-container">
        <p className="logos-label">Our programmes are featured on:</p>
        <Marquee id="logosMarquee" items={LOGO_ITEMS} />
      </div>
    </section>
  )
}
