import { Marquee } from '@/components/shared/Marquee'
import { WORK_MOCKUPS_1, WORK_MOCKUPS_2, WORK_MOCKUPS_3 } from '@/constants/workMockups'

export function WorkMarquee() {
  return (
    <section className="work-section" id="work">
      <Marquee
        id="workMarquee1"
        items={WORK_MOCKUPS_1}
        gap={24}
        height={300}
        className="skew-marquee"
      />
      <Marquee
        id="workMarquee2"
        items={WORK_MOCKUPS_2}
        gap={24}
        height={300}
        className="skew-marquee"
      />
      <Marquee
        id="workMarquee3"
        items={WORK_MOCKUPS_3}
        gap={24}
        height={300}
        className="skew-marquee"
      />
    </section>
  )
}
