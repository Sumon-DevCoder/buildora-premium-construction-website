import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { cn } from '@/utils/cn'
import { formatNumber } from '@/utils/format'

/** Smooth ease-out cubic for realistic, satisfying acceleration and deceleration */
const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3)

/**
 * Animated counter that counts from 0 up to `value` once it enters the viewport.
 * Supports numbers, Bengali digits, custom suffix (e.g. '+', '%'), and custom duration.
 */
export default function Counter({
  value = 0,
  suffix = '',
  prefix = '',
  duration = 1600,
  className,
}) {
  const ref = useRef(null)
  const { lang } = useLanguage()
  const [current, setCurrent] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  const target = typeof value === 'number' ? value : Number(value) || 0

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Trigger when 10% of the element is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasStarted || target === 0) {
      if (target === 0) setCurrent(0)
      return
    }

    let frameId
    const startTime = performance.now()

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutCubic(progress)
      const nextValue = Math.round(target * easedProgress)

      setCurrent(nextValue)

      if (progress < 1) {
        frameId = requestAnimationFrame(updateCounter)
      } else {
        setCurrent(target)
      }
    }

    frameId = requestAnimationFrame(updateCounter)
    return () => cancelAnimationFrame(frameId)
  }, [hasStarted, target, duration])

  return (
    <span ref={ref} className={cn('relative', className ?? 'inline-block tabular-nums')}>
      <span aria-hidden="true">
        {prefix}
        {formatNumber(hasStarted ? current : 0, lang)}
        {suffix}
      </span>
      <span className="sr-only">
        {prefix}
        {formatNumber(target, lang)}
        {suffix}
      </span>
    </span>
  )
}
