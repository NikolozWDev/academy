'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function useScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])
}
