'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function useScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll('.scroll-reveal')

      elements.forEach((el) => {
        el.classList.remove('visible')
      })

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      )

      elements.forEach((el) => observer.observe(el))

      return () => observer.disconnect()
    }, 50)

    return () => clearTimeout(timeout)
  }, [pathname])
}
