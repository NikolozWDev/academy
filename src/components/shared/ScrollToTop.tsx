// src/components/shared/ScrollToTop.tsx
'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    const lenis = window.__lenis
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}
