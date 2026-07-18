// src/hooks/useFAQ.ts
import { useState, useCallback } from 'react'

export function useFAQ(_totalItems?: number) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = useCallback(
    (index: number) => setOpenIndex((prev) => (prev === index ? null : index)),
    []
  )
  return { openIndex, toggle }
}
