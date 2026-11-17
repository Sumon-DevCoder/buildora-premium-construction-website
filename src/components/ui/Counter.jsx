import { useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { formatNumber } from '@/utils/format'

const DURATION_MS = 1200
const easeOutCubic = (progress) => 1 - (1 - progress) ** 3

/** Counts up to `value` once, the first time it scrolls into view. */
export default function Counter({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const reduceMotion = useReducedMotion()
  const { lang } = useLanguage()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!inView || reduceMotion) return undefined

    let frame
    const startedAt = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startedAt) / DURATION_MS, 1)
      setCurrent(Math.round(value * easeOutCubic(progress)))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, reduceMotion, value])

  const shown = reduceMotion ? value : current

  // The real value is exposed to assistive tech; the animated one is visual only.
  return (
    <span ref={ref}>
      <span aria-hidden="true">{formatNumber(shown, lang)}</span>
      <span className="sr-only">{formatNumber(value, lang)}</span>
    </span>
  )
}
