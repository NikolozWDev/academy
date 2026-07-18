// src/app/layout.tsx
import '@/styles/globals.css'
import Script from 'next/script'
import { Navbar } from '@/components/layout/Navbar'
import { ConditionalFooter } from '@/components/shared/ConditionalFooter'
import { LenisProvider } from '@/components/shared/LenisProvider'
import { ScrollRevealProvider } from '@/components/shared/ScrollRevealProvider'
import { PageTransitionProvider } from '@/components/shared/PageTransitionProvider'
import { ScrollToTop } from '@/components/shared/ScrollToTop'

export const metadata = {
  title: {
    template: '%s — Edutech',
    default: 'Edutech — Tech Education for Professionals & Teams',
  },
  description: 'Edutech is a global tech academy helping corporates and professionals upskill…',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <div className="body-shield" />
        <LenisProvider>
          <ScrollRevealProvider>
            <PageTransitionProvider>
              <ScrollToTop />
              <Navbar />
              {children}
              <ConditionalFooter />
            </PageTransitionProvider>
          </ScrollRevealProvider>
        </LenisProvider>
        <Script
          src="https://unpkg.com/lenis@1.3.11/dist/lenis.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  )
}
