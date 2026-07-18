import { useEffect } from 'react'

export function useMarquee(
  containerId: string,
  items: string[],
  options?: { gap?: number; height?: number }
) {
  useEffect(() => {
    const container = document.getElementById(containerId)
    if (!container) return
    const track = document.createElement('div')
    track.className = 'marquee-track'
    track.style.cssText = `gap:${options?.gap ?? 64}px;height:${options?.height ?? 55}px;align-items:center`
    const itemsHtml = items.map((item) => item).join('')
    track.innerHTML = itemsHtml + itemsHtml
    container.innerHTML = ''
    container.appendChild(track)
  }, [containerId, items, options])
}
