// src/components/icons/FeatureIcon.tsx
import React from 'react'

const featureSvgs = [
  '<svg width="72" height="72" viewBox="0 0 72 72" fill="none"><rect x="14" y="14" width="44" height="44" rx="8" stroke="white" stroke-width="1.5"/><path d="M26 36l7 7 13-13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  '<svg width="72" height="72" viewBox="0 0 72 72" fill="none"><path d="M36 8v56M8 36h56" stroke="white" stroke-width="1.5" stroke-linecap="round"/><circle cx="36" cy="36" r="12" stroke="white" stroke-width="1.5"/></svg>',
  '<svg width="72" height="72" viewBox="0 0 72 72" fill="none"><path d="M14 14h44v44H14z" stroke="white" stroke-width="1.5" stroke-dasharray="4 4"/><circle cx="36" cy="36" r="10" stroke="white" stroke-width="1.5"/></svg>',
  '<svg width="72" height="72" viewBox="0 0 72 72" fill="none"><rect x="10" y="20" width="52" height="32" rx="4" stroke="white" stroke-width="1.5"/><path d="M10 28h52" stroke="white" stroke-width="1.5"/></svg>',
  '<svg width="72" height="72" viewBox="0 0 72 72" fill="none"><circle cx="36" cy="18" r="8" stroke="white" stroke-width="1.5"/><circle cx="20" cy="46" r="8" stroke="white" stroke-width="1.5"/><circle cx="52" cy="46" r="8" stroke="white" stroke-width="1.5"/></svg>',
  '<svg width="72" height="72" viewBox="0 0 72 72" fill="none"><circle cx="36" cy="36" r="20" stroke="white" stroke-width="1.5"/><path d="M36 16v10M36 46v10M16 36h10M46 36h10" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>',
]

export function FeatureIcon({ index }: { index: number }) {
  return <div className="feature-icon" dangerouslySetInnerHTML={{ __html: featureSvgs[index] }} />
}
