// src/components/sections/Solution.tsx
import { Marquee } from '@/components/shared/Marquee'
import { SOLUTIONS_1, SOLUTIONS_2 } from '@/constants/solutions'

export function Solution() {
  return (
    <section className="solution-section" id="categories">
      <div className="section-container">
        <div className="section-header scroll-reveal">
          <div className="status-badge">
            <span>Solution</span>
          </div>
          <h2 className="section-title">
            All your <i className="serif">Skills Capability Matrix</i> needs.
          </h2>
          <p className="section-sub">
            We use a comprehensive Skills Capability Matrix as the first step in our corporate
            partnerships. We assess your baseline to build a custom training curriculum and
            Hire-Train-Deploy pipeline that perfectly aligns with your strategic needs.
          </p>
        </div>
        <Marquee id="solutionsMarquee1" items={SOLUTIONS_1} gap={24} height={78} />
        <Marquee id="solutionsMarquee2" items={SOLUTIONS_2} gap={24} height={78} />
      </div>
    </section>
  )
}
