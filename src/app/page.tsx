'use client'
import { useHeroFooterSwap } from '@/hooks/useHeroFooterSwap'
import { Hero } from '@/components/sections/Hero'
import { VideoSection } from '@/components/sections/VideoSection'
import { Partners } from '@/components/sections/Partners'
import { Testimonials } from '@/components/sections/Testimonials'
import { Process } from '@/components/sections/Process'
import { WorkMarquee } from '@/components/sections/WorkMarquee'
import { Benefits } from '@/components/sections/Benefits'
import { Features } from '@/components/sections/Features'
import { Solution } from '@/components/sections/Solution'
import { Pricing } from '@/components/sections/Pricing'
import { TutorialsCard } from '@/components/sections/TutorialsCard'
import { FAQ } from '@/components/sections/FAQ'

export default function HomePage() {
  useHeroFooterSwap()
  return (
    <main className="index-page">
      <Hero />
      <VideoSection />
      <Partners />
      <Testimonials />
      <Process />
      <WorkMarquee />
      <Benefits />
      <Features />
      <Solution />
      <Pricing />
      <TutorialsCard />
      <FAQ />
    </main>
  )
}
