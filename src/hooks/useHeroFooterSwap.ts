'use client'
import { useEffect, useRef } from 'react'

export function useHeroFooterSwap() {
  const handlerRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    const hero = document.querySelector('.hero') as HTMLElement | null
    const footer = document.querySelector('.footer-cta') as HTMLElement | null
    const faq = document.querySelector('.faq-section') as HTMLElement | null
    if (!hero || !footer || !faq) return

    const onScroll = () => {
      const swap = faq.getBoundingClientRect().top < window.innerHeight * 0.3
      hero.style.zIndex = swap ? '1' : '3'
      hero.style.pointerEvents = swap ? 'none' : 'auto'
      footer.style.zIndex = swap ? '3' : '1'
      footer.style.pointerEvents = swap ? 'auto' : 'none'
    }
    window.addEventListener('scroll', onScroll)
    handlerRef.current = onScroll

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (hero) {
        hero.style.zIndex = ''
        hero.style.pointerEvents = ''
      }
      if (footer) {
        footer.style.zIndex = ''
        footer.style.pointerEvents = ''
      }
    }
  }, [])
}
