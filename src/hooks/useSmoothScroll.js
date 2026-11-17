import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Smooth wheel scrolling on desktop only (README 3.4 / 3.9): phones keep
 * native scrolling, and visitors who prefer reduced motion are left alone.
 * Also resets the scroll position when the route changes.
 */
export function useSmoothScroll() {
  const lenisRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const desktopPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!desktopPointer || reduceMotion) return undefined

    let cancelled = false

    import('lenis').then(({ default: Lenis }) => {
      if (cancelled) return
      lenisRef.current = new Lenis({ autoRaf: true, duration: 1 })
    })

    return () => {
      cancelled = true
      lenisRef.current?.destroy()
      lenisRef.current = null
    }
  }, [])

  useEffect(() => {
    // Pages that deep-link to a section handle their own scrolling.
    if (window.location.hash) return

    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])
}
