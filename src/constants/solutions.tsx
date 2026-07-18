// src/constants/solutions.tsx
import React from 'react'

const solIcons: Record<string, string> = {
  custom: '<svg ...>...</svg>',
  reskill: '<svg ...>...</svg>',
  // ...
}

function SolutionCard({ icon, label }: { icon: string; label: string }) {
  return (
    <div
      style={{
        flexShrink: 0,
        padding: 24,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 24,
        background: 'var(--bg-light)',
        height: 78,
      }}
    >
      <div
        style={{ width: 30, height: 30, flexShrink: 0 }}
        dangerouslySetInnerHTML={{ __html: icon }}
      />
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 500,
          fontSize: 28,
          letterSpacing: '-0.02em',
          color: 'var(--fg)',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
    </div>
  )
}

export const SOLUTIONS_1 = [
  { icon: solIcons.custom, label: 'Custom Curriculum' },
  { icon: solIcons.reskill, label: 'Reskilling Cohorts' },
  { icon: solIcons.upskill, label: 'Employee Upskilling' },
  { icon: solIcons.corporate, label: 'Corporate Training' },
].map((item) => <SolutionCard key={item.label} icon={item.icon} label={item.label} />)

export const SOLUTIONS_2 = [
  { icon: solIcons.gaas, label: 'GaaS Development' },
  { icon: solIcons.ai, label: 'AI-Driven Workflows' },
  { icon: solIcons.pm, label: 'IT Project Management' },
  { icon: solIcons.aitransform, label: 'AI Transformation' },
  { icon: solIcons.onboarding, label: 'Tech Onboarding' },
].map((item) => <SolutionCard key={item.label} icon={item.icon} label={item.label} />)
