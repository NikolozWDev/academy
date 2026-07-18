// src/components/shared/Marquee.tsx
'use client'
import React, { useRef, useEffect } from 'react'

interface MarqueeProps {
  id?: string
  items: React.ReactNode[]
  gap?: number
  height?: number
  className?: string
}

export function Marquee({ id, items, gap = 64, height = 55, className = '' }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.gap = `${gap}px`
      trackRef.current.style.height = `${height}px`
      trackRef.current.style.alignItems = 'center'
    }
  }, [gap, height])

  return (
    <div className={`marquee ${className}`} id={id}>
      <div className="marquee-track" ref={trackRef}>
        {items}
        {items}
      </div>
    </div>
  )
}
