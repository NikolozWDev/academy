'use client'

import { useEffect } from 'react'

interface LenisInstance {
  raf: (time: number) => void
  destroy: () => void
}

declare global {
  interface Window {
    __lenis?: LenisInstance
    Lenis?: new (config: { duration: number; smoothWheel: boolean }) => LenisInstance
  }
}

export function useLenis() {
  useEffect(() => {
    const LenisClass = window.Lenis
    if (!LenisClass) return

    const lenis = new LenisClass({ duration: 1.5, smoothWheel: true })
    window.__lenis = lenis

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      window.__lenis = undefined
    }
  }, [])
}
